import { defineKnowledgeResearchRun } from '../schema';

export const tarifaYogaResearch001 = defineKnowledgeResearchRun({
  id: '2026-09-04__133936__tarifa-yoga__research-001',
  topic: 'Yoga in Tarifa',
  subjects: ['tarifa'],
  createdAt: '2026-09-04T13:39:36+02:00',
  updatedAt: '2026-09-04T14:05:00+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/experiences/2026-09-04__133936__tarifa-yoga__research-001.md',
  promptDriveFile: {
    id: '1x_5ZMBAtnfBlGrbqxI4Cwre3OItxoSWK',
    url: 'https://drive.google.com/file/d/1x_5ZMBAtnfBlGrbqxI4Cwre3OItxoSWK/view?usp=drivesdk',
    path: '01_PROMPT/2026-09-04__133936__tarifa-yoga__research-001__brief-reconstructed.md'
  },
  driveFolder: {
    id: '1xQDkyNZEHiucof8L_oyDLhAoIH2X5xeS',
    url: 'https://drive.google.com/drive/folders/1xQDkyNZEHiucof8L_oyDLhAoIH2X5xeS',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/experiences/yoga/2026-09-04__133936__tarifa-yoga__research-001'
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1cfA_rmagU-ROXKMVWpTJYMhyjMkLwVwX',
        url: 'https://drive.google.com/drive/folders/1cfA_rmagU-ROXKMVWpTJYMhyjMkLwVwX',
        path: '02_GPT_RAW'
      },
      status: 'ingested',
      receivedAt: '2026-09-04T13:42:15+02:00',
      artifact: {
        id: '1ZCiUxoptQH1wAJorU4hp59DCFEQxTRTs',
        url: 'https://drive.google.com/file/d/1ZCiUxoptQH1wAJorU4hp59DCFEQxTRTs/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-09-04__114205__gpt__tarifa-yoga__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 48285,
        preservation: 'original-upload',
        originalName: 'deep-research-report (26).md'
      }
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '1NlEZwWPZ_zB_1pzEbKhbkWDRBUrxgI0_',
        url: 'https://drive.google.com/drive/folders/1NlEZwWPZ_zB_1pzEbKhbkWDRBUrxgI0_',
        path: '03_GEMINI_RAW'
      },
      status: 'awaiting-upload'
    },
    {
      provider: 'operator-provided',
      destination: {
        id: '1yu3S0NNcya1fPqiVgPChQph3S8fZZ7WP',
        url: 'https://drive.google.com/drive/folders/1yu3S0NNcya1fPqiVgPChQph3S8fZZ7WP',
        path: '05_OPERATOR_NOTES'
      },
      status: 'awaiting-upload'
    }
  ]
});
