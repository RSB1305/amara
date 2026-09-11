import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaSanAntonioSourceId } from '../../../sources/locations/frigilianaSanAntonioSources';

type SanAntonioFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly FrigilianaSanAntonioSourceId[];
};

const facts = [
  {
    id: 'frigiliana.san-antonio.build.1676-on-ermita',
    subject: 'frigiliana',
    topic: 'san-antonio',
    statement:
      'The present parish church of San Antonio de Padua was built in 1676 on the site of an earlier hermitage (ermita) in the lower old town, beside Calle Real.',
    status: 'verified',
    sourceIds: ['diputacion-malaga-san-antonio-2026', 'boja-frigiliana-historic-ensemble-2015-san-antonio'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The 1676 build and the earlier-hermitage origin are documented; the hermitage’s own dating is not fixed here.',
  },
  {
    id: 'frigiliana.san-antonio.builder.godoy-signed-beam',
    subject: 'frigiliana',
    topic: 'san-antonio',
    statement:
      'The master builder was Bernardo de Godoy, whose signed roof beam reads “Bernardo de Godoy Maestro Maior me fesi desde cimientos año de 1676 años”.',
    status: 'partially-verified',
    sourceIds: ['frigiliana-info-san-antonio-2026', 'boja-frigiliana-historic-ensemble-2015-san-antonio'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The attribution to Godoy is documented; the beam inscription is reported by local heritage sources and quoted as such, not verified in situ.',
  },
  {
    id: 'frigiliana.san-antonio.promoter.bishop-santo-tomas',
    subject: 'frigiliana',
    topic: 'san-antonio',
    statement:
      'The church was promoted under Fray Alonso de Santo Tomás, Bishop of Málaga, whose coat of arms appears on the entrance façade.',
    status: 'partially-verified',
    sourceIds: ['diputacion-malaga-san-antonio-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The bishop’s patronage and the façade coat of arms are attributed to the provincial heritage record; the identification of the arms is not independently re-verified.',
  },
  {
    id: 'frigiliana.san-antonio.plan.latin-cross-armadura',
    subject: 'frigiliana',
    topic: 'san-antonio',
    statement:
      'It has a Latin-cross plan with three naves separated by semi-circular arches, and a Mudéjar-tradition timber roof (armadura).',
    status: 'verified',
    sourceIds: ['diputacion-malaga-san-antonio-2026'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'The plan, arcades and timber roof are documented; the Mudéjar timber tradition is a construction feature and does not change the building’s overall Baroque classification.',
  },
  {
    id: 'frigiliana.san-antonio.style.baroque-classification',
    subject: 'frigiliana',
    topic: 'san-antonio',
    statement:
      'Its official heritage classification is a restrained Baroque building of the last third of the seventeenth century, superseding earlier descriptions of it as Renaissance.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015-san-antonio'],
    checkedAt: '2026-09-11',
    reviewAfter: '2030-09-11',
    volatility: 'low',
    claimBoundary:
      'Interior access, service times and any role in a specific feria are live details, not part of this classification.',
  },
] as const satisfies readonly SanAntonioFactInput[];

export const frigilianaSanAntonioFacts = defineKnowledgeFacts(facts);

export type FrigilianaSanAntonioFactId = (typeof frigilianaSanAntonioFacts)[number]['id'];
