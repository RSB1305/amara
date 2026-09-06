import type { LocalizedText } from '../types/content';

/**
 * Place copy: the localized text of one place, both projections side by side.
 *
 * The record in `knowledge/recommendations` owns the language-free data (name,
 * address, map, contacts, facts, scope). This layer owns the words. `public`
 * is what the public page says: it explains and differentiates. `guide` is
 * what the Guest Guide says: it directs and helps execute. A place is written
 * once; the two projections must differ (DR-GUEST-006), and a `split` place
 * needs at least one guide-only field.
 */
export interface PlacePublicCopy {
  /** Card title as the public page names the place. */
  title: LocalizedText;
  bestFor: LocalizedText;
  description: LocalizedText;
  /** The public callout, labelled "Good to know". */
  goodToKnow: LocalizedText;
  /** The reservation or visit hint, labelled "Before you go". */
  beforeYouGo: LocalizedText;
}

export interface PlaceGuideCopy {
  /** Row summary under the title, e.g. "Frigiliana · terrace view · approx. 220 m". */
  subtitle?: LocalizedText;
  /** Paragraphs of the guide card; may carry trusted inline HTML. */
  why: readonly LocalizedText[];
  /** What to say when reserving, e.g. "ask for a table at the railing". */
  reservationLine?: LocalizedText;
  /** The alternative when the place is full or closed. */
  planB?: LocalizedText;
  /** A dated first-hand note by the hosts. */
  hostNote?: { text: LocalizedText; date: string };
}

export interface PlaceCopy {
  public?: PlacePublicCopy;
  guide?: PlaceGuideCopy;
}

export type PlaceCopyMap = Readonly<Record<string, PlaceCopy>>;

export const definePlaceCopy = <const T extends PlaceCopyMap>(copy: T): T => copy;

/** Guide-only fields that justify a `split` place appearing in the guide at all. */
export function hasGuideOnlyCopy(copy: PlaceGuideCopy | undefined): boolean {
  return Boolean(copy && (copy.reservationLine || copy.planB || copy.hostNote));
}
