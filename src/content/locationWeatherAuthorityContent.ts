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
      labels: { month: 'Month', high: 'Avg. maximum', low: 'Avg. minimum', rain: 'Rainfall', sunHours: 'Sun / day', temperature: 'Average maximum / minimum', rainfall: 'Monthly rainfall', details: 'Monthly values in detail' },
      sourceTitle: 'How to read the data', sourceText: 'Climate-Data.org point-model values give a transparent planning baseline. The provider currently returns identical values for Nerja and Frigiliana, so read them as one regional picture rather than two separate local climates.'
    },
    seasonEyebrow: 'The year in four parts', seasonTitle: 'Spring, summer, autumn and winter', seasonIntro: 'Each season changes the balance between heat, rain, daylight and the way a day is best organised. The notes describe tendencies, never guarantees.', seasonPlanningLabel: 'Plan for it',
    seasons: [
      { period: 'March – May', title: 'Spring', planning: 'Bring layers and keep one rain option; conditions can still change across a multi-day stay.' },
      { period: 'June – August', title: 'Summer', planning: 'Move exposed walks away from midday and carry water, shade and sun protection.' },
      { period: 'September – November', title: 'Autumn', planning: 'Treat early and late autumn differently and check the near-term forecast as rain becomes more likely.' },
      { period: 'December – February', title: 'Winter', planning: 'Pack for cooler evenings and mixed weather, even when a bright afternoon feels mild.' }
    ],
    bestEyebrow: 'Best time by intention', bestTitle: 'Choose the season that suits your stay', bestIntro: 'Each season brings its own advantages. Choose dates for the days you want to enjoy, then use the forecast to shape the details.', intentTitles: ['Beach & long evenings', 'Walking & exploring', 'Quieter town rhythm', 'Longer winter stay'],
    practicalEyebrow: 'Day planning & packing', practicalTitle: 'Turn the climate pattern into a workable day', practicalIntro: 'A useful plan allows the middle of the day, the evening and a change in conditions to feel different. Climate helps with the suitcase; the forecast decides tomorrow.', packTitle: 'A flexible packing list', packItems: ['Sun protection, water bottle and a hat', 'Light layers for wind, shade or evening', 'Comfortable footwear suited to the local terrain', 'A compact rain layer outside the driest months'],
    forecastEyebrow: 'Current weather', forecastTitle: 'Use AEMET for the actual travel dates', forecastParagraphs: ['This page explains the long-term climate — the pattern you can plan a trip around.', 'For your actual dates, use AEMET’s municipal forecast and warnings. They describe the main settlement, so a beach, a hillside or a sheltered street can still differ.'], forecastCta: 'Open the official AEMET forecast',
    sourcesEyebrow: 'Sources', sourcesTitle: 'Where these figures come from', sourcesIntro: 'Long-term averages come from one source, the daily forecast from another. Both are listed here.', sourcesChecked: 'Sources checked in August 2026', modelSourceText: 'Monthly baseline for temperature, rainfall and sunshine.', forecastSourceText: 'Official municipal forecast and weather-warning reference.',
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
      labels: { month: 'Monat', high: 'Mittl. Maximum', low: 'Mittl. Minimum', rain: 'Niederschlag', sunHours: 'Sonne / Tag', temperature: 'Mittleres Maximum / Minimum', rainfall: 'Monatsniederschlag', details: 'Monatswerte im Detail' },
      sourceTitle: 'So lest ihr die Daten', sourceText: 'Die Punktmodellwerte von Climate-Data.org sind eine transparente Planungsbasis. Für Nerja und Frigiliana liefert der Anbieter derzeit identische Werte – lest sie deshalb als ein regionales Bild und nicht als zwei getrennte Lokalklimata.'
    },
    seasonEyebrow: 'Das Jahr in vier Teilen', seasonTitle: 'Frühling, Sommer, Herbst und Winter', seasonIntro: 'Jede Jahreszeit verändert das Verhältnis von Hitze, Regen, Tageslicht und sinnvoller Tagesplanung. Die Hinweise beschreiben Tendenzen, niemals Garantien.', seasonPlanningLabel: 'Darauf einstellen',
    seasons: [
      { period: 'März – Mai', title: 'Frühling', planning: 'Schichten und eine Regenoption einplanen; während mehrerer Tage kann das Wetter noch wechseln.' },
      { period: 'Juni – August', title: 'Sommer', planning: 'Offene Wege aus der Mittagshitze verlegen und Wasser, Schatten sowie Sonnenschutz mitnehmen.' },
      { period: 'September – November', title: 'Herbst', planning: 'Frühen und späten Herbst unterscheiden und bei zunehmender Regenchance die nähere Vorhersage nutzen.' },
      { period: 'Dezember – Februar', title: 'Winter', planning: 'Für kühlere Abende und wechselndes Wetter packen, auch wenn sich ein heller Nachmittag mild anfühlt.' }
    ],
    bestEyebrow: 'Beste Reisezeit nach Absicht', bestTitle: 'Die passende Reisezeit für euren Aufenthalt', bestIntro: 'Jede Jahreszeit bringt ihre eigenen Vorteile. Wählt eure Reisedaten nach den Tagen, die ihr genießen möchtet, und stimmt die Details anschließend auf die Vorhersage ab.', intentTitles: ['Strand & lange Abende', 'Wandern & Erkunden', 'Ruhigerer Ortsrhythmus', 'Längerer Winteraufenthalt'],
    practicalEyebrow: 'Tagesplanung & Gepäck', practicalTitle: 'Aus dem Klimamuster einen guten Tag machen', practicalIntro: 'Ein guter Plan lässt zu, dass sich Mittag, Abend und ein Wetterwechsel unterschiedlich anfühlen. Das Klima hilft beim Koffer; über morgen entscheidet die Vorhersage.', packTitle: 'Flexibel einpacken', packItems: ['Sonnenschutz, Trinkflasche und Kopfbedeckung', 'Leichte Schichten für Wind, Schatten oder Abend', 'Bequeme Schuhe passend zum örtlichen Gelände', 'Außerhalb der trockensten Monate eine kompakte Regenlage'],
    forecastEyebrow: 'Aktuelles Wetter', forecastTitle: 'Für eure Reisedaten zählt AEMET', forecastParagraphs: ['Diese Seite erklärt das langfristige Klima – das Muster, nach dem sich eine Reise planen lässt.', 'Für eure konkreten Reisedaten nutzt ihr die Gemeindeprognose und die Warnungen von AEMET. Sie gelten für den Hauptort; ein Strand, ein Hang oder eine geschützte Gasse kann davon abweichen.'], forecastCta: 'Amtliche AEMET-Vorhersage öffnen',
    sourcesEyebrow: 'Quellen', sourcesTitle: 'Woher diese Zahlen stammen', sourcesIntro: 'Die langfristigen Mittelwerte stammen aus einer Quelle, die Tagesprognose aus einer anderen. Beide sind hier aufgeführt.', sourcesChecked: 'Quellen geprüft im August 2026', modelSourceText: 'Monatliche Basiswerte für Temperatur, Niederschlag und Sonne.', forecastSourceText: 'Amtliche Gemeindeprognose und Referenz für Wetterwarnungen.',
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
      labels: { month: 'Mes', high: 'Máxima media', low: 'Mínima media', rain: 'Lluvia', sunHours: 'Sol / día', temperature: 'Máxima / mínima media', rainfall: 'Lluvia mensual', details: 'Valores mensuales en detalle' },
      sourceTitle: 'Cómo leer los datos', sourceText: 'Los valores del modelo puntual de Climate-Data.org sirven como base de planificación transparente. El proveedor da ahora valores idénticos para Nerja y Frigiliana, así que leedlos como una imagen regional y no como dos climas locales distintos.'
    },
    seasonEyebrow: 'El año en cuatro partes', seasonTitle: 'Primavera, verano, otoño e invierno', seasonIntro: 'Cada estación cambia el equilibrio entre calor, lluvia, luz y organización del día. Las notas describen tendencias, nunca garantías.', seasonPlanningLabel: 'Cómo prepararse',
    seasons: [
      { period: 'Marzo – mayo', title: 'Primavera', planning: 'Llevad capas y una opción para la lluvia; el tiempo aún puede variar durante varios días.' },
      { period: 'Junio – agosto', title: 'Verano', planning: 'Evitad los recorridos expuestos al mediodía y llevad agua, sombra y protección solar.' },
      { period: 'Septiembre – noviembre', title: 'Otoño', planning: 'Distinguid el inicio del final del otoño y consultad la previsión cercana cuando aumente la lluvia.' },
      { period: 'Diciembre – febrero', title: 'Invierno', planning: 'Preparad capas para tardes frescas y tiempo cambiante, aunque el mediodía resulte suave.' }
    ],
    bestEyebrow: 'Mejor época según el plan', bestTitle: 'La época que mejor encaja con vuestro viaje', bestIntro: 'Cada estación aporta sus propias ventajas. Elegid las fechas según los días que queréis disfrutar y ajustad después los detalles con la previsión.', intentTitles: ['Playa y tardes largas', 'Caminar y explorar', 'Un ritmo más tranquilo', 'Una estancia larga en invierno'],
    practicalEyebrow: 'Plan diario y equipaje', practicalTitle: 'Convertir el patrón climático en un buen día', practicalIntro: 'Un plan útil admite que mediodía, tarde y un cambio de tiempo se sientan distintos. El clima ayuda con la maleta; la previsión decide mañana.', packTitle: 'Equipaje flexible', packItems: ['Protección solar, botella de agua y sombrero', 'Capas ligeras para viento, sombra o tarde', 'Calzado cómodo adaptado al terreno local', 'Una capa compacta para la lluvia fuera de los meses más secos'],
    forecastEyebrow: 'Tiempo actual', forecastTitle: 'Para las fechas reales, consultad AEMET', forecastParagraphs: ['Esta página explica el clima a largo plazo: el patrón con el que se planifica un viaje.', 'Para vuestras fechas concretas, usad la predicción municipal y los avisos de AEMET. Se refieren al núcleo principal, así que una playa, una ladera o una calle protegida pueden variar.'], forecastCta: 'Abrir la previsión oficial de AEMET',
    sourcesEyebrow: 'Fuentes', sourcesTitle: 'De dónde salen estas cifras', sourcesIntro: 'Las medias a largo plazo vienen de una fuente y la previsión diaria de otra. Aquí están las dos.', sourcesChecked: 'Fuentes revisadas en agosto de 2026', modelSourceText: 'Base mensual de temperatura, lluvia y sol.', forecastSourceText: 'Predicción municipal oficial y referencia para avisos meteorológicos.',
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
      labels: { month: 'Maand', high: 'Gem. maximum', low: 'Gem. minimum', rain: 'Neerslag', sunHours: 'Zon / dag', temperature: 'Gemiddeld maximum / minimum', rainfall: 'Maandneerslag', details: 'Maandwaarden in detail' },
      sourceTitle: 'Zo lezen jullie de gegevens', sourceText: 'De puntmodelwaarden van Climate-Data.org vormen een transparante planningsbasis. De aanbieder geeft Nerja en Frigiliana momenteel dezelfde waarden, dus lees ze als één regionaal beeld en niet als twee aparte lokale klimaten.'
    },
    seasonEyebrow: 'Het jaar in vier delen', seasonTitle: 'Lente, zomer, herfst en winter', seasonIntro: 'Elk seizoen verandert de balans tussen warmte, regen, daglicht en een praktische dagindeling. De notities beschrijven tendensen, geen garanties.', seasonPlanningLabel: 'Houd rekening met',
    seasons: [
      { period: 'Maart – mei', title: 'Lente', planning: 'Neem laagjes en een regenoptie mee; het weer kan tijdens meerdere dagen nog wisselen.' },
      { period: 'Juni – augustus', title: 'Zomer', planning: 'Plan open routes buiten de middagwarmte en neem water, schaduw en zonbescherming serieus.' },
      { period: 'September – november', title: 'Herfst', planning: 'Maak onderscheid tussen vroege en late herfst en gebruik de korte verwachting als regen waarschijnlijker wordt.' },
      { period: 'December – februari', title: 'Winter', planning: 'Pak voor koelere avonden en wisselvallig weer, ook wanneer de middag zacht aanvoelt.' }
    ],
    bestEyebrow: 'Beste reistijd per bedoeling', bestTitle: 'De reistijd die bij jullie verblijf past', bestIntro: 'Elk seizoen heeft zijn eigen voordelen. Kies de data voor de dagen waarvan jullie willen genieten en stem de details daarna af op de verwachting.', intentTitles: ['Strand en lange avonden', 'Wandelen en ontdekken', 'Een rustiger ritme', 'Een langer winterverblijf'],
    practicalEyebrow: 'Dagplanning en bagage', practicalTitle: 'Maak van het klimaatpatroon een werkbare dag', practicalIntro: 'Een goed plan laat toe dat middag, avond en een weersomslag anders aanvoelen. Het klimaat helpt bij de koffer; de verwachting bepaalt morgen.', packTitle: 'Flexibel inpakken', packItems: ['Zonbescherming, waterfles en hoofddeksel', 'Lichte laagjes voor wind, schaduw of avond', 'Comfortabele schoenen passend bij het terrein', 'Buiten de droogste maanden een compacte regenlaag'],
    forecastEyebrow: 'Actueel weer', forecastTitle: 'Gebruik AEMET voor de echte reisdata', forecastParagraphs: ['Deze pagina legt het langjarige klimaat uit — het patroon waarop je een reis plant.', 'Gebruik voor jullie eigen data de gemeentelijke verwachting en waarschuwingen van AEMET. Die gelden voor de hoofdplaats, dus een strand, een helling of een beschutte straat kan afwijken.'], forecastCta: 'Open de officiële AEMET-verwachting',
    sourcesEyebrow: 'Bronnen', sourcesTitle: 'Waar deze cijfers vandaan komen', sourcesIntro: 'De langjarige gemiddelden komen uit de ene bron, de dagverwachting uit de andere. Beide staan hier.', sourcesChecked: 'Bronnen gecontroleerd in augustus 2026', modelSourceText: 'Maandelijkse basis voor temperatuur, neerslag en zon.', forecastSourceText: 'Officiële gemeentelijke verwachting en referentie voor weerwaarschuwingen.',
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
      labels: { month: 'Månad', high: 'Medelmaximum', low: 'Medelminimum', rain: 'Nederbörd', sunHours: 'Sol / dag', temperature: 'Medelmaximum / minimum', rainfall: 'Månadsnederbörd', details: 'Månadsvärden i detalj' },
      sourceTitle: 'Så läser ni uppgifterna', sourceText: 'Punktmodellvärden från Climate-Data.org är en tydlig planeringsgrund. Leverantören ger just nu samma värden för Nerja och Frigiliana, så läs dem som en regional bild och inte som två skilda lokalklimat.'
    },
    seasonEyebrow: 'Året i fyra delar', seasonTitle: 'Vår, sommar, höst och vinter', seasonIntro: 'Varje årstid ändrar balansen mellan värme, regn, dagsljus och praktisk dagsplanering. Råden beskriver tendenser, aldrig garantier.', seasonPlanningLabel: 'Planera för',
    seasons: [
      { period: 'Mars – maj', title: 'Vår', planning: 'Ta med lager och ett regnalternativ; vädret kan fortfarande växla under flera dagar.' },
      { period: 'Juni – augusti', title: 'Sommar', planning: 'Flytta exponerade promenader från middagen och prioritera vatten, skugga och solskydd.' },
      { period: 'September – november', title: 'Höst', planning: 'Skilj på tidig och sen höst och följ närprognosen när regn blir mer sannolikt.' },
      { period: 'December – februari', title: 'Vinter', planning: 'Packa för svalare kvällar och skiftande väder även när eftermiddagen känns mild.' }
    ],
    bestEyebrow: 'Bästa restid efter avsikt', bestTitle: 'Restiden som passar er vistelse', bestIntro: 'Varje årstid har sina egna fördelar. Välj datum efter dagarna ni vill njuta av och anpassa sedan detaljerna efter prognosen.', intentTitles: ['Strand och långa kvällar', 'Promenader och upptäckter', 'Lugnare rytm', 'Längre vintervistelse'],
    practicalEyebrow: 'Dagsplanering och packning', practicalTitle: 'Gör klimatmönstret till en fungerande dag', practicalIntro: 'En bra plan tillåter att middag, kväll och ett väderomslag känns olika. Klimatet hjälper med väskan; prognosen bestämmer morgondagen.', packTitle: 'Packa flexibelt', packItems: ['Solskydd, vattenflaska och huvudbonad', 'Lätta lager för vind, skugga eller kväll', 'Bekväma skor anpassade till terrängen', 'Ett kompakt regnlager utanför de torraste månaderna'],
    forecastEyebrow: 'Aktuellt väder', forecastTitle: 'Använd AEMET för de verkliga resedatumen', forecastParagraphs: ['Sidan förklarar det långsiktiga klimatet – mönstret man planerar en resa efter.', 'För era egna datum använder ni AEMETs kommunprognos och varningar. De gäller huvudorten, så en strand, en sluttning eller en skyddad gata kan skilja sig.'], forecastCta: 'Öppna AEMETs officiella prognos',
    sourcesEyebrow: 'Källor', sourcesTitle: 'Varifrån siffrorna kommer', sourcesIntro: 'De långsiktiga medelvärdena kommer från en källa, dygnsprognosen från en annan. Båda finns här.', sourcesChecked: 'Källor granskade i augusti 2026', modelSourceText: 'Månatliga basvärden för temperatur, nederbörd och sol.', forecastSourceText: 'Officiell kommunprognos och referens för vädervarningar.',
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
      summary: 'Frigiliana combines a hot, very dry summer pattern with a hillside village where sun, shade, slope and time of day matter to comfort. Spring and autumn often make longer walks easier; summer rewards early starts and slower middays; winter brings more variable weather and cooler evenings. Use the monthly table to compare seasons, then check AEMET for the actual forecast before deciding on exposed paths, terrace time and what to carry.',
      summaryItems: [{ label: 'Local lens', value: 'Hillside · sun · shade' }, { label: 'Best for', value: 'Choose by activity' }, { label: 'Daily check', value: 'AEMET forecast' }],
      factorsTitle: 'A hillside village changes how the same day feels', factors: ['Frigiliana sits above the coast on sloping terrain. Elevation, exposure and shade provide useful planning context, but they do not prove an exact temperature difference from Nerja.', 'The durable pattern is Mediterranean: the warmest part of the year is markedly drier, while rain is more likely in the cooler half.'],
      factorItems: [{ title: 'Slope and exposure', text: 'An open uphill route can feel very different from a shaded lane at the same hour.' }, { title: 'Day and evening', text: 'Strong sun can dominate the day; after sunset, a light layer may still be useful depending on season and wind.' }, { title: 'Village and coast', text: 'Village and coast feel different in ways no monthly average captures — height, shade and exposure do the rest.' }],
      seasonNotes: ['Greener surroundings, changing weather and increasingly useful daylight for longer routes.', 'Dry, bright and potentially hot; early and late hours matter most on steep or exposed paths.', 'Early autumn can retain summer warmth before rain becomes more likely later in the season.', 'Quieter village days, more variable conditions and cooler evenings that reward flexible plans.'],
      intentNotes: ['July and August bring long, bright days. We enjoy the village and its paths in the morning, a proper siesta in the shade at midday, and plenty of time for the beach, a terrace or an evening walk later on.', 'Spring and autumn combine softer temperatures with generous daylight — a lovely balance for exploring the village streets and Frigiliana’s four curated hiking routes.', 'In January, the quieter village rhythm carries through the day. There is time for the old town, cafés and viewpoints at an unhurried pace.', 'A longer winter stay gives you time to settle into Frigiliana, enjoy its everyday rhythm and make the accommodation part of the experience.'],
      practical: 'In summer, separate the exposed walking hours from lunch and rest. Outside summer, combine light layers with a rain option. Footwear matters year-round because the physical effort of the village can matter as much as the air temperature.'
    },
    de: {
      description: 'Wetter in Frigiliana nach Monaten: Klima, Jahreszeiten und beste Reisezeit für Dorfwege, Ausflüge und einen flexiblen Aufenthalt oberhalb von Nerja.',
      lead: 'Ordnet Frigilianas langfristiges Klima ein, bevor ihr Reisedaten wählt, steile Dorfwege plant oder für den Wechsel zwischen offener Sonne und schattigen Gassen packt.',
      summary: 'Frigiliana verbindet ein heißes, sehr trockenes Sommermuster mit einem Hangort, in dem Sonne, Schatten, Steigung und Tageszeit den Komfort prägen. Frühling und Herbst erleichtern häufig längere Wege; im Sommer lohnen frühe Starts und ruhige Mittagsstunden; der Winter bringt wechselhafteres Wetter und kühlere Abende. Vergleicht mit der Monatstabelle die Jahreszeiten und prüft anschließend AEMET, bevor ihr offene Wege, Terrassenzeit und das Tagesgepäck festlegt.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Hang · Sonne · Schatten' }, { label: 'Reisezeit', value: 'Nach Aktivität wählen' }, { label: 'Tagescheck', value: 'AEMET-Vorhersage' }],
      factorsTitle: 'Am Hang kann sich derselbe Tag unterschiedlich anfühlen', factors: ['Frigiliana liegt oberhalb der Küste in geneigtem Gelände. Höhenlage, Exposition und Schatten sind wichtige Planungshinweise, belegen aber keine exakte Temperaturdifferenz zu Nerja.', 'Das belastbare Grundmuster ist mediterran: Die warme Jahreshälfte ist deutlich trockener, Regen in der kühleren Hälfte wahrscheinlicher.'],
      factorItems: [{ title: 'Steigung und Exposition', text: 'Ein offener Anstieg kann sich zur selben Stunde ganz anders anfühlen als eine schattige Gasse.' }, { title: 'Tag und Abend', text: 'Tagsüber kann starke Sonne dominieren; nach Sonnenuntergang hängt eine zusätzliche Schicht von Saison und Wind ab.' }, { title: 'Dorf und Küste', text: 'Dorf und Küste fühlen sich unterschiedlich an, ohne dass ein Monatsmittel das abbildet – Höhe, Schatten und Exposition machen den Rest.' }],
      seasonNotes: ['Grünere Umgebung, wechselndes Wetter und mehr nutzbares Tageslicht für längere Wege.', 'Trocken, hell und potenziell heiß; auf steilen oder offenen Wegen zählen die frühen und späten Stunden.', 'Der frühe Herbst kann sommerlich bleiben, bevor Regen im weiteren Verlauf wahrscheinlicher wird.', 'Ruhigere Dorftage, wechselhaftere Bedingungen und kühlere Abende verlangen Flexibilität.'],
      intentNotes: ['Juli und August schenken lange, helle Tage. Wir genießen Dorf und Wege am Vormittag, eine ausgiebige Siesta im Schatten und später viel Zeit für Strand, Terrasse oder einen Spaziergang am Abend.', 'Frühling und Herbst verbinden mildere Temperaturen mit viel Tageslicht – eine besonders schöne Balance für Frigilianas Gassen und die vier von uns ausgewählten Wanderrouten.', 'Im Januar trägt der ruhigere Dorfrhythmus durch den ganzen Tag. So bleibt viel Zeit für Altstadt, Cafés und Aussichtspunkte in einem entspannten Tempo.', 'Ein längerer Winteraufenthalt schenkt euch Zeit, in Frigiliana anzukommen, den örtlichen Alltag zu genießen und die Unterkunft zum Teil des Erlebnisses zu machen.'],
      practical: 'Im Sommer trennt ihr offene Gehzeiten von Mittagspause und Erholung. Außerhalb des Sommers gehören leichte Schichten und eine Regenoption zusammen. Gute Schuhe sind ganzjährig wichtig, weil die körperliche Anstrengung im Ort ebenso zählen kann wie die Lufttemperatur.'
    },
    es: {
      description: 'Tiempo en Frigiliana mes a mes: clima, estaciones y mejor época para caminar, vivir el pueblo y alojarse con flexibilidad sobre Nerja.',
      lead: 'Entended el clima de Frigiliana antes de elegir fechas, organizar las cuestas del pueblo o preparar la maleta para alternar sol abierto y calles con sombra.',
      summary: 'Frigiliana combina un verano caluroso y muy seco con un pueblo en ladera donde el sol, la sombra, la pendiente y la hora cambian el confort. Primavera y otoño suelen facilitar los recorridos largos; el verano pide empezar temprano y bajar el ritmo al mediodía; el invierno trae más variabilidad y tardes frescas. Usad la tabla mensual para comparar estaciones y consultad después AEMET antes de decidir rutas expuestas, terrazas y qué llevar durante el día.',
      summaryItems: [{ label: 'Clave local', value: 'Ladera · sol · sombra' }, { label: 'Mejor época', value: 'Según la actividad' }, { label: 'Consulta diaria', value: 'Previsión AEMET' }],
      factorsTitle: 'En una ladera, el mismo día puede sentirse distinto', factors: ['Frigiliana está sobre la costa y en terreno inclinado. Altitud, exposición y sombra orientan la planificación, pero no demuestran una diferencia térmica exacta con Nerja.', 'El patrón duradero es mediterráneo: la parte cálida es mucho más seca y la lluvia resulta más probable en la mitad fresca.'],
      factorItems: [{ title: 'Pendiente y exposición', text: 'Una subida al sol puede sentirse muy distinta de una calle con sombra a la misma hora.' }, { title: 'Día y tarde', text: 'El sol puede dominar el día; tras la puesta, una capa ligera depende de la estación y del viento.' }, { title: 'Pueblo y costa', text: 'El pueblo y la costa se sienten distintos de un modo que ninguna media mensual recoge: la altura, la sombra y la exposición hacen el resto.' }],
      seasonNotes: ['Entorno más verde, tiempo cambiante y más luz útil para recorridos largos.', 'Seco, luminoso y potencialmente caluroso; importan las primeras y últimas horas.', 'El inicio puede conservar el verano antes de que la lluvia gane probabilidad.', 'Pueblo más tranquilo, condiciones variables y tardes frescas que exigen flexibilidad.'],
      intentNotes: ['Julio y agosto traen días largos y luminosos. Disfrutamos del pueblo y sus caminos por la mañana, una buena siesta a la sombra al mediodía y después mucho tiempo para la playa, una terraza o un paseo al atardecer.', 'Primavera y otoño combinan temperaturas suaves con muchas horas de luz: un equilibrio estupendo para recorrer las calles del pueblo y las cuatro rutas de senderismo que hemos seleccionado.', 'En enero, el ritmo más tranquilo del pueblo acompaña todo el día. Hay tiempo para disfrutar del casco antiguo, los cafés y los miradores sin prisas.', 'Una estancia larga en invierno permite instalarse con calma en Frigiliana, disfrutar de su vida cotidiana y convertir el alojamiento en parte de la experiencia.'],
      practical: 'En verano separad las caminatas expuestas del mediodía y el descanso. Fuera del verano combinad capas ligeras con una opción para la lluvia. El calzado importa todo el año porque el esfuerzo de las cuestas puede pesar tanto como la temperatura.'
    },
    nl: {
      description: 'Weer in Frigiliana per maand: klimaat, seizoenen en beste reistijd voor dorpsroutes, uitstapjes en een flexibel verblijf boven Nerja.',
      lead: 'Begrijp het klimaat van Frigiliana voordat jullie data kiezen, steile dorpsroutes plannen of inpakken voor het verschil tussen open zon en schaduwrijke straten.',
      summary: 'Frigiliana combineert een heet, zeer droog zomerpatroon met een hellingdorp waar zon, schaduw, stijging en tijdstip het comfort bepalen. Lente en herfst maken langere routes vaak eenvoudiger; in de zomer helpen vroege starts en rustige middaguren; de winter brengt wisselvalliger weer en koelere avonden. Gebruik de maandtabel om seizoenen te vergelijken en bekijk daarna AEMET voordat jullie open routes, terrastijd en de inhoud van jullie dagtas vastleggen.',
      summaryItems: [{ label: 'Lokale lens', value: 'Helling · zon · schaduw' }, { label: 'Reistijd', value: 'Kies per activiteit' }, { label: 'Dagcheck', value: 'AEMET-verwachting' }],
      factorsTitle: 'Op de helling kan dezelfde dag anders voelen', factors: ['Frigiliana ligt boven de kust op hellend terrein. Hoogte, blootstelling en schaduw helpen bij de planning, maar bewijzen geen exact temperatuurverschil met Nerja.', 'Het blijvende patroon is mediterraan: het warme deel van het jaar is veel droger en regen waarschijnlijker in de koelere helft.'],
      factorItems: [{ title: 'Stijging en blootstelling', text: 'Een open klim kan op hetzelfde uur heel anders voelen dan een steeg in de schaduw.' }, { title: 'Dag en avond', text: 'Sterke zon kan de dag bepalen; na zonsondergang hangt een extra laag af van seizoen en wind.' }, { title: 'Dorp en kust', text: 'Dorp en kust voelen anders dan een maandgemiddelde laat zien — hoogte, schaduw en blootstelling doen de rest.' }],
      seasonNotes: ['Groenere omgeving, wisselend weer en meer bruikbaar daglicht voor langere routes.', 'Droog, helder en mogelijk heet; vroege en late uren tellen op steile of open paden.', 'Vroege herfst kan zomers blijven voordat regen later waarschijnlijker wordt.', 'Rustiger dorpsleven, wisselende omstandigheden en koelere avonden vragen flexibiliteit.'],
      intentNotes: ['Juli en augustus brengen lange, lichte dagen. Wij genieten ’s ochtends van het dorp en de paden, nemen rond de middag een uitgebreide siesta in de schaduw en hebben later alle tijd voor het strand, een terras of een avondwandeling.', 'Lente en herfst combineren mildere temperaturen met veel daglicht — een heerlijke balans voor de dorpsstraten en de vier door ons geselecteerde wandelroutes.', 'In januari draagt het rustigere dorpsritme de hele dag. Er is alle tijd voor de oude stad, cafés en uitzichtpunten in een ontspannen tempo.', 'Een langer winterverblijf geeft jullie tijd om echt in Frigiliana aan te komen, van het dagelijkse ritme te genieten en de accommodatie deel van de ervaring te maken.'],
      practical: 'Scheid in de zomer open wandeluren van lunch en rust. Combineer buiten de zomer lichte lagen met een regenoptie. Goede schoenen zijn het hele jaar belangrijk omdat de inspanning van het dorp even relevant kan zijn als de temperatuur.'
    },
    sv: {
      description: 'Väder i Frigiliana månad för månad: klimat, årstider och bästa restid för bypromenader, utflykter och en flexibel vistelse ovanför Nerja.',
      lead: 'Förstå Frigilianas klimat innan ni väljer datum, planerar branta bygator eller packar för skillnaden mellan öppen sol och skuggiga gränder.',
      summary: 'Frigiliana förenar ett hett, mycket torrt sommarmönster med en sluttande by där sol, skugga, lutning och tid på dagen påverkar komforten. Vår och höst gör ofta längre stråk lättare; sommaren belönar tidiga starter och lugna middagstimmar; vintern ger mer omväxlande väder och svalare kvällar. Använd månadstabellen för att jämföra årstider och kontrollera sedan AEMET innan ni bestämmer exponerade vägar, terrassplaner och vad som ska följa med under dagen.',
      summaryItems: [{ label: 'Lokalt fokus', value: 'Sluttning · sol · skugga' }, { label: 'Restid', value: 'Välj efter aktivitet' }, { label: 'Dagskontroll', value: 'AEMET-prognos' }],
      factorsTitle: 'I en sluttning kan samma dag kännas olika', factors: ['Frigiliana ligger ovanför kusten i lutande terräng. Höjd, exponering och skugga hjälper planeringen men bevisar ingen exakt temperaturskillnad mot Nerja.', 'Det hållbara mönstret är medelhavsklimat: den varma delen är mycket torrare och regn mer sannolikt under den svalare halvan.'],
      factorItems: [{ title: 'Lutning och exponering', text: 'En öppen uppförsväg kan kännas helt annorlunda än en skuggig gränd samma timme.' }, { title: 'Dag och kväll', text: 'Stark sol kan dominera dagen; efter solnedgång beror ett extra lager på säsong och vind.' }, { title: 'By och kust', text: 'By och kust känns olika på sätt som inget månadsmedel fångar – höjd, skugga och exponering gör resten.' }],
      seasonNotes: ['Grönare omgivning, växlande väder och mer användbart dagsljus för längre stråk.', 'Torrt, ljust och potentiellt hett; tidiga och sena timmar är viktigast på öppna vägar.', 'Tidig höst kan behålla sommarkänslan innan regn blir mer sannolikt.', 'Lugnare bydagar, skiftande förhållanden och svalare kvällar kräver flexibilitet.'],
      intentNotes: ['Juli och augusti bjuder på långa, ljusa dagar. Vi njuter av byn och stigarna på förmiddagen, tar en ordentlig siesta i skuggan mitt på dagen och får sedan gott om tid för stranden, en terrass eller en kvällspromenad.', 'Vår och höst förenar mildare temperaturer med mycket dagsljus — en härlig balans för bygatorna och de fyra vandringsleder som vi har valt ut.', 'I januari bär byns lugnare rytm genom hela dagen. Det finns gott om tid för gamla stan, kaféer och utsiktsplatser i ett avslappnat tempo.', 'En längre vintervistelse ger er tid att landa i Frigiliana, njuta av vardagsrytmen och låta boendet bli en del av upplevelsen.'],
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
      factorItems: [{ title: 'Sea influence', text: 'Water changes temperature more slowly than air, so spring warmth does not automatically mean warm swimming water.' }, { title: 'Coastal exposure', text: 'Sun, breeze and shelter can change comfort between a beach, terrace and inland street.' }, { title: 'No Frigiliana shortcut', text: 'The point model returns the same values for coast and hillside, so treat any difference between them as local knowledge rather than data.' }],
      seasonNotes: ['Comfortable walking days can arrive before the sea feels summery.', 'Dry, bright beach weather is common; heat, sun exposure and warm nights still shape the plan.', 'Early autumn may retain useful sea warmth while the town gradually becomes quieter.', 'Milder coastal days alternate with a greater chance of rain and cooler evenings.'],
      intentNotes: ['Long, bright summer days make it easy to pair a morning swim with a slow lunch and an evening by the sea. Choose the beach after checking heat, UV and current sea conditions.', 'Spring and autumn often bring gentler midday heat for the Balcón, old-town streets and coastal paths, leaving space to explore together without rushing.', 'Outside peak summer, calmer streets and beaches make room for unhurried coffee, a seafront walk and spontaneous plans when the forecast shifts.', 'A longer winter stay lets you settle into Nerja’s everyday rhythm. Home comfort and flexibility matter most, with mild coastal days enjoyed as they arrive.'],
      practical: 'For beach days, check air temperature, wind and sea state separately. Plan exposed promenades outside the strongest summer sun, keep one light layer for the evening and avoid using a seasonal average as a decision about tomorrow’s swim.'
    },
    de: {
      description: 'Wetter in Nerja nach Monaten: Küstenklima, Jahreszeiten, Meereseinfluss und beste Reisezeit für Strand, Wege und einen flexiblen Aufenthalt.',
      lead: 'Plant Nerja mit Küstenklima, saisonaler Regenverteilung und dem Unterschied zwischen Luft, Meer und den aktuellen Bedingungen am Strand.',
      summary: 'In Nerja gehört das Meer zur Klimageschichte, ohne dass daraus eine Badegarantie wird. Die Sommer sind typischerweise trocken und hell; in der kühleren Jahreshälfte steigt die Regenwahrscheinlichkeit. Das Meer reagiert langsamer als die Luft, deshalb beantworten ein warmer Nachmittag und angenehme Wassertemperatur zwei verschiedene Fragen. Nutzt die Monatstabelle für den großen Rhythmus, wählt eure Reisezeit nach Strand, Spaziergängen oder ruhigeren Straßen und prüft vor jedem festen Tagesplan das aktuelle Wetter sowie die Meeresbedingungen.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Küste · Meereseinfluss' }, { label: 'Reisezeit', value: 'Strand- oder Ortsrhythmus' }, { label: 'Tagescheck', value: 'Wetter + Meereslage' }],
      factorsTitle: 'Die Küste verbindet Luft, Meer und Saison – aber setzt sie nicht gleich', factors: ['Nerjas Küste gibt der Seite ihren maritimen Schwerpunkt. Lufttemperatur, Wassertemperatur und Meereszustand sind verschiedene Variablen und werden getrennt betrachtet.', 'Langfristig ist der Sommer trocken, die kühlere Jahreshälfte wechselhafter. Einzelne Regenereignisse lassen sich aus Monatsmitteln nicht terminieren.'],
      factorItems: [{ title: 'Meereseinfluss', text: 'Wasser ändert seine Temperatur langsamer als Luft; Frühlingswärme bedeutet deshalb nicht automatisch warmes Badewasser.' }, { title: 'Exposition an der Küste', text: 'Sonne, Brise und Schutz können den Komfort zwischen Strand, Terrasse und Straße verändern.' }, { title: 'Keine Frigiliana-Abkürzung', text: 'Das Punktmodell liefert für Küste und Hang dieselben Werte – Unterschiede dazwischen sind Ortskenntnis, keine Messgröße.' }],
      seasonNotes: ['Angenehme Tage für Wege können beginnen, bevor sich das Meer sommerlich anfühlt.', 'Trockenes, helles Strandwetter ist häufig; Hitze, Sonne und warme Nächte prägen dennoch den Plan.', 'Der frühe Herbst kann nutzbare Meereswärme bewahren, während der Ort langsam ruhiger wird.', 'Milde Küstentage wechseln mit höherer Regenchance und kühleren Abenden.'],
      intentNotes: ['Lange, helle Sommertage verbinden ein morgendliches Bad ganz leicht mit einem ruhigen Lunch und einem Abend am Meer. Wählt den Strand nach Hitze, UV-Wert und aktueller Meereslage.', 'Frühling und Herbst bringen oft mildere Mittagsstunden für Balcón, Altstadtgassen und Küstenwege – so bleibt Zeit, Nerja gemeinsam und ohne Eile zu entdecken.', 'Außerhalb des Hochsommers schaffen ruhigere Straßen und Strände Raum für einen Kaffee, einen Spaziergang am Meer und spontane Pläne, wenn die Vorhersage wechselt.', 'Bei einem längeren Winteraufenthalt findet ihr in Nerjas Alltagsrhythmus. Wohnkomfort und Flexibilität zählen, während ihr die milden Küstentage nutzt, sobald sie sich zeigen.'],
      practical: 'Für Strandtage prüft ihr Lufttemperatur, Wind und Meereszustand getrennt. Legt offene Promenaden außerhalb der stärksten Sommersonne, nehmt eine leichte Abendschicht mit und macht aus einem Saisonmittel keine Entscheidung über das Baden morgen.'
    },
    es: {
      description: 'Tiempo en Nerja mes a mes: clima costero, estaciones, influencia del mar y mejor época para playa, paseos y una estancia flexible.',
      lead: 'Planificad Nerja según su clima costero, la lluvia estacional y la diferencia entre aire, mar y condiciones reales de cada playa.',
      summary: 'En Nerja, el mar forma parte del clima sin convertirse en una garantía de baño. Los veranos suelen ser secos y luminosos, mientras la lluvia gana probabilidad en la mitad fresca del año. El agua cambia más lentamente que el aire, por lo que una tarde cálida y una temperatura agradable del mar son preguntas distintas. Usad la tabla mensual para entender el ritmo general, elegid fechas según playa, paseos o calles tranquilas y consultad el tiempo y el estado actual del mar antes de cerrar cada jornada.',
      summaryItems: [{ label: 'Clave local', value: 'Costa · influencia marina' }, { label: 'Mejor época', value: 'Playa o ritmo urbano' }, { label: 'Consulta diaria', value: 'Tiempo + estado del mar' }],
      factorsTitle: 'La costa conecta aire, mar y estación, sin confundirlos', factors: ['La costa de Nerja aporta el enfoque marítimo. Temperatura del aire, temperatura del agua y estado del mar son variables diferentes.', 'El verano es seco a largo plazo y la mitad fresca más variable. Las medias mensuales no permiten fechar un episodio de lluvia.'],
      factorItems: [{ title: 'Influencia marina', text: 'El agua cambia más despacio que el aire; el calor primaveral no implica agua cálida.' }, { title: 'Exposición costera', text: 'Sol, brisa y abrigo modifican el confort entre playa, terraza y calle.' }, { title: 'Sin atajos con Frigiliana', text: 'El modelo puntual da los mismos valores para la costa y la ladera: las diferencias entre ambas son conocimiento local, no dato medido.' }],
      seasonNotes: ['Los días cómodos para caminar pueden llegar antes de que el mar parezca veraniego.', 'Tiempo de playa seco y luminoso, con calor, sol y noches templadas en la planificación.', 'El inicio puede conservar calor en el mar mientras el pueblo recupera calma.', 'Días costeros suaves alternan con mayor probabilidad de lluvia y tardes frescas.'],
      intentNotes: ['Los días largos y luminosos del verano permiten unir un baño por la mañana, un almuerzo tranquilo y una tarde junto al mar. Elegid la playa tras consultar calor, UV y estado actual del mar.', 'Primavera y otoño suelen suavizar el mediodía para recorrer el Balcón, las calles del casco antiguo y los caminos costeros juntos y sin prisas.', 'Fuera del verano punta, las calles y playas más tranquilas dejan espacio para un café, un paseo marítimo y planes espontáneos cuando cambia la previsión.', 'Una estancia larga en invierno permite entrar en el ritmo cotidiano de Nerja. El confort de la vivienda y la flexibilidad ayudan a disfrutar los días suaves de costa cuando llegan.'],
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
      intentNotes: ['Lange, lichte zomerdagen verbinden een ochtendduik vanzelf met een rustige lunch en een avond aan zee. Kies het strand nadat jullie hitte, UV en actuele zeecondities hebben bekeken.', 'Lente en herfst brengen vaak zachtere middagwarmte voor het Balcón, de oude straten en kustroutes, zodat jullie samen zonder haast op pad kunnen.', 'Buiten hoogzomer geven rustigere straten en stranden ruimte voor koffie, een wandeling langs zee en spontane plannen wanneer de verwachting verandert.', 'Tijdens een langer winterverblijf komen jullie in het dagelijkse ritme van Nerja. Wooncomfort en flexibiliteit tellen, terwijl zachte kustdagen worden benut zodra ze zich aandienen.'],
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
      intentNotes: ['Långa, ljusa sommardagar gör det enkelt att förena ett morgondopp med en lugn lunch och en kväll vid havet. Välj strand efter aktuell hetta, UV-nivå och havsläge.', 'Vår och höst ger ofta mildare middagsvärme för Balcón, gamla stans gränder och kuststråk, så att ni kan upptäcka Nerja tillsammans utan brådska.', 'Utanför högsommaren ger lugnare gator och stränder utrymme för kaffe, en promenad längs havet och spontana planer när prognosen skiftar.', 'En längre vintervistelse låter er komma in i Nerjas vardagsrytm. Boendekomfort och flexibilitet är viktigast, medan milda kustdagar tas till vara när de kommer.'],
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
      intentNotes: ['Summer’s dry, bright rhythm gives you long hours between beach and town. Check the current wind first, then choose the shore whose shelter suits the day.', 'Spring and autumn invite days that move between old town, coast and landscape. Keeping those options interchangeable turns changing wind into a choice rather than a disruption.', 'Outside peak summer, Tarifa’s quieter streets leave room for a slow lunch, a walk by the walls and an evening together; let the forecast decide which comes first.', 'A longer winter stay brings everyday Tarifa into view. The dedicated guide helps you choose home comfort and routines while flexible days follow fronts and clearer intervals.'],
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
      intentNotes: ['Der trockene, helle Sommerrhythmus schenkt euch lange Stunden zwischen Strand und Ort. Prüft zuerst den aktuellen Wind und wählt dann den Küstenabschnitt, dessen Schutz zum Tag passt.', 'Frühling und Herbst laden zu Tagen zwischen Altstadt, Küste und Landschaft ein. Wenn diese Optionen austauschbar bleiben, wird wechselnder Wind zur Wahl statt zur Störung.', 'Außerhalb des Hochsommers lassen Tarifas ruhigere Gassen Raum für einen langen Lunch, einen Weg an der Mauer und einen gemeinsamen Abend; die Vorhersage bestimmt nur die Reihenfolge.', 'Ein längerer Winteraufenthalt zeigt euch Tarifas Alltag. Der eigene Guide hilft bei Wohnkomfort und Routinen, während flexible Tage den Fronten und helleren Phasen folgen.'],
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
      intentNotes: ['El ritmo seco y luminoso del verano ofrece muchas horas entre playa y pueblo. Consultad primero el viento actual y elegid después la costa cuyo abrigo encaje con el día.', 'Primavera y otoño invitan a pasar del casco antiguo a la costa y al paisaje. Mantener esas opciones intercambiables convierte el cambio de viento en una elección, no en una interrupción.', 'Fuera del verano punta, las calles tranquilas de Tarifa dejan espacio para un almuerzo largo, un paseo junto a la muralla y una tarde juntos; la previsión solo decide el orden.', 'Una estancia larga en invierno descubre la Tarifa cotidiana. La guía específica ayuda con el confort de la vivienda y las rutinas mientras los días flexibles siguen los frentes y los claros.'],
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
      intentNotes: ['Het droge, lichte zomerritme geeft jullie lange uren tussen strand en stad. Bekijk eerst de actuele wind en kies daarna de kust waarvan de beschutting bij de dag past.', 'Lente en herfst nodigen uit tot dagen tussen oude stad, kust en landschap. Als die opties uitwisselbaar blijven, wordt veranderende wind een keuze in plaats van een onderbreking.', 'Buiten hoogzomer laten Tarifas rustigere straten ruimte voor een lange lunch, een wandeling langs de muren en een avond samen; de verwachting bepaalt alleen de volgorde.', 'Een langer winterverblijf brengt het dagelijkse Tarifa in beeld. De aparte gids helpt met wooncomfort en routines, terwijl flexibele dagen fronten en heldere perioden volgen.'],
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
      intentNotes: ['Sommarens torra, ljusa rytm ger er långa timmar mellan strand och stad. Kontrollera dagens vind först och välj sedan den kuststräcka vars skydd passar dagen.', 'Vår och höst bjuder in till dagar mellan gamla stan, kusten och landskapet. När alternativen kan byta plats blir växlande vind ett val i stället för ett avbrott.', 'Utanför högsommaren ger Tarifas lugnare gator utrymme för en lång lunch, en promenad längs murarna och en kväll tillsammans; prognosen avgör bara ordningen.', 'En längre vintervistelse visar vardagens Tarifa. Den särskilda guiden hjälper er med boendekomfort och rutiner medan flexibla dagar följer fronter och klarare perioder.'],
      practical: 'I Tarifa är temperaturen bara en planeringsfaktor. Kontrollera vindriktning och styrka före en öppen strand, använd solskydd även när luften känns sval och behåll ett alternativ i staden eller inlandet.'
    }
  }
};

const relatedTokens: Record<WeatherDestination, [LinkToken, LinkToken, LinkToken]> = {
  frigiliana: ['frigiliana_geography', 'frigiliana_stairs', 'frigiliana_winter_stays'],
  nerja: ['nerja_geography', 'nerja_where_to_stay', 'nerja_winter_stays'],
  tarifa: ['tarifa_geography', 'tarifa_where_to_stay', 'tarifa_winter_stays']
};

const frigilianaLiveForecast: Record<AmaraLanguage, WeatherAuthorityContent['forecast']> = {
  en: {
    eyebrow: 'Short-term forecast',
    title: 'Is your trip getting close?',
    paragraphs: [
      'Then the climate pattern becomes a plan for the next few days. Here is AEMET’s official municipal forecast for Frigiliana.',
      'Sun, shade and open paths can still feel different, so use it as clear guidance rather than a promise for every street.'
    ],
    cta: 'Open the forecast on AEMET',
    live: {
      loading: 'Loading the official forecast…',
      today: 'Today',
      tomorrow: 'Tomorrow',
      high: 'High',
      low: 'Low',
      rain: 'Rain up to',
      issued: 'Updated by AEMET',
      unavailable: 'The forecast is currently unavailable.',
      unavailableText: 'Try again later. The climate information on this page still helps you plan the trip.',
      source: 'Official source: AEMET'
    }
  },
  de: {
    eyebrow: 'Kurzfristige Vorhersage',
    title: 'Euer Urlaub steht kurz bevor?',
    paragraphs: [
      'Dann wird aus dem Klimamuster ein Plan für die nächsten Tage. Hier seht ihr die amtliche AEMET-Gemeindeprognose für Frigiliana.',
      'Sonne, Schatten und offene Wege können sich trotzdem etwas anders anfühlen – nutzt sie als klare Orientierung, nicht als Versprechen für jede Gasse.'
    ],
    cta: 'Vorhersage direkt bei AEMET öffnen',
    live: {
      loading: 'Amtliche Vorhersage wird geladen …',
      today: 'Heute',
      tomorrow: 'Morgen',
      high: 'Höchstwert',
      low: 'Tiefstwert',
      rain: 'Regen bis zu',
      issued: 'Aktualisiert von AEMET',
      unavailable: 'Die Vorhersage ist gerade nicht verfügbar.',
      unavailableText: 'Versucht es später noch einmal. Die Klimainformationen auf dieser Seite helfen euch weiterhin bei der Reiseplanung.',
      source: 'Amtliche Quelle: AEMET'
    }
  },
  es: {
    eyebrow: 'Previsión a corto plazo',
    title: '¿Se acerca vuestro viaje?',
    paragraphs: [
      'Entonces el patrón climático se convierte en un plan para los próximos días. Aquí tenéis la predicción municipal oficial de AEMET para Frigiliana.',
      'El sol, la sombra y los caminos abiertos pueden sentirse distintos, así que usadla como orientación clara, no como promesa para cada calle.'
    ],
    cta: 'Abrir la previsión en AEMET',
    live: {
      loading: 'Cargando la previsión oficial…',
      today: 'Hoy',
      tomorrow: 'Mañana',
      high: 'Máxima',
      low: 'Mínima',
      rain: 'Lluvia hasta',
      issued: 'Actualizado por AEMET',
      unavailable: 'La previsión no está disponible ahora.',
      unavailableText: 'Volved a intentarlo más tarde. La información climática de esta página sigue ayudando a planificar el viaje.',
      source: 'Fuente oficial: AEMET'
    }
  },
  nl: {
    eyebrow: 'Verwachting voor de komende dagen',
    title: 'Komt jullie reis dichterbij?',
    paragraphs: [
      'Dan wordt het klimaatpatroon een plan voor de komende dagen. Hier zien jullie de officiële gemeenteverwachting van AEMET voor Frigiliana.',
      'Zon, schaduw en open paden kunnen toch anders aanvoelen. Gebruik de verwachting daarom als duidelijke leidraad, niet als belofte voor elke straat.'
    ],
    cta: 'Open de verwachting bij AEMET',
    live: {
      loading: 'Officiële verwachting wordt geladen…',
      today: 'Vandaag',
      tomorrow: 'Morgen',
      high: 'Maximum',
      low: 'Minimum',
      rain: 'Regen tot',
      issued: 'Bijgewerkt door AEMET',
      unavailable: 'De verwachting is nu niet beschikbaar.',
      unavailableText: 'Probeer het later nog eens. De klimaatinformatie op deze pagina helpt nog steeds bij het plannen van jullie reis.',
      source: 'Officiële bron: AEMET'
    }
  },
  sv: {
    eyebrow: 'Prognos för de närmaste dagarna',
    title: 'Närmar sig er resa?',
    paragraphs: [
      'Då blir klimatmönstret en plan för de närmaste dagarna. Här ser ni AEMET:s officiella kommunprognos för Frigiliana.',
      'Sol, skugga och öppna leder kan ändå kännas olika, så använd prognosen som tydlig vägledning – inte som ett löfte för varje gata.'
    ],
    cta: 'Öppna prognosen hos AEMET',
    live: {
      loading: 'Den officiella prognosen hämtas…',
      today: 'I dag',
      tomorrow: 'I morgon',
      high: 'Högsta',
      low: 'Lägsta',
      rain: 'Regn upp till',
      issued: 'Uppdaterat av AEMET',
      unavailable: 'Prognosen är inte tillgänglig just nu.',
      unavailableText: 'Försök igen senare. Klimatinformationen på sidan hjälper fortfarande när ni planerar resan.',
      source: 'Officiell källa: AEMET'
    }
  }
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
  const siblingRelated: Record<'nerja' | 'tarifa', Record<AmaraLanguage, {
    eyebrow: string;
    title: string;
    items: Array<{ label: string; text: string }>;
  }>> = {
    nerja: {
      en: { eyebrow: 'Your next Nerja question', title: 'Connect the weather to the place you choose', items: [{ label: 'Read Nerja’s coast and hills', text: 'See how shoreline, shelter and the terrain behind town shape each day.' }, { label: 'Choose a base for your rhythm', text: 'Compare Nerja’s areas for beach time, old-town evenings and easy movement.' }, { label: 'Plan a longer winter stay', text: 'Turn cooler-season flexibility into a comfortable everyday routine.' }] },
      de: { eyebrow: 'Eure nächste Nerja-Frage', title: 'Das Wetter mit der passenden Lage verbinden', items: [{ label: 'Nerjas Küste und Hänge verstehen', text: 'Seht, wie Ufer, Schutz und das Gelände hinter dem Ort den Tag prägen.' }, { label: 'Eine Basis für euren Rhythmus wählen', text: 'Vergleicht Nerjas Lagen für Strandzeit, Altstadtabende und kurze Wege.' }, { label: 'Einen längeren Winteraufenthalt planen', text: 'Macht aus Flexibilität in der kühleren Saison einen angenehmen Alltag.' }] },
      es: { eyebrow: 'La siguiente pregunta sobre Nerja', title: 'Conectar el tiempo con la zona adecuada', items: [{ label: 'Entender la costa y las laderas', text: 'Ved cómo el litoral, el abrigo y el relieve tras el pueblo cambian cada día.' }, { label: 'Elegir una base para vuestro ritmo', text: 'Comparad las zonas de Nerja para playa, tardes en el casco antiguo y trayectos sencillos.' }, { label: 'Planificar una estancia larga en invierno', text: 'Convertid la flexibilidad de la época fresca en una rutina cómoda.' }] },
      nl: { eyebrow: 'Jullie volgende vraag over Nerja', title: 'Verbind het weer met de juiste verblijfplaats', items: [{ label: 'Begrijp Nerja’s kust en heuvels', text: 'Bekijk hoe kustlijn, beschutting en het terrein achter de stad elke dag vormen.' }, { label: 'Kies een basis voor jullie ritme', text: 'Vergelijk Nerja’s gebieden voor strandtijd, avonden in de oude stad en makkelijke routes.' }, { label: 'Plan een langer winterverblijf', text: 'Maak van flexibiliteit in het koelere seizoen een comfortabel dagelijks ritme.' }] },
      sv: { eyebrow: 'Er nästa fråga om Nerja', title: 'Koppla vädret till rätt plats att bo på', items: [{ label: 'Förstå Nerjas kust och höjder', text: 'Se hur strandlinje, skydd och terrängen bakom staden formar dagen.' }, { label: 'Välj en bas för er rytm', text: 'Jämför Nerjas områden för strandtid, kvällar i gamla stan och enkla förflyttningar.' }, { label: 'Planera en längre vintervistelse', text: 'Gör den svalare säsongens flexibilitet till en bekväm vardagsrytm.' }] }
    },
    tarifa: {
      en: { eyebrow: 'Your next Tarifa question', title: 'Choose the setting that works with the wind', items: [{ label: 'Understand the Strait setting', text: 'Read the exposed coast, Atlantic influence and Tarifa’s position at the Strait.' }, { label: 'Choose shelter and daily access', text: 'Compare areas for old-town evenings, beach plans and an easy return home.' }, { label: 'Plan winter comfort in Tarifa', text: 'Build a longer stay around home comfort, routines and forecast-led days.' }] },
      de: { eyebrow: 'Eure nächste Tarifa-Frage', title: 'Die Lage wählen, die mit dem Wind funktioniert', items: [{ label: 'Die Lage an der Meerenge verstehen', text: 'Ordnet offene Küste, Atlantikeinfluss und Tarifas Position an der Meerenge ein.' }, { label: 'Schutz und kurze Alltagswege wählen', text: 'Vergleicht Lagen für Altstadtabende, Strandpläne und einen einfachen Heimweg.' }, { label: 'Winterkomfort in Tarifa planen', text: 'Baut einen längeren Aufenthalt auf Wohnkomfort, Routinen und Vorhersage auf.' }] },
      es: { eyebrow: 'La siguiente pregunta sobre Tarifa', title: 'Elegir el entorno que funciona con el viento', items: [{ label: 'Entender el entorno del Estrecho', text: 'Situad la costa expuesta, la influencia atlántica y la posición de Tarifa.' }, { label: 'Elegir abrigo y accesos diarios', text: 'Comparad zonas para tardes en el casco antiguo, playa y una vuelta sencilla a casa.' }, { label: 'Planificar el confort invernal', text: 'Organizad una estancia larga con vivienda cómoda, rutinas y días guiados por la previsión.' }] },
      nl: { eyebrow: 'Jullie volgende vraag over Tarifa', title: 'Kies de omgeving die met de wind werkt', items: [{ label: 'Begrijp de ligging aan de Straat', text: 'Plaats de open kust, Atlantische invloed en Tarifas positie aan de Straat in context.' }, { label: 'Kies beschutting en dagelijks gemak', text: 'Vergelijk gebieden voor avonden in de oude stad, strandplannen en een makkelijke weg naar huis.' }, { label: 'Plan wintercomfort in Tarifa', text: 'Bouw een langer verblijf rond wooncomfort, routines en dagen volgens de verwachting.' }] },
      sv: { eyebrow: 'Er nästa fråga om Tarifa', title: 'Välj platsen som fungerar med vinden', items: [{ label: 'Förstå läget vid sundet', text: 'Sätt den öppna kusten, Atlantens inflytande och Tarifas läge vid sundet i sitt sammanhang.' }, { label: 'Välj skydd och enkel vardag', text: 'Jämför områden för kvällar i gamla stan, strandplaner och en smidig väg hem.' }, { label: 'Planera vinterkomfort i Tarifa', text: 'Bygg en längre vistelse kring boendekomfort, rutiner och prognosstyrda dagar.' }] }
    }
  };
  const frigilianaIntentLinks: Record<AmaraLanguage, Array<{ token: LinkToken; label: string }>> = {
    en: [
      { token: 'frigiliana_beaches_authority', label: 'Explore beaches near Frigiliana' },
      { token: 'frigiliana_hiking_authority', label: 'Compare the four hiking routes' },
      { token: 'frigiliana_old_town', label: 'Discover Frigiliana’s old town' },
      { token: 'frigiliana_winter_stays', label: 'Explore winter stays in Frigiliana' }
    ],
    de: [
      { token: 'frigiliana_beaches_authority', label: 'Strände rund um Frigiliana entdecken' },
      { token: 'frigiliana_hiking_authority', label: 'Die vier Wanderrouten vergleichen' },
      { token: 'frigiliana_old_town', label: 'Frigilianas Altstadt entdecken' },
      { token: 'frigiliana_winter_stays', label: 'Winteraufenthalte in Frigiliana entdecken' }
    ],
    es: [
      { token: 'frigiliana_beaches_authority', label: 'Descubrir playas cerca de Frigiliana' },
      { token: 'frigiliana_hiking_authority', label: 'Comparar las cuatro rutas de senderismo' },
      { token: 'frigiliana_old_town', label: 'Descubrir el casco antiguo de Frigiliana' },
      { token: 'frigiliana_winter_stays', label: 'Descubrir estancias de invierno en Frigiliana' }
    ],
    nl: [
      { token: 'frigiliana_beaches_authority', label: 'Ontdek stranden bij Frigiliana' },
      { token: 'frigiliana_hiking_authority', label: 'Vergelijk de vier wandelroutes' },
      { token: 'frigiliana_old_town', label: 'Ontdek de oude stad van Frigiliana' },
      { token: 'frigiliana_winter_stays', label: 'Ontdek winterverblijven in Frigiliana' }
    ],
    sv: [
      { token: 'frigiliana_beaches_authority', label: 'Upptäck stränder nära Frigiliana' },
      { token: 'frigiliana_hiking_authority', label: 'Jämför de fyra vandringslederna' },
      { token: 'frigiliana_old_town', label: 'Upptäck Frigilianas gamla stad' },
      { token: 'frigiliana_winter_stays', label: 'Upptäck vintervistelser i Frigiliana' }
    ]
  };
  const nerjaIntentLinks: Record<AmaraLanguage, Array<{ token: LinkToken; label: string }>> = {
    en: [
      { token: 'nerja_beaches_authority', label: 'Choose a Nerja beach' },
      { token: 'nerja_experience_hub', label: 'Explore Nerja together' },
      { token: 'nerja_daily_life', label: 'Discover Nerja’s daily rhythm' },
      { token: 'nerja_winter_stays', label: 'Explore winter stays in Nerja' }
    ],
    de: [
      { token: 'nerja_beaches_authority', label: 'Einen Strand in Nerja wählen' },
      { token: 'nerja_experience_hub', label: 'Nerja gemeinsam entdecken' },
      { token: 'nerja_daily_life', label: 'Nerjas Alltagsrhythmus kennenlernen' },
      { token: 'nerja_winter_stays', label: 'Winteraufenthalte in Nerja entdecken' }
    ],
    es: [
      { token: 'nerja_beaches_authority', label: 'Elegir una playa de Nerja' },
      { token: 'nerja_experience_hub', label: 'Descubrir Nerja juntos' },
      { token: 'nerja_daily_life', label: 'Conocer el ritmo cotidiano de Nerja' },
      { token: 'nerja_winter_stays', label: 'Descubrir estancias de invierno en Nerja' }
    ],
    nl: [
      { token: 'nerja_beaches_authority', label: 'Kies een strand in Nerja' },
      { token: 'nerja_experience_hub', label: 'Ontdek Nerja samen' },
      { token: 'nerja_daily_life', label: 'Ontdek het dagelijkse ritme van Nerja' },
      { token: 'nerja_winter_stays', label: 'Ontdek winterverblijven in Nerja' }
    ],
    sv: [
      { token: 'nerja_beaches_authority', label: 'Välj en strand i Nerja' },
      { token: 'nerja_experience_hub', label: 'Upptäck Nerja tillsammans' },
      { token: 'nerja_daily_life', label: 'Upptäck Nerjas vardagsrytm' },
      { token: 'nerja_winter_stays', label: 'Upptäck vintervistelser i Nerja' }
    ]
  };
  const tarifaIntentLinks: Record<AmaraLanguage, Array<{ token: LinkToken; label: string }>> = {
    en: [
      { token: 'tarifa_beaches_authority', label: 'Choose a Tarifa beach' },
      { token: 'tarifa_experience_hub', label: 'Explore Tarifa together' },
      { token: 'tarifa_old_town_history', label: 'Discover Tarifa’s old town' },
      { token: 'tarifa_winter_stays', label: 'Explore winter stays in Tarifa' }
    ],
    de: [
      { token: 'tarifa_beaches_authority', label: 'Einen Strand in Tarifa wählen' },
      { token: 'tarifa_experience_hub', label: 'Tarifa gemeinsam entdecken' },
      { token: 'tarifa_old_town_history', label: 'Tarifas Altstadt entdecken' },
      { token: 'tarifa_winter_stays', label: 'Winteraufenthalte in Tarifa entdecken' }
    ],
    es: [
      { token: 'tarifa_beaches_authority', label: 'Elegir una playa de Tarifa' },
      { token: 'tarifa_experience_hub', label: 'Descubrir Tarifa juntos' },
      { token: 'tarifa_old_town_history', label: 'Descubrir el casco antiguo de Tarifa' },
      { token: 'tarifa_winter_stays', label: 'Descubrir estancias de invierno en Tarifa' }
    ],
    nl: [
      { token: 'tarifa_beaches_authority', label: 'Kies een strand in Tarifa' },
      { token: 'tarifa_experience_hub', label: 'Ontdek Tarifa samen' },
      { token: 'tarifa_old_town_history', label: 'Ontdek de oude stad van Tarifa' },
      { token: 'tarifa_winter_stays', label: 'Ontdek winterverblijven in Tarifa' }
    ],
    sv: [
      { token: 'tarifa_beaches_authority', label: 'Välj en strand i Tarifa' },
      { token: 'tarifa_experience_hub', label: 'Upptäck Tarifa tillsammans' },
      { token: 'tarifa_old_town_history', label: 'Upptäck Tarifas gamla stad' },
      { token: 'tarifa_winter_stays', label: 'Upptäck vintervistelser i Tarifa' }
    ]
  };
  const intentLinks = destination === 'frigiliana'
    ? frigilianaIntentLinks[lang]
    : destination === 'nerja'
      ? nerjaIntentLinks[lang]
      : tarifaIntentLinks[lang];
  const relatedCopy = destination === 'frigiliana'
    ? {
        eyebrow: common.relatedEyebrow,
        title: common.relatedTitle,
        items: common.relatedLabels.map((label, index) => ({ label, text: common.relatedTexts[index] }))
      }
    : siblingRelated[destination][lang];

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
    bestTime: {
      eyebrow: common.bestEyebrow,
      title: common.bestTitle,
      intro: common.bestIntro,
      items: common.intentTitles.map((title, index) => {
        const link = intentLinks[index];
        return {
          title,
          text: profile.intentNotes[index],
          ...(link ? { link } : {})
        };
      })
    },
    practical: { eyebrow: common.practicalEyebrow, title: common.practicalTitle, paragraphs: [common.practicalIntro, profile.practical], listTitle: common.packTitle, items: common.packItems },
    forecast: destination === 'frigiliana'
      ? frigilianaLiveForecast[lang]
      : { eyebrow: common.forecastEyebrow, title: common.forecastTitle, paragraphs: common.forecastParagraphs, cta: common.forecastCta },
    sources: { eyebrow: common.sourcesEyebrow, title: common.sourcesTitle, intro: common.sourcesIntro, checked: common.sourcesChecked, links },
    related: {
      eyebrow: relatedCopy.eyebrow,
      title: relatedCopy.title,
      links: relatedTokens[destination].map((token, index) => ({
        token,
        label: relatedCopy.items[index].label,
        text: relatedCopy.items[index].text
      }))
    },
    closing: { eyebrow: common.closingEyebrow, title: common.closingTitle, body: common.closingBody, primaryLabel: common.primaryLabel, secondaryLabel: common.secondaryLabel }
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-27',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export function getWeatherSeo(destination: WeatherDestination): AmaraAuthoringSeo {
  const place = names[destination];
  return {
    version: destination === 'frigiliana'
      ? '2026-08-27-frigiliana-weather-v2.2'
      : `2026-08-27-${destination}-weather-v2.1`,
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
