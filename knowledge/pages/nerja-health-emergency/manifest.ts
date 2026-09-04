import { defineKnowledgePageManifest } from '../../schema';

export const nerjaHealthEmergencyKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-health-emergency', destination: 'nerja', topic: 'health-emergency',
  createdAt: '2026-08-22T06:41:03+02:00', updatedAt: '2026-09-02T10:15:00+02:00', status: 'needs-review',
  driveFolder: { id: '1xkZaZCRKd9QBG9xpJkhRNoUwrh-78G-9', url: 'https://drive.google.com/drive/folders/1xkZaZCRKd9QBG9xpJkhRNoUwrh-78G-9', path: 'AMARA – Research Vault/10_LOCATIONS/nerja/health' },
  publicContentPath: 'src/content/dailyLifeGuideContent.ts',
  researchRunIds: ['2026-08-22__064103__health-emergency__research-001'],
  coverage: [
    { authoringArea: 'care-system', purpose: 'Explain stable care levels and official pathways without medical advice.', factIds: ['nerja.health.centro-address-and-contact', 'nerja.health.salud-responde'], status: 'partial' },
    { authoringArea: 'emergency-and-pharmacy', purpose: 'Route guests to official emergency and pharmacy live services.', factIds: ['nerja.health.urgent-and-emergency-routing'], status: 'partial', notes: 'Medical routing is covered; the pharmacy live-service path remains open.' },
    { authoringArea: 'pre-trip-planning', purpose: 'Cover durable preparation boundaries without insurance advice.', factIds: ['nerja.health.current-published-hours', 'nerja.health.weekday-hours-conflict'], status: 'partial' },
    { authoringArea: 'public-private-boundary', purpose: 'Keep volatile contacts and acute instructions in suitable live or private channels.', factIds: ['nerja.health.current-published-hours', 'nerja.health.urgent-and-emergency-routing', 'nerja.health.legacy-direct-number-unverified'], status: 'covered', notes: 'Safety-critical routing and verified contacts are public; direct call/map actions and the property address remain in Guest Utility.' },
    { authoringArea: 'host-guidance', purpose: 'Add only verified first-party local guidance.', factIds: [], status: 'gap' },
  ],
});
