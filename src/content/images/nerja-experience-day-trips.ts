import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceDayTripsImages = defineRouteImages({
  routeKey: 'nerja.experience.day-trips',
  images: [
    {
      role: 'og',
      src: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg'
    }
  ],
  briefs: [
    { role: 'hero', id: 'hero', motif: "Blick vom Balcón de Europa nach Osten zu den Klippen von Maro", format: "hochkant 3:4", light: "Tageslicht" }
  ]
});
