import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceFoodImages = defineRouteImages({
  routeKey: 'nerja.experience.food',
  images: [
    {
      role: 'og',
      src: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg'
    }
  ],
  briefs: [
    { role: 'hero', id: 'hero', motif: "Chiringuito am Burriana-Strand, Espetos am Feuer", format: "hochkant 3:4", light: "mittags" }
  ]
});
