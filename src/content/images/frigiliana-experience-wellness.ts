import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceWellnessImages = defineRouteImages({
  routeKey: 'frigiliana.experience.wellness',
  images: [
    {
      role: 'hero',
      src: '/images/wellness/frigiliana-wellness-2.jpeg',
      width: 1512,
      alt: {
        en: "Two guests on outdoor massage tables beneath a pergola with mountain views near Frigiliana",
        de: "Zwei Gäste auf Massageliegen im Freien unter einer Pergola mit Bergblick bei Frigiliana",
        es: "Dos huéspedes en camillas de masaje al aire libre bajo una pérgola con vistas a la montaña cerca de Frigiliana",
        nl: "Twee gasten op massagetafels in de buitenlucht onder een pergola met bergzicht bij Frigiliana",
        sv: "Två gäster på massagebänkar utomhus under en pergola med utsikt över bergen nära Frigiliana"
      }
    },
    {
      role: 'place',
      recommendationId: 'frigiliana.wellness.frigiliana-wellness',
      src: '/images/wellness/frigiliana-wellness-1.jpeg',
      alt: {
        en: "Outdoor massage beside a pool in the hills around Frigiliana",
        de: "Massage im Freien an einem Pool in den Hügeln rund um Frigiliana",
        es: "Masaje al aire libre junto a una piscina en las colinas de Frigiliana",
        nl: "Massage in de buitenlucht bij een zwembad in de heuvels rond Frigiliana",
        sv: "Utomhusmassage vid en pool i kullarna runt Frigiliana"
      }
    },
    {
      role: 'place',
      recommendationId: 'frigiliana.wellness.lidia-california-massage',
      src: '/images/wellness/masaje_californiano-1.webp',
      alt: {
        en: "Close-up of a Californian massage treatment on the neck and shoulders",
        de: "Nahaufnahme einer kalifornischen Massage an Nacken und Schultern",
        es: "Primer plano de un masaje californiano en el cuello y los hombros",
        nl: "Close-up van een Californische massage van nek en schouders",
        sv: "Närbild av kalifornisk massage av nacke och axlar"
      }
    },
    {
      role: 'og',
      src: '/images/hero-frigiliana.jpg'
    }
  ]
});
