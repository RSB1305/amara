import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceRestaurantsImages = defineRouteImages({
  routeKey: 'frigiliana.experience.restaurants',
  images: [
    {
      role: 'og',
      src: '/images/hero-frigiliana.jpg'
    }
  ],
  briefs: [
    { role: 'hero', id: 'hero', motif: "Terrassentisch in Frigiliana mit Blick über die Dächer, gedeckt", format: "hochkant 3:4", light: "früher Abend" }
  ]
});
