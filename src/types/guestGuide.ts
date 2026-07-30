import type { AmaraEntityKey, AmaraLanguage } from './seo';

export type LocalizedText = Record<AmaraLanguage, string>;

export type GuestGuideIconName =
  | 'accommodation'
  | 'location-pin'
  | 'compass'
  | 'car'
  | 'wifi'
  | 'climate'
  | 'coffee'
  | 'sparkle'
  | 'trash'
  | 'moon'
  | 'tap-water'
  | 'no-smoking'
  | 'ventilate'
  | 'departure'
  | 'late-checkout';

export interface GuestGuideAccordionItem {
  icon: GuestGuideIconName;
  title: LocalizedText;
  /** Paragraphs, each may contain trusted inline HTML (<strong>, <a>). */
  body: LocalizedText[];
  image?: {
    /** Public-style path resolved via the AmaraImage/content registry, e.g. /images/amara-farah/foo.jpg */
    src: string;
    alt: LocalizedText;
    caption?: LocalizedText;
  };
}

export interface GuestGuideCategory {
  heading: LocalizedText;
  items: GuestGuideAccordionItem[];
}

export interface GuestGuideMenuLink {
  icon: GuestGuideIconName;
  title: LocalizedText;
  subtitle: LocalizedText;
  /** Slug of the target guide entry; resolved to a localized href at render time. */
  targetSlug: string;
}

interface GuestGuideEntryBase {
  slug: string;
  entityKey?: AmaraEntityKey;
  seoTitle: LocalizedText;
  seoDescription: LocalizedText;
  supportHref: string;
  supportLabel: LocalizedText;
}

export interface GuestGuideHubEntry extends GuestGuideEntryBase {
  type: 'hub';
  heroImage: string;
  heroAlt: LocalizedText;
  kicker: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  menuLinks: GuestGuideMenuLink[];
  closingParagraphs: LocalizedText[];
  ctaHref: string;
  ctaLabel: LocalizedText;
  signOff: LocalizedText;
}

export interface GuestGuideDetailEntry extends GuestGuideEntryBase {
  type: 'detail';
  /** Slug of the hub entry to return to; resolved to a localized href at render time. */
  backSlug: string;
  kicker: LocalizedText;
  title: LocalizedText;
  intro?: LocalizedText;
  categories: GuestGuideCategory[];
}

export type GuestGuideEntry = GuestGuideHubEntry | GuestGuideDetailEntry;
