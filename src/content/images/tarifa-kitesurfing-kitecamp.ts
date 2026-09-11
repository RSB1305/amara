import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingKitecampImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.kitecamp',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/tarifa-surf-club-team.webp',
      alt: {
        en: "Group photo of Tarifa Surf Club by the beach",
        de: "Gruppenfoto des Tarifa Surf Clubs am Strand",
        es: "Foto de grupo de Tarifa Surf Club junto a la playa",
        nl: "Groepsfoto van Tarifa Surf Club bij het strand",
        sv: "Gruppfoto av Tarifa Surf Club vid stranden"
      }
    },
    {
      role: 'panorama',
      id: 'photo',
      src: '/images/tarifa/IMG_8749.jpg',
      focalPoint: '50% 48%',
      alt: {
        en: "People with skateboards on the beach promenade in Tarifa",
        de: "Leute mit Skateboards auf der Strandpromenade von Tarifa",
        es: "Gente con monopatines en el paseo marítimo de Tarifa",
        nl: "Mensen met skateboards op de strandboulevard van Tarifa",
        sv: "Folk med skateboards på strandpromenaden i Tarifa"
      },
      caption: {
        en: "A camp is more than the sessions — it is the days around them.",
        de: "Ein Camp ist mehr als die Sessions — es sind die Tage drumherum.",
        es: "Un camp es más que las sesiones: son los días alrededor.",
        nl: "Een camp is meer dan de sessies — het zijn de dagen eromheen.",
        sv: "Ett camp är mer än passen — det är dagarna runt omkring."
      }
    },
    {
      role: 'og',
      src: '/images/tarifa/mark-robert-tarifa-surf-club-promenade.webp'
    }
  ]
});
