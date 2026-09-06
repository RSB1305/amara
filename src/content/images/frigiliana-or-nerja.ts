import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaOrNerjaImages = defineRouteImages({
  routeKey: 'frigiliana.or-nerja',
  images: [
    {
      role: 'hero',
      src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
      width: 2000,
      alt: {
        en: "White houses and alleys in Frigiliana with a view towards the coast",
        de: "Weiße Häuser und Gassen in Frigiliana mit Blick Richtung Küste",
        es: "Casas blancas y callejuelas de Frigiliana con vistas hacia la costa",
        nl: "Witte huizen en steegjes in Frigiliana met uitzicht richting de kust",
        sv: "Vita hus och gränder i Frigiliana med utsikt mot kusten"
      }
    }
  ]
});
