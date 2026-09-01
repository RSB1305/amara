import type { LocalizedText } from '../types/content';
import type { AmaraLanguage } from '../types/seo';

export type StaySearchDestination = 'all' | 'frigiliana' | 'nerja' | 'tarifa';

const localized = <T extends LocalizedText>(value: T) => value;

export const staySearchDestinations: Array<{
  value: StaySearchDestination;
  label: LocalizedText;
}> = [
  {
    value: 'all',
    label: localized({
      en: 'All destinations', de: 'Alle Reiseziele', es: 'Todos los destinos',
      nl: 'Alle bestemmingen', sv: 'Alla resmål'
    })
  },
  { value: 'frigiliana', label: localized({ en: 'Frigiliana', de: 'Frigiliana', es: 'Frigiliana', nl: 'Frigiliana', sv: 'Frigiliana' }) },
  { value: 'nerja', label: localized({ en: 'Nerja', de: 'Nerja', es: 'Nerja', nl: 'Nerja', sv: 'Nerja' }) },
  { value: 'tarifa', label: localized({ en: 'Tarifa', de: 'Tarifa', es: 'Tarifa', nl: 'Tarifa', sv: 'Tarifa' }) }
];

export const staySearchCopy = {
  eyebrow: localized({ en: 'Find your AMARA stay', de: 'Eure AMARA-Unterkunft finden', es: 'Encontrad vuestro alojamiento AMARA', nl: 'Vind jullie AMARA-verblijf', sv: 'Hitta ert AMARA-boende' }),
  destination: localized({ en: 'Destination', de: 'Reiseziel', es: 'Destino', nl: 'Bestemming', sv: 'Resmål' }),
  arrival: localized({ en: 'Arrival', de: 'Anreise', es: 'Llegada', nl: 'Aankomst', sv: 'Ankomst' }),
  departure: localized({ en: 'Departure', de: 'Abreise', es: 'Salida', nl: 'Vertrek', sv: 'Avresa' }),
  guests: localized({ en: 'Guests', de: 'Gäste', es: 'Huéspedes', nl: 'Gasten', sv: 'Gäster' }),
  chooseArrival: localized({ en: 'Choose arrival', de: 'Anreise wählen', es: 'Elegir llegada', nl: 'Aankomst kiezen', sv: 'Välj ankomst' }),
  chooseDeparture: localized({ en: 'Choose departure', de: 'Abreise wählen', es: 'Elegir salida', nl: 'Vertrek kiezen', sv: 'Välj avresa' }),
  submit: localized({ en: 'Check availability', de: 'Verfügbarkeit prüfen', es: 'Consultar disponibilidad', nl: 'Beschikbaarheid bekijken', sv: 'Se tillgänglighet' }),
  guest: localized({ en: '{count} guest', de: '{count} Gast', es: '{count} huésped', nl: '{count} gast', sv: '{count} gäst' }),
  guestsPlural: localized({ en: '{count} guests', de: '{count} Gäste', es: '{count} huéspedes', nl: '{count} gasten', sv: '{count} gäster' }),
  guestsCompact: localized({ en: '{count} P.', de: '{count} P.', es: '{count} P.', nl: '{count} P.', sv: '{count} P.' }),
  calendarTitle: localized({ en: 'Choose your stay', de: 'Aufenthalt wählen', es: 'Elegid vuestra estancia', nl: 'Kies jullie verblijf', sv: 'Välj er vistelse' }),
  calendarHelp: localized({ en: 'Choose arrival and departure — up to 45 nights.', de: 'Wählt An- und Abreise – für bis zu 45 Nächte.', es: 'Elegid la llegada y la salida, para un máximo de 45 noches.', nl: 'Kies aankomst en vertrek — voor maximaal 45 nachten.', sv: 'Välj ankomst och avresa — för högst 45 nätter.' }),
  selectionCompleteHelp: localized({ en: 'Your dates are set. Check availability or choose a new arrival.', de: 'Eure Reisedaten stehen. Prüft jetzt die Verfügbarkeit oder wählt eine neue Anreise.', es: 'Ya tenéis las fechas. Consultad la disponibilidad o elegid otra llegada.', nl: 'Jullie data staan vast. Bekijk de beschikbaarheid of kies een nieuwe aankomst.', sv: 'Era datum är valda. Se tillgängligheten eller välj en ny ankomst.' }),
  loadingCalendar: localized({ en: 'Loading live availability for your destination…', de: 'Live-Verfügbarkeit für euer Reiseziel wird geladen…', es: 'Cargando la disponibilidad actual para vuestro destino…', nl: 'Live beschikbaarheid voor jullie bestemming wordt geladen…', sv: 'Aktuell tillgänglighet för ert resmål hämtas…' }),
  calendarError: localized({ en: 'We cannot load live availability right now, so dates are temporarily locked. Please reload the page and try again.', de: 'Wir können die Live-Verfügbarkeit gerade nicht laden. Deshalb ist die Datumsauswahl vorübergehend gesperrt. Bitte ladet die Seite neu und versucht es noch einmal.', es: 'Ahora mismo no podemos cargar la disponibilidad. Por eso, las fechas están bloqueadas temporalmente. Recargad la página e intentadlo de nuevo.', nl: 'We kunnen de live beschikbaarheid nu niet laden. Daarom kun je tijdelijk geen data kiezen. Laad de pagina opnieuw en probeer het nog eens.', sv: 'Vi kan inte hämta aktuell tillgänglighet just nu. Därför går det tillfälligt inte att välja datum. Ladda om sidan och försök igen.' }),
  chooseDepartureHelp: localized({ en: 'Now choose a departure, up to 45 nights after arrival.', de: 'Wählt jetzt eine Abreise, höchstens 45 Nächte nach der Anreise.', es: 'Ahora elegid una salida, hasta 45 noches después de la llegada.', nl: 'Kies nu een vertrek, maximaal 45 nachten na aankomst.', sv: 'Välj nu avresa, högst 45 nätter efter ankomst.' }),
  minimumStayHelp: localized({
    en: 'Minimum stay from this arrival: {count} nights. Earliest possible departure: {departure}.',
    de: 'Mindestaufenthalt ab dieser Anreise: {count} Nächte. Früheste mögliche Abreise: {departure}.',
    es: 'Estancia mínima desde esta llegada: {count} noches. Primera salida posible: {departure}.',
    nl: 'Minimumverblijf vanaf deze aankomst: {count} nachten. Vroegst mogelijke vertrekdatum: {departure}.',
    sv: 'Minsta vistelse från denna ankomst: {count} nätter. Tidigaste möjliga avresa: {departure}.'
  }),
  minimumStayViolation: localized({
    en: 'A minimum stay of {count} nights applies for arrival on {arrival}. Please choose a departure on or after {departure}.',
    de: 'Bei einer Anreise am {arrival} beträgt der Mindestaufenthalt {count} Nächte. Bitte wählt eine Abreise ab dem {departure}.',
    es: 'Para una llegada el {arrival}, la estancia mínima es de {count} noches. Elegid una salida a partir del {departure}.',
    nl: 'Bij aankomst op {arrival} geldt een minimumverblijf van {count} nachten. Kies een vertrek vanaf {departure}.',
    sv: 'Vid ankomst den {arrival} gäller minst {count} nätter. Välj avresa tidigast den {departure}.'
  }),
  stayContinuityViolation: localized({
    en: 'No single AMARA stay is available for every night from {arrival} to {departure}. Choose a selectable departure or a new arrival.',
    de: 'Vom {arrival} bis zur Abreise am {departure} ist keine einzelne AMARA-Unterkunft durchgehend frei. Wählt ein verfügbares Abreisedatum oder eine neue Anreise.',
    es: 'Ningún alojamiento AMARA está disponible todas las noches desde el {arrival} hasta la salida del {departure}. Elegid una fecha de salida disponible u otra llegada.',
    nl: 'Er is geen enkel AMARA-verblijf vrij voor alle nachten van {arrival} tot het vertrek op {departure}. Kies een beschikbare vertrekdatum of een nieuwe aankomst.',
    sv: 'Inget enskilt AMARA-boende är ledigt varje natt från {arrival} till avresan den {departure}. Välj ett valbart avresedatum eller en ny ankomst.'
  }),
  previousMonth: localized({ en: 'Previous month', de: 'Vorheriger Monat', es: 'Mes anterior', nl: 'Vorige maand', sv: 'Föregående månad' }),
  nextMonth: localized({ en: 'Next month', de: 'Nächster Monat', es: 'Mes siguiente', nl: 'Volgende maand', sv: 'Nästa månad' }),
  unavailableDay: localized({ en: 'Unavailable', de: 'Nicht wählbar', es: 'No disponible', nl: 'Niet beschikbaar', sv: 'Inte tillgänglig' }),
  availableDay: localized({ en: 'Available', de: 'Wählbar', es: 'Disponible', nl: 'Beschikbaar', sv: 'Tillgänglig' }),
  invalidDeparture: localized({
    en: 'not selectable as departure', de: 'nicht als Abreise auswählbar',
    es: 'no seleccionable como salida', nl: 'niet selecteerbaar als vertrek',
    sv: 'kan inte väljas som avresa'
  }),
  minimumStayDeparture: localized({
    en: 'minimum stay not reached; select for details',
    de: 'Mindestaufenthalt noch nicht erreicht; für Details auswählen',
    es: 'no se alcanza la estancia mínima; seleccionad para ver los detalles',
    nl: 'minimumverblijf nog niet bereikt; selecteer voor uitleg',
    sv: 'minsta vistelse har inte uppnåtts; välj för mer information'
  }),
  stayContinuityDeparture: localized({
    en: 'no single stay covers the full period; select for details',
    de: 'keine einzelne Unterkunft deckt den gesamten Zeitraum ab; für Details auswählen',
    es: 'ningún alojamiento cubre todo el periodo; seleccionad para ver los detalles',
    nl: 'geen enkel verblijf dekt de volledige periode; selecteer voor uitleg',
    sv: 'inget enskilt boende täcker hela perioden; välj för mer information'
  }),
  selectedArrival: localized({
    en: 'selected arrival', de: 'gewählte Anreise', es: 'llegada seleccionada',
    nl: 'gekozen aankomst', sv: 'vald ankomst'
  }),
  fromPrice: localized({
    en: 'from {price}', de: 'ab {price}', es: 'desde {price}',
    nl: 'vanaf {price}', sv: 'från {price}'
  }),
  invalidSearch: localized({ en: 'Choose arrival and departure to see available stays and total prices.', de: 'Wählt An- und Abreise. Dann seht ihr freie Unterkünfte mit Gesamtpreis.', es: 'Elegid la llegada y la salida para ver alojamientos disponibles y precios totales.', nl: 'Kies aankomst en vertrek om beschikbare verblijven en totaalprijzen te zien.', sv: 'Välj ankomst och avresa för att se lediga boenden och totalpriser.' }),
  resultsEyebrow: localized({ en: 'Book direct with AMARA', de: 'Direkt bei AMARA buchen', es: 'Reservar directamente con AMARA', nl: 'Direct boeken bij AMARA', sv: 'Boka direkt hos AMARA' }),
  resultsTitle: localized({ en: 'Availability and prices', de: 'Verfügbarkeit und Preise', es: 'Disponibilidad y precios', nl: 'Beschikbaarheid en prijzen', sv: 'Tillgänglighet och priser' }),
  allStaysTitle: localized({ en: 'All AMARA stays', de: 'Alle AMARA-Unterkünfte', es: 'Todos los alojamientos AMARA', nl: 'Alle AMARA-verblijven', sv: 'Alla AMARA-boenden' }),
  destinationStaysTitle: localized({ en: 'Stays in {destination}', de: 'Unterkünfte in {destination}', es: 'Alojamientos en {destination}', nl: 'Verblijven in {destination}', sv: 'Boenden i {destination}' }),
  destinationStaysPrompt: localized({ en: 'Choose your dates to see available stays and total prices.', de: 'Wählt eure Reisedaten, um freie Unterkünfte und Gesamtpreise zu sehen.', es: 'Elegid vuestras fechas para ver los alojamientos disponibles y los precios totales.', nl: 'Kies jullie reisdata om beschikbare verblijven en totaalprijzen te zien.', sv: 'Välj era resedatum för att se lediga boenden och totalpriser.' }),
  loading: localized({ en: 'We are checking availability and total prices…', de: 'Wir prüfen Verfügbarkeit und Gesamtpreise…', es: 'Estamos comprobando la disponibilidad y los precios totales…', nl: 'We controleren beschikbaarheid en totaalprijzen…', sv: 'Vi kontrollerar tillgänglighet och totalpriser…' }),
  totalPrice: localized({ en: 'Total price', de: 'Gesamtpreis', es: 'Precio total', nl: 'Totaalprijs', sv: 'Totalpris' }),
  viewStay: localized({ en: 'Choose this stay', de: 'Diese Unterkunft wählen', es: 'Elegir este alojamiento', nl: 'Dit verblijf kiezen', sv: 'Välj detta boende' }),
  night: localized({ en: '{count} night', de: '{count} Nacht', es: '{count} noche', nl: '{count} nacht', sv: '{count} natt' }),
  nights: localized({ en: '{count} nights', de: '{count} Nächte', es: '{count} noches', nl: '{count} nachten', sv: '{count} nätter' }),
  empty: localized({ en: 'Unfortunately, none of our stays in {destination} is available for these dates. Try different dates.', de: 'Für diese Reisedaten ist in {destination} leider keine unserer Unterkünfte frei. Probiert andere Daten.', es: 'Por desgracia, ninguno de nuestros alojamientos en {destination} está disponible en esas fechas. Probad con otras fechas.', nl: 'Helaas is geen van onze verblijven in {destination} op deze data beschikbaar. Probeer andere data.', sv: 'Tyvärr är inget av våra boenden i {destination} ledigt under de här datumen. Prova andra datum.' }),
  allDestinationsCta: localized({ en: 'Show all destinations', de: 'Alle Reiseziele anzeigen', es: 'Ver todos los destinos', nl: 'Alle bestemmingen tonen', sv: 'Visa alla resmål' }),
  partialError: localized({ en: 'A price is currently missing for some stays. All results shown are up to date.', de: 'Bei einigen Unterkünften fehlt gerade der Preis. Alle angezeigten Ergebnisse sind aktuell.', es: 'Ahora mismo falta el precio de algunos alojamientos. Todos los resultados mostrados están actualizados.', nl: 'Bij enkele verblijven ontbreekt momenteel de prijs. Alle getoonde resultaten zijn actueel.', sv: 'Priset saknas just nu för några boenden. Alla resultat som visas är aktuella.' }),
  searchError: localized({ en: 'We cannot load availability and prices right now. Please reload the page and try again.', de: 'Wir können Verfügbarkeit und Preise gerade nicht laden. Bitte ladet die Seite neu und versucht es noch einmal.', es: 'Ahora mismo no podemos cargar la disponibilidad y los precios. Recargad la página e intentadlo de nuevo.', nl: 'We kunnen beschikbaarheid en prijzen nu niet laden. Laad de pagina opnieuw en probeer het nog eens.', sv: 'Vi kan inte hämta tillgänglighet och priser just nu. Ladda om sidan och försök igen.' }),
  changeSearch: localized({ en: 'Change search', de: 'Suche ändern', es: 'Cambiar búsqueda', nl: 'Zoekopdracht wijzigen', sv: 'Ändra sökning' })
} satisfies Record<string, LocalizedText>;

export const staySearchLocale: Record<AmaraLanguage, string> = {
  en: 'en-GB', de: 'de-DE', es: 'es-ES', nl: 'nl-NL', sv: 'sv-SE'
};
