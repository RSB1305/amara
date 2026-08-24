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
  version: '2026-08-24-last-minute-stays-v1.0-D',
  pageType: 'D',
  schemaType: 'none',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Last-minute stays in Frigiliana, Nerja & Tarifa | AMARA',
      description: 'See currently bookable AMARA stays in Frigiliana, Nerja and Tarifa for the next 21 days, with live availability and current total prices.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Last-Minute-Unterkünfte in Frigiliana, Nerja & Tarifa | AMARA',
      description: 'Entdeckt aktuell buchbare AMARA Aufenthalte in Frigiliana, Nerja und Tarifa für die kommenden 21 Tage – mit Live-Verfügbarkeit und aktuellem Gesamtpreis.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Alojamientos de última hora en Frigiliana, Nerja y Tarifa | AMARA',
      description: 'Descubrid estancias AMARA disponibles en Frigiliana, Nerja y Tarifa durante los próximos 21 días, con disponibilidad y precio total actuales.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Last-minute verblijven in Frigiliana, Nerja en Tarifa | AMARA',
      description: 'Bekijk AMARA-verblijven die de komende 21 dagen te boeken zijn in Frigiliana, Nerja en Tarifa, met live beschikbaarheid en actuele totaalprijs.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Sista minuten-boenden i Frigiliana, Nerja och Tarifa | AMARA',
      description: 'Se AMARA-boenden som kan bokas i Frigiliana, Nerja och Tarifa under de kommande 21 dagarna, med aktuell tillgänglighet och totalpris.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  },
  ogImage: '/images/hero-frigiliana.jpg'
};

export const lastMinuteStaysCopy = {
  hero: {
    eyebrow: l('Short-notice escapes', 'Kurzfristig verreisen', 'Escapadas próximas', 'Binnenkort samen weg', 'Res snart'),
    title: l('Last-minute stays with AMARA', 'Last-Minute-Aufenthalte bei AMARA', 'Estancias de última hora con AMARA', 'Last-minute verblijven bij AMARA', 'Sista minuten-boenden hos AMARA'),
    lead: l(
      'A few free nights can be enough for shared time in a white village, beside the Mediterranean or close to Tarifa’s Atlantic horizon. We check what is genuinely bookable during the next 21 days.',
      'Schon wenige freie Nächte reichen für gemeinsame Zeit im weißen Dorf, am Mittelmeer oder nahe Tarifas Atlantikhorizont. Wir prüfen, was in den kommenden 21 Tagen tatsächlich buchbar ist.',
      'Unas noches libres bastan para compartir tiempo en un pueblo blanco, junto al Mediterráneo o cerca del horizonte atlántico de Tarifa. Comprobamos qué estancias pueden reservarse realmente durante los próximos 21 días.',
      'Een paar vrije nachten zijn genoeg voor tijd samen in een wit dorp, aan de Middellandse Zee of bij de Atlantische horizon van Tarifa. We controleren wat de komende 21 dagen echt te boeken is.',
      'Några lediga nätter räcker för tid tillsammans i en vit by, vid Medelhavet eller nära Tarifas atlantiska horisont. Vi kontrollerar vad som faktiskt går att boka under de kommande 21 dagarna.'
    ),
    support: l(
      'The live search starts when this page opens. Availability and prices can change until a booking is confirmed.',
      'Die Live-Suche startet beim Öffnen dieser Seite. Verfügbarkeit und Preise können sich bis zur Buchungsbestätigung ändern.',
      'La búsqueda en directo comienza al abrir esta página. La disponibilidad y los precios pueden cambiar hasta que se confirme la reserva.',
      'De live zoekopdracht start zodra deze pagina opent. Beschikbaarheid en prijzen kunnen wijzigen totdat de boeking is bevestigd.',
      'Live-sökningen startar när sidan öppnas. Tillgänglighet och priser kan ändras tills bokningen har bekräftats.'
    )
  },
  live: {
    eyebrow: l('Live direct-booking availability', 'Live-Direktbuchungsverfügbarkeit', 'Disponibilidad directa en vivo', 'Live beschikbaarheid voor direct boeken', 'Aktuell tillgänglighet för direktbokning'),
    title: l('Currently bookable stays', 'Aktuell buchbare Aufenthalte', 'Estancias disponibles ahora', 'Verblijven die nu te boeken zijn', 'Boenden som kan bokas nu'),
    intro: l(
      'We look for practical, continuous stays across the next 21 days and request the current total price directly from the AMARA booking system.',
      'Wir suchen in den kommenden 21 Tagen nach sinnvollen zusammenhängenden Aufenthalten und fragen den aktuellen Gesamtpreis direkt im AMARA Buchungssystem ab.',
      'Buscamos estancias consecutivas y prácticas durante los próximos 21 días y consultamos el precio total actual directamente en el sistema de reservas de AMARA.',
      'We zoeken in de komende 21 dagen naar praktische aaneengesloten verblijven en vragen de actuele totaalprijs rechtstreeks op in het AMARA-boekingssysteem.',
      'Vi söker efter praktiska sammanhängande vistelser under de kommande 21 dagarna och hämtar aktuellt totalpris direkt från AMARAs bokningssystem.'
    ),
    guests: l('Guests', 'Gäste', 'Huéspedes', 'Gasten', 'Gäster'),
    guest: l('{count} guest', '{count} Gast', '{count} huésped', '{count} gast', '{count} gäst'),
    guestsPlural: l('{count} guests', '{count} Gäste', '{count} huéspedes', '{count} gasten', '{count} gäster'),
    loading: l('Checking current availability and prices…', 'Aktuelle Verfügbarkeit und Preise werden geprüft…', 'Comprobando disponibilidad y precios actuales…', 'Actuele beschikbaarheid en prijzen worden gecontroleerd…', 'Aktuell tillgänglighet och priser kontrolleras…'),
    ready: l('Current options for {guests}', 'Aktuelle Möglichkeiten für {guests}', 'Opciones actuales para {guests}', 'Actuele mogelijkheden voor {guests}', 'Aktuella alternativ för {guests}'),
    empty: l('There is no continuous AMARA stay we can confirm in the next 21 days for this number of guests.', 'Für diese Gästezahl können wir in den kommenden 21 Tagen aktuell keinen zusammenhängenden AMARA Aufenthalt bestätigen.', 'Ahora mismo no podemos confirmar ninguna estancia AMARA consecutiva durante los próximos 21 días para este número de huéspedes.', 'Voor dit aantal gasten kunnen we momenteel geen aaneengesloten AMARA-verblijf in de komende 21 dagen bevestigen.', 'För detta antal gäster kan vi just nu inte bekräfta någon sammanhängande AMARA-vistelse under de kommande 21 dagarna.'),
    error: l('Live booking data is temporarily unavailable. This does not mean the stays are occupied. Please try again later or use the regular availability search.', 'Die Live-Buchungsdaten sind vorübergehend nicht verfügbar. Das bedeutet nicht, dass die Unterkünfte belegt sind. Versucht es später erneut oder nutzt die reguläre Verfügbarkeitssuche.', 'Los datos de reserva en directo no están disponibles temporalmente. Esto no significa que los alojamientos estén ocupados. Volved a intentarlo más tarde o utilizad la búsqueda habitual.', 'De live boekingsgegevens zijn tijdelijk niet beschikbaar. Dat betekent niet dat de verblijven bezet zijn. Probeer het later opnieuw of gebruik de gewone beschikbaarheidszoeker.', 'Live-data för bokning är tillfälligt otillgängliga. Det betyder inte att boendena är upptagna. Försök senare eller använd den vanliga tillgänglighetssökningen.'),
    partialError: l('We could not verify a current price for every stay. Unverified stays have not been treated as occupied.', 'Wir konnten nicht für jede Unterkunft einen aktuellen Preis bestätigen. Nicht verifizierte Unterkünfte wurden nicht als belegt behandelt.', 'No hemos podido confirmar un precio actual para todos los alojamientos. Los alojamientos no verificados no se han tratado como ocupados.', 'We konden niet voor elk verblijf een actuele prijs bevestigen. Niet-geverifieerde verblijven zijn niet als bezet behandeld.', 'Vi kunde inte bekräfta ett aktuellt pris för varje boende. Boenden som inte kunde verifieras har inte behandlats som upptagna.'),
    totalPrice: l('Current total price', 'Aktueller Gesamtpreis', 'Precio total actual', 'Actuele totaalprijs', 'Aktuellt totalpris'),
    viewStay: l('View stay and dates', 'Unterkunft und Reisedaten ansehen', 'Ver alojamiento y fechas', 'Bekijk verblijf en data', 'Visa boende och datum'),
    night: l('{count} night', '{count} Nacht', '{count} noche', '{count} nacht', '{count} natt'),
    nights: l('{count} nights', '{count} Nächte', '{count} noches', '{count} nachten', '{count} nätter'),
    priceNote: l('The displayed total is a current quote for the dates and guests shown, not a claimed discount. Final conditions appear before confirmation.', 'Der angezeigte Gesamtpreis ist eine aktuelle Quote für die genannten Reisedaten und Gäste, keine Rabattbehauptung. Die endgültigen Bedingungen werden vor der Bestätigung angezeigt.', 'El total mostrado es una cotización actual para las fechas y huéspedes indicados, no una afirmación de descuento. Las condiciones finales aparecen antes de confirmar.', 'Het getoonde totaal is een actuele prijsopgave voor de vermelde data en gasten, geen kortingsclaim. De definitieve voorwaarden verschijnen vóór bevestiging.', 'Det visade totalpriset är en aktuell offert för angivna datum och gäster, inte ett påstående om rabatt. Slutliga villkor visas före bekräftelse.'),
    noScript: l('JavaScript is required for the live search. You can still use the regular availability search.', 'Für die Live-Suche ist JavaScript erforderlich. Ihr könnt weiterhin die reguläre Verfügbarkeitssuche nutzen.', 'La búsqueda en directo necesita JavaScript. También podéis utilizar la búsqueda habitual de disponibilidad.', 'Voor de live zoekopdracht is JavaScript nodig. Jullie kunnen ook de gewone beschikbaarheidszoeker gebruiken.', 'JavaScript krävs för live-sökningen. Ni kan också använda den vanliga tillgänglighetssökningen.'),
    regularSearch: l('Choose your own dates', 'Eigene Reisedaten wählen', 'Elegir otras fechas', 'Kies jullie eigen data', 'Välj egna datum')
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
      question: l('Why do I see only one date range per stay?', 'Warum sehe ich nur einen Zeitraum je Unterkunft?', '¿Por qué solo aparece un periodo por alojamiento?', 'Waarom zie ik maar één periode per verblijf?', 'Varför visas bara en period per boende?'),
      answer: l('The page selects one practical option from the next 21 days instead of calculating every theoretical combination. Open the stay if you want to keep these dates, or use the regular search to choose different dates.', 'Die Seite wählt eine sinnvolle Möglichkeit aus den kommenden 21 Tagen, statt jede theoretische Kombination zu berechnen. Öffnet die Unterkunft, wenn ihr diese Daten behalten möchtet, oder wählt in der regulären Suche andere Reisedaten.', 'La página selecciona una opción práctica de los próximos 21 días en lugar de calcular todas las combinaciones posibles. Abrid el alojamiento si queréis mantener esas fechas o utilizad la búsqueda habitual para elegir otras.', 'De pagina kiest één praktische mogelijkheid uit de komende 21 dagen in plaats van elke theoretische combinatie te berekenen. Open het verblijf om deze data te behouden of gebruik de gewone zoekfunctie voor andere data.', 'Sidan väljer ett praktiskt alternativ från de kommande 21 dagarna i stället för att beräkna alla tänkbara kombinationer. Öppna boendet om ni vill behålla datumen eller använd den vanliga sökningen för andra datum.')
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
