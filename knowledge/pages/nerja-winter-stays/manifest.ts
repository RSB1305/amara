import { defineKnowledgePageManifest } from '../../schema';

export const nerjaWinterStaysKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-winter-stays',
  destination: 'nerja',
  topic: 'winter-stays',
  createdAt: '2026-08-21T17:19:24+02:00',
  updatedAt: '2026-08-21T18:32:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1IQ3Er0CHGYcMrYx7LFz8KbkCAAyyivLh',
    url: 'https://drive.google.com/drive/folders/1IQ3Er0CHGYcMrYx7LFz8KbkCAAyyivLh',
    path: 'AMARA – Research Vault/10_LOCATIONS/nerja/winter',
  },
  publicContentPath: 'src/content/nerjaWinterStaysContent.ts',
  researchRunIds: ['2026-08-21__161609__winter-stays__research-001'],
  coverage: [
    { authoringArea: 'seo-and-job', purpose: 'Create a dedicated winter-stay owner between inspiration and accommodation intent.', factIds: ['seo.winter.nerja-rentals-monthly-intent', 'seo.winter.nerja-overwinteren-multiweek-intent'], status: 'covered', notes: 'Public content owner and five-locale route now exist; volume data remains a separate SEO question.' },
    { authoringArea: 'appetizer', purpose: 'Frame coast, town life and all-weather anchors without a bathing promise.', factIds: ['nerja.winter.cueva-open-pattern-2026', 'nerja.winter.museum-open-pattern-2026'], status: 'covered' },
    { authoringArea: 'winter-motives', purpose: 'Connect off-season motivation to Nerja without treating intent as booking data.', factIds: ['market.winter.etc.travel-intent-2025', 'market.winter.etc.shift-motives-2025'], status: 'covered' },
    { authoringArea: 'local-feel', purpose: 'Describe the actual winter coastal-town rhythm.', factIds: ['nerja.winter.cueva-open-pattern-2026', 'nerja.winter.museum-open-pattern-2026'], status: 'partial', notes: 'Broad “fully functional” language remains excluded; a host interview can add personal depth.' },
    { authoringArea: 'realistic-day', purpose: 'Pair a weather-dependent coast day with verified indoor alternatives.', factIds: ['nerja.winter.cueva-open-pattern-2026', 'nerja.winter.museum-open-pattern-2026', 'nerja.winter.museum-year-round-programme'], status: 'covered' },
    { authoringArea: 'weather-boundary', purpose: 'Summarize only decision-relevant winter reality and link to Climate & Seasons.', factIds: [], status: 'partial', notes: 'The public page explicitly rejects Málaga-Airport proxy values and forecast-like claims.' },
    { authoringArea: 'longer-stay', purpose: 'Explain everyday routine without implying monthly tenancy.', factIds: ['seo.winter.nerja-rentals-monthly-intent', 'seo.winter.nerja-overwinteren-multiweek-intent'], status: 'partial', notes: 'The page distinguishes holiday stays from monthly expectations; current booking conditions remain authoritative.' },
    { authoringArea: 'home-comfort', purpose: 'Prove AMARA Playa’s winter suitability property by property.', factIds: [], status: 'partial', notes: 'Only canonical property-record amenities are projected; temperature-control and sun claims remain excluded.' },
    { authoringArea: 'fit-and-not-fit', purpose: 'Separate coastal landscape from summer beach-service expectations.', factIds: ['nerja.winter.maro-shuttle-summer-2025', 'nerja.winter.lifeguard-summer-2026'], status: 'covered' },
    { authoringArea: 'host-and-planning', purpose: 'Add Robert’s Nerja routine and recheck dynamic services.', factIds: ['nerja.winter.cueva-open-pattern-2026', 'nerja.winter.museum-open-pattern-2026'], status: 'partial', notes: 'Dynamic checks are explicit; first-party interview remains open.' },
    { authoringArea: 'conversion', purpose: 'Introduce AMARA Playa only after winter fit and property proof are clear.', factIds: [], status: 'partial', notes: 'Contextual conversion uses canonical property facts without claiming unverified winter equipment.' },
  ],
});
