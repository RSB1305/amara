import { defineKnowledgePageManifest } from '../../schema';

export const nerjaClimateKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-climate',
  destination: 'nerja',
  topic: 'climate-seasons',
  createdAt: '2026-08-21T14:24:23+02:00',
  updatedAt: '2026-08-21T14:35:11+02:00',
  status: 'research-received',
  driveFolder: {
    id: '1NR0CQC9Gp1EOaj42w2phdQ9XGMKYhrn5',
    url: 'https://drive.google.com/drive/folders/1NR0CQC9Gp1EOaj42w2phdQ9XGMKYhrn5',
    path: 'AMARA – Research Vault/10_LOCATIONS/nerja/weather',
  },
  publicContentPath: 'src/page-families/location-authority/NerjaWeatherPage.astro',
  researchRunIds: [
    '2026-08-21__142423__climate-seasons__research-001',
    '2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001',
  ],
  coverage: [
    { authoringArea: 'climate-at-a-glance', purpose: 'State the coastal long-term pattern and climate-versus-weather boundary.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'monthly-data', purpose: 'Use defined, representative and methodologically transparent monthly variables.', factIds: [], status: 'gap', notes: 'The common ERA5-Land method and script are available, but no authenticated raw download or calculated Nerja series exists. Current monthly values remain identical to Frigiliana and unauthorized.' },
    { authoringArea: 'four-seasons', purpose: 'Describe spring, summer, autumn and winter without forecast or guarantee language.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'local-difference', purpose: 'Bound coastal, sea-temperature and intra-town exposure claims to suitable evidence.', factIds: [], status: 'gap' },
    { authoringArea: 'travel-fit', purpose: 'Translate verified climate and sea patterns into conditional planning guidance.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'amara-by-season', purpose: 'Keep AMARA Playa comfort, route, view and orientation claims property-specific.', factIds: [], status: 'gap' },
    { authoringArea: 'sources-method-forecast', purpose: 'Expose datasets, definitions, limitations and the official current forecast.', factIds: [], status: 'gap', notes: 'The extraction run identifies the AEMET municipal-capital reference point and a reproducible common method; execution, returned-grid verification and validation remain pending.' },
  ],
});
