import type { LinkToken } from '../lib/linkResolver';

/**
 * Shared shape for the Type-A Where-to-stay body (hero + key figures + quick
 * overview + the one decision factor + the parts + who-fits + AMARA verdict).
 * Rendered by WhereToStayBody.astro with LocationTopicHero + the orientation
 * map + LocationModule + am-text-* roles. Emphasis is **double asterisks** for
 * InlineEmphasis. The `factor` section is the destination's key decision axis:
 * height/steps in Frigiliana, proximity on Nerja's coast, wind in Tarifa. Unit
 * lists carry stable `id`s for the locale-parity contract. The booking CTA
 * comes from the shared trustLabels.book, not from here.
 */
export interface WtsStat {
  id: string;
  k: string;
  l: string;
}
export interface WtsGlance {
  id: string;
  title: string;
  blurb: string;
}
export interface WtsQuarter {
  id: string;
  name: string;
  note: string;
}
export interface WtsZone {
  id: string;
  sub: string;
  h3: string;
  desc: string;
  quarters?: WtsQuarter[];
  idealFor: string;
  honest: string;
}
export interface WtsWho {
  id: string;
  title: string;
  text: string;
}

export interface WhereToStayCopy {
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    body: string;
    traits: string[];
    stats: WtsStat[];
  };
  heroCtaZones: string;
  glanceTitle: string;
  glanceIntro: string;
  glance: WtsGlance[];
  factorEyebrow: string;
  factor: { title: string; intro: string; copy: string; note: string; day: string[] };
  zonesEyebrow: string;
  zonesTitle: string;
  zonesIntro: string;
  zones: WtsZone[];
  labelIdealFor: string;
  labelHonest: string;
  whoTitle: string;
  whoIntro: string;
  who: WtsWho[];
  pointer: { text: string; linkLabel: string; linkToken: LinkToken };
  verdict: {
    eyebrow: string;
    title: string;
    caption: string;
    mapNote: string;
    lead: string;
    facts: string[];
    honest: string;
  };
}
