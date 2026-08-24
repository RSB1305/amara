import { defineKnowledgeSources } from '../../schema';

export const nerjaAtmosphereSources = defineKnowledgeSources([
  {
    id: 'operator-nerja-observations-2026-08-24',
    title: 'Nerja operator observations',
    publisher: 'AMARA operator',
    sourceType: 'first-party-observation',
    locator: '05_OPERATOR_NOTES/2026-08-24__operator-nerja-observations.md',
    observedAt: '2026-08-24',
    language: 'en',
    scope: 'AMARA Playa micro-location, zone-level guest movement and qualitative repeat-guest feedback.',
    limitations: 'Not a survey, measurement log or universal description; exact routes and gradients remain unverified.',
    reuse: 'internal-only',
  },
] as const);

export type NerjaAtmosphereSourceId = (typeof nerjaAtmosphereSources)[number]['id'];
