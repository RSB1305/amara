import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Guest Guide page `guestwelcome-frigiliana-farah`: private surface, never rendered on the public site. */
export const guestwelcomeFrigilianaFarahImages = defineRouteImages({
  routeKey: 'guestwelcome-frigiliana-farah',
  images: [
    {
      role: 'hero',
      src: '/images/amara-farah/65-amara-frigiliana.jpg',
      surfaces: ['guide'],
      alt: {
        en: "AMARA Farah apartment in Frigiliana",
        de: "AMARA Farah Apartment in Frigiliana",
        es: "Apartamento AMARA Farah en Frigiliana",
        nl: "AMARA Farah appartement in Frigiliana",
        sv: "AMARA Farah-lägenhet i Frigiliana"
      }
    }
  ]
});
