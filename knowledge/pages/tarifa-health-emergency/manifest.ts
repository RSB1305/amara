import { defineKnowledgePageManifest } from '../../schema';

export const tarifaHealthEmergencyKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-health-emergency', destination: 'tarifa', topic: 'health-emergency',
  createdAt: '2026-08-22T06:41:03+02:00', updatedAt: '2026-09-10T12:20:00+02:00', status: 'needs-review',
  driveFolder: { id: '19tRx7xUuaVGccfP69tkOyiDVQsvfmMtk', url: 'https://drive.google.com/drive/folders/19tRx7xUuaVGccfP69tkOyiDVQsvfmMtk', path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/health' },
  publicContentPath: 'src/content/dailyLifeGuideContent.ts',
  researchRunIds: ['2026-08-22__064103__health-emergency__research-001'],
  coverage: [
    { authoringArea: 'care-system', purpose: 'Explain stable care levels and official pathways without medical advice.', factIds: ['tarifa.health.centro-de-salud', 'tarifa.health.outlying-consultorios', 'tarifa.health.hospital-punta-europa', 'tarifa.health.language'], status: 'partial', notes: 'Reconciled from the Aug+Sep 2026 runs; hours not published (SAS string ambiguous), language/interpreter unverified.' },
    { authoringArea: 'emergency-and-pharmacy', purpose: 'Route guests to official emergency and pharmacy live services.', factIds: ['tarifa.health.emergency-112', 'tarifa.health.pharmacy-guardia'], status: 'partial', notes: 'Duty pharmacy via Colegio de Cádiz live finder; Tarifa sometimes covered externally.' },
    { authoringArea: 'pre-trip-planning', purpose: 'Cover durable preparation boundaries without insurance advice.', factIds: ['tarifa.health.ehic'], status: 'partial' },
    { authoringArea: 'public-private-boundary', purpose: 'Keep volatile contacts and acute instructions in suitable live or private channels.', factIds: ['tarifa.health.private-clinic'], status: 'partial', notes: 'Private Tarifa Medical Center is operator-listed only (August run); verify before use.' },
    { authoringArea: 'host-guidance', purpose: 'Add only verified first-party local guidance.', factIds: [], status: 'gap' },
  ],
});
