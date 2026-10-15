import { defineRouteImages } from '../../lib/images/routeImageContract';

export const frigilianaExperienceOldTownIngenioImages = defineRouteImages({
  routeKey: 'frigiliana.experience.old-town.ingenio',
  images: [
    {
      role: 'hero',
      src: '/images/frigiliana/frigiliana-el-ingenio-palast-zuckerrohrfabrik.jpg',
      width: 2048,
      alt: {
        en: 'El Ingenio, the former count’s palace and sugar works, at the lower edge of Frigiliana’s old town',
        de: 'El Ingenio, der ehemalige Grafenpalast und das Zuckerwerk, am unteren Rand von Frigilianas Altstadt',
        es: 'El Ingenio, el antiguo palacio condal y fábrica de azúcar, en el borde bajo del casco antiguo de Frigiliana',
        nl: 'El Ingenio, het voormalige grafelijk paleis en de suikerfabriek, aan de onderrand van de oude kern van Frigiliana',
        sv: 'El Ingenio, det forna grevepalatset och sockerbruket, i nedre kanten av Frigilianas gamla stan'
      }
    },
    {
      role: "editorial",
      id: "night",
      src: "/images/frigiliana/el-ingenio-nacht-2026.webp",
      alt: {
        en: "The façade of El Ingenio in Frigiliana at night",
        de: "Die Fassade von El Ingenio in Frigiliana bei Nacht",
        es: "La fachada de El Ingenio en Frigiliana de noche",
        nl: "De gevel van El Ingenio in Frigiliana in de avond",
        sv: "El Ingenios fasad i Frigiliana på kvällen"
      },
      caption: {
        en: "The façade of El Ingenio in Frigiliana at night",
        de: "Die Fassade von El Ingenio in Frigiliana bei Nacht",
        es: "La fachada de El Ingenio en Frigiliana de noche",
        nl: "De gevel van El Ingenio in Frigiliana in de avond",
        sv: "El Ingenios fasad i Frigiliana på kvällen"
      },
      takenAt: "2026-10-13"
    }
  ]
});
