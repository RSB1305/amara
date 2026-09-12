import { defineRouteImages } from '../../lib/images/routeImageContract';

export const nerjaExperienceImages = defineRouteImages({
  routeKey: 'nerja.experience',
  images: [
    {
      role: 'hero',
      src: '/images/nerja/nerja-balcon-de-europa-palms-arcade.jpg',
      focalPoint: '50% 50%',
      alt: {
        en: "Palms below the white arcade of the Balcón de Europa in Nerja",
        de: "Palmen unter der weißen Arkade des Balcón de Europa in Nerja",
        es: "Palmeras bajo la arcada blanca del Balcón de Europa en Nerja",
        nl: "Palmen onder de witte arcade van de Balcón de Europa in Nerja",
        sv: "Palmer under den vita arkaden vid Balcón de Europa i Nerja"
      }
    },
    {
      // The aerial stays the stable Open Graph address; the location hub keeps it as its hero.
      role: 'og',
      src: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg'
    }
  ]
});
