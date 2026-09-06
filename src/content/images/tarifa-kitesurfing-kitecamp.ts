import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingKitecampImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.kitecamp',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/IMG_9169.jpg',
      alt: {
        en: "Two members of the Tarifa Surf Club by a palm on the beach promenade",
        de: "Zwei vom Tarifa Surf Club an einer Palme auf der Strandpromenade",
        es: "Dos del Tarifa Surf Club junto a una palmera en el paseo marítimo",
        nl: "Twee van de Tarifa Surf Club bij een palm op de strandboulevard",
        sv: "Två från Tarifa Surf Club vid en palm på strandpromenaden"
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
      src: '/images/tarifa/mark-robert-tarifa-surf-club.webp'
    }
  ]
});
