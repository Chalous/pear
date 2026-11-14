import { describe, expect, it } from 'vitest';
import { getManageMenuSections, NAV_CATALOG, SIDEBAR_ITEMS } from '../../src/application/navigation-items';
import { DEFAULT_SIDEBAR_ORDER, normalizeSidebarOrder } from '../../src/sidebar';

describe('应用导航词表', () => {
  it('漫画导航使用作者、标签与书单', () => {
    const keys = SIDEBAR_ITEMS.map(([key]) => key);
    expect(keys).toEqual(['', 'creators', 'tags', 'flagged', 'playlists', 'immerse', 'manage']);
    expect(normalizeSidebarOrder([])).toEqual(DEFAULT_SIDEBAR_ORDER);
    const all = NAV_CATALOG.map(([key]) => key);
    expect(new Set(all).size).toBe(all.length);
    expect(all).not.toContain('jav');
    expect(all).not.toContain('follow');
  });

  it('配置入口只在本机可改时出现在管理菜单，其余入口顺序不动', () => {
    const enabled = getManageMenuSections(true), locked = getManageMenuSections(false);
    expect(enabled.some(([key]) => key === 'configuration')).toBe(true);
    expect(locked.some(([key]) => key === 'configuration')).toBe(false);
    expect(enabled.filter(([key]) => key !== 'configuration')).toEqual(locked);
  });
});
