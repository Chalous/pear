/** 应用导航的完整词表；默认可见顺序由 sidebar 的持久偏好决定。 */
export type SidebarKey = '' | 'creators' | 'performers' | 'studios' | 'tags' | 'jav' | 'flagged' | 'playlists'
  | 'follow' | 'immerse' | 'manage' | 'stats' | 'taste' | 'review' | 'data-cleanup' | 'trash'
  | 'follow-manage' | 'quality' | 'activity';
export type ManagementKey = 'stats' | 'taste' | 'review' | 'cleanup' | 'trash' | 'follow'
  | 'quality' | 'activity' | 'configuration';
export type NavigationItem<Key extends string = string> = readonly [key: Key, label: string, glyph: string];

export const SIDEBAR_ITEMS = [
  ['', '首页', 'home'],
  ['creators', '作者', 'user-round'],
  ['tags', '标签', 'tags'],
  ['flagged', '喜欢', 'bookmark'],
  ['playlists', '书单', 'playlist'],
  ['immerse', '沉浸阅读', 'gallery-vertical-end'],
  ['manage', '管理', 'wrench'],
] as const satisfies readonly NavigationItem<SidebarKey>[];

export const MANAGE_SECTIONS = [
  ['stats', '统计', 'chart'],
  ['taste', '口味', 'heart'],
  ['review', '人工复核', 'square-check-big'],
  ['cleanup', '数据管理', 'hard-drive'],
  ['trash', '回收站', 'trash'],
  ['activity', '任务中心', 'history'],
  ['configuration', 'Pear 配置', 'folder-cog'],
] as const satisfies readonly NavigationItem<ManagementKey>[];

export const MANAGE_MENU_SECTIONS: readonly ManagementKey[] = ['stats', 'taste', 'cleanup', 'activity', 'configuration'];
export function normalizeManageOrder(raw: unknown): ManagementKey[] {
  const entries = Array.isArray(raw) ? raw : [];
  return [...new Set([...entries.filter((key): key is ManagementKey => MANAGE_MENU_SECTIONS.includes(key)), ...MANAGE_MENU_SECTIONS])];
}
export const getManageMenuSections = (configurable: boolean, order?: unknown): readonly NavigationItem<ManagementKey>[] =>
  normalizeManageOrder(order).flatMap(key => key === 'configuration' && !configurable ? []
    : MANAGE_SECTIONS.filter(([entry]) => entry === key));

export const OPTIONAL_SIDEBAR_ITEMS: readonly NavigationItem<SidebarKey>[] = MANAGE_SECTIONS
  .flatMap(([key, label, glyph]): NavigationItem<SidebarKey>[] => key === 'configuration' ? []
    : [[key === 'cleanup' ? 'data-cleanup' : key, label, glyph]]);
export const NAV_CATALOG: readonly NavigationItem<SidebarKey>[] = [...SIDEBAR_ITEMS, ...OPTIONAL_SIDEBAR_ITEMS];
export const DIRECT_MANAGE_NAV: Readonly<Partial<Record<SidebarKey, ManagementKey>>> = {
  stats: 'stats', review: 'review', 'data-cleanup': 'cleanup', trash: 'trash',
  'follow-manage': 'follow', quality: 'quality', activity: 'activity',
};
