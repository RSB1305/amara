import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaWhereToStayKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-where-to-stay',
  destination: 'frigiliana',
  topic: 'where-to-stay-areas',
  createdAt: '2026-08-21T13:05:35+02:00',
  updatedAt: '2026-08-21T14:05:00+02:00',
  status: 'ready',
  driveFolder: {
    id: '1uDCU04Nxf4KQ7T6MGfOir7K3GBxt85Ng',
    url: 'https://drive.google.com/drive/folders/1uDCU04Nxf4KQ7T6MGfOir7K3GBxt85Ng',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/frigiliana-where-to-stay',
  },
  publicContentPath: 'src/content/frigilianaStreetsStairsContent.ts',
  researchRunIds: ['2026-08-21__130535__where-to-stay-areas__research-001'],
  coverage: [
    { authoringArea: 'decision', purpose: 'Explain why route and entrance matter more than map distance.', factIds: ['frigiliana.stay.historic-mobility'], status: 'covered' },
    { authoringArea: 'areas', purpose: 'Distinguish the historic, transition, later-village and countryside settings.', factIds: ['frigiliana.stay.barribarto.medieval-core', 'frigiliana.stay.barribajo.calle-real', 'frigiliana.stay.ensanche.transition', 'frigiliana.stay.southern-expansion'], status: 'covered' },
    { authoringArea: 'tradeoffs', purpose: 'Keep the access and atmosphere trade-off visible for every setting.', factIds: ['frigiliana.stay.historic-mobility', 'frigiliana.stay.historic-vehicle-access'], status: 'covered' },
    { authoringArea: 'mobility', purpose: 'Separate stable morphology from current vehicle rules.', factIds: ['frigiliana.stay.historic-mobility', 'frigiliana.stay.historic-vehicle-access'], status: 'covered' },
    { authoringArea: 'fit', purpose: 'Translate location evidence into conditional stay profiles.', factIds: ['frigiliana.stay.historic-mobility', 'frigiliana.stay.southern-expansion'], status: 'covered' },
    { authoringArea: 'amara', purpose: 'Keep Casa AMARA claims property-specific and avoid an unmeasured distance.', factIds: ['frigiliana.stay.amara-san-antonio-distance'], status: 'covered' },
  ],
});
