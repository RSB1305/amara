import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceDayTripsImages = defineRouteImages({
  routeKey: 'nerja.experience.day-trips',
  images: [
    {
      role: 'og',
      src: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg'
    },
    // The hero keeps its radius graphic; the photograph runs wide after the destination list.
    {
      role: 'gallery',
      id: 'east',
      src: '/images/nerja/nerja-balcon-de-europa-arch-view-east.jpg',
      focalPoint: '50% 50%',
      alt: {
        en: "View through an arch of the Balcón de Europa eastwards along the coast towards the mountains",
        de: "Blick durch einen Bogen des Balcón de Europa nach Osten die Küste entlang zu den Bergen",
        es: "Vista a través de un arco del Balcón de Europa hacia el este por la costa, hasta las montañas",
        nl: "Uitzicht door een boog van de Balcón de Europa naar het oosten langs de kust richting de bergen",
        sv: "Utsikt genom en valvbåge på Balcón de Europa österut längs kusten mot bergen"
      },
      caption: {
        en: "From the Balcón looking east, towards Maro, where the coast turns steep.",
        de: "Vom Balcón nach Osten, Richtung Maro, wo die Küste steil wird.",
        es: "Desde el Balcón hacia el este, hacia Maro, donde la costa se vuelve escarpada.",
        nl: "Vanaf de Balcón naar het oosten, richting Maro, waar de kust steil wordt.",
        sv: "Från Balcón österut, mot Maro, där kusten blir brant."
      }
    }
  ],
  // `routeHero` needs a hero image or brief; the page renders its radius graphic in that slot.
  briefs: [
    { role: 'hero', id: 'hero', motif: "Blick vom Balcón de Europa nach Osten zu den Klippen von Maro", format: "hochkant 3:4", light: "Tageslicht" }
  ]
});
