import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceFestivalsImages = defineRouteImages({
  routeKey: 'frigiliana.experience.festivals',
  images: [
    {
      role: 'og',
      src: '/images/hero-frigiliana.jpg'
    }
  ],
  briefs: [
    { role: 'hero', id: 'hero', motif: "Festival de las 3 Culturas: Gasse mit Fahnen, Ständen und Menschen", format: "hochkant 3:4", light: "abends" }
  ]
});
