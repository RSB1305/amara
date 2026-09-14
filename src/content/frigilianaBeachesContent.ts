import { resolveLocale, type LocalizedText, type LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';
import { stayCollectionLabels } from './stayCollectionLabels';

export interface FrigilianaBeachSection {
  id: 'quiet' | 'nature' | 'nerja';
  title: string;
  intro: string;
  /** Recommendation record ids; the cards are built from the place copy (DR-GUEST-006). */
  beachIds: readonly string[];
}

export interface FrigilianaBeachesPageCopy {
  beachCardLabels: {
    bestFor: string;
    tip: string;
    map: string;
  };
  footerHighlights: {
    beaches: string;
    hiking: string;
    stays: string;
  };
  hero: {
    kicker: string;
    title: string;
    subtitle: string;
    paragraphs: string[];
    imageAlt: string;
  };
  sectionNav: {
    coast: string;
    quiet: string;
    nature: string;
    nerja: string;
    conditions: string;
    practical: string;
  };
  overview: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  beachSections: FrigilianaBeachSection[];
  conditions: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
  };
  practical: {
    title: string;
    intro: string;
    items: {
      title: string;
      text: string;
    }[];
    accessNote: {
      before: string;
      label: string;
      after: string;
      href: string;
    };
  };
  combine: {
    title: string;
    intro: string;
    baseDecision: {
      before: string;
      linkLabel: string;
      after: string;
      linkToken: 'playa';
    };
    items: {
      title: string;
      text: string;
      linkToken:
        | 'frigiliana_hiking_authority'
        | 'weather_frigiliana'
        | 'location_nerja'
        | 'frigiliana_food_authority'
        | 'stay_search_results'
        | 'nerja_nightlife_authority';
      linkLabel: string;
    }[];
  };
  closing: {
    title: string;
    lead: string;
    nextCta: string;
  };
}


const cantarrijanAccessInfo =
  'https://www.juntadeandalucia.es/medioambiente/portal/web/ventanadelvisitante/detalle-buscador-mapa/-/asset_publisher/Jlbxh2qB3NwR/content/acantilados-de-maro-cerro-gordo-2/255035';

export const frigilianaBeachesSeo: AmaraAuthoringSeo = {
  version: '2026-08-27-frigiliana-beaches-v1.1-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('frigiliana.experience.beaches'),
  article: {
    datePublished: '2026-07-29',
    dateModified: '2026-09-14',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Beaches near Frigiliana & Nerja: Coastal Guide',
      description:
        'Six beaches near Frigiliana, Nerja and Maro: town beach or pebble cove, chiringuito or silence, and our tip for each.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Strände bei Frigiliana & Nerja: Küsten-Guide',
      description:
        'Sechs Strände bei Frigiliana, Nerja und Maro: Stadtstrand oder Kiesbucht, Chiringuito oder Stille, und unser Tipp zu jedem.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Playas cerca de Frigiliana y Nerja: guía de costa',
      description:
        'Seis playas cerca de Frigiliana, Nerja y Maro: playa urbana o cala de guijarros, chiringuito o silencio, y nuestro consejo para cada una.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Stranden bij Frigiliana & Nerja: kustgids',
      description:
        'Zes stranden bij Frigiliana, Nerja en Maro: stadsstrand of kiezelbaai, chiringuito of stilte, en onze tip bij elk.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Stränder nära Frigiliana & Nerja: kustguide',
      description:
        'Sex stränder nära Frigiliana, Nerja och Maro: stadsstrand eller stenvik, chiringuito eller stillhet, och vårt tips till var och en.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * English is the semantic source of truth for this page.
 * Localizations preserve every recommendation, caveat and practical detail
 * while using native guest-facing language for each market.
 */
const frigilianaBeachesContentCopy = {
  "beachCardLabels": {
    "bestFor": {
      en: 'Best for',
      de: 'Am besten für',
      es: 'Ideal para',
      nl: 'Het best voor',
      sv: 'Bäst för'
    } satisfies LocalizedText,
    "tip": {
      en: 'Our take',
      de: 'Unser Tipp',
      es: 'Nuestro consejo',
      nl: 'Onze tip',
      sv: 'Vårt tips'
    } satisfies LocalizedText,
    "map": {
      en: 'Open in Google Maps',
      de: 'In Google Maps öffnen',
      es: 'Abrir en Google Maps',
      nl: 'Openen in Google Maps',
      sv: 'Öppna i Google Maps'
    } satisfies LocalizedText
  },
  "footerHighlights": {
    "beaches": {
      en: 'Beaches & coast',
      de: 'Strände & Küste',
      es: 'Playas y costa',
      nl: 'Stranden & kust',
      sv: 'Stränder & kust'
    } satisfies LocalizedText,
    "hiking": {
      en: 'Hiking & nature',
      de: 'Wandern & Natur',
      es: 'Senderismo y naturaleza',
      nl: 'Wandelen & natuur',
      sv: 'Vandring & natur'
    } satisfies LocalizedText,
    "stays": {
      en: stayCollectionLabels.structuralName.en,
      de: stayCollectionLabels.structuralName.de,
      es: stayCollectionLabels.structuralName.es,
      nl: stayCollectionLabels.structuralName.nl,
      sv: stayCollectionLabels.structuralName.sv
    } satisfies LocalizedText
  },
  "hero": {
    "kicker": {
      en: 'Coastal guide',
      de: 'Küsten-Guide',
      es: 'Guía de costa',
      nl: 'Kustgids',
      sv: 'Kustguide'
    } satisfies LocalizedText,
    "title": {
      en: 'Beaches near Frigiliana & Nerja',
      de: 'Strände bei Frigiliana & Nerja',
      es: 'Playas cerca de Frigiliana y Nerja',
      nl: 'Stranden bij Frigiliana & Nerja',
      sv: 'Stränder nära Frigiliana & Nerja'
    } satisfies LocalizedText,
    "subtitle": {
      en: 'From the village to Nerja’s beaches and Maro’s coves',
      de: 'Vom Dorf zu Nerjas Stränden und Maros Buchten',
      es: 'Del pueblo a las playas de Nerja y las calas de Maro',
      nl: 'Van het dorp naar de stranden van Nerja en de baaien bij Maro',
      sv: 'Från byn till Nerjas stränder och vikarna vid Maro'
    } satisfies LocalizedText,
    "paragraphs": {
      en: [
  "From Frigiliana, a beach day includes the journey down to the coast and back to the village. The bus takes you to Nerja, followed by a walk or taxi to the beach. By car, you can also head for Maro and Cantarriján, where seasonal access rules determine the final stretch.",
  "A town beach combines well with lunch and a walk around the Balcón de Europa. For a natural cove, bring water, sun protection and shoes for the approach. In the evening, you return to your accommodation in Frigiliana."
],
      de: [
  "Von Frigiliana aus gehört zum Strandtag immer die Fahrt hinunter an die Küste und später zurück ins Dorf. Mit dem Bus erreicht ihr Nerja; von dort geht es zu Fuß oder mit dem Taxi weiter zum Strand. Mit dem Auto könnt ihr auch die Buchten bei Maro und Cantarriján ansteuern, wo saisonale Zufahrtsregeln den letzten Abschnitt bestimmen.",
  "Ein Stadtstrand lässt sich mit Mittagessen und einem Spaziergang am Balcón de Europa verbinden. Für eine Naturbucht nehmt ihr Wasser, Sonnenschutz und Schuhe für den Zugang mit. Am Abend kehrt ihr zu eurer Unterkunft in Frigiliana zurück."
],
      es: [
  "Desde Frigiliana, el día de playa incluye la bajada a la costa y la vuelta al pueblo. El autobús os lleva a Nerja; después continuáis a pie o en taxi hasta la playa. En coche podéis ir también a Maro y Cantarriján, donde las normas de acceso de temporada determinan el último tramo.",
  "Una playa urbana se combina con un almuerzo y un paseo por el Balcón de Europa. Para una cala natural, llevad agua, protección solar y calzado para el acceso. Por la tarde regresáis a vuestro alojamiento en Frigiliana."
],
      nl: [
  "Vanuit Frigiliana hoort bij een stranddag de reis omlaag naar de kust en terug naar het dorp. De bus brengt jullie naar Nerja; daarna lopen jullie verder of nemen een taxi naar het strand. Met de auto kunnen jullie ook naar Maro en Cantarriján, waar seizoensregels het laatste deel van de route bepalen.",
  "Een stadsstrand is te combineren met lunch en een wandeling bij de Balcón de Europa. Voor een natuurlijke baai nemen jullie water, zonbescherming en schoenen voor het toegangspad mee. ’s Avonds keren jullie terug naar het verblijf in Frigiliana."
],
      sv: [
  "Från Frigiliana ingår resan ner till kusten och tillbaka till byn i stranddagen. Bussen tar er till Nerja; därifrån fortsätter ni till fots eller med taxi till stranden. Med bil kan ni även åka till Maro och Cantarriján, där säsongens tillträdesregler avgör den sista sträckan.",
  "En stadsstrand går att kombinera med lunch och en promenad vid Balcón de Europa. Till en naturvik tar ni med vatten, solskydd och skor för gångvägen. På kvällen återvänder ni till ert boende i Frigiliana."
]
    } satisfies LocalizedTextList,
    "imageAlt": {
      en: 'Palm trees and the Mediterranean coast near AMARA Playa in Nerja',
      de: 'Palmen und Mittelmeerküste nahe AMARA Playa in Nerja',
      es: 'Palmeras y costa mediterránea cerca de AMARA Playa en Nerja',
      nl: 'Palmbomen en de Middellandse Zeekust bij AMARA Playa in Nerja',
      sv: 'Palmer och Medelhavskust nära AMARA Playa i Nerja'
    } satisfies LocalizedText
  },
  "sectionNav": {
    "coast": {
      en: 'The coast',
      de: 'Die Küste',
      es: 'La costa',
      nl: 'De kust',
      sv: 'Kusten'
    } satisfies LocalizedText,
    "quiet": {
      en: 'Quiet coves',
      de: 'Ruhige Buchten',
      es: 'Calas tranquilas',
      nl: 'Rustige baaien',
      sv: 'Lugna vikar'
    } satisfies LocalizedText,
    "nature": {
      en: 'Nature & water',
      de: 'Natur & Wasser',
      es: 'Naturaleza y mar',
      nl: 'Natuur & water',
      sv: 'Natur & vatten'
    } satisfies LocalizedText,
    "nerja": {
      en: 'Nerja classics',
      de: 'Nerja-Klassiker',
      es: 'Clásicos de Nerja',
      nl: 'Nerja-klassiekers',
      sv: 'Nerja-klassiker'
    } satisfies LocalizedText,
    "conditions": {
      en: 'Wind & timing',
      de: 'Wind & Zeit',
      es: 'Viento y hora',
      nl: 'Wind & tijd',
      sv: 'Vind & tid'
    } satisfies LocalizedText,
    "practical": {
      en: 'Good to know',
      de: 'Gut zu wissen',
      es: 'Datos prácticos',
      nl: 'Praktisch',
      sv: 'Bra att veta'
    } satisfies LocalizedText
  },
  "overview": {
    "title": {
      en: 'Town beaches in Nerja or natural coves near Maro?',
      de: 'Stadtstrände in Nerja oder Naturbuchten bei Maro?',
      es: '¿Playas urbanas de Nerja o calas naturales de Maro?',
      nl: 'Stadsstranden in Nerja of natuurbaaien bij Maro?',
      sv: 'Stadsstränder i Nerja eller naturvikar vid Maro?'
    } satisfies LocalizedText,
    "intro": {
      en: 'Nerja and Maro are ten minutes apart and feel like two coasts: promenade and chiringuitos here, rocks, pebbles and clear water there.',
      de: 'Nerja und Maro liegen zehn Minuten auseinander und fühlen sich an wie zwei Küsten: hier Promenade und Chiringuitos, dort Felsen, Kies und klares Wasser.',
      es: 'Nerja y Maro están a diez minutos y parecen dos costas: aquí paseo marítimo y chiringuitos, allí rocas, guijarros y agua clara.',
      nl: 'Nerja en Maro liggen tien minuten van elkaar en voelen als twee kusten: hier promenade en chiringuito’s, daar rotsen, kiezels en helder water.',
      sv: 'Nerja och Maro ligger tio minuter från varandra och känns som två kuster: här strandpromenad och chiringuitos, där klippor, sten och klart vatten.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Nerja',
          de: 'Nerja',
          es: 'Nerja',
          nl: 'Nerja',
          sv: 'Nerja'
        } satisfies LocalizedText,
        "text": {
          en: 'Compact town beaches with sunbeds, showers and restaurants on the sand, loveliest early or in the late afternoon.',
          de: 'Kompakte Stadtstrände mit Liegen, Duschen und Restaurants am Sand, am schönsten früh oder am späten Nachmittag.',
          es: 'Playas urbanas compactas con hamacas, duchas y restaurantes en la arena, más bonitas a primera hora o a última de la tarde.',
          nl: 'Compacte stadsstranden met ligbedden, douches en restaurants op het zand, het mooist vroeg of in de late middag.',
          sv: 'Kompakta stadsstränder med solstolar, duschar och restauranger på sanden, vackrast tidigt eller sent på eftermiddagen.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Maro & the natural park',
          de: 'Maro & der Naturpark',
          es: 'Maro y el paraje natural',
          nl: 'Maro & het natuurgebied',
          sv: 'Maro & naturområdet'
        } satisfies LocalizedText,
        "text": {
          en: 'Pebble coves beneath cliffs, water clear enough for snorkelling; in return a path down and little shade.',
          de: 'Kiesbuchten unter Klippen, Wasser klar genug zum Schnorcheln; dafür ein Pfad hinunter und wenig Schatten.',
          es: 'Calas de guijarros bajo acantilados, agua lo bastante clara para hacer snorkel; a cambio, un sendero de bajada y poca sombra.',
          nl: 'Kiezelbaaien onder kliffen, water helder genoeg om te snorkelen; daarvoor een pad naar beneden en weinig schaduw.',
          sv: 'Stenvikar under klippor, vatten klart nog för snorkling; i gengäld en stig ner och lite skugga.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'The wind makes the sea',
          de: 'Der Wind macht das Meer',
          es: 'El viento hace el mar',
          nl: 'De wind maakt de zee',
          sv: 'Vinden gör havet'
        } satisfies LocalizedText,
        "text": {
          en: 'Wind makes waves, calm makes the water smooth and clear. Whether snorkelling or kayaking, the morning shows you.',
          de: 'Wind macht Welle, Windstille macht das Wasser glatt und klar. Ob Schnorcheln oder Kajak, zeigt der Morgen.',
          es: 'El viento trae olas, la calma deja el agua lisa y clara. Si toca snorkel o kayak, lo dice la mañana.',
          nl: 'Wind maakt golven, windstilte maakt het water glad en helder. Of het snorkelen of kajakken wordt, laat de ochtend zien.',
          sv: 'Vind gör vågor, vindstilla gör vattnet slätt och klart. Om det blir snorkling eller kajak visar morgonen.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Comfort or quiet',
          de: 'Komfort oder Stille',
          es: 'Comodidad o silencio',
          nl: 'Comfort of stilte',
          sv: 'Komfort eller stillhet'
        } satisfies LocalizedText,
        "text": {
          en: 'Where there are sunbeds and restaurants, there are people. Where the water is clearest, there are pebbles and no kiosk.',
          de: 'Wo Liegen und Restaurants sind, sind Menschen. Wo das Wasser am klarsten ist, gibt es Kies und keinen Kiosk.',
          es: 'Donde hay hamacas y restaurantes, hay gente. Donde el agua está más clara, hay guijarros y ningún chiringuito.',
          nl: 'Waar ligbedden en restaurants zijn, zijn mensen. Waar het water het helderst is, zijn kiezels en geen kiosk.',
          sv: 'Där det finns solstolar och restauranger finns det människor. Där vattnet är klarast finns sten och ingen kiosk.'
        } satisfies LocalizedText
      }
    ]
  },
  "beachSections": [
    {
      "id": 'quiet' as const,
      "title": {
        en: 'Quiet coves & unhurried afternoons',
        de: 'Ruhige Buchten & langsame Nachmittage',
        es: 'Calas tranquilas y tardes sin prisa',
        nl: 'Rustige baaien & trage middagen',
        sv: 'Lugna vikar & långsamma eftermiddagar'
      } satisfies LocalizedText,
      "intro": {
        en: 'For a swim, a picnic and a few slow hours.',
        de: 'Für eine Schwimmrunde, ein Picknick und ein paar langsame Stunden.',
        es: 'Para un baño, un pícnic y unas horas tranquilas.',
        nl: 'Voor een zwemrondje, een picknick en een paar langzame uren.',
        sv: 'För en simtur, en picknick och några långsamma timmar.'
      } satisfies LocalizedText,
      "beachIds": ['nerja.beaches.carabeillo', 'nerja.beaches.el-playazo'] as const
    },
    {
      "id": 'nature' as const,
      "title": {
        en: 'Nature, snorkelling & kayak days',
        de: 'Natur, Schnorcheln & Kajaktage',
        es: 'Naturaleza, snorkel y días de kayak',
        nl: 'Natuur, snorkelen & kajakken',
        sv: 'Natur, snorkling & kajakdagar'
      } satisfies LocalizedText,
      "intro": {
        en: 'East of Nerja lies the protected Maro–Cerro Gordo coast: rocks, open water, landscape. Here the sea decides the day.',
        de: 'Östlich von Nerja liegt die geschützte Küste von Maro–Cerro Gordo: Felsen, offenes Wasser, Landschaft. Hier entscheidet das Meer über den Tag.',
        es: 'Al este de Nerja está la costa protegida de Maro–Cerro Gordo: rocas, mar abierto, paisaje. Aquí el mar decide el día.',
        nl: 'Ten oosten van Nerja ligt de beschermde kust van Maro–Cerro Gordo: rotsen, open water, landschap. Hier bepaalt de zee de dag.',
        sv: 'Öster om Nerja ligger den skyddade kusten Maro–Cerro Gordo: klippor, öppet vatten, landskap. Här avgör havet dagen.'
      } satisfies LocalizedText,
      "beachIds": ['nerja.beaches.maro-beach', 'nerja.beaches.cantarrijan'] as const
    },
    {
      "id": 'nerja' as const,
      "title": {
        en: 'Classic Nerja & easy full beach days',
        de: 'Nerja-Klassiker & unkomplizierte Strandtage',
        es: 'Clásicos de Nerja y días de playa fáciles',
        nl: 'Nerja-klassiekers & gemakkelijke stranddagen',
        sv: 'Nerja-klassiker & enkla heldagar'
      } satisfies LocalizedText,
      "intro": {
        en: 'For days when beach, lunch and old town belong together.',
        de: 'Für Tage, an denen Strand, Mittagessen und Altstadt zusammengehören.',
        es: 'Para días en que playa, comida y casco antiguo van juntos.',
        nl: 'Voor dagen waarop strand, lunch en oude stad bij elkaar horen.',
        sv: 'För dagar då strand, lunch och gamla stan hör ihop.'
      } satisfies LocalizedText,
      "beachIds": ['nerja.beaches.calahonda', 'nerja.beaches.burriana-beach'] as const
    }
  ],
  "conditions": {
    "title": {
      en: 'What makes the beach day',
      de: 'Was den Strandtag macht',
      es: 'Lo que hace el día de playa',
      nl: 'Wat de stranddag maakt',
      sv: 'Vad som gör stranddagen'
    } satisfies LocalizedText,
    "intro": {
      en: 'The same beach is two beaches on two days. Time of day and wind decide more than the choice of cove.',
      de: 'Derselbe Strand ist an zwei Tagen zwei Strände. Uhrzeit und Wind entscheiden mehr als die Wahl der Bucht.',
      es: 'La misma playa es dos playas en dos días. La hora y el viento deciden más que la elección de la cala.',
      nl: 'Hetzelfde strand is op twee dagen twee stranden. Tijdstip en wind bepalen meer dan de keuze van de baai.',
      sv: 'Samma strand är två stränder på två dagar. Tid på dagen och vind avgör mer än valet av vik.'
    } satisfies LocalizedText,
    "items": [
      {
        "title": {
          en: 'Timing matters',
          de: 'Der Zeitpunkt zählt',
          es: 'La hora importa',
          nl: 'Timing telt',
          sv: 'Tidpunkten spelar roll'
        } satisfies LocalizedText,
        "text": {
          en: 'Small coves are small. In high summer they are yours in the morning and from five, everyone’s at midday.',
          de: 'Kleine Buchten sind klein. Im Hochsommer gehören sie morgens und ab fünf euch, mittags allen.',
          es: 'Las calas pequeñas son pequeñas. En pleno verano son vuestras por la mañana y a partir de las cinco, de todos a mediodía.',
          nl: 'Kleine baaien zijn klein. In de hoogzomer zijn ze ’s ochtends en vanaf vijf uur van jullie, ’s middags van iedereen.',
          sv: 'Små vikar är små. På högsommaren är de era på morgonen och från fem, allas mitt på dagen.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'The wind',
          de: 'Der Wind',
          es: 'El viento',
          nl: 'De wind',
          sv: 'Vinden'
        } satisfies LocalizedText,
        "text": {
          en: 'A sunny day can have waves. Take snorkel and kayak with you and decide at the water.',
          de: 'Ein sonniger Tag kann Welle haben. Schnorchel und Kajak nehmt ihr mit und entscheidet am Wasser.',
          es: 'Un día de sol puede tener olas. Llevad el snorkel y el kayak y decidid en el agua.',
          nl: 'Een zonnige dag kan golven hebben. Neem snorkel en kajak mee en beslis aan het water.',
          sv: 'En solig dag kan ha vågor. Ta med snorkel och kajak och bestäm vid vattnet.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Maro’s waterfalls are seasonal',
          de: 'Maros Wasserfälle sind saisonal',
          es: 'Las cascadas de Maro son estacionales',
          nl: 'De watervallen van Maro zijn seizoensgebonden',
          sv: 'Maros vattenfall är säsongsbundna'
        } satisfies LocalizedText,
        "text": {
          en: 'The waterfalls on the cliffs run after rain, mostly in spring. In the dry summer the landscape remains; the water comes back later.',
          de: 'Die Wasserfälle an den Felsen laufen nach Regen, meist im Frühjahr. Im trockenen Sommer bleibt die Landschaft, das Wasser kommt später wieder.',
          es: 'Las cascadas de los acantilados corren después de la lluvia, sobre todo en primavera. En el verano seco queda el paisaje; el agua vuelve más tarde.',
          nl: 'De watervallen op de rotsen lopen na regen, meestal in het voorjaar. In de droge zomer blijft het landschap; het water komt later terug.',
          sv: 'Vattenfallen på klipporna rinner efter regn, mest på våren. Under den torra sommaren finns landskapet kvar; vattnet kommer tillbaka senare.'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Sunbeds or pebbles',
          de: 'Liegen oder Kies',
          es: 'Hamacas o guijarros',
          nl: 'Ligbedden of kiezels',
          sv: 'Solstolar eller sten'
        } satisfies LocalizedText,
        "text": {
          en: 'Easy access and services mean people; the quiet spots with clear water have pebbles and a path.',
          de: 'Einfacher Zugang und Service bedeuten Menschen; die stillen Plätze mit klarem Wasser haben Kies und einen Pfad.',
          es: 'Acceso fácil y servicios significan gente; los sitios tranquilos con agua clara tienen guijarros y un sendero.',
          nl: 'Makkelijke toegang en service betekenen mensen; de stille plekken met helder water hebben kiezels en een pad.',
          sv: 'Lätt tillgång och service betyder människor; de stilla platserna med klart vatten har sten och en stig.'
        } satisfies LocalizedText
      }
    ]
  },
  "practical": {
    "title": {
      en: "From the village to the beach and back",
      de: "Vom Dorf zum Strand und zurück",
      es: "Del pueblo a la playa y de vuelta",
      nl: "Van het dorp naar het strand en terug",
      sv: "Från byn till stranden och tillbaka"
    } satisfies LocalizedText,
    "intro": {
      en: "The journey to the water and back to Frigiliana is part of the beach day. Your transport determines how freely you can extend the evening on the coast.",
      de: "Zum Strandtag gehören der Weg ans Wasser und die Rückfahrt nach Frigiliana. Das Verkehrsmittel legt fest, wie frei ihr den Abend an der Küste verbringen könnt.",
      es: "El camino al agua y el regreso a Frigiliana forman parte del día. El transporte determina cuánto podéis alargar la tarde en la costa.",
      nl: "De reis naar het water en terug naar Frigiliana hoort bij de stranddag. Het vervoer bepaalt hoe vrij jullie de avond aan de kust kunnen verlengen.",
      sv: "Resan till vattnet och hem till Frigiliana ingår i stranddagen. Färdsättet avgör hur fritt ni kan förlänga kvällen vid kusten."
    } satisfies LocalizedText,
    "items": [
      {
        "id": "bus" as const,
        "title": {
          en: "By bus to Nerja",
          de: "Mit dem Bus nach Nerja",
          es: "En autobús a Nerja",
          nl: "Met de bus naar Nerja",
          sv: "Med buss till Nerja"
        } satisfies LocalizedText,
        "text": {
          en: "Travel from Frigiliana to Nerja first, then continue to your beach. Before leaving, check the return connection to the village, especially if you would like to stay for dinner after swimming.",
          de: "Von Frigiliana fahrt ihr zunächst nach Nerja. Der weitere Weg zum Strand kommt hinzu; vor dem Losfahren braucht ihr auch die passende Rückverbindung ins Dorf, wenn ihr nach dem Baden noch essen gehen möchtet.",
          es: "Primero viajáis de Frigiliana a Nerja y después continuáis hasta la playa. Antes de salir, comprobad la conexión de vuelta al pueblo, sobre todo si queréis quedaros a cenar después del baño.",
          nl: "Jullie reizen eerst van Frigiliana naar Nerja en gaan daarna verder naar het strand. Controleer voor vertrek de terugverbinding naar het dorp, zeker als jullie na het zwemmen nog willen eten.",
          sv: "Ni reser först från Frigiliana till Nerja och fortsätter sedan till stranden. Kontrollera hemförbindelsen till byn före avfärd, särskilt om ni vill stanna och äta efter badet."
        } satisfies LocalizedText
      },
      {
        "id": "car" as const,
        "title": {
          en: "Parking for your day on the coast",
          de: "Ein Parkplatz für euren Küstentag",
          es: "Aparcar para vuestro día en la costa",
          nl: "Parkeren voor jullie kustdag",
          sv: "Parkering för kustdagen"
        } satisfies LocalizedText,
        "text": {
          en: "With a car, pair your chosen beach with parking nearby. At Maro and Cantarriján, seasonal rules can mean a shuttle or an extra walk; you carry your beach things on that final stretch.",
          de: "Mit dem Auto verbindet ihr den gewählten Strand mit einem Parkplatz vor Ort. In Maro und Cantarriján können saisonale Regeln einen Shuttle oder einen zusätzlichen Fußweg nötig machen; das Gepäck nehmt ihr auf diesem Abschnitt mit.",
          es: "Si vais en coche, la playa elegida y su aparcamiento van juntos. En Maro y Cantarriján, las normas de temporada pueden exigir una lanzadera o un tramo adicional a pie; llevaréis las bolsas de playa con vosotros.",
          nl: "Bij een stranddag met de auto hoort een passende parkeerplaats. In Maro en Cantarriján kunnen seizoensregels een shuttle of extra wandeling nodig maken; op dat laatste stuk dragen jullie de strandspullen mee.",
          sv: "Med bil hör den valda stranden ihop med en lämplig parkering. Vid Maro och Cantarriján kan säsongens regler kräva skyttelbuss eller en extra promenad; strandväskorna följer med på den sista sträckan."
        } satisfies LocalizedText
      },
      {
        "id": "return" as const,
        "title": {
          en: "Back to Casa AMARA",
          de: "Zurück zur Casa AMARA",
          es: "Volver a Casa AMARA",
          nl: "Terug naar Casa AMARA",
          sv: "Tillbaka till Casa AMARA"
        } satisfies LocalizedText,
        "text": {
          en: "After driving back, park in Frigiliana and walk to the house on Calle Chorruelo. Beach bags and shopping come with you on the final walk; showers and a change of clothes are back at your village stay.",
          de: "Nach der Rückfahrt parkt ihr in Frigiliana und geht zum Haus an der Calle Chorruelo. Badetasche und Einkäufe kommen auf dem letzten Fußweg mit; Duschen und Umziehen gehören dann wieder zu eurem Aufenthalt im Dorf.",
          es: "Al regresar, aparcáis en Frigiliana y camináis hasta la casa en Calle Chorruelo. Las bolsas de playa y la compra os acompañan en ese último tramo; os ducháis y cambiáis de ropa ya en vuestro alojamiento del pueblo.",
          nl: "Na de terugrit parkeren jullie in Frigiliana en lopen naar het huis aan Calle Chorruelo. Strandtassen en boodschappen gaan mee op dat laatste stuk; douchen en omkleden doen jullie weer in het verblijf in het dorp.",
          sv: "Efter hemresan parkerar ni i Frigiliana och går till huset på Calle Chorruelo. Strandväskor och inköp följer med sista biten; dusch och ombyte väntar i ert boende i byn."
        } satisfies LocalizedText
      }
    ],
    "accessNote": {
      "before": {
        en: 'In summer, access to Cantarriján is regulated; here are the ',
        de: 'Im Sommer ist die Zufahrt nach Cantarriján geregelt; hier stehen die ',
        es: 'En verano el acceso a Cantarriján está regulado; aquí están las ',
        nl: 'In de zomer is de toegang tot Cantarriján geregeld; hier staan de ',
        sv: 'På sommaren är tillfarten till Cantarriján reglerad; här finns '
      } satisfies LocalizedText,
      "label": {
        en: 'current visitor information from the Junta de Andalucía',
        de: 'aktuellen Besucherhinweise der Junta de Andalucía',
        es: 'información actual para visitantes de la Junta de Andalucía',
        nl: 'actuele bezoekersinformatie van de Junta de Andalucía',
        sv: 'aktuella besöksinformationen från Junta de Andalucía'
      } satisfies LocalizedText,
      "after": {
        en: '.',
        de: '.',
        es: '.',
        nl: '.',
        sv: '.'
      } satisfies LocalizedText,
      "href": cantarrijanAccessInfo
    }
  },
  "combine": {
    "title": {
      en: 'Combine your day',
      de: 'So lässt sich der Tag verbinden',
      es: 'Combinad el día',
      nl: 'Combineer jullie dag',
      sv: 'Kombinera dagen'
    } satisfies LocalizedText,
    "intro": {
      en: 'The beach is one part of the day; before and after, the village belongs to it.',
      de: 'Der Strand ist ein Teil des Tages; davor und danach gehört das Dorf dazu.',
      es: 'La playa es una parte del día; antes y después, el pueblo forma parte de él.',
      nl: 'Het strand is een deel van de dag; ervoor en erna hoort het dorp erbij.',
      sv: 'Stranden är en del av dagen; före och efter hör byn till.'
    } satisfies LocalizedText,
    "baseDecision": {
      "before": {
        en: 'Frigiliana remains a natural home base when the beach is a day trip. If spontaneous walk-to-beach access matters more, ',
        de: 'Frigiliana bleibt eine stimmige Basis, wenn der Strand ein Tagesausflug ist. Wenn ihr lieber spontan zu Fuß ans Meer gehen möchtet, ',
        es: 'Frigiliana sigue siendo una base muy lógica si la playa forma parte de una excursión. Si preferís bajar andando al mar cuando os apetezca, ',
        nl: 'Frigiliana blijft een logische uitvalsbasis wanneer het strand een daguitstap is. Willen jullie juist spontaan naar zee kunnen lopen, dan ',
        sv: 'Frigiliana är fortfarande en naturlig bas när stranden är en dagsutflykt. Om ni hellre vill kunna promenera spontant till havet '
      } satisfies LocalizedText,
      "linkLabel": {
        en: 'AMARA Playa in Nerja is 200 m from Torrecilla beach',
        de: 'liegt AMARA Playa in Nerja 200 m vom Strand Torrecilla entfernt',
        es: 'AMARA Playa en Nerja está a 200 m de la playa de Torrecilla',
        nl: 'ligt AMARA Playa in Nerja op 200 m van het Torrecilla-strand',
        sv: 'ligger AMARA Playa i Nerja 200 m från Torrecillastranden'
      } satisfies LocalizedText,
      "after": {
        en: '.',
        de: '.',
        es: '.',
        nl: '.',
        sv: '.'
      } satisfies LocalizedText,
      "linkToken": 'playa' as const
    },
    "items": [
      {
        "title": {
          en: 'From sea to summit',
          de: 'Vom Meer in die Berge',
          es: 'Del mar a la sierra',
          nl: 'Van zee naar berg',
          sv: 'Från hav till berg'
        } satisfies LocalizedText,
        "text": {
          en: 'An early swim and then a walk above Frigiliana; the long routes in the Sierra Almijara wait for a cooler day.',
          de: 'Ein frühes Bad und danach ein Spaziergang oberhalb von Frigiliana; die langen Routen in der Sierra Almijara warten auf einen kühleren Tag.',
          es: 'Un baño temprano y después un paseo por encima de Frigiliana; las rutas largas de la Sierra Almijara esperan a un día más fresco.',
          nl: 'Een vroege duik en daarna een wandeling boven Frigiliana; de lange routes in de Sierra Almijara wachten op een koelere dag.',
          sv: 'Ett tidigt dopp och sedan en promenad ovanför Frigiliana; de långa rutterna i Sierra Almijara väntar på en svalare dag.'
        } satisfies LocalizedText,
        "linkToken": 'frigiliana_hiking_authority' as const,
        "linkLabel": {
          en: 'See the hiking guide',
          de: 'Zum Wander-Guide',
          es: 'Ver la guía de senderismo',
          nl: 'Bekijk de wandelgids',
          sv: 'Se vandringsguiden'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Season and weather',
          de: 'Jahreszeit und Wetter',
          es: 'Estación y tiempo',
          nl: 'Seizoen en weer',
          sv: 'Säsong och väder'
        } satisfies LocalizedText,
        "text": {
          en: 'The climate says when you come; wind and sea say whether today is a beach day. Both are in the weather guide with the AEMET forecast.',
          de: 'Das Klima sagt, wann ihr kommt; Wind und Meer sagen, ob heute Strandtag ist. Beides steht im Wetter-Guide mit der AEMET-Vorhersage.',
          es: 'El clima dice cuándo venir; el viento y el mar dicen si hoy toca playa. Ambos están en la guía del tiempo con el pronóstico de AEMET.',
          nl: 'Het klimaat zegt wanneer je komt; wind en zee zeggen of het vandaag stranddag is. Beide staan in de weergids met de AEMET-voorspelling.',
          sv: 'Klimatet säger när ni kommer; vind och hav säger om det är stranddag i dag. Båda finns i väderguiden med AEMET-prognosen.'
        } satisfies LocalizedText,
        "linkToken": 'weather_frigiliana' as const,
        "linkLabel": {
          en: 'Compare weather and seasons',
          de: 'Wetter und Jahreszeiten vergleichen',
          es: 'Comparar tiempo y estaciones',
          nl: 'Vergelijk weer en seizoenen',
          sv: 'Jämför väder och årstider'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Combine Burriana with a daytime restaurant',
          de: 'Burriana mit einem Tagesrestaurant verbinden',
          es: 'Combinar Burriana con un restaurante de día',
          nl: 'Combineer Burriana met een restaurant voor overdag',
          sv: 'Kombinera Burriana med en restaurang dagtid'
        } satisfies LocalizedText,
        "text": {
          en: 'At Burriana, beach and lunch lie side by side: AYO on Paseo Burriana, paella from the big pan, for decades.',
          de: 'Am Burriana liegen Strand und Mittagessen nebeneinander: AYO am Paseo Burriana, Paella aus der großen Pfanne, seit Jahrzehnten.',
          es: 'En Burriana, playa y comida están juntas: AYO en el Paseo Burriana, paella de la paellera grande, desde hace décadas.',
          nl: 'Aan Burriana liggen strand en lunch naast elkaar: AYO aan Paseo Burriana, paella uit de grote pan, al decennia.',
          sv: 'Vid Burriana ligger strand och lunch sida vid sida: AYO på Paseo Burriana, paella från den stora pannan, sedan årtionden.'
        } satisfies LocalizedText,
        "linkToken": 'frigiliana_food_authority' as const,
        "linkLabel": {
          en: 'See the restaurant guide',
          de: 'Zum Restaurant-Guide',
          es: 'Ver la guía de restaurantes',
          nl: 'Bekijk de restaurantgids',
          sv: 'Se restaurangguiden'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Let a central Nerja beach afternoon become a sundowner',
          de: 'Aus einem Strandnachmittag im Zentrum einen Sundowner machen',
          es: 'Convertir una tarde de playa en el centro en un atardecer',
          nl: 'Laat een strandmiddag in centraal Nerja overgaan in een sundowner',
          sv: 'Låt en strandeftermiddag i centrala Nerja bli en sundowner'
        } satisfies LocalizedText,
        "text": {
          en: 'If the coast day ends near the old town, you walk on to Cochran’s Terrace. We watched the sunset there in summer 2025, with a Cuba Libre and a Mai Tai.',
          de: 'Endet der Küstentag nahe der Altstadt, geht ihr zu Fuß weiter zur Cochran’s Terrace. Wir haben dort im Sommer 2025 den Sonnenuntergang gesehen, mit Cuba Libre und Mai Tai.',
          es: 'Si el día de costa termina cerca del casco antiguo, seguid a pie hasta Cochran’s Terrace. Allí vimos el atardecer en el verano de 2025, con un cubalibre y un mai tai.',
          nl: 'Eindigt de kustdag bij de oude stad, dan loop je door naar Cochran’s Terrace. Daar zagen we in de zomer van 2025 de zon ondergaan, met een Cuba Libre en een Mai Tai.',
          sv: 'Slutar kustdagen nära gamla stan går ni vidare till Cochran’s Terrace. Där såg vi solnedgången sommaren 2025, med en Cuba Libre och en Mai Tai.'
        } satisfies LocalizedText,
        "linkToken": 'nerja_nightlife_authority' as const,
        "linkLabel": {
          en: 'See our Nerja sundowner',
          de: 'Zu unserem Nerja-Sundowner',
          es: 'Ver nuestro atardecer en Nerja',
          nl: 'Bekijk onze sundowner in Nerja',
          sv: 'Se vår sundowner i Nerja'
        } satisfies LocalizedText
      },
      {
        "title": {
          en: 'Which weeks are still open?',
          de: 'Welche Wochen sind noch frei?',
          es: '¿Qué semanas quedan libres?',
          nl: 'Welke weken zijn nog vrij?',
          sv: 'Vilka veckor är lediga?'
        } satisfies LocalizedText,
        "text": {
          en: 'The coast is a different day in May than in August. What is free on your dates comes with the total price for those nights.',
          de: 'Die Küste ist im Mai ein anderer Tag als im August. Was an euren Daten frei ist, seht ihr mit dem Gesamtpreis für diese Nächte.',
          es: 'La costa en mayo no es el mismo día que en agosto. Lo que hay libre en vuestras fechas aparece con el precio total de esas noches.',
          nl: 'De kust is in mei een andere dag dan in augustus. Wat er op jullie data vrij is, zie je met de totaalprijs voor die nachten.',
          sv: 'Kusten är en annan dag i maj än i augusti. Vad som är ledigt era datum visas med totalpriset för de nätterna.'
        } satisfies LocalizedText,
        "linkToken": 'stay_search_results' as const,
        "linkLabel": {
          en: 'See what is free on your dates',
          de: 'Sehen, was an euren Daten frei ist',
          es: 'Ver qué hay libre en vuestras fechas',
          nl: 'Bekijk wat vrij is op jullie data',
          sv: 'Se vad som är ledigt era datum'
        } satisfies LocalizedText
      }
    ]
  },
  "closing": {
    "title": {
      en: "From the beach back to Frigiliana",
      de: "Vom Strand zurück nach Frigiliana",
      es: "De la playa a Frigiliana",
      nl: "Van het strand terug naar Frigiliana",
      sv: "Från stranden tillbaka till Frigiliana"
    } satisfies LocalizedText,
    "lead": {
      en: "After a day on the coast, you return to Frigiliana’s old town. Our four stays in Casa AMARA are each for two guests. Lounis, Zaid and Maha have private terraces for an evening outside; Farah is our compact suite in the same house.",
      de: "Nach dem Strandtag an der Küste kehrt ihr in Frigilianas alten Dorfkern zurück. Unsere vier Unterkünfte in Casa AMARA sind jeweils für zwei Gäste. Bei Lounis, Zaid und Maha gehört eine private Terrasse für den Abend draußen dazu; Farah ist unsere kompakte Suite im selben Haus.",
      es: "Después de un día en la costa, volvéis al casco antiguo de Frigiliana. Nuestros cuatro alojamientos en Casa AMARA son para dos huéspedes cada uno. Lounis, Zaid y Maha tienen terrazas privadas para pasar la tarde al aire libre; Farah es nuestra suite compacta en la misma casa.",
      nl: "Na een dag aan de kust keren jullie terug naar de oude stad van Frigiliana. Onze vier verblijven in Casa AMARA zijn elk voor twee gasten. Lounis, Zaid en Maha hebben privéterrassen om de avond buiten door te brengen; Farah is onze compacte suite in hetzelfde huis.",
      sv: "Efter en dag vid kusten återvänder ni till Frigilianas gamla stan. Våra fyra boenden i Casa AMARA är vart och ett för två gäster. Lounis, Zaid och Maha har privata terrasser för en kväll utomhus; Farah är vår kompakta svit i samma hus."
    } satisfies LocalizedText,
    "nextCta": {
      en: "Our stays in Frigiliana",
      de: "Unsere Unterkünfte in Frigiliana",
      es: "Nuestros alojamientos en Frigiliana",
      nl: "Onze verblijven in Frigiliana",
      sv: "Våra boenden i Frigiliana"
    } satisfies LocalizedText
  }
};

export const frigilianaBeachesContent: Record<
  AmaraLanguage,
  FrigilianaBeachesPageCopy
> = {
  en: resolveLocale(frigilianaBeachesContentCopy, 'en'),
  de: resolveLocale(frigilianaBeachesContentCopy, 'de'),
  es: resolveLocale(frigilianaBeachesContentCopy, 'es'),
  nl: resolveLocale(frigilianaBeachesContentCopy, 'nl'),
  sv: resolveLocale(frigilianaBeachesContentCopy, 'sv')
};
