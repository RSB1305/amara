import { defineKnowledgePageManifest } from '../../schema';

export const tarifaFamilyKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-family',
  destination: 'tarifa',
  topic: 'family',
  createdAt: '2026-09-09T11:45:00+02:00',
  updatedAt: '2026-09-09T11:45:00+02:00',
  status: 'normalizing',
  driveFolder: {
    id: '1-n2p1H8HQvxTc37s9j-JGf-Mra5fzKPj',
    url: 'https://drive.google.com/drive/folders/1-n2p1H8HQvxTc37s9j-JGf-Mra5fzKPj',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/experiences/family'
  },
  publicContentPath: 'src/content/tarifaExperienceSpokeContent.ts',
  researchRunIds: [],
  coverage: [
    { authoringArea: 'positioning', purpose: 'Frame AMARA as a relaxed host for families, not a hardcore kite spot: breadth of options and the flexible-planning mindset.', factIds: ['tarifa.family.range.beyond-kitesurf', 'tarifa.family.wind.dominant-planning-variable'], status: 'covered' },
    { authoringArea: 'beaches', purpose: 'Anchor the central family-beach choice and its plan-B role on windy days.', factIds: ['tarifa.family.playa-chica.central-family-beach', 'tarifa.family.los-lances-sur.official-family-beach'], status: 'covered' },
    { authoringArea: 'whale-watching', purpose: 'Present family-suitable marine wildlife with honest expectation-setting, routed to live booking.', factIds: ['tarifa.family.whale-watching.family-suitable', 'tarifa.family.whale-watching.sighting-not-guaranteed'], status: 'covered' },
    { authoringArea: 'active-outdoors', purpose: 'Age-gated active options (kite taster, riding, e-bike) attributed to qualified providers, never AMARA-delivered.', factIds: ['tarifa.family.kite-taster.school-only-from-eight', 'tarifa.family.riding.beginner-and-park-rides', 'tarifa.family.ebike.teens-guided'], status: 'covered' },
    { authoringArea: 'nature-and-culture', purpose: 'Nature-park walks, birdwatching and the Bolonia/Baelo Claudia beach-plus-history combination.', factIds: ['tarifa.family.nature.estrecho-and-cazalla', 'tarifa.family.bolonia.baelo-claudia-accessible'], status: 'covered' },
    { authoringArea: 'day-trips', purpose: 'One larger outing per stay, matched to age; Gibraltar and Tanger with current caveats.', factIds: ['tarifa.family.zoo-de-castellar.rescue-centre', 'tarifa.family.gibraltar.cable-car-closed', 'tarifa.family.tanger.full-day-not-mandatory'], status: 'covered' },
    { authoringArea: 'logistics', purpose: 'Transport reality and a time-bound closure families must not plan around.', factIds: ['tarifa.family.transport.car-adds-flexibility', 'tarifa.family.bahia-park.closed-until-2027'], status: 'covered' }
  ]
});
