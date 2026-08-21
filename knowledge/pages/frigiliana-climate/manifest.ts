import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaClimateKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-climate',
  destination: 'frigiliana',
  topic: 'climate-seasons',
  createdAt: '2026-08-21T14:24:23+02:00',
  updatedAt: '2026-08-21T14:24:23+02:00',
  status: 'awaiting-research',
  driveFolder: {
    id: '1EQa8NwKyKEG9HuzNwLBwe2D6VjItYT3v',
    url: 'https://drive.google.com/drive/folders/1EQa8NwKyKEG9HuzNwLBwe2D6VjItYT3v',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/frigiliana-climate',
  },
  publicContentPath: 'src/page-families/location-authority/FrigilianaWeatherPage.astro',
  researchRunIds: ['2026-08-21__142423__climate-seasons__research-001'],
  coverage: [
    { authoringArea: 'climate-at-a-glance', purpose: 'State the long-term pattern and climate-versus-weather boundary.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'monthly-data', purpose: 'Use defined, representative and methodologically transparent monthly variables.', factIds: [], status: 'gap', notes: 'Current monthly values are identical to Nerja and require method review.' },
    { authoringArea: 'four-seasons', purpose: 'Describe spring, summer, autumn and winter without forecast or guarantee language.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'local-difference', purpose: 'Bound hillside, elevation, exposure and shade claims to suitable evidence.', factIds: [], status: 'gap' },
    { authoringArea: 'travel-fit', purpose: 'Translate verified patterns into conditional date and day-planning guidance.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'amara-by-season', purpose: 'Keep Casa AMARA comfort claims separate from destination climate evidence.', factIds: [], status: 'gap' },
    { authoringArea: 'sources-method-forecast', purpose: 'Expose datasets, definitions, limitations and the official current forecast.', factIds: [], status: 'gap' },
  ],
});
