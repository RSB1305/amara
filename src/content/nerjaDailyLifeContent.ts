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
  dateModified: '2026-08-16',
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
  market: 'https://www.mercadillosemanal.com/en.malaga/mercadillo-de-nerja',
  sima: 'https://www.juntadeandalucia.es/institutodeestadisticaycartografia/sima/ficha.htm?mun=29075'
};

export const nerjaDailyLifeSeo: AmaraAuthoringSeo = {
  version: '2026-08-16-nerja-daily-life-v1.1',
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
      { label: 'Everyday shopping', value: 'Supermarkets, bakeries and specialist shops' },
      { label: 'Weekly market', value: 'Tuesdays in the Almijara area' },
      { label: 'Central routines', value: 'Many errands work on foot' },
      { label: 'Health centre', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'Groceries',
        title: 'Everyday shopping is a walk, not a drive',
        paragraphs: [
          'Nerja’s size supports full supermarkets, bakeries, pharmacies and a broader range of specialist and household shopping than a small village. In the centre, much of that everyday supply can be combined on foot.',
          'The exact neighbourhood still matters. Coastal and central addresses keep many repeated errands easier, while upper residential areas add gradient or make a car more useful. From AMARA Playa, normal central shopping fits naturally into the walk between Torrecilla and the old town.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'The market',
        title: 'Tuesday is the day the town rearranges itself',
        paragraphs: [
          'The weekly mercadillo takes place on Tuesdays in the Almijara area, outside the compact centre. It adds produce, clothing and household stalls to Nerja’s normal retail range.',
          'Because market arrangements and hours can change, treat the day and area as orientation and confirm current details before making the trip.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Health & emergencies',
        title: 'What to know before you need it',
        paragraphs: [
          'Nerja has its own health centre within the Servicio Andaluz de Salud and a broad choice of pharmacies across town.',
          'Opening hours vary, so use the current Farmacia de Guardia information when timing matters. This page keeps healthcare as practical location context rather than medical advice.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'The rhythm',
        title: 'Opening patterns differ by business, season and day',
        paragraphs: [
          'Some smaller businesses use split hours, while larger supermarkets and visitor-facing shops may stay open through. Sundays, public holidays and seasonal changes create further differences.',
          'The reliable rule is to check the specific business rather than assume one fixed siesta or Sunday pattern for the whole town. Evening life still starts later than many northern European guests expect, but normal errands do not all follow the same clock.'
        ]
      },
      {
        id: 'without-a-car',
        eyebrow: 'Getting around',
        title: 'A central Nerja stay can keep ordinary life largely car-free',
        paragraphs: [
          'Supermarkets, bakeries, pharmacies, beaches and restaurants are close enough to combine on foot in central Nerja. A car becomes more useful for upper neighbourhoods, larger regional shopping or several destinations in one day.',
          'Walkability is therefore a location question, not a universal promise about the municipality. The geography and Where to Stay guides explain the gradient and neighbourhood trade-offs.'
        ]
      },
      {
        id: 'frigiliana-complement',
        eyebrow: 'Nerja & Frigiliana',
        title: 'Broader choice and village convenience are complementary strengths',
        paragraphs: [
          'Nerja offers the wider retail and service range of a larger coastal town. Frigiliana handles normal daily needs through a smaller village network. Neither needs to be framed as the deficient version of the other; they support different rhythms and can easily form part of the same stay.'
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
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Where to stay in Nerja',
          text: 'Compare central, coastal and upper residential routines.'
        },
        {
          token: 'frigiliana_daily_life',
          label: 'Daily life in Frigiliana',
          text: 'How the nearby village handles groceries, services and car-free errands.'
        }
      ]
    },
    sources: {
      eyebrow: 'Behind this guide',
      title: 'Sources for the practical details',
      intro:
        'Public bodies and public listings. Volatile opening hours are intentionally not frozen into the guide and should be confirmed with the individual business.',
      checked: 'Sources checked in August 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Official record of the public health centre serving Nerja.',
          href: sharedSources.health
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
      { label: 'Einkaufen im Alltag', value: 'Supermärkte, Bäckereien und Fachgeschäfte' },
      { label: 'Wochenmarkt', value: 'Dienstags im Bereich Almijara' },
      { label: 'Zentrale Wege', value: 'Viele Erledigungen funktionieren zu Fuß' },
      { label: 'Gesundheitszentrum', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'Einkaufen',
        title: 'Der tägliche Einkauf ist ein Weg zu Fuß, keine Autofahrt',
        paragraphs: [
          'Nerjas Größe trägt vollwertige Supermärkte, Bäckereien, Apotheken und eine breitere Auswahl an Fach- und Haushaltsgeschäften als ein kleines Dorf. Im Zentrum lässt sich vieles davon zu Fuß verbinden.',
          'Die konkrete Lage bleibt entscheidend. Küstennahe und zentrale Adressen halten wiederkehrende Wege einfacher; in oberen Wohnlagen kommen Steigung oder häufiger ein Auto hinzu. Von AMARA Playa passt der normale Einkauf natürlich in den Weg zwischen Torrecilla und Altstadt.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'Der Markt',
        title: 'Dienstags sortiert sich der Ort neu',
        paragraphs: [
          'Der Wochenmarkt findet dienstags im Bereich Almijara außerhalb des kompakten Zentrums statt. Er ergänzt Nerjas reguläres Angebot um Lebensmittel-, Kleidungs- und Haushaltsstände.',
          'Weil sich Marktorganisation und Zeiten ändern können, dienen Tag und Bereich hier nur zur Orientierung; prüft aktuelle Details vor dem Weg dorthin.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Gesundheit & Notfall',
        title: 'Was ihr wissen solltet, bevor ihr es braucht',
        paragraphs: [
          'Nerja hat ein eigenes Gesundheitszentrum des Servicio Andaluz de Salud und eine breite Auswahl an Apotheken im Ort.',
          'Öffnungszeiten unterscheiden sich; wenn das Timing zählt, nutzt die aktuelle Farmacia-de-Guardia-Information. Diese Seite hält Medizin bewusst als praktische Ortsinformation und nicht als Ratgeber.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'Der Rhythmus',
        title: 'Öffnungsmuster unterscheiden sich nach Betrieb, Saison und Tag',
        paragraphs: [
          'Einige kleinere Betriebe arbeiten mit geteilten Zeiten, während größere Supermärkte und besucherorientierte Läden durchgehend öffnen können. Sonntage, Feiertage und Saison bringen weitere Unterschiede.',
          'Verlässlich ist deshalb nur der Blick auf den konkreten Betrieb – nicht die Annahme einer festen Siesta oder Sonntagsregel für den ganzen Ort. Der Abend beginnt weiterhin später als für viele nordeuropäische Gäste gewohnt, aber normale Erledigungen folgen nicht alle derselben Uhr.'
        ]
      },
      {
        id: 'without-a-car',
        eyebrow: 'Fortbewegung',
        title: 'In zentraler Lage bleibt der normale Alltag weitgehend autofrei',
        paragraphs: [
          'Supermärkte, Bäckereien, Apotheken, Strände und Restaurants liegen im Zentrum nah genug, um sie zu Fuß zu verbinden. In oberen Vierteln, für größere regionale Einkäufe oder mehrere Ziele an einem Tag wird das Auto nützlicher.',
          'Fußläufigkeit ist damit eine Lagenfrage und keine pauschale Zusage für das gesamte Gemeindegebiet. Geografie- und Lagen-Guide erklären Gefälle und Viertelunterschiede.'
        ]
      },
      {
        id: 'frigiliana-complement',
        eyebrow: 'Nerja & Frigiliana',
        title: 'Breite Auswahl und dörfliche Nähe sind komplementäre Stärken',
        paragraphs: [
          'Nerja bietet die größere Handels- und Serviceauswahl einer Küstenstadt. Frigiliana deckt den normalen täglichen Bedarf über ein kleineres Dorfnetz. Keiner der Orte ist die mangelhaft versorgte Version des anderen; beide tragen unterschiedliche Rhythmen und lassen sich leicht im selben Aufenthalt verbinden.'
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
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Wo in Nerja übernachten',
          text: 'Zentrale, küstennahe und obere Wohnlagen im Alltag vergleichen.'
        },
        {
          token: 'frigiliana_daily_life',
          label: 'Alltag & Versorgung in Frigiliana',
          text: 'Wie das nahe Dorf Lebensmittel, Services und autofreie Erledigungen organisiert.'
        }
      ]
    },
    sources: {
      eyebrow: 'Belege hinter dem Guide',
      title: 'Quellen zu den praktischen Angaben',
      intro:
        'Öffentliche Stellen und öffentliche Verzeichnisse. Veränderliche Öffnungszeiten werden bewusst nicht festgeschrieben und sollten beim jeweiligen Betrieb geprüft werden.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Amtlicher Eintrag zum öffentlichen Gesundheitszentrum für Nerja.',
          href: sharedSources.health
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
      { label: 'Compra cotidiana', value: 'Supermercados, panaderías y tiendas especializadas' },
      { label: 'Mercadillo semanal', value: 'Martes en la zona de Almijara' },
      { label: 'Rutinas céntricas', value: 'Muchos recados funcionan a pie' },
      { label: 'Centro de salud', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'La compra',
        title: 'La compra diaria es un paseo, no un trayecto en coche',
        paragraphs: [
          'El tamaño de Nerja permite contar con supermercados completos, panaderías, farmacias y una oferta de tiendas especializadas y de hogar mayor que la de un pueblo pequeño. En el centro, buena parte de esa vida cotidiana se combina a pie.',
          'La zona exacta sigue importando. Las direcciones céntricas y costeras mantienen más fáciles los recados repetidos; en las áreas residenciales altas aparecen la pendiente o un uso más frecuente del coche. Desde AMARA Playa, la compra cotidiana encaja en el recorrido entre Torrecilla y el casco antiguo.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'El mercadillo',
        title: 'El martes el pueblo se reordena',
        paragraphs: [
          'El mercadillo semanal se celebra los martes en la zona de Almijara, fuera del centro compacto. Añade puestos de alimentación, ropa y hogar a la oferta comercial habitual de Nerja.',
          'Como la organización y los horarios pueden cambiar, tomad el día y la zona como orientación y comprobad los detalles actuales antes de desplazaros.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Salud y urgencias',
        title: 'Lo que conviene saber antes de necesitarlo',
        paragraphs: [
          'Nerja cuenta con su propio centro de salud del Servicio Andaluz de Salud y una amplia red de farmacias por el pueblo.',
          'Los horarios varían; cuando el momento sea importante, consultad la Farmacia de Guardia actual. Esta página mantiene la sanidad como información práctica de ubicación, no como consejo médico.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'El ritmo',
        title: 'Los horarios cambian según negocio, temporada y día',
        paragraphs: [
          'Algunos negocios pequeños trabajan con horario partido, mientras grandes supermercados y comercios orientados al visitante pueden abrir de forma continua. Domingos, festivos y temporada añaden más diferencias.',
          'La regla fiable es comprobar el negocio concreto, no suponer una siesta fija o una norma dominical para todo el pueblo. La noche empieza más tarde de lo habitual para muchos huéspedes del norte de Europa, pero los recados no siguen todos el mismo reloj.'
        ]
      },
      {
        id: 'without-a-car',
        eyebrow: 'Moverse',
        title: 'Una estancia céntrica permite resolver gran parte del día a día sin coche',
        paragraphs: [
          'Supermercados, panaderías, farmacias, playas y restaurantes están lo bastante cerca en el centro para combinarlos a pie. El coche gana utilidad en barrios altos, para compras regionales mayores o para unir varios destinos en una jornada.',
          'Caminar bien depende, por tanto, de la ubicación y no es una promesa universal sobre todo el municipio. Las guías de geografía y zonas desarrollan pendientes y diferencias entre barrios.'
        ]
      },
      {
        id: 'frigiliana-complement',
        eyebrow: 'Nerja y Frigiliana',
        title: 'La variedad amplia y la cercanía de pueblo son fortalezas complementarias',
        paragraphs: [
          'Nerja ofrece la gama comercial y de servicios de una localidad costera mayor. Frigiliana cubre las necesidades normales mediante una red de pueblo más pequeña. Ninguna es la versión mal abastecida de la otra; sostienen ritmos diferentes y pueden formar parte de la misma estancia.'
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
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Dónde alojarse en Nerja',
          text: 'Comparar la rutina del centro, la costa y las zonas residenciales altas.'
        },
        {
          token: 'frigiliana_daily_life',
          label: 'Vida diaria en Frigiliana',
          text: 'Cómo resuelve el pueblo cercano la compra, los servicios y los recados sin coche.'
        }
      ]
    },
    sources: {
      eyebrow: 'Detrás de esta guía',
      title: 'Fuentes de los datos prácticos',
      intro:
        'Organismos y directorios públicos. Los horarios variables no se fijan en la guía y conviene confirmarlos con cada negocio.',
      checked: 'Fuentes consultadas en agosto de 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Ficha oficial del centro de salud público que atiende a Nerja.',
          href: sharedSources.health
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
      { label: 'Dagelijkse boodschappen', value: 'Supermarkten, bakkers en speciaalzaken' },
      { label: 'Weekmarkt', value: 'Dinsdags in de wijk Almijara' },
      { label: 'Centrale routine', value: 'Veel boodschappen kunnen te voet' },
      { label: 'Gezondheidscentrum', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'Boodschappen',
        title: 'De dagelijkse boodschap is een wandeling, geen autorit',
        paragraphs: [
          'Nerja is groot genoeg voor volwaardige supermarkten, bakkers, apotheken en een breder aanbod aan speciaalzaken en huishoudelijke winkels dan een klein dorp. In het centrum zijn veel dagelijkse boodschappen goed te voet te combineren.',
          'De precieze wijk blijft belangrijk. Aan de kust en in het centrum zijn terugkerende boodschappen eenvoudiger, terwijl hoger gelegen woonwijken meer hoogteverschil toevoegen of een auto nuttiger maken. Vanaf AMARA Playa past de normale centrale boodschap vanzelf in de wandeling tussen Torrecilla en de oude stad.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'De markt',
        title: 'Op dinsdag herschikt het dorp zich',
        paragraphs: [
          'De weekmarkt vindt op dinsdag plaats in de wijk Almijara, buiten het compacte centrum. Hij voegt groente, kleding en huishoudelijke kramen toe aan Nerja’s gewone winkelaanbod.',
          'Omdat marktindeling en openingstijden kunnen veranderen, zijn dag en wijk hier bedoeld als oriëntatie. Controleer de actuele details voordat jullie vertrekken.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Zorg & noodgevallen',
        title: 'Wat je wilt weten vóór je het nodig hebt',
        paragraphs: [
          'Nerja heeft een eigen gezondheidscentrum binnen de Servicio Andaluz de Salud en een ruime keuze aan apotheken verspreid over de plaats.',
          'Openingstijden verschillen. Gebruik daarom de actuele informatie over de Farmacia de Guardia wanneer het tijdstip belangrijk is. Deze pagina behandelt zorg alleen als praktische locatiecontext, niet als medisch advies.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'Het ritme',
        title: 'Openingstijden verschillen per zaak, seizoen en dag',
        paragraphs: [
          'Sommige kleinere zaken werken met gesplitste openingstijden, terwijl grotere supermarkten en op bezoekers gerichte winkels soms doorlopend open zijn. Zondagen, feestdagen en seizoenswisselingen zorgen voor extra verschillen.',
          'De betrouwbare regel is om de specifieke zaak te controleren in plaats van één vast siësta- of zondagspatroon voor de hele plaats aan te nemen. Het avondleven begint nog steeds later dan veel Noord-Europese gasten verwachten, maar gewone boodschappen volgen niet allemaal dezelfde klok.'
        ]
      },
      {
        id: 'without-a-car',
        eyebrow: 'Onderweg',
        title: 'Vanuit centraal Nerja kan het gewone leven grotendeels zonder auto',
        paragraphs: [
          'Supermarkten, bakkers, apotheken, stranden en restaurants liggen in centraal Nerja dicht genoeg bij elkaar om te voet te combineren. Een auto wordt nuttiger voor hogere wijken, grotere regionale inkopen of meerdere bestemmingen op één dag.',
          'Beloopbaarheid is dus een locatievraag, geen algemene belofte voor de hele gemeente. De gidsen over geografie en verblijfslocaties leggen de hoogteverschillen en wijkkeuzes uit.'
        ]
      },
      {
        id: 'frigiliana-complement',
        eyebrow: 'Nerja & Frigiliana',
        title: 'Breder aanbod en dorpsgemak zijn aanvullende sterke punten',
        paragraphs: [
          'Nerja biedt het bredere winkel- en dienstenaanbod van een grotere kustplaats. Frigiliana dekt de normale dagelijkse behoeften via een kleiner dorpsnetwerk. Geen van beide hoeft als de gebrekkige versie van de ander te worden voorgesteld; ze passen bij verschillende ritmes en zijn eenvoudig in één verblijf te combineren.'
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
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Waar verblijven in Nerja',
          text: 'Vergelijk centrale, kustgerichte en hoger gelegen dagelijkse routines.'
        },
        {
          token: 'frigiliana_daily_life',
          label: 'Dagelijks leven in Frigiliana',
          text: 'Hoe het nabijgelegen dorp boodschappen, voorzieningen en autovrije routines organiseert.'
        }
      ]
    },
    sources: {
      eyebrow: 'Achter deze gids',
      title: 'Bronnen voor de praktische gegevens',
      intro:
        'Overheidsinstanties en openbare registers. Omdat openingstijden, marktindeling en diensten kunnen veranderen, controleer je tijdgevoelige details het best bij de actuele bron.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Officiële vermelding van het openbare gezondheidscentrum voor Nerja.',
          href: sharedSources.health
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
      { label: 'Vardagsinköp', value: 'Mataffärer, bagerier och specialbutiker' },
      { label: 'Veckomarknad', value: 'Tisdagar i området Almijara' },
      { label: 'Central vardag', value: 'Många ärenden fungerar till fots' },
      { label: 'Vårdcentral', value: 'Servicio Andaluz de Salud' }
    ],
    sections: [
      {
        id: 'shopping',
        eyebrow: 'Matinköp',
        title: 'Den dagliga handlingen är en promenad, inte en bilresa',
        paragraphs: [
          'Nerja är stort nog för fullstora mataffärer, bagerier, apotek och ett bredare utbud av special- och hushållsbutiker än en liten by. I centrum kan mycket av vardagsservicen kombineras till fots.',
          'Det exakta området spelar ändå roll. Kustnära och centrala adresser gör återkommande ärenden enklare, medan högre bostadsområden ger mer lutning eller gör bilen mer användbar. Från AMARA Playa passar vanliga centrala inköp naturligt in i promenaden mellan Torrecilla och gamla stan.'
        ]
      },
      {
        id: 'tuesday-market',
        eyebrow: 'Marknaden',
        title: 'På tisdagar möblerar orten om sig',
        paragraphs: [
          'Veckomarknaden hålls på tisdagar i området Almijara, utanför det kompakta centrumet. Den kompletterar Nerjas vanliga butiksutbud med frukt och grönt, kläder och hushållsvaror.',
          'Eftersom marknadens upplägg och öppettider kan ändras är dag och område här främst orientering. Kontrollera aktuella detaljer innan ni åker dit.'
        ]
      },
      {
        id: 'health-services',
        eyebrow: 'Vård & nödsituationer',
        title: 'Sådant ni vill veta innan ni behöver det',
        paragraphs: [
          'Nerja har en egen vårdcentral inom Servicio Andaluz de Salud och ett brett urval av apotek runt om i staden.',
          'Öppettiderna varierar, så använd aktuell information om Farmacia de Guardia när tidpunkten är viktig. Den här sidan behandlar vård som praktisk platskontext, inte som medicinsk rådgivning.'
        ]
      },
      {
        id: 'rhythm',
        eyebrow: 'Rytmen',
        title: 'Öppettider varierar mellan verksamheter, säsonger och dagar',
        paragraphs: [
          'Vissa mindre verksamheter använder delade öppettider, medan större mataffärer och besöksinriktade butiker ibland håller öppet genom dagen. Söndagar, helgdagar och säsongsskiften skapar ytterligare skillnader.',
          'Den pålitliga regeln är att kontrollera den enskilda verksamheten i stället för att anta ett fast siesta- eller söndagsmönster för hela staden. Kvällslivet börjar fortfarande senare än många nordeuropeiska gäster väntar sig, men vanliga ärenden följer inte alla samma klocka.'
        ]
      },
      {
        id: 'without-a-car',
        eyebrow: 'Ta sig runt',
        title: 'En central vistelse i Nerja kan hålla vardagen i stort sett bilfri',
        paragraphs: [
          'Mataffärer, bagerier, apotek, stränder och restauranger ligger tillräckligt nära varandra i centrala Nerja för att kombineras till fots. Bil blir mer användbar för högre områden, större regionala inköp eller flera mål under samma dag.',
          'Promenadvänlighet är därför en lägesfråga, inte ett generellt löfte om hela kommunen. Guiderna om geografi och boendeområden förklarar lutningen och avvägningarna mellan stadsdelarna.'
        ]
      },
      {
        id: 'frigiliana-complement',
        eyebrow: 'Nerja & Frigiliana',
        title: 'Bredare utbud och byns bekvämlighet är kompletterande styrkor',
        paragraphs: [
          'Nerja erbjuder det bredare butiks- och serviceutbudet hos en större kustort. Frigiliana täcker vanliga vardagsbehov genom ett mindre bynätverk. Ingen av dem behöver beskrivas som den bristfälliga versionen av den andra; de passar olika rytmer och kan enkelt ingå i samma vistelse.'
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
        },
        {
          token: 'nerja_where_to_stay',
          label: 'Var ska man bo i Nerja',
          text: 'Jämför centrala, kustnära och högre belägna vardagsrutiner.'
        },
        {
          token: 'frigiliana_daily_life',
          label: 'Vardagsliv i Frigiliana',
          text: 'Så fungerar inköp, service och bilfria ärenden i den närliggande byn.'
        }
      ]
    },
    sources: {
      eyebrow: 'Bakom guiden',
      title: 'Källor till de praktiska uppgifterna',
      intro:
        'Offentliga myndigheter och offentliga register. Eftersom öppettider, marknadsupplägg och service kan ändras bör tidskänsliga detaljer kontrolleras hos den aktuella källan.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        {
          label: 'Servicio Andaluz de Salud · Centro de Salud Nerja',
          text: 'Officiell post om den offentliga vårdcentralen för Nerja.',
          href: sharedSources.health
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
