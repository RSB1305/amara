import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaBarribartoSourceId } from '../../../sources/locations/frigilianaBarribartoSources';

type BarribartoFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaBarribartoSourceId[];
};

/**
 * Barribarto — the upper, medieval quarter — as a documented place entity.
 * Normalized from the 2026-09-13 run
 * (2026-09-13__150901__frigiliana-barribarto-entity__research-001).
 * Coordinates and DEM heights live in the run dossier; facts here carry only
 * what an official or inventory source states.
 */
const facts = [
  {
    id: 'frigiliana.barribarto.decree.medieval-core-typology',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The heritage decree describes the Barribarto as the presumed original medieval settlement core beside the castle walls: an eminently popular area whose buildings stand on smaller plots, are very homogeneous in height — generally two storeys — and vernacular in type.',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-barribarto'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary:
      'The decree characterises an area, not every house, and gives the Barribarto no boundary of its own; "sería" marks the medieval origin as the decree’s reading, not an excavated date.',
  },
  {
    id: 'frigiliana.barribarto.name.barrio-alto',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement: 'The municipal tourism site states that the name "Barribarto" is a deformation of "Barrio Alto", the upper quarter.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-el-barribarto-es-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'A municipal statement, not a philological study; the parallel "Barribajo" = "Barrio Bajo" follows the same pattern but is not spelled out by the page.',
  },
  {
    id: 'frigiliana.barribarto.adarves.eleven-named',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The municipal tourism site names eleven adarves of the old town: Zacatín, Túnel, Señor, Huerta, Amargura, Peñón, Batanero, Torreón, Cura Soto, Corralón and Inquisidor.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-casco-antiguo-2026', 'boja-decreto-183-2014-barribarto'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary:
      'The list is the municipality’s; the decree names adarves only generically. Which of the eleven are entered through an algorfa and which are dead-end passages is not documented and remains a first-hand check.',
  },
  {
    id: 'frigiliana.barribarto.adarves.decree-entry-types',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The decree defines the adarves as spaces mixed between public and private, numerous in the village and of varied types, with or without an interior street, entered openly or through an algorfa; it describes the old part on the castle hill as a hillside layout whose principal streets follow the contour lines and are linked by smaller, steeper lanes.',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-barribarto'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'Complements frigiliana.heritage.streets.adarves-algorfas with the decree’s own typology; it does not say which lanes are adarves.',
    notes: 'The wiktionary warns that the popular "dead-end lane" sense of adarve is a loose use; the decree’s definition is the one to quote. Operator first-party (2026-09-13): in Frigiliana almost all eleven named adarves are in practice classic, mostly angled dead-ends / half-private cul-de-sacs serving clusters of houses, not public through-streets — the Barribarto page states this.',
  },
  {
    id: 'frigiliana.barribarto.zacatin.name-meaning',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement: 'The municipal streets page explains "Zacatín" as the name given to plazas or streets where clothing was sold.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-las-calles-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'The Arabic root was not opened (RAE blocked); the municipal gloss is the citable version.',
  },
  {
    id: 'frigiliana.barribarto.callejon-penon.mirador-urbano-and-santo-cristo',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The named viewpoints beside the Callejón del Peñón are the "Mirador urbano del Peñón" in the lane itself, which climbs to the Peñón de la Sabina below the castle with views over the village, the Nerja coast, the Higuerón valley and the Sierras of Tejeda and Almijara, and the "Mirador C/ Santo Cristo" on Calle Santo Cristo, whose lower end meets the foot of the Callejón del Peñón.',
    status: 'verified',
    sourceIds: [
      'diputacion-malaga-mirador-urbano-penon',
      'lpmbe-frigiliana-miradores-adarves',
      'ign-cartociudad-frigiliana-2026',
      'osm-frigiliana-old-town-2026',
    ],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary:
      'The adjacency of Calle Santo Cristo and the Callejón del Peñón is a geometry comparison of CartoCiudad vertices; the exact viewing platforms are unnamed OSM viewpoint nodes and must be fixed on site. The Plaza de las Tres Culturas is not one of these viewpoints.',
    supersedes: ['frigiliana.callejon-penon.named-miradores'],
    notes: 'Corrects the earlier reading that placed a "Mirador de las Tres Culturas" in the upper village; see frigiliana.barribarto.plaza-tres-culturas.lower-village.',
  },
  {
    id: 'frigiliana.barribarto.plaza-tres-culturas.lower-village',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The Plaza de las Tres Culturas is a municipal plaza with shops over the underground car park at the village entrance on Avenida Carlos Cano, opposite El Ingenio; it lies outside the BIC boundary and serves as the main stage of the Festival Frigiliana 3 Culturas, the mercadillo and other events — about 200 m from and roughly 45 m below the Callejón del Peñón.',
    status: 'verified',
    sourceIds: [
      'diputacion-malaga-culturama-plaza-tres-culturas',
      'frigiliana-es-parking-subterraneo-2015',
      'festival-3-culturas-conoce-2026',
      'ign-cartociudad-frigiliana-2026',
      'opentopodata-eudem25m-2026',
    ],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary:
      'Position and uses are official; the height difference is an EU-DEM estimate (±10–15 m) and the distance a straight line. "Inaugurated 2008, 2,000 m²" appears only in community listings and is not published.',
  },
  {
    id: 'frigiliana.barribarto.official-itineraries.three-plus-panels',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The Ayuntamiento publishes three village itineraries — "Desde El Apero hasta El Portón", "Hacia El Torreón" and "Desde la iglesia al Santo Cristo" — plus the twelve-panel route; none of them states a length, a duration or a difficulty.',
    status: 'verified',
    sourceIds: [
      'turismo-frigiliana-ruta-apero-porton-2026',
      'turismo-frigiliana-ruta-hacia-el-torreon-2026',
      'turismo-frigiliana-ruta-iglesia-santo-cristo-2026',
      'turismo-frigiliana-ruta-paneles-2026',
    ],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary: 'Municipal pages are undated; the absence of metrics is what was found on 2026-09-13, not a statement that none will be published.',
  },
  {
    id: 'frigiliana.barribarto.official-walk.almona-garral-zacatin-lizar-penon',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The municipal Barribarto walk starts at the end of Calle Almona and passes Calle El Garral and El Zacatín (with the 1569 panels) to the mirador de Lízar and the tajo del Peñón; the "Hacia El Torreón" itinerary enters the quarter by Calle Alta from the Callejón del Estanco and names the Callejón del Señor as a small typical adarve.',
    status: 'verified',
    sourceIds: [
      'turismo-frigiliana-el-barribarto-es-2026',
      'turismo-frigiliana-the-barribarto-en-2026',
      'turismo-frigiliana-ruta-hacia-el-torreon-2026',
    ],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary: 'Route descriptions, not surveyed tracks; the English page names the viewpoints "Mirador del Tajo del Peñón" and "Mirador El Lizar" without coordinates.',
  },
  {
    id: 'frigiliana.barribarto.lpmbe.miradores-adarves-six-stops',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The Los Pueblos más Bonitos de España association publishes a six-stop "Miradores y Adarves" itinerary: Adarve Callejón del Peñón, Mirador Callejón del Peñón, Mirador C/ Santo Cristo, Adarve Callejón del Arriero (described as the highest zone of the Morisco quarter), the Casa del Apero mirador and the Adarve Callejón del Inquisidor.',
    status: 'verified',
    sourceIds: ['lpmbe-frigiliana-miradores-adarves'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary: 'An association’s promotional itinerary without coordinates; it names the stops, it does not classify them officially.',
  },
  {
    id: 'frigiliana.barribarto.fountains.stated-elevations',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The Andalusian fountain inventory states elevations for three old-town fountains: Fuente del Barrio Alto 328 m (a wall fountain "en un rincón del Barrio Alto", dry in 2014), Fuente de las Tres Culturas 305 m (between the Callejón del Inquisidor and the Callejón de las Ánimas near the church square) and Fuente Hernando Darra 319 m (at the junction of Calle Hernando el Darra and Calle Real).',
    status: 'verified',
    sourceIds: [
      'conocetusfuentes-fuente-barrio-alto-9240',
      'conocetusfuentes-fuente-tres-culturas-9241',
      'conocetusfuentes-fuente-hernando-darra-13383',
    ],
    checkedAt: '2026-09-13',
    reviewAfter: '2031-09-13',
    volatility: 'low',
    claimBoundary: 'The only stated (not modelled) elevations inside the village; fichas dated 2010–2019. Together with the Fuente Vieja at 315 m they anchor a height ladder, not a gradient.',
  },
  {
    id: 'frigiliana.barribarto.cartociudad.official-street-geometry',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The IGN CartoCiudad gazetteer holds official identifiers and centreline geometry for Calle Amargura, El Zacatín, El Garral, Santo Cristo, the Callejón del Peñón, del Señor, del Inquisidor, del Arriero and del Estanco, the Plaza de las Tres Culturas and Calle Rosarico la Joaquín; Calle Santo Cristo and the Callejón del Peñón share an end vertex.',
    status: 'verified',
    sourceIds: ['ign-cartociudad-frigiliana-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2029-09-13',
    volatility: 'low',
    claimBoundary: 'Calle Alta was not returned by the service; centrelines are not footprints. This is the geometry base for an AMARA old-town map, together with OSM for steps and buildings.',
  },
  {
    id: 'frigiliana.barribarto.tours.no-official-audio-guide',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The municipality publishes no official audio guide or app for the old town; the tourist office offers an image-only PDF street map, and a private operator listed in the municipal directory runs guided walks of about an hour and a half from the tourist office.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-oficina-turismo-2026', 'frigiliana-es-frigiliana-tours-listing-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2027-03-13',
    volatility: 'high',
    claimBoundary: 'Absence found on 2026-09-13; tour prices and schedules are volatile and are not normalized. A commercial third-party audio guide exists and is not official.',
  },
  {
    id: 'frigiliana.barribarto.casa-amara.on-axis-not-inside-quarter',
    subject: 'casa-amara',
    topic: 'barribarto',
    statement:
      'Casa AMARA (Calle Chorruelo 5) lies on the Calle Real → Calle Chorruelo axis of the lower village, about 150 m west of the Zacatín and Garral lanes; no official source places it inside the Barribarto.',
    status: 'verified',
    sourceIds: ['ign-cartociudad-frigiliana-2026', 'turismo-frigiliana-ruta-iglesia-santo-cristo-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'Do not describe the house as "in the Barribarto"; "at the foot of the Barribarto lanes" or "on the Calle Real axis" is the supported wording. Its position inside the protected ensemble is a separate, verified fact.',
  },
  {
    id: 'frigiliana.barribarto.festival-market.lower-plazas',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement:
      'The Festival Frigiliana 3 Culturas market runs from the Plaza de las Tres Culturas to the Plaza del Ingenio via Calle San Sebastián and the Plaza Doña Amparo Guerrero; published venues in the old town include Calle Chorrera, the church, the Patio del Ayuntamiento (Cuesta del Apero 10), a "Mirador – Calle Santo Cristo" photocall and the Sala de Exposiciones at Calle Real 80.',
    status: 'verified',
    sourceIds: ['festival-3-culturas-conoce-2026', 'festival-3-culturas-espacios-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2027-03-13',
    volatility: 'high',
    claimBoundary: 'The venue list is not dated to an edition; the upper lanes are not named as stall areas. Complements the festival facts in festivals.ts; dates and format live there.',
  },
  {
    id: 'frigiliana.barribarto.santo-cristo.new-mirador-2021',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement: 'A new panoramic mirador and pedestrian path were built "en la zona alta del Santo Cristo" with a 2021 grant from the Consejería de Turismo (regional press, September 2022); the operator places it on Calle Santo Cristo, in the upper Moorish quarter near the chapel of the same name.',
    status: 'verified',
    sourceIds: ['axarquiaplus-mirador-santo-cristo-2022'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary: 'The grant and 2021/2022 dating are from the regional press; the location on Calle Santo Cristo is an operator first-party confirmation (2026-09-13), consistent with the "Mirador C/ Santo Cristo" named on the Callejón del Peñón page.',
  },
  {
    id: 'frigiliana.barribarto.castillo.outside-bic-inside-entorno',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement: 'The Castillo de Lizar stands outside the delimited Conjunto Histórico but inside its entorno, and is a Bien de Interés Cultural in its own right.',
    status: 'verified',
    sourceIds: ['boja-decreto-183-2014-barribarto', 'wikidata-frigiliana-items-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2030-09-13',
    volatility: 'low',
    claimBoundary: 'Complements frigiliana.castillo-lizar.bic.1985; the decree cites the third additional provision of Ley 14/2007 for the castle’s status.',
  },
  {
    id: 'frigiliana.barribarto.whitewash.municipal-no-bye-law-statement',
    subject: 'frigiliana',
    topic: 'barribarto',
    statement: 'The municipal English Barribarto page states that the houses are whitewashed by habit each spring and that no bye-law enforces it.',
    status: 'verified',
    sourceIds: ['turismo-frigiliana-the-barribarto-en-2026'],
    checkedAt: '2026-09-13',
    reviewAfter: '2028-09-13',
    volatility: 'medium',
    claimBoundary:
      'Verified as a municipal statement. It sits beside the BIC conservation conditions cited by frigiliana.heritage.exterior-coatings.white and the unsourced "1971 law" of travel blogs; which basis governs is an open question, and the hub’s "Weiß ist Vorschrift" must rest on the decree wording.',
  },
] as const satisfies readonly BarribartoFactInput[];

export const frigilianaBarribartoFacts = defineKnowledgeFacts(facts);

export type FrigilianaBarribartoFactId = (typeof frigilianaBarribartoFacts)[number]['id'];
