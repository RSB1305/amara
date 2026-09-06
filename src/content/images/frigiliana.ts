import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaImages = defineRouteImages({
  routeKey: 'frigiliana',
  images: [
    {
      role: 'hero',
      src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/04-frigiliana-pueblo.jpg',
      width: 2000,
      sizes: '(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 60vw, 35vw',
      alt: {
        en: "Frigiliana hillside homes in afternoon light",
        de: "Häuser am Hang von Frigiliana im Nachmittagslicht",
        es: "Casas en la ladera de Frigiliana a la luz de la tarde",
        nl: "Huizen tegen de heuvel van Frigiliana in het middaglicht",
        sv: "Hus på Frigilianas sluttning i eftermiddagsljus"
      }
    },
    {
      role: 'og',
      src: '/images/amara-lounis/15-amara-frigiliana.jpg'
    }
  ]
});
