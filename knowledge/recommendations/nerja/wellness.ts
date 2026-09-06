import { defineKnowledgeRecommendations } from '../../schema';

export const nerjaWellnessRecommendations = defineKnowledgeRecommendations([
  {
    id: 'nerja.wellness.enerveda',
    destination: 'nerja',
    topic: 'wellness',
    place: { name: 'EnerVeda', kind: 'provider', website: 'https://enerveda.com/' },
    summary: 'EnerVeda: listed in the AMARA guide as a provider used by guests; identity and link only.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and link only, no operating details are verified.'
  },
  {
    id: 'nerja.wellness.rut-montiel',
    destination: 'nerja',
    topic: 'wellness',
    place: { name: 'Rut Montiel', kind: 'provider', website: 'https://rutmontiel.com/' },
    summary: 'Rut Montiel: listed in the AMARA guide as a provider used by guests; identity and link only.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and link only, no operating details are verified.'
  },
  {
    id: 'nerja.wellness.ona-marinas-spa',
    destination: 'nerja',
    topic: 'wellness',
    place: { name: 'Ona Marinas de Nerja Spa', kind: 'provider', website: 'https://www.onahotels.com/es/apart-hotel-marinas-nerja/' },
    summary: 'If you are looking for a more classic spa setting in Nerja, this is a good beachfront option with a thalassotherapy focus. You will find thermal water facilities, a calm spa atmosphere, and a more hotel-style wellness experience than the smaller private treatments around Frigiliana. It is a good fit if you want sea-facing surroundings, a structured spa setting, and a slower half day focused on rest.',
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
