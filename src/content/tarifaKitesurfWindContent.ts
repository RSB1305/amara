import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });
const ll = (en: string[], de: string[], es: string[], nl: string[], sv: string[]): LocalizedTextList => ({ en, de, es, nl, sv });

/** A quoted voice on the page: a named person speaking in the first person, never AMARA's own rule. */
export interface TarifaKitesurfVoiceQuote {
  id: string;
  lead: LocalizedText;
  paragraphs: LocalizedTextList;
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
  };
  live: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    loading: LocalizedText;
    today: LocalizedText;
    tomorrow: LocalizedText;
    high: LocalizedText;
    low: LocalizedText;
    rain: LocalizedText;
    issued: LocalizedText;
    unavailableTitle: LocalizedText;
    unavailableText: LocalizedText;
    briefingEyebrow: LocalizedText;
    forecastHeading: LocalizedText;
    pending: LocalizedText;
    teaserTitle: LocalizedText;
    teaserText: LocalizedText;
    teaserLabel: LocalizedText;
    windHeading: LocalizedText;
    windText: LocalizedText;
    waveHeading: LocalizedText;
    waveText: LocalizedText;
    skyHeading: LocalizedText;
    skyText: LocalizedText;
    checkHeading: LocalizedText;
    checkText: LocalizedText;
    meanWind: LocalizedText;
    gusts: LocalizedText;
    from: LocalizedText;
    totalCloud: LocalizedText;
    lowCloud: LocalizedText;
    midCloud: LocalizedText;
    highCloud: LocalizedText;
    radiation: LocalizedText;
    totalWave: LocalizedText;
    windWave: LocalizedText;
    primarySwell: LocalizedText;
    secondarySwell: LocalizedText;
    height: LocalizedText;
    direction: LocalizedText;
    period: LocalizedText;
    source: LocalizedText;
    models: LocalizedText;
    fetched: LocalizedText;
    forecastTime: LocalizedText;
    attribution: LocalizedText;
    aemetLabel: LocalizedText;
  };
  windguru: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    sourceNote: LocalizedText;
    linkLabel: LocalizedText;
    linkHref: string;
    example: {
      title: LocalizedText;
      note: LocalizedText;
      hour: string;
      hourLabel: LocalizedText;
      moreTitle: LocalizedText;
      columns: Array<{ id: string; value: LocalizedText }>;
    };
    terms: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    resolutionTitle: LocalizedText;
    resolutionText: LocalizedText;
    modelNote: LocalizedText;
  };
  localWind: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    paragraphs: LocalizedText[];
    quote: { name: string; role: LocalizedText; imageAlt: LocalizedText; paragraphs: LocalizedTextList };
    spotLink: { before: LocalizedText; token: LinkToken; label: LocalizedText; after: LocalizedText };
  };
  safety: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    priority: LocalizedText;
    checks: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    lagoon: LocalizedText;
    tides: { title: LocalizedText; text: LocalizedText };
    rescueEyebrow: LocalizedText;
    rescueHeading: LocalizedText;
    rescueTitle: LocalizedText;
    rescueIntro: LocalizedText;
    providers: Array<{ id: string; name: string; text: LocalizedText; href: string; label: LocalizedText }>;
    rescueQuote: { name: string; role: LocalizedText; lead: LocalizedText; paragraphs: LocalizedTextList };
    rescueContext: LocalizedText;
    rescuePlanB: LocalizedText;
    emergencyTitle: LocalizedText;
    emergencyText: LocalizedText;
    emergencyNumbers: Array<{ id: string; label: LocalizedText; value: string }>;
    aemetText: LocalizedText;
    aemetHref: string;
    aemetLabel: LocalizedText;
  };
  partner: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    imageAlt: LocalizedText;
    imageCaption: LocalizedText;
    benefits: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    voice: { name: string; role: LocalizedText; title: LocalizedText; imageAlt: LocalizedText; quotes: TarifaKitesurfVoiceQuote[] };
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
  'Kitesurfing in Tarifa: wind, weather & safety | AMARA',
  'Kitesurfen in Tarifa: Wind, Wetter & Sicherheit | AMARA',
  'Kitesurf en Tarifa: viento, tiempo y seguridad | AMARA',
  'Kitesurfen in Tarifa: wind, weer & veiligheid | AMARA',
  'Kitesurfing i Tarifa: vind, väder & säkerhet | AMARA'
);

const description = l('How to read a forecast before you believe it: understanding Windguru, Poniente and Levante, the official rules in Tarifa and the emergency channels that count when it matters.', 'Wie ihr einen Forecast lest, bevor ihr ihn glaubt: Windguru verstehen, Poniente und Levante, die amtlichen Regeln in Tarifa und die Notrufwege, die im Ernstfall zählen.', 'Cómo leer un parte antes de creérselo: entender Windguru, poniente y levante, las normas oficiales de Tarifa y las vías de emergencia que cuentan cuando hace falta.', 'Hoe je een forecast leest voordat je hem gelooft: Windguru begrijpen, poniente en levante, de officiële regels in Tarifa en de noodkanalen die tellen als het erop aankomt.', 'Hur ni läser en prognos innan ni tror på den: förstå Windguru, poniente och levante, de officiella reglerna i Tarifa och nödvägarna som räknas när det gäller.');

export const tarifaKitesurfWindSeo: AmaraAuthoringSeo = {
  version: '2026-09-03-tarifa-wind-kitesurfing-v3.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: '/images/robert-amara-host.jpg',
  article: {
    datePublished: '2026-09-03',
    dateModified: '2026-09-03',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorSlug: 'staying-with-us'
  },
  languages: {
    en: { title: title.en, description: description.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: title.de, description: description.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: title.es, description: description.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: title.nl, description: description.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: title.sv, description: description.sv, robots: 'index, follow', canonical: 'auto' }
  }
};

export const tarifaKitesurfWindContent: TarifaKitesurfWindContent = {
  token: 'tarifa_wind_kitesurfing_authority',
  hero: {
    eyebrow: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'),
    title: l('Wind, weather and safety', 'Wind, Wetter und Sicherheit', 'Viento, tiempo y seguridad', 'Wind, weer en veiligheid', 'Vind, väder och säkerhet'),
    subtitle: l('How to read a forecast before you believe it', 'Wie ihr einen Forecast lest, bevor ihr ihn glaubt', 'Cómo leer un parte antes de creérselo', 'Hoe je een forecast leest voordat je hem gelooft', 'Hur ni läser en prognos innan ni tror på den'),
    lead: l('Tarifa has two defining wind patterns: Poniente from the west and Levante from the east. On the water they feel completely different — in the models you read on Windguru in the morning, they sit side by side in the same table. Here we show you how to read that table: what mean wind and gusts actually say, why a finer model grid does not automatically mean a better forecast at your beach, and what wave, swell and period mean for the day. Plus the official rules that apply in Tarifa and the emergency channels that count when it matters. You make the decision on the beach. With a better eye for what you see there.', 'Tarifa hat zwei prägende Windlagen: Poniente aus Westen und Levante aus Osten. Am Wasser fühlen sie sich völlig unterschiedlich an — in den Modellen, die ihr morgens auf Windguru lest, stehen sie nebeneinander in derselben Tabelle. Hier zeigen wir euch, wie man diese Tabelle liest: was Mittelwind und Böen tatsächlich aussagen, warum ein feineres Modellraster nicht automatisch die bessere Vorhersage an eurem Strand bedeutet, und was Welle, Swell und Periode für den Tag bedeuten. Dazu die amtlichen Regeln, die in Tarifa gelten, und die Notrufwege, die im Ernstfall zählen. Die Entscheidung trefft ihr am Strand. Mit besserem Blick auf das, was ihr dort seht.', 'Tarifa tiene dos vientos que lo marcan todo: el poniente, del oeste, y el levante, del este. En el agua se sienten completamente distintos; en los modelos que leéis por la mañana en Windguru aparecen uno al lado del otro en la misma tabla. Aquí os enseñamos a leer esa tabla: qué dicen de verdad el viento medio y las rachas, por qué una malla más fina no significa automáticamente una previsión mejor en vuestra playa, y qué suponen la ola, el mar de fondo y el periodo para el día. Además, las normas oficiales que rigen en Tarifa y las vías de emergencia que cuentan cuando hace falta. La decisión la tomáis en la playa. Con mejor ojo para lo que veis allí.', 'Tarifa heeft twee bepalende windsituaties: poniente uit het westen en levante uit het oosten. Op het water voelen ze totaal verschillend — in de modellen die jullie ’s ochtends op Windguru lezen, staan ze naast elkaar in dezelfde tabel. Hier laten we zien hoe je die tabel leest: wat gemiddelde wind en vlagen werkelijk zeggen, waarom een fijner modelraster niet automatisch een betere verwachting voor jullie strand betekent, en wat golf, swell en periode voor de dag betekenen. Daarbij de officiële regels die in Tarifa gelden en de noodkanalen die tellen als het erop aankomt. De beslissing nemen jullie op het strand. Met een betere blik op wat jullie daar zien.', 'Tarifa har två vindlägen som präglar allt: poniente från väst och levante från öst. På vattnet känns de helt olika – i modellerna ni läser på Windguru på morgonen står de bredvid varandra i samma tabell. Här visar vi hur man läser den tabellen: vad medelvind och byar faktiskt säger, varför ett finare modellrutnät inte automatiskt betyder en bättre prognos på er strand, och vad våg, swell och period betyder för dagen. Dessutom de officiella regler som gäller i Tarifa och de nödvägar som räknas när det gäller. Beslutet fattar ni på stranden. Med bättre blick för det ni ser där.'),
    imageAlt: l('The Tarifa Surf Club team with the club flag on the beach', 'Das Team des Tarifa Surf Club mit der Vereinsflagge am Strand', 'El equipo de Tarifa Surf Club con la bandera del club en la playa', 'Het team van Tarifa Surf Club met de clubvlag op het strand', 'Tarifa Surf Clubs team med klubbflaggan på stranden'),
    updated: l('Checked September 2026', 'Geprüft im September 2026', 'Revisado en septiembre de 2026', 'Gecontroleerd in september 2026', 'Kontrollerat i september 2026'),
    note: l('Model values, official guidance and Robert’s personal observations are marked separately.', 'Modellwerte, amtliche Hinweise und Roberts persönliche Beobachtungen sind getrennt gekennzeichnet.', 'Los valores del modelo, la información oficial y las observaciones personales de Robert se distinguen con claridad.', 'Modelwaarden, officiële informatie en Roberts persoonlijke observaties zijn apart gemarkeerd.', 'Modellvärden, officiell information och Roberts personliga iakttagelser anges var för sig.')
  },
  live: {
    eyebrow: l('Official', 'Amtlich', 'Oficial', 'Officieel', 'Officiellt'),
    title: l('What the Spanish weather service reports for today', 'Was die spanische Wetterbehörde für heute meldet', 'Qué dice hoy la agencia meteorológica española', 'Wat de Spaanse weerdienst voor vandaag meldt', 'Vad den spanska vädertjänsten rapporterar för i dag'),
    intro: l('AEMET is Spain’s official weather service. Its warnings and its municipal forecast have a priority of their own: they rank above any model calculation and above everything that follows on this page. When AEMET issues a warning for the Strait, that is the information that counts.', 'Die AEMET ist der offizielle spanische Wetterdienst. Ihre Warnungen und ihre Gemeindevorhersage haben eine eigene Priorität: Sie stehen über jeder Modellrechnung und über allem, was auf dieser Seite folgt. Wenn AEMET eine Warnung für den Estrecho ausgibt, ist das die Information, die zählt.', 'AEMET es el servicio meteorológico oficial de España. Sus avisos y su previsión municipal tienen prioridad propia: están por encima de cualquier cálculo de modelo y de todo lo que sigue en esta página. Si AEMET emite un aviso para el Estrecho, esa es la información que cuenta.', 'AEMET is de officiële Spaanse weerdienst. Zijn waarschuwingen en zijn gemeenteverwachting hebben een eigen prioriteit: ze staan boven elke modelberekening en boven alles wat op deze pagina volgt. Geeft AEMET een waarschuwing af voor de Straat, dan is dat de informatie die telt.', 'AEMET är Spaniens officiella vädertjänst. Dess varningar och kommunprognos har en egen prioritet: de står över varje modellberäkning och över allt som följer på den här sidan. När AEMET utfärdar en varning för sundet är det den informationen som räknas.'),
    loading: l('Loading the official AEMET forecast …', 'Amtliche AEMET-Vorhersage wird geladen …', 'Cargando la previsión oficial de AEMET …', 'Officiële AEMET-verwachting wordt geladen …', 'AEMET:s officiella prognos laddas …'),
    today: l('Today', 'Heute', 'Hoy', 'Vandaag', 'I dag'),
    tomorrow: l('Tomorrow', 'Morgen', 'Mañana', 'Morgen', 'I morgon'),
    high: l('High', 'Höchstwert', 'Máxima', 'Maximum', 'Högsta'),
    low: l('Low', 'Tiefstwert', 'Mínima', 'Minimum', 'Lägsta'),
    rain: l('Rain probability', 'Regenwahrscheinlichkeit', 'Probabilidad de lluvia', 'Neerslagkans', 'Regnsannolikhet'),
    issued: l('Forecast issued', 'Vorhersage ausgegeben', 'Previsión emitida', 'Verwachting uitgegeven', 'Prognosen utfärdad'),
    unavailableTitle: l('The official AEMET forecast is currently unavailable', 'Die amtliche AEMET-Vorhersage ist gerade nicht verfügbar', 'La previsión oficial de AEMET no está disponible ahora mismo', 'De officiële AEMET-verwachting is op dit moment niet beschikbaar', 'AEMET:s officiella prognos är inte tillgänglig just nu'),
    unavailableText: l('We do not replace missing data with estimates. The official forecast and warnings remain available directly from AEMET.', 'Wir ersetzen fehlende Daten nicht durch Schätzwerte. Die amtliche Vorhersage und die Warnungen bleiben direkt bei AEMET erreichbar.', 'No sustituimos datos ausentes por estimaciones. La previsión oficial y los avisos siguen disponibles directamente en AEMET.', 'We vervangen ontbrekende data niet door schattingen. De officiële verwachting en de waarschuwingen blijven rechtstreeks bij AEMET beschikbaar.', 'Vi ersätter inte saknade data med uppskattningar. Den officiella prognosen och varningarna finns kvar direkt hos AEMET.'),
    briefingEyebrow: l('Today in Tarifa', 'Heute in Tarifa', 'Hoy en Tarifa', 'Vandaag in Tarifa', 'I dag i Tarifa'),
    forecastHeading: l('What the models are calculating right now', 'Was die Modelle gerade rechnen', 'Qué están calculando los modelos ahora mismo', 'Wat de modellen nu berekenen', 'Vad modellerna räknar just nu'),
    pending: l('Modelled values from Open-Meteo for the current model hour, read for you by fixed rules: what the numbers for wind, gusts, wave and swell mean. Nothing here chooses a spot, a kite size or a session for you.', 'Modellwerte aus Open-Meteo für die aktuelle Modellstunde, eingeordnet nach festen Regeln: was die Zahlen für Wind, Böen, Welle und Swell bedeuten. Nichts davon wählt für euch Spot, Kitegröße oder Session.', 'Valores del modelo de Open-Meteo para la hora actual del modelo, leídos con reglas fijas: qué significan las cifras de viento, rachas, ola y mar de fondo. Nada de esto elige por vosotros el spot, la talla de cometa ni la sesión.', 'Modelwaarden van Open-Meteo voor het huidige modeluur, geduid met vaste regels: wat de getallen voor wind, vlagen, golf en swell betekenen. Niets hiervan kiest voor jullie een spot, kitemaat of sessie.', 'Modellvärden från Open-Meteo för den aktuella modelltimmen, tolkade med fasta regler: vad siffrorna för vind, byar, våg och swell betyder. Inget av det väljer spot, kitestorlek eller pass åt er.'),
    teaserTitle: l('The current values have a page of their own', 'Die aktuellen Werte stehen auf einer eigenen Seite', 'Los valores actuales tienen su propia página', 'De actuele waarden staan op een eigen pagina', 'De aktuella värdena har en egen sida'),
    teaserText: l('This page explains how wind, gusts, wave and swell are read. The live values — the official AEMET warnings and forecast, the Open-Meteo briefing with its explanation and Windguru’s table — sit on a separate page that stays light and loads fast.', 'Diese Seite erklärt, wie man Wind, Böen, Welle und Swell liest. Die Live-Werte — amtliche AEMET-Warnungen und -Vorhersage, das Open-Meteo-Briefing mit Einordnung und die Windguru-Tabelle — stehen auf einer eigenen Seite, die schlank bleibt und schnell lädt.', 'Esta página explica cómo se leen viento, rachas, ola y mar de fondo. Los valores en directo (avisos y previsión oficiales de AEMET, el briefing de Open-Meteo con su explicación y la tabla de Windguru) están en una página aparte, ligera y rápida.', 'Deze pagina legt uit hoe je wind, vlagen, golf en swell leest. De livewaarden — officiële AEMET-waarschuwingen en -verwachting, de Open-Meteo-briefing met duiding en de tabel van Windguru — staan op een eigen pagina die licht blijft en snel laadt.', 'Den här sidan förklarar hur man läser vind, byar, våg och swell. Livevärdena – officiella AEMET-varningar och -prognos, Open-Meteo-briefingen med förklaring och Windgurus tabell – ligger på en egen sida som är lätt och laddar snabbt.'),
    teaserLabel: l('Open the current values', 'Zu den aktuellen Werten', 'Ver los valores actuales', 'Naar de actuele waarden', 'Till de aktuella värdena'),
    windHeading: l('Wind and gusts', 'Wind und Böen', 'Viento y rachas', 'Wind en vlagen', 'Vind och byar'),
    windText: l('The modelled value at 10 metres, the calculated direction, and the gust peak — which is the maximum of the previous hour, not a value for one moment.', 'Der Modellwert für 10 Meter Höhe, die berechnete Richtung, und die Böenspitze — die ist das Maximum der vorangegangenen Stunde, nicht ein Wert für einen Moment.', 'El valor del modelo a 10 metros de altura, la dirección calculada y el pico de racha, que es el máximo de la hora anterior, no un valor de un instante.', 'De modelwaarde op 10 meter hoogte, de berekende richting en de vlaagpiek — dat is het maximum van het voorgaande uur, geen waarde voor één moment.', 'Modellvärdet på 10 meters höjd, den beräknade riktningen och bytoppen – som är maxvärdet för den föregående timmen, inte ett värde för ett ögonblick.'),
    waveHeading: l('Wave and swell', 'Welle und Swell', 'Ola y mar de fondo', 'Golf en swell', 'Våg och swell'),
    waveText: l('Total wave, the wind-driven part and the swell, each with direction and period. Wind wave and swell can arrive from different directions at the same time — that is the difference between an orderly day and a messy one.', 'Gesamtwelle, der windgetriebene Anteil und der Swell, jeweils mit Richtung und Periode. Windwelle und Swell können gleichzeitig aus verschiedenen Richtungen kommen — das ist der Unterschied zwischen einem geordneten und einem unruhigen Tag.', 'Ola total, la parte generada por el viento y el mar de fondo, cada uno con dirección y periodo. La ola de viento y el mar de fondo pueden llegar a la vez desde direcciones distintas: esa es la diferencia entre un día ordenado y uno revuelto.', 'Totale golf, het door wind opgewekte deel en de swell, elk met richting en periode. Windgolf en swell kunnen tegelijk uit verschillende richtingen komen — dat is het verschil tussen een geordende en een rommelige dag.', 'Total våg, den vinddrivna delen och swellen, var och en med riktning och period. Vindvåg och swell kan komma från olika håll samtidigt – det är skillnaden mellan en ordnad och en rörig dag.'),
    skyHeading: l('Clouds and sun', 'Wolken und Sonne', 'Nubes y sol', 'Wolken en zon', 'Moln och sol'),
    skyText: l('Weather context. A sun icon says nothing about whether a thermal wind will set in.', 'Wetterkontext. Ein Sonnen-Icon sagt nichts darüber, ob Thermik einsetzt.', 'Contexto meteorológico. Un icono de sol no dice nada sobre si entrará la térmica.', 'Weercontext. Een zonicoon zegt niets over of er thermiek op gang komt.', 'Väderkontext. En solsymbol säger ingenting om huruvida termiken sätter in.'),
    checkHeading: l('Check before the water', 'Vor dem Wasser prüfen', 'Comprobad antes de entrar al agua', 'Controleer vóór het water', 'Kontrollera före vattnet'),
    checkText: l('Actual direction, gusts, sea state, buoys, signs and official warnings. Forecast values describe a model hour; they are never a riding approval.', 'Tatsächliche Richtung, Böen, Seegang, Bojen, Beschilderung und amtliche Warnungen. Forecasts sind Modellrechnungen, keine Fahrfreigabe.', 'Dirección real, rachas, estado del mar, boyas, señales y avisos oficiales. Los valores del parte describen una hora de modelo; nunca autorizan una sesión.', 'Werkelijke richting, vlagen, zeegang, boeien, borden en officiële waarschuwingen. Forecastwaarden beschrijven een modeluur; ze geven nooit toestemming om te varen.', 'Verklig riktning, byar, sjögång, bojar, skyltar och officiella varningar. Prognosvärden beskriver en modelltimme; de är aldrig ett godkännande att köra.'),
    meanWind: l('10 m wind', 'Wind auf 10 m', 'Viento a 10 m', 'Wind op 10 m', 'Vind på 10 m'),
    gusts: l('Gust peak', 'Böenspitze', 'Pico de racha', 'Vlaagpiek', 'Bytopp'),
    from: l('from', 'aus', 'desde', 'uit', 'från'),
    totalCloud: l('Total cloud', 'Gesamtbewölkung', 'Nubosidad total', 'Totale bewolking', 'Total molnighet'),
    lowCloud: l('Low cloud', 'Tiefe Wolken', 'Nubes bajas', 'Lage bewolking', 'Låga moln'),
    midCloud: l('Mid cloud', 'Mittlere Wolken', 'Nubes medias', 'Middelbare bewolking', 'Mellanmoln'),
    highCloud: l('High cloud', 'Hohe Wolken', 'Nubes altas', 'Hoge bewolking', 'Höga moln'),
    radiation: l('Radiation (hourly mean)', 'Einstrahlung (Stundenmittel)', 'Radiación (media horaria)', 'Straling (uurgemiddelde)', 'Instrålning (timmedel)'),
    totalWave: l('Total wave', 'Gesamtwelle', 'Ola total', 'Totale golf', 'Total våg'),
    windWave: l('Wind wave', 'Windwelle', 'Ola de viento', 'Windgolf', 'Vindvåg'),
    primarySwell: l('Primary swell', 'Primärer Swell', 'Mar de fondo principal', 'Primaire swell', 'Primär swell'),
    secondarySwell: l('Secondary swell', 'Sekundärswell', 'Mar de fondo secundario', 'Secundaire swell', 'Sekundär swell'),
    height: l('height', 'Höhe', 'altura', 'hoogte', 'höjd'),
    direction: l('from', 'aus', 'desde', 'uit', 'från'),
    period: l('period', 'Periode', 'periodo', 'periode', 'period'),
    source: l('Weather data', 'Wetterdaten', 'Datos meteorológicos', 'Weerdata', 'Väderdata'),
    models: l('Model', 'Modell', 'Modelo', 'Model', 'Modell'),
    fetched: l('fetched', 'abgerufen', 'obtenido', 'opgehaald', 'hämtat'),
    forecastTime: l('Forecast valid for', 'Vorhersage gültig für', 'Previsión válida para', 'Verwachting geldig voor', 'Prognos giltig för'),
    attribution: l('Weather data: Open-Meteo', 'Wetterdaten: Open-Meteo', 'Datos meteorológicos: Open-Meteo', 'Weerdata: Open-Meteo', 'Väderdata: Open-Meteo'),
    aemetLabel: l('Open official AEMET forecast and warnings', 'Amtliche AEMET-Vorhersage und Warnungen öffnen', 'Abrir previsión y avisos oficiales de AEMET', 'Open de officiële AEMET-verwachting en waarschuwingen', 'Öppna AEMET:s officiella prognos och varningar')
  },
  windguru: {
    eyebrow: l('The tool', 'Werkzeug', 'La herramienta', 'Het gereedschap', 'Verktyget'),
    title: l('The table everyone looks at in the morning', 'Die Tabelle, auf die morgens alle schauen', 'La tabla que todos miran por la mañana', 'De tabel waar iedereen ’s ochtends naar kijkt', 'Tabellen alla tittar på om morgonen'),
    intro: l('Windguru is the standard tool in Tarifa, and a good one. It shows several weather models side by side in a very dense table. That density is exactly what makes it hard to read at first. So we take the rows apart once.', 'Windguru ist in Tarifa das Standardwerkzeug, und es ist ein gutes. Es zeigt mehrere Wettermodelle nebeneinander, in einer sehr dichten Tabelle. Genau diese Dichte macht es am Anfang schwer zu lesen. Wir nehmen die Zeilen deshalb einmal auseinander.', 'Windguru es la herramienta estándar en Tarifa, y es buena. Muestra varios modelos meteorológicos uno junto a otro en una tabla muy densa. Precisamente esa densidad la hace difícil de leer al principio. Por eso desmontamos las filas una a una.', 'Windguru is in Tarifa het standaardgereedschap, en een goed gereedschap. Het toont meerdere weermodellen naast elkaar in een heel dichte tabel. Juist die dichtheid maakt het in het begin lastig te lezen. Daarom halen we de rijen één keer uit elkaar.', 'Windguru är standardverktyget i Tarifa, och ett bra sådant. Det visar flera vädermodeller bredvid varandra i en mycket tät tabell. Just den tätheten gör den svårläst i början. Därför plockar vi isär raderna en gång.'),
    sourceNote: l('The linked Tarifa view is external. Its availability, models and presentation are managed by Windguru.', 'Die verlinkte Tarifa-Ansicht ist extern. Verfügbarkeit, Modelle und Darstellung liegen bei Windguru.', 'La vista de Tarifa enlazada es externa. Windguru gestiona su disponibilidad, modelos y presentación.', 'De gekoppelde Tarifa-weergave is extern. Windguru beheert beschikbaarheid, modellen en presentatie.', 'Den länkade Tarifa-vyn är extern. Windguru hanterar tillgänglighet, modeller och presentation.'),
    linkLabel: l('Open Windguru: Tarifa', 'Windguru: Tarifa öffnen', 'Abrir Windguru: Tarifa', 'Open Windguru: Tarifa', 'Öppna Windguru: Tarifa'),
    linkHref: 'https://www.windguru.cz/976270',
    example: {
      title: l('The annotated example row', 'Die beschriftete Beispielzeile', 'La fila de ejemplo, campo por campo', 'De voorbeeldrij, veld voor veld', 'Exempelraden, fält för fält'),
      note: l('Example values for one model hour, chosen to explain the fields. Not a current forecast.', 'Beispielwerte für eine Modellstunde, gewählt zur Erklärung der Felder. Keine aktuelle Vorhersage.', 'Valores de ejemplo para una hora de modelo, elegidos para explicar los campos. No es una previsión actual.', 'Voorbeeldwaarden voor één modeluur, gekozen om de velden uit te leggen. Geen actuele verwachting.', 'Exempelvärden för en modelltimme, valda för att förklara fälten. Ingen aktuell prognos.'),
      hour: '14h',
      hourLabel: l('Hour', 'Uhrzeit', 'Hora', 'Uur', 'Klockslag'),
      moreTitle: l('Rows you may also see', 'Zeilen, die ihr außerdem sehen könnt', 'Filas que también podéis ver', 'Rijen die jullie ook kunnen zien', 'Rader ni också kan se'),
      columns: [
        { id: 'resolution', value: l('WRF 3 km', 'WRF 3 km', 'WRF 3 km', 'WRF 3 km', 'WRF 3 km') },
        { id: 'wind', value: l('18 kn', '18 kn', '18 kn', '18 kn', '18 kn') },
        { id: 'gusts', value: l('24 kn', '24 kn', '24 kn', '24 kn', '24 kn') },
        { id: 'direction', value: l('W · 270°', 'W · 270°', 'O · 270°', 'W · 270°', 'V · 270°') },
        { id: 'wave-height', value: l('1.2 m', '1,2 m', '1,2 m', '1,2 m', '1,2 m') },
        { id: 'period', value: l('7 s', '7 s', '7 s', '7 s', '7 s') },
        { id: 'clouds', value: l('10 · 20 · 30 %', '10 · 20 · 30 %', '10 · 20 · 30 %', '10 · 20 · 30 %', '10 · 20 · 30 %') }
      ]
    },
    terms: [
      {
        id: 'resolution',
        title: l('Model line and grid width', 'Modellzeile und Rasterweite', 'Línea de modelo y malla', 'Modelregel en rasterbreedte', 'Modellrad och rutnät'),
        text: l('1 km, 3 km, 9 km or 13 km: the approximate grid width of the model. A smaller number means a finer grid. It does not mean “more accurate”.', '1 km, 3 km, 9 km oder 13 km: die ungefähre Rasterweite des Modells. Kleinere Zahl heißt feineres Raster. Sie heißt nicht „genauer“.', '1 km, 3 km, 9 km o 13 km: la anchura aproximada de la malla del modelo. Un número menor significa una malla más fina. No significa «más preciso».', '1 km, 3 km, 9 km of 13 km: de globale rasterbreedte van het model. Een kleiner getal betekent een fijner raster. Het betekent niet “nauwkeuriger”.', '1 km, 3 km, 9 km eller 13 km: modellens ungefärliga rutnätsbredd. Ett mindre tal betyder ett finare rutnät. Det betyder inte ”mer träffsäkert”.')
      },
      {
        id: 'wind',
        title: l('Wind / mean wind', 'Wind / Mittelwind', 'Viento / viento medio', 'Wind / gemiddelde wind', 'Vind / medelvind'),
        text: l('The base wind the model calculates for this hour. It is not the force you feel in the kite.', 'Der Grundwind, den das Modell für diese Stunde berechnet. Das ist nicht die Kraft, die ihr am Kite spürt.', 'El viento base que el modelo calcula para esa hora. No es la fuerza que sentís en la cometa.', 'De basiswind die het model voor dit uur berekent. Dat is niet de kracht die jullie in de kite voelen.', 'Grundvinden som modellen beräknar för den här timmen. Det är inte kraften ni känner i kiten.')
      },
      {
        id: 'gusts',
        title: l('Gusts', 'Böen', 'Rachas', 'Vlagen', 'Byar'),
        text: l('The calculated short peaks above the mean. A wide gap between the two values means the model expects a lot of variation.', 'Die berechneten kurzfristigen Spitzen darüber. Ein großer Abstand zwischen beiden Werten heißt: Das Modell rechnet mit viel Schwankung.', 'Los picos breves calculados por encima de la media. Una gran diferencia entre ambos valores significa que el modelo prevé mucha variación.', 'De berekende korte pieken boven het gemiddelde. Een groot verschil tussen beide waarden betekent: het model rekent met veel schommeling.', 'De beräknade korta topparna över medelvinden. Ett stort avstånd mellan de två värdena betyder att modellen räknar med mycket variation.')
      },
      {
        id: 'direction',
        title: l('Wind direction', 'Windrichtung', 'Dirección del viento', 'Windrichting', 'Vindriktning'),
        text: l('Wind is named after where it comes from — a north wind comes from the north. Direction alone says nothing yet about your beach.', 'Wind wird danach benannt, woher er kommt — Nordwind kommt aus Norden. Aus der Richtung allein ergibt sich noch keine Aussage über euren Strand.', 'El viento se nombra por el lugar de donde viene: el viento del norte viene del norte. La dirección por sí sola no dice nada todavía sobre vuestra playa.', 'Wind wordt genoemd naar waar hij vandaan komt — noordenwind komt uit het noorden. Uit de richting alleen volgt nog niets over jullie strand.', 'Vinden får sitt namn efter varifrån den kommer – nordanvind kommer från norr. Riktningen ensam säger ännu inget om er strand.')
      },
      {
        id: 'wave-height',
        title: l('Wave height', 'Wellenhöhe', 'Altura de ola', 'Golfhoogte', 'Våghöjd'),
        text: l('The significant wave value of the wave model. It says nothing about a single wave or the shorebreak.', 'Der signifikante Wellenwert des Wellenmodells. Sagt nichts über eine einzelne Welle oder den Shorebreak.', 'El valor de ola significativa del modelo de oleaje. No dice nada sobre una ola concreta ni sobre la rompiente en la orilla.', 'De significante golfwaarde van het golfmodel. Zegt niets over één golf of de shorebreak.', 'Vågmodellens signifikanta vågvärde. Säger inget om en enskild våg eller strandbrytningen.')
      },
      {
        id: 'period',
        title: l('Period', 'Periode', 'Periodo', 'Periode', 'Period'),
        text: l('The time in seconds between the modelled waves. It has nothing to do with height.', 'Der Zeitabstand in Sekunden zwischen den modellierten Wellen. Hat nichts mit der Höhe zu tun.', 'El tiempo en segundos entre las olas modelizadas. No tiene nada que ver con la altura.', 'De tijd in seconden tussen de gemodelleerde golven. Heeft niets met de hoogte te maken.', 'Tiden i sekunder mellan de modellerade vågorna. Har inget med höjden att göra.')
      },
      {
        id: 'clouds',
        title: l('Cloud layers', 'Wolkenschichten', 'Capas de nubes', 'Wolkenlagen', 'Molnlager'),
        text: l('Low, mid and high — shown separately. Few clouds are no proof of thermal wind.', 'Niedrig, mittel, hoch — getrennt ausgewiesen. Wenig Wolken ist kein Beleg für Thermik.', 'Bajas, medias y altas, indicadas por separado. Pocas nubes no demuestran que haya térmica.', 'Laag, midden, hoog — apart weergegeven. Weinig bewolking is geen bewijs voor thermiek.', 'Låga, mellan och höga – redovisade var för sig. Lite moln är inget bevis för termik.')
      },
      {
        id: 'peak-period',
        title: l('Peak period', 'Peak-Periode', 'Periodo de pico', 'Piekperiode', 'Toppperiod'),
        text: l('The period of the most energetic part of the spectrum. Not a guaranteed gap between two particular waves.', 'Die Periode des energiereichsten Anteils. Kein garantierter Abstand zwischen zwei konkreten Wellen.', 'El periodo de la parte con más energía. No es una distancia garantizada entre dos olas concretas.', 'De periode van het energierijkste deel. Geen gegarandeerde afstand tussen twee concrete golven.', 'Perioden för den mest energirika delen. Inget garanterat avstånd mellan två konkreta vågor.')
      },
      {
        id: 'wind-wave',
        title: l('Wind wave', 'Windwelle', 'Ola de viento', 'Windgolf', 'Vindvåg'),
        text: l('The sea state generated by local and regional wind. Only one part of the overall sea state.', 'Der Seegang, den der lokale und regionale Wind erzeugt. Nur ein Teil des gesamten Seegangs.', 'El oleaje que genera el viento local y regional. Solo una parte del estado total del mar.', 'De zeegang die de lokale en regionale wind opwekt. Slechts een deel van de totale zeegang.', 'Sjögången som den lokala och regionala vinden skapar. Bara en del av den totala sjögången.')
      },
      {
        id: 'swell',
        title: l('Swell', 'Swell', 'Mar de fondo', 'Swell', 'Swell'),
        text: l('Wave energy that travels in from far away. It can run from a completely different direction than the wind wave at the same time.', 'Wellenenergie, die von weit her kommt. Kann gleichzeitig aus einer ganz anderen Richtung laufen als die Windwelle.', 'Energía de olas que llega desde muy lejos. Puede venir a la vez de una dirección totalmente distinta a la de la ola de viento.', 'Golfenergie die van ver komt. Kan tegelijk uit een heel andere richting lopen dan de windgolf.', 'Vågenergi som kommer långt bortifrån. Kan samtidigt löpa från en helt annan riktning än vindvågen.')
      }
    ],
    resolutionTitle: l('The point most people get wrong', 'Der Punkt, den die meisten falsch verstehen', 'El punto que casi todos entienden mal', 'Het punt dat de meesten verkeerd begrijpen', 'Punkten de flesta missförstår'),
    resolutionText: l('For this region Windguru lists, among others, WRF 1 km for Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS-HRES 9 km and GFS 13 km. The kilometre figure describes how finely a model resolves space — a finer grid can represent smaller structures such as the Strait at all. It does not follow that the forecast at your beach is more correct. Grid width is one property among several.', 'Windguru führt für diese Region unter anderem WRF 1 km für Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS-HRES 9 km und GFS 13 km. Die Kilometerzahl beschreibt, wie fein ein Modell den Raum auflöst — ein feineres Raster kann kleinere Strukturen wie die Meerenge überhaupt erst abbilden. Daraus folgt aber nicht, dass die Vorhersage an eurem Strand richtiger ist. Rasterweite ist eine Eigenschaft von mehreren.', 'Para esta zona, Windguru muestra, entre otros, WRF 1 km para Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS-HRES 9 km y GFS 13 km. La cifra en kilómetros describe con qué finura resuelve el espacio un modelo: una malla más fina puede representar estructuras más pequeñas, como el Estrecho. De ahí no se deduce que la previsión en vuestra playa sea más acertada. La anchura de malla es una propiedad entre varias.', 'Voor deze regio toont Windguru onder meer WRF 1 km voor Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS-HRES 9 km en GFS 13 km. Het aantal kilometers beschrijft hoe fijn een model de ruimte oplost — een fijner raster kan kleinere structuren zoals de Straat überhaupt pas weergeven. Daaruit volgt niet dat de forecast op jullie strand juister is. Rasterbreedte is één eigenschap van meerdere.', 'För den här regionen visar Windguru bland annat WRF 1 km för Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS-HRES 9 km och GFS 13 km. Kilometertalet beskriver hur fint en modell löser upp rummet – ett finare rutnät kan över huvud taget återge mindre strukturer som sundet. Av det följer inte att prognosen på er strand är mer korrekt. Rutnätsbredd är en egenskap bland flera.'),
    modelNote: l('The more useful approach: read several models side by side. When two or three roughly agree on direction, strength and timing, the picture is consistent. When they diverge, you can see the uncertainty — and that is real information, not noise. The green stars are a friendly hint. They will not carry your board to the water.', 'Der brauchbarere Umgang: mehrere Modelle nebeneinander lesen. Wenn zwei oder drei in Richtung, Stärke und zeitlichem Verlauf ungefähr übereinstimmen, ist das Bild konsistent. Wenn sie auseinanderlaufen, seht ihr die Unsicherheit — und das ist eine echte Information, keine Störung. Die grünen Sternchen sind ein netter Hinweis. Euer Board tragen sie nicht ins Wasser.', 'El enfoque más útil: leer varios modelos uno al lado del otro. Si dos o tres coinciden más o menos en dirección, intensidad y evolución, el cuadro es consistente. Si se separan, veis la incertidumbre, y eso es información real, no una molestia. Las estrellitas verdes son una pista simpática. Vuestra tabla no la llevan al agua.', 'De bruikbaardere aanpak: meerdere modellen naast elkaar lezen. Als twee of drie ongeveer overeenkomen in richting, kracht en verloop, is het beeld consistent. Als ze uiteenlopen, zien jullie de onzekerheid — en dat is echte informatie, geen storing. De groene sterretjes zijn een vriendelijke hint. Jullie board dragen ze niet het water in.', 'Det mer användbara sättet: läs flera modeller bredvid varandra. När två eller tre ungefär stämmer överens i riktning, styrka och tidsförlopp är bilden konsekvent. När de går isär ser ni osäkerheten – och det är riktig information, inte brus. De gröna stjärnorna är en vänlig hint. Er bräda bär de inte ner till vattnet.')
  },
  localWind: {
    eyebrow: l('Wind in Tarifa', 'Wind in Tarifa', 'El viento en Tarifa', 'Wind in Tarifa', 'Vind i Tarifa'),
    title: l('Two wind patterns, two completely different days', 'Zwei Windlagen, zwei völlig verschiedene Tage', 'Dos vientos, dos días completamente distintos', 'Twee windsituaties, twee totaal verschillende dagen', 'Två vindlägen, två helt olika dagar'),
    paragraphs: [
      l('Poniente comes from the west, off the Atlantic. On the main beaches it is side-onshore, usually runs more evenly and typically brings waves with it. Levante comes from the east. On the main beaches such as Los Lances it mostly blows side-offshore and is known for strength and gustiness. That is not the same everywhere; stretches like Balneario or Palmones sit differently. So wind direction alone yields neither a choice of spot nor a safety assessment.', 'Poniente kommt aus Westen, vom Atlantik her. Er ist an den Hauptstränden side-onshore — schräg auflandig —, läuft meist gleichmäßiger und bringt typischerweise Welle mit. Levante kommt aus Osten. An den Hauptstränden wie Los Lances weht er meist side-offshore — schräg ablandig — und ist für Stärke und Böigkeit bekannt. Das gilt nicht überall gleich; Abschnitte wie Balneario oder Palmones liegen anders. Aus der Windrichtung allein ergibt sich deshalb weder eine Spotwahl noch eine Sicherheitseinschätzung.', 'El poniente viene del oeste, del Atlántico. En las playas principales entra side-onshore, de lado y de mar, suele ser más regular y normalmente trae ola. El levante viene del este. En las playas principales como Los Lances sopla casi siempre side-offshore, de lado y de tierra, y es conocido por su fuerza y sus rachas. No es igual en todas partes; tramos como Balneario o Palmones están orientados de otra manera. Por eso, de la dirección del viento por sí sola no sale ni una elección de spot ni una valoración de seguridad.', 'Poniente komt uit het westen, van de Atlantische Oceaan. Op de hoofdstranden staat hij side-onshore — schuin aanlandig —, loopt meestal gelijkmatiger en brengt doorgaans golven mee. Levante komt uit het oosten. Op de hoofdstranden zoals Los Lances waait hij meestal side-offshore — schuin aflandig — en staat hij bekend om kracht en vlagerigheid. Dat geldt niet overal hetzelfde; delen als Balneario of Palmones liggen anders. Uit de windrichting alleen volgt daarom noch een spotkeuze, noch een veiligheidsinschatting.', 'Poniente kommer från väst, från Atlanten. På huvudstränderna är den side-onshore – snett pålands –, löper oftast jämnare och för vanligtvis med sig vågor. Levante kommer från öst. På huvudstränder som Los Lances blåser den för det mesta side-offshore – snett frånlands – och är känd för styrka och byighet. Det gäller inte överallt på samma sätt; sträckor som Balneario eller Palmones ligger annorlunda. Av vindriktningen ensam följer därför varken ett spotval eller en säkerhetsbedömning.'),
      l('Thermal wind is the part that gets overestimated most often. The sun warms land and water to different degrees, and that can influence or strengthen the local wind. It is not a number you add to a model value. Anyone calculating “forecast plus X knots” in the morning is talking themselves into something.', 'Thermik ist der Teil, der am häufigsten überschätzt wird. Sonne erwärmt Land und Wasser unterschiedlich stark, und das kann den lokalen Wind beeinflussen oder verstärken. Es ist keine Zahl, die man auf einen Modellwert addiert. Wer morgens rechnet „Prognose plus X Knoten“, rechnet sich etwas zurecht.', 'La térmica es la parte que más se sobrestima. El sol calienta la tierra y el agua de forma distinta, y eso puede influir en el viento local o reforzarlo. No es una cifra que se sume a un valor del modelo. Quien por la mañana calcula «previsión más X nudos» se está haciendo trampas.', 'Thermiek is het onderdeel dat het vaakst wordt overschat. De zon verwarmt land en water ongelijk, en dat kan de lokale wind beïnvloeden of versterken. Het is geen getal dat je bij een modelwaarde optelt. Wie ’s ochtends rekent met “verwachting plus X knopen”, rekent zichzelf rijk.', 'Termiken är den del som oftast överskattas. Solen värmer land och vatten olika mycket, och det kan påverka eller förstärka den lokala vinden. Det är inget tal man lägger till ett modellvärde. Den som på morgonen räknar ”prognos plus X knop” lurar sig själv.')
    ],
    quote: {
      name: 'Robert',
      role: l('Host at AMARA', 'Gastgeber bei AMARA', 'Anfitrión de AMARA', 'Host bij AMARA', 'Värd på AMARA'),
      imageAlt: l('Robert Böhmer, host at AMARA', 'Robert Böhmer, Gastgeber bei AMARA', 'Robert Böhmer, anfitrión de AMARA', 'Robert Böhmer, host bij AMARA', 'Robert Böhmer, värd på AMARA'),
      paragraphs: ll(
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
      )
    },
    spotLink: {
      before: l('For the spots and zones in detail we have a page of its own:', 'Für die Spots und Zonen im Detail haben wir eine eigene Seite:', 'Para los spots y las zonas en detalle tenemos una página propia:', 'Voor de spots en zones in detail hebben we een eigen pagina:', 'För spots och zoner i detalj har vi en egen sida:'),
      token: 'tarifa_kitesurf_spots',
      label: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
      after: l('— which stretch works in which conditions, and where the zones run.', '— welcher Abschnitt bei welcher Lage funktioniert und wo die Zonen verlaufen.', '— qué tramo funciona con cada situación y por dónde van las zonas.', '— welk deel bij welke situatie werkt en waar de zones lopen.', '— vilken sträcka som fungerar i vilket läge och var zonerna går.')
    }
  },
  safety: {
    eyebrow: l('On site', 'Vor Ort', 'Sobre el terreno', 'Ter plaatse', 'På plats'),
    title: l('What is officially regulated in Tarifa', 'Was in Tarifa amtlich geregelt ist', 'Lo que está regulado oficialmente en Tarifa', 'Wat in Tarifa officieel geregeld is', 'Vad som är officiellt reglerat i Tarifa'),
    intro: l('The basis is the municipal Plan de Explotación de Playas 2024–2027 of the Ayuntamiento de Tarifa. It separates different use areas on the beaches, and that separation is implemented on site through markings, buoys and signage.', 'Grundlage ist der kommunale Plan de Explotación de Playas 2024–2027 des Ayuntamiento de Tarifa. Er trennt an den Stränden verschiedene Nutzungsbereiche, und diese Trennung wird vor Ort über Markierungen, Bojen und Beschilderung umgesetzt.', 'La base es el Plan de Explotación de Playas 2024–2027 del Ayuntamiento de Tarifa. Separa en las playas distintas zonas de uso, y esa separación se aplica sobre el terreno mediante marcas, boyas y señalización.', 'De basis is het gemeentelijke Plan de Explotación de Playas 2024–2027 van het Ayuntamiento de Tarifa. Het scheidt op de stranden verschillende gebruikszones, en die scheiding wordt ter plaatse uitgevoerd met markeringen, boeien en bebording.', 'Grunden är den kommunala Plan de Explotación de Playas 2024–2027 från Ayuntamiento de Tarifa. Den skiljer olika användningsområden på stränderna, och den uppdelningen genomförs på plats med markeringar, bojar och skyltning.'),
    priority: l('Signs, buoys and current instructions on site take priority.', 'Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.', 'La señalización, las boyas y las indicaciones vigentes sobre el terreno tienen prioridad.', 'Borden, boeien en actuele aanwijzingen ter plaatse gaan voor.', 'Skyltar, bojar och aktuella anvisningar på plats har företräde.'),
    checks: [
      {
        id: 'no-solo',
        title: l('What we want you to take with you', 'Was wir euch mitgeben', 'Lo que queremos que os llevéis', 'Wat we jullie meegeven', 'Vad vi vill skicka med er'),
        text: l('A forecast describes model values. What you find on the water, you judge yourselves — on the beach, looking at the wind, the sea state and the situation. Do not go out alone, especially not in demanding or offshore conditions. If you are unsure, talk to a qualified local school or to Tarifa Surf Club and go out accompanied or in a group.', 'Ein Forecast beschreibt Modellwerte. Was ihr am Wasser vorfindet, entscheidet ihr selbst — und zwar am Strand, mit Blick auf Wind, Seegang und die Lage. Geht nicht allein raus, besonders nicht bei anspruchsvollen oder ablandigen Bedingungen. Wenn ihr unsicher seid, sprecht mit einer qualifizierten lokalen Schule oder mit dem Tarifa Surf Club und geht begleitet oder in der Gruppe aufs Wasser.', 'Un parte describe valores de modelo. Lo que os encontráis en el agua lo juzgáis vosotros, en la playa, mirando el viento, el estado del mar y la situación. No salgáis solos, y menos con condiciones exigentes o de viento de tierra. Si tenéis dudas, hablad con una escuela local cualificada o con Tarifa Surf Club y salid acompañados o en grupo.', 'Een forecast beschrijft modelwaarden. Wat jullie op het water aantreffen, beoordelen jullie zelf — op het strand, met het oog op wind, zeegang en de situatie. Ga niet alleen het water op, zeker niet bij veeleisende of aflandige omstandigheden. Twijfelen jullie, praat dan met een gekwalificeerde lokale school of met Tarifa Surf Club en ga begeleid of in een groep het water op.', 'En prognos beskriver modellvärden. Vad ni möter på vattnet avgör ni själva – på stranden, med blick på vind, sjögång och läget. Gå inte ut ensamma, särskilt inte i krävande förhållanden eller frånlandsvind. Är ni osäkra, prata med en kvalificerad lokal skola eller med Tarifa Surf Club och gå ut med sällskap eller i grupp.')
      },
      {
        id: 'zones',
        title: l('Valdevaqueros, Los Lances Norte and Lances Sur', 'Valdevaqueros, Los Lances Norte und Lances Sur', 'Valdevaqueros, Los Lances Norte y Lances Sur', 'Valdevaqueros, Los Lances Norte en Lances Sur', 'Valdevaqueros, Los Lances Norte och Lances Sur'),
        text: l('Valdevaqueros: the official plan designates, among other things, bathing areas, areas for free water-sport launch and exit, school areas and separate kite and windsurf areas. The exact boundaries are set on site by the intended markings and buoy lines. Los Lances Norte: in the official plan this is not one uniformly usable area. There are separate bathing and water-sport areas, plus school and channel areas and ecological protection zones. Lances Sur: for Lances Sur Natural and Lances Sur Urbana we draw no kite boundary of our own. The municipal beach plan and the markings on site are what counts.', 'Valdevaqueros: Der amtliche Plan weist unter anderem Badebereiche, Bereiche für freie Wassersport-Ein- und -Ausfahrt, Schulbereiche sowie gesonderte Kite- und Windsurfbereiche aus. Die genauen Grenzen entstehen vor Ort durch die vorgesehene Markierung und Bojenführung. Los Lances Norte: Im amtlichen Plan ist das keine einheitlich nutzbare Fläche. Es gibt getrennte Bade- und Wassersportbereiche, dazu Schul- und Kanalbereiche sowie ökologische Schutzflächen. Lances Sur: Für Lances Sur Natural und Lances Sur Urbana zeichnen wir keine eigene Kite-Grenze. Maßgeblich sind der kommunale Strandplan und die Markierung vor Ort.', 'Valdevaqueros: el plan oficial delimita, entre otras, zonas de baño, zonas de entrada y salida libre para deportes acuáticos, zonas de escuelas y zonas separadas para kite y windsurf. Los límites exactos se fijan sobre el terreno con las marcas y las boyas previstas. Los Lances Norte: en el plan oficial no es una superficie de uso uniforme. Hay zonas de baño y de deportes acuáticos separadas, además de zonas de escuelas y canales y espacios de protección ecológica. Lances Sur: para Lances Sur Natural y Lances Sur Urbana no trazamos ningún límite de kite propio. Lo que manda es el plan municipal de playas y la señalización sobre el terreno.', 'Valdevaqueros: het officiële plan wijst onder meer zwemzones, zones voor vrije in- en uitvaart van watersporters, schoolzones en aparte kite- en windsurfzones aan. De exacte grenzen ontstaan ter plaatse door de voorziene markering en boeienlijn. Los Lances Norte: in het officiële plan is dit geen uniform bruikbaar gebied. Er zijn gescheiden zwem- en watersportzones, plus school- en kanaalzones en ecologische beschermingszones. Lances Sur: voor Lances Sur Natural en Lances Sur Urbana tekenen we geen eigen kitegrens. Bepalend zijn het gemeentelijke strandplan en de markering ter plaatse.', 'Valdevaqueros: den officiella planen anger bland annat badområden, områden för fri start och landning för vattensport, skolområden samt särskilda kite- och vindsurfingområden. De exakta gränserna sätts på plats genom den avsedda markeringen och bojlinjen. Los Lances Norte: i den officiella planen är det ingen enhetligt användbar yta. Det finns separata bad- och vattensportområden, dessutom skol- och kanalområden samt ekologiska skyddsytor. Lances Sur: för Lances Sur Natural och Lances Sur Urbana ritar vi ingen egen kitegräns. Det som gäller är den kommunala strandplanen och markeringen på plats.')
      }
    ],
    lagoon: l('The Los Lances lagoon: there is no leeway here. Kitesurfing is officially prohibited in the protected lagoon area. The Junta de Andalucía bases this on protected-area law and on the municipal beach regulations.', 'Die Lagune von Los Lances: Hier gibt es keinen Spielraum. Im geschützten Lagunenbereich ist Kitesurfen amtlich verboten. Die Junta de Andalucía verweist dafür auf das Schutzgebietsrecht und auf die kommunale Strandordnung.', 'La laguna de Los Lances: aquí no hay margen. En la zona protegida de la laguna el kitesurf está prohibido oficialmente. La Junta de Andalucía se remite para ello a la normativa de espacios protegidos y a la ordenanza municipal de playas.', 'De lagune van Los Lances: hier is geen speelruimte. In het beschermde lagunegebied is kitesurfen officieel verboden. De Junta de Andalucía verwijst daarvoor naar het natuurbeschermingsrecht en naar de gemeentelijke strandverordening.', 'Lagunen vid Los Lances: här finns inget utrymme. I det skyddade lagunområdet är kitesurfing officiellt förbjuden. Junta de Andalucía hänvisar till lagstiftningen om skyddade områden och till den kommunala strandordningen.'),
    tides: {
      title: l('The factor no forecast shows', 'Der Faktor, der in keinem Forecast steht', 'El factor que no aparece en ningún parte', 'De factor die in geen enkele forecast staat', 'Faktorn som inte finns i någon prognos'),
      text: l('The tides. At high tide the beach at Los Lances becomes noticeably narrower, and so does the space for launching and landing. No wind app shows that, and the modelled sea level some weather APIs deliver is expressly not suitable for the coast — it does not replace a tide table. So factor in the tide separately, just as you do with the wind.', 'Die Gezeiten. Bei Flut wird der Strand in Los Lances deutlich schmaler, und damit auch der Platz zum Starten und Landen. Das taucht in keiner Wind-App auf, und die modellierte Meereshöhe, die manche Wetter-APIs mitliefern, ist für die Küste ausdrücklich nicht geeignet — sie ersetzt keine Gezeitentabelle. Rechnet den Tidenstand also getrennt mit ein, so wie ihr es mit dem Wind macht.', 'Las mareas. Con marea alta, la playa de Los Lances se estrecha de forma notable, y con ella el espacio para despegar y aterrizar. Eso no aparece en ninguna app de viento, y el nivel del mar modelizado que ofrecen algunas API meteorológicas no es apto para la costa, expresamente: no sustituye a una tabla de mareas. Así que tened en cuenta la marea por separado, igual que hacéis con el viento.', 'De getijden. Bij vloed wordt het strand van Los Lances duidelijk smaller, en daarmee ook de ruimte om te starten en te landen. Dat staat in geen enkele windapp, en de gemodelleerde zeehoogte die sommige weer-API’s meeleveren is uitdrukkelijk niet geschikt voor de kust — die vervangt geen getijdentabel. Reken het tij dus apart mee, net zoals jullie dat met de wind doen.', 'Tidvattnet. Vid högvatten blir stranden i Los Lances märkbart smalare, och därmed också platsen för start och landning. Det syns inte i någon vindapp, och den modellerade havsnivån som vissa väder-API:er levererar är uttryckligen inte lämpad för kusten – den ersätter ingen tidvattentabell. Räkna alltså in tidvattnet separat, precis som ni gör med vinden.')
    },
    rescueEyebrow: l('In an emergency', 'Im Ernstfall', 'En caso de emergencia', 'In noodgevallen', 'I ett nödläge'),
    rescueHeading: l('Two different systems that are often confused', 'Zwei verschiedene Systeme, die oft verwechselt werden', 'Dos sistemas distintos que a menudo se confunden', 'Twee verschillende systemen die vaak worden verward', 'Två olika system som ofta förväxlas'),
    rescueTitle: l('Private water-sport rescue — commercial providers with their own terms', 'Private Wassersport-Rescue — kommerzielle Anbieter mit eigenen Bedingungen', 'Rescate privado de deportes acuáticos: proveedores comerciales con condiciones propias', 'Private watersportrescue — commerciële aanbieders met eigen voorwaarden', 'Privat räddning för vattensport – kommersiella aktörer med egna villkor'),
    rescueIntro: l('These are companies with their own zones, hours and contract terms. Check current availability and conditions directly with the provider.', 'Das sind Unternehmen mit eigenen Zonen, Zeiten und Vertragsbedingungen. Prüft die aktuelle Verfügbarkeit und die Konditionen direkt beim Anbieter.', 'Son empresas con sus propias zonas, horarios y condiciones contractuales. Comprobad la disponibilidad actual y las condiciones directamente con el proveedor.', 'Dit zijn bedrijven met eigen zones, tijden en contractvoorwaarden. Controleer de actuele beschikbaarheid en de voorwaarden rechtstreeks bij de aanbieder.', 'Det här är företag med egna zoner, tider och avtalsvillkor. Kontrollera aktuell tillgänglighet och villkor direkt hos leverantören.'),
    providers: [
      {
        id: 'new-angels',
        name: 'New Angels · Tarifa Rescue',
        text: l('For its voucher the operator names Los Lances Norte and Valdevaqueros, up to two miles off the coast, in wind of no more than 35 kn. That is a condition of this voucher, not a general limit for Tarifa and not a promise of deployment. As of 3 September 2026.', 'Der Betreiber nennt für seinen Voucher Los Lances Norte und Valdevaqueros, bis zwei Meilen vor der Küste, bei Wind bis höchstens 35 kn. Das ist eine Bedingung dieses Vouchers, keine allgemeine Grenze für Tarifa und kein Einsatzversprechen. Stand: 03.09.2026.', 'Para su bono, el operador indica Los Lances Norte y Valdevaqueros, hasta dos millas de la costa, con viento de como máximo 35 kn. Es una condición de ese bono, no un límite general para Tarifa ni una promesa de intervención. Fecha: 3 de septiembre de 2026.', 'Voor zijn voucher noemt de aanbieder Los Lances Norte en Valdevaqueros, tot twee mijl uit de kust, bij wind tot maximaal 35 kn. Dat is een voorwaarde van deze voucher, geen algemene grens voor Tarifa en geen inzetbelofte. Stand: 3 september 2026.', 'För sin voucher anger operatören Los Lances Norte och Valdevaqueros, upp till två sjömil från kusten, vid vind på högst 35 kn. Det är ett villkor för den här vouchern, ingen allmän gräns för Tarifa och inget löfte om insats. Läge: 3 september 2026.'),
        href: 'https://www.tarifarescue.com/',
        label: l('Check New Angels conditions', 'New-Angels-Bedingungen prüfen', 'Consultar las condiciones de New Angels', 'Bekijk de voorwaarden van New Angels', 'Kontrollera New Angels villkor')
      },
      {
        id: 'sea-rescue',
        name: 'Sea Rescue',
        text: l('The operator describes its service as year-round, with stations at Los Lances Norte and Valdevaqueros and a stated zone of up to one kilometre from the beach. For June to September it names 11:00 to 20:00. The provider runs its own radio channel for its system. As of 3 September 2026.', 'Der Betreiber beschreibt seinen Dienst als ganzjährig, mit Stationen bei Los Lances Norte und Valdevaqueros und einer angegebenen Zone bis einen Kilometer vom Strand. Von Juni bis September nennt er 11 bis 20 Uhr. Der Anbieter führt einen eigenen Funkkanal für sein System. Stand: 03.09.2026.', 'El operador describe su servicio como de todo el año, con puestos en Los Lances Norte y Valdevaqueros y una zona declarada de hasta un kilómetro desde la playa. De junio a septiembre indica de 11:00 a 20:00. El proveedor opera un canal de radio propio para su sistema. Fecha: 3 de septiembre de 2026.', 'De aanbieder beschrijft zijn dienst als het hele jaar door, met posten bij Los Lances Norte en Valdevaqueros en een opgegeven zone tot een kilometer van het strand. Voor juni tot september noemt hij 11:00 tot 20:00 uur. De aanbieder gebruikt een eigen radiokanaal voor zijn systeem. Stand: 3 september 2026.', 'Operatören beskriver sin tjänst som åretrunt, med stationer vid Los Lances Norte och Valdevaqueros och en angiven zon på upp till en kilometer från stranden. För juni till september anger den 11:00 till 20:00. Leverantören har en egen radiokanal för sitt system. Läge: 3 september 2026.'),
        href: 'https://es.searescue.es/',
        label: l('Check Sea Rescue details', 'Sea-Rescue-Details prüfen', 'Consultar los detalles de Sea Rescue', 'Bekijk de details van Sea Rescue', 'Kontrollera Sea Rescue-information')
      }
    ],
    rescueQuote: {
      name: 'Mark',
      role: l('Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club'),
      lead: l('What Mark says about it, and you will not find this on any website:', 'Was Mark dazu sagt, und das steht so auf keiner Website:', 'Lo que dice Mark al respecto, y esto no está en ninguna web:', 'Wat Mark erover zegt, en dat staat zo op geen enkele website:', 'Vad Mark säger om det, och det står inte på någon webbplats:'),
      paragraphs: ll(
        ['The hours you see online are shop opening hours. The boats go out when the Levante is blowing. And they take you along with your gear — that is the difference from the state rescue service.'],
        ['Die Zeiten, die ihr online seht, sind Ladenöffnungszeiten. Die Boote fahren raus, wenn Levante steht. Und sie nehmen euch mitsamt Material mit — das ist der Unterschied zur staatlichen Rettung.'],
        ['Los horarios que veis online son los horarios de la tienda. Las lanchas salen cuando hay levante. Y os recogen con el material: esa es la diferencia con el rescate estatal.'],
        ['De tijden die jullie online zien, zijn winkelopeningstijden. De boten gaan het water op als er levante staat. En ze nemen jullie mét materiaal mee — dat is het verschil met de staatsredding.'],
        ['Tiderna ni ser online är butikens öppettider. Båtarna går ut när levanten står på. Och de tar med er tillsammans med utrustningen – det är skillnaden mot den statliga räddningen.']
      )
    },
    rescueContext: l('That is the practical reason these providers exist at all: in an emergency, the state sea rescue picks up the person. The gear stays in the water.', 'Das ist der praktische Grund, warum es diese Anbieter überhaupt gibt: Die staatliche Seenotrettung holt im Ernstfall die Person. Das Material bleibt im Wasser.', 'Esa es la razón práctica de que existan estos servicios: en una emergencia, el salvamento marítimo estatal recoge a la persona. El material se queda en el agua.', 'Dat is de praktische reden dat deze aanbieders überhaupt bestaan: bij een noodgeval haalt de staatsredding de persoon op. Het materiaal blijft in het water.', 'Det är det praktiska skälet till att de här aktörerna över huvud taget finns: i ett nödläge hämtar den statliga sjöräddningen personen. Utrustningen blir kvar i vattnet.'),
    rescuePlanB: l('A rescue card is plan B. It does not change the conditions on the water.', 'Eine Rescue-Card ist Plan B. Sie ändert die Bedingungen auf dem Wasser nicht.', 'Una tarjeta de rescate es el plan B. No cambia las condiciones en el agua.', 'Een rescuekaart is plan B. Hij verandert niets aan de omstandigheden op het water.', 'Ett räddningskort är plan B. Det ändrar inte förhållandena på vattnet.'),
    emergencyTitle: l('Distress at sea and acute emergency', 'Seenot und akuter Notfall', 'Emergencia en el mar y urgencia aguda', 'Noodgeval op zee en acute nood', 'Sjönöd och akut nödläge'),
    emergencyText: l('This is a different system, run by the state, and it has nothing to do with the vouchers above. Give your position, what has happened and how many people need help. Private radio channels of individual providers are not official emergency channels.', 'Das ist ein anderes System, staatlich, und es hat mit den Vouchers oben nichts zu tun. Nennt eure Position, was passiert ist und wie viele Menschen Hilfe brauchen. Private Funkkanäle einzelner Anbieter sind keine amtlichen Notrufkanäle.', 'Este es otro sistema, estatal, y no tiene nada que ver con los bonos de arriba. Indicad vuestra posición, qué ha pasado y cuántas personas necesitan ayuda. Los canales de radio privados de los proveedores no son canales oficiales de emergencia.', 'Dit is een ander systeem, van de overheid, en het heeft niets te maken met de vouchers hierboven. Geef jullie positie door, wat er is gebeurd en hoeveel mensen hulp nodig hebben. Privékanalen van afzonderlijke aanbieders zijn geen officiële noodkanalen.', 'Det här är ett annat system, statligt, och det har inget med voucherna ovan att göra. Ange er position, vad som har hänt och hur många som behöver hjälp. Enskilda leverantörers privata radiokanaler är inga officiella nödkanaler.'),
    emergencyNumbers: [
      { id: 'emergency-112', label: l('Europe-wide emergency number', 'Europaweiter Notruf', 'Emergencias en toda Europa', 'Europees noodnummer', 'Europeiskt nödnummer'), value: '112' },
      { id: 'salvamento', label: l('Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo'), value: '900 202 202' },
      { id: 'vhf-16', label: l('Marine radio (VHF)', 'Seefunk (VHF)', 'Radio marítima (VHF)', 'Marifoon (VHF)', 'Sjöradio (VHF)'), value: 'Channel 16' }
    ],
    aemetText: l('Official AEMET warnings take precedence over any model calculation. We do not summarise them and we do not weigh them against other models. The Estrecho warning zone (611104) has been checked against AEMET’s official zone register; the block above shows AEMET’s wording, and whenever it fails the link leads straight to AEMET.', 'Amtliche AEMET-Warnungen haben Vorrang vor jeder Modellrechnung. Wir fassen sie nicht zusammen und rechnen sie nicht gegen andere Modelle auf. Die Warnzone Estrecho (611104) ist gegen das amtliche Zonenverzeichnis von AEMET geprüft; oben steht AEMETs Wortlaut, und bei jedem Ausfall führt der Link direkt zu AEMET.', 'Los avisos oficiales de AEMET prevalecen sobre cualquier cálculo de modelo. No los resumimos ni los contraponemos a otros modelos. La zona de aviso Estrecho (611104) está comprobada con el registro oficial de zonas de AEMET; arriba aparece el texto de AEMET, y si falla, el enlace lleva directamente a AEMET.', 'Officiële AEMET-waarschuwingen gaan boven elke modelberekening. We vatten ze niet samen en zetten ze niet af tegen andere modellen. De waarschuwingszone Estrecho (611104) is gecontroleerd aan de hand van het officiële zoneregister van AEMET; hierboven staat de tekst van AEMET, en bij elke storing leidt de link rechtstreeks naar AEMET.', 'Officiella AEMET-varningar går före varje modellberäkning. Vi sammanfattar dem inte och väger dem inte mot andra modeller. Varningszonen Estrecho (611104) är kontrollerad mot AEMET:s officiella zonregister; ovan står AEMET:s ordalydelse, och vid varje avbrott leder länken direkt till AEMET.'),
    aemetHref: 'https://www.aemet.es/es/eltiempo/prediccion/municipios/tarifa-id11035',
    aemetLabel: l('Open official AEMET forecast and warnings', 'Amtliche AEMET-Vorhersage und Warnungen öffnen', 'Abrir previsión y avisos oficiales de AEMET', 'Open de officiële AEMET-verwachting en waarschuwingen', 'Öppna AEMET:s officiella prognos och varningar')
  },
  partner: {
    eyebrow: l('Together', 'Gemeinsam', 'Juntos', 'Samen', 'Tillsammans'),
    title: l('Why we send you to Tarifa Surf Club', 'Warum wir euch zum Tarifa Surf Club schicken', 'Por qué os mandamos a Tarifa Surf Club', 'Waarom we jullie naar Tarifa Surf Club sturen', 'Varför vi skickar er till Tarifa Surf Club'),
    intro: l('Tarifa Surf Club is an official AMARA partner, and Robert and Mark are personal friends. What that means for you in practice:', 'Der Tarifa Surf Club ist offizieller AMARA-Partner, und Robert und Mark sind persönlich befreundet. Was das für euch praktisch bedeutet:', 'Tarifa Surf Club es socio oficial de AMARA, y Robert y Mark son amigos personales. Lo que eso significa para vosotros en la práctica:', 'Tarifa Surf Club is officiële AMARA-partner, en Robert en Mark zijn persoonlijk bevriend. Wat dat voor jullie in de praktijk betekent:', 'Tarifa Surf Club är officiell AMARA-partner, och Robert och Mark är personliga vänner. Vad det betyder för er i praktiken:'),
    imageAlt: l('Mark from Tarifa Surf Club and Robert from AMARA in Tarifa', 'Mark vom Tarifa Surf Club und Robert von AMARA in Tarifa', 'Mark de Tarifa Surf Club y Robert de AMARA en Tarifa', 'Mark van Tarifa Surf Club en Robert van AMARA in Tarifa', 'Mark från Tarifa Surf Club och Robert från AMARA i Tarifa'),
    imageCaption: l('Mark and Robert: direct coordination in Tarifa', 'Mark und Robert: direkte Abstimmung in Tarifa', 'Mark y Robert: coordinación directa en Tarifa', 'Mark en Robert: directe afstemming in Tarifa', 'Mark och Robert: direkt samordning i Tarifa'),
    benefits: [
      {
        id: 'equipment-before-arrival',
        title: l('Gear, sorted before you arrive', 'Material, vor der Anreise geklärt', 'Material resuelto antes de llegar', 'Materiaal, geregeld vóór aankomst', 'Utrustning, ordnad före ankomst'),
        text: l('You can buy or rent kitesurf gear through Tarifa Surf Club before you arrive. The coordination happens in advance. The gear is waiting in the accommodation when you arrive.', 'Kitesurf-Material könnt ihr vor der Anreise über den Tarifa Surf Club kaufen oder leihen. Die Abstimmung läuft vorab. Das Material steht bei eurer Ankunft direkt in der Unterkunft.', 'Podéis comprar o alquilar material de kitesurf a través de Tarifa Surf Club antes de llegar. La coordinación se hace con antelación. El material os espera en el alojamiento cuando llegáis.', 'Kitesurfmateriaal kunnen jullie vóór aankomst via Tarifa Surf Club kopen of huren. De afstemming gebeurt vooraf. Het materiaal staat bij aankomst direct in de accommodatie.', 'Kitesurfutrustning kan ni köpa eller hyra genom Tarifa Surf Club före ankomst. Samordningen sker i förväg. Utrustningen står direkt i boendet när ni kommer.')
      },
      {
        id: 'deposit',
        title: l('The rental deposit', 'Die Kaution beim Verleih', 'La fianza del alquiler', 'De borg bij huur', 'Depositionen vid hyra'),
        text: l('Anyone renting gear normally leaves a deposit with the provider. For AMARA guests, we place that deposit with Tarifa Surf Club.', 'Wer Material leiht, hinterlegt normalerweise eine Kaution beim Anbieter. Für AMARA-Gäste hinterlegen wir diese Kaution beim Tarifa Surf Club.', 'Quien alquila material normalmente deja una fianza al proveedor. Para los huéspedes de AMARA, esa fianza la depositamos nosotros en Tarifa Surf Club.', 'Wie materiaal huurt, betaalt normaal gesproken een borg aan de aanbieder. Voor AMARA-gasten stellen wij die borg bij Tarifa Surf Club.', 'Den som hyr utrustning lämnar normalt en deposition hos leverantören. För AMARA-gäster lämnar vi den depositionen hos Tarifa Surf Club.')
      },
      {
        id: 'guided-options',
        title: l('Course, kitecamp or an accompanied session', 'Kurs, Kitecamp oder begleitete Session', 'Curso, kitecamp o sesión acompañada', 'Cursus, kitecamp of begeleide sessie', 'Kurs, kitecamp eller ett ledsagat pass'),
        text: l('If you are still unsure or do not want to go out alone: a course, a kitecamp or an accompanied session are there for exactly that. With booked services of Tarifa Surf Club — kite course, kitecamp, Help to Kite — sea rescue is included. With gear rental alone, it is not.', 'Wer noch unsicher ist oder nicht allein rauswill: Kurs, Kitecamp oder eine begleitete Session sind dafür da. Bei gebuchten Leistungen des Tarifa Surf Club — Kitekurs, Kitecamp, Help to Kite — ist die Seerettung enthalten. Beim reinen Materialverleih ist sie es nicht.', 'Si todavía no os sentís seguros o no queréis salir solos: para eso están el curso, el kitecamp o una sesión acompañada. En los servicios contratados con Tarifa Surf Club (curso de kite, kitecamp, Help to Kite) el rescate está incluido. Con el simple alquiler de material, no.', 'Wie nog onzeker is of niet alleen het water op wil: daar zijn een cursus, een kitecamp of een begeleide sessie voor. Bij geboekte diensten van Tarifa Surf Club — kitecursus, kitecamp, Help to Kite — is de reddingsdienst inbegrepen. Bij alleen materiaalhuur niet.', 'Den som fortfarande är osäker eller inte vill gå ut ensam: kurs, kitecamp eller ett ledsagat pass finns till för just det. Vid bokade tjänster hos Tarifa Surf Club – kitekurs, kitecamp, Help to Kite – ingår sjöräddningen. Vid enbart hyra av utrustning gör den det inte.')
      }
    ],
    voice: {
      name: 'Mark',
      role: l('Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club'),
      title: l('Mark’s view', 'Marks Blick', 'La mirada de Mark', 'Marks kijk', 'Marks blick'),
      imageAlt: l('Mark from Tarifa Surf Club sitting on a wall at a beach access, sand and dunes behind him', 'Mark vom Tarifa Surf Club sitzt auf einer Mauer am Strandzugang, im Hintergrund Sand und Dünen', 'Mark, de Tarifa Surf Club, sentado en un muro en un acceso a la playa, con arena y dunas al fondo', 'Mark van Tarifa Surf Club zit op een muurtje bij een strandopgang, met zand en duinen op de achtergrond', 'Mark från Tarifa Surf Club sitter på en mur vid en strandnedgång, med sand och dyner i bakgrunden'),
      quotes: [
        {
          id: 'first-levante',
          lead: l('What he tells guests who want to go out in Levante for the first time:', 'Was er Gästen sagt, die zum ersten Mal bei Levante rauswollen:', 'Lo que dice a los huéspedes que quieren salir con levante por primera vez:', 'Wat hij zegt tegen gasten die voor het eerst bij levante het water op willen:', 'Vad han säger till gäster som vill ut i levante för första gången:'),
          paragraphs: ll(
            ['For a first Levante I send people to Valdevaqueros. The wind sits a bit more onshore there, and the big dune at your back makes a difference. Anyone going out from the main beach at Los Lances in offshore wind has a rescue card in their wetsuit with me — without one I do not ride there. And out there I almost always rig one size smaller than it looks from the shore. The gusts here really do pack a punch.'],
            ['Beim ersten Levante schicke ich die Leute nach Valdevaqueros. Der Wind steht dort etwas auflandiger, und die große Düne im Rücken macht einen Unterschied. Wer bei ablandigem Wind am Hauptstrand in Los Lances rausgeht, hat bei mir eine Rescue-Karte im Neo — ohne die fahre ich da nicht. Und ich baue draußen fast immer eine Nummer kleiner auf, als es am Ufer aussieht. Die Böen haben es hier wirklich in sich.'],
            ['Con el primer levante mando a la gente a Valdevaqueros. Allí el viento entra algo más de mar, y la gran duna a la espalda marca la diferencia. Quien sale con viento de tierra desde la playa principal de Los Lances lleva conmigo una tarjeta de rescate en el neopreno; sin ella yo ahí no navego. Y fuera casi siempre monto una talla menos de lo que parece desde la orilla. Las rachas aquí son de verdad.'],
            ['Bij de eerste levante stuur ik mensen naar Valdevaqueros. De wind staat daar iets aanlandiger, en de grote duin in de rug maakt verschil. Wie bij aflandige wind vanaf het hoofdstrand in Los Lances het water op gaat, heeft bij mij een rescuekaart in het wetsuit — zonder vaar ik daar niet. En buiten tuig ik bijna altijd een maat kleiner op dan het vanaf de kant lijkt. De vlagen hebben het hier echt in zich.'],
            ['Vid första levanten skickar jag folk till Valdevaqueros. Vinden ligger lite mer pålands där, och den stora dynen i ryggen gör skillnad. Den som går ut från huvudstranden i Los Lances i frånlandsvind har hos mig ett räddningskort i våtdräkten – utan det kör jag inte där. Och därute riggar jag nästan alltid en storlek mindre än det ser ut från stranden. Byarna här har verkligen kraft.']
          )
        },
        {
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
        {
          id: 'overlooked',
          lead: l('What gets overlooked most often in Tarifa:', 'Was in Tarifa am häufigsten übersehen wird:', 'Lo que más se pasa por alto en Tarifa:', 'Wat in Tarifa het vaakst over het hoofd wordt gezien:', 'Vad som oftast förbises i Tarifa:'),
          paragraphs: ll(
            ['The gear. In a proper Levante I ride 5s to 7s here. If you only bring the 9, you stand on the beach on the strong days. And almost everyone ignores the tides: at high tide the beach at Los Lances gets extremely narrow. There is hardly any room left for launching and landing.'],
            ['Das Material. Bei einem richtigen Levante fahre ich hier 5er bis 7er. Wer nur den 9er dabeihat, steht an starken Tagen am Strand. Und die Gezeiten blendet fast jeder aus: Bei Flut wird der Strand in Los Lances extrem schmal. Beim Starten und Landen bleibt dann kaum Platz.'],
            ['El material. Con un levante de verdad, aquí yo navego con 5 a 7 metros. Quien solo trae la 9 se queda en la playa los días fuertes. Y las mareas casi todo el mundo las ignora: con marea alta, la playa de Los Lances se queda estrechísima. Para despegar y aterrizar apenas queda sitio.'],
            ['Het materiaal. Bij een echte levante vaar ik hier 5 tot 7. Wie alleen de 9 bij zich heeft, staat op sterke dagen op het strand. En de getijden negeert bijna iedereen: bij vloed wordt het strand in Los Lances extreem smal. Bij het starten en landen blijft dan nauwelijks ruimte over.'],
            ['Utrustningen. I en riktig levante kör jag 5:or till 7:or här. Den som bara har med sig 9:an står på stranden de starka dagarna. Och tidvattnet blundar nästan alla för: vid högvatten blir stranden i Los Lances extremt smal. Då finns det knappt plats för start och landning.']
          )
        }
      ]
    },
    partnerHref: 'https://tarifasurfclub.com/',
    partnerLabel: l('Visit Tarifa Surf Club', 'Tarifa Surf Club besuchen', 'Visitar Tarifa Surf Club', 'Bezoek Tarifa Surf Club', 'Besök Tarifa Surf Club'),
    contactLabel: l('Ask AMARA about your kite stay', 'AMARA zum Kite-Aufenthalt fragen', 'Preguntar a AMARA sobre vuestro viaje de kite', 'Vraag AMARA naar jullie kiteverblijf', 'Fråga AMARA om er kitevistelse'),
    contactMessage: l('Hello AMARA, we would like to coordinate a Tarifa kite stay. Travel dates: / Guests: / Experience: / Equipment, lessons or camp:', 'Hallo AMARA, wir möchten einen Kite-Aufenthalt in Tarifa abstimmen. Reisedaten: / Gäste: / Erfahrung: / Material, Kurse oder Camp:', 'Hola AMARA, queremos coordinar una estancia de kite en Tarifa. Fechas: / Huéspedes: / Experiencia: / Material, cursos o camp:', 'Hallo AMARA, we willen een kiteverblijf in Tarifa afstemmen. Reisdata: / Gasten: / Ervaring: / Materiaal, lessen of camp:', 'Hej AMARA, vi vill samordna en kitevistelse i Tarifa. Resedatum: / Gäster: / Erfarenhet: / Utrustning, kurser eller camp:')
  },
  related: {
    eyebrow: l('Next', 'Weiter', 'Seguir', 'Verder', 'Vidare'),
    title: l('On to the spots and the overview', 'Weiter zu den Spots und zum Überblick', 'Seguid con los spots y la visión de conjunto', 'Verder naar de spots en het overzicht', 'Vidare till spotsen och översikten'),
    links: [
      {
        id: 'spots',
        token: 'tarifa_kitesurf_spots',
        title: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
        text: l('Which stretch works in which conditions, and where the zones run.', 'Welcher Abschnitt bei welcher Lage funktioniert und wo die Zonen verlaufen.', 'Qué tramo funciona con cada situación y por dónde van las zonas.', 'Welk deel bij welke situatie werkt en waar de zones lopen.', 'Vilken sträcka som fungerar i vilket läge och var zonerna går.')
      },
      {
        id: 'forecast',
        token: 'tarifa_kitesurf_forecast',
        title: l('Today in Tarifa', 'Heute in Tarifa', 'Hoy en Tarifa', 'Vandaag in Tarifa', 'I dag i Tarifa'),
        text: l('The current values: official AEMET warnings and forecast, the Open-Meteo briefing and Windguru’s table.', 'Die aktuellen Werte: amtliche AEMET-Warnungen und -Vorhersage, das Open-Meteo-Briefing und die Windguru-Tabelle.', 'Los valores actuales: avisos y previsión oficiales de AEMET, el briefing de Open-Meteo y la tabla de Windguru.', 'De actuele waarden: officiële AEMET-waarschuwingen en -verwachting, de Open-Meteo-briefing en de tabel van Windguru.', 'De aktuella värdena: officiella AEMET-varningar och -prognos, Open-Meteo-briefingen och Windgurus tabell.')
      },
      {
        id: 'hub',
        token: 'tarifa_kitesurfing_hub',
        title: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'),
        text: l('The overview: school, kitecamp, equipment and everything around them.', 'Der Überblick über Schule, Kitecamp, Material und den Rest.', 'La visión de conjunto: escuela, kitecamp, material y todo lo demás.', 'Het overzicht: school, kitecamp, materiaal en de rest.', 'Översikten: skola, kitecamp, utrustning och resten.')
      }
    ]
  },
  closing: {
    eyebrow: l('Stay', 'Bleiben', 'Quedarse', 'Blijven', 'Bo'),
    title: l('From bed to water, no detour', 'Vom Bett zum Wasser, ohne Umweg', 'De la cama al agua, sin rodeos', 'Van bed naar water, zonder omweg', 'Från sängen till vattnet, utan omväg'),
    text: l('At AMARA Family & Surf we coordinate stay, arrival and kite logistics in one conversation. Gear can be waiting in the accommodation when you arrive; the coordination is personal and happens in advance. Check availability as soon as your dates take shape.', 'Bei AMARA Family & Surf koordinieren wir Aufenthalt, Anreise und Kite-Logistik in einem Gespräch. Material kann bei eurer Ankunft in der Unterkunft bereitstehen, die Abstimmung läuft persönlich und vorab. Prüft die Verfügbarkeit, sobald eure Reisedaten Form annehmen.', 'En AMARA Family & Surf coordinamos estancia, llegada y logística de kite en una sola conversación. El material puede estar esperándoos en el alojamiento a vuestra llegada; la coordinación es personal y previa. Consultad la disponibilidad en cuanto vuestras fechas tomen forma.', 'Bij AMARA Family & Surf stemmen we verblijf, aankomst en kitelogistiek in één gesprek af. Materiaal kan bij aankomst in de accommodatie klaarstaan; de afstemming is persoonlijk en gebeurt vooraf. Bekijk de beschikbaarheid zodra jullie data vorm krijgen.', 'På AMARA Family & Surf samordnar vi boende, ankomst och kitelogistik i ett samtal. Utrustning kan stå klar i boendet när ni kommer; samordningen är personlig och sker i förväg. Kontrollera tillgängligheten så snart era datum tar form.'),
    stayLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Visa AMARA Family & Surf'),
    availabilityLabel: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Bekijk beschikbaarheid', 'Se tillgänglighet'),
    finalLine: l('Forecasts are model calculations. Official warnings and local rules have their own priority. Signs, buoys and current instructions on site take precedence.', 'Forecasts sind Modellrechnungen. Amtliche Warnungen und lokale Regeln haben eine eigene Priorität. Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.', 'Los partes son cálculos de modelos. Los avisos oficiales y las normas locales tienen prioridad propia. La señalización, las boyas y las indicaciones vigentes sobre el terreno van primero.', 'Forecasts zijn modelberekeningen. Officiële waarschuwingen en lokale regels hebben een eigen prioriteit. Borden, boeien en actuele aanwijzingen ter plaatse gaan voor.', 'Prognoser är modellberäkningar. Officiella varningar och lokala regler har egen prioritet. Skyltar, bojar och aktuella anvisningar på plats har företräde.')
  }
};
