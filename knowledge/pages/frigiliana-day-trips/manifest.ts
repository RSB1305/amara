import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaDayTripsKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-day-trips',
  destination: 'frigiliana',
  topic: 'day-trips',
  createdAt: '2026-09-07T12:00:00+02:00',
  updatedAt: '2026-09-07T12:00:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1_9M2pfD1_NfeeqMs5V97RhquQCLZD7fh',
    url: 'https://drive.google.com/drive/folders/1_9M2pfD1_NfeeqMs5V97RhquQCLZD7fh',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/experiences/day-trips',
  },
  publicContentPath: 'src/content/places/frigiliana-day-trips.ts',
  researchRunIds: [],
  coverage: [
    {
      authoringArea: 'malaga-city',
      purpose:
        'Turn the operator’s Málaga immersion dossier into a warm, first-hand guide day: how to move through the city, where to eat like a local, and how to end the day.',
      factIds: [],
      status: 'partial',
      notes:
        'Authored from the operator-provided Málaga dossier in the linked Drive folder (cultural-immersion itinerary). The card carries the durable, first-hand moves (Alcazaba public lift and descent, cathedral rooftop “La Manquita”, local breakfast and tapeo, Lagunillas street art, espeto in Pedregalejo) and deliberately omits the dossier’s prices, exact hours and dated figures. Not yet broken down into normalized facts.',
    },
    {
      authoringArea: 'granada-alhambra',
      purpose: 'Frame Granada and the Alhambra as a full-day classic with an honest ticket reality and a plan B.',
      factIds: [],
      status: 'baseline-unmapped',
      notes: 'Rests on general orientation and the volatile Alhambra ticketing reality; no dedicated research run yet.',
    },
    {
      authoringArea: 'caminito-del-rey',
      purpose: 'Set expectations for a booked, linear walkway experience with a shuttle return.',
      factIds: [],
      status: 'baseline-unmapped',
      notes: 'Rests on general orientation and official booking constraints; no dedicated research run yet.',
    },
    {
      authoringArea: 'ronda',
      purpose: 'Position Ronda as a longer scenic drive where the journey is part of the day.',
      factIds: [],
      status: 'baseline-unmapped',
      notes: 'Rests on general orientation; no dedicated research run yet.',
    },
  ],
});
