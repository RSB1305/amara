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
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const gettingToTarifaSeo: AmaraAuthoringSeo = {
  version: '2026-08-13-getting-to-tarifa-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Getting to Tarifa & AMARA: Car, Bus, Airports and Port',
      description: 'Plan the complete journey to Tarifa and the final arrival at AMARA Family & Surf, Mar Adriático 29, by car, bus, airport or ferry.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Anreise nach Tarifa: Auto, Bus, Flughafen und Hafen',
      description: 'Plant die gesamte Anreise nach Tarifa und die letzte Etappe zu AMARA Family & Surf, Mar Adriático 29 – mit Auto, Bus, Flug oder Fähre.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Cómo llegar a Tarifa: coche, autobús, aeropuerto y puerto',
      description: 'Planificad el viaje completo a Tarifa y el último tramo hasta AMARA Family & Surf, Mar Adriático 29, en coche, autobús, avión o ferry.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Naar Tarifa en AMARA: auto, bus, luchthaven en haven',
      description: 'Plan de volledige reis naar Tarifa en het laatste deel naar AMARA Family & Surf, Mar Adriático 29, per auto, bus, vliegtuig of veerboot.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Resa till Tarifa och AMARA: bil, buss, flygplats och hamn',
      description: 'Planera hela resan till Tarifa och den sista sträckan till AMARA Family & Surf, Mar Adriático 29, med bil, buss, flyg eller färja.',
      robots: 'index, follow',
      canonical: 'auto'
    }
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
    eyebrow: l("Tarifa arrival guide", "Anreise-Guide Tarifa", "Guía de llegada a Tarifa", "Aankomstgids Tarifa", "Ankomstguide Tarifa"),
    title: l("Getting to Tarifa", "Anreise nach Tarifa", "Cómo llegar a Tarifa", "Naar Tarifa reizen", "Resa till Tarifa"),
    standfirst: l("Reaching Tarifa is only the first part of the journey. If you are staying at AMARA Family & Surf, **your real destination is Mar Adriático 29 in La Marina** — so every option below continues all the way to the apartment, not just to the town name on a map.", "Tarifa zu erreichen ist nur der erste Teil der Reise. Wenn ihr in AMARA Family & Surf wohnt, lautet **euer eigentliches Ziel Mar Adriático 29 in La Marina**. Deshalb führt jede Option hier bis zum Apartment weiter – und endet nicht einfach beim Ortsnamen auf der Karte.", "Llegar a Tarifa es solo la primera parte del viaje. Si os alojáis en AMARA Family & Surf, **el destino real es Mar Adriático 29, en La Marina**. Por eso cada opción continúa hasta el apartamento y no termina simplemente en el nombre de la localidad.", "Tarifa bereiken is maar het eerste deel van de reis. Verblijven jullie in AMARA Family & Surf, dan is **Mar Adriático 29 in La Marina de echte bestemming**. Daarom loopt elke optie hieronder door tot aan het appartement en stopt ze niet bij de plaatsnaam op de kaart.", "Att nå Tarifa är bara den första delen av resan. Om ni bor på AMARA Family & Surf är **den verkliga destinationen Mar Adriático 29 i La Marina**. Därför fortsätter varje alternativ hela vägen till lägenheten och stannar inte vid ortsnamnet på kartan."),
    note: l("A host-written planning guide. Live transport times, border requirements and ferry operations should always be checked close to travel.", "Ein persönlicher Planungs-Guide eurer Gastgeber. Aktuelle Fahrzeiten, Einreisebestimmungen und Fährbetrieb bitte immer kurz vor der Reise prüfen.", "Una guía de planificación escrita por vuestros anfitriones. Consultad siempre los horarios, los requisitos de entrada y el funcionamiento de los ferris poco antes del viaje.", "Een persoonlijke planningsgids van jullie hosts. Controleer actuele vertrektijden, toegangsregels en ferryverkeer altijd kort voor de reis.", "En personlig planeringsguide från era värdar. Kontrollera alltid aktuella avgångar, inresekrav och färjetrafik nära resdagen."),
    updated: l("Reviewed August 2026", "Geprüft im August 2026", "Revisado en agosto de 2026", "Gecontroleerd in augustus 2026", "Granskad i augusti 2026")
  },
  facts: [
    {
      label: l("AMARA address", "Adresse von AMARA", "Dirección de AMARA", "Adres van AMARA", "AMARAs adress"),
      value: l("Mar Adriático 29", "Mar Adriático 29", "Mar Adriático 29", "Mar Adriático 29", "Mar Adriático 29")
    },
    {
      label: l("Neighbourhood", "Wohnlage", "Zona", "Wijk", "Område"),
      value: l("La Marina", "La Marina", "La Marina", "La Marina", "La Marina")
    },
    {
      label: l("At the apartment", "Am Apartment", "En el apartamento", "Bij het appartement", "Vid lägenheten"),
      value: l("Reserved underground parking", "Reservierter Tiefgaragenplatz", "Garaje subterráneo reservado", "Gereserveerde ondergrondse parking", "Reserverad underjordisk parkering")
    },
    {
      label: l("Everyday convenience", "Für den Alltag", "Para el día a día", "Voor elke dag", "För vardagen"),
      value: l("Supermarket directly opposite", "Supermarkt direkt gegenüber", "Supermercado justo enfrente", "Supermarkt direct aan de overkant", "Stormarknad direkt mittemot")
    }
  ],
  sections: [
    {
      id: "by-car",
      eyebrow: l("01 · By road", "01 · Mit dem Auto", "01 · Por carretera", "01 · Over de weg", "01 · På väg"),
      title: l("By car to AMARA", "Mit dem Auto zu AMARA", "En coche hasta AMARA", "Met de auto naar AMARA", "Med bil till AMARA"),
      paragraphs: [
        l("Tarifa is reached by the N-340: the approach from Málaga runs via the western Costa del Sol and Algeciras, while the Cádiz-side approach comes through the Atlantic coast corridor. Traffic and road conditions can change the final part of either journey.", "Tarifa erreicht ihr über die N-340: Von Málaga führt die Strecke über die westliche Costa del Sol und Algeciras, von Cádiz kommt ihr durch den Küstenkorridor am Atlantik. Verkehr und Straßenlage können den letzten Abschnitt beider Routen verändern.", "A Tarifa se llega por la N-340: desde Málaga, la ruta pasa por la Costa del Sol occidental y Algeciras; desde Cádiz, recorre el corredor de la costa atlántica. El tráfico y el estado de la carretera pueden cambiar el último tramo.", "Tarifa is bereikbaar via de N-340: vanuit Málaga loopt de route via de westelijke Costa del Sol en Algeciras; vanuit Cádiz volgt ze de Atlantische kustcorridor. Verkeer en wegomstandigheden kunnen het laatste deel beïnvloeden.", "Tarifa nås via N-340: från Málaga går vägen längs västra Costa del Sol och via Algeciras; från Cádiz följer den Atlantkusten. Trafik och vägförhållanden kan påverka den sista delen."),
        l("For an overnight stay, “Tarifa” is not a precise enough destination. Set your navigation for Mar Adriático 29 before entering town, especially when you are arriving with luggage or after dark.", "Für eine Übernachtung reicht „Tarifa“ als Navigationsziel nicht aus. Gebt Mar Adriático 29 schon vor der Einfahrt in den Ort ein – besonders mit Gepäck oder bei einer Ankunft nach Einbruch der Dunkelheit.", "Para una estancia, “Tarifa” no es un destino suficientemente preciso. Introducid Mar Adriático 29 en el navegador antes de entrar en la localidad, especialmente si llegáis con equipaje o de noche.", "Voor een verblijf is “Tarifa” geen nauwkeurige eindbestemming. Stel Mar Adriático 29 in voordat jullie de stad binnenrijden, zeker met bagage of bij aankomst in het donker.", "För en vistelse är “Tarifa” inte ett tillräckligt exakt mål. Ange Mar Adriático 29 innan ni kör in i staden, särskilt med bagage eller vid ankomst efter mörkrets inbrott."),
        l("AMARA Family & Surf is in La Marina and includes a reserved underground parking space. Booked guests receive the exact building and garage access with their arrival information.", "AMARA Family & Surf liegt in La Marina und verfügt über einen reservierten Tiefgaragenstellplatz. Die genauen Hinweise zu Gebäude und Garage bekommt ihr mit euren Anreiseinformationen.", "AMARA Family & Surf está en La Marina y dispone de una plaza reservada en garaje subterráneo. Las indicaciones exactas de acceso al edificio y al garaje se envían de forma privada a los huéspedes con reserva.", "AMARA Family & Surf ligt in La Marina en heeft een gereserveerde plek in de ondergrondse garage. Exacte toegangsinformatie voor gebouw en garage ontvangen geboekte gasten privé.", "AMARA Family & Surf ligger i La Marina och har en reserverad plats i det underjordiska garaget. Exakta instruktioner till byggnad och garage skickas privat till bokade gäster.")
      ]
    },
    {
      id: "by-bus",
      eyebrow: l("02 · Public transport", "02 · Öffentliche Verkehrsmittel", "02 · Transporte público", "02 · Openbaar vervoer", "02 · Kollektivtrafik"),
      title: l("By bus to AMARA", "Mit dem Bus zu AMARA", "En autobús hasta AMARA", "Met de bus naar AMARA", "Med buss till AMARA"),
      paragraphs: [
        l("Tarifa has coach connections with nearby cities, and the Campo de Gibraltar network lists the Algeciras–Tarifa service. The Tarifa coach stop is on Calle Batalla del Salado; routes and departure times must be checked for the travel date.", "Tarifa ist per Fernbus mit mehreren Städten verbunden; im Netz des Campo de Gibraltar fährt außerdem die Verbindung Algeciras–Tarifa. Der Bus hält in Tarifa an der Calle Batalla del Salado. Route und Abfahrt solltet ihr für euer konkretes Reisedatum prüfen.", "Tarifa tiene conexiones de autobús con varias ciudades, y la red del Campo de Gibraltar incluye el servicio Algeciras–Tarifa. La parada de Tarifa está en la calle Batalla del Salado; comprobad la ruta y la salida para vuestra fecha.", "Tarifa heeft busverbindingen met verschillende steden; het netwerk van Campo de Gibraltar vermeldt ook de dienst Algeciras–Tarifa. De bus stopt in Calle Batalla del Salado. Controleer route en vertrektijd voor jullie reisdatum.", "Tarifa har bussförbindelser med flera städer, och Campo de Gibraltars nät omfattar linjen Algeciras–Tarifa. Bussen stannar på Calle Batalla del Salado. Kontrollera linje och avgång för ert resdatum."),
        l("A coach gets you to Tarifa, not to the apartment door. Leave room in the plan for the final local leg, particularly with children, boards or several bags.", "Der Bus bringt euch nach Tarifa, aber nicht bis vor die Apartmenttür. Plant die letzte Etappe bewusst ein – vor allem mit Kindern, Sportausrüstung oder mehreren Koffern.", "El autobús os deja en Tarifa, no en la puerta del apartamento. Reservad margen para el último tramo, sobre todo si viajáis con niños, tablas o varias maletas.", "De bus brengt jullie naar Tarifa, maar niet tot aan de voordeur. Plan het laatste lokale deel mee, vooral met kinderen, boards of meerdere koffers.", "Bussen tar er till Tarifa men inte till lägenhetsdörren. Planera den sista lokala sträckan, särskilt med barn, brädor eller flera väskor."),
        l("For AMARA, continue to Mar Adriático 29 in La Marina. With substantial luggage, a local taxi is the calmest last mile; if you prefer to walk, check the live route from the coach stop before departure rather than relying on a saved estimate.", "Für AMARA geht es weiter zur Mar Adriático 29 in La Marina. Mit viel Gepäck ist ein lokales Taxi die entspannteste Lösung; wenn ihr laufen möchtet, prüft die aktuelle Fußroute ab der Bushaltestelle vor der Abreise.", "Para llegar a AMARA, continuad hasta Mar Adriático 29, en La Marina. Con bastante equipaje, un taxi local es la opción más tranquila; si preferís caminar, consultad la ruta peatonal actual desde la parada antes de salir.", "Voor AMARA reizen jullie verder naar Mar Adriático 29 in La Marina. Met veel bagage is een lokale taxi het rustigst; willen jullie lopen, controleer dan vóór vertrek de actuele wandelroute vanaf de bushalte.", "Till AMARA fortsätter ni till Mar Adriático 29 i La Marina. Med mycket bagage är en lokal taxi lugnast; om ni vill gå, kontrollera den aktuella gångvägen från busshållplatsen före avresa.")
      ]
    },
    {
      id: "airports",
      eyebrow: l("03 · Flying in", "03 · Anreise per Flug", "03 · Llegada en avión", "03 · Aankomst per vliegtuig", "03 · Ankomst med flyg"),
      title: l("From the main airports to Tarifa + AMARA", "Von den wichtigsten Flughäfen nach Tarifa + AMARA", "Desde los principales aeropuertos hasta Tarifa + AMARA", "Van de belangrijkste luchthavens naar Tarifa + AMARA", "Från de viktigaste flygplatserna till Tarifa + AMARA"),
      paragraphs: [
        l("Málaga, Gibraltar and Jerez are the main practical airports for Tarifa. Málaga offers the broadest flight choice; Gibraltar is geographically closer but involves onward road transport and the relevant entry requirements; Jerez approaches Tarifa from the Cádiz side.", "Málaga, Gibraltar und Jerez sind die praktischsten Flughäfen für Tarifa. Málaga bietet meist die größte Flugauswahl; Gibraltar liegt geografisch näher, erfordert aber die Weiterfahrt über Land und die jeweils gültigen Einreiseunterlagen; Jerez führt euch von der Cádiz-Seite nach Tarifa.", "Málaga, Gibraltar y Jerez son los aeropuertos más prácticos para Tarifa. Málaga suele ofrecer más vuelos; Gibraltar está geográficamente más cerca, pero exige continuar por carretera y cumplir los requisitos de entrada vigentes; Jerez permite llegar desde el lado de Cádiz.", "Málaga, Gibraltar en Jerez zijn de praktischste luchthavens voor Tarifa. Málaga heeft meestal de ruimste vluchtkeuze; Gibraltar ligt geografisch dichterbij maar vraagt verder vervoer over de weg en geldige toegangspapieren; Jerez brengt jullie via de kant van Cádiz.", "Málaga, Gibraltar och Jerez är de mest praktiska flygplatserna för Tarifa. Málaga har oftast störst flygutbud; Gibraltar ligger geografiskt närmare men kräver fortsatt landtransport och giltiga inresehandlingar; Jerez leder in från Cádiz-sidan."),
        l("None of these airports places you directly at the apartment. Compare a rental car or pre-arranged transfer with current public-transport connections for your exact arrival time. From Málaga Airport, Aena lists coach links toward Algeciras and La Línea; from Jerez Airport, Aena lists bus links toward Jerez and Cádiz, followed by an onward connection to Tarifa.", "Keiner dieser Flughäfen bringt euch direkt zum Apartment. Vergleicht Mietwagen oder vorab gebuchten Transfer mit den aktuellen Verbindungen zu eurer Ankunftszeit. Aena nennt ab Málaga Airport Busse Richtung Algeciras und La Línea; ab Jerez Airport führen Busverbindungen zunächst nach Jerez oder Cádiz und von dort weiter nach Tarifa.", "Ninguno os deja directamente en el apartamento. Comparad coche de alquiler o traslado reservado con las conexiones públicas de vuestra hora de llegada. Aena muestra desde Málaga Airport autobuses hacia Algeciras y La Línea; desde Jerez Airport, las conexiones parten hacia Jerez o Cádiz y requieren continuar hasta Tarifa.", "Geen van deze luchthavens brengt jullie rechtstreeks naar het appartement. Vergelijk huurauto of vooraf geboekte transfer met de verbindingen op jullie aankomsttijd. Aena vermeldt vanaf Málaga Airport bussen richting Algeciras en La Línea; vanaf Jerez Airport gaat het eerst richting Jerez of Cádiz en daarna verder naar Tarifa.", "Ingen av flygplatserna tar er direkt till lägenheten. Jämför hyrbil eller förbokad transfer med förbindelserna vid er ankomsttid. Aena visar bussar från Málaga Airport mot Algeciras och La Línea; från Jerez Airport går resan först mot Jerez eller Cádiz och sedan vidare till Tarifa."),
        l("Whichever airport you choose, give the driver or navigation system the complete destination: AMARA Family & Surf, Mar Adriático 29, Tarifa. If you hire a car, the reserved underground space removes the need to search for overnight street parking on arrival.", "Nennt Fahrer oder Navigationssystem immer das vollständige Ziel: AMARA Family & Surf, Mar Adriático 29, Tarifa. Mit Mietwagen erspart euch der reservierte Tiefgaragenplatz die Suche nach einem nächtlichen Stellplatz bei der Ankunft.", "Dad siempre el destino completo al conductor o al navegador: AMARA Family & Surf, Mar Adriático 29, Tarifa. Si alquiláis coche, la plaza subterránea reservada evita tener que buscar aparcamiento nocturno al llegar.", "Geef altijd de volledige bestemming door: AMARA Family & Surf, Mar Adriático 29, Tarifa. Met een huurauto hoeven jullie dankzij de gereserveerde garageplek bij aankomst niet naar nachtelijke straatparking te zoeken.", "Ange alltid hela destinationen: AMARA Family & Surf, Mar Adriático 29, Tarifa. Med hyrbil slipper ni leta efter gatuparkering vid en sen ankomst eftersom en underjordisk plats är reserverad.")
      ]
    },
    {
      id: "port",
      eyebrow: l("04 · Across the Strait", "04 · Über die Meerenge", "04 · Cruzar el Estrecho", "04 · Over de Straat", "04 · Över sundet"),
      title: l("From Tarifa Port / Morocco to AMARA", "Vom Hafen Tarifa / aus Marokko zu AMARA", "Desde el Puerto de Tarifa / Marruecos hasta AMARA", "Vanuit de haven van Tarifa / Marokko naar AMARA", "Från Tarifas hamn / Marocko till AMARA"),
      paragraphs: [
        l("Tarifa’s passenger port serves the connection with Tangier Ville. Ferry operation is sensitive to weather and operator decisions, so the live sailing status matters more than any timetable saved in advance.", "Der Passagierhafen von Tarifa verbindet die Stadt mit Tanger Ville. Der Fährbetrieb hängt von Wetter und Entscheidungen der Reedereien ab; deshalb ist der aktuelle Betriebsstatus wichtiger als ein früher gespeicherter Fahrplan.", "El puerto de pasajeros de Tarifa conecta con Tánger Ville. El servicio de ferry depende del tiempo y de las decisiones de las navieras, así que importa más el estado en directo que un horario guardado.", "De passagiershaven van Tarifa onderhoudt de verbinding met Tanger Ville. Ferryverkeer hangt af van weer en besluiten van de rederij; de live status is daarom belangrijker dan een eerder opgeslagen dienstregeling.", "Tarifas passagerarhamn har förbindelsen till Tanger Ville. Färjetrafiken påverkas av väder och rederiernas beslut, så aktuell trafikstatus är viktigare än en sparad tidtabell."),
        l("After passport and baggage formalities, the ferry journey still needs a town-side last mile. Keep onward plans flexible and avoid arranging a tight connection immediately after the scheduled arrival.", "Nach Pass- und Gepäckkontrolle bleibt noch die letzte Etappe im Ort. Plant flexibel und legt keinen knappen Anschluss direkt hinter die vorgesehene Ankunftszeit.", "Tras los controles de pasaporte y equipaje todavía queda el último tramo por la localidad. Mantened flexibles los planes y evitad una conexión ajustada justo después de la llegada prevista.", "Na paspoort- en bagageformaliteiten volgt nog een lokaal laatste deel. Houd de verdere planning flexibel en leg geen krappe aansluiting direct na de geplande aankomst.", "Efter pass- och bagagekontroll återstår fortfarande den sista sträckan i staden. Håll fortsättningen flexibel och lägg inte in en snäv anslutning direkt efter planerad ankomst."),
        l("AMARA is at Mar Adriático 29 in La Marina, not at the port. With luggage, continue by local taxi; without heavy bags, check the current walking route before travel. Private check-in instructions remain in the booked-guest arrival message.", "AMARA liegt an der Mar Adriático 29 in La Marina, nicht am Hafen. Mit Gepäck nehmt ihr am besten ein lokales Taxi; ohne schwere Taschen könnt ihr die aktuelle Fußroute vor der Reise prüfen. Private Check-in-Hinweise bleiben in der Anreiseinformation für gebuchte Gäste.", "AMARA está en Mar Adriático 29, en La Marina, no en el puerto. Con equipaje, continuad en taxi local; sin bolsas pesadas, comprobad la ruta a pie antes del viaje. Las indicaciones privadas de entrada permanecen en el mensaje para huéspedes con reserva.", "AMARA ligt aan Mar Adriático 29 in La Marina, niet bij de haven. Neem met bagage een lokale taxi; zonder zware tassen kunnen jullie vooraf de actuele wandelroute bekijken. Privé-incheckinformatie blijft in het bericht voor geboekte gasten.", "AMARA ligger på Mar Adriático 29 i La Marina, inte vid hamnen. Med bagage fortsätter ni med lokal taxi; utan tunga väskor kan ni kontrollera gångvägen före resan. Privata incheckningsinstruktioner finns bara i ankomstmeddelandet till bokade gäster.")
      ]
    },
    {
      id: "without-car",
      eyebrow: l("05 · Daily life", "05 · Alltag", "05 · Vida diaria", "05 · Dagelijks leven", "05 · Vardag"),
      title: l("Staying at AMARA without a car", "Bei AMARA ohne Auto wohnen", "Alojarse en AMARA sin coche", "Bij AMARA verblijven zonder auto", "Bo på AMARA utan bil"),
      paragraphs: [
        l("A stay in Tarifa town can work without using a car every day. The Old Town, ordinary services and much of the urban routine are concentrated within the town rather than spread across separate resorts.", "Ein Aufenthalt im Ort Tarifa kann ohne tägliche Autofahrten gut funktionieren. Altstadt, normale Versorgung und vieles vom städtischen Alltag liegen kompakt beieinander und verteilen sich nicht auf voneinander getrennte Ferienorte.", "Una estancia en el núcleo urbano de Tarifa puede funcionar sin usar el coche todos los días. El casco antiguo, los servicios cotidianos y buena parte de la rutina urbana están concentrados en la localidad.", "Een verblijf in Tarifa-stad kan zonder dagelijks autogebruik goed werken. De oude stad, gewone voorzieningen en veel van het stadsleven liggen compact bij elkaar.", "En vistelse i Tarifa stad kan fungera utan daglig bilkörning. Gamla stan, vardagsservice och mycket av stadslivet ligger samlat i stället för utspritt mellan separata semesterorter."),
        l("The trade-off is choice beyond the urban area: western beaches, changing wind conditions and regional days out are easier when you can adapt your transport instead of depending on one fixed connection.", "Weniger spontan wird es außerhalb des Ortes: Westliche Strände, wechselnde Windbedingungen und Ausflüge lassen sich leichter nutzen, wenn ihr das Verkehrsmittel flexibel wählen könnt.", "La contrapartida aparece fuera del núcleo: las playas occidentales, el viento cambiante y las excursiones resultan más fáciles cuando podéis adaptar el transporte al día.", "Buiten de stad wordt de keuze kleiner: westelijke stranden, wisselende wind en uitstappen zijn eenvoudiger wanneer jullie het vervoer per dag kunnen aanpassen.", "Begränsningen märks utanför staden: västkustens stränder, skiftande vind och utflykter blir enklare när ni kan anpassa transporten efter dagen."),
        l("From AMARA in La Marina, the Old Town is approximately 10–15 minutes on foot and the supermarket is directly opposite. That makes food shopping and evenings in town straightforward; you can then arrange a taxi, rental day or current seasonal service for selected trips farther west.", "Von AMARA in La Marina erreicht ihr die Altstadt in ungefähr 10–15 Minuten zu Fuß; der Supermarkt liegt direkt gegenüber. Einkaufen und Abende im Ort sind damit unkompliziert. Für einzelne Ziele weiter westlich könnt ihr Taxi, Tagesmietwagen oder einen aktuell angebotenen Saisonbus wählen.", "Desde AMARA, en La Marina, el casco antiguo queda a unos 10–15 minutos a pie y el supermercado está justo enfrente. Las compras y las noches en el centro son sencillas; para alguna salida al oeste podéis elegir taxi, alquiler por un día o un servicio estacional vigente.", "Vanaf AMARA in La Marina is de oude stad ongeveer 10–15 minuten lopen en de supermarkt ligt direct aan de overkant. Boodschappen en avonden in de stad zijn daardoor eenvoudig; voor een dag verder westwaarts kunnen jullie taxi, daghuur of een actuele seizoensdienst kiezen.", "Från AMARA i La Marina är det cirka 10–15 minuters promenad till Gamla stan och stormarknaden ligger direkt mittemot. Inköp och kvällar i stan är enkla; för enstaka resor västerut kan ni välja taxi, hyrbil över dagen eller en aktuell säsongslinje.")
      ]
    },
    {
      id: "western-coast",
      eyebrow: l("06 · Beach days", "06 · Strandtage", "06 · Días de playa", "06 · Stranddagen", "06 · Stranddagar"),
      title: l("From AMARA to beaches / western coast", "Von AMARA zu Stränden / an die Westküste", "Desde AMARA a las playas / costa occidental", "Van AMARA naar stranden / westkust", "Från AMARA till stränder / västkusten"),
      paragraphs: [
        l("Tarifa’s beach landscape extends well beyond the town toward Valdevaqueros and the wider western coast. The best destination can change with wind, activity, season and local access conditions.", "Tarifas Strandlandschaft reicht weit über den Ort hinaus Richtung Valdevaqueros und an die offene Westküste. Welcher Strand passt, kann sich mit Wind, Aktivität, Saison und aktuellen Zufahrtsbedingungen ändern.", "Las playas de Tarifa se extienden mucho más allá del núcleo urbano hacia Valdevaqueros y la costa occidental. El mejor destino puede cambiar con el viento, la actividad, la temporada y las condiciones de acceso.", "Het strandlandschap van Tarifa loopt ver voorbij de stad richting Valdevaqueros en de open westkust. De beste bestemming kan wisselen met wind, activiteit, seizoen en lokale toegang.", "Tarifas stränder fortsätter långt förbi staden mot Valdevaqueros och den öppna västkusten. Bästa destinationen kan skifta med vind, aktivitet, säsong och aktuella tillträdesförhållanden."),
        l("That makes a beach day different from a simple trip to “the nearest beach”. Check the day’s conditions and any current access or parking information before setting out, and do not build the plan around an old beach-bus timetable.", "Ein Strandtag ist deshalb mehr als die Fahrt zum „nächsten Strand“. Prüft Bedingungen sowie aktuelle Zufahrts- und Parkhinweise und plant nicht mit einem veralteten Strandbus-Fahrplan.", "Por eso un día de playa no consiste simplemente en ir a “la más cercana”. Consultad las condiciones y cualquier aviso actual de acceso o aparcamiento, y no organicéis el día con un horario antiguo del autobús de playa.", "Een stranddag is dus niet alleen een rit naar “het dichtstbijzijnde strand”. Controleer de omstandigheden en actuele toegang of parking, en baseer het plan niet op een oude strandbusregeling.", "En stranddag är därför mer än en resa till “närmaste strand”. Kontrollera dagens förhållanden och aktuell tillfart eller parkering, och bygg inte planen på en gammal strandbusstidtabell."),
        l("AMARA has practical westbound car access from La Marina, so you can leave town without first crossing the Old Town. If you are travelling without a car, decide on the beach first and then check the current transport option for that specific day.", "Von AMARA in La Marina gelangt ihr mit dem Auto praktisch Richtung Westen, ohne zuerst die Altstadt durchqueren zu müssen. Ohne Auto wählt ihr am besten zuerst den Strand und prüft danach die aktuelle Verbindung genau für diesen Tag.", "Desde La Marina, AMARA tiene una salida práctica en coche hacia el oeste sin atravesar primero el casco antiguo. Sin coche, elegid primero la playa y después comprobad el transporte disponible para ese día concreto.", "AMARA heeft vanuit La Marina een praktische autoroute naar het westen zonder eerst door de oude stad te rijden. Zonder auto kiezen jullie het best eerst het strand en controleren daarna het vervoer voor die specifieke dag.", "AMARA har praktisk bilväg västerut från La Marina utan att ni först behöver köra genom Gamla stan. Utan bil väljer ni först strand och kontrollerar sedan transporten för just den dagen.")
      ]
    },
    {
      id: "parking-mobility",
      eyebrow: l("07 · Once you are here", "07 · Vor Ort", "07 · Ya en Tarifa", "07 · Eenmaal ter plaatse", "07 · På plats"),
      title: l("Parking & everyday mobility from AMARA", "Parken & tägliche Wege ab AMARA", "Aparcamiento y movilidad diaria desde AMARA", "Parkeren & dagelijkse mobiliteit vanaf AMARA", "Parkering & vardagsresor från AMARA"),
      paragraphs: [
        l("Parking conditions vary across Tarifa and along the coast, especially by season and time of day. A space at the apartment does not guarantee a space at a beach, restaurant or event.", "Die Parksituation in Tarifa und entlang der Küste verändert sich mit Saison und Tageszeit. Ein Stellplatz am Apartment bedeutet keine Stellplatzgarantie am Strand, Restaurant oder bei einer Veranstaltung.", "El aparcamiento cambia en Tarifa y en la costa según la temporada y la hora. Tener plaza en el apartamento no garantiza encontrarla en una playa, un restaurante o un evento.", "Parkeren in Tarifa en langs de kust verandert met seizoen en tijdstip. Een plek bij het appartement garandeert geen plek bij een strand, restaurant of evenement.", "Parkeringsläget i Tarifa och längs kusten varierar med säsong och tid på dagen. En plats vid lägenheten garanterar inte en plats vid en strand, restaurang eller ett evenemang."),
        l("The simplest routine is often to leave the car parked for town evenings and use it selectively for western beaches, nature and regional outings. This avoids turning every short errand into a parking decision.", "Oft ist es am entspanntesten, das Auto für Abende im Ort stehen zu lassen und nur für westliche Strände, Natur und Ausflüge zu nutzen. So wird nicht jeder kurze Weg zur Parkplatzfrage.", "Una rutina cómoda suele ser dejar el coche aparcado para las noches en el pueblo y usarlo solo para playas occidentales, naturaleza y excursiones. Así cada recado corto no se convierte en una búsqueda de aparcamiento.", "Vaak is het prettigst om de auto voor avonden in de stad te laten staan en hem alleen te gebruiken voor westelijke stranden, natuur en uitstappen. Zo wordt niet elk kort ritje een parkeervraag.", "Ofta är det enklast att låta bilen stå under kvällar i staden och använda den selektivt för västkust, natur och utflykter. Då blir inte varje kort ärende en parkeringsfråga."),
        l("At AMARA Family & Surf, the reserved underground parking and the supermarket opposite support exactly that rhythm: walk for the Old Town and daily essentials, then use the car when the destination genuinely lies beyond the town.", "Bei AMARA Family & Surf unterstützen der reservierte Tiefgaragenplatz und der Supermarkt gegenüber genau diesen Rhythmus: zu Fuß in die Altstadt und zum täglichen Einkauf, mit dem Auto nur dann, wenn das Ziel wirklich außerhalb des Ortes liegt.", "En AMARA Family & Surf, el garaje subterráneo reservado y el supermercado de enfrente facilitan ese ritmo: a pie para el casco antiguo y lo cotidiano; en coche cuando el destino queda realmente fuera del núcleo.", "Bij AMARA Family & Surf ondersteunen de gereserveerde ondergrondse plek en de supermarkt aan de overkant precies dat ritme: lopen voor de oude stad en dagelijkse boodschappen, rijden wanneer de bestemming echt buiten de stad ligt.", "På AMARA Family & Surf stödjer den reserverade underjordiska platsen och stormarknaden mittemot just den rytmen: gå till Gamla stan och vardagsärenden, kör när målet verkligen ligger utanför staden.")
      ]
    }
  ],
  sources: {
    eyebrow: l("Check before travelling", "Vor der Reise prüfen", "Comprobad antes de viajar", "Controleer voor vertrek", "Kontrollera före resan"),
    title: l("Official transport information", "Offizielle Verkehrsinformationen", "Información oficial de transporte", "Officiële reisinformatie", "Officiell reseinformation"),
    intro: l("Routes, border arrangements, ferry operations and seasonal services can change. These official sources are the right place for live checks close to departure.", "Routen, Grenzregelungen, Fährbetrieb und Saisonangebote können sich ändern. Prüft diese offiziellen Quellen kurz vor der Abreise.", "Las rutas, los controles fronterizos, los ferris y los servicios estacionales pueden cambiar. Consultad estas fuentes oficiales poco antes de salir.", "Routes, grensregels, ferryverkeer en seizoensdiensten kunnen wijzigen. Controleer deze officiële bronnen kort voor vertrek.", "Linjer, gränsregler, färjetrafik och säsongstjänster kan ändras. Kontrollera dessa officiella källor nära avresan."),
    checked: l("Sources reviewed in August 2026.", "Quellen geprüft im August 2026.", "Fuentes revisadas en agosto de 2026.", "Bronnen gecontroleerd in augustus 2026.", "Källor granskade i augusti 2026."),
    links: [
      {
        label: l("Tarifa Tourism · How to arrive", "Tourismus Tarifa · Anreise", "Turismo de Tarifa · Cómo llegar", "Toerisme Tarifa · Bereikbaarheid", "Tarifas turistbyrå · Resa hit"),
        text: l("Road, airport, rail, ferry and coach overview for Tarifa.", "Überblick zu Straße, Flughafen, Bahn, Fähre und Bus.", "Resumen de carretera, aeropuertos, tren, ferry y autobús.", "Overzicht van weg, luchthavens, trein, ferry en bus.", "Översikt över väg, flygplatser, tåg, färja och buss."),
        href: sharedSources.tarifaTourism
      },
      {
        label: l("Aena · Málaga Airport buses", "Aena · Busse ab Flughafen Málaga", "Aena · Autobuses desde Málaga Airport", "Aena · Bussen vanaf Málaga Airport", "Aena · Bussar från Málaga Airport"),
        text: l("Current intercity and long-distance connections from Málaga Airport.", "Aktuelle Überland- und Fernbusverbindungen ab Málaga Airport.", "Conexiones interurbanas y de largo recorrido actuales.", "Actuele intercity- en langeafstandsverbindingen.", "Aktuella regionala och långväga förbindelser."),
        href: sharedSources.malagaAirport
      },
      {
        label: l("Aena · Jerez Airport buses", "Aena · Busse ab Flughafen Jerez", "Aena · Autobuses desde Jerez Airport", "Aena · Bussen vanaf Jerez Airport", "Aena · Bussar från Jerez Airport"),
        text: l("Current bus connections from Jerez Airport toward Jerez and Cádiz.", "Aktuelle Busverbindungen ab Jerez Airport Richtung Jerez und Cádiz.", "Conexiones actuales hacia Jerez y Cádiz.", "Actuele verbindingen richting Jerez en Cádiz.", "Aktuella förbindelser mot Jerez och Cádiz."),
        href: sharedSources.jerezAirport
      },
      {
        label: l("Campo de Gibraltar Transport Consortium", "Verkehrsverbund Campo de Gibraltar", "Consorcio de Transporte del Campo de Gibraltar", "Vervoersconsortium Campo de Gibraltar", "Campo de Gibraltars transportkonsortium"),
        text: l("Live regional routes and schedules, including Algeciras–Tarifa.", "Aktuelle regionale Linien und Fahrzeiten, darunter Algeciras–Tarifa.", "Líneas y horarios regionales actuales, incluida Algeciras–Tarifa.", "Actuele regionale routes en tijden, waaronder Algeciras–Tarifa.", "Aktuella regionala linjer och tider, bland annat Algeciras–Tarifa."),
        href: sharedSources.campoGibraltar
      },
      {
        label: l("Transportes Generales Comes", "Transportes Generales Comes", "Transportes Generales Comes", "Transportes Generales Comes", "Transportes Generales Comes"),
        text: l("Coach search, tickets and current Tarifa stop information.", "Bussuche, Fahrkarten und aktuelle Hinweise zur Haltestelle Tarifa.", "Buscador, billetes e información actual de la parada de Tarifa.", "Buszoeker, tickets en actuele informatie over de halte in Tarifa.", "Bussökning, biljetter och aktuell information om hållplatsen i Tarifa."),
        href: sharedSources.comes
      },
      {
        label: l("Port of Algeciras Bay · Tarifa passenger terminal", "Hafen der Bucht von Algeciras · Passagierterminal Tarifa", "Puerto Bahía de Algeciras · Terminal de pasajeros de Tarifa", "Haven van de Baai van Algeciras · Passagiersterminal Tarifa", "Algecirasbuktens hamn · Passagerarterminalen i Tarifa"),
        text: l("Official port information for the Tarifa passenger terminal.", "Offizielle Hafeninformationen zum Passagierterminal in Tarifa.", "Información portuaria oficial sobre la terminal de pasajeros de Tarifa.", "Officiële haveninformatie over de passagiersterminal in Tarifa.", "Officiell hamninformation om passagerarterminalen i Tarifa."),
        href: sharedSources.portMap
      }
    ]
  },
  closing: {
    eyebrow: l("Continue planning", "Weiter planen", "Seguir planificando", "Verder plannen", "Fortsätt planera"),
    title: l("Choose the journey around the stay you want", "Wählt die Anreise passend zu eurem Aufenthalt", "Elegid el trayecto según la estancia que queréis", "Kies de reis die past bij jullie verblijf", "Välj resan efter vistelsen ni vill ha"),
    body: l("A town-first break and a week built around western beaches do not need the same transport plan. Continue with the Tarifa location and area guides before deciding whether the car should be central, occasional or unnecessary.", "Für eine Auszeit mit viel Altstadt braucht ihr einen anderen Verkehrsplan als für eine Woche an den westlichen Stränden. Lest im Lage- und Wohnlagen-Guide weiter, bevor ihr entscheidet, ob das Auto zentral, gelegentlich oder gar nicht nötig ist.", "Una escapada centrada en el pueblo y una semana de playas occidentales no necesitan el mismo plan de transporte. Seguid con las guías de ubicación y zonas antes de decidir si el coche será esencial, ocasional o innecesario.", "Een stadsgerichte korte vakantie en een week rond de westelijke stranden vragen niet hetzelfde vervoersplan. Lees verder in de locatie- en gebiedsgids voordat jullie beslissen of een auto centraal, af en toe of helemaal niet nodig is.", "En stadsinriktad kortsemester och en vecka kring västkustens stränder behöver inte samma transportplan. Fortsätt med läges- och områdesguiderna innan ni avgör om bilen ska vara central, tillfällig eller onödig."),
    locationLabel: l("Back to the Tarifa location guide", "Zurück zum Tarifa Lage-Guide", "Volver a la guía de ubicación de Tarifa", "Terug naar de locatiegids van Tarifa", "Tillbaka till Tarifas lägesguide"),
    areasLabel: l("Compare where to stay in Tarifa", "Wohnlagen in Tarifa vergleichen", "Comparar dónde alojarse en Tarifa", "Vergelijk waar te verblijven in Tarifa", "Jämför var man ska bo i Tarifa")
  }
};
