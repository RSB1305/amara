import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaOldTownMonumentsSourceId } from '../../../sources/locations/frigilianaOldTownMonumentsSources';

type FuenteViejaFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaOldTownMonumentsSourceId[];
};

/**
 * Old-town spoke (B). Graduated out of old-town-monuments.ts by the 2026-09-12 web
 * synthesis. Two operator-brief points were corrected: the builder was the fifth Señor
 * AND first Count of Frigiliana (not simply "fifth lord"), and the fountain is a two-storey
 * stone façade with the coat of arms in the upper central field — there is no "brick arch".
 */
const facts = [
  {
    id: 'frigiliana.fuente-vieja.build.1640-manrique',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    statement:
      'The Fuente Vieja was built around 1640 by Don Íñigo Manrique de Lara, fifth Señor of Frigiliana and first Count of the villa; the counts’ (casa De Lara) coat of arms survives in the central field of its upper storey.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-siglo-xvi-xix', 'frigiliana-info-fuentes', 'diputacion-malaga-fuente-vieja'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary:
      '"c.1640" is the durable dating (a lone Flickr caption saying 1645 is not reliable). It is a two-storey stone façade, not a brick arch; the coat of arms sits in the upper central field, not in an arch.',
  },
  {
    id: 'frigiliana.fuente-vieja.name.fuente-nueva-origin',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    statement:
      'The fountain was originally called the "Fuente Nueva" (new fountain) and only became the "Fuente Vieja" (old fountain) once newer fountains were built elsewhere in the village.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-siglo-xvi-xix', 'frigiliana-info-fuentes'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'A documented naming anecdote, attested by the municipal history and the local heritage compendium.',
  },
  {
    id: 'frigiliana.fuente-vieja.spouts-and-trough',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    statement:
      'It has three spouts (caños) in its lower body — two set in diamond-framed mouldings, one square — feeding a stone trough that also served as an animal watering point (abrevadero) for the village.',
    status: 'verified',
    sourceIds: ['frigiliana-info-fuentes'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'The three-spout count and the abrevadero function are attested; supply/drinking-water use into the 19th century is the durable claim, not a specific "centuries as the only source".',
  },
  {
    id: 'frigiliana.fuente-vieja.decoration.pomegranate-pediment',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    statement:
      'The two-storey body is separated by an entablature and articulated with pilasters, crowned by a semicircular pediment with pinnacles and decorated with pomegranate motifs.',
    status: 'verified',
    sourceIds: ['frigiliana-info-fuentes', 'conocetusfuentes-fuente-vieja-3209'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'Descriptive architectural reading from the heritage compendium and the fountain inventory sheet.',
  },
  {
    id: 'frigiliana.fuente-vieja.restoration.1990s',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    statement:
      'The Fuente Vieja was restored in the 1990s — the coat of arms, wall decoration and pomegranate branches were reconstructed — and is today in good condition; its water came from the Sierra Almijara.',
    status: 'partially-verified',
    sourceIds: ['conocetusfuentes-fuente-vieja-3209'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'The 1990s restoration is attested only by the fountain inventory sheet; treat as single-source.',
  },
  {
    id: 'frigiliana.fuente-vieja.location.plaza-calle-chorruelo',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    statement:
      'The fountain stands on the Plaza de la Fuente Vieja, off a branch of Calle Chorruelo, near the Ermita de Ecce Homo at the edge of the old town.',
    status: 'verified',
    sourceIds: ['conocetusfuentes-fuente-vieja-3209'],
    checkedAt: '2026-09-12',
    reviewAfter: '2031-09-12',
    volatility: 'low',
    claimBoundary: 'The named plaza and the proximity to the Ermita are attested; "lower edge of the old town" is imprecise and should be phrased as the plaza location.',
  },
  {
    id: 'frigiliana.fuente-vieja.location.coordinates',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    statement:
      'The Plaza de la Fuente Vieja sits at 36.793401, -3.899301 (WGS84), about 315 m above sea level. The Andalusian fountain inventory records the same point as UTM ETRS89 zone 30 X 419762.835, Y 4072417.131.',
    status: 'verified',
    sourceIds: ['amara-old-town-monuments-operator-brief-2026', 'conocetusfuentes-fuente-vieja-3209'],
    checkedAt: '2026-09-13',
    reviewAfter: '2031-09-13',
    volatility: 'low',
    claimBoundary:
      'Decimal coordinates are an operator-provided on-site pin; the elevation and the UTM reading are from the fountain inventory sheet. Used for the page TouristAttraction geo node.',
  },
  {
    id: 'frigiliana.fuente-vieja.access.route-from-casa-amara',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    statement:
      'From Casa AMARA the fountain is about 60 m away at the lower edge of the old town: you go back down Calle Chorruelo — a cobbled descent of roughly 10–15 vertical metres — and at the Bar El Alegría del Barrio turn down to the left, with the fountain a few steps along on the left. The surrounding Barribajo runs flat and wide; the fountain is an open public square, freely accessible at any hour.',
    status: 'verified',
    sourceIds: ['amara-old-town-monuments-operator-brief-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary:
      'Operator first-hand wayfinding. The ~60 m distance and ~10–15 m descent are approximate on-site estimates; the Bar El Alegría del Barrio is a wayfinding landmark that may change name or close. Free public access is inherent to an open street fountain.',
  },
] as const satisfies readonly FuenteViejaFactInput[];

export const frigilianaFuenteViejaFacts = defineKnowledgeFacts(facts);

export type FrigilianaFuenteViejaFactId = (typeof frigilianaFuenteViejaFacts)[number]['id'];
