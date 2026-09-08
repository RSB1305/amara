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
      title: 'Free at short notice in Frigiliana, Nerja & Tarifa | AMARA',
      description: 'Which AMARA apartment is still free in the next three weeks, with nights and total price straight from our calendar.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Kurzfristig frei in Frigiliana, Nerja & Tarifa | AMARA',
      description: 'Welche AMARA-Wohnung in den nächsten drei Wochen noch frei ist, mit Nächten und Gesamtpreis direkt aus unserem Kalender.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Libre a corto plazo en Frigiliana, Nerja y Tarifa | AMARA',
      description: 'Qué apartamento AMARA sigue libre en las próximas tres semanas, con noches y precio total directamente de nuestro calendario.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Op korte termijn vrij in Frigiliana, Nerja & Tarifa | AMARA',
      description: 'Welk AMARA-appartement de komende drie weken nog vrij is, met nachten en totaalprijs rechtstreeks uit onze kalender.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Ledigt med kort varsel i Frigiliana, Nerja & Tarifa | AMARA',
      description: 'Vilken AMARA-lägenhet som fortfarande är ledig de närmaste tre veckorna, med nätter och totalpris direkt från vår kalender.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  },
  ogImage: '/images/hero-frigiliana.jpg'
};

export const lastMinuteStaysCopy = {
  hero: {
    breadcrumb: l('Last Minute', 'Last Minute', 'Última hora', 'Last minute', 'Sista minuten'),
    eyebrow: l('Free at short notice', 'Kurzfristig frei', 'Libre a corto plazo', 'Op korte termijn vrij', 'Ledigt med kort varsel'),
    title: l('Sometimes the right stay opens up at just the right moment', 'Manchmal wird genau im richtigen Moment etwas frei', 'A veces, el alojamiento adecuado queda disponible en el momento justo', 'Soms komt het juiste verblijf precies op het juiste moment beschikbaar', 'Ibland blir rätt boende tillgängligt i precis rätt ögonblick'),
    lead: l(
      'Plans change, for our guests too. Then an apartment is free in the next three weeks that otherwise would not be. Here you see which.',
      'Pläne ändern sich, auch bei unseren Gästen. Dann ist in den nächsten drei Wochen eine Wohnung frei, die es sonst nicht wäre. Hier seht ihr, welche.',
      'Los planes cambian, también los de nuestros huéspedes. Entonces queda libre en las próximas tres semanas un apartamento que de otro modo no lo estaría. Aquí veis cuál.',
      'Plannen veranderen, ook bij onze gasten. Dan is er de komende drie weken een appartement vrij dat anders bezet zou zijn. Hier zien jullie welk.',
      'Planer ändras, även för våra gäster. Då blir en lägenhet ledig de närmaste tre veckorna som annars inte skulle vara det. Här ser ni vilken.'
    ),
    support: l(
      'The page queries our calendar when it opens; nights and price are as of now.',
      'Die Seite fragt beim Öffnen unseren Kalender ab; Nächte und Preis sind die von jetzt.',
      'La página consulta nuestro calendario al abrirse; noches y precio son los de ahora mismo.',
      'De pagina raadpleegt bij het openen onze kalender; nachten en prijs zijn die van nu.',
      'Sidan frågar vår kalender när den öppnas; nätter och pris är de som gäller nu.'
    )
  },
  live: {
    eyebrow: l('Free right now', 'Gerade frei', 'Libre ahora', 'Nu vrij', 'Ledigt just nu'),
    title: l('What works in the next three weeks', 'Was in den nächsten drei Wochen geht', 'Lo que es posible en las próximas tres semanas', 'Wat de komende drie weken kan', 'Vad som går de närmaste tre veckorna'),
    intro: l(
      'Up to four gaps from the next 21 days, one per apartment, with the total price for exactly these nights.',
      'Bis zu vier Lücken aus den nächsten 21 Tagen, je Wohnung eine, mit dem Gesamtpreis für genau diese Nächte.',
      'Hasta cuatro huecos de los próximos 21 días, uno por apartamento, con el precio total para exactamente esas noches.',
      'Tot vier gaten uit de komende 21 dagen, één per appartement, met de totaalprijs voor precies deze nachten.',
      'Upp till fyra luckor ur de närmaste 21 dagarna, en per lägenhet, med totalpriset för exakt dessa nätter.'
    ),
    guests: l('Guests', 'Gäste', 'Huéspedes', 'Gasten', 'Gäster'),
    guest: l('{count} guest', '{count} Gast', '{count} huésped', '{count} gast', '{count} gäst'),
    guestsPlural: l('{count} guests', '{count} Gäste', '{count} huéspedes', '{count} gasten', '{count} gäster'),
    loading: l('Checking the calendar…', 'Wir schauen in den Kalender …', 'Miramos el calendario…', 'We kijken in de kalender…', 'Vi tittar i kalendern…'),
    ready: l('Free for {guests}', 'Frei für {guests}', 'Libre para {guests}', 'Vrij voor {guests}', 'Ledigt för {guests}'),
    empty: l('For this number of guests nothing is free at short notice in the next three weeks. The regular search shows all dates.', 'Für diese Gästezahl ist in den nächsten drei Wochen gerade nichts kurzfristig frei. Die normale Suche zeigt alle Termine.', 'Para este número de huéspedes no hay nada libre a corto plazo en las próximas tres semanas. La búsqueda normal muestra todas las fechas.', 'Voor dit aantal gasten is er de komende drie weken niets op korte termijn vrij. De gewone zoekfunctie toont alle data.', 'För det här antalet gäster är inget ledigt med kort varsel de närmaste tre veckorna. Den vanliga sökningen visar alla datum.'),
    error: l('Our calendar is not responding right now. Try again in a moment or use the regular availability search.', 'Unser Kalender antwortet gerade nicht. Versucht es gleich noch einmal oder nutzt die normale Verfügbarkeitssuche.', 'Nuestro calendario no responde ahora mismo. Probad de nuevo en un momento o usad la búsqueda normal de disponibilidad.', 'Onze kalender reageert even niet. Probeer het zo opnieuw of gebruik de gewone beschikbaarheidszoeker.', 'Vår kalender svarar inte just nu. Försök igen om en stund eller använd den vanliga tillgänglighetssökningen.'),
    availableWindow: l('Free at short notice', 'Kurzfristig frei', 'Libre a corto plazo', 'Op korte termijn vrij', 'Ledigt med kort varsel'),
    fromNight: l('bookable from {count} night', 'buchbar ab {count} Nacht', 'reservable desde {count} noche', 'te boeken vanaf {count} nacht', 'kan bokas från {count} natt'),
    fromNights: l('bookable from {count} nights', 'buchbar ab {count} Nächten', 'reservable desde {count} noches', 'te boeken vanaf {count} nachten', 'kan bokas från {count} nätter'),
    exampleStay: l('Example', 'Beispiel', 'Ejemplo', 'Voorbeeld', 'Exempel'),
    totalPrice: l('Total price', 'Gesamtpreis', 'Precio total', 'Totaalprijs', 'Totalpris'),
    viewStayDetails: l('View stay', 'Unterkunft ansehen', 'Ver alojamiento', 'Verblijf bekijken', 'Visa boendet'),
    night: l('{count} night', '{count} Nacht', '{count} noche', '{count} nacht', '{count} natt'),
    nights: l('{count} nights', '{count} Nächte', '{count} noches', '{count} nachten', '{count} nätter'),
    priceNote: l('This is our normal direct price for exactly these nights. Coming at short notice gets you a gap in the calendar, not a discount campaign.', 'Das ist unser normaler Direktpreis für genau diese Nächte. Wer kurzfristig kommt, bekommt keine Rabattaktion, sondern eine Lücke im Kalender.', 'Este es nuestro precio directo normal para exactamente esas noches. Quien viene a corto plazo no recibe una oferta de descuento, sino un hueco en el calendario.', 'Dit is onze normale directe prijs voor precies deze nachten. Wie op korte termijn komt, krijgt geen kortingsactie maar een gat in de kalender.', 'Det här är vårt vanliga direktpris för exakt dessa nätter. Den som kommer med kort varsel får ingen rabattkampanj utan en lucka i kalendern.'),
    noScript: l('JavaScript is required for the live search. You can still use the regular availability search.', 'Für die Live-Suche ist JavaScript erforderlich. Ihr könnt weiterhin die reguläre Verfügbarkeitssuche nutzen.', 'La búsqueda en directo necesita JavaScript. También podéis utilizar la búsqueda habitual de disponibilidad.', 'Voor de live zoekopdracht is JavaScript nodig. Jullie kunnen ook de gewone beschikbaarheidszoeker gebruiken.', 'JavaScript krävs för live-sökningen. Ni kan också använda den vanliga tillgänglighetssökningen.'),
    regularSearch: l('See all dates', 'Alle Termine ansehen', 'Ver todas las fechas', 'Alle data bekijken', 'Se alla datum')
  },
  destinationsTitle: l('Three places, a few nights', 'Drei Orte, ein paar Nächte', 'Tres lugares, unas noches', 'Drie plekken, een paar nachten', 'Tre platser, några nätter'),
  destinations: [
    {
      id: 'frigiliana',
      token: 'location_frigiliana' as LinkToken,
      title: l('Frigiliana · a few nights in the mountain village', 'Frigiliana · ein paar Nächte im Bergdorf', 'Frigiliana · unas noches en el pueblo de montaña', 'Frigiliana · een paar nachten in het bergdorp', 'Frigiliana · några nätter i bergsbyn'),
      body: l('White lanes, evenings that turn quiet once the day visitors have left, and four apartments in one house, so four chances of a gap.', 'Weiße Gassen, Abende, die ruhig werden, sobald die Tagesgäste weg sind, und vier Wohnungen in einem Haus, also vier Chancen auf eine Lücke.', 'Callejuelas blancas, noches que se calman en cuanto se van los visitantes de día, y cuatro apartamentos en una casa, o sea cuatro oportunidades de encontrar un hueco.', 'Witte steegjes, avonden die rustig worden zodra de dagjesmensen weg zijn, en vier appartementen in één huis, dus vier kansen op een gat.', 'Vita gränder, kvällar som blir stilla när dagsbesökarna åkt, och fyra lägenheter i ett hus, alltså fyra chanser till en lucka.'),
      linkLabel: l('Discover Frigiliana', 'Frigiliana entdecken', 'Descubrir Frigiliana', 'Ontdek Frigiliana', 'Upptäck Frigiliana')
    },
    {
      id: 'nerja',
      token: 'location_nerja' as LinkToken,
      title: l('Nerja · Mediterranean days close to the beach', 'Nerja · Mittelmeertage nahe am Strand', 'Nerja · días mediterráneos cerca de la playa', 'Nerja · mediterrane dagen dicht bij het strand', 'Nerja · medelhavsdagar nära stranden'),
      body: l('AMARA Playa: 200 metres to the beach, 500 to the Balcón, a morning swim and tapas in the evening. For a spontaneous weekend that is more than enough.', 'AMARA Playa: 200 Meter zum Strand, 500 zum Balcón, morgens ins Meer und abends Tapas. Für ein spontanes Wochenende reicht das völlig.', 'AMARA Playa: 200 metros a la playa, 500 al Balcón, un baño por la mañana y tapas por la noche. Para un fin de semana improvisado sobra.', 'AMARA Playa: 200 meter naar het strand, 500 naar de Balcón, ’s ochtends de zee in en ’s avonds tapas. Voor een spontaan weekend is dat ruim genoeg.', 'AMARA Playa: 200 meter till stranden, 500 till Balcón, ett morgondopp och tapas på kvällen. För en spontan helg räcker det gott och väl.'),
      linkLabel: l('Discover Nerja', 'Nerja entdecken', 'Descubrir Nerja', 'Ontdek Nerja', 'Upptäck Nerja')
    },
    {
      id: 'tarifa',
      token: 'location_tarifa' as LinkToken,
      title: l('Tarifa · wind, Atlantic and room for four', 'Tarifa · Wind, Atlantik und Platz für vier', 'Tarifa · viento, Atlántico y sitio para cuatro', 'Tarifa · wind, Atlantische Oceaan en plek voor vier', 'Tarifa · vind, Atlanten och plats för fyra'),
      body: l('Family & Surf: 75 m² over two floors, a west-facing balcony over the Atlantic, underground garage and the beach on foot. When the wind is up, you see it from the terrace.', 'Family & Surf: 75 m² auf zwei Etagen, Balkon nach Westen über den Atlantik, Tiefgarage und der Strand zu Fuß. Wenn der Wind steht, seht ihr es von der Terrasse.', 'Family & Surf: 75 m² en dos plantas, balcón al oeste sobre el Atlántico, garaje subterráneo y la playa a pie. Cuando hay viento, lo veis desde la terraza.', 'Family & Surf: 75 m² over twee verdiepingen, balkon op het westen boven de Atlantische Oceaan, ondergrondse garage en het strand te voet. Als de wind staat, zien jullie het vanaf het terras.', 'Family & Surf: 75 m² på två plan, balkong mot väster över Atlanten, garage under huset och stranden till fots. När vinden ligger på ser ni det från terrassen.'),
      linkLabel: l('Discover Tarifa', 'Tarifa entdecken', 'Descubrir Tarifa', 'Ontdek Tarifa', 'Upptäck Tarifa')
    }
  ],
  faqTitle: l('Quick questions', 'Kurz gefragt', 'Preguntas rápidas', 'Kort gevraagd', 'Kort frågat'),
  faq: [
    {
      id: 'discount',
      question: l('Are these discounted prices?', 'Sind das reduzierte Preise?', '¿Son precios rebajados?', 'Zijn dit kortingsprijzen?', 'Är det rabatterade priser?'),
      answer: l('It is our normal direct price for these nights, all fees included.', 'Es ist unser normaler Direktpreis für diese Nächte, alle Gebühren inklusive.', 'Es nuestro precio directo normal para esas noches, con todas las tasas incluidas.', 'Het is onze normale directe prijs voor deze nachten, alle kosten inbegrepen.', 'Det är vårt vanliga direktpris för dessa nätter, alla avgifter inkluderade.')
    },
    {
      id: 'selection',
      question: l('Why do I only see four?', 'Warum sehe ich nur vier?', '¿Por qué solo veo cuatro?', 'Waarom zie ik er maar vier?', 'Varför ser jag bara fyra?'),
      answer: l('The page shows one gap per apartment from the next three weeks. All dates with prices are in the regular search.', 'Die Seite zeigt je Wohnung eine Lücke aus den nächsten drei Wochen. Alle Termine mit Preis stehen in der normalen Suche.', 'La página muestra un hueco por apartamento de las próximas tres semanas. Todas las fechas con precio están en la búsqueda normal.', 'De pagina toont per appartement één gat uit de komende drie weken. Alle data met prijs staan in de gewone zoekfunctie.', 'Sidan visar en lucka per lägenhet ur de närmaste tre veckorna. Alla datum med pris finns i den vanliga sökningen.')
    },
    {
      id: 'confirmation',
      question: l('Is the gap reserved for me?', 'Ist die Lücke für mich reserviert?', '¿El hueco está reservado para mí?', 'Is het gat voor mij gereserveerd?', 'Är luckan reserverad för mig?'),
      answer: l('Only once you book. Until then anyone who sees it first can take it.', 'Erst mit der Buchung. Bis dahin kann sie jeder nehmen, der sie zuerst sieht.', 'Solo al reservar. Hasta entonces puede cogerlo quien lo vea primero.', 'Pas met de boeking. Tot dan kan iedereen die het eerst ziet het nemen.', 'Först när ni bokar. Fram till dess kan vem som helst som ser den först ta den.')
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
