import type { AmaraLanguage } from '../types/seo';
import type { GuestGuideAccordionItem } from '../types/guestGuide';

/**
 * One content owner for durable local facts that appear on both a public
 * Location page and the booked-guest utility. Each projection keeps its
 * own job while names, locations and actions are maintained here once.
 */
export const NERJA_PHARMACY_MAP_HREF =
  'https://www.google.com/maps/search/?api=1&query=Farmacia+Calle+Castilla+Perez+Nerja';

export const NERJA_PHARMACY_PUBLIC_CONTEXT: Record<AmaraLanguage, string[]> = {
  en: [
    'For everyday medicine, we start with the **pharmacy on Calle Castilla Pérez**. If it is closed, the notice marked *Farmacia de guardia* shows the current duty pharmacy. **Centro de Salud Nerja** is roughly ten minutes away on foot for non-emergency public care.'
  ],
  de: [
    'Für alltägliche Medikamente beginnen wir bei der **Apotheke in der Calle Castilla Pérez**. Ist sie geschlossen, zeigt der Aushang *Farmacia de guardia* die aktuell diensthabende Apotheke. Das **Centro de Salud Nerja** erreicht ihr für öffentliche medizinische Hilfe ohne Notfall in ungefähr zehn Minuten zu Fuß.'
  ],
  es: [
    'Para medicinas de uso diario empezamos por la **farmacia de Calle Castilla Pérez**. Si está cerrada, el aviso *Farmacia de guardia* indica qué farmacia está de guardia. Para atención pública sin emergencia, el **Centro de Salud Nerja** queda a unos diez minutos a pie.'
  ],
  nl: [
    'Voor gewone medicijnen beginnen we bij de **apotheek aan Calle Castilla Pérez**. Is die gesloten, dan wijst de melding *Farmacia de guardia* naar de dienstdoende apotheek. Voor openbare zorg zonder noodgeval ligt **Centro de Salud Nerja** op ongeveer tien minuten lopen.'
  ],
  sv: [
    'För vanliga mediciner börjar vi med **apoteket på Calle Castilla Pérez**. Om det är stängt visar anslaget *Farmacia de guardia* vilket apotek som har jour. För offentlig vård utan nödläge ligger **Centro de Salud Nerja** cirka tio minuters promenad bort.'
  ]
};

export const NERJA_PHARMACY_GUEST_ITEM: GuestGuideAccordionItem = {
  icon: 'pharmacy',
  title: { en: 'Pharmacy', de: 'Apotheke', es: 'Farmacia', nl: 'Apotheek', sv: 'Apotek' },
  subtitle: {
    en: 'Calle Castilla Pérez · map and duty-pharmacy check',
    de: 'Calle Castilla Pérez · Karte und Notdienst prüfen',
    es: 'Calle Castilla Pérez · mapa y farmacia de guardia',
    nl: 'Calle Castilla Pérez · kaart en dienstapotheek',
    sv: 'Calle Castilla Pérez · karta och jourapotek'
  },
  body: [
    {
      en: 'For everyday medicine or small essentials, start with the pharmacy on Calle Castilla Pérez. Open the map below before you leave and check the current opening time.',
      de: 'Für alltägliche Medikamente oder kleine Besorgungen beginnt ihr bei der Apotheke in der Calle Castilla Pérez. Öffnet vor dem Losgehen die Karte und prüft die aktuelle Öffnungszeit.',
      es: 'Para medicinas de uso diario o pequeñas necesidades, empezad por la farmacia de Calle Castilla Pérez. Abrid el mapa antes de salir y comprobad el horario actual.',
      nl: 'Voor gewone medicijnen of kleine benodigdheden beginnen jullie bij de apotheek aan Calle Castilla Pérez. Open voor vertrek de kaart en controleer de actuele openingstijd.',
      sv: 'För vanliga mediciner eller småsaker börjar ni med apoteket på Calle Castilla Pérez. Öppna kartan innan ni går och kontrollera den aktuella öppettiden.'
    },
    {
      en: 'If it is closed, look for the notice marked <em>“Farmacia de guardia”</em>, which identifies the current duty pharmacy. For anything urgent, use the medical-help information above rather than waiting for a pharmacy.',
      de: 'Ist sie geschlossen, achtet auf den Aushang <em>„Farmacia de guardia“</em>; dort steht, welche Apotheke aktuell Notdienst hat. Bei dringenden Beschwerden nutzt ihr die medizinischen Hinweise weiter oben, statt auf eine Apotheke zu warten.',
      es: 'Si está cerrada, buscad el aviso <em>“Farmacia de guardia”</em>, que indica qué farmacia está de guardia. Si es urgente, utilizad la información médica anterior en lugar de esperar a que abra una farmacia.',
      nl: 'Is die gesloten, let dan op de melding <em>“Farmacia de guardia”</em>; daarop staat welke apotheek dienst heeft. Gebruik bij iets dringends de medische informatie hierboven in plaats van op een apotheek te wachten.',
      sv: 'Om det är stängt, leta efter anslaget <em>“Farmacia de guardia”</em>, som visar vilket apotek som har jour. Vid brådskande besvär använder ni vårdinformationen ovan i stället för att vänta på ett apotek.'
    }
  ],
  actions: [
    {
      label: {
        en: 'Open pharmacy in Google Maps',
        de: 'Apotheke in Google Maps öffnen',
        es: 'Abrir la farmacia en Google Maps',
        nl: 'Apotheek openen in Google Maps',
        sv: 'Öppna apoteket i Google Maps'
      },
      href: NERJA_PHARMACY_MAP_HREF
    }
  ]
};
