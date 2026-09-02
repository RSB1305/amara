import { defineKnowledgePageManifest } from '../../schema';

export const tarifaHealthEmergencyKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-health-emergency', destination: 'tarifa', topic: 'health-emergency',
  createdAt: '2026-08-22T06:41:03+02:00', updatedAt: '2026-09-02T10:15:00+02:00', status: 'needs-review',
  driveFolder: { id: '19tRx7xUuaVGccfP69tkOyiDVQsvfmMtk', url: 'https://drive.google.com/drive/folders/19tRx7xUuaVGccfP69tkOyiDVQsvfmMtk', path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/tarifa-health-emergency' },
  publicContentPath: 'src/content/dailyLifeGuideContent.ts',
  researchRunIds: ['2026-08-22__064103__health-emergency__research-001'],
  coverage: [
    { authoringArea: 'care-system', purpose: 'Explain stable care levels and official pathways without medical advice.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'emergency-and-pharmacy', purpose: 'Route guests to official emergency and pharmacy live services.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'pre-trip-planning', purpose: 'Cover durable preparation boundaries without insurance advice.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'public-private-boundary', purpose: 'Keep volatile contacts and acute instructions in suitable live or private channels.', factIds: [], status: 'gap' },
    { authoringArea: 'host-guidance', purpose: 'Add only verified first-party local guidance.', factIds: [], status: 'gap' },
  ],
});
