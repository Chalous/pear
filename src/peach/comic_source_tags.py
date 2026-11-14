"""浏览器采集的漫画标签候选；来源与原词随复核产物保留。"""
from __future__ import annotations

import hashlib
import json
import time
from urllib.parse import urlsplit, urlunsplit

from filelock import FileLock

from .review_csv import read_rows, write_rows
from .entities import upsert_asset_entity
from .field_owners import review_owner, write_owned_fields
from . import media_identity, settings_file

CATEGORY = 'comic_source_tags'
FIELDS = ('item_key', 'asset_id', 'name', 'source_url', 'tags', 'creator', 'current_creator', 'evidence', 'collected_at')


def candidate_path(contract):
    return contract.candidate_root / 'comic-source-tags-candidate-browser.csv'


def _candidate_input(body):
    """验证来源与作者、标签载荷，返回可写入候选文件的值。"""
    url = urlsplit(str(body.get('source_url') or '').strip())
    if url.scheme not in {'http', 'https'} or not url.hostname or url.username or url.password:
        raise ValueError('请填写不含登录信息的来源网页地址')
    source_url = urlunsplit((url.scheme, url.netloc, url.path, url.query, ''))
    creator = body.get('creator', '')
    if not isinstance(creator, str) or len(creator.strip()) > 200:
        raise ValueError('作者须为不超过 200 字的名称')
    creator = creator.strip()
    raw = body.get('tags')
    if not isinstance(raw, list) or len(raw) > 200 or (not raw and not creator):
        raise ValueError('请填写作者或 1 至 200 个标签')
    if any(not isinstance(tag, str) or not tag.strip() or len(tag.strip()) > 80 or '|' in tag for tag in raw):
        raise ValueError('每个标签须为 1 至 80 个字符，不能包含竖线')
    tags = sorted(set(tag.strip() for tag in raw))
    evidence = str(body.get('evidence') or '').strip()
    if len(evidence) > 2000 or len(source_url) > 2000:
        raise ValueError('来源地址或匹配说明过长')
    return source_url, creator, tags, evidence


def submit(contract, body):
    asset_id = int(body.get('id') or 0)
    source_url, creator, tags, evidence = _candidate_input(body)
    with contract.read_connection() as connection:
        asset = connection.execute("SELECT name,creator FROM asset WHERE id=? AND medium='comic' AND disposal IS NULL", (asset_id,)).fetchone()
        if asset is None:
            raise ValueError('漫画不存在或已移出馆藏')
    identity = json.dumps([asset_id, source_url, tags] + ([creator] if creator else []), ensure_ascii=False, separators=(',', ':'))
    key = hashlib.sha256(identity.encode()).hexdigest()
    path = candidate_path(contract)
    path.parent.mkdir(parents=True, exist_ok=True)
    with FileLock(str(path) + '.lock', timeout=10):
        rows = read_rows(path, missing_ok=True)
        saved = next((row for row in rows if (row['asset_id'], row['source_url'], row['tags'], row.get('creator', ''))
                      == (str(asset_id), source_url, '|'.join(tags), creator)), None)
        if saved:
            key = saved['item_key']
        else:
            rows.append(dict(item_key=key, asset_id=asset_id, name=asset['name'], source_url=source_url,
                             tags='|'.join(tags), creator=creator, current_creator=asset['creator'] or '', evidence=evidence,
                             collected_at=time.strftime('%Y-%m-%dT%H:%M:%SZ', time.gmtime())))
            write_rows(path, FIELDS, rows, atomic=True)
    contract.cache_bust()
    return {'ok': True, 'item_key': key, 'status': 'candidate'}


def approve(contract, connection, item_key, now):
    row = next((row for row in read_rows(candidate_path(contract), missing_ok=True) if row['item_key'] == item_key), None)
    if row is None:
        raise ValueError('所选来源标签不在当前批次，无法批准')
    asset_id = int(row['asset_id'])
    if connection.execute("SELECT 1 FROM asset WHERE id=? AND medium='comic' AND disposal IS NULL", (asset_id,)).fetchone() is None:
        raise ValueError('漫画不存在或已移出馆藏')
    source = 'review:comic-source:' + item_key
    creator = row.get('creator', '')
    if creator:
        current = connection.execute('SELECT creator FROM asset WHERE id=?', (asset_id,)).fetchone()[0] or ''
        if current not in {row.get('current_creator', ''), creator}:
            raise ValueError('漫画作者已变化，请重新采集并复核')
        if current and current != creator:
            raise ValueError('已有不同作者，请通过资料编辑核对，不直接覆盖')
        write_owned_fields(connection, [asset_id], {'creator': creator}, review_owner('comic-source-' + item_key))
        upsert_asset_entity(connection, kind='creator', name=creator, asset_id=asset_id, role='creator',
            source=source, confidence=1.0, metadata={'source_url': row['source_url'], 'review_item': item_key}, now=now)
    for tag in filter(None, row['tags'].split('|')):
        entity_id = upsert_asset_entity(connection, kind='tag', name=tag, asset_id=asset_id, role='tag',
            source=source, confidence=1.0, metadata={'source_url': row['source_url'], 'original_tag': tag, 'review_item': item_key}, now=now)
        canonical = connection.execute('SELECT canonical_name FROM entity WHERE id=?', (entity_id,)).fetchone()[0]
        connection.execute('INSERT OR IGNORE INTO asset_tag(asset_id,tag,confidence,source) VALUES(?,?,1.0,?)', (asset_id, canonical, source))
    return 1


def queue(contract, args):
    after = max(0, int(args.get('after') or 0))
    rows = read_rows(candidate_path(contract), missing_ok=True)
    submitted = {int(row['asset_id']) for row in rows}
    with contract.read_connection() as connection:
        assets = connection.execute("SELECT a.id,a.name,a.location,a.path,"
            "(SELECT count(*) FROM comic_page p WHERE p.asset_id=a.id) AS pages "
            "FROM asset a WHERE a.medium='comic' AND a.disposal IS NULL AND a.id>? ORDER BY a.id", (after,)).fetchall()
    config = settings_file.active()
    pending = []
    for row in assets:
        if row['id'] in submitted:
            continue
        item = dict(row)
        item.update(media_identity.ownership(config, item.pop('path')))
        item['detail_url'] = f"/assets/{item['id']}"
        item['cover_url'] = f"/comic-cover?asset={item['id']}"
        pending.append(item)
        if len(pending) == 51:
            break
    return {'items': pending[:50], 'has_more': len(pending) > 50,
            'next_after': pending[49]['id'] if len(pending) > 50 else None}
