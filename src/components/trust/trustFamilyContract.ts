export type AmaraTrustFamilyId = 'trust-content' | 'guest-reviews' | 'comfort-amenities';

export type AmaraTrustFamilyPhase =
  | 'orientation'
  | 'statement'
  | 'principles'
  | 'evidence'
  | 'people'
  | 'quality'
  | 'responsibility'
  | 'subtle-close';

interface AmaraTrustFamilyProfile {
  job: 'brand-philosophy' | 'guest-evidence' | 'comfort-proof';
  phases: readonly AmaraTrustFamilyPhase[];
  intro: 'editorial' | 'evidence-led' | 'functional';
  evidence: 'principles-and-people' | 'reviews-and-sources' | 'inventory-and-detail';
  close: 'subtle-next';
}

export const AMARA_TRUST_FAMILY_PROFILES = {
  'trust-content': {
    job: 'brand-philosophy',
    phases: ['orientation', 'statement', 'principles', 'quality', 'responsibility', 'people', 'subtle-close'],
    intro: 'editorial',
    evidence: 'principles-and-people',
    close: 'subtle-next'
  },
  'guest-reviews': {
    job: 'guest-evidence',
    phases: ['orientation', 'statement', 'evidence', 'quality', 'subtle-close'],
    intro: 'evidence-led',
    evidence: 'reviews-and-sources',
    close: 'subtle-next'
  },
  'comfort-amenities': {
    job: 'comfort-proof',
    phases: ['orientation', 'quality', 'evidence', 'subtle-close'],
    intro: 'functional',
    evidence: 'inventory-and-detail',
    close: 'subtle-next'
  }
} as const satisfies Record<AmaraTrustFamilyId, AmaraTrustFamilyProfile>;

export function isAmaraTrustFamilyId(family: string | undefined): family is AmaraTrustFamilyId {
  return Boolean(family && family in AMARA_TRUST_FAMILY_PROFILES);
}

export function getTrustFamilyAttributes(family: AmaraTrustFamilyId) {
  const profile = AMARA_TRUST_FAMILY_PROFILES[family];
  return {
    'data-am-trust-family': family,
    'data-am-trust-job': profile.job,
    'data-am-trust-intro': profile.intro,
    'data-am-trust-evidence': profile.evidence,
    'data-am-trust-close': profile.close,
    'data-am-trust-phases': profile.phases.join(' ')
  };
}
