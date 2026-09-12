import { defineKnowledgeSources } from '../../schema';

export const casaAmaraPropertySources = defineKnowledgeSources([
  {
    id: 'casa-amara-operator-confirmation-2026-08-27',
    title: 'Casa AMARA property and access confirmation',
    publisher: 'AMARA Lodging',
    sourceType: 'first-party-observation',
    locator: 'Operator confirmations supplied in the active Codex task on 2026-08-27.',
    observedAt: '2026-08-27',
    language: 'de',
    scope: 'Casa AMARA accommodation types, shared entrance, internal-step distinction, Calle Chorruelo/Calle Real position and terrace amenities for Lounis, Zaid and Maha.',
    limitations: 'First-party operational knowledge. It is not an accessibility assessment, a measured comparison with every Frigiliana accommodation or a guarantee of seasonal light and sunset conditions.',
    reuse: 'internal-only'
  },
  {
    id: 'casa-amara-operator-confirmation-2026-08-30',
    title: 'Operator confirmation, 30 August 2026',
    publisher: 'AMARA Lodging',
    sourceType: 'operator-provided',
    url: 'internal://operator-confirmation/2026-08-30',
    accessedAt: '2026-08-30',
    language: 'de',
    scope: 'Direct statements by the operator about what the accommodations provide.',
    limitations:
      'A first-party statement, not an audited inventory. It describes standing practice at the time of confirmation and can change; it should be re-confirmed rather than assumed for future seasons.',
    reuse: 'internal-only',
  },
  {
    id: 'casa-amara-operator-confirmation-2026-09-11',
    title: 'Operator confirmation, 11 September 2026',
    publisher: 'AMARA Lodging',
    sourceType: 'operator-provided',
    url: 'internal://operator-confirmation/2026-09-11',
    accessedAt: '2026-09-11',
    language: 'de',
    scope: 'Direct operator statements on summer cooling (air conditioning in the bedroom, exterior shutters, thick old-town walls), terrace orientation (southwest) and per-apartment sun timing, terrace shade structures, the winter pellet service (pellets delivered to the apartment and included in the price) and fast fibre internet for the Frigiliana accommodations.',
    limitations:
      'A first-party statement, not an audited inventory or a measured light study. It describes standing equipment and typical light at the time of confirmation and can change; sun timing is an approximate personal observation, not a guarantee for any date or season.',
    reuse: 'internal-only',
  },
] as const);

export type CasaAmaraPropertySourceId = (typeof casaAmaraPropertySources)[number]['id'];
