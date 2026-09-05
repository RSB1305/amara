export const AMARA_MEDIA_ROLES = {
  hero: { profile: 'hero', aspect: 'family-owned', priority: 'lcp-candidate' },
  editorial: { profile: 'gallery', aspect: '3:2', priority: 'deferred' },
  split: { profile: 'gallery', aspect: 'family-owned', priority: 'deferred' },
  card: { profile: 'card', aspect: '4:3', priority: 'deferred' },
  gallery: { profile: 'gallery', aspect: '4:5-mobile/4:3-wide', priority: 'deferred' },
  // The wide editorial band of the Tarifa art direction (DR-DESIGN-020): portrait on
  // phones, 16:9 on tablets, 16:7 on wide viewports. Deferred by default; a page that
  // opens with it nominates its own LCP through the panorama hero, not this role.
  panorama: { profile: 'hero', aspect: '4:5-mobile/16:9-tablet/16:7-wide', priority: 'deferred' },
  utility: { profile: 'gallery', aspect: 'intrinsic', priority: 'deferred' }
} as const;

export type AmaraMediaRole = keyof typeof AMARA_MEDIA_ROLES;
export type AmaraMediaSurface = 'plain' | 'subtle';
export type AmaraMediaRadius = 'none' | 'soft';
