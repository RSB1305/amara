import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaExperienceBeachesImages = defineRouteImages({
  routeKey: 'tarifa.experience.beaches',
  images: [
    {
      role: 'hero',
      src: '/images/amara-tarifa/amara-tarifa-apartment23.webp',
      width: 1600,
      alt: {
        en: "View from AMARA over Tarifa toward the Atlantic coast",
        de: "Blick von AMARA über Tarifa zur Atlantikküste",
        es: "Vista desde AMARA sobre Tarifa hacia la costa atlántica",
        nl: "Uitzicht vanaf AMARA over Tarifa richting de Atlantische kust",
        sv: "Utsikt från AMARA över Tarifa mot Atlantkusten"
      }
    },
    {
      role: 'panorama',
      src: '/images/tarifa/DSCF9576_Adriaan_Yellow_Union_GlenCarin_Dolphin_MDMARKGRAAFF.jpg',
      focalPoint: '50% 45%',
      credit: "MD Markgraaff",
      alt: {
        en: "Two kites over the Atlantic off Tarifa in evening light",
        de: "Zwei Kites über dem Atlantik vor Tarifa im Abendlicht",
        es: "Dos cometas sobre el Atlántico frente a Tarifa a la luz de la tarde",
        nl: "Twee kites boven de Atlantische Oceaan voor Tarifa in avondlicht",
        sv: "Två kites över Atlanten utanför Tarifa i kvällsljus"
      }
    }
  ]
});
