import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../../api';
import { Page } from '../components/page';
import { cardClass } from '../components/card';
import { ReadingHistory } from '../taste/reading-history';
type Stats = { books: number; pages: number; read_books: number; read_pages: number;
  liked_books: number; whole_liked_books: number; liked_pages: number; reading_days: number };
export function ComicStatsPage() {
  const offset = new Date().getTimezoneOffset();
  const query = useQuery({ queryKey: ['comic-stats', offset], queryFn: ({ signal }) =>
    apiGet<Stats>('/api/stats?offset=' + offset, signal) });
  if (query.isError) return <Page><button onClick={() => void query.refetch()}>统计读取失败，重试</button></Page>;
  if (!query.data) return <Page><p>正在统计漫画…</p></Page>;
  const data = query.data;
  return <Page>
    <section className={cardClass()}>
      <h2 className="text-title-2-semibold">漫画馆藏与阅读</h2>
      <div className="inline-grid gap-4 sm:grid-cols-3">
        <div><h3>馆藏</h3><p>{data.books} 本 · {data.pages} 页</p></div>
        <div><h3>阅读</h3><p>{data.read_books} 本 · {data.read_pages} 页 · {data.reading_days} 天</p></div>
        <div><h3>喜欢</h3><p>{data.liked_books} 本有喜欢标记 · {data.liked_pages} 页</p>
          <p>其中整本喜欢 {data.whole_liked_books} 本</p><a href="/flagged">查看喜欢的漫画</a></div>
      </div>
      <p className="text-caption-1-regular text-text-secondary">阅读页数按实际显示过的页去重，喜欢页数按有效的页标记去重。整本喜欢单独计数。阅读痕迹从启用记录后开始统计。</p>
    </section>
    <ReadingHistory />
  </Page>;
}
