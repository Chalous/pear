import { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { apiGet } from '../../api';
import { cardClass } from '../components/card';
import { openComicReader } from '../comics/comic-reader';
import { Button } from '@/components/base/buttons/button';

type Visit = { id: string; asset_id: number; name: string; session: string; viewed_at: number;
  first_page: number; last_page: number; page_id: number | null };
type Cursor = { after: number; after_id: string };
type History = { visits: Visit[]; previous: number | null; next: Cursor | null };
function localDate(date: Date) {
  return [date.getFullYear(), String(date.getMonth()+1).padStart(2,'0'), String(date.getDate()).padStart(2,'0')].join('-');
}
export function ReadingHistory() {
  const [day, setDay] = useState(() => localDate(new Date()));
  const [message, setMessage] = useState('');
  const [opening, setOpening] = useState(false);
  const start = new Date(day + 'T00:00:00');
  const end = new Date(start);
  end.setDate(end.getDate()+1);
  const query = useInfiniteQuery({
    queryKey: ['comic-visits', day], initialPageParam: null as Cursor | null,
    queryFn: ({ signal, pageParam }) => apiGet<History>('/api/comic-visits?' + new URLSearchParams({
      start: String(start.getTime()), end: String(end.getTime()), limit: '200',
      ...(pageParam ? { after: String(pageParam.after), after_id: pageParam.after_id } : {}),
    }), signal),
    getNextPageParam: page => page.next ?? undefined, refetchOnMount: 'always',
  });
  const visits = query.data?.pages.flatMap(page => page.visits) ?? [];
  const previous = query.data?.pages[0]?.previous;
  const open = async (visit: Visit) => {
    if (opening || visit.page_id == null) return;
    setOpening(true); setMessage('');
    try {
      await openComicReader(visit.asset_id, {
        toast: setMessage, failure: () => setMessage('打开阅读器失败，请重试'),
      }, { pageId: visit.page_id });
    } finally { setOpening(false); }
  };
  return <section className={cardClass()}>
    <h2 className="text-title-2-semibold">阅读痕迹</h2>
    <label>阅读日期 <input type="date" value={day} onChange={event => {
      if (event.target.value) { setDay(event.target.value); setMessage(''); }
    }} /></label>
    {previous != null && <Button size="small" variant="secondary"
      onClick={() => setDay(localDate(new Date(previous)))}>上一个有阅读记录的日期</Button>}
    <p className="text-caption-1-regular text-text-secondary">按时间排列，点击记录回到起始页。每次加载 200 条。</p>
    {message ? <p role="status">{message}</p> : null}
    <div className="max-h-105 overflow-y-auto" tabIndex={0} aria-label="阅读痕迹列表">
      {query.isError && !visits.length ? <Button onClick={() => void query.refetch()}>读取失败，重试</Button> :
        query.isPending ? <p>正在读取…</p> : visits.length ? <ol>
          {visits.map(visit => <li key={visit.id} className="border-b border-separator-border py-2">
            <button className="w-full text-left" disabled={opening || visit.page_id == null} onClick={() => void open(visit)}>
              <time>{new Date(visit.viewed_at).toLocaleTimeString()}</time> · <strong>{visit.name}</strong>
              <span> · 第 {visit.first_page === visit.last_page ? visit.first_page : visit.first_page + '–' + visit.last_page} 页</span>
              {visit.page_id == null ? <span> · 对应页已不可用</span> : null}
            </button>
          </li>)}
        </ol> : <p>这一天没有逐页阅读记录。</p>}
      {query.hasNextPage ? <Button size="small" variant="secondary" disabled={query.isFetchingNextPage}
        onClick={() => void query.fetchNextPage()}>{query.isFetchNextPageError ? '加载失败，重试' : query.isFetchingNextPage ? '正在加载…' : '加载更多'}</Button> : null}
    </div>
  </section>;
}
