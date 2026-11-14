"""漫画推荐：显式反馈建立口味，阅读时间控制重访，日种子提供探索。"""
from __future__ import annotations
from collections import Counter, defaultdict
from datetime import datetime, timezone
import hashlib
import math

from .comic_duplicates import normalize

DEFAULT_WEIGHTS = (60, 15, 20, 5)


def recommend(books, tags, events, *, now, weights=DEFAULT_WEIGHTS, batch=0, limit=12, exclude=()):
    total = sum(weights)
    weights = [value / total for value in weights]
    profiles, authors = defaultdict(float), defaultdict(float)
    feedback = defaultdict(lambda: [0, 0])
    for event in events:
        if event['kind'] == 'like' and event['first_page_id'] is None:
            feedback[event['asset_id']][0] = 5
        else:
            feedback[event['asset_id']][1] += 3 if event['kind'] == 'o' else 1
    frequencies = Counter(tag for book in books for tag in tags.get(book['id'], set()))
    idf = {tag: 1 + math.log((1 + len(books)) / (1 + count)) for tag, count in frequencies.items()}
    for book in books:
        whole, pages = feedback[book['id']]
        strength = whole + min(pages, 6)
        book_tags = tags.get(book['id'], set())
        for tag in book_tags:
            profiles[tag] += strength / len(book_tags) * idf[tag]
        author = normalize(book['creator'])
        if author:
            authors[author] += strength
    profile_norm = math.sqrt(sum(v*v for v in profiles.values()))
    max_author = max(authors.values(), default=0)
    ranked = []
    day = datetime.fromtimestamp(now / 1000, timezone.utc).date().isoformat()
    for book in books:
        if book['id'] in exclude:
            continue
        book_tags = tags.get(book['id'], set())
        norm = math.sqrt(sum(idf[tag]**2 for tag in book_tags))
        affinity = sum(profiles[tag]*idf[tag] for tag in book_tags) / (profile_norm*norm) if profile_norm and norm else 0
        author = normalize(book['creator'])
        author_score = authors[author] / max_author if max_author and author else 0
        last = book['last_read']
        days = max(0, (now-last)/86400000) if last is not None else None
        freshness = min(days/30, 1) if days is not None else 1
        seed = hashlib.sha256(f"{day}:{batch}:{book['id']}".encode()).digest()
        exploration = int.from_bytes(seed[:4], 'big') / (2**32-1)
        # 反馈稀少的作品获得更多探索机会。
        exploration *= 1 / (1 + feedback[book['id']][0] + min(feedback[book['id']][1], 6))
        components = [affinity, author_score, freshness, exploration]
        score = sum(w*v for w,v in zip(weights, components))
        matched = sorted((t for t in book_tags if profiles[t]), key=lambda t: (-profiles[t], t))[:3]
        reasons = _recommendation_reasons(matched, author_score, days)
        ranked.append({**dict(book), 'score': round(score, 6), 'reasons': reasons,
                       'components': dict(zip(('tags', 'author', 'interval', 'explore'), components)),
                       '_recent': days is not None and days < 1, '_author': author})
    ranked.sort(key=lambda row: (row['_recent'], -row['score'], row['id']))
    return _diverse_books(ranked, limit)


def _diverse_books(ranked, limit):
    """限制相邻作者和重复版本，保留推荐评分的先后顺序。"""
    result, identities = [], set()
    while ranked and len(result) < limit:
        index = next((i for i, row in enumerate(ranked) if not (len(result) >= 2 and row['_author']
                     and row['_author'] == result[-1]['_author'] == result[-2]['_author'])), None)
        if index is None:
            break
        row = ranked.pop(index)
        title = normalize(row['name'])
        identity = (title, row['_author']) if title else ('id', row['id'])
        if identity in identities:
            continue
        identities.add(identity)
        result.append(row)
    for row in result:
        row.pop('_recent')
        row.pop('_author')
    return result


def q_comic_recommendations(contract, args):
    import time
    try:
        weights = tuple(float(args.get(key, default)) for key, default in
                        zip(('tags', 'author', 'interval', 'explore'), DEFAULT_WEIGHTS))
        batch = int(args.get('batch', 0))
        exclude = {int(value) for value in args.get('exclude', '').split(',') if value}
        if len(exclude) > 500:
            raise ValueError
        if any(not math.isfinite(v) or not 0 <= v <= 100 for v in weights) or sum(weights) <= 0:
            raise ValueError
    except (TypeError, ValueError):
        return {'error': 'invalid'}
    with contract.read_connection() as db:
        db.execute('BEGIN')
        books = [dict(row) for row in db.execute("""
            SELECT a.id,a.name,a.creator,
                   max((SELECT max(viewed_at) FROM comic_visit v WHERE v.asset_id=a.id),
                       COALESCE((SELECT viewed_at FROM comic_progress p WHERE p.asset_id=a.id),0)) AS last_read
            FROM asset a WHERE a.medium='comic' AND a.disposal IS NULL
        """)]
        # SQLite 的标量 max 遇 NULL 返回 NULL，因此先取逐页记录，再补旧续读位置。
        for book in books:
            if book['last_read'] is None:
                old = db.execute('SELECT viewed_at FROM comic_progress WHERE asset_id=?', (book['id'],)).fetchone()
                book['last_read'] = old[0] if old else None
        tags = defaultdict(set)
        for row in db.execute("SELECT t.asset_id,t.tag FROM asset_tag t JOIN asset a ON a.id=t.asset_id "
                              "WHERE a.medium='comic' AND a.disposal IS NULL"):
            tags[row['asset_id']].add(row['tag'])
        events = list(db.execute("SELECT e.* FROM comic_event e JOIN asset a ON a.id=e.asset_id "
                                 "WHERE e.undone_at IS NULL AND a.medium='comic' AND a.disposal IS NULL"))
    return {'items': recommend(books, tags, events, now=int(time.time()*1000), weights=weights, batch=batch, exclude=exclude),
            'weights': dict(zip(('tags','author','interval','explore'), weights))}



def _recommendation_reasons(matched, author_score, days):
    reasons = []
    if matched:
        reasons.append('符合口味标签：' + '、'.join(matched))
    if author_score:
        reasons.append('喜欢过这位作者的作品')
    reasons.append('尚无阅读记录' if days is None else f'{int(days)} 天没读')
    return reasons
