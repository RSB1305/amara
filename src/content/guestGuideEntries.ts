import { guestGuideFrigiliana } from './guestGuideFrigiliana';
import { guestGuideTarifa } from './guestGuideTarifa';
import type { GuestGuideEntry } from '../types/guestGuide';

// Guest-guide routes are generated from this list; content modules stay isolated by location.
export const guestGuideEntries: GuestGuideEntry[] = [...guestGuideFrigiliana, ...guestGuideTarifa];

export function getGuestGuideBySlug(slug: string): GuestGuideEntry | undefined {
  return guestGuideEntries.find((entry) => entry.slug === slug);
}
