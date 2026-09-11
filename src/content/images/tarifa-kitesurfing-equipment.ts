import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingEquipmentImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.equipment',
  images: [
    {
      role: 'hero',
      src: '/images/tarifa/AM-6309_Andre_Magaro.jpg',
      credit: "Andre Magaro",
      alt: {
        en: "A yellow Airush Lithium kite above turquoise water at Tarifa",
        de: "Ein gelber Airush-Lithium-Kite über türkisem Wasser bei Tarifa",
        es: "Una cometa Airush Lithium amarilla sobre agua turquesa en Tarifa",
        nl: "Een gele Airush Lithium-kite boven turquoise water bij Tarifa",
        sv: "En gul Airush Lithium-kite över turkost vatten vid Tarifa"
      }
    },
    {
      role: 'panorama',
      id: 'photo',
      src: '/images/tarifa/kite-bar-sand.jpg',
      focalPoint: '50% 48%',
      alt: {
        en: "An Airush control bar with quick release lying in the sand",
        de: "Airush-Bar mit Quick-Release im Sand",
        es: "Una barra de control Airush con quick release sobre la arena",
        nl: "Een Airush-bar met quick release in het zand",
        sv: "En Airush-bar med quick release i sanden"
      },
      caption: {
        en: "Current Airush gear, checked and ready — rent it or buy it through the club.",
        de: "Aktuelles Airush-Material, geprüft und bereit — leihen oder kaufen über den Club.",
        es: "Material Airush actual, revisado y listo: de alquiler o compra a través del club.",
        nl: "Actueel Airush-materiaal, gecontroleerd en klaar — huren of kopen via de club.",
        sv: "Aktuell Airush-utrustning, kontrollerad och redo — hyr eller köp via klubben."
      }
    },
    {
      role: 'og',
      src: '/images/tarifa/mark-robert-tarifa-surf-club-beach.webp'
    }
  ]
});
