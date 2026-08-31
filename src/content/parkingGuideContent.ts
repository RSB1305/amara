import type { LinkToken } from '../lib/linkResolver';

export interface ParkingGuideSection {
  id: 'parking-reality' | 'arrival-luggage' | 'during-stay' | 'last-mile' | 'seasonal-rules' | 'amara-boundary';
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface ParkingGuideLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    standfirst: string;
    summaryEyebrow?: string;
    summary?: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string; description?: string }>;
  sections: ParkingGuideSection[];
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
