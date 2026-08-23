import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, Resolved } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';


/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });




const article = {
  datePublished: '2026-08-16',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

const sharedSources = {
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29053',
  aemet: 'https://www.aemet.es/es/eltiempo/prediccion/municipios/frigiliana-id29053',
  heritage: 'https://www.juntadeandalucia.es/boja/2015/23/26',
  naturalPark:
    'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/sierras-de-tejeda-almijara-y-alhama-2/255035'
};

export const frigilianaGeographySeo: AmaraAuthoringSeo = {
  version: '2026-08-21-frigiliana-geography-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Where Is Frigiliana? Málaga, Nerja & Sierra Almijara',
      description:
        'Understand Frigiliana’s hillside structure: Barribarto, Barribajo, Calle Real, El Ingenio and the Sierra Almijara context.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo liegt Frigiliana? Málaga, Nerja & Sierra Almijara',
      description:
        'Frigilianas Hangstruktur verstehen: Barribarto, Barribajo, Calle Real, El Ingenio und der Kontext der Sierra Almijara.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde está Frigiliana: Málaga, Nerja y Sierra Almijara',
      description:
        'Comprended la estructura en ladera de Frigiliana: Barribarto, Barribajo, calle Real, El Ingenio y el contexto de Sierra Almijara.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar ligt Frigiliana? Málaga, Nerja & Sierra Almijara',
      description:
        'Begrijp Frigiliana’s hellingstructuur: Barribarto, Barribajo, Calle Real, El Ingenio en de context van Sierra Almijara.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ligger Frigiliana? Málaga, Nerja & Sierra Almijara',
      description:
        'Förstå Frigilianas sluttning: Barribarto, Barribajo, Calle Real, El Ingenio och sammanhanget kring Sierra Almijara.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaGeographyContent = {
  navLabel: l("Geography & orientation", "Geografie & Orientierung", "Geografía y orientación", "Geografie & oriëntatie", "Geografi & orientering"),
  hero: {
    eyebrow: l("Frigiliana · Geography & orientation", "Frigiliana · Geografie & Orientierung", "Frigiliana · Geografía y orientación", "Frigiliana · Geografie & oriëntatie", "Frigiliana · Geografi & orientering"),
    title: l("Where is Frigiliana? Between Nerja and Sierra Almijara", "Wo liegt Frigiliana? Zwischen Nerja und Sierra Almijara", "¿Dónde está Frigiliana? Entre Nerja y la Sierra Almijara", "Waar ligt Frigiliana? Tussen Nerja en Sierra Almijara", "Var ligger Frigiliana? Mellan Nerja och Sierra Almijara"),
    standfirst: l("Frigiliana is a **40.49 km² hillside municipality in the Axarquía**. Its protected historic fabric is organised by the terrain: Barribajo follows the Calle Real axis, Barribarto occupies the medieval core above it, and El Ingenio separates the older settlement from later ridge development.", "Frigiliana ist eine **40,49 km² große Hanggemeinde in der Axarquía**. Das geschützte historische Gefüge folgt dem Relief: Barribajo liegt an der Achse der Calle Real, Barribarto bildet den mittelalterlichen Kern darüber, und El Ingenio trennt den älteren Ort von der späteren Bebauung auf dem Bergrücken.", "Frigiliana es un **municipio de ladera de 40,49 km² en la Axarquía**. Su conjunto histórico protegido responde al relieve: Barribajo sigue el eje de la calle Real, Barribarto ocupa el núcleo medieval por encima y El Ingenio separa el asentamiento antiguo de la expansión posterior sobre la loma.", "Frigiliana is een **hellinggemeente van 40,49 km² in de Axarquía**. Het beschermde historische weefsel volgt het reliëf: Barribajo ligt langs Calle Real, Barribarto vormt de middeleeuwse kern erboven en El Ingenio scheidt het oudere dorp van de latere uitbreiding op de kam.", "Frigiliana är en **sluttande kommun på 40,49 km² i Axarquía**. Den skyddade historiska strukturen följer reliefen: Barribajo ligger längs Calle Real, Barribarto bildar den medeltida kärnan ovanför och El Ingenio skiljer den äldre byn från senare bebyggelse på åsen."),
    note: l("Official datasets use 315–318 metres for the principal-settlement reference; neither figure is the altitude of every street.", "Amtliche Datensätze verwenden 315–318 Meter als Referenz für den Hauptort; keine der beiden Angaben gilt für jede Straße.", "Las fuentes oficiales utilizan 315–318 metros como referencia del núcleo principal; ninguna cifra representa todas las calles.", "Officiële bronnen gebruiken 315–318 meter als referentie voor de hoofdplaats; geen van beide waarden geldt voor elke straat.", "Officiella källor använder 315–318 meter som referens för huvudorten; ingen av siffrorna gäller varje gata."),
    updated: l("Published August 2026", "Veröffentlicht im August 2026", "Publicado en agosto de 2026", "Gepubliceerd in augustus 2026", "Publicerad i augusti 2026")
  },
  facts: [
    {
      label: l("Municipality", "Gemeindegebiet", "Municipio", "Gemeente", "Kommun"),
      value: l("40.49 km²", "40,49 km²", "40,49 km²", "40,49 km²", "40,49 km²")
    },
    {
      label: l("Official reference", "Amtlicher Bezug", "Referencia oficial", "Officiële referentie", "Officiell referens"),
      value: l("315–318 m · principal settlement", "315–318 m · Hauptort", "315–318 m · núcleo principal", "315–318 m · hoofdplaats", "315–318 m · huvudorten")
    },
    {
      label: l("Historic core", "Historischer Kern", "Núcleo histórico", "Historische kern", "Historisk kärna"),
      value: l("Barribarto · medieval origin", "Barribarto · mittelalterlicher Ursprung", "Barribarto · origen medieval", "Barribarto · middeleeuwse oorsprong", "Barribarto · medeltida ursprung")
    },
    {
      label: l("Natural-park context", "Naturparkkontext", "Contexto del parque", "Natuurparkcontext", "Naturparkskontext"),
      value: l("40,647.74 ha · wider protected landscape", "40.647,74 ha · größere Schutzlandschaft", "40.647,74 ha · paisaje protegido mayor", "40.647,74 ha · groter beschermd landschap", "40 647,74 ha · större skyddat landskap")
    }
  ],
  orientation: {
    eyebrow: l("Read the settlement as a sequence", "Den Ort als Abfolge lesen", "Leer el asentamiento como una secuencia", "Lees de nederzetting als een reeks", "Läs bebyggelsen som en följd"),
    title: l("Four anchors explain the village before any route begins", "Vier Anker erklären das Dorf vor jedem einzelnen Weg", "Cuatro referencias explican el pueblo antes de elegir una ruta", "Vier ankers verklaren het dorp vóór een afzonderlijke route", "Fyra ankare förklarar byn före varje enskild väg"),
    intro: l("The official heritage record gives a clearer mental map than a single elevation: later ridge development, El Ingenio, Calle Real and the medieval core form a connected uphill structure.", "Der amtliche Denkmalschutztext liefert die bessere mentale Karte als eine einzelne Höhenzahl: spätere Bebauung, El Ingenio, Calle Real und der mittelalterliche Kern bilden eine zusammenhängende Hangstruktur.", "El expediente patrimonial ofrece un mapa mental más útil que una sola cota: expansión posterior, El Ingenio, calle Real y núcleo medieval forman una estructura continua sobre la ladera.", "Het officiële erfgoeddossier geeft een betere mentale kaart dan één hoogte: latere uitbreiding, El Ingenio, Calle Real en de middeleeuwse kern vormen een verbonden hellingstructuur.", "Det officiella kulturmiljöunderlaget ger en bättre mental karta än en höjdsiffra: senare utbyggnad, El Ingenio, Calle Real och den medeltida kärnan bildar en sammanhängande sluttning."),
    items: [
      {
        label: l("Later settlement", "Späterer Ortsteil", "Expansión posterior", "Latere uitbreiding", "Senare utbyggnad"),
        value: l("South of El Ingenio · ridge between ravine and approach road", "Südlich von El Ingenio · Bergrücken zwischen Schlucht und Zufahrt", "Al sur de El Ingenio · loma entre barranco y carretera", "Ten zuiden van El Ingenio · kam tussen ravijn en toegangsweg", "Söder om El Ingenio · ås mellan ravin och tillfartsväg")
      },
      {
        label: l("Settlement hinge", "Siedlungsscharnier", "Bisagra urbana", "Scharnierpunt", "Bebyggelsens gångjärn"),
        value: l("El Ingenio · transition between older and later fabric", "El Ingenio · Übergang zwischen älterem und späterem Gefüge", "El Ingenio · transición entre tejido antiguo y posterior", "El Ingenio · overgang tussen ouder en later weefsel", "El Ingenio · övergång mellan äldre och senare struktur")
      },
      {
        label: l("Historic axis", "Historische Achse", "Eje histórico", "Historische as", "Historisk axel"),
        value: l("Barribajo · organised along Calle Real", "Barribajo · entlang der Calle Real organisiert", "Barribajo · organizado a lo largo de la calle Real", "Barribajo · georganiseerd langs Calle Real", "Barribajo · organiserat längs Calle Real")
      },
      {
        label: l("Medieval origin", "Mittelalterlicher Ursprung", "Origen medieval", "Middeleeuwse oorsprong", "Medeltida ursprung"),
        value: l("Barribarto · castle-hill core", "Barribarto · Kern am Burghügel", "Barribarto · núcleo de la colina del castillo", "Barribarto · kern op de kasteelheuvel", "Barribarto · kärnan på borgkullen")
      }
    ]
  },
  sections: [
    {
      id: "hillside-village",
      eyebrow: l("The hillside village", "Das Dorf am Hang", "El pueblo en ladera", "Het dorp tegen de helling", "Byn på sluttningen"),
      title: l("Frigiliana climbs rather than spreading evenly", "Frigiliana steigt an, statt sich gleichmäßig auszubreiten", "Frigiliana asciende en vez de extenderse de forma uniforme", "Frigiliana klimt in plaats van zich gelijkmatig uit te spreiden", "Frigiliana klättrar i stället för att breda ut sig jämnt"),
      paragraphs: [
        l("The physical village sits on a slope between lower terrain and the Sierra Almijara. Streets follow the hillside, buildings occupy successive levels and many connections between them are steep or stepped rather than level.", "Der bebaute Ort liegt an einem Hang zwischen tieferem Gelände und Sierra Almijara. Die Gassen folgen dem Hang, die Häuser besetzen aufeinanderfolgende Ebenen und viele Verbindungen dazwischen sind steil oder gestuft statt eben.", "El núcleo urbano ocupa una pendiente entre el terreno inferior y la Sierra Almijara. Las calles siguen la ladera, los edificios se reparten entre cotas sucesivas y muchas conexiones son empinadas o escalonadas, no llanas.", "De bebouwde kom ligt op een helling tussen lager terrein en de Sierra Almijara. Straten volgen de helling, gebouwen liggen op opeenvolgende niveaus en veel verbindingen zijn steil of getrapt in plaats van vlak.", "Den bebyggda byn ligger på en sluttning mellan lägre terräng och Sierra Almijara. Gatorna följer sluttningen, husen ligger på nivåer ovanför varandra och många förbindelser är branta eller trappade snarare än plana."),
        l("That form is the reason distance alone is incomplete. A destination may be close in plan while the route still gains height quickly; the same return walk can feel different depending on whether it runs downhill or back up through the village.", "Deshalb reicht Entfernung allein als Maß nicht aus. Ein Ziel kann im Grundriss nahe liegen und der Weg trotzdem rasch Höhe gewinnen; derselbe Rückweg wirkt unterschiedlich, je nachdem ob er bergab oder wieder durch das Dorf hinauf führt.", "Por eso la distancia no basta para medir un recorrido. Un destino puede parecer cercano en planta y exigir una subida rápida; el mismo camino de vuelta cambia mucho según discurra cuesta abajo o regrese hacia arriba por el pueblo.", "Daarom vertelt afstand alleen niet het hele verhaal. Een bestemming kan op de plattegrond dichtbij liggen terwijl de route snel hoogte wint; dezelfde terugweg voelt anders als die daalt of juist weer door het dorp omhoog gaat.", "Därför räcker avståndet inte som mått. Ett mål kan ligga nära på kartan samtidigt som vägen snabbt vinner höjd; samma väg tillbaka känns olika beroende på om den går nedför eller åter upp genom byn.")
      ]
    },
    {
      id: "historic-quarter",
      eyebrow: l("The historic quarter", "Die Altstadt", "El casco histórico", "De historische kern", "Den historiska byn"),
      title: l("El Ingenio, Calle Real and Barribarto explain the historic structure", "El Ingenio, Calle Real und Barribarto erklären die historische Struktur", "El Ingenio, calle Real y Barribarto explican la estructura histórica", "El Ingenio, Calle Real en Barribarto verklaren de historische structuur", "El Ingenio, Calle Real och Barribarto förklarar den historiska strukturen"),
      paragraphs: [
        l("The protected-ensemble record identifies Barribarto as the original medieval core around the castle hill and Barribajo as the fabric organised along Calle Real. El Ingenio stands between this older settlement and the later southern expansion.", "Der geschützte Ensembletext bezeichnet Barribarto als ursprünglichen mittelalterlichen Kern am Burghügel und Barribajo als Bebauung entlang der Calle Real. El Ingenio steht zwischen diesem älteren Ort und der späteren Erweiterung nach Süden.", "El expediente del conjunto protegido identifica Barribarto como núcleo medieval original en torno a la colina del castillo y Barribajo como el tejido organizado por la calle Real. El Ingenio queda entre este asentamiento antiguo y la ampliación posterior hacia el sur.", "Het beschermde-ensembledossier benoemt Barribarto als de oorspronkelijke middeleeuwse kern rond de kasteelheuvel en Barribajo als het weefsel langs Calle Real. El Ingenio ligt tussen dit oudere dorp en de latere uitbreiding naar het zuiden.", "Underlaget för det skyddade området beskriver Barribarto som den ursprungliga medeltida kärnan kring borgkullen och Barribajo som strukturen längs Calle Real. El Ingenio ligger mellan denna äldre by och den senare utvidgningen söderut."),
        l("Main streets tend to follow the contours; smaller transverse streets take steeper lines and many include steps.", "Die Hauptgassen folgen eher den Höhenlinien; kleinere Querverbindungen nehmen steilere Linien und enthalten häufig Stufen.", "Las calles principales tienden a seguir las curvas de nivel; las conexiones transversales son más pronunciadas y muchas tienen escalones.", "Hoofdstraten volgen meestal de hoogtelijnen; dwarsverbindingen zijn steiler en hebben vaak trappen. Dat is een gedocumenteerd patroon, geen uitspraak over de toegang tot elk adres.", "Huvudgator följer oftast höjdkurvorna; tvärförbindelser är brantare och har ofta trappor. Det är ett dokumenterat mönster, inte ett påstående om tillträdet till varje adress.")
      ]
    },
    {
      id: "lower-landscape",
      eyebrow: l("The later settlement", "Der spätere Ortsteil", "La ampliación posterior", "De latere uitbreiding", "Den senare utbyggnaden"),
      title: l("The village continues south on a ridge, not on one level plane", "Frigiliana setzt sich nach Süden auf einem Bergrücken fort", "Frigiliana continúa hacia el sur sobre una loma", "Frigiliana loopt zuidwaarts door over een bergrug", "Frigiliana fortsätter söderut på en ås"),
      paragraphs: [
        l("The official heritage description places the later part of Frigiliana south of El Ingenio on the ridge between the Higuerón ravine and the approach road. The built village therefore has more than an “upper old town” and a “lower village”.", "Die amtliche Beschreibung verortet den späteren Teil Frigilianas südlich von El Ingenio auf dem Bergrücken zwischen der Schlucht des Higuerón und der Zufahrtsstraße. Der bebaute Ort besteht deshalb aus mehr als „oberer Altstadt“ und „Unterdorf“.", "La descripción oficial sitúa la parte posterior de Frigiliana al sur de El Ingenio, sobre la loma entre el barranco del Higuerón y la carretera de acceso. El pueblo construido es, por tanto, más complejo que una simple oposición entre casco alto y zona baja.", "De officiële beschrijving plaatst het latere deel van Frigiliana ten zuiden van El Ingenio op de kam tussen het Higuerónravijn en de toegangsweg. Het bebouwde dorp is dus complexer dan alleen een hoge oude kern en een laag dorp.", "Den officiella beskrivningen placerar Frigilianas senare del söder om El Ingenio på åsen mellan Higuerónravinen och tillfartsvägen. Den byggda byn är därför mer komplex än en enkel övre gammal by och nedre stadsdel."),
        l("This distinction is useful for orientation, but it does not prove an exact gradient, step count or vehicle route for an accommodation. Those require address-level evidence.", "Diese Unterscheidung hilft bei der Orientierung, beweist aber weder Gefälle noch Stufenzahl oder Fahrzeugroute einer Unterkunft. Dafür braucht es adressgenaue Daten.", "Esta distinción orienta, pero no demuestra la pendiente, el número de escalones ni el acceso en vehículo de un alojamiento concreto. Eso exige pruebas por dirección.", "Dit helpt bij oriëntatie, maar bewijst geen helling, aantal treden of voertuigroute voor een accommodatie. Daarvoor is adresgebonden bewijs nodig.", "Det hjälper orienteringen men bevisar inte lutning, antal trappsteg eller bilväg till ett boende. Det kräver adressbunden dokumentation.")
      ]
    },
    {
      id: "sierra-almijara",
      eyebrow: l("The Sierra Almijara", "Die Sierra Almijara", "La Sierra Almijara", "De Sierra Almijara", "Sierra Almijara"),
      title: l("The village belongs to a much larger mountain context", "Das Dorf gehört zu einem wesentlich größeren Gebirgskontext", "El pueblo forma parte de un contexto montañoso mucho mayor", "Het dorp maakt deel uit van een veel grotere bergcontext", "Byn ingår i ett mycket större bergssammanhang"),
      paragraphs: [
        l("Frigiliana is one of the municipalities associated with the Sierras de Tejeda, Almijara y Alhama Natural Park on the Málaga side of the Axarquía. The protected landscape covers 40,647.74 hectares.", "Frigiliana gehört zu den Gemeinden im Umfeld des Naturparks Sierras de Tejeda, Almijara y Alhama auf der Málaga-Seite der Axarquía. Die geschützte Landschaft umfasst 40.647,74 Hektar.", "Frigiliana figura entre los municipios vinculados al Parque Natural Sierras de Tejeda, Almijara y Alhama en la vertiente malagueña de la Axarquía. El paisaje protegido abarca 40.647,74 hectáreas.", "Frigiliana is een van de gemeenten die verbonden zijn met het natuurpark Sierras de Tejeda, Almijara y Alhama aan de Málaga-zijde van de Axarquía. Het beschermde landschap beslaat 40.647,74 hectare.", "Frigiliana är en av kommunerna med anknytning till naturparken Sierras de Tejeda, Almijara y Alhama på Málagasidan av Axarquía. Det skyddade landskapet omfattar 40 647,74 hektar."),
        l("That establishes the mountain context, not that every street or the entire municipality lies inside the protected boundary. Public orientation should keep the village, municipality and park as three related but distinct geographies.", "Damit ist der Gebirgskontext belegt, nicht aber, dass jede Straße oder das gesamte Gemeindegebiet innerhalb der Schutzgrenze liegt. Ort, Gemeinde und Naturpark bleiben drei verbundene, aber unterschiedliche Räume.", "Esto acredita el contexto montañoso, no que todas las calles o todo el municipio estén dentro del límite protegido. Pueblo, término municipal y parque son geografías relacionadas, pero distintas.", "Dat bevestigt de bergcontext, niet dat elke straat of de hele gemeente binnen de beschermde grens ligt. Dorp, gemeente en park blijven drie verwante maar verschillende geografieën.", "Det bekräftar bergskontexten, inte att varje gata eller hela kommunen ligger inom skyddsgränsen. By, kommun och park är tre närliggande men skilda geografier.")
      ]
    },
    {
      id: "what-it-means",
      eyebrow: l("What it means for a stay", "Was das für den Aufenthalt bedeutet", "Qué significa para una estancia", "Wat dit betekent voor een verblijf", "Vad det betyder för en vistelse"),
      title: l("A daily route is distance plus elevation and steps", "Ein Alltagsweg besteht aus Entfernung, Höhe und Stufen", "Un recorrido diario suma distancia, desnivel y escalones", "Een dagelijkse route is afstand plus hoogteverschil en trappen", "En vardagsväg är avstånd plus höjdskillnad och trappor"),
      paragraphs: [
        l("In Frigiliana, a short map distance does not fully describe the walk. Elevation, steps and repeated climbs matter, especially when a route is made several times a day or with luggage, shopping or a pushchair.", "In Frigiliana beschreibt eine kurze Kartenentfernung den Fußweg nicht vollständig. Höhenunterschied, Treppen und wiederholte Anstiege zählen, besonders wenn ihr einen Weg mehrmals täglich oder mit Gepäck, Einkäufen oder Kinderwagen geht.", "En Frigiliana, una distancia corta en el mapa no describe por completo el paseo. Cuentan el desnivel, las escaleras y las subidas repetidas, sobre todo si se hace el trayecto varias veces al día o con equipaje, compra o carrito.", "In Frigiliana beschrijft een korte afstand op de kaart de wandeling niet volledig. Hoogteverschil, trappen en herhaalde beklimmingen tellen mee, vooral als jullie een route meerdere keren per dag lopen of met bagage, boodschappen of een kinderwagen.", "I Frigiliana beskriver ett kort kartavstånd inte hela promenaden. Höjdskillnad, trappor och upprepade stigningar spelar roll, särskilt när vägen gås flera gånger om dagen eller med bagage, inköp eller barnvagn."),
        l("Geography explains why locations feel different; it does not choose one for you. For the detailed comparison of lower historic streets, Barribarto, the lower village and countryside, continue to the Where to Stay guide.", "Die Geografie erklärt, warum sich Lagen unterscheiden; sie wählt keine für euch aus. Den detaillierten Vergleich zwischen unteren Altstadtgassen, Barribarto, Unterdorf und Umgebung findet ihr im Guide „Wo übernachten“.", "La geografía explica por qué las zonas se viven de manera distinta, pero no elige una por vosotros. La comparación detallada entre el casco histórico bajo, Barribarto, la parte baja y el campo corresponde a la guía Dónde alojarse.", "Geografie verklaart waarom locaties anders aanvoelen, maar kiest er geen voor jullie. Voor de gedetailleerde vergelijking van de lagere historische straten, Barribarto, het benedendorp en het buitengebied gaan jullie verder naar de gids Waar overnachten.", "Geografin förklarar varför olika lägen känns olika, men väljer inget åt er. För en detaljerad jämförelse mellan de lägre historiska gatorna, Barribarto, den nedre bydelen och landsbygden går ni vidare till guiden Var ska man bo.")
      ]
    }
  ],
  related: {
    eyebrow: l("Continue", "Weiterlesen", "Continuar", "Lees verder", "Läs vidare"),
    title: l("Turn the hillside into a practical plan", "Vom Hang zum praktischen Plan", "Convertir la ladera en un plan práctico", "Van de helling naar een praktisch plan", "Från sluttningen till en praktisk plan"),
    links: [
      {
        token: "getting_to_frigiliana" as LinkToken,
        label: l("Arrival & mobility", "Anreise & Mobilität", "Llegada y movilidad", "Aankomst & mobiliteit", "Ankomst & mobilitet"),
        text: l("How the road, bus and final approach connect with the village terrain.", "Wie Straße, Bus und letzte Etappe mit dem Dorfrelief zusammenspielen.", "Cómo encajan la carretera, el autobús y la aproximación final con el relieve.", "Hoe weg, bus en laatste benadering aansluiten op het dorpsreliëf.", "Hur väg, buss och sista infart möter byns relief.")
      },
      {
        token: "frigiliana_stairs" as LinkToken,
        label: l("Where to stay / areas", "Wo übernachten / Lagen", "Dónde alojarse / zonas", "Waar overnachten / gebieden", "Var ska man bo / områden"),
        text: l("Compare Frigiliana’s location models, daily climbs and access trade-offs.", "Frigilianas Lagemodelle, Alltagsanstiege und Zugänge im Vergleich.", "Comparad modelos de ubicación, subidas diarias y condiciones de acceso.", "Vergelijk liggingen, dagelijkse beklimmingen en bereikbaarheid.", "Jämför lägen, vardagsstigningar och förutsättningar för tillträde.")
      }
    ]
  },
  sources: {
    eyebrow: l("Behind this guide", "Belege hinter dem Guide", "Fuentes de la guía", "Bronnen van deze gids", "Källorna bakom guiden"),
    title: l("Official geographic references", "Amtliche geografische Referenzen", "Referencias geográficas oficiales", "Officiële geografische referenties", "Officiella geografiska referenser"),
    intro: l("SIMA and AEMET provide the municipal and principal-settlement references. The protected-ensemble decree supplies the settlement morphology; the Junta visitor record supplies the wider natural-park context.", "SIMA und AEMET liefern Gemeinde- und Hauptortreferenzen. Das Dekret zum historischen Ensemble beschreibt die Siedlungsstruktur; der Besucher-Datensatz der Junta belegt den größeren Naturparkkontext.", "SIMA y AEMET aportan las referencias municipales y del núcleo principal. El decreto del conjunto histórico documenta la morfología urbana; la Junta aporta el contexto del parque natural.", "SIMA en AEMET leveren de gemeente- en hoofdplaatsreferenties. Het beschermingsbesluit beschrijft de nederzettingsstructuur; de Junta levert de bredere natuurparkcontext.", "SIMA och AEMET ger kommun- och huvudortsreferenserna. Beslutet om det historiska området beskriver bebyggelsens struktur; Junta de Andalucía ger naturparkens större sammanhang."),
    checked: l("Sources checked in August 2026.", "Quellen geprüft im August 2026.", "Fuentes comprobadas en agosto de 2026.", "Bronnen gecontroleerd in augustus 2026.", "Källor kontrollerade i augusti 2026."),
    links: [
      {
        label: l("SIMA · Frigiliana", "SIMA · Frigiliana", "SIMA · Frigiliana", "SIMA · Frigiliana", "SIMA · Frigiliana"),
        text: l("Official municipal area and principal-settlement reference.", "Amtliche Gemeindefläche und Hauptortreferenz.", "Superficie municipal y referencia del núcleo principal.", "Officiële gemeenteoppervlakte en hoofdplaatsreferentie.", "Officiell kommunyta och huvudortsreferens."),
        href: "https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29053"
      },
      {
        label: l("AEMET · Frigiliana", "AEMET · Frigiliana", "AEMET · Frigiliana", "AEMET · Frigiliana", "AEMET · Frigiliana"),
        text: l("Official forecast reference and warning that municipal altitude can vary.", "Amtliche Wetterreferenz und Hinweis auf Höhenunterschiede innerhalb einer Gemeinde.", "Referencia oficial y advertencia sobre variación de altitud municipal.", "Officiële referentie en waarschuwing over hoogteverschillen binnen de gemeente.", "Officiell referens och varning om höjdskillnader inom kommunen."),
        href: "https://www.aemet.es/es/eltiempo/prediccion/municipios/frigiliana-id29053"
      },
      {
        label: l("BOJA · Historic ensemble", "BOJA · Historisches Ensemble", "BOJA · Conjunto histórico", "BOJA · Historisch ensemble", "BOJA · Historiskt område"),
        text: l("Official morphology of Barribarto, Barribajo, El Ingenio and the later expansion.", "Amtliche Struktur von Barribarto, Barribajo, El Ingenio und der späteren Erweiterung.", "Morfología oficial de Barribarto, Barribajo, El Ingenio y la ampliación posterior.", "Officiële morfologie van Barribarto, Barribajo, El Ingenio en de latere uitbreiding.", "Officiell morfologi för Barribarto, Barribajo, El Ingenio och senare utbyggnad."),
        href: "https://www.juntadeandalucia.es/boja/2015/23/26"
      },
      {
        label: l("Junta de Andalucía · Natural Park", "Junta de Andalucía · Naturpark", "Junta de Andalucía · Parque Natural", "Junta de Andalucía · Natuurpark", "Junta de Andalucía · Naturpark"),
        text: l("Official protected-area extent and municipality context.", "Amtliche Fläche des Schutzgebiets und Gemeindekontext.", "Extensión oficial del espacio protegido y contexto municipal.", "Officiële omvang van het beschermde gebied en gemeentecontext.", "Officiell omfattning och kommunalt sammanhang."),
        href: "https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/sierras-de-tejeda-almijara-y-alhama-2/255035"
      }
    ]
  },
  closing: {
    eyebrow: l("Next step", "Nächster Schritt", "Siguiente paso", "Volgende stap", "Nästa steg"),
    title: l("Plan the climb before it becomes the daily route.", "Plant den Anstieg, bevor er zum täglichen Weg wird.", "Planificad la subida antes de convertirla en el recorrido diario.", "Plan de klim voordat die de dagelijkse route wordt.", "Planera stigningen innan den blir vardagsvägen."),
    body: l("Use the geography to understand the village, then choose the arrival and stay pattern that fits your days.", "Nutzt die Geografie, um das Dorf zu verstehen, und wählt danach Anreise und Lage passend zu euren Tagen.", "Usad la geografía para entender el pueblo y elegid después una llegada y una zona acordes con vuestros días.", "Gebruik de geografie om het dorp te begrijpen en kies daarna de aankomst en ligging die bij jullie dagen passen.", "Använd geografin för att förstå byn och välj sedan ankomst och läge som passar era dagar."),
    arrivalLabel: l("Plan arrival & mobility", "Anreise & Mobilität planen", "Planificar llegada y movilidad", "Plan aankomst & mobiliteit", "Planera ankomst & mobilitet"),
    stayLabel: l("Compare where to stay", "Lagen vergleichen", "Comparar dónde alojarse", "Vergelijk waar te verblijven", "Jämför var ni ska bo")
  }
};

/**
 * Leaf-localized copy: the page is described once and every authored string
 * carries its five locales (`DR-CONTENT-STRUCT-001`). A page resolves the whole
 * tree at its boundary with `resolveLocale`, so the renderers below it keep
 * receiving plain strings.
 */
export type FrigilianaGeographyLocale = Resolved<typeof frigilianaGeographyContent>;
export type FrigilianaGeographySection = FrigilianaGeographyLocale['sections'][number];
