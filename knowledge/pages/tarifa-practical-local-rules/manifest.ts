import { defineKnowledgePageManifest } from '../../schema';

export const tarifaPracticalLocalRulesKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-practical-local-rules', destination: 'tarifa', topic: 'practical-local-rules',
  createdAt: '2026-08-22T06:41:04+02:00', updatedAt: '2026-09-02T10:15:00+02:00', status: 'retired',
  driveFolder: { id: '1ttS4fTPKTlTgeQha5b2eEYWWKhe9WF0T', url: 'https://drive.google.com/drive/folders/1ttS4fTPKTlTgeQha5b2eEYWWKhe9WF0T', path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/tarifa-practical-local-rules' },
  researchRunIds: ['2026-08-22__064104__practical-local-rules__research-001'],
  coverage: [
    { authoringArea: 'planning-rules', purpose: 'Select only durable rules that materially affect a stay.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'public-space-and-waste', purpose: 'Explain bounded public-space and waste duties without a legal lexicon.', factIds: [], status: 'baseline-unmapped' },
    { authoringArea: 'specialist-owner-bridges', purpose: 'Keep parking, beach, nature and property rules with their canonical owners.', factIds: [], status: 'gap' },
    { authoringArea: 'volatile-measures', purpose: 'Use official live sources for seasonal or temporary measures.', factIds: [], status: 'gap' },
    { authoringArea: 'host-guidance', purpose: 'Add recurring real guest questions only from first-party evidence.', factIds: [], status: 'gap' },
  ],
});
