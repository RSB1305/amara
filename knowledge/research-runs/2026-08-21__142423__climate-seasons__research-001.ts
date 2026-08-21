import { defineKnowledgeResearchRun } from '../schema';

export const climateSeasonsResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__142423__climate-seasons__research-001',
  topic: 'Climate and seasons',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T14:24:23+02:00',
  updatedAt: '2026-08-21T14:35:11+02:00',
  status: 'raw-received',
  promptPath: 'knowledge/prompts/locations/2026-08-21__142423__climate-seasons__research-001.md',
  promptDriveFile: {
    id: '1rnTlrjiiWgNX_6wxcU4NRRh5--nxaM-w',
    url: 'https://drive.google.com/file/d/1rnTlrjiiWgNX_6wxcU4NRRh5--nxaM-w/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-21__142423__climate-seasons__research-001.md',
  },
  driveFolder: {
    id: '1DAKxcM3yToPGYoT7UecAgvbEri0EJEsK',
    url: 'https://drive.google.com/drive/folders/1DAKxcM3yToPGYoT7UecAgvbEri0EJEsK',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-21__142423__climate-seasons__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1_2dVds4NCmJOHc8ciKaX1pfjtef1ssOv',
        url: 'https://drive.google.com/drive/folders/1_2dVds4NCmJOHc8ciKaX1pfjtef1ssOv',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-21T14:33:36+02:00',
      artifact: {
        id: '1Bb4Pdr_6OuIBCRyYGKFCAUhPLLwWwGYh',
        url: 'https://drive.google.com/file/d/1Bb4Pdr_6OuIBCRyYGKFCAUhPLLwWwGYh/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-08-21__143336__gpt__climate-seasons__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 30469,
        preservation: 'original-upload',
        originalName: 'deep-research-report (4).md',
      },
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '13fMWfGa1zmtXxQa0ZxShjZsrRTpCPiGm',
        url: 'https://drive.google.com/drive/folders/13fMWfGa1zmtXxQa0ZxShjZsrRTpCPiGm',
        path: '03_GEMINI_RAW',
      },
      status: 'awaiting-upload',
    },
  ],
});
