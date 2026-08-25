export type AmaraSectionVariant = 'default' | 'hero' | 'compact' | 'closing';
export type AmaraSectionSurface = 'plain' | 'tint' | 'inverse';
export type AmaraSectionFamily =
  | 'shared'
  | 'trust'
  | 'stay'
  | 'location'
  | 'experience'
  | 'campaign';
export type AmaraSectionStatus = 'canonical' | 'family' | 'legacy';

export type AmaraSectionIntroVariant = 'standard' | 'centered' | 'editorial';
export type AmaraSectionIntroSpacing = 'default' | 'compact' | 'none';

export function getAmaraSectionAttributes(options: {
  variant: AmaraSectionVariant;
  surface: AmaraSectionSurface;
  family: AmaraSectionFamily;
  status: AmaraSectionStatus;
}) {
  return {
    'data-am-section': '',
    'data-am-section-variant': options.variant,
    'data-am-section-surface': options.surface,
    'data-am-section-family': options.family,
    'data-am-section-status': options.status
  };
}

export function getAmaraSectionIntroAttributes(options: {
  variant: AmaraSectionIntroVariant;
  status: Exclude<AmaraSectionStatus, 'legacy'>;
}) {
  return {
    'data-am-section-intro': '',
    'data-am-section-intro-variant': options.variant,
    'data-am-section-intro-status': options.status
  };
}
