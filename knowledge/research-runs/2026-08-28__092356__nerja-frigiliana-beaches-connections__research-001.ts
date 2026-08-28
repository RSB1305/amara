import { defineKnowledgeResearchRun } from '../schema';

export const nerjaFrigilianaBeachesConnectionsResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-28__092356__nerja-frigiliana-beaches-connections__research-001',
  topic: 'Nerja and Frigiliana beaches, day context and onward connections',
  subjects: ['nerja', 'frigiliana', 'amara-playa', 'casa-amara'],
  createdAt: '2026-08-28T09:23:56+02:00',
  updatedAt: '2026-08-28T14:30:00+02:00',
  status: 'normalized',
  promptPath:
    'knowledge/prompts/locations/2026-08-28__092356__nerja-frigiliana-beaches-connections__research-001.md',
  promptDriveFile: {
    id: '1Xp8oQ-NVLjgze8CyoVDzAfEn_Obf61Me',
    url: 'https://drive.google.com/file/d/1Xp8oQ-NVLjgze8CyoVDzAfEn_Obf61Me/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-28__092356__nerja-frigiliana-beaches-connections__research-001.md',
  },
  driveFolder: {
    id: '1FxPa56b3GnZt8XwUUcx5qEnlscUbjvA6',
    url: 'https://drive.google.com/drive/folders/1FxPa56b3GnZt8XwUUcx5qEnlscUbjvA6',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-28__092356__nerja-frigiliana-beaches-connections__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1crqHm6q44M6Mr4aI6TRNknxMJXr1n8g9',
        url: 'https://drive.google.com/drive/folders/1crqHm6q44M6Mr4aI6TRNknxMJXr1n8g9',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-28T14:30:00+02:00',
      artifact: {
        id: '1_GNM5dIvn4IQyHcqLku3GQPZpkUG-0us',
        url: 'https://drive.google.com/file/d/1_GNM5dIvn4IQyHcqLku3GQPZpkUG-0us/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-08-28__092356__nerja-frigiliana-beaches-connections__research-001__gpt-deep-research.md',
        mimeType: 'text/markdown',
        sizeBytes: 76585,
        preservation: 'original-upload',
      },
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '1Qx_d0AVgGyn7Mz5zZ40hiohxlbZQ-tsG',
        url: 'https://drive.google.com/drive/folders/1Qx_d0AVgGyn7Mz5zZ40hiohxlbZQ-tsG',
        path: '03_GEMINI_RAW',
      },
      status: 'awaiting-upload',
    },
  ],
});
