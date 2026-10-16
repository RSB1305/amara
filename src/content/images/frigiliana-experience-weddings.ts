import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceWeddingsImages = defineRouteImages({
  routeKey: 'frigiliana.experience.weddings',
  images: [
    {
      role: 'hero',
      src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg',
      alt: {
        en: "Entrance of San Antonio de Padua church in Frigiliana",
        de: "Eingang der Kirche San Antonio de Padua in Frigiliana",
        es: "Entrada de la iglesia de San Antonio de Padua en Frigiliana",
        nl: "Ingang van de kerk San Antonio de Padua in Frigiliana",
        sv: "Ingången till San Antonio de Padua-kyrkan i Frigiliana"
      }
    },
    {
      role: 'split',
      id: 'village',
      src: '/images/hero-frigiliana.jpg',
      alt: {
        en: "White houses in the historic centre of Frigiliana",
        de: "Weiße Häuser im historischen Zentrum von Frigiliana",
        es: "Casas blancas del centro histórico de Frigiliana",
        nl: "Witte huizen in het historische centrum van Frigiliana",
        sv: "Vita hus i Frigilianas historiska centrum"
      }
    },
    {
      role: 'split',
      id: 'house',
      src: '/images/amara-entrada/casa-amara-frigiliana-fuerra.jpg',
      alt: {
        en: "Casa AMARA on Calle Chorruelo in Frigiliana old town",
        de: "Casa AMARA in der Calle Chorruelo in Frigilianas Altstadt",
        es: "Casa AMARA en la calle Chorruelo del casco antiguo de Frigiliana",
        nl: "Casa AMARA aan Calle Chorruelo in de oude kern van Frigiliana",
        sv: "Casa AMARA på Calle Chorruelo i Frigilianas gamla by"
      }
    },
    {
      role: 'gallery',
      id: 'church-nave',
      src: '/images/frigiliana/san-antonio-kirchenschiff-2026.webp',
      sizes: '(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc((100vw - 5rem) / 2), (max-width: 991px) calc((100vw - 8rem) / 2), 432px',
      alt: {
        en: 'View along the central aisle towards the altar beneath the timber ceiling of San Antonio de Padua in Frigiliana',
        de: 'Blick durch den Mittelgang zum Altar unter der Holzdecke von San Antonio de Padua in Frigiliana',
        es: 'Vista del pasillo central hacia el altar bajo la techumbre de madera de San Antonio de Padua en Frigiliana',
        nl: 'Zicht door het middenpad naar het altaar onder het houten plafond van San Antonio de Padua in Frigiliana',
        sv: 'Utsikt längs mittgången mot altaret under trätaket i San Antonio de Padua i Frigiliana'
      },
      takenAt: '2026-10-14'
    },
    {
      role: 'gallery',
      id: 'church-altar',
      src: '/images/frigiliana/san-antonio-innenraum-2026.webp',
      sizes: '(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc((100vw - 5rem) / 2), (max-width: 991px) calc((100vw - 8rem) / 2), 432px',
      alt: {
        en: 'Altar and front rows of pews in San Antonio de Padua in Frigiliana',
        de: 'Altar und vordere Kirchenbänke von San Antonio de Padua in Frigiliana',
        es: 'Altar y primeras filas de bancos de San Antonio de Padua en Frigiliana',
        nl: 'Altaar en voorste kerkbanken van San Antonio de Padua in Frigiliana',
        sv: 'Altaret och de främre kyrkbänkarna i San Antonio de Padua i Frigiliana'
      },
      takenAt: '2026-10-14'
    },
    {
      role: 'split',
      id: 'prepare',
      src: '/images/amara-zaid/cara-rural-frigiliana-amara-said-bano.jpg',
      alt: {
        en: "Private bathroom and mirror in an AMARA apartment in Frigiliana",
        de: "Privates Badezimmer mit Spiegel in einem AMARA-Apartment in Frigiliana",
        es: "Baño privado con espejo en un apartamento AMARA de Frigiliana",
        nl: "Privébadkamer met spiegel in een AMARA-appartement in Frigiliana",
        sv: "Privat badrum med spegel i en AMARA-lägenhet i Frigiliana"
      }
    }
  ]
});
