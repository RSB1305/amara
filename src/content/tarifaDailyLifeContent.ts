import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface TarifaDailyLifeSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface TarifaDailyLifeLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: TarifaDailyLifeSection[];
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: string; label: string; text: string }>;
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
 * Primary intent: practical planning for normal life during a multi-day or multi-week Tarifa stay.
 * Remote-work intent is secondary and stays within that everyday-planning context.
 * Native query families:
 * EN daily life / shopping / supermarkets / market / pharmacy / coworking / long stay / Tarifa without a car;
 * DE Alltag / Einkaufen / Supermarkt / Markt / Apotheke / Coworking / Workation / längerer Aufenthalt / Tarifa ohne Auto;
 * ES vida diaria / compras / supermercados / mercado / farmacia / coworking / teletrabajo / larga estancia / Tarifa sin coche;
 * NL dagelijks leven / boodschappen / supermarkt / markt / apotheek / coworking / werken op afstand / langer verblijf / Tarifa zonder auto;
 * SV vardagsliv / handla / mataffär / marknad / apotek / coworking / distansarbete / längre vistelse / Tarifa utan bil.
 * Entities: Tarifa, La Marina, Mar Adriático 29, AMARA Family & Surf, TAF CoWorking / Tarifa Air Force,
 * Mercado de Abastos de Tarifa, Centro de Salud Tarifa, the Old Town and the western Atlantic coast.
 */

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const tarifaDailyLifeSeo: AmaraAuthoringSeo = {
  version: '2026-08-13-tarifa-daily-life-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Daily Life in Tarifa: Shopping, Services & Coworking',
      description: 'Plan groceries, errands, healthcare, coworking and a longer Tarifa stay, with practical detail from AMARA Family & Surf in La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Alltag in Tarifa: Einkaufen, Versorgung & Coworking',
      description: 'Einkaufen, Erledigungen, medizinische Versorgung und Coworking in Tarifa – praktisch erklärt für euren Aufenthalt bei AMARA in La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Vida diaria en Tarifa: compras, servicios y coworking',
      description: 'Compras, recados, atención sanitaria y coworking en Tarifa, con información práctica desde AMARA Family & Surf, en La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Dagelijks leven in Tarifa: winkels, voorzieningen & coworking',
      description: 'Praktische informatie over boodschappen, zorg, vervoer en coworking tijdens een langer verblijf bij AMARA in La Marina, Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Vardagsliv i Tarifa: butiker, service och coworking',
      description: 'Planera inköp, ärenden, vård och coworking under en längre vistelse i Tarifa, med praktiska råd från AMARA i La Marina.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

const sourceHrefs = {
  taf: 'https://tarifairforce.com/pages/coworking-1',
  tafWalk: 'https://www.google.com/maps/dir/?api=1&origin=Mar+Adriatico+29+11380+Tarifa&destination=TAF+CoWorking+Tarifa&travelmode=walking',
  health: 'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/el-sas/servicios-y-centros/informacion-por-centros/24526',
  emergency: 'https://www.juntadeandalucia.es/organismos/ema/areas/emergencias-112/cecem-112-andalucia.html',
  market: 'https://www.aytotarifa.com/notices/concesion-administrativa-del-aprovechamiento-privativo-de-diferentes-puestos-tanto-en-el-mercado-de-abastos-nuestra-senora-virgen-del-carmen-como-en-el-mercado-de-abastos-sito-en-la-calle-colon-media/'
} as const;

export const tarifaDailyLifeContent: Record<AmaraLanguage, TarifaDailyLifeLocale> = {
  en: {
    navLabel: 'Daily Life & Services',
    hero: {
      eyebrow: 'Practical Tarifa guide',
      title: 'Daily life in Tarifa',
      standfirst: 'A stay of several days or weeks is shaped by ordinary things: where groceries come from, which errands work on foot, when a car helps and whether a proper working day is possible. From AMARA Family & Surf in La Marina, those questions have unusually concrete answers.',
      note: 'A host-written guide to stable everyday patterns. Check current opening, duty and service information before relying on a particular provider.',
      updated: 'Services and walking routes checked in August 2026'
    },
    facts: [
      { label: 'At the apartment', value: 'Supermarket directly opposite' },
      { label: 'Old Town', value: 'About 10–15 minutes on foot' },
      { label: 'Professional workspace', value: 'TAF · about 350 m / 5 minutes' },
      { label: 'When driving helps', value: 'Western coast · bulky errands · regional days' }
    ],
    sections: [
      {
        id: 'everyday-life',
        eyebrow: '01 · The everyday pattern',
        title: 'Everyday life in Tarifa',
        paragraphs: [
          'Tarifa is a compact working town as well as a holiday destination. Supermarkets, bakeries, pharmacies, healthcare, workshops and other normal services sit across the newer town and historic centre rather than inside one visitor district.',
          'For a stay longer than a weekend, the useful question is not how many businesses exist but how often you need to repeat the route. Many normal errands can be combined with a walk; Sundays, public holidays and seasonal opening still need a current check.',
          'At AMARA, the supermarket opposite covers the most frequent need, the Old Town is roughly 10–15 minutes away on foot, and the reserved underground parking keeps a car available without making it part of every small errand.'
        ]
      },
      {
        id: 'groceries-shopping',
        eyebrow: '02 · Groceries and basics',
        title: 'Groceries & normal shopping',
        paragraphs: [
          'Tarifa has the ordinary supermarket and neighbourhood-shopping infrastructure needed for a self-catered stay. A normal basket does not require a trip to another town, although range, stock and opening patterns vary by shop and season.',
          'That means a car is optional for routine groceries when your accommodation is well placed. It becomes more useful for a large weekly shop, bulky purchases or when shopping is combined with a beach or regional journey.',
          'At Mar Adriático 29, groceries are directly opposite AMARA. The apartment’s full kitchen makes shopping for real meals practical, while the underground space lets you leave the car parked for small top-up trips.'
        ]
      },
      {
        id: 'market-bakeries-food',
        eyebrow: '03 · Everyday food',
        title: 'Market, bakeries & everyday food',
        paragraphs: [
          'Tarifa’s municipal Mercado de Abastos remains part of the town’s food infrastructure, and bakeries and cafés make fresh bread or a simple breakfast easy to fold into a morning. The exact mix of stalls and businesses changes, so this is orientation rather than a directory.',
          'Use the market or a bakery when the walk and the food are part of the day; use a supermarket for the predictable general basket. Always check the current day and opening time before making one specific stop essential.',
          'From AMARA, the Old Town and central food stops can be part of the same walk. For daily certainty, the supermarket opposite remains the simplest fallback — especially after a long beach day or when the weather changes the evening plan.'
        ]
      },
      {
        id: 'pharmacies-medical-help',
        eyebrow: '04 · Health and practical help',
        title: 'Pharmacies & medical help',
        paragraphs: [
          'Tarifa has pharmacies for ordinary needs and an official public health centre, Centro de Salud Tarifa. Pharmacy opening and the duty rota can change, so use current local information rather than a saved list.',
          'For non-emergency needs, start with the appropriate pharmacy, insurer or official health service and follow their current guidance. For an emergency, call 112; do not use a walking guide or an old business listing to decide urgent care.',
          'From AMARA, these services remain within urban Tarifa, but the right route depends on which pharmacy is on duty and what help is needed. Check the live destination first and use a taxi or emergency service when the situation calls for it.'
        ]
      },
      {
        id: 'daily-errands',
        eyebrow: '05 · Choosing how to move',
        title: 'Getting around for daily errands',
        paragraphs: [
          'Much of central Tarifa works on foot, but everyday services are not all inside the Old Town. Some sit along the newer commercial streets or around La Vega, so distance and purpose matter more than the word “centre”.',
          'Walking is usually the calm choice for food, town and nearby appointments. A car earns its place for bulky shopping, the wider coast and regional errands; parking at the destination still has to be considered separately.',
          'AMARA gives you both options: the supermarket is opposite, TAF CoWorking is about five minutes away on a mostly flat walking route, and the Old Town is about 10–15 minutes away. For farther tasks, the reserved garage and practical westbound access keep departure simple.'
        ]
      },
      {
        id: 'town-beach-evenings',
        eyebrow: '06 · A repeatable holiday day',
        title: 'Town, beach & evening routines',
        paragraphs: [
          'Tarifa makes it possible to combine ordinary town life with the beach rather than choosing one for the whole stay. A morning errand, time by the Atlantic and an evening in the historic centre can belong to the same day.',
          'The urban coast works within a walking day; western beaches are a different movement decision and often make a car, taxi or current seasonal service more useful. Wind, access and parking should be checked for the actual day.',
          'From AMARA, keep the car parked when the plan is groceries and an Old Town evening. Take it out when the chosen beach or activity genuinely lies west of town, then return to a full kitchen and a quieter home base in La Marina.'
        ]
      },
      {
        id: 'remote-work-coworking',
        eyebrow: '07 · Work when the stay includes it',
        title: 'Remote work & coworking in Tarifa',
        paragraphs: [
          'Tarifa has professional coworking infrastructure. TAF CoWorking, inside the Tarifa Air Force building, currently lists professional Wi-Fi, individual workspaces, meeting rooms, private offices, call and video-call areas, a soundproof call room, a kitchen and shared space.',
          'This matters when a working day needs more than a holiday apartment can promise. A meeting room, private office or dedicated call environment can be checked directly with the operator without turning the whole stay into a coworking itinerary.',
          'Google Maps currently places the walk from AMARA to TAF at about 350 metres, roughly five minutes and mostly flat. AMARA provides Wi-Fi as a private home base; TAF is the nearby option when you need a more office-like day or a specific professional facility.'
        ]
      },
      {
        id: 'longer-stays',
        eyebrow: '08 · One week and beyond',
        title: 'Longer stays',
        paragraphs: [
          'A longer Tarifa stay depends less on a list of attractions and more on repeatable comfort: cooking, laundry, indoor temperature, groceries, work and the freedom to change plans with the weather.',
          'Tarifa can support that routine, but seasonality remains real. Check current service days and plan around stable categories — supermarket, market, pharmacy, health centre and coworking — rather than an old collection of recommendations.',
          'AMARA combines a full kitchen, washing machine, Wi-Fi, cooling and heating with groceries opposite, nearby coworking and reserved underground parking. Those verified features remove much of the friction from a stay of one or several weeks.'
        ]
      },
      {
        id: 'amara-la-marina',
        eyebrow: '09 · Your base in La Marina',
        title: 'Daily life from AMARA in La Marina',
        paragraphs: [
          'AMARA Family & Surf is at Mar Adriático 29 in La Marina. It is not inside the Old Town and it is not an isolated beach property: it sits in the practical urban layer between everyday services, town life and westbound movement.',
          'Without driving, you can buy groceries opposite, reach professional coworking in about five minutes and walk to the Old Town in about 10–15 minutes. A car becomes useful for the western coast, bulky errands and regional days rather than every evening or food shop.',
          'That balance is what makes La Marina practical for several days or several weeks: home routines work close by, town remains walkable, and the reserved garage keeps wider Tarifa available when the day genuinely calls for it.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue with the question you are solving',
      title: 'Use the Tarifa guide one practical step at a time',
      links: [
        { token: 'getting_to_tarifa', label: 'Arrival & Mobility', text: 'Plan airports, buses, ferries, driving and the final route to Mar Adriático 29.' },
        { token: 'tarifa_geography', label: 'Geography & Orientation', text: 'See how town, Strait, Atlantic coast and westbound direction relate.' },
        { token: 'tarifa_where_to_stay', label: 'Where to Stay / Areas', text: 'Compare La Marina with the Old Town, Los Lances and countryside settings.' },
        { token: 'tarifa_weather', label: 'Weather & Seasons', text: 'See how season, Levante and Poniente change everyday decisions.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'See the apartment after its practical La Marina context is clear.' }
      ]
    },
    sources: {
      eyebrow: 'Evidence behind the guide',
      title: 'Current service and route checks',
      intro: 'Named services appear only where they provide concrete orientation. Facilities, routes and service status can change, so the responsible provider remains the final source close to your stay.',
      checked: 'Sources checked 13 August 2026',
      links: [
        { label: 'TAF CoWorking · official information', text: 'Current workspace, meeting, office and call-area facilities.', href: sourceHrefs.taf },
        { label: 'Google Maps · AMARA to TAF', text: 'Walking route checked at 350 m, about four minutes and mostly flat; guest copy rounds this to about five minutes.', href: sourceHrefs.tafWalk },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Tarifa', text: 'Official current listing for Tarifa’s public health centre.', href: sourceHrefs.health },
        { label: 'Junta de Andalucía · Emergencies 112', text: 'Official confirmation of the single free emergency number across Andalusia.', href: sourceHrefs.emergency },
        { label: 'Ayuntamiento de Tarifa · municipal markets', text: 'Current municipal evidence for the Calle Colón and Virgen del Carmen markets.', href: sourceHrefs.market }
      ]
    },
    closing: {
      eyebrow: 'Choose a base that works on ordinary days',
      title: 'Tarifa is easier when daily life stays simple',
      body: 'At AMARA, groceries, town, professional workspace and a parked car can coexist without turning the stay into a timetable. Start with the wider location guide or continue to the apartment itself.',
      locationLabel: 'Explore Tarifa location',
      propertyLabel: 'View AMARA Family & Surf'
    }
  },
  de: {
    navLabel: 'Alltag & Versorgung',
    hero: {
      eyebrow: 'Praktischer Tarifa-Guide',
      title: 'Alltag in Tarifa',
      standfirst: 'Bei mehreren Tagen oder Wochen zählen nicht nur Strand und Altstadt. Entscheidend wird, wo ihr einkauft, was zu Fuß funktioniert, wann das Auto sinnvoll ist und ob sich ein professioneller Arbeitstag einplanen lässt. Von AMARA Family & Surf in La Marina aus sind diese Fragen erstaunlich konkret zu beantworten.',
      note: 'Ein persönlicher Guide eurer Gastgeber zu stabilen Alltagsmustern. Prüft Öffnungszeiten, Notdienste und aktuelle Leistungen immer direkt beim jeweiligen Anbieter.',
      updated: 'Versorgung und Fußwege im August 2026 geprüft'
    },
    facts: [
      { label: 'Am Apartment', value: 'Supermarkt direkt gegenüber' },
      { label: 'Altstadt', value: 'Etwa 10–15 Minuten zu Fuß' },
      { label: 'Professioneller Arbeitsplatz', value: 'TAF · ca. 350 m / 5 Minuten' },
      { label: 'Dafür lohnt das Auto', value: 'Westküste · größere Einkäufe · Ausflüge' }
    ],
    sections: [
      {
        id: 'everyday-life', eyebrow: '01 · Der normale Rhythmus', title: 'Wie sich Alltag in Tarifa anfühlt', paragraphs: [
          'Tarifa ist Ferienort und ganz normale Kleinstadt zugleich. Supermärkte, Bäckereien, Apotheken, medizinische Versorgung und Handwerksbetriebe verteilen sich auf die neueren Viertel und das historische Zentrum – nicht auf eine einzige Besucherzone.',
          'Abseits eines kurzen Wochenendes zählt deshalb vor allem, welche Wege sich wiederholen. Vieles lässt sich mit einem Spaziergang verbinden; an Sonn- und Feiertagen sowie je nach Saison solltet ihr die aktuellen Zeiten prüfen.',
          'Bei AMARA liegt der Supermarkt direkt gegenüber, die Altstadt erreicht ihr in ungefähr 10–15 Minuten zu Fuß. Der reservierte Tiefgaragenplatz hält das Auto verfügbar, ohne dass ihr es für jede Kleinigkeit braucht.'
        ]
      },
      {
        id: 'groceries-shopping', eyebrow: '02 · Lebensmittel und Grundbedarf', title: 'Einkaufen wie im normalen Alltag', paragraphs: [
          'In Tarifa gibt es die übliche Infrastruktur für einen Aufenthalt mit Selbstversorgung. Für einen normalen Einkauf müsst ihr den Ort nicht verlassen; Sortiment, Vorräte und Öffnungszeiten können sich jedoch nach Geschäft und Saison unterscheiden.',
          'Mit einer günstig gelegenen Unterkunft geht der tägliche Einkauf gut ohne Auto. Nützlich wird es bei einem großen Wocheneinkauf, sperrigen Besorgungen oder wenn ihr den Einkauf mit einem Strandtag oder Ausflug verbindet.',
          'An der Mar Adriático 29 kauft ihr direkt gegenüber ein. In der vollständigen Küche von AMARA könnt ihr richtig kochen, und für ein paar fehlende Dinge bleibt das Auto entspannt in der Tiefgarage.'
        ]
      },
      {
        id: 'market-bakeries-food', eyebrow: '03 · Essen für jeden Tag', title: 'Markt, Bäckereien & unkompliziertes Essen', paragraphs: [
          'Der städtische Mercado de Abastos gehört weiterhin zur Lebensmittelversorgung Tarifas. Bäckereien und Cafés machen frisches Brot oder ein einfaches Frühstück zum natürlichen Teil eines Morgenspaziergangs. Welche Stände und Betriebe aktuell geöffnet sind, kann sich ändern.',
          'Nehmt den Markt oder eine Bäckerei, wenn Einkauf und Weg zum Tageserlebnis gehören; für den planbaren Grundeinkauf bleibt der Supermarkt verlässlicher. Macht keinen einzelnen Betrieb ohne aktuellen Check zum festen Bestandteil des Plans.',
          'Von AMARA lassen sich Altstadt und zentrale Lebensmitteladressen in einem Spaziergang verbinden. Wenn der Strandtag lang war oder das Wetter den Abend ändert, ist der Supermarkt gegenüber die einfache Lösung.'
        ]
      },
      {
        id: 'pharmacies-medical-help', eyebrow: '04 · Gesundheit und Hilfe', title: 'Apotheken & medizinische Versorgung', paragraphs: [
          'Für normale Bedürfnisse gibt es in Tarifa Apotheken; außerdem führt der andalusische Gesundheitsdienst das Centro de Salud Tarifa als öffentliches Gesundheitszentrum. Öffnungszeiten und Apotheken-Notdienst ändern sich – nutzt daher aktuelle lokale Angaben.',
          'Bei nicht akuten Anliegen wendet ihr euch passend zur Situation an Apotheke, Versicherung oder offiziellen Gesundheitsdienst und folgt deren aktueller Empfehlung. In einem Notfall gilt 112; eine alte Geschäftsliste oder ein Fußweg-Guide ist dann nicht die richtige Entscheidungsgrundlage.',
          'Von AMARA aus liegen diese Angebote innerhalb des Stadtgebiets. Welcher Weg sinnvoll ist, hängt jedoch vom aktuellen Notdienst und vom benötigten Angebot ab. Prüft zuerst das konkrete Ziel und nutzt bei Bedarf Taxi oder Rettungsdienst.'
        ]
      },
      {
        id: 'daily-errands', eyebrow: '05 · Zu Fuß oder mit dem Auto', title: 'Alltägliche Erledigungen in Tarifa', paragraphs: [
          'Tarifas Zentrum ist kompakt, doch normale Dienstleistungen liegen nicht ausschließlich in der Altstadt. Ein Teil befindet sich an den neueren Geschäftsstraßen oder rund um La Vega – für den Weg zählen Ziel und Zweck mehr als das Wort „Zentrum“.',
          'Für Lebensmittel, Stadt und nahe Termine ist Laufen meist die ruhigste Lösung. Bei sperrigen Einkäufen, Zielen an der weiteren Küste oder regionalen Besorgungen hilft das Auto; die Parksituation am Ziel bleibt davon getrennt.',
          'Bei AMARA habt ihr beide Möglichkeiten: Supermarkt gegenüber, TAF CoWorking etwa fünf Minuten auf einer größtenteils flachen Route und Altstadt in ungefähr 10–15 Gehminuten. Für weitere Wege sind Garage und praktische Ausfahrt nach Westen da.'
        ]
      },
      {
        id: 'town-beach-evenings', eyebrow: '06 · Ein guter wiederholbarer Urlaubstag', title: 'Stadt, Strand & Abend miteinander verbinden', paragraphs: [
          'In Tarifa müsst ihr euch nicht für den gesamten Aufenthalt zwischen Stadt und Strand entscheiden. Eine Besorgung am Morgen, Zeit am Atlantik und ein Abend in der Altstadt können gut in denselben Tag passen.',
          'Die städtische Küste lässt sich eher in einen Tag zu Fuß einbauen. Für die westlichen Strände braucht es eine neue Mobilitätsentscheidung – oft Auto, Taxi oder ein aktuell angebotener Saisonservice. Wind, Zufahrt und Parken solltet ihr tagesaktuell prüfen.',
          'Bleibt das Programm bei Einkaufen und Altstadtabend, kann der Wagen bei AMARA stehen. Liegt euer Ziel wirklich westlich der Stadt, nehmt ihr ihn aus der Garage und kehrt danach in die ruhige Basis mit vollständiger Küche in La Marina zurück.'
        ]
      },
      {
        id: 'remote-work-coworking', eyebrow: '07 · Arbeiten, wenn es zum Aufenthalt gehört', title: 'Remote arbeiten & Coworking in Tarifa', paragraphs: [
          'Tarifa verfügt über professionelle Coworking-Infrastruktur. TAF CoWorking im Gebäude von Tarifa Air Force nennt aktuell professionelles WLAN, einzelne Arbeitsplätze, Besprechungsräume, private Büros, Bereiche für Telefon- und Videoanrufe, einen schallgedämmten Call-Raum, Küche und Gemeinschaftsflächen.',
          'Das ist hilfreich, wenn ein Arbeitstag mehr verlangt, als eine Ferienwohnung versprechen kann. Besprechungsraum, privates Büro oder geeignete Umgebung für einen wichtigen Call könnt ihr direkt beim Betreiber prüfen, ohne den ganzen Aufenthalt um Coworking herum zu bauen.',
          'Google Maps weist von AMARA zu TAF etwa 350 Meter, ungefähr fünf Minuten und eine größtenteils flache Fußroute aus. AMARA bietet WLAN als private Basis; für einen büroähnlichen Tag oder eine bestimmte professionelle Einrichtung liegt TAF gleich in der Nähe.'
        ]
      },
      {
        id: 'longer-stays', eyebrow: '08 · Eine Woche und länger', title: 'Was bei einem längeren Aufenthalt zählt', paragraphs: [
          'Bei längeren Tarifa-Aufenthalten werden wiederholbare Dinge wichtiger als eine volle Sehenswürdigkeitenliste: kochen, Wäsche, angenehme Raumtemperatur, Lebensmittel, Arbeit und die Freiheit, Pläne dem Wetter anzupassen.',
          'Der Ort unterstützt diesen Alltag, bleibt aber saisonal. Orientiert euch an stabilen Kategorien wie Supermarkt, Markt, Apotheke, Gesundheitszentrum und Coworking und prüft die aktuellen Betriebstage, statt euch auf eine alte Empfehlungsrunde zu verlassen.',
          'AMARA verbindet vollständige Küche, Waschmaschine, WLAN, Kühlung und Heizung mit dem Einkauf gegenüber, Coworking in der Nähe und einem reservierten Tiefgaragenplatz. Das nimmt einer oder mehreren Wochen viel organisatorische Reibung.'
        ]
      },
      {
        id: 'amara-la-marina', eyebrow: '09 · Eure Basis in La Marina', title: 'Alltag ab AMARA in La Marina', paragraphs: [
          'AMARA Family & Surf liegt an der Mar Adriático 29 in La Marina. Es ist weder eine Unterkunft mitten in der Altstadt noch ein abgeschiedenes Strandhaus, sondern Teil des praktischen Stadtgebiets zwischen Versorgung, Ortsleben und der Route nach Westen.',
          'Ohne Auto kauft ihr gegenüber ein, erreicht professionelles Coworking in ungefähr fünf Minuten und die Altstadt in etwa 10–15 Minuten. Für Westküste, große Besorgungen und regionale Tage wird der Wagen sinnvoll – nicht für jeden Abend oder Lebensmitteleinkauf.',
          'Genau diese Balance macht La Marina für mehrere Tage oder Wochen praktisch: Der normale Alltag funktioniert nah am Haus, die Stadt bleibt zu Fuß erreichbar und die Garage hält das weitere Tarifa offen.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiter mit eurer nächsten praktischen Frage',
      title: 'Nutzt den Tarifa-Guide Schritt für Schritt',
      links: [
        { token: 'getting_to_tarifa', label: 'Anreise & Mobilität', text: 'Flughäfen, Bus, Fähre, Auto und die letzte Etappe zur Mar Adriático 29.' },
        { token: 'tarifa_geography', label: 'Geografie & Orientierung', text: 'Wie Stadt, Meerenge, Atlantikküste und westliche Richtung zusammenhängen.' },
        { token: 'tarifa_where_to_stay', label: 'Wo übernachten / Lagen', text: 'La Marina mit Altstadt, Los Lances und dem Umland vergleichen.' },
        { token: 'tarifa_weather', label: 'Wetter & Jahreszeiten', text: 'Wie Saison, Levante und Poniente alltägliche Entscheidungen verändern.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'Seht euch das Apartment an, nachdem sein praktischer Kontext klar ist.' }
      ]
    },
    sources: {
      eyebrow: 'Grundlage des Guides',
      title: 'Aktuelle Service- und Routenchecks',
      intro: 'Namentlich genannte Angebote erscheinen nur dort, wo sie echte Orientierung geben. Leistungen, Routen und Status können sich ändern; kurz vor eurem Aufenthalt ist der jeweilige Anbieter die entscheidende Quelle.',
      checked: 'Quellen am 13. August 2026 geprüft',
      links: [
        { label: 'TAF CoWorking · offizielle Information', text: 'Aktuelle Angaben zu Arbeitsplätzen, Besprechungsräumen, Büros und Call-Bereichen.', href: sourceHrefs.taf },
        { label: 'Google Maps · AMARA zu TAF', text: 'Geprüft mit 350 m, etwa vier Minuten und größtenteils flach; im Text bewusst auf etwa fünf Minuten gerundet.', href: sourceHrefs.tafWalk },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Tarifa', text: 'Offizieller aktueller Eintrag des öffentlichen Gesundheitszentrums.', href: sourceHrefs.health },
        { label: 'Junta de Andalucía · Notruf 112', text: 'Offizielle Bestätigung der einheitlichen kostenlosen Notrufnummer in Andalusien.', href: sourceHrefs.emergency },
        { label: 'Ayuntamiento de Tarifa · städtische Märkte', text: 'Aktueller städtischer Nachweis für die Märkte Calle Colón und Virgen del Carmen.', href: sourceHrefs.market }
      ]
    },
    closing: {
      eyebrow: 'Eine Basis für normale Tage wählen',
      title: 'Tarifa wird leichter, wenn der Alltag einfach bleibt',
      body: 'Bei AMARA passen Einkauf, Stadt, professioneller Arbeitsplatz und ein geparktes Auto zusammen, ohne dass aus der Reise ein Stundenplan wird. Beginnt mit dem Lage-Guide oder geht direkt zum Apartment weiter.',
      locationLabel: 'Tarifas Lage entdecken',
      propertyLabel: 'AMARA Family & Surf ansehen'
    }
  },
  es: {
    navLabel: 'Vida diaria y servicios',
    hero: {
      eyebrow: 'Guía práctica de Tarifa',
      title: 'La vida diaria en Tarifa',
      standfirst: 'En una estancia de varios días o semanas importan las cosas normales: dónde hacer la compra, qué recados se resuelven andando, cuándo compensa sacar el coche y si es posible trabajar con medios profesionales. Desde AMARA Family & Surf, en La Marina, las respuestas son muy concretas.',
      note: 'Una guía escrita por vuestros anfitriones sobre hábitos cotidianos estables. Comprobad siempre horarios, guardias y servicios vigentes directamente con cada entidad.',
      updated: 'Servicios y rutas peatonales comprobados en agosto de 2026'
    },
    facts: [
      { label: 'Junto al apartamento', value: 'Supermercado justo enfrente' },
      { label: 'Casco antiguo', value: 'A unos 10–15 minutos a pie' },
      { label: 'Espacio de trabajo profesional', value: 'TAF · unos 350 m / 5 minutos' },
      { label: 'Cuándo ayuda el coche', value: 'Costa oeste · compras grandes · excursiones' }
    ],
    sections: [
      {
        id: 'everyday-life', eyebrow: '01 · El ritmo normal', title: 'Cómo es el día a día en Tarifa', paragraphs: [
          'Tarifa es un destino de vacaciones, pero también una localidad en la que se vive y se trabaja todo el año. Supermercados, panaderías, farmacias, centro de salud y otros servicios se reparten entre la zona moderna y el casco histórico; no están concentrados en un único barrio turístico.',
          'Cuando os quedáis más de un fin de semana, interesa saber qué trayectos vais a repetir. Muchos recados se combinan bien con un paseo, aunque los domingos, festivos y cambios de temporada exigen consultar la información actual.',
          'En AMARA, la necesidad más frecuente queda resuelta con el supermercado de enfrente. El casco antiguo está a unos 10–15 minutos andando y la plaza reservada en el garaje permite tener coche sin utilizarlo para cada compra pequeña.'
        ]
      },
      {
        id: 'groceries-shopping', eyebrow: '02 · Alimentos y básicos', title: 'Supermercados y compras normales', paragraphs: [
          'Tarifa cuenta con la infraestructura habitual para alojarse con cocina propia. Para una cesta normal no hace falta desplazarse a otra población, aunque el surtido, las existencias y los horarios varían según el establecimiento y la época.',
          'Si el alojamiento está bien situado, la compra cotidiana funciona sin coche. Este resulta más práctico para cargar una compra semanal, recoger algo voluminoso o unir el recado con una jornada de playa o una salida fuera de Tarifa.',
          'En Mar Adriático 29 tenéis el supermercado justo enfrente. La cocina completa de AMARA permite preparar comidas de verdad, y para reponer unas pocas cosas podéis dejar el coche tranquilamente en el garaje.'
        ]
      },
      {
        id: 'market-bakeries-food', eyebrow: '03 · Comida cotidiana', title: 'Mercado, panaderías & comida de cada día', paragraphs: [
          'El Mercado de Abastos municipal sigue formando parte del comercio alimentario de Tarifa. Panaderías y cafeterías permiten comprar pan fresco o desayunar durante un paseo matinal. La composición de puestos y negocios cambia, por lo que esta página orienta sin convertirlos en una lista cerrada.',
          'Elegid el mercado o una panadería cuando el propio paseo forme parte de la mañana; para una cesta general y previsible, el supermercado suele ser más sencillo. Revisad el día y el horario antes de depender de una parada concreta.',
          'Desde AMARA podéis enlazar el casco antiguo y las compras del centro en un mismo recorrido. Para asegurar la cena después de una playa larga o de un cambio de tiempo, el supermercado de enfrente sigue siendo la opción más directa.'
        ]
      },
      {
        id: 'pharmacies-medical-help', eyebrow: '04 · Salud y ayuda práctica', title: 'Farmacias & atención sanitaria', paragraphs: [
          'Tarifa dispone de farmacias para necesidades habituales y de un centro sanitario público, el Centro de Salud Tarifa. Los horarios y la farmacia de guardia pueden cambiar, así que consultad siempre la información local vigente.',
          'Para una necesidad que no sea urgente, acudid según el caso a la farmacia, a vuestro seguro o al servicio sanitario oficial y seguid sus indicaciones actuales. Ante una emergencia, llamad al 112; no decidáis una atención urgente con una ruta a pie o un listado antiguo.',
          'Estos servicios están dentro del núcleo urbano, pero desde AMARA el destino adecuado dependerá de la guardia del día y de la ayuda necesaria. Comprobad primero el punto exacto y utilizad taxi o emergencias cuando corresponda.'
        ]
      },
      {
        id: 'daily-errands', eyebrow: '05 · Elegir cómo moveros', title: 'Desplazarse para los recados diarios', paragraphs: [
          'Buena parte del centro de Tarifa se recorre a pie, pero los servicios cotidianos no están todos en el casco antiguo. Algunos se sitúan en las calles comerciales más nuevas o en el entorno de La Vega: importa más el destino concreto que la palabra “centro”.',
          'Caminar suele ser lo más cómodo para comprar comida, ir al pueblo o acudir a una cita cercana. El coche aporta valor en compras voluminosas, la costa más amplia y los recados regionales; el aparcamiento en destino sigue siendo una cuestión distinta.',
          'AMARA ofrece ambas opciones: supermercado enfrente, TAF CoWorking a unos cinco minutos por una ruta mayoritariamente llana y casco antiguo a unos 10–15 minutos. Para ir más lejos, el garaje reservado y la salida práctica hacia el oeste facilitan el movimiento.'
        ]
      },
      {
        id: 'town-beach-evenings', eyebrow: '06 · Un día de vacaciones que se puede repetir', title: 'Combinar pueblo, playa & tardes', paragraphs: [
          'En Tarifa no tenéis que elegir entre vida urbana y playa para toda la estancia. Un recado por la mañana, unas horas junto al Atlántico y una noche en el casco histórico pueden formar parte del mismo día.',
          'La costa urbana encaja mejor en una jornada a pie. Las playas del oeste requieren otra decisión y suelen hacer más útil el coche, un taxi o un servicio estacional vigente. Consultad viento, acceso y aparcamiento para el día concreto.',
          'Si el plan es compra y cena en el centro, el coche puede quedarse en AMARA. Cuando la playa o actividad esté realmente al oeste, utilizadlo y volved después a una base tranquila en La Marina, con cocina completa para cerrar el día.'
        ]
      },
      {
        id: 'remote-work-coworking', eyebrow: '07 · Trabajar cuando forma parte del viaje', title: 'Teletrabajo & coworking en Tarifa', paragraphs: [
          'Tarifa tiene infraestructura profesional de coworking. TAF CoWorking, dentro del edificio de Tarifa Air Force, anuncia actualmente wifi profesional, puestos individuales, salas de reuniones, despachos privados, zonas para llamadas y videollamadas, una cabina insonorizada, cocina y espacios comunes.',
          'Resulta útil cuando una jornada laboral necesita más de lo que un apartamento vacacional puede garantizar. Podéis consultar directamente una sala, un despacho o un entorno específico para llamadas sin convertir toda la estancia en un programa de coworking.',
          'Google Maps sitúa actualmente el trayecto desde AMARA en unos 350 metros, aproximadamente cinco minutos y con un recorrido mayoritariamente llano. AMARA ofrece wifi como base privada; TAF es la opción próxima para un día más parecido a la oficina o una necesidad profesional concreta.'
        ]
      },
      {
        id: 'longer-stays', eyebrow: '08 · Una semana o más', title: 'Estancias largas', paragraphs: [
          'En una estancia larga pesan menos las listas de visitas y más las rutinas que funcionan: cocinar, lavar ropa, regular la temperatura interior, comprar, trabajar y cambiar el plan según el tiempo.',
          'Tarifa permite organizar ese día a día, pero la estacionalidad existe. Orientaos con categorías estables —supermercado, mercado, farmacia, centro de salud y coworking— y comprobad los días de servicio actuales en lugar de seguir recomendaciones antiguas.',
          'AMARA reúne cocina completa, lavadora, wifi, refrigeración y calefacción con supermercado enfrente, coworking cercano y garaje subterráneo reservado. Son prestaciones verificadas que simplifican mucho una o varias semanas.'
        ]
      },
      {
        id: 'amara-la-marina', eyebrow: '09 · Vuestra base en La Marina', title: 'Vida diaria desde AMARA en La Marina', paragraphs: [
          'AMARA Family & Surf está en Mar Adriático 29, La Marina. No se encuentra dentro del casco antiguo ni aislado junto a una playa: ocupa una posición urbana práctica entre servicios cotidianos, vida en el centro y salida hacia el oeste.',
          'Sin conducir podéis comprar enfrente, llegar a un coworking profesional en unos cinco minutos y caminar al casco antiguo en aproximadamente 10–15 minutos. El coche se vuelve útil para la costa occidental, recados grandes y excursiones, no para cada cena o compra.',
          'Ese equilibrio hace que La Marina funcione durante varios días o semanas: la rutina doméstica queda cerca, el pueblo sigue siendo accesible a pie y el garaje reservado mantiene abierta la Tarifa más amplia cuando realmente la necesitáis.'
        ]
      }
    ],
    related: {
      eyebrow: 'Seguid con la siguiente pregunta práctica',
      title: 'Utilizad la guía de Tarifa paso a paso',
      links: [
        { token: 'getting_to_tarifa', label: 'Llegada y movilidad', text: 'Aeropuertos, autobús, ferry, coche y último tramo hasta Mar Adriático 29.' },
        { token: 'tarifa_geography', label: 'Geografía y orientación', text: 'La relación entre pueblo, Estrecho, Atlántico y dirección oeste.' },
        { token: 'tarifa_where_to_stay', label: 'Dónde alojarse / zonas', text: 'Comparad La Marina con casco antiguo, Los Lances y campo.' },
        { token: 'tarifa_weather', label: 'Tiempo y estaciones', text: 'Cómo cambian las decisiones cotidianas con la estación, el Levante y el Poniente.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'Conoced el apartamento después de situarlo en su contexto práctico.' }
      ]
    },
    sources: {
      eyebrow: 'Base de la guía',
      title: 'Comprobaciones actuales de servicios y rutas',
      intro: 'Solo nombramos un servicio cuando aporta una orientación concreta. Instalaciones, rutas y actividad pueden cambiar; cerca de la estancia, la entidad responsable sigue siendo la fuente definitiva.',
      checked: 'Fuentes comprobadas el 13 de agosto de 2026',
      links: [
        { label: 'TAF CoWorking · información oficial', text: 'Datos actuales sobre puestos, salas, despachos y zonas para llamadas.', href: sourceHrefs.taf },
        { label: 'Google Maps · de AMARA a TAF', text: 'Ruta comprobada de 350 m, unos cuatro minutos y mayoritariamente llana; el texto la redondea a unos cinco minutos.', href: sourceHrefs.tafWalk },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Tarifa', text: 'Ficha oficial vigente del centro sanitario público de Tarifa.', href: sourceHrefs.health },
        { label: 'Junta de Andalucía · Emergencias 112', text: 'Confirmación oficial del teléfono único y gratuito de emergencias en Andalucía.', href: sourceHrefs.emergency },
        { label: 'Ayuntamiento de Tarifa · mercados municipales', text: 'Constancia municipal actual de los mercados de Calle Colón y Virgen del Carmen.', href: sourceHrefs.market }
      ]
    },
    closing: {
      eyebrow: 'Elegid una base que funcione en días normales',
      title: 'Tarifa es más fácil cuando el día a día es sencillo',
      body: 'En AMARA, compra, pueblo, espacio profesional y coche aparcado conviven sin convertir el viaje en un horario. Empezad por la guía general de ubicación o continuad hasta el apartamento.',
      locationLabel: 'Explorar la ubicación de Tarifa',
      propertyLabel: 'Ver AMARA Family & Surf'
    }
  },
  nl: {
    navLabel: 'Dagelijks leven & voorzieningen',
    hero: {
      eyebrow: 'Praktische gids voor Tarifa',
      title: 'Dagelijks leven in Tarifa',
      standfirst: 'Tijdens een verblijf van enkele dagen of weken worden gewone vragen belangrijk: waar doen jullie boodschappen, welke zaken kunnen te voet, wanneer is een auto handig en kun je hier professioneel werken? Vanuit AMARA Family & Surf in La Marina zijn de antwoorden verrassend concreet.',
      note: 'Een persoonlijke gids van jullie hosts over stabiele dagelijkse patronen. Controleer actuele openingstijden, wachtdiensten en voorzieningen altijd bij de verantwoordelijke aanbieder.',
      updated: 'Voorzieningen en wandelroutes gecontroleerd in augustus 2026'
    },
    facts: [
      { label: 'Bij het appartement', value: 'Supermarkt direct aan de overkant' },
      { label: 'Oude stad', value: 'Ongeveer 10–15 minuten lopen' },
      { label: 'Professionele werkplek', value: 'TAF · circa 350 m / 5 minuten' },
      { label: 'Wanneer de auto helpt', value: 'Westkust · grote boodschappen · uitstappen' }
    ],
    sections: [
      {
        id: 'everyday-life', eyebrow: '01 · Het gewone ritme', title: 'Hoe het dagelijks leven in Tarifa werkt', paragraphs: [
          'Tarifa is behalve vakantiebestemming ook een gewone werkende stad. Supermarkten, bakkerijen, apotheken, gezondheidszorg en andere diensten liggen verspreid over het nieuwere stadsdeel en de historische kern, niet in één bezoekerswijk.',
          'Blijven jullie langer dan een weekend, dan gaat het vooral om routes die terugkomen. Veel dagelijkse zaken kunnen mee in een wandeling; op zon- en feestdagen en buiten het hoogseizoen is een actuele controle wel verstandig.',
          'Bij AMARA ligt de supermarkt tegenover, terwijl de oude stad ongeveer 10–15 minuten lopen is. Dankzij de gereserveerde garageplek staat de auto klaar zonder dat hij voor elke kleine boodschap nodig is.'
        ]
      },
      {
        id: 'groceries-shopping', eyebrow: '02 · Boodschappen en basiszaken', title: 'Supermarkten & gewone winkels', paragraphs: [
          'Tarifa heeft de normale winkelvoorzieningen voor een verblijf waarin jullie zelf koken. Voor een doorsnee boodschappenmand hoef je de stad niet uit, al verschillen assortiment, voorraad en opening per winkel en seizoen.',
          'Met een goed gelegen verblijf zijn dagelijkse boodschappen zonder auto eenvoudig. Voor een grote weekvoorraad, volumineuze aankopen of een combinatie met strand en omgeving wordt rijden nuttiger.',
          'Aan Mar Adriático 29 ligt de supermarkt direct aan de overkant. De volledige keuken van AMARA maakt echt koken praktisch, terwijl de auto voor een paar ontbrekende producten gewoon in de ondergrondse garage kan blijven.'
        ]
      },
      {
        id: 'market-bakeries-food', eyebrow: '03 · Eten voor elke dag', title: 'Markt, bakkerijen & dagelijks eten', paragraphs: [
          'De gemeentelijke Mercado de Abastos hoort nog altijd bij de voedselvoorziening van Tarifa. Bij bakkerijen en cafés kunnen vers brood en een eenvoudig ontbijt vanzelf onderdeel worden van een ochtendwandeling. De precieze bezetting verandert, dus dit is geen bedrijvengids.',
          'Kies de markt of een bakkerij wanneer ook de wandeling telt; gebruik de supermarkt voor een voorspelbare algemene voorraad. Controleer dag en tijd voordat één specifieke stop onmisbaar wordt voor jullie plan.',
          'Vanaf AMARA kunnen de oude stad en centrale voedselzaken in dezelfde wandeling passen. Na een lange stranddag of een weersomslag blijft de supermarkt aan de overkant de eenvoudigste zekerheid.'
        ]
      },
      {
        id: 'pharmacies-medical-help', eyebrow: '04 · Gezondheid en hulp', title: 'Apotheken & medische hulp', paragraphs: [
          'Tarifa heeft apotheken voor gewone behoeften en een officieel openbaar gezondheidscentrum, Centro de Salud Tarifa. Openingstijden en de dienstdoende apotheek kunnen wisselen; gebruik daarom actuele lokale informatie.',
          'Neem bij niet-spoedeisende vragen passend contact op met een apotheek, verzekeraar of officiële gezondheidsdienst en volg hun huidige advies. Bel bij een noodgeval 112; een wandelgids of oude bedrijvenlijst is dan geen basis voor een zorgkeuze.',
          'Deze voorzieningen liggen binnen stedelijk Tarifa, maar vanaf AMARA hangt de juiste route af van de wachtdienst en het soort hulp. Controleer eerst de actuele bestemming en gebruik taxi of hulpdienst wanneer dat nodig is.'
        ]
      },
      {
        id: 'daily-errands', eyebrow: '05 · Kiezen hoe jullie gaan', title: 'Vervoer voor dagelijkse zaken', paragraphs: [
          'Een groot deel van centraal Tarifa is beloopbaar, maar niet alle alledaagse diensten liggen in de oude stad. Sommige bevinden zich langs nieuwere winkelstraten of rond La Vega; het concrete doel is belangrijker dan het woord “centrum”.',
          'Lopen is meestal rustig voor eten, stad en nabije afspraken. De auto verdient zijn plek bij grote aankopen, de ruimere kust en regionale zaken; parkeren op de bestemming blijft een aparte afweging.',
          'AMARA geeft beide mogelijkheden: supermarkt tegenover, TAF CoWorking op ongeveer vijf minuten via een grotendeels vlakke wandelroute en de oude stad op circa 10–15 minuten. Voor verder weg maken de garage en praktische route westwaarts vertrekken eenvoudig.'
        ]
      },
      {
        id: 'town-beach-evenings', eyebrow: '06 · Een vakantiedag die vaker werkt', title: 'Stad, strand & avond combineren', paragraphs: [
          'In Tarifa hoeven jullie niet voor het hele verblijf tussen stad en strand te kiezen. Een ochtendboodschap, tijd aan de Atlantische Oceaan en een avond in de historische kern passen in dezelfde dag.',
          'De stadskust laat zich makkelijker opnemen in een dag te voet. Voor stranden verder westelijk is een nieuwe vervoerskeuze nodig en zijn auto, taxi of een actuele seizoensverbinding vaak handiger. Controleer wind, toegang en parkeren voor die dag.',
          'Gaat het om boodschappen en een avond in de oude stad, laat de auto dan bij AMARA staan. Ligt strand of activiteit echt ten westen van de stad, haal hem uit de garage en keer daarna terug naar een rustige thuisbasis met volledige keuken in La Marina.'
        ]
      },
      {
        id: 'remote-work-coworking', eyebrow: '07 · Werken wanneer dat bij de reis hoort', title: 'Werken op afstand & coworking in Tarifa', paragraphs: [
          'Tarifa heeft professionele coworkinginfrastructuur. TAF CoWorking in het gebouw van Tarifa Air Force vermeldt momenteel professioneel wifi, individuele werkplekken, vergaderruimtes, privékantoren, zones voor telefoon- en videogesprekken, een geluiddichte belruimte, een keuken en gedeelde ruimtes.',
          'Dat is nuttig wanneer een werkdag meer vraagt dan een vakantieappartement kan beloven. Informeer rechtstreeks naar een vergaderruimte, privékantoor of geschikte belomgeving zonder de hele reis rond coworking te organiseren.',
          'Google Maps geeft vanaf AMARA ongeveer 350 meter, circa vijf minuten en een grotendeels vlakke wandelroute aan. AMARA biedt wifi als privébasis; TAF ligt dichtbij voor een dag die meer op kantoor lijkt of wanneer jullie een specifieke professionele voorziening nodig hebben.'
        ]
      },
      {
        id: 'longer-stays', eyebrow: '08 · Een week en langer', title: 'Langer verblijven', paragraphs: [
          'Bij een langer verblijf worden herhaalbare gemakken belangrijker dan een lange lijst bezienswaardigheden: koken, wassen, binnentemperatuur, boodschappen, werk en plannen die met het weer mee kunnen veranderen.',
          'Tarifa ondersteunt dat ritme, maar blijft seizoensgebonden. Denk vanuit stabiele categorieën — supermarkt, markt, apotheek, gezondheidscentrum en coworking — en controleer actuele dagen in plaats van een oude aanbevelingenlijst te volgen.',
          'AMARA combineert een volledige keuken, wasmachine, wifi, koeling en verwarming met boodschappen tegenover, coworking dichtbij en gereserveerde ondergrondse parking. Die geverifieerde voorzieningen nemen veel gedoe weg uit één of meerdere weken.'
        ]
      },
      {
        id: 'amara-la-marina', eyebrow: '09 · Jullie basis in La Marina', title: 'Dagelijks leven vanaf AMARA in La Marina', paragraphs: [
          'AMARA Family & Surf ligt aan Mar Adriático 29 in La Marina. Het is geen woning midden in de oude stad en ook geen afgezonderd strandhuis, maar een praktische stedelijke plek tussen dagelijkse voorzieningen, stadsleven en de route naar het westen.',
          'Zonder auto doen jullie boodschappen tegenover, bereiken jullie professionele coworking in ongeveer vijf minuten en lopen jullie in circa 10–15 minuten naar de oude stad. De auto is vooral nuttig voor de westkust, grote aankopen en regionale dagen.',
          'Die balans maakt La Marina praktisch voor meerdere dagen of weken: het huiselijke ritme werkt dichtbij, de stad blijft beloopbaar en de gereserveerde garage houdt ruimer Tarifa beschikbaar wanneer de dag daarom vraagt.'
        ]
      }
    ],
    related: {
      eyebrow: 'Verder met jullie volgende praktische vraag',
      title: 'Gebruik de Tarifa-gids stap voor stap',
      links: [
        { token: 'getting_to_tarifa', label: 'Aankomst & mobiliteit', text: 'Luchthavens, bus, ferry, auto en het laatste stuk naar Mar Adriático 29.' },
        { token: 'tarifa_geography', label: 'Geografie & oriëntatie', text: 'Hoe stad, Straat, Atlantische kust en westelijke richting samenhangen.' },
        { token: 'tarifa_where_to_stay', label: 'Waar overnachten / gebieden', text: 'Vergelijk La Marina met oude stad, Los Lances en buitengebied.' },
        { token: 'tarifa_weather', label: 'Weer & seizoenen', text: 'Hoe seizoen, Levante en Poniente dagelijkse keuzes veranderen.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'Bekijk de woning nadat haar praktische context duidelijk is.' }
      ]
    },
    sources: {
      eyebrow: 'Onderbouwing van de gids',
      title: 'Actuele controles van diensten en routes',
      intro: 'Een organisatie wordt alleen genoemd als ze concrete oriëntatie biedt. Voorzieningen, routes en status kunnen wijzigen; kort voor jullie verblijf is de verantwoordelijke aanbieder de beslissende bron.',
      checked: 'Bronnen gecontroleerd op 13 augustus 2026',
      links: [
        { label: 'TAF CoWorking · officiële informatie', text: 'Actuele werkplekken, vergaderruimtes, kantoren en belzones.', href: sourceHrefs.taf },
        { label: 'Google Maps · AMARA naar TAF', text: 'Gecontroleerd op 350 m, circa vier minuten en grotendeels vlak; in de tekst afgerond naar ongeveer vijf minuten.', href: sourceHrefs.tafWalk },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Tarifa', text: 'Officiële actuele vermelding van het openbare gezondheidscentrum.', href: sourceHrefs.health },
        { label: 'Junta de Andalucía · alarmnummer 112', text: 'Officiële bevestiging van het ene gratis alarmnummer in heel Andalusië.', href: sourceHrefs.emergency },
        { label: 'Ayuntamiento de Tarifa · gemeentelijke markten', text: 'Actueel gemeentelijk bewijs voor de markten aan Calle Colón en Virgen del Carmen.', href: sourceHrefs.market }
      ]
    },
    closing: {
      eyebrow: 'Kies een basis die ook op gewone dagen werkt',
      title: 'Tarifa wordt makkelijker als het dagelijks leven eenvoudig blijft',
      body: 'Bij AMARA passen boodschappen, stad, professionele werkplek en een geparkeerde auto naast elkaar zonder dat de reis een uurrooster wordt. Begin bij de locatiegids of ga verder naar de woning.',
      locationLabel: 'Ontdek de ligging in Tarifa',
      propertyLabel: 'Bekijk AMARA Family & Surf'
    }
  },
  sv: {
    navLabel: 'Vardag & service',
    hero: {
      eyebrow: 'Praktisk Tarifaguide',
      title: 'Vardagsliv i Tarifa',
      standfirst: 'Under flera dagar eller veckor blir vanliga frågor viktiga: var ni handlar, vilka ärenden som fungerar till fots, när bilen behövs och om en professionell arbetsdag är möjlig. Från AMARA Family & Surf i La Marina går det att ge ovanligt konkreta svar.',
      note: 'En personlig guide från era värdar till stabila vardagsmönster. Kontrollera alltid aktuella öppettider, jourer och tjänster hos ansvarig verksamhet.',
      updated: 'Service och gångvägar granskade i augusti 2026'
    },
    facts: [
      { label: 'Vid boendet', value: 'Mataffär direkt mittemot' },
      { label: 'Gamla stan', value: 'Cirka 10–15 minuter till fots' },
      { label: 'Professionell arbetsplats', value: 'TAF · cirka 350 m / 5 minuter' },
      { label: 'När bilen hjälper', value: 'Västkusten · större inköp · utflykter' }
    ],
    sections: [
      {
        id: 'everyday-life', eyebrow: '01 · Den vanliga rytmen', title: 'Så fungerar vardagen i Tarifa', paragraphs: [
          'Tarifa är både semesterort och en stad där människor bor och arbetar. Mataffärer, bagerier, apotek, vård och andra vanliga tjänster finns i de nyare stadsdelarna och den historiska kärnan, inte i ett enda besöksområde.',
          'Vid mer än en helg blir de återkommande vägarna viktigare än antalet verksamheter. Många ärenden kan kombineras med en promenad; söndagar, helgdagar och säsongsskiften kräver ändå en aktuell kontroll.',
          'Vid AMARA ligger mataffären mittemot och Gamla stan cirka 10–15 minuters promenad bort. Den reserverade garageplatsen håller bilen tillgänglig utan att göra den nödvändig för varje litet ärende.'
        ]
      },
      {
        id: 'groceries-shopping', eyebrow: '02 · Mat och basvaror', title: 'Mataffärer & vanliga inköp', paragraphs: [
          'Tarifa har den normala butiksinfrastruktur som behövs för ett boende med självhushåll. En vanlig matkasse kräver ingen resa till en annan ort, även om sortiment, lager och öppettider varierar mellan butiker och säsonger.',
          'Med ett bra läge fungerar vardagsinköpen utan bil. Den blir mer användbar för en stor veckohandling, skrymmande saker eller när inköpet kombineras med strand eller en utflykt.',
          'På Mar Adriático 29 handlar ni direkt mittemot. AMARAs fullständiga kök gör det enkelt att laga riktiga måltider, medan bilen kan stå kvar i garaget när bara några få saker saknas.'
        ]
      },
      {
        id: 'market-bakeries-food', eyebrow: '03 · Mat i vardagen', title: 'Marknad, bagerier & enkel vardagsmat', paragraphs: [
          'Den kommunala Mercado de Abastos är fortfarande en del av Tarifas livsmedelsutbud. Bagerier och kaféer gör färskt bröd eller en enkel frukost till en naturlig del av morgonpromenaden. Exakta stånd och verksamheter förändras, så detta är orientering och inte ett register.',
          'Välj marknaden eller ett bageri när promenaden är en del av morgonen; använd mataffären för en förutsägbar bas. Kontrollera dag och tid innan ett enda stopp får bära hela planen.',
          'Från AMARA kan Gamla stan och centrala matinköp ingå i samma promenad. Efter en lång stranddag eller ändrat väder är mataffären mittemot fortfarande den enklaste lösningen.'
        ]
      },
      {
        id: 'pharmacies-medical-help', eyebrow: '04 · Hälsa och praktisk hjälp', title: 'Apotek & vård', paragraphs: [
          'Tarifa har apotek för vanliga behov och ett officiellt offentligt hälsocenter, Centro de Salud Tarifa. Öppettider och jourhavande apotek kan ändras, så använd aktuell lokal information.',
          'Vid icke akuta behov kontaktar ni lämpligt apotek, försäkringsbolag eller officiell vårdgivare och följer deras aktuella råd. Ring 112 vid en nödsituation; en gångväg eller äldre företagslista ska inte styra valet av akutvård.',
          'Tjänsterna finns inom Tarifa tätort, men rätt väg från AMARA beror på dagens jour och vilken hjälp som behövs. Kontrollera destinationen först och använd taxi eller räddningstjänst när situationen kräver det.'
        ]
      },
      {
        id: 'daily-errands', eyebrow: '05 · Välj hur ni tar er fram', title: 'Att ta sig runt för vardagsärenden', paragraphs: [
          'Mycket av centrala Tarifa fungerar till fots, men alla vardagstjänster ligger inte i Gamla stan. Några finns längs nyare affärsgator eller runt La Vega; den konkreta destinationen betyder mer än ordet ”centrum”.',
          'Att gå är oftast lugnast för mat, stad och närliggande tider. Bilen är värdefull för skrymmande inköp, den vidare kusten och regionala ärenden; parkering vid målet måste fortfarande bedömas separat.',
          'AMARA ger båda möjligheterna: mataffär mittemot, TAF CoWorking cirka fem minuter bort på en till största delen plan gångväg och Gamla stan inom ungefär 10–15 minuter. Garageplatsen och den praktiska vägen västerut underlättar längre resor.'
        ]
      },
      {
        id: 'town-beach-evenings', eyebrow: '06 · En semesterdag som går att upprepa', title: 'Stad, strand & kväll i samma rytm', paragraphs: [
          'I Tarifa behöver ni inte välja mellan stad och strand för hela vistelsen. Ett ärende på morgonen, tid vid Atlanten och en kväll i den historiska kärnan kan rymmas under samma dag.',
          'Den stadsnära kusten passar lättare i en dag till fots. Stränderna västerut kräver ett nytt transportval och gör ofta bil, taxi eller aktuell säsongstrafik mer användbar. Kontrollera vind, tillträde och parkering för just den dagen.',
          'Om planen är matinköp och Gamla stan kan bilen stå vid AMARA. Ligger stranden eller aktiviteten verkligen väster om staden tar ni ut den ur garaget och återvänder sedan till en lugn bas med fullständigt kök i La Marina.'
        ]
      },
      {
        id: 'remote-work-coworking', eyebrow: '07 · Arbete när det ingår i resan', title: 'Distansarbete & coworking i Tarifa', paragraphs: [
          'Tarifa har professionell coworkinginfrastruktur. TAF CoWorking i Tarifa Air Force-byggnaden uppger i dag professionellt wifi, individuella arbetsplatser, mötesrum, privata kontor, områden för telefon- och videosamtal, ett ljudisolerat samtalsrum, kök och gemensamma ytor.',
          'Det är värdefullt när en arbetsdag kräver mer än ett semesterboende kan lova. Kontrollera mötesrum, privat kontor eller en särskild samtalsmiljö direkt med verksamheten utan att bygga hela vistelsen runt coworking.',
          'Google Maps anger för närvarande cirka 350 meter, ungefär fem minuter och en till största delen plan gångväg från AMARA till TAF. AMARA erbjuder wifi som privat bas; TAF finns nära när ni behöver en mer kontorslik dag eller en viss professionell funktion.'
        ]
      },
      {
        id: 'longer-stays', eyebrow: '08 · En vecka och längre', title: 'Längre vistelser', paragraphs: [
          'Under en längre vistelse blir upprepningsbar komfort viktigare än en lång sevärdhetslista: matlagning, tvätt, inomhustemperatur, inköp, arbete och friheten att ändra planer med vädret.',
          'Tarifa kan bära den rytmen, men säsongerna påverkar service. Utgå från stabila kategorier — mataffär, marknad, apotek, hälsocenter och coworking — och kontrollera aktuella dagar i stället för att följa en gammal rekommendationslista.',
          'AMARA förenar fullständigt kök, tvättmaskin, wifi, kyla och värme med inköp mittemot, coworking i närheten och reserverad parkering under mark. De verifierade funktionerna tar bort mycket friktion från en eller flera veckor.'
        ]
      },
      {
        id: 'amara-la-marina', eyebrow: '09 · Er bas i La Marina', title: 'Vardagsliv från AMARA i La Marina', paragraphs: [
          'AMARA Family & Surf ligger på Mar Adriático 29 i La Marina. Det är varken mitt i Gamla stan eller ett avskilt strandboende, utan en praktisk urban plats mellan vardagsservice, stadsliv och vägen västerut.',
          'Utan bil handlar ni mittemot, når professionell coworking på cirka fem minuter och går till Gamla stan på ungefär 10–15 minuter. Bilen blir användbar för västkusten, större ärenden och regionala dagar – inte för varje middag eller matinköp.',
          'Den balansen gör La Marina praktiskt under flera dagar eller veckor: hemmets rutiner fungerar nära, staden förblir gångbar och garaget håller det vidare Tarifa tillgängligt när dagen verkligen kräver det.'
        ]
      }
    ],
    related: {
      eyebrow: 'Fortsätt med nästa praktiska fråga',
      title: 'Använd Tarifaguiden ett steg i taget',
      links: [
        { token: 'getting_to_tarifa', label: 'Ankomst & mobilitet', text: 'Flygplatser, buss, färja, bil och sista sträckan till Mar Adriático 29.' },
        { token: 'tarifa_geography', label: 'Geografi & orientering', text: 'Hur stad, sund, Atlantkust och riktningen västerut hänger samman.' },
        { token: 'tarifa_where_to_stay', label: 'Var ska man bo / områden', text: 'Jämför La Marina med Gamla stan, Los Lances och landsbygden.' },
        { token: 'tarifa_weather', label: 'Väder & årstider', text: 'Hur säsong, Levante och Poniente förändrar vardagens val.' },
        { token: 'casa', label: 'AMARA Family & Surf', text: 'Se boendet när dess praktiska sammanhang har blivit tydligt.' }
      ]
    },
    sources: {
      eyebrow: 'Guidens underlag',
      title: 'Aktuella kontroller av service och vägar',
      intro: 'En verksamhet nämns bara när den ger konkret orientering. Faciliteter, vägar och status kan ändras; nära vistelsen är ansvarig verksamhet den slutliga källan.',
      checked: 'Källor kontrollerade den 13 augusti 2026',
      links: [
        { label: 'TAF CoWorking · officiell information', text: 'Aktuella arbetsplatser, mötesrum, kontor och samtalsområden.', href: sourceHrefs.taf },
        { label: 'Google Maps · AMARA till TAF', text: 'Kontrollerad som 350 m, cirka fyra minuter och till största delen plan; i gästtexten avrundad till cirka fem minuter.', href: sourceHrefs.tafWalk },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Tarifa', text: 'Officiell aktuell post för Tarifas offentliga hälsocenter.', href: sourceHrefs.health },
        { label: 'Junta de Andalucía · nödnummer 112', text: 'Officiell bekräftelse av det gemensamma kostnadsfria nödnumret i Andalusien.', href: sourceHrefs.emergency },
        { label: 'Ayuntamiento de Tarifa · kommunala marknader', text: 'Aktuellt kommunalt underlag för marknaderna Calle Colón och Virgen del Carmen.', href: sourceHrefs.market }
      ]
    },
    closing: {
      eyebrow: 'Välj en bas som fungerar vanliga dagar',
      title: 'Tarifa blir enklare när vardagen förblir enkel',
      body: 'Vid AMARA kan inköp, stad, professionell arbetsplats och en parkerad bil finnas sida vid sida utan att resan blir ett schema. Börja med lägesguiden eller fortsätt till boendet.',
      locationLabel: 'Upptäck Tarifas läge',
      propertyLabel: 'Visa AMARA Family & Surf'
    }
  }
};
