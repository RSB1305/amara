import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaThreeCulturesEvidenceResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-24__121345__frigiliana-three-cultures-evidence__research-001',
  topic: 'Frigiliana three cultures evidence',
  subjects: ['frigiliana'],
  createdAt: '2026-08-24T12:13:45+02:00',
  updatedAt: '2026-08-24T13:00:00+02:00',
  status: 'normalized',
  promptPath:
    'knowledge/prompts/locations/2026-08-24__121345__frigiliana-three-cultures-evidence__research-001.md',
  promptDriveFile: {
    id: '1YTkVA342RbqSjQnVlzn0xHlyikvHZt9Q',
    url: 'https://drive.google.com/file/d/1YTkVA342RbqSjQnVlzn0xHlyikvHZt9Q/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-24__121345__frigiliana-three-cultures-evidence__research-001.md',
  },
  driveFolder: {
    id: '1DmaqZCpm3VnUuVAh1bxeY_PeF3hRSOWM',
    url: 'https://drive.google.com/drive/folders/1DmaqZCpm3VnUuVAh1bxeY_PeF3hRSOWM',
    path:
      'AMARA – Research Vault/90_ARCHIVE/2026-08-24__121345__frigiliana-three-cultures-evidence__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '13MHvPN-0vQYaZhBioJKeeSElyft9icDG',
        url: 'https://drive.google.com/drive/folders/13MHvPN-0vQYaZhBioJKeeSElyft9icDG',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-24T13:00:00+02:00',
      artifact: {
        id: '1rf65JD2J1LyiFu-ealnUjUk2neAe3CD_',
        url: 'https://drive.google.com/file/d/1rf65JD2J1LyiFu-ealnUjUk2neAe3CD_/view?usp=drivesdk',
        path:
          '02_GPT_RAW/2026-08-24__121345__frigiliana-three-cultures-evidence__research-001__gpt-deep-research.md',
        mimeType: 'text/markdown',
        sizeBytes: 13919,
        preservation: 'original-upload',
      },
    },
  ],
});
