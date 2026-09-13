import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaCalleRealSourceId } from '../../../sources/locations/frigilianaCalleRealSources';

type CalleRealFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaCalleRealSourceId[];
};

/**
 * Calle Real and the Barribajo — the lower old town — normalized from the
 * 2026-09-13 run (2026-09-13__150902__frigiliana-calle-real-barribajo__research-001).
 * The decree, the Catastro and the BOE carry the load-bearing claims; OSM and
 * the EU-DEM lookup carry only geometry and approximate heights.
 */
const facts = [
  {
    id: 'frigiliana.calle-real.decree.barribajo-typology',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'The heritage decree describes the Barribajo as laid out along Calle Real, home to a wealthier population, with more representative houses of greater presence and height — generally three storeys — on plots of larger dimensions, where the aesthetic elements receive special care.',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-calle-real'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'Characterises the area, not every house; complements frigiliana.geography.barribajo.calle-real-axis with the decree’s typology.',
  },
  {
    id: 'frigiliana.calle-real.decree.ensanche-shops',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'The decree names a third area, the Ensanche on the eastern edge of the old town with the Ingenio, the Apero and the Maquinillas, where — because it is the crossroads and the access from the ring road — most of the shops are located; the protected ensemble extends there as far as the Apero and Calle San Sebastián.',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-calle-real'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary: 'A 2014 statement of shop distribution; a tourism blog calls Calle Real the most commercial street, which is a different register and date. Do not merge the two.',
  },
  {
    id: 'frigiliana.calle-real.decree.torreon-special-interest-preemption',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'Among the ensemble’s landmarks the decree adds "el Torreón de la calle Real" and the former Guardia Civil barracks as buildings of special interest, and subjects transfers of the Ingenio, the Maquinillas, the Apero, the Torreón and the former barracks to the municipality’s pre-emption and repurchase rights (tanteo y retracto).',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-calle-real'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'A special-interest listing inside the ensemble, not an individual BIC declaration of the Torreón.',
  },
  {
    id: 'casa-amara.location.inside-conjunto-historico-bic',
    subject: 'casa-amara',
    topic: 'calle-real-barribajo',
    statement:
      'Casa AMARA’s parcel — Calle Chorruelo 5, cadastral reference 9925509VF2792N, block 99255 parcel 09 — is listed among the parcels that form the Bien de Interés Cultural Conjunto Histórico de Frigiliana; the decree’s western boundary runs along the rear of that block and then crosses the Plaza de la Fuente, so the house stands inside the protected ensemble, on its western edge.',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-calle-real', 'catastro-dnploc-chorruelo-5-real-109-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary:
      'Inclusion in the decree’s parcel list, not an individual listing of the house; the block’s parcels 56–64 also appear in the entorno table (an internal overlap of the decree) but parcel 09 is unaffected. Publishable as "inside the protected historic ensemble".',
  },
  {
    id: 'frigiliana.calle-real.only-vehicle-street-one-way',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'Calle Real is the main artery of the historic core and the only street passable by vehicles, from which the lanes to the Barribarto branch; OpenStreetMap tags it as a one-way living street with a sett surface, running from the Ingenio side to the Plaza de la Iglesia.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-las-calles-calle-real-2026', 'osm-calle-real-chorruelo-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary: '"Única transitable por vehículos" is the municipality’s wording; the one-way direction is contributor data and the actual traffic regime is a first-hand check.',
  },
  {
    id: 'frigiliana.calle-real.becomes-chorruelo-at-plaza-iglesia',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'From the Plaza de la Iglesia onwards Calle Real takes the name Calle Chorruelo; the sculpture "Tres Culturas, dos escultores, un Dios" (2006) stands at the end of Chorruelo, the Ermita del Ecce Homo about 300 m further, and the Calle Almona steps beside the sculpture are the alternative way up into the Barribarto.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-ruta-iglesia-santo-cristo-calle-real-2026', 'osm-calle-real-chorruelo-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'Confirms the host fact casa-amara.location.calle-chorruelo-calle-real from an official source; the 300 m is the municipality’s approximation, not a measurement.',
  },
  {
    id: 'frigiliana.calle-real.chorruelo.former-last-street',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement: 'The municipal "Frigiliana ayer y hoy" page records that Calle Chorruelo was once the last street of the village, and that telephone and lighting cables have been buried along the whole of Calle Real and the Chorruelo.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-ayer-y-hoy-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'Undated municipal captions; "en otros tiempos" carries no year.',
  },
  {
    id: 'frigiliana.calle-real.length.about-half-km',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement: 'Measured on OpenStreetMap geometry, Calle Real runs roughly half a kilometre from the Cuesta del Apero junction to the Plaza de la Iglesia; Calle Chorruelo adds about 114 m beyond the square.',
    status: 'verified',
    sourceIds: ['osm-calle-real-chorruelo-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary: 'Polyline lengths computed from contributor geometry, not surveyed; publish as "about half a kilometre", never as a metre figure.',
  },
  {
    id: 'frigiliana.calle-real.numbering.rises-toward-church',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement: 'House numbers on Calle Real rise from the Reales Pósitos (no. 1) towards the Plaza de la Iglesia (no. 74 and no. 109 in the church-side block).',
    status: 'partially-verified',
    sourceIds: ['osm-calle-real-chorruelo-2026', 'catastro-dnploc-chorruelo-5-real-109-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'low',
    claimBoundary: 'Three data points only; odd and even sides are not documented.',
  },
  {
    id: 'frigiliana.calle-real.torreon.18c-posito-site',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'El Torreón on Calle Real is the site of the mid-eighteenth-century pósito, now attached to a house; the municipal tourism site judges an Arab origin "poco o nada probable" and reads it as a later building of the type that spread in the eighteenth century as coastal watch points against piracy, and records a vessel found inside bearing symbols of the three religions as the origin of the "Villa de las 3 Culturas" slogan.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-ruta-hacia-el-torreon-calle-real-2026', 'turismo-frigiliana-monumentos-calle-real-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'No builder and no construction date beyond "S. XVIII"; the hotel’s own claims (1886 reform, mosque, casino, dungeon) are not evidence.',
  },
  {
    id: 'frigiliana.calle-real.torreon.hotel-since-2017',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement: 'The Torreón building at Calle Real 109 has housed the hotel "Torreón 109" since July 2017, keeping the structure of the original house, according to the municipal business directory.',
    status: 'verified',
    sourceIds: ['frigiliana-es-torreon-109-listing-2026', 'catastro-dnploc-chorruelo-5-real-109-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2027-09-13',
    volatility: 'medium',
    claimBoundary: 'A directory listing on the municipal site; the business is a competitor accommodation and is named on AMARA pages only as the building’s current use, never promoted.',
  },
  {
    id: 'frigiliana.calle-real.ayuntamiento.seat-cuesta-del-apero-10',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement: 'The Ayuntamiento’s official contact address is Calle Cuesta del Apero 10; the association Los Pueblos más Bonitos de España states that the restored Casa del Apero houses the municipal seat, the library and the tourist office.',
    status: 'verified',
    sourceIds: ['frigiliana-es-telefonos-direcciones-2026', 'lpmbe-frigiliana-casa-del-apero-poi-2026', 'wikidata-calle-real-items-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary: 'The official address is verified; whether the historic Casa Consistorial on Calle Real remains in municipal use is a separate, open question.',
  },
  {
    id: 'frigiliana.calle-real.casa-consistorial.plazuela-calle-real',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'Municipal tourism pages place "el actual ayuntamiento" on a small widening of Calle Real, "la plazuela", with the entrance of El Torreón opposite; directories give Calle Real 80 as the Ayuntamiento’s address, the festival lists a "Sala de Exposiciones" at Calle Real 80, and Spanish Wikipedia records the Casa Consistorial on its present site since at least 1844.',
    status: 'partially-verified',
    sourceIds: [
      'turismo-frigiliana-ruta-hacia-el-torreon-calle-real-2026',
      'turismo-frigiliana-ayer-y-hoy-2026',
      'wikipedia-es-frigiliana-2026',
      'ayuntamiento-es-directory-frigiliana-2026',
    ],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary:
      'Undated route copy and non-official directories; conflicts with the official seat address at Cuesta del Apero 10 (417 m away). Both may hold (historic Casa Consistorial vs administrative seat); no source states a move. Recorded as an open question, not resolved.',
  },
  {
    id: 'frigiliana.calle-real.plaza-ingenio.bus-and-car-park',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'The municipal itinerary starts at the Plaza del Ingenio, where the bus drops visitors; it names the car park of the Plaza de las Tres Culturas as the most convenient, about 50 m away, and the Día de la Miel de Caña centres on the Plaza del Ingenio.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-ruta-apero-porton-calle-real-2026', 'frigiliana-es-fiestas-y-tradiciones-2026', 'osm-calle-real-chorruelo-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2027-09-13',
    volatility: 'medium',
    claimBoundary: 'Bus-stop positions and car-park terms are volatile; OSM maps the stop on Calle San Sebastián about 70 m from the plaza and the car park as a fee-paying underground facility. The parking page and its knowledge owner keep the current terms.',
  },
  {
    id: 'frigiliana.history.villa-1640.independence-ayuntamiento',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement: 'With the villa title of 1640 Frigiliana became independent from Vélez-Málaga, the municipal boundary was marked out and the Ayuntamiento was established; the parish church works were completed a few years later.',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-calle-real', 'wikipedia-es-frigiliana-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'The decree states the consequences of the title; the date 24 May 1640 and the 160 vecinos are Wikipedia detail (partially verified). Complements frigiliana.history.villa-status-1640.',
  },
  {
    id: 'frigiliana.heritage.1982-award.premios-nacionales-turismo',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'The 1982 award was a first prize of the state "Premios Nacionales de Turismo de Embellecimiento y Mejora de los Pueblos Españoles", a competition regulated by the Orden of 15 February 1979 and resolved by the Secretaría de Estado de Turismo; the municipality describes it as "el primer premio de embellecimiento de los pueblos de España, obtenido en 1982".',
    status: 'partially-verified',
    sourceIds: ['boe-orden-1979-premios-embellecimiento-pueblos', 'turismo-frigiliana-conoce-frigiliana-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'The prize framework is verified in the BOE; the resolution naming Frigiliana was not located, so the award itself rests on the municipal statement. "Primer premio" means first prize, not first edition.',
  },
  {
    id: 'frigiliana.calle-real.reales-positos.frontage-calle-real-1',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement: 'The Reales Pósitos (1767) front Calle Real at no. 1, a few metres before the junction with Calle Hernando el Darra; OpenStreetMap places the address node at 36.7914771, -3.8956076.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-monumentos-calle-real-2026', 'turismo-frigiliana-ruta-apero-porton-calle-real-2026', 'osm-calle-real-chorruelo-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary:
      'Confirms frigiliana.reales-positos.location.calle-real. The public spoke currently names Calle Hernando el Darra and carries a coordinate about 100 m west of the OSM node; the corner building may be addressed from either street, but the frontage is Calle Real. Open question until confirmed on site.',
  },
  {
    id: 'frigiliana.calle-real.ermita.beyond-chorruelo-end',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement: 'The Ermita del Ecce Homo lies about 300 m beyond the end of Calle Chorruelo, where it meets Calle Rosarico la Joaquín; OpenStreetMap addresses it Calle Rosario la Joaquín 31 at 36.7953972, -3.9006033.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-ruta-iglesia-santo-cristo-calle-real-2026', 'osm-calle-real-chorruelo-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary:
      'The 300 m is the municipality’s approximation. The public spoke’s coordinate (36.793750, -3.898850) lies about 250 m south-east of the OSM node, near the church, and its "three minutes on the flat" from Casa AMARA is not supported by either source. Open question until confirmed on site.',
  },
  {
    id: 'frigiliana.calle-real.stepped-lanes-off-calle-real',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    statement:
      'OpenStreetMap maps the lanes leaving Calle Real for the upper quarter as stepped ways: Cuesta del Apero, Calle Hernando el Darra (29 steps), El Zacatín (32 on one segment), La Huerta (82), Callejón del Estanco (8), Callejón del Arriero (20), Calle Alta (21), La Chorrera (13), Calle Santo Cristo (12), Calle Almona, Callejón de las Ánimas and the Calle El Torreón passage under a building.',
    status: 'partially-verified',
    sourceIds: ['osm-calle-real-chorruelo-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2027-09-13',
    volatility: 'medium',
    claimBoundary: 'Contributor step counts, not surveyed; they seed the operator’s measurement sheet and are not published until counted on site.',
  },
] as const satisfies readonly CalleRealFactInput[];

export const frigilianaCalleRealFacts = defineKnowledgeFacts(facts);

export type FrigilianaCalleRealFactId = (typeof frigilianaCalleRealFacts)[number]['id'];
