import { defineKnowledgePageManifest } from '../../schema';

export const nerjaSupermarketsKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-supermarkets', destination: 'nerja', topic: 'supermarkets-everyday-shopping',
  createdAt: '2026-08-22T06:41:02+02:00', updatedAt: '2026-09-02T10:15:00+02:00', status: 'needs-review',
  driveFolder: { id: '1cI9UbuNAjm-HaxEDhr1euBmLUF3LVc8X', url: 'https://drive.google.com/drive/folders/1cI9UbuNAjm-HaxEDhr1euBmLUF3LVc8X', path: 'AMARA – Research Vault/10_LOCATIONS/nerja/supermarkets' },
  publicContentPath: 'src/content/dailyLifeGuideContent.ts',
  researchRunIds: ['2026-08-22__064102__supermarkets-everyday-shopping__research-001'],
  coverage: [
    { authoringArea: 'shopping-reality', purpose: 'Explain Nerja shopping areas without an uncurated store directory.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'car-and-car-free', purpose: 'Separate centre, Torrecilla and other practical shopping contexts.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'arrival-and-opening-logic', purpose: 'Support first-supply and Sunday or holiday planning without freezing hours.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'market-boundary', purpose: 'Keep weekly-market experience content outside the everyday-shopping owner.', factIds: [], status: 'gap' },
    { authoringArea: 'host-guidance', purpose: 'Add real AMARA Playa shopping guidance only from dated first-party evidence.', factIds: [], status: 'gap' },
  ],
});
