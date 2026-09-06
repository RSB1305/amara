import { defineRouteImages } from '../../lib/images/routeImageContract';

export const tarifaImages = defineRouteImages({
  routeKey: 'tarifa',
  images: [
    {
      role: 'hero',
      src: '/images/amara-tarifa/amara-tarifa-apartment23.webp',
      focalPoint: '50% 60%',
      alt: {
        en: "View from AMARA over Tarifa toward the Atlantic coast",
        de: "Blick von AMARA über Tarifa zur Atlantikküste",
        es: "Vista desde AMARA sobre Tarifa hacia la costa atlántica",
        nl: "Uitzicht vanaf AMARA over Tarifa richting de Atlantische kust",
        sv: "Utsikt från AMARA över Tarifa mot Atlantkusten"
      }
    }
  ],
  briefs: [
    { role: 'split', id: 'strait', motif: "Playa Chica mit dem Damm zur Isla de Tarifa, dahinter die Meerenge", format: "quer 3:2", light: "vormittags, klare Sicht" },
    { role: 'card', id: 'old-town', motif: "Altstadtgasse mit Kopfsteinpflaster, Puerta de Jerez oder Calle Sancho IV", format: "hochkant 4:5", light: "morgens, bevor die Terrassen aufbauen" },
    { role: 'card', id: 'evening', motif: "Ein Abend in der Altstadt oder in der Calle Batalla del Salado: Tisch, Licht, Leute", format: "hochkant 4:5", light: "blaue Stunde" },
    { role: 'panorama', id: 'sunset', motif: "Sonnenuntergang über Los Lances vom Strand oder vom Balkon, ohne Kites im Bild", format: "Panorama quer, mindestens 3:2, wird auf 21:9 beschnitten", light: "letzte Sonne, Horizont frei" }
  ]
});
