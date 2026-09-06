import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaWhereToStayImages = defineRouteImages({
  routeKey: 'tarifa.where-to-stay',
  images: [
    {
      role: 'split',
      id: 'stay',
      src: '/images/amara-tarifa/amara-tarifa-apartment01.webp',
      alt: {
        en: "Living space at AMARA Family & Surf in La Marina, Tarifa",
        de: "Wohnbereich bei AMARA Family & Surf in La Marina, Tarifa",
        es: "Salón de AMARA Family & Surf en La Marina, Tarifa",
        nl: "Woonruimte van AMARA Family & Surf in La Marina, Tarifa",
        sv: "Vardagsrum på AMARA Family & Surf i La Marina, Tarifa"
      }
    }
  ]
});
