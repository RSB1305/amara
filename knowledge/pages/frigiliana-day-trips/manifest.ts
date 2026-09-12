import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaDayTripsKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-day-trips',
  destination: 'frigiliana',
  topic: 'day-trips',
  createdAt: '2026-09-07T12:00:00+02:00',
  updatedAt: '2026-09-12T11:30:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1_9M2pfD1_NfeeqMs5V97RhquQCLZD7fh',
    url: 'https://drive.google.com/drive/folders/1_9M2pfD1_NfeeqMs5V97RhquQCLZD7fh',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/experiences/day-trips',
  },
  publicContentPath: 'src/content/places/frigiliana-day-trips.ts',
  researchRunIds: ['2026-09-12__113000__frigiliana-day-trips-provenance__research-001'],
  coverage: [
    {
      authoringArea: 'malaga-city',
      purpose:
        'Turn the operator’s Málaga immersion dossier into a warm, first-hand guide day: how to move through the city, where to eat like a local, and how to end the day.',
      factIds: [
        'frigiliana.day-trips.malaga.drive-time',
        'frigiliana.day-trips.malaga.alcazaba-lift',
        'frigiliana.day-trips.malaga.cathedral-rooftop',
        'frigiliana.day-trips.malaga.museum-closing-days',
        'frigiliana.day-trips.malaga.parking-and-espetos',
        'frigiliana.day-trips.malaga.identity-history',
      ],
      status: 'covered',
      notes:
        'Normalized 2026-09-12 from the operator dossier plus independent web research. Two corrections were applied to the guide card: the Alcazaba lift on Calle Guillén Sotelo is no longer a free public lift — since May 2025 it enters the paid interior and needs an Alcazaba ticket (free Sun from 14:00) — and the cathedral rooftop tour ("La Manquita", 200+ steps) was suspended for roofworks as of Sept 2026, now flagged "check availability". Added a Plan B (Alcazaba/Gibralfaro + cathedral interior; Carmen Thyssen closed Mon, Pompidou closed Tue). Prices and hours stay live details.',
    },
    {
      authoringArea: 'granada-alhambra',
      purpose: 'Frame Granada and the Alhambra as a full-day classic with an honest ticket reality and a plan B.',
      factIds: [
        'frigiliana.day-trips.granada.drive-time',
        'frigiliana.day-trips.granada.alhambra-timed-nasrid',
        'frigiliana.day-trips.granada.walk-to-nasrid',
        'frigiliana.day-trips.granada.free-tapas-and-mirador',
        'frigiliana.day-trips.granada.planb-generalife-albaicin',
        'frigiliana.day-trips.granada.identity-nasrid-1492',
      ],
      status: 'covered',
      notes:
        'Normalized 2026-09-12 from independent web research. Correction: the walk from the entrance pavilion to the Nasrid Palaces is ~15 min, not ~30 (30 is from Plaza Nueva / the car park). Plan B strengthened with the official "Gardens, Generalife and Alcazaba" ticket (without the palaces) and the night-visit slot. Advisory host register — no first-hand AMARA claims. Availability of each ticket category stays a live detail.',
    },
    {
      authoringArea: 'caminito-del-rey',
      purpose: 'Set expectations for a booked, linear walkway experience with a shuttle return.',
      factIds: [
        'frigiliana.day-trips.caminito.drive-time',
        'frigiliana.day-trips.caminito.one-way-and-shuttle',
        'frigiliana.day-trips.caminito.rules',
        'frigiliana.day-trips.caminito.parking-logistic',
        'frigiliana.day-trips.caminito.planb-ardales-reservoirs',
        'frigiliana.day-trips.caminito.history-alfonso-2015',
      ],
      status: 'covered',
      notes:
        'Normalized 2026-09-12 from official sources. Guide onTheDay now states the shuttle terms (€2.50 per person, cash only, not in the ticket) and the parking logic (reservable CRV lot north, or park El Chorro and shuttle up to walk back to the car). Added a Plan B (Guadalhorce reservoirs at the north end). Advisory host register — no first-hand AMARA claims. Shuttle price/hours stay live details.',
    },
    {
      authoringArea: 'ronda',
      purpose: 'Position Ronda as a longer scenic drive where the journey is part of the day.',
      factIds: [
        'frigiliana.day-trips.ronda.drive-time',
        'frigiliana.day-trips.ronda.puente-nuevo-view',
        'frigiliana.day-trips.ronda.plaza-de-toros',
        'frigiliana.day-trips.ronda.wine-and-setenil',
        'frigiliana.day-trips.ronda.history-puente-1793',
      ],
      status: 'covered',
      notes:
        'Normalized 2026-09-12 from official/secondary sources. Corrections: drive time is ~2–2½ h (not ~2 h); the Plaza de Toros is "one of the oldest and the first built entirely of stone (1785)", not simply "the oldest"; the free view from below runs via Plaza María Auxiliadora (the old rock mirador became paid in 2024); Ronda wine is the Serranía de Ronda subzone of the DOP Sierras de Málaga (no "D.O. Ronda"). Added a Plan B (Setenil de las Bodegas). Advisory host register — no first-hand AMARA claims.',
    },
  ],
});
