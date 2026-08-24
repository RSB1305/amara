import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaGeographySourceId } from '../../../sources/locations/frigilianaGeographySources';
import type { FrigilianaHeritageHistoryCultureSourceId } from '../../../sources/locations/frigilianaHeritageHistoryCultureSources';

type HeritageStreetscapeSourceId =
  | FrigilianaGeographySourceId
  | FrigilianaHeritageHistoryCultureSourceId;

type HeritageStreetscapeFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly HeritageStreetscapeSourceId[];
};

const facts = [
  {
    id: 'frigiliana.heritage.historic-ensemble.bic',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'Decree 183/2014 entered the delimited historic sector of Frigiliana in the Andalusian Historic Heritage Catalogue as a Bien de Interés Cultural in the Historic Ensemble category.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'The designation applies to the delimited historic sector and its protected setting, not automatically to every building in the municipality.',
  },
  {
    id: 'frigiliana.heritage.morisco-tradition.preservation',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'The official heritage description identifies Frigiliana’s historic centre as one of the best-preserved urban enclaves of Morisco tradition on the Iberian Peninsula.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'This is the Junta de Andalucía’s heritage assessment of the protected centre, not an objective ranking of the entire modern municipality.',
  },
  {
    id: 'frigiliana.heritage.exterior-view.compact-white-mass',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'From outside, the protected historic centre is officially described as a compact white mass of buildings set against a natural background.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'The statement describes the protected ensemble’s landscape effect; it does not mean every façade or modern development appears identical.',
  },
  {
    id: 'frigiliana.heritage.streets.adarves-algorfas',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'Frigiliana’s protected historic fabric contains numerous adarves—threshold spaces between public and private—and algorfas, including covered passages into some of those spaces.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'This urban-form description does not make every lane or residential threshold a public attraction; resident privacy and current access still govern use.',
  },
  {
    id: 'frigiliana.heritage.exterior-coatings.white',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'The BIC maintenance instructions require replacement or repair of exterior renders and coatings to preserve their characteristics, including a white colour.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2028-08-24',
    volatility: 'medium',
    claimBoundary:
      'This is a rule for the protected ensemble’s covered maintenance work; it is not a blanket statement about every structure in the municipality.',
  },
  {
    id: 'frigiliana.heritage.woodwork.original-colour',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'When deteriorated exterior wooden joinery is repaired or replaced under the BIC maintenance instructions, its original dimensions, design, colour and materials must be respected.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2028-08-24',
    volatility: 'medium',
    claimBoundary:
      'The instruction preserves each original element; it does not prescribe one universal blue, turquoise or other door colour for the village.',
  },
  {
    id: 'frigiliana.heritage.san-antonio.baroque',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'The Church of San Antonio is a restrained Baroque building completed in the last third of the seventeenth century under Bernardo de Godoy.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'The official heritage classification supersedes generic descriptions of the church as a Renaissance building.',
    supersedes: ['frigiliana.heritage.san-antonio.renaissance'],
  },
  {
    id: 'frigiliana.heritage.ingenio.origin-and-adaptation',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'El Ingenio dates from the late sixteenth century, was conceived as the Manrique de Lara family residence and was later adapted for cane-sugar production.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'The building history does not establish present public access, production schedules or the source of current raw materials.',
  },
  {
    id: 'frigiliana.heritage.beauty-recognition.association-and-1982-award',
    subject: 'frigiliana',
    topic: 'heritage-streetscape',
    statement:
      'Frigiliana is represented by the Los Pueblos Más Bonitos de España association, whose village page also records a national beautification award in 1982.',
    status: 'verified',
    sourceIds: ['beautiful-villages-association-frigiliana-2026'],
    checkedAt: '2026-08-24',
    reviewAfter: '2028-08-24',
    volatility: 'medium',
    claimBoundary:
      'Association recognition and an award support attributed reputation; they do not prove an objective universal claim that Frigiliana is one of Spain’s most beautiful villages.',
  },
] as const satisfies readonly HeritageStreetscapeFactInput[];

export const frigilianaHeritageStreetscapeFacts = defineKnowledgeFacts(facts);

export type FrigilianaHeritageStreetscapeFactId =
  (typeof frigilianaHeritageStreetscapeFacts)[number]['id'];
