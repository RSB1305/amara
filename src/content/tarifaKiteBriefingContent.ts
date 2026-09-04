import type { LocalizedText } from '../types/content';

/**
 * Copy for the Tarifa kite briefing: the labels of the live data object and
 * the sentence library of its explanation layer.
 *
 * The briefing shows only what a kitesurfer decides by: wind, gusts and
 * direction, the trend of the next hours, sea state and water temperature,
 * sky, rain, air temperature and the end of daylight, and the official
 * warning status. All values come from AEMET's hourly municipality forecast
 * and its beach forecast.
 *
 * The sentences are written here, at authoring time, and released once. At
 * runtime a fixed set of rules in the briefing component picks one variant
 * per situation from the fetched values; no text is generated on the fly. The
 * library therefore also defines what the briefing can never say: nothing in
 * it approves or forbids a session, names a kite size, picks a spot, scores
 * anything or promises rescue. Placeholders in braces are filled with the
 * forecast values and their hour.
 */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface TarifaKiteBriefingCopy {
  labels: {
    loading: LocalizedText;
    unavailableTitle: LocalizedText;
    unavailableText: LocalizedText;
    nowIn: LocalizedText;
    nextHours: LocalizedText;
    tomorrow: LocalizedText;
    rowWind: LocalizedText;
    rowGusts: LocalizedText;
    rowDirection: LocalizedText;
    attributionWeather: LocalizedText;
    attributionSea: LocalizedText;
    attributionWarnings: LocalizedText;
    attributionUpdated: LocalizedText;
    aemetLink: LocalizedText;
    noValue: LocalizedText;
  };
  blocks: {
    wind: LocalizedText;
    trend: LocalizedText;
    water: LocalizedText;
    sky: LocalizedText;
    official: LocalizedText;
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
  /** Appended to the direction of the wind sentence. */
  sectors: {
    levante: LocalizedText;
    poniente: LocalizedText;
  };
  /** Stand-alone sector names for the outlook. */
  sectorNames: {
    levante: LocalizedText;
    poniente: LocalizedText;
  };
  /** Beaufort force names 0–12, indexed by force. */
  beaufortNames: LocalizedText[];
  /** AEMET sky states, sentence-initial. */
  sky: {
    clear: LocalizedText;
    fewClouds: LocalizedText;
    intervals: LocalizedText;
    cloudy: LocalizedText;
    veryCloudy: LocalizedText;
    overcast: LocalizedText;
    highClouds: LocalizedText;
    lightRain: LocalizedText;
    rain: LocalizedText;
    snow: LocalizedText;
    thunder: LocalizedText;
    fog: LocalizedText;
    mist: LocalizedText;
    haze: LocalizedText;
    unknown: LocalizedText;
  };
  /** AEMET beach sea states. */
  waves: {
    weak: LocalizedText;
    moderate: LocalizedText;
    strong: LocalizedText;
  };
  situations: {
    wind: LocalizedText;
    calm: LocalizedText;
    beaufort: LocalizedText;
    gustsWide: LocalizedText;
    gustsClose: LocalizedText;
    gustsNone: LocalizedText;
    trendRising: LocalizedText;
    trendFalling: LocalizedText;
    trendFlat: LocalizedText;
    water: LocalizedText;
    waterNoTemperature: LocalizedText;
    waterUnavailable: LocalizedText;
    sky: LocalizedText;
    daylight: LocalizedText;
    rainNone: LocalizedText;
    rainPossible: LocalizedText;
    rainExpected: LocalizedText;
    officialNone: LocalizedText;
    officialSome: LocalizedText;
    officialUnavailable: LocalizedText;
    tomorrow: LocalizedText;
    tomorrowNone: LocalizedText;
    fromDirection: LocalizedText;
    check: LocalizedText;
  };
}

export const tarifaKiteBriefingCopy: TarifaKiteBriefingCopy = {
  labels: {
    loading: l('Loading the AEMET values …', 'AEMET-Werte werden geladen …', 'Cargando los valores de AEMET …', 'AEMET-waarden worden geladen …', 'AEMET-värden laddas …'),
    unavailableTitle: l('The live briefing is currently unavailable', 'Das Live-Briefing ist gerade nicht verfügbar', 'El briefing en directo no está disponible ahora mismo', 'De livebriefing is op dit moment niet beschikbaar', 'Livebriefingen är inte tillgänglig just nu'),
    unavailableText: l('We would rather show nothing here than a value we cannot stand behind. The official AEMET forecast above remains available.', 'Wir zeigen an dieser Stelle lieber nichts als einen Wert, für den wir nicht geradestehen. Die amtliche AEMET-Vorhersage oben bleibt erreichbar.', 'Preferimos no mostrar nada aquí antes que un valor que no podamos respaldar. La previsión oficial de AEMET de arriba sigue disponible.', 'We tonen hier liever niets dan een waarde waar we niet achter kunnen staan. De officiële AEMET-verwachting hierboven blijft beschikbaar.', 'Vi visar hellre ingenting här än ett värde vi inte kan stå för. Den officiella AEMET-prognosen ovan finns kvar.'),
    nowIn: l('Now in Tarifa', 'Jetzt in Tarifa', 'Ahora en Tarifa', 'Nu in Tarifa', 'Nu i Tarifa'),
    nextHours: l('Next hours', 'Nächste Stunden', 'Próximas horas', 'Komende uren', 'Kommande timmar'),
    tomorrow: l('Tomorrow', 'Morgen', 'Mañana', 'Morgen', 'I morgon'),
    rowWind: l('Wind kn', 'Wind kn', 'Viento kn', 'Wind kn', 'Vind kn'),
    rowGusts: l('Gusts kn', 'Böen kn', 'Rachas kn', 'Vlagen kn', 'Byar kn'),
    rowDirection: l('From', 'Richtung', 'Dirección', 'Richting', 'Riktning'),
    attributionWeather: l('Weather', 'Wetter', 'Tiempo', 'Weer', 'Väder'),
    attributionSea: l('Sea state and water temperature', 'Wellen und Wassertemperatur', 'Oleaje y temperatura del agua', 'Golven en watertemperatuur', 'Vågor och vattentemperatur'),
    attributionWarnings: l('Warnings', 'Warnungen', 'Avisos', 'Waarschuwingen', 'Varningar'),
    attributionUpdated: l('as of', 'Stand', 'a las', 'stand', 'per'),
    aemetLink: l('Data: AEMET', 'Daten: AEMET', 'Datos: AEMET', 'Data: AEMET', 'Data: AEMET'),
    noValue: l('no value', 'kein Wert', 'sin valor', 'geen waarde', 'inget värde')
  },
  blocks: {
    wind: l('Wind', 'Wind', 'Viento', 'Wind', 'Vind'),
    trend: l('Trend', 'Trend', 'Tendencia', 'Trend', 'Trend'),
    water: l('Water', 'Wasser', 'Agua', 'Water', 'Vatten'),
    sky: l('Sky', 'Himmel', 'Cielo', 'Lucht', 'Himmel'),
    official: l('Official', 'Amtlich', 'Oficial', 'Officieel', 'Officiellt')
  },
  compass: {
    n: l('north', 'Nord', 'norte', 'noorden', 'norr'),
    ne: l('north-east', 'Nordost', 'nordeste', 'noordoosten', 'nordost'),
    e: l('east', 'Ost', 'este', 'oosten', 'öst'),
    se: l('south-east', 'Südost', 'sureste', 'zuidoosten', 'sydost'),
    s: l('south', 'Süd', 'sur', 'zuiden', 'syd'),
    sw: l('south-west', 'Südwest', 'suroeste', 'zuidwesten', 'sydväst'),
    w: l('west', 'West', 'oeste', 'westen', 'väst'),
    nw: l('north-west', 'Nordwest', 'noroeste', 'noordwesten', 'nordväst')
  },
  sectors: {
    levante: l(', that is the Levante sector', ', das ist der Levante-Sektor', ', es decir, el sector de levante', ', dat is de levantesector', ', det är levantesektorn'),
    poniente: l(', that is the Poniente sector', ', das ist der Poniente-Sektor', ', es decir, el sector de poniente', ', dat is de ponientesector', ', det är ponientesektorn')
  },
  sectorNames: {
    levante: l('Levante', 'Levante', 'Levante', 'Levante', 'Levante'),
    poniente: l('Poniente', 'Poniente', 'Poniente', 'Poniente', 'Poniente')
  },
  beaufortNames: [
    l('calm', 'Windstille', 'calma', 'windstil', 'stiltje'),
    l('light air', 'leiser Zug', 'ventolina', 'zwakke wind', 'nästan stiltje'),
    l('light breeze', 'leichte Brise', 'flojito', 'zwakke wind', 'svag vind'),
    l('gentle breeze', 'schwache Brise', 'flojo', 'matige bries', 'lätt bris'),
    l('moderate breeze', 'mäßige Brise', 'bonancible', 'matige wind', 'måttlig bris'),
    l('fresh breeze', 'frische Brise', 'fresquito', 'vrij krachtige wind', 'frisk bris'),
    l('strong breeze', 'starker Wind', 'fresco', 'krachtige wind', 'frisk vind'),
    l('near gale', 'steifer Wind', 'frescachón', 'harde wind', 'styv kuling'),
    l('gale', 'stürmischer Wind', 'temporal', 'stormachtige wind', 'hård kuling'),
    l('strong gale', 'Sturm', 'temporal fuerte', 'storm', 'halv storm'),
    l('storm', 'schwerer Sturm', 'temporal duro', 'zware storm', 'storm'),
    l('violent storm', 'orkanartiger Sturm', 'temporal muy duro', 'zeer zware storm', 'svår storm'),
    l('hurricane force', 'Orkan', 'temporal huracanado', 'orkaan', 'orkan')
  ],
  sky: {
    clear: l('Clear sky', 'Klarer Himmel', 'Cielo despejado', 'Heldere hemel', 'Klar himmel'),
    fewClouds: l('Mostly sunny', 'Überwiegend sonnig', 'Poco nuboso', 'Overwegend zonnig', 'Mest sol'),
    intervals: l('Sunny spells', 'Sonne und Wolken im Wechsel', 'Intervalos nubosos', 'Zon en wolken', 'Växlande molnighet'),
    cloudy: l('Cloudy', 'Bewölkt', 'Nuboso', 'Bewolkt', 'Molnigt'),
    veryCloudy: l('Very cloudy', 'Stark bewölkt', 'Muy nuboso', 'Zwaar bewolkt', 'Mycket molnigt'),
    overcast: l('Overcast', 'Bedeckt', 'Cubierto', 'Betrokken', 'Mulet'),
    highClouds: l('High clouds', 'Hohe Wolken', 'Nubes altas', 'Hoge bewolking', 'Höga moln'),
    lightRain: l('Light rain', 'Leichter Regen', 'Lluvia escasa', 'Lichte regen', 'Lätt regn'),
    rain: l('Rain', 'Regen', 'Lluvia', 'Regen', 'Regn'),
    snow: l('Snow', 'Schnee', 'Nieve', 'Sneeuw', 'Snö'),
    thunder: l('Thunderstorms', 'Gewitter', 'Tormenta', 'Onweer', 'Åska'),
    fog: l('Fog', 'Nebel', 'Niebla', 'Mist', 'Dimma'),
    mist: l('Mist', 'Dunst', 'Bruma', 'Nevel', 'Dis'),
    haze: l('Haze (calima)', 'Dunstig (Calima)', 'Calima', 'Heiig (calima)', 'Dis (calima)'),
    unknown: l('Sky state not reported', 'Himmel ohne Angabe', 'Cielo sin dato', 'Hemel zonder opgave', 'Himmel utan uppgift')
  },
  waves: {
    weak: l('light', 'schwach', 'débil', 'zwak', 'svag'),
    moderate: l('moderate', 'mäßig', 'moderado', 'matig', 'måttlig'),
    strong: l('rough', 'stark', 'fuerte', 'sterk', 'kraftig')
  },
  situations: {
    wind: l('{speed} kn from the {dir}{sector}.', '{speed} kn aus {dir}{sector}.', '{speed} kn del {dir}{sector}.', '{speed} kn uit het {dir}{sector}.', '{speed} kn från {dir}{sector}.'),
    calm: l('Hardly any wind in this hour.', 'Kaum Wind in dieser Stunde.', 'Apenas viento en esta hora.', 'Nauwelijks wind in dit uur.', 'Knappt någon vind den här timmen.'),
    beaufort: l('Force {bft}, {name}.', 'Windstärke {bft}, {name}.', 'Fuerza {bft}, {name}.', 'Windkracht {bft}, {name}.', 'Vindstyrka {bft}, {name}.'),
    gustsWide: l('Gusts up to {gusts} kn, so gusty: {gap} kn above the mean.', 'Böen bis {gusts} kn, also böig, {gap} kn über dem Mittel.', 'Rachas de hasta {gusts} kn, es decir, racheado: {gap} kn por encima de la media.', 'Vlagen tot {gusts} kn, dus vlagerig: {gap} kn boven het gemiddelde.', 'Byar upp till {gusts} kn, alltså byigt: {gap} kn över medelvinden.'),
    gustsClose: l('Gusts up to {gusts} kn, close to the mean wind.', 'Böen bis {gusts} kn, nah am Mittelwind.', 'Rachas de hasta {gusts} kn, cerca del viento medio.', 'Vlagen tot {gusts} kn, dicht bij de gemiddelde wind.', 'Byar upp till {gusts} kn, nära medelvinden.'),
    gustsNone: l('AEMET gives no gust peak for this hour; it publishes one only from about 20 km/h of wind.', 'AEMET nennt für diese Stunde keine Böenspitze; die gibt es erst ab rund 20 km/h Wind.', 'AEMET no da pico de racha para esta hora; solo lo publica a partir de unos 20 km/h de viento.', 'AEMET geeft voor dit uur geen vlaagpiek; die komt pas vanaf ongeveer 20 km/h wind.', 'AEMET anger ingen bytopp för den här timmen; den publiceras först från cirka 20 km/h vind.'),
    trendRising: l('Rising to {max} kn by {maxHour}.', 'Bis {maxHour} zunehmend auf {max} kn.', 'Subiendo hasta {max} kn a las {maxHour}.', 'Tot {maxHour} toenemend naar {max} kn.', 'Ökar till {max} kn fram till {maxHour}.'),
    trendFalling: l('Easing to {min} kn by {minHour}.', 'Bis {minHour} abnehmend auf {min} kn.', 'Bajando hasta {min} kn a las {minHour}.', 'Tot {minHour} afnemend naar {min} kn.', 'Avtar till {min} kn fram till {minHour}.'),
    trendFlat: l('About the same over the next hours.', 'In den nächsten Stunden etwa gleichbleibend.', 'Más o menos igual en las próximas horas.', 'De komende uren ongeveer gelijk.', 'Ungefär oförändrat de närmaste timmarna.'),
    water: l('Sea state {state}, water {water} °C.', 'Wellengang {state}, Wasser {water} °C.', 'Oleaje {state}, agua a {water} °C.', 'Golfslag {state}, water {water} °C.', 'Sjögång {state}, vatten {water} °C.'),
    waterNoTemperature: l('Sea state {state}.', 'Wellengang {state}.', 'Oleaje {state}.', 'Golfslag {state}.', 'Sjögång {state}.'),
    waterUnavailable: l('No sea-state values for the beach right now.', 'Für den Strand liegen gerade keine Wellenwerte vor.', 'Ahora mismo no hay valores de oleaje para la playa.', 'Voor het strand zijn er nu geen golfwaarden.', 'Inga vågvärden för stranden just nu.'),
    sky: l('{sky}, {rain}, {temp} °C air{daylight}.', '{sky}, {rain}, {temp} °C Luft{daylight}.', '{sky}, {rain}, {temp} °C de aire{daylight}.', '{sky}, {rain}, {temp} °C lucht{daylight}.', '{sky}, {rain}, {temp} °C luft{daylight}.'),
    daylight: l(', light until {sunset}', ', Licht bis {sunset}', ', luz hasta las {sunset}', ', licht tot {sunset}', ', ljust till {sunset}'),
    rainNone: l('no rain expected', 'kein Regen erwartet', 'sin lluvia prevista', 'geen regen verwacht', 'inget regn väntat'),
    rainPossible: l('rain possible ({probability} %)', 'Regen möglich ({probability} %)', 'lluvia posible ({probability} %)', 'regen mogelijk ({probability} %)', 'regn möjligt ({probability} %)'),
    rainExpected: l('rain expected ({amount} mm)', 'Regen erwartet ({amount} mm)', 'lluvia prevista ({amount} mm)', 'regen verwacht ({amount} mm)', 'regn väntat ({amount} mm)'),
    officialNone: l('No AEMET warning for the {zone} zone.', 'Keine AEMET-Warnung für die Zone {zone}.', 'Sin aviso de AEMET para la zona {zone}.', 'Geen AEMET-waarschuwing voor de zone {zone}.', 'Ingen AEMET-varning för zonen {zone}.'),
    officialSome: l('{count} AEMET warning(s) for the {zone} zone, level {level}, see above.', '{count} AEMET-Warnung(en) für die Zone {zone}, Stufe {level}, siehe oben.', '{count} aviso(s) de AEMET para la zona {zone}, nivel {level}, ver arriba.', '{count} AEMET-waarschuwing(en) voor de zone {zone}, niveau {level}, zie boven.', '{count} AEMET-varning(ar) för zonen {zone}, nivå {level}, se ovan.'),
    officialUnavailable: l('The warning status could not be fetched right now.', 'Der Warnstatus konnte gerade nicht abgerufen werden.', 'No se ha podido consultar el estado de avisos ahora mismo.', 'De waarschuwingsstatus kon nu niet worden opgehaald.', 'Varningsläget kunde inte hämtas just nu.'),
    tomorrow: l('{sector}, {min} to {max} kn from midday.', '{sector}, {min} bis {max} kn ab Mittag.', '{sector}, de {min} a {max} kn desde el mediodía.', '{sector}, {min} tot {max} kn vanaf de middag.', '{sector}, {min} till {max} kn från mitt på dagen.'),
    tomorrowNone: l('No hourly values for tomorrow yet.', 'Für morgen liegen noch keine Stundenwerte vor.', 'Aún no hay valores horarios para mañana.', 'Voor morgen zijn er nog geen uurwaarden.', 'Inga timvärden för i morgon ännu.'),
    fromDirection: l('Wind from the {dir}', 'Wind aus {dir}', 'Viento del {dir}', 'Wind uit het {dir}', 'Vind från {dir}'),
    check: l(
      'Before the water: actual direction, gusts, sea state, buoys, signage and official warnings. These values describe a forecast hour, never a riding approval.',
      'Vor dem Wasser: tatsächliche Richtung, Böen, Seegang, Bojen, Beschilderung und amtliche Warnungen. Diese Werte beschreiben eine Vorhersagestunde, niemals eine Fahrfreigabe.',
      'Antes de entrar al agua: dirección real, rachas, estado del mar, boyas, señalización y avisos oficiales. Estos valores describen una hora de previsión, nunca una autorización para navegar.',
      'Vóór het water: werkelijke richting, vlagen, zeegang, boeien, bebording en officiële waarschuwingen. Deze waarden beschrijven een verwachtingsuur, nooit een toestemming om te varen.',
      'Före vattnet: verklig riktning, byar, sjögång, bojar, skyltning och officiella varningar. De här värdena beskriver en prognostimme, aldrig ett godkännande att köra.'
    )
  }
};
