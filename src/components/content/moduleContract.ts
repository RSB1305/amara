export type AmaraContentModuleStatus = 'canonical' | 'family' | 'legacy';

export type AmaraContentModuleJob =
  | 'editorial-feature-grid'
  | 'practical-callout'
  | 'guide-link-grid'
  | 'stay-selection-card'
  | 'evidence-panel'
  | 'editorial-comparison'
  | 'booking-decision'
  | 'editorial-statement';

interface AmaraContentModuleContract {
  job: AmaraContentModuleJob;
  status: AmaraContentModuleStatus;
  family?: 'trust' | 'stay' | 'location' | 'experience' | 'conversion';
}

/**
 * Shared classification hook for card-like and editorial modules. It keeps
 * semantically different jobs separate while making their production owners
 * discoverable from rendered output.
 */
export const getAmaraContentModuleAttributes = ({
  job,
  status,
  family
}: AmaraContentModuleContract) => ({
  'data-am-content-module': job,
  'data-am-content-module-status': status,
  'data-am-content-module-family': family
});
