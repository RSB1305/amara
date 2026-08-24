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
  calendarTitle: localized({ en: 'Choose your stay', de: 'Aufenthalt wählen', es: 'Elegid vuestra estancia', nl: 'Kies jullie verblijf', sv: 'Välj er vistelse' }),
  calendarHelp: localized({ en: 'Choose arrival and departure. Stays can be up to 45 nights.', de: 'Wählt Anreise und Abreise. Aufenthalte sind bis zu 45 Nächte möglich.', es: 'Elegid llegada y salida. La estancia puede ser de hasta 45 noches.', nl: 'Kies aankomst en vertrek. Een verblijf kan maximaal 45 nachten duren.', sv: 'Välj ankomst och avresa. En vistelse kan vara högst 45 nätter.' }),
  chooseDepartureHelp: localized({ en: 'Now choose a departure, up to 45 nights after arrival.', de: 'Wählt jetzt eine Abreise, höchstens 45 Nächte nach der Anreise.', es: 'Ahora elegid una salida, hasta 45 noches después de la llegada.', nl: 'Kies nu een vertrek, maximaal 45 nachten na aankomst.', sv: 'Välj nu avresa, högst 45 nätter efter ankomst.' }),
  closeCalendar: localized({ en: 'Close calendar', de: 'Kalender schließen', es: 'Cerrar calendario', nl: 'Kalender sluiten', sv: 'Stäng kalendern' }),
  clearDates: localized({ en: 'Clear dates', de: 'Daten löschen', es: 'Borrar fechas', nl: 'Datums wissen', sv: 'Rensa datum' }),
  previousMonth: localized({ en: 'Previous month', de: 'Vorheriger Monat', es: 'Mes anterior', nl: 'Vorige maand', sv: 'Föregående månad' }),
  nextMonth: localized({ en: 'Next month', de: 'Nächster Monat', es: 'Mes siguiente', nl: 'Volgende maand', sv: 'Nästa månad' }),
  unavailableDay: localized({ en: 'Unavailable', de: 'Nicht wählbar', es: 'No disponible', nl: 'Niet beschikbaar', sv: 'Inte tillgänglig' }),
  availableDay: localized({ en: 'Available', de: 'Wählbar', es: 'Disponible', nl: 'Beschikbaar', sv: 'Tillgänglig' }),
  invalidSearch: localized({ en: 'Please choose a destination, valid dates and the number of guests.', de: 'Bitte wählt ein Reiseziel, gültige Reisedaten und die Gästezahl.', es: 'Elegid un destino, fechas válidas y el número de huéspedes.', nl: 'Kies een bestemming, geldige datums en het aantal gasten.', sv: 'Välj resmål, giltiga datum och antal gäster.' }),
  resultsEyebrow: localized({ en: 'Live stay search', de: 'Live-Unterkunftssuche', es: 'Búsqueda de alojamientos en directo', nl: 'Live zoeken naar verblijven', sv: 'Live-sökning efter boende' }),
  resultsTitle: localized({ en: 'Available AMARA hideaways', de: 'Verfügbare AMARA Hideaways', es: 'Alojamientos AMARA disponibles', nl: 'Beschikbare AMARA-hideaways', sv: 'Tillgängliga AMARA-boenden' }),
  loading: localized({ en: 'Checking current availability and total prices…', de: 'Aktuelle Verfügbarkeit und Gesamtpreise werden geprüft…', es: 'Comprobando disponibilidad y precios totales actuales…', nl: 'Actuele beschikbaarheid en totaalprijzen worden gecontroleerd…', sv: 'Aktuell tillgänglighet och totalpris kontrolleras…' }),
  totalPrice: localized({ en: 'Total price', de: 'Gesamtpreis', es: 'Precio total', nl: 'Totaalprijs', sv: 'Totalpris' }),
  viewStay: localized({ en: 'View stay', de: 'Unterkunft ansehen', es: 'Ver alojamiento', nl: 'Verblijf bekijken', sv: 'Visa boendet' }),
  night: localized({ en: '{count} night', de: '{count} Nacht', es: '{count} noche', nl: '{count} nacht', sv: '{count} natt' }),
  nights: localized({ en: '{count} nights', de: '{count} Nächte', es: '{count} noches', nl: '{count} nachten', sv: '{count} nätter' }),
  empty: localized({ en: 'No AMARA hideaway is available in {destination} for these dates.', de: 'Für diese Reisedaten ist in {destination} leider kein AMARA Hideaway verfügbar.', es: 'No hay ningún alojamiento AMARA disponible en {destination} para estas fechas.', nl: 'Voor deze datums is in {destination} geen AMARA-hideaway beschikbaar.', sv: 'Inget AMARA-boende är tillgängligt i {destination} för dessa datum.' }),
  allDestinationsCta: localized({ en: 'Check all AMARA destinations', de: 'Alle AMARA Reiseziele prüfen', es: 'Comprobar todos los destinos AMARA', nl: 'Alle AMARA-bestemmingen bekijken', sv: 'Kontrollera alla AMARA-resmål' }),
  partialError: localized({ en: 'We could not retrieve a current price for some stays. They have not been treated as unavailable.', de: 'Für einige Unterkünfte konnte kein aktueller Preis abgerufen werden. Sie wurden nicht als belegt behandelt.', es: 'No hemos podido obtener un precio actual para algunos alojamientos. No se han tratado como ocupados.', nl: 'Voor sommige verblijven kon geen actuele prijs worden opgehaald. Ze zijn niet als bezet behandeld.', sv: 'Ett aktuellt pris kunde inte hämtas för vissa boenden. De har inte behandlats som upptagna.' }),
  searchError: localized({ en: 'We could not complete the live search right now. Please adjust the search or try again later.', de: 'Die Live-Suche konnte gerade nicht vollständig abgeschlossen werden. Ändert die Suche oder versucht es später erneut.', es: 'No hemos podido completar la búsqueda en directo. Cambiad la búsqueda o volved a intentarlo más tarde.', nl: 'De live zoekopdracht kon nu niet worden voltooid. Pas de zoekopdracht aan of probeer het later opnieuw.', sv: 'Live-sökningen kunde inte slutföras just nu. Ändra sökningen eller försök igen senare.' }),
  changeSearch: localized({ en: 'Change search', de: 'Suche ändern', es: 'Cambiar búsqueda', nl: 'Zoekopdracht wijzigen', sv: 'Ändra sökning' })
} satisfies Record<string, LocalizedText>;

export const staySearchLocale: Record<AmaraLanguage, string> = {
  en: 'en-GB', de: 'de-DE', es: 'es-ES', nl: 'nl-NL', sv: 'sv-SE'
};
