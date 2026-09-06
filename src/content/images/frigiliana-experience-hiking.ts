import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceHikingImages = defineRouteImages({
  routeKey: 'frigiliana.experience.hiking',
  images: [
    {
      role: 'og',
      src: '/images/hero-frigiliana.jpg'
    }
  ],
  briefs: [
    { role: 'hero', id: 'hero', motif: "Weg oberhalb von Frigiliana in der Sierra Almijara, Blick auf Dorf und Meer", format: "hochkant 3:4", light: "morgens" }
  ]
});
