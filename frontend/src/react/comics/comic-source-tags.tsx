/* 来源采集只提交候选；复核页负责明确批准。 */
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/base/input/input';
import { Textarea } from '@/components/base/textarea/textarea';
import { Button } from '@/components/base/buttons/button';
import { apiGet, apiSend } from '../../api';
import { Note } from '../components/note';
import { useAction, busyProps } from '../settings/use-action';

export function ComicSourceTags({ assetId }: { assetId: number }) {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');
  const [evidence, setEvidence] = useState('');
  const [receipt, setReceipt] = useState('');
  const action = useAction();
  const queue = useQuery({ queryKey: ['comic-tag-queue'], enabled: open,
    queryFn: ({ signal }) => apiGet<{ items: { id: number; name: string; location: string; library_name?: string }[] }>('/api/comic-tag-queue', signal) });
  const next = queue.data?.items.find(item => item.id !== assetId);
  const submit = () => { void action.run('submit', signal => apiSend<{ ok: boolean; item_key: string }>(
    '/api/comic-source-tags', { id: assetId, source_url: url, tags: tags.split('\n').map(tag => tag.trim()).filter(Boolean), evidence }, 'POST', signal),
    result => { setReceipt(`已保存来源标签候选，等待复核。回执：${result.item_key}`); void queue.refetch() }); };
  return <section className="flex flex-col gap-3">
    <Button variant="secondary" size="small" aria-expanded={open} onClick={() => setOpen(!open)}>补充来源标签</Button>
    {open ? <>
      <p>提交的标签在数据管理中复核后生效。每行一个，保留来源分类，例如 female:glasses。</p>
      <Input label="来源网页" value={url} onChange={setUrl} maxLength={2000} />
      <Textarea label="来源标签" value={tags} onChange={setTags} rows={5} />
      <Textarea label="匹配说明" value={evidence} onChange={setEvidence} maxLength={2000} rows={2} />
      <Button variant="primary" size="small" disabled={!url.trim() || !tags.trim()} {...busyProps(!!action.busy)} onClick={submit}>提交候选</Button>
      {action.error ? <Note tone="error">{action.error}</Note> : null}
      {receipt ? <Note tone="success">{receipt}</Note> : null}
      {queue.isError ? <Note tone="error">未取得待补标签清单</Note> : null}
      {next ? <a href={`/assets/${next.id}`}>下一本待补标签：{next.name}（{next.library_name || next.location}）</a> : null}
    </> : null}
  </section>;
}
