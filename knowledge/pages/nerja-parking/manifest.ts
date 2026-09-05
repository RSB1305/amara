import { defineKnowledgePageManifest } from '../../schema';

export const nerjaParkingKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-parking',
  destination: 'nerja',
  topic: 'parking-accessibility',
  createdAt: '2026-08-21T19:24:58+02:00',
  updatedAt: '2026-08-21T19:24:58+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1sQx2aPUfNWmssda3NpQRFWnWf23qln9U',
    url: 'https://drive.google.com/drive/folders/1sQx2aPUfNWmssda3NpQRFWnWf23qln9U',
    path: 'AMARA – Research Vault/10_LOCATIONS/nerja/parking',
  },
  publicContentPath: 'src/content/nerjaParkingContent.ts',
  researchRunIds: ['2026-08-21__184630__parking-accessibility__research-001'],
  coverage: [
    { authoringArea: 'parking-reality', purpose: 'Explain Nerja as several parking contexts rather than one town-wide rule.', factIds: ['nerja.parking.public-facilities.named', 'nerja.parking.operator-zones-and-improvement'], status: 'partial' },
    { authoringArea: 'arrival-and-luggage', purpose: 'Choose the parking context from the actual destination and unloading need.', factIds: ['nerja.parking.public-facilities.named', 'nerja.parking.amara-playa-street-baseline'], status: 'partial', notes: 'AMARA Playa arrival pack remains open.' },
    { authoringArea: 'during-stay', purpose: 'Separate central Nerja from Burriana and other beach journeys.', factIds: ['nerja.parking.public-facilities.named', 'nerja.parking.burriana-smart-project-2026'], status: 'covered' },
    { authoringArea: 'last-mile', purpose: 'Reject accessibility inference from a bay or PMR right.', factIds: ['nerja.parking.amara-playa-street-baseline'], status: 'gap', notes: 'Complete property and destination routes are not documented.' },
    { authoringArea: 'seasonal-and-live-rules', purpose: 'Show municipal change without freezing projects as live services.', factIds: ['nerja.parking.balcon-guidance-project-2026', 'nerja.parking.verano-azul-maintained-2026', 'nerja.parking.burriana-smart-project-2026', 'nerja.parking.pescia-847-planned'], status: 'partial' },
    { authoringArea: 'amara-boundary', purpose: 'Keep street-parking baseline separate from a guarantee.', factIds: ['nerja.parking.amara-playa-street-baseline', 'nerja.parking.mostly-free-not-established'], status: 'partial' },
  ],
});
