import { defineKnowledgeSources } from '../../schema';

export const amaraPlayaPropertySources = defineKnowledgeSources([
  {
    id: 'amara-playa-operator-confirmation-2026-09-11',
    title: 'AMARA Playa (Nerja) operator confirmation, 11 September 2026',
    publisher: 'AMARA Lodging',
    sourceType: 'operator-provided',
    url: 'internal://operator-confirmation/2026-09-11',
    accessedAt: '2026-09-11',
    language: 'de',
    scope: 'Direct operator statements about the Nerja apartment AMARA Playa: a private west-facing balcony with a side sea view and an awning, air conditioning, and the nearby Torrecilla beach (flat, southwest-facing, long winter sun), and fast fibre internet.',
    limitations:
      'A first-party statement, not an audited inventory or a surveyed bearing. Orientation and the Torrecilla winter-sun observation are approximate operator knowledge, not measured; distances are rounded; equipment can change and should be re-confirmed for future seasons.',
    reuse: 'internal-only',
  },
] as const);

export type AmaraPlayaPropertySourceId = (typeof amaraPlayaPropertySources)[number]['id'];
