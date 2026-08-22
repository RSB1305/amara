import { defineKnowledgeResearchRun } from '../schema';

export const supermarketsEverydayShoppingResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-22__064102__supermarkets-everyday-shopping__research-001',
  topic: 'Supermarkets and everyday shopping',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-22T06:41:02+02:00',
  updatedAt: '2026-08-22T06:41:02+02:00',
  status: 'awaiting-raw',
  promptPath: 'knowledge/prompts/locations/2026-08-22__064102__supermarkets-everyday-shopping__research-001.md',
  promptDriveFile: {
    id: '1hxtr9l-Rm2qYFFqVNWY3piYVOd3cpYd-',
    url: 'https://drive.google.com/file/d/1hxtr9l-Rm2qYFFqVNWY3piYVOd3cpYd-/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-22__064102__supermarkets-everyday-shopping__research-001.md',
  },
  driveFolder: {
    id: '1LXzvwCnCDNsRZg5ncPkahPJERroaqFdD',
    url: 'https://drive.google.com/drive/folders/1LXzvwCnCDNsRZg5ncPkahPJERroaqFdD',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-22__064102__supermarkets-everyday-shopping__research-001',
  },
  inputs: [
    { provider: 'gpt-deep-research', destination: { id: '1m8b_IZs3lChP1fDbgCtSqYwukaqBNR6d', url: 'https://drive.google.com/drive/folders/1m8b_IZs3lChP1fDbgCtSqYwukaqBNR6d', path: '02_GPT_RAW' }, status: 'awaiting-upload' },
    { provider: 'gemini-deep-research', destination: { id: '1iIj0c0-ChKas5ydBSkP_x4bTn8nsk5tW', url: 'https://drive.google.com/drive/folders/1iIj0c0-ChKas5ydBSkP_x4bTn8nsk5tW', path: '03_GEMINI_RAW' }, status: 'awaiting-upload' },
    { provider: 'operator-provided', destination: { id: '12x0JWX0nNhyRdgZrdjVF_4XrIhoZ4jWw', url: 'https://drive.google.com/drive/folders/12x0JWX0nNhyRdgZrdjVF_4XrIhoZ4jWw', path: '05_OPERATOR_NOTES' }, status: 'awaiting-upload' },
  ],
});
