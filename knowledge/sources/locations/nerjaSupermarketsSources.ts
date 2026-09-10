import { defineKnowledgeSources } from '../../schema';

export const nerjaSupermarketsSources = defineKnowledgeSources([
  {
    id: 'andalucia-tourist-municipality-zgat-nerja',
    title: 'Municipio Turístico / Zona de Gran Afluencia Turística — Nerja',
    publisher: 'Junta de Andalucía (BOJA)',
    sourceType: 'official',
    url: 'https://www.juntadeandalucia.es/boja',
    accessedAt: '2026-09-10',
    language: 'es',
    scope: 'Official designation of Nerja as Municipio Turístico and ZGAT, giving retail Sunday/holiday opening freedom in Semana Santa and 1 June–30 September.',
    limitations: 'Establishes the legal opening freedom, not that any particular store actually opens on a given Sunday.',
    reuse: 'link-and-cite'
  },
  {
    id: 'lidl-store-locator',
    title: 'Lidl store locator',
    publisher: 'Lidl',
    sourceType: 'secondary',
    url: 'https://www.lidl.es/es/tiendas',
    accessedAt: '2026-09-10',
    scope: 'Operator store locator used to anchor the Lidl Nerja address (Av. Alcalde Antonio Villasclaras Rosas 3), confirmed by both 2026 research runs.',
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
    scope: 'Two cross-destination GPT research runs used together; the August run is the more rigorous/current (cited sources, dated), the September run corroborates structure and the Lidl anchor.',
    limitations: 'The two runs disagree on which specific chains currently operate (see the chains-volatile fact); treat specific chains beyond the Lidl anchor as live-check items.',
    reuse: 'internal-only'
  }
] as const);

export type NerjaSupermarketsSourceId = (typeof nerjaSupermarketsSources)[number]['id'];
