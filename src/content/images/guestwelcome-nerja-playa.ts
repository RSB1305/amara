import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Guest Guide page `guestwelcome-nerja-playa`: private surface, never rendered on the public site. */
export const guestwelcomeNerjaPlayaImages = defineRouteImages({
  routeKey: 'guestwelcome-nerja-playa',
  images: [
    {
      role: 'hero',
      src: '/images/amara-playa/apartment/chaparril-13.webp',
      surfaces: ['guide'],
      alt: {
        en: "AMARA Playa apartment in Nerja",
        de: "AMARA Playa Apartment in Nerja",
        es: "Apartamento AMARA Playa en Nerja",
        nl: "AMARA Playa appartement in Nerja",
        sv: "AMARA Playa-lägenhet i Nerja"
      }
    }
  ]
});
