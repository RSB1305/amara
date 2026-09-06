import { defineRouteImages } from '../../lib/images/routeImageContract';

/**
 * AMARA Playa: the card photograph that identifies the stay everywhere, then the gallery in listing order.
 * The first eight gallery entries are the visible listing set and the VacationRental JSON-LD image set;
 * they must include at least one bedroom, one bathroom and one common-area photograph.
 */
export const laAmaraPlayaImages = defineRouteImages({
  routeKey: 'la-amara-playa',
  images: [
    {
      role: 'card',
      src: '/images/amara-playa/apartment/chaparril-13.webp',
      alt: {
        en: "AMARA Playa Nerja beach apartment with sea view",
        de: "AMARA Playa Strandapartment in Nerja mit Meerblick",
        es: "Apartamento AMARA Playa en Nerja con vistas al mar",
        nl: "AMARA Playa strandappartement in Nerja met zeezicht",
        sv: "AMARA Playa strandlägenhet i Nerja med havsutsikt"
      }
    },
    {
      role: 'gallery',
      id: 'photo-01',
      src: '/images/amara-playa/apartment/chaparril-13.webp',
      alt: {
        en: "AMARA Playa: open apartment with sleeping and living areas",
        de: "AMARA Playa: offenes Apartment mit Schlaf- und Wohnbereich",
        es: "AMARA Playa: apartamento diáfano con zona de descanso y salón",
        nl: "AMARA Playa: open appartement met slaap- en woongedeelte",
        sv: "AMARA Playa: öppen lägenhet med sov- och vardagsdel"
      }
    },
    {
      role: 'gallery',
      id: 'photo-02',
      src: '/images/amara-playa/apartment/chaparril-01.webp',
      alt: {
        en: "AMARA Playa: open kitchen with breakfast bar",
        de: "AMARA Playa: offene Küche mit Frühstückstheke",
        es: "AMARA Playa: cocina abierta con barra de desayuno",
        nl: "AMARA Playa: open keuken met ontbijtbar",
        sv: "AMARA Playa: öppet kök med frukostbar"
      }
    },
    {
      role: 'gallery',
      id: 'photo-03',
      src: '/images/amara-playa/apartment/chaparril-02.webp',
      alt: {
        en: "AMARA Playa: double bed beside a window with views towards the sea",
        de: "AMARA Playa: Doppelbett am Fenster mit Blick in Richtung Meer",
        es: "AMARA Playa: cama doble junto a una ventana con vistas hacia el mar",
        nl: "AMARA Playa: tweepersoonsbed bij het raam met uitzicht richting zee",
        sv: "AMARA Playa: dubbelsäng vid ett fönster med utsikt mot havet"
      }
    },
    {
      role: 'gallery',
      id: 'photo-04',
      src: '/images/amara-playa/apartment/chaparril-03.webp',
      alt: {
        en: "AMARA Playa: bright double bedroom",
        de: "AMARA Playa: helles Doppelzimmer",
        es: "AMARA Playa: dormitorio doble luminoso",
        nl: "AMARA Playa: lichte tweepersoonsslaapkamer",
        sv: "AMARA Playa: ljust dubbelrum"
      }
    },
    {
      role: 'gallery',
      id: 'photo-05',
      src: '/images/amara-playa/apartment/chaparril-04.webp',
      alt: {
        en: "AMARA Playa: double bedroom with built-in storage",
        de: "AMARA Playa: Doppelzimmer mit Einbauschränken",
        es: "AMARA Playa: dormitorio doble con armarios empotrados",
        nl: "AMARA Playa: tweepersoonsslaapkamer met ingebouwde kastruimte",
        sv: "AMARA Playa: dubbelrum med inbyggd förvaring"
      }
    },
    {
      role: 'gallery',
      id: 'photo-06',
      src: '/images/amara-playa/apartment/chaparril-05.webp',
      alt: {
        en: "AMARA Playa: bathroom with a walk-in shower",
        de: "AMARA Playa: Badezimmer mit bodengleicher Dusche",
        es: "AMARA Playa: baño con ducha a ras de suelo",
        nl: "AMARA Playa: badkamer met inloopdouche",
        sv: "AMARA Playa: badrum med dusch utan tröskel"
      }
    },
    {
      role: 'gallery',
      id: 'photo-07',
      src: '/images/amara-playa/apartment/chaparril-06.webp',
      alt: {
        en: "AMARA Playa: balcony with a side view of the sea",
        de: "AMARA Playa: Balkon mit seitlichem Meerblick",
        es: "AMARA Playa: balcón con vista lateral al mar",
        nl: "AMARA Playa: balkon met zijdelings zeezicht",
        sv: "AMARA Playa: balkong med havsutsikt åt sidan"
      }
    },
    {
      role: 'gallery',
      id: 'photo-08',
      src: '/images/amara-playa/apartment/chaparril-07.webp',
      alt: {
        en: "AMARA Playa: living area opening onto the balcony",
        de: "AMARA Playa: Wohnbereich mit Zugang zum Balkon",
        es: "AMARA Playa: zona de estar abierta al balcón",
        nl: "AMARA Playa: zithoek die uitkomt op het balkon",
        sv: "AMARA Playa: vardagsdel med utgång till balkongen"
      }
    },
    {
      role: 'gallery',
      id: 'photo-09',
      src: '/images/amara-playa/apartment/chaparril-08.webp',
      alt: {
        en: "AMARA Playa: compact seating area with cushions",
        de: "AMARA Playa: kompakter Sitzbereich mit Kissen",
        es: "AMARA Playa: zona de estar compacta con cojines",
        nl: "AMARA Playa: compacte zithoek met kussens",
        sv: "AMARA Playa: kompakt sittgrupp med kuddar"
      }
    },
    {
      role: 'gallery',
      id: 'photo-10',
      src: '/images/amara-playa/apartment/chaparril-09.webp',
      alt: {
        en: "AMARA Playa: kitchen and adjoining dining area",
        de: "AMARA Playa: Küche mit angrenzendem Essbereich",
        es: "AMARA Playa: cocina con comedor contiguo",
        nl: "AMARA Playa: keuken met aangrenzende eethoek",
        sv: "AMARA Playa: kök med intilliggande matplats"
      }
    },
    {
      role: 'gallery',
      id: 'photo-11',
      src: '/images/amara-playa/apartment/chaparril-10.webp',
      alt: {
        en: "AMARA Playa: kitchen and adjoining dining area",
        de: "AMARA Playa: Küche mit angrenzendem Essbereich",
        es: "AMARA Playa: cocina con comedor contiguo",
        nl: "AMARA Playa: keuken met aangrenzende eethoek",
        sv: "AMARA Playa: kök med intilliggande matplats"
      }
    },
    {
      role: 'gallery',
      id: 'photo-12',
      src: '/images/amara-playa/apartment/chaparril-11.webp',
      alt: {
        en: "AMARA Playa: fully equipped kitchen",
        de: "AMARA Playa: voll ausgestattete Küche",
        es: "AMARA Playa: cocina completamente equipada",
        nl: "AMARA Playa: volledig uitgeruste keuken",
        sv: "AMARA Playa: fullt utrustat kök"
      }
    },
    {
      role: 'gallery',
      id: 'photo-13',
      src: '/images/amara-playa/apartment/chaparril-12.webp',
      alt: {
        en: "AMARA Playa: balcony with a side view of the sea",
        de: "AMARA Playa: Balkon mit seitlichem Meerblick",
        es: "AMARA Playa: balcón con vista lateral al mar",
        nl: "AMARA Playa: balkon met zijdelings zeezicht",
        sv: "AMARA Playa: balkong med havsutsikt åt sidan"
      }
    },
    {
      role: 'gallery',
      id: 'photo-14',
      src: '/images/amara-playa/apartment/chaparril-14.webp',
      alt: {
        en: "AMARA Playa: open apartment with sleeping and living areas",
        de: "AMARA Playa: offenes Apartment mit Schlaf- und Wohnbereich",
        es: "AMARA Playa: apartamento diáfano con zona de descanso y salón",
        nl: "AMARA Playa: open appartement met slaap- en woongedeelte",
        sv: "AMARA Playa: öppen lägenhet med sov- och vardagsdel"
      }
    },
    {
      role: 'gallery',
      id: 'photo-15',
      src: '/images/amara-playa/apartment/chaparril-15.webp',
      alt: {
        en: "AMARA Playa: living area with open kitchen",
        de: "AMARA Playa: Wohnbereich mit offener Küche",
        es: "AMARA Playa: zona de estar con cocina abierta",
        nl: "AMARA Playa: zithoek met open keuken",
        sv: "AMARA Playa: vardagsdel med öppet kök"
      }
    },
    {
      role: 'gallery',
      id: 'photo-16',
      src: '/images/amara-playa/apartment/chaparril-16.webp',
      alt: {
        en: "AMARA Playa: living area with open kitchen",
        de: "AMARA Playa: Wohnbereich mit offener Küche",
        es: "AMARA Playa: zona de estar con cocina abierta",
        nl: "AMARA Playa: zithoek met open keuken",
        sv: "AMARA Playa: vardagsdel med öppet kök"
      }
    },
    {
      role: 'gallery',
      id: 'photo-17',
      src: '/images/amara-playa/apartment/chaparril-17.webp',
      alt: {
        en: "AMARA Playa: living area with flat-screen TV",
        de: "AMARA Playa: Wohnbereich mit Flachbildfernseher",
        es: "AMARA Playa: zona de estar con televisor de pantalla plana",
        nl: "AMARA Playa: zithoek met flatscreen-tv",
        sv: "AMARA Playa: vardagsdel med platt-TV"
      }
    },
    {
      role: 'gallery',
      id: 'photo-18',
      src: '/images/amara-playa/apartment/chaparril-18.webp',
      alt: {
        en: "AMARA Playa: living area with flat-screen TV",
        de: "AMARA Playa: Wohnbereich mit Flachbildfernseher",
        es: "AMARA Playa: zona de estar con televisor de pantalla plana",
        nl: "AMARA Playa: zithoek met flatscreen-tv",
        sv: "AMARA Playa: vardagsdel med platt-TV"
      }
    },
    {
      role: 'gallery',
      id: 'photo-19',
      src: '/images/amara-playa/apartment/chaparril-19.webp',
      alt: {
        en: "AMARA Playa: living area opening onto the balcony",
        de: "AMARA Playa: Wohnbereich mit Zugang zum Balkon",
        es: "AMARA Playa: zona de estar abierta al balcón",
        nl: "AMARA Playa: zithoek die uitkomt op het balkon",
        sv: "AMARA Playa: vardagsdel med utgång till balkongen"
      }
    },
    {
      role: 'gallery',
      id: 'photo-20',
      src: '/images/amara-playa/apartment/chaparril-20.webp',
      alt: {
        en: "AMARA Playa: living area opening onto the balcony",
        de: "AMARA Playa: Wohnbereich mit Zugang zum Balkon",
        es: "AMARA Playa: zona de estar abierta al balcón",
        nl: "AMARA Playa: zithoek die uitkomt op het balkon",
        sv: "AMARA Playa: vardagsdel med utgång till balkongen"
      }
    },
    {
      role: 'gallery',
      id: 'photo-21',
      src: '/images/amara-playa/apartment/chaparril-21.webp',
      alt: {
        en: "AMARA Playa: double bed beside a window with views towards the sea",
        de: "AMARA Playa: Doppelbett am Fenster mit Blick in Richtung Meer",
        es: "AMARA Playa: cama doble junto a una ventana con vistas hacia el mar",
        nl: "AMARA Playa: tweepersoonsbed bij het raam met uitzicht richting zee",
        sv: "AMARA Playa: dubbelsäng vid ett fönster med utsikt mot havet"
      }
    },
    {
      role: 'gallery',
      id: 'photo-22',
      src: '/images/amara-playa/apartment/chaparril-22.webp',
      alt: {
        en: "AMARA Playa: palm-lined plaza near Torrecilla beach",
        de: "AMARA Playa: Platz mit Palmen nahe dem Strand Torrecilla",
        es: "AMARA Playa: plaza con palmeras cerca de la playa de Torrecilla",
        nl: "AMARA Playa: plein met palmbomen bij het Torrecilla-strand",
        sv: "AMARA Playa: palmtorg nära Torrecilla-stranden"
      }
    },
    {
      role: 'gallery',
      id: 'photo-23',
      src: '/images/amara-playa/apartment/chaparril-23.webp',
      alt: {
        en: "AMARA Playa: Torrecilla beach near the apartment",
        de: "AMARA Playa: Strand Torrecilla in der Nähe des Apartments",
        es: "AMARA Playa: playa de Torrecilla cerca del apartamento",
        nl: "AMARA Playa: Torrecilla-strand bij het appartement",
        sv: "AMARA Playa: Torrecilla-stranden nära lägenheten"
      }
    },
    {
      role: 'gallery',
      id: 'photo-24',
      src: '/images/amara-playa/apartment/chaparril-24.webp',
      alt: {
        en: "AMARA Playa: palm-lined plaza near Torrecilla beach",
        de: "AMARA Playa: Platz mit Palmen nahe dem Strand Torrecilla",
        es: "AMARA Playa: plaza con palmeras cerca de la playa de Torrecilla",
        nl: "AMARA Playa: plein met palmbomen bij het Torrecilla-strand",
        sv: "AMARA Playa: palmtorg nära Torrecilla-stranden"
      }
    }
  ]
});
