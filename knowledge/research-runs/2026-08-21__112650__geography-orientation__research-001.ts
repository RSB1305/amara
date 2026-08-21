import { defineKnowledgeResearchRun } from '../schema';

export const geographyOrientationResearch001 = defineKnowledgeResearchRun({
  id: '2026-08-21__112650__geography-orientation__research-001',
  topic: 'Geography and orientation',
  subjects: ['frigiliana', 'nerja', 'tarifa'],
  createdAt: '2026-08-21T11:26:50+02:00',
  updatedAt: '2026-08-21T11:49:45+02:00',
  status: 'raw-received',
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
      status: 'uploaded',
      receivedAt: '2026-08-21T11:45:23+02:00',
      artifact: {
        id: '11ZjsIz5meqYP4-3p8spzi-8_y-zpi3VN',
        url: 'https://drive.google.com/file/d/11ZjsIz5meqYP4-3p8spzi-8_y-zpi3VN/view?usp=drivesdk',
        path: '02_GPT_RAW/2026-08-21__114446__gpt__geography-orientation__raw.md',
        mimeType: 'text/markdown',
        sizeBytes: 92576,
        preservation: 'original-upload',
        originalName: 'deep-research-report (2).md',
      },
    },
    {
      provider: 'gemini-deep-research',
      destination: {
        id: '1Uhe1UE2HKWaw-XjbgAQDJ_kt9r570E8w',
        url: 'https://drive.google.com/drive/folders/1Uhe1UE2HKWaw-XjbgAQDJ_kt9r570E8w',
        path: '03_GEMINI_RAW',
      },
      status: 'uploaded',
      receivedAt: '2026-08-21T11:49:45+02:00',
      sourceUrl: 'https://share.gemini.google/2GOcS8O1NGO2',
      artifact: {
        id: '1uePanmg1Pqys3UmC4ZiCPsNrnEAKkQBc',
        url: 'https://drive.google.com/file/d/1uePanmg1Pqys3UmC4ZiCPsNrnEAKkQBc/view?usp=drivesdk',
        path: '03_GEMINI_RAW/2026-08-21__114907__gemini__geography-orientation__raw.txt',
        mimeType: 'text/plain',
        sizeBytes: 39152,
        preservation: 'rendered-text-export',
      },
    },
  ],
});
