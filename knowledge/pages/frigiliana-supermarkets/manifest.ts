import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaSupermarketsKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-supermarkets', destination: 'frigiliana', topic: 'supermarkets-everyday-shopping',
  createdAt: '2026-08-22T06:41:02+02:00', updatedAt: '2026-08-28T14:30:00+02:00', status: 'needs-review',
  driveFolder: { id: '1RaAACIbrpNW2d8mad7xfjxTZ4o1d6yhy', url: 'https://drive.google.com/drive/folders/1RaAACIbrpNW2d8mad7xfjxTZ4o1d6yhy', path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/frigiliana-supermarkets-everyday-shopping' },
  publicContentPath: 'src/content/frigilianaSupermarketsContent.ts',
  researchRunIds: [
    '2026-08-22__064102__supermarkets-everyday-shopping__research-001',
    '2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001',
  ],
  coverage: [
    { authoringArea: 'shopping-reality', purpose: 'Explain the durable everyday-shopping structure without an uncurated directory.', factIds: ['frigiliana.shopping.eroski-city.address', 'frigiliana.shopping.silvia.address-and-range', 'frigiliana.shopping.garcia-berroa.address-and-range', 'frigiliana.shopping.el-lagar.address-and-products'], status: 'partial', notes: 'Addresses and bounded shop roles are available; current operation and stock still require direct or field confirmation.' },
    { authoringArea: 'car-and-car-free', purpose: 'Separate practical shopping choices with and without a car.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'arrival-and-opening-logic', purpose: 'Support first-supply and Sunday or holiday planning without freezing hours.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'market-boundary', purpose: 'Keep weekly-market experience content with its canonical Experience owner.', factIds: ['frigiliana.shopping.mercadillo.thursday-reference'], status: 'partial', notes: 'Only Thursday is partially supported; location, hours and vendor mix remain unresolved and must not be projected as supermarket detail.' },
    { authoringArea: 'host-guidance', purpose: 'Add real AMARA shopping guidance only from dated first-party evidence.', factIds: [], status: 'gap' },
  ],
});
