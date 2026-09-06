import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaKitesurfingSpotsImages = defineRouteImages({
  routeKey: 'tarifa.kitesurfing.spots',
  images: [
    {
      role: 'hero',
      src: '/images/amara-tarifa/amara-tarifa-apartment23.webp',
      alt: {
        en: "View from AMARA across Tarifa towards the Atlantic coast",
        de: "Blick von AMARA über Tarifa zur Atlantikküste",
        es: "Vista desde AMARA sobre Tarifa hacia la costa atlántica",
        nl: "Uitzicht vanaf AMARA over Tarifa naar de Atlantische kust",
        sv: "Utsikt från AMARA över Tarifa mot Atlantkusten"
      }
    },
    {
      role: 'editorial',
      id: 'map',
      src: '/images/tarifa/tarifa-spots-map.webp',
      alt: {
        en: "Illustrated map of the Tarifa coast with the numbered spots from Los Caños de Meca to Palmones, the town, the Strait of Gibraltar and the two wind directions Poniente and Levante",
        de: "Illustrierte Karte der Küste von Tarifa mit den nummerierten Spots von Los Caños de Meca bis Palmones, der Stadt, der Straße von Gibraltar und den beiden Windrichtungen Poniente und Levante",
        es: "Mapa ilustrado de la costa de Tarifa con los spots numerados de Los Caños de Meca a Palmones, el pueblo, el estrecho de Gibraltar y las dos direcciones de viento, poniente y levante",
        nl: "Geïllustreerde kaart van de kust van Tarifa met de genummerde spots van Los Caños de Meca tot Palmones, de stad, de Straat van Gibraltar en de twee windrichtingen poniente en levante",
        sv: "Illustrerad karta över Tarifas kust med de numrerade spotsen från Los Caños de Meca till Palmones, staden, Gibraltar sund och de två vindriktningarna poniente och levante"
      },
      caption: {
        en: "Illustration for orientation, not a zoning map. The numbers follow the coast from west to east; the symbols on the map are no statement about permitted use. Which stretch is open for what is set by the beach plan, the signs and the buoys on site.",
        de: "Illustration zur Orientierung, keine Zonenkarte. Die Nummern folgen der Küste von Westen nach Osten; die Symbole der Karte sind keine Aussage über erlaubte Nutzung. Welcher Abschnitt wofür freigegeben ist, regeln Strandplan, Beschilderung und Bojen vor Ort.",
        es: "Ilustración para orientarse, no un mapa de zonas. Los números siguen la costa de oeste a este; los símbolos del mapa no dicen nada sobre el uso permitido. Qué tramo está abierto para qué lo fijan el plan de playas, la señalización y las boyas sobre el terreno.",
        nl: "Illustratie ter oriëntatie, geen zonekaart. De nummers volgen de kust van west naar oost; de symbolen op de kaart zeggen niets over toegestaan gebruik. Welk deel waarvoor open is, bepalen het strandplan, de bebording en de boeien ter plaatse.",
        sv: "Illustration för orientering, ingen zonkarta. Numren följer kusten från väst till öst; symbolerna på kartan säger inget om tillåten användning. Vilken sträcka som är öppen för vad avgörs av strandplanen, skyltarna och bojarna på plats."
      }
    },
    {
      role: 'editorial',
      id: 'action',
      src: '/images/tarifa/_DCS1902_Sebastian_Lang.jpg',
      focalPoint: '50% 38%',
      credit: "Sebastian Lang",
      alt: {
        en: "A kitesurfer riding a strapless surfboard in front of Tarifa’s old fort",
        de: "Kitesurfer strapless auf dem Surfboard vor Tarifas alter Festung",
        es: "Un kitesurfista con tabla de surf sin straps frente al antiguo fuerte de Tarifa",
        nl: "Een kitesurfer strapless op een surfboard voor het oude fort van Tarifa",
        sv: "En kitesurfare strapless på surfbräda framför Tarifas gamla fästning"
      },
      caption: {
        en: "Every spot rides differently — the wind and the swell decide where you go.",
        de: "Jeder Spot fährt sich anders — Wind und Welle entscheiden, wohin es geht.",
        es: "Cada spot se navega distinto: el viento y la ola deciden a dónde vas.",
        nl: "Elke spot vaart anders — de wind en de deining bepalen waar je heen gaat.",
        sv: "Varje spot åker olika — vinden och svallet avgör vart du åker."
      }
    }
  ]
});
