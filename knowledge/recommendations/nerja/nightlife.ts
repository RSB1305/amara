import { defineKnowledgeRecommendations } from '../../schema';

export const nerjaNightlifeRecommendations = defineKnowledgeRecommendations([
  {
    id: 'nerja.nightlife.cochrans-terrace',
    destination: 'nerja',
    topic: 'nightlife',
    place: { name: 'Cochran’s Terrace', kind: 'bar', address: 'Bajada del Salón, Nerja', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cochran%27s+Terrace+Nerja' },
    summary: 'For a beautiful early evening, stay around the Balcón de Europa and the old town streets nearby. This is the best choice for sea views, a more polished mood and a slower night. Best for: couples, calm groups, date night Best time: sunset to after dinner Style: scenic, elegant, walkable Our own tested version: in summer 2025 we left the car at AMARA Playa in Nerja, walked into the centre and watched the sunset from Cochran’s Terrace over a Cuba Libre and a Mai Tai. The walk is roughly 450 metres. Check that the terrace is open before you set off.',
    access: [{ from: 'amara-playa', distanceMetres: 450, note: 'operator recollection, not a measured route' }],
    provenance: 'amara-first-hand',
    status: 'APPROVED',
    scope: 'split',
    basis: 'published-guide-carryover',
    factIds: [
      'nerja.evenings.cochrans.amara-sunset-visit-2025',
      'nerja.evenings.cochrans.amara-playa-walk-2025',
      'nerja.evenings.cochrans.municipal-activity-record-2026'
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-02-28',
    volatility: 'medium',
    claimBoundary: 'One summer-2025 visit by the operator supports the sunset recommendation; it does not guarantee a sunset seat, the drinks on the menu or current opening.'
  },
  {
    id: 'nerja.nightlife.plaza-tutti-frutti',
    destination: 'nerja',
    topic: 'nightlife',
    place: { name: 'Plaza Tutti Frutti', kind: 'venue', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Plaza+Tutti+Frutti+Nerja' },
    summary: 'If you want a later, louder and more social night, head to Plaza Tutti Frutti after dinner. This is the easiest area for bar-hopping and the clearest “nightlife zone” in Nerja. Best for: groups, later starts, casual fun Best time: after dinner, especially later in summer Atmosphere: younger, busier, more energetic',
    provenance: 'researched',
    status: 'APPROVED',
    scope: 'amara-experience',
    basis: 'published-guide-carryover',
    checkedAt: '2026-09-05',
    reviewAfter: '2027-03-05',
    volatility: 'medium',
    claimBoundary: 'Carried over from the published guide on 2026-09-05; identity and link only, no operating details are verified.'
  }
]);
