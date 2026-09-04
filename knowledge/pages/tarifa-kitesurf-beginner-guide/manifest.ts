import { defineKnowledgePageManifest } from '../../schema';

export const tarifaKitesurfBeginnerGuideKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-kitesurf-beginner-guide',
  destination: 'tarifa',
  topic: 'kitesurf-beginner',
  createdAt: '2026-09-04T14:30:00+02:00',
  updatedAt: '2026-09-04T14:30:00+02:00',
  status: 'ready',
  driveFolder: {
    id: '16TW8wIBSO9NxnTAWcrIE7YbwENo-QD6B',
    url: 'https://drive.google.com/drive/folders/16TW8wIBSO9NxnTAWcrIE7YbwENo-QD6B',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/experiences/kitesurfing/beginner-guide'
  },
  publicContentPath: 'src/content/tarifaKitesurfGuideContent.ts',
  researchRunIds: ['2026-09-04__133936__tarifa-kitesurf-beginner-guide__research-001'],
  coverage: [
    { authoringArea: 'the-system', purpose: 'Explain kite/bar/chicken loop/harness and the harness-carries-the-pull habit.', factIds: ['tarifa.kitesurf-beginner.progression.kite-before-board'], status: 'covered' },
    { authoringArea: 'wind-window', purpose: 'Teach the wind window and power zone; reject the "bigger kite = more power" shortcut.', factIds: ['tarifa.kitesurf-beginner.wind-window.power-zone', 'tarifa.kitesurf-beginner.kite-size.multi-factor'], status: 'covered' },
    { authoringArea: 'safety', purpose: 'Pre-launch check and the release cascade, bounded to system-specific training.', factIds: ['tarifa.kitesurf-beginner.safety.release-cascade'], status: 'covered' },
    { authoringArea: 'learning-path', purpose: 'The staged progression and the role of body-drag/self-rescue.', factIds: ['tarifa.kitesurf-beginner.progression.kite-before-board', 'tarifa.kitesurf-beginner.bodydrag-selfrescue.core-safety'], status: 'covered' },
    { authoringArea: 'note-and-closing', purpose: 'Keep the "preparation, not a substitute for instruction" safety framing throughout.', factIds: ['tarifa.kitesurf-beginner.instruction.not-a-substitute'], status: 'covered' },
    { authoringArea: 'host', purpose: 'AMARA as a learning base coordinating gear/lessons; no on-water teaching claim.', factIds: ['tarifa.kitesurf-beginner.instruction.not-a-substitute'], status: 'covered' }
  ]
});
