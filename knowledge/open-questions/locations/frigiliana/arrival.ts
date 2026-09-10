import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaArrivalOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.arrival.question.exact-unload-point',
    subject: 'frigiliana',
    topic: 'arrival',
    question: 'Which concrete, legally safe and practical street point can a normal guest car use to briefly stop and unload at each AMARA stay?',
    priority: 'high',
    reason: 'The legal basis for a short stop is clarified, but no specific signed spot per accommodation is established; a carga y descarga zone must not be reused as a guest suitcase zone.',
    preferredEvidence: 'On-site check of current signage + photo/coordinate + a test with a normal car; Policía Local confirmation when in doubt.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.arrival.question.property-last-mile',
    subject: 'frigiliana',
    topic: 'arrival',
    question: 'What is the real last-mile profile from the vehicle endpoint to each AMARA door: metres, net elevation, steepest gradient, number/position of steps, surface, pinch points, lighting, wheeled-luggage suitability and mobility limit?',
    priority: 'high',
    reason: 'Without a first-party measurement any "5 minutes / easy walk" statement is incomplete and risks false precision.',
    preferredEvidence: 'AMARA first-party route measurement per arrival route.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.arrival.question.nerja-boarding-curb',
    subject: 'frigiliana',
    topic: 'arrival',
    question: 'Do the airport/ALSA arrival and the Frigiliana-line departure in Nerja use the same point, or are they a few minutes apart?',
    priority: 'medium',
    reason: 'The Ayuntamiento links a point near 36.75114/-3.87747 while ALSA/Turespaña give the intercity station at Av. de Pescia s/n.',
    preferredEvidence: 'One-off on-site verification / photos of the two stops.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.arrival.question.airport-nerja-by-travel-day',
    subject: 'frigiliana',
    topic: 'arrival',
    question: 'What is the actual airport→Nerja coach frequency for a given guest travel day?',
    priority: 'medium',
    reason: 'The line exists officially, but sources give no durable frequency matrix specifically from the airport; this is deliberately not a static fact.',
    preferredEvidence: 'A live ALSA query per guest date.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.arrival.question.bus-live-ssot',
    subject: 'frigiliana',
    topic: 'arrival',
    question: 'Is there a documented operator endpoint/API/PDF from Grupo Verano Azul itself for the current Nerja⇄Frigiliana timetable?',
    priority: 'medium',
    reason: 'The municipal timetable surface shows a caching/version problem; a single source of truth would stabilise live checks.',
    preferredEvidence: 'An operator-published timetable endpoint; until then, current Ayuntamiento announcement + live timetable page + operator phone as a triple check.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.arrival.question.taxi-app-coverage',
    subject: 'frigiliana',
    topic: 'arrival',
    question: 'Is there any dependable Uber/Bolt or app pickup coverage in Frigiliana itself?',
    priority: 'low',
    reason: 'No reliable evidence of app coverage in town; phone/pre-order is already sufficiently evidenced.',
    preferredEvidence: 'Documented provider coverage or repeated first-party tests.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.arrival.question.beach-mobility-beyond-maro',
    subject: 'frigiliana',
    topic: 'arrival',
    question: 'What is the current Frigiliana→Nerja-stop→Burriana/Torrecilla/Playazo connection by urban bus, on-foot or taxi?',
    priority: 'low',
    reason: 'Maro has a seasonal 2026 shuttle, but the precise onward beach connection from the Nerja stop is not yet mapped.',
    preferredEvidence: 'The current Nerja urban-bus route map plus an AMARA walk/taxi decision matrix.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.arrival.question.exceptional-days',
    subject: 'frigiliana',
    topic: 'arrival',
    question: 'How should stops and access be handled on exceptional days (feria, roadworks, heavy rain, local events)?',
    priority: 'low',
    reason: 'These can move stops or change access and need a day-of operational check rather than a new static fact.',
    preferredEvidence: 'A day-of operational check against Ayuntamiento / Policía Local for larger events.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
