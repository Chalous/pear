/* 漫画阅读器的开启：一份页清单、一处错误口径、一条阅读进度。卡片直开与详情的「开始阅读」共用。
 * 页 URL 由服务端按页 ID 下发，磁盘路径不进浏览器；目录离线给一句能执行的提示，
 * 不打断当前页。灯箱即阅读器：适宽、翻页、页码、双页与按需加载都是现成的。
 * 进度按页 ID 记账（重扫保留页 ID，进度跨重扫有效）：真的翻到一页才防抖落账，
 * 关灯箱、藏起标签页时把没落的那次立刻补上。 */
import { apiGet, apiSend } from '../../api';
import { openPhotoLightbox, spreadStart } from '../photo-lightbox/photo-lightbox-dialog';

/** `/api/comic-pages` 的回包；`error` 与 `message` 是服务端口径（`web_comics.py`）。
 *  `resume.index` 是上次读到的页在清单里的下标，服务端算好，开局直接落在那里。 */
export interface ComicPages {
  id: number;
  error?: string;
  message?: string;
  pages?: { id: number; url: string }[];
  resume?: { index: number };
}

/** 快速翻页时不一页一落账：停下来这一拍才发，账上留的就是最后那页。 */
const SAVE_DEBOUNCE_MS = 800;

/** 一次打开的阅读会话：翻到的页先押在这里，防抖落账，关灯箱或藏起标签页补发。 */
let session: {
  assetId: number; pageIds: number[]; timer: number | undefined;
  pending: number | null; reported: number;
} | null = null;
let lastStamp = 0;

function scheduleSave(index: number): void {
  const current = session;
  if (!current || index < 0 || index >= current.pageIds.length) return;
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
}): Promise<void> {
  try {
    const data = await apiGet<ComicPages>(`/api/comic-pages?id=${assetId}`);
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
    const start = data.resume && data.resume.index >= 0 && data.resume.index < pages.length
      ? data.resume.index : 0;
    session = {
      assetId, pageIds: pages.map((page) => page.id),
      timer: undefined, pending: null,
      // 「已看过」对齐到开局真正显示的那一页：双页时真机 Swiper 初始化就会对左页报一次
      // slideChange，不对齐的话，光是把书重开一遍就会把进度挪到跨页的左页上。
      reported: spreadStart(start),
    };
    window.addEventListener('pagehide', flushSave);
    document.addEventListener('visibilitychange', onVisibility);
    await openPhotoLightbox(start, pages.map((page, index) => ({
      src: page.url, thumb: page.url, name: `第 ${index + 1} 页`,
    })), undefined, { spreadAllowed: true, onPageChange: scheduleSave, onClose: endSession });
  } catch (error) {
    notify.failure('打开阅读器', error);
  }
}
