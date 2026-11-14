import { savedWeights } from './comic-recommendations';
import { queueVisit } from './visit-queue';
/* 漫画阅读器的开启：一份页清单、一处错误口径、一条阅读进度、当场标记与撤销。
 * 卡片直开与详情的「开始阅读」共用，详情的历史回跳经 `start.pageId` 指定开局页。
 * 页 URL 由服务端按页 ID 下发，磁盘路径不进浏览器；目录离线给一句能执行的提示，
 * 不打断当前页。灯箱即阅读器：适宽、翻页、页码、双页与按需加载都是现成的。
 * 进度按页 ID 记账（重扫保留页 ID，进度跨重扫有效）：真的翻到一页才防抖落账，
 * 关灯箱、藏起标签页时把没落的那次立刻补上。标记落在正在读的那一页（双页喜欢覆盖当前两页），
 * 事件 ID 客户端生成，网络重发到服务端也只记一条；已标的页再点一下就是取消，
 * 按钮的亮灭读会话内的标记台账，开局时从账上把往次的有效标记接过来。 */
import { apiGet, apiSend } from '../../api';
import { randomId } from '../../core/random-id';
import { closePhotoLightbox, openPhotoLightbox, spreadStart } from '../photo-lightbox/photo-lightbox-dialog';

/** `/api/comic-pages` 的回包；`error` 与 `message` 是服务端口径（`web_comics.py`）。
 *  `resume.index` 是上次读到的页在清单里的下标，服务端算好，开局直接落在那里。 */
export interface ComicPages {
  id: number;
  error?: string;
  message?: string;
  pages?: { id: number; url: string }[];
  resume?: { index: number };
}

/** `/api/comic-event` 的回包口径（`web_comics.py`）；`counted` 为假即重发被去重。 */
interface EventReply {
  error?: string;
  ok?: boolean;
  counted?: boolean;
  undone?: boolean;
  o_count?: number;
}

/** `/api/comic-events` 的一条：单页标记按页 ID 进台账，整本与页段不进按钮状态。 */
interface EventRow {
  id: string; kind: 'like' | 'o'; undone_at: number | null;
  first: { id: number; ordinal: number } | null;
  last: { id: number; ordinal: number } | null;
}

/** 快速翻页时不一页一落账：停下来这一拍才发，账上留的就是最后那页。 */
const SAVE_DEBOUNCE_MS = 800;

/** 会话内的页标记台账：页 ID → 各类型的有效事件 ID。开局从账上接来（只接单页的），
 *  之后跟着标记与取消走；灯箱按钮的亮灭直接读它。 */
type PageMarks = { like?: string; o?: string };

async function loadMarks(assetId: number): Promise<Map<number | string, PageMarks>> {
  const map = new Map<number | string, PageMarks>();
  try {
    const data = await apiGet<{ error?: string; events?: EventRow[] }>(`/api/comic-events?id=${assetId}`);
    for (const event of data.events ?? []) {
      // 清单新发生的在前：同页同类型的旧事件被后一条覆盖，台账里留的总是最新的有效事件。
      if (event.undone_at != null) continue;
      if (!event.first && !event.last && event.kind === 'like') {
        if (!map.get(0)?.like) map.set(0, { like: event.id });
        continue;
      }
      if (!event.first || !event.last) continue;
      for (const key of new Set([event.first.id, event.last.id])) {
        const entry = map.get(key) ?? {};
        entry[event.kind] ??= event.id;
        map.set(key, entry);
      }
    }
  } catch {
    /* 台账接不上就当没有：按钮只是不亮，标记照常落账。 */
  }
  return map;
}

/** 一次打开的阅读会话：翻到的页先押在这里，防抖落账，关灯箱或藏起标签页补发。
 *  `sessionId` 给这轮标记事件归组；`lastEvent` 是本轮最近标的那条，点亮撤销键。 */
let session: {
  assetId: number; pageIds: number[]; timer: number | undefined;
  pending: number | null; reported: number; visible: string;
  sessionId: string; lastEvent: string | null; marks: Map<number | string, PageMarks>;
} | null = null;
let lastStamp = 0;

function scheduleSave(index: number, spread = false): void {
  const current = session;
  if (!current || index < 0 || index >= current.pageIds.length) return;
  const pages = current.pageIds.slice(index, index + (spread ? 2 : 1));
  const visible = pages.join(',');
  if (visible !== current.visible) {
    current.visible = visible;
    lastStamp = Math.max(Date.now(), lastStamp + 1);
    queueVisit({ id: randomId(), asset: current.assetId, session: current.sessionId, pages, viewed_at: lastStamp });
  }
  if (index === current.reported) return; // 切双页整棵重挂，Swiper 可能对同一页再报一次。
  current.reported = index;
  current.pending = index;
  window.clearTimeout(current.timer);
  current.timer = window.setTimeout(flushSave, SAVE_DEBOUNCE_MS);
}

/** 把手头这一页发出去。服务端按 `viewed_at` 拒掉迟到的旧位置，重发也无害。 */
function flushSave(): void {
  const current = session;
  if (!current || current.pending === null) return;
  const { assetId, pageIds, pending } = current;
  current.pending = null;
  window.clearTimeout(current.timer);
  // 两个窗口看同一本书时后合上的说了算：本机时钟只跟自己比，倒退就硬推一毫秒。
  const stamp = Math.max(Date.now(), lastStamp + 1);
  lastStamp = stamp;
  apiSend('/api/comic-progress', { asset: assetId, page: pageIds[pending], viewed_at: stamp }).catch(() => {
    /* 进度是尽力而为的伴手账，落不下不打断阅读；下一页翻到再试。 */
  });
}

/** 当场标记正在读的这一页（双页喜欢覆盖当前两页）。已标的页再点一下是取消：往撤销口发同一个
 *  事件 ID。返回这次落没落账，灯箱据此点亮按钮；失败回 false，不打断阅读。 */
async function markEvent(kind: 'like' | 'o', book = false): Promise<boolean> {
  const current = session;
  if (!current || current.reported < 0 || current.reported >= current.pageIds.length) return false;
  const first = current.pageIds[current.reported];
  if (!book && kind === 'like') {
    const pages = current.visible.split(',').filter(Boolean).map(Number);
    if (!pages.length) return false;
    const liked = !pages.every(page => current.marks.get(page)?.like);
    try {
      const reply = await apiSend<{ ok?: boolean; last_event?: string | null }>('/api/comic-page-like',
        { asset: current.assetId, pages, liked, operation: randomId() });
      if (!reply.ok) return false;
      current.marks = await loadMarks(current.assetId);
      current.lastEvent = reply.last_event ?? null;
      return true;
    } catch { return false; }
  }
  const last = first;
  const pageId = book ? 0 : first;
  const existing = current.marks.get(pageId)?.[kind];
  if (existing) {
    try {
      const reply = await apiSend<EventReply>('/api/comic-event-undo', { event: existing });
      if (!reply || reply.error || reply.ok !== true) return false;
    } catch {
      return false;
    }
    const entry = current.marks.get(pageId);
    if (entry) delete entry[kind];
    if (current.lastEvent === existing) current.lastEvent = null;
    return true;
  }
  const eventId = randomId();
  try {
    const reply = await apiSend<EventReply>('/api/comic-event', {
      event: eventId, asset: current.assetId, kind,
      ...(book ? {} : { first_page: first, last_page: last }),
      occurred_at: Date.now(), session: current.sessionId,
    });
    if (!reply || reply.error || reply.ok !== true) return false;
  } catch {
    return false; // 尽力而为的伴手账，同进度一样不因落不下打断阅读。
  }
  current.marks.set(pageId, { ...current.marks.get(pageId), [kind]: eventId });
  current.lastEvent = eventId;
  return true;
}

/** 撤销本轮最近标的那一条（没有就落空）。服务端对重复撤销幂等。 */
async function undoLastEvent(): Promise<boolean> {
  const current = session;
  if (!current || !current.lastEvent) return false;
  const eventId = current.lastEvent;
  try {
    const reply = await apiSend<EventReply>('/api/comic-event-undo', { event: eventId });
    if (!reply || reply.error || reply.ok !== true) return false;
  } catch {
    return false;
  }
  for (const entry of current.marks.values()) {
    if (entry.like === eventId) delete entry.like;
    if (entry.o === eventId) delete entry.o;
  }
  current.lastEvent = null;
  return true;
}

/** 灯箱按钮的状态：这一页（下标）有没有有效标记、本轮还有没有可撤的。 */
function marksSnapshot(index: number): { like: boolean; o: boolean; canUndo: boolean } {
  const current = session;
  const entry = current ? current.marks.get(current.pageIds[index] ?? NaN) : undefined;
  const shown = current?.visible.split(',').filter(Boolean).map(Number) ?? [];
  return { like: shown.length > 0 && shown.every(page => Boolean(current?.marks.get(page)?.like)),
    o: Boolean(entry?.o), canUndo: Boolean(current?.lastEvent) };
}

function onVisibility(): void {
  if (document.visibilityState === 'hidden') flushSave();
}

function endSession(): void {
  flushSave();
  window.removeEventListener('pagehide', flushSave);
  document.removeEventListener('visibilitychange', onVisibility);
  session = null;
}

export async function openComicReader(assetId: number, notify: {
  toast(message: string): void;
  failure(action: string, error: unknown): void;
}, start?: { pageId?: number; first?: boolean; immersive?: boolean }): Promise<void> {
  try {
    // 标记台账与页清单一起取：台账接不上只影响按钮亮灭，不挡阅读。
    const [data, marks] = await Promise.all([apiGet<ComicPages>(`/api/comic-pages?id=${assetId}`), loadMarks(assetId)]);
    if (data.error) {
      notify.toast(data.message || '页清单还没有建立，先在来源目录上扫一遍');
      return;
    }
    const pages = data.pages ?? [];
    if (!pages.length) {
      notify.toast('这本书还没有可读的页，先在来源目录上扫一遍');
      return;
    }
    endSession(); // 上一本还没走完的会话先结账：押着的保存补发，监听摘掉。
    // 历史回跳指定了页就落在那一页；否则按服务端给的续读位，没读过从第一页起。
    const jumped = start?.pageId != null
      ? pages.findIndex((page) => page.id === start.pageId) : -1;
    const resumed = data.resume && data.resume.index >= 0 && data.resume.index < pages.length
      ? data.resume.index : 0;
    const opening = start?.first ? 0 : jumped >= 0 ? jumped : resumed;
    session = {
      assetId, pageIds: pages.map((page) => page.id),
      visible: '', timer: undefined, pending: null, sessionId: randomId(), lastEvent: null, marks,
      // 「已看过」对齐到开局真正显示的那一页：双页时真机 Swiper 初始化就会对左页报一次
      // slideChange，不对齐的话，光是把书重开一遍就会把进度挪到跨页的左页上。
      reported: spreadStart(opening),
    };
    window.addEventListener('pagehide', flushSave);
    document.addEventListener('visibilitychange', onVisibility);
    await openPhotoLightbox(opening, pages.map((page, index) => ({
      src: page.url, thumb: page.url, name: `第 ${index + 1} 页`,
    })), undefined, {
      spreadAllowed: true, onPageChange: scheduleSave, onClose: endSession,
      marks: { next: () => nextRecommended(notify), book: () => markEvent('like', true), bookLiked: () => Boolean(session?.marks.get(0)?.like), mark: markEvent, undo: undoLastEvent, snapshot: marksSnapshot },
    });
  } catch (error) {
    notify.failure('打开阅读器', error);
  }
}


type ReaderNotify = { toast(message: string): void; failure(action: string, error: unknown): void };
const recommendedSeen = new Set<number>();
let switchingBook = false;
export async function startRecommendedReading(notify: ReaderNotify): Promise<void> {
  recommendedSeen.clear();
  await nextRecommended(notify);
}
async function nextRecommended(notify: ReaderNotify): Promise<void> {
  if (switchingBook) return;
  switchingBook = true;
  try {
    if (session) recommendedSeen.add(session.assetId);
    if (recommendedSeen.size >= 490) {
      const current = session?.assetId;
      recommendedSeen.clear();
      if (current) recommendedSeen.add(current);
    }
    const params = new URLSearchParams(Object.fromEntries(Object.entries(savedWeights()).map(([k,v]) => [k,String(v)])));
    params.set('exclude', [...recommendedSeen].join(','));
    const reply = await apiGet<{ items: { id: number }[] }>('/api/comic-recommendations?' + params);
    const next = reply.items?.[0];
    if (!next) { notify.toast('本轮已经看完可推荐的漫画'); return; }
    closePhotoLightbox();
    await openComicReader(next.id, notify, { first: true });
    if (session?.assetId === next.id) recommendedSeen.add(next.id);
  } catch (error) {
    notify.failure('打开下一本漫画', error);
  } finally {
    switchingBook = false;
  }
}
