import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../../api';
import { Page } from '../components/page';
import { cardClass } from '../components/card';

type Rank = { name: string; books: number };
type Taste = { read_books: number; feedback_books: number; likes: number; orgasms: number; tags: Rank[]; authors: Rank[] };

function Ranking({ title, rows }: { title: string; rows: Rank[] }) {
  return <section className={cardClass()}>
    <h2 className="text-title-2-semibold">{title}</h2>
    {rows.length ? <ol>{rows.map(row => <li key={row.name} className="flex justify-between gap-3 py-1">
      <span>{row.name}</span><span>{row.books} 本</span>
    </li>)}</ol> : <p>暂无可统计的{title}。</p>}
  </section>;
}

export function ComicTastePage() {
  const query = useQuery({ queryKey: ['comic-taste'], queryFn: ({ signal }) => apiGet<Taste>('/api/comic-taste', signal) });
  if (query.isError) return <Page><p role="alert">读取漫画口味失败。<button onClick={() => void query.refetch()}>重试</button></p></Page>;
  if (!query.data) return <Page><p>正在读取漫画记录…</p></Page>;
  const data = query.data;
  return <Page>
    <section className={cardClass()}>
      <h2 className="text-title-2-semibold">漫画阅读与反馈</h2>
      <p>有阅读进度 {data.read_books} 本，有反馈 {data.feedback_books} 本。</p>
      <p>喜欢 {data.likes} 次，高潮 {data.orgasms} 次。</p>
    </section>
    <p>按留下过喜欢或高潮反馈的馆藏漫画本数排序，每本在同一项下计一次。展示前 20 项。</p>
    <Ranking title="标签" rows={data.tags} /><Ranking title="作者" rows={data.authors} />
  </Page>;
}
