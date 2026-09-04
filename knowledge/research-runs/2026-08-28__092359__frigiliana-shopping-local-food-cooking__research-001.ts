import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaShoppingLocalFoodCookingResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001',
  topic: 'Frigiliana shopping, local food and cooking at AMARA',
  subjects: ['frigiliana', 'nerja', 'casa-amara'],
  createdAt: '2026-08-28T09:23:59+02:00',
  updatedAt: '2026-08-28T14:30:00+02:00',
  status: 'normalized',
  promptPath:
    'knowledge/prompts/locations/2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001.md',
  promptDriveFile: {
    id: '1Jaq3RC4_tsAwqZSIj9cOcJrKhc-h83-V',
    url: 'https://drive.google.com/file/d/1Jaq3RC4_tsAwqZSIj9cOcJrKhc-h83-V/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001.md',
  },
  driveFolder: {
    id: '1sgmfPBSOAkhlMnFSJNh8EJLB-edglXek',
    url: 'https://drive.google.com/drive/folders/1sgmfPBSOAkhlMnFSJNh8EJLB-edglXek',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/supermarkets/2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1VOxVVIZ-wPJObZVIB-MixLgBV4vyaVlU',
        url: 'https://drive.google.com/drive/folders/1VOxVVIZ-wPJObZVIB-MixLgBV4vyaVlU',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-28T14:30:00+02:00',
      artifact: {
        id: '140pI7cmts11L0lEfywGmYVJnJZsxf7BZ',
        url: 'https://drive.google.com/file/d/140pI7cmts11L0lEfywGmYVJnJZsxf7BZ/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001__gpt-deep-research.md',
        mimeType: 'text/markdown',
        sizeBytes: 50465,
        preservation: 'original-upload',
      },
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '1ytN4386RISHVRVlQbehU5iGaDG-Qdjs7',
        url: 'https://drive.google.com/drive/folders/1ytN4386RISHVRVlQbehU5iGaDG-Qdjs7',
        path: '03_GEMINI_RAW',
      },
      status: 'awaiting-upload',
    },
  ],
});
