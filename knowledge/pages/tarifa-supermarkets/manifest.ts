import { defineKnowledgePageManifest } from '../../schema';

export const tarifaSupermarketsKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-supermarkets', destination: 'tarifa', topic: 'supermarkets-everyday-shopping',
  createdAt: '2026-08-22T06:41:02+02:00', updatedAt: '2026-09-10T12:15:00+02:00', status: 'needs-review',
  driveFolder: { id: '16zRQmK-tHfYcj7igQ-2Chsd-bPY40XDc', url: 'https://drive.google.com/drive/folders/16zRQmK-tHfYcj7igQ-2Chsd-bPY40XDc', path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/supermarkets' },
  publicContentPath: 'src/content/dailyLifeGuideContent.ts',
  researchRunIds: ['2026-08-22__064102__supermarkets-everyday-shopping__research-001'],
  coverage: [
    { authoringArea: 'shopping-reality', purpose: 'Explain Tarifa shopping areas without an uncurated store directory.', factIds: ['tarifa.supermarkets.structure', 'tarifa.supermarkets.chains-volatile'], status: 'partial', notes: 'Reconciled from the Aug+Sep 2026 runs: structure is solid; specific chains are volatile/disputed (Mercadona/Supeco vs DIA/El Jamón/Carrefour) and kept as live-check.' },
    { authoringArea: 'car-and-car-free', purpose: 'Separate old-town, residential and car-based shopping contexts.', factIds: ['tarifa.supermarkets.structure'], status: 'partial' },
    { authoringArea: 'arrival-and-opening-logic', purpose: 'Support first-supply and Sunday or holiday planning without freezing hours.', factIds: ['tarifa.supermarkets.lidl-anchor', 'tarifa.supermarkets.tourist-municipality-opening'], status: 'partial', notes: 'Lidl anchor + Municipio Turístico opening freedom (season); actual per-store opening remains a live check.' },
    { authoringArea: 'market-boundary', purpose: 'Keep weekly-market experience content outside the everyday-shopping owner.', factIds: [], status: 'gap' },
    { authoringArea: 'host-guidance', purpose: 'Add real AMARA Family & Surf shopping guidance only from dated first-party evidence.', factIds: [], status: 'gap' },
  ],
});
