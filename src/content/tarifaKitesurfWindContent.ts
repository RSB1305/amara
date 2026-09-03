import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

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
    forecastHeading: LocalizedText;
    windHeading: LocalizedText;
    waveHeading: LocalizedText;
    skyHeading: LocalizedText;
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
    terms: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    modelNote: LocalizedText;
  };
  localWind: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    paragraphs: LocalizedText[];
    observationLabel: LocalizedText;
    observation: LocalizedText;
    spotLink: { before: LocalizedText; token: LinkToken; label: LocalizedText; after: LocalizedText };
  };
  safety: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    intro: LocalizedText;
    priority: LocalizedText;
    checks: Array<{ id: string; title: LocalizedText; text: LocalizedText }>;
    lagoon: LocalizedText;
    rescueTitle: LocalizedText;
    rescueIntro: LocalizedText;
    providers: Array<{ id: string; name: string; text: LocalizedText; href: string; label: LocalizedText }>;
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
    imageAlt: l('Robert Böhmer from AMARA at the Tarifa coast', 'Robert Böhmer von AMARA an der Küste von Tarifa', 'Robert Böhmer de AMARA en la costa de Tarifa', 'Robert Böhmer van AMARA aan de kust van Tarifa', 'Robert Böhmer från AMARA vid Tarifas kust'),
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
    forecastHeading: l('Official forecast overview', 'Was die Modelle gerade rechnen', 'Resumen de la previsión oficial', 'Overzicht officiële verwachting', 'Översikt av den officiella prognosen'),
    windHeading: l('What wind and gusts say', 'Wind und Böen', 'Qué dicen el viento y las rachas', 'Wat wind en vlagen zeggen', 'Vad vind och byar säger'),
    waveHeading: l('What wave and swell say', 'Welle und Swell', 'Was dicen ola y mar de fondo', 'Wat golf en swell zeggen', 'Vad våg och swell säger'),
    skyHeading: l('Clouds and sun: weather context', 'Wolken und Sonne', 'Nubes y sol: contexto meteorológico', 'Wolken en zon: weercontext', 'Moln och sol: väderkontext'),
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
    terms: [
      {
        id: 'wind-gusts-direction',
        title: l('Mean wind, gusts and direction', 'Mittelwind, Böen und Richtung', 'Viento medio, rachas y dirección', 'Gemiddelde wind, vlagen en richting', 'Medelvind, byar och riktning'),
        text: l('The wind row gives a modelled mean; the gust row shows the faster peaks around it. Wind direction names where the wind comes from. A growing gap between mean and gusts is a reason to look more carefully at what is happening on the beach.', 'Der Mittelwind ist der Grundwind, den das Modell für diese Stunde berechnet — nicht die Kraft, die ihr am Kite spürt. Die Böen sind die berechneten kurzfristigen Spitzen darüber. Ein großer Abstand zwischen beiden Werten heißt: Das Modell rechnet mit viel Schwankung. Wind wird danach benannt, woher er kommt — Nordwind kommt aus Norden. Aus der Richtung allein ergibt sich noch keine Aussage über euren Strand.', 'La fila de viento muestra una media modelizada y la de rachas los picos más rápidos alrededor. La dirección indica de dónde viene el viento. Si aumenta la diferencia entre media y rachas, mirad con más atención qué está ocurriendo en la playa.', 'De windrij toont een gemodelleerd gemiddelde en de vlagenrij de snellere pieken eromheen. De richting zegt waar de wind vandaan komt. Wordt het verschil tussen gemiddelde en vlagen groter, kijk dan extra goed wat er op het strand gebeurt.', 'Vindraden visar ett modellerat medelvärde och byraden de snabbare topparna runt det. Riktningen anger varifrån vinden kommer. Om skillnaden mellan medelvind och byar växer behöver ni titta extra noga på stranden.')
      },
      {
        id: 'waves-and-swell',
        title: l('Wave, period and swell', 'Welle, Periode und Swell', 'Ola, periodo y mar de fondo', 'Golf, periode en swell', 'Våg, period och swell'),
        text: l('Wave height gives a significant sea-state value. Period tells you the time between waves; peak period highlights the strongest energy interval when a provider offers it. Wind wave is locally wind-driven; swell and secondary swell describe longer-travelling components. The direction shown for waves is the direction the waves come from.', 'Die Wellenhöhe ist der signifikante Wellenwert des Wellenmodells und sagt nichts über eine einzelne Welle oder den Shorebreak. Die Periode ist der Zeitabstand in Sekunden zwischen den modellierten Wellen und hat nichts mit der Höhe zu tun. Die Peak-Periode gehört zum energiereichsten Anteil — ein garantierter Abstand zwischen zwei konkreten Wellen ist sie nicht. Windwelle ist der Seegang, den der lokale und regionale Wind erzeugt, und nur ein Teil des gesamten Seegangs. Swell ist Wellenenergie, die von weit her kommt, und kann gleichzeitig aus einer ganz anderen Richtung laufen als die Windwelle.', 'La altura de ola describe un valor significativo del estado del mar. El periodo es el tiempo entre olas; el periodo de pico marca, cuando está disponible, el intervalo de energía más fuerte. La ola de viento nace localmente; el mar de fondo y el secundario viajan más lejos. La dirección indicada para las olas señala de dónde vienen.', 'Golfhoogte geeft een significante waarde voor de zeetoestand. De periode is de tijd tussen golven; piekperiode markeert, wanneer beschikbaar, het interval met de meeste energie. Windgolf ontstaat lokaal; swell en secundaire swell reizen verder. De aangegeven golfrichting zegt waar de golven vandaan komen.', 'Våghöjd anger ett signifikant värde för sjötillståndet. Period är tiden mellan vågorna; toppperiod markerar, när den finns, intervallet med starkast energi. Vindvåg drivs lokalt av vinden; swell och sekundär swell har färdats längre. Vågarnas riktning anger varifrån vågorna kommer.')
      },
      {
        id: 'cloud-layers',
        title: l('Cloud layers and sunshine', 'Wolkenschichten und Sonne', 'Capas de nubes y sol', 'Wolkenlagen en zon', 'Molnlager och sol'),
        text: l('Low, mid and high cloud separate the sky into useful layers. Shortwave radiation is a weather-context value, not a thermic bonus promised for the beach. Sun can influence local air movement when land and air warm differently, yet it never adds a fixed number to a forecast.', 'Niedrige, mittlere und hohe Wolken werden getrennt ausgewiesen. Das hilft, den Himmel und die Unterschiede zwischen den Modellen zu verstehen. Wenig Wolken ist kein Beleg für Thermik, und ein Sonnen-Icon ist kein Thermik-Versprechen.', 'Las nubes bajas, medias y altas separan el cielo en capas útiles. La radiación de onda corta da contexto meteorológico; no promete un extra térmico para la playa. El sol puede influir en el movimiento local del aire cuando tierra y aire se calientan de forma distinta, pero no suma una cifra fija a un parte.', 'Lage, middelbare en hoge bewolking delen de lucht op in bruikbare lagen. Kortgolvige straling geeft weercontext; zij belooft geen thermische bonus voor het strand. Zon kan de lokale luchtbeweging beïnvloeden wanneer land en lucht anders opwarmen, maar telt geen vast getal bij een forecast op.', 'Låga, mellan- och höga moln delar upp himlen i användbara lager. Kortvågig strålning ger väderkontext; den lovar inget termiskt tillskott på stranden. Sol kan påverka lokal luftrörelse när land och luft värms olika, men lägger aldrig till ett fast tal i en prognos.')
      },
      {
        id: 'models-resolution',
        title: l('Models and grid resolution', 'Rasterweite: der Punkt, den die meisten falsch verstehen', 'Modelos y resolución de malla', 'Modellen en rasterresolutie', 'Modeller och rutnätsupplösning'),
        text: l('You may see WRF 1 km Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS 9 km or GFS 13 km. A smaller kilometre figure means a finer model grid. It does not automatically make the forecast at your beach more accurate. When several models agree on direction, strength and timing, the picture is more consistent. When they split, the uncertainty is visible.', 'Windguru führt für diese Region unter anderem WRF 1 km für Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS-HRES 9 km und GFS 13 km. Die Kilometerzahl beschreibt, wie fein ein Modell den Raum auflöst — ein feineres Raster kann kleinere Strukturen wie die Meerenge überhaupt erst abbilden. Daraus folgt aber nicht, dass die Vorhersage an eurem Strand richtiger ist. Rasterweite ist eine Eigenschaft von mehreren.', 'Podéis ver WRF 1 km Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS 9 km o GFS 13 km. Una cifra menor de kilómetros significa una malla más fina. No hace automáticamente más acertada la previsión en vuestra playa. Si varios modelos coinciden en dirección, intensidad y evolución, el escenario es más consistente. Si se separan, la incertidumbre se ve.', 'Jullie kunnen WRF 1 km Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS 9 km of GFS 13 km zien. Een lager aantal kilometers betekent een fijner modelraster. Dat maakt de forecast op jullie strand niet vanzelf nauwkeuriger. Liggen meerdere modellen bij richting, kracht en verloop dicht bij elkaar, dan is het beeld consistenter. Lopen ze uiteen, dan is de onzekerheid zichtbaar.', 'Ni kan se WRF 1 km Tarifa, WRF 3 km Gibraltar, WRF 9 km Europe, IFS 9 km eller GFS 13 km. Ett lägre antal kilometer betyder ett finare modellrutnät. Det gör inte automatiskt prognosen på er strand mer träffsäker. När flera modeller ligger nära varandra i riktning, styrka och utveckling är bilden mer konsekvent. När de skiljer sig åt syns osäkerheten.')
      }
    ],
    modelNote: l('Compare a few models in the same time window, then return to the actual beach. Green stars are friendly; they do not carry your board.', 'Der brauchbarere Umgang: mehrere Modelle nebeneinander lesen. Wenn zwei oder drei in Richtung, Stärke und zeitlichem Verlauf ungefähr übereinstimmen, ist das Bild konsistent. Wenn sie auseinanderlaufen, seht ihr die Unsicherheit — und das ist eine echte Information, keine Störung. Die grünen Sternchen sind ein netter Hinweis. Euer Board tragen sie nicht ins Wasser.', 'Comparad varios modelos en la misma franja y volved después a la playa real. Las estrellas verdes caen bien, pero no llevan vuestra tabla.', 'Vergelijk een paar modellen in hetzelfde tijdvenster en ga daarna terug naar het echte strand. Groene sterren zijn aardig, maar ze dragen jullie board niet.', 'Jämför några modeller i samma tidsfönster och gå sedan tillbaka till den verkliga stranden. Gröna stjärnor är trevliga, men de bär inte er bräda.')
  },
  localWind: {
    eyebrow: l('Tarifa’s wind character', 'Wind in Tarifa', 'El carácter del viento en Tarifa', 'Tarifa’s windkarakter', 'Tarifas vindkaraktär'),
    title: l('Poniente, Levante and a little thermic detail', 'Zwei Windlagen, zwei völlig verschiedene Tage', 'Poniente, levante y un poco de térmica', 'Poniente, levante en een beetje thermiek', 'Poniente, levante och lite termik'),
    paragraphs: [
      l('Poniente and Levante shape many Tarifa days, yet neither name makes a beach choice for you. Poniente often brings an Atlantic feel; Levante can change the coast and the sea quickly. Direction, gust pattern, sea state, season, permitted zones and your group’s experience belong in the same conversation.', 'Poniente kommt aus Westen, vom Atlantik her. Er ist an den Hauptstränden side-onshore — schräg auflandig —, läuft meist gleichmäßiger und bringt typischerweise Welle mit. Levante kommt aus Osten. An den Hauptstränden wie Los Lances weht er meist side-offshore — schräg ablandig — und ist für Stärke und Böigkeit bekannt. Das gilt nicht überall gleich; Abschnitte wie Balneario oder Palmones liegen anders. Aus der Windrichtung allein ergibt sich deshalb weder eine Spotwahl noch eine Sicherheitseinschätzung.', 'Poniente y levante marcan muchos días en Tarifa, pero ninguno de los dos nombres elige una playa por vosotros. El poniente suele traer un aire atlántico; el levante puede cambiar costa y mar con rapidez. Dirección, patrón de rachas, estado del mar, temporada, zonas permitidas y experiencia del grupo forman parte de la misma conversación.', 'Poniente en levante bepalen veel dagen in Tarifa, maar geen van beide namen kiest een strand voor jullie. Poniente brengt vaak een Atlantisch gevoel; levante kan kust en zee snel veranderen. Richting, vlagenpatroon, zeegang, seizoen, toegestane zones en ervaring van jullie groep horen bij hetzelfde gesprek.', 'Poniente och levante präglar många dagar i Tarifa, men inget av namnen väljer strand åt er. Poniente ger ofta en atlantisk känsla; levante kan förändra kust och hav snabbt. Riktning, bymönster, sjögång, säsong, tillåtna zoner och gruppens erfarenhet hör till samma samtal.'),
      l('Thermic influence begins with uneven warming of land and air and can affect or strengthen local wind. It is a local condition to notice, not a reliable uplift added to a model value. A sun icon is pleasant context, never a thermic promise.', 'Thermik ist der Teil, der am häufigsten überschätzt wird. Sonne erwärmt Land und Wasser unterschiedlich stark, und das kann den lokalen Wind beeinflussen oder verstärken. Es ist keine Zahl, die man auf einen Modellwert addiert. Wer morgens rechnet „Prognose plus X Knoten“, rechnet sich etwas zurecht.', 'La térmica empieza cuando tierra y aire se calientan de forma desigual y puede influir o reforzar el viento local. Es una condición local para observar, no un incremento fiable que se suma a un valor del modelo. Un icono de sol da contexto agradable, nunca una promesa térmica.', 'Thermiek begint wanneer land en lucht ongelijk opwarmen en kan de lokale wind beïnvloeden of versterken. Het is een lokale omstandigheid om te observeren, geen betrouwbare verhoging die bij een modelwaarde wordt opgeteld. Een zonicoon geeft prettige context, nooit een thermiekbelofte.', 'Termisk påverkan börjar när land och luft värms olika och kan påverka eller förstärka lokal vind. Det är ett lokalt förhållande att observera, inte ett tillförlitligt påslag på ett modellvärde. En solsymbol ger trevlig kontext, aldrig ett termiskt löfte.')
    ],
    observationLabel: l('Robert · personal experience', 'Roberts Blick · Robert, AMARA', 'Robert · experiencia personal', 'Robert · persoonlijke ervaring', 'Robert · personlig erfarenhet'),
    observation: l('From my personal experience in Tarifa, a forecast becomes useful when we slow down long enough to look at the water, the beach set-up and the people who will be there with us. That short pause has saved more sessions than any clever forecast tab.', 'Aus meiner persönlichen Erfahrung: Tarifa wird mit rund 300 Kitetagen im Jahr beworben, und ja — ein Teil davon sind Levante-Tage. Wer die alle mitnehmen will, muss auch bei Levante kiten können. Aber das Kitesurfen, das ich meine, das, was die Locals hier machen: das ist Poniente. Los Lances direkt vor der Tür, Welle drin, der Wind nicht brutal, aber stark genug für richtig viel Spaß. Das ist für mich das Tarifa-Erlebnis. Deshalb wollte ich meine Wohnung auch genau dort haben — mit Blick auf Los Lances. Ich sehe, wann der Wind kommt. Und wenn er kommt, packe ich meine Sachen und gehe raus.', 'Por mi experiencia personal en Tarifa, un parte sirve cuando bajamos el ritmo lo suficiente para mirar el agua, el montaje de la playa y a las personas que estarán allí con nosotros. Esa pequeña pausa ha salvado más sesiones que cualquier pestaña de previsión ingeniosa.', 'Uit mijn persoonlijke ervaring in Tarifa wordt een forecast bruikbaar wanneer we lang genoeg vertragen om naar het water, de inrichting van het strand en de mensen om ons heen te kijken. Die korte pauze heeft meer sessies gered dan welk slim forecasttabblad ook.', 'Av min personliga erfarenhet i Tarifa blir en prognos användbar när vi saktar ner tillräckligt för att titta på vattnet, strandens uppställning och människorna som är där med oss. Den korta pausen har räddat fler pass än någon smart prognosflik.'),
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
    rescueTitle: l('Private water-sport rescue has its own terms', 'Private Wassersport-Rescue — kommerzielle Anbieter mit eigenen Bedingungen', 'El rescate privado de deportes acuáticos tiene sus propias condiciones', 'Private watersportrescue heeft eigen voorwaarden', 'Privat räddning för vattensport har egna villkor'),
    rescueIntro: l('These are commercial providers with their own zones, hours and conditions. We list them separately so a private service is never mistaken for the public maritime emergency system. Confirm current availability and terms directly with the provider.', 'Das sind Unternehmen mit eigenen Zonen, Zeiten und Vertragsbedingungen. Prüft die aktuelle Verfügbarkeit und die Konditionen direkt beim Anbieter. Warum es diese Anbieter überhaupt gibt, erklärt Mark vom Tarifa Surf Club so: Die staatliche Seenotrettung holt im Ernstfall die Person, das Material bleibt im Wasser. Eine Rescue-Card ist Plan B. Sie ändert die Bedingungen auf dem Wasser nicht.', 'Son proveedores comerciales con sus propias zonas, horarios y condiciones. Los mostramos por separado para que un servicio privado nunca se confunda con el sistema público de emergencias marítimas. Confirmad disponibilidad y condiciones directamente con cada proveedor.', 'Dit zijn commerciële aanbieders met eigen zones, uren en voorwaarden. We tonen ze apart zodat een private dienst nooit met het publieke maritieme noodsysteem wordt verward. Bevestig actuele beschikbaarheid en voorwaarden rechtstreeks bij de aanbieder.', 'Det här är kommersiella aktörer med egna zoner, tider och villkor. Vi visar dem separat så att en privat tjänst aldrig förväxlas med det offentliga sjöräddningssystemet. Bekräfta aktuell tillgänglighet och villkor direkt hos leverantören.'),
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
    partnerHref: 'https://tarifasurfclub.com/',
    partnerLabel: l('Visit Tarifa Surf Club', 'Tarifa Surf Club besuchen', 'Visitar Tarifa Surf Club', 'Bezoek Tarifa Surf Club', 'Besök Tarifa Surf Club'),
    contactLabel: l('Ask AMARA about your kite stay', 'AMARA zum Kite-Aufenthalt fragen', 'Preguntar a AMARA sobre vuestro viaje de kite', 'Vraag AMARA naar jullie kiteverblijf', 'Fråga AMARA om er kitevistelse'),
    contactMessage: l('Hello AMARA, we would like to coordinate a Tarifa kite stay. Travel dates: / Guests: / Experience: / Equipment, lessons or camp:', 'Hallo AMARA, wir möchten einen Kite-Aufenthalt in Tarifa abstimmen. Reisedaten: / Gäste: / Erfahrung: / Material, Kurse oder Camp:', 'Hola AMARA, queremos coordinar una estancia de kite en Tarifa. Fechas: / Huéspedes: / Experiencia: / Material, cursos o camp:', 'Hallo AMARA, we willen een kiteverblijf in Tarifa afstemmen. Reisdata: / Gasten: / Ervaring: / Materiaal, lessen of camp:', 'Hej AMARA, vi vill samordna en kitevistelse i Tarifa. Resedatum: / Gäster: / Erfarenhet: / Utrustning, kurser eller camp:')
  },
  related: {
    eyebrow: l('Keep the practical details together', 'Weiter', 'Reunid los detalles prácticos', 'Houd de praktische details bij elkaar', 'Håll ihop de praktiska detaljerna'),
    title: l('Two useful next reads for your Tarifa stay', 'Weiter zu den Spots und zur Kiteschule', 'Dos lecturas útiles para vuestra estancia en Tarifa', 'Twee nuttige vervolgteksten voor jullie Tarifa-verblijf', 'Två användbara nästa läsningar för er Tarifa-vistelse'),
    links: [
      {
        id: 'spots',
        token: 'tarifa_kitesurf_spots',
        title: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
        text: l('Wind direction only becomes useful on a coastline. See how zones, beach geometry and current access turn a forecast into a careful on-site check.', 'Welcher Abschnitt bei welcher Lage funktioniert und wo die Zonen verlaufen.', 'La dirección del viento solo cobra sentido en la costa. Ved cómo las zonas, la geometría de playa y los accesos actuales convierten un parte en una comprobación cuidadosa sobre el terreno.', 'Windrichting wordt pas bruikbaar aan de kust. Zie hoe zones, strandvorm en actuele toegang een forecast omzetten in een zorgvuldige controle ter plaatse.', 'Vindriktning blir användbar först vid kusten. Se hur zoner, strandgeometri och aktuell tillgång gör en prognos till en noggrann kontroll på plats.')
      },
      {
        id: 'kite-school',
        token: 'tarifa_kite_school',
        title: l('Kite school and courses', 'Kiteschule und Kurse', 'Escuela y cursos de kite', 'Kiteschool en lessen', 'Kiteskola och kurser'),
        text: l('When conditions or confidence leave questions open, a qualified instructor can turn today’s beach briefing into an appropriate lesson or accompanied session.', 'Kurs, Kitecamp oder begleitete Session: die sinnvolle Option, wenn ihr noch unsicher seid oder nicht allein aufs Wasser möchtet.', 'Cuando las condiciones o la confianza dejan preguntas abiertas, un instructor cualificado puede convertir el briefing de playa de hoy en una clase o sesión acompañada adecuada.', 'Als omstandigheden of vertrouwen vragen openlaten, kan een gekwalificeerde instructeur de strandbriefing van vandaag vertalen naar een passende les of begeleide sessie.', 'När förhållanden eller självförtroende lämnar frågor öppna kan en kvalificerad instruktör göra dagens strandbriefing till en lämplig lektion eller ett ledsagat pass.')
      }
    ]
  },
  closing: {
    eyebrow: l('Your Tarifa basecamp', 'Bleiben', 'Vuestra base en Tarifa', 'Jullie basis in Tarifa', 'Er bas i Tarifa'),
    title: l('Make the practical part of the trip lighter', 'Vom Bett zum Wasser, ohne Umweg', 'Haced más sencilla la parte práctica del viaje', 'Maak het praktische deel van de reis lichter', 'Gör den praktiska delen av resan enklare'),
    text: l('At AMARA Family & Surf, we can coordinate the stay, arrival and kite logistics in one conversation. Material can be ready at the accommodation, and the local team remains the right place for the day’s instruction and water decisions. Check availability when your dates begin to take shape.', 'Bei AMARA Family & Surf koordinieren wir Aufenthalt, Anreise und Kite-Logistik in einem Gespräch. Material kann bei eurer Ankunft in der Unterkunft bereitstehen, die Abstimmung läuft persönlich und vorab. Prüft die Verfügbarkeit, sobald eure Reisedaten Form annehmen.', 'En AMARA Family & Surf podemos coordinar estancia, llegada y logística de kite en una sola conversación. El material puede estar listo en el alojamiento, mientras que el equipo local sigue siendo el lugar adecuado para la enseñanza y las decisiones en el agua de cada día. Consultad disponibilidad cuando vuestras fechas vayan tomando forma.', 'Bij AMARA Family & Surf kunnen we verblijf, aankomst en kitelogistiek in één gesprek afstemmen. Materiaal kan bij de accommodatie klaarstaan, terwijl het lokale team de juiste plek blijft voor les en beslissingen op het water van die dag. Bekijk de beschikbaarheid zodra jullie data vorm krijgen.', 'På AMARA Family & Surf kan vi samordna boende, ankomst och kitesurflogistik i ett samtal. Utrustning kan vara klar vid boendet, medan det lokala teamet fortfarande är rätt plats för dagens undervisning och beslut på vattnet. Kontrollera tillgängligheten när era datum börjar ta form.'),
    stayLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Visa AMARA Family & Surf'),
    availabilityLabel: l('Check availability', 'Verfügbarkeit prüfen', 'Consultar disponibilidad', 'Bekijk beschikbaarheid', 'Se tillgänglighet')
  }
};
