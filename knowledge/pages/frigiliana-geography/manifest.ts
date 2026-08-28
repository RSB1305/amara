import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaGeographyKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-geography',
  destination: 'frigiliana',
  topic: 'geography-orientation',
  createdAt: '2026-08-21T11:26:50+02:00',
  updatedAt: '2026-08-21T12:01:15+02:00',
  status: 'ready',
  driveFolder: {
    id: '1Lj0kiPAHq0_OZUOCpc00IP1degUBTckL',
    url: 'https://drive.google.com/drive/folders/1Lj0kiPAHq0_OZUOCpc00IP1degUBTckL',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/frigiliana-geography',
  },
  publicContentPath: 'src/content/frigilianaGeographyContent.ts',
  researchRunIds: ['2026-08-21__112650__geography-orientation__research-001'],
  coverage: [
    {
      authoringArea: 'hero-summary',
      purpose: 'SEO H1 and high-value page summary without replacing the full knowledge base.',
      factIds: [
        'frigiliana.geography.historic-core.topography-shapes-layout',
        'frigiliana.geography.ingenio.settlement-hinge',
        'frigiliana.geography.sierra.protected-area-context',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'orientation-and-key-facts',
      purpose: 'Mental map, stable reference points and concise geographic facts.',
      factIds: [
        'frigiliana.geography.municipality.area',
        'frigiliana.geography.main-settlement.reference-point',
        'frigiliana.geography.reference-altitude.varies-by-dataset',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'hillside-village',
      purpose: 'Explain the settlement structure and the practical effect of slope.',
      factIds: [
        'frigiliana.geography.historic-core.topography-shapes-layout',
        'frigiliana.geography.historic-core.steps-and-road-access',
        'frigiliana.geography.routes.map-distance-insufficient',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'historic-quarter',
      purpose: 'Locate Plaza del Ingenio, Calle Real and Barribarto within the village.',
      factIds: [
        'frigiliana.geography.ingenio.settlement-hinge',
        'frigiliana.geography.barribarto.medieval-core',
        'frigiliana.geography.barribajo.calle-real-axis',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'lower-landscape',
      purpose: 'Explain the lower settlement, valley and relationship to the coast.',
      factIds: ['frigiliana.geography.modern-expansion.ridge-south-of-ingenio'],
      status: 'partial',
      notes: 'The later ridge development is verified; the valley-to-coast relationship still needs mapped evidence.',
    },
    {
      authoringArea: 'sierra-almijara',
      purpose: 'Define the transition to the Sierra and protected landscape claim boundaries.',
      factIds: ['frigiliana.geography.sierra.protected-area-context'],
      status: 'partial',
      notes: 'Municipality context is verified; the exact park boundary relative to the built village remains open.',
    },
    {
      authoringArea: 'what-it-means',
      purpose: 'Translate verified geography into durable guest-planning implications.',
      factIds: [
        'frigiliana.geography.historic-core.steps-and-road-access',
        'frigiliana.geography.routes.map-distance-insufficient',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'amara-location-projection',
      purpose: 'Place Casa AMARA on the Calle Real mental map before handing detailed daily access to Streets & Stairs.',
      factIds: ['casa-amara.location.calle-chorruelo-calle-real'],
      status: 'covered',
    },
  ],
});
