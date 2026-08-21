import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { LinkToken } from '../lib/linkResolver';
import type { WeatherAuthorityContent } from '../page-families/location-authority/weatherAuthority';
import { climateDataSourceUrls } from './locationClimateData';

export type WeatherDestination = 'frigiliana' | 'nerja' | 'tarifa';

const names: Record<WeatherDestination, string> = {
  frigiliana: 'Frigiliana',
  nerja: 'Nerja',
  tarifa: 'Tarifa'
};

export const weatherForecastUrls: Record<WeatherDestination, string> = {
  frigiliana: 'https://www.aemet.es/es/eltiempo/prediccion/municipios/frigiliana-id29053',
  nerja: 'https://www.aemet.es/es/eltiempo/prediccion/municipios/nerja-id29075',
  tarifa: 'https://www.aemet.es/es/eltiempo/prediccion/municipios/tarifa-id11035'
};

const tarifaNormalsUrl = 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=and&l=6001';
const juntaWindUrl = 'https://www.juntadeandalucia.es/medioambiente/portal/landing-page/-/asset_publisher/4V1kD5gLiJkq/content/viento/20151';

interface SharedLocale {
  seoTitle: (place: string) => string;
  h1: (place: string) => string;
  eyebrow: (place: string) => string;
  table: WeatherAuthorityContent['table'];
  seasonEyebrow: string;
  seasonTitle: string;
  seasonIntro: string;
  seasonPlanningLabel: string;
  seasons: Array<{ period: string; title: string; planning: string }>;
  bestEyebrow: string;
  bestTitle: string;
  bestIntro: string;
  intentTitles: string[];
  practicalEyebrow: string;
  practicalTitle: string;
  practicalIntro: string;
  packTitle: string;
  packItems: string[];
  forecastEyebrow: string;
  forecastTitle: string;
  forecastParagraphs: string[];
  forecastCta: string;
  sourcesEyebrow: string;
  sourcesTitle: string;
  sourcesIntro: string;
  sourcesChecked: string;
  modelSourceText: string;
  forecastSourceText: string;
  relatedEyebrow: string;
  relatedTitle: string;
  relatedLabels: string[];
  relatedTexts: string[];
  closingEyebrow: string;
  closingTitle: string;
  closingBody: string;
  primaryLabel: string;
  secondaryLabel: string;
}

const shared: Record<AmaraLanguage, SharedLocale> = {
  en: {
    seoTitle: (place) => `${place} Weather: Climate, Seasons & Best Time to Visit`,
    h1: (place) => `${place} weather: climate, seasons & best time to visit`,
    eyebrow: (place) => `Weather & climate · ${place}`,
    table: {
      eyebrow: '12-month climate profile', title: 'Temperature, rain and sun — month by month',
      intro: 'These long-term modelled averages show the broad annual pattern. They are useful for comparing months, but they do not predict a particular day, heatwave, shower or sheltered street.',
      labels: { month: 'Month', high: 'Avg. maximum', low: 'Avg. minimum', rain: 'Rainfall', sunHours: 'Sun / day', temperature: 'Average maximum / minimum', rainfall: 'Monthly rainfall' },
      sourceTitle: 'How to read the data', sourceText: 'Climate-Data.org point-model values are retained as a transparent planning baseline. The Nerja and Frigiliana points currently return identical values, so this page does not use them to claim a measured local difference.'
    },
    seasonEyebrow: 'The year in four parts', seasonTitle: 'Spring, summer, autumn and winter', seasonIntro: 'Each season changes the balance between heat, rain, daylight and the way a day is best organised. The notes describe tendencies, never guarantees.', seasonPlanningLabel: 'Plan for it',
    seasons: [
      { period: 'March – May', title: 'Spring', planning: 'Bring layers and keep one rain option; conditions can still change across a multi-day stay.' },
      { period: 'June – August', title: 'Summer', planning: 'Move exposed walks away from midday and carry water, shade and sun protection.' },
      { period: 'September – November', title: 'Autumn', planning: 'Treat early and late autumn differently and check the near-term forecast as rain becomes more likely.' },
      { period: 'December – February', title: 'Winter', planning: 'Pack for cooler evenings and mixed weather, even when a bright afternoon feels mild.' }
    ],
    bestEyebrow: 'Best time by intention', bestTitle: 'There is no single best month', bestIntro: 'Choose dates for the kind of stay you want, then use the forecast for the days themselves.', intentTitles: ['Beach & long evenings', 'Walking & exploring', 'Quieter town rhythm', 'Longer winter stay'],
    practicalEyebrow: 'Day planning & packing', practicalTitle: 'Turn the climate pattern into a workable day', practicalIntro: 'A useful plan allows the middle of the day, the evening and a change in conditions to feel different. Climate helps with the suitcase; the forecast decides tomorrow.', packTitle: 'A flexible packing list', packItems: ['Sun protection, water bottle and a hat', 'Light layers for wind, shade or evening', 'Comfortable footwear suited to the local terrain', 'A compact rain layer outside the driest months'],
    forecastEyebrow: 'Current weather', forecastTitle: 'Use AEMET for the actual travel dates', forecastParagraphs: ['This page explains long-term climate. It does not simulate a live forecast.', 'AEMET’s official municipal forecast and warnings take precedence for daily plans. Municipal forecasts refer to the main settlement and cannot describe every beach, hillside or sheltered street.'], forecastCta: 'Open the official AEMET forecast',
    sourcesEyebrow: 'Sources & limits', sourcesTitle: 'Compact, visible and honest', sourcesIntro: 'The data source, the official forecast and local evidence are kept separate so that an average is never mistaken for tomorrow’s weather.', sourcesChecked: 'Sources checked in August 2026', modelSourceText: 'Monthly point-model baseline for temperature, rainfall and sunshine; used with an explicit limitation.', forecastSourceText: 'Official municipal forecast and weather-warning reference.',
    relatedEyebrow: 'Continue planning', relatedTitle: 'Put weather into the wider stay', relatedLabels: ['Geography & orientation', 'Where to stay', 'Winter stays'], relatedTexts: ['Understand terrain, coast and the local setting.', 'Compare the areas and their practical trade-offs.', 'Use the dedicated guide for a longer stay in the cooler season.'],
    closingEyebrow: 'Plan the whole stay', closingTitle: 'Choose the season, then choose the right base', closingBody: 'Weather is one part of the decision. Location, daily rhythm and the kind of accommodation determine how comfortably the plan adapts.', primaryLabel: 'Explore the location guide', secondaryLabel: 'Compare where to stay'
  },
  de: {
    seoTitle: (place) => `Wetter in ${place}: Klima, Jahreszeiten & beste Reisezeit`,
    h1: (place) => `Wetter in ${place}: Klima, Jahreszeiten & beste Reisezeit`,
    eyebrow: (place) => `Wetter & Klima · ${place}`,
    table: {
      eyebrow: 'Klimaprofil für 12 Monate', title: 'Temperatur, Regen und Sonne – Monat für Monat',
      intro: 'Diese modellierten Langzeitmittel zeigen das große Muster des Jahres. Sie helfen beim Vergleich der Monate, sagen aber keinen konkreten Tag, keine Hitzewelle, keinen Schauer und keine geschützte Gasse voraus.',
      labels: { month: 'Monat', high: 'Mittl. Maximum', low: 'Mittl. Minimum', rain: 'Niederschlag', sunHours: 'Sonne / Tag', temperature: 'Mittleres Maximum / Minimum', rainfall: 'Monatsniederschlag' },
      sourceTitle: 'So lest ihr die Daten', sourceText: 'Die Punktmodellwerte von Climate-Data.org bleiben als transparent gekennzeichnete Planungsbasis erhalten. Für Nerja und Frigiliana liefert der Anbieter derzeit identische Werte; daraus leiten wir keine gemessene lokale Differenz ab.'
    },
    seasonEyebrow: 'Das Jahr in vier Teilen', seasonTitle: 'Frühling, Sommer, Herbst und Winter', seasonIntro: 'Jede Jahreszeit verändert das Verhältnis von Hitze, Regen, Tageslicht und sinnvoller Tagesplanung. Die Hinweise beschreiben Tendenzen, niemals Garantien.', seasonPlanningLabel: 'Darauf einstellen',
    seasons: [
      { period: 'März – Mai', title: 'Frühling', planning: 'Schichten und eine Regenoption einplanen; während mehrerer Tage kann das Wetter noch wechseln.' },
      { period: 'Juni – August', title: 'Sommer', planning: 'Offene Wege aus der Mittagshitze verlegen und Wasser, Schatten sowie Sonnenschutz mitnehmen.' },
      { period: 'September – November', title: 'Herbst', planning: 'Frühen und späten Herbst unterscheiden und bei zunehmender Regenchance die nähere Vorhersage nutzen.' },
      { period: 'Dezember – Februar', title: 'Winter', planning: 'Für kühlere Abende und wechselndes Wetter packen, auch wenn sich ein heller Nachmittag mild anfühlt.' }
    ],
    bestEyebrow: 'Beste Reisezeit nach Absicht', bestTitle: 'Den einen besten Monat gibt es nicht', bestIntro: 'Wählt eure Reisedaten nach dem gewünschten Aufenthalt – und richtet die einzelnen Tage anschließend nach der Vorhersage.', intentTitles: ['Strand & lange Abende', 'Wandern & Erkunden', 'Ruhigerer Ortsrhythmus', 'Längerer Winteraufenthalt'],
    practicalEyebrow: 'Tagesplanung & Gepäck', practicalTitle: 'Aus dem Klimamuster einen guten Tag machen', practicalIntro: 'Ein guter Plan lässt zu, dass sich Mittag, Abend und ein Wetterwechsel unterschiedlich anfühlen. Das Klima hilft beim Koffer; über morgen entscheidet die Vorhersage.', packTitle: 'Flexibel einpacken', packItems: ['Sonnenschutz, Trinkflasche und Kopfbedeckung', 'Leichte Schichten für Wind, Schatten oder Abend', 'Bequeme Schuhe passend zum örtlichen Gelände', 'Außerhalb der trockensten Monate eine kompakte Regenlage'],
    forecastEyebrow: 'Aktuelles Wetter', forecastTitle: 'Für eure Reisedaten zählt AEMET', forecastParagraphs: ['Diese Seite erklärt langfristiges Klima. Sie simuliert keine Live-Vorhersage.', 'Die amtliche Gemeindeprognose und Warnungen von AEMET gehen bei der Tagesplanung vor. Gemeindeprognosen beziehen sich auf den Hauptort und können nicht jeden Strand, Hang oder geschützten Straßenraum abbilden.'], forecastCta: 'Amtliche AEMET-Vorhersage öffnen',
    sourcesEyebrow: 'Quellen & Grenzen', sourcesTitle: 'Kompakt, sichtbar und ehrlich', sourcesIntro: 'Datengrundlage, amtliche Vorhersage und lokale Einordnung bleiben getrennt, damit ein Mittelwert nie mit dem Wetter von morgen verwechselt wird.', sourcesChecked: 'Quellen geprüft im August 2026', modelSourceText: 'Monatliche Punktmodellbasis für Temperatur, Niederschlag und Sonne; mit ausdrücklich genannter Einschränkung.', forecastSourceText: 'Amtliche Gemeindeprognose und Referenz für Wetterwarnungen.',
    relatedEyebrow: 'Weiter planen', relatedTitle: 'Das Wetter in den gesamten Aufenthalt einordnen', relatedLabels: ['Geografie & Orientierung', 'Wo übernachten', 'Winteraufenthalte'], relatedTexts: ['Gelände, Küste und die lokale Lage verstehen.', 'Lagen und ihre praktischen Unterschiede vergleichen.', 'Für einen längeren Aufenthalt in der kühleren Jahreszeit den eigenen Guide nutzen.'],
    closingEyebrow: 'Den ganzen Aufenthalt planen', closingTitle: 'Erst die Jahreszeit, dann die passende Basis wählen', closingBody: 'Wetter ist ein Teil der Entscheidung. Lage, Tagesrhythmus und Unterkunft bestimmen, wie angenehm sich der Plan anpassen lässt.', primaryLabel: 'Lage-Guide entdecken', secondaryLabel: 'Übernachtungslagen vergleichen'
  },
  es: {
    seoTitle: (place) => `Tiempo en ${place}: clima, estaciones y mejor época`,
    h1: (place) => `Tiempo en ${place}: clima, estaciones y mejor época para viajar`,
    eyebrow: (place) => `Tiempo y clima · ${place}`,
    table: {
      eyebrow: 'Perfil climático de 12 meses', title: 'Temperatura, lluvia y sol — mes a mes',
      intro: 'Estas medias modelizadas a largo plazo muestran el patrón general del año. Sirven para comparar meses, pero no predicen un día concreto, una ola de calor, un chubasco ni una calle protegida.',
      labels: { month: 'Mes', high: 'Máxima media', low: 'Mínima media', rain: 'Lluvia', sunHours: 'Sol / día', temperature: 'Máxima / mínima media', rainfall: 'Lluvia mensual' },
      sourceTitle: 'Cómo leer los datos', sourceText: 'Los valores del modelo puntual de Climate-Data.org se conservan como base orientativa claramente identificada. Nerja y Frigiliana reciben ahora valores idénticos del proveedor; no los usamos para afirmar una diferencia local medida.'
    },
    seasonEyebrow: 'El año en cuatro partes', seasonTitle: 'Primavera, verano, otoño e invierno', seasonIntro: 'Cada estación cambia el equilibrio entre calor, lluvia, luz y organización del día. Las notas describen tendencias, nunca garantías.', seasonPlanningLabel: 'Cómo prepararse',
    seasons: [
      { period: 'Marzo – mayo', title: 'Primavera', planning: 'Llevad capas y una opción para la lluvia; el tiempo aún puede variar durante varios días.' },
      { period: 'Junio – agosto', title: 'Verano', planning: 'Evitad los recorridos expuestos al mediodía y llevad agua, sombra y protección solar.' },
      { period: 'Septiembre – noviembre', title: 'Otoño', planning: 'Distinguid el inicio del final del otoño y consultad la previsión cercana cuando aumente la lluvia.' },
      { period: 'Diciembre – febrero', title: 'Invierno', planning: 'Preparad capas para tardes frescas y tiempo cambiante, aunque el mediodía resulte suave.' }
    ],
    bestEyebrow: 'Mejor época según el plan', bestTitle: 'No existe un único mes perfecto', bestIntro: 'Elegid las fechas según la estancia que buscáis y utilizad después la previsión para cada día.', intentTitles: ['Playa y tardes largas', 'Caminar y explorar', 'Un ritmo más tranquilo', 'Una estancia larga en invierno'],
    practicalEyebrow: 'Plan diario y equipaje', practicalTitle: 'Convertir el patrón climático en un buen día', practicalIntro: 'Un plan útil admite que mediodía, tarde y un cambio de tiempo se sientan distintos. El clima ayuda con la maleta; la previsión decide mañana.', packTitle: 'Equipaje flexible', packItems: ['Protección solar, botella de agua y sombrero', 'Capas ligeras para viento, sombra o tarde', 'Calzado cómodo adaptado al terreno local', 'Una capa compacta para la lluvia fuera de los meses más secos'],
    forecastEyebrow: 'Tiempo actual', forecastTitle: 'Para las fechas reales, consultad AEMET', forecastParagraphs: ['Esta página explica el clima a largo plazo. No simula una previsión en directo.', 'La predicción municipal y los avisos oficiales de AEMET tienen prioridad para el plan diario. Se refieren al núcleo principal y no describen cada playa, ladera o calle protegida.'], forecastCta: 'Abrir la previsión oficial de AEMET',
    sourcesEyebrow: 'Fuentes y límites', sourcesTitle: 'Breve, visible y honesto', sourcesIntro: 'Separamos los datos, la previsión oficial y la interpretación local para no confundir una media con el tiempo de mañana.', sourcesChecked: 'Fuentes revisadas en agosto de 2026', modelSourceText: 'Base mensual de modelo puntual para temperatura, lluvia y sol, utilizada con una limitación explícita.', forecastSourceText: 'Predicción municipal oficial y referencia para avisos meteorológicos.',
    relatedEyebrow: 'Seguir planificando', relatedTitle: 'Situar el tiempo dentro de toda la estancia', relatedLabels: ['Geografía y orientación', 'Dónde alojarse', 'Estancias de invierno'], relatedTexts: ['Entender el terreno, la costa y el entorno local.', 'Comparar las zonas y sus diferencias prácticas.', 'Usar la guía específica para una estancia larga en la época fresca.'],
    closingEyebrow: 'Planificar toda la estancia', closingTitle: 'Elegid la estación y después una buena base', closingBody: 'El tiempo es una parte de la decisión. La ubicación, el ritmo diario y el alojamiento determinan cómo se adapta el plan.', primaryLabel: 'Descubrir la guía de ubicación', secondaryLabel: 'Comparar dónde alojarse'
  },
  nl: {
    seoTitle: (place) => `Weer in ${place}: klimaat, seizoenen & beste reistijd`,
    h1: (place) => `Weer in ${place}: klimaat, seizoenen & beste reistijd`,
    eyebrow: (place) => `Weer & klimaat · ${place}`,
    table: {
      eyebrow: 'Klimaatprofiel van 12 maanden', title: 'Temperatuur, regen en zon — maand voor maand',
      intro: 'Deze gemodelleerde langjarige gemiddelden tonen het grote jaarpatroon. Ze helpen maanden vergelijken, maar voorspellen geen specifieke dag, hittegolf, bui of beschutte straat.',
      labels: { month: 'Maand', high: 'Gem. maximum', low: 'Gem. minimum', rain: 'Neerslag', sunHours: 'Zon / dag', temperature: 'Gemiddeld maximum / minimum', rainfall: 'Maandneerslag' },
      sourceTitle: 'Zo lezen jullie de gegevens', sourceText: 'De puntmodelwaarden van Climate-Data.org blijven zichtbaar als planningsbasis. De aanbieder geeft Nerja en Frigiliana momenteel dezelfde waarden; daarom gebruiken we ze niet voor een gemeten lokaal verschil.'
    },
    seasonEyebrow: 'Het jaar in vier delen', seasonTitle: 'Lente, zomer, herfst en winter', seasonIntro: 'Elk seizoen verandert de balans tussen warmte, regen, daglicht en een praktische dagindeling. De notities beschrijven tendensen, geen garanties.', seasonPlanningLabel: 'Houd rekening met',
    seasons: [
      { period: 'Maart – mei', title: 'Lente', planning: 'Neem laagjes en een regenoptie mee; het weer kan tijdens meerdere dagen nog wisselen.' },
      { period: 'Juni – augustus', title: 'Zomer', planning: 'Plan open routes buiten de middagwarmte en neem water, schaduw en zonbescherming serieus.' },
      { period: 'September – november', title: 'Herfst', planning: 'Maak onderscheid tussen vroege en late herfst en gebruik de korte verwachting als regen waarschijnlijker wordt.' },
      { period: 'December – februari', title: 'Winter', planning: 'Pak voor koelere avonden en wisselvallig weer, ook wanneer de middag zacht aanvoelt.' }
    ],
    bestEyebrow: 'Beste reistijd per bedoeling', bestTitle: 'Er is niet één perfecte maand', bestIntro: 'Kies data voor het verblijf dat jullie willen en gebruik daarna de verwachting voor de dagen zelf.', intentTitles: ['Strand en lange avonden', 'Wandelen en ontdekken', 'Een rustiger ritme', 'Een langer winterverblijf'],
    practicalEyebrow: 'Dagplanning en bagage', practicalTitle: 'Maak van het klimaatpatroon een werkbare dag', practicalIntro: 'Een goed plan laat toe dat middag, avond en een weersomslag anders aanvoelen. Het klimaat helpt bij de koffer; de verwachting bepaalt morgen.', packTitle: 'Flexibel inpakken', packItems: ['Zonbescherming, waterfles en hoofddeksel', 'Lichte laagjes voor wind, schaduw of avond', 'Comfortabele schoenen passend bij het terrein', 'Buiten de droogste maanden een compacte regenlaag'],
    forecastEyebrow: 'Actueel weer', forecastTitle: 'Gebruik AEMET voor de echte reisdata', forecastParagraphs: ['Deze pagina legt het langjarige klimaat uit en simuleert geen live verwachting.', 'De officiële gemeentelijke verwachting en waarschuwingen van AEMET gaan voor bij de dagplanning. Ze gelden voor de hoofdplaats en beschrijven niet elk strand, elke helling of beschutte straat.'], forecastCta: 'Open de officiële AEMET-verwachting',
    sourcesEyebrow: 'Bronnen en grenzen', sourcesTitle: 'Compact, zichtbaar en eerlijk', sourcesIntro: 'Data, officiële verwachting en lokale duiding blijven gescheiden zodat een gemiddelde nooit doorgaat voor het weer van morgen.', sourcesChecked: 'Bronnen gecontroleerd in augustus 2026', modelSourceText: 'Maandelijkse puntmodelbasis voor temperatuur, neerslag en zon, gebruikt met een expliciete beperking.', forecastSourceText: 'Officiële gemeentelijke verwachting en referentie voor weerwaarschuwingen.',
    relatedEyebrow: 'Verder plannen', relatedTitle: 'Plaats het weer in het hele verblijf', relatedLabels: ['Geografie en oriëntatie', 'Waar overnachten', 'Winterverblijven'], relatedTexts: ['Begrijp terrein, kust en de lokale ligging.', 'Vergelijk gebieden en praktische verschillen.', 'Gebruik de aparte gids voor een langer verblijf in het koele seizoen.'],
    closingEyebrow: 'Plan het hele verblijf', closingTitle: 'Kies het seizoen en daarna de juiste basis', closingBody: 'Het weer is één deel van de keuze. Ligging, dagritme en accommodatie bepalen hoe prettig het plan meebeweegt.', primaryLabel: 'Ontdek de locatiegids', secondaryLabel: 'Vergelijk waar overnachten'
  },
  sv: {
    seoTitle: (place) => `Väder i ${place}: klimat, årstider & bästa restid`,
    h1: (place) => `Väder i ${place}: klimat, årstider & bästa restid`,
    eyebrow: (place) => `Väder & klimat · ${place}`,
    table: {
      eyebrow: 'Klimatprofil för 12 månader', title: 'Temperatur, regn och sol – månad för månad',
      intro: 'Dessa modellerade långtidsmedel visar årets stora mönster. De hjälper er att jämföra månader men förutsäger inte en viss dag, värmebölja, skur eller skyddad gata.',
      labels: { month: 'Månad', high: 'Medelmaximum', low: 'Medelminimum', rain: 'Nederbörd', sunHours: 'Sol / dag', temperature: 'Medelmaximum / minimum', rainfall: 'Månadsnederbörd' },
      sourceTitle: 'Så läser ni uppgifterna', sourceText: 'Punktmodellvärden från Climate-Data.org behålls som tydligt märkt planeringsgrund. Leverantören ger nu samma värden för Nerja och Frigiliana; vi använder dem därför inte för att hävda en uppmätt lokal skillnad.'
    },
    seasonEyebrow: 'Året i fyra delar', seasonTitle: 'Vår, sommar, höst och vinter', seasonIntro: 'Varje årstid ändrar balansen mellan värme, regn, dagsljus och praktisk dagsplanering. Råden beskriver tendenser, aldrig garantier.', seasonPlanningLabel: 'Planera för',
    seasons: [
      { period: 'Mars – maj', title: 'Vår', planning: 'Ta med lager och ett regnalternativ; vädret kan fortfarande växla under flera dagar.' },
      { period: 'Juni – augusti', title: 'Sommar', planning: 'Flytta exponerade promenader från middagen och prioritera vatten, skugga och solskydd.' },
      { period: 'September – november', title: 'Höst', planning: 'Skilj på tidig och sen höst och följ närprognosen när regn blir mer sannolikt.' },
      { period: 'December – februari', title: 'Vinter', planning: 'Packa för svalare kvällar och skiftande väder även när eftermiddagen känns mild.' }
    ],
    bestEyebrow: 'Bästa restid efter avsikt', bestTitle: 'Det finns inte en enda perfekt månad', bestIntro: 'Välj datum efter vistelsen ni vill ha och använd sedan prognosen för de verkliga dagarna.', intentTitles: ['Strand och långa kvällar', 'Promenader och upptäckter', 'Lugnare rytm', 'Längre vintervistelse'],
    practicalEyebrow: 'Dagsplanering och packning', practicalTitle: 'Gör klimatmönstret till en fungerande dag', practicalIntro: 'En bra plan tillåter att middag, kväll och ett väderomslag känns olika. Klimatet hjälper med väskan; prognosen bestämmer morgondagen.', packTitle: 'Packa flexibelt', packItems: ['Solskydd, vattenflaska och huvudbonad', 'Lätta lager för vind, skugga eller kväll', 'Bekväma skor anpassade till terrängen', 'Ett kompakt regnlager utanför de torraste månaderna'],
    forecastEyebrow: 'Aktuellt väder', forecastTitle: 'Använd AEMET för de verkliga resedatumen', forecastParagraphs: ['Sidan förklarar långsiktigt klimat och simulerar ingen liveprognos.', 'AEMETs officiella kommunprognos och varningar går före vid dagsplanering. De gäller huvudorten och beskriver inte varje strand, sluttning eller skyddad gata.'], forecastCta: 'Öppna AEMETs officiella prognos',
    sourcesEyebrow: 'Källor och gränser', sourcesTitle: 'Kompakt, synligt och ärligt', sourcesIntro: 'Data, officiell prognos och lokal tolkning hålls isär så att ett medelvärde aldrig blandas ihop med morgondagens väder.', sourcesChecked: 'Källor granskade i augusti 2026', modelSourceText: 'Månatlig punktmodellgrund för temperatur, nederbörd och sol, använd med en uttrycklig begränsning.', forecastSourceText: 'Officiell kommunprognos och referens för vädervarningar.',
    relatedEyebrow: 'Planera vidare', relatedTitle: 'Sätt vädret i hela vistelsens sammanhang', relatedLabels: ['Geografi och orientering', 'Var ska man bo', 'Vintervistelser'], relatedTexts: ['Förstå terräng, kust och lokalt läge.', 'Jämför områden och praktiska skillnader.', 'Använd den särskilda guiden för en längre vistelse under den svalare tiden.'],
    closingEyebrow: 'Planera hela vistelsen', closingTitle: 'Välj årstid och sedan rätt bas', closingBody: 'Vädret är en del av valet. Läge, dagsrytm och boende avgör hur bekvämt planen kan anpassas.', primaryLabel: 'Upptäck platsguiden', secondaryLabel: 'Jämför var ni ska bo'
  }
};

interface DestinationLocale {
  description: string;
  lead: string;
  summary: string;
  summaryItems: Array<{ label: string; value: string }>;
  factorsTitle: string;
  factors: string[];
  factorItems: Array<{ title: string; text: string }>;
  seasonNotes: string[];
  intentNotes: string[];
  practical: string;
}

type Profiles = Record<WeatherDestination, Record<AmaraLanguage, DestinationLocale>>;

const profiles: Profiles = {
  frigiliana: {
    en: {
      description: 'Frigiliana weather by month: climate, seasons and the best travel time for walking, village days and a flexible stay in the hills above Nerja.',
      lead: 'Understand Frigiliana’s long-term climate before choosing dates, planning steep village routes or packing for the difference between exposed sun and shaded streets.',
      summary: 'Frigiliana combines a hot, very dry summer pattern with a hillside village where sun, shade, slope and time of day matter to comfort. Spring and autumn often make longer walks easier; summer rewards early starts and slower middays; winter brings more variable weather and cooler evenings. The monthly table is a planning baseline, not a promise for your dates. Use it to compare seasons, then check AEMET for the actual forecast before deciding on exposed paths, terrace time and what to carry.',
      summaryItems: [{ label: 'Local lens', value: 'Hillside · sun · shade' }, { label: 'Best for', value: 'Choose by activity' }, { label: 'Daily check', value: 'AEMET forecast' }],
      factorsTitle: 'A hillside village changes how the same day feels', factors: ['Frigiliana sits above the coast on sloping terrain. Elevation, exposure and shade provide useful planning context, but they do not prove an exact temperature difference from Nerja.', 'The durable pattern is Mediterranean: the warmest part of the year is markedly drier, while rain is more likely in the cooler half.'],
      factorItems: [{ title: 'Slope and exposure', text: 'An open uphill route can feel very different from a shaded lane at the same hour.' }, { title: 'Day and evening', text: 'Strong sun can dominate the day; after sunset, a light layer may still be useful depending on season and wind.' }, { title: 'No invented microclimate', text: 'Local geography is explained qualitatively unless a suitable measurement supports a numerical claim.' }],
      seasonNotes: ['Greener surroundings, changing weather and increasingly useful daylight for longer routes.', 'Dry, bright and potentially hot; early and late hours matter most on steep or exposed paths.', 'Early autumn can retain summer warmth before rain becomes more likely later in the season.', 'Quieter village days, more variable conditions and cooler evenings that reward flexible plans.'],
      intentNotes: ['Choose summer for a dry rhythm, but plan the village around shade and the hottest hours.', 'Spring and autumn usually offer a more forgiving balance for steep streets and longer routes.', 'Late autumn and winter can feel quieter; accept that rain and cool evenings become more likely.', 'Use the separate winter guide for indoor comfort and long-stay decisions rather than treating this page as a sales promise.'],
      practical: 'In summer, separate the exposed walking hours from lunch and rest. Outside summer, combine light layers with a rain option. Footwear matters year-round because the physical effort of the village can matter as much as the air temperature.'
    },
    de: {
      description: 'Wetter in Frigiliana nach Monaten: Klima, Jahreszeiten und beste Reisezeit für Dorfwege, Ausflüge und einen flexiblen Aufenthalt oberhalb von Nerja.',
      lead: 'Ordnet Frigilianas langfristiges Klima ein, bevor ihr Reisedaten wählt, steile Dorfwege plant oder für den Wechsel zwischen offener Sonne und schattigen Gassen packt.',
      summary: 'Frigiliana verbindet ein heißes, sehr trockenes Sommermuster mit einem Hangort, in dem Sonne, Schatten, Steigung und Tageszeit den Komfort prägen. Frühling und Herbst erleichtern häufig längere Wege; im Sommer lohnen frühe Starts und ruhige Mittagsstunden; der Winter bringt wechselhafteres Wetter und kühlere Abende. Die Monatstabelle ist eine Planungsbasis, keine Zusage für eure Reisedaten. Vergleicht damit die Jahreszeiten und prüft anschließend AEMET, bevor ihr offene Wege, Terrassenzeit und das Tagesgepäck festlegt.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Hang · Sonne · Schatten' }, { label: 'Reisezeit', value: 'Nach Aktivität wählen' }, { label: 'Tagescheck', value: 'AEMET-Vorhersage' }],
      factorsTitle: 'Am Hang kann sich derselbe Tag unterschiedlich anfühlen', factors: ['Frigiliana liegt oberhalb der Küste in geneigtem Gelände. Höhenlage, Exposition und Schatten sind wichtige Planungshinweise, belegen aber keine exakte Temperaturdifferenz zu Nerja.', 'Das belastbare Grundmuster ist mediterran: Die warme Jahreshälfte ist deutlich trockener, Regen in der kühleren Hälfte wahrscheinlicher.'],
      factorItems: [{ title: 'Steigung und Exposition', text: 'Ein offener Anstieg kann sich zur selben Stunde ganz anders anfühlen als eine schattige Gasse.' }, { title: 'Tag und Abend', text: 'Tagsüber kann starke Sonne dominieren; nach Sonnenuntergang hängt eine zusätzliche Schicht von Saison und Wind ab.' }, { title: 'Kein erfundenes Mikroklima', text: 'Lokale Geografie wird qualitativ erklärt, solange keine passende Messung einen Zahlenvergleich trägt.' }],
      seasonNotes: ['Grünere Umgebung, wechselndes Wetter und mehr nutzbares Tageslicht für längere Wege.', 'Trocken, hell und potenziell heiß; auf steilen oder offenen Wegen zählen die frühen und späten Stunden.', 'Der frühe Herbst kann sommerlich bleiben, bevor Regen im weiteren Verlauf wahrscheinlicher wird.', 'Ruhigere Dorftage, wechselhaftere Bedingungen und kühlere Abende verlangen Flexibilität.'],
      intentNotes: ['Für einen trockenen Rhythmus passt der Sommer, wenn ihr Schatten und heiße Stunden einplant.', 'Frühling und Herbst bieten oft die angenehmere Balance für steile Gassen und längere Wege.', 'Spätherbst und Winter sind ruhiger; Regen und kühle Abende gehören ehrlich zur Planung.', 'Für Wohnkomfort und längere Aufenthalte nutzt ihr den eigenen Winter-Guide statt einer pauschalen Wetterzusage.'],
      practical: 'Im Sommer trennt ihr offene Gehzeiten von Mittagspause und Erholung. Außerhalb des Sommers gehören leichte Schichten und eine Regenoption zusammen. Gute Schuhe sind ganzjährig wichtig, weil die körperliche Anstrengung im Ort ebenso zählen kann wie die Lufttemperatur.'
    },
    es: {
      description: 'Tiempo en Frigiliana mes a mes: clima, estaciones y mejor época para caminar, vivir el pueblo y alojarse con flexibilidad sobre Nerja.',
      lead: 'Entended el clima de Frigiliana antes de elegir fechas, organizar las cuestas del pueblo o preparar la maleta para alternar sol abierto y calles con sombra.',
      summary: 'Frigiliana combina un verano caluroso y muy seco con un pueblo en ladera donde el sol, la sombra, la pendiente y la hora cambian el confort. Primavera y otoño suelen facilitar los recorridos largos; el verano pide empezar temprano y bajar el ritmo al mediodía; el invierno trae más variabilidad y tardes frescas. La tabla mensual sirve para planificar, no promete el tiempo de vuestras fechas. Comparad las estaciones y consultad después AEMET antes de decidir rutas expuestas, terrazas y qué llevar durante el día.',
      summaryItems: [{ label: 'Clave local', value: 'Ladera · sol · sombra' }, { label: 'Mejor época', value: 'Según la actividad' }, { label: 'Consulta diaria', value: 'Previsión AEMET' }],
      factorsTitle: 'En una ladera, el mismo día puede sentirse distinto', factors: ['Frigiliana está sobre la costa y en terreno inclinado. Altitud, exposición y sombra orientan la planificación, pero no demuestran una diferencia térmica exacta con Nerja.', 'El patrón duradero es mediterráneo: la parte cálida es mucho más seca y la lluvia resulta más probable en la mitad fresca.'],
      factorItems: [{ title: 'Pendiente y exposición', text: 'Una subida al sol puede sentirse muy distinta de una calle con sombra a la misma hora.' }, { title: 'Día y tarde', text: 'El sol puede dominar el día; tras la puesta, una capa ligera depende de la estación y del viento.' }, { title: 'Sin microclimas inventados', text: 'Explicamos la geografía de forma cualitativa si no existe una medición adecuada para una cifra.' }],
      seasonNotes: ['Entorno más verde, tiempo cambiante y más luz útil para recorridos largos.', 'Seco, luminoso y potencialmente caluroso; importan las primeras y últimas horas.', 'El inicio puede conservar el verano antes de que la lluvia gane probabilidad.', 'Pueblo más tranquilo, condiciones variables y tardes frescas que exigen flexibilidad.'],
      intentNotes: ['Elegid verano para un ritmo seco, organizando sombra y horas de calor.', 'Primavera y otoño suelen equilibrar mejor cuestas y rutas largas.', 'Final de otoño e invierno aportan calma, con lluvia y tardes frescas en el plan.', 'Para confort interior y estancias largas, usad la guía específica de invierno.'],
      practical: 'En verano separad las caminatas expuestas del mediodía y el descanso. Fuera del verano combinad capas ligeras con una opción para la lluvia. El calzado importa todo el año porque el esfuerzo de las cuestas puede pesar tanto como la temperatura.'
    },
    nl: {
      description: 'Weer in Frigiliana per maand: klimaat, seizoenen en beste reistijd voor dorpsroutes, uitstapjes en een flexibel verblijf boven Nerja.',
      lead: 'Begrijp het klimaat van Frigiliana voordat jullie data kiezen, steile dorpsroutes plannen of inpakken voor het verschil tussen open zon en schaduwrijke straten.',
      summary: 'Frigiliana combineert een heet, zeer droog zomerpatroon met een hellingdorp waar zon, schaduw, stijging en tijdstip het comfort bepalen. Lente en herfst maken langere routes vaak eenvoudiger; in de zomer helpen vroege starts en rustige middaguren; de winter brengt wisselvalliger weer en koelere avonden. De maandtabel is een planningsbasis, geen belofte voor jullie data. Vergelijk de seizoenen en bekijk daarna AEMET voordat jullie open routes, terrastijd en de inhoud van jullie dagtas vastleggen.',
      summaryItems: [{ label: 'Lokale lens', value: 'Helling · zon · schaduw' }, { label: 'Reistijd', value: 'Kies per activiteit' }, { label: 'Dagcheck', value: 'AEMET-verwachting' }],
      factorsTitle: 'Op de helling kan dezelfde dag anders voelen', factors: ['Frigiliana ligt boven de kust op hellend terrein. Hoogte, blootstelling en schaduw helpen bij de planning, maar bewijzen geen exact temperatuurverschil met Nerja.', 'Het blijvende patroon is mediterraan: het warme deel van het jaar is veel droger en regen waarschijnlijker in de koelere helft.'],
      factorItems: [{ title: 'Stijging en blootstelling', text: 'Een open klim kan op hetzelfde uur heel anders voelen dan een steeg in de schaduw.' }, { title: 'Dag en avond', text: 'Sterke zon kan de dag bepalen; na zonsondergang hangt een extra laag af van seizoen en wind.' }, { title: 'Geen verzonnen microklimaat', text: 'Lokale geografie blijft kwalitatief zolang geen passende meting een cijfer ondersteunt.' }],
      seasonNotes: ['Groenere omgeving, wisselend weer en meer bruikbaar daglicht voor langere routes.', 'Droog, helder en mogelijk heet; vroege en late uren tellen op steile of open paden.', 'Vroege herfst kan zomers blijven voordat regen later waarschijnlijker wordt.', 'Rustiger dorpsleven, wisselende omstandigheden en koelere avonden vragen flexibiliteit.'],
      intentNotes: ['Kies zomer voor een droog ritme en plan schaduw en hete uren bewust.', 'Lente en herfst bieden vaak een vriendelijker balans voor steile straten en langere routes.', 'Late herfst en winter zijn rustiger, met meer kans op regen en koele avonden.', 'Gebruik voor binnencomfort en lange verblijven de aparte wintergids.'],
      practical: 'Scheid in de zomer open wandeluren van lunch en rust. Combineer buiten de zomer lichte lagen met een regenoptie. Goede schoenen zijn het hele jaar belangrijk omdat de inspanning van het dorp even relevant kan zijn als de temperatuur.'
    },
    sv: {
      description: 'Väder i Frigiliana månad för månad: klimat, årstider och bästa restid för bypromenader, utflykter och en flexibel vistelse ovanför Nerja.',
      lead: 'Förstå Frigilianas klimat innan ni väljer datum, planerar branta bygator eller packar för skillnaden mellan öppen sol och skuggiga gränder.',
      summary: 'Frigiliana förenar ett hett, mycket torrt sommarmönster med en sluttande by där sol, skugga, lutning och tid på dagen påverkar komforten. Vår och höst gör ofta längre stråk lättare; sommaren belönar tidiga starter och lugna middagstimmar; vintern ger mer omväxlande väder och svalare kvällar. Månadstabellen är en planeringsgrund, inget löfte för era datum. Jämför årstiderna och kontrollera sedan AEMET innan ni bestämmer exponerade vägar, terrassplaner och vad som ska följa med under dagen.',
      summaryItems: [{ label: 'Lokalt fokus', value: 'Sluttning · sol · skugga' }, { label: 'Restid', value: 'Välj efter aktivitet' }, { label: 'Dagskontroll', value: 'AEMET-prognos' }],
      factorsTitle: 'I en sluttning kan samma dag kännas olika', factors: ['Frigiliana ligger ovanför kusten i lutande terräng. Höjd, exponering och skugga hjälper planeringen men bevisar ingen exakt temperaturskillnad mot Nerja.', 'Det hållbara mönstret är medelhavsklimat: den varma delen är mycket torrare och regn mer sannolikt under den svalare halvan.'],
      factorItems: [{ title: 'Lutning och exponering', text: 'En öppen uppförsväg kan kännas helt annorlunda än en skuggig gränd samma timme.' }, { title: 'Dag och kväll', text: 'Stark sol kan dominera dagen; efter solnedgång beror ett extra lager på säsong och vind.' }, { title: 'Inget påhittat mikroklimat', text: 'Lokal geografi förklaras kvalitativt tills en lämplig mätning stöder en siffra.' }],
      seasonNotes: ['Grönare omgivning, växlande väder och mer användbart dagsljus för längre stråk.', 'Torrt, ljust och potentiellt hett; tidiga och sena timmar är viktigast på öppna vägar.', 'Tidig höst kan behålla sommarkänslan innan regn blir mer sannolikt.', 'Lugnare bydagar, skiftande förhållanden och svalare kvällar kräver flexibilitet.'],
      intentNotes: ['Välj sommar för en torr rytm och planera aktivt för skugga och hetta.', 'Vår och höst ger ofta en bättre balans för branta gator och längre stråk.', 'Senhöst och vinter är lugnare med större chans för regn och svala kvällar.', 'Använd den särskilda vinterguiden för inomhuskomfort och längre vistelser.'],
      practical: 'Skilj på exponerad gångtid, lunch och vila under sommaren. Kombinera lätta lager med ett regnalternativ utanför sommaren. Bra skor är viktiga året runt eftersom byns fysiska ansträngning kan betyda lika mycket som lufttemperaturen.'
    }
  },
  nerja: {
    en: {
      description: 'Nerja weather by month: coastal climate, seasons, sea influence and the best travel time for beaches, walking and a flexible stay.',
      lead: 'Plan Nerja around its coastal climate, seasonal rainfall and the fact that air, sea and daily beach conditions do not change on the same timetable.',
      summary: 'Nerja’s coastal setting makes the sea part of the climate story without turning it into a swimming guarantee. Summers are typically dry and bright, while rain becomes more likely in the cooler half of the year. The sea changes more slowly than the air, so a warm afternoon and comfortable water are not the same question. Use the monthly table for the broad rhythm, choose dates according to beach time, walking or quieter streets, and check current weather and sea conditions before fixing each day.',
      summaryItems: [{ label: 'Local lens', value: 'Coast · sea influence' }, { label: 'Best for', value: 'Beach or town rhythm' }, { label: 'Daily check', value: 'Weather + sea state' }],
      factorsTitle: 'The coast connects air, sea and season — but does not merge them', factors: ['Nerja’s shoreline gives the page a clear maritime focus. Air temperature, sea temperature and sea state are different variables and should be checked separately.', 'The long-term pattern is dry in summer and more changeable in the cooler half. Individual rain events remain impossible to schedule from monthly averages.'],
      factorItems: [{ title: 'Sea influence', text: 'Water changes temperature more slowly than air, so spring warmth does not automatically mean warm swimming water.' }, { title: 'Coastal exposure', text: 'Sun, breeze and shelter can change comfort between a beach, terrace and inland street.' }, { title: 'No Frigiliana shortcut', text: 'Identical point-model values are not used to claim that the coast and hillside share one local climate.' }],
      seasonNotes: ['Comfortable walking days can arrive before the sea feels summery.', 'Dry, bright beach weather is common; heat, sun exposure and warm nights still shape the plan.', 'Early autumn may retain useful sea warmth while the town gradually becomes quieter.', 'Milder coastal days alternate with a greater chance of rain and cooler evenings.'],
      intentNotes: ['Summer prioritises long beach days; check heat, UV and current sea conditions rather than one monthly number.', 'Spring and autumn often support town walks and coastal routes with less intense midday heat.', 'Outside peak summer, streets and beaches can feel calmer while weather becomes less predictable.', 'For several weeks, indoor comfort and flexibility matter more than a promise of winter sun.'],
      practical: 'For beach days, check air temperature, wind and sea state separately. Plan exposed promenades outside the strongest summer sun, keep one light layer for the evening and avoid using a seasonal average as a decision about tomorrow’s swim.'
    },
    de: {
      description: 'Wetter in Nerja nach Monaten: Küstenklima, Jahreszeiten, Meereseinfluss und beste Reisezeit für Strand, Wege und einen flexiblen Aufenthalt.',
      lead: 'Plant Nerja mit Küstenklima, saisonaler Regenverteilung und dem Unterschied zwischen Luft, Meer und den aktuellen Bedingungen am Strand.',
      summary: 'In Nerja gehört das Meer zur Klimageschichte, ohne dass daraus eine Badegarantie wird. Die Sommer sind typischerweise trocken und hell; in der kühleren Jahreshälfte steigt die Regenwahrscheinlichkeit. Das Meer reagiert langsamer als die Luft, deshalb beantworten ein warmer Nachmittag und angenehme Wassertemperatur zwei verschiedene Fragen. Nutzt die Monatstabelle für den großen Rhythmus, wählt eure Reisezeit nach Strand, Spaziergängen oder ruhigeren Straßen und prüft vor jedem festen Tagesplan das aktuelle Wetter sowie die Meeresbedingungen.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Küste · Meereseinfluss' }, { label: 'Reisezeit', value: 'Strand- oder Ortsrhythmus' }, { label: 'Tagescheck', value: 'Wetter + Meereslage' }],
      factorsTitle: 'Die Küste verbindet Luft, Meer und Saison – aber setzt sie nicht gleich', factors: ['Nerjas Küste gibt der Seite ihren maritimen Schwerpunkt. Lufttemperatur, Wassertemperatur und Meereszustand sind verschiedene Variablen und werden getrennt betrachtet.', 'Langfristig ist der Sommer trocken, die kühlere Jahreshälfte wechselhafter. Einzelne Regenereignisse lassen sich aus Monatsmitteln nicht terminieren.'],
      factorItems: [{ title: 'Meereseinfluss', text: 'Wasser ändert seine Temperatur langsamer als Luft; Frühlingswärme bedeutet deshalb nicht automatisch warmes Badewasser.' }, { title: 'Exposition an der Küste', text: 'Sonne, Brise und Schutz können den Komfort zwischen Strand, Terrasse und Straße verändern.' }, { title: 'Keine Frigiliana-Abkürzung', text: 'Identische Punktmodellwerte dienen nicht als Beleg für dasselbe lokale Klima an Küste und Hang.' }],
      seasonNotes: ['Angenehme Tage für Wege können beginnen, bevor sich das Meer sommerlich anfühlt.', 'Trockenes, helles Strandwetter ist häufig; Hitze, Sonne und warme Nächte prägen dennoch den Plan.', 'Der frühe Herbst kann nutzbare Meereswärme bewahren, während der Ort langsam ruhiger wird.', 'Milde Küstentage wechseln mit höherer Regenchance und kühleren Abenden.'],
      intentNotes: ['Im Sommer stehen lange Strandtage im Vordergrund; prüft Hitze, UV und Meereslage aktuell.', 'Frühling und Herbst eignen sich oft für Orts- und Küstenwege mit weniger Mittagshitze.', 'Außerhalb des Hochsommers werden Straßen und Strände ruhiger, das Wetter aber variabler.', 'Bei mehreren Wochen zählen Wohnkomfort und Flexibilität mehr als ein Versprechen auf Wintersonne.'],
      practical: 'Für Strandtage prüft ihr Lufttemperatur, Wind und Meereszustand getrennt. Legt offene Promenaden außerhalb der stärksten Sommersonne, nehmt eine leichte Abendschicht mit und macht aus einem Saisonmittel keine Entscheidung über das Baden morgen.'
    },
    es: {
      description: 'Tiempo en Nerja mes a mes: clima costero, estaciones, influencia del mar y mejor época para playa, paseos y una estancia flexible.',
      lead: 'Planificad Nerja según su clima costero, la lluvia estacional y la diferencia entre aire, mar y condiciones reales de cada playa.',
      summary: 'En Nerja, el mar forma parte del clima sin convertirse en una garantía de baño. Los veranos suelen ser secos y luminosos, mientras la lluvia gana probabilidad en la mitad fresca del año. El agua cambia más lentamente que el aire, por lo que una tarde cálida y una temperatura agradable del mar son preguntas distintas. Usad la tabla mensual para entender el ritmo general, elegid fechas según playa, paseos o calles tranquilas y consultad el tiempo y el estado actual del mar antes de cerrar cada jornada.',
      summaryItems: [{ label: 'Clave local', value: 'Costa · influencia marina' }, { label: 'Mejor época', value: 'Playa o ritmo urbano' }, { label: 'Consulta diaria', value: 'Tiempo + estado del mar' }],
      factorsTitle: 'La costa conecta aire, mar y estación, sin confundirlos', factors: ['La costa de Nerja aporta el enfoque marítimo. Temperatura del aire, temperatura del agua y estado del mar son variables diferentes.', 'El verano es seco a largo plazo y la mitad fresca más variable. Las medias mensuales no permiten fechar un episodio de lluvia.'],
      factorItems: [{ title: 'Influencia marina', text: 'El agua cambia más despacio que el aire; el calor primaveral no implica agua cálida.' }, { title: 'Exposición costera', text: 'Sol, brisa y abrigo modifican el confort entre playa, terraza y calle.' }, { title: 'Sin atajos con Frigiliana', text: 'Valores puntuales idénticos no prueban el mismo clima local en costa y ladera.' }],
      seasonNotes: ['Los días cómodos para caminar pueden llegar antes de que el mar parezca veraniego.', 'Tiempo de playa seco y luminoso, con calor, sol y noches templadas en la planificación.', 'El inicio puede conservar calor en el mar mientras el pueblo recupera calma.', 'Días costeros suaves alternan con mayor probabilidad de lluvia y tardes frescas.'],
      intentNotes: ['El verano favorece la playa; consultad calor, UV y estado del mar en directo.', 'Primavera y otoño suelen facilitar paseos urbanos y costeros sin tanto calor central.', 'Fuera del verano punta, calles y playas se calman y el tiempo resulta menos predecible.', 'En estancias largas, el confort interior importa más que prometer sol invernal.'],
      practical: 'Para la playa, comprobad por separado aire, viento y estado del mar. Dejad los paseos expuestos fuera del sol más fuerte, llevad una capa ligera para la tarde y no convirtáis una media estacional en una decisión sobre el baño de mañana.'
    },
    nl: {
      description: 'Weer in Nerja per maand: kustklimaat, seizoenen, invloed van de zee en beste reistijd voor strand, wandelen en een flexibel verblijf.',
      lead: 'Plan Nerja rond het kustklimaat, seizoensregen en het verschil tussen lucht, zee en de actuele omstandigheden aan het strand.',
      summary: 'In Nerja hoort de zee bij het klimaatverhaal zonder een zwemgarantie te worden. Zomers zijn doorgaans droog en helder; in de koelere helft van het jaar neemt de kans op regen toe. Water verandert langzamer dan lucht, dus een warme middag en aangenaam zeewater zijn twee verschillende vragen. Gebruik de maandtabel voor het grote ritme, kies data voor strand, wandelingen of rustiger straten en bekijk het actuele weer en de toestand van de zee voordat jullie elke dag vastleggen.',
      summaryItems: [{ label: 'Lokale lens', value: 'Kust · invloed van zee' }, { label: 'Reistijd', value: 'Strand- of dorpsritme' }, { label: 'Dagcheck', value: 'Weer + toestand zee' }],
      factorsTitle: 'De kust verbindt lucht, zee en seizoen zonder ze gelijk te stellen', factors: ['Nerja’s kust geeft de pagina haar maritieme focus. Luchttemperatuur, watertemperatuur en toestand van de zee zijn verschillende variabelen.', 'De zomer is op lange termijn droog en het koelere deel wisselvalliger. Maandgemiddelden plannen geen losse regenbui.'],
      factorItems: [{ title: 'Invloed van de zee', text: 'Water verandert langzamer dan lucht; lentewarmte betekent niet automatisch warm zwemwater.' }, { title: 'Blootstelling aan de kust', text: 'Zon, bries en beschutting veranderen het comfort tussen strand, terras en straat.' }, { title: 'Geen Frigiliana-snelkoppeling', text: 'Identieke puntwaarden bewijzen geen gelijk lokaal klimaat aan kust en helling.' }],
      seasonNotes: ['Comfortabele wandeldagen kunnen beginnen voordat de zee zomers aanvoelt.', 'Droog en helder strandweer is gebruikelijk; hitte, zon en warme nachten blijven relevant.', 'Vroege herfst kan zeewarmte vasthouden terwijl het rustiger wordt.', 'Zachte kustdagen wisselen af met meer kans op regen en koelere avonden.'],
      intentNotes: ['Zomer draait om lange stranddagen; bekijk hitte, UV en zeecondities actueel.', 'Lente en herfst zijn vaak prettiger voor dorp en kust zonder de sterkste middagwarmte.', 'Buiten hoogzomer worden strand en straten rustiger terwijl het weer minder voorspelbaar is.', 'Bij wekenlang verblijf tellen binnencomfort en flexibiliteit meer dan winterzon beloven.'],
      practical: 'Controleer voor het strand lucht, wind en toestand van de zee afzonderlijk. Plan open promenades buiten de sterkste zomerzon, neem een lichte avondlaag mee en gebruik een seizoensgemiddelde niet als antwoord op morgen zwemmen.'
    },
    sv: {
      description: 'Väder i Nerja månad för månad: kustklimat, årstider, havspåverkan och bästa restid för strand, promenader och flexibel vistelse.',
      lead: 'Planera Nerja efter kustklimatet, säsongsregnet och skillnaden mellan luft, hav och dagens förhållanden på stranden.',
      summary: 'I Nerja hör havet till klimatberättelsen utan att bli en badgaranti. Somrarna är vanligen torra och ljusa, medan regn blir mer sannolikt under den svalare halvan. Vatten ändrar temperatur långsammare än luft, så en varm eftermiddag och behagligt badvatten är två olika frågor. Använd månadstabellen för den stora rytmen, välj datum efter strand, promenader eller lugnare gator och kontrollera aktuellt väder och havsförhållanden innan varje dag låses.',
      summaryItems: [{ label: 'Lokalt fokus', value: 'Kust · havspåverkan' }, { label: 'Restid', value: 'Strand- eller ortsrytm' }, { label: 'Dagskontroll', value: 'Väder + havsläge' }],
      factorsTitle: 'Kusten förbinder luft, hav och säsong utan att blanda ihop dem', factors: ['Nerjas kust ger sidan dess maritima fokus. Lufttemperatur, vattentemperatur och havstillstånd är olika variabler.', 'Sommaren är långsiktigt torr och den svalare delen mer omväxlande. Månadsmedel kan inte schemalägga en regnskur.'],
      factorItems: [{ title: 'Havspåverkan', text: 'Vatten ändrar temperatur långsammare än luft; vårvärme betyder inte automatiskt varmt badvatten.' }, { title: 'Kustexponering', text: 'Sol, bris och skydd ändrar komforten mellan strand, terrass och gata.' }, { title: 'Ingen genväg via Frigiliana', text: 'Identiska punktvärden bevisar inte samma lokala klimat vid kust och sluttning.' }],
      seasonNotes: ['Behagliga promenaddagar kan komma innan havet känns somrigt.', 'Torrt och ljust strandväder är vanligt; hetta, sol och varma nätter påverkar planen.', 'Tidig höst kan behålla havsvärme samtidigt som orten blir lugnare.', 'Milda kustdagar växlar med större chans för regn och svalare kvällar.'],
      intentNotes: ['Sommaren prioriterar långa stranddagar; kontrollera hetta, UV och havsläge aktuellt.', 'Vår och höst passar ofta orts- och kustpromenader utan starkaste middagsvärmen.', 'Utanför högsommaren blir stränder och gator lugnare medan vädret varierar mer.', 'Vid flera veckor betyder inomhuskomfort och flexibilitet mer än löften om vintersol.'],
      practical: 'Kontrollera luft, vind och havstillstånd separat inför stranddagen. Lägg öppna promenader utanför starkaste sommarsolen, ta med ett lätt kvällslager och låt inte ett säsongsmedel avgöra morgondagens bad.'
    }
  },
  tarifa: {
    en: {
      description: 'Tarifa weather by month: climate, seasons, Levante, Poniente and the best travel time for beaches, exploring and a flexible Strait stay.',
      lead: 'Understand how the Strait, Atlantic influence, Levante and Poniente shape Tarifa across the year without treating a seasonal pattern as a wind forecast.',
      summary: 'Tarifa is shaped less by one headline temperature than by the interaction of the Strait, Atlantic weather and changing wind. Summer is typically dry and bright, yet an exposed beach can feel very different as Levante or Poniente changes. Spring and autumn reward flexible coast-and-town plans; winter brings a greater chance of rain and passing fronts. Use the monthly table for the annual pattern, not for tomorrow’s wind. For each day, combine AEMET with current local wind and sea information before choosing a beach, walk or drive west.',
      summaryItems: [{ label: 'Local lens', value: 'Strait · Atlantic · wind' }, { label: 'Wind names', value: 'Levante · Poniente' }, { label: 'Daily check', value: 'Forecast + wind' }],
      factorsTitle: 'The Strait makes wind part of ordinary travel planning', factors: ['Tarifa sits where Atlantic and Mediterranean contexts meet. The Strait helps explain a strongly maritime, exposed setting, but conditions still vary by day and place.', 'Levante is the easterly wind and Poniente the westerly name travellers hear most often. Neither name guarantees a fixed force, temperature or beach experience.'],
      factorItems: [{ title: 'Strait and Atlantic', text: 'Passing systems, marine air and exposure create a more changeable feel than a temperature table alone suggests.' }, { title: 'Levante and Poniente', text: 'Direction matters to comfort, but strength and local shelter must be checked for the day.' }, { title: 'General guide, not spot advice', text: 'Technical watersports and beach-safety decisions belong with current specialist information.' }],
      seasonNotes: ['Longer days and mixed conditions suit flexible combinations of town, coast and landscape.', 'Dry and bright, with sun and wind both central to beach comfort.', 'September may still feel summery before rain and Atlantic variability become more prominent.', 'Mild in coastal terms, but more exposed to rain, fronts and changing wind.'],
      intentNotes: ['Summer suits dry beach rhythm when the current wind makes the chosen setting comfortable.', 'Spring and autumn support exploring if town, coast and landscape remain interchangeable.', 'Outside peak summer, a quieter Tarifa rewards visitors who can change the plan with the forecast.', 'For a longer winter stay, use the dedicated conversion guide for home comfort and routines.'],
      practical: 'In Tarifa, temperature is only one planning input. Check wind direction and strength before selecting an exposed beach, carry sun protection even when moving air feels cool, and keep a town or inland alternative for days when the coast does not fit the plan.'
    },
    de: {
      description: 'Wetter in Tarifa nach Monaten: Klima, Jahreszeiten, Levante, Poniente und beste Reisezeit für Strand, Ausflüge und flexible Tage an der Meerenge.',
      lead: 'Versteht, wie Meerenge, Atlantikeinfluss, Levante und Poniente Tarifa im Jahreslauf prägen, ohne ein Saisonmuster mit einer Windprognose zu verwechseln.',
      summary: 'Tarifa wird weniger von einer Schlagzeilen-Temperatur geprägt als vom Zusammenspiel aus Meerenge, Atlantikwetter und wechselndem Wind. Der Sommer ist typischerweise trocken und hell; ein offener Strand kann sich mit Levante oder Poniente dennoch völlig verändern. Frühling und Herbst belohnen flexible Pläne zwischen Küste und Ort, im Winter nehmen Regenchance und durchziehende Fronten zu. Nutzt die Monatstabelle für das Jahresmuster, nicht für den Wind von morgen. Verbindet täglich AEMET mit aktuellen Wind- und Meeresinformationen, bevor ihr Strand, Spaziergang oder Fahrt nach Westen wählt.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Meerenge · Atlantik · Wind' }, { label: 'Windnamen', value: 'Levante · Poniente' }, { label: 'Tagescheck', value: 'Vorhersage + Wind' }],
      factorsTitle: 'An der Meerenge gehört Wind zur normalen Reiseplanung', factors: ['Tarifa liegt im Übergang von atlantischem und mediterranem Kontext. Die Meerenge erklärt die maritime, exponierte Lage; die Bedingungen unterscheiden sich dennoch nach Tag und Ort.', 'Levante bezeichnet den Ostwind, Poniente den Westwind. Keiner der Namen garantiert feste Stärke, Temperatur oder Strandkomfort.'],
      factorItems: [{ title: 'Meerenge und Atlantik', text: 'Durchziehende Systeme, Meeresluft und Exposition erzeugen mehr Wechsel, als eine Temperaturtabelle zeigt.' }, { title: 'Levante und Poniente', text: 'Die Richtung prägt den Komfort; Stärke und örtlicher Schutz müssen tagesaktuell geprüft werden.' }, { title: 'Allgemeiner Guide, keine Spot-Beratung', text: 'Technische Wassersport- und Sicherheitsentscheidungen gehören zu aktuellen Spezialinformationen.' }],
      seasonNotes: ['Längere Tage und gemischte Bedingungen eignen sich für flexible Kombinationen aus Ort, Küste und Landschaft.', 'Trocken und hell; für den Strandkomfort zählen Sonne und Wind gemeinsam.', 'September kann sommerlich bleiben, bevor Regen und atlantische Wechselhaftigkeit zunehmen.', 'Für Küstenverhältnisse mild, aber stärker von Regen, Fronten und Windwechseln geprägt.'],
      intentNotes: ['Sommer passt zum trockenen Strandrhythmus, wenn der aktuelle Wind zum gewählten Ort passt.', 'Frühling und Herbst eignen sich zum Erkunden, wenn Küste, Ort und Landschaft austauschbar bleiben.', 'Außerhalb des Hochsommers belohnt das ruhigere Tarifa Gäste, die ihren Plan ändern können.', 'Für längere Winteraufenthalte behandelt der eigene Conversion-Guide Wohnkomfort und Alltag.'],
      practical: 'In Tarifa ist Temperatur nur ein Planungswert. Prüft Windrichtung und Stärke vor der Wahl eines offenen Strands, nehmt trotz kühlender Luft Sonnenschutz mit und haltet eine Orts- oder Inlandoption bereit, wenn die Küste nicht zum Tag passt.'
    },
    es: {
      description: 'Tiempo en Tarifa mes a mes: clima, estaciones, Levante, Poniente y mejor época para playa, excursiones y días flexibles junto al Estrecho.',
      lead: 'Entended cómo el Estrecho, el Atlántico, el Levante y el Poniente definen Tarifa sin confundir un patrón estacional con una previsión del viento.',
      summary: 'Tarifa depende menos de una temperatura destacada que de la combinación entre Estrecho, tiempo atlántico y viento cambiante. El verano suele ser seco y luminoso, pero una playa abierta cambia mucho con Levante o Poniente. Primavera y otoño favorecen planes flexibles entre costa y pueblo; en invierno aumentan la lluvia y los frentes. Usad la tabla mensual para el patrón anual, no para el viento de mañana. Cada día, combinad AEMET con información actual de viento y mar antes de elegir playa, paseo o carretera hacia el oeste.',
      summaryItems: [{ label: 'Clave local', value: 'Estrecho · Atlántico · viento' }, { label: 'Vientos', value: 'Levante · Poniente' }, { label: 'Consulta diaria', value: 'Previsión + viento' }],
      factorsTitle: 'En el Estrecho, el viento forma parte de la planificación normal', factors: ['Tarifa se sitúa entre contextos atlántico y mediterráneo. El Estrecho explica su exposición marítima, pero las condiciones varían según día y lugar.', 'Levante es el viento del este y Poniente el del oeste. Ningún nombre garantiza fuerza, temperatura o confort fijo.'],
      factorItems: [{ title: 'Estrecho y Atlántico', text: 'Sistemas, aire marino y exposición crean más variación de la que muestra una tabla térmica.' }, { title: 'Levante y Poniente', text: 'La dirección importa, pero fuerza y abrigo local deben comprobarse cada día.' }, { title: 'Guía general, no consejo de spot', text: 'Deporte acuático y seguridad requieren información técnica y actual.' }],
      seasonNotes: ['Días largos y condiciones mixtas para combinar con flexibilidad pueblo, costa y paisaje.', 'Seco y luminoso, con sol y viento juntos en el confort de playa.', 'Septiembre puede seguir veraniego antes de aumentar lluvia y variabilidad atlántica.', 'Suave para la costa, pero más expuesto a lluvia, frentes y cambios de viento.'],
      intentNotes: ['El verano favorece la playa seca si el viento actual encaja con el lugar elegido.', 'Primavera y otoño funcionan para explorar si costa, pueblo y paisaje son intercambiables.', 'Fuera del verano punta, una Tarifa tranquila premia poder cambiar el plan.', 'Para invierno largo, la guía específica trata confort de vivienda y rutina.'],
      practical: 'En Tarifa, la temperatura es solo una variable. Consultad dirección y fuerza del viento antes de elegir una playa abierta, mantened la protección solar aunque el aire refresque y guardad una alternativa urbana o interior cuando la costa no encaje.'
    },
    nl: {
      description: 'Weer in Tarifa per maand: klimaat, seizoenen, Levante, Poniente en beste reistijd voor strand, uitstapjes en flexibele dagen aan de Straat.',
      lead: 'Begrijp hoe Straat, Atlantische invloed, Levante en Poniente Tarifa vormen zonder een seizoenspatroon als windverwachting te lezen.',
      summary: 'Tarifa wordt minder bepaald door één opvallende temperatuur dan door het samenspel van de Straat, Atlantisch weer en wisselende wind. De zomer is meestal droog en helder, maar een open strand kan door Levante of Poniente totaal anders voelen. Lente en herfst belonen flexibele plannen tussen kust en stad; in de winter nemen regen en passerende fronten toe. Gebruik de maandtabel voor het jaarpatroon, niet voor de wind van morgen. Combineer dagelijks AEMET met actuele wind- en zee-informatie voordat jullie strand, wandeling of rit naar het westen kiezen.',
      summaryItems: [{ label: 'Lokale lens', value: 'Straat · Atlantisch · wind' }, { label: 'Windnamen', value: 'Levante · Poniente' }, { label: 'Dagcheck', value: 'Verwachting + wind' }],
      factorsTitle: 'Aan de Straat hoort wind bij gewone reisplanning', factors: ['Tarifa ligt waar Atlantische en mediterrane context samenkomen. De Straat verklaart de maritieme blootstelling, maar omstandigheden verschillen per dag en plek.', 'Levante is de oostenwind en Poniente de westenwind. Geen van beide namen garandeert vaste kracht, temperatuur of strandcomfort.'],
      factorItems: [{ title: 'Straat en Atlantische Oceaan', text: 'Fronten, zeelucht en blootstelling geven meer variatie dan een temperatuurtabel toont.' }, { title: 'Levante en Poniente', text: 'Richting beïnvloedt comfort; kracht en lokale beschutting moeten actueel worden bekeken.' }, { title: 'Algemene gids, geen spotadvies', text: 'Technische watersport- en veiligheidskeuzes horen bij actuele specialistische informatie.' }],
      seasonNotes: ['Langere dagen en gemengde omstandigheden voor flexibele combinaties van stad, kust en landschap.', 'Droog en helder, met zon en wind samen bepalend voor strandcomfort.', 'September kan zomers blijven voordat regen en Atlantische wisselvalligheid toenemen.', 'Mild voor de kust, maar meer blootgesteld aan regen, fronten en veranderende wind.'],
      intentNotes: ['Zomer past bij droog strandritme als de actuele wind bij de gekozen plek past.', 'Lente en herfst zijn geschikt om te ontdekken wanneer kust, stad en landschap uitwisselbaar blijven.', 'Buiten hoogzomer beloont rustiger Tarifa bezoekers die hun plan kunnen veranderen.', 'Voor een lange winter behandelt de aparte gids wooncomfort en dagelijks ritme.'],
      practical: 'In Tarifa is temperatuur maar één invoer. Bekijk windrichting en kracht voor een open strand, neem zonbescherming mee ook als de lucht koel voelt en houd een alternatief in stad of binnenland klaar.'
    },
    sv: {
      description: 'Väder i Tarifa månad för månad: klimat, årstider, Levante, Poniente och bästa restid för strand, utflykter och flexibla dagar vid sundet.',
      lead: 'Förstå hur sundet, Atlanten, Levante och Poniente formar Tarifa utan att läsa ett säsongsmönster som en vindprognos.',
      summary: 'Tarifa formas mindre av en enda rubriktemperatur än av samspelet mellan sundet, atlantiskt väder och växlande vind. Sommaren är oftast torr och ljus, men en öppen strand kan kännas helt annorlunda med Levante eller Poniente. Vår och höst belönar flexibla planer mellan kust och stad; vintern ger större risk för regn och fronter. Använd månadstabellen för årsmönstret, inte morgondagens vind. Kombinera dagligen AEMET med aktuell vind- och havsinformation innan ni väljer strand, promenad eller färd västerut.',
      summaryItems: [{ label: 'Lokalt fokus', value: 'Sund · Atlanten · vind' }, { label: 'Vindnamn', value: 'Levante · Poniente' }, { label: 'Dagskontroll', value: 'Prognos + vind' }],
      factorsTitle: 'Vid sundet ingår vinden i vanlig reseplanering', factors: ['Tarifa ligger där atlantisk och mediterran kontext möts. Sundet förklarar det maritima, exponerade läget men förhållanden varierar mellan dagar och platser.', 'Levante är östvinden och Poniente västvinden. Inget namn garanterar fast styrka, temperatur eller strandkomfort.'],
      factorItems: [{ title: 'Sund och Atlanten', text: 'Fronter, havsluft och exponering ger mer variation än en temperaturtabell visar.' }, { title: 'Levante och Poniente', text: 'Riktningen påverkar komforten; styrka och lokalt skydd måste kontrolleras för dagen.' }, { title: 'Allmän guide, inget spotråd', text: 'Tekniska vattensport- och säkerhetsbeslut hör till aktuell specialistinformation.' }],
      seasonNotes: ['Längre dagar och blandade förhållanden för flexibla kombinationer av stad, kust och landskap.', 'Torrt och ljust, med både sol och vind centrala för strandkomfort.', 'September kan kännas somrig innan regn och atlantisk variation ökar.', 'Milt för kusten, men mer utsatt för regn, fronter och växlande vind.'],
      intentNotes: ['Sommaren passar torr strandrytm när dagens vind fungerar på den valda platsen.', 'Vår och höst passar upptäckter om kust, stad och landskap kan byta plats i planen.', 'Utanför högsommaren belönar lugnare Tarifa den som kan ändra plan.', 'För en lång vinter behandlar den särskilda guiden boendekomfort och vardag.'],
      practical: 'I Tarifa är temperaturen bara en planeringsfaktor. Kontrollera vindriktning och styrka före en öppen strand, använd solskydd även när luften känns sval och behåll ett alternativ i staden eller inlandet.'
    }
  }
};

const relatedTokens: Record<WeatherDestination, [LinkToken, LinkToken, LinkToken]> = {
  frigiliana: ['frigiliana_geography', 'frigiliana_stairs', 'frigiliana_winter_stays'],
  nerja: ['nerja_geography', 'nerja_where_to_stay', 'getting_to_nerja'],
  tarifa: ['tarifa_geography', 'tarifa_where_to_stay', 'tarifa_winter_stays']
};

export function getWeatherAuthorityContent(destination: WeatherDestination, lang: AmaraLanguage): WeatherAuthorityContent {
  const common = shared[lang];
  const profile = profiles[destination][lang];
  const place = names[destination];
  const links: WeatherAuthorityContent['sources']['links'] = [
    { label: `Climate-Data.org · ${place}`, text: common.modelSourceText, href: climateDataSourceUrls[destination] },
    { label: `AEMET · ${place}`, text: common.forecastSourceText, href: weatherForecastUrls[destination] }
  ];

  if (destination === 'tarifa') {
    const stationText: Record<AmaraLanguage, string> = {
      en: 'Official monthly climate normals for temperature, rainfall and rain days at Tarifa station 6001.',
      de: 'Amtliche Monatsnormalwerte für Temperatur, Niederschlag und Regentage an der Tarifa-Station 6001.',
      es: 'Valores climáticos mensuales oficiales de temperatura, precipitación y días de lluvia en la estación 6001 de Tarifa.',
      nl: 'Officiële maandnormalen voor temperatuur, neerslag en regendagen bij station Tarifa 6001.',
      sv: 'Officiella månadsnormaler för temperatur, nederbörd och regndagar vid station Tarifa 6001.'
    };
    links.splice(1, 0,
      { label: 'AEMET · Tarifa station 6001', text: stationText[lang], href: tarifaNormalsUrl },
      { label: 'Junta de Andalucía · Levante & Poniente', text: profile.factorItems[1].text, href: juntaWindUrl }
    );
  }

  const navLabels: Record<AmaraLanguage, string> = {
    en: 'Weather & Seasons',
    de: 'Wetter & Jahreszeiten',
    es: 'Tiempo y estaciones',
    nl: 'Weer & seizoenen',
    sv: 'Väder & årstider'
  };
  const nerjaArrivalLabels: Record<AmaraLanguage, { label: string; text: string }> = {
    en: { label: 'Arrival & mobility', text: 'Connect airports, coaches and the final stretch into Nerja.' },
    de: { label: 'Anreise & Mobilität', text: 'Flughäfen, Busverbindungen und die letzte Etappe nach Nerja verbinden.' },
    es: { label: 'Llegada y movilidad', text: 'Conectar aeropuertos, autobuses y el último tramo hasta Nerja.' },
    nl: { label: 'Aankomst & mobiliteit', text: 'Verbind luchthavens, bussen en het laatste stuk naar Nerja.' },
    sv: { label: 'Ankomst & mobilitet', text: 'Koppla ihop flygplatser, bussar och sista sträckan till Nerja.' }
  };

  return {
    navLabel: navLabels[lang],
    hero: {
      eyebrow: common.eyebrow(place), title: common.h1(place), lead: profile.lead,
      summaryEyebrow: lang === 'de' ? 'Darum geht es' : lang === 'es' ? 'Lo esencial' : lang === 'nl' ? 'Dit bepaalt de reis' : lang === 'sv' ? 'Det här formar resan' : 'What shapes the stay',
      summary: profile.summary, summaryItems: profile.summaryItems
    },
    factors: { eyebrow: lang === 'de' ? 'Lokale Klimafaktoren' : lang === 'es' ? 'Factores climáticos locales' : lang === 'nl' ? 'Lokale klimaatfactoren' : lang === 'sv' ? 'Lokala klimatfaktorer' : 'Local climate drivers', title: profile.factorsTitle, paragraphs: profile.factors, items: profile.factorItems },
    table: common.table,
    seasons: { eyebrow: common.seasonEyebrow, title: common.seasonTitle, intro: common.seasonIntro, planningLabel: common.seasonPlanningLabel, items: common.seasons.map((season, index) => ({ ...season, summary: profile.seasonNotes[index] })) },
    bestTime: { eyebrow: common.bestEyebrow, title: common.bestTitle, intro: common.bestIntro, items: common.intentTitles.map((title, index) => ({ title, text: profile.intentNotes[index] })) },
    practical: { eyebrow: common.practicalEyebrow, title: common.practicalTitle, paragraphs: [common.practicalIntro, profile.practical], listTitle: common.packTitle, items: common.packItems },
    forecast: { eyebrow: common.forecastEyebrow, title: common.forecastTitle, paragraphs: common.forecastParagraphs, cta: common.forecastCta },
    sources: { eyebrow: common.sourcesEyebrow, title: common.sourcesTitle, intro: common.sourcesIntro, checked: common.sourcesChecked, links },
    related: {
      eyebrow: common.relatedEyebrow,
      title: common.relatedTitle,
      links: relatedTokens[destination].map((token, index) => ({
        token,
        label: destination === 'nerja' && index === 2 ? nerjaArrivalLabels[lang].label : common.relatedLabels[index],
        text: destination === 'nerja' && index === 2 ? nerjaArrivalLabels[lang].text : common.relatedTexts[index]
      }))
    },
    closing: { eyebrow: common.closingEyebrow, title: common.closingTitle, body: common.closingBody, primaryLabel: common.primaryLabel, secondaryLabel: common.secondaryLabel }
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-21',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export function getWeatherSeo(destination: WeatherDestination): AmaraAuthoringSeo {
  const place = names[destination];
  return {
    version: `2026-08-21-${destination}-weather-v2.0`,
    pageType: 'A',
    entityKey: 'amara-brand',
    article,
    languages: Object.fromEntries((['en', 'de', 'es', 'nl', 'sv'] as AmaraLanguage[]).map((lang) => [lang, {
      title: shared[lang].seoTitle(place),
      description: profiles[destination][lang].description,
      robots: 'index, follow',
      canonical: 'auto'
    }])) as AmaraAuthoringSeo['languages']
  };
}

export const weatherMonthLabels: Record<AmaraLanguage, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  de: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
  es: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
  nl: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
  sv: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']
};
