import { defineKnowledgePageManifest } from '../../schema';

export const nerjaNightlifeKnowledge = defineKnowledgePageManifest({
  id: 'page-nerja-nightlife',
  destination: 'nerja',
  topic: 'restaurants-evenings',
  createdAt: '2026-08-28T20:00:00+02:00',
  updatedAt: '2026-09-10T11:45:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1On8Jb0x-_pbWZ4fnl5sA7Wn5SsGbBYMn',
    url: 'https://drive.google.com/drive/folders/1On8Jb0x-_pbWZ4fnl5sA7Wn5SsGbBYMn',
    path: 'AMARA – Research Vault/10_LOCATIONS/frigiliana/experiences/restaurants/2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001',
  },
  publicContentPath: 'src/content/nerjaNightlifeContent.ts',
  researchRunIds: ['2026-08-28__092358__frigiliana-nerja-restaurants-evenings__research-001', '2026-09-10__110516__nerja-nightlife-evidence-verification__research-001'],
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
      authoringArea: 'nightlife-character-and-venues',
      purpose: 'Establish the honest character (relaxed bar/terrace town, Plaza Tutti Frutti hub, sunset rooftops, flamenco, family beach bars) and which venue claims are safe, from the 2026 verification run.',
      factIds: [
        'nerja.nightlife.centre-concentration',
        'nerja.nightlife.lively-seasonal',
        'nerja.nightlife.summer-late-events',
        'nerja.nightlife.cochrans-live-music',
        'nerja.nightlife.flamenco-venues',
        'nerja.nightlife.buddha-lounge',
        'nerja.nightlife.rooftop-sunset-terraces',
        'nerja.nightlife.hours-seasonal',
        'nerja.nightlife.h2o-family-beach-bar',
      ],
      status: 'partial',
      notes: 'Verified character + keep/qualify/drop venue list from run 110516 (weak sourcing → partially-verified, high volatility). Drop big-disco claims; never guarantee venue hours; confirm individual venues live. Current-operation status and municipal noise/closing rules remain open questions.',
    },
  ],
});
