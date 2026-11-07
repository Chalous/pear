/* 漫画阅读器的开启：一份页清单、一处错误口径。卡片直开与详情的「开始阅读」共用。
 * 页 URL 由服务端按页 ID 下发，磁盘路径不进浏览器；目录离线给一句能执行的提示，
 * 不打断当前页。灯箱即阅读器：适宽、翻页、页码与按需加载都是现成的。 */
import { apiGet } from '../../api';
import { openPhotoLightbox } from '../photo-lightbox/photo-lightbox-dialog';

/** `/api/comic-pages` 的回包；`error` 与 `message` 是服务端口径（`web_comics.py`）。 */
export interface ComicPages {
  id: number;
  error?: string;
  message?: string;
  pages?: { id: number; url: string }[];
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
    if (!data.pages?.length) {
      notify.toast('这本书还没有可读的页，先在来源目录上扫一遍');
      return;
    }
    await openPhotoLightbox(0, data.pages.map((page, index) => ({
      src: page.url, thumb: page.url, name: `第 ${index + 1} 页`,
    })));
  } catch (error) {
    notify.failure('打开阅读器', error);
  }
}
