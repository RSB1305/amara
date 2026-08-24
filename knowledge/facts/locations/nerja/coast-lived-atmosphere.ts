import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaAtmosphereSourceId } from '../../../sources/locations/nerjaAtmosphereSources';
import type { NerjaNatureCoastSourceId } from '../../../sources/locations/nerjaNatureCoastSources';

type SourceId = NerjaAtmosphereSourceId | NerjaNatureCoastSourceId;
type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly SourceId[] };

const facts = [
  {
    id: 'nerja.coast.beach-pockets.not-single-continuous-strip', subject: 'nerja', topic: 'coast-lived-atmosphere',
    statement: 'Nerja’s central coast is experienced as a sequence of distinct beaches and access points around cliffs and the Balcón rather than as one uniform continuous beachfront.',
    status: 'partially-verified', sourceIds: ['nerja-tourism-beaches-2026', 'nerja-tourism-el-salon-2026', 'nerja-tourism-calahonda-2026', 'nerja-coastal-path-2022'], checkedAt: '2026-08-24', reviewAfter: '2027-08-24', volatility: 'medium',
    claimBoundary: 'The exact continuity and condition of walking links must be checked live because coastal-path construction changes over time.',
  },
  {
    id: 'nerja.coast.el-salon.balcon-adjacent', subject: 'nerja', topic: 'coast-lived-atmosphere',
    statement: 'El Salón is an urban beach immediately beside the Balcón de Europa, reached from the central promenade area.',
    status: 'verified', sourceIds: ['nerja-tourism-el-salon-2026'], checkedAt: '2026-08-24', reviewAfter: '2028-08-24', volatility: 'medium',
    claimBoundary: 'Accessibility, services and route conditions are not frozen by this spatial fact.',
  },
  {
    id: 'nerja.coast.calahonda.balcon-adjacent', subject: 'nerja', topic: 'coast-lived-atmosphere',
    statement: 'Calahonda is a small central beach beside the Balcón de Europa.',
    status: 'verified', sourceIds: ['nerja-tourism-calahonda-2026'], checkedAt: '2026-08-24', reviewAfter: '2028-08-24', volatility: 'medium',
    claimBoundary: 'This does not establish current services, crowd levels or barrier-free access.',
  },
  {
    id: 'nerja.coast.municipal-pa.eight-beaches-2025', subject: 'nerja', topic: 'coast-lived-atmosphere',
    statement: 'In 2025 the municipality reported a public-address service at eight beaches: Maro, Burriana, Carabeo, Calahonda, El Salón, Torrecilla, El Chucho and El Playazo.',
    status: 'verified', sourceIds: ['nerja-beach-pa-system-2025'], checkedAt: '2026-08-24', reviewAfter: '2027-04-01', volatility: 'high',
    claimBoundary: 'This is a dated operational snapshot, not a permanent beach count or a guarantee of current service.',
  },
  {
    id: 'nerja.coast.coastal-path.incomplete-2022', subject: 'nerja', topic: 'coast-lived-atmosphere',
    statement: 'Municipal reporting in 2022 described the Nerja coastal path as a set of completed, under-construction and planned sections rather than a finished continuous route.',
    status: 'verified', sourceIds: ['nerja-coastal-path-2022'], checkedAt: '2026-08-24', reviewAfter: '2026-12-01', volatility: 'high',
    claimBoundary: 'The statement is historical to 2022 and must not be used as a current route-status claim.',
  },
  {
    id: 'nerja.atmosphere.amara-playa.central-flat-torrecilla', subject: 'nerja', topic: 'coast-lived-atmosphere',
    statement: 'AMARA Playa is located in Nerja’s central-flat Torrecilla area.',
    status: 'first-party-observation', sourceIds: ['operator-nerja-observations-2026-08-24'], checkedAt: '2026-08-24', reviewAfter: '2027-08-24', volatility: 'low',
    claimBoundary: 'This is an operator-confirmed micro-location classification; it does not by itself verify exact walking times, gradients or accessibility to named destinations.',
  },
  {
    id: 'nerja.atmosphere.zone-dependent-evening-return', subject: 'nerja', topic: 'coast-lived-atmosphere',
    statement: 'The practical evening-return experience differs by Nerja zone; flatter central areas can support more car-free routines, while some other areas can involve steeper or more car-dependent returns.',
    status: 'first-party-observation', sourceIds: ['operator-nerja-observations-2026-08-24'], checkedAt: '2026-08-24', reviewAfter: '2027-08-24', volatility: 'medium',
    claimBoundary: 'This is a bounded operator observation, not a substitute for route-level measurement or an absolute rule for every property.',
  },
  {
    id: 'nerja.atmosphere.repeat-guest-busy-feedback', subject: 'nerja', topic: 'coast-lived-atmosphere',
    statement: 'The operator has received qualitative feedback from repeat guests who felt Nerja had become too busy or frantic for their preference and chose Frigiliana instead.',
    status: 'first-party-observation', sourceIds: ['operator-nerja-observations-2026-08-24'], checkedAt: '2026-08-24', reviewAfter: '2027-08-24', volatility: 'medium',
    claimBoundary: 'Internal-only anecdotal feedback; it must not be generalized to all guests, all seasons or Nerja as a whole.',
  },
] as const satisfies readonly FactInput[];

export const nerjaCoastLivedAtmosphereFacts = defineKnowledgeFacts(facts);
export type NerjaCoastLivedAtmosphereFactId = (typeof nerjaCoastLivedAtmosphereFacts)[number]['id'];
