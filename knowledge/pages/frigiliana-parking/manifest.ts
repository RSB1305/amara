import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaParkingKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-parking',
  destination: 'frigiliana',
  topic: 'parking-accessibility',
  createdAt: '2026-08-21T19:24:58+02:00',
  updatedAt: '2026-08-21T19:24:58+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1UssktQjoekSxSm5bmwu_g__Wj4QDijKJ',
    url: 'https://drive.google.com/drive/folders/1UssktQjoekSxSm5bmwu_g__Wj4QDijKJ',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/parking',
  },
  publicContentPath: 'src/content/frigilianaParkingGuideContent.ts',
  researchRunIds: ['2026-08-21__184630__parking-accessibility__research-001'],
  coverage: [
    { authoringArea: 'parking-reality', purpose: 'Orient drivers below the historic hillside centre without promising access or availability.', factIds: ['frigiliana.parking.orientation.lower-village', 'frigiliana.parking.historic-ordinance-and-repeal-gap'], status: 'partial', notes: 'The current legal rule set remains open.' },
    { authoringArea: 'arrival-and-luggage', purpose: 'Separate parking from the accommodation-specific final route.', factIds: ['frigiliana.parking.drop-off-not-established', 'frigiliana.parking.final-section-often-on-foot'], status: 'partial' },
    { authoringArea: 'during-stay', purpose: 'Use the operator-observed difference between day and overnight guest journeys.', factIds: ['frigiliana.parking.operator-day-visitor-rhythm', 'frigiliana.parking.day-and-overnight-demand-differ'], status: 'partial', notes: 'Exact times are not published as occupancy data.' },
    { authoringArea: 'last-mile', purpose: 'Explain route-dependent gradients, cobbles and steps.', factIds: ['frigiliana.parking.final-walk-terrain-varies'], status: 'partial', notes: 'Property routes remain open.' },
    { authoringArea: 'seasonal-and-live-rules', purpose: 'Keep dynamic legality, tariffs and availability with current signs.', factIds: ['frigiliana.parking.live-signs-govern', 'frigiliana.parking.availability-not-guaranteed'], status: 'covered' },
    { authoringArea: 'amara-boundary', purpose: 'Avoid deriving property access from a village-wide parking guide.', factIds: ['frigiliana.parking.drop-off-not-established'], status: 'gap', notes: 'A property arrival pack is required.' },
  ],
});
