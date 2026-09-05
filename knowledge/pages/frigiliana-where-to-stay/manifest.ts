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
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/where-to-stay',
  },
  publicContentPath: 'src/content/frigilianaStreetsStairsContent.ts',
  researchRunIds: ['2026-08-21__130535__where-to-stay-areas__research-001'],
  coverage: [
    { authoringArea: 'decision', purpose: 'Explain why route and entrance matter more than map distance.', factIds: ['frigiliana.stay.historic-mobility'], status: 'covered' },
    { authoringArea: 'areas', purpose: 'Distinguish the historic, transition, later-village and countryside settings.', factIds: ['frigiliana.stay.barribarto.medieval-core', 'frigiliana.stay.barribajo.calle-real', 'frigiliana.stay.ensanche.transition', 'frigiliana.stay.southern-expansion'], status: 'covered' },
    { authoringArea: 'tradeoffs', purpose: 'Keep the access and atmosphere trade-off visible for every setting.', factIds: ['frigiliana.stay.historic-mobility', 'frigiliana.stay.historic-vehicle-access'], status: 'covered' },
    { authoringArea: 'mobility', purpose: 'Separate stable morphology from current vehicle rules.', factIds: ['frigiliana.stay.historic-mobility', 'frigiliana.stay.historic-vehicle-access'], status: 'covered' },
    { authoringArea: 'fit', purpose: 'Translate location evidence into conditional stay profiles.', factIds: ['frigiliana.stay.historic-mobility', 'frigiliana.stay.southern-expansion'], status: 'covered' },
    {
      authoringArea: 'amara',
      purpose: 'Use Casa AMARA as a property-specific example of how street position, the shared entrance and the route after the door affect a stay.',
      factIds: [
        'casa-amara.location.calle-chorruelo-calle-real',
        'casa-amara.access.shared-entrance-and-internal-steps',
        'casa-amara.access.village-core-route-after-door',
      ],
      status: 'covered',
      notes: 'No parking-to-door distance, comparative elevation or exact internal step count is authorized.',
    },
  ],
});
