import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceBeachesImages = defineRouteImages({
  routeKey: 'nerja.experience.beaches',
  images: [
    {
      role: 'og',
      src: '/images/amara-playa/apartment/chaparril-22.webp'
    },
    // The hero keeps its coast graphic; the photographs sit in the gallery band after the beach list.
    {
      role: 'gallery',
      id: 'cove',
      src: '/images/nerja/nerja-coast-view-balcon-de-europa.jpg',
      focalPoint: '40% 50%',
      alt: {
        en: "Turquoise cove below the cliffs of Nerja seen from the Balcón de Europa, with the Almijara mountains behind",
        de: "Türkisfarbene Bucht unter den Klippen von Nerja, vom Balcón de Europa aus gesehen, dahinter die Almijara-Berge",
        es: "Cala turquesa bajo los acantilados de Nerja vista desde el Balcón de Europa, con la sierra de Almijara al fondo",
        nl: "Turquoise baai onder de kliffen van Nerja, gezien vanaf de Balcón de Europa, met de Almijara-bergen erachter",
        sv: "Turkos vik under Nerjas klippor sedd från Balcón de Europa, med Almijarabergen bakom"
      }
    },
    {
      role: 'gallery',
      id: 'beach-house',
      src: '/images/nerja/nerja-calahonda-beach-house.jpg',
      focalPoint: '50% 60%',
      alt: {
        en: "The small white house with a blue door on the sand of Playa de Calahonda below the cliffs",
        de: "Das kleine weiße Haus mit blauer Tür im Sand der Playa de Calahonda unter den Klippen",
        es: "La casita blanca con puerta azul sobre la arena de la playa de Calahonda, bajo los acantilados",
        nl: "Het kleine witte huis met blauwe deur op het zand van Playa de Calahonda onder de kliffen",
        sv: "Det lilla vita huset med blå dörr på sanden vid Playa de Calahonda nedanför klipporna"
      }
    },
    {
      role: 'gallery',
      id: 'calahonda-winter',
      src: '/images/nerja/winter/nerja-winter-rental-09.jpg',
      focalPoint: '50% 55%',
      alt: {
        en: "The small cove of Calahonda below the Balcón de Europa, seen from above on a winter morning",
        de: "Die kleine Bucht Calahonda unterhalb des Balcón de Europa, an einem Wintermorgen von oben gesehen",
        es: "La pequeña cala de Calahonda bajo el Balcón de Europa, vista desde arriba una mañana de invierno",
        nl: "De kleine baai Calahonda onder de Balcón de Europa, van boven gezien op een winterochtend",
        sv: "Den lilla viken Calahonda nedanför Balcón de Europa, sedd uppifrån en vintermorgon"
      }
    }
  ],
  // `routeHero` needs a hero image or brief; the page renders its coast graphic in that slot.
  briefs: [
    { role: 'hero', id: 'hero', motif: "Playa de Burriana oder Playa Carabeo vom Weg oberhalb, Bucht und Wasser", format: "hochkant 3:4", light: "vormittags" }
  ]
});
