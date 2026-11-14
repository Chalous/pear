import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@/components/base/buttons/button';
import { Input } from '@/components/base/input/input';
import { foldName } from '@peach/legacy/core';
import { dropBars } from '../../catalog-bars';
import { apiSend } from '../../api';
import { ModalFrame } from '../components/modal-frame';
import { Note } from '../components/note';
import { fetchItem, itemKey, ITEM_TAG_URL } from '../item-detail/item-detail';
import { replaceCatalogItem } from '../catalog-grid/catalog-grid';
import { queryClient } from '../query';
import { useAction } from '../settings/use-action';
import { ComicSourceTags } from './comic-source-tags';

/** 封面上的入口只编辑当前漫画的标签，不改标签的全局名称。 */
export function ComicTagEditor({ assetId, label, close }: {
  assetId: number; label(tag: string): string; close(): void;
}) {
  const [draft, setDraft] = useState('');
  const [receipt, setReceipt] = useState('');
  const [undo, setUndo] = useState<{ operation: 'add' | 'remove' | 'restore'; tag: string } | null>(null);
  const action = useAction();
  const result = useQuery({ queryKey: itemKey(assetId), queryFn: ({ signal }) => fetchItem(assetId, signal) });
  const change = (operation: 'add' | 'remove' | 'restore', raw: string, reverting = false) => {
    const tag = raw.trim();
    if (!tag) return;
    if (operation === 'add' && result.data?.tags?.some(value => foldName(value.k) === foldName(tag))) {
      setReceipt('这本漫画已有该标签');
      setUndo(null);
      return;
    }
    void action.run('tag', async signal => {
      const saved = await apiSend<{ ok: boolean; tag?: string }>(ITEM_TAG_URL, { id: assetId, operation, tag }, 'POST', signal);
      if (!saved.ok) throw new Error('标签未保存，请重试');
      const fresh = await fetchItem(assetId, signal);
      queryClient.setQueryData(itemKey(assetId), fresh);
      replaceCatalogItem(assetId, { tags: (fresh.tags || []).map(value => value.k) });
      dropBars();
      void queryClient.invalidateQueries({ queryKey: ['index'] });
      void queryClient.invalidateQueries({ queryKey: ['tag-management'] });
      return saved.tag || tag;
    }, canonical => {
      setDraft('');
      setReceipt(reverting ? '已撤销' : `已${operation === 'add' ? '添加' : '移除'}标签「${label(canonical)}」`);
      setUndo(reverting ? null : { operation: operation === 'add' ? 'remove' : 'restore', tag: canonical });
    });
  };
  return <ModalFrame isOpen width="form" label="编辑漫画标签" onOpenChange={open => { if (!open && !action.busy) close() }}>
    <div className="peach-react flex flex-col gap-4 p-5" onClick={event => event.stopPropagation()}>
      <h2 className="text-title-2-semibold text-text-primary">编辑标签</h2>
      <p className="break-words">{result.data?.name || '正在读取漫画'}</p>
      {result.isError ? <Note tone="error" action={<Button onClick={() => void result.refetch()}>重试</Button>}>未取得漫画标签</Note> : null}
      {result.data ? <>
        <p>添加或移除后立即保存，仅影响这本漫画。</p>
        <div className="flex flex-wrap gap-2">
          {(result.data.tags || []).map(tag => <Button key={tag.k} variant="secondary" size="small"
            aria-label={`移除标签 ${label(tag.k)}`} disabled={!!action.busy} onClick={() => change('remove', tag.k)}>
            {label(tag.k)} ×
          </Button>)}
          {!result.data.tags?.length ? <p>还没有标签</p> : null}
        </div>
        <form className="flex flex-col gap-3" onSubmit={event => { event.preventDefault(); change('add', draft) }}>
          <Input label="新标签" value={draft} onChange={setDraft} maxLength={80} />
          <Button type="submit" disabled={!!action.busy || !draft.trim()}>添加标签</Button>
        </form>
        {action.error ? <Note tone="error">{action.error}</Note> : null}
        {receipt ? <Note tone="success" action={undo ? <Button variant="secondary" disabled={!!action.busy}
          onClick={() => change(undo.operation, undo.tag, true)}>撤销</Button> : undefined}>{receipt}</Note> : null}
        <ComicSourceTags assetId={assetId} />
      </> : null}
      <Button variant="secondary" disabled={!!action.busy} onClick={close}>关闭</Button>
    </div>
  </ModalFrame>;
}
