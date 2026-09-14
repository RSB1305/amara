import { defineKnowledgePageManifest } from '../../schema';

export const tarifaClimateKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-climate',
  destination: 'tarifa',
  topic: 'climate-seasons',
  createdAt: '2026-08-21T14:24:23+02:00',
  updatedAt: '2026-09-14T10:30:00+02:00',
  status: 'research-received',
  driveFolder: {
    id: '1GCJwGuy0_N3rRpQZNluPg0Hwk7Ainz8S',
    url: 'https://drive.google.com/drive/folders/1GCJwGuy0_N3rRpQZNluPg0Hwk7Ainz8S',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/weather',
  },
  publicContentPath: 'src/page-families/location-authority/TarifaWeatherPage.astro',
  researchRunIds: ['2026-08-21__142423__climate-seasons__research-001'],
  coverage: [
    { authoringArea: 'climate-at-a-glance', purpose: 'State the Strait and coastal long-term pattern without daily guarantees.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'monthly-data', purpose: 'Use defined, representative and methodologically transparent monthly variables.', factIds: [], status: 'gap', notes: 'The rendered table intro now frames the values as a long-term Climate-Data.org read of the Strait and points to the wind as the day-to-day deciding factor the table cannot show, so the figures are no longer presented as station-exact Tarifa measurements. The gap that remains is evidential: the point-model monthly values are still not validated against AEMET Tarifa station 6001 or suitable maritime evidence.' },
    { authoringArea: 'four-seasons', purpose: 'Describe spring, summer, autumn and winter without forecast or guarantee language.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'local-difference', purpose: 'Bound Strait, Levante, Poniente, sea and exposed-coast claims to suitable evidence.', factIds: [], status: 'gap' },
    { authoringArea: 'travel-fit', purpose: 'Translate verified patterns into conditional town, coast and watersports planning.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'amara-by-season', purpose: 'Keep La Marina property, comfort, parking, shopping and route claims first-party.', factIds: [], status: 'gap' },
    { authoringArea: 'sources-method-forecast', purpose: 'Expose datasets, definitions, limitations and official forecast or warning sources.', factIds: [], status: 'gap' },
  ],
});
