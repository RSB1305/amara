import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaHealthResearch001 = defineKnowledgeResearchRun({
  id: '2026-09-10__085530__frigiliana-health-consultorio-emergency__research-001',
  topic: 'Frigiliana health & emergency pathway',
  subjects: ['frigiliana'],
  createdAt: '2026-09-10T08:55:30+02:00',
  updatedAt: '2026-09-10T10:05:00+02:00',
  status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-09-10__085530__frigiliana-health-consultorio-emergency__research-001.md',
  promptDriveFile: {
    id: '1UYSk1ztqquxTk2bksNXONCSNzBYfP57A',
    url: 'https://drive.google.com/file/d/1UYSk1ztqquxTk2bksNXONCSNzBYfP57A/view?usp=drivesdk',
    path: '10_LOCATIONS/frigiliana/health/2026-09-10__085530__frigiliana-health-consultorio-emergency__research-001__prompt.md',
  },
  driveFolder: {
    id: '1EIWhrXY6f__IPTheQNeFWR7gLzSOGKd1',
    url: 'https://drive.google.com/drive/folders/1EIWhrXY6f__IPTheQNeFWR7gLzSOGKd1',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/health',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1EIWhrXY6f__IPTheQNeFWR7gLzSOGKd1',
        url: 'https://drive.google.com/drive/folders/1EIWhrXY6f__IPTheQNeFWR7gLzSOGKd1',
        path: '10_LOCATIONS/frigiliana/health',
      },
      status: 'ingested',
      receivedAt: '2026-09-10T09:10:38+02:00',
      artifact: {
        id: '1b5n8qulATFz1ZOclaRh5japUnDq-Gw5_3B6tQaj4xvU',
        url: 'https://docs.google.com/document/d/1b5n8qulATFz1ZOclaRh5japUnDq-Gw5_3B6tQaj4xvU/edit?usp=drivesdk',
        path: '10_LOCATIONS/frigiliana/health/2026-09-10__071038__gpt__frigiliana-health-consultorio-emergency__raw',
        mimeType: 'application/vnd.google-apps.document',
        sizeBytes: 7470,
        preservation: 'rendered-text-export',
      },
    },
  ],
});
