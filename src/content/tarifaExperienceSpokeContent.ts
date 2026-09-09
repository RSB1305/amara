import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { TarifaAuthorityChildId } from '../lib/tarifa/tarifaAuthoritySubnav';

export type LocalizedExperienceText = Record<AmaraLanguage, string>;

export type TarifaExperienceSpokeId = Extract<
  TarifaAuthorityChildId,
  'food-evening-life' | 'old-town-history' | 'bolonia-baelo-claudia' | 'yoga' | 'whale-watching' | 'family'
>;

export interface TarifaExperienceSpokeSection {
  id: string;
  /** Recommendation record this section presents, when it is about one place (DR-GUEST-006). */
  recordId?: string;
  eyebrow: LocalizedExperienceText;
  title: LocalizedExperienceText;
  paragraphs: LocalizedExperienceText[];
}

export interface TarifaExperienceSpokeContent {
  id: TarifaExperienceSpokeId;
  token: LinkToken;
  seo: AmaraAuthoringSeo;
  navLabel: LocalizedExperienceText;
  breadcrumbLabel: LocalizedExperienceText;
  hero: {
    eyebrow: LocalizedExperienceText;
    title: LocalizedExperienceText;
    standfirst: LocalizedExperienceText;
    note: LocalizedExperienceText;
    updated: LocalizedExperienceText;
  };
  facts: Array<{ label: LocalizedExperienceText; value: LocalizedExperienceText }>;
  sections: TarifaExperienceSpokeSection[];
  host: {
    eyebrow: LocalizedExperienceText;
    title: LocalizedExperienceText;
    paragraphs: LocalizedExperienceText[];
  };
  related: {
    eyebrow: LocalizedExperienceText;
    title: LocalizedExperienceText;
    links: Array<{
      token: LinkToken;
      label: LocalizedExperienceText;
      text: LocalizedExperienceText;
    }>;
  };
  sources: {
    eyebrow: LocalizedExperienceText;
    title: LocalizedExperienceText;
    intro: LocalizedExperienceText;
    checked: LocalizedExperienceText;
    links: Array<{
      label: LocalizedExperienceText;
      text: LocalizedExperienceText;
      href: string;
    }>;
  };
  closing: {
    eyebrow: LocalizedExperienceText;
    title: LocalizedExperienceText;
    body: LocalizedExperienceText;
    hubLabel: LocalizedExperienceText;
    propertyLabel: LocalizedExperienceText;
  };
  /**
   * Optional quiet block of external providers for topics with many operators
   * (e.g. whale watching). Links are followed editorial citations, opened in a
   * new tab. `guideNote` is one understated sentence, not a sales pitch.
   */
  operators?: {
    eyebrow: LocalizedExperienceText;
    title: LocalizedExperienceText;
    intro: LocalizedExperienceText;
    items: Array<{ name: string; href: string; note: LocalizedExperienceText }>;
    guideNote: LocalizedExperienceText;
  };
  /** Optional topic screen for the Guest Guide phone (overrides the generic home menu). */
  guidePreview?: {
    eyebrow?: LocalizedExperienceText;
    title: LocalizedExperienceText;
    subtitle: LocalizedExperienceText;
    cards: Array<{ icon: string; title: LocalizedExperienceText; meta: LocalizedExperienceText }>;
  };
}

const l = (
  en: string,
  de: string,
  es: string,
  nl: string,
  sv: string
): LocalizedExperienceText => ({ en, de, es, nl, sv });

const article = {
  datePublished: '2026-08-13',
  dateModified: '2026-08-13',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorRoute: 'about'
};

const buildSeo = (
  version: string,
  titles: LocalizedExperienceText,
  descriptions: LocalizedExperienceText,
  articleMeta: typeof article = article
): AmaraAuthoringSeo => ({
  version,
  pageType: 'B',
  entityKey: 'amara-brand',
  article: articleMeta,
  languages: {
    en: { title: titles.en, description: descriptions.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: titles.de, description: descriptions.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: titles.es, description: descriptions.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: titles.nl, description: descriptions.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: titles.sv, description: descriptions.sv, robots: 'index, follow', canonical: 'auto' }
  }
});

const shared = {
  sourceEyebrow: l('Sources', 'Quellen', 'Fuentes', 'Bronnen', 'Källor'),
  sourceTitle: l('Where the details come from', 'Woher die Angaben kommen', 'De dónde salen los datos', 'Waar de gegevens vandaan komen', 'Varifrån uppgifterna kommer'),
  sourceIntro: l(
    'The official pages behind this text.',
    'Die amtlichen Seiten hinter diesem Text.',
    'Las páginas oficiales detrás de este texto.',
    'De officiële pagina’s achter deze tekst.',
    'De officiella sidorna bakom den här texten.'
  ),
  checked: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026'),
  relatedEyebrow: l('Keep exploring', 'Tarifa weiter entdecken', 'Seguir descubriendo', 'Verder ontdekken', 'Fortsätt upptäcka'),
  relatedTitle: l('What else fits into the same holiday', 'Was sonst noch in denselben Urlaub passt', 'Qué más cabe en las mismas vacaciones', 'Wat verder nog in dezelfde vakantie past', 'Vad mer som ryms i samma semester'),
  closingEyebrow: l('Stay in Tarifa', 'In Tarifa bleiben', 'Alojarse en Tarifa', 'Verblijven in Tarifa', 'Bo i Tarifa'),
  hubLabel: l('All Tarifa experiences', 'Alle Tarifa-Erlebnisse', 'Todas las experiencias de Tarifa', 'Alle ervaringen in Tarifa', 'Alla upplevelser i Tarifa'),
  propertyLabel: l('View AMARA Family & Surf', 'AMARA Family & Surf ansehen', 'Ver AMARA Family & Surf', 'Bekijk AMARA Family & Surf', 'Visa AMARA Family & Surf')
} as const;

const sourceHrefs = {
  tarifaTourismGuide: 'https://turismodetarifa.com/wp-content/uploads/2023/12/GUIA-TURISTICA-TARIFA.pdf',
  tarifaTuna: 'https://www.aytotarifa.com/2014/05/07/los-bares-locales-se-inscriben-ya-en-la-ii-ruta-del-atun/',
  naturalPark: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/espacios-protegidos/legislacion-autonomica-nacional/parques-naturales/parque-natural-del-estrecho',
  naturalResources: 'https://www.juntadeandalucia.es/medioambiente/portal/landing-page/-/asset_publisher/4V1kD5gLiJkq/content/recursos-ecotur-c3-adsticos-del-parque-natural-del-estrecho/20151',
  naturalValues: 'https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/98730912/ES0000337_estrecho.pdf/e3a4ab47-1427-a912-723a-7eff1da38436?t=1683180853688',
  puertaJerez: 'https://turismodetarifa.com/que-visitar/puerta-jerez/',
  castillo: 'https://turismodetarifa.com/que-visitar/castillo-guzman-bueno/',
  walls: 'https://turismodetarifa.com/ruta-de-las-murallas/',
  baelo: 'https://www.juntadeandalucia.es/organismos/culturaydeporte/servicios/directorio-instituciones/detalle/2580.html',
  boloniaDune: 'https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/970015b9-a138-8d17-6b86-7b2cebad3964',
  mandalablue: 'https://www.mandalablueyoga.es/yoga-meditation-tarifa-schedule-and-bookings',
  respira: 'https://www.respirayogatarifa.com'
} as const;

const food: TarifaExperienceSpokeContent = {
  id: 'food-evening-life',
  token: 'tarifa_food_evening_life',
  seo: buildSeo(
    '2026-08-13-tarifa-food-evening-life-v1.0',
    l(
      'Eating and going out in Tarifa: tuna, tapas, old town',
      'Essen und Ausgehen in Tarifa: Thunfisch, Tapas, Altstadt',
      'Comer y salir en Tarifa: atún, tapas, casco antiguo',
      'Eten en uitgaan in Tarifa: tonijn, tapas, oude stad',
      'Mat och nöje i Tarifa: tonfisk, tapas, gamla stan'
    ),
    l(
      'Red tuna from the Almadraba, breakfast at SURLA, in the evening Calle Batalla del Salado and the lanes of the old town. Ten minutes on foot from our apartment.',
      'Roter Thunfisch aus der Almadraba, Frühstück im SURLA, abends die Calle Batalla del Salado und die Gassen der Altstadt. Von unserer Wohnung zehn Minuten zu Fuß.',
      'Atún rojo de almadraba, desayuno en SURLA, por la noche la calle Batalla del Salado y las callejuelas del casco antiguo. A diez minutos a pie de nuestro apartamento.',
      'Rode tonijn uit de Almadraba, ontbijt bij SURLA, ’s avonds de Calle Batalla del Salado en de steegjes van de oude stad. Tien minuten te voet van ons appartement.',
      'Röd tonfisk från almadraban, frukost på SURLA, på kvällen Calle Batalla del Salado och gränderna i gamla stan. Tio minuter till fots från vår lägenhet.'
    )
  ),
  navLabel: l('Food & Evening Life', 'Essen & Ausgehen', 'Gastronomía y vida nocturna', 'Eten & uitgaan', 'Mat & kvällsliv'),
  breadcrumbLabel: l('Food & Evening Life', 'Essen & Ausgehen', 'Gastronomía y vida nocturna', 'Eten & uitgaan', 'Mat & kvällsliv'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l(
      'Red tuna, açaí bowl and the lanes in the evening',
      'Roter Thunfisch, Açaí-Bowl und die Gassen am Abend',
      'Atún rojo, açaí bowl y las callejuelas por la noche',
      'Rode tonijn, açaí bowl en de steegjes ’s avonds',
      'Röd tonfisk, açaí bowl och gränderna på kvällen'
    ),
    standfirst: l(
      'In Tarifa the fish comes from the Atlantic and the tuna from the Almadraba, the nets that have stood off this coast for centuries. The evening begins on Calle Batalla del Salado and wanders into the old town. From our apartment it is ten to fifteen minutes on foot, and back again.',
      'In Tarifa kommt der Fisch aus dem Atlantik und der Thunfisch aus der Almadraba, den Netzen, die hier seit Jahrhunderten vor der Küste stehen. Der Abend beginnt an der Calle Batalla del Salado und wandert in die Altstadt. Von unserer Wohnung sind es zehn bis fünfzehn Minuten zu Fuß, zurück auch.',
      'En Tarifa el pescado viene del Atlántico y el atún de la almadraba, las redes que llevan siglos frente a esta costa. La noche empieza en la calle Batalla del Salado y se adentra en el casco antiguo. Desde nuestro apartamento son diez o quince minutos a pie, y otros tantos de vuelta.',
      'In Tarifa komt de vis uit de Atlantische Oceaan en de tonijn uit de Almadraba, de netten die hier al eeuwen voor de kust staan. De avond begint aan de Calle Batalla del Salado en trekt de oude stad in. Vanaf ons appartement is het tien tot vijftien minuten te voet, terug ook.',
      'I Tarifa kommer fisken från Atlanten och tonfisken från almadraban, näten som stått utanför kusten här i århundraden. Kvällen börjar på Calle Batalla del Salado och vandrar in i gamla stan. Från vår lägenhet är det tio till femton minuter till fots, tillbaka också.'
    ),
    note: l(
      '',
      '',
      '',
      '',
      ''
    ),
    updated: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')
  },
  facts: [
    { label: l('On the plate', 'Auf dem Teller', 'En el plato', 'Op het bord', 'På tallriken'), value: l('Atlantic fish, seafood, atún rojo', 'Atlantikfisch, Meeresfrüchte, atún rojo', 'Pescado del Atlántico, marisco, atún rojo', 'Atlantische vis, zeevruchten, atún rojo', 'Atlantfisk, skaldjur, atún rojo') },
    { label: l('The evening', 'Der Abend', 'La noche', 'De avond', 'Kvällen'), value: l('Calle Batalla del Salado, then the old town', 'Calle Batalla del Salado, dann die Altstadt', 'Calle Batalla del Salado, luego el casco antiguo', 'Calle Batalla del Salado, dan de oude stad', 'Calle Batalla del Salado, sedan gamla stan') },
    { label: l('From AMARA', 'Von AMARA', 'Desde AMARA', 'Vanaf AMARA', 'Från AMARA'), value: l('Old town ten to fifteen minutes on foot', 'Altstadt in zehn bis fünfzehn Minuten zu Fuß', 'Casco antiguo a diez o quince minutos a pie', 'Oude stad tien tot vijftien minuten te voet', 'Gamla stan tio till femton minuter till fots') }
  ],
  sections: [
    {
      id: 'coastal-table',
      eyebrow: l('01 · Coastal table', '01 · Küche der Küste', '01 · Mesa de costa', '01 · Tafel aan de kust', '01 · Kustens bord'),
      title: l('Food carries the Atlantic into town', 'Der Atlantik reicht bis auf den Teller', 'El Atlántico llega hasta la mesa', 'De Atlantische Oceaan loopt door tot op tafel', 'Atlanten följer med till bordet'),
      paragraphs: [
        l(
          'Tarifa lies on the Strait, and you can taste it: fish and seafood from the Atlantic, plus Andalusian cooking and a young, international scene.',
          'Tarifa liegt an der Meerenge, und das schmeckt man: Fisch und Meeresfrüchte aus dem Atlantik, dazu andalusische Küche und eine junge, internationale Szene.',
          'Tarifa está en el Estrecho, y se nota en el plato: pescado y marisco del Atlántico, además de cocina andaluza y una escena joven e internacional.',
          'Tarifa ligt aan de Straat, en dat proef je: vis en zeevruchten uit de Atlantische Oceaan, daarbij Andalusische keuken en een jonge, internationale scene.',
          'Tarifa ligger vid sundet, och det smakar man: fisk och skaldjur från Atlanten, därtill andalusiskt kök och en ung, internationell scen.'
        ),
        l(
          'Atún rojo is on almost every menu. If you want to know where the fish comes from, just ask.',
          'Atún rojo steht auf fast jeder Karte. Wer wissen will, woher der Fisch kommt, fragt einfach.',
          'El atún rojo está en casi todas las cartas. Quien quiera saber de dónde viene el pescado, simplemente pregunta.',
          'Atún rojo staat op bijna elke kaart. Wie wil weten waar de vis vandaan komt, vraagt het gewoon.',
          'Atún rojo står på nästan varje meny. Den som vill veta var fisken kommer ifrån frågar helt enkelt.'
        )
      ]
    },
    {
      id: 'almadraba',
      eyebrow: l('02 · Almadraba', '02 · Almadraba', '02 · Almadraba', '02 · Almadraba', '02 · Almadraba'),
      title: l('The Almadraba: nets that have stood for centuries', 'Die Almadraba: Netze, die seit Jahrhunderten stehen', 'La almadraba: redes que llevan siglos ahí', 'De Almadraba: netten die er al eeuwen staan', 'Almadraban: nät som stått i århundraden'),
      paragraphs: [
        l(
          'The Almadraba is a labyrinth of fixed nets off the coast of Cádiz into which the tuna swims on its migration into the Mediterranean. Tarifa belongs to this coast, which is why red tuna here is more than a dish.',
          'Die Almadraba ist ein Labyrinth aus festen Netzen vor der Küste von Cádiz, in das der Thunfisch auf seinem Zug ins Mittelmeer schwimmt. Tarifa gehört zu dieser Küste, deshalb ist der rote Thunfisch hier mehr als ein Gericht.',
          'La almadraba es un laberinto de redes fijas frente a la costa de Cádiz en el que entra el atún en su migración hacia el Mediterráneo. Tarifa pertenece a esa costa, por eso aquí el atún rojo es más que un plato.',
          'De Almadraba is een labyrint van vaste netten voor de kust van Cádiz, waarin de tonijn op zijn trek naar de Middellandse Zee zwemt. Tarifa hoort bij die kust, daarom is de rode tonijn hier meer dan een gerecht.',
          'Almadraban är en labyrint av fasta nät utanför Cádiz kust som tonfisken simmar in i på sin väg mot Medelhavet. Tarifa hör till den kusten, därför är den röda tonfisken här mer än en maträtt.'
        ),
        l(
          'It is fresh in spring, when the nets are up; the rest of the year it comes tinned or frozen, and good kitchens tell you which it is.',
          'Frisch ist er im Frühjahr, wenn die Netze stehen; den Rest des Jahres kommt er aus der Konserve oder tiefgekühlt, und gute Küchen sagen euch, welcher es ist.',
          'Fresco lo hay en primavera, cuando están las redes; el resto del año viene en conserva o congelado, y las buenas cocinas os dicen cuál es.',
          'Vers is hij in het voorjaar, als de netten staan; de rest van het jaar komt hij uit blik of uit de vriezer, en goede keukens zeggen je welke het is.',
          'Färsk är den på våren, när näten står; resten av året kommer den konserverad eller fryst, och bra kök säger er vilken det är.'
        )
      ]
    },
    {
      id: 'evening-rhythm',
      eyebrow: l('03 · Evening rhythm', '03 · Abendrhythmus', '03 · Ritmo nocturno', '03 · Avondritme', '03 · Kvällsrytm'),
      title: l('The evening begins on Calle Batalla del Salado', 'Der Abend beginnt an der Calle Batalla del Salado', 'La noche empieza en la calle Batalla del Salado', 'De avond begint aan de Calle Batalla del Salado', 'Kvällen börjar på Calle Batalla del Salado'),
      paragraphs: [
        l(
          'The evening usually begins on Calle Batalla del Salado, where the first restaurants and bars are, and wanders from there through the Puerta de Jerez into the old town.',
          'Der Abend beginnt meist an der Calle Batalla del Salado, wo die ersten Restaurants und Bars liegen, und wandert von dort durch die Puerta de Jerez in die Altstadt.',
          'La noche suele empezar en la calle Batalla del Salado, donde están los primeros restaurantes y bares, y desde allí se adentra por la Puerta de Jerez en el casco antiguo.',
          'De avond begint meestal aan de Calle Batalla del Salado, waar de eerste restaurants en bars liggen, en trekt van daar door de Puerta de Jerez de oude stad in.',
          'Kvällen börjar oftast på Calle Batalla del Salado, där de första restaurangerna och barerna ligger, och vandrar därifrån genom Puerta de Jerez in i gamla stan.'
        ),
        l(
          'On a warm night the lanes are full long after dark, and it may well be that a kitesurfing world champion is sitting at the bar next to you.',
          'In einer warmen Nacht sind die Gassen lange nach Einbruch der Dunkelheit voll, und es kann gut sein, dass an der Bar neben euch ein Kitesurf-Weltmeister sitzt.',
          'En una noche cálida las callejuelas siguen llenas mucho después de anochecer, y bien puede ser que en la barra de al lado esté sentado un campeón del mundo de kitesurf.',
          'Op een warme nacht zijn de steegjes lang na het invallen van de duisternis vol, en het kan goed zijn dat aan de bar naast je een wereldkampioen kitesurfen zit.',
          'En varm natt är gränderna fulla långt efter mörkrets inbrott, och det kan mycket väl hända att en världsmästare i kitesurfing sitter vid baren bredvid er.'
        ),
        l(
          'If you prefer it quieter, take a table in a side lane and be home by eleven. If not, stay.',
          'Wer es ruhiger mag, nimmt einen Tisch in einer Seitengasse und ist um elf zu Hause. Wer nicht, bleibt.',
          'Quien lo prefiera tranquilo, coge mesa en una calleja lateral y está en casa a las once. Quien no, se queda.',
          'Wie het rustiger wil, neemt een tafel in een zijsteegje en is om elf uur thuis. Wie niet, blijft.',
          'Den som vill ha det lugnare tar ett bord i en sidogränd och är hemma vid elva. Den som inte vill det stannar.'
        )
      ]
    },
    {
      id: 'shape-the-day',
      eyebrow: l('04 · A day that flows', '04 · Ein Tag im Fluss', '04 · Un día que fluye', '04 · Een dag die doorloopt', '04 · En dag som flyter'),
      title: l('Our day: breakfast, wind, dinner', 'Unser Tag: Frühstück, Wind, Abendessen', 'Nuestro día: desayuno, viento, cena', 'Onze dag: ontbijt, wind, avondeten', 'Vår dag: frukost, vind, middag'),
      paragraphs: [
        l(
          'Our day begins with breakfast: an açaí bowl at Café SURLA or Powerhouse, or Helenas Kitchen right next to our front door in La Marina.',
          'Unser Tag beginnt mit dem Frühstück: eine Açaí-Bowl im Café SURLA oder im Powerhouse, oder Helenas Kitchen direkt neben unserer Haustür in La Marina.',
          'Nuestro día empieza con el desayuno: un açaí bowl en el Café SURLA o en Powerhouse, o Helenas Kitchen justo al lado de nuestra puerta en La Marina.',
          'Onze dag begint met het ontbijt: een açaí bowl bij Café SURLA of Powerhouse, of Helenas Kitchen direct naast onze voordeur in La Marina.',
          'Vår dag börjar med frukosten: en açaí bowl på Café SURLA eller Powerhouse, eller Helenas Kitchen alldeles intill vår dörr i La Marina.'
        ),
        l(
          'Then the wind decides. If it comes, we go out on the water and eat late; if it stays away, the day is for Bolonia or a long lunch on the beach.',
          'Dann entscheidet der Wind. Kommt er, gehen wir aufs Wasser und essen spät; bleibt er aus, ist der Tag für Bolonia oder ein langes Mittagessen am Strand.',
          'Luego decide el viento. Si llega, salimos al agua y cenamos tarde; si no viene, el día es para Bolonia o una comida larga en la playa.',
          'Dan beslist de wind. Komt hij, dan gaan we het water op en eten we laat; blijft hij weg, dan is de dag voor Bolonia of een lange lunch op het strand.',
          'Sedan avgör vinden. Kommer den går vi ut på vattnet och äter sent; uteblir den är dagen till för Bolonia eller en lång lunch på stranden.'
        ),
        l(
          'In the evening we walk into town and see where there is room.',
          'Abends laufen wir in die Stadt und schauen, wo Platz ist.',
          'Por la noche bajamos andando al pueblo y miramos dónde hay sitio.',
          '’s Avonds lopen we de stad in en kijken waar plek is.',
          'På kvällen går vi in till stan och ser var det finns plats.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('From La Marina', 'Von La Marina aus', 'Desde La Marina', 'Vanuit La Marina', 'Från La Marina'),
    title: l('There on foot, back on foot', 'Zu Fuß hin, zu Fuß zurück', 'A pie para ir, a pie para volver', 'Te voet heen, te voet terug', 'Till fots dit, till fots tillbaka'),
    paragraphs: [
      l(
        'From Family & Surf it is ten to fifteen minutes on foot into the old town. The car stays in the garage, and the wine can be a second one.',
        'Von Family & Surf sind es zehn bis fünfzehn Minuten zu Fuß in die Altstadt. Das Auto bleibt in der Garage, der Wein darf ein zweiter sein.',
        'Desde Family & Surf son diez o quince minutos a pie hasta el casco antiguo. El coche se queda en el garaje, y el vino puede ser el segundo.',
        'Vanaf Family & Surf is het tien tot vijftien minuten te voet naar de oude stad. De auto blijft in de garage, en de wijn mag een tweede zijn.',
        'Från Family & Surf är det tio till femton minuter till fots in till gamla stan. Bilen står kvar i garaget, och vinet får bli ett andra.'
      ),
      l(
        'For evenings at home the Mercadona is opposite, and we get bread at Pastelito or Bernal.',
        'Für die Abende zu Hause liegt der Mercadona gegenüber, und Brot holen wir bei Pastelito oder Bernal.',
        'Para las noches en casa el Mercadona está enfrente, y el pan lo compramos en Pastelito o Bernal.',
        'Voor de avonden thuis ligt de Mercadona aan de overkant, en brood halen we bij Pastelito of Bernal.',
        'För kvällarna hemma ligger Mercadona mittemot, och bröd hämtar vi på Pastelito eller Bernal.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_old_town_history', label: l('Old Town & History', 'Altstadt & Geschichte', 'Casco antiguo e historia', 'Oude stad & geschiedenis', 'Gamla stan & historia'), text: l('Puerta de Jerez, Castillo and the lanes between.', 'Puerta de Jerez, Castillo und die Gassen dazwischen.', 'Puerta de Jerez, castillo y las callejuelas entre medias.', 'Puerta de Jerez, Castillo en de steegjes ertussen.', 'Puerta de Jerez, Castillo och gränderna emellan.') },
      { token: 'tarifa_beaches_authority', label: l('Beaches & Coast', 'Strände & Küste', 'Playas y costa', 'Stranden & kust', 'Stränder & kust'), text: l('Playa Chica for swimming, Los Lances for the wind.', 'Playa Chica zum Baden, Los Lances für den Wind.', 'Playa Chica para bañarse, Los Lances para el viento.', 'Playa Chica om te zwemmen, Los Lances voor de wind.', 'Playa Chica för bad, Los Lances för vinden.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Beach, wind, old town, nature, Bolonia, yoga.', 'Strand, Wind, Altstadt, Natur, Bolonia, Yoga.', 'Playa, viento, casco antiguo, naturaleza, Bolonia, yoga.', 'Strand, wind, oude stad, natuur, Bolonia, yoga.', 'Strand, vind, gamla stan, natur, Bolonia, yoga.') }
    ]
  },
  sources: {
    eyebrow: shared.sourceEyebrow,
    title: shared.sourceTitle,
    intro: shared.sourceIntro,
    checked: shared.checked,
    links: [
      { label: l('Tarifa Tourism · Official visitor guide', 'Tarifa Tourismus · Offizieller Besucherführer', 'Turismo de Tarifa · Guía turística oficial', 'Tarifa Toerisme · Officiële bezoekersgids', 'Tarifa Turism · Officiell besöksguide'), text: l('Local context for gastronomy, tuna traditions and the historic centre.', 'Ortskontext zu Gastronomie, Thunfischtradition und historischem Zentrum.', 'Contexto local sobre gastronomía, tradición atunera y casco histórico.', 'Plaatselijke context over gastronomie, tonijntraditie en historisch centrum.', 'Lokal bakgrund om gastronomi, tonfisktradition och historiskt centrum.'), href: sourceHrefs.tarifaTourismGuide },
      { label: l('Tarifa Town Council · Tuna tradition', 'Stadt Tarifa · Thunfischtradition', 'Ayuntamiento de Tarifa · Tradición del atún', 'Gemeente Tarifa · Tonijntraditie', 'Tarifa kommun · Tonfisktradition'), text: l('Municipal context for Tarifa as a coastal Almadraba community and its food culture.', 'Kommunaler Kontext zu Tarifa als Küstenort der Almadraba und seiner Esskultur.', 'Contexto municipal sobre Tarifa como municipio almadrabero y su cultura gastronómica.', 'Gemeentelijke context over Tarifa als almadrabaplaats en de eetcultuur.', 'Kommunal bakgrund om Tarifa som almadrabastad och dess matkultur.'), href: sourceHrefs.tarifaTuna }
    ]
  },
  closing: {
    eyebrow: shared.closingEyebrow,
    title: l('Into town on foot in the evening', 'Abends zu Fuß in die Stadt', 'Por la noche, a pie al pueblo', '’s Avonds te voet de stad in', 'Till fots in till stan på kvällen'),
    body: l('From Family & Surf it is ten to fifteen minutes on foot into the old town, and for evenings at home the supermarket is opposite.', 'Von Family & Surf sind es zehn bis fünfzehn Minuten zu Fuß in die Altstadt, und für die Abende zu Hause liegt der Supermarkt gegenüber.', 'Desde Family & Surf son diez o quince minutos a pie hasta el casco antiguo, y para las noches en casa el supermercado está enfrente.', 'Vanaf Family & Surf is het tien tot vijftien minuten te voet naar de oude stad, en voor de avonden thuis ligt de supermarkt aan de overkant.', 'Från Family & Surf är det tio till femton minuter till fots in till gamla stan, och för kvällarna hemma ligger mataffären mittemot.'),
    hubLabel: shared.hubLabel,
    propertyLabel: shared.propertyLabel
  }
};

const oldTown: TarifaExperienceSpokeContent = {
  id: 'old-town-history',
  token: 'tarifa_old_town_history',
  seo: buildSeo(
    '2026-08-13-tarifa-old-town-history-v1.0',
    l(
      'Tarifa’s old town: Puerta de Jerez, Castillo and lanes',
      'Tarifas Altstadt: Puerta de Jerez, Castillo und Gassen',
      'El casco antiguo de Tarifa: Puerta de Jerez, castillo y callejuelas',
      'De oude stad van Tarifa: Puerta de Jerez, Castillo en steegjes',
      'Tarifas gamla stan: Puerta de Jerez, Castillo och gränder'
    ),
    l(
      'Through the Puerta de Jerez into the walled old town, the 10th-century Castillo, lanes with cafés and tapas. Ten minutes on foot from our apartment.',
      'Durch die Puerta de Jerez in die ummauerte Altstadt, das Castillo aus dem 10. Jahrhundert, Gassen mit Cafés und Tapas. Von unserer Wohnung zehn Minuten zu Fuß.',
      'Por la Puerta de Jerez al casco antiguo amurallado, el castillo del siglo X, callejuelas con cafés y tapas. A diez minutos a pie de nuestro apartamento.',
      'Door de Puerta de Jerez de ommuurde oude stad in, het Castillo uit de 10e eeuw, steegjes met cafés en tapas. Tien minuten te voet van ons appartement.',
      'Genom Puerta de Jerez in i den muromgärdade gamla stan, Castillo från 900-talet, gränder med kaféer och tapas. Tio minuter till fots från vår lägenhet.'
    )
  ),
  navLabel: l('Old Town & History', 'Altstadt & Geschichte', 'Casco antiguo e historia', 'Oude stad & geschiedenis', 'Gamla stan & historia'),
  breadcrumbLabel: l('Old Town & History', 'Altstadt & Geschichte', 'Casco antiguo e historia', 'Oude stad & geschiedenis', 'Gamla stan & historia'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l('Through the Puerta de Jerez into the old town', 'Durch die Puerta de Jerez in die Altstadt', 'Por la Puerta de Jerez al casco antiguo', 'Door de Puerta de Jerez de oude stad in', 'Genom Puerta de Jerez in i gamla stan'),
    standfirst: l(
      'Tarifa’s old town lies behind a town wall. You enter through the Puerta de Jerez, the 10th-century Castillo de Guzmán el Bueno stands by the port, and in the lanes between you sit in a café in the afternoon and over tapas in the evening. From our apartment it is ten to fifteen minutes on foot.',
      'Tarifas Altstadt liegt hinter einer Stadtmauer. Ihr geht durch die Puerta de Jerez hinein, das Castillo de Guzmán el Bueno aus dem 10. Jahrhundert steht am Hafen, und in den Gassen dazwischen sitzt ihr nachmittags im Café und abends bei Tapas. Von unserer Wohnung sind es zehn bis fünfzehn Minuten zu Fuß.',
      'El casco antiguo de Tarifa está tras una muralla. Se entra por la Puerta de Jerez, el castillo de Guzmán el Bueno, del siglo X, está junto al puerto, y en las callejuelas entre medias os sentáis por la tarde en un café y por la noche a tapear. Desde nuestro apartamento son diez o quince minutos a pie.',
      'De oude stad van Tarifa ligt achter een stadsmuur. Je gaat door de Puerta de Jerez naar binnen, het Castillo de Guzmán el Bueno uit de 10e eeuw staat bij de haven, en in de steegjes ertussen zit je ’s middags in het café en ’s avonds bij de tapas. Vanaf ons appartement is het tien tot vijftien minuten te voet.',
      'Tarifas gamla stan ligger bakom en stadsmur. Ni går in genom Puerta de Jerez, Castillo de Guzmán el Bueno från 900-talet står vid hamnen, och i gränderna emellan sitter ni på kafé på eftermiddagen och vid tapas på kvällen. Från vår lägenhet är det tio till femton minuter till fots.'
    ),
    note: l(
      '',
      '',
      '',
      '',
      ''
    ),
    updated: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')
  },
  facts: [
    { label: l('Historic entrance', 'Historischer Eingang', 'Entrada histórica', 'Historische toegang', 'Historisk ingång'), value: l('Puerta de Jerez', 'Puerta de Jerez', 'Puerta de Jerez', 'Puerta de Jerez', 'Puerta de Jerez') },
    { label: l('The Castillo', 'Das Castillo', 'El castillo', 'Het Castillo', 'Castillo'), value: l('Castle from the caliphal period, 10th century', 'Burg aus der Kalifenzeit, 10. Jahrhundert', 'Castillo de época califal, siglo X', 'Burcht uit de kalifentijd, 10e eeuw', 'Borg från kalifatets tid, 900-talet') },
    { label: l('From AMARA', 'Von AMARA', 'Desde AMARA', 'Vanaf AMARA', 'Från AMARA'), value: l('Ten to fifteen minutes on foot', 'Zehn bis fünfzehn Minuten zu Fuß', 'Diez o quince minutos a pie', 'Tien tot vijftien minuten te voet', 'Tio till femton minuter till fots') }
  ],
  sections: [
    {
      id: 'strait-town',
      eyebrow: l('01 · Strait town', '01 · Stadt an der Meerenge', '01 · Ciudad del Estrecho', '01 · Stad aan de Straat', '01 · Stad vid sundet'),
      title: l('A town built to guard the Strait', 'Eine Stadt, gebaut, um die Meerenge zu bewachen', 'Una ciudad construida para vigilar el Estrecho', 'Een stad, gebouwd om de Straat te bewaken', 'En stad byggd för att vakta sundet'),
      paragraphs: [
        l(
          'Whoever controlled the Strait controlled the way between two seas and two continents. That is why Tarifa has walls, a Castillo and gates, and why the old town looks out over the water.',
          'Wer die Meerenge kontrollierte, kontrollierte den Weg zwischen zwei Meeren und zwei Kontinenten. Deshalb hat Tarifa Mauern, ein Castillo und Tore, und deshalb blickt die Altstadt aufs Wasser.',
          'Quien controlaba el Estrecho controlaba el paso entre dos mares y dos continentes. Por eso Tarifa tiene murallas, un castillo y puertas, y por eso el casco antiguo mira al agua.',
          'Wie de Straat beheerste, beheerste de weg tussen twee zeeën en twee continenten. Daarom heeft Tarifa muren, een Castillo en poorten, en daarom kijkt de oude stad uit over het water.',
          'Den som kontrollerade sundet kontrollerade vägen mellan två hav och två kontinenter. Därför har Tarifa murar, ett Castillo och portar, och därför blickar gamla stan ut över vattnet.'
        ),
        l(
          'You notice it as you walk: the lanes climb, the wall keeps reappearing, and at the end you are standing at the port.',
          'Ihr merkt es beim Gehen: Die Gassen steigen an, die Mauer taucht immer wieder auf, und am Ende steht ihr am Hafen.',
          'Se nota al caminar: las callejuelas suben, la muralla reaparece una y otra vez, y al final estáis en el puerto.',
          'Je merkt het al lopend: de steegjes stijgen, de muur duikt steeds weer op, en aan het eind sta je bij de haven.',
          'Ni märker det när ni går: gränderna stiger, muren dyker upp gång på gång, och till slut står ni vid hamnen.'
        )
      ]
    },
    {
      id: 'puerta-jerez',
      eyebrow: l('02 · Puerta de Jerez', '02 · Puerta de Jerez', '02 · Puerta de Jerez', '02 · Puerta de Jerez', '02 · Puerta de Jerez'),
      title: l('Enter through the surviving gate', 'Durch das erhaltene Stadttor hinein', 'Entrar por la puerta conservada', 'Ga naar binnen door de bewaard gebleven poort', 'Gå in genom den bevarade porten'),
      paragraphs: [
        l(
          'The Puerta de Jerez belonged to the last ring of walls and is still the gate into the old town. Outside the modern town, inside narrow lanes and white houses.',
          'Die Puerta de Jerez gehörte zum letzten Mauerring und ist bis heute das Tor in die Altstadt. Draußen die moderne Stadt, drinnen enge Gassen und weiße Häuser.',
          'La Puerta de Jerez formaba parte del último recinto amurallado y sigue siendo la puerta al casco antiguo. Fuera, la ciudad moderna; dentro, callejuelas estrechas y casas blancas.',
          'De Puerta de Jerez hoorde bij de laatste muurring en is tot vandaag de poort naar de oude stad. Buiten de moderne stad, binnen nauwe steegjes en witte huizen.',
          'Puerta de Jerez tillhörde den sista murringen och är än i dag porten in till gamla stan. Utanför den moderna staden, innanför smala gränder och vita hus.'
        ),
        l(
          'Behind it begins the part of Tarifa that is loveliest on foot: small squares, cafés and again and again a glimpse of the wall.',
          'Dahinter beginnt der Teil von Tarifa, der zu Fuß am schönsten ist: kleine Plätze, Cafés und immer wieder ein Blick auf die Mauer.',
          'Detrás empieza la parte de Tarifa más bonita a pie: plazas pequeñas, cafés y, una y otra vez, una vista de la muralla.',
          'Daarachter begint het deel van Tarifa dat te voet het mooist is: kleine pleinen, cafés en steeds weer een blik op de muur.',
          'Bakom den börjar den del av Tarifa som är vackrast till fots: små torg, kaféer och gång på gång en blick på muren.'
        )
      ]
    },
    {
      id: 'castle-walls',
      recordId: 'tarifa.sightseeing.castillo-de-guzman-el-bueno',
      eyebrow: l('03 · Castle & walls', '03 · Burg & Mauern', '03 · Castillo y murallas', '03 · Kasteel & muren', '03 · Borg & murar'),
      title: l('The Castillo de Guzmán el Bueno', 'Das Castillo de Guzmán el Bueno', 'El castillo de Guzmán el Bueno', 'Het Castillo de Guzmán el Bueno', 'Castillo de Guzmán el Bueno'),
      paragraphs: [
        l(
          'The Castillo dates from the 10th century, the time of the caliphs, and was extended over the centuries. It stands by the port, looking out over the Strait.',
          'Das Castillo stammt aus dem 10. Jahrhundert, aus der Zeit der Kalifen, und wurde über die Jahrhunderte weitergebaut. Es steht am Hafen, mit Blick auf die Meerenge.',
          'El castillo es del siglo X, de la época de los califas, y se fue ampliando a lo largo de los siglos. Está junto al puerto, con vistas al Estrecho.',
          'Het Castillo stamt uit de 10e eeuw, de tijd van de kaliefen, en werd door de eeuwen heen uitgebouwd. Het staat bij de haven, met uitzicht op de Straat.',
          'Castillo är från 900-talet, kalifernas tid, och byggdes vidare genom århundradena. Det står vid hamnen, med utsikt över sundet.'
        ),
        l(
          'An hour is enough for walls and view; the rest of the afternoon belongs to the lanes.',
          'Eine Stunde reicht für Mauern und Blick, der Rest des Nachmittags gehört den Gassen.',
          'Una hora basta para murallas y vistas; el resto de la tarde es de las callejuelas.',
          'Een uur is genoeg voor muren en uitzicht, de rest van de middag is voor de steegjes.',
          'En timme räcker för murar och utsikt, resten av eftermiddagen tillhör gränderna.'
        )
      ]
    },
    {
      id: 'day-to-evening',
      eyebrow: l('04 · Lived Old Town', '04 · Gelebte Altstadt', '04 · Casco antiguo vivido', '04 · Levende oude stad', '04 · Levande Gamla stan'),
      title: l('Café in the afternoon, tapas in the evening', 'Nachmittags Café, abends Tapas', 'Café por la tarde, tapas por la noche', '’s Middags café, ’s avonds tapas', 'Kafé på eftermiddagen, tapas på kvällen'),
      paragraphs: [
        l(
          'The old town is lived in: cafés, small shops, squares with children and dogs. In the afternoon you sit in the shade of a lane; in the evening the tables fill.',
          'Die Altstadt ist bewohnt: Cafés, kleine Läden, Plätze mit Kindern und Hunden. Nachmittags sitzt ihr im Schatten einer Gasse, abends füllen sich die Tische.',
          'El casco antiguo está habitado: cafés, tiendas pequeñas, plazas con niños y perros. Por la tarde os sentáis a la sombra de una calleja, por la noche se llenan las mesas.',
          'De oude stad is bewoond: cafés, kleine winkels, pleinen met kinderen en honden. ’s Middags zit je in de schaduw van een steegje, ’s avonds vullen de tafels zich.',
          'Gamla stan är bebodd: kaféer, små butiker, torg med barn och hundar. På eftermiddagen sitter ni i skuggan av en gränd, på kvällen fylls borden.'
        ),
        l(
          'The evening begins outside on Calle Batalla del Salado and moves in through the Puerta de Jerez. At midnight there is still life in the lanes.',
          'Der Abend beginnt draußen an der Calle Batalla del Salado und zieht durch die Puerta de Jerez nach innen. Um Mitternacht ist in den Gassen noch Leben.',
          'La noche empieza fuera, en la calle Batalla del Salado, y entra por la Puerta de Jerez. A medianoche aún hay vida en las callejuelas.',
          'De avond begint buiten aan de Calle Batalla del Salado en trekt door de Puerta de Jerez naar binnen. Om middernacht is er in de steegjes nog leven.',
          'Kvällen börjar utanför på Calle Batalla del Salado och drar in genom Puerta de Jerez. Vid midnatt är det fortfarande liv i gränderna.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('From La Marina', 'Von La Marina aus', 'Desde La Marina', 'Vanuit La Marina', 'Från La Marina'),
    title: l('Twice over: once in the light, once in the dark', 'Zweimal hin: einmal im Licht, einmal im Dunkeln', 'Dos veces: una con luz, otra de noche', 'Twee keer: een keer in het licht, een keer in het donker', 'Två gånger: en gång i ljuset, en gång i mörkret'),
    paragraphs: [
      l(
        'From Family & Surf it is ten to fifteen minutes on foot. You go in the afternoon, home to the terrace, and back again in the evening for dinner.',
        'Von Family & Surf sind es zehn bis fünfzehn Minuten zu Fuß. Ihr geht nachmittags hin, nach Hause auf die Terrasse und abends noch einmal zum Essen.',
        'Desde Family & Surf son diez o quince minutos a pie. Vais por la tarde, volvéis a casa a la terraza y por la noche otra vez a cenar.',
        'Vanaf Family & Surf is het tien tot vijftien minuten te voet. Je gaat ’s middags, naar huis op het terras en ’s avonds nog eens om te eten.',
        'Från Family & Surf är det tio till femton minuter till fots. Ni går dit på eftermiddagen, hem till terrassen och på kvällen en gång till för att äta.'
      ),
      l(
        'That is how we like the old town best: the same lanes in two moods.',
        'So sehen wir die Altstadt am liebsten: dieselben Gassen in zwei Stimmungen.',
        'Así es como más nos gusta el casco antiguo: las mismas callejuelas en dos ambientes.',
        'Zo zien we de oude stad het liefst: dezelfde steegjes in twee stemmingen.',
        'Så ser vi gamla stan helst: samma gränder i två stämningar.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_food_evening_life', label: l('Food & Evening Life', 'Essen & Ausgehen', 'Gastronomía y vida nocturna', 'Eten & uitgaan', 'Mat & kvällsliv'), text: l('Red tuna, Calle Batalla del Salado and the bars.', 'Roter Thunfisch, die Calle Batalla del Salado und die Bars.', 'Atún rojo, la calle Batalla del Salado y los bares.', 'Rode tonijn, de Calle Batalla del Salado en de bars.', 'Röd tonfisk, Calle Batalla del Salado och barerna.') },
      { token: 'tarifa_whale_watching', label: l('Whale watching', 'Whale Watching', 'Avistamiento de cetáceos', 'Walvissen spotten', 'Valskådning'), text: l('Pilot whales and dolphins in the Strait, family-suitable from the harbour.', 'Grindwale und Delfine in der Meerenge, familientauglich ab Hafen.', 'Calderones y delfines en el Estrecho, aptos para familias desde el puerto.', 'Grienden en dolfijnen in de Straat, gezinsvriendelijk vanuit de haven.', 'Grindvalar och delfiner i sundet, familjevänligt från hamnen.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Beach, wind, old town, nature, Bolonia, yoga.', 'Strand, Wind, Altstadt, Natur, Bolonia, Yoga.', 'Playa, viento, casco antiguo, naturaleza, Bolonia, yoga.', 'Strand, wind, oude stad, natuur, Bolonia, yoga.', 'Strand, vind, gamla stan, natur, Bolonia, yoga.') }
    ]
  },
  sources: {
    eyebrow: shared.sourceEyebrow,
    title: shared.sourceTitle,
    intro: shared.sourceIntro,
    checked: shared.checked,
    links: [
      { label: l('Tarifa Tourism · Puerta de Jerez', 'Tarifa Tourismus · Puerta de Jerez', 'Turismo de Tarifa · Puerta de Jerez', 'Tarifa Toerisme · Puerta de Jerez', 'Tarifa Turism · Puerta de Jerez'), text: l('Official context for the surviving gate and final walled enclosure.', 'Offizieller Kontext zum erhaltenen Tor und letzten Mauerring.', 'Contexto oficial sobre la puerta conservada y el último recinto amurallado.', 'Officiële context over de bewaard gebleven poort en laatste ommuring.', 'Officiell bakgrund om den bevarade porten och den yttersta muren.'), href: sourceHrefs.puertaJerez },
      { label: l('Tarifa Tourism · Castillo de Guzmán el Bueno', 'Tarifa Tourismus · Castillo de Guzmán el Bueno', 'Turismo de Tarifa · Castillo de Guzmán el Bueno', 'Tarifa Toerisme · Castillo de Guzmán el Bueno', 'Tarifa Turism · Castillo de Guzmán el Bueno'), text: l('Official history of the 10th-century caliphal fortress.', 'Offizielle Geschichte der kalifalen Festung des 10. Jahrhunderts.', 'Historia oficial de la fortaleza califal del siglo X.', 'Officiële geschiedenis van de kalifale vesting uit de 10e eeuw.', 'Officiell historia om den kalifala fästningen från 900-talet.'), href: sourceHrefs.castillo },
      { label: l('Tarifa Tourism · Route of the walls', 'Tarifa Tourismus · Route der Mauern', 'Turismo de Tarifa · Ruta de las Murallas', 'Tarifa Toerisme · Route langs de muren', 'Tarifa Turism · Murarnas rutt'), text: l('Official context for the successive fortified enclosures.', 'Offizieller Kontext zu den aufeinanderfolgenden Mauerringen.', 'Contexto oficial sobre los sucesivos recintos fortificados.', 'Officiële context over de opeenvolgende ommuringen.', 'Officiell bakgrund om de olika muromgärdningarna.'), href: sourceHrefs.walls }
    ]
  },
  closing: {
    eyebrow: shared.closingEyebrow,
    title: l('There in the afternoon, back in the evening', 'Nachmittags hin, abends wieder', 'Por la tarde ir, por la noche volver', '’s Middags heen, ’s avonds weer', 'Dit på eftermiddagen, tillbaka på kvällen'),
    body: l('Family & Surf is ten to fifteen minutes away on foot. A second visit at a different hour costs nothing but the walk.', 'Family & Surf liegt zehn bis fünfzehn Minuten zu Fuß entfernt. Ein zweiter Gang zu anderer Stunde kostet nur den Weg.', 'Family & Surf está a diez o quince minutos a pie. Una segunda visita a otra hora solo cuesta el camino.', 'Family & Surf ligt tien tot vijftien minuten te voet. Een tweede gang op een ander uur kost alleen de weg.', 'Family & Surf ligger tio till femton minuter bort till fots. En andra tur vid en annan timme kostar bara vägen.'),
    hubLabel: shared.hubLabel,
    propertyLabel: shared.propertyLabel
  }
};

const bolonia: TarifaExperienceSpokeContent = {
  id: 'bolonia-baelo-claudia',
  token: 'tarifa_bolonia_baelo_claudia',
  seo: buildSeo(
    '2026-08-13-tarifa-bolonia-baelo-claudia-v1.0',
    l(
      'Bolonia and Baelo Claudia: beach, dune and Roman town',
      'Bolonia und Baelo Claudia: Strand, Düne und Römerstadt',
      'Bolonia y Baelo Claudia: playa, duna y ciudad romana',
      'Bolonia en Baelo Claudia: strand, duin en Romeinse stad',
      'Bolonia och Baelo Claudia: strand, dyn och romersk stad'
    ),
    l(
      'A whole day west of Tarifa: the wide beach of Bolonia, the shifting dune and the Roman town of Baelo Claudia right on the sand. By car from our underground garage.',
      'Ein ganzer Tag westlich von Tarifa: der weite Strand von Bolonia, die Wanderdüne und die Römerstadt Baelo Claudia direkt am Sand. Mit dem Auto aus unserer Tiefgarage.',
      'Un día entero al oeste de Tarifa: la amplia playa de Bolonia, la duna móvil y la ciudad romana de Baelo Claudia junto a la arena. En coche desde nuestro garaje.',
      'Een hele dag ten westen van Tarifa: het wijde strand van Bolonia, de wandelende duin en de Romeinse stad Baelo Claudia direct aan het zand. Met de auto vanuit onze ondergrondse garage.',
      'En hel dag väster om Tarifa: den vida stranden i Bolonia, vandringsdynen och den romerska staden Baelo Claudia alldeles vid sanden. Med bil från vårt garage.'
    )
  ),
  navLabel: l('Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia y Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia'),
  breadcrumbLabel: l('Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia y Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l('Bolonia: beach, dune and a Roman town on the sand', 'Bolonia: Strand, Düne und eine römische Stadt am Sand', 'Bolonia: playa, duna y una ciudad romana en la arena', 'Bolonia: strand, duin en een Romeinse stad aan het zand', 'Bolonia: strand, dyn och en romersk stad vid sanden'),
    standfirst: l(
      'Bolonia is a bay west of Tarifa: a wide Atlantic beach, a sand dune declared a natural monument, and right behind it Baelo Claudia, a Roman town with forum, theatre and fish factories. That is a whole day, and you drive there.',
      'Bolonia ist eine Bucht westlich von Tarifa: ein weiter Atlantikstrand, eine Sanddüne, die zum Naturdenkmal erklärt ist, und direkt dahinter Baelo Claudia, eine römische Stadt mit Forum, Theater und Fischfabriken. Das ist ein ganzer Tag, und ihr fahrt mit dem Auto hin.',
      'Bolonia es una ensenada al oeste de Tarifa: una amplia playa atlántica, una duna declarada monumento natural y, justo detrás, Baelo Claudia, una ciudad romana con foro, teatro y factorías de salazón. Es un día entero, y se va en coche.',
      'Bolonia is een baai ten westen van Tarifa: een wijd Atlantisch strand, een zandduin die tot natuurmonument is verklaard, en direct erachter Baelo Claudia, een Romeinse stad met forum, theater en visfabrieken. Dat is een hele dag, en je rijdt erheen.',
      'Bolonia är en vik väster om Tarifa: en vid Atlantstrand, en sanddyn som förklarats naturminne och alldeles bakom Baelo Claudia, en romersk stad med forum, teater och fiskfabriker. Det är en hel dag, och ni kör dit.'
    ),
    note: l(
      '',
      '',
      '',
      '',
      ''
    ),
    updated: l('As of August 2026', 'Stand August 2026', 'Actualizado en agosto de 2026', 'Stand augustus 2026', 'Uppdaterad augusti 2026')
  },
  facts: [
    { label: l('On one bay', 'An einer Bucht', 'En una ensenada', 'Aan één baai', 'Vid en vik'), value: l('Beach, dune, Roman town', 'Strand, Düne, Römerstadt', 'Playa, duna, ciudad romana', 'Strand, duin, Romeinse stad', 'Strand, dyn, romersk stad') },
    { label: l('Baelo Claudia', 'Baelo Claudia', 'Baelo Claudia', 'Baelo Claudia', 'Baelo Claudia'), value: l('Fish salting, garum, trade across the Strait', 'Fischsalzung, Garum, Handel über die Meerenge', 'Salazón, garum, comercio a través del Estrecho', 'Vis zouten, garum, handel over de Straat', 'Fisksaltning, garum, handel över sundet') },
    { label: l('From AMARA', 'Von AMARA', 'Desde AMARA', 'Vanaf AMARA', 'Från AMARA'), value: l('By car to the west, a whole day', 'Mit dem Auto nach Westen, ein ganzer Tag', 'En coche hacia el oeste, un día entero', 'Met de auto naar het westen, een hele dag', 'Med bil västerut, en hel dag') }
  ],
  sections: [
    {
      id: 'one-day',
      eyebrow: l('01 · A coherent day', '01 · Ein stimmiger Tag', '01 · Una jornada coherente', '01 · Eén samenhangende dag', '01 · En sammanhållen dag'),
      title: l('Everything on one bay', 'Alles an einer Bucht', 'Todo en una ensenada', 'Alles aan één baai', 'Allt vid en vik'),
      paragraphs: [
        l(
          'Beach, dune and ruins share the same bay in Bolonia. You park once, walk through the Roman town in the morning, to the beach at midday and onto the dune in the afternoon.',
          'Strand, Düne und Ruinen teilen sich in Bolonia dieselbe Bucht. Ihr parkt einmal, geht morgens durch die römische Stadt, mittags an den Strand und nachmittags auf die Düne.',
          'Playa, duna y ruinas comparten la misma ensenada en Bolonia. Aparcáis una vez, recorréis la ciudad romana por la mañana, a mediodía la playa y por la tarde subís a la duna.',
          'Strand, duin en ruïnes delen in Bolonia dezelfde baai. Je parkeert één keer, loopt ’s ochtends door de Romeinse stad, ’s middags naar het strand en in de namiddag de duin op.',
          'Strand, dyn och ruiner delar samma vik i Bolonia. Ni parkerar en gång, går genom den romerska staden på förmiddagen, till stranden mitt på dagen och upp på dynen på eftermiddagen.'
        ),
        l(
          'We give Bolonia the whole day. After the beach we drive back to Tarifa for dinner.',
          'Wir geben Bolonia den ganzen Tag. Nach dem Strand fahren wir zurück nach Tarifa zum Abendessen.',
          'Nosotros le damos a Bolonia el día entero. Después de la playa volvemos a Tarifa a cenar.',
          'Wij geven Bolonia de hele dag. Na het strand rijden we terug naar Tarifa voor het avondeten.',
          'Vi ger Bolonia hela dagen. Efter stranden kör vi tillbaka till Tarifa för middag.'
        )
      ]
    },
    {
      id: 'beach-dune',
      recordId: 'tarifa.beaches.playa-de-bolonia',
      eyebrow: l('02 · Beach & dune', '02 · Strand & Düne', '02 · Playa y duna', '02 · Strand & duin', '02 · Strand & dyn'),
      title: l('The beach and the dune', 'Der Strand und die Düne', 'La playa y la duna', 'Het strand en de duin', 'Stranden och dynen'),
      paragraphs: [
        l(
          'The beach is wide and open, framed by hills, with the Atlantic in front. At the western end the dune rises, a shifting dune that the wind pushes a little further inland every year.',
          'Der Strand ist breit und offen, von Hügeln gerahmt, mit dem Atlantik davor. Am westlichen Ende steigt die Düne auf, eine Wanderdüne, die der Wind jedes Jahr ein Stück weiter ins Land schiebt.',
          'La playa es ancha y abierta, enmarcada por colinas, con el Atlántico delante. En el extremo oeste se levanta la duna, una duna móvil que el viento empuja cada año un poco más hacia el interior.',
          'Het strand is breed en open, omlijst door heuvels, met de Atlantische Oceaan ervoor. Aan het westelijke eind rijst de duin op, een wandelende duin die de wind elk jaar een stukje verder het land in schuift.',
          'Stranden är bred och öppen, inramad av kullar, med Atlanten framför. I västra änden reser sig dynen, en vandringsdyn som vinden varje år skjuter en bit längre in i landet.'
        ),
        l(
          'The dune is protected; you go up by the signposted path, and from the top the bay lies at your feet.',
          'Die Düne steht unter Schutz; hinauf geht es über den ausgeschilderten Weg, oben liegt euch die Bucht zu Füßen.',
          'La duna está protegida; se sube por el sendero señalizado, y arriba tenéis la ensenada a vuestros pies.',
          'De duin is beschermd; omhoog ga je over het bewegwijzerde pad, en boven ligt de baai aan je voeten.',
          'Dynen är skyddad; upp går man på den skyltade stigen, och där uppe ligger viken vid era fötter.'
        )
      ]
    },
    {
      id: 'roman-city',
      recordId: 'tarifa.sightseeing.baelo-claudia',
      eyebrow: l('03 · Baelo Claudia', '03 · Baelo Claudia', '03 · Baelo Claudia', '03 · Baelo Claudia', '03 · Baelo Claudia'),
      title: l('Baelo Claudia, a Roman town by the sea', 'Baelo Claudia, eine römische Stadt am Meer', 'Baelo Claudia, una ciudad romana junto al mar', 'Baelo Claudia, een Romeinse stad aan zee', 'Baelo Claudia, en romersk stad vid havet'),
      paragraphs: [
        l(
          'Baelo Claudia lived from trade with North Africa and from fish. Forum, basilica, theatre and the streets are so clearly recognisable that you understand the town plan without a guide.',
          'Baelo Claudia lebte vom Handel mit Nordafrika und vom Fisch. Forum, Basilika, Theater und die Straßen sind so klar zu erkennen, dass ihr den Stadtplan ohne Führer versteht.',
          'Baelo Claudia vivía del comercio con el norte de África y del pescado. Foro, basílica, teatro y calles se reconocen con tanta claridad que entendéis el plano de la ciudad sin guía.',
          'Baelo Claudia leefde van de handel met Noord-Afrika en van de vis. Forum, basilica, theater en de straten zijn zo duidelijk te herkennen dat je het stadsplan zonder gids begrijpt.',
          'Baelo Claudia levde på handeln med Nordafrika och på fisken. Forum, basilika, teater och gatorna är så tydliga att ni förstår stadsplanen utan guide.'
        ),
        l(
          'The Junta’s visitor centre explains the rest; admission and opening times are on the official page below.',
          'Das Besucherzentrum der Junta erklärt den Rest; Eintritt und Zeiten stehen auf der offiziellen Seite unten.',
          'El centro de visitantes de la Junta explica el resto; entradas y horarios están en la página oficial de abajo.',
          'Het bezoekerscentrum van de Junta legt de rest uit; toegang en openingstijden staan op de officiële pagina hieronder.',
          'Juntans besökscentrum förklarar resten; inträde och öppettider finns på den officiella sidan nedan.'
        )
      ]
    },
    {
      id: 'salting-garum',
      eyebrow: l('04 · Coast & production', '04 · Küste & Produktion', '04 · Costa y producción', '04 · Kust & productie', '04 · Kust & produktion'),
      title: l('Garum: the fish sauce Rome wanted', 'Garum: die Fischsauce, die Rom wollte', 'Garum: la salsa de pescado que Roma quería', 'Garum: de vissaus die Rome wilde', 'Garum: fisksåsen som Rom ville ha'),
      paragraphs: [
        l(
          'Right on the beach are the salting works where tuna and mackerel became garum, the fish sauce traded throughout the Roman Empire.',
          'Direkt am Strand liegen die Salzereien, in denen aus Thunfisch und Makrele Garum entstand, die Fischsauce, die im ganzen Römischen Reich gehandelt wurde.',
          'Justo en la playa están las factorías de salazón donde del atún y la caballa salía el garum, la salsa de pescado que se comerciaba por todo el Imperio romano.',
          'Direct aan het strand liggen de zouterijen waar van tonijn en makreel garum werd gemaakt, de vissaus die in het hele Romeinse Rijk werd verhandeld.',
          'Alldeles vid stranden ligger salterierna där tonfisk och makrill blev garum, fisksåsen som handlades i hela romarriket.'
        ),
        l(
          'The tuna passed by here even then. The Almadraba nets that stand off the coast today catch it on the same route.',
          'Der Thunfisch zog schon damals hier vorbei. Die Netze der Almadraba, die heute vor der Küste stehen, fangen ihn auf demselben Weg.',
          'El atún ya pasaba por aquí entonces. Las redes de almadraba que hoy hay frente a la costa lo pescan en la misma ruta.',
          'De tonijn trok hier toen al voorbij. De Almadraba-netten die vandaag voor de kust staan, vangen hem op dezelfde route.',
          'Tonfisken drog förbi här redan då. Almadrabanäten som står utanför kusten i dag fångar den på samma väg.'
        )
      ]
    },
    {
      id: 'practical-day',
      eyebrow: l('05 · Practical rhythm', '05 · Praktischer Rhythmus', '05 · Ritmo práctico', '05 · Praktisch ritme', '05 · Praktisk rytm'),
      title: l('The day', 'Der Tag', 'El día', 'De dag', 'Dagen'),
      paragraphs: [
        l(
          'From La Marina you drive just under half an hour west along the N-340; the turn-off to Bolonia is signposted.',
          'Von La Marina fahrt ihr eine knappe halbe Stunde über die N-340 nach Westen; die Abzweigung nach Bolonia ist ausgeschildert.',
          'Desde La Marina son poco menos de media hora hacia el oeste por la N-340; el desvío a Bolonia está señalizado.',
          'Vanuit La Marina rijd je een klein half uur naar het westen over de N-340; de afslag naar Bolonia is bewegwijzerd.',
          'Från La Marina kör ni en knapp halvtimme västerut på N-340; avtaget till Bolonia är skyltat.'
        ),
        l(
          'In summer the morning is worth it, before it gets crowded. The opening hours of the ruins are below under sources.',
          'Im Sommer lohnt sich der Vormittag, bevor es voll wird. Die Öffnungszeiten der Ruinen stehen unten bei den Quellen.',
          'En verano compensa ir por la mañana, antes de que se llene. Los horarios de las ruinas están abajo, en las fuentes.',
          'In de zomer loont de ochtend, voordat het vol wordt. De openingstijden van de ruïnes staan onderaan bij de bronnen.',
          'På sommaren lönar sig förmiddagen, innan det blir fullt. Ruinernas öppettider finns nedan under källor.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('From La Marina', 'Von La Marina aus', 'Desde La Marina', 'Vanuit La Marina', 'Från La Marina'),
    title: l('From the garage straight west', 'Aus der Garage direkt nach Westen', 'Del garaje directamente hacia el oeste', 'Vanuit de garage direct naar het westen', 'Från garaget direkt västerut'),
    paragraphs: [
      l(
        'Family & Surf has an underground parking space, and from La Marina you drive west without having to pass through the old town. Bolonia is the day you need the car for; in town it otherwise stays parked.',
        'Family & Surf hat einen Tiefgaragenplatz, und von La Marina fahrt ihr Richtung Westen, ohne durch die Altstadt zu müssen. Bolonia ist der Tag, für den ihr das Auto braucht; im Ort steht es sonst.',
        'Family & Surf tiene plaza de garaje, y desde La Marina vais hacia el oeste sin tener que atravesar el casco antiguo. Bolonia es el día para el que necesitáis el coche; en el pueblo, el resto del tiempo, se queda aparcado.',
        'Family & Surf heeft een ondergrondse parkeerplaats, en vanuit La Marina rijd je naar het westen zonder door de oude stad te moeten. Bolonia is de dag waarvoor je de auto nodig hebt; in de plaats blijft hij anders staan.',
        'Family & Surf har en garageplats, och från La Marina kör ni västerut utan att behöva genom gamla stan. Bolonia är dagen ni behöver bilen för; i stan står den annars kvar.'
      ),
      l(
        'In the evening you are back in Tarifa, shower off the sand and walk into town for dinner.',
        'Abends seid ihr zurück in Tarifa, duscht den Sand ab und geht zu Fuß in die Stadt zum Essen.',
        'Por la noche estáis de vuelta en Tarifa, os quitáis la arena en la ducha y bajáis a pie al pueblo a cenar.',
        '’s Avonds ben je terug in Tarifa, spoel je het zand af en loop je de stad in om te eten.',
        'På kvällen är ni tillbaka i Tarifa, duschar av sanden och går till fots in till stan för att äta.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_beaches_authority', label: l('Beaches & Coast', 'Strände & Küste', 'Playas y costa', 'Stranden & kust', 'Stränder & kust'), text: l('Playa Chica, Los Lances, Valdevaqueros.', 'Playa Chica, Los Lances, Valdevaqueros.', 'Playa Chica, Los Lances, Valdevaqueros.', 'Playa Chica, Los Lances, Valdevaqueros.', 'Playa Chica, Los Lances, Valdevaqueros.') },
      { token: 'tarifa_whale_watching', label: l('Whale watching', 'Whale Watching', 'Avistamiento de cetáceos', 'Walvissen spotten', 'Valskådning'), text: l('Pilot whales and dolphins in the Strait, family-suitable from the harbour.', 'Grindwale und Delfine in der Meerenge, familientauglich ab Hafen.', 'Calderones y delfines en el Estrecho, aptos para familias desde el puerto.', 'Grienden en dolfijnen in de Straat, gezinsvriendelijk vanuit de haven.', 'Grindvalar och delfiner i sundet, familjevänligt från hamnen.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Beach, wind, old town, nature, Bolonia, yoga.', 'Strand, Wind, Altstadt, Natur, Bolonia, Yoga.', 'Playa, viento, casco antiguo, naturaleza, Bolonia, yoga.', 'Strand, wind, oude stad, natuur, Bolonia, yoga.', 'Strand, vind, gamla stan, natur, Bolonia, yoga.') }
    ]
  },
  sources: {
    eyebrow: shared.sourceEyebrow,
    title: shared.sourceTitle,
    intro: shared.sourceIntro,
    checked: shared.checked,
    links: [
      { label: l('Junta de Andalucía · Baelo Claudia', 'Junta de Andalucía · Baelo Claudia', 'Junta de Andalucía · Baelo Claudia', 'Junta de Andalucía · Baelo Claudia', 'Junta de Andalucía · Baelo Claudia'), text: l('Official site history, urban structure, fish salting and garum production.', 'Offizielle Geschichte, Stadtstruktur, Fischsalzung und Garum-Produktion.', 'Historia oficial, estructura urbana, salazones y producción de garum.', 'Officiële geschiedenis, stadsstructuur, viszouterij en garumproductie.', 'Officiell historia, stadsstruktur, fisksaltning och garumproduktion.'), href: sourceHrefs.baelo },
      { label: l('Junta de Andalucía · Duna de Bolonia', 'Junta de Andalucía · Duna de Bolonia', 'Junta de Andalucía · Duna de Bolonia', 'Junta de Andalucía · Duna de Bolonia', 'Junta de Andalucía · Duna de Bolonia'), text: l('Official environmental context for the protected dune monument.', 'Offizieller Umweltkontext zum geschützten Naturdenkmal Düne.', 'Contexto ambiental oficial del monumento natural protegido.', 'Officiële natuurcontext voor het beschermde duinmonument.', 'Officiell naturinformation om det skyddade dynmonumentet.'), href: sourceHrefs.boloniaDune },
      { label: l('Tarifa Tourism · Official visitor guide', 'Tarifa Tourismus · Offizieller Besucherführer', 'Turismo de Tarifa · Guía turística oficial', 'Tarifa Toerisme · Officiële bezoekersgids', 'Tarifa Turism · Officiell besöksguide'), text: l('Destination context for Bolonia, Baelo Claudia and Tarifa’s wider coast.', 'Ortskontext zu Bolonia, Baelo Claudia und Tarifas weiterer Küste.', 'Contexto turístico sobre Bolonia, Baelo Claudia y la costa de Tarifa.', 'Bestemmingsinformatie over Bolonia, Baelo Claudia en de kust van Tarifa.', 'Besöksinformation om Bolonia, Baelo Claudia och Tarifas kust.'), href: sourceHrefs.tarifaTourismGuide }
    ]
  },
  closing: {
    eyebrow: shared.closingEyebrow,
    title: l('One day, one car, one bay', 'Ein Tag, ein Auto, eine Bucht', 'Un día, un coche, una ensenada', 'Eén dag, één auto, één baai', 'En dag, en bil, en vik'),
    body: l('Bolonia is a day by car. From the underground garage at Family & Surf you are there in just under half an hour, and in the evening back on foot in the old town.', 'Bolonia ist ein Tag mit dem Auto. Aus der Tiefgarage bei Family & Surf seid ihr in einer knappen halben Stunde dort und abends wieder zu Fuß in der Altstadt.', 'Bolonia es un día en coche. Desde el garaje de Family & Surf estáis allí en poco menos de media hora, y por la noche otra vez a pie en el casco antiguo.', 'Bolonia is een dag met de auto. Vanuit de ondergrondse garage bij Family & Surf ben je er in een klein half uur, en ’s avonds weer te voet in de oude stad.', 'Bolonia är en dag med bil. Från garaget vid Family & Surf är ni där på en knapp halvtimme, och på kvällen åter till fots i gamla stan.'),
    hubLabel: shared.hubLabel,
    propertyLabel: shared.propertyLabel
  }
};

const yoga: TarifaExperienceSpokeContent = {
  id: 'yoga',
  token: 'tarifa_yoga',
  seo: buildSeo(
    '2026-09-04-tarifa-yoga-v1.0',
    l(
      'Yoga in Tarifa | Beach, Studio & Retreat Guide',
      'Yoga in Tarifa | Strand, Studios & Retreats',
      'Yoga en Tarifa | Playa, estudios y retiros',
      'Yoga in Tarifa | Strand, studio’s & retreats',
      'Yoga i Tarifa | Strand, studior & retreat'
    ),
    l(
      'Discover yoga in Tarifa — studios, ocean and beach classes, family and aerial formats and retreats — with mats already waiting at AMARA Family & Surf in La Marina.',
      'Entdeckt Yoga in Tarifa – Studios, Ocean- und Beach-Kurse, Familien- und Aerial-Formate und Retreats – mit Yogamatten, die bei AMARA Family & Surf in La Marina schon bereitliegen.',
      'Descubre el yoga en Tarifa: estudios, clases junto al mar, formatos familiares y aéreos y retiros, con esterillas ya listas en AMARA Family & Surf, en La Marina.',
      'Ontdek yoga in Tarifa: studio’s, lessen aan zee, familie- en aerial-vormen en retreats, met matten die al klaarliggen bij AMARA Family & Surf in La Marina.',
      'Upptäck yoga i Tarifa: studior, klasser vid havet, familje- och aerialformer och retreat, med mattor som redan väntar på AMARA Family & Surf i La Marina.'
    ),
    { ...article, datePublished: '2026-09-04', dateModified: '2026-09-04' }
  ),
  navLabel: l('Yoga', 'Yoga', 'Yoga', 'Yoga', 'Yoga'),
  breadcrumbLabel: l('Yoga', 'Yoga', 'Yoga', 'Yoga', 'Yoga'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l(
      'Yoga at the pace of the Atlantic',
      'Yoga im Rhythmus des Atlantiks',
      'Yoga al ritmo del Atlántico',
      'Yoga op het ritme van de Atlantische Oceaan',
      'Yoga i Atlantens takt'
    ),
    standfirst: l(
      'For its size, Tarifa carries an unusually broad yoga scene: town studios, classes by the sea, family and aerial formats and multi-day retreats. From Family & Surf in La Marina you begin inside a small wellness cluster on Calle Mar Adriático, with yoga mats already in the apartment for your own morning flow.',
      'Für seine Größe hat Tarifa eine ungewöhnlich breite Yoga-Szene: Studios im Ort, Kurse am Meer, Familien- und Aerial-Formate und mehrtägige Retreats. Von Family & Surf in La Marina startet ihr mitten in einem kleinen Wellness-Cluster an der Calle Mar Adriático, mit Yogamatten, die schon in der Unterkunft liegen.',
      'Para su tamaño, Tarifa reúne una escena de yoga sorprendentemente amplia: estudios en el pueblo, clases junto al mar, formatos familiares y aéreos y retiros de varios días. Desde Family & Surf, en La Marina, empezáis dentro de un pequeño núcleo de bienestar en la calle Mar Adriático, con esterillas ya en el apartamento para vuestra práctica de la mañana.',
      'Voor haar formaat heeft Tarifa een opvallend brede yogascene: studio’s in het dorp, lessen aan zee, familie- en aerial-vormen en meerdaagse retreats. Vanaf Family & Surf in La Marina begin je midden in een klein wellnesscluster aan de Calle Mar Adriático, met yogamatten die al in het appartement liggen voor je eigen ochtendflow.',
      'För sin storlek har Tarifa en ovanligt bred yogascen: studior i stan, klasser vid havet, familje- och aerialformer och flerdagarsretreat. Från Family & Surf i La Marina börjar ni mitt i ett litet wellnesskluster vid Calle Mar Adriático, med yogamattor som redan finns i lägenheten för er egen morgonflow.'
    ),
    note: l(
      '',
      '',
      '',
      '',
      ''
    ),
    updated: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026')
  },
  facts: [
    { label: l('The scene', 'Die Szene', 'La escena', 'De scene', 'Scenen'), value: l('Studios · beach yoga · family · retreats', 'Studios · Beach-Yoga · Familie · Retreats', 'Estudios · yoga en la playa · familia · retiros', 'Studio’s · strandyoga · familie · retreats', 'Studior · strandyoga · familj · retreat') },
    { label: l('In your street', 'In eurer Straße', 'En vuestra calle', 'In je straat', 'På er gata'), value: l('A wellness cluster on Calle Mar Adriático', 'Ein Wellness-Cluster an der Calle Mar Adriático', 'Un núcleo de bienestar en la calle Mar Adriático', 'Een wellnesscluster aan de Calle Mar Adriático', 'Ett wellnesskluster vid Calle Mar Adriático') },
    { label: l('From AMARA', 'Von AMARA', 'Desde AMARA', 'Vanaf AMARA', 'Från AMARA'), value: l('Yoga mats already in the apartment', 'Yogamatten schon in der Unterkunft', 'Esterillas ya en el apartamento', 'Yogamatten al in het appartement', 'Yogamattor redan i lägenheten') }
  ],
  sections: [
    {
      id: 'broad-scene',
      eyebrow: l('01 · A broad scene', '01 · Eine breite Szene', '01 · Una escena amplia', '01 · Een brede scene', '01 · En bred scen'),
      title: l('More yoga than a small town suggests', 'Mehr Yoga, als ein kleiner Ort vermuten lässt', 'Más yoga del que sugiere un pueblo pequeño', 'Meer yoga dan een klein dorp doet vermoeden', 'Mer yoga än en liten stad antyder'),
      paragraphs: [
        l(
          'Tarifa gathers several kinds of yoga in a compact place: town studios with regular weekly classes, teachers who run sessions by the sea, family, children and aerial formats, and multi-day retreats in the surrounding countryside. That range means you can find a single drop-in morning or a deeper week without leaving the area.',
          'Tarifa versammelt mehrere Arten von Yoga auf engem Raum: Studios im Ort mit festen Wochenkursen, Lehrer mit Stunden am Meer, Familien-, Kinder- und Aerial-Formate und mehrtägige Retreats im Umland. Diese Bandbreite heißt: Ihr findet einen einzelnen Morgen zum Reinschnuppern oder eine ganze, intensivere Woche, ohne die Gegend zu verlassen.',
          'Tarifa reúne varios tipos de yoga en un espacio reducido: estudios en el pueblo con clases semanales, profesores que dan sesiones junto al mar, formatos familiares, infantiles y aéreos, y retiros de varios días en el entorno. Esa variedad permite encontrar una sola mañana suelta o una semana más profunda sin salir de la zona.',
          'Tarifa brengt verschillende soorten yoga samen op een compacte plek: studio’s in het dorp met vaste weeklessen, docenten die lessen aan zee geven, familie-, kinder- en aerial-vormen en meerdaagse retreats in de omgeving. Door die breedte vind je één losse ochtend of een diepere week zonder het gebied te verlaten.',
          'Tarifa samlar flera slags yoga på en liten yta: studior i stan med veckoklasser, lärare som håller pass vid havet, familje-, barn- och aerialformer och flerdagarsretreat i omgivningarna. Bredden gör att ni kan hitta en enskild morgon eller en djupare vecka utan att lämna området.'
        ),
        l(
          'Because so much of it is seasonal and personally run, the useful skill here is not memorising a timetable but knowing which format you want. We keep track of what is currently running and point you to the right teacher for a calm morning, a beach class or a family session.',
          'Weil vieles saisonal und persönlich organisiert ist, geht es hier weniger darum, einen Stundenplan zu lernen, als zu wissen, welches Format ihr möchtet. Wir behalten im Blick, was gerade läuft, und verweisen euch an die passende Lehrkraft – für einen ruhigen Morgen, eine Strandstunde oder eine Familiensession.',
          'Como buena parte es estacional y de gestión personal, aquí lo útil no es memorizar un horario, sino saber qué formato queréis. Nosotros seguimos lo que está activo y os orientamos hacia el profesor adecuado para una mañana tranquila, una clase en la playa o una sesión en familia.',
          'Omdat veel seizoensgebonden en persoonlijk geregeld is, is de nuttige vaardigheid hier niet een rooster onthouden maar weten welke vorm je wilt. Wij houden bij wat er loopt en wijzen je naar de juiste docent voor een rustige ochtend, een strandles of een gezinssessie.',
          'Eftersom mycket är säsongsbetonat och personligt drivet handlar det här inte om att lära sig ett schema, utan om att veta vilken form ni vill ha. Vi håller koll på vad som pågår och lotsar er till rätt lärare för en lugn morgon, en strandklass eller ett familjepass.'
        )
      ]
    },
    {
      id: 'ocean-yoga',
      eyebrow: l('02 · Yoga by the sea', '02 · Yoga am Meer', '02 · Yoga junto al mar', '02 · Yoga aan zee', '02 · Yoga vid havet'),
      title: l('Beach and ocean classes read the day’s conditions', 'Beach- und Ocean-Kurse lesen die Bedingungen des Tages', 'Las clases junto al mar leen las condiciones del día', 'Lessen aan zee lezen de omstandigheden van de dag', 'Klasser vid havet läser dagens förhållanden'),
      paragraphs: [
        l(
          'Several teachers move their practice to the sand or the water’s edge, which gives a Tarifa morning a strong coastal character. Places such as Mandalablue run ocean and beach sessions with mats provided, and a session outdoors depends on wind, light and comfort as much as on the schedule.',
          'Mehrere Lehrer verlegen ihre Praxis auf den Sand oder ans Wasser, was einem Tarifa-Morgen einen klaren Küstencharakter gibt. Anbieter wie Mandalablue bieten Ocean- und Beach-Stunden mit gestellten Matten; eine Session im Freien hängt von Wind, Licht und Wohlgefühl ebenso ab wie vom Stundenplan.',
          'Varios profesores llevan su práctica a la arena o a la orilla, lo que da a la mañana en Tarifa un carácter costero muy marcado. Propuestas como Mandalablue ofrecen clases junto al mar con esterillas incluidas, y una sesión al aire libre depende del viento, la luz y la comodidad tanto como del horario.',
          'Verschillende docenten verplaatsen hun praktijk naar het zand of de waterkant, wat een ochtend in Tarifa een sterk kustkarakter geeft. Aanbieders als Mandalablue geven zee- en strandlessen met matten erbij, en een sessie buiten hangt van wind, licht en comfort af, net zozeer als van het rooster.',
          'Flera lärare flyttar sin praktik till sanden eller vattenbrynet, vilket ger en morgon i Tarifa en tydlig kustkaraktär. Aktörer som Mandalablue håller havs- och strandklasser med mattor, och ett pass utomhus beror på vind, ljus och komfort lika mycket som på schemat.'
        ),
        l(
          'On a windy day the class moves indoors or to another time; you confirm the meeting point the same day.',
          'An einem windigen Tag wechselt die Stunde nach drinnen oder auf eine andere Zeit; den Treffpunkt bestätigt ihr am selben Tag.',
          'En un día de viento la clase pasa a cubierto o cambia de hora; el punto de encuentro lo confirmáis el mismo día.',
          'Op een winderige dag verhuist de les naar binnen of naar een ander tijdstip; het trefpunt bevestig je dezelfde dag.',
          'En blåsig dag flyttar passet inomhus eller till en annan tid; mötesplatsen bekräftar ni samma dag.'
        )
      ]
    },
    {
      id: 'mar-adriatico',
      eyebrow: l('03 · Your own street', '03 · Eure eigene Straße', '03 · Vuestra propia calle', '03 · Je eigen straat', '03 · Er egen gata'),
      title: l('A small wellness cluster around Family & Surf', 'Ein kleiner Wellness-Cluster rund um Family & Surf', 'Un pequeño núcleo de bienestar junto a Family & Surf', 'Een klein wellnesscluster rond Family & Surf', 'Ett litet wellnesskluster runt Family & Surf'),
      paragraphs: [
        l(
          'Family & Surf sits on Calle Mar Adriático in La Marina, and the same street carries a small run of wellness addresses — among them the Mama Tierra holistic and yoga space. That proximity lets you keep a yoga morning simple: a short walk rather than a drive across town.',
          'Family & Surf liegt an der Calle Mar Adriático in La Marina, und dieselbe Straße trägt eine kleine Reihe von Wellness-Adressen – darunter den holistischen Yoga-Raum Mama Tierra. Diese Nähe macht einen Yoga-Morgen einfach: ein kurzer Weg zu Fuß statt einer Fahrt quer durch den Ort.',
          'Family & Surf está en la calle Mar Adriático, en La Marina, y esa misma calle reúne una pequeña serie de direcciones de bienestar, entre ellas el espacio holístico y de yoga Mama Tierra. Esa cercanía permite mantener sencilla una mañana de yoga: un paseo corto en lugar de un trayecto en coche.',
          'Family & Surf ligt aan de Calle Mar Adriático in La Marina, en diezelfde straat telt een klein rijtje wellnessadressen — waaronder de holistische yogaruimte Mama Tierra. Door die nabijheid blijft een yoga-ochtend eenvoudig: een korte wandeling in plaats van een rit door de stad.',
          'Family & Surf ligger vid Calle Mar Adriático i La Marina, och samma gata rymmer en liten rad wellnessadresser — bland dem det holistiska yogarummet Mama Tierra. Närheten gör en yogamorgon enkel: en kort promenad i stället för en bilfärd genom stan.'
        ),
        l(
          'Use the apartment as your base. The mats are already there for a quiet practice on the terrace or indoors, and the nearby addresses are there for the mornings you want a teacher, company or a different room.',
          'Nutzt die Unterkunft als Basis. Die Matten liegen schon bereit – für eine ruhige Praxis auf der Terrasse oder drinnen – und die nahen Adressen sind für die Morgen da, an denen ihr eine Lehrkraft, Gesellschaft oder einen anderen Raum möchtet.',
          'Usad el apartamento como base. Las esterillas ya están para una práctica tranquila en la terraza o dentro, y las direcciones cercanas están para las mañanas en las que queréis profesor, compañía u otro espacio.',
          'Gebruik het appartement als basis. De matten liggen er al voor een rustige praktijk op het terras of binnen, en de nabije adressen zijn er voor de ochtenden waarop je een docent, gezelschap of een andere ruimte wilt.',
          'Använd lägenheten som bas. Mattorna finns redan för en lugn praktik på terrassen eller inomhus, och adresserna i närheten finns för de morgnar då ni vill ha en lärare, sällskap eller ett annat rum.'
        )
      ]
    },
    {
      id: 'active-stay',
      eyebrow: l('04 · Around an active stay', '04 · Rund um einen aktiven Aufenthalt', '04 · En torno a una estancia activa', '04 · Rond een actief verblijf', '04 · Kring en aktiv vistelse'),
      title: l('Balance the water with recovery and calm', 'Das Wasser mit Erholung und Ruhe ausgleichen', 'Equilibrar el mar con recuperación y calma', 'Het water balanceren met herstel en rust', 'Balansera vattnet med återhämtning och lugn'),
      paragraphs: [
        l(
          'Tarifa is a strong kitesurfing and watersports base, and yoga fits naturally around an active day. A slow morning session or an evening stretch supports mobility and recovery after time on the water, which is why several local providers pair yoga with surf and kite.',
          'Tarifa ist eine starke Basis für Kitesurfen und Wassersport, und Yoga fügt sich natürlich um einen aktiven Tag. Eine ruhige Morgensession oder ein Abend-Stretch unterstützt Mobilität und Erholung nach der Zeit auf dem Wasser – deshalb verbinden mehrere lokale Anbieter Yoga mit Surf und Kite.',
          'Tarifa es una base fuerte de kitesurf y deportes de agua, y el yoga encaja de forma natural alrededor de un día activo. Una sesión tranquila por la mañana o un estiramiento al atardecer apoyan la movilidad y la recuperación tras el mar, y por eso varios proveedores locales combinan yoga con surf y kite.',
          'Tarifa is een sterke basis voor kitesurfen en watersport, en yoga past er natuurlijk omheen een actieve dag. Een rustige ochtendsessie of een avondstretch ondersteunt mobiliteit en herstel na tijd op het water, en daarom combineren verschillende lokale aanbieders yoga met surf en kite.',
          'Tarifa är en stark bas för kitesurfing och vattensport, och yoga passar naturligt kring en aktiv dag. Ett lugnt morgonpass eller en kvällsstretch stödjer rörlighet och återhämtning efter tid på vattnet, och därför kombinerar flera lokala aktörer yoga med surf och kite.'
        ),
        l(
          'Families are just as well served: local studios such as Respira run children’s, pregnancy and aerial formats alongside regular classes. Choose the kind of session that suits the day, and keep the practice as light or as committed as you want it to be.',
          'Familien sind ebenso gut versorgt: Lokale Studios wie Respira bieten Kinder-, Schwangerschafts- und Aerial-Formate neben regulären Kursen. Wählt die Art der Session, die zum Tag passt, und haltet die Praxis so leicht oder so verbindlich, wie ihr möchtet.',
          'Las familias también están bien atendidas: estudios locales como Respira ofrecen formatos infantiles, de embarazo y aéreos junto a las clases habituales. Elegid el tipo de sesión que encaje con el día y mantened la práctica tan ligera o tan comprometida como queráis.',
          'Gezinnen zijn net zo goed bediend: lokale studio’s zoals Respira bieden kinder-, zwangerschaps- en aerial-vormen naast reguliere lessen. Kies het soort sessie dat bij de dag past en houd de praktijk zo licht of zo toegewijd als je wilt.',
          'Familjer är lika väl försedda: lokala studior som Respira erbjuder barn-, gravid- och aerialformer vid sidan av vanliga klasser. Välj den sorts pass som passar dagen och håll praktiken så lätt eller så engagerad som ni vill.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('From La Marina', 'Von La Marina aus', 'Desde La Marina', 'Vanuit La Marina', 'Från La Marina'),
    title: l('Yoga-ready before you unpack', 'Yoga-ready, bevor ihr auspackt', 'Listos para el yoga antes de deshacer las maletas', 'Yoga-klaar voordat je uitpakt', 'Yogaklara innan ni packar upp'),
    paragraphs: [
      l(
        'At Family & Surf the yoga mats are already in the apartment, so a morning practice needs no planning: roll one out on the terrace or indoors and start. It is a small thing, but it means the day can begin with your own quiet hour before anything else.',
        'Bei Family & Surf liegen die Yogamatten schon in der Unterkunft, ein Morgen-Flow braucht also keine Planung: einfach auf der Terrasse oder drinnen ausrollen und beginnen. Eine Kleinigkeit – aber so kann der Tag mit eurer eigenen ruhigen Stunde starten, bevor irgendetwas anderes kommt.',
        'En Family & Surf las esterillas ya están en el apartamento, así que una práctica matinal no exige planificación: la desplegáis en la terraza o dentro y empezáis. Es un detalle pequeño, pero permite que el día comience con vuestra propia hora tranquila antes que cualquier otra cosa.',
        'Bij Family & Surf liggen de yogamatten al in het appartement, dus een ochtendpraktijk vraagt geen planning: rol er een uit op het terras of binnen en begin. Een klein ding, maar zo kan de dag beginnen met je eigen rustige uur voordat er iets anders komt.',
        'På Family & Surf finns yogamattorna redan i lägenheten, så en morgonpraktik kräver ingen planering: rulla ut en på terrassen eller inomhus och börja. En liten sak, men den låter dagen börja med er egen stilla stund före allt annat.'
      ),
      l(
        'When you want more than a solo session, just ask us. We can point you to the class that is actually running that week, and on request we help arrange a private session for you, a couple or the family — with the teacher and style confirmed rather than assumed.',
        'Wenn ihr mehr als eine Solo-Session möchtet, fragt uns einfach. Wir verweisen euch auf den Kurs, der in dieser Woche tatsächlich läuft, und organisieren auf Wunsch eine private Session für euch, ein Paar oder die Familie – mit bestätigter Lehrkraft und bestätigtem Stil, nicht auf gut Glück.',
        'Cuando queráis algo más que una sesión en solitario, pedídnoslo. Os indicamos la clase que realmente se imparte esa semana y, si lo deseáis, ayudamos a organizar una sesión privada para vosotros, una pareja o la familia, con profesor y estilo confirmados, no supuestos.',
        'Wil je meer dan een solosessie, vraag het ons gerust. We wijzen je op de les die die week echt loopt en helpen op verzoek een privésessie te regelen voor jou, een stel of het gezin — met docent en stijl bevestigd in plaats van aangenomen.',
        'När ni vill ha mer än ett eget pass, fråga oss bara. Vi pekar er mot klassen som faktiskt hålls den veckan och hjälper på begäran till att ordna ett privat pass för er, ett par eller familjen — med lärare och stil bekräftade, inte förutsatta.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_kitesurfing_hub', label: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'), text: l('Balance a day on the water with a recovery or mobility session.', 'Gleicht einen Tag auf dem Wasser mit einer Erholungs- oder Mobility-Session aus.', 'Equilibrad un día en el agua con una sesión de recuperación o movilidad.', 'Balanceer een dag op het water met een herstel- of mobiliteitssessie.', 'Balansera en dag på vattnet med ett återhämtnings- eller rörlighetspass.') },
      { token: 'tarifa_food_evening_life', label: l('Food & Evening Life', 'Essen & Ausgehen', 'Gastronomía y vida nocturna', 'Eten & uitgaan', 'Mat & kvällsliv'), text: l('Let a calm morning lead into the Old Town’s evening rhythm.', 'Lasst einen ruhigen Morgen in den Abendrhythmus der Altstadt übergehen.', 'Dejad que una mañana tranquila desemboque en el ritmo nocturno del casco antiguo.', 'Laat een rustige ochtend overgaan in het avondritme van de oude stad.', 'Låt en lugn morgon leda in i Gamla stans kvällsrytm.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Return to all the ways of shaping a Tarifa stay.', 'Zurück zu allen Möglichkeiten für euren Tarifa-Aufenthalt.', 'Volved a todas las formas de vivir una estancia en Tarifa.', 'Ga terug naar alle manieren om Tarifa te beleven.', 'Gå tillbaka till alla sätt att forma en vistelse i Tarifa.') }
    ]
  },
  sources: {
    eyebrow: shared.sourceEyebrow,
    title: shared.sourceTitle,
    intro: shared.sourceIntro,
    checked: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026'),
    links: [
      { label: l('Tarifa Tourism · Official visitor guide', 'Tarifa Tourismus · Offizieller Besucherführer', 'Turismo de Tarifa · Guía turística oficial', 'Tarifa Toerisme · Officiële bezoekersgids', 'Tarifa Turism · Officiell besöksguide'), text: l('Local context for wellness and yoga addresses in Tarifa.', 'Ortskontext zu Wellness- und Yoga-Adressen in Tarifa.', 'Contexto local sobre direcciones de bienestar y yoga en Tarifa.', 'Plaatselijke context over wellness- en yogaadressen in Tarifa.', 'Lokal bakgrund om wellness- och yogaadresser i Tarifa.'), href: sourceHrefs.tarifaTourismGuide },
      { label: l('Mandalablue Yoga & Wellness', 'Mandalablue Yoga & Wellness', 'Mandalablue Yoga & Wellness', 'Mandalablue Yoga & Wellness', 'Mandalablue Yoga & Wellness'), text: l('Ocean and beach classes, aerial yoga and current booking details.', 'Ocean- und Beach-Kurse, Aerial-Yoga und aktuelle Buchungsdetails.', 'Clases junto al mar, yoga aéreo y detalles de reserva vigentes.', 'Lessen aan zee, aerial yoga en actuele boekingsinformatie.', 'Havs- och strandklasser, aerialyoga och aktuell bokningsinfo.'), href: sourceHrefs.mandalablue },
      { label: l('Respira Centro Holístico Tarifa', 'Respira Centro Holístico Tarifa', 'Respira Centro Holístico Tarifa', 'Respira Centro Holístico Tarifa', 'Respira Centro Holístico Tarifa'), text: l('Studio classes plus family, children, pregnancy and aerial formats.', 'Studiokurse plus Familien-, Kinder-, Schwangerschafts- und Aerial-Formate.', 'Clases de estudio y formatos de familia, infantil, embarazo y aéreo.', 'Studiolessen plus familie-, kinder-, zwangerschaps- en aerial-vormen.', 'Studioklasser samt familje-, barn-, gravid- och aerialformer.'), href: sourceHrefs.respira }
    ]
  },
  closing: {
    eyebrow: shared.closingEyebrow,
    title: l('Make yoga part of the stay, not a separate errand', 'Macht Yoga zum Teil des Aufenthalts, nicht zur Extrabesorgung', 'Haced del yoga parte de la estancia, no un recado aparte', 'Maak yoga onderdeel van het verblijf, geen aparte klus', 'Låt yogan bli en del av vistelsen, inte ett separat ärende'),
    body: l('With mats already in the apartment and a small wellness cluster in the same street, a morning practice costs nothing to begin. Family & Surf keeps town, beach and teachers within easy reach, and on request we help arrange a private session so the practice fits your stay rather than a fixed timetable.', 'Mit Matten, die schon in der Unterkunft liegen, und einem kleinen Wellness-Cluster in derselben Straße kostet ein Morgen-Flow keinen Aufwand zum Start. Family & Surf hält Ort, Strand und Lehrkräfte in leichter Reichweite, und auf Wunsch organisieren wir eine private Session, damit die Praxis zu eurem Aufenthalt passt statt zu einem festen Stundenplan.', 'Con esterillas ya en el apartamento y un pequeño núcleo de bienestar en la misma calle, empezar una práctica matinal no cuesta nada. Family & Surf mantiene cerca el pueblo, la playa y los profesores y, si lo deseáis, ayudamos a organizar una sesión privada para que la práctica se ajuste a vuestra estancia y no a un horario fijo.', 'Met matten die al in het appartement liggen en een klein wellnesscluster in dezelfde straat kost het beginnen van een ochtendpraktijk niets. Family & Surf houdt stad, strand en docenten binnen handbereik, en op verzoek helpen we een privésessie te regelen zodat de praktijk bij je verblijf past in plaats van bij een vast rooster.', 'Med mattor redan i lägenheten och ett litet wellnesskluster på samma gata kostar det inget att börja en morgonpraktik. Family & Surf håller stad, strand och lärare inom nära räckhåll, och på begäran hjälper vi till att ordna ett privat pass så att praktiken passar er vistelse i stället för ett fast schema.'),
    hubLabel: shared.hubLabel,
    propertyLabel: shared.propertyLabel
  }
};

const whaleWatching: TarifaExperienceSpokeContent = {
  id: 'whale-watching',
  token: 'tarifa_whale_watching',
  seo: buildSeo(
    '2026-09-09-tarifa-whale-watching-v1.0',
    l(
      'Whale watching in Tarifa: the Strait, its whales and how to go',
      'Whale Watching in Tarifa: die Meerenge, ihre Wale und wie ihr rausfahrt',
      'Avistamiento de cetáceos en Tarifa: el Estrecho, sus ballenas y cómo salir',
      'Walvissen spotten in Tarifa: de Straat, haar walvissen en hoe je uitvaart',
      'Valskådning i Tarifa: sundet, dess valar och hur ni åker ut'
    ),
    l(
      'Fourteen kilometres where the Atlantic meets the Mediterranean, with resident pilot whales and dolphins and, in high summer, orcas. What you see, when to go and how to choose a boat — from our apartment ten minutes from the harbour.',
      'Vierzehn Kilometer, auf denen Atlantik und Mittelmeer aufeinandertreffen, mit residenten Grindwalen und Delfinen und, im Hochsommer, Orcas. Was ihr seht, wann ihr fahrt und wie ihr ein Boot wählt — von unserer Wohnung zehn Minuten zum Hafen.',
      'Catorce kilómetros donde el Atlántico se junta con el Mediterráneo, con calderones y delfines residentes y, en pleno verano, orcas. Qué se ve, cuándo salir y cómo elegir barco, a diez minutos de nuestro apartamento al puerto.',
      'Veertien kilometer waar de Atlantische Oceaan de Middellandse Zee ontmoet, met vaste grienden en dolfijnen en, in de hoogzomer, orka’s. Wat je ziet, wanneer je gaat en hoe je een boot kiest — tien minuten van ons appartement naar de haven.',
      'Fjorton kilometer där Atlanten möter Medelhavet, med bofasta grindvalar och delfiner och, på högsommaren, späckhuggare. Vad ni ser, när ni åker och hur ni väljer båt — tio minuter från vår lägenhet till hamnen.'
    )
  ),
  navLabel: l('Whale watching', 'Whale Watching', 'Avistamiento de cetáceos', 'Walvissen spotten', 'Valskådning'),
  breadcrumbLabel: l('Whale watching', 'Whale Watching', 'Avistamiento de cetáceos', 'Walvissen spotten', 'Valskådning'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l(
      'Whales beneath the Strait, ten minutes from our door',
      'Wale unter der Meerenge, zehn Minuten von unserer Tür',
      'Ballenas bajo el Estrecho, a diez minutos de nuestra puerta',
      'Walvissen onder de Straat, tien minuten van onze deur',
      'Valar under sundet, tio minuter från vår dörr'
    ),
    standfirst: l(
      'Between Tarifa and Africa lie fourteen kilometres of water where the Atlantic meets the Mediterranean. Pilot whales and three kinds of dolphin live here all year; sperm whales pass in spring and autumn, orcas in high summer. The boats leave the harbour a short walk from our apartment — when the sea allows.',
      'Zwischen Tarifa und Afrika liegen vierzehn Kilometer Wasser, auf denen der Atlantik ins Mittelmeer übergeht. Grindwale und drei Delfinarten leben hier das ganze Jahr; Pottwale ziehen im Frühjahr und Herbst durch, Orcas im Hochsommer. Die Boote fahren vom Hafen, wenige Minuten zu Fuß von unserer Wohnung — wenn die See es zulässt.',
      'Entre Tarifa y África hay catorce kilómetros de agua donde el Atlántico se junta con el Mediterráneo. Calderones y tres especies de delfín viven aquí todo el año; los cachalotes pasan en primavera y otoño, las orcas en pleno verano. Los barcos salen del puerto, a pocos minutos a pie de nuestro apartamento, cuando el mar lo permite.',
      'Tussen Tarifa en Afrika ligt veertien kilometer water waar de Atlantische Oceaan de Middellandse Zee ontmoet. Grienden en drie soorten dolfijn leven hier het hele jaar; potvissen trekken in het voorjaar en de herfst door, orka’s in de hoogzomer. De boten vertrekken vanuit de haven, een korte wandeling van ons appartement — als de zee het toelaat.',
      'Mellan Tarifa och Afrika ligger fjorton kilometer vatten där Atlanten möter Medelhavet. Grindvalar och tre delfinarter lever här året runt; kaskeloter passerar på våren och hösten, späckhuggare på högsommaren. Båtarna går från hamnen, en kort promenad från vår lägenhet — när havet tillåter.'
    ),
    note: l(
      'Trips depend on the sea, not the calendar — confirm on the morning you go.',
      'Die Fahrten hängen von der See ab, nicht vom Kalender — bestätigt sie am Morgen der Ausfahrt.',
      'Las salidas dependen del mar, no del calendario: confirmadlas la mañana de la excursión.',
      'De tochten hangen af van de zee, niet van de kalender — bevestig ze op de ochtend zelf.',
      'Turerna beror på havet, inte kalendern — bekräfta dem samma morgon.'
    ),
    updated: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026')
  },
  facts: [
    { label: l('The residents', 'Die Standtiere', 'Los residentes', 'De vaste bewoners', 'De bofasta'), value: l('Pilot whales, bottlenose, common and striped dolphins', 'Grindwale, Große Tümmler, Gemeine und Streifendelfine', 'Calderones, delfines mulares, comunes y listados', 'Grienden, tuimelaars, gewone en gestreepte dolfijnen', 'Grindvalar, öresvin, vanliga och strimmiga delfiner') },
    { label: l('When to go', 'Wann fahren', 'Cuándo salir', 'Wanneer gaan', 'När åka'), value: l('Spring to autumn for a first trip, July–August for orcas', 'Frühjahr bis Herbst für die erste Fahrt, Juli–August für Orcas', 'De primavera a otoño para una primera salida, julio–agosto para orcas', 'Voorjaar tot herfst voor een eerste tocht, juli–augustus voor orka’s', 'Vår till höst för en första tur, juli–augusti för späckhuggare') },
    { label: l('From AMARA', 'Von AMARA', 'Desde AMARA', 'Vanaf AMARA', 'Från AMARA'), value: l('Harbour ten minutes on foot', 'Hafen zehn Minuten zu Fuß', 'Puerto a diez minutos a pie', 'Haven tien minuten te voet', 'Hamnen tio minuter till fots') }
  ],
  sections: [
    {
      id: 'why-the-strait',
      eyebrow: l('01 · Why the Strait', '01 · Warum die Meerenge', '01 · Por qué el Estrecho', '01 · Waarom de Straat', '01 · Varför sundet'),
      title: l('Two seas meet in fourteen kilometres', 'Zwei Meere treffen sich auf vierzehn Kilometern', 'Dos mares se juntan en catorce kilómetros', 'Twee zeeën ontmoeten elkaar in veertien kilometer', 'Två hav möts på fjorton kilometer'),
      paragraphs: [
        l(
          'The Strait of Gibraltar is only about fourteen kilometres wide, with deep water, strong currents and a migration route between the Atlantic and the Mediterranean. That mix feeds a rich sea, which is why whales and dolphins are here rather than passing through by chance.',
          'Die Straße von Gibraltar ist nur etwa vierzehn Kilometer breit, mit tiefem Wasser, starken Strömungen und einer Wanderroute zwischen Atlantik und Mittelmeer. Diese Mischung nährt ein reiches Meer, deshalb sind Wale und Delfine hier zu Hause und nicht bloß zufällig auf der Durchreise.',
          'El Estrecho de Gibraltar mide solo unos catorce kilómetros, con aguas profundas, corrientes fuertes y una ruta migratoria entre el Atlántico y el Mediterráneo. Esa mezcla alimenta un mar rico, y por eso las ballenas y los delfines viven aquí y no solo pasan de largo.',
          'De Straat van Gibraltar is maar zo’n veertien kilometer breed, met diep water, sterke stromingen en een trekroute tussen de Atlantische Oceaan en de Middellandse Zee. Die mix voedt een rijke zee, en daarom horen walvissen en dolfijnen hier thuis in plaats van er toevallig langs te trekken.',
          'Gibraltarsund är bara omkring fjorton kilometer brett, med djupt vatten, starka strömmar och en vandringsled mellan Atlanten och Medelhavet. Den blandningen föder ett rikt hav, och därför hör valar och delfiner hemma här snarare än att bara passera förbi.'
        ),
        l(
          'On the water you get two continents at once: Europe behind you, the Moroccan coast ahead, seabirds overhead and, on the horizon, the freighters that thread the Strait day and night.',
          'Auf dem Wasser habt ihr zwei Kontinente auf einmal: Europa im Rücken, die marokkanische Küste voraus, Seevögel über euch und am Horizont die Frachter, die Tag und Nacht durch die Meerenge ziehen.',
          'En el agua tenéis dos continentes a la vez: Europa a la espalda, la costa marroquí enfrente, aves marinas sobre vosotros y, en el horizonte, los cargueros que cruzan el Estrecho día y noche.',
          'Op het water heb je twee continenten tegelijk: Europa achter je, de Marokkaanse kust vóór je, zeevogels boven je en aan de horizon de vrachtschepen die dag en nacht door de Straat varen.',
          'På vattnet får ni två kontinenter samtidigt: Europa bakom er, den marockanska kusten framför, sjöfåglar ovanför och vid horisonten fraktfartygen som passerar sundet dag och natt.'
        )
      ]
    },
    {
      id: 'what-you-see',
      eyebrow: l('02 · What you see', '02 · Was ihr seht', '02 · Qué se ve', '02 · Wat je ziet', '02 · Vad ni ser'),
      title: l('Reliable dolphins, seasonal whales, orcas in summer', 'Verlässliche Delfine, saisonale Wale, Orcas im Sommer', 'Delfines seguros, ballenas por temporada, orcas en verano', 'Betrouwbare dolfijnen, seizoensgebonden walvissen, orka’s in de zomer', 'Pålitliga delfiner, säsongsvalar, späckhuggare på sommaren'),
      paragraphs: [
        l(
          'The dependable core is long-finned pilot whales and bottlenose, common and striped dolphins, present across the season. Sperm whales are more likely in spring and autumn; orcas appear in high summer, roughly early July to late August, when they follow the tuna. Fin whales pass through and are the least predictable.',
          'Der verlässliche Kern sind Langflossen-Grindwale sowie Große Tümmler, Gemeine und Streifendelfine, über die ganze Saison. Pottwale sind im Frühjahr und Herbst wahrscheinlicher; Orcas kommen im Hochsommer, etwa Anfang Juli bis Ende August, wenn sie dem Thunfisch folgen. Finnwale ziehen durch und sind am wenigsten vorhersehbar.',
          'El núcleo fiable son los calderones comunes y los delfines mulares, comunes y listados, presentes toda la temporada. Los cachalotes son más probables en primavera y otoño; las orcas aparecen en pleno verano, de principios de julio a finales de agosto aproximadamente, cuando siguen al atún. Los rorcuales pasan de largo y son los menos previsibles.',
          'De betrouwbare kern zijn grienden en tuimelaars, gewone en gestreepte dolfijnen, het hele seizoen aanwezig. Potvissen zijn waarschijnlijker in het voorjaar en de herfst; orka’s verschijnen in de hoogzomer, ruwweg begin juli tot eind augustus, wanneer ze de tonijn volgen. Gewone vinvissen trekken door en zijn het minst voorspelbaar.',
          'Den pålitliga kärnan är grindvalar samt öresvin, vanliga och strimmiga delfiner, närvarande hela säsongen. Kaskeloter är mer troliga på våren och hösten; späckhuggare dyker upp på högsommaren, ungefär tidig juli till sen augusti, när de följer tonfisken. Sillvalar passerar förbi och är minst förutsägbara.'
        ),
        l(
          'The operators quote sighting rates around 99 per cent, but that means at least one kind of cetacean, not a promised species. A trip can be wonderful with pilot whales and three sorts of dolphin and still no orcas. We tell families that plainly, because it is the honest way to look forward to the day.',
          'Die Anbieter nennen Sichtungsquoten um 99 Prozent, aber das meint mindestens eine Art, keine bestimmte. Eine Fahrt kann mit Grindwalen und drei Delfinarten großartig sein und trotzdem ohne Orcas bleiben. Das sagen wir Familien offen, weil man sich so ehrlich auf den Tag freut.',
          'Los operadores anuncian tasas de avistamiento cercanas al 99 por ciento, pero eso significa al menos un cetáceo, no una especie garantizada. Una salida puede ser estupenda con calderones y tres tipos de delfín y aun así no traer orcas. Se lo decimos claramente a las familias, porque así se espera el día con honestidad.',
          'De aanbieders noemen spotkansen rond 99 procent, maar dat betekent minstens één soort walvisachtige, geen beloofde soort. Een tocht kan geweldig zijn met grienden en drie soorten dolfijn en tóch zonder orka’s. Dat vertellen we gezinnen eerlijk, want zo kijk je oprecht uit naar de dag.',
          'Operatörerna anger observationsfrekvenser kring 99 procent, men det betyder minst en valart, inte en utlovad art. En tur kan vara underbar med grindvalar och tre delfinsorter och ändå sakna späckhuggare. Det säger vi familjer rakt ut, för så ser man ärligt fram emot dagen.'
        )
      ]
    },
    {
      id: 'how-to-go-out',
      eyebrow: l('03 · How to go out', '03 · Wie ihr rausfahrt', '03 · Cómo salir', '03 · Hoe je uitvaart', '03 · Hur ni åker ut'),
      title: l('The boat matters more than the operator', 'Das Boot zählt mehr als der Anbieter', 'El barco importa más que el operador', 'De boot telt meer dan de aanbieder', 'Båten spelar större roll än operatören'),
      paragraphs: [
        l(
          'Five operators sail from the harbour, and the real choice is the kind of boat. A large ship gives you stability, a toilet and the best wheelchair access; a small rigid boat of about ten guests feels more intimate but takes the waves harder. For families and anyone prone to seasickness, the large boats are the calmer day.',
          'Fünf Anbieter fahren vom Hafen, und die eigentliche Wahl ist die Bootsart. Ein großes Schiff bietet Stabilität, eine Toilette und den besten Rollstuhlzugang; ein kleines Festrumpfboot mit etwa zehn Gästen wirkt intimer, nimmt die Wellen aber härter. Für Familien und alle, die seekrank werden, sind die großen Boote der ruhigere Tag.',
          'Cinco operadores salen del puerto, y la verdadera elección es el tipo de barco. Un barco grande da estabilidad, aseo y el mejor acceso para sillas de ruedas; una lancha rígida de unos diez pasajeros resulta más íntima pero encaja peor el oleaje. Para las familias y quien se marea, los barcos grandes son el día más tranquilo.',
          'Vijf aanbieders varen vanuit de haven, en de echte keuze is het type boot. Een groot schip geeft stabiliteit, een toilet en de beste rolstoeltoegang; een kleine rib van zo’n tien gasten voelt intiemer maar vangt de golven harder op. Voor gezinnen en wie snel zeeziek wordt, zijn de grote boten de rustigere dag.',
          'Fem operatörer avgår från hamnen, och det verkliga valet är typen av båt. Ett stort fartyg ger stabilitet, toalett och bäst rullstolstillgång; en liten ribbåt för ett tiotal gäster känns mer intim men tar vågorna hårdare. För familjer och alla som blir sjösjuka är de stora båtarna den lugnare dagen.'
        ),
        l(
          'The one we point our guests to is firmm, a research foundation that briefs in German, English and Spanish, carries families and is clear about what it can and cannot promise. Prices change with the season, so we send you to their booking page rather than printing a figure that will be wrong by next year.',
          'Wir schicken unsere Gäste zu firmm, einer Forschungsstiftung, die auf Deutsch, Englisch und Spanisch einführt, Familien mitnimmt und klar sagt, was sie versprechen kann und was nicht. Die Preise ändern sich mit der Saison, deshalb verweisen wir euch auf ihre Buchungsseite, statt eine Zahl zu drucken, die nächstes Jahr falsch ist.',
          'A quien alojamos lo orientamos hacia firmm, una fundación de investigación que informa en alemán, inglés y español, lleva familias y es clara sobre lo que puede y no puede prometer. Los precios cambian con la temporada, así que os enviamos a su página de reservas en lugar de imprimir una cifra que el año que viene estará mal.',
          'Wie bij ons verblijft, wijzen we naar firmm, een onderzoeksstichting die in het Duits, Engels en Spaans uitlegt, gezinnen meeneemt en duidelijk is over wat ze wel en niet kan beloven. Prijzen veranderen met het seizoen, dus sturen we je naar hun boekingspagina in plaats van een bedrag te drukken dat volgend jaar niet meer klopt.',
          'Den vi vägleder våra gäster till är firmm, en forskningsstiftelse som informerar på tyska, engelska och spanska, tar med familjer och är tydlig med vad den kan och inte kan lova. Priserna ändras med säsongen, så vi hänvisar er till deras bokningssida i stället för att trycka en siffra som är fel nästa år.'
        )
      ]
    },
    {
      id: 'watching-responsibly',
      eyebrow: l('04 · Watching responsibly', '04 · Rücksichtsvoll beobachten', '04 · Observar con respeto', '04 · Verantwoord kijken', '04 · Skåda med hänsyn'),
      title: l('Keep the day flexible, keep your distance', 'Haltet den Tag flexibel, haltet Abstand', 'Mantened el día flexible y la distancia', 'Houd de dag flexibel, houd afstand', 'Håll dagen flexibel, håll avstånd'),
      paragraphs: [
        l(
          'The sea, not the clock, decides. Strong wind can cancel several days in a row, so leave a spare morning and never book a flight or long transfer straight after the trip. Check the marine forecast and confirm with the operator on the day; a two-day window is the surest way to actually get out.',
          'Die See entscheidet, nicht die Uhr. Starker Wind kann mehrere Tage hintereinander ausfallen lassen, lasst also einen Morgen frei und legt nie einen Flug oder langen Transfer direkt nach die Fahrt. Prüft die Seewettervorhersage und bestätigt am Tag mit dem Anbieter; zwei Tage Spielraum sind der sicherste Weg, wirklich rauszukommen.',
          'Decide el mar, no el reloj. El viento fuerte puede anular varios días seguidos, así que dejad una mañana libre y no reservéis nunca un vuelo o traslado largo justo después. Consultad la previsión marítima y confirmad con el operador el mismo día; una ventana de dos días es la forma más segura de salir de verdad.',
          'De zee beslist, niet de klok. Harde wind kan meerdere dagen achter elkaar schrappen, dus houd een ochtend vrij en boek nooit een vlucht of lange transfer meteen erna. Check de zeeverwachting en bevestig op de dag zelf met de aanbieder; een venster van twee dagen is de zekerste manier om echt uit te varen.',
          'Havet avgör, inte klockan. Stark vind kan ställa in flera dagar i rad, så håll en morgon ledig och boka aldrig ett flyg eller en lång transfer direkt efter. Kolla sjövädret och bekräfta med operatören samma dag; ett tvådagarsfönster är säkraste sättet att faktiskt komma ut.'
        ),
        l(
          'Spanish law protects the animals with a 500-metre zone, a four-knot limit near them and no chasing, feeding or cutting between mother and calf. A good crew keeps that distance and breaks off if the animals show stress. That restraint is the sign of a serious operator, and it makes for a better sighting, not a worse one.',
          'Das spanische Gesetz schützt die Tiere mit einer 500-Meter-Zone, höchstens vier Knoten in ihrer Nähe und einem Verbot, sie zu verfolgen, zu füttern oder zwischen Mutter und Kalb zu fahren. Eine gute Crew hält diesen Abstand und bricht ab, wenn die Tiere Stress zeigen. Diese Zurückhaltung kennzeichnet einen seriösen Anbieter — und macht die Sichtung besser, nicht schlechter.',
          'La ley española protege a los animales con una zona de 500 metros, un máximo de cuatro nudos cerca de ellos y la prohibición de perseguir, alimentar o cruzar entre madre y cría. Una buena tripulación mantiene esa distancia y se retira si los animales muestran estrés. Esa contención distingue a un operador serio, y mejora el avistamiento, no lo empeora.',
          'De Spaanse wet beschermt de dieren met een zone van 500 meter, maximaal vier knopen in hun buurt en een verbod op achtervolgen, voeren of tussen moeder en kalf varen. Een goede bemanning houdt die afstand en breekt af als de dieren stress tonen. Die terughoudendheid kenmerkt een serieuze aanbieder — en maakt de waarneming beter, niet slechter.',
          'Spansk lag skyddar djuren med en 500-meterszon, högst fyra knop nära dem och förbud mot att jaga, mata eller köra mellan mor och kalv. En bra besättning håller det avståndet och avbryter om djuren visar stress. Den återhållsamheten utmärker en seriös operatör — och ger en bättre observation, inte sämre.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('From La Marina', 'Von La Marina aus', 'Desde La Marina', 'Vanuit La Marina', 'Från La Marina'),
    title: l('Ten minutes to the harbour, the day kept open', 'Zehn Minuten zum Hafen, der Tag bleibt offen', 'A diez minutos del puerto, con el día abierto', 'Tien minuten naar de haven, de dag open gehouden', 'Tio minuter till hamnen, dagen hålls öppen'),
    paragraphs: [
      l(
        'From Family & Surf it is about ten minutes on foot to the harbour, so a morning trip needs no car and no early drive. If the sea calls it off, town, Playa Chica and the old town are right there instead.',
        'Von Family & Surf sind es rund zehn Minuten zu Fuß zum Hafen, eine Morgenfahrt braucht also kein Auto und keine frühe Fahrt. Fällt sie wegen der See aus, sind Stadt, Playa Chica und Altstadt gleich nebenan.',
        'Desde Family & Surf hay unos diez minutos a pie hasta el puerto, así que una salida de mañana no necesita coche ni madrugón en carretera. Si el mar la cancela, el pueblo, Playa Chica y el casco antiguo están al lado.',
        'Vanaf Family & Surf is het zo’n tien minuten lopen naar de haven, dus een ochtendtocht heeft geen auto en geen vroege rit nodig. Blaast de zee hem af, dan liggen stad, Playa Chica en de oude stad meteen om de hoek.',
        'Från Family & Surf är det ungefär tio minuter till fots till hamnen, så en morgontur behöver varken bil eller tidig körning. Ställer havet in den finns stan, Playa Chica och gamla stan alldeles intill.'
      ),
      l(
        'A tip we pass on: out in the middle your phone may pick up a Moroccan network, so switch mobile data off, and take a warm layer even on a hot day.',
        'Ein Tipp, den wir weitergeben: In der Mitte wählt euer Handy vielleicht ein marokkanisches Netz, schaltet also die mobilen Daten aus, und nehmt auch an heißen Tagen eine warme Schicht mit.',
        'Un consejo que damos: en mitad del Estrecho el móvil puede coger una red marroquí, así que apagad los datos, y llevad una capa de abrigo aunque haga calor.',
        'Een tip die we meegeven: midden op zee pakt je telefoon misschien een Marokkaans netwerk, zet mobiele data dus uit, en neem ook op een hete dag een warme laag mee.',
        'Ett tips vi ger vidare: mitt ute kan telefonen fånga ett marockanskt nät, så stäng av mobildata, och ta med ett varmt lager även en varm dag.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_bolonia_baelo_claudia', label: l('Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia y Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia'), text: l('A beach, a huge dune and a Roman town in one day out.', 'Strand, riesige Düne und eine Römerstadt an einem Ausflugstag.', 'Playa, una duna enorme y una ciudad romana en una excursión.', 'Een strand, een enorm duin en een Romeinse stad in één uitstap.', 'En strand, en väldig dyn och en romersk stad på en utflykt.') },
      { token: 'tarifa_family', label: l('Family holidays', 'Familienurlaub', 'Vacaciones en familia', 'Gezinsvakantie', 'Familjesemester'), text: l('How a whale trip fits into a family week in Tarifa.', 'Wie eine Walfahrt in eine Familienwoche in Tarifa passt.', 'Cómo encaja una salida de ballenas en una semana en familia.', 'Hoe een walvistocht in een gezinsweek in Tarifa past.', 'Hur en valtur passar in i en familjevecka i Tarifa.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Beach, wind, old town, nature, Bolonia, yoga.', 'Strand, Wind, Altstadt, Natur, Bolonia, Yoga.', 'Playa, viento, casco antiguo, naturaleza, Bolonia, yoga.', 'Strand, wind, oude stad, natuur, Bolonia, yoga.', 'Strand, vind, gamla stan, natur, Bolonia, yoga.') }
    ]
  },
  sources: {
    eyebrow: shared.sourceEyebrow,
    title: shared.sourceTitle,
    intro: shared.sourceIntro,
    checked: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026'),
    links: [
      { label: l('firmm · Whale watching', 'firmm · Whale Watching', 'firmm · Avistamiento de cetáceos', 'firmm · Walvissen spotten', 'firmm · Valskådning'), text: l('Trips, boats, family pricing and the foundation’s conduct at sea.', 'Fahrten, Boote, Familienpreise und das Verhalten der Stiftung auf See.', 'Salidas, barcos, precios para familias y la conducta de la fundación en el mar.', 'Tochten, boten, gezinsprijzen en het gedrag van de stichting op zee.', 'Turer, båtar, familjepriser och stiftelsens uppträdande till sjöss.'), href: 'https://www.firmm.org/en/whale-watching' },
      { label: l('Tarifa Tourism · Whale watching', 'Tarifa Tourismus · Whale Watching', 'Turismo de Tarifa · Avistamiento', 'Tarifa Toerisme · Walvissen', 'Tarifa Turism · Valskådning'), text: l('The official listing of the operators sailing from the harbour.', 'Das offizielle Verzeichnis der Anbieter, die vom Hafen fahren.', 'El listado oficial de los operadores que salen del puerto.', 'De officiële lijst van aanbieders die vanuit de haven varen.', 'Den officiella listan över operatörer som avgår från hamnen.'), href: 'https://turismodetarifa.com/en/what-to-do/whale-watching/' },
      { label: l('AEMET · Strait marine forecast', 'AEMET · Seewetter Meerenge', 'AEMET · Predicción marítima del Estrecho', 'AEMET · Zeeverwachting Straat', 'AEMET · Sjöväder för sundet'), text: l('Wind and wave forecast for deciding whether a trip will sail.', 'Wind- und Wellenvorhersage, um zu entscheiden, ob eine Fahrt stattfindet.', 'Previsión de viento y oleaje para decidir si habrá salida.', 'Wind- en golfverwachting om te bepalen of een tocht doorgaat.', 'Vind- och vågprognos för att avgöra om en tur blir av.'), href: 'https://www.aemet.es/en/eltiempo/prediccion/maritima' }
    ]
  },
  closing: {
    eyebrow: shared.closingEyebrow,
    title: l('A base ten minutes from the boats', 'Eine Unterkunft zehn Minuten von den Booten', 'Un alojamiento a diez minutos de los barcos', 'Een uitvalsbasis tien minuten van de boten', 'En bas tio minuter från båtarna'),
    body: l('From Family & Surf the harbour is a short walk, so you can hold a morning open for the calmest sea and still fill the rest of the day close to home.', 'Von Family & Surf ist der Hafen ein kurzer Weg, ihr könnt also einen Morgen für die ruhigste See offen halten und den Rest des Tages trotzdem nah bei zu Hause verbringen.', 'Desde Family & Surf el puerto queda a un paseo, así que podéis reservar una mañana para el mar más tranquilo y llenar el resto del día cerca de casa.', 'Vanaf Family & Surf is de haven een korte wandeling, dus je kunt een ochtend openhouden voor de rustigste zee en de rest van de dag toch dicht bij huis vullen.', 'Från Family & Surf är hamnen en kort promenad, så ni kan hålla en morgon öppen för det lugnaste havet och ändå fylla resten av dagen nära hemmet.'),
    hubLabel: shared.hubLabel,
    propertyLabel: shared.propertyLabel
  },
  operators: {
    eyebrow: l('The operators', 'Weiterführend', 'Los operadores', 'De aanbieders', 'Aktörerna'),
    title: l(
      'Operators sailing from Tarifa harbour',
      'Anbieter ab dem Hafen Tarifa',
      'Operadores que salen del puerto de Tarifa',
      'Aanbieders vanuit de haven van Tarifa',
      'Aktörer från Tarifas hamn'
    ),
    intro: l(
      'Five operators sail from here. A first overview — check prices, times and booking directly with them.',
      'Fünf Anbieter fahren von hier aus. Ein erster Überblick — Preise, Zeiten und Buchung findet ihr direkt bei ihnen.',
      'Cinco operadores salen de aquí. Un primer resumen: consultad precios, horarios y reservas directamente con ellos.',
      'Vijf aanbieders vertrekken hiervandaan. Een eerste overzicht — prijzen, tijden en boeking vind je rechtstreeks bij hen.',
      'Fem aktörer avgår härifrån. En första överblick — pris, tider och bokning hittar ni direkt hos dem.'
    ),
    items: [
      { name: 'firmm', href: 'https://www.firmm.org/en/whale-watching', note: l('Research foundation, briefings in German, large stable boats, family-suitable.', 'Forschungsstiftung, Einführung auf Deutsch, große stabile Boote, familientauglich.', 'Fundación de investigación, charlas en alemán, barcos grandes y estables, apta para familias.', 'Onderzoeksstichting, uitleg in het Duits, grote stabiele boten, gezinsvriendelijk.', 'Forskningsstiftelse, genomgång på tyska, stora stabila båtar, familjevänligt.') },
      { name: 'Turmares', href: 'https://www.turmares.com/en/excursions/', note: l('The widest choice of boats, from a large ship to a small hybrid.', 'Größte Bootsauswahl, vom großen Schiff bis zum kleinen Hybridboot.', 'La mayor variedad de barcos, desde un gran buque hasta un pequeño híbrido.', 'De grootste keuze aan boten, van een groot schip tot een kleine hybride.', 'Störst utbud av båtar, från stort fartyg till liten hybrid.') },
      { name: 'Aventura Tarifa', href: 'https://www.aventuratarifa.com', note: l('Small group in a RIB, up to about ten guests.', 'Kleingruppe im RIB, bis etwa zehn Gäste.', 'Grupo reducido en lancha, hasta unos diez pasajeros.', 'Kleine groep in een RIB, tot ongeveer tien gasten.', 'Liten grupp i RIB, upp till cirka tio gäster.') },
      { name: 'TOP Tarifa', href: 'https://toptarifa.es', note: l('Zodiac/RIB, private charters too.', 'Zodiac/RIB, auch private Charter.', 'Zódiac/lancha, también chárter privado.', 'Zodiac/RIB, ook privécharters.', 'Zodiac/RIB, även privata charter.') },
      { name: 'Marina Blue', href: 'https://marinablue.es', note: l('A motor yacht, comfortable, year-round.', 'Motoryacht, komfortabel, ganzjährig.', 'Un yate a motor, cómodo, todo el año.', 'Een motorjacht, comfortabel, het hele jaar.', 'En motoryacht, bekväm, året runt.') }
    ],
    guideNote: l(
      'If you are staying with us, you will not have to piece this together yourself: our Guest Guide keeps whale watching ready — operators, times and what matters on the morning you sail.',
      'Wer bei uns wohnt, muss das nicht selbst zusammentragen: In unserem Gästeguide liegt der Bereich Whale Watching fertig — Anbieter, Zeiten und was am Morgen der Ausfahrt zählt.',
      'Si os alojáis con nosotros, no tendréis que reunir todo esto: en nuestra guía del huésped el avistamiento está listo — operadores, horarios y lo que importa la mañana de la salida.',
      'Wie bij ons verblijft, hoeft dit niet zelf bij elkaar te zoeken: in onze gastengids ligt walvissen spotten klaar — aanbieders, tijden en wat telt op de ochtend van vertrek.',
      'Bor ni hos oss behöver ni inte samla ihop det själva: i vår gästguide ligger valskådning klart — aktörer, tider och vad som gäller på morgonen ni åker ut.'
    )
  },
  guidePreview: {
    title: l('Whale watching in Tarifa', 'Whale Watching in Tarifa', 'Avistamiento de cetáceos en Tarifa', 'Walvissen spotten in Tarifa', 'Valskådning i Tarifa'),
    subtitle: l(
      'Everything ready before you sail — operators, seasons and the calm-sea call.',
      'Alles bereit vor der Ausfahrt — Anbieter, Saison und die Wahl der ruhigen See.',
      'Todo listo antes de salir: operadores, temporadas y elegir el mar en calma.',
      'Alles klaar voor vertrek — aanbieders, seizoenen en de keuze voor kalme zee.',
      'Allt klart före avfärd — aktörer, säsonger och valet av lugnt hav.'
    ),
    cards: [
      { icon: '≋', title: l('Operators & boats', 'Anbieter & Boote', 'Operadores y barcos', 'Aanbieders & boten', 'Aktörer & båtar'), meta: l('Five operators · which boat suits you', 'Fünf Anbieter · welches Boot passt', 'Cinco operadores · qué barco elegir', 'Vijf aanbieders · welke boot past', 'Fem aktörer · vilken båt passar') },
      { icon: '◷', title: l('Best months', 'Beste Monate', 'Mejores meses', 'Beste maanden', 'Bästa månaderna'), meta: l('Dolphins year-round · orcas Jul–Aug', 'Delfine ganzjährig · Orcas Jul–Aug', 'Delfines todo el año · orcas jul–ago', 'Dolfijnen het hele jaar · orka’s jul–aug', 'Delfiner året runt · späckhuggare jul–aug') },
      { icon: '✦', title: l('On the morning', 'Am Ausfahrtsmorgen', 'La mañana de la salida', 'Op de ochtend', 'På morgonen'), meta: l('Sea check · seasickness · what to bring', 'See-Check · Seekrankheit · was mitnehmen', 'El mar · mareo · qué llevar', 'Zee-check · zeeziekte · wat meenemen', 'Havskoll · sjösjuka · vad ta med') }
    ]
  }
};

const family: TarifaExperienceSpokeContent = {
  id: 'family',
  token: 'tarifa_family',
  seo: buildSeo(
    '2026-09-09-tarifa-family-v1.0',
    l(
      'Family holidays in Tarifa: beaches, wildlife and easy days',
      'Familienurlaub in Tarifa: Strände, Tierwelt und entspannte Tage',
      'Vacaciones en familia en Tarifa: playas, fauna y días tranquilos',
      'Gezinsvakantie in Tarifa: stranden, natuur en rustige dagen',
      'Familjesemester i Tarifa: stränder, djurliv och lugna dagar'
    ),
    l(
      'Tarifa gives families more than the wind it is famous for: a calm town beach, whales offshore, Roman Bolonia and nature parks, with one bigger outing. We host families here and plan the day around the wind.',
      'Tarifa gibt Familien mehr als den Wind, für den es bekannt ist: einen ruhigen Stadtstrand, Wale vor der Küste, das römische Bolonia und Naturparks, dazu einen größeren Ausflug. Wir empfangen hier Familien und planen den Tag mit dem Wind.',
      'Tarifa ofrece a las familias más que el viento por el que es famosa: una playa urbana tranquila, ballenas frente a la costa, la Bolonia romana y parques naturales, con una excursión mayor. Aquí alojamos a familias y planificamos el día con el viento.',
      'Tarifa biedt gezinnen meer dan de wind waarom het bekendstaat: een rustig stadsstrand, walvissen voor de kust, het Romeinse Bolonia en natuurparken, met één grotere uitstap. Wij ontvangen hier gezinnen en plannen de dag met de wind.',
      'Tarifa ger familjer mer än vinden det är känt för: en lugn stadsstrand, valar utanför kusten, det romerska Bolonia och naturparker, med en större utflykt. Vi tar emot familjer här och planerar dagen med vinden.'
    )
  ),
  navLabel: l('Family holidays', 'Familienurlaub', 'Vacaciones en familia', 'Gezinsvakantie', 'Familjesemester'),
  breadcrumbLabel: l('Family holidays', 'Familienurlaub', 'Vacaciones en familia', 'Gezinsvakantie', 'Familjesemester'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l(
      'Tarifa with children, at your own pace',
      'Tarifa mit Kindern, in eurem Tempo',
      'Tarifa con niños, a vuestro ritmo',
      'Tarifa met kinderen, in jullie tempo',
      'Tarifa med barn, i er egen takt'
    ),
    standfirst: l(
      'Tarifa is known for the wind, but for families it is above all beaches, wildlife and short days outdoors. A calm town beach for small children, whales and dolphins offshore, the Roman town of Baelo Claudia beside its dune, and nature parks a short drive away. We host families at Family & Surf and plan the day with the wind rather than against it.',
      'Tarifa ist für den Wind bekannt, für Familien aber vor allem Strände, Tierwelt und kurze Tage draußen. Ein ruhiger Stadtstrand für kleine Kinder, Wale und Delfine vor der Küste, die Römerstadt Baelo Claudia neben ihrer Düne und Naturparks eine kurze Fahrt entfernt. Wir empfangen im Family & Surf Familien und planen den Tag mit dem Wind statt gegen ihn.',
      'Tarifa es conocida por el viento, pero para las familias es sobre todo playas, fauna y días cortos al aire libre. Una playa urbana tranquila para los más pequeños, ballenas y delfines frente a la costa, la ciudad romana de Baelo Claudia junto a su duna y parques naturales a poca distancia en coche. En Family & Surf alojamos a familias y planificamos el día con el viento, no contra él.',
      'Tarifa staat bekend om de wind, maar voor gezinnen is het vooral stranden, natuur en korte dagen buiten. Een rustig stadsstrand voor kleine kinderen, walvissen en dolfijnen voor de kust, de Romeinse stad Baelo Claudia naast haar duin en natuurparken op korte rijafstand. In Family & Surf ontvangen we gezinnen en plannen we de dag met de wind in plaats van ertegen.',
      'Tarifa är känt för vinden, men för familjer är det framför allt stränder, djurliv och korta dagar utomhus. En lugn stadsstrand för små barn, valar och delfiner utanför kusten, den romerska staden Baelo Claudia intill sin dyn och naturparker en kort bilfärd bort. På Family & Surf tar vi emot familjer och planerar dagen med vinden i stället för mot den.'
    ),
    note: l(
      'The wind can turn a beach day into a hill walk — we keep a plan B for every day.',
      'Der Wind macht aus einem Strandtag schnell eine Wanderung — für jeden Tag halten wir einen Plan B bereit.',
      'El viento puede convertir un día de playa en una caminata — guardamos un plan B para cada día.',
      'De wind kan een stranddag in een heuvelwandeling veranderen — we houden voor elke dag een plan B achter de hand.',
      'Vinden kan förvandla en stranddag till en kullvandring — vi håller en plan B för varje dag.'
    ),
    updated: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026')
  },
  facts: [
    { label: l('With little ones', 'Mit den Kleinen', 'Con los más pequeños', 'Met de kleintjes', 'Med de små'), value: l('Playa Chica: calm water, showers, a play area', 'Playa Chica: ruhiges Wasser, Duschen, Spielbereich', 'Playa Chica: agua tranquila, duchas, zona de juegos', 'Playa Chica: rustig water, douches, speelplek', 'Playa Chica: lugnt vatten, duschar, lekplats') },
    { label: l('On the water', 'Auf dem Wasser', 'En el agua', 'Op het water', 'På vattnet'), value: l('Whale watching, family-suitable from the harbour', 'Whale Watching, familientauglich ab Hafen', 'Avistamiento de cetáceos, apto para familias', 'Walvissen spotten, gezinsvriendelijk vanuit de haven', 'Valskådning, familjevänlig från hamnen') },
    { label: l('One bigger day', 'Ein großer Tag', 'Un día grande', 'Eén grotere dag', 'En större dag'), value: l('Bolonia & Baelo Claudia: beach, dune and a Roman town', 'Bolonia & Baelo Claudia: Strand, Düne und Römerstadt', 'Bolonia y Baelo Claudia: playa, duna y ciudad romana', 'Bolonia & Baelo Claudia: strand, duin en Romeinse stad', 'Bolonia & Baelo Claudia: strand, dyn och romersk stad') }
  ],
  sections: [
    {
      id: 'relaxed-base',
      eyebrow: l('01 · A relaxed base', '01 · Entspannte Basis', '01 · Una base tranquila', '01 · Een ontspannen basis', '01 · En avslappnad bas'),
      title: l('More than the wind it is famous for', 'Mehr als der Wind, für den es bekannt ist', 'Más que el viento por el que es famosa', 'Meer dan de wind waarom het bekendstaat', 'Mer än vinden det är känt för'),
      paragraphs: [
        l(
          'Tarifa’s name comes from kitesurfing, but a family week here runs on beaches, animals and easy time outdoors. The strength of the place is the mix: sand and swimming, whales and birds, a Roman town by the sea and hills to walk, all within a short drive.',
          'Tarifas Name kommt vom Kitesurfen, doch eine Familienwoche hier lebt von Stränden, Tieren und ruhiger Zeit draußen. Die Stärke des Ortes ist die Mischung: Sand und Baden, Wale und Vögel, eine Römerstadt am Meer und Hügel zum Wandern, alles eine kurze Fahrt entfernt.',
          'El nombre de Tarifa viene del kitesurf, pero una semana en familia aquí se sostiene en playas, animales y tiempo tranquilo al aire libre. La fuerza del lugar es la mezcla: arena y baño, ballenas y aves, una ciudad romana junto al mar y colinas para caminar, todo a poca distancia en coche.',
          'De naam Tarifa komt van het kitesurfen, maar een gezinsweek hier draait op stranden, dieren en rustige tijd buiten. De kracht van de plek is de mix: zand en zwemmen, walvissen en vogels, een Romeinse stad aan zee en heuvels om te wandelen, alles op korte rijafstand.',
          'Namnet Tarifa kommer från kitesurfing, men en familjevecka här bygger på stränder, djur och lugn tid utomhus. Platsens styrka är blandningen: sand och bad, valar och fåglar, en romersk stad vid havet och kullar att vandra, allt en kort bilfärd bort.'
        ),
        l(
          'The one thing to plan around is the wind. It can turn a beach afternoon into a hill walk within hours, so we do not fix every day in advance; we keep whale trips and water days flexible and hold a calmer alternative in reserve. That way the wind shapes the holiday instead of spoiling it.',
          'Womit ihr planen solltet, ist der Wind. Er macht aus einem Strandnachmittag binnen Stunden eine Wanderung, deshalb legen wir nicht jeden Tag vorab fest; wir halten Walfahrten und Wassertage flexibel und eine ruhigere Alternative in Reserve. So formt der Wind den Urlaub, statt ihn zu verderben.',
          'Con lo que hay que contar es con el viento. Puede convertir una tarde de playa en una caminata en pocas horas, así que no fijamos cada día por adelantado; mantenemos flexibles las salidas de ballenas y los días de agua y guardamos una alternativa más tranquila. Así el viento da forma a las vacaciones en lugar de estropearlas.',
          'Waar je rekening mee moet houden, is de wind. Hij kan een strandmiddag binnen enkele uren in een wandeling veranderen, dus leggen we niet elke dag vooraf vast; we houden walvistochten en waterdagen flexibel en een rustiger alternatief achter de hand. Zo vormt de wind de vakantie in plaats van hem te bederven.',
          'Det man ska planera kring är vinden. Den kan förvandla en strandeftermiddag till en vandring på några timmar, så vi låser inte varje dag i förväg; vi håller valturer och vattendagar flexibla och har ett lugnare alternativ i reserv. Så formar vinden semestern i stället för att förstöra den.'
        )
      ]
    },
    {
      id: 'beaches-for-every-age',
      eyebrow: l('02 · Beaches', '02 · Strände', '02 · Playas', '02 · Stranden', '02 · Stränder'),
      title: l('A calm beach and a big one', 'Ein ruhiger Strand und ein großer', 'Una playa tranquila y una grande', 'Een rustig strand en een groot', 'En lugn strand och en stor'),
      paragraphs: [
        l(
          'Playa Chica, right in town, is the easiest beach with small children: comparatively calm water, showers and a play area, a few minutes on foot. On the days when the Atlantic beaches are too windy, this is where families move.',
          'Playa Chica mitten in der Stadt ist der einfachste Strand mit kleinen Kindern: vergleichsweise ruhiges Wasser, Duschen und ein Spielbereich, wenige Minuten zu Fuß. An Tagen, an denen die Atlantikstrände zu windig sind, wechseln Familien hierher.',
          'Playa Chica, en pleno pueblo, es la playa más fácil con niños pequeños: agua relativamente tranquila, duchas y una zona de juegos, a pocos minutos a pie. Los días en que las playas atlánticas soplan demasiado, aquí es donde se van las familias.',
          'Playa Chica, midden in het dorp, is het makkelijkste strand met kleine kinderen: relatief rustig water, douches en een speelplek, een paar minuten lopen. Op de dagen dat de Atlantische stranden te winderig zijn, wijken gezinnen hierheen uit.',
          'Playa Chica, mitt i stan, är den enklaste stranden med små barn: förhållandevis lugnt vatten, duschar och en lekplats, några minuters promenad. De dagar då atlantstränderna blåser för mycket är det hit familjer flyttar.'
        ),
        l(
          'For a full beach day, the southern stretch of Los Lances is a wide family beach with walkways and places to eat. It is more exposed, so on a strong Levante it becomes a walk rather than a swim — which is exactly when Playa Chica or the hills are the better call.',
          'Für einen ganzen Strandtag ist der südliche Abschnitt von Los Lances ein weiter Familienstrand mit Stegen und Lokalen. Er ist offener, bei kräftigem Levante wird daraus ein Spaziergang statt eines Bades — genau dann sind Playa Chica oder die Hügel die bessere Wahl.',
          'Para un día entero de playa, el tramo sur de Los Lances es una amplia playa familiar con pasarelas y sitios para comer. Está más expuesto, así que con levante fuerte se convierte en un paseo más que en un baño, y es justo entonces cuando Playa Chica o las colinas son mejor opción.',
          'Voor een hele stranddag is het zuidelijke stuk van Los Lances een breed gezinsstrand met vlonders en eetgelegenheden. Het is opener, dus bij een stevige Levante wordt het eerder een wandeling dan een duik — precies dan zijn Playa Chica of de heuvels de betere keuze.',
          'För en hel strandag är den södra delen av Los Lances en bred familjestrand med spänger och ställen att äta. Den är mer utsatt, så vid stark Levante blir det en promenad snarare än ett bad — och då är Playa Chica eller kullarna det bättre valet.'
        )
      ]
    },
    {
      id: 'wildlife-and-nature',
      eyebrow: l('03 · Wildlife & nature', '03 · Tierwelt & Natur', '03 · Fauna y naturaleza', '03 · Natuur & dieren', '03 · Djurliv & natur'),
      title: l('Whales offshore, birds overhead, Bolonia by the sea', 'Wale vor der Küste, Vögel darüber, Bolonia am Meer', 'Ballenas en el mar, aves en el cielo, Bolonia junto al mar', 'Walvissen voor de kust, vogels erboven, Bolonia aan zee', 'Valar utanför, fåglar ovanför, Bolonia vid havet'),
      paragraphs: [
        l(
          'A whale-watching trip is one of the best things to do with children here, and it is genuinely family-suitable: the large boats take small children and even babies, with reduced fares. It is very weather-dependent, so we keep it flexible and route you to a trip that fits the day.',
          'Eine Walbeobachtung gehört hier zu den schönsten Dingen mit Kindern und ist wirklich familientauglich: Die großen Boote nehmen kleine Kinder und sogar Babys mit, zu ermäßigten Preisen. Sie ist stark wetterabhängig, deshalb halten wir sie flexibel und vermitteln euch eine Fahrt, die zum Tag passt.',
          'Una salida de avistamiento es de lo mejor que se puede hacer aquí con niños, y es de verdad apta para familias: los barcos grandes llevan a niños pequeños e incluso bebés, con tarifas reducidas. Depende mucho del tiempo, así que la mantenemos flexible y os orientamos hacia una salida que encaje en el día.',
          'Een walvistocht is een van de leukste dingen om hier met kinderen te doen, en het is echt gezinsvriendelijk: de grote boten nemen kleine kinderen en zelfs baby’s mee, met korting. Het hangt sterk van het weer af, dus we houden het flexibel en wijzen je naar een tocht die bij de dag past.',
          'En valskådningstur är en av de bästa sakerna att göra med barn här, och den är verkligen familjevänlig: de stora båtarna tar med små barn och till och med bebisar, till reducerat pris. Den är mycket väderberoende, så vi håller den flexibel och lotsar er till en tur som passar dagen.'
        ),
        l(
          'On land the Parque Natural del Estrecho has short walks with views to Africa, and in migration season storks and raptors cross the Strait overhead. The best single outing is Bolonia: a beach and a huge dune next to the Roman town of Baelo Claudia, where children can walk straight from the sand into a two-thousand-year-old street.',
          'An Land bietet der Parque Natural del Estrecho kurze Wege mit Blick nach Afrika, und zur Zugzeit ziehen Störche und Greifvögel über die Meerenge. Der schönste einzelne Ausflug ist Bolonia: ein Strand und eine riesige Düne neben der Römerstadt Baelo Claudia, wo Kinder vom Sand direkt in eine zweitausend Jahre alte Straße laufen.',
          'En tierra, el Parque Natural del Estrecho tiene paseos cortos con vistas a África, y en época de paso cigüeñas y rapaces cruzan el Estrecho por encima. La mejor excursión es Bolonia: una playa y una enorme duna junto a la ciudad romana de Baelo Claudia, donde los niños pasan de la arena a una calle de hace dos mil años.',
          'Op het land heeft het Parque Natural del Estrecho korte wandelingen met uitzicht op Afrika, en in de trektijd trekken ooievaars en roofvogels over de Straat. De mooiste losse uitstap is Bolonia: een strand en een enorm duin naast de Romeinse stad Baelo Claudia, waar kinderen zo van het zand een tweeduizend jaar oude straat in lopen.',
          'På land har Parque Natural del Estrecho korta vandringar med utsikt mot Afrika, och under flyttningstiden drar storkar och rovfåglar över sundet. Den bästa enskilda utflykten är Bolonia: en strand och en väldig dyn intill den romerska staden Baelo Claudia, där barn går rakt från sanden in på en tvåtusen år gammal gata.'
        )
      ]
    },
    {
      id: 'one-bigger-outing',
      eyebrow: l('04 · One bigger outing', '04 · Ein größerer Ausflug', '04 · Una excursión mayor', '04 · Eén grotere uitstap', '04 · En större utflykt'),
      title: l('Pick one big day, and ask us for the rest', 'Wählt einen großen Tag, den Rest fragt uns', 'Elegid un día grande, y el resto preguntádnoslo', 'Kies één grote dag, en vraag ons de rest', 'Välj en stor dag, och fråga oss om resten'),
      paragraphs: [
        l(
          'For a week we would not try to tick everything off. One larger outing is plenty: an animal-rescue zoo about an hour inland for younger children, or the Rock of Gibraltar with its macaques for older ones. Both are full days, and Gibraltar’s cable car is closed for refurbishment until at least 2027, so the Rock is reached by shuttle for now.',
          'Für eine Woche würden wir nicht alles abhaken wollen. Ein größerer Ausflug reicht: ein Tier-Rettungszoo etwa eine Stunde im Landesinneren für jüngere Kinder oder der Fels von Gibraltar mit seinen Makaken für ältere. Beides sind ganze Tage, und Gibraltars Seilbahn ist bis mindestens 2027 wegen Sanierung geschlossen, den Fels erreicht man vorerst per Shuttle.',
          'Para una semana no intentaríamos verlo todo. Con una excursión mayor basta: un zoo de rescate de animales a una hora hacia el interior para los más pequeños, o el Peñón de Gibraltar con sus macacos para los mayores. Ambos son días enteros, y el teleférico de Gibraltar está cerrado por reforma hasta al menos 2027, así que al Peñón se sube en lanzadera por ahora.',
          'Voor een week zouden we niet alles willen afvinken. Eén grotere uitstap is genoeg: een dierenopvangzoo op zo’n uur landinwaarts voor jongere kinderen, of de Rots van Gibraltar met haar makaken voor oudere. Beide zijn hele dagen, en Gibraltars kabelbaan is wegens renovatie dicht tot minstens 2027, dus de Rots bereik je voorlopig met een shuttle.',
          'För en vecka skulle vi inte försöka pricka av allt. En större utflykt räcker: en djurräddningszoo ungefär en timme inåt landet för yngre barn, eller Gibraltarklippan med sina makaker för äldre. Båda är heldagar, och Gibraltars linbana är stängd för renovering till minst 2027, så klippan nås med skyttel tills vidare.'
        ),
        l(
          'Older children can try a kite taster with a proper school from around age eight, a first riding lesson or a guided e-bike route — for those we point you to the right people rather than list names here, and we help you book. One tip that saves a wasted drive: the Bahía Park water park in Algeciras is closed until June 2027.',
          'Ältere Kinder können ab etwa acht Jahren einen Kite-Schnupperkurs bei einer richtigen Schule machen, eine erste Reitstunde oder eine geführte E-Bike-Tour — dafür verweisen wir euch auf die richtigen Leute, statt hier Namen zu listen, und helfen beim Buchen. Ein Tipp, der eine unnötige Fahrt spart: Der Wasserpark Bahía Park in Algeciras ist bis Juni 2027 geschlossen.',
          'Los niños mayores pueden probar el kitesurf con una escuela de verdad a partir de unos ocho años, una primera clase de equitación o una ruta guiada en bici eléctrica — para eso os remitimos a la gente adecuada en lugar de listar nombres aquí, y os ayudamos a reservar. Un consejo que ahorra un viaje en balde: el parque acuático Bahía Park de Algeciras está cerrado hasta junio de 2027.',
          'Oudere kinderen kunnen vanaf een jaar of acht een kite-proefles bij een echte school proberen, een eerste rijles of een begeleide e-biketocht — daarvoor verwijzen we je naar de juiste mensen in plaats van hier namen te noemen, en helpen we met boeken. Eén tip die een nutteloze rit scheelt: het waterpark Bahía Park in Algeciras is tot juni 2027 gesloten.',
          'Äldre barn kan prova på kitesurfing med en riktig skola från omkring åtta års ålder, en första ridlektion eller en guidad elcykeltur — för det hänvisar vi er till rätt personer i stället för att lista namn här, och hjälper till att boka. Ett tips som sparar en onödig körning: vattenparken Bahía Park i Algeciras är stängd till juni 2027.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('From La Marina', 'Von La Marina aus', 'Desde La Marina', 'Vanuit La Marina', 'Från La Marina'),
    title: l('A family flat, the car only for the outings', 'Eine Familienwohnung, das Auto nur für die Ausflüge', 'Un piso familiar, el coche solo para las excursiones', 'Een gezinsappartement, de auto alleen voor de uitstapjes', 'En familjelägenhet, bilen bara för utflykterna'),
    paragraphs: [
      l(
        'Family & Surf sits in La Marina with a supermarket opposite and the town, harbour and Playa Chica on foot, so most days need no car at all. Keep it in the garage for the beach, the boat trip and the old town, and take it out for Bolonia, the zoo or Gibraltar.',
        'Family & Surf liegt in La Marina, der Supermarkt gegenüber, Stadt, Hafen und Playa Chica zu Fuß, die meisten Tage brauchen also gar kein Auto. Lasst es in der Garage für Strand, Bootsfahrt und Altstadt und holt es für Bolonia, den Zoo oder Gibraltar heraus.',
        'Family & Surf está en La Marina, con un supermercado enfrente y el pueblo, el puerto y Playa Chica a pie, así que la mayoría de los días no hace falta coche. Dejadlo en el garaje para la playa, la salida en barco y el casco antiguo, y sacadlo para Bolonia, el zoo o Gibraltar.',
        'Family & Surf ligt in La Marina met een supermarkt aan de overkant en de stad, haven en Playa Chica te voet, dus de meeste dagen heb je geen auto nodig. Laat hem in de garage voor het strand, de boottocht en de oude stad, en haal hem eruit voor Bolonia, de zoo of Gibraltar.',
        'Family & Surf ligger i La Marina med en mataffär mittemot och stan, hamnen och Playa Chica till fots, så de flesta dagar behövs ingen bil alls. Låt den stå i garaget för stranden, båtturen och gamla stan, och ta ut den för Bolonia, zoot eller Gibraltar.'
      ),
      l(
        'Whatever the children are into — a boat, a beach, a first kite lesson — just ask us. We live with the same wind, and we are glad to point you to the day that will actually work.',
        'Worauf die Kinder auch Lust haben — ein Boot, ein Strand, eine erste Kitestunde — fragt uns einfach. Wir leben mit demselben Wind und zeigen euch gern den Tag, der wirklich funktioniert.',
        'Sea lo que sea lo que les guste a los niños — un barco, una playa, una primera clase de kite — preguntadnos sin más. Vivimos con el mismo viento y os indicamos con gusto el día que de verdad va a salir bien.',
        'Waar de kinderen ook van houden — een boot, een strand, een eerste kiteles — vraag het ons gerust. Wij leven met dezelfde wind en wijzen je graag de dag die echt gaat lukken.',
        'Vad barnen än gillar — en båt, en strand, en första kitelektion — fråga oss bara. Vi lever med samma vind och visar er gärna den dag som faktiskt fungerar.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_whale_watching', label: l('Whale watching', 'Whale Watching', 'Avistamiento de cetáceos', 'Walvissen spotten', 'Valskådning'), text: l('Family-suitable trips from the harbour, when the sea allows.', 'Familientaugliche Fahrten ab Hafen, wenn die See es zulässt.', 'Salidas aptas para familias desde el puerto, cuando el mar lo permite.', 'Gezinsvriendelijke tochten vanuit de haven, als de zee het toelaat.', 'Familjevänliga turer från hamnen, när havet tillåter.') },
      { token: 'tarifa_beaches_authority', label: l('Beaches & Coast', 'Strände & Küste', 'Playas y costa', 'Stranden & kust', 'Stränder & kust'), text: l('Playa Chica for swimming, Los Lances for space.', 'Playa Chica zum Baden, Los Lances für Platz.', 'Playa Chica para bañarse, Los Lances para el espacio.', 'Playa Chica om te zwemmen, Los Lances voor de ruimte.', 'Playa Chica för bad, Los Lances för utrymme.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Beach, wind, old town, nature, Bolonia, yoga.', 'Strand, Wind, Altstadt, Natur, Bolonia, Yoga.', 'Playa, viento, casco antiguo, naturaleza, Bolonia, yoga.', 'Strand, wind, oude stad, natuur, Bolonia, yoga.', 'Strand, vind, gamla stan, natur, Bolonia, yoga.') }
    ]
  },
  sources: {
    eyebrow: shared.sourceEyebrow,
    title: shared.sourceTitle,
    intro: shared.sourceIntro,
    checked: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026'),
    links: [
      { label: l('Tarifa Tourism · Beaches', 'Tarifa Tourismus · Strände', 'Turismo de Tarifa · Playas', 'Tarifa Toerisme · Stranden', 'Tarifa Turism · Stränder'), text: l('Official context for Los Lances as a family beach and the natural park.', 'Ortskontext zu Los Lances als Familienstrand und zum Naturpark.', 'Contexto oficial sobre Los Lances como playa familiar y el parque natural.', 'Officiële context over Los Lances als gezinsstrand en het natuurpark.', 'Officiell bakgrund om Los Lances som familjestrand och naturparken.'), href: 'https://turismodetarifa.com/en/beaches/' },
      { label: l('Spain.info · Playa Chica', 'Spain.info · Playa Chica', 'Spain.info · Playa Chica', 'Spain.info · Playa Chica', 'Spain.info · Playa Chica'), text: l('The calm central beach, its facilities and the children play area.', 'Der ruhige zentrale Strand, seine Ausstattung und der Kinderspielbereich.', 'La playa céntrica y tranquila, sus servicios y la zona infantil.', 'Het rustige centrale strand, de voorzieningen en de speelplek.', 'Den lugna centrala stranden, dess faciliteter och lekplatsen.'), href: 'https://www.spain.info/en/beach/playa-chica-tarifa/' }
    ]
  },
  closing: {
    eyebrow: shared.closingEyebrow,
    title: l('A family base ten minutes from the old town', 'Eine Familienbasis zehn Minuten von der Altstadt', 'Una base familiar a diez minutos del casco antiguo', 'Een gezinsbasis tien minuten van de oude stad', 'En familjebas tio minuter från gamla stan'),
    body: l('From Family & Surf the beach, the harbour and the old town are on foot, the supermarket is opposite, and the car waits in the garage for the bigger days out.', 'Von Family & Surf sind Strand, Hafen und Altstadt zu Fuß, der Supermarkt liegt gegenüber, und das Auto wartet in der Garage für die größeren Ausflüge.', 'Desde Family & Surf la playa, el puerto y el casco antiguo quedan a pie, el supermercado está enfrente y el coche espera en el garaje para los días de excursión.', 'Vanaf Family & Surf zijn het strand, de haven en de oude stad te voet, de supermarkt ligt aan de overkant en de auto wacht in de garage voor de grotere uitstapjes.', 'Från Family & Surf når man stranden, hamnen och gamla stan till fots, mataffären ligger mittemot och bilen väntar i garaget för de större utflykterna.'),
    hubLabel: shared.hubLabel,
    propertyLabel: shared.propertyLabel
  }
};

export const tarifaExperienceSpokeContent: Record<
  TarifaExperienceSpokeId,
  TarifaExperienceSpokeContent
> = {
  'food-evening-life': food,
  'old-town-history': oldTown,
  'bolonia-baelo-claudia': bolonia,
  yoga,
  'whale-watching': whaleWatching,
  family
};
