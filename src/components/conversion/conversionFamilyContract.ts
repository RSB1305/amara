import { getPageFamilyProfile, type AmaraConversionOwnership } from '../page-type/pageTypeContract';

export type AmaraConversionFamilyGroup = 'stay-discovery' | 'stay-decision' | 'direct-booking' | 'specialist-enquiry';

export type AmaraConversionFamilyId =
  | 'romantic-hideaways'
  | 'vacation-rental'
  | 'stay-search-results'
  | 'last-minute-stays'
  | 'group-stays'
  | 'property-sale'
  | 'direct-booking';

export type AmaraConversionFamilyPhase = 'orientation' | 'decision' | 'evidence' | 'action' | 'terminal-close';

interface AmaraConversionGroupProfile {
  job: 'find-a-stay' | 'decide-on-a-stay' | 'choose-direct-booking' | 'make-specialist-enquiry';
  ownership: AmaraConversionOwnership;
  phases: readonly AmaraConversionFamilyPhase[];
  intro: 'selection-context' | 'stay-specific' | 'benefit-led' | 'specialist-brief';
  decision: 'search-and-fit' | 'facts-calendar-and-quote' | 'direct-benefits-and-trust' | 'scope-and-suitability';
  evidence: 'stay-options-and-availability' | 'property-facts-and-conditions' | 'promises-and-rationale' | 'requirements-and-terms';
  action: 'family-owned-selection' | 'family-owned-checkout-handoff' | 'single-terminal-booking-close' | 'single-terminal-enquiry-close';
  allowedClose: 'editorial-only' | 'one-booking-close' | 'one-enquiry-close';
  funnelProtection: 'family-owner-is-terminal' | 'exactly-one-page-end-terminal';
}

export const AMARA_CONVERSION_FAMILY_GROUPS = {
  'stay-discovery': {
    job: 'find-a-stay', ownership: 'family-owned', phases: ['orientation', 'decision', 'evidence', 'action'],
    intro: 'selection-context', decision: 'search-and-fit', evidence: 'stay-options-and-availability',
    action: 'family-owned-selection', allowedClose: 'editorial-only', funnelProtection: 'family-owner-is-terminal'
  },
  'stay-decision': {
    job: 'decide-on-a-stay', ownership: 'family-owned', phases: ['orientation', 'decision', 'evidence', 'action'],
    intro: 'stay-specific', decision: 'facts-calendar-and-quote', evidence: 'property-facts-and-conditions',
    action: 'family-owned-checkout-handoff', allowedClose: 'editorial-only', funnelProtection: 'family-owner-is-terminal'
  },
  'direct-booking': {
    job: 'choose-direct-booking', ownership: 'page-end-owned', phases: ['orientation', 'decision', 'evidence', 'terminal-close'],
    intro: 'benefit-led', decision: 'direct-benefits-and-trust', evidence: 'promises-and-rationale',
    action: 'single-terminal-booking-close', allowedClose: 'one-booking-close', funnelProtection: 'exactly-one-page-end-terminal'
  },
  'specialist-enquiry': {
    job: 'make-specialist-enquiry', ownership: 'page-end-owned', phases: ['orientation', 'decision', 'evidence', 'terminal-close'],
    intro: 'specialist-brief', decision: 'scope-and-suitability', evidence: 'requirements-and-terms',
    action: 'single-terminal-enquiry-close', allowedClose: 'one-enquiry-close', funnelProtection: 'exactly-one-page-end-terminal'
  }
} as const satisfies Record<AmaraConversionFamilyGroup, AmaraConversionGroupProfile>;

export const AMARA_CONVERSION_FAMILY_ASSIGNMENTS = {
  'romantic-hideaways': 'stay-discovery',
  'stay-search-results': 'stay-discovery',
  'last-minute-stays': 'stay-discovery',
  'vacation-rental': 'stay-decision',
  'direct-booking': 'direct-booking',
  'group-stays': 'specialist-enquiry',
  'property-sale': 'specialist-enquiry'
} as const satisfies Record<AmaraConversionFamilyId, AmaraConversionFamilyGroup>;

export function isAmaraConversionFamilyId(family: string | undefined): family is AmaraConversionFamilyId {
  return Boolean(family && family in AMARA_CONVERSION_FAMILY_ASSIGNMENTS);
}

export function getConversionFamilyAttributes(family: AmaraConversionFamilyId) {
  const group = AMARA_CONVERSION_FAMILY_ASSIGNMENTS[family];
  const profile = AMARA_CONVERSION_FAMILY_GROUPS[group];
  const registeredProfile = getPageFamilyProfile(family);
  const registeredOwnership = 'conversionOwnership' in registeredProfile ? registeredProfile.conversionOwnership : undefined;
  if (registeredOwnership !== profile.ownership) {
    throw new Error(`[AMARA conversion family] Ownership mismatch for ${family}`);
  }

  return {
    'data-am-conversion-family': family,
    'data-am-conversion-group': group,
    'data-am-conversion-job': profile.job,
    'data-am-conversion-ownership': profile.ownership,
    'data-am-conversion-intro': profile.intro,
    'data-am-conversion-decision': profile.decision,
    'data-am-conversion-evidence': profile.evidence,
    'data-am-conversion-action': profile.action,
    'data-am-conversion-close': profile.allowedClose,
    'data-am-conversion-funnel-protection': profile.funnelProtection,
    'data-am-conversion-phases': profile.phases.join(' ')
  };
}
