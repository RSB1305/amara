export type AmaraAuthorityFamilyGroup = 'practical-guidance' | 'destination-orientation' | 'faq-authority' | 'documentary-authority';

export type AmaraAuthorityFamilyId =
  | 'general-faq'
  | 'arrival-directions'
  | 'location-arrival'
  | 'location-frigiliana-faq'
  | 'location-frigiliana-overview'
  | 'location-frigiliana-nerja-comparison'
  | 'location-frigiliana-streets'
  | 'location-tarifa-overview'
  | 'location-tarifa-where-to-stay'
  | 'location-winter-stays'
  | 'booking-stay-terms'
  | 'legal-notice'
  | 'nerja-location-hub'
  | 'nerja-where-to-stay'
  | 'location-parking'
  | 'location-weather'
  | 'location-geography'
  | 'location-daily-life';

export type AmaraAuthorityFamilyPhase = 'orientation' | 'direct-answer' | 'structured-information' | 'evidence-exceptions' | 'restrained-close';

interface AmaraAuthorityGroupProfile {
  job: 'act-and-plan' | 'orient-and-compare' | 'answer-questions' | 'record-and-disclose';
  phases: readonly AmaraAuthorityFamilyPhase[];
  intro: 'direct-answer' | 'spatial-orientation' | 'question-led' | 'formal-context';
  information: 'steps-facts-exceptions' | 'place-fit-tradeoffs' | 'answers-and-related-guidance' | 'document-sections-and-identities';
  media: 'functional-optional' | 'orientation-supporting' | 'not-required';
  close: 'restrained-next' | 'optional-reference' | 'none-required';
}

export const AMARA_AUTHORITY_FAMILY_GROUPS = {
  'practical-guidance': {
    job: 'act-and-plan', phases: ['orientation', 'direct-answer', 'structured-information', 'evidence-exceptions', 'restrained-close'],
    intro: 'direct-answer', information: 'steps-facts-exceptions', media: 'functional-optional', close: 'restrained-next'
  },
  'destination-orientation': {
    job: 'orient-and-compare', phases: ['orientation', 'direct-answer', 'structured-information', 'evidence-exceptions', 'restrained-close'],
    intro: 'spatial-orientation', information: 'place-fit-tradeoffs', media: 'orientation-supporting', close: 'restrained-next'
  },
  'faq-authority': {
    job: 'answer-questions', phases: ['orientation', 'direct-answer', 'structured-information', 'restrained-close'],
    intro: 'question-led', information: 'answers-and-related-guidance', media: 'not-required', close: 'optional-reference'
  },
  'documentary-authority': {
    job: 'record-and-disclose', phases: ['orientation', 'structured-information', 'evidence-exceptions'],
    intro: 'formal-context', information: 'document-sections-and-identities', media: 'not-required', close: 'none-required'
  }
} as const satisfies Record<AmaraAuthorityFamilyGroup, AmaraAuthorityGroupProfile>;

export const AMARA_AUTHORITY_FAMILY_ASSIGNMENTS = {
  'arrival-directions': 'practical-guidance', 'location-arrival': 'practical-guidance',
  'location-frigiliana-streets': 'practical-guidance', 'location-winter-stays': 'practical-guidance',
  'location-parking': 'practical-guidance', 'location-weather': 'practical-guidance',
  'location-geography': 'practical-guidance', 'location-daily-life': 'practical-guidance',
  'location-frigiliana-overview': 'destination-orientation', 'location-frigiliana-nerja-comparison': 'destination-orientation',
  'location-tarifa-overview': 'destination-orientation', 'location-tarifa-where-to-stay': 'destination-orientation',
  'nerja-location-hub': 'destination-orientation', 'nerja-where-to-stay': 'destination-orientation',
  'general-faq': 'faq-authority', 'location-frigiliana-faq': 'faq-authority',
  'booking-stay-terms': 'documentary-authority', 'legal-notice': 'documentary-authority'
} as const satisfies Record<AmaraAuthorityFamilyId, AmaraAuthorityFamilyGroup>;

export function isAmaraAuthorityFamilyId(family: string | undefined): family is AmaraAuthorityFamilyId {
  return Boolean(family && family in AMARA_AUTHORITY_FAMILY_ASSIGNMENTS);
}

export function getAuthorityFamilyAttributes(family: AmaraAuthorityFamilyId) {
  const group = AMARA_AUTHORITY_FAMILY_ASSIGNMENTS[family];
  const profile = AMARA_AUTHORITY_FAMILY_GROUPS[group];
  return {
    'data-am-authority-family': family, 'data-am-authority-group': group, 'data-am-authority-job': profile.job,
    'data-am-authority-intro': profile.intro, 'data-am-authority-information': profile.information,
    'data-am-authority-media': profile.media, 'data-am-authority-close': profile.close,
    'data-am-authority-phases': profile.phases.join(' ')
  };
}
