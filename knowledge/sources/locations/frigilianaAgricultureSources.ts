import { defineKnowledgeSources } from '../../schema';

export const frigilianaAgricultureSources = defineKnowledgeSources([
  {
    id: 'sima-frigiliana-agriculture-2023',
    title: 'Frigiliana municipal record — agriculture 2023',
    publisher: 'Instituto de Estadística y Cartografía de Andalucía',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29053',
    accessedAt: '2026-08-24',
    language: 'es',
    scope:
      'Official 2023 municipal totals and leading-crop fields for herbaceous crops, woody crops, irrigated avocado and rain-fed oil olive.',
    limitations:
      'The summary identifies leading crops but does not provide a complete crop table, a municipal mango area, production tonnage or guest-visible locations.',
    reuse: 'link-and-cite',
  },
  {
    id: 'frigiliana-municipality-ingenio-2026',
    title: 'Ingenio Nuestra Señora del Carmen',
    publisher: 'Ayuntamiento de Frigiliana',
    sourceType: 'official',
    url: 'https://frigiliana.es/places/ingenio-nuestra-senora-del-carmen/',
    accessedAt: '2026-08-28',
    language: 'es',
    scope: 'Municipal description of El Ingenio and its present-day place identity.',
    limitations:
      'Current production, opening, public access and raw-material origin require a dated operational check before guest advice.',
    reuse: 'link-and-cite',
  },
  {
    id: 'acciona-monte-ariza-irrigation-project-2026',
    title: 'Comunidad de Regantes Monte Ariza',
    publisher: 'Acciona',
    sourceType: 'secondary',
    url: 'https://www.acciona.com/es/proyectos/comunidad-regantes-monte-ariza',
    accessedAt: '2026-08-24',
    language: 'es',
    scope:
      'Contractor project description reporting 400 farmers, 231 hectares of subtropical avocado and mango crops and localized irrigation.',
    limitations:
      'This is the project contractor’s account, not an independent municipal land-use or sustainability audit. It does not represent the whole municipality.',
    reuse: 'link-and-cite',
  },
  {
    id: 'miel-de-la-torre-producer-2026',
    title: 'Miel de la Torre',
    publisher: 'Miel de la Torre',
    sourceType: 'secondary',
    url: 'https://mieldelatorre.com/',
    accessedAt: '2026-08-28',
    language: 'es',
    scope: 'Producer’s own account of its cane-honey product, place of production and claimed tradition since 1725.',
    limitations:
      'Producer claims require attribution. The source does not independently verify raw-material origin, health claims or public factory access.',
    reuse: 'link-and-cite',
  },
] as const);

export type FrigilianaAgricultureSourceId = (typeof frigilianaAgricultureSources)[number]['id'];
