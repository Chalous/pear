"""漫画的网页读取入口：一本的页清单。

页清单只按作品 ID 取，页的 URL 由服务端按页 ID 生成，浏览器不提交磁盘路径。
取图走 `routes_media` 的 `/comic-image`；目录临时离线时清单报「目录不可用」，
馆藏与记录都不动。重扫保留页 ID，URL 因此跨重扫稳定。
"""
from __future__ import annotations

from . import comics


def q_comic_pages(contract, args):
    """一本漫画的页清单：按次序返回页 ID 与可访问 URL。

    `error` 取值：`not found` 没有这部漫画或不在库；`offline` 书目录暂时不可读。
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
        status = comics.directory_status(row["path"])
    if status != "ok":
        return {"id": asset_id, "name": row["name"], "error": "offline", "message": comics.OFFLINE_MESSAGE}
    return {
        "id": asset_id,
        "name": row["name"],
        "pages": [{"id": int(page["id"]), "ordinal": int(page["ordinal"]),
                   "url": f"/comic-image?page={int(page['id'])}"}
                  for page in pages],
    }
