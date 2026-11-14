-- 每次实际显示的一屏；页号按阅读时的顺序保存，重扫后仍可还原当时的跳页。
CREATE TABLE comic_visit (
    id TEXT PRIMARY KEY,
    asset_id INTEGER NOT NULL REFERENCES asset(id) ON DELETE CASCADE,
    session TEXT NOT NULL,
    viewed_at INTEGER NOT NULL,
    first_page INTEGER NOT NULL,
    last_page INTEGER NOT NULL
);
CREATE INDEX comic_visit_time ON comic_visit(viewed_at, id);
