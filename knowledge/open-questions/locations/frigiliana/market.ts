import { defineKnowledgeOpenQuestions } from '../../../schema';

export const frigilianaMarketOpenQuestions = defineKnowledgeOpenQuestions([
  {
    id: 'frigiliana.market.question.recurring-day',
    subject: 'frigiliana',
    topic: 'market',
    question: 'Which weekday is officially scheduled for the regular Frigiliana market in the current period, and does the rhythm hold year-round?',
    priority: 'high',
    reason: 'The weekly day repeated across travel blogs is not confirmed against current municipal evidence; a blog consensus is insufficient per the brief.',
    preferredEvidence: 'A current Ayuntamiento notice, a valid municipal authorization with market time, or a dated direct confirmation from the comercio/Policía Local office.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.market.question.hours-and-operation',
    subject: 'frigiliana',
    topic: 'market',
    question: 'What are the market start/end times, and does operation on individual dates vary seasonally?',
    priority: 'high',
    reason: 'No current time window is confirmed in the secured primary evidence.',
    preferredEvidence: 'Current municipal market information or a live confirmation; even then, treat the time as high volatility and never guarantee operation on a specific stay day.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.market.question.current-location-and-parking',
    subject: 'frigiliana',
    topic: 'market',
    question: 'Which area does the market actually use today, and how does that relate to visitor parking and the car-free old town?',
    priority: 'high',
    reason: 'Streets/squares named in secondary sources (e.g. Plaza de las Tres Culturas, Avenida Carlos Cano) are not confirmed as current by a municipal source.',
    preferredEvidence: 'A current municipal statement with street/square name, ideally a map or parking note, before any turn-by-turn guest guidance.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.market.question.goods-mix-and-audience',
    subject: 'frigiliana',
    topic: 'market',
    question: 'What share is produce/food vs. clothing, household goods, souvenirs or crafts, and how many vendors are local producers?',
    priority: 'medium',
    reason: 'The legal umbrella term "comercio ambulante" is too broad to characterise the offer.',
    preferredEvidence: 'Current trader categories from the authorization process plus, ideally, a recent on-site/photo record.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.market.question.weekly-vs-craft-event',
    subject: 'frigiliana',
    topic: 'market',
    question: 'Which recurring or seasonal craft markets does Frigiliana run in addition to the ordinary street market?',
    priority: 'medium',
    reason: 'Temporary craft/fiesta markets must be modelled as events, not as properties of the regular weekly market.',
    preferredEvidence: 'Separately dated Ayuntamiento / cultural-calendar entries.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.market.question.summer-vs-winter',
    subject: 'frigiliana',
    topic: 'market',
    question: 'Do only vendor numbers and footfall vary between summer and winter, or does the rhythm/location/operating time change seasonally?',
    priority: 'low',
    reason: 'Without evidence, AMARA must not store a blanket "bigger in summer" or "year-round" claim.',
    preferredEvidence: 'Several official listings from different seasons, or a municipal statement on year-round operation.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.market.question.amara-route',
    subject: 'frigiliana',
    topic: 'market',
    question: 'What is the real drive/walk/park route from a booked AMARA stay to the confirmed market area?',
    priority: 'low',
    reason: 'The stay origin and a confirmed current market point could not be joined in this run; an invented "X minutes by car" would breach the brief.',
    preferredEvidence: 'Confirmed stay origin from AMARA + confirmed current market point, then compute drive/walk time and parking.',
    status: 'open',
    createdAt: '2026-09-10'
  },
  {
    id: 'frigiliana.market.question.nerja-plan-b',
    subject: 'frigiliana',
    topic: 'market',
    question: 'What is the current day/time/location of a Nerja market usable as the Plan B when the Frigiliana day does not fit a stay?',
    priority: 'low',
    reason: 'A Nerja market day was not sufficiently verified in this run; the often-published Nerja weekly-market weekday must not be used unchecked.',
    preferredEvidence: 'Ayuntamiento de Nerja / municipal comercio or turismo page with current day, time and location; until then the existing supermarkets facts are the more reliable date-independent Plan B.',
    status: 'open',
    createdAt: '2026-09-10'
  }
] as const);
