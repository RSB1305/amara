import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type TarifaGuideId = 'overview' | 'wind' | 'beaches';
export type LocalizedText = Record<AmaraLanguage, string>;

export interface TarifaGuideCard {
  kicker: LocalizedText;
  title: LocalizedText;
  text: LocalizedText;
}

export interface TarifaGuideSection {
  id: string;
  eyebrow: LocalizedText;
  title: LocalizedText;
  intro: LocalizedText;
  cards: TarifaGuideCard[];
}

export interface TarifaGuideSource {
  label: LocalizedText;
  href: string;
}

export interface TarifaGuideContent {
  id: TarifaGuideId;
  token: string;
  seo: AmaraAuthoringSeo;
  navLabel: LocalizedText;
  breadcrumbLabel: LocalizedText;
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    lead: LocalizedText;
    editorialNote: LocalizedText;
    updated: LocalizedText;
  };
  facts: Array<{
    label: LocalizedText;
    value: LocalizedText;
  }>;
  sections: TarifaGuideSection[];
  notice: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
  };
  faq: Array<{
    question: LocalizedText;
    answer: LocalizedText;
  }>;
  sources: TarifaGuideSource[];
  related: TarifaGuideId[];
}

const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedText => ({ en, de, es, nl, sv });

const article = {
  datePublished: '2026-08-03',
  dateModified: '2026-08-03',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

const buildSeo = (
  version: string,
  pageType: AmaraAuthoringSeo['pageType'],
  titles: LocalizedText,
  descriptions: LocalizedText
): AmaraAuthoringSeo => ({
  version,
  pageType,
  entityKey: 'amara-brand',
  article,
  languages: {
    en: { title: titles.en, description: descriptions.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: titles.de, description: descriptions.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: titles.es, description: descriptions.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: titles.nl, description: descriptions.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: titles.sv, description: descriptions.sv, robots: 'index, follow', canonical: 'auto' }
  }
});

const sharedEditorialNote = l(
  'An independent AMARA orientation guide for planning your stay — not a live conditions service.',
  'Ein unabhängiger AMARA-Guide zur Reiseplanung – kein Live-Dienst für aktuelle Bedingungen.',
  'Una guía independiente de AMARA para planificar la estancia; no es un servicio de condiciones en directo.',
  'Een onafhankelijke AMARA-gids voor je reisplanning — geen live informatiedienst.',
  'En oberoende AMARA-guide för reseplanering – inte en tjänst för liveförhållanden.'
);

const sharedUpdated = l(
  'Reviewed August 2026',
  'Geprüft im August 2026',
  'Revisado en agosto de 2026',
  'Gecontroleerd in augustus 2026',
  'Granskad i augusti 2026'
);

const officialBeachSource: TarifaGuideSource = {
  label: l(
    'Tarifa Tourism: beaches',
    'Tourismus Tarifa: Strände',
    'Turismo de Tarifa: playas',
    'Toerisme Tarifa: stranden',
    'Tarifas turistbyrå: stränder'
  ),
  href: 'https://turismodetarifa.com/en/beaches/'
};

const beachPlanSource: TarifaGuideSource = {
  label: l(
    'Tarifa Town Council: Beach Use Plan 2024–2027',
    'Stadt Tarifa: Strandnutzungsplan 2024–2027',
    'Ayuntamiento de Tarifa: Plan de Playas 2024–2027',
    'Gemeente Tarifa: strandplan 2024–2027',
    'Tarifas kommun: strandplan 2024–2027'
  ),
  href: 'https://www.aytotarifa.com/notices/plan-de-explotacion-de-playas-2024-2027/'
};

const officialKiteSource: TarifaGuideSource = {
  label: l(
    'Tarifa Tourism: kitesurfing',
    'Tourismus Tarifa: Kitesurfen',
    'Turismo de Tarifa: kitesurf',
    'Toerisme Tarifa: kitesurfen',
    'Tarifas turistbyrå: kitesurfing'
  ),
  href: 'https://turismodetarifa.com/que-hacer/kitesurf/'
};

const overviewTitles = l(
  'Tarifa Travel Guide | Atlantic, Wind & Old Town',
  'Tarifa-Reiseführer | Atlantik, Wind & Altstadt',
  'Guía de Tarifa | Atlántico, viento y casco histórico',
  'Tarifa-gids | Atlantische kust, wind en oude stad',
  'Tarifa-guide | Atlanten, vind och gamla stan'
);

const overviewDescriptions = l(
  'Plan a Tarifa stay with clear guidance on Atlantic beaches, wind, the old town, day rhythms and AMARA Family & Surf.',
  'Tarifa planen: Atlantikstrände, Wind, Altstadt, Tagesrhythmus und AMARA Family & Surf klar und ehrlich eingeordnet.',
  'Planifica Tarifa con orientación clara sobre playas atlánticas, viento, casco histórico y AMARA Family & Surf.',
  'Plan Tarifa met heldere informatie over Atlantische stranden, wind, de oude stad en AMARA Family & Surf.',
  'Planera Tarifa med tydlig vägledning om Atlantstränder, vind, gamla stan och AMARA Family & Surf.'
);

const overview: TarifaGuideContent = {
  id: 'overview',
  token: 'location_tarifa',
  seo: buildSeo('2026-08-03-tarifa-location-v2.0', 'A', overviewTitles, overviewDescriptions),
  navLabel: l('Overview', 'Überblick', 'Visión general', 'Overzicht', 'Översikt'),
  breadcrumbLabel: l('Tarifa', 'Tarifa', 'Tarifa', 'Tarifa', 'Tarifa'),
  hero: {
    eyebrow: l('AMARA destination guide', 'AMARA Reiseguide', 'Guía de destino AMARA', 'AMARA-bestemmingsgids', 'AMARA destinationsguide'),
    title: l(
      'Tarifa — Atlantic energy with room to slow down',
      'Tarifa – Atlantik-Energie mit Raum zum Abschalten',
      'Tarifa: energía atlántica y espacio para bajar el ritmo',
      'Tarifa — Atlantische energie met ruimte om te vertragen',
      'Tarifa – atlantisk energi med plats att varva ner'
    ),
    lead: l(
      'Tarifa is not simply a beach town. Wind shapes the day, the historic centre comes alive after sunset, and the coast opens towards Africa. This guide helps you decide whether that rhythm suits your stay.',
      'Tarifa ist nicht einfach nur ein Strandort. Der Wind prägt den Tag, die Altstadt erwacht am Abend und die Küste öffnet den Blick nach Afrika. Dieser Guide hilft bei der ehrlichen Entscheidung, ob dieser Rhythmus zum Aufenthalt passt.',
      'Tarifa no es solo un destino de playa. El viento marca el día, el casco histórico cobra vida al anochecer y la costa se abre hacia África. Esta guía ayuda a decidir si ese ritmo encaja con la estancia.',
      'Tarifa is meer dan een badplaats. De wind bepaalt het ritme van de dag, het historische centrum komt ’s avonds tot leven en de kust kijkt uit richting Afrika. Deze gids helpt je bepalen of dat ritme bij je verblijf past.',
      'Tarifa är mer än en badort. Vinden formar dagen, den historiska stadskärnan vaknar efter solnedgången och kusten öppnar sig mot Afrika. Guiden hjälper dig avgöra om rytmen passar din vistelse.'
    ),
    editorialNote: sharedEditorialNote,
    updated: sharedUpdated
  },
  facts: [
    {
      label: l('Travel mood', 'Reiserhythmus', 'Ritmo del viaje', 'Reissfeer', 'Resekänsla'),
      value: l('Active coast, calm base', 'Aktive Küste, ruhige Basis', 'Costa activa, base tranquila', 'Actieve kust, rustige basis', 'Aktiv kust, lugn bas')
    },
    {
      label: l('Best known for', 'Bekannt für', 'Conocida por', 'Bekend om', 'Känd för'),
      value: l('Wind, beaches and old town', 'Wind, Strände und Altstadt', 'Viento, playas y casco histórico', 'Wind, stranden en oude stad', 'Vind, stränder och gamla stan')
    },
    {
      label: l('AMARA stay', 'AMARA-Unterkunft', 'Alojamiento AMARA', 'AMARA-verblijf', 'AMARA-boende'),
      value: l('Family & Surf · up to 4 guests', 'Family & Surf · bis 4 Gäste', 'Family & Surf · hasta 4 huéspedes', 'Family & Surf · tot 4 gasten', 'Family & Surf · upp till 4 gäster')
    }
  ],
  sections: [
    {
      id: 'character',
      eyebrow: l('First orientation', 'Erste Orientierung', 'Primera orientación', 'Eerste oriëntatie', 'Första orienteringen'),
      title: l('Three sides of the same destination', 'Drei Seiten desselben Reiseziels', 'Tres caras de un mismo destino', 'Drie kanten van dezelfde bestemming', 'Tre sidor av samma resmål'),
      intro: l(
        'The strongest Tarifa stay combines the coast, the historic centre and enough flexibility to plan around the conditions.',
        'Ein gelungener Tarifa-Aufenthalt verbindet Küste, Altstadt und genügend Flexibilität, um den Tag nach den Bedingungen zu planen.',
        'La mejor estancia en Tarifa combina costa, casco histórico y suficiente flexibilidad para adaptar el día a las condiciones.',
        'Een geslaagd verblijf in Tarifa combineert de kust, de oude stad en genoeg flexibiliteit om de dag op de omstandigheden af te stemmen.',
        'En lyckad vistelse i Tarifa förenar kusten, gamla stan och tillräcklig flexibilitet för att planera dagen efter förhållandena.'
      ),
      cards: [
        {
          kicker: l('Atlantic', 'Atlantik', 'Atlántico', 'Atlantische kust', 'Atlanten'),
          title: l('Open beaches and changing conditions', 'Weite Strände und wechselnde Bedingungen', 'Playas abiertas y condiciones cambiantes', 'Open stranden en wisselende omstandigheden', 'Öppna stränder och skiftande förhållanden'),
          text: l('Los Lances, Valdevaqueros and Bolonia each offer a different balance of space, sport, swimming and landscape.', 'Los Lances, Valdevaqueros und Bolonia bieten jeweils eine andere Mischung aus Weite, Sport, Baden und Landschaft.', 'Los Lances, Valdevaqueros y Bolonia ofrecen distintos equilibrios entre espacio, deporte, baño y paisaje.', 'Los Lances, Valdevaqueros en Bolonia bieden elk een andere balans tussen ruimte, sport, zwemmen en landschap.', 'Los Lances, Valdevaqueros och Bolonia erbjuder olika balans mellan rymd, sport, bad och landskap.')
        },
        {
          kicker: l('Old town', 'Altstadt', 'Casco histórico', 'Oude stad', 'Gamla stan'),
          title: l('A social evening rhythm', 'Ein lebendiger Abendrhythmus', 'Un ritmo social al anochecer', 'Een levendig avondritme', 'En social kvällsrytm'),
          text: l('Whitewashed lanes, small plazas and restaurants make the centre a natural counterpoint to active days outside.', 'Weiße Gassen, kleine Plätze und Restaurants machen das Zentrum zum natürlichen Gegenpol zu aktiven Tagen draußen.', 'Calles blancas, pequeñas plazas y restaurantes convierten el centro en el contrapunto natural a los días activos.', 'Witte steegjes, kleine pleinen en restaurants maken het centrum tot een natuurlijk tegenwicht voor actieve dagen buiten.', 'Vitkalkade gränder, små torg och restauranger blir en naturlig kontrast till aktiva dagar utomhus.')
        },
        {
          kicker: l('Wind', 'Wind', 'Viento', 'Wind', 'Vind'),
          title: l('Part of the destination, not background noise', 'Teil des Reiseziels, nicht nur Kulisse', 'Parte del destino, no un simple telón de fondo', 'Onderdeel van de bestemming, niet alleen achtergrond', 'En del av resmålet, inte bara bakgrund'),
          text: l('Levante and Poniente can change how a beach feels. Good planning starts with the current forecast, flags and local guidance.', 'Levante und Poniente können das Stranderlebnis vollständig verändern. Gute Planung beginnt mit aktueller Vorhersage, Beflaggung und Hinweisen vor Ort.', 'Levante y Poniente pueden cambiar por completo la experiencia de playa. La buena planificación empieza con la previsión, las banderas y la información local.', 'Levante en Poniente kunnen een stranddag volledig veranderen. Goede planning begint met de actuele verwachting, vlaggen en lokale aanwijzingen.', 'Levante och Poniente kan helt förändra en stranddag. Bra planering börjar med aktuell prognos, flaggor och lokal vägledning.')
        }
      ]
    },
    {
      id: 'fit',
      eyebrow: l('Travel fit', 'Passt Tarifa?', '¿Encaja Tarifa?', 'Past Tarifa bij je?', 'Passar Tarifa?'),
      title: l('Choose Tarifa for its real character', 'Tarifa wegen seines echten Charakters wählen', 'Elegir Tarifa por su verdadero carácter', 'Kies Tarifa om het echte karakter', 'Välj Tarifa för dess verkliga karaktär'),
      intro: l('The destination works best when expectations match the place rather than an idealised beach promise.', 'Das Reiseziel funktioniert am besten, wenn die Erwartungen zum Ort passen – nicht zu einem idealisierten Strandversprechen.', 'El destino funciona mejor cuando las expectativas se ajustan al lugar y no a una promesa de playa idealizada.', 'De bestemming werkt het best wanneer verwachtingen bij de plek passen en niet bij een geïdealiseerde strandbelofte.', 'Resmålet fungerar bäst när förväntningarna stämmer med platsen, inte med ett idealiserat strandlöfte.'),
      cards: [
        {
          kicker: l('Strong match', 'Sehr passend', 'Muy buena opción', 'Sterke match', 'Passar mycket bra'),
          title: l('Active travellers and flexible families', 'Aktive Reisende und flexible Familien', 'Viajeros activos y familias flexibles', 'Actieve reizigers en flexibele gezinnen', 'Aktiva resenärer och flexibla familjer'),
          text: l('Ideal for guests who enjoy beaches, outdoor activity and deciding each day according to wind and weather.', 'Ideal für Gäste, die Strände und Outdoor-Aktivitäten mögen und den Tag gern nach Wind und Wetter entscheiden.', 'Ideal para quienes disfrutan de la playa, la actividad al aire libre y deciden cada día según el viento y el tiempo.', 'Ideaal voor gasten die van strand en buitenleven houden en hun dag graag aan wind en weer aanpassen.', 'Perfekt för gäster som gillar strand och uteliv och gärna planerar dagen efter vind och väder.')
        },
        {
          kicker: l('Good with context', 'Gut mit Vorbereitung', 'Buena con preparación', 'Goed met voorbereiding', 'Bra med förberedelse'),
          title: l('Beach holidays without watersports', 'Strandurlaub ohne Wassersport', 'Vacaciones de playa sin deportes acuáticos', 'Strandvakantie zonder watersport', 'Strandsemester utan vattensport'),
          text: l('Very possible, but beach choice matters. Sheltered or designated bathing areas may be more comfortable on stronger wind days.', 'Gut möglich, aber die Strandwahl ist entscheidend. Geschützte oder ausgewiesene Badebereiche können an stärkeren Windtagen angenehmer sein.', 'Es perfectamente posible, pero conviene elegir bien la playa. Las zonas resguardadas o de baño pueden resultar más cómodas con viento fuerte.', 'Zeker mogelijk, maar de strandkeuze telt. Beschutte of aangewezen zwemzones zijn vaak prettiger op dagen met harde wind.', 'Absolut möjligt, men strandvalet spelar roll. Skyddade eller markerade badområden kan vara bekvämare när vinden är stark.')
        },
        {
          kicker: l('Consider carefully', 'Bewusst abwägen', 'Conviene valorar', 'Goed overwegen', 'Överväg noga'),
          title: l('Guests seeking guaranteed stillness', 'Gäste mit Wunsch nach garantierter Windstille', 'Quienes buscan calma garantizada', 'Gasten die gegarandeerde windstilte zoeken', 'Gäster som söker garanterat vindstilla väder'),
          text: l('Tarifa can be calm, but wind is central to its identity. A rigid plan built around one beach is less suitable than a flexible itinerary.', 'Tarifa kann ruhig sein, doch Wind gehört zu seiner Identität. Ein starrer Plan rund um nur einen Strand passt weniger gut als ein flexibler Reiseablauf.', 'Tarifa puede estar en calma, pero el viento forma parte de su identidad. Un plan rígido centrado en una sola playa encaja peor que un itinerario flexible.', 'Tarifa kan rustig zijn, maar wind hoort bij de identiteit. Een strak plan rond één strand past minder goed dan een flexibel programma.', 'Tarifa kan vara lugnt, men vinden är en del av identiteten. Ett strikt schema kring en enda strand passar sämre än en flexibel plan.')
        }
      ]
    }
  ],
  notice: {
    eyebrow: l('Plan with the day', 'Mit dem Tag planen', 'Planificar según el día', 'Plan met de dag mee', 'Planera efter dagen'),
    title: l('Conditions decide more than the calendar', 'Die Bedingungen entscheiden mehr als der Kalender', 'Las condiciones importan más que el calendario', 'De omstandigheden bepalen meer dan de kalender', 'Förhållandena avgör mer än kalendern'),
    text: l('Use the current forecast, official flags, marked zones and local instructions each day. The guides explain the destination; they do not replace real-time safety information.', 'Nutze täglich die aktuelle Vorhersage, offizielle Beflaggung, markierte Zonen und Hinweise vor Ort. Die Guides erklären das Reiseziel, ersetzen aber keine Echtzeit-Sicherheitsinformation.', 'Consulta cada día la previsión, las banderas oficiales, las zonas señalizadas y las indicaciones locales. Las guías explican el destino, pero no sustituyen la información de seguridad en tiempo real.', 'Controleer dagelijks de actuele verwachting, officiële vlaggen, gemarkeerde zones en lokale aanwijzingen. De gidsen leggen de bestemming uit, maar vervangen geen actuele veiligheidsinformatie.', 'Kontrollera varje dag aktuell prognos, officiella flaggor, markerade zoner och lokala anvisningar. Guiderna förklarar resmålet men ersätter inte säkerhetsinformation i realtid.')
  },
  faq: [
    {
      question: l('Is Tarifa only for kitesurfers?', 'Ist Tarifa nur für Kitesurfer?', '¿Tarifa es solo para kitesurfistas?', 'Is Tarifa alleen voor kitesurfers?', 'Är Tarifa bara för kitesurfare?'),
      answer: l('No. The old town, long beaches, coastal landscape and day trips make it rewarding without watersports. Flexibility remains useful because wind changes the beach experience.', 'Nein. Altstadt, lange Strände, Küstenlandschaft und Ausflüge machen Tarifa auch ohne Wassersport attraktiv. Flexibilität bleibt hilfreich, weil der Wind das Stranderlebnis verändert.', 'No. El casco histórico, las largas playas, el paisaje costero y las excursiones ofrecen mucho sin practicar deportes acuáticos. Conviene mantener cierta flexibilidad porque el viento cambia la experiencia de playa.', 'Nee. De oude stad, lange stranden, het kustlandschap en uitstapjes maken Tarifa ook zonder watersport aantrekkelijk. Flexibiliteit blijft handig omdat wind de strandervaring verandert.', 'Nej. Gamla stan, de långa stränderna, kustlandskapet och utflykterna gör Tarifa givande även utan vattensport. Flexibilitet är ändå värdefull eftersom vinden förändrar strandupplevelsen.')
    },
    {
      question: l('Does Tarifa work for families?', 'Eignet sich Tarifa für Familien?', '¿Tarifa es adecuada para familias?', 'Is Tarifa geschikt voor gezinnen?', 'Passar Tarifa för familjer?'),
      answer: l('Yes, especially for families comfortable with active days and flexible beach choices. Always follow bathing zones, flags and local safety guidance.', 'Ja, besonders für Familien, die aktive Tage und flexible Strandwahl mögen. Badezonen, Beflaggung und Sicherheitshinweise vor Ort müssen immer beachtet werden.', 'Sí, especialmente para familias que disfrutan de días activos y pueden elegir la playa con flexibilidad. Hay que respetar siempre las zonas de baño, las banderas y las indicaciones locales.', 'Ja, vooral voor gezinnen die van actieve dagen houden en flexibel een strand kiezen. Volg altijd zwemzones, vlaggen en lokale veiligheidsinstructies.', 'Ja, särskilt för familjer som gillar aktiva dagar och kan välja strand flexibelt. Följ alltid badzoner, flaggor och lokala säkerhetsanvisningar.')
    },
    {
      question: l('Should we rent a car?', 'Ist ein Mietwagen sinnvoll?', '¿Conviene alquilar coche?', 'Is een huurauto handig?', 'Är hyrbil praktiskt?'),
      answer: l('A car makes it easier to compare beaches and adapt to conditions. Parking and access can be busy in peak periods, so current signs and local restrictions take priority.', 'Ein Auto erleichtert den Vergleich verschiedener Strände und die Anpassung an die Bedingungen. In Spitzenzeiten können Zufahrt und Parken stark belastet sein; aktuelle Beschilderung und lokale Regeln haben Vorrang.', 'El coche facilita comparar playas y adaptarse a las condiciones. En temporada alta, los accesos y aparcamientos pueden estar muy concurridos; prevalecen siempre la señalización y las restricciones vigentes.', 'Een auto maakt het makkelijker om stranden te vergelijken en op omstandigheden in te spelen. In drukke periodes kunnen toegang en parkeren lastig zijn; actuele borden en lokale regels zijn leidend.', 'Bil gör det enklare att jämföra stränder och anpassa sig till förhållandena. Under högsäsong kan tillfarter och parkering vara hårt belastade; aktuell skyltning och lokala regler gäller.')
    }
  ],
  sources: [officialBeachSource, beachPlanSource, officialKiteSource],
  related: ['wind', 'beaches']
};

const windTitles = l(
  'Tarifa Wind & Kitesurfing Guide | Levante and Poniente',
  'Tarifa Wind- & Kitesurf-Guide | Levante und Poniente',
  'Guía de viento y kitesurf en Tarifa | Levante y Poniente',
  'Tarifa wind- en kitesurfgids | Levante en Poniente',
  'Tarifa vind- och kitesurfguide | Levante och Poniente'
);

const windDescriptions = l(
  'Understand Levante, Poniente, the main Tarifa kite areas and the safety checks that matter before entering the water.',
  'Levante, Poniente, wichtige Kitezonen und die entscheidenden Sicherheitschecks vor dem Start verständlich erklärt.',
  'Comprende Levante, Poniente, las principales zonas de kite y las comprobaciones de seguridad antes de entrar al agua.',
  'Begrijp Levante, Poniente, de belangrijkste kitegebieden en de veiligheidschecks vóór je het water op gaat.',
  'Förstå Levante, Poniente, de viktigaste kiteområdena och säkerhetskontrollerna innan du går ut på vattnet.'
);

const wind: TarifaGuideContent = {
  id: 'wind',
  token: 'tarifa_wind_kitesurfing_authority',
  seo: buildSeo('2026-08-03-tarifa-wind-kitesurfing-v1.0', 'B', windTitles, windDescriptions),
  navLabel: l('Wind & Kitesurfing', 'Wind & Kitesurfen', 'Viento y kitesurf', 'Wind & kitesurfen', 'Vind & kitesurfing'),
  breadcrumbLabel: l('Wind & Kitesurfing', 'Wind & Kitesurfen', 'Viento y kitesurf', 'Wind & kitesurfen', 'Vind & kitesurfing'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa Experience Guide', 'Guía de experiencias en Tarifa', 'Tarifa Experience Guide', 'Tarifa upplevelseguide'),
    title: l('Read the wind before choosing the water', 'Erst den Wind verstehen, dann den Spot wählen', 'Entender el viento antes de elegir el agua', 'Lees eerst de wind, kies daarna het water', 'Läs vinden innan du väljer vatten'),
    lead: l('Levante and Poniente give Tarifa two very different faces. This guide explains the practical difference, how the principal kite areas fit into the picture and when local instruction matters more than any online guide.', 'Levante und Poniente geben Tarifa zwei sehr unterschiedliche Gesichter. Dieser Guide erklärt den praktischen Unterschied, ordnet die wichtigsten Kitezonen ein und zeigt, wann Hinweise vor Ort wichtiger sind als jeder Online-Guide.', 'Levante y Poniente muestran dos caras muy distintas de Tarifa. Esta guía explica la diferencia práctica, sitúa las principales zonas de kite y aclara cuándo la información local importa más que cualquier guía en línea.', 'Levante en Poniente geven Tarifa twee heel verschillende gezichten. Deze gids legt het praktische verschil uit, plaatst de belangrijkste kitegebieden in context en maakt duidelijk wanneer lokale instructies zwaarder wegen dan welke online gids ook.', 'Levante och Poniente ger Tarifa två helt olika ansikten. Guiden förklarar den praktiska skillnaden, sätter de viktigaste kiteområdena i sitt sammanhang och visar när lokal vägledning väger tyngre än en nätguide.'),
    editorialNote: sharedEditorialNote,
    updated: sharedUpdated
  },
  facts: [
    { label: l('Levante', 'Levante', 'Levante', 'Levante', 'Levante'), value: l('Easterly · often offshore', 'Östlich · häufig ablandig', 'De este · a menudo de tierra', 'Oostelijk · vaak aflandig', 'Ostlig · ofta frånlandsvind') },
    { label: l('Poniente', 'Poniente', 'Poniente', 'Poniente', 'Poniente'), value: l('Westerly · generally more onshore', 'Westlich · meist stärker auflandig', 'De oeste · generalmente más de mar', 'Westelijk · doorgaans meer aanlandig', 'Västlig · generellt mer pålandsvind') },
    { label: l('Daily rule', 'Tägliche Regel', 'Regla diaria', 'Dagelijkse regel', 'Daglig regel'), value: l('Check forecast, flags and zones', 'Vorhersage, Flaggen und Zonen prüfen', 'Revisar previsión, banderas y zonas', 'Controleer verwachting, vlaggen en zones', 'Kontrollera prognos, flaggor och zoner') }
  ],
  sections: [
    {
      id: 'winds',
      eyebrow: l('The two wind systems', 'Die zwei Windsysteme', 'Los dos sistemas de viento', 'De twee windsystemen', 'De två vindsystemen'),
      title: l('Levante and Poniente in practical terms', 'Levante und Poniente praktisch erklärt', 'Levante y Poniente en términos prácticos', 'Levante en Poniente in de praktijk', 'Levante och Poniente i praktiken'),
      intro: l('Direction is only the beginning. Strength, gusts, tide, swell, local effects and your own level all influence whether a session is appropriate.', 'Die Richtung ist nur der Anfang. Stärke, Böen, Gezeiten, Wellengang, lokale Effekte und das eigene Niveau entscheiden mit, ob eine Session angemessen ist.', 'La dirección es solo el principio. Intensidad, rachas, marea, oleaje, efectos locales y nivel personal determinan si una sesión resulta adecuada.', 'Richting is pas het begin. Kracht, windvlagen, getij, deining, lokale effecten en je eigen niveau bepalen samen of een sessie verantwoord is.', 'Riktningen är bara början. Styrka, byar, tidvatten, dyning, lokala effekter och din egen nivå avgör om en session är lämplig.'),
      cards: [
        { kicker: l('East wind', 'Ostwind', 'Viento de este', 'Oostenwind', 'Ostlig vind'), title: l('Levante: powerful and demanding', 'Levante: kraftvoll und anspruchsvoll', 'Levante: potente y exigente', 'Levante: krachtig en veeleisend', 'Levante: kraftfull och krävande'), text: l('Levante is often warmer, drier and offshore or cross-offshore along exposed sections. Flat water can look inviting while the direction increases the consequence of equipment failure or drift.', 'Levante ist häufig wärmer, trockener und an offenen Abschnitten ablandig oder schräg ablandig. Flaches Wasser kann einladend wirken, während die Richtung die Folgen von Materialproblemen oder Abdrift deutlich verschärft.', 'El Levante suele ser más cálido, seco y de tierra o cruzado de tierra en tramos expuestos. El agua plana puede parecer atractiva, aunque la dirección agrava las consecuencias de una avería o una deriva.', 'Levante is vaak warmer, droger en aflandig of schuin aflandig langs open stukken. Vlak water kan aantrekkelijk lijken, terwijl de richting de gevolgen van materiaalpech of afdrijven vergroot.', 'Levante är ofta varmare, torrare och frånlands- eller snett frånlandsvind längs öppna sträckor. Platt vatten kan se lockande ut samtidigt som riktningen ökar konsekvenserna av utrustningsfel eller drift.') },
        { kicker: l('West wind', 'Westwind', 'Viento de oeste', 'Westenwind', 'Västlig vind'), title: l('Poniente: steadier, but never automatic', 'Poniente: gleichmäßiger, aber nie automatisch sicher', 'Poniente: más estable, pero nunca automático', 'Poniente: gelijkmatiger, maar nooit vanzelf veilig', 'Poniente: jämnare, men aldrig automatiskt säker'), text: l('Poniente generally reaches the Atlantic beaches from the sea and may feel more forgiving. Waves, current, changing strength and busy launch areas still require an honest level check.', 'Poniente erreicht die Atlantikstrände meist vom Meer und kann zugänglicher wirken. Wellen, Strömung, wechselnde Stärke und volle Startbereiche verlangen trotzdem eine ehrliche Einschätzung des eigenen Niveaus.', 'El Poniente suele llegar del mar a las playas atlánticas y puede resultar más accesible. Oleaje, corriente, cambios de intensidad y zonas de salida concurridas siguen exigiendo una valoración honesta del nivel.', 'Poniente komt doorgaans vanaf zee aan op de Atlantische stranden en kan toegankelijker voelen. Golven, stroming, wisselende kracht en drukke startzones vragen nog steeds om een eerlijke niveau-inschatting.', 'Poniente når oftast Atlantstränderna från havet och kan kännas mer förlåtande. Vågor, ström, skiftande styrka och trånga startområden kräver ändå en ärlig nivåbedömning.') }
      ]
    },
    {
      id: 'areas',
      eyebrow: l('Main areas', 'Wichtige Bereiche', 'Zonas principales', 'Belangrijkste gebieden', 'Viktiga områden'),
      title: l('Use spot names as orientation, not permission', 'Spotnamen dienen zur Orientierung, nicht als Erlaubnis', 'Los nombres orientan, no conceden permiso', 'Spotnamen geven richting, geen toestemming', 'Spotnamn ger orientering, inte tillstånd'),
      intro: l('Beach zoning, marked channels and local restrictions can change how a familiar name works on a particular day. Current signs always take priority.', 'Strandzonen, markierte Korridore und lokale Einschränkungen können verändern, wie ein bekannter Spot an einem bestimmten Tag funktioniert. Aktuelle Beschilderung hat immer Vorrang.', 'La zonificación, los canales señalizados y las restricciones locales pueden cambiar el uso de un lugar conocido. La señalización vigente siempre tiene prioridad.', 'Strandzonering, gemarkeerde vaargeulen en lokale beperkingen kunnen het gebruik van een bekende plek per dag veranderen. Actuele borden hebben altijd voorrang.', 'Strandzoner, markerade kanaler och lokala begränsningar kan ändra hur en känd plats fungerar en viss dag. Aktuell skyltning gäller alltid först.'),
      cards: [
        { kicker: l('Broad Atlantic beach', 'Weiter Atlantikstrand', 'Amplia playa atlántica', 'Breed Atlantisch strand', 'Bred Atlantstrand'), title: l('Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte'), text: l('A principal kitesurf area with designated school and launch infrastructure in the municipal beach plan. Space does not remove the need to respect bathing areas, wildlife zones and marked access.', 'Eine zentrale Kitesurfzone mit im kommunalen Strandplan ausgewiesener Schul- und Startinfrastruktur. Die Weite entbindet nicht von der Pflicht, Badebereiche, Naturschutzzonen und markierte Zugänge zu respektieren.', 'Una de las principales zonas de kitesurf, con infraestructura de escuelas y salida prevista en el plan municipal. La amplitud no exime de respetar zonas de baño, espacios naturales y accesos señalizados.', 'Een belangrijk kitesurfgebied met school- en startinfrastructuur in het gemeentelijke strandplan. De ruimte betekent niet dat zwemzones, natuurgebieden en gemarkeerde toegangen genegeerd mogen worden.', 'Ett centralt kitesurfområde med skol- och startinfrastruktur i kommunens strandplan. Utrymmet innebär inte att badzoner, naturområden eller markerade tillträden kan ignoreras.') },
        { kicker: l('Wind landmark', 'Windklassiker', 'Referencia del viento', 'Windklassieker', 'Vindklassiker'), title: l('Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros'), text: l('Known for wind sports and a dramatic dune setting. It includes marked areas for watersports and bathers; density and local effects make an on-site assessment essential.', 'Bekannt für Windsport und eindrucksvolle Dünenlandschaft. Es gibt markierte Bereiche für Wassersport und Badende; Auslastung und lokale Effekte machen die Einschätzung vor Ort unverzichtbar.', 'Conocida por los deportes de viento y su paisaje de dunas. Cuenta con zonas señalizadas para deportes y baño; la afluencia y los efectos locales exigen valorar la situación sobre el terreno.', 'Bekend om windsport en het indrukwekkende duinlandschap. Er zijn gemarkeerde zones voor sporters en zwemmers; drukte en lokale effecten maken beoordeling ter plaatse noodzakelijk.', 'Känd för vindsport och dramatiskt dynlandskap. Markerade områden finns för sport och bad; trängsel och lokala effekter gör bedömning på plats nödvändig.') },
        { kicker: l('Protected landscape', 'Geschützte Landschaft', 'Paisaje protegido', 'Beschermd landschap', 'Skyddat landskap'), title: l('Lagoons and river mouths', 'Lagunen und Flussmündungen', 'Lagunas y desembocaduras', 'Lagunes en riviermondingen', 'Laguner och flodmynningar'), text: l('These sensitive environments are not freestyle playgrounds by default. Follow conservation signs and current official rules, and never assume that water access is permitted because others are using it.', 'Diese empfindlichen Lebensräume sind nicht automatisch Freestyle-Reviere. Naturschutzhinweise und aktuelle offizielle Regeln müssen beachtet werden; die Nutzung durch andere ist kein Nachweis einer Erlaubnis.', 'Estos entornos sensibles no son zonas de freestyle por defecto. Hay que seguir la señalización ambiental y las normas vigentes; que otras personas entren al agua no demuestra que esté permitido.', 'Deze kwetsbare gebieden zijn niet automatisch freestylezones. Volg natuurbeschermingsborden en actuele regels; het feit dat anderen het water gebruiken betekent niet dat dit toegestaan is.', 'Dessa känsliga miljöer är inte automatiskt freestyleområden. Följ naturskyltning och aktuella regler; att andra använder vattnet betyder inte att det är tillåtet.') }
      ]
    },
    {
      id: 'checklist',
      eyebrow: l('Before launching', 'Vor dem Start', 'Antes de salir', 'Vóór de start', 'Före start'),
      title: l('A five-minute check that changes the session', 'Fünf Minuten, die die Session verändern', 'Cinco minutos que cambian la sesión', 'Vijf minuten die de sessie veranderen', 'Fem minuter som förändrar sessionen'),
      intro: l('Experienced riders also pause before rigging. Conditions, zoning and rescue coverage are day-specific.', 'Auch erfahrene Fahrer halten vor dem Aufbau kurz inne. Bedingungen, Zonierung und Rettungsabdeckung sind tagesabhängig.', 'Los riders con experiencia también se detienen antes de montar. Las condiciones, la zonificación y la cobertura de rescate dependen del día.', 'Ook ervaren riders staan stil vóór het optuigen. Omstandigheden, zonering en reddingsdekking verschillen per dag.', 'Även erfarna åkare stannar upp före riggning. Förhållanden, zoner och räddningstäckning varierar från dag till dag.'),
      cards: [
        { kicker: l('1', '1', '1', '1', '1'), title: l('Forecast and real water', 'Vorhersage und tatsächliches Wasserbild', 'Previsión y realidad en el agua', 'Verwachting en werkelijk waterbeeld', 'Prognos och verkligt vatten'), text: l('Compare the forecast with what is happening at the beach: direction, gusts, clouds, swell and other competent riders.', 'Vergleiche die Vorhersage mit dem tatsächlichen Bild am Strand: Richtung, Böen, Wolken, Wellengang und andere kompetente Fahrer.', 'Compara la previsión con lo que sucede en la playa: dirección, rachas, nubes, oleaje y otros riders competentes.', 'Vergelijk de verwachting met wat je op het strand ziet: richting, vlagen, bewolking, deining en andere ervaren riders.', 'Jämför prognosen med verkligheten på stranden: riktning, byar, moln, dyning och andra kompetenta åkare.') },
        { kicker: l('2', '2', '2', '2', '2'), title: l('Zone, flag and exit plan', 'Zone, Flagge und Ausstiegsplan', 'Zona, bandera y plan de salida', 'Zone, vlag en uitwijkplan', 'Zon, flagga och exitplan'), text: l('Identify the permitted launch, bathing areas, obstacles and where you would land if the wind or equipment changed.', 'Kläre erlaubten Startbereich, Badezonen, Hindernisse und den Landeplatz für den Fall, dass Wind oder Material sich verändern.', 'Identifica la zona autorizada de salida, las áreas de baño, los obstáculos y dónde aterrizarías si cambian el viento o el material.', 'Bepaal de toegestane start, zwemzones, obstakels en waar je landt als wind of materiaal verandert.', 'Identifiera tillåten start, badzoner, hinder och var du skulle landa om vind eller utrustning förändras.') },
        { kicker: l('3', '3', '3', '3', '3'), title: l('Level, equipment and local advice', 'Niveau, Material und lokaler Rat', 'Nivel, material y consejo local', 'Niveau, materiaal en lokaal advies', 'Nivå, utrustning och lokala råd'), text: l('If the match is uncertain, use a qualified local school or guide. Beginners should not independently interpret strong or offshore conditions.', 'Wenn die Einschätzung unsicher ist, nutze eine qualifizierte lokale Schule oder einen Guide. Anfänger sollten starke oder ablandige Bedingungen nicht eigenständig interpretieren.', 'Si la situación no está clara, recurre a una escuela o guía local cualificado. Los principiantes no deben interpretar por su cuenta condiciones fuertes o de tierra.', 'Bij twijfel kies je een gekwalificeerde lokale school of gids. Beginners moeten harde of aflandige omstandigheden niet zelfstandig beoordelen.', 'Vid osäkerhet bör du anlita en kvalificerad lokal skola eller guide. Nybörjare ska inte själva bedöma starka eller frånlandsvindar.') }
      ]
    }
  ],
  notice: {
    eyebrow: l('Safety first', 'Sicherheit zuerst', 'La seguridad primero', 'Veiligheid eerst', 'Säkerheten först'),
    title: l('Offshore wind changes the consequence of every mistake', 'Ablandiger Wind verändert die Folgen jedes Fehlers', 'El viento de tierra cambia las consecuencias de cualquier error', 'Aflandige wind vergroot de gevolgen van elke fout', 'Frånlandsvind förändrar följderna av varje misstag'),
    text: l('Do not enter the water because a spot is famous or other riders are out. Respect current zones and flags, never ride beyond your proven level, and seek qualified local advice whenever conditions are strong, gusty or offshore.', 'Gehe nicht aufs Wasser, nur weil ein Spot bekannt ist oder andere fahren. Beachte aktuelle Zonen und Flaggen, überschreite niemals dein nachgewiesenes Niveau und hole bei starken, böigen oder ablandigen Bedingungen qualifizierten Rat vor Ort ein.', 'No entres al agua porque el lugar sea famoso o porque haya otras personas navegando. Respeta zonas y banderas, no superes tu nivel demostrado y busca asesoramiento local cualificado con viento fuerte, racheado o de tierra.', 'Ga niet het water op omdat een spot beroemd is of anderen varen. Respecteer actuele zones en vlaggen, blijf binnen je aantoonbare niveau en vraag gekwalificeerd lokaal advies bij harde, vlagerige of aflandige wind.', 'Gå inte ut bara för att platsen är berömd eller andra är på vattnet. Respektera aktuella zoner och flaggor, håll dig inom bevisad nivå och sök kvalificerad lokal rådgivning vid stark, byig eller frånlandsvind.')
  },
  faq: [
    { question: l('Which wind is better for beginners?', 'Welcher Wind ist besser für Anfänger?', '¿Qué viento es mejor para principiantes?', 'Welke wind is beter voor beginners?', 'Vilken vind är bäst för nybörjare?'), answer: l('Poniente often feels more accessible because it generally reaches the Atlantic beaches from the sea, but there is no automatic beginner day. A qualified school must assess the actual location, strength, waves and zoning.', 'Poniente wirkt oft zugänglicher, weil er die Atlantikstrände meist vom Meer erreicht. Einen automatisch sicheren Anfängertag gibt es dennoch nicht. Eine qualifizierte Schule muss Ort, Stärke, Wellen und Zonierung aktuell beurteilen.', 'El Poniente suele resultar más accesible porque llega generalmente del mar, pero no existe un día automáticamente apto para principiantes. Una escuela cualificada debe valorar lugar, intensidad, olas y zonificación.', 'Poniente voelt vaak toegankelijker omdat hij meestal vanaf zee komt, maar er bestaat geen automatisch veilige beginnersdag. Een gekwalificeerde school moet plek, kracht, golven en zonering beoordelen.', 'Poniente känns ofta mer tillgänglig eftersom den vanligtvis kommer från havet, men ingen dag är automatiskt en nybörjardag. En kvalificerad skola måste bedöma plats, styrka, vågor och zoner.') },
    { question: l('Can I kite anywhere along Los Lances?', 'Kann ich überall an Los Lances kiten?', '¿Se puede hacer kite en cualquier punto de Los Lances?', 'Kun je overal langs Los Lances kiten?', 'Kan man kitesurfa överallt längs Los Lances?'), answer: l('No. Los Lances includes different sections, bathing areas, protected environments and marked watersport infrastructure. Use only the currently permitted zones and access points.', 'Nein. Los Lances umfasst unterschiedliche Abschnitte, Badebereiche, geschützte Lebensräume und markierte Wassersport-Infrastruktur. Nutze nur aktuell erlaubte Zonen und Zugänge.', 'No. Los Lances incluye tramos distintos, zonas de baño, espacios protegidos e infraestructura señalizada para deportes. Utiliza únicamente zonas y accesos autorizados.', 'Nee. Los Lances bestaat uit verschillende delen, zwemzones, beschermde natuur en gemarkeerde watersportinfrastructuur. Gebruik alleen de op dat moment toegestane zones en toegangen.', 'Nej. Los Lances omfattar olika delar, badzoner, skyddade miljöer och markerad vattensportinfrastruktur. Använd endast för tillfället tillåtna zoner och tillträden.') },
    { question: l('Do online forecasts replace local advice?', 'Ersetzen Online-Vorhersagen lokalen Rat?', '¿Las previsiones en línea sustituyen el consejo local?', 'Vervangen online verwachtingen lokaal advies?', 'Ersätter nätprognoser lokala råd?'), answer: l('No. Forecasts are planning tools. Beach observations, official flags, marked zones and qualified local operators provide the final context.', 'Nein. Vorhersagen sind Planungswerkzeuge. Beobachtungen am Strand, offizielle Flaggen, markierte Zonen und qualifizierte lokale Anbieter liefern den entscheidenden Kontext.', 'No. Las previsiones sirven para planificar. La observación en la playa, las banderas, las zonas señalizadas y los operadores cualificados aportan el contexto definitivo.', 'Nee. Verwachtingen zijn planningstools. Observatie op het strand, officiële vlaggen, gemarkeerde zones en gekwalificeerde lokale aanbieders geven de doorslaggevende context.', 'Nej. Prognoser är planeringsverktyg. Observationer på stranden, officiella flaggor, markerade zoner och kvalificerade lokala aktörer ger det avgörande sammanhanget.') }
  ],
  sources: [officialKiteSource, beachPlanSource, officialBeachSource],
  related: ['overview', 'beaches']
};

const beachTitles = l(
  'Best Beaches in Tarifa | Los Lances, Valdevaqueros & Bolonia',
  'Tarifas Strände | Los Lances, Valdevaqueros & Bolonia',
  'Playas de Tarifa | Los Lances, Valdevaqueros y Bolonia',
  'Stranden van Tarifa | Los Lances, Valdevaqueros & Bolonia',
  'Tarifas stränder | Los Lances, Valdevaqueros & Bolonia'
);

const beachDescriptions = l(
  'Compare Tarifa beaches for swimming, space, wind sports and nature, with practical guidance on zones, access and changing conditions.',
  'Tarifas Strände für Baden, Weite, Windsport und Natur vergleichen – mit Hinweisen zu Zonen, Zufahrt und wechselnden Bedingungen.',
  'Compara las playas de Tarifa para baño, espacio, deportes de viento y naturaleza, con orientación sobre zonas y accesos.',
  'Vergelijk de stranden van Tarifa voor zwemmen, ruimte, windsport en natuur, met uitleg over zones en bereikbaarheid.',
  'Jämför Tarifas stränder för bad, rymd, vindsport och natur, med vägledning om zoner och tillträde.'
);

const beaches: TarifaGuideContent = {
  id: 'beaches',
  token: 'tarifa_beaches_authority',
  seo: buildSeo('2026-08-03-tarifa-beaches-v1.0', 'B', beachTitles, beachDescriptions),
  navLabel: l('Beaches', 'Strände', 'Playas', 'Stranden', 'Stränder'),
  breadcrumbLabel: l('Beaches', 'Strände', 'Playas', 'Stranden', 'Stränder'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa Experience Guide', 'Guía de experiencias en Tarifa', 'Tarifa Experience Guide', 'Tarifa upplevelseguide'),
    title: l('Choose the beach for the day you actually have', 'Den Strand passend zum tatsächlichen Tag wählen', 'Elegir la playa para el día que realmente hace', 'Kies het strand dat past bij de dag van vandaag', 'Välj strand efter dagen du faktiskt har'),
    lead: l('Tarifa’s coastline stretches from a small Mediterranean cove to broad Atlantic beaches and the protected landscape around Bolonia. The best choice depends on wind, activity, season and the atmosphere you want.', 'Tarifas Küste reicht von einer kleinen Mittelmeerbucht über weite Atlantikstrände bis zur geschützten Landschaft rund um Bolonia. Die beste Wahl hängt von Wind, Aktivität, Saison und gewünschter Atmosphäre ab.', 'La costa de Tarifa va desde una pequeña cala mediterránea hasta amplias playas atlánticas y el paisaje protegido de Bolonia. La mejor elección depende del viento, la actividad, la temporada y el ambiente buscado.', 'De kust van Tarifa loopt van een kleine mediterrane baai tot brede Atlantische stranden en het beschermde landschap rond Bolonia. De beste keuze hangt af van wind, activiteit, seizoen en gewenste sfeer.', 'Tarifas kust sträcker sig från en liten Medelhavsvik till breda Atlantstränder och det skyddade landskapet kring Bolonia. Bästa valet beror på vind, aktivitet, säsong och önskad stämning.'),
    editorialNote: sharedEditorialNote,
    updated: sharedUpdated
  },
  facts: [
    { label: l('Coastline', 'Küstenlinie', 'Litoral', 'Kustlijn', 'Kustlinje'), value: l('Nearly 40 km in the municipality', 'Fast 40 km im Gemeindegebiet', 'Casi 40 km en el municipio', 'Bijna 40 km binnen de gemeente', 'Nästan 40 km inom kommunen') },
    { label: l('Two waters', 'Zwei Meere', 'Dos mares', 'Twee zeeën', 'Två hav'), value: l('Mediterranean and Atlantic', 'Mittelmeer und Atlantik', 'Mediterráneo y Atlántico', 'Middellandse Zee en Atlantische Oceaan', 'Medelhavet och Atlanten') },
    { label: l('Daily check', 'Täglicher Check', 'Comprobación diaria', 'Dagelijkse check', 'Daglig kontroll'), value: l('Wind, flags, zoning and access', 'Wind, Flaggen, Zonen und Zufahrt', 'Viento, banderas, zonas y accesos', 'Wind, vlaggen, zones en toegang', 'Vind, flaggor, zoner och tillträde') }
  ],
  sections: [
    {
      id: 'compare',
      eyebrow: l('Beach comparison', 'Strandvergleich', 'Comparativa de playas', 'Strandvergelijking', 'Strandjämförelse'),
      title: l('Four coastlines, four different days', 'Vier Küstenabschnitte, vier unterschiedliche Tage', 'Cuatro costas para cuatro días distintos', 'Vier kustgebieden, vier verschillende dagen', 'Fyra kustavsnitt för fyra olika dagar'),
      intro: l('Distance alone should not decide. Services, exposure, protected landscape and current zoning shape the experience.', 'Nicht nur die Entfernung entscheidet. Infrastruktur, Exposition, Naturschutz und aktuelle Zonierung prägen das Erlebnis.', 'La distancia no debe ser el único criterio. Servicios, exposición, paisaje protegido y zonificación vigente marcan la experiencia.', 'Afstand is niet het enige criterium. Voorzieningen, ligging, beschermd landschap en actuele zonering bepalen de ervaring.', 'Avståndet ska inte avgöra ensamt. Service, exponering, skyddat landskap och aktuella zoner formar upplevelsen.'),
      cards: [
        { kicker: l('Closest to town', 'Stadtnah', 'Junto a la ciudad', 'Dicht bij de stad', 'Nära staden'), title: l('Los Lances Sur', 'Los Lances Sur', 'Los Lances Sur', 'Los Lances Sur', 'Los Lances Sur'), text: l('The urban-facing section offers straightforward access and more services. It can suit a classic beach visit, subject to current wind, bathing flags and marked activity areas.', 'Der stadtnahe Abschnitt bietet einfachen Zugang und mehr Infrastruktur. Er eignet sich für einen klassischen Strandtag – abhängig von aktuellem Wind, Badeflaggen und markierten Aktivitätsbereichen.', 'El tramo urbano ofrece acceso sencillo y más servicios. Puede encajar para un día de playa clásico, siempre según el viento, las banderas y las zonas de actividad señalizadas.', 'Het stedelijke deel biedt eenvoudige toegang en meer voorzieningen. Het kan passen bij een klassieke stranddag, afhankelijk van wind, zwemvlaggen en gemarkeerde activiteitenzones.', 'Den stadsnära delen har enkel tillgång och mer service. Den kan passa för en klassisk stranddag beroende på vind, badflaggor och markerade aktivitetsområden.') },
        { kicker: l('Space and wind', 'Weite und Wind', 'Espacio y viento', 'Ruimte en wind', 'Rymd och vind'), title: l('Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte'), text: l('A broad Atlantic setting associated with wind sports and protected natural areas. Choose the correct bathing or sport zone rather than treating the full beach as one shared space.', 'Ein weiter Atlantikstrand, geprägt von Windsport und geschützten Naturräumen. Wähle den passenden Bade- oder Sportbereich, statt den gesamten Strand als gemeinsame Fläche zu betrachten.', 'Un amplio paisaje atlántico ligado a los deportes de viento y a espacios naturales protegidos. Conviene elegir la zona de baño o deporte adecuada y no considerar toda la playa como un único espacio compartido.', 'Een breed Atlantisch strand met windsport en beschermde natuur. Kies de juiste zwem- of sportzone en behandel niet het hele strand als één gedeelde ruimte.', 'En bred Atlantmiljö förknippad med vindsport och skyddad natur. Välj rätt bad- eller sportzon i stället för att se hela stranden som en gemensam yta.') },
        { kicker: l('Wind-sport landscape', 'Windsport-Landschaft', 'Paisaje de deportes de viento', 'Windsportlandschap', 'Vindsportlandskap'), title: l('Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros'), text: l('A celebrated wind-sport beach with substantial dune scenery and marked areas for watersports and bathers. On busy days, the atmosphere is energetic rather than secluded.', 'Ein bekannter Windsportstrand mit eindrucksvoller Dünenlandschaft und markierten Bereichen für Wassersport und Badende. An vollen Tagen ist die Atmosphäre lebendig, nicht abgeschieden.', 'Una playa emblemática para los deportes de viento, con grandes dunas y zonas señalizadas para deporte y baño. En días concurridos, el ambiente es animado y no solitario.', 'Een bekende windsportplek met imposante duinen en gemarkeerde zones voor sporters en zwemmers. Op drukke dagen is de sfeer levendig, niet afgelegen.', 'En välkänd vindsportstrand med stora dyner och markerade områden för sport och bad. Under välbesökta dagar är stämningen livlig snarare än avskild.') },
        { kicker: l('Landscape and history', 'Landschaft und Geschichte', 'Paisaje e historia', 'Landschap en geschiedenis', 'Landskap och historia'), title: l('Bolonia', 'Bolonia', 'Bolonia', 'Bolonia', 'Bolonia'), text: l('A more remote bay known for its dune, natural setting and proximity to Baelo Claudia. Treat it as a full-day landscape visit and respect protected areas and access controls.', 'Eine abgelegenere Bucht, bekannt für Düne, Naturkulisse und die Nähe zu Baelo Claudia. Plane sie als ganzen Landschaftstag und respektiere Schutzbereiche sowie Zufahrtsregelungen.', 'Una bahía más apartada, conocida por su duna, su entorno natural y la cercanía de Baelo Claudia. Conviene plantearla como excursión de día completo y respetar espacios protegidos y controles de acceso.', 'Een meer afgelegen baai, bekend om de duin, natuur en nabijheid van Baelo Claudia. Zie het als een volledige dag in het landschap en respecteer beschermde zones en toegangsregels.', 'En mer avskild vik känd för sin dyn, naturmiljö och närheten till Baelo Claudia. Planera den som en heldag och respektera skyddade områden och tillträdesregler.') }
      ]
    },
    {
      id: 'choose',
      eyebrow: l('Choose by intention', 'Nach Wunsch auswählen', 'Elegir según el plan', 'Kies naar bedoeling', 'Välj efter syfte'),
      title: l('Start with the experience, then check the conditions', 'Erst das gewünschte Erlebnis, dann die Bedingungen prüfen', 'Primero la experiencia; después, las condiciones', 'Begin bij de ervaring en controleer daarna de omstandigheden', 'Börja med upplevelsen och kontrollera sedan förhållandena'),
      intro: l('A beach can serve different purposes on different days. Keep a second option rather than forcing the original plan.', 'Ein Strand kann an verschiedenen Tagen ganz unterschiedlich funktionieren. Halte eine zweite Option bereit, statt den ursprünglichen Plan zu erzwingen.', 'Una playa puede funcionar de forma muy distinta según el día. Conviene tener una segunda opción en lugar de forzar el plan inicial.', 'Een strand kan per dag een andere functie hebben. Houd een tweede optie achter de hand in plaats van het oorspronkelijke plan door te drukken.', 'En strand kan fungera helt olika från dag till dag. Ha ett alternativ i stället för att tvinga igenom ursprungsplanen.'),
      cards: [
        { kicker: l('Swimming', 'Baden', 'Baño', 'Zwemmen', 'Bad'), title: l('Look for designated bathing water', 'Ausgewiesene Badebereiche wählen', 'Buscar zonas de baño señalizadas', 'Zoek aangewezen zwemwater', 'Välj markerade badområden'), text: l('Playa Chica and marked bathing sections can feel more suitable than an active kite zone. Flags and lifeguard instructions remain decisive.', 'Playa Chica und markierte Badeabschnitte können geeigneter wirken als eine aktive Kitezone. Flaggen und Anweisungen der Rettungskräfte bleiben entscheidend.', 'Playa Chica y los tramos señalizados para baño pueden resultar más adecuados que una zona activa de kite. Las banderas y las indicaciones de socorrismo son determinantes.', 'Playa Chica en gemarkeerde zwemgedeelten kunnen prettiger zijn dan een actieve kitezone. Vlaggen en aanwijzingen van reddingsdiensten zijn doorslaggevend.', 'Playa Chica och markerade badavsnitt kan passa bättre än en aktiv kitezon. Flaggor och badvaktens anvisningar är avgörande.') },
        { kicker: l('Wind sports', 'Windsport', 'Deportes de viento', 'Windsport', 'Vindsport'), title: l('Use the authorised sport infrastructure', 'Ausgewiesene Sportinfrastruktur nutzen', 'Utilizar la infraestructura deportiva autorizada', 'Gebruik toegestane sportinfrastructuur', 'Använd godkänd sportinfrastruktur'), text: l('Los Lances Norte and Valdevaqueros are key reference areas, but the permitted launch, school and bathing zones must be checked on site.', 'Los Lances Norte und Valdevaqueros sind zentrale Referenzbereiche; erlaubte Start-, Schul- und Badezonen müssen dennoch vor Ort geprüft werden.', 'Los Lances Norte y Valdevaqueros son zonas de referencia, pero hay que comprobar sobre el terreno las áreas autorizadas de salida, escuela y baño.', 'Los Lances Norte en Valdevaqueros zijn belangrijke gebieden, maar toegestane start-, school- en zwemzones moeten ter plaatse worden gecontroleerd.', 'Los Lances Norte och Valdevaqueros är viktiga referensområden, men tillåtna start-, skol- och badzoner måste kontrolleras på plats.') },
        { kicker: l('Quiet landscape', 'Ruhige Landschaft', 'Paisaje tranquilo', 'Rustig landschap', 'Lugnt landskap'), title: l('Go early and protect the place', 'Früh starten und den Ort schützen', 'Ir temprano y cuidar el lugar', 'Ga vroeg en bescherm de plek', 'Åk tidigt och skydda platsen'), text: l('Bolonia and natural sections reward an early start. Stay on permitted paths, carry waste out and do not climb or cross closed dune areas.', 'Bolonia und naturnahe Abschnitte belohnen einen frühen Start. Bleibe auf erlaubten Wegen, nimm Abfall mit und betrete keine gesperrten Dünenbereiche.', 'Bolonia y los tramos naturales se disfrutan mejor temprano. Hay que usar caminos permitidos, retirar los residuos y no atravesar zonas dunares cerradas.', 'Bolonia en natuurlijke delen zijn het mooist vroeg. Blijf op toegestane paden, neem afval mee en betreed geen afgesloten duingebieden.', 'Bolonia och naturliga avsnitt uppskattas bäst tidigt. Håll dig på tillåtna stigar, ta med avfall och gå inte in i stängda dynområden.') }
      ]
    },
    {
      id: 'access',
      eyebrow: l('Practical access', 'Praktischer Zugang', 'Acceso práctico', 'Praktische bereikbaarheid', 'Praktiskt tillträde'),
      title: l('Parking is part of the beach decision', 'Parken gehört zur Strandentscheidung', 'El aparcamiento forma parte de la elección', 'Parkeren hoort bij de strandkeuze', 'Parkering är en del av strandvalet'),
      intro: l('Peak-season traffic, signed restrictions and protected landscapes can change the easy-looking option. Do not rely on one old map pin.', 'Verkehr in der Hochsaison, ausgeschilderte Einschränkungen und Schutzgebiete können eine scheinbar einfache Option verändern. Verlasse dich nicht auf einen alten Karten-Pin.', 'El tráfico de temporada alta, las restricciones señalizadas y los espacios protegidos pueden cambiar una opción que parecía sencilla. No conviene depender de un único punto antiguo en el mapa.', 'Drukte in het hoogseizoen, aangegeven beperkingen en beschermde natuur kunnen een ogenschijnlijk makkelijke optie veranderen. Vertrouw niet op één oude kaartpin.', 'Högsäsongstrafik, skyltade begränsningar och skyddade landskap kan förändra ett till synes enkelt val. Förlita dig inte på en gammal kartmarkering.'),
      cards: [
        { kicker: l('Before leaving', 'Vor der Abfahrt', 'Antes de salir', 'Vóór vertrek', 'Före avfärd'), title: l('Check the destination and a fallback', 'Ziel und Alternative prüfen', 'Comprobar destino y alternativa', 'Controleer bestemming en alternatief', 'Kontrollera mål och alternativ'), text: l('Confirm the intended beach section, current conditions and a second option before driving.', 'Prüfe gewünschten Strandabschnitt, aktuelle Bedingungen und eine zweite Option vor der Abfahrt.', 'Confirma el tramo de playa, las condiciones actuales y una segunda opción antes de conducir.', 'Controleer het beoogde stranddeel, de actuele omstandigheden en een tweede optie vóór vertrek.', 'Bekräfta strandavsnitt, aktuella förhållanden och ett alternativ före körning.') },
        { kicker: l('On arrival', 'Bei Ankunft', 'Al llegar', 'Bij aankomst', 'Vid ankomst'), title: l('Signs override online memory', 'Beschilderung schlägt Online-Erinnerung', 'La señalización prevalece sobre internet', 'Borden gaan vóór online informatie', 'Skyltar går före nätminnet'), text: l('Follow current access, parking, environmental and safety signs even when a previous visit or app suggests otherwise.', 'Folge aktueller Zufahrts-, Park-, Umwelt- und Sicherheitsbeschilderung, auch wenn ein früherer Besuch oder eine App etwas anderes nahelegt.', 'Sigue la señalización vigente de acceso, aparcamiento, medio ambiente y seguridad, aunque una visita anterior o una aplicación indiquen otra cosa.', 'Volg actuele toegangs-, parkeer-, milieu- en veiligheidsborden, ook als een eerder bezoek of app iets anders suggereert.', 'Följ aktuell skyltning för tillträde, parkering, miljö och säkerhet även om ett tidigare besök eller en app säger annat.') }
      ]
    }
  ],
  notice: {
    eyebrow: l('Shared coast', 'Gemeinsame Küste', 'Costa compartida', 'Gedeelde kust', 'Gemensam kust'),
    title: l('Bathing, sport and nature need separate space', 'Baden, Sport und Natur brauchen getrennte Räume', 'Baño, deporte y naturaleza necesitan espacios distintos', 'Zwemmen, sport en natuur hebben eigen ruimte nodig', 'Bad, sport och natur behöver egna ytor'),
    text: l('Use only the currently designated area for your activity. Keep clear of swimmers and wildlife zones, observe flags and barriers, and change beach when the day does not fit the original plan.', 'Nutze nur den aktuell für deine Aktivität ausgewiesenen Bereich. Halte Abstand zu Badenden und Naturschutzzonen, beachte Flaggen und Absperrungen und wechsle den Strand, wenn der Tag nicht zum ursprünglichen Plan passt.', 'Utiliza únicamente la zona designada para tu actividad. Mantén distancia de bañistas y espacios naturales, respeta banderas y barreras y cambia de playa si el día no encaja con el plan inicial.', 'Gebruik alleen het gebied dat op dat moment voor jouw activiteit is aangewezen. Houd afstand van zwemmers en natuurzones, respecteer vlaggen en afzettingen en kies een ander strand als de dag niet past.', 'Använd endast området som för tillfället är avsett för din aktivitet. Håll avstånd till badande och naturzoner, respektera flaggor och avspärrningar och byt strand om dagen inte passar planen.')
  },
  faq: [
    { question: l('Which Tarifa beach is best for swimming?', 'Welcher Strand in Tarifa eignet sich am besten zum Baden?', '¿Qué playa de Tarifa es mejor para bañarse?', 'Welk strand in Tarifa is het beste om te zwemmen?', 'Vilken strand i Tarifa är bäst för bad?'), answer: l('There is no permanent winner. Playa Chica and designated bathing sections may be more comfortable on some days, while flags, wind and sea state decide the safe choice in real time.', 'Es gibt keinen dauerhaft besten Strand. Playa Chica und ausgewiesene Badeabschnitte können an manchen Tagen angenehmer sein; Flaggen, Wind und Seegang entscheiden jedoch aktuell über die sichere Wahl.', 'No hay una opción ganadora permanente. Playa Chica y las zonas señalizadas de baño pueden ser más cómodas algunos días, pero las banderas, el viento y el estado del mar determinan la elección segura.', 'Er is geen vaste winnaar. Playa Chica en aangewezen zwemzones kunnen op sommige dagen prettiger zijn, maar vlaggen, wind en zeegang bepalen de veilige keuze.', 'Det finns ingen ständig vinnare. Playa Chica och markerade badområden kan vara bekvämare vissa dagar, men flaggor, vind och sjö avgör det säkra valet.') },
    { question: l('Is Bolonia close enough for a half day?', 'Eignet sich Bolonia für einen halben Tag?', '¿Bolonia sirve para una excursión de medio día?', 'Is Bolonia geschikt voor een halve dag?', 'Passar Bolonia för en halvdag?'), answer: l('It can, but the dune, beach and nearby Baelo Claudia make a full, unhurried day more rewarding. Allow for seasonal traffic and access conditions.', 'Das ist möglich, doch Düne, Strand und das nahe Baelo Claudia lohnen einen ganzen, entspannten Tag. Saisonverkehr und Zufahrtsbedingungen sollten eingeplant werden.', 'Es posible, pero la duna, la playa y Baelo Claudia cercana merecen una jornada completa y sin prisas. Hay que contar con tráfico estacional y condiciones de acceso.', 'Dat kan, maar de duin, het strand en het nabijgelegen Baelo Claudia verdienen een volledige rustige dag. Houd rekening met seizoensdrukte en bereikbaarheid.', 'Det går, men dynen, stranden och närliggande Baelo Claudia blir bättre som en lugn heldag. Räkna med säsongstrafik och tillträdesförhållanden.') },
    { question: l('Are kitesurfing and swimming zones fixed all year?', 'Sind Kite- und Badezonen ganzjährig unverändert?', '¿Las zonas de kite y baño son iguales todo el año?', 'Zijn kite- en zwemzones het hele jaar hetzelfde?', 'Är kite- och badzoner samma hela året?'), answer: l('Do not assume so. Municipal plans, seasonal operation, signs and temporary safety measures determine actual use. Check the marked areas on arrival.', 'Gehe nicht davon aus. Kommunale Pläne, saisonaler Betrieb, Beschilderung und temporäre Sicherheitsmaßnahmen bestimmen die tatsächliche Nutzung. Prüfe die markierten Bereiche bei Ankunft.', 'No debe darse por hecho. Los planes municipales, el funcionamiento estacional, la señalización y las medidas temporales determinan el uso real. Comprueba las zonas al llegar.', 'Ga daar niet van uit. Gemeentelijke plannen, seizoensgebruik, borden en tijdelijke veiligheidsmaatregelen bepalen het werkelijke gebruik. Controleer de gemarkeerde zones bij aankomst.', 'Utgå inte från det. Kommunala planer, säsongsdrift, skyltning och tillfälliga säkerhetsåtgärder avgör användningen. Kontrollera markerade områden vid ankomst.') }
  ],
  sources: [officialBeachSource, beachPlanSource],
  related: ['overview', 'wind']
};

export const tarifaGuideContent: Record<TarifaGuideId, TarifaGuideContent> = {
  overview,
  wind,
  beaches
};
