import { defineKnowledgeResearchRun } from '../schema';

export const tarifaArrivalResearch001 = defineKnowledgeResearchRun({
  id: '2026-09-10__110515__tarifa-arrival-getting-there__research-001',
  topic: 'Tarifa arrival & getting there',
  subjects: ['tarifa'],
  createdAt: '2026-09-10T11:05:15+02:00',
  updatedAt: '2026-09-10T11:30:00+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-09-10__110515__tarifa-arrival-getting-there__research-001.md',
  promptDriveFile: {
    id: '1sKXDuqDL-YgRW5paEwDEMVBZ81Lg_ZB8',
    url: 'https://drive.google.com/file/d/1sKXDuqDL-YgRW5paEwDEMVBZ81Lg_ZB8/view?usp=drivesdk',
    path: '10_LOCATIONS/tarifa/arrival/2026-09-10__110515__tarifa-arrival-getting-there__research-001__prompt.md',
  },
  driveFolder: {
    id: '1H_E2FwF1sN8tgPXI7V6ItWzBQoPmUVTP',
    url: 'https://drive.google.com/drive/folders/1H_E2FwF1sN8tgPXI7V6ItWzBQoPmUVTP',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/arrival',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1H_E2FwF1sN8tgPXI7V6ItWzBQoPmUVTP',
        url: 'https://drive.google.com/drive/folders/1H_E2FwF1sN8tgPXI7V6ItWzBQoPmUVTP',
        path: '10_LOCATIONS/tarifa/arrival',
      },
      status: 'ingested',
      receivedAt: '2026-09-10T11:18:56+02:00',
      artifact: {
        id: '1H4IuWXqeXJFWYK4PV93HQaJD8H6M6iKP',
        url: 'https://drive.google.com/file/d/1H4IuWXqeXJFWYK4PV93HQaJD8H6M6iKP/view?usp=drivesdk',
        path: '10_LOCATIONS/tarifa/arrival/2026-09-10__091856__gpt__tarifa-arrival-getting-there__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 12508,
        preservation: 'original-upload',
        originalName: 'deep-research-report (32).md',
      },
    },
  ],
});
