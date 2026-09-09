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
      value: l("Street or car park", "Straße oder Parkhaus", "Calle o parking", "Straat of parkeergarage", "Gata eller parkeringshus")
    }
  ],
  sections: [
    {
      id: "airports",
      eyebrow: l("Airports", "Flughäfen", "Aeropuertos", "Luchthavens", "Flygplatser"),
      title: l("Málaga is the simple one", "Málaga ist der einfache Weg", "Málaga es el sencillo", "Málaga is de eenvoudige", "Málaga är det enkla valet"),
      paragraphs: [
        l(
          "From Málaga airport the Alsa bus runs direct to Nerja, several times a day. That makes arriving without a car possible.",
          "Vom Flughafen Málaga fährt der Alsa-Bus direkt nach Nerja, mehrmals am Tag. Damit geht die Anreise ohne Auto.",
          "Desde el aeropuerto de Málaga el autobús de Alsa va directo a Nerja, varias veces al día. Con eso la llegada sin coche funciona.",
          "Vanaf de luchthaven Málaga rijdt de Alsa-bus rechtstreeks naar Nerja, meerdere keren per dag. Daarmee kan de aankomst zonder auto.",
          "Från Málagas flygplats går Alsa-bussen direkt till Nerja, flera gånger om dagen. Därmed fungerar ankomsten utan bil."
        ),
        l(
          "From Granada airport a bus runs to Granada bus station; from there the coach continues to Nerja.",
          "Vom Flughafen Granada fährt ein Bus zum Busbahnhof Granada; von dort geht es mit dem Fernbus weiter nach Nerja.",
          "Desde el aeropuerto de Granada hay un autobús a la estación de autobuses de Granada; desde allí se sigue en autobús de línea hasta Nerja.",
          "Vanaf de luchthaven Granada rijdt een bus naar het busstation van Granada; van daar gaat het met de streekbus verder naar Nerja.",
          "Från Granadas flygplats går en buss till Granadas busstation; därifrån går det vidare med fjärrbuss till Nerja."
        ),
        l(
          "**A cheap flight to Granada often costs the saving back on the onward journey.** Málaga plus the direct bus is the more relaxed arrival.",
          "**Ein günstiger Flug nach Granada kostet auf der Weiterfahrt oft die Ersparnis wieder.** Málaga plus Direktbus ist die entspanntere Ankunft.",
          "**Un vuelo barato a Granada suele costar el ahorro en el trayecto posterior.** Málaga más el autobús directo es la llegada más tranquila.",
          "**Een goedkope vlucht naar Granada kost de besparing op de doorreis vaak weer.** Málaga plus de directe bus is de ontspannener aankomst.",
          "**Ett billigt flyg till Granada kostar ofta tillbaka besparingen på vidareresan.** Málaga plus direktbussen är den lugnare ankomsten."
        )
      ]
    },
    {
      id: "by-car",
      eyebrow: l("By car", "Mit dem Auto", "En coche", "Met de auto", "Med bil"),
      title: l("Down the A-7, then into a compact town", "Über die A-7 und dann in einen kompakten Ort", "Por la A-7 y luego a un pueblo compacto", "Via de A-7 en dan een compacte stad in", "Via A-7 och sedan in i en kompakt stad"),
      paragraphs: [
        l(
          "From Málaga as from Granada you reach Nerja on the A-7; the motorway is the easy part.",
          "Von Málaga wie von Granada kommt ihr über die A-7 nach Nerja; die Autobahn ist der einfache Teil.",
          "Tanto desde Málaga como desde Granada llegáis a Nerja por la A-7; la autovía es la parte fácil.",
          "Vanuit Málaga én vanuit Granada kom je via de A-7 naar Nerja; de snelweg is het makkelijke deel.",
          "Från Málaga liksom från Granada kommer ni via A-7 till Nerja; motorvägen är den enkla delen."
        ),
        l(
          "Then it gets tight: pedestrian zones, one-way streets and traffic in summer. Calle Castilla Pérez 60 belongs in the sat-nav; you unload at the door, parking is a few streets on.",
          "Danach wird es eng: Fußgängerzonen, Einbahnstraßen und im Sommer Verkehr. Ins Navi gehört Calle Castilla Pérez 60; vor der Tür ladet ihr aus, geparkt wird ein paar Straßen weiter.",
          "Después se estrecha: zonas peatonales, calles de sentido único y tráfico en verano. En el navegador va calle Castilla Pérez 60; descargáis en la puerta y se aparca unas calles más allá.",
          "Daarna wordt het nauw: voetgangerszones, eenrichtingsstraten en in de zomer verkeer. In de navigatie hoort Calle Castilla Pérez 60; voor de deur laad je uit, geparkeerd wordt een paar straten verder.",
          "Sedan blir det trångt: gågator, enkelriktade gator och trafik på sommaren. I GPS:en ska Calle Castilla Pérez 60 in; vid dörren lastar ni av, parkeringen ligger några gator bort."
        ),
        l(
          "**A space right outside the door is a matter of luck in Nerja;** the parking guide shows where to go instead.",
          "**Ein Platz direkt vor der Tür ist in Nerja Glückssache;** der Park-Guide zeigt, wo ihr stattdessen hinfahrt.",
          "**Una plaza justo delante de la puerta es cuestión de suerte en Nerja;** la guía de parking dice adónde ir en su lugar.",
          "**Een plek direct voor de deur is in Nerja een kwestie van geluk;** de parkeergids laat zien waar je in plaats daarvan heen rijdt.",
          "**En plats direkt utanför dörren är en lyckträff i Nerja;** parkeringsguiden visar vart ni kör i stället."
        )
      ]
    },
    {
      id: "by-bus",
      eyebrow: l("By coach", "Mit dem Fernbus", "En autobús", "Met de bus", "Med buss"),
      title: l("The bus stops up at Avenida de Pescia", "Der Bus hält oben an der Avenida de Pescia", "El autobús para arriba, en la avenida de Pescia", "De bus stopt boven aan de Avenida de Pescia", "Bussen stannar uppe vid Avenida de Pescia"),
      paragraphs: [
        l(
          "Coaches arrive at Avenida de Pescia; the current times are in the Alsa journey planner.",
          "Fernbusse kommen an der Avenida de Pescia an; die aktuellen Zeiten stehen im Alsa-Reiseplaner.",
          "Los autobuses de línea llegan a la avenida de Pescia; los horarios actuales están en el planificador de Alsa.",
          "Streekbussen komen aan op de Avenida de Pescia; de actuele tijden staan in de Alsa-reisplanner.",
          "Fjärrbussarna kommer till Avenida de Pescia; aktuella tider finns i Alsas reseplanerare."
        ),
        l(
          "From there it is about a kilometre downhill to Calle Castilla Pérez 60, a quarter of an hour on foot.",
          "Von dort sind es rund ein Kilometer bergab zur Calle Castilla Pérez 60, zu Fuß eine Viertelstunde.",
          "Desde allí hay alrededor de un kilómetro cuesta abajo hasta la calle Castilla Pérez 60, un cuarto de hora a pie.",
          "Van daar is het ongeveer een kilometer bergaf naar Calle Castilla Pérez 60, een kwartier te voet.",
          "Därifrån är det ungefär en kilometer nedför till Calle Castilla Pérez 60, en kvart till fots."
        ),
        l(
          "**With suitcases, late in the evening or if stairs are hard: taxi.** The ride takes five minutes, and the holiday begins without hauling luggage.",
          "**Mit Koffern, spät am Abend oder wenn Treppen schwerfallen: Taxi.** Die Fahrt dauert fünf Minuten, und der Urlaub beginnt ohne Gepäckschleppen.",
          "**Con maletas, tarde por la noche o si las escaleras cuestan: taxi.** El trayecto dura cinco minutos, y las vacaciones empiezan sin arrastrar equipaje.",
          "**Met koffers, laat op de avond of als trappen zwaar vallen: taxi.** De rit duurt vijf minuten, en de vakantie begint zonder bagage slepen.",
          "**Med resväskor, sent på kvällen eller om trappor är svåra: taxi.** Resan tar fem minuter, och semestern börjar utan att släpa bagage."
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
          "Without a car the day gets simpler: no moving the car before dinner, nothing between you and a quick swim.",
          "Ohne Auto wird der Tag einfacher: kein Umparken vor dem Abendessen, nichts zwischen euch und einem schnellen Bad.",
          "Sin coche el día es más sencillo: nada de cambiar el coche de sitio antes de cenar, nada entre vosotros y un baño rápido.",
          "Zonder auto wordt de dag eenvoudiger: geen auto verplaatsen voor het avondeten, niets tussen jullie en een snelle duik.",
          "Utan bil blir dagen enklare: ingen omparkering före middagen, ingenting mellan er och ett snabbt dopp."
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
    eyebrow: l("Explore further", "Mehr erfahren", "Explorar más", "Meer ontdekken", "Utforska mer"),
    title: l("Where these details come from", "Woher diese Angaben kommen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l(
      "Connections from the airport and the bus operator; the distances from our front door from us.",
      "Verbindungen von Flughafen und Busbetreiber; die Entfernungen ab unserer Haustür von uns.",
      "Conexiones del aeropuerto y de la empresa de autobuses; las distancias desde nuestra puerta, de nosotros.",
      "Verbindingen van luchthaven en busmaatschappij; de afstanden vanaf onze voordeur van ons.",
      "Förbindelser från flygplatsen och bussbolaget; avstånden från vår dörr från oss."
    ),
    checked: l("As of August 2026", "Stand August 2026", "Actualizado en agosto de 2026", "Stand augustus 2026", "Uppdaterad augusti 2026"),
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
      "We will send you the approach, the way to the door and tell you what the parking situation looks like in your week.",
      "Wir schicken euch die Anfahrt, den Weg zur Tür und sagen euch, wie die Parksituation in eurer Woche aussieht.",
      "Os mandamos el acceso, el camino hasta la puerta y os decimos cómo está el aparcamiento en vuestra semana.",
      "We sturen je de route, de weg naar de deur en zeggen hoe de parkeersituatie er in jouw week uitziet.",
      "Vi skickar er vägen hit, vägen till dörren och säger hur parkeringsläget ser ut under er vecka."
    ),
    locationLabel: l("Back to the Nerja guide", "Zurück zum Nerja-Guide", "Volver a la guía de Nerja", "Terug naar de Nerja-gids", "Tillbaka till Nerja-guiden"),
    areasLabel: l("Compare where to stay", "Wohnlagen vergleichen", "Comparar dónde alojarse", "Vergelijk waar je verblijft", "Jämför var man bor")
  }
};
