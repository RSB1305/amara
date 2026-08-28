import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaClimateSeasonsDecisionsResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-28__092355__frigiliana-climate-seasons-decisions__research-001',
  topic: 'Frigiliana climate, seasons and guest decisions',
  subjects: ['frigiliana', 'nerja', 'casa-amara'],
  createdAt: '2026-08-28T09:23:55+02:00', updatedAt: '2026-08-28T16:00:00+02:00', status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-08-28__092355__frigiliana-climate-seasons-decisions__research-001.md',
  promptDriveFile: { id: '1t-Tc4j49HsbRyXpL1WGHa0_ntrOLOQmS', url: 'https://drive.google.com/file/d/1t-Tc4j49HsbRyXpL1WGHa0_ntrOLOQmS/view?usp=drivesdk', path: '01_PROMPT/2026-08-28__092355__frigiliana-climate-seasons-decisions__research-001__prompt.md' },
  driveFolder: { id: '1f78xdTXk9IB5PmHxv24bN7C8wPdVb4h0', url: 'https://drive.google.com/drive/folders/1f78xdTXk9IB5PmHxv24bN7C8wPdVb4h0', path: 'AMARA – Research Vault/00_INBOX/2026-08-28__092355__frigiliana-climate-seasons-decisions__research-001' },
  inputs: [
    { provider: 'gpt-deep-research', destination: { id: '1UyvSSTRrERL2-yLj_1zcGKKMHxyUmS35', url: 'https://drive.google.com/drive/folders/1UyvSSTRrERL2-yLj_1zcGKKMHxyUmS35', path: '02_GPT_RAW' }, status: 'ingested', receivedAt: '2026-08-28T16:00:00+02:00', artifact: { id: '1HtuMMmB-Hm73eEg_SDMZEZ1-pTl10ahF', url: 'https://drive.google.com/file/d/1HtuMMmB-Hm73eEg_SDMZEZ1-pTl10ahF/view?usp=drivesdk', path: '02_GPT_RAW/2026-08-28__092355__frigiliana-climate-seasons-decisions__research-001__gpt-deep-research.md', mimeType: 'text/markdown', sizeBytes: 49185, preservation: 'original-upload' } },
    { provider: 'gemini-deep-research', destination: { id: '11KELHb4HQ3K9-mdgp5cKQ05WTcTMzXQj', url: 'https://drive.google.com/drive/folders/11KELHb4HQ3K9-mdgp5cKQ05WTcTMzXQj', path: '03_GEMINI_RAW' }, status: 'awaiting-upload' },
    { provider: 'operator-provided', destination: { id: '17FZ7igSHxGKUxdGwb9h4j0gYlt18wmsc', url: 'https://drive.google.com/drive/folders/17FZ7igSHxGKUxdGwb9h4j0gYlt18wmsc', path: '05_OPERATOR_NOTES' }, status: 'awaiting-upload' },
  ],
});
