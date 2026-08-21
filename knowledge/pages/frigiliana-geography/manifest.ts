import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaGeographyKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-geography',
  destination: 'frigiliana',
  topic: 'geography-orientation',
  createdAt: '2026-08-21T11:26:50+02:00',
  updatedAt: '2026-08-21T11:49:45+02:00',
  status: 'research-received',
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
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'orientation-and-key-facts',
      purpose: 'Mental map, stable reference points and concise geographic facts.',
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'hillside-village',
      purpose: 'Explain the settlement structure and the practical effect of slope.',
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'historic-quarter',
      purpose: 'Locate Plaza del Ingenio, Calle Real and Barribarto within the village.',
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'lower-landscape',
      purpose: 'Explain the lower settlement, valley and relationship to the coast.',
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'sierra-almijara',
      purpose: 'Define the transition to the Sierra and protected landscape claim boundaries.',
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'what-it-means',
      purpose: 'Translate verified geography into durable guest-planning implications.',
      factIds: [],
      status: 'baseline-unmapped',
    },
  ],
});
