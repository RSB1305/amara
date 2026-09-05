import { defineKnowledgePageManifest } from '../../schema';

export const tarifaGeographyKnowledge = defineKnowledgePageManifest({
  id: 'page-tarifa-geography',
  destination: 'tarifa',
  topic: 'geography-orientation',
  createdAt: '2026-08-21T11:26:50+02:00',
  updatedAt: '2026-08-21T12:01:15+02:00',
  status: 'ready',
  driveFolder: {
    id: '18j95VcyhCe2aOsRX0XmXFKHZ07TForA1',
    url: 'https://drive.google.com/drive/folders/18j95VcyhCe2aOsRX0XmXFKHZ07TForA1',
    path: 'AMARA – Research Vault/10_LOCATIONS/tarifa/geography',
  },
  publicContentPath: 'src/content/tarifaGeographyContent.ts',
  researchRunIds: ['2026-08-21__112650__geography-orientation__research-001'],
  coverage: [
    {
      authoringArea: 'hero-summary',
      purpose: 'SEO H1 and high-value page summary without replacing the full knowledge base.',
      factIds: [
        'tarifa.geography.southernmost.mainland-city-wording',
        'tarifa.geography.two-seas.local-orientation',
        'tarifa.geography.europe-africa.minimum-distance',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'orientation-and-key-facts',
      purpose: 'Mental map, stable reference points and concise geographic facts.',
      factIds: [
        'tarifa.geography.municipality.reference-record',
        'tarifa.geography.punta-de-tarifa.coordinates',
        'tarifa.geography.coast.atlantic-mediterranean-lengths',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'strait-of-gibraltar',
      purpose: 'Explain the Strait as a stable geographic corridor and the limits of visibility claims.',
      factIds: [
        'tarifa.geography.strait.dimensions',
        'tarifa.geography.strait.water-exchange',
        'tarifa.geography.europe-africa.minimum-distance',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'atlantic-mediterranean',
      purpose: 'Precisely define the relationship between Atlantic, Strait and Mediterranean.',
      factIds: [
        'tarifa.geography.two-seas.local-orientation',
        'tarifa.geography.strait.water-exchange',
        'tarifa.geography.coast.atlantic-mediterranean-lengths',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'europe-africa',
      purpose: 'Verify the southernmost-city/point claims and distinguish city, mainland and island definitions.',
      factIds: [
        'tarifa.geography.punta-de-tarifa.coordinates',
        'tarifa.geography.island.causeway-1808',
        'tarifa.geography.southernmost.mainland-city-wording',
        'tarifa.geography.southernmost.point-europe.unqualified',
        'tarifa.geography.europe-africa.minimum-distance',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'town-coast-hinterland',
      purpose: 'Build the mental map between old town, port, La Marina, beaches and protected hinterland.',
      factIds: [
        'tarifa.geography.los-lances.protected-area',
        'tarifa.geography.los-lances.north-west-of-town',
        'tarifa.geography.la-marina.avenida-los-lances-reference',
      ],
      status: 'partial',
      notes: 'West/north-west orientation is supported; old-town, port and neighbourhood polygons need a common GIS map.',
    },
    {
      authoringArea: 'topography',
      purpose: 'Explain relief and its practical effect on routes and exposure.',
      factIds: [
        'tarifa.geography.municipality.reference-record',
        'tarifa.geography.wind.local-exposure-unverified',
      ],
      status: 'gap',
      notes: 'Town and municipal reference values exist, but route gradients and local exposure require terrain evidence.',
    },
    {
      authoringArea: 'east-west',
      purpose: 'Explain the different spatial directions of the Atlantic coast and the Strait.',
      factIds: [
        'tarifa.geography.two-seas.local-orientation',
        'tarifa.geography.coast.atlantic-mediterranean-lengths',
        'tarifa.geography.los-lances.north-west-of-town',
      ],
      status: 'covered',
    },
    {
      authoringArea: 'wind-geography',
      purpose: 'Explain geographic causes of recurring wind patterns without predicting conditions.',
      factIds: [
        'tarifa.geography.strait.dimensions',
        'tarifa.geography.wind.local-exposure-unverified',
      ],
      status: 'partial',
      notes: 'Strait geometry is verified; neighbourhood-level wind exposure remains an explicit research gap.',
    },
    {
      authoringArea: 'amara-la-marina',
      purpose: 'State only verified practical implications of AMARA Family & Surf in La Marina.',
      factIds: ['tarifa.geography.la-marina.avenida-los-lances-reference'],
      status: 'gap',
      notes: 'La Marina has a municipal location reference, but AMARA entrance, route, distance, view and exposure are unverified.',
    },
  ],
});
