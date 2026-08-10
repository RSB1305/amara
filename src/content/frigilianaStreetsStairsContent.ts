import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

type LocalizedText = Record<AmaraLanguage, string>;

export const frigilianaStreetsStairsSeo: AmaraAuthoringSeo = {
  version: '2026-07-27-frigiliana-streets-stairs-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/08-frigiliana-pueblo.jpg',
  languages: {
    en: {
      title: 'Frigiliana Streets, Slopes & Stairs',
      description:
        'Understand Frigiliana’s steep streets, steps, walking surfaces and village levels before choosing where to stay.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana: Gassen, Steigungen & Treppen',
      description:
        'Versteht Frigilianas steile Gassen, Stufen, Oberflächen und Höhenlagen, bevor ihr eure Unterkunft auswählt.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana: calles, cuestas y escaleras',
      description:
        'Entended las cuestas, escaleras, superficies y niveles de Frigiliana antes de elegir dónde alojaros.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana: straatjes, hellingen & trappen',
      description:
        'Begrijp de steile straatjes, trappen, ondergrond en hoogteniveaus van Frigiliana voordat jullie een verblijf kiezen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana: gränder, lutningar & trappor',
      description:
        'Förstå Frigilianas branta gränder, trappor, underlag och nivåskillnader innan ni väljer boende.',
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
      en: 'Village structure · Frigiliana',
      de: 'Dorfstruktur · Frigiliana',
      es: 'Estructura del pueblo · Frigiliana',
      nl: 'Dorpsstructuur · Frigiliana',
      sv: 'Bystruktur · Frigiliana'
    } satisfies LocalizedText,
    title: {
      en: 'Streets, Slopes & Stairs',
      de: 'Gassen, Steigungen & Treppen',
      es: 'Calles, cuestas y escaleras',
      nl: 'Straatjes, hellingen en trappen',
      sv: 'Gränder, lutningar och trappor'
    } satisfies LocalizedText,
    lead: {
      en: 'Frigiliana is compact on a map, but it is built vertically. Short distances can include cobbled surfaces, steep gradients, and steps — and the same route feels different when you repeat it several times a day.',
      de: 'Frigiliana wirkt auf der Karte kompakt, ist aber vertikal gebaut. Kurze Entfernungen können Kopfsteinpflaster, starke Steigungen und Stufen enthalten – und dieselbe Strecke fühlt sich anders an, wenn ihr sie mehrmals täglich zurücklegt.',
      es: 'Frigiliana parece compacta en el mapa, pero está construida en vertical. Las distancias cortas pueden incluir empedrado, cuestas pronunciadas y escalones, y una misma ruta se siente distinta al repetirla varias veces al día.',
      nl: 'Frigiliana lijkt compact op de kaart, maar is verticaal gebouwd. Korte afstanden kunnen kasseien, steile hellingen en trappen bevatten, en dezelfde route voelt anders wanneer jullie die meerdere keren per dag lopen.',
      sv: 'Frigiliana ser kompakt ut på kartan men är byggt på höjden. Korta avstånd kan innebära stenläggning, branta lutningar och trappor, och samma väg känns annorlunda när ni går den flera gånger om dagen.'
    } satisfies LocalizedText,
    body: {
      en: 'This is not a warning against the village. It is a practical guide to choosing a street that works for your mobility, luggage and number of daily outings.',
      de: 'Das ist keine Warnung vor dem Dorf. Es ist eine praktische Orientierung, damit Straße, Mobilität, Gepäck und die Zahl eurer täglichen Wege zusammenpassen.',
      es: 'No es una advertencia contra el pueblo. Es una guía práctica para elegir una calle adecuada a vuestra movilidad, equipaje y número de salidas al día.',
      nl: 'Dit is geen waarschuwing voor het dorp. Het is praktische uitleg om een locatie te kiezen die past bij jullie mobiliteit, bagage en dagelijkse plannen.',
      sv: 'Det här är ingen varning för byn. Det är praktisk vägledning för att välja en gata som fungerar med er rörlighet, ert bagage och hur många gånger ni går ut per dag.'
    } satisfies LocalizedText,
    primaryCta: {
      en: 'Understand the village',
      de: 'Das Dorf verstehen',
      es: 'Entender el pueblo',
      nl: 'Begrijp het dorp',
      sv: 'Förstå byn'
    } satisfies LocalizedText,
    secondaryCta: {
      en: 'Parking guide',
      de: 'Parkguide',
      es: 'Guía de aparcamiento',
      nl: 'Parkeergids',
      sv: 'Parkeringsguide'
    } satisfies LocalizedText,
    imageAlt: {
      en: 'Stepped whitewashed street in Frigiliana old town',
      de: 'Weiße Altstadtgasse mit Stufen in Frigiliana',
      es: 'Calle blanca con escaleras en el casco antiguo de Frigiliana',
      nl: 'Wit straatje met trappen in het oude centrum van Frigiliana',
      sv: 'Vitkalkad gränd med trappor i Frigilianas gamla stad'
    } satisfies LocalizedText
  },
  principle: {
    eyebrow: {
      en: 'The central idea',
      de: 'Der zentrale Gedanke',
      es: 'La idea principal',
      nl: 'Het centrale idee',
      sv: 'Grundprincipen'
    } satisfies LocalizedText,
    title: {
      en: 'Do not judge a route by metres alone.',
      de: 'Beurteilt einen Weg nicht nur nach Metern.',
      es: 'No valoréis una ruta solo por los metros.',
      nl: 'Beoordeel een route niet alleen op meters.',
      sv: 'Bedöm inte en väg enbart efter antal meter.'
    } satisfies LocalizedText,
    body: {
      en: 'In a hillside village, gradient, surface, steps, and repetition matter together. A slightly longer, gentler route can be easier than a short climb — especially with luggage or after dinner.',
      de: 'In einem Hangdorf zählen Steigung, Oberfläche, Stufen und Wiederholung gemeinsam. Ein etwas längerer, sanfterer Weg kann leichter sein als ein kurzer Aufstieg – besonders mit Gepäck oder nach dem Abendessen.',
      es: 'En un pueblo en ladera cuentan a la vez el desnivel, la superficie, los escalones y la repetición. Una ruta algo más larga y suave puede resultar más fácil que una subida corta, sobre todo con equipaje o después de cenar.',
      nl: 'In een heuveldorp tellen helling, ondergrond, trappen en herhaling samen. Een iets langere, geleidelijkere route kan eenvoudiger zijn dan een korte klim, vooral met bagage of na het diner.',
      sv: 'I en by på en sluttning spelar lutning, underlag, trappor och upprepning tillsammans roll. En något längre och mjukare väg kan vara lättare än en kort stigning, särskilt med bagage eller efter middagen.'
    } satisfies LocalizedText
  },
  factors: {
    title: {
      en: 'Four things that shape every walk',
      de: 'Vier Faktoren, die jeden Weg prägen',
      es: 'Cuatro factores que marcan cada paseo',
      nl: 'Vier factoren die elke wandeling bepalen',
      sv: 'Fyra faktorer som formar varje promenad'
    } satisfies LocalizedText,
    items: [
      {
        label: { en: 'Distance', de: 'Entfernung', es: 'Distancia', nl: 'Afstand', sv: 'Avstånd' } satisfies LocalizedText,
        value: { en: 'Only the start', de: 'Nur der Anfang', es: 'Solo el comienzo', nl: 'Slechts het begin', sv: 'Bara början' } satisfies LocalizedText,
        note: {
          en: 'A short route is not automatically an easy route.',
          de: 'Ein kurzer Weg ist nicht automatisch ein leichter Weg.',
          es: 'Una ruta corta no es automáticamente una ruta fácil.',
          nl: 'Een korte route is niet automatisch een eenvoudige route.',
          sv: 'En kort väg är inte automatiskt en enkel väg.'
        } satisfies LocalizedText
      },
      {
        label: { en: 'Gradient', de: 'Steigung', es: 'Pendiente', nl: 'Helling', sv: 'Lutning' } satisfies LocalizedText,
        value: { en: 'Effort multiplier', de: 'Kraftfaktor', es: 'Multiplica el esfuerzo', nl: 'Vergroot inspanning', sv: 'Ökar ansträngningen' } satisfies LocalizedText,
        note: {
          en: 'Small climbs accumulate when they are part of every outing.',
          de: 'Kleine Anstiege summieren sich, wenn sie zu jedem Weg gehören.',
          es: 'Las pequeñas subidas se acumulan cuando forman parte de cada salida.',
          nl: 'Kleine klimmetjes tellen op wanneer ze bij iedere wandeling horen.',
          sv: 'Små stigningar blir märkbara när de ingår i varje tur.'
        } satisfies LocalizedText
      },
      {
        label: { en: 'Surface', de: 'Untergrund', es: 'Superficie', nl: 'Ondergrond', sv: 'Underlag' } satisfies LocalizedText,
        value: { en: 'Cobbles & steps', de: 'Pflaster & Stufen', es: 'Empedrado y escalones', nl: 'Kasseien & trappen', sv: 'Stenläggning & trappor' } satisfies LocalizedText,
        note: {
          en: 'Footwear, rain, luggage wheels, and mobility all change the experience.',
          de: 'Schuhe, Regen, Gepäckrollen und Mobilität verändern das Erlebnis.',
          es: 'El calzado, la lluvia, las ruedas del equipaje y la movilidad cambian la experiencia.',
          nl: 'Schoenen, regen, bagagewieltjes en mobiliteit veranderen de ervaring.',
          sv: 'Skor, regn, bagagehjul och rörlighet påverkar upplevelsen.'
        } satisfies LocalizedText
      },
      {
        label: { en: 'Frequency', de: 'Häufigkeit', es: 'Frecuencia', nl: 'Frequentie', sv: 'Frekvens' } satisfies LocalizedText,
        value: { en: 'The real test', de: 'Der echte Test', es: 'La prueba real', nl: 'De echte test', sv: 'Det verkliga testet' } satisfies LocalizedText,
        note: {
          en: 'One beautiful walk feels different from the third return of the day.',
          de: 'Ein schöner Weg fühlt sich anders an als der dritte Rückweg des Tages.',
          es: 'Un paseo bonito se siente distinto al tercer regreso del día.',
          nl: 'Eén mooie wandeling voelt anders dan de derde terugweg van de dag.',
          sv: 'En vacker promenad känns annorlunda än dagens tredje återväg.'
        } satisfies LocalizedText
      }
    ]
  },
  zones: {
    eyebrow: {
      en: 'A practical model',
      de: 'Ein praktisches Modell',
      es: 'Un modelo práctico',
      nl: 'Een praktisch model',
      sv: 'En praktisk modell'
    } satisfies LocalizedText,
    title: {
      en: 'Think in levels, not official districts',
      de: 'Denkt in Höhenlagen, nicht in offiziellen Vierteln',
      es: 'Pensad en niveles, no en barrios oficiales',
      nl: 'Denk in hoogteniveaus, niet in officiële wijken',
      sv: 'Tänk i höjdnivåer, inte i officiella stadsdelar'
    } satisfies LocalizedText,
    intro: {
      en: 'These are planning categories, not fixed neighbourhood boundaries. Exact access can change from one street — or even one doorway — to the next.',
      de: 'Diese Kategorien dienen der Planung und sind keine festen Viertelgrenzen. Der genaue Zugang kann sich von einer Gasse – oder sogar von einer Haustür – zur nächsten ändern.',
      es: 'Son categorías para planificar, no límites fijos de barrios. El acceso exacto puede cambiar de una calle, o incluso de una puerta, a la siguiente.',
      nl: 'Dit zijn planningscategorieën, geen vaste wijkgrenzen. De exacte toegang kan per straat, of zelfs per voordeur, verschillen.',
      sv: 'Det här är planeringskategorier, inte fasta områdesgränser. Den exakta tillgängligheten kan skilja sig mellan två gränder eller till och med två portar.'
    } satisfies LocalizedText,
    labels: {
      rhythm: { en: 'Daily use', de: 'Im Alltag', es: 'Uso diario', nl: 'Dagelijks gebruik', sv: 'I vardagen' } satisfies LocalizedText,
      tradeoff: { en: 'Trade-off', de: 'Abwägung', es: 'A cambio', nl: 'Afweging', sv: 'Avvägning' } satisfies LocalizedText
    },
    items: [
      {
        number: '01',
        title: { en: 'Lower & central', de: 'Unten & zentral', es: 'Zona baja y central', nl: 'Lager & centraal', sv: 'Nedre & centralt' } satisfies LocalizedText,
        summary: {
          en: 'Often the most practical balance for frequent outings and an easier return in the evening.',
          de: 'Oft die praktischste Balance für häufige Wege und einen leichteren Rückweg am Abend.',
          es: 'Suele ofrecer el mejor equilibrio para salir varias veces y volver con más facilidad por la noche.',
          nl: 'Vaak de praktischste balans voor meerdere uitstapjes en een eenvoudigere terugweg in de avond.',
          sv: 'Ofta den mest praktiska balansen för flera turer och en enklare hemväg på kvällen.'
        } satisfies LocalizedText,
        rhythm: {
          en: 'Coffee, shopping, and dinner can fit into the day with less repeated climbing.',
          de: 'Kaffee, Einkäufe und Abendessen lassen sich mit weniger wiederholtem Aufstieg verbinden.',
          es: 'Café, compras y cena se integran en el día con menos subidas repetidas.',
          nl: 'Koffie, boodschappen en diner passen in de dag met minder herhaalde klim.',
          sv: 'Kaffe, inköp och middag kan ingå i dagen med färre upprepade stigningar.'
        } satisfies LocalizedText,
        tradeoff: {
          en: 'Central does not mean flat or step-free; check the exact street and doorway.',
          de: 'Zentral bedeutet nicht eben oder stufenfrei; prüft die genaue Gasse und Haustür.',
          es: 'Céntrico no significa llano ni sin escalones; comprobad la calle y la puerta exactas.',
          nl: 'Centraal betekent niet vlak of trapvrij; controleer de exacte straat en ingang.',
          sv: 'Centralt betyder inte plant eller trappfritt; kontrollera exakt gränd och entré.'
        } satisfies LocalizedText
      },
      {
        number: '02',
        title: { en: 'Mid-slope', de: 'Mittlere Hanglage', es: 'Media ladera', nl: 'Midden op de helling', sv: 'Mitt på sluttningen' } satisfies LocalizedText,
        summary: {
          en: 'A quieter position with more elevation built into ordinary routes.',
          de: 'Eine ruhigere Lage, bei der mehr Höhenmeter zu den normalen Wegen gehören.',
          es: 'Una posición más tranquila, con más desnivel integrado en los trayectos habituales.',
          nl: 'Een rustigere ligging met meer hoogteverschil in de dagelijkse routes.',
          sv: 'Ett lugnare läge med större höjdskillnad i de vanliga vägarna.'
        } satisfies LocalizedText,
        rhythm: {
          en: 'Works well when you go out less often and enjoy walking as part of the stay.',
          de: 'Passt gut, wenn ihr seltener hinausgeht und das Gehen als Teil des Aufenthalts mögt.',
          es: 'Funciona bien si salís menos veces y disfrutáis caminar como parte de la estancia.',
          nl: 'Past goed wanneer jullie minder vaak op pad gaan en wandelen bij het verblijf vinden horen.',
          sv: 'Passar när ni går ut mer sällan och tycker om att promenader är en del av vistelsen.'
        } satisfies LocalizedText,
        tradeoff: {
          en: 'Groceries, heat, and repeated evening returns make the gradient more noticeable.',
          de: 'Einkäufe, Hitze und wiederholte Rückwege am Abend machen die Steigung spürbarer.',
          es: 'Las compras, el calor y los regresos repetidos por la noche hacen notar más la cuesta.',
          nl: 'Boodschappen, warmte en meerdere avondlijke terugwegen maken de helling merkbaarder.',
          sv: 'Inköp, värme och upprepade kvällsvägar gör lutningen mer märkbar.'
        } satisfies LocalizedText
      },
      {
        number: '03',
        title: { en: 'Upper village & edge', de: 'Oberdorf & Randlage', es: 'Zona alta y borde', nl: 'Bovendorp & rand', sv: 'Övre byn & utkanten' } satisfies LocalizedText,
        summary: {
          en: 'Can offer privacy and wide views, usually with the most climbing towards the historic centre.',
          de: 'Kann Privatsphäre und weite Ausblicke bieten, meist mit dem stärksten Aufstieg Richtung Altstadt.',
          es: 'Puede ofrecer privacidad y vistas amplias, normalmente con la mayor subida hacia el casco histórico.',
          nl: 'Kan privacy en weids uitzicht bieden, meestal met de grootste klim richting de oude kern.',
          sv: 'Kan ge avskildhet och vid utsikt, oftast med mest stigning mot den historiska kärnan.'
        } satisfies LocalizedText,
        rhythm: {
          en: 'Better if you plan fewer, longer outings and spend more time at the accommodation.',
          de: 'Eher passend, wenn ihr seltener hinausgeht, dafür länger unterwegs seid und mehr Zeit in der Unterkunft verbringt.',
          es: 'Mejor si planeáis menos salidas, pero más largas, y vais a pasar más tiempo en el alojamiento.',
          nl: 'Past beter als jullie minder vaak, maar langer op pad gaan en meer tijd in het verblijf doorbrengen.',
          sv: 'Passar bättre om ni gör färre men längre utflykter och tillbringar mer tid på boendet.'
        } satisfies LocalizedText,
        tradeoff: {
          en: 'Do not assume car access is easier: exact road access varies considerably.',
          de: 'Geht nicht automatisch von leichterer Autozufahrt aus: Der genaue Zugang variiert stark.',
          es: 'No deis por hecho que el acceso en coche sea más fácil: varía mucho según el punto.',
          nl: 'Ga niet automatisch uit van eenvoudigere autotoegang: die verschilt sterk per locatie.',
          sv: 'Utgå inte från att bilåtkomsten är enklare: den varierar mycket mellan olika lägen.'
        } satisfies LocalizedText
      }
    ]
  },
  rhythm: {
    eyebrow: {
      en: 'The everyday test',
      de: 'Der Alltagstest',
      es: 'La prueba del día a día',
      nl: 'De dagelijkse test',
      sv: 'Vardagstestet'
    } satisfies LocalizedText,
    title: {
      en: 'Picture the whole day, not one walk',
      de: 'Stellt euch den ganzen Tag vor, nicht nur einen Weg',
      es: 'Imaginad el día completo, no un solo paseo',
      nl: 'Denk aan de hele dag, niet aan één wandeling',
      sv: 'Föreställ er hela dagen, inte en enda promenad'
    } satisfies LocalizedText,
    intro: {
      en: 'A location can feel perfect on arrival and tiring after several returns. Use an ordinary day to test whether the route suits you.',
      de: 'Eine Lage kann bei der Ankunft perfekt wirken und nach mehreren Rückwegen anstrengend werden. Prüft sie anhand eines ganz normalen Tages.',
      es: 'Una ubicación puede parecer perfecta al llegar y resultar cansada después de varios regresos. Probadla imaginando un día normal.',
      nl: 'Een locatie kan bij aankomst perfect voelen en na meerdere terugwegen vermoeiend worden. Test haar aan de hand van een gewone dag.',
      sv: 'Ett läge kan kännas perfekt vid ankomst men tröttande efter flera återvägar. Testa det genom att föreställa er en vanlig dag.'
    } satisfies LocalizedText,
    steps: [
      { number: '01', label: { en: 'Morning coffee', de: 'Morgenkaffee', es: 'Café de la mañana', nl: 'Ochtendkoffie', sv: 'Morgonkaffe' } satisfies LocalizedText },
      { number: '02', label: { en: 'Groceries', de: 'Einkäufe', es: 'Compras', nl: 'Boodschappen', sv: 'Inköp' } satisfies LocalizedText },
      { number: '03', label: { en: 'Dinner', de: 'Abendessen', es: 'Cena', nl: 'Diner', sv: 'Middag' } satisfies LocalizedText },
      { number: '04', label: { en: 'Return after dark', de: 'Rückweg im Dunkeln', es: 'Regreso de noche', nl: 'Terugweg in het donker', sv: 'Hemväg efter mörkrets inbrott' } satisfies LocalizedText }
    ],
    conclusion: {
      en: 'If the final return still feels realistic for your group, the location is probably a good match.',
      de: 'Wenn sich auch der letzte Rückweg für eure Gruppe realistisch anfühlt, passt die Lage wahrscheinlich gut.',
      es: 'Si el último regreso sigue pareciendo realista para vuestro grupo, probablemente la ubicación encaja.',
      nl: 'Als de laatste terugweg nog steeds realistisch voelt voor jullie gezelschap, past de locatie waarschijnlijk goed.',
      sv: 'Om den sista hemvägen fortfarande känns realistisk för ert sällskap passar läget sannolikt bra.'
    } satisfies LocalizedText
  },
  selfCheck: {
    title: {
      en: 'Check the exact route before booking',
      de: 'Prüft vor der Buchung den genauen Weg',
      es: 'Comprobad la ruta exacta antes de reservar',
      nl: 'Controleer de exacte route vóór het boeken',
      sv: 'Kontrollera den exakta vägen före bokning'
    } satisfies LocalizedText,
    steps: [
      {
        num: '01',
        title: { en: 'Ask about steps', de: 'Nach Stufen fragen', es: 'Preguntad por los escalones', nl: 'Vraag naar trappen', sv: 'Fråga om trappor' } satisfies LocalizedText,
        text: {
          en: 'The street can be accessible while the final doorway still includes steps.',
          de: 'Die Gasse kann gut erreichbar sein, während die Haustür dennoch über Stufen führt.',
          es: 'La calle puede ser accesible y, aun así, la puerta final tener escalones.',
          nl: 'De straat kan toegankelijk zijn terwijl de uiteindelijke ingang toch trappen heeft.',
          sv: 'Gränden kan vara tillgänglig samtidigt som den sista entrén ändå har trappor.'
        } satisfies LocalizedText
      },
      {
        num: '02',
        title: { en: 'Include luggage', de: 'Gepäck mitdenken', es: 'Tened en cuenta el equipaje', nl: 'Denk aan bagage', sv: 'Räkna med bagage' } satisfies LocalizedText,
        text: {
          en: 'Wheels, weight, and uneven surfaces can change an otherwise manageable walk.',
          de: 'Rollen, Gewicht und unebener Untergrund können einen sonst machbaren Weg verändern.',
          es: 'Las ruedas, el peso y el suelo irregular pueden cambiar un trayecto que sin equipaje sería sencillo.',
          nl: 'Wieltjes, gewicht en ongelijke ondergrond kunnen een anders haalbare wandeling veranderen.',
          sv: 'Hjul, vikt och ojämnt underlag kan förändra en annars hanterbar promenad.'
        } satisfies LocalizedText
      },
      {
        num: '03',
        title: { en: 'Be honest about mobility', de: 'Mobilität ehrlich einschätzen', es: 'Valorad la movilidad con realismo', nl: 'Wees realistisch over mobiliteit', sv: 'Var realistisk om rörlighet' } satisfies LocalizedText,
        text: {
          en: 'If steps, balance, heat, or repeated climbs are a concern, request precise access details.',
          de: 'Wenn Stufen, Gleichgewicht, Hitze oder wiederholte Anstiege problematisch sind, bittet um genaue Zugangsinformationen.',
          es: 'Si preocupan los escalones, el equilibrio, el calor o las subidas repetidas, pedid detalles precisos del acceso.',
          nl: 'Vraag om exacte toegangsinformatie als trappen, evenwicht, warmte of herhaalde klim een probleem zijn.',
          sv: 'Be om exakta tillträdesuppgifter om trappor, balans, värme eller upprepade stigningar är ett bekymmer.'
        } satisfies LocalizedText
      }
    ],
    faqTitle: {
      en: 'Questions about walking in Frigiliana',
      de: 'Fragen zum Gehen in Frigiliana',
      es: 'Preguntas sobre caminar en Frigiliana',
      nl: 'Vragen over lopen in Frigiliana',
      sv: 'Frågor om att gå i Frigiliana'
    } satisfies LocalizedText,
    faq: [
      {
        question: { en: 'Is Frigiliana very steep?', de: 'Ist Frigiliana sehr steil?', es: '¿Frigiliana es muy empinada?', nl: 'Is Frigiliana erg steil?', sv: 'Är Frigiliana mycket brant?' } satisfies LocalizedText,
        answer: {
          en: 'The historic village is built on a hillside, and many routes include noticeable gradients, steps, or both. The exact experience depends strongly on the street and accommodation entrance.',
          de: 'Der historische Ort liegt am Hang, und viele Wege enthalten deutliche Steigungen, Stufen oder beides. Wie es sich konkret anfühlt, hängt stark von Gasse und Unterkunftseingang ab.',
          es: 'El pueblo histórico está en una ladera y muchas rutas incluyen cuestas pronunciadas, escalones o ambas cosas. La experiencia exacta depende mucho de la calle y de la entrada del alojamiento.',
          nl: 'De historische kern ligt tegen een heuvel en veel routes hebben duidelijke hellingen, trappen of beide. De precieze ervaring hangt sterk af van de straat en de ingang van het verblijf.',
          sv: 'Den historiska byn ligger på en sluttning och många vägar har märkbara lutningar, trappor eller båda. Upplevelsen beror mycket på gränden och boendets entré.'
        } satisfies LocalizedText
      },
      {
        question: { en: 'Can I avoid stairs completely?', de: 'Kann ich Treppen vollständig vermeiden?', es: '¿Puedo evitar por completo las escaleras?', nl: 'Kan ik trappen volledig vermijden?', sv: 'Går det att undvika trappor helt?' } satisfies LocalizedText,
        answer: {
          en: 'Some routes avoid steps, but that does not guarantee a flat surface or a step-free entrance. Confirm the complete route from drop-off or parking to the door.',
          de: 'Einige Wege vermeiden Stufen, sind deshalb aber nicht automatisch eben oder bis zur Haustür stufenfrei. Bestätigt den vollständigen Weg vom Ausstieg oder Parkplatz bis zur Tür.',
          es: 'Algunas rutas evitan escalones, pero eso no garantiza una superficie llana ni una entrada sin peldaños. Confirmad todo el recorrido desde el punto de bajada o aparcamiento hasta la puerta.',
          nl: 'Sommige routes vermijden trappen, maar zijn daardoor niet automatisch vlak of trapvrij tot aan de deur. Bevestig de volledige route vanaf afzetpunt of parkeerplek.',
          sv: 'Vissa vägar undviker trappor men är därför inte automatiskt plana eller trappfria ända till dörren. Bekräfta hela vägen från avlämning eller parkering till entrén.'
        } satisfies LocalizedText
      },
      {
        question: { en: 'Is the lower village flat?', de: 'Ist der untere Ort eben?', es: '¿La zona baja es llana?', nl: 'Is het lagere dorp vlak?', sv: 'Är den nedre delen av byn plan?' } satisfies LocalizedText,
        answer: {
          en: 'No. Lower generally means less elevation relative to the upper old town, not a completely flat environment.',
          de: 'Nein. „Unten“ bedeutet im Vergleich zur oberen Altstadt meist weniger Höhenunterschied, aber keine vollständig ebene Umgebung.',
          es: 'No. “Zona baja” suele significar menos desnivel que la parte alta del casco, no un entorno completamente llano.',
          nl: 'Nee. Lager betekent meestal minder hoogteverschil dan de bovenste oude kern, niet een volledig vlakke omgeving.',
          sv: 'Nej. Nedre betyder oftast mindre höjdskillnad än den övre gamla stan, inte en helt plan miljö.'
        } satisfies LocalizedText
      },
      {
        question: { en: 'What should guests with limited mobility do?', de: 'Was sollten Gäste mit eingeschränkter Mobilität tun?', es: '¿Qué deben hacer las personas con movilidad reducida?', nl: 'Wat moeten gasten met beperkte mobiliteit doen?', sv: 'Vad bör gäster med nedsatt rörlighet göra?' } satisfies LocalizedText,
        answer: {
          en: 'Ask the accommodation for exact information about gradients, steps, surfaces, handrails, and the route from the nearest legal drop-off point. General village descriptions are not precise enough.',
          de: 'Bittet die Unterkunft um genaue Angaben zu Steigungen, Stufen, Untergrund, Handläufen und dem Weg vom nächsten erlaubten Ausstiegspunkt. Allgemeine Dorfbeschreibungen reichen dafür nicht aus.',
          es: 'Pedid al alojamiento información exacta sobre cuestas, escalones, suelo, pasamanos y la ruta desde el punto legal de bajada más cercano. Una descripción general del pueblo no es suficientemente precisa.',
          nl: 'Vraag het verblijf om exacte informatie over hellingen, trappen, ondergrond, leuningen en de route vanaf het dichtstbijzijnde toegestane afzetpunt. Algemene dorpsinformatie is niet nauwkeurig genoeg.',
          sv: 'Be boendet om exakta uppgifter om lutningar, trappor, underlag, ledstänger och vägen från närmaste tillåtna avlämningsplats. Allmän information om byn är inte tillräckligt exakt.'
        } satisfies LocalizedText
      }
    ]
  },
  context: {
    eyebrow: {
      en: 'Why it feels this way',
      de: 'Warum es sich so anfühlt',
      es: 'Por qué se siente así',
      nl: 'Waarom het zo voelt',
      sv: 'Varför det känns så'
    } satisfies LocalizedText,
    title: {
      en: 'The historic core follows the hillside',
      de: 'Die historische Altstadt folgt dem Hang',
      es: 'El casco histórico sigue la ladera',
      nl: 'De historische kern volgt de heuvel',
      sv: 'Den historiska kärnan följer sluttningen'
    } satisfies LocalizedText,
    body: {
      en: 'Narrow lanes and stepped passages keep most traffic out of the historic centre. They also make the exact route from a parking or drop-off point an important part of choosing where to stay.',
      de: 'Enge Gassen und gestufte Durchgänge halten den meisten Verkehr aus der historischen Altstadt heraus. Deshalb gehört der genaue Weg vom Parkplatz oder Ausstiegspunkt unbedingt zur Unterkunftswahl.',
      es: 'Las calles estrechas y los pasos escalonados mantienen la mayor parte del tráfico fuera del casco histórico. Por eso, el camino exacto desde el aparcamiento o punto de bajada importa al elegir alojamiento.',
      nl: 'Smalle steegjes en doorgangen met trappen houden het meeste verkeer buiten de historische kern. Daarom is de exacte route vanaf een parkeer- of uitstapplek belangrijk bij de keuze van een verblijf.',
      sv: 'Smala gränder och trappade passager håller den mesta trafiken utanför den historiska kärnan. Därför är den exakta vägen från parkering eller avlämningsplats viktig när ni väljer boende.'
    } satisfies LocalizedText,
    imageAlt: {
      en: 'Historic lanes following the hillside in Frigiliana',
      de: 'Historische Gassen am Hang von Frigiliana',
      es: 'Calles históricas siguiendo la ladera de Frigiliana',
      nl: 'Historische straatjes langs de heuvel in Frigiliana',
      sv: 'Historiska gränder längs sluttningen i Frigiliana'
    } satisfies LocalizedText
  },
  related: {
    title: {
      en: 'Plan the practical details',
      de: 'Die praktischen Details planen',
      es: 'Planificad los detalles prácticos',
      nl: 'Plan de praktische details',
      sv: 'Planera de praktiska detaljerna'
    } satisfies LocalizedText,
    links: [
      {
        token: 'location_frigiliana',
        label: { en: 'Frigiliana guide', de: 'Frigiliana-Guide', es: 'Guía de Frigiliana', nl: 'Frigiliana-gids', sv: 'Frigiliana-guide' } satisfies LocalizedText
      },
      {
        token: 'frigiliana_parking',
        label: { en: 'Parking in Frigiliana', de: 'Parken in Frigiliana', es: 'Aparcamiento en Frigiliana', nl: 'Parkeren in Frigiliana', sv: 'Parkering i Frigiliana' } satisfies LocalizedText
      },
      {
        token: 'getting_to_frigiliana',
        label: { en: 'Getting to Frigiliana', de: 'Anreise nach Frigiliana', es: 'Cómo llegar a Frigiliana', nl: 'Naar Frigiliana reizen', sv: 'Resa till Frigiliana' } satisfies LocalizedText
      },
      {
        token: 'romantic_hideaways',
        label: { en: 'AMARA stays', de: 'AMARA-Unterkünfte', es: 'Alojamientos AMARA', nl: 'AMARA-verblijven', sv: 'AMARA-boenden' } satisfies LocalizedText
      }
    ]
  },
  closing: {
    title: {
      en: 'Choose the route you will enjoy repeating.',
      de: 'Wählt den Weg, den ihr gern wiederholt.',
      es: 'Elegid la ruta que os guste repetir.',
      nl: 'Kies de route die jullie graag herhalen.',
      sv: 'Välj den väg ni gärna går om och om igen.'
    } satisfies LocalizedText,
    lead: {
      en: 'The right location is not the one with the shortest line on a map. It is the one that keeps your real days comfortable.',
      de: 'Die richtige Lage ist nicht die mit der kürzesten Linie auf der Karte, sondern die, die eure tatsächlichen Tage angenehm macht.',
      es: 'La ubicación adecuada no es la que dibuja la línea más corta en el mapa, sino la que hace cómodos vuestros días reales.',
      nl: 'De juiste locatie is niet die met de kortste lijn op de kaart, maar die jullie echte dagen comfortabel houdt.',
      sv: 'Rätt läge är inte det med kortast linje på kartan, utan det som gör era verkliga dagar bekväma.'
    } satisfies LocalizedText,
    staysCta: {
      en: 'View AMARA stays',
      de: 'AMARA-Unterkünfte ansehen',
      es: 'Ver alojamientos AMARA',
      nl: 'Bekijk AMARA-verblijven',
      sv: 'Se AMARA-boenden'
    } satisfies LocalizedText,
    parkingCta: {
      en: 'Plan parking',
      de: 'Parken planen',
      es: 'Planificar el aparcamiento',
      nl: 'Parkeren plannen',
      sv: 'Planera parkering'
    } satisfies LocalizedText
  }
} as const;
