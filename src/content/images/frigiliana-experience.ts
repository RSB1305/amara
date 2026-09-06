import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceImages = defineRouteImages({
  routeKey: 'frigiliana.experience',
  images: [
    {
      role: 'hero',
      src: '/images/hero-frigiliana.jpg',
      width: 1080,
      alt: {
        en: "A whitewashed street in Frigiliana opening towards the surrounding hills",
        de: "Weiße Gasse in Frigiliana mit Blick auf die umliegenden Berge",
        es: "Calle blanca de Frigiliana abierta hacia las montañas cercanas",
        nl: "Witte straat in Frigiliana met uitzicht richting de bergen",
        sv: "Vitkalkad gata i Frigiliana med utsikt mot bergen"
      }
    }
  ]
});
