import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceFoodImages = defineRouteImages({
  routeKey: 'nerja.experience.food',
  images: [
    {
      role: 'og',
      src: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg'
    },
    // The hero keeps its evidence panel; the photographs sit in the gallery band after the restaurant list.
    {
      role: 'gallery',
      id: 'square',
      src: '/images/nerja/nerja-square-cafe-plane-tree.jpg',
      focalPoint: '50% 55%',
      alt: {
        en: "Café tables under a plane tree on a square in Nerja's centre, parasols in the morning sun",
        de: "Cafétische unter einer Platane auf einem Platz in Nerjas Zentrum, Sonnenschirme in der Morgensonne",
        es: "Mesas de café bajo un plátano en una plaza del centro de Nerja, sombrillas al sol de la mañana",
        nl: "Cafétafels onder een plataan op een plein in het centrum van Nerja, parasols in de ochtendzon",
        sv: "Kafébord under en platan på ett torg i Nerjas centrum, parasoller i morgonsolen"
      }
    },
    {
      role: 'gallery',
      id: 'plaza',
      src: '/images/nerja/nerja-plaza-flowers-cafe-tables.jpg',
      focalPoint: '50% 55%',
      alt: {
        en: "Café tables under parasols on a small square in Nerja, flowers in the foreground",
        de: "Cafétische unter Sonnenschirmen auf einem kleinen Platz in Nerja, Blumen im Vordergrund",
        es: "Mesas de café bajo sombrillas en una pequeña plaza de Nerja, con flores en primer plano",
        nl: "Cafétafels onder parasols op een pleintje in Nerja, bloemen op de voorgrond",
        sv: "Kafébord under parasoller på ett litet torg i Nerja, blommor i förgrunden"
      }
    }
  ],
  // `routeHero` needs a hero image or brief; the page renders its evidence panel in that slot.
  briefs: [
    { role: 'hero', id: 'hero', motif: "Chiringuito am Burriana-Strand, Espetos am Feuer", format: "hochkant 3:4", light: "mittags" }
  ]
});
