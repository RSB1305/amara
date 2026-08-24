import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

/** One authored sequence in the five AMARA locales. The locales may segment it differently. */
const ll = (en: string[], de: string[], es: string[], nl: string[], sv: string[]): LocalizedTextList => ({ en, de, es, nl, sv });

export const TARIFA_EXPERIENCE_TOKEN = 'tarifa_experience_hub' as const;

export type TarifaExperienceLinkToken =
  | 'location_tarifa'
  | 'tarifa'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority'
  | 'tarifa_food_evening_life'
  | 'tarifa_nature_wildlife'
  | 'tarifa_old_town_history'
  | 'tarifa_bolonia_baelo_claudia';

export interface TarifaExperienceDayType {
  title: string;
  text: string;
  /** Routes to the spoke that owns this topic, so the hub links instead of retelling. */
  token?: TarifaExperienceLinkToken;
  linkLabel?: string;
}

export type TarifaExperienceWorldId =
  | 'beaches-coast'
  | 'wind-watersports'
  | 'food-evening-life'
  | 'nature-wildlife'
  | 'old-town-history'
  | 'bolonia-baelo-claudia';

export interface TarifaExperienceDiscoveryWorld {
  id: TarifaExperienceWorldId;
  label: string;
}

export interface TarifaExperienceSection {
  id: string;
  title: string;
  paragraphs: string[];
  cta?: {
    label: string;
    token: TarifaExperienceLinkToken;
  };
}

export interface TarifaExperiencePageCopy {
  navLabel: string;
  breadcrumbLabel: string;
  hero: {
    title: string;
    lead: string[];
    imageAlt: string;
  };
  discovery: {
    title: string;
    intro: string;
    worlds: TarifaExperienceDiscoveryWorld[];
  };
  dayChooser: {
    title: string;
    intro: string[];
    days: TarifaExperienceDayType[];
  };
  sections: TarifaExperienceSection[];
  closing: {
    title: string;
    lead: string;
    ctaLabel: string;
    token: TarifaExperienceLinkToken;
    /** Secondary route back into the location guide. */
    secondaryLabel?: string;
    secondaryToken?: TarifaExperienceLinkToken;
  };
}

export const tarifaExperienceSeo: AmaraAuthoringSeo = {
  version: '2026-08-12-tarifa-experience-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-tarifa/amara-tarifa-apartment10.webp',
  languages: {
    en: {
      title: 'Things to Do in Tarifa: Beaches, Kitesurfing & Nature',
      description:
        'Discover what makes a stay in Tarifa different: beaches for every kind of day, kitesurfing, the Old Town, wildlife, Bolonia and trips across the Strait.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Tarifa erleben: Strände, Kitesurfen, Natur & Altstadt',
      description:
        'Was kann man in Tarifa unternehmen? Entdeckt unterschiedliche Strände, Kitesurfen, Altstadt-Abende, Natur an der Meerenge, Bolonia und mehr.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Qué hacer en Tarifa: playas, kitesurf, naturaleza e historia',
      description:
        'Descubre Tarifa más allá del kitesurf: playas diferentes, casco antiguo, naturaleza del Estrecho, Bolonia y excursiones para una estancia de varios días.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Wat te doen in Tarifa: strand, kitesurfen, natuur, oude stad',
      description:
        'Ontdek Tarifa voorbij het kitesurfen: verschillende stranden, de oude stad, natuur rond de Straat van Gibraltar, Bolonia en bijzondere dagtrips.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Att göra i Tarifa: stränder, kitesurfing och gamla stan',
      description:
        'Upptäck Tarifa bortom kitesurfingen: olika stränder, gamla stan, naturen kring Gibraltarsundet, Bolonia och utflykter under en längre vistelse.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const tarifaExperienceContent = {
  navLabel: l("Experiences", "Erlebnisse", "Experiencias", "Ervaringen", "Upplevelser"),
  breadcrumbLabel: l("Experiences", "Erlebnisse", "Experiencias", "Ervaringen", "Upplevelser"),
  hero: {
    title: l("Experiences in Tarifa: choose your kind of day", "Tarifa erleben: Welcher Tag passt heute zu euch?", "Qué hacer en Tarifa: elegid el día que os apetece", "Tarifa beleven: kies de dag die bij jullie past", "Upplev Tarifa: välj vilken sorts dag ni vill ha"),
    lead: [
      l("Tarifa is famous for wind and kitesurfing, but that is only one way to experience it. Stay for a few days and you can move between Atlantic beaches, a historic Strait town, nature and wildlife, food shaped by the coast, and completely different days around Bolonia or across the water in Tangier.", "Tarifa ist für Wind und Kitesurfen bekannt. Aber darauf lässt sich der Ort nicht reduzieren. Wenn ihr mehrere Tage bleibt, könnt ihr zwischen Atlantikstränden, einer historischen Stadt an der Meerenge, Natur, Küstenküche und ganz unterschiedlichen Ausflügen wechseln.", "Tarifa es conocida por el viento y el kitesurf, pero quedarse aquí varios días permite descubrir mucho más. Hay costa atlántica, una ciudad histórica marcada por el Estrecho, naturaleza, cocina ligada al mar y excursiones que combinan paisaje e historia.", "Tarifa staat bekend om wind en kitesurfen, maar een verblijf van een paar dagen laat een veel bredere bestemming zien. Wissel de Atlantische kust af met een historische stad aan de Straat, natuur, eten uit de zee en uitstappen waarin landschap en geschiedenis samenkomen.", "Tarifa är känt för vind och kitesurfing, men några dagar här visar en mycket bredare destination. Växla mellan Atlantkusten, en historisk stad vid sundet, natur, mat präglad av havet och utflykter där landskap och historia möts."),
      l("The key is not trying to do everything. Tarifa works best when you choose the kind of day that fits the conditions — and what you actually feel like doing.", "Ihr müsst dabei nicht jeden Tag schon vorher festlegen. Gerade in Tarifa gehört es zum Aufenthalt, morgens zu schauen, worauf ihr Lust habt und welche Bedingungen dazu passen.", "No hace falta convertir las vacaciones en una lista de cosas que tachar. Tarifa funciona mejor cuando dejáis un poco de margen para decidir cada día.", "Juist hier hoeft niet iedere vakantiedag vooraf vast te staan.", "Det fina med Tarifa är att varje dag inte måste planeras i förväg.")
    ],
    imageAlt: l("Whale artwork and writing desk at AMARA Family & Surf in Tarifa", "Walbild und Schreibtisch bei AMARA Family & Surf in Tarifa", "Ilustración de una ballena y escritorio de AMARA Family & Surf en Tarifa", "Walviskunst en schrijftafel bij AMARA Family & Surf in Tarifa", "Valkonst och skrivbord på AMARA Family & Surf i Tarifa")
  },
  discovery: {
    title: l("Six ways into Tarifa", "Sechs Seiten von Tarifa", "Seis maneras de vivir Tarifa", "Zes kanten van Tarifa", "Sex sidor av Tarifa"),
    intro: l("Move from coast and wind to food, nature and history, with Bolonia adding a day where landscape and archaeology belong together.", "Von Küste und Wind über Essen, Natur und Geschichte bis zu einem Bolonia-Tag, an dem Landschaft und Archäologie zusammengehören.", "De la costa y el viento a la gastronomía, la naturaleza y la historia, con un día en Bolonia que une paisaje y arqueología.", "Van kust en wind tot eten, natuur en geschiedenis, met een dag in Bolonia waar landschap en archeologie samenkomen.", "Från kust och vind till mat, natur och historia, med en dag i Bolonia där landskap och arkeologi hör samman."),
    worlds: [
      {
        id: "beaches-coast",
        label: l("Beaches & Coast", "Strände & Küste", "Playas y costa", "Stranden & kust", "Stränder & kust")
      },
      {
        id: "wind-watersports",
        label: l("Wind & watersports", "Wind & Wassersport", "Viento y deportes acuáticos", "Wind & watersport", "Vind & vattensport")
      },
      {
        id: "food-evening-life",
        label: l("Food & evening life", "Essen & Ausgehen", "Gastronomía y vida nocturna", "Eten & uitgaan", "Mat & kvällsliv")
      },
      {
        id: "nature-wildlife",
        label: l("Nature & wildlife", "Natur & Tierwelt", "Naturaleza y fauna", "Natuur & dieren", "Natur & djurliv")
      },
      {
        id: "old-town-history",
        label: l("Old Town & history", "Altstadt & Geschichte", "Casco antiguo e historia", "Oude stad & geschiedenis", "Gamla stan & historia")
      },
      {
        id: "bolonia-baelo-claudia",
        label: l("Bolonia & Baelo Claudia", "Bolonia & Baelo Claudia", "Bolonia y Baelo Claudia", "Bolonia & Baelo Claudia", "Bolonia & Baelo Claudia")
      }
    ]
  },
  dayChooser: {
    title: l("Which day suits today?", "Welcher Tag passt heute?", "¿Qué día encaja hoy?", "Welke dag past vandaag?", "Välj er Tarifa-dag"),
    intro: [
      l("In a strong Levante only Valdevaqueros really works — that is where the rescue boats are and where everything is set up for it. The small, family-friendly Playa Chica is not a good choice then. In a Poniente, or when the air is still, it is the other way round.", "Bei starkem Levante funktioniert praktisch nur Valdevaqueros – dort sind die Rettungsboote, dort ist alles darauf eingestellt. Die kleine, familienfreundliche Playa Chica ist dann keine gute Wahl. Bei Poniente oder ruhiger Luft dreht sich das um.", "Con levante fuerte solo funciona de verdad Valdevaqueros: allí están las lanchas de rescate y todo está preparado para ello. La pequeña Playa Chica, ideal para familias, no es entonces buena elección. Con poniente o con el aire en calma ocurre al revés.", "Bij sterke levante werkt praktisch alleen Valdevaqueros — daar liggen de reddingsboten en daar is alles erop ingericht. Het kleine, gezinsvriendelijke Playa Chica is dan geen goede keuze. Bij poniente of bij stille lucht is het andersom.", "Vid stark levante fungerar i praktiken bara Valdevaqueros – där finns räddningsbåtarna och allt är anpassat för förhållandena. Den lilla, familjevänliga Playa Chica är då inget bra val. Vid poniente eller stiltje är det tvärtom."),
      l("So you do not plan Tarifa in advance. You look outside in the morning and decide then. Six kinds of day to choose from:", "Deshalb plant man Tarifa nicht auf Vorrat durch. Man schaut morgens nach draußen und entscheidet dann. Sechs Tagesformen, aus denen ihr wählen könnt:", "Por eso Tarifa no se planifica de antemano. Se mira fuera por la mañana y se decide entonces. Seis tipos de día entre los que elegir:", "Daarom plan je Tarifa niet vooruit. Je kijkt ’s ochtends naar buiten en beslist dan. Zes soorten dagen om uit te kiezen:", "Därför planerar man inte Tarifa långt i förväg. Titta ut på morgonen och bestäm då. Sex sorters dagar att välja mellan:")
    ],
    days: [
      {
        title: l("A coast day.", "Ein Küstentag.", "Un día de costa.", "Een kustdag.", "En kustdag."),
        text: l("Swim close to town or watch the kites farther west. Which beach works today depends on the wind.", "Nah am Ort baden oder weiter westlich den Kitern zuschauen. Welcher Strand heute passt, hängt vom Wind ab.", "Bañarse cerca del pueblo o ver las cometas más al oeste. Qué playa funciona hoy depende del viento.", "Zwemmen dicht bij het dorp of verderop naar het westen de kites bekijken. Welk strand vandaag werkt, hangt van de wind af.", "Bada nära stan eller se kitesurfarna längre västerut. Vilken strand som passar i dag beror på vinden."),
        token: "tarifa_beaches_authority" as LinkToken,
        linkLabel: l("Tarifa’s beaches", "Tarifas Strände", "Las playas de Tarifa", "De stranden van Tarifa", "Tarifas stränder")
      },
      {
        title: l("A wind and water day.", "Ein Wind- und Wassertag.", "Un día de viento y agua.", "Een wind- en waterdag.", "En vind- och vattendag."),
        text: l("Onto the water if that is why you came. Beginners too — through our friends at Tarifa Surf Club, which we arrange before you arrive.", "Aufs Wasser, wenn ihr dafür gekommen seid. Anfänger ebenso – über unsere Freunde vom Tarifa Surf Club, mit denen wir das vor eurer Anreise organisieren.", "Al agua, si habéis venido para eso. También quienes empiezan, con nuestros amigos del Tarifa Surf Club, que organizamos antes de vuestra llegada.", "Het water op, als je daarvoor bent gekomen. Beginners ook — via onze vrienden van Tarifa Surf Club, wat we vóór jullie aankomst regelen.", "Ge er ut på vattnet om det är därför ni kom. Även nybörjare – via våra vänner på Tarifa Surf Club; det ordnar vi före er ankomst."),
        token: "tarifa_wind_kitesurfing_authority" as LinkToken,
        linkLabel: l("Wind & kitesurfing", "Wind & Kitesurfen", "Viento y kitesurf", "Wind & kitesurfen", "Vind & kitesurfing")
      },
      {
        title: l("An Old Town day.", "Ein Altstadttag.", "Un día de casco antiguo.", "Een oude-stadsdag.", "En dag i gamla stan."),
        text: l("Through the Puerta de Jerez into the walled core, the Castillo as your anchor, and the Strait behind you the whole way.", "Durch die Puerta de Jerez in den ummauerten Kern, das Castillo als Ankerpunkt, und die Meerenge ist dabei immer im Rücken.", "Por la Puerta de Jerez al recinto amurallado, el Castillo como referencia, y el Estrecho siempre a la espalda.", "Door de Puerta de Jerez de ommuurde kern in, het Castillo als ankerpunt, en de Straat de hele tijd in je rug.", "Gå genom Puerta de Jerez in i den muromgärdade stadskärnan, med Castillo som riktpunkt och sundet i ryggen hela vägen."),
        token: "tarifa_old_town_history" as LinkToken,
        linkLabel: l("Old Town & history", "Altstadt & Geschichte", "Casco antiguo e historia", "Oude stad & geschiedenis", "Gamla stan & historia")
      },
      {
        title: l("An evening and table day.", "Ein Abend- und Esstag.", "Un día de mesa y noche.", "Een avond- en tafeldag.", "En kvälls- och matdag."),
        text: l("Red tuna from the Almadraba tradition, then Calle Batalla del Salado and the Old Town streets.", "Roter Thunfisch aus der Almadraba-Tradition, später die Calle Batalla del Salado und die Gassen der Altstadt.", "Atún rojo de la tradición almadrabera y, después, la Calle Batalla del Salado y las calles del casco antiguo.", "Rode tonijn uit de almadraba-traditie, later de Calle Batalla del Salado en de straatjes van de oude stad.", "Röd tonfisk från almadraba-traditionen, följt av Calle Batalla del Salado och gränderna i gamla stan."),
        token: "tarifa_food_evening_life" as LinkToken,
        linkLabel: l("Food & evening life", "Essen & Ausgehen", "Comer y salir", "Eten & uitgaan", "Mat & kvällsliv")
      },
      {
        title: l("A Strait nature day.", "Ein Naturtag an der Meerenge.", "Un día de naturaleza en el Estrecho.", "Een natuurdag aan de Straat.", "En naturdag vid sundet."),
        text: l("Viewpoints looking across to Africa, the bird migration corridor, or a whale and dolphin trip — that one stays deliberately flexible.", "Aussichtspunkte mit Blick nach Afrika, der Zugvogelkorridor, oder eine Ausfahrt zu Walen und Delfinen – die bleibt bewusst flexibel.", "Miradores hacia África, el corredor migratorio de aves o una salida para ver ballenas y delfines: esa conviene dejarla flexible.", "Uitzichtpunten richting Afrika, de vogeltrekcorridor, of een tocht naar walvissen en dolfijnen — die houden we bewust flexibel.", "Välj en utsiktsplats, följ flyttfåglarnas stråk eller håll möjligheten till en val- och delfintur öppen."),
        token: "tarifa_nature_wildlife" as LinkToken,
        linkLabel: l("Nature & wildlife", "Natur & Tierwelt", "Naturaleza y fauna", "Natuur & dierenwereld", "Natur & djurliv")
      },
      {
        title: l("A Bolonia day.", "Ein Bolonia-Tag.", "Un día de Bolonia.", "Een Bolonia-dag.", "En Bolonia-dag."),
        text: l("Open coast, protected dune and the Roman town of Baelo Claudia — that is a whole day, not a stopover.", "Offene Küste, geschützte Düne und die römische Stadt Baelo Claudia – das ist ein ganzer Tag, kein Zwischenstopp.", "Costa abierta, duna protegida y la ciudad romana de Baelo Claudia: eso es un día entero, no una parada.", "Open kust, beschermd duin en de Romeinse stad Baelo Claudia — dat is een hele dag, geen tussenstop.", "Öppen kust, skyddad dyn och den romerska staden Baelo Claudia – en hel dag, inte ett stopp på vägen."),
        token: "tarifa_bolonia_baelo_claudia" as LinkToken,
        linkLabel: l("Bolonia & Baelo Claudia", "Bolonia & Baelo Claudia", "Bolonia y Baelo Claudia", "Bolonia & Baelo Claudia", "Bolonia & Baelo Claudia")
      }
    ]
  },
  sections: [
    {
      id: "our-day",
      title: l("What a Tarifa day looks like for us", "So sieht bei uns ein Tarifa-Tag aus", "Así es un día en Tarifa para nosotros", "Zo ziet een dag in Tarifa er bij ons uit", "Så ser en dag i Tarifa ut för oss"),
      paragraphs: [
        l("A very good breakfast first — an açaí bowl at Café SURLA or Powerhouse. Then we wait for the wind to arrive in the afternoon.", "Morgens ein sehr gutes Frühstück – eine Açaí-Bowl im Café SURLA oder im Powerhouse. Dann warten wir ab, bis der Wind am Nachmittag kommt.", "Primero un desayuno muy bueno: un bol de açaí en el Café SURLA o en Powerhouse. Luego esperamos a que el viento llegue por la tarde.", "Eerst een heel goed ontbijt — een açaí-bowl bij Café SURLA of Powerhouse. Daarna wachten we tot de wind in de middag opkomt.", "Först en riktigt bra frukost — en açaí-bowl på Café SURLA eller Powerhouse. Sedan väntar vi på att vinden ska komma på eftermiddagen."),
        l("Out of season we walk the five minutes from our door to Playa Los Lances and kite there. In high season we take the car to Valdevaqueros, ten minutes on the N-340. Then into town for the evening.", "In der Nebensaison laufen wir von der Haustür die fünf Minuten zur Playa Los Lances und gehen dort kiten. In der Hauptsaison nehmen wir das Auto nach Valdevaqueros, zehn Minuten über die N-340. Abends dann in die Stadt.", "En temporada baja bajamos andando los cinco minutos desde nuestra puerta hasta la Playa Los Lances y hacemos kite allí. En temporada alta cogemos el coche hasta Valdevaqueros, diez minutos por la N-340. Y por la noche, al pueblo.", "In het laagseizoen lopen we de vijf minuten van onze deur naar Playa Los Lances en kitesurfen daar. In het hoogseizoen nemen we de auto naar Valdevaqueros, tien minuten over de N-340. ’s Avonds de stad in.", "Under lågsäsong går vi de fem minuterna från dörren ner till Playa Los Lances och kitar där. Under högsäsong tar vi bilen till Valdevaqueros, tio minuter på N-340. På kvällen in till stan."),
        l("And this is the part that is hard to put into words: Tarifa has a feel of its own. You sit in a bar in the evening and a kitesurfing world champion is sitting next to you. In summer it is still warm, the narrow streets are warmly lit, and you understand why people come back every year.", "Und das ist der Teil, der schwer zu beschreiben ist: Tarifa hat einen eigenen Vibe. Man sitzt abends in einer Bar, und neben einem sitzt ein Weltmeister im Kitesurfen. Im Sommer ist es dann noch warm, die Gassen sind warm beleuchtet, und man versteht, warum Leute jedes Jahr wiederkommen.", "Y esta es la parte difícil de explicar: Tarifa tiene un ambiente propio. Estás por la noche en un bar y a tu lado se sienta un campeón del mundo de kitesurf. En verano todavía hace calor, las calles están cálidamente iluminadas, y entiendes por qué hay gente que vuelve cada año.", "En dan het deel dat lastig te beschrijven is: Tarifa heeft een eigen sfeer. Je zit ’s avonds in een bar en naast je zit een wereldkampioen kitesurfen. In de zomer is het dan nog warm, de straatjes zijn warm verlicht, en je begrijpt waarom mensen elk jaar terugkomen.", "Och här kommer det som är svårt att sätta ord på: Tarifa har en egen känsla. Man sitter på en bar om kvällen och bredvid sitter en världsmästare i kitesurfing. På sommaren är det fortfarande varmt, gränderna är varmt upplysta, och man förstår varför folk kommer tillbaka år efter år.")
      ]
    },
    {
      id: "tangier",
      title: l("Tangier as an optional day across the Strait", "Tanger als möglicher Tag jenseits der Meerenge", "Tánger como posibilidad, no como obligación", "Tanger ligt dichtbij, maar hoeft niet centraal te staan", "Tanger är en möjlighet på andra sidan sundet"),
      paragraphs: ll(
        ["A trip across the Strait to Tangier is one of Tarifa's most unusual possibilities.", "It can make a longer stay genuinely different, but it does not need to become the reason for visiting Tarifa. Ferry schedules, entry requirements and operating conditions can change, so current official information should always take precedence over any evergreen travel guide.", "Think of Tangier as an optional extra — particularly rewarding when you have enough time to enjoy Tarifa itself first."],
        ["Von Tarifa aus ist auch Tanger erreichbar.", "Das ist ein außergewöhnlicher Zusatz zu einem längeren Aufenthalt, sollte Tarifa selbst aber nicht verdrängen. Fähren, Einreisebestimmungen und Betriebsbedingungen können sich ändern; dafür solltet ihr immer aktuelle offizielle Informationen nutzen."],
        ["La cercanía de Marruecos añade una dimensión poco habitual a una estancia en Tarifa.", "Una excursión a Tánger puede tener mucho sentido si disponéis de varios días. Los horarios de ferry y los requisitos de entrada pueden cambiar, así que la planificación práctica debe hacerse siempre con fuentes oficiales actualizadas."],
        ["Een dag naar Tanger kan een verblijf in Tarifa bijzonder maken.", "Zie het vooral als extra mogelijkheid wanneer jullie voldoende tijd hebben. Vaarschema's en toegangsvoorwaarden kunnen veranderen; controleer daarvoor altijd actuele officiële informatie."],
        ["Närheten till Marocko gör Tarifa ovanligt.", "En dagstur till Tanger kan vara ett spännande tillägg till en längre vistelse, men Tarifa behöver inte byggas runt utflykten. Färjetider och inreseregler kan förändras och bör alltid kontrolleras mot aktuella officiella källor."]
      )
    },
    {
      id: "stay-length",
      title: l("Two nights is a different thing from two weeks", "Zwei Nächte sind etwas anderes als zwei Wochen", "Dos noches no son lo mismo que dos semanas", "Twee nachten is iets anders dan twee weken", "Två nätter är något annat än två veckor"),
      paragraphs: [
        l("With two or three nights we would not even try to fit everything in. Coast, Old Town and one signature experience are enough.", "Bei zwei oder drei Nächten würden wir gar nicht erst versuchen, alles unterzubringen. Küste, Altstadt und ein besonderes Erlebnis reichen.", "Con dos o tres noches ni siquiera intentaríamos encajarlo todo. Costa, casco antiguo y una experiencia principal bastan.", "Met twee of drie nachten zouden we niet eens proberen alles erin te proppen. Kust, oude stad en één bijzondere ervaring zijn genoeg.", "Med två eller tre nätter skulle vi inte ens försöka få med allt. Kust, gamla stan och en större upplevelse räcker."),
        l("From four to seven nights Tarifa gets easier: you plan with the wind instead of against it. If a day is too windy for the beach, you go into the Old Town or out to Bolonia — and the windy day becomes a kite day rather than a lost one.", "Ab vier bis sieben Nächten wird Tarifa entspannter: Dann plant ihr mit dem Wind statt gegen ihn. Ist ein Tag zu windig für den Strand, geht ihr in die Altstadt oder nach Bolonia – und der Windtag wird zum Kitetag statt zum verlorenen Tag.", "A partir de cuatro a siete noches Tarifa se vuelve más fácil: planificáis con el viento y no contra él. Si un día sopla demasiado para la playa, os vais al casco antiguo o a Bolonia, y el día de viento se convierte en día de kite en lugar de un día perdido.", "Vanaf vier tot zeven nachten wordt Tarifa makkelijker: dan plan je mét de wind in plaats van ertegen. Is een dag te winderig voor het strand, dan ga je de oude stad in of naar Bolonia — en de winderige dag wordt een kitedag in plaats van een verloren dag.", "Från fyra till sju nätter blir Tarifa enklare: då planerar ni med vinden i stället för mot den. Är en dag för blåsig för stranden går ni in i gamla stan eller ut till Bolonia — och blåsdagen blir en kitedag i stället för en förlorad dag."),
        l("What we like best is fourteen nights. Not because Tarifa has that much to see, but because that is when you stop planning days.", "Am liebsten sind uns vierzehn Tage. Nicht weil Tarifa so viel zu sehen hätte, sondern weil man erst dann aufhört, Tage zu planen.", "Lo que más nos gusta son catorce noches. No porque Tarifa tenga tanto que ver, sino porque es entonces cuando se deja de planificar días.", "Het liefst zien we veertien nachten. Niet omdat Tarifa zoveel te zien heeft, maar omdat je dan ophoudt met dagen plannen.", "Helst ser vi fjorton nätter. Inte för att Tarifa har så mycket att se, utan för att det är då man slutar planera dagar.")
      ]
    }
  ],
  closing: {
    title: l("For us, Tarifa is the most beautiful place on this planet.", "Tarifa ist für uns der schönste Ort auf diesem Planeten.", "Para nosotros, Tarifa es el lugar más bonito de este planeta.", "Voor ons is Tarifa de mooiste plek op deze planeet.", "För oss är Tarifa den vackraste platsen på den här planeten."),
    lead: l("Once you know which days you want to spend here, all that is missing is where you wake up.", "Wenn ihr wisst, welche Tage ihr hier verbringen wollt, fehlt nur noch der Ort, an dem ihr aufwacht.", "Cuando sabéis qué días queréis pasar aquí, solo falta el lugar donde despertar.", "Als jullie weten welke dagen jullie hier willen doorbrengen, ontbreekt alleen nog de plek waar jullie wakker worden.", "När ni vet vilka dagar ni vill tillbringa här återstår bara platsen där ni vaknar."),
    ctaLabel: l("View AMARA Family & Surf", "AMARA Family & Surf ansehen", "Ver AMARA Family & Surf", "Bekijk AMARA Family & Surf", "Visa AMARA Family & Surf"),
    token: "tarifa" as LinkToken,
    secondaryLabel: l("Where to stay in Tarifa", "Wo in Tarifa übernachten?", "Dónde alojarse en Tarifa", "Waar overnachten in Tarifa?", "Var ska man bo i Tarifa?"),
    secondaryToken: "location_tarifa" as LinkToken
  }
};
