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
  }
] as const);

export type CasaAmaraPropertySourceId = (typeof casaAmaraPropertySources)[number]['id'];
