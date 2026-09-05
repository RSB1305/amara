import { defineKnowledgePageManifest } from '../../schema';

export const tarifaParkingKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-parking',
  destination: 'tarifa',
  topic: 'parking-accessibility',
  createdAt: '2026-08-21T19:24:58+02:00',
  updatedAt: '2026-08-21T19:24:58+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1jkOsn2qRwF_a7mw871MH21PzVDqMsLVo',
    url: 'https://drive.google.com/drive/folders/1jkOsn2qRwF_a7mw871MH21PzVDqMsLVo',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/parking',
  },
  publicContentPath: 'src/content/tarifaParkingContent.ts',
  researchRunIds: ['2026-08-21__184630__parking-accessibility__research-001'],
  coverage: [
    { authoringArea: 'parking-reality', purpose: 'Separate town, old town, port and individual beach contexts.', factIds: ['tarifa.parking.city-beach-contexts-differ'], status: 'partial', notes: 'Beach-specific rules remain open.' },
    { authoringArea: 'arrival-and-luggage', purpose: 'Lead with the accommodation garage while retaining a property-route boundary.', factIds: ['tarifa.parking.amara-private-garage-baseline'], status: 'partial', notes: 'Assignment, access and dimensions require a property pack.' },
    { authoringArea: 'during-stay', purpose: 'Use the garage for the stay base without implying parking at other destinations.', factIds: ['tarifa.parking.amara-private-garage-baseline', 'tarifa.parking.city-beach-contexts-differ'], status: 'covered' },
    { authoringArea: 'last-mile', purpose: 'Keep garage-to-door accessibility separate from private parking.', factIds: ['tarifa.parking.amara-private-garage-baseline'], status: 'gap', notes: 'The complete route is unverified.' },
    { authoringArea: 'seasonal-and-live-rules', purpose: 'Describe July/August pressure and a changing municipal system cautiously.', factIds: ['tarifa.parking.operator-july-august-pressure', 'tarifa.parking.meter-platform-tender-2026', 'tarifa.parking.retiro-annual-authorisations-2026', 'tarifa.parking.current-rules-require-live-verification'], status: 'partial' },
    { authoringArea: 'amara-boundary', purpose: 'Use the private-space advantage only as an accommodation claim.', factIds: ['tarifa.parking.amara-private-garage-baseline'], status: 'partial' },
  ],
});
