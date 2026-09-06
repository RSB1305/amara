import { defineKnowledgeRecommendations } from '../../schema';

export const frigilianaSightseeingRecommendations = defineKnowledgeRecommendations([
  {
    id: 'frigiliana.sightseeing.old-town-panels',
    destination: 'frigiliana',
    topic: 'sightseeing',
    place: { name: 'Frigiliana old town and the ceramic panels', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Frigiliana+Barribarto' },
    summary: 'A walkable story in white streets: the ceramic panels narrate key history in the upper quarter. Best moment: the last hour of daylight (softer light, fewer people). Expect steps and steep lanes.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.heritage.historic-ensemble.bic'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  }
]);
