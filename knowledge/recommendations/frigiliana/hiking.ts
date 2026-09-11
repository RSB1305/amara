import { defineKnowledgeRecommendations } from '../../schema';

export const frigilianaHikingRecommendations = defineKnowledgeRecommendations([
  {
    id: 'frigiliana.hiking.cruz-de-pinto',
    destination: 'frigiliana',
    topic: 'hiking',
    place: { name: 'Cruz de Pinto', kind: 'hike', website: 'https://www.turismofrigiliana.es/es/cruz-de-pinto.html' },
    summary: 'A panoramic loop above the village with open slopes and wide coastal views — one of the most dependable choices. Good after rain since the terrain drains quickly, but still wear shoes with grip. Officially 5.8 km from Plaza del Ingenio, via the Río Higuerón bed and back the same way.',
    operating: { note: 'Municipal catalogue: 5.8 km, about 3 h, easy; starts Plaza del Ingenio, enters the Río Higuerón bed and returns over the outward line', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.hiking.cruz-pinto.route-profile'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'frigiliana.hiking.el-fuerte',
    destination: 'frigiliana',
    topic: 'hiking',
    place: { name: 'El Fuerte', kind: 'hike', website: 'https://www.turismofrigiliana.es/es/el-fuerte.html' },
    summary: 'The classic route behind Frigiliana — you don\'t need the full summit to get amazing views. After rain, the rocky parts can be slippery; go slow and bring water. The official route starts at Plaza del Ingenio and reaches Pozo de Lízar after about 750 metres through the village (Calle Real, Hernando el Darra, Amargura, Chorrera); the mountain path begins there. Listed as medium difficulty.',
    operating: { note: '7.4 km, about 4 h, medium difficulty, summit 963 m; official start Plaza del Ingenio with a 750 m village approach to Pozo de Lízar', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.hiking.el-fuerte.route-profile',
      'frigiliana.hiking.el-fuerte.official-start-and-lizar-access'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'frigiliana.hiking.lizar-acequia-trail',
    destination: 'frigiliana',
    topic: 'hiking',
    place: { name: 'Lizar & Acequia Trail', kind: 'hike' },
    summary: 'A gentle "active rest day" walk along old irrigation channels above the village — flat and scenic. Perfect for golden hour. Bring a light layer if you go late — it cools down quickly.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and map link only, no operating details are verified.'
  },
  {
    id: 'frigiliana.hiking.historic-quarter-loop',
    destination: 'frigiliana',
    topic: 'hiking',
    place: { name: 'Historic Quarter Loop', kind: 'hike' },
    summary: 'A simple village walk through upper lanes, archways and viewpoints — ideal if you want "movement" without a hike. Expect stairs and some steep sections. Great before dinner.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and map link only, no operating details are verified.'
  },
  {
    id: 'frigiliana.hiking.rio-higueron',
    destination: 'frigiliana',
    topic: 'hiking',
    place: { name: 'Río Higuerón', kind: 'hike', website: 'https://www.turismofrigiliana.es/es/cahorros-del-rio-higueron.html' },
    summary: 'The calmer local river option near Frigiliana — wading, small pools, and a refreshing summer escape. Water shoes (or grippy sports sandals) are strongly recommended. Avoid after heavy rain.',
    operating: { note: 'Cahorros del Río Higuerón: 4.6 km, about 2.5 h, easy; riverbed circuit, water level needs a live check', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.hiking.cahorros.route-profile-and-riverbed'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'frigiliana.hiking.el-acebuchal',
    destination: 'frigiliana',
    topic: 'hiking',
    place: { name: 'El Acebuchal', kind: 'hike', website: 'https://www.turismofrigiliana.es/es/el-acebuchal.html' },
    summary: 'A rewarding hike through pine forest to the "Lost Village" — great if you want a destination with a rustic meal. Reserve lunch in advance if you go in high season. Bring water and a bit of cash. The official route starts at Plaza del Ingenio and returns the same way, so plan the full 13 km.',
    operating: { note: '13 km, about 4 h 20 min; starts Plaza del Ingenio and returns the same way', observedAt: '2026-08-28' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.hiking.acebuchal.official-route-profile'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'frigiliana.hiking.spanish-walking-adventures',
    destination: 'frigiliana',
    topic: 'hiking',
    place: { name: 'Spanish Walking Adventures', kind: 'provider', website: 'https://spanishwalkingadventures.com/' },
    summary: 'A guided walking-holiday operator whose destinations include Frigiliana and the Sierras de Tejeda, Alhama y Almijara. Bespoke, small-group trips (about 4–24 people) where the guest chooses dates, length and location; offered self-catered or all-inclusive with guided walks arranged. Surfaced as the guided alternative on the public hiking page for guests who would rather not plan routes themselves. Added at the operator’s request 2026-09-11.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'public',
    basis: 'operator-review',
    checkedAt: '2026-09-11',
    reviewAfter: '2027-03-11',
    volatility: 'medium',
    claimBoundary: 'Independent third-party operator, not part of AMARA; the exact walks, difficulty, languages and prices are theirs to confirm on enquiry and are not verified here. Website scope observed 2026-09-11.'
  },
  {
    id: 'frigiliana.hiking.gr-249-stage-6',
    destination: 'frigiliana',
    topic: 'hiking',
    place: { name: 'GR 249 Stage 6, Frigiliana to Cómpeta', kind: 'hike', website: 'https://static.malaga.es/malaga/subidas/descargas/archivos/7/1/370917/topoguia-gr-249-gran-senda-de-malaga-%28edicion-noviembre-2021%29.pdf' },
    summary: 'Linear mountain stage of the Gran Senda de Málaga through El Acebuchal and the Sierra de Almijara; on the public hiking page as a committed day, not in the Guest Guide.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'public',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.hiking.gr249-stage6.route-profile'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'The 2021 topoguide gives 24.7 km and about 8 h 15 min; closures, water, transport and return logistics are live checks, and the stage is linear.'
  }
]);
