import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingSchoolImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.school',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/IMG_2971_Max_Gifted.jpeg',
      credit: "Max Gifted",
      alt: {
        en: "A kitesurfer landing a strapless board trick over the water",
        de: "Kitesurfer bei einem Strapless-Trick über dem Wasser",
        es: "Un kitesurfista ejecutando un truco strapless sobre el agua",
        nl: "Een kitesurfer die een strapless boardtrick maakt boven het water",
        sv: "En kitesurfare som gör ett strapless brädtrick över vattnet"
      }
    },
    {
      role: 'panorama',
      id: 'photo',
      src: '/images/tarifa/kite-walking-out.jpg',
      focalPoint: '50% 48%',
      alt: {
        en: "A rider walking to the water with board and bar at Tarifa",
        de: "Kiter geht mit Board und Bar bei Tarifa ins Wasser",
        es: "Un rider caminando hacia el agua con tabla y barra en Tarifa",
        nl: "Een rider loopt met board en bar het water in bij Tarifa",
        sv: "En rider går ut i vattnet med bräda och bar i Tarifa"
      },
      caption: {
        en: "From the first flight of the kite to riding out on your own — one step at a time.",
        de: "Vom ersten Flug des Kites bis zum eigenen Losfahren — Schritt für Schritt.",
        es: "Del primer vuelo de la cometa a salir por tu cuenta, paso a paso.",
        nl: "Van de eerste vlucht van de kite tot zelf wegvaren — stap voor stap.",
        sv: "Från kitens första flygtur till att åka ut själv — steg för steg."
      }
    },
    {
      role: 'og',
      src: '/images/tarifa/mark-robert-tarifa-surf-club-beach.webp'
    }
  ]
});
