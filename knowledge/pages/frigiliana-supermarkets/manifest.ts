import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaSupermarketsKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-supermarkets', destination: 'frigiliana', topic: 'supermarkets-everyday-shopping',
  createdAt: '2026-08-22T06:41:02+02:00', updatedAt: '2026-08-22T06:41:02+02:00', status: 'awaiting-research',
  driveFolder: { id: '1RaAACIbrpNW2d8mad7xfjxTZ4o1d6yhy', url: 'https://drive.google.com/drive/folders/1RaAACIbrpNW2d8mad7xfjxTZ4o1d6yhy', path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/frigiliana-supermarkets-everyday-shopping' },
  publicContentPath: 'src/content/frigilianaSupermarketsContent.ts',
  researchRunIds: ['2026-08-22__064102__supermarkets-everyday-shopping__research-001'],
  coverage: [
    { authoringArea: 'shopping-reality', purpose: 'Explain the durable everyday-shopping structure without an uncurated directory.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'car-and-car-free', purpose: 'Separate practical shopping choices with and without a car.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'arrival-and-opening-logic', purpose: 'Support first-supply and Sunday or holiday planning without freezing hours.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'market-boundary', purpose: 'Keep weekly-market experience content with its canonical Experience owner.', factIds: [], status: 'gap' },
    { authoringArea: 'host-guidance', purpose: 'Add real AMARA shopping guidance only from dated first-party evidence.', factIds: [], status: 'gap' },
  ],
});
