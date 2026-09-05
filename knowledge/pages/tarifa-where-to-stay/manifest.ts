import { defineKnowledgePageManifest } from '../../schema';

export const tarifaWhereToStayKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-where-to-stay',
  destination: 'tarifa',
  topic: 'where-to-stay-areas',
  createdAt: '2026-08-21T13:05:35+02:00',
  updatedAt: '2026-08-21T14:05:00+02:00',
  status: 'ready',
  driveFolder: {
    id: '1II1pfQfz7S9JanfoMe-v6aizMkP3z8N6',
    url: 'https://drive.google.com/drive/folders/1II1pfQfz7S9JanfoMe-v6aizMkP3z8N6',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/where-to-stay',
  },
  publicContentPath: 'src/content/tarifaGuideContent.ts',
  researchRunIds: ['2026-08-21__130535__where-to-stay-areas__research-001'],
  coverage: [
    { authoringArea: 'decision', purpose: 'Begin with the intended daily rhythm and car use.', factIds: ['tarifa.stay.los-lances.corridor'], status: 'covered' },
    { authoringArea: 'areas', purpose: 'Present four practical accommodation settings with explicit boundary language.', factIds: ['tarifa.stay.la-marina.planning-name', 'tarifa.stay.los-lances.corridor'], status: 'covered' },
    { authoringArea: 'tradeoffs', purpose: 'Expose car, town, coast and wind trade-offs before recommendation.', factIds: ['tarifa.stay.historic-access.historical-rule', 'tarifa.stay.wind.property-specific'], status: 'covered' },
    { authoringArea: 'mobility', purpose: 'Keep current access rules and property-level wind effects conditional.', factIds: ['tarifa.stay.historic-access.historical-rule', 'tarifa.stay.wind.property-specific'], status: 'covered' },
    { authoringArea: 'fit', purpose: 'Match settings to stay types without universal suitability claims.', factIds: ['tarifa.stay.los-lances.corridor', 'tarifa.stay.wind.property-specific'], status: 'covered' },
    { authoringArea: 'amara', purpose: 'Retain operator-owned property facts while excluding unmeasured walking time.', factIds: ['tarifa.stay.amara.garage-supermarket', 'tarifa.stay.amara.walking-time'], status: 'covered' },
  ],
});
