import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Balcón de Europa article: the landmark itself, shown in the gallery band below the text sections. */
export const nerjaExperienceBalconDeEuropaImages = defineRouteImages({
  routeKey: 'nerja.experience.balcon-de-europa',
  images: [
    {
      role: 'gallery',
      id: 'arcade',
      src: '/images/nerja/nerja-balcon-de-europa-arcade-people.jpg',
      focalPoint: '50% 55%',
      alt: {
        en: "Visitors under the palms and the white arcade of the Balcón de Europa",
        de: "Besucher unter den Palmen und der weißen Arkade des Balcón de Europa",
        es: "Visitantes bajo las palmeras y la arcada blanca del Balcón de Europa",
        nl: "Bezoekers onder de palmen en de witte arcade van de Balcón de Europa",
        sv: "Besökare under palmerna och den vita arkaden vid Balcón de Europa"
      }
    },
    {
      role: 'gallery',
      id: 'palms',
      src: '/images/nerja/nerja-balcon-de-europa-palms-arcade.jpg',
      focalPoint: '50% 50%',
      alt: {
        en: "Palms below the white arcade of the Balcón de Europa in Nerja",
        de: "Palmen unter der weißen Arkade des Balcón de Europa in Nerja",
        es: "Palmeras bajo la arcada blanca del Balcón de Europa en Nerja",
        nl: "Palmen onder de witte arcade van de Balcón de Europa in Nerja",
        sv: "Palmer under den vita arkaden vid Balcón de Europa i Nerja"
      }
    }
  ]
});
