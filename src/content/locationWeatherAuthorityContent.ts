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
      intro: 'If a round trip inland is on your list, put it in spring or autumn. July averages in Sevilla and Córdoba run some five to six degrees above the coast — in high summer that is a different proposition altogether. For a familiar yardstick: the July average maximum at Heathrow is just under 24 degrees.',
      labels: { month: 'Month', high: 'Avg. maximum', low: 'Avg. minimum', rain: 'Rainfall', sunHours: 'Sun / day', temperature: 'Average maximum / minimum', rainfall: 'Monthly rainfall', details: 'Monthly values in detail' },
      sourceTitle: 'What these numbers are, and are not', sourceText: 'The figures come from Climate-Data.org. The provider returns the same values for Nerja and Frigiliana, so this is a regional picture rather than a village climate. And if you come across the sign in neighbouring Torrox: that “best climate in Europe” comes from a 2008 comparison between Torrox and 21 other Mediterranean coastal towns, commissioned by a company based there. It says little about Europe and nothing about Frigiliana. So you will find no superlatives here, only monthly figures.'
    },
    seasonEyebrow: 'The year in four parts', seasonTitle: 'Spring, summer, autumn and winter', seasonIntro: 'How the four seasons feel here — as a tendency, not a promise.', seasonPlanningLabel: 'What to expect',
    seasons: [
      { period: 'March – May', title: 'Spring', planning: 'Bring layers and keep one rain option; conditions can still change across a multi-day stay.' },
      { period: 'June – August', title: 'Summer', planning: 'Move exposed walks away from midday and carry water, shade and sun protection.' },
      { period: 'September – November', title: 'Autumn', planning: 'September can still feel like summer; by November rain is more likely.' },
      { period: 'December – February', title: 'Winter', planning: 'Pack for cooler evenings and mixed weather, even when a bright afternoon feels mild.' }
    ],
    bestEyebrow: 'What we recommend, by season', bestTitle: 'What is most fun when', bestIntro: 'Each season has its own good days. Below is which of them suits which kind of stay.', intentTitles: ['Beach & long evenings', 'Walking & exploring', 'Quieter town rhythm', 'Longer winter stay'],
    practicalEyebrow: 'Day planning & packing', practicalTitle: 'Turn the climate pattern into a workable day', practicalIntro: 'The yearly pattern is enough for packing. For a particular day you need the forecast.', packTitle: 'What to bring', packItems: ['Sun cream, a water bottle, a hat', 'A jacket for the evening, even in summer', 'Sturdy shoes — there is more uphill here than you expect', 'Something for rain, outside the summer months'],
    forecastEyebrow: 'Current weather', forecastTitle: 'Use AEMET for the actual travel dates', forecastParagraphs: ['The numbers above are long-term averages — useful for deciding which month suits you.', 'For your actual dates, use AEMET’s municipal forecast and warnings. They describe the main settlement, so a beach, a hillside or a sheltered street can still differ.'], forecastCta: 'Open the official AEMET forecast',
    sourcesEyebrow: 'Sources', sourcesTitle: 'Where these figures come from', sourcesIntro: 'The monthly figures come from Climate-Data.org, the daily forecast from AEMET.', sourcesChecked: 'Last checked in August 2026', modelSourceText: 'Monthly baseline for temperature, rainfall and sunshine.', forecastSourceText: 'Official municipal forecast and weather-warning reference.',
    relatedEyebrow: 'Continue planning', relatedTitle: 'Put weather into the wider stay', relatedLabels: ['Geography & orientation', 'Where in town you sleep', 'Winter stays'], relatedTexts: ['Understand terrain, coast and the local setting.', 'How the areas differ in everyday life.', 'Use the dedicated guide for a longer stay in the cooler season.'],
    closingEyebrow: 'Also worth knowing', closingTitle: 'Especially for the summer months', closingBody: 'At 27 degrees every step counts double 🙂 Where exactly you sleep in the village makes a real difference then. Here you can read more about the different parts of Frigiliana, how high each one sits, and where AMARA fits in.', primaryLabel: 'Explore the location guide', secondaryLabel: 'Where in town you sleep'
  },
  de: {
    seoTitle: (place) => `Wetter in ${place}: Klima, Jahreszeiten & beste Reisezeit`,
    h1: (place) => `Wetter in ${place}: Klima, Jahreszeiten & beste Reisezeit`,
    eyebrow: (place) => `Wetter & Klima · ${place}`,
    table: {
      eyebrow: 'Klimaprofil für 12 Monate', title: 'Temperatur, Regen und Sonne – Monat für Monat',
      intro: 'Wenn eine Rundreise ins Binnenland auf eurer Liste steht: legt sie ins Frühjahr oder in den Herbst. Die Julimittel in Sevilla und Córdoba liegen rund fünf bis sechs Grad über der Küste — im Hochsommer ist das eine andere Nummer.',
      labels: { month: 'Monat', high: 'Mittl. Maximum', low: 'Mittl. Minimum', rain: 'Niederschlag', sunHours: 'Sonne / Tag', temperature: 'Mittleres Maximum / Minimum', rainfall: 'Monatsniederschlag', details: 'Monatswerte im Detail' },
      sourceTitle: 'Was diese Zahlen sind — und was nicht', sourceText: 'Die Werte kommen von Climate-Data.org. Für Nerja und Frigiliana liefert der Anbieter dieselben Zahlen — es ist also ein regionales Bild, kein Ortsklima. Und falls euch das Schild im Nachbarort Torrox begegnet: Das „beste Klima Europas“ stammt aus einem Vergleich von 2008 zwischen Torrox und 21 weiteren Mittelmeerorten, in Auftrag gegeben von einem dort ansässigen Unternehmen. Über Europa sagt das wenig und über Frigiliana nichts. Deshalb findet ihr hier keine Superlative, sondern Monatswerte.'
    },
    seasonEyebrow: 'Das Jahr in vier Teilen', seasonTitle: 'Frühling, Sommer, Herbst und Winter', seasonIntro: 'So fühlen sich die vier Jahreszeiten hier an — als Tendenz, nicht als Versprechen.', seasonPlanningLabel: 'Was euch erwartet',
    seasons: [
      { period: 'März – Mai', title: 'Frühling', planning: 'Über mehrere Tage kann das Wetter noch wechseln. Eine Jacke und etwas gegen Regen gehören dazu.' },
      { period: 'Juni – August', title: 'Sommer', planning: 'Zwischen zwölf und fünf bleibt ihr besser im Schatten. Der Rest des Tages gehört euch.' },
      { period: 'September – November', title: 'Herbst', planning: 'September fühlt sich oft noch sommerlich an, im November wird Regen wahrscheinlicher.' },
      { period: 'Dezember – Februar', title: 'Winter', planning: 'Der Nachmittag kann mild sein und der Abend trotzdem kühl. Eine Jacke lohnt sich.' }
    ],
    bestEyebrow: 'Unsere Empfehlungen nach Reisezeit', bestTitle: 'Was wann am meisten Spaß macht', bestIntro: 'Jede Jahreszeit hat ihre eigenen guten Tage. Hier steht, welche davon zu welchem Aufenthalt passen.', intentTitles: ['Strand & lange Abende', 'Wandern & Erkunden', 'Ruhigerer Ortsrhythmus', 'Längerer Winteraufenthalt'],
    practicalEyebrow: 'Tagesplanung & Gepäck', practicalTitle: 'Aus dem Klimamuster einen guten Tag machen', practicalIntro: 'Für den Koffer reicht das Jahresmuster. Für den einzelnen Tag braucht ihr die Vorhersage.', packTitle: 'Was mit muss', packItems: ['Sonnencreme, Wasserflasche, Hut', 'Eine Jacke für den Abend, auch im Sommer', 'Feste Schuhe — hier geht ihr mehr bergauf als gedacht', 'Etwas gegen Regen, außerhalb der Sommermonate'],
    forecastEyebrow: 'Aktuelles Wetter', forecastTitle: 'Für eure Reisedaten zählt AEMET', forecastParagraphs: ['Die Zahlen oben sind Langzeitmittel — gut für die Frage, welcher Monat zu euch passt.', 'Für eure konkreten Reisedaten nutzt ihr die Gemeindeprognose und die Warnungen von AEMET. Sie gelten für den Hauptort; ein Strand, ein Hang oder eine geschützte Gasse kann davon abweichen.'], forecastCta: 'Amtliche AEMET-Vorhersage öffnen',
    sourcesEyebrow: 'Quellen', sourcesTitle: 'Woher diese Zahlen stammen', sourcesIntro: 'Die Monatswerte kommen von Climate-Data.org, die Tagesvorhersage von AEMET.', sourcesChecked: 'Zuletzt im August 2026 nachgesehen', modelSourceText: 'Monatliche Basiswerte für Temperatur, Niederschlag und Sonne.', forecastSourceText: 'Amtliche Gemeindeprognose und Referenz für Wetterwarnungen.',
    relatedEyebrow: 'Weiter planen', relatedTitle: 'Das Wetter in den gesamten Aufenthalt einordnen', relatedLabels: ['Geografie & Orientierung', 'Wo im Ort ihr wohnt', 'Winteraufenthalte'], relatedTexts: ['Gelände, Küste und die lokale Lage verstehen.', 'Wie sich die Lagen im Alltag unterscheiden.', 'Für einen längeren Aufenthalt in der kühleren Jahreszeit den eigenen Guide nutzen.'],
    closingEyebrow: 'Auch interessant', closingTitle: 'Vor allem für die Sommermonate', closingBody: 'Bei 27 Grad zählt jede Stufe doppelt 🙂 Wo genau ihr im Dorf wohnt, macht dann einen echten Unterschied. Hier findet ihr mehr über die Dorfteile, ihre Höhenlagen und wo AMARA darin liegt.', primaryLabel: 'Lage-Guide entdecken', secondaryLabel: 'Wo im Ort ihr wohnt'
  },
  es: {
    seoTitle: (place) => `Tiempo en ${place}: clima, estaciones y mejor época`,
    h1: (place) => `Tiempo en ${place}: clima, estaciones y mejor época para viajar`,
    eyebrow: (place) => `Tiempo y clima · ${place}`,
    table: {
      eyebrow: 'Perfil climático de 12 meses', title: 'Temperatura, lluvia y sol — mes a mes',
      intro: 'Si lleváis una ruta por el interior en la lista, dejadla para la primavera o el otoño. Las medias de julio en Sevilla y Córdoba están unos cinco o seis grados por encima de la costa: en pleno verano eso es otra cosa.',
      labels: { month: 'Mes', high: 'Máxima media', low: 'Mínima media', rain: 'Lluvia', sunHours: 'Sol / día', temperature: 'Máxima / mínima media', rainfall: 'Lluvia mensual', details: 'Valores mensuales en detalle' },
      sourceTitle: 'Qué son estas cifras y qué no', sourceText: 'Los datos son de Climate-Data.org. El proveedor da los mismos valores para Nerja y Frigiliana, así que es una imagen regional y no un clima de pueblo. Y si os topáis con el cartel de Torrox: ese “mejor clima de Europa” viene de una comparación de 2008 entre Torrox y otras 21 localidades costeras del Mediterráneo, encargada por una empresa de allí. Dice poco de Europa y nada de Frigiliana. Por eso aquí no hay superlativos, solo valores mensuales.'
    },
    seasonEyebrow: 'El año en cuatro partes', seasonTitle: 'Primavera, verano, otoño e invierno', seasonIntro: 'Así se sienten aquí las cuatro estaciones: como tendencia, no como promesa.', seasonPlanningLabel: 'Qué os vais a encontrar',
    seasons: [
      { period: 'Marzo – mayo', title: 'Primavera', planning: 'Llevad capas y una opción para la lluvia; el tiempo aún puede variar durante varios días.' },
      { period: 'Junio – agosto', title: 'Verano', planning: 'Evitad los recorridos expuestos al mediodía y llevad agua, sombra y protección solar.' },
      { period: 'Septiembre – noviembre', title: 'Otoño', planning: 'Septiembre suele seguir siendo veraniego; en noviembre la lluvia es más probable.' },
      { period: 'Diciembre – febrero', title: 'Invierno', planning: 'Preparad capas para tardes frescas y tiempo cambiante, aunque el mediodía resulte suave.' }
    ],
    bestEyebrow: 'Lo que recomendamos, según la época', bestTitle: 'Qué apetece más en cada época', bestIntro: 'Cada estación tiene sus buenos días. Aquí veréis cuáles encajan con cada tipo de estancia.', intentTitles: ['Playa y tardes largas', 'Caminar y explorar', 'Un ritmo más tranquilo', 'Una estancia larga en invierno'],
    practicalEyebrow: 'Plan diario y equipaje', practicalTitle: 'Convertir el patrón climático en un buen día', practicalIntro: 'Para la maleta basta el patrón del año. Para un día concreto necesitáis la previsión.', packTitle: 'Qué llevar', packItems: ['Crema solar, botella de agua, sombrero', 'Una chaqueta para la tarde, también en verano', 'Calzado firme: aquí se sube más de lo que parece', 'Algo para la lluvia, fuera de los meses de verano'],
    forecastEyebrow: 'Tiempo actual', forecastTitle: 'Para las fechas reales, consultad AEMET', forecastParagraphs: ['Las cifras de arriba son medias a largo plazo: útiles para decidir qué mes encaja.', 'Para vuestras fechas concretas, usad la predicción municipal y los avisos de AEMET. Se refieren al núcleo principal, así que una playa, una ladera o una calle protegida pueden variar.'], forecastCta: 'Abrir la previsión oficial de AEMET',
    sourcesEyebrow: 'Fuentes', sourcesTitle: 'De dónde salen estas cifras', sourcesIntro: 'Los valores mensuales vienen de Climate-Data.org y la previsión diaria de AEMET.', sourcesChecked: 'Revisado por última vez en agosto de 2026', modelSourceText: 'Base mensual de temperatura, lluvia y sol.', forecastSourceText: 'Predicción municipal oficial y referencia para avisos meteorológicos.',
    relatedEyebrow: 'Seguir planificando', relatedTitle: 'Situar el tiempo dentro de toda la estancia', relatedLabels: ['Geografía y orientación', 'En qué parte del pueblo dormís', 'Estancias de invierno'], relatedTexts: ['Entender el terreno, la costa y el entorno local.', 'En qué se diferencian las zonas en el día a día.', 'Usar la guía específica para una estancia larga en la época fresca.'],
    closingEyebrow: 'También interesa', closingTitle: 'Sobre todo para los meses de verano', closingBody: 'Con 27 grados, cada escalón cuenta doble 🙂 Entonces sí importa en qué parte del pueblo dormís. Aquí encontraréis más sobre los barrios de Frigiliana, a qué altura queda cada uno y dónde encaja AMARA.', primaryLabel: 'Descubrir la guía de ubicación', secondaryLabel: 'En qué parte del pueblo dormís'
  },
  nl: {
    seoTitle: (place) => `Weer in ${place}: klimaat, seizoenen & beste reistijd`,
    h1: (place) => `Weer in ${place}: klimaat, seizoenen & beste reistijd`,
    eyebrow: (place) => `Weer & klimaat · ${place}`,
    table: {
      eyebrow: 'Klimaatprofiel van 12 maanden', title: 'Temperatuur, regen en zon — maand voor maand',
      intro: 'Staat er een rondrit door het binnenland op je lijstje: doe die in het voorjaar of de herfst. De julygemiddelden in Sevilla en Córdoba liggen zo’n vijf tot zes graden boven die aan de kust — in de hoogzomer is dat iets heel anders.',
      labels: { month: 'Maand', high: 'Gem. maximum', low: 'Gem. minimum', rain: 'Neerslag', sunHours: 'Zon / dag', temperature: 'Gemiddeld maximum / minimum', rainfall: 'Maandneerslag', details: 'Maandwaarden in detail' },
      sourceTitle: 'Wat deze cijfers wel en niet zijn', sourceText: 'De cijfers komen van Climate-Data.org. De aanbieder geeft Nerja en Frigiliana dezelfde waarden, dus dit is een regionaal beeld en geen dorpsklimaat. En mocht je het bord in buurgemeente Torrox tegenkomen: dat “beste klimaat van Europa” komt uit een vergelijking uit 2008 tussen Torrox en 21 andere mediterrane kustplaatsen, in opdracht van een bedrijf daar. Over Europa zegt het weinig en over Frigiliana niets. Daarom vind je hier geen superlatieven, alleen maandwaarden.'
    },
    seasonEyebrow: 'Het jaar in vier delen', seasonTitle: 'Lente, zomer, herfst en winter', seasonIntro: 'Zo voelen de vier seizoenen hier aan — als tendens, niet als belofte.', seasonPlanningLabel: 'Wat je kunt verwachten',
    seasons: [
      { period: 'Maart – mei', title: 'Lente', planning: 'Neem laagjes en een regenoptie mee; het weer kan tijdens meerdere dagen nog wisselen.' },
      { period: 'Juni – augustus', title: 'Zomer', planning: 'Plan open routes buiten de middagwarmte en neem water, schaduw en zonbescherming serieus.' },
      { period: 'September – november', title: 'Herfst', planning: 'September voelt vaak nog zomers; in november wordt regen waarschijnlijker.' },
      { period: 'December – februari', title: 'Winter', planning: 'Pak voor koelere avonden en wisselvallig weer, ook wanneer de middag zacht aanvoelt.' }
    ],
    bestEyebrow: 'Wat wij aanraden, per seizoen', bestTitle: 'Wat wanneer het leukst is', bestIntro: 'Elk seizoen heeft zijn eigen goede dagen. Hieronder staat welke bij welk verblijf passen.', intentTitles: ['Strand en lange avonden', 'Wandelen en ontdekken', 'Een rustiger ritme', 'Een langer winterverblijf'],
    practicalEyebrow: 'Dagplanning en bagage', practicalTitle: 'Maak van het klimaatpatroon een werkbare dag', practicalIntro: 'Voor de koffer volstaat het jaarpatroon. Voor een bepaalde dag hebben jullie de verwachting nodig.', packTitle: 'Wat mee moet', packItems: ['Zonnebrand, waterfles, hoed', 'Een jas voor de avond, ook in de zomer', 'Stevige schoenen — het gaat hier meer omhoog dan je denkt', 'Iets tegen regen, buiten de zomermaanden'],
    forecastEyebrow: 'Actueel weer', forecastTitle: 'Gebruik AEMET voor de echte reisdata', forecastParagraphs: ['De cijfers hierboven zijn langjarige gemiddelden — handig om te bepalen welke maand past.', 'Gebruik voor jullie eigen data de gemeentelijke verwachting en waarschuwingen van AEMET. Die gelden voor de hoofdplaats, dus een strand, een helling of een beschutte straat kan afwijken.'], forecastCta: 'Open de officiële AEMET-verwachting',
    sourcesEyebrow: 'Bronnen', sourcesTitle: 'Waar deze cijfers vandaan komen', sourcesIntro: 'De maandwaarden komen van Climate-Data.org, de dagverwachting van AEMET.', sourcesChecked: 'Voor het laatst nagekeken in augustus 2026', modelSourceText: 'Maandelijkse basis voor temperatuur, neerslag en zon.', forecastSourceText: 'Officiële gemeentelijke verwachting en referentie voor weerwaarschuwingen.',
    relatedEyebrow: 'Verder plannen', relatedTitle: 'Plaats het weer in het hele verblijf', relatedLabels: ['Geografie en oriëntatie', 'Waar in de plaats je slaapt', 'Winterverblijven'], relatedTexts: ['Begrijp terrein, kust en de lokale ligging.', 'Hoe de gebieden in het dagelijks leven verschillen.', 'Gebruik de aparte gids voor een langer verblijf in het koele seizoen.'],
    closingEyebrow: 'Ook interessant', closingTitle: 'Vooral voor de zomermaanden', closingBody: 'Bij 27 graden telt elke trede dubbel 🙂 Dan maakt het echt uit waar in het dorp je slaapt. Hier lees je meer over de wijken van Frigiliana, hoe hoog ze liggen en waar AMARA zit.', primaryLabel: 'Ontdek de locatiegids', secondaryLabel: 'Waar in de plaats je slaapt'
  },
  sv: {
    seoTitle: (place) => `Väder i ${place}: klimat, årstider & bästa restid`,
    h1: (place) => `Väder i ${place}: klimat, årstider & bästa restid`,
    eyebrow: (place) => `Väder & klimat · ${place}`,
    table: {
      eyebrow: 'Klimatprofil för 12 månader', title: 'Temperatur, regn och sol – månad för månad',
      intro: 'Står en rundresa i inlandet på listan — lägg den på våren eller hösten. Julimedelvärdena i Sevilla och Córdoba ligger ungefär fem till sex grader över kustens; mitt i sommaren är det något helt annat. Som hemmamått: julimedelvärdet för dygnets högsta i Stockholm är 23,5 grader.',
      labels: { month: 'Månad', high: 'Medelmaximum', low: 'Medelminimum', rain: 'Nederbörd', sunHours: 'Sol / dag', temperature: 'Medelmaximum / minimum', rainfall: 'Månadsnederbörd', details: 'Månadsvärden i detalj' },
      sourceTitle: 'Vad siffrorna är – och inte är', sourceText: 'Siffrorna kommer från Climate-Data.org. Leverantören ger samma värden för Nerja och Frigiliana, så det här är en regional bild och inte ett byklimat. Och om ni stöter på skylten i grannorten Torrox: det “bästa klimatet i Europa” kommer från en jämförelse från 2008 mellan Torrox och 21 andra kustorter vid Medelhavet, beställd av ett företag på orten. Om Europa säger det lite och om Frigiliana ingenting. Därför hittar ni inga superlativ här, bara månadsvärden.'
    },
    seasonEyebrow: 'Året i fyra delar', seasonTitle: 'Vår, sommar, höst och vinter', seasonIntro: 'Så känns de fyra årstiderna här — som tendens, inte som löfte.', seasonPlanningLabel: 'Vad ni kan vänta er',
    seasons: [
      { period: 'Mars – maj', title: 'Vår', planning: 'Ta med lager och ett regnalternativ; vädret kan fortfarande växla under flera dagar.' },
      { period: 'Juni – augusti', title: 'Sommar', planning: 'Flytta exponerade promenader från middagen och prioritera vatten, skugga och solskydd.' },
      { period: 'September – november', title: 'Höst', planning: 'September känns ofta fortfarande sommarlik; i november blir regn mer sannolikt.' },
      { period: 'December – februari', title: 'Vinter', planning: 'Packa för svalare kvällar och skiftande väder även när eftermiddagen känns mild.' }
    ],
    bestEyebrow: 'Vad vi rekommenderar, efter säsong', bestTitle: 'Vad som är roligast när', bestIntro: 'Varje årstid har sina egna bra dagar. Här står vilka som passar vilken sorts vistelse.', intentTitles: ['Strand och långa kvällar', 'Promenader och upptäckter', 'Lugnare rytm', 'Längre vintervistelse'],
    practicalEyebrow: 'Dagsplanering och packning', practicalTitle: 'Gör klimatmönstret till en fungerande dag', practicalIntro: 'För packningen räcker årsmönstret. För en enskild dag behöver ni prognosen.', packTitle: 'Vad som ska med', packItems: ['Solkräm, vattenflaska, hatt', 'En jacka för kvällen, även på sommaren', 'Stadiga skor — det går mer uppför här än man tror', 'Något mot regn, utanför sommarmånaderna'],
    forecastEyebrow: 'Aktuellt väder', forecastTitle: 'Använd AEMET för de verkliga resedatumen', forecastParagraphs: ['Siffrorna ovan är långtidsmedelvärden – bra för frågan vilken månad som passar er.', 'För era egna datum använder ni AEMETs kommunprognos och varningar. De gäller huvudorten, så en strand, en sluttning eller en skyddad gata kan skilja sig.'], forecastCta: 'Öppna AEMETs officiella prognos',
    sourcesEyebrow: 'Källor', sourcesTitle: 'Varifrån siffrorna kommer', sourcesIntro: 'Månadsvärdena kommer från Climate-Data.org, dygnsprognosen från AEMET.', sourcesChecked: 'Senast kontrollerat i augusti 2026', modelSourceText: 'Månatliga basvärden för temperatur, nederbörd och sol.', forecastSourceText: 'Officiell kommunprognos och referens för vädervarningar.',
    relatedEyebrow: 'Planera vidare', relatedTitle: 'Sätt vädret i hela vistelsens sammanhang', relatedLabels: ['Geografi och orientering', 'Var i orten ni bor', 'Vintervistelser'], relatedTexts: ['Förstå terräng, kust och lokalt läge.', 'Hur områdena skiljer sig i vardagen.', 'Använd den särskilda guiden för en längre vistelse under den svalare tiden.'],
    closingEyebrow: 'Också värt att veta', closingTitle: 'Särskilt för sommarmånaderna', closingBody: 'Vid 27 grader räknas varje trappsteg dubbelt 🙂 Då spelar det verkligen roll var i byn ni bor. Här kan ni läsa mer om Frigilianas olika delar, hur högt de ligger och var AMARA hamnar.', primaryLabel: 'Upptäck platsguiden', secondaryLabel: 'Var i orten ni bor'
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
      lead: 'It is 150 metres from the street to our front door — and 30 vertical metres over about 30 steps. In July you notice that differently at two in the afternoon than at seven. Which is why the hour of the day often says more here than the month.',
      summary: 'The summer months are sunny and warm to hot — exactly what you expect of Andalusia. The terraces of Lounis, Zaid and Maha each come with an outdoor shower, a hammock and two loungers; on Maha’s roof terrace the sun arrives about 45 minutes earlier than below, and from all three we have often watched the sunset — and the night sky after it.\n\nAutumn brings the rain back, which the vegetation needs and which is welcome after the summer. Spring and autumn are then the loveliest time to walk up into the mountains above the village together. And because Frigiliana lies on a slope, summer is decided less by the month than by the hour.',
      summaryItems: [{ label: 'Local lens', value: 'Hillside · sun · shade' }, { label: 'Best for', value: 'Choose by activity' }, { label: 'Daily check', value: 'AEMET forecast' }],
      factorsTitle: 'Why the hour matters here', factors: ['Frigiliana sits above the coast on sloping terrain. Elevation, exposure and shade provide useful planning context, but they do not prove an exact temperature difference from Nerja.', 'The durable pattern is Mediterranean: the warmest part of the year is markedly drier, while rain is more likely in the cooler half.', 'Then there is the terral, a dry wind off the interior. It drives the temperature up within hours — and turns the sea cold while it does: it pushes the warm surface layer out towards open water, and colder water rises from below. In August 2026 the sea off Málaga fell by almost 13 degrees in a week, down to 15.9, while inland it was heading for 40. So if you walk into the water on a scorching day and it is freezing, you are not imagining it.'],
      factorItems: [{ title: 'Slope and exposure', text: 'An open uphill route can feel very different from a shaded lane at the same hour.' }, { title: 'Day and evening', text: 'Strong sun can dominate the day; after sunset, a light layer may still be useful depending on season and wind.' }, { title: 'Village and coast', text: 'It is six kilometres downhill to the beach in Nerja. Busier down there, quieter up here — and on a day when the sea is not inviting, your own terrace is waiting.' }],
      seasonNotes: ['Greener surroundings, changing weather and increasingly useful daylight for longer routes.', 'Dry, bright and potentially hot; early and late hours matter most on steep or exposed paths.', 'Early autumn can retain summer warmth before rain becomes more likely later in the season.', 'Quieter village days, more variable conditions and cooler evenings that reward flexible plans.'],
      intentNotes: ['In summer you have beach days in abundance, and Torrecilla in Nerja is a short drive away. Back in the village the outdoor shower on your own terrace is waiting — which cove is nicest when is in the beach guide.', 'Spring and autumn are the loveliest time for a long day in the mountains together. On the Cruz de Pinto and the climb to El Fuerte — 963 metres, a good four hours — there is little shade, so in summer we set off early and are back by midday. Then the terrace is waiting. The Higuerón runs through the riverbed: from October to December it can rain properly here, and afterwards it is a different route. Check the weather beforehand, or just ask us.', 'In January the day visitors stay away. Then the village is almost yours — the old town, the cafés and the viewpoints in peace.', 'In winter all four apartments have heating and three of them a pellet stove. The days outside are brighter than most people expect, the evenings are cool, and early or after dark the lanes are almost yours alone.'],
      practical: 'In summer you set off early or late, not at midday. In the cooler half of the year you want a jacket for the evening and something for rain. And sturdy shoes for the village: cobbles and about 30 steps up to our door.'
    },
    de: {
      description: 'Wetter in Frigiliana nach Monaten: Klima, Jahreszeiten und beste Reisezeit für Dorfwege, Ausflüge und einen flexiblen Aufenthalt oberhalb von Nerja.',
      lead: 'Von der Straße bis zu unserer Haustür sind es 150 Meter — und dabei 30 Höhenmeter über rund 30 Stufen. Im Juli merkt ihr das um zwei Uhr nachmittags anders als um sieben. Deshalb sagt hier die Uhrzeit oft mehr als der Monat.',
      summary: 'Die Sommermonate sind sonnig und warm bis heiß — so, wie man Andalusien erwartet. Auf den Terrassen von Lounis, Zaid und Maha gehören Außendusche, Hängematte und zwei Liegen dazu; auf Mahas Dachterrasse steht die Sonne rund 45 Minuten früher als unten, abends haben wir von allen dreien schon oft den Sonnenuntergang gesehen — und danach den Sternenhimmel.\n\nIm Herbst kommt der Regen zurück — gut für die Vegetation und angenehm nach dem Sommer. Frühling und Herbst sind dann die schönste Zeit, um zu zweit in die Berge über dem Dorf zu gehen. Und weil Frigiliana am Hang liegt, entscheidet im Sommer weniger der Monat als die Uhrzeit.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Hang · Sonne · Schatten' }, { label: 'Reisezeit', value: 'Nach Aktivität wählen' }, { label: 'Tagescheck', value: 'AEMET-Vorhersage' }],
      factorsTitle: 'Warum die Uhrzeit hier zählt', factors: ['Frigiliana liegt rund sechs Kilometer oberhalb von Nerja am Hang. Wie viel kühler es hier ist als unten an der Küste, können wir euch nicht in Zahlen sagen — dafür gibt es keine belastbare Messreihe.', 'Was die Tabelle zeigt, stimmt aber: Der Sommer ist trocken, die kühlere Jahreshälfte bringt den Regen.', 'Und dann ist da der Terral, ein trockener Wind aus dem Landesinneren. Er treibt die Temperatur binnen Stunden nach oben — und macht dabei das Meer kalt: Er schiebt die warme Oberfläche hinaus, von unten kommt kühleres Wasser nach. Im August 2026 fiel das Meer vor Málaga so innerhalb einer Woche um fast 13 Grad, auf 15,9. An Land ging es Richtung 40. Wenn ihr an einem glühenden Tag also ins Wasser geht und es eiskalt ist: Ihr bildet euch das nicht ein.'],
      factorItems: [{ title: 'Steigung und Exposition', text: 'Dieselbe Gasse liegt vormittags im Schatten und nachmittags in voller Sonne.' }, { title: 'Tag und Abend', text: 'Nach Sonnenuntergang kühlt es spürbar ab — auch nach einem heißen Tag.' }, { title: 'Dorf und Küste', text: 'Zum Strand nach Nerja sind es sechs Kilometer bergab. Unten ist es voller, oben ruhiger — und wenn das Meer an so einem Tag nicht einlädt, wartet oben die eigene Terrasse.' }],
      seasonNotes: ['Grünere Umgebung, wechselndes Wetter und mehr nutzbares Tageslicht für längere Wege.', 'Trocken, hell und potenziell heiß; auf steilen oder offenen Wegen zählen die frühen und späten Stunden.', 'Der frühe Herbst kann sommerlich bleiben, bevor Regen im weiteren Verlauf wahrscheinlicher wird.', 'Ruhigere Dorftage, wechselhaftere Bedingungen und kühlere Abende verlangen Flexibilität.'],
      intentNotes: ['Im Sommer habt ihr Strandtage im Überfluss, und Torrecilla in Nerja liegt eine kurze Fahrt entfernt. Zurück im Dorf wartet die Außendusche auf der eigenen Terrasse — welche Bucht wann am angenehmsten ist, steht im Strand-Guide.', 'Frühling und Herbst sind die schönste Zeit für einen langen Tag zu zweit in den Bergen. Auf der Cruz de Pinto und beim Aufstieg zum El Fuerte — 963 Meter, gut vier Stunden — gibt es kaum Schatten, deshalb gehen wir im Sommer früh los und sind mittags zurück. Danach wartet die Terrasse. Der Higuerón führt durchs Flussbett: Von Oktober bis Dezember kann es hier ordentlich regnen, danach ist das eine andere Route. Schaut vorher aufs Wetter oder fragt uns kurz.', 'Im Januar bleiben die Tagesgäste aus. Dann gehört euch das Dorf fast allein — Altstadt, Cafés und Aussichtspunkte in Ruhe.', 'Im Winter haben alle vier Wohnungen Heizung, drei davon einen Pelletofen. Die Tage draußen sind heller, als die meisten erwarten, die Abende kühl — und früh oder nach Einbruch der Dunkelheit gehören die Gassen fast euch allein.'],
      practical: 'Im Sommer geht ihr früh oder spät los, mittags nicht. In der kühleren Jahreshälfte braucht ihr eine Jacke für den Abend und etwas gegen Regen. Und feste Schuhe fürs Dorf: Kopfsteinpflaster und rund 30 Stufen bis zu unserer Tür.'
    },
    es: {
      description: 'Tiempo en Frigiliana mes a mes: clima, estaciones y mejor época para caminar, vivir el pueblo y alojarse con flexibilidad sobre Nerja.',
      lead: 'De la calle a nuestra puerta hay 150 metros, y en ellos 30 metros de desnivel por unos 30 escalones. En julio eso se nota distinto a las dos de la tarde que a las siete. Por eso aquí la hora dice más que el mes.',
      summary: 'Los meses de verano son soleados y de cálidos a calurosos, justo lo que se espera de Andalucía. Las terrazas de Lounis, Zaid y Maha tienen ducha exterior, hamaca y dos tumbonas; en la azotea de Maha el sol llega unos 45 minutos antes que abajo, y desde las tres hemos visto muchas veces la puesta de sol, y después el cielo estrellado.\n\nEn otoño vuelve la lluvia, que la vegetación agradece y que sienta bien tras el verano. Primavera y otoño son entonces la mejor época para subir juntos a la sierra sobre el pueblo. Y como Frigiliana está en una ladera, en verano decide menos el mes que la hora.',
      summaryItems: [{ label: 'Clave local', value: 'Ladera · sol · sombra' }, { label: 'Mejor época', value: 'Según la actividad' }, { label: 'Consulta diaria', value: 'Previsión AEMET' }],
      factorsTitle: 'Por qué aquí cuenta la hora', factors: ['Frigiliana está sobre la costa y en terreno inclinado. Altitud, exposición y sombra orientan la planificación, pero no demuestran una diferencia térmica exacta con Nerja.', 'El patrón duradero es mediterráneo: la parte cálida es mucho más seca y la lluvia resulta más probable en la mitad fresca.', 'Y luego está el terral, ese clásico malagueño: viento seco de tierra adentro que dispara la temperatura en pocas horas — y de paso deja el mar helado, porque empuja el agua caliente de la superficie mar adentro y desde el fondo sube agua fría. En agosto de 2026 el mar frente a Málaga bajó casi 13 grados en una semana, hasta 15,9, mientras tierra adentro se rozaban los 40. Así que si os metéis en el agua un día de calor y está congelada, no es cosa vuestra.'],
      factorItems: [{ title: 'Pendiente y exposición', text: 'Una subida al sol puede sentirse muy distinta de una calle con sombra a la misma hora.' }, { title: 'Día y tarde', text: 'El sol puede dominar el día; tras la puesta, una capa ligera depende de la estación y del viento.' }, { title: 'Pueblo y costa', text: 'Hasta la playa de Nerja hay seis kilómetros cuesta abajo. Abajo hay más gente, arriba más calma — y el día que el mar no apetezca, arriba os espera vuestra propia terraza.' }],
      seasonNotes: ['Entorno más verde, tiempo cambiante y más luz útil para recorridos largos.', 'Seco, luminoso y potencialmente caluroso; importan las primeras y últimas horas.', 'El inicio puede conservar el verano antes de que la lluvia gane probabilidad.', 'Pueblo más tranquilo, condiciones variables y tardes frescas que exigen flexibilidad.'],
      intentNotes: ['En verano tenéis días de playa de sobra, y Torrecilla, en Nerja, queda a un trayecto corto. De vuelta en el pueblo os espera la ducha exterior de vuestra propia terraza; qué cala apetece más y cuándo está en la guía de playas.', 'Primavera y otoño son la mejor época para un día largo en la sierra en pareja. En la Cruz de Pinto y en la subida a El Fuerte — 963 metros, cuatro horas largas — hay poca sombra, así que en verano salimos temprano y volvemos al mediodía. Después espera la terraza. El Higuerón va por el cauce: de octubre a diciembre puede llover de verdad, y después es otra ruta. Mirad el tiempo antes o preguntadnos.', 'En enero no suben los visitantes de día. Entonces el pueblo es casi vuestro: el casco antiguo, los cafés y los miradores con calma.', 'En invierno los cuatro alojamientos tienen calefacción y tres, estufa de pellets. Los días fuera son más luminosos de lo que se espera, las tardes frescas, y temprano o al anochecer las calles son casi vuestras.'],
      practical: 'En verano se sale temprano o al final del día, no al mediodía. En la mitad fría del año hace falta una chaqueta para la tarde y algo para la lluvia. Y calzado firme para el pueblo: adoquines y unos 30 escalones hasta nuestra puerta.'
    },
    nl: {
      description: 'Weer in Frigiliana per maand: klimaat, seizoenen en beste reistijd voor dorpsroutes, uitstapjes en een flexibel verblijf boven Nerja.',
      lead: 'Van de straat tot onze voordeur is het 150 meter — en daarbij 30 hoogtemeters over zo’n 30 treden. In juli merk je dat om twee uur ’s middags anders dan om zeven. Daarom zegt hier het tijdstip vaak meer dan de maand.',
      summary: 'De zomermaanden zijn zonnig en warm tot heet — precies wat je van Andalusië verwacht. Bij de terrassen van Lounis, Zaid en Maha horen een buitendouche, een hangmat en twee ligbedden; op het dakterras van Maha staat de zon zo’n 45 minuten eerder dan beneden, en vanaf alle drie hebben we vaak de zonsondergang gezien — en daarna de sterrenhemel.\n\nIn de herfst komt de regen terug, goed voor de vegetatie en aangenaam na de zomer. Lente en herfst zijn dan de mooiste tijd om samen de bergen boven het dorp in te gaan. En omdat Frigiliana tegen een helling ligt, beslist in de zomer minder de maand dan het uur.',
      summaryItems: [{ label: 'Lokale lens', value: 'Helling · zon · schaduw' }, { label: 'Reistijd', value: 'Kies per activiteit' }, { label: 'Dagcheck', value: 'AEMET-verwachting' }],
      factorsTitle: 'Waarom hier het tijdstip telt', factors: ['Frigiliana ligt boven de kust op hellend terrein. Hoogte, blootstelling en schaduw helpen bij de planning, maar bewijzen geen exact temperatuurverschil met Nerja.', 'Het blijvende patroon is mediterraan: het warme deel van het jaar is veel droger en regen waarschijnlijker in de koelere helft.', 'En dan is er de terral, een droge wind uit het binnenland. Die jaagt de temperatuur in een paar uur omhoog — en maakt tegelijk de zee koud: hij duwt de warme bovenlaag naar open zee, en van onderen komt kouder water omhoog. In augustus 2026 zakte de zee voor Málaga in een week bijna 13 graden, naar 15,9, terwijl het landinwaarts richting de 40 ging. Loop je op een snikhete dag het water in en is het ijskoud, dan verbeeld je je dat niet.'],
      factorItems: [{ title: 'Stijging en blootstelling', text: 'Een open klim kan op hetzelfde uur heel anders voelen dan een steeg in de schaduw.' }, { title: 'Dag en avond', text: 'Sterke zon kan de dag bepalen; na zonsondergang hangt een extra laag af van seizoen en wind.' }, { title: 'Dorp en kust', text: 'Naar het strand in Nerja is het zes kilometer bergaf. Beneden drukker, boven rustiger — en als de zee op zo’n dag niet lokt, wacht boven je eigen terras.' }],
      seasonNotes: ['Groenere omgeving, wisselend weer en meer bruikbaar daglicht voor langere routes.', 'Droog, helder en mogelijk heet; vroege en late uren tellen op steile of open paden.', 'Vroege herfst kan zomers blijven voordat regen later waarschijnlijker wordt.', 'Rustiger dorpsleven, wisselende omstandigheden en koelere avonden vragen flexibiliteit.'],
      intentNotes: ['In de zomer heb je stranddagen in overvloed, en Torrecilla in Nerja ligt op een korte rit. Terug in het dorp wacht de buitendouche op je eigen terras — welke baai wanneer het fijnst is, staat in de strandgids.', 'Lente en herfst zijn de mooiste tijd voor een lange dag samen in de bergen. Op de Cruz de Pinto en bij de klim naar El Fuerte — 963 meter, ruim vier uur — is weinig schaduw, dus in de zomer vertrekken we vroeg en zijn we rond het middaguur terug. Daarna wacht het terras. De Higuerón loopt door de rivierbedding: van oktober tot december kan het hier flink regenen, en daarna is het een andere route. Kijk vooraf naar het weer of vraag het ons even.', 'In januari blijven de dagbezoekers weg. Dan is het dorp bijna van jullie — de oude kern, de cafés en de uitzichtpunten in alle rust.', 'In de winter hebben alle vier de appartementen verwarming en drie een pelletkachel. De dagen buiten zijn helderder dan de meesten verwachten, de avonden koel — en vroeg of na zonsondergang zijn de straatjes bijna van jullie alleen.'],
      practical: 'In de zomer vertrek je vroeg of laat, niet tussen de middag. In de koelere helft van het jaar heb je een jas voor de avond nodig en iets tegen regen. En stevige schoenen voor het dorp: kasseien en zo’n 30 treden tot onze voordeur.'
    },
    sv: {
      description: 'Väder i Frigiliana månad för månad: klimat, årstider och bästa restid för bypromenader, utflykter och en flexibel vistelse ovanför Nerja.',
      lead: 'Från gatan till vår port är det 150 meter — och på dem 30 höjdmeter över ett trettiotal trappsteg. I juli märker ni det annorlunda klockan två på eftermiddagen än klockan sju. Därför säger tiden på dygnet ofta mer här än månaden.',
      summary: 'Sommarmånaderna är soliga och varma till heta — precis som man väntar sig av Andalusien. Till terrasserna hos Lounis, Zaid och Maha hör utedusch, hängmatta och två solsängar; på Mahas takterrass står solen ungefär 45 minuter tidigare än nedanför, och från alla tre har vi ofta sett solnedgången — och stjärnhimlen efter den.\n\nPå hösten kommer regnet tillbaka, bra för växtligheten och skönt efter sommaren. Vår och höst är då den finaste tiden för en lång dag tillsammans i bergen ovanför byn. Och eftersom Frigiliana ligger i en sluttning avgörs sommaren mindre av månaden än av timmen.',
      summaryItems: [{ label: 'Lokalt fokus', value: 'Sluttning · sol · skugga' }, { label: 'Restid', value: 'Välj efter aktivitet' }, { label: 'Dagskontroll', value: 'AEMET-prognos' }],
      factorsTitle: 'Varför timmen räknas här', factors: ['Frigiliana ligger ovanför kusten i lutande terräng. Höjd, exponering och skugga hjälper planeringen men bevisar ingen exakt temperaturskillnad mot Nerja.', 'Det hållbara mönstret är medelhavsklimat: den varma delen är mycket torrare och regn mer sannolikt under den svalare halvan.', 'Och så finns terralen, en torr vind från inlandet. Den driver upp temperaturen på några timmar — och gör samtidigt havet kallt: den pressar ut det varma ytvattnet, och kallare vatten stiger upp underifrån. I augusti 2026 föll havet utanför Málaga nästan 13 grader på en vecka, till 15,9, medan det inåt land gick mot 40. Så om ni går i vattnet en glödhet dag och det är iskallt — ni inbillar er inget.'],
      factorItems: [{ title: 'Lutning och exponering', text: 'En öppen uppförsväg kan kännas helt annorlunda än en skuggig gränd samma timme.' }, { title: 'Dag och kväll', text: 'Stark sol kan dominera dagen; efter solnedgång beror ett extra lager på säsong och vind.' }, { title: 'By och kust', text: 'Till stranden i Nerja är det sex kilometer nedför. Nere är det fullare, uppe lugnare — och den dag havet inte lockar väntar er egen terrass här uppe.' }],
      seasonNotes: ['Grönare omgivning, växlande väder och mer användbart dagsljus för längre stråk.', 'Torrt, ljust och potentiellt hett; tidiga och sena timmar är viktigast på öppna vägar.', 'Tidig höst kan behålla sommarkänslan innan regn blir mer sannolikt.', 'Lugnare bydagar, skiftande förhållanden och svalare kvällar kräver flexibilitet.'],
      intentNotes: ['På sommaren har ni stranddagar i överflöd, och Torrecilla i Nerja ligger en kort bilfärd bort. Tillbaka i byn väntar utduschen på er egen terrass — vilken vik som är skönast när står i strandguiden.', 'Vår och höst är den finaste tiden för en lång dag tillsammans i bergen. På Cruz de Pinto och uppstigningen till El Fuerte — 963 meter, drygt fyra timmar — finns lite skugga, så på sommaren ger vi oss iväg tidigt och är tillbaka vid lunch. Sedan väntar terrassen. Higuerón går genom flodbädden: från oktober till december kan det regna ordentligt här, och efteråt är det en annan rutt. Titta på vädret i förväg, eller fråga oss.', 'I januari uteblir dagsbesökarna. Då är byn nästan er egen — gamla stan, kaféerna och utsiktsplatserna i lugn och ro.', 'På vintern har alla fyra lägenheterna värme och tre av dem pelletskamin. Dagarna ute är ljusare än de flesta väntar sig, kvällarna svala — och tidigt eller efter mörkrets inbrott är gränderna nästan era egna.'],
      practical: 'På sommaren ger ni er iväg tidigt eller sent, inte mitt på dagen. Under årets svalare halva behöver ni en jacka för kvällen och något mot regn. Och stadiga skor för byn: kullersten och ett trettiotal trappsteg upp till vår port.'
    }
  },
  nerja: {
    en: {
      description: 'Nerja weather by month: coastal climate, seasons, sea influence and the best travel time for beaches, walking and a flexible stay.',
      lead: 'On the coast, air, sea and beach conditions do not change on the same timetable. That difference is what shapes a day in Nerja.',
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
      lead: 'An der Küste ändern sich Luft, Meer und Strandbedingungen nicht im selben Takt. Dieser Unterschied macht einen Tag in Nerja aus.',
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
      lead: 'En la costa, el aire, el mar y las condiciones de playa no cambian al mismo ritmo. Esa diferencia marca un día en Nerja.',
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
      lead: 'Aan de kust veranderen lucht, zee en strandcondities niet in hetzelfde tempo. Dat verschil bepaalt een dag in Nerja.',
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
      lead: 'Vid kusten ändras luft, hav och strandförhållanden inte i samma takt. Den skillnaden formar en dag i Nerja.',
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
      lead: 'In Tarifa the wind decides the day, not the season. Levante and Poniente shape everything at the Strait.',
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
      lead: 'In Tarifa entscheidet der Wind den Tag, nicht die Jahreszeit. Levante und Poniente prägen alles an der Meerenge.',
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
      lead: 'En Tarifa el viento decide el día, no la estación. Levante y Poniente lo marcan todo en el Estrecho.',
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
      lead: 'In Tarifa bepaalt de wind de dag, niet het seizoen. Levante en Poniente vormen alles aan de Straat.',
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
      lead: 'I Tarifa avgör vinden dagen, inte årstiden. Levante och Poniente präglar allt vid sundet.',
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

const destinationLiveForecast: Record<AmaraLanguage, WeatherAuthorityContent['forecast']> = {
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

function getDestinationLiveForecast(
  destination: WeatherDestination,
  lang: AmaraLanguage,
  common: SharedLocale
): WeatherAuthorityContent['forecast'] {
  const forecast = destinationLiveForecast[lang];
  if (destination === 'frigiliana') return forecast;

  return {
    eyebrow: common.forecastEyebrow,
    title: common.forecastTitle,
    paragraphs: common.forecastParagraphs,
    cta: common.forecastCta,
    live: forecast.live
  };
}

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
      summaryEyebrow: lang === 'de' ? 'Kurz gesagt' : lang === 'es' ? 'En resumen' : lang === 'nl' ? 'Kort gezegd' : lang === 'sv' ? 'Kort sagt' : 'In short',
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
    forecast: getDestinationLiveForecast(destination, lang, common),
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
    version: `2026-08-28-${destination}-weather-v2.3`,
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
