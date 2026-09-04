import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface GettingToNerjaSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: [string, string, string];
}

export interface GettingToNerjaLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: GettingToNerjaSection[];
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
  authorRoute: 'about'
};

export const gettingToNerjaSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-getting-to-nerja-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  article,
  languages: {
    en: { title: 'Getting to Nerja & AMARA Playa: Airport, Bus or Car', description: 'Málaga Airport has a direct Alsa coach to Nerja. By car it is the A-7. AMARA Playa is at Calle Castilla Pérez 60, and once you are here most days work on foot.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Anreise nach Nerja: Flughafen, Bus oder Auto', description: 'Vom Flughafen Málaga fährt ein Alsa-Direktbus nach Nerja. Mit dem Auto ist es die A-7. AMARA Playa liegt in der Calle Castilla Pérez 60 — vor Ort geht fast alles zu Fuß.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Cómo llegar a Nerja: aeropuerto, autobús o coche', description: 'Del aeropuerto de Málaga sale un autobús directo de Alsa a Nerja. En coche es la A-7. AMARA Playa está en Calle Castilla Pérez 60 y casi todo se hace a pie.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Naar Nerja & AMARA Playa: luchthaven, bus of auto', description: 'Vanaf Málaga Airport rijdt een directe Alsa-bus naar Nerja. Met de auto is het de A-7. AMARA Playa ligt aan Calle Castilla Pérez 60 en ter plaatse gaat bijna alles lopend.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Resa till Nerja & AMARA Playa: flygplats, buss eller bil', description: 'Från Málaga flygplats går en direktbuss med Alsa till Nerja. Med bil är det A-7. AMARA Playa ligger på Calle Castilla Pérez 60 och på plats fungerar det mesta till fots.', robots: 'index, follow', canonical: 'auto' }
  }
};

const sources = {
  malagaAirport: 'https://www.aena.es/en/malaga-costa-del-sol/getting-there/bus.html',
  granadaAirport: 'https://www.aena.es/en/f.g.l.-granada-jaen/how-to-get-there/bus.html',
  alsa: 'https://www.alsa.com/en/web/bus/home',
  nerjaMobility: 'https://www.nerja.es/File/Agenda_Urbana_Nerja_2030.pdf'
} as const;

export const gettingToNerjaContent = {
  navLabel: l("Arrival & Mobility", "Anreise & Mobilität", "Llegada y movilidad", "Aankomst & mobiliteit", "Ankomst & mobilitet"),
  hero: {
    eyebrow: l("Nerja arrival guide", "Anreise · Nerja", "Llegada a Nerja", "Aankomst · Nerja", "Ankomst · Nerja"),
    title: l("Getting to Nerja", "Anreise nach Nerja", "Cómo llegar a Nerja", "Naar Nerja reizen", "Resa till Nerja"),
    standfirst: l(
      "Málaga is the airport that makes this easy: Aena lists a direct Alsa coach between the airport and Nerja. By car you come down the A-7 from Málaga or Granada. Long-distance coaches arrive around Avenida de Pescia, which is in Nerja but not at the door — with luggage or a late arrival, a taxi for the last stretch is worth it. Our address is Calle Castilla Pérez 60. There is no private parking there, and once you have arrived, Torrecilla beach is about 200 metres away and the Balcón de Europa about 500, so most days work on foot.",
      "Málaga ist der Flughafen, der es einfach macht: Aena führt eine direkte Alsa-Busverbindung zwischen Flughafen und Nerja. Mit dem Auto kommt ihr über die A-7 von Málaga oder Granada. Fernbusse halten im Bereich der Avenida de Pescia — das ist in Nerja, aber nicht an der Tür; mit Koffern oder bei später Ankunft lohnt sich ein Taxi für das letzte Stück. Unsere Adresse ist Calle Castilla Pérez 60. Einen privaten Stellplatz gibt es dort nicht, und wenn ihr erst einmal da seid, liegen der Strand Torrecilla rund 200 Meter und der Balcón de Europa etwa 500 Meter entfernt — das meiste geht zu Fuß.",
      "Málaga es el aeropuerto que lo pone fácil: Aena indica un autobús directo de Alsa entre el aeropuerto y Nerja. En coche se baja por la A-7 desde Málaga o Granada. Los autobuses de largo recorrido llegan a la zona de la Avenida de Pescia, que está en Nerja pero no en la puerta; con maletas o llegada tardía, un taxi para el último tramo merece la pena. Nuestra dirección es Calle Castilla Pérez 60. Allí no hay plaza privada, y una vez que estéis aquí la playa de Torrecilla queda a unos 200 metros y el Balcón de Europa a unos 500, así que casi todo se hace a pie.",
      "Málaga is de luchthaven die het makkelijk maakt: Aena vermeldt een directe Alsa-bus tussen de luchthaven en Nerja. Met de auto kom je via de A-7 vanaf Málaga of Granada. Langeafstandsbussen komen aan rond de Avenida de Pescia — dat is in Nerja, maar niet aan de deur; met bagage of een late aankomst loont een taxi voor het laatste stuk. Ons adres is Calle Castilla Pérez 60. Een eigen parkeerplaats is er niet, en als jullie er eenmaal zijn, ligt het Torrecilla-strand op ongeveer 200 meter en het Balcón de Europa op zo'n 500 — het meeste gaat lopend.",
      "Málaga är flygplatsen som gör det enkelt: Aena anger en direktbuss med Alsa mellan flygplatsen och Nerja. Med bil kommer ni på A-7 från Málaga eller Granada. Långfärdsbussar kommer fram vid Avenida de Pescia — det är i Nerja, men inte vid dörren; med bagage eller sen ankomst är en taxi sista biten värd det. Vår adress är Calle Castilla Pérez 60. Där finns ingen egen parkering, och väl på plats ligger Torrecillastranden cirka 200 meter bort och Balcón de Europa omkring 500, så det mesta fungerar till fots."
    ),
    note: l(
      "Tickets, road conditions and street rules change. Send us your arrival time and we will tell you what applies that day.",
      "Tickets, Straßenlage und Regeln vor Ort ändern sich. Schickt uns eure Ankunftszeit, dann sagen wir euch, was an dem Tag gilt.",
      "Los billetes, el estado de las carreteras y las normas cambian. Enviadnos vuestra hora de llegada y os diremos qué aplica ese día.",
      "Tickets, wegsituatie en regels veranderen. Stuur ons jullie aankomsttijd, dan zeggen we wat er die dag geldt.",
      "Biljetter, vägläge och regler ändras. Skicka er ankomsttid, så säger vi vad som gäller den dagen."
    ),
    updated: l("Last checked in August 2026", "Zuletzt im August 2026 nachgesehen", "Revisado por última vez en agosto de 2026", "Voor het laatst nagekeken in augustus 2026", "Senast kontrollerat i augusti 2026")
  },
  facts: [
    {
      label: l("Our address", "Unsere Adresse", "Nuestra dirección", "Ons adres", "Vår adress"),
      value: l("Calle Castilla Pérez 60", "Calle Castilla Pérez 60", "Calle Castilla Pérez 60", "Calle Castilla Pérez 60", "Calle Castilla Pérez 60")
    },
    {
      label: l("Nearest beach", "Nächster Strand", "Playa más cercana", "Dichtstbijzijnde strand", "Närmaste strand"),
      value: l("Torrecilla · about 200 m", "Torrecilla · rund 200 m", "Torrecilla · unos 200 m", "Torrecilla · ongeveer 200 m", "Torrecilla · cirka 200 m")
    },
    {
      label: l("Old town", "Altstadt", "Casco antiguo", "Oude kern", "Gamla stan"),
      value: l("Balcón de Europa · about 500 m", "Balcón de Europa · rund 500 m", "Balcón de Europa · unos 500 m", "Balcón de Europa · ongeveer 500 m", "Balcón de Europa · cirka 500 m")
    },
    {
      label: l("Parking at the apartment", "Parken an der Wohnung", "Aparcamiento", "Parkeren bij het appartement", "Parkering vid lägenheten"),
      value: l("None — street parking only", "Keins — nur Straßenparken", "Ninguno: solo en la calle", "Geen — alleen straatparkeren", "Ingen — bara gatuparkering")
    }
  ],
  sections: [
    {
      id: "airports",
      eyebrow: l("Airports", "Flughäfen", "Aeropuertos", "Luchthavens", "Flygplatser"),
      title: l("Málaga is the simple one", "Málaga ist der einfache Weg", "Málaga es el sencillo", "Málaga is de eenvoudige", "Málaga är det enkla valet"),
      paragraphs: [
        l(
          "Aena confirms a direct Alsa coach between Málaga Airport and Nerja. That single connection is what makes arriving without a car realistic.",
          "Aena bestätigt eine direkte Alsa-Busverbindung zwischen dem Flughafen Málaga und Nerja. Diese eine Verbindung macht die Anreise ohne Auto überhaupt erst realistisch.",
          "Aena confirma un autobús directo de Alsa entre el aeropuerto de Málaga y Nerja. Esa única conexión es lo que hace realista llegar sin coche.",
          "Aena bevestigt een directe Alsa-bus tussen Málaga Airport en Nerja. Juist die ene verbinding maakt aankomen zonder auto realistisch.",
          "Aena bekräftar en direktbuss med Alsa mellan Málaga flygplats och Nerja. Just den förbindelsen är det som gör det realistiskt att komma utan bil."
        ),
        l(
          "From Granada Airport there is an airport bus into Granada and its bus station, but the leg on to Nerja is a separate journey you have to plan yourself.",
          "Vom Flughafen Granada fährt ein Flughafenbus nach Granada und zum dortigen Busbahnhof; die Weiterfahrt nach Nerja ist eine eigene Etappe, die ihr selbst planen müsst.",
          "Desde el aeropuerto de Granada hay un autobús a Granada y su estación, pero el tramo hasta Nerja es un viaje aparte que hay que organizar.",
          "Vanaf Granada Airport rijdt een bus naar Granada en het busstation, maar het traject naar Nerja is een aparte reis die je zelf moet plannen.",
          "Från Granada flygplats går en flygbuss till Granada och busstationen, men sträckan vidare till Nerja är en egen resa ni får planera själva."
        ),
        l(
          "**A cheaper flight into Granada often costs the saving back on the onward leg.** Málaga plus the direct coach is usually the calmer arrival.",
          "**Ein günstigerer Flug nach Granada kostet die Ersparnis auf der Weiterfahrt oft wieder auf.** Málaga plus Direktbus ist meistens die entspanntere Ankunft.",
          "**Un vuelo más barato a Granada suele consumir el ahorro en el trayecto siguiente.** Málaga con el autobús directo suele ser la llegada más tranquila.",
          "**Een goedkopere vlucht naar Granada kost de besparing vaak terug op het vervolgtraject.** Málaga plus de directe bus is meestal de rustigere aankomst.",
          "**En billigare flygning till Granada äter ofta upp besparingen på nästa sträcka.** Málaga plus direktbussen är oftast den lugnare ankomsten."
        )
      ]
    },
    {
      id: "by-car",
      eyebrow: l("By car", "Mit dem Auto", "En coche", "Met de auto", "Med bil"),
      title: l("Down the A-7, then into a compact town", "Über die A-7 und dann in einen kompakten Ort", "Por la A-7 y luego a un pueblo compacto", "Via de A-7 en dan een compacte stad in", "Via A-7 och sedan in i en kompakt stad"),
      paragraphs: [
        l(
          "From Málaga and from Granada you reach Nerja along the A-7 coastal corridor. The last kilometres of motorway are the easy part.",
          "Von Málaga wie von Granada erreicht ihr Nerja über den Küstenkorridor A-7. Die letzten Autobahnkilometer sind der einfache Teil.",
          "Desde Málaga y desde Granada se llega a Nerja por el corredor costero de la A-7. Los últimos kilómetros de autovía son la parte fácil.",
          "Vanuit Málaga en vanuit Granada bereik je Nerja via de kustcorridor A-7. De laatste snelwegkilometers zijn het makkelijke deel.",
          "Från både Málaga och Granada når ni Nerja via kustkorridoren A-7. De sista motorvägskilometrarna är den lätta biten."
        ),
        l(
          "Then it gets compact: pedestrian streets, one-way sections and seasonal traffic matter more than the motorway did. Navigate to Calle Castilla Pérez 60 and unload only where the signs allow it.",
          "Danach wird es eng: Fußgängerstraßen, Einbahnabschnitte und saisonaler Verkehr zählen mehr als die Autobahn davor. Navigiert zur Calle Castilla Pérez 60 und ladet nur dort aus, wo die Beschilderung es erlaubt.",
          "Después se vuelve compacto: calles peatonales, tramos de sentido único y tráfico estacional pesan más que la autovía. Navegad a la Calle Castilla Pérez 60 y descargad solo donde lo permitan las señales.",
          "Daarna wordt het compact: voetgangersstraten, eenrichtingsdelen en seizoensverkeer tellen zwaarder dan de snelweg. Navigeer naar Calle Castilla Pérez 60 en laad alleen uit waar de borden dat toestaan.",
          "Sedan blir det kompakt: gågator, enkelriktade sträckor och säsongstrafik betyder mer än motorvägen gjorde. Navigera till Calle Castilla Pérez 60 och lasta av bara där skyltarna tillåter det."
        ),
        l(
          "**Do not plan your first evening around finding a space at the door.** There is none, and the parking guide explains which area to aim for instead.",
          "**Plant den ersten Abend nicht rund um die Hoffnung auf einen Platz vor der Tür.** Den gibt es nicht; der Park-Guide erklärt, welchen Bereich ihr stattdessen ansteuert.",
          "**No planifiquéis la primera tarde contando con una plaza en la puerta.** No la hay; la guía de aparcamiento explica a qué zona dirigirse.",
          "**Plan jullie eerste avond niet rond een plek voor de deur.** Die is er niet; de parkeergids legt uit welk gebied je in plaats daarvan aanhoudt.",
          "**Planera inte första kvällen kring en plats vid dörren.** Den finns inte; parkeringsguiden förklarar vilket område ni ska sikta på i stället."
        )
      ]
    },
    {
      id: "by-bus",
      eyebrow: l("By coach", "Mit dem Fernbus", "En autobús", "Met de bus", "Med buss"),
      title: l("The coach brings you to Nerja, not to the door", "Der Bus bringt euch nach Nerja, nicht bis zur Tür", "El autobús os deja en Nerja, no en la puerta", "De bus brengt jullie naar Nerja, niet tot de deur", "Bussen tar er till Nerja, inte till dörren"),
      paragraphs: [
        l(
          "Long-distance coaches arrive around Avenida de Pescia. Lines, stops and frequencies change, so the current Alsa planner is more reliable than any timetable we could copy here.",
          "Fernbusse kommen im Bereich der Avenida de Pescia an. Linien, Haltestellen und Takte ändern sich; der aktuelle Alsa-Reiseplaner ist deshalb verlässlicher als jeder Fahrplan, den wir hier abschreiben könnten.",
          "Los autobuses de largo recorrido llegan a la zona de la Avenida de Pescia. Líneas, paradas y frecuencias cambian, así que el planificador actual de Alsa es más fiable que cualquier horario que copiemos aquí.",
          "Langeafstandsbussen komen aan rond de Avenida de Pescia. Lijnen, haltes en frequenties veranderen, dus de actuele Alsa-planner is betrouwbaarder dan elke dienstregeling die wij hier zouden overnemen.",
          "Långfärdsbussar kommer fram vid Avenida de Pescia. Linjer, hållplatser och turtäthet ändras, så Alsas aktuella reseplanerare är mer pålitlig än någon tidtabell vi kan kopiera hit."
        ),
        l(
          "From there it is still a local leg to Calle Castilla Pérez 60. Central Nerja is walkable, but not every route is flat and not every hour is convenient.",
          "Von dort ist es noch eine lokale Etappe bis zur Calle Castilla Pérez 60. Das Zentrum von Nerja lässt sich gut zu Fuß gehen, aber nicht jeder Weg ist eben und nicht jede Uhrzeit angenehm.",
          "Desde allí queda un tramo local hasta la Calle Castilla Pérez 60. El centro de Nerja se anda bien, pero no todo el recorrido es llano ni toda hora es cómoda.",
          "Vanaf daar volgt nog een lokaal stuk naar Calle Castilla Pérez 60. Het centrum van Nerja is goed loopbaar, maar niet elke route is vlak en niet elk uur handig.",
          "Därifrån återstår en lokal sträcka till Calle Castilla Pérez 60. Centrala Nerja går bra att gå i, men alla vägar är inte plana och alla timmar är inte bekväma."
        ),
        l(
          "**With suitcases, a late arrival or limited mobility, take a taxi for that last stretch.** It is a short ride and it starts the holiday better than dragging bags.",
          "**Mit Koffern, bei später Ankunft oder eingeschränkter Mobilität nehmt für dieses letzte Stück ein Taxi.** Die Fahrt ist kurz und der Urlaub beginnt damit besser als mit Gepäckschleppen.",
          "**Con maletas, llegada tardía o movilidad reducida, coged un taxi para ese último tramo.** Es un trayecto corto y empieza mejor las vacaciones que arrastrar bultos.",
          "**Met koffers, een late aankomst of beperkte mobiliteit: neem voor dat laatste stuk een taxi.** Het is een korte rit en de vakantie begint zo beter dan met slepen.",
          "**Med resväskor, sen ankomst eller nedsatt rörlighet: ta taxi den sista biten.** Det är en kort resa och semestern börjar bättre än med bagagesläp."
        )
      ]
    },
    {
      id: "without-car",
      eyebrow: l("Once you are here", "Wenn ihr da seid", "Ya en Nerja", "Als je er bent", "Väl på plats"),
      title: l("You can stay at AMARA Playa without a car", "In AMARA Playa könnt ihr ohne Auto wohnen", "Podéis alojaros en AMARA Playa sin coche", "Jullie kunnen bij AMARA Playa zonder auto", "Ni kan bo på AMARA Playa utan bil"),
      paragraphs: [
        l(
          "Torrecilla is about 200 metres away and the Balcón de Europa about 500. Old town, shops, restaurants and several beaches make a compact routine on foot.",
          "Torrecilla liegt rund 200 Meter entfernt, der Balcón de Europa etwa 500. Altstadt, Geschäfte, Restaurants und mehrere Strände ergeben zu Fuß einen kompakten Alltag.",
          "Torrecilla queda a unos 200 metros y el Balcón de Europa a unos 500. Casco antiguo, tiendas, restaurantes y varias playas forman una rutina compacta a pie.",
          "Torrecilla ligt op ongeveer 200 meter en het Balcón de Europa op zo'n 500. Oude kern, winkels, restaurants en meerdere stranden vormen te voet een compacte routine.",
          "Torrecilla ligger cirka 200 meter bort och Balcón de Europa omkring 500. Gamla stan, butiker, restauranger och flera stränder blir en kompakt vardag till fots."
        ),
        l(
          "Without a car the ordinary day gets simpler: no space to hunt for, no moving the car before dinner, nothing between you and a quick swim.",
          "Ohne Auto wird der normale Tag einfacher: keine Platzsuche, kein Umparken vor dem Abendessen, nichts zwischen euch und einem schnellen Bad.",
          "Sin coche el día normal se simplifica: sin buscar plaza, sin mover el vehículo para cenar, sin nada entre vosotros y un baño rápido.",
          "Zonder auto wordt de gewone dag eenvoudiger: geen plek zoeken, niet verzetten voor het eten, niets tussen jullie en een snelle duik.",
          "Utan bil blir den vanliga dagen enklare: inget platsletande, ingen flytt före middagen, inget mellan er och ett snabbt dopp."
        ),
        l(
          "**A car earns its place for Maro, Frigiliana or the wider Axarquía.** One or two rental days can cover those and leave the rest of the week car-free.",
          "**Ein Auto lohnt sich für Maro, Frigiliana oder die weitere Axarquía.** Ein oder zwei Miettage decken das ab und lassen den Rest der Woche autofrei.",
          "**El coche vale la pena para Maro, Frigiliana o el resto de la Axarquía.** Uno o dos días de alquiler los cubren y dejan el resto de la semana sin coche.",
          "**Een auto verdient zich terug voor Maro, Frigiliana of de bredere Axarquía.** Eén of twee huurdagen dekken dat en houden de rest van de week autovrij.",
          "**En bil är värd det för Maro, Frigiliana eller övriga Axarquía.** En eller två hyrdagar täcker det och lämnar resten av veckan bilfri."
        )
      ]
    }
  ],
  sources: {
    eyebrow: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Where these details come from", "Woher diese Angaben kommen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l(
      "The connections come from the airport and coach operators — go there for live times and tickets. The distances from our door come from us.",
      "Die Verbindungen stammen von Flughafen und Busbetreiber — dorthin für aktuelle Zeiten und Tickets. Die Entfernungen ab unserer Haustür kommen von uns.",
      "Las conexiones proceden del aeropuerto y del operador de autobuses: acudid allí para horarios y billetes. Las distancias desde nuestra puerta vienen de nosotros.",
      "De verbindingen komen van de luchthaven en de busmaatschappij — daar vind je actuele tijden en tickets. De afstanden vanaf onze deur komen van ons.",
      "Förbindelserna kommer från flygplatsen och bussbolaget — dit går ni för aktuella tider och biljetter. Avstånden från vår dörr kommer från oss."
    ),
    checked: l("Last checked in August 2026", "Zuletzt im August 2026 nachgesehen", "Revisado por última vez en agosto de 2026", "Voor het laatst nagekeken in augustus 2026", "Senast kontrollerat i augusti 2026"),
    links: [
      {
        label: l("Aena · buses at Málaga Airport", "Aena · Busse am Flughafen Málaga", "Aena · autobuses en el aeropuerto de Málaga", "Aena · bussen op Málaga Airport", "Aena · bussar vid Málaga flygplats"),
        text: l("Official confirmation of the Alsa connection to Nerja.", "Offizielle Bestätigung der Alsa-Verbindung nach Nerja.", "Confirmación oficial de la conexión de Alsa con Nerja.", "Officiële bevestiging van de Alsa-verbinding naar Nerja.", "Officiell bekräftelse av Alsa-förbindelsen till Nerja."),
        href: sources.malagaAirport
      },
      {
        label: l("Aena · buses at Granada Airport", "Aena · Busse am Flughafen Granada", "Aena · autobuses en el aeropuerto de Granada", "Aena · bussen op Granada Airport", "Aena · bussar vid Granada flygplats"),
        text: l("The airport connection into Granada and its bus station.", "Die Flughafenverbindung nach Granada und zum Busbahnhof.", "La conexión del aeropuerto con Granada y su estación de autobuses.", "De luchthavenverbinding naar Granada en het busstation.", "Flygplatsförbindelsen in till Granada och busstationen."),
        href: sources.granadaAirport
      },
      {
        label: l("Alsa journey planner", "Alsa-Reiseplaner", "Planificador de viajes de Alsa", "Alsa-reisplanner", "Alsas reseplanerare"),
        text: l("Current lines, times, prices and tickets.", "Aktuelle Linien, Zeiten, Preise und Tickets.", "Líneas, horarios, precios y billetes actuales.", "Actuele lijnen, tijden, prijzen en tickets.", "Aktuella linjer, tider, priser och biljetter."),
        href: sources.alsa
      },
      {
        label: l("Nerja Urban Agenda 2030", "Nerja Urban Agenda 2030", "Agenda Urbana de Nerja 2030", "Nerja Urban Agenda 2030", "Nerja Urban Agenda 2030"),
        text: l("Municipal information on coach arrival, taxis and pedestrian streets.", "Kommunale Informationen zu Busankunft, Taxi und Fußgängerzonen.", "Información municipal sobre la llegada en autobús, taxis y calles peatonales.", "Gemeentelijke informatie over busaankomst, taxi's en voetgangersstraten.", "Kommunal information om bussankomst, taxi och gågator."),
        href: sources.nerjaMobility
      }
    ]
  },
  closing: {
    eyebrow: l("Before you travel", "Vor der Reise", "Antes de viajar", "Vóór de reis", "Före resan"),
    title: l("Send us your arrival time", "Schickt uns eure Ankunftszeit", "Enviadnos vuestra hora de llegada", "Stuur ons jullie aankomsttijd", "Skicka er ankomsttid"),
    body: l(
      "We will send back the approach, the route to the door and what the parking situation looks like that week.",
      "Wir schicken euch die Anfahrt zurück, den Weg zur Tür und wie die Parksituation in der Woche aussieht.",
      "Os devolveremos la aproximación, el recorrido hasta la puerta y cómo está el aparcamiento esa semana.",
      "Wij sturen de aanrijroute terug, de weg naar de deur en hoe het die week met parkeren staat.",
      "Vi skickar tillbaka infarten, vägen till dörren och hur parkeringsläget ser ut den veckan."
    ),
    locationLabel: l("Back to the Nerja guide", "Zurück zum Nerja-Guide", "Volver a la guía de Nerja", "Terug naar de Nerja-gids", "Tillbaka till Nerja-guiden"),
    areasLabel: l("Compare where to stay", "Wohnlagen vergleichen", "Comparar dónde alojarse", "Vergelijk waar je verblijft", "Jämför var man bor")
  }
};
