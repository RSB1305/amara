import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceMarketImages = defineRouteImages({
  routeKey: 'frigiliana.experience.market',
  images: [
    {
      role: 'hero',
      src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/06-frigiliana-pueblo.jpg',
      width: 2000,
      alt: {
        en: "Whitewashed lanes in Frigiliana near the historic quarter",
        de: "Weiße Gassen in Frigiliana nahe der Altstadt",
        es: "Calles blancas de Frigiliana cerca del casco histórico",
        nl: "Witte straatjes in Frigiliana bij de oude kern",
        sv: "Vitkalkade gränder i Frigiliana nära gamla stan"
      }
    }
  ]
});
