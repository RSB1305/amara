import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaPracticalLocalRulesKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-practical-local-rules', destination: 'frigiliana', topic: 'practical-local-rules',
  createdAt: '2026-08-22T06:41:04+02:00', updatedAt: '2026-08-22T06:41:04+02:00', status: 'awaiting-research',
  driveFolder: { id: '16IeMGcsULsHx_-dy7rxRsUt9eQZAFw1v', url: 'https://drive.google.com/drive/folders/16IeMGcsULsHx_-dy7rxRsUt9eQZAFw1v', path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/frigiliana-practical-local-rules' },
  publicContentPath: 'src/content/dailyLifeGuideContent.ts',
  researchRunIds: ['2026-08-22__064104__practical-local-rules__research-001'],
  coverage: [
    { authoringArea: 'planning-rules', purpose: 'Select only durable rules that materially affect a stay.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'public-space-and-waste', purpose: 'Explain bounded public-space and waste duties without a legal lexicon.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'specialist-owner-bridges', purpose: 'Keep parking, nature and property rules with their canonical owners.', factIds: [], status: 'gap' },
    { authoringArea: 'volatile-measures', purpose: 'Use official live sources for seasonal or temporary measures.', factIds: [], status: 'gap' },
    { authoringArea: 'host-guidance', purpose: 'Add recurring real guest questions only from first-party evidence.', factIds: [], status: 'gap' },
  ],
});
