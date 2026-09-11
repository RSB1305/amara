import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface GettingToTarifaSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: [string, string, string];
}

export interface GettingToTarifaLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: GettingToTarifaSection[];
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    areasLabel: string;
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-09-10',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorRoute: 'about'
};

export const gettingToTarifaSeo: AmaraAuthoringSeo = {
  version: '2026-09-10-getting-to-tarifa-v2.1',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: { title: 'Getting to Tarifa & AMARA Family & Surf', description: 'The N-340 from Málaga or Cádiz, coaches to Calle Batalla del Salado, three usable airports and the ferry from Tangier — then Mar Adriático 29 with its own garage space.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Anreise nach Tarifa & AMARA Family & Surf', description: 'Die N-340 von Málaga oder Cádiz, Fernbusse zur Calle Batalla del Salado, drei brauchbare Flughäfen und die Fähre aus Tanger — dann Mar Adriático 29 mit eigenem Garagenplatz.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Cómo llegar a Tarifa y a AMARA Family & Surf', description: 'La N-340 desde Málaga o Cádiz, autobuses a la Calle Batalla del Salado, tres aeropuertos útiles y el ferry desde Tánger, y luego Mar Adriático 29 con plaza de garaje.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Naar Tarifa & AMARA Family & Surf', description: 'De N-340 vanaf Málaga of Cádiz, bussen naar Calle Batalla del Salado, drie bruikbare luchthavens en de ferry uit Tanger — dan Mar Adriático 29 met eigen garageplaats.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Resa till Tarifa & AMARA Family & Surf', description: 'N-340 från Málaga eller Cádiz, bussar till Calle Batalla del Salado, tre användbara flygplatser och färjan från Tanger — sedan Mar Adriático 29 med egen garageplats.', robots: 'index, follow', canonical: 'auto' }
  }
};

const sharedSources = {
  tarifaTourism: 'https://turismodetarifa.com/en/how-to-arrive/',
  malagaAirport: 'https://www.aena.es/en/malaga-costa-del-sol/getting-there/bus.html',
  jerezAirport: 'https://www.aena.es/en/jerez/getting-there/bus.html',
  campoGibraltar: 'https://siu.ctmcg.es/es/horarios.php',
  comes: 'https://www.tgcomes.es/',
  portMap: 'https://www.apba.es/en/'
} as const;

export const gettingToTarifaContent = {
  navLabel: l("Arrival & Mobility", "Anreise & Mobilität", "Llegada y movilidad", "Aankomst & mobiliteit", "Ankomst & mobilitet"),
  hero: {
    eyebrow: l("Tarifa arrival guide", "Anreise · Tarifa", "Llegada a Tarifa", "Aankomst · Tarifa", "Ankomst · Tarifa"),
    title: l("Getting to Tarifa", "Anreise nach Tarifa", "Cómo llegar a Tarifa", "Naar Tarifa reizen", "Resa till Tarifa"),
    standfirst: l(
      "By car it is the N-340: from Málaga along the western Costa del Sol and through Algeciras, from Cádiz down the Atlantic corridor. Coaches stop in town at Calle Batalla del Salado, and the Campo de Gibraltar network runs the Algeciras–Tarifa connection. Málaga has the widest choice of flights, Gibraltar is closer but adds a land border, and Jerez works from the Cádiz side. Ferries from Tangier arrive at the passenger port. Our address is Mar Adriático 29 in La Marina — and a reserved underground space comes with the apartment, so the last part of the drive is already settled.",
      "Mit dem Auto ist es die N-340: von Málaga über die westliche Costa del Sol und durch Algeciras, von Cádiz durch den Atlantikkorridor. Fernbusse halten im Ort an der Calle Batalla del Salado, und im Netz des Campo de Gibraltar fährt die Verbindung Algeciras–Tarifa. Málaga hat die größte Flugauswahl, Gibraltar liegt näher, bringt aber eine Landgrenze mit, und Jerez funktioniert von der Cádiz-Seite. Fähren aus Tanger kommen im Passagierhafen an. Unsere Adresse ist Mar Adriático 29 in La Marina — und zur Wohnung gehört ein reservierter Tiefgaragenplatz, das letzte Stück der Fahrt ist damit schon geklärt.",
      "En coche es la N-340: desde Málaga por la Costa del Sol occidental y a través de Algeciras, desde Cádiz por el corredor atlántico. Los autobuses paran en la Calle Batalla del Salado, y en la red del Campo de Gibraltar circula la conexión Algeciras–Tarifa. Málaga tiene la mayor oferta de vuelos, Gibraltar está más cerca pero añade una frontera terrestre, y Jerez funciona desde el lado de Cádiz. Los ferris desde Tánger llegan al puerto de pasajeros. Nuestra dirección es Mar Adriático 29, en La Marina, y con el apartamento va una plaza reservada de garaje: el último tramo ya está resuelto.",
      "Met de auto is het de N-340: vanaf Málaga langs de westelijke Costa del Sol en door Algeciras, vanaf Cádiz via de Atlantische corridor. Bussen stoppen in de stad aan de Calle Batalla del Salado, en in het netwerk van Campo de Gibraltar rijdt de verbinding Algeciras–Tarifa. Málaga heeft het grootste vluchtaanbod, Gibraltar ligt dichterbij maar voegt een landgrens toe, en Jerez werkt vanaf de kant van Cádiz. Ferry's uit Tanger komen aan in de passagiershaven. Ons adres is Mar Adriático 29 in La Marina — en bij het appartement hoort een gereserveerde garageplaats, dus het laatste stuk is al geregeld.",
      "Med bil är det N-340: från Málaga längs västra Costa del Sol och genom Algeciras, från Cádiz längs atlantkorridoren. Bussar stannar i staden vid Calle Batalla del Salado, och i Campo de Gibraltars nät går förbindelsen Algeciras–Tarifa. Málaga har störst flygutbud, Gibraltar ligger närmare men lägger till en landgräns, och Jerez fungerar från Cádizsidan. Färjor från Tanger kommer in i passagerarhamnen. Vår adress är Mar Adriático 29 i La Marina — och till lägenheten hör en reserverad garageplats, så sista biten av körningen är redan löst."
    ),
    note: l(
      "Send us your arrival time and we will tell you what applies that day.",
      "Schickt uns eure Ankunftszeit, dann sagen wir euch, was an dem Tag gilt.",
      "Mandadnos vuestra hora de llegada y os decimos qué rige ese día.",
      "Stuur ons je aankomsttijd, dan zeggen we wat er die dag geldt.",
      "Skicka oss er ankomsttid, så säger vi vad som gäller den dagen."
    ),
    updated: l("As of August 2026", "Stand August 2026", "Actualizado en agosto de 2026", "Stand augustus 2026", "Uppdaterad augusti 2026")
  },
  facts: [
    {
      label: l("Our address", "Unsere Adresse", "Nuestra dirección", "Ons adres", "Vår adress"),
      value: l("Mar Adriático 29, La Marina", "Mar Adriático 29, La Marina", "Mar Adriático 29, La Marina", "Mar Adriático 29, La Marina", "Mar Adriático 29, La Marina")
    },
    {
      label: l("By road", "Über die Straße", "Por carretera", "Over de weg", "På väg"),
      value: l("The N-340 from Málaga or Cádiz", "Die N-340 von Málaga oder Cádiz", "La N-340 desde Málaga o Cádiz", "De N-340 vanaf Málaga of Cádiz", "N-340 från Málaga eller Cádiz")
    },
    {
      label: l("Coach stop", "Bushaltestelle", "Parada de autobús", "Bushalte", "Busshållplats"),
      value: l("Calle Batalla del Salado", "Calle Batalla del Salado", "Calle Batalla del Salado", "Calle Batalla del Salado", "Calle Batalla del Salado")
    },
    {
      label: l("At the apartment", "An der Wohnung", "En el alojamiento", "Bij het appartement", "Vid lägenheten"),
      value: l("A reserved underground space", "Ein reservierter Tiefgaragenplatz", "Plaza reservada en el garaje", "Een gereserveerde garageplaats", "En reserverad garageplats")
    }
  ],
  sections: [
    {
      id: "airports",
      eyebrow: l("Airports", "Flughäfen", "Aeropuertos", "Luchthavens", "Flygplatser"),
      title: l("Three airports, and then a stretch of road", "Drei Flughäfen, und dann noch ein Stück Straße", "Tres aeropuertos, y luego un trecho de carretera", "Drie luchthavens, en dan nog een stuk weg", "Tre flygplatser, och sedan en bit väg"),
      paragraphs: [
        l(
          "Málaga usually has the widest choice of flights. Gibraltar is geographically closer but adds a land border and the documents that go with it. Jerez brings you in from the Cádiz side. Roughly, Málaga is about 160 km and around two hours by road, Jerez about 120 km, and Gibraltar only about 45 km plus the border.",
          "Málaga hat meist die größte Flugauswahl. Gibraltar liegt geografisch näher, bringt aber eine Landgrenze und die dazugehörigen Dokumente mit. Jerez führt euch von der Cádiz-Seite heran. Grob: Málaga sind etwa 160 km und rund zwei Stunden Fahrt, Jerez etwa 120 km und Gibraltar nur rund 45 km plus Grenze.",
          "Málaga suele tener la mayor oferta de vuelos. Gibraltar queda más cerca pero añade una frontera terrestre y su documentación. Jerez os acerca desde el lado de Cádiz. A grandes rasgos: Málaga está a unos 160 km y cerca de dos horas por carretera, Jerez a unos 120 km y Gibraltar a solo unos 45 km más la frontera.",
          "Málaga heeft meestal het grootste vluchtaanbod. Gibraltar ligt geografisch dichterbij maar voegt een landgrens en de bijbehorende documenten toe. Jerez brengt je binnen vanaf de kant van Cádiz. Ruwweg: Málaga is ongeveer 160 km en zo'n twee uur rijden, Jerez ongeveer 120 km en Gibraltar maar zo'n 45 km plus de grens.",
          "Málaga har oftast störst flygutbud. Gibraltar ligger geografiskt närmare men lägger till en landgräns och de handlingar som hör dit. Jerez tar er in från Cádizsidan. Grovt: Málaga är cirka 160 km och runt två timmars körning, Jerez cirka 120 km och Gibraltar bara cirka 45 km plus gränsen."
        ),
        l(
          "Aena lists buses from Málaga Airport towards Algeciras and La Línea, and from Jerez Airport towards Jerez and Cádiz. In each case a further leg to Tarifa follows.",
          "Aena nennt ab Flughafen Málaga Busse Richtung Algeciras und La Línea, ab Flughafen Jerez Richtung Jerez und Cádiz. In beiden Fällen folgt eine weitere Etappe nach Tarifa.",
          "Aena indica autobuses desde el aeropuerto de Málaga hacia Algeciras y La Línea, y desde Jerez hacia Jerez y Cádiz. En ambos casos queda un tramo más hasta Tarifa.",
          "Aena vermeldt bussen vanaf Málaga Airport richting Algeciras en La Línea, en vanaf Jerez Airport richting Jerez en Cádiz. In beide gevallen volgt nog een traject naar Tarifa.",
          "Aena anger bussar från Málaga flygplats mot Algeciras och La Línea, och från Jerez flygplats mot Jerez och Cádiz. I båda fallen följer ytterligare en sträcka till Tarifa."
        ),
        l(
          "With a hire car or transfer you are here from the airport in one and a half to two hours; if you land late, take the transfer.",
          "Mit Mietwagen oder Transfer seid ihr vom Flughafen in eineinhalb bis zwei Stunden da; wer spät landet, nimmt den Transfer.",
          "Con coche de alquiler o traslado estáis aquí desde el aeropuerto en una hora y media o dos; quien aterriza tarde, coge el traslado.",
          "Met huurauto of transfer ben je vanaf de luchthaven in anderhalf tot twee uur hier; wie laat landt, neemt de transfer.",
          "Med hyrbil eller transfer är ni här från flygplatsen på en och en halv till två timmar; den som landar sent tar transfern."
        )
      ]
    },
    {
      id: "by-car",
      eyebrow: l("By car", "Mit dem Auto", "En coche", "Met de auto", "Med bil"),
      title: l("The N-340, then straight into the garage", "Die N-340 — und dann direkt in die Garage", "La N-340 y directos al garaje", "De N-340 en dan zo de garage in", "N-340 och sedan rakt in i garaget"),
      paragraphs: [
        l(
          "From Málaga the route runs along the western Costa del Sol and through Algeciras; from Cádiz you come down the Atlantic coastal corridor. Traffic can change the last stretch of either. From Málaga you have a choice: the AP-7 is the fast toll motorway, the A-7/N-340 along the coast the free alternative.",
          "Von Málaga führt die Strecke über die westliche Costa del Sol und durch Algeciras; von Cádiz kommt ihr durch den Küstenkorridor am Atlantik. Der Verkehr kann den letzten Abschnitt beider Routen verändern. Von Málaga habt ihr die Wahl: Die AP-7 ist die schnelle Mautstrecke, die A-7/N-340 an der Küste die kostenlose Alternative.",
          "Desde Málaga la ruta va por la Costa del Sol occidental y atraviesa Algeciras; desde Cádiz se baja por el corredor costero atlántico. El tráfico puede cambiar el tramo final de ambas. Desde Málaga tenéis elección: la AP-7 es la autopista de peaje rápida, y la A-7/N-340 por la costa, la alternativa gratuita.",
          "Vanaf Málaga loopt de route langs de westelijke Costa del Sol en door Algeciras; vanaf Cádiz kom je via de Atlantische kustcorridor. Verkeer kan het laatste stuk van beide veranderen. Vanaf Málaga heb je de keuze: de AP-7 is de snelle tolweg, de A-7/N-340 langs de kust het gratis alternatief.",
          "Från Málaga går vägen längs västra Costa del Sol och genom Algeciras; från Cádiz kommer ni längs den atlantiska kustkorridoren. Trafiken kan förändra sista biten på båda. Från Málaga har ni ett val: AP-7 är den snabba avgiftsvägen, A-7/N-340 längs kusten det avgiftsfria alternativet."
        ),
        l(
          "Enter Mar Adriático 29 before you reach the town, not just \"Tarifa\". That matters most with luggage or after dark.",
          "Gebt Mar Adriático 29 schon vor der Einfahrt in den Ort ein, nicht nur „Tarifa“. Das zählt vor allem mit Gepäck oder nach Einbruch der Dunkelheit.",
          "Introducid Mar Adriático 29 antes de entrar en el pueblo, no solo \"Tarifa\". Importa sobre todo con equipaje o de noche.",
          "Voer Mar Adriático 29 in vóór je de stad binnenrijdt, niet alleen \"Tarifa\". Dat telt vooral met bagage of na zonsondergang.",
          "Ange Mar Adriático 29 innan ni kör in i orten, inte bara \"Tarifa\". Det spelar mest roll med bagage eller efter mörkrets inbrott."
        ),
        l(
          "The reserved underground space means you drive in and stop looking — which matters most in July and August. You get the exact garage entrance with your arrival information.",
          "Der reservierte Tiefgaragenplatz bedeutet: hineinfahren und aufhören zu suchen — das zählt vor allem im Juli und August. Die genaue Garagenzufahrt bekommt ihr mit euren Ankunftsinformationen.",
          "La plaza reservada significa entrar y dejar de buscar, algo que importa sobre todo en julio y agosto. La entrada exacta al garaje os llega con la información de llegada.",
          "De gereserveerde garageplaats betekent: naar binnen rijden en stoppen met zoeken — dat telt vooral in juli en augustus. De precieze garage-ingang krijgen jullie bij de aankomstinformatie.",
          "Den reserverade garageplatsen betyder att ni kör in och slutar leta — vilket betyder mest i juli och augusti. Den exakta garageinfarten får ni med er ankomstinformation."
        ),
        l(
          "Driving an electric car? Plan your charging ahead; the map shows the nearest public charging points around Tarifa.",
          "Ihr kommt mit einem Elektroauto? Plant das Laden im Voraus; die Karte zeigt die nächsten öffentlichen Ladepunkte rund um Tarifa.",
          "¿Llegáis en coche eléctrico? Planificad la carga con antelación; el mapa muestra los puntos de recarga públicos más cercanos alrededor de Tarifa.",
          "Komen jullie met een elektrische auto? Plan het laden vooraf; de kaart toont de dichtstbijzijnde openbare laadpunten rond Tarifa.",
          "Kommer ni med elbil? Planera laddningen i förväg; kartan visar de närmaste offentliga laddstationerna runt Tarifa."
        )
      ]
    },
    {
      id: "by-bus",
      eyebrow: l("By coach", "Mit dem Fernbus", "En autobús", "Met de bus", "Med buss"),
      title: l("The stop is Calle Batalla del Salado", "Die Haltestelle ist die Calle Batalla del Salado", "La parada es la Calle Batalla del Salado", "De halte is Calle Batalla del Salado", "Hållplatsen är Calle Batalla del Salado"),
      paragraphs: [
        l(
          "Tarifa is connected by coach with Seville, Cádiz, Málaga and Algeciras; the times for your day are at Comes below.",
          "Tarifa ist per Fernbus mit Sevilla, Cádiz, Málaga und Algeciras verbunden; die Zeiten für euren Tag stehen bei Comes unten.",
          "Tarifa está conectada por autobús con Sevilla, Cádiz, Málaga y Algeciras; los horarios de vuestro día están abajo, en Comes.",
          "Tarifa is per streekbus verbonden met Sevilla, Cádiz, Málaga en Algeciras; de tijden voor jouw dag staan hieronder bij Comes.",
          "Tarifa har fjärrbuss till Sevilla, Cádiz, Málaga och Algeciras; tiderna för er dag finns hos Comes nedan."
        ),
        l(
          "From the stop it is a few more minutes to Mar Adriático 29 in La Marina.",
          "Von der Haltestelle sind es noch ein paar Minuten bis zur Mar Adriático 29 in La Marina.",
          "Desde la parada quedan unos minutos hasta Mar Adriático 29 en La Marina.",
          "Vanaf de halte is het nog een paar minuten naar Mar Adriático 29 in La Marina.",
          "Från hållplatsen är det några minuter kvar till Mar Adriático 29 i La Marina."
        ),
        l(
          "With children, boards or several suitcases the taxi is the relaxed answer for this stretch; walking works too.",
          "Mit Kindern, Boards oder mehreren Koffern ist das Taxi für dieses Stück die entspannte Lösung; zu Fuß geht es auch.",
          "Con niños, tablas o varias maletas, el taxi es la solución tranquila para este tramo; a pie también se puede.",
          "Met kinderen, boards of meerdere koffers is de taxi voor dit stuk de ontspannen oplossing; te voet kan ook.",
          "Med barn, brädor eller flera resväskor är taxin den avspända lösningen för den här biten; till fots går också."
        )
      ]
    },
    {
      id: "port",
      eyebrow: l("From Morocco", "Aus Marokko", "Desde Marruecos", "Vanuit Marokko", "Från Marocko"),
      title: l("The ferry from Tangier lands in town", "Die Fähre aus Tanger legt im Ort an", "El ferry desde Tánger atraca en el pueblo", "De ferry uit Tanger meert in de stad aan", "Färjan från Tanger lägger till i orten"),
      paragraphs: [
        l(
          "Tarifa’s passenger port connects the town with Tanger Ville; whether a crossing runs is decided by weather and the ferry company on the day.",
          "Der Passagierhafen von Tarifa verbindet die Stadt mit Tanger Ville; ob eine Überfahrt fährt, entscheiden Wetter und Reederei am Tag.",
          "El puerto de pasajeros de Tarifa conecta la ciudad con Tánger Ville; si una travesía sale lo deciden el tiempo y la naviera ese día.",
          "De passagiershaven van Tarifa verbindt de stad met Tanger Ville; of een overtocht vaart, bepalen het weer en de rederij op de dag zelf.",
          "Tarifas passagerarhamn förbinder staden med Tanger Ville; om en överfart går avgörs av väder och rederi på dagen."
        ),
        l(
          "After passport and baggage control you go through town to La Marina; count the control into the evening.",
          "Nach Pass- und Gepäckkontrolle geht es durch den Ort nach La Marina; rechnet die Kontrolle in den Abend ein.",
          "Tras el control de pasaportes y equipaje se cruza el pueblo hasta La Marina; contad el control dentro de la tarde.",
          "Na paspoort- en bagagecontrole ga je door de plaats naar La Marina; reken de controle mee in de avond.",
          "Efter pass- och bagagekontroll går det genom orten till La Marina; räkna in kontrollen i kvällen."
        ),
        l(
          "From the port to La Marina it is a few minutes by taxi or a walk with light luggage.",
          "Vom Hafen nach La Marina sind es ein paar Minuten mit dem Taxi oder ein Spaziergang mit leichtem Gepäck.",
          "Del puerto a La Marina son unos minutos en taxi o un paseo con poco equipaje.",
          "Van de haven naar La Marina is het een paar minuten met de taxi of een wandeling met lichte bagage.",
          "Från hamnen till La Marina är det några minuter med taxi eller en promenad med lätt bagage."
        )
      ]
    },
    {
      id: "without-car",
      eyebrow: l("Once you are here", "Wenn ihr da seid", "Ya en Tarifa", "Als je er bent", "Väl på plats"),
      title: l("In town you can leave the car parked", "Im Ort könnt ihr das Auto stehen lassen", "En el pueblo podéis dejar el coche aparcado", "In de stad kun je de auto laten staan", "I stan kan ni låta bilen stå"),
      paragraphs: [
        l(
          "From La Marina the old town is a walk, and the supermarket is directly opposite the building. The old town itself is largely car-free — from about 13:30, Monday to Saturday, only residents, permit holders and deliveries drive in — so La Marina with its garage is the easy side to arrive on. Everyday shopping and evenings in town need no car at all.",
          "Von La Marina aus geht ihr zu Fuß in die Altstadt, und der Supermarkt liegt direkt gegenüber dem Haus. Die Altstadt selbst ist weitgehend autofrei — ab etwa 13:30 Uhr, montags bis samstags, fahren nur Anwohner, Genehmigungsinhaber und Lieferdienste hinein —, deshalb ist La Marina mit seiner Garage die unkomplizierte Seite zum Ankommen. Für den täglichen Einkauf und Abende im Ort braucht ihr gar kein Auto.",
          "Desde La Marina el casco antiguo se hace andando, y el supermercado está justo enfrente del edificio. El propio casco antiguo es en gran parte peatonal —desde las 13:30, de lunes a sábado, solo entran residentes, titulares de permiso y repartos—, así que La Marina, con su garaje, es el lado fácil para llegar. La compra diaria y las noches en el pueblo no piden coche.",
          "Vanuit La Marina loop je naar de oude kern, en de supermarkt ligt recht tegenover het gebouw. De oude kern zelf is grotendeels autovrij — vanaf ongeveer 13:30 uur, maandag tot en met zaterdag, rijden alleen bewoners, vergunninghouders en leveranciers naar binnen — dus La Marina met zijn garage is de makkelijke kant om aan te komen. Dagelijkse boodschappen en avonden in de stad hebben geen auto nodig.",
          "Från La Marina går ni till gamla stan, och mataffären ligger mitt emot huset. Själva gamla stan är till stor del bilfri — från cirka 13:30, måndag till lördag, kör bara boende, tillståndshavare och leveranser in — så La Marina med sitt garage är den enkla sidan att komma till. Vardagshandel och kvällar i stan kräver ingen bil alls."
        ),
        l(
          "It changes outside town. The western beaches, shifting wind conditions and day trips are much easier when you can choose your transport freely.",
          "Außerhalb des Ortes wird es anders. Die westlichen Strände, wechselnde Windbedingungen und Ausflüge lassen sich deutlich leichter nutzen, wenn ihr das Verkehrsmittel frei wählen könnt.",
          "Fuera del pueblo cambia. Las playas del oeste, el viento cambiante y las excursiones son mucho más fáciles si podéis elegir el transporte con libertad.",
          "Buiten de stad verandert dat. De westelijke stranden, wisselende windcondities en dagtochten gaan veel makkelijker als je je vervoer vrij kunt kiezen.",
          "Utanför orten blir det annorlunda. De västra stränderna, växlande vindförhållanden och utflykter blir mycket lättare när ni fritt kan välja transportmedel."
        ),
        l(
          "From La Marina you drive west without having to pass through the old town; which beach fits today, the wind tells you.",
          "Von La Marina fahrt ihr nach Westen, ohne durch die Altstadt zu müssen; welcher Strand heute passt, sagt der Wind.",
          "Desde La Marina vais hacia el oeste sin tener que atravesar el casco antiguo; qué playa toca hoy lo dice el viento.",
          "Vanuit La Marina rijd je naar het westen zonder door de oude stad te moeten; welk strand vandaag past, zegt de wind.",
          "Från La Marina kör ni västerut utan att behöva genom gamla stan; vilken strand som passar i dag säger vinden."
        )
      ]
    },
    {
      id: "western-coast",
      eyebrow: l("The western beaches", "Die westlichen Strände", "Las playas del oeste", "De westelijke stranden", "De västra stränderna"),
      title: l("The coast runs far past the town", "Die Küste reicht weit über den Ort hinaus", "La costa sigue mucho más allá del pueblo", "De kust loopt ver voorbij de stad", "Kusten sträcker sig långt förbi orten"),
      paragraphs: [
        l(
          "Tarifa's beaches continue west towards Valdevaqueros and the open Atlantic coast. Which one fits depends on the wind, what you want to do and the time of year.",
          "Tarifas Strände ziehen sich Richtung Valdevaqueros und an die offene Atlantikküste. Welcher passt, hängt vom Wind ab, von dem, was ihr vorhabt, und von der Jahreszeit.",
          "Las playas de Tarifa siguen hacia Valdevaqueros y la costa atlántica abierta. Cuál encaja depende del viento, de lo que queráis hacer y de la época del año.",
          "De stranden van Tarifa lopen door richting Valdevaqueros en de open Atlantische kust. Welk past hangt af van de wind, van wat je wilt doen en van het seizoen.",
          "Tarifas stränder fortsätter mot Valdevaqueros och den öppna atlantkusten. Vilken som passar beror på vinden, vad ni vill göra och årstiden."
        ),
        l(
          "So a beach day is more than driving to the nearest sand. Access conditions and seasonal services differ from one stretch to the next.",
          "Ein Strandtag ist deshalb mehr als die Fahrt zum nächstgelegenen Sand. Zufahrt und saisonaler Betrieb unterscheiden sich von Abschnitt zu Abschnitt.",
          "Un día de playa es más que conducir hasta la arena más cercana. El acceso y los servicios de temporada cambian de un tramo a otro.",
          "Een stranddag is dus meer dan naar het dichtstbijzijnde zand rijden. Toegang en seizoensdiensten verschillen per stuk kust.",
          "En stranddag är alltså mer än att köra till närmaste sand. Infart och säsongsdrift skiljer sig mellan sträckorna."
        ),
        l(
          "Tell us which beach you have in mind, and we will tell you how to get there.",
          "Sagt uns, welchen Strand ihr im Kopf habt, dann sagen wir euch, wie ihr hinkommt.",
          "Decidnos qué playa tenéis en mente y os decimos cómo llegar.",
          "Zeg ons welk strand je in gedachten hebt, dan zeggen we hoe je er komt.",
          "Säg oss vilken strand ni har i tankarna, så säger vi hur ni kommer dit."
        )
      ]
    },
    {
      id: "parking-mobility",
      eyebrow: l("The car", "Das Auto", "El coche", "De auto", "Bilen"),
      title: l("A space at home is not a space at the beach", "Ein Platz zu Hause ist kein Platz am Strand", "Una plaza en casa no es una plaza en la playa", "Een plek thuis is geen plek op het strand", "En plats hemma är inte en plats vid stranden"),
      paragraphs: [
        l(
          "The underground space solves your arrival and every evening after it. At the beach, outside the restaurant and at the fiesta you park like everyone else.",
          "Der Tiefgaragenplatz löst eure Ankunft und jeden Abend danach. Am Strand, vor dem Restaurant und beim Fest parkt ihr wie alle anderen.",
          "La plaza de garaje resuelve vuestra llegada y cada noche después. En la playa, delante del restaurante y en la fiesta aparcáis como todos.",
          "De garageplek lost je aankomst op en elke avond erna. Op het strand, voor het restaurant en bij het feest parkeer je zoals iedereen.",
          "Garageplatsen löser er ankomst och varje kväll därefter. På stranden, utanför restaurangen och vid festen parkerar ni som alla andra."
        ),
        l(
          "In July and August it gets tight along the coast; then the early morning pays off.",
          "Im Juli und August wird es an der Küste eng; dann lohnt der frühe Morgen.",
          "En julio y agosto la costa se llena; entonces compensa la primera hora de la mañana.",
          "In juli en augustus wordt het krap aan de kust; dan loont de vroege ochtend.",
          "I juli och augusti blir det trångt längs kusten; då lönar sig den tidiga morgonen."
        ),
        l(
          "For evenings in town the car stays in the garage; you only need it for the beaches further out.",
          "Für Abende im Ort bleibt das Auto in der Garage; ihr braucht es nur für die Strände weiter draußen.",
          "Para las noches en el pueblo el coche se queda en el garaje; solo lo necesitáis para las playas de más afuera.",
          "Voor avonden in de plaats blijft de auto in de garage; je hebt hem alleen nodig voor de stranden verder weg.",
          "För kvällar i stan står bilen kvar i garaget; ni behöver den bara för stränderna längre ut."
        )
      ]
    }
  ],
  sources: {
    eyebrow: l("Explore further", "Mehr erfahren", "Explorar más", "Meer ontdekken", "Utforska mer"),
    title: l("Where these details come from", "Woher diese Angaben kommen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l(
      "The routes and connections come from the tourism office, the airports and the coach operators — go there for live times and tickets. The address, the garage and the supermarket opposite come from us.",
      "Routen und Verbindungen stammen vom Tourismusbüro, den Flughäfen und den Busbetreibern — dorthin für aktuelle Zeiten und Tickets. Adresse, Garage und der Supermarkt gegenüber kommen von uns.",
      "Las rutas y conexiones proceden de la oficina de turismo, los aeropuertos y las compañías de autobús: acudid allí para horarios y billetes. La dirección, el garaje y el supermercado de enfrente vienen de nosotros.",
      "De routes en verbindingen komen van het toeristenbureau, de luchthavens en de busmaatschappijen — daar vind je actuele tijden en tickets. Het adres, de garage en de supermarkt ertegenover komen van ons.",
      "Rutter och förbindelser kommer från turistbyrån, flygplatserna och bussbolagen — dit går ni för aktuella tider och biljetter. Adressen, garaget och mataffären mitt emot kommer från oss."
    ),
    checked: l("As of August 2026", "Stand August 2026", "Actualizado en agosto de 2026", "Stand augustus 2026", "Uppdaterad augusti 2026"),
    links: [
      {
        label: l("Tarifa Tourism · how to arrive", "Tourismus Tarifa · Anreise", "Turismo de Tarifa · cómo llegar", "Toerisme Tarifa · bereikbaarheid", "Tarifas turistbyrå · resa hit"),
        text: l("Road, airport, ferry and coach overview for Tarifa.", "Überblick zu Straße, Flughafen, Fähre und Bus.", "Resumen de carretera, aeropuertos, ferry y autobús.", "Overzicht van weg, luchthavens, ferry en bus.", "Översikt över väg, flygplatser, färja och buss."),
        href: sharedSources.tarifaTourism
      },
      {
        label: l("Aena · Málaga Airport buses", "Aena · Busse ab Flughafen Málaga", "Aena · autobuses desde Málaga", "Aena · bussen vanaf Málaga Airport", "Aena · bussar från Málaga flygplats"),
        text: l("Connections towards Algeciras and La Línea.", "Verbindungen Richtung Algeciras und La Línea.", "Conexiones hacia Algeciras y La Línea.", "Verbindingen richting Algeciras en La Línea.", "Förbindelser mot Algeciras och La Línea."),
        href: sharedSources.malagaAirport
      },
      {
        label: l("Aena · Jerez Airport buses", "Aena · Busse ab Flughafen Jerez", "Aena · autobuses desde Jerez", "Aena · bussen vanaf Jerez Airport", "Aena · bussar från Jerez flygplats"),
        text: l("Connections towards Jerez and Cádiz.", "Verbindungen Richtung Jerez und Cádiz.", "Conexiones hacia Jerez y Cádiz.", "Verbindingen richting Jerez en Cádiz.", "Förbindelser mot Jerez och Cádiz."),
        href: sharedSources.jerezAirport
      },
      {
        label: l("Campo de Gibraltar transport consortium", "Verkehrsverbund Campo de Gibraltar", "Consorcio de Transporte del Campo de Gibraltar", "Vervoersconsortium Campo de Gibraltar", "Campo de Gibraltars transportkonsortium"),
        text: l("Regional routes and times, including Algeciras–Tarifa.", "Regionale Linien und Fahrzeiten, darunter Algeciras–Tarifa.", "Líneas y horarios regionales, incluida Algeciras–Tarifa.", "Regionale routes en tijden, inclusief Algeciras–Tarifa.", "Regionala linjer och tider, inklusive Algeciras–Tarifa."),
        href: sharedSources.campoGibraltar
      },
      {
        label: l("Transportes Generales Comes", "Transportes Generales Comes", "Transportes Generales Comes", "Transportes Generales Comes", "Transportes Generales Comes"),
        text: l("Coach search, tickets and the current Tarifa stop.", "Bussuche, Fahrkarten und die aktuelle Haltestelle Tarifa.", "Buscador, billetes y la parada actual de Tarifa.", "Buszoeker, tickets en de actuele halte Tarifa.", "Bussökning, biljetter och aktuell hållplats i Tarifa."),
        href: sharedSources.comes
      },
      {
        label: l("Port authority · Bahía de Algeciras", "Hafenbehörde · Bahía de Algeciras", "Autoridad Portuaria · Bahía de Algeciras", "Havenautoriteit · Bahía de Algeciras", "Hamnmyndigheten · Bahía de Algeciras"),
        text: l("Official information on the passenger port and its operation.", "Offizielle Informationen zum Passagierhafen und seinem Betrieb.", "Información oficial del puerto de pasajeros y su operativa.", "Officiële informatie over de passagiershaven en de exploitatie.", "Officiell information om passagerarhamnen och dess drift."),
        href: sharedSources.portMap
      }
    ]
  },
  closing: {
    eyebrow: l("Before you travel", "Vor der Reise", "Antes de viajar", "Vóór de reis", "Före resan"),
    title: l("Send us your arrival time", "Schickt uns eure Ankunftszeit", "Enviadnos vuestra hora de llegada", "Stuur ons jullie aankomsttijd", "Skicka er ankomsttid"),
    body: l(
      "We will send back the approach, the garage entrance and what the last leg looks like from wherever you are coming in.",
      "Wir schicken euch die Anfahrt zurück, die Garagenzufahrt und wie die letzte Etappe von eurem Ankunftspunkt aus aussieht.",
      "Os devolveremos la aproximación, la entrada al garaje y cómo es el último tramo desde donde lleguéis.",
      "Wij sturen de aanrijroute terug, de garage-ingang en hoe het laatste stuk eruitziet vanaf jullie aankomstpunt.",
      "Vi skickar tillbaka infarten, garageinfarten och hur sista biten ser ut från er ankomstpunkt."
    ),
    locationLabel: l("Back to the Tarifa guide", "Zurück zum Tarifa-Guide", "Volver a la guía de Tarifa", "Terug naar de Tarifa-gids", "Tillbaka till Tarifa-guiden"),
    areasLabel: l("Compare where to stay in Tarifa", "Wohnlagen in Tarifa vergleichen", "Comparar dónde alojarse en Tarifa", "Vergelijk waar je in Tarifa verblijft", "Jämför var man bor i Tarifa")
  }
};
