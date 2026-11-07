-- 漫画页清单：一个直接含图片的目录聚合为一本（medium='comic'），页按文件名自然序记录在子表。
-- 页不逐张登记成 asset；页 ID 是阅读位置与页级反馈的锚，重扫按相对路径更新次序、保留 ID。
CREATE TABLE IF NOT EXISTS comic_page (
  id INTEGER PRIMARY KEY,
  asset_id INTEGER NOT NULL REFERENCES asset(id) ON DELETE CASCADE,
  relative_path TEXT NOT NULL,
  ordinal INTEGER NOT NULL,
  UNIQUE(asset_id, relative_path)
);
CREATE INDEX IF NOT EXISTS ix_comic_page_asset_ordinal ON comic_page(asset_id, ordinal);
