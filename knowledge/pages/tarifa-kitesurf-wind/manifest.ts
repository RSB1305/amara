import { defineKnowledgePageManifest } from '../../schema';

export const tarifaKitesurfWindKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-kitesurf-wind',
  destination: 'tarifa',
  topic: 'kitesurf-wind',
  createdAt: '2026-09-10T11:50:00+02:00',
  updatedAt: '2026-09-10T11:50:00+02:00',
  status: 'normalizing',
  driveFolder: {
    id: '1ntmi66zLPDOPUcS_JfkJTdLHA9jcAUGa',
    url: 'https://drive.google.com/drive/folders/1ntmi66zLPDOPUcS_JfkJTdLHA9jcAUGa',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/experiences/kitesurfing/wind'
  },
  publicContentPath: 'src/content/tarifaKitesurfWindContent.ts',
  researchRunIds: ['2026-09-10__114500__tarifa-kitesurf-wind__research-001'],
  coverage: [
    {
      authoringArea: 'knots-explainer',
      purpose: 'Make "knots" graspable for beginners with the km/h conversion, without false precision.',
      factIds: ['tarifa.kitesurf-wind.units.knot-kmh'],
      status: 'partial',
      notes: 'Facts ready; page copy pending operator approval.'
    },
    {
      authoringArea: 'thermal-wind',
      purpose: 'Teach what thermal (land–sea breeze) wind is, and the Poniente afternoon boost.',
      factIds: [
        'tarifa.kitesurf-wind.thermal.land-sea-breeze',
        'tarifa.kitesurf-wind.thermal.poniente-afternoon-boost'
      ],
      status: 'partial',
      notes: 'Facts ready; page copy pending operator approval.'
    },
    {
      authoringArea: 'gustiness-levante',
      purpose: 'Explain that wind is naturally gusty and the Levante is markedly gustier near shore.',
      factIds: ['tarifa.kitesurf-wind.character.levante-gustier'],
      status: 'partial',
      notes: 'Facts ready; page copy pending operator approval.'
    },
    {
      authoringArea: 'waves-not-shown',
      purpose: 'State why the embedded Windguru view is wind-first and does not display wave height or period.',
      factIds: ['tarifa.kitesurf-wind.waves.period-rationale'],
      status: 'partial',
      notes: 'Facts ready; page copy pending operator approval.'
    }
  ]
});
