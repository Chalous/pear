/* 漫画阅读器的开启与进度记账（`src/react/comics/comic-reader.ts`）：续读按服务端给的下标开局，
 * 真的翻到一页才防抖落账，关灯箱、藏标签页、整页离开把押着的那次补上。
 * API 与灯箱都换成假的：这里量的是会话与落账的时机，翻页本身在灯箱的测试里量。 */
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

const api = vi.hoisted(() => ({
  apiGet: vi.fn(),
  apiSend: vi.fn(async (_path: string, _body?: unknown) => ({})),
}));
vi.mock('../../src/api', () => api);

const lightbox = vi.hoisted(() => ({
  openPhotoLightbox: vi.fn(async (_index?: number, _slides?: unknown,
                                   _host?: unknown, _options?: unknown) => ({})),
  // 替身镜像真身的对齐规则：双页档时开局下标落到跨页的左页。
  spreadStart: (index: number) =>
    localStorage.getItem('peach.lightbox-spread.v1') === '1' ? index - (index % 2) : index,
}));
vi.mock('../../src/react/photo-lightbox/photo-lightbox-dialog', () => lightbox);

import { openComicReader } from '../../src/react/comics/comic-reader';

const notify = { toast: vi.fn(), failure: vi.fn() };
const PAGES = [
  { id: 11, url: '/comic-image?page=11' },
  { id: 12, url: '/comic-image?page=12' },
  { id: 13, url: '/comic-image?page=13' },
];

beforeEach(() => {
  vi.useFakeTimers();
  api.apiGet.mockReset();
  api.apiSend.mockClear();
  lightbox.openPhotoLightbox.mockClear();
  notify.toast.mockClear();
  notify.failure.mockClear();
});

afterEach(() => {
  vi.useRealTimers();
});

/** 最近一次开灯箱交给阅读器的钩子：翻页回报、关闭回执与当场标记。 */
const hooks = () => lightbox.openPhotoLightbox.mock.calls.at(-1)![3] as {
  onPageChange(index: number): void;
  onClose(): void;
  marks: { mark(kind: 'like' | 'o'): Promise<boolean>; undo(): Promise<boolean>;
           snapshot(index: number): { like: boolean; o: boolean; canUndo: boolean } };
};
const sent = () => api.apiSend.mock.calls.map((call) => call[1] as { asset: number; page: number; viewed_at: number });

describe('开局', () => {
  it('按服务端给的 resume 下标开局；没读过的书从第一页起', async () => {
    api.apiGet.mockResolvedValue({ id: 1, pages: PAGES, resume: { index: 2 } });
    await openComicReader(1, notify);
    expect(lightbox.openPhotoLightbox).toHaveBeenLastCalledWith(
      2, expect.anything(), undefined,
      expect.objectContaining({
        spreadAllowed: true, onPageChange: expect.any(Function), onClose: expect.any(Function),
      }));
    api.apiGet.mockResolvedValue({ id: 2, pages: PAGES });
    await openComicReader(2, notify);
    expect(lightbox.openPhotoLightbox).toHaveBeenLastCalledWith(0, expect.anything(), undefined, expect.anything());
  });

  it('清单报错只给一句能执行的提示，不打开灯箱', async () => {
    api.apiGet.mockResolvedValue({ id: 1, error: 'offline', message: '目录不可用' });
    await openComicReader(1, notify);
    expect(notify.toast).toHaveBeenLastCalledWith('目录不可用');
    expect(lightbox.openPhotoLightbox).not.toHaveBeenCalled();
    api.apiGet.mockResolvedValue({ id: 1, pages: [] });
    await openComicReader(1, notify);
    expect(notify.toast).toHaveBeenLastCalledWith('这本书还没有可读的页，先在来源目录上扫一遍');
  });

  it('清单取不到交给壳的失败回执', async () => {
    api.apiGet.mockRejectedValue(new Error('network down'));
    await openComicReader(1, notify);
    expect(notify.failure).toHaveBeenCalledWith('打开阅读器', expect.any(Error));
  });
});

describe('落账', () => {
  it('停下来这一拍才落账：连翻几页只记最后那页，页按页 ID 记', async () => {
    api.apiGet.mockResolvedValue({ id: 1, pages: PAGES });
    await openComicReader(1, notify);
    hooks().onPageChange(1);
    await vi.advanceTimersByTimeAsync(100);
    hooks().onPageChange(2);
    await vi.advanceTimersByTimeAsync(799);
    expect(api.apiSend).not.toHaveBeenCalled();
    await vi.advanceTimersByTimeAsync(1);
    expect(api.apiSend).toHaveBeenCalledTimes(1);
    expect(sent()).toEqual([{ asset: 1, page: 13, viewed_at: expect.any(Number) }]);
  });

  it('切双页重挂对同一页的重复回报不记账', async () => {
    api.apiGet.mockResolvedValue({ id: 1, pages: PAGES });
    await openComicReader(1, notify);
    hooks().onPageChange(1);
    await vi.runAllTimersAsync();
    hooks().onPageChange(1);
    await vi.runAllTimersAsync();
    expect(api.apiSend).toHaveBeenCalledTimes(1);
  });

  it('双页开局对齐后的左页不算翻页：光是把书重开一遍不落账', async () => {
    localStorage.setItem('peach.lightbox-spread.v1', '1');
    try {
      // 续读位在奇数下标（第 2 页）：双页真机 Swiper 初始化会对齐到左页再报一次。
      api.apiGet.mockResolvedValue({ id: 1, pages: PAGES, resume: { index: 1 } });
      await openComicReader(1, notify);
      hooks().onPageChange(0);
      await vi.runAllTimersAsync();
      expect(api.apiSend).not.toHaveBeenCalled();
      hooks().onPageChange(1);
      await vi.runAllTimersAsync();
      expect(sent()).toEqual([{ asset: 1, page: 12, viewed_at: expect.any(Number) }]);
    } finally {
      localStorage.removeItem('peach.lightbox-spread.v1');
    }
  });

  it('关灯箱把押着的那次立刻补上，会话随之结束', async () => {
    api.apiGet.mockResolvedValue({ id: 1, pages: PAGES });
    await openComicReader(1, notify);
    const close = hooks().onClose;
    hooks().onPageChange(2);
    close();
    expect(sent()).toEqual([{ asset: 1, page: 13, viewed_at: expect.any(Number) }]);
    hooks().onPageChange(0);
    await vi.runAllTimersAsync();
    expect(api.apiSend).toHaveBeenCalledTimes(1);
  });

  it('藏起标签页或整页离开，押着的那次当场补上', async () => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' });
    api.apiGet.mockResolvedValue({ id: 1, pages: PAGES });
    await openComicReader(1, notify);
    hooks().onPageChange(2);
    window.dispatchEvent(new Event('pagehide'));
    expect(sent()).toEqual([{ asset: 1, page: 13, viewed_at: expect.any(Number) }]);
    hooks().onPageChange(0);
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' });
    document.dispatchEvent(new Event('visibilitychange'));
    expect(sent().at(-1)).toEqual({ asset: 1, page: 11, viewed_at: expect.any(Number) });
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' });
  });

  it('viewed_at 一路只增：迟到的旧位置到服务端也会被拒（判据在 `comics.save_progress`）', async () => {
    api.apiGet.mockResolvedValue({ id: 1, pages: PAGES });
    await openComicReader(1, notify);
    hooks().onPageChange(1);
    await vi.runAllTimersAsync();
    hooks().onPageChange(0);
    await vi.runAllTimersAsync();
    const stamps = sent().map((body) => body.viewed_at);
    expect(stamps).toHaveLength(2);
    expect(stamps[1]).toBeGreaterThan(stamps[0]);
  });
});

describe('当场标记', () => {
  it('标记落在正在读的那一页（双页即左页）：事件 ID 与会话现生成，台账点亮按钮', async () => {
    localStorage.setItem('peach.lightbox-spread.v1', '1');
    try {
      api.apiGet.mockImplementation((path: string) => path.startsWith('/api/comic-events')
        ? Promise.resolve({ id: 1, events: [] })
        : Promise.resolve({ id: 1, pages: PAGES, resume: { index: 1 } }));
      await openComicReader(1, notify);
      const marks = hooks().marks;
      expect(marks.snapshot(1)).toEqual({ like: false, o: false, canUndo: false });
      hooks().onPageChange(1); // 双页正在读第 1–2 页，标记算左页。
      api.apiSend.mockResolvedValue({ ok: true, counted: true, o_count: 1 });
      expect(await marks.mark('o')).toBe(true);
      const [sentPath, body] = api.apiSend.mock.calls.at(-1)!;
      expect(sentPath).toBe('/api/comic-event');
      expect(body).toMatchObject({
        asset: 1, kind: 'o', first_page: 12, last_page: 12,
        occurred_at: expect.any(Number), session: expect.any(String),
      });
      expect((body as { event: string }).event).toEqual(expect.any(String));
      expect(marks.snapshot(1)).toEqual({ like: false, o: true, canUndo: true });
    } finally {
      localStorage.removeItem('peach.lightbox-spread.v1');
    }
  });

  it('往次的有效标记开局接进台账：那一页按钮直接亮着', async () => {
    api.apiGet.mockImplementation((path: string) => path.startsWith('/api/comic-events')
      ? Promise.resolve({ id: 1, events: [
          { id: 'e-old', kind: 'like', undone_at: null, first: { id: 12, ordinal: 2 }, last: { id: 12, ordinal: 2 } },
          { id: 'e-gone', kind: 'o', undone_at: 900, first: { id: 13, ordinal: 3 }, last: { id: 13, ordinal: 3 } },
          { id: 'e-whole', kind: 'like', undone_at: null, first: null, last: null },
        ] })
      : Promise.resolve({ id: 1, pages: PAGES }));
    await openComicReader(1, notify);
    const marks = hooks().marks;
    expect(marks.snapshot(1)).toEqual({ like: true, o: false, canUndo: false });
    expect(marks.snapshot(2)).toEqual({ like: false, o: false, canUndo: false });
  });

  it('已标的页再点一下是取消：往撤销口发同一个事件 ID，台账熄灭', async () => {
    api.apiGet.mockImplementation((path: string) => path.startsWith('/api/comic-events')
      ? Promise.resolve({ id: 1, events: [
          { id: 'e-old', kind: 'like', undone_at: null, first: { id: 12, ordinal: 2 }, last: { id: 12, ordinal: 2 } },
        ] })
      : Promise.resolve({ id: 1, pages: PAGES }));
    await openComicReader(1, notify);
    const marks = hooks().marks;
    hooks().onPageChange(1); // 翻到台账里已标的那一页（第 2 页）。
    api.apiSend.mockResolvedValue({ ok: true, undone: true, o_count: 0 });
    expect(await marks.mark('like')).toBe(true);
    const [sentPath, body] = api.apiSend.mock.calls.at(-1)!;
    expect(sentPath).toBe('/api/comic-event-undo');
    expect(body).toEqual({ event: 'e-old' });
    expect(marks.snapshot(1).like).toBe(false);
  });

  it('撤销键撤本轮最近标的那条，并从台账熄灭；没有可撤的就落空', async () => {
    api.apiGet.mockImplementation((path: string) => path.startsWith('/api/comic-events')
      ? Promise.resolve({ id: 1, events: [] })
      : Promise.resolve({ id: 1, pages: PAGES }));
    await openComicReader(1, notify);
    const marks = hooks().marks;
    expect(await marks.undo()).toBe(false);
    api.apiSend.mockResolvedValue({ ok: true, counted: true });
    await marks.mark('like');
    api.apiSend.mockClear();
    api.apiSend.mockResolvedValue({ ok: true, undone: true, o_count: 0 });
    expect(await marks.undo()).toBe(true);
    const [sentPath, body] = api.apiSend.mock.calls.at(-1)!;
    expect(sentPath).toBe('/api/comic-event-undo');
    expect((body as { event: string }).event).toEqual(expect.any(String));
    expect(marks.snapshot(0)).toEqual({ like: false, o: false, canUndo: false });
  });

  it('服务端拒了台账不动；请求抛错同样标不上', async () => {
    api.apiGet.mockImplementation((path: string) => path.startsWith('/api/comic-events')
      ? Promise.resolve({ id: 1, events: [] })
      : Promise.resolve({ id: 1, pages: PAGES }));
    await openComicReader(1, notify);
    const marks = hooks().marks;
    api.apiSend.mockResolvedValue({ error: 'invalid' });
    expect(await marks.mark('like')).toBe(false);
    expect(marks.snapshot(0).like).toBe(false);
    api.apiSend.mockRejectedValue(new Error('network down'));
    expect(await marks.mark('like')).toBe(false);
    expect(marks.snapshot(0).like).toBe(false);
  });

  it('历史回跳：给定页 ID 开局就落在那一页，续读位让位', async () => {
    api.apiGet.mockImplementation((path: string) => path.startsWith('/api/comic-events')
      ? Promise.resolve({ id: 1, events: [] })
      : Promise.resolve({ id: 1, pages: PAGES, resume: { index: 0 } }));
    await openComicReader(1, notify, { pageId: 13 });
    expect(lightbox.openPhotoLightbox).toHaveBeenLastCalledWith(
      2, expect.anything(), undefined, expect.anything());
  });
});
