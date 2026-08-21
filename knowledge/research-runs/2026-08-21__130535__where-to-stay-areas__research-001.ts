import { defineKnowledgeResearchRun } from '../schema';

export const whereToStayAreasResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__130535__where-to-stay-areas__research-001',
  topic: 'Where to stay and areas',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T13:05:35+02:00',
  updatedAt: '2026-08-21T13:05:35+02:00',
  status: 'awaiting-raw',
  promptPath: 'knowledge/prompts/locations/2026-08-21__130535__where-to-stay-areas__research-001.md',
  promptDriveFile: {
    id: '13t2NLiEuu_jo5exAfe5t8LIhNzBMvPzJ',
    url: 'https://drive.google.com/file/d/13t2NLiEuu_jo5exAfe5t8LIhNzBMvPzJ/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-21__130535__where-to-stay-areas__research-001.md',
  },
  driveFolder: {
    id: '1x-ri90ku5uZnJxp2uC0fLc7clqRbzLWD',
    url: 'https://drive.google.com/drive/folders/1x-ri90ku5uZnJxp2uC0fLc7clqRbzLWD',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-21__130535__where-to-stay-areas__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '10FvFHYb4FmtvsNrDhgCxtV5nleMZWcAJ',
        url: 'https://drive.google.com/drive/folders/10FvFHYb4FmtvsNrDhgCxtV5nleMZWcAJ',
        path: '02_GPT_RAW',
      },
      status: 'awaiting-upload',
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '12ybHvlWxN-Fxa9jGlVR9AklB_XobSg0k',
        url: 'https://drive.google.com/drive/folders/12ybHvlWxN-Fxa9jGlVR9AklB_XobSg0k',
        path: '03_GEMINI_RAW',
      },
      status: 'awaiting-upload',
    },
  ],
});
