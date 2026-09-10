import { defineRouteImages } from '../../lib/images/routeImageContract';

/**
 * Whale-watching spoke (tarifa.experience.whale-watching).
 *
 * The four `gallery` images are the resident and seasonal cetaceans of the Strait,
 * in the order the article introduces them; the `editorial` image is the firmm
 * research boat that the page recommends. Every photograph comes from the foundation
 * firmm and carries the same credit line, rendered once under the gallery and once
 * under the boat on the spoke page.
 */
export const tarifaExperienceWhaleWatchingImages = defineRouteImages({
  routeKey: 'tarifa.experience.whale-watching',
  images: [
    {
      role: 'gallery',
      id: 'common-dolphins',
      src: '/images/tarifa/firmm/common-dolphins.jpg',
      credit: 'foundation firmm',
      focalPoint: '50% 50%',
      alt: {
        en: 'A group of common dolphins breaking the surface in the Strait of Gibraltar',
        de: 'Eine Gruppe Gemeiner Delfine durchbricht die Wasseroberfläche in der Straße von Gibraltar',
        es: 'Un grupo de delfines comunes rompiendo la superficie en el Estrecho de Gibraltar',
        nl: 'Een groep gewone dolfijnen doorbreekt het wateroppervlak in de Straat van Gibraltar',
        sv: 'En grupp vanliga delfiner bryter ytan i Gibraltarsundet'
      },
      caption: {
        en: 'Common dolphins, resident in the Strait all year.',
        de: 'Gemeine Delfine, das ganze Jahr in der Meerenge zu Hause.',
        es: 'Delfines comunes, residentes todo el año en el Estrecho.',
        nl: 'Gewone dolfijnen, het hele jaar in de Straat.',
        sv: 'Vanliga delfiner, bofasta i sundet året om.'
      }
    },
    {
      role: 'gallery',
      id: 'striped-dolphin',
      src: '/images/tarifa/firmm/striped-dolphin.jpg',
      credit: 'foundation firmm',
      focalPoint: '50% 50%',
      alt: {
        en: 'A striped dolphin leaping clear of the water in the Strait of Gibraltar',
        de: 'Ein Streifendelfin springt in der Straße von Gibraltar aus dem Wasser',
        es: 'Un delfín listado saltando fuera del agua en el Estrecho de Gibraltar',
        nl: 'Een gestreepte dolfijn springt uit het water in de Straat van Gibraltar',
        sv: 'En strimmig delfin hoppar ur vattnet i Gibraltarsundet'
      },
      caption: {
        en: 'The striped dolphin, one of three dolphin species here.',
        de: 'Der Streifendelfin, eine von drei Delfinarten hier.',
        es: 'El delfín listado, una de las tres especies de delfín de aquí.',
        nl: 'De gestreepte dolfijn, een van de drie dolfijnsoorten hier.',
        sv: 'Strimmig delfin, en av tre delfinarter här.'
      }
    },
    {
      role: 'gallery',
      id: 'orcas',
      src: '/images/tarifa/firmm/orcas.jpg',
      credit: 'foundation firmm',
      focalPoint: '50% 50%',
      alt: {
        en: 'Orcas with tall dorsal fins in the Strait of Gibraltar',
        de: 'Orcas mit hohen Rückenfinnen in der Straße von Gibraltar',
        es: 'Orcas con altas aletas dorsales en el Estrecho de Gibraltar',
        nl: "Orka's met hoge rugvinnen in de Straat van Gibraltar",
        sv: 'Späckhuggare med höga ryggfenor i Gibraltarsundet'
      },
      caption: {
        en: 'Orcas pass through in high summer, following the tuna.',
        de: 'Orcas ziehen im Hochsommer durch, dem Thunfisch nach.',
        es: 'Las orcas pasan en pleno verano, siguiendo al atún.',
        nl: "Orka's trekken in de hoogzomer door, achter de tonijn aan.",
        sv: 'Späckhuggare passerar på högsommaren, efter tonfisken.'
      }
    },
    {
      role: 'gallery',
      id: 'fin-whale',
      src: '/images/tarifa/firmm/fin-whale.jpg',
      credit: 'foundation firmm',
      focalPoint: '50% 50%',
      alt: {
        en: 'The back and blow of a fin whale surfacing in the Strait of Gibraltar',
        de: 'Rücken und Blas eines Finnwals beim Auftauchen in der Straße von Gibraltar',
        es: 'El lomo y el soplo de un rorcual común emergiendo en el Estrecho de Gibraltar',
        nl: 'De rug en blaas van een gewone vinvis die opduikt in de Straat van Gibraltar',
        sv: 'Ryggen och blåsten från en finval som dyker upp i Gibraltarsundet'
      },
      caption: {
        en: 'The fin whale passes through and is the least predictable sighting.',
        de: 'Der Finnwal zieht durch und ist die unberechenbarste Sichtung.',
        es: 'El rorcual común está de paso y es el avistamiento menos previsible.',
        nl: 'De gewone vinvis is op doortocht en de minst voorspelbare waarneming.',
        sv: 'Finvalen är på genomresa och den minst förutsägbara observationen.'
      }
    },
    {
      role: 'editorial',
      id: 'firmm-vision',
      src: '/images/tarifa/firmm/firmm-vision-boat.jpg',
      credit: 'foundation firmm',
      focalPoint: '50% 55%',
      alt: {
        en: 'The firmm VISION research boat in the Strait of Gibraltar, with the mountains of Morocco behind',
        de: 'Das Forschungsboot firmm VISION in der Straße von Gibraltar, dahinter die Berge Marokkos',
        es: 'El barco de investigación firmm VISION en el Estrecho de Gibraltar, con las montañas de Marruecos al fondo',
        nl: 'De onderzoeksboot firmm VISION in de Straat van Gibraltar, met de bergen van Marokko op de achtergrond',
        sv: 'Forskningsbåten firmm VISION i Gibraltarsundet, med Marockos berg bakom'
      },
      caption: {
        en: 'firmm sails from the harbour a short walk from our apartment.',
        de: 'firmm fährt vom Hafen, wenige Minuten zu Fuß von unserer Wohnung.',
        es: 'firmm sale del puerto, a pocos minutos a pie de nuestro apartamento.',
        nl: 'firmm vaart vanuit de haven, een korte wandeling van ons appartement.',
        sv: 'firmm avgår från hamnen, en kort promenad från vår lägenhet.'
      }
    }
  ]
});
