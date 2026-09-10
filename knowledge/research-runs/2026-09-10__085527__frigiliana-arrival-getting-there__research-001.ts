import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaArrivalResearch001 = defineKnowledgeResearchRun({
  id: '2026-09-10__085527__frigiliana-arrival-getting-there__research-001',
  topic: 'Frigiliana arrival & getting there',
  subjects: ['frigiliana'],
  createdAt: '2026-09-10T08:55:27+02:00',
  updatedAt: '2026-09-10T09:30:00+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-09-10__085527__frigiliana-arrival-getting-there__research-001.md',
  promptDriveFile: {
    id: '1jH4dNlLXQBuoNk_kmKs4bMWG3iuEmCP3',
    url: 'https://drive.google.com/file/d/1jH4dNlLXQBuoNk_kmKs4bMWG3iuEmCP3/view?usp=drivesdk',
    path: '10_LOCATIONS/frigiliana/arrival/2026-09-10__085527__frigiliana-arrival-getting-there__research-001__prompt.md',
  },
  driveFolder: {
    id: '1M8SPNUv336F3HDTEtdoSXR3BHqno8pPV',
    url: 'https://drive.google.com/drive/folders/1M8SPNUv336F3HDTEtdoSXR3BHqno8pPV',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/arrival',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1M8SPNUv336F3HDTEtdoSXR3BHqno8pPV',
        url: 'https://drive.google.com/drive/folders/1M8SPNUv336F3HDTEtdoSXR3BHqno8pPV',
        path: '10_LOCATIONS/frigiliana/arrival',
      },
      status: 'ingested',
      receivedAt: '2026-09-10T09:14:32+02:00',
      artifact: {
        id: '11y0tm5XuC-xNJr1_exoSNfy_OGFj4S9qiQVdSSYHZmk',
        url: 'https://docs.google.com/document/d/11y0tm5XuC-xNJr1_exoSNfy_OGFj4S9qiQVdSSYHZmk/edit?usp=drivesdk',
        path: '10_LOCATIONS/frigiliana/arrival/2026-09-10__071432__gpt__frigiliana-arrival-getting-there__raw',
        mimeType: 'application/vnd.google-apps.document',
        sizeBytes: 26801,
        preservation: 'rendered-text-export',
        originalName: 'Ja (first-line auto-title; renamed on ingest)',
      },
    },
  ],
});
