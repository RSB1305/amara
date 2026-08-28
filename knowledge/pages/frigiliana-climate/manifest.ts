import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaClimateKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-climate',
  destination: 'frigiliana',
  topic: 'climate-seasons',
  createdAt: '2026-08-21T14:24:23+02:00',
  updatedAt: '2026-08-28T16:00:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1EQa8NwKyKEG9HuzNwLBwe2D6VjItYT3v',
    url: 'https://drive.google.com/drive/folders/1EQa8NwKyKEG9HuzNwLBwe2D6VjItYT3v',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/frigiliana-climate',
  },
  publicContentPath: 'src/content/locationWeatherAuthorityContent.ts',
  researchRunIds: [
    '2026-08-21__142423__climate-seasons__research-001',
    '2026-08-28__092355__frigiliana-climate-seasons-decisions__research-001',
  ],
  coverage: [
    { authoringArea: 'climate-at-a-glance', purpose: 'State the long-term pattern and climate-versus-weather boundary.', factIds: ['frigiliana.climate.regional-proxy.malaga-airport-method', 'frigiliana.climate.regional-proxy.seasonal-contrast'], status: 'partial', notes: 'Official regional proxy available; genuinely local Frigiliana series remains open.' },
    { authoringArea: 'monthly-data', purpose: 'Use defined, representative and methodologically transparent monthly variables.', factIds: ['frigiliana.climate.regional-proxy.malaga-airport-method', 'frigiliana.climate.regional-proxy.malaga-airport-annual-normal', 'frigiliana.climate.local-method.era5-land-candidate'], status: 'gap', notes: 'ERA5-Land is the selected comparison candidate, but no declared extraction exists yet; the regional proxy cannot validate the current identical Frigiliana/Nerja monthly values.' },
    { authoringArea: 'four-seasons', purpose: 'Describe spring, summer, autumn and winter without forecast or guarantee language.', factIds: ['frigiliana.climate.regional-proxy.seasonal-contrast'], status: 'partial' },
    { authoringArea: 'local-difference', purpose: 'Bound hillside, elevation, exposure and shade claims to suitable evidence.', factIds: ['frigiliana.climate.local-method.era5-land-candidate'], status: 'gap', notes: 'The 0.1° gridded method can compare declared cells but cannot resolve property microclimate, individual streets or every terrain exposure.' },
    { authoringArea: 'travel-fit', purpose: 'Translate verified patterns into conditional date and day-planning guidance.', factIds: ['frigiliana.climate.regional-proxy.seasonal-contrast'], status: 'partial', notes: 'Only conditional regional implications are supported; route and beach owners retain current-condition decisions.' },
    { authoringArea: 'amara-by-season', purpose: 'Keep Casa AMARA comfort claims separate from destination climate evidence.', factIds: [], status: 'gap' },
    { authoringArea: 'sources-method-forecast', purpose: 'Expose datasets, definitions, limitations and the official current forecast.', factIds: ['frigiliana.climate.regional-proxy.malaga-airport-method', 'frigiliana.climate.local-method.era5-land-candidate'], status: 'partial', notes: 'The regional proxy and local comparison candidate are now explicit; coordinates, extraction, validation and local uncertainty remain unresolved.' },
  ],
});
