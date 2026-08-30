import type { ImageMetadata } from 'astro';

export interface WhereToStayAction {
  href: string;
  label: string;
}

export interface WhereToStayDecisionPoint {
  label?: string;
  title?: string;
  text: string;
}

/**
 * One row of the accommodation-type comparison.
 *
 * `hotelWins` is deliberately phrased as our own limit rather than as a claim
 * about hotels: AMARA has no verified evidence about other houses, and a
 * comparison written by one side is only credible where it can go against it.
 */
export interface WhereToStayTypeRow {
  id: string;
  attribute: string;
  ours: string;
  hotelWins: string;
}

export interface WhereToStayArea {
  number: string;
  title: string;
  paragraphs: string[];
  fit?: string;
  daily?: string;
  tradeoff?: string;
}

export interface WhereToStayTradeoff {
  title?: string;
  paragraphs: string[];
}

export interface WhereToStayPlanningItem {
  number?: string;
  title: string;
  paragraphs?: string[];
  actions?: WhereToStayAction[];
}

export interface WhereToStayFitItem {
  title: string;
  paragraphs: string[];
}

export interface WhereToStayAuthorityContent {
  decision: {
    eyebrow: string;
    title: string;
    intro: string[];
    points: WhereToStayDecisionPoint[];
  };
  stayType?: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string[];
    labels: { attribute: string; ours: string; hotelWins: string };
    items: WhereToStayTypeRow[];
  };
  areas: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string;
    labels: {
      fit: string;
      daily: string;
      tradeoff: string;
    };
    items: WhereToStayArea[];
  };
  tradeoffs: {
    eyebrow: string;
    title: string;
    intro?: string;
    items: WhereToStayTradeoff[];
    action?: WhereToStayAction;
  };
  mobility: {
    id: string;
    eyebrow: string;
    title: string;
    intro: string[];
    items: WhereToStayPlanningItem[];
    conclusion?: string;
  };
  fit: {
    eyebrow: string;
    title: string;
    intro: string[];
    items: WhereToStayFitItem[];
    action?: WhereToStayAction;
  };
  amara: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts?: string[];
    image: {
      src: ImageMetadata | string;
      alt: string;
    };
    action?: WhereToStayAction;
  };
}
