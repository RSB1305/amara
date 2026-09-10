import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaNightlifeSourceId } from '../../../sources/locations/nerjaNightlifeSources';

type SourceId = NerjaNightlifeSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'nerja.nightlife.centre-concentration', subject: 'nerja', topic: 'nightlife',
    statement: 'Nerja\'s nightlife concentrates mainly in the town centre, especially around Plaza Tutti Frutti (including Calle Antonio Millón), where many bars and small clubs cluster.',
    status: 'partially-verified', sourceIds: ['vacaciones-espana-nerja-nightlife-2018'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'low',
    claimBoundary: 'Location/focus of the scene; individual venues around the plaza are volatile and change frequently. Source is a travel guide, not official.',
  },
  {
    id: 'nerja.nightlife.lively-seasonal', subject: 'nerja', topic: 'nightlife',
    statement: 'Nerja has a generally lively nightlife that is strongly frequented in summer and much quieter outside the season.',
    status: 'partially-verified', sourceIds: ['vacaciones-espana-nerja-nightlife-2018'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Qualitative, seasonal character from a 2018 promotional source; not a measure of current intensity on any given night.',
  },
  {
    id: 'nerja.nightlife.summer-late-events', subject: 'nerja', topic: 'nightlife',
    statement: 'In summer the town runs seafront live-music events (e.g. a Playa de Burriana celebration) that can run until about 03:00, showing high-season parties and concerts can continue into the early hours.',
    status: 'verified', sourceIds: ['nerja-ayuntamiento-burriana-music-2026'], checkedAt: '2026-09-10', reviewAfter: '2027-05-10', volatility: 'medium',
    claimBoundary: 'A specific municipal event example, not a permanent schedule; event dates and end times vary year to year.',
  },
  {
    id: 'nerja.nightlife.cochrans-live-music', subject: 'nerja', topic: 'nightlife',
    statement: 'Cochran\'s Irish Pub (Calle Salón, near the Balcón de Europa) is an established live-music pub, with international pop/rock on its sea-view terrace on Friday and Saturday evenings (from about 22:30).',
    status: 'partially-verified', sourceIds: ['vacaciones-espana-nerja-nightlife-2018'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Venue-level and volatile; live-music nights and times can change or stop. See also the first-party Cochran\'s sundowner record under nerja.evenings.cochrans.*.',
  },
  {
    id: 'nerja.nightlife.flamenco-venues', subject: 'nerja', topic: 'nightlife',
    statement: 'El Burro Blanco (Calle Gloria) and El Molino (Calle San José) are named fixtures for flamenco and traditional Spanish music evenings in Nerja.',
    status: 'partially-verified', sourceIds: ['vacaciones-espana-nerja-nightlife-2018'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Venue-level; programmes and operation vary and are from a travel-guide source, not confirmed current.',
  },
  {
    id: 'nerja.nightlife.buddha-lounge', subject: 'nerja', topic: 'nightlife',
    statement: 'Buddha Lounge Bar (Calle de la Gloria) offers a rooftop terrace with cocktails and international food in a relaxed atmosphere.',
    status: 'partially-verified', sourceIds: ['esnerja-nightlife-directory'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'From an operator/advertising listing; does not confirm current operation, hours or atmosphere.',
  },
  {
    id: 'nerja.nightlife.rooftop-sunset-terraces', subject: 'nerja', topic: 'nightlife',
    statement: 'Several Nerja bars have sea-view rooftop terraces that are popular at sunset (e.g. Cochran\'s Irish Pub, Buddha Lounge).',
    status: 'partially-verified', sourceIds: ['vacaciones-espana-nerja-nightlife-2018', 'esnerja-nightlife-directory'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'low',
    claimBoundary: 'General character; named venues remain volatile.',
  },
  {
    id: 'nerja.nightlife.hours-seasonal', subject: 'nerja', topic: 'nightlife',
    statement: 'Opening hours vary strongly by season: high-season venues and events can run very late (a summer event ran to 03:00), while off-season many venues close much earlier or shut entirely.',
    status: 'partially-verified', sourceIds: ['nerja-ayuntamiento-burriana-music-2026', 'vacaciones-espana-nerja-nightlife-2018'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'high',
    claimBoundary: 'No guaranteed late hours for any venue; hours are seasonal and per-venue — route to live sources. No municipal closing-time ordinance is established here.',
  },
  {
    id: 'nerja.nightlife.h2o-family-beach-bar', subject: 'nerja', topic: 'nightlife',
    statement: 'The H2O beach bar-restaurant on Playa de Burriana is a relaxed, family-friendly beach bar suited to easy evenings after a beach day.',
    status: 'partially-verified', sourceIds: ['vacaciones-espana-nerja-nightlife-2018'], checkedAt: '2026-09-10', reviewAfter: '2027-03-10', volatility: 'medium',
    claimBoundary: 'Venue-level from a travel-guide source; highlights the calmer, family end of the scene, not confirmed current operation.',
  },
] as const satisfies readonly FactInput[];

export const nerjaNightlifeFacts = defineKnowledgeFacts(facts);
export type NerjaNightlifeFactId = (typeof nerjaNightlifeFacts)[number]['id'];
