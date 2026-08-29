import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { vacationRentalEntitiesByKey } from './vacationRentalEntities';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

const playa = vacationRentalEntitiesByKey['amara-playa'];
const hasPlayaAmenity = (name: string) =>
  playa.amenityFeatures.some((feature) => feature.name === name && feature.value === true);

if (!['wifi', 'washingMachine', 'kitchen', 'balcony', 'elevator', 'heating'].every(hasPlayaAmenity)) {
  throw new Error('[Nerja Winter Stays] AMARA Playa copy is out of sync with vacationRentalEntities.');
}

const article = {
  datePublished: '2026-08-21',
  dateModified: '2026-08-29',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

export const nerjaWinterStaysSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-nerja-winter-stays-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: { title: 'Nerja in Winter: What Is Open and What Is Not', description: 'Winter in Nerja: an emptier promenade, the cave and the museum open through the year, no lifeguards on the beach, and AMARA Playa 200 metres from Torrecilla.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Nerja im Winter: Was offen hat und was nicht', description: 'Winter in Nerja: leerere Promenade, Höhle und Museum ganzjährig geöffnet, keine Strandwache und AMARA Playa 200 Meter vom Torrecilla.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Nerja en invierno: qué abre y qué no', description: 'Invierno en Nerja: paseo marítimo más vacío, cueva y museo abiertos todo el año, sin socorristas en la playa y AMARA Playa a 200 metros de Torrecilla.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Nerja in de winter: wat open is en wat niet', description: 'Winter in Nerja: een legere boulevard, grot en museum het hele jaar open, geen strandwacht en AMARA Playa op 200 meter van Torrecilla.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Nerja på vintern: vad som har öppet och inte', description: 'Vinter i Nerja: tommare strandpromenad, grottan och museet öppna året runt, ingen livräddare på stranden och AMARA Playa 200 meter från Torrecilla.', robots: 'index, follow', canonical: 'auto' }
  }
};

const sourceHrefs = {
  cave: 'https://cuevadenerja.es/',
  museum: 'https://cuevadenerja.es/museodenerja/',
  lifeguards: 'https://www.nerja.es/el-servicio-de-vigilancia-y-socorrismo-de-playas-se-amplia-hasta-los-50-efectivos/'
} as const;

export const nerjaWinterStaysContent = {
  navLabel: l("Winter Stays", "Winteraufenthalte", "Estancias de invierno", "Winterverblijven", "Vintervistelser"),
  hero: {
    eyebrow: l("Winter stays · Nerja", "Winteraufenthalte · Nerja", "Estancias de invierno · Nerja", "Winterverblijven · Nerja", "Vintervistelser · Nerja"),
    title: l(
      "Winter in Nerja: the coast without the crowd",
      "Winter in Nerja: die Küste ohne den Andrang",
      "Invierno en Nerja: la costa sin la multitud",
      "Winter in Nerja: de kust zonder de drukte",
      "Vinter i Nerja: kusten utan trängseln"
    ),
    standfirst: l(
      "In winter Nerja keeps working while the promenade empties out. The Cueva de Nerja and the Museo de Nerja are open through the year, so a grey day still has somewhere to go. The beach is for walking, not for swimming: the municipal lifeguard service runs in summer only. AMARA Playa sits about 200 metres from Torrecilla beach and 500 from the Balcón de Europa, with heating, a full kitchen, a washing machine and the largest bed we have. Send us your dates and we will check current opening hours before you arrive.",
      "Im Winter arbeitet Nerja weiter, während sich die Promenade leert. Die Cueva de Nerja und das Museo de Nerja haben ganzjährig geöffnet — ein grauer Tag hat also trotzdem ein Ziel. Der Strand ist zum Gehen da, nicht zum Baden: Der städtische Wachdienst läuft nur im Sommer. AMARA Playa liegt rund 200 Meter vom Strand Torrecilla und 500 Meter vom Balcón de Europa, mit Heizung, voll ausgestatteter Küche, Waschmaschine und unserem größten Bett. Schickt uns eure Reisedaten, dann prüfen wir vorab die aktuellen Öffnungszeiten.",
      "En invierno Nerja sigue funcionando mientras el paseo marítimo se vacía. La Cueva de Nerja y el Museo de Nerja abren todo el año, así que un día gris también tiene destino. La playa es para caminar, no para bañarse: el servicio municipal de socorrismo funciona solo en verano. AMARA Playa está a unos 200 metros de la playa de Torrecilla y a 500 del Balcón de Europa, con calefacción, cocina completa, lavadora y nuestra cama más grande. Escribidnos vuestras fechas y comprobamos los horarios actuales antes de que lleguéis.",
      "In de winter draait Nerja door terwijl de boulevard leegloopt. De Cueva de Nerja en het Museo de Nerja zijn het hele jaar open, dus ook een grijze dag heeft een bestemming. Het strand is om te wandelen, niet om te zwemmen: de gemeentelijke strandwacht draait alleen in de zomer. AMARA Playa ligt op ongeveer 200 meter van het Torrecilla-strand en 500 meter van het Balcón de Europa, met verwarming, een volledige keuken, wasmachine en ons grootste bed. Stuur ons jullie data, dan checken we vooraf de actuele openingstijden.",
      "På vintern fortsätter Nerja att fungera medan strandpromenaden töms. Cueva de Nerja och Museo de Nerja har öppet året runt, så även en grå dag har ett mål. Stranden är till för promenader, inte för bad: den kommunala livräddartjänsten går bara på sommaren. AMARA Playa ligger cirka 200 meter från Torrecillastranden och 500 meter från Balcón de Europa, med värme, fullt utrustat kök, tvättmaskin och vår största säng. Skicka era datum, så kontrollerar vi aktuella öppettider innan ni kommer."
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
      label: l("Whatever the weather", "Bei jedem Wetter", "Llueva o no", "Wat het weer ook doet", "Oavsett väder"),
      value: l("Cueva de Nerja · Museo de Nerja", "Cueva de Nerja · Museo de Nerja", "Cueva de Nerja · Museo de Nerja", "Cueva de Nerja · Museo de Nerja", "Cueva de Nerja · Museo de Nerja")
    },
    {
      label: l("On foot", "Zu Fuß", "A pie", "Te voet", "Till fots"),
      value: l("About 200 m to Torrecilla, 500 m to the Balcón", "Rund 200 m zum Torrecilla, 500 m zum Balcón", "Unos 200 m a Torrecilla, 500 m al Balcón", "Ongeveer 200 m naar Torrecilla, 500 m naar het Balcón", "Cirka 200 m till Torrecilla, 500 m till Balcón")
    },
    {
      label: l("At AMARA Playa", "In AMARA Playa", "En AMARA Playa", "In AMARA Playa", "I AMARA Playa"),
      value: l("Heating · kitchen · washing machine · lift", "Heizung · Küche · Waschmaschine · Aufzug", "Calefacción · cocina · lavadora · ascensor", "Verwarming · keuken · wasmachine · lift", "Värme · kök · tvättmaskin · hiss")
    },
    {
      label: l("Not on offer", "Nicht dabei", "Lo que no hay", "Wat er niet is", "Det som inte ingår"),
      value: l("Lifeguards — a summer service", "Strandwache — die gibt es nur im Sommer", "Socorristas: solo en verano", "Strandwacht — alleen in de zomer", "Livräddare — bara på sommaren")
    }
  ],
  sections: [
    {
      id: "emptier-promenade",
      eyebrow: l("The town", "Die Stadt", "El pueblo", "De stad", "Staden"),
      title: l(
        "The promenade is yours again",
        "Die Promenade gehört euch wieder",
        "El paseo vuelve a ser vuestro",
        "De boulevard is weer van jullie",
        "Strandpromenaden är er igen"
      ),
      paragraphs: [
        l(
          "In winter the seafront and the Balcón de Europa are far emptier than in July. From AMARA Playa it is roughly 500 metres to the Balcón and about 200 to Torrecilla beach.",
          "Im Winter sind die Uferpromenade und der Balcón de Europa deutlich leerer als im Juli. Von AMARA Playa sind es rund 500 Meter zum Balcón und etwa 200 zum Strand Torrecilla.",
          "En invierno el paseo marítimo y el Balcón de Europa están mucho más vacíos que en julio. Desde AMARA Playa hay unos 500 metros al Balcón y unos 200 a la playa de Torrecilla.",
          "In de winter zijn de boulevard en het Balcón de Europa veel leger dan in juli. Vanaf AMARA Playa is het ongeveer 500 meter naar het Balcón en zo'n 200 naar het Torrecilla-strand.",
          "På vintern är strandpromenaden och Balcón de Europa betydligt tommare än i juli. Från AMARA Playa är det cirka 500 meter till Balcón och omkring 200 till Torrecillastranden."
        ),
        l(
          "What is not there in winter is the lifeguard. **Nerja's municipal beach surveillance runs as a summer service**, so outside the season the beach is unsupervised. It is a place to walk, not to swim.",
          "Was im Winter fehlt, ist die Strandwache. **Der städtische Wachdienst in Nerja ist ein Sommerservice**; außerhalb der Saison ist der Strand unbeaufsichtigt. Er ist zum Spazieren da, nicht zum Baden.",
          "Lo que no hay en invierno es socorrista. **La vigilancia municipal de playas de Nerja funciona como servicio de verano**, así que fuera de temporada la playa no está supervisada. Es sitio para pasear, no para bañarse.",
          "Wat er in de winter niet is, is de strandwacht. **De gemeentelijke strandbewaking van Nerja draait als zomerdienst**, dus buiten het seizoen is het strand onbewaakt. Het is een plek om te wandelen, niet om te zwemmen.",
          "Det som saknas på vintern är livräddaren. **Nerjas kommunala strandbevakning är en sommartjänst**, så utanför säsong är stranden obevakad. Den är till för promenader, inte för bad."
        )
      ]
    },
    {
      id: "all-weather",
      eyebrow: l("Whatever the weather", "Bei jedem Wetter", "Llueva o no", "Wat het weer ook doet", "Oavsett väder"),
      title: l(
        "Two places that work on a grey day",
        "Zwei Ziele, die auch bei Regen funktionieren",
        "Dos sitios que funcionan en un día gris",
        "Twee plekken die op een grijze dag werken",
        "Två platser som fungerar en grå dag"
      ),
      paragraphs: [
        l(
          "The Cueva de Nerja publishes opening times for the whole year, with a few closure dates. The Museo de Nerja opens Tuesday to Sunday and runs cultural events across the year.",
          "Die Cueva de Nerja veröffentlicht Öffnungszeiten für das ganze Jahr, mit einzelnen Schließtagen. Das Museo de Nerja öffnet Dienstag bis Sonntag und hat ganzjährig ein Kulturprogramm.",
          "La Cueva de Nerja publica horarios para todo el año, con algunos días de cierre. El Museo de Nerja abre de martes a domingo y mantiene un programa cultural durante todo el año.",
          "De Cueva de Nerja publiceert openingstijden voor het hele jaar, met enkele sluitingsdagen. Het Museo de Nerja is open van dinsdag tot en met zondag en heeft het hele jaar een cultureel programma.",
          "Cueva de Nerja publicerar öppettider för hela året, med några stängda dagar. Museo de Nerja har öppet tisdag till söndag och har kulturprogram året runt."
        ),
        l(
          "Both change their hours from time to time, and the museum's programme is fixed only close to the date. **Tell us when you are coming and we will look it up before you travel.**",
          "Beide ändern ihre Zeiten gelegentlich, und das Museumsprogramm steht erst kurzfristig fest. **Sagt uns, wann ihr kommt — wir schauen vor eurer Anreise nach.**",
          "Ambos cambian sus horarios de vez en cuando, y el programa del museo se fija poco antes. **Decidnos cuándo venís y lo consultamos antes de vuestro viaje.**",
          "Beide passen hun tijden af en toe aan, en het museumprogramma ligt pas kort van tevoren vast. **Laat ons weten wanneer jullie komen, dan zoeken we het vooraf op.**",
          "Båda ändrar sina tider ibland, och museets program spikas först nära inpå. **Säg när ni kommer, så kollar vi upp det före er resa.**"
        )
      ]
    },
    {
      id: "inside-playa",
      eyebrow: l("In the evening", "Abends", "Por la tarde", "'s Avonds", "På kvällen"),
      title: l(
        "What AMARA Playa gives you in winter",
        "Was euch AMARA Playa im Winter gibt",
        "Lo que os da AMARA Playa en invierno",
        "Wat AMARA Playa jullie in de winter geeft",
        "Vad AMARA Playa ger er på vintern"
      ),
      paragraphs: [
        l(
          "The apartment has heating, a full kitchen and a washing machine — the things that matter once a stay runs past a week. The bed measures 200 × 200 cm, the largest at AMARA, and the balcony has a side view of the sea.",
          "Die Wohnung hat Heizung, eine voll ausgestattete Küche und eine Waschmaschine — genau das, was ab der zweiten Woche zählt. Das Bett misst 200 × 200 cm, das größte bei AMARA, und der Balkon hat seitlichen Meerblick.",
          "El apartamento tiene calefacción, cocina completa y lavadora: lo que importa cuando la estancia pasa de una semana. La cama mide 200 × 200 cm, la más grande de AMARA, y el balcón tiene vistas laterales al mar.",
          "Het appartement heeft verwarming, een volledige keuken en een wasmachine — precies wat telt zodra een verblijf langer dan een week duurt. Het bed meet 200 × 200 cm, het grootste bij AMARA, en het balkon heeft zijdelings zeezicht.",
          "Lägenheten har värme, fullt utrustat kök och tvättmaskin — det som betyder något när vistelsen passerar en vecka. Sängen mäter 200 × 200 cm, den största hos AMARA, och balkongen har havsutsikt åt sidan."
        ),
        l(
          "Playa is on the fifth floor and there is a lift. **Before the lift there are five steps outside the building and five more inside** — worth knowing if you arrive with heavy luggage.",
          "Playa liegt im fünften Stock, ein Aufzug ist vorhanden. **Vor dem Aufzug liegen fünf Stufen vor dem Gebäude und fünf weitere im Haus** — gut zu wissen, wenn ihr mit schwerem Gepäck ankommt.",
          "Playa está en el quinto piso y hay ascensor. **Antes del ascensor hay cinco escalones delante del edificio y otros cinco dentro**, conviene saberlo si llegáis con maletas pesadas.",
          "Playa ligt op de vijfde verdieping en er is een lift. **Vóór de lift liggen vijf treden buiten het gebouw en nog eens vijf binnen** — handig om te weten als jullie met zware bagage aankomen.",
          "Playa ligger på femte våningen och det finns hiss. **Före hissen finns fem trappsteg utanför huset och fem till inne i huset** — bra att veta om ni kommer med tungt bagage."
        )
      ]
    },
    {
      id: "staying-longer",
      eyebrow: l("Everyday life", "Alltag", "Día a día", "Dagelijks leven", "Vardag"),
      title: l(
        "Staying longer means cooking for yourselves",
        "Länger bleiben heißt: selbst kochen",
        "Quedarse más tiempo significa cocinar",
        "Langer blijven betekent zelf koken",
        "Att stanna längre betyder att laga mat själva"
      ),
      paragraphs: [
        l(
          "A Carrefour Express is on the same street. Mercadona and Mas cover the centre, and Lidl and Aldi sit out on the N-340 for a bigger shop.",
          "Ein Carrefour Express liegt in derselben Straße. Mercadona und Mas decken das Zentrum ab, für den Großeinkauf gibt es Lidl und Aldi an der N-340.",
          "Hay un Carrefour Express en la misma calle. Mercadona y Mas cubren el centro, y Lidl y Aldi están en la N-340 para la compra grande.",
          "Een Carrefour Express ligt in dezelfde straat. Mercadona en Mas dekken het centrum, en Lidl en Aldi liggen aan de N-340 voor de grote boodschappen.",
          "En Carrefour Express ligger på samma gata. Mercadona och Mas täcker centrum, och Lidl och Aldi ligger vid N-340 för storhandling."
        ),
        l(
          "In winter that mix works well: eat out when the evening invites it, cook at home when it does not. **From eight nights a direct booking includes one cleaning around the middle of the stay.**",
          "Im Winter passt diese Mischung gut: essen gehen, wenn der Abend danach ist, und zu Hause kochen, wenn nicht. **Ab acht Nächten ist bei Direktbuchung eine Reinigung zur Mitte des Aufenthalts dabei.**",
          "En invierno esa mezcla funciona bien: salir a cenar cuando apetece y cocinar en casa cuando no. **A partir de ocho noches, la reserva directa incluye una limpieza a mitad de estancia.**",
          "In de winter werkt die mix goed: uit eten als de avond ernaar is, thuis koken als dat niet zo is. **Vanaf acht nachten hoort bij een directe boeking één schoonmaak halverwege het verblijf.**",
          "På vintern fungerar den mixen bra: ät ute när kvällen inbjuder till det, laga hemma när den inte gör det. **Från åtta nätter ingår en städning mitt i vistelsen vid direktbokning.**"
        )
      ]
    },
    {
      id: "what-winter-is-not",
      eyebrow: l("Honestly", "Ehrlich gesagt", "Con franqueza", "Eerlijk gezegd", "Ärligt talat"),
      title: l(
        "What winter here is, and what it is not",
        "Was der Winter hier ist — und was nicht",
        "Qué es aquí el invierno y qué no",
        "Wat de winter hier is en wat niet",
        "Vad vintern här är och inte är"
      ),
      paragraphs: [
        l(
          "Conditions change from day to day, and sea and beach services follow the season rather than the calendar you are looking at. Nothing here is a forecast.",
          "Die Bedingungen wechseln von Tag zu Tag, und Meer wie Strandservices richten sich nach der Saison, nicht nach dem Kalender, in den ihr gerade schaut. Nichts hiervon ist eine Vorhersage.",
          "Las condiciones cambian de un día a otro, y el mar y los servicios de playa siguen la temporada, no el calendario que estáis mirando. Nada de esto es una previsión.",
          "De omstandigheden wisselen per dag, en zee en stranddiensten volgen het seizoen, niet de kalender waar jullie nu naar kijken. Niets hiervan is een verwachting.",
          "Förhållandena växlar från dag till dag, och havet och strandtjänsterna följer säsongen snarare än kalendern ni tittar i. Inget av det här är en prognos."
        ),
        l(
          "**What stays: light, the coast and a town that keeps working through the winter.** What is missing: beach days like the ones in July.",
          "**Was bleibt: Licht, die Küste und eine Stadt, die auch im Winter weiterarbeitet.** Was fehlt: Strandtage wie im Juli.",
          "**Lo que queda: luz, la costa y un pueblo que sigue funcionando en invierno.** Lo que falta: días de playa como los de julio.",
          "**Wat blijft: licht, de kust en een stad die ook in de winter doorwerkt.** Wat ontbreekt: stranddagen zoals in juli.",
          "**Det som finns kvar: ljuset, kusten och en stad som fortsätter fungera på vintern.** Det som saknas: stranddagar som i juli."
        )
      ]
    }
  ],
  related: {
    eyebrow: l("Keep reading", "Weiterlesen", "Seguir leyendo", "Verder lezen", "Läs vidare"),
    title: l(
      "Climate, neighbourhoods and everyday Nerja",
      "Klima, Stadtteile und der Alltag in Nerja",
      "Clima, barrios y el día a día en Nerja",
      "Klimaat, wijken en het dagelijks leven in Nerja",
      "Klimat, stadsdelar och vardagen i Nerja"
    ),
    links: [
      {
        token: "nerja_weather" as LinkToken,
        label: l("Weather & Seasons", "Wetter & Jahreszeiten", "Clima y estaciones", "Weer & seizoenen", "Väder & årstider"),
        text: l("What the year looks like on this coast, and where the forecast takes over.", "Wie das Jahr an dieser Küste aussieht — und ab wann die Vorhersage zählt.", "Cómo es el año en esta costa y dónde empieza la previsión.", "Hoe het jaar er aan deze kust uitziet en waar de verwachting het overneemt.", "Hur året ser ut vid den här kusten och var prognosen tar vid.")
      },
      {
        token: "nerja_where_to_stay" as LinkToken,
        label: l("Where to Stay", "Wo übernachten", "Dónde alojarse", "Waar verblijven", "Var ska man bo"),
        text: l("Old Town, Torrecilla, Carabeo, Burriana or the hills — what each is like to live in.", "Altstadt, Torrecilla, Carabeo, Burriana oder die Hanglagen — wie es sich dort jeweils wohnt.", "Casco antiguo, Torrecilla, Carabeo, Burriana o las colinas: cómo se vive en cada zona.", "Oude centrum, Torrecilla, Carabeo, Burriana of de heuvels — hoe het is om er te wonen.", "Gamla stan, Torrecilla, Carabeo, Burriana eller höjderna — hur det är att bo i varje del.")
      },
      {
        token: "nerja_geography" as LinkToken,
        label: l("Geography & Orientation", "Geografie & Orientierung", "Geografía y orientación", "Geografie & oriëntatie", "Geografi & orientering"),
        text: l("How the town sits between the Sierra and the sea.", "Wie die Stadt zwischen Sierra und Meer liegt.", "Cómo se sitúa el pueblo entre la sierra y el mar.", "Hoe de stad tussen de sierra en de zee ligt.", "Hur staden ligger mellan sierran och havet.")
      },
      {
        token: "nerja_daily_life" as LinkToken,
        label: l("Daily Life & Essentials", "Alltag & Versorgung", "Vida diaria y servicios", "Dagelijks leven & voorzieningen", "Vardag & service"),
        text: l("Shops, pharmacies and the practical side of a longer stay.", "Geschäfte, Apotheken und die praktische Seite eines längeren Aufenthalts.", "Tiendas, farmacias y la parte práctica de una estancia larga.", "Winkels, apotheken en de praktische kant van een langer verblijf.", "Butiker, apotek och det praktiska kring en längre vistelse.")
      }
    ]
  },
  sources: {
    eyebrow: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Where these details come from", "Woher diese Angaben kommen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l(
      "Opening times come from the cave, the museum and the town hall. Everything about AMARA Playa comes from us.",
      "Die Öffnungszeiten stammen von der Höhle, dem Museum und der Stadtverwaltung. Alles zu AMARA Playa kommt von uns.",
      "Los horarios proceden de la cueva, el museo y el ayuntamiento. Todo lo relativo a AMARA Playa viene de nosotros.",
      "De openingstijden komen van de grot, het museum en de gemeente. Alles over AMARA Playa komt van ons.",
      "Öppettiderna kommer från grottan, museet och kommunen. Allt om AMARA Playa kommer från oss."
    ),
    checked: l("Last checked in August 2026", "Zuletzt im August 2026 nachgesehen", "Revisado por última vez en agosto de 2026", "Voor het laatst nagekeken in augustus 2026", "Senast kontrollerat i augusti 2026"),
    links: [
      {
        label: l("Cueva de Nerja · opening information", "Cueva de Nerja · Öffnungszeiten", "Cueva de Nerja · horarios", "Cueva de Nerja · openingstijden", "Cueva de Nerja · öppettider"),
        text: l("The published pattern for the year, including closure dates.", "Der veröffentlichte Jahresplan mit den Schließtagen.", "El calendario publicado del año, con los días de cierre.", "Het gepubliceerde jaarschema, inclusief sluitingsdagen.", "Det publicerade årsschemat, inklusive stängda dagar."),
        href: sourceHrefs.cave
      },
      {
        label: l("Museo de Nerja · hours and programme", "Museo de Nerja · Zeiten und Programm", "Museo de Nerja · horarios y programa", "Museo de Nerja · tijden en programma", "Museo de Nerja · tider och program"),
        text: l("Tuesday to Sunday through the year, plus the cultural programme.", "Dienstag bis Sonntag im ganzen Jahr, dazu das Kulturprogramm.", "De martes a domingo todo el año, más el programa cultural.", "Dinsdag tot en met zondag het hele jaar, plus het culturele programma.", "Tisdag till söndag året runt, plus kulturprogrammet."),
        href: sourceHrefs.museum
      },
      {
        label: l("Ayuntamiento de Nerja · beach surveillance", "Ayuntamiento de Nerja · Strandwache", "Ayuntamiento de Nerja · vigilancia de playas", "Ayuntamiento de Nerja · strandbewaking", "Ayuntamiento de Nerja · strandbevakning"),
        text: l("The municipal lifeguard operation, described as a summer service.", "Der städtische Rettungsdienst, beschrieben als Sommerservice.", "El operativo municipal de socorrismo, descrito como servicio de verano.", "De gemeentelijke strandwacht, beschreven als zomerdienst.", "Den kommunala livräddarinsatsen, beskriven som en sommartjänst."),
        href: sourceHrefs.lifeguards
      }
    ]
  },
  closing: {
    eyebrow: l("Winter at AMARA", "Winter bei AMARA", "Invierno en AMARA", "Winter bij AMARA", "Vinter hos AMARA"),
    title: l(
      "Tell us when you want to come",
      "Sagt uns, wann ihr kommen möchtet",
      "Contadnos cuándo queréis venir",
      "Vertel ons wanneer jullie willen komen",
      "Berätta när ni vill komma"
    ),
    body: l(
      "If coast, daylight and a town that keeps its own rhythm sound right, winter in Nerja works. Send us your dates and we will check what is open that week.",
      "Wenn Küste, Tageslicht und eine Stadt mit eigenem Rhythmus für euch passen, funktioniert der Winter in Nerja. Schickt uns eure Reisedaten, dann prüfen wir, was in der Woche offen hat.",
      "Si os encajan la costa, la luz y un pueblo con su propio ritmo, el invierno en Nerja funciona. Enviadnos vuestras fechas y comprobamos qué abre esa semana.",
      "Als de kust, daglicht en een stad met een eigen ritme goed klinken, werkt de winter in Nerja. Stuur ons jullie data, dan kijken we wat er die week open is.",
      "Om kusten, dagsljuset och en stad med egen rytm låter rätt fungerar vintern i Nerja. Skicka era datum, så kollar vi vad som har öppet den veckan."
    ),
    locationLabel: l("Explore Nerja", "Nerja entdecken", "Descubrir Nerja", "Ontdek Nerja", "Upptäck Nerja"),
    propertyLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Se AMARA Playa")
  }
};
