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
