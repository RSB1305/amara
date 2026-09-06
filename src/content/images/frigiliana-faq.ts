import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaFaqImages = defineRouteImages({
  routeKey: 'frigiliana.faq',
  images: [
    {
      role: 'hero',
      src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
      width: 2000,
      alt: {
        en: "Frigiliana and its whitewashed hillside streets",
        de: "Frigiliana mit seinen weißen Gassen am Hang",
        es: "Frigiliana y sus calles blancas en la ladera",
        nl: "Frigiliana met de witte straten tegen de heuvel",
        sv: "Frigiliana med sina vitkalkade gränder på sluttningen"
      }
    }
  ]
});
