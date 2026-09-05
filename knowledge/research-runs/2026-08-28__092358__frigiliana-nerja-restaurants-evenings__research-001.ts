import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaNerjaRestaurantsEveningsResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001',
  topic: 'Frigiliana and Nerja restaurants, situations and evening continuations',
  subjects: ['frigiliana', 'nerja', 'casa-amara', 'amara-playa'],
  createdAt: '2026-08-28T09:23:58+02:00', updatedAt: '2026-08-28T16:00:00+02:00', status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001.md',
  promptDriveFile: { id: '1ghxaOHjaUmmK3SmoUKMxUVZ1WYvCbXkg', url: 'https://drive.google.com/file/d/1ghxaOHjaUmmK3SmoUKMxUVZ1WYvCbXkg/view?usp=drivesdk', path: '01_PROMPT/2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001__prompt.md' },
  driveFolder: { id: '1On8Jb0x-_pbWZ4fnl5sA7Wn5SsGbBYMn', url: 'https://drive.google.com/drive/folders/1On8Jb0x-_pbWZ4fnl5sA7Wn5SsGbBYMn', path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/experiences/restaurants/2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001' },
  inputs: [
    { provider: 'gpt-deep-research', destination: { id: '1GSmP-gWA1TxGKt8P-Ok-kf78Cu8nb6mX', url: 'https://drive.google.com/drive/folders/1GSmP-gWA1TxGKt8P-Ok-kf78Cu8nb6mX', path: '02_GPT_RAW' }, status: 'ingested', receivedAt: '2026-08-28T16:00:00+02:00', artifact: { id: '1AcEFDi6XSa1SZ0zizg6VpzRHSKmX3iGa', url: 'https://drive.google.com/file/d/1AcEFDi6XSa1SZ0zizg6VpzRHSKmX3iGa/view?usp=drivesdk', path: '02_GPT_RAW/2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001__gpt-deep-research.md', mimeType: 'text/markdown', sizeBytes: 45933, preservation: 'original-upload' } },
    { provider: 'gemini-deep-research', destination: { id: '1pfmYJiwtDihV2avr2zS5Iu_KTBZxU79h', url: 'https://drive.google.com/drive/folders/1pfmYJiwtDihV2avr2zS5Iu_KTBZxU79h', path: '03_GEMINI_RAW' }, status: 'awaiting-upload' },
    { provider: 'operator-provided', destination: { id: '1Lhz64OYvXRgpqNKPMSmP2XO2desm1sZI', url: 'https://drive.google.com/drive/folders/1Lhz64OYvXRgpqNKPMSmP2XO2desm1sZI', path: '05_OPERATOR_NOTES' }, status: 'awaiting-upload' },
  ],
});
