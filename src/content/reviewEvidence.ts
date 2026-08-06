import type { AmaraLanguage } from '../types/seo';

/**
 * Public review evidence is kept in one place so every visible trust signal
 * uses the same platform value, source and verification date.
 */
export const airbnbReviewEvidence = {
  platform: 'Airbnb',
  rating: 4.94,
  /** The figure verified on `checkedAt`. Kept as the record; not shown as-is. */
  reviewCount: 568,
  /**
   * What the public pages display. Rounded down so the claim stays true as
   * reviews accumulate, instead of going stale the week after it is written.
   */
  reviewCountLabel: '550+',
  checkedAt: '2026-08-04',
  sourceUrl: 'https://www.airbnb.com/rooms/52229175'
} as const;

export const airbnbRatingLabel: Record<AmaraLanguage, string> = {
  en: airbnbReviewEvidence.rating.toFixed(2),
  de: airbnbReviewEvidence.rating.toFixed(2).replace('.', ','),
  es: airbnbReviewEvidence.rating.toFixed(2).replace('.', ','),
  nl: airbnbReviewEvidence.rating.toFixed(2).replace('.', ','),
  sv: airbnbReviewEvidence.rating.toFixed(2).replace('.', ',')
};

export const airbnbCheckedAtLabel: Record<AmaraLanguage, string> = {
  en: '4 August 2026',
  de: '4. August 2026',
  es: '4 de agosto de 2026',
  nl: '4 augustus 2026',
  sv: '4 augusti 2026'
};
