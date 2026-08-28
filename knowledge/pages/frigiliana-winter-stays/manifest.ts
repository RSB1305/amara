import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaWinterStaysKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-winter-stays',
  destination: 'frigiliana',
  topic: 'winter-stays',
  createdAt: '2026-08-21T17:19:24+02:00',
  updatedAt: '2026-08-28T22:00:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1epXT7IKdXDk9tCUWMLJSm_YXMEUJp3Te',
    url: 'https://drive.google.com/drive/folders/1epXT7IKdXDk9tCUWMLJSm_YXMEUJp3Te',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/frigiliana-winter-stays',
  },
  publicContentPath: 'src/content/frigilianaWinterStaysContent.ts',
  researchRunIds: ['2026-08-21__161609__winter-stays__research-001'],
  coverage: [
    { authoringArea: 'seo-and-job', purpose: 'Capture winter-stay intent without implying residential overwintering.', factIds: ['market.winter.etc.travel-intent-2025', 'seo.winter.nerja-overwinteren-multiweek-intent'], status: 'partial', notes: 'Destination-specific volume remains open.' },
    { authoringArea: 'appetizer', purpose: 'Combine village, terrain, nature access and honest indoor-comfort needs.', factIds: ['frigiliana.winter.historic-street-terrain', 'frigiliana.winter.el-fuerte-starts-in-village'], status: 'partial', notes: 'Requires first-party winter image and property evidence.' },
    { authoringArea: 'winter-motives', purpose: 'Explain why off-season rhythm may appeal without stereotyping guests.', factIds: ['market.winter.etc.month-shift-2025', 'market.winter.etc.shift-motives-2025'], status: 'covered' },
    { authoringArea: 'local-feel', purpose: 'Describe the lived winter village rhythm.', factIds: ['frigiliana.winter.historic-street-terrain'], status: 'gap', notes: 'Specific host experience and reliable openings are unresolved.' },
    { authoringArea: 'realistic-day', purpose: 'Build a terrain-aware day with a bad-weather alternative.', factIds: ['frigiliana.winter.el-fuerte-starts-in-village'], status: 'partial' },
    { authoringArea: 'weather-boundary', purpose: 'Keep climate detail with Climate & Seasons and use only bounded seasonal implications here.', factIds: ['frigiliana.climate.regional-proxy.seasonal-contrast'], status: 'partial', notes: 'The regional seasonal pattern is sufficient for the boundary. Do not reuse unsupported Gemini temperature claims or require exact local monthly climatology; current conditions remain a live forecast check.' },
    { authoringArea: 'longer-stay', purpose: 'Explain routine and current offered duration.', factIds: ['frigiliana.winter.amara-duration-baseline'], status: 'partial', notes: 'Commercial rules require confirmation.' },
    { authoringArea: 'home-comfort', purpose: 'Use only property-specific verified winter features.', factIds: ['frigiliana.winter.amara-heating-baseline', 'frigiliana.winter.amara-bathroom-underfloor-heating-baseline', 'frigiliana.winter.amara-pellet-stoves-baseline'], status: 'partial', notes: 'Dated property evidence pack remains open.' },
    { authoringArea: 'fit-and-not-fit', purpose: 'Make terrain and desired rhythm part of conditional fit.', factIds: ['frigiliana.winter.historic-street-terrain'], status: 'partial' },
    { authoringArea: 'host-and-planning', purpose: 'Add specific personal experience and volatile checks.', factIds: ['frigiliana.winter.one-business-winter-listing'], status: 'gap', notes: 'Host interview required.' },
    { authoringArea: 'conversion', purpose: 'Keep the existing early conversion strength while proving winter suitability.', factIds: ['frigiliana.winter.amara-heating-baseline', 'frigiliana.winter.amara-duration-baseline'], status: 'partial' },
  ],
});
