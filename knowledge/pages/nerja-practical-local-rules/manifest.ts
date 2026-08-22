import { defineKnowledgePageManifest } from '../../schema';

export const nerjaPracticalLocalRulesKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-practical-local-rules', destination: 'nerja', topic: 'practical-local-rules',
  createdAt: '2026-08-22T06:41:04+02:00', updatedAt: '2026-08-22T06:41:04+02:00', status: 'awaiting-research',
  driveFolder: { id: '1U22asuz_LRoYesQBTNLRtB8EJNu4H9_p', url: 'https://drive.google.com/drive/folders/1U22asuz_LRoYesQBTNLRtB8EJNu4H9_p', path: 'AMARA – Research Vault/10_LOCATIONS/nerja/nerja-practical-local-rules' },
  publicContentPath: 'src/content/nerjaPracticalLocalRulesContent.ts',
  researchRunIds: ['2026-08-22__064104__practical-local-rules__research-001'],
  coverage: [
    { authoringArea: 'planning-rules', purpose: 'Select only durable rules that materially affect a stay.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'public-space-and-waste', purpose: 'Explain bounded public-space and waste duties without a legal lexicon.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'specialist-owner-bridges', purpose: 'Keep parking, beach and property rules with their canonical owners.', factIds: [], status: 'gap' },
    { authoringArea: 'volatile-measures', purpose: 'Use official live sources for seasonal or temporary measures.', factIds: [], status: 'gap' },
    { authoringArea: 'host-guidance', purpose: 'Add recurring real guest questions only from first-party evidence.', factIds: [], status: 'gap' },
  ],
});
