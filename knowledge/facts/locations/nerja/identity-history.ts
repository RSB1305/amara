import { defineKnowledgeFacts } from '../../../schema';
import type { NerjaIdentityHistorySourceId } from '../../../sources/locations/nerjaIdentityHistorySources';

type FactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & { sourceIds: readonly NerjaIdentityHistorySourceId[] };

const facts = [
  {
    id: 'nerja.history.occupation.upper-palaeolithic-to-present', subject: 'nerja', topic: 'identity-history',
    statement: 'The 2024 municipal archaeological charter records human occupation in the Nerja area from the Upper Palaeolithic through later prehistoric and historical periods.',
    status: 'verified', sourceIds: ['nerja-archaeological-charter-2024'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'Continuous archaeological record across the municipality does not mean that the present town centre has been continuously occupied in its current form.',
  },
  {
    id: 'nerja.history.archaeology.littoral-watercourse-concentration', subject: 'nerja', topic: 'identity-history',
    statement: 'Known archaeological evidence is concentrated especially near the littoral and watercourses, reflecting long-term relationships among water, fertile ground and the sea.',
    status: 'verified', sourceIds: ['nerja-archaeological-charter-2024'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This is a municipality-wide distribution pattern, not a claim that every coastal plot contains an accessible site.',
  },
  {
    id: 'nerja.history.archaeological-inventory.276-assets-2024', subject: 'nerja', topic: 'identity-history',
    statement: 'The 2024 archaeological-charter project expanded the catalogued municipal heritage inventory from 26 to 276 assets.',
    status: 'verified', sourceIds: ['nerja-archaeological-charter-2024'], checkedAt: '2026-08-24', reviewAfter: '2030-08-24', volatility: 'medium',
    claimBoundary: 'The inventory is a technical protection resource; it does not imply 276 publicly visitable attractions.',
  },
  {
    id: 'nerja.history.nerja-maro.post-conquest-formation', subject: 'nerja', topic: 'identity-history',
    statement: 'The present settlements of Nerja and Maro took shape after the Christian conquest through population reorganisation around the coastal castle and sugar-production sites.',
    status: 'verified', sourceIds: ['nerja-archaeological-charter-2024', 'nerja-tourism-history-2026'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This describes the formation of the present settlements, not the beginning of all human presence in their territories.',
  },
  {
    id: 'nerja.history.conquest.1487', subject: 'nerja', topic: 'identity-history',
    statement: 'Official local history places the Christian conquest of Nerja in 1487.',
    status: 'verified', sourceIds: ['nerja-tourism-history-2026', 'nerja-municipal-heritage-app'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This is a political milestone and must not be presented as the first settlement date.',
  },
  {
    id: 'nerja.history.sugar.hydraulic-industrial-landscape', subject: 'nerja', topic: 'identity-history',
    statement: 'Sugar cultivation and processing materially shaped Nerja and Maro through mills, irrigation channels, aqueducts and associated industrial infrastructure.',
    status: 'verified', sourceIds: ['nerja-archaeological-charter-2024', 'nerja-tourism-history-2026', 'nerja-municipal-heritage-app'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'The fact establishes a landscape system; each surviving structure needs individual condition and access verification.',
  },
  {
    id: 'nerja.history.fishing.material-vestiges-limited', subject: 'nerja', topic: 'identity-history',
    statement: 'The archaeological charter reports that material vestiges of historic fishing activity have largely disappeared despite the sea’s long economic importance.',
    status: 'verified', sourceIds: ['nerja-archaeological-charter-2024'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This concerns surviving material evidence and does not imply that fishing lacks cultural memory or living practices.',
  },
  {
    id: 'nerja.identity.tourism-transition.cave-parador-television', subject: 'nerja', topic: 'identity-history',
    statement: 'Official local history associates Nerja’s modern tourism transition with the 1959 cave discovery, the Parador opening in 1965 and later national recognition through Verano Azul.',
    status: 'partially-verified', sourceIds: ['nerja-tourism-history-2026', 'rtve-verano-azul-2014'], checkedAt: '2026-08-24', reviewAfter: '2030-08-24', volatility: 'low',
    claimBoundary: 'These are documented milestones; the relative causal impact of each on tourism has not been quantified here.',
  },
  {
    id: 'nerja.identity.verano-azul.production-broadcast', subject: 'nerja', topic: 'identity-history',
    statement: 'RTVE records that the 19-episode series Verano Azul was filmed in and around Nerja from August 1979 to December 1980 and first aired on 11 October 1981.',
    status: 'verified', sourceIds: ['rtve-verano-azul-2014', 'rtve-verano-azul-filming-2011'], checkedAt: '2026-08-24', reviewAfter: '2031-08-24', volatility: 'low',
    claimBoundary: 'This verifies production history, not a quantified present-day tourism effect or an association with every Nerja neighbourhood.',
  },
  {
    id: 'nerja.heritage.balcon.former-fortress-viewpoint', subject: 'nerja', topic: 'identity-history',
    statement: 'The Balcón de Europa occupies the former lower-castle coastal site and functions today as a public viewpoint between central beaches.',
    status: 'verified', sourceIds: ['nerja-balcon-official-2026', 'nerja-municipal-heritage-app'], checkedAt: '2026-08-24', reviewAfter: '2029-08-24', volatility: 'low',
    claimBoundary: 'The statement verifies location and present function, not the popular origin story of its name.',
  },
  {
    id: 'nerja.heritage.balcon.name-origin', subject: 'nerja', topic: 'identity-history',
    statement: 'The origin of the name Balcón de Europa is disputed: municipal tradition links it to Alfonso XII’s 1885 visit, while a local historical argument cites evidence that the name was used decades earlier.',
    status: 'disputed', sourceIds: ['nerja-municipal-heritage-app', 'capilla-balcon-name-2016'], checkedAt: '2026-08-24', reviewAfter: '2028-08-24', volatility: 'low',
    claimBoundary: 'Do not state that Alfonso XII coined the name unless the dated primary record is checked and competing evidence is resolved.',
  },
] as const satisfies readonly FactInput[];

export const nerjaIdentityHistoryFacts = defineKnowledgeFacts(facts);
export type NerjaIdentityHistoryFactId = (typeof nerjaIdentityHistoryFacts)[number]['id'];
