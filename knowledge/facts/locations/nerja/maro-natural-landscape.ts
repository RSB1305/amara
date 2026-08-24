import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaNatureCoastSourceId } from '../../../sources/locations/nerjaNatureCoastSources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly NerjaNatureCoastSourceId[] };

const facts = [
  {
    id: 'nerja.nature.maro-cerro-gordo.area-land-marine', subject: 'nerja', topic: 'maro-natural-landscape',
    statement: 'The Acantilados de Maro-Cerro Gordo protected area covers about 1,913 hectares, with most of its extent marine rather than terrestrial.',
    status: 'verified', sourceIds: ['junta-maro-cerro-gordo-overview', 'junta-maro-cerro-gordo-zec'], checkedAt: '2026-08-24', reviewAfter: '2030-08-24', volatility: 'low',
    claimBoundary: 'Official pages vary slightly between rounded and two-decimal totals; use “about 1,913 hectares” unless citing the exact dataset.',
  },
  {
    id: 'nerja.nature.maro-cerro-gordo.two-municipalities', subject: 'nerja', topic: 'maro-natural-landscape',
    statement: 'The protected maritime-terrestrial area spans Nerja in Málaga province and Almuñécar in Granada province.',
    status: 'verified', sourceIds: ['junta-maro-cerro-gordo-overview'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'Not every part of the protected area lies within Nerja municipality.',
  },
  {
    id: 'nerja.nature.maro-cerro-gordo.protection-network', subject: 'nerja', topic: 'maro-natural-landscape',
    statement: 'Maro-Cerro Gordo is protected through overlapping Andalusian, EU and Mediterranean designations, including Paraje Natural, ZEPA, ZEC and ZEPIM status.',
    status: 'verified', sourceIds: ['junta-maro-cerro-gordo-overview', 'junta-maro-cerro-gordo-zec', 'boja-maro-cerro-gordo-2015'], checkedAt: '2026-08-24', reviewAfter: '2030-08-24', volatility: 'low',
    claimBoundary: 'The designations explain conservation importance; they do not guarantee that every activity or access route is permitted.',
  },
  {
    id: 'nerja.nature.maro-cerro-gordo.habitats-posidonia', subject: 'nerja', topic: 'maro-natural-landscape',
    statement: 'The official Natura 2000 profile identifies 12 protected habitat types, including three priority habitats and Posidonia oceanica seagrass meadows.',
    status: 'verified', sourceIds: ['junta-maro-cerro-gordo-zec', 'boja-maro-cerro-gordo-2015'], checkedAt: '2026-08-24', reviewAfter: '2030-08-24', volatility: 'low',
    claimBoundary: 'This is ecological inventory evidence; it does not mean seagrass is visible or reachable from every cove.',
  },
  {
    id: 'nerja.nature.maro-cerro-gordo.unurbanised-coastal-strip', subject: 'nerja', topic: 'maro-natural-landscape',
    statement: 'The Junta describes Maro-Cerro Gordo as one of the comparatively rare coastal strips in the area preserved from urbanisation.',
    status: 'verified', sourceIds: ['junta-maro-cerro-gordo-zec', 'boja-maro-cerro-gordo-2015'], checkedAt: '2026-08-24', reviewAfter: '2030-08-24', volatility: 'low',
    claimBoundary: 'This is an official conservation assessment, not a claim of untouched wilderness or absence of agriculture and visitor use.',
  },
  {
    id: 'nerja.nature.maro-cerro-gordo.cliffs-coves-terraces', subject: 'nerja', topic: 'maro-natural-landscape',
    statement: 'The protected landscape combines abrupt cliffs, small coves and beaches, marine habitat and cultivated terraces.',
    status: 'verified', sourceIds: ['junta-maro-cerro-gordo-overview', 'visitor-window-maro-cerro-gordo'], checkedAt: '2026-08-24', reviewAfter: '2030-08-24', volatility: 'low',
    claimBoundary: 'Official sources conflict on a single maximum cliff-height figure, so no exact height is normalized here.',
  },
  {
    id: 'nerja.nature.maro-cerro-gordo.access-variable', subject: 'nerja', topic: 'maro-natural-landscape',
    statement: 'Access to some coves and viewpoints is physically constrained by the cliff landscape and can be affected by seasonal management.',
    status: 'partially-verified', sourceIds: ['junta-maro-cerro-gordo-zec', 'visitor-window-maro-cerro-gordo'], checkedAt: '2026-08-24', reviewAfter: '2027-04-01', volatility: 'high',
    claimBoundary: 'Do not publish current vehicle restrictions, shuttle details or route status without a live official check.',
  },
] as const satisfies readonly FactInput[];

export const nerjaMaroNaturalLandscapeFacts = defineKnowledgeFacts(facts);
export type NerjaMaroNaturalLandscapeFactId = (typeof nerjaMaroNaturalLandscapeFacts)[number]['id'];
