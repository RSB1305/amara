import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

type WeddingAnniversaryStayLinkToken = 'romantic_hideaways' | 'playa' | 'tarifa';
type WeddingAnniversaryPlanningLinkToken =
  | 'arrival_guide'
  | 'nerja_vs_frigiliana'
  | 'location_tarifa'
  | 'direct_booking_benefits';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

const lp = (
  en: string[],
  de: string[],
  es: string[],
  nl: string[],
  sv: string[]
): LocalizedTextList => ({ en, de, es, nl, sv });

export const weddingAnniversarySeo: AmaraAuthoringSeo = {
  version: '2026-08-27-wedding-anniversary-v1.0-A',
  pageType: 'D',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Wedding Anniversary Getaway in Andalusia | AMARA',
      description:
        'Choose a wedding anniversary hideaway in Frigiliana, Nerja or Tarifa: six individual AMARA stays for shared time as a couple, personally hosted and bookable direct.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Hochzeitstag in Andalusien | Romantische Auszeit',
      description:
        'Findet euer Hideaway für den Hochzeitstag in Frigiliana, Nerja oder Tarifa: sechs individuelle AMARA-Unterkünfte für gemeinsame Zeit zu zweit, persönlich betreut und direkt buchbar.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Aniversario de boda en Andalucía | AMARA',
      description:
        'Elegid vuestro refugio de aniversario de boda en Frigiliana, Nerja o Tarifa: seis alojamientos AMARA para compartir tiempo en pareja, con atención personal y reserva directa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Huwelijksverjaardag in Andalusië | AMARA',
      description:
        'Kies jullie hideaway voor de huwelijksverjaardag in Frigiliana, Nerja of Tarifa: zes AMARA-verblijven voor tijd samen, persoonlijk beheerd en direct te boeken.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Bröllopsdag i Andalusien | Romantic Hideaways',
      description:
        'Välj ert hideaway för bröllopsdagen i Frigiliana, Nerja eller Tarifa: sex AMARA-boenden för tid tillsammans, personligt omhändertagna och bokningsbara direkt.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const weddingAnniversaryContent = {
  hero: {
    kicker: l(
      'WEDDING ANNIVERSARY IN ANDALUSIA',
      'HOCHZEITSTAG IN ANDALUSIEN',
      'ANIVERSARIO DE BODA EN ANDALUCÍA',
      'HUWELIJKSVERJAARDAG IN ANDALUSIË',
      'BRÖLLOPSDAG I ANDALUSIEN'
    ),
    title: l(
      'Celebrate your wedding anniversary in your own Romantic Hideaway',
      'Feiert euren Hochzeitstag in eurem eigenen Romantic Hideaway',
      'Celebrad vuestro aniversario de boda en un Romantic Hideaway',
      'Vier jullie huwelijksverjaardag in een eigen Romantic Hideaway',
      'Fira er bröllopsdag i ert eget Romantic Hideaway'
    ),
    lead: l(
      'Whitewashed old-town lanes, Mediterranean days or an Atlantic horizon: choose the Andalusian setting that feels right for the two of you.',
      'Weiße Altstadtgassen, Tage am Mittelmeer oder der Blick zum Atlantik: Wählt den andalusischen Rahmen, der sich für euch richtig anfühlt.',
      'Callejuelas blancas, días junto al Mediterráneo o el horizonte atlántico: elegid el escenario andaluz que encaja con vosotros.',
      'Witgekalkte straatjes, dagen aan de Middellandse Zee of de Atlantische horizon: kies de Andalusische omgeving die bij jullie past.',
      'Vitkalkade gränder, dagar vid Medelhavet eller en atlantisk horisont: välj den andalusiska miljö som känns rätt för just er.'
    ),
    paragraphs: lp(
      [
        'A wedding anniversary with AMARA is a private stay for two in Frigiliana, Nerja or Tarifa, shaped around the setting you want to share rather than a fixed celebration package. Choose old-town lanes and village life, easy access to the Mediterranean, or more space beneath the Atlantic sky. Six individual stays offer different layouts, beds, terraces, views and access, so compare the verified property details before choosing your dates.',
        '**We look after every stay ourselves** and help you compare the details that will actually shape your time together.'
      ],
      [
        'Ein Hochzeitstag mit AMARA ist eine private Auszeit zu zweit in Frigiliana, Nerja oder Tarifa – ausgerichtet auf den Ort, den ihr gemeinsam erleben möchtet, statt auf ein festes Feierpaket. Wählt Altstadtgassen und Dorfleben, den einfachen Weg zum Mittelmeer oder mehr Raum unter dem Atlantikhimmel. Sechs individuelle Unterkünfte unterscheiden sich in Grundriss, Bett, Terrasse, Aussicht und Zugang; vergleicht deshalb vor der Wahl eurer Reisedaten die belegten Unterkunftsdetails.',
        '**Wir betreuen jede Unterkunft selbst** und helfen euch, genau die Details zu vergleichen, die eure gemeinsame Zeit prägen.'
      ],
      [
        'Un aniversario de boda con AMARA es una estancia privada para dos en Frigiliana, Nerja o Tarifa, pensada alrededor del lugar que queréis compartir y no de un paquete cerrado. Elegid entre las calles del casco antiguo y la vida del pueblo, el acceso fácil al Mediterráneo o más espacio bajo el cielo atlántico. Los seis alojamientos tienen distribuciones, camas, terrazas, vistas y accesos diferentes: comparad los detalles verificados antes de elegir las fechas.',
        '**Cuidamos personalmente cada alojamiento** y os ayudamos a comparar los detalles que de verdad marcarán vuestro tiempo juntos.'
      ],
      [
        'Een huwelijksverjaardag met AMARA is een privéverblijf voor twee in Frigiliana, Nerja of Tarifa, gekozen rond de omgeving die jullie samen willen beleven en niet rond een vast feestpakket. Kies voor straatjes en dorpsleven in de oude kern, gemakkelijke toegang tot de Middellandse Zee of meer ruimte onder de Atlantische hemel. Zes individuele verblijven verschillen in indeling, bed, terras, uitzicht en toegang; vergelijk daarom de vastgelegde details voordat jullie data kiezen.',
        '**We beheren elk verblijf zelf** en helpen jullie de details te vergelijken die jullie tijd samen werkelijk bepalen.'
      ],
      [
        'En bröllopsdag med AMARA är en privat vistelse för två i Frigiliana, Nerja eller Tarifa, formad kring miljön ni vill dela i stället för ett färdigt firandepaket. Välj gamla stans gränder och byliv, enkel tillgång till Medelhavet eller mer utrymme under atlanthimlen. De sex individuella boendena skiljer sig i planlösning, säng, terrass, utsikt och tillträde, så jämför de verifierade detaljerna innan ni väljer datum.',
        '**Vi tar hand om varje boende själva** och hjälper er att jämföra detaljerna som faktiskt formar tiden tillsammans.'
      ]
    ),
    cta: l(
      'Find your wedding anniversary hideaway',
      'Euer Hideaway für den Hochzeitstag finden',
      'Encontrar vuestro refugio',
      'Vind jullie hideaway voor de huwelijksverjaardag',
      'Hitta ert hideaway för bröllopsdagen'
    ),
    imageAlt: l(
      'Private terrace with whitewashed walls and palms at AMARA Lounis in Frigiliana',
      'Private Terrasse mit weißen Mauern und Palmen bei AMARA Lounis in Frigiliana',
      'Terraza privada con paredes encaladas y palmeras en AMARA Lounis, Frigiliana',
      'Privéterras met witgekalkte muren en palmen bij AMARA Lounis in Frigiliana',
      'Privat terrass med vitkalkade väggar och palmer vid AMARA Lounis i Frigiliana'
    )
  },
  setting: {
    title: l(
      'Choose the rhythm of your anniversary journey',
      'Wählt den Rhythmus eurer Reise zum Hochzeitstag',
      'Elegid el ritmo de vuestro viaje de aniversario de boda',
      'Kies het ritme van jullie reis voor de huwelijksverjaardag',
      'Välj rytmen för resan på er bröllopsdag'
    ),
    paragraphs: lp(
      [
        'In Frigiliana, mornings begin among old-town steps and whitewashed houses before the coast opens below the village. Nerja puts the sea and the Balcón de Europa within an easy walk. Tarifa gives you more space, Atlantic light and a horizon that changes with the wind.',
        'The best wedding anniversary setting is not the one with the most romantic adjectives. It is the place whose movement, pace and everyday details match how the two of you want to spend your days.'
      ],
      [
        'In Frigiliana beginnt der Morgen zwischen Altstadtstufen und weißen Häusern, bevor sich unterhalb des Dorfes die Küste öffnet. In Nerja erreicht ihr Meer und Balcón de Europa bequem zu Fuß. Tarifa schenkt euch mehr Raum, Atlantiklicht und einen Horizont, den der Wind immer wieder verändert.',
        'Der beste Ort für euren Hochzeitstag ist nicht der mit den meisten romantischen Adjektiven. Entscheidend ist, ob Wege, Tempo und Alltag zu den Tagen passen, die ihr miteinander verbringen möchtet.'
      ],
      [
        'En Frigiliana, la mañana empieza entre escalones y casas blancas del casco antiguo, con la costa abriéndose bajo el pueblo. Nerja deja el mar y el Balcón de Europa a un paseo cómodo. Tarifa ofrece más espacio, luz atlántica y un horizonte que cambia con el viento.',
        'El mejor escenario para vuestro aniversario de boda no es el que acumula más adjetivos románticos. Es el lugar cuyo movimiento, ritmo y detalles cotidianos encajan con la forma en que queréis compartir los días.'
      ],
      [
        'In Frigiliana begint de ochtend tussen trappen en witte huizen in de oude kern, met de kust beneden het dorp. In Nerja liggen de zee en het Balcón de Europa op een korte wandeling. Tarifa geeft jullie meer ruimte, Atlantisch licht en een horizon die met de wind verandert.',
        'De beste plek voor jullie huwelijksverjaardag is niet de plek met de meeste romantische woorden. Het is de omgeving waarvan routes, tempo en dagelijkse details passen bij hoe jullie de dagen samen willen beleven.'
      ],
      [
        'I Frigiliana börjar morgonen bland gamla stans trappor och vita hus, med kusten nedanför byn. I Nerja ligger havet och Balcón de Europa inom bekvämt gångavstånd. Tarifa ger er mer utrymme, atlantiskt ljus och en horisont som skiftar med vinden.',
        'Den bästa platsen för bröllopsdagen är inte den med flest romantiska adjektiv. Det är platsen vars rörelse, tempo och vardagsdetaljer passar hur just ni vill tillbringa dagarna tillsammans.'
      ]
    ),
    imageAlt: l(
      'Whitewashed Frigiliana on the hillside above the Mediterranean coast',
      'Das weiße Frigiliana am Hang oberhalb der Mittelmeerküste',
      'Frigiliana encalada en la ladera sobre la costa mediterránea',
      'Het witgekalkte Frigiliana op de helling boven de Middellandse Zeekust',
      'Vitkalkade Frigiliana på sluttningen ovanför Medelhavskusten'
    )
  },
  choice: {
    title: l(
      'One wedding anniversary, three different Andalusian settings',
      'Ein Hochzeitstag, drei unterschiedliche Orte in Andalusien',
      'Un aniversario de boda, tres escenarios diferentes en Andalucía',
      'Eén huwelijksverjaardag, drie verschillende plekken in Andalusië',
      'En bröllopsdag, tre olika miljöer i Andalusien'
    ),
    paragraphs: lp(
      [
        'Frigiliana, Nerja and Tarifa do not offer the same stay, and that is the point. Compare old-town atmosphere, proximity to the beach, outdoor space, bed size, access and room to spread out before choosing.',
        'A feature belongs to the property where it is documented. Sea views, a private terrace or a hammock may be part of one hideaway without becoming a promise for every AMARA stay.'
      ],
      [
        'Frigiliana, Nerja und Tarifa bieten nicht denselben Aufenthalt – genau darin liegt die Auswahl. Vergleicht Altstadtatmosphäre, Strandnähe, Außenbereich, Bettgröße, Zugang und Platzangebot, bevor ihr euch entscheidet.',
        'Ein Merkmal gehört zu der Unterkunft, für die es belegt ist. Meerblick, private Terrasse oder Hängematte können ein Hideaway prägen, ohne zum Versprechen für jede AMARA-Unterkunft zu werden.'
      ],
      [
        'Frigiliana, Nerja y Tarifa no ofrecen la misma estancia, y ahí está precisamente la elección. Comparad ambiente de casco antiguo, cercanía a la playa, espacio exterior, tamaño de la cama, acceso y amplitud antes de decidir.',
        'Cada característica pertenece al alojamiento donde está documentada. Las vistas al mar, una terraza privada o una hamaca pueden definir un refugio sin convertirse en una promesa para todos los alojamientos AMARA.'
      ],
      [
        'Frigiliana, Nerja en Tarifa bieden niet hetzelfde verblijf, en juist daarin zit de keuze. Vergelijk sfeer in de oude stad, afstand tot het strand, buitenruimte, bedformaat, toegang en leefruimte voordat jullie beslissen.',
        'Een kenmerk hoort bij het verblijf waarvoor het is vastgelegd. Zeezicht, een privéterras of een hangmat kan één hideaway bijzonder maken zonder een belofte voor elk AMARA-verblijf te worden.'
      ],
      [
        'Frigiliana, Nerja och Tarifa erbjuder inte samma vistelse, och det är själva poängen. Jämför gamla stans atmosfär, närhet till stranden, uteplats, sängstorlek, tillträde och utrymme innan ni väljer.',
        'En egenskap hör till boendet där den är dokumenterad. Havsutsikt, en privat terrass eller en hängmatta kan prägla ett hideaway utan att bli ett löfte för varje AMARA-boende.'
      ]
    ),
    statistic: '3',
    statisticLabel: l('distinct destinations', 'unterschiedliche Orte', 'destinos diferentes', 'verschillende bestemmingen', 'olika resmål'),
    imageAlt: l(
      'Outdoor rain shower and handmade tiles on the private terrace of AMARA Zaid',
      'Außendusche und handgefertigte Fliesen auf der privaten Terrasse von AMARA Zaid',
      'Ducha exterior y azulejos artesanales en la terraza privada de AMARA Zaid',
      'Buitendouche en handgemaakte tegels op het privéterras van AMARA Zaid',
      'Utomhusdusch och handgjort kakel på AMARA Zaids privata terrass'
    )
  },
  stayOptions: {
    title: l(
      'Find the hideaway that fits the two of you',
      'Findet das Hideaway, das zu euch beiden passt',
      'Encontrad el refugio que encaja con vosotros',
      'Vind de hideaway die bij jullie past',
      'Hitta ert hideaway för tiden tillsammans'
    ),
    intro: l(
      'Start with the setting you want, then compare the verified property details. These three routes into the collection make the first decision simpler.',
      'Beginnt mit dem Ort, den ihr erleben möchtet, und vergleicht danach die belegten Unterkunftsdetails. Diese drei Wege in die Kollektion machen die erste Entscheidung einfacher.',
      'Empezad por el entorno que queréis vivir y comparad después los detalles verificados de cada alojamiento. Estas tres opciones facilitan la primera decisión.',
      'Begin met de omgeving die jullie willen beleven en vergelijk daarna de vastgelegde details per verblijf. Deze drie routes maken de eerste keuze eenvoudiger.',
      'Börja med miljön ni vill uppleva och jämför sedan de verifierade detaljerna för varje boende. De här tre vägarna in i kollektionen gör det första valet enklare.'
    ),
    items: [
      {
        id: 'frigiliana',
        eyebrow: l('OLD TOWN', 'ALTSTADT', 'CASCO ANTIGUO', 'OUDE STAD', 'GAMLA STAN'),
        title: l('Frigiliana: four individual stays', 'Frigiliana: vier individuelle Unterkünfte', 'Frigiliana: cuatro alojamientos únicos', 'Frigiliana: vier individuele verblijven', 'Frigiliana: fyra individuella boenden'),
        text: l(
          'Choose among Farah, Lounis, Zaid and Maha inside Casa AMARA. Their layouts, terraces, views, access and kitchen facilities differ, so compare the details that matter to your stay.',
          'Wählt zwischen Farah, Lounis, Zaid und Maha in Casa AMARA. Grundrisse, Terrassen, Ausblicke, Zugang und Küchenausstattung unterscheiden sich – vergleicht deshalb die Details, die für euch zählen.',
          'Elegid entre Farah, Lounis, Zaid y Maha dentro de Casa AMARA. Sus distribuciones, terrazas, vistas, accesos y cocinas son distintos: comparad los detalles importantes para vosotros.',
          'Kies uit Farah, Lounis, Zaid en Maha in Casa AMARA. Indeling, terrassen, uitzicht, toegang en keukenvoorzieningen verschillen; vergelijk dus wat voor jullie verblijf telt.',
          'Välj mellan Farah, Lounis, Zaid och Maha i Casa AMARA. Planlösning, terrasser, utsikt, tillträde och köksutrustning skiljer sig, så jämför detaljerna som betyder mest för er.'
        ),
        linkLabel: l('Compare all AMARA stays', 'Alle AMARA-Unterkünfte vergleichen', 'Comparar todos los alojamientos AMARA', 'Vergelijk alle AMARA-verblijven', 'Jämför alla AMARA-boenden'),
        linkToken: 'romantic_hideaways' as WeddingAnniversaryStayLinkToken
      },
      {
        id: 'nerja',
        eyebrow: l('MEDITERRANEAN', 'MITTELMEER', 'MEDITERRÁNEO', 'MIDDELLANDSE ZEE', 'MEDELHAVET'),
        title: l('Nerja: the sea within an easy walk', 'Nerja: das Meer bequem zu Fuß erreichen', 'Nerja: el mar a un paseo', 'Nerja: de zee op korte loopafstand', 'Nerja: havet på bekvämt gångavstånd'),
        text: l(
          'AMARA Playa is 200 metres from Torrecilla beach and 500 metres from the Balcón de Europa. It is on the fifth floor with a lift, a side sea view and a 200 × 200 cm bed.',
          'AMARA Playa liegt 200 Meter vom Strand Torrecilla und 500 Meter vom Balcón de Europa entfernt. Das Apartment befindet sich im fünften Stock mit Aufzug, seitlichem Meerblick und einem 200 × 200 cm großen Bett.',
          'AMARA Playa está a 200 metros de la playa de Torrecilla y a 500 del Balcón de Europa. Se encuentra en una quinta planta con ascensor, vistas laterales al mar y cama de 200 × 200 cm.',
          'AMARA Playa ligt op 200 meter van het strand van Torrecilla en 500 meter van het Balcón de Europa. Het verblijf ligt op de vijfde verdieping met lift, zijdelings zeezicht en een bed van 200 × 200 cm.',
          'AMARA Playa ligger 200 meter från Torrecillastranden och 500 meter från Balcón de Europa. Boendet ligger på femte våningen med hiss, havsutsikt åt sidan och en säng på 200 × 200 cm.'
        ),
        linkLabel: l('View AMARA Playa', 'AMARA Playa ansehen', 'Ver AMARA Playa', 'Bekijk AMARA Playa', 'Visa AMARA Playa'),
        linkToken: 'playa' as WeddingAnniversaryStayLinkToken
      },
      {
        id: 'tarifa',
        eyebrow: l('ATLANTIC', 'ATLANTIK', 'ATLÁNTICO', 'ATLANTISCHE OCEAAN', 'ATLANTEN'),
        title: l('Tarifa: more room for two', 'Tarifa: mehr Raum für zwei', 'Tarifa: más espacio para dos', 'Tarifa: meer ruimte voor twee', 'Tarifa: mer utrymme för två'),
        text: l(
          'AMARA Family & Surf has two floors, two bedrooms, two bathrooms and a terrace facing the Atlantic. It is generous for a couple and can also accommodate up to four guests.',
          'AMARA Family & Surf bietet zwei Etagen, zwei Schlafzimmer, zwei Bäder und eine Terrasse mit Atlantikblick. Für zwei ist das Penthouse großzügig; insgesamt können bis zu vier Gäste übernachten.',
          'AMARA Family & Surf tiene dos plantas, dos dormitorios, dos baños y una terraza frente al Atlántico. Es amplio para una pareja y también puede alojar hasta cuatro huéspedes.',
          'AMARA Family & Surf heeft twee verdiepingen, twee slaapkamers, twee badkamers en een terras aan de Atlantische Oceaan. Het is royaal voor twee en biedt ook plaats aan maximaal vier gasten.',
          'AMARA Family & Surf har två våningar, två sovrum, två badrum och en terrass mot Atlanten. Det är rymligt för två och kan också ta emot upp till fyra gäster.'
        ),
        linkLabel: l('View Family & Surf', 'Family & Surf ansehen', 'Ver Family & Surf', 'Bekijk Family & Surf', 'Visa Family & Surf'),
        linkToken: 'tarifa' as WeddingAnniversaryStayLinkToken
      }
    ],
    note: l(
      'Not every hideaway has every feature. The individual property page is the source for the terrace, view, bed, access, occupancy and facilities included in your chosen stay.',
      'Nicht jedes Hideaway besitzt jedes Merkmal. Für Terrasse, Aussicht, Bett, Zugang, Belegung und Ausstattung gilt immer die jeweilige Unterkunftsseite.',
      'No todos los refugios tienen las mismas características. La página de cada alojamiento es la referencia para terraza, vistas, cama, acceso, ocupación y equipamiento.',
      'Niet elke hideaway heeft elk kenmerk. De pagina van het gekozen verblijf is leidend voor terras, uitzicht, bed, toegang, bezetting en voorzieningen.',
      'Alla hideaways har inte alla egenskaper. Den enskilda boendesidan är källan för terrass, utsikt, säng, tillträde, beläggning och utrustning.'
    ),
    cta: l('Check wedding anniversary availability', 'Verfügbarkeit für euren Hochzeitstag prüfen', 'Consultar disponibilidad para el aniversario de boda', 'Bekijk beschikbaarheid voor jullie huwelijksverjaardag', 'Se tillgänglighet för bröllopsdagen'),
    collectionCta: l('Compare all Romantic Hideaways', 'Alle Romantic Hideaways vergleichen', 'Comparar todos los Romantic Hideaways', 'Vergelijk alle Romantic Hideaways', 'Jämför alla Romantic Hideaways')
  },
  moments: {
    title: l(
      'What gives the stay its meaning',
      'Was eurem Aufenthalt Bedeutung gibt',
      'Lo que da sentido a la estancia',
      'Wat jullie verblijf betekenis geeft',
      'Det som ger vistelsen betydelse'
    ),
    intro: l(
      'A wedding anniversary does not need a fixed package to feel special. It needs a place where the two of you can settle into a rhythm that belongs to you.',
      'Ein Hochzeitstag braucht kein festes Paket, um besonders zu sein. Ihr braucht einen Ort, an dem ihr euren eigenen gemeinsamen Rhythmus findet.',
      'Un aniversario de boda no necesita un paquete cerrado para ser especial. Necesita un lugar donde podáis encontrar un ritmo propio.',
      'Een huwelijksverjaardag heeft geen vast pakket nodig om bijzonder te voelen. Jullie hebben vooral een plek nodig waar jullie samen een eigen ritme vinden.',
      'En bröllopsdag behöver inget färdigt paket för att kännas speciell. Den behöver en plats där ni kan hitta er egen rytm tillsammans.'
    ),
    items: [
      {
        id: 'privacy',
        title: l('Space that is yours', 'Raum, der euch gehört', 'Un espacio para vosotros', 'Ruimte die van jullie is', 'Ett utrymme som är ert'),
        text: l('Choose an independent stay whose layout and outdoor space match how much time you want to spend at home.', 'Wählt eine eigenständige Unterkunft, deren Grundriss und Außenbereich dazu passen, wie viel Zeit ihr dort verbringen möchtet.', 'Elegid un alojamiento independiente cuya distribución y espacio exterior encajen con el tiempo que queréis pasar en casa.', 'Kies een zelfstandig verblijf waarvan indeling en buitenruimte passen bij de tijd die jullie er willen doorbrengen.', 'Välj ett fristående boende vars planlösning och uteplats passar hur mycket tid ni vill tillbringa hemma.')
      },
      {
        id: 'sleep',
        title: l('Rest that shapes the next day', 'Erholung für den nächsten Tag', 'Descanso para disfrutar el día siguiente', 'Rust die de volgende dag bepaalt', 'Vila som formar nästa dag'),
        text: l('Bed size, bedroom separation, light and access are practical details worth comparing before a longer stay.', 'Bettgröße, separates Schlafzimmer, Licht und Zugang sind praktische Details, die ihr vor einem längeren Aufenthalt vergleichen solltet.', 'El tamaño de la cama, la separación del dormitorio, la luz y el acceso son detalles prácticos que conviene comparar antes de una estancia larga.', 'Bedformaat, een aparte slaapkamer, licht en toegang zijn praktische details om vóór een langer verblijf te vergelijken.', 'Sängstorlek, separat sovrum, ljus och tillträde är praktiska detaljer att jämföra före en längre vistelse.')
      },
      {
        id: 'place',
        title: l('A setting you can step into', 'Ein Ort, den ihr direkt erlebt', 'Un entorno que se vive al salir', 'Een omgeving waar je zo instapt', 'En miljö ni kliver rakt ut i'),
        text: l('Walk into Frigiliana’s old town, reach the beach from Playa or watch the Atlantic from Family & Surf: the location changes the day.', 'Geht direkt in Frigilianas Altstadt, erreicht von Playa den Strand oder blickt von Family & Surf auf den Atlantik: Die Lage verändert euren Tag.', 'Salid al casco antiguo de Frigiliana, llegad a la playa desde Playa o mirad el Atlántico desde Family & Surf: la ubicación cambia el día.', 'Loop zo de oude kern van Frigiliana in, bereik het strand vanuit Playa of kijk vanaf Family & Surf uit over de Atlantische Oceaan: de ligging verandert de dag.', 'Kliv ut i Frigilianas gamla stad, nå stranden från Playa eller se Atlanten från Family & Surf: läget förändrar dagen.')
      },
      {
        id: 'hosting',
        title: l('Personal contact when you need it', 'Persönlicher Kontakt, wenn ihr ihn braucht', 'Contacto personal cuando lo necesitéis', 'Persoonlijk contact wanneer nodig', 'Personlig kontakt när ni behöver det'),
        text: l('We know the stays ourselves and answer questions directly, so you can choose with clearer expectations before arrival.', 'Wir kennen die Unterkünfte selbst und beantworten eure Fragen direkt, damit ihr schon vor der Anreise mit klaren Erwartungen wählen könnt.', 'Conocemos personalmente los alojamientos y respondemos directamente a vuestras preguntas para que elijáis con expectativas claras antes de llegar.', 'We kennen de verblijven zelf en beantwoorden vragen rechtstreeks, zodat jullie vóór aankomst met heldere verwachtingen kunnen kiezen.', 'Vi känner boendena själva och svarar direkt på era frågor, så att ni kan välja med tydliga förväntningar före ankomst.')
      }
    ],
    note: l(
      'Tell us your dates and what matters most to the two of you. We will point you to the verified stay details rather than promise an amenity the property does not have.',
      'Nennt uns eure Reisedaten und was euch beiden besonders wichtig ist. Wir verweisen euch auf die belegten Unterkunftsdetails, statt eine Ausstattung zu versprechen, die dort nicht vorhanden ist.',
      'Decidnos vuestras fechas y qué es lo más importante para vosotros. Os indicaremos los detalles verificados del alojamiento en lugar de prometer un servicio que no existe allí.',
      'Vertel ons jullie reisdata en wat voor jullie het belangrijkst is. We verwijzen naar de vastgelegde details van het verblijf en beloven geen voorziening die er niet is.',
      'Berätta era resdatum och vad som betyder mest för er. Vi hänvisar till de verifierade boendedetaljerna i stället för att lova en bekvämlighet som inte finns där.'
    ),
    imageAlt: l(
      'Living room and open staircase at AMARA Family & Surf in Tarifa',
      'Wohnzimmer und offene Treppe bei AMARA Family & Surf in Tarifa',
      'Salón y escalera abierta en AMARA Family & Surf, Tarifa',
      'Woonkamer en open trap bij AMARA Family & Surf in Tarifa',
      'Vardagsrum och öppen trappa på AMARA Family & Surf i Tarifa'
    )
  },
  planning: {
    title: l('Plan the stay around the two of you', 'Plant den Aufenthalt rund um euch beide', 'Planificad la estancia a vuestra medida', 'Plan het verblijf rond jullie samen', 'Planera vistelsen kring er två'),
    intro: l('A few grounded decisions make the wedding anniversary feel easier from the first day.', 'Ein paar konkrete Entscheidungen machen euren Hochzeitstag vom ersten Tag an leichter.', 'Unas decisiones concretas hacen que el aniversario de boda resulte más fácil desde el primer día.', 'Een paar concrete keuzes maken de huwelijksverjaardag vanaf de eerste dag ontspannen.', 'Några konkreta beslut gör bröllopsdagen enklare från första dagen.'),
    items: [
      {
        id: 'arrival',
        title: l('Make arrival part of the plan', 'Die Anreise mitplanen', 'Incluid la llegada en el plan', 'Neem de aankomst mee in het plan', 'Gör ankomsten till en del av planen'),
        text: l('Compare the airport, car and transfer options before fixing your first and last day.', 'Vergleicht Flughafen, Auto und Transfer, bevor ihr den ersten und letzten Tag fest plant.', 'Comparad aeropuerto, coche y traslados antes de cerrar el primer y último día.', 'Vergelijk luchthaven, auto en transfer voordat jullie de eerste en laatste dag vastleggen.', 'Jämför flygplats, bil och transfer innan ni bestämmer den första och sista dagen.'),
        linkLabel: l('Read the arrival guide', 'Anreise-Guide lesen', 'Leer la guía de llegada', 'Lees de aankomstgids', 'Läs ankomstguiden'),
        linkToken: 'arrival_guide' as WeddingAnniversaryPlanningLinkToken
      },
      {
        id: 'east-coast',
        title: l('Village or Mediterranean coast?', 'Dorf oder Mittelmeerküste?', '¿Pueblo o costa mediterránea?', 'Dorp of Middellandse Zeekust?', 'By eller Medelhavskust?'),
        text: l('Use the Frigiliana–Nerja comparison to decide between old-town character and easier daily access to the sea.', 'Nutzt den Vergleich Frigiliana–Nerja, um zwischen Altstadtcharakter und einfacherem täglichem Zugang zum Meer zu wählen.', 'Usad la comparación entre Frigiliana y Nerja para elegir entre el carácter del casco antiguo y un acceso cotidiano más fácil al mar.', 'Gebruik de vergelijking Frigiliana–Nerja om te kiezen tussen de sfeer van de oude stad en dagelijks gemakkelijker naar zee.', 'Använd jämförelsen Frigiliana–Nerja för att välja mellan gamla stans karaktär och enklare daglig tillgång till havet.'),
        linkLabel: l('Compare Frigiliana and Nerja', 'Frigiliana und Nerja vergleichen', 'Comparar Frigiliana y Nerja', 'Vergelijk Frigiliana en Nerja', 'Jämför Frigiliana och Nerja'),
        linkToken: 'nerja_vs_frigiliana' as WeddingAnniversaryPlanningLinkToken
      },
      {
        id: 'tarifa',
        title: l('Consider the Atlantic option', 'Die Atlantik-Option prüfen', 'Considerad la opción atlántica', 'Overweeg de Atlantische optie', 'Överväg Atlantalternativet'),
        text: l('Tarifa suits couples who want more room, open horizons and a different rhythm from the Costa del Sol.', 'Tarifa passt zu Paaren, die mehr Raum, einen weiten Horizont und einen anderen Rhythmus als an der Costa del Sol suchen.', 'Tarifa encaja con parejas que buscan más espacio, horizontes abiertos y un ritmo distinto al de la Costa del Sol.', 'Tarifa past bij stellen die meer ruimte, een open horizon en een ander ritme dan aan de Costa del Sol zoeken.', 'Tarifa passar par som vill ha mer utrymme, öppna horisonter och en annan rytm än på Costa del Sol.'),
        linkLabel: l('Understand Tarifa as a base', 'Tarifa als Standort verstehen', 'Entender Tarifa como base', 'Ontdek Tarifa als uitvalsbasis', 'Förstå Tarifa som bas'),
        linkToken: 'location_tarifa' as WeddingAnniversaryPlanningLinkToken
      },
      {
        id: 'direct',
        title: l('Book with clear expectations', 'Mit klaren Erwartungen buchen', 'Reservad con expectativas claras', 'Boek met heldere verwachtingen', 'Boka med tydliga förväntningar'),
        text: l('Review the property facts and direct-booking conditions before choosing dates and making the reservation.', 'Prüft Unterkunftsfakten und Direktbuchungsbedingungen, bevor ihr Reisedaten auswählt und reserviert.', 'Revisad los datos del alojamiento y las condiciones de reserva directa antes de elegir fechas y reservar.', 'Bekijk de verblijfsdetails en voorwaarden voor direct boeken voordat jullie data kiezen en reserveren.', 'Läs boendefakta och villkoren för direktbokning innan ni väljer datum och bokar.'),
        linkLabel: l('Why book direct?', 'Warum direkt buchen?', '¿Por qué reservar directamente?', 'Waarom direct boeken?', 'Varför boka direkt?'),
        linkToken: 'direct_booking_benefits' as WeddingAnniversaryPlanningLinkToken
      }
    ]
  },
  faq: {
    title: l('Questions about a wedding anniversary with AMARA', 'Fragen zu eurem Hochzeitstag mit AMARA', 'Preguntas sobre un aniversario de boda con AMARA', 'Vragen over een huwelijksverjaardag met AMARA', 'Frågor om en bröllopsdag med AMARA'),
    items: [
      {
        id: 'destinations',
        question: l('Where can we spend our wedding anniversary with AMARA?', 'Wo können wir unseren Hochzeitstag mit AMARA verbringen?', '¿Dónde podemos pasar nuestro aniversario de boda con AMARA?', 'Waar kunnen we onze huwelijksverjaardag met AMARA doorbrengen?', 'Var kan vi tillbringa bröllopsdagen med AMARA?'),
        answer: l('AMARA has stays in Frigiliana, Nerja and Tarifa. Frigiliana offers an old-town setting, Nerja gives you easy access to the Mediterranean, and Tarifa combines more space with an Atlantic outlook.', 'AMARA bietet Unterkünfte in Frigiliana, Nerja und Tarifa. Frigiliana steht für Altstadtatmosphäre, Nerja für den einfachen Zugang zum Mittelmeer und Tarifa für mehr Raum mit Blick zum Atlantik.', 'AMARA ofrece alojamientos en Frigiliana, Nerja y Tarifa. Frigiliana aporta ambiente de casco antiguo, Nerja facilita el acceso al Mediterráneo y Tarifa combina más espacio con vistas al Atlántico.', 'AMARA heeft verblijven in Frigiliana, Nerja en Tarifa. Frigiliana biedt de sfeer van de oude stad, Nerja gemakkelijke toegang tot de Middellandse Zee en Tarifa meer ruimte met uitzicht op de Atlantische Oceaan.', 'AMARA har boenden i Frigiliana, Nerja och Tarifa. Frigiliana ger gamla stans miljö, Nerja enkel tillgång till Medelhavet och Tarifa mer utrymme med utsikt mot Atlanten.')
      },
      {
        id: 'features',
        question: l('Does every hideaway have a private terrace and sea view?', 'Hat jedes Hideaway eine private Terrasse und Meerblick?', '¿Todos los refugios tienen terraza privada y vistas al mar?', 'Heeft elke hideaway een privéterras en zeezicht?', 'Har varje hideaway privat terrass och havsutsikt?'),
        answer: l('No. Features differ by property. Check the individual stay page for verified information about terraces, views, beds, access and facilities before booking.', 'Nein. Die Merkmale unterscheiden sich je nach Unterkunft. Prüft vor der Buchung die jeweilige Seite mit belegten Angaben zu Terrasse, Aussicht, Bett, Zugang und Ausstattung.', 'No. Las características varían según el alojamiento. Consultad la página de cada estancia para comprobar terraza, vistas, cama, acceso y equipamiento antes de reservar.', 'Nee. Kenmerken verschillen per verblijf. Bekijk vóór het boeken de pagina van het verblijf voor vastgelegde informatie over terras, uitzicht, bed, toegang en voorzieningen.', 'Nej. Egenskaperna skiljer sig mellan boendena. Kontrollera den enskilda boendesidan för verifierad information om terrass, utsikt, säng, tillträde och utrustning före bokning.')
      },
      {
        id: 'tarifa-couple',
        question: l('Is AMARA Family & Surf suitable for a wedding anniversary for two?', 'Eignet sich AMARA Family & Surf für einen Hochzeitstag zu zweit?', '¿AMARA Family & Surf es adecuado para un aniversario de boda de dos?', 'Is AMARA Family & Surf geschikt voor een huwelijksverjaardag met z’n tweeën?', 'Passar AMARA Family & Surf för en bröllopsdag för två?'),
        answer: l('Yes. The Tarifa penthouse is a generous stay for a couple, with two floors, two bedrooms, two bathrooms and an Atlantic-facing terrace. Its capacity of up to four does not prevent it from working well for two.', 'Ja. Das Penthouse in Tarifa ist mit zwei Etagen, zwei Schlafzimmern, zwei Bädern und einer Terrasse mit Atlantikblick großzügig für ein Paar. Die Kapazität bis vier Gäste steht einem Aufenthalt zu zweit nicht entgegen.', 'Sí. El ático de Tarifa es amplio para una pareja, con dos plantas, dos dormitorios, dos baños y terraza frente al Atlántico. Su capacidad de hasta cuatro huéspedes no impide disfrutarlo entre dos.', 'Ja. Het penthouse in Tarifa is royaal voor een stel, met twee verdiepingen, twee slaapkamers, twee badkamers en een terras aan de Atlantische Oceaan. De capaciteit tot vier gasten maakt het niet minder geschikt voor twee.', 'Ja. Takvåningen i Tarifa är rymlig för ett par, med två våningar, två sovrum, två badrum och en terrass mot Atlanten. Kapaciteten på upp till fyra gör den inte mindre lämplig för två.')
      },
      {
        id: 'package',
        question: l('Do we need to book a fixed wedding anniversary package?', 'Müssen wir ein festes Hochzeitstagspaket buchen?', '¿Tenemos que reservar un paquete fijo de aniversario de boda?', 'Moeten we een vast pakket voor de huwelijksverjaardag boeken?', 'Måste vi boka ett färdigt bröllopsdagspaket?'),
        answer: l('No. Choose the stay and dates that fit you. If a particular detail matters to your trip, ask us before booking so we can confirm what is available at that property.', 'Nein. Wählt die Unterkunft und Reisedaten, die zu euch passen. Wenn euch ein bestimmtes Detail wichtig ist, fragt uns vor der Buchung, damit wir bestätigen können, was in dieser Unterkunft vorhanden ist.', 'No. Elegid el alojamiento y las fechas que encajen con vosotros. Si algún detalle es importante para el viaje, preguntadnos antes de reservar para que podamos confirmar qué ofrece ese alojamiento.', 'Nee. Kies het verblijf en de data die bij jullie passen. Is een bepaald detail belangrijk, vraag het dan vóór het boeken zodat we kunnen bevestigen wat dit verblijf biedt.', 'Nej. Välj boendet och datumen som passar er. Om en viss detalj är viktig för resan, fråga oss före bokning så att vi kan bekräfta vad som finns på just det boendet.')
      },
      {
        id: 'choose',
        question: l('How should we choose between the six stays?', 'Wie wählen wir zwischen den sechs Unterkünften?', '¿Cómo elegimos entre los seis alojamientos?', 'Hoe kiezen we tussen de zes verblijven?', 'Hur väljer vi mellan de sex boendena?'),
        answer: l('Start with destination and dates, then compare outdoor space, bed, kitchen, access, occupancy and proximity to the places you want to experience. Availability may narrow the shortlist.', 'Beginnt mit Ort und Reisedaten. Vergleicht danach Außenbereich, Bett, Küche, Zugang, Belegung und Nähe zu den Orten, die ihr erleben möchtet. Die Verfügbarkeit kann die Auswahl eingrenzen.', 'Empezad por el destino y las fechas; comparad después espacio exterior, cama, cocina, acceso, ocupación y cercanía a los lugares que queréis vivir. La disponibilidad puede reducir la selección.', 'Begin met bestemming en data. Vergelijk daarna buitenruimte, bed, keuken, toegang, bezetting en afstand tot de plekken die jullie willen beleven. Beschikbaarheid kan de keuze beperken.', 'Börja med resmål och datum. Jämför sedan uteplats, säng, kök, tillträde, beläggning och närhet till platserna ni vill uppleva. Tillgängligheten kan begränsa urvalet.')
      }
    ]
  },
  closing: {
    title: l('Choose the place where your time together begins', 'Wählt den Ort, an dem eure gemeinsame Zeit beginnt', 'Elegid el lugar donde empieza vuestro tiempo juntos', 'Kies de plek waar jullie tijd samen begint', 'Välj platsen där er tid tillsammans börjar'),
    paragraphs: lp(
      ['Tell us your dates, preferred destination and the property details that matter most. We will help you find the AMARA hideaway that fits the two of you.'],
      ['Nennt uns eure Reisedaten, euren Wunschort und die Unterkunftsdetails, die euch besonders wichtig sind. Wir helfen euch, das AMARA Hideaway zu finden, das zu euch beiden passt.'],
      ['Decidnos las fechas, el destino que preferís y los detalles del alojamiento que más os importan. Os ayudaremos a encontrar el refugio AMARA que encaja con vosotros.'],
      ['Vertel ons jullie data, voorkeursbestemming en de verblijfsdetails die het belangrijkst zijn. We helpen jullie de AMARA hideaway te vinden die bij jullie past.'],
      ['Berätta era datum, önskat resmål och vilka boendedetaljer som betyder mest. Vi hjälper er att hitta det AMARA-hideaway som passar just er.']
    ),
    cta: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Beschikbaarheid bekijken', 'Se tillgänglighet')
  },
  footerHighlights: {
    weddingAnniversary: l('Wedding anniversary in Andalusia', 'Hochzeitstag in Andalusien', 'Aniversario de boda en Andalucía', 'Huwelijksverjaardag in Andalusië', 'Bröllopsdag i Andalusien'),
    stays: l('Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways', 'Romantic Hideaways'),
    reviews: l('Guest reviews', 'Gästebewertungen', 'Reseñas', 'Gastbeoordelingen', 'Gästrecensioner'),
    direct: l('Book direct', 'Direkt buchen', 'Reserva directa', 'Direct boeken', 'Boka direkt')
  }
};
