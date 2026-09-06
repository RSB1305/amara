import { defineRouteImages } from '../../lib/images/routeImageContract';

/** Guest Guide page `guesthome-frigiliana-farah`: private surface, never rendered on the public site. */
export const guesthomeFrigilianaFarahImages = defineRouteImages({
  routeKey: 'guesthome-frigiliana-farah',
  images: [
    {
      role: 'utility',
      id: 'coffee-filters',
      src: '/images/amara-farah/coffee-machine-filters.jpg',
      surfaces: ['guide'],
      alt: {
        en: "DeLonghi portafilter C1 with filter inserts C2 (single shot), C3 (double shot) and C4 (ESE pods)",
        de: "DeLonghi-Siebträger C1 mit den Einsätzen C2 (einfacher Espresso), C3 (doppelter Espresso) und C4 (E.S.E.-Pads)",
        es: "Portafiltro DeLonghi C1 con los filtros C2 (espresso simple), C3 (espresso doble) y C4 (monodosis ESE)",
        nl: "DeLonghi-piston C1 met filterbakjes C2 (enkele espresso), C3 (dubbele espresso) en C4 (ESE-servings)",
        sv: "DeLonghi-portafilter C1 med insatserna C2 (enkel espresso), C3 (dubbel espresso) och C4 (ESE-pods)"
      },
      caption: {
        en: "A6 portafilter handle · C1 filter holder · C2/C3/C4 inserts",
        de: "A6 Siebträgergriff · C1 Siebhalter · C2/C3/C4 Einsätze",
        es: "A6 mango del portafiltro · C1 soporte del filtro · Filtros C2/C3/C4",
        nl: "A6 handvat piston · C1 filterhouder · C2/C3/C4 filterbakjes",
        sv: "A6 portafilterhandtag · C1 filterhållare · C2/C3/C4-insatser"
      }
    }
  ]
});
