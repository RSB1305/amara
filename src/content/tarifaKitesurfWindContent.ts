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

const description = l(
  'Read Tarifa’s wind, weather and safety context with the current official AEMET forecast, practical model guidance and local priorities.',
  'Wie ihr einen Forecast lest, bevor ihr ihn glaubt: Windguru verstehen, Poniente und Levante, die amtlichen Regeln in Tarifa und die Notrufwege, die im Ernstfall zählen.',
  'Leed el contexto de viento, tiempo y seguridad de Tarifa con la previsión oficial actual de AEMET, guía de modelos y prioridades locales.',
  'Lees Tarifas wind-, weer- en veiligheidscontext met de actuele officiële AEMET-verwachting, modelhulp en lokale prioriteiten.',
  'Läs Tarifas vind-, väder- och säkerhetskontext med den aktuella officiella AEMET-prognosen, modellhjälp och lokala prioriteringar.'
);

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
    eyebrow: l('Kitesurf forecast in Tarifa', 'Kitesurfen in Tarifa', 'Previsión de kite en Tarifa', 'Kiteforecast in Tarifa', 'Kiteprognos i Tarifa'),
    title: l('Tarifa kitesurf: wind & safety', 'Wind, Wetter und Sicherheit', 'Kitesurf en Tarifa: viento y seguridad', 'Kitesurfen in Tarifa: wind & veiligheid', 'Kitesurfing i Tarifa: vind & säkerhet'),
    subtitle: l('A calm read of the forecast before you make plans for the water.', 'Wie ihr einen Forecast lest, bevor ihr ihn glaubt', 'Una lectura clara del parte antes de hacer planes para el agua.', 'Een rustige lezing van de forecast voordat jullie plannen maken voor het water.', 'En lugn genomgång av prognosen innan ni planerar för vattnet.'),
    lead: l(
      'For a useful Tarifa forecast, we read wind, gusts, sea state and sky together. Our live briefing shows the current official AEMET municipal forecast; Windguru remains a separate view for comparing forecasts. Use the numbers to prepare a conversation and look more carefully at the beach. Before the water, check the real direction, gusts, sea state, buoys, signs and official warnings. Local instructions always carry more weight than a screen.',
      'Tarifa hat zwei prägende Windlagen: Poniente aus Westen und Levante aus Osten. Am Wasser fühlen sie sich völlig unterschiedlich an — in den Modellen, die ihr morgens auf Windguru lest, stehen sie nebeneinander in derselben Tabelle. Hier zeigen wir euch, wie man diese Tabelle liest: was Mittelwind und Böen tatsächlich aussagen, warum ein feineres Modellraster nicht automatisch die bessere Vorhersage an eurem Strand bedeutet, und was Welle, Swell und Periode für den Tag bedeuten. Dazu die amtlichen Regeln, die in Tarifa gelten, und die Notrufwege, die im Ernstfall zählen. Die Entscheidung trefft ihr am Strand. Mit besserem Blick auf das, was ihr dort seht.',
      'Para que un parte de Tarifa sirva de verdad, leemos juntos viento, rachas, mar y cielo. Nuestro briefing en directo muestra la previsión municipal oficial actual de AEMET; Windguru sigue siendo una vista independiente para comparar partes. Usad los datos para preparar la conversación y mirar mejor la playa. Antes de entrar al agua, comprobad dirección real, rachas, estado del mar, boyas, señales y avisos oficiales. Las indicaciones locales pesan siempre más que una pantalla.',
      'Voor een bruikbare Tarifa-forecast lezen we wind, vlagen, zee en lucht samen. Onze livebriefing toont de actuele officiële AEMET-gemeenteverwachting; Windguru blijft een aparte vergelijkingsweergave. Gebruik de gegevens voor jullie voorbereiding en een betere blik op het strand. Controleer vóór het water de werkelijke richting, vlagen, zeegang, boeien, borden en officiële waarschuwingen. Lokale aanwijzingen wegen altijd zwaarder dan een scherm.',
      'För att en Tarifa-prognos ska vara användbar läser vi vind, byar, sjö och himmel tillsammans. Vår livebriefing visar den aktuella officiella AEMET-prognosen för kommunen; Windguru är en separat vy för att jämföra prognoser. Använd uppgifterna för att förbereda samtalet och titta noggrannare på stranden. Före vattnet kontrollerar ni verklig riktning, byar, sjögång, bojar, skyltar och officiella varningar. Lokala anvisningar väger alltid tyngre än en skärm.'
    ),
    imageAlt: l('The Tarifa Surf Club team with the club flag on the beach', 'Das Team des Tarifa Surf Club mit der Vereinsflagge am Strand', 'El equipo de Tarifa Surf Club con la bandera del club en la playa', 'Het team van Tarifa Surf Club met de clubvlag op het strand', 'Tarifa Surf Clubs team med klubbflaggan på stranden'),
    updated: l('Checked 3 September 2026', 'Geprüft im September 2026', 'Comprobado el 3 de septiembre de 2026', 'Gecontroleerd op 3 september 2026', 'Kontrollerat den 3 september 2026'),
    note: l('Model values, official guidance and Robert’s personal observations are marked separately.', 'Modellwerte, amtliche Hinweise und Roberts persönliche Beobachtungen sind getrennt gekennzeichnet.', 'Los valores del modelo, la información oficial y las observaciones personales de Robert se distinguen con claridad.', 'Modelwaarden, officiële informatie en Roberts persoonlijke observaties zijn apart gemarkeerd.', 'Modellvärden, officiell information och Roberts personliga iakttagelser anges var för sig.')
  },
  live: {
    eyebrow: l('Today in Tarifa', 'Amtlich', 'Hoy en Tarifa', 'Vandaag in Tarifa', 'I dag i Tarifa'),
    title: l('What the forecast means today', 'Was die spanische Wetterbehörde für heute meldet', 'Qué dice hoy la previsión', 'Wat de verwachting vandaag zegt', 'Vad prognosen säger i dag'),
    intro: l('The current official AEMET municipal forecast provides the weather context for Tarifa. Read wind, gusts and sea state separately at the beach, with local notices and official warnings.', 'Die AEMET ist der offizielle spanische Wetterdienst. Ihre Warnungen und ihre Gemeindevorhersage haben eine eigene Priorität: Sie stehen über jeder Modellrechnung und über allem, was auf dieser Seite folgt. Wenn AEMET eine Warnung für den Estrecho ausgibt, ist das die Information, die zählt.', 'La previsión municipal oficial actual de AEMET aporta el contexto meteorológico de Tarifa. Comprobad aparte el viento, las rachas y el estado del mar en la playa, junto con los avisos locales y oficiales.', 'De actuele officiële AEMET-gemeenteverwachting geeft de weercontext voor Tarifa. Controleer wind, vlagen en zeegang afzonderlijk op het strand, samen met lokale meldingen en officiële waarschuwingen.', 'Den aktuella officiella AEMET-prognosen för kommunen ger väderkontexten för Tarifa. Kontrollera vind, byar och sjögång separat på stranden, tillsammans med lokala meddelanden och officiella varningar.'),
    loading: l('Loading the current official forecast …', 'Amtliche AEMET-Vorhersage wird geladen …', 'Cargando la previsión oficial actual …', 'Actuele officiële verwachting wordt geladen …', 'Aktuell officiell prognos laddas …'),
    today: l('Today', 'Heute', 'Hoy', 'Vandaag', 'I dag'),
    tomorrow: l('Tomorrow', 'Morgen', 'Mañana', 'Morgen', 'I morgon'),
    high: l('High', 'Höchstwert', 'Máxima', 'Maximum', 'Högsta'),
    low: l('Low', 'Tiefstwert', 'Mínima', 'Minimum', 'Lägsta'),
    rain: l('Rain probability', 'Regenwahrscheinlichkeit', 'Probabilidad de lluvia', 'Neerslagkans', 'Regnsannolikhet'),
    issued: l('Forecast issued', 'Vorhersage ausgegeben', 'Previsión emitida', 'Verwachting uitgegeven', 'Prognosen utfärdad'),
    unavailableTitle: l('The live briefing is currently unavailable', 'Die amtliche AEMET-Vorhersage ist gerade nicht verfügbar', 'El briefing en directo no está disponible ahora', 'De livebriefing is nu niet beschikbaar', 'Livebriefingen är inte tillgänglig just nu'),
    unavailableText: l('We do not replace missing data with estimates. Please use the official AEMET forecast and warnings, then check the beach conditions on arrival.', 'Wir ersetzen fehlende Daten nicht durch Schätzwerte. Die amtliche Vorhersage und die Warnungen bleiben direkt bei AEMET erreichbar.', 'No sustituimos datos ausentes por estimaciones. Consultad la previsión y los avisos oficiales de AEMET y comprobad las condiciones al llegar a la playa.', 'We vervangen ontbrekende data niet door schattingen. Gebruik de officiële AEMET-verwachting en waarschuwingen en controleer de omstandigheden bij aankomst op het strand.', 'Vi ersätter inte saknade data med uppskattningar. Använd AEMET:s officiella prognos och varningar och kontrollera förhållandena när ni kommer till stranden.'),
    briefingEyebrow: l('Today in Tarifa', 'Heute in Tarifa', 'Hoy en Tarifa', 'Vandaag in Tarifa', 'I dag i Tarifa'),
    forecastHeading: l('What the models are calculating right now', 'Was die Modelle gerade rechnen', 'Qué están calculando los modelos ahora mismo', 'Wat de modellen nu berekenen', 'Vad modellerna räknar just nu'),
    pending: l('The live briefing from Open-Meteo is being built. Until it is ready, this section explains what it will show.', 'Das Live-Briefing aus Open-Meteo entsteht gerade. Bis es steht, zeigt dieser Abschnitt, was es enthalten wird.', 'El briefing en directo con datos de Open-Meteo está en construcción. Hasta que esté listo, esta sección explica qué mostrará.', 'De livebriefing op basis van Open-Meteo is in opbouw. Tot die klaar is, legt dit onderdeel uit wat hij zal tonen.', 'Livebriefingen med data från Open-Meteo byggs just nu. Tills den är klar förklarar det här avsnittet vad den kommer att visa.'),
    windHeading: l('Wind and gusts', 'Wind und Böen', 'Viento y rachas', 'Wind en vlagen', 'Vind och byar'),
    windText: l('The modelled value at 10 metres, the calculated direction, and the gust peak — which is the maximum of the previous hour, not a value for one moment.', 'Der Modellwert für 10 Meter Höhe, die berechnete Richtung, und die Böenspitze — die ist das Maximum der vorangegangenen Stunde, nicht ein Wert für einen Moment.', 'El valor del modelo a 10 metros de altura, la dirección calculada y el pico de racha, que es el máximo de la hora anterior, no un valor de un instante.', 'De modelwaarde op 10 meter hoogte, de berekende richting en de vlaagpiek — dat is het maximum van het voorgaande uur, geen waarde voor één moment.', 'Modellvärdet på 10 meters höjd, den beräknade riktningen och bytoppen – som är maxvärdet för den föregående timmen, inte ett värde för ett ögonblick.'),
    waveHeading: l('Wave and swell', 'Welle und Swell', 'Ola y mar de fondo', 'Golf en swell', 'Våg och swell'),
    waveText: l('Total wave, the wind-driven part and the swell, each with direction and period. Wind wave and swell can arrive from different directions at the same time — that is the difference between an orderly day and a messy one.', 'Gesamtwelle, der windgetriebene Anteil und der Swell, jeweils mit Richtung und Periode. Windwelle und Swell können gleichzeitig aus verschiedenen Richtungen kommen — das ist der Unterschied zwischen einem geordneten und einem unruhigen Tag.', 'Ola total, la parte generada por el viento y el mar de fondo, cada uno con dirección y periodo. La ola de viento y el mar de fondo pueden llegar a la vez desde direcciones distintas: esa es la diferencia entre un día ordenado y uno revuelto.', 'Totale golf, het door wind opgewekte deel en de swell, elk met richting en periode. Windgolf en swell kunnen tegelijk uit verschillende richtingen komen — dat is het verschil tussen een geordende en een rommelige dag.', 'Total våg, den vinddrivna delen och swellen, var och en med riktning och period. Vindvåg och swell kan komma från olika håll samtidigt – det är skillnaden mellan en ordnad och en rörig dag.'),
    skyHeading: l('Clouds and sun', 'Wolken und Sonne', 'Nubes y sol', 'Wolken en zon', 'Moln och sol'),
    skyText: l('Weather context. A sun icon says nothing about whether a thermal wind will set in.', 'Wetterkontext. Ein Sonnen-Icon sagt nichts darüber, ob Thermik einsetzt.', 'Contexto meteorológico. Un icono de sol no dice nada sobre si entrará la térmica.', 'Weercontext. Een zonicoon zegt niets over of er thermiek op gang komt.', 'Väderkontext. En solsymbol säger ingenting om huruvida termiken sätter in.'),
    checkHeading: l('Check before the water', 'Vor dem Wasser prüfen', 'Comprobad antes de entrar al agua', 'Controleer vóór het water', 'Kontrollera före vattnet'),
    checkText: l('Actual direction, gusts, sea state, buoys, signs and official warnings. Forecast values describe a model hour; they are never a riding approval.', 'Tatsächliche Richtung, Böen, Seegang, Bojen, Beschilderung und amtliche Warnungen. Forecasts sind Modellrechnungen, keine Fahrfreigabe.', 'Dirección real, rachas, estado del mar, boyas, señales y avisos oficiales. Los valores del parte describen una hora de modelo; nunca autorizan una sesión.', 'Werkelijke richting, vlagen, zeegang, boeien, borden en officiële waarschuwingen. Forecastwaarden beschrijven een modeluur; ze geven nooit toestemming om te varen.', 'Verklig riktning, byar, sjögång, bojar, skyltar och officiella varningar. Prognosvärden beskriver en modelltimme; de är aldrig ett godkännande att köra.'),
    meanWind: l('10 m wind', 'Wind auf 10 m', 'Viento a 10 m', 'Wind op 10 m', 'Vind på 10 m'),
    gusts: l('Gusts', 'Böenspitze', 'Rachas', 'Vlagen', 'Byar'),
    from: l('from', 'aus', 'desde', 'uit', 'från'),
    totalCloud: l('Total cloud', 'Gesamtbewölkung', 'Nubosidad total', 'Totale bewolking', 'Total molnighet'),
    lowCloud: l('Low cloud', 'Tiefe Wolken', 'Nubes bajas', 'Lage bewolking', 'Låga moln'),
    midCloud: l('Mid cloud', 'Mittlere Wolken', 'Nubes medias', 'Middelbare bewolking', 'Mellanmoln'),
    highCloud: l('High cloud', 'Hohe Wolken', 'Nubes altas', 'Hoge bewolking', 'Höga moln'),
    radiation: l('Shortwave radiation', 'Einstrahlung (Stundenmittel)', 'Radiación de onda corta', 'Kortgolvige straling', 'Kortvågig strålning'),
    totalWave: l('Significant wave', 'Gesamtwelle', 'Ola significativa', 'Significante golf', 'Signifikant våghöjd'),
    windWave: l('Wind wave', 'Windwelle', 'Ola de viento', 'Windgolf', 'Vindvåg'),
    primarySwell: l('Primary swell', 'Primärer Swell', 'Mar de fondo principal', 'Primaire swell', 'Primär swell'),
    secondarySwell: l('Secondary swell', 'Sekundärswell', 'Mar de fondo secundario', 'Secundaire swell', 'Sekundär swell'),
    height: l('height', 'Höhe', 'altura', 'hoogte', 'höjd'),
    direction: l('from', 'aus', 'desde', 'uit', 'från'),
    period: l('period', 'Periode', 'periodo', 'periode', 'period'),
    source: l('Source', 'Wetterdaten', 'Fuente', 'Bron', 'Källa'),
    models: l('Official source', 'Modell', 'Fuente oficial', 'Officiële bron', 'Officiell källa'),
    fetched: l('Updated', 'abgerufen', 'Actualizado', 'Bijgewerkt', 'Uppdaterad'),
    forecastTime: l('Forecast time', 'Vorhersage gültig für', 'Hora de previsión', 'Prognosetijd', 'Prognostid'),
    attribution: l('Forecast data: AEMET', 'Wetterdaten: Open-Meteo', 'Datos de previsión: AEMET', 'Verwachtingsdata: AEMET', 'Prognosdata: AEMET'),
    aemetLabel: l('Open official AEMET forecast and warnings', 'Amtliche AEMET-Vorhersage und Warnungen öffnen', 'Abrir previsión y avisos oficiales de AEMET', 'Open de officiële AEMET-verwachting en waarschuwingen', 'Öppna AEMET:s officiella prognos och varningar')
  },
  windguru: {
    eyebrow: l('Use Windguru as a comparison', 'Werkzeug', 'Windguru como herramienta de comparación', 'Gebruik Windguru om te vergelijken', 'Använd Windguru för jämförelse'),
    title: l('Read the rows before you read the stars', 'Die Tabelle, auf die morgens alle schauen', 'Leed las filas antes de mirar las estrellas', 'Lees de rijen voordat jullie naar sterren kijken', 'Läs raderna innan ni tittar på stjärnorna'),
    intro: l('Windguru is useful when you compare its forecast with the official AEMET context and what you see at the beach. We use it as a learning and comparison view; AMARA’s live module uses the existing official AEMET forecast service.', 'Windguru ist in Tarifa das Standardwerkzeug, und es ist ein gutes. Es zeigt mehrere Wettermodelle nebeneinander, in einer sehr dichten Tabelle. Genau diese Dichte macht es am Anfang schwer zu lesen. Wir nehmen die Zeilen deshalb einmal auseinander.', 'Windguru resulta útil cuando comparáis su parte con el contexto oficial de AEMET y con lo que veis en la playa. Lo usamos para aprender y comparar; el módulo en directo de AMARA utiliza el servicio oficial de previsión de AEMET ya existente.', 'Windguru helpt wanneer jullie de forecast vergelijken met de officiële AEMET-context en wat jullie op het strand zien. We gebruiken het om te leren en te vergelijken; de livemodule van AMARA gebruikt de bestaande officiële AEMET-verwachtingsdienst.', 'Windguru är användbart när ni jämför prognosen med AEMET:s officiella kontext och vad ni ser på stranden. Vi använder det för att lära och jämföra; AMARA:s livemodul använder den befintliga officiella AEMET-prognostjänsten.'),
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
    eyebrow: l('Tarifa’s wind character', 'Wind in Tarifa', 'El carácter del viento en Tarifa', 'Tarifa’s windkarakter', 'Tarifas vindkaraktär'),
    title: l('Poniente, Levante and a little thermic detail', 'Zwei Windlagen, zwei völlig verschiedene Tage', 'Poniente, levante y un poco de térmica', 'Poniente, levante en een beetje thermiek', 'Poniente, levante och lite termik'),
    paragraphs: [
      l('Poniente and Levante shape many Tarifa days, yet neither name makes a beach choice for you. Poniente often brings an Atlantic feel; Levante can change the coast and the sea quickly. Direction, gust pattern, sea state, season, permitted zones and your group’s experience belong in the same conversation.', 'Poniente kommt aus Westen, vom Atlantik her. Er ist an den Hauptstränden side-onshore — schräg auflandig —, läuft meist gleichmäßiger und bringt typischerweise Welle mit. Levante kommt aus Osten. An den Hauptstränden wie Los Lances weht er meist side-offshore — schräg ablandig — und ist für Stärke und Böigkeit bekannt. Das gilt nicht überall gleich; Abschnitte wie Balneario oder Palmones liegen anders. Aus der Windrichtung allein ergibt sich deshalb weder eine Spotwahl noch eine Sicherheitseinschätzung.', 'Poniente y levante marcan muchos días en Tarifa, pero ninguno de los dos nombres elige una playa por vosotros. El poniente suele traer un aire atlántico; el levante puede cambiar costa y mar con rapidez. Dirección, patrón de rachas, estado del mar, temporada, zonas permitidas y experiencia del grupo forman parte de la misma conversación.', 'Poniente en levante bepalen veel dagen in Tarifa, maar geen van beide namen kiest een strand voor jullie. Poniente brengt vaak een Atlantisch gevoel; levante kan kust en zee snel veranderen. Richting, vlagenpatroon, zeegang, seizoen, toegestane zones en ervaring van jullie groep horen bij hetzelfde gesprek.', 'Poniente och levante präglar många dagar i Tarifa, men inget av namnen väljer strand åt er. Poniente ger ofta en atlantisk känsla; levante kan förändra kust och hav snabbt. Riktning, bymönster, sjögång, säsong, tillåtna zoner och gruppens erfarenhet hör till samma samtal.'),
      l('Thermic influence begins with uneven warming of land and air and can affect or strengthen local wind. It is a local condition to notice, not a reliable uplift added to a model value. A sun icon is pleasant context, never a thermic promise.', 'Thermik ist der Teil, der am häufigsten überschätzt wird. Sonne erwärmt Land und Wasser unterschiedlich stark, und das kann den lokalen Wind beeinflussen oder verstärken. Es ist keine Zahl, die man auf einen Modellwert addiert. Wer morgens rechnet „Prognose plus X Knoten“, rechnet sich etwas zurecht.', 'La térmica empieza cuando tierra y aire se calientan de forma desigual y puede influir o reforzar el viento local. Es una condición local para observar, no un incremento fiable que se suma a un valor del modelo. Un icono de sol da contexto agradable, nunca una promesa térmica.', 'Thermiek begint wanneer land en lucht ongelijk opwarmen en kan de lokale wind beïnvloeden of versterken. Het is een lokale omstandigheid om te observeren, geen betrouwbare verhoging die bij een modelwaarde wordt opgeteld. Een zonicoon geeft prettige context, nooit een thermiekbelofte.', 'Termisk påverkan börjar när land och luft värms olika och kan påverka eller förstärka lokal vind. Det är ett lokalt förhållande att observera, inte ett tillförlitligt påslag på ett modellvärde. En solsymbol ger trevlig kontext, aldrig ett termiskt löfte.')
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
      before: l('For the conditions a forecast cannot settle on its own, use our', 'Für die Spots und Zonen im Detail haben wir eine eigene Seite:', 'Para las condiciones que un parte no puede resolver por sí solo, usad nuestra guía de', 'Voor de omstandigheden die een forecast niet zelf kan oplossen, gebruiken jullie onze gids voor', 'För förhållanden som en prognos inte själv kan avgöra använder ni vår guide till'),
      token: 'tarifa_kitesurf_spots',
      label: l('Tarifa kitesurf spot guide', 'Kitesurf-Spots in Tarifa', 'spots de kitesurf de Tarifa', 'kitesurfspots in Tarifa', 'kitesurfspots i Tarifa'),
      after: l('— it explains zones, beach geometry and the details to check on site.', '— welcher Abschnitt bei welcher Lage funktioniert und wo die Zonen verlaufen.', '— allí explicamos zonas, geometría de la costa y los detalles que revisar sobre el terreno.', '— daar leggen we zones, kustvorm en de details uit die jullie ter plaatse controleren.', '— där förklarar vi zoner, kustgeometri och detaljerna att kontrollera på plats.')
    }
  },
  safety: {
    eyebrow: l('Safety without drama', 'Vor Ort', 'Seguridad sin dramatismos', 'Veiligheid zonder drama', 'Säkerhet utan dramatik'),
    title: l('The beach has the final word', 'Was in Tarifa amtlich geregelt ist', 'La playa tiene la última palabra', 'Het strand heeft het laatste woord', 'Stranden har sista ordet'),
    intro: l('A model forecast is useful preparation. Safety begins with the actual water, the people in your group and the rules in force that day.', 'Grundlage ist der kommunale Plan de Explotación de Playas 2024–2027 des Ayuntamiento de Tarifa. Er trennt an den Stränden verschiedene Nutzungsbereiche, und diese Trennung wird vor Ort über Markierungen, Bojen und Beschilderung umgesetzt.', 'Una previsión de modelo es una preparación útil. La seguridad empieza con el agua real, las personas de vuestro grupo y las normas vigentes ese día.', 'Een modelprognose is een nuttige voorbereiding. Veiligheid begint met het echte water, de mensen in jullie groep en de regels die die dag gelden.', 'En modellprognos är en användbar förberedelse. Säkerheten börjar med det verkliga vattnet, människorna i er grupp och de regler som gäller den dagen.'),
    priority: l('Signs, buoys and current instructions on site take priority.', 'Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.', 'La señalización, las boyas y las indicaciones vigentes sobre el terreno tienen prioridad.', 'Borden, boeien en actuele aanwijzingen ter plaatse gaan voor.', 'Skyltar, bojar och aktuella anvisningar på plats har företräde.'),
    checks: [
      {
        id: 'no-solo',
        title: l('Go with people, not just a forecast', 'Was wir euch mitgeben', 'Id en grupo, no solo con un parte', 'Ga met mensen, niet alleen met een forecast', 'Gå med människor, inte bara med en prognos'),
        text: l('Do not go on the water alone, especially in demanding or offshore conditions. When you are unsure, contact a qualified local school such as Tarifa Surf Club and choose a group or accompanied session.', 'Ein Forecast beschreibt Modellwerte. Was ihr am Wasser vorfindet, entscheidet ihr selbst — und zwar am Strand, mit Blick auf Wind, Seegang und die Lage. Geht nicht allein raus, besonders nicht bei anspruchsvollen oder ablandigen Bedingungen. Wenn ihr unsicher seid, sprecht mit einer qualifizierten lokalen Schule oder mit dem Tarifa Surf Club und geht begleitet oder in der Gruppe aufs Wasser.', 'No entréis al agua solos, sobre todo con condiciones exigentes o de viento de tierra. Si tenéis dudas, contactad con una escuela local cualificada como Tarifa Surf Club y elegid una sesión en grupo o acompañada.', 'Ga niet alleen het water op, zeker niet bij veeleisende of aflandige omstandigheden. Neem bij twijfel contact op met een gekwalificeerde lokale school zoals Tarifa Surf Club en kies een groeps- of begeleide sessie.', 'Gå inte ut på vattnet ensamma, särskilt inte i krävande eller frånlandsvind. Vid osäkerhet kontaktar ni en kvalificerad lokal skola som Tarifa Surf Club och väljer ett grupp- eller ledsagat pass.')
      },
      {
        id: 'zones',
        title: l('Use the marked area for the day', 'Valdevaqueros, Los Lances Norte und Lances Sur', 'Usad la zona marcada para ese día', 'Gebruik het gemarkeerde gebied van die dag', 'Använd dagens markerade område'),
        text: l('Zones can change with the season, beach use and current orders. Keep clear of bathing and protected areas, and use the designated launch and exit corridors. Our spot guide gives the location context; it never replaces the beach briefing.', 'Valdevaqueros: Der amtliche Plan weist unter anderem Badebereiche, Bereiche für freie Wassersport-Ein- und -Ausfahrt, Schulbereiche sowie gesonderte Kite- und Windsurfbereiche aus. Die genauen Grenzen entstehen vor Ort durch die vorgesehene Markierung und Bojenführung. Los Lances Norte: Im amtlichen Plan ist das keine einheitlich nutzbare Fläche. Es gibt getrennte Bade- und Wassersportbereiche, dazu Schul- und Kanalbereiche sowie ökologische Schutzflächen. Lances Sur: Für Lances Sur Natural und Lances Sur Urbana zeichnen wir keine eigene Kite-Grenze. Maßgeblich sind der kommunale Strandplan und die Markierung vor Ort.', 'Las zonas pueden cambiar con la temporada, el uso de la playa y las indicaciones vigentes. Manteneos fuera de las áreas de baño y protegidas y utilizad los pasillos señalizados de entrada y salida. Nuestra guía de spots aporta contexto; nunca sustituye la información en la playa.', 'Zones kunnen veranderen met het seizoen, strandgebruik en actuele aanwijzingen. Blijf uit bad- en beschermde gebieden en gebruik de aangewezen start- en uitstapstroken. Onze spotgids geeft locatiecontext; hij vervangt nooit de briefing op het strand.', 'Zoner kan ändras med säsong, strandanvändning och aktuella anvisningar. Håll er borta från bad- och skyddade områden och använd markerade start- och landningspassager. Vår spotguide ger platskontext men ersätter aldrig genomgången på stranden.')
      }
    ],
    lagoon: l('The Los Lances lagoon is a protected area. Kitesurfing is prohibited there.', 'Die Lagune von Los Lances: Hier gibt es keinen Spielraum. Im geschützten Lagunenbereich ist Kitesurfen amtlich verboten. Die Junta de Andalucía verweist dafür auf das Schutzgebietsrecht und auf die kommunale Strandordnung.', 'La laguna de Los Lances es una zona protegida. Allí está prohibido practicar kitesurf.', 'De lagune van Los Lances is beschermd gebied. Kitesurfen is daar verboden.', 'Lagunen vid Los Lances är ett skyddat område. Kitesurfing är förbjuden där.'),
    tides: {
      title: l('The factor no forecast shows', 'Der Faktor, der in keinem Forecast steht', 'El factor que no aparece en ningún parte', 'De factor die in geen enkele forecast staat', 'Faktorn som inte finns i någon prognos'),
      text: l('The tides. At high tide the beach at Los Lances becomes noticeably narrower, and so does the space for launching and landing. No wind app shows that, and the modelled sea level some weather APIs deliver is expressly not suitable for the coast — it does not replace a tide table. So factor in the tide separately, just as you do with the wind.', 'Die Gezeiten. Bei Flut wird der Strand in Los Lances deutlich schmaler, und damit auch der Platz zum Starten und Landen. Das taucht in keiner Wind-App auf, und die modellierte Meereshöhe, die manche Wetter-APIs mitliefern, ist für die Küste ausdrücklich nicht geeignet — sie ersetzt keine Gezeitentabelle. Rechnet den Tidenstand also getrennt mit ein, so wie ihr es mit dem Wind macht.', 'Las mareas. Con marea alta, la playa de Los Lances se estrecha de forma notable, y con ella el espacio para despegar y aterrizar. Eso no aparece en ninguna app de viento, y el nivel del mar modelizado que ofrecen algunas API meteorológicas no es apto para la costa, expresamente: no sustituye a una tabla de mareas. Así que tened en cuenta la marea por separado, igual que hacéis con el viento.', 'De getijden. Bij vloed wordt het strand van Los Lances duidelijk smaller, en daarmee ook de ruimte om te starten en te landen. Dat staat in geen enkele windapp, en de gemodelleerde zeehoogte die sommige weer-API’s meeleveren is uitdrukkelijk niet geschikt voor de kust — die vervangt geen getijdentabel. Reken het tij dus apart mee, net zoals jullie dat met de wind doen.', 'Tidvattnet. Vid högvatten blir stranden i Los Lances märkbart smalare, och därmed också platsen för start och landning. Det syns inte i någon vindapp, och den modellerade havsnivån som vissa väder-API:er levererar är uttryckligen inte lämpad för kusten – den ersätter ingen tidvattentabell. Räkna alltså in tidvattnet separat, precis som ni gör med vinden.')
    },
    rescueEyebrow: l('In an emergency', 'Im Ernstfall', 'En caso de emergencia', 'In noodgevallen', 'I ett nödläge'),
    rescueHeading: l('Two different systems that are often confused', 'Zwei verschiedene Systeme, die oft verwechselt werden', 'Dos sistemas distintos que a menudo se confunden', 'Twee verschillende systemen die vaak worden verward', 'Två olika system som ofta förväxlas'),
    rescueTitle: l('Private water-sport rescue has its own terms', 'Private Wassersport-Rescue — kommerzielle Anbieter mit eigenen Bedingungen', 'El rescate privado de deportes acuáticos tiene sus propias condiciones', 'Private watersportrescue heeft eigen voorwaarden', 'Privat räddning för vattensport har egna villkor'),
    rescueIntro: l('These are commercial providers with their own zones, hours and conditions. We list them separately so a private service is never mistaken for the public maritime emergency system. Confirm current availability and terms directly with the provider.', 'Das sind Unternehmen mit eigenen Zonen, Zeiten und Vertragsbedingungen. Prüft die aktuelle Verfügbarkeit und die Konditionen direkt beim Anbieter.','Son proveedores comerciales con sus propias zonas, horarios y condiciones. Los mostramos por separado para que un servicio privado nunca se confunda con el sistema público de emergencias marítimas. Confirmad disponibilidad y condiciones directamente con cada proveedor.', 'Dit zijn commerciële aanbieders met eigen zones, uren en voorwaarden. We tonen ze apart zodat een private dienst nooit met het publieke maritieme noodsysteem wordt verward. Bevestig actuele beschikbaarheid en voorwaarden rechtstreeks bij de aanbieder.', 'Det här är kommersiella aktörer med egna zoner, tider och villkor. Vi visar dem separat så att en privat tjänst aldrig förväxlas med det offentliga sjöräddningssystemet. Bekräfta aktuell tillgänglighet och villkor direkt hos leverantören.'),
    providers: [
      {
        id: 'new-angels',
        name: 'New Angels · Tarifa Rescue',
        text: l('New Angels publishes rescue-voucher conditions for Los Lances Norte and Valdevaqueros, up to two miles from the coast and with wind no stronger than 35 kn. That is a current voucher condition for this provider, not a general Tarifa limit or a promise of deployment.', 'Der Betreiber nennt für seinen Voucher Los Lances Norte und Valdevaqueros, bis zwei Meilen vor der Küste, bei Wind bis höchstens 35 kn. Das ist eine Bedingung dieses Vouchers, keine allgemeine Grenze für Tarifa und kein Einsatzversprechen. Stand: 03.09.2026.', 'New Angels publica condiciones de su bono de rescate para Los Lances Norte y Valdevaqueros, hasta dos millas de la costa y con viento de hasta 35 kn. Es una condición actual del bono de este proveedor, no un límite general de Tarifa ni una promesa de intervención.', 'New Angels publiceert voorwaarden voor een rescuevoucher voor Los Lances Norte en Valdevaqueros, tot twee mijl uit de kust en met wind tot maximaal 35 kn. Dit is een actuele vouchervoorwaarde van deze aanbieder, geen algemene Tarifa-grens en geen inzetgarantie.', 'New Angels publicerar villkor för sin räddningsvoucher för Los Lances Norte och Valdevaqueros, upp till två nautiska mil från kusten och med vind på högst 35 kn. Det är ett aktuellt vouchervillkor från denna leverantör, ingen allmän Tarifa-gräns och inget löfte om insats.'),
        href: 'https://www.tarifarescue.com/',
        label: l('Check New Angels conditions', 'New-Angels-Bedingungen prüfen', 'Consultar las condiciones de New Angels', 'Bekijk de voorwaarden van New Angels', 'Kontrollera New Angels villkor')
      },
      {
        id: 'sea-rescue',
        name: 'Sea Rescue',
        text: l('Sea Rescue describes a separate commercial service with its own operating areas and conditions. Ask the provider directly about the day, coverage and contact route; a private VHF channel is never an official emergency channel.', 'Der Betreiber beschreibt seinen Dienst als ganzjährig, mit Stationen bei Los Lances Norte und Valdevaqueros und einer angegebenen Zone bis einen Kilometer vom Strand. Von Juni bis September nennt er 11 bis 20 Uhr. Der Anbieter führt einen eigenen Funkkanal für sein System. Stand: 03.09.2026.', 'Sea Rescue describe un servicio comercial independiente con sus propias zonas y condiciones. Preguntad directamente al proveedor por el día, la cobertura y la vía de contacto; un canal privado de VHF nunca es un canal oficial de emergencia.', 'Sea Rescue beschrijft een afzonderlijke commerciële dienst met eigen werkgebieden en voorwaarden. Vraag de aanbieder rechtstreeks naar de dag, dekking en contactwijze; een privé-VHF-kanaal is nooit een officieel noodkanaal.', 'Sea Rescue beskriver en separat kommersiell tjänst med egna verksamhetsområden och villkor. Fråga leverantören direkt om dagen, täckningen och kontaktvägen; en privat VHF-kanal är aldrig en officiell nödkanal.'),
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
    emergencyTitle: l('Acute emergency at sea', 'Seenot und akuter Notfall', 'Emergencia aguda en el mar', 'Acuut noodgeval op zee', 'Akut nödläge till havs'),
    emergencyText: l('For an acute emergency, call the public emergency services. Give your position, what is happening and how many people need help. The contacts below are separate from commercial rescue services.', 'Das ist ein anderes System, staatlich, und es hat mit den Vouchers oben nichts zu tun. Nennt eure Position, was passiert ist und wie viele Menschen Hilfe brauchen. Private Funkkanäle einzelner Anbieter sind keine amtlichen Notrufkanäle.', 'Ante una emergencia aguda, llamad a los servicios públicos de emergencia. Indicad vuestra posición, qué ocurre y cuántas personas necesitan ayuda. Estos contactos están separados de los servicios comerciales de rescate.', 'Bel bij een acuut noodgeval de publieke hulpdiensten. Geef jullie positie door, wat er gebeurt en hoeveel mensen hulp nodig hebben. Deze contacten staan los van commerciële rescuediensten.', 'Vid ett akut nödläge ringer ni de offentliga räddningstjänsterna. Ange er position, vad som händer och hur många som behöver hjälp. Dessa kontakter är separata från kommersiella räddningstjänster.'),
    emergencyNumbers: [
      { id: 'emergency-112', label: l('General emergency', 'Europaweiter Notruf', 'Emergencias generales', 'Algemeen noodnummer', 'Allmänt nödnummer'), value: '112' },
      { id: 'salvamento', label: l('Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo'), value: '900 202 202' },
      { id: 'vhf-16', label: l('Official maritime VHF', 'Seefunk (VHF)', 'VHF marítimo oficial', 'Officiële maritieme VHF', 'Officiell marin VHF'), value: 'Channel 16' }
    ],
    aemetText: l('Official AEMET warnings take priority. The exact machine-readable coastal-warning zone is not currently verified, so we link directly to AEMET’s current Tarifa forecast and warnings.', 'Amtliche AEMET-Warnungen haben Vorrang vor jeder Modellrechnung. Wir fassen sie nicht zusammen und rechnen sie nicht gegen andere Modelle auf. Die maschinenlesbare Warnzone für Tarifa ist noch nicht verifiziert; bis dahin verlinken wir direkt zur amtlichen Tarifa-Vorhersage und zu den Warnungen von AEMET.', 'Los avisos oficiales de AEMET tienen prioridad. La zona costera exacta y legible por máquina no está verificada actualmente; por eso enlazamos directamente a la previsión y los avisos actuales de AEMET para Tarifa.', 'Officiële AEMET-waarschuwingen gaan voor. De exacte machineleesbare kustwaarschuwingszone is momenteel niet geverifieerd; daarom linken we rechtstreeks naar de actuele AEMET-verwachting en waarschuwingen voor Tarifa.', 'Officiella AEMET-varningar har företräde. Den exakta maskinläsbara kustvarningszonen är för närvarande inte verifierad; därför länkar vi direkt till AEMET:s aktuella Tarifa-prognos och varningar.'),
    aemetHref: 'https://www.aemet.es/es/eltiempo/prediccion/municipios/tarifa-id11035',
    aemetLabel: l('Open official AEMET forecast and warnings', 'Amtliche AEMET-Vorhersage und Warnungen öffnen', 'Abrir previsión y avisos oficiales de AEMET', 'Open de officiële AEMET-verwachting en waarschuwingen', 'Öppna AEMET:s officiella prognos och varningar')
  },
  partner: {
    eyebrow: l('AMARA × Tarifa Surf Club', 'Gemeinsam', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club', 'AMARA × Tarifa Surf Club'),
    title: l('Personal coordination, before you arrive', 'Warum wir euch zum Tarifa Surf Club schicken', 'Coordinación personal antes de llegar', 'Persoonlijke afstemming vóór jullie aankomen', 'Personlig samordning innan ni kommer'),
    intro: l('Tarifa Surf Club is an official AMARA partner, and Robert and Mark are personal friends. That means you can talk to us before the trip, arrange the practical details early and still keep teaching, conditions and water decisions with the qualified local team on the day.', 'Der Tarifa Surf Club ist offizieller AMARA-Partner, und Robert und Mark sind persönlich befreundet. Was das für euch praktisch bedeutet:', 'Tarifa Surf Club es colaborador oficial de AMARA, y Robert y Mark son amigos personales. Así podéis hablar con nosotros antes del viaje, cerrar pronto los detalles prácticos y dejar la enseñanza, las condiciones y las decisiones en el agua al equipo local cualificado ese día.', 'Tarifa Surf Club is een officiële AMARA-partner en Robert en Mark zijn persoonlijk bevriend. Zo kunnen jullie vóór de reis met ons spreken, praktische zaken vroeg regelen en les, omstandigheden en beslissingen op het water die dag bij het gekwalificeerde lokale team laten.', 'Tarifa Surf Club är en officiell AMARA-partner och Robert och Mark är personliga vänner. Därför kan ni prata med oss före resan, ordna praktiska saker tidigt och ändå låta undervisning, förhållanden och beslut på vattnet ligga hos det kvalificerade lokala teamet den dagen.'),
    imageAlt: l('Mark from Tarifa Surf Club and Robert from AMARA in Tarifa', 'Mark vom Tarifa Surf Club und Robert von AMARA in Tarifa', 'Mark de Tarifa Surf Club y Robert de AMARA en Tarifa', 'Mark van Tarifa Surf Club en Robert van AMARA in Tarifa', 'Mark från Tarifa Surf Club och Robert från AMARA i Tarifa'),
    imageCaption: l('Mark and Robert: direct coordination in Tarifa', 'Mark und Robert: direkte Abstimmung in Tarifa', 'Mark y Robert: coordinación directa en Tarifa', 'Mark en Robert: directe afstemming in Tarifa', 'Mark och Robert: direkt samordning i Tarifa'),
    benefits: [
      {
        id: 'equipment-before-arrival',
        title: l('Material, sorted before arrival', 'Material, vor der Anreise geklärt', 'Material resuelto antes de llegar', 'Materiaal geregeld vóór aankomst', 'Utrustning ordnad före ankomst'),
        text: l('You can buy or rent kitesurf equipment through Tarifa Surf Club before you travel. We coordinate the details ahead of time, and the equipment is provided directly at your AMARA accommodation.', 'Kitesurf-Material könnt ihr vor der Anreise über den Tarifa Surf Club kaufen oder leihen. Die Abstimmung läuft vorab. Das Material steht bei eurer Ankunft direkt in der Unterkunft.', 'Podéis comprar o alquilar material de kitesurf a través de Tarifa Surf Club antes del viaje. Coordinamos los detalles con antelación y el material se entrega directamente en vuestro alojamiento AMARA.', 'Jullie kunnen vóór de reis kitesurfmateriaal kopen of huren via Tarifa Surf Club. We stemmen de details vooraf af en de uitrusting wordt direct bij jullie AMARA-accommodatie geleverd.', 'Ni kan köpa eller hyra kitesurfutrustning genom Tarifa Surf Club före resan. Vi samordnar detaljerna i förväg och utrustningen tillhandahålls direkt vid ert AMARA-boende.')
      },
      {
        id: 'deposit',
        title: l('A clear rental-deposit arrangement', 'Die Kaution beim Verleih', 'Un acuerdo claro sobre la fianza de alquiler', 'Een heldere regeling voor de huurwaarborg', 'En tydlig lösning för hyresdepositionen'),
        text: l('Rental equipment normally requires a deposit with the provider. For AMARA guests, AMARA places that rental security deposit with Tarifa Surf Club. We explain the arrangement before you confirm the rental.', 'Wer Material leiht, hinterlegt normalerweise eine Kaution beim Anbieter. Für AMARA-Gäste hinterlegen wir diese Kaution beim Tarifa Surf Club.', 'El material de alquiler suele requerir una fianza con el proveedor. Para los huéspedes de AMARA, AMARA deposita esa garantía de alquiler en Tarifa Surf Club. Os explicamos el acuerdo antes de confirmar el alquiler.', 'Huurmateriaal vraagt normaal gesproken een waarborg bij de aanbieder. Voor AMARA-gasten stort AMARA die huurwaarborg bij Tarifa Surf Club. We lichten de regeling toe voordat jullie de huur bevestigen.', 'Hyresutrustning kräver normalt en deposition hos leverantören. För AMARA-gäster lämnar AMARA denna hyresdeposition hos Tarifa Surf Club. Vi förklarar upplägget innan ni bekräftar hyran.')
      },
      {
        id: 'guided-options',
        title: l('Courses, camp or an accompanied session', 'Kurs, Kitecamp oder begleitete Session', 'Cursos, campamento o sesión acompañada', 'Lessen, camp of een begeleide sessie', 'Kurser, camp eller ett ledsagat pass'),
        text: l('If you feel unsure or do not want to go on the water alone, lessons, a kitecamp or an accompanied session are the practical next step. The local team assesses the day and the suitable format with you.', 'Wer noch unsicher ist oder nicht allein rauswill: Kurs, Kitecamp oder eine begleitete Session sind dafür da. Bei gebuchten Leistungen des Tarifa Surf Club — Kitekurs, Kitecamp, Help to Kite — ist die Seerettung enthalten. Beim reinen Materialverleih ist sie es nicht.', 'Si tenéis dudas o no queréis entrar al agua solos, un curso, un kitecamp o una sesión acompañada son el siguiente paso práctico. El equipo local valora con vosotros el día y el formato adecuado.', 'Als jullie twijfelen of niet alleen het water op willen, zijn lessen, een kitecamp of een begeleide sessie de praktische volgende stap. Het lokale team beoordeelt samen met jullie de dag en de passende vorm.', 'Om ni är osäkra eller inte vill gå ut på vattnet ensamma är lektioner, kitecamp eller ett ledsagat pass nästa praktiska steg. Det lokala teamet bedömer dagen och lämpligt upplägg tillsammans med er.')
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
    eyebrow: l('Keep the practical details together', 'Weiter', 'Reunid los detalles prácticos', 'Houd de praktische details bij elkaar', 'Håll ihop de praktiska detaljerna'),
    title: l('Two useful next reads for your Tarifa stay', 'Weiter zu den Spots und zum Überblick', 'Dos lecturas útiles para vuestra estancia en Tarifa', 'Twee nuttige vervolgteksten voor jullie Tarifa-verblijf', 'Två användbara nästa läsningar för er Tarifa-vistelse'),
    links: [
      {
        id: 'spots',
        token: 'tarifa_kitesurf_spots',
        title: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
        text: l('Wind direction only becomes useful on a coastline. See how zones, beach geometry and current access turn a forecast into a careful on-site check.', 'Welcher Abschnitt bei welcher Lage funktioniert und wo die Zonen verlaufen.', 'La dirección del viento solo cobra sentido en la costa. Ved cómo las zonas, la geometría de playa y los accesos actuales convierten un parte en una comprobación cuidadosa sobre el terreno.', 'Windrichting wordt pas bruikbaar aan de kust. Zie hoe zones, strandvorm en actuele toegang een forecast omzetten in een zorgvuldige controle ter plaatse.', 'Vindriktning blir användbar först vid kusten. Se hur zoner, strandgeometri och aktuell tillgång gör en prognos till en noggrann kontroll på plats.')
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
    eyebrow: l('Your Tarifa basecamp', 'Bleiben', 'Vuestra base en Tarifa', 'Jullie basis in Tarifa', 'Er bas i Tarifa'),
    title: l('Make the practical part of the trip lighter', 'Vom Bett zum Wasser, ohne Umweg', 'Haced más sencilla la parte práctica del viaje', 'Maak het praktische deel van de reis lichter', 'Gör den praktiska delen av resan enklare'),
    text: l('At AMARA Family & Surf, we can coordinate the stay, arrival and kite logistics in one conversation. Material can be ready at the accommodation, and the local team remains the right place for the day’s instruction and water decisions. Check availability when your dates begin to take shape.', 'Bei AMARA Family & Surf koordinieren wir Aufenthalt, Anreise und Kite-Logistik in einem Gespräch. Material kann bei eurer Ankunft in der Unterkunft bereitstehen, die Abstimmung läuft persönlich und vorab. Prüft die Verfügbarkeit, sobald eure Reisedaten Form annehmen.', 'En AMARA Family & Surf podemos coordinar estancia, llegada y logística de kite en una sola conversación. El material puede estar listo en el alojamiento, mientras que el equipo local sigue siendo el lugar adecuado para la enseñanza y las decisiones en el agua de cada día. Consultad disponibilidad cuando vuestras fechas vayan tomando forma.', 'Bij AMARA Family & Surf kunnen we verblijf, aankomst en kitelogistiek in één gesprek afstemmen. Materiaal kan bij de accommodatie klaarstaan, terwijl het lokale team de juiste plek blijft voor les en beslissingen op het water van die dag. Bekijk de beschikbaarheid zodra jullie data vorm krijgen.', 'På AMARA Family & Surf kan vi samordna boende, ankomst och kitesurflogistik i ett samtal. Utrustning kan vara klar vid boendet, medan det lokala teamet fortfarande är rätt plats för dagens undervisning och beslut på vattnet. Kontrollera tillgängligheten när era datum börjar ta form.'),
    stayLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Visa AMARA Family & Surf'),
    availabilityLabel: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Bekijk beschikbaarheid', 'Se tillgänglighet'),
    finalLine: l('Forecasts are model calculations. Official warnings and local rules have their own priority. Signs, buoys and current instructions on site take precedence.', 'Forecasts sind Modellrechnungen. Amtliche Warnungen und lokale Regeln haben eine eigene Priorität. Beschilderung, Bojen und aktuelle Anordnungen vor Ort gehen vor.', 'Los partes son cálculos de modelos. Los avisos oficiales y las normas locales tienen prioridad propia. La señalización, las boyas y las indicaciones vigentes sobre el terreno van primero.', 'Forecasts zijn modelberekeningen. Officiële waarschuwingen en lokale regels hebben een eigen prioriteit. Borden, boeien en actuele aanwijzingen ter plaatse gaan voor.', 'Prognoser är modellberäkningar. Officiella varningar och lokala regler har egen prioritet. Skyltar, bojar och aktuella anvisningar på plats har företräde.')
  }
};
