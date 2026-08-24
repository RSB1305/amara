import type { AmaraAuthoringSeo } from '../types/seo';

export const arrivalGuideSeo: AmaraAuthoringSeo = {
  version: "2026-08-18-v3.2-arrival-utility",
  pageType: "A",
  languages: {
    en: { title: "Arrival at La AMARA Frigiliana", description: "The recommended drop-off point and the final walking route through Frigiliana to the La AMARA door.", robots: "noindex, follow", canonical: "auto" },
    de: { title: "Ankunft bei La AMARA Frigiliana", description: "Der empfohlene Ausstiegspunkt und der letzte Fußweg durch Frigiliana bis zur Tür von La AMARA.", robots: "noindex, follow", canonical: "auto" },
    es: { title: "Llegada a La AMARA Frigiliana", description: "El punto recomendado para bajar y el último camino a pie por Frigiliana hasta la puerta de La AMARA.", robots: "noindex, follow", canonical: "auto" },
    nl: { title: "Aankomst bij La AMARA Frigiliana", description: "De aanbevolen afzetplek en de laatste looproute door Frigiliana naar de deur van La AMARA.", robots: "noindex, follow", canonical: "auto" },
    sv: { title: "Ankomst till La AMARA Frigiliana", description: "Den rekommenderade avlämningsplatsen och den sista gångvägen genom Frigiliana till La AMARAs dörr.", robots: "noindex, follow", canonical: "auto" }
  },
  ogImage: "/images/amara-entrada/casa-amara-frigiliana-entrada.jpg"
};

export const arrivalGuideCopy = {
  nav: {
    brand: { en: "Frigiliana", de: "Frigiliana", es: "Frigiliana", nl: "Frigiliana", sv: "Frigiliana" },
    links: [
      { token: "location_frigiliana", label: { en: "Frigiliana", de: "Frigiliana", es: "Frigiliana", nl: "Frigiliana", sv: "Frigiliana" } },
      { token: "location_nerja", label: { en: "Nerja", de: "Nerja", es: "Nerja", nl: "Nerja", sv: "Nerja" } },
      { token: "frigiliana_experience_hub", label: { en: "Experiences", de: "Erlebnisse", es: "Experiencias", nl: "Ervaringen", sv: "Upplevelser" } }
    ]
  },
  header: {
    eyebrow: {
      en: 'Guest arrival · La AMARA Frigiliana',
      de: 'Gästeankunft · La AMARA Frigiliana',
      es: 'Llegada de huéspedes · La AMARA Frigiliana',
      nl: 'Aankomst voor gasten · La AMARA Frigiliana',
      sv: 'Gästankomst · La AMARA Frigiliana'
    },
    title: { en: "Arriving at La AMARA Frigiliana", de: "Ankunft bei La AMARA Frigiliana", es: "Llegar a La AMARA Frigiliana", nl: "Aankomen bij La AMARA Frigiliana", sv: "Att komma fram till La AMARA Frigiliana" },
    subtitle: {
      en: "From the recommended village drop-off to **the green La AMARA door** — clearly explained step by step.",
      de: "Vom empfohlenen Ausstiegspunkt im Dorf bis **zur grünen Tür von La AMARA** – klar und Schritt für Schritt erklärt.",
      es: "Desde el punto recomendado para bajar en el pueblo hasta **la puerta verde de La AMARA**, explicado paso a paso.",
      nl: "Van de aanbevolen afzetplek in het dorp tot **de groene deur van La AMARA** — duidelijk en stap voor stap uitgelegd.",
      sv: "Från den rekommenderade avlämningsplatsen i byn till **La AMARAs gröna dörr** – tydligt förklarat steg för steg."
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
    journeyIntro: {
      title: {
        en: "Before arrival",
        de: "Vor der Ankunft",
        es: "Antes de llegar",
        nl: "Voor aankomst",
        sv: "Före ankomsten"
      },
      text: {
        en: "If you are still planning the journey from Málaga Airport or Nerja, start with the route to Frigiliana. If you are arriving by car, the parking guide explains the village parking options, restricted access and the final walk. This guide takes over at the recommended drop-off point for La AMARA.",
        de: "Wenn ihr die Anreise vom Flughafen Málaga oder von Nerja noch plant, beginnt mit der Anreise nach Frigiliana. Wenn ihr mit dem Auto kommt, erklärt der Parkguide die Parkmöglichkeiten im Dorf, die eingeschränkte Zufahrt und den letzten Fußweg. Dieser Guide übernimmt am empfohlenen Ausstiegspunkt für La AMARA.",
        es: "Si todavía estáis planificando el trayecto desde el aeropuerto de Málaga o Nerja, empezad por cómo llegar a Frigiliana. Si venís en coche, la guía de aparcamiento explica dónde aparcar en el pueblo, las restricciones de acceso y el último tramo a pie. Esta guía continúa en el punto recomendado para bajar junto a La AMARA.",
        nl: "Als jullie de reis vanaf Málaga Airport of Nerja nog plannen, begin dan met de route naar Frigiliana. Komen jullie met de auto, dan legt de parkeergids uit waar jullie in het dorp kunnen parkeren, welke toegangsbeperkingen er zijn en hoe het laatste stuk te voet verloopt. Deze gids neemt het over bij de aanbevolen afzetplek voor La AMARA.",
        sv: "Om ni fortfarande planerar resan från Málaga flygplats eller Nerja börjar ni med vägen till Frigiliana. Om ni kommer med bil förklarar parkeringsguiden var ni kan parkera i byn, vilka infartsbegränsningar som gäller och hur den sista promenaden ser ut. Den här guiden tar vid vid den rekommenderade avlämningsplatsen för La AMARA."
      },
      cta: {
        en: "Plan the journey to Frigiliana",
        de: "Anreise nach Frigiliana planen",
        es: "Planificar el viaje a Frigiliana",
        nl: "Plan de reis naar Frigiliana",
        sv: "Planera resan till Frigiliana"
      },
      parkingCta: {
        en: "Check parking & access",
        de: "Parken & Erreichbarkeit prüfen",
        es: "Consultar aparcamiento y acceso",
        nl: "Parkeren & bereikbaarheid bekijken",
        sv: "Se parkering & tillgänglighet"
      }
    },
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
      title: { en: "From the Frigiliana bus stop to La AMARA", de: "Von der Bushaltestelle Frigiliana zu La AMARA", es: "Desde la parada de Frigiliana hasta La AMARA", nl: "Van de bushalte in Frigiliana naar La AMARA", sv: "Från busshållplatsen i Frigiliana till La AMARA" },
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
          { question: "Can I drive directly to the La AMARA entrance?", answer: "Usually not in a practical way. The historic lanes are narrow and vehicle access is limited, so Avenida Carlos Cano 42 is the recommended first stop before continuing on foot." },
          { question: "Is the walk to La AMARA manageable with heavy luggage?", answer: "The recommended route is short, but it is uphill over uneven ground and includes steps. Manageable luggage makes the final approach noticeably easier." },
          { question: "Where should a taxi drop me for La AMARA?", answer: "Avenida Carlos Cano 42 is usually the simplest drop-off point. From there, the mapped walking route to La AMARA takes about four minutes." },
          { question: "What if I need help during arrival?", answer: "Use the quick contact information on this page for local taxi support or emergency services if needed." }
        ],
        de: [
          { question: "Kann ich direkt bis zum Eingang von La AMARA fahren?", answer: "In der Regel nicht auf eine praktische Weise. Die historischen Gassen sind eng und die Zufahrt ist eingeschränkt. Deshalb ist Avenida Carlos Cano 42 der empfohlene erste Stopp, bevor ihr zu Fuß weitergeht." },
          { question: "Ist der Fußweg zu La AMARA mit schwerem Gepäck gut machbar?", answer: "Der empfohlene Weg ist kurz, führt aber bergauf über unebenen Boden und einige Stufen. Mit gut handhabbarem Gepäck ist die letzte Etappe deutlich einfacher." },
          { question: "Wo sollte mich ein Taxi für La AMARA absetzen?", answer: "Avenida Carlos Cano 42 ist meist der einfachste Ausstiegspunkt. Von dort dauert der eingezeichnete Fußweg zu La AMARA etwa vier Minuten." },
          { question: "Was ist, wenn ich bei der Ankunft Hilfe brauche?", answer: "Nutzt bei Bedarf die Schnellkontakt-Informationen auf dieser Seite für ein lokales Taxi oder den Notruf." }
        ],
        es: [
          { question: "¿Puedo llegar en coche directamente a la entrada de La AMARA?", answer: "Normalmente no de una forma práctica. Las calles históricas son estrechas y el acceso está limitado, por lo que Avenida Carlos Cano 42 es el primer punto recomendado antes de continuar a pie." },
          { question: "¿Es fácil llegar a pie a La AMARA con equipaje pesado?", answer: "El camino recomendado es corto, pero sube por un suelo irregular e incluye escalones. Con equipaje fácil de manejar, el último tramo resulta mucho más sencillo." },
          { question: "¿Dónde debería dejarme un taxi para La AMARA?", answer: "Avenida Carlos Cano 42 suele ser el punto más sencillo para bajar. Desde allí, el recorrido a pie indicado hasta La AMARA dura unos cuatro minutos." },
          { question: "¿Y si necesito ayuda durante la llegada?", answer: "Utilizad la información de contacto rápido de esta página si necesitáis un taxi local o los servicios de emergencia." }
        ],
        nl: [
          { question: "Kan ik direct naar de ingang van La AMARA rijden?", answer: "Meestal niet op een praktische manier. De historische straatjes zijn smal en auto's hebben beperkt toegang. Daarom is Avenida Carlos Cano 42 de aanbevolen eerste stop voordat jullie te voet verdergaan." },
          { question: "Is de wandeling naar La AMARA goed te doen met zware bagage?", answer: "De aanbevolen route is kort, maar loopt bergop over een ongelijke ondergrond en bevat trappen. Met hanteerbare bagage is het laatste stuk merkbaar eenvoudiger." },
          { question: "Waar kan een taxi mij het beste afzetten voor La AMARA?", answer: "Avenida Carlos Cano 42 is meestal de eenvoudigste afzetplek. Vanaf daar duurt de aangegeven looproute naar La AMARA ongeveer vier minuten." },
          { question: "Wat als ik tijdens de aankomst hulp nodig heb?", answer: "Gebruik dan de snelle contactinformatie op deze pagina voor een lokale taxi of de hulpdiensten." }
        ],
        sv: [
          { question: "Kan jag köra direkt till La AMARAs entré?", answer: "Vanligtvis inte på ett praktiskt sätt. De historiska gränderna är smala och biltrafiken är begränsad, så Avenida Carlos Cano 42 är det rekommenderade första stoppet innan ni fortsätter till fots." },
          { question: "Är promenaden till La AMARA hanterbar med tungt bagage?", answer: "Den rekommenderade vägen är kort men går uppför på ojämnt underlag och innehåller trappsteg. Med lätthanterligt bagage blir den sista sträckan betydligt enklare." },
          { question: "Var bör en taxi släppa av mig för La AMARA?", answer: "Avenida Carlos Cano 42 är oftast den enklaste avlämningsplatsen. Därifrån tar den markerade gångvägen till La AMARA cirka fyra minuter." },
          { question: "Vad gör jag om jag behöver hjälp under ankomsten?", answer: "Använd snabbkontaktinformationen på den här sidan om ni behöver en lokal taxi eller larmtjänst." }
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
  heroAlt: {
    en: "The green entrance door of La AMARA in Frigiliana's historic quarter",
    de: "Die grüne Eingangstür von La AMARA in der Altstadt von Frigiliana",
    es: "La puerta verde de entrada a La AMARA en el casco histórico de Frigiliana",
    nl: "De groene voordeur van La AMARA in de historische wijk van Frigiliana",
    sv: "Den gröna entrédörren till La AMARA i Frigilianas historiska kvarter"
  },
  openInMaps: {
    en: "Open route in Google Maps",
    de: "Route in Google Maps öffnen",
    es: "Abrir ruta en Google Maps",
    nl: "Route openen in Google Maps",
    sv: "Öppna rutten i Google Maps"
  },
  expandMap: {
    en: "Enlarge the walking route map",
    de: "Karte des Fußwegs vergrößern",
    es: "Ampliar el mapa del recorrido a pie",
    nl: "Kaart van de looproute vergroten",
    sv: "Förstora kartan över gångvägen"
  },
  closeMap: {
    en: "Close map",
    de: "Karte schließen",
    es: "Cerrar mapa",
    nl: "Kaart sluiten",
    sv: "Stäng kartan"
  },
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
