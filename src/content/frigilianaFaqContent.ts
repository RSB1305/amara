import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type LocalizedText = Record<AmaraLanguage, string>;

const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaFaqExternalLinks = {
  officialBusSchedule: 'https://frigiliana.es/horario-autobuses/',
  officialTourism: 'https://www.turismofrigiliana.es/',
  officialFestival2026:
    'https://frigiliana.es/frigiliana-celebrara-una-nueva-edicion-del-festival-3-culturas-del-27-al-30-de-agosto-de-2026/',
  officialTrails:
    'https://www.turismofrigiliana.es/pdf/cuaderno_senderos_2013.pdf'
} as const;

export const frigilianaFaqSeo: AmaraAuthoringSeo = {
  version: '2026-07-27-frigiliana-faq-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Frigiliana FAQ: Practical Answers for Your Visit',
      description:
        'Practical answers about reaching Frigiliana, parking, village streets, staying overnight, shops, events, weather, and hiking.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana FAQ: Antworten für euren Besuch',
      description:
        'Praktische Antworten zu Anreise, Parken, Dorfstruktur, Übernachten, Geschäften, Veranstaltungen, Wetter und Wandern in Frigiliana.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana FAQ: respuestas prácticas para la visita',
      description:
        'Respuestas prácticas sobre cómo llegar a Frigiliana, aparcar, recorrer sus calles, alojarse, comprar, asistir a eventos y hacer senderismo.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana FAQ: antwoorden voor jullie bezoek',
      description:
        'Praktische antwoorden over reizen naar Frigiliana, parkeren, dorpsstraten, overnachten, winkels, evenementen, weer en wandelen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana FAQ: praktiska svar inför besöket',
      description:
        'Praktiska svar om resan till Frigiliana, parkering, byns gator, övernattning, butiker, evenemang, väder och vandring.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaFaqCopy = {
  nav: {
    brand: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana'),
    links: [
      {
        token: 'location_frigiliana',
        label: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana')
      },
      {
        token: 'getting_to_frigiliana',
        label: l('Getting here', 'Anreise', 'Cómo llegar', 'Bereikbaarheid', 'Resa hit')
      },
      {
        token: 'frigiliana_faq',
        label: l('FAQ', 'FAQ', 'FAQ', 'FAQ', 'FAQ')
      }
    ]
  },
  hero: {
    eyebrow: l(
      'Plan Frigiliana',
      'Frigiliana planen',
      'Planificar Frigiliana',
      'Frigiliana plannen',
      'Planera Frigiliana'
    ),
    title: l(
      'Frigiliana: Practical Questions, Clear Answers',
      'Frigiliana: Praktische Fragen, klare Antworten',
      'Frigiliana: preguntas prácticas, respuestas claras',
      'Frigiliana: praktische vragen, heldere antwoorden',
      'Frigiliana: praktiska frågor och tydliga svar'
    ),
    lead: l(
      'A calm, decision-first guide to transport, parking, steep streets, daily life, weather, and the difference between visiting for a few hours and staying overnight.',
      'Ein ruhiger, entscheidungsorientierter Guide zu Verkehr, Parken, steilen Gassen, Alltag, Wetter und dem Unterschied zwischen einem kurzen Besuch und einer Übernachtung.',
      'Una guía clara para decidir y organizar el transporte, el aparcamiento, las calles empinadas, el día a día, el tiempo y la diferencia entre una visita breve y una noche en el pueblo.',
      'Een rustige gids die helpt beslissen over vervoer, parkeren, steile straten, het dagelijks leven, het weer en het verschil tussen een kort bezoek en een overnachting.',
      'En lugn guide som hjälper er att fatta beslut om transport, parkering, branta gränder, vardagsliv, väder och skillnaden mellan ett kort besök och en övernattning.'
    ),
    body: l(
      'Use these answers for orientation, then confirm live timetables, opening hours, prices, and event details with the responsible local provider before making a special journey.',
      'Nutzt diese Antworten zur Orientierung und bestätigt aktuelle Fahrpläne, Öffnungszeiten, Preise und Veranstaltungsdetails vor einer eigens dafür unternommenen Fahrt beim zuständigen lokalen Anbieter.',
      'Utilizad estas respuestas para orientaros y confirmad los horarios, precios, aperturas y detalles de eventos con el proveedor local responsable antes de realizar un desplazamiento específico.',
      'Gebruik deze antwoorden als oriëntatie en controleer actuele dienstregelingen, openingstijden, prijzen en evenementinformatie bij de verantwoordelijke lokale aanbieder voordat jullie speciaal op pad gaan.',
      'Använd svaren som vägledning och kontrollera aktuella tidtabeller, öppettider, priser och evenemangsuppgifter hos ansvarig lokal aktör innan ni gör en särskild resa.'
    ),
    primaryCta: l(
      'Open the questions',
      'Fragen ansehen',
      'Ver las preguntas',
      'Bekijk de vragen',
      'Se frågorna'
    ),
    secondaryCta: l(
      'Plan the journey',
      'Anreise planen',
      'Planificar el viaje',
      'Plan de reis',
      'Planera resan'
    ),
    imageAlt: l(
      'Frigiliana and its whitewashed hillside streets',
      'Frigiliana mit seinen weißen Gassen am Hang',
      'Frigiliana y sus calles blancas en la ladera',
      'Frigiliana met de witte straten tegen de heuvel',
      'Frigiliana med sina vitkalkade gränder på sluttningen'
    )
  },
  orientation: {
    title: l(
      'Four things to understand first',
      'Vier Dinge, die ihr zuerst wissen solltet',
      'Cuatro cosas que conviene saber primero',
      'Vier dingen om eerst te weten',
      'Fyra saker att förstå först'
    ),
    items: [
      {
        label: l('Village shape', 'Dorfstruktur', 'Estructura', 'Dorpsstructuur', 'Bystruktur'),
        value: l('Lower & upper village', 'Unter- & Oberdorf', 'Zona baja y alta', 'Beneden- en bovendorp', 'Nedre och övre byn'),
        note: l(
          'The historic upper quarter includes steep lanes and stairs.',
          'Das historische Oberdorf hat steile Gassen und Treppen.',
          'El casco histórico de la zona alta incluye cuestas y escaleras.',
          'De historische bovenwijk heeft steile straten en trappen.',
          'Den historiska övre delen har branta gränder och trappor.'
        )
      },
      {
        label: l('Coast connection', 'Verbindung zur Küste', 'Conexión con la costa', 'Verbinding met de kust', 'Förbindelse med kusten'),
        value: l('Via Nerja', 'Über Nerja', 'A través de Nerja', 'Via Nerja', 'Via Nerja'),
        note: l(
          'Local buses and taxis connect the village with Nerja.',
          'Lokale Busse und Taxis verbinden das Dorf mit Nerja.',
          'Los autobuses locales y los taxis conectan el pueblo con Nerja.',
          'Lokale bussen en taxi’s verbinden het dorp met Nerja.',
          'Lokalbussar och taxi förbinder byn med Nerja.'
        )
      },
      {
        label: l('Without a car', 'Ohne Auto', 'Sin coche', 'Zonder auto', 'Utan bil'),
        value: l('Possible with planning', 'Mit Planung möglich', 'Posible con planificación', 'Mogelijk met planning', 'Möjligt med planering'),
        note: l(
          'Timetables matter more on Sundays, holidays, and in the evening.',
          'Sonntags, an Feiertagen und abends sind Fahrpläne besonders wichtig.',
          'Los horarios importan especialmente los domingos, festivos y por la noche.',
          'Dienstregelingen zijn vooral op zon- en feestdagen en ’s avonds belangrijk.',
          'Tidtabeller är extra viktiga på söndagar, helgdagar och kvällar.'
        )
      },
      {
        label: l('Best approach', 'Beste Herangehensweise', 'Mejor enfoque', 'Beste aanpak', 'Bästa sättet'),
        value: l('Leave time', 'Zeit einplanen', 'Ir sin prisas', 'Neem de tijd', 'Ta god tid'),
        note: l(
          'Parking, walking, and the terrain are easier without a tight schedule.',
          'Parken, Fußwege und Gelände sind ohne engen Zeitplan leichter.',
          'Aparcar, caminar y moverse por las cuestas resulta más fácil sin prisas.',
          'Parkeren, lopen en het hoogteverschil zijn eenvoudiger zonder strakke planning.',
          'Parkering, promenader och nivåskillnader blir enklare utan ett pressat schema.'
        )
      }
    ]
  },
  sections: [
    {
      id: 'arrival-mobility',
      number: '01',
      eyebrow: l('Getting there', 'Anreise', 'Cómo llegar', 'Bereikbaarheid', 'Resa hit'),
      title: l(
        'Arrival, transport & parking',
        'Anreise, Verkehr & Parken',
        'Llegada, transporte y aparcamiento',
        'Aankomst, vervoer en parkeren',
        'Ankomst, transport och parkering'
      ),
      intro: l(
        'The key decision is not simply car or no car. It is how much flexibility you want once you leave the village.',
        'Die wichtigste Entscheidung lautet nicht nur Auto oder kein Auto, sondern wie flexibel ihr außerhalb des Dorfes sein möchtet.',
        'La decisión principal no es solo coche o no coche, sino cuánta flexibilidad queréis tener fuera del pueblo.',
        'De belangrijkste keuze is niet alleen auto of geen auto, maar hoeveel vrijheid jullie buiten het dorp willen.',
        'Den viktigaste frågan är inte bara bil eller ingen bil, utan hur flexibla ni vill vara utanför byn.'
      ),
      items: [
        {
          q: l(
            'How do I reach Frigiliana from Málaga Airport?',
            'Wie komme ich vom Flughafen Málaga nach Frigiliana?',
            '¿Cómo se llega a Frigiliana desde el aeropuerto de Málaga?',
            'Hoe kom ik van de luchthaven van Málaga naar Frigiliana?',
            'Hur tar jag mig från Málagas flygplats till Frigiliana?'
          ),
          a: l(
            'By car, the usual route follows the A-7 east and then climbs inland from Nerja. By public transport, travel first towards Nerja and continue by local bus or taxi. Journey times depend on traffic and the connection, so check the live itinerary for your date.',
            'Mit dem Auto führt die übliche Route über die A-7 nach Osten und ab Nerja hinauf ins Landesinnere. Mit öffentlichen Verkehrsmitteln fahrt ihr zunächst Richtung Nerja und von dort mit lokalem Bus oder Taxi weiter. Die Fahrzeit hängt von Verkehr und Anschluss ab; prüft deshalb die aktuelle Verbindung für euer Datum.',
            'En coche, la ruta habitual sigue la A-7 hacia el este y sube desde Nerja hacia el interior. En transporte público, hay que viajar primero hacia Nerja y continuar en autobús local o taxi. El tiempo depende del tráfico y del enlace, así que comprobad el itinerario para vuestra fecha.',
            'Met de auto loopt de gebruikelijke route oostwaarts over de A-7 en vanaf Nerja landinwaarts omhoog. Met het openbaar vervoer reizen jullie eerst richting Nerja en gaan jullie verder met de lokale bus of taxi. De reistijd hangt af van verkeer en aansluiting; controleer daarom de actuele route voor jullie datum.',
            'Med bil går den vanliga vägen österut på A-7 och sedan upp från Nerja mot inlandet. Med kollektivtrafik reser ni först mot Nerja och fortsätter med lokalbuss eller taxi. Restiden beror på trafik och anslutning, så kontrollera den aktuella resan för ert datum.'
          )
        },
        {
          q: l(
            'Can I visit or stay in Frigiliana without a car?',
            'Kann ich Frigiliana ohne Auto besuchen oder dort übernachten?',
            '¿Se puede visitar Frigiliana o alojarse allí sin coche?',
            'Kan ik Frigiliana zonder auto bezoeken of er verblijven?',
            'Kan jag besöka eller bo i Frigiliana utan bil?'
          ),
          a: l(
            'Yes. The village itself is walkable if you are comfortable with slopes, and Nerja is connected by local bus and taxi. A car becomes more useful for flexible beach trips, rural walks, shopping outside the village, or late arrivals. Sunday and holiday services are more limited, so always check the current timetable.',
            'Ja. Das Dorf lässt sich zu Fuß erkunden, wenn Steigungen für euch kein Problem sind; Nerja ist per lokalem Bus und Taxi angebunden. Ein Auto ist vor allem für flexible Strandfahrten, Wanderungen außerhalb des Ortes, größere Einkäufe oder späte Ankünfte hilfreich. Sonntags und an Feiertagen ist das Angebot eingeschränkter, daher gilt immer der aktuelle Fahrplan.',
            'Sí. El pueblo se recorre a pie si las cuestas no suponen un problema, y hay conexión con Nerja mediante autobús local y taxi. El coche resulta más útil para ir a la playa con flexibilidad, hacer rutas fuera del núcleo, realizar compras grandes o llegar tarde. Los domingos y festivos hay menos servicios, por lo que conviene consultar el horario vigente.',
            'Ja. Het dorp is te voet te verkennen als hellingen geen probleem zijn, en Nerja is bereikbaar per lokale bus en taxi. Een auto is vooral handig voor flexibele strandritten, wandelingen buiten het dorp, grotere boodschappen of een late aankomst. Op zon- en feestdagen is de dienst beperkter; controleer daarom altijd de actuele dienstregeling.',
            'Ja. Byn går att utforska till fots om ni klarar lutningar, och Nerja nås med lokalbuss och taxi. Bil är främst praktiskt för flexibla strandutflykter, vandringar utanför byn, större inköp eller sen ankomst. På söndagar och helgdagar är trafiken mer begränsad, så kontrollera alltid aktuell tidtabell.'
          )
        },
        {
          q: l(
            'Where is the most practical place to park?',
            'Wo parke ich am praktischsten?',
            '¿Dónde resulta más práctico aparcar?',
            'Waar kan ik het handigst parkeren?',
            'Var parkerar jag enklast?'
          ),
          a: l(
            'The municipal underground garage by Plaza de las Tres Culturas is the clearest starting point for many visitors. Other signed areas may be available, but access, availability, and prices can change. Avoid entering narrow old-town lanes without a specific permitted destination.',
            'Die öffentliche Tiefgarage an der Plaza de las Tres Culturas ist für viele Besucher der klarste Ausgangspunkt. Weitere ausgeschilderte Flächen können verfügbar sein, doch Zufahrt, Verfügbarkeit und Preise können sich ändern. Fahrt nicht ohne ein konkretes erlaubtes Ziel in die engen Altstadtgassen.',
            'El aparcamiento público subterráneo de la Plaza de las Tres Culturas es el punto de partida más claro para muchos visitantes. Puede haber otras zonas señalizadas, pero el acceso, la disponibilidad y los precios pueden cambiar. No entréis en las calles estrechas del casco histórico sin un destino concreto y permitido.',
            'De openbare parkeergarage bij Plaza de las Tres Culturas is voor veel bezoekers het duidelijkste vertrekpunt. Er kunnen andere aangegeven zones beschikbaar zijn, maar toegang, beschikbaarheid en tarieven kunnen veranderen. Rijd niet zonder een concrete toegestane bestemming de smalle oude straten in.',
            'Det kommunala parkeringsgaraget vid Plaza de las Tres Culturas är den tydligaste utgångspunkten för många besökare. Andra skyltade ytor kan finnas, men tillgång, platser och priser kan ändras. Kör inte in i gamla stans smala gränder utan ett bestämt och tillåtet mål.'
          )
        },
        {
          q: l(
            'Can I rely on ride-hailing apps or fixed taxi prices?',
            'Kann ich mich auf Fahrdienst-Apps oder feste Taxipreise verlassen?',
            '¿Puedo confiar en las aplicaciones VTC o en precios fijos de taxi?',
            'Kan ik vertrouwen op taxi-apps of vaste taxiprijzen?',
            'Kan jag lita på beställningsappar eller fasta taxipriser?'
          ),
          a: l(
            'Availability varies by time and location. Do not build a time-critical arrival around a single app or an old quoted fare. For an important transfer, confirm the pickup, price method, and contact details directly with a licensed local provider.',
            'Die Verfügbarkeit hängt von Uhrzeit und Standort ab. Plant keine zeitkritische Ankunft ausschließlich mit einer App oder einem alten Preisbeispiel. Bestätigt bei einem wichtigen Transfer Abholung, Preisberechnung und Kontaktdaten direkt bei einem zugelassenen lokalen Anbieter.',
            'La disponibilidad varía según la hora y el lugar. No organicéis una llegada con poco margen basándoos en una sola aplicación o en una tarifa antigua. Para un traslado importante, confirmad la recogida, el cálculo del precio y el contacto directamente con un proveedor local autorizado.',
            'De beschikbaarheid verschilt per tijdstip en locatie. Plan een tijdkritische aankomst niet rond één app of een oude prijsindicatie. Bevestig voor een belangrijke rit de ophaalplek, prijsberekening en contactgegevens rechtstreeks bij een erkende lokale aanbieder.',
            'Tillgången varierar med tid och plats. Planera inte en tidskritisk ankomst utifrån en enda app eller en gammal prisuppgift. Bekräfta hämtning, prismodell och kontaktuppgifter direkt med en godkänd lokal aktör vid en viktig transfer.'
          )
        }
      ]
    },
    {
      id: 'village-stay',
      number: '02',
      eyebrow: l('Choosing where to stay', 'Die richtige Lage wählen', 'Elegir dónde alojarse', 'Kies waar jullie verblijven', 'Välj var ni ska bo'),
      title: l(
        'Village layout & staying overnight',
        'Dorfstruktur & Übernachten',
        'Estructura del pueblo y alojamiento',
        'Dorpsstructuur en overnachten',
        'Bystruktur och övernattning'
      ),
      intro: l(
        'Frigiliana is best explored on foot, but the exact street and elevation of your accommodation matter more here than in a flat coastal town.',
        'Frigiliana belohnt Zeit zu Fuß, doch die genaue Gasse und Höhenlage eurer Unterkunft sind hier wichtiger als in einem flachen Küstenort.',
        'Frigiliana se disfruta caminando, pero la calle y la altura exactas del alojamiento importan más aquí que en una localidad costera llana.',
        'Frigiliana is gemaakt om te voet te beleven, maar de exacte straat en hoogte van jullie verblijf tellen hier zwaarder dan in een vlakke kustplaats.',
        'Frigiliana upplevs bäst till fots, men boendets exakta gata och höjdläge spelar större roll här än i en flack kustort.'
      ),
      items: [
        {
          q: l(
            'Is Frigiliana suitable for travellers with limited mobility?',
            'Ist Frigiliana für Reisende mit eingeschränkter Mobilität geeignet?',
            '¿Es Frigiliana adecuada para personas con movilidad reducida?',
            'Is Frigiliana geschikt voor reizigers met beperkte mobiliteit?',
            'Passar Frigiliana resenärer med begränsad rörlighet?'
          ),
          a: l(
            'The lower village has the most manageable access, while much of the historic upper quarter includes steep, uneven lanes and stair-only passages. Check the exact route from parking or drop-off to your accommodation rather than relying on a general village description.',
            'Das Unterdorf ist am leichtesten zugänglich, während große Teile der historischen Oberstadt steile, unebene Gassen und reine Treppenpassagen haben. Prüft den genauen Weg vom Parkplatz oder Ausstieg bis zu eurer Unterkunft, statt euch auf eine allgemeine Dorfbeschreibung zu verlassen.',
            'La zona baja ofrece el acceso más sencillo, mientras que buena parte del casco histórico alto tiene calles empinadas, pavimento irregular y tramos solo con escaleras. Comprobad el recorrido exacto desde el aparcamiento o punto de bajada hasta el alojamiento.',
            'Het lagere dorp is het best toegankelijk, terwijl een groot deel van de historische bovenwijk steile, ongelijke straten en passages met alleen trappen heeft. Controleer de exacte route van parkeer- of uitstapplek naar jullie verblijf en vertrouw niet op een algemene dorpsbeschrijving.',
            'Den nedre delen är enklast att nå, medan stora delar av den historiska övre byn har branta, ojämna gränder och passager med enbart trappor. Kontrollera den exakta vägen från parkering eller avlämning till boendet i stället för att lita på en allmän beskrivning.'
          )
        },
        {
          q: l(
            'Is Frigiliana better as a day trip or an overnight stay?',
            'Eignet sich Frigiliana besser als Tagesausflug oder zum Übernachten?',
            '¿Es mejor visitar Frigiliana en el día o quedarse a dormir?',
            'Is Frigiliana beter als dagtrip of voor een overnachting?',
            'Är Frigiliana bäst som dagsutflykt eller med övernattning?'
          ),
          a: l(
            'A day visit works well for the historic quarter, viewpoints, and a meal. Staying overnight gives you quieter early mornings and evenings and more time for the surrounding landscape. The better choice depends on whether the village is your destination or one stop in a wider coastal trip.',
            'Ein Tagesbesuch reicht gut für Altstadt, Aussichtspunkte und eine Mahlzeit. Mit Übernachtung erlebt ihr ruhigere Morgen- und Abendstunden und habt mehr Zeit für die Umgebung. Entscheidend ist, ob das Dorf euer Ziel oder nur eine Station auf einer größeren Küstenreise ist.',
            'Una visita de un día permite recorrer el casco histórico, disfrutar de los miradores y comer con calma. Alojarse ofrece mañanas y noches más tranquilas y más tiempo para el entorno. La mejor opción depende de si el pueblo es vuestro destino o una parada dentro de una ruta por la costa.',
            'Een dagbezoek is geschikt voor de oude kern, uitzichtpunten en een maaltijd. Met een overnachting beleven jullie rustigere ochtenden en avonden en hebben jullie meer tijd voor de omgeving. De beste keuze hangt af van de vraag of het dorp jullie bestemming is of één halte tijdens een bredere kustreis.',
            'Ett dagsbesök räcker för gamla stan, utsiktsplatser och en måltid. Med övernattning får ni lugnare morgnar och kvällar och mer tid för omgivningarna. Det bästa valet beror på om byn är själva resmålet eller ett stopp under en längre kustresa.'
          )
        },
        {
          q: l(
            'Frigiliana or Nerja: where should I stay?',
            'Frigiliana oder Nerja: Wo solltet ihr übernachten?',
            'Frigiliana o Nerja: ¿dónde conviene alojarse?',
            'Frigiliana of Nerja: waar kunnen jullie het beste verblijven?',
            'Frigiliana eller Nerja: var passar det bäst att bo?'
          ),
          a: l(
            'Choose Frigiliana for historic lanes, hillside views and quieter evenings. Choose Nerja if daily beach access, flatter walking and a larger concentration of services matter more. The two places are close enough to combine, but daily life feels different.',
            'Wählt Frigiliana für historische Gassen, Hangblick und ruhigere Abende. Nerja passt besser, wenn täglicher Strandzugang, flachere Wege und mehr Angebote direkt in der Nähe wichtiger sind. Beide Orte lassen sich verbinden, der Alltag unterscheidet sich aber deutlich.',
            'Elegid Frigiliana por sus calles históricas, las vistas desde la ladera y las noches más tranquilas. Nerja conviene más si importan el acceso diario a la playa, los paseos llanos y una mayor concentración de servicios. Los dos lugares se combinan bien, pero el día a día es distinto.',
            'Kies Frigiliana voor historische straatjes, uitzicht vanaf de helling en rustigere avonden. Nerja past beter als dagelijks strand, vlakker lopen en meer voorzieningen dichtbij belangrijker zijn. Beide plaatsen zijn goed te combineren, maar de dagelijkse praktijk verschilt.',
            'Välj Frigiliana för historiska gränder, utsikt från sluttningen och lugnare kvällar. Nerja passar bättre om daglig närhet till stranden, flackare promenader och mer service i närheten väger tyngre. Platserna går bra att kombinera, men vardagen ser olika ut.'
          ),
          linkToken: 'nerja_vs_frigiliana',
          linkLabel: l(
            '',
            'Ausführlicher Vergleich: Frigiliana oder Nerja',
            '',
            '',
            ''
          )
        }
      ]
    },
    {
      id: 'daily-life',
      number: '03',
      eyebrow: l('In the village', 'Im Dorf', 'En el pueblo', 'In het dorp', 'I byn'),
      title: l(
        'Daily life, food & events',
        'Alltag, Essen & Veranstaltungen',
        'Vida diaria, gastronomía y eventos',
        'Dagelijks leven, eten en evenementen',
        'Vardagsliv, mat och evenemang'
      ),
      intro: l(
        'Opening hours and event arrangements are seasonal. Plan around the village as it is today, not around an old timetable or recommendation.',
        'Öffnungszeiten und Veranstaltungen sind saisonabhängig. Plant mit dem Dorf, wie es heute ist, nicht mit alten Zeitplänen oder Empfehlungen.',
        'Los horarios y la organización de eventos cambian según la temporada. Planificad con la información actual, no con horarios o recomendaciones antiguas.',
        'Openingstijden en evenementen veranderen per seizoen. Plan met de actuele situatie en niet op basis van een oud schema of advies.',
        'Öppettider och evenemang varierar med säsongen. Planera utifrån dagens information, inte en gammal tidtabell eller rekommendation.'
      ),
      items: [
        {
          q: l(
            'Are shops and restaurants open on Sundays?',
            'Sind Geschäfte und Restaurants sonntags geöffnet?',
            '¿Abren las tiendas y los restaurantes los domingos?',
            'Zijn winkels en restaurants op zondag open?',
            'Är butiker och restauranger öppna på söndagar?'
          ),
          a: l(
            'Some visitor-facing shops and restaurants open on Sundays, while supermarkets, pharmacies, and smaller businesses may use reduced or seasonal hours. Check the individual business on the day, especially outside the main season or on public holidays.',
            'Einige auf Besucher ausgerichtete Geschäfte und Restaurants öffnen sonntags, während Supermärkte, Apotheken und kleinere Betriebe reduzierte oder saisonale Zeiten haben können. Prüft den jeweiligen Betrieb am selben Tag, besonders außerhalb der Hauptsaison und an Feiertagen.',
            'Algunas tiendas orientadas a visitantes y restaurantes abren los domingos, mientras que supermercados, farmacias y pequeños comercios pueden tener horario reducido o estacional. Consultad cada establecimiento ese mismo día, sobre todo fuera de temporada alta o en festivos.',
            'Sommige bezoekersgerichte winkels en restaurants zijn op zondag open, terwijl supermarkten, apotheken en kleinere zaken beperkte of seizoensgebonden tijden kunnen hanteren. Controleer de betreffende zaak op de dag zelf, vooral buiten het hoofdseizoen en op feestdagen.',
            'Vissa besöksinriktade butiker och restauranger har öppet på söndagar, medan mataffärer, apotek och mindre verksamheter kan ha kortare eller säsongsstyrda tider. Kontrollera den enskilda verksamheten samma dag, särskilt utanför högsäsong och på helgdagar.'
          )
        },
        {
          q: l(
            'When is the weekly market?',
            'Wann findet der Wochenmarkt statt?',
            '¿Cuándo se celebra el mercado semanal?',
            'Wanneer is de wekelijkse markt?',
            'När är veckomarknaden?'
          ),
          a: l(
            'The regular market is normally held on Thursday mornings in the lower village around Plaza de las Tres Culturas. Holiday weeks and local events can affect the schedule or layout, so confirm current information before making a special trip.',
            'Der reguläre Markt findet normalerweise am Donnerstagvormittag im unteren Ort rund um die Plaza de las Tres Culturas statt. Feiertagswochen und lokale Veranstaltungen können Zeit oder Aufbau beeinflussen; bestätigt die aktuellen Angaben vor einer eigens geplanten Fahrt.',
            'El mercado habitual suele celebrarse los jueves por la mañana en la zona baja, en torno a la Plaza de las Tres Culturas. Los festivos y eventos locales pueden afectar al horario o al montaje; confirmad la información antes de desplazaros expresamente.',
            'De reguliere markt vindt normaal op donderdagochtend plaats in het lagere dorp rond Plaza de las Tres Culturas. Feestdagen en lokale evenementen kunnen tijd of indeling beïnvloeden; controleer de actuele informatie voordat jullie speciaal hiervoor reizen.',
            'Den ordinarie marknaden hålls normalt på torsdagsförmiddagar i den nedre byn kring Plaza de las Tres Culturas. Helgdagar och lokala evenemang kan påverka tid eller upplägg, så bekräfta aktuell information före en särskild resa.'
          )
        },
        {
          q: l(
            'Which local foods are associated with Frigiliana?',
            'Welche lokalen Speisen verbindet man mit Frigiliana?',
            '¿Qué productos y platos se asocian con Frigiliana?',
            'Welke lokale producten en gerechten horen bij Frigiliana?',
            'Vilka lokala råvaror och rätter förknippas med Frigiliana?'
          ),
          a: l(
            'Miel de caña, a dark sugar-cane syrup, is the best-known local product and is often served with fried aubergine. Traditional menus may also include migas or goat dishes. Recipes and availability vary by restaurant, so ask directly about ingredients and dietary needs.',
            'Miel de caña, ein dunkler Zuckerrohrsirup, ist das bekannteste lokale Produkt und wird häufig zu frittierten Auberginen serviert. Traditionelle Karten können außerdem Migas oder Ziegengerichte enthalten. Rezepte und Verfügbarkeit unterscheiden sich je nach Restaurant; fragt bei Allergien oder Ernährungsbedürfnissen direkt nach.',
            'La miel de caña, un jarabe oscuro de caña de azúcar, es el producto local más conocido y suele acompañar a las berenjenas fritas. Las cartas tradicionales también pueden incluir migas o platos de chivo. Las recetas varían, así que consultad directamente los ingredientes y las necesidades alimentarias.',
            'Miel de caña, een donkere suikerrietsiroop, is het bekendste lokale product en wordt vaak met gebakken aubergine geserveerd. Traditionele menu’s kunnen ook migas of geitengerechten bevatten. Recepten en beschikbaarheid verschillen per restaurant; vraag rechtstreeks naar ingrediënten en dieetwensen.',
            'Miel de caña, en mörk sockerrörssirap, är den mest kända lokala produkten och serveras ofta till friterad aubergine. Traditionella menyer kan även innehålla migas eller geträtter. Recept och tillgång varierar, så fråga restaurangen direkt om ingredienser och kostbehov.'
          )
        },
        {
          q: l(
            'When is the Festival of Three Cultures?',
            'Wann findet das Festival der drei Kulturen statt?',
            '¿Cuándo se celebra el Festival de las Tres Culturas?',
            'Wanneer is het Festival van de Drie Culturen?',
            'När hålls Festivalen för de tre kulturerna?'
          ),
          a: l(
            'The festival is a major late-summer event, but dates and the programme are announced per edition. The 2026 edition is officially scheduled for 27–30 August. For another year, use the latest municipal announcement rather than carrying these dates forward.',
            'Das Festival ist eine große Spätsommerveranstaltung, doch Termine und Programm werden für jede Ausgabe neu veröffentlicht. Für 2026 ist offiziell der 27. bis 30. August angekündigt. Nutzt für andere Jahre die jeweils aktuelle Mitteilung der Gemeinde.',
            'El festival es una de las grandes citas de finales de verano, pero las fechas y el programa se anuncian para cada edición. La edición de 2026 está prevista oficialmente del 27 al 30 de agosto. Para otros años, consultad el último anuncio municipal.',
            'Het festival is een belangrijk evenement aan het einde van de zomer, maar data en programma worden per editie aangekondigd. Voor 2026 staat het officieel gepland van 27 tot en met 30 augustus. Raadpleeg voor andere jaren de nieuwste gemeentelijke aankondiging.',
            'Festivalen är ett stort sensommarevenemang, men datum och program meddelas för varje upplaga. År 2026 är den officiellt planerad till 27–30 augusti. För andra år bör ni använda kommunens senaste besked.'
          )
        }
      ]
    },
    {
      id: 'weather-outdoors',
      number: '04',
      eyebrow: l('Outside', 'Draußen', 'Al aire libre', 'Buiten', 'Utomhus'),
      title: l(
        'Weather, walking & safety',
        'Wetter, Wandern & Sicherheit',
        'Tiempo, senderismo y seguridad',
        'Weer, wandelen en veiligheid',
        'Väder, vandring och säkerhet'
      ),
      intro: l(
        'The village and surrounding hills are rewarding on foot, but heat, wind, loose ground, and elevation deserve practical preparation.',
        'Dorf und umliegende Berge lohnen sich zu Fuß, doch Hitze, Wind, loses Gelände und Höhenmeter verlangen praktische Vorbereitung.',
        'El pueblo y las sierras cercanas se disfrutan a pie, pero el calor, el viento, el terreno suelto y el desnivel requieren preparación.',
        'Het dorp en de omliggende heuvels zijn prachtig te voet, maar hitte, wind, losse ondergrond en hoogteverschil vragen voorbereiding.',
        'Byn och bergen runt omkring är givande till fots, men värme, vind, löst underlag och höjdskillnader kräver förberedelser.'
      ),
      items: [
        {
          q: l(
            'What is the weather like through the year?',
            'Wie ist das Wetter im Jahresverlauf?',
            '¿Cómo es el tiempo a lo largo del año?',
            'Hoe is het weer door het jaar heen?',
            'Hur är vädret under året?'
          ),
          a: l(
            'Summers are typically hot and dry, so early or late walks are more comfortable than the middle of the day. Winter days can be mild in the sun, while evenings and shaded interiors feel cooler. Spring and autumn are often well suited to walking, but current forecasts should guide each plan.',
            'Die Sommer sind typischerweise heiß und trocken; Spaziergänge am frühen Morgen oder späten Nachmittag sind angenehmer als zur Mittagszeit. Wintertage können in der Sonne mild sein, während Abende und schattige Innenräume kühler wirken. Frühling und Herbst eignen sich oft gut zum Wandern, doch entscheidend ist die aktuelle Vorhersage.',
            'Los veranos suelen ser calurosos y secos, por lo que caminar temprano o al final de la tarde resulta más agradable que al mediodía. Los días de invierno pueden ser suaves al sol, mientras que las noches y los interiores sombríos se sienten más frescos. Primavera y otoño suelen ser buenas épocas para caminar, siempre según la previsión actual.',
            'De zomers zijn doorgaans heet en droog; wandelen in de vroege ochtend of late middag is aangenamer dan midden op de dag. Winterdagen kunnen in de zon zacht zijn, terwijl avonden en schaduwrijke interieurs koeler aanvoelen. Voor- en najaar zijn vaak geschikt om te wandelen, maar laat de actuele verwachting leidend zijn.',
            'Somrarna är vanligtvis varma och torra, så tidiga eller sena promenader är behagligare än mitt på dagen. Vinterdagar kan vara milda i solen, medan kvällar och skuggiga inomhusmiljöer känns svalare. Vår och höst passar ofta bra för vandring, men den aktuella prognosen bör styra planen.'
          )
        },
        {
          q: l(
            'Which walks start near the village?',
            'Welche Wanderungen beginnen nahe dem Dorf?',
            '¿Qué rutas empiezan cerca del pueblo?',
            'Welke wandelingen beginnen bij het dorp?',
            'Vilka vandringar börjar nära byn?'
          ),
          a: l(
            'Routes towards El Fuerte and the direction of El Acebuchal are among the best-known options. They are not extensions of an old-town stroll: distance, ascent, exposure, and route conditions require suitable footwear, water, weather checks, and a route matched to your experience.',
            'Routen Richtung El Fuerte und El Acebuchal gehören zu den bekanntesten Möglichkeiten. Sie sind keine bloße Verlängerung eines Altstadtspaziergangs: Distanz, Aufstieg, ausgesetzte Passagen und Wegezustand erfordern passende Schuhe, Wasser, Wetterprüfung und eine Route, die zu eurer Erfahrung passt.',
            'Las rutas hacia El Fuerte y en dirección a El Acebuchal son de las más conocidas. No son una prolongación de un paseo por el casco histórico: distancia, desnivel, exposición y estado del camino requieren calzado adecuado, agua, consulta del tiempo y una ruta acorde a vuestra experiencia.',
            'Routes richting El Fuerte en El Acebuchal behoren tot de bekendste mogelijkheden. Het zijn geen verlengstukken van een wandeling door de oude kern: afstand, stijging, blootstelling en toestand van het pad vragen geschikt schoeisel, water, een weercheck en een route die past bij jullie ervaring.',
            'Leder mot El Fuerte och i riktning mot El Acebuchal hör till de mest kända alternativen. De är inte en förlängning av en promenad i gamla stan: avstånd, stigning, utsatt terräng och ledens skick kräver lämpliga skor, vatten, väderkontroll och en rutt som passar er erfarenhet.'
          )
        },
        {
          q: l(
            'What should I keep in mind for a safe visit?',
            'Was sollte ich für einen sicheren Besuch beachten?',
            '¿Qué conviene tener en cuenta para una visita segura?',
            'Waar moet ik op letten voor een veilig bezoek?',
            'Vad bör jag tänka på för ett säkert besök?'
          ),
          a: l(
            'Use normal travel precautions, keep valuables secure, and pay particular attention to the physical setting: polished or uneven paving, stairs, summer heat, and mountain conditions. For hikes, tell someone your route and avoid starting without enough daylight, water, and an up-to-date forecast.',
            'Es gelten die üblichen Reisevorkehrungen; bewahrt Wertsachen sicher auf und achtet besonders auf die Umgebung: glattes oder unebenes Pflaster, Treppen, Sommerhitze und Bedingungen in den Bergen. Informiert bei Wanderungen jemanden über eure Route und startet nicht ohne genügend Tageslicht, Wasser und aktuelle Wetterprognose.',
            'Aplicad las precauciones habituales de viaje, guardad bien los objetos de valor y prestad especial atención al entorno físico: pavimento pulido o irregular, escaleras, calor estival y condiciones de montaña. Para una ruta, comunicad el itinerario y no salgáis sin luz suficiente, agua y una previsión actualizada.',
            'Neem de gebruikelijke reisvoorzorgen, houd waardevolle spullen veilig en let vooral op de fysieke omgeving: gladde of ongelijke bestrating, trappen, zomerhitte en omstandigheden in de bergen. Laat bij een wandeling jullie route weten en vertrek niet zonder voldoende daglicht, water en een actuele verwachting.',
            'Följ vanliga försiktighetsåtgärder, förvara värdesaker säkert och var särskilt uppmärksam på den fysiska miljön: blank eller ojämn stenläggning, trappor, sommarvärme och bergsförhållanden. Berätta er rutt för någon inför en vandring och starta inte utan tillräckligt dagsljus, vatten och aktuell prognos.'
          )
        }
      ]
    }
  ],
  liveInfo: {
    eyebrow: l(
      'Live information',
      'Aktuelle Informationen',
      'Información actual',
      'Actuele informatie',
      'Aktuell information'
    ),
    title: l(
      'Confirm details at the source',
      'Details direkt an der Quelle prüfen',
      'Confirmad los detalles en la fuente',
      'Controleer details bij de bron',
      'Bekräfta uppgifter vid källan'
    ),
    intro: l(
      'Schedules, opening hours, events, and route conditions change. These official sources are the right final check before you set out.',
      'Fahrpläne, Öffnungszeiten, Veranstaltungen und Wegebedingungen ändern sich. Diese offiziellen Quellen sind die richtige letzte Prüfung vor dem Aufbruch.',
      'Los horarios, aperturas, eventos y condiciones de las rutas cambian. Estas fuentes oficiales son la comprobación final adecuada antes de salir.',
      'Dienstregelingen, openingstijden, evenementen en routeomstandigheden veranderen. Deze officiële bronnen zijn de juiste laatste controle voor vertrek.',
      'Tidtabeller, öppettider, evenemang och ledförhållanden ändras. Dessa officiella källor är rätt sista kontroll före avfärd.'
    ),
    checked: l(
      'Source review: July 2026',
      'Quellen geprüft: Juli 2026',
      'Fuentes revisadas: julio de 2026',
      'Bronnen gecontroleerd: juli 2026',
      'Källor granskade: juli 2026'
    ),
    links: [
      {
        key: 'officialBusSchedule',
        label: l(
          'Official Nerja–Frigiliana bus timetable',
          'Offizieller Busfahrplan Nerja–Frigiliana',
          'Horario oficial del autobús Nerja–Frigiliana',
          'Officiële dienstregeling Nerja–Frigiliana',
          'Officiell busstidtabell Nerja–Frigiliana'
        ),
        text: l(
          'Check weekday, Sunday, holiday, and seasonal services.',
          'Werktags-, Sonntags-, Feiertags- und Saisonverbindungen prüfen.',
          'Consultad los servicios laborables, dominicales, festivos y estacionales.',
          'Controleer weekdagen, zondagen, feestdagen en seizoensdiensten.',
          'Kontrollera vardags-, söndags-, helgdags- och säsongstrafik.'
        )
      },
      {
        key: 'officialTourism',
        label: l(
          'Official Frigiliana tourism information',
          'Offizielle Tourismusinformation Frigiliana',
          'Información turística oficial de Frigiliana',
          'Officiële toeristische informatie van Frigiliana',
          'Officiell turistinformation för Frigiliana'
        ),
        text: l(
          'Use for current visitor information, maps, monuments, and local contacts.',
          'Für aktuelle Besucherinformationen, Karten, Sehenswürdigkeiten und lokale Kontakte.',
          'Para información actual, mapas, monumentos y contactos locales.',
          'Voor actuele bezoekersinformatie, kaarten, monumenten en lokale contacten.',
          'För aktuell besöksinformation, kartor, sevärdheter och lokala kontakter.'
        )
      },
      {
        key: 'officialFestival2026',
        label: l(
          'Official 2026 festival announcement',
          'Offizielle Festivalankündigung 2026',
          'Anuncio oficial del festival de 2026',
          'Officiële festivalaankondiging 2026',
          'Officiellt festivalbesked 2026'
        ),
        text: l(
          'Confirms the 27–30 August dates for the 2026 edition.',
          'Bestätigt den 27. bis 30. August für die Ausgabe 2026.',
          'Confirma las fechas del 27 al 30 de agosto para la edición de 2026.',
          'Bevestigt 27 tot en met 30 augustus voor de editie van 2026.',
          'Bekräftar 27–30 augusti för 2026 års upplaga.'
        )
      },
      {
        key: 'officialTrails',
        label: l(
          'Official Frigiliana trail guide',
          'Offizieller Wanderführer Frigiliana',
          'Guía oficial de senderos de Frigiliana',
          'Officiële wandelgids van Frigiliana',
          'Officiell vandringsguide för Frigiliana'
        ),
        text: l(
          'Use as orientation and still check current weather and route conditions.',
          'Zur Orientierung nutzen und zusätzlich Wetter und aktuellen Wegezustand prüfen.',
          'Utilizadla para orientaros y comprobad además el tiempo y el estado actual de las rutas.',
          'Gebruik als oriëntatie en controleer daarnaast weer en actuele routecondities.',
          'Använd som vägledning och kontrollera även väder och aktuellt ledskick.'
        )
      }
    ]
  },
  related: {
    title: l('Continue planning', 'Weiter planen', 'Seguid planificando', 'Plan verder', 'Fortsätt planera'),
    links: [
      {
        token: 'getting_to_frigiliana',
        label: l('Getting to Frigiliana', 'Anreise nach Frigiliana', 'Cómo llegar a Frigiliana', 'Naar Frigiliana reizen', 'Resa till Frigiliana')
      },
      {
        token: 'frigiliana_parking',
        label: l('Parking guide', 'Parkguide', 'Guía de aparcamiento', 'Parkeergids', 'Parkeringsguide')
      },
      {
        token: 'frigiliana_stairs',
        label: l('Streets, slopes & stairs', 'Gassen, Steigungen & Treppen', 'Calles, cuestas y escaleras', 'Straten, hellingen & trappen', 'Gränder, lutningar och trappor')
      },
      {
        token: 'frigiliana_market',
        label: l('Weekly market', 'Wochenmarkt', 'Mercado semanal', 'Weekmarkt', 'Veckomarknad')
      },
      {
        token: 'weather_frigiliana',
        label: l('Weather guide', 'Wetterguide', 'Guía del tiempo', 'Weergids', 'Väderguide')
      },
      {
        token: 'faq_general',
        label: l('AMARA stay FAQ', 'AMARA Aufenthalts-FAQ', 'FAQ de estancias AMARA', 'AMARA verblijfs-FAQ', 'AMARA boende-FAQ')
      }
    ]
  },
  closing: {
    title: l(
      'Know the terrain. Keep the plan flexible.',
      'Das Gelände kennen. Flexibel planen.',
      'Conoced el terreno. Mantened un plan flexible.',
      'Ken het terrein. Houd de planning flexibel.',
      'Känn terrängen. Behåll en flexibel plan.'
    ),
    lead: l(
      'Frigiliana is easier when you know the route, the final walk and the access conditions before you arrive.',
      'Frigiliana ist einfacher, wenn ihr Route, letzten Fußweg und Zugangsbedingungen vor der Ankunft kennt.',
      'Frigiliana resulta más sencilla cuando conocéis la ruta, el último tramo a pie y las condiciones de acceso antes de llegar.',
      'Frigiliana is eenvoudiger wanneer jullie de route, het laatste loopstuk en de toegang vóór aankomst kennen.',
      'Frigiliana är enklare när ni känner till resvägen, den sista promenaden och tillträdet före ankomst.'
    ),
    guideCta: l(
      'Explore Frigiliana',
      'Frigiliana entdecken',
      'Descubrir Frigiliana',
      'Ontdek Frigiliana',
      'Upptäck Frigiliana'
    ),
    stayCta: l(
      'View AMARA stays',
      'AMARA-Unterkünfte ansehen',
      'Ver alojamientos AMARA',
      'Bekijk AMARA-verblijven',
      'Se AMARA-boenden'
    )
  }
} as const;
