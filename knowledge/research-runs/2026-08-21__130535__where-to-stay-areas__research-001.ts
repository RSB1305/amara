import { defineKnowledgeResearchRun } from '../schema';

export const whereToStayAreasResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__130535__where-to-stay-areas__research-001',
  topic: 'Where to stay and areas',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T13:05:35+02:00',
  updatedAt: '2026-08-21T13:39:46+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-08-21__130535__where-to-stay-areas__research-001.md',
  promptDriveFile: {
    id: '13t2NLiEuu_jo5exAfe5t8LIhNzBMvPzJ',
    url: 'https://drive.google.com/file/d/13t2NLiEuu_jo5exAfe5t8LIhNzBMvPzJ/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-21__130535__where-to-stay-areas__research-001.md',
  },
  driveFolder: {
    id: '1x-ri90ku5uZnJxp2uC0fLc7clqRbzLWD',
    url: 'https://drive.google.com/drive/folders/1x-ri90ku5uZnJxp2uC0fLc7clqRbzLWD',
    path: 'AMARA – Research Vault/90_ARCHIVE/2026-08-21__130535__where-to-stay-areas__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '10FvFHYb4FmtvsNrDhgCxtV5nleMZWcAJ',
        url: 'https://drive.google.com/drive/folders/10FvFHYb4FmtvsNrDhgCxtV5nleMZWcAJ',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-21T13:35:59+02:00',
      artifact: {
        id: '1MAiNFiGJYmzjKM5Tu-thBfqIv3sHo-3S',
        url: 'https://drive.google.com/file/d/1MAiNFiGJYmzjKM5Tu-thBfqIv3sHo-3S/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-08-21__133559__gpt__where-to-stay-areas__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 63026,
        preservation: 'original-upload',
        originalName: 'deep-research-report (3).md',
      },
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '12ybHvlWxN-Fxa9jGlVR9AklB_XobSg0k',
        url: 'https://drive.google.com/drive/folders/12ybHvlWxN-Fxa9jGlVR9AklB_XobSg0k',
        path: '03_GEMINI_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-21T13:34:30+02:00',
      sourceUrl: 'https://docs.google.com/document/d/1P-YLgclja9Py3-6mLXAAILjrZEqkOOjH2BdTT16LyJ0',
      artifact: {
        id: '1ihdXyFkUbFfV9M8gnQCwv4V6UlA460Rx',
        url: 'https://drive.google.com/file/d/1ihdXyFkUbFfV9M8gnQCwv4V6UlA460Rx/view?usp=drivesdk',
        path: '03_GEMINI_RAW/2026-08-21__133430__gemini__where-to-stay-areas__raw.txt',
        mimeType: 'text/plain',
        sizeBytes: 42508,
        preservation: 'rendered-text-export',
        originalName: 'Andalusien Unterkunftslagen Faktenprüfung Recherche',
      },
    },
  ],
});
