import type { AmaraAuthoringSeo } from '../types/seo';

export const arrivalGuideSeo: AmaraAuthoringSeo = {
  version: "2026-03-21-v3.1-arrival-utility",
  pageType: "A",
  languages: {
    en: { title: "Frigiliana Arrival & Parking Guide", description: "How to reach the village and where to park.", robots: "noindex, follow", canonical: "auto" },
    de: { title: "Frigiliana Anreise- & Parkguide", description: "So erreicht ihr das Dorf und wisst, wo ihr am besten parkt.", robots: "noindex, follow", canonical: "auto" },
    es: { title: "Guía de llegada y aparcamiento en Frigiliana", description: "Cómo llegar al pueblo y dónde os conviene aparcar.", robots: "noindex, follow", canonical: "auto" },
    nl: { title: "Frigiliana aankomst- en parkeergids", description: "Hoe jullie het dorp bereiken en waar jullie het beste parkeren.", robots: "noindex, follow", canonical: "auto" },
    sv: { title: "Frigiliana ankomst- och parkeringsguide", description: "Hur ni tar er till byn och var det är bäst att parkera.", robots: "noindex, follow", canonical: "auto" }
  },
  ogImage: "/images/arrival-og.jpg"
};

export const arrivalGuideCopy = {
  nav: {
    brand: { en: "Frigiliana", de: "Frigiliana", es: "Frigiliana", nl: "Frigiliana", sv: "Frigiliana" },
    links: [
      { token: "location_frigiliana", label: { en: "Frigiliana", de: "Frigiliana", es: "Frigiliana", nl: "Frigiliana", sv: "Frigiliana" } },
      { token: "location_nerja", label: { en: "Nerja", de: "Nerja", es: "Nerja", nl: "Nerja", sv: "Nerja" } },
      { token: "explore_hub", label: { en: "Experiences", de: "Erlebnisse", es: "Experiencias", nl: "Ervaringen", sv: "Upplevelser" } }
    ]
  },
  header: {
    eyebrow: {
      en: 'Location guide · Frigiliana',
      de: 'Ortsguide · Frigiliana',
      es: 'Guía de entorno · Frigiliana',
      nl: 'Locatiegids · Frigiliana',
      sv: 'Platsguide · Frigiliana'
    },
    title: { en: "Guest Arrival Guide", de: "Anreiseguide für Gäste", es: "Guía de llegada para huéspedes", nl: "Aankomstgids voor gasten", sv: "Ankomstguide för gäster" },
    subtitle: {
      en: "Essential information for navigating the vertical streets of the Mudejar quarter.",
      de: "Alles Wichtige, damit ihr euch in den steilen Gassen des Mudejar-Viertels gut zurechtfindet.",
      es: "La información esencial para moveros bien por las calles empinadas del barrio mudéjar.",
      nl: "De belangrijkste informatie om vlot door de steile straten van de Mudejar-wijk te komen.",
      sv: "Det viktigaste för att ni enkelt ska hitta genom de branta gatorna i Mudejar-kvarteret."
    },
    backLinkWord: {
      en: 'Back',
      de: 'Zurück',
      es: 'Volver',
      nl: 'Terug',
      sv: 'Tillbaka'
    }
  },
  content: {
    parking: {
      title: { en: "Arriving at La AMARA Frigiliana", de: "Ankunft bei La AMARA in Frigiliana", es: "Llegar a La AMARA en Frigiliana", nl: "Aankomen bij La AMARA in Frigiliana", sv: "Att komma fram till La AMARA i Frigiliana" },
      text: {
        en: "La AMARA is located in the historic center of Frigiliana. Because the streets in the old village are narrow and vehicle access is limited, the easiest arrival is usually to stop a little below the house and continue on foot.",
        de: "La AMARA liegt im historischen Zentrum von Frigiliana. Weil die Gassen im alten Dorf eng sind und die Zufahrt für Fahrzeuge eingeschränkt ist, ist es meist am einfachsten, etwas unterhalb des Hauses anzuhalten und den Rest zu Fuß weiterzugehen.",
        es: "La AMARA está en el centro histórico de Frigiliana. Como las calles del casco antiguo son estrechas y el acceso en coche es limitado, lo más fácil suele ser parar un poco más abajo de la casa y continuar a pie.",
        nl: "La AMARA ligt in het historische centrum van Frigiliana. Omdat de straten in het oude dorp smal zijn en auto's er maar beperkt kunnen komen, is het meestal het makkelijkst om iets lager dan het huis te stoppen en daarna te voet verder te gaan.",
        sv: "La AMARA ligger i Frigilianas historiska centrum. Eftersom gatorna i gamla byn är smala och biltrafiken är begränsad är det oftast enklast att stanna en bit nedanför huset och gå sista delen till fots."
      }
    },
    walkingAccess: {
      title: { en: "Walking & Access", de: "Zu Fuß & Zugang", es: "A pie y acceso", nl: "Te voet & toegang", sv: "Till fots & framkomst" },
      text: {
        en: "La AMARA is located in the historic center, so a short walk is part of the arrival experience in most cases. Please expect cobbled streets, inclines, and depending on your route, some steps. Comfortable shoes are recommended, especially if you arrive with luggage.",
        de: "La AMARA liegt im historischen Zentrum, deshalb gehört bei den meisten Anreisen ein kurzer Fußweg dazu. Rechnet mit Kopfsteinpflaster, Steigungen und je nach Weg auch mit einigen Stufen. Bequeme Schuhe sind besonders sinnvoll, vor allem wenn ihr mit Gepäck ankommt.",
        es: "La AMARA está en el centro histórico, así que en la mayoría de los casos la llegada incluye un pequeño paseo. Contad con calles empedradas, cuestas y, según el camino, algunos escalones. Os recomendamos llevar calzado cómodo, sobre todo si llegáis con equipaje.",
        nl: "La AMARA ligt in het historische centrum, dus in de meeste gevallen hoort een korte wandeling bij de aankomst. Reken op kinderkopjes, hellingen en afhankelijk van de route ook op een paar traptreden. Comfortabele schoenen zijn aan te raden, vooral als jullie met bagage aankomen.",
        sv: "La AMARA ligger i den historiska delen av byn, så i de flesta fall ingår en kort promenad vid ankomst. Räkna med kullerstensgator, backar och beroende på vägvalet också några trappsteg. Bekväma skor rekommenderas, särskilt om ni kommer med bagage."
      }
    },
    arrivalTip: {
      title: { en: "Arrival by Car or Taxi", de: "Anreise mit Auto oder Taxi", es: "Llegada en coche o taxi", nl: "Aankomst met auto of taxi", sv: "Ankomst med bil eller taxi" },
      text: {
        en: "For most guests, the easiest arrival point is Avenida Carlos Cano 42. From there, it is approximately 4 minutes on foot (150 m) uphill to La AMARA.\n\nTo reach the house, take the staircase on the left-hand side of the urbanization La Fuente at Avenida Carlos Cano 42. Pass the well-known La Fuente Vieja fountain and continue for around 15 meters. At Bar El Señor, turn right and continue uphill. After approximately 40 more meters, you will see La AMARA on the right-hand side - a green door with small windows and a black keypad on the left side of the entrance.",
        de: "Für die meisten Gäste ist Avenida Carlos Cano 42 der einfachste Ankunftspunkt. Von dort sind es zu Fuß etwa 4 Minuten (150 m) bergauf bis zu La AMARA.\n\nUm das Haus zu erreichen, nehmt an der Urbanisation La Fuente auf der linken Seite von Avenida Carlos Cano 42 die Treppe. Geht am bekannten Brunnen La Fuente Vieja vorbei und noch etwa 15 Meter weiter. Am Bar El Señor biegt ihr rechts ab und geht weiter bergauf. Nach weiteren rund 40 Metern seht ihr La AMARA auf der rechten Seite - eine grüne Tür mit kleinen Fenstern und einem schwarzen Tastenfeld links neben dem Eingang.",
        es: "Para la mayoría de los huéspedes, el punto de llegada más sencillo es Avenida Carlos Cano 42. Desde allí hay unos 4 minutos a pie (150 m) cuesta arriba hasta La AMARA.\n\nPara llegar a la casa, tomad la escalera que está a la izquierda de la urbanización La Fuente en Avenida Carlos Cano 42. Pasad junto a la conocida fuente La Fuente Vieja y seguid unos 15 metros más. En Bar El Señor, girad a la derecha y continuad cuesta arriba. Unos 40 metros después veréis La AMARA a mano derecha: una puerta verde con pequeñas ventanas y un teclado negro a la izquierda de la entrada.",
        nl: "Voor de meeste gasten is Avenida Carlos Cano 42 het makkelijkste aankomstpunt. Vanaf daar is het ongeveer 4 minuten lopen (150 m) bergop naar La AMARA.\n\nOm het huis te bereiken, nemen jullie de trap aan de linkerkant van urbanisatie La Fuente bij Avenida Carlos Cano 42. Loop langs de bekende fontein La Fuente Vieja en ga nog ongeveer 15 meter verder. Sla bij Bar El Señor rechtsaf en loop verder omhoog. Na nog ongeveer 40 meter zien jullie La AMARA aan de rechterkant - een groene deur met kleine ramen en een zwart toetsenpaneel links van de ingang.",
        sv: "För de flesta gäster är Avenida Carlos Cano 42 den enklaste platsen att komma fram till. Därifrån är det cirka 4 minuters promenad (150 m) uppför till La AMARA.\n\nFör att komma till huset tar ni trappan på vänster sida om urbanisationen La Fuente vid Avenida Carlos Cano 42. Gå förbi den välkända fontänen La Fuente Vieja och fortsätt cirka 15 meter till. Vid Bar El Señor svänger ni höger och fortsätter uppför. Efter ytterligare ungefär 40 meter ser ni La AMARA på höger sida - en grön dörr med små fönster och en svart kodpanel till vänster om ingångsdörren."
      },
      taxiNote: {
        en: "If you arrive by taxi from Malaga, this is usually the best and simplest drop-off point, especially for drivers who do not know the village well. In some cases, when the village is quieter and the driver knows Frigiliana very well, they may decide to drive closer to the house. This decision should always be left to the taxi driver.",
        de: "Wenn ihr mit dem Taxi aus Malaga ankommt, ist das in der Regel der beste und einfachste Ausstiegspunkt, besonders für Fahrer, die das Dorf nicht gut kennen. In manchen Fällen - wenn es im Dorf ruhiger ist und der Fahrer Frigiliana sehr gut kennt - kann er entscheiden, näher ans Haus zu fahren. Diese Entscheidung sollte immer der Taxifahrer treffen.",
        es: "Si llegáis en taxi desde Málaga, este suele ser el punto de parada más sencillo y recomendable, sobre todo para conductores que no conocen bien el pueblo. A veces, cuando hay menos movimiento en el pueblo y el conductor conoce muy bien Frigiliana, puede decidir acercaros más a la casa. Esa decisión debe dejarse siempre en manos del taxista.",
        nl: "Als jullie met een taxi uit Malaga aankomen, is dit meestal het beste en eenvoudigste afzetpunt, vooral voor chauffeurs die het dorp niet goed kennen. Soms, als het rustiger is in het dorp en de chauffeur Frigiliana erg goed kent, kan die besluiten om dichter bij het huis te rijden. Laat die beslissing altijd aan de taxichauffeur over.",
        sv: "Om ni kommer med taxi från Málaga är detta vanligtvis den bästa och enklaste avlämningsplatsen, särskilt för förare som inte kan byn så väl. I vissa fall, när det är lugnare i byn och föraren kan Frigiliana mycket väl, kan hen välja att köra närmare huset. Det beslutet bör alltid ligga hos taxiföraren."
      }
    },
    arrivalByBus: {
      title: { en: "Arrival by Bus", de: "Anreise mit dem Bus", es: "Llegada en autobús", nl: "Aankomst met de bus", sv: "Ankomst med buss" },
      text: {
        en: "If you arrive by bus, the bus stops at Parada de Autobús - C. Real, Frigiliana.\n\nFrom there, you can choose between two walking routes to reach La AMARA:\n\nShorter route - via Calle Real\nApprox. 8 minutes (550 m)\nThis is the shorter route through the old village. It is slightly uphill and follows cobbled streets, but it does not include steps.\n\nLonger route - via the main road\nApprox. 12 minutes (750 m)\nThis route is mostly flat until La Fuente. At the end, there are several steps and a short final ascent of around 25 meters elevation.",
        de: "Wenn ihr mit dem Bus ankommt, steigt ihr an der Haltestelle Parada de Autobús - C. Real, Frigiliana aus.\n\nVon dort habt ihr zwei Fußwege zur Auswahl, um La AMARA zu erreichen:\n\nKürzerer Weg - über Calle Real\nCa. 8 Minuten (550 m)\nDas ist der kürzere Weg durch das alte Dorf. Er geht leicht bergauf über Kopfsteinpflaster, hat aber keine Stufen.\n\nLängerer Weg - über die Hauptstraße\nCa. 12 Minuten (750 m)\nDieser Weg ist bis La Fuente größtenteils flach. Am Ende gibt es mehrere Stufen und einen kurzen letzten Anstieg von etwa 25 Höhenmetern.",
        es: "Si llegáis en autobús, la parada es Parada de Autobús - C. Real, Frigiliana.\n\nDesde allí podéis elegir entre dos caminos a pie para llegar a La AMARA:\n\nCamino más corto - por Calle Real\nAprox. 8 minutos (550 m)\nEs el recorrido más corto por el casco antiguo. Tiene una ligera subida y va por calles empedradas, pero no incluye escalones.\n\nCamino más largo - por la carretera principal\nAprox. 12 minutos (750 m)\nEste recorrido es casi llano hasta La Fuente. Al final hay varios escalones y una última subida corta de unos 25 metros de desnivel.",
        nl: "Als jullie met de bus aankomen, stappen jullie uit bij Parada de Autobús - C. Real, Frigiliana.\n\nVanaf daar kunnen jullie kiezen uit twee looproutes naar La AMARA:\n\nKortere weg - via Calle Real\nOngeveer 8 minuten (550 m)\nDit is de kortere route door het oude dorp. De weg loopt licht omhoog over kinderkopjes, maar er zijn geen trappen.\n\nLangere weg - via de hoofdweg\nOngeveer 12 minuten (750 m)\nDeze route is grotendeels vlak tot aan La Fuente. Aan het einde zijn er meerdere treden en een laatste korte klim van ongeveer 25 hoogtemeters.",
        sv: "Om ni kommer med buss stannar den vid Parada de Autobús - C. Real, Frigiliana.\n\nDärifrån kan ni välja mellan två gångvägar för att komma till La AMARA:\n\nKortare väg - via Calle Real\nCa 8 minuter (550 m)\nDetta är den kortare vägen genom gamla byn. Den lutar svagt uppåt och går över kullersten, men innehåller inga trappsteg.\n\nLängre väg - via huvudvägen\nCa 12 minuter (750 m)\nDen här vägen är mestadels plan fram till La Fuente. Mot slutet finns flera trappsteg och en kort sista stigning på omkring 25 höjdmeter."
      }
    },
    arrivalSection: {
      title: {
        en: "The Arrival",
        de: "Die Ankunft",
        es: "La llegada",
        nl: "De aankomst",
        sv: "Ankomsten"
      },
      busStep: {
        en: "Two walking routes are possible from Parada de Autobús - C. Real, depending on whether you prefer the shorter village route or the flatter approach via the main road.",
        de: "Ab Parada de Autobús - C. Real habt ihr zwei Fußwege zur Auswahl - je nachdem, ob ihr lieber den kürzeren Weg durchs Dorf oder den flacheren Weg über die Hauptstraße nehmt.",
        es: "Desde Parada de Autobús - C. Real tenéis dos caminos posibles, según prefiráis el recorrido más corto por el pueblo o la opción más llana por la carretera principal.",
        nl: "Vanaf Parada de Autobús - C. Real zijn er twee looproutes mogelijk, afhankelijk van of jullie liever de kortere dorpsroute of de vlakkere route via de hoofdweg nemen.",
        sv: "Från Parada de Autobús - C. Real finns två möjliga gångvägar, beroende på om ni föredrar den kortare vägen genom byn eller den flackare vägen via huvudvägen."
      }
    },
    luggageAdvice: {
      title: { en: "Luggage Advice", de: "Gepäck", es: "Equipaje", nl: "Bagage", sv: "Bagage" },
      text: {
        en: "If possible, we recommend travelling light and using manageable luggage. In the historic center, even short walking distances can feel more demanding because of the slope and uneven ground.",
        de: "Wenn möglich, reist mit leichtem und gut handhabbarem Gepäck. Im historischen Zentrum können selbst kurze Fußwege durch die Steigung und den unebenen Boden anstrengender wirken.",
        es: "Si podéis, os recomendamos viajar ligeros y con equipaje fácil de manejar. En el centro histórico, incluso los trayectos cortos a pie pueden sentirse más exigentes por la pendiente y el suelo irregular.",
        nl: "Als het kan, raden we aan om licht te reizen en bagage mee te nemen die makkelijk te hanteren is. In het historische centrum kunnen zelfs korte stukken lopen zwaarder aanvoelen door de helling en de ongelijke ondergrond.",
        sv: "Om det går rekommenderar vi att ni reser lätt och med bagage som är enkel att hantera. I den historiska delen kan till och med korta promenader kännas mer krävande på grund av lutningen och den ojämna marken."
      }
    },
    faq: {
      title: { en: "Logistics FAQ", de: "FAQ zur Anreise", es: "FAQ de la llegada", nl: "FAQ over de aankomst", sv: "FAQ om ankomsten" },
      items: {
        en: [
          { question: "Can I drive directly into the old town?", answer: "Usually not in a practical way. Most visitors find it easier to park near the entrance of the village and continue on foot." },
          { question: "Is Frigiliana suitable if I have heavy luggage?", answer: "It depends on your accommodation location, but you should expect some walking, stairs, or uneven streets. Packing light is always a good idea." },
          { question: "Where should I park when arriving for the first time?", answer: "Avenida Carlos Cano 42 is usually the easiest point to stop first. From there, you can continue on foot to La AMARA." },
          { question: "What if I need urgent local help?", answer: "Use the quick contact information on this page for local taxi support or emergency services if needed." }
        ],
        de: [
          { question: "Kann ich direkt in die Altstadt fahren?", answer: "Meistens nicht auf eine wirklich praktische Weise. Für die meisten ist es einfacher, in der Nähe des Dorfeingangs anzuhalten und den Rest zu Fuß weiterzugehen." },
          { question: "Ist Frigiliana geeignet, wenn ich schweres Gepäck habe?", answer: "Das hängt von der Lage eurer Unterkunft ab, aber ihr solltet mit Fußwegen, Treppen oder unebenen Gassen rechnen. Leicht zu packen ist immer die bessere Idee." },
          { question: "Wo sollte ich beim ersten Mal anhalten?", answer: "Avenida Carlos Cano 42 ist in der Regel der einfachste Punkt für den ersten Stopp. Von dort könnt ihr zu Fuß zu La AMARA weitergehen." },
          { question: "Was ist, wenn ich schnelle lokale Hilfe brauche?", answer: "Nutzt bei Bedarf die Schnellkontakt-Informationen auf dieser Seite für ein lokales Taxi oder den Notruf." }
        ],
        es: [
          { question: "¿Puedo conducir directamente al casco antiguo?", answer: "Normalmente no de una forma práctica. A la mayoría de los visitantes les resulta más fácil parar cerca de la entrada del pueblo y continuar a pie." },
          { question: "¿Es Frigiliana adecuada si llevo equipaje pesado?", answer: "Depende de dónde esté vuestro alojamiento, pero deberéis contar con algo de caminata, escaleras o calles irregulares. Viajar ligero siempre ayuda." },
          { question: "¿Dónde debería parar la primera vez?", answer: "Avenida Carlos Cano 42 suele ser el punto más sencillo para una primera parada. Desde allí podéis continuar a pie hasta La AMARA." },
          { question: "¿Y si necesito ayuda local urgente?", answer: "Utilizad la información de contacto rápido de esta página si necesitáis un taxi local o los servicios de emergencia." }
        ],
        nl: [
          { question: "Kan ik direct de oude dorpskern inrijden?", answer: "Meestal niet op een praktische manier. De meeste bezoekers vinden het makkelijker om dicht bij de dorpsingang te stoppen en daarna te voet verder te gaan." },
          { question: "Is Frigiliana geschikt als ik zware bagage heb?", answer: "Dat hangt af van waar jullie accommodatie ligt, maar houd rekening met lopen, trappen of ongelijke straatjes. Licht inpakken is altijd verstandiger." },
          { question: "Waar moet ik de eerste keer stoppen?", answer: "Avenida Carlos Cano 42 is meestal het makkelijkste punt voor een eerste stop. Vanaf daar kunnen jullie te voet verder naar La AMARA." },
          { question: "Wat als ik snel lokale hulp nodig heb?", answer: "Gebruik dan de snelle contactinformatie op deze pagina voor een lokale taxi of de hulpdiensten." }
        ],
        sv: [
          { question: "Kan jag köra direkt in i gamla byn?", answer: "Vanligtvis inte på ett praktiskt sätt. De flesta tycker att det är enklare att stanna nära byns infart och gå sista delen till fots." },
          { question: "Passar Frigiliana om jag har tungt bagage?", answer: "Det beror på var ert boende ligger, men ni bör räkna med promenader, trappor eller ojämna gator. Att packa lätt är alltid klokt." },
          { question: "Var bör jag stanna första gången?", answer: "Avenida Carlos Cano 42 är oftast den enklaste platsen för ett första stopp. Därifrån kan ni fortsätta till fots till La AMARA." },
          { question: "Vad gör jag om jag snabbt behöver lokal hjälp?", answer: "Använd snabbkontaktinformationen på den här sidan om ni behöver en lokal taxi eller larmtjänst." }
        ]
      }
    }
  },
  sidebar: {
    title: { en: "La AMARA Arrival Summary", de: "La AMARA auf einen Blick", es: "Resumen de llegada a La AMARA", nl: "La AMARA in het kort", sv: "La AMARA i korthet" },
    address: { en: "Address", de: "Adresse", es: "Dirección", nl: "Adres", sv: "Adress" },
    dropOff: { en: "Recommended drop-off", de: "Empfohlener Ausstieg", es: "Punto recomendado para bajar", nl: "Aanbevolen afzetpunt", sv: "Rekommenderad avlämning" },
    walkingDistance: { en: "Walking distance", de: "Fußweg", es: "Trayecto a pie", nl: "Loopafstand", sv: "Gångavstånd" },
    busStop: { en: "Bus stop", de: "Bushaltestelle", es: "Parada de autobús", nl: "Bushalte", sv: "Busshållplats" },
    walkingValue: { en: "approx. 4 min · 150 m uphill", de: "ca. 4 Min. · 150 m bergauf", es: "aprox. 4 min · 150 m cuesta arriba", nl: "ca. 4 min · 150 m omhoog", sv: "ca 4 min · 150 m uppför" },
    quickContact: { en: "Quick Contact", de: "Schnellkontakt", es: "Contacto rápido", nl: "Snel contact", sv: "Snabbkontakt" },
    taxi: { en: "Local Taxi", de: "Lokales Taxi", es: "Taxi local", nl: "Lokale taxi", sv: "Lokal taxi" },
    emergency: { en: "Emergency", de: "Notfall", es: "Emergencias", nl: "Noodgeval", sv: "Nödfall" },
    mapTitle: {
      en: "Recommended drop-off point and walking route to La AMARA",
      de: "Empfohlener Ausstiegspunkt und Fußweg zu La AMARA",
      es: "Punto recomendado para bajar y camino a pie hasta La AMARA",
      nl: "Aanbevolen afzetpunt en looproute naar La AMARA",
      sv: "Rekommenderad avlämningsplats och gångväg till La AMARA"
    },
    taxiNoteLabel: { en: "Taxi note", de: "Taxihinweis", es: "Nota sobre el taxi", nl: "Taxitip", sv: "Taxitips" },
    routeTitle: { en: "Recommended route", de: "Empfohlener Ablauf", es: "Recorrido recomendado", nl: "Aanbevolen route", sv: "Rekommenderad rutt" }
  },
  footer: {
    brand: { en: "Frigiliana Editorial", de: "Frigiliana Editorial", es: "Editorial Frigiliana", nl: "Frigiliana Redactie", sv: "Frigiliana Redaktion" },
    rights: { en: "All rights reserved.", de: "Alle Rechte vorbehalten.", es: "Todos los derechos reservados.", nl: "Alle rechten voorbehouden.", sv: "Alla rättigheter förbehållna." }
  }
};

export const arrivalGuideSteps = {
  en: [
    "Stop at Avenida Carlos Cano 42.",
    "Take the staircase at La Fuente on the left-hand side.",
    "Pass La Fuente Vieja and continue for around 15 meters.",
    "Turn right at Bar El Señor and continue uphill.",
    "Look for the green door of La AMARA on the right."
  ],
  de: [
    "Haltet zuerst an der Avenida Carlos Cano 42 an.",
    "Nehmt links bei La Fuente die Treppe.",
    "Geht an La Fuente Vieja vorbei und noch etwa 15 Meter weiter.",
    "Biegt am Bar El Señor rechts ab und geht weiter bergauf.",
    "Sucht rechts nach der grünen Tür von La AMARA."
  ],
  es: [
    "Parad primero en Avenida Carlos Cano 42.",
    "Tomad la escalera a la izquierda en La Fuente.",
    "Pasad la fuente La Fuente Vieja y seguid unos 15 metros más.",
    "Girad a la derecha en Bar El Señor y continuad cuesta arriba.",
    "Buscad a la derecha la puerta verde de La AMARA."
  ],
  nl: [
    "Stop eerst bij Avenida Carlos Cano 42.",
    "Neem links de trap bij La Fuente.",
    "Loop langs La Fuente Vieja en ga nog ongeveer 15 meter verder.",
    "Sla bij Bar El Señor rechtsaf en loop verder omhoog.",
    "Zoek rechts naar de groene deur van La AMARA."
  ],
  sv: [
    "Stanna först vid Avenida Carlos Cano 42.",
    "Ta trappan till vänster vid La Fuente.",
    "Gå förbi La Fuente Vieja och fortsätt cirka 15 meter till.",
    "Sväng höger vid Bar El Señor och fortsätt uppför.",
    "Titta efter La AMARAs gröna dörr på höger sida."
  ]
};

export const arrivalGuideBusRoutes = {
  en: [
    {
      title: "Shorter route — via Calle Real",
      meta: "Approx. 8 minutes · 550 m",
      text: "This is the shorter route through the old village. It is slightly uphill and follows cobbled streets, but it does not include steps."
    },
    {
      title: "Longer route — via the main road",
      meta: "Approx. 12 minutes · 750 m",
      text: "This route is mostly flat until La Fuente. At the end, there are several steps and a short final ascent of around 25 meters elevation."
    }
  ],
  de: [
    {
      title: "Kürzerer Weg — über Calle Real",
      meta: "Ca. 8 Minuten · 550 m",
      text: "Das ist der kürzere Weg durch das alte Dorf. Er geht leicht bergauf über Kopfsteinpflaster, hat aber keine Stufen."
    },
    {
      title: "Längerer Weg — über die Hauptstraße",
      meta: "Ca. 12 Minuten · 750 m",
      text: "Dieser Weg ist bis La Fuente größtenteils flach. Am Ende gibt es mehrere Stufen und einen kurzen letzten Anstieg von etwa 25 Höhenmetern."
    }
  ],
  es: [
    {
      title: "Camino más corto — por Calle Real",
      meta: "Aprox. 8 minutos · 550 m",
      text: "Es el recorrido más corto por el casco antiguo. Tiene una ligera subida y va por calles empedradas, pero no incluye escalones."
    },
    {
      title: "Camino más largo — por la carretera principal",
      meta: "Aprox. 12 minutos · 750 m",
      text: "Este recorrido es casi llano hasta La Fuente. Al final hay varios escalones y una última subida corta de unos 25 metros de desnivel."
    }
  ],
  nl: [
    {
      title: "Kortere route — via Calle Real",
      meta: "Ongeveer 8 minuten · 550 m",
      text: "Dit is de kortere route door het oude dorp. De weg loopt licht omhoog over kinderkopjes, maar er zijn geen trappen."
    },
    {
      title: "Langere route — via de hoofdweg",
      meta: "Ongeveer 12 minuten · 750 m",
      text: "Deze route is grotendeels vlak tot aan La Fuente. Aan het einde zijn er meerdere treden en een laatste korte klim van ongeveer 25 hoogtemeters."
    }
  ],
  sv: [
    {
      title: "Kortare väg — via Calle Real",
      meta: "Ca 8 minuter · 550 m",
      text: "Detta är den kortare vägen genom gamla byn. Den lutar svagt uppåt och går över kullersten, men innehåller inga trappsteg."
    },
    {
      title: "Längre väg — via huvudvägen",
      meta: "Ca 12 minuter · 750 m",
      text: "Den här vägen är mestadels plan fram till La Fuente. Mot slutet finns flera trappsteg och en kort sista stigning på omkring 25 höjdmeter."
    }
  ]
};

export const arrivalGuideUi = {
  stepLabel: {
    en: "Recommended arrival step by step",
    de: "Empfohlene Ankunft Schritt für Schritt",
    es: "Llegada recomendada paso a paso",
    nl: "Aanbevolen aankomst stap voor stap",
    sv: "Rekommenderad ankomst steg för steg"
  },
  routeChoice: {
    en: "Choose the route that fits you best",
    de: "Wählt den Weg, der am besten zu euch passt",
    es: "Elegid la ruta que mejor os encaje",
    nl: "Kies de route die het beste past",
    sv: "Välj den väg som passar er bäst"
  }
};
