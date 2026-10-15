import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceOldTownCeramicPanelsImages = defineRouteImages({
  routeKey: 'frigiliana.experience.old-town.ceramic-panels',
  images: [
    {
      role: 'hero',
      src: '/images/frigiliana/frigiliana-keramiktafel-morisken-landwirtschaft.jpg',
      width: 2048,
      alt: {
        en: 'Hand-painted ceramic panel in Frigiliana’s old town depicting a scene of the Morisco story',
        de: 'Handbemalte Keramiktafel in Frigilianas Altstadt mit einer Szene der Morisken-Geschichte',
        es: 'Panel de cerámica pintado a mano en el casco antiguo de Frigiliana con una escena de la historia morisca',
        nl: 'Handbeschilderd keramisch paneel in de oude kern van Frigiliana met een scène uit de Moriskse geschiedenis',
        sv: 'Handmålad keramikpanel i Frigilianas gamla stan med en scen ur den moriskiska historien'
      }
    },
    {
      role: "split",
      id: "panel",
      sizes: "(max-width: 1023px) calc(100vw - 3rem), 50vw",
      src: "/images/frigiliana/keramiktafel-morisken-2026.webp",
      alt: {
        en: "Ceramic panel with a scene and verses from Frigiliana’s Morisco history",
        de: "Keramiktafel mit einer Szene und Versen aus Frigilianas moriskischer Geschichte",
        es: "Panel de cerámica con una escena y versos de la historia morisca de Frigiliana",
        nl: "Keramisch paneel met een scène en verzen uit de Moorse geschiedenis van Frigiliana",
        sv: "Keramikpanel med en scen och verser ur Frigilianas moriska historia"
      },
      takenAt: "2026-10-14"
    }
  ]
});
