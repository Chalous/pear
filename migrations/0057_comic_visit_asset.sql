-- 阅读页统计和推荐按漫画查询轨迹。
CREATE INDEX IF NOT EXISTS comic_visit_asset_page ON comic_visit(asset_id,first_page,last_page);
