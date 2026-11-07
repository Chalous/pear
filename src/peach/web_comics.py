"""漫画的网页入口：一本的页清单与阅读进度的记账。

页清单只按作品 ID 取，页的 URL 由服务端按页 ID 生成，浏览器不提交磁盘路径。
取图走 `routes_media` 的 `/comic-image`；目录临时离线时清单报「目录不可用」，
馆藏与记录都不动。重扫保留页 ID，URL 与进度因此跨重扫稳定：清单顺带给出
上次读到的位置（页在清单里的下标），阅读器开局就落在那一页。
"""
from __future__ import annotations

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
