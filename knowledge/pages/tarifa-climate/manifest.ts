import { defineKnowledgePageManifest } from '../../schema';

export const tarifaClimateKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-climate',
  destination: 'tarifa',
  topic: 'climate-seasons',
  createdAt: '2026-08-21T14:24:23+02:00',
  updatedAt: '2026-08-21T14:35:11+02:00',
  status: 'research-received',
  driveFolder: {
    id: '1GCJwGuy0_N3rRpQZNluPg0Hwk7Ainz8S',
    url: 'https://drive.google.com/drive/folders/1GCJwGuy0_N3rRpQZNluPg0Hwk7Ainz8S',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/tarifa-climate',
  },
  publicContentPath: 'src/page-families/location-authority/TarifaWeatherPage.astro',
  researchRunIds: ['2026-08-21__142423__climate-seasons__research-001'],
  coverage: [
    { authoringArea: 'climate-at-a-glance', purpose: 'State the Strait and coastal long-term pattern without daily guarantees.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'monthly-data', purpose: 'Use defined, representative and methodologically transparent monthly variables.', factIds: [], status: 'gap', notes: 'Current point-model values require comparison with suitable station or maritime evidence.' },
    { authoringArea: 'four-seasons', purpose: 'Describe spring, summer, autumn and winter without forecast or guarantee language.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'local-difference', purpose: 'Bound Strait, Levante, Poniente, sea and exposed-coast claims to suitable evidence.', factIds: [], status: 'gap' },
    { authoringArea: 'travel-fit', purpose: 'Translate verified patterns into conditional town, coast and watersports planning.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'amara-by-season', purpose: 'Keep La Marina property, comfort, parking, shopping and route claims first-party.', factIds: [], status: 'gap' },
    { authoringArea: 'sources-method-forecast', purpose: 'Expose datasets, definitions, limitations and official forecast or warning sources.', factIds: [], status: 'gap' },
  ],
});
