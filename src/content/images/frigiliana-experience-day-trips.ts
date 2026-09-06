import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceDayTripsImages = defineRouteImages({
  routeKey: 'frigiliana.experience.day-trips',
  images: [
    {
      role: 'og',
      src: '/images/hero-frigiliana.jpg'
    }
  ],
  briefs: [
    { role: 'hero', id: 'hero', motif: "Caminito del Rey auf dem Steg oder die Alhambra vom Albaicín aus", format: "hochkant 3:4", light: "Tageslicht" }
  ]
});
