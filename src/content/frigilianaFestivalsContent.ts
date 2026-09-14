import { resolveLocale, type LocalizedText, type LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

type FestivalSeasonId =
  | 'january'
  | 'spring'
  | 'may-june'
  | 'summer'
  | 'autumn-winter';

interface FestivalEvent {
  name: string;
  timing: string;
  place: string;
  dateStatus: string;
  summary: string;
  officialHref?: string;
}

interface FestivalSeason {
  id: FestivalSeasonId;
  title: string;
  intro: string;
  events: FestivalEvent[];
}

interface FestivalExperience {
  title: string;
  timing: string;
  place: string;
  dateStatus: string;
  description: string;
  planningNote: string;
  officialHref?: string;
}

export interface FrigilianaFestivalsPageCopy {
  cardLabels: {
    timing: string;
    place: string;
    dateStatus: string;
    officialInformation: string;
    amaraNote: string;
  };
  footerHighlights: {
    festivals: string;
    restaurants: string;
    beaches: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
    /** Dark hero-tile summary: a short takeaway plus a mini table of contents. */
    summary?: {
      eyebrow: string;
      body: string;
      items: Array<{ id: string; label: string; value: string }>;
    };
  };
  sectionNav: {
    choose: string;
    calendar: string;
    experiences: string;
    planning: string;
  };
  overview: {
    title: string;
    intro: string;
    reviewed: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  calendar: {
    title: string;
    intro: string;
    seasons: FestivalSeason[];
  };
  experiences: {
    title: string;
    intro: string;
    items: FestivalExperience[];
  };
  planning: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
    note: string;
  };
  combine: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
      linkToken:
        | 'frigiliana_food_authority'
        | 'frigiliana_beaches_authority';
      linkLabel: string;
    }[];
  };
  closing: {
    title: string;
    lead: string;
    nextCta: string;
  };
}

const officialLinks = {
  frigilianaTraditions: 'https://frigiliana.es/fiestas-y-tradiciones/',
  threeCultures2026:
    'https://frigiliana.es/frigiliana-celebrara-una-nueva-edicion-del-festival-3-culturas-del-27-al-30-de-agosto-de-2026/',
  sanIsidro2026:
    'https://www.nerja.es/nerja-celebra-la-romeria-de-san-isidro-2026-con-tradicion-musica-y-homenaje-a-los-agricultores/',
  sanJuan2026:
    'https://www.nerja.es/nerja-celebrara-la-noche-de-san-juan-con-musica-y-la-tradicional-quema-del-jua/',
  cuevaDeNerja: 'https://cuevadenerja.es/',
  nerjaCouncil: 'https://www.nerja.es/'
} as const;

export const frigilianaFestivalsSeo: AmaraAuthoringSeo = {
  version: '2026-09-10-frigiliana-festivals-v1.1-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.festivals'),
  article: {
    datePublished: '2026-07-29',
    dateModified: '2026-09-14',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Festivals in Frigiliana & Nerja',
      description:
        'Festivals in Frigiliana and Nerja: the calendar through the year, the 2026 dates and what happens in the village on those days.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Feste in Frigiliana & Nerja',
      description:
        'Feste in Frigiliana und Nerja: der Kalender durchs Jahr, die Termine 2026 und was an diesen Tagen im Dorf los ist.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Fiestas en Frigiliana y Nerja',
      description:
        'Fiestas en Frigiliana y Nerja: el calendario a lo largo del año, las fechas de 2026 y qué pasa en el pueblo esos días.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Feesten in Frigiliana & Nerja',
      description:
        'Feesten in Frigiliana en Nerja: de kalender door het jaar, de data van 2026 en wat er op die dagen in het dorp gebeurt.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Festivaler i Frigiliana & Nerja',
      description:
        'Fester i Frigiliana och Nerja: kalendern genom året, datumen för 2026 och vad som händer i byn de dagarna.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Localizations preserve every date qualification, caveat and planning detail
 * while using native guest-facing language for each market.
 */
const frigilianaFestivalsContentCopy = {
  "cardLabels": {
    "timing": {
      en: 'When',
      de: 'Wann',
      es: 'Cuándo',
      nl: 'Wanneer',
      sv: 'När'
    } satisfies LocalizedText,
    "place": {
      en: 'Where',
      de: 'Wo',
      es: 'Dónde',
      nl: 'Waar',
      sv: 'Var'
    } satisfies LocalizedText,
    "dateStatus": {
      en: 'Status',
      de: 'Stand',
      es: 'Estado',
      nl: 'Stand',
      sv: 'Status'
    } satisfies LocalizedText,
    "officialInformation": {
      en: 'Official information',
      de: 'Offizielle Informationen',
      es: 'Información oficial',
      nl: 'Officiële informatie',
      sv: 'Officiell information'
    } satisfies LocalizedText,
    "amaraNote": {
      en: 'Our tip',
      de: 'Unser Tipp',
      es: 'Nuestro consejo',
      nl: 'Onze tip',
      sv: 'Vårt tips'
    } satisfies LocalizedText
  },
  "footerHighlights": {
    "festivals": {
      en: 'Festivals & traditions',
      de: 'Feste & Traditionen',
      es: 'Fiestas y tradiciones',
      nl: 'Feesten & tradities',
      sv: 'Festivaler & traditioner'
    } satisfies LocalizedText,
    "restaurants": {
      en: 'Restaurants & local food',
      de: 'Restaurants & regionale Küche',
      es: 'Restaurantes y cocina local',
      nl: 'Restaurants & lokale keuken',
      sv: 'Restauranger & lokal mat'
    } satisfies LocalizedText,
    "beaches": {
      en: 'Beaches & coast',
      de: 'Strände & Küste',
      es: 'Playas y costa',
      nl: 'Stranden & kust',
      sv: 'Stränder & kust'
    } satisfies LocalizedText
  },
  "hero": {
    "kicker": {
      en: 'Festivals & local traditions',
      de: 'Feste & gelebte Traditionen',
      es: 'Fiestas y tradiciones vivas',
      nl: 'Feesten & levende tradities',
      sv: 'Festivaler & levande traditioner'
    } satisfies LocalizedText,
    "title": {
      en: 'Festivals in Frigiliana & Nerja',
      de: 'Feste in Frigiliana & Nerja',
      es: 'Fiestas en Frigiliana y Nerja',
      nl: 'Feesten in Frigiliana & Nerja',
      sv: 'Festivaler i Frigiliana & Nerja'
    } satisfies LocalizedText,
    "subtitle": {
      en: 'A year shaped by tradition',
      de: 'Ein Jahr im Rhythmus der Tradition',
      es: 'Un año marcado por la tradición',
      nl: 'Een jaar in het ritme van traditie',
      sv: 'Ett år präglat av tradition'
    } satisfies LocalizedText,
    "paragraphs": {
      en: [
        'The Axarquía changes rhythm throughout the year: quiet village streets fill with processions, pilgrims cross Nerja in decorated carts, and summer nights move to the beach or Frigiliana’s historic quarter.',
        'A calendar through the year: what is celebrated when, how it feels and when the trip may be planned around it.',
        'Times and programmes are published by the councils shortly before the festival; the links are below.'
      ],
      de: [
        'Im Laufe des Jahres verändert die Axarquía immer wieder ihren Rhythmus: Ruhige Dorfgassen füllen sich mit Prozessionen, geschmückte Wagen ziehen durch Nerja und in den Sommernächten verlagert sich das Leben an den Strand oder in Frigilianas Altstadt.',
        'Ein Kalender durch das Jahr: was wann gefeiert wird, wie es sich anfühlt und wann sich die Reise danach richten darf.',
        'Uhrzeiten und Programme veröffentlichen die Gemeinden kurz vor dem Fest; die Links dazu stehen unten.'
      ],
      es: [
        'La Axarquía cambia de ritmo a lo largo del año: las calles tranquilas se llenan de procesiones, las carretas engalanadas cruzan Nerja y las noches de verano se trasladan a la playa o al casco histórico de Frigiliana.',
        'Un calendario a lo largo del año: qué se celebra cuándo, cómo se siente y cuándo el viaje puede girar en torno a ello.',
        'Los horarios y programas los publican los ayuntamientos poco antes de la fiesta; los enlaces están abajo.'
      ],
      nl: [
        'De Axarquía verandert het hele jaar door van ritme: rustige dorpsstraten vullen zich met processies, versierde wagens trekken door Nerja en zomeravonden verplaatsen zich naar het strand of de oude wijk van Frigiliana.',
        'Een kalender door het jaar: wat wanneer gevierd wordt, hoe het voelt en wanneer de reis zich ernaar mag richten.',
        'Tijden en programma’s publiceren de gemeenten kort voor het feest; de links staan onderaan.'
      ],
      sv: [
        'Axarquía byter rytm under året: lugna bygator fylls av processioner, dekorerade vagnar rör sig genom Nerja och sommarkvällarna flyttar till stranden eller Frigilianas historiska kvarter.',
        'En kalender genom året: vad som firas när, hur det känns och när resan får rätta sig efter det.',
        'Tider och program publicerar kommunerna kort före festen; länkarna finns nedan.'
      ]
    } satisfies LocalizedTextList,
    "imageAlt": {
      en: 'Whitewashed Frigiliana above the hills and Mediterranean coast',
      de: 'Das weiße Dorf Frigiliana oberhalb der Hügel und der Mittelmeerküste',
      es: 'El pueblo blanco de Frigiliana sobre las colinas y la costa mediterránea',
      nl: 'Het witte dorp Frigiliana boven de heuvels en de Middellandse Zeekust',
      sv: 'Den vitkalkade byn Frigiliana ovanför kullarna och Medelhavskusten'
    } satisfies LocalizedText,
    "summary": {
      "eyebrow": {
        en: 'On this page',
        de: 'Auf dieser Seite',
        es: 'En esta página',
        nl: 'Op deze pagina',
        sv: 'På den här sidan'
      } satisfies LocalizedText,
      "body": {
        en: 'The festival year in Frigiliana and Nerja at a glance — from village traditions and processions to summer nights and the big festival weekends. Planned by season, not a full checklist.',
        de: 'Das Festjahr in Frigiliana und Nerja im Überblick — von Dorftraditionen und Prozessionen bis zu Sommernächten und den großen Festivalwochenenden. Nach Reisezeit geplant, keine Vollständigkeit.',
        es: 'El año de fiestas en Frigiliana y Nerja de un vistazo: desde tradiciones de pueblo y procesiones hasta noches de verano y los grandes fines de semana de festival. Planificado por temporada.',
        nl: 'Het feestjaar in Frigiliana en Nerja in één oogopslag — van dorpstradities en processies tot zomeravonden en de grote festivalweekends. Gepland per seizoen, geen volledige lijst.',
        sv: 'Feståret i Frigiliana och Nerja i överblick — från bytraditioner och processioner till sommarkvällar och de stora festivalhelgerna. Planerat efter säsong, ingen fullständig lista.'
      } satisfies LocalizedText,
      "items": [
        {
          "id": 'traditions' as const,
          "label": {
            en: 'Traditions',
            de: 'Traditionen',
            es: 'Tradiciones',
            nl: 'Tradities',
            sv: 'Traditioner'
          } satisfies LocalizedText,
          "value": {
            en: 'Village customs year-round',
            de: 'Dorfbräuche das ganze Jahr',
            es: 'Costumbres del pueblo todo el año',
            nl: 'Dorpsgebruiken het hele jaar',
            sv: 'Byseder året runt'
          } satisfies LocalizedText
        },
        {
          "id": 'processions' as const,
          "label": {
            en: 'Processions',
            de: 'Prozessionen',
            es: 'Procesiones',
            nl: 'Processies',
            sv: 'Processioner'
          } satisfies LocalizedText,
          "value": {
            en: 'Holy Week and pilgrimages',
            de: 'Semana Santa & Wallfahrten',
            es: 'Semana Santa y romerías',
            nl: 'Semana Santa en bedevaarten',
            sv: 'Påskveckan och vallfärder'
          } satisfies LocalizedText
        },
        {
          "id": 'summer' as const,
          "label": {
            en: 'Summer nights',
            de: 'Sommernächte',
            es: 'Noches de verano',
            nl: 'Zomeravonden',
            sv: 'Sommarkvällar'
          } satisfies LocalizedText,
          "value": {
            en: 'Music and late evenings',
            de: 'Musik und lange Abende',
            es: 'Música y veladas',
            nl: 'Muziek en lange avonden',
            sv: 'Musik och sena kvällar'
          } satisfies LocalizedText
        },
        {
          "id": 'weekends' as const,
          "label": {
            en: 'Festival weekends',
            de: 'Festivalwochenenden',
            es: 'Fines de festival',
            nl: 'Festivalweekends',
            sv: 'Festivalhelger'
          } satisfies LocalizedText,
          "value": {
            en: 'The big dates',
            de: 'Die großen Termine',
            es: 'Las grandes fechas',
            nl: 'De grote data',
            sv: 'De stora datumen'
          } satisfies LocalizedText
        }
      ]
    }
  },
  "sectionNav": {
    "choose": {
      en: 'Choose the mood',
      de: 'Die passende Stimmung',
      es: 'Elegid el ambiente',
      nl: 'Kies de sfeer',
      sv: 'Välj stämning'
    } satisfies LocalizedText,
    "calendar": {
      en: 'Year at a glance',
      de: 'Das Jahr im Überblick',
      es: 'El año de un vistazo',
      nl: 'Het jaar in één oogopslag',
      sv: 'Året i korthet'
    } satisfies LocalizedText,
    "experiences": {
      en: 'Signature events',
      de: 'Besondere Feste',
      es: 'Fiestas imprescindibles',
      nl: 'Bijzondere feesten',
      sv: 'Särskilda festivaler'
    } satisfies LocalizedText,
    "planning": {
      en: 'Plan well',
      de: 'Gut planen',
      es: 'Organizaros bien',
      nl: 'Goed plannen',
      sv: 'Planera väl'
    } satisfies LocalizedText
  },
  "overview": {
    "title": {
      en: 'Start with the kind of day you want',
      de: 'Beginnt mit dem Tag, den ihr erleben möchtet',
      es: 'Empezad por el tipo de día que queréis vivir',
      nl: 'Begin met het soort dag dat jullie willen beleven',
      sv: 'Börja med vilken sorts dag ni vill uppleva'
    } satisfies LocalizedText,
    "intro": {
      en: 'A village saint’s day, a solemn procession and a major summer festival are very different evenings. Some dates are fixed years ahead, others are confirmed only weeks before — which is why the status matters as much as the month.',
      de: 'Ein Heiligenfest im Dorf, eine feierliche Prozession und ein großes Sommerfestival sind völlig verschiedene Abende. Manche Termine stehen Jahre im Voraus fest, andere erst wenige Wochen vorher — deshalb zählt der Status so viel wie der Monat.',
      es: 'Una fiesta patronal de pueblo, una procesión solemne y un gran festival de verano son noches muy distintas. Algunas fechas se fijan años antes y otras se confirman semanas antes: por eso el estado importa tanto como el mes.',
      nl: 'Een dorpsfeest rond een heilige, een plechtige processie en een groot zomerfestival zijn totaal verschillende avonden. Sommige data liggen jaren vast, andere pas weken van tevoren — daarom telt de status net zo zwaar als de maand.',
      sv: 'En helgondag i byn, en högtidlig procession och en stor sommarfestival är helt olika kvällar. Vissa datum ligger fast år i förväg, andra bekräftas först några veckor innan — därför betyder statusen lika mycket som månaden.'
    } satisfies LocalizedText,
    "reviewed": {
      en: 'As of September 2026',
      de: 'Stand September 2026',
      es: 'Actualizado en septiembre de 2026',
      nl: 'Stand september 2026',
      sv: 'Uppdaterad september 2026'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Village traditions',
          de: 'Dorftraditionen',
          es: 'Tradiciones de pueblo',
          nl: 'Dorpstradities',
          sv: 'Bytraditioner'
        } satisfies LocalizedText,
        "text": {
          en: 'Frigiliana’s smaller celebrations feel close to local life. Expect decorated streets, religious traditions and programmes that may be published only shortly beforehand.',
          de: 'Die kleineren Feste in Frigiliana sind eng mit dem örtlichen Leben verbunden. Rechnet mit geschmückten Gassen, religiösen Bräuchen und Programmen, die manchmal erst kurz vorher erscheinen.',
          es: 'Las celebraciones pequeñas de Frigiliana están muy ligadas a la vida local. Encontraréis calles engalanadas, costumbres religiosas y programas que a veces se publican con poca antelación.',
          nl: 'De kleinere vieringen in Frigiliana liggen dicht bij het lokale leven. Reken op versierde straten, religieuze gebruiken en programma’s die soms pas kort van tevoren verschijnen.',
          sv: 'Frigilianas mindre firanden ligger nära det lokala livet. Räkna med dekorerade gator, religiösa traditioner och program som ibland publiceras först strax före högtiden.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Processions & pilgrimages',
          de: 'Prozessionen & Wallfahrten',
          es: 'Procesiones y romerías',
          nl: 'Processies & bedevaarten',
          sv: 'Processioner & pilgrimsfärder'
        } satisfies LocalizedText,
        "text": {
          en: 'Semana Santa and San Isidro are visually memorable but affect traffic and access. They reward an early start and a flexible plan.',
          de: 'Semana Santa und San Isidro sind eindrucksvoll, beeinflussen aber Verkehr und Zufahrten. Ein früher Start und ein flexibler Tagesplan zahlen sich aus.',
          es: 'La Semana Santa y San Isidro son muy vistosos, pero modifican el tráfico y los accesos. Conviene empezar temprano y mantener un plan flexible.',
          nl: 'Semana Santa en San Isidro zijn visueel indrukwekkend, maar beïnvloeden verkeer en bereikbaarheid. Vroeg beginnen en flexibel plannen loont.',
          sv: 'Semana Santa och San Isidro är visuellt minnesvärda men påverkar trafik och framkomlighet. En tidig start och en flexibel plan lönar sig.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Summer nights',
          de: 'Sommernächte',
          es: 'Noches de verano',
          nl: 'Zomernachten',
          sv: 'Sommarnätter'
        } satisfies LocalizedText,
        "text": {
          en: 'San Juan, coastal celebrations and open-air music bring energy and late finishes. Beaches and central streets can be exceptionally busy.',
          de: 'San Juan, Feste an der Küste und Open-Air-Musik bringen viel Energie und späte Nächte. Strände und zentrale Straßen können außergewöhnlich voll werden.',
          es: 'San Juan, las celebraciones de la costa y la música al aire libre aportan energía y terminan tarde. Las playas y las calles céntricas pueden llenarse muchísimo.',
          nl: 'San Juan, feesten aan de kust en openluchtmuziek brengen energie en late eindtijden. Stranden en centrale straten kunnen uitzonderlijk druk worden.',
          sv: 'San Juan, kustfiranden och utomhusmusik ger energi och sena avslut. Stränder och centrala gator kan bli ovanligt fulla.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Festival weekends',
          de: 'Festivalwochenenden',
          es: 'Fines de semana de festival',
          nl: 'Festivalweekenden',
          sv: 'Festivalhelger'
        } satisfies LocalizedText,
        "text": {
          en: 'The Three Cultures Festival transforms Frigiliana on a much larger scale. It is worth planning accommodation, transport and dinner well ahead.',
          de: 'Das Festival der drei Kulturen verwandelt Frigiliana in deutlich größerem Maßstab. Unterkunft, Anreise und Abendessen solltet ihr frühzeitig planen.',
          es: 'El Festival de las Tres Culturas transforma Frigiliana a gran escala. Merece la pena prever con tiempo el alojamiento, el transporte y la cena.',
          nl: 'Het Festival van de Drie Culturen verandert Frigiliana op veel grotere schaal. Plan accommodatie, vervoer en het diner ruim vooraf.',
          sv: 'Festivalen för de tre kulturerna förändrar Frigiliana i mycket större skala. Planera boende, transport och middag i god tid.'
        } satisfies LocalizedText
      }
    ]
  },
  "calendar": {
    "title": {
      en: 'The festival year at a glance',
      de: 'Das Festjahr im Überblick',
      es: 'El año festivo de un vistazo',
      nl: 'Het feestjaar in één oogopslag',
      sv: 'Festivalåret i korthet'
    } satisfies LocalizedText,
    "intro": {
      en: "Saints’ days and the usual festival seasons help you choose when to visit. Dates and programmes vary by edition; links marked 2026 refer to that year’s announcement.",
      de: "Heiligentage und die üblichen Festzeiten helfen euch bei der Wahl der Reisezeit. Termine und Programme unterscheiden sich je Ausgabe; Links mit dem Hinweis 2026 beziehen sich auf die Ankündigung für dieses Jahr.",
      es: "Los días de los santos y las épocas habituales de las fiestas os orientan al elegir cuándo venir. Las fechas y los programas cambian con cada edición; los enlaces marcados con 2026 corresponden al anuncio de ese año.",
      nl: "Heiligendagen en de gebruikelijke feestperiodes helpen jullie bij het kiezen van de reistijd. Data en programma’s verschillen per editie; links met 2026 verwijzen naar de aankondiging voor dat jaar.",
      sv: "Helgondagar och de vanliga festperioderna hjälper er att välja när ni vill komma. Datum och program varierar mellan upplagorna; länkar märkta 2026 gäller det årets annonsering."
    } satisfies LocalizedText,
    "seasons": [
      {
        "id": 'january' as const,
        "title": {
          en: 'January | Saints and new beginnings',
          de: 'Januar | Heiligenfeste und ein neuer Anfang',
          es: 'Enero | Santos y nuevos comienzos',
          nl: 'Januari | Heiligen en een nieuw begin',
          sv: 'Januari | Helgon och nya början'
        } satisfies LocalizedText,
        "intro": {
          en: 'The year opens with family celebrations and some of the area’s oldest local traditions.',
          de: 'Das Jahr beginnt mit Familienfesten und einigen der ältesten örtlichen Traditionen.',
          es: 'El año empieza con celebraciones familiares y algunas de las tradiciones locales más antiguas.',
          nl: 'Het jaar begint met familiefeesten en enkele van de oudste lokale tradities.',
          sv: 'Året inleds med familjefiranden och några av områdets äldsta lokala traditioner.'
        } satisfies LocalizedText,
        "events": [
          {
            "name": {
              en: 'Cabalgata de Reyes Magos',
              de: 'Cabalgata de Reyes Magos',
              es: 'Cabalgata de Reyes Magos',
              nl: 'Cabalgata de Reyes Magos',
              sv: 'Cabalgata de Reyes Magos'
            } satisfies LocalizedText,
            "timing": {
              en: '5 January',
              de: '5. Januar',
              es: '5 de enero',
              nl: '5 januari',
              sv: '5 januari'
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana & Nerja',
              de: 'Frigiliana & Nerja',
              es: 'Frigiliana y Nerja',
              nl: 'Frigiliana & Nerja',
              sv: 'Frigiliana & Nerja'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Traditional annual date',
              de: 'Traditioneller jährlicher Termin',
              es: 'Fecha tradicional anual',
              nl: 'Traditionele jaarlijkse datum',
              sv: 'Traditionellt årligt datum'
            } satisfies LocalizedText,
            "summary": {
              en: 'The Three Kings arrive in evening parades for families. Routes, start times and the scale of each procession are announced locally and can change.',
              de: 'Die Heiligen Drei Könige ziehen am Abend in familienfreundlichen Umzügen ein. Route, Beginn und Umfang werden vor Ort angekündigt und können sich ändern.',
              es: 'Los Reyes Magos llegan al atardecer en cabalgatas pensadas para las familias. El recorrido, la hora de salida y la envergadura se anuncian localmente y pueden cambiar.',
              nl: 'De Drie Koningen arriveren tijdens avondoptochten voor gezinnen. Route, begintijd en omvang worden lokaal bekendgemaakt en kunnen veranderen.',
              sv: 'De tre vise männen anländer i kvällsparader för familjer. Rutt, starttid och omfattning meddelas lokalt och kan ändras.'
            } satisfies LocalizedText
          },
          {
            "name": {
              en: 'San Sebastián',
              de: 'San Sebastián',
              es: 'San Sebastián',
              nl: 'San Sebastián',
              sv: 'San Sebastián'
            } satisfies LocalizedText,
            "timing": {
              en: 'Around 20 January',
              de: 'Um den 20. Januar',
              es: 'Alrededor del 20 de enero',
              nl: 'Rond 20 januari',
              sv: 'Omkring 20 januari'
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana',
              de: 'Frigiliana',
              es: 'Frigiliana',
              nl: 'Frigiliana',
              sv: 'Frigiliana'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Programme varies by year',
              de: 'Programm wechselt jährlich',
              es: 'El programa varía cada año',
              nl: 'Programma verschilt per jaar',
              sv: 'Programmet varierar från år till år'
            } satisfies LocalizedText,
            "summary": {
              en: 'Frigiliana has two patron saints, and San Sebastián is honoured here around 20 January with a mass and procession. This was once the village’s main fair too, until poor winter weather led the council to move the fair to June. Procession details and accompanying activities depend on the annual programme.',
              de: 'Frigiliana hat zwei Schutzpatrone; San Sebastián wird um den 20. Januar mit Messe und Prozession geehrt. Früher war das zugleich die Hauptferia des Ortes — wegen des unbeständigen Winterwetters verlegte der Gemeinderat sie in den Juni. Ablauf der Prozession und Begleitveranstaltungen richten sich nach dem jeweiligen Jahresprogramm.',
              es: 'Frigiliana tiene dos patrones, y a San Sebastián se le honra hacia el 20 de enero con misa y procesión. Antiguamente esa fue también la feria principal del pueblo; el mal tiempo invernal llevó al ayuntamiento a trasladarla a junio. Los detalles de la procesión y las actividades paralelas dependen del programa anual.',
              nl: 'Frigiliana heeft twee patroonheiligen; San Sebastián wordt rond 20 januari geëerd met een mis en een processie. Vroeger was dit ook de belangrijkste feria van het dorp — vanwege het wisselvallige winterweer verplaatste de gemeenteraad die naar juni. Details van de processie en extra activiteiten hangen af van het jaarprogramma.',
              sv: 'Frigiliana har två skyddshelgon, och San Sebastián hedras kring den 20 januari med mässa och procession. Förr var detta också byns huvudferia — det ostadiga vintervädret fick kommunfullmäktige att flytta den till juni. Processionens detaljer och kringaktiviteter beror på årets program.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.frigilianaTraditions
          },
          {
            "name": {
              en: 'San Antón',
              de: 'San Antón',
              es: 'San Antón',
              nl: 'San Antón',
              sv: 'San Antón'
            } satisfies LocalizedText,
            "timing": {
              en: 'Around 16–17 January',
              de: 'Um den 16.–17. Januar',
              es: 'En torno al 16–17 de enero',
              nl: 'Rond 16–17 januari',
              sv: 'Omkring 16–17 januari'
            } satisfies LocalizedText,
            "place": {
              en: 'Maro',
              de: 'Maro',
              es: 'Maro',
              nl: 'Maro',
              sv: 'Maro'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Every year around these days',
              de: 'Jedes Jahr um diese Tage',
              es: 'Cada año por estas fechas',
              nl: 'Elk jaar rond deze dagen',
              sv: 'Varje år kring dessa dagar'
            } satisfies LocalizedText,
            "summary": {
              en: 'Maro’s celebration combines devotion to San Antón with street life and popular traditions. Nerja sets the programme fresh each year — tell us your dates and we will look it up.',
              de: 'Maros Fest verbindet die Verehrung des San Antón mit Leben auf den Straßen und volkstümlichen Bräuchen. Die Gemeinde Nerja legt das Programm jedes Jahr neu fest — sagt uns eure Daten, dann schauen wir nach.',
              es: 'La fiesta de Maro une la devoción a San Antón con el ambiente en la calle y las tradiciones populares. Nerja fija el programa cada año: decidnos vuestras fechas y lo consultamos.',
              nl: 'Maro’s viering verbindt de verering van San Antón met straatleven en volkstradities. De gemeente Nerja stelt het programma elk jaar opnieuw vast — geef ons jullie data, dan zoeken we het op.',
              sv: 'Maros firande förenar vördnaden för San Antón med folkliv och lokala traditioner. Nerja kommun fastställer programmet varje år — säg era datum, så kollar vi upp det.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.nerjaCouncil
          }
        ]
      },
      {
        "id": 'spring' as const,
        "title": {
          en: 'February–April | Costumes, processions and local produce',
          de: 'Februar–April | Kostüme, Prozessionen und regionale Produkte',
          es: 'Febrero–abril | Disfraces, procesiones y producto local',
          nl: 'Februari–april | Kostuums, processies en streekproducten',
          sv: 'Februari–april | Kostymer, processioner och lokala råvaror'
        } satisfies LocalizedText,
        "intro": {
          en: 'Spring dates move with the calendar. Carnival is playful; Semana Santa is ceremonial and should be approached with respect.',
          de: 'Die Frühlingstermine bewegen sich mit dem Kalender. Der Karneval ist verspielt, die Semana Santa feierlich und sollte respektvoll erlebt werden.',
          es: 'Las fechas de primavera se mueven con el calendario. El Carnaval es desenfadado; la Semana Santa es ceremonial y conviene vivirla con respeto.',
          nl: 'De voorjaarsdata bewegen mee met de kalender. Carnaval is uitbundig; Semana Santa ceremonieel en vraagt om respect.',
          sv: 'Vårens datum följer kalendern. Karnevalen är lekfull; Semana Santa är högtidlig och bör upplevas med respekt.'
        } satisfies LocalizedText,
        "events": [
          {
            "name": {
              en: 'Carnival',
              de: 'Karneval',
              es: 'Carnaval',
              nl: 'Carnaval',
              sv: 'Karneval'
            } satisfies LocalizedText,
            "timing": {
              en: 'February or March',
              de: 'Februar oder März',
              es: 'Febrero o marzo',
              nl: 'Februari of maart',
              sv: 'Februari eller mars'
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana & Nerja',
              de: 'Frigiliana & Nerja',
              es: 'Frigiliana y Nerja',
              nl: 'Frigiliana & Nerja',
              sv: 'Frigiliana & Nerja'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Date changes each year',
              de: 'Termin ändert sich jährlich',
              es: 'La fecha cambia cada año',
              nl: 'Datum verandert ieder jaar',
              sv: 'Datumet ändras varje år'
            } satisfies LocalizedText,
            "summary": {
              en: 'Costumes, parades and stage events bring a lively, family-oriented atmosphere. Each town publishes its own dates and route.',
              de: 'Kostüme, Umzüge und Bühnenprogramme sorgen für eine lebhafte, familienfreundliche Stimmung. Beide Orte veröffentlichen ihre eigenen Termine und Routen.',
              es: 'Disfraces, pasacalles y actuaciones crean un ambiente animado y familiar. Cada municipio publica sus propias fechas y recorrido.',
              nl: 'Kostuums, optochten en podiumprogramma’s zorgen voor een levendige familiesfeer. Beide plaatsen publiceren hun eigen data en route.',
              sv: 'Kostymer, parader och scenprogram skapar en livlig, familjevänlig stämning. Båda orterna publicerar egna datum och rutter.'
            } satisfies LocalizedText
          },
          {
            "name": {
              en: 'Semana Santa',
              de: 'Semana Santa',
              es: 'Semana Santa',
              nl: 'Semana Santa',
              sv: 'Semana Santa'
            } satisfies LocalizedText,
            "timing": {
              en: 'March or April',
              de: 'März oder April',
              es: 'Marzo o abril',
              nl: 'Maart of april',
              sv: 'Mars eller april'
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana & Nerja',
              de: 'Frigiliana & Nerja',
              es: 'Frigiliana y Nerja',
              nl: 'Frigiliana & Nerja',
              sv: 'Frigiliana & Nerja'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Dates follow Easter',
              de: 'Termine richten sich nach Ostern',
              es: 'Las fechas dependen de la Semana Santa',
              nl: 'Data volgen Pasen',
              sv: 'Datumen följer påsken'
            } satisfies LocalizedText,
            "summary": {
              en: 'Religious brotherhoods carry images through streets filled with incense, music and spectators. Processions can close roads and alter dinner and transport plans.',
              de: 'Bruderschaften tragen Heiligenfiguren durch Straßen voller Weihrauch, Musik und Zuschauer. Prozessionen können Straßen sperren und Pläne für Abendessen oder Anreise verändern.',
              es: 'Las cofradías llevan sus imágenes por calles llenas de incienso, música y público. Las procesiones pueden cortar vías y alterar los planes de cena y transporte.',
              nl: 'Broederschappen dragen heiligenbeelden door straten met wierook, muziek en toeschouwers. Processies kunnen wegen afsluiten en plannen voor diner of vervoer beïnvloeden.',
              sv: 'Religiösa brödraskap bär helgonbilder genom gator fyllda av rökelse, musik och åskådare. Processioner kan stänga vägar och påverka middags- och transportplaner.'
            } satisfies LocalizedText
          },
          {
            "name": {
              en: 'Día de la Miel de Caña',
              de: 'Día de la Miel de Caña',
              es: 'Día de la Miel de Caña',
              nl: 'Día de la Miel de Caña',
              sv: 'Día de la Miel de Caña'
            } satisfies LocalizedText,
            "timing": {
              en: 'Usually in spring',
              de: 'Meist im Frühjahr',
              es: 'Habitualmente en primavera',
              nl: 'Meestal in het voorjaar',
              sv: 'Vanligen på våren'
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana',
              de: 'Frigiliana',
              es: 'Frigiliana',
              nl: 'Frigiliana',
              sv: 'Frigiliana'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Date and programme vary',
              de: 'Termin und Programm variieren',
              es: 'La fecha y el programa varían',
              nl: 'Datum en programma wisselen',
              sv: 'Datum och program varierar'
            } satisfies LocalizedText,
            "summary": {
              en: 'A local celebration centred on Frigiliana’s sugar-cane honey tradition, with activities and tastings shaped by the year’s official programme.',
              de: 'Ein örtliches Fest rund um Frigilianas Tradition des Zuckerrohrsirups, dessen Aktivitäten und Verkostungen vom offiziellen Jahresprogramm abhängen.',
              es: 'Una celebración local dedicada a la tradición de la miel de caña de Frigiliana, con actividades y degustaciones que dependen del programa oficial de cada edición.',
              nl: 'Een lokaal feest rond Frigiliana’s traditie van suikerrietstroop, met activiteiten en proeverijen die door het officiële jaarprogramma worden bepaald.',
              sv: 'Ett lokalt firande kring Frigilianas tradition av sockerrörssirap, med aktiviteter och provsmakningar som formas av årets officiella program.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.frigilianaTraditions
          }
        ]
      },
      {
        "id": 'may-june' as const,
        "title": {
          en: 'May–June | Flowers, pilgrimage and midsummer',
          de: 'Mai–Juni | Blumen, Wallfahrt und Mittsommer',
          es: 'Mayo–junio | Flores, romería y comienzo del verano',
          nl: 'Mei–juni | Bloemen, bedevaart en midzomer',
          sv: 'Maj–juni | Blommor, pilgrimsfärd och midsommar'
        } satisfies LocalizedText,
        "intro": {
          en: 'This is one of the richest periods for traditional dress, decorated streets and celebrations that move through public space.',
          de: 'Diese Zeit ist besonders reich an Trachten, geschmückten Straßen und Festen, die sich durch den öffentlichen Raum bewegen.',
          es: 'Es una de las épocas más ricas en trajes tradicionales, calles adornadas y celebraciones que ocupan el espacio público.',
          nl: 'Dit is een van de rijkste periodes voor klederdracht, versierde straten en vieringen die de openbare ruimte innemen.',
          sv: 'Det här är en av de rikaste perioderna för folkdräkter, dekorerade gator och firanden som tar plats i det offentliga rummet.'
        } satisfies LocalizedText,
        "events": [
          {
            "name": {
              en: 'Cruces de Mayo',
              de: 'Cruces de Mayo',
              es: 'Cruces de Mayo',
              nl: 'Cruces de Mayo',
              sv: 'Cruces de Mayo'
            } satisfies LocalizedText,
            "timing": {
              en: 'Around 3 May',
              de: 'Um den 3. Mai',
              es: 'Alrededor del 3 de mayo',
              nl: 'Rond 3 mei',
              sv: 'Omkring 3 maj'
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana',
              de: 'Frigiliana',
              es: 'Frigiliana',
              nl: 'Frigiliana',
              sv: 'Frigiliana'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Every year around this time',
              de: 'Jedes Jahr um diese Zeit',
              es: 'Cada año por esta época',
              nl: 'Elk jaar rond deze tijd',
              sv: 'Varje år vid den här tiden'
            } satisfies LocalizedText,
            "summary": {
              en: 'Flower-covered crosses appear around the village, accompanied by food, music and neighbourhood hospitality. The tradition was revived in 1981 after a long interruption, and neighbours still prepare arropía, a sweet made with miel de caña, to go with it. Locations and activities vary.',
              de: 'Im Dorf erscheinen mit Blumen geschmückte Kreuze, begleitet von Essen, Musik und nachbarschaftlicher Gastfreundschaft. Der Brauch wurde 1981 nach langer Unterbrechung wiederbelebt; dazu bereiten die Nachbarschaften bis heute Arropía zu, eine Süßspeise aus Miel de Caña. Orte und Aktivitäten wechseln.',
              es: 'Por el pueblo aparecen cruces cubiertas de flores, acompañadas de comida, música y hospitalidad vecinal. La tradición se recuperó en 1981 tras una larga interrupción, y los vecinos siguen preparando arropía, un dulce elaborado con miel de caña. Los puntos y las actividades varían.',
              nl: 'Door het dorp verschijnen met bloemen bedekte kruisen, begeleid door eten, muziek en gastvrijheid van de buurten. De traditie werd in 1981 na een lange onderbreking nieuw leven ingeblazen, en de buurten maken er nog steeds arropía bij, een zoete lekkernij van miel de caña. Locaties en activiteiten variëren.',
              sv: 'Blomsterklädda kors syns runt om i byn, tillsammans med mat, musik och gästfrihet från kvarteren. Traditionen återupptogs 1981 efter ett långt uppehåll, och kvarteren gör fortfarande arropía till den – en sötsak kokt på miel de caña. Platser och aktiviteter varierar.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.frigilianaTraditions
          },
          {
            "name": {
              en: 'Romería de San Isidro',
              de: 'Romería de San Isidro',
              es: 'Romería de San Isidro',
              nl: 'Romería de San Isidro',
              sv: 'Romería de San Isidro'
            } satisfies LocalizedText,
            "timing": {
              en: '15 May',
              de: '15. Mai',
              es: '15 de mayo',
              nl: '15 mei',
              sv: '15 maj'
            } satisfies LocalizedText,
            "place": {
              en: 'Nerja to the Nerja Cave grounds',
              de: 'Von Nerja zum Gelände der Höhle von Nerja',
              es: 'Desde Nerja hasta el recinto de la Cueva de Nerja',
              nl: 'Van Nerja naar het terrein bij de Grot van Nerja',
              sv: 'Från Nerja till området vid Nerjagrottan'
            } satisfies LocalizedText,
            "dateStatus": {
              en: "Reference: 2026 announcement",
              de: "Referenz: Ankündigung 2026",
              es: "Referencia: anuncio de 2026",
              nl: "Referentie: aankondiging 2026",
              sv: "Referens: annonsering 2026"
            } satisfies LocalizedText,
            "summary": {
              en: 'After the morning ceremonies, decorated carts, horses, musicians and people in traditional dress travel from the Balcón de Europa towards the cave grounds.',
              de: 'Nach den morgendlichen Feierlichkeiten ziehen geschmückte Wagen, Pferde, Musiker und Menschen in Tracht vom Balcón de Europa in Richtung Höhlengelände.',
              es: 'Tras los actos de la mañana, carretas engalanadas, caballos, músicos y romeros con trajes tradicionales parten del Balcón de Europa hacia el recinto de la Cueva.',
              nl: 'Na de ochtendceremonies trekken versierde wagens, paarden, muzikanten en mensen in traditionele kleding vanaf het Balcón de Europa naar het grottenterrein.',
              sv: 'Efter morgonens ceremonier färdas dekorerade vagnar, hästar, musiker och människor i folkdräkt från Balcón de Europa mot grottområdet.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.sanIsidro2026
          },
          {
            "name": {
              en: 'Feria de San Antonio',
              de: 'Feria de San Antonio',
              es: 'Feria de San Antonio',
              nl: 'Feria de San Antonio',
              sv: 'Feria de San Antonio'
            } satisfies LocalizedText,
            "timing": {
              en: 'Around 13 June',
              de: 'Um den 13. Juni',
              es: 'Alrededor del 13 de junio',
              nl: 'Rond 13 juni',
              sv: 'Omkring 13 juni'
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana',
              de: 'Frigiliana',
              es: 'Frigiliana',
              nl: 'Frigiliana',
              sv: 'Frigiliana'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Every year around this time',
              de: 'Jedes Jahr um diese Zeit',
              es: 'Cada año por esta época',
              nl: 'Elk jaar rond deze tijd',
              sv: 'Varje år vid den här tiden'
            } satisfies LocalizedText,
            "summary": {
              en: 'Frigiliana’s main fair, moved here from January and tied to the village’s other patron, San Antonio de Padua. It brings a romería, concerts, attractions and community events over several days. The exact schedule and traffic arrangements change annually.',
              de: 'Die Hauptferia des Ortes, vom Januar hierher verlegt und mit dem anderen Schutzpatron San Antonio de Padua verbunden. Sie bringt über mehrere Tage Romería, Konzerte, Fahrgeschäfte und gemeinschaftliche Veranstaltungen ins Dorf. Zeitplan und Verkehrsführung ändern sich jährlich.',
              es: 'La feria principal del pueblo, trasladada aquí desde enero y vinculada al otro patrón, San Antonio de Padua. Reúne durante varios días romería, conciertos, atracciones y actividades vecinales. El horario y la regulación del tráfico cambian cada año.',
              nl: 'De belangrijkste feria van het dorp, vanuit januari hierheen verplaatst en verbonden met de andere patroonheilige, San Antonio de Padua. Meerdere dagen lang zijn er een romería, concerten, attracties en activiteiten voor de gemeenschap. Programma en verkeersmaatregelen veranderen jaarlijks.',
              sv: 'Byns huvudferia, flyttad hit från januari och knuten till det andra skyddshelgonet, San Antonio de Padua. Under flera dagar bjuder den på romería, konserter, attraktioner och aktiviteter för byn. Program och trafiklösningar ändras varje år.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.frigilianaTraditions
          },
          {
            "name": {
              en: 'Noche de San Juan',
              de: 'Noche de San Juan',
              es: 'Noche de San Juan',
              nl: 'Noche de San Juan',
              sv: 'Noche de San Juan'
            } satisfies LocalizedText,
            "timing": {
              en: 'Night of 23 June',
              de: 'Nacht zum 24. Juni',
              es: 'Noche del 23 de junio',
              nl: 'Nacht van 23 juni',
              sv: 'Natten den 23 juni'
            } satisfies LocalizedText,
            "place": {
              en: 'Burriana Beach, Nerja',
              de: 'Playa Burriana, Nerja',
              es: 'Playa de Burriana, Nerja',
              nl: 'Burriana-strand, Nerja',
              sv: 'Burrianastranden, Nerja'
            } satisfies LocalizedText,
            "dateStatus": {
              en: "Reference: 2026 announcement",
              de: "Referenz: Ankündigung 2026",
              es: "Referencia: anuncio de 2026",
              nl: "Referentie: aankondiging 2026",
              sv: "Referens: annonsering 2026"
            } satisfies LocalizedText,
            "summary": {
              en: 'A late beach celebration with music, the traditional burning of the Júa, fireworks and midnight rituals by the sea. Local rules for fires, camping and waste still apply.',
              de: 'Ein spätes Strandfest mit Musik, der traditionellen Verbrennung des Júa, Feuerwerk und Mitternachtsritualen am Meer. Die örtlichen Regeln zu Feuer, Camping und Abfall gelten weiterhin.',
              es: 'Una celebración nocturna con música, la tradicional quema del Júa, fuegos artificiales y ritos de medianoche junto al mar. Siguen vigentes las normas locales sobre hogueras, acampada y residuos.',
              nl: 'Een laat strandfeest met muziek, de traditionele verbranding van de Júa, vuurwerk en middernachtrituelen aan zee. Lokale regels voor vuur, kamperen en afval blijven van kracht.',
              sv: 'Ett sent strandfirande med musik, den traditionella bränningen av Júa, fyrverkerier och midnattsritualer vid havet. Lokala regler för eld, camping och avfall gäller fortfarande.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.sanJuan2026
          }
        ]
      },
      {
        "id": 'summer' as const,
        "title": {
          en: 'July–August | The coast, concerts and Frigiliana’s biggest weekend',
          de: 'Juli–August | Küste, Konzerte und Frigilianas größtes Wochenende',
          es: 'Julio–agosto | La costa, los conciertos y el gran fin de semana de Frigiliana',
          nl: 'Juli–augustus | De kust, concerten en Frigiliana’s grootste weekend',
          sv: 'Juli–augusti | Kusten, konserter och Frigilianas största helg'
        } satisfies LocalizedText,
        "intro": {
          en: 'Summer events are atmospheric and often crowded. Heat, late finishes and limited parking are part of the practical picture.',
          de: 'Sommerveranstaltungen sind stimmungsvoll und häufig sehr voll. Hitze, späte Endzeiten und knappe Parkplätze gehören zur praktischen Realität.',
          es: 'Los eventos estivales tienen mucho ambiente y suelen estar concurridos. El calor, los horarios tardíos y el aparcamiento limitado forman parte de la realidad práctica.',
          nl: 'Zomerevenementen zijn sfeervol en vaak druk. Hitte, late eindtijden en beperkte parkeerruimte horen bij het praktische plaatje.',
          sv: 'Sommarens evenemang är stämningsfulla och ofta fulla. Värme, sena avslut och begränsad parkering hör till den praktiska bilden.'
        } satisfies LocalizedText,
        "events": [
          {
            "name": {
              en: 'Virgen del Carmen',
              de: 'Virgen del Carmen',
              es: 'Virgen del Carmen',
              nl: 'Virgen del Carmen',
              sv: 'Virgen del Carmen'
            } satisfies LocalizedText,
            "timing": {
              en: 'Around 16 July',
              de: 'Um den 16. Juli',
              es: 'Alrededor del 16 de julio',
              nl: 'Rond 16 juli',
              sv: 'Omkring 16 juli'
            } satisfies LocalizedText,
            "place": {
              en: 'Nerja',
              de: 'Nerja',
              es: 'Nerja',
              nl: 'Nerja',
              sv: 'Nerja'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Every year around this day',
              de: 'Jedes Jahr um diesen Tag',
              es: 'Cada año por este día',
              nl: 'Elk jaar rond deze dag',
              sv: 'Varje år kring den här dagen'
            } satisfies LocalizedText,
            "summary": {
              en: 'The patron saint of seafarers is honoured with a maritime procession and celebrations by the coast. Viewing areas become busy well before the procession.',
              de: 'Die Schutzheilige der Seeleute wird mit einer maritimen Prozession und Festlichkeiten an der Küste geehrt. Gute Aussichtspunkte füllen sich lange vor Beginn.',
              es: 'La patrona de los marineros se honra con una procesión marítima y celebraciones junto a la costa. Las zonas con buena visibilidad se llenan mucho antes de la salida.',
              nl: 'De beschermheilige van zeelieden wordt geëerd met een processie op zee en vieringen aan de kust. Plekken met goed zicht worden ruim voor het vertrek druk.',
              sv: 'Sjöfararnas skyddshelgon hedras med en procession till havs och firande vid kusten. Platser med bra utsikt blir fulla långt före starten.'
            } satisfies LocalizedText
          },
          {
            "name": {
              en: 'Nerja Cave music programme',
              de: 'Musikprogramm der Höhle von Nerja',
              es: 'Programación musical de la Cueva de Nerja',
              nl: 'Muziekprogramma bij de Grot van Nerja',
              sv: 'Musikprogram vid Nerjagrottan'
            } satisfies LocalizedText,
            "timing": {
              en: 'Summer',
              de: 'Im Sommer',
              es: 'Verano',
              nl: 'Zomer',
              sv: 'Sommaren'
            } satisfies LocalizedText,
            "place": {
              en: 'Nerja Cave area',
              de: 'Gelände der Höhle von Nerja',
              es: 'Entorno de la Cueva de Nerja',
              nl: 'Omgeving van de Grot van Nerja',
              sv: 'Området vid Nerjagrottan'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Programme and tickets vary',
              de: 'Programm und Tickets variieren',
              es: 'El programa y las entradas varían',
              nl: 'Programma en tickets wisselen',
              sv: 'Program och biljetter varierar'
            } satisfies LocalizedText,
            "summary": {
              en: 'Concerts and the cultural programme are planned anew each season; venue and tickets are in the official programme.',
              de: 'Konzerte und Kulturprogramm werden jede Saison neu geplant; Ort und Tickets stehen im offiziellen Programm.',
              es: 'Los conciertos y el programa cultural se planifican de nuevo cada temporada; lugar y entradas están en el programa oficial.',
              nl: 'Concerten en cultuurprogramma worden elk seizoen opnieuw gepland; locatie en tickets staan in het officiële programma.',
              sv: 'Konserter och kulturprogram planeras nytt varje säsong; plats och biljetter finns i det officiella programmet.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.cuevaDeNerja
          },
          {
            "name": {
              en: 'Fiesta Blanca',
              de: 'Fiesta Blanca',
              es: 'Fiesta Blanca',
              nl: 'Fiesta Blanca',
              sv: 'Fiesta Blanca'
            } satisfies LocalizedText,
            "timing": {
              en: 'Usually in August',
              de: 'Meist im August',
              es: 'Normalmente en agosto',
              nl: 'Meestal in augustus',
              sv: 'Vanligen i augusti'
            } satisfies LocalizedText,
            "place": {
              en: 'Nerja coast',
              de: 'Küste von Nerja',
              es: 'Costa de Nerja',
              nl: 'Kust van Nerja',
              sv: 'Nerjas kust'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Not a fixed annual date',
              de: 'Kein dauerhaft fester Termin',
              es: 'No tiene una fecha anual fija',
              nl: 'Geen vaste jaarlijkse datum',
              sv: 'Inget fast årligt datum'
            } satisfies LocalizedText,
            "summary": {
              en: 'A high-energy open-air party associated with white clothing, DJs and a late finish. Do not rely on a historic date until the council publishes the current programme.',
              de: 'Eine energiegeladene Open-Air-Party mit weißer Kleidung, DJs und spätem Ende. Verlasst euch nicht auf einen früheren Termin, bevor die Gemeinde das aktuelle Programm veröffentlicht.',
              es: 'Una fiesta al aire libre muy animada, asociada a la ropa blanca, los DJ y un final tardío. No deis por válida una fecha antigua hasta que el Ayuntamiento publique el programa actual.',
              nl: 'Een energiek openluchtfeest dat draait om witte kleding, dj’s en een laat einde. Vertrouw niet op een oude datum voordat de gemeente het actuele programma publiceert.',
              sv: 'En energifylld utomhusfest förknippad med vita kläder, dj:ar och ett sent avslut. Lita inte på ett historiskt datum innan kommunen publicerar aktuellt program.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.nerjaCouncil
          },
          {
            "name": {
              en: 'Festival Frigiliana 3 Culturas',
              de: 'Festival Frigiliana 3 Culturas',
              es: 'Festival Frigiliana 3 Culturas',
              nl: 'Festival Frigiliana 3 Culturas',
              sv: 'Festival Frigiliana 3 Culturas'
            } satisfies LocalizedText,
            "timing": {
              en: "Usually late August",
              de: "Meist Ende August",
              es: "Habitualmente a finales de agosto",
              nl: "Meestal eind augustus",
              sv: "Vanligen i slutet av augusti"
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana historic quarter',
              de: 'Altstadt von Frigiliana',
              es: 'Casco histórico de Frigiliana',
              nl: 'Historisch centrum van Frigiliana',
              sv: 'Frigilianas historiska kvarter'
            } satisfies LocalizedText,
            "dateStatus": {
              en: "Reference: 2026 announcement",
              de: "Referenz: Ankündigung 2026",
              es: "Referencia: anuncio de 2026",
              nl: "Referentie: aankondiging 2026",
              sv: "Referens: annonsering 2026"
            } satisfies LocalizedText,
            "summary": {
              en: "Music, street performances, a medieval market and food fill Frigiliana’s historic centre over several days. The municipality announced 27–30 August for the 2026 edition.",
              de: "Musik, Straßenkultur, Mittelaltermarkt und kulinarische Traditionen füllen Frigilianas Altstadt über mehrere Tage. Für die Ausgabe 2026 kündigte die Gemeinde den 27.–30. August an.",
              es: "La música, los espectáculos callejeros, el mercado medieval y la gastronomía llenan el casco antiguo durante varios días. Para la edición de 2026, el Ayuntamiento anunció del 27 al 30 de agosto.",
              nl: "Muziek, straatoptredens, een middeleeuwse markt en eten vullen het oude centrum meerdere dagen. Voor de editie van 2026 kondigde de gemeente 27 tot en met 30 augustus aan.",
              sv: "Musik, gatuföreställningar, medeltidsmarknad och mat fyller gamla stan under flera dagar. För 2026 års upplaga annonserade kommunen den 27–30 augusti."
            } satisfies LocalizedText,
            "officialHref": officialLinks.threeCultures2026
          }
        ]
      },
      {
        "id": 'autumn-winter' as const,
        "title": {
          en: 'September–December | Fairs and the close of the year',
          de: 'September–Dezember | Ferias und Jahresausklang',
          es: 'Septiembre–diciembre | Ferias y final de año',
          nl: 'September–december | Feria’s en het einde van het jaar',
          sv: 'September–december | Ferior och årets avslutning'
        } satisfies LocalizedText,
        "intro": {
          en: "Autumn brings Maro’s and Nerja’s ferias, followed by the Christmas programme. Each has its own dates, venues and arrangements for traffic.",
          de: "Im Herbst folgen die Ferias von Maro und Nerja, später das Weihnachtsprogramm. Termine, Veranstaltungsorte und Verkehrsführung richten sich nach dem jeweiligen Fest.",
          es: "En otoño llegan las ferias de Maro y Nerja, seguidas del programa navideño. Cada celebración tiene sus fechas, espacios y organización del tráfico.",
          nl: "In het najaar volgen de feria’s van Maro en Nerja en daarna het kerstprogramma. Data, locaties en verkeersmaatregelen verschillen per feest.",
          sv: "Under hösten kommer feriorna i Maro och Nerja, följda av julprogrammet. Datum, platser och trafiklösningar beror på varje fest."
        } satisfies LocalizedText,
        "events": [
          {
            "name": {
              en: 'Feria de las Maravillas',
              de: 'Feria de las Maravillas',
              es: 'Feria de las Maravillas',
              nl: 'Feria de las Maravillas',
              sv: 'Feria de las Maravillas'
            } satisfies LocalizedText,
            "timing": {
              en: 'Around early September',
              de: 'Etwa Anfang September',
              es: 'Alrededor de principios de septiembre',
              nl: 'Rond begin september',
              sv: 'Omkring början av september'
            } satisfies LocalizedText,
            "place": {
              en: 'Maro',
              de: 'Maro',
              es: 'Maro',
              nl: 'Maro',
              sv: 'Maro'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Date and programme vary',
              de: 'Termin und Programm variieren',
              es: 'La fecha y el programa varían',
              nl: 'Datum en programma wisselen',
              sv: 'Datum och program varierar'
            } satisfies LocalizedText,
            "summary": {
              en: 'Maro’s fair: concerts, rides and a village celebrating together. The dates are announced by Nerja council each year.',
              de: 'Maros Feria: Konzerte, Fahrgeschäfte und ein Dorf, das zusammen feiert. Die Tage gibt die Gemeinde Nerja jedes Jahr bekannt.',
              es: 'La feria de Maro: conciertos, atracciones y un pueblo que celebra unido. Las fechas las anuncia cada año el Ayuntamiento de Nerja.',
              nl: 'De feria van Maro: concerten, kermisattracties en een dorp dat samen feest. De dagen maakt de gemeente Nerja elk jaar bekend.',
              sv: 'Maros feria: konserter, karuseller och en by som firar tillsammans. Dagarna meddelas av Nerjas kommun varje år.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.nerjaCouncil
          },
          {
            "name": {
              en: 'Feria de Nerja',
              de: 'Feria de Nerja',
              es: 'Feria de Nerja',
              nl: 'Feria de Nerja',
              sv: 'Feria de Nerja'
            } satisfies LocalizedText,
            "timing": {
              en: 'Usually in October',
              de: 'Meist im Oktober',
              es: 'Normalmente en octubre',
              nl: 'Meestal in oktober',
              sv: 'Vanligen i oktober'
            } satisfies LocalizedText,
            "place": {
              en: 'Nerja',
              de: 'Nerja',
              es: 'Nerja',
              nl: 'Nerja',
              sv: 'Nerja'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Dates change each year',
              de: 'Termine ändern sich jährlich',
              es: 'Las fechas cambian cada año',
              nl: 'Data veranderen ieder jaar',
              sv: 'Datumen ändras varje år'
            } satisfies LocalizedText,
            "summary": {
              en: 'One of Nerja’s largest annual celebrations, with daytime and evening activity across several days. Traffic, parking and noise patterns change noticeably.',
              de: 'Eines der größten jährlichen Feste Nerjas mit Tages- und Abendprogramm über mehrere Tage. Verkehr, Parkmöglichkeiten und Geräuschpegel verändern sich deutlich.',
              es: 'Una de las mayores celebraciones anuales de Nerja, con actividad diurna y nocturna durante varios días. El tráfico, el aparcamiento y el nivel de ruido cambian de forma notable.',
              nl: 'Een van Nerja’s grootste jaarlijkse feesten, met activiteiten overdag en ’s avonds gedurende meerdere dagen. Verkeer, parkeren en geluidsniveau veranderen merkbaar.',
              sv: 'En av Nerjas största årliga fester, med aktiviteter dag och kväll under flera dagar. Trafik, parkering och ljudnivå förändras märkbart.'
            } satisfies LocalizedText,
            "officialHref": officialLinks.nerjaCouncil
          },
          {
            "name": {
              en: 'Christmas and New Year',
              de: 'Weihnachten und Neujahr',
              es: 'Navidad y Año Nuevo',
              nl: 'Kerst en nieuwjaar',
              sv: 'Jul och nyår'
            } satisfies LocalizedText,
            "timing": {
              en: 'December–1 January',
              de: 'Dezember–1. Januar',
              es: 'Diciembre–1 de enero',
              nl: 'December–1 januari',
              sv: 'December–1 januari'
            } satisfies LocalizedText,
            "place": {
              en: 'Frigiliana & Nerja',
              de: 'Frigiliana & Nerja',
              es: 'Frigiliana y Nerja',
              nl: 'Frigiliana & Nerja',
              sv: 'Frigiliana & Nerja'
            } satisfies LocalizedText,
            "dateStatus": {
              en: 'Programme varies by town',
              de: 'Programm variiert je nach Ort',
              es: 'El programa varía según el municipio',
              nl: 'Programma verschilt per plaats',
              sv: 'Programmet varierar mellan orterna'
            } satisfies LocalizedText,
            "summary": {
              en: 'Lights, concerts and public gatherings mark the festive season. New Year’s Eve arrangements should be checked locally rather than assumed.',
              de: 'Beleuchtung, Konzerte und öffentliche Zusammenkünfte prägen die Festzeit. Die konkreten Pläne für Silvester solltet ihr vor Ort prüfen und nicht voraussetzen.',
              es: 'La iluminación, los conciertos y los encuentros públicos marcan las fiestas. Conviene consultar localmente los actos de Nochevieja en lugar de darlos por hechos.',
              nl: 'Verlichting, concerten en openbare bijeenkomsten bepalen de feestperiode. Controleer de plannen voor oudejaarsavond lokaal in plaats van ze te veronderstellen.',
              sv: 'Belysning, konserter och offentliga sammankomster präglar högtiden. Kontrollera planerna för nyårsafton lokalt i stället för att utgå från dem.'
            } satisfies LocalizedText
          }
        ]
      }
    ]
  },
  "experiences": {
    "title": {
      en: 'Four celebrations worth planning around',
      de: 'Vier Feste, um die sich eine Reise planen lässt',
      es: 'Cuatro celebraciones en torno a las que merece la pena viajar',
      nl: 'Vier feesten waarvoor jullie bewust kunnen reizen',
      sv: 'Fyra firanden att planera en resa kring'
    } satisfies LocalizedText,
    "intro": {
      en: 'These events are more than calendar entries. Each changes the use of streets, transport and public space, so the practical context matters as much as the spectacle.',
      de: 'Diese Ereignisse sind mehr als Kalendereinträge. Sie verändern Straßen, Verkehr und öffentliche Räume — deshalb ist der praktische Kontext genauso wichtig wie das Erlebnis.',
      es: 'Son mucho más que una fecha en el calendario. Modifican el uso de las calles, el transporte y el espacio público, por lo que el contexto práctico importa tanto como el espectáculo.',
      nl: 'Dit zijn meer dan kalenderdata. Ze veranderen straten, vervoer en openbare ruimte; daarom is de praktische context even belangrijk als het spektakel.',
      sv: 'De här evenemangen är mer än kalenderposter. De förändrar gator, transporter och offentliga platser, så den praktiska informationen är lika viktig som upplevelsen.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Festival Frigiliana 3 Culturas',
          de: 'Festival Frigiliana 3 Culturas',
          es: 'Festival Frigiliana 3 Culturas',
          nl: 'Festival Frigiliana 3 Culturas',
          sv: 'Festival Frigiliana 3 Culturas'
        } satisfies LocalizedText,
        "timing": {
          en: "Usually late August",
          de: "Meist Ende August",
          es: "Habitualmente a finales de agosto",
          nl: "Meestal eind augustus",
          sv: "Vanligen i slutet av augusti"
        } satisfies LocalizedText,
        "place": {
          en: 'Frigiliana historic quarter',
          de: 'Altstadt von Frigiliana',
          es: 'Casco histórico de Frigiliana',
          nl: 'Historisch centrum van Frigiliana',
          sv: 'Frigilianas historiska kvarter'
        } satisfies LocalizedText,
        "dateStatus": {
          en: "Reference: 2026 announcement",
          de: "Referenz: Ankündigung 2026",
          es: "Referencia: anuncio de 2026",
          nl: "Referentie: aankondiging 2026",
          sv: "Referens: annonsering 2026"
        } satisfies LocalizedText,
        "description": {
          en: 'Frigiliana’s largest cultural weekend brings together music, a large craft market, street performances and a tapas route through the old town. It is a modern cultural festival, created by the municipality in 2006, rather than an old village tradition — and the village feels completely different from an ordinary summer evening.',
          de: 'Frigilianas größtes Kulturwochenende verbindet Musik, einen großen Kunsthandwerksmarkt, Straßenkunst und eine Tapas-Route durch die Altstadt. Es ist ein modernes Kulturfestival, das die Gemeinde 2006 ins Leben gerufen hat, und kein alter Dorfbrauch — das Dorf fühlt sich dann völlig anders an als an einem gewöhnlichen Sommerabend.',
          es: 'El gran fin de semana cultural de Frigiliana reúne música, un gran mercado artesanal, espectáculos callejeros y una ruta de la tapa por el casco antiguo. Es un festival cultural moderno, creado por el ayuntamiento en 2006, y no una tradición antigua del pueblo: durante esos días Frigiliana se siente completamente distinta a una noche normal de verano.',
          nl: 'Frigiliana’s grootste culturele weekend combineert muziek, een grote ambachtsmarkt, straatvoorstellingen en een tapasroute door de oude wijk. Het is een modern cultureel festival dat de gemeente in 2006 in het leven riep en geen oude dorpstraditie — het dorp voelt dan volledig anders dan op een gewone zomeravond.',
          sv: 'Frigilianas största kulturhelg förenar musik, en stor hantverksmarknad, gatuföreställningar och en tapasrunda genom den gamla bydelen. Det är en modern kulturfestival som kommunen startade 2006, inte en gammal bytradition — och byn känns helt annorlunda än under en vanlig sommarkväll.'
        } satisfies LocalizedText,
        "planningNote": {
          en: "The evening programme brings music and crowds into the historic centre. Special parking and shuttle arrangements are announced for each edition; the last stretch to our house is on foot through the village.",
          de: "Das Abendprogramm bringt Musik und viele Menschen in die Altstadt. Sonderparkplätze und Shuttle-Regelungen werden für die jeweilige Ausgabe bekannt gegeben; der letzte Weg zu unserem Haus führt zu Fuß durchs Dorf.",
          es: "El programa nocturno lleva música y mucha gente al casco antiguo. Los aparcamientos especiales y las lanzaderas se anuncian para cada edición; el último tramo hasta nuestra casa se hace a pie por el pueblo.",
          nl: "Het avondprogramma brengt muziek en veel mensen naar het oude centrum. Speciale parkeerplaatsen en pendelbussen worden per editie aangekondigd; het laatste stuk naar ons huis lopen jullie door het dorp.",
          sv: "Kvällsprogrammet fyller gamla stan med musik och människor. Särskilda parkeringar och skyttelbussar annonseras för varje upplaga; sista biten till vårt hus går ni till fots genom byn."
        } satisfies LocalizedText,
        "officialHref": officialLinks.threeCultures2026
      },
      {
        "title": {
          en: 'Semana Santa',
          de: 'Semana Santa',
          es: 'Semana Santa',
          nl: 'Semana Santa',
          sv: 'Semana Santa'
        } satisfies LocalizedText,
        "timing": {
          en: 'March or April',
          de: 'März oder April',
          es: 'Marzo o abril',
          nl: 'Maart of april',
          sv: 'Mars eller april'
        } satisfies LocalizedText,
        "place": {
          en: 'Frigiliana & Nerja',
          de: 'Frigiliana & Nerja',
          es: 'Frigiliana y Nerja',
          nl: 'Frigiliana & Nerja',
          sv: 'Frigiliana & Nerja'
        } satisfies LocalizedText,
        "dateStatus": {
          en: 'Movable religious dates',
          de: 'Bewegliche religiöse Termine',
          es: 'Fechas religiosas móviles',
          nl: 'Verschuivende religieuze data',
          sv: 'Rörliga religiösa datum'
        } satisfies LocalizedText,
        "description": {
          en: 'Incense, bands, candlelight and slow processions create a powerful atmosphere. This is a living religious tradition, not a staged visitor event, and the tone varies from quiet anticipation to dense evening crowds. Frigiliana’s most striking moment is the Procesión de la Soledad on Good Friday night, when women in black mourning dress accompany the Virgin in silence through the darkened lanes of the Barribarto.',
          de: 'Weihrauch, Musikkapellen, Kerzenlicht und langsame Prozessionen schaffen eine intensive Atmosphäre. Dies ist eine lebendige religiöse Tradition und keine inszenierte Besucherattraktion; die Stimmung reicht von stiller Erwartung bis zu dichtem abendlichem Andrang. Der eindrücklichste Moment in Frigiliana ist die Procesión de la Soledad in der Nacht des Karfreitags, wenn Frauen in schwarzer Trauerkleidung die Madonna schweigend durch die abgedunkelten Gassen des Barribarto begleiten.',
          es: 'El incienso, las bandas, las velas y el paso lento de las procesiones crean un ambiente muy intenso. Es una tradición religiosa viva, no un espectáculo preparado para visitantes, y puede pasar de la espera silenciosa a calles muy concurridas por la noche. El momento más impresionante en Frigiliana es la Procesión de la Soledad, la noche del Viernes Santo, cuando las mujeres de riguroso luto acompañan en silencio a la Virgen por las calles a oscuras del Barribarto.',
          nl: 'Wierook, muziekkorpsen, kaarslicht en trage processies scheppen een krachtige sfeer. Dit is een levende religieuze traditie, geen voorstelling voor bezoekers, en de stemming loopt uiteen van stille verwachting tot dichte avondmenigten. Het indrukwekkendste moment in Frigiliana is de Procesión de la Soledad in de nacht van Goede Vrijdag, wanneer vrouwen in zwarte rouwkleding de Maagd zwijgend door de verduisterde straatjes van het Barribarto begeleiden.',
          sv: 'Rökelse, musikkårer, levande ljus och långsamma processioner skapar en stark stämning. Det här är en levande religiös tradition, inte en iscensatt turistattraktion, och känslan växlar mellan tyst förväntan och täta kvällsfolkmassor. Det starkaste ögonblicket i Frigiliana är Procesión de la Soledad på långfredagsnatten, när kvinnor i svart sorgdräkt tyst följer Madonnan genom Barribartos nedsläckta gränder.'
        } satisfies LocalizedText,
        "planningNote": {
          en: "Processions use the village streets, including after dark. Allow time for the walk to dinner or back to our house, and keep the procession route clear.",
          de: "Die Prozessionen ziehen auch nach Einbruch der Dunkelheit durch die Gassen. Für den Weg zum Abendessen oder zurück zu unserem Haus braucht ihr dann mehr Zeit; die Prozessionsroute bleibt frei.",
          es: "Las procesiones recorren las calles también de noche. Contad con más tiempo para ir a cenar o volver a nuestra casa y dejad libre el recorrido de la procesión.",
          nl: "De processies trekken ook na het donker door de straten. Neem meer tijd voor de wandeling naar het restaurant of terug naar ons huis en houd de processieroute vrij.",
          sv: "Processionerna går genom gränderna även efter mörkrets inbrott. Räkna med mer tid för promenaden till middagen eller hem till oss och håll processionsvägen fri."
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Romería de San Isidro',
          de: 'Romería de San Isidro',
          es: 'Romería de San Isidro',
          nl: 'Romería de San Isidro',
          sv: 'Romería de San Isidro'
        } satisfies LocalizedText,
        "timing": {
          en: '15 May',
          de: '15. Mai',
          es: '15 de mayo',
          nl: '15 mei',
          sv: '15 maj'
        } satisfies LocalizedText,
        "place": {
          en: 'Nerja to the Nerja Cave grounds',
          de: 'Von Nerja zum Gelände der Höhle von Nerja',
          es: 'Desde Nerja hasta el recinto de la Cueva de Nerja',
          nl: 'Van Nerja naar het terrein bij de Grot van Nerja',
          sv: 'Från Nerja till området vid Nerjagrottan'
        } satisfies LocalizedText,
        "dateStatus": {
          en: "Reference: 2026 announcement",
          de: "Referenz: Ankündigung 2026",
          es: "Referencia: anuncio de 2026",
          nl: "Referentie: aankondiging 2026",
          sv: "Referens: annonsering 2026"
        } satisfies LocalizedText,
        "description": {
          en: 'Decorated carts, horses, traditional dress and music accompany the pilgrimage from central Nerja towards the cave grounds. It is colourful, social and one of the area’s most participatory days.',
          de: 'Geschmückte Wagen, Pferde, Trachten und Musik begleiten die Wallfahrt vom Zentrum Nerjas zum Höhlengelände. Der Tag ist farbenfroh, gesellig und eines der Feste mit der stärksten Beteiligung in der Region.',
          es: 'Carretas engalanadas, caballos, trajes tradicionales y música acompañan la romería desde el centro de Nerja hasta la Cueva. Es una jornada colorida, social y una de las más participativas de la zona.',
          nl: 'Versierde wagens, paarden, traditionele kleding en muziek begeleiden de bedevaart vanuit het centrum van Nerja naar het grottenterrein. Het is kleurrijk, sociaal en een van de meest breed gedragen dagen in de streek.',
          sv: 'Dekorerade vagnar, hästar, folkdräkter och musik följer pilgrimsfärden från centrala Nerja mot grottområdet. Dagen är färgstark, social och ett av områdets mest deltagarintensiva firanden.'
        } satisfies LocalizedText,
        "planningNote": {
          en: 'Expect a long, warm day and major changes to traffic. Start in Nerja if you want to see the procession depart; use the special transport arrangements if the council confirms them for your visit.',
          de: 'Rechnet mit einem langen, warmen Tag und deutlichen Verkehrsänderungen. Beginnt in Nerja, wenn ihr den Start des Zuges sehen möchtet, und nutzt Sonderverbindungen, falls die Gemeinde sie für euren Besuch bestätigt.',
          es: 'Contad con un día largo y caluroso y con cambios importantes de tráfico. Empezad en Nerja si queréis ver la salida y utilizad el transporte especial si el Ayuntamiento lo confirma para vuestra visita.',
          nl: 'Reken op een lange, warme dag en grote verkeerswijzigingen. Begin in Nerja als jullie het vertrek willen zien en gebruik speciaal vervoer als de gemeente dat voor jullie bezoek bevestigt.',
          sv: 'Räkna med en lång, varm dag och stora trafikförändringar. Börja i Nerja om ni vill se starten och använd specialtrafiken om kommunen bekräftar den för ert besök.'
        } satisfies LocalizedText,
        "officialHref": officialLinks.sanIsidro2026
      },
      {
        "title": {
          en: 'Noche de San Juan',
          de: 'Noche de San Juan',
          es: 'Noche de San Juan',
          nl: 'Noche de San Juan',
          sv: 'Noche de San Juan'
        } satisfies LocalizedText,
        "timing": {
          en: 'Night of 23 June',
          de: 'Nacht zum 24. Juni',
          es: 'Noche del 23 de junio',
          nl: 'Nacht van 23 juni',
          sv: 'Natten den 23 juni'
        } satisfies LocalizedText,
        "place": {
          en: 'Burriana Beach, Nerja',
          de: 'Playa Burriana, Nerja',
          es: 'Playa de Burriana, Nerja',
          nl: 'Burriana-strand, Nerja',
          sv: 'Burrianastranden, Nerja'
        } satisfies LocalizedText,
        "dateStatus": {
          en: "Reference: 2026 announcement",
          de: "Referenz: Ankündigung 2026",
          es: "Referencia: anuncio de 2026",
          nl: "Referentie: aankondiging 2026",
          sv: "Referens: annonsering 2026"
        } satisfies LocalizedText,
        "description": {
          en: 'Music, fireworks, the burning of the Júa and midnight rituals turn Burriana into a large communal beach celebration. The atmosphere is informal, energetic and much busier than a normal beach evening.',
          de: 'Musik, Feuerwerk, die Verbrennung des Júa und Rituale um Mitternacht verwandeln Burriana in ein großes gemeinschaftliches Strandfest. Die Atmosphäre ist ungezwungen, energiegeladen und viel voller als an einem normalen Strandabend.',
          es: 'La música, los fuegos artificiales, la quema del Júa y los ritos de medianoche convierten Burriana en una gran celebración comunitaria junto al mar. El ambiente es informal, enérgico y mucho más concurrido que una noche de playa normal.',
          nl: 'Muziek, vuurwerk, de verbranding van de Júa en middernachtrituelen maken van Burriana één groot gemeenschappelijk strandfeest. De sfeer is informeel, energiek en veel drukker dan op een gewone strandavond.',
          sv: 'Musik, fyrverkerier, bränningen av Júa och midnattsritualer gör Burriana till ett stort gemensamt strandfirande. Stämningen är informell, energisk och mycket livligare än en vanlig strandkväll.'
        } satisfies LocalizedText,
        "planningNote": {
          en: "Music and celebrations continue late on the beach. Arrange your journey home before the midnight festivities; the municipality’s rules on fires, camping and waste apply at Burriana.",
          de: "Musik und Feiern gehen am Strand bis spät in die Nacht. Organisiert die Rückfahrt vor den Mitternachtsfeiern; an Burriana gelten die Gemeinderegeln zu Feuer, Camping und Abfall.",
          es: "La música y la fiesta continúan hasta tarde en la playa. Organizad la vuelta antes de la celebración de medianoche; en Burriana se aplican las normas municipales sobre fuego, acampada y residuos.",
          nl: "Muziek en feest gaan op het strand tot laat door. Regel de terugreis vóór de viering rond middernacht; op Burriana gelden de gemeentelijke regels voor vuur, kamperen en afval.",
          sv: "Musiken och firandet fortsätter sent på stranden. Ordna hemresan före midnattsfirandet; på Burriana gäller kommunens regler om eldning, camping och avfall."
        } satisfies LocalizedText,
        "officialHref": officialLinks.sanJuan2026
      }
    ]
  },
  "planning": {
    "title": {
      en: 'Plan the celebration without losing the holiday',
      de: 'Das Fest erleben, ohne den Urlaub zu verplanen',
      es: 'Disfrutad la fiesta sin convertir las vacaciones en una agenda',
      nl: 'Beleef het feest zonder jullie vakantie vol te plannen',
      sv: 'Upplev festen utan att överplanera semestern'
    } satisfies LocalizedText,
    "intro": {
      en: "The annual programme sets out where and when the celebrations take place. Processions and large evening events can affect your route to the village or back to your accommodation.",
      de: "Im Jahresprogramm stehen die Orte und Zeiten der Veranstaltungen. Prozessionen und große Abendveranstaltungen können den Weg ins Dorf oder zurück zur Unterkunft verändern.",
      es: "El programa de cada año indica los lugares y horarios de los actos. Las procesiones y las grandes celebraciones nocturnas pueden afectar al camino de entrada al pueblo o de vuelta al alojamiento.",
      nl: "Het jaarprogramma vermeldt waar en wanneer de vieringen plaatsvinden. Processies en grote avondfeesten kunnen invloed hebben op de route naar het dorp of terug naar jullie verblijf.",
      sv: "Årets program visar var och när firandet äger rum. Processioner och stora kvällsevenemang kan påverka vägen in i byn eller hem till boendet."
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Check the current programme',
          de: 'Das aktuelle Programm prüfen',
          es: 'Consultad el programa actual',
          nl: 'Controleer het actuele programma',
          sv: 'Kontrollera aktuellt program'
        } satisfies LocalizedText,
        "text": {
          en: 'Use council or organiser pages for the exact day, route and start time. Social posts and old calendars often remain visible after a programme has changed.',
          de: 'Nutzt Gemeinde- oder Veranstalterseiten für Tag, Route und Beginn. Beiträge in sozialen Medien und alte Kalender bleiben oft sichtbar, obwohl sich das Programm geändert hat.',
          es: 'Usad las páginas del ayuntamiento o del organizador para confirmar día, recorrido y hora de inicio. Las publicaciones antiguas y las redes sociales pueden seguir visibles después de un cambio.',
          nl: 'Gebruik websites van gemeente of organisator voor de exacte dag, route en begintijd. Sociale berichten en oude kalenders blijven soms zichtbaar nadat een programma is gewijzigd.',
          sv: 'Använd kommunens eller arrangörens sidor för exakt dag, rutt och starttid. Inlägg i sociala medier och äldre kalendrar kan ligga kvar efter att programmet har ändrats.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Treat parking as part of the plan',
          de: 'Parken als Teil der Planung verstehen',
          es: 'Incluid el aparcamiento en el plan',
          nl: 'Maak parkeren deel van het plan',
          sv: 'Gör parkeringen till en del av planen'
        } satisfies LocalizedText,
        "text": {
          en: 'For major Frigiliana events, park outside the historic centre and expect to walk uphill. In Nerja, choose a meeting point away from the busiest beach or procession route.',
          de: 'Bei großen Festen in Frigiliana parkt ihr am besten außerhalb der Altstadt und rechnet mit einem Weg bergauf. In Nerja hilft ein Treffpunkt abseits des belebtesten Strandes oder der Prozessionsroute.',
          es: 'Para los grandes eventos de Frigiliana, aparcad fuera del casco histórico y contad con caminar cuesta arriba. En Nerja, acordad un punto de encuentro alejado de la playa o la procesión más concurrida.',
          nl: 'Parkeer bij grote evenementen in Frigiliana buiten het historische centrum en reken op bergop lopen. Spreek in Nerja af buiten het drukste strand of de processieroute.',
          sv: 'Parkera utanför historiska centrum vid stora evenemang i Frigiliana och räkna med att gå uppför. Bestäm en mötesplats i Nerja utanför den mest besökta stranden eller processionsrutten.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Book only what needs booking',
          de: 'Nur buchen, was wirklich gebucht werden muss',
          es: 'Reservad solo lo que lo requiera',
          nl: 'Boek alleen wat geboekt moet worden',
          sv: 'Boka bara det som kräver bokning'
        } satisfies LocalizedText,
        "text": {
          en: 'Many street celebrations and processions are free. Concerts, seated performances and popular restaurants may require tickets or reservations; verify the operator’s conditions.',
          de: 'Viele Straßenfeste und Prozessionen sind kostenlos. Konzerte, Veranstaltungen mit Sitzplätzen und beliebte Restaurants können Tickets oder Reservierungen verlangen; prüft die Bedingungen direkt beim Anbieter.',
          es: 'Muchas fiestas callejeras y procesiones son gratuitas. Los conciertos, espectáculos con asiento y restaurantes populares pueden requerir entrada o reserva; comprobad las condiciones con el operador.',
          nl: 'Veel straatfeesten en processies zijn gratis. Concerten, voorstellingen met zitplaatsen en populaire restaurants kunnen tickets of reserveringen vereisen; controleer de voorwaarden bij de aanbieder.',
          sv: 'Många gatufester och processioner är gratis. Konserter, föreställningar med sittplatser och populära restauranger kan kräva biljett eller bokning; kontrollera arrangörens villkor.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Leave room for local rhythm',
          de: 'Platz für den örtlichen Rhythmus lassen',
          es: 'Dejad espacio al ritmo local',
          nl: 'Laat ruimte voor het lokale ritme',
          sv: 'Lämna plats för den lokala rytmen'
        } satisfies LocalizedText,
        "text": {
          en: 'Do not turn the day into a checklist. One procession, one concert or a few hours at the festival is often enough, especially in summer heat or with young children.',
          de: 'Macht aus dem Tag keine Checkliste. Eine Prozession, ein Konzert oder einige Stunden auf dem Festival reichen oft aus — besonders bei Sommerhitze oder mit kleinen Kindern.',
          es: 'No convirtáis el día en una lista. Una procesión, un concierto o unas horas de festival suelen ser suficientes, especialmente con el calor del verano o con niños pequeños.',
          nl: 'Maak van de dag geen checklist. Eén processie, één concert of een paar uur festival is vaak genoeg, zeker in zomerhitte of met jonge kinderen.',
          sv: 'Gör inte dagen till en checklista. En procession, en konsert eller några timmar på festivalen räcker ofta, särskilt i sommarvärme eller med små barn.'
        } satisfies LocalizedText
      }
    ],
    "note": {
      en: "Before booking around a festival, check the municipality’s programme for your travel year. On arrival, the current signs determine vehicle access and parking.",
      de: "Vor einer Buchung rund um ein Fest zählt das Gemeindeprogramm für euer Reisejahr. Bei der Ankunft richten sich Zufahrt und Parken nach der aktuellen Beschilderung.",
      es: "Antes de reservar para una fiesta, consultad el programa municipal del año de vuestro viaje. Al llegar, la señalización vigente indica los accesos y el aparcamiento.",
      nl: "Bekijk vóór het boeken rond een feest het gemeentelijke programma voor jullie reisjaar. Bij aankomst bepaalt de actuele bewegwijzering waar jullie kunnen rijden en parkeren.",
      sv: "Kontrollera kommunens program för ert reseår innan ni bokar kring en fest. Vid ankomsten visar den aktuella skyltningen var ni kan köra och parkera."
    } satisfies LocalizedText
  },
  "combine": {
    "title": {
      en: 'Build a balanced day around the event',
      de: 'Ein ausgewogener Tag rund um das Fest',
      es: 'Completad la fiesta con un día equilibrado',
      nl: 'Bouw een evenwichtige dag rond het feest',
      sv: 'Skapa en balanserad dag kring firandet'
    } satisfies LocalizedText,
    "intro": {
      en: 'The best festival days often include a quieter counterpoint: a relaxed lunch before the crowds or the sea before an evening programme begins.',
      de: 'Die schönsten Festtage haben oft einen ruhigen Gegenpol: ein entspanntes Mittagessen vor dem Andrang oder ein paar Stunden am Meer, bevor das Abendprogramm beginnt.',
      es: 'Los mejores días festivos suelen tener un contrapunto tranquilo: una comida relajada antes de la afluencia o el mar antes de que empiece el programa nocturno.',
      nl: 'De fijnste festivaldagen hebben vaak een rustig tegenwicht: een ontspannen lunch vóór de drukte of de zee voordat het avondprogramma begint.',
      sv: 'De bästa festivaldagarna har ofta en lugn motvikt: en avslappnad lunch före folkmassorna eller havet innan kvällsprogrammet börjar.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Choose dinner before the streets fill',
          de: 'Das Abendessen planen, bevor sich die Gassen füllen',
          es: 'Elegid la cena antes de que se llenen las calles',
          nl: 'Kies het diner voordat de straten vollopen',
          sv: 'Välj middag innan gatorna fylls'
        } satisfies LocalizedText,
        "text": {
          en: 'Use our restaurant guide to find a village terrace, a special dinner in Nerja or an easy meal away from the busiest event zone.',
          de: 'Unser Restaurantguide hilft euch bei der Wahl zwischen Dorfplatz, besonderem Abend in Nerja und einer unkomplizierten Mahlzeit abseits der größten Menschenmenge.',
          es: 'Nuestra guía de restaurantes os ayudará a encontrar una terraza en el pueblo, una cena especial en Nerja o una opción sencilla alejada de la zona más concurrida.',
          nl: 'Gebruik onze restaurantgids voor een terras in het dorp, een bijzonder diner in Nerja of een eenvoudige maaltijd buiten de drukste evenementenzone.',
          sv: 'Använd vår restaurangguide för att hitta en byterrass, en speciell middag i Nerja eller en enkel måltid utanför den mest intensiva festivalzonen.'
        } satisfies LocalizedText,
        "linkToken": 'frigiliana_food_authority' as const,
        "linkLabel": {
          en: 'See the restaurant guide',
          de: 'Zum Restaurantguide',
          es: 'Ver la guía de restaurantes',
          nl: 'Bekijk de restaurantgids',
          sv: 'Se restaurangguiden'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Start with a few hours by the sea',
          de: 'Mit einigen Stunden am Meer beginnen',
          es: 'Empezad con unas horas junto al mar',
          nl: 'Begin met een paar uur aan zee',
          sv: 'Börja med några timmar vid havet'
        } satisfies LocalizedText,
        "text": {
          en: 'For summer celebrations, a calm morning at the coast makes the late finish much easier. Our beach guide says which stretch is sheltered and which is open.',
          de: 'Bei Sommerfesten macht ein ruhiger Vormittag an der Küste den späten Abend deutlich leichter. Unser Strandguide sagt, welcher Abschnitt geschützt liegt und welcher offen.',
          es: 'En las fiestas de verano, una mañana tranquila en la costa hace la noche larga mucho más llevadera. Nuestra guía de playas indica qué tramo está resguardado y cuál abierto.',
          nl: 'Bij zomerfeesten maakt een rustige ochtend aan de kust de late avond veel aangenamer. Onze strandgids vertelt welk stuk beschut ligt en welk open.',
          sv: 'Vid sommarfester gör en lugn morgon vid kusten den sena kvällen mycket enklare. Vår strandguide säger vilken sträcka som ligger skyddad och vilken som är öppen.'
        } satisfies LocalizedText,
        "linkToken": 'frigiliana_beaches_authority' as const,
        "linkLabel": {
          en: 'See the beach guide',
          de: 'Zum Strandguide',
          es: 'Ver la guía de playas',
          nl: 'Bekijk de strandgids',
          sv: 'Se strandguiden'
        } satisfies LocalizedText
      }
    ]
  },
  "closing": {
    "title": {
      en: 'Plan your arrival before the streets fill',
      de: 'Plant eure Ankunft, bevor sich die Gassen füllen',
      es: 'Organizad la llegada antes de que se llenen las calles',
      nl: 'Plan jullie aankomst vóór de straten vollopen',
      sv: 'Planera ankomsten innan gränderna fylls'
    } satisfies LocalizedText,
    "lead": {
      en: 'On festival days, processions and evening arrivals can change access and parking. We follow the current signs and allow time for the final walk; the paid car park below Plaza de las Tres Culturas is our first reference point.',
      de: 'An Festtagen können Prozessionen und die abendliche Anreise Zufahrt und Parken verändern. Wir folgen der aktuellen Beschilderung und planen Zeit für den letzten Fußweg ein; das kostenpflichtige Parkhaus unterhalb der Plaza de las Tres Culturas ist unser erster Orientierungspunkt.',
      es: 'Durante las fiestas, las procesiones y las llegadas al atardecer pueden cambiar los accesos y el aparcamiento. Seguimos la señalización actual y dejamos tiempo para el último tramo a pie; el aparcamiento de pago bajo la Plaza de las Tres Culturas es nuestra primera referencia.',
      nl: 'Op feestdagen kunnen processies en aankomsten in de avond de toegang en het parkeren veranderen. We volgen de actuele borden en nemen tijd voor het laatste stuk te voet; de betaalde parkeergarage onder Plaza de las Tres Culturas is ons eerste oriëntatiepunt.',
      sv: 'Under festivaldagar kan processioner och kvällens ankomster ändra tillträde och parkering. Vi följer den aktuella skyltningen och lämnar tid för sista sträckan till fots; betalparkeringen nedanför Plaza de las Tres Culturas är vår första orienteringspunkt.'
    } satisfies LocalizedText,
    "nextCta": {
      en: 'Plan parking in Frigiliana',
      de: 'Parken in Frigiliana planen',
      es: 'Organizar el aparcamiento en Frigiliana',
      nl: 'Parkeren in Frigiliana plannen',
      sv: 'Planera parkeringen i Frigiliana'
    } satisfies LocalizedText
  }
};

export const frigilianaFestivalsContent: Record<
  AmaraLanguage,
  FrigilianaFestivalsPageCopy
> = {
  en: resolveLocale(frigilianaFestivalsContentCopy, 'en'),
  de: resolveLocale(frigilianaFestivalsContentCopy, 'de'),
  es: resolveLocale(frigilianaFestivalsContentCopy, 'es'),
  nl: resolveLocale(frigilianaFestivalsContentCopy, 'nl'),
  sv: resolveLocale(frigilianaFestivalsContentCopy, 'sv')
};
