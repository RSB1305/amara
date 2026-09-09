import { defineKnowledgePageManifest } from '../../schema';

export const tarifaWhaleWatchingKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-whale-watching',
  destination: 'tarifa',
  topic: 'whale-watching',
  createdAt: '2026-09-09T12:30:00+02:00',
  updatedAt: '2026-09-09T12:30:00+02:00',
  status: 'normalizing',
  driveFolder: {
    id: '1u4Qa0cJT0LczAZeMku2k7-VqsvPZPaVl',
    url: 'https://drive.google.com/drive/folders/1u4Qa0cJT0LczAZeMku2k7-VqsvPZPaVl',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/experiences/whale-watching'
  },
  publicContentPath: 'src/content/tarifaExperienceSpokeContent.ts',
  researchRunIds: [],
  coverage: [
    { authoringArea: 'why-tarifa', purpose: 'Explain why the strait is one of Europe’s strongest whale-watching locations.', factIds: ['tarifa.whale-watching.why-exceptional'], status: 'covered' },
    { authoringArea: 'what-you-see', purpose: 'Present the reliable core species and honest, non-guaranteed sighting expectations.', factIds: ['tarifa.whale-watching.core-species', 'tarifa.whale-watching.sighting-rate-is-operator-claim'], status: 'covered' },
    { authoringArea: 'season', purpose: 'Match the month to the goal: general trip vs orca window vs sperm/fin whales.', factIds: ['tarifa.whale-watching.orca-season', 'tarifa.whale-watching.sperm-and-fin-whales'], status: 'covered' },
    { authoringArea: 'choosing-a-trip', purpose: 'Frame boat type as the real decision and orient on price without printing tariffs.', factIds: ['tarifa.whale-watching.boat-type-is-the-decision', 'tarifa.whale-watching.five-listed-operators', 'tarifa.whale-watching.price-shape'], status: 'covered' },
    { authoringArea: 'families', purpose: 'Show why the large ships suit families and bridge to the family page.', factIds: ['tarifa.whale-watching.family-value'], status: 'covered' },
    { authoringArea: 'weather-and-planning', purpose: 'Make the sea-state reality and a two-day buffer the core planning advice.', factIds: ['tarifa.whale-watching.weather-dominates', 'tarifa.whale-watching.harbour-logistics'], status: 'covered' },
    { authoringArea: 'responsible-watching', purpose: 'Explain the legal protection and the marks of an ethical operator.', factIds: ['tarifa.whale-watching.legal-protection', 'tarifa.whale-watching.ethical-operator-signs'], status: 'covered' },
    { authoringArea: 'practicalities', purpose: 'On-board and accessibility guidance guests actually need.', factIds: ['tarifa.whale-watching.accessibility', 'tarifa.whale-watching.on-board-practicalities'], status: 'covered' }
  ]
});
