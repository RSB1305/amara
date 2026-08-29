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
  calendarHelp: localized({ en: 'Choose arrival and departure. Stays can be up to 45 nights.', de: 'Wählt Anreise und Abreise. Aufenthalte sind bis zu 45 Nächte möglich.', es: 'Elegid llegada y salida. La estancia puede ser de hasta 45 noches.', nl: 'Kies aankomst en vertrek. Een verblijf kan maximaal 45 nachten duren.', sv: 'Välj ankomst och avresa. En vistelse kan vara högst 45 nätter.' }),
  selectionCompleteHelp: localized({ en: 'Your dates are selected. Check availability below or choose a new arrival.', de: 'Eure Reisedaten sind gewählt. Prüft unten die Verfügbarkeit oder wählt eine neue Anreise.', es: 'Vuestras fechas están seleccionadas. Consultad la disponibilidad abajo o elegid una nueva llegada.', nl: 'Jullie datums zijn gekozen. Bekijk hieronder de beschikbaarheid of kies een nieuwe aankomst.', sv: 'Era datum är valda. Se tillgängligheten nedan eller välj en ny ankomst.' }),
  loadingCalendar: localized({ en: 'Loading live availability for your destination…', de: 'Live-Verfügbarkeit für euer Reiseziel wird geladen…', es: 'Cargando la disponibilidad actual para vuestro destino…', nl: 'Live beschikbaarheid voor jullie bestemming wordt geladen…', sv: 'Aktuell tillgänglighet för ert resmål hämtas…' }),
  calendarError: localized({ en: 'Live availability is currently unavailable. No dates have been treated as unavailable.', de: 'Die Live-Verfügbarkeit ist derzeit nicht erreichbar. Reisedaten wurden deshalb nicht als belegt behandelt.', es: 'La disponibilidad actual no está disponible en este momento. Por ello, ninguna fecha se ha tratado como ocupada.', nl: 'Live beschikbaarheid is momenteel niet bereikbaar. Datums zijn daarom niet als bezet behandeld.', sv: 'Aktuell tillgänglighet kan inte hämtas just nu. Datum har därför inte behandlats som upptagna.' }),
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
  selectedArrival: localized({
    en: 'selected arrival', de: 'gewählte Anreise', es: 'llegada seleccionada',
    nl: 'gekozen aankomst', sv: 'vald ankomst'
  }),
  fromPrice: localized({
    en: 'from {price}', de: 'ab {price}', es: 'desde {price}',
    nl: 'vanaf {price}', sv: 'från {price}'
  }),
  invalidSearch: localized({ en: 'Choose arrival and departure. We will then show available stays and total prices.', de: 'Wählt Anreise und Abreise. Danach zeigen wir euch freie Unterkünfte und die Gesamtpreise.', es: 'Elegid llegada y salida. Después os mostraremos los alojamientos disponibles y los precios totales.', nl: 'Kies aankomst en vertrek. Daarna tonen we beschikbare verblijven en totaalprijzen.', sv: 'Välj ankomst och avresa. Därefter visar vi lediga boenden och totalpriser.' }),
  resultsEyebrow: localized({ en: 'Book direct with AMARA', de: 'Direkt bei AMARA buchen', es: 'Reservar directamente con AMARA', nl: 'Direct boeken bij AMARA', sv: 'Boka direkt hos AMARA' }),
  resultsTitle: localized({ en: 'Availability and prices', de: 'Verfügbarkeit und Preise', es: 'Disponibilidad y precios', nl: 'Beschikbaarheid en prijzen', sv: 'Tillgänglighet och priser' }),
  destinationStaysTitle: localized({ en: 'Stays in {destination}', de: 'Unterkünfte in {destination}', es: 'Alojamientos en {destination}', nl: 'Verblijven in {destination}', sv: 'Boenden i {destination}' }),
  destinationStaysPrompt: localized({ en: 'Choose your dates to see which stays are available and what they cost in total.', de: 'Wählt eure Reisedaten. Danach seht ihr, welche Unterkünfte frei sind und was sie insgesamt kosten.', es: 'Elegid las fechas. Después veréis qué alojamientos están disponibles y cuál es el precio total.', nl: 'Kies jullie reisdata. Daarna zien jullie welke verblijven vrij zijn en wat ze in totaal kosten.', sv: 'Välj era resedatum. Därefter ser ni vilka boenden som är lediga och vad de kostar totalt.' }),
  loading: localized({ en: 'We are checking availability and total prices…', de: 'Wir prüfen Verfügbarkeit und Gesamtpreise…', es: 'Estamos comprobando la disponibilidad y los precios totales…', nl: 'We controleren beschikbaarheid en totaalprijzen…', sv: 'Vi kontrollerar tillgänglighet och totalpriser…' }),
  totalPrice: localized({ en: 'Total price', de: 'Gesamtpreis', es: 'Precio total', nl: 'Totaalprijs', sv: 'Totalpris' }),
  viewStay: localized({ en: 'Choose this stay', de: 'Diese Unterkunft wählen', es: 'Elegir este alojamiento', nl: 'Dit verblijf kiezen', sv: 'Välj detta boende' }),
  night: localized({ en: '{count} night', de: '{count} Nacht', es: '{count} noche', nl: '{count} nacht', sv: '{count} natt' }),
  nights: localized({ en: '{count} nights', de: '{count} Nächte', es: '{count} noches', nl: '{count} nachten', sv: '{count} nätter' }),
  empty: localized({ en: 'None of our stays in {destination} is available for these dates.', de: 'An diesen Reisedaten ist leider keine unserer Unterkünfte in {destination} frei.', es: 'Ninguno de nuestros alojamientos en {destination} está disponible para estas fechas.', nl: 'Geen van onze verblijven in {destination} is op deze data beschikbaar.', sv: 'Inget av våra boenden i {destination} är ledigt under de här datumen.' }),
  allDestinationsCta: localized({ en: 'Show all destinations', de: 'Alle Reiseziele anzeigen', es: 'Ver todos los destinos', nl: 'Alle bestemmingen tonen', sv: 'Visa alla resmål' }),
  partialError: localized({ en: 'We could not load a price for every stay. The results shown are current.', de: 'Für einzelne Unterkünfte konnten wir gerade keinen Preis laden. Die angezeigten Ergebnisse sind aktuell.', es: 'No hemos podido cargar el precio de todos los alojamientos. Los resultados mostrados están actualizados.', nl: 'We konden niet voor elk verblijf een prijs laden. De getoonde resultaten zijn actueel.', sv: 'Vi kunde inte läsa in priset för alla boenden. Resultaten som visas är aktuella.' }),
  searchError: localized({ en: 'We cannot load availability and prices right now. Please try again shortly.', de: 'Wir können Verfügbarkeit und Preise gerade nicht laden. Bitte versucht es in Kürze noch einmal.', es: 'Ahora mismo no podemos cargar la disponibilidad y los precios. Volved a intentarlo en breve.', nl: 'We kunnen beschikbaarheid en prijzen nu niet laden. Probeer het binnenkort opnieuw.', sv: 'Vi kan inte läsa in tillgänglighet och priser just nu. Försök igen om en liten stund.' }),
  changeSearch: localized({ en: 'Change search', de: 'Suche ändern', es: 'Cambiar búsqueda', nl: 'Zoekopdracht wijzigen', sv: 'Ändra sökning' })
} satisfies Record<string, LocalizedText>;

export const staySearchLocale: Record<AmaraLanguage, string> = {
  en: 'en-GB', de: 'de-DE', es: 'es-ES', nl: 'nl-NL', sv: 'sv-SE'
};
