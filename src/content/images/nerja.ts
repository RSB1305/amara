import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaImages = defineRouteImages({
  routeKey: 'nerja',
  images: [
    {
      role: 'hero',
      src: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
      alt: {
        en: "Nerja on the Mediterranean coast with the town rising inland",
        de: "Nerja an der Mittelmeerküste mit dem landeinwärts ansteigenden Ort",
        es: "Nerja en la costa mediterránea con el pueblo ascendiendo hacia el interior",
        nl: "Nerja aan de Middellandse Zeekust met de stad die landinwaarts omhoogloopt",
        sv: "Nerja vid Medelhavskusten med staden som stiger inåt land"
      }
    },
    {
      role: 'split',
      id: 'stay',
      src: '/images/amara-playa/apartment/chaparril-13.webp',
      alt: {
        en: "Bright living room at AMARA Playa in Nerja",
        de: "Helles Wohnzimmer von AMARA Playa in Nerja",
        es: "Salón luminoso de AMARA Playa en Nerja",
        nl: "Lichte woonkamer van AMARA Playa in Nerja",
        sv: "Ljust vardagsrum på AMARA Playa i Nerja"
      }
    }
  ]
});
