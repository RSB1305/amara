import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceOldTownImages = defineRouteImages({
  routeKey: 'frigiliana.experience.old-town',
  images: [
    {
      role: 'hero',
      src: '/images/frigiliana/frigiliana-panorama-sonnenuntergang-weisses-dorf.jpg',
      width: 2048,
      alt: {
        en: "Frigiliana’s whitewashed old town at sunset, seen across the rooftops",
        de: "Frigilianas weiß gekalkte Altstadt bei Sonnenuntergang, über die Dächer gesehen",
        es: "El casco antiguo encalado de Frigiliana al atardecer, sobre los tejados",
        nl: "De witgekalkte oude kern van Frigiliana bij zonsondergang, over de daken gezien",
        sv: "Frigilianas vitkalkade gamla stan i solnedgången, sett över taken"
      }
    }
  ]
});
