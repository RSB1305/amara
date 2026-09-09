import { defineKnowledgeRecommendations } from '../../schema';

/**
 * Family-activity providers for the Tarifa family page. All CANDIDATE: the source
 * research is compiled, not operator-vetted. APPROVED and public/guest scope are
 * Robert's call (see open question tarifa.family.question.operator-vetted-providers).
 */
export const tarifaFamilyRecommendations = defineKnowledgeRecommendations([
  {
    id: 'tarifa.family.subcielo-kite-school',
    destination: 'tarifa',
    topic: 'family',
    place: {
      name: 'Subcielo Kite School Tarifa',
      kind: 'provider',
      website: 'https://www.subcielokiteschooltarifa.com/en/kitesurfing-course-for-children/'
    },
    summary:
      'Private children kitesurf taster from roughly age eight with adapted gear, helmet, harness, wetsuit and insurance; a school-led option, never an AMARA-delivered service.',
    bestFor: ['children from ~8', 'teenagers', 'first kite experience'],
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'amara-experience',
    basis: 'research-candidate',
    factIds: ['tarifa.family.kite-taster.school-only-from-eight'],
    sourceIds: ['subcielo-kite-kids-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Minimum age, price and suitability depend on wind, weight and swimming ability and must be confirmed per child at booking.'
  },
  {
    id: 'tarifa.family.aventuras-del-sur',
    destination: 'tarifa',
    topic: 'family',
    place: {
      name: 'Aventuras del Sur',
      kind: 'provider',
      website: 'https://aventurasdelsur.com/en/horse-riding-tarifa/'
    },
    summary:
      'Beginner/children riding lessons and beach/natural-park rides around Bolonia, with helmet, guide and accident insurance stated for guided routes; a short lesson suits a first-time child better than a long ride.',
    bestFor: ['children 5–11', 'beginners', 'teenagers'],
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'amara-experience',
    basis: 'research-candidate',
    factIds: ['tarifa.family.riding.beginner-and-park-rides'],
    sourceIds: ['aventuras-del-sur-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Minimum age, weight limits, price and route vary by operator and must be confirmed at booking. Other approved riding providers already exist under topic activities.'
  },
  {
    id: 'tarifa.family.electric-bikes-tarifa',
    destination: 'tarifa',
    topic: 'family',
    place: {
      name: 'Electric Bikes Tarifa',
      kind: 'provider',
      website: 'https://www.electricbikestarifa.com/'
    },
    summary:
      'Guided e-bike/e-MTB tours with routes matched to level and age group; best suited to teenagers, with individual segments chosen rather than long routes.',
    bestFor: ['teenagers', 'active families'],
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'amara-experience',
    basis: 'research-candidate',
    factIds: ['tarifa.family.ebike.teens-guided'],
    sourceIds: ['electric-bikes-tarifa-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Positive ratings rest on small review samples; available child frame sizes and minimum age need confirmation before booking.'
  },
  {
    id: 'tarifa.family.zoo-de-castellar',
    destination: 'tarifa',
    topic: 'family',
    place: {
      name: 'Zoo de Castellar',
      kind: 'venue',
      website: 'https://www.zoodecastellar.es/venta-entradas'
    },
    summary:
      'Animal-rescue zoo roughly 55–65 minutes by car; a reliable full-day option across all ages and a good bad-weather fallback for Tarifa. Online tickets recommended to skip queues.',
    bestFor: ['toddlers 0–4', 'children 5–11', 'rainy or very windy days'],
    access: [{ from: 'amara-family-surf', driveMinutes: 60, note: 'Roughly 55–65 minutes by car to Castellar de la Frontera.' }],
    provenance: 'researched',
    status: 'CANDIDATE',
    scope: 'public',
    basis: 'research-candidate',
    factIds: ['tarifa.family.zoo-de-castellar.rescue-centre'],
    sourceIds: ['zoo-de-castellar-2026'],
    checkedAt: '2026-09-09',
    reviewAfter: '2027-03-09',
    volatility: 'medium',
    claimBoundary:
      'Prices and hours change seasonally; site-wide accessibility is unspecified and one recent family review criticised the car park.'
  }
]);
