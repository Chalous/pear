import { apiSend } from '../../api';

type Visit = { id: string; asset: number; session: string; pages: number[]; viewed_at: number };
const prefix = 'pear.comic-visit.';
const pending = new Map<string, Visit>();
let running = false;
let retry: number | undefined;

async function flush() {
  if (running) return;
  running = true;
  try {
    for (const [id, visit] of pending) {
      const result = await apiSend<{ ok?: boolean; error?: string }>('/api/comic-visit', visit);
      if (!result.ok && !['not found', 'invalid'].includes(result.error ?? '')) break;
      pending.delete(id);
      try { localStorage.removeItem(prefix + id); } catch { /* 存储受限时仍可在线发送。 */ }
    }
  } catch { /* 网络恢复后以同一事件编号重发。 */ }
  finally {
    running = false;
    window.clearTimeout(retry);
    if (pending.size) retry = window.setTimeout(() => void flush(), 5000);
  }
}

export function queueVisit(visit: Visit) {
  pending.set(visit.id, visit);
  try { localStorage.setItem(prefix + visit.id, JSON.stringify(visit)); } catch { /* 仍留在内存。 */ }
  void flush();
}

try {
  for (const key of Object.keys(localStorage)) {
    if (!key.startsWith(prefix)) continue;
    const visit = JSON.parse(localStorage.getItem(key) || 'null') as Visit | null;
    if (visit?.id && prefix + visit.id === key) pending.set(visit.id, visit);
  }
} catch { /* 隐私模式下可只使用内存队列。 */ }
if (pending.size) void flush();
