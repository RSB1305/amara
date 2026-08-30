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
  dateModified: '2026-08-29',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'staying-with-us'
};

export const gettingToTarifaSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-getting-to-tarifa-v2.0',
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
      "Ferry operation, border arrangements and timetables change. Send us your arrival time and we will tell you what applies that day.",
      "Fährbetrieb, Grenzregelungen und Fahrpläne ändern sich. Schickt uns eure Ankunftszeit, dann sagen wir euch, was an dem Tag gilt.",
      "El ferry, los trámites fronterizos y los horarios cambian. Enviadnos vuestra hora de llegada y os diremos qué aplica ese día.",
      "Ferrydienst, grensregels en dienstregelingen veranderen. Stuur ons jullie aankomsttijd, dan zeggen we wat er die dag geldt.",
      "Färjetrafik, gränsregler och tidtabeller ändras. Skicka er ankomsttid, så säger vi vad som gäller den dagen."
    ),
    updated: l("Last checked in August 2026", "Zuletzt im August 2026 nachgesehen", "Revisado por última vez en agosto de 2026", "Voor het laatst nagekeken in augustus 2026", "Senast kontrollerat i augusti 2026")
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
      title: l("Three that work, none that lands you at the door", "Drei, die funktionieren — keiner bringt euch bis zur Tür", "Tres que sirven, ninguno os deja en la puerta", "Drie die werken, geen die je bij de deur afzet", "Tre som fungerar, ingen som lämnar er vid dörren"),
      paragraphs: [
        l(
          "Málaga usually has the widest choice of flights. Gibraltar is geographically closer but adds a land border and the documents that go with it. Jerez brings you in from the Cádiz side.",
          "Málaga hat meist die größte Flugauswahl. Gibraltar liegt geografisch näher, bringt aber eine Landgrenze und die dazugehörigen Dokumente mit. Jerez führt euch von der Cádiz-Seite heran.",
          "Málaga suele tener la mayor oferta de vuelos. Gibraltar queda más cerca pero añade una frontera terrestre y su documentación. Jerez os acerca desde el lado de Cádiz.",
          "Málaga heeft meestal het grootste vluchtaanbod. Gibraltar ligt geografisch dichterbij maar voegt een landgrens en de bijbehorende documenten toe. Jerez brengt je binnen vanaf de kant van Cádiz.",
          "Málaga har oftast störst flygutbud. Gibraltar ligger geografiskt närmare men lägger till en landgräns och de handlingar som hör dit. Jerez tar er in från Cádizsidan."
        ),
        l(
          "Aena lists buses from Málaga Airport towards Algeciras and La Línea, and from Jerez Airport towards Jerez and Cádiz. In each case a further leg to Tarifa follows.",
          "Aena nennt ab Flughafen Málaga Busse Richtung Algeciras und La Línea, ab Flughafen Jerez Richtung Jerez und Cádiz. In beiden Fällen folgt eine weitere Etappe nach Tarifa.",
          "Aena indica autobuses desde el aeropuerto de Málaga hacia Algeciras y La Línea, y desde Jerez hacia Jerez y Cádiz. En ambos casos queda un tramo más hasta Tarifa.",
          "Aena vermeldt bussen vanaf Málaga Airport richting Algeciras en La Línea, en vanaf Jerez Airport richting Jerez en Cádiz. In beide gevallen volgt nog een traject naar Tarifa.",
          "Aena anger bussar från Málaga flygplats mot Algeciras och La Línea, och från Jerez flygplats mot Jerez och Cádiz. I båda fallen följer ytterligare en sträcka till Tarifa."
        ),
        l(
          "Compare a hire car or a booked transfer against the connections that actually run at your arrival time. A late landing narrows the options quickly.",
          "Vergleicht Mietwagen oder gebuchten Transfer mit den Verbindungen, die zu eurer Ankunftszeit wirklich fahren. Eine späte Landung verengt die Möglichkeiten schnell.",
          "Comparad el coche de alquiler o un traslado reservado con las conexiones que realmente circulan a vuestra hora de llegada. Un aterrizaje tardío reduce rápido las opciones.",
          "Vergelijk een huurauto of geboekte transfer met de verbindingen die op jullie aankomsttijd echt rijden. Een late landing beperkt de opties snel.",
          "Jämför hyrbil eller bokad transfer med de förbindelser som faktiskt går vid er ankomsttid. En sen landning smalnar av alternativen fort."
        )
      ]
    },
    {
      id: "by-car",
      eyebrow: l("By car", "Mit dem Auto", "En coche", "Met de auto", "Med bil"),
      title: l("The N-340, then straight into the garage", "Die N-340 — und dann direkt in die Garage", "La N-340 y directos al garaje", "De N-340 en dan zo de garage in", "N-340 och sedan rakt in i garaget"),
      paragraphs: [
        l(
          "From Málaga the route runs along the western Costa del Sol and through Algeciras; from Cádiz you come down the Atlantic coastal corridor. Traffic can change the last stretch of either.",
          "Von Málaga führt die Strecke über die westliche Costa del Sol und durch Algeciras; von Cádiz kommt ihr durch den Küstenkorridor am Atlantik. Der Verkehr kann den letzten Abschnitt beider Routen verändern.",
          "Desde Málaga la ruta va por la Costa del Sol occidental y atraviesa Algeciras; desde Cádiz se baja por el corredor costero atlántico. El tráfico puede cambiar el tramo final de ambas.",
          "Vanaf Málaga loopt de route langs de westelijke Costa del Sol en door Algeciras; vanaf Cádiz kom je via de Atlantische kustcorridor. Verkeer kan het laatste stuk van beide veranderen.",
          "Från Málaga går vägen längs västra Costa del Sol och genom Algeciras; från Cádiz kommer ni längs den atlantiska kustkorridoren. Trafiken kan förändra sista biten på båda."
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
        )
      ]
    },
    {
      id: "by-bus",
      eyebrow: l("By coach", "Mit dem Fernbus", "En autobús", "Met de bus", "Med buss"),
      title: l("The stop is Calle Batalla del Salado", "Die Haltestelle ist die Calle Batalla del Salado", "La parada es la Calle Batalla del Salado", "De halte is Calle Batalla del Salado", "Hållplatsen är Calle Batalla del Salado"),
      paragraphs: [
        l(
          "Tarifa is connected by long-distance coach to several cities, and the Campo de Gibraltar network runs the Algeciras–Tarifa link. Routes and departures are worth checking for your actual date.",
          "Tarifa ist per Fernbus mit mehreren Städten verbunden, und im Netz des Campo de Gibraltar fährt die Verbindung Algeciras–Tarifa. Route und Abfahrt prüft ihr am besten für euer konkretes Datum.",
          "Tarifa está conectada por autobús de largo recorrido con varias ciudades, y la red del Campo de Gibraltar cubre el enlace Algeciras–Tarifa. Conviene comprobar rutas y salidas para vuestra fecha.",
          "Tarifa is per langeafstandsbus verbonden met meerdere steden, en het netwerk van Campo de Gibraltar rijdt de verbinding Algeciras–Tarifa. Routes en vertrektijden check je het best voor jullie datum.",
          "Tarifa har långfärdsbuss till flera städer, och Campo de Gibraltars nät kör sträckan Algeciras–Tarifa. Rutter och avgångar är värda att kolla för just ert datum."
        ),
        l(
          "From the stop there is still a local leg to Mar Adriático 29 in La Marina. The coach brings you to Tarifa, not to the apartment door.",
          "Von der Haltestelle ist es noch eine lokale Etappe zur Mar Adriático 29 in La Marina. Der Bus bringt euch nach Tarifa, nicht bis vor die Wohnungstür.",
          "Desde la parada queda un tramo local hasta Mar Adriático 29, en La Marina. El autobús os lleva a Tarifa, no a la puerta del apartamento.",
          "Vanaf de halte volgt nog een lokaal stuk naar Mar Adriático 29 in La Marina. De bus brengt jullie naar Tarifa, niet tot de voordeur.",
          "Från hållplatsen återstår en lokal sträcka till Mar Adriático 29 i La Marina. Bussen tar er till Tarifa, inte till lägenhetsdörren."
        ),
        l(
          "With children, sports gear or several suitcases, a local taxi is the calm answer. Ask us and we will tell you what that last leg looks like from the stop.",
          "Mit Kindern, Sportausrüstung oder mehreren Koffern ist ein lokales Taxi die entspannte Lösung. Fragt uns, dann sagen wir euch, wie diese letzte Etappe ab der Haltestelle aussieht.",
          "Con niños, material deportivo o varias maletas, un taxi local es la respuesta tranquila. Preguntadnos y os contamos cómo es ese último tramo desde la parada.",
          "Met kinderen, sportuitrusting of meerdere koffers is een lokale taxi het rustige antwoord. Vraag het ons, dan vertellen we hoe dat laatste stuk vanaf de halte eruitziet.",
          "Med barn, sportutrustning eller flera resväskor är en lokal taxi det lugna svaret. Fråga oss, så berättar vi hur den sista biten från hållplatsen ser ut."
        )
      ]
    },
    {
      id: "port",
      eyebrow: l("From Morocco", "Aus Marokko", "Desde Marruecos", "Vanuit Marokko", "Från Marocko"),
      title: l("The ferry from Tangier lands in town", "Die Fähre aus Tanger legt im Ort an", "El ferry desde Tánger atraca en el pueblo", "De ferry uit Tanger meert in de stad aan", "Färjan från Tanger lägger till i orten"),
      paragraphs: [
        l(
          "Tarifa's passenger port connects the town with Tanger Ville. Whether a crossing runs depends on weather and on the operators, so the current status matters more than a saved timetable.",
          "Der Passagierhafen von Tarifa verbindet die Stadt mit Tanger Ville. Ob eine Überfahrt stattfindet, hängt von Wetter und Reedereien ab; der aktuelle Betriebsstatus zählt deshalb mehr als ein gespeicherter Fahrplan.",
          "El puerto de pasajeros de Tarifa conecta con Tánger Ville. Que salga o no una travesía depende del tiempo y de las navieras, así que el estado actual importa más que un horario guardado.",
          "De passagiershaven van Tarifa verbindt de stad met Tanger Ville. Of een overtocht doorgaat hangt af van het weer en de rederijen, dus de actuele status telt meer dan een opgeslagen dienstregeling.",
          "Tarifas passagerarhamn förbinder staden med Tanger Ville. Om en överfart går beror på vädret och rederierna, så aktuell status betyder mer än en sparad tidtabell."
        ),
        l(
          "After passport and baggage control there is still the local stretch through town. Do not schedule anything tight straight after the planned arrival time.",
          "Nach Pass- und Gepäckkontrolle bleibt noch die lokale Etappe durch den Ort. Legt nichts Knappes direkt hinter die vorgesehene Ankunftszeit.",
          "Tras el control de pasaportes y equipaje queda el tramo local por el pueblo. No pongáis nada ajustado justo después de la hora prevista de llegada.",
          "Na paspoort- en bagagecontrole volgt nog het lokale stuk door de stad. Plan niets kraps direct na de geplande aankomsttijd.",
          "Efter pass- och bagagekontroll återstår den lokala sträckan genom orten. Lägg inget snävt direkt efter den planerade ankomsttiden."
        ),
        l(
          "We are in La Marina, not at the port. With luggage take a local taxi; ask us beforehand and we will describe the walk if you would rather do it on foot.",
          "Wir liegen in La Marina, nicht am Hafen. Mit Gepäck nehmt ein lokales Taxi; fragt uns vorher, dann beschreiben wir euch den Fußweg, falls ihr lieber lauft.",
          "Estamos en La Marina, no en el puerto. Con equipaje coged un taxi local; preguntadnos antes y os describimos el paseo si preferís ir andando.",
          "Wij zitten in La Marina, niet bij de haven. Neem met bagage een lokale taxi; vraag het ons vooraf, dan beschrijven we de looproute als jullie liever lopen.",
          "Vi ligger i La Marina, inte vid hamnen. Ta lokal taxi med bagage; fråga oss i förväg, så beskriver vi promenaden om ni hellre går."
        )
      ]
    },
    {
      id: "without-car",
      eyebrow: l("Once you are here", "Wenn ihr da seid", "Ya en Tarifa", "Als je er bent", "Väl på plats"),
      title: l("In town you can leave the car parked", "Im Ort könnt ihr das Auto stehen lassen", "En el pueblo podéis dejar el coche aparcado", "In de stad kun je de auto laten staan", "I stan kan ni låta bilen stå"),
      paragraphs: [
        l(
          "From La Marina the old town is a walk, and the supermarket is directly opposite the building. Everyday shopping and evenings in town need no car at all.",
          "Von La Marina aus geht ihr zu Fuß in die Altstadt, und der Supermarkt liegt direkt gegenüber dem Haus. Für den täglichen Einkauf und Abende im Ort braucht ihr gar kein Auto.",
          "Desde La Marina el casco antiguo se hace andando, y el supermercado está justo enfrente del edificio. La compra diaria y las noches en el pueblo no piden coche.",
          "Vanuit La Marina loop je naar de oude kern, en de supermarkt ligt recht tegenover het gebouw. Dagelijkse boodschappen en avonden in de stad hebben geen auto nodig.",
          "Från La Marina går ni till gamla stan, och mataffären ligger mitt emot huset. Vardagshandel och kvällar i stan kräver ingen bil alls."
        ),
        l(
          "It changes outside town. The western beaches, shifting wind conditions and day trips are much easier when you can choose your transport freely.",
          "Außerhalb des Ortes wird es anders. Die westlichen Strände, wechselnde Windbedingungen und Ausflüge lassen sich deutlich leichter nutzen, wenn ihr das Verkehrsmittel frei wählen könnt.",
          "Fuera del pueblo cambia. Las playas del oeste, el viento cambiante y las excursiones son mucho más fáciles si podéis elegir el transporte con libertad.",
          "Buiten de stad verandert dat. De westelijke stranden, wisselende windcondities en dagtochten gaan veel makkelijker als je je vervoer vrij kunt kiezen.",
          "Utanför orten blir det annorlunda. De västra stränderna, växlande vindförhållanden och utflykter blir mycket lättare när ni fritt kan välja transportmedel."
        ),
        l(
          "From La Marina you can drive west without crossing the old town first. Pick the beach before the transport, then check the access for that beach on that day.",
          "Von La Marina fahrt ihr Richtung Westen, ohne zuerst durch die Altstadt zu müssen. Wählt den Strand vor dem Verkehrsmittel und prüft dann die Zufahrt für genau diesen Strand an diesem Tag.",
          "Desde La Marina podéis salir hacia el oeste sin cruzar antes el casco antiguo. Elegid la playa antes que el transporte y comprobad el acceso a esa playa ese día.",
          "Vanuit La Marina rijd je westwaarts zonder eerst de oude kern door te moeten. Kies eerst het strand en check dan de toegang tot dát strand op die dag.",
          "Från La Marina kör ni västerut utan att först passera gamla stan. Välj stranden före transporten och kolla sedan infarten till just den stranden den dagen."
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
          "Tell us which beach you have in mind and we will look at the access with you. A seasonal beach bus timetable from last year is not something to plan around.",
          "Sagt uns, welchen Strand ihr im Kopf habt, dann schauen wir uns die Zufahrt mit euch an. Ein Strandbus-Fahrplan vom Vorjahr ist keine Planungsgrundlage.",
          "Decidnos qué playa tenéis en mente y miramos el acceso con vosotros. Un horario de bus de playa del año pasado no sirve para planificar.",
          "Zeg ons welk strand jullie in gedachten hebben, dan kijken we samen naar de toegang. Een strandbusdienstregeling van vorig jaar is geen basis om op te plannen.",
          "Säg vilken strand ni tänker på, så tittar vi på infarten tillsammans med er. En strandbusstidtabell från förra året är inget att planera efter."
        )
      ]
    },
    {
      id: "parking-mobility",
      eyebrow: l("The car", "Das Auto", "El coche", "De auto", "Bilen"),
      title: l("A space at home is not a space at the beach", "Ein Platz zu Hause ist kein Platz am Strand", "Una plaza en casa no es una plaza en la playa", "Een plek thuis is geen plek op het strand", "En plats hemma är inte en plats vid stranden"),
      paragraphs: [
        l(
          "The reserved underground space solves your arrival and every evening after it. It does not solve parking at a beach, a restaurant or an event.",
          "Der reservierte Tiefgaragenplatz löst eure Ankunft und jeden Abend danach. Er löst nicht das Parken am Strand, vor einem Restaurant oder bei einer Veranstaltung.",
          "La plaza reservada resuelve vuestra llegada y todas las tardes siguientes. No resuelve aparcar en una playa, un restaurante o un evento.",
          "De gereserveerde garageplaats lost jullie aankomst op en elke avond erna. Hij lost niet het parkeren bij een strand, restaurant of evenement op.",
          "Den reserverade garageplatsen löser er ankomst och varje kväll därefter. Den löser inte parkering vid en strand, en restaurang eller ett evenemang."
        ),
        l(
          "Parking pressure along the coast shifts with the season and the time of day, and July and August are the hardest months in our experience.",
          "Der Parkdruck an der Küste verändert sich mit Saison und Tageszeit, und Juli und August sind nach unserer Erfahrung die schwierigsten Monate.",
          "La presión de aparcamiento en la costa cambia con la temporada y la hora, y julio y agosto son los meses más difíciles según nuestra experiencia.",
          "De parkeerdruk langs de kust verschuift met het seizoen en het tijdstip, en juli en augustus zijn in onze ervaring de lastigste maanden.",
          "Parkeringstrycket längs kusten skiftar med säsong och tid på dygnet, och juli och augusti är enligt vår erfarenhet de svåraste månaderna."
        ),
        l(
          "Leave the car in the garage for evenings in town and use it only when the destination is genuinely outside. That way not every short trip turns into a parking question.",
          "Lasst das Auto für Abende im Ort in der Garage und nutzt es nur, wenn das Ziel wirklich außerhalb liegt. So wird nicht jeder kurze Weg zur Parkplatzfrage.",
          "Dejad el coche en el garaje para las noches en el pueblo y usadlo solo cuando el destino esté realmente fuera. Así no todo trayecto corto se convierte en un problema de aparcamiento.",
          "Laat de auto in de garage voor avonden in de stad en gebruik hem alleen als de bestemming echt buiten ligt. Zo wordt niet elk kort ritje een parkeervraag.",
          "Låt bilen stå i garaget för kvällar i stan och använd den bara när målet verkligen ligger utanför. Då blir inte varje kort resa en parkeringsfråga."
        )
      ]
    }
  ],
  sources: {
    eyebrow: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Where these details come from", "Woher diese Angaben kommen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l(
      "The routes and connections come from the tourism office, the airports and the coach operators — go there for live times and tickets. The address, the garage and the supermarket opposite come from us.",
      "Routen und Verbindungen stammen vom Tourismusbüro, den Flughäfen und den Busbetreibern — dorthin für aktuelle Zeiten und Tickets. Adresse, Garage und der Supermarkt gegenüber kommen von uns.",
      "Las rutas y conexiones proceden de la oficina de turismo, los aeropuertos y las compañías de autobús: acudid allí para horarios y billetes. La dirección, el garaje y el supermercado de enfrente vienen de nosotros.",
      "De routes en verbindingen komen van het toeristenbureau, de luchthavens en de busmaatschappijen — daar vind je actuele tijden en tickets. Het adres, de garage en de supermarkt ertegenover komen van ons.",
      "Rutter och förbindelser kommer från turistbyrån, flygplatserna och bussbolagen — dit går ni för aktuella tider och biljetter. Adressen, garaget och mataffären mitt emot kommer från oss."
    ),
    checked: l("Last checked in August 2026", "Zuletzt im August 2026 nachgesehen", "Revisado por última vez en agosto de 2026", "Voor het laatst nagekeken in augustus 2026", "Senast kontrollerat i augusti 2026"),
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
