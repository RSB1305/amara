import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceNightlifeImages = defineRouteImages({
  routeKey: 'nerja.experience.nightlife',
  images: [
    {
      role: 'og',
      src: '/images/amara-playa/apartment/chaparril-13.webp'
    }
  ],
  briefs: [
    { role: 'hero', id: 'hero', motif: "Balcón de Europa bei Nacht, Lichter, Menschen", format: "hochkant 3:4", light: "blaue Stunde bis Nacht" }
  ]
});
