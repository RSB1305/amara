import { defineKnowledgeRecommendations } from '../../schema';

export const tarifaBeachesRecommendations = defineKnowledgeRecommendations([
  {
    id: 'tarifa.beaches.playa-los-lances',
    destination: 'tarifa',
    topic: 'beaches',
    place: { name: 'Playa Los Lances', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Playa+Los+Lances+Tarifa' },
    summary: 'From here, Playa Los Lances is within walking distance, depending on the beach access point you choose. It is ideal for long walks and wide-open space. Afternoons can be windy — perfect for watching the kitesurfers.',
    access: [{ from: 'amara-family-surf', note: 'walkable from the apartment' }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.beaches.los-lances.protected-and-recreational',
      'tarifa.beaches.lances-north.watersports-cluster'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'tarifa.beaches.playa-chica',
    destination: 'tarifa',
    topic: 'beaches',
    place: { name: 'Playa Chica', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Playa+Chica+Tarifa' },
    summary: 'A short drive or bike ride from here, Playa Chica offers calmer water and a more sheltered setting. It is often a good option when Los Lances feels too windy. Its location near the old town makes it easy to combine with lunch.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.beaches.playa-chica.compact-town-beach',
      'tarifa.beaches.coast.two-sided-orientation'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'tarifa.beaches.playa-de-valdevaqueros',
    destination: 'tarifa',
    topic: 'beaches',
    place: { name: 'Playa de Valdevaqueros', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Playa+de+Valdevaqueros+Tarifa' },
    summary: 'About 10–15 minutes by car from here, Valdevaqueros is one of Tarifa’s most iconic beaches. It has a wide sandy shore and a lively atmosphere. Parking is usually straightforward but can fill up in peak season.',
    access: [{ from: 'amara-family-surf', driveMinutes: 15 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.beaches.valdevaqueros-punta-paloma.western-system'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'tarifa.beaches.playa-punta-paloma',
    destination: 'tarifa',
    topic: 'beaches',
    place: { name: 'Playa Punta Paloma', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Playa+Punta+Paloma+Tarifa' },
    summary: 'Around 10 km west of here, Punta Paloma feels more secluded and natural. It is known for its dunes and turquoise water. Bring water and sun protection, as shade is limited.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.beaches.valdevaqueros-punta-paloma.western-system'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'tarifa.beaches.playa-de-bolonia',
    destination: 'tarifa',
    topic: 'beaches',
    place: { name: 'Playa de Bolonia', kind: 'beach', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Playa+de+Bolonia+Tarifa' },
    summary: 'A 25–40 minute drive from here, Bolonia is ideal for a full beach day. Crystal-clear water, large dunes, and the Roman ruins of Baelo Claudia nearby create a beautiful combination of nature and history.',
    access: [{ from: 'amara-family-surf', driveMinutes: 30 }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.bolonia.dune.active-protected-monument',
      'tarifa.bolonia.dune.official-dimensions',
      'tarifa.bolonia.access.live-check-required'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  }
]);
