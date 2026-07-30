import { guestGuideFrigiliana } from './guestGuideFrigiliana';
import type { GuestGuideEntry } from '../types/guestGuide';

// Add guestGuideNerja.ts / guestGuideTarifa.ts here as that content is supplied —
// no route files ever need to change, only this list.
export const guestGuideEntries: GuestGuideEntry[] = [...guestGuideFrigiliana];

export function getGuestGuideBySlug(slug: string): GuestGuideEntry | undefined {
  return guestGuideEntries.find((entry) => entry.slug === slug);
}
