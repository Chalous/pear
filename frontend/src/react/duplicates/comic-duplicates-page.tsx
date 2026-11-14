import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../../api';
import type { DuplicatesProps } from '../bundle';
import { Page } from '../components/page';
import { cardClass } from '../components/card';
type Book = { id: number; name: string; creator: string | null; path: string; location: string };
type Pair = { files: Book[]; similarity: number; reason: string; author_status: string };
export function DuplicatesPage({ openItem }: DuplicatesProps) {
  const query = useQuery({ queryKey: ['comic-duplicates'], queryFn: ({ signal }) =>
    apiGet<{ pairs: Pair[]; total: number }>('/api/duplicates', signal) });
  return <Page>
    <h2 className="text-title-2-semibold">可能重复的漫画</h2>
    <p>忽略方括号内容、标点和大小写，核对正文名与作者。卷数和话数中的数字参与比较。</p>
    {query.isError ? <button onClick={() => void query.refetch()}>读取失败，重试</button> :
      !query.data ? <p>正在比较漫画名称…</p> : <>
        <p>找到 {query.data.total} 对可能重复的漫画。请打开核对版本和内容。</p>
        {query.data.pairs.map(pair => <section key={pair.files.map(book => book.id).join('-')} className={cardClass()}>
          <p>{pair.reason} · {pair.author_status} · 名称相似度 {Math.round(pair.similarity * 100)}%</p>
          {pair.files.map(book => <div key={book.id} className="py-2">
            <button onClick={() => openItem(book.id)}>{book.name}</button>
            <p>作者：{book.creator || '未取得'} · {book.location}</p>
            <p className="break-all">{book.path}</p>
          </div>)}
        </section>)}
      </>}
  </Page>;
}
