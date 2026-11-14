import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { apiGet } from '../../api';
import { Button } from '@/components/base/buttons/button';
import { cardClass } from '../components/card';

const defaults = { tags: 60, author: 15, interval: 20, explore: 5 };
type Weights = typeof defaults;
type Item = { id: number; name: string; creator: string | null; reasons: string[] };
export function savedWeights(): Weights {
  try {
    const value = JSON.parse(localStorage.getItem('pear.recommendation.weights') || 'null');
    if (value && Object.keys(defaults).every(key => Number.isFinite(value[key]) && value[key] >= 0 && value[key] <= 100)
        && Object.values(value).some(v => typeof v === 'number' && v > 0)) return value;
  } catch { /* 浏览器存储不可用时使用默认权重。 */ }
  return defaults;
}

export function ComicRecommendations() {
  const [weights, setWeights] = useState(savedWeights);
  const [draft, setDraft] = useState(weights);
  const [batch, setBatch] = useState(0);
  const query = useQuery({ queryKey: ['comic-recommendations', weights, batch],
    queryFn: ({ signal }) => apiGet<{ items: Item[] }>('/api/comic-recommendations?' +
      new URLSearchParams({ ...Object.fromEntries(Object.entries(weights).map(([key,v]) => [key,String(v)])), batch: String(batch) }), signal),
    refetchOnMount: 'always' });
  return <section className={cardClass()}>
    <div className="flex items-center justify-between gap-3">
      <h2 className="text-title-2-semibold">为你推荐</h2>
      <Button size="small" variant="secondary" disabled={query.isFetching} onClick={() => setBatch(v => v+1)}>换一批</Button>
    </div>
    <details><summary>推荐权重</summary>
      <p>权重保存于当前浏览器，按总和自动折算比例。普通阅读只影响阅读间隔。</p>
      {([['tags','标签口味'],['author','作者偏好'],['interval','阅读间隔'],['explore','探索']] as const).map(([key,label]) =>
        <label key={key} className="inline-flex items-center gap-2 p-2">{label}
          <input type="number" min="0" max="100" value={draft[key]} className="w-16"
            onChange={event => setDraft({ ...draft, [key]: Math.max(0, Math.min(100, Number(event.target.value))) })} />
        </label>)}
      <Button size="small" disabled={!Object.values(draft).some(v => v>0)} onClick={() => {
        setWeights({ ...draft }); setBatch(0);
        try { localStorage.setItem('pear.recommendation.weights', JSON.stringify(draft)); } catch { /* 本次仍生效。 */ }
      }}>应用权重</Button>
    </details>
    {query.isError ? <Button onClick={() => void query.refetch()}>推荐读取失败，重试</Button> :
      !query.data ? <p>正在整理推荐…</p> : query.data.items.length ? <div className="inline-grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
        {query.data.items.map(item => <a key={item.id} href={'/assets/'+item.id} className="min-w-0">
          <img src={'/comic-cover?asset='+item.id} alt="" loading="lazy" className="aspect-2/3 w-full rounded-lg object-cover" />
          <p className="truncate" title={item.name}>{item.name}</p>
          <p className="text-caption-1-regular text-text-secondary">{item.reasons.join(' · ')}</p>
        </a>)}
      </div> : <p>扫描漫画后即可获得推荐。留下喜欢反馈后，推荐会逐渐贴合你的标签口味。</p>}
  </section>;
}
