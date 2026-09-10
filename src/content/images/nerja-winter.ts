import { defineRouteImages } from '../../lib/images/routeImageContract';

/**
 * Winter stays in Nerja. The photographs carry the season's argument: the
 * promenade, beaches and squares that are packed in summer stand open and quiet
 * in winter, under a low but bright sun. The `sun-bridge` editorial image leads
 * from that calm into the sunshine-hours chart below it.
 */
export const nerjaWinterImages = defineRouteImages({
  routeKey: 'nerja.winter',
  images: [
    {
      role: 'gallery',
      src: '/images/nerja/winter/nerja-winter-rental-13.jpg',
      focalPoint: '50% 40%',
      alt: {
        en: 'The empty palm promenade of the Balcón de Europa in winter light',
        de: 'Die leere Palmenpromenade am Balcón de Europa im Winterlicht',
        es: 'El paseo de palmeras del Balcón de Europa, vacío, con luz de invierno',
        nl: 'De lege palmenpromenade bij de Balcón de Europa in winterlicht',
        sv: 'Den tomma palmpromenaden vid Balcón de Europa i vinterljus'
      }
    },
    {
      role: 'gallery',
      src: '/images/nerja/winter/nerja-winter-rental-11.jpg',
      alt: {
        en: "A calm bay and Nerja's white houses above Playa Calahonda",
        de: 'Ruhige Bucht und die weißen Häuser von Nerja über der Playa Calahonda',
        es: 'Una bahía en calma y las casas blancas de Nerja sobre la playa Calahonda',
        nl: 'Een rustige baai en de witte huizen van Nerja boven Playa Calahonda',
        sv: 'En stilla vik och Nerjas vita hus ovanför Playa Calahonda'
      }
    },
    {
      role: 'gallery',
      src: '/images/nerja/winter/nerja-winter-rental-04.jpg',
      focalPoint: '50% 55%',
      alt: {
        en: "An empty beach with a single palm and the sun's trail on the calm sea",
        de: 'Leerer Strand mit einer einzelnen Palme und der Sonnenspur auf dem ruhigen Meer',
        es: 'Una playa vacía con una sola palmera y el reflejo del sol en el mar en calma',
        nl: 'Een leeg strand met één palm en de zonneschittering op de kalme zee',
        sv: 'En tom strand med en ensam palm och solens strimma på det stilla havet'
      }
    },
    {
      role: 'gallery',
      src: '/images/nerja/winter/nerja-winter-rental-10.jpg',
      focalPoint: '50% 55%',
      alt: {
        en: 'Folded parasols on an empty beach below the cliffs in winter',
        de: 'Zusammengeklappte Sonnenschirme an einem leeren Strand unter den Klippen im Winter',
        es: 'Sombrillas plegadas en una playa vacía bajo los acantilados en invierno',
        nl: 'Ingeklapte parasols op een leeg strand onder de kliffen in de winter',
        sv: 'Hopfällda parasoller på en tom strand under klipporna på vintern'
      }
    },
    {
      role: 'gallery',
      src: '/images/nerja/winter/nerja-winter-rental-05.jpg',
      focalPoint: '50% 45%',
      alt: {
        en: 'A view from the Balcón de Europa over the white houses to the mountains',
        de: 'Blick vom Balcón de Europa über die weißen Häuser zu den Bergen',
        es: 'Vista desde el Balcón de Europa sobre las casas blancas hacia las montañas',
        nl: 'Uitzicht vanaf de Balcón de Europa over de witte huizen naar de bergen',
        sv: 'Utsikt från Balcón de Europa över de vita husen mot bergen'
      }
    },
    {
      role: 'gallery',
      src: '/images/nerja/winter/nerja-winter-rental-07.jpg',
      focalPoint: '50% 40%',
      alt: {
        en: 'The quiet square by the Balcón de Europa with the church and a tall araucaria',
        de: 'Der ruhige Platz am Balcón de Europa mit der Kirche und einer hohen Araukarie',
        es: 'La plaza tranquila junto al Balcón de Europa con la iglesia y una gran araucaria',
        nl: 'Het rustige plein bij de Balcón de Europa met de kerk en een hoge araucaria',
        sv: 'Det lugna torget vid Balcón de Europa med kyrkan och en hög araukaria'
      }
    },
    {
      role: 'editorial',
      id: 'sun-bridge',
      src: '/images/nerja/winter/nerja-winter-rental-12.jpg',
      focalPoint: '30% 45%',
      alt: {
        en: 'A statue at the Balcón de Europa backlit by the winter sun over the sea',
        de: 'Eine Statue am Balcón de Europa im Gegenlicht der Wintersonne über dem Meer',
        es: 'Una estatua del Balcón de Europa a contraluz del sol de invierno sobre el mar',
        nl: 'Een standbeeld bij de Balcón de Europa in tegenlicht van de winterzon boven de zee',
        sv: 'En staty vid Balcón de Europa i motljus från vintersolen över havet'
      },
      caption: {
        en: 'Even in December the sun sits high over the sea here — the hours below show how high.',
        de: 'Selbst im Dezember steht die Sonne hier hoch über dem Meer — wie hoch, zeigen die Stunden darunter.',
        es: 'Incluso en diciembre el sol está alto sobre el mar aquí; las horas de abajo muestran cuánto.',
        nl: 'Zelfs in december staat de zon hier hoog boven de zee — de uren hieronder laten zien hoe hoog.',
        sv: 'Även i december står solen högt över havet här – timmarna nedan visar hur högt.'
      }
    }
  ]
});
