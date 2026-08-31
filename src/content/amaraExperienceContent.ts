import {
  resolveLocale,
  type LocalizedText,
  type LocalizedTextList,
} from "../types/content";
import type { AmaraAuthoringSeo, AmaraLanguage } from "../types/seo";

const text = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string,
): LocalizedText => ({ en, de, es, nl, sv });

export const amaraExperienceSeo: AmaraAuthoringSeo = {
  version: "2026-08-31-amara-experience-v1.1",
  pageType: "C",
  entityKey: "amara-brand",
  languages: {
    en: {
      title: "AMARA Experience | A direct-booking benefit",
      description:
        "Book directly with AMARA and receive a private stay guide with personal ideas for restaurants, walks, beaches and days out.",
      robots: "index, follow",
      canonical: "auto",
    },
    de: {
      title: "AMARA Experience | Ein Vorteil für Direktbucher",
      description:
        "Direkt bei AMARA buchen und einen privaten Aufenthaltsguide mit persönlichen Ideen für Restaurants, Wanderungen, Strände und Ausflüge erhalten.",
      robots: "index, follow",
      canonical: "auto",
    },
    es: {
      title: "AMARA Experience | Una ventaja de la reserva directa",
      description:
        "Reservad directamente con AMARA y recibid una guía privada con ideas personales para restaurantes, paseos, playas y excursiones.",
      robots: "index, follow",
      canonical: "auto",
    },
    nl: {
      title: "AMARA Experience | Een voordeel van direct boeken",
      description:
        "Boek rechtstreeks bij AMARA en ontvang een privégids met persoonlijke ideeën voor restaurants, wandelingen, stranden en uitstapjes.",
      robots: "index, follow",
      canonical: "auto",
    },
    sv: {
      title: "AMARA Experience | En fördel när ni bokar direkt",
      description:
        "Boka direkt med AMARA och få en privat guide med personliga tips om restauranger, promenader, stränder och utflykter.",
      robots: "index, follow",
      canonical: "auto",
    },
  },
};

const content = {
  eyebrow: text(
    "An exclusive direct-booking benefit",
    "Ein exklusiver Vorteil für Direktbucher",
    "Una ventaja exclusiva de la reserva directa",
    "Een exclusief voordeel van direct boeken",
    "En exklusiv fördel när ni bokar direkt",
  ),
  title: text(
    "More from every day together",
    "Mehr aus jedem gemeinsamen Tag",
    "Más de cada día juntos",
    "Meer uit elke dag samen",
    "Mer av varje dag tillsammans",
  ),
  directAnswer: text(
    "AMARA Experience is an exclusive benefit for guests who book directly with us. Once your booking is confirmed, we open a private guide with personal recommendations for the time you actually have: a restaurant for the evening, a walk that fits the day, a beach for a slower morning or a worthwhile trip to a nearby town. We select and check every suggestion for our AMARA destinations, so you can spend less time searching and more time enjoying your stay together. The guide remains available through your departure day.",
    "Die AMARA Experience ist ein exklusiver Vorteil für Gäste, die direkt bei uns buchen. Sobald eure Buchung bestätigt ist, öffnen wir euch einen privaten Guide mit persönlichen Empfehlungen für die Zeit, die ihr wirklich habt: ein Restaurant für den Abend, eine passende Wanderung, einen Strand für einen ruhigen Vormittag oder einen lohnenden Ausflug in eine nahe Stadt. Wir wählen und prüfen jede Empfehlung für unsere AMARA-Reiseziele, damit ihr weniger suchen müsst und mehr gemeinsame Zeit aus eurem Aufenthalt macht. Der Guide bleibt bis zum Ende eures Abreisetags verfügbar.",
    "AMARA Experience es una ventaja exclusiva para quienes reserváis directamente con nosotros. Cuando la reserva está confirmada, os abrimos una guía privada con recomendaciones personales para el tiempo que realmente tenéis: un restaurante para la noche, un paseo que encaje con el día, una playa para una mañana tranquila o una excursión que merezca la pena a una localidad cercana. Seleccionamos y comprobamos cada propuesta para nuestros destinos AMARA, para que dediquéis menos tiempo a buscar y más a disfrutar juntos. La guía permanece disponible hasta el final del día de salida.",
    "AMARA Experience is een exclusief voordeel voor gasten die rechtstreeks bij ons boeken. Zodra jullie boeking is bevestigd, openen we een privégids met persoonlijke aanbevelingen voor de tijd die jullie echt hebben: een restaurant voor de avond, een wandeling die bij de dag past, een strand voor een rustige ochtend of een uitstapje naar een nabijgelegen plaats dat de moeite waard is. We selecteren en controleren elke suggestie voor onze AMARA-bestemmingen, zodat jullie minder hoeven te zoeken en meer uit jullie tijd samen halen. De gids blijft beschikbaar tot het einde van de vertrekdag.",
    "AMARA Experience är en exklusiv fördel för er som bokar direkt med oss. När bokningen är bekräftad öppnar vi en privat guide med personliga rekommendationer för den tid ni faktiskt har: en restaurang för kvällen, en promenad som passar dagen, en strand för en lugn förmiddag eller en utflykt till en närliggande ort som är värd tiden. Vi väljer ut och kontrollerar varje tips för våra AMARA-destinationer, så att ni kan lägga mindre tid på att leta och mer på att njuta tillsammans. Guiden är tillgänglig till slutet av avresedagen.",
  ),
  heroProofLabel: text(
    "Direct with AMARA",
    "Direkt bei AMARA",
    "Directamente con AMARA",
    "Rechtstreeks bij AMARA",
    "Direkt med AMARA",
  ),
  heroProof: text(
    "A more personal stay begins with recommendations shaped around the place, the moment and your time together.",
    "Ein persönlicherer Aufenthalt beginnt mit Empfehlungen, die zum Ort, zum Moment und zu eurer gemeinsamen Zeit passen.",
    "Una estancia más personal empieza con recomendaciones pensadas para el lugar, el momento y vuestro tiempo juntos.",
    "Een persoonlijker verblijf begint met aanbevelingen die passen bij de plek, het moment en jullie tijd samen.",
    "En mer personlig vistelse börjar med rekommendationer som passar platsen, stunden och er tid tillsammans.",
  ),
  imageAlts: {
    village: text(
      "A white village street in Frigiliana beneath a clear blue sky",
      "Eine weiße Gasse in Frigiliana unter klarem blauem Himmel",
      "Una calle blanca de Frigiliana bajo un cielo azul despejado",
      "Een witte dorpsstraat in Frigiliana onder een heldere blauwe lucht",
      "En vit bygata i Frigiliana under en klarblå himmel",
    ),
    evening: text(
      "Bougainvillea and white houses in Frigiliana in the evening light",
      "Bougainvillea und weiße Häuser in Frigiliana im Abendlicht",
      "Bugambilia y casas blancas de Frigiliana a la luz de la tarde",
      "Bougainville en witte huizen in Frigiliana in het avondlicht",
      "Bougainvillea och vita hus i Frigiliana i kvällsljus",
    ),
    coast: text(
      "The coastline and beaches of Nerja seen from above",
      "Die Küste und Strände von Nerja aus der Luft",
      "La costa y las playas de Nerja vistas desde el aire",
      "De kust en stranden van Nerja vanuit de lucht",
      "Nerjas kust och stränder sedda från ovan",
    ),
  },
  valueEyebrow: text(
    "Your time is the real luxury",
    "Eure Zeit ist der wahre Luxus",
    "Vuestro tiempo es el verdadero lujo",
    "Jullie tijd is de echte luxe",
    "Er tid är den verkliga lyxen",
  ),
  valueTitle: text(
    "Not a longer list. Better starting points.",
    "Keine längere Liste. Sondern bessere Ausgangspunkte.",
    "No una lista más larga. Mejores puntos de partida.",
    "Geen langere lijst. Wel betere vertrekpunten.",
    "Inte en längre lista. Bättre utgångspunkter.",
  ),
  valueIntro: text(
    "We bring together the ideas that can genuinely improve a day and add them only when they have been checked for the destination where they apply.",
    "Wir bündeln Ideen, die einen Tag wirklich bereichern können, und nehmen sie erst auf, wenn sie für das jeweilige Reiseziel geprüft sind.",
    "Reunimos ideas que de verdad pueden mejorar un día y solo las añadimos cuando están comprobadas para el destino al que corresponden.",
    "We verzamelen ideeën die een dag echt beter kunnen maken en voegen ze pas toe wanneer ze voor de betreffende bestemming zijn gecontroleerd.",
    "Vi samlar idéer som verkligen kan göra dagen bättre och lägger bara till dem när de har kontrollerats för den destination där de gäller.",
  ),
  benefits: [
    {
      id: "eat",
      number: "01",
      title: text(
        "Eat well",
        "Gut essen",
        "Comer bien",
        "Lekker eten",
        "Äta gott",
      ),
      copy: text(
        "Restaurants, cafés and local places that suit a relaxed lunch, a special evening or a quick stop along the way.",
        "Restaurants, Cafés und lokale Adressen für ein entspanntes Mittagessen, einen besonderen Abend oder einen kurzen Stopp unterwegs.",
        "Restaurantes, cafeterías y lugares locales para una comida tranquila, una noche especial o una parada breve por el camino.",
        "Restaurants, cafés en lokale adressen voor een ontspannen lunch, een bijzondere avond of een korte stop onderweg.",
        "Restauranger, kaféer och lokala ställen för en lugn lunch, en särskild kväll eller ett snabbt stopp på vägen.",
      ),
    },
    {
      id: "walk",
      number: "02",
      title: text(
        "Walk & explore",
        "Wandern & entdecken",
        "Caminar y descubrir",
        "Wandelen en ontdekken",
        "Vandra och upptäcka",
      ),
      copy: text(
        "Walks, routes and viewpoints with enough context to understand which one fits your day and energy.",
        "Wanderungen, Wege und Aussichtspunkte mit genug Kontext, damit ihr einschätzen könnt, was zu eurem Tag und eurer Energie passt.",
        "Paseos, rutas y miradores con el contexto necesario para saber cuál encaja con vuestro día y vuestras ganas.",
        "Wandelingen, routes en uitzichtpunten met genoeg context om te bepalen wat bij jullie dag en energie past.",
        "Promenader, leder och utsiktsplatser med tillräcklig vägledning för att se vad som passar dagen och orken.",
      ),
    },
    {
      id: "sea",
      number: "03",
      title: text(
        "Find your beach",
        "Euren Strand finden",
        "Encontrar vuestra playa",
        "Jullie strand vinden",
        "Hitta er strand",
      ),
      copy: text(
        "Beaches for swimming, slowing down or combining the coast with lunch and an easy afternoon together.",
        "Strände zum Schwimmen, Abschalten oder für einen Küstentag mit Mittagessen und einem entspannten Nachmittag zu zweit.",
        "Playas para bañaros, bajar el ritmo o combinar la costa con una comida y una tarde tranquila juntos.",
        "Stranden om te zwemmen, te vertragen of de kust te combineren met een lunch en een rustige middag samen.",
        "Stränder för bad, lugn och ro eller en dag vid kusten med lunch och en enkel eftermiddag tillsammans.",
      ),
    },
    {
      id: "day-trip",
      number: "04",
      title: text(
        "Take a worthwhile trip",
        "Einen lohnenden Ausflug machen",
        "Hacer una excursión que merezca la pena",
        "Een uitstapje dat de moeite waard is",
        "Göra en utflykt värd tiden",
      ),
      copy: text(
        "Nearby towns, cities and outings that are worth the journey when you want to see more without losing the whole day to logistics.",
        "Nahe Orte, Städte und Ausflüge, die den Weg lohnen, wenn ihr mehr sehen möchtet, ohne den ganzen Tag mit Organisation zu verlieren.",
        "Pueblos, ciudades y planes cercanos que compensan el trayecto cuando queréis ver más sin perder el día entero en la logística.",
        "Plaatsen, steden en uitstapjes in de buurt die de rit waard zijn als jullie meer willen zien zonder de hele dag aan logistiek kwijt te zijn.",
        "Närliggande byar, städer och utflykter som är värda resan när ni vill se mer utan att hela dagen går åt till logistik.",
      ),
    },
    {
      id: "rhythm",
      number: "05",
      title: text(
        "Use the day well",
        "Den Tag gut nutzen",
        "Aprovechar bien el día",
        "De dag goed benutten",
        "Ta vara på dagen",
      ),
      copy: text(
        "Useful timing, access and practical context, so a good idea still works once you leave the apartment.",
        "Nützliche Hinweise zu Uhrzeit, Zugang und Ablauf, damit eine gute Idee auch außerhalb des Apartments funktioniert.",
        "Horarios, acceso y contexto práctico para que una buena idea también funcione cuando salgáis del apartamento.",
        "Handige informatie over timing, bereikbaarheid en praktische zaken, zodat een goed idee ook buiten het appartement werkt.",
        "Praktisk information om tid, tillgänglighet och upplägg, så att en bra idé fungerar även när ni lämnar lägenheten.",
      ),
    },
  ],
  hostEyebrow: text(
    "Personally selected",
    "Persönlich ausgewählt",
    "Selección personal",
    "Persoonlijk geselecteerd",
    "Personligt utvalt",
  ),
  hostTitle: text(
    "Recommendations with a reason behind them",
    "Empfehlungen mit einem guten Grund",
    "Recomendaciones con un motivo detrás",
    "Aanbevelingen met een reden",
    "Rekommendationer med en tanke bakom",
  ),
  hostParagraphs: {
    en: [
      "A recommendation becomes useful when you know why it may suit you. We therefore connect a place or route with the moment it works for: an easy first evening, a clear morning, a slower beach day or a trip worth setting time aside for.",
      "That is our idea of a direct relationship with our guests: not more noise, but considered guidance that helps you shape a stay that feels like your own.",
    ],
    de: [
      "Eine Empfehlung wird erst hilfreich, wenn ihr wisst, warum sie zu euch passen könnte. Deshalb verbinden wir einen Ort oder eine Route mit dem Moment, für den sie sich eignet: ein unkomplizierter erster Abend, ein klarer Morgen, ein ruhiger Strandtag oder ein Ausflug, für den sich die Zeit wirklich lohnt.",
      "So verstehen wir die direkte Beziehung zu unseren Gästen: nicht mehr Informationen, sondern durchdachte Orientierung für einen Aufenthalt, der sich nach eurem eigenen anfühlt.",
    ],
    es: [
      "Una recomendación resulta útil cuando sabéis por qué puede encajar con vosotros. Por eso relacionamos cada lugar o ruta con el momento para el que funciona: una primera noche sencilla, una mañana despejada, un día de playa sin prisas o una excursión para la que merece la pena reservar tiempo.",
      "Así entendemos la relación directa con nuestros huéspedes: no más ruido, sino una orientación cuidada que os ayude a dar forma a una estancia verdaderamente vuestra.",
    ],
    nl: [
      "Een aanbeveling wordt pas bruikbaar als jullie weten waarom die bij jullie kan passen. Daarom verbinden we een plek of route aan het moment waarop die werkt: een makkelijke eerste avond, een heldere ochtend, een rustige stranddag of een uitstapje waarvoor het de moeite waard is tijd vrij te maken.",
      "Zo zien wij de directe band met onze gasten: geen extra ruis, maar doordachte richting die helpt om het verblijf echt van jullie te maken.",
    ],
    sv: [
      "En rekommendation blir användbar när ni vet varför den kan passa er. Därför kopplar vi en plats eller rutt till stunden då den fungerar: en enkel första kväll, en klar morgon, en lugn stranddag eller en utflykt som är värd att avsätta tid för.",
      "Så ser vi på den direkta relationen med våra gäster: inte mer brus, utan genomtänkt vägledning som hjälper er att forma en vistelse som känns som er egen.",
    ],
  } satisfies LocalizedTextList,
  accessEyebrow: text(
    "Already booked directly?",
    "Schon direkt gebucht?",
    "¿Ya habéis reservado directamente?",
    "Al rechtstreeks geboekt?",
    "Har ni redan bokat direkt?",
  ),
  accessTitle: text(
    "Your private guide is ready here",
    "Euer privater Guide beginnt hier",
    "Vuestra guía privada empieza aquí",
    "Jullie privégids begint hier",
    "Er privata guide börjar här",
  ),
  accessIntro: text(
    "Use the first name and travel dates from your confirmation. We will check the booking securely and open the guide for your stay.",
    "Verwendet den Vornamen und die Reisedaten aus eurer Bestätigung. Wir gleichen die Buchung sicher ab und öffnen euren Guide für den Aufenthalt.",
    "Usad el nombre y las fechas de la confirmación. Comprobaremos la reserva de forma segura y abriremos la guía para vuestra estancia.",
    "Gebruik de voornaam en reisdata uit jullie bevestiging. We controleren de boeking veilig en openen de gids voor jullie verblijf.",
    "Använd förnamnet och resedatumen i bekräftelsen. Vi kontrollerar bokningen säkert och öppnar guiden för er vistelse.",
  ),
  formTitle: text(
    "Open your AMARA Experience",
    "Eure AMARA Experience öffnen",
    "Abrid vuestra AMARA Experience",
    "Open jullie AMARA Experience",
    "Öppna er AMARA Experience",
  ),
  formIntro: text(
    "Enter the details exactly as they appear in the booking confirmation.",
    "Gebt die Angaben genau wie in eurer Buchungsbestätigung ein.",
    "Introducid los datos tal como aparecen en la confirmación.",
    "Vul de gegevens precies in zoals ze in de boekingsbevestiging staan.",
    "Ange uppgifterna precis som de står i bokningsbekräftelsen.",
  ),
  firstNameLabel: text(
    "First name of booking holder",
    "Vorname der buchenden Person",
    "Nombre de la persona titular",
    "Voornaam van de hoofdboeker",
    "Bokningsinnehavarens förnamn",
  ),
  arrivalLabel: text(
    "Arrival date",
    "Anreisedatum",
    "Fecha de llegada",
    "Aankomstdatum",
    "Ankomstdatum",
  ),
  departureLabel: text(
    "Departure date",
    "Abreisedatum",
    "Fecha de salida",
    "Vertrekdatum",
    "Avresedatum",
  ),
  submitLabel: text(
    "Open AMARA Experience",
    "AMARA Experience öffnen",
    "Abrir AMARA Experience",
    "AMARA Experience openen",
    "Öppna AMARA Experience",
  ),
  pendingLabel: text(
    "Checking booking…",
    "Buchung wird geprüft…",
    "Comprobando la reserva…",
    "Boeking controleren…",
    "Kontrollerar bokningen…",
  ),
  deniedMessage: text(
    "We could not open the guide with these details. Check the booking confirmation or contact us if you need help.",
    "Mit diesen Angaben konnten wir den Guide nicht öffnen. Prüft bitte die Buchungsbestätigung oder meldet euch bei uns.",
    "No hemos podido abrir la guía con estos datos. Revisad la confirmación o contactadnos si necesitáis ayuda.",
    "Met deze gegevens konden we de gids niet openen. Controleer de bevestiging of neem contact met ons op.",
    "Vi kunde inte öppna guiden med de här uppgifterna. Kontrollera bekräftelsen eller kontakta oss om ni behöver hjälp.",
  ),
  unavailableMessage: text(
    "The private guide is not available right now. Please try again later.",
    "Der private Guide ist gerade nicht verfügbar. Bitte versucht es später noch einmal.",
    "La guía privada no está disponible ahora. Intentadlo de nuevo más tarde.",
    "De privégids is nu niet beschikbaar. Probeer het later opnieuw.",
    "Den privata guiden är inte tillgänglig just nu. Försök igen senare.",
  ),
  sessionEndedMessage: text(
    "Your guide session has ended. Enter the booking details again if the stay is still active.",
    "Eure Guide-Sitzung ist beendet. Gebt die Buchungsdaten erneut ein, falls der Aufenthalt noch aktiv ist.",
    "La sesión de la guía ha terminado. Volved a introducir los datos si la estancia sigue activa.",
    "Jullie gidssessie is beëindigd. Vul de boekingsgegevens opnieuw in als het verblijf nog actief is.",
    "Guidesessionen har avslutats. Ange bokningsuppgifterna igen om vistelsen fortfarande är aktiv.",
  ),
  privacyNote: text(
    "We use these details only to verify access against the confirmed booking and to create a necessary encrypted session cookie.",
    "Wir nutzen diese Angaben nur für den Abgleich mit der bestätigten Buchung und ein notwendiges verschlüsseltes Sitzungscookie.",
    "Usamos estos datos únicamente para verificar la reserva confirmada y crear una cookie de sesión cifrada necesaria.",
    "We gebruiken deze gegevens alleen om de bevestigde boeking te controleren en een noodzakelijke versleutelde sessiecookie te maken.",
    "Vi använder uppgifterna endast för att kontrollera den bekräftade bokningen och skapa en nödvändig krypterad sessionscookie.",
  ),
};

export function getAmaraExperienceContent(lang: AmaraLanguage) {
  return resolveLocale(content, lang);
}
