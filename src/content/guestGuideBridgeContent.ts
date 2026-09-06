import type { LocalizedText } from '../types/content';

/**
 * The one public-to-guest transition block (Content Playbook §20, DR-GUEST-005).
 *
 * The meaning: what guests need before booking is on the public page; after
 * booking, AMARA hands over the concrete selection in the Guest Guide. The
 * block names only what the guide really holds for the topic: the lines are
 * built from the recommendation records, so a topic without contacts shows no
 * contact line. `{destination}` is the destination name, `{n}`, `{x}`, `{c}`
 * and `{h}` are counts.
 */
export const guestGuideBridgeContent = {
  eyebrow: {
    en: 'After booking',
    de: 'Nach der Buchung',
    es: 'Después de reservar',
    nl: 'Na het boeken',
    sv: 'Efter bokningen'
  } satisfies LocalizedText,
  title: {
    en: 'What you need before booking is on this page. The rest comes from us.',
    de: 'Was ihr vor der Buchung wissen müsst, steht auf dieser Seite. Den Rest bekommt ihr von uns.',
    es: 'Lo que necesitáis antes de reservar está en esta página. El resto os lo damos nosotros.',
    nl: 'Wat jullie voor het boeken moeten weten, staat op deze pagina. De rest krijgen jullie van ons.',
    sv: 'Det ni behöver veta före bokningen står på den här sidan. Resten får ni av oss.'
  } satisfies LocalizedText,
  lead: {
    en: 'Everyone who stays with us in {destination} opens the AMARA Guest Guide: our selection for your house, with what this page deliberately leaves out.',
    de: 'Alle, die bei uns in {destination} wohnen, öffnen den AMARA Gästeguide: unsere Auswahl für euer Haus, mit dem, was diese Seite bewusst nicht hat.',
    es: 'Quien se aloja con nosotros en {destination} abre la Guía para huéspedes de AMARA: nuestra selección para vuestra casa, con lo que esta página deja fuera a propósito.',
    nl: 'Wie bij ons in {destination} logeert, opent de AMARA Gastengids: onze selectie voor jullie huis, met wat deze pagina bewust weglaat.',
    sv: 'Alla som bor hos oss i {destination} öppnar AMARA Gästguide: vårt urval för ert hus, med det som den här sidan medvetet utelämnar.'
  } satisfies LocalizedText,
  landingLabel: {
    en: 'About the Guest Guide',
    de: 'Mehr über den Gästeguide',
    es: 'Sobre la guía para huéspedes',
    nl: 'Over de Gastengids',
    sv: 'Om Gästguiden'
  } satisfies LocalizedText,
  lines: {
    places: {
      en: '{n} addresses in the Guest Guide{x}',
      de: '{n} Adressen im Gästeguide{x}',
      es: '{n} direcciones en la guía{x}',
      nl: '{n} adressen in de Gastengids{x}',
      sv: '{n} adresser i Gästguiden{x}'
    } satisfies LocalizedText,
    exclusive: {
      en: ', {x} of them only there',
      de: ', {x} davon nur dort',
      es: ', {x} de ellas solo allí',
      nl: ', {x} daarvan alleen daar',
      sv: ', {x} av dem bara där'
    } satisfies LocalizedText,
    contacts: {
      en: 'Reservation contact or phone number for {c} of them',
      de: 'Reservierungskontakt oder Telefonnummer bei {c} davon',
      es: 'Contacto de reserva o teléfono en {c} de ellas',
      nl: 'Reserveringscontact of telefoonnummer bij {c} ervan',
      sv: 'Bokningskontakt eller telefonnummer för {c} av dem'
    } satisfies LocalizedText,
    access: {
      en: 'Distance and route from your front door',
      de: 'Weg und Entfernung von eurer Haustür',
      es: 'Camino y distancia desde vuestra puerta',
      nl: 'Route en afstand vanaf jullie voordeur',
      sv: 'Väg och avstånd från er ytterdörr'
    } satisfies LocalizedText,
    planB: {
      en: 'A plan B when a place is full or closed',
      de: 'Ein Plan B, wenn ein Ort voll oder geschlossen ist',
      es: 'Un plan B si un sitio está lleno o cerrado',
      nl: 'Een plan B als een plek vol of dicht is',
      sv: 'En plan B när ett ställe är fullt eller stängt'
    } satisfies LocalizedText,
    firstHand: {
      en: 'Visited by us: {h}',
      de: 'Von uns selbst besucht: {h}',
      es: 'Visitados por nosotros: {h}',
      nl: 'Door ons zelf bezocht: {h}',
      sv: 'Besökta av oss själva: {h}'
    } satisfies LocalizedText
  }
};
