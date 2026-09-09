import { defineKnowledgeRecommendations } from '../../schema';

export const tarifaSightseeingRecommendations = defineKnowledgeRecommendations([
  {
    id: 'tarifa.sightseeing.isla-de-las-palomas',
    destination: 'tarifa',
    topic: 'sightseeing',
    place: { name: 'Island Las Palomas (Punta Marroquí)', kind: 'sight', mapsUrl: 'https://maps.google.com/?q=Isla+de+Las+Palomas+Tarifa' },
    summary: 'At Isla de Las Palomas , also known as Punta Marroquí, the Mediterranean and Atlantic meet. It marks the southernmost point of mainland Spain and continental Europe. A beautiful walk leads between the two seas toward the island, where a 43-metre lighthouse rises above the Strait of Gibraltar. On clear days, Africa feels astonishingly close. Just beside it lies Balneario Beach , a favourite surf spot with powerful waves. Tarifa is the only place where you can swim in both the Atlantic and the Mediterranean on the same day.',
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
    id: 'tarifa.sightseeing.castillo-de-guzman-el-bueno',
    destination: 'tarifa',
    topic: 'sightseeing',
    place: { name: 'Guzmán el Bueno Castle', kind: 'sight', mapsUrl: 'https://maps.google.com/?q=Castillo+de+Guzman+el+Bueno+Tarifa' },
    summary: 'Built by Caliph Abderramán III, Guzmán el Bueno Castle was designed as a strategic fortress controlling the Strait of Gibraltar. In 1294, Guzmán “the Good” became legendary for choosing to protect Tarifa rather than surrender it in exchange for his captured son. The castle remains a symbol of loyalty and courage. Today you can walk its walls in the old town and enjoy spectacular views across the Strait toward Tangier. Opening hours: Tue–Sat: 11:00–14:00 & 18:00–20:00 Sun: 11:00–14:00 Mon: Closed Opening times can change seasonally. Check again on the day of your visit.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.history.castle.caliphal-construction-960',
      'tarifa.history.castle.strait-control',
      'tarifa.identity.heritage.historic-ensemble-bic'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'tarifa.sightseeing.iglesia-de-san-mateo',
    destination: 'tarifa',
    topic: 'sightseeing',
    place: { name: 'St. Matthew’s Church', kind: 'sight', mapsUrl: 'https://maps.google.com/?q=Iglesia+de+San+Mateo+Tarifa' },
    summary: 'Located in the heart of the old town, St. Matthew’s Church , dating from the 16th century, combines late-Gothic architecture with a neoclassical façade. Stained-glass windows and expressive statues create a powerful interior atmosphere. After the Catholic Monarchs reclaimed Tarifa, the church offered forgiveness to anyone who settled here for one year and one day — a historic gesture intended to repopulate what had been a dangerous frontier town.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.heritage.san-mateo.early-sixteenth-century'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'tarifa.sightseeing.mirador-africa',
    destination: 'tarifa',
    topic: 'sightseeing',
    place: { name: 'Mirador África & Torre de Miramar', kind: 'sight', mapsUrl: 'https://maps.google.com/?q=Mirador+Africa+Tarifa' },
    summary: 'From the old city wall on Calle Amargura, Mirador África offers one of the most impressive views in southern Spain. At the narrowest point of the Strait of Gibraltar, Morocco lies only 14 km away. The view across two continents is peaceful and unforgettable. Tip: Come for sunset.',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.old-town.miramar.strait-viewpoint'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'tarifa.sightseeing.duna-de-valdevaqueros',
    destination: 'tarifa',
    topic: 'sightseeing',
    place: { name: 'Valdevaqueros Sand Dune', kind: 'sight', mapsUrl: 'https://maps.google.com/?q=Duna+de+Valdevaqueros' },
    summary: 'About 8 km from Tarifa toward Cádiz, near Punta Paloma, you will find the Valdevaqueros Sand Dune , one of Andalusia’s most spectacular dunes. It is a protected nature reserve with untouched beaches and no buildings — only sea, wind, and wide horizons. From the top of the dune, the view of the African coastline is breathtaking.',
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
    id: 'tarifa.sightseeing.baelo-claudia',
    destination: 'tarifa',
    topic: 'sightseeing',
    place: { name: 'Roman Ruins of Baelo Claudia (Bolonia)', kind: 'sight', mapsUrl: 'https://maps.google.com/?q=Baelo+Claudia+Bolonia' },
    summary: 'Just 15 km from Tarifa lies the ancient Roman city of Baelo Claudia , more than 2,000 years old. Once a prosperous trade centre, the city supplied the Roman Empire with garum, the famous fish-paste delicacy of its time. Today you can explore the theatre, basilica, Temple of Isis, aqueducts, thermal baths, and fish-salting factories. Opening hours: Vary by season. Closed Mondays. Check the current hours on the day of your visit.',
    operating: { note: 'Opening hours, admission, guided visits and parking need a pre-departure check (official archaeological ensemble)', observedAt: '2026-08-24' },
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'tarifa.baelo.maritime-roman-city',
      'tarifa.baelo.urban-elements-visible',
      'tarifa.bolonia.access.live-check-required'
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-02-28',
    volatility: 'high',
    claimBoundary: 'Carried over from the published guide; the referenced facts bound the verified details, everything else is editorial selection without a dated check.'
  },
  {
    id: 'tarifa.sightseeing.firmm-whale-watching',
    destination: 'tarifa',
    topic: 'sightseeing',
    place: { name: 'firmm', kind: 'provider', address: 'Calle Alcalde Juan Núñez 10, L-1, Tarifa', phone: '+34956627008', website: 'https://www.firmm.org/' },
    summary: 'The Strait of Gibraltar is one of Europe’s best places to observe whales and dolphins in their natural habitat. You may see striped dolphins, common dolphins, pilot whales, sperm whales from May to July, and even orcas from June to September. Tours usually last around 2–3 hours and depart several times daily from Tarifa harbour. Choose a calm-sea day for the most comfortable experience. Established operator: Firmm España Calle Alcalde Juan Núñez 10, L-1 +34 956 627 008 firmm.org',
    provenance: 'amara-first-hand',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'operator-review',
    factIds: [
      'tarifa.nature.cetacean-excursions.from-port',
      'tarifa.nature.cetaceans.no-sighting-guarantee',
      'tarifa.nature.cetaceans.protected-observation'
    ],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary: 'AMARA has taken this firmm trip first-hand (operator, 2026-09-09) and recommends it for families with children; the other harbour operators are listed neutrally, not judged. Season: dolphins and pilot whales year-round, sperm whales spring and autumn, orcas high summer (~July–August), never guaranteed.',
    notes: 'Operator first-hand recommendation. No booking service and no special arrangement with the provider.'
  }
]);
