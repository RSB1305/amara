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
    },
    {
      role: 'panorama',
      src: '/images/tarifa/_DCS9465_Sebastian_Lang.jpg',
      focalPoint: '50% 50%',
      credit: "Sebastian Lang",
      alt: {
        en: "Yellow kite over the beach at Los Lances, Tarifa",
        de: "Gelber Kite über dem Strand von Los Lances, Tarifa",
        es: "Cometa amarilla sobre la playa de Los Lances, Tarifa",
        nl: "Gele kite boven het strand van Los Lances, Tarifa",
        sv: "Gul kite över stranden Los Lances, Tarifa"
      },
      caption: {
        en: "Los Lances in the afternoon, when the wind arrives.",
        de: "Los Lances am Nachmittag, wenn der Wind kommt.",
        es: "Los Lances por la tarde, cuando llega el viento.",
        nl: "Los Lances in de middag, als de wind komt.",
        sv: "Los Lances på eftermiddagen, när vinden kommer."
      }
    },
    {
      role: 'card',
      id: 'old-town',
      src: '/images/tarifa/IMG_9004.jpg',
      focalPoint: '50% 45%',
      alt: {
        en: "Skater at the old town wall of Tarifa",
        de: "Skater an der alten Stadtmauer von Tarifa",
        es: "Patinador junto a la muralla del casco antiguo de Tarifa",
        nl: "Skater bij de oude stadsmuur van Tarifa",
        sv: "Skateåkare vid Tarifas gamla stadsmur"
      }
    }
  ]
});
