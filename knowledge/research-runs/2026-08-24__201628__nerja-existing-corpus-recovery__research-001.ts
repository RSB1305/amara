import { defineKnowledgeResearchRun } from '../schema';

export const nerjaExistingCorpusRecoveryResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-24__201628__nerja-existing-corpus-recovery__research-001',
  topic: 'Nerja existing corpus recovery',
  subjects: ['nerja'],
  createdAt: '2026-08-24T20:16:28+02:00', updatedAt: '2026-08-24T21:10:00+02:00', status: 'archived',
  promptPath: 'knowledge/prompts/locations/2026-08-24__201628__nerja-existing-corpus-recovery__research-001.md',
  promptDriveFile: { id: '1nOtDOvrGKHBadD7DyRj1R2BLJ4gaPsUn', url: 'https://drive.google.com/file/d/1nOtDOvrGKHBadD7DyRj1R2BLJ4gaPsUn/view?usp=drivesdk', path: '01_PROMPT/2026-08-24__201628__nerja-existing-corpus-recovery__research-001.md' },
  driveFolder: { id: '1u0-AHlMabHlVc5hMBsGeorwvCzGGFWdp', url: 'https://drive.google.com/drive/folders/1u0-AHlMabHlVc5hMBsGeorwvCzGGFWdp', path: 'AMARA – Research Vault/90_ARCHIVE/2026-08-24__201628__nerja-existing-corpus-recovery__research-001' },
  inputs: [{
    provider: 'gpt-deep-research',
    destination: { id: '1IpZ_gI1cd0XBjg-WIABSm5BHpVEnQtqK', url: 'https://drive.google.com/drive/folders/1IpZ_gI1cd0XBjg-WIABSm5BHpVEnQtqK', path: '02_GPT_RAW' },
    status: 'ingested', receivedAt: '2026-08-24T21:10:00+02:00',
    artifact: { id: '1jUSic-fT4XF5C75vabGFeqYlFZP63tcQ', url: 'https://drive.google.com/file/d/1jUSic-fT4XF5C75vabGFeqYlFZP63tcQ/view?usp=drivesdk', path: '02_GPT_RAW/2026-08-24__201628__nerja-existing-corpus-recovery__research-001__gpt-deep-research.md', mimeType: 'text/markdown', sizeBytes: 4843, preservation: 'original-upload' },
  }],
});
