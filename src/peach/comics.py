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
    调用方保证目录刚被成功列举过，离线目录不会走到这里。第 2 轮起仍被阅读记录引用的
    失踪页要走保留判据，在那之前直接删是安全的（本轮没有引用页的东西）。
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
    for key, (page_id, _spelling) in existing.items():
        if key not in present:
            connection.execute("DELETE FROM comic_page WHERE id=?", (page_id,))
    connection.commit()


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
