import type { AmaraPageEndRole } from '../page-end/pageEndContract';

export type AmaraPageType = 'authority' | 'explore' | 'trust' | 'conversion';
export type AmaraInformationDensity = 'low' | 'moderate' | 'high-structured' | 'decision-only';
export type AmaraMediaWeight = 'functional' | 'generous' | 'authentic' | 'supporting';
export type AmaraWhitespaceIntent = 'moderate' | 'generous' | 'focused';
export type AmaraCtaMode = 'restrained-next' | 'inspire-next' | 'subtle-next' | 'single-primary';
export type AmaraConversionOwnership = 'page-end-owned' | 'family-owned';
export type AmaraPageTypePhase =
  | 'hero-orientation' | 'direct-answer' | 'structured-information' | 'evidence-faq-exceptions' | 'restrained-next'
  | 'visual-hero' | 'inspiring-context' | 'media-led-discovery' | 'curated-discovery' | 'inspiring-close'
  | 'brand-hero' | 'philosophy-statement' | 'principles-people-evidence' | 'quality-responsibility' | 'subtle-close'
  | 'stay-hero' | 'decision-facts' | 'availability-quote-action' | 'evidence-conditions' | 'conversion-owner-reachable' | 'no-second-funnel';

interface AmaraPageTypeProfile {
  purpose: 'answers' | 'discovery' | 'credibility' | 'decision';
  layout: 'linear-scannable' | 'editorial-magazine' | 'calm-evidence' | 'focused-reduced';
  density: AmaraInformationDensity;
  media: AmaraMediaWeight;
  whitespace: AmaraWhitespaceIntent;
  cta: AmaraCtaMode;
  pageEndRoles: readonly AmaraPageEndRole[];
  /** Canonical reference sequence; consumers may omit phases irrelevant to their dominant job. */
  referenceAnatomy: readonly AmaraPageTypePhase[];
  conversionOwnership?: readonly AmaraConversionOwnership[];
  reference: { family: string; route: string };
}

export const AMARA_PAGE_TYPE_PROFILES = {
  authority: {
    purpose: 'answers', layout: 'linear-scannable', density: 'high-structured', media: 'functional',
    whitespace: 'moderate', cta: 'restrained-next',
    pageEndRoles: ['faq', 'related-content', 'editorial-close', 'next-action'],
    referenceAnatomy: ['hero-orientation', 'direct-answer', 'structured-information', 'evidence-faq-exceptions', 'restrained-next'],
    reference: { family: 'location-arrival', route: 'getting-to-frigiliana' }
  },
  explore: {
    purpose: 'discovery', layout: 'editorial-magazine', density: 'low', media: 'generous',
    whitespace: 'generous', cta: 'inspire-next',
    pageEndRoles: ['related-content', 'editorial-close', 'next-action'],
    referenceAnatomy: ['visual-hero', 'inspiring-context', 'media-led-discovery', 'curated-discovery', 'inspiring-close'],
    reference: { family: 'experience-hub', route: 'frigiliana-experience' }
  },
  trust: {
    purpose: 'credibility', layout: 'calm-evidence', density: 'moderate', media: 'authentic',
    whitespace: 'generous', cta: 'subtle-next',
    pageEndRoles: ['faq', 'editorial-close', 'next-action'],
    referenceAnatomy: ['brand-hero', 'philosophy-statement', 'principles-people-evidence', 'quality-responsibility', 'subtle-close'],
    reference: { family: 'trust-content', route: 'amara-about-us' }
  },
  conversion: {
    purpose: 'decision', layout: 'focused-reduced', density: 'decision-only', media: 'supporting',
    whitespace: 'focused', cta: 'single-primary',
    pageEndRoles: ['faq', 'editorial-close', 'conversion'],
    referenceAnatomy: ['stay-hero', 'decision-facts', 'availability-quote-action', 'evidence-conditions', 'conversion-owner-reachable', 'no-second-funnel'],
    conversionOwnership: ['page-end-owned', 'family-owned'],
    reference: { family: 'vacation-rental', route: 'la-amara-maha' }
  }
} as const satisfies Record<AmaraPageType, AmaraPageTypeProfile>;

interface AmaraPageFamilyProfile {
  type: AmaraPageType;
  tier: 'reference' | 'approved';
  conversionOwnership?: AmaraConversionOwnership;
}

export const AMARA_PAGE_FAMILY_PROFILES = {
  home: { type: 'explore', tier: 'approved' },
  'romantic-hideaways': { type: 'conversion', tier: 'approved', conversionOwnership: 'family-owned' },
  'comfort-amenities': { type: 'trust', tier: 'approved' },
  'group-stays': { type: 'conversion', tier: 'approved', conversionOwnership: 'page-end-owned' },
  'general-faq': { type: 'authority', tier: 'approved' },
  'property-sale': { type: 'conversion', tier: 'approved', conversionOwnership: 'page-end-owned' },
  'arrival-directions': { type: 'authority', tier: 'approved' },
  'location-arrival': { type: 'authority', tier: 'reference' },
  'location-frigiliana-faq': { type: 'authority', tier: 'approved' },
  'location-frigiliana-overview': { type: 'authority', tier: 'approved' },
  'location-frigiliana-nerja-comparison': { type: 'authority', tier: 'approved' },
  'location-frigiliana-streets': { type: 'authority', tier: 'approved' },
  'location-tarifa-overview': { type: 'authority', tier: 'approved' },
  'location-tarifa-where-to-stay': { type: 'authority', tier: 'approved' },
  'experience-hub': { type: 'explore', tier: 'reference' },
  'experience-frigiliana-old-town': { type: 'explore', tier: 'approved' },
  'experience-nerja-article': { type: 'explore', tier: 'approved' },
  'experience-nerja-verano-azul': { type: 'explore', tier: 'approved' },
  'experience-tarifa-guide': { type: 'explore', tier: 'approved' },
  'location-winter-stays': { type: 'authority', tier: 'approved' },
  'experience-beaches': { type: 'explore', tier: 'approved' },
  'experience-hiking': { type: 'explore', tier: 'approved' },
  'experience-restaurants': { type: 'explore', tier: 'approved' },
  'experience-wellness': { type: 'explore', tier: 'approved' },
  'experience-market': { type: 'explore', tier: 'approved' },
  'campaign-honeymoon': { type: 'explore', tier: 'approved' },
  'campaign-weddings': { type: 'explore', tier: 'approved' },
  'experience-nerja-hub': { type: 'explore', tier: 'approved' },
  'experience-tarifa-hub': { type: 'explore', tier: 'approved' },
  'experience-tarifa-spoke': { type: 'explore', tier: 'approved' },
  'experience-nerja-beaches': { type: 'explore', tier: 'approved' },
  'experience-nerja-food': { type: 'explore', tier: 'approved' },
  'experience-nerja-nightlife': { type: 'explore', tier: 'approved' },
  'experience-nerja-day-trips': { type: 'explore', tier: 'approved' },
  'experience-frigiliana-festivals': { type: 'explore', tier: 'approved' },
  'experience-frigiliana-day-trips': { type: 'explore', tier: 'approved' },
  'experience-frigiliana-dos-tumbas': { type: 'explore', tier: 'approved' },
  'trust-content': { type: 'trust', tier: 'reference' },
  'guest-reviews': { type: 'trust', tier: 'approved' },
  'direct-booking': { type: 'conversion', tier: 'reference', conversionOwnership: 'page-end-owned' },
  'vacation-rental': { type: 'conversion', tier: 'reference', conversionOwnership: 'family-owned' },
  'booking-stay-terms': { type: 'authority', tier: 'approved' },
  'legal-notice': { type: 'authority', tier: 'approved' },
  'nerja-location-hub': { type: 'authority', tier: 'approved' },
  'nerja-where-to-stay': { type: 'authority', tier: 'approved' },
  'location-parking': { type: 'authority', tier: 'approved' },
  'location-weather': { type: 'authority', tier: 'approved' },
  'location-geography': { type: 'authority', tier: 'approved' },
  'location-daily-life': { type: 'authority', tier: 'approved' },
  instagram: { type: 'explore', tier: 'approved' },
  'stay-search-results': { type: 'conversion', tier: 'approved', conversionOwnership: 'family-owned' },
  'last-minute-stays': { type: 'conversion', tier: 'approved', conversionOwnership: 'family-owned' }
} as const satisfies Record<string, AmaraPageFamilyProfile>;

export type AmaraPageFamilyId = keyof typeof AMARA_PAGE_FAMILY_PROFILES;

export function getPageFamilyProfile(family: AmaraPageFamilyId) {
  const profile = AMARA_PAGE_FAMILY_PROFILES[family];
  if (!profile) throw new Error(`[AMARA page type] Unregistered page family: ${family}`);
  return profile;
}

export function getPageTypeAttributes(type: AmaraPageType, family?: AmaraPageFamilyId, conversionOwnership?: AmaraConversionOwnership) {
  const profile = AMARA_PAGE_TYPE_PROFILES[type];
  return {
    'data-am-page-type': type,
    'data-am-page-type-family': family,
    'data-am-page-family': family,
    'data-am-page-type-purpose': profile.purpose,
    'data-am-page-type-layout': profile.layout,
    'data-am-page-type-density': profile.density,
    'data-am-page-type-media': profile.media,
    'data-am-page-type-whitespace': profile.whitespace,
    'data-am-page-type-cta': profile.cta,
    'data-am-page-type-conversion-ownership': conversionOwnership
  };
}

export function getPageFamilyAttributes(family: AmaraPageFamilyId) {
  const profile = getPageFamilyProfile(family);
  return getPageTypeAttributes(profile.type, family, 'conversionOwnership' in profile ? profile.conversionOwnership : undefined);
}

export function isPageEndRoleAllowed(type: AmaraPageType, role: AmaraPageEndRole) {
  return (AMARA_PAGE_TYPE_PROFILES[type].pageEndRoles as readonly AmaraPageEndRole[]).includes(role);
}
