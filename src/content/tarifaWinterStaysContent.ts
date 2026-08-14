import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface TarifaWinterStaysSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface TarifaWinterStaysLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
    mark: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: TarifaWinterStaysSection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    propertyLabel: string;
  };
}

/**
 * Primary intent: the lived proposition of a multi-day or multi-week Tarifa winter stay.
 * Weather detail remains with the seasonal guide; remote work remains a supporting use case.
 * Native query families:
 * EN Tarifa in winter / winter in Tarifa / Tarifa winter weather / winter stay / long stay / winter sun / remote work;
 * DE Tarifa im Winter / Winter in Tarifa / Winterwetter / Winteraufenthalt / Langzeiturlaub / Wintersonne / Workation;
 * ES Tarifa en invierno / invierno en Tarifa / tiempo en invierno / estancia de invierno / larga estancia / sol de invierno / teletrabajo;
 * NL Tarifa in de winter / winter in Tarifa / winterweer / winterverblijf / lang verblijf / winterzon / werken op afstand;
 * SV Tarifa på vintern / vinter i Tarifa / vinterväder / vintervistelse / längre vistelse / vintersol / distansarbete.
 * Entities: Tarifa, La Marina, Mar Adriático 29, AMARA Family & Surf, the Atlantic coast,
 * Strait of Gibraltar, Africa, the Atlas Mountains, TAF CoWorking and Tarifa Old Town.
 */

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const tarifaWinterStaysSeo: AmaraAuthoringSeo = {
  version: '2026-08-13-tarifa-winter-stays-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Tarifa in Winter: Light, Calm & Longer Stays',
      description: 'See what winter in Tarifa feels like: milder days, Atlantic walks, a more familiar town and a comfortable home for staying several weeks.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Tarifa im Winter: Licht, Ruhe & längere Aufenthalte',
      description: 'So fühlt sich Tarifa im Winter an: mildere Tage, Atlantikspaziergänge, ein vertrauterer Ort und ein komfortables Zuhause für mehrere Wochen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Tarifa en invierno: luz, calma y estancias largas',
      description: 'Así se vive Tarifa en invierno: días suaves, paseos por el Atlántico, una localidad más cercana y una casa cómoda para quedaros varias semanas.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Tarifa in de winter: licht, rust & langer verblijven',
      description: 'Ervaar Tarifa in de winter: mildere dagen, Atlantische wandelingen, een vertrouwdere stad en een comfortabel huis voor enkele weken.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Tarifa på vintern: ljus, lugn och längre vistelser',
      description: 'Så känns Tarifa på vintern: mildare dagar, promenader vid Atlanten, en mer välbekant stad och ett bekvämt hem för flera veckor.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

const sourceHrefs = {
  tarifaNormals: 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=6001',
  tarifaViewpoints: 'https://turismodetarifa.com/que-hacer/parques-naturales-senderismo/',
  tarifaBeaches: 'https://turismodetarifa.com/playas/',
  taf: 'https://tarifairforce.com/pages/coworking-1'
} as const;

export const tarifaWinterStaysContent: Record<AmaraLanguage, TarifaWinterStaysLocale> = {
  en: {
    navLabel: 'Winter Stays',
    hero: {
      eyebrow: 'A host’s winter guide to Tarifa',
      title: 'Winter in Tarifa is a different season, not a lesser one',
      standfirst: 'Summer brings intensity. Winter makes room for daylight, Atlantic walks, changing weather and the ordinary rhythm of town. For guests who can stay for more than a few days, that quieter version can be the more rewarding one.',
      note: 'Written from Robert’s first-hand host experience. Personal observations describe how winter has felt to us over time; they are not promises about every day or every visit.',
      updated: 'Host perspective and supporting sources reviewed August 2026',
      mark: 'WINTER'
    },
    facts: [
      { label: 'Host perspective', value: 'One of Robert’s favourite times in Tarifa' },
      { label: 'Winter rhythm', value: 'More usable daylight than northern Europe' },
      { label: 'Atlantic time', value: 'Walking · waves · sunsets · fresh air' },
      { label: 'At home', value: 'Heating · fireplace · kitchen · washing machine' }
    ],
    sections: [
      {
        id: 'when-summer-leaves',
        eyebrow: '01 · A different Tarifa',
        title: 'Tarifa when summer leaves',
        paragraphs: [
          'Winter has always been one of Robert’s favourite times in Tarifa. After the highly transient rhythm of summer, the town feels smaller, calmer and more familiar to us — not empty, and not reduced to a town populated only by residents.',
          'Over a longer winter stay, the same faces often appear again in cafés, around town, on the beach and within ordinary routines. That repetition is a first-hand observation, not a promise that a guest will make friends or have the same social experience.',
          'The practical consequence is time. A few summer days can be built around highlights; several winter weeks allow Tarifa to become a place you temporarily live in. AMARA in La Marina gives that slower rhythm a real home rather than a short-break base.'
        ]
      },
      {
        id: 'northern-winter',
        eyebrow: '02 · South without false promises',
        title: 'Escaping the northern winter',
        paragraphs: [
          'Tarifa sits far south of the northern-European markets from which many guests travel. Winter can bring mild, bright days and more usable daylight, while northern days are often shorter and colder. It is still winter: rain, wind and cool evenings remain part of the season.',
          'The difference matters most when you have time to use the good hours rather than expecting every day to behave like summer. A late walk, lunch outside on a mild day or time by the coast may become possible; none should be scheduled as a weather guarantee.',
          'For a stay of several weeks, AMARA combines that southern setting with heating, hot-and-cold air-conditioning and a wood-burning fireplace. The proposition is not endless sun, but more chances to be outside and a comfortable place to return to when the day changes.'
        ]
      },
      {
        id: 'winter-light',
        eyebrow: '03 · Horizon and daylight',
        title: 'Winter light, Africa and the long view',
        paragraphs: [
          'Tarifa’s official tourism information describes views towards Africa from the town and coast, and even the Atlas Mountains from La Peña on clear days. That geography is real in every season; visibility always depends on the conditions of the day.',
          'In Robert’s own winter experience, the clarity can sometimes feel especially striking: lower light across the Atlantic, the African coast on the horizon and sunsets that give an ordinary afternoon a clear destination. That is a host memory, not a meteorological rule about winter air.',
          'For guests staying longer, usable afternoon light changes the shape of a day. Work or errands can finish before a coastal walk, a viewpoint or sunset, while AMARA’s Atlantic-facing terrace and easy route towards the western coast keep that horizon close.'
        ]
      },
      {
        id: 'changing-days',
        eyebrow: '04 · Keep the day flexible',
        title: 'Wind, sun and changing days',
        paragraphs: [
          'Tarifa remains variable in winter. Levante can be strong, Atlantic fronts can bring rain, and calm or mild sunny periods can sit between them. The Weather & Seasons guide owns the climate detail; no winter-stay story should turn those patterns into a daily forecast.',
          'A longer stay gives you a useful advantage: you can move the coast, town, work or a drive to the better part of the forecast. The aim is not to defeat the weather but to avoid making one day carry the whole trip.',
          'At AMARA, the full kitchen, heating and fireplace support the indoor part of that flexibility. Reserved underground parking and practical westbound access make it easier to use a brighter coastal window without implying that parking elsewhere will always be easy.'
        ]
      },
      {
        id: 'quieter-tarifa',
        eyebrow: '05 · Familiarity over intensity',
        title: 'The quieter side of Tarifa',
        paragraphs: [
          'Summer can feel anonymous and highly transient. In our winter experience, there is usually less high-season pressure and more room for spontaneous everyday choices — but a popular restaurant can still be busy, a parking space elsewhere can still be hard to find and a beach is never promised empty.',
          'What changes most for us is familiarity. Seeing the same people again at a café, on a town walk or beside the Atlantic can make Tarifa feel more personal and connected, even when those encounters remain no more than a nod or a brief exchange.',
          'From AMARA, the Old Town is about 10–15 minutes away on foot and normal shopping is directly opposite. That lets winter days move naturally between home and town without turning every meal, walk or errand into a planned event.'
        ]
      },
      {
        id: 'winter-day',
        eyebrow: '06 · A day with room to change',
        title: 'A winter day in Tarifa',
        paragraphs: [
          'Start with the forecast rather than a rigid itinerary. Breakfast at home can lead into a town walk or a few focused hours; the best outdoor window can then be kept for Los Lances, the western coast or a viewpoint.',
          'In summer the beach often carries the intensity of the day. In winter, Robert values the Atlantic coast differently: for space, movement, fresh air, waves, landscape and sunset. It can feel calm without ever being described as deserted.',
          'When the light goes, the day returns indoors. Groceries from across the road, a proper kitchen, comfortable living space and warmth matter more in winter because the evening at home is not a gap between activities; it is part of the stay.'
        ]
      },
      {
        id: 'home-matters',
        eyebrow: '07 · Comfort becomes essential',
        title: 'Why the home matters more in winter',
        paragraphs: [
          'A summer stay can revolve around being outside. In winter, the quality of the home becomes part of the destination: somewhere to read, cook, work when necessary, dry clothes after a changing day and spend an evening without needing to go out.',
          'AMARA Family & Surf has verified Wi-Fi, heating, hot-and-cold air-conditioning, a wood-burning fireplace, a full kitchen, washing machine and comfortable living areas. These are practical features, not mood-setting adjectives.',
          'Over several weeks, those basics create continuity. You can cook a normal meal, keep laundry moving and warm the house for the evening, making a mixed-weather day feel like part of real winter life rather than lost holiday time.'
        ]
      },
      {
        id: 'who-enjoys-winter',
        eyebrow: '08 · Who this season suits',
        title: 'Who will enjoy Tarifa in winter',
        paragraphs: [
          'Winter can suit couples, longer stays, guests taking a break from darker northern months, surf- or kite-oriented travellers and people who prefer calm town life to peak-season intensity. It rewards flexibility more than a checklist of guaranteed conditions.',
          'For guests who need to work during part of a longer stay, the combination is practical: a comfortable private home for focused hours, professional coworking infrastructure at nearby TAF when needed, and daylight, coast and town life afterwards. We do not assume that every winter guest works.',
          'Guests seeking the warmest sea, dense high-season energy, the broadest seasonal opening or a trip built almost entirely around beach heat may prefer summer. Winter asks you to value changing days, indoor comfort and a slower relationship with the town.'
        ]
      },
      {
        id: 'amara-la-marina',
        eyebrow: '09 · Your winter base',
        title: 'Winter at AMARA in La Marina',
        paragraphs: [
          'AMARA Family & Surf is at Mar Adriático 29 in La Marina. The supermarket is directly opposite, the Old Town is approximately 10–15 minutes away on foot, and practical westbound access keeps the Atlantic coast within easy reach.',
          'A reserved underground space removes the daily question of where to leave your own car at home; it does not promise parking at beaches or in town. Inside, heating, hot-and-cold air-conditioning, the fireplace, kitchen, washing machine, Wi-Fi and living space support the routines of a stay measured in weeks.',
          'That is the winter proposition: a milder southern season outside, a comfortable real home inside and normal Tarifa life close by. Winter is not the lesser version of Tarifa. It is a different version — and for some guests, perhaps the more rewarding one.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue with the practical detail',
      title: 'Plan the winter stay without repeating the same guide',
      links: [
        { token: 'tarifa_weather', label: 'Weather & Seasons', text: 'Official climate evidence, Levante, Poniente and the limits of any seasonal expectation.' },
        { token: 'tarifa_daily_life', label: 'Daily Life & Services', text: 'Groceries, healthcare, normal errands and the full coworking detail for a longer stay.' },
        { token: 'tarifa_beaches_authority', label: 'Beaches & coast', text: 'Choose between the urban shore and the wider Atlantic coast for the day you have.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & watersports', text: 'Technical wind, safety and water-sports planning belongs in the specialist guide.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'See the home when its winter role and practical setting are clear.' }
      ]
    },
    sources: {
      eyebrow: 'Evidence and perspective',
      title: 'Official facts, clearly separated from host experience',
      intro: 'Climate, viewpoint, coast and coworking facts use current official or first-party sources. The quieter, more familiar winter feeling is explicitly Robert’s host perspective.',
      checked: 'Sources reviewed 13 August 2026',
      links: [
        { label: 'AEMET · Tarifa climate normals', text: 'Official monthly temperature, rainfall and rain-day averages for station 6001.', href: sourceHrefs.tarifaNormals },
        { label: 'Turismo de Tarifa · parks and walking routes', text: 'Official viewpoint context, including Africa and the Atlas Mountains on clear days.', href: sourceHrefs.tarifaViewpoints },
        { label: 'Turismo de Tarifa · beaches', text: 'Official orientation to Tarifa’s Atlantic and Mediterranean coastline.', href: sourceHrefs.tarifaBeaches },
        { label: 'TAF CoWorking · official information', text: 'Current professional work infrastructure near AMARA.', href: sourceHrefs.taf }
      ]
    },
    closing: {
      eyebrow: 'Stay long enough to feel the difference',
      title: 'Let winter be its own version of Tarifa',
      body: 'Choose it for usable light, Atlantic space, a calmer town rhythm and a home that remains comfortable when the weather changes. Start with Tarifa’s location or continue to AMARA Family & Surf.',
      locationLabel: 'Explore Tarifa’s location',
      propertyLabel: 'View AMARA Family & Surf'
    }
  },
  de: {
    navLabel: 'Winteraufenthalte',
    hero: {
      eyebrow: 'Ein persönlicher Winterguide für Tarifa',
      title: 'Der Winter ist nicht die kleinere Version von Tarifa',
      standfirst: 'Der Sommer bringt Intensität. Im Winter entstehen Freiräume für Tageslicht, Atlantikspaziergänge, wechselndes Wetter und den normalen Rhythmus des Ortes. Wenn ihr länger als ein paar Tage bleiben könnt, erlebt ihr möglicherweise gerade diese ruhigere Seite als die wertvollere.',
      note: 'Geschrieben aus Roberts eigener Erfahrung als Gastgeber. Persönliche Beobachtungen beschreiben, wie wir den Winter über die Jahre erlebt haben; sie sind kein Versprechen für jeden Tag und jeden Aufenthalt.',
      updated: 'Gastgeberperspektive und Quellen geprüft im August 2026',
      mark: 'WINTER'
    },
    facts: [
      { label: 'Gastgeberperspektive', value: 'Eine von Roberts liebsten Zeiten in Tarifa' },
      { label: 'Winterrhythmus', value: 'Mehr nutzbares Tageslicht als in Nordeuropa' },
      { label: 'Zeit am Atlantik', value: 'Gehen · Wellen · Sonnenuntergänge · frische Luft' },
      { label: 'Zu Hause', value: 'Heizung · Kamin · Küche · Waschmaschine' }
    ],
    sections: [
      {
        id: 'when-summer-leaves', eyebrow: '01 · Ein anderes Tarifa', title: 'Tarifa, wenn der Sommer vorbei ist', paragraphs: [
          'Der Winter war für Robert schon immer eine der liebsten Zeiten in Tarifa. Nach dem sehr flüchtigen Sommerrhythmus wirkt der Ort auf uns kleiner, ruhiger und vertrauter — nicht leer und auch nicht wie ein Ort, in dem fast nur Einheimische leben.',
          'Während eines längeren Winteraufenthalts begegnen euch in Cafés, im Ort, am Strand und in alltäglichen Abläufen oft dieselben Gesichter wieder. Das ist eine persönliche Beobachtung und kein Versprechen, dass ihr Freundschaften schließt oder dieselbe soziale Erfahrung macht.',
          'Der praktische Unterschied ist Zeit. Einige Sommertage drehen sich leicht um Höhepunkte; in mehreren Winterwochen kann Tarifa vorübergehend zum eigenen Alltag werden. AMARA in La Marina gibt diesem langsameren Rhythmus ein richtiges Zuhause statt nur eine Basis für einen Kurztrip.'
        ]
      },
      {
        id: 'northern-winter', eyebrow: '02 · Süden ohne falsche Versprechen', title: 'Dem nordeuropäischen Winter entkommen', paragraphs: [
          'Tarifa liegt weit südlich der nordeuropäischen Märkte, aus denen viele Gäste anreisen. Der Winter kann milde, helle Tage und mehr nutzbares Tageslicht bringen, während die Tage im Norden oft kürzer und kälter sind. Trotzdem bleibt es Winter: Regen, Wind und kühle Abende gehören zur Jahreszeit.',
          'Der Unterschied zählt besonders, wenn ihr genug Zeit habt, die guten Stunden zu nutzen, statt von jedem Tag Sommerwetter zu erwarten. Ein später Spaziergang, Mittagessen draußen an einem milden Tag oder Zeit an der Küste können möglich sein; nichts davon ist eine Wettergarantie.',
          'Für mehrere Wochen verbindet AMARA diese südliche Lage mit Heizung, Klimaanlage zum Kühlen und Heizen sowie einem Holzkamin. Es geht nicht um endlose Sonne, sondern um mehr Chancen draußen und ein komfortables Zuhause, wenn der Tag umschlägt.'
        ]
      },
      {
        id: 'winter-light', eyebrow: '03 · Horizont und Tageslicht', title: 'Winterlicht, Afrika und der weite Blick', paragraphs: [
          'Tarifas offizielle Tourismusinformationen beschreiben Blicke nach Afrika vom Ort und von der Küste; an klaren Tagen sind vom Mirador de la Peña sogar die Atlasberge zu sehen. Diese Geografie ist zu jeder Jahreszeit real, die Sicht hängt immer von den Bedingungen des Tages ab.',
          'In Roberts eigener Wintererfahrung kann die Klarheit manchmal besonders eindrucksvoll wirken: tiefes Licht über dem Atlantik, die afrikanische Küste am Horizont und Sonnenuntergänge, die einem normalen Nachmittag ein klares Ziel geben. Das ist Gastgebererfahrung, keine allgemeine Wetterregel für Winterluft.',
          'Bei einem längeren Aufenthalt verändert nutzbares Nachmittagslicht den Tag. Arbeit oder Erledigungen können vor einem Küstenspaziergang, Aussichtspunkt oder Sonnenuntergang enden; AMARAs Atlantikterrasse und der kurze Weg Richtung Westküste halten diesen Horizont nah.'
        ]
      },
      {
        id: 'changing-days', eyebrow: '04 · Bleibt mit dem Tag flexibel', title: 'Wind, Sonne und wechselnde Tage', paragraphs: [
          'Tarifa bleibt im Winter wechselhaft. Der Levante kann stark sein, Atlantikfronten können Regen bringen, dazwischen liegen ruhige oder milde sonnige Phasen. Die Klimadetails gehören in Wetter & Jahreszeiten; kein Winterguide sollte daraus eine Tagesprognose machen.',
          'Ein längerer Aufenthalt gibt euch einen Vorteil: Küste, Ort, Arbeit oder Ausfahrt lassen sich in den besseren Teil der Vorhersage legen. Es geht nicht darum, das Wetter zu besiegen, sondern darum, dass nicht ein einzelner Tag die ganze Reise tragen muss.',
          'Bei AMARA unterstützen die vollständige Küche, Heizung und der Kamin die Zeit drinnen. Reservierte Tiefgarage und praktische Ausfahrt Richtung Westen helfen, ein helleres Zeitfenster an der Küste zu nutzen, ohne freie Parkplätze an anderen Orten zu versprechen.'
        ]
      },
      {
        id: 'quieter-tarifa', eyebrow: '05 · Vertrautheit statt Intensität', title: 'Die ruhigere Seite von Tarifa', paragraphs: [
          'Der Sommer kann anonym und sehr flüchtig wirken. Nach unserer Wintererfahrung gibt es meist weniger Hochsaisondruck und mehr Raum für spontane Alltagsentscheidungen. Trotzdem kann ein beliebtes Restaurant voll sein, ein Parkplatz anderswo schwer zu finden und kein Strand wird als leer versprochen.',
          'Für uns verändert sich vor allem die Vertrautheit. Dieselben Menschen wieder im Café, beim Weg durch den Ort oder am Atlantik zu sehen, kann Tarifa persönlicher und verbundener wirken lassen — selbst wenn es nur bei einem Nicken oder kurzen Austausch bleibt.',
          'Von AMARA erreicht ihr die Altstadt in ungefähr 10–15 Minuten zu Fuß, die normalen Einkäufe liegen direkt gegenüber. So fließen Wintertage natürlich zwischen Zuhause und Ort, ohne dass jede Mahlzeit, jeder Weg oder jede Besorgung zum geplanten Programmpunkt wird.'
        ]
      },
      {
        id: 'winter-day', eyebrow: '06 · Ein Tag mit Spielraum', title: 'Ein Wintertag in Tarifa', paragraphs: [
          'Beginnt mit der Vorhersage statt mit einem starren Ablauf. Auf das Frühstück zu Hause können ein Weg durch den Ort oder einige konzentrierte Stunden folgen; das beste Zeitfenster draußen bleibt dann für Los Lances, die Westküste oder einen Aussichtspunkt frei.',
          'Im Sommer trägt der Strand oft die Intensität des Tages. Im Winter schätzt Robert die Atlantikküste anders: für Weite, Bewegung, frische Luft, Wellen, Landschaft und Sonnenuntergang. Sie kann ruhig wirken, ohne deshalb als verlassen beschrieben zu werden.',
          'Wenn das Licht geht, führt der Tag nach drinnen. Einkäufe von gegenüber, eine richtige Küche, komfortabler Wohnraum und Wärme zählen im Winter mehr, denn der Abend zu Hause ist keine Lücke zwischen Aktivitäten, sondern Teil des Aufenthalts.'
        ]
      },
      {
        id: 'home-matters', eyebrow: '07 · Komfort wird wesentlich', title: 'Warum das Zuhause im Winter wichtiger wird', paragraphs: [
          'Ein Sommeraufenthalt kann fast vollständig draußen stattfinden. Im Winter wird die Qualität des Zuhauses Teil des Reiseziels: zum Lesen, Kochen, bei Bedarf Arbeiten, Trocknen von Kleidung nach wechselndem Wetter und für einen Abend, an dem ihr nicht ausgehen müsst.',
          'Für AMARA Family & Surf sind WLAN, Heizung, Klimaanlage zum Kühlen und Heizen, Holzkamin, vollständige Küche, Waschmaschine und komfortable Wohnbereiche bestätigt. Das sind praktische Eigenschaften, keine inszenierte Stimmung.',
          'Über mehrere Wochen schaffen diese Grundlagen Kontinuität. Ihr könnt normal kochen, Wäsche waschen und das Haus am Abend wärmen. So fühlt sich ein Tag mit gemischtem Wetter wie echtes Winterleben an und nicht wie verlorene Urlaubszeit.'
        ]
      },
      {
        id: 'who-enjoys-winter', eyebrow: '08 · Für wen diese Jahreszeit passt', title: 'Wer Tarifa im Winter genießen wird', paragraphs: [
          'Der Winter kann zu Paaren, längeren Aufenthalten, einer Pause von dunkleren nördlichen Monaten, Surf- oder Kite-Reisenden und Menschen passen, die ruhiges Ortsleben der Hochsaisonintensität vorziehen. Er belohnt Flexibilität mehr als eine Liste garantierter Bedingungen.',
          'Wenn ihr während eines längeren Aufenthalts teilweise arbeiten müsst, ist die Kombination praktisch: ein komfortables privates Zuhause für konzentrierte Stunden, professionelle Coworking-Infrastruktur beim nahe gelegenen TAF nach Bedarf und danach Tageslicht, Küste und Ortsleben. Wir setzen nicht voraus, dass alle Wintergäste arbeiten.',
          'Wenn ihr das wärmste Meer, dichte Hochsaisonenergie, die breiteste saisonale Öffnung oder eine Reise fast nur für Strandhitze sucht, ist der Sommer wahrscheinlich passender. Im Winter müsst ihr wechselnde Tage, Komfort drinnen und eine langsamere Beziehung zum Ort schätzen.'
        ]
      },
      {
        id: 'amara-la-marina', eyebrow: '09 · Eure Winterbasis', title: 'Winter bei AMARA in La Marina', paragraphs: [
          'AMARA Family & Surf liegt an der Mar Adriático 29 in La Marina. Der Supermarkt ist direkt gegenüber, die Altstadt ungefähr 10–15 Minuten zu Fuß entfernt und die praktische Ausfahrt Richtung Westen hält die Atlantikküste gut erreichbar.',
          'Ein reservierter Tiefgaragenplatz klärt, wo euer eigenes Auto zu Hause steht; er verspricht keine Parkmöglichkeit an Stränden oder in der Stadt. Drinnen unterstützen Heizung, Klimaanlage, Kamin, Küche, Waschmaschine, WLAN und Wohnraum Routinen über mehrere Wochen.',
          'Das ist die Winteridee: draußen ein milderer südlicher Winter, drinnen ein komfortables echtes Zuhause und das normale Tarifa ganz nah. Der Winter ist nicht die kleinere Version von Tarifa. Er ist eine andere — und für manche Gäste vielleicht die lohnendere.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiter zu den praktischen Details',
      title: 'Plant den Winteraufenthalt ohne denselben Guide zu wiederholen',
      links: [
        { token: 'tarifa_weather', label: 'Wetter & Jahreszeiten', text: 'Offizielle Klimadaten, Levante, Poniente und die Grenzen jeder saisonalen Erwartung.' },
        { token: 'tarifa_daily_life', label: 'Alltag & Versorgung', text: 'Einkaufen, medizinische Versorgung, normale Erledigungen und alle Coworking-Details.' },
        { token: 'tarifa_beaches_authority', label: 'Strände & Küste', text: 'Wählt für den jeweiligen Tag zwischen Stadtküste und weiter Atlantikküste.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & Wassersport', text: 'Technische Wind-, Sicherheits- und Wassersportplanung steht im Spezialguide.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'Seht euch das Zuhause an, wenn seine Winterrolle und Lage klar sind.' }
      ]
    },
    sources: {
      eyebrow: 'Belege und Perspektive',
      title: 'Offizielle Fakten, klar getrennt von Gastgebererfahrung',
      intro: 'Klima-, Aussichtspunkt-, Küsten- und Coworking-Angaben nutzen aktuelle offizielle oder direkte Quellen. Das ruhigere, vertrautere Wintergefühl ist ausdrücklich Roberts Perspektive als Gastgeber.',
      checked: 'Quellen geprüft am 13. August 2026',
      links: [
        { label: 'AEMET · Klimanormalwerte Tarifa', text: 'Offizielle Monatswerte für Temperatur, Niederschlag und Regentage an Station 6001.', href: sourceHrefs.tarifaNormals },
        { label: 'Turismo de Tarifa · Naturparks und Wege', text: 'Offizielle Aussichtsinformationen, einschließlich Afrika und Atlas an klaren Tagen.', href: sourceHrefs.tarifaViewpoints },
        { label: 'Turismo de Tarifa · Strände', text: 'Offizielle Orientierung zur Atlantik- und Mittelmeerküste von Tarifa.', href: sourceHrefs.tarifaBeaches },
        { label: 'TAF CoWorking · offizielle Information', text: 'Aktuelle professionelle Arbeitsinfrastruktur nahe AMARA.', href: sourceHrefs.taf }
      ]
    },
    closing: {
      eyebrow: 'Bleibt lange genug, um den Unterschied zu spüren',
      title: 'Lasst den Winter seine eigene Version von Tarifa sein',
      body: 'Wählt ihn für nutzbares Licht, Weite am Atlantik, einen ruhigeren Ortsrhythmus und ein Zuhause, das auch bei Wetterwechsel komfortabel bleibt. Beginnt mit Tarifas Lage oder geht weiter zu AMARA Family & Surf.',
      locationLabel: 'Tarifas Lage entdecken',
      propertyLabel: 'AMARA Family & Surf ansehen'
    }
  },
  es: {
    navLabel: 'Estancias de invierno',
    hero: {
      eyebrow: 'Una guía personal del invierno en Tarifa',
      title: 'El invierno no es una versión menor de Tarifa',
      standfirst: 'El verano trae intensidad. El invierno deja espacio para la luz, los paseos junto al Atlántico, el tiempo cambiante y el ritmo normal de la localidad. Para quienes pueden quedarse más de unos días, esa versión tranquila quizá sea la más gratificante.',
      note: 'Escrita desde la experiencia directa de Robert como anfitrión. Las observaciones personales cuentan cómo hemos vivido el invierno a lo largo del tiempo; no prometen que cada día o cada estancia sean iguales.',
      updated: 'Perspectiva del anfitrión y fuentes revisadas en agosto de 2026',
      mark: 'INVIERNO'
    },
    facts: [
      { label: 'Perspectiva del anfitrión', value: 'Una de las épocas favoritas de Robert en Tarifa' },
      { label: 'Ritmo de invierno', value: 'Más luz aprovechable que en el norte de Europa' },
      { label: 'Tiempo atlántico', value: 'Caminar · olas · atardeceres · aire libre' },
      { label: 'En casa', value: 'Calefacción · chimenea · cocina · lavadora' }
    ],
    sections: [
      {
        id: 'when-summer-leaves', eyebrow: '01 · Otra Tarifa', title: 'Tarifa cuando termina el verano', paragraphs: [
          'El invierno siempre ha sido una de las épocas favoritas de Robert en Tarifa. Tras el ritmo muy transitorio del verano, la localidad nos parece más pequeña, tranquila y familiar; no vacía ni habitada principalmente por gente local.',
          'Durante una estancia larga de invierno suelen reaparecer caras conocidas en cafeterías, por el centro, en la playa y en las rutinas diarias. Es una observación de primera mano, no una promesa de que haréis amigos o viviréis la misma experiencia social.',
          'La consecuencia práctica es el tiempo. Unos días de verano pueden girar alrededor de los lugares imprescindibles; varias semanas de invierno permiten vivir Tarifa temporalmente. AMARA, en La Marina, ofrece una casa real para ese ritmo lento, no solo una base para una escapada.'
        ]
      },
      {
        id: 'northern-winter', eyebrow: '02 · Sur sin falsas promesas', title: 'Escapar del invierno del norte', paragraphs: [
          'Tarifa está muy al sur de los mercados del norte de Europa desde los que viajan muchos huéspedes. El invierno puede traer días suaves, luminosos y con más horas aprovechables, mientras que en el norte suelen ser más cortos y fríos. Sigue siendo invierno: lluvia, viento y noches frescas forman parte de la estación.',
          'La diferencia se aprecia sobre todo cuando tenéis tiempo para aprovechar las mejores horas sin exigir que cada día se comporte como verano. Un paseo tardío, comer fuera en un día suave o pasar tiempo en la costa pueden ser posibles; nunca deben planificarse como garantía meteorológica.',
          'Para varias semanas, AMARA une este entorno meridional con calefacción, aire acondicionado con frío y calor y chimenea de leña. La propuesta no es sol infinito, sino más ocasiones para salir y una casa cómoda a la que volver cuando cambia el día.'
        ]
      },
      {
        id: 'winter-light', eyebrow: '03 · Horizonte y luz', title: 'Luz de invierno, África y amplitud de vistas', paragraphs: [
          'La información oficial de Turismo de Tarifa describe vistas hacia África desde el núcleo y la costa, e incluso hacia el Atlas desde La Peña en días claros. Esa geografía existe todo el año; la visibilidad depende siempre de las condiciones concretas.',
          'En la experiencia invernal de Robert, la claridad puede resultar a veces especialmente llamativa: luz baja sobre el Atlántico, la costa africana en el horizonte y atardeceres que dan un destino claro a una tarde normal. Es memoria de anfitrión, no una regla meteorológica sobre el aire invernal.',
          'En una estancia larga, la luz útil de la tarde cambia el día. El trabajo o los recados pueden terminar antes de un paseo costero, un mirador o la puesta de sol; la terraza de AMARA orientada al Atlántico y la salida hacia poniente mantienen ese horizonte cerca.'
        ]
      },
      {
        id: 'changing-days', eyebrow: '04 · Flexibilidad diaria', title: 'Viento, sol y días cambiantes', paragraphs: [
          'Tarifa continúa variable en invierno. El Levante puede soplar fuerte, los frentes atlánticos pueden traer lluvia y entre ambos aparecen periodos tranquilos o suaves y soleados. Los detalles climáticos pertenecen a Tiempo y estaciones; esta página no convierte patrones en pronósticos.',
          'Una estancia larga ofrece una ventaja: podéis mover costa, pueblo, trabajo o excursión hacia el mejor tramo de la previsión. No se trata de vencer al tiempo, sino de evitar que un solo día tenga que sostener todo el viaje.',
          'En AMARA, la cocina completa, la calefacción y la chimenea respaldan la parte interior de esa flexibilidad. El garaje subterráneo reservado y la salida práctica hacia poniente ayudan a aprovechar un claro sin prometer aparcamiento fácil en otros destinos.'
        ]
      },
      {
        id: 'quieter-tarifa', eyebrow: '05 · Familiaridad frente a intensidad', title: 'El lado más tranquilo de Tarifa', paragraphs: [
          'El verano puede resultar anónimo y muy transitorio. En nuestra experiencia invernal suele haber menos presión de temporada alta y más margen para decisiones espontáneas. Aun así, un restaurante popular puede llenarse, aparcar en otro lugar puede ser difícil y nunca prometemos playas vacías.',
          'Lo que más cambia para nosotros es la familiaridad. Volver a ver a las mismas personas en una cafetería, por el centro o junto al Atlántico puede hacer que Tarifa se sienta más personal y conectada, aunque el encuentro no pase de un saludo.',
          'Desde AMARA, el casco antiguo está a unos 10–15 minutos andando y las compras diarias, justo enfrente. Así, los días de invierno fluyen entre casa y localidad sin convertir cada comida, paseo o recado en un acontecimiento programado.'
        ]
      },
      {
        id: 'winter-day', eyebrow: '06 · Un día con margen', title: 'Un día de invierno en Tarifa', paragraphs: [
          'Empezad por la previsión, no por un itinerario rígido. El desayuno en casa puede continuar con un paseo por el centro o unas horas de concentración; la mejor ventana exterior queda entonces para Los Lances, la costa occidental o un mirador.',
          'En verano, la playa suele concentrar la intensidad del día. En invierno, Robert valora la costa atlántica de otra forma: por el espacio, el movimiento, el aire fresco, las olas, el paisaje y el atardecer. Puede transmitir calma sin describirla como desierta.',
          'Cuando termina la luz, el día vuelve al interior. Compras de enfrente, una cocina de verdad, espacio cómodo para estar y calor importan más en invierno: la noche en casa no es un hueco entre actividades, sino parte de la estancia.'
        ]
      },
      {
        id: 'home-matters', eyebrow: '07 · El confort se vuelve esencial', title: 'Por qué la casa importa más en invierno', paragraphs: [
          'Una estancia de verano puede girar casi por completo alrededor del exterior. En invierno, la calidad de la vivienda forma parte del destino: leer, cocinar, trabajar si hace falta, secar la ropa tras un día cambiante o pasar una noche sin necesidad de salir.',
          'AMARA Family & Surf tiene confirmados Wi-Fi, calefacción, aire acondicionado con frío y calor, chimenea de leña, cocina completa, lavadora y zonas de estar cómodas. Son prestaciones prácticas, no adjetivos decorativos.',
          'Durante varias semanas, esas bases crean continuidad. Podéis cocinar con normalidad, mantener la colada al día y calentar la casa para la noche. Así, una jornada de tiempo mixto forma parte de la vida de invierno en vez de sentirse como vacaciones perdidas.'
        ]
      },
      {
        id: 'who-enjoys-winter', eyebrow: '08 · Para quién es esta estación', title: 'Quién disfrutará Tarifa en invierno', paragraphs: [
          'El invierno puede gustar a parejas, estancias largas, personas que descansan de los meses oscuros del norte, viajeros de surf o kite y quienes prefieren una vida local tranquila a la intensidad máxima. Recompensa la flexibilidad más que una lista de condiciones garantizadas.',
          'Para quienes necesiten trabajar durante parte de una estancia larga, la combinación es práctica: una casa privada cómoda para concentrarse, infraestructura profesional de coworking en el cercano TAF cuando haga falta y luz, costa y vida urbana después. No suponemos que todos los huéspedes de invierno trabajen.',
          'Quienes busquen el mar más cálido, mucha energía de temporada alta, la máxima oferta estacional o un viaje casi íntegramente de calor y playa quizá prefieran el verano. El invierno pide valorar los días cambiantes, el confort interior y una relación más lenta con Tarifa.'
        ]
      },
      {
        id: 'amara-la-marina', eyebrow: '09 · Vuestra base de invierno', title: 'El invierno en AMARA, en La Marina', paragraphs: [
          'AMARA Family & Surf está en Mar Adriático 29, en La Marina. El supermercado queda justo enfrente, el casco antiguo a unos 10–15 minutos andando y la salida práctica hacia poniente mantiene cerca la costa atlántica.',
          'La plaza reservada en el garaje subterráneo resuelve dónde dejar vuestro coche en casa; no promete estacionamiento en playas ni en el centro. Dentro, calefacción, aire acondicionado, chimenea, cocina, lavadora, Wi-Fi y espacio de estar respaldan rutinas de varias semanas.',
          'Esa es la propuesta invernal: una estación meridional más suave fuera, una casa real y cómoda dentro y la vida normal de Tarifa cerca. El invierno no es una versión menor de Tarifa. Es una versión distinta y, para algunos huéspedes, quizá la más gratificante.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continuad con el detalle práctico',
      title: 'Planificad el invierno sin repetir la misma guía',
      links: [
        { token: 'tarifa_weather', label: 'Tiempo y estaciones', text: 'Datos climáticos oficiales, Levante, Poniente y límites de cualquier expectativa estacional.' },
        { token: 'tarifa_daily_life', label: 'Vida diaria y servicios', text: 'Compras, atención sanitaria, recados y toda la información de coworking.' },
        { token: 'tarifa_beaches_authority', label: 'Playas y costa', text: 'Elegid entre la costa urbana y el Atlántico occidental para el día concreto.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Viento y deportes acuáticos', text: 'La planificación técnica de viento, seguridad y agua pertenece a la guía especializada.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'Ved la casa cuando su función invernal y su ubicación hayan quedado claras.' }
      ]
    },
    sources: {
      eyebrow: 'Evidencia y perspectiva',
      title: 'Datos oficiales separados de la experiencia del anfitrión',
      intro: 'Los datos de clima, miradores, costa y coworking usan fuentes oficiales o directas actuales. La sensación de un invierno tranquilo y familiar es expresamente la perspectiva de Robert como anfitrión.',
      checked: 'Fuentes revisadas el 13 de agosto de 2026',
      links: [
        { label: 'AEMET · valores normales de Tarifa', text: 'Medias oficiales mensuales de temperatura, precipitación y días de lluvia de la estación 6001.', href: sourceHrefs.tarifaNormals },
        { label: 'Turismo de Tarifa · parques y senderos', text: 'Información oficial de vistas, incluida África y el Atlas en días claros.', href: sourceHrefs.tarifaViewpoints },
        { label: 'Turismo de Tarifa · playas', text: 'Orientación oficial sobre el litoral atlántico y mediterráneo.', href: sourceHrefs.tarifaBeaches },
        { label: 'TAF CoWorking · información oficial', text: 'Infraestructura profesional de trabajo actual cerca de AMARA.', href: sourceHrefs.taf }
      ]
    },
    closing: {
      eyebrow: 'Quedaos el tiempo suficiente para sentir la diferencia',
      title: 'Dejad que el invierno sea su propia versión de Tarifa',
      body: 'Elegidlo por la luz aprovechable, el espacio atlántico, un ritmo más tranquilo y una casa cómoda cuando cambia el tiempo. Empezad por la ubicación de Tarifa o continuad hasta AMARA Family & Surf.',
      locationLabel: 'Descubrir la ubicación de Tarifa',
      propertyLabel: 'Ver AMARA Family & Surf'
    }
  },
  nl: {
    navLabel: 'Winterverblijven',
    hero: {
      eyebrow: 'Een persoonlijke wintergids voor Tarifa',
      title: 'De winter is geen mindere versie van Tarifa',
      standfirst: 'De zomer brengt intensiteit. De winter geeft ruimte aan daglicht, wandelingen langs de Atlantische Oceaan, wisselend weer en het gewone ritme van de stad. Wie langer dan enkele dagen kan blijven, ervaart die rustigere versie misschien als de meest waardevolle.',
      note: 'Geschreven vanuit Roberts eigen ervaring als host. Persoonlijke observaties beschrijven hoe de winter door de jaren heen voor ons voelde; ze beloven niet dat elke dag of elk verblijf hetzelfde is.',
      updated: 'Hostperspectief en bronnen gecontroleerd in augustus 2026',
      mark: 'WINTER'
    },
    facts: [
      { label: 'Hostperspectief', value: 'Een van Roberts favoriete periodes in Tarifa' },
      { label: 'Winterritme', value: 'Meer bruikbaar daglicht dan in Noord-Europa' },
      { label: 'Tijd aan de Atlantische kust', value: 'Wandelen · golven · zonsondergang · buitenlucht' },
      { label: 'Thuis', value: 'Verwarming · open haard · keuken · wasmachine' }
    ],
    sections: [
      {
        id: 'when-summer-leaves', eyebrow: '01 · Een ander Tarifa', title: 'Tarifa wanneer de zomer vertrekt', paragraphs: [
          'De winter is altijd een van Roberts favoriete periodes in Tarifa geweest. Na het zeer vluchtige zomerritme voelt de stad voor ons kleiner, rustiger en vertrouwder — niet leeg en ook niet alsof er vooral inwoners zouden zijn.',
          'Tijdens een langer winterverblijf verschijnen bekende gezichten geregeld opnieuw in cafés, in de stad, op het strand en binnen dagelijkse routines. Dat is een persoonlijke observatie, geen belofte dat jullie vrienden maken of dezelfde sociale ervaring krijgen.',
          'Het praktische verschil is tijd. Enkele zomerdagen draaien gemakkelijk om hoogtepunten; in meerdere winterweken kan Tarifa tijdelijk een plek worden waar jullie leven. AMARA in La Marina geeft dat langzamere ritme een echt thuis in plaats van alleen een uitvalsbasis voor een korte reis.'
        ]
      },
      {
        id: 'northern-winter', eyebrow: '02 · Zuiden zonder valse belofte', title: 'Ontsnappen aan de Noord-Europese winter', paragraphs: [
          'Tarifa ligt ver ten zuiden van de Noord-Europese markten waar veel gasten vandaan komen. De winter kan milde, heldere dagen en meer bruikbaar daglicht brengen, terwijl noordelijke dagen vaak korter en kouder zijn. Het blijft winter: regen, wind en koele avonden horen bij het seizoen.',
          'Het verschil telt vooral wanneer jullie tijd hebben om de goede uren te gebruiken zonder te verwachten dat elke dag zomers is. Een late wandeling, buiten lunchen op een milde dag of tijd aan de kust kan mogelijk zijn; niets daarvan is een weergarantie.',
          'Voor enkele weken combineert AMARA die zuidelijke ligging met verwarming, airconditioning voor koelen en verwarmen en een houtgestookte open haard. Het verhaal is geen eindeloze zon, maar meer kansen om buiten te zijn en een comfortabel huis wanneer de dag omslaat.'
        ]
      },
      {
        id: 'winter-light', eyebrow: '03 · Horizon en daglicht', title: 'Winterlicht, Afrika en het verre uitzicht', paragraphs: [
          'De officiële toeristische informatie van Tarifa beschrijft uitzichten richting Afrika vanuit de stad en vanaf de kust, en op heldere dagen zelfs naar het Atlasgebergte vanaf La Peña. Die geografie is er elk seizoen; zicht hangt altijd af van de omstandigheden.',
          'In Roberts eigen winterervaring kan de helderheid soms bijzonder sterk overkomen: laag licht over de Atlantische Oceaan, de Afrikaanse kust aan de horizon en zonsondergangen die een gewone middag richting geven. Dat is een herinnering van de host, geen algemene meteorologische regel.',
          'Tijdens een langer verblijf verandert bruikbaar middaglicht de dag. Werk of boodschappen kunnen eindigen voor een kustwandeling, uitzichtpunt of zonsondergang; AMARA’s terras aan de Atlantische zijde en de eenvoudige route westwaarts houden die horizon dichtbij.'
        ]
      },
      {
        id: 'changing-days', eyebrow: '04 · Houd ruimte in de dag', title: 'Wind, zon en wisselende dagen', paragraphs: [
          'Tarifa blijft in de winter veranderlijk. De Levante kan sterk zijn, Atlantische fronten kunnen regen brengen en daartussen liggen rustige of milde zonnige perioden. De klimaatdetails staan bij Weer & seizoenen; dit winterverhaal maakt van patronen geen dagvoorspelling.',
          'Een langer verblijf geeft een voordeel: kust, stad, werk of autorit kunnen naar het betere deel van de verwachting verschuiven. Het doel is niet het weer te verslaan, maar te voorkomen dat één dag de hele reis moet dragen.',
          'Bij AMARA ondersteunen de volledige keuken, verwarming en open haard de tijd binnen. De gereserveerde ondergrondse parking en praktische route westwaarts helpen om een helder moment aan de kust te gebruiken zonder vrije parking elders te beloven.'
        ]
      },
      {
        id: 'quieter-tarifa', eyebrow: '05 · Vertrouwdheid boven intensiteit', title: 'De rustigere kant van Tarifa', paragraphs: [
          'De zomer kan anoniem en zeer vluchtig aanvoelen. In onze winterervaring is er doorgaans minder hoogseizoendruk en meer ruimte voor spontane keuzes. Toch kan een populair restaurant vol zijn, parkeren elders lastig blijven en wordt geen strand als leeg beloofd.',
          'Wat voor ons het meest verandert, is vertrouwdheid. Dezelfde mensen opnieuw zien in een café, tijdens een wandeling door de stad of langs de Atlantische Oceaan kan Tarifa persoonlijker en meer verbonden laten voelen, ook als het bij een knikje of kort gesprek blijft.',
          'Vanaf AMARA is de oude stad ongeveer 10–15 minuten lopen en liggen de dagelijkse boodschappen direct aan de overkant. Zo bewegen winterdagen natuurlijk tussen thuis en stad zonder dat elke maaltijd, wandeling of boodschap een gepland evenement wordt.'
        ]
      },
      {
        id: 'winter-day', eyebrow: '06 · Een dag met speelruimte', title: 'Een winterdag in Tarifa', paragraphs: [
          'Begin met de weersverwachting in plaats van een strak schema. Een ontbijt thuis kan overgaan in een stadswandeling of enkele geconcentreerde uren; het beste buitenmoment blijft dan voor Los Lances, de westkust of een uitzichtpunt.',
          'In de zomer draagt het strand vaak de intensiteit van de dag. In de winter waardeert Robert de Atlantische kust anders: om ruimte, beweging, frisse lucht, golven, landschap en zonsondergang. De kust kan kalm voelen zonder verlaten te worden genoemd.',
          'Wanneer het licht verdwijnt, keert de dag naar binnen. Boodschappen van de overkant, een echte keuken, comfortabele leefruimte en warmte tellen meer in de winter: de avond thuis is geen opening tussen activiteiten, maar onderdeel van het verblijf.'
        ]
      },
      {
        id: 'home-matters', eyebrow: '07 · Comfort wordt essentieel', title: 'Waarom het huis in de winter belangrijker is', paragraphs: [
          'Een zomervakantie kan bijna volledig buiten plaatsvinden. In de winter wordt de kwaliteit van het huis onderdeel van de bestemming: lezen, koken, zo nodig werken, kleding laten drogen na wisselend weer en een avond doorbrengen zonder uit te hoeven.',
          'AMARA Family & Surf heeft bevestigde wifi, verwarming, airconditioning voor koelen en verwarmen, een houtgestookte open haard, volledige keuken, wasmachine en comfortabele leefruimtes. Dat zijn praktische kenmerken, geen sfeervolle bijvoeglijke naamwoorden.',
          'Over enkele weken zorgen die basisvoorzieningen voor continuïteit. Jullie kunnen normaal koken, de was bijhouden en het huis voor de avond verwarmen. Zo voelt gemengd weer als onderdeel van het winterleven en niet als verloren vakantietijd.'
        ]
      },
      {
        id: 'who-enjoys-winter', eyebrow: '08 · Voor wie dit seizoen werkt', title: 'Wie Tarifa in de winter zal waarderen', paragraphs: [
          'De winter kan aantrekkelijk zijn voor stellen, langere verblijven, gasten die ontsnappen aan donkere noordelijke maanden, surf- of kitereizigers en mensen die kalm stadsleven verkiezen boven hoogseizoenintensiteit. Flexibiliteit wordt meer beloond dan een lijst gegarandeerde omstandigheden.',
          'Voor gasten die tijdens een langer verblijf deels moeten werken, is de combinatie praktisch: een comfortabel privéhuis voor geconcentreerde uren, professionele coworkinginfrastructuur bij het nabijgelegen TAF wanneer nodig en daarna daglicht, kust en stadsleven. We nemen niet aan dat elke wintergast werkt.',
          'Wie de warmste zee, veel hoogseizoenenergie, het breedste seizoensaanbod of vooral strandwarmte zoekt, kiest mogelijk beter de zomer. De winter vraagt waardering voor veranderlijke dagen, comfort binnen en een langzamere relatie met de stad.'
        ]
      },
      {
        id: 'amara-la-marina', eyebrow: '09 · Jullie winterbasis', title: 'Winter bij AMARA in La Marina', paragraphs: [
          'AMARA Family & Surf ligt aan Mar Adriático 29 in La Marina. De supermarkt ligt direct aan de overkant, de oude stad op ongeveer 10–15 minuten lopen en de praktische route westwaarts houdt de Atlantische kust goed bereikbaar.',
          'Een gereserveerde ondergrondse plek lost op waar jullie eigen auto thuis staat; ze belooft geen parking bij stranden of in de stad. Binnen ondersteunen verwarming, airconditioning, open haard, keuken, wasmachine, wifi en leefruimte routines van meerdere weken.',
          'Dat is het winterverhaal: buiten een milder zuidelijk seizoen, binnen een comfortabel echt huis en het normale leven van Tarifa dichtbij. De winter is geen mindere versie van Tarifa. Het is een andere — en voor sommige gasten misschien de meest waardevolle.'
        ]
      }
    ],
    related: {
      eyebrow: 'Ga verder met de praktische details',
      title: 'Plan het winterverblijf zonder dezelfde gids te herhalen',
      links: [
        { token: 'tarifa_weather', label: 'Weer & seizoenen', text: 'Officiële klimaatgegevens, Levante, Poniente en de grenzen van seizoensverwachtingen.' },
        { token: 'tarifa_daily_life', label: 'Dagelijks leven & voorzieningen', text: 'Boodschappen, zorg, normale taken en alle coworkingdetails voor langer verblijf.' },
        { token: 'tarifa_beaches_authority', label: 'Stranden & kust', text: 'Kies voor de concrete dag tussen stadskust en de bredere Atlantische kust.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Wind & watersport', text: 'Technische wind-, veiligheids- en watersportplanning staat in de specialistische gids.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'Bekijk het huis wanneer zijn winterrol en praktische ligging duidelijk zijn.' }
      ]
    },
    sources: {
      eyebrow: 'Onderbouwing en perspectief',
      title: 'Officiële feiten, duidelijk gescheiden van hostervaring',
      intro: 'Klimaat-, uitzicht-, kust- en coworkingfeiten gebruiken actuele officiële of directe bronnen. Het rustigere, vertrouwdere wintergevoel is uitdrukkelijk Roberts perspectief als host.',
      checked: 'Bronnen gecontroleerd op 13 augustus 2026',
      links: [
        { label: 'AEMET · klimaatnormalen Tarifa', text: 'Officiële maandwaarden voor temperatuur, neerslag en regendagen van station 6001.', href: sourceHrefs.tarifaNormals },
        { label: 'Turismo de Tarifa · natuurparken en routes', text: 'Officiële uitzichtinformatie, inclusief Afrika en de Atlas op heldere dagen.', href: sourceHrefs.tarifaViewpoints },
        { label: 'Turismo de Tarifa · stranden', text: 'Officiële oriëntatie op de Atlantische en mediterrane kust.', href: sourceHrefs.tarifaBeaches },
        { label: 'TAF CoWorking · officiële informatie', text: 'Actuele professionele werkinfrastructuur nabij AMARA.', href: sourceHrefs.taf }
      ]
    },
    closing: {
      eyebrow: 'Blijf lang genoeg om het verschil te voelen',
      title: 'Laat de winter zijn eigen Tarifa zijn',
      body: 'Kies voor bruikbaar licht, Atlantische ruimte, een rustiger stadsritme en een huis dat comfortabel blijft wanneer het weer verandert. Begin bij de ligging van Tarifa of ga verder naar AMARA Family & Surf.',
      locationLabel: 'Ontdek de ligging van Tarifa',
      propertyLabel: 'Bekijk AMARA Family & Surf'
    }
  },
  sv: {
    navLabel: 'Vintervistelser',
    hero: {
      eyebrow: 'En personlig vinterguide till Tarifa',
      title: 'Vintern är inte en mindre version av Tarifa',
      standfirst: 'Sommaren ger intensitet. Vintern lämnar utrymme för dagsljus, promenader vid Atlanten, växlande väder och stadens vanliga rytm. För er som kan stanna längre än några dagar kan den lugnare versionen vara den mest givande.',
      note: 'Skriven utifrån Roberts egen erfarenhet som värd. Personliga observationer beskriver hur vintern har känts för oss över tid; de lovar inte att varje dag eller vistelse blir likadan.',
      updated: 'Värdperspektiv och källor granskade i augusti 2026',
      mark: 'VINTER'
    },
    facts: [
      { label: 'Värdperspektiv', value: 'En av Roberts favorittider i Tarifa' },
      { label: 'Vinterrytm', value: 'Mer användbart dagsljus än i norra Europa' },
      { label: 'Tid vid Atlanten', value: 'Promenader · vågor · solnedgång · frisk luft' },
      { label: 'Hemma', value: 'Värme · eldstad · kök · tvättmaskin' }
    ],
    sections: [
      {
        id: 'when-summer-leaves', eyebrow: '01 · Ett annat Tarifa', title: 'Tarifa när sommaren lämnar', paragraphs: [
          'Vintern har alltid varit en av Roberts favorittider i Tarifa. Efter sommarens mycket tillfälliga rytm känns staden för oss mindre, lugnare och mer välbekant — inte tom och inte som om den främst bestod av lokalbefolkning.',
          'Under en längre vintervistelse återkommer ofta bekanta ansikten på kaféer, i stan, på stranden och i vardagens rutiner. Det är en förstahandsobservation, inte ett löfte om att ni får nya vänner eller samma sociala upplevelse.',
          'Den praktiska skillnaden är tid. Några sommardagar kan byggas kring höjdpunkter; flera vinterveckor låter Tarifa bli en plats där ni tillfälligt lever. AMARA i La Marina ger den långsammare rytmen ett verkligt hem i stället för bara en bas för en kort resa.'
        ]
      },
      {
        id: 'northern-winter', eyebrow: '02 · Söder utan falska löften', title: 'Lämna den nordliga vintern en stund', paragraphs: [
          'Tarifa ligger långt söder om de nordeuropeiska marknader som många gäster reser från. Vintern kan ge milda, ljusa dagar och mer användbart dagsljus, medan dagarna i norr ofta är kortare och kallare. Det är fortfarande vinter: regn, vind och svala kvällar hör till säsongen.',
          'Skillnaden betyder mest när ni har tid att använda de bra timmarna utan att vänta er sommar varje dag. En sen promenad, lunch utomhus en mild dag eller tid vid kusten kan vara möjlig; inget av det ska planeras som en vädergaranti.',
          'För flera veckor förenar AMARA det sydliga läget med värme, luftkonditionering för kyla och värme samt en vedeldad eldstad. Berättelsen är inte oändlig sol, utan fler chanser utomhus och ett bekvämt hem när dagen ändras.'
        ]
      },
      {
        id: 'winter-light', eyebrow: '03 · Horisont och dagsljus', title: 'Vinterljus, Afrika och den långa utsikten', paragraphs: [
          'Tarifas officiella turistinformation beskriver utsikt mot Afrika från staden och kusten, och på klara dagar även Atlasbergen från La Peña. Geografin är verklig under alla årstider; sikten beror alltid på dagens förhållanden.',
          'I Roberts egen vintererfarenhet kan klarheten ibland kännas särskilt stark: lågt ljus över Atlanten, Afrikas kust vid horisonten och solnedgångar som ger en vanlig eftermiddag ett tydligt mål. Det är ett värdminne, inte en allmän meteorologisk regel.',
          'Under en längre vistelse ändrar användbart eftermiddagsljus dagens form. Arbete eller ärenden kan sluta före en kustpromenad, en utsiktsplats eller solnedgång; AMARAs terrass mot Atlanten och enkla väg västerut håller horisonten nära.'
        ]
      },
      {
        id: 'changing-days', eyebrow: '04 · Lämna utrymme i dagen', title: 'Vind, sol och skiftande dagar', paragraphs: [
          'Tarifa fortsätter att vara omväxlande på vintern. Levante kan vara stark, Atlantfronter kan ge regn och mellan dem finns lugna eller milda soliga perioder. Klimatdetaljerna hör hemma i Väder & årstider; vinterberättelsen gör inte mönster till dagsprognoser.',
          'En längre vistelse ger en fördel: kust, stad, arbete eller bilutflykt kan flyttas till den bättre delen av prognosen. Målet är inte att besegra vädret, utan att en enda dag inte ska behöva bära hela resan.',
          'På AMARA stödjer det fullständiga köket, värmen och eldstaden tiden inomhus. Reserverad underjordisk parkering och praktisk väg västerut gör det enklare att använda en ljus kustperiod utan att lova ledig parkering vid andra mål.'
        ]
      },
      {
        id: 'quieter-tarifa', eyebrow: '05 · Igenkänning framför intensitet', title: 'Tarifas lugnare sida', paragraphs: [
          'Sommaren kan kännas anonym och mycket tillfällig. Enligt vår vintererfarenhet är trycket från högsäsongen oftast lägre och det finns mer rum för spontana vardagsval. Ändå kan en populär restaurang vara full, parkering på annan plats svår och ingen strand lovas tom.',
          'Det som förändras mest för oss är igenkänningen. Att se samma människor igen på ett kafé, under en promenad i stan eller vid Atlanten kan få Tarifa att kännas mer personligt och sammanbundet, även om mötet stannar vid en nick eller kort växling.',
          'Från AMARA är det ungefär 10–15 minuters promenad till Gamla stan och vanliga inköp finns direkt mittemot. Vinterdagarna kan därför röra sig naturligt mellan hem och stad utan att varje måltid, promenad eller ärende blir ett planerat evenemang.'
        ]
      },
      {
        id: 'winter-day', eyebrow: '06 · En dag med spelrum', title: 'En vinterdag i Tarifa', paragraphs: [
          'Börja med prognosen i stället för ett fast schema. Frukost hemma kan följas av en promenad i stan eller några fokuserade timmar; det bästa fönstret utomhus kan sedan sparas till Los Lances, västkusten eller en utsiktsplats.',
          'På sommaren bär stranden ofta dagens intensitet. På vintern uppskattar Robert Atlantkusten på ett annat sätt: för utrymme, rörelse, frisk luft, vågor, landskap och solnedgång. Den kan kännas lugn utan att beskrivas som övergiven.',
          'När ljuset försvinner återvänder dagen inomhus. Inköp från andra sidan gatan, ett riktigt kök, bekvämt vardagsrum och värme betyder mer på vintern: kvällen hemma är inte en lucka mellan aktiviteter, utan en del av vistelsen.'
        ]
      },
      {
        id: 'home-matters', eyebrow: '07 · Komfort blir avgörande', title: 'Varför hemmet betyder mer på vintern', paragraphs: [
          'En sommarvistelse kan nästan helt kretsa kring utomhuslivet. På vintern blir hemmets kvalitet en del av destinationen: en plats att läsa, laga mat, arbeta vid behov, torka kläder efter skiftande väder och tillbringa en kväll utan att behöva gå ut.',
          'AMARA Family & Surf har bekräftat wifi, värme, luftkonditionering för kyla och värme, vedeldad eldstad, fullständigt kök, tvättmaskin och bekväma sällskapsytor. Det är praktiska egenskaper, inte stämningsskapande adjektiv.',
          'Över flera veckor skapar grunderna kontinuitet. Ni kan laga vanlig mat, hålla tvätten igång och värma hemmet inför kvällen. Då blir en dag med blandat väder en del av vinterlivet i stället för förlorad semestertid.'
        ]
      },
      {
        id: 'who-enjoys-winter', eyebrow: '08 · Vem säsongen passar', title: 'Vem kommer att uppskatta Tarifa på vintern', paragraphs: [
          'Vintern kan passa par, längre vistelser, gäster som tar paus från mörkare nordliga månader, surf- eller kiteresenärer och personer som föredrar lugnt stadsliv framför högsäsongens intensitet. Flexibilitet belönas mer än en lista med garanterade villkor.',
          'För gäster som behöver arbeta under en del av en längre vistelse är kombinationen praktisk: ett bekvämt privat hem för fokuserade timmar, professionell coworkinginfrastruktur på närliggande TAF när det behövs och dagsljus, kust och stadsliv efteråt. Vi antar inte att alla vintergäster arbetar.',
          'Den som söker varmast hav, tät högsäsongsenergi, bredast säsongsutbud eller en resa nästan helt byggd kring strandvärme kan föredra sommaren. Vintern kräver att ni uppskattar växlande dagar, komfort inomhus och en långsammare relation till staden.'
        ]
      },
      {
        id: 'amara-la-marina', eyebrow: '09 · Er vinterbas', title: 'Vinter på AMARA i La Marina', paragraphs: [
          'AMARA Family & Surf ligger på Mar Adriático 29 i La Marina. Stormarknaden finns direkt mittemot, Gamla stan cirka 10–15 minuters promenad bort och den praktiska vägen västerut håller Atlantkusten lättillgänglig.',
          'En reserverad underjordisk plats löser var den egna bilen står hemma; den lovar inte parkering vid stränder eller i stan. Inomhus stödjer värme, luftkonditionering, eldstad, kök, tvättmaskin, wifi och sällskapsytor rutiner över flera veckor.',
          'Det är vinterns erbjudande: en mildare sydlig säsong utanför, ett bekvämt verkligt hem innanför och Tarifas vanliga liv nära. Vintern är inte en mindre version av Tarifa. Den är en annan — och för vissa gäster kanske den mer givande.'
        ]
      }
    ],
    related: {
      eyebrow: 'Fortsätt med praktiska detaljer',
      title: 'Planera vintervistelsen utan att upprepa samma guide',
      links: [
        { token: 'tarifa_weather', label: 'Väder & årstider', text: 'Officiella klimatdata, Levante, Poniente och gränserna för säsongsförväntningar.' },
        { token: 'tarifa_daily_life', label: 'Vardag & service', text: 'Inköp, vård, vanliga ärenden och fullständig coworkinginformation.' },
        { token: 'tarifa_beaches_authority', label: 'Stränder & kust', text: 'Välj mellan stadskusten och den vidare Atlantkusten för den konkreta dagen.' },
        { token: 'tarifa_wind_kitesurfing_authority', label: 'Vind & vattensport', text: 'Teknisk vind-, säkerhets- och vattensportplanering finns i specialistguiden.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'Se hemmet när dess vinterroll och praktiska läge är tydliga.' }
      ]
    },
    sources: {
      eyebrow: 'Underlag och perspektiv',
      title: 'Officiella fakta tydligt skilda från värderfarenhet',
      intro: 'Fakta om klimat, utsikt, kust och coworking använder aktuella officiella eller direkta källor. Den lugnare, mer välbekanta vinterkänslan är uttryckligen Roberts perspektiv som värd.',
      checked: 'Källor granskade den 13 augusti 2026',
      links: [
        { label: 'AEMET · klimatnormaler för Tarifa', text: 'Officiella månadsvärden för temperatur, nederbörd och regndagar vid station 6001.', href: sourceHrefs.tarifaNormals },
        { label: 'Turismo de Tarifa · naturparker och leder', text: 'Officiell utsiktsinformation, inklusive Afrika och Atlas på klara dagar.', href: sourceHrefs.tarifaViewpoints },
        { label: 'Turismo de Tarifa · stränder', text: 'Officiell orientering till Atlant- och Medelhavskusten.', href: sourceHrefs.tarifaBeaches },
        { label: 'TAF CoWorking · officiell information', text: 'Aktuell professionell arbetsinfrastruktur nära AMARA.', href: sourceHrefs.taf }
      ]
    },
    closing: {
      eyebrow: 'Stanna länge nog för att känna skillnaden',
      title: 'Låt vintern vara sin egen version av Tarifa',
      body: 'Välj den för användbart ljus, Atlantens utrymme, en lugnare stadsrytm och ett hem som förblir bekvämt när vädret ändras. Börja med Tarifas läge eller fortsätt till AMARA Family & Surf.',
      locationLabel: 'Utforska Tarifas läge',
      propertyLabel: 'Visa AMARA Family & Surf'
    }
  }
};
