import { defineKnowledgeResearchRun } from '../schema';

export const parkingAccessibilityResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__184630__parking-accessibility__research-001',
  topic: 'Parking & accessibility',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T18:46:30+02:00',
  updatedAt: '2026-08-21T18:46:30+02:00',
  status: 'awaiting-raw',
  promptPath: 'knowledge/prompts/locations/2026-08-21__184630__parking-accessibility__research-001.md',
  promptDriveFile: {
    id: '1E-y11eYh2PPgy4ZyQa4BGe1yEo-34RyM',
    url: 'https://drive.google.com/file/d/1E-y11eYh2PPgy4ZyQa4BGe1yEo-34RyM/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-21__184630__parking-accessibility__research-001.md',
  },
  driveFolder: {
    id: '1ceuiv3A4OVRKNxM8uk8r49AppRaaEBL3',
    url: 'https://drive.google.com/drive/folders/1ceuiv3A4OVRKNxM8uk8r49AppRaaEBL3',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-21__184630__parking-accessibility__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1-mx_wNG9lqvc2v5TUD0B4DyOcsHg1nm7',
        url: 'https://drive.google.com/drive/folders/1-mx_wNG9lqvc2v5TUD0B4DyOcsHg1nm7',
        path: '02_GPT_RAW',
      },
      status: 'awaiting-upload',
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '116di9LosglQqgT5FOu9yRCd1i-B5JuX7',
        url: 'https://drive.google.com/drive/folders/116di9LosglQqgT5FOu9yRCd1i-B5JuX7',
        path: '03_GEMINI_RAW',
      },
      status: 'awaiting-upload',
    },
  ],
});
