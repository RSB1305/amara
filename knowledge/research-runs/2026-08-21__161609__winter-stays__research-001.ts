import { defineKnowledgeResearchRun } from '../schema';

export const winterStaysResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__161609__winter-stays__research-001',
  topic: 'Winter stays',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T16:16:09+02:00',
  updatedAt: '2026-08-21T16:16:09+02:00',
  status: 'awaiting-raw',
  promptPath: 'knowledge/prompts/locations/2026-08-21__161609__winter-stays__research-001.md',
  promptDriveFile: {
    id: '1I1e8f4AFVjsnxAkO0kEkMVgQNqkKJcQ6',
    url: 'https://drive.google.com/file/d/1I1e8f4AFVjsnxAkO0kEkMVgQNqkKJcQ6/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-21__161609__winter-stays__research-001.md',
  },
  driveFolder: {
    id: '1c7Kiz87uFuZM_fFrKiGuRvY5R4cgrm02',
    url: 'https://drive.google.com/drive/folders/1c7Kiz87uFuZM_fFrKiGuRvY5R4cgrm02',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-21__161609__winter-stays__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '19SjH9grPXFQx4CdMfarPCc5Ou5vTJ2SF',
        url: 'https://drive.google.com/drive/folders/19SjH9grPXFQx4CdMfarPCc5Ou5vTJ2SF',
        path: '02_GPT_RAW',
      },
      status: 'awaiting-upload',
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '1sSS3nq21ap5m2O_bvi5P0wMY9CRluEN8',
        url: 'https://drive.google.com/drive/folders/1sSS3nq21ap5m2O_bvi5P0wMY9CRluEN8',
        path: '03_GEMINI_RAW',
      },
      status: 'awaiting-upload',
    },
  ],
});
