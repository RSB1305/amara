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
      role: 'gallery',
      id: 'group-beach',
      src: '/images/tarifa/kitecamp-group-beach-flag-2026.webp',
      focalPoint: '50% 50%',
      alt: {
        en: "Kitecamp group in wetsuits on the beach under the grey Tarifa Surf Club flag, kites in the sky",
        de: "Kitecamp-Gruppe in Neoprenanzügen am Strand unter der grauen Flagge des Tarifa Surf Club, Kites am Himmel",
        es: "Grupo del kitecamp con neoprenos en la playa bajo la bandera gris de Tarifa Surf Club, con cometas en el cielo",
        nl: "Kitecampgroep in wetsuits op het strand onder de grijze vlag van Tarifa Surf Club, met kites in de lucht",
        sv: "Kitecampgruppen i våtdräkter på stranden under Tarifa Surf Clubs grå flagga, med kites på himlen"
      }
    },
    {
      role: 'gallery',
      id: 'group-promenade',
      src: '/images/tarifa/kitecamp-group-promenade-2026.webp',
      focalPoint: '50% 55%',
      alt: {
        en: "Kitecamp group in red Tarifa Surf Club shirts with the club flag on a wall above the beach",
        de: "Kitecamp-Gruppe in roten Tarifa-Surf-Club-Shirts mit der Clubflagge auf einer Mauer über dem Strand",
        es: "Grupo del kitecamp con camisetas rojas de Tarifa Surf Club y la bandera del club en un muro sobre la playa",
        nl: "Kitecampgroep in rode Tarifa Surf Club-shirts met de clubvlag op een muurtje boven het strand",
        sv: "Kitecampgruppen i röda Tarifa Surf Club-tröjor med klubbflaggan på en mur ovanför stranden"
      }
    },
    {
      role: 'gallery',
      id: 'group-cheer',
      src: '/images/tarifa/kitecamp-group-cheer-2026.webp',
      focalPoint: '50% 45%',
      alt: {
        en: "Kitecamp participants cheering in front of the red Tarifa Surf Club flag",
        de: "Kitecamp-Teilnehmende jubeln vor der roten Flagge des Tarifa Surf Club",
        es: "Participantes del kitecamp celebrando delante de la bandera roja de Tarifa Surf Club",
        nl: "Deelnemers van het kitecamp juichen voor de rode vlag van Tarifa Surf Club",
        sv: "Deltagare i kitecampet jublar framför Tarifa Surf Clubs röda flagga"
      }
    },
    {
      role: 'og',
      src: '/images/tarifa/mark-robert-tarifa-surf-club-promenade.webp'
    }
  ]
});
