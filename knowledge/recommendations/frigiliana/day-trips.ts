import { defineKnowledgeRecommendations } from '../../schema';

export const frigilianaDayTripsRecommendations = defineKnowledgeRecommendations([
  {
    id: 'frigiliana.day-trips.malaga-city',
    destination: 'frigiliana',
    topic: 'day-trips',
    place: { name: 'Málaga', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Muelle+Uno+M%C3%A1laga' },
    summary: 'The most flexible cultural day trip: walkable streets, museums, great food, and a modern port atmosphere. Parking tip: park at Muelle Uno and walk into the center along the promenade.',
    access: [{ from: 'casa-amara', driveMinutes: 50 }],
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
    id: 'frigiliana.day-trips.granada-alhambra',
    destination: 'frigiliana',
    topic: 'day-trips',
    place: { name: 'Granada and the Alhambra', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alhambra+Granada' },
    summary: 'Moorish architecture, tea houses, the Albaicín, and the Alhambra with Sierra Nevada behind it — a true classic. Ticket reality: Alhambra tickets can sell out far ahead, so book as soon as you have dates. If tickets are gone, go anyway for the Albaicín and Mirador de San Nicolás .',
    access: [{ from: 'casa-amara', driveMinutes: 70 }],
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
    id: 'frigiliana.day-trips.caminito-del-rey',
    destination: 'frigiliana',
    topic: 'day-trips',
    place: { name: 'Caminito del Rey', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Caminito+del+Rey' },
    summary: 'A dramatic walkway attached to the gorge walls — one of the most unique "big view" experiences in the region. Good to know: it\'s a linear walk with a shuttle back, not ideal if you have a strong fear of heights. Book in advance (weeks ahead in peak season).',
    access: [{ from: 'casa-amara', driveMinutes: 90 }],
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
    id: 'frigiliana.day-trips.ronda',
    destination: 'frigiliana',
    topic: 'day-trips',
    place: { name: 'Ronda', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Puente+Nuevo+Ronda' },
    summary: 'Defined by the Puente Nuevo over the gorge — cinematic, historic, and intensely scenic. Timing tip: leave by 09:00, enjoy a relaxed lunch, then return before late evening. The drive is part of the reward.',
    access: [{ from: 'casa-amara', driveMinutes: 120 }],
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
