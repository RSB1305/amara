export const AMARA_MEDIA_ROLES = {
  hero: { profile: 'hero', aspect: 'family-owned', priority: 'lcp-candidate' },
  editorial: { profile: 'gallery', aspect: '3:2', priority: 'deferred' },
  split: { profile: 'gallery', aspect: 'family-owned', priority: 'deferred' },
  card: { profile: 'card', aspect: '4:3', priority: 'deferred' },
  gallery: { profile: 'gallery', aspect: '4:5-mobile/4:3-wide', priority: 'deferred' },
  utility: { profile: 'gallery', aspect: 'intrinsic', priority: 'deferred' }
} as const;

export type AmaraMediaRole = keyof typeof AMARA_MEDIA_ROLES;
export type AmaraMediaSurface = 'plain' | 'subtle';
export type AmaraMediaRadius = 'none' | 'soft';
