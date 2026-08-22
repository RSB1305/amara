import { defineKnowledgeResearchRun } from '../schema';

export const practicalLocalRulesResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-22__064104__practical-local-rules__research-001',
  topic: 'Practical and local rules',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-22T06:41:04+02:00',
  updatedAt: '2026-08-22T06:41:04+02:00',
  status: 'awaiting-raw',
  promptPath: 'knowledge/prompts/locations/2026-08-22__064104__practical-local-rules__research-001.md',
  promptDriveFile: {
    id: '1seAReSx903I0rpSdqV9K7a7TJAmdJSyo',
    url: 'https://drive.google.com/file/d/1seAReSx903I0rpSdqV9K7a7TJAmdJSyo/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-22__064104__practical-local-rules__research-001.md',
  },
  driveFolder: {
    id: '1n65iJYtUImeGYkLCgr2lubwAToWpo4Hj',
    url: 'https://drive.google.com/drive/folders/1n65iJYtUImeGYkLCgr2lubwAToWpo4Hj',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-22__064104__practical-local-rules__research-001',
  },
  inputs: [
    { provider: 'gpt-deep-research', destination: { id: '1UQeBLiCdzVISLNtC5mWb9ZB7hH47Mx-s', url: 'https://drive.google.com/drive/folders/1UQeBLiCdzVISLNtC5mWb9ZB7hH47Mx-s', path: '02_GPT_RAW' }, status: 'awaiting-upload' },
    { provider: 'gemini-deep-research', destination: { id: '1Alfvq5CDH4LvN4XV-CNncz57Ifu9fOdT', url: 'https://drive.google.com/drive/folders/1Alfvq5CDH4LvN4XV-CNncz57Ifu9fOdT', path: '03_GEMINI_RAW' }, status: 'awaiting-upload' },
    { provider: 'operator-provided', destination: { id: '1yUsdiQ4BvcYWNT3af9i1oRugkx0BcgWk', url: 'https://drive.google.com/drive/folders/1yUsdiQ4BvcYWNT3af9i1oRugkx0BcgWk', path: '05_OPERATOR_NOTES' }, status: 'awaiting-upload' },
  ],
});
