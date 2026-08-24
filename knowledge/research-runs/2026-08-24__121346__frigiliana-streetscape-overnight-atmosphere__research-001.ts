import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaStreetscapeOvernightAtmosphereResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-24__121346__frigiliana-streetscape-overnight-atmosphere__research-001',
  topic: 'Frigiliana streetscape and overnight atmosphere',
  subjects: ['frigiliana'],
  createdAt: '2026-08-24T12:13:46+02:00',
  updatedAt: '2026-08-24T13:00:00+02:00',
  status: 'normalized',
  promptPath:
    'knowledge/prompts/locations/2026-08-24__121346__frigiliana-streetscape-overnight-atmosphere__research-001.md',
  promptDriveFile: {
    id: '1Y7pEa-6Qvg1yEc-K8HfX1Dxpwc0M9RT9',
    url: 'https://drive.google.com/file/d/1Y7pEa-6Qvg1yEc-K8HfX1Dxpwc0M9RT9/view?usp=drivesdk',
    path:
      '01_PROMPT/2026-08-24__121346__frigiliana-streetscape-overnight-atmosphere__research-001.md',
  },
  driveFolder: {
    id: '1QmNZHYefZNA0Sx6vTvGC00On5UP34HP_',
    url: 'https://drive.google.com/drive/folders/1QmNZHYefZNA0Sx6vTvGC00On5UP34HP_',
    path:
      'AMARA – Research Vault/90_ARCHIVE/2026-08-24__121346__frigiliana-streetscape-overnight-atmosphere__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1l5GwJTkJAmXYScf4WBCZZV9k_kDpeXHq',
        url: 'https://drive.google.com/drive/folders/1l5GwJTkJAmXYScf4WBCZZV9k_kDpeXHq',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-24T13:00:00+02:00',
      artifact: {
        id: '1yJMaxDb9Ff8lRBz4Ck2Y8QNjTC0GfqDV',
        url: 'https://drive.google.com/file/d/1yJMaxDb9Ff8lRBz4Ck2Y8QNjTC0GfqDV/view?usp=drivesdk',
        path:
          '02_GPT_RAW/2026-08-24__121346__frigiliana-streetscape-overnight-atmosphere__research-001__gpt-deep-research.md',
        mimeType: 'text/markdown',
        sizeBytes: 14238,
        preservation: 'original-upload',
      },
    },
    {
      provider: 'operator-provided',
      destination: {
        id: '1pO6qrf71-_NZo22QGhEBQb10eKy_AHCy',
        url: 'https://drive.google.com/drive/folders/1pO6qrf71-_NZo22QGhEBQb10eKy_AHCy',
        path: '05_OPERATOR_NOTES',
      },
      status: 'ingested',
      receivedAt: '2026-08-24T12:20:00+02:00',
      artifact: {
        id: '1_MXrn47WopubrtUhnJJMn-NTPLlQgKej',
        url: 'https://drive.google.com/file/d/1_MXrn47WopubrtUhnJJMn-NTPLlQgKej/view?usp=drivesdk',
        path: '05_OPERATOR_NOTES/2026-08-24__robert-frigiliana-observations.md',
        mimeType: 'text/markdown',
        sizeBytes: 1199,
        preservation: 'original-upload',
      },
    },
  ],
});
