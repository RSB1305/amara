import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Guest Guide page `guestwelcome-frigiliana-maha`: private surface, never rendered on the public site. */
export const guestwelcomeFrigilianaMahaImages = defineRouteImages({
  routeKey: 'guestwelcome-frigiliana-maha',
  images: [
    {
      role: 'hero',
      src: '/images/amara-maha/29-amara-frigiliana.jpg',
      surfaces: ['guide'],
      alt: {
        en: "AMARA Maha apartment in Frigiliana",
        de: "AMARA Maha Apartment in Frigiliana",
        es: "Apartamento AMARA Maha en Frigiliana",
        nl: "AMARA Maha appartement in Frigiliana",
        sv: "AMARA Maha lägenhet i Frigiliana"
      }
    }
  ]
});
