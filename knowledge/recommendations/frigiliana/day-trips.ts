import { defineKnowledgeRecommendations } from '../../schema';

/**
 * Operating details were normalized into knowledge/facts/locations/frigiliana/day-trips.ts on
 * 2026-09-12 (independent web research); each record now links its facts and its checkedAt is
 * refreshed. Prices, hours and ticket availability remain dated, volatile details.
 */
export const frigilianaDayTripsRecommendations = defineKnowledgeRecommendations([
  {
    id: 'frigiliana.day-trips.malaga-city',
    destination: 'frigiliana',
    topic: 'day-trips',
    place: { name: 'Málaga', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Muelle+Uno+M%C3%A1laga', website: 'https://visita.malaga.eu/' },
    summary: 'The most flexible cultural day trip: walkable streets, museums, great food, and a modern port atmosphere. Parking tip: park at Muelle Uno and walk into the center along the promenade.',
    access: [{ from: 'casa-amara', driveMinutes: 50 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: ['frigiliana.day-trips.malaga.drive-time', 'frigiliana.day-trips.malaga.alcazaba-lift', 'frigiliana.day-trips.malaga.museum-closing-days'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-03-12',
    volatility: 'medium',
    claimBoundary: 'Operating details normalized 2026-09-12; the Alcazaba lift now needs a ticket and the cathedral rooftop can be closed for works. Prices and hours stay live details.'
  },
  {
    id: 'frigiliana.day-trips.granada-alhambra',
    destination: 'frigiliana',
    topic: 'day-trips',
    place: { name: 'Granada and the Alhambra', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Alhambra+Granada', website: 'https://www.alhambra-patronato.es/en/visit' },
    summary: 'Moorish architecture, tea houses, the Albaicín, and the Alhambra with Sierra Nevada behind it — a true classic. Ticket reality: Alhambra tickets can sell out far ahead, so book as soon as you have dates. If tickets are gone, go anyway for the Albaicín and Mirador de San Nicolás .',
    access: [{ from: 'casa-amara', driveMinutes: 70 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: ['frigiliana.day-trips.granada.drive-time', 'frigiliana.day-trips.granada.alhambra-timed-nasrid', 'frigiliana.day-trips.granada.walk-to-nasrid', 'frigiliana.day-trips.granada.planb-generalife-albaicin'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-03-12',
    volatility: 'medium',
    claimBoundary: 'Operating details normalized 2026-09-12; the Nasrid Palaces are timed and official-only, ~15 min on foot from the entrance. Ticket availability stays a live detail.'
  },
  {
    id: 'frigiliana.day-trips.caminito-del-rey',
    destination: 'frigiliana',
    topic: 'day-trips',
    place: { name: 'Caminito del Rey', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Caminito+del+Rey', website: 'https://www.caminitodelrey.info/en' },
    summary: 'A dramatic walkway attached to the gorge walls — one of the most unique "big view" experiences in the region. Good to know: it\'s a linear walk with a shuttle back, not ideal if you have a strong fear of heights. Book in advance (weeks ahead in peak season).',
    access: [{ from: 'casa-amara', driveMinutes: 90 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: ['frigiliana.day-trips.caminito.drive-time', 'frigiliana.day-trips.caminito.one-way-and-shuttle', 'frigiliana.day-trips.caminito.rules', 'frigiliana.day-trips.caminito.parking-logistic'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-03-12',
    volatility: 'medium',
    claimBoundary: 'Operating details normalized 2026-09-12; one-way route, shuttle €2.50 cash-only (not in ticket), helmet provided, min age 8, no refunds. Shuttle price/hours stay live details.'
  },
  {
    id: 'frigiliana.day-trips.ronda',
    destination: 'frigiliana',
    topic: 'day-trips',
    place: { name: 'Ronda', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Puente+Nuevo+Ronda', website: 'https://info.turismoderonda.es/' },
    summary: 'Defined by the Puente Nuevo over the gorge — cinematic, historic, and intensely scenic. Timing tip: leave by 09:00, enjoy a relaxed lunch, then return before late evening. The drive is part of the reward.',
    access: [{ from: 'casa-amara', driveMinutes: 120 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: ['frigiliana.day-trips.ronda.drive-time', 'frigiliana.day-trips.ronda.puente-nuevo-view', 'frigiliana.day-trips.ronda.plaza-de-toros', 'frigiliana.day-trips.ronda.wine-and-setenil'],
    checkedAt: '2026-09-12',
    reviewAfter: '2028-03-12',
    volatility: 'medium',
    claimBoundary: 'Operating details normalized 2026-09-12; drive ~2–2½ h, free view from below via Plaza María Auxiliadora, Plaza de Toros "one of the oldest / first all-stone (1785)", Setenil as Plan B.'
  }
]);
