import type { LocalizedText } from '../types/content';
import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

export const lastMinuteStaysSeo: AmaraAuthoringSeo = {
  version: '2026-08-25-last-minute-stays-v2.0-D',
  pageType: 'D',
  schemaType: 'none',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Last-minute stays in Frigiliana, Nerja & Tarifa | AMARA',
      description: 'Discover selected AMARA stays that are genuinely bookable at short notice during the next 21 days, with confirmed dates and current total prices.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Last-Minute-Unterkünfte in Frigiliana, Nerja & Tarifa | AMARA',
      description: 'Entdeckt ausgewählte AMARA Aufenthalte, die in den kommenden 21 Tagen kurzfristig tatsächlich buchbar sind – mit bestätigten Reisedaten und aktuellem Gesamtpreis.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Alojamientos de última hora en Frigiliana, Nerja y Tarifa | AMARA',
      description: 'Descubrid una selección de estancias AMARA realmente reservables a corto plazo durante los próximos 21 días, con fechas confirmadas y precio total actual.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Last-minute verblijven in Frigiliana, Nerja en Tarifa | AMARA',
      description: 'Ontdek geselecteerde AMARA-verblijven die de komende 21 dagen echt op korte termijn te boeken zijn, met bevestigde data en actuele totaalprijs.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Sista minuten-boenden i Frigiliana, Nerja och Tarifa | AMARA',
      description: 'Upptäck utvalda AMARA-boenden som faktiskt kan bokas med kort varsel under de kommande 21 dagarna, med bekräftade datum och aktuellt totalpris.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  },
  ogImage: '/images/hero-frigiliana.jpg'
};

export const lastMinuteStaysCopy = {
  hero: {
    eyebrow: l('Short-notice opportunities', 'Kurzfristige Möglichkeiten', 'Oportunidades de última hora', 'Mogelijkheden op korte termijn', 'Möjligheter med kort varsel'),
    title: l('Sometimes the right stay opens up at just the right moment', 'Manchmal wird genau im richtigen Moment etwas frei', 'A veces, el alojamiento adecuado queda disponible en el momento justo', 'Soms komt het juiste verblijf precies op het juiste moment beschikbaar', 'Ibland blir rätt boende tillgängligt i precis rätt ögonblick'),
    lead: l(
      'Travel plans change. That can make selected AMARA dates bookable at short notice — a special opportunity for spontaneous shared time.',
      'Reisepläne ändern sich. Dadurch können ausgewählte AMARA Zeitfenster auch kurzfristig buchbar werden – eine besondere Gelegenheit für spontane gemeinsame Zeit.',
      'Los planes de viaje cambian. Por eso, algunas fechas seleccionadas de AMARA pueden quedar disponibles a corto plazo: una ocasión especial para compartir una escapada espontánea.',
      'Reisplannen veranderen. Daardoor kunnen geselecteerde AMARA-periodes op korte termijn boekbaar worden — een bijzondere kans voor spontane tijd samen.',
      'Resplaner ändras. Därför kan utvalda AMARA-perioder bli bokningsbara med kort varsel — ett särskilt tillfälle för spontan tid tillsammans.'
    ),
    support: l(
      'We check the actual booking opportunity and its current total price live when this page opens. Both can change until a booking is confirmed.',
      'Wir prüfen die tatsächliche Buchungsmöglichkeit und ihren aktuellen Gesamtpreis live beim Öffnen dieser Seite. Beides kann sich bis zur Buchungsbestätigung ändern.',
      'Comprobamos en directo la posibilidad real de reserva y su precio total actual al abrir esta página. Ambos pueden cambiar hasta que se confirme la reserva.',
      'Wanneer deze pagina opent, controleren we live de werkelijke boekingsmogelijkheid en de actuele totaalprijs. Beide kunnen veranderen totdat de boeking is bevestigd.',
      'När sidan öppnas kontrollerar vi den faktiska bokningsmöjligheten och dess aktuella totalpris live. Båda kan ändras tills bokningen har bekräftats.'
    )
  },
  live: {
    eyebrow: l('Live-confirmed direct booking', 'Live bestätigte Direktbuchung', 'Reserva directa confirmada en vivo', 'Live bevestigde directe boeking', 'Live-bekräftad direktbokning'),
    title: l('Selected stays available at short notice', 'Ausgewählte kurzfristige Möglichkeiten', 'Estancias seleccionadas disponibles a corto plazo', 'Geselecteerde verblijven op korte termijn', 'Utvalda boenden med kort varsel'),
    intro: l(
      'We identify short-notice windows during the next 21 days and show up to four selected opportunities. Each one includes a stay that the AMARA booking system has confirmed with a current total price.',
      'Wir ermitteln kurzfristige Zeitfenster der kommenden 21 Tage und zeigen bis zu vier ausgewählte Möglichkeiten. Jede enthält einen Aufenthalt, den das AMARA Buchungssystem mit aktuellem Gesamtpreis bestätigt hat.',
      'Identificamos periodos disponibles a corto plazo durante los próximos 21 días y mostramos hasta cuatro oportunidades seleccionadas. Cada una incluye una estancia confirmada por el sistema de reservas de AMARA con su precio total actual.',
      'We bepalen welke periodes de komende 21 dagen op korte termijn beschikbaar zijn en tonen maximaal vier geselecteerde mogelijkheden. Elke mogelijkheid bevat een verblijf dat het AMARA-boekingssysteem met een actuele totaalprijs heeft bevestigd.',
      'Vi identifierar perioder som är tillgängliga med kort varsel under de kommande 21 dagarna och visar upp till fyra utvalda möjligheter. Varje alternativ innehåller en vistelse som AMARAs bokningssystem har bekräftat med aktuellt totalpris.'
    ),
    guests: l('Guests', 'Gäste', 'Huéspedes', 'Gasten', 'Gäster'),
    guest: l('{count} guest', '{count} Gast', '{count} huésped', '{count} gast', '{count} gäst'),
    guestsPlural: l('{count} guests', '{count} Gäste', '{count} huéspedes', '{count} gasten', '{count} gäster'),
    loading: l('Checking current availability and prices…', 'Aktuelle Verfügbarkeit und Preise werden geprüft…', 'Comprobando disponibilidad y precios actuales…', 'Actuele beschikbaarheid en prijzen worden gecontroleerd…', 'Aktuell tillgänglighet och priser kontrolleras…'),
    ready: l('Selected opportunities for {guests}', 'Ausgewählte Möglichkeiten für {guests}', 'Oportunidades seleccionadas para {guests}', 'Geselecteerde mogelijkheden voor {guests}', 'Utvalda möjligheter för {guests}'),
    empty: l('We cannot currently confirm a selected short-notice AMARA opportunity in the next 21 days for this number of guests.', 'Für diese Gästezahl können wir in den kommenden 21 Tagen aktuell keine ausgewählte kurzfristige AMARA Möglichkeit bestätigen.', 'Ahora mismo no podemos confirmar una oportunidad AMARA seleccionada a corto plazo durante los próximos 21 días para este número de huéspedes.', 'Voor dit aantal gasten kunnen we momenteel geen geselecteerde AMARA-mogelijkheid op korte termijn in de komende 21 dagen bevestigen.', 'För detta antal gäster kan vi just nu inte bekräfta någon utvald AMARA-möjlighet med kort varsel under de kommande 21 dagarna.'),
    error: l('Live booking data is temporarily unavailable. This does not mean the stays are occupied. Please try again later or use the regular availability search.', 'Die Live-Buchungsdaten sind vorübergehend nicht verfügbar. Das bedeutet nicht, dass die Unterkünfte belegt sind. Versucht es später erneut oder nutzt die reguläre Verfügbarkeitssuche.', 'Los datos de reserva en directo no están disponibles temporalmente. Esto no significa que los alojamientos estén ocupados. Volved a intentarlo más tarde o utilizad la búsqueda habitual.', 'De live boekingsgegevens zijn tijdelijk niet beschikbaar. Dat betekent niet dat de verblijven bezet zijn. Probeer het later opnieuw of gebruik de gewone beschikbaarheidszoeker.', 'Live-data för bokning är tillfälligt otillgängliga. Det betyder inte att boendena är upptagna. Försök senare eller använd den vanliga tillgänglighetssökningen.'),
    availableWindow: l('Available', 'Kurzfristig verfügbar', 'Disponible', 'Beschikbaar', 'Tillgängligt'),
    fromNight: l('bookable from {count} night', 'buchbar ab {count} Nacht', 'reservable desde {count} noche', 'te boeken vanaf {count} nacht', 'kan bokas från {count} natt'),
    fromNights: l('bookable from {count} nights', 'buchbar ab {count} Nächten', 'reservable desde {count} noches', 'te boeken vanaf {count} nachten', 'kan bokas från {count} nätter'),
    exampleStay: l('Example', 'Beispiel', 'Ejemplo', 'Voorbeeld', 'Exempel'),
    totalPrice: l('Confirmed total price', 'Bestätigter Gesamtpreis', 'Precio total confirmado', 'Bevestigde totaalprijs', 'Bekräftat totalpris'),
    viewStay: l('Book these dates', 'Diese Reisedaten buchen', 'Reservar estas fechas', 'Boek deze data', 'Boka dessa datum'),
    viewStayDetails: l('View stay', 'Unterkunft ansehen', 'Ver alojamiento', 'Verblijf bekijken', 'Visa boendet'),
    night: l('{count} night', '{count} Nacht', '{count} noche', '{count} nacht', '{count} natt'),
    nights: l('{count} nights', '{count} Nächte', '{count} noches', '{count} nachten', '{count} nätter'),
    priceNote: l('The displayed total is a current quote for the dates and guests shown, not a claimed discount. Final conditions appear before confirmation.', 'Der angezeigte Gesamtpreis ist eine aktuelle Quote für die genannten Reisedaten und Gäste, keine Rabattbehauptung. Die endgültigen Bedingungen werden vor der Bestätigung angezeigt.', 'El total mostrado es una cotización actual para las fechas y huéspedes indicados, no una afirmación de descuento. Las condiciones finales aparecen antes de confirmar.', 'Het getoonde totaal is een actuele prijsopgave voor de vermelde data en gasten, geen kortingsclaim. De definitieve voorwaarden verschijnen vóór bevestiging.', 'Det visade totalpriset är en aktuell offert för angivna datum och gäster, inte ett påstående om rabatt. Slutliga villkor visas före bekräftelse.'),
    noScript: l('JavaScript is required for the live search. You can still use the regular availability search.', 'Für die Live-Suche ist JavaScript erforderlich. Ihr könnt weiterhin die reguläre Verfügbarkeitssuche nutzen.', 'La búsqueda en directo necesita JavaScript. También podéis utilizar la búsqueda habitual de disponibilidad.', 'Voor de live zoekopdracht is JavaScript nodig. Jullie kunnen ook de gewone beschikbaarheidszoeker gebruiken.', 'JavaScript krävs för live-sökningen. Ni kan också använda den vanliga tillgänglighetssökningen.'),
    regularSearch: l('Check other dates', 'Andere Reisedaten prüfen', 'Consultar otras fechas', 'Bekijk andere data', 'Kontrollera andra datum')
  },
  destinationsTitle: l('Three ways to leave soon', 'Drei Möglichkeiten, bald aufzubrechen', 'Tres formas de viajar pronto', 'Drie manieren om binnenkort weg te gaan', 'Tre sätt att resa snart'),
  destinations: [
    {
      id: 'frigiliana',
      token: 'location_frigiliana' as LinkToken,
      title: l('Frigiliana · a few nights above the coast', 'Frigiliana · ein paar Nächte oberhalb der Küste', 'Frigiliana · unas noches sobre la costa', 'Frigiliana · een paar nachten boven de kust', 'Frigiliana · några nätter ovanför kusten'),
      body: l('Choose the old village for steep lanes, whitewashed houses and evenings that slow down once the day visitors leave. Four distinct AMARA hideaways make short gaps easier to match to your dates.', 'Wählt das alte Dorf für steile Gassen, weiß gekalkte Häuser und Abende, die ruhiger werden, sobald die Tagesgäste gegangen sind. Vier unterschiedliche AMARA Hideaways erleichtern es, kurzfristige Lücken mit euren Reisedaten zu verbinden.', 'Elegid el pueblo antiguo por sus calles empinadas, casas encaladas y noches que se calman cuando se marchan los visitantes del día. Cuatro alojamientos AMARA distintos facilitan encontrar una estancia que encaje con vuestras fechas.', 'Kies het oude dorp voor steile straatjes, witgekalkte huizen en avonden die rustiger worden zodra de dagbezoekers vertrekken. Vier verschillende AMARA-hideaways maken het eenvoudiger een korte vrije periode bij jullie data te vinden.', 'Välj den gamla byn för branta gränder, vitkalkade hus och kvällar som blir lugnare när dagsbesökarna har rest. Fyra olika AMARA-boenden gör det lättare att hitta en kort lucka som passar era datum.'),
      linkLabel: l('Discover Frigiliana', 'Frigiliana entdecken', 'Descubrir Frigiliana', 'Ontdek Frigiliana', 'Upptäck Frigiliana')
    },
    {
      id: 'nerja',
      token: 'location_nerja' as LinkToken,
      title: l('Nerja · Mediterranean days close to the beach', 'Nerja · Mittelmeertage nahe am Strand', 'Nerja · días mediterráneos cerca de la playa', 'Nerja · mediterrane dagen dicht bij het strand', 'Nerja · medelhavsdagar nära stranden'),
      body: l('AMARA Playa puts the sea, local restaurants and an easy walk towards the centre into the same short stay. It suits a spontaneous coastal break without filling every day with plans.', 'Bei AMARA Playa liegen Meer, Restaurants und der Weg Richtung Zentrum nah beieinander. Das passt zu einer spontanen Auszeit an der Küste, ohne jeden Tag mit Plänen zu füllen.', 'AMARA Playa reúne el mar, restaurantes cercanos y un paseo sencillo hacia el centro en una misma estancia breve. Es una buena opción para una escapada espontánea junto a la costa sin llenar cada día de planes.', 'Bij AMARA Playa liggen de zee, restaurants en een eenvoudige wandeling richting het centrum binnen hetzelfde korte verblijf. Dat past bij een spontane kustpauze zonder elke dag vol te plannen.', 'På AMARA Playa ryms havet, restauranger i närheten och en enkel promenad mot centrum i samma korta vistelse. Det passar en spontan paus vid kusten utan att fylla varje dag med planer.'),
      linkLabel: l('Discover Nerja', 'Nerja entdecken', 'Descubrir Nerja', 'Ontdek Nerja', 'Upptäck Nerja')
    },
    {
      id: 'tarifa',
      token: 'location_tarifa' as LinkToken,
      title: l('Tarifa · Atlantic space for couples and families', 'Tarifa · Atlantische Weite für Paare und Familien', 'Tarifa · espacio atlántico para parejas y familias', 'Tarifa · Atlantische ruimte voor stellen en gezinnen', 'Tarifa · atlantisk rymd för par och familjer'),
      body: l('AMARA Family & Surf offers more room for up to four guests, with Tarifa’s old town, beaches and wind-led days within reach. Check the live result for a short family escape or time together near the Atlantic.', 'AMARA Family & Surf bietet mehr Raum für bis zu vier Gäste; Tarifas Altstadt, Strände und windgeprägte Tage liegen in Reichweite. Prüft das Live-Ergebnis für eine kurze Familienauszeit oder gemeinsame Zeit nahe am Atlantik.', 'AMARA Family & Surf ofrece más espacio para un máximo de cuatro huéspedes, con el casco antiguo, las playas y los días marcados por el viento de Tarifa al alcance. Consultad el resultado en directo para una escapada familiar o unos días juntos cerca del Atlántico.', 'AMARA Family & Surf biedt meer ruimte voor maximaal vier gasten, met de oude stad, stranden en door de wind bepaalde dagen van Tarifa binnen bereik. Bekijk het live resultaat voor een korte gezinsreis of tijd samen bij de Atlantische Oceaan.', 'AMARA Family & Surf ger mer utrymme för upp till fyra gäster, med Tarifas gamla stad, stränder och vindstyrda dagar inom räckhåll. Se live-resultatet för en kort familjeresa eller tid tillsammans nära Atlanten.'),
      linkLabel: l('Discover Tarifa', 'Tarifa entdecken', 'Descubrir Tarifa', 'Ontdek Tarifa', 'Upptäck Tarifa')
    }
  ],
  faqTitle: l('Before you choose a short-notice stay', 'Bevor ihr einen kurzfristigen Aufenthalt wählt', 'Antes de elegir una estancia próxima', 'Voordat jullie een verblijf op korte termijn kiezen', 'Innan ni väljer en resa med kort varsel'),
  faq: [
    {
      id: 'discount',
      question: l('Are these discounted prices?', 'Sind das reduzierte Preise?', '¿Son precios rebajados?', 'Zijn dit kortingsprijzen?', 'Är det rabatterade priser?'),
      answer: l('Not necessarily. We show the current direct-booking total supplied for a genuinely bookable stay. We only describe a reduction when there is a reliable comparison basis.', 'Nicht unbedingt. Wir zeigen den aktuell übermittelten Direktbuchungs-Gesamtpreis für einen tatsächlich buchbaren Aufenthalt. Von einer Reduzierung sprechen wir nur, wenn dafür eine belastbare Vergleichsbasis besteht.', 'No necesariamente. Mostramos el precio total actual de reserva directa para una estancia que realmente puede reservarse. Solo hablamos de descuento cuando existe una base de comparación fiable.', 'Niet per se. We tonen de actuele totaalprijs voor rechtstreeks boeken van een verblijf dat echt te boeken is. We noemen alleen een korting als daarvoor een betrouwbare vergelijkingsbasis bestaat.', 'Inte nödvändigtvis. Vi visar aktuellt totalpris för direktbokning av en vistelse som faktiskt kan bokas. Vi beskriver bara en rabatt när det finns ett tillförlitligt jämförelseunderlag.')
    },
    {
      id: 'selection',
      question: l('Why is this not a complete availability calendar?', 'Warum ist das kein vollständiger Verfügbarkeitskalender?', '¿Por qué no aparece un calendario completo de disponibilidad?', 'Waarom is dit geen volledige beschikbaarheidskalender?', 'Varför är detta inte en fullständig tillgänglighetskalender?'),
      answer: l('This page presents up to four selected short-notice opportunities, with no more than one per stay. Each displayed example has been confirmed with a current total price. Use the regular search if you want to compare every available date.', 'Diese Seite zeigt bis zu vier ausgewählte kurzfristige Möglichkeiten und höchstens eine je Unterkunft. Jedes gezeigte Beispiel wurde mit einem aktuellen Gesamtpreis bestätigt. Nutzt die reguläre Suche, wenn ihr alle verfügbaren Reisedaten vergleichen möchtet.', 'Esta página presenta hasta cuatro oportunidades seleccionadas a corto plazo y como máximo una por alojamiento. Cada ejemplo mostrado se ha confirmado con un precio total actual. Utilizad la búsqueda habitual si queréis comparar todas las fechas disponibles.', 'Deze pagina toont maximaal vier geselecteerde mogelijkheden op korte termijn en hoogstens één per verblijf. Elk getoond voorbeeld is bevestigd met een actuele totaalprijs. Gebruik de gewone zoekfunctie om alle beschikbare data te vergelijken.', 'Sidan visar upp till fyra utvalda möjligheter med kort varsel och högst en per boende. Varje visat exempel har bekräftats med ett aktuellt totalpris. Använd den vanliga sökningen om ni vill jämföra alla tillgängliga datum.')
    },
    {
      id: 'confirmation',
      question: l('Is a displayed stay already reserved for me?', 'Ist ein angezeigter Aufenthalt bereits für mich reserviert?', '¿La estancia mostrada queda reservada para mí?', 'Is een getoond verblijf al voor mij gereserveerd?', 'Är en visad vistelse redan reserverad för mig?'),
      answer: l('No. Availability and price are current at the time of the check, but the stay remains open to other guests until your booking is confirmed.', 'Nein. Verfügbarkeit und Preis sind zum Zeitpunkt der Abfrage aktuell, die Unterkunft bleibt jedoch bis zu eurer Buchungsbestätigung auch für andere Gäste buchbar.', 'No. La disponibilidad y el precio son actuales en el momento de la consulta, pero el alojamiento sigue abierto a otros huéspedes hasta que se confirme vuestra reserva.', 'Nee. Beschikbaarheid en prijs zijn actueel op het moment van controleren, maar het verblijf blijft voor andere gasten te boeken totdat jullie boeking is bevestigd.', 'Nej. Tillgänglighet och pris är aktuella när kontrollen görs, men boendet kan bokas av andra tills er bokning har bekräftats.')
    }
  ]
} as const;

export const lastMinuteLocale: Record<AmaraLanguage, string> = {
  en: 'en-GB',
  de: 'de-DE',
  es: 'es-ES',
  nl: 'nl-NL',
  sv: 'sv-SE'
};
