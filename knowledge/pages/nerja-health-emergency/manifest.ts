import { defineKnowledgePageManifest } from '../../schema';

export const nerjaHealthEmergencyKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-health-emergency', destination: 'nerja', topic: 'health-emergency',
  createdAt: '2026-08-22T06:41:03+02:00', updatedAt: '2026-08-22T06:41:03+02:00', status: 'awaiting-research',
  driveFolder: { id: '1xkZaZCRKd9QBG9xpJkhRNoUwrh-78G-9', url: 'https://drive.google.com/drive/folders/1xkZaZCRKd9QBG9xpJkhRNoUwrh-78G-9', path: 'AMARA – Research Vault/10_LOCATIONS/nerja/nerja-health-emergency' },
  publicContentPath: 'src/content/nerjaHealthEmergencyContent.ts',
  researchRunIds: ['2026-08-22__064103__health-emergency__research-001'],
  coverage: [
    { authoringArea: 'care-system', purpose: 'Explain stable care levels and official pathways without medical advice.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'emergency-and-pharmacy', purpose: 'Route guests to official emergency and pharmacy live services.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'pre-trip-planning', purpose: 'Cover durable preparation boundaries without insurance advice.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'public-private-boundary', purpose: 'Keep volatile contacts and acute instructions in suitable live or private channels.', factIds: [], status: 'gap' },
    { authoringArea: 'host-guidance', purpose: 'Add only verified first-party local guidance.', factIds: [], status: 'gap' },
  ],
});
