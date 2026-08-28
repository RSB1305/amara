import type { AmaraLanguage } from '../types/seo';

/**
 * Public review evidence is kept in one place so every visible trust signal
 * uses the same platform value, source and verification date.
 */
export const airbnbReviewEvidence = {
  platform: 'Airbnb',
  rating: 4.94,
  /** The figure verified on `checkedAt`. Kept as the record; not shown as-is. */
  reviewCount: 601,
  /**
   * What the public pages display. Rounded down so the claim stays true as
   * reviews accumulate, instead of going stale the week after it is written.
   */
  reviewCountLabel: '600+',
  checkedAt: '2026-08-24',
  sourceUrl: 'https://www.airbnb.com/users/show/12417181'
} as const;

/**
 * Host-level trust evidence that is not review text but is derived from guest
 * reviews. Kept beside the review record so a single verification date governs
 * every trust signal AMARA shows in public.
 *
 * Both claims are time-bound: Superhost status is reassessed by Airbnb each
 * quarter and the Traveller Review Awards carry a year. Re-verify on the same
 * pass as `airbnbReviewEvidence` and never let a stale year stand.
 */
export const hostTrustEvidence = {
  /** Airbnb Superhost, first awarded 2021 and held since. */
  superhostSince: 2021,
  /** Booking.com Traveller Review Awards: five of the six stays, 2026 edition. */
  travellerReviewAwards: { count: 5, year: 2026 },
  /** Completed guest stays across all AMARA accommodations. */
  staysLabel: '2.000+'
} as const;

export const airbnbRatingLabel: Record<AmaraLanguage, string> = {
  en: airbnbReviewEvidence.rating.toFixed(2),
  de: airbnbReviewEvidence.rating.toFixed(2).replace('.', ','),
  es: airbnbReviewEvidence.rating.toFixed(2).replace('.', ','),
  nl: airbnbReviewEvidence.rating.toFixed(2).replace('.', ','),
  sv: airbnbReviewEvidence.rating.toFixed(2).replace('.', ',')
};

export const airbnbCheckedAtLabel: Record<AmaraLanguage, string> = {
  en: '24 August 2026',
  de: '24. August 2026',
  es: '24 de agosto de 2026',
  nl: '24 augustus 2026',
  sv: '24 augusti 2026'
};

/** Superhost badge line — the hero proof strip and the trust band share it. */
export const superhostLabel: Record<AmaraLanguage, string> = {
  en: `Airbnb Superhost since ${hostTrustEvidence.superhostSince}`,
  de: `Airbnb-Superhost seit ${hostTrustEvidence.superhostSince}`,
  es: `Superanfitrión de Airbnb desde ${hostTrustEvidence.superhostSince}`,
  nl: `Airbnb Superhost sinds ${hostTrustEvidence.superhostSince}`,
  sv: `Airbnb Superhost sedan ${hostTrustEvidence.superhostSince}`
};

/** Compact Booking.com award proof for the opening trust treatment. */
export const travellerReviewAwardLabel: Record<AmaraLanguage, string> = {
  en: `${hostTrustEvidence.travellerReviewAwards.count}× Booking.com Traveller Review Awards ${hostTrustEvidence.travellerReviewAwards.year}`,
  de: `${hostTrustEvidence.travellerReviewAwards.count}× Booking.com Traveller Review Awards ${hostTrustEvidence.travellerReviewAwards.year}`,
  es: `${hostTrustEvidence.travellerReviewAwards.count}× Traveller Review Awards de Booking.com ${hostTrustEvidence.travellerReviewAwards.year}`,
  nl: `${hostTrustEvidence.travellerReviewAwards.count}× Booking.com Traveller Review Awards ${hostTrustEvidence.travellerReviewAwards.year}`,
  sv: `${hostTrustEvidence.travellerReviewAwards.count}× Booking.com Traveller Review Awards ${hostTrustEvidence.travellerReviewAwards.year}`
};

/** Completed-stays line for the trust band. */
export const completedStaysLabel: Record<AmaraLanguage, string> = {
  en: `${hostTrustEvidence.staysLabel.replace('.', ',')} guest stays since ${hostTrustEvidence.superhostSince}`,
  de: `${hostTrustEvidence.staysLabel} Gästewechsel seit ${hostTrustEvidence.superhostSince}`,
  es: `${hostTrustEvidence.staysLabel.replace('.', '.')} estancias desde ${hostTrustEvidence.superhostSince}`,
  nl: `${hostTrustEvidence.staysLabel} verblijven sinds ${hostTrustEvidence.superhostSince}`,
  sv: `${hostTrustEvidence.staysLabel.replace('.', ' ')} vistelser sedan ${hostTrustEvidence.superhostSince}`
};
