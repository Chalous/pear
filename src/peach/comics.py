"""漫画：一个直接含支持图片的目录是一本，页按文件名自然序排列。

扫描（`scan.py`）把这样的目录聚合为一条 `medium='comic'` 的 `asset`：账本路径是目录
本身，沿用 Windows 形态，读取侧照走 `platform.translate_ledger_path`。页不逐张登记成
asset——按单文件登记会把同一本书拆成几十个「图片」作品，资源同步的失踪清理也会把
一本拆散。页记在 `comic_page` 子表里，`(asset_id, relative_path)` 唯一：重扫按相对路径
更新次序、保留页 ID，页 ID 是后面阅读位置与页级反馈的锚（第 2 轮起用）。

读取侧只认 ID：清单按次序返回页 ID 与 URL，取图在服务端把页 ID 解析回实际路径并
验证授权根归属，浏览器不提交磁盘路径。目录临时离线时清单报「目录不可用」，
馆藏与记录都不动。
"""
from __future__ import annotations

import os
import re
from pathlib import PureWindowsPath

from .media import MediaOffline, MediaUnavailable
from .platform import is_unmapped, root_online, root_status, translate_ledger_path, within_root

#: 第一轮支持的页图格式；GIF、BMP 等其余图片仍按通用文件登记，不进页清单。
COMIC_PAGE_EXTENSIONS = frozenset({".jpg", ".jpeg", ".png", ".webp"})

#: 页图扩展名对应的响应类型。
PAGE_CONTENT_TYPES = {
    ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp",
}

_DIGITS = re.compile(r"(\d+)")

#: 目录离线时清单端点给人的那句；阅读器与详情页用它，别处不重复措辞。
OFFLINE_MESSAGE = "目录不可用"


def book_name(ledger_dir: str) -> str:
    """书名取目录自己的名字；扫描根本身就是一本而目录名缺字（盘根）时用盘符。"""
    pure = PureWindowsPath(ledger_dir)
    return pure.name or pure.drive or "漫画"


def is_comic_page_name(name: str) -> bool:
    """文件名是否为第一轮支持的页图格式。"""
    return os.path.splitext(name)[1].lower() in COMIC_PAGE_EXTENSIONS


def natural_key(name: str) -> tuple:
    """文件名自然序：数字段按数值比，其余按 casefold 比，`1.jpg < 2.jpg < 10.jpg`。

    只用于同目录页之间的相对次序，段结构不一致的名字也能得到稳定结果。
    """
    return tuple((1, int(part), "") if part.isdigit() else (0, 0, part.casefold())
                 for part in _DIGITS.split(name) if part)


def page_content_type(name: str) -> str:
    return PAGE_CONTENT_TYPES.get(os.path.splitext(name)[1].lower(), "image/jpeg")


def sync_pages(connection, asset_id: int, pages: dict[str, tuple[int, str]]) -> None:
    """把一个目录里的页同步进 `comic_page`，然后提交。

    `pages` 按文件名给（大小, mtime 日期）；次序由 `natural_key` 现算。已有页按
    casefold 对上：相对路径只在大小写变化时改写，页 ID 不变。盘上不再有的页删掉——
    调用方保证目录刚被成功列举过，离线目录不会走到这里。仍被阅读进度引用的页例外：
    行留着，文件回来了按 casefold 接回同一个 ID，进度无损；清单里那页取不到图就
    显示「图片取不到」，翻走后进度自然挪到新页。
    """
    existing = {row[0].casefold(): (int(row[1]), row[0]) for row in connection.execute(
        "SELECT relative_path,id FROM comic_page WHERE asset_id=?", (asset_id,))}
    for ordinal, name in enumerate(sorted(pages, key=natural_key), 1):
        key = name.casefold()
        if key in existing:
            connection.execute("UPDATE comic_page SET relative_path=?,ordinal=? WHERE id=?",
                               (name, ordinal, existing[key][0]))
        else:
            connection.execute(
                "INSERT INTO comic_page(asset_id,relative_path,ordinal) VALUES(?,?,?)",
                (asset_id, name, ordinal))
    present = {name.casefold() for name in pages}
    anchored = anchored_page_ids(connection, asset_id)
    for key, (page_id, _spelling) in existing.items():
        if key not in present and page_id not in anchored:
            connection.execute("DELETE FROM comic_page WHERE id=?", (page_id,))
    connection.commit()


def anchored_page_ids(connection, asset_id: int) -> set[int]:
    """仍被个人记录引用的页：阅读进度加上有效与已撤销的反馈事件。

    事件行留着作历史（撤销不删行），被任一事件指过的页也就都留住；文件回来后
    按 casefold 接回同一 ID，历史详情的回跳不失效。
    """
    anchored = {int(row[0]) for row in connection.execute(
        "SELECT page_id FROM comic_progress WHERE asset_id=?", (asset_id,))}
    anchored.update(int(row[0]) for row in connection.execute(
        "SELECT first_page_id FROM comic_event WHERE asset_id=? AND first_page_id IS NOT NULL",
        (asset_id,)))
    anchored.update(int(row[0]) for row in connection.execute(
        "SELECT last_page_id FROM comic_event WHERE asset_id=? AND last_page_id IS NOT NULL",
        (asset_id,)))
    return anchored


def progress_page(connection, asset_id: int) -> int | None:
    """最后读到的页 ID；这本书还没读过返回 None。"""
    row = connection.execute(
        "SELECT page_id FROM comic_progress WHERE asset_id=?", (asset_id,)).fetchone()
    return int(row[0]) if row is not None else None


def save_progress(connection, asset_id: int, page_id: int, viewed_at: int) -> bool:
    """把「最后读的页」记成 `page_id`，然后提交。页不属于这本书就不记。

    `viewed_at` 是客户端记下这一页的时刻（毫秒）。快速翻页时早先的保存可能后到，
    只认更大的时刻：两个窗口看同一本书时，也是后合上的那窗说了算。
    """
    if connection.execute(
            "SELECT 1 FROM comic_page WHERE id=? AND asset_id=?", (page_id, asset_id),
    ).fetchone() is None:
        return False
    connection.execute(
        "INSERT INTO comic_progress(asset_id,page_id,viewed_at) VALUES(?,?,?) "
        "ON CONFLICT(asset_id) DO UPDATE SET page_id=excluded.page_id,viewed_at=excluded.viewed_at "
        "WHERE excluded.viewed_at > comic_progress.viewed_at",
        (asset_id, page_id, viewed_at))
    connection.commit()
    return True


def event_page_ids(connection, asset_id: int, first_page_id: int | None, last_page_id: int | None):
    """把事件范围规整成「两端页 ID」或整本的 `(None, None)`；两端不属于同一本、
    次序颠倒或只有一端时返回 None，调用方拒绝这条事件。"""

    def belongs(page_id: int) -> bool:
        return connection.execute(
            "SELECT 1 FROM comic_page WHERE id=? AND asset_id=?", (page_id, asset_id),
        ).fetchone() is not None

    if (first_page_id is None) != (last_page_id is None):
        return None
    if first_page_id is None:
        return None, None
    if not belongs(first_page_id) or not belongs(last_page_id):
        return None
    ordinals = {int(row["id"]): int(row["ordinal"]) for row in page_rows(connection, asset_id)}
    if ordinals.get(first_page_id, 0) > ordinals.get(last_page_id, 0):
        return None
    return first_page_id, last_page_id


def record_event(connection, asset_id: int, event_id: str, kind: str, page_ids: tuple[int | None, int | None],
                 reason: str | None, session_id: str | None, occurred_at: int) -> bool:
    """插入一条反馈事件并提交；同 ID 重发不重复记账也不重复计数。

    高潮事件在同一事务里给 `asset.o_count` 加一：卡片角标、排序与口味统计读的是
    这一列，基数（漫画事件之前就有的值）原样保留。
    """
    inserted = connection.execute(
        "INSERT OR IGNORE INTO comic_event(id,asset_id,kind,first_page_id,last_page_id,"
        "reason,session_id,occurred_at) VALUES(?,?,?,?,?,?,?,?)",
        (event_id, asset_id, kind, page_ids[0], page_ids[1], reason, session_id, occurred_at),
    ).rowcount
    if inserted and kind == "o":
        connection.execute(
            "UPDATE asset SET o_count=COALESCE(o_count,0)+1 WHERE id=?", (asset_id,))
    connection.commit()
    return bool(inserted)


def undo_event(connection, event_id: str, undone_at: int) -> bool:
    """把事件标成已撤销并提交；已撤销过的再撤销不动合计。返回这次是否真的撤销了。"""
    row = connection.execute(
        "SELECT asset_id,kind,undone_at FROM comic_event WHERE id=?", (event_id,)).fetchone()
    if row is None or row["undone_at"] is not None:
        return False
    connection.execute("UPDATE comic_event SET undone_at=? WHERE id=?", (undone_at, event_id))
    if row["kind"] == "o":
        connection.execute(
            "UPDATE asset SET o_count=MAX(COALESCE(o_count,0)-1,0) WHERE id=?",
            (int(row["asset_id"]),))
    connection.commit()
    return True


def event_rows(connection, asset_id: int) -> list:
    """一本的反馈事件，新发生的在前；范围里带上页序号，历史详情据此回跳。"""
    return list(connection.execute(
        "SELECT e.id,e.kind,e.reason,e.occurred_at,e.undone_at,"
        "f.id AS first_page_id,f.ordinal AS first_ordinal,"
        "l.id AS last_page_id,l.ordinal AS last_ordinal "
        "FROM comic_event e "
        "LEFT JOIN comic_page f ON f.id=e.first_page_id "
        "LEFT JOIN comic_page l ON l.id=e.last_page_id "
        "WHERE e.asset_id=? ORDER BY e.occurred_at DESC, e.id", (asset_id,)))


def comic_asset(connection, asset_id: int):
    """漫画那条 asset 行；不是漫画或已处置（回收站、已消失）时返回 None。"""
    row = connection.execute(
        "SELECT id,name,medium,location,path,disposal FROM asset WHERE id=?", (asset_id,)).fetchone()
    if row is None or row["medium"] != "comic" or row["disposal"] is not None:
        return None
    return row


def page_rows(connection, asset_id: int) -> list:
    """一本的页，按次序。"""
    return list(connection.execute(
        "SELECT id,relative_path,ordinal FROM comic_page WHERE asset_id=? ORDER BY ordinal, id",
        (asset_id,)))


def page_count(connection, asset_id: int) -> int | None:
    """详情页要的页数；不是漫画返回 None。"""
    row = connection.execute("SELECT medium FROM asset WHERE id=?", (asset_id,)).fetchone()
    if row is None or row["medium"] != "comic":
        return None
    return int(connection.execute(
        "SELECT COUNT(*) FROM comic_page WHERE asset_id=?", (asset_id,)).fetchone()[0])


def directory_status(asset_path: str) -> str:
    """书目录在本机的可读状态；空目录可读也算在线，判据与扫描根同一套。"""
    local = translate_ledger_path(asset_path)
    if is_unmapped(local):
        return "unavailable"
    return root_status(local)


def _case_insensitive_match(parent, name: str) -> str | None:
    """目录列举里的实际拼写；来源盘大小写与账本不一致时接住。"""
    try:
        for entry in os.scandir(parent):
            if entry.name.casefold() == name.casefold():
                return entry.name
    except OSError:
        return None
    return None


def page_file(connection, allowed_roots, page_id: int):
    """把页 ID 解析回本机文件，路径授权与存在性检查与 `FilesystemBackend` 同一套。

    来源整体不可达抛 `MediaOffline`（路由回 503），单个文件缺失抛 `MediaUnavailable`
    （404）；页 ID 不存在或不属于在库漫画同样是后者。
    """
    row = connection.execute(
        "SELECT p.relative_path,a.path AS dir FROM comic_page p "
        "JOIN asset a ON a.id=p.asset_id WHERE p.id=? AND a.medium='comic' "
        "AND a.disposal IS NULL", (page_id,)).fetchone()
    if row is None:
        raise MediaUnavailable(page_id)
    local_dir = translate_ledger_path(row["dir"])
    if is_unmapped(local_dir):
        raise MediaOffline(page_id, str(local_dir.anchor))
    name = row["relative_path"]
    page = local_dir / name
    if not any(within_root(page, root) for root in allowed_roots):
        raise MediaUnavailable(page_id)
    if page.is_file():
        return page
    matched = _case_insensitive_match(local_dir, name)
    if matched is not None and (local_dir / matched).is_file():
        return local_dir / matched
    if not root_online(local_dir):
        raise MediaOffline(page_id, str(local_dir.anchor))
    raise MediaUnavailable(page_id)
