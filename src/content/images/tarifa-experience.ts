import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaExperienceImages = defineRouteImages({
  routeKey: 'tarifa.experience',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/IMG_8742.jpg',
      width: 1080,
      alt: {
        en: "Two friends with a board under a palm tree at Los Lances beach, Tarifa",
        de: "Zwei Freunde mit Board unter einer Palme am Strand von Los Lances, Tarifa",
        es: "Dos amigos con una tabla bajo una palmera en la playa de Los Lances, Tarifa",
        nl: "Twee vrienden met een board onder een palmboom op het strand van Los Lances, Tarifa",
        sv: "Två vänner med en bräda under en palm på stranden Los Lances, Tarifa"
      }
    },
    {
      role: 'og',
      src: '/images/amara-tarifa/amara-tarifa-apartment10.webp'
    }
  ]
});
