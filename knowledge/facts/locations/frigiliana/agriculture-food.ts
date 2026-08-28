import { defineKnowledgeFacts } from '../../../schema';
import type { FrigilianaGeographySourceId } from '../../../sources/locations/frigilianaGeographySources';
import type { FrigilianaAgricultureSourceId } from '../../../sources/locations/frigilianaAgricultureSources';
import type { FrigilianaAtmosphereSourceId } from '../../../sources/locations/frigilianaAtmosphereSources';
import type { FrigilianaShoppingSourceId } from '../../../sources/locations/frigilianaShoppingSources';

type AgricultureFoodSourceId =
  | FrigilianaGeographySourceId
  | FrigilianaAgricultureSourceId
  | FrigilianaAtmosphereSourceId
  | FrigilianaShoppingSourceId;

type AgricultureFoodFactInput = Parameters<typeof defineKnowledgeFacts>[0][number] & {
  sourceIds: readonly AgricultureFoodSourceId[];
};

const facts = [
  {
    id: 'frigiliana.agriculture.historic-gardens-sugar-and-terraces',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'The official heritage account links the Arab period with the introduction of market-garden crops and sugar cane and with terracing steep cultivable slopes around Frigiliana.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'This is a historical landscape account and does not identify the crop on every surviving terrace today.',
  },
  {
    id: 'frigiliana.agriculture.historic-acequia-network',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'During the Muslim period, existing acequia networks were extended to support cultivated land; the BIC decree reported those networks as still performing their irrigation function when the heritage record was prepared.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-08-24',
    volatility: 'medium',
    claimBoundary:
      'The decree is not a 2026 operational inventory and does not establish that every historic channel currently carries water or is publicly accessible.',
  },
  {
    id: 'frigiliana.agriculture.southern-terraces-water-system',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'The terraces south of the historic village are artificial level plots retained by dry-stone walls and historically linked to distribution acequias and storage albercas.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'The landscape relationship is verified; exact field access, ownership and present crop use require separate current evidence.',
  },
  {
    id: 'frigiliana.industry.ingenio.hydraulic-machinery',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'The BIC record describes surviving hydraulic machinery in a large ground-floor vault at El Ingenio, preserving material evidence of water-powered processing.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2028-08-24',
    volatility: 'medium',
    claimBoundary:
      'Survival of machinery does not establish public access, current operability or a visitor tour.',
  },
  {
    id: 'frigiliana.industry.maquinillas.sugar-ended-1928',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'The Maquinillas were three smaller cane-sugar processing buildings positioned in sequence along the Lisa hydraulic system; their productive work ended in 1928.',
    status: 'verified',
    sourceIds: ['boja-frigiliana-historic-ensemble-2015'],
    checkedAt: '2026-08-24',
    reviewAfter: '2030-08-24',
    volatility: 'low',
    claimBoundary:
      'The historical function and end date do not imply current access or preserved working equipment in each structure.',
  },
  {
    id: 'frigiliana.agriculture.2023.woody-crops-total',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement: 'SIMA reports 746 hectares devoted to woody crops in Frigiliana municipality in 2023.',
    status: 'verified',
    sourceIds: ['sima-frigiliana-agriculture-2023'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-08-24',
    volatility: 'medium',
    claimBoundary:
      'This is a 2023 municipal land-use statistic, not a current production figure or a measure of guest-visible farmland.',
  },
  {
    id: 'frigiliana.agriculture.2023.irrigated-avocado',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'In SIMA’s 2023 municipal summary, avocado was Frigiliana’s leading irrigated woody crop, with 250 hectares.',
    status: 'verified',
    sourceIds: ['sima-frigiliana-agriculture-2023'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-08-24',
    volatility: 'medium',
    claimBoundary:
      'The figure is specific to 2023 and the municipality; it does not locate the plots or imply public access.',
  },
  {
    id: 'frigiliana.agriculture.2023.rainfed-oil-olive',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'In SIMA’s 2023 municipal summary, oil olive was Frigiliana’s leading rain-fed woody crop, with 270 hectares.',
    status: 'verified',
    sourceIds: ['sima-frigiliana-agriculture-2023'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-08-24',
    volatility: 'medium',
    claimBoundary:
      'The figure is specific to 2023 and does not establish where a guest can see, visit or taste a particular producer’s olives.',
  },
  {
    id: 'frigiliana.agriculture.monte-ariza.project-scale',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'Acciona’s Monte Ariza irrigation-project page reports 400 farmers and 231 hectares of subtropical avocado and mango crops using localized irrigation.',
    status: 'partially-verified',
    sourceIds: ['acciona-monte-ariza-irrigation-project-2026'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-08-24',
    volatility: 'medium',
    claimBoundary:
      'These are contractor-reported project figures, not an independent municipal crop inventory, a mango-only area or a sustainability assessment.',
  },
  {
    id: 'frigiliana.agriculture.mango-avocado.visible-observation',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'The AMARA operator has observed mango and avocado cultivation as a visible part of the landscape around Frigiliana.',
    status: 'first-party-observation',
    sourceIds: ['robert-frigiliana-observations-2026-08-24'],
    checkedAt: '2026-08-24',
    reviewAfter: '2027-08-24',
    volatility: 'medium',
    claimBoundary:
      'This is a route-unspecified observation, not a municipal land-use measurement, permission to enter farmland or evidence that every visible subtropical plot lies inside the municipality.',
  },
  {
    id: 'frigiliana.food.traditional-dishes.municipal-tourism-set',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'Frigiliana’s official tourism information presents choto, potajes and migas among the locality’s traditional dishes and also describes culinary uses of miel de caña.',
    status: 'verified',
    sourceIds: ['frigiliana-tourism-general-food-2026', 'frigiliana-tourism-gastronomy-2026'],
    checkedAt: '2026-08-28',
    reviewAfter: '2028-08-28',
    volatility: 'low',
    claimBoundary:
      'A traditional-dish association does not establish current restaurant availability, a single canonical recipe or suitability for every AMARA kitchen.',
  },
  {
    id: 'frigiliana.food.ingenio.current-cane-honey-production-claim',
    subject: 'frigiliana',
    topic: 'agriculture-food',
    statement:
      'Frigiliana’s tourism authority and the Miel de la Torre producer both identify El Ingenio as the current place of concentrated sugar-cane-juice production associated with miel de caña.',
    status: 'partially-verified',
    sourceIds: [
      'frigiliana-tourism-general-food-2026',
      'frigiliana-municipality-ingenio-2026',
      'miel-de-la-torre-producer-2026',
    ],
    checkedAt: '2026-08-28',
    reviewAfter: '2027-08-28',
    volatility: 'medium',
    claimBoundary:
      'The sources do not independently verify raw-cane origin, production volume, health claims, public factory access or continuous production on a guest’s visit date.',
  },
] as const satisfies readonly AgricultureFoodFactInput[];

export const frigilianaAgricultureFoodFacts = defineKnowledgeFacts(facts);

export type FrigilianaAgricultureFoodFactId = (typeof frigilianaAgricultureFoodFacts)[number]['id'];
