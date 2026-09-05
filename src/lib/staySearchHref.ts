import type { AmaraLanguage } from '../types/seo';
import { buildOwnedLocalizedPath } from './routeOwnership';

/** Destination values the stay search finder preselects from its `destination` query parameter. */
export type StaySearchDestination = 'frigiliana' | 'nerja' | 'tarifa';

/**
 * The site's own availability search in the given language, optionally with a
 * destination preselected. AMARA-authored availability links point here rather
 * than at the booking provider's landing page, so the guest starts in the
 * AMARA finder with live availability and the provider only appears at checkout.
 */
export function staySearchHref(lang: AmaraLanguage, destination?: StaySearchDestination): string {
  const path = buildOwnedLocalizedPath('stays.search', lang);
  return destination ? `${path}?destination=${destination}` : path;
}
