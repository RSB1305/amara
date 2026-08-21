import { defineKnowledgeResearchRun } from '../schema';

export const parkingAccessibilityResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__184630__parking-accessibility__research-001',
  topic: 'Parking & accessibility',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T18:46:30+02:00',
  updatedAt: '2026-08-21T19:24:58+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-08-21__184630__parking-accessibility__research-001.md',
  promptDriveFile: {
    id: '1E-y11eYh2PPgy4ZyQa4BGe1yEo-34RyM',
    url: 'https://drive.google.com/file/d/1E-y11eYh2PPgy4ZyQa4BGe1yEo-34RyM/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-21__184630__parking-accessibility__research-001.md',
  },
  driveFolder: {
    id: '1ceuiv3A4OVRKNxM8uk8r49AppRaaEBL3',
    url: 'https://drive.google.com/drive/folders/1ceuiv3A4OVRKNxM8uk8r49AppRaaEBL3',
    path: 'AMARA – Research Vault/90_ARCHIVE/2026-08-21__184630__parking-accessibility__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1-mx_wNG9lqvc2v5TUD0B4DyOcsHg1nm7',
        url: 'https://drive.google.com/drive/folders/1-mx_wNG9lqvc2v5TUD0B4DyOcsHg1nm7',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-21T18:58:18+02:00',
      artifact: {
        id: '1JEPztjIiNPUFDNc8syij2HluuCck_qfK',
        url: 'https://drive.google.com/file/d/1JEPztjIiNPUFDNc8syij2HluuCck_qfK/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-08-21__185818__gpt__parking-accessibility__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 72337,
        preservation: 'original-upload',
        originalName: '2026-08-21__185818__gpt__parking-accessibility__raw.md',
      },
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
    {
      provider: 'operator-provided',
      destination: {
        id: '1Vn0O9SbK6nYCVAuC_fpARDTuATFI5ANE',
        url: 'https://drive.google.com/drive/folders/1Vn0O9SbK6nYCVAuC_fpARDTuATFI5ANE',
        path: '05_OPERATOR_NOTES',
      },
      status: 'ingested',
      receivedAt: '2026-08-21T19:01:25+02:00',
      artifact: {
        id: '1uU9HIK-l7ZFAAZ3bYSD4KkJrVdn6Dqnz',
        url: 'https://drive.google.com/file/d/1uU9HIK-l7ZFAAZ3bYSD4KkJrVdn6Dqnz/view?usp=drivesdk',
        path: '05_OPERATOR_NOTES/2026-08-21__190043__operator__parking-accessibility__note.md',
        mimeType: 'text/markdown',
        sizeBytes: 1985,
        preservation: 'original-upload',
        originalName: '2026-08-21__190043__operator__parking-accessibility__note.md',
      },
    },
  ],
});
