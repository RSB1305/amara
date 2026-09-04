import { defineKnowledgePageManifest } from '../../schema';

export const tarifaWinterStaysKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-winter-stays',
  destination: 'tarifa',
  topic: 'winter-stays',
  createdAt: '2026-08-21T17:19:24+02:00',
  updatedAt: '2026-08-21T18:32:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1nWymxiU-IzfILM0t5rzISp8ZivLYfOgd',
    url: 'https://drive.google.com/drive/folders/1nWymxiU-IzfILM0t5rzISp8ZivLYfOgd',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/winter',
  },
  publicContentPath: 'src/content/tarifaWinterStaysContent.ts',
  researchRunIds: ['2026-08-21__161609__winter-stays__research-001'],
  coverage: [
    { authoringArea: 'seo-and-job', purpose: 'Retain Tarifa’s editorial winter identity while clarifying duration and product intent.', factIds: ['market.winter.etc.travel-intent-2025', 'market.winter.etc.shift-motives-2025'], status: 'partial' },
    { authoringArea: 'appetizer', purpose: 'Combine Estrecho, wind, lived rhythm and honest home comfort.', factIds: ['tarifa.winter.levante-poniente-context', 'tarifa.winter.host-quieter-rhythm-baseline'], status: 'partial', notes: 'First-party lines require operator confirmation.' },
    { authoringArea: 'winter-motives', purpose: 'Explain the alternative to peak heat and crowding without promising empty beaches.', factIds: ['market.winter.etc.month-shift-2025', 'market.winter.etc.shift-motives-2025'], status: 'covered' },
    { authoringArea: 'local-feel', purpose: 'Preserve Robert’s differentiated winter perspective.', factIds: ['tarifa.winter.host-quieter-rhythm-baseline', 'tarifa.winter.levante-poniente-context'], status: 'partial' },
    { authoringArea: 'realistic-day', purpose: 'Make flexible planning and indoor time part of the proposition.', factIds: ['tarifa.winter.levante-poniente-context', 'tarifa.winter.christmas-programme-2025-26'], status: 'partial', notes: 'Historic programme cannot be promised for the next winter.' },
    { authoringArea: 'weather-boundary', purpose: 'Keep detailed climate normals in Climate & Seasons.', factIds: ['tarifa.winter.aemet-station-normal-source', 'tarifa.winter.levante-poniente-context'], status: 'partial', notes: 'Later link to normalized climate fact IDs.' },
    { authoringArea: 'longer-stay', purpose: 'Explain cooking, laundry, work and flexible routines without residential-rental implications.', factIds: ['tarifa.winter.amara-kitchen-laundry-baseline', 'tarifa.winter.amara-wifi-baseline'], status: 'partial', notes: 'Commercial stay duration remains open.' },
    { authoringArea: 'home-comfort', purpose: 'Surface proven heating, fireplace, kitchen and laundry earlier.', factIds: ['tarifa.winter.amara-heating-baseline', 'tarifa.winter.amara-fireplace-baseline', 'tarifa.winter.amara-kitchen-laundry-baseline', 'tarifa.winter.amara-wifi-baseline'], status: 'partial', notes: 'Property evidence pack required.' },
    { authoringArea: 'fit-and-not-fit', purpose: 'Make wind variability and desired rhythm explicit.', factIds: ['tarifa.winter.levante-poniente-context', 'tarifa.winter.host-quieter-rhythm-baseline'], status: 'partial' },
    { authoringArea: 'host-and-planning', purpose: 'Keep host experience separate from current events, routes and businesses.', factIds: ['tarifa.winter.host-quieter-rhythm-baseline', 'tarifa.winter.christmas-programme-2025-26', 'tarifa.winter.amara-old-town-walk-baseline'], status: 'partial', notes: 'Line-by-line host confirmation and dynamic checks remain open.' },
    { authoringArea: 'conversion', purpose: 'Move proven winter suitability and a contextual CTA earlier without losing editorial trust.', factIds: ['tarifa.winter.amara-heating-baseline', 'tarifa.winter.amara-fireplace-baseline', 'tarifa.winter.amara-kitchen-laundry-baseline', 'tarifa.winter.amara-garage-baseline'], status: 'partial' },
  ],
});
