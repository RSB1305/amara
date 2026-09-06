import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingBildungsurlaubImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.bildungsurlaub',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/IMG_9084.jpg',
      alt: {
        en: "A Tarifa Surf Club member with a longboard on the beach in Tarifa",
        de: "Ein Mitglied des Tarifa Surf Club mit Longboard am Strand von Tarifa",
        es: "Un miembro del Tarifa Surf Club con un longboard en la playa de Tarifa",
        nl: "Een lid van de Tarifa Surf Club met een longboard op het strand van Tarifa",
        sv: "En medlem i Tarifa Surf Club med en longboard på stranden i Tarifa"
      }
    },
    {
      role: 'panorama',
      id: 'week',
      src: '/images/tarifa/_DCS9465_Sebastian_Lang.jpg',
      focalPoint: '50% 45%',
      credit: "Sebastian Lang",
      alt: {
        en: "A rider setting up a yellow Airush kite with a board on the beach",
        de: "Kiterin baut am Strand einen gelben Airush-Kite mit Board auf",
        es: "Una rider preparando una cometa Airush amarilla con la tabla en la playa",
        nl: "Een rider bouwt op het strand een gele Airush-kite op met board",
        sv: "En rider riggar en gul Airush-kite med bräda på stranden"
      },
      caption: {
        en: "Mornings for the seminar, afternoons on the water — the day has room for both.",
        de: "Vormittags das Seminar, nachmittags aufs Wasser — der Tag hat für beides Platz.",
        es: "Por la mañana el seminario, por la tarde al agua: el día tiene sitio para ambos.",
        nl: "’s Ochtends het seminar, ’s middags het water op — de dag heeft ruimte voor beide.",
        sv: "Förmiddag seminarium, eftermiddag på vattnet — dagen har plats för båda."
      }
    }
  ]
});
