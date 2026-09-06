import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Guest Guide page `guestwelcome-tarifa-family-surf`: private surface, never rendered on the public site. */
export const guestwelcomeTarifaFamilySurfImages = defineRouteImages({
  routeKey: 'guestwelcome-tarifa-family-surf',
  images: [
    {
      role: 'hero',
      src: '/images/amara-tarifa/amara-tarifa-apartment01.webp',
      surfaces: ['guide'],
      alt: {
        en: "AMARA Family & Surf apartment in Tarifa",
        de: "AMARA Family & Surf Apartment in Tarifa",
        es: "Apartamento AMARA Family & Surf en Tarifa",
        nl: "AMARA Family & Surf appartement in Tarifa",
        sv: "AMARA Family & Surf-lägenhet i Tarifa"
      }
    }
  ]
});
