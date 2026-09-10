import { defineKnowledgeSources } from '../../schema';

export const tarifaHealthSources = defineKnowledgeSources([
  {
    id: 'sas-centro-salud-tarifa',
    title: 'Centro de Salud Tarifa — Servicio Andaluz de Salud',
    publisher: 'Servicio Andaluz de Salud (Junta de Andalucía)',
    sourceType: 'official',
    url: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official health-authority record for the Tarifa primary-care centre (Zona Básica Tarifa) and its Campo de Gibraltar Oeste management area.',
    limitations: 'The published hours string was ambiguous ("08:00–08:00") and is not adopted; confirm live. Confirmed by both 2026 research runs.',
    reuse: 'link-and-cite'
  },
  {
    id: 'ags-campo-gibraltar-oeste',
    title: 'Área de Gestión Sanitaria Campo de Gibraltar Oeste — Hospital Punta de Europa',
    publisher: 'Servicio Andaluz de Salud (Junta de Andalucía)',
    sourceType: 'official',
    url: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/agscampodegibraltaroeste',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Management area and reference hospital (Hospital Universitario Punta de Europa, Algeciras) for Tarifa.',
    limitations: 'Drive distance/time are approximate; one run marked them as inference.',
    reuse: 'link-and-cite'
  },
  {
    id: 'colegio-farmaceuticos-cadiz-guardia',
    title: 'Farmacias de guardia — Colegio Oficial de Farmacéuticos de Cádiz',
    publisher: 'Colegio Oficial de Farmacéuticos de Cádiz',
    sourceType: 'official',
    url: 'https://www.cofcadiz.es/',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Live duty-pharmacy finder for the province; the authority for the rotating guardia covering Tarifa.',
    limitations: 'The duty rota changes continuously; a live check is required. Tarifa is sometimes covered from Cádiz/nearby rather than a local duty pharmacy.',
    reuse: 'link-and-cite'
  },
  {
    id: 'tarifa-medical-center-listing',
    title: 'Tarifa Medical Center (private clinic listing)',
    publisher: 'Tarifa Medical Center',
    sourceType: 'secondary',
    url: 'https://tarifamedicalcenter.com/',
    accessedAt: '2026-09-10',
    scope: 'Operator listing of a private clinic in Tarifa (general medicine, traumatology, physiotherapy).',
    limitations: 'Operator self-listing; does not guarantee current hours, appointments, languages or capacity, and is outside the public system. Only in the August run.',
    reuse: 'link-and-cite'
  },
  {
    id: 'amara-health-research-2026',
    title: 'AMARA health & emergency research runs (GPT, Aug + Sep 2026)',
    publisher: 'AMARA research (GPT Deep Research)',
    sourceType: 'secondary',
    locator: 'knowledge/research-runs/2026-08-22__064103__health-emergency__research-001; two GPT raws (2026-08-22, 2026-09-10) in 00_INBOX/02_GPT_RAW.',
    accessedAt: '2026-09-10',
    scope: 'Two cross-destination GPT research runs, reconciled; they agree on the Tarifa care structure, hospital, emergency routing and EHIC context.',
    limitations: 'Health-sensitive; treat hours and duty pharmacies as live-only. Not medical advice.',
    reuse: 'internal-only'
  }
] as const);

export type TarifaHealthSourceId = (typeof tarifaHealthSources)[number]['id'];
