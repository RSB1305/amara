import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaNerjaEra5LandExtractionResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001',
  topic: 'Comparable Frigiliana and Nerja ERA5-Land climate extraction',
  subjects: ['frigiliana', 'nerja'],
  createdAt: '2026-08-28T11:41:10+02:00',
  updatedAt: '2026-08-28T11:41:10+02:00',
  status: 'awaiting-raw',
  promptPath:
    'knowledge/prompts/locations/2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001.md',
  promptDriveFile: {
    id: '1PMhU3-2RBwejeio-YfzxVI14BfV8ApZu',
    url: 'https://drive.google.com/file/d/1PMhU3-2RBwejeio-YfzxVI14BfV8ApZu/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001__prompt.md',
  },
  driveFolder: {
    id: '11hgGmamxmUtoegCQg4DglxYLJojSAAi8',
    url: 'https://drive.google.com/drive/folders/11hgGmamxmUtoegCQg4DglxYLJojSAAi8',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-28__114110__frigiliana-nerja-era5-land-extraction__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1KzGB_cDZbABBrV_NGw9zHT95wSlyud1Q',
        url: 'https://drive.google.com/drive/folders/1KzGB_cDZbABBrV_NGw9zHT95wSlyud1Q',
        path: '02_GPT_RAW',
      },
      status: 'awaiting-upload',
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '19oVrw0gpdpEcNE20IzTvF6M8GI-BzpJu',
        url: 'https://drive.google.com/drive/folders/19oVrw0gpdpEcNE20IzTvF6M8GI-BzpJu',
        path: '03_GEMINI_RAW',
      },
      status: 'awaiting-upload',
    },
  ],
});
