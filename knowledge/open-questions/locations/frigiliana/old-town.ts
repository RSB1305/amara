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
      'The public hub says "Weiß ist Vorschrift" on the strength of the BIC conservation conditions, while the municipal tourism page says there is no bye-law and blogs repeat an unsourced 1971 law. The hub claim must rest on the decree wording, not on either popular version.',
    preferredEvidence:
      'The instrucciones particulares of Decreto 183/2014 and the Frigiliana planning rules for the conjunto histórico (PGOU / normas urbanísticas); the municipal ordinance register for any 1971 rule.',
    status: 'open',
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
      'The public panels page states the 1982 installation as verified; a municipal page read during the search-intent run gives the 1960s and cites a 1995 book for the texts. A snippet does not overturn the fact, but the conflict must be closed at the source.',
    preferredEvidence:
      'The municipal record of the Premio Nacional de Embellecimiento 1982 or the acta of the installation; the bibliography of Antonio Navas Acosta (first edition of the panel texts).',
    status: 'open',
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
      'The Castillo spoke places the ruins "auf dem Cerro de Lizar"; ranking pages use "Cerro de la Sabina", and the Diputación names the Peñón de la Sabina as the rock below the castle. A proper noun on a landmark page must match the official toponym.',
    preferredEvidence:
      'IGN Nomenclátor Geográfico, the 1985 BIC record of the castle and the Spanish Wikipedia article Castillo de Frigiliana with its sources.',
    status: 'open',
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
    status: 'open',
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
    status: 'open',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.ermita-ecce-homo-position',
    subject: 'frigiliana',
    topic: 'ermita-ecce-homo',
    question:
      'Where exactly is the Ermita del Ecce Homo: at the end of Calle Chorruelo by Calle Rosarico la Joaquín (OpenStreetMap 36.7953972, -3.9006033; about 300 m beyond the end of Chorruelo per the municipal itinerary), or at the public spoke’s coordinate 36.793750, -3.898850 near the church, and what is the real walking distance from Casa AMARA?',
    priority: 'high',
    reason:
      'The two positions are about 250 m apart; the spoke’s "three minutes on the flat" from Casa AMARA and the Fuente Vieja spoke’s "beside the Ermita" both depend on the answer.',
    preferredEvidence:
      'A GPS fix and a measured walk by the operator; the Catastro address of the chapel.',
    status: 'open',
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
      'The two sites are about 400 m apart; a page that says "the town hall" must point to the right building, and the festival lists both a "Patio del Ayuntamiento" at Cuesta del Apero 10 and a "Sala de Exposiciones" at Calle Real 80.',
    preferredEvidence:
      'The sede electrónica or a BOP/BOJA notice giving the seat; a plenary-session acta header naming the venue; a first-hand look at both façades.',
    status: 'open',
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
      'A Barribarto page that explains the adarve must not label a public through-lane as semi-private, nor send guests into a passage that serves only its houses.',
    preferredEvidence:
      'The IAPH record i24352 or the PGOU catalogue; failing that, a first-hand walk noting entry type and whether the lane continues.',
    status: 'open',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.santo-cristo-mirador-2021-location',
    subject: 'frigiliana',
    topic: 'barribarto',
    question:
      'Where is the new panoramic mirador and pedestrian path "en la zona alta del Santo Cristo" built with the 2021 Consejería de Turismo grant: on Calle Santo Cristo, or above the Ermita del Santo Cristo?',
    priority: 'low',
    reason: 'A named, recent viewpoint is worth a sentence on the Callejón or Barribarto page only if its position is known.',
    preferredEvidence: 'The Ayuntamiento press note or the BOJA subsidy resolution; then a first-hand visit.',
    status: 'open',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.chorruelo-etymology',
    subject: 'frigiliana',
    topic: 'calle-real-barribajo',
    question: 'What is the origin of the street name "Chorruelo"?',
    priority: 'low',
    reason: 'A one-line answer would suit the Calle Real page and the stay pages; no reached source explains it, and a "chorrillo" snippet most likely concerns the neighbouring Calle Chorrera.',
    preferredEvidence: 'Malagapedia (under maintenance on 2026-09-13), the municipal archive, or a local street-name study.',
    status: 'open',
    createdAt: '2026-09-13'
  },
  {
    id: 'frigiliana.old-town.question.soledad-procession-night',
    subject: 'frigiliana',
    topic: 'festivals',
    question: 'On which night does the Procesión de la Soledad pass through the Barribarto by candlelight: the Viernes de Dolores (Junta agenda, frigiliana.es) or after the Santo Sepulcro on Viernes Santo (turismofrigiliana.es)?',
    priority: 'low',
    reason: 'Two municipal pages disagree; the old-town page may name the procession only with the right night.',
    preferredEvidence: 'The current Semana Santa programme published by the Ayuntamiento or the Agrupación de Cofradías for the year in question.',
    status: 'open',
    createdAt: '2026-09-13'
  }
] as const);
