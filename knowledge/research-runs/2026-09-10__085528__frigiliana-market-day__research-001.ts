import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaMarketResearch001 = defineKnowledgeResearchRun({
  id: '2026-09-10__085528__frigiliana-market-day__research-001',
  topic: 'Frigiliana market day',
  subjects: ['frigiliana'],
  createdAt: '2026-09-10T08:55:28+02:00',
  updatedAt: '2026-09-10T09:45:00+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-09-10__085528__frigiliana-market-day__research-001.md',
  promptDriveFile: {
    id: '1AhyW5iWMv_62k1MhP3vAYHemRZFepfue',
    url: 'https://drive.google.com/file/d/1AhyW5iWMv_62k1MhP3vAYHemRZFepfue/view?usp=drivesdk',
    path: '10_LOCATIONS/frigiliana/experiences/market/2026-09-10__085528__frigiliana-market-day__research-001__prompt.md',
  },
  driveFolder: {
    id: '1_YvFSE2ciM3Vi0KZPy_RLLSdwx3sM5lm',
    url: 'https://drive.google.com/drive/folders/1_YvFSE2ciM3Vi0KZPy_RLLSdwx3sM5lm',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/experiences/market',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1_YvFSE2ciM3Vi0KZPy_RLLSdwx3sM5lm',
        url: 'https://drive.google.com/drive/folders/1_YvFSE2ciM3Vi0KZPy_RLLSdwx3sM5lm',
        path: '10_LOCATIONS/frigiliana/experiences/market',
      },
      status: 'ingested',
      receivedAt: '2026-09-10T09:10:01+02:00',
      artifact: {
        id: '1v7Sax8D7sr-zxwObCwj1mUFJKUR0Vh1lTyUcFRavDOs',
        url: 'https://docs.google.com/document/d/1v7Sax8D7sr-zxwObCwj1mUFJKUR0Vh1lTyUcFRavDOs/edit?usp=drivesdk',
        path: '10_LOCATIONS/frigiliana/experiences/market/2026-09-10__071001__gpt__frigiliana-market-day__raw',
        mimeType: 'application/vnd.google-apps.document',
        sizeBytes: 19469,
        preservation: 'rendered-text-export',
      },
    },
  ],
});
