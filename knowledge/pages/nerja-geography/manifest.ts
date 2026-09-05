import { defineKnowledgePageManifest } from '../../schema';

export const nerjaGeographyKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-geography',
  destination: 'nerja',
  topic: 'geography-orientation',
  createdAt: '2026-08-21T11:26:50+02:00',
  updatedAt: '2026-08-21T12:01:15+02:00',
  status: 'ready',
  driveFolder: {
    id: '18Vnw5W18dwxP-uk6CHO7fGq8YSMvtTQC',
    url: 'https://drive.google.com/drive/folders/18Vnw5W18dwxP-uk6CHO7fGq8YSMvtTQC',
    path: 'AMARA – Research Vault/10_LOCATIONS/nerja/geography',
  },
  publicContentPath: 'src/content/nerjaGeographyContent.ts',
  researchRunIds: ['2026-08-21__112650__geography-orientation__research-001'],
  coverage: [
    {
      authoringArea: 'hero-summary',
      purpose: 'SEO H1 and high-value page summary without replacing the full knowledge base.',
      factIds: [
        'nerja.geography.municipality.area',
        'nerja.geography.population-centres.four',
        'nerja.geography.sierra.coastal-relief-context',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'orientation-and-key-facts',
      purpose: 'Mental map, stable reference points and concise geographic facts.',
      factIds: [
        'nerja.geography.municipality.area',
        'nerja.geography.main-settlement.reference-point',
        'nerja.geography.population-centres.four',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'coast',
      purpose: 'Define Nerja municipality, the built coast and relationships to Maro and the Mediterranean.',
      factIds: [
        'nerja.geography.maro.distinct-population-centre',
        'nerja.geography.coastline-length.official-conflict',
      ],
      status: 'partial',
      notes: 'Municipal settlement structure is verified; the exact coastline length remains disputed.',
    },
    {
      authoringArea: 'built-up-relief',
      purpose: 'Explain how the built settlement changes elevation and what that means for short routes.',
      factIds: [
        'nerja.geography.main-settlement.reference-point',
        'nerja.geography.sierra.coastal-relief-context',
        'nerja.geography.routes.map-distance-insufficient',
      ],
      status: 'partial',
      notes: 'Broad relief is established; named built-area route profiles still require address-level evidence.',
    },
    {
      authoringArea: 'sierra',
      purpose: 'Document the municipal relief span, Sierra de Almijara and Navachica claim boundaries.',
      factIds: [
        'nerja.geography.sierra.coastal-relief-context',
        'nerja.geography.navachica.elevation',
        'nerja.geography.navachica.municipal-highest-point',
      ],
      status: 'partial',
      notes: 'Navachica elevation is verified; the municipal-highest-point superlative remains unproven.',
    },
    {
      authoringArea: 'rio-chillar',
      purpose: 'Locate the Río Chíllar corridor and distinguish stable geography from access conditions.',
      factIds: [
        'nerja.geography.rio-chillar.lower-corridor',
        'nerja.geography.rio-chillar.access-separate',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'what-it-means',
      purpose: 'Translate verified geography into durable guest-planning implications.',
      factIds: [
        'nerja.geography.routes.map-distance-insufficient',
        'nerja.geography.rio-chillar.access-separate',
      ],
      status: 'partial',
      notes: 'Durable planning boundaries are ready; exact route effort needs first-party route evidence.',
    },
  ],
});
