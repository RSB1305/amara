import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaSemanticCorpusRecoveryResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-24__121344__frigiliana-semantic-corpus-recovery__research-001',
  topic: 'Frigiliana semantic corpus recovery',
  subjects: ['frigiliana'],
  createdAt: '2026-08-24T12:13:44+02:00',
  updatedAt: '2026-08-24T13:00:00+02:00',
  status: 'normalized',
  promptPath:
    'knowledge/prompts/locations/2026-08-24__121344__frigiliana-semantic-corpus-recovery__research-001.md',
  promptDriveFile: {
    id: '1qCNaSmlDidEX2-4kiB3t4mE-ozTWH1iz',
    url: 'https://drive.google.com/file/d/1qCNaSmlDidEX2-4kiB3t4mE-ozTWH1iz/view?usp=drivesdk',
    path: '01_PROMPT/2026-08-24__121344__frigiliana-semantic-corpus-recovery__research-001.md',
  },
  driveFolder: {
    id: '11ySQ05sa9Vjb8T6vzzef6os87OExdGuO',
    url: 'https://drive.google.com/drive/folders/11ySQ05sa9Vjb8T6vzzef6os87OExdGuO',
    path:
      'AMARA – Research Vault/90_ARCHIVE/2026-08-24__121344__frigiliana-semantic-corpus-recovery__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1dyqZrRzJJ7b8297E1cCwih6djui_Rbu3',
        url: 'https://drive.google.com/drive/folders/1dyqZrRzJJ7b8297E1cCwih6djui_Rbu3',
        path: '02_GPT_RAW',
      },
      status: 'ingested',
      receivedAt: '2026-08-24T13:00:00+02:00',
      artifact: {
        id: '1BUo0NV3Ur3CIcc3jxRNf3IFQGjjD31g5',
        url: 'https://drive.google.com/file/d/1BUo0NV3Ur3CIcc3jxRNf3IFQGjjD31g5/view?usp=drivesdk',
        path:
          '02_GPT_RAW/2026-08-24__121344__frigiliana-semantic-corpus-recovery__research-001__gpt-deep-research.md',
        mimeType: 'text/markdown',
        sizeBytes: 18696,
        preservation: 'original-upload',
      },
    },
    {
      provider: 'operator-provided',
      destination: {
        id: '1_VsBf1f8jsgT5KeuCdovxJpuXZU-XTPZ',
        url: 'https://drive.google.com/drive/folders/1_VsBf1f8jsgT5KeuCdovxJpuXZU-XTPZ',
        path: '05_OPERATOR_NOTES',
      },
      status: 'ingested',
      receivedAt: '2026-08-24T12:20:00+02:00',
      artifact: {
        id: '1Gv6XHyo6g5tkWlFe9jXhfdn5_mwR_Avk',
        url: 'https://drive.google.com/file/d/1Gv6XHyo6g5tkWlFe9jXhfdn5_mwR_Avk/view?usp=drivesdk',
        path: '05_OPERATOR_NOTES/2026-08-24__robert-frigiliana-observations.md',
        mimeType: 'text/markdown',
        sizeBytes: 1199,
        preservation: 'original-upload',
      },
    },
  ],
});
