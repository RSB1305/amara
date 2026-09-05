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
  | 'tarifa_where_to_stay'
  | 'tarifa'
  | 'tarifa_beaches_authority'
  | 'tarifa_wind_kitesurfing_authority'
  | 'tarifa_kitesurfing_hub'
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
  /** Alt texts and captions of the hub photography (Tarifa art direction). */
  media: {
    panoramaAlt: string;
    panoramaCaption: string;
    oldTownAlt: string;
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
    title: l("Beach, wind and long evenings in Tarifa", "Strand, Wind und lange Abende in Tarifa", "Playa, viento y noches largas en Tarifa", "Strand, wind en lange avonden in Tarifa", "Strand, vind och långa kvällar i Tarifa"),
    lead: [
      l("Tarifa days rarely need much planning. From AMARA Family & Surf, walk to Los Lances, wait for the wind or stay by the water, then head into the Old Town for dinner. Bolonia fills a whole day; the Strait brings viewpoints, migrating birds and boat trips when conditions are right. With only two or three nights, the beach, Old Town and one outing are plenty. If you stay longer, leave a day open — the wind often makes the decision for you.", "In Tarifa müsst ihr nicht viel vorausplanen. Von AMARA Family & Surf lauft ihr zu Los Lances, wartet auf Wind oder bleibt einfach am Wasser und geht abends in die Altstadt essen. Bolonia füllt einen ganzen Tag; an der Meerenge kommen Aussichtspunkte, Zugvögel und bei passenden Bedingungen Bootsausflüge dazu. Bei zwei oder drei Nächten reichen Strand, Altstadt und ein Ausflug völlig aus. Wenn ihr länger bleibt, lasst einen Tag frei – oft entscheidet der Wind für euch.", "En Tarifa no hace falta planificar demasiado. Desde AMARA Family & Surf podéis ir andando a Los Lances, esperar el viento o quedaros junto al agua y cenar después en el casco antiguo. Bolonia ocupa un día entero; el Estrecho ofrece miradores, aves migratorias y salidas en barco cuando las condiciones acompañan. Con dos o tres noches bastan la playa, el casco antiguo y una excursión. Si os quedáis más tiempo, dejad un día libre: muchas veces decide el viento.", "In Tarifa hoeven jullie weinig vooruit te plannen. Vanuit AMARA Family & Surf lopen jullie naar Los Lances, wachten op de wind of blijven aan het water en gaan ’s avonds in de oude stad eten. Bolonia vult een hele dag; rond de Straat zijn er uitzichtpunten, trekvogels en boottochten als de omstandigheden goed zijn. Bij twee of drie nachten zijn het strand, de oude stad en één uitstapje genoeg. Blijven jullie langer, laat dan een dag open — vaak beslist de wind.", "I Tarifa behöver ni sällan planera särskilt mycket. Från AMARA Family & Surf går ni till Los Lances, väntar på vinden eller stannar vid vattnet och äter sedan middag i gamla stan. Bolonia fyller en hel dag; vid sundet finns utsiktsplatser, flyttfåglar och båtturer när förhållandena är rätt. Under två eller tre nätter räcker stranden, gamla stan och en utflykt. Stannar ni längre kan en dag vara öppen – ofta avgör vinden.")
    ],
    imageAlt: l("Two friends with a board under a palm tree at Los Lances beach, Tarifa", "Zwei Freunde mit Board unter einer Palme am Strand von Los Lances, Tarifa", "Dos amigos con una tabla bajo una palmera en la playa de Los Lances, Tarifa", "Twee vrienden met een board onder een palmboom op het strand van Los Lances, Tarifa", "Två vänner med en bräda under en palm på stranden Los Lances, Tarifa")
  },
  media: {
    panoramaAlt: l("Yellow kite over the beach at Los Lances, Tarifa", "Gelber Kite über dem Strand von Los Lances, Tarifa", "Cometa amarilla sobre la playa de Los Lances, Tarifa", "Gele kite boven het strand van Los Lances, Tarifa", "Gul kite över stranden Los Lances, Tarifa"),
    panoramaCaption: l("Los Lances in the afternoon, when the wind arrives.", "Los Lances am Nachmittag, wenn der Wind kommt.", "Los Lances por la tarde, cuando llega el viento.", "Los Lances in de middag, als de wind komt.", "Los Lances på eftermiddagen, när vinden kommer."),
    oldTownAlt: l("Skater at the old town wall of Tarifa", "Skater an der alten Stadtmauer von Tarifa", "Patinador junto a la muralla del casco antiguo de Tarifa", "Skater bij de oude stadsmuur van Tarifa", "Skateåkare vid Tarifas gamla stadsmur")
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
        label: l("Kitesurfing", "Kitesurfen", "Kitesurf", "Kitesurfen", "Kitesurfing")
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
    title: l("What works today", "Was heute gut passt", "Lo que apetece hoy", "Wat vandaag goed uitkomt", "Det som passar i dag"),
    intro: [
      l("Wind and weather often decide whether the day belongs to the beach, the water or the Old Town. Check current conditions before watersports, boat trips and exposed walks.", "Wind und Wetter bestimmen oft mit, ob der Tag eher an den Strand, aufs Wasser oder in die Altstadt führt. Vor Wassersport, Bootsausflügen und offenen Wegen prüft bitte die aktuellen Bedingungen.", "El viento y el tiempo suelen decidir si el día acaba en la playa, en el agua o en el casco antiguo. Antes de practicar deportes acuáticos, salir en barco o caminar por zonas expuestas, comprobad las condiciones actuales.", "Wind en weer bepalen vaak of de dag naar het strand, het water of de oude stad leidt. Controleer de actuele omstandigheden vóór watersport, boottochten en open wandelroutes.", "Vind och väder avgör ofta om dagen blir på stranden, på vattnet eller i gamla stan. Kontrollera aktuella förhållanden före vattensport, båtturer och exponerade vandringar.")
    ],
    days: [
      {
        title: l("Beaches and coast", "Strand und Küste", "Playas y costa", "Strand en kust", "Strand och kust"),
        text: l("Swim close to town or watch the kites farther west. Which beach works today depends on the wind.", "Nah am Ort baden oder weiter westlich den Kitern zuschauen. Welcher Strand heute passt, hängt vom Wind ab.", "Bañarse cerca del pueblo o ver las cometas más al oeste. Qué playa funciona hoy depende del viento.", "Zwemmen dicht bij het dorp of verderop naar het westen de kites bekijken. Welk strand vandaag werkt, hangt van de wind af.", "Bada nära stan eller se kitesurfarna längre västerut. Vilken strand som passar i dag beror på vinden."),
        token: "tarifa_beaches_authority" as LinkToken,
        linkLabel: l("Tarifa’s beaches", "Tarifas Strände", "Las playas de Tarifa", "De stranden van Tarifa", "Tarifas stränder")
      },
      {
        title: l("Wind and watersports", "Wind und Wassersport", "Viento y deportes acuáticos", "Wind en watersport", "Vind och vattensport"),
        text: l("Onto the water if that is why you came. Beginners too — through our friends at Tarifa Surf Club, which we arrange before you arrive.", "Aufs Wasser, wenn ihr dafür gekommen seid. Anfänger ebenso – über unsere Freunde vom Tarifa Surf Club, mit denen wir das vor eurer Anreise organisieren.", "Al agua, si habéis venido para eso. También quienes empiezan, con nuestros amigos del Tarifa Surf Club, que organizamos antes de vuestra llegada.", "Het water op, als je daarvoor bent gekomen. Beginners ook — via onze vrienden van Tarifa Surf Club, wat we vóór jullie aankomst regelen.", "Ge er ut på vattnet om det är därför ni kom. Även nybörjare – via våra vänner på Tarifa Surf Club; det ordnar vi före er ankomst."),
        token: "tarifa_kitesurfing_hub" as LinkToken,
        linkLabel: l("Wind & kitesurfing", "Wind & Kitesurfen", "Viento y kitesurf", "Wind & kitesurfen", "Vind & kitesurfing")
      },
      {
        title: l("Old Town and history", "Altstadt und Geschichte", "Casco antiguo e historia", "Oude stad en geschiedenis", "Gamla stan och historia"),
        text: l("Through the Puerta de Jerez into the walled core, the Castillo as your anchor, and the Strait behind you the whole way.", "Durch die Puerta de Jerez in den ummauerten Kern, das Castillo als Ankerpunkt, und die Meerenge ist dabei immer im Rücken.", "Por la Puerta de Jerez al recinto amurallado, el Castillo como referencia, y el Estrecho siempre a la espalda.", "Door de Puerta de Jerez de ommuurde kern in, het Castillo als ankerpunt, en de Straat de hele tijd in je rug.", "Gå genom Puerta de Jerez in i den muromgärdade stadskärnan, med Castillo som riktpunkt och sundet i ryggen hela vägen."),
        token: "tarifa_old_town_history" as LinkToken,
        linkLabel: l("Old Town & history", "Altstadt & Geschichte", "Casco antiguo e historia", "Oude stad & geschiedenis", "Gamla stan & historia")
      },
      {
        title: l("Food and evenings out", "Essen und Ausgehen", "Gastronomía y ambiente nocturno", "Eten en uitgaan", "Mat och kvällsliv"),
        text: l("Red tuna from the Almadraba tradition, then Calle Batalla del Salado and the Old Town streets.", "Roter Thunfisch aus der Almadraba-Tradition, später die Calle Batalla del Salado und die Gassen der Altstadt.", "Atún rojo de la tradición almadrabera y, después, la Calle Batalla del Salado y las calles del casco antiguo.", "Rode tonijn uit de almadraba-traditie, later de Calle Batalla del Salado en de straatjes van de oude stad.", "Röd tonfisk från almadraba-traditionen, följt av Calle Batalla del Salado och gränderna i gamla stan."),
        token: "tarifa_food_evening_life" as LinkToken,
        linkLabel: l("Food & evening life", "Essen & Ausgehen", "Comer y salir", "Eten & uitgaan", "Mat & kvällsliv")
      },
      {
        title: l("Nature around the Strait", "Natur an der Meerenge", "Naturaleza en el Estrecho", "Natuur rond de Straat", "Natur vid sundet"),
        text: l("Viewpoints looking across to Africa, the bird migration corridor, or a whale and dolphin trip — that one stays deliberately flexible.", "Aussichtspunkte mit Blick nach Afrika, der Zugvogelkorridor, oder eine Ausfahrt zu Walen und Delfinen – die bleibt bewusst flexibel.", "Miradores hacia África, el corredor migratorio de aves o una salida para ver ballenas y delfines: esa conviene dejarla flexible.", "Uitzichtpunten richting Afrika, de vogeltrekcorridor, of een tocht naar walvissen en dolfijnen — die houden we bewust flexibel.", "Välj en utsiktsplats, följ flyttfåglarnas stråk eller håll möjligheten till en val- och delfintur öppen."),
        token: "tarifa_nature_wildlife" as LinkToken,
        linkLabel: l("Nature & wildlife", "Natur & Tierwelt", "Naturaleza y fauna", "Natuur & dierenwereld", "Natur & djurliv")
      },
      {
        title: l("Bolonia and Baelo Claudia", "Bolonia und Baelo Claudia", "Bolonia y Baelo Claudia", "Bolonia en Baelo Claudia", "Bolonia och Baelo Claudia"),
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
    title: l("Tarifa starts just outside AMARA Family & Surf", "Bei AMARA Family & Surf beginnt Tarifa vor der Haustür", "Tarifa empieza a la puerta de AMARA Family & Surf", "Tarifa begint voor de deur van AMARA Family & Surf", "Tarifa börjar utanför dörren till AMARA Family & Surf"),
    lead: l("AMARA Family & Surf is in La Marina, around 500 metres from Los Lances and about a 10–15 minute walk from the Old Town. The reserved underground parking also makes days out by car straightforward.", "AMARA Family & Surf liegt in La Marina, rund 500 Meter von Los Lances und etwa 10–15 Minuten zu Fuß von der Altstadt entfernt. Der reservierte Tiefgaragenplatz macht Ausflüge mit dem Auto unkompliziert.", "AMARA Family & Surf está en La Marina, a unos 500 metros de Los Lances y a unos 10–15 minutos a pie del casco antiguo. La plaza reservada en el garaje facilita también las excursiones en coche.", "AMARA Family & Surf ligt in La Marina, op ongeveer 500 meter van Los Lances en circa 10–15 minuten lopen van de oude stad. De gereserveerde garageplaats maakt uitstapjes met de auto ook eenvoudig.", "AMARA Family & Surf ligger i La Marina, cirka 500 meter från Los Lances och omkring 10–15 minuters promenad från gamla stan. Den reserverade garageplatsen gör även utflykter med bil enkla."),
    ctaLabel: l("View AMARA Family & Surf", "AMARA Family & Surf ansehen", "Ver AMARA Family & Surf", "Bekijk AMARA Family & Surf", "Visa AMARA Family & Surf"),
    token: "tarifa" as LinkToken,
    secondaryLabel: l("Where to stay in Tarifa", "Wo in Tarifa übernachten?", "Dónde alojarse en Tarifa", "Waar overnachten in Tarifa?", "Var ska man bo i Tarifa?"),
    secondaryToken: "tarifa_where_to_stay" as LinkToken
  }
};
