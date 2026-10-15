import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaWhereToStayImages = defineRouteImages({
  routeKey: "frigiliana.where-to-stay",
  images: [
    {
      role: "gallery",
      sizes: "(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc((100vw - 5rem) / 2), (max-width: 1375px) calc((100vw - 8rem) / 2), 624px",
      id: "uphill",
      src: "/images/frigiliana/treppengasse-aufwaerts-2026.webp",
      alt: {
        en: "Steps with pebble mosaics climbing between white houses in Frigiliana",
        de: "Treppen mit Kieselmosaiken zwischen weißen Häusern in Frigiliana",
        es: "Escaleras con mosaicos de guijarros entre casas blancas de Frigiliana",
        nl: "Trappen met kiezelmozaïeken tussen witte huizen in Frigiliana",
        sv: "Trappor med stenmosaik mellan vita hus i Frigiliana"
      },
      caption: {
        en: "Steps with pebble mosaics climbing between white houses in Frigiliana",
        de: "Treppen mit Kieselmosaiken zwischen weißen Häusern in Frigiliana",
        es: "Escaleras con mosaicos de guijarros entre casas blancas de Frigiliana",
        nl: "Trappen met kiezelmozaïeken tussen witte huizen in Frigiliana",
        sv: "Trappor med stenmosaik mellan vita hus i Frigiliana"
      },
      takenAt: "2026-10-14"
    },
    {
      role: "gallery",
      sizes: "(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc((100vw - 5rem) / 2), (max-width: 1375px) calc((100vw - 8rem) / 2), 624px",
      id: "downhill",
      src: "/images/frigiliana/treppengasse-abwaerts-2026.webp",
      alt: {
        en: "Looking downhill along a stepped lane in Frigiliana",
        de: "Blick eine Treppengasse in Frigiliana hinunter",
        es: "Vista cuesta abajo de una calle escalonada de Frigiliana",
        nl: "Uitzicht naar beneden door een trapstraat in Frigiliana",
        sv: "Vy nedför en trappgränd i Frigiliana"
      },
      caption: {
        en: "Looking downhill along a stepped lane in Frigiliana",
        de: "Blick eine Treppengasse in Frigiliana hinunter",
        es: "Vista cuesta abajo de una calle escalonada de Frigiliana",
        nl: "Uitzicht naar beneden door een trapstraat in Frigiliana",
        sv: "Vy nedför en trappgränd i Frigiliana"
      },
      takenAt: "2026-10-14"
    }
  ]
});
