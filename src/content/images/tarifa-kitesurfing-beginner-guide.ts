import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingBeginnerGuideImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.beginner-guide',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/Airush_Valentin_Tadzio-Rurka_DSC_1412.jpg',
      focalPoint: '50% 46%',
      credit: "Tadzio Rurka / Airush",
      alt: {
        en: "A kiteboarder jumping high over the water beside Tarifa’s island fortress",
        de: "Kitesurfer beim hohen Sprung über dem Wasser neben Tarifas Inselfestung",
        es: "Un kitesurfista saltando alto sobre el agua junto a la fortaleza de la isla de Tarifa",
        nl: "Een kitesurfer die hoog over het water springt bij het eilandfort van Tarifa",
        sv: "En kitesurfare i ett högt hopp över vattnet vid Tarifas öfästning"
      },
      caption: {
        en: "Kitesurfing off Tarifa’s Isla de las Palomas",
        de: "Kitesurfen vor Tarifas Isla de las Palomas",
        es: "Kitesurf frente a la isla de las Palomas de Tarifa",
        nl: "Kitesurfen bij Tarifa’s Isla de las Palomas",
        sv: "Kitesurfing vid Tarifas Isla de las Palomas"
      }
    },
    {
      role: 'panorama',
      id: 'beginner',
      src: '/images/tarifa/kite-beginner-twintip.jpg',
      focalPoint: '50% 42%',
      alt: {
        en: "A learner on the beach holding an Airush twintip before going out",
        de: "Einsteigerin am Strand mit einem Airush-Twintip, bevor es aufs Wasser geht",
        es: "Una principiante en la playa con una tabla twintip de Airush antes de entrar al agua",
        nl: "Een beginner op het strand met een Airush-twintip voor het het water op gaat",
        sv: "En nybörjare på stranden med en Airush-twintip innan hon ska ut"
      },
      caption: {
        en: "The board comes after the kite: first the wind, then the water",
        de: "Das Board kommt nach dem Kite: erst der Wind, dann das Wasser",
        es: "La tabla llega después de la cometa: primero el viento, luego el agua",
        nl: "De board komt na de kite: eerst de wind, dan het water",
        sv: "Brädan kommer efter kiten: först vinden, sedan vattnet"
      }
    }
  ]
});
