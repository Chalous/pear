"""漫画的网页入口：一本的页清单、阅读进度的记账与页级反馈事件。

页清单只按作品 ID 取，页的 URL 由服务端按页 ID 生成，浏览器不提交磁盘路径。
取图走 `routes_media` 的 `/comic-image`；目录临时离线时清单报「目录不可用」，
馆藏与记录都不动。重扫保留页 ID，URL 与进度因此跨重扫稳定：清单顺带给出
上次读到的位置（页在清单里的下标），阅读器开局就落在那一页。

反馈事件（喜欢、高潮）按客户端给的事件 ID 记账：网络重发只记一条，撤销指向
同一个 ID。高潮在同一事务里同步作品 `o_count`，卡片角标与排序照旧读那一列。
"""
from __future__ import annotations

import time

from . import comics


def q_comic_pages(contract, args):
    """一本漫画的页清单：按次序返回页 ID 与可访问 URL，附上次读到的位置。

    `error` 取值：`not found` 没有这部漫画或不在库；`offline` 书目录暂时不可读。
    进度引用的页被删掉只剩行时（文件没回来）不给位置，开局落在第一页。
    """
    try:
        asset_id = int(args.get("id", "") or 0)
    except ValueError:
        return {"error": "not found"}
    if asset_id <= 0:
        return {"error": "not found"}
    with contract.read_connection() as connection:
        row = comics.comic_asset(connection, asset_id)
        if row is None:
            return {"error": "not found"}
        pages = comics.page_rows(connection, asset_id)
        anchored = comics.progress_page(connection, asset_id)
        status = comics.directory_status(row["path"])
    if status != "ok":
        return {"id": asset_id, "name": row["name"], "error": "offline", "message": comics.OFFLINE_MESSAGE}
    payload = {
        "id": asset_id,
        "name": row["name"],
        "pages": [{"id": int(page["id"]), "ordinal": int(page["ordinal"]),
                   "url": f"/comic-image?page={int(page['id'])}"}
                  for page in pages],
    }
    if anchored is not None:
        index = next((at for at, page in enumerate(payload["pages"]) if page["id"] == anchored), None)
        if index is not None:
            payload["resume"] = {"index": index}
    return payload


def w_comic_progress(contract, body):
    """记下最后读的页。书不在库报 `not found`；页不属于这本书记不住，回 `ok: False`。

    清单缓存跟着这簿写动作一起作废：同一本再开，`resume` 说的才是当下那次的位置。
    """
    try:
        asset_id = int(body.get("asset") or 0)
        page_id = int(body.get("page") or 0)
        viewed_at = int(body.get("viewed_at") or 0)
    except (TypeError, ValueError):
        return {"error": "not found"}
    if asset_id <= 0 or page_id <= 0 or viewed_at <= 0:
        return {"error": "not found"}
    with contract.write_transaction() as connection:
        if comics.comic_asset(connection, asset_id) is None:
            return {"error": "not found"}
        saved = comics.save_progress(connection, asset_id, page_id, viewed_at)
    contract.cache_bust()
    return {"ok": saved}


#: 事件 ID 的取值范围：客户端生成的 UUID 有 36 位，放宽到 100 收住滥用。
_EVENT_ID_LIMIT = 100
#: 理由长度与作品级喜欢同一道闸（`web_activity.w_preference`）。
_EVENT_REASON_LIMIT = 2000


def _event_text(body, key: str, limit: int) -> str | None:
    """可选文本字段：缺省、空串都归一成 None，超长拒绝。"""
    value = body.get(key)
    if value is None or value == "":
        return None
    if not isinstance(value, str) or len(value) > limit:
        raise ValueError(key)
    return value


def _event_int(body, key: str) -> int | None:
    value = body.get(key)
    if value is None or value == "":
        return None
    try:
        page_id = int(value)
    except (TypeError, ValueError):
        raise ValueError(key)
    return page_id if page_id > 0 else None


def q_comic_events(contract, args):
    """一本的反馈事件，新发生的在前；范围带页序号，历史详情据此回跳原图。

    目录离线也能看：记录属于账本，不属于来源盘。`error` 取值：`not found`。
    """
    try:
        asset_id = int(args.get("id", "") or 0)
    except ValueError:
        return {"error": "not found"}
    if asset_id <= 0:
        return {"error": "not found"}
    with contract.read_connection() as connection:
        row = comics.comic_asset(connection, asset_id)
        if row is None:
            return {"error": "not found"}
        events = comics.event_rows(connection, asset_id)
    return {"id": asset_id, "name": row["name"], "events": [
        {"id": event["id"], "kind": event["kind"], "reason": event["reason"],
         "occurred_at": int(event["occurred_at"]),
         "undone_at": int(event["undone_at"]) if event["undone_at"] is not None else None,
         "first": None if event["first_page_id"] is None else
                  {"id": int(event["first_page_id"]), "ordinal": int(event["first_ordinal"])},
         "last": None if event["last_page_id"] is None else
                 {"id": int(event["last_page_id"]), "ordinal": int(event["last_ordinal"])}}
        for event in events]}


def w_comic_event(contract, body):
    """记一条页级或整本的反馈事件。事件 ID 客户端给：网络重发只记一条。

    书不在库报 `not found`；参数不完整、两端页不属于同一本或次序颠倒报 `invalid`。
    高潮事件在同一事务里给作品 `o_count` 加一，回包含当前合计。
    """
    try:
        asset_id = int(body.get("asset") or 0)
        event_id = body.get("event")
        kind = body.get("kind")
        occurred_at = int(body.get("occurred_at") or 0)
        first_page = _event_int(body, "first_page")
        last_page = _event_int(body, "last_page")
        reason = _event_text(body, "reason", _EVENT_REASON_LIMIT)
        session_id = _event_text(body, "session", _EVENT_ID_LIMIT)
    except (TypeError, ValueError):
        return {"error": "invalid"}
    if (asset_id <= 0 or not isinstance(event_id, str) or not event_id.strip()
            or len(event_id) > _EVENT_ID_LIMIT or kind not in ("like", "o") or occurred_at <= 0):
        return {"error": "invalid"}
    with contract.write_transaction() as connection:
        if comics.comic_asset(connection, asset_id) is None:
            return {"error": "not found"}
        page_ids = comics.event_page_ids(connection, asset_id, first_page, last_page)
        if page_ids is None:
            return {"error": "invalid"}
        counted = comics.record_event(connection, asset_id, event_id.strip(), kind, page_ids,
                                      reason, session_id, occurred_at)
        o_count = int(connection.execute(
            "SELECT o_count FROM asset WHERE id=?", (asset_id,)).fetchone()["o_count"] or 0)
    contract.cache_bust()
    return {"ok": True, "counted": counted, "o_count": o_count}


def w_comic_event_undo(contract, body):
    """撤销一条反馈事件。同一个事件 ID 撤两遍只有第一遍生效，合计只减一次。"""
    event_id = body.get("event")
    if not isinstance(event_id, str) or not event_id.strip() or len(event_id) > _EVENT_ID_LIMIT:
        return {"error": "invalid"}
    undone_at = int(time.time() * 1000)
    with contract.write_transaction() as connection:
        if connection.execute(
                "SELECT 1 FROM comic_event WHERE id=?", (event_id.strip(),)).fetchone() is None:
            return {"error": "not found"}
        undone = comics.undo_event(connection, event_id.strip(), undone_at)
        asset_id = int(connection.execute(
            "SELECT asset_id FROM comic_event WHERE id=?", (event_id.strip(),)).fetchone()["asset_id"])
        o_count = int(connection.execute(
            "SELECT o_count FROM asset WHERE id=?", (asset_id,)).fetchone()["o_count"] or 0)
    contract.cache_bust()
    return {"ok": True, "undone": undone, "o_count": o_count}

def q_comic_taste(contract, args):
    """按作品汇总未撤销反馈，每本漫画在同一标签或作者下只计一次。"""
    with contract.read_connection() as connection:
        feedback = """
            WITH books AS (
                SELECT a.id, a.creator,
                       EXISTS(SELECT 1 FROM comic_progress p WHERE p.asset_id=a.id) AS read_book,
                       COUNT(CASE WHEN e.kind='like' THEN 1 END) AS likes,
                       COUNT(CASE WHEN e.kind='o' THEN 1 END) AS orgasms
                FROM asset a LEFT JOIN comic_event e ON e.asset_id=a.id AND e.undone_at IS NULL
                WHERE a.medium='comic' AND a.disposal IS NULL GROUP BY a.id
            )
        """
        connection.execute("BEGIN")
        totals = connection.execute(feedback + """
            SELECT COUNT(CASE WHEN read_book=1 THEN 1 END) AS read_books,
                   COUNT(CASE WHEN likes+orgasms>0 THEN 1 END) AS feedback_books,
                   COALESCE(SUM(likes),0) AS likes, COALESCE(SUM(orgasms),0) AS orgasms FROM books
        """).fetchone()
        def ranking(sql):
            return [dict(row) for row in connection.execute(feedback + sql)]
        tags = ranking("""
            SELECT t.tag AS name, COUNT(DISTINCT b.id) AS books FROM books b
            JOIN asset_tag t ON t.asset_id=b.id WHERE b.likes+b.orgasms>0
            GROUP BY t.tag ORDER BY books DESC,name LIMIT 20
        """)
        authors = ranking("""
            SELECT creator AS name, COUNT(*) AS books FROM books WHERE likes+orgasms>0
            AND trim(COALESCE(creator,''))<>'' GROUP BY creator ORDER BY books DESC,name LIMIT 20
        """)
    return {**dict(totals), "tags": tags, "authors": authors}


def w_comic_visit(contract, body):
    """以客户端事件编号去重，页的归属在同一事务内核实。"""
    try:
        asset, stamp = int(body['asset']), int(body['viewed_at'])
        pages = body['pages']
        event, session = body['id'], body['session']
        if (not all(isinstance(s, str) and 0 < len(s) <= 100 for s in (event, session))
                or not 0 < stamp < 2**53 or not isinstance(pages, list) or len(pages) not in (1, 2)
                or not all(type(p) is int for p in pages)):
            return {'error': 'invalid'}
    except (KeyError, ValueError, TypeError):
        return {'error': 'invalid'}
    with contract.write_transaction() as connection:
        if not comics.comic_asset(connection, asset):
            return {'error': 'not found'}
        ordinals = [connection.execute("SELECT ordinal FROM comic_page WHERE id=? AND asset_id=?",
                                       (p, asset)).fetchone() for p in pages]
        if not all(ordinals):
            return {'error': 'invalid'}
        connection.execute("INSERT OR IGNORE INTO comic_visit VALUES(?,?,?,?,?,?)",
                           (event, asset, session, stamp, ordinals[0][0], ordinals[-1][0]))
    return {'ok': True}


def q_comic_visits(contract, args):
    """按日和时间、事件编号游标读取，重名时间戳也能稳定续页。"""
    try:
        start, end = int(args['start']), int(args['end'])
        after = int(args.get('after', start))
        after_id = str(args.get('after_id', ''))
        limit = min(200, max(1, int(args.get('limit', 200))))
        if not 0 <= start < end < 2**53 or end-start > 26*3600000 or not start <= after < end:
            return {'error': 'invalid'}
    except (KeyError, ValueError, TypeError):
        return {'error': 'invalid'}
    with contract.read_connection() as connection:
        rows = connection.execute("""
            SELECT v.id, v.asset_id, a.name, v.session, v.viewed_at, v.first_page, v.last_page,
              (SELECT p.id FROM comic_page p WHERE p.asset_id=v.asset_id AND p.ordinal=v.first_page
               ORDER BY p.id LIMIT 1) AS page_id
            FROM comic_visit v JOIN asset a ON a.id=v.asset_id
            WHERE v.viewed_at>=? AND v.viewed_at<? AND (v.viewed_at,v.id)>(?,?)
            ORDER BY v.viewed_at,v.id LIMIT ?
        """, (start, end, after, after_id, limit+1)).fetchall()
        previous = connection.execute("SELECT max(viewed_at) FROM comic_visit WHERE viewed_at<?",
                                      (start,)).fetchone()[0]
    visible = rows[:limit]
    cursor = {'after': visible[-1]['viewed_at'], 'after_id': visible[-1]['id']} if len(rows)>limit else None
    return {'visits': [dict(row) for row in visible], 'previous': previous, 'next': cursor}


def q_comic_stats(contract, args):
    """汇总漫画、独立喜欢页与阅读页；日期按客户端传入的本地偏移计算。"""
    try:
        offset = int(args.get('offset', 0))
        if not -840 <= offset <= 840:
            return {'error': 'invalid'}
    except (TypeError, ValueError):
        return {'error': 'invalid'}
    with contract.read_connection() as db:
        db.execute('BEGIN')
        row = db.execute("""
            SELECT COUNT(*) AS books,
              COALESCE(SUM((SELECT COUNT(*) FROM comic_page p WHERE p.asset_id=a.id)),0) AS pages,
              COUNT(CASE WHEN EXISTS(SELECT 1 FROM comic_visit v WHERE v.asset_id=a.id) THEN 1 END) AS read_books,
              COUNT(CASE WHEN EXISTS(SELECT 1 FROM comic_event e WHERE e.asset_id=a.id
                AND e.kind='like' AND e.undone_at IS NULL) THEN 1 END) AS liked_books,
              COUNT(CASE WHEN EXISTS(SELECT 1 FROM comic_event e WHERE e.asset_id=a.id
                AND e.kind='like' AND e.undone_at IS NULL AND e.first_page_id IS NULL)
                THEN 1 END) AS whole_liked_books
            FROM asset a WHERE medium='comic' AND disposal IS NULL
        """).fetchone()
        pages = db.execute("""
            SELECT
              COUNT(CASE WHEN EXISTS(SELECT 1 FROM comic_visit v WHERE v.asset_id=p.asset_id
                AND p.ordinal BETWEEN v.first_page AND v.last_page) THEN 1 END) AS read_pages,
              COUNT(CASE WHEN EXISTS(
                SELECT 1 FROM comic_event e JOIN comic_page f ON f.id=e.first_page_id
                JOIN comic_page l ON l.id=e.last_page_id WHERE e.asset_id=p.asset_id
                AND e.kind='like' AND e.undone_at IS NULL AND p.ordinal BETWEEN f.ordinal AND l.ordinal
              ) THEN 1 END) AS liked_pages
            FROM comic_page p JOIN asset a ON a.id=p.asset_id WHERE a.medium='comic' AND a.disposal IS NULL
        """).fetchone()
        days = db.execute("""
            SELECT COUNT(DISTINCT date(v.viewed_at/1000,'unixepoch',?)) FROM comic_visit v
            JOIN asset a ON a.id=v.asset_id WHERE a.medium='comic' AND a.disposal IS NULL
        """, (f'{-offset:+d} minutes',)).fetchone()[0]
    return {**dict(row), **dict(pages), 'reading_days': days}


def w_comic_page_like(contract, body):
    """按页设置喜欢，保留旧页段中未被本次操作涉及的页。"""
    import uuid
    try:
        asset = int(body['asset'])
        pages = body['pages']
        liked = body['liked']
        operation = body['operation']
        if (not isinstance(pages, list) or not 1 <= len(pages) <= 2
                or any(type(p) is not int for p in pages) or type(liked) is not bool
                or not isinstance(operation, str) or not 1 <= len(operation) <= 60):
            return {'error': 'invalid'}
    except (ValueError, TypeError, KeyError):
        return {'error': 'invalid'}
    now = int(time.time()*1000)
    with contract.write_transaction() as db:
        if not comics.comic_asset(db, asset):
            return {'error': 'not found'}
        all_pages = list(db.execute("SELECT id,ordinal FROM comic_page WHERE asset_id=?", (asset,)))
        ordinals = {row['id']: row['ordinal'] for row in all_pages}
        if any(p not in ordinals for p in pages):
            return {'error': 'invalid'}
        events = list(db.execute("""
            SELECT e.*, f.ordinal AS first_ordinal,l.ordinal AS last_ordinal
            FROM comic_event e JOIN comic_page f ON f.id=e.first_page_id
            JOIN comic_page l ON l.id=e.last_page_id
            WHERE e.asset_id=? AND e.kind='like' AND e.undone_at IS NULL
        """, (asset,)))
        covered = set()
        last_event = None
        for event in events:
            selected = {p for p, ordinal in ordinals.items()
                        if event['first_ordinal'] <= ordinal <= event['last_ordinal']}
            covered.update(selected)
            if not liked and selected.intersection(pages):
                db.execute("UPDATE comic_event SET undone_at=? WHERE id=?", (now, event['id']))
                for page in selected.difference(pages):
                    db.execute("INSERT INTO comic_event(id,asset_id,kind,first_page_id,last_page_id,reason,session_id,occurred_at) "
                               "VALUES(?,?,'like',?,?,?,?,?)",
                               (str(uuid.uuid4()), asset, page, page, event['reason'], event['session_id'], event['occurred_at']))
        if liked:
            for page in pages:
                if page in covered:
                    continue
                event_id = operation + ':' + str(page)
                db.execute("INSERT OR IGNORE INTO comic_event(id,asset_id,kind,first_page_id,last_page_id,occurred_at) "
                           "VALUES(?,?,'like',?,?,?)", (event_id, asset, page, page, now))
                last_event = event_id
    contract.cache_bust()
    return {'ok': True, 'last_event': last_event}
