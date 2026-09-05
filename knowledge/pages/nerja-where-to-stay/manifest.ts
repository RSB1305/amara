import { defineKnowledgePageManifest } from '../../schema';

export const nerjaWhereToStayKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-where-to-stay',
  destination: 'nerja',
  topic: 'where-to-stay-areas',
  createdAt: '2026-08-21T13:05:35+02:00',
  updatedAt: '2026-08-21T14:05:00+02:00',
  status: 'ready',
  driveFolder: {
    id: '1MFXlupSIrS1J2_frNAAihHVm1gRhuG1S',
    url: 'https://drive.google.com/drive/folders/1MFXlupSIrS1J2_frNAAihHVm1gRhuG1S',
    path: 'AMARA – Research Vault/10_LOCATIONS/nerja/where-to-stay',
  },
  publicContentPath: 'src/content/nerjaLocationContent.ts',
  researchRunIds: ['2026-08-21__130535__where-to-stay-areas__research-001'],
  coverage: [
    { authoringArea: 'decision', purpose: 'Frame Nerja as a route-and-routine decision rather than a town-wide promise.', factIds: ['nerja.stay.models.practical-not-administrative'], status: 'covered' },
    { authoringArea: 'areas', purpose: 'Present six practical models without implying official district boundaries.', factIds: ['nerja.stay.models.practical-not-administrative', 'nerja.stay.outer-clusters.separate'], status: 'covered' },
    { authoringArea: 'tradeoffs', purpose: 'Show how beach choice changes access and return routes.', factIds: ['nerja.stay.carabeo.stepped-access', 'nerja.stay.carabeillo.stepped-access', 'nerja.stay.burriana.infrastructure'], status: 'covered' },
    { authoringArea: 'mobility', purpose: 'Keep parking, slopes and exact route checks explicit.', factIds: ['nerja.stay.burriana.infrastructure', 'nerja.stay.outer-clusters.separate'], status: 'covered' },
    { authoringArea: 'fit', purpose: 'Match stay preferences to practical location models conditionally.', factIds: ['nerja.stay.models.practical-not-administrative', 'nerja.stay.outer-clusters.separate'], status: 'covered' },
    { authoringArea: 'amara', purpose: 'Keep AMARA Playa route and access claims within first-party boundaries.', factIds: ['nerja.stay.amara-playa.routes'], status: 'covered' },
  ],
});
