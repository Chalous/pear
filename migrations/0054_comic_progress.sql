-- 漫画阅读进度：一本一行，最后读到的页按页 ID 记账。
-- 页 ID 跨重扫稳定（0053 按相对路径保留），进度因此不随补图、改名失效；
-- 页行仍被进度引用时，重扫不删（失踪页保留判据在 comics.sync_pages）。
-- viewed_at 是客户端记住页面的时刻（毫秒）：防快速翻页时迟到的旧位置覆盖较新的位置。
CREATE TABLE IF NOT EXISTS comic_progress (
  asset_id INTEGER PRIMARY KEY REFERENCES asset(id) ON DELETE CASCADE,
  page_id INTEGER NOT NULL REFERENCES comic_page(id),
  viewed_at INTEGER NOT NULL
);
