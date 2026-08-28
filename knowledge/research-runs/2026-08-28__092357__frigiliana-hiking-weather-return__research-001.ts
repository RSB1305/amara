import { defineKnowledgeResearchRun } from '../schema';

export const frigilianaHikingWeatherReturnResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-28__092357__frigiliana-hiking-weather-return__research-001',
  topic: 'Frigiliana hiking, weather and return context',
  subjects: ['frigiliana', 'nerja', 'casa-amara'],
  createdAt: '2026-08-28T09:23:57+02:00', updatedAt: '2026-08-28T17:00:00+02:00', status: 'normalized',
  promptPath: 'knowledge/prompts/locations/2026-08-28__092357__frigiliana-hiking-weather-return__research-001.md',
  promptDriveFile: { id: '1TfqtmyXEQjZ8LF8obgL_dQIC_2uUv2jp', url: 'https://drive.google.com/file/d/1TfqtmyXEQjZ8LF8obgL_dQIC_2uUv2jp/view?usp=drivesdk', path: '01_PROMPT/2026-08-28__092357__frigiliana-hiking-weather-return__research-001__prompt.md' },
  driveFolder: { id: '1VyecWPTXEgcAwxY5ZRQModN7evS19LmK', url: 'https://drive.google.com/drive/folders/1VyecWPTXEgcAwxY5ZRQModN7evS19LmK', path: 'AMARA – Research Vault/00_INBOX/2026-08-28__092357__frigiliana-hiking-weather-return__research-001' },
  inputs: [
    { provider: 'gpt-deep-research', destination: { id: '1C85HAntGVRNn4iH424FsUkZ1BfF4R-JY', url: 'https://drive.google.com/drive/folders/1C85HAntGVRNn4iH424FsUkZ1BfF4R-JY', path: '02_GPT_RAW' }, status: 'ingested', receivedAt: '2026-08-28T16:00:00+02:00', artifact: { id: '1ymmKLmABRQlkhB0ZNBvdllw0wo4dRJeo', url: 'https://drive.google.com/file/d/1ymmKLmABRQlkhB0ZNBvdllw0wo4dRJeo/view?usp=drivesdk', path: '02_GPT_RAW/2026-08-28__092357__frigiliana-hiking-weather-return__research-001__gpt-deep-research.md', mimeType: 'text/markdown', sizeBytes: 31399, preservation: 'original-upload' } },
    { provider: 'gpt-deep-research', destination: { id: '1C85HAntGVRNn4iH424FsUkZ1BfF4R-JY', url: 'https://drive.google.com/drive/folders/1C85HAntGVRNn4iH424FsUkZ1BfF4R-JY', path: '02_GPT_RAW' }, status: 'ingested', receivedAt: '2026-08-28T11:04:47+02:00', artifact: { id: '1H5WLd5WMx15Jqa6LISGAe3mhb0GKwrlI', url: 'https://drive.google.com/file/d/1H5WLd5WMx15Jqa6LISGAe3mhb0GKwrlI/view?usp=drivesdk', path: '02_GPT_RAW/2026-08-28__110447__gpt__frigiliana-hiking-access-from-casa-amara__supplemental-raw.md', mimeType: 'text/markdown', sizeBytes: 54884, preservation: 'original-upload' } },
    { provider: 'gemini-deep-research', destination: { id: '1gmXkJItpZJJdsUXwkgatrDJ69V2O6wD9', url: 'https://drive.google.com/drive/folders/1gmXkJItpZJJdsUXwkgatrDJ69V2O6wD9', path: '03_GEMINI_RAW' }, status: 'awaiting-upload' },
    { provider: 'operator-provided', destination: { id: '1dUjpLETE0dKBqrlXAR9RjZJV7s1I9ZZ1', url: 'https://drive.google.com/drive/folders/1dUjpLETE0dKBqrlXAR9RjZJV7s1I9ZZ1', path: '05_OPERATOR_NOTES' }, status: 'awaiting-upload' },
  ],
});
