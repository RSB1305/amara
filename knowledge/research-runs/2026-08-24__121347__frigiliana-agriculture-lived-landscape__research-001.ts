import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaAgricultureLivedLandscapeResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-24__121347__frigiliana-agriculture-lived-landscape__research-001',
  topic: 'Frigiliana agriculture as lived landscape',
  subjects: ['frigiliana'],
  createdAt: '2026-08-24T12:13:47+02:00',
  updatedAt: '2026-08-24T13:00:00+02:00',
  status: 'normalized',
  promptPath:
    'knowledge/prompts/locations/2026-08-24__121347__frigiliana-agriculture-lived-landscape__research-001.md',
  promptDriveFile: {
    id: '1w4FesynrYq2X26qv1BSCh7hAm1HoMCzh',
    url: 'https://drive.google.com/file/d/1w4FesynrYq2X26qv1BSCh7hAm1HoMCzh/view?usp=drivesdk',
    path:
      '01_PROMPT/2026-08-24__121347__frigiliana-agriculture-lived-landscape__research-001.md',
  },
  driveFolder: {
    id: '1hyrOhpMV2s2UUrLxqy1HtCf8Cqxclh4j',
    url: 'https://drive.google.com/drive/folders/1hyrOhpMV2s2UUrLxqy1HtCf8Cqxclh4j',
    path:
      'AMARA – Research Vault/90_ARCHIVE/2026-08-24__121347__frigiliana-agriculture-lived-landscape__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '19143lc0vD66VDyrCjSFlg2y7cjulBVRK',
        url: 'https://drive.google.com/drive/folders/19143lc0vD66VDyrCjSFlg2y7cjulBVRK',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-24T13:00:00+02:00',
      artifact: {
        id: '1QckgsMzUYs9Y2N-6UPOmXeIGmGHPdU_k',
        url: 'https://drive.google.com/file/d/1QckgsMzUYs9Y2N-6UPOmXeIGmGHPdU_k/view?usp=drivesdk',
        path:
          '02_GPT_RAW/2026-08-24__121347__frigiliana-agriculture-lived-landscape__research-001__gpt-deep-research.md',
        mimeType: 'text/markdown',
        sizeBytes: 15197,
        preservation: 'original-upload',
      },
    },
    {
      provider: 'operator-provided',
      destination: {
        id: '1BG7wJlo3jJvGaomw1sYcIMynBjRIa_af',
        url: 'https://drive.google.com/drive/folders/1BG7wJlo3jJvGaomw1sYcIMynBjRIa_af',
        path: '05_OPERATOR_NOTES',
      },
      status: 'ingested',
      receivedAt: '2026-08-24T12:20:00+02:00',
      artifact: {
        id: '1-wtegu-QzhuR-jWO_Lk3sGYNgbuVTeMk',
        url: 'https://drive.google.com/file/d/1-wtegu-QzhuR-jWO_Lk3sGYNgbuVTeMk/view?usp=drivesdk',
        path: '05_OPERATOR_NOTES/2026-08-24__robert-frigiliana-observations.md',
        mimeType: 'text/markdown',
        sizeBytes: 1199,
        preservation: 'original-upload',
      },
    },
  ],
});
