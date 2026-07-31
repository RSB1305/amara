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
  | 'late-checkout'
  | 'store'
  | 'cart'
  | 'bread'
  | 'laundry'
  | 'card'
  | 'info'
  | 'bus'
  | 'warning'
  | 'pharmacy'
  | 'medical'
  | 'weather'
  | 'breakfast'
  | 'fish'
  | 'goblet'
  | 'wave'
  | 'pool'
  | 'hiking'
  | 'landmark'
  | 'guide'
  | 'route'
  | 'flag'
  | 'dance'
  | 'music'
  | 'heart'
  | 'star'
  | 'tumbler'
  | 'dish'
  | 'hotel'
  | 'arrow'
  | 'flame'
  | 'gas-stove'
  | 'watering-can'
  | 'cutlery'
  | 'shower';

export interface GuestGuideAction {
  label: LocalizedText;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface GuestGuideAccordionItem {
  kind?: 'accordion';
  icon: GuestGuideIconName;
  title: LocalizedText;
  /** Shown under the title even while collapsed, e.g. "Public outdoor pool during summer." */
  subtitle?: LocalizedText;
  /** Paragraphs, each may contain trusted inline HTML (<strong>, <a>). */
  body: LocalizedText[];
  image?: {
    /** Public-style path resolved via the AmaraImage/content registry, e.g. /images/amara-farah/foo.jpg */
    src: string;
    alt: LocalizedText;
    caption?: LocalizedText;
  };
  /** Use instead of `image` when more than one figure belongs to this item (e.g. a set of control-panel diagrams). */
  images?: {
    src: string;
    alt: LocalizedText;
    caption?: LocalizedText;
  }[];
  /**
   * Embedded how-to video. Set `src` for a self-hosted file (e.g. /videos/amara-playa/foo.mp4) —
   * rendered as a plain, branding-free <video> element. Set `embedUrl` instead for an external
   * player (e.g. YouTube), rendered as a responsive 16:9 iframe. `src` takes priority if both are set.
   */
  video?: {
    src?: string;
    embedUrl?: string;
    title: LocalizedText;
  };
  actions?: GuestGuideAction[];
}

/** A category row that links straight to another guide entry instead of expanding inline. */
export interface GuestGuideCategoryLinkItem {
  kind: 'link';
  icon: GuestGuideIconName;
  title: LocalizedText;
  subtitle?: LocalizedText;
  /** Slug of the target guide entry; resolved to a localized href at render time. */
  targetSlug: string;
}

/** The live weather forecast row — rendered by GuestGuideWeatherWidget, not the generic accordion. */
export interface GuestGuideWeatherItem {
  kind: 'weather';
  icon: GuestGuideIconName;
  title: LocalizedText;
  lat: number;
  lon: number;
  locationName: string;
  /** Adds live wind speed, knots, wind-aware summaries and wind values in the forecast. */
  windMode?: boolean;
  /** Editorial intro paragraphs shown above the live widget. */
  introBody: LocalizedText[];
}

export type GuestGuideCategoryItem =
  | GuestGuideAccordionItem
  | GuestGuideCategoryLinkItem
  | GuestGuideWeatherItem;

export interface GuestGuideCategory {
  heading: LocalizedText;
  /** Optional editorial note shown above the category's items (e.g. a siesta-hours tip). */
  intro?: LocalizedText[];
  items: GuestGuideCategoryItem[];
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
  /** Booking URL, localized — must stay on the same language route as the guide page itself. */
  ctaHref: LocalizedText;
  ctaLabel: LocalizedText;
  /** Optional second button next to the primary CTA, e.g. a Google review link. */
  secondaryCtaHref?: string;
  secondaryCtaLabel?: LocalizedText;
  signOff: LocalizedText;
}

export interface GuestGuideDetailEntry extends GuestGuideEntryBase {
  type: 'detail';
  /** Slug of the hub entry to return to; resolved to a localized href at render time. */
  backSlug: string;
  kicker: LocalizedText;
  title: LocalizedText;
  intro?: LocalizedText;
  /** Optional "read the full guide" link to an existing public marketing page (not another guide entry). */
  authorityLink?: {
    /** Canonical public slug (from CANONICAL_PUBLIC_SLUGS), resolved via buildOwnedLocalizedPath. */
    targetSlug: string;
    label: LocalizedText;
  };
  categories: GuestGuideCategory[];
}

export type GuestGuideEntry = GuestGuideHubEntry | GuestGuideDetailEntry;
