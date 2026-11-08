-- 漫画页级反馈事件：喜欢与高潮按事件记账，页 ID 是锚，重扫保留被引用的页。
-- id 由客户端生成（UUID）：同一次点击的网络重发只记一条，撤销也指向同一个 ID。
-- 首尾页都为空表示整本；都填表示页或页段（两端页必须属于同一本）。undone_at 非空即已撤销，
-- 合计与历史都不再算它，行留着作历史。
CREATE TABLE IF NOT EXISTS comic_event (
  id TEXT PRIMARY KEY,
  asset_id INTEGER NOT NULL REFERENCES asset(id) ON DELETE CASCADE,
  kind TEXT NOT NULL CHECK(kind IN ('like','o')),
  first_page_id INTEGER REFERENCES comic_page(id) ON DELETE SET NULL,
  last_page_id INTEGER REFERENCES comic_page(id) ON DELETE SET NULL,
  reason TEXT,
  session_id TEXT,
  occurred_at INTEGER NOT NULL,
  undone_at INTEGER
);
CREATE INDEX IF NOT EXISTS ix_comic_event_asset ON comic_event(asset_id, kind, undone_at);

-- 版本号触发器：0038 起的新表要在自己的迁移里挂触发器与预置行，聚合缓存靠它感知进程外的
-- 写入（重扫、CLI、账本同步都直接 sqlite3.connect，服务看不见）。这里一并补上 0053/0054
-- 建表时漏挂的 comic_page 与 comic_progress 两张——已应用过旧迁移的实例也能由此补齐。
CREATE TRIGGER IF NOT EXISTS rev_comic_page_insert AFTER INSERT ON comic_page BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_page';
END;
CREATE TRIGGER IF NOT EXISTS rev_comic_page_update AFTER UPDATE ON comic_page BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_page';
END;
CREATE TRIGGER IF NOT EXISTS rev_comic_page_delete AFTER DELETE ON comic_page BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_page';
END;
CREATE TRIGGER IF NOT EXISTS rev_comic_progress_insert AFTER INSERT ON comic_progress BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_progress';
END;
CREATE TRIGGER IF NOT EXISTS rev_comic_progress_update AFTER UPDATE ON comic_progress BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_progress';
END;
CREATE TRIGGER IF NOT EXISTS rev_comic_progress_delete AFTER DELETE ON comic_progress BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_progress';
END;
CREATE TRIGGER IF NOT EXISTS rev_comic_event_insert AFTER INSERT ON comic_event BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_event';
END;
CREATE TRIGGER IF NOT EXISTS rev_comic_event_update AFTER UPDATE ON comic_event BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_event';
END;
CREATE TRIGGER IF NOT EXISTS rev_comic_event_delete AFTER DELETE ON comic_event BEGIN
  UPDATE ledger_revision SET n=n+1 WHERE tbl='comic_event';
END;

INSERT INTO ledger_revision(tbl) VALUES
  ('comic_page'),
  ('comic_progress'),
  ('comic_event');
