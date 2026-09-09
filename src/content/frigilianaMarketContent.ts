import type { LocalizedText } from '../types/content';
import { routeOgImage } from '../lib/images/routeImages';
import type { AmaraAuthoringSeo } from '../types/seo';


const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

export const frigilianaMarketExternalLinks = {
  officialTourism: 'https://www.turismofrigiliana.es/es/',
  officialStreetMap: 'https://www.turismofrigiliana.es/es/callejero.html',
  officialIngenio:
    'https://www.turismofrigiliana.es/es/monumentos.html'
} as const;

export const frigilianaMarketSeo: AmaraAuthoringSeo = {
  version: '2026-07-27-frigiliana-market-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.market'),
  languages: {
    en: {
      title: 'Frigiliana Market: Day, Time & What to Expect',
      description:
        'Thursday morning is market day in Frigiliana: hours, Plaza de las Tres Culturas, what the stalls sell, where to park and how the morning continues.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Wochenmarkt in Frigiliana: Tag, Uhrzeit & Tipps',
      description:
        'Donnerstagvormittag ist Markt in Frigiliana: Uhrzeit, Plaza de las Tres Culturas, was es an den Ständen gibt, wo ihr parkt und wie der Vormittag danach weitergeht.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Mercado de Frigiliana: día, horario y consejos',
      description:
        'El jueves por la mañana hay mercado en Frigiliana: horario, Plaza de las Tres Culturas, qué venden los puestos, dónde aparcar y cómo sigue la mañana.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Markt van Frigiliana: dag, tijd en tips',
      description:
        'Donderdagochtend is het markt in Frigiliana: tijden, Plaza de las Tres Culturas, wat de kramen verkopen, waar je parkeert en hoe de ochtend verdergaat.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Marknaden i Frigiliana: dag, tid och tips',
      description:
        'Torsdag förmiddag är det marknad i Frigiliana: tider, Plaza de las Tres Culturas, vad stånden säljer, var ni parkerar och hur förmiddagen fortsätter.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaMarketCopy = {
  nav: {
    brand: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana'),
    links: [
      {
        token: 'location_frigiliana',
        label: l('Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana', 'Frigiliana')
      },
      {
        token: 'frigiliana_market',
        label: l('Market', 'Wochenmarkt', 'Mercado', 'Markt', 'Marknad')
      },
      {
        token: 'frigiliana_parking',
        label: l('Parking', 'Parken', 'Aparcamiento', 'Parkeren', 'Parkering')
      }
    ]
  },
  hero: {
    eyebrow: l(
      'Thursday morning · Frigiliana',
      'Donnerstagvormittag · Frigiliana',
      'Jueves por la mañana · Frigiliana',
      'Donderdagochtend · Frigiliana',
      'Torsdag förmiddag · Frigiliana'
    ),
    title: l(
      'Thursday is market day',
      'Donnerstag ist Markt',
      'El jueves es día de mercado',
      'Donderdag is het markt',
      'Torsdag är marknadsdag'
    ),
    lead: l(
      'Every Thursday morning the stalls stand down at Plaza de las Tres Culturas: fruit and vegetables, olives and cheese, clothes, shoes, household bits, a few stalls for visitors. Then a coffee, then up into the lanes.',
      'Jeden Donnerstagvormittag stehen die Stände unten an der Plaza de las Tres Culturas: Obst und Gemüse, Oliven und Käse, Kleider, Schuhe, Haushaltskram, ein paar Stände für Besucher. Danach ein Kaffee, dann hinauf in die Gassen.',
      'Cada jueves por la mañana los puestos se montan abajo, en la Plaza de las Tres Culturas: fruta y verdura, aceitunas y queso, ropa, zapatos, cosas de casa, algunos puestos para visitantes. Después un café, y luego arriba por las callejuelas.',
      'Elke donderdagochtend staan de kramen beneden op Plaza de las Tres Culturas: groente en fruit, olijven en kaas, kleding, schoenen, huishoudspullen, een paar kramen voor bezoekers. Daarna een koffie, dan omhoog de steegjes in.',
      'Varje torsdag förmiddag står stånden nere vid Plaza de las Tres Culturas: frukt och grönsaker, oliver och ost, kläder, skor, hushållsprylar, några stånd för besökare. Sedan en kaffe, sedan upp i gränderna.'
    ),
    body: l(
      'From about eight to two. In holiday weeks the date can shift.',
      'Von etwa acht bis zwei. In Feiertagswochen kann der Termin wandern.',
      'De unas ocho a dos. En semanas festivas la fecha puede moverse.',
      'Van ongeveer acht tot twee. In feestweken kan de datum verschuiven.',
      'Från ungefär åtta till två. Under helgveckor kan datumet flytta sig.'
    ),
    primaryCta: l(
      'What there is',
      'Was es gibt',
      'Lo que hay',
      'Wat er is',
      'Vad som finns'
    ),
    secondaryCta: l(
      'Where you park',
      'Wo ihr parkt',
      'Dónde aparcar',
      'Waar je parkeert',
      'Var ni parkerar'
    ),
  },
  facts: {
    title: l(
      'At a glance',
      'Auf einen Blick',
      'De un vistazo',
      'In het kort',
      'I korthet'
    ),
    items: [
      {
        label: l('Regular day', 'Regulärer Tag', 'Día habitual', 'Vaste dag', 'Ordinarie dag'),
        value: l('Thursday', 'Donnerstag', 'Jueves', 'Donderdag', 'Torsdag'),
        note: l(
          'Every week, all year round.',
          'Jede Woche, das ganze Jahr.',
          'Cada semana, todo el año.',
          'Elke week, het hele jaar.',
          'Varje vecka, året runt.'
        )
      },
      {
        label: l('Typical time', 'Typische Uhrzeit', 'Horario habitual', 'Gebruikelijke tijd', 'Vanlig tid'),
        value: l('08:00–14:00', '08:00–14:00 Uhr', '08:00–14:00', '08:00–14:00', '08:00–14:00'),
        note: l(
          'Loveliest between ten and twelve.',
          'Am schönsten zwischen zehn und zwölf.',
          'Lo mejor entre las diez y las doce.',
          'Het mooist tussen tien en twaalf.',
          'Vackrast mellan tio och tolv.'
        )
      },
      {
        label: l('Location', 'Standort', 'Ubicación', 'Locatie', 'Plats'),
        value: l(
          'Plaza de las Tres Culturas',
          'Plaza de las Tres Culturas',
          'Plaza de las Tres Culturas',
          'Plaza de las Tres Culturas',
          'Plaza de las Tres Culturas'
        ),
        note: l(
          'Down in the village, next to the underground car park.',
          'Unten im Ort, neben der Tiefgarage.',
          'En la parte baja del pueblo, junto al parking subterráneo.',
          'Beneden in het dorp, naast de parkeergarage.',
          'Nere i byn, intill parkeringshuset.'
        )
      },
      {
        label: l('Format', 'Format', 'Formato', 'Opzet', 'Format'),
        value: l('Compact & varied', 'Kompakt & gemischt', 'Compacto y variado', 'Compact & gevarieerd', 'Kompakt & varierat'),
        note: l(
          'A village market: walked in half an hour, enjoyed in two.',
          'Ein Dorfmarkt: in einer halben Stunde abgelaufen, in zwei Stunden genossen.',
          'Un mercado de pueblo: se recorre en media hora, se disfruta en dos.',
          'Een dorpsmarkt: in een halfuur afgelopen, in twee uur genoten.',
          'En bymarknad: avklarad på en halvtimme, avnjuten på två.'
        )
      }
    ]
  },
  stalls: {
    eyebrow: l(
      'What to expect',
      'Was euch erwartet',
      'Qué podéis encontrar',
      'Wat jullie kunnen verwachten',
      'Vad ni kan förvänta er'
    ),
    title: l(
      'A village market as it should be',
      'Ein Dorfmarkt, wie er sein soll',
      'Un mercado de pueblo como debe ser',
      'Een dorpsmarkt zoals het hoort',
      'En bymarknad som den ska vara'
    ),
    intro: l(
      'Some of the stalls are there for the people of the village, some for the guests. The mix is what makes it.',
      'Ein Teil der Stände ist für die Leute aus dem Dorf da, ein Teil für die Gäste. Die Mischung macht ihn aus.',
      'Una parte de los puestos es para la gente del pueblo, otra para los visitantes. La mezcla es lo que lo define.',
      'Een deel van de kramen is er voor de mensen uit het dorp, een deel voor de gasten. De mix maakt het.',
      'En del av stånden finns för byborna, en del för gästerna. Blandningen är det som gör den.'
    ),
    labels: {
      expect: l('What there is', 'Was es gibt', 'Lo que hay', 'Wat er is', 'Vad som finns'),
      remember: l('Keep in mind', 'Gut zu wissen', 'Tened en cuenta', 'Houd rekening met', 'Tänk på')
    },
    items: [
      {
        number: '01',
        title: l(
          'Food & produce',
          'Lebensmittel & Frisches',
          'Alimentación y productos frescos',
          'Eten & verse producten',
          'Mat & färska råvaror'
        ),
        summary: l(
          'Seasonal fruit and vegetables, olives, cheese, herbs, preserves.',
          'Obst und Gemüse der Saison, Oliven, Käse, Kräuter, Eingemachtes.',
          'Fruta y verdura de temporada, aceitunas, queso, hierbas, conservas.',
          'Seizoensgroente en -fruit, olijven, kaas, kruiden, ingemaakt.',
          'Säsongens frukt och grönsaker, oliver, ost, örter, inläggningar.'
        ),
        expect: l(
          'Tomatoes and peaches in summer, oranges and avocados from the area in winter.',
          'Im Sommer Tomaten und Pfirsiche, im Winter Orangen und Avocados aus der Gegend.',
          'Tomates y melocotones en verano, naranjas y aguacates de la zona en invierno.',
          'Tomaten en perziken in de zomer, sinaasappels en avocado’s uit de streek in de winter.',
          'Tomater och persikor på sommaren, apelsiner och avokado från trakten på vintern.'
        ),
        remember: l(
          'If you want to know where something comes from, ask at the stall; the traders like to tell.',
          'Wer wissen will, woher etwas kommt, fragt am Stand; die Händler erzählen gern.',
          'Si queréis saber de dónde viene algo, preguntad en el puesto; a los vendedores les gusta contarlo.',
          'Wie wil weten waar iets vandaan komt, vraagt het bij de kraam; de handelaren vertellen het graag.',
          'Vill ni veta varifrån något kommer, fråga vid ståndet; handlarna berättar gärna.'
        )
      },
      {
        number: '02',
        title: l(
          'Clothing & everyday goods',
          'Kleidung & Alltagswaren',
          'Ropa y artículos cotidianos',
          'Kleding & dagelijkse artikelen',
          'Kläder & vardagsvaror'
        ),
        summary: l(
          'Clothes, shoes, tablecloths, bags, kitchen things.',
          'Kleider, Schuhe, Tischdecken, Taschen, Küchenzeug.',
          'Ropa, zapatos, manteles, bolsos, cosas de cocina.',
          'Kleding, schoenen, tafelkleden, tassen, keukenspullen.',
          'Kläder, skor, dukar, väskor, köksprylar.'
        ),
        expect: l(
          'The stalls where the neighbours shop.',
          'Die Stände, an denen die Nachbarinnen einkaufen.',
          'Los puestos donde compran las vecinas.',
          'De kramen waar de buurvrouwen inkopen doen.',
          'Stånden där grannarna handlar.'
        ),
        remember: l(
          'This is where the market is most village.',
          'Hier ist der Markt am meisten Dorf.',
          'Aquí el mercado es más pueblo que nunca.',
          'Hier is de markt het meest dorp.',
          'Här är marknaden som mest by.'
        )
      },
      {
        number: '03',
        title: l(
          'Gifts & regional products',
          'Geschenke & regionale Produkte',
          'Regalos y productos regionales',
          'Cadeaus & regionale producten',
          'Presenter & regionala produkter'
        ),
        summary: l(
          'Ceramics, leather, jewellery, decor, packaged treats to take home.',
          'Keramik, Leder, Schmuck, Deko, verpackte Leckereien zum Mitnehmen.',
          'Cerámica, cuero, bisutería, decoración, delicias envasadas para llevar.',
          'Keramiek, leer, sieraden, decoratie, verpakte lekkernijen om mee te nemen.',
          'Keramik, läder, smycken, inredning, förpackade godsaker att ta med.'
        ),
        expect: l(
          'From handmade to wholesale, everything is there.',
          'Von Handarbeit bis Großhandel alles dabei.',
          'De lo artesanal a lo de mayorista, hay de todo.',
          'Van handwerk tot groothandel, alles is er.',
          'Från handgjort till grossist, allt finns.'
        ),
        remember: l(
          'You recognise the handmade pieces by talking to the person who made them.',
          'Handgemachtes erkennt ihr am Gespräch mit dem, der es gemacht hat.',
          'Lo hecho a mano se reconoce hablando con quien lo hizo.',
          'Handgemaakt herken je aan het gesprek met wie het gemaakt heeft.',
          'Det handgjorda känner ni igen på samtalet med den som gjort det.'
        )
      }
    ]
  },
  morning: {
    title: l(
      'How our Thursday goes',
      'So läuft unser Donnerstag',
      'Así es nuestro jueves',
      'Zo verloopt onze donderdag',
      'Så går vår torsdag'
    ),
    steps: [
      {
        num: '01',
        title: l(
          'Breakfast early',
          'Früh frühstücken',
          'Desayunar temprano',
          'Vroeg ontbijten',
          'Frukost tidigt'
        ),
        text: l(
          'On the terrace or in a bar on the plaza, before it gets busy.',
          'Auf der Terrasse oder in einer Bar an der Plaza, bevor es voll wird.',
          'En la terraza o en un bar de la plaza, antes de que se llene.',
          'Op het terras of in een bar aan het plein, voor het vol wordt.',
          'På terrassen eller i en bar vid torget, innan det blir fullt.'
        )
      },
      {
        num: '02',
        title: l(
          'To the market around ten',
          'Gegen zehn zum Markt',
          'Al mercado hacia las diez',
          'Rond tien uur naar de markt',
          'Till marknaden runt tio'
        ),
        text: l(
          'From Casa AMARA it is a few minutes downhill. If you come by car, park in the underground car park right next to it.',
          'Von Casa AMARA sind es ein paar Minuten bergab. Wer mit dem Auto kommt, parkt in der Tiefgarage direkt daneben.',
          'Desde Casa AMARA son unos minutos cuesta abajo. Quien viene en coche aparca en el parking subterráneo de al lado.',
          'Vanaf Casa AMARA is het een paar minuten naar beneden. Wie met de auto komt, parkeert in de parkeergarage er direct naast.',
          'Från Casa AMARA är det några minuter nedför. Kommer ni med bil parkerar ni i parkeringshuset alldeles intill.'
        )
      },
      {
        num: '03',
        title: l(
          'Browse without a list',
          'Ohne Liste stöbern',
          'Curiosear sin lista',
          'Zonder lijstje rondkijken',
          'Strosa utan lista'
        ),
        text: l(
          'Taste the olives, cheese for the evening, a dress that would never fit at home and is just right here.',
          'Oliven probieren, Käse für den Abend, ein Kleid, das zu Hause nie passen würde und hier genau richtig ist.',
          'Probar aceitunas, queso para la noche, un vestido que en casa nunca pegaría y aquí queda perfecto.',
          'Olijven proeven, kaas voor de avond, een jurk die thuis nooit zou passen en hier precies goed is.',
          'Smaka oliver, ost till kvällen, en klänning som aldrig skulle passa hemma och som är helt rätt här.'
        )
      },
      {
        num: '04',
        title: l(
          'Up into the lanes',
          'Hinauf in die Gassen',
          'Arriba por las callejuelas',
          'Omhoog de steegjes in',
          'Upp i gränderna'
        ),
        text: l(
          'With your shopping through the old town and onto a terrace for lunch.',
          'Mit dem Einkauf durch die Altstadt und zum Mittagessen auf eine Terrasse.',
          'Con la compra por el casco antiguo y a una terraza a comer.',
          'Met de boodschappen door de oude kern en naar een terras voor de lunch.',
          'Med inköpen genom gamla byn och till en terrass för lunch.'
        )
      }
    ],
    faqTitle: l(
      'Questions about the market',
      'Fragen zum Wochenmarkt',
      'Preguntas sobre el mercado',
      'Vragen over de markt',
      'Frågor om marknaden'
    ),
    faq: [
      {
        question: l(
          'Does the market take place every Thursday?',
          'Findet der Markt jeden Donnerstag statt?',
          '¿Se celebra todos los jueves?',
          'Is de markt iedere donderdag?',
          'Hålls marknaden varje torsdag?'
        ),
        answer: l(
          'Yes, all year. If a public holiday falls on a Thursday, it may be cancelled or moved.',
          'Ja, das ganze Jahr. Fällt ein Feiertag auf den Donnerstag, kann er ausfallen oder verschoben werden.',
          'Sí, todo el año. Si un festivo cae en jueves, puede cancelarse o moverse.',
          'Ja, het hele jaar. Valt een feestdag op donderdag, dan kan hij uitvallen of verschuiven.',
          'Ja, året runt. Infaller en helgdag på en torsdag kan den utgå eller flyttas.'
        )
      },
      {
        question: l(
          'Can I pay by card?',
          'Kann ich mit Karte bezahlen?',
          '¿Se puede pagar con tarjeta?',
          'Kan ik met kaart betalen?',
          'Kan jag betala med kort?'
        ),
        answer: l(
          'At some stalls. A few notes in your pocket make it easier.',
          'An manchen Ständen. Ein paar Scheine in der Tasche machen es einfacher.',
          'En algunos puestos. Unos billetes en el bolsillo lo hacen más fácil.',
          'Bij sommige kramen. Een paar briefjes op zak maken het makkelijker.',
          'Vid vissa stånd. Några sedlar i fickan gör det enklare.'
        )
      },
      {
        question: l(
          'Is there also a Sunday market?',
          'Gibt es auch einen Sonntagsmarkt?',
          '¿También hay mercado los domingos?',
          'Is er ook een zondagsmarkt?',
          'Finns det också en söndagsmarknad?'
        ),
        answer: l(
          'Not a regular one. Craft and festival markets happen on a few weekends a year; the town hall announces them, and we tell you if one falls in your week.',
          'Keinen regelmäßigen. Kunsthandwerks- und Festmärkte gibt es an einzelnen Wochenenden im Jahr; die Gemeinde kündigt sie an, und wir sagen es euch, wenn einer in eure Woche fällt.',
          'No regular. Hay mercados de artesanía y de fiestas algunos fines de semana al año; el ayuntamiento los anuncia, y os avisamos si uno cae en vuestra semana.',
          'Geen regelmatige. Ambachts- en feestmarkten zijn er op een paar weekenden per jaar; de gemeente kondigt ze aan, en wij vertellen het als er een in jullie week valt.',
          'Ingen regelbunden. Hantverks- och festmarknader hålls några helger om året; kommunen annonserar dem, och vi säger till om en infaller under er vecka.'
        )
      },
      {
        question: l(
          'Is the market accessible?',
          'Ist der Markt barrierefrei erreichbar?',
          '¿El mercado es accesible?',
          'Is de markt toegankelijk?',
          'Är marknaden tillgänglig?'
        ),
        answer: l(
          'The plaza is down below and level. It gets crowded between the stalls, and the way up into the old town has steps.',
          'Die Plaza liegt unten und ist eben. Zwischen den Ständen wird es voll, und der Weg hinauf in die Altstadt hat Stufen.',
          'La plaza está abajo y es llana. Entre los puestos se llena de gente, y el camino hacia el casco antiguo tiene escalones.',
          'Het plein ligt beneden en is vlak. Tussen de kramen wordt het vol, en de weg omhoog naar de oude kern heeft treden.',
          'Torget ligger nere och är plant. Mellan stånden blir det fullt, och vägen upp till gamla byn har trappsteg.'
        )
      }
    ]
  },
  ingenio: {
    eyebrow: l(
      'A Frigiliana product',
      'Ein Produkt aus Frigiliana',
      'Un producto de Frigiliana',
      'Een product uit Frigiliana',
      'En produkt från Frigiliana'
    ),
    title: l(
      'Miel de caña, the village’s syrup',
      'Miel de caña, der Sirup des Dorfes',
      'Miel de caña, el sirope del pueblo',
      'Miel de caña, de siroop van het dorp',
      'Miel de caña, byns sirap'
    ),
    body: l(
      'At the entrance to the village stands El Ingenio, the Nuestra Señora del Carmen factory. Miel de caña is still cooked there today, a dark sugar-cane syrup from a tradition that goes back centuries here. You eat it in the village over fried aubergine and find it in jars at the market and in the shops. The factory itself is working and is not normally open to visitors.',
      'Unten am Ortseingang steht El Ingenio, die Fabrik Nuestra Señora del Carmen. Dort wird bis heute Miel de caña gekocht, ein dunkler Zuckerrohrsirup aus einer Tradition, die hier Jahrhunderte zurückreicht. Ihr esst ihn im Dorf über frittierten Auberginen und findet ihn am Markt und in den Läden im Glas. Die Fabrik selbst arbeitet und ist normalerweise nicht zu besichtigen.',
      'A la entrada del pueblo está El Ingenio, la fábrica Nuestra Señora del Carmen. Allí se sigue cociendo la miel de caña, un sirope oscuro de caña de azúcar de una tradición que aquí se remonta siglos. La comeréis en el pueblo sobre berenjenas fritas y la encontraréis en tarros en el mercado y en las tiendas. La fábrica está en funcionamiento y normalmente no se visita.',
      'Beneden bij de ingang van het dorp staat El Ingenio, de fabriek Nuestra Señora del Carmen. Daar wordt tot op vandaag miel de caña gekookt, een donkere suikerrietsiroop uit een traditie die hier eeuwen teruggaat. Je eet hem in het dorp over gefrituurde aubergine en vindt hem in potjes op de markt en in de winkels. De fabriek zelf werkt en is normaal niet te bezoeken.',
      'Nere vid byns infart står El Ingenio, fabriken Nuestra Señora del Carmen. Där kokas än i dag miel de caña, en mörk sockerrörssirap ur en tradition som går århundraden tillbaka här. Ni äter den i byn över friterad aubergine och hittar den på burk på marknaden och i butikerna. Fabriken själv är i drift och kan normalt inte besökas.'
    ),
    cta: l(
      'More about El Ingenio',
      'Mehr zum El Ingenio',
      'Más sobre El Ingenio',
      'Meer over El Ingenio',
      'Mer om El Ingenio'
    ),
    imageAlt: l(
      'Historic brick arch and whitewashed houses in Frigiliana',
      'Historischer Ziegelbogen und weiße Häuser in Frigiliana',
      'Arco histórico de ladrillo y casas blancas de Frigiliana',
      'Historische bakstenen boog en witte huizen in Frigiliana',
      'Historisk tegelbåge och vitkalkade hus i Frigiliana'
    )
  },
  marketTypes: {
    eyebrow: l(
      'Also',
      'Außerdem',
      'Además',
      'Verder',
      'Dessutom'
    ),
    title: l(
      'Other markets during the year',
      'Andere Märkte im Jahr',
      'Otros mercados durante el año',
      'Andere markten in het jaar',
      'Andra marknader under året'
    ),
    body: l(
      'Besides Thursday there are occasional craft and festival markets, for example around the Festival of the Three Cultures at the end of August. They have their own dates and places; the town hall announces them.',
      'Neben dem Donnerstag gibt es einzelne Kunsthandwerks- und Festmärkte, etwa zum Festival der drei Kulturen Ende August. Sie haben eigene Termine und Orte; die Gemeinde kündigt sie an.',
      'Además del jueves hay mercados de artesanía y de fiestas puntuales, por ejemplo con el Festival de las Tres Culturas a finales de agosto. Tienen sus propias fechas y lugares; el ayuntamiento los anuncia.',
      'Naast de donderdag zijn er losse ambachts- en feestmarkten, bijvoorbeeld rond het Festival van de Drie Culturen eind augustus. Ze hebben eigen data en plekken; de gemeente kondigt ze aan.',
      'Utöver torsdagen finns enstaka hantverks- och festmarknader, till exempel kring De tre kulturernas festival i slutet av augusti. De har egna datum och platser; kommunen annonserar dem.'
    )
  },
  liveInfo: {
    eyebrow: l(
      'Explore further',
      'Mehr erfahren',
      'Explorar más',
      'Meer ontdekken',
      'Utforska mer'
    ),
    title: l(
      'Links to look into it yourself',
      'Weiterführende Links',
      'Enlaces para saber más',
      'Links om zelf verder te kijken',
      'Länkar för att läsa vidare'
    ),
    intro: l(
      'Tourist office and town map of the municipality of Frigiliana.',
      'Tourismusbüro und Ortsplan der Gemeinde Frigiliana.',
      'Oficina de turismo y plano del municipio de Frigiliana.',
      'Toeristenbureau en plattegrond van de gemeente Frigiliana.',
      'Turistbyrå och karta från Frigilianas kommun.'
    ),
    checked: l(
      'As of July 2026',
      'Stand Juli 2026',
      'Actualizado en julio de 2026',
      'Stand juli 2026',
      'Uppdaterad juli 2026'
    ),
    links: [
      {
        key: 'officialTourism',
        label: l(
          'Official Frigiliana tourism office',
          'Offizielles Tourismusbüro Frigiliana',
          'Oficina oficial de turismo de Frigiliana',
          'Officieel toeristenbureau van Frigiliana',
          'Frigilianas officiella turistbyrå'
        ),
        text: l(
          'Opening hours and dates.',
          'Öffnungszeiten und Termine.',
          'Horarios y fechas.',
          'Openingstijden en data.',
          'Öppettider och datum.'
        )
      },
      {
        key: 'officialStreetMap',
        label: l(
          'Official street map',
          'Offizieller Ortsplan',
          'Callejero oficial',
          'Officiële stratenkaart',
          'Officiell gatukarta'
        ),
        text: l(
          'Plaza, car park and lanes on one map.',
          'Plaza, Parkhaus und Gassen auf einer Karte.',
          'Plaza, parking y callejuelas en un mapa.',
          'Plein, parkeergarage en steegjes op één kaart.',
          'Torg, parkeringshus och gränder på en karta.'
        )
      }
    ]
  },
  related: {
    title: l(
      'On through the village',
      'Weiter im Dorf',
      'Seguir por el pueblo',
      'Verder in het dorp',
      'Vidare i byn'
    ),
    links: [
      {
        token: 'frigiliana_parking',
        label: l(
          'Parking in Frigiliana',
          'Parken in Frigiliana',
          'Aparcamiento en Frigiliana',
          'Parkeren in Frigiliana',
          'Parkering i Frigiliana'
        )
      },
      {
        token: 'frigiliana_stairs',
        label: l(
          'Where to stay in Frigiliana',
          'Wo in Frigiliana übernachten?',
          'Dónde alojarse en Frigiliana',
          'Waar overnachten in Frigiliana?',
          'Var ska man bo i Frigiliana?'
        )
      },
      {
        token: 'getting_to_frigiliana',
        label: l(
          'Getting to Frigiliana',
          'Anreise nach Frigiliana',
          'Cómo llegar a Frigiliana',
          'Naar Frigiliana reizen',
          'Resa till Frigiliana'
        )
      },
      {
        token: 'location_frigiliana',
        label: l(
          'Frigiliana guide',
          'Frigiliana-Guide',
          'Guía de Frigiliana',
          'Frigiliana-gids',
          'Frigiliana-guide'
        )
      }
    ]
  },
  closing: {
    title: l(
      'For the rest of your stay',
      'Für die übrigen Tage eures Aufenthalts',
      'Para el resto de vuestra estancia',
      'Voor de rest van jullie verblijf',
      'För resten av er vistelse'
    ),
    lead: l(
      'Thursday is our market day. On the other days we shop in the small stores in the village; which ones, you find here.',
      'Der Donnerstag ist unser Markttag. An den anderen Tagen kaufen wir in den kleinen Läden im Dorf ein; welche das sind, steht hier.',
      'El jueves es nuestro día de mercado. Los demás días compramos en las tiendas pequeñas del pueblo; cuáles son, lo tenéis aquí.',
      'Donderdag is onze marktdag. Op de andere dagen doen we boodschappen in de kleine winkels in het dorp; welke dat zijn, staat hier.',
      'Torsdag är vår marknadsdag. De andra dagarna handlar vi i de små butikerna i byn; vilka de är står här.'
    ),
    nextCta: l(
      'Groceries & shops in Frigiliana',
      'Lebensmittel & Läden in Frigiliana',
      'Alimentación y tiendas en Frigiliana',
      'Boodschappen & winkels in Frigiliana',
      'Matbutiker & affärer i Frigiliana'
    )
  }
} as const;
