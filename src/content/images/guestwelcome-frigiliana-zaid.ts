import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Guest Guide page `guestwelcome-frigiliana-zaid`: private surface, never rendered on the public site. */
export const guestwelcomeFrigilianaZaidImages = defineRouteImages({
  routeKey: 'guestwelcome-frigiliana-zaid',
  images: [
    {
      role: 'hero',
      src: '/images/amara-zaid/cara-rural-frigiliana-amara-said-terraza-5.jpg',
      surfaces: ['guide'],
      alt: {
        en: "AMARA Zaid terrace apartment in Frigiliana",
        de: "AMARA Zaid Terrassenapartment in Frigiliana",
        es: "Apartamento con terraza AMARA Zaid en Frigiliana",
        nl: "AMARA Zaid terrasappartement in Frigiliana",
        sv: "AMARA Zaid terrasslägenhet i Frigiliana"
      }
    }
  ]
});
