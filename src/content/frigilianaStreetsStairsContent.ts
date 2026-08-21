import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { stayCollectionLabels } from './stayCollectionLabels';

type LocalizedText = Record<AmaraLanguage, string>;

export const frigilianaStreetsStairsSeo: AmaraAuthoringSeo = {
  version: '2026-08-21-frigiliana-micro-location-v3.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/08-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Where to Stay in Frigiliana | Village Areas & Access',
      description:
        'Compare Frigiliana’s historic centre, upper village, lower village and countryside, including slopes, access and daily walking.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wo in Frigiliana übernachten | Lagen & Zugänge',
      description:
        'Vergleicht Altstadt, oberen und unteren Ort sowie die Umgebung von Frigiliana – mit Wegen, Steigungen, Zufahrt und Alltag.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Dónde alojarse en Frigiliana | Zonas y accesos',
      description:
        'Comparad el casco histórico, la zona alta, la parte baja y el entorno rural de Frigiliana: cuestas, accesos y recorridos diarios.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Waar overnachten in Frigiliana | Buurten & toegang',
      description:
        'Vergelijk de historische kern, het hogere en lagere dorp en het buitengebied van Frigiliana, inclusief hellingen en dagelijkse routes.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Var ska man bo i Frigiliana | Områden & vägar',
      description:
        'Jämför Frigilianas historiska centrum, övre och nedre bydelar samt landsbygden – med lutningar, tillfart och vardagsvägar.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaStreetsStairsCopy = {
  nav: {
    brand: {
      en: 'Frigiliana',
      de: 'Frigiliana',
      es: 'Frigiliana',
      nl: 'Frigiliana',
      sv: 'Frigiliana'
    } satisfies LocalizedText,
    links: [
      {
        token: 'location_frigiliana',
        label: {
          en: 'Frigiliana',
          de: 'Frigiliana',
          es: 'Frigiliana',
          nl: 'Frigiliana',
          sv: 'Frigiliana'
        } satisfies LocalizedText
      },
      {
        token: 'frigiliana_stairs',
        label: {
          en: 'Streets & stairs',
          de: 'Gassen & Treppen',
          es: 'Calles y escaleras',
          nl: 'Straten & trappen',
          sv: 'Gränder & trappor'
        } satisfies LocalizedText
      },
      {
        token: 'frigiliana_parking',
        label: {
          en: 'Parking',
          de: 'Parken',
          es: 'Aparcamiento',
          nl: 'Parkeren',
          sv: 'Parkering'
        } satisfies LocalizedText
      }
    ]
  },
  hero: {
    eyebrow: {
      en: 'Where to stay',
      de: 'Die passende Lage',
      es: 'Dónde alojarse',
      nl: 'Waar overnachten',
      sv: 'Var ska man bo'
    } satisfies LocalizedText,
    title: {
      en: 'Where to stay in Frigiliana',
      de: 'Wo in Frigiliana übernachten?',
      es: 'Dónde alojarse en Frigiliana',
      nl: 'Waar overnachten in Frigiliana',
      sv: 'Var ska man bo i Frigiliana?'
    } satisfies LocalizedText,
    lead: {
      en: 'Frigiliana is compact on a map, but it rises up the hillside. A stay in the lower historic centre, high in Barribarto, in the newer lower village or out in the countryside creates a genuinely different holiday rhythm.',
      de: 'Auf der Karte wirkt Frigiliana kompakt, doch der Ort zieht sich den Hang hinauf. Ob ihr im unteren historischen Zentrum, oben im Barribarto, im neueren Unterdorf oder außerhalb im Grünen wohnt, verändert den Rhythmus eures Urlaubs spürbar.',
      es: 'Frigiliana parece compacta en el mapa, pero sube por la ladera. Alojarse en la parte baja del casco histórico, en lo alto del Barribarto, en la zona baja más moderna o en el campo crea formas muy distintas de vivir las vacaciones.',
      nl: 'Frigiliana lijkt compact op de kaart, maar klimt tegen de heuvel op. Een verblijf in de lagere historische kern, hoog in Barribarto, in het nieuwere benedendorp of buitenaf geeft de vakantie telkens een ander ritme.',
      sv: 'Frigiliana ser kompakt ut på kartan men klättrar uppför sluttningen. Att bo i den nedre historiska bykärnan, högt i Barribarto, i den modernare nedre bydelen eller ute på landsbygden ger helt olika semesterrytmer.'
    } satisfies LocalizedText,
    body: {
      en: 'The right choice depends on what you value most: old-village life outside the door, fewer repeated climbs, elevated atmosphere, simpler car use or more privacy and space.',
      de: 'Entscheidend ist, was euch wichtiger ist: Altstadtleben direkt vor der Tür, weniger wiederholte Anstiege, eine erhöhte historische Lage, ein praktischeres Verhältnis zum Auto oder mehr Rückzug und Raum.',
      es: 'La elección depende de lo que más valoréis: salir directamente al pueblo histórico, repetir menos cuestas, vivir en una zona elevada, moveros con más facilidad en coche o disfrutar de más espacio y privacidad.',
      nl: 'De juiste keuze hangt af van wat jullie belangrijk vinden: het oude dorp voor de deur, minder vaak klimmen, hoger tussen de historische straatjes wonen, een praktischere relatie met de auto of meer ruimte en privacy.',
      sv: 'Rätt val beror på vad ni värdesätter mest: den gamla byn utanför dörren, färre upprepade stigningar, ett högt historiskt läge, enklare vardag med bil eller mer avskildhet och utrymme.'
    } satisfies LocalizedText,
    primaryCta: {
      en: 'Compare locations',
      de: 'Lagen vergleichen',
      es: 'Comparar zonas',
      nl: 'Vergelijk de liggingen',
      sv: 'Jämför lägen'
    } satisfies LocalizedText,
    secondaryCta: {
      en: 'Test the daily route',
      de: 'Alltagsweg prüfen',
      es: 'Probar el recorrido diario',
      nl: 'Test de dagelijkse route',
      sv: 'Testa vardagsvägen'
    } satisfies LocalizedText,
    imageAlt: {
      en: 'Historic hillside streets in Frigiliana',
      de: 'Historische Gassen am Hang von Frigiliana',
      es: 'Calles históricas en la ladera de Frigiliana',
      nl: 'Historische straatjes tegen de heuvel in Frigiliana',
      sv: 'Historiska gränder på Frigilianas sluttning'
    } satisfies LocalizedText
  },
  principle: {
    eyebrow: {
      en: 'Why location matters',
      de: 'Warum die Lage zählt',
      es: 'Por qué importa la ubicación',
      nl: 'Waarom de ligging telt',
      sv: 'Därför spelar läget roll'
    } satisfies LocalizedText,
    title: {
      en: 'A short line on the map is only the beginning.',
      de: 'Eine kurze Linie auf der Karte ist nur der Anfang.',
      es: 'Una distancia corta en el mapa es solo el principio.',
      nl: 'Een korte lijn op de kaart is pas het begin.',
      sv: 'En kort linje på kartan är bara början.'
    } satisfies LocalizedText,
    body: {
      en: 'Frigiliana is walkable for many guests, but distance alone says little about an ordinary day. Elevation, steps, paving and the number of times you return all matter — after breakfast, with groceries, after the beach and again after dinner.',
      de: 'Viele Gäste können Frigiliana gut zu Fuß erleben, doch die Entfernung allein sagt wenig über einen normalen Urlaubstag aus. Höhenunterschied, Stufen, Pflaster und die Zahl eurer Rückwege zählen zusammen – nach dem Frühstück, mit Einkäufen, nach dem Strand und noch einmal nach dem Abendessen.',
      es: 'Muchos huéspedes recorren Frigiliana bien a pie, pero la distancia por sí sola dice poco sobre un día normal. Importan el desnivel, los escalones, el pavimento y cuántas veces volvéis: después del desayuno, con la compra, tras la playa y de nuevo después de cenar.',
      nl: 'Voor veel gasten is Frigiliana goed te voet te doen, maar afstand alleen zegt weinig over een gewone vakantiedag. Hoogteverschil, trappen, bestrating en het aantal terugwegen tellen samen: na het ontbijt, met boodschappen, na het strand en opnieuw na het diner.',
      sv: 'Många gäster kan uppleva Frigiliana bra till fots, men avståndet säger inte allt om en vanlig semesterdag. Höjdskillnad, trappor, stenläggning och antalet hemvägar spelar tillsammans roll – efter frukost, med inköp, efter stranden och igen efter middagen.'
    } satisfies LocalizedText
  },
  factors: {
    title: {
      en: 'Four things behind every route',
      de: 'Vier Faktoren hinter jedem Weg',
      es: 'Cuatro claves de cada recorrido',
      nl: 'Vier factoren achter elke route',
      sv: 'Fyra saker bakom varje väg'
    } satisfies LocalizedText,
    items: [
      {
        label: { en: 'Distance', de: 'Entfernung', es: 'Distancia', nl: 'Afstand', sv: 'Avstånd' } satisfies LocalizedText,
        value: { en: 'Not the whole story', de: 'Nur ein Teil', es: 'No lo cuenta todo', nl: 'Niet het hele verhaal', sv: 'Inte hela bilden' } satisfies LocalizedText,
        note: {
          en: 'A short route can still include a steep or stepped final section.',
          de: 'Auch ein kurzer Weg kann am Ende steil sein oder über Stufen führen.',
          es: 'Incluso un trayecto corto puede terminar en una cuesta o unas escaleras.',
          nl: 'Ook een korte route kan eindigen met een steile helling of trappen.',
          sv: 'Även en kort väg kan avslutas med en brant backe eller trappor.'
        } satisfies LocalizedText
      },
      {
        label: { en: 'Elevation', de: 'Höhenlage', es: 'Desnivel', nl: 'Hoogteverschil', sv: 'Höjdskillnad' } satisfies LocalizedText,
        value: { en: 'Shapes each return', de: 'Prägt jeden Rückweg', es: 'Marca cada regreso', nl: 'Bepaalt elke terugweg', sv: 'Märks på varje hemväg' } satisfies LocalizedText,
        note: {
          en: 'A climb feels different when it belongs to every outing.',
          de: 'Ein Anstieg fühlt sich anders an, wenn er zu jedem Weg gehört.',
          es: 'Una subida se vive de otra forma cuando forma parte de cada salida.',
          nl: 'Een klim voelt anders wanneer die bij ieder uitstapje hoort.',
          sv: 'En stigning känns annorlunda när den ingår i varje tur.'
        } satisfies LocalizedText
      },
      {
        label: { en: 'Surface', de: 'Untergrund', es: 'Superficie', nl: 'Ondergrond', sv: 'Underlag' } satisfies LocalizedText,
        value: { en: 'Cobbles & steps', de: 'Pflaster & Stufen', es: 'Empedrado y escalones', nl: 'Stenen & trappen', sv: 'Stenläggning & trappor' } satisfies LocalizedText,
        note: {
          en: 'Footwear, luggage wheels and mobility change how a route feels.',
          de: 'Schuhe, Gepäckrollen und Mobilität verändern, wie sich ein Weg anfühlt.',
          es: 'El calzado, las ruedas del equipaje y la movilidad cambian la experiencia.',
          nl: 'Schoenen, bagagewieltjes en mobiliteit veranderen hoe een route voelt.',
          sv: 'Skor, bagagehjul och rörlighet påverkar hur vägen känns.'
        } satisfies LocalizedText
      },
      {
        label: { en: 'Frequency', de: 'Häufigkeit', es: 'Frecuencia', nl: 'Frequentie', sv: 'Frekvens' } satisfies LocalizedText,
        value: { en: 'The everyday test', de: 'Der Alltagstest', es: 'La prueba diaria', nl: 'De dagelijkse test', sv: 'Vardagstestet' } satisfies LocalizedText,
        note: {
          en: 'One atmospheric walk is different from the third return of the day.',
          de: 'Ein stimmungsvoller Weg ist etwas anderes als der dritte Rückweg des Tages.',
          es: 'Un paseo con encanto no se siente igual que el tercer regreso del día.',
          nl: 'Eén sfeervolle wandeling is iets anders dan de derde terugweg van de dag.',
          sv: 'En stämningsfull promenad är något annat än dagens tredje hemväg.'
        } satisfies LocalizedText
      }
    ]
  },
  models: {
    eyebrow: {
      en: 'Four location models',
      de: 'Vier Arten zu wohnen',
      es: 'Cuatro formas de alojarse',
      nl: 'Vier soorten ligging',
      sv: 'Fyra sätt att bo'
    } satisfies LocalizedText,
    title: {
      en: 'Choose the rhythm, not a “best area”',
      de: 'Wählt den passenden Rhythmus, nicht das „beste Viertel“',
      es: 'Elegid el ritmo que os encaja, no una “zona mejor”',
      nl: 'Kies het passende ritme, niet de “beste buurt”',
      sv: 'Välj rätt rytm, inte det ”bästa området”'
    } satisfies LocalizedText,
    intro: {
      en: 'These are practical location types, not fixed neighbourhood boundaries. Conditions can change from one street or property entrance to the next.',
      de: 'Das sind praktische Lagetypen, keine festen Viertelgrenzen. Schon zwischen zwei Gassen oder Hauseingängen können sich die Bedingungen verändern.',
      es: 'Son tipos de ubicación útiles para decidir, no límites oficiales. Las condiciones pueden cambiar de una calle o una entrada a la siguiente.',
      nl: 'Dit zijn praktische soorten ligging, geen officiële buurtgrenzen. De situatie kan per straat of zelfs per ingang verschillen.',
      sv: 'Det här är praktiska lägestyper, inte fasta områdesgränser. Förutsättningarna kan skilja sig mellan två gränder eller entréer.'
    } satisfies LocalizedText,
    labels: {
      fit: { en: 'Best fit if', de: 'Passt gut, wenn', es: 'Encaja si', nl: 'Past goed als', sv: 'Passar om' } satisfies LocalizedText,
      daily: { en: 'Daily rhythm', de: 'Im Alltag', es: 'En el día a día', nl: 'In het dagelijks ritme', sv: 'I vardagen' } satisfies LocalizedText,
      tradeoff: { en: 'Keep in mind', de: 'Bedenkt dabei', es: 'Tened en cuenta', nl: 'Houd rekening met', sv: 'Tänk på' } satisfies LocalizedText
    },
    items: [
      {
        number: '01',
        title: {
          en: 'Lower historic centre',
          de: 'Unterer historischer Ortskern',
          es: 'Casco histórico bajo',
          nl: 'Lagere historische kern',
          sv: 'Nedre historiska bykärnan'
        } satisfies LocalizedText,
        summary: {
          en: 'Around Calle Real, Calle Chorruelo and San Antonio, you stay inside the historic village while remaining comparatively low within it.',
          de: 'Rund um Calle Real, Calle Chorruelo und San Antonio wohnt ihr mitten im historischen Dorf und zugleich vergleichsweise weit unten.',
          es: 'En torno a la calle Real, la calle Chorruelo y San Antonio estáis dentro del pueblo histórico, pero en una cota relativamente baja.',
          nl: 'Rond Calle Real, Calle Chorruelo en San Antonio verblijven jullie midden in het historische dorp, maar relatief laag.',
          sv: 'Kring Calle Real, Calle Chorruelo och San Antonio bor ni mitt i den historiska byn men jämförelsevis långt ner.'
        } satisfies LocalizedText,
        fit: {
          en: 'You want old-village life, restaurants and evening walks close to the door without choosing the highest daily position.',
          de: 'Ihr möchtet Altstadtleben, Restaurants und Abendspaziergänge vor der Tür, ohne euch für die höchste tägliche Lage zu entscheiden.',
          es: 'Queréis vida de pueblo, restaurantes y paseos nocturnos cerca, sin elegir la posición diaria más alta.',
          nl: 'Jullie willen het oude dorp, restaurants en avondwandelingen dichtbij, zonder voor de hoogste dagelijkse ligging te kiezen.',
          sv: 'Ni vill ha byliv, restauranger och kvällspromenader nära utan att välja det högsta vardagsläget.'
        } satisfies LocalizedText,
        daily: {
          en: 'Many outings begin on foot, and returns generally involve less climbing than from high in Barribarto.',
          de: 'Viele Wege beginnen zu Fuß; im Vergleich zu einer hohen Lage im Barribarto fällt bei den Rückwegen meist weniger Anstieg an.',
          es: 'Muchas salidas empiezan a pie y, frente a una ubicación alta en el Barribarto, los regresos suelen acumular menos subida.',
          nl: 'Veel uitstapjes beginnen te voet en terugkeren vraagt doorgaans minder klimwerk dan vanuit hoog Barribarto.',
          sv: 'Många turer börjar till fots och hemvägen innebär i regel mindre stigning än från högt uppe i Barribarto.'
        } satisfies LocalizedText,
        tradeoff: {
          en: 'Historic and lower do not mean flat or step-free. The exact street and entrance still determine the final route.',
          de: 'Historisch und weiter unten bedeutet weder eben noch stufenfrei. Die genaue Gasse und der Eingang bleiben entscheidend.',
          es: 'Histórico y bajo no significa llano ni sin escalones. La calle y la entrada exactas siguen siendo decisivas.',
          nl: 'Historisch en lager betekent niet vlak of trapvrij. De precieze straat en ingang blijven bepalend.',
          sv: 'Historiskt och längre ner betyder inte plant eller trappfritt. Exakt gränd och entré är fortfarande avgörande.'
        } satisfies LocalizedText
      },
      {
        number: '02',
        title: {
          en: 'Upper Barribarto',
          de: 'Oberes Barribarto',
          es: 'Barribarto alto',
          nl: 'Hoger Barribarto',
          sv: 'Övre Barribarto'
        } satisfies LocalizedText,
        summary: {
          en: 'The higher historic quarter places you deep among elevated lanes, old façades and views where the exact position opens them up.',
          de: 'Im oberen historischen Viertel wohnt ihr zwischen erhöhten Gassen und alten Fassaden; je nach genauer Lage öffnen sich weite Ausblicke.',
          es: 'La parte alta del barrio histórico os sitúa entre calles elevadas y fachadas antiguas, con vistas allí donde la ubicación concreta las permite.',
          nl: 'In de hogere historische wijk wonen jullie tussen oplopende straatjes en oude gevels, met uitzicht waar de precieze ligging dat biedt.',
          sv: 'I den övre historiska delen bor ni bland höga gränder och gamla fasader, med utsikt där det exakta läget öppnar för den.'
        } satisfies LocalizedText,
        fit: {
          en: 'Historic atmosphere and an elevated old-town position matter more to you than minimising repeated climbs.',
          de: 'Historische Atmosphäre und eine erhöhte Altstadtlage sind euch wichtiger als möglichst wenige wiederholte Anstiege.',
          es: 'La atmósfera histórica y una posición elevada pesan más que reducir las subidas diarias.',
          nl: 'Historische sfeer en een hogere ligging in de oude kern wegen zwaarder dan zo min mogelijk klimmen.',
          sv: 'Historisk atmosfär och ett högt läge i gamla stan är viktigare än att minimera återkommande stigningar.'
        } satisfies LocalizedText,
        daily: {
          en: 'Stairs or steeper lanes may become part of coffee, groceries, dinner and every journey home.',
          de: 'Stufen oder steilere Gassen können zu Kaffee, Einkäufen, Abendessen und jedem Heimweg dazugehören.',
          es: 'Las escaleras o calles más empinadas pueden formar parte del café, la compra, la cena y cada regreso.',
          nl: 'Trappen of steilere straatjes kunnen horen bij koffie, boodschappen, diner en iedere terugweg.',
          sv: 'Trappor eller brantare gränder kan ingå i kaffeturen, inköpen, middagen och varje hemväg.'
        } satisfies LocalizedText,
        tradeoff: {
          en: 'The route matters most when carrying luggage or groceries, in heat, or when returning several times in one day.',
          de: 'Mit Gepäck oder Einkäufen, bei Hitze und bei mehreren Rückwegen am Tag wird der genaue Weg besonders wichtig.',
          es: 'El recorrido se nota especialmente con equipaje o compras, cuando hace calor o si volvéis varias veces al día.',
          nl: 'De route telt extra met bagage of boodschappen, bij warmte en wanneer jullie meerdere keren per dag terugkeren.',
          sv: 'Vägen märks mest med bagage eller inköp, i värme och när ni återvänder flera gånger samma dag.'
        } satisfies LocalizedText
      },
      {
        number: '03',
        title: {
          en: 'Ensanche / Ingenio transition',
          de: 'Ensanche / Übergang am Ingenio',
          es: 'Ensanche / transición del Ingenio',
          nl: 'Ensanche / overgang bij El Ingenio',
          sv: 'Ensanche / övergången vid El Ingenio'
        } satisfies LocalizedText,
        summary: {
          en: 'Around El Ingenio, El Apero, Maquinillas and San Sebastián, the historic fabric meets a later transition area with its own settlement history.',
          de: 'Rund um El Ingenio, El Apero, Maquinillas und San Sebastián trifft das historische Gefüge auf einen später entstandenen Übergangsbereich.',
          es: 'En torno a El Ingenio, El Apero, Maquinillas y San Sebastián, el tejido histórico enlaza con una zona de transición posterior.',
          nl: 'Rond El Ingenio, El Apero, Maquinillas en San Sebastián gaat de historische structuur over in een later overgangsgebied.',
          sv: 'Kring El Ingenio, El Apero, Maquinillas och San Sebastián möter den historiska strukturen ett senare övergångsområde.'
        } satisfies LocalizedText,
        fit: {
          en: 'You want a position between old-village atmosphere, arrival routes and the later parts of town.',
          de: 'Ihr sucht eine Lage zwischen historischem Dorf, Ankunftswegen und den späteren Ortsteilen.',
          es: 'Buscáis una posición entre el pueblo histórico, las rutas de llegada y las zonas posteriores.',
          nl: 'Jullie zoeken een ligging tussen het oude dorp, aankomstroutes en de latere dorpsdelen.',
          sv: 'Ni söker ett läge mellan den historiska byn, ankomstvägarna och de senare delarna.'
        } satisfies LocalizedText,
        daily: {
          en: 'The area can connect several parts of Frigiliana, but the exact street still determines slope, steps and vehicle approach.',
          de: 'Der Bereich verbindet mehrere Teile Frigilianas; Steigung, Stufen und Zufahrt hängen trotzdem von der genauen Straße ab.',
          es: 'La zona conecta varias partes de Frigiliana, pero la calle concreta sigue determinando pendiente, escalones y acceso en coche.',
          nl: 'Het gebied verbindt verschillende delen van Frigiliana, maar straat en ingang bepalen nog steeds helling, trappen en autotoegang.',
          sv: 'Området binder samman flera delar av Frigiliana, men exakt gata avgör fortfarande lutning, trappor och bilväg.'
        } satisfies LocalizedText,
        tradeoff: {
          en: 'Ensanche is a morphological transition, not a promise of flat or step-free access.',
          de: 'Ensanche bezeichnet einen städtebaulichen Übergang, keine Garantie für ebene oder stufenfreie Wege.',
          es: 'Ensanche describe una transición urbana, no una garantía de recorridos llanos o sin escalones.',
          nl: 'Ensanche is een stedenbouwkundige overgang, geen garantie voor vlakke of trapvrije routes.',
          sv: 'Ensanche är en stadsbyggnadsmässig övergång, inte en garanti för plana eller trappfria vägar.'
        } satisfies LocalizedText
      },
      {
        number: '04',
        title: {
          en: 'Modern southern village',
          de: 'Moderner südlicher Ort',
          es: 'Zona moderna al sur',
          nl: 'Moderner zuidelijk dorpsdeel',
          sv: 'Modernare södra bydel'
        } satisfies LocalizedText,
        summary: {
          en: 'Areas below or beyond the oldest lanes can offer a more practical relationship with roads, services and everyday movement, depending on the exact street.',
          de: 'Unterhalb oder außerhalb der ältesten Gassen kann das Verhältnis zu Straßen, Angeboten und Alltagswegen praktischer sein – abhängig von der genauen Lage.',
          es: 'Las zonas por debajo o fuera de las calles más antiguas pueden ofrecer una relación más práctica con las vías, los servicios y los recorridos diarios, según la calle.',
          nl: 'Delen onder of buiten de oudste straatjes kunnen praktischer liggen voor wegen, voorzieningen en dagelijkse routes, afhankelijk van de precieze straat.',
          sv: 'Områden nedanför eller utanför de äldsta gränderna kan ge ett mer praktiskt förhållande till vägar, service och vardagsrörelser, beroende på exakt gata.'
        } satisfies LocalizedText,
        fit: {
          en: 'Daily practicality and potentially simpler vehicle access matter more than living directly inside the historic core.',
          de: 'Alltagstauglichkeit und möglicherweise einfachere Autozufahrt zählen für euch mehr als das Wohnen direkt in der historischen Altstadt.',
          es: 'La comodidad diaria y un posible acceso más sencillo en coche importan más que vivir dentro del casco histórico.',
          nl: 'Dagelijks gemak en mogelijk eenvoudiger autotoegang zijn belangrijker dan direct in de historische kern wonen.',
          sv: 'Praktisk vardag och möjligen enklare tillfart med bil väger tyngre än att bo direkt i den historiska kärnan.'
        } satisfies LocalizedText,
        daily: {
          en: 'Some positions involve less repeated climbing and a simpler connection to vehicles or services.',
          de: 'Manche Lagen bedeuten weniger wiederholten Anstieg und eine einfachere Verbindung zu Auto oder Angeboten.',
          es: 'Algunas ubicaciones implican menos subidas repetidas y una conexión más sencilla con el coche o los servicios.',
          nl: 'Sommige plekken vragen minder herhaald klimwerk en sluiten eenvoudiger aan op auto of voorzieningen.',
          sv: 'Vissa lägen innebär färre återkommande stigningar och enklare kontakt med bil eller service.'
        } satisfies LocalizedText,
        tradeoff: {
          en: 'The old village may no longer begin immediately outside the door. Confirm both the walking route and actual road access.',
          de: 'Die historische Altstadt beginnt möglicherweise nicht direkt vor der Tür. Prüft sowohl den Fußweg als auch die tatsächliche Zufahrt.',
          es: 'El pueblo histórico quizá ya no empiece al salir por la puerta. Comprobad tanto el camino a pie como el acceso real por carretera.',
          nl: 'Het oude dorp begint mogelijk niet direct bij de voordeur. Controleer zowel de wandelroute als de werkelijke toegang over de weg.',
          sv: 'Den gamla byn börjar kanske inte direkt utanför dörren. Kontrollera både gångvägen och den faktiska väganslutningen.'
        } satisfies LocalizedText
      },
      {
        number: '05',
        title: {
          en: 'Countryside / hillside',
          de: 'Landschaft / Hanglage',
          es: 'Campo / ladera',
          nl: 'Buitengebied / heuvels',
          sv: 'Landsbygd / sluttning'
        } satisfies LocalizedText,
        summary: {
          en: 'A stay outside the village can prioritise space, privacy and a rural setting, with views where the individual property provides them.',
          de: 'Außerhalb des Ortes können Raum, Privatsphäre und ländliche Umgebung im Vordergrund stehen; Ausblicke hängen von der einzelnen Unterkunft ab.',
          es: 'Alojarse fuera del pueblo puede dar prioridad al espacio, la privacidad y el entorno rural, con vistas cuando la propiedad concreta las ofrece.',
          nl: 'Buiten het dorp kunnen ruimte, privacy en een landelijke omgeving vooropstaan, met uitzicht waar de specifieke accommodatie dat biedt.',
          sv: 'Utanför byn kan utrymme, avskildhet och lantlig miljö stå i centrum, med utsikt där den enskilda bostaden erbjuder det.'
        } satisfies LocalizedText,
        fit: {
          en: 'You intentionally want rural space and separation more than spontaneous access to village restaurants and evening life.',
          de: 'Ihr sucht bewusst ländlichen Raum und Rückzug und legt weniger Wert auf spontane Wege zu Restaurants und Dorfleben.',
          es: 'Buscáis de forma consciente espacio y retiro rural, por encima de salir andando espontáneamente a restaurantes o al ambiente del pueblo.',
          nl: 'Jullie kiezen bewust voor landelijke ruimte en afstand, boven spontaan naar restaurants en dorpsleven wandelen.',
          sv: 'Ni söker medvetet lantligt utrymme och avskildhet snarare än spontana promenader till restauranger och byliv.'
        } satisfies LocalizedText,
        daily: {
          en: 'Frigiliana becomes somewhere you usually travel into rather than a place that starts outside the front door.',
          de: 'Frigiliana wird eher zu einem Ort, in den ihr hineinfahrt, statt direkt vor der Haustür zu beginnen.',
          es: 'Frigiliana pasa a ser un lugar al que normalmente os desplazáis, en vez de empezar al abrir la puerta.',
          nl: 'Frigiliana wordt een plek waar jullie meestal naartoe rijden, in plaats van iets dat bij de voordeur begint.',
          sv: 'Frigiliana blir oftast en plats ni tar er in till, snarare än något som börjar utanför dörren.'
        } satisfies LocalizedText,
        tradeoff: {
          en: 'A car is usually the practical basis for meals, shopping and village visits. Confirm the exact approach with the accommodation.',
          de: 'Für Essen, Einkäufe und Dorfbesuche ist ein Auto meist die praktische Grundlage. Klärt die genaue Zufahrt mit der Unterkunft.',
          es: 'El coche suele ser la base práctica para comer, comprar y visitar el pueblo. Confirmad el acceso concreto con el alojamiento.',
          nl: 'Een auto is meestal de praktische basis voor eten, boodschappen en dorpsbezoek. Bevestig de precieze aanrijroute bij de accommodatie.',
          sv: 'Bil är oftast den praktiska grunden för måltider, inköp och bybesök. Bekräfta den exakta tillfarten med boendet.'
        } satisfies LocalizedText
      }
    ]
  },
  proof: {
    eyebrow: {
      en: 'A street-level example',
      de: 'Ein konkretes Beispiel',
      es: 'Un ejemplo concreto',
      nl: 'Een concreet voorbeeld',
      sv: 'Ett konkret exempel'
    } satisfies LocalizedText,
    title: {
      en: 'Why the exact position matters',
      de: 'Warum die genaue Lage einen Unterschied macht',
      es: 'Por qué importa la ubicación exacta',
      nl: 'Waarom de precieze ligging verschil maakt',
      sv: 'Därför spelar det exakta läget roll'
    } satisfies LocalizedText,
    paragraphs: [
      {
        en: 'Casa AMARA is near San Antonio church, inside the historic centre and comparatively low within it. The village begins essentially outside the door, while guests do not need to climb to the highest Barribarto lanes every time they return.',
        de: 'Casa AMARA liegt nahe der Kirche San Antonio, mitten im historischen Zentrum und darin vergleichsweise weit unten. Das Dorf beginnt praktisch vor der Tür, ohne dass Gäste bei jeder Rückkehr bis in die höchsten Gassen des Barribarto hinaufmüssen.',
        es: 'Casa AMARA está cerca de la iglesia de San Antonio, dentro del casco histórico y en una cota relativamente baja. El pueblo empieza prácticamente al salir, sin tener que subir hasta las calles más altas del Barribarto en cada regreso.',
        nl: 'Casa AMARA ligt vlak bij de kerk van San Antonio, midden in de historische kern en daarbinnen relatief laag. Het dorp begint vrijwel bij de voordeur, zonder dat gasten bij iedere terugkeer naar de hoogste straatjes van Barribarto hoeven te klimmen.',
        sv: 'Casa AMARA ligger nära San Antonio-kyrkan, inne i den historiska bykärnan och jämförelsevis långt ner. Byn börjar i stort sett utanför dörren, utan att gäster behöver gå upp till Barribartos högsta gränder varje gång de kommer hem.'
      } satisfies LocalizedText,
      {
        en: 'That does not make the route flat, step-free or universally easy. It simply shows why two stays in the same historic village can create different daily walks.',
        de: 'Dadurch wird der Weg weder eben noch stufenfrei oder für alle gleichermaßen leicht. Das Beispiel zeigt lediglich, warum zwei Unterkünfte in derselben Altstadt ganz unterschiedliche Alltagswege bedeuten können.',
        es: 'Eso no convierte el recorrido en llano, sin escalones ni fácil para todo el mundo. Solo demuestra por qué dos alojamientos dentro del mismo casco histórico pueden generar recorridos diarios distintos.',
        nl: 'Dat maakt de route niet vlak, trapvrij of voor iedereen eenvoudig. Het laat alleen zien waarom twee verblijven in hetzelfde historische dorp heel andere dagelijkse routes kunnen geven.',
        sv: 'Det gör inte vägen plan, trappfri eller enkel för alla. Exemplet visar bara varför två boenden i samma historiska by kan ge olika vardagsvägar.'
      } satisfies LocalizedText
    ],
    imageAlt: {
      en: 'White houses and historic lanes on the Frigiliana hillside',
      de: 'Weiße Häuser und historische Gassen am Hang von Frigiliana',
      es: 'Casas blancas y calles históricas en la ladera de Frigiliana',
      nl: 'Witte huizen en historische straatjes tegen de heuvel van Frigiliana',
      sv: 'Vita hus och historiska gränder på Frigilianas sluttning'
    } satisfies LocalizedText
  },
  dailyRoute: {
    eyebrow: {
      en: 'The daily-route test',
      de: 'Der Alltagsweg-Test',
      es: 'La prueba del recorrido diario',
      nl: 'De dagelijkse-routetest',
      sv: 'Testa vardagsvägen'
    } satisfies LocalizedText,
    title: {
      en: 'Picture every return, not one walk',
      de: 'Denkt an jeden Rückweg, nicht nur an einen Spaziergang',
      es: 'Imaginad todos los regresos, no un solo paseo',
      nl: 'Denk aan iedere terugweg, niet aan één wandeling',
      sv: 'Föreställ er varje hemväg, inte en enda promenad'
    } satisfies LocalizedText,
    intro: {
      en: 'Before booking, trace an ordinary holiday day. Include gradient, steps, surface, luggage, children or mobility needs, and whether the car is part of that day.',
      de: 'Geht vor der Buchung einen normalen Urlaubstag gedanklich durch. Bezieht Steigung, Stufen, Untergrund, Gepäck, Kinder oder Mobilitätsfragen ein – und ob das Auto an diesem Tag eine Rolle spielt.',
      es: 'Antes de reservar, recorred mentalmente un día normal de vacaciones. Incluid la pendiente, los escalones, el suelo, el equipaje, los niños o la movilidad y si el coche forma parte del plan.',
      nl: 'Loop vóór het boeken een gewone vakantiedag in gedachten door. Neem helling, trappen, ondergrond, bagage, kinderen of mobiliteit mee, en ook of de auto bij die dag hoort.',
      sv: 'Gå igenom en vanlig semesterdag innan ni bokar. Räkna in lutning, trappor, underlag, bagage, barn eller rörlighet och om bilen är en del av dagen.'
    } satisfies LocalizedText,
    steps: [
      { number: '01', label: { en: 'Morning coffee', de: 'Morgenkaffee', es: 'Café de la mañana', nl: 'Ochtendkoffie', sv: 'Morgonkaffe' } satisfies LocalizedText },
      { number: '02', label: { en: 'Groceries', de: 'Einkäufe', es: 'Compras', nl: 'Boodschappen', sv: 'Inköp' } satisfies LocalizedText },
      { number: '03', label: { en: 'Return from the beach or a day out', de: 'Rückkehr vom Strand oder Ausflug', es: 'Regreso de la playa o de una excursión', nl: 'Terug van het strand of een uitstapje', sv: 'Hemkomst från stranden eller en utflykt' } satisfies LocalizedText },
      { number: '04', label: { en: 'Dinner in the village', de: 'Abendessen im Dorf', es: 'Cena en el pueblo', nl: 'Diner in het dorp', sv: 'Middag i byn' } satisfies LocalizedText },
      { number: '05', label: { en: 'Walk home after dark', de: 'Heimweg nach Einbruch der Dunkelheit', es: 'Vuelta a casa de noche', nl: 'Naar huis lopen in het donker', sv: 'Promenaden hem efter mörkrets inbrott' } satisfies LocalizedText }
    ],
    conclusion: {
      en: 'If that full sequence still suits the way you want to travel, the location is probably a good fit.',
      de: 'Wenn diese ganze Abfolge zu eurer Art zu reisen passt, ist die Lage wahrscheinlich eine gute Wahl.',
      es: 'Si toda esa secuencia encaja con vuestra forma de viajar, probablemente la ubicación sea adecuada.',
      nl: 'Als die hele reeks past bij de manier waarop jullie willen reizen, is de ligging waarschijnlijk een goede keuze.',
      sv: 'Om hela den följden passar ert sätt att resa är läget sannolikt ett bra val.'
    } satisfies LocalizedText
  },
  fitGuide: {
    eyebrow: {
      en: 'Make the choice',
      de: 'Die Entscheidung',
      es: 'Tomar la decisión',
      nl: 'Maak de keuze',
      sv: 'Gör valet'
    } satisfies LocalizedText,
    title: {
      en: 'Which location fits your holiday?',
      de: 'Welche Lage passt zu eurem Urlaub?',
      es: '¿Qué ubicación encaja con vuestras vacaciones?',
      nl: 'Welke ligging past bij jullie vakantie?',
      sv: 'Vilket läge passar er semester?'
    } satisfies LocalizedText,
    intro: {
      en: 'No location type wins every comparison. Choose the trade-off you will be happiest living with each day.',
      de: 'Kein Lagetyp gewinnt jeden Vergleich. Wählt die Abwägung, mit der ihr euch im Alltag am wohlsten fühlt.',
      es: 'Ningún tipo de ubicación gana en todo. Elegid la combinación de ventajas y límites que mejor encaje con vuestro día a día.',
      nl: 'Geen enkele ligging wint op alle punten. Kies de afweging waar jullie je iedere dag het prettigst bij voelen.',
      sv: 'Ingen lägestyp vinner på allt. Välj den avvägning ni helst lever med varje dag.'
    } satisfies LocalizedText,
    items: [
      {
        title: { en: 'Lower historic centre', de: 'Unterer historischer Ortskern', es: 'Casco histórico bajo', nl: 'Lagere historische kern', sv: 'Nedre historiska bykärnan' } satisfies LocalizedText,
        text: {
          en: 'Best fit if you want historic-village life without choosing the highest daily position.',
          de: 'Passt gut, wenn ihr Altstadtleben möchtet, ohne euch für die höchste tägliche Lage zu entscheiden.',
          es: 'Encaja si queréis vivir el pueblo histórico sin elegir la posición diaria más alta.',
          nl: 'Past als jullie het historische dorp willen beleven zonder voor de hoogste dagelijkse ligging te kiezen.',
          sv: 'Passar om ni vill leva i den historiska byn utan att välja det högsta vardagsläget.'
        } satisfies LocalizedText
      },
      {
        title: { en: 'Upper Barribarto', de: 'Oberes Barribarto', es: 'Barribarto alto', nl: 'Hoger Barribarto', sv: 'Övre Barribarto' } satisfies LocalizedText,
        text: {
          en: 'Best fit if atmosphere and elevation matter more than minimising repeated climbs.',
          de: 'Passt gut, wenn Atmosphäre und Höhenlage wichtiger sind als möglichst wenige Anstiege.',
          es: 'Encaja si la atmósfera y la altura importan más que reducir las cuestas diarias.',
          nl: 'Past als sfeer en hoogte zwaarder wegen dan zo min mogelijk herhaald klimmen.',
          sv: 'Passar om atmosfär och höjdläge är viktigare än att minimera återkommande stigningar.'
        } satisfies LocalizedText
      },
      {
        title: { en: 'Ensanche / Ingenio transition', de: 'Ensanche / Übergang am Ingenio', es: 'Ensanche / transición del Ingenio', nl: 'Ensanche / overgang bij El Ingenio', sv: 'Ensanche / övergången vid El Ingenio' } satisfies LocalizedText,
        text: {
          en: 'Best fit if you want a bridge between the historic village, arrival routes and later Frigiliana.',
          de: 'Passt gut, wenn ihr einen Übergang zwischen historischem Dorf, Ankunftswegen und späteren Ortsteilen sucht.',
          es: 'Encaja si buscáis un puente entre el pueblo histórico, las rutas de llegada y las zonas posteriores.',
          nl: 'Past als jullie een overgang zoeken tussen het historische dorp, aankomstroutes en de latere delen.',
          sv: 'Passar om ni söker en övergång mellan den historiska byn, ankomstvägarna och senare delar.'
        } satisfies LocalizedText
      },
      {
        title: { en: 'Modern southern village', de: 'Moderner südlicher Ort', es: 'Zona moderna al sur', nl: 'Moderner zuidelijk dorpsdeel', sv: 'Modernare södra bydel' } satisfies LocalizedText,
        text: {
          en: 'Best fit if practical daily movement matters more than living directly inside the historic core.',
          de: 'Passt gut, wenn praktische Alltagswege wichtiger sind als das Wohnen direkt in der Altstadt.',
          es: 'Encaja si la practicidad diaria importa más que vivir dentro del casco histórico.',
          nl: 'Past als praktische dagelijkse routes belangrijker zijn dan direct in de historische kern wonen.',
          sv: 'Passar om praktiska vardagsvägar är viktigare än att bo direkt i den historiska kärnan.'
        } satisfies LocalizedText
      },
      {
        title: { en: 'Countryside / hillside', de: 'Landschaft / Hanglage', es: 'Campo / ladera', nl: 'Buitengebied / heuvels', sv: 'Landsbygd / sluttning' } satisfies LocalizedText,
        text: {
          en: 'Best fit if privacy and rural space matter more than spontaneous village walking.',
          de: 'Passt gut, wenn Privatsphäre und ländlicher Raum wichtiger sind als spontane Wege ins Dorf.',
          es: 'Encaja si la privacidad y el espacio rural pesan más que salir andando espontáneamente al pueblo.',
          nl: 'Past als privacy en landelijke ruimte zwaarder wegen dan spontaan naar het dorp wandelen.',
          sv: 'Passar om avskildhet och lantligt utrymme är viktigare än spontana promenader in i byn.'
        } satisfies LocalizedText
      }
    ]
  },
  selfCheck: {
    title: {
      en: 'Check the exact location before booking',
      de: 'Prüft vor der Buchung die genaue Lage',
      es: 'Comprobad la ubicación exacta antes de reservar',
      nl: 'Controleer de precieze ligging vóór het boeken',
      sv: 'Kontrollera det exakta läget före bokning'
    } satisfies LocalizedText,
    steps: [
      {
        num: '01',
        title: { en: 'Trace the full route', de: 'Den ganzen Weg prüfen', es: 'Revisad el recorrido completo', nl: 'Bekijk de volledige route', sv: 'Kontrollera hela vägen' } satisfies LocalizedText,
        text: {
          en: 'Follow the route from the nearest realistic vehicle point to the actual entrance, not just to the street name.',
          de: 'Prüft den Weg vom nächstmöglichen realistischen Haltepunkt bis zum tatsächlichen Eingang, nicht nur bis zum Straßennamen.',
          es: 'Seguid el recorrido desde el punto realista más cercano para el vehículo hasta la entrada, no solo hasta el nombre de la calle.',
          nl: 'Volg de route vanaf het dichtstbijzijnde realistische voertuigpunt tot aan de echte ingang, niet alleen tot de straatnaam.',
          sv: 'Följ vägen från närmaste realistiska fordonsplats till den faktiska entrén, inte bara till gatunamnet.'
        } satisfies LocalizedText
      },
      {
        num: '02',
        title: { en: 'Test an ordinary day', de: 'Einen normalen Tag testen', es: 'Probad un día normal', nl: 'Test een gewone dag', sv: 'Testa en vanlig dag' } satisfies LocalizedText,
        text: {
          en: 'Include every likely return, luggage or shopping, and whether children or a car change the route.',
          de: 'Bezieht alle wahrscheinlichen Rückwege, Gepäck oder Einkäufe ein – und ob Kinder oder das Auto den Weg verändern.',
          es: 'Incluid todos los regresos probables, el equipaje o la compra y si los niños o el coche cambian el recorrido.',
          nl: 'Neem alle waarschijnlijke terugwegen, bagage of boodschappen mee, en of kinderen of een auto de route veranderen.',
          sv: 'Räkna in alla troliga hemvägar, bagage eller inköp och om barn eller bil förändrar rutten.'
        } satisfies LocalizedText
      },
      {
        num: '03',
        title: { en: 'Ask for precise access details', de: 'Genaue Zugangsdaten erfragen', es: 'Pedid detalles precisos del acceso', nl: 'Vraag om precieze toegangsinformatie', sv: 'Be om exakta tillträdesuppgifter' } satisfies LocalizedText,
        text: {
          en: 'If steps, balance or repeated climbs matter, ask about gradient, surface, handrails and the final doorway.',
          de: 'Wenn Stufen, Gleichgewicht oder wiederholte Anstiege wichtig sind, fragt nach Steigung, Untergrund, Handläufen und dem letzten Eingang.',
          es: 'Si importan los escalones, el equilibrio o las subidas repetidas, preguntad por la pendiente, el suelo, los pasamanos y la entrada.',
          nl: 'Als trappen, balans of herhaald klimmen tellen, vraag dan naar helling, ondergrond, leuningen en de uiteindelijke ingang.',
          sv: 'Om trappor, balans eller återkommande stigningar spelar roll, fråga om lutning, underlag, ledstänger och den sista entrén.'
        } satisfies LocalizedText
      }
    ],
    faqTitle: {
      en: 'Practical questions about location',
      de: 'Praktische Fragen zur Lage',
      es: 'Preguntas prácticas sobre la ubicación',
      nl: 'Praktische vragen over de ligging',
      sv: 'Praktiska frågor om läget'
    } satisfies LocalizedText,
    faq: [
      {
        question: { en: 'Is Frigiliana very steep?', de: 'Ist Frigiliana sehr steil?', es: '¿Frigiliana tiene muchas cuestas?', nl: 'Is Frigiliana erg steil?', sv: 'Är Frigiliana mycket brant?' } satisfies LocalizedText,
        answer: {
          en: 'The historic village follows a hillside, so many routes include noticeable gradients, steps or both. The exact experience depends strongly on the street and entrance.',
          de: 'Der historische Ort folgt dem Hang, deshalb gehören zu vielen Wegen deutliche Steigungen, Stufen oder beides. Entscheidend sind die genaue Gasse und der Eingang.',
          es: 'El pueblo histórico sigue la ladera, por lo que muchos recorridos tienen pendientes, escalones o ambas cosas. La experiencia depende mucho de la calle y la entrada.',
          nl: 'De historische kern volgt de heuvel, waardoor veel routes duidelijke hellingen, trappen of beide hebben. De precieze straat en ingang bepalen de ervaring.',
          sv: 'Den historiska byn följer sluttningen, så många vägar har tydliga lutningar, trappor eller båda. Upplevelsen beror mycket på exakt gränd och entré.'
        } satisfies LocalizedText
      },
      {
        question: { en: 'Can I avoid stairs completely?', de: 'Kann ich Treppen vollständig vermeiden?', es: '¿Puedo evitar por completo las escaleras?', nl: 'Kan ik trappen volledig vermijden?', sv: 'Går det att undvika trappor helt?' } satisfies LocalizedText,
        answer: {
          en: 'Some routes avoid steps, but that does not guarantee a flat surface or step-free entrance. Confirm the complete route to the door.',
          de: 'Einige Wege vermeiden Stufen, sind deshalb aber nicht automatisch eben oder bis zur Tür stufenfrei. Bestätigt den vollständigen Weg.',
          es: 'Algunos recorridos evitan escalones, pero eso no garantiza un suelo llano ni una entrada sin peldaños. Confirmad todo el camino hasta la puerta.',
          nl: 'Sommige routes vermijden trappen, maar zijn daardoor niet automatisch vlak of trapvrij tot aan de deur. Bevestig de volledige route.',
          sv: 'Vissa vägar undviker trappor men är därför inte automatiskt plana eller trappfria fram till dörren. Bekräfta hela vägen.'
        } satisfies LocalizedText
      },
      {
        question: { en: 'Which part is easiest for repeated walking?', de: 'Welche Lage ist für häufige Wege am praktischsten?', es: '¿Qué zona resulta más práctica para caminar varias veces al día?', nl: 'Welk deel is het praktischst voor herhaalde wandelingen?', sv: 'Vilken del är mest praktisk för flera promenader om dagen?' } satisfies LocalizedText,
        answer: {
          en: 'Lower positions often involve less elevation than upper Barribarto, but “lower” never guarantees flat or step-free access. Compare the exact route and entrance.',
          de: 'Weiter unten gelegene Unterkünfte bedeuten oft weniger Höhenunterschied als im oberen Barribarto. „Unten“ garantiert aber weder ebene noch stufenfreie Wege.',
          es: 'Las ubicaciones más bajas suelen acumular menos desnivel que el Barribarto alto, pero “abajo” nunca garantiza un recorrido llano o sin escalones.',
          nl: 'Lagere plekken hebben vaak minder hoogteverschil dan hoog Barribarto, maar “lager” garandeert nooit een vlakke of trapvrije route.',
          sv: 'Lägre lägen innebär ofta mindre höjdskillnad än övre Barribarto, men ”lägre” garanterar aldrig en plan eller trappfri väg.'
        } satisfies LocalizedText
      },
      {
        question: { en: 'What should I check about a specific street?', de: 'Was sollte ich bei einer konkreten Gasse prüfen?', es: '¿Qué debo comprobar sobre una calle concreta?', nl: 'Wat moet ik controleren bij een specifieke straat?', sv: 'Vad bör jag kontrollera för en viss gränd?' } satisfies LocalizedText,
        answer: {
          en: 'Ask about gradient, steps, paving, the final entrance, the realistic vehicle point and how often you expect to walk the route each day.',
          de: 'Fragt nach Steigung, Stufen, Pflaster, dem letzten Eingang, einem realistischen Haltepunkt und danach, wie oft ihr den Weg täglich gehen werdet.',
          es: 'Preguntad por la pendiente, los escalones, el pavimento, la entrada, el punto realista para el vehículo y cuántas veces recorreréis el camino.',
          nl: 'Vraag naar helling, trappen, bestrating, de ingang, een realistisch voertuigpunt en hoe vaak jullie de route dagelijks verwachten te lopen.',
          sv: 'Fråga om lutning, trappor, stenläggning, entrén, en realistisk fordonsplats och hur ofta ni väntas gå vägen varje dag.'
        } satisfies LocalizedText
      }
    ]
  },
  related: {
    eyebrow: {
      en: 'Practical next steps',
      de: 'Praktische nächste Schritte',
      es: 'Siguientes pasos prácticos',
      nl: 'Praktische vervolgstappen',
      sv: 'Praktiska nästa steg'
    } satisfies LocalizedText,
    title: {
      en: 'Continue planning the stay',
      de: 'Den Aufenthalt weiter planen',
      es: 'Seguid planificando la estancia',
      nl: 'Plan het verblijf verder',
      sv: 'Fortsätt planera vistelsen'
    } satisfies LocalizedText,
    intro: {
      en: 'Once the location type is clear, use the focused guides for parking, arrival and the wider destination decision.',
      de: 'Wenn der passende Lagetyp klar ist, helfen die spezialisierten Guides bei Parken, Anreise und der größeren Ortsentscheidung.',
      es: 'Cuando tengáis claro el tipo de ubicación, continuad con las guías específicas de aparcamiento, llegada y elección de destino.',
      nl: 'Zodra het type ligging duidelijk is, helpen de gerichte gidsen verder met parkeren, aankomst en de bredere bestemmingskeuze.',
      sv: 'När lägestypen är tydlig hjälper de fokuserade guiderna vidare med parkering, ankomst och det större valet av resmål.'
    } satisfies LocalizedText,
    links: [
      {
        token: 'location_frigiliana',
        label: { en: 'Staying in Frigiliana', de: 'In Frigiliana übernachten', es: 'Alojarse en Frigiliana', nl: 'Overnachten in Frigiliana', sv: 'Bo i Frigiliana' } satisfies LocalizedText,
        text: {
          en: 'Decide whether the village is the right base for several days.',
          de: 'Entscheidet, ob das Dorf für mehrere Tage die passende Basis ist.',
          es: 'Decidid si el pueblo es la base adecuada para varios días.',
          nl: 'Bepaal of het dorp de juiste uitvalsbasis is voor meerdere dagen.',
          sv: 'Avgör om byn är rätt bas för flera dagar.'
        } satisfies LocalizedText
      },
      {
        token: 'frigiliana_parking',
        label: { en: 'Parking in Frigiliana', de: 'Parken in Frigiliana', es: 'Aparcamiento en Frigiliana', nl: 'Parkeren in Frigiliana', sv: 'Parkering i Frigiliana' } satisfies LocalizedText,
        text: {
          en: 'Understand parking options and the final walk to the old town.',
          de: 'Parkmöglichkeiten und den letzten Fußweg zur Altstadt verstehen.',
          es: 'Entender las opciones de aparcamiento y el último tramo hasta el casco histórico.',
          nl: 'Bekijk de parkeermogelijkheden en het laatste stuk naar de oude kern.',
          sv: 'Förstå parkeringsalternativen och den sista promenaden till gamla stan.'
        } satisfies LocalizedText
      },
      {
        token: 'getting_to_frigiliana',
        label: { en: 'Getting to Frigiliana', de: 'Anreise nach Frigiliana', es: 'Cómo llegar a Frigiliana', nl: 'Naar Frigiliana reizen', sv: 'Resa till Frigiliana' } satisfies LocalizedText,
        text: {
          en: 'Compare rental car, private transfer and public transport via Nerja.',
          de: 'Mietwagen, privaten Transfer und öffentliche Verbindungen über Nerja vergleichen.',
          es: 'Comparar coche de alquiler, traslado privado y transporte público vía Nerja.',
          nl: 'Vergelijk huurauto, privétransfer en openbaar vervoer via Nerja.',
          sv: 'Jämför hyrbil, privat transfer och kollektivtrafik via Nerja.'
        } satisfies LocalizedText
      },
      {
        token: 'nerja_vs_frigiliana',
        label: { en: 'Frigiliana or Nerja', de: 'Frigiliana oder Nerja', es: 'Frigiliana o Nerja', nl: 'Frigiliana of Nerja', sv: 'Frigiliana eller Nerja' } satisfies LocalizedText,
        text: {
          en: 'Compare village life with a beach-first stay in Nerja.',
          de: 'Dorfleben mit einem strandnahen Aufenthalt in Nerja vergleichen.',
          es: 'Comparar la vida de pueblo con una estancia centrada en la playa en Nerja.',
          nl: 'Vergelijk het dorpsleven met een strandgerichte vakantie in Nerja.',
          sv: 'Jämför byliv med en strandinriktad vistelse i Nerja.'
        } satisfies LocalizedText
      },
      {
        token: 'romantic_hideaways',
        label: stayCollectionLabels.structuralName,
        text: {
          en: 'Explore the existing AMARA stays after choosing the location model.',
          de: 'Entdeckt die bestehenden AMARA-Unterkünfte, wenn der Lagetyp feststeht.',
          es: 'Descubrid los alojamientos AMARA cuando tengáis claro el tipo de ubicación.',
          nl: 'Bekijk de bestaande AMARA-verblijven zodra het type ligging duidelijk is.',
          sv: 'Utforska de befintliga AMARA-boendena när lägestypen är klar.'
        } satisfies LocalizedText
      }
    ]
  },
  closing: {
    title: {
      en: 'Choose the rhythm that feels like your holiday.',
      de: 'Wählt den Rhythmus, der sich nach eurem Urlaub anfühlt.',
      es: 'Elegid el ritmo que queréis para vuestras vacaciones.',
      nl: 'Kies het ritme dat bij jullie vakantie past.',
      sv: 'Välj rytmen som känns rätt för er semester.'
    } satisfies LocalizedText,
    lead: {
      en: 'The strongest location is not a universal winner. It is the one whose daily trade-offs suit the way you actually want to spend your time.',
      de: 'Die stärkste Lage ist kein allgemeiner Sieger. Sie ist diejenige, deren tägliche Abwägungen zu der Zeit passen, die ihr hier verbringen möchtet.',
      es: 'La ubicación más adecuada no gana para todo el mundo. Es la que encaja con la forma en que realmente queréis pasar los días.',
      nl: 'De sterkste ligging is geen universele winnaar. Het is de plek waarvan de dagelijkse afwegingen passen bij hoe jullie de tijd willen doorbrengen.',
      sv: 'Det starkaste läget är ingen universell vinnare. Det är platsen vars vardagliga avvägningar passar hur ni faktiskt vill använda tiden.'
    } satisfies LocalizedText,
    hubCta: {
      en: 'Discover staying in Frigiliana',
      de: 'Aufenthalt in Frigiliana entdecken',
      es: 'Descubrir cómo es alojarse en Frigiliana',
      nl: 'Ontdek overnachten in Frigiliana',
      sv: 'Upptäck hur det är att bo i Frigiliana'
    } satisfies LocalizedText,
    staysCta: {
      en: 'View AMARA stays',
      de: 'AMARA-Unterkünfte ansehen',
      es: 'Ver alojamientos AMARA',
      nl: 'Bekijk AMARA-verblijven',
      sv: 'Se AMARA-boenden'
    } satisfies LocalizedText
  }
} as const;
