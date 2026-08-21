import { defineKnowledgePageManifest } from '../../schema';

export const nerjaWinterStaysKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-winter-stays',
  destination: 'nerja',
  topic: 'winter-stays',
  createdAt: '2026-08-21T17:19:24+02:00',
  updatedAt: '2026-08-21T17:19:24+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1IQ3Er0CHGYcMrYx7LFz8KbkCAAyyivLh',
    url: 'https://drive.google.com/drive/folders/1IQ3Er0CHGYcMrYx7LFz8KbkCAAyyivLh',
    path: 'AMARA – Research Vault/10_LOCATIONS/nerja/nerja-winter-stays',
  },
  publicContentPath: 'src/content/nerjaWinterStaysContent.ts',
  researchRunIds: ['2026-08-21__161609__winter-stays__research-001'],
  coverage: [
    { authoringArea: 'seo-and-job', purpose: 'Create a dedicated winter-stay owner between inspiration and accommodation intent.', factIds: ['nerja.winter.dedicated-page-absent', 'seo.winter.nerja-rentals-monthly-intent', 'seo.winter.nerja-overwinteren-multiweek-intent'], status: 'gap', notes: 'The public content path is planned and does not yet exist.' },
    { authoringArea: 'appetizer', purpose: 'Frame coast, town life and all-weather anchors without a bathing promise.', factIds: ['nerja.winter.cueva-open-pattern-2026', 'nerja.winter.museum-open-pattern-2026'], status: 'partial' },
    { authoringArea: 'winter-motives', purpose: 'Connect off-season motivation to Nerja without treating intent as booking data.', factIds: ['market.winter.etc.travel-intent-2025', 'market.winter.etc.shift-motives-2025'], status: 'covered' },
    { authoringArea: 'local-feel', purpose: 'Describe the actual winter coastal-town rhythm.', factIds: [], status: 'gap', notes: 'Gemini’s “fully functional” claim was rejected; host and municipal evidence are needed.' },
    { authoringArea: 'realistic-day', purpose: 'Pair a weather-dependent coast day with verified indoor alternatives.', factIds: ['nerja.winter.cueva-open-pattern-2026', 'nerja.winter.museum-open-pattern-2026', 'nerja.winter.museum-year-round-programme'], status: 'partial', notes: 'Host-specific routine remains open.' },
    { authoringArea: 'weather-boundary', purpose: 'Summarize only decision-relevant winter reality and link to Climate & Seasons.', factIds: [], status: 'gap', notes: 'Await normalized climate facts; no Málaga-Airport proxy should be presented as Nerja.' },
    { authoringArea: 'longer-stay', purpose: 'Explain everyday routine without implying monthly tenancy.', factIds: ['seo.winter.nerja-rentals-monthly-intent', 'seo.winter.nerja-overwinteren-multiweek-intent'], status: 'gap', notes: 'AMARA Playa duration and everyday evidence remain open.' },
    { authoringArea: 'home-comfort', purpose: 'Prove AMARA Playa’s winter suitability property by property.', factIds: [], status: 'gap', notes: 'Full object evidence pack required.' },
    { authoringArea: 'fit-and-not-fit', purpose: 'Separate coastal landscape from summer beach-service expectations.', factIds: ['nerja.winter.maro-shuttle-summer-2025', 'nerja.winter.lifeguard-summer-2026'], status: 'partial' },
    { authoringArea: 'host-and-planning', purpose: 'Add Robert’s Nerja routine and recheck dynamic services.', factIds: ['nerja.winter.cueva-open-pattern-2026', 'nerja.winter.museum-open-pattern-2026'], status: 'gap', notes: 'First-party interview required.' },
    { authoringArea: 'conversion', purpose: 'Introduce AMARA Playa only after winter fit and property proof are clear.', factIds: [], status: 'gap', notes: 'No winter-specific AMARA Playa fact is verified yet.' },
  ],
});
