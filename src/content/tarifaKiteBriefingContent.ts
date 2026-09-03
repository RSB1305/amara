import type { LocalizedText } from '../types/content';

/**
 * Copy for the Tarifa kite briefing: the labels of the live data object and
 * the sentence library of its explanation layer.
 *
 * The sentences are written here, at authoring time, and released once. At
 * runtime a fixed set of rules in the briefing component picks one variant
 * per situation from the fetched values; no text is generated on the fly. The
 * library therefore also defines what the briefing can never say: nothing in
 * it approves or forbids a session, names a kite size, picks a spot, scores
 * anything or promises rescue. Placeholders in braces are filled with the
 * modelled values and their hour.
 */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface TarifaKiteBriefingCopy {
  labels: {
    loading: LocalizedText;
    unavailableTitle: LocalizedText;
    unavailableText: LocalizedText;
    modelHour: LocalizedText;
    nextHours: LocalizedText;
    columnTime: LocalizedText;
    columnWind: LocalizedText;
    columnGusts: LocalizedText;
    columnDirection: LocalizedText;
    columnWave: LocalizedText;
    seaUnavailable: LocalizedText;
    cloudLayers: LocalizedText;
    weatherData: LocalizedText;
    model: LocalizedText;
    originalSource: LocalizedText;
    fetched: LocalizedText;
    validFor: LocalizedText;
    waveData: LocalizedText;
    openMeteoLink: LocalizedText;
    noValue: LocalizedText;
  };
  compass: {
    n: LocalizedText;
    ne: LocalizedText;
    e: LocalizedText;
    se: LocalizedText;
    s: LocalizedText;
    sw: LocalizedText;
    w: LocalizedText;
    nw: LocalizedText;
  };
  situations: {
    wind: LocalizedText;
    gustsWide: LocalizedText;
    gustsClose: LocalizedText;
    trendRising: LocalizedText;
    trendFalling: LocalizedText;
    trendFlat: LocalizedText;
    seaCrossed: LocalizedText;
    seaAligned: LocalizedText;
    seaSmall: LocalizedText;
    seaUnavailable: LocalizedText;
    sky: LocalizedText;
    check: LocalizedText;
  };
}

export const tarifaKiteBriefingCopy: TarifaKiteBriefingCopy = {
  labels: {
    loading: l('Loading the model values …', 'Modellwerte werden geladen …', 'Cargando los valores del modelo …', 'Modelwaarden worden geladen …', 'Modellvärden laddas …'),
    unavailableTitle: l('The live briefing is currently unavailable', 'Das Live-Briefing ist gerade nicht verfügbar', 'El briefing en directo no está disponible ahora mismo', 'De livebriefing is op dit moment niet beschikbaar', 'Livebriefingen är inte tillgänglig just nu'),
    unavailableText: l('We would rather show nothing here than a value we cannot stand behind. The official AEMET forecast above remains available.', 'Wir zeigen an dieser Stelle lieber nichts als einen Wert, für den wir nicht geradestehen können. Die amtliche AEMET-Vorhersage oben bleibt erreichbar.', 'Preferimos no mostrar nada aquí antes que un valor del que no podamos responder. La previsión oficial de AEMET de arriba sigue disponible.', 'We tonen hier liever niets dan een waarde waar we niet voor kunnen instaan. De officiële AEMET-verwachting hierboven blijft beschikbaar.', 'Vi visar hellre ingenting här än ett värde vi inte kan stå för. AEMET:s officiella prognos ovan finns kvar.'),
    modelHour: l('Model hour', 'Modellstunde', 'Hora del modelo', 'Modeluur', 'Modelltimme'),
    nextHours: l('The next hours in the model', 'Die nächsten Stunden im Modell', 'Las próximas horas en el modelo', 'De volgende uren in het model', 'De närmaste timmarna i modellen'),
    columnTime: l('Hour', 'Uhrzeit', 'Hora', 'Uur', 'Klockslag'),
    columnWind: l('Wind', 'Wind', 'Viento', 'Wind', 'Vind'),
    columnGusts: l('Gust peak', 'Böenspitze', 'Pico de racha', 'Vlaagpiek', 'Bytopp'),
    columnDirection: l('From', 'Aus', 'Desde', 'Uit', 'Från'),
    columnWave: l('Total wave', 'Gesamtwelle', 'Ola total', 'Totale golf', 'Total våg'),
    seaUnavailable: l('The wave model is not returning values right now.', 'Das Wellenmodell liefert gerade keine Werte.', 'El modelo de oleaje no está devolviendo valores ahora mismo.', 'Het golfmodel levert op dit moment geen waarden.', 'Vågmodellen levererar inga värden just nu.'),
    cloudLayers: l('low · mid · high', 'tief · mittel · hoch', 'bajas · medias · altas', 'laag · midden · hoog', 'låga · mellan · höga'),
    weatherData: l('Weather data', 'Wetterdaten', 'Datos meteorológicos', 'Weerdata', 'Väderdata'),
    model: l('Model', 'Modell', 'Modelo', 'Model', 'Modell'),
    originalSource: l('Original source', 'Originalquelle', 'Fuente original', 'Oorspronkelijke bron', 'Ursprunglig källa'),
    fetched: l('fetched', 'abgerufen', 'obtenido', 'opgehaald', 'hämtat'),
    validFor: l('forecast valid for', 'Vorhersage gültig für', 'previsión válida para', 'verwachting geldig voor', 'prognos giltig för'),
    waveData: l('Wave data', 'Wellendaten', 'Datos de oleaje', 'Golfdata', 'Vågdata'),
    openMeteoLink: l('Weather data by Open-Meteo.com', 'Weather data by Open-Meteo.com', 'Weather data by Open-Meteo.com', 'Weather data by Open-Meteo.com', 'Weather data by Open-Meteo.com'),
    noValue: l('no value', 'kein Wert', 'sin valor', 'geen waarde', 'inget värde')
  },
  compass: {
    n: l('north', 'Nord', 'norte', 'noord', 'norr'),
    ne: l('north-east', 'Nordost', 'nordeste', 'noordoost', 'nordost'),
    e: l('east', 'Ost', 'este', 'oost', 'öst'),
    se: l('south-east', 'Südost', 'sureste', 'zuidoost', 'sydost'),
    s: l('south', 'Süd', 'sur', 'zuid', 'syd'),
    sw: l('south-west', 'Südwest', 'suroeste', 'zuidwest', 'sydväst'),
    w: l('west', 'West', 'oeste', 'west', 'väst'),
    nw: l('north-west', 'Nordwest', 'noroeste', 'noordwest', 'nordväst')
  },
  situations: {
    wind: l(
      'For {hour} the model calculates {speed} kn of wind at 10 m, coming from {dir} ({deg}°).',
      'Das Modell berechnet für {hour} Uhr {speed} kn Wind auf 10 m, aus {dir} ({deg}°).',
      'Para las {hour} el modelo calcula {speed} kn de viento a 10 m, desde el {dir} ({deg}°).',
      'Voor {hour} uur berekent het model {speed} kn wind op 10 m, uit het {dir} ({deg}°).',
      'För klockan {hour} beräknar modellen {speed} kn vind på 10 m, från {dir} ({deg}°).'
    ),
    gustsWide: l(
      'The modelled gust peak for this hour is {gusts} kn — {gap} kn above the mean wind. A wide gap means the model expects a lot of variation.',
      'Die modellierte Böenspitze für dieses Stundenintervall liegt bei {gusts} kn — {gap} kn über dem Grundwind. Ein großer Abstand heißt: Das Modell rechnet mit viel Schwankung.',
      'El pico de racha modelizado para esta hora es de {gusts} kn, {gap} kn por encima del viento medio. Una diferencia grande significa que el modelo prevé mucha variación.',
      'De gemodelleerde vlaagpiek voor dit uur ligt op {gusts} kn — {gap} kn boven de gemiddelde wind. Een groot verschil betekent: het model rekent met veel schommeling.',
      'Den modellerade bytoppen för den här timmen ligger på {gusts} kn – {gap} kn över medelvinden. Ett stort avstånd betyder att modellen räknar med mycket variation.'
    ),
    gustsClose: l(
      'The modelled gust peak for this hour is {gusts} kn, close to the mean wind. Neither the gust nor its timing is guaranteed.',
      'Die modellierte Böenspitze für dieses Stundenintervall liegt bei {gusts} kn, nah am Grundwind. Weder Böe noch Zeitpunkt sind garantiert.',
      'El pico de racha modelizado para esta hora es de {gusts} kn, cerca del viento medio. Ni la racha ni su momento están garantizados.',
      'De gemodelleerde vlaagpiek voor dit uur ligt op {gusts} kn, dicht bij de gemiddelde wind. Noch de vlaag, noch het moment is gegarandeerd.',
      'Den modellerade bytoppen för den här timmen ligger på {gusts} kn, nära medelvinden. Varken byn eller tidpunkten är garanterad.'
    ),
    trendRising: l(
      'Over the following hours the modelled wind rises noticeably, to {max} kn at {maxHour}.',
      'Über die folgenden Stunden steigt der modellierte Wind deutlich an, bis {max} kn um {maxHour} Uhr.',
      'En las horas siguientes el viento modelizado sube de forma clara, hasta {max} kn a las {maxHour}.',
      'In de volgende uren neemt de gemodelleerde wind duidelijk toe, tot {max} kn om {maxHour} uur.',
      'Under de följande timmarna ökar den modellerade vinden tydligt, till {max} kn klockan {maxHour}.'
    ),
    trendFalling: l(
      'Over the following hours the modelled wind drops noticeably, to {min} kn at {minHour}.',
      'Über die folgenden Stunden nimmt der modellierte Wind deutlich ab, bis {min} kn um {minHour} Uhr.',
      'En las horas siguientes el viento modelizado baja de forma clara, hasta {min} kn a las {minHour}.',
      'In de volgende uren neemt de gemodelleerde wind duidelijk af, tot {min} kn om {minHour} uur.',
      'Under de följande timmarna avtar den modellerade vinden tydligt, till {min} kn klockan {minHour}.'
    ),
    trendFlat: l(
      'Over the following hours the modelled wind stays within a few knots of this value.',
      'Über die folgenden Stunden bleibt der modellierte Wind in der Nähe dieses Werts.',
      'En las horas siguientes el viento modelizado se mantiene cerca de este valor.',
      'In de volgende uren blijft de gemodelleerde wind dicht bij deze waarde.',
      'Under de följande timmarna håller sig den modellerade vinden nära det här värdet.'
    ),
    seaCrossed: l(
      'The wave model calculates about {wave} m of total wave. The wind-driven part ({windWave} m from {windWaveDir}) and the swell ({swell} m from {swellDir}, {swellPeriod} s) come from different directions — a crossed, less orderly sea state.',
      'Das Wellenmodell berechnet etwa {wave} m Gesamtwelle. Der windgetriebene Anteil ({windWave} m aus {windWaveDir}) und der Swell ({swell} m aus {swellDir}, {swellPeriod} s) kommen aus verschiedenen Richtungen — ein kreuzender, weniger geordneter Seegang.',
      'El modelo de oleaje calcula unos {wave} m de ola total. La parte generada por el viento ({windWave} m desde el {windWaveDir}) y el mar de fondo ({swell} m desde el {swellDir}, {swellPeriod} s) vienen de direcciones distintas: un mar cruzado, menos ordenado.',
      'Het golfmodel berekent ongeveer {wave} m totale golf. Het door wind opgewekte deel ({windWave} m uit het {windWaveDir}) en de swell ({swell} m uit het {swellDir}, {swellPeriod} s) komen uit verschillende richtingen — een kruisende, minder geordende zee.',
      'Vågmodellen beräknar cirka {wave} m total våg. Den vinddrivna delen ({windWave} m från {windWaveDir}) och swellen ({swell} m från {swellDir}, {swellPeriod} s) kommer från olika håll – en korsande, mindre ordnad sjö.'
    ),
    seaAligned: l(
      'The wave model calculates about {wave} m of total wave with a period of {period} s. Wind wave and swell run from a similar direction; the swell part is {swell} m at {swellPeriod} s.',
      'Das Wellenmodell berechnet etwa {wave} m Gesamtwelle bei {period} s Periode. Windwelle und Swell laufen aus ähnlicher Richtung; der Swell-Anteil liegt bei {swell} m mit {swellPeriod} s.',
      'El modelo de oleaje calcula unos {wave} m de ola total con un periodo de {period} s. Ola de viento y mar de fondo llegan de una dirección parecida; la parte de mar de fondo es de {swell} m con {swellPeriod} s.',
      'Het golfmodel berekent ongeveer {wave} m totale golf bij een periode van {period} s. Windgolf en swell lopen uit een vergelijkbare richting; het swelldeel is {swell} m bij {swellPeriod} s.',
      'Vågmodellen beräknar cirka {wave} m total våg med {period} s period. Vindvåg och swell löper från liknande håll; swelldelen ligger på {swell} m med {swellPeriod} s.'
    ),
    seaSmall: l(
      'The wave model calculates only about {wave} m of total wave for this hour. That says nothing about a single wave or the shorebreak.',
      'Das Wellenmodell berechnet für diese Stunde nur etwa {wave} m Gesamtwelle. Über eine einzelne Welle oder den Shorebreak sagt das nichts.',
      'El modelo de oleaje calcula para esta hora solo unos {wave} m de ola total. Eso no dice nada sobre una ola concreta ni sobre la rompiente en la orilla.',
      'Het golfmodel berekent voor dit uur maar ongeveer {wave} m totale golf. Dat zegt niets over één golf of de shorebreak.',
      'Vågmodellen beräknar bara cirka {wave} m total våg för den här timmen. Det säger inget om en enskild våg eller strandbrytningen.'
    ),
    seaUnavailable: l(
      'No wave values are available for this hour. We do not fill the gap with estimates.',
      'Für diese Stunde liegen keine Wellenwerte vor. Wir füllen die Lücke nicht mit Schätzwerten.',
      'Para esta hora no hay valores de oleaje. No rellenamos el hueco con estimaciones.',
      'Voor dit uur zijn er geen golfwaarden. We vullen het gat niet met schattingen.',
      'För den här timmen finns inga vågvärden. Vi fyller inte luckan med uppskattningar.'
    ),
    sky: l(
      'Total cloud cover {cloud} %, modelled radiation {radiation} W/m² as the hourly mean. Weather context — not a thermal-wind promise.',
      'Gesamtbewölkung {cloud} %, modellierte Einstrahlung {radiation} W/m² im Stundenmittel. Wetterkontext — kein Thermik-Versprechen.',
      'Nubosidad total {cloud} %, radiación modelizada {radiation} W/m² de media horaria. Contexto meteorológico, no una promesa de térmica.',
      'Totale bewolking {cloud} %, gemodelleerde straling {radiation} W/m² als uurgemiddelde. Weercontext — geen thermiekbelofte.',
      'Total molnighet {cloud} %, modellerad instrålning {radiation} W/m² som timmedel. Väderkontext – inget löfte om termik.'
    ),
    check: l(
      'Before the water: actual direction, gusts, sea state, buoys, signage and official warnings. These values describe a model hour, never a riding approval.',
      'Vor dem Wasser: tatsächliche Richtung, Böen, Seegang, Bojen, Beschilderung und amtliche Warnungen. Diese Werte beschreiben eine Modellstunde, niemals eine Fahrfreigabe.',
      'Antes de entrar al agua: dirección real, rachas, estado del mar, boyas, señalización y avisos oficiales. Estos valores describen una hora de modelo, nunca una autorización para navegar.',
      'Vóór het water: werkelijke richting, vlagen, zeegang, boeien, bebording en officiële waarschuwingen. Deze waarden beschrijven een modeluur, nooit een toestemming om te varen.',
      'Före vattnet: verklig riktning, byar, sjögång, bojar, skyltning och officiella varningar. De här värdena beskriver en modelltimme, aldrig ett godkännande att köra.'
    )
  }
};
