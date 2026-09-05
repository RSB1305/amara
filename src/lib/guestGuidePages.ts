import { guestGuideEntries } from '../content/guestGuideEntries';
import type { GuestGuideEntry } from '../types/guestGuide';
import type { AmaraLanguage } from '../types/seo';
import {
  GUEST_GUIDE_ACCESS_SEGMENTS,
  guestGuideEntryPathParts
} from '../../guest-experience/guide-routes.mjs';

export type GuestGuidePageProps =
  | { kind: 'access'; lang: AmaraLanguage }
  | { kind: 'entry'; lang: AmaraLanguage; entry: GuestGuideEntry };

/**
 * Static paths of one language's Guest Guide below its localized root: the access
 * page and every entry, expressed as the rest parameter `guidePath`. The root itself
 * is the public landing page and belongs to the route manifest, not to this list.
 */
export function buildGuestGuideStaticPaths(lang: AmaraLanguage) {
  const access = {
    params: { guidePath: GUEST_GUIDE_ACCESS_SEGMENTS[lang] },
    props: { kind: 'access', lang } satisfies GuestGuidePageProps
  };
  const entries = guestGuideEntries.map((entry) => ({
    params: { guidePath: guestGuideEntryPathParts(entry.slug, lang).join('/') },
    props: { kind: 'entry', lang, entry } satisfies GuestGuidePageProps
  }));
  return [access, ...entries];
}
