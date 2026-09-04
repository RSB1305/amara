import { defineKnowledgeSources } from '../../schema';

export const tarifaKitesurfBeginnerSources = defineKnowledgeSources([
  {
    id: 'vdws-kiteboarding-training-2026',
    title: 'VDWS — kiteboarding training and safety',
    publisher: 'Verband Deutscher Wassersport Schulen (VDWS)',
    sourceType: 'official',
    url: 'https://www.vdws.de/',
    accessedAt: '2026-09-04',
    language: 'de',
    scope:
      'Competence-based beginner progression (safety, setup, kite control, body-drag, relaunch, later upwind) and spot/wind/material/emergency safety checks, including downwind space, launch area and the principle of not kiting alone.',
    limitations:
      'The exact URL must still be deep-linked to the current beginner and advanced-safety pages; the general principles are stable but specific pages move.',
    reuse: 'link-and-cite'
  },
  {
    id: 'iso-21853-2020',
    title: 'ISO 21853:2020 — Kiteboarding release systems',
    publisher: 'International Organization for Standardization',
    sourceType: 'official',
    url: 'https://www.iso.org/standard/71922.html',
    accessedAt: '2026-09-04',
    language: 'en',
    scope:
      'International minimum safety requirements and test methods for kiteboarding release systems that reduce pull and allow separation from the kite.',
    limitations:
      'Standard status is under periodic review; confirm the current edition and the exact catalogue URL before relying on it in public copy.',
    reuse: 'link-and-cite'
  },
  {
    id: 'duotone-kiteboarding-2026',
    title: 'Duotone Kiteboarding — learn to kite and safety',
    publisher: 'Duotone Kiteboarding',
    sourceType: 'secondary',
    url: 'https://www.duotonesports.com/',
    accessedAt: '2026-09-04',
    language: 'en',
    scope:
      'Manufacturer guidance on modern bar function, the multi-stage safety logic, suitable forgiving beginner gear, appropriate learning conditions and the value of structured instruction.',
    limitations:
      'Manufacturer material; brand-specific system detail must not be generalised across all bars. Deep-link the specific learn/safety pages before citing.',
    reuse: 'link-and-cite'
  },
  {
    id: 'iko-kiteboarding-method-2026',
    title: 'IKO-oriented kiteboarding teaching material',
    publisher: 'International Kiteboarding Organization (and IKO-oriented schools)',
    sourceType: 'secondary',
    url: 'https://www.ikointl.com/',
    accessedAt: '2026-09-04',
    language: 'en',
    scope:
      'Illustrative explanation of the wind window as a three-dimensional dome, the lower power at the edge and stronger power zone, the chicken loop, body-drag, relaunch, depower and self-rescue, and staged lesson progression.',
    limitations:
      'Training-method context, not a single citable specification; used to corroborate principles that also appear in VDWS and manufacturer sources.',
    reuse: 'link-and-cite'
  },
  {
    id: 'north-kiteboarding-sizing-2026',
    title: 'North Actionsports — kite sizing and beginner gear',
    publisher: 'North Actionsports',
    sourceType: 'secondary',
    url: 'https://www.northkb.com/',
    accessedAt: '2026-09-04',
    language: 'en',
    scope:
      'Manufacturer orientation that kite size depends on multiple factors (weight, wind, board, model, conditions) and that a slightly larger, forgiving twintip helps beginners.',
    limitations:
      'Sizing ranges are explicitly non-binding orientation; they must not be reproduced as a fixed size-from-weight formula or a self-rigging permission.',
    reuse: 'link-and-cite'
  }
] as const);

export type TarifaKitesurfBeginnerSourceId = (typeof tarifaKitesurfBeginnerSources)[number]['id'];
