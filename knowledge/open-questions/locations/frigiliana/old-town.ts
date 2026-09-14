import { defineKnowledgeOpenQuestions } from '../../../schema';

/**
 * Open questions of the Frigiliana old-town cluster that no single spoke owns.
 * Raised by the three 2026-09-13 runs (search intent, Barribarto entity,
 * Calle Real & Barribajo) and to be closed by the decree text, the municipal
 * record or the operator on site. Position questions block the old-town map.
 */
export const frigilianaOldTownOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.old-town.question.calle-chorruelo-inside-bic-delimitation',
    subject: 'frigiliana',
    topic: 'old-town-history-walk',
    question:
      'Does Calle Chorruelo, the street of Casa AMARA (no. 5), lie inside the sector delimited as Conjunto Histórico by Decreto 183/2014?',
    priority: 'high',
    reason:
      'A verified position inside the protected ensemble is a truthful host angle for the stay pages and the old-town map; an assumed one is not.',
    preferredEvidence:
      'The delimitation text and parcel list annexed to Decreto 183/2014 (BOJA 2015/23), read against the Catastro reference of the house.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.white-facade-rule-basis',
    subject: 'frigiliana',
    topic: 'old-town-history-walk',
    question:
      'On what basis is the white exterior treatment maintained: the conservation conditions of the 2014 BIC declaration (as the hub states), a municipal ordinance such as the widely repeated "1971 law", or a custom without bye-law as the municipal Barribarto page states?',
    priority: 'high',
    reason:
      'Resolved 2026-09-13 (operator, first-party): the white finish is old local custom, not a standalone abstract law and not the widely repeated 1971 bye-law; the municipal ordinances (ordenanzas municipales) for the protected Conjunto Histórico uphold it strictly. The hub text was refined from "conservation conditions" to name the custom-plus-ordinance basis; the 1971-law claim is discarded.',
    preferredEvidence:
      'Operator local knowledge (2026-09-13); corroborated by the Frigiliana ordenanzas for the conjunto histórico. The municipal ordinance text can still be attached for a source id.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.ceramic-panels.question.installation-date-conflict',
    subject: 'frigiliana',
    topic: 'ceramic-panels',
    question:
      'When were the twelve ceramic panels installed: 1982 (Spanish Wikipedia and the AMARA fact frigiliana.ceramic-panels.installation.1982-beautification) or the 1960s as the municipal panels page states, and how does a Navas Acosta publication dated 1995 relate to the texts on panels dated 1982?',
    priority: 'medium',
    reason:
      'Resolved 2026-09-13 (operator, first-party): the panel series was installed in 1982 as part of the beautification under the then mayor; the "late 1970s / 1980s" wording reflects the planning phase, and the "1960s" on one municipal page is discarded. Confirms the AMARA fact frigiliana.ceramic-panels.installation.1982-beautification; no content change needed.',
    preferredEvidence:
      'Operator local knowledge (2026-09-13); consistent with Spanish Wikipedia. The municipal Premio record can still be attached for a source id.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.castillo-lizar.question.hill-name',
    subject: 'frigiliana',
    topic: 'castillo-lizar',
    question:
      'What is the documented name of the hill carrying the Castillo de Lizar ruins: Cerro de Lízar, Cerro de la Sabina, or another toponym?',
    priority: 'low',
    reason:
      'Resolved 2026-09-13 (operator, first-party): the hill is the Cerro de la Sabina; the ruin on it is the Castillo de Lízar / Castillo de Frigiliana. The Castillo spoke was corrected from "Cerro de Lizar" to "Cerro de la Sabina" (keyFigures and prose, five languages). Consistent with the ranking-page usage and the Diputación’s "Peñón de la Sabina" for the rock.',
    preferredEvidence:
      'Operator local knowledge (2026-09-13); corroborated by secondary sources. The IGN Nomenclátor entry can still be attached for a source id.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.fuente-vieja-position',
    subject: 'frigiliana',
    topic: 'fuente-vieja',
    question:
      'Which position of the Fuente Vieja is right: the OpenStreetMap node and the Wikidata plaza item at about 36.79335, -3.89928 (also the operator pin and the public page geo node), or the fountain inventory’s own ETRS89 UTM reading, which converts to 36.794175, -3.899355, about 90 m further north along Calle Chorruelo?',
    priority: 'high',
    reason:
      'The public page and the planned old-town map carry one coordinate; the fact frigiliana.fuente-vieja.location.coordinates claimed the inventory UTM matched the pin, which it does not. The ficha’s own text ("en la plaza del mismo nombre, travesía de la calle Chorruelo") and the decree boundary crossing the Plaza de la Fuente support the southern position.',
    preferredEvidence:
      'A GPS fix at the fountain by the operator, plus the Catastro or IECA street map; then correct the inventory-derived Wikidata item or the AMARA fact.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.reales-positos-position',
    subject: 'frigiliana',
    topic: 'reales-positos',
    question:
      'Where exactly are the Reales Pósitos and which street is their frontage: Calle Real no. 1 (OpenStreetMap address node 36.7914771, -3.8956076; municipal itinerary), or Calle Hernando el Darra as the public spoke states with a coordinate about 100 m to the west?',
    priority: 'high',
    reason:
      'The knowledge fact says Calle Real, the public spoke says Hernando el Darra with a different coordinate; a map with both nodes would expose the gap. The corner building may be addressed from either street.',
    preferredEvidence:
      'A GPS fix at the brick arches by the operator and the Catastro address of the building.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.ermita-ecce-homo-position',
    subject: 'frigiliana',
    topic: 'ermita-ecce-homo',
    question:
      'Where exactly is the Ermita del Ecce Homo (Santo Cristo de la Caña)?',
    priority: 'high',
    reason:
      'Resolved by the operator on-site GPS fix (2026-09-13): the chapel stands at 36.795405, -3.900596, at the far end of Calle Chorruelo by Calle Rosarico la Joaquín — within about 1 m of the OpenStreetMap node and consistent with the municipal route. An earlier operator point 640 m to the south-east (36.788478, -3.894949) was a mis-capture and is discarded. The spoke coordinate and the "far end of Calle Chorruelo" location text are confirmed.',
    preferredEvidence:
      'Operator on-site GPS fix (confirmed 2026-09-13).',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.ayuntamiento-seat-vs-casa-consistorial',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    question:
      'Is the administrative seat of the Ayuntamiento at Cuesta del Apero 10 (official contact address), and what is the building on the Calle Real "plazuela" (Calle Real 80, opposite El Torreón) that tourism pages and directories still call the current town hall?',
    priority: 'medium',
    reason:
      'Resolved 2026-09-13 (operator, first-party): the official main building and public front desk of the Ayuntamiento is at Cuesta del Apero 10 (by the Casa del Apero). The Calle Real "plazuela" building is the historic Casa Consistorial and no longer the administrative seat; the tourism route text that calls it "el actual ayuntamiento" is outdated. Confirms the fact frigiliana.calle-real.ayuntamiento.seat-cuesta-del-apero-10.',
    preferredEvidence:
      'Operator local knowledge (2026-09-13); official contact address frigiliana.es.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.adarves-in-decree-sense',
    subject: 'frigiliana',
    topic: 'barribarto',
    question:
      'Which of the eleven municipally named adarves are adarves in the decree’s sense — dead-end or semi-private passages entered openly or through an algorfa — and which are ordinary stepped lanes?',
    priority: 'medium',
    reason:
      'Resolved 2026-09-13 (operator, first-party): almost all eleven named adarves are classic dead-ends — mostly angled, half-private cul-de-sacs serving clusters of houses — not public through-streets across the historic core. The Barribarto page was updated from "some are public thoroughfares" to "almost all are dead-ends, half-private cul-de-sacs".',
    preferredEvidence:
      'Operator local knowledge (2026-09-13); consistent with the decree’s definition of the adarve. Per-lane entry type (open vs through an algorfa) can still be recorded on a first-hand walk.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.santo-cristo-mirador-2021-location',
    subject: 'frigiliana',
    topic: 'barribarto',
    question:
      'Where is the new panoramic mirador and pedestrian path "en la zona alta del Santo Cristo" built with the 2021 Consejería de Turismo grant: on Calle Santo Cristo, or above the Ermita del Santo Cristo?',
    priority: 'low',
    reason: 'Resolved 2026-09-13 (operator, first-party): the 2021 mirador is on Calle Santo Cristo, in the upper Moorish quarter near the Ermita/chapel of the same name — consistent with the "Mirador C/ Santo Cristo" that the Callejón del Peñón page already names as a neighbour of the lane.',
    preferredEvidence: 'Operator local knowledge (2026-09-13). The BOJA subsidy resolution can still be attached for a source id.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.chorruelo-etymology',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    question: 'What is the origin of the street name "Chorruelo"?',
    priority: 'low',
    reason: 'Resolved 2026-09-14 (operator, first-party): "Chorruelo" is the diminutive of "chorro" (a jet or trickle of water) — a "little water jet / small spring". The local account ties it to the Fuente Vieja on its plaza just off the street, whose spouts gave the lane its name; Calle Chorruelo was once the uppermost street of the village, and today it is the cobbled continuation of Calle Real past the Fuente Vieja and the Tres Culturas sculpture.',
    preferredEvidence: 'Operator local knowledge (2026-09-14). The chorro/-uelo derivation is standard Spanish; the fountain-name link is the local account, not an independent documentary source.',
    status: 'resolved',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.soledad-procession-night',
    subject: 'frigiliana',
    topic: 'festivals',
    question: 'On which night does the Procesión de la Soledad pass through the Barribarto by candlelight: the Viernes de Dolores (Junta agenda, frigiliana.es) or after the Santo Sepulcro on Viernes Santo (turismofrigiliana.es)?',
    priority: 'low',
    reason: 'Resolved 2026-09-13 (operator, first-party): the Procesión de la Soledad passes through the Barribarto by candlelight on the Viernes de Dolores (the Friday before Holy Week), late evening toward midnight — matching the Junta agenda and frigiliana.es, against the Viernes Santo sequencing on turismofrigiliana.es. No public page currently states the night; it can be named as Viernes de Dolores if used.',
    preferredEvidence: 'Operator local knowledge (2026-09-13); Junta Agenda Cultural.',
    status: 'resolved',
    createdAt: '2026-09-13'
  }
] as const);
