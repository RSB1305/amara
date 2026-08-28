import { defineKnowledgePageManifest } from '../../schema';

export const frigilianaMarketKnowledge = defineKnowledgePageManifest({
  id: 'page-frigiliana-market',
  destination: 'frigiliana',
  topic: 'weekly-market-outing',
  createdAt: '2026-08-28T18:30:00+02:00',
  updatedAt: '2026-08-28T18:30:00+02:00',
  status: 'needs-review',
  driveFolder: {
    id: '1sgmfPBSOAkhlMnFSJNh8EJLB-edglXek',
    url: 'https://drive.google.com/drive/folders/1sgmfPBSOAkhlMnFSJNh8EJLB-edglXek',
    path: 'AMARA – Research Vault/00_INBOX/2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001',
  },
  publicContentPath: 'src/content/frigilianaMarketContent.ts',
  researchRunIds: [
    '2026-08-22__064102__supermarkets-everyday-shopping__research-001',
    '2026-08-24__121347__frigiliana-agriculture-lived-landscape__research-001',
    '2026-08-28__092359__frigiliana-shopping-local-food-cooking__research-001',
  ],
  coverage: [
    {
      authoringArea: 'direct-answer-and-outing-job',
      purpose: 'Answer whether the weekly market is worth making part of a Thursday morning and what must be checked before relying on it.',
      factIds: ['frigiliana.shopping.mercadillo.thursday-reference'],
      status: 'gap',
      notes: 'Thursday is only partially supported. The current page’s morning schedule, location, stall mix, scale and reliability are not yet authorized.',
    },
    {
      authoringArea: 'day-time-location-and-cancellation',
      purpose: 'Publish the operating basics only from a current market authority and preserve holiday, weather and event-change logic.',
      factIds: ['frigiliana.shopping.mercadillo.thursday-reference'],
      status: 'gap',
      notes: 'The current 08:00–14:00 time, Plaza de las Tres Culturas location, lower-village position, regular weekly operation and cancellation conditions remain unverified.',
    },
    {
      authoringArea: 'market-format-and-stall-mix',
      purpose: 'Describe the current market as it actually operates without converting historical permits or generic market expectations into present fact.',
      factIds: [],
      status: 'gap',
      notes: 'Food, produce, clothing, household goods, gifts, ceramics, leather, jewellery and changing stall-number claims lack a current normalized evidence set. Historical 2019 mixed-market context is not current proof.',
    },
    {
      authoringArea: 'provenance-and-farmers-market-boundary',
      purpose: 'Keep regional production, seller origin, current shelf or stall availability and Frigiliana provenance as separate claims.',
      factIds: [
        'frigiliana.agriculture.mango-avocado.visible-observation',
        'frigiliana.food.ingenio.current-cane-honey-production-claim',
      ],
      status: 'gap',
      notes: 'Regional agriculture and production do not prove that a market product was grown or made in Frigiliana. Do not call the market a farmers’ market or promise local produce without seller-level evidence.',
    },
    {
      authoringArea: 'thursday-morning-sequence',
      purpose: 'Build a practical market-to-old-town morning only after market operation, parking and the walking transition are jointly verified.',
      factIds: [
        'frigiliana.shopping.mercadillo.thursday-reference',
        'frigiliana.parking.availability-not-guaranteed',
        'frigiliana.heritage.historic-ensemble.bic',
      ],
      status: 'gap',
      notes: 'The three owners establish a possible question sequence, not the current plaza-to-old-town route, levelness, timing, coffee or lunch continuation.',
    },
    {
      authoringArea: 'el-ingenio-context',
      purpose: 'Use El Ingenio only as a separately evidenced visible landmark or product context, not as proof of market stock or public access.',
      factIds: [
        'frigiliana.heritage.ingenio.origin-and-adaptation',
        'frigiliana.food.ingenio.current-cane-honey-production-claim',
      ],
      status: 'partial',
      notes: 'Historic adaptation and current production association are available. Opening, factory access, product availability at the market and raw-cane provenance remain open.',
    },
    {
      authoringArea: 'market-versus-supermarket',
      purpose: 'Keep the market outing separate from reliable everyday grocery planning.',
      factIds: [
        'frigiliana.shopping.eroski-city.address',
        'frigiliana.shopping.silvia.address-and-range',
        'frigiliana.shopping.garcia-berroa.address-and-range',
        'frigiliana.shopping.el-lagar.address-and-products',
      ],
      status: 'covered',
      notes: 'The market must not be presented as a dependable substitute for everyday shops. Shop operation and stock still require live checks in the Daily Life owner.',
    },
    {
      authoringArea: 'market-to-old-town-transition',
      purpose: 'Create the next guest question—what to notice after the market—only when the route and Old Town answer are present.',
      factIds: [
        'frigiliana.shopping.mercadillo.thursday-reference',
        'frigiliana.geography.ingenio.settlement-hinge',
        'frigiliana.heritage.historic-ensemble.bic',
      ],
      status: 'gap',
      notes: 'The target Old Town owner is now mapped, but market location and the physical transition are not verified. A bare contextual link is not yet sufficient.',
    },
    {
      authoringArea: 'market-to-food-and-cooking-transition',
      purpose: 'Connect a verified purchase to a meal or AMARA preparation only when provenance, availability and kitchen capability are known.',
      factIds: [
        'frigiliana.food.traditional-dishes.municipal-tourism-set',
        'casa-amara.portfolio.four-stays-three-apartments-one-suite',
      ],
      status: 'gap',
      notes: 'No market ingredient, current seller, recipe or property-specific kitchen matrix is verified. This transition remains future work and must not become an inventory dump.',
    },
    {
      authoringArea: 'casa-amara-perspective',
      purpose: 'Add a host-tested market morning from Casa AMARA only after the actual route and practical trade-offs are recorded.',
      factIds: ['casa-amara.location.calle-chorruelo-calle-real'],
      status: 'gap',
      notes: 'Casa AMARA’s address context does not establish the walking route, gradient, carrying consequence, parking choice or a personal market recommendation.',
    },
    {
      authoringArea: 'live-information-and-faq',
      purpose: 'Tell guests which details must be checked live and name the authority that governs them.',
      factIds: ['frigiliana.shopping.mercadillo.thursday-reference'],
      status: 'gap',
      notes: 'A current market authority, exact update channel and cancellation source are still missing; generic “check locally” wording does not close the evidence gap.',
    },
    {
      authoringArea: 'closing-and-next-step',
      purpose: 'Close with the verified next part of the morning rather than converting before the outing is useful.',
      factIds: [
        'frigiliana.heritage.historic-ensemble.bic',
        'casa-amara.location.calle-chorruelo-calle-real',
      ],
      status: 'gap',
      notes: 'Old Town and Casa AMARA are legitimate target owners, but the market-to-route and route-to-property consequences remain unverified.',
    },
  ],
});
