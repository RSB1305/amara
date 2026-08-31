import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { LinkToken } from '../lib/linkResolver';
import type { LocationGuideIconName } from '../components/location/LocationGuideIcon.astro';
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
const dwdBerlinDailyMaxNormalsUrl = 'https://opendata.dwd.de/climate_environment/CDC/observations_global/CLIMAT/multi_annual/air_temperature_mean_of_daily_max/1991_2020.txt';
const metOfficeLondonNormalsUrl = 'https://www.metoffice.gov.uk/research/climate/maps-and-data/location-specific-long-term-averages/gcpsvg3nc';
const aemetMadridNormalsUrl = 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos?k=&l=3195';
const knmiAmsterdamNormalsUrl = 'https://cdn.knmi.nl/knmi/map/page/klimatologie/klimaatatlas/tabel/stationsdata/klimtab_9120_240.pdf';
const smhiStockholmNormalsUrl = 'https://www.smhi.se/download/18.18f5a56618fc9f08e8313e99/1741339945094/Tmax-1991-2020.xlsx';
const aemetAndalusiaNormalsUrl = 'https://www.aemet.es/es/serviciosclimaticos/datosclimatologicos/valoresclimatologicos';

interface SharedLocale {
  seoTitle: (place: string) => string;
  h1: (place: string) => string;
  h1Sub: string;
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
  closingEyebrow: string;
  primaryLabel: string;
  secondaryLabel: string;
}

const shared: Record<AmaraLanguage, SharedLocale> = {
  en: {
    seoTitle: (place) => `${place} Weather: Climate, Seasons & Best Time to Visit`,
    h1: (place) => `${place} weather`, h1Sub: 'Climate, seasons & best time to visit',
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
    practicalEyebrow: 'On the ground', practicalTitle: 'What the siesta does to your day', practicalIntro: 'The table tells you what a month usually looks like. How a single day actually runs here is another question.', packTitle: 'What to bring', packItems: [],
    forecastEyebrow: 'Current weather', forecastTitle: 'Use AEMET for the actual travel dates', forecastParagraphs: ['The numbers above are long-term averages — useful for deciding which month suits you.', 'For your actual dates, use AEMET’s municipal forecast and warnings. They describe the main settlement, so a beach, a hillside or a sheltered street can still differ.'], forecastCta: 'Open the official AEMET forecast',
    sourcesEyebrow: 'Sources', sourcesTitle: 'Where these figures come from', sourcesIntro: 'The monthly figures come from Climate-Data.org, the daily forecast from AEMET.', sourcesChecked: 'Last checked in August 2026', modelSourceText: 'Monthly baseline for temperature, rainfall and sunshine.', forecastSourceText: 'Official municipal forecast and weather-warning reference.',
    relatedEyebrow: 'What follows from this', relatedTitle: 'What else you will want to know',
    closingEyebrow: 'Also worth knowing', primaryLabel: 'Explore the location guide', secondaryLabel: 'Where in town you sleep'
  },
  de: {
    seoTitle: (place) => `Wetter in ${place}: Klima, Jahreszeiten & beste Reisezeit`,
    h1: (place) => `Wetter in ${place}`, h1Sub: 'Klima, Jahreszeiten & beste Reisezeit',
    eyebrow: (place) => `Wetter & Klima · ${place}`,
    table: {
      eyebrow: 'Klimaprofil für 12 Monate', title: 'Temperatur, Regen und Sonne – Monat für Monat',
      intro: 'Die Tabelle zeigt euch schnell, wie sich das Jahr verändert. Im Sommer plant ihr steile Wege früh oder spät, im Winter gehört eine Jacke für den Abend ins Gepäck. Für eine Rundreise nach Sevilla oder Córdoba sind Frühjahr und Herbst meist angenehmer als der Hochsommer — im Binnenland wird es dann deutlich heißer als an der Küste.',
      labels: { month: 'Monat', high: 'Mittl. Maximum', low: 'Mittl. Minimum', rain: 'Niederschlag', sunHours: 'Sonne / Tag', temperature: 'Mittleres Maximum / Minimum', rainfall: 'Monatsniederschlag', details: 'Monatswerte im Detail' },
      sourceTitle: 'So lest ihr die Monatswerte', sourceText: 'Die Werte kommen von Climate-Data.org und geben euch eine regionale Orientierung für Nerja und Frigiliana. Für eure konkreten Reisetage ergänzt die aktuelle AEMET-Vorhersage dieses langfristige Monatsbild.'
    },
    seasonEyebrow: 'Das Jahr in vier Teilen', seasonTitle: 'Frühling, Sommer, Herbst und Winter', seasonIntro: 'So erleben wir die vier Jahreszeiten hier typischerweise.', seasonPlanningLabel: 'Was euch erwartet',
    seasons: [
      { period: 'März – Mai', title: 'Frühling', planning: 'Über mehrere Tage kann das Wetter noch wechseln. Eine Jacke und etwas gegen Regen gehören dazu.' },
      { period: 'Juni – August', title: 'Sommer', planning: 'Zwischen zwölf und fünf bleibt ihr besser im Schatten. Der Rest des Tages gehört euch.' },
      { period: 'September – November', title: 'Herbst', planning: 'September fühlt sich oft noch sommerlich an, im November wird Regen wahrscheinlicher.' },
      { period: 'Dezember – Februar', title: 'Winter', planning: 'Der Nachmittag kann mild sein und der Abend trotzdem kühl. Eine Jacke lohnt sich.' }
    ],
    bestEyebrow: 'Direkt aus den Monatswerten', bestTitle: 'Was diese Werte für eure Reise bedeuten', bestIntro: 'Aus den Monatswerten ergeben sich vier einfache Reiseideen — für Strandtage, Wege in die Berge, eine Rundreise und einen ruhigen Winter im Dorf.', intentTitles: ['Strand & lange Abende', 'Wandern & Rundreise', 'Ruhigerer Ortsrhythmus', 'Längerer Winteraufenthalt'],
    practicalEyebrow: 'Vor Ort', practicalTitle: 'Was die Siesta mit eurem Tag macht', practicalIntro: 'Die Tabelle sagt euch, wie ein Monat gewöhnlich aussieht. Wie ein einzelner Tag hier abläuft, ist eine andere Frage.', packTitle: 'Was mit muss', packItems: [],
    forecastEyebrow: 'Aktuelles Wetter', forecastTitle: 'Für eure Reisedaten zählt AEMET', forecastParagraphs: ['Die Zahlen oben sind Langzeitmittel — gut für die Frage, welcher Monat zu euch passt.', 'Für eure konkreten Reisedaten nutzt ihr die Gemeindeprognose und die Warnungen von AEMET. Sie gelten für den Hauptort; ein Strand, ein Hang oder eine geschützte Gasse kann davon abweichen.'], forecastCta: 'Amtliche AEMET-Vorhersage öffnen',
    sourcesEyebrow: 'Quellen', sourcesTitle: 'Woher diese Zahlen stammen', sourcesIntro: 'Die Monatswerte kommen von Climate-Data.org, die Tagesvorhersage von AEMET.', sourcesChecked: 'Zuletzt im August 2026 nachgesehen', modelSourceText: 'Monatliche Basiswerte für Temperatur, Niederschlag und Sonne.', forecastSourceText: 'Amtliche Gemeindeprognose und Referenz für Wetterwarnungen.',
    relatedEyebrow: 'Was daraus folgt', relatedTitle: 'Was ihr sonst noch wissen wollt',
    closingEyebrow: 'Auch interessant', primaryLabel: 'Wie der Ort aufgebaut ist', secondaryLabel: 'Wo im Ort ihr wohnt'
  },
  es: {
    seoTitle: (place) => `Tiempo en ${place}: clima, estaciones y mejor época`,
    h1: (place) => `Tiempo en ${place}`, h1Sub: 'Clima, estaciones y mejor época para viajar',
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
    practicalEyebrow: 'Sobre el terreno', practicalTitle: 'Qué le hace la siesta a vuestro día', practicalIntro: 'La tabla os dice cómo suele ser un mes. Cómo transcurre aquí un día concreto es otra cuestión.', packTitle: 'Qué llevar', packItems: [],
    forecastEyebrow: 'Tiempo actual', forecastTitle: 'Para las fechas reales, consultad AEMET', forecastParagraphs: ['Las cifras de arriba son medias a largo plazo: útiles para decidir qué mes encaja.', 'Para vuestras fechas concretas, usad la predicción municipal y los avisos de AEMET. Se refieren al núcleo principal, así que una playa, una ladera o una calle protegida pueden variar.'], forecastCta: 'Abrir la previsión oficial de AEMET',
    sourcesEyebrow: 'Fuentes', sourcesTitle: 'De dónde salen estas cifras', sourcesIntro: 'Los valores mensuales vienen de Climate-Data.org y la previsión diaria de AEMET.', sourcesChecked: 'Revisado por última vez en agosto de 2026', modelSourceText: 'Base mensual de temperatura, lluvia y sol.', forecastSourceText: 'Predicción municipal oficial y referencia para avisos meteorológicos.',
    relatedEyebrow: 'Lo que se sigue de esto', relatedTitle: 'Lo demás que querréis saber',
    closingEyebrow: 'También interesa', primaryLabel: 'Descubrir la guía de ubicación', secondaryLabel: 'En qué parte del pueblo dormís'
  },
  nl: {
    seoTitle: (place) => `Weer in ${place}: klimaat, seizoenen & beste reistijd`,
    h1: (place) => `Weer in ${place}`, h1Sub: 'Klimaat, seizoenen & beste reistijd',
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
    practicalEyebrow: 'Ter plaatse', practicalTitle: 'Wat de siësta met je dag doet', practicalIntro: 'De tabel vertelt je hoe een maand er meestal uitziet. Hoe een enkele dag hier verloopt, is een andere vraag.', packTitle: 'Wat mee moet', packItems: [],
    forecastEyebrow: 'Actueel weer', forecastTitle: 'Gebruik AEMET voor de echte reisdata', forecastParagraphs: ['De cijfers hierboven zijn langjarige gemiddelden — handig om te bepalen welke maand past.', 'Gebruik voor jullie eigen data de gemeentelijke verwachting en waarschuwingen van AEMET. Die gelden voor de hoofdplaats, dus een strand, een helling of een beschutte straat kan afwijken.'], forecastCta: 'Open de officiële AEMET-verwachting',
    sourcesEyebrow: 'Bronnen', sourcesTitle: 'Waar deze cijfers vandaan komen', sourcesIntro: 'De maandwaarden komen van Climate-Data.org, de dagverwachting van AEMET.', sourcesChecked: 'Voor het laatst nagekeken in augustus 2026', modelSourceText: 'Maandelijkse basis voor temperatuur, neerslag en zon.', forecastSourceText: 'Officiële gemeentelijke verwachting en referentie voor weerwaarschuwingen.',
    relatedEyebrow: 'Wat hieruit volgt', relatedTitle: 'Wat je verder wilt weten',
    closingEyebrow: 'Ook interessant', primaryLabel: 'Ontdek de locatiegids', secondaryLabel: 'Waar in de plaats je slaapt'
  },
  sv: {
    seoTitle: (place) => `Väder i ${place}: klimat, årstider & bästa restid`,
    h1: (place) => `Väder i ${place}`, h1Sub: 'Klimat, årstider & bästa restid',
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
    practicalEyebrow: 'På plats', practicalTitle: 'Vad siestan gör med er dag', practicalIntro: 'Tabellen säger hur en månad brukar se ut. Hur en enskild dag faktiskt går här är en annan fråga.', packTitle: 'Vad som ska med', packItems: [],
    forecastEyebrow: 'Aktuellt väder', forecastTitle: 'Använd AEMET för de verkliga resedatumen', forecastParagraphs: ['Siffrorna ovan är långtidsmedelvärden – bra för frågan vilken månad som passar er.', 'För era egna datum använder ni AEMETs kommunprognos och varningar. De gäller huvudorten, så en strand, en sluttning eller en skyddad gata kan skilja sig.'], forecastCta: 'Öppna AEMETs officiella prognos',
    sourcesEyebrow: 'Källor', sourcesTitle: 'Varifrån siffrorna kommer', sourcesIntro: 'Månadsvärdena kommer från Climate-Data.org, dygnsprognosen från AEMET.', sourcesChecked: 'Senast kontrollerat i augusti 2026', modelSourceText: 'Månatliga basvärden för temperatur, nederbörd och sol.', forecastSourceText: 'Officiell kommunprognos och referens för vädervarningar.',
    relatedEyebrow: 'Vad som följer av det här', relatedTitle: 'Vad ni annars vill veta',
    closingEyebrow: 'Också värt att veta', primaryLabel: 'Upptäck platsguiden', secondaryLabel: 'Var i orten ni bor'
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
  practical: string[];
  closingTitle: string;
  closingBody: string;
  sourceText: string;
}

type Profiles = Record<WeatherDestination, Record<AmaraLanguage, DestinationLocale>>;

const profiles: Profiles = {
  frigiliana: {
    en: {
      description: 'Frigiliana weather by month: climate, seasons and the best travel time for walking, village days and a flexible stay in the hills above Nerja.',
      lead: 'It is 150 metres from the street to our front door — and 30 vertical metres over about 30 steps. In July you notice that differently at two in the afternoon than at seven. Which is why the hour of the day often says more here than the month.',
      summary: 'Summers are dry and hot, winters mild with cool evenings, and most of the rain falls in autumn. What matters more than the month here is the hour: Frigiliana sits on a slope, and the same lane lies in shade in the morning and in full sun in the afternoon. On top of that comes the Spanish rhythm — between three and seven the village takes its siesta, and dinner starts from about eight.\n\nFor long walks in the mountains, spring and autumn are best; in summer you set off early and are back by midday. The hours in between belong to the shade — in Lounis, Zaid and Maha, to your own terrace. For your actual days it is the AEMET forecast that counts, not the monthly average.',
      summaryItems: [{ label: 'Local lens', value: 'Hillside · sun · shade' }, { label: 'Best for', value: 'Choose by activity' }, { label: 'Daily check', value: 'AEMET forecast' }],
      factorsTitle: 'Why the hour matters here', factors: ['Frigiliana sits above the coast on sloping terrain. Elevation, exposure and shade provide useful planning context, but they do not prove an exact temperature difference from Nerja.', 'Then there is the terral, a dry wind off the interior. It drives the temperature up within hours — and turns the sea cold while it does: it pushes the warm surface layer out towards open water, and colder water rises from below. In August 2026 the sea off Málaga fell by almost 13 degrees in a week, down to 15.9, while inland it was heading for 40. So if you walk into the water on a scorching day and it is freezing, you are not imagining it.'],
      factorItems: [{ title: 'Slope and exposure', text: 'An open uphill route can feel very different from a shaded lane at the same hour.' }, { title: 'Day and evening', text: 'Strong sun can dominate the day; after sunset, a light layer may still be useful depending on season and wind.' }, { title: 'Village and coast', text: 'It is six kilometres downhill to the beach in Nerja. Busier down there, quieter up here — and on a day when the sea is not inviting, your own terrace is waiting.' }],
      seasonNotes: ['Greener surroundings, changing weather and increasingly useful daylight for longer routes.', 'Dry, bright and potentially hot; early and late hours matter most on steep or exposed paths.', 'Early autumn can retain summer warmth before rain becomes more likely later in the season.', 'Quieter village days, more variable conditions and cooler evenings that reward flexible plans.'],
      intentNotes: ['Summer gives you plenty of beach days, with Torrecilla in Nerja a short drive away. Back in the village, the outdoor shower and your own terrace are waiting. The beach guide helps you choose the right cove for the day, and every apartment has beach towels ready for you.', 'Spring and autumn are ideal for a long day together in the mountains. Cruz de Pinto and the four-hour climb to El Fuerte have little shade, so in summer we leave early and return by midday. The Higuerón follows the riverbed and changes after heavy rain; check the weather first or simply ask us.', 'July makes the difference easy to read: Frigiliana averages 27 degrees, Málaga 31, Granada 34, Sevilla 36 and Córdoba 37. Málaga works well as a day trip. For the Golden Triangle of Granada, Córdoba and Sevilla, spring and autumn give you comfortable hours for the streets, sights and drives between them. In high summer, start sightseeing early and keep the hottest hours for a long lunch.', 'In January the average daytime high is around 12 degrees here and 8 in London. The quieter village, its cafés and viewpoints are then easy to enjoy at your own pace. A cool evening brings you back home, where the winter comforts are ready.'],
      practical: ['Between about three and seven in the afternoon the village takes its siesta. Small shops close, many kitchens too — dinner starts again around half past seven. It is a heat rule: these are the hours when the sun burns hardest and the temperature peaks. That is why everything in Spain shifts back — work and dinner move into the cooler evening.', 'On arrival day that hits you first: come up in the afternoon and you land in the middle of the siesta, with the village shops shut. Either you stop for food in Nerja on the way up, or you leave it and head out in the evening when everything is open again. In Lounis, Zaid and Maha the four hours in between belong to your own terrace anyway.'],
      closingTitle: 'Where you sleep in the village makes a difference',
      closingBody: 'At 27 degrees every step counts double 🙂 Frigiliana is built into the slope: two addresses in the village can sit thirty vertical metres apart, and in July you feel every one of them. Which is why where you stay is not a detail here.',
      sourceText: 'The figures come from Climate-Data.org. The provider returns the same values for Nerja and Frigiliana, so this is a regional picture rather than a village climate. And if you come across the sign in neighbouring Torrox: that “best climate in Europe” comes from a 2008 comparison between Torrox and 21 other Mediterranean coastal towns, commissioned by a company based there. It says little about Europe and nothing about Frigiliana. So you will find no superlatives here, only monthly figures.'
    },
    de: {
      description: 'Wetter in Frigiliana nach Monaten: Klima, Jahreszeiten und beste Reisezeit für Dorfwege, Ausflüge und einen flexiblen Aufenthalt oberhalb von Nerja.',
      lead: 'Von der Straße bis zu unserer Haustür sind es 150 Meter. Der Weg steigt insgesamt 30 Höhenmeter an und hat rund 30 Stufen. Im Juli fühlt sich das um zwei Uhr nachmittags anders an als um sieben. Deshalb sagt hier die Uhrzeit oft mehr als der Monat.',
      summary: 'Der Sommer ist trocken und heiß, der Winter mild mit kühlen Abenden, und der meiste Regen fällt im Herbst. Im Dorf prägt die Uhrzeit euren Tag ebenso stark wie der Monat: Dieselbe Gasse liegt morgens im Schatten und nachmittags in voller Sonne. Zwischen etwa drei und sieben schließen kleine Läden und viele Küchen; gegessen wird später.\n\nFür lange Wege in die Berge sind Frühling und Herbst am angenehmsten. Im Sommer geht ihr früh los und seid mittags zurück. Die heißen Stunden gehören dem Schatten — in Lounis, Zaid und Maha auch der eigenen Terrasse. Für eure konkreten Tage gibt euch die AEMET-Vorhersage die beste Orientierung.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Hang · Sonne · Schatten' }, { label: 'Reisezeit', value: 'Nach Aktivität wählen' }, { label: 'Tagescheck', value: 'AEMET-Vorhersage' }],
      factorsTitle: 'Warum die Uhrzeit hier zählt', factors: ['Frigiliana liegt am Hang, rund sechs Kilometer von Nerja entfernt. Für euren Tag sind Sonne, Schatten und Steigung die hilfreicheren Anhaltspunkte als ein fester Temperaturvergleich mit der Küste.', 'An sehr heißen Terral-Tagen kann das Meer plötzlich erstaunlich kalt sein. Der trockene Wind aus dem Landesinneren drückt warmes Oberflächenwasser hinaus, kühleres Wasser steigt nach. Im August 2026 sank die Wassertemperatur vor Málaga so innerhalb einer Woche um fast 13 Grad, während es landeinwärts auf 40 Grad zuging. Auch bei großer Hitze an Land kann das Badewasser also überraschend kühl sein.'],
      factorItems: [{ title: 'Schatten macht den Unterschied', text: 'Dieselbe Gasse liegt vormittags im Schatten und nachmittags in voller Sonne.' }, { title: 'Nach Sonnenuntergang', text: 'Auch nach einem heißen Tag kann es am Abend spürbar abkühlen.' }, { title: 'Dorf und Küste', text: 'Zum Strand nach Nerja sind es sechs Kilometer bergab. Unten ist es voller, oben ruhiger — und an sehr heißen Tagen wartet zurück im Dorf die eigene Terrasse.' }],
      seasonNotes: ['Die Umgebung ist grüner, das Wetter wechselt noch und die länger werdenden Tage passen gut zu ausgedehnten Wegen.', 'Trocken, hell und heiß: Auf steilen oder offenen Wegen gehören die frühen und späten Stunden euch.', 'Der frühe Herbst kann sich noch wie Sommer anfühlen; später wird Regen wahrscheinlicher.', 'Das Dorf wird ruhiger, die Abende kühler und bei wechselhaftem Wetter lohnt sich ein flexibler Plan.'],
      intentNotes: ['Im Sommer habt ihr viele Strandtage, und Torrecilla in Nerja liegt eine kurze Fahrt entfernt. Zurück im Dorf warten die Außendusche und die eigene Terrasse. Welche Bucht sich für euren Tag anbietet, steht im Strand-Guide. Strandtücher liegen in jedem Apartment für euch bereit.', 'Frühling und Herbst sind ideal für einen langen Tag zu zweit in den Bergen. Auf der Cruz de Pinto und beim gut vierstündigen Aufstieg zum El Fuerte gibt es kaum Schatten. Im Sommer gehen wir deshalb früh los und sind mittags zurück. Der Higuerón führt durchs Flussbett und verändert sich nach starkem Regen; schaut vorher aufs Wetter oder fragt uns kurz.', 'Im Juli wird der Unterschied deutlich: Frigiliana erreicht im Mittel 27 Grad, Málaga 31, Granada 34, Sevilla 36 und Córdoba 37. Málaga passt gut als Tagesausflug. Für das goldene Dreieck aus Granada, Córdoba und Sevilla schenken euch Frühjahr und Herbst angenehme Stunden für Altstadtwege, Besichtigungen und die Fahrten dazwischen. Im Hochsommer legt ihr Besichtigungen früh und die heißesten Stunden in eine lange Mittagspause.', 'Im Januar liegt das durchschnittliche Tageshoch hier bei rund 12 Grad, in Berlin bei rund 3 Grad. Dann wird das Dorf ruhiger und ihr habt Altstadt, Cafés und Aussichtspunkte fast für euch. Nach einem milden Tag draußen kommt ihr am kühlen Abend gern wieder nach Hause.'],
      practical: ['Zwischen etwa drei und sieben Uhr nachmittags schließen im Dorf kleine Läden und viele Küchen. Ab etwa halb acht wird wieder gekocht. Genau in diese Pause fallen meist die heißesten Stunden des Tages — ein guter Moment für Schatten, eine Pause oder die eigene Terrasse.', 'Am Anreisetag ist das ganz praktisch: Kommt ihr am Nachmittag herauf, sind die Läden im Dorf wahrscheinlich geschlossen. Kauft entweder auf dem Weg in Nerja ein oder geht später am Abend los, wenn wieder geöffnet ist. In Lounis, Zaid und Maha könnt ihr die Zeit dazwischen auf der eigenen Terrasse verbringen.'],
      closingTitle: 'Wo im Dorf ihr wohnt, macht den Unterschied',
      closingBody: 'Bei 27 Grad zählt jede Stufe doppelt 🙂 Frigiliana ist an den Hang gebaut: Zwischen zwei Adressen im Dorf liegen schnell dreißig Höhenmeter, und im Juli merkt ihr die. Wo ihr wohnt, entscheidet deshalb spürbar über euren Alltag im Dorf.',
      sourceText: 'Die Werte kommen von Climate-Data.org und geben euch eine regionale Orientierung für Nerja und Frigiliana. Für eure konkreten Reisetage ergänzt die aktuelle AEMET-Vorhersage dieses langfristige Monatsbild.'
    },
    es: {
      description: 'Tiempo en Frigiliana mes a mes: clima, estaciones y mejor época para caminar, vivir el pueblo y alojarse con flexibilidad sobre Nerja.',
      lead: 'De la calle a nuestra puerta hay 150 metros, y en ellos 30 metros de desnivel por unos 30 escalones. En julio eso se nota distinto a las dos de la tarde que a las siete. Por eso aquí la hora dice más que el mes.',
      summary: 'El verano es seco y caluroso, el invierno suave con tardes frescas, y la lluvia cae sobre todo en otoño. Pero aquí importa más la hora que el mes: Frigiliana está en la ladera, y la misma calle queda a la sombra por la mañana y a pleno sol por la tarde. A eso se suma el ritmo español: entre las tres y las siete el pueblo hace la siesta, y se cena a partir de las ocho.\n\nPara las caminatas largas por la sierra, primavera y otoño son lo mejor; en verano se sale temprano y se vuelve al mediodía. Las horas de en medio son para la sombra y, en Lounis, Zaid y Maha, para vuestra propia terraza. Para vuestros días concretos cuenta la previsión de AEMET, no la media mensual.',
      summaryItems: [{ label: 'Clave local', value: 'Ladera · sol · sombra' }, { label: 'Mejor época', value: 'Según la actividad' }, { label: 'Consulta diaria', value: 'Previsión AEMET' }],
      factorsTitle: 'Por qué aquí cuenta la hora', factors: ['Frigiliana está sobre la costa y en terreno inclinado. Altitud, exposición y sombra orientan la planificación, pero no demuestran una diferencia térmica exacta con Nerja.', 'Y luego está el terral, ese clásico malagueño: viento seco de tierra adentro que dispara la temperatura en pocas horas — y de paso deja el mar helado, porque empuja el agua caliente de la superficie mar adentro y desde el fondo sube agua fría. En agosto de 2026 el mar frente a Málaga bajó casi 13 grados en una semana, hasta 15,9, mientras tierra adentro se rozaban los 40. Así que si os metéis en el agua un día de calor y está congelada, no es cosa vuestra.'],
      factorItems: [{ title: 'Pendiente y exposición', text: 'Una subida al sol puede sentirse muy distinta de una calle con sombra a la misma hora.' }, { title: 'Día y tarde', text: 'El sol puede dominar el día; tras la puesta, una capa ligera depende de la estación y del viento.' }, { title: 'Pueblo y costa', text: 'Hasta la playa de Nerja hay seis kilómetros cuesta abajo. Abajo hay más gente, arriba más calma — y el día que el mar no apetezca, arriba os espera vuestra propia terraza.' }],
      seasonNotes: ['Entorno más verde, tiempo cambiante y más luz útil para recorridos largos.', 'Seco, luminoso y potencialmente caluroso; importan las primeras y últimas horas.', 'El inicio puede conservar el verano antes de que la lluvia gane probabilidad.', 'Pueblo más tranquilo, condiciones variables y tardes frescas que exigen flexibilidad.'],
      intentNotes: ['El verano trae muchos días de playa, y Torrecilla, en Nerja, queda a un trayecto corto. Al volver al pueblo os esperan la ducha exterior y vuestra propia terraza. La guía de playas os ayuda a elegir cala para ese día, y todos los apartamentos tienen toallas de playa preparadas.', 'Primavera y otoño son ideales para un día largo juntos en la sierra. La Cruz de Pinto y la subida de algo más de cuatro horas a El Fuerte tienen poca sombra; en verano salimos temprano y volvemos al mediodía. El Higuerón recorre el cauce y cambia tras lluvias fuertes: mirad antes el tiempo o preguntadnos.', 'En julio la diferencia se ve enseguida: Frigiliana ronda los 27 grados, Málaga 31, Granada 34, Sevilla 36 y Córdoba 37. Málaga encaja bien como excursión de un día. Para el triángulo de oro de Granada, Córdoba y Sevilla, primavera y otoño regalan horas agradables para pasear, visitar monumentos y conducir entre las tres ciudades. En pleno verano, empezad temprano las visitas y reservad las horas más calurosas para un almuerzo largo.', 'En enero, la máxima media ronda los 12 grados aquí y los 10 en Madrid. El pueblo está más tranquilo y podéis disfrutar del casco antiguo, los cafés y los miradores con calma. Después de las horas suaves fuera, apetece volver a casa cuando refresca la tarde.'],
      practical: ['Entre las tres y las siete de la tarde, más o menos, el pueblo hace la siesta. Las tiendas pequeñas cierran y muchas cocinas también; por la noche se vuelve a cocinar hacia las ocho menos cuarto. Es una regla del calor: son las horas en que el sol aprieta más y la temperatura llega a su máximo. Por eso en España todo se desplaza hacia atrás: se trabaja y se cena en las horas más frescas.', 'El día de llegada es lo primero que notáis: si subís por la tarde, llegáis en plena siesta y las tiendas del pueblo están cerradas. O hacéis la compra en Nerja de camino, o lo dejáis y salís por la noche, cuando todo vuelve a abrir. En Lounis, Zaid y Maha las cuatro horas de en medio son para vuestra propia terraza.'],
      closingTitle: 'En qué parte del pueblo dormís sí importa',
      closingBody: 'Con 27 grados, cada escalón cuenta doble 🙂 Frigiliana está construida en la ladera: entre dos direcciones del pueblo puede haber treinta metros de desnivel, y en julio se notan todos. Por eso aquí dónde os alojáis no es un detalle menor.',
      sourceText: 'Los datos son de Climate-Data.org. El proveedor da los mismos valores para Nerja y Frigiliana, así que es una imagen regional y no un clima de pueblo. Y si os topáis con el cartel de Torrox: ese “mejor clima de Europa” viene de una comparación de 2008 entre Torrox y otras 21 localidades costeras del Mediterráneo, encargada por una empresa de allí. Dice poco de Europa y nada de Frigiliana. Por eso aquí no hay superlativos, solo valores mensuales.'
    },
    nl: {
      description: 'Weer in Frigiliana per maand: klimaat, seizoenen en beste reistijd voor dorpsroutes, uitstapjes en een flexibel verblijf boven Nerja.',
      lead: 'Van de straat tot onze voordeur is het 150 meter — en daarbij 30 hoogtemeters over zo’n 30 treden. In juli merk je dat om twee uur ’s middags anders dan om zeven. Daarom zegt hier het tijdstip vaak meer dan de maand.',
      summary: 'De zomer is droog en heet, de winter mild met koele avonden, en de regen valt vooral in de herfst. Belangrijker dan de maand is hier het uur: Frigiliana ligt tegen de helling, en dezelfde steeg ligt ’s ochtends in de schaduw en ’s middags in de volle zon. Daar komt het Spaanse ritme bij — tussen drie en zeven houdt het dorp siësta, en er wordt vanaf een uur of acht gegeten.\n\nVoor lange tochten de bergen in zijn lente en herfst het mooist; in de zomer vertrek je vroeg en ben je rond het middaguur terug. De uren daartussen zijn voor de schaduw, in Lounis, Zaid en Maha voor je eigen terras. Voor jullie eigen dagen telt de AEMET-verwachting, niet het maandgemiddelde.',
      summaryItems: [{ label: 'Lokale lens', value: 'Helling · zon · schaduw' }, { label: 'Reistijd', value: 'Kies per activiteit' }, { label: 'Dagcheck', value: 'AEMET-verwachting' }],
      factorsTitle: 'Waarom hier het tijdstip telt', factors: ['Frigiliana ligt boven de kust op hellend terrein. Hoogte, blootstelling en schaduw helpen bij de planning, maar bewijzen geen exact temperatuurverschil met Nerja.', 'En dan is er de terral, een droge wind uit het binnenland. Die jaagt de temperatuur in een paar uur omhoog — en maakt tegelijk de zee koud: hij duwt de warme bovenlaag naar open zee, en van onderen komt kouder water omhoog. In augustus 2026 zakte de zee voor Málaga in een week bijna 13 graden, naar 15,9, terwijl het landinwaarts richting de 40 ging. Loop je op een snikhete dag het water in en is het ijskoud, dan verbeeld je je dat niet.'],
      factorItems: [{ title: 'Stijging en blootstelling', text: 'Een open klim kan op hetzelfde uur heel anders voelen dan een steeg in de schaduw.' }, { title: 'Dag en avond', text: 'Sterke zon kan de dag bepalen; na zonsondergang hangt een extra laag af van seizoen en wind.' }, { title: 'Dorp en kust', text: 'Naar het strand in Nerja is het zes kilometer bergaf. Beneden drukker, boven rustiger — en als de zee op zo’n dag niet lokt, wacht boven je eigen terras.' }],
      seasonNotes: ['Groenere omgeving, wisselend weer en meer bruikbaar daglicht voor langere routes.', 'Droog, helder en mogelijk heet; vroege en late uren tellen op steile of open paden.', 'Vroege herfst kan zomers blijven voordat regen later waarschijnlijker wordt.', 'Rustiger dorpsleven, wisselende omstandigheden en koelere avonden vragen flexibiliteit.'],
      intentNotes: ['De zomer geeft jullie volop stranddagen, en Torrecilla in Nerja ligt op een korte rit. Terug in het dorp wachten de buitendouche en je eigen terras. De strandgids helpt bij het kiezen van een baai voor die dag, en in elk appartement liggen strandlakens voor jullie klaar.', 'Lente en herfst zijn ideaal voor een lange dag samen in de bergen. Op de Cruz de Pinto en tijdens de ruim vier uur durende klim naar El Fuerte is weinig schaduw. In de zomer vertrekken we daarom vroeg en zijn we rond het middaguur terug. De Higuerón volgt de rivierbedding en verandert na stevige regen; bekijk vooraf het weer of vraag het ons.', 'In juli is het verschil helder: Frigiliana haalt gemiddeld 27 graden, Málaga 31, Granada 34, Sevilla 36 en Córdoba 37. Málaga past goed als dagtocht. Voor de Gouden Driehoek van Granada, Córdoba en Sevilla geven lente en herfst jullie aangename uren voor oude straten, bezienswaardigheden en de ritten tussen de steden. Plan in hoogzomer de bezoeken vroeg en gebruik de heetste uren voor een lange lunch.', 'In januari ligt de gemiddelde maximumtemperatuur hier rond 12 graden en in Amsterdam rond 6 graden. Het dorp is dan rustiger en de oude kern, cafés en uitzichtpunten voelen bijna van jullie. Na de zachte uren buiten kom je aan het einde van de middag graag weer thuis.'],
      practical: ['Tussen ongeveer drie en zeven uur ’s middags houdt het dorp siësta. Kleine winkels sluiten, veel keukens ook — ’s avonds wordt er vanaf een uur of half acht weer gekookt. Het is een hitteregel: dit zijn de uren waarop de zon het felst brandt en de temperatuur piekt. Daarom schuift in Spanje alles op — er wordt gewerkt en gegeten in de koelere avonduren.', 'Op de dag van aankomst merk je dat als eerste: kom je ’s middags boven, dan land je midden in de siësta en zijn de winkels in het dorp dicht. Of je doet onderweg in Nerja boodschappen, of je laat het en gaat ’s avonds op pad, als alles weer open is. In Lounis, Zaid en Maha zijn de vier uur daartussen toch voor je eigen terras.'],
      closingTitle: 'Waar je in het dorp slaapt, maakt verschil',
      closingBody: 'Bij 27 graden telt elke trede dubbel 🙂 Frigiliana is tegen de helling gebouwd: tussen twee adressen in het dorp zit al snel dertig meter hoogteverschil, en in juli voel je die allemaal. Daarom is de vraag waar je slaapt hier geen bijzaak.',
      sourceText: 'De cijfers komen van Climate-Data.org. De aanbieder geeft Nerja en Frigiliana dezelfde waarden, dus dit is een regionaal beeld en geen dorpsklimaat. En mocht je het bord in buurgemeente Torrox tegenkomen: dat “beste klimaat van Europa” komt uit een vergelijking uit 2008 tussen Torrox en 21 andere mediterrane kustplaatsen, in opdracht van een bedrijf daar. Over Europa zegt het weinig en over Frigiliana niets. Daarom vind je hier geen superlatieven, alleen maandwaarden.'
    },
    sv: {
      description: 'Väder i Frigiliana månad för månad: klimat, årstider och bästa restid för bypromenader, utflykter och en flexibel vistelse ovanför Nerja.',
      lead: 'Från gatan till vår port är det 150 meter — och på dem 30 höjdmeter över ett trettiotal trappsteg. I juli märker ni det annorlunda klockan två på eftermiddagen än klockan sju. Därför säger tiden på dygnet ofta mer här än månaden.',
      summary: 'Sommaren är torr och het, vintern mild med svala kvällar, och regnet faller framför allt på hösten. Viktigare än månaden är här timmen: Frigiliana ligger i sluttningen, och samma gränd ligger i skugga på morgonen och i full sol på eftermiddagen. Till det kommer den spanska rytmen — mellan tre och sju håller byn siesta, och man äter från åttatiden.\n\nFör långa turer upp i bergen är vår och höst bäst; på sommaren ger ni er iväg tidigt och är tillbaka vid lunch. Timmarna däremellan tillhör skuggan, i Lounis, Zaid och Maha er egen terrass. För era faktiska dagar är det AEMET-prognosen som gäller, inte månadsmedelvärdet.',
      summaryItems: [{ label: 'Lokalt fokus', value: 'Sluttning · sol · skugga' }, { label: 'Restid', value: 'Välj efter aktivitet' }, { label: 'Dagskontroll', value: 'AEMET-prognos' }],
      factorsTitle: 'Varför timmen räknas här', factors: ['Frigiliana ligger ovanför kusten i lutande terräng. Höjd, exponering och skugga hjälper planeringen men bevisar ingen exakt temperaturskillnad mot Nerja.', 'Och så finns terralen, en torr vind från inlandet. Den driver upp temperaturen på några timmar — och gör samtidigt havet kallt: den pressar ut det varma ytvattnet, och kallare vatten stiger upp underifrån. I augusti 2026 föll havet utanför Málaga nästan 13 grader på en vecka, till 15,9, medan det inåt land gick mot 40. Så om ni går i vattnet en glödhet dag och det är iskallt — ni inbillar er inget.'],
      factorItems: [{ title: 'Lutning och exponering', text: 'En öppen uppförsväg kan kännas helt annorlunda än en skuggig gränd samma timme.' }, { title: 'Dag och kväll', text: 'Stark sol kan dominera dagen; efter solnedgång beror ett extra lager på säsong och vind.' }, { title: 'By och kust', text: 'Till stranden i Nerja är det sex kilometer nedför. Nere är det fullare, uppe lugnare — och den dag havet inte lockar väntar er egen terrass här uppe.' }],
      seasonNotes: ['Grönare omgivning, växlande väder och mer användbart dagsljus för längre stråk.', 'Torrt, ljust och potentiellt hett; tidiga och sena timmar är viktigast på öppna vägar.', 'Tidig höst kan behålla sommarkänslan innan regn blir mer sannolikt.', 'Lugnare bydagar, skiftande förhållanden och svalare kvällar kräver flexibilitet.'],
      intentNotes: ['Sommaren ger er gott om stranddagar, och Torrecilla i Nerja ligger en kort bilfärd bort. Tillbaka i byn väntar utduschen och er egen terrass. Strandguiden hjälper er att välja vik för dagen, och badhanddukar finns framlagda i varje lägenhet.', 'Vår och höst är idealiska för en lång dag tillsammans i bergen. På Cruz de Pinto och den drygt fyra timmar långa stigningen till El Fuerte finns lite skugga. På sommaren ger vi oss därför iväg tidigt och är tillbaka vid lunch. Higuerón följer flodbädden och förändras efter kraftigt regn; kontrollera vädret först eller fråga oss.', 'I juli syns skillnaden tydligt: Frigiliana når i genomsnitt 27 grader, Málaga 31, Granada 34, Sevilla 36 och Córdoba 37. Málaga passar bra som dagsutflykt. För Gyllene triangeln Granada, Córdoba och Sevilla ger vår och höst behagliga timmar för gamla kvarter, sevärdheter och bilresorna mellan städerna. Under högsommaren börjar ni besöken tidigt och sparar de hetaste timmarna till en lång lunch.', 'I januari ligger det genomsnittliga dagshögsta på cirka 12 grader här och 1 grad i Stockholm. Byn är då lugnare, och gamla stan, kaféerna och utsiktsplatserna känns nästan som era egna. Efter de milda timmarna ute är det skönt att komma hem när kvällen svalnar.'],
      practical: ['Mellan ungefär tre och sju på eftermiddagen håller byn siesta. Små butiker stänger, många kök också — på kvällen lagas det mat igen från runt halv åtta. Det är en värmeregel: det är timmarna då solen bränner som hårdast och temperaturen når sin topp. Därför skjuts allt bakåt i Spanien — man arbetar och äter under de svalare kvällstimmarna.', 'På ankomstdagen märks det först: kommer ni upp på eftermiddagen landar ni mitt i siestan, och byns butiker är stängda. Antingen handlar ni i Nerja på vägen upp, eller så låter ni det vara och går ut på kvällen när allt öppnat igen. I Lounis, Zaid och Maha tillhör de fyra timmarna däremellan ändå er egen terrass.'],
      closingTitle: 'Var i byn ni bor gör skillnad',
      closingBody: 'Vid 27 grader räknas varje trappsteg dubbelt 🙂 Frigiliana är byggt in i sluttningen: mellan två adresser i byn kan det skilja trettio höjdmeter, och i juli känner ni varenda en. Därför är frågan om var ni bor ingen bisak här.',
      sourceText: 'Siffrorna kommer från Climate-Data.org. Leverantören ger samma värden för Nerja och Frigiliana, så det här är en regional bild och inte ett byklimat. Och om ni stöter på skylten i grannorten Torrox: det “bästa klimatet i Europa” kommer från en jämförelse från 2008 mellan Torrox och 21 andra kustorter vid Medelhavet, beställd av ett företag på orten. Om Europa säger det lite och om Frigiliana ingenting. Därför hittar ni inga superlativ här, bara månadsvärden.'
    }
  },
  nerja: {
    en: {
      description: 'Nerja weather by month: coastal climate, seasons, sea influence and the best travel time for beaches, walking and a flexible stay.',
      lead: 'On the coast, air, sea and beach conditions do not change on the same timetable. That difference is what shapes a day in Nerja.',
      summary: 'On the coast summers are dry and bright, and rain becomes more likely in the cooler half of the year. The sea changes more slowly than the air — a warm afternoon and comfortable swimming water are two different questions here. On the hottest days the sea can even turn surprisingly cold; that is the terral, and it passes.\n\nThe Spanish afternoon rhythm does not apply everywhere on the coast: on the beach the kitchen runs straight through, while in town the restaurants open around seven. AMARA Playa sits on the flat part of town, a few minutes from Torrecilla — beach and dinner are both walkable. For your own days it is the AEMET forecast and the state of the sea that count, not the monthly average.',
      summaryItems: [{ label: 'Local lens', value: 'Coast · sea influence' }, { label: 'Best for', value: 'Beach or town rhythm' }, { label: 'Daily check', value: 'Weather + sea state' }],
      factorsTitle: 'The coast connects air, sea and season — but does not merge them', factors: ['Nerja’s shoreline gives the page a clear maritime focus. Air temperature, sea temperature and sea state are different variables and should be checked separately.', 'The long-term pattern is dry in summer and more changeable in the cooler half. Individual rain events remain impossible to schedule from monthly averages.'],
      factorItems: [{ title: 'Sea influence', text: 'Water changes temperature more slowly than air, so spring warmth does not automatically mean warm swimming water.' }, { title: 'Coastal exposure', text: 'Sun, breeze and shelter can change comfort between a beach, terrace and inland street.' }, { title: 'No Frigiliana shortcut', text: 'The point model returns the same values for coast and hillside, so treat any difference between them as local knowledge rather than data.' }],
      seasonNotes: ['Comfortable walking days can arrive before the sea feels summery.', 'Dry, bright beach weather is common; heat, sun exposure and warm nights still shape the plan.', 'Early autumn may retain useful sea warmth while the town gradually becomes quieter.', 'Milder coastal days alternate with a greater chance of rain and cooler evenings.'],
      intentNotes: ['Long, bright summer days make it easy to pair a morning swim with a slow lunch and an evening by the sea. Choose the beach after checking heat, UV and current sea conditions.', 'Spring and autumn often bring gentler midday heat for the Balcón, old-town streets and coastal paths, leaving space to explore together without rushing.', 'Outside peak summer, calmer streets and beaches make room for unhurried coffee, a seafront walk and spontaneous plans when the forecast shifts.', 'A longer winter stay lets you settle into Nerja’s everyday rhythm. Home comfort and flexibility matter most, with mild coastal days enjoyed as they arrive.'],
      practical: ['On the hottest days the sea here can be surprisingly cold. That is the terral: it pushes the warm surface water out and colder water rises to take its place. It passes, and it is not a sign that anything is wrong. Otherwise Nerja is easy going — unlike the climb up in Frigiliana, AMARA Playa sits on the flat part of town, a few minutes from Torrecilla.', 'On the coast the siesta does not apply everywhere. On the beach the kitchen runs straight through — at Chiringuito Ayo on Burriana from twelve to six, for instance — while in town the restaurants open in the evening, most of them around seven. Come off the beach hungry at half past six and you still have a wait; the 450 metres into town are worth walking after that.'],
      closingTitle: 'Flat does not always mean close',
      closingBody: 'Nerja is easy going on foot, which helps — but not every walk is the same length. From the apartment it is about 450 metres into town, and a few minutes to Torrecilla. Whether you sleep nearer the centre or nearer the water shapes how your day out and back actually feels.',
      sourceText: 'The figures come from Climate-Data.org. The provider returns the same values for Nerja and Frigiliana, so this is a regional picture rather than a village climate. And if you come across the sign in neighbouring Torrox: that “best climate in Europe” comes from a 2008 comparison between Torrox and 21 other Mediterranean coastal towns, commissioned by a company based there. It says little about Europe and nothing about Nerja. So you will find no superlatives here, only monthly figures.'
    },
    de: {
      description: 'Wetter in Nerja nach Monaten: Küstenklima, Jahreszeiten, Meereseinfluss und beste Reisezeit für Strand, Wege und einen flexiblen Aufenthalt.',
      lead: 'An der Küste ändern sich Luft, Meer und Strandbedingungen nicht im selben Takt. Dieser Unterschied macht einen Tag in Nerja aus.',
      summary: 'An der Küste sind die Sommer trocken und hell, im kühleren Halbjahr steigt die Regenwahrscheinlichkeit. Das Meer reagiert langsamer als die Luft — ein warmer Nachmittag und angenehmes Badewasser sind hier zwei verschiedene Fragen. An den heißesten Tagen kann das Meer sogar überraschend kalt werden; das ist der Terral, und er geht vorbei.\n\nDer spanische Nachmittagstakt gilt an der Küste nicht überall: Am Strand läuft die Küche durch, im Ort öffnen die Restaurants erst gegen sieben. AMARA Playa liegt im flachen Teil des Ortes, ein paar Minuten von Torrecilla — Strand und Abendessen sind zu Fuß erreichbar. Für eure eigenen Tage zählen die AEMET-Vorhersage und die Meereslage, nicht der Monatsschnitt.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Küste · Meereseinfluss' }, { label: 'Reisezeit', value: 'Strand- oder Ortsrhythmus' }, { label: 'Tagescheck', value: 'Wetter + Meereslage' }],
      factorsTitle: 'Die Küste verbindet Luft, Meer und Saison – aber setzt sie nicht gleich', factors: ['Nerjas Küste gibt der Seite ihren maritimen Schwerpunkt. Lufttemperatur, Wassertemperatur und Meereszustand sind verschiedene Variablen und werden getrennt betrachtet.', 'Langfristig ist der Sommer trocken, die kühlere Jahreshälfte wechselhafter. Einzelne Regenereignisse lassen sich aus Monatsmitteln nicht terminieren.'],
      factorItems: [{ title: 'Meereseinfluss', text: 'Wasser ändert seine Temperatur langsamer als Luft; Frühlingswärme bedeutet deshalb nicht automatisch warmes Badewasser.' }, { title: 'Exposition an der Küste', text: 'Sonne, Brise und Schutz können den Komfort zwischen Strand, Terrasse und Straße verändern.' }, { title: 'Keine Frigiliana-Abkürzung', text: 'Das Punktmodell liefert für Küste und Hang dieselben Werte – Unterschiede dazwischen sind Ortskenntnis, keine Messgröße.' }],
      seasonNotes: ['Angenehme Tage für Wege können beginnen, bevor sich das Meer sommerlich anfühlt.', 'Trockenes, helles Strandwetter ist häufig; Hitze, Sonne und warme Nächte prägen dennoch den Plan.', 'Der frühe Herbst kann nutzbare Meereswärme bewahren, während der Ort langsam ruhiger wird.', 'Milde Küstentage wechseln mit höherer Regenchance und kühleren Abenden.'],
      intentNotes: ['Lange, helle Sommertage verbinden ein morgendliches Bad ganz leicht mit einem ruhigen Lunch und einem Abend am Meer. Wählt den Strand nach Hitze, UV-Wert und aktueller Meereslage.', 'Frühling und Herbst bringen oft mildere Mittagsstunden für Balcón, Altstadtgassen und Küstenwege – so bleibt Zeit, Nerja gemeinsam und ohne Eile zu entdecken.', 'Außerhalb des Hochsommers schaffen ruhigere Straßen und Strände Raum für einen Kaffee, einen Spaziergang am Meer und spontane Pläne, wenn die Vorhersage wechselt.', 'Bei einem längeren Winteraufenthalt findet ihr in Nerjas Alltagsrhythmus. Wohnkomfort und Flexibilität zählen, während ihr die milden Küstentage nutzt, sobald sie sich zeigen.'],
      practical: ['An den heißesten Tagen kann das Meer hier überraschend kalt sein. Das ist der Terral: Er schiebt das warme Oberflächenwasser hinaus, von unten kommt kühleres nach. Das geht vorbei und ist kein schlechtes Zeichen. Sonst nimmt Nerja es euch leicht — anders als der Anstieg oben in Frigiliana liegt AMARA Playa im flachen Teil des Ortes, ein paar Minuten von Torrecilla.', 'An der Küste gilt die Siesta nicht überall. Am Strand läuft die Küche durch — im Chiringuito Ayo an der Burriana etwa von zwölf bis sechs —, im Ort öffnen die Restaurants erst abends, die meisten gegen sieben. Wer um halb sieben hungrig vom Strand kommt, wartet also noch; die rund 450 Meter in den Ort lohnen sich erst danach.'],
      closingTitle: 'Flach heißt nicht automatisch nah',
      closingBody: 'Nerja lässt sich gut zu Fuß gehen, das macht vieles leichter — aber nicht jeder Weg ist gleich kurz. Vom Apartment sind es rund 450 Meter in den Ort und ein paar Minuten bis Torrecilla. Ob ihr näher am Zentrum oder näher am Wasser wohnt, entscheidet, wie sich euer Tag hin und zurück anfühlt.',
      sourceText: 'Die Werte kommen von Climate-Data.org. Für Nerja und Frigiliana liefert der Anbieter dieselben Zahlen — es ist also ein regionales Bild, kein Ortsklima. Und falls euch das Schild im Nachbarort Torrox begegnet: Das „beste Klima Europas“ stammt aus einem Vergleich von 2008 zwischen Torrox und 21 weiteren Mittelmeerorten, in Auftrag gegeben von einem dort ansässigen Unternehmen. Über Europa sagt das wenig und über Nerja nichts. Deshalb findet ihr hier keine Superlative, sondern Monatswerte.'
    },
    es: {
      description: 'Tiempo en Nerja mes a mes: clima costero, estaciones, influencia del mar y mejor época para playa, paseos y una estancia flexible.',
      lead: 'En la costa, el aire, el mar y las condiciones de playa no cambian al mismo ritmo. Esa diferencia marca un día en Nerja.',
      summary: 'En la costa los veranos son secos y luminosos, y en la mitad fresca del año aumenta la probabilidad de lluvia. El mar reacciona más despacio que el aire: una tarde cálida y un agua agradable son aquí dos preguntas distintas. En los días más calurosos el mar puede quedarse sorprendentemente frío; es el terral, y pasa.\n\nEl ritmo español de la tarde no vale igual en toda la costa: en la playa la cocina no para, mientras que en el pueblo los restaurantes abren hacia las siete. AMARA Playa está en la parte llana del pueblo, a unos minutos de Torrecilla: playa y cena quedan a pie. Para vuestros días cuentan la previsión de AEMET y el estado del mar, no la media mensual.',
      summaryItems: [{ label: 'Clave local', value: 'Costa · influencia marina' }, { label: 'Mejor época', value: 'Playa o ritmo urbano' }, { label: 'Consulta diaria', value: 'Tiempo + estado del mar' }],
      factorsTitle: 'La costa conecta aire, mar y estación, sin confundirlos', factors: ['La costa de Nerja aporta el enfoque marítimo. Temperatura del aire, temperatura del agua y estado del mar son variables diferentes.', 'El verano es seco a largo plazo y la mitad fresca más variable. Las medias mensuales no permiten fechar un episodio de lluvia.'],
      factorItems: [{ title: 'Influencia marina', text: 'El agua cambia más despacio que el aire; el calor primaveral no implica agua cálida.' }, { title: 'Exposición costera', text: 'Sol, brisa y abrigo modifican el confort entre playa, terraza y calle.' }, { title: 'Sin atajos con Frigiliana', text: 'El modelo puntual da los mismos valores para la costa y la ladera: las diferencias entre ambas son conocimiento local, no dato medido.' }],
      seasonNotes: ['Los días cómodos para caminar pueden llegar antes de que el mar parezca veraniego.', 'Tiempo de playa seco y luminoso, con calor, sol y noches templadas en la planificación.', 'El inicio puede conservar calor en el mar mientras el pueblo recupera calma.', 'Días costeros suaves alternan con mayor probabilidad de lluvia y tardes frescas.'],
      intentNotes: ['Los días largos y luminosos del verano permiten unir un baño por la mañana, un almuerzo tranquilo y una tarde junto al mar. Elegid la playa tras consultar calor, UV y estado actual del mar.', 'Primavera y otoño suelen suavizar el mediodía para recorrer el Balcón, las calles del casco antiguo y los caminos costeros juntos y sin prisas.', 'Fuera del verano punta, las calles y playas más tranquilas dejan espacio para un café, un paseo marítimo y planes espontáneos cuando cambia la previsión.', 'Una estancia larga en invierno permite entrar en el ritmo cotidiano de Nerja. El confort de la vivienda y la flexibilidad ayudan a disfrutar los días suaves de costa cuando llegan.'],
      practical: ['En los días más calurosos el mar puede estar sorprendentemente frío. Es el terral: empuja el agua caliente de la superficie mar adentro y desde el fondo sube agua más fría. Pasa, y no es mala señal. Por lo demás Nerja os lo pone fácil: a diferencia de la subida de Frigiliana, AMARA Playa está en la parte llana del pueblo, a pocos minutos de Torrecilla.', 'En la costa la siesta no vale para todo. En la playa la cocina no para — en el Chiringuito Ayo, en Burriana, de doce a seis —, mientras que en el pueblo los restaurantes abren por la noche, la mayoría hacia las siete. Si salís de la playa con hambre a las seis y media, todavía toca esperar; los 450 metros hasta el pueblo compensan después.'],
      closingTitle: 'Llano no siempre quiere decir cerca',
      closingBody: 'Nerja se camina bien, y eso ayuda, pero no todos los trayectos miden lo mismo. Desde el apartamento hay unos 450 metros hasta el pueblo y unos minutos hasta Torrecilla. Dormir más cerca del centro o más cerca del agua cambia cómo se siente el día de ida y vuelta.',
      sourceText: 'Los datos son de Climate-Data.org. El proveedor da los mismos valores para Nerja y Frigiliana, así que es una imagen regional y no un clima de pueblo. Y si os topáis con el cartel de Torrox: ese “mejor clima de Europa” viene de una comparación de 2008 entre Torrox y otras 21 localidades costeras del Mediterráneo, encargada por una empresa de allí. Dice poco de Europa y nada de Nerja. Por eso aquí no hay superlativos, solo valores mensuales.'
    },
    nl: {
      description: 'Weer in Nerja per maand: kustklimaat, seizoenen, invloed van de zee en beste reistijd voor strand, wandelen en een flexibel verblijf.',
      lead: 'Aan de kust veranderen lucht, zee en strandcondities niet in hetzelfde tempo. Dat verschil bepaalt een dag in Nerja.',
      summary: 'Aan de kust zijn de zomers droog en helder, en in de koelere helft van het jaar neemt de kans op regen toe. De zee reageert trager dan de lucht — een warme middag en aangenaam zwemwater zijn hier twee verschillende vragen. Op de heetste dagen kan de zee zelfs verrassend koud worden; dat is de terral, en het gaat voorbij.\n\nHet Spaanse middagritme geldt aan de kust niet overal: op het strand loopt de keuken door, terwijl de restaurants in het stadje pas rond zeven uur opengaan. AMARA Playa ligt in het vlakke deel van de plaats, een paar minuten van Torrecilla — strand en diner zijn allebei te belopen. Voor jullie eigen dagen tellen de AEMET-verwachting en de zeecondities, niet het maandgemiddelde.',
      summaryItems: [{ label: 'Lokale lens', value: 'Kust · invloed van zee' }, { label: 'Reistijd', value: 'Strand- of dorpsritme' }, { label: 'Dagcheck', value: 'Weer + toestand zee' }],
      factorsTitle: 'De kust verbindt lucht, zee en seizoen zonder ze gelijk te stellen', factors: ['Nerja’s kust geeft de pagina haar maritieme focus. Luchttemperatuur, watertemperatuur en toestand van de zee zijn verschillende variabelen.', 'De zomer is op lange termijn droog en het koelere deel wisselvalliger. Maandgemiddelden plannen geen losse regenbui.'],
      factorItems: [{ title: 'Invloed van de zee', text: 'Water verandert langzamer dan lucht; lentewarmte betekent niet automatisch warm zwemwater.' }, { title: 'Blootstelling aan de kust', text: 'Zon, bries en beschutting veranderen het comfort tussen strand, terras en straat.' }, { title: 'Geen Frigiliana-snelkoppeling', text: 'Identieke puntwaarden bewijzen geen gelijk lokaal klimaat aan kust en helling.' }],
      seasonNotes: ['Comfortabele wandeldagen kunnen beginnen voordat de zee zomers aanvoelt.', 'Droog en helder strandweer is gebruikelijk; hitte, zon en warme nachten blijven relevant.', 'Vroege herfst kan zeewarmte vasthouden terwijl het rustiger wordt.', 'Zachte kustdagen wisselen af met meer kans op regen en koelere avonden.'],
      intentNotes: ['Lange, lichte zomerdagen verbinden een ochtendduik vanzelf met een rustige lunch en een avond aan zee. Kies het strand nadat jullie hitte, UV en actuele zeecondities hebben bekeken.', 'Lente en herfst brengen vaak zachtere middagwarmte voor het Balcón, de oude straten en kustroutes, zodat jullie samen zonder haast op pad kunnen.', 'Buiten hoogzomer geven rustigere straten en stranden ruimte voor koffie, een wandeling langs zee en spontane plannen wanneer de verwachting verandert.', 'Tijdens een langer winterverblijf komen jullie in het dagelijkse ritme van Nerja. Wooncomfort en flexibiliteit tellen, terwijl zachte kustdagen worden benut zodra ze zich aandienen.'],
      practical: ['Op de heetste dagen kan de zee hier verrassend koud zijn. Dat is de terral: die duwt het warme oppervlaktewater naar buiten en van onderen komt koeler water omhoog. Het gaat voorbij en het is geen slecht teken. Verder maakt Nerja het je makkelijk — anders dan de klim in Frigiliana ligt AMARA Playa in het vlakke deel van het dorp, een paar minuten van Torrecilla.', 'Aan de kust geldt de siësta niet overal. Op het strand loopt de keuken door — bij Chiringuito Ayo op Burriana bijvoorbeeld van twaalf tot zes —, terwijl de restaurants in het stadje pas ’s avonds opengaan, de meeste rond zeven uur. Kom je om half zeven hongerig van het strand, dan is het nog even wachten; de 450 meter naar het centrum lonen daarna.'],
      closingTitle: 'Vlak betekent niet vanzelf dichtbij',
      closingBody: 'Nerja loopt prettig, dat scheelt — maar niet elke wandeling is even lang. Vanaf het appartement is het zo’n 450 meter naar het centrum en een paar minuten naar Torrecilla. Of je dichter bij het centrum of dichter bij het water slaapt, bepaalt hoe je dag heen en terug aanvoelt.',
      sourceText: 'De cijfers komen van Climate-Data.org. De aanbieder geeft Nerja en Frigiliana dezelfde waarden, dus dit is een regionaal beeld en geen dorpsklimaat. En mocht je het bord in buurgemeente Torrox tegenkomen: dat “beste klimaat van Europa” komt uit een vergelijking uit 2008 tussen Torrox en 21 andere mediterrane kustplaatsen, in opdracht van een bedrijf daar. Over Europa zegt het weinig en over Nerja niets. Daarom vind je hier geen superlatieven, alleen maandwaarden.'
    },
    sv: {
      description: 'Väder i Nerja månad för månad: kustklimat, årstider, havspåverkan och bästa restid för strand, promenader och flexibel vistelse.',
      lead: 'Vid kusten ändras luft, hav och strandförhållanden inte i samma takt. Den skillnaden formar en dag i Nerja.',
      summary: 'Vid kusten är somrarna torra och ljusa, och under den svalare halvan av året ökar risken för regn. Havet reagerar långsammare än luften — en varm eftermiddag och behagligt badvatten är två olika frågor här. De hetaste dagarna kan havet till och med bli förvånansvärt kallt; det är terralen, och den går över.\n\nDen spanska eftermiddagsrytmen gäller inte överallt vid kusten: på stranden går köket utan uppehåll, medan restaurangerna inne i stan öppnar vid sjutiden. AMARA Playa ligger på den flacka delen av orten, några minuter från Torrecilla — både strand och middag når ni till fots. För era egna dagar är det AEMET-prognosen och havsläget som gäller, inte månadsmedelvärdet.',
      summaryItems: [{ label: 'Lokalt fokus', value: 'Kust · havspåverkan' }, { label: 'Restid', value: 'Strand- eller ortsrytm' }, { label: 'Dagskontroll', value: 'Väder + havsläge' }],
      factorsTitle: 'Kusten förbinder luft, hav och säsong utan att blanda ihop dem', factors: ['Nerjas kust ger sidan dess maritima fokus. Lufttemperatur, vattentemperatur och havstillstånd är olika variabler.', 'Sommaren är långsiktigt torr och den svalare delen mer omväxlande. Månadsmedel kan inte schemalägga en regnskur.'],
      factorItems: [{ title: 'Havspåverkan', text: 'Vatten ändrar temperatur långsammare än luft; vårvärme betyder inte automatiskt varmt badvatten.' }, { title: 'Kustexponering', text: 'Sol, bris och skydd ändrar komforten mellan strand, terrass och gata.' }, { title: 'Ingen genväg via Frigiliana', text: 'Identiska punktvärden bevisar inte samma lokala klimat vid kust och sluttning.' }],
      seasonNotes: ['Behagliga promenaddagar kan komma innan havet känns somrigt.', 'Torrt och ljust strandväder är vanligt; hetta, sol och varma nätter påverkar planen.', 'Tidig höst kan behålla havsvärme samtidigt som orten blir lugnare.', 'Milda kustdagar växlar med större chans för regn och svalare kvällar.'],
      intentNotes: ['Långa, ljusa sommardagar gör det enkelt att förena ett morgondopp med en lugn lunch och en kväll vid havet. Välj strand efter aktuell hetta, UV-nivå och havsläge.', 'Vår och höst ger ofta mildare middagsvärme för Balcón, gamla stans gränder och kuststråk, så att ni kan upptäcka Nerja tillsammans utan brådska.', 'Utanför högsommaren ger lugnare gator och stränder utrymme för kaffe, en promenad längs havet och spontana planer när prognosen skiftar.', 'En längre vintervistelse låter er komma in i Nerjas vardagsrytm. Boendekomfort och flexibilitet är viktigast, medan milda kustdagar tas till vara när de kommer.'],
      practical: ['De hetaste dagarna kan havet här vara förvånansvärt kallt. Det är terralen: den pressar ut det varma ytvattnet och kallare vatten stiger upp underifrån. Det går över och är inget dåligt tecken. I övrigt gör Nerja det lätt för er — till skillnad från backen uppe i Frigiliana ligger AMARA Playa på den flacka delen av orten, några minuter från Torrecilla.', 'Vid kusten gäller siestan inte överallt. På stranden går köket utan uppehåll — på Chiringuito Ayo vid Burriana till exempel från tolv till sex — medan restaurangerna inne i stan öppnar på kvällen, de flesta vid sjutiden. Kommer ni hungriga från stranden vid halv sju får ni vänta en stund till; de dryga 450 meterna in till stan lönar sig efter det.'],
      closingTitle: 'Platt betyder inte automatiskt nära',
      closingBody: 'Nerja är lätt att gå i, vilket hjälper — men alla sträckor är inte lika långa. Från lägenheten är det cirka 450 meter in till stan och några minuter till Torrecilla. Om ni bor närmare centrum eller närmare vattnet avgör hur dagen fram och tillbaka känns.',
      sourceText: 'Siffrorna kommer från Climate-Data.org. Leverantören ger samma värden för Nerja och Frigiliana, så det här är en regional bild och inte ett byklimat. Och om ni stöter på skylten i grannorten Torrox: det “bästa klimatet i Europa” kommer från en jämförelse från 2008 mellan Torrox och 21 andra kustorter vid Medelhavet, beställd av ett företag på orten. Om Europa säger det lite och om Nerja ingenting. Därför hittar ni inga superlativ här, bara månadsvärden.'
    }
  },
  tarifa: {
    en: {
      description: 'Tarifa weather by month: climate, seasons, Levante, Poniente and the best travel time for beaches, exploring and a flexible Strait stay.',
      lead: 'In Tarifa the wind decides the day, not the season. Levante and Poniente shape everything at the Strait.',
      summary: 'In Tarifa it is the wind that decides, not the temperature. Summers are dry and bright and winter brings more rain and passing fronts — but an open beach changes completely with Levante or Poniente, whatever the thermometer says. Which stretch of coast works on a given day therefore depends on the direction: what is too much on the open Atlantic can be exactly right in a sheltered cove.\n\nThe Spanish clock helps here — the late afternoon goes quiet and dinner happens late, so a long afternoon at the beach costs you no evening. For your day it is the AEMET forecast and the current wind that count. Ask us in the morning and we will tell you where the shelter is.',
      summaryItems: [{ label: 'Local lens', value: 'Strait · Atlantic · wind' }, { label: 'Wind names', value: 'Levante · Poniente' }, { label: 'Daily check', value: 'Forecast + wind' }],
      factorsTitle: 'The Strait makes wind part of ordinary travel planning', factors: ['Tarifa sits where Atlantic and Mediterranean contexts meet. The Strait helps explain a strongly maritime, exposed setting, but conditions still vary by day and place.', 'Levante is the easterly wind and Poniente the westerly name travellers hear most often. Neither name guarantees a fixed force, temperature or beach experience.'],
      factorItems: [{ title: 'Strait and Atlantic', text: 'Passing systems, marine air and exposure create a more changeable feel than a temperature table alone suggests.' }, { title: 'Levante and Poniente', text: 'Direction matters to comfort, but strength and local shelter must be checked for the day.' }, { title: 'General guide, not spot advice', text: 'Technical watersports and beach-safety decisions belong with current specialist information.' }],
      seasonNotes: ['Longer days and mixed conditions suit flexible combinations of town, coast and landscape.', 'Dry and bright, with sun and wind both central to beach comfort.', 'September may still feel summery before rain and Atlantic variability become more prominent.', 'Mild in coastal terms, but more exposed to rain, fronts and changing wind.'],
      intentNotes: ['Summer’s dry, bright rhythm gives you long hours between beach and town. Check the current wind first, then choose the shore whose shelter suits the day.', 'Spring and autumn invite days that move between old town, coast and landscape. Keeping those options interchangeable turns changing wind into a choice rather than a disruption.', 'Outside peak summer, Tarifa’s quieter streets leave room for a slow lunch, a walk by the walls and an evening together; let the forecast decide which comes first.', 'A longer winter stay brings everyday Tarifa into view. The dedicated guide helps you choose home comfort and routines while flexible days follow fronts and clearer intervals.'],
      practical: ['In Tarifa the wind decides, not the temperature — it is why the kitesurfers come. Which beach works on a given day hangs on the direction: what is too much on the open Atlantic can be exactly right in a sheltered cove. And on the day you would rather not go out at all, the supermarket is directly opposite.', 'The siesta holds here too: the late afternoon goes quiet, dinner happens late. Mostly that means a long afternoon at the beach costs you no evening — the kitchens only get going once you are back anyway.'],
      closingTitle: 'Shelter is a question of address',
      closingBody: 'In Tarifa it is not distance that decides but orientation: the same street can be uncomfortable in a Levante and calm in a Poniente. Where you stay therefore sets how much wind belongs to your everyday — and how short the way back is when it picks up.',
      sourceText: 'The figures come from Climate-Data.org and describe the yearly pattern at the Strait. What the table does not show is the wind — and in Tarifa the wind decides a day more than any temperature figure does. So you will find monthly values here rather than superlatives; for the wind on your own days there is the forecast.'
    },
    de: {
      description: 'Wetter in Tarifa nach Monaten: Klima, Jahreszeiten, Levante, Poniente und beste Reisezeit für Strand, Ausflüge und flexible Tage an der Meerenge.',
      lead: 'In Tarifa entscheidet der Wind den Tag, nicht die Jahreszeit. Levante und Poniente prägen alles an der Meerenge.',
      summary: 'In Tarifa entscheidet der Wind, nicht die Temperatur. Der Sommer ist trocken und hell, im Winter nehmen Regen und durchziehende Fronten zu — aber ein offener Strand verändert sich mit Levante oder Poniente völlig, egal was das Thermometer sagt. Welcher Küstenabschnitt an einem Tag funktioniert, hängt deshalb an der Windrichtung: Was am offenen Atlantik zu viel ist, kann in einer geschützten Bucht genau richtig sein.\n\nDie spanische Uhr hilft dabei — am späten Nachmittag wird es ruhig und gegessen wird spät, ein langer Strandnachmittag kostet also keinen Abend. Für euren Tag zählen die AEMET-Vorhersage und der aktuelle Wind. Fragt uns morgens kurz, dann sagen wir euch, wo an dem Tag Schutz ist.',
      summaryItems: [{ label: 'Lokaler Fokus', value: 'Meerenge · Atlantik · Wind' }, { label: 'Windnamen', value: 'Levante · Poniente' }, { label: 'Tagescheck', value: 'Vorhersage + Wind' }],
      factorsTitle: 'An der Meerenge gehört Wind zur normalen Reiseplanung', factors: ['Tarifa liegt im Übergang von atlantischem und mediterranem Kontext. Die Meerenge erklärt die maritime, exponierte Lage; die Bedingungen unterscheiden sich dennoch nach Tag und Ort.', 'Levante bezeichnet den Ostwind, Poniente den Westwind. Keiner der Namen garantiert feste Stärke, Temperatur oder Strandkomfort.'],
      factorItems: [{ title: 'Meerenge und Atlantik', text: 'Durchziehende Systeme, Meeresluft und Exposition erzeugen mehr Wechsel, als eine Temperaturtabelle zeigt.' }, { title: 'Levante und Poniente', text: 'Die Richtung prägt den Komfort; Stärke und örtlicher Schutz müssen tagesaktuell geprüft werden.' }, { title: 'Allgemeiner Guide, keine Spot-Beratung', text: 'Technische Wassersport- und Sicherheitsentscheidungen gehören zu aktuellen Spezialinformationen.' }],
      seasonNotes: ['Längere Tage und gemischte Bedingungen eignen sich für flexible Kombinationen aus Ort, Küste und Landschaft.', 'Trocken und hell; für den Strandkomfort zählen Sonne und Wind gemeinsam.', 'September kann sommerlich bleiben, bevor Regen und atlantische Wechselhaftigkeit zunehmen.', 'Für Küstenverhältnisse mild, aber stärker von Regen, Fronten und Windwechseln geprägt.'],
      intentNotes: ['Der trockene, helle Sommerrhythmus schenkt euch lange Stunden zwischen Strand und Ort. Prüft zuerst den aktuellen Wind und wählt dann den Küstenabschnitt, dessen Schutz zum Tag passt.', 'Frühling und Herbst laden zu Tagen zwischen Altstadt, Küste und Landschaft ein. Wenn diese Optionen austauschbar bleiben, wird wechselnder Wind zur Wahl statt zur Störung.', 'Außerhalb des Hochsommers lassen Tarifas ruhigere Gassen Raum für einen langen Lunch, einen Weg an der Mauer und einen gemeinsamen Abend; die Vorhersage bestimmt nur die Reihenfolge.', 'Ein längerer Winteraufenthalt zeigt euch Tarifas Alltag. Der eigene Guide hilft bei Wohnkomfort und Routinen, während flexible Tage den Fronten und helleren Phasen folgen.'],
      practical: ['In Tarifa entscheidet der Wind, nicht die Temperatur — deshalb kommen die Kitesurfer. Welcher Strand an einem Tag funktioniert, hängt an der Richtung: Was am offenen Atlantik zu viel ist, kann in einer geschützten Bucht genau richtig sein. Und an dem Tag, an dem ihr gar nicht raus wollt, liegt der Supermarkt direkt gegenüber.', 'Auch hier gilt die Siesta: Am späten Nachmittag wird es ruhig, gegessen wird spät. Für euch heißt das vor allem, dass ein langer Strandnachmittag keinen Abend kostet — die Küchen fangen ohnehin erst an, wenn ihr zurück seid.'],
      closingTitle: 'Windschatten ist eine Frage der Adresse',
      closingBody: 'In Tarifa entscheidet nicht die Entfernung, sondern die Ausrichtung: Dieselbe Straße kann bei Levante ungemütlich und bei Poniente ruhig sein. Wo ihr wohnt, bestimmt deshalb, wie viel Wind zu eurem Alltag gehört — und wie kurz der Weg zurück ist, wenn er auffrischt.',
      sourceText: 'Die Werte kommen von Climate-Data.org und beschreiben das Jahresmuster an der Meerenge. Was die Tabelle nicht abbildet, ist der Wind — und der entscheidet in Tarifa mehr über einen Tag als jede Temperaturzahl. Deshalb findet ihr hier Monatswerte statt Superlative; für den Wind an euren Tagen gibt es die Vorhersage.'
    },
    es: {
      description: 'Tiempo en Tarifa mes a mes: clima, estaciones, Levante, Poniente y mejor época para playa, excursiones y días flexibles junto al Estrecho.',
      lead: 'En Tarifa el viento decide el día, no la estación. Levante y Poniente lo marcan todo en el Estrecho.',
      summary: 'En Tarifa manda el viento, no la temperatura. El verano es seco y luminoso y en invierno aumentan la lluvia y los frentes, pero una playa abierta cambia por completo con Levante o Poniente, diga lo que diga el termómetro. Qué tramo de costa funciona cada día depende de la dirección: lo que en el Atlántico abierto es demasiado puede ser perfecto en una cala resguardada.\n\nEl reloj español ayuda: la tarde se queda tranquila y se cena tarde, así que una tarde larga de playa no os quita la noche. Para vuestro día cuentan la previsión de AEMET y el viento del momento. Preguntadnos por la mañana y os decimos dónde hay abrigo.',
      summaryItems: [{ label: 'Clave local', value: 'Estrecho · Atlántico · viento' }, { label: 'Vientos', value: 'Levante · Poniente' }, { label: 'Consulta diaria', value: 'Previsión + viento' }],
      factorsTitle: 'En el Estrecho, el viento forma parte de la planificación normal', factors: ['Tarifa se sitúa entre contextos atlántico y mediterráneo. El Estrecho explica su exposición marítima, pero las condiciones varían según día y lugar.', 'Levante es el viento del este y Poniente el del oeste. Ningún nombre garantiza fuerza, temperatura o confort fijo.'],
      factorItems: [{ title: 'Estrecho y Atlántico', text: 'Sistemas, aire marino y exposición crean más variación de la que muestra una tabla térmica.' }, { title: 'Levante y Poniente', text: 'La dirección importa, pero fuerza y abrigo local deben comprobarse cada día.' }, { title: 'Guía general, no consejo de spot', text: 'Deporte acuático y seguridad requieren información técnica y actual.' }],
      seasonNotes: ['Días largos y condiciones mixtas para combinar con flexibilidad pueblo, costa y paisaje.', 'Seco y luminoso, con sol y viento juntos en el confort de playa.', 'Septiembre puede seguir veraniego antes de aumentar lluvia y variabilidad atlántica.', 'Suave para la costa, pero más expuesto a lluvia, frentes y cambios de viento.'],
      intentNotes: ['El ritmo seco y luminoso del verano ofrece muchas horas entre playa y pueblo. Consultad primero el viento actual y elegid después la costa cuyo abrigo encaje con el día.', 'Primavera y otoño invitan a pasar del casco antiguo a la costa y al paisaje. Mantener esas opciones intercambiables convierte el cambio de viento en una elección, no en una interrupción.', 'Fuera del verano punta, las calles tranquilas de Tarifa dejan espacio para un almuerzo largo, un paseo junto a la muralla y una tarde juntos; la previsión solo decide el orden.', 'Una estancia larga en invierno descubre la Tarifa cotidiana. La guía específica ayuda con el confort de la vivienda y las rutinas mientras los días flexibles siguen los frentes y los claros.'],
      practical: ['En Tarifa manda el viento, no la temperatura: por eso vienen los kitesurfistas. Qué playa funciona cada día depende de la dirección; lo que en el Atlántico abierto es demasiado puede ser perfecto en una cala resguardada. Y el día que no os apetezca salir, el supermercado está justo enfrente.', 'Aquí también rige la siesta: la tarde se queda tranquila y se cena tarde. Para vosotros eso significa sobre todo que una tarde larga de playa no os quita la noche: las cocinas arrancan cuando ya habéis vuelto.'],
      closingTitle: 'El abrigo es cuestión de dirección',
      closingBody: 'En Tarifa no decide la distancia sino la orientación: la misma calle puede ser incómoda con Levante y tranquila con Poniente. Dónde os alojáis marca por tanto cuánto viento forma parte de vuestro día a día, y lo corto que es el camino de vuelta cuando arrecia.',
      sourceText: 'Los datos son de Climate-Data.org y describen el patrón anual en el Estrecho. Lo que la tabla no muestra es el viento, y en Tarifa el viento decide un día más que cualquier cifra de temperatura. Por eso aquí hay valores mensuales y no superlativos; para el viento de vuestros días está la previsión.'
    },
    nl: {
      description: 'Weer in Tarifa per maand: klimaat, seizoenen, Levante, Poniente en beste reistijd voor strand, uitstapjes en flexibele dagen aan de Straat.',
      lead: 'In Tarifa bepaalt de wind de dag, niet het seizoen. Levante en Poniente vormen alles aan de Straat.',
      summary: 'In Tarifa beslist de wind, niet de temperatuur. De zomer is droog en helder en in de winter nemen regen en passerende fronten toe — maar een open strand verandert volledig met Levante of Poniente, wat de thermometer ook zegt. Welk stuk kust op een dag werkt, hangt dus van de richting af: wat op de open Atlantische Oceaan te veel is, kan in een beschutte baai precies goed zijn.\n\nDe Spaanse klok helpt daarbij — laat in de middag wordt het rustig en er wordt laat gegeten, dus een lange strandmiddag kost je geen avond. Voor jullie dag tellen de AEMET-verwachting en de actuele wind. Vraag het ons ’s ochtends, dan zeggen we waar de beschutting zit.',
      summaryItems: [{ label: 'Lokale lens', value: 'Straat · Atlantisch · wind' }, { label: 'Windnamen', value: 'Levante · Poniente' }, { label: 'Dagcheck', value: 'Verwachting + wind' }],
      factorsTitle: 'Aan de Straat hoort wind bij gewone reisplanning', factors: ['Tarifa ligt waar Atlantische en mediterrane context samenkomen. De Straat verklaart de maritieme blootstelling, maar omstandigheden verschillen per dag en plek.', 'Levante is de oostenwind en Poniente de westenwind. Geen van beide namen garandeert vaste kracht, temperatuur of strandcomfort.'],
      factorItems: [{ title: 'Straat en Atlantische Oceaan', text: 'Fronten, zeelucht en blootstelling geven meer variatie dan een temperatuurtabel toont.' }, { title: 'Levante en Poniente', text: 'Richting beïnvloedt comfort; kracht en lokale beschutting moeten actueel worden bekeken.' }, { title: 'Algemene gids, geen spotadvies', text: 'Technische watersport- en veiligheidskeuzes horen bij actuele specialistische informatie.' }],
      seasonNotes: ['Langere dagen en gemengde omstandigheden voor flexibele combinaties van stad, kust en landschap.', 'Droog en helder, met zon en wind samen bepalend voor strandcomfort.', 'September kan zomers blijven voordat regen en Atlantische wisselvalligheid toenemen.', 'Mild voor de kust, maar meer blootgesteld aan regen, fronten en veranderende wind.'],
      intentNotes: ['Het droge, lichte zomerritme geeft jullie lange uren tussen strand en stad. Bekijk eerst de actuele wind en kies daarna de kust waarvan de beschutting bij de dag past.', 'Lente en herfst nodigen uit tot dagen tussen oude stad, kust en landschap. Als die opties uitwisselbaar blijven, wordt veranderende wind een keuze in plaats van een onderbreking.', 'Buiten hoogzomer laten Tarifas rustigere straten ruimte voor een lange lunch, een wandeling langs de muren en een avond samen; de verwachting bepaalt alleen de volgorde.', 'Een langer winterverblijf brengt het dagelijkse Tarifa in beeld. De aparte gids helpt met wooncomfort en routines, terwijl flexibele dagen fronten en heldere perioden volgen.'],
      practical: ['In Tarifa beslist de wind, niet de temperatuur — daarom komen de kitesurfers. Welk strand op een dag werkt, hangt van de richting af: wat op de open Atlantische Oceaan te veel is, kan in een beschutte baai precies goed zijn. En op de dag dat je helemaal niet naar buiten wilt, ligt de supermarkt recht tegenover.', 'Ook hier geldt de siësta: laat in de middag wordt het rustig, er wordt laat gegeten. Voor jullie betekent dat vooral dat een lange strandmiddag geen avond kost — de keukens beginnen toch pas als jullie terug zijn.'],
      closingTitle: 'Beschutting is een kwestie van adres',
      closingBody: 'In Tarifa beslist niet de afstand maar de ligging: dezelfde straat kan bij Levante ongemakkelijk zijn en bij Poniente rustig. Waar je verblijft bepaalt dus hoeveel wind bij je dagelijks leven hoort — en hoe kort de weg terug is als hij aantrekt.',
      sourceText: 'De cijfers komen van Climate-Data.org en beschrijven het jaarpatroon bij de Straat. Wat de tabel niet laat zien is de wind — en in Tarifa bepaalt de wind een dag meer dan welk temperatuurcijfer ook. Daarom vind je hier maandwaarden en geen superlatieven; voor de wind op jullie eigen dagen is er de verwachting.'
    },
    sv: {
      description: 'Väder i Tarifa månad för månad: klimat, årstider, Levante, Poniente och bästa restid för strand, utflykter och flexibla dagar vid sundet.',
      lead: 'I Tarifa avgör vinden dagen, inte årstiden. Levante och Poniente präglar allt vid sundet.',
      summary: 'I Tarifa är det vinden som avgör, inte temperaturen. Sommaren är torr och ljus och på vintern ökar regn och passerande fronter — men en öppen strand förändras helt med levante eller poniente, vad än termometern säger. Vilken kuststräcka som fungerar en viss dag hänger därför på riktningen: det som är för mycket vid öppna Atlanten kan vara precis rätt i en skyddad vik.\n\nDen spanska klockan hjälper till — sena eftermiddagen blir lugn och man äter sent, så en lång eftermiddag på stranden kostar er ingen kväll. För er dag gäller AEMET-prognosen och den aktuella vinden. Fråga oss på morgonen så säger vi var det finns skydd.',
      summaryItems: [{ label: 'Lokalt fokus', value: 'Sund · Atlanten · vind' }, { label: 'Vindnamn', value: 'Levante · Poniente' }, { label: 'Dagskontroll', value: 'Prognos + vind' }],
      factorsTitle: 'Vid sundet ingår vinden i vanlig reseplanering', factors: ['Tarifa ligger där atlantisk och mediterran kontext möts. Sundet förklarar det maritima, exponerade läget men förhållanden varierar mellan dagar och platser.', 'Levante är östvinden och Poniente västvinden. Inget namn garanterar fast styrka, temperatur eller strandkomfort.'],
      factorItems: [{ title: 'Sund och Atlanten', text: 'Fronter, havsluft och exponering ger mer variation än en temperaturtabell visar.' }, { title: 'Levante och Poniente', text: 'Riktningen påverkar komforten; styrka och lokalt skydd måste kontrolleras för dagen.' }, { title: 'Allmän guide, inget spotråd', text: 'Tekniska vattensport- och säkerhetsbeslut hör till aktuell specialistinformation.' }],
      seasonNotes: ['Längre dagar och blandade förhållanden för flexibla kombinationer av stad, kust och landskap.', 'Torrt och ljust, med både sol och vind centrala för strandkomfort.', 'September kan kännas somrig innan regn och atlantisk variation ökar.', 'Milt för kusten, men mer utsatt för regn, fronter och växlande vind.'],
      intentNotes: ['Sommarens torra, ljusa rytm ger er långa timmar mellan strand och stad. Kontrollera dagens vind först och välj sedan den kuststräcka vars skydd passar dagen.', 'Vår och höst bjuder in till dagar mellan gamla stan, kusten och landskapet. När alternativen kan byta plats blir växlande vind ett val i stället för ett avbrott.', 'Utanför högsommaren ger Tarifas lugnare gator utrymme för en lång lunch, en promenad längs murarna och en kväll tillsammans; prognosen avgör bara ordningen.', 'En längre vintervistelse visar vardagens Tarifa. Den särskilda guiden hjälper er med boendekomfort och rutiner medan flexibla dagar följer fronter och klarare perioder.'],
      practical: ['I Tarifa är det vinden som avgör, inte temperaturen — det är därför kitesurfarna kommer. Vilken strand som fungerar en viss dag hänger på riktningen: det som är för mycket vid öppna Atlanten kan vara precis rätt i en skyddad vik. Och den dag ni inte vill ut alls ligger mataffären mitt emot.', 'Siestan gäller även här: sena eftermiddagen blir lugn och man äter sent. För er betyder det framför allt att en lång eftermiddag på stranden inte kostar er kvällen — köken kommer i gång först när ni ändå är tillbaka.'],
      closingTitle: 'Lä är en fråga om adress',
      closingBody: 'I Tarifa avgör inte avståndet utan lägets riktning: samma gata kan vara obekväm i levante och lugn i poniente. Var ni bor avgör därför hur mycket vind som hör till er vardag — och hur kort vägen tillbaka är när den friskar i.',
      sourceText: 'Siffrorna kommer från Climate-Data.org och beskriver årsmönstret vid sundet. Det tabellen inte visar är vinden — och i Tarifa avgör vinden en dag mer än någon temperatursiffra. Därför hittar ni månadsvärden här och inga superlativ; för vinden under era egna dagar finns prognosen.'
    }
  }
};

const dailyLifeTokens: Record<WeatherDestination, LinkToken> = {
  frigiliana: 'frigiliana_daily_life',
  nerja: 'nerja_daily_life',
  tarifa: 'tarifa_daily_life'
};

const dailyLifeLabels: Record<AmaraLanguage, string> = {
  en: 'Where you shop, and what is open when',
  de: 'Wo ihr einkauft und was wann offen hat',
  es: 'Dónde comprar y qué está abierto y cuándo',
  nl: 'Waar je boodschappen doet en wat wanneer open is',
  sv: 'Var ni handlar och vad som är öppet när'
};

/** One icon per local climate driver. Held per destination because a symbol is not translated. */
const factorIcons: Record<WeatherDestination, LocationGuideIconName[]> = {
  frigiliana: ['elevation', 'evening', 'coast'],
  nerja: ['coast', 'sunshine', 'comparison'],
  tarifa: ['coast', 'comparison', 'municipality']
};

const relatedTokens: Record<WeatherDestination, LinkToken[]> = {
  frigiliana: ['frigiliana_geography', 'frigiliana_winter_stays'],
  nerja: ['nerja_geography', 'nerja_winter_stays'],
  tarifa: ['tarifa_geography', 'tarifa_winter_stays']
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
      'Für euren genauen Weg schaut zusätzlich auf Sonne, Schatten und offene Passagen — so wird aus der Gemeindeprognose ein guter Tagesplan.'
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

  if (destination === 'frigiliana') {
    const homeCitySource: Record<AmaraLanguage, { label: string; text: string; href: string }> = {
      en: { label: 'Met Office · London', text: 'Official 1991–2020 average daily maximum temperatures.', href: metOfficeLondonNormalsUrl },
      de: { label: 'DWD · Berlin', text: 'Amtliche Normalwerte 1991–2020 für das mittlere tägliche Temperaturmaximum.', href: dwdBerlinDailyMaxNormalsUrl },
      es: { label: 'AEMET · Madrid', text: 'Valores climatológicos oficiales de la temperatura máxima media.', href: aemetMadridNormalsUrl },
      nl: { label: 'KNMI · Amsterdam', text: 'Officiële klimaatnormalen 1991–2020 voor de gemiddelde maximumtemperatuur.', href: knmiAmsterdamNormalsUrl },
      sv: { label: 'SMHI · Stockholm', text: 'Officiella normalvärden 1991–2020 för dagens genomsnittliga högsta temperatur.', href: smhiStockholmNormalsUrl }
    };
    links.splice(1, 0, homeCitySource[lang]);

    const roundTripSourceText: Record<AmaraLanguage, string> = {
      en: 'Official average daily maximum temperatures for Málaga, Granada, Sevilla and Córdoba.',
      de: 'Amtliche mittlere Tageshöchsttemperaturen für Málaga, Granada, Sevilla und Córdoba.',
      es: 'Temperaturas máximas diarias medias oficiales de Málaga, Granada, Sevilla y Córdoba.',
      nl: 'Officiële gemiddelde dagelijkse maximumtemperaturen voor Málaga, Granada, Sevilla en Córdoba.',
      sv: 'Officiella genomsnittliga dagshögsta temperaturer för Málaga, Granada, Sevilla och Córdoba.'
    };
    links.splice(2, 0, {
      label: 'AEMET · Málaga, Granada, Sevilla & Córdoba',
      text: roundTripSourceText[lang],
      href: aemetAndalusiaNormalsUrl
    });
  }

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
  const relatedItems: Record<WeatherDestination, Record<AmaraLanguage, Array<{ label: string; text: string }>>> = {
    frigiliana: {
      en: [{ label: 'How the village sits on the slope', text: 'Six kilometres above the coast and built into the hillside — that is where the steps, the views and the drive down to the beach come from.' }, { label: 'Winter stays in Frigiliana', text: 'All four stays have heating and underfloor heating in the bathroom; Lounis, Zaid and Maha also have a pellet stove.' }],
      de: [{ label: 'Wie das Dorf am Hang liegt', text: 'Sechs Kilometer über der Küste, an den Hang gebaut — daher die Stufen, die Aussicht und die Fahrt hinunter zum Strand.' }, { label: 'Winteraufenthalte in Frigiliana', text: 'Alle vier Unterkünfte haben Heizung und Fußbodenheizung im Bad, Lounis, Zaid und Maha zusätzlich einen Pelletofen.' }],
      es: [{ label: 'Cómo se asienta el pueblo en la ladera', text: 'Seis kilómetros por encima de la costa y construido en la ladera: de ahí vienen los escalones, las vistas y el trayecto en coche hasta la playa.' }, { label: 'Estancias de invierno en Frigiliana', text: 'Los cuatro alojamientos tienen calefacción y suelo radiante en el baño; Lounis, Zaid y Maha, además, estufa de pellets.' }],
      nl: [{ label: 'Hoe het dorp tegen de helling ligt', text: 'Zes kilometer boven de kust en tegen de helling gebouwd — daar komen de treden, het uitzicht en de rit naar het strand vandaan.' }, { label: 'Winterverblijven in Frigiliana', text: 'Alle vier de verblijven hebben verwarming en vloerverwarming in de badkamer; Lounis, Zaid en Maha bovendien een pelletkachel.' }],
      sv: [{ label: 'Hur byn ligger i sluttningen', text: 'Sex kilometer ovanför kusten och byggd in i sluttningen — därifrån kommer trappstegen, utsikten och bilfärden ner till stranden.' }, { label: 'Vintervistelser i Frigiliana', text: 'Alla fyra boendena har värme och golvvärme i badrummet; Lounis, Zaid och Maha har dessutom pelletskamin.' }],
    },
    nerja: {
      en: [{ label: 'How coast and hillside meet', text: 'The town lies flat by the water with the ground rising behind it. That decides how far you walk to the sand and how sheltered an afternoon turns out.' }, { label: 'Winter stays in Nerja', text: 'Coastal days stay mild and the evenings cool down, and then what is indoors counts. AMARA Playa has heating, a full kitchen and a washing machine, 200 metres from Torrecilla beach.' }],
      de: [{ label: 'Wie Küste und Hang zusammenkommen', text: 'Der Ort liegt flach am Wasser, dahinter steigt das Gelände an. Das entscheidet, wie weit ihr zum Sand lauft und wie geschützt ein Nachmittag ausfällt.' }, { label: 'Winteraufenthalte in Nerja', text: 'Die Küstentage bleiben mild, die Abende kühlen ab — dann zählt, was drinnen da ist. AMARA Playa hat Heizung, eine voll ausgestattete Küche und Waschmaschine, 200 Meter vom Strand Torrecilla.' }],
      es: [{ label: 'Cómo se juntan costa y ladera', text: 'El pueblo es llano junto al agua y detrás el terreno sube. Eso decide cuánto camináis hasta la arena y lo resguardada que sale una tarde.' }, { label: 'Estancias de invierno en Nerja', text: 'Los días de costa siguen suaves y las tardes refrescan, y entonces cuenta lo que hay dentro. AMARA Playa tiene calefacción, cocina completa y lavadora, a 200 metros de la playa de Torrecilla.' }],
      nl: [{ label: 'Hoe kust en helling samenkomen', text: 'De plaats ligt vlak aan het water, daarachter loopt het terrein op. Dat bepaalt hoe ver je naar het zand loopt en hoe beschut een middag uitvalt.' }, { label: 'Winterverblijven in Nerja', text: 'De kustdagen blijven mild en de avonden koelen af, en dan telt wat er binnen is. AMARA Playa heeft verwarming, een volledige keuken en een wasmachine, 200 meter van het strand Torrecilla.' }],
      sv: [{ label: 'Hur kust och sluttning möts', text: 'Orten ligger platt vid vattnet och bakom stiger terrängen. Det avgör hur långt ni går till sanden och hur skyddad en eftermiddag blir.' }, { label: 'Vintervistelser i Nerja', text: 'Kustdagarna förblir milda och kvällarna svalnar, och då räknas det som finns inomhus. AMARA Playa har värme, fullt kök och tvättmaskin, 200 meter från stranden Torrecilla.' }],
    },
    tarifa: {
      en: [{ label: 'Why the wind rules here', text: 'Two seas meet at a narrow headland. That is why the wind turns between Levante and Poniente, and why not every beach works on every day.' }, { label: 'Winter stays in Tarifa', text: 'Fronts pass through in winter, so a second plan counts here more than elsewhere. AMARA Family & Surf has 75 m² over two floors, a wood-burning fireplace and heating — and the supermarket is directly opposite.' }],
      de: [{ label: 'Warum hier der Wind regiert', text: 'An einer schmalen Landzunge treffen zwei Meere aufeinander. Deshalb dreht der Wind zwischen Levante und Poniente, und deshalb funktioniert nicht jeder Strand an jedem Tag.' }, { label: 'Winteraufenthalte in Tarifa', text: 'Im Winter ziehen Fronten durch, und ein zweiter Plan zählt hier mehr als anderswo. AMARA Family & Surf hat 75 m² auf zwei Etagen, Holzkamin und Heizung — und der Supermarkt liegt direkt gegenüber.' }],
      es: [{ label: 'Por qué aquí manda el viento', text: 'Dos mares se encuentran en una punta estrecha. Por eso el viento gira entre Levante y Poniente, y por eso no todas las playas funcionan todos los días.' }, { label: 'Estancias de invierno en Tarifa', text: 'En invierno pasan frentes, así que aquí un plan B cuenta más que en otros sitios. AMARA Family & Surf tiene 75 m² en dos plantas, chimenea de leña y calefacción, y el supermercado está justo enfrente.' }],
      nl: [{ label: 'Waarom hier de wind regeert', text: 'Bij een smalle landtong komen twee zeeën samen. Daarom draait de wind tussen Levante en Poniente, en daarom werkt niet elk strand op elke dag.' }, { label: 'Winterverblijven in Tarifa', text: 'In de winter trekken fronten over, dus een tweede plan telt hier meer dan elders. AMARA Family & Surf heeft 75 m² over twee verdiepingen, een houtkachel en verwarming — en de supermarkt ligt recht tegenover.' }],
      sv: [{ label: 'Varför vinden bestämmer här', text: 'Vid en smal udde möts två hav. Därför vrider vinden mellan levante och poniente, och därför fungerar inte varje strand varje dag.' }, { label: 'Vintervistelser i Tarifa', text: 'På vintern drar fronter förbi, så en andra plan räknas mer här än på andra håll. AMARA Family & Surf har 75 m² på två plan, braskamin och värme — och stormarknaden ligger tvärs över gatan.' }],
    },
  };
  const frigilianaBestTime: Record<AmaraLanguage, { intro: string; titles: string[] }> = {
    en: { intro: 'Four ways to use the monthly values — for beach days, walking, a round trip and a quieter winter in the village.', titles: ['Beach & long evenings', 'Walking', 'Round trip', 'Longer winter stay'] },
    de: { intro: 'Aus den Monatswerten ergeben sich vier einfache Reiseideen — für Strandtage, Wege in die Berge, eine Rundreise und einen ruhigen Winter im Dorf.', titles: ['Strand & lange Abende', 'Wandern', 'Rundreise', 'Längerer Winteraufenthalt'] },
    es: { intro: 'Cuatro formas de aprovechar los valores mensuales: playa, senderismo, una ruta por Andalucía y un invierno tranquilo en el pueblo.', titles: ['Playa y tardes largas', 'Senderismo', 'Ruta por Andalucía', 'Una estancia larga en invierno'] },
    nl: { intro: 'Vier manieren om de maandwaarden te gebruiken: stranddagen, wandelen, een rondreis en een rustige winter in het dorp.', titles: ['Strand en lange avonden', 'Wandelen', 'Rondreis', 'Een langer winterverblijf'] },
    sv: { intro: 'Fyra sätt att använda månadsvärdena: stranddagar, vandring, en rundresa och en lugn vinter i byn.', titles: ['Strand och långa kvällar', 'Vandring', 'Rundresa', 'Längre vintervistelse'] }
  };
  const frigilianaTableIntros: Record<AmaraLanguage, string> = {
    en: 'The table shows you how the year changes. In summer, put steep paths into the early or late hours; in winter, bring a jacket for the evening.',
    de: 'Die Tabelle zeigt euch schnell, wie sich das Jahr verändert. Im Sommer plant ihr steile Wege früh oder spät, im Winter gehört eine Jacke für den Abend ins Gepäck.',
    es: 'La tabla muestra cómo cambia el año. En verano, las cuestas se disfrutan mejor a primera o última hora; en invierno viene bien una chaqueta para la tarde.',
    nl: 'De tabel laat snel zien hoe het jaar verandert. In de zomer plan je steile wegen vroeg of laat; in de winter hoort een jas voor de avond in de koffer.',
    sv: 'Tabellen visar snabbt hur året förändras. På sommaren lägger ni branta vägar tidigt eller sent; på vintern hör en jacka för kvällen till packningen.'
  };
  const frigilianaIntentLinks: Record<AmaraLanguage, Array<{ token: LinkToken; label: string; extra?: { token: LinkToken; label: string } }>> = {
    en: [
      { token: 'frigiliana_beaches_authority', label: 'Explore beaches near Frigiliana', extra: { token: 'amenities', label: 'What else is waiting in the apartments' } },
      { token: 'frigiliana_hiking_authority', label: 'Compare the four hiking routes' },
      { token: 'frigiliana_daytrips_authority', label: 'Plan day trips from Frigiliana' },
      { token: 'frigiliana_winter_stays', label: 'Explore winter stays in Frigiliana' }
    ],
    de: [
      { token: 'frigiliana_beaches_authority', label: 'Strände rund um Frigiliana entdecken', extra: { token: 'amenities', label: 'Was sonst noch in den Apartments wartet' } },
      { token: 'frigiliana_hiking_authority', label: 'Die vier Wanderrouten vergleichen' },
      { token: 'frigiliana_daytrips_authority', label: 'Ausflüge ab Frigiliana planen' },
      { token: 'frigiliana_winter_stays', label: 'Winteraufenthalte in Frigiliana entdecken' }
    ],
    es: [
      { token: 'frigiliana_beaches_authority', label: 'Descubrir playas cerca de Frigiliana', extra: { token: 'amenities', label: 'Qué más os espera en los apartamentos' } },
      { token: 'frigiliana_hiking_authority', label: 'Comparar las cuatro rutas de senderismo' },
      { token: 'frigiliana_daytrips_authority', label: 'Planear excursiones desde Frigiliana' },
      { token: 'frigiliana_winter_stays', label: 'Descubrir estancias de invierno en Frigiliana' }
    ],
    nl: [
      { token: 'frigiliana_beaches_authority', label: 'Ontdek stranden bij Frigiliana', extra: { token: 'amenities', label: 'Wat er verder in de appartementen klaarligt' } },
      { token: 'frigiliana_hiking_authority', label: 'Vergelijk de vier wandelroutes' },
      { token: 'frigiliana_daytrips_authority', label: 'Plan dagtochten vanuit Frigiliana' },
      { token: 'frigiliana_winter_stays', label: 'Ontdek winterverblijven in Frigiliana' }
    ],
    sv: [
      { token: 'frigiliana_beaches_authority', label: 'Upptäck stränder nära Frigiliana', extra: { token: 'amenities', label: 'Vad mer som väntar i lägenheterna' } },
      { token: 'frigiliana_hiking_authority', label: 'Jämför de fyra vandringslederna' },
      { token: 'frigiliana_daytrips_authority', label: 'Planera utflykter från Frigiliana' },
      { token: 'frigiliana_winter_stays', label: 'Upptäck vintervistelser i Frigiliana' }
    ]
  };
  const nerjaIntentLinks: Record<AmaraLanguage, Array<{ token: LinkToken; label: string; extra?: { token: LinkToken; label: string } }>> = {
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
  const tarifaIntentLinks: Record<AmaraLanguage, Array<{ token: LinkToken; label: string; extra?: { token: LinkToken; label: string } }>> = {
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
  const relatedCopy = {
    eyebrow: common.relatedEyebrow,
    title: common.relatedTitle,
    items: relatedItems[destination][lang]
  };

  return {
    navLabel: navLabels[lang],
    hero: {
      eyebrow: common.eyebrow(place), title: common.h1(place), subtitle: common.h1Sub, lead: profile.lead,
      summaryEyebrow: lang === 'de' ? 'Kurz gesagt' : lang === 'es' ? 'En resumen' : lang === 'nl' ? 'Kort gezegd' : lang === 'sv' ? 'Kort sagt' : 'In short',
      summary: profile.summary, summaryItems: profile.summaryItems
    },
    factors: { eyebrow: lang === 'de' ? 'Lokale Klimafaktoren' : lang === 'es' ? 'Factores climáticos locales' : lang === 'nl' ? 'Lokale klimaatfactoren' : lang === 'sv' ? 'Lokala klimatfaktorer' : 'Local climate drivers', title: profile.factorsTitle, paragraphs: profile.factors, items: profile.factorItems.map((item, index) => ({ ...item, icon: factorIcons[destination][index] })) },
    table: { ...common.table, intro: destination === 'frigiliana' ? frigilianaTableIntros[lang] : common.table.intro, sourceText: profile.sourceText },
    seasons: { eyebrow: common.seasonEyebrow, title: common.seasonTitle, intro: common.seasonIntro, planningLabel: common.seasonPlanningLabel, items: common.seasons.map((season, index) => ({ ...season, summary: profile.seasonNotes[index] })) },
    bestTime: {
      eyebrow: common.bestEyebrow,
      title: common.bestTitle,
      intro: destination === 'frigiliana' ? frigilianaBestTime[lang].intro : common.bestIntro,
      items: (destination === 'frigiliana' ? frigilianaBestTime[lang].titles : common.intentTitles).map((title, index) => {
        const link = intentLinks[index];
        return {
          title,
          text: profile.intentNotes[index],
          ...(link ? { link: { token: link.token, label: link.label } } : {}),
          ...(link && link.extra ? { extraLink: link.extra } : {})
        };
      })
    },
    practical: { eyebrow: common.practicalEyebrow, title: common.practicalTitle, paragraphs: [common.practicalIntro, ...profile.practical], link: { token: dailyLifeTokens[destination], label: dailyLifeLabels[lang] }, listTitle: common.packTitle, items: common.packItems },
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
    closing: { eyebrow: common.closingEyebrow, title: profile.closingTitle, body: profile.closingBody, primaryLabel: common.primaryLabel, secondaryLabel: common.secondaryLabel }
  };
}

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-27',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'staying-with-us'
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
