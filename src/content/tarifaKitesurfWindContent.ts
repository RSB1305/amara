import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });
const ll = (en: string[], de: string[], es: string[], nl: string[], sv: string[]): LocalizedTextList => ({ en, de, es, nl, sv });

/** A quoted voice on the page: a named person speaking in the first person, never AMARA's own rule. */
export interface TarifaKitesurfVoiceQuote {
  id: string;
  lead: LocalizedText;
  paragraphs: LocalizedTextList;
}

/**
 * Head of a chapter. The page reads as the morning of a kiter in Tarifa, in
 * the order it happens: the label is a topic eyebrow, the title the short
 * scannable H2, the subtitle carries the sentence that used to be the heading.
 */
export interface TarifaKitesurfChapterHead {
  label: LocalizedText;
  title: LocalizedText;
  subtitle: LocalizedText;
}

export interface TarifaKitesurfWindContent {
  token: LinkToken;
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    lead: LocalizedText;
    imageAlt: LocalizedText;
    updated: LocalizedText;
    note: LocalizedText;
    /** Accessible name of the Windguru sticker on the hero photograph; it links to the table below. */
    stickerLabel: LocalizedText;
  };
  /** In-page anchor row under the hero: one entry per chapter. */
  toc: {
    label: LocalizedText;
    items: Array<{ id: string; label: LocalizedText }>;
  };
  today: TarifaKitesurfChapterHead & {
    windguru: { eyebrow: LocalizedText; title: LocalizedText; text: LocalizedText; linkLabel: LocalizedText; linkHref: string };
    official: { title: LocalizedText; text: LocalizedText; href: string; linkLabel: LocalizedText; briefingText: LocalizedText };
    forecast: {
      loading: LocalizedText;
      today: LocalizedText;
      tomorrow: LocalizedText;
      high: LocalizedText;
      low: LocalizedText;
      rain: LocalizedText;
      issued: LocalizedText;
      unavailableTitle: LocalizedText;
      unavailableText: LocalizedText;
      aemetLabel: LocalizedText;
    };
  };
  wind: TarifaKitesurfChapterHead & {
    intro: LocalizedText;
    recognizeTitle: LocalizedText;
    robert: { name: string; role: LocalizedText; imageAlt: LocalizedText };
    robertMorning: LocalizedTextList;
    mark: { name: string; role: LocalizedText };
    markReading: TarifaKitesurfVoiceQuote;
    experienceTitle: LocalizedText;
    robertExperience: LocalizedTextList;
    bridge: { label: LocalizedText; text: LocalizedText; links: Array<{ id: string; anchor: string; label: LocalizedText }> };
  };
  /**
   * The Windguru teaching chapter: an example table in Windguru's own row
   * order (two typical days, a Levante and a Poniente), the rows explained
   * under the same numbers, two reading examples, the models and Beaufort.
   */
  table: TarifaKitesurfChapterHead & {
    intro: LocalizedText;
    example: {
      label: LocalizedText;
      note: LocalizedText;
      linkLabel: LocalizedText;
      linkHref: string;
      hourRowLabel: LocalizedText;
      hourLabel: LocalizedText;
      days: Array<{ id: 'levante' | 'poniente'; label: LocalizedText }>;
      colorNote: LocalizedText;
    };
    rows: Array<{ id: string; number: string; title: LocalizedText; text: LocalizedText }>;
    waveNote: { title: LocalizedText; text: LocalizedText };
    examples: Array<{ id: string; label: LocalizedText; value: LocalizedText; text: LocalizedText }>;
    modelsTitle: LocalizedText;
    modelsIntro: LocalizedText;
    models: Array<{ id: string; name: string; text: LocalizedText }>;
    modelsWhy: LocalizedText;
    beaufort: {
      title: LocalizedText;
      intro: LocalizedText;
      columnKnots: LocalizedText;
      columnForce: LocalizedText;
      columnName: LocalizedText;
      columnSea: LocalizedText;
      rows: Array<{ id: string; knots: string; force: string; name: LocalizedText; sea: LocalizedText }>;
      note: LocalizedText;
      warningNote: LocalizedText;
    };
  };
  thermal: TarifaKitesurfChapterHead & {
    intro: LocalizedText;
    panels: Array<{ id: 'morning' | 'afternoon' | 'evening'; label: LocalizedText; title: LocalizedText; text: LocalizedText; sea: LocalizedText; land: LocalizedText; note: LocalizedText }>;
    consequences: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    bridge: { label: LocalizedText; text: LocalizedText };
  };
  /** What the tidal current in the Strait does to the wind a rider feels. */
  tides: TarifaKitesurfChapterHead & {
    intro: LocalizedText;
    cards: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    note: LocalizedText;
  };
  beach: TarifaKitesurfChapterHead & {
    intro: LocalizedText;
    whichBeachTitle: LocalizedText;
    markFirstLevante: TarifaKitesurfVoiceQuote;
    spotLink: { before: LocalizedText; token: LinkToken; label: LocalizedText; after: LocalizedText };
    zonesTitle: LocalizedText;
    zonesText: LocalizedText;
    priority: LocalizedText;
    beaches: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    /** Chain link to the rescue page: the condition, the consequence and the numbers stay on this page. */
    rescueBridge: { label: LocalizedText; text: LocalizedText; linkLabel: LocalizedText; token: LinkToken };
  };
  partner: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    intro: LocalizedText;
    benefits: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    voice: { name: string; role: LocalizedText; quote: TarifaKitesurfVoiceQuote };
    partnerHref: string;
    partnerLabel: LocalizedText;
    contactLabel: LocalizedText;
    contactMessage: LocalizedText;
  };
  related: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    links: Array<{ id: string; token: LinkToken; title: LocalizedText; text: LocalizedText }>;
  };
  closing: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
    stayLabel: LocalizedText;
    availabilityLabel: LocalizedText;
    finalLine: LocalizedText;
  };
}

const title = l(
  'Wind & safety when kitesurfing in Tarifa | AMARA',
  'Wind & Sicherheit beim Kitesurfen in Tarifa | AMARA',
  'Viento y seguridad para el kitesurf en Tarifa | AMARA',
  'Wind & veiligheid bij het kitesurfen in Tarifa | AMARA',
  'Vind & säkerhet vid kitesurfing i Tarifa | AMARA'
);

const description = l('The wind forecast for Tarifa in one place: today’s live AEMET values, the Windguru table explained field by field, Levante and Poniente at Los Lances, the beach zones and the emergency channels. From AMARA, with Mark of Tarifa Surf Club.', 'Die Wind-Vorhersage für Tarifa an einem Ort: die aktuellen AEMET-Werte für heute, die Windguru-Tabelle Feld für Feld erklärt, Levante und Poniente an Los Lances, die Zonen am Strand und die Notrufwege. Von AMARA, mit Mark vom Tarifa Surf Club.', 'La previsión de viento de Tarifa en un solo lugar: los valores de AEMET de hoy, la tabla de Windguru explicada campo por campo, levante y poniente en Los Lances, las zonas de la playa y las vías de emergencia. De AMARA, con Mark del Tarifa Surf Club.', 'De windvoorspelling voor Tarifa op één plek: de actuele AEMET-waarden van vandaag, de Windguru-tabel veld voor veld uitgelegd, levante en poniente bij Los Lances, de strandzones en de noodkanalen. Van AMARA, met Mark van Tarifa Surf Club.', 'Vindprognosen för Tarifa på ett ställe: dagens AEMET-värden, Windguru-tabellen förklarad fält för fält, levante och poniente vid Los Lances, strandzonerna och nödvägarna. Från AMARA, med Mark från Tarifa Surf Club.');

export const tarifaKitesurfWindSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-tarifa-wind-kitesurfing-v5.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('tarifa.kitesurfing.wind'),
  article: {
    datePublished: '2026-09-03',
    dateModified: '2026-09-11',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: { title: title.en, description: description.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: title.de, description: description.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: title.es, description: description.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: title.nl, description: description.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: title.sv, description: description.sv, robots: 'index, follow', canonical: 'auto' }
  }
};

const robertRole = l('Host at AMARA', 'Gastgeber bei AMARA', 'Anfitrión de AMARA', 'Host bij AMARA', 'Värd på AMARA');
const markRole = l('Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club');
const aemetHref = 'https://www.aemet.es/es/eltiempo/prediccion/municipios/tarifa-id11035';
const aemetLabel = l('Open official AEMET forecast and warnings', 'Warnungen bei AEMET', 'Abrir previsión y avisos oficiales de AEMET', 'Open de officiële AEMET-verwachting en waarschuwingen', 'Öppna AEMET:s officiella prognos och varningar');
const windguruHref = 'https://www.windguru.cz/976270';

export const tarifaKitesurfWindContent: TarifaKitesurfWindContent = {
  token: 'tarifa_wind_kitesurfing_authority',
  hero: {
    eyebrow: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'),
    title: l('Wind, weather and safety', 'Wind, Wetter und Sicherheit', 'Viento, tiempo y seguridad', 'Wind, weer en veiligheid', 'Vind, väder och säkerhet'),
    subtitle: l('Levante, Poniente, and the table everyone here checks in the morning', 'Levante, Poniente, und die Tabelle, auf die hier morgens alle schauen', 'Levante, poniente y la tabla que todos miran aquí por la mañana', 'Levante, poniente, en de tabel waar hier ’s ochtends iedereen naar kijkt', 'Levante, poniente och tabellen alla här tittar på om morgonen'),
    lead: l('In Tarifa nobody asks in the morning whether the wind will come, only which one. This page walks through the morning with you in the order it happens here: the Windguru table and the official warning, then which of the two winds is blowing and where you launch in it. None of it clears a session: **official AEMET warnings come first**, and you make the decision on the beach.', 'In Tarifa fragt morgens niemand, ob Wind kommt, sondern welcher. Diese Seite geht den Morgen mit euch durch, in der Reihenfolge, in der er hier abläuft: die Windguru-Tabelle und die amtliche Warnung, dann die Frage, welcher der zwei Winde steht und wo ihr damit rausgeht. Nichts davon gibt eine Session frei: **Amtliche AEMET-Warnungen gehen vor**, und die Entscheidung trefft ihr am Strand.', 'En Tarifa nadie pregunta por la mañana si habrá viento, sino cuál. Esta página recorre la mañana con vosotros en el orden en que ocurre aquí: la tabla de Windguru y el aviso oficial, después cuál de los dos vientos sopla y dónde salís con él. Nada de esto da luz verde a una sesión: **los avisos oficiales de AEMET van por delante**, y la decisión la tomáis en la playa.', 'In Tarifa vraagt ’s ochtends niemand óf er wind komt, alleen welke. Deze pagina loopt de ochtend met jullie door in de volgorde waarin hij hier verloopt: de Windguru-tabel en de officiële waarschuwing, dan de vraag welke van de twee winden staat en waar jullie daarmee het water op gaan. Niets daarvan geeft een sessie vrij: **officiële AEMET-waarschuwingen gaan voor**, en de beslissing nemen jullie op het strand.', 'I Tarifa frågar ingen på morgonen om det blir vind, bara vilken. Den här sidan går igenom morgonen med er i den ordning den sker här: Windguru-tabellen och den officiella varningen, sedan frågan vilken av de två vindarna som blåser och var ni går ut i den. Inget av det ger grönt ljus för ett pass: **officiella AEMET-varningar går först**, och beslutet fattar ni på stranden.'),
    imageAlt: l('The Tarifa Surf Club team with the club flag on the beach', 'Das Team des Tarifa Surf Club mit der Vereinsflagge am Strand', 'El equipo de Tarifa Surf Club con la bandera del club en la playa', 'Het team van Tarifa Surf Club met de clubvlag op het strand', 'Tarifa Surf Clubs team med klubbflaggan på stranden'),
    updated: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026'),
    note: l('We live and kite here ourselves.', 'Wir wohnen und kiten hier selbst.', 'Vivimos y hacemos kite aquí.', 'We wonen en kiten hier zelf.', 'Vi bor och kitar här själva.'),
    stickerLabel: l('To the Windguru table for today', 'Zur Windguru-Tabelle für heute', 'A la tabla de Windguru de hoy', 'Naar de Windguru-tabel van vandaag', 'Till Windguru-tabellen för i dag')
  },
  toc: {
    label: l('On this page', 'Auf dieser Seite', 'En esta página', 'Op deze pagina', 'På den här sidan'),
    items: [
      { id: 'heute', label: l('Today', 'Heute', 'Hoy', 'Vandaag', 'I dag') },
      { id: 'tabelle', label: l('Reading the table', 'Die Tabelle lesen', 'Leer la tabla', 'De tabel lezen', 'Läsa tabellen') },
      { id: 'welcher-wind', label: l('Which wind', 'Welcher Wind', 'Qué viento', 'Welke wind', 'Vilken vind') },
      { id: 'thermik', label: l('Thermal wind', 'Thermik', 'Térmica', 'Thermiek', 'Termik') },
      { id: 'gezeiten', label: l('Tides and wind', 'Gezeiten und Wind', 'Mareas y viento', 'Getij en wind', 'Tidvatten och vind') },
      { id: 'wo-raus', label: l('Where to launch', 'Wo raus', 'Dónde salir', 'Waar het water op', 'Var man går ut') }
    ]
  },
  today: {
    label: l('Today in Tarifa', 'Heute in Tarifa', 'Hoy en Tarifa', 'Vandaag in Tarifa', 'I dag i Tarifa'),
    title: l('Today', 'Heute', 'Hoy', 'Vandaag', 'I dag'),
    subtitle: l('The table everyone checks, and the official warning status', 'Die Tabelle, auf die alle schauen, und der amtliche Warnstatus', 'La tabla que mira todo el mundo y el estado oficial de avisos', 'De tabel waar iedereen naar kijkt, en de officiële waarschuwingsstatus', 'Tabellen alla tittar på, och den officiella varningsstatusen'),
    windguru: {
      eyebrow: l('Windguru · Tarifa', 'Windguru · Tarifa', 'Windguru · Tarifa', 'Windguru · Tarifa', 'Windguru · Tarifa'),
      title: l('The table everyone here checks in the morning, live at Windguru', 'Die Tabelle, auf die hier morgens alle schauen, live bei Windguru', 'La tabla que todos miran aquí por la mañana, en directo en Windguru', 'De tabel waar hier ’s ochtends iedereen naar kijkt, live bij Windguru', 'Tabellen alla här tittar på om morgonen, live hos Windguru'),
      text: l('Two models: GFS 13 km for the trend over the next days, **WRF 3 km for the local day**. How to read the rows is directly below, on an example day.', 'Zwei Modelle: GFS 13 km für den Trend der nächsten Tage, **WRF 3 km für den lokalen Tag**. Wie ihr die Zeilen lest, steht direkt darunter, an einem Beispieltag.', 'Dos modelos: GFS 13 km para la tendencia de los próximos días, **WRF 3 km para el día local**. Cómo leer las filas está justo debajo, con un día de ejemplo.', 'Twee modellen: GFS 13 km voor de trend van de komende dagen, **WRF 3 km voor de lokale dag**. Hoe jullie de rijen lezen, staat direct hieronder, aan de hand van een voorbeelddag.', 'Två modeller: GFS 13 km för trenden de närmaste dagarna, **WRF 3 km för den lokala dagen**. Hur ni läser raderna står direkt nedanför, på en exempeldag.'),
      linkLabel: l('Open Windguru Tarifa', 'Windguru Tarifa öffnen', 'Abrir Windguru Tarifa', 'Open Windguru Tarifa', 'Öppna Windguru Tarifa'),
      linkHref: windguruHref
    },
    official: {
      title: l('What the Spanish weather service reports for today', 'Was die spanische Wetterbehörde für heute meldet', 'Qué dice hoy la agencia meteorológica española', 'Wat de Spaanse weerdienst voor vandaag meldt', 'Vad den spanska vädertjänsten rapporterar för i dag'),
      text: l('Official AEMET warnings **take precedence over any model calculation**. We do not summarise them and we do not weigh them against other models. The Estrecho warning zone (611104) has been checked against AEMET’s official zone register; the block above shows AEMET’s wording, and whenever it fails the link leads straight to AEMET.', 'Amtliche AEMET-Warnungen haben **Vorrang vor jeder Modellrechnung**. Wir fassen sie nicht zusammen und rechnen sie nicht gegen andere Modelle auf. Die Warnzone Estrecho (611104) ist gegen das amtliche Zonenverzeichnis von AEMET geprüft; oben steht AEMETs Wortlaut, und bei jedem Ausfall führt der Link direkt zu AEMET.', 'Los avisos oficiales de AEMET **prevalecen sobre cualquier cálculo de modelo**. No los resumimos ni los contraponemos a otros modelos. La zona de aviso Estrecho (611104) está comprobada con el registro oficial de zonas de AEMET; arriba aparece el texto de AEMET, y si falla, el enlace lleva directamente a AEMET.', 'Officiële AEMET-waarschuwingen **gaan boven elke modelberekening**. We vatten ze niet samen en zetten ze niet af tegen andere modellen. De waarschuwingszone Estrecho (611104) is gecontroleerd aan de hand van het officiële zoneregister van AEMET; hierboven staat de tekst van AEMET, en bij elke storing leidt de link rechtstreeks naar AEMET.', 'Officiella AEMET-varningar **går före varje modellberäkning**. Vi sammanfattar dem inte och väger dem inte mot andra modeller. Varningszonen Estrecho (611104) är kontrollerad mot AEMET:s officiella zonregister; ovan står AEMET:s ordalydelse, och vid varje avbrott leder länken direkt till AEMET.'),
      href: aemetHref,
      linkLabel: aemetLabel,
      briefingText: l('AEMET’s hourly forecast for Tarifa, read for you by fixed rules: what wind, gusts, sea state and sky mean for the hour. Nothing here chooses a spot, names a kite size or approves a session.', 'Die AEMET-Stundenvorhersage für Tarifa, nach festen Regeln für euch eingeordnet: was Wind, Böen, Wellengang und Himmel für die Stunde bedeuten. Nichts hier wählt einen Spot, nennt eine Kitegröße oder gibt eine Session frei.', 'La previsión horaria de AEMET para Tarifa, leída para vosotros con reglas fijas: qué significan viento, rachas, oleaje y cielo para esa hora. Nada aquí elige un spot, nombra una talla de cometa ni autoriza una sesión.', 'De AEMET-uurverwachting voor Tarifa, met vaste regels voor jullie geduid: wat wind, vlagen, golfslag en lucht voor dat uur betekenen. Niets hier kiest een spot, noemt een kitemaat of keurt een sessie goed.', 'AEMET:s timprognos för Tarifa, tolkad åt er med fasta regler: vad vind, byar, sjögång och himmel betyder för timmen. Inget här väljer spot, nämner kitestorlek eller godkänner en session.')
    },
    forecast: {
      loading: l('Loading the official AEMET forecast …', 'Amtliche AEMET-Vorhersage wird geladen …', 'Cargando la previsión oficial de AEMET …', 'Officiële AEMET-verwachting wordt geladen …', 'AEMET:s officiella prognos laddas …'),
      today: l('Today', 'Heute', 'Hoy', 'Vandaag', 'I dag'),
      tomorrow: l('Tomorrow', 'Morgen', 'Mañana', 'Morgen', 'I morgon'),
      high: l('High', 'Höchstwert', 'Máxima', 'Maximum', 'Högsta'),
      low: l('Low', 'Tiefstwert', 'Mínima', 'Minimum', 'Lägsta'),
      rain: l('Rain probability', 'Regenwahrscheinlichkeit', 'Probabilidad de lluvia', 'Neerslagkans', 'Regnsannolikhet'),
      issued: l('Forecast issued', 'Vorhersage ausgegeben', 'Previsión emitida', 'Verwachting uitgegeven', 'Prognosen utfärdad'),
      unavailableTitle: l('The official AEMET forecast is currently unavailable', 'Die amtliche AEMET-Vorhersage ist gerade nicht verfügbar', 'La previsión oficial de AEMET no está disponible ahora mismo', 'De officiële AEMET-verwachting is op dit moment niet beschikbaar', 'AEMET:s officiella prognos är inte tillgänglig just nu'),
      unavailableText: l('When data is missing, the field stays empty; the official forecast and warnings are directly at AEMET.', 'Wenn Daten fehlen, bleibt das Feld leer; die amtliche Vorhersage und die Warnungen stehen direkt bei AEMET.', 'Si faltan datos, el campo queda vacío; el pronóstico oficial y los avisos están directamente en AEMET.', 'Als gegevens ontbreken, blijft het veld leeg; de officiële voorspelling en waarschuwingen staan direct bij AEMET.', 'Saknas data lämnas fältet tomt; den officiella prognosen och varningarna finns direkt hos AEMET.'),
      aemetLabel
    }
  },
  wind: {
    label: l('Levante and Poniente', 'Levante und Poniente', 'Levante y poniente', 'Levante en poniente', 'Levante och poniente'),
    title: l('Which wind', 'Welcher Wind', 'Qué viento', 'Welke wind', 'Vilken vind'),
    subtitle: l('Two wind patterns, two completely different days', 'Der Poniente bringt die Welle, der Levante die Stärke und die Böen', 'Dos vientos, dos días completamente distintos', 'Twee windsituaties, twee totaal verschillende dagen', 'Två vindlägen, två helt olika dagar'),
    intro: l('Poniente comes from the west, off the Atlantic. On the main beaches it is **side-onshore, usually runs more evenly and typically brings waves with it**. Levante comes from the east. On the main beaches such as Los Lances it mostly blows **side-offshore and is known for strength and gustiness**. That is not the same everywhere; stretches like Balneario or Palmones sit differently. So wind direction alone yields neither a choice of spot nor a safety assessment.', 'Der Poniente kommt vom Atlantik, aus Westen. An Los Lances steht er **schräg auflandig, läuft gleichmäßiger und bringt die Welle mit**; das ist der Wind, um den es im Zitat unten geht. Der Levante kommt aus Osten, vom Land aufs Meer, an Los Lances **schräg ablandig, warm, kräftig und böig**. Nicht jeder Strand liegt gleich zum Wind: Am Balneario direkt an der Stadt oder in Palmones sieht dieselbe Richtung anders aus. Deshalb sagt die Richtung allein noch nicht, wo ihr heute startet.', 'El poniente viene del oeste, del Atlántico. En las playas principales entra **side-onshore, de lado y de mar, suele ser más regular y normalmente trae ola**. El levante viene del este. En las playas principales como Los Lances sopla casi siempre **side-offshore, de lado y de tierra, y es conocido por su fuerza y sus rachas**. No es igual en todas partes; tramos como Balneario o Palmones están orientados de otra manera. Por eso, de la dirección del viento por sí sola no sale ni una elección de spot ni una valoración de seguridad.', 'Poniente komt uit het westen, van de Atlantische Oceaan. Op de hoofdstranden staat hij **side-onshore — schuin aanlandig —, loopt meestal gelijkmatiger en brengt doorgaans golven mee**. Levante komt uit het oosten. Op de hoofdstranden zoals Los Lances waait hij meestal **side-offshore — schuin aflandig — en staat hij bekend om kracht en vlagerigheid**. Dat geldt niet overal hetzelfde; delen als Balneario of Palmones liggen anders. Uit de windrichting alleen volgt daarom noch een spotkeuze, noch een veiligheidsinschatting.', 'Poniente kommer från väst, från Atlanten. På huvudstränderna är den **side-onshore – snett pålands –, löper oftast jämnare och för vanligtvis med sig vågor**. Levante kommer från öst. På huvudstränder som Los Lances blåser den för det mesta **side-offshore – snett frånlands – och är känd för styrka och byighet**. Det gäller inte överallt på samma sätt; sträckor som Balneario eller Palmones ligger annorlunda. Av vindriktningen ensam följer därför varken ett spotval eller en säkerhetsbedömning.'),
    recognizeTitle: l('Reading the morning before you look at the table', 'Am Morgen erkennen, bevor ihr auf die Tabelle schaut', 'Reconocer la mañana antes de mirar la tabla', 'De ochtend lezen voordat jullie naar de tabel kijken', 'Läsa morgonen innan ni tittar på tabellen'),
    robert: {
      name: 'Robert',
      role: robertRole,
      imageAlt: l('Robert Böhmer, host at AMARA', 'Robert Böhmer, Gastgeber bei AMARA', 'Robert Böhmer, anfitrión de AMARA', 'Robert Böhmer, host bij AMARA', 'Robert Böhmer, värd på AMARA')
    },
    robertMorning: ll(
      ['In the morning I can already feel the wind in the temperature: warm usually means Levante, cool brings Poniente. And Levante often needs a day — the first day is fidgety and gusty, the second one really runs.'],
      ['Morgens spüre ich den Wind schon an der Temperatur: Ist es warm, steht meist Levante; ist es kühl, kommt der Poniente. Und der Levante braucht oft einen Tag — der erste ist zickig und böig, der zweite läuft dann richtig rund.'],
      ['Por la mañana ya noto el viento en la temperatura: si hace calor suele ser levante; si está fresco entra el poniente. Y el levante muchas veces necesita un día: el primero va nervioso y racheado, el segundo ya rueda de verdad.'],
      ['’s Ochtends voel ik de wind al aan de temperatuur: is het warm, dan staat meestal levante; is het fris, dan komt poniente. En levante heeft vaak een dag nodig — de eerste is nerveus en vlagerig, de tweede loopt pas echt lekker.'],
      ['På morgonen känner jag vinden redan på temperaturen: är det varmt är det oftast levante, är det svalt kommer poniente. Och levanten behöver ofta en dag – den första är nyckfull och byig, den andra rullar det på ordentligt.']
    ),
    mark: { name: 'Mark', role: markRole },
    markReading: {
      id: 'reading-the-day',
      lead: l('How he can tell a day is running differently from the forecast:', 'Woran er sieht, dass ein Tag anders läuft als der Forecast:', 'En qué nota que un día va distinto de lo que decía el parte:', 'Waaraan hij ziet dat een dag anders loopt dan de forecast:', 'Hur han ser att en dag går annorlunda än prognosen:'),
      paragraphs: ll(
        ['I really only look at the mountains. If that thick Levante cloud is sitting over Gibraltar, the wind stays steady. If the cloud dissolves, the wind usually collapses shortly after. Another good indicator: when everyone out there suddenly loses ground upwind, the tidal current is running off downwind. That steals the pressure from your kite immediately, whatever the app says.'],
        ['Ich schaue eigentlich nur auf die Berge. Hängt diese dicke Levante-Wolke über Gibraltar, bleibt der Wind stabil. Löst die Wolke sich auf, bricht der Wind meist kurz danach zusammen. Noch ein guter Indikator: Wenn draußen plötzlich alle Höhe verlieren, zieht die Gezeitenströmung gerade in Windrichtung ab. Das klaut dir sofort den Druck im Schirm, egal was die App sagt.'],
        ['Yo en realidad solo miro a las montañas. Si esa nube gorda de levante está sobre Gibraltar, el viento se mantiene estable. Si la nube se deshace, el viento suele venirse abajo poco después. Otro buen indicador: cuando fuera todos pierden altura de repente, la corriente de marea está tirando en la dirección del viento. Eso te quita la presión de la cometa al instante, diga lo que diga la app.'],
        ['Ik kijk eigenlijk alleen naar de bergen. Hangt die dikke levantewolk boven Gibraltar, dan blijft de wind stabiel. Lost de wolk op, dan zakt de wind meestal kort daarna in elkaar. Nog een goede indicator: als iedereen buiten ineens hoogte verliest, trekt de getijstroom net met de wind mee weg. Dat steelt meteen de druk uit je kite, wat de app ook zegt.'],
        ['Jag tittar egentligen bara på bergen. Hänger det där tjocka levantemolnet över Gibraltar håller vinden sig stabil. Löser molnet upp sig bryter vinden oftast ihop strax därefter. Ännu en bra indikator: när alla därute plötsligt tappar höjd drar tidvattenströmmen just då iväg i vindriktningen. Det stjäl trycket i kiten direkt, oavsett vad appen säger.']
      )
    },
    experienceTitle: l('The Tarifa we mean', 'Das Tarifa-Erlebnis, das wir meinen', 'La Tarifa que queremos decir', 'Het Tarifa dat wij bedoelen', 'Det Tarifa vi menar'),
    robertExperience: ll(
      [
        'From my personal experience: Tarifa is advertised with around 300 kite days a year, and yes — some of those are Levante days. Anyone who wants to catch them all has to be able to kite in Levante too.',
        'But the kitesurfing I mean, the kind the locals do here: that is Poniente. Los Lances right outside the door, waves in it, the wind not brutal but strong enough for a lot of fun. For me, that is the Tarifa experience.',
        'That is why I wanted my apartment exactly there — with a view of Los Lances. I can see when the wind arrives. And when it arrives, I pack my things and go out.'
      ],
      [
        'Aus meiner persönlichen Erfahrung: Tarifa wird mit rund 300 Kitetagen im Jahr beworben, und ja — ein Teil davon sind Levante-Tage. Wer die alle mitnehmen will, muss auch bei Levante kiten können.',
        'Aber das Kitesurfen, das ich meine, das, was die Locals hier machen: das ist Poniente. Los Lances direkt vor der Tür, Welle drin, der Wind nicht brutal, aber stark genug für richtig viel Spaß. Das ist für mich das Tarifa-Erlebnis.',
        'Deshalb wollte ich meine Wohnung auch genau dort haben — mit Blick auf Los Lances. Ich sehe, wann der Wind kommt. Und wenn er kommt, packe ich meine Sachen und gehe raus.'
      ],
      [
        'Por experiencia personal: Tarifa se promociona con unos 300 días de kite al año, y sí, una parte son días de levante. Quien quiera aprovecharlos todos tiene que saber navegar también con levante.',
        'Pero el kitesurf al que me refiero, el que hacen los locales aquí, es el de poniente. Los Lances justo delante de la puerta, con ola, el viento no brutal pero sí suficiente para disfrutar de verdad. Para mí, eso es la experiencia de Tarifa.',
        'Por eso quise tener mi apartamento exactamente ahí, con vistas a Los Lances. Veo cuándo llega el viento. Y cuando llega, cojo mis cosas y salgo.'
      ],
      [
        'Uit mijn persoonlijke ervaring: Tarifa wordt aangeprezen met zo’n 300 kitedagen per jaar, en ja — een deel daarvan zijn levantedagen. Wie die allemaal wil meepakken, moet ook bij levante kunnen kiten.',
        'Maar het kitesurfen dat ik bedoel, dat wat de locals hier doen: dat is poniente. Los Lances direct voor de deur, golven erin, de wind niet bruut, maar sterk genoeg voor heel veel plezier. Dat is voor mij de Tarifa-ervaring.',
        'Daarom wilde ik mijn appartement ook precies daar hebben — met uitzicht op Los Lances. Ik zie wanneer de wind komt. En als hij komt, pak ik mijn spullen en ga ik naar buiten.'
      ],
      [
        'Av egen erfarenhet: Tarifa marknadsförs med runt 300 kitedagar om året, och ja – en del av dem är levantedagar. Den som vill ta alla måste kunna kita i levante också.',
        'Men den kitesurfing jag menar, den som de lokala kör här: det är poniente. Los Lances direkt utanför dörren, vågor i, vinden inte brutal men stark nog för riktigt mycket glädje. Det är Tarifa-upplevelsen för mig.',
        'Därför ville jag ha min lägenhet precis där – med utsikt över Los Lances. Jag ser när vinden kommer. Och när den kommer packar jag mina grejer och går ut.'
      ]
    ),
    bridge: {
      label: l('How it shows in the table', 'So steht es in der Tabelle', 'Así se ve en la tabla', 'Zo staat het in de tabel', 'Så syns det i tabellen'),
      text: l('In the wind-direction row the arrow points left: from the east, Levante. Pointing right, it is Poniente. And **in a Levante the gap between wind speed and gusts is wide** — exactly what the example day under “Reading the table” shows. Which beach suits which wind is under “Where to launch”.', 'In der Zeile Windrichtung zeigt der Pfeil nach links: aus Osten, Levante. Zeigt er nach rechts, kommt Poniente. Und **beim Levante ist der Abstand zwischen Windstärke und Böen groß** — genau das zeigt der Beispieltag unter „Die Tabelle lesen“. Welcher Strand zu welchem Wind passt, steht unter „Wo raus“.', 'En la fila de dirección del viento la flecha apunta a la izquierda: viene del este, levante. Si apunta a la derecha, es poniente. Y **con levante la diferencia entre viento medio y rachas es grande**: justo lo que muestra el día de ejemplo de «Leer la tabla». Qué playa va con cada viento está en «Dónde salir».', 'In de rij windrichting wijst de pijl naar links: uit het oosten, levante. Wijst hij naar rechts, dan is het poniente. En **bij levante is het verschil tussen windsterkte en vlagen groot** — precies wat de voorbeelddag onder “De tabel lezen” laat zien. Welk strand bij welke wind past, staat onder “Waar het water op”.', 'I raden vindriktning pekar pilen åt vänster: från öst, levante. Pekar den åt höger är det poniente. Och **i levante är avståndet mellan vindstyrka och byar stort** — precis det exempeldagen under ”Läsa tabellen” visar. Vilken strand som passar vilken vind står under ”Var man går ut”.'),
      links: [
        { id: 'table', anchor: 'tabelle', label: l('Reading the table', 'Die Tabelle lesen', 'Leer la tabla', 'De tabel lezen', 'Läsa tabellen') },
        { id: 'beach', anchor: 'wo-raus', label: l('Where to launch', 'Wo raus', 'Dónde salir', 'Waar het water op', 'Var man går ut') }
      ]
    }
  },
  table: {
    label: l('Windguru for beginners', 'Windguru für Anfänger', 'Windguru para principiantes', 'Windguru voor beginners', 'Windguru för nybörjare'),
    title: l('Reading the table', 'Die Tabelle lesen', 'Leer la tabla', 'De tabel lezen', 'Läsa tabellen'),
    subtitle: l('Windguru row by row, on two typical days: a Levante and a Poniente', 'Windguru Zeile für Zeile, an zwei typischen Tagen: einem Levante und einem Poniente', 'Windguru fila por fila, en dos días típicos: uno de levante y uno de poniente', 'Windguru rij voor rij, op twee typische dagen: een levante en een poniente', 'Windguru rad för rad, på två typiska dagar: en levante och en poniente'),
    intro: l('The first time you look at Windguru as a beginner, you see a wall of numbers, colours and arrows — and it makes you nervous. It did the same to us. So we go through the table calmly here, on an example with the same rows as Windguru. **The numbers at the start of each row come back in the explanations below**.', 'Als Anfänger schaut ihr zum ersten Mal auf Windguru und seht eine Wand aus Zahlen, Farben und Pfeilen — und werdet erst mal nervös. Ging uns genauso. Deshalb gehen wir die Tabelle hier in Ruhe durch, an einem Beispiel mit denselben Zeilen wie bei Windguru. **Die Nummern am Zeilenanfang findet ihr darunter wieder**.', 'La primera vez que miráis Windguru como principiantes veis un muro de números, colores y flechas, y os ponéis nerviosos. A nosotros nos pasó igual. Por eso aquí repasamos la tabla con calma, con un ejemplo que tiene las mismas filas que Windguru. **Los números al principio de cada fila los encontráis de nuevo debajo**.', 'De eerste keer dat jullie als beginner naar Windguru kijken, zien jullie een muur van cijfers, kleuren en pijlen — en worden jullie nerveus. Ging ons net zo. Daarom nemen we de tabel hier rustig door, aan de hand van een voorbeeld met dezelfde rijen als bij Windguru. **De nummers aan het begin van elke rij vinden jullie hieronder terug**.', 'Första gången ni som nybörjare tittar på Windguru ser ni en vägg av siffror, färger och pilar — och blir nervösa. Det gick likadant för oss. Därför går vi igenom tabellen i lugn och ro här, på ett exempel med samma rader som hos Windguru. **Numren i början av varje rad hittar ni igen nedanför**.'),
    example: {
      label: l('Example in Windguru style · WRF 3 km · Tarifa', 'Beispiel im Windguru-Stil · WRF 3 km · Tarifa', 'Ejemplo al estilo Windguru · WRF 3 km · Tarifa', 'Voorbeeld in Windguru-stijl · WRF 3 km · Tarifa', 'Exempel i Windguru-stil · WRF 3 km · Tarifa'),
      note: l('Example days, not a forecast. Live values:', 'Beispieltage, keine Vorhersage. Live-Werte:', 'Días de ejemplo, no una previsión. Valores en directo:', 'Voorbeelddagen, geen verwachting. Livewaarden:', 'Exempeldagar, ingen prognos. Livevärden:'),
      linkLabel: l('Windguru Tarifa', 'Windguru Tarifa', 'Windguru Tarifa', 'Windguru Tarifa', 'Windguru Tarifa'),
      linkHref: windguruHref,
      hourRowLabel: l('Day · hour', 'Tag · Stunde', 'Día · hora', 'Dag · uur', 'Dag · timme'),
      hourLabel: l('Time', 'Uhrzeit', 'Hora', 'Tijd', 'Klockslag'),
      days: [
        { id: 'levante', label: l('Levante day', 'Levante-Tag', 'Día de levante', 'Levantedag', 'Levantedag') },
        { id: 'poniente', label: l('Poniente day', 'Poniente-Tag', 'Día de poniente', 'Ponientedag', 'Ponientedag') }
      ],
      colorNote: l('Colours as at Windguru: from light blue (light) through green and yellow to red (strong).', 'Farben wie bei Windguru: von hellblau (leicht) über grün und gelb bis rot (stark).', 'Colores como en Windguru: de azul claro (flojo) pasando por verde y amarillo hasta rojo (fuerte).', 'Kleuren zoals bij Windguru: van lichtblauw (licht) via groen en geel naar rood (sterk).', 'Färger som hos Windguru: från ljusblått (svagt) via grönt och gult till rött (starkt).')
    },
    rows: [
      {
        id: 'hour',
        number: '1',
        title: l('Day and hour', 'Tag und Stunde', 'Día y hora', 'Dag en uur', 'Dag och timme'),
        text: l('Each column is one hour of the model, **not a measurement**. Between two columns the wind can do whatever it likes.', 'Jede Spalte ist eine Stunde des Modells, **nicht eine Messung**. Zwischen zwei Spalten kann der Wind machen, was er will.', 'Cada columna es una hora del modelo, **no una medición**. Entre dos columnas el viento puede hacer lo que quiera.', 'Elke kolom is één uur van het model, **geen meting**. Tussen twee kolommen kan de wind doen wat hij wil.', 'Varje kolumn är en timme i modellen, **inte en mätning**. Mellan två kolumner kan vinden göra vad den vill.')
      },
      {
        id: 'wind',
        number: '2',
        title: l('Wind speed (knots)', 'Windstärke (Knoten)', 'Velocidad del viento (nudos)', 'Windsterkte (knopen)', 'Vindstyrka (knop)'),
        text: l('The mean wind the model calculates for that hour, not the force you feel in the kite. One knot is one nautical mile per hour, i.e. **1.85 km/h** — 20 knots is about 37 km/h, 30 about 55. The Beaufort table below turns the number into a picture of the sea.', 'Der Mittelwind, den das Modell für diese Stunde berechnet, nicht die Kraft, die ihr am Kite spürt. Ein Knoten ist eine Seemeile pro Stunde, also **1,85 km/h** — 20 Knoten sind rund 37 km/h, 30 rund 55. Die Beaufort-Tabelle unten macht aus der Zahl ein Bild vom Meer.', 'El viento medio que el modelo calcula para esa hora, no la fuerza que sentís en la cometa. Un nudo es una milla náutica por hora, es decir **1,85 km/h**: 20 nudos son unos 37 km/h, 30 unos 55. La tabla Beaufort de abajo convierte la cifra en una imagen del mar.', 'De gemiddelde wind die het model voor dat uur berekent, niet de kracht die je in de kite voelt. Eén knoop is één zeemijl per uur, dus **1,85 km/h** — 20 knopen is ongeveer 37 km/h, 30 ongeveer 55. De Beaufort-tabel hieronder maakt van het getal een beeld van de zee.', 'Medelvinden som modellen beräknar för den timmen, inte kraften ni känner i kiten. En knop är en sjömil i timmen, alltså **1,85 km/h** — 20 knop är ungefär 37 km/h, 30 ungefär 55. Beaufort-tabellen nedan gör siffran till en bild av havet.')
      },
      {
        id: 'gusts',
        number: '3',
        title: l('Gusts (knots)', 'Windböen (Knoten)', 'Rachas (nudos)', 'Windvlagen (knopen)', 'Vindbyar (knop)'),
        text: l('Read the gap to the mean wind: in Tarifa it says more than the mean itself. That the wind comes in gusts, never perfectly even, is nature. Near the beach the Levante is **markedly gustier** than the Poniente: it comes off the land and over the mountains, which makes it rough close in, while further out it runs cleaner. The Poniente arrives over the open Atlantic and is softer and more forgiving.', 'Lest den Abstand zum Mittelwind: In Tarifa sagt er mehr als der Mittelwert selbst. Dass der Wind in Böen kommt, nie ganz gleichmäßig, ist Natur. Am Strand ist der Levante **deutlich böiger** als der Poniente: Er kommt von Land und über die Berge, das macht ihn nah am Ufer ruppig, während er weiter draußen sauberer läuft. Der Poniente kommt über den offenen Atlantik und ist weicher, er verzeiht mehr.', 'Mirad la diferencia con el viento medio: en Tarifa dice más que la propia media. Que el viento llegue a rachas, nunca del todo constante, es la naturaleza. Cerca de la playa el levante es **bastante más racheado** que el poniente: viene de tierra y por encima de las montañas, lo que lo hace áspero junto a la orilla, mientras que más afuera va más limpio. El poniente llega por el Atlántico abierto y es más suave, perdona más.', 'Lees het verschil met de gemiddelde wind: in Tarifa zegt het meer dan het gemiddelde zelf. Dat de wind in vlagen komt, nooit helemaal gelijkmatig, is de natuur. Bij het strand is de levante **duidelijk vlageriger** dan de poniente: hij komt van het land en over de bergen, wat hem dicht bij de kust ruw maakt, terwijl hij verder op zee schoner loopt. De poniente komt over de open Atlantische Oceaan en is zachter, hij vergeeft meer.', 'Läs avståndet till medelvinden: i Tarifa säger det mer än medelvärdet självt. Att vinden kommer i byar, aldrig helt jämn, är naturen. Nära stranden är levanten **betydligt byigare** än poniente: den kommer från land och över bergen, vilket gör den skrovlig nära land, medan den längre ut löper renare. Poniente kommer över öppna Atlanten och är mjukare, den förlåter mer.')
      },
      {
        id: 'direction',
        number: '4',
        title: l('Wind direction', 'Windrichtung', 'Dirección del viento', 'Windrichting', 'Vindriktning'),
        text: l('The arrow points where the wind blows to: **left means from the east, Levante; right means from the west, Poniente**. Anything in between is one of the two, veering a little.', 'Der Pfeil zeigt, wohin der Wind weht: **nach links heißt aus Osten, Levante; nach rechts heißt aus Westen, Poniente**. Schräg dazwischen ist einer der beiden, der etwas dreht.', 'La flecha señala hacia dónde sopla el viento: **a la izquierda viene del este, levante; a la derecha viene del oeste, poniente**. Lo que queda en medio es uno de los dos que gira un poco.', 'De pijl wijst waarheen de wind waait: **naar links betekent uit het oosten, levante; naar rechts uit het westen, poniente**. Schuin ertussenin is een van de twee die wat draait.', 'Pilen visar vart vinden blåser: **åt vänster betyder från öst, levante; åt höger från väst, poniente**. Snett däremellan är en av de två som vrider lite.')
      },
      {
        id: 'temperature',
        number: '5',
        title: l('Temperature (°C)', 'Temperatur (°C)', 'Temperatura (°C)', 'Temperatuur (°C)', 'Temperatur (°C)'),
        text: l('Air temperature. Together with the wind it decides **how thick a wetsuit you want**; the water stays cooler than the air for most of the year.', 'Lufttemperatur. Zusammen mit dem Wind entscheidet sie, **wie dick der Neo sein soll**; das Wasser bleibt den größten Teil des Jahres kühler als die Luft.', 'Temperatura del aire. Junto con el viento decide **el grosor del neopreno**; el agua está más fría que el aire la mayor parte del año.', 'Luchttemperatuur. Samen met de wind bepaalt ze **hoe dik het wetsuit moet zijn**; het water blijft het grootste deel van het jaar koeler dan de lucht.', 'Lufttemperatur. Tillsammans med vinden avgör den **hur tjock våtdräkt ni vill ha**; vattnet är svalare än luften större delen av året.')
      },
      {
        id: 'cloud',
        number: '6',
        title: l('Cloud cover (%)', 'Bewölkung (%)', 'Nubosidad (%)', 'Bewolking (%)', 'Molnighet (%)'),
        text: l('Weather context for the day. Little cloud is **no proof of thermal wind**. On windguru.cz the same row is split into high, mid and low layers.', 'Wetterkontext für den Tag. Wenig Wolken sind **kein Beleg für Thermik**. Auf windguru.cz ist dieselbe Zeile in hohe, mittlere und niedrige Schichten aufgeteilt.', 'Contexto meteorológico del día. Pocas nubes **no demuestran que haya térmica**. En windguru.cz la misma fila se divide en capas alta, media y baja.', 'Weercontext voor de dag. Weinig bewolking is **geen bewijs voor thermiek**. Op windguru.cz is dezelfde rij opgesplitst in hoge, midden- en lage lagen.', 'Väderkontext för dagen. Lite moln är **inget bevis för termik**. På windguru.cz är samma rad uppdelad i höga, mellan- och låga lager.')
      },
      {
        id: 'rain',
        number: '7',
        title: l('Precipitation (mm/h)', 'Niederschlag (mm/h)', 'Precipitación (mm/h)', 'Neerslag (mm/h)', 'Nederbörd (mm/h)'),
        text: l('Modelled rain per hour. A dash means none. Showers often come with **sudden wind shifts**, which is worth knowing when you plan a session.', 'Modellierter Regen pro Stunde. Ein Strich heißt keiner. Schauer bringen oft **plötzliche Winddreher** mit, und das ist gut zu wissen, wenn ihr eine Session plant.', 'Lluvia modelizada por hora. Un guion significa nada. Los chubascos suelen traer **cambios bruscos de viento**, algo que conviene saber al planear una sesión.', 'Gemodelleerde regen per uur. Een streepje betekent geen. Buien brengen vaak **plotselinge winddraaiingen** mee, goed om te weten als je een sessie plant.', 'Modellerat regn per timme. Ett streck betyder inget. Skurar för ofta med sig **plötsliga vindvridningar**, bra att veta när ni planerar ett pass.')
      },
      {
        id: 'rating',
        number: '8',
        title: l('Windguru rating', 'Windguru-Wertung', 'Valoración de Windguru', 'Windguru-beoordeling', 'Windguru-betyg'),
        text: l('The stars are Windguru’s own rating of the wind for its users, based on speed alone. They are **not a safety judgement** and know nothing about zones, gusts on the beach or your level. A friendly hint, no more.', 'Die Sternchen sind Windgurus eigene Bewertung des Winds für seine Nutzer, allein nach Stärke. Sie sind **kein Sicherheitsurteil** und wissen nichts über Zonen, Böen am Strand oder euer Niveau. Ein netter Hinweis, mehr nicht.', 'Las estrellas son la valoración propia de Windguru del viento para sus usuarios, solo por la fuerza. **No son un juicio de seguridad** y no saben nada de zonas, rachas en la playa ni de vuestro nivel. Una pista simpática, nada más.', 'De sterren zijn Windguru’s eigen beoordeling van de wind voor zijn gebruikers, alleen op basis van kracht. Ze zijn **geen veiligheidsoordeel** en weten niets van zones, vlagen op het strand of jullie niveau. Een vriendelijke hint, meer niet.', 'Stjärnorna är Windgurus eget betyg på vinden för sina användare, enbart efter styrka. De är **inget säkerhetsomdöme** och vet inget om zoner, byar på stranden eller er nivå. En vänlig hint, inget mer.')
      }
    ],
    waveNote: {
      title: l('Not in this view: wave and period', 'Nicht in dieser Ansicht: Welle und Periode', 'No está en esta vista: ola y periodo', 'Niet in deze weergave: golf en periode', 'Inte i den här vyn: våg och period'),
      text: l('For kiting in Tarifa **the wind decides**, so we leave the wave rows out. In short: wave height is an average of the higher waves, not the one big wave at the shore; the period is the time in seconds between two waves — long means swell with power, short means choppy water, exactly what a Levante against the tide makes. Both are in a wave model on windguru.cz.', 'Fürs Kiten in Tarifa **entscheidet der Wind**, deshalb zeigen wir die Wellenzeilen nicht. Kurz gesagt: Die Wellenhöhe ist ein Mittel der höheren Wellen, nicht die eine große am Ufer; die Periode ist der Abstand zwischen zwei Wellen in Sekunden — lang heißt Welle mit Kraft, kurz heißt kabbeliges Wasser, genau das, was ein Levante gegen die Tide macht. Beides steht in einem Wellenmodell auf windguru.cz.', 'Para el kite en Tarifa **decide el viento**, por eso no mostramos las filas de ola. En resumen: la altura de ola es una media de las olas más altas, no la ola grande de la orilla; el periodo es el tiempo en segundos entre dos olas: largo significa mar de fondo con fuerza, corto significa agua picada, justo lo que hace un levante contra la marea. Las dos están en un modelo de oleaje en windguru.cz.', 'Voor het kiten in Tarifa **beslist de wind**, daarom laten we de golfrijen weg. Kort gezegd: de golfhoogte is een gemiddelde van de hogere golven, niet die ene grote golf aan de kant; de periode is de tijd in seconden tussen twee golven — lang betekent deining met kracht, kort betekent kabbelwater, precies wat een levante tegen het tij maakt. Beide staan in een golfmodel op windguru.cz.', 'För kiting i Tarifa **avgör vinden**, så vi utelämnar vågraderna. Kort sagt: våghöjden är ett medel av de högre vågorna, inte den enda stora vågen vid stranden; perioden är tiden i sekunder mellan två vågor — lång betyder svall med kraft, kort betyder krabb sjö, precis vad en levante mot tidvattnet skapar. Båda finns i en vågmodell på windguru.cz.')
    },
    examples: [
      {
        id: 'levante',
        label: l('Reading example · Levante day, 3 pm', 'Lesebeispiel · Levante-Tag, 15 Uhr', 'Ejemplo de lectura · día de levante, 15 h', 'Leesvoorbeeld · levantedag, 15 uur', 'Läsexempel · levantedag, kl. 15'),
        value: l('32 kn, gusts 44, arrow to the left', '32 kn, Böen 44, Pfeil nach links', '32 kn, rachas 44, flecha a la izquierda', '32 kn, vlagen 44, pijl naar links', '32 kn, byar 44, pil åt vänster'),
        text: l('Twelve knots between mean wind and gusts, direction from the east: **a Levante day**. Warm, strong, rough close to the shore. What that means for the beach is under “Where to launch”.', 'Zwölf Knoten Abstand zwischen Mittelwind und Böen, Richtung aus Osten: **ein Levante-Tag**. Warm, kräftig, ruppig nah am Ufer. Was das für den Strand heißt, steht unter „Wo raus“.', 'Doce nudos de diferencia entre viento medio y rachas, dirección del este: **un día de levante**. Cálido, fuerte, áspero junto a la orilla. Lo que eso significa para la playa está en «Dónde salir».', 'Twaalf knopen verschil tussen gemiddelde wind en vlagen, richting uit het oosten: **een levantedag**. Warm, sterk, ruw dicht bij de kust. Wat dat voor het strand betekent, staat onder “Waar het water op”.', 'Tolv knop mellan medelvind och byar, riktning från öst: **en levantedag**. Varm, stark, skrovlig nära stranden. Vad det betyder för stranden står under ”Var man går ut”.')
      },
      {
        id: 'poniente',
        label: l('Reading example · Poniente day, 3 pm', 'Lesebeispiel · Poniente-Tag, 15 Uhr', 'Ejemplo de lectura · día de poniente, 15 h', 'Leesvoorbeeld · ponientedag, 15 uur', 'Läsexempel · ponientedag, kl. 15'),
        value: l('20 kn, gusts 24, arrow to the right', '20 kn, Böen 24, Pfeil nach rechts', '20 kn, rachas 24, flecha a la derecha', '20 kn, vlagen 24, pijl naar rechts', '20 kn, byar 24, pil åt höger'),
        text: l('Four knots of gap, direction from the west: **Poniente, even, with waves**. The wind Robert’s quote is about. Why it builds on a clear afternoon is under “Thermal wind”.', 'Vier Knoten Abstand, Richtung aus Westen: **Poniente, gleichmäßig, mit Welle**. Der Wind, um den es in Roberts Zitat geht. Warum er am klaren Nachmittag zulegt, steht unter „Thermik“.', 'Cuatro nudos de diferencia, dirección del oeste: **poniente, regular, con ola**. El viento del que habla la cita de Robert. Por qué se refuerza en una tarde despejada está en «Térmica».', 'Vier knopen verschil, richting uit het westen: **poniente, gelijkmatig, met golven**. De wind waar Roberts citaat over gaat. Waarom hij op een heldere middag aanzwelt, staat onder “Thermiek”.', 'Fyra knops avstånd, riktning från väst: **poniente, jämn, med vågor**. Vinden Roberts citat handlar om. Varför den tar i en klar eftermiddag står under ”Termik”.')
      }
    ],
    modelsTitle: l('The models — and why the locals pick WRF 3 km', 'Die Modelle — und warum die Locals WRF 3 km nehmen', 'Los modelos: y por qué los locales eligen WRF 3 km', 'De modellen — en waarom de locals WRF 3 km kiezen', 'Modellerna — och varför de lokala väljer WRF 3 km'),
    modelsIntro: l('For Tarifa, Windguru stacks several weather models one below the other. The first time, that is exactly the moment you give up: which one do I take? Here they are in short, from coarse and long-range to fine and short-range:', 'Windguru stapelt für Tarifa mehrere Wettermodelle untereinander. Beim ersten Mal ist genau das der Moment zum Aussteigen: Welches nehme ich denn jetzt? Kurz erklärt, von grob und langfristig bis fein und kurzfristig:', 'Para Tarifa, Windguru apila varios modelos meteorológicos uno debajo de otro. La primera vez, ese es justo el momento de rendirse: ¿cuál elijo? Aquí van en breve, de lo grueso y a largo plazo a lo fino y a corto plazo:', 'Voor Tarifa stapelt Windguru meerdere weermodellen onder elkaar. De eerste keer is dat precies het moment om af te haken: welke neem ik nou? Hier kort op een rij, van grof en lange termijn tot fijn en korte termijn:', 'För Tarifa staplar Windguru flera vädermodeller under varandra. Första gången är det just då man vill ge upp: vilken tar jag? Här kort, från grovt och långsiktigt till fint och kortsiktigt:'),
    models: [
      { id: 'gfs', name: 'GFS 13 km', text: l('A global model — it computes the whole world, so it stays coarse, on a 13 km grid. Good for the rough trend over several days, **too coarse for your beach**.', 'Ein globales Modell, es rechnet die ganze Welt — dafür grob, mit 13-km-Raster. Gut für den groben Trend über mehrere Tage, **zu grob für euren Strand**.', 'Un modelo global: calcula el mundo entero, por eso es grueso, con malla de 13 km. Bueno para la tendencia general de varios días, **demasiado grueso para vuestra playa**.', 'Een globaal model — het rekent de hele wereld, dus blijft het grof, met een raster van 13 km. Goed voor de grove trend over meerdere dagen, **te grof voor jullie strand**.', 'En global modell — den räknar hela världen och blir därför grov, med 13 km rutnät. Bra för den grova trenden över flera dagar, **för grov för er strand**.') },
      { id: 'ifs', name: 'IFS-HRES 9 km', text: l('The European model, a bit finer at 9 km. A solid middle ground, but not yet tailored to the Strait.', 'Das europäische Modell, etwas feiner mit 9 km. Solider Mittelbau, aber noch nicht auf die Meerenge zugeschnitten.', 'El modelo europeo, algo más fino con 9 km. Un término medio sólido, pero aún no ajustado al Estrecho.', 'Het Europese model, iets fijner met 9 km. Een solide middenweg, maar nog niet toegesneden op de Straat.', 'Den europeiska modellen, något finare med 9 km. En stabil medelväg, men ännu inte anpassad till sundet.') },
      { id: 'wrf3', name: 'WRF 3 km', text: l('The local, high-resolution model for the Strait of Gibraltar — a 3 km grid, short-range and close to Tarifa. **This is the row the locals check first in the morning**.', 'Das lokale, hochaufgelöste Modell für die Straße von Gibraltar — 3-km-Raster, kurzfristig und nah an Tarifa. **Das ist die Zeile, auf die die Locals morgens zuerst schauen**.', 'El modelo local de alta resolución para el Estrecho de Gibraltar: malla de 3 km, a corto plazo y cerca de Tarifa. **Es la fila que los locales miran primero por la mañana**.', 'Het lokale model met hoge resolutie voor de Straat van Gibraltar — een raster van 3 km, korte termijn en dicht bij Tarifa. **Dit is de rij waar de locals ’s ochtends het eerst naar kijken**.', 'Den lokala högupplösta modellen för Gibraltar sund — 3 km rutnät, kortsiktig och nära Tarifa. **Det är raden de lokala tittar på först om morgonen**.') },
      { id: 'wrf1', name: 'WRF 1 km', text: l('Finer still, on a 1 km grid. Finer means more detailed — but **not automatically more accurate**, more on that in a moment.', 'Noch feiner, mit 1-km-Raster. Feiner heißt detaillierter — aber **nicht automatisch genauer**, dazu gleich mehr.', 'Aún más fino, con malla de 1 km. Más fino significa más detallado, pero **no automáticamente más preciso**; enseguida más sobre esto.', 'Nog fijner, met een raster van 1 km. Fijner betekent gedetailleerder — maar **niet automatisch nauwkeuriger**, zo meer daarover.', 'Ännu finare, med 1 km rutnät. Finare betyder mer detaljerat — men **inte automatiskt mer träffsäkert**, mer om det strax.') }
    ],
    modelsWhy: l('Why WRF 3 km of all of them? Because a fine, local grid is what can represent the Strait of Gibraltar in the first place — the coarse global models smooth away exactly the effects that make Tarifa what it is. But watch out for the most common mistake: **finer is not automatically more correct**. That is why you never read just one row. When two or three models roughly agree on direction, strength and timing, the day is stable. When they diverge, that is the information — the day is uncertain, and you take another look at the beach. The green stars are a nice touch. They will not carry your board to the water.', 'Warum ausgerechnet WRF 3 km? Weil ein feines, lokales Raster die Straße von Gibraltar überhaupt erst abbilden kann — die groben globalen Modelle glätten genau die Effekte weg, die Tarifa ausmachen. Aber Vorsicht vor dem häufigsten Denkfehler: **feiner ist nicht automatisch richtiger**. Deshalb liest man nie nur eine Zeile. Sagen zwei, drei Modelle ungefähr dasselbe über Richtung, Stärke und Uhrzeit, ist der Tag stabil. Laufen sie auseinander, ist genau das die Information — der Tag ist unsicher, und ihr schaut am Strand noch einmal hin. Die grünen Sternchen sind nett. Euer Board tragen sie nicht ins Wasser.', '¿Por qué precisamente WRF 3 km? Porque una malla fina y local es lo único que puede representar el Estrecho de Gibraltar; los modelos globales gruesos suavizan justo los efectos que hacen que Tarifa sea Tarifa. Pero cuidado con el error más común: **más fino no es automáticamente más acertado**. Por eso nunca se lee una sola fila. Si dos o tres modelos coinciden más o menos en dirección, intensidad y hora, el día es estable. Si se separan, esa es la información: el día es incierto, y volvéis a mirar en la playa. Las estrellas verdes están bien. Vuestra tabla no la llevan al agua.', 'Waarom juist WRF 3 km? Omdat een fijn, lokaal raster de Straat van Gibraltar überhaupt kan weergeven — de grove globale modellen vlakken juist de effecten weg die Tarifa Tarifa maken. Maar pas op voor de meestgemaakte denkfout: **fijner is niet automatisch juister**. Daarom lees je nooit maar één rij. Zeggen twee, drie modellen ongeveer hetzelfde over richting, kracht en tijdstip, dan is de dag stabiel. Lopen ze uiteen, dan is dat juist de informatie — de dag is onzeker, en jullie kijken op het strand nog eens goed. De groene sterretjes zijn leuk. Jullie board dragen ze niet het water in.', 'Varför just WRF 3 km? För att ett fint, lokalt rutnät är det som över huvud taget kan återge Gibraltar sund — de grova globala modellerna slätar ut precis de effekter som gör Tarifa till Tarifa. Men se upp för det vanligaste tankefelet: **finare är inte automatiskt mer rätt**. Därför läser man aldrig bara en rad. Säger två, tre modeller ungefär detsamma om riktning, styrka och tid, är dagen stabil. Går de isär är det just det som är informationen — dagen är osäker, och ni tittar en gång till på stranden. De gröna stjärnorna är trevliga. Er bräda bär de inte ner till vattnet.'),
    beaufort: {
      title: l('Putting the knots in proportion: the Beaufort scale', 'Die Knoten ins Verhältnis setzen: die Beaufort-Skala', 'Poner los nudos en proporción: la escala Beaufort', 'De knopen in verhouding: de Beaufort-schaal', 'Sätt knopen i proportion: Beaufort-skalan'),
      intro: l('The Beaufort scale is the official way of turning a wind speed into a picture of the sea. It describes the water, not your session.', 'Die Beaufort-Skala ist der amtliche Weg, aus einer Windgeschwindigkeit ein Bild vom Meer zu machen. Sie beschreibt das Wasser, nicht eure Session.', 'La escala Beaufort es la forma oficial de convertir una velocidad de viento en una imagen del mar. Describe el agua, no vuestra sesión.', 'De Beaufort-schaal is de officiële manier om van een windsnelheid een beeld van de zee te maken. Ze beschrijft het water, niet jullie sessie.', 'Beaufort-skalan är det officiella sättet att göra en vindhastighet till en bild av havet. Den beskriver vattnet, inte ert pass.'),
      columnKnots: l('Knots', 'Knoten', 'Nudos', 'Knopen', 'Knop'),
      columnForce: l('Beaufort', 'Beaufort', 'Beaufort', 'Beaufort', 'Beaufort'),
      columnName: l('Name', 'Bezeichnung', 'Nombre', 'Benaming', 'Benämning'),
      columnSea: l('What the sea looks like', 'So sieht das Meer aus', 'Cómo se ve el mar', 'Zo ziet de zee eruit', 'Så ser havet ut'),
      rows: [
        { id: 'bft3', knots: '7–10', force: '3', name: l('Gentle breeze', 'Schwache Brise', 'Flojo', 'Matige bries', 'Lätt bris'), sea: l('Small wavelets, crests begin to break', 'Kleine Wellen, Kämme beginnen zu brechen', 'Olas pequeñas, las crestas empiezan a romper', 'Kleine golfjes, kammen beginnen te breken', 'Små vågor, kammarna börjar brytas') },
        { id: 'bft4', knots: '11–16', force: '4', name: l('Moderate breeze', 'Mäßige Brise', 'Bonancible', 'Matige wind', 'Måttlig bris'), sea: l('Small waves, fairly frequent white horses', 'Kleine Wellen, ziemlich häufig Schaumköpfe', 'Olas pequeñas, borregos bastante frecuentes', 'Kleine golven, vrij veel schuimkoppen', 'Små vågor, ganska många vita gäss') },
        { id: 'bft5', knots: '17–21', force: '5', name: l('Fresh breeze', 'Frische Brise', 'Fresquito', 'Vrij krachtige wind', 'Frisk bris'), sea: l('Moderate waves, many white horses, some spray', 'Mäßige Wellen, viele Schaumköpfe, etwas Gischt', 'Olas moderadas, muchos borregos, algo de rociones', 'Matige golven, veel schuimkoppen, wat buiswater', 'Måttliga vågor, många vita gäss, lite stänk') },
        { id: 'bft6', knots: '22–27', force: '6', name: l('Strong breeze', 'Starker Wind', 'Fresco', 'Krachtige wind', 'Frisk vind'), sea: l('Large waves form, white foam crests everywhere, more spray', 'Größere Wellen, überall Schaumkämme, mehr Gischt', 'Se forman olas grandes, crestas de espuma por todas partes, más rociones', 'Grotere golven, overal schuimkammen, meer buiswater', 'Större vågor, skumkammar överallt, mer stänk') },
        { id: 'bft7', knots: '28–33', force: '7', name: l('Near gale', 'Steifer Wind', 'Frescachón', 'Harde wind', 'Styv kuling'), sea: l('Sea heaps up, foam blown in streaks along the wind', 'Die See türmt sich auf, Schaum legt sich in Streifen in den Wind', 'La mar se encrespa, la espuma forma estelas en dirección del viento', 'De zee stapelt op, schuim in strepen in de windrichting', 'Sjön tornar upp sig, skummet lägger sig i strimmor i vindens riktning') },
        { id: 'bft8', knots: '34–40', force: '8', name: l('Gale', 'Stürmischer Wind', 'Temporal', 'Stormachtige wind', 'Hård kuling'), sea: l('Moderately high waves, crests break into spindrift', 'Mäßig hohe Wellen, Gischt weht von den Kämmen', 'Olas de altura media, las crestas se rompen en rociones', 'Matig hoge golven, buiswater waait van de kammen', 'Måttligt höga vågor, stänk blåser från kammarna') }
      ],
      note: l('Ranges as used by the World Meteorological Organization. Which force is fun and which is too much is a question for your level, the beach and the day — and for the school if you are unsure.', 'Bereiche nach der Weltorganisation für Meteorologie. Welche Stärke Spaß macht und welche zu viel ist, hängt an eurem Niveau, dem Strand und dem Tag — und an der Schule, wenn ihr unsicher seid.', 'Rangos según la Organización Meteorológica Mundial. Qué fuerza es divertida y cuál es demasiada depende de vuestro nivel, de la playa y del día, y de la escuela si tenéis dudas.', 'Bereiken volgens de Wereld Meteorologische Organisatie. Welke kracht leuk is en welke te veel, hangt af van jullie niveau, het strand en de dag — en van de school als jullie twijfelen.', 'Intervall enligt Meteorologiska världsorganisationen. Vilken styrka som är rolig och vilken som är för mycket beror på er nivå, stranden och dagen – och på skolan om ni är osäkra.'),
      warningNote: l('When AEMET writes “fuerza 7” in a warning, this is the scale it means: **28 to 33 knots**, roughly 50 to 61 km/h.', 'Schreibt AEMET in einer Warnung „fuerza 7“, ist diese Skala gemeint: **28 bis 33 Knoten**, rund 50 bis 61 km/h.', 'Cuando AEMET escribe «fuerza 7» en un aviso, se refiere a esta escala: **de 28 a 33 nudos**, unos 50 a 61 km/h.', 'Schrijft AEMET in een waarschuwing “fuerza 7”, dan is deze schaal bedoeld: **28 tot 33 knopen**, ongeveer 50 tot 61 km/h.', 'När AEMET skriver ”fuerza 7” i en varning är det den här skalan som menas: **28 till 33 knop**, ungefär 50 till 61 km/h.')
    }
  },
  thermal: {
    label: l('Sea breeze and land breeze', 'Seewind und Landwind', 'Brisa marina y brisa de tierra', 'Zeewind en landwind', 'Sjöbris och landbris'),
    title: l('Thermal wind', 'Thermik', 'Térmica', 'Thermiek', 'Termik'),
    subtitle: l('Why the Poniente builds on clear afternoons — and the Levante does not', 'Warum der Poniente an klaren Nachmittagen zulegt — und der Levante nicht', 'Por qué el poniente se refuerza en las tardes despejadas, y el levante no', 'Waarom de poniente op heldere middagen aanzwelt — en de levante niet', 'Varför poniente tar i på klara eftermiddagar — och levanten inte'),
    intro: l('Thermal wind is the push the sun builds up over the day and takes away again in the evening. It comes from **land and water warming at different speeds**, and on every clear day it follows the same pattern.', 'Thermik ist der Schub, den die Sonne über den Tag aufbaut und abends wieder wegnimmt. Er entsteht, weil **Land und Wasser verschieden schnell warm werden**, und das läuft an jedem klaren Tag nach demselben Muster.', 'La térmica es el empuje que el sol acumula durante el día y retira de nuevo por la tarde. Nace de que **la tierra y el agua se calientan a distinta velocidad**, y en cada día despejado sigue el mismo patrón.', 'Thermiek is de duw die de zon over de dag opbouwt en ’s avonds weer wegneemt. Hij ontstaat doordat **land en water verschillend snel opwarmen**, en op elke heldere dag verloopt dat volgens hetzelfde patroon.', 'Termik är den skjuts solen bygger upp under dagen och tar bort igen på kvällen. Den uppstår för att **land och vatten värms olika snabbt**, och varje klar dag följer den samma mönster.'),
    panels: [
      {
        id: 'morning',
        label: l('Morning', 'Morgen', 'Mañana', 'Ochtend', 'Morgon'),
        title: l('Everything equally cool', 'Alles gleich kühl', 'Todo igual de fresco', 'Alles even koel', 'Allt lika svalt'),
        text: l('After the night, land and sea are at almost the same temperature. Nothing sets air in motion. Whatever blows now is **pure Poniente or Levante, with nothing added**.', 'Nach der Nacht haben Land und Meer fast dieselbe Temperatur. Es gibt nichts, was Luft in Bewegung setzt. Was jetzt weht, ist **reiner Poniente oder Levante, ohne Zugabe**.', 'Tras la noche, tierra y mar tienen casi la misma temperatura. No hay nada que ponga el aire en movimiento. Lo que sopla ahora es **poniente o levante puro, sin añadidos**.', 'Na de nacht hebben land en zee bijna dezelfde temperatuur. Er is niets dat lucht in beweging zet. Wat er nu waait, is **pure poniente of levante, zonder toegift**.', 'Efter natten har land och hav nästan samma temperatur. Inget sätter luften i rörelse. Det som blåser nu är **ren poniente eller levante, utan tillägg**.'),
        sea: l('Sea · cool', 'Meer · kühl', 'Mar · fresco', 'Zee · koel', 'Hav · svalt'),
        land: l('Land · cool', 'Land · kühl', 'Tierra · fresca', 'Land · koel', 'Land · svalt'),
        note: l('no gradient yet', 'noch kein Gefälle', 'aún sin diferencia', 'nog geen verschil', 'ännu ingen skillnad')
      },
      {
        id: 'afternoon',
        label: l('Afternoon', 'Nachmittag', 'Tarde', 'Middag', 'Eftermiddag'),
        title: l('The land pulls air in from the sea', 'Das Land zieht Luft vom Meer', 'La tierra atrae aire del mar', 'Het land trekt lucht van zee', 'Landet drar luft från havet'),
        text: l('The sun heats the land quickly and the water hardly at all: water absorbs a lot of heat without getting warmer, and mixes it down into the depths. Over the hot land the air rises. Where it rises, air is missing at ground level, and the cool air from the sea flows in — **that is the sea breeze**. It is strongest when the land is warmest, in the afternoon.', 'Die Sonne heizt das Land schnell auf, das Wasser kaum: Wasser nimmt viel Wärme auf, ohne wärmer zu werden, und mischt sie in die Tiefe. Über dem heißen Land steigt die Luft auf. Wo sie aufsteigt, fehlt am Boden Luft, und die kühle Luft vom Meer strömt nach — **das ist der Seewind**. Am stärksten ist er, wenn das Land am wärmsten ist, also am Nachmittag.', 'El sol calienta la tierra deprisa y el agua apenas: el agua absorbe mucho calor sin calentarse y lo reparte hacia el fondo. Sobre la tierra caliente el aire sube. Donde sube, falta aire a ras de suelo, y el aire fresco del mar entra a ocupar su sitio: **eso es la brisa marina**. Es más fuerte cuando la tierra está más caliente, por la tarde.', 'De zon warmt het land snel op en het water nauwelijks: water neemt veel warmte op zonder warmer te worden en mengt die naar de diepte. Boven het hete land stijgt de lucht. Waar ze stijgt, ontbreekt lucht aan de grond, en de koele lucht van zee stroomt aan — **dat is de zeewind**. Hij is het sterkst als het land het warmst is, ’s middags.', 'Solen värmer landet snabbt och vattnet knappt alls: vatten tar upp mycket värme utan att bli varmare och blandar ner den på djupet. Över det heta landet stiger luften. Där den stiger saknas luft vid marken, och den svala luften från havet strömmar in — **det är sjöbrisen**. Den är starkast när landet är varmast, på eftermiddagen.'),
        sea: l('Sea · stays cool', 'Meer · bleibt kühl', 'Mar · sigue fresco', 'Zee · blijft koel', 'Hav · håller sig svalt'),
        land: l('Land · hot', 'Land · heiß', 'Tierra · caliente', 'Land · heet', 'Land · hett'),
        note: l('sea breeze', 'Seewind', 'brisa marina', 'zeewind', 'sjöbris')
      },
      {
        id: 'evening',
        label: l('Evening and night', 'Abend und Nacht', 'Tarde-noche y noche', 'Avond en nacht', 'Kväll och natt'),
        title: l('The engine is gone', 'Der Antrieb fehlt', 'Falta el motor', 'De motor valt weg', 'Drivkraften försvinner'),
        text: l('Without sun the land cools quickly, the difference to the sea shrinks, **the sea breeze dies away**. At night it weakly reverses: the sea is now the warmer one, and a light land breeze drifts out over the water.', 'Ohne Sonne kühlt das Land schnell aus, der Unterschied zum Meer schrumpft, **der Seewind schläft ein**. Nachts kehrt es sich schwach um: Das Meer ist jetzt das Wärmere, und ein leichter Landwind zieht aufs Wasser hinaus.', 'Sin sol la tierra se enfría rápido, la diferencia con el mar se reduce y **la brisa marina se apaga**. De noche se invierte débilmente: ahora el mar es lo más cálido, y una ligera brisa de tierra sale hacia el agua.', 'Zonder zon koelt het land snel af, het verschil met de zee krimpt, **de zeewind valt stil**. ’s Nachts keert het zwak om: de zee is nu het warmst, en een lichte landwind trekt het water op.', 'Utan sol svalnar landet snabbt, skillnaden mot havet krymper, **sjöbrisen somnar**. På natten vänder det svagt: havet är nu det varmare, och en lätt landbris drar ut över vattnet.'),
        sea: l('Sea · still mild', 'Meer · noch lau', 'Mar · aún templado', 'Zee · nog lauw', 'Hav · ännu ljummet'),
        land: l('Land · cooling down', 'Land · kühlt aus', 'Tierra · se enfría', 'Land · koelt af', 'Land · svalnar'),
        note: l('light land breeze', 'schwacher Landwind', 'brisa de tierra floja', 'zwakke landwind', 'svag landbris')
      }
    ],
    consequences: [
      {
        id: 'poniente',
        title: l('What that means for the Poniente', 'Was das für den Poniente heißt', 'Qué significa para el poniente', 'Wat dat voor de poniente betekent', 'Vad det betyder för poniente'),
        text: l('The Poniente comes off the Atlantic, from the sea — the same direction the sea breeze pulls. On a clear afternoon the two add up, which is why **the Poniente often builds after midday**. When it clouds over, the sun is missing and the push stays away.', 'Der Poniente kommt vom Atlantik, also vom Meer — dieselbe Richtung, in die der Seewind zieht. An einem klaren Nachmittag addiert sich beides, deshalb **legt der Poniente nach dem Mittag oft zu**. Zieht es zu, fehlt die Sonne, und der Schub bleibt aus.', 'El poniente viene del Atlántico, del mar: la misma dirección en la que tira la brisa marina. En una tarde despejada los dos se suman, por eso **el poniente suele reforzarse después del mediodía**. Si se nubla, falta el sol y el empuje no llega.', 'De poniente komt van de Atlantische Oceaan, dus van zee — dezelfde richting als de zeewind. Op een heldere middag tellen beide op, daarom **zwelt de poniente na het middaguur vaak aan**. Trekt het dicht, dan ontbreekt de zon en blijft de duw uit.', 'Poniente kommer från Atlanten, alltså från havet — samma riktning som sjöbrisen drar. En klar eftermiddag adderas de två, därför **tar poniente ofta i efter middagstid**. Mulnar det på saknas solen och skjutsen uteblir.')
      },
      {
        id: 'levante',
        title: l('What that means for the Levante', 'Was das für den Levante heißt', 'Qué significa para el levante', 'Wat dat voor de levante betekent', 'Vad det betyder för levanten'),
        text: l('The Levante comes from the other direction, off the land. **It gets nothing from this push**; it keeps its own clock, and you read that best from Mark’s cloud over Gibraltar. Towards evening it often eases — the last session of the day is frequently the cleanest.', 'Der Levante kommt aus der anderen Richtung, vom Land. **Von diesem Schub hat er nichts**; er hat seine eigene Uhr, und die lest ihr am ehesten an Marks Wolke über Gibraltar ab. Zum Abend lässt er oft nach — die letzte Session des Tages ist häufig die sauberste.', 'El levante viene de la otra dirección, de tierra. **De este empuje no recibe nada**; tiene su propio reloj, y ese se lee mejor en la nube de Mark sobre Gibraltar. Hacia la tarde suele amainar: la última sesión del día es a menudo la más limpia.', 'De levante komt uit de andere richting, van het land. **Van deze duw krijgt hij niets**; hij heeft zijn eigen klok, en die lees je het best af aan Marks wolk boven Gibraltar. Tegen de avond zwakt hij vaak af — de laatste sessie van de dag is vaak de schoonste.', 'Levanten kommer från andra hållet, från land. **Av den här skjutsen får den inget**; den har sin egen klocka, och den läser ni bäst av på Marks moln över Gibraltar. Mot kvällen mojnar den ofta — dagens sista pass är ofta det renaste.')
      }
    ],
    bridge: {
      label: l('And in the table', 'Und in der Tabelle', 'Y en la tabla', 'En in de tabel', 'Och i tabellen'),
      text: l('Still, **thermal wind is not a number you add to the forecast**. Anyone calculating “forecast plus a few knots” in the morning is talking themselves into a good day. What you can see in the table: a Poniente that rises from 1 pm to 5 pm with little cloud. That is the thermal push the model has already counted in.', '**Eine Zahl, die ihr auf die Vorhersage draufrechnet, ist die Thermik trotzdem nicht**. Wer morgens „Prognose plus ein paar Knoten“ rechnet, rechnet sich den Tag schön. Was ihr in der Tabelle sehen könnt: einen Poniente, der von 13 bis 17 Uhr ansteigt, bei wenig Bewölkung. Das ist die Thermik, die das Modell schon mitgerechnet hat.', 'Aun así, **la térmica no es una cifra que se sume a la previsión**. Quien por la mañana calcula «previsión más unos nudos» se está haciendo trampas. Lo que sí podéis ver en la tabla: un poniente que sube de 13 a 17 h con poca nubosidad. Esa es la térmica que el modelo ya ha contado.', 'Toch is thermiek **geen getal dat je bij de verwachting optelt**. Wie ’s ochtends rekent met “verwachting plus een paar knopen”, rekent zichzelf rijk. Wat jullie in de tabel wél kunnen zien: een poniente die van 13 tot 17 uur oploopt, bij weinig bewolking. Dat is de thermiek die het model al heeft meegerekend.', 'Ändå är termik **inget tal man lägger till prognosen**. Den som på morgonen räknar ”prognos plus några knop” lurar sig själv. Vad ni kan se i tabellen: en poniente som stiger från kl. 13 till 17 med lite moln. Det är termiken som modellen redan räknat in.')
    }
  },
  tides: {
    label: l('Current in the Strait', 'Strömung in der Meerenge', 'Corriente en el Estrecho', 'Stroming in de Straat', 'Ström i sundet'),
    title: l('Tides and wind', 'Gezeiten und Wind', 'Mareas y viento', 'Getij en wind', 'Tidvatten och vind'),
    subtitle: l('What the current in the Strait does to the wind you feel in the kite', 'Was die Strömung in der Meerenge mit dem Wind macht, den ihr am Schirm spürt', 'Lo que la corriente del Estrecho hace con el viento que sentís en la cometa', 'Wat de stroming in de Straat doet met de wind die jullie in de kite voelen', 'Vad strömmen i sundet gör med vinden ni känner i kiten'),
    intro: l('The tide moves the water you ride on, and in the Strait the current runs hard: it **turns with the tide, roughly every six hours**, and in between it pulls one way. What you feel in the kite is the wind over water that is moving itself.', 'Die Tide bewegt das Wasser, auf dem ihr fahrt, und in der Meerenge läuft die Strömung kräftig: Sie **dreht mit der Tide, grob alle sechs Stunden**, und dazwischen zieht sie in eine Richtung. Was ihr am Schirm spürt, ist der Wind über einem Wasser, das sich selbst bewegt.', 'La marea mueve el agua sobre la que navegáis, y en el Estrecho la corriente tira con fuerza: **gira con la marea, más o menos cada seis horas**, y entre medias empuja en una sola dirección. Lo que sentís en la cometa es el viento sobre un agua que también se mueve.', 'Het tij beweegt het water waarop jullie varen, en in de Straat loopt de stroming stevig: ze **keert met het tij, ruwweg om de zes uur**, en trekt daartussen één kant op. Wat jullie in de kite voelen, is de wind boven water dat zelf beweegt.', 'Tidvattnet flyttar vattnet ni kör på, och i sundet går strömmen hårt: den **vänder med tidvattnet, ungefär var sjätte timme**, och däremellan drar den åt ett håll. Det ni känner i kiten är vinden över ett vatten som självt rör sig.'),
    cards: [
      {
        id: 'with-wind',
        title: l('Current with the wind', 'Strömung mit dem Wind', 'Corriente a favor del viento', 'Stroming met de wind mee', 'Ström med vinden'),
        text: l('When the current runs off downwind, the water carries you away with the wind. **The pressure in the kite drops** and everyone loses ground upwind, although the table shows the same number. That is the sign Mark describes above.', 'Zieht die Strömung in Windrichtung ab, trägt das Wasser euch mit dem Wind davon. **Der Druck im Schirm sinkt**, und alle verlieren Höhe, obwohl die Tabelle dieselbe Zahl zeigt. Das ist das Zeichen, das Mark oben beschreibt.', 'Cuando la corriente tira en la dirección del viento, el agua os lleva con él. **La presión en la cometa baja** y todos pierden altura, aunque la tabla marque el mismo número. Es la señal que Mark describe más arriba.', 'Trekt de stroming met de wind mee weg, dan draagt het water jullie met de wind mee. **De druk in de kite zakt** en iedereen verliest hoogte, terwijl de tabel hetzelfde getal laat zien. Dat is het teken dat Mark hierboven beschrijft.', 'När strömmen drar iväg i vindriktningen bär vattnet er med vinden. **Trycket i kiten sjunker** och alla tappar höjd, fast tabellen visar samma siffra. Det är tecknet Mark beskriver ovan.')
      },
      {
        id: 'against-wind',
        title: l('Current against the wind', 'Strömung gegen den Wind', 'Corriente contra el viento', 'Stroming tegen de wind in', 'Ström mot vinden'),
        text: l('When the current runs against the wind, the wind arrives stronger over the water and the water stands up: **short, steep, choppy waves**, especially in a Levante. More pressure in the kite and rougher water.', 'Läuft die Strömung gegen den Wind, kommt der Wind über dem Wasser stärker an, und das Wasser stellt sich auf: **kurze, steile, kabbelige Wellen**, bei Levante besonders. Mehr Druck im Schirm und unruhigeres Wasser.', 'Cuando la corriente va contra el viento, el viento llega con más fuerza sobre el agua y el mar se levanta: **olas cortas, empinadas y picadas**, sobre todo con levante. Más presión en la cometa y agua más revuelta.', 'Loopt de stroming tegen de wind in, dan komt de wind boven het water harder aan en gaat het water staan: **korte, steile, kabbelige golven**, vooral bij levante. Meer druk in de kite en onrustiger water.', 'Går strömmen mot vinden kommer vinden starkare över vattnet och vattnet reser sig: **korta, branta, krabba vågor**, särskilt i levante. Mer tryck i kiten och oroligare vatten.')
      }
    ],
    note: l('In the Windguru table the tide is the curve in the **bottom row**; on the beach you see it at the waterline. The modelled sea level some weather apps deliver is expressly not meant for the coast and replaces no tide table.', 'In der Windguru-Tabelle steht die Tide als Kurve in der **untersten Zeile**; am Strand seht ihr sie an der Wasserlinie. Die Meereshöhe, die manche Wetter-Apps mitliefern, ist für die Küste ausdrücklich nicht gedacht und ersetzt keine Gezeitentabelle.', 'En la tabla de Windguru la marea es la curva de la **última fila**; en la playa la veis en la línea del agua. El nivel del mar modelizado que ofrecen algunas apps meteorológicas no es apto para la costa y no sustituye a una tabla de mareas.', 'In de Windguru-tabel is het tij de curve in de **onderste rij**; op het strand zien jullie het aan de waterlijn. De gemodelleerde zeehoogte die sommige weerapps meeleveren is uitdrukkelijk niet geschikt voor de kust en vervangt geen getijdentabel.', 'I Windguru-tabellen är tidvattnet kurvan på **nedersta raden**; på stranden ser ni det vid vattenlinjen. Den modellerade havsnivån som vissa väderappar levererar är uttryckligen inte lämpad för kusten och ersätter ingen tidvattentabell.')
  },
  beach: {
    label: l('Beach, zones, tide', 'Strand, Zonen, Tide', 'Playa, zonas, marea', 'Strand, zones, tij', 'Strand, zoner, tidvatten'),
    title: l('Where to launch', 'Wo raus', 'Dónde salir', 'Waar het water op', 'Var man går ut'),
    subtitle: l('Which beach suits which wind, and what the buoys say', 'Welcher Strand zu welchem Wind passt und was die Bojen sagen', 'Qué playa va con cada viento y qué dicen las boyas', 'Welk strand bij welke wind past en wat de boeien zeggen', 'Vilken strand som passar vilken vind och vad bojarna säger'),
    intro: l('A forecast describes model values. What you find on the water, you judge yourselves — on the beach, looking at the wind, the sea state and the situation. **Do not go out alone**, especially not in demanding or offshore conditions. If you are unsure, talk to a qualified local school or to Tarifa Surf Club and go out accompanied or in a group.', 'Ein Forecast ist eine Rechnung, der Strand ist die Wirklichkeit: Richtung, Böen, Welle, Bojen, und wie voll es ist. Das schaut ihr euch an, bevor ihr aufbaut. **Geht zu zweit raus**, und wenn ihr euch bei Levante noch nicht sicher seid, geht mit dem Tarifa Surf Club: ein Kurstag oder Help 2 Kite, dann ist das Boot draußen.', 'Un parte describe valores de modelo. Lo que os encontráis en el agua lo juzgáis vosotros, en la playa, mirando el viento, el estado del mar y la situación. **No salgáis solos**, y menos con condiciones exigentes o de viento de tierra. Si tenéis dudas, hablad con una escuela local cualificada o con Tarifa Surf Club y salid acompañados o en grupo.', 'Een forecast beschrijft modelwaarden. Wat jullie op het water aantreffen, beoordelen jullie zelf — op het strand, met het oog op wind, zeegang en de situatie. **Ga niet alleen het water op**, zeker niet bij veeleisende of aflandige omstandigheden. Twijfelen jullie, praat dan met een gekwalificeerde lokale school of met Tarifa Surf Club en ga begeleid of in een groep het water op.', 'En prognos beskriver modellvärden. Vad ni möter på vattnet avgör ni själva – på stranden, med blick på vind, sjögång och läget. **Gå inte ut ensamma**, särskilt inte i krävande förhållanden eller frånlandsvind. Är ni osäkra, prata med en kvalificerad lokal skola eller med Tarifa Surf Club och gå ut med sällskap eller i grupp.'),
    whichBeachTitle: l('Which beach in which wind', 'Welcher Strand bei welchem Wind', 'Qué playa con cada viento', 'Welk strand bij welke wind', 'Vilken strand i vilken vind'),
    markFirstLevante: {
      id: 'first-levante',
      lead: l('What Mark tells guests who want to go out in Levante for the first time:', 'Was Mark Gästen sagt, die zum ersten Mal bei Levante rauswollen:', 'Lo que Mark dice a los huéspedes que quieren salir con levante por primera vez:', 'Wat Mark zegt tegen gasten die voor het eerst bij levante het water op willen:', 'Vad Mark säger till gäster som vill ut i levante för första gången:'),
      paragraphs: ll(
        ['For a first Levante I send people to Valdevaqueros. The wind sits a bit more onshore there, and the big dune at your back makes a difference. Anyone going out from the main beach at Los Lances in offshore wind has a rescue card in their wetsuit with me — without one I do not ride there. And out there I almost always rig one size smaller than it looks from the shore. The gusts here really do pack a punch.'],
        ['Beim ersten Levante schicke ich die Leute nach Valdevaqueros. Der Wind steht dort etwas auflandiger, und die große Düne im Rücken macht einen Unterschied. Wer bei ablandigem Wind am Hauptstrand in Los Lances rausgeht, hat bei mir eine Rescue-Karte im Neo — ohne die fahre ich da nicht. Und ich baue draußen fast immer eine Nummer kleiner auf, als es am Ufer aussieht. Die Böen haben es hier wirklich in sich.'],
        ['Con el primer levante mando a la gente a Valdevaqueros. Allí el viento entra algo más de mar, y la gran duna a la espalda marca la diferencia. Quien sale con viento de tierra desde la playa principal de Los Lances lleva conmigo una tarjeta de rescate en el neopreno; sin ella yo ahí no navego. Y fuera casi siempre monto una talla menos de lo que parece desde la orilla. Las rachas aquí son de verdad.'],
        ['Bij de eerste levante stuur ik mensen naar Valdevaqueros. De wind staat daar iets aanlandiger, en de grote duin in de rug maakt verschil. Wie bij aflandige wind vanaf het hoofdstrand in Los Lances het water op gaat, heeft bij mij een rescuekaart in het wetsuit — zonder vaar ik daar niet. En buiten tuig ik bijna altijd een maat kleiner op dan het vanaf de kant lijkt. De vlagen hebben het hier echt in zich.'],
        ['Vid första levanten skickar jag folk till Valdevaqueros. Vinden ligger lite mer pålands där, och den stora dynen i ryggen gör skillnad. Den som går ut från huvudstranden i Los Lances i frånlandsvind har hos mig ett räddningskort i våtdräkten – utan det kör jag inte där. Och därute riggar jag nästan alltid en storlek mindre än det ser ut från stranden. Byarna här har verkligen kraft.']
      )
    },
    spotLink: {
      before: l('For the spots and zones in detail we have a page of its own:', 'Los Lances, Valdevaqueros oder Balneario: Welcher Strand bei welchem Wind passt, zeigen wir mit Karte und Zonen auf der Seite', 'Para los spots y las zonas en detalle tenemos una página propia:', 'Voor de spots en zones in detail hebben we een eigen pagina:', 'För spots och zoner i detalj har vi en egen sida:'),
      token: 'tarifa_kitesurf_spots',
      label: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
      after: l('— which stretch works in which conditions, and where the zones run.', 'mit allem, was dort vor Ort gilt.', '— qué tramo funciona con cada situación y por dónde van las zonas.', '— welk deel bij welke situatie werkt en waar de zones lopen.', '— vilken sträcka som fungerar i vilket läge och var zonerna går.')
    },
    zonesTitle: l('What is officially regulated in Tarifa', 'Der Strand hat Zonen, und die Bojen zeigen sie euch', 'Lo que está regulado oficialmente en Tarifa', 'Wat in Tarifa officieel geregeld is', 'Vad som är officiellt reglerat i Tarifa'),
    zonesText: l('The basis is the municipal Plan de Explotación de Playas 2024–2027 of the Ayuntamiento de Tarifa. It separates different use areas on the beaches, and that separation is implemented on site through **markings, buoys and signage**.', 'Die Stadt Tarifa teilt ihre Strände im Plan de Explotación de Playas 2024–2027 in Bereiche ein: Baden, Wassersport, Schulen. Am Strand seht ihr diese Einteilung als **Bojen, Fahnen und Schilder**, und die sind das, was zählt, nicht die Karte aus dem letzten Sommer.', 'La base es el Plan de Explotación de Playas 2024–2027 del Ayuntamiento de Tarifa. Separa en las playas distintas zonas de uso, y esa separación se aplica sobre el terreno mediante **marcas, boyas y señalización**.', 'De basis is het gemeentelijke Plan de Explotación de Playas 2024–2027 van het Ayuntamiento de Tarifa. Het scheidt op de stranden verschillende gebruikszones, en die scheiding wordt ter plaatse uitgevoerd met **markeringen, boeien en bebording**.', 'Grunden är den kommunala Plan de Explotación de Playas 2024–2027 från Ayuntamiento de Tarifa. Den skiljer olika användningsområden på stränderna, och den uppdelningen genomförs på plats med **markeringar, bojar och skyltning**.'),
    priority: l('Signs, buoys and current instructions on site take priority.', 'Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.', 'La señalización, las boyas y las indicaciones vigentes sobre el terreno tienen prioridad.', 'Borden, boeien en actuele aanwijzingen ter plaatse gaan voor.', 'Skyltar, bojar och aktuella anvisningar på plats har företräde.'),
    beaches: [
      {
        id: 'valdevaqueros',
        title: l('Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros', 'Valdevaqueros'),
        text: l('The official plan designates, among other things, bathing areas, areas for free water-sport launch and exit, school areas and **separate kite and windsurf areas**. The exact boundaries are set on site by the intended markings and buoy lines.', 'Badebereiche, Ein- und Ausfahrten für Wassersport, Schulbereiche und **eigene Kite- und Windsurfbereiche**; die Grenzen dazwischen setzt die Stadt mit Bojen und Markierung.', 'El plan oficial delimita, entre otras, zonas de baño, zonas de entrada y salida libre para deportes acuáticos, zonas de escuelas y **zonas separadas para kite y windsurf**. Los límites exactos se fijan sobre el terreno con las marcas y las boyas previstas.', 'Het officiële plan wijst onder meer zwemzones, zones voor vrije in- en uitvaart van watersporters, schoolzones en **aparte kite- en windsurfzones** aan. De exacte grenzen ontstaan ter plaatse door de voorziene markering en boeienlijn.', 'Den officiella planen anger bland annat badområden, områden för fri start och landning för vattensport, skolområden samt **särskilda kite- och vindsurfingområden**. De exakta gränserna sätts på plats genom den avsedda markeringen och bojlinjen.')
      },
      {
        id: 'lances-norte',
        title: l('Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte', 'Los Lances Norte'),
        text: l('In the official plan this is **not one uniformly usable area**. There are separate bathing and water-sport areas, plus school and channel areas and ecological protection zones.', '**Kein durchgehender Kitestrand**, sondern getrennte Bade- und Wassersportbereiche, dazu Schul- und Kanalbereiche und geschützte Flächen.', 'En el plan oficial **no es una superficie de uso uniforme**. Hay zonas de baño y de deportes acuáticos separadas, además de zonas de escuelas y canales y espacios de protección ecológica.', 'In het officiële plan is dit **geen uniform bruikbaar gebied**. Er zijn gescheiden zwem- en watersportzones, plus school- en kanaalzones en ecologische beschermingszones.', 'I den officiella planen är det **ingen enhetligt användbar yta**. Det finns separata bad- och vattensportområden, dessutom skol- och kanalområden samt ekologiska skyddsytor.')
      },
      {
        id: 'lances-sur',
        title: l('Lances Sur Natural and Urbana', 'Lances Sur Natural und Urbana', 'Lances Sur Natural y Urbana', 'Lances Sur Natural en Urbana', 'Lances Sur Natural och Urbana'),
        text: l('For Lances Sur Natural and Lances Sur Urbana **we draw no kite boundary of our own**. The municipal beach plan and the markings on site are what counts.', 'Hier zeichnen wir **keine eigene Kite-Grenze**, es gelten der Strandplan und die Markierung vor Ort.', 'Para Lances Sur Natural y Lances Sur Urbana **no trazamos ningún límite de kite propio**. Lo que manda es el plan municipal de playas y la señalización sobre el terreno.', 'Voor Lances Sur Natural en Lances Sur Urbana **tekenen we geen eigen kitegrens**. Bepalend zijn het gemeentelijke strandplan en de markering ter plaatse.', 'För Lances Sur Natural och Lances Sur Urbana **ritar vi ingen egen kitegräns**. Det som gäller är den kommunala strandplanen och markeringen på plats.')
      },
      {
        id: 'lagoon',
        title: l('The Los Lances lagoon', 'Die Lagune von Los Lances', 'La laguna de Los Lances', 'De lagune van Los Lances', 'Lagunen vid Los Lances'),
        text: l('There is no leeway here. **Kitesurfing is officially prohibited** in the protected lagoon area. The Junta de Andalucía bases this on protected-area law and on the municipal beach regulations.', 'Naturschutz, und dort ist **Kitesurfen amtlich verboten**, egal wie flach und verlockend das Wasser aussieht. Die Junta de Andalucía stützt das auf das Schutzgebietsrecht und die Strandordnung der Stadt.', 'Aquí no hay margen. En la zona protegida de la laguna **el kitesurf está prohibido oficialmente**. La Junta de Andalucía se remite para ello a la normativa de espacios protegidos y a la ordenanza municipal de playas.', 'Hier is geen speelruimte. In het beschermde lagunegebied is **kitesurfen officieel verboden**. De Junta de Andalucía verwijst daarvoor naar het natuurbeschermingsrecht en naar de gemeentelijke strandverordening.', 'Här finns inget utrymme. I det skyddade lagunområdet är **kitesurfing officiellt förbjuden**. Junta de Andalucía hänvisar till lagstiftningen om skyddade områden och till den kommunala strandordningen.')
      }
    ],
    rescueBridge: {
      label: l('In an emergency', 'Im Ernstfall', 'En caso de emergencia', 'In noodgevallen', 'I ett nödläge'),
      text: l('Two providers with boats at Los Lances Norte and Valdevaqueros have your back. What their vouchers cover, where you buy the rescue cards online and how you reach the state sea rescue — **112, Salvamento Marítimo 900 202 202, VHF channel 16** — is on a page of its own.', 'Zwei Anbieter mit Booten an Los Lances Norte und Valdevaqueros sichern euch ab. Was ihre Voucher decken, wo ihr die Rescue-Karten online kauft und wie ihr die staatliche Seenotrettung erreicht — **112, Salvamento Marítimo 900 202 202, Seefunk Kanal 16** — steht auf einer eigenen Seite.', 'Dos proveedores con lanchas en Los Lances Norte y Valdevaqueros os cubren. Qué cubren sus bonos, dónde comprar las tarjetas de rescate online y cómo llegáis al salvamento marítimo estatal — **112, Salvamento Marítimo 900 202 202, canal 16 de VHF** — está en una página propia.', 'Twee aanbieders met boten bij Los Lances Norte en Valdevaqueros dekken jullie. Wat hun vouchers dekken, waar jullie de rescuekaarten online kopen en hoe jullie de staatsredding op zee bereiken — **112, Salvamento Marítimo 900 202 202, marifoonkanaal 16** — staat op een eigen pagina.', 'Två aktörer med båtar vid Los Lances Norte och Valdevaqueros täcker er. Vad deras vouchrar täcker, var ni köper räddningskorten online och hur ni når den statliga sjöräddningen — **112, Salvamento Marítimo 900 202 202, VHF-kanal 16** — står på en egen sida.'),
      linkLabel: l('Rescue and emergency when kitesurfing in Tarifa', 'Rettung und Notruf beim Kitesurfen in Tarifa', 'Rescate y emergencias en el kitesurf en Tarifa', 'Redding en noodoproep bij het kitesurfen in Tarifa', 'Räddning och nödsamtal vid kitesurfing i Tarifa'),
      token: 'tarifa_kitesurf_rescue'
    }
  },
  partner: {
    eyebrow: l('AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club'),
    title: l('With the club', 'Mit dem Club', 'Con el club', 'Met de club', 'Med klubben'),
    subtitle: l('Why we send you to Tarifa Surf Club', 'Material in der Wohnung, Kaution geregelt, bei Levante ein Boot', 'Por qué os mandamos a Tarifa Surf Club', 'Waarom we jullie naar Tarifa Surf Club sturen', 'Varför vi skickar er till Tarifa Surf Club'),
    intro: l('Mark and I met ten years ago at a Tarifa Surf Club kitecamp, and our shared love of kitesurfing grew into a close friendship. Today Mark runs the club with Simone and we see each other almost every day. What that means for you in practice:', 'Mark und ich haben uns vor zehn Jahren in einem Kitecamp des Tarifa Surf Club kennengelernt; aus unserer gemeinsamen Liebe zum Kitesurfen wurde eine enge Freundschaft. Heute führt Mark den Club mit Simone, und wir sehen uns fast täglich. Für euch heißt das:', 'Mark y yo nos conocimos hace diez años en un kitecamp de Tarifa Surf Club; de nuestro amor compartido por el kitesurf nació una amistad muy estrecha. Hoy Mark dirige el club con Simone y nos vemos casi a diario. Para vosotros, eso significa en la práctica:', 'Mark en ik leerden elkaar tien jaar geleden kennen tijdens een kitecamp van Tarifa Surf Club; uit onze gedeelde liefde voor kitesurfen groeide een hechte vriendschap. Tegenwoordig leidt Mark de club samen met Simone en zien we elkaar bijna dagelijks. Voor jullie betekent dat in de praktijk:', 'Mark och jag lärde känna varandra för tio år sedan på ett av Tarifa Surf Clubs kitecamp; vår gemensamma kärlek till kitesurfingen växte till en nära vänskap. I dag driver Mark klubben tillsammans med Simone och vi ses nästan varje dag. För er betyder det i praktiken:'),
    benefits: [
      {
        id: 'equipment-before-arrival',
        title: l('Gear, sorted before you arrive', 'Das Material liegt bei Ankunft in der Wohnung', 'Material resuelto antes de llegar', 'Materiaal, geregeld vóór aankomst', 'Utrustning, ordnad före ankomst'),
        text: l('You can buy or rent kitesurf gear through Tarifa Surf Club before you arrive. The coordination happens in advance. **The gear is waiting in the accommodation when you arrive**.', 'Sagt uns vor der Anreise, was ihr leihen oder kaufen wollt, wir klären es mit dem Club. Wenn ihr ankommt, **steht es in der Wohnung**.', 'Podéis comprar o alquilar material de kitesurf a través de Tarifa Surf Club antes de llegar. La coordinación se hace con antelación. **El material os espera en el alojamiento cuando llegáis**.', 'Kitesurfmateriaal kunnen jullie vóór aankomst via Tarifa Surf Club kopen of huren. De afstemming gebeurt vooraf. **Het materiaal staat bij aankomst direct in de accommodatie**.', 'Kitesurfutrustning kan ni köpa eller hyra genom Tarifa Surf Club före ankomst. Samordningen sker i förväg. **Utrustningen står direkt i boendet när ni kommer**.')
      },
      {
        id: 'deposit',
        title: l('The rental deposit', 'Die Kaution übernehmen wir', 'La fianza del alquiler', 'De borg bij huur', 'Depositionen vid hyra'),
        text: l('Anyone renting gear normally leaves a deposit with the provider. For AMARA guests, **we place that deposit with Tarifa Surf Club**.', 'Wer beim Club Material leiht, hinterlegt normalerweise eine Kaution. **Für unsere Gäste hinterlegen wir sie**.', 'Quien alquila material normalmente deja una fianza al proveedor. Para los huéspedes de AMARA, **esa fianza la depositamos nosotros en Tarifa Surf Club**.', 'Wie materiaal huurt, betaalt normaal gesproken een borg aan de aanbieder. Voor AMARA-gasten **stellen wij die borg bij Tarifa Surf Club**.', 'Den som hyr utrustning lämnar normalt en deposition hos leverantören. För AMARA-gäster **lämnar vi den depositionen hos Tarifa Surf Club**.')
      },
      {
        id: 'guided-options',
        title: l('Course, kitecamp or an accompanied session', 'Kurs, Camp oder Help 2 Kite, mit Boot', 'Curso, kitecamp o sesión acompañada', 'Cursus, kitecamp of begeleide sessie', 'Kurs, kitecamp eller ett ledsagat pass'),
        text: l('If you are still unsure or do not want to go out alone: a course, a kitecamp or an accompanied session are there for exactly that. With booked services of Tarifa Surf Club — kite course, kitecamp, Help to Kite — **sea rescue is included**. With gear rental alone, it is not.', 'Wer bei Levante nicht allein raus will, geht mit dem Club: Kurs, Kitecamp oder Help 2 Kite, und **bei allen dreien ist das Rescue-Boot dabei**. Beim reinen Materialverleih ist es das nicht.', 'Si todavía no os sentís seguros o no queréis salir solos: para eso están el curso, el kitecamp o una sesión acompañada. En los servicios contratados con Tarifa Surf Club (curso de kite, kitecamp, Help to Kite) **el rescate está incluido**. Con el simple alquiler de material, no.', 'Wie nog onzeker is of niet alleen het water op wil: daar zijn een cursus, een kitecamp of een begeleide sessie voor. Bij geboekte diensten van Tarifa Surf Club — kitecursus, kitecamp, Help to Kite — **is de reddingsdienst inbegrepen**. Bij alleen materiaalhuur niet.', 'Den som fortfarande är osäker eller inte vill gå ut ensam: kurs, kitecamp eller ett ledsagat pass finns till för just det. Vid bokade tjänster hos Tarifa Surf Club – kitekurs, kitecamp, Help to Kite – **ingår sjöräddningen**. Vid enbart hyra av utrustning gör den det inte.')
      }
    ],
    voice: {
      name: 'Mark',
      role: markRole,
      quote: {
        id: 'overlooked',
        lead: l('What gets overlooked most often in Tarifa:', 'Was in Tarifa am häufigsten übersehen wird:', 'Lo que más se pasa por alto en Tarifa:', 'Wat in Tarifa het vaakst over het hoofd wordt gezien:', 'Vad som oftast förbises i Tarifa:'),
        paragraphs: ll(
          ['The gear. In a proper Levante we ride 4s to 6s here — sizes most people don’t have sitting in the cellar at home. If you’re missing something there, we’re happy to provide it all.'],
          ['Das Material. Bei einem richtigen Levante fahren wir hier Vierer bis Sechser — Größen, die die meisten nicht im Keller liegen haben. Wenn euch da etwas fehlt, stellen wir euch gerne alles zur Verfügung.'],
          ['El material. Con un levante de verdad, aquí navegamos con 4 a 6 metros, tallas que la mayoría no tiene guardadas en el trastero. Si os falta algo, os lo prestamos todo encantados.'],
          ['Het materiaal. Bij een echte levante varen we hier 4 tot 6 — maten die de meesten niet in de kelder hebben liggen. Ontbreekt jullie daar iets, dan stellen we het graag allemaal ter beschikking.'],
          ['Utrustningen. I en riktig levante kör vi 4:or till 6:or här — storlekar som de flesta inte har liggande i källaren. Saknar ni något där, ställer vi gärna allt till förfogande.']
        )
      }
    },
    partnerHref: 'https://tarifasurfclub.com/',
    partnerLabel: l('Visit Tarifa Surf Club', 'Tarifa Surf Club besuchen', 'Visitar Tarifa Surf Club', 'Bezoek Tarifa Surf Club', 'Besök Tarifa Surf Club'),
    contactLabel: l('Ask AMARA about your kite stay', 'Nachricht an AMARA', 'Preguntar a AMARA sobre vuestro viaje de kite', 'Vraag AMARA naar jullie kiteverblijf', 'Fråga AMARA om er kitevistelse'),
    contactMessage: l('Hello AMARA, we would like to coordinate a Tarifa kite stay. Travel dates: / Guests: / Experience: / Equipment, lessons or camp:', 'Hallo AMARA, wir möchten einen Kite-Aufenthalt in Tarifa abstimmen. Reisedaten: / Gäste: / Erfahrung: / Material, Kurse oder Camp:', 'Hola AMARA, queremos coordinar una estancia de kite en Tarifa. Fechas: / Huéspedes: / Experiencia: / Material, cursos o camp:', 'Hallo AMARA, we willen een kiteverblijf in Tarifa afstemmen. Reisdata: / Gasten: / Ervaring: / Materiaal, lessen of camp:', 'Hej AMARA, vi vill samordna en kitevistelse i Tarifa. Resedatum: / Gäster: / Erfarenhet: / Utrustning, kurser eller camp:')
  },
  related: {
    eyebrow: l('Next', 'Weiter', 'Seguir', 'Verder', 'Vidare'),
    title: l('On to the spots, the beginner guide and the overview', 'Die Spots, der Einstieg und der Überblick', 'Seguid con los spots, la iniciación y la visión de conjunto', 'Verder naar de spots, de beginnersgids en het overzicht', 'Vidare till spotsen, nybörjarguiden och översikten'),
    links: [
      {
        id: 'spots',
        token: 'tarifa_kitesurf_spots',
        title: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
        text: l('Which stretch works in which conditions, and where the zones run.', 'Los Lances, Valdevaqueros, Balneario: welcher Strand bei welchem Wind, mit Karte und Zonen.', 'Qué tramo funciona con cada situación y por dónde van las zonas.', 'Welk deel bij welke situatie werkt en waar de zones lopen.', 'Vilken sträcka som fungerar i vilket läge och var zonerna går.')
      },
      {
        id: 'beginner-guide',
        token: 'tarifa_kitesurf_beginner_guide',
        title: l('Learning to kite in Tarifa', 'Kiten lernen in Tarifa', 'Aprender a hacer kite en Tarifa', 'Leren kiten in Tarifa', 'Lära sig kita i Tarifa'),
        text: l('The first steps, from the flat learning lagoon to your first sessions on the water.', 'Die ersten Schritte, vom flachen Lernrevier bis zu den ersten Sessions auf dem Wasser.', 'Los primeros pasos, de la laguna llana de aprendizaje a las primeras sesiones en el agua.', 'De eerste stappen, van het vlakke leerwater tot je eerste sessies op het water.', 'De första stegen, från det platta lärvattnet till dina första pass på vattnet.')
      },
      {
        id: 'hub',
        token: 'tarifa_kitesurfing_hub',
        title: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'),
        text: l('The overview: school, kitecamp, equipment and everything around them.', 'Warum Tarifa, ein Tag hier, Kiten lernen, Übernachten bei AMARA.', 'La visión de conjunto: escuela, kitecamp, material y todo lo demás.', 'Het overzicht: school, kitecamp, materiaal en de rest.', 'Översikten: skola, kitecamp, utrustning och resten.')
      }
    ]
  },
  closing: {
    eyebrow: l('Stay at AMARA', 'Übernachten bei AMARA', 'Alojarse en AMARA', 'Overnachten bij AMARA', 'Övernatta hos AMARA'),
    title: l('From bed to water, no detour', 'Die Wohnung mit Blick auf Los Lances', 'De la cama al agua, sin rodeos', 'Van bed naar water, zonder omweg', 'Från sängen till vattnet, utan omväg'),
    text: l('At AMARA Family & Surf we coordinate stay, arrival and kite logistics in one conversation. **Gear can be waiting in the accommodation when you arrive**; the coordination is personal and happens in advance. Check availability as soon as your dates take shape.', 'Wenn der Wind kommt, **seht ihr es von der Terrasse**. Der Strand liegt zu Fuß unter euch, Auto und Boards stehen in der Tiefgarage, und das Material liegt nach Absprache schon in der Wohnung.', 'En AMARA Family & Surf coordinamos estancia, llegada y logística de kite en una sola conversación. **El material puede estar esperándoos en el alojamiento a vuestra llegada**; la coordinación es personal y previa. Consultad la disponibilidad en cuanto vuestras fechas tomen forma.', 'Bij AMARA Family & Surf stemmen we verblijf, aankomst en kitelogistiek in één gesprek af. **Materiaal kan bij aankomst in de accommodatie klaarstaan**; de afstemming is persoonlijk en gebeurt vooraf. Bekijk de beschikbaarheid zodra jullie data vorm krijgen.', 'På AMARA Family & Surf samordnar vi boende, ankomst och kitelogistik i ett samtal. **Utrustning kan stå klar i boendet när ni kommer**; samordningen är personlig och sker i förväg. Kontrollera tillgängligheten så snart era datum tar form.'),
    stayLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Visa AMARA Family & Surf'),
    availabilityLabel: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Bekijk beschikbaarheid', 'Se tillgänglighet'),
    finalLine: l('Forecasts are only calculations. Official warnings come first, and on the beach the signs, buoys and instructions on site apply.', 'Forecasts sind nur Berechnungen. Amtliche Warnungen zählen zuerst, und am Strand gelten Beschilderung, Bojen und die Anweisungen vor Ort.', 'Los pronósticos son solo cálculos. Los avisos oficiales van primero, y en la playa mandan las señales, las boyas y las indicaciones del lugar.', 'Voorspellingen zijn alleen berekeningen. Officiële waarschuwingen gaan voor, en op het strand gelden de borden, boeien en aanwijzingen ter plaatse.', 'Prognoser är bara beräkningar. Officiella varningar går först, och på stranden gäller skyltar, bojar och anvisningarna på plats.')
  }
};
