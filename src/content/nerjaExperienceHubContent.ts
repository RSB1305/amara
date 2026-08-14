import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type NerjaExperienceThemeId =
  | 'coast'
  | 'balcon'
  | 'caves'
  | 'food'
  | 'calendar'
  | 'wellness'
  | 'nightlife';

type NerjaExperienceTheme = {
  id: NerjaExperienceThemeId;
  title: string;
  text: string;
  linkLabel?: string;
  token?: 'nerja_balcon_de_europa' | 'nerja_caves' | 'nerja_nightlife_authority';
};

type NerjaExperienceHubCopy = {
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    imageAlt: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    text: string;
  };
  themes: NerjaExperienceTheme[];
  closing: {
    eyebrow: string;
    title: string;
    text: string;
    stayLabel: string;
  };
};

export const nerjaExperienceHubSeo: AmaraAuthoringSeo = {
  version: '2026-08-14-nerja-experience-hub-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  languages: {
    en: {
      title: 'Things to Do in Nerja: Coast, Caves & Evenings',
      description: 'Explore Nerja through its beaches, old town, caves, food, local calendar, wellness and evening life with AMARA’s destination-specific guide.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Nerja erleben: Küste, Höhlen & Abende',
      description: 'Entdeckt Nerja mit Stränden, Altstadt, Höhlen, Restaurants, lokalen Terminen, Wellness und Abendleben im eigenen AMARA Erlebnis-Guide.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Nerja: costa, cuevas y noches',
      description: 'Descubrid Nerja a través de sus playas, casco antiguo, cuevas, gastronomía, calendario local, bienestar y vida nocturna.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Nerja: kust, grotten & avonden',
      description: 'Ontdek Nerja via stranden, oude stad, grotten, restaurants, lokale evenementen, wellness en avondleven in een eigen AMARA-gids.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Nerja: kust, grottor & kvällar',
      description: 'Upptäck Nerja genom stränder, gamla stan, grottor, mat, lokala evenemang, wellness och kvällsliv i AMARAs destinationsguide.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaExperienceHubContent: Record<AmaraLanguage, NerjaExperienceHubCopy> = {
  en: {
    hero: {
      eyebrow: 'Experiences in Nerja',
      title: 'Sea, old streets and evenings with more movement.',
      standfirst: 'Nerja has its own rhythm: mornings by the Mediterranean, cultural landmarks close to town and a wider choice after sunset. This guide keeps that experience separate from village life in Frigiliana.',
      imageAlt: 'Aerial view of Nerja and the Mediterranean coast'
    },
    intro: {
      eyebrow: 'Choose the kind of day',
      title: 'Start with the coast, then add one clear experience.',
      text: 'The beach, the Balcón de Europa and the caves answer different questions. Food, local dates, wellness and evenings need their own Nerja context too—without borrowing Frigiliana’s market, festivals or mountain identity.'
    },
    themes: [
      { id: 'coast', title: 'Beaches & coast', text: 'Compare easy town beaches with the more natural coves towards Maro, then choose by access, conditions and the pace you want.' },
      { id: 'balcon', title: 'Balcón & Old Town', text: 'Use the Balcón de Europa as the starting point for sea views, pedestrian streets and an unhurried walk through central Nerja.', token: 'nerja_balcon_de_europa', linkLabel: 'Open the Balcón guide' },
      { id: 'caves', title: 'Nerja Caves', text: 'Plan the cave visit as a distinct cultural experience, with realistic timing and the practical details that matter before arrival.', token: 'nerja_caves', linkLabel: 'Open the cave guide' },
      { id: 'food', title: 'Restaurants & tapas', text: 'Nerja’s seafood, tapas bars and special dinners form a separate dining landscape from the village terraces in Frigiliana.' },
      { id: 'calendar', title: 'Markets, fiestas & culture', text: 'Market days, coastal celebrations and cultural programmes belong to Nerja’s own calendar and need destination-specific planning.' },
      { id: 'wellness', title: 'Wellness by the coast', text: 'Build a slower Nerja day around the sea, a treatment or a quiet morning without importing the rural wellness offer around Frigiliana.' },
      { id: 'nightlife', title: 'Evening life', text: 'Choose between dinner and a terrace, live music or a livelier late evening—this is a Nerja experience, not a Frigiliana promise.', token: 'nerja_nightlife_authority', linkLabel: 'Open the evening guide' }
    ],
    closing: { eyebrow: 'Stay close to the sea', title: 'Let Nerja set its own rhythm.', text: 'AMARA Playa gives you a quiet base close to the coast while the town’s beaches, old streets and evenings remain within easy reach.', stayLabel: 'View AMARA Playa' }
  },
  de: {
    hero: {
      eyebrow: 'Erlebnisse in Nerja',
      title: 'Meer, Altstadt und Abende mit mehr Bewegung.',
      standfirst: 'Nerja hat einen eigenen Rhythmus: morgens ans Mittelmeer, kulturelle Orte nah am Zentrum und nach Sonnenuntergang mehr Auswahl. Dieser Guide trennt das Küstenerlebnis klar vom Dorfleben in Frigiliana.',
      imageAlt: 'Luftaufnahme von Nerja und der Mittelmeerküste'
    },
    intro: {
      eyebrow: 'Wählt euren Tag',
      title: 'Beginnt an der Küste und ergänzt ein klares Erlebnis.',
      text: 'Strand, Balcón de Europa und Höhlen beantworten unterschiedliche Fragen. Auch Restaurants, lokale Termine, Wellness und Abende brauchen ihren eigenen Nerja-Kontext – ohne Frigilianas Markt, Feste oder Bergidentität zu übernehmen.'
    },
    themes: [
      { id: 'coast', title: 'Strände & Küste', text: 'Vergleicht gut erreichbare Stadtstrände mit den natürlicheren Buchten Richtung Maro und wählt nach Zugang, Bedingungen und gewünschtem Tempo.' },
      { id: 'balcon', title: 'Balcón & Altstadt', text: 'Nutzt den Balcón de Europa als Ausgangspunkt für Meerblick, Fußgängerzonen und einen entspannten Rundgang durch Nerjas Zentrum.', token: 'nerja_balcon_de_europa', linkLabel: 'Balcón-Guide öffnen' },
      { id: 'caves', title: 'Höhlen von Nerja', text: 'Plant den Höhlenbesuch als eigenständiges Kulturerlebnis – mit realistischem Zeitbedarf und den wichtigen Details vor der Ankunft.', token: 'nerja_caves', linkLabel: 'Höhlen-Guide öffnen' },
      { id: 'food', title: 'Restaurants & Tapas', text: 'Fischrestaurants, Tapasbars und besondere Abendessen bilden in Nerja eine andere kulinarische Landschaft als die Dorfterrassen in Frigiliana.' },
      { id: 'calendar', title: 'Märkte, Feste & Kultur', text: 'Markttage, Feiern an der Küste und Kulturprogramme gehören in Nerjas eigenen Kalender und brauchen eine lokale Planung.' },
      { id: 'wellness', title: 'Wellness an der Küste', text: 'Verbindet Meer, Behandlung oder einen ruhigen Morgen zu einem langsamen Nerja-Tag – getrennt vom ländlichen Wellness-Angebot rund um Frigiliana.' },
      { id: 'nightlife', title: 'Abendleben', text: 'Wählt zwischen Essen und Terrasse, Live-Musik oder einem lebhafteren späten Abend. Das ist ein Nerja-Erlebnis, kein Versprechen für Frigiliana.', token: 'nerja_nightlife_authority', linkLabel: 'Abend-Guide öffnen' }
    ],
    closing: { eyebrow: 'Nah am Meer wohnen', title: 'Lasst Nerja seinen eigenen Rhythmus bestimmen.', text: 'AMARA Playa ist eure ruhige Basis nahe der Küste, während Strände, Altstadt und Nerjas Abende gut erreichbar bleiben.', stayLabel: 'AMARA Playa ansehen' }
  },
  es: {
    hero: {
      eyebrow: 'Experiencias en Nerja',
      title: 'Mar, calles antiguas y noches con más movimiento.',
      standfirst: 'Nerja tiene un ritmo propio: mañanas junto al Mediterráneo, lugares culturales cerca del centro y más opciones al caer la tarde. Esta guía separa claramente esa experiencia de la vida de pueblo en Frigiliana.',
      imageAlt: 'Vista aérea de Nerja y la costa mediterránea'
    },
    intro: {
      eyebrow: 'Elegid el tipo de día',
      title: 'Empezad por la costa y añadid una experiencia clara.',
      text: 'La playa, el Balcón de Europa y las cuevas responden a planes distintos. La gastronomía, las fechas locales, el bienestar y las noches también necesitan un contexto propio de Nerja, sin apropiarse del mercado, las fiestas o la identidad serrana de Frigiliana.'
    },
    themes: [
      { id: 'coast', title: 'Playas y costa', text: 'Comparad las playas urbanas de acceso sencillo con las calas más naturales hacia Maro y elegid según el acceso, las condiciones y el ritmo del día.' },
      { id: 'balcon', title: 'Balcón y casco antiguo', text: 'Tomad el Balcón de Europa como punto de partida para disfrutar del mar, las calles peatonales y un paseo tranquilo por el centro.', token: 'nerja_balcon_de_europa', linkLabel: 'Abrir la guía del Balcón' },
      { id: 'caves', title: 'Cueva de Nerja', text: 'Planificad la visita como una experiencia cultural propia, con tiempos realistas y la información práctica necesaria antes de llegar.', token: 'nerja_caves', linkLabel: 'Abrir la guía de la cueva' },
      { id: 'food', title: 'Restaurantes y tapas', text: 'El pescado, los bares de tapas y las cenas especiales de Nerja forman un paisaje gastronómico distinto de las terrazas de Frigiliana.' },
      { id: 'calendar', title: 'Mercados, fiestas y cultura', text: 'Los mercadillos, las celebraciones costeras y la programación cultural pertenecen al calendario propio de Nerja.' },
      { id: 'wellness', title: 'Bienestar junto al mar', text: 'Combinad el mar, un tratamiento o una mañana tranquila sin confundir esta oferta con el bienestar rural de Frigiliana.' },
      { id: 'nightlife', title: 'Vida nocturna', text: 'Elegid entre cena y terraza, música en directo o una noche más animada. Es una experiencia de Nerja, no una promesa de Frigiliana.', token: 'nerja_nightlife_authority', linkLabel: 'Abrir la guía de la noche' }
    ],
    closing: { eyebrow: 'Alojarse cerca del mar', title: 'Dejad que Nerja marque su propio ritmo.', text: 'AMARA Playa ofrece una base tranquila cerca de la costa, con las playas, el casco antiguo y las noches de Nerja a vuestro alcance.', stayLabel: 'Ver AMARA Playa' }
  },
  nl: {
    hero: {
      eyebrow: 'Ervaringen in Nerja',
      title: 'Zee, oude straten en avonden met meer levendigheid.',
      standfirst: 'Nerja heeft een eigen ritme: ochtenden aan de Middellandse Zee, culturele plekken dicht bij het centrum en meer keuze na zonsondergang. Deze gids houdt dat duidelijk gescheiden van het dorpsleven in Frigiliana.',
      imageAlt: 'Luchtfoto van Nerja en de Middellandse Zeekust'
    },
    intro: {
      eyebrow: 'Kies het soort dag',
      title: 'Begin aan de kust en voeg één duidelijke ervaring toe.',
      text: 'Het strand, het Balcón de Europa en de grotten vragen elk om een ander plan. Ook eten, lokale data, wellness en avonden verdienen hun eigen Nerja-context, zonder de markt, feesten of bergidentiteit van Frigiliana over te nemen.'
    },
    themes: [
      { id: 'coast', title: 'Stranden & kust', text: 'Vergelijk makkelijk bereikbare stadsstranden met natuurlijkere baaien richting Maro en kies op basis van toegang, omstandigheden en tempo.' },
      { id: 'balcon', title: 'Balcón & oude stad', text: 'Gebruik het Balcón de Europa als vertrekpunt voor zeezicht, autovrije straten en een ontspannen wandeling door het centrum.', token: 'nerja_balcon_de_europa', linkLabel: 'Open de Balcón-gids' },
      { id: 'caves', title: 'Grotten van Nerja', text: 'Plan de grotten als een zelfstandige culturele ervaring, met realistische tijden en praktische informatie voor vertrek.', token: 'nerja_caves', linkLabel: 'Open de grottengids' },
      { id: 'food', title: 'Restaurants & tapas', text: 'Visrestaurants, tapasbars en bijzondere diners vormen in Nerja een ander eetlandschap dan de dorpsterrassen van Frigiliana.' },
      { id: 'calendar', title: 'Markten, feesten & cultuur', text: 'Marktdagen, feesten aan de kust en culturele programma’s horen bij Nerja’s eigen kalender.' },
      { id: 'wellness', title: 'Wellness aan de kust', text: 'Combineer de zee, een behandeling of een rustige ochtend zonder dit te verwarren met het landelijke wellnessaanbod rond Frigiliana.' },
      { id: 'nightlife', title: 'Avondleven', text: 'Kies tussen diner en terras, livemuziek of een levendigere late avond. Dit hoort bij Nerja, niet bij de belofte van Frigiliana.', token: 'nerja_nightlife_authority', linkLabel: 'Open de avondgids' }
    ],
    closing: { eyebrow: 'Dicht bij zee verblijven', title: 'Laat Nerja zijn eigen ritme bepalen.', text: 'AMARA Playa is een rustige uitvalsbasis bij de kust, terwijl stranden, oude straten en avondleven dichtbij blijven.', stayLabel: 'Bekijk AMARA Playa' }
  },
  sv: {
    hero: {
      eyebrow: 'Upplevelser i Nerja',
      title: 'Hav, gamla gränder och kvällar med mer rörelse.',
      standfirst: 'Nerja har sin egen rytm: morgnar vid Medelhavet, kultur nära centrum och fler val efter solnedgången. Guiden skiljer tydligt den upplevelsen från bylivet i Frigiliana.',
      imageAlt: 'Flygvy över Nerja och Medelhavskusten'
    },
    intro: {
      eyebrow: 'Välj dagens riktning',
      title: 'Börja vid kusten och lägg till en tydlig upplevelse.',
      text: 'Stranden, Balcón de Europa och grottorna kräver olika planer. Mat, lokala datum, wellness och kvällar behöver också ett eget Nerja-sammanhang utan att låna Frigilianas marknad, festivaler eller bergsidentitet.'
    },
    themes: [
      { id: 'coast', title: 'Stränder & kust', text: 'Jämför lättillgängliga stadsstränder med naturligare vikar mot Maro och välj efter tillgång, förhållanden och önskat tempo.' },
      { id: 'balcon', title: 'Balcón & gamla stan', text: 'Använd Balcón de Europa som startpunkt för havsutsikt, gågator och en lugn promenad genom centrala Nerja.', token: 'nerja_balcon_de_europa', linkLabel: 'Öppna Balcón-guiden' },
      { id: 'caves', title: 'Nerjagrottorna', text: 'Planera grottbesöket som en egen kulturupplevelse med realistisk tidsåtgång och praktiska detaljer före ankomsten.', token: 'nerja_caves', linkLabel: 'Öppna grottguiden' },
      { id: 'food', title: 'Restauranger & tapas', text: 'Fiskrestauranger, tapasbarer och speciella middagar bildar ett annat matlandskap än byterrasserna i Frigiliana.' },
      { id: 'calendar', title: 'Marknader, festivaler & kultur', text: 'Marknadsdagar, kustfiranden och kulturprogram hör till Nerjas egen kalender.' },
      { id: 'wellness', title: 'Wellness vid kusten', text: 'Kombinera havet, en behandling eller en lugn morgon utan att blanda ihop detta med Frigilianas lantliga wellnessutbud.' },
      { id: 'nightlife', title: 'Kvällsliv', text: 'Välj mellan middag och terrass, livemusik eller en livligare sen kväll. Det är en Nerja-upplevelse, inte ett Frigiliana-löfte.', token: 'nerja_nightlife_authority', linkLabel: 'Öppna kvällsguiden' }
    ],
    closing: { eyebrow: 'Bo nära havet', title: 'Låt Nerja sätta sin egen rytm.', text: 'AMARA Playa är en lugn bas nära kusten, med stränder, gamla gränder och Nerjas kvällar inom räckhåll.', stayLabel: 'Se AMARA Playa' }
  }
};
