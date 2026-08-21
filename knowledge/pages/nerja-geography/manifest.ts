import { defineKnowledgePageManifest } from '../../schema';

export const nerjaGeographyKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-geography',
  destination: 'nerja',
  topic: 'geography-orientation',
  createdAt: '2026-08-21T11:26:50+02:00',
  updatedAt: '2026-08-21T11:49:45+02:00',
  status: 'research-received',
  driveFolder: {
    id: '18Vnw5W18dwxP-uk6CHO7fGq8YSMvtTQC',
    url: 'https://drive.google.com/drive/folders/18Vnw5W18dwxP-uk6CHO7fGq8YSMvtTQC',
    path: 'AMARA – Research Vault/10_LOCATIONS/nerja/nerja-geography',
  },
  publicContentPath: 'src/content/nerjaGeographyContent.ts',
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
      authoringArea: 'coast',
      purpose: 'Define Nerja municipality, the built coast and relationships to Maro and the Mediterranean.',
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'built-up-relief',
      purpose: 'Explain how the built settlement changes elevation and what that means for short routes.',
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'sierra',
      purpose: 'Document the municipal relief span, Sierra de Almijara and Navachica claim boundaries.',
      factIds: [],
      status: 'baseline-unmapped',
    },
    {
      authoringArea: 'rio-chillar',
      purpose: 'Locate the Río Chíllar corridor and distinguish stable geography from access conditions.',
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
