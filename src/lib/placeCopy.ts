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
export interface PublicRestaurantCopy {
  kind: 'restaurant';
  /** Card title as the public page names the place. */
  title: LocalizedText;
  bestFor: LocalizedText;
  description: LocalizedText;
  /** The public callout, labelled "Good to know". */
  goodToKnow: LocalizedText;
  /** The reservation or visit hint, labelled "Before you go". */
  beforeYouGo: LocalizedText;
}

export interface PublicBeachCopy {
  kind: 'beach';
  title: LocalizedText;
  bestFor: LocalizedText;
  description: LocalizedText;
  /** The public callout, labelled "Our take". */
  goodToKnow: LocalizedText;
}

export interface PublicHikeCopy {
  kind: 'hike';
  title: LocalizedText;
  duration?: LocalizedText;
  elevationGain?: LocalizedText;
  distance?: LocalizedText;
  difficulty: LocalizedText;
  experience: LocalizedText;
  paragraphs: readonly LocalizedText[];
  /** Official and navigation sources the public card links. */
  sourceLinks: readonly { label: LocalizedText; context: LocalizedText; href: string }[];
}

export interface PublicDayTripCopy {
  kind: 'day-trip';
  /** Section anchor and lookup key the page families use, e.g. `malaga`. */
  sectionId: string;
  kicker: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  facts: readonly { label: LocalizedText; value: LocalizedText }[];
  planningTitle: LocalizedText;
  callout: LocalizedText;
  details: LocalizedText;
  /** Official information per language, because the official sites are localized. */
  officialHref: LocalizedText;
  officialLabel: LocalizedText;
}

export interface PublicWellnessCopy {
  kind: 'wellness';
  name: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  highlights: readonly { title: LocalizedText; text: LocalizedText }[];
  bestFor: LocalizedText;
}

export type PlacePublicCopy =
  | PublicRestaurantCopy
  | PublicBeachCopy
  | PublicHikeCopy
  | PublicDayTripCopy
  | PublicWellnessCopy;

export interface PlaceGuideCopy {
  /** Localized card title when the record name is not what guests read, e.g. "Burriana Strand"; defaults to the record name. */
  title?: LocalizedText;
  /** Row summary under the title, e.g. "Frigiliana · terrace view · approx. 220 m". */
  subtitle?: LocalizedText;
  /** Paragraphs of the guide card; may carry trusted inline HTML. */
  why: readonly LocalizedText[];
  /** What to say when reserving, e.g. "ask for a table at the railing". */
  reservationLine?: LocalizedText;
  /** Operational note for the day itself: parking, timing, shuttle, what to bring. */
  onTheDay?: LocalizedText;
  /** The alternative when the place is full, closed or unsuitable that day. */
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
  return Boolean(copy && (copy.reservationLine || copy.onTheDay || copy.planB || copy.hostNote));
}

/** Every localized string of a public projection in one language, for the identical-copy check. */
export function publicStrings(copy: PlacePublicCopy, lang: keyof LocalizedText): string[] {
  const out: string[] = [];
  const walk = (value: unknown): void => {
    if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === 'object') {
      const record = value as Record<string, unknown>;
      if (typeof record[lang] === 'string' && typeof record.en === 'string') out.push(record[lang] as string);
      else Object.values(record).forEach(walk);
    }
  };
  walk(copy);
  return out;
}
