import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Guest Guide page `guestwelcome-frigiliana-lounis`: private surface, never rendered on the public site. */
export const guestwelcomeFrigilianaLounisImages = defineRouteImages({
  routeKey: 'guestwelcome-frigiliana-lounis',
  images: [
    {
      role: 'hero',
      src: '/images/amara-lounis/104-amara-frigiliana.jpg',
      surfaces: ['guide'],
      alt: {
        en: "AMARA Lounis apartment in Frigiliana",
        de: "AMARA Lounis Apartment in Frigiliana",
        es: "Apartamento AMARA Lounis en Frigiliana",
        nl: "AMARA Lounis appartement in Frigiliana",
        sv: "AMARA Lounis-lägenhet i Frigiliana"
      }
    }
  ]
});
