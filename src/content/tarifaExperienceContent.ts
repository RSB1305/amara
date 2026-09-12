import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

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
  | 'tarifa_whale_watching'
  | 'tarifa_old_town_history'
  | 'tarifa_bolonia_baelo_claudia'
  | 'tarifa_weather'
  | 'tarifa_winter_stays';

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
  | 'whale-watching'
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
  ogImage: routeOgImage('tarifa.experience'),
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
      l("Tarifa days rarely need much planning. From our apartment in La Marina, walk to Los Lances, wait for the wind or stay by the water, then head into the Old Town for dinner. Bolonia fills a whole day; the Strait brings viewpoints, migrating birds and boat trips when conditions are right. With only two or three nights, the beach, Old Town and one outing are plenty. If you stay longer, leave a day open — the wind often makes the decision for you.", "In Tarifa müsst ihr nicht viel vorausplanen. Von unserer Wohnung in La Marina lauft ihr zu Los Lances, wartet auf Wind oder bleibt einfach am Wasser und geht abends in die Altstadt essen. Bolonia füllt einen ganzen Tag; an der Meerenge kommen Aussichtspunkte, Zugvögel und bei passenden Bedingungen Bootsausflüge dazu. Bei zwei oder drei Nächten reichen Strand, Altstadt und ein Ausflug völlig aus. Wenn ihr länger bleibt, lasst einen Tag frei – oft entscheidet der Wind für euch.", "En Tarifa no hace falta planificar demasiado. Desde nuestro apartamento en La Marina podéis ir andando a Los Lances, esperar el viento o quedaros junto al agua y cenar después en el casco antiguo. Bolonia ocupa un día entero; el Estrecho ofrece miradores, aves migratorias y salidas en barco cuando las condiciones acompañan. Con dos o tres noches bastan la playa, el casco antiguo y una excursión. Si os quedáis más tiempo, dejad un día libre: muchas veces decide el viento.", "In Tarifa hoeven jullie weinig vooruit te plannen. Vanuit ons appartement in La Marina lopen jullie naar Los Lances, wachten op de wind of blijven aan het water en gaan ’s avonds in de oude stad eten. Bolonia vult een hele dag; rond de Straat zijn er uitzichtpunten, trekvogels en boottochten als de omstandigheden goed zijn. Bij twee of drie nachten zijn het strand, de oude stad en één uitstapje genoeg. Blijven jullie langer, laat dan een dag open — vaak beslist de wind.", "I Tarifa behöver ni sällan planera särskilt mycket. Från vår lägenhet i La Marina går ni till Los Lances, väntar på vinden eller stannar vid vattnet och äter sedan middag i gamla stan. Bolonia fyller en hel dag; vid sundet finns utsiktsplatser, flyttfåglar och båtturer när förhållandena är rätt. Under två eller tre nätter räcker stranden, gamla stan och en utflykt. Stannar ni längre kan en dag vara öppen – ofta avgör vinden.")
    ],
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
        id: "whale-watching",
        label: l("Whale watching", "Whale Watching", "Avistamiento de cetáceos", "Walvissen spotten", "Valskådning")
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
      l("Wind and weather decide whether the day leads to the beach, onto the water or into the old town.", "Wind und Wetter entscheiden, ob der Tag an den Strand, aufs Wasser oder in die Altstadt führt.", "El viento y el tiempo deciden si el día lleva a la playa, al agua o al casco antiguo.", "Wind en weer bepalen of de dag naar het strand, het water of de oude stad leidt.", "Vind och väder avgör om dagen leder till stranden, ut på vattnet eller in i gamla stan.")
    ],
    days: [
      {
        title: l("Beaches and coast", "Strand und Küste", "Playas y costa", "Strand en kust", "Strand och kust"),
        text: l("Swim close to town or watch the kites farther west. Which beach works today depends on the wind.", "Nah am Ort baden oder weiter westlich den Kitern zuschauen. Welcher Strand heute passt, hängt vom Wind ab.", "Bañarse cerca del pueblo o ver las cometas más al oeste. Qué playa funciona hoy depende del viento.", "Zwemmen dicht bij het dorp of verderop naar het westen de kites bekijken. Welk strand vandaag werkt, hangt van de wind af.", "Bada nära stan eller se kitesurfarna längre västerut. Vilken strand som passar i dag beror på vinden."),
        token: "tarifa_beaches_authority" as LinkToken,
        linkLabel: l("Which beach for which wind: Los Lances, Playa Chica, Valdevaqueros", "Welcher Strand bei welchem Wind: Los Lances, Playa Chica, Valdevaqueros", "Qué playa con qué viento: Los Lances, Playa Chica, Valdevaqueros", "Welk strand bij welke wind: Los Lances, Playa Chica, Valdevaqueros", "Vilken strand vid vilken vind: Los Lances, Playa Chica, Valdevaqueros")
      },
      {
        title: l("Wind and watersports", "Wind und Wassersport", "Viento y deportes acuáticos", "Wind en watersport", "Vind och vattensport"),
        text: l("Onto the water if that is why you came. Beginners too — through our friends at Tarifa Surf Club, which we arrange before you arrive.", "Aufs Wasser, wenn ihr dafür gekommen seid. Anfänger ebenso – über unsere Freunde vom Tarifa Surf Club, mit denen wir das vor eurer Anreise organisieren.", "Al agua, si habéis venido para eso. También quienes empiezan, con nuestros amigos del Tarifa Surf Club, que organizamos antes de vuestra llegada.", "Het water op, als je daarvoor bent gekomen. Beginners ook — via onze vrienden van Tarifa Surf Club, wat we vóór jullie aankomst regelen.", "Ge er ut på vattnet om det är därför ni kom. Även nybörjare – via våra vänner på Tarifa Surf Club; det ordnar vi före er ankomst."),
        token: "tarifa_kitesurfing_hub" as LinkToken,
        linkLabel: l("Spots, season and courses for beginners", "Spots, Saison und Kurse für Anfänger", "Spots, temporada y cursos para principiantes", "Spots, seizoen en cursussen voor beginners", "Spots, säsong och kurser för nybörjare")
      },
      {
        title: l("Old Town and history", "Altstadt und Geschichte", "Casco antiguo e historia", "Oude stad en geschiedenis", "Gamla stan och historia"),
        text: l("Through the Puerta de Jerez into the walled core, the Castillo as your anchor, and the Strait behind you the whole way.", "Durch die Puerta de Jerez in den ummauerten Kern, das Castillo als Ankerpunkt, und die Meerenge ist dabei immer im Rücken.", "Por la Puerta de Jerez al recinto amurallado, el Castillo como referencia, y el Estrecho siempre a la espalda.", "Door de Puerta de Jerez de ommuurde kern in, het Castillo als ankerpunt, en de Straat de hele tijd in je rug.", "Gå genom Puerta de Jerez in i den muromgärdade stadskärnan, med Castillo som riktpunkt och sundet i ryggen hela vägen."),
        token: "tarifa_old_town_history" as LinkToken,
        linkLabel: l("Puerta de Jerez, Castillo and the walled town on foot", "Puerta de Jerez, Castillo und die Altstadt zu Fuß", "Puerta de Jerez, el Castillo y el casco amurallado a pie", "Puerta de Jerez, Castillo en de ommuurde stad te voet", "Puerta de Jerez, Castillo och den muromgärdade staden till fots")
      },
      {
        title: l("Food and evenings out", "Essen und Ausgehen", "Gastronomía y ambiente nocturno", "Eten en uitgaan", "Mat och kvällsliv"),
        text: l("Red tuna from the Almadraba tradition, then Calle Batalla del Salado and the Old Town streets.", "Roter Thunfisch aus der Almadraba-Tradition, später die Calle Batalla del Salado und die Gassen der Altstadt.", "Atún rojo de la tradición almadrabera y, después, la Calle Batalla del Salado y las calles del casco antiguo.", "Rode tonijn uit de almadraba-traditie, later de Calle Batalla del Salado en de straatjes van de oude stad.", "Röd tonfisk från almadraba-traditionen, följt av Calle Batalla del Salado och gränderna i gamla stan."),
        token: "tarifa_food_evening_life" as LinkToken,
        linkLabel: l("Tuna, tapas and the evenings on Calle Batalla del Salado", "Thunfisch, Tapas und die Abende in der Calle Batalla del Salado", "Atún, tapas y las noches en la Calle Batalla del Salado", "Tonijn, tapas en de avonden in de Calle Batalla del Salado", "Tonfisk, tapas och kvällarna på Calle Batalla del Salado")
      },
      {
        title: l("Whales in the Strait", "Wale in der Meerenge", "Ballenas en el Estrecho", "Walvissen in de Straat", "Valar i sundet"),
        text: l("A whale and dolphin trip from the harbour, kept deliberately flexible around the sea.", "Eine Ausfahrt zu Walen und Delfinen ab Hafen, bewusst flexibel um die See herum.", "Una salida para ver ballenas y delfines desde el puerto, flexible según el mar.", "Een tocht naar walvissen en dolfijnen vanuit de haven, bewust flexibel rond de zee.", "En val- och delfintur från hamnen, medvetet flexibel efter havet."),
        token: "tarifa_whale_watching" as LinkToken,
        linkLabel: l("When trips run, what you see and what to plan for", "Wann die Ausfahrten lohnen und was ihr einplanen solltet", "Cuándo merecen la pena las salidas y qué conviene prever", "Wanneer de tochten lonen en waar je rekening mee houdt", "När turerna lönar sig och vad ni bör planera för")
      },
      {
        title: l("Bolonia and Baelo Claudia", "Bolonia und Baelo Claudia", "Bolonia y Baelo Claudia", "Bolonia en Baelo Claudia", "Bolonia och Baelo Claudia"),
        text: l("Open coast, protected dune and the Roman town of Baelo Claudia — that is a whole day, not a stopover.", "Offene Küste, geschützte Düne und die römische Stadt Baelo Claudia – das ist ein ganzer Tag, kein Zwischenstopp.", "Costa abierta, duna protegida y la ciudad romana de Baelo Claudia: eso es un día entero, no una parada.", "Open kust, beschermd duin en de Romeinse stad Baelo Claudia — dat is een hele dag, geen tussenstop.", "Öppen kust, skyddad dyn och den romerska staden Baelo Claudia – en hel dag, inte ett stopp på vägen."),
        token: "tarifa_bolonia_baelo_claudia" as LinkToken,
        linkLabel: l("Dune, Roman town and the road to Bolonia", "Düne, Römerstadt und der Weg nach Bolonia", "Duna, ciudad romana y el camino a Bolonia", "Duin, Romeinse stad en de weg naar Bolonia", "Dyn, romersk stad och vägen till Bolonia")
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
        ["From the harbour, the fast ferry reaches Tanger-Ville in about an hour; you see the far coast from the beach, and by mid-morning you can be standing on it.", "A day there is medina, kasbah, lunch and the evening ferry back. Booking and entry go through the ferry company; you need a valid passport, an ID card is not enough.", "We treat it as an extra, not a must: Tarifa first, and the far shore when there is a day to spare."],
        ["Vom Hafen aus erreicht die Schnellfähre Tanger-Ville in etwa einer Stunde; die Küste gegenüber seht ihr schon vom Strand, am Vormittag könnt ihr dort stehen.", "Ein Tag dort ist Medina, Kasbah, Mittagessen und die Abendfähre zurück. Buchung und Einreise laufen über die Reederei; ihr braucht einen gültigen Reisepass, der Personalausweis reicht nicht.", "Wir sehen es als Zugabe, nicht als Pflicht: erst Tarifa, und die andere Seite, wenn ein Tag übrig ist."],
        ["Desde el puerto, el ferry rápido llega a Tánger Ville en alrededor de una hora; la costa de enfrente se ve desde la playa y a media mañana podéis estar allí.", "Un día allí es medina, kasbah, almuerzo y el ferry de vuelta por la tarde. La reserva y la entrada se gestionan con la naviera; hace falta pasaporte en vigor, el DNI no basta.", "Lo vemos como un extra, no como una obligación: primero Tarifa y, si sobra un día, la otra orilla."],
        ["Vanaf de haven bereikt de snelle veerboot Tanger-Ville in ongeveer een uur; de overkant zie je al vanaf het strand en halverwege de ochtend kun je er staan.", "Een dag daar is medina, kasba, lunch en de avondboot terug. Boeken en inreis lopen via de rederij; je hebt een geldig paspoort nodig, een identiteitskaart volstaat niet.", "Wij zien het als een extra, niet als een must: eerst Tarifa, en de overkant als er een dag over is."],
        ["Från hamnen når snabbfärjan Tanger-Ville på ungefär en timme; kusten mittemot ser ni redan från stranden och vid förmiddagen kan ni stå där.", "En dag där är medina, kasbah, lunch och kvällsfärjan tillbaka. Bokning och inresa sker via rederiet; ni behöver giltigt pass, id-kort räcker inte.", "Vi ser det som ett tillägg, inte ett måste: först Tarifa, och andra sidan när en dag blir över."]
      )
    },
    {
      id: "stay-length",
      title: l("Two nights is a different thing from two weeks", "Zwei Nächte sind etwas anderes als zwei Wochen", "Dos noches no son lo mismo que dos semanas", "Twee nachten is iets anders dan twee weken", "Två nätter är något annat än två veckor"),
      paragraphs: [
        l("With two or three nights we would not even try to fit everything in. Coast, Old Town and one signature experience are enough.", "Bei zwei oder drei Nächten würden wir gar nicht erst versuchen, alles unterzubringen. Küste, Altstadt und ein besonderes Erlebnis reichen.", "Con dos o tres noches ni siquiera intentaríamos encajarlo todo. Costa, casco antiguo y una experiencia principal bastan.", "Met twee of drie nachten zouden we niet eens proberen alles erin te proppen. Kust, oude stad en één bijzondere ervaring zijn genoeg.", "Med två eller tre nätter skulle vi inte ens försöka få med allt. Kust, gamla stan och en större upplevelse räcker."),
        l("From four to seven nights Tarifa gets easier: you plan with the wind instead of against it. If a day is too windy for the beach, you go into the Old Town or out to Bolonia — and the windy day becomes a kite day rather than a lost one.", "Ab vier bis sieben Nächten wird Tarifa entspannter: Dann plant ihr mit dem Wind statt gegen ihn. Ist ein Tag zu windig für den Strand, geht ihr in die Altstadt oder nach Bolonia – und der Windtag wird zum Kitetag statt zum verlorenen Tag.", "A partir de cuatro a siete noches Tarifa se vuelve más fácil: planificáis con el viento y no contra él. Si un día sopla demasiado para la playa, os vais al casco antiguo o a Bolonia, y el día de viento se convierte en día de kite en lugar de un día perdido.", "Vanaf vier tot zeven nachten wordt Tarifa makkelijker: dan plan je mét de wind in plaats van ertegen. Is een dag te winderig voor het strand, dan ga je de oude stad in of naar Bolonia — en de winderige dag wordt een kitedag in plaats van een verloren dag.", "Från fyra till sju nätter blir Tarifa enklare: då planerar ni med vinden i stället för mot den. Är en dag för blåsig för stranden går ni in i gamla stan eller ut till Bolonia — och blåsdagen blir en kitedag i stället för en förlorad dag."),
        l("What we like best is fourteen nights: that is when you stop planning days and simply take what wind and weather offer.", "Am liebsten sind uns vierzehn Tage: Dann hört man auf, Tage zu planen, und nimmt, was Wind und Wetter anbieten.", "Lo que más nos gusta son catorce noches: es cuando se deja de planificar días y se toma lo que ofrecen el viento y el tiempo.", "Het liefst zien we veertien nachten: dan houd je op met dagen plannen en neem je wat wind en weer bieden.", "Helst ser vi fjorton nätter: då slutar man planera dagar och tar det som vind och väder bjuder.")
      ]
    },
    {
      id: "seasons",
      title: l("Summer, autumn and winter are three different Tarifas", "Sommer, Herbst und Winter sind drei verschiedene Tarifas", "Verano, otoño e invierno son tres Tarifas distintos", "Zomer, herfst en winter zijn drie verschillende Tarifa's", "Sommar, höst och vinter är tre olika Tarifa"),
      paragraphs: [
        l("In summer Tarifa is full: Levante days with a strong easterly, Valdevaqueros crowded with kites, the old town busy until late. Swimmers pick the beach by the wind; kiters have their programme.", "Im Sommer ist Tarifa voll: Levante-Tage mit kräftigem Ostwind, Valdevaqueros voller Kites, die Altstadt bis spät belebt. Wer baden will, wählt den Strand nach Wind; wer kiten will, hat Programm.", "En verano Tarifa está lleno: días de levante con viento fuerte del este, Valdevaqueros repleto de cometas, el casco antiguo animado hasta tarde. Quien quiere bañarse elige la playa según el viento; quien quiere hacer kite, tiene programa.", "In de zomer is Tarifa vol: Levante-dagen met een krachtige oostenwind, Valdevaqueros vol kites, de oude stad druk tot laat. Wie wil zwemmen kiest het strand op de wind; wie wil kiten heeft programma.", "På sommaren är Tarifa fullt: Levante-dagar med kraftig ostlig vind, Valdevaqueros fullt av kitar, gamla stan livlig till sent. Den som vill bada väljer strand efter vinden; den som vill kita har program."),
        l("September and October are our favourite months: the sea still warm, fewer people, the wind still there, and the migrating birds crossing the Strait. Spring gives the same picture with cooler water.", "September und Oktober sind für uns die besten Monate: das Meer noch warm, weniger Leute, der Wind bleibt, und die Zugvögel ziehen über die Meerenge. Im Frühjahr dasselbe Bild mit kühlerem Wasser.", "Septiembre y octubre son para nosotros los mejores meses: el mar todavía cálido, menos gente, el viento sigue ahí y las aves migratorias cruzan el Estrecho. La primavera repite la imagen con el agua más fría.", "September en oktober zijn voor ons de beste maanden: de zee nog warm, minder mensen, de wind blijft, en de trekvogels steken de Straat over. Het voorjaar geeft hetzelfde beeld met koeler water.", "September och oktober är våra bästa månader: havet fortfarande varmt, färre människor, vinden kvar, och flyttfåglarna korsar sundet. Våren ger samma bild med svalare vatten."),
        l("In winter the days sit around 15 degrees with Poniente fronts and rain in between; the kite camps run, the town is quiet and stays awake, and the apartment has a fireplace and heating.", "Im Winter liegen die Tageswerte um 15 Grad, dazwischen Poniente-Fronten mit Regen; die Kitecamps laufen, der Ort ist ruhig und bleibt wach, und die Wohnung hat Kamin und Heizung.", "En invierno los días rondan los 15 grados, con frentes de poniente y lluvia entre medias; los campamentos de kite siguen, el pueblo está tranquilo pero despierto, y el apartamento tiene chimenea y calefacción.", "In de winter liggen de dagwaarden rond 15 graden, met Poniente-fronten en regen ertussen; de kitekampen draaien, het dorp is rustig en blijft wakker, en het appartement heeft een open haard en verwarming.", "På vintern ligger dagstemperaturen runt 15 grader, med Poniente-fronter och regn däremellan; kitelägren pågår, staden är lugn men vaken, och lägenheten har öppen spis och värme.")
      ],
      cta: {
        label: l("Monthly values for wind, rain and temperature", "Monatswerte für Wind, Regen und Temperaturen", "Valores mensuales de viento, lluvia y temperatura", "Maandwaarden voor wind, regen en temperatuur", "Månadsvärden för vind, regn och temperatur"),
        token: "tarifa_weather" as TarifaExperienceLinkToken
      }
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
