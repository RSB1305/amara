export type AmaraPageEndRole = 'faq' | 'editorial-close' | 'next-action' | 'related-content' | 'conversion';
export type AmaraPageEndFamily = 'trust' | 'stay' | 'location' | 'experience';
export type AmaraPageEndWeight = 'supporting' | 'prominent' | 'decisive';

export const AMARA_PAGE_END_ROLES = {
  faq: { weight: 'supporting', surface: 'tint', width: 'content' },
  'editorial-close': { weight: 'supporting', surface: 'plain', width: 'reading' },
  'next-action': { weight: 'prominent', surface: 'plain', width: 'content' },
  'related-content': { weight: 'supporting', surface: 'tint', width: 'wide' },
  conversion: { weight: 'decisive', surface: 'plain', width: 'content' }
} as const satisfies Record<AmaraPageEndRole, {
  weight: AmaraPageEndWeight;
  surface: 'plain' | 'tint';
  width: 'reading' | 'content' | 'wide';
}>;

// Mobile DOM order is canonical. Families may omit roles, but the decisive
// conversion close remains last when present.
export const AMARA_PAGE_END_ORDER = [
  'faq', 'related-content', 'editorial-close', 'next-action', 'conversion'
] as const satisfies readonly AmaraPageEndRole[];

export function getPageEndAttributes(role: AmaraPageEndRole, family: AmaraPageEndFamily, followsFaq = false) {
  const contract = AMARA_PAGE_END_ROLES[role];
  return {
    'data-am-page-end-role': role,
    'data-am-page-end-family': family,
    'data-am-page-end-weight': contract.weight,
    'data-am-page-end-surface': contract.surface,
    'data-am-page-end-width': contract.width,
    'data-am-page-end-follows-faq': followsFaq || undefined
  };
}
