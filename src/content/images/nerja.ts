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
    },
    {
      role: 'gallery',
      id: 'street',
      src: '/images/nerja/nerja-street-plane-trees.jpg',
      focalPoint: '50% 50%',
      alt: {
        en: "A street in Nerja's centre with plane trees and white houses with balconies",
        de: "Eine Straße in Nerjas Zentrum mit Platanen und weißen Häusern mit Balkonen",
        es: "Una calle del centro de Nerja con plátanos y casas blancas con balcones",
        nl: "Een straat in het centrum van Nerja met platanen en witte huizen met balkons",
        sv: "En gata i Nerjas centrum med platanträd och vita hus med balkonger"
      }
    },
    {
      role: 'gallery',
      id: 'lane',
      src: '/images/nerja/nerja-alley-flower-pots.jpg',
      focalPoint: '50% 50%',
      alt: {
        en: "A narrow lane with flower pots on a white wall and a pebble-mosaic floor",
        de: "Eine schmale Gasse mit Blumentöpfen an einer weißen Wand und Kieselmosaik-Boden",
        es: "Una callejuela con macetas en una pared blanca y suelo de mosaico de cantos",
        nl: "Een smal steegje met bloempotten aan een witte muur en een vloer van kiezelmozaïek",
        sv: "En smal gränd med blomkrukor på en vit vägg och golv av stenmosaik"
      }
    },
    {
      role: 'gallery',
      id: 'shopping-street',
      src: '/images/nerja/nerja-shopping-street.jpg',
      focalPoint: '50% 55%',
      alt: {
        en: "A shopping street in Nerja's centre with small shops and people strolling",
        de: "Eine Einkaufsstraße in Nerjas Zentrum mit kleinen Läden und Bummelnden",
        es: "Una calle comercial del centro de Nerja con pequeñas tiendas y gente paseando",
        nl: "Een winkelstraat in het centrum van Nerja met kleine winkels en flanerende mensen",
        sv: "En shoppinggata i Nerjas centrum med små butiker och flanerande människor"
      }
    }
  ]
});
