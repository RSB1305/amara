import { defineKnowledgeResearchRun } from '../schema';

export const tarifaKitesurfBeginnerResearch001 = defineKnowledgeResearchRun({
  id: '2026-09-04__133936__tarifa-kitesurf-beginner-guide__research-001',
  topic: 'Kitesurfing beginner guide (Tarifa)',
  subjects: ['tarifa'],
  createdAt: '2026-09-04T13:39:36+02:00',
  updatedAt: '2026-09-04T14:30:00+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/experiences/2026-09-04__133936__tarifa-kitesurf-beginner-guide__research-001.md',
  promptDriveFile: {
    id: '15pMrSiZQvNP-nx9AS-bZrUPmr9p8ezaL',
    url: 'https://drive.google.com/file/d/15pMrSiZQvNP-nx9AS-bZrUPmr9p8ezaL/view?usp=drivesdk',
    path: '01_PROMPT/2026-09-04__133936__tarifa-kitesurf-beginner-guide__research-001__brief-reconstructed.md'
  },
  driveFolder: {
    id: '1Hy0VLLhth0KWj9jlV2oni_dAZm-O71od',
    url: 'https://drive.google.com/drive/folders/1Hy0VLLhth0KWj9jlV2oni_dAZm-O71od',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/experiences/kitesurfing/beginner-guide/2026-09-04__133936__tarifa-kitesurf-beginner-guide__research-001'
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1Y8OWJbf8SxBRWbZSqCuaY0NMcrUFhBl_',
        url: 'https://drive.google.com/drive/folders/1Y8OWJbf8SxBRWbZSqCuaY0NMcrUFhBl_',
        path: '02_GPT_RAW'
      },
      status: 'ingested',
      receivedAt: '2026-09-04T13:42:15+02:00',
      artifact: {
        id: '1pw1quKOHV0VhMwGZflL3B7oZZQZR46s6',
        url: 'https://drive.google.com/file/d/1pw1quKOHV0VhMwGZflL3B7oZZQZR46s6/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-09-04__114215__gpt__tarifa-kitesurf-beginner-guide__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 56860,
        preservation: 'original-upload',
        originalName: 'deep-research-report (27).md'
      }
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '1u0R_2K4T6PmlQVFJcTvwtFHdkh4hXaWV',
        url: 'https://drive.google.com/drive/folders/1u0R_2K4T6PmlQVFJcTvwtFHdkh4hXaWV',
        path: '03_GEMINI_RAW'
      },
      status: 'awaiting-upload'
    },
    {
      provider: 'operator-provided',
      destination: {
        id: '1Dum2HBvnrd7L7v6KTMC6oQRuEayrhe2o',
        url: 'https://drive.google.com/drive/folders/1Dum2HBvnrd7L7v6KTMC6oQRuEayrhe2o',
        path: '05_OPERATOR_NOTES'
      },
      status: 'awaiting-upload'
    }
  ]
});
