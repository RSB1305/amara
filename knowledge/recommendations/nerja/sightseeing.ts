import { defineKnowledgeRecommendations } from '../../schema';

export const nerjaSightseeingRecommendations = defineKnowledgeRecommendations([
  {
    id: 'nerja.sightseeing.cueva-de-nerja',
    destination: 'nerja',
    topic: 'sightseeing',
    place: { name: 'Cueva de Nerja', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cueva+de+Nerja', website: 'https://cuevadenerja.es/en/' },
    summary: 'One of Andalusia\'s most famous cave visits, with huge chambers and dramatic formations. It\'s great year-round — and especially nice on hot days. Tip: go earlier or later to avoid peak crowds, then keep the afternoon intentionally light.',
    access: [{ from: 'casa-amara', driveMinutes: 20, note: '20–25 min by car' }],
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'nerja.cave.bic-zone-archaeological-2006',
      'nerja.cave.public-opening.1960-06-12'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'nerja.sightseeing.museo-de-nerja',
    destination: 'nerja',
    topic: 'sightseeing',
    place: { name: 'Museo de Nerja', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Museo+Cueva+de+Nerja', website: 'https://cuevadenerja.es/en/' },
    summary: 'A small museum that adds context to the area\'s natural and cultural heritage. A smart add-on if you\'re already doing the caves. Rhythm: museum + cave, then a slow lunch (Maro is a calm reset nearby).',
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
    id: 'nerja.sightseeing.balcon-de-europa',
    destination: 'nerja',
    topic: 'sightseeing',
    place: { name: 'Balcón de Europa', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Balc%C3%B3n+de+Europa' },
    summary: 'Nerja\'s famous seaside viewpoint — best as a short pause, not a long "tourist stop". Best moment: early morning or dusk. Then drift into side streets for a calmer version of town.',
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
    id: 'nerja.sightseeing.acueducto-del-aguila',
    destination: 'nerja',
    topic: 'sightseeing',
    place: { name: 'Acueducto del Águila', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Acueducto+del+%C3%81guila' },
    summary: 'A striking 19th-century aqueduct spanning a ravine — a quick stop with a big visual reward. It pairs perfectly with a caves day: stop, look, take one photo, then move on.',
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
    id: 'nerja.sightseeing.maro-village',
    destination: 'nerja',
    topic: 'sightseeing',
    place: { name: 'Maro', kind: 'sight', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Maro+Nerja' },
    summary: 'A small, calm village near the caves — good for a slow coffee and a quiet reset before heading back. Best use: one drink, one short stroll, then leave. The calm is the benefit.',
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
