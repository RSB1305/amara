import type { LinkToken } from '../../lib/linkResolver';

export interface WeatherAuthoritySeason {
  period: string;
  title: string;
  summary: string;
  planning: string;
}

export interface WeatherAuthorityItem {
  title: string;
  text: string;
  link?: {
    token: LinkToken;
    label: string;
  };
  /** A second, softer link: where the main one leads outward, this points back to us. */
  extraLink?: {
    token: LinkToken;
    label: string;
  };
}

export interface WeatherAuthoritySource {
  label: string;
  text: string;
  href: string;
}

export interface WeatherAuthorityContent {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    summaryEyebrow: string;
    summary: string;
    summaryItems: Array<{ label: string; value: string }>;
  };
  factors: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    items: WeatherAuthorityItem[];
  };
  table: {
    eyebrow: string;
    title: string;
    intro: string;
    labels: {
      month: string;
      high: string;
      low: string;
      rain: string;
      sunHours: string;
      temperature: string;
      rainfall: string;
      details: string;
    };
    sourceTitle: string;
    sourceText: string;
  };
  seasons: {
    eyebrow: string;
    title: string;
    intro: string;
    items: WeatherAuthoritySeason[];
    planningLabel: string;
  };
  bestTime: {
    eyebrow: string;
    title: string;
    intro: string;
    items: WeatherAuthorityItem[];
  };
  practical: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    listTitle: string;
    items: string[];
  };
  forecast: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    cta: string;
    live?: {
      loading: string;
      today: string;
      tomorrow: string;
      high: string;
      low: string;
      rain: string;
      issued: string;
      unavailable: string;
      unavailableText: string;
      source: string;
    };
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: WeatherAuthoritySource[];
  };
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
}
