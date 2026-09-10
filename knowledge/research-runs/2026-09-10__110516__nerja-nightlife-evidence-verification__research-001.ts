import { defineKnowledgeResearchRun } from '../schema';

export const nerjaNightlifeResearch001 = defineKnowledgeResearchRun({
  id: '2026-09-10__110516__nerja-nightlife-evidence-verification__research-001',
  topic: 'Nerja nightlife (evidence verification)',
  subjects: ['nerja'],
  createdAt: '2026-09-10T11:05:16+02:00',
  updatedAt: '2026-09-10T11:45:00+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-09-10__110516__nerja-nightlife-evidence-verification__research-001.md',
  promptDriveFile: {
    id: '1MmS9MtToRzd-Ot6AfgIAIyRlcUYp31fa',
    url: 'https://drive.google.com/file/d/1MmS9MtToRzd-Ot6AfgIAIyRlcUYp31fa/view?usp=drivesdk',
    path: '10_LOCATIONS/nerja/experiences/nightlife/2026-09-10__110516__nerja-nightlife-evidence-verification__research-001__prompt.md',
  },
  driveFolder: {
    id: '1x4khVuX53R-t2nQx8rK7EH9zVCCM-qFL',
    url: 'https://drive.google.com/drive/folders/1x4khVuX53R-t2nQx8rK7EH9zVCCM-qFL',
    path: 'AMARA – Research Vault/10_LOCATIONS/nerja/experiences/nightlife',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1x4khVuX53R-t2nQx8rK7EH9zVCCM-qFL',
        url: 'https://drive.google.com/drive/folders/1x4khVuX53R-t2nQx8rK7EH9zVCCM-qFL',
        path: '10_LOCATIONS/nerja/experiences/nightlife',
      },
      status: 'ingested',
      receivedAt: '2026-09-10T11:18:26+02:00',
      artifact: {
        id: '1d1_1FdK4A431fjsBGEtpP5Gg14VxuyQu',
        url: 'https://drive.google.com/file/d/1d1_1FdK4A431fjsBGEtpP5Gg14VxuyQu/view?usp=drivesdk',
        path: '10_LOCATIONS/nerja/experiences/nightlife/2026-09-10__091826__gpt__nerja-nightlife-evidence-verification__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 7012,
        preservation: 'original-upload',
        originalName: 'deep-research-report (31).md',
      },
    },
  ],
});
