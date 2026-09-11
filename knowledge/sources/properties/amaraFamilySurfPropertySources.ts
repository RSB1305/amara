import { defineKnowledgeSources } from '../../schema';

export const amaraFamilySurfPropertySources = defineKnowledgeSources([
  {
    id: 'amara-family-surf-operator-confirmation-2026-09-11',
    title: 'AMARA Family & Surf (Tarifa) operator confirmation, 11 September 2026',
    publisher: 'AMARA Lodging',
    sourceType: 'operator-provided',
    url: 'internal://operator-confirmation/2026-09-11',
    accessedAt: '2026-09-11',
    language: 'de',
    scope: 'Direct operator statements about the Tarifa apartment AMARA Family & Surf: a private west-facing balcony (not a terrace) with a fixed wooden canopy, air conditioning, fast fibre internet, a wood-burning fireplace with starter firewood and step-free garage-to-door resupply, and the temperature of the Atlantic off Tarifa.',
    limitations:
      'A first-party statement, not an audited inventory or a measured oceanographic series. Orientation is approximate operator knowledge, not a surveyed bearing; the sea-temperature figure is an operator estimate of a general tendency; equipment can change and should be re-confirmed for future seasons.',
    reuse: 'internal-only',
  },
] as const);

export type AmaraFamilySurfPropertySourceId = (typeof amaraFamilySurfPropertySources)[number]['id'];
