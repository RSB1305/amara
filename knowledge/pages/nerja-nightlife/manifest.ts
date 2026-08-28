import { defineKnowledgePageManifest } from '../../schema';

export const nerjaNightlifeKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-nightlife',
  destination: 'nerja',
  topic: 'restaurants-evenings',
  createdAt: '2026-08-28T20:00:00+02:00',
  updatedAt: '2026-08-28T20:00:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1On8Jb0x-_pbWZ4fnl5sA7Wn5SsGbBYMn',
    url: 'https://drive.google.com/drive/folders/1On8Jb0x-_pbWZ4fnl5sA7Wn5SsGbBYMn',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001',
  },
  publicContentPath: 'src/content/nerjaNightlifeContent.ts',
  researchRunIds: ['2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001'],
  coverage: [
    {
      authoringArea: 'cochrans-sundowner',
      purpose: 'Give one concrete, truthful AMARA sundowner recommendation near central Nerja and connect it to AMARA Playa on foot.',
      factIds: [
        'nerja.evenings.cochrans.amara-sunset-visit-2025',
        'nerja.evenings.cochrans.amara-playa-walk-2025',
        'nerja.evenings.cochrans.municipal-activity-record-2026',
      ],
      status: 'covered',
      notes: 'Public copy must retain the summer-2025 observation date and current-operation check. It may not promise sunset from every table, current cocktails, exact measured distance or parking availability.',
    },
    {
      authoringArea: 'restaurant-to-sundowner',
      purpose: 'Continue a central Nerja dinner with a host-tested sunset drink only when the relationship is stated honestly.',
      factIds: ['nerja.evenings.cochrans.amara-sunset-visit-2025'],
      status: 'partial',
      notes: 'The exact restaurant used before Cochran’s is no longer remembered. Do not name a tested restaurant pairing until the operator supplies it.',
    },
    {
      authoringArea: 'remaining-nightlife-guide',
      purpose: 'Keep broader area, season, venue and late-night claims outside this authoring package until separately normalized.',
      factIds: [],
      status: 'gap',
      notes: 'This manifest currently authorizes the Cochran’s projection only; it does not validate the rest of the legacy nightlife page.',
    },
  ],
});
