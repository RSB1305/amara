import { defineKnowledgeSources } from '../../schema';

export const frigilianaParkingSources = defineKnowledgeSources([
  {
    id: 'frigiliana-tourism-official-street-map',
    title: 'Callejero de Frigiliana',
    publisher: 'Turismo de Frigiliana',
    sourceType: 'official',
    url: 'https://www.turismofrigiliana.es/es/callejero.html',
    accessedAt: '2026-07-27',
    language: 'es',
    scope: 'Official orientation map for the historic and newer parts of Frigiliana.',
    limitations:
      'Useful for spatial orientation. It does not prove live availability, current tariffs, access restrictions or parking terms.',
    reuse: 'link-and-cite'
  },
  {
    id: 'frigiliana-plaza-garage-signage-2026-08',
    title: 'Tariff signage at the central car park below Plaza de las Tres Culturas',
    publisher: 'AMARA first-party field observation',
    sourceType: 'first-party-observation',
    locator: 'Operator-attested observation preserved in repository commit 1299fdfb.',
    observedAt: '2026-08-19',
    scope: 'Displayed per-minute tariff and daily cap at the time of observation.',
    limitations:
      'No photograph is currently stored in the repository. The observation does not establish ownership, opening hours, height limits, payment methods or later tariffs.',
    reuse: 'internal-only'
  },
  {
    id: 'google-maps-frigiliana-live-parking-search',
    title: 'Live map search for public parking in Frigiliana',
    publisher: 'Google Maps',
    sourceType: 'discovery-tool',
    url: 'https://www.google.com/maps/search/?api=1&query=aparcamiento+publico+Frigiliana',
    accessedAt: '2026-07-27',
    scope: 'Live orientation and discovery of nearby parking candidates.',
    limitations:
      'Discovery only. Listings and map results are not authoritative evidence for legality, availability, restrictions, tariffs or accessibility.',
    reuse: 'link-and-cite'
  },
  {
    id: 'amara-frigiliana-parking-editorial-baseline-2026-07',
    title: 'AMARA Frigiliana parking editorial baseline',
    publisher: 'AMARA',
    sourceType: 'internal-editorial-baseline',
    locator: 'src/content/frigilianaParkingContent.ts; baseline commit 851865e0.',
    observedAt: '2026-07-27',
    scope: 'Preserves the claims and practical guidance already present before the knowledge-layer pilot.',
    limitations:
      'An authored page is not independent evidence. Claims supported only by this baseline remain unverified or partially verified until a primary source or documented observation is attached.',
    reuse: 'internal-only'
  }
] as const);

export type FrigilianaParkingSourceId = (typeof frigilianaParkingSources)[number]['id'];
