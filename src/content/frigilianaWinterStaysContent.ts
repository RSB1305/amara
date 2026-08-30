import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { vacationRentalEntitiesByKey } from './vacationRentalEntities';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

const winterRentalKeys = ['amara-farah', 'amara-lounis', 'amara-zaid', 'amara-maha'] as const;
const pelletStoveKeys = ['amara-lounis', 'amara-zaid', 'amara-maha'] as const;
const hasAmenity = (key: (typeof winterRentalKeys)[number], name: string) =>
  vacationRentalEntitiesByKey[key].amenityFeatures.some(
    (feature) => feature.name === name && feature.value === true
  );

if (
  !winterRentalKeys.every((key) => hasAmenity(key, 'heating'))
  || !winterRentalKeys.every((key) => vacationRentalEntitiesByKey[key].bathroomUnderfloorHeating)
  || !pelletStoveKeys.every((key) => hasAmenity(key, 'pelletStove'))
) {
  throw new Error('[Frigiliana Winter Stays] Winter-comfort copy is out of sync with vacationRentalEntities.');
}

const article = {
  datePublished: '2026-08-11',
  dateModified: '2026-08-29',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'staying-with-us'
};

export const frigilianaWinterStaysSeo: AmaraAuthoringSeo = {
  version: '2026-08-29-frigiliana-winter-stays-v3.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: { title: 'Frigiliana in Winter: What It Is Really Like', description: 'Winter in Frigiliana: quieter lanes, walking instead of swimming, steep steps after dark, and four heated AMARA stays with pellet stoves in three of them.', robots: 'index, follow', canonical: 'auto' },
    de: { title: 'Frigiliana im Winter: Wie es wirklich ist', description: 'Winter in Frigiliana: ruhigere Gassen, Wandern statt Baden, steile Stufen im Dunkeln und vier beheizte AMARA-Unterkünfte, drei davon mit Pelletofen.', robots: 'index, follow', canonical: 'auto' },
    es: { title: 'Frigiliana en invierno: cómo es de verdad', description: 'Invierno en Frigiliana: calles tranquilas, caminar en vez de bañarse, escalones al anochecer y cuatro alojamientos AMARA con calefacción, tres con estufa de pellets.', robots: 'index, follow', canonical: 'auto' },
    nl: { title: 'Frigiliana in de winter: hoe het echt is', description: 'Winter in Frigiliana: rustigere straatjes, wandelen in plaats van zwemmen, steile trappen in het donker en vier verwarmde AMARA-verblijven, drie met pelletkachel.', robots: 'index, follow', canonical: 'auto' },
    sv: { title: 'Frigiliana på vintern: hur det verkligen är', description: 'Vinter i Frigiliana: lugnare gränder, vandring i stället för bad, branta trappsteg i mörkret och fyra uppvärmda AMARA-boenden, tre med pelletskamin.', robots: 'index, follow', canonical: 'auto' }
  }
};

const sourceHrefs = {
  streets: 'https://turismofrigiliana.es/es/las-calles.html',
  elFuerte: 'https://www.turismofrigiliana.es/es/el-fuerte.html'
} as const;

export const frigilianaWinterStaysContent = {
  navLabel: l("Winter Stays", "Winteraufenthalte", "Estancias de invierno", "Winterverblijven", "Vintervistelser"),
  hero: {
    eyebrow: l("Winter stays · Frigiliana", "Winteraufenthalte · Frigiliana", "Estancias de invierno · Frigiliana", "Winterverblijven · Frigiliana", "Vintervistelser · Frigiliana"),
    title: l(
      "Winter in Frigiliana",
      "Winter in Frigiliana",
      "Invierno en Frigiliana",
      "Winter in Frigiliana",
      "Vinter i Frigiliana"
    ),
    subtitle: l(
      "Bright days out, warm evenings in",
      "Helle Tage draußen, warme Abende drinnen",
      "Días luminosos fuera, tardes cálidas dentro",
      "Heldere dagen buiten, warme avonden binnen",
      "Ljusa dagar ute, varma kvällar inne"
    ),
    standfirst: l(
      "Frigiliana is quieter in winter than in summer, and the days outdoors are often better than people expect. Swimming is not the point; walking is. The village stays steep — narrow, winding lanes and steps, including on the way home after dark. What you get in the evening is a warm house: all four stays have heating and underfloor heating in the bathroom, and Lounis, Zaid and Maha have a pellet stove. We rent from a few nights up to three weeks. Some restaurants and shops keep shorter hours in winter, so send us your dates and we will tell you what is running that week.",
      "Frigiliana ist im Winter ruhiger als im Sommer, und die Tage draußen sind oft besser, als man denkt. Baden ist kein Thema, Wandern schon. Steil bleibt das Dorf trotzdem: enge, verwinkelte Gassen und Stufen, auch auf dem Rückweg im Dunkeln. Abends habt ihr dafür ein warmes Haus. Alle vier Unterkünfte haben Heizung und Fußbodenheizung im Bad, in Lounis, Zaid und Maha steht ein Pelletofen. Wir vermieten von ein paar Nächten bis zu drei Wochen. Manche Restaurants und Läden haben im Winter kürzere Zeiten — schickt uns eure Reisedaten, dann sagen wir euch, was in der Woche läuft.",
      "En invierno Frigiliana está más tranquila que en verano, y los días al aire libre suelen ser mejores de lo que se espera. Bañarse no es el plan; caminar sí. El pueblo sigue siendo empinado: calles estrechas, sinuosas y con escalones, también al volver de noche. A cambio, por la tarde tenéis una casa caliente. Los cuatro alojamientos tienen calefacción y suelo radiante en el baño, y Lounis, Zaid y Maha tienen estufa de pellets. Alquilamos desde unas noches hasta tres semanas. Algunos restaurantes y tiendas reducen horarios en invierno: escribidnos vuestras fechas y os decimos qué está abierto esa semana.",
      "Frigiliana is in de winter rustiger dan in de zomer, en de dagen buiten vallen vaak mee. Zwemmen is niet het idee, wandelen wel. Het dorp blijft steil: smalle, kronkelende straatjes en trappen, ook op de weg naar huis in het donker. 's Avonds hebben jullie een warm huis. Alle vier de verblijven hebben verwarming en vloerverwarming in de badkamer, en in Lounis, Zaid en Maha staat een pelletkachel. We verhuren van een paar nachten tot drie weken. Sommige restaurants en winkels hebben in de winter kortere openingstijden — stuur ons jullie data, dan zeggen we wat er die week draait.",
      "Frigiliana är lugnare på vintern än på sommaren, och dagarna ute är ofta bättre än man tror. Bad är inte poängen, vandring är det. Byn är fortfarande brant: smala, slingrande gränder och trappsteg, även på vägen hem i mörkret. På kvällen har ni ett varmt hus. Alla fyra boenden har värme och golvvärme i badrummet, och i Lounis, Zaid och Maha finns en pelletskamin. Vi hyr ut från några nätter upp till tre veckor. Vissa restauranger och butiker har kortare öppettider på vintern — skicka era datum, så berättar vi vad som är igång den veckan."
    ),
    note: l(
      "If one detail decides it for you, ask us before you book. We know every stay.",
      "Wenn ein Detail für euch den Ausschlag gibt, fragt uns vor der Buchung. Wir kennen jede Wohnung.",
      "Si hay un detalle que os decide, preguntadnos antes de reservar. Conocemos cada alojamiento.",
      "Als één detail de doorslag geeft, vraag het ons vóór het boeken. We kennen elk verblijf.",
      "Om en detalj avgör för er, fråga oss innan ni bokar. Vi känner varje boende."
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
      label: l("In the evening", "Abends", "Por la tarde", "'s Avonds", "På kvällen"),
      value: l("Heating everywhere, pellet stove in three of four", "Heizung überall, Pelletofen in drei von vier", "Calefacción en todas, estufa de pellets en tres de cuatro", "Overal verwarming, pelletkachel in drie van vier", "Värme överallt, pelletskamin i tre av fyra")
    },
    {
      label: l("Underfoot", "Unterwegs", "El terreno", "Onderweg", "Under fötterna"),
      value: l("Narrow, steep lanes with steps", "Enge, steile Gassen mit Stufen", "Calles estrechas y empinadas con escalones", "Smalle, steile straatjes met trappen", "Smala, branta gränder med trappsteg")
    },
    {
      label: l("Length of stay", "Aufenthalt", "Duración", "Verblijfsduur", "Vistelsens längd"),
      value: l("From a few nights to three weeks", "Von ein paar Nächten bis drei Wochen", "De unas noches a tres semanas", "Van een paar nachten tot drie weken", "Från några nätter till tre veckor")
    },
    {
      label: l("Not on offer", "Nicht dabei", "Lo que no hay", "Wat er niet is", "Det som inte ingår"),
      value: l("Beach days like in summer", "Strandtage wie im Sommer", "Días de playa como en verano", "Stranddagen zoals in de zomer", "Stranddagar som på sommaren")
    }
  ],
  sections: [
    {
      id: "quieter-village",
      eyebrow: l("The village", "Das Dorf", "El pueblo", "Het dorp", "Byn"),
      title: l(
        "Fewer day visitors, the same steep lanes",
        "Weniger Tagesgäste, dieselben steilen Gassen",
        "Menos visitantes de día, las mismas cuestas",
        "Minder dagbezoekers, dezelfde steile straatjes",
        "Färre dagsbesökare, samma branta gränder"
      ),
      paragraphs: [
        l(
          "In winter far fewer day visitors come up to Frigiliana. Early in the morning and after dark you often have the lanes almost to yourselves.",
          "Im Winter kommen deutlich weniger Tagesgäste nach Frigiliana. Früh am Morgen und nach Einbruch der Dunkelheit habt ihr die Gassen oft fast für euch.",
          "En invierno suben muchos menos visitantes de día a Frigiliana. Temprano por la mañana y al caer la noche las calles suelen ser casi vuestras.",
          "In de winter komen er veel minder dagbezoekers naar Frigiliana. Vroeg in de ochtend en na zonsondergang hebben jullie de straatjes vaak bijna voor jezelf.",
          "På vintern kommer betydligt färre dagsbesökare upp till Frigiliana. Tidigt på morgonen och efter mörkrets inbrott har ni ofta gränderna nästan för er själva."
        ),
        l(
          "Steep is steep in every season. The old town's lanes are narrow, winding and full of steps, and that includes the walk home in the dark. Inside Casa AMARA there are differences: **Farah is the only one of the four with everything on a single level**.",
          "Steil bleibt steil, in jeder Jahreszeit. Die Altstadtgassen sind eng, verwinkelt und voller Stufen, auch auf dem Heimweg im Dunkeln. Innerhalb von Casa AMARA gibt es Unterschiede: **Farah liegt als einzige der vier komplett auf einer Ebene**.",
          "Lo empinado no cambia con la estación. Las calles del casco antiguo son estrechas, sinuosas y llenas de escalones, también al volver de noche. Dentro de Casa AMARA hay diferencias: **Farah es la única de las cuatro completamente en una sola planta**.",
          "Steil blijft steil, in elk seizoen. De straatjes in de oude kern zijn smal, kronkelend en vol trappen, ook op de weg naar huis in het donker. Binnen Casa AMARA zijn er verschillen: **Farah ligt als enige van de vier volledig op één niveau**.",
          "Brant är brant i alla årstider. Gamla stans gränder är smala, slingrande och fulla av trappsteg, även på vägen hem i mörkret. Inne i Casa AMARA finns skillnader: **Farah är den enda av de fyra som ligger helt i ett plan**."
        )
      ]
    },
    {
      id: "outdoors-in-winter",
      eyebrow: l("Outdoors", "Draußen", "Al aire libre", "Buiten", "Utomhus"),
      title: l(
        "Walking works. Swimming does not.",
        "Wandern geht. Baden nicht.",
        "Caminar sí. Bañarse no.",
        "Wandelen gaat. Zwemmen niet.",
        "Vandring fungerar. Bad gör det inte."
      ),
      paragraphs: [
        l(
          "The El Fuerte route starts inside Frigiliana and leaves the old town by steps. Without the summer heat it is often a better walk than in August.",
          "Die Route auf den El Fuerte beginnt mitten in Frigiliana und verlässt die Altstadt über Stufen. Ohne die Sommerhitze wandert es sich dort oft besser als im August.",
          "La ruta de El Fuerte arranca dentro de Frigiliana y sale del casco antiguo por escalones. Sin el calor del verano suele caminarse mejor que en agosto.",
          "De route naar El Fuerte begint midden in Frigiliana en verlaat de oude kern via trappen. Zonder de zomerhitte loopt het er vaak beter dan in augustus.",
          "Rutten upp till El Fuerte börjar inne i Frigiliana och lämnar gamla stan via trappsteg. Utan sommarvärmen går den ofta bättre än i augusti."
        ),
        l(
          "After rain the ground and the route change. **Ask us in the morning how it looks** — we live here, and it costs you one message.",
          "Nach Regen ändern sich Untergrund und Wegverhältnisse. **Fragt uns morgens kurz, wie es aussieht** — wir wohnen hier, euch kostet es eine Nachricht.",
          "Después de la lluvia cambian el terreno y el estado del camino. **Preguntadnos por la mañana cómo está** — vivimos aquí y a vosotros os cuesta un mensaje.",
          "Na regen veranderen de ondergrond en de staat van het pad. **Vraag ons 's ochtends even hoe het erbij ligt** — wij wonen hier, jullie kost het één bericht.",
          "Efter regn förändras underlaget och ledens skick. **Fråga oss på morgonen hur det ser ut** — vi bor här, och det kostar er ett meddelande."
        )
      ]
    },
    {
      id: "warm-at-home",
      eyebrow: l("At home", "Zu Hause", "En casa", "Thuis", "Hemma"),
      title: l(
        "What is warm in your apartment",
        "Was in eurer Wohnung warm ist",
        "Qué calienta vuestro alojamiento",
        "Wat er in jullie appartement warm is",
        "Vad som är varmt i er lägenhet"
      ),
      paragraphs: [
        l(
          "All four stays in Casa AMARA have heating and underfloor heating in the bathroom. Lounis, Zaid and Maha also have a pellet stove, and you notice it on a cool evening.",
          "Alle vier Unterkünfte in Casa AMARA haben Heizung und Fußbodenheizung im Bad. In Lounis, Zaid und Maha steht zusätzlich ein Pelletofen — den merkt ihr an einem kühlen Abend.",
          "Los cuatro alojamientos de Casa AMARA tienen calefacción y suelo radiante en el baño. Lounis, Zaid y Maha suman una estufa de pellets, y se nota en una tarde fresca.",
          "Alle vier de verblijven in Casa AMARA hebben verwarming en vloerverwarming in de badkamer. In Lounis, Zaid en Maha staat daarnaast een pelletkachel, en dat merk je op een frisse avond.",
          "Alla fyra boenden i Casa AMARA har värme och golvvärme i badrummet. Lounis, Zaid och Maha har dessutom en pelletskamin, och det märks en sval kväll."
        ),
        l(
          "**Lounis** has the most room for a longer stay, with 70 m² inside and a 39 m² terrace. **Zaid** is more compact at 33 m² but has the widest bed; six steps lead up to it. **Maha** sits at the top of the house, 35 m² inside and a 64 m² terrace.",
          "**Lounis** hat mit 70 m² innen und 39 m² Terrasse am meisten Platz, wenn ihr länger bleibt. **Zaid** ist mit 33 m² kompakter, hat aber das breiteste Bett; sechs Stufen führen hinauf. **Maha** liegt ganz oben im Haus, 35 m² innen und 64 m² Terrasse.",
          "**Lounis** es el más amplio para estancias largas: 70 m² dentro y 39 m² de terraza. **Zaid** es más compacto con 33 m², pero tiene la cama más ancha; se sube por seis escalones. **Maha** está en lo alto de la casa, 35 m² dentro y 64 m² de terraza.",
          "**Lounis** heeft met 70 m² binnen en 39 m² terras de meeste ruimte voor een langer verblijf. **Zaid** is met 33 m² compacter, maar heeft het breedste bed; er gaan zes treden naar boven. **Maha** ligt bovenin het huis, 35 m² binnen en 64 m² terras.",
          "**Lounis** har mest plats för en längre vistelse, 70 m² inne och 39 m² terrass. **Zaid** är mer kompakt med 33 m² men har den bredaste sängen; sex trappsteg leder upp. **Maha** ligger högst upp i huset, 35 m² inne och 64 m² terrass."
        ),
        l(
          "**Farah has no pellet stove and no terrace.** In return there is one step at the entrance and nothing after that — the easiest of the four if steps are a concern.",
          "**Farah hat keinen Pelletofen und keine Terrasse.** Dafür gibt es eine Stufe am Eingang und danach keine mehr — die einfachste der vier, wenn Stufen für euch ein Thema sind.",
          "**Farah no tiene estufa de pellets ni terraza.** A cambio hay un escalón en la entrada y ninguno más — el más fácil de los cuatro si los escalones os preocupan.",
          "**Farah heeft geen pelletkachel en geen terras.** Daar staat tegenover: één trede bij de ingang en daarna geen meer — de makkelijkste van de vier als trappen een punt zijn.",
          "**Farah har varken pelletskamin eller terrass.** I gengäld finns ett trappsteg vid entrén och inga fler — den enklaste av de fyra om trappsteg är ett bekymmer."
        )
      ]
    },
    {
      id: "how-long",
      eyebrow: l("How long", "Wie lange", "Cuánto tiempo", "Hoe lang", "Hur länge"),
      title: l(
        "A few nights, or three unhurried weeks",
        "Ein paar Nächte oder drei ruhige Wochen",
        "Unas noches o tres semanas sin prisa",
        "Een paar nachten of drie rustige weken",
        "Några nätter eller tre lugna veckor"
      ),
      paragraphs: [
        l(
          "In winter we rent from a few nights up to three weeks. Longer than that we do not offer — this is a holiday stay, not a monthly let.",
          "Wir vermieten im Winter von ein paar Nächten bis zu drei Wochen. Länger geht bei uns nicht — das ist Ferienvermietung, keine Monatsmiete.",
          "En invierno alquilamos desde unas noches hasta tres semanas. Más tiempo no lo ofrecemos: es una estancia vacacional, no un alquiler mensual.",
          "In de winter verhuren we van een paar nachten tot drie weken. Langer bieden we niet aan — dit is een vakantieverblijf, geen maandhuur.",
          "På vintern hyr vi ut från några nätter upp till tre veckor. Längre än så erbjuder vi inte — det här är en semestervistelse, inte månadsuthyrning."
        ),
        l(
          "From eight nights a direct booking includes one cleaning around the middle of the stay. **For two or three weeks, Lounis is usually the calmest choice** — 70 m² simply carries a long stay better.",
          "Ab acht Nächten ist bei Direktbuchung eine Reinigung zur Mitte des Aufenthalts dabei. **Für zwei oder drei Wochen ist Lounis meist die entspannteste Wahl** — 70 m² tragen einen langen Aufenthalt einfach besser.",
          "A partir de ocho noches, la reserva directa incluye una limpieza a mitad de estancia. **Para dos o tres semanas, Lounis suele ser la opción más cómoda**: 70 m² sostienen mejor una estancia larga.",
          "Vanaf acht nachten hoort bij een directe boeking één schoonmaak halverwege het verblijf. **Voor twee of drie weken is Lounis meestal de rustigste keuze** — 70 m² draagt een lang verblijf nu eenmaal beter.",
          "Från åtta nätter ingår en städning mitt i vistelsen vid direktbokning. **För två eller tre veckor är Lounis oftast det lugnaste valet** — 70 m² bär helt enkelt en lång vistelse bättre."
        )
      ]
    },
    {
      id: "what-is-open",
      eyebrow: l("In the village", "Vor Ort", "En el pueblo", "In het dorp", "På plats"),
      title: l(
        "Not everything is open in winter",
        "Im Winter hat nicht alles offen",
        "En invierno no está todo abierto",
        "In de winter is niet alles open",
        "På vintern har inte allt öppet"
      ),
      paragraphs: [
        l(
          "Some restaurants and shops shorten their hours in winter or close for a few weeks. How much is running varies from one year to the next.",
          "Manche Restaurants und Geschäfte verkürzen im Winter ihre Zeiten oder schließen für ein paar Wochen. Wie viel läuft, ist von Jahr zu Jahr verschieden.",
          "Algunos restaurantes y tiendas reducen su horario en invierno o cierran unas semanas. Cuánto está abierto cambia de un año a otro.",
          "Sommige restaurants en winkels verkorten in de winter hun openingstijden of sluiten een paar weken. Hoeveel er draait, verschilt per jaar.",
          "Vissa restauranger och butiker kortar sina öppettider på vintern eller stänger några veckor. Hur mycket som är igång varierar från år till år."
        ),
        l(
          "We would rather not hand you a list that is already wrong by the time you read it. **Send us your dates and we will tell you what is open that week.**",
          "Eine Liste, die beim Lesen schon nicht mehr stimmt, wollen wir euch nicht hinstellen. **Schickt uns eure Reisedaten, dann sagen wir euch, was in der Woche offen hat.**",
          "Preferimos no daros una lista que ya esté desfasada cuando la leáis. **Escribidnos vuestras fechas y os decimos qué abre esa semana.**",
          "We geven jullie liever geen lijst die al niet meer klopt zodra je hem leest. **Stuur ons jullie data, dan zeggen we wat er die week open is.**",
          "Vi vill helst inte ge er en lista som redan är fel när ni läser den. **Skicka era datum, så berättar vi vad som har öppet den veckan.**"
        )
      ]
    }
  ],
  related: {
    eyebrow: l("Keep reading", "Weiterlesen", "Seguir leyendo", "Verder lezen", "Läs vidare"),
    title: l(
      "Climate, terrain and where in the village you sleep",
      "Klima, Wege und wo im Dorf ihr schlaft",
      "Clima, terreno y dónde dormís en el pueblo",
      "Klimaat, terrein en waar in het dorp je slaapt",
      "Klimat, terräng och var i byn ni sover"
    ),
    links: [
      {
        token: "weather_frigiliana" as LinkToken,
        label: l("How mild January really is", "Wie mild der Januar wirklich ist", "Cómo de suave es enero en realidad", "Hoe zacht januari echt is", "Hur mild januari verkligen är"),
        text: l("Whether you walk in January or read indoors is not decided by the month but by how the days actually turn out. The monthly values for December to February are there, and the AEMET forecast for your own dates.", "Ob ihr im Januar wandert oder lest, entscheidet nicht der Monat, sondern wie die Tage tatsächlich ausfallen. Die Monatswerte für Dezember bis Februar stehen dort — und für eure Reisedaten die AEMET-Vorhersage.", "Que en enero caminéis o os quedéis leyendo no lo decide el mes, sino cómo salgan los días. Allí están los valores mensuales de diciembre a febrero y la previsión de AEMET para vuestras fechas.", "Of je in januari wandelt of binnen leest, bepaalt niet de maand maar hoe de dagen werkelijk uitvallen. De maandwaarden voor december tot februari staan er, en de AEMET-verwachting voor jullie eigen data.", "Om ni vandrar i januari eller läser inomhus avgörs inte av månaden utan av hur dagarna faktiskt blir. Månadsvärdena för december till februari finns där, och AEMET-prognosen för era egna datum.")
      },
      {
        token: "frigiliana_hiking_authority" as LinkToken,
        label: l("The routes that work best now", "Die Routen, die jetzt am besten gehen", "Las rutas que mejor funcionan ahora", "De routes die nu het best gaan", "Lederna som fungerar bäst nu"),
        text: l("Without the summer heat the open routes are walkable all day. On El Fuerte — 963 metres and a good four hours — there is barely any shade, and in January that is exactly the advantage.", "Ohne die Sommerhitze sind die offenen Wege den ganzen Tag machbar. Auf dem El Fuerte — 963 Meter, gut vier Stunden — gibt es kaum Schatten, und im Januar ist genau das der Vorteil.", "Sin el calor del verano, las rutas abiertas se andan a cualquier hora. En El Fuerte — 963 metros y cuatro horas largas — apenas hay sombra, y en enero eso es justo la ventaja.", "Zonder de zomerhitte zijn de open routes de hele dag te lopen. Op El Fuerte — 963 meter en ruim vier uur — is nauwelijks schaduw, en in januari is dat juist het voordeel.", "Utan sommarvärmen går de öppna lederna att vandra hela dagen. På El Fuerte — 963 meter och drygt fyra timmar — finns knappt någon skugga, och i januari är det just fördelen.")
      },
      {
        token: "frigiliana_daily_life" as LinkToken,
        label: l("Where you shop when less is open", "Wo ihr einkauft, wenn weniger offen hat", "Dónde comprar cuando hay menos abierto", "Waar je boodschappen doet als er minder open is", "Var ni handlar när mindre är öppet"),
        text: l("Winter changes the hours, not the shops. Where the supermarkets and the pharmacy are, and how the day is timed here.", "Der Winter ändert die Zeiten, nicht die Läden. Wo die Supermärkte und die Apotheke liegen und wie der Tag hier getaktet ist.", "El invierno cambia los horarios, no las tiendas. Dónde están los supermercados y la farmacia, y cómo se reparte aquí el día.", "De winter verandert de tijden, niet de winkels. Waar de supermarkten en de apotheek liggen en hoe de dag hier verloopt.", "Vintern ändrar tiderna, inte butikerna. Var stormarknaderna och apoteket ligger och hur dagen är upplagd här.")
      },
      {
        token: "frigiliana_stairs" as LinkToken,
        label: l("The steps after dark", "Die Stufen im Dunkeln", "Los escalones al anochecer", "De treden na zonsondergang", "Trappstegen i mörkret"),
        text: l("It gets dark early in winter, and the way to our door runs up about 30 steps. How steep each part of the village is, and what the daily walk involves.", "Im Winter wird es früh dunkel, und der Weg zu unserer Tür führt über rund 30 Stufen. Wie steil die einzelnen Ortsteile sind und was der tägliche Weg bedeutet.", "En invierno anochece pronto y el camino hasta nuestra puerta sube unos 30 escalones. Lo empinada que es cada parte del pueblo y lo que supone el trayecto diario.", "In de winter wordt het vroeg donker, en de weg naar onze voordeur gaat over ongeveer 30 treden. Hoe steil de delen van het dorp zijn en wat de dagelijkse wandeling betekent.", "På vintern blir det mörkt tidigt, och vägen till vår port går uppför ett trettiotal trappsteg. Hur brant varje del av byn är och vad den dagliga vägen innebär.")
      },
      {
        token: "nerja_vs_frigiliana" as LinkToken,
        label: l("Frigiliana or Nerja?", "Frigiliana oder Nerja?", "¿Frigiliana o Nerja?", "Frigiliana of Nerja?", "Frigiliana eller Nerja?"),
        text: l("If the steps are the sticking point, the coast is the other option.", "Wenn die Stufen der Knackpunkt sind, ist die Küste die Alternative.", "Si los escalones son el problema, la costa es la alternativa.", "Als de treden het struikelblok zijn, is de kust het alternatief.", "Om trappstegen är knäckfrågan är kusten alternativet.")
      }
    ]
  },
  sources: {
    eyebrow: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Where these details come from", "Woher diese Angaben kommen", "De dónde salen estos datos", "Waar deze gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l(
      "The terrain and the El Fuerte route description come from Frigiliana's official tourism information. Everything about our four apartments comes from us.",
      "Gelände und die Beschreibung der El-Fuerte-Route stammen von der offiziellen Tourismusinformation Frigilianas. Alles zu unseren vier Wohnungen kommt von uns.",
      "El terreno y la descripción de la ruta de El Fuerte proceden de la información turística oficial de Frigiliana. Todo lo relativo a nuestros cuatro alojamientos viene de nosotros.",
      "Het terrein en de beschrijving van de El Fuerte-route komen van de officiële toeristische informatie van Frigiliana. Alles over onze vier appartementen komt van ons.",
      "Terrängen och beskrivningen av El Fuerte-rutten kommer från Frigilianas officiella turistinformation. Allt om våra fyra lägenheter kommer från oss."
    ),
    checked: l("Last checked in August 2026", "Zuletzt im August 2026 nachgesehen", "Revisado por última vez en agosto de 2026", "Voor het laatst nagekeken in augustus 2026", "Senast kontrollerat i augusti 2026"),
    links: [
      {
        label: l("Turismo de Frigiliana · the streets", "Turismo de Frigiliana · die Gassen", "Turismo de Frigiliana · las calles", "Turismo de Frigiliana · de straten", "Turismo de Frigiliana · gatorna"),
        text: l("The official description of the old town's narrow, winding and steep lanes.", "Die offizielle Beschreibung der engen, verwinkelten und steilen Altstadtgassen.", "La descripción oficial de las calles estrechas, sinuosas y empinadas.", "De officiële beschrijving van de smalle, kronkelende en steile straatjes.", "Den officiella beskrivningen av gamla stans smala, slingrande och branta gränder."),
        href: sourceHrefs.streets
      },
      {
        label: l("Turismo de Frigiliana · El Fuerte", "Turismo de Frigiliana · El Fuerte", "Turismo de Frigiliana · El Fuerte", "Turismo de Frigiliana · El Fuerte", "Turismo de Frigiliana · El Fuerte"),
        text: l("The official route, which starts in the village and leaves it by steps.", "Die offizielle Route, die im Dorf beginnt und es über Stufen verlässt.", "La ruta oficial, que empieza en el pueblo y sale por escalones.", "De officiële route, die in het dorp begint en het via trappen verlaat.", "Den officiella rutten, som börjar i byn och lämnar den via trappsteg."),
        href: sourceHrefs.elFuerte
      }
    ]
  },
  closing: {
    eyebrow: l("Winter at AMARA", "Winter bei AMARA", "Invierno en AMARA", "Winter bij AMARA", "Vinter hos AMARA"),
    title: l(
      "Tell us when you want to stay with us in Frigiliana",
      "Sagt uns, wann ihr bei uns in Frigiliana übernachten wollt",
      "Decidnos cuándo queréis alojaros con nosotros en Frigiliana",
      "Vertel ons wanneer jullie bij ons in Frigiliana willen overnachten",
      "Berätta när ni vill bo hos oss i Frigiliana"
    ),
    body: l(
      "If a quiet village, walks and long evenings indoors sound right, winter here works. Send us your dates and the one thing that matters most, and we will tell you which of the four fits.",
      "Wenn ruhiges Dorf, Wanderungen und lange Abende drinnen für euch passen, funktioniert der Winter hier. Schickt uns eure Reisedaten und die eine Sache, die euch am wichtigsten ist — wir sagen euch, welche der vier passt.",
      "Si os encajan un pueblo tranquilo, caminatas y tardes largas dentro de casa, el invierno aquí funciona. Enviadnos vuestras fechas y lo que más os importa, y os decimos cuál de los cuatro encaja.",
      "Als een rustig dorp, wandelingen en lange avonden binnen goed klinken, werkt de winter hier. Stuur ons jullie data en het ene dat het belangrijkst is, dan zeggen we welke van de vier past.",
      "Om en lugn by, vandringar och långa kvällar inomhus låter rätt fungerar vintern här. Skicka era datum och den sak som betyder mest, så säger vi vilket av de fyra som passar."
    ),
    locationLabel: l("Explore Frigiliana", "Frigiliana entdecken", "Descubrir Frigiliana", "Ontdek Frigiliana", "Upptäck Frigiliana"),
    propertyLabel: l("Check winter availability", "Winterverfügbarkeit prüfen", "Consultar disponibilidad", "Bekijk winterbeschikbaarheid", "Kontrollera vintertillgänglighet")
  }
};
