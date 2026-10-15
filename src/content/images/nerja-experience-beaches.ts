import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceBeachesImages = defineRouteImages({
  routeKey: 'nerja.experience.beaches',
  images: [
    {
      role: 'og',
      src: '/images/amara-playa/apartment/chaparril-22.webp'
    },
    {
      role: "gallery",
      sizes: "(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc((100vw - 5rem) / 2), (max-width: 1375px) calc((100vw - 8rem) / 2), 624px",
      id: "calahonda",
      src: "/images/nerja/playa-calahonda-2026.webp",
      alt: {
        en: "Playa de Calahonda below the Balcón de Europa",
        de: "Playa de Calahonda unterhalb des Balcón de Europa",
        es: "Playa de Calahonda al pie del Balcón de Europa",
        nl: "Playa de Calahonda onder het Balcón de Europa",
        sv: "Playa de Calahonda nedanför Balcón de Europa"
      },
      caption: {
        en: "Playa de Calahonda below the Balcón de Europa",
        de: "Playa de Calahonda unterhalb des Balcón de Europa",
        es: "Playa de Calahonda al pie del Balcón de Europa",
        nl: "Playa de Calahonda onder het Balcón de Europa",
        sv: "Playa de Calahonda nedanför Balcón de Europa"
      },
      takenAt: "2026-10-14"
    },
    {
      role: "gallery",
      sizes: "(max-width: 639px) calc(100vw - 3rem), (max-width: 767px) calc((100vw - 5rem) / 2), (max-width: 1375px) calc((100vw - 8rem) / 2), 624px",
      id: "el-salon",
      src: "/images/nerja/playa-el-salon-2026.webp",
      alt: {
        en: "Playa El Salón seen from the Balcón de Europa",
        de: "Playa El Salón vom Balcón de Europa aus gesehen",
        es: "Playa El Salón vista desde el Balcón de Europa",
        nl: "Playa El Salón gezien vanaf het Balcón de Europa",
        sv: "Playa El Salón sedd från Balcón de Europa"
      },
      caption: {
        en: "Playa El Salón seen from the Balcón de Europa",
        de: "Playa El Salón vom Balcón de Europa aus gesehen",
        es: "Playa El Salón vista desde el Balcón de Europa",
        nl: "Playa El Salón gezien vanaf het Balcón de Europa",
        sv: "Playa El Salón sedd från Balcón de Europa"
      },
      takenAt: "2026-10-14"
    }
  ],
  briefs: [
    { role: 'hero', id: 'hero', motif: "Playa de Burriana oder Playa Carabeo vom Weg oberhalb, Bucht und Wasser", format: "hochkant 3:4", light: "vormittags" }
  ]
});
