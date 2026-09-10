import { defineKnowledgeSources } from '../../schema';

export const tarifaSupermarketsSources = defineKnowledgeSources([
  {
    id: 'andalucia-tourist-municipality-tarifa',
    title: 'Municipio Turístico de Andalucía — Tarifa',
    publisher: 'Junta de Andalucía (BOJA)',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/boja',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official designation of Tarifa as Municipio Turístico, giving retail opening freedom in Semana Santa and 1 June–30 September.',
    limitations: 'Tarifa is not additionally a ZGAT like Nerja; the legal freedom does not mean a particular store opens on a given Sunday.',
    reuse: 'link-and-cite'
  },
  {
    id: 'lidl-store-locator',
    title: 'Lidl store locator',
    publisher: 'Lidl',
    sourceType: 'secondary',
    url: 'https://www.lidl.es/es/tiendas',
    accessedAt: '2026-09-10',
    scope: 'Operator store locator used to anchor the Lidl Tarifa address (C. Coronel Francisco Valdés 27), confirmed by both 2026 research runs.',
    limitations: 'Store addresses and hours change; verify live.',
    reuse: 'link-and-cite'
  },
  {
    id: 'amara-supermarkets-research-2026',
    title: 'AMARA supermarkets & everyday-shopping research runs (GPT, Aug + Sep 2026)',
    publisher: 'AMARA research (GPT Deep Research)',
    sourceType: 'secondary',
    locator: 'knowledge/research-runs/2026-08-22__064102__supermarkets-everyday-shopping__research-001; two GPT raws (2026-08-22, 2026-09-10) in 00_INBOX/02_GPT_RAW.',
    accessedAt: '2026-09-10',
    scope: 'Two cross-destination GPT research runs used together; the August run is the more rigorous/current, the September run corroborates structure and the Lidl anchor.',
    limitations: 'The two runs disagree on which specific chains currently operate in Tarifa (see the chains-volatile fact); treat specific chains beyond the Lidl anchor as live-check items.',
    reuse: 'internal-only'
  }
] as const);

export type TarifaSupermarketsSourceId = (typeof tarifaSupermarketsSources)[number]['id'];
