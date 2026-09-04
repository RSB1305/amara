import { defineKnowledgePageManifest } from '../../schema';

export const tarifaYogaKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-yoga',
  destination: 'tarifa',
  topic: 'yoga',
  createdAt: '2026-09-04T14:05:00+02:00',
  updatedAt: '2026-09-04T14:05:00+02:00',
  status: 'ready',
  driveFolder: {
    id: '1g4aDEByHEVW1bgevdc-s_GauIEtfDtct',
    url: 'https://drive.google.com/drive/folders/1g4aDEByHEVW1bgevdc-s_GauIEtfDtct',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/experiences/yoga'
  },
  publicContentPath: 'src/content/tarifaExperienceSpokeContent.ts',
  researchRunIds: ['2026-09-04__133936__tarifa-yoga__research-001'],
  coverage: [
    { authoringArea: 'broad-scene', purpose: 'Present Tarifa’s yoga range without freezing a timetable.', factIds: ['tarifa.yoga.scene.breadth', 'tarifa.yoga.official-directory.addresses'], status: 'covered' },
    { authoringArea: 'ocean-yoga', purpose: 'Describe beach/ocean classes as condition-dependent examples, routed to live booking.', factIds: ['tarifa.yoga.mandalablue.ocean-classes'], status: 'covered' },
    { authoringArea: 'mar-adriatico', purpose: 'Anchor the same-street wellness cluster around Family & Surf.', factIds: ['tarifa.yoga.mar-adriatico.cluster', 'tarifa.yoga.amara.mats-in-apartment'], status: 'covered' },
    { authoringArea: 'active-stay', purpose: 'Connect yoga to recovery after the water and to family formats via the qualified provider.', factIds: ['tarifa.yoga.respira.family-formats'], status: 'covered' },
    { authoringArea: 'host', purpose: 'State mats-in-apartment first-hand and the on-request private-session help without over-promising.', factIds: ['tarifa.yoga.amara.mats-in-apartment'], status: 'covered' },
    { authoringArea: 'excluded-sup-yoga', purpose: 'Keep unverified SUP-yoga out of public copy.', factIds: ['tarifa.yoga.sup-yoga.unverified'], status: 'excluded' }
  ]
});
