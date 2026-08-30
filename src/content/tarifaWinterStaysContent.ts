import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { vacationRentalEntitiesByKey } from './vacationRentalEntities';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

const familySurf = vacationRentalEntitiesByKey['amara-family-surf'];
const hasTarifaAmenity = (name: string) =>
  familySurf.amenityFeatures.some((feature) => feature.name === name && feature.value === true);

if (!['heating', 'fireplace', 'kitchen', 'washingMachine', 'wifi', 'elevator'].every(hasTarifaAmenity)) {
  throw new Error('[Tarifa Winter Stays] AMARA Family & Surf copy is out of sync with vacationRentalEntities.');
}

/**
 * Primary intent: the lived proposition of a multi-day or multi-week Tarifa winter stay.
 * Climate values stay with the seasonal guide; this page owns the stay consequence.
 * Native query families:
 * EN Tarifa in winter / winter in Tarifa / winter stay / long stay / winter sun;
 * DE Tarifa im Winter / Winter in Tarifa / Winteraufenthalt / Langzeiturlaub / Wintersonne;
 * ES Tarifa en invierno / invierno en Tarifa / estancia de invierno / larga estancia / sol de invierno;
 * NL Tarifa in de winter / winter in Tarifa / winterverblijf / lang verblijf / winterzon;
 * SV Tarifa på vintern / vinter i Tarifa / vintervistelse / längre vistelse / vintersol.
 * Entities: Tarifa, AMARA Family & Surf, Los Lances, Tarifa Old Town, the Strait of Gibraltar,
 * and the Levante and Poniente wind regimes.
 */

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-29',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'staying-with-us'
};

export const tarifaWinterStaysSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-tarifa-winter-stays-v3.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: { title: 'Tarifa in Winter: The Wind Decides the Day', description: 'Winter in Tarifa: a calmer town, Levante and Poniente deciding each day, and 75 m² with a fireplace, full kitchen and reserved garage space at AMARA Family & Surf.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Tarifa im Winter: Der Wind entscheidet den Tag', description: 'Winter in Tarifa: ruhigerer Ort, Levante und Poniente bestimmen jeden Tag, dazu 75 m² mit Kamin, Küche und reserviertem Tiefgaragenplatz in AMARA Family & Surf.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Tarifa en invierno: el viento decide el día', description: 'Invierno en Tarifa: pueblo más tranquilo, Levante y Poniente deciden cada día, y 75 m² con chimenea, cocina y garaje reservado en AMARA Family & Surf.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Tarifa in de winter: de wind bepaalt de dag', description: 'Winter in Tarifa: een rustiger stad, Levante en Poniente bepalen elke dag, en 75 m² met haard, keuken en gereserveerde garageplaats in AMARA Family & Surf.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Tarifa på vintern: vinden avgör dagen', description: 'Vinter i Tarifa: en lugnare stad, Levante och Poniente avgör varje dag, och 75 m² med öppen spis, kök och reserverad garageplats i AMARA Family & Surf.', robots: 'index, follow', canonical: 'auto' }
  }
};

const sourceHrefs = {
  tarifaViewpoints: 'https://turismodetarifa.com/que-hacer/parques-naturales-senderismo/',
  tarifaWind: 'https://www.juntadeandalucia.es/medioambiente/portal/landing-page-%C3%ADndice/-/asset_publisher/zX2ouZa4r1Rf/content/viento/20151'
} as const;

export const tarifaWinterStaysContent = {
  navLabel: l("Winter Stays", "Winteraufenthalte", "Estancias de invierno", "Winterverblijven", "Vintervistelser"),
  hero: {
    eyebrow: l("Winter stays · Tarifa", "Winteraufenthalte · Tarifa", "Estancias de invierno · Tarifa", "Winterverblijven · Tarifa", "Vintervistelser · Tarifa"),
    title: l(
      "Winter in Tarifa",
      "Winter in Tarifa",
      "Invierno en Tarifa",
      "Winter in Tarifa",
      "Vinter i Tarifa"
    ),
    subtitle: l(
      "The wind decides the day",
      "Der Wind entscheidet den Tag",
      "El viento decide el día",
      "De wind bepaalt de dag",
      "Vinden avgör dagen"
    ),
    standfirst: l(
      "In summer Tarifa is in constant motion. In winter we find it calmer and more familiar — though that is our experience, not a promise. Levante and Poniente are the two winds that shape the Strait, and which one blows is decided on the day, not by the season. That is why a second plan matters here more than elsewhere. AMARA Family & Surf gives you 75 m² over two floors with a wood-burning fireplace, heating, a full kitchen and a washing machine. The supermarket is directly opposite, Los Lances beach about 500 metres away, and a reserved space in the garage comes with the apartment.",
      "Im Sommer ist Tarifa ständig in Bewegung. Im Winter erleben wir es ruhiger und vertrauter — das ist unsere Erfahrung, kein Versprechen. Levante und Poniente sind die beiden Winde, die an der Meerenge alles prägen; welcher weht, entscheidet sich am Tag und nicht in der Jahreszeit. Deshalb lohnt sich hier ein zweiter Plan mehr als anderswo. AMARA Family & Surf bietet euch 75 m² auf zwei Etagen mit Holzkamin, Heizung, voll ausgestatteter Küche und Waschmaschine. Der Supermarkt liegt direkt gegenüber, der Strand Los Lances rund 500 Meter entfernt, und ein reservierter Tiefgaragenplatz gehört zur Wohnung.",
      "En verano Tarifa está en movimiento constante. En invierno la vivimos más tranquila y cercana, aunque esa es nuestra experiencia, no una promesa. Levante y Poniente son los dos vientos que marcan el Estrecho, y cuál sopla se decide en el día, no en la estación. Por eso aquí conviene tener un plan B más que en otros sitios. AMARA Family & Surf os da 75 m² en dos plantas con chimenea de leña, calefacción, cocina completa y lavadora. El supermercado está justo enfrente, la playa de Los Lances a unos 500 metros, y con el apartamento va una plaza reservada de garaje.",
      "In de zomer is Tarifa constant in beweging. In de winter ervaren wij het rustiger en vertrouwder — dat is onze ervaring, geen belofte. Levante en Poniente zijn de twee winden die de Straat bepalen, en welke waait wordt op de dag zelf beslist, niet door het seizoen. Daarom loont een tweede plan hier meer dan elders. AMARA Family & Surf biedt jullie 75 m² over twee verdiepingen met houtkachel, verwarming, een volledige keuken en een wasmachine. De supermarkt ligt recht tegenover, het strand Los Lances op ongeveer 500 meter, en bij het appartement hoort een gereserveerde garageplaats.",
      "På sommaren är Tarifa i ständig rörelse. På vintern upplever vi det lugnare och mer välbekant — det är vår erfarenhet, inte ett löfte. Levante och Poniente är de två vindar som präglar sundet, och vilken som blåser avgörs på dagen, inte av årstiden. Därför lönar sig en andra plan här mer än på andra håll. AMARA Family & Surf ger er 75 m² i två plan med braskamin, värme, fullt utrustat kök och tvättmaskin. Mataffären ligger mitt emot, stranden Los Lances cirka 500 meter bort, och en reserverad garageplats hör till lägenheten."
    ),
    note: l(
      "If one detail decides it for you, ask us before you book. We know the apartment.",
      "Wenn ein Detail für euch den Ausschlag gibt, fragt uns vor der Buchung. Wir kennen die Wohnung.",
      "Si hay un detalle que os decide, preguntadnos antes de reservar. Conocemos el apartamento.",
      "Als één detail de doorslag geeft, vraag het ons vóór het boeken. We kennen het appartement.",
      "Om en detalj avgör för er, fråga oss innan ni bokar. Vi känner lägenheten."
    ),
    updated: l(
      "Last checked in August 2026",
      "Zuletzt im August 2026 nachgesehen",
      "Revisado por última vez en agosto de 2026",
      "Voor het laatst nagekeken in augustus 2026",
      "Senast kontrollerat i augusti 2026"
    ),
    mark: l("WINTER", "WINTER", "INVIERNO", "WINTER", "VINTER")
  },
  facts: [
    {
      label: l("What sets the day", "Was den Tag bestimmt", "Lo que marca el día", "Wat de dag bepaalt", "Det som styr dagen"),
      value: l("Levante or Poniente, not the calendar", "Levante oder Poniente, nicht der Kalender", "Levante o Poniente, no el calendario", "Levante of Poniente, niet de kalender", "Levante eller Poniente, inte kalendern")
    },
    {
      label: l("At home", "Zu Hause", "En casa", "Thuis", "Hemma"),
      value: l("Fireplace · heating · kitchen · washing machine", "Kamin · Heizung · Küche · Waschmaschine", "Chimenea · calefacción · cocina · lavadora", "Haard · verwarming · keuken · wasmachine", "Kamin · värme · kök · tvättmaskin")
    },
    {
      label: l("On the doorstep", "Vor der Tür", "Al salir", "Voor de deur", "Utanför dörren"),
      value: l("Supermarket opposite, 500 m to Los Lances", "Supermarkt gegenüber, 500 m zu Los Lances", "Supermercado enfrente, 500 m a Los Lances", "Supermarkt tegenover, 500 m naar Los Lances", "Mataffär mitt emot, 500 m till Los Lances")
    },
    {
      label: l("For the car", "Fürs Auto", "Para el coche", "Voor de auto", "För bilen"),
      value: l("A reserved underground parking space", "Ein reservierter Tiefgaragenplatz", "Una plaza reservada en el garaje", "Een gereserveerde garageplaats", "En reserverad garageplats")
    }
  ],
  sections: [
    {
      id: "calmer-town",
      eyebrow: l("The town", "Der Ort", "El pueblo", "De stad", "Orten"),
      title: l(
        "In winter Tarifa is a place to live in again",
        "Im Winter ist Tarifa wieder ein Ort zum Wohnen",
        "En invierno Tarifa vuelve a ser un sitio para vivir",
        "In de winter is Tarifa weer een plek om te wonen",
        "På vintern är Tarifa åter en plats att bo på"
      ),
      paragraphs: [
        l(
          "Summer here is transient: people arrive for the wind and move on. In winter we find the same faces in the supermarket and more room in the old town's lanes.",
          "Der Sommer hier ist flüchtig: Man kommt wegen des Windes und zieht weiter. Im Winter treffen wir dieselben Gesichter im Supermarkt und haben mehr Platz in den Gassen der Altstadt.",
          "El verano aquí es pasajero: se viene por el viento y se sigue camino. En invierno vemos las mismas caras en el supermercado y hay más sitio en las calles del casco antiguo.",
          "De zomer is hier vluchtig: mensen komen voor de wind en trekken verder. In de winter zien we dezelfde gezichten in de supermarkt en is er meer ruimte in de straatjes van de oude stad.",
          "Sommaren här är flyktig: man kommer för vinden och drar vidare. På vintern möter vi samma ansikten i mataffären och har mer plats i gamla stans gränder."
        ),
        l(
          "**That is our experience, not a promise.** How much is open and how busy it feels changes from one week to the next, and we would rather say that than sell you a quiet town.",
          "**Das ist unsere Erfahrung, kein Versprechen.** Wie viel offen hat und wie voll es sich anfühlt, ändert sich von Woche zu Woche — das sagen wir lieber, als euch einen stillen Ort zu verkaufen.",
          "**Esa es nuestra experiencia, no una promesa.** Cuánto está abierto y cuánta gente hay cambia de una semana a otra, y preferimos decirlo antes que venderos un pueblo silencioso.",
          "**Dat is onze ervaring, geen belofte.** Hoeveel er open is en hoe druk het voelt, verschilt per week, en dat zeggen we liever dan jullie een stille stad te verkopen.",
          "**Det är vår erfarenhet, inte ett löfte.** Hur mycket som har öppet och hur folktomt det känns skiftar från vecka till vecka, och det säger vi hellre än säljer er en tyst stad."
        )
      ]
    },
    {
      id: "the-wind",
      eyebrow: l("The wind", "Der Wind", "El viento", "De wind", "Vinden"),
      title: l(
        "Levante or Poniente — decided on the day",
        "Levante oder Poniente — entschieden wird am Tag",
        "Levante o Poniente: se decide en el día",
        "Levante of Poniente — bepaald op de dag zelf",
        "Levante eller Poniente — avgörs på dagen"
      ),
      paragraphs: [
        l(
          "Levante is the easterly and Poniente the westerly. Official information names them as the wind regimes that define the Strait, but neither name fixes a strength, a temperature or a season.",
          "Levante ist der Ostwind, Poniente der Westwind. Offizielle Informationen nennen sie als die prägenden Windlagen der Meerenge — festgelegt ist damit aber weder Stärke noch Temperatur noch Jahreszeit.",
          "Levante es el viento de levante y Poniente el de poniente. La información oficial los identifica como los regímenes que definen el Estrecho, pero ningún nombre fija fuerza, temperatura ni estación.",
          "Levante is de oostenwind en Poniente de westenwind. Officiële informatie noemt ze als de windregimes die de Straat bepalen, maar geen van beide namen legt kracht, temperatuur of seizoen vast.",
          "Levante är östanvinden och Poniente västanvinden. Officiell information pekar ut dem som de vindregimer som präglar sundet, men inget av namnen låser fast styrka, temperatur eller årstid."
        ),
        l(
          "**So plan the day, not the week.** When it blows hard, the old town and the inland walking routes are the better choice than an open beach — and that is exactly the kind of day the fireplace is for.",
          "**Plant deshalb den Tag, nicht die Woche.** Wenn es kräftig weht, sind Altstadt und die Wege im Hinterland die bessere Wahl als ein offener Strand — und genau für solche Tage ist der Kamin da.",
          "**Por eso planificad el día, no la semana.** Cuando sopla fuerte, el casco antiguo y las rutas del interior son mejor opción que una playa abierta, y para esos días está la chimenea.",
          "**Plan daarom de dag, niet de week.** Als het hard waait zijn de oude stad en de wandelroutes in het achterland een betere keuze dan een open strand — en precies voor zulke dagen is de haard er.",
          "**Planera därför dagen, inte veckan.** När det blåser hårt är gamla stan och lederna i inlandet ett bättre val än en öppen strand — och det är precis för sådana dagar kaminen finns."
        )
      ]
    },
    {
      id: "inside-family-surf",
      eyebrow: l("In the evening", "Abends", "Por la tarde", "'s Avonds", "På kvällen"),
      title: l(
        "75 m² over two floors, with a real fire",
        "75 m² auf zwei Etagen, mit echtem Feuer",
        "75 m² en dos plantas, con fuego de verdad",
        "75 m² over twee verdiepingen, met echt vuur",
        "75 m² i två plan, med riktig eld"
      ),
      paragraphs: [
        l(
          "Family & Surf has a wood-burning fireplace, heating and air conditioning that also heats. The 75 m² are spread over two floors with two bedrooms and two bathrooms, plus a 12 m² terrace facing the Atlantic.",
          "Family & Surf hat einen Holzkamin, Heizung und eine Klimaanlage, die auch heizt. Die 75 m² verteilen sich auf zwei Etagen mit zwei Schlafzimmern und zwei Bädern, dazu kommen 12 m² Terrasse zum Atlantik.",
          "Family & Surf tiene chimenea de leña, calefacción y aire acondicionado que también calienta. Los 75 m² se reparten en dos plantas con dos dormitorios y dos baños, más 12 m² de terraza hacia el Atlántico.",
          "Family & Surf heeft een houtkachel, verwarming en airconditioning die ook verwarmt. De 75 m² zijn verdeeld over twee verdiepingen met twee slaapkamers en twee badkamers, plus 12 m² terras op de Atlantische Oceaan.",
          "Family & Surf har braskamin, värme och luftkonditionering som även värmer. De 75 m² fördelas på två plan med två sovrum och två badrum, plus 12 m² terrass mot Atlanten."
        ),
        l(
          "There are no steps outside and the lift goes to the apartment door. **Inside, steps lead up to the bedrooms** — worth knowing if stairs are a concern.",
          "Draußen gibt es keine Stufen, und der Aufzug fährt bis vor die Wohnungstür. **Drinnen führen Stufen hinauf zu den Schlafzimmern** — gut zu wissen, wenn Treppen für euch ein Thema sind.",
          "Fuera no hay escalones y el ascensor llega hasta la puerta del apartamento. **Dentro, unos escalones suben a los dormitorios**, conviene saberlo si las escaleras os preocupan.",
          "Buiten zijn er geen treden en de lift gaat tot aan de voordeur. **Binnen leiden treden omhoog naar de slaapkamers** — goed om te weten als trappen een punt zijn.",
          "Utomhus finns inga trappsteg och hissen går ända fram till lägenhetsdörren. **Inne leder trappsteg upp till sovrummen** — bra att veta om trappor är ett bekymmer."
        )
      ]
    },
    {
      id: "staying-longer",
      eyebrow: l("Staying longer", "Länger bleiben", "Quedarse más", "Langer blijven", "Stanna längre"),
      title: l(
        "Equipped for several weeks",
        "Ausgestattet für mehrere Wochen",
        "Equipado para varias semanas",
        "Uitgerust voor meerdere weken",
        "Utrustad för flera veckor"
      ),
      paragraphs: [
        l(
          "The kitchen is complete and there is a washing machine and Wi-Fi. Everyday shopping is directly opposite the building, Los Lances beach is about 500 metres away and the old town is a walk, not a drive.",
          "Die Küche ist vollständig, Waschmaschine und WLAN sind da. Der tägliche Einkauf liegt direkt gegenüber, zum Strand Los Lances sind es rund 500 Meter, und in die Altstadt geht ihr zu Fuß statt zu fahren.",
          "La cocina está completa y hay lavadora y wifi. La compra diaria está justo enfrente del edificio, la playa de Los Lances a unos 500 metros y al casco antiguo se va andando, no en coche.",
          "De keuken is compleet en er zijn een wasmachine en wifi. De dagelijkse boodschappen liggen recht tegenover het gebouw, het strand Los Lances op ongeveer 500 meter, en naar de oude stad loop je in plaats van rijdt je.",
          "Köket är komplett och det finns tvättmaskin och wifi. Vardagshandeln ligger mitt emot huset, stranden Los Lances cirka 500 meter bort och till gamla stan går man i stället för att köra."
        ),
        l(
          "**A reserved space in the underground garage comes with the apartment**, so the daily hunt for parking disappears. From eight nights a direct booking also includes one cleaning around the middle of the stay.",
          "**Ein reservierter Tiefgaragenplatz gehört zur Wohnung** — die tägliche Parkplatzsuche entfällt. Ab acht Nächten ist bei Direktbuchung zusätzlich eine Reinigung zur Mitte des Aufenthalts dabei.",
          "**Con el apartamento va una plaza reservada en el garaje**, así que desaparece la búsqueda diaria de aparcamiento. A partir de ocho noches, la reserva directa incluye además una limpieza a mitad de estancia.",
          "**Bij het appartement hoort een gereserveerde plaats in de parkeergarage**, dus het dagelijkse zoeken naar parkeerruimte vervalt. Vanaf acht nachten hoort bij een directe boeking bovendien één schoonmaak halverwege het verblijf.",
          "**En reserverad plats i garaget hör till lägenheten**, så det dagliga letandet efter parkering försvinner. Från åtta nätter ingår dessutom en städning mitt i vistelsen vid direktbokning."
        )
      ]
    },
    {
      id: "around-christmas",
      eyebrow: l("In the village", "Vor Ort", "En el pueblo", "In de stad", "På plats"),
      title: l(
        "Around Christmas there is more going on",
        "Rund um Weihnachten ist mehr los",
        "En Navidad hay más movimiento",
        "Rond kerst is er meer te doen",
        "Kring jul händer det mer"
      ),
      paragraphs: [
        l(
          "Tarifa most recently published a municipal Christmas programme running from late November to 5 January. Whether and how it happens again is decided each year.",
          "Tarifa hat zuletzt ein städtisches Weihnachtsprogramm von Ende November bis zum 5. Januar veröffentlicht. Ob und wie es wiederkommt, wird jedes Jahr neu entschieden.",
          "Tarifa publicó por última vez un programa municipal de Navidad de finales de noviembre al 5 de enero. Si se repite y cómo se decide cada año.",
          "Tarifa publiceerde het laatst een gemeentelijk kerstprogramma van eind november tot 5 januari. Of en hoe het terugkomt, wordt elk jaar opnieuw bepaald.",
          "Tarifa publicerade senast ett kommunalt julprogram från slutet av november till 5 januari. Om och hur det återkommer avgörs varje år."
        ),
        l(
          "The same goes for restaurants and shops: some shorten their hours in winter. **Send us your dates and we will tell you what is running that week.**",
          "Dasselbe gilt für Restaurants und Geschäfte: Manche verkürzen im Winter ihre Zeiten. **Schickt uns eure Reisedaten, dann sagen wir euch, was in der Woche läuft.**",
          "Lo mismo con restaurantes y tiendas: algunos reducen horario en invierno. **Escribidnos vuestras fechas y os decimos qué funciona esa semana.**",
          "Hetzelfde geldt voor restaurants en winkels: sommige verkorten in de winter hun tijden. **Stuur ons jullie data, dan zeggen we wat er die week draait.**",
          "Detsamma gäller restauranger och butiker: vissa kortar sina tider på vintern. **Skicka era datum, så berättar vi vad som är igång den veckan.**"
        )
      ]
    }
  ],
  related: {
    eyebrow: l("Keep reading", "Weiterlesen", "Seguir leyendo", "Verder lezen", "Läs vidare"),
    title: l(
      "Wind, coast and everyday Tarifa",
      "Wind, Küste und der Alltag in Tarifa",
      "Viento, costa y el día a día en Tarifa",
      "Wind, kust en het dagelijks leven in Tarifa",
      "Vind, kust och vardagen i Tarifa"
    ),
    links: [
      {
        token: "tarifa_weather" as LinkToken,
        label: l("Weather & Seasons", "Wetter & Jahreszeiten", "Clima y estaciones", "Weer & seizoenen", "Väder & årstider"),
        text: l("How the year runs at the Strait, and where the forecast takes over.", "Wie das Jahr an der Meerenge verläuft — und ab wann die Vorhersage zählt.", "Cómo transcurre el año en el Estrecho y dónde empieza la previsión.", "Hoe het jaar aan de Straat verloopt en waar de verwachting het overneemt.", "Hur året löper vid sundet och var prognosen tar vid.")
      },
      {
        token: "tarifa_beaches_authority" as LinkToken,
        label: l("Beaches", "Strände", "Playas", "Stranden", "Stränder"),
        text: l("Which stretch of coast suits which wind, and how to reach it.", "Welcher Küstenabschnitt zu welchem Wind passt und wie ihr hinkommt.", "Qué tramo de costa encaja con cada viento y cómo llegar.", "Welk stuk kust bij welke wind past en hoe je er komt.", "Vilken kuststräcka som passar vilken vind och hur ni tar er dit.")
      },
      {
        token: "tarifa_wind_kitesurfing_authority" as LinkToken,
        label: l("Wind & Kitesurfing", "Wind & Kitesurfen", "Viento y kitesurf", "Wind & kitesurfen", "Vind & kitesurfing"),
        text: l("What Levante and Poniente mean on the water.", "Was Levante und Poniente auf dem Wasser bedeuten.", "Qué significan Levante y Poniente en el agua.", "Wat Levante en Poniente op het water betekenen.", "Vad Levante och Poniente betyder på vattnet.")
      },
      {
        token: "tarifa_daily_life" as LinkToken,
        label: l("Daily Life & Essentials", "Alltag & Versorgung", "Vida diaria y servicios", "Dagelijks leven & voorzieningen", "Vardag & service"),
        text: l("Shops, bakeries and the practical side of a longer stay.", "Geschäfte, Bäckereien und die praktische Seite eines längeren Aufenthalts.", "Tiendas, panaderías y la parte práctica de una estancia larga.", "Winkels, bakkers en de praktische kant van een langer verblijf.", "Butiker, bagerier och det praktiska kring en längre vistelse.")
      },
      {
        token: "tarifa" as LinkToken,
        label: l("Tarifa", "Tarifa", "Tarifa", "Tarifa", "Tarifa"),
        text: l("Where the town sits between two seas and two continents.", "Wo der Ort zwischen zwei Meeren und zwei Kontinenten liegt.", "Dónde queda el pueblo entre dos mares y dos continentes.", "Waar de stad ligt tussen twee zeeën en twee continenten.", "Var orten ligger mellan två hav och två kontinenter.")
      }
    ]
  },
  sources: {
    eyebrow: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Where these details come from", "Woher diese Angaben kommen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l(
      "The wind names come from official Junta information and the walking routes from Tarifa's tourism office. Everything about AMARA Family & Surf comes from us.",
      "Die Windbezeichnungen stammen aus offiziellen Informationen der Junta, die Wanderwege vom Tourismusbüro Tarifa. Alles zu AMARA Family & Surf kommt von uns.",
      "Los nombres de los vientos proceden de información oficial de la Junta y las rutas de la oficina de turismo de Tarifa. Todo lo relativo a AMARA Family & Surf viene de nosotros.",
      "De windnamen komen uit officiële informatie van de Junta en de wandelroutes van het toeristenbureau van Tarifa. Alles over AMARA Family & Surf komt van ons.",
      "Vindnamnen kommer från officiell information från Junta och vandringslederna från Tarifas turistbyrå. Allt om AMARA Family & Surf kommer från oss."
    ),
    checked: l("Last checked in August 2026", "Zuletzt im August 2026 nachgesehen", "Revisado por última vez en agosto de 2026", "Voor het laatst nagekeken in augustus 2026", "Senast kontrollerat i augusti 2026"),
    links: [
      {
        label: l("Junta de Andalucía · wind in the Strait", "Junta de Andalucía · Wind an der Meerenge", "Junta de Andalucía · el viento en el Estrecho", "Junta de Andalucía · wind in de Straat", "Junta de Andalucía · vinden i sundet"),
        text: l("Levante and Poniente as the defining wind regimes, without seasonal frequency.", "Levante und Poniente als prägende Windlagen, ohne Aussage zur Häufigkeit je Saison.", "Levante y Poniente como regímenes definitorios, sin frecuencia estacional.", "Levante en Poniente als bepalende windregimes, zonder seizoensfrequentie.", "Levante och Poniente som de definierande vindregimerna, utan säsongsfrekvens."),
        href: sourceHrefs.tarifaWind
      },
      {
        label: l("Turismo de Tarifa · parks and walking routes", "Turismo de Tarifa · Parks und Wanderwege", "Turismo de Tarifa · parques y rutas", "Turismo de Tarifa · parken en wandelroutes", "Turismo de Tarifa · parker och vandringsleder"),
        text: l("The inland routes that work when the coast is too exposed.", "Die Wege im Hinterland, die funktionieren, wenn die Küste zu offen liegt.", "Las rutas del interior que funcionan cuando la costa está demasiado expuesta.", "De routes in het achterland die werken als de kust te open ligt.", "Lederna i inlandet som fungerar när kusten är för utsatt."),
        href: sourceHrefs.tarifaViewpoints
      }
    ]
  },
  closing: {
    eyebrow: l("Winter at AMARA", "Winter bei AMARA", "Invierno en AMARA", "Winter bij AMARA", "Vinter hos AMARA"),
    title: l(
      "Tell us when you want to stay with us in Tarifa",
      "Sagt uns, wann ihr bei uns in Tarifa übernachten wollt",
      "Decidnos cuándo queréis alojaros con nosotros en Tarifa",
      "Vertel ons wanneer jullie bij ons in Tarifa willen overnachten",
      "Berätta när ni vill bo hos oss i Tarifa"
    ),
    body: l(
      "If a calmer town, Atlantic air and space to settle in sound right, winter in Tarifa works. Send us your dates and we will tell you what is open that week.",
      "Wenn ruhigerer Ort, Atlantikluft und Platz zum Ankommen für euch passen, funktioniert der Winter in Tarifa. Schickt uns eure Reisedaten, dann sagen wir euch, was in der Woche offen hat.",
      "Si os encajan un pueblo más tranquilo, aire atlántico y espacio para instalaros, el invierno en Tarifa funciona. Enviadnos vuestras fechas y os decimos qué abre esa semana.",
      "Als een rustiger stad, Atlantische lucht en ruimte om aan te komen goed klinken, werkt de winter in Tarifa. Stuur ons jullie data, dan zeggen we wat er die week open is.",
      "Om en lugnare stad, atlantluft och plats att landa på låter rätt fungerar vintern i Tarifa. Skicka era datum, så berättar vi vad som har öppet den veckan."
    ),
    locationLabel: l("Explore Tarifa's location", "Tarifas Lage entdecken", "Descubrir la ubicación de Tarifa", "Ontdek de ligging van Tarifa", "Upptäck Tarifas läge"),
    propertyLabel: l("View AMARA Family & Surf", "AMARA Family & Surf ansehen", "Ver AMARA Family & Surf", "Bekijk AMARA Family & Surf", "Se AMARA Family & Surf")
  }
};
