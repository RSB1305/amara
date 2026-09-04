import { defineKnowledgeSources } from '../../schema';

export const tarifaYogaSources = defineKnowledgeSources([
  {
    id: 'turismo-tarifa-wellness-directory-2026',
    title: 'Turismo de Tarifa — official visitor guide and wellness listings',
    publisher: 'Turismo de Tarifa',
    sourceType: 'official',
    url: 'https://turismodetarifa.com/wp-content/uploads/2023/12/GUIA-TURISTICA-TARIFA.pdf',
    accessedAt: '2026-09-04',
    language: 'es',
    scope:
      'Official local context for Tarifa yoga/wellness addresses, including Mandalablue, Respira, Mama Tierra, EIKO and Estudio Dimensión Bienestar.',
    limitations:
      'A destination directory records presence, not current schedules, prices, teachers or booking terms, which change seasonally.',
    reuse: 'link-and-cite'
  },
  {
    id: 'mandalablue-schedule-bookings-2026',
    title: 'Mandalablue Yoga & Wellness — schedule and bookings',
    publisher: 'Mandalablue Yoga & Wellness',
    sourceType: 'secondary',
    url: 'https://www.mandalablueyoga.es/yoga-meditation-tarifa-schedule-and-bookings',
    accessedAt: '2026-09-04',
    language: 'en',
    scope:
      'Provider page documenting ocean/beach classes, aerial yoga, mats provided, September 2026 activity and a drop-in benchmark around 20 EUR.',
    limitations:
      'Single-provider marketing page; prices, times and cancellation terms are volatile and must be reconfirmed at booking.',
    reuse: 'link-and-cite'
  },
  {
    id: 'respira-tarifa-programme-2026',
    title: 'Respira Centro Holístico Tarifa — classes and programmes',
    publisher: 'Respira Centro Holístico Tarifa',
    sourceType: 'secondary',
    url: 'https://www.respirayogatarifa.com',
    accessedAt: '2026-09-04',
    language: 'es',
    scope:
      'Provider context for studio classes plus dedicated children, pregnancy and aerial formats, with published monthly membership tiers.',
    limitations:
      'Contact numbers and current timetable vary across listings; verify the active schedule and teacher languages before referral.',
    reuse: 'link-and-cite'
  },
  {
    id: 'mama-tierra-tarifa-2026',
    title: 'Mama Tierra Tarifa — holistic and yoga space',
    publisher: 'Mama Tierra Tarifa',
    sourceType: 'secondary',
    url: 'https://www.mamatierratarifa.com',
    accessedAt: '2026-09-04',
    language: 'es',
    scope:
      'Provider presence at Calle Mar Adriático 9, Local 8 (yoga, pilates and holistic events), the nearest listed yoga address to AMARA Family & Surf.',
    limitations:
      'A durable 2026 weekly schedule and standard price were not publicly extractable; style, languages and hours need direct confirmation.',
    reuse: 'link-and-cite'
  },
  {
    id: 'amara-briefing-tarifa-yoga-2026',
    title: 'AMARA operator briefing — Family & Surf yoga readiness',
    publisher: 'AMARA',
    sourceType: 'operator-provided',
    accessedAt: '2026-09-04',
    language: 'de',
    scope:
      'Operator statement that yoga mats are already present in the AMARA Family & Surf apartment on Calle Mar Adriático.',
    limitations:
      'Internal first-party statement. Mat count and condition, and any private-session product, are not yet inventoried or contractually defined.',
    reuse: 'internal-only'
  }
] as const);

export type TarifaYogaSourceId = (typeof tarifaYogaSources)[number]['id'];
