import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceImages = defineRouteImages({
  routeKey: 'nerja.experience',
  images: [
    {
      role: 'hero',
      src: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
      width: 2000,
      alt: {
        en: "Aerial view of Nerja and the Mediterranean coast",
        de: "Luftaufnahme von Nerja und der Mittelmeerküste",
        es: "Vista aérea de Nerja y la costa mediterránea",
        nl: "Luchtfoto van Nerja en de Middellandse Zeekust",
        sv: "Flygvy över Nerja och Medelhavskusten"
      }
    }
  ]
});
