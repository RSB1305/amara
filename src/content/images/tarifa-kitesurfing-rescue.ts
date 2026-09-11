import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingRescueImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.rescue',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/Airush_Valentin_Tadzio-Rurka_DSC_3203.jpg',
      credit: "Tadzio Rurka / Airush",
      alt: {
        en: "A kitesurfer high above the waves off Tarifa, the old tuna-fishery buildings behind",
        de: "Kitesurfer hoch über den Wellen vor Tarifa, dahinter die alten Almadraba-Gebäude",
        es: "Un kitesurfista muy alto sobre las olas frente a Tarifa, con las antiguas naves de la almadraba detrás",
        nl: "Een kitesurfer hoog boven de golven voor Tarifa, met de oude almadraba-gebouwen erachter",
        sv: "En kitesurfare högt över vågorna utanför Tarifa, med de gamla tonfiskeribyggnaderna bakom"
      }
    },
    {
      role: 'og',
      src: '/images/robert-amara-host.jpg'
    }
  ]
});
