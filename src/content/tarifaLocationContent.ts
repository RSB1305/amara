import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type TarifaLocationHubLinkToken =
  | 'getting_to_tarifa'
  | 'tarifa_geography'
  | 'tarifa_where_to_stay'
  | 'tarifa_weather'
  | 'tarifa_experience_hub'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority'
  | 'tarifa_kitesurfing_hub'
  | 'tarifa';

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
    subtitle: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  /** Verified figures from knowledge/facts/locations/tarifa/geography.ts with their claim boundary. */
  keyFigures: {
    figures: Array<{ value: string; label: string }>;
    note: string;
  };
  /** Alt texts and captions of the hub photography. */
  media: {
    heroAlt: string;
    walkAlt: string;
    walkCaption: string;
    barAlt: string;
    castleAlt: string;
    castleCaption: string;
    waveAlt: string;
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
  version: '2026-09-05-tarifa-location-hub-v5.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article: {
    datePublished: '2026-08-03',
    dateModified: '2026-09-05',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Staying in Tarifa: Balcony over the Atlantic | AMARA',
      description: 'Where you stay in Tarifa shapes daily movement: the Old Town, La Marina, Los Lances and the western beaches each change walking, parking and car use.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'In Tarifa übernachten: Balkon zum Atlantik | AMARA',
      description: 'Wo ihr in Tarifa wohnt, prägt eure täglichen Wege: Altstadt, La Marina, Los Lances und die westlichen Strände verändern Fußwege, Parken und Autonutzung.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Alojarse en Tarifa: balcón al Atlántico | AMARA',
      description: 'Dónde os alojáis en Tarifa marca los trayectos diarios: casco antiguo, La Marina, Los Lances y las playas del oeste cambian los paseos, el aparcamiento y el uso del coche.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Overnachten in Tarifa: balkon aan de oceaan | AMARA',
      description: 'Waar jullie in Tarifa verblijven bepaalt de dagelijkse routes: oude stad, La Marina, Los Lances en de westelijke stranden vragen elk om andere keuzes rond lopen, parkeren en de auto.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Bo i Tarifa: balkong mot Atlanten | AMARA',
      description: 'Var ni bor i Tarifa präglar vardagens förflyttningar: gamla stan, La Marina, Los Lances och stränderna i väster påverkar promenader, parkering och bilanvändning.',
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
        eyebrow: 'Tarifa · Location & stay',
        title: 'Tarifa, Europe’s southernmost mainland city',
        subtitle: 'Atlantic to the west, the Strait to the east, the Old Town in between. And our apartment in La Marina.',
        standfirst: 'Tarifa’s Old Town, beach edge and newer neighbourhoods are close enough that much of the town works on foot, while Valdevaqueros and Bolonia require a separate journey west. The Old Town puts historic streets and restaurants around you; La Marina places you on the newer west/north-west edge near Los Lances. AMARA Family & Surf is in La Marina. Its underground space and the supermarket opposite are property facts, not promises about the whole area.',
        note: 'An AMARA guide written from experience – not a live service for wind and weather.',
        updated: 'Reviewed August 2026'
      },
      keyFigures: {
        figures: [
          { value: '33.5 km', label: 'Atlantic coastline of the municipality' },
          { value: '10.5 km', label: 'Mediterranean coastline of the municipality' },
          { value: '14.4 km', label: 'Europe – Africa at the narrowest point' },
          { value: '226 ha', label: 'Playa de los Lances protected area' }
        ],
        note: 'Coastline lengths from the municipal emergency plan, distance from MITECO. The distance applies to the Strait, not to the town or the apartment, and promises no view of Africa.'
      },
      media: {
        heroAlt: 'View from AMARA over Tarifa toward the Atlantic coast',
        walkAlt: 'Kiter walking into the water with a board at Los Lances beach',
        walkCaption: 'Los Lances, looking west. The western beaches and Bolonia need a journey of their own.',
        barAlt: 'Kite bar in the sand at Los Lances',
        castleAlt: 'Castillo de Santa Catalina above Tarifa',
        castleCaption: 'Santa Catalina above the Isla. In winter the town belongs to the people who live here again.',
        waveAlt: 'Kiter turning on a wave off Tarifa'
      },
      geography: {
        eyebrow: 'Where you are',
        title: 'Between the Atlantic and the Strait',
        paragraphs: [
          'At the causeway to Isla de Tarifa, Playa Chica lies on the Strait side while the long Los Lances–Valdevaqueros coast extends west along the Atlantic.',
          'The town itself is compact. Old Town, newer quarter and beach edge sit close enough for many everyday journeys on foot. The western beaches and Bolonia lie outside that town pattern and require a separate journey.'
        ],
        markers: [
          { label: 'Two coasts', value: 'Playa Chica east; Los Lances extends west' },
          { label: 'Town edge', value: 'La Marina lies west/north-west of the centre' },
          { label: 'Further west', value: 'Valdevaqueros, Punta Paloma and Bolonia need a separate journey' }
        ],
        link: { label: 'Geography & orientation in detail', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Arrival & car',
        title: 'You can walk around town; a car helps for the western beaches',
        paragraphs: [
          'Tarifa is reached by road from the region’s airports and rail hubs, as well as by current bus and ferry connections. Timetables and practical routes change, so the arrival guide carries that planning job.',
          'Many journeys within town work on foot. Vehicle access and visitor-parking arrangements can change, however, so current signs and rules matter. The underground space recorded for AMARA Family & Surf belongs to that accommodation only.',
          'A car becomes more useful for the western beaches and Bolonia. Access, parking and watersport zones vary by destination and conditions; do not rely on an informal lift or one stored rule for the whole coast.'
        ],
        link: { label: 'Plan your journey to Tarifa', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Where to stay',
        title: 'Old Town or La Marina – and what that means every day',
        paragraphs: [
          'If you really want to stay in the Old Town, stay in the Old Town. That is not a half measure – it is a decision with daily consequences.',
          'In the Old Town, historic streets begin at the door and luggage may cross cobbled lanes. Current vehicle access and parking depend on the applicable rules, so an exact arrival route must be checked for the accommodation you choose.',
          'La Marina sits on the newer west/north-west town edge near Los Lances. AMARA Family & Surf has its own underground space and a supermarket opposite; those are property facts, not general La Marina characteristics. The Old Town remains a separate walk rather than the immediate doorstep.'
        ],
        archetypes: [
          { title: 'Old Town', consequence: 'Historic streets at the door; vehicle access and parking require a current check for the exact stay.' },
          { title: 'La Marina', consequence: 'Newer west/north-west town edge near Los Lances; garage and opposite supermarket apply only to AMARA.' },
          { title: 'Los Lances corridor', consequence: 'A long Atlantic beach and protected landscape, not one uniform neighbourhood; check the exact accommodation setting.' },
          { title: 'Countryside & hills', consequence: 'Distances and access vary by address, so the exact property determines how much of daily life depends on a car.' }
        ],
        link: { label: 'Compare Tarifa’s areas in depth', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & seasons',
        title: 'Current conditions decide which beach fits today',
        paragraphs: [
          'Wind is part of Tarifa’s identity, but a beach-day decision also depends on the current marine forecast, flags, seasonal zoning and the activity you have in mind.',
          'Northern Los Lances and Valdevaqueros are established watersport areas, but no beach is universally suitable from the words Levante or Poniente alone. Check live conditions and follow local safety or instructor guidance.',
          'At accommodation level, orientation and building context affect exposure. We do not promise shelter for La Marina or AMARA Family & Surf without site-specific evidence for the actual conditions.'
        ],
        link: { label: 'Explore Tarifa weather & seasons', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Daily life',
        title: 'What repeats after three days',
        paragraphs: [
          'AMARA Family & Surf has a supermarket directly opposite; that is a property-specific convenience, not a general La Marina feature. Shop operation and Sunday or seasonal hours need a current check.',
          'Restaurants and bars cluster in the Old Town and along Calle Batalla del Salado, both walkable from La Marina. Which addresses are actually worth it is in the Experience guide.'
        ]
      },
      winter: {
        eyebrow: 'From September',
        title: 'From September Tarifa becomes a different place',
        paragraphs: [
          'From our experience, parking pressure is especially high in July and August, although that is a seasonal observation rather than a promise that spaces are impossible to find. AMARA currently records an underground space for this accommodation; confirm access and dimensions for your booking.',
          'From September it gets quieter. You feel the calm, you start talking to locals, you get to know people. For us this is the loveliest time here.',
          'For longer stays, heating, dryness and a place to work matter alongside beach access. Check those features for the individual accommodation rather than inferring them from Old Town or La Marina.'
        ]
      },
      amara: {
        eyebrow: 'Our apartment',
        title: 'Why we host our guests in La Marina',
        paragraphs: [
          'The balcony faces west over the Atlantic. That orientation belongs to this apartment; it does not establish a general La Marina view or a promise that the African coast will be visible.',
          'The bedroom sits above it, with the same view. You wake up with the sea. What guests say most often on arrival: that the apartment is even more beautiful than in the photos.',
          'Our connection to Tarifa is personal: Robert lived here for months at a time, kitesurfing and building friendships. When this apartment came up for sale, we bought it and modernised it. Because of the evenings. And because it simply works day to day.',
          'One thing worth saying plainly: if you want historic Tarifa right outside your door, the Old Town will suit you better than we do. The pool belongs to the complex rather than the apartment and operates seasonally; check the current opening period before booking.'
        ],
        facts: [
          '75 m² over two levels – bedroom with sea view',
          'Large west-facing balcony over the Atlantic',
          'Private underground parking space for this accommodation',
          'Supermarket directly opposite this accommodation',
          'Old Town is a separate walk, not the immediate doorstep'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'View AMARA Family & Surf', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Your days here',
        title: 'What would you like to do in Tarifa?',
        paragraphs: ['Use our experience guide to choose between beaches, wind and watersports, food, nature, the Old Town and a full day in Bolonia.'],
        links: [
          { label: 'Things to do in Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Explore Tarifa beaches', token: 'tarifa_beaches_authority' },
          { label: 'Kitesurfing in Tarifa', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'For us, Tarifa is the most beautiful place on this planet.',
        lead: 'If that makes sense to you, the best place to stay is where the sun drops into the sea in front of you.',
        ctaLabel: 'View AMARA Family & Surf'
      }
    },
    de: {
      hero: {
        eyebrow: 'Tarifa · Lage & Aufenthalt',
        title: 'Tarifa, Europas südlichste Festlandstadt',
        subtitle: 'Atlantik im Westen, Meerenge im Osten, die Altstadt dazwischen. Und unser Apartment in La Marina.',
        standfirst: 'Tarifas Altstadt, Strandkante und neuere Viertel liegen so nah beieinander, dass viele Wege im Ort zu Fuß funktionieren; Valdevaqueros und Bolonia erfordern dagegen einen eigenen Weg nach Westen. In der Altstadt liegen historische Gassen und Restaurants um euch herum. La Marina befindet sich am neueren westlichen bis nordwestlichen Ortsrand nahe Los Lances. Dort liegt AMARA Family & Surf. Der Tiefgaragenplatz und der Supermarkt gegenüber gehören zur konkreten Unterkunft, nicht allgemein zu La Marina.',
        note: 'Ein AMARA-Guide aus eigener Erfahrung – keine Live-Auskunft zu Wind und Wetter.',
        updated: 'Geprüft im August 2026'
      },
      keyFigures: {
        figures: [
          { value: '33,5 km', label: 'Atlantikküste der Gemeinde' },
          { value: '10,5 km', label: 'Mittelmeerküste der Gemeinde' },
          { value: '14,4 km', label: 'Europa – Afrika an der engsten Stelle' },
          { value: '226 ha', label: 'Naturschutzgebiet Playa de los Lances' }
        ],
        note: 'Küstenlängen nach dem gemeindlichen Notfallplan, Abstand nach MITECO. Der Abstand gilt für die Meerenge, nicht für den Ort oder die Wohnung, und verspricht keine Sicht auf Afrika.'
      },
      media: {
        heroAlt: 'Blick von AMARA über Tarifa zur Atlantikküste',
        walkAlt: 'Kiter geht mit Board am Strand von Los Lances ins Wasser',
        walkCaption: 'Los Lances, Blick nach Westen. Die westlichen Strände und Bolonia brauchen einen eigenen Weg.',
        barAlt: 'Kitebar im Sand von Los Lances',
        castleAlt: 'Castillo de Santa Catalina über Tarifa',
        castleCaption: 'Santa Catalina über der Isla. Im Winter gehört der Ort wieder den Leuten, die hier leben.',
        waveAlt: 'Kiter dreht in der Welle vor Tarifa'
      },
      geography: {
        eyebrow: 'Wo ihr seid',
        title: 'Zwischen Atlantik und Meerenge',
        paragraphs: [
          'Am Damm zur Isla de Tarifa liegt Playa Chica auf der Seite der Meerenge, während sich die lange Küste von Los Lances bis Valdevaqueros westwärts am Atlantik erstreckt.',
          'Der Ort selbst ist kompakt. Altstadt, neuerer Teil und Strandkante liegen für viele Alltagswege nah genug beieinander. Die westlichen Strände und Bolonia liegen außerhalb dieses Ortsgefüges und brauchen einen eigenen Weg.'
        ],
        markers: [
          { label: 'Zwei Küsten', value: 'Playa Chica östlich; Los Lances erstreckt sich nach Westen' },
          { label: 'Ortsrand', value: 'La Marina liegt westlich bis nordwestlich des Zentrums' },
          { label: 'Weiter westlich', value: 'Valdevaqueros, Punta Paloma und Bolonia brauchen einen eigenen Weg' }
        ],
        link: { label: 'Geografie & Orientierung im Detail', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Anreise & Auto',
        title: 'Im Ort geht vieles zu Fuß; für die westlichen Strände hilft ein Auto',
        paragraphs: [
          'Tarifa erreicht ihr auf der Straße von den Flughäfen und Bahnhöfen der Region sowie über aktuelle Bus- und Fährverbindungen. Fahrpläne und praktische Routen ändern sich; die konkrete Planung gehört deshalb in den Anreise-Guide.',
          'Viele Wege im Ort funktionieren zu Fuß. Zufahrt und Besucherparken können sich jedoch ändern, deshalb zählen die aktuellen Schilder und Regeln. Der für AMARA Family & Surf dokumentierte Tiefgaragenplatz gehört ausschließlich zu dieser Unterkunft.',
          'Für die westlichen Strände und Bolonia wird ein Auto hilfreicher. Zufahrt, Parken und Wassersportzonen unterscheiden sich je nach Ziel und Bedingungen; verlasst euch weder auf eine informelle Mitfahrt noch auf eine einzige feste Regel für die gesamte Küste.'
        ],
        link: { label: 'Anreise nach Tarifa planen', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Wo wohnen',
        title: 'Altstadt oder La Marina – und was das jeden Tag bedeutet',
        paragraphs: [
          'Wer unbedingt in der Altstadt wohnen will, sollte in der Altstadt wohnen. Das ist keine halbe Sache – das ist eine Entscheidung mit Folgen, jeden Tag.',
          'In der Altstadt beginnen die historischen Gassen vor der Tür, und Gepäck kann über Kopfsteinpflaster führen. Zufahrt und Parken hängen von den jeweils geltenden Regeln ab; prüft deshalb die genaue Ankunft für eure konkrete Unterkunft.',
          'La Marina liegt am neueren westlichen bis nordwestlichen Ortsrand nahe Los Lances. AMARA Family & Surf besitzt einen eigenen Tiefgaragenplatz und hat einen Supermarkt gegenüber. Das sind Merkmale dieser Unterkunft, nicht allgemeine Eigenschaften von La Marina. Die Altstadt bleibt ein eigener Fußweg und liegt nicht direkt vor der Tür.'
        ],
        archetypes: [
          { title: 'Altstadt', consequence: 'Historische Gassen vor der Tür; Zufahrt und Parken müsst ihr für die konkrete Unterkunft aktuell prüfen.' },
          { title: 'La Marina', consequence: 'Neuerer westlicher bis nordwestlicher Ortsrand nahe Los Lances; Garage und Supermarkt gegenüber gelten nur für AMARA.' },
          { title: 'Los-Lances-Korridor', consequence: 'Langer Atlantikstrand und geschützte Landschaft, kein einheitliches Viertel; entscheidend ist die genaue Lage der Unterkunft.' },
          { title: 'Umland & Hügel', consequence: 'Entfernungen und Zufahrt unterscheiden sich je Adresse; die konkrete Unterkunft bestimmt, wie stark der Alltag vom Auto abhängt.' }
        ],
        link: { label: 'Tarifas Lagen im Detail vergleichen', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & Jahreszeiten',
        title: 'Die aktuellen Bedingungen entscheiden, welcher Strand heute passt',
        paragraphs: [
          'Wind gehört zu Tarifas Identität. Welche Küste für euren Tag passt, hängt aber zusätzlich von aktueller Meeresvorhersage, Beflaggung, saisonalen Zonen und der geplanten Aktivität ab.',
          'Der nördliche Los-Lances-Abschnitt und Valdevaqueros sind etablierte Wassersportgebiete. Aus Levante oder Poniente allein folgt jedoch keine allgemein geeignete Strandwahl. Prüft die aktuellen Bedingungen und folgt den örtlichen Sicherheits- oder Instruktorhinweisen.',
          'Bei Unterkünften beeinflussen Ausrichtung und Gebäudekontext die Windwirkung. Ohne standortspezifischen Nachweis versprechen wir weder für La Marina noch für AMARA Family & Surf einen geschützten Platz.'
        ],
        link: { label: 'Wetter & Jahreszeiten in Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Alltag',
        title: 'Was sich nach drei Tagen wiederholt',
        paragraphs: [
          'AMARA Family & Surf hat einen Supermarkt direkt gegenüber. Das ist ein Vorteil dieser Unterkunft und kein allgemeines Merkmal von La Marina. Betrieb sowie Sonntags- und Saisonöffnungszeiten solltet ihr aktuell prüfen.',
          'Restaurants und Bars konzentrieren sich in der Altstadt und entlang der Calle Batalla del Salado, beides von La Marina aus zu Fuß erreichbar. Welche Adressen sich wirklich lohnen, steht im Erlebnis-Guide.'
        ]
      },
      winter: {
        eyebrow: 'Ab September',
        title: 'Ab September wird Tarifa ein anderer Ort',
        paragraphs: [
          'Nach unserer Erfahrung ist der Parkdruck im Juli und August besonders hoch. Das ist eine saisonale Beobachtung und kein Beleg dafür, dass Parken grundsätzlich unmöglich ist. Für AMARA ist ein Tiefgaragenplatz dokumentiert; Zufahrt und Maße bestätigt ihr für eure Buchung.',
          'Ab September wird es dann ruhiger. Man merkt die Ruhe, man kommt mit Einheimischen ins Gespräch, man lernt Leute kennen. Für uns ist das die schönste Zeit hier.',
          'Bei längeren Aufenthalten zählen neben der Strandnähe auch Heizung, Trockenheit und ein Arbeitsplatz. Prüft diese Merkmale an der einzelnen Unterkunft, statt sie aus Altstadt oder La Marina abzuleiten.'
        ]
      },
      amara: {
        eyebrow: 'Unsere Wohnung',
        title: 'Warum wir unsere Gäste in La Marina beherbergen',
        paragraphs: [
          'Der Balkon liegt nach Westen über dem Atlantik. Diese Ausrichtung gehört zur konkreten Wohnung; sie belegt weder einen allgemeinen La-Marina-Blick noch eine garantierte Sicht auf die afrikanische Küste.',
          'Darüber liegt das Schlafzimmer, mit demselben Blick. Ihr wacht mit dem Meer auf. Was Gäste beim Ankommen am häufigsten sagen: dass die Wohnung in echt schöner ist als auf den Fotos.',
          'Unsere Verbindung zu Tarifa ist persönlich: Robert hat hier immer wieder mehrere Monate gelebt, zum Kitesurfen und mit Freunden. Als diese Wohnung zum Verkauf stand, haben wir sie gekauft und modernisiert. Wegen der Abende. Und weil sie im Alltag einfach funktioniert.',
          'Eines sagen wir offen: Wenn ihr das historische Tarifa direkt vor der Tür haben möchtet, passt die Altstadt besser zu euch als wir. Der Pool gehört zur Anlage, nicht zur Wohnung, und wird saisonal betrieben; prüft den aktuellen Öffnungszeitraum vor der Buchung.'
        ],
        facts: [
          '75 m² auf zwei Ebenen – Schlafzimmer mit Meerblick',
          'Großer Westbalkon über dem Atlantik',
          'Privater Tiefgaragenplatz für diese Unterkunft',
          'Supermarkt direkt gegenüber dieser Unterkunft',
          'Die Altstadt ist ein eigener Fußweg und liegt nicht direkt vor der Tür'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'AMARA Family & Surf ansehen', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Eure Tage hier',
        title: 'Was möchtet ihr in Tarifa unternehmen?',
        paragraphs: ['Im Erlebnis-Guide wählt ihr zwischen Strand, Wind und Wassersport, Essen, Natur, Altstadt und einem ganzen Tag in Bolonia.'],
        links: [
          { label: 'Tarifa erleben', token: 'tarifa_experience_hub' },
          { label: 'Tarifas Strände entdecken', token: 'tarifa_beaches_authority' },
          { label: 'Kitesurfen in Tarifa', token: 'tarifa_kitesurfing_hub' }
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
        eyebrow: 'Tarifa · Ubicación y estancia',
        title: 'Tarifa, la ciudad continental más meridional de Europa',
        subtitle: 'Atlántico al oeste, Estrecho al este y el casco antiguo en medio. Y nuestro apartamento en La Marina.',
        standfirst: 'El casco antiguo, el borde de playa y los barrios más nuevos de Tarifa están lo bastante próximos para resolver muchos trayectos a pie; Valdevaqueros y Bolonia requieren, en cambio, un desplazamiento propio hacia el oeste. En el casco antiguo tendréis calles históricas y restaurantes alrededor. La Marina queda en el borde oeste o noroeste de la localidad, cerca de Los Lances. Allí se encuentra AMARA Family & Surf. Su plaza subterránea y el supermercado de enfrente son características del alojamiento, no promesas sobre toda La Marina.',
        note: 'Una guía de AMARA escrita desde la experiencia; no es un servicio de condiciones en directo.',
        updated: 'Revisado en agosto de 2026'
      },
      keyFigures: {
        figures: [
          { value: '33,5 km', label: 'Costa atlántica del municipio' },
          { value: '10,5 km', label: 'Costa mediterránea del municipio' },
          { value: '14,4 km', label: 'Europa – África en el punto más estrecho' },
          { value: '226 ha', label: 'Paraje protegido Playa de los Lances' }
        ],
        note: 'Longitudes de costa según el plan municipal de emergencias; distancia según MITECO. La distancia se refiere al Estrecho, no al pueblo ni al apartamento, y no garantiza ver África.'
      },
      media: {
        heroAlt: 'Vista desde AMARA sobre Tarifa hacia la costa atlántica',
        walkAlt: 'Kitesurfista entrando al agua con la tabla en la playa de Los Lances',
        walkCaption: 'Los Lances, mirando al oeste. Las playas del oeste y Bolonia requieren un desplazamiento propio.',
        barAlt: 'Barra de kite en la arena de Los Lances',
        castleAlt: 'Castillo de Santa Catalina sobre Tarifa',
        castleCaption: 'Santa Catalina sobre la Isla. En invierno el pueblo vuelve a ser de quienes viven aquí.',
        waveAlt: 'Kitesurfista girando en la ola frente a Tarifa'
      },
      geography: {
        eyebrow: 'Dónde estáis',
        title: 'Entre el Atlántico y el Estrecho',
        paragraphs: [
          'En el espigón de acceso a la Isla de Tarifa, Playa Chica queda del lado del Estrecho, mientras la larga costa de Los Lances a Valdevaqueros se extiende hacia el oeste por el Atlántico.',
          'La localidad es compacta. Casco antiguo, parte nueva y borde de playa quedan cerca para muchos trayectos cotidianos a pie. Las playas del oeste y Bolonia están fuera de ese tejido urbano y requieren un desplazamiento propio.'
        ],
        markers: [
          { label: 'Dos costas', value: 'Playa Chica al este; Los Lances se extiende hacia el oeste' },
          { label: 'Borde urbano', value: 'La Marina queda al oeste o noroeste del centro' },
          { label: 'Más al oeste', value: 'Valdevaqueros, Punta Paloma y Bolonia requieren otro trayecto' }
        ],
        link: { label: 'Geografía y orientación en detalle', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Llegada y coche',
        title: 'En el pueblo podéis moveros a pie; para las playas del oeste conviene el coche',
        paragraphs: [
          'A Tarifa se llega por carretera desde los aeropuertos y estaciones de la región, además de mediante las conexiones actuales de autobús y ferry. Los horarios y las rutas prácticas cambian, por lo que la planificación concreta corresponde a la guía de llegada.',
          'Muchos trayectos dentro de la localidad funcionan a pie. Sin embargo, el acceso de vehículos y el aparcamiento para visitantes pueden cambiar; importan las señales y normas vigentes. La plaza subterránea documentada para AMARA Family & Surf pertenece únicamente a ese alojamiento.',
          'El coche resulta más útil para las playas del oeste y Bolonia. Acceso, aparcamiento y zonas de deportes acuáticos varían según el destino y las condiciones; no dependáis de un traslado informal ni de una sola regla fija para toda la costa.'
        ],
        link: { label: 'Planificar la llegada a Tarifa', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Dónde alojarse',
        title: 'Casco antiguo o La Marina: qué significa cada día',
        paragraphs: [
          'Quien quiera alojarse sí o sí en el casco antiguo, que se aloje en el casco antiguo. No es una solución a medias: es una decisión con consecuencias diarias.',
          'En el casco antiguo, las calles históricas empiezan en la puerta y el equipaje puede pasar sobre adoquines. El acceso de vehículos y el aparcamiento dependen de las normas vigentes, así que conviene comprobar la llegada exacta del alojamiento elegido.',
          'La Marina queda en el borde urbano más nuevo, al oeste o noroeste, cerca de Los Lances. AMARA Family & Surf tiene plaza subterránea propia y un supermercado enfrente. Son características de ese alojamiento, no de toda La Marina. El casco antiguo sigue siendo un paseo separado y no queda justo a la puerta.'
        ],
        archetypes: [
          { title: 'Casco Antiguo', consequence: 'Calles históricas en la puerta; acceso y aparcamiento deben comprobarse para el alojamiento concreto.' },
          { title: 'La Marina', consequence: 'Borde urbano más nuevo al oeste o noroeste, cerca de Los Lances; garaje y supermercado enfrente corresponden solo a AMARA.' },
          { title: 'Corredor de Los Lances', consequence: 'Una larga playa atlántica y un paisaje protegido, no un barrio uniforme; importa la ubicación exacta del alojamiento.' },
          { title: 'Campo y colinas', consequence: 'Las distancias y el acceso cambian según la dirección; la propiedad concreta determina cuánto depende el día a día del coche.' }
        ],
        link: { label: 'Comparar en detalle las zonas de Tarifa', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Viento y estaciones',
        title: 'Las condiciones actuales deciden qué playa encaja hoy',
        paragraphs: [
          'El viento forma parte de la identidad de Tarifa, pero la elección de playa también depende de la previsión marítima actual, las banderas, la zonificación estacional y la actividad prevista.',
          'El norte de Los Lances y Valdevaqueros son zonas consolidadas para deportes acuáticos, pero levante o poniente por sí solos no hacen que una playa sea adecuada para todo el mundo. Consultad las condiciones actuales y seguid las indicaciones locales de seguridad o de vuestro instructor.',
          'En un alojamiento, la orientación y el edificio cambian la exposición. Sin pruebas específicas del lugar y de las condiciones, no prometemos resguardo ni para La Marina ni para AMARA Family & Surf.'
        ],
        link: { label: 'Tiempo y estaciones en Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Vida diaria',
        title: 'Lo que se repite a partir del tercer día',
        paragraphs: [
          'AMARA Family & Surf tiene un supermercado justo enfrente. Es una comodidad propia del alojamiento, no una característica general de La Marina. El funcionamiento y los horarios dominicales o de temporada deben comprobarse en el momento.',
          'Los restaurantes y bares se concentran en el casco antiguo y en la Calle Batalla del Salado, ambos accesibles a pie desde La Marina. Qué direcciones merecen realmente la pena está en la guía de experiencias.'
        ]
      },
      winter: {
        eyebrow: 'A partir de septiembre',
        title: 'A partir de septiembre Tarifa es otro lugar',
        paragraphs: [
          'Según nuestra experiencia, la presión de aparcamiento es especialmente alta en julio y agosto. Es una observación estacional, no una prueba de que aparcar sea imposible. AMARA registra una plaza subterránea para este alojamiento; confirmad acceso y dimensiones para vuestra reserva.',
          'A partir de septiembre llega la calma. Se nota la tranquilidad, se habla con la gente del pueblo, se hacen conocidos. Para nosotros es la época más bonita de aquí.',
          'En estancias largas importan, además de la playa, la calefacción, la ausencia de humedad y un lugar para trabajar. Comprobadlo en cada alojamiento en lugar de deducirlo del casco antiguo o de La Marina.'
        ]
      },
      amara: {
        eyebrow: 'Nuestro apartamento',
        title: 'Por qué alojamos a nuestros huéspedes en La Marina',
        paragraphs: [
          'El balcón mira al oeste sobre el Atlántico. Esa orientación pertenece a este apartamento; no demuestra una vista general desde La Marina ni garantiza que la costa africana sea visible.',
          'Encima está el dormitorio, con la misma vista. Os despertáis con el mar. Lo que más dicen los huéspedes al llegar: que el apartamento es aún más bonito que en las fotos.',
          'Nuestra relación con Tarifa es personal: Robert vivió aquí temporadas de varios meses, entre kitesurf y amigos. Cuando este apartamento salió a la venta, lo compramos y lo reformamos. Por las tardes. Y porque en el día a día simplemente funciona.',
          'Lo decimos con claridad: si queréis la Tarifa histórica justo en la puerta, el casco antiguo os encajará mejor que nosotros. La piscina pertenece a la comunidad, no al apartamento, y funciona por temporada; comprobad el periodo actual antes de reservar.'
        ],
        facts: [
          '75 m² en dos niveles: dormitorio con vistas al mar',
          'Balcón amplio orientado al oeste sobre el Atlántico',
          'Plaza privada en garaje subterráneo para este alojamiento',
          'Supermercado justo enfrente de este alojamiento',
          'El casco antiguo requiere otro paseo y no queda a la puerta'
        ],
        imageAlt: 'AMARA Family & Surf en La Marina, Tarifa',
        link: { label: 'Ver AMARA Family & Surf', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Vuestros días aquí',
        title: '¿Qué os apetece hacer en Tarifa?',
        paragraphs: ['En la guía de experiencias podéis elegir entre playa, viento y deportes acuáticos, gastronomía, naturaleza, casco antiguo y un día completo en Bolonia.'],
        links: [
          { label: 'Qué hacer en Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Explorar las playas de Tarifa', token: 'tarifa_beaches_authority' },
          { label: 'Kitesurf en Tarifa', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'Para nosotros, Tarifa es el lugar más bonito de este planeta.',
        lead: 'Si lo entendéis así, lo mejor es alojarse donde el sol cae al mar justo delante de vosotros.',
        ctaLabel: 'Ver AMARA Family & Surf'
      }
    },
    nl: {
      hero: {
        eyebrow: 'Tarifa · Ligging & verblijf',
        title: 'Tarifa, de zuidelijkste stad van het Europese vasteland',
        subtitle: 'De Atlantische Oceaan in het westen, de Straat in het oosten, de oude stad ertussen. En ons appartement in La Marina.',
        standfirst: 'De oude stad, de strandrand en de nieuwere wijken van Tarifa liggen dicht genoeg bij elkaar om veel routes te voet af te leggen; Valdevaqueros en Bolonia vragen om een aparte tocht naar het westen. In de oude stad liggen historische straten en restaurants om jullie heen. La Marina ligt aan de nieuwere westelijke tot noordwestelijke stadsrand bij Los Lances. Daar ligt AMARA Family & Surf. De ondergrondse parkeerplaats en supermarkt aan de overkant horen bij deze accommodatie en zijn geen belofte voor heel La Marina.',
        note: 'Een AMARA-gids uit eigen ervaring — geen live informatiedienst voor wind en weer.',
        updated: 'Gecontroleerd in augustus 2026'
      },
      keyFigures: {
        figures: [
          { value: '33,5 km', label: 'Atlantische kust van de gemeente' },
          { value: '10,5 km', label: 'Middellandse Zeekust van de gemeente' },
          { value: '14,4 km', label: 'Europa – Afrika op het smalste punt' },
          { value: '226 ha', label: 'Beschermd natuurgebied Playa de los Lances' }
        ],
        note: 'Kustlengtes volgens het gemeentelijke rampenplan, afstand volgens MITECO. De afstand geldt voor de Straat, niet voor het dorp of het appartement, en belooft geen zicht op Afrika.'
      },
      media: {
        heroAlt: 'Uitzicht vanaf AMARA over Tarifa richting de Atlantische kust',
        walkAlt: 'Kiter loopt met board het water in op het strand van Los Lances',
        walkCaption: 'Los Lances, kijkend naar het westen. De westelijke stranden en Bolonia vragen om een eigen tocht.',
        barAlt: 'Kitebar in het zand van Los Lances',
        castleAlt: 'Castillo de Santa Catalina boven Tarifa',
        castleCaption: 'Santa Catalina boven de Isla. In de winter is het dorp weer van de mensen die hier wonen.',
        waveAlt: 'Kiter draait in de golf voor Tarifa'
      },
      geography: {
        eyebrow: 'Waar jullie zijn',
        title: 'Tussen de Atlantische Oceaan en de Straat',
        paragraphs: [
          'Bij de dam naar Isla de Tarifa ligt Playa Chica aan de zijde van de Straat, terwijl de lange kust van Los Lances tot Valdevaqueros zich westwaarts langs de Atlantische Oceaan uitstrekt.',
          'De plaats zelf is compact. Oude stad, nieuwer deel en strandrand liggen voor veel dagelijkse routes dicht genoeg bij elkaar. De westelijke stranden en Bolonia liggen buiten dit stadsweefsel en vragen om een aparte tocht.'
        ],
        markers: [
          { label: 'Twee kusten', value: 'Playa Chica oostelijk; Los Lances strekt zich westwaarts uit' },
          { label: 'Stadsrand', value: 'La Marina ligt westelijk tot noordwestelijk van het centrum' },
          { label: 'Verder westelijk', value: 'Valdevaqueros, Punta Paloma en Bolonia vragen om een aparte tocht' }
        ],
        link: { label: 'Geografie & oriëntatie in detail', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Aankomst & auto',
        title: 'In de stad kan veel te voet; voor de westelijke stranden is een auto handig',
        paragraphs: [
          'Tarifa is over de weg bereikbaar vanaf de luchthavens en treinstations in de regio, naast de actuele bus- en veerverbindingen. Dienstregelingen en praktische routes veranderen; de aankomstgids behandelt daarom de concrete planning.',
          'Veel routes binnen de plaats werken te voet. Toegang voor voertuigen en bezoekersparkeren kunnen echter veranderen, dus actuele borden en regels zijn bepalend. De voor AMARA Family & Surf vastgelegde ondergrondse parkeerplaats hoort alleen bij deze accommodatie.',
          'Voor de westelijke stranden en Bolonia wordt een auto nuttiger. Toegang, parkeren en watersportzones verschillen per bestemming en omstandigheden; vertrouw niet op een informele lift of één vaste regel voor de hele kust.'
        ],
        link: { label: 'De reis naar Tarifa plannen', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Waar overnachten',
        title: 'Oude stad of La Marina – en wat dat elke dag betekent',
        paragraphs: [
          'Wie per se in de oude stad wil verblijven, moet in de oude stad verblijven. Dat is geen halve keuze — dat is een besluit met dagelijkse gevolgen.',
          'In de oude stad beginnen de historische straten voor de deur en kan bagage over kasseien gaan. Toegang voor voertuigen en parkeren hangen af van de geldende regels; controleer daarom de precieze aankomst bij de gekozen accommodatie.',
          'La Marina ligt aan de nieuwere westelijke tot noordwestelijke stadsrand bij Los Lances. AMARA Family & Surf heeft een eigen ondergrondse parkeerplaats en een supermarkt aan de overkant. Dat zijn eigenschappen van deze accommodatie, niet van heel La Marina. De oude stad blijft een aparte wandeling en ligt niet direct voor de deur.'
        ],
        archetypes: [
          { title: 'Oude stad', consequence: 'Historische straten voor de deur; controleer toegang en parkeren voor de precieze accommodatie.' },
          { title: 'La Marina', consequence: 'Nieuwere westelijke tot noordwestelijke stadsrand bij Los Lances; garage en supermarkt aan de overkant gelden alleen voor AMARA.' },
          { title: 'Los-Lances-corridor', consequence: 'Een lang Atlantisch strand en beschermd landschap, geen uniforme wijk; de exacte ligging van de accommodatie is bepalend.' },
          { title: 'Buitengebied & heuvels', consequence: 'Afstanden en toegang verschillen per adres; de precieze accommodatie bepaalt hoeveel van het dagelijks leven van een auto afhangt.' }
        ],
        link: { label: 'Vergelijk de gebieden van Tarifa uitgebreid', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Wind & seizoenen',
        title: 'De actuele omstandigheden bepalen welk strand vandaag past',
        paragraphs: [
          'Wind hoort bij de identiteit van Tarifa, maar de keuze voor een strand hangt ook af van de actuele zeevoorspelling, vlaggen, seizoenszones en de activiteit die jullie willen doen.',
          'Het noorden van Los Lances en Valdevaqueros zijn gevestigde watersportgebieden, maar levante of poniente alleen maakt geen enkel strand voor iedereen geschikt. Controleer de actuele omstandigheden en volg lokale veiligheids- of instructeursadviezen.',
          'Bij een accommodatie beïnvloeden oriëntatie en gebouwcontext de blootstelling aan wind. Zonder plaatsgebonden bewijs voor de werkelijke omstandigheden beloven we geen beschutting voor La Marina of AMARA Family & Surf.'
        ],
        link: { label: 'Bekijk weer & seizoenen in Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Dagelijks leven',
        title: 'Wat zich na drie dagen herhaalt',
        paragraphs: [
          'AMARA Family & Surf heeft een supermarkt direct aan de overkant. Dat is een voordeel van deze accommodatie en geen algemeen kenmerk van La Marina. Controleer de actuele opening en zondag- of seizoenstijden.',
          'Restaurants en bars concentreren zich in de oude stad en langs de Calle Batalla del Salado, allebei te voet bereikbaar vanuit La Marina. Welke adressen echt de moeite waard zijn, staat in de ervaringsgids.'
        ]
      },
      winter: {
        eyebrow: 'Vanaf september',
        title: 'Vanaf september is Tarifa een andere plek',
        paragraphs: [
          'Naar onze ervaring is de parkeerdruk in juli en augustus bijzonder hoog. Dat is een seizoenswaarneming en geen bewijs dat parkeren onmogelijk is. Voor AMARA staat een ondergrondse parkeerplaats geregistreerd; bevestig toegang en afmetingen voor jullie boeking.',
          'Vanaf september wordt het rustiger. Jullie merken de rust, raken aan de praat met mensen uit het dorp en leren hier mensen kennen. Voor ons is dat de mooiste tijd van het jaar.',
          'Bij een langer verblijf tellen naast het strand ook verwarming, droogte en een werkplek. Controleer die kenmerken per accommodatie in plaats van ze uit de oude stad of La Marina af te leiden.'
        ]
      },
      amara: {
        eyebrow: 'Ons appartement',
        title: 'Waarom wij onze gasten in La Marina ontvangen',
        paragraphs: [
          'Het balkon ligt op het westen boven de Atlantische Oceaan. Die oriëntatie hoort bij dit appartement; ze bewijst geen algemeen uitzicht vanuit La Marina en garandeert niet dat de Afrikaanse kust zichtbaar is.',
          'Daarboven ligt de slaapkamer, met hetzelfde uitzicht. Jullie worden wakker met de zee. Wat gasten bij aankomst het vaakst zeggen: dat het appartement in het echt nog mooier is dan op de foto\'s.',
          'Onze band met Tarifa is persoonlijk: Robert woonde hier telkens enkele maanden, om te kitesurfen en tijd met vrienden door te brengen. Toen dit appartement te koop stond, hebben we het gekocht en gemoderniseerd. Vanwege de avonden. En omdat het in het dagelijks leven gewoon werkt.',
          'Eén ding zeggen we open: willen jullie het historische Tarifa direct voor de deur, dan past de oude stad beter bij jullie dan wij. Het zwembad hoort bij het complex, niet bij het appartement, en is seizoensgebonden; controleer de actuele openingsperiode voor het boeken.'
        ],
        facts: [
          '75 m² op twee niveaus – slaapkamer met zeezicht',
          'Groot westbalkon boven de Atlantische Oceaan',
          'Privéparkeerplaats in de ondergrondse garage voor deze accommodatie',
          'Supermarkt direct tegenover deze accommodatie',
          'De oude stad is een aparte wandeling en ligt niet direct voor de deur'
        ],
        imageAlt: 'AMARA Family & Surf in La Marina, Tarifa',
        link: { label: 'Bekijk AMARA Family & Surf', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Jullie dagen hier',
        title: 'Wat willen jullie doen in Tarifa?',
        paragraphs: ['Kies in de ervaringsgids tussen strand, wind en watersport, eten, natuur, de oude stad en een hele dag in Bolonia.'],
        links: [
          { label: 'Wat te doen in Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Ontdek de stranden van Tarifa', token: 'tarifa_beaches_authority' },
          { label: 'Kitesurfen in Tarifa', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'Voor ons is Tarifa de mooiste plek op deze planeet.',
        lead: 'Als jullie dat begrijpen, verblijven jullie het best daar waar de zon voor jullie in zee valt.',
        ctaLabel: 'Bekijk AMARA Family & Surf'
      }
    },
    sv: {
      hero: {
        eyebrow: 'Tarifa · Läge & vistelse',
        title: 'Tarifa, Europas sydligaste fastlandsstad',
        subtitle: 'Atlanten i väster, sundet i öster och gamla stan däremellan. Och vår lägenhet i La Marina.',
        standfirst: 'Tarifas gamla stad, strandkant och nyare kvarter ligger så nära varandra att många sträckor fungerar till fots; Valdevaqueros och Bolonia kräver däremot en separat färd västerut. I gamla stan har ni historiska gränder och restauranger omkring er. La Marina ligger i stadens nyare västra till nordvästra kant nära Los Lances. Där ligger AMARA Family & Surf. Garageplatsen och mataffären mittemot hör till just boendet och är inga löften om hela La Marina.',
        note: 'En AMARA-guide ur egen erfarenhet – inte en tjänst för aktuella vind- och väderförhållanden.',
        updated: 'Granskad i augusti 2026'
      },
      keyFigures: {
        figures: [
          { value: '33,5 km', label: 'Kommunens atlantkust' },
          { value: '10,5 km', label: 'Kommunens medelhavskust' },
          { value: '14,4 km', label: 'Europa – Afrika på det smalaste stället' },
          { value: '226 ha', label: 'Naturskyddsområdet Playa de los Lances' }
        ],
        note: 'Kustlängder enligt kommunens beredskapsplan, avstånd enligt MITECO. Avståndet gäller sundet, inte staden eller lägenheten, och utlovar ingen utsikt mot Afrika.'
      },
      media: {
        heroAlt: 'Utsikt från AMARA över Tarifa mot Atlantkusten',
        walkAlt: 'Kitesurfare går ut i vattnet med brädan på stranden Los Lances',
        walkCaption: 'Los Lances, vy västerut. De västra stränderna och Bolonia kräver en egen färd.',
        barAlt: 'Kitebar i sanden på Los Lances',
        castleAlt: 'Castillo de Santa Catalina ovanför Tarifa',
        castleCaption: 'Santa Catalina ovanför Isla. På vintern tillhör staden åter dem som bor här.',
        waveAlt: 'Kitesurfare svänger i vågen utanför Tarifa'
      },
      geography: {
        eyebrow: 'Var ni är',
        title: 'Mellan Atlanten och sundet',
        paragraphs: [
          'Vid vägbanken till Isla de Tarifa ligger Playa Chica på sundets sida, medan den långa kusten från Los Lances till Valdevaqueros sträcker sig västerut längs Atlanten.',
          'Staden är kompakt. Gamla stan, den nyare delen och strandkanten ligger nära nog för många vardagssträckor till fots. Stränderna i väster och Bolonia ligger utanför detta stadsmönster och kräver en separat färd.'
        ],
        markers: [
          { label: 'Två kuster', value: 'Playa Chica i öster; Los Lances sträcker sig västerut' },
          { label: 'Stadskant', value: 'La Marina ligger väster till nordväst om centrum' },
          { label: 'Längre västerut', value: 'Valdevaqueros, Punta Paloma och Bolonia kräver en separat färd' }
        ],
        link: { label: 'Geografi & orientering i detalj', token: 'tarifa_geography' }
      },
      arrival: {
        eyebrow: 'Ankomst & bil',
        title: 'I staden går det mesta till fots; till stränderna i väster är bilen praktisk',
        paragraphs: [
          'Tarifa nås på väg från regionens flygplatser och järnvägsstationer samt med aktuella buss- och färjeförbindelser. Tidtabeller och praktiska rutter förändras, så ankomstguiden tar hand om den konkreta planeringen.',
          'Många sträckor i staden fungerar till fots. Fordonstillträde och besöksparkering kan däremot förändras, så aktuella skyltar och regler gäller. Den garageplats som dokumenterats för AMARA Family & Surf hör bara till det boendet.',
          'Bilen blir mer användbar för stränderna i väster och Bolonia. Tillträde, parkering och vattensportzoner varierar med plats och förhållanden; lita inte på informell skjuts eller en enda fast regel för hela kusten.'
        ],
        link: { label: 'Planera resan till Tarifa', token: 'getting_to_tarifa' }
      },
      areas: {
        eyebrow: 'Var ska man bo',
        title: 'Gamla stan eller La Marina – och vad det betyder varje dag',
        paragraphs: [
          'Den som absolut vill bo i gamla stan ska bo i gamla stan. Det är ingen halvmesyr – det är ett beslut med konsekvenser varje dag.',
          'I gamla stan börjar de historiska gränderna utanför dörren och bagage kan behöva dras över kullersten. Fordonstillträde och parkering beror på aktuella regler; kontrollera därför den exakta ankomsten till boendet ni väljer.',
          'La Marina ligger i stadens nyare västra till nordvästra kant nära Los Lances. AMARA Family & Surf har en egen garageplats och en mataffär mittemot. Det är egenskaper hos just boendet, inte hos hela La Marina. Gamla stan är fortfarande en separat promenad och ligger inte direkt utanför dörren.'
        ],
        archetypes: [
          { title: 'Gamla stan', consequence: 'Historiska gränder utanför dörren; kontrollera tillträde och parkering för det exakta boendet.' },
          { title: 'La Marina', consequence: 'Nyare västra till nordvästra stadskant nära Los Lances; garage och mataffär mittemot gäller bara AMARA.' },
          { title: 'Los Lances-korridoren', consequence: 'En lång Atlantstrand och skyddad natur, inte ett enhetligt område; boendets exakta läge är avgörande.' },
          { title: 'Landsbygd & kullar', consequence: 'Avstånd och tillträde varierar med adressen; det exakta boendet avgör hur mycket vardagen beror på bil.' }
        ],
        link: { label: 'Jämför Tarifas områden på djupet', token: 'tarifa_where_to_stay' }
      },
      weather: {
        eyebrow: 'Vind & årstider',
        title: 'Dagens förhållanden avgör vilken strand som passar',
        paragraphs: [
          'Vinden hör till Tarifas identitet, men valet av strand beror också på aktuell havsprognos, flaggor, säsongszoner och vilken aktivitet ni planerar.',
          'Norra Los Lances och Valdevaqueros är etablerade områden för vattensport, men levante eller poniente i sig gör ingen strand lämplig för alla. Kontrollera aktuella förhållanden och följ lokala säkerhets- eller instruktörsråd.',
          'För ett boende påverkar riktning och byggnad hur utsatt det är. Utan platsspecifika belägg för de aktuella förhållandena lovar vi inte vindskydd för vare sig La Marina eller AMARA Family & Surf.'
        ],
        link: { label: 'Väder & årstider i Tarifa', token: 'tarifa_weather' }
      },
      dailyLife: {
        eyebrow: 'Vardagsliv',
        title: 'Det som upprepas efter tre dagar',
        paragraphs: [
          'AMARA Family & Surf har en mataffär direkt mittemot. Det är en bekvämlighet för just boendet och inte en allmän egenskap hos La Marina. Kontrollera aktuella öppettider samt söndags- och säsongsöppet.',
          'Restauranger och barer samlas i Gamla stan och längs Calle Batalla del Salado, båda på gångavstånd från La Marina. Vilka adresser som verkligen är värda ett besök står i upplevelseguiden.'
        ]
      },
      winter: {
        eyebrow: 'Från september',
        title: 'Från september är Tarifa en annan plats',
        paragraphs: [
          'Enligt vår erfarenhet är parkeringstrycket särskilt högt i juli och augusti. Det är en säsongsobservation, inte ett bevis för att parkering är omöjlig. För AMARA finns en garageplats registrerad; bekräfta tillträde och mått för er bokning.',
          'Från september blir det lugnare. Man känner lugnet, man kommer i samtal med de som bor här, man lär känna folk. För oss är det den finaste tiden här.',
          'Vid längre vistelser spelar uppvärmning, torrhet och arbetsplats roll vid sidan av stranden. Kontrollera detta för varje boende i stället för att dra slutsatser från gamla stan eller La Marina.'
        ]
      },
      amara: {
        eyebrow: 'Vår lägenhet',
        title: 'Varför vi tar emot våra gäster i La Marina',
        paragraphs: [
          'Balkongen vetter västerut över Atlanten. Den riktningen hör till just lägenheten; den bevisar inte en allmän utsikt från La Marina och garanterar inte att Afrikas kust syns.',
          'Ovanför ligger sovrummet, med samma utsikt. Ni vaknar med havet. Det gästerna oftast säger vid ankomsten: att lägenheten är ännu vackrare i verkligheten än på bilderna.',
          'Vår relation till Tarifa är personlig: Robert bodde här några månader i taget, för kitesurfingen och vännerna. När den här lägenheten kom ut till försäljning köpte vi den och renoverade. På grund av kvällarna. Och för att den helt enkelt fungerar i vardagen.',
          'En sak säger vi rakt ut: vill ni ha det historiska Tarifa direkt utanför dörren passar gamla stan er bättre än vi gör. Poolen tillhör anläggningen, inte lägenheten, och drivs säsongsvis; kontrollera den aktuella öppningsperioden före bokning.'
        ],
        facts: [
          '75 m² på två plan – sovrum med havsutsikt',
          'Stor västbalkong över Atlanten',
          'Privat plats i underjordiskt garage för detta boende',
          'Mataffär direkt mittemot detta boende',
          'Gamla stan är en separat promenad och ligger inte utanför dörren'
        ],
        imageAlt: 'AMARA Family & Surf i La Marina, Tarifa',
        link: { label: 'Visa AMARA Family & Surf', token: 'tarifa' }
      },
      experience: {
        eyebrow: 'Era dagar här',
        title: 'Vad vill ni göra i Tarifa?',
        paragraphs: ['I upplevelseguiden väljer ni mellan strand, vind och vattensport, mat, natur, gamla stan och en heldag i Bolonia.'],
        links: [
          { label: 'Att göra i Tarifa', token: 'tarifa_experience_hub' },
          { label: 'Upptäck Tarifas stränder', token: 'tarifa_beaches_authority' },
          { label: 'Kitesurfing i Tarifa', token: 'tarifa_kitesurfing_hub' }
        ]
      },
      closing: {
        title: 'För oss är Tarifa den vackraste platsen på den här planeten.',
        lead: 'Om ni känner igen er i det bor ni bäst där solen faller ner i havet framför er.',
        ctaLabel: 'Visa AMARA Family & Surf'
      }
    }
  }
};
