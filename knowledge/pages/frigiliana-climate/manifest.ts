import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaClimateKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-climate',
  destination: 'frigiliana',
  topic: 'climate-seasons',
  createdAt: '2026-08-21T14:24:23+02:00',
  updatedAt: '2026-08-28T22:00:00+02:00',
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
    '2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001',
  ],
  coverage: [
    { authoringArea: 'climate-at-a-glance', purpose: 'State the long-term pattern and climate-versus-weather boundary.', factIds: ['frigiliana.climate.regional-proxy.malaga-airport-method', 'frigiliana.climate.regional-proxy.seasonal-contrast'], status: 'partial', notes: 'Official regional proxy available; genuinely local Frigiliana series remains open.' },
    { authoringArea: 'monthly-data', purpose: 'Use only defined, representative and methodologically transparent monthly variables when the page job actually requires them.', factIds: ['frigiliana.climate.regional-proxy.malaga-airport-method', 'frigiliana.climate.regional-proxy.malaga-airport-annual-normal', 'frigiliana.climate.local-method.era5-land-candidate'], status: 'partial', notes: 'The regional proxy supports bounded seasonal context but cannot validate the current identical Frigiliana/Nerja monthly values. Exact local monthly climatology is not required for the first connected-authoring batch; the unexecuted ERA5-Land method remains archived rather than an active blocker.' },
    { authoringArea: 'four-seasons', purpose: 'Describe spring, summer, autumn and winter without forecast or guarantee language.', factIds: ['frigiliana.climate.regional-proxy.seasonal-contrast'], status: 'partial' },
    { authoringArea: 'local-difference', purpose: 'Prevent hillside, elevation, exposure and shade from being presented as measured property microclimate.', factIds: ['frigiliana.climate.local-method.era5-land-candidate'], status: 'excluded', notes: 'The 0.1° gridded method cannot resolve property microclimate, individual streets or every terrain exposure. No such precision is required for the current page job.' },
    { authoringArea: 'travel-fit', purpose: 'Translate verified patterns into conditional date and day-planning guidance.', factIds: ['frigiliana.climate.regional-proxy.seasonal-contrast'], status: 'partial', notes: 'Only conditional regional implications are supported; route and beach owners retain current-condition decisions.' },
    {
      authoringArea: 'experience-handoffs',
      purpose: 'Turn seasonal climate into bounded next questions for the Hiking and Beaches owners without claiming live route or sea conditions.',
      factIds: [
        'frigiliana.climate.regional-proxy.seasonal-contrast',
        'frigiliana.hiking.cahorros.route-profile-and-riverbed',
        'frigiliana.hiking.cruz-pinto.route-profile',
        'frigiliana.hiking.el-fuerte.route-profile',
        'frigiliana.hiking.gr249-stage6.route-profile',
      ],
      status: 'partial',
      notes: 'The page may explain how heat, exposure and recent rain change the next planning question. Hiking retains route choice; Beaches retains access, setting and services. Current warnings, trail state, wind and sea state require live checks.',
    },
    { authoringArea: 'amara-by-season', purpose: 'Keep Casa AMARA comfort claims separate from destination climate evidence.', factIds: [], status: 'gap' },
    { authoringArea: 'sources-method-forecast', purpose: 'Expose datasets, definitions, limitations and the official current forecast.', factIds: ['frigiliana.climate.regional-proxy.malaga-airport-method', 'frigiliana.climate.local-method.era5-land-candidate'], status: 'partial', notes: 'The regional proxy and its limitations are explicit. The ERA5-Land method is archived and not an active publication dependency. The official current forecast and warnings must still be checked at publication or use time.' },
  ],
});
