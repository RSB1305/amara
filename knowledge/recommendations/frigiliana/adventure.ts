import { defineKnowledgeRecommendations } from '../../schema';

export const frigilianaAdventureRecommendations = defineKnowledgeRecommendations([
  {
    id: 'frigiliana.adventure.barranco-del-higueron',
    destination: 'frigiliana',
    topic: 'adventure',
    place: { name: 'Barranco del Higuerón', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Barranco+del+Higueron+Frigiliana' },
    summary: 'Barranco del Higuerón: listed in the AMARA guide as a sight used by guests; identity and link only.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and link only, no operating details are verified.'
  }
]);
