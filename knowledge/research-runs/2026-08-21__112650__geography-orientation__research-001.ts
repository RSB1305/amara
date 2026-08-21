import { defineKnowledgeResearchRun } from '../schema';

export const geographyOrientationResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__112650__geography-orientation__research-001',
  topic: 'Geography and orientation',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T11:26:50+02:00',
  status: 'awaiting-raw',
  promptPath: 'knowledge/prompts/locations/2026-08-21__112650__geography-orientation__research-001.md',
  promptDriveFile: {
    id: '13oumAGPHGugLDJK8OvjjlFbu5-l1fNZA',
    url: 'https://drive.google.com/file/d/13oumAGPHGugLDJK8OvjjlFbu5-l1fNZA/view?usp=drivesdk',
    path: '01_RESEARCH_BRIEF/2026-08-21__112650__geography-orientation__research-001.md',
  },
  driveFolder: {
    id: '1HL7uYADn_GHrQCMsD7Qsv9duZtSNdCBA',
    url: 'https://drive.google.com/drive/folders/1HL7uYADn_GHrQCMsD7Qsv9duZtSNdCBA',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-21__112650__geography-orientation__research-001',
  },
  inputs: [
    {
      provider: 'gpt-deep-research',
      destination: {
        id: '1KF_kS6PAelMy3OcpObJ1-9u3aGed-HaE',
        url: 'https://drive.google.com/drive/folders/1KF_kS6PAelMy3OcpObJ1-9u3aGed-HaE',
        path: '02_GPT_RAW',
      },
      status: 'awaiting-upload',
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '1Uhe1UE2HKWaw-XjbgAQDJ_kt9r570E8w',
        url: 'https://drive.google.com/drive/folders/1Uhe1UE2HKWaw-XjbgAQDJ_kt9r570E8w',
        path: '03_GEMINI_RAW',
      },
      status: 'awaiting-upload',
    },
  ],
});
