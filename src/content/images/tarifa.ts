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
    },
    {
      role: 'editorial',
      id: 'walk',
      src: '/images/tarifa/kite-walking-out.jpg',
      focalPoint: '50% 55%',
      alt: {
        en: "Kiter walking into the water with a board at Los Lances beach",
        de: "Kiter geht mit Board am Strand von Los Lances ins Wasser",
        es: "Kitesurfista entrando al agua con la tabla en la playa de Los Lances",
        nl: "Kiter loopt met board het water in op het strand van Los Lances",
        sv: "Kitesurfare går ut i vattnet med brädan på stranden Los Lances"
      },
      caption: {
        en: "Los Lances, looking west. The western beaches and Bolonia need a journey of their own.",
        de: "Los Lances, Blick nach Westen. Die westlichen Strände und Bolonia brauchen einen eigenen Weg.",
        es: "Los Lances, mirando al oeste. Las playas del oeste y Bolonia requieren un desplazamiento propio.",
        nl: "Los Lances, kijkend naar het westen. De westelijke stranden en Bolonia vragen om een eigen tocht.",
        sv: "Los Lances, vy västerut. De västra stränderna och Bolonia kräver en egen färd."
      }
    },
    {
      role: 'card',
      id: 'castle',
      src: '/images/tarifa/_DCS1404_Sebastian_Lang.jpg',
      focalPoint: '50% 40%',
      credit: "Sebastian Lang",
      alt: {
        en: "Castillo de Santa Catalina above Tarifa",
        de: "Castillo de Santa Catalina über Tarifa",
        es: "Castillo de Santa Catalina sobre Tarifa",
        nl: "Castillo de Santa Catalina boven Tarifa",
        sv: "Castillo de Santa Catalina ovanför Tarifa"
      },
      caption: {
        en: "Santa Catalina above the Isla. In winter the town belongs to the people who live here again.",
        de: "Santa Catalina über der Isla. Im Winter gehört der Ort wieder den Leuten, die hier leben.",
        es: "Santa Catalina sobre la Isla. En invierno el pueblo vuelve a ser de quienes viven aquí.",
        nl: "Santa Catalina boven de Isla. In de winter is het dorp weer van de mensen die hier wonen.",
        sv: "Santa Catalina ovanför Isla. På vintern tillhör staden åter dem som bor här."
      }
    },
    {
      role: 'split',
      id: 'stay',
      src: '/images/amara-tarifa/amara-tarifa-apartment01.webp',
      focalPoint: '50% 50%',
      alt: {
        en: "AMARA Family & Surf in La Marina, Tarifa",
        de: "AMARA Family & Surf in La Marina, Tarifa",
        es: "AMARA Family & Surf en La Marina, Tarifa",
        nl: "AMARA Family & Surf in La Marina, Tarifa",
        sv: "AMARA Family & Surf i La Marina, Tarifa"
      }
    },
    {
      role: 'card',
      id: 'old-town',
      src: '/images/tarifa/tarifa-old-town-hall-square.jpg',
      focalPoint: '50% 62%',
      alt: {
        en: "Whitewashed building with battlements and palms on a square in Tarifa's old town",
        de: "Weißes Gebäude mit Zinnen und Palmen an einem Platz in Tarifas Altstadt",
        es: "Edificio encalado con almenas y palmeras en una plaza del casco antiguo de Tarifa",
        nl: "Witgekalkt gebouw met kantelen en palmen aan een plein in de oude stad van Tarifa",
        sv: "Vitkalkad byggnad med tinnar och palmer vid ett torg i Tarifas gamla stad"
      }
    },
    {
      role: 'panorama',
      id: 'sunset',
      src: '/images/tarifa/los-lances-beach-tarifa-sunset.jpg',
      focalPoint: '50% 64%',
      alt: {
        en: "Sunset over the wide sand of Los Lances beach in Tarifa",
        de: "Sonnenuntergang über dem breiten Sand von Los Lances in Tarifa",
        es: "Atardecer sobre la ancha arena de la playa de Los Lances en Tarifa",
        nl: "Zonsondergang boven het brede zand van het strand Los Lances in Tarifa",
        sv: "Solnedgång över den breda sanden på stranden Los Lances i Tarifa"
      }
    }
  ],
  briefs: [
    { role: 'split', id: 'strait', motif: "Playa Chica mit dem Damm zur Isla de Tarifa, dahinter die Meerenge", format: "quer 3:2", light: "vormittags, klare Sicht" },
    { role: 'card', id: 'evening', motif: "Ein Abend in der Altstadt oder in der Calle Batalla del Salado: Tisch, Licht, Leute", format: "hochkant 4:5", light: "blaue Stunde" }
  ]
});
