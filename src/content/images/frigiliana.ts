import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaImages = defineRouteImages({
  routeKey: "frigiliana",
  images: [
    {
      role: "hero",
      src: "/images/frigiliana/dorfpanorama-2026.webp",
      alt: {
        en: "Frigiliana’s white houses between the hills and the distant sea",
        de: "Frigilianas weiße Häuser zwischen den Hügeln und dem Meer in der Ferne",
        es: "Casas blancas de Frigiliana entre las colinas y el mar al fondo",
        nl: "De witte huizen van Frigiliana tussen de heuvels, met de zee in de verte",
        sv: "Frigilianas vita hus mellan kullarna med havet i fjärran"
      },
      takenAt: "2026-10-14",
      width: 2400,
      sizes: "(max-width: 767px) calc(100vw - 3rem), (max-width: 1023px) 60vw, 35vw"
    },
    {
      role: "og",
      src: "/images/amara-lounis/15-amara-frigiliana.jpg"
    }
  ]
});
