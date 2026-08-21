import type { LinkToken } from '../lib/linkResolver';

export interface WinterStaysSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface WinterStaysLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
    mark: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: WinterStaysSection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    propertyLabel: string;
  };
}
