import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaAtmosphereSourceId } from '../../../sources/locations/frigilianaAtmosphereSources';

type LivedAtmosphereFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaAtmosphereSourceId[];
};

const facts = [
  {
    id: 'frigiliana.atmosphere.door-colour-variety.observation',
    subject: 'frigiliana',
    topic: 'lived-atmosphere',
    statement:
      'The AMARA operator experiences Frigiliana’s doors as individually varied in colour rather than following one uniform colour scheme.',
    status: 'first-party-observation',
    sourceIds: ['robert-frigiliana-observations-2026-08-24'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-08-24',
    volatility: 'medium',
    claimBoundary:
      'The observation is not yet a representative door inventory and must not be rewritten as a statement about every doorway or a permanent official palette.',
  },
  {
    id: 'frigiliana.atmosphere.evening-quiet.observation',
    subject: 'frigiliana',
    topic: 'lived-atmosphere',
    statement: 'The AMARA operator experiences Frigiliana as especially quiet and atmospheric in the evening.',
    status: 'first-party-observation',
    sourceIds: ['robert-frigiliana-observations-2026-08-24'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-24',
    volatility: 'high',
    claimBoundary:
      'Quiet varies by season, weekday, festival dates, accommodation position and nearby hospitality activity; the observation is not a village-wide guarantee.',
  },
  {
    id: 'frigiliana.identity.operator-beauty-impression',
    subject: 'frigiliana',
    topic: 'lived-atmosphere',
    statement:
      'The AMARA operator regards Frigiliana as exceptionally beautiful and distinctive among Spain’s white villages.',
    status: 'first-party-observation',
    sourceIds: ['robert-frigiliana-observations-2026-08-24'],
    checkedAt: '2026-08-24',
    reviewAfter: '2028-08-24',
    volatility: 'low',
    claimBoundary:
      'This is an attributed operator judgement, not an objective ranking or a universal visitor consensus.',
  },
] as const satisfies readonly LivedAtmosphereFactInput[];

export const frigilianaLivedAtmosphereFacts = defineKnowledgeFacts(facts);

export type FrigilianaLivedAtmosphereFactId = (typeof frigilianaLivedAtmosphereFacts)[number]['id'];
