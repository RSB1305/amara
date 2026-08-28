import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaHikingKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-hiking',
  destination: 'frigiliana',
  topic: 'hiking-weather-return',
  createdAt: '2026-08-28T16:30:00+02:00',
  updatedAt: '2026-08-28T17:00:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1VyecWPTXEgcAwxY5ZRQModN7evS19LmK',
    url: 'https://drive.google.com/drive/folders/1VyecWPTXEgcAwxY5ZRQModN7evS19LmK',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-28__092357__frigiliana-hiking-weather-return__research-001',
  },
  publicContentPath: 'src/content/frigilianaHikingContent.ts',
  researchRunIds: ['2026-08-28__092357__frigiliana-hiking-weather-return__research-001'],
  coverage: [
    {
      authoringArea: 'hero-and-route-choice',
      purpose: 'Answer which of the four materially different routes fits the intended day without turning Casa AMARA into a trailhead.',
      factIds: [
        'frigiliana.hiking.cruz-pinto.route-profile',
        'frigiliana.hiking.cahorros.route-profile-and-riverbed',
        'frigiliana.hiking.el-fuerte.route-profile',
        'frigiliana.hiking.el-fuerte.official-start-and-lizar-access',
        'frigiliana.hiking.gr249-stage6.route-profile',
      ],
      status: 'partial',
      notes: 'The four official profiles are supported; the exact Casa AMARA-to-start and return context is not.',
    },
    {
      authoringArea: 'cruz-de-pinto',
      purpose: 'Compare the published circuit distance, duration, difficulty and described line.',
      factIds: ['frigiliana.hiking.cruz-pinto.route-profile'],
      status: 'covered',
      notes: 'Do not add total ascent, summit elevation, shade, live access or a safety guarantee.',
    },
    {
      authoringArea: 'rio-higueron-cahorros',
      purpose: 'Explain the published riverbed circuit and why live conditions remain decisive.',
      factIds: ['frigiliana.hiking.cahorros.route-profile-and-riverbed'],
      status: 'partial',
      notes: 'Distance, duration and official difficulty are covered; water level, flood safety, surface and post-rain suitability require a live authority check.',
    },
    {
      authoringArea: 'el-fuerte',
      purpose: 'Describe the complete summit route with only the official profile values that survive normalization.',
      factIds: [
        'frigiliana.hiking.el-fuerte.route-profile',
        'frigiliana.hiking.el-fuerte.official-start-and-lizar-access',
      ],
      status: 'partial',
      notes: 'Distance, duration, official difficulty, summit elevation and the Plaza-to-Pozo de Lízar approach are supported. The current public 631–633-metre elevation-gain value and any shortened viewpoint variant are not authorized by the normalized facts.',
    },
    {
      authoringArea: 'gr249-stage-6',
      purpose: 'Present the linear Frigiliana–Cómpeta stage as a full mountain-day commitment.',
      factIds: ['frigiliana.hiking.gr249-stage6.route-profile'],
      status: 'partial',
      notes: 'The route profile is covered; current closures, water, surface and a pre-bookable return remain open.',
    },
    {
      authoringArea: 'rio-chillar-closure',
      purpose: 'Keep a dated restriction separate from the four recommended route cards.',
      factIds: [
        'nerja.hiking.rio-chillar.official-closure-2025',
        'nerja.hiking.rio-chillar.current-closure-check-2026-08-28',
        'nerja.hiking.rio-chillar.controlled-access-procedure-2026',
      ],
      status: 'partial',
      notes: 'Closure wording is supported for the dated 28 August 2026 check. Because status is highly volatile, the official page must be rechecked immediately before publication; the BOJA procedure is not evidence of reopening.',
    },
    {
      authoringArea: 'weather-and-live-conditions',
      purpose: 'Translate route exposure and riverbed conditions into a forecast and warning check without duplicating the Weather narrative.',
      factIds: [
        'frigiliana.hiking.cahorros.route-profile-and-riverbed',
        'frigiliana.climate.regional-proxy.seasonal-contrast',
      ],
      status: 'partial',
      notes: 'Seasonal context is supported; route-specific live status and warning authority remain open.',
    },
    {
      authoringArea: 'navigation-and-source-boundary',
      purpose: 'Use official profiles for the baseline and external tracks for navigation without presenting either as a live safety guarantee.',
      factIds: [
        'frigiliana.hiking.cruz-pinto.route-profile',
        'frigiliana.hiking.cahorros.route-profile-and-riverbed',
        'frigiliana.hiking.el-fuerte.route-profile',
        'frigiliana.hiking.gr249-stage6.route-profile',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'casa-amara-start-and-return',
      purpose: 'Connect the official route start and return to Casa AMARA only through a dated first-party walk.',
      factIds: ['casa-amara.location.calle-chorruelo-calle-real'],
      status: 'gap',
      notes: 'The property location is verified, but no exact route, duration, steps, gradient or recovery sequence is supported.',
    },
    {
      authoringArea: 'candidate-route-identities',
      purpose: 'Prevent unverified short variants or loops from entering the public route selection as if they were official routes.',
      factIds: [
        'frigiliana.hiking.el-fuerte.official-start-and-lizar-access',
        'frigiliana.hiking.acebuchal.official-route-profile',
      ],
      status: 'gap',
      notes: 'The official sources do not establish the proposed short El Fuerte viewpoint route, a three-kilometre Lízar/Acequia loop or a twelve-kilometre Acebuchal loop. These need first-party GPX verification before authoring.',
    },
    {
      authoringArea: 'post-route-food',
      purpose: 'Recommend a restaurant only when its position and current operation fit the actual route finish.',
      factIds: [],
      status: 'gap',
      notes: 'Requires current restaurant operation evidence and a dated AMARA route-and-meal note.',
    },
  ],
});
