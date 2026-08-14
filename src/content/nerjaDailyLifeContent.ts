import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface NerjaDailyLifeSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface NerjaDailyLifeLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: NerjaDailyLifeSection[];
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

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

/**
 * Opening hours change. Every source here is a public body or a public listing,
 * and the page deliberately hedges times rather than freezing them into copy.
 */
const sharedSources = {
  health:
    'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/el-sas/servicios-y-centros/informacion-por-centros/24887',
  busStation: 'https://www.spain.info/en/transport/nerja-bus-station/',
  market: 'https://www.mercadillosemanal.com/en.malaga/mercadillo-de-nerja',
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29075'
};

export const nerjaDailyLifeSeo: AmaraAuthoringSeo = {
  version: '2026-08-13-nerja-daily-life-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Daily Life in Nerja: Shopping, Market, Services & Rhythm',
      description:
        'How ordinary life works in Nerja: the Tuesday market, groceries, pharmacies, the health centre and the rhythm of a Spanish coastal town.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Alltag in Nerja: Einkaufen, Markt, Versorgung & Rhythmus',
      description:
        'Wie der normale Alltag in Nerja funktioniert: Dienstagsmarkt, Einkaufen, Apotheken, Gesundheitszentrum und der Rhythmus einer spanischen Küstenstadt.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Vida diaria en Nerja: compras, mercadillo, servicios y ritmo',
      description:
        'Cómo funciona la vida cotidiana en Nerja: el mercadillo de los martes, la compra, farmacias, centro de salud y el ritmo de un pueblo costero.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Dagelijks leven in Nerja: boodschappen, markt, voorzieningen',
      description:
        'Hoe het gewone leven in Nerja werkt: de dinsdagmarkt, boodschappen, apotheken, het gezondheidscentrum en het ritme van een Spaanse kustplaats.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Vardagen i Nerja: inköp, marknad, service och rytm',
      description:
        'Hur vardagen fungerar i Nerja: tisdagsmarknaden, matinköp, apotek, vårdcentralen och rytmen i en spansk kustort.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaDailyLifeContent: Record<AmaraLanguage, NerjaDailyLifeLocale> = {
  en: {
    navLabel: 'Daily life & services',
    hero: {
      eyebrow: 'Nerja · Daily life & services',
      title: 'After the first few days, a holiday becomes ordinary life',
      standfirst:
        'Where you buy bread, when the shops shut, how far the pharmacy is — none of it matters on day one and all of it matters by day four. This is the practical layer of a Nerja stay.',
      note: 'Opening hours in Spain change with season and holidays. Treat every time here as a pattern, not a promise.',
      updated: 'Reviewed August 2026'
    },
    facts: [
      { label: 'Weekly market', value: 'Tuesdays, roughly 09:00–14:00' },
      { label: 'Bus station', value: 'From about 06:30 to the last departure' },
      { label: 'Pharmacy by the clinic', value: 'Typically 08:00–22:00' },
      { label: 'Health centre', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'Groceries',
        title: 'Everyday shopping is a walk, not a drive',
        paragraphs: [
          'Nerja is large enough to carry full supermarkets and small enough that you reach one on foot from almost anywhere in the centre.',
          'For a self-catering stay that changes the shape of the week: you shop small and often rather than filling a boot once. Bread, fruit and fish get bought on the way back from somewhere else, which is how the town actually lives.',
          'This is exactly how we spent our own holidays here: while my wife slept in a little longer, I walked to the baker and the supermarket. Then breakfast on the terrace, unhurried, looking at the water.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'The market',
        title: 'Tuesday is the day the town rearranges itself',
        paragraphs: [
          'The weekly mercadillo runs every Tuesday, roughly from 09:00 to 14:00, with around two hundred stalls: produce, clothing, shoes, household goods.',
          'It is not in the centre. The market sets up in the Almijara area, about two kilometres out, which is a fifteen to twenty minute walk or five minutes by car, with free parking alongside. On Tuesdays an urban bus connects the centre with the market.',
          'Go early if you want the food stalls at their best, and go late if you would rather have space than choice.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Health & emergencies',
        title: 'What to know before you need it',
        paragraphs: [
          'Nerja has its own health centre run by the Servicio Andaluz de Salud, the Andalusian public health service, which handles primary care for residents and visitors alike.',
          'Pharmacies are easy to find and one of them sits directly opposite the health centre, typically open from early morning until late evening. Spanish pharmacies also run a rota so that one is always open outside normal hours; the duty list is posted in every pharmacy window.',
          'The European emergency number 112 works throughout Spain. Save it before you need it, and note the address of where you are staying — that is the first thing you will be asked.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'The rhythm',
        title: 'The day has a gap in the middle, and dinner starts late',
        paragraphs: [
          'Many smaller shops still close for several hours in the early afternoon and open again towards evening. Supermarkets and businesses aimed at visitors often stay open through, but the pattern is real enough to plan around.',
          'Evening runs later than most northern European guests expect. Restaurants fill from nine, and in summer the streets are busiest well after dark — which is exactly when the coast is at its most pleasant.',
          'Practically: do errands in the morning, take the afternoon off as the town does, and treat the evening as the main event rather than the end of the day.'
        ]
      }
    ],
    related: {
      eyebrow: 'Continue',
      title: 'The rest of the practical picture',
      links: [
        {
          token: 'nerja_weather',
          label: 'Weather & seasons',
          text: 'Why the nights, not the afternoons, decide how a stay feels.'
        },
        {
          token: 'nerja_geography',
          label: 'Geography & orientation',
          text: 'Why gradient matters more than distance in this town.'
        }
      ]
    },
    sources: {
      eyebrow: 'Behind this guide',
      title: 'Sources for the practical details',
      intro:
        'Public bodies and public listings. Because opening hours shift with season and holidays, times on this page are given as patterns and should be confirmed locally before you rely on them.',
      checked: 'Sources checked in August 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Official record of the public health centre serving Nerja.',
          href: sharedSources.health
        },
        {
          label: 'spain.info · Nerja bus station',
          text: 'Official Spanish tourism portal, for the coach connection and station.',
          href: sharedSources.busStation
        },
        {
          label: 'Weekly markets listing · Mercadillo de Nerja',
          text: 'Public listing for the Tuesday market, its location and hours.',
          href: sharedSources.market
        },
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Official municipal context for the size of the town and its services.',
          href: sharedSources.sima
        }
      ]
    },
    closing: {
      eyebrow: 'Back to the stay',
      title: 'A good base is the one that makes the boring days easy.',
      body: 'The beach sells the holiday. The walk home with shopping bags decides whether you would come back.',
      locationLabel: 'Back to the Nerja location guide',
      propertyLabel: 'View AMARA Playa'
    }
  },
  de: {
    navLabel: 'Alltag & Versorgung',
    hero: {
      eyebrow: 'Nerja · Alltag & Versorgung',
      title: 'Nach den ersten Tagen wird aus Urlaub ganz normaler Alltag',
      standfirst:
        'Wo ihr Brot kauft, wann die Läden schließen, wie weit die Apotheke ist – am ersten Tag zählt nichts davon, am vierten alles. Das ist die praktische Ebene eines Nerja-Aufenthalts.',
      note: 'Öffnungszeiten ändern sich in Spanien mit Saison und Feiertagen. Nehmt jede Zeitangabe hier als Muster, nicht als Zusage.',
      updated: 'Geprüft im August 2026'
    },
    facts: [
      { label: 'Wochenmarkt', value: 'Dienstags, etwa 9–14 Uhr' },
      { label: 'Busbahnhof', value: 'Ab ca. 6:30 Uhr bis zur letzten Abfahrt' },
      { label: 'Apotheke am Gesundheitszentrum', value: 'Üblicherweise 8–22 Uhr' },
      { label: 'Gesundheitszentrum', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'Einkaufen',
        title: 'Der tägliche Einkauf ist ein Weg zu Fuß, keine Autofahrt',
        paragraphs: [
          'Nerja ist groß genug für vollwertige Supermärkte und klein genug, dass ihr von fast überall im Zentrum zu Fuß einen erreicht.',
          'Für Selbstversorger ändert das den Rhythmus der Woche: Man kauft klein und oft ein, statt einmal den Kofferraum zu füllen. Brot, Obst und Fisch nimmt man auf dem Rückweg von woanders mit – so lebt der Ort tatsächlich.',
          'Genau so haben wir hier selbst Urlaub gemacht: Während meine Frau morgens noch etwas länger schlafen konnte, bin ich gemütlich zum Bäcker und zum Supermarkt gelaufen. Danach ein entspanntes Frühstück auf der Terrasse, ganz in Ruhe und mit Blick aufs Wasser.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'Der Markt',
        title: 'Dienstags sortiert sich der Ort neu',
        paragraphs: [
          'Der Wochenmarkt findet jeden Dienstag statt, etwa von 9 bis 14 Uhr, mit rund zweihundert Ständen: Obst und Gemüse, Kleidung, Schuhe, Haushaltswaren.',
          'Er liegt nicht im Zentrum. Der Markt baut sich im Bereich Almijara auf, etwa zwei Kilometer außerhalb – fünfzehn bis zwanzig Minuten zu Fuß oder fünf Minuten mit dem Auto, mit kostenlosen Parkplätzen daneben. Dienstags verbindet zusätzlich ein Ortsbus das Zentrum mit dem Markt.',
          'Geht früh, wenn ihr die Lebensmittelstände in Bestform wollt. Geht spät, wenn euch Platz wichtiger ist als Auswahl.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Gesundheit & Notfall',
        title: 'Was ihr wissen solltet, bevor ihr es braucht',
        paragraphs: [
          'Nerja hat ein eigenes Gesundheitszentrum des Servicio Andaluz de Salud, des andalusischen öffentlichen Gesundheitsdienstes. Es übernimmt die Grundversorgung – für Einheimische wie für Gäste.',
          'Apotheken sind leicht zu finden; eine liegt direkt gegenüber dem Gesundheitszentrum und hat üblicherweise von früh morgens bis spät abends geöffnet. Spanische Apotheken haben zusätzlich einen Notdienstplan, sodass außerhalb der normalen Zeiten immer eine geöffnet ist – der Plan hängt in jedem Apothekenfenster.',
          'Die europäische Notrufnummer 112 gilt in ganz Spanien. Speichert sie, bevor ihr sie braucht, und merkt euch die Adresse eurer Unterkunft – danach wird als Erstes gefragt.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'Der Rhythmus',
        title: 'Der Tag hat eine Lücke in der Mitte, und das Abendessen beginnt spät',
        paragraphs: [
          'Viele kleinere Läden schließen am frühen Nachmittag für mehrere Stunden und öffnen gegen Abend wieder. Supermärkte und auf Gäste ausgerichtete Betriebe bleiben oft durchgehend offen, aber das Muster ist real genug, um damit zu planen.',
          'Der Abend liegt später, als die meisten mitteleuropäischen Gäste erwarten. Restaurants füllen sich ab neun, und im Sommer sind die Straßen lange nach Einbruch der Dunkelheit am belebtesten – genau dann, wenn die Küste am angenehmsten ist.',
          'Praktisch heißt das: Besorgungen am Vormittag, den Nachmittag freinehmen wie der Ort selbst, und den Abend als Hauptteil des Tages behandeln statt als Ausklang.'
        ]
      }
    ],
    related: {
      eyebrow: 'Weiterlesen',
      title: 'Der Rest des praktischen Bildes',
      links: [
        {
          token: 'nerja_weather',
          label: 'Wetter & Jahreszeiten',
          text: 'Warum die Nächte und nicht die Nachmittage entscheiden, wie sich ein Aufenthalt anfühlt.'
        },
        {
          token: 'nerja_geography',
          label: 'Geografie & Orientierung',
          text: 'Warum in diesem Ort die Steigung mehr zählt als die Entfernung.'
        }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide',
      title: 'Quellen zu den praktischen Angaben',
      intro:
        'Öffentliche Stellen und öffentliche Verzeichnisse. Weil sich Öffnungszeiten mit Saison und Feiertagen verschieben, stehen Zeiten hier als Muster und sollten vor Ort bestätigt werden.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Amtlicher Eintrag zum öffentlichen Gesundheitszentrum für Nerja.',
          href: sharedSources.health
        },
        {
          label: 'spain.info · Busbahnhof Nerja',
          text: 'Offizielles spanisches Tourismusportal zu Busverbindung und Bahnhof.',
          href: sharedSources.busStation
        },
        {
          label: 'Wochenmarkt-Verzeichnis · Mercadillo de Nerja',
          text: 'Öffentliches Verzeichnis zum Dienstagsmarkt, Ort und Zeiten.',
          href: sharedSources.market
        },
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Amtlicher Rahmen zur Größe des Ortes und seiner Versorgung.',
          href: sharedSources.sima
        }
      ]
    },
    closing: {
      eyebrow: 'Zurück zum Aufenthalt',
      title: 'Eine gute Lage ist die, die auch die langweiligen Tage leicht macht.',
      body: 'Der Strand verkauft den Urlaub. Der Heimweg mit den Einkaufstüten entscheidet, ob ihr wiederkommt.',
      locationLabel: 'Zurück zum Nerja Lage-Guide',
      propertyLabel: 'AMARA Playa ansehen'
    }
  },
  es: {
    navLabel: 'Vida diaria y servicios',
    hero: {
      eyebrow: 'Nerja · Vida diaria y servicios',
      title: 'Pasados los primeros días, las vacaciones se vuelven vida corriente',
      standfirst:
        'Dónde compráis el pan, cuándo cierran las tiendas, a qué distancia está la farmacia: el primer día no importa nada de eso y al cuarto importa todo. Esta es la capa práctica de una estancia en Nerja.',
      note: 'Los horarios en España cambian con la temporada y los festivos. Tomad cada hora de esta página como un patrón, no como una promesa.',
      updated: 'Revisado en agosto de 2026'
    },
    facts: [
      { label: 'Mercadillo semanal', value: 'Martes, aproximadamente 9:00–14:00' },
      { label: 'Estación de autobuses', value: 'Desde las 6:30 hasta la última salida' },
      { label: 'Farmacia junto al centro de salud', value: 'Habitualmente 8:00–22:00' },
      { label: 'Centro de salud', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'La compra',
        title: 'La compra diaria es un paseo, no un trayecto en coche',
        paragraphs: [
          'Nerja es lo bastante grande para tener supermercados completos y lo bastante pequeña para llegar a uno a pie desde casi cualquier punto del centro.',
          'Para quien cocina en casa, eso cambia el ritmo de la semana: se compra poco y a menudo en vez de llenar el maletero una vez. El pan, la fruta y el pescado se recogen de vuelta de otro sitio, que es como vive realmente el pueblo.',
          'Así vivimos aquí nuestras propias vacaciones: mientras mi mujer dormía un rato más, yo bajaba tranquilamente a la panadería y al supermercado. Después, un desayuno sin prisa en la terraza, con vistas al agua.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'El mercadillo',
        title: 'El martes el pueblo se reordena',
        paragraphs: [
          'El mercadillo semanal se celebra todos los martes, aproximadamente de 9:00 a 14:00, con unos doscientos puestos: fruta y verdura, ropa, calzado y menaje.',
          'No está en el centro. Se monta en la zona de Almijara, a unos dos kilómetros, es decir quince o veinte minutos a pie o cinco en coche, con aparcamiento gratuito al lado. Los martes hay además un autobús urbano que conecta el centro con el mercadillo.',
          'Id temprano si queréis los puestos de alimentación en su mejor momento; id tarde si preferís espacio antes que variedad.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Salud y urgencias',
        title: 'Lo que conviene saber antes de necesitarlo',
        paragraphs: [
          'Nerja cuenta con su propio centro de salud del Servicio Andaluz de Salud, que atiende la asistencia primaria tanto de residentes como de visitantes.',
          'Las farmacias son fáciles de encontrar y una está justo enfrente del centro de salud, con horario habitual de primera hora de la mañana hasta bien entrada la noche. Además existe un turno de guardia para que siempre haya una abierta fuera del horario normal; el listado se expone en el escaparate de cada farmacia.',
          'El número europeo de emergencias 112 funciona en toda España. Guardadlo antes de necesitarlo y tened a mano la dirección de vuestro alojamiento: es lo primero que os van a preguntar.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'El ritmo',
        title: 'El día tiene un hueco en medio y la cena empieza tarde',
        paragraphs: [
          'Muchos comercios pequeños siguen cerrando varias horas a primera hora de la tarde y vuelven a abrir hacia el anochecer. Los supermercados y los negocios orientados al visitante suelen mantener horario continuo, pero el patrón es lo bastante real como para planificar con él.',
          'La noche va más tarde de lo que esperan la mayoría de los huéspedes del norte de Europa. Los restaurantes se llenan a partir de las nueve y, en verano, las calles están más animadas bastante después del anochecer, justo cuando la costa resulta más agradable.',
          'En la práctica: los recados por la mañana, la tarde libre como hace el pueblo, y la noche como plato principal del día y no como su final.'
        ]
      }
    ],
    related: {
      eyebrow: 'Seguir leyendo',
      title: 'El resto del panorama práctico',
      links: [
        {
          token: 'nerja_weather',
          label: 'Tiempo y estaciones',
          text: 'Por qué son las noches, y no las tardes, las que deciden cómo se vive una estancia.'
        },
        {
          token: 'nerja_geography',
          label: 'Geografía y orientación',
          text: 'Por qué en este pueblo importa más la pendiente que la distancia.'
        }
      ]
    },
    sources: {
      eyebrow: 'Detrás de esta guía',
      title: 'Fuentes de los datos prácticos',
      intro:
        'Organismos públicos y directorios públicos. Como los horarios varían con la temporada y los festivos, las horas de esta página se dan como patrón y conviene confirmarlas allí antes de contar con ellas.',
      checked: 'Fuentes consultadas en agosto de 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Ficha oficial del centro de salud público que atiende a Nerja.',
          href: sharedSources.health
        },
        {
          label: 'spain.info · Estación de autobuses de Nerja',
          text: 'Portal oficial de turismo de España, para la conexión y la estación.',
          href: sharedSources.busStation
        },
        {
          label: 'Directorio de mercadillos · Mercadillo de Nerja',
          text: 'Directorio público del mercadillo de los martes, ubicación y horario.',
          href: sharedSources.market
        },
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Contexto municipal oficial sobre el tamaño del pueblo y sus servicios.',
          href: sharedSources.sima
        }
      ]
    },
    closing: {
      eyebrow: 'De vuelta a la estancia',
      title: 'Una buena base es la que hace fáciles también los días aburridos.',
      body: 'La playa vende las vacaciones. La vuelta a casa con las bolsas decide si volveríais.',
      locationLabel: 'Volver a la guía de ubicación de Nerja',
      propertyLabel: 'Ver AMARA Playa'
    }
  },
  nl: {
    navLabel: 'Dagelijks leven & voorzieningen',
    hero: {
      eyebrow: 'Nerja · Dagelijks leven & voorzieningen',
      title: 'Na de eerste dagen wordt vakantie gewoon dagelijks leven',
      standfirst:
        'Waar jullie brood kopen, wanneer de winkels sluiten, hoe ver de apotheek is — op dag één telt niets daarvan en op dag vier alles. Dit is de praktische laag van een verblijf in Nerja.',
      note: 'Openingstijden veranderen in Spanje met seizoen en feestdagen. Neem elke tijd hier als patroon, niet als belofte.',
      updated: 'Gecontroleerd in augustus 2026'
    },
    facts: [
      { label: 'Weekmarkt', value: 'Dinsdags, ongeveer 09:00–14:00' },
      { label: 'Busstation', value: 'Vanaf circa 06:30 tot het laatste vertrek' },
      { label: 'Apotheek bij het gezondheidscentrum', value: 'Doorgaans 08:00–22:00' },
      { label: 'Gezondheidscentrum', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'Boodschappen',
        title: 'De dagelijkse boodschap is een wandeling, geen autorit',
        paragraphs: [
          'Nerja is groot genoeg voor volwaardige supermarkten en klein genoeg om er vanuit vrijwel het hele centrum te voet te komen.',
          'Voor wie zelf kookt verandert dat het ritme van de week: je koopt klein en vaak in plaats van één keer de kofferbak te vullen. Brood, fruit en vis neem je mee op de terugweg van ergens anders — zo leeft het dorp ook echt.',
          'Precies zo brachten we hier onze eigen vakanties door: terwijl mijn vrouw ’s ochtends nog wat langer sliep, liep ik rustig naar de bakker en de supermarkt. Daarna een ontspannen ontbijt op het terras, met uitzicht op het water.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'De markt',
        title: 'Op dinsdag herschikt het dorp zich',
        paragraphs: [
          'De weekmarkt is er elke dinsdag, ongeveer van 09:00 tot 14:00, met zo’n tweehonderd kramen: groente en fruit, kleding, schoenen en huishoudelijke waren.',
          'Hij ligt niet in het centrum. De markt bouwt op in de wijk Almijara, ongeveer twee kilometer verderop: vijftien tot twintig minuten lopen of vijf minuten met de auto, met gratis parkeren ernaast. Op dinsdag rijdt er bovendien een stadsbus tussen het centrum en de markt.',
          'Ga vroeg als jullie de voedselkramen op hun best willen, en laat als ruimte jullie meer waard is dan keuze.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Zorg & noodgevallen',
        title: 'Wat je wilt weten vóór je het nodig hebt',
        paragraphs: [
          'Nerja heeft een eigen gezondheidscentrum van de Servicio Andaluz de Salud, de Andalusische openbare gezondheidsdienst, voor de eerstelijnszorg van bewoners én bezoekers.',
          'Apotheken zijn goed te vinden en één zit recht tegenover het gezondheidscentrum, doorgaans open van vroeg tot laat op de avond. Spaanse apotheken hebben daarnaast een dienstrooster zodat er buiten de normale uren altijd één open is; die lijst hangt bij elke apotheek voor het raam.',
          'Het Europese alarmnummer 112 werkt in heel Spanje. Sla het op vóór je het nodig hebt, en ken het adres van jullie verblijf — daar wordt als eerste naar gevraagd.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'Het ritme',
        title: 'De dag heeft een gat in het midden en het diner begint laat',
        paragraphs: [
          'Veel kleinere winkels sluiten in de vroege middag nog enkele uren en openen tegen de avond weer. Supermarkten en op bezoekers gerichte zaken blijven vaak doorlopend open, maar het patroon is reëel genoeg om mee te plannen.',
          'De avond ligt later dan de meeste Noord-Europese gasten verwachten. Restaurants lopen vanaf negen uur vol en in de zomer zijn de straten ruim na zonsondergang het drukst — precies wanneer de kust op haar prettigst is.',
          'Praktisch: boodschappen in de ochtend, de middag vrij zoals het dorp dat doet, en de avond als hoofdmoot van de dag in plaats van als afsluiting.'
        ]
      }
    ],
    related: {
      eyebrow: 'Verder lezen',
      title: 'De rest van het praktische beeld',
      links: [
        {
          token: 'nerja_weather',
          label: 'Weer & seizoenen',
          text: 'Waarom de nachten, en niet de middagen, bepalen hoe een verblijf voelt.'
        },
        {
          token: 'nerja_geography',
          label: 'Geografie & oriëntatie',
          text: 'Waarom hoogteverschil in dit dorp meer telt dan afstand.'
        }
      ]
    },
    sources: {
      eyebrow: 'Achter deze gids',
      title: 'Bronnen voor de praktische gegevens',
      intro:
        'Overheidsinstanties en openbare registers. Omdat openingstijden met seizoen en feestdagen schuiven, staan tijden hier als patroon en zijn ze ter plaatse te bevestigen.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Officiële vermelding van het openbare gezondheidscentrum voor Nerja.',
          href: sharedSources.health
        },
        {
          label: 'spain.info · Busstation Nerja',
          text: 'Officieel Spaans toerismeportaal, voor de busverbinding en het station.',
          href: sharedSources.busStation
        },
        {
          label: 'Weekmarktenregister · Mercadillo de Nerja',
          text: 'Openbaar register van de dinsdagmarkt, locatie en tijden.',
          href: sharedSources.market
        },
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Officiële gemeentelijke context over de omvang van het dorp en zijn voorzieningen.',
          href: sharedSources.sima
        }
      ]
    },
    closing: {
      eyebrow: 'Terug naar het verblijf',
      title: 'Een goede uitvalsbasis maakt ook de saaie dagen makkelijk.',
      body: 'Het strand verkoopt de vakantie. De weg naar huis met boodschappentassen bepaalt of jullie terugkomen.',
      locationLabel: 'Terug naar de Nerja locatiegids',
      propertyLabel: 'Bekijk AMARA Playa'
    }
  },
  sv: {
    navLabel: 'Vardagsliv & service',
    hero: {
      eyebrow: 'Nerja · Vardagsliv & service',
      title: 'Efter de första dagarna blir semestern helt vanlig vardag',
      standfirst:
        'Var ni köper bröd, när butikerna stänger, hur långt det är till apoteket — dag ett spelar inget av det roll, dag fyra spelar allt roll. Det här är det praktiska lagret av en vistelse i Nerja.',
      note: 'Öppettider i Spanien ändras med säsong och helgdagar. Se varje tid här som ett mönster, inte ett löfte.',
      updated: 'Granskad i augusti 2026'
    },
    facts: [
      { label: 'Veckomarknad', value: 'Tisdagar, ungefär 09:00–14:00' },
      { label: 'Busstation', value: 'Från cirka 06:30 till sista avgången' },
      { label: 'Apotek vid vårdcentralen', value: 'Vanligtvis 08:00–22:00' },
      { label: 'Vårdcentral', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'Matinköp',
        title: 'Den dagliga handlingen är en promenad, inte en bilresa',
        paragraphs: [
          'Nerja är stort nog för fullstora mataffärer och litet nog för att ni når en till fots från nästan hela centrum.',
          'För den som lagar mat själv ändrar det veckans rytm: man handlar litet och ofta i stället för att fylla bagageluckan en gång. Bröd, frukt och fisk tar man med på vägen hem från något annat — så lever orten faktiskt.',
          'Precis så tillbringade vi våra egna semestrar här: medan min fru sov lite längre på morgonen promenerade jag lugnt till bageriet och mataffären. Sedan en avspänd frukost på terrassen, i lugn och ro med utsikt över vattnet.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'Marknaden',
        title: 'På tisdagar möblerar orten om sig',
        paragraphs: [
          'Veckomarknaden hålls varje tisdag, ungefär mellan 09:00 och 14:00, med omkring tvåhundra stånd: frukt och grönt, kläder, skor och husgeråd.',
          'Den ligger inte i centrum. Marknaden byggs upp i området Almijara, ungefär två kilometer bort — femton till tjugo minuters promenad eller fem minuter med bil, med gratis parkering intill. På tisdagar går dessutom en lokalbuss mellan centrum och marknaden.',
          'Gå tidigt om ni vill ha matstånden när de är som bäst, och sent om ni hellre vill ha utrymme än utbud.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Vård & nödsituationer',
        title: 'Sådant ni vill veta innan ni behöver det',
        paragraphs: [
          'Nerja har en egen vårdcentral inom Servicio Andaluz de Salud, Andalusiens offentliga hälso- och sjukvård, som sköter primärvården för både boende och besökare.',
          'Apotek är lätta att hitta och ett ligger direkt mittemot vårdcentralen, vanligtvis öppet från tidig morgon till sen kväll. Spanska apotek har dessutom jourschema så att ett alltid är öppet utanför ordinarie tider; listan sitter i varje apoteksfönster.',
          'Det europeiska nödnumret 112 fungerar i hela Spanien. Spara det innan ni behöver det, och ha adressen till ert boende till hands — det är det första ni får frågan om.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'Rytmen',
        title: 'Dagen har en lucka i mitten, och middagen börjar sent',
        paragraphs: [
          'Många mindre butiker stänger fortfarande några timmar tidig eftermiddag och öppnar igen mot kvällen. Mataffärer och verksamheter riktade mot besökare håller ofta öppet genomgående, men mönstret är verkligt nog att planera efter.',
          'Kvällen ligger senare än de flesta nordeuropeiska gäster väntar sig. Restaurangerna fylls från nio, och på sommaren är gatorna som livligast långt efter mörkrets inbrott — precis när kusten är som behagligast.',
          'I praktiken: ärenden på förmiddagen, ledig eftermiddag som orten själv tar, och kvällen som dagens huvudnummer i stället för dess avslutning.'
        ]
      }
    ],
    related: {
      eyebrow: 'Läs vidare',
      title: 'Resten av den praktiska bilden',
      links: [
        {
          token: 'nerja_weather',
          label: 'Väder & årstider',
          text: 'Varför det är nätterna, inte eftermiddagarna, som avgör hur en vistelse känns.'
        },
        {
          token: 'nerja_geography',
          label: 'Geografi & orientering',
          text: 'Varför lutning betyder mer än avstånd i den här orten.'
        }
      ]
    },
    sources: {
      eyebrow: 'Bakom guiden',
      title: 'Källor till de praktiska uppgifterna',
      intro:
        'Offentliga myndigheter och offentliga register. Eftersom öppettider skiftar med säsong och helgdagar anges tider här som mönster och bör bekräftas på plats.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Officiell post om den offentliga vårdcentralen för Nerja.',
          href: sharedSources.health
        },
        {
          label: 'spain.info · Nerjas busstation',
          text: 'Spaniens officiella turismportal, för bussförbindelsen och stationen.',
          href: sharedSources.busStation
        },
        {
          label: 'Veckomarknadsregister · Mercadillo de Nerja',
          text: 'Offentligt register över tisdagsmarknaden, plats och tider.',
          href: sharedSources.market
        },
        {
          label: 'Instituto de Estadística y Cartografía de Andalucía · Nerja',
          text: 'Officiell kommunal kontext om ortens storlek och dess service.',
          href: sharedSources.sima
        }
      ]
    },
    closing: {
      eyebrow: 'Tillbaka till vistelsen',
      title: 'En bra bas är den som gör även de tråkiga dagarna enkla.',
      body: 'Stranden säljer semestern. Hemvägen med matkassarna avgör om ni skulle komma tillbaka.',
      locationLabel: 'Tillbaka till Nerjas lägesguide',
      propertyLabel: 'Visa AMARA Playa'
    }
  }
};
