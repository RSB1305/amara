import { defineKnowledgeSources } from '../../schema';

export const tarifaFoodAtmosphereSources = defineKnowledgeSources([
  { id: 'andalucia-almadraba-route-2026', title: 'Ruta del Atún de Almadraba', publisher: 'Turismo de Andalucía', sourceType: 'official', url: 'https://www.andalucia.org/listing/ruta-del-at%C3%BAn-de-almadraba/21511102/', accessedAt: '2026-08-24', language: 'es', scope: 'Official regional tourism evidence linking Tarifa with the spring almadraba tradition.', limitations: 'Does not certify the origin of tuna served by any individual restaurant.', reuse: 'link-and-cite' },
  { id: 'andalucia-tuna-tradition-2026', title: 'El Atún de la Almadraba, una tradición pesquera y gastronómica', publisher: 'Turismo de Andalucía', sourceType: 'official', url: 'https://www.andalucia.org/blog/post/el-atun-de-la-almadraba-una-tradicion-pesquera-y-gastronomica/', accessedAt: '2026-08-24', language: 'es', scope: 'Regional account of almadraba season and gastronomic events in Tarifa and neighbouring towns.', limitations: 'Event months and restaurant participation must be checked for the current year.', reuse: 'link-and-cite' },
  { id: 'tarifa-tourism-events-2026', title: 'Agenda de eventos', publisher: 'Turismo de Tarifa', sourceType: 'official', url: 'https://turismodetarifa.com/agenda-eventos/', accessedAt: '2026-08-24', language: 'es', scope: 'Current municipal source for seasonal cultural, nature and local events.', limitations: 'High-volatility agenda; individual events must never be stored as permanent annual guarantees.', reuse: 'link-and-cite' },
] as const);

export type TarifaFoodAtmosphereSourceId = (typeof tarifaFoodAtmosphereSources)[number]['id'];
