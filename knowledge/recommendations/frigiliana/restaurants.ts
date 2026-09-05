import { defineKnowledgeRecommendations } from '../../schema';

export const frigilianaRestaurantRecommendations = defineKnowledgeRecommendations([
  {
    id: 'frigiliana.restaurants.el-jardin',
    destination: 'frigiliana',
    topic: 'restaurants',
    place: { name: 'El Jardín', kind: 'restaurant', address: 'Calle del Santo Cristo, Barribarto', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Restaurante+El+Jardin+Frigiliana' },
    summary: 'The classic view dinner at the top of the village — ideal for an easy, romantic evening. If you can, arrive a little earlier for sunset and ask for a table near the railing. Calle del Santo Cristo in Barribarto, terrace, international Mediterranean kitchen.',
    access: [{ from: 'casa-amara', distanceMetres: 220 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.restaurants.the-garden.position-and-format'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'frigiliana.restaurants.gloria-bendita',
    destination: 'frigiliana',
    topic: 'restaurants',
    place: { name: 'Gloria Bendita', kind: 'restaurant', address: 'Plaza de las Tres Culturas 14', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gloria+Bendita+Frigiliana' },
    summary: 'Fun, modern plates and a livelier vibe — great if you want something social rather than quiet. Works well for sharing a few dishes and one more drink before a night walk through the village. Plaza de las Tres Culturas 14, changing Mediterranean menu with fusion influences.',
    access: [{ from: 'casa-amara', distanceMetres: 350 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.restaurants.gloria-bendita.position-and-concept'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'frigiliana.restaurants.la-taperia',
    destination: 'frigiliana',
    topic: 'restaurants',
    place: { name: 'La Tapería', kind: 'restaurant', address: 'Avenida Carlos Cano 4', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=La+Taperia+Frigiliana', whatsapp: '+34711027581' },
    summary: 'A calm, small place that feels like a local find — a good option when you want something simple and authentic. About 2 minutes from AMARA. Closes at 20:00 (kitchen until 19:30). Reservation via WhatsApp: +34 711 027 581. Avenida Carlos Cano 4.',
    access: [{ from: 'casa-amara', distanceMetres: 20 }],
    operating: { note: 'Closes at 20:00 with hot kitchen until 19:30; reservation by WhatsApp (host note in the published guide, undated)', observedAt: '2026-09-05' },
    provenance: 'mixed',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'frigiliana.restaurants.la-taperia.position-and-cuisine'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'frigiliana.restaurants.el-acebuchal',
    destination: 'frigiliana',
    topic: 'restaurants',
    place: { name: 'El Acebuchal', kind: 'restaurant', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bar+El+Acebuchal' },
    summary: 'A memorable drive-into-the-hills lunch — the setting is the experience. Great for a daytime trip. Bring cash and don\'t rely on mobile signal; the road and remoteness are part of it.',
    access: [{ from: 'casa-amara', distanceMetres: 7000 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and map link only, no operating details are verified. The hike of the same name is frigiliana.hiking.el-acebuchal.'
  },
  {
    id: 'frigiliana.restaurants.el-tangay',
    destination: 'frigiliana',
    topic: 'restaurants',
    place: { name: 'El Tangay', kind: 'restaurant', mapsUrl: 'https://share.google/klHKMa8MedhVjLNPJ' },
    summary: 'A relaxed, authentic local spot — less about views, more about atmosphere and real village life. Great for an easy dinner surrounded by locals.',
    access: [{ from: 'casa-amara', distanceMetres: 500 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and map link only, no operating details are verified.'
  }
]);
