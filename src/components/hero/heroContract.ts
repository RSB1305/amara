export type AmaraHeroFamily = 'trust' | 'stay' | 'location' | 'experience' | 'campaign';

export type AmaraHeroRole = 'hub' | 'spoke' | 'conversion';

export type AmaraHeroVariant =
  | 'trust-content'
  | 'stay-decision'
  | 'authority-media'
  | 'authority-evidence'
  | 'authority-editorial'
  | 'authority-panorama'
  | 'campaign-media';

export interface AmaraHeroAction {
  href: string;
  label: string;
}

export interface AmaraHeroStyledAction extends AmaraHeroAction {
  style: 'primary' | 'secondary';
}

export interface AmaraHeroByline {
  lang: AmaraLanguage;
  authorName: string;
  authorHref: string;
  updated: string;
  note: string;
}

export interface AmaraHeroContract {
  family: AmaraHeroFamily;
  variant: AmaraHeroVariant;
  role?: AmaraHeroRole;
  topic?: string;
}

/**
 * Shared semantic hook for AMARA hero owners. The contract deliberately owns
 * classification, not geometry: each named family variant keeps the layout
 * required by its page job.
 */
export const getAmaraHeroAttributes = ({
  family,
  variant,
  role,
  topic
}: AmaraHeroContract) => ({
  'data-am-hero': '',
  'data-am-hero-family': family,
  'data-am-hero-variant': variant,
  'data-am-hero-role': role,
  'data-am-hero-topic': topic,
  'data-am-design-status': 'family',
  // Compatibility hooks remain while page-family selectors move to the
  // explicit hero namespace.
  'data-am-family': family,
  'data-am-role': role,
  'data-am-topic': topic
});
import type { AmaraLanguage } from '../../types/seo';
