import { defineKnowledgeResearchRun } from '../schema';

export const healthEmergencyResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-22__064103__health-emergency__research-001',
  topic: 'Health and emergency planning',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-22T06:41:03+02:00',
  updatedAt: '2026-09-10T12:20:00+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-08-22__064103__health-emergency__research-001.md',
  promptDriveFile: {
    id: '1BC6wlHB7R2ZSE8b4KzZkVKeRIRiacDBz',
    url: 'https://drive.google.com/file/d/1BC6wlHB7R2ZSE8b4KzZkVKeRIRiacDBz/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-22__064103__health-emergency__research-001.md',
  },
  driveFolder: {
    id: '1sEVnMDg75TqhEgroNPJGUtHTXVbVX2nh',
    url: 'https://drive.google.com/drive/folders/1sEVnMDg75TqhEgroNPJGUtHTXVbVX2nh',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-22__064103__health-emergency__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: { id: '16V1Lr-Pg-vgF2SFgyKVi9P6tpSq4RQoa', url: 'https://drive.google.com/drive/folders/16V1Lr-Pg-vgF2SFgyKVi9P6tpSq4RQoa', path: '02_GPT_RAW' },
      status: 'ingested',
      receivedAt: '2026-08-22T07:28:48+02:00',
      artifact: {
        id: '1es0iE7xGNbfjwVb1ajXHSXVgvt3ZYYsM',
        url: 'https://drive.google.com/file/d/1es0iE7xGNbfjwVb1ajXHSXVgvt3ZYYsM/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-08-22__052848__gpt__health-emergency__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 58687,
        preservation: 'original-upload',
        originalName: 'deep-research-report (9).md',
      },
    },
    {
      provider: 'gpt-deep-research',
      destination: { id: '16V1Lr-Pg-vgF2SFgyKVi9P6tpSq4RQoa', url: 'https://drive.google.com/drive/folders/16V1Lr-Pg-vgF2SFgyKVi9P6tpSq4RQoa', path: '02_GPT_RAW' },
      status: 'ingested',
      receivedAt: '2026-09-10T11:57:59+02:00',
      artifact: {
        id: '1_SMMMuSw8xuNgqJu1hSgW3CbSih5Kzh_',
        url: 'https://drive.google.com/file/d/1_SMMMuSw8xuNgqJu1hSgW3CbSih5Kzh_/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-09-10__095759__gpt__health-emergency__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 25311,
        preservation: 'original-upload',
        originalName: 'deep-research-report (33).md',
      },
    },
    { provider: 'gemini-deep-research', destination: { id: '1MUPxkXyiVF8vBLjJ0EElGfVCfNGzb8IK', url: 'https://drive.google.com/drive/folders/1MUPxkXyiVF8vBLjJ0EElGfVCfNGzb8IK', path: '03_GEMINI_RAW' }, status: 'awaiting-upload' },
    { provider: 'operator-provided', destination: { id: '19yHRlgK0CxxU5Cl0wUPzDLaRhK5FluQr', url: 'https://drive.google.com/drive/folders/19yHRlgK0CxxU5Cl0wUPzDLaRhK5FluQr', path: '05_OPERATOR_NOTES' }, status: 'awaiting-upload' },
  ],
});
