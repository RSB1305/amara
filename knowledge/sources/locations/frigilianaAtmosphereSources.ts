import { defineKnowledgeSources } from '../../schema';

export const frigilianaAtmosphereSources = defineKnowledgeSources([
  {
    id: 'robert-frigiliana-observations-2026-08-24',
    title: 'Robert’s Frigiliana observations',
    publisher: 'AMARA operator',
    sourceType: 'first-party-observation',
    locator:
      'Google Drive: 2026-08-24__121344__frigiliana-semantic-corpus-recovery__research-001/05_OPERATOR_NOTES/2026-08-24__robert-frigiliana-observations.md',
    observedAt: '2026-08-24',
    language: 'de',
    scope:
      'Operator-reported observations of individually varied door colours, evening quiet and visible mango and avocado cultivation in and around Frigiliana.',
    limitations:
      'The note does not yet record route, season, time range, photographs or a representative inventory. Observations are not universal guarantees.',
    reuse: 'internal-only',
  },
  {
    id: 'robert-frigiliana-observations-2026-08-30',
    title: 'Robert’s note on the Frigiliana afternoon pause',
    publisher: 'AMARA operator',
    sourceType: 'first-party-observation',
    locator:
      'Operator statement during the 2026-08-30 weather-page editing session, correcting the generic 14:00–17:00 siesta window for Frigiliana.',
    observedAt: '2026-08-30',
    language: 'de',
    scope:
      'Operator-reported window during which small shops and many restaurant kitchens in Frigiliana pause in the afternoon.',
    limitations:
      'A single operator statement without a dated survey of individual businesses. It establishes a village rhythm, not the published hours of any named shop or restaurant.',
    reuse: 'internal-only',
  },
] as const);

export type FrigilianaAtmosphereSourceId = (typeof frigilianaAtmosphereSources)[number]['id'];
