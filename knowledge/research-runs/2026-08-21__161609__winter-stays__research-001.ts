import { defineKnowledgeResearchRun } from '../schema';

export const winterStaysResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__161609__winter-stays__research-001',
  topic: 'Winter stays',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T16:16:09+02:00',
  updatedAt: '2026-08-21T17:19:24+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-08-21__161609__winter-stays__research-001.md',
  promptDriveFile: {
    id: '1I1e8f4AFVjsnxAkO0kEkMVgQNqkKJcQ6',
    url: 'https://drive.google.com/file/d/1I1e8f4AFVjsnxAkO0kEkMVgQNqkKJcQ6/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-21__161609__winter-stays__research-001.md',
  },
  driveFolder: {
    id: '1c7Kiz87uFuZM_fFrKiGuRvY5R4cgrm02',
    url: 'https://drive.google.com/drive/folders/1c7Kiz87uFuZM_fFrKiGuRvY5R4cgrm02',
    path: 'AMARA – Research Vault/90_ARCHIVE/2026-08-21__161609__winter-stays__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '19SjH9grPXFQx4CdMfarPCc5Ou5vTJ2SF',
        url: 'https://drive.google.com/drive/folders/19SjH9grPXFQx4CdMfarPCc5Ou5vTJ2SF',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-21T17:09:16+02:00',
      artifact: {
        id: '1WjKtOgNX6nd9wDTE3TuMHMxMoX2khDhA',
        url: 'https://drive.google.com/file/d/1WjKtOgNX6nd9wDTE3TuMHMxMoX2khDhA/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-08-21__170916__gpt__winter-stays__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 40687,
        preservation: 'original-upload',
        originalName: 'deep-research-report (6).md',
      },
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '1sSS3nq21ap5m2O_bvi5P0wMY9CRluEN8',
        url: 'https://drive.google.com/drive/folders/1sSS3nq21ap5m2O_bvi5P0wMY9CRluEN8',
        path: '03_GEMINI_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-21T17:11:54+02:00',
      sourceUrl: 'https://docs.google.com/document/d/1pNzFYijqEy3cVWNdMWTWJxrxW-IysZSwyvNy-meVTJY/edit',
      artifact: {
        id: '1HkVV37jcXhHQJFR7uYazytJ56Pbdei5s',
        url: 'https://drive.google.com/file/d/1HkVV37jcXhHQJFR7uYazytJ56Pbdei5s/view?usp=drivesdk',
        path: '03_GEMINI_RAW/2026-08-21__171028__gemini__winter-stays__raw.txt',
        mimeType: 'text/plain',
        sizeBytes: 17755,
        preservation: 'rendered-text-export',
        originalName: 'Version 2',
      },
    },
  ],
});
