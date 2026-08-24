import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaGeographySourceId } from '../../../sources/locations/frigilianaGeographySources';
import type { FrigilianaHeritageHistoryCultureSourceId } from '../../../sources/locations/frigilianaHeritageHistoryCultureSources';

type HistoryCultureSourceId =
  | FrigilianaGeographySourceId
  | FrigilianaHeritageHistoryCultureSourceId;

type HistoryCultureFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly HistoryCultureSourceId[];
};

const facts = [
  {
    id: 'frigiliana.history.muslim-civilization.deepest-urban-imprint',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement:
      'The official heritage record says Muslim civilization left the deepest imprint on Frigiliana’s urban landscape and immediate surroundings.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'This heritage assessment concerns visible landscape formation and does not erase earlier Neolithic, Phoenician or Roman layers.',
  },
  {
    id: 'frigiliana.history.forced-christianization-and-1500-revolt',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement:
      'According to the official heritage history, imposed Christianization after the conquest led to the Mudéjar uprising of 1500, which was suppressed the following year and caused major demographic loss.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary: 'This is an official synthesis; detailed causation and local chronology may require archival scholarship.',
  },
  {
    id: 'frigiliana.history.morisco-uprising-expulsion-depopulation',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement:
      'The Morisco uprising of 1568, the violence at Cerro del Fuerte and the expulsion of the Moriscos in 1570 resulted in the complete depopulation of the settlement of Frigiliana, according to the BIC decree.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'The statement follows the official heritage synthesis and must not be softened into a generic tale of peaceful cultural succession.',
  },
  {
    id: 'frigiliana.history.castillo-lizar.destroyed-1569',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement:
      'Luis de Requesens ordered the Castillo de Lizar destroyed in 1569 so that it could not again serve as a refuge for insurgents; only limited wall remains survive.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary: 'The surviving site must not be presented as a substantially intact castle or palace.',
  },
  {
    id: 'frigiliana.history.repopulation-and-sugar-recovery',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement:
      'Repopulation began in the late sixteenth century and intensified after the territory became a county in 1630, alongside renewed house building, sugar-cane planting and establishment of a sugar mill.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'This describes post-expulsion recovery under new ownership and population structures, not unbroken demographic continuity.',
  },
  {
    id: 'frigiliana.history.villa-status-1640',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement: 'Frigiliana received the title of Villa and became independent from Vélez-Málaga in 1640.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary: 'This is a municipal-jurisdiction milestone, not the date of the settlement’s origin.',
  },
  {
    id: 'frigiliana.history.maymon-levi.taha-property-link',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement:
      'Academic research documents a property connection between the Jewish Andalusian figure Maymón Leví and the historic Taha of Frigiliana.',
    status: 'partially-verified',
    sourceIds: [
      'rah-maymon-levi-biography-2026',
      'moreno-nunez-maymon-levi-1998',
      'lopez-de-coca-jews-malaga-bishopric-2013',
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'Property in the historic Taha does not establish permanent residence in the present village, a synagogue, a resident Jewish community or harmonious three-faith coexistence.',
  },
  {
    id: 'frigiliana.culture.three-cultures-festival.first-edition-2006',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement: 'The first Festival Frigiliana 3 Culturas was held in 2006.',
    status: 'verified',
    sourceIds: ['frigiliana-municipality-festival-first-edition-2006'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'The festival’s founding date documents modern cultural programming, not medieval demographic evidence.',
  },
  {
    id: 'frigiliana.culture.three-cultures-festival.current-purpose',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement:
      'The festival’s official website describes it as a mix of celebration and culture that promotes Frigiliana through gastronomy, music, theatre and other activities.',
    status: 'verified',
    sourceIds: ['frigiliana-festival-three-cultures-official-2026'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-08-24',
    volatility: 'medium',
    claimBoundary:
      'This is the event’s current self-description; individual programmes, dates, venues and access arrangements are high-volatility information.',
  },
  {
    id: 'frigiliana.culture.three-cultures.modern-public-history',
    subject: 'frigiliana',
    topic: 'history-culture',
    statement:
      '“Three Cultures” is verifiable as a modern public-history and festival frame through which Frigiliana presents intercultural themes.',
    status: 'verified',
    sourceIds: [
      'frigiliana-festival-three-cultures-official-2026',
      'frigiliana-municipality-festival-first-edition-2006',
    ],
    checkedAt: '2026-08-24',
    reviewAfter: '2028-08-24',
    volatility: 'medium',
    claimBoundary:
      'The modern frame must not be rewritten as proof that permanent Muslim, Christian and Jewish communities coexisted harmoniously in the village.',
  },
] as const satisfies readonly HistoryCultureFactInput[];

export const frigilianaHistoryCultureFacts = defineKnowledgeFacts(facts);

export type FrigilianaHistoryCultureFactId = (typeof frigilianaHistoryCultureFacts)[number]['id'];
