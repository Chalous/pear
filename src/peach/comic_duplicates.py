"""漫画标题与作者相似度，只给出需人工核对的配对。"""
from __future__ import annotations
from difflib import SequenceMatcher
import re
import unicodedata


def normalize(value):
    text = unicodedata.normalize('NFKC', value or '').casefold()
    text = re.sub(r'\[[^\]]*\]|【[^】]*】', '', text)
    return ''.join(c for c in text if c.isalnum())


def possible_pairs(rows):
    books = [(dict(row), normalize(row['name']), normalize(row['creator'])) for row in rows]
    result = []
    for index, (left, title, author) in enumerate(books):
        if not title:
            continue
        for right, other, writer in books[index+1:]:
            if not other or (author and writer and author != writer):
                continue
            # 不同卷话即使只差一个数字也不能按模糊标题归为同书。
            if re.findall(r'\d+', title) != re.findall(r'\d+', other):
                continue
            similarity = SequenceMatcher(None, title, other, autojunk=False).ratio()
            same_author = bool(author and writer)
            if title != other and not (same_author and min(len(title), len(other)) >= 5 and similarity >= .9):
                continue
            result.append(dict(files=[left, right], similarity=round(similarity, 3),
                               reason='正文名一致' if title == other else '作者一致、正文名相近',
                               author_status='作者一致' if same_author else '作者信息不足，请核对'))
    return sorted(result, key=lambda pair: (-pair['similarity'], pair['files'][0]['id'], pair['files'][1]['id']))


def q_comic_duplicates(contract, args):
    with contract.read_connection() as connection:
        rows = connection.execute("SELECT id,name,creator,path,location FROM asset "
                                  "WHERE medium='comic' AND disposal IS NULL ORDER BY id").fetchall()
    pairs = possible_pairs(rows)
    return dict(pairs=pairs, total=len(pairs), groups=[], files=0, reclaimable=0)
