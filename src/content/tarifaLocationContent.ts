import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type TarifaLocationHubLinkToken =
  | 'getting_to_tarifa'
  | 'tarifa_geography'
  | 'tarifa_where_to_stay'
  | 'tarifa_weather'
  | 'tarifa_experience_hub'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority'
  | 'casa';

export interface TarifaLocationHubLink {
  label: string;
  token?: TarifaLocationHubLinkToken;
  anchor?: string;
}

interface TarifaLocationHubFeature {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  link?: TarifaLocationHubLink;
}

interface TarifaLocationHubLocale {
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  geography: TarifaLocationHubFeature & {
    markers: Array<{ label: string; value: string }>;
  };
  arrival: TarifaLocationHubFeature;
  areas: TarifaLocationHubFeature & {
    archetypes: Array<{ title: string; consequence: string }>;
  };
  weather: TarifaLocationHubFeature;
  dailyLife: TarifaLocationHubFeature;
  winter: TarifaLocationHubFeature;
  amara: TarifaLocationHubFeature & {
    facts: string[];
    imageAlt: string;
  };
  experience: TarifaLocationHubFeature & {
    links: TarifaLocationHubLink[];
  };
  /** Booking-facing close. Rolled out per language as each locale is rewritten. */
  closing?: {
    title: string;
    lead: string;
    ctaLabel: string;
  };
}

const seo: AmaraAuthoringSeo = {
  version: '2026-08-13-tarifa-location-hub-v4.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article: {
    datePublished: '2026-08-03',
    dateModified: '2026-08-13',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorSlug: 'amara-about-us'
  },
  languages: {
    en: {
      title: 'Tarifa Location Guide: Town, Coast & Your Stay | AMARA',
      description: 'See where Tarifa is, how its town and Atlantic coast connect, and what arrival, weather, daily life and seasons mean for a multi-day stay.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Tarifa Lage-Guide: Ort, Küste & Aufenthalt | AMARA',
      description: 'Tarifa verbindet einen kompakten Ort mit einer weiten Atlantikküste; dazu kommen praktische Hinweise zu Anreise, Wetter, Alltag und Jahreszeiten.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Guía de ubicación de Tarifa: pueblo, costa y estancia | AMARA',
      description: 'Tarifa une un núcleo urbano compacto con la costa atlántica; aquí encontrarás información práctica sobre llegada, clima, vida diaria y temporadas.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Tarifa locatiegids: stad, kust en verblijf | AMARA',
      description: 'Ontdek waar Tarifa ligt, hoe stad en Atlantische kust samenhangen en wat aankomst, weer, dagelijks leven en seizoenen betekenen voor jullie verblijf.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Tarifa lägesguide: stad, kust och vistelse | AMARA',
      description: 'Se var Tarifa ligger, hur staden och Atlantkusten hänger ihop och vad ankomst, väder, vardag och årstider betyder för en vistelse över flera dagar.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const tarifaLocationContent: {
  token: 'location_tarifa';
  seo: AmaraAuthoringSeo;
  locales: Record<AmaraLanguage, TarifaLocationHubLocale>;
} = {
  token: 'location_tarifa',
  seo,
  locales: {
    en: {
      hero: {
        eyebrow: 'Tarifa location guide',
        title: 'Tarifa between town, Atlantic and open coast',
        standfirst: 'Tarifa is a compact Atlantic town with several very different ways to inhabit it. This guide gives first-time overnight guests the geographic and practical overview before the details split into arrival, areas, climate, daily life and winter.',
        note: 'An independent AMARA guide for planning a stay — not a live conditions service.',
        updated: 'Reviewed August 2026'
      },
      geography: {
        eyebrow: 'Geography first',
        title: 'A small town connected to a much wider coast',
        paragraphs: [
          'Tarifa sits at the meeting of the Atlantic and the Strait of Gibraltar. The historic centre and newer town form a compact urban base, while the open coast extends west toward a different beach-and-watersports landscape.',
          'That relationship shapes the destination: town life can remain walkable, but many beach, nature and activity days reach beyond the centre. Tarifa brings together the town, an urban beach edge, a westbound coast and an inland landscape.'
        ],
        markers: [
          { label: 'Urban core', value: 'Old Town + newer town' },
          { label: 'Everyday coast', value: 'Town beaches + Los Lances edge' },
          { label: 'Wider horizon', value: 'Western beaches + countryside' }
        ]
      },
      arrival: {
        eyebrow: 'Arrival & mobility',
        title: 'The right mobility plan depends on the stay you want',
        paragraphs: [
          'A central Tarifa stay can work without daily car use. Restaurants, ordinary errands and nearby parts of the coast can remain part of a walking routine.',
          'A car becomes more valuable when western beaches, repeated watersports days, nature or regional excursions are central to the trip. The important distinction is not simply whether you arrive by car, but whether you expect to use it repeatedly after arrival.',
          'Exact parking, luggage and transfer mechanics belong to the future Arrival & Mobility guide. For now, choose accommodation with your real movement pattern in mind.'
        ]
      },
      areas: {
        eyebrow: 'Where to stay',
        title: 'Every Tarifa base makes a different promise',
        paragraphs: [
          'The Old Town prioritises immediacy. La Marina balances town with practical movement. The Los Lances urban corridor places the Atlantic closer to daily life. Countryside stays exchange walkability for space and separation.',
          'None wins every category. What matters is which daily trade-off feels right for your stay.'
        ],
        archetypes: [
          { title: 'Old Town', consequence: 'Town life at the door; car and luggage logistics need more thought.' },
          { title: 'La Marina', consequence: 'A practical urban balance between walking, services and driving.' },
          { title: 'Los Lances corridor', consequence: 'A more beach-led routine with less spontaneous town life.' },
          { title: 'Countryside & hills', consequence: 'Space and quiet, with daily life organised around a car.' }
        ],
        link: { label: 'Compare Tarifa’s areas in depth', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Weather, climate & seasons',
        title: 'Conditions change the rhythm, not the identity of Tarifa',
        paragraphs: [
          'Wind belongs to Tarifa, but its practical effect depends on the day, the activity and the exact setting. Open coastal space, sheltered urban streets and a private terrace do not all feel the same under one forecast.',
          'Summer brings a busier road, beach and evening rhythm. Outside the peak, planning often shifts toward flexibility, indoor comfort and the ordinary pattern of a longer stay. Current forecasts and local rules should always take priority close to travel.'
        ],
        link: { label: 'Explore Tarifa weather & seasons', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Daily life & services',
        title: 'After the first day, convenience becomes part of the destination',
        paragraphs: [
          'A multi-day stay is shaped by repeated routes: buying groceries, walking to dinner, reaching the beach, leaving the car parked or taking it out again.',
          'The most memorable setting is not automatically the easiest everyday base. Match the location to the routines you expect to repeat, and verify any time-sensitive service directly before relying on it.'
        ]
      },
      winter: {
        eyebrow: 'Winter stays',
        title: 'A slower Tarifa rewards a more considered base',
        paragraphs: [
          'Winter replaces peak-season intensity with a quieter and less predictable rhythm. Wind, cooler spells and rain can place more value on comfortable indoor space, practical shopping and the ability to change plans.',
          'For a longer stay, heating, workspace, parking and daily services can matter as much as beach proximity. Winter is not simply summer with fewer people; it is a different way of using the same geography.'
        ]
      },
      amara: {
        eyebrow: 'At AMARA',
        title: 'Why La Marina works well for an AMARA stay',
        paragraphs: [
          'AMARA Family & Surf is in La Marina. We chose this setting for a specific balance rather than because one area is universally best.',
          'It keeps the Old Town within an approximate 10–15 minute walk while supporting practical everyday and westbound movement. The trade-off is that the historic centre is not immediately outside the door.'
        ],
        facts: [
          'Reserved underground parking',
          'Supermarket directly opposite',
          'Practical westbound car access toward Valdevaqueros and western beaches'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'View AMARA Family & Surf', token: 'casa' }
      },
      experience: {
        eyebrow: 'From place to experience',
        title: 'From the place itself to the days you spend here',
        paragraphs: ['This Location guide presents Tarifa as a place to stay. The Experience guide continues with beaches, wind, food, nature, history and wider excursions.'],
        links: [
          { label: 'Explore the Tarifa Experience', token: 'tarifa_experience_hub' },
          { label: 'Explore Tarifa beaches', token: 'tarifa_beaches_authority' }
        ]
      }
    },
    de: {
      hero: {
        eyebrow: 'Tarifa · Lage & Aufenthalt',
        title: 'In Tarifa übernachten – der Atlantik vor dem Balkon, Afrika am Horizont',
        standfirst: 'Tarifa ist ein Dorf am südlichsten Punkt Europas, in dem fast alles zu Fuß geht. Und trotzdem entscheidet die Wohnlage hier über jeden Tag: über den Wind auf eurem Balkon, über die Parkplatzsuche im August und darüber, wie der Abend endet. Ich habe selbst in Tarifa gewohnt, bevor wir hier Gäste empfangen haben.',
        note: 'Ein AMARA-Guide aus eigener Erfahrung – keine Live-Auskunft zu Wind und Wetter.',
        updated: 'Geprüft im August 2026'
      },
      geography: {
        eyebrow: 'Wo ihr seid',
        title: 'Am südlichsten Punkt Europas, mit Afrika gegenüber',
        paragraphs: [
          'Tarifa liegt dort, wo der Atlantik in die Straße von Gibraltar übergeht – am südlichsten Punkt des europäischen Festlands. Bei klarer Luft liegt die marokkanische Küste so nah gegenüber, dass ihr sie vom Balkon aus seht. Nicht als Idee auf einer Landkarte, sondern als Küstenlinie mit Bergen darüber.',
          'Der Ort selbst ist klein. Altstadt, neuerer Teil und Strandkante liegen so dicht beieinander, dass ihr fast alles zu Fuß erreicht. Was weiter draußen liegt – die westlichen Kite-Strände, Bolonia, die Meerenge – ist in Minuten mit dem Auto da.'
        ],
        markers: [
          { label: 'Vor der Tür', value: 'Playa Los Lances, 5 Minuten zu Fuß' },
          { label: 'Am Abend', value: 'Altstadt, 10–15 Minuten am Meer entlang' },
          { label: 'Nach Westen', value: 'Valdevaqueros, 10 Minuten mit dem Auto' }
        ],
        link: { label: 'Geografie & Orientierung im Detail', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Anreise & Auto',
        title: 'Braucht ihr ein Auto? Im Dorf nie – für die Kite-Strände schon',
        paragraphs: [
          'Die meisten unserer Gäste fliegen nach Málaga und fahren von dort rund anderthalb Stunden über die Autobahn. Gibraltar funktioniert praktisch nur für Gäste aus Großbritannien, mit dem Bus kommt kaum jemand, und ganz wenige setzen mit dem Schiff aus Marokko über.',
          'In Tarifa selbst braucht ihr das Auto nicht. Wir empfehlen sogar ausdrücklich, im Ort nicht zu fahren – nur hinaus. Im Juli und August ist die Parkplatzsuche wirklich schwierig; wer dann jeden Abend einen Platz sucht, verliert Urlaub.',
          'Wirklich nötig wird das Auto an einer Stelle: für die Kite-Strände im Westen. Wer beim Tarifa Surf Club Unterricht nimmt, findet meist eine Mitfahrgelegenheit unter den anderen Schülern – fest verlassen würde ich mich nicht darauf.'
        ],
        link: { label: 'Anreise nach Tarifa planen', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Wo wohnen',
        title: 'Altstadt oder La Marina – und was das jeden Tag bedeutet',
        paragraphs: [
          'Wer unbedingt in der Altstadt wohnen will, sollte in der Altstadt wohnen. Das ist keine halbe Sache – das ist eine Entscheidung mit Folgen, jeden Tag.',
          'In der Altstadt heißt das: Gepäck über Kopfsteinpflaster, im Sommer Hitze, Lärm und Party bis spät, und ein Parkplatz mindestens zehn bis fünfzehn Minuten entfernt. Dazu kommt etwas, das selten jemand erwähnt: Die alten Häuser im Zentrum sind feucht, Schimmel ist dort ein verbreitetes Thema.',
          'La Marina ist das Gegenteil: modern und ruhig, mit eigenem Stellplatz und dem Strand fünf Minuten die Straße runter. Dafür beginnt die Geschichte nicht vor der Haustür, sondern zehn bis fünfzehn Minuten später – am Meer entlang, unten in die Altstadt hinein.'
        ],
        archetypes: [
          { title: 'Altstadt', consequence: 'Geschichte vor der Tür. Dafür Hitze, Lärm, Feuchtigkeit – und Parken weit außerhalb.' },
          { title: 'La Marina', consequence: 'Modern und ruhig, eigener Stellplatz, Strand in fünf Minuten. Die Altstadt liegt einen Spaziergang entfernt.' },
          { title: 'Los-Lances-Korridor', consequence: 'Stärkerer Strandalltag, dafür weniger spontane Abende im Ort.' },
          { title: 'Umland & Hügel', consequence: 'Raum und Ruhe, aber ein Alltag, der sich am Auto orientiert.' }
        ],
        link: { label: 'Tarifas Lagen im Detail vergleichen', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & Jahreszeiten',
        title: 'Der Wind verändert, wie sich der Tag anfühlt',
        paragraphs: [
          'Tarifa ist windgetrieben, vor allem in Vor- und Nebensaison. Wer damit nicht umgehen kann, wird hier nicht glücklich. Wer ihn annimmt, bekommt genau den Ort, für den Tarifa berühmt ist.',
          'Levante und Poniente verändern den Komfort am offenen Strand, beim Spaziergang und beim Wassersport. Welcher Küstenabschnitt dann passt, hängt von den aktuellen Bedingungen und eurem Plan ab – die Vorhersage und Hinweise vor Ort gehen deshalb immer vor.',
          'An solchen Tagen zählt auch, wie eure Unterkunft steht. Unser Balkon liegt auf der Meerseite; der Levante trifft die Rückseite des Hauses. Bei Poniente kann es dagegen auch vorne windig werden.'
        ],
        link: { label: 'Wetter & Jahreszeiten in Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Alltag',
        title: 'Was sich nach drei Tagen wiederholt',
        paragraphs: [
          'Zum Frühstück gehören für uns das Café SURLA und das Powerhouse. Abends beginnt das Leben in der Calle Batalla del Salado; dort fangen die ersten Restaurants und Bars an.',
          'Die Grundversorgung läuft über den Mercadona direkt gegenüber. Für Fisch lohnt der Mercado, für Obst und Gemüse die kleinen Garagenverkäufe im Ort. Öffnungszeiten – besonders sonntags – prüft ihr am besten aktuell.'
        ]
      },
      winter: {
        eyebrow: 'Ab September',
        title: 'Ab dem 1. September wird Tarifa ein anderer Ort',
        paragraphs: [
          'Juli und August sind der absolute Peak: voll, laut, die Parkplatzsuche wirklich schwierig – und viele kommen genau dafür. Ab dem 1. September lässt es schlagartig nach.',
          'Dann wird es still. Man merkt die Ruhe, man kommt mit Einheimischen ins Gespräch, man lernt Leute kennen. Für uns ist das die schönste Zeit hier.',
          'Für längere Aufenthalte zählt dann anderes als Strandnähe: dass die Wohnung trocken ist, dass sie warm wird und dass es einen Platz zum Arbeiten gibt. Genau daran scheitern viele Häuser in der Altstadt.'
        ]
      },
      amara: {
        eyebrow: 'Unsere Wohnung',
        title: 'Warum wir unsere Gäste in La Marina beherbergen',
        paragraphs: [
          'Der Balkon zeigt nach Westen. Das heißt: Jeden Abend fällt die Sonne vor euch in den Atlantik. Und wenn die Luft klar ist, liegt Afrika gegenüber – nicht als Idee auf einer Landkarte, sondern als Küste, die man sieht.',
          'Darüber liegt das Schlafzimmer, mit demselben Blick. Ihr wacht mit dem Meer auf. Was Gäste beim Ankommen am häufigsten sagen: dass die Wohnung in echt schöner ist als auf den Fotos.',
          'Ich habe in Tarifa selbst gewohnt – Kitesurfen, Freunde, immer wieder ein paar Monate. Als diese Wohnung zum Verkauf stand, haben wir sie gekauft und modernisiert. Wegen der Abende. Und weil sie im Alltag einfach funktioniert.',
          'Ehrlich gesagt: Wer das historische Tarifa direkt vor der Tür braucht, ist bei uns falsch. Und der Pool gehört zur Anlage, nicht zur Wohnung – je nach Witterung etwa von Mitte Mai bis Mitte September.'
        ],
        facts: [
          '75 m² auf zwei Ebenen – Schlafzimmer mit Meerblick',
          'Großer Balkon nach Westen, bei Levante komplett windgeschützt',
          'Reservierter Tiefgaragenstellplatz, bis 2,00 m Höhe',
          'Playa Los Lances 5 Minuten zu Fuß, Mercadona gegenüber',
          'Zwei Schreibtische – und im Winter trocken'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'AMARA Family & Surf ansehen', token: 'casa' }
      },
      experience: {
        eyebrow: 'Eure Tage hier',
        title: 'Und dann die Tage selbst',
        paragraphs: ['Wo ihr wohnt, ist entschieden. Was ihr hier tut – Strände, Wind, Essen, Natur, Altstadt und die Ausflüge nach Bolonia oder Tanger – steht im Erlebnis-Guide.'],
        links: [
          { label: 'Tarifa Experience entdecken', token: 'tarifa_experience_hub' },
          { label: 'Tarifas Strände entdecken', token: 'tarifa_beaches_authority' }
        ]
      },
      closing: {
        title: 'Tarifa ist für uns der schönste Ort auf diesem Planeten.',
        lead: 'Wenn ihr das nachvollziehen könnt, wohnt ihr am besten dort, wo abends die Sonne vor euch ins Meer fällt.',
        ctaLabel: 'AMARA Family & Surf ansehen'
      }
    },
    es: {
      hero: {
        eyebrow: 'Guía de ubicación de Tarifa',
        title: 'Tarifa entre el pueblo, el Atlántico y la costa abierta',
        standfirst: 'Tarifa es una localidad atlántica compacta que se vive de formas muy distintas según la base elegida. Esta guía ofrece primero una visión geográfica y práctica; después, las preguntas se separan en llegada, zonas, clima, vida diaria e invierno.',
        note: 'Una guía independiente de AMARA para planificar la estancia; no es un servicio de condiciones en directo.',
        updated: 'Revisado en agosto de 2026'
      },
      geography: {
        eyebrow: 'Primero, la geografía',
        title: 'Un pueblo pequeño conectado con una costa mucho más amplia',
        paragraphs: [
          'Tarifa se sitúa donde se encuentran el Atlántico y el Estrecho de Gibraltar. El casco histórico y la parte nueva forman una base urbana compacta; hacia el oeste se abre un paisaje diferente de playas y deportes acuáticos.',
          'Esa relación explica el destino: la vida en el pueblo puede seguir siendo peatonal, pero muchas jornadas de playa, naturaleza y actividad se extienden más allá del centro. El mapa útil reúne núcleo urbano, borde de playa, costa occidental e interior.'
        ],
        markers: [
          { label: 'Núcleo urbano', value: 'Casco histórico + parte nueva' },
          { label: 'Costa cotidiana', value: 'Playas urbanas + borde de Los Lances' },
          { label: 'Horizonte amplio', value: 'Costa occidental + campo' }
        ]
      },
      arrival: {
        eyebrow: 'Llegada y movilidad',
        title: 'El plan de movilidad adecuado depende de la estancia que buscas',
        paragraphs: [
          'Una base céntrica puede funcionar sin utilizar el coche cada día. Restaurantes, recados cotidianos y partes cercanas de la costa pueden integrarse en una rutina a pie.',
          'El coche gana valor cuando las playas occidentales, varios días de deportes acuáticos, la naturaleza o las excursiones son centrales. La pregunta no es solo si llegas en coche, sino cuántas veces querrás moverlo después.',
          'Los detalles de aparcamiento, equipaje y traslados pertenecerán a la futura guía de Llegada y Movilidad. Por ahora, elige el alojamiento según tus desplazamientos reales.'
        ]
      },
      areas: {
        eyebrow: 'Dónde alojarse',
        title: 'Cada base en Tarifa ofrece una promesa distinta',
        paragraphs: [
          'El casco antiguo prioriza la inmediatez. La Marina equilibra pueblo y movilidad práctica. El corredor urbano de Los Lances acerca el Atlántico al día a día. El campo cambia la comodidad de caminar por espacio y separación.',
          'Ninguna zona gana en todo. La decisión útil es qué consecuencia prefieres repetir cada día.'
        ],
        archetypes: [
          { title: 'Casco Antiguo', consequence: 'Vida urbana a la puerta; coche y equipaje exigen más planificación.' },
          { title: 'La Marina', consequence: 'Equilibrio urbano entre caminar, servicios y utilizar el coche.' },
          { title: 'Corredor de Los Lances', consequence: 'Rutina más orientada a la playa y menos espontaneidad en el centro.' },
          { title: 'Campo y colinas', consequence: 'Espacio y tranquilidad con una vida diaria organizada en coche.' }
        ],
        link: { label: 'Comparar en detalle las zonas de Tarifa', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Tiempo, clima y estaciones',
        title: 'Las condiciones cambian el ritmo, no la identidad de Tarifa',
        paragraphs: [
          'El viento forma parte de Tarifa, pero su efecto práctico depende del día, la actividad y el entorno exacto. La costa abierta, unas calles más resguardadas y una terraza privada no se sienten igual con la misma previsión.',
          'El verano intensifica carreteras, playas y tardes. Fuera de temporada pesan más la flexibilidad, el confort interior y la rutina normal de una estancia larga. Cerca del viaje, prevalecen la previsión actual y las normas locales.'
        ],
        link: { label: 'Tiempo y estaciones en Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Vida diaria y servicios',
        title: 'Después del primer día, la comodidad también forma parte del destino',
        paragraphs: [
          'Una estancia de varios días se construye con rutas repetidas: comprar, caminar hasta la cena, llegar a la playa, dejar el coche aparcado o volver a utilizarlo.',
          'El entorno más llamativo no es automáticamente la base más sencilla. Elige la zona según las rutinas que esperas repetir y confirma directamente cualquier servicio sujeto a horarios o temporada.'
        ]
      },
      winter: {
        eyebrow: 'Invierno en Tarifa',
        title: 'La Tarifa más pausada recompensa una base bien pensada',
        paragraphs: [
          'En invierno, la intensidad de temporada alta deja paso a un ritmo más tranquilo y menos previsible. El viento, los periodos frescos y la lluvia dan más valor al confort interior, las compras prácticas y la posibilidad de cambiar de plan.',
          'En una estancia larga, calefacción, espacio de trabajo, aparcamiento y servicios diarios pueden importar tanto como la cercanía a la playa. El invierno no es simplemente verano con menos gente: es otra forma de utilizar la misma geografía.'
        ]
      },
      amara: {
        eyebrow: 'AMARA en la práctica',
        title: 'Por qué La Marina funciona bien para una estancia en AMARA',
        paragraphs: [
          'AMARA Family & Surf está en La Marina. Elegimos este entorno por un equilibrio concreto, no porque exista una zona universalmente mejor.',
          'El casco antiguo queda a unos 10–15 minutos a pie, mientras la vida diaria y la salida hacia el oeste siguen siendo prácticas. La contrapartida es clara: el centro histórico no empieza al salir de casa.'
        ],
        facts: [
          'Plaza reservada en garaje subterráneo',
          'Supermercado justo enfrente',
          'Salida práctica hacia Valdevaqueros y las playas occidentales'
        ],
        imageAlt: 'AMARA Family & Surf en La Marina, Tarifa',
        link: { label: 'Ver AMARA Family & Surf', token: 'casa' }
      },
      experience: {
        eyebrow: 'Del lugar a la experiencia',
        title: 'Del lugar a los días que vas a pasar aquí',
        paragraphs: ['Esta guía presenta Tarifa como base para la estancia. La guía de experiencias continúa con playas, viento, gastronomía, naturaleza, historia y excursiones.'],
        links: [
          { label: 'Explorar Tarifa Experience', token: 'tarifa_experience_hub' },
          { label: 'Explorar las playas de Tarifa', token: 'tarifa_beaches_authority' }
        ]
      }
    },
    nl: {
      hero: {
        eyebrow: 'Tarifa locatiegids',
        title: 'Tarifa tussen stad, Atlantische kust en open landschap',
        standfirst: 'Tarifa is een compacte Atlantische stad die per verblijfslocatie heel anders aanvoelt. Deze gids geeft eerst geografisch en praktisch houvast; daarna volgen de verdiepende vragen over aankomst, gebieden, klimaat, dagelijks leven en winter.',
        note: 'Een onafhankelijke AMARA-gids voor de reisplanning — geen live informatiedienst.',
        updated: 'Gecontroleerd in augustus 2026'
      },
      geography: {
        eyebrow: 'Eerst de geografie',
        title: 'Een kleine stad die verbonden is met een veel grotere kust',
        paragraphs: [
          'Tarifa ligt waar de Atlantische Oceaan en de Straat van Gibraltar samenkomen. De oude stad en het nieuwere Tarifa vormen een compacte stedelijke basis; westwaarts opent zich een ander landschap van stranden en watersport.',
          'Die relatie verklaart de bestemming: het stadsleven kan te voet blijven werken, maar veel strand-, natuur- en activiteitsdagen reiken voorbij het centrum. De bruikbare mentale kaart bestaat daarom uit stad, stedelijke strandrand, westkust en achterland.'
        ],
        markers: [
          { label: 'Stedelijke kern', value: 'Oude stad + nieuwer Tarifa' },
          { label: 'Kust in het dagelijks leven', value: 'Stadsstranden + rand van Los Lances' },
          { label: 'Ruimere horizon', value: 'Westelijke stranden + buitengebied' }
        ]
      },
      arrival: {
        eyebrow: 'Aankomst & mobiliteit',
        title: 'Hoe vaak jullie rijden, hangt af van het verblijf',
        paragraphs: [
          'Vanuit een centrale locatie hoeft de auto niet elke dag mee. Restaurants, dagelijkse boodschappen en nabije delen van de kust kunnen binnen een looproutine blijven.',
          'Een auto wordt waardevoller wanneer westelijke stranden, meerdere watersportdagen, natuur of regionale uitstapjes centraal staan. De vraag is niet alleen of jullie met de auto aankomen, maar hoe vaak jullie hem daarna willen gebruiken.',
          'Exacte informatie over parkeren, bagage en transfers hoort bij de toekomstige gids Aankomst & Mobiliteit. Kies voorlopig een verblijf dat past bij jullie echte bewegingspatroon.'
        ]
      },
      areas: {
        eyebrow: 'Waar overnachten',
        title: 'Elke basis in Tarifa doet een andere belofte',
        paragraphs: [
          'De oude stad kiest voor direct stadsleven. La Marina balanceert stad en praktische mobiliteit. In de stedelijke Los-Lances-corridor komt de Atlantische kust dichter bij de dagelijkse routine. Het buitengebied ruilt lopen in voor ruimte en afstand.',
          'Geen gebied wint op elk punt. De nuttige keuze is welk gevolg jullie elke dag graag herhalen.'
        ],
        archetypes: [
          { title: 'Oude stad', consequence: 'Stadsleven voor de deur; auto en bagage vragen meer planning.' },
          { title: 'La Marina', consequence: 'Stedelijke balans tussen lopen, voorzieningen en autoritten.' },
          { title: 'Los-Lances-corridor', consequence: 'Een sterkere strandroutine met minder spontaan stadsleven.' },
          { title: 'Buitengebied & heuvels', consequence: 'Ruimte en rust, met het dagelijks leven rond de auto.' }
        ],
        link: { label: 'Vergelijk de gebieden van Tarifa uitgebreid', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Weer, klimaat & seizoenen',
        title: 'De omstandigheden veranderen het ritme, niet de identiteit van Tarifa',
        paragraphs: [
          'Wind hoort bij Tarifa, maar het praktische effect hangt af van dag, activiteit en exacte setting. Open kust, beschuttere stadsstraten en een privéterras voelen niet hetzelfde bij één voorspelling.',
          'De zomer maakt wegen, stranden en avonden intensiever. Buiten de piek tellen flexibiliteit, binnencomfort en de normale routine van een langer verblijf sterker. Actuele voorspellingen en lokale regels hebben vlak voor vertrek voorrang.'
        ],
        link: { label: 'Bekijk weer & seizoenen in Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Dagelijks leven & voorzieningen',
        title: 'Na de eerste dag wordt gemak onderdeel van de bestemming',
        paragraphs: [
          'Een verblijf van meerdere dagen bestaat uit terugkerende routes: boodschappen halen, naar het diner lopen, het strand bereiken, de auto laten staan of hem opnieuw gebruiken.',
          'De indrukwekkendste setting is niet automatisch de eenvoudigste dagelijkse basis. Kies een gebied voor de routines die jullie verwachten te herhalen en controleer tijdgebonden voorzieningen rechtstreeks.'
        ]
      },
      winter: {
        eyebrow: 'Winter in Tarifa',
        title: 'Het rustigere Tarifa beloont een doordachte basis',
        paragraphs: [
          'In de winter maakt de intensiteit van het hoogseizoen plaats voor een rustiger en minder voorspelbaar ritme. Wind, koelere perioden en regen geven binnencomfort, praktische boodschappen en flexibel plannen meer gewicht.',
          'Tijdens een langer verblijf kunnen verwarming, werkplek, parkeren en dagelijkse voorzieningen even belangrijk worden als de afstand tot het strand. Winter is niet alleen zomer met minder mensen, maar een andere manier om dezelfde geografie te gebruiken.'
        ]
      },
      amara: {
        eyebrow: 'AMARA in de praktijk',
        title: 'Waarom La Marina goed werkt voor een verblijf bij AMARA',
        paragraphs: [
          'AMARA Family & Surf ligt in La Marina. We kozen deze setting voor een specifieke balans, niet omdat één gebied voor iedereen het beste is.',
          'De oude stad blijft ongeveer 10–15 minuten lopen, terwijl het dagelijks leven en westwaarts rijden praktisch blijven. De eerlijke keerzijde: het historische centrum ligt niet direct voor de deur.'
        ],
        facts: [
          'Gereserveerde ondergrondse parkeerplaats',
          'Supermarkt direct aan de overkant',
          'Praktische westelijke uitrit richting Valdevaqueros en de westelijke stranden'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'Bekijk AMARA Family & Surf', token: 'casa' }
      },
      experience: {
        eyebrow: 'Van plek naar ervaring',
        title: 'Van de plek zelf naar de dagen die jullie hier doorbrengen',
        paragraphs: ['Deze locatiegids laat Tarifa zien als uitvalsbasis voor jullie verblijf. De ervaringsgids gaat verder met stranden, wind, eten, natuur, geschiedenis en uitstapjes.'],
        links: [
          { label: 'Ontdek Tarifa Experience', token: 'tarifa_experience_hub' },
          { label: 'Ontdek de stranden van Tarifa', token: 'tarifa_beaches_authority' }
        ]
      }
    },
    sv: {
      hero: {
        eyebrow: 'Tarifa lägesguide',
        title: 'Tarifa mellan staden, Atlanten och den öppna kusten',
        standfirst: 'Tarifa är en kompakt Atlantstad som upplevs mycket olika beroende på var ni bor. Guiden ger först geografisk och praktisk orientering; därefter delas frågorna upp i ankomst, områden, klimat, vardag och vinter.',
        note: 'En oberoende AMARA-guide för reseplanering – inte en tjänst för liveförhållanden.',
        updated: 'Granskad i augusti 2026'
      },
      geography: {
        eyebrow: 'Geografin först',
        title: 'En liten stad som hör ihop med en mycket större kust',
        paragraphs: [
          'Tarifa ligger där Atlanten möter Gibraltarsundet. Gamla stan och den nyare staden bildar en kompakt urban bas, medan ett annat strand- och vattensportlandskap öppnar sig västerut.',
          'Det sambandet förklarar destinationen: vardagen i staden kan fungera till fots, men många strand-, natur- och aktivitetsdagar sträcker sig bortom centrum. Den användbara kartan består därför av stad, urban strandkant, västkust och inland.'
        ],
        markers: [
          { label: 'Urban kärna', value: 'Gamla stan + nyare Tarifa' },
          { label: 'Kust i vardagen', value: 'Stadsstränder + Los Lances-kant' },
          { label: 'Vidare horisont', value: 'Västliga stränder + landsbygd' }
        ]
      },
      arrival: {
        eyebrow: 'Ankomst & mobilitet',
        title: 'Hur ofta ni kör beror på vilken vistelse ni vill ha',
        paragraphs: [
          'Med ett centralt boende behöver bilen inte användas varje dag. Restauranger, vardagsärenden och närliggande kustavsnitt kan ingå i en rutin till fots.',
          'Bilen blir mer värdefull när västliga stränder, flera vattensportdagar, natur eller utflykter står i centrum. Frågan är inte bara om ni anländer med bil, utan hur ofta ni vill använda den efter ankomsten.',
          'Detaljer om parkering, bagage och transfer hör till den framtida guiden Ankomst & Mobilitet. Välj tills dess boende efter ert verkliga rörelsemönster.'
        ]
      },
      areas: {
        eyebrow: 'Var ska man bo',
        title: 'Varje bas i Tarifa ger ett annat löfte',
        paragraphs: [
          'Gamla stan prioriterar omedelbart stadsliv. La Marina balanserar stad med praktisk förflyttning. Den urbana Los Lances-korridoren för Atlanten närmare vardagen. Landsbygden byter gångavstånd mot utrymme och avskildhet.',
          'Inget område vinner i alla kategorier. Den viktiga frågan är vilken följd ni gärna upprepar varje dag.'
        ],
        archetypes: [
          { title: 'Gamla stan', consequence: 'Stadsliv utanför dörren; bil och bagage kräver mer planering.' },
          { title: 'La Marina', consequence: 'Urban balans mellan promenader, service och bilresor.' },
          { title: 'Los Lances-korridoren', consequence: 'Mer strandpräglad vardag och mindre spontant stadsliv.' },
          { title: 'Landsbygd & kullar', consequence: 'Utrymme och lugn, med vardagen organiserad kring bilen.' }
        ],
        link: { label: 'Jämför Tarifas områden på djupet', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Väder, klimat & årstider',
        title: 'Förhållandena ändrar rytmen, inte Tarifas identitet',
        paragraphs: [
          'Vinden hör till Tarifa, men den praktiska effekten beror på dag, aktivitet och exakt miljö. Öppen kust, mer skyddade stadsgator och en privat terrass känns inte likadant i samma prognos.',
          'Sommaren ger mer intensitet på vägar, stränder och kvällar. Utanför toppen väger flexibilitet, inomhuskomfort och rytmen i en längre vistelse tyngre. Aktuella prognoser och lokala regler gäller alltid närmast resan.'
        ],
        link: { label: 'Väder & årstider i Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Vardagsliv & service',
        title: 'Efter första dagen blir bekvämlighet en del av destinationen',
        paragraphs: [
          'En vistelse över flera dagar formas av återkommande vägar: köpa mat, promenera till middag, nå stranden, låta bilen stå eller använda den igen.',
          'Den mest slående miljön är inte automatiskt den enklaste basen i vardagen. Välj område efter rutinerna ni kommer att upprepa och kontrollera tids- eller säsongsberoende service direkt.'
        ]
      },
      winter: {
        eyebrow: 'Vinter i Tarifa',
        title: 'Ett lugnare Tarifa belönar en genomtänkt bas',
        paragraphs: [
          'På vintern ersätts högsäsongens intensitet av en lugnare och mindre förutsägbar rytm. Vind, svalare perioder och regn gör inomhuskomfort, praktiska inköp och möjligheten att byta plan viktigare.',
          'Under en längre vistelse kan värme, arbetsplats, parkering och vardagsservice betyda lika mycket som närhet till stranden. Vinter är inte bara sommar med färre människor, utan ett annat sätt att använda samma geografi.'
        ]
      },
      amara: {
        eyebrow: 'AMARA i praktiken',
        title: 'Varför La Marina fungerar bra för en vistelse hos AMARA',
        paragraphs: [
          'AMARA Family & Surf ligger i La Marina. Vi valde miljön för en särskild balans, inte för att ett område är bäst för alla.',
          'Gamla stan ligger ungefär 10–15 minuters promenad bort, samtidigt som vardagen och körning västerut förblir praktiska. Den ärliga avvägningen är att den historiska kärnan inte börjar direkt utanför dörren.'
        ],
        facts: [
          'Reserverad underjordisk parkeringsplats',
          'Stormarknad direkt mittemot',
          'Praktisk väg västerut mot Valdevaqueros och de västliga stränderna'
        ],
        imageAlt: 'AMARA Family & Surf i La Marina, Tarifa',
        link: { label: 'Visa AMARA Family & Surf', token: 'casa' }
      },
      experience: {
        eyebrow: 'Från plats till upplevelse',
        title: 'Från själva platsen till dagarna ni tillbringar här',
        paragraphs: ['Den här lägesguiden visar Tarifa som bas för er vistelse. Upplevelseguiden fortsätter med stränder, vind, mat, natur, historia och utflykter.'],
        links: [
          { label: 'Upptäck Tarifa Experience', token: 'tarifa_experience_hub' },
          { label: 'Upptäck Tarifas stränder', token: 'tarifa_beaches_authority' }
        ]
      }
    }
  }
};
