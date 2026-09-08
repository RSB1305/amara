import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { TarifaAuthorityChildId } from '../lib/tarifa/tarifaAuthoritySubnav';

export type LocalizedExperienceText = Record<AmaraLanguage, string>;

export type TarifaExperienceSpokeId = Extract<
  TarifaAuthorityChildId,
  'food-evening-life' | 'nature-wildlife' | 'old-town-history' | 'bolonia-baelo-claudia' | 'yoga'
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

const nature: TarifaExperienceSpokeContent = {
  id: 'nature-wildlife',
  token: 'tarifa_nature_wildlife',
  seo: buildSeo(
    '2026-08-13-tarifa-nature-wildlife-v1.0',
    l(
      'Nature in Tarifa: bird migration, whales and the Strait',
      'Natur in Tarifa: Vogelzug, Wale und die Meerenge',
      'Naturaleza en Tarifa: paso de aves, ballenas y el Estrecho',
      'Natuur in Tarifa: vogeltrek, walvissen en de Straat',
      'Natur i Tarifa: fågelflytt, valar och sundet'
    ),
    l(
      'In migration season the birds cross the Strait, in the water whales and dolphins, on land the natural park from the beach to the hills. From our apartment by car to the west.',
      'Zur Zugzeit ziehen die Vögel über die Meerenge, im Wasser Wale und Delfine, an Land der Naturpark vom Strand bis zu den Hügeln. Von unserer Wohnung mit dem Auto nach Westen.',
      'En época de paso las aves cruzan el Estrecho, en el agua ballenas y delfines, en tierra el parque natural desde la playa hasta las colinas. Desde nuestro apartamento en coche hacia el oeste.',
      'In de trektijd trekken de vogels over de Straat, in het water walvissen en dolfijnen, op het land het natuurpark van het strand tot de heuvels. Vanaf ons appartement met de auto naar het westen.',
      'Under flyttningstiden drar fåglarna över sundet, i vattnet valar och delfiner, på land naturparken från stranden till kullarna. Från vår lägenhet med bil västerut.'
    )
  ),
  navLabel: l('Nature & Wildlife', 'Natur & Tierwelt', 'Naturaleza y fauna', 'Natuur & dieren', 'Natur & djurliv'),
  breadcrumbLabel: l('Nature & Wildlife', 'Natur & Tierwelt', 'Naturaleza y fauna', 'Natuur & dieren', 'Natur & djurliv'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l('Birds over the Strait, whales beneath', 'Vögel über der Meerenge, Wale darunter', 'Aves sobre el Estrecho, ballenas debajo', 'Vogels boven de Straat, walvissen eronder', 'Fåglar över sundet, valar under'),
    standfirst: l(
      'Between Tarifa and Africa lie 14 kilometres of water. Above it the birds cross in migration season, below it whales and dolphins, and all around the Parque Natural del Estrecho protects beaches, cliffs and hills. From our apartment you set off west; the car is in the garage.',
      'Zwischen Tarifa und Afrika liegen 14 Kilometer Wasser. Darüber ziehen zur Zugzeit die Vögel, darunter Wale und Delfine, und drumherum schützt der Parque Natural del Estrecho Strände, Klippen und Hügel. Von unserer Wohnung fahrt ihr nach Westen los, das Auto steht in der Garage.',
      'Entre Tarifa y África hay 14 kilómetros de agua. Por encima cruzan las aves en época de paso, por debajo ballenas y delfines, y alrededor el Parque Natural del Estrecho protege playas, acantilados y colinas. Desde nuestro apartamento salís hacia el oeste; el coche está en el garaje.',
      'Tussen Tarifa en Afrika ligt 14 kilometer water. Daarboven trekken in de trektijd de vogels, daaronder walvissen en dolfijnen, en rondom beschermt het Parque Natural del Estrecho stranden, kliffen en heuvels. Vanaf ons appartement rijd je naar het westen; de auto staat in de garage.',
      'Mellan Tarifa och Afrika ligger 14 kilometer vatten. Ovanför drar fåglarna under flyttningstiden, under valar och delfiner, och runtom skyddar Parque Natural del Estrecho stränder, klippor och kullar. Från vår lägenhet kör ni västerut; bilen står i garaget.'
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
    { label: l('Protected setting', 'Geschützter Raum', 'Entorno protegido', 'Beschermde omgeving', 'Skyddad miljö'), value: l('Parque Natural del Estrecho', 'Parque Natural del Estrecho', 'Parque Natural del Estrecho', 'Parque Natural del Estrecho', 'Parque Natural del Estrecho') },
    { label: l('In migration season', 'Zur Zugzeit', 'En época de paso', 'In de trektijd', 'Under flyttningstiden'), value: l('Birds over the Strait, from Europe to Africa', 'Vögel über der Meerenge, von Europa nach Afrika', 'Aves sobre el Estrecho, de Europa a África', 'Vogels boven de Straat, van Europa naar Afrika', 'Fåglar över sundet, från Europa till Afrika') },
    { label: l('On the water', 'Auf dem Wasser', 'En el agua', 'Op het water', 'På vattnet'), value: l('Whales and dolphins, when the sea allows', 'Wale und Delfine, wenn die See es zulässt', 'Ballenas y delfines, cuando el mar lo permite', 'Walvissen en dolfijnen, als de zee het toelaat', 'Valar och delfiner, när havet tillåter') }
  ],
  sections: [
    {
      id: 'strait-park',
      eyebrow: l('01 · Strait landscape', '01 · Landschaft der Meerenge', '01 · Paisaje del Estrecho', '01 · Landschap van de Straat', '01 · Landskapet vid sundet'),
      title: l('The natural park holds land and sea together', 'Der Naturpark verbindet Land und Meer', 'El parque natural une tierra y mar', 'Het natuurpark verbindt land en zee', 'Naturparken håller samman land och hav'),
      paragraphs: [
        l(
          'The Parque Natural del Estrecho protects land and sea around Tarifa: the beaches, the cliffs, the hills behind them and the water between the continents.',
          'Der Parque Natural del Estrecho schützt rund um Tarifa Land und Meer: die Strände, die Klippen, die Hügel dahinter und das Wasser zwischen den Kontinenten.',
          'El Parque Natural del Estrecho protege tierra y mar alrededor de Tarifa: las playas, los acantilados, las colinas de detrás y el agua entre los continentes.',
          'Het Parque Natural del Estrecho beschermt land en zee rond Tarifa: de stranden, de kliffen, de heuvels erachter en het water tussen de continenten.',
          'Parque Natural del Estrecho skyddar land och hav runt Tarifa: stränderna, klipporna, kullarna bakom och vattnet mellan kontinenterna.'
        ),
        l(
          'You do not have to go far for it: Los Lances is itself a nature reserve, and from the hills above town you see the Moroccan coast on a clear day.',
          'Ihr müsst dafür nicht weit: Los Lances ist selbst Naturschutzgebiet, und von den Hügeln über der Stadt seht ihr bei klarer Sicht die marokkanische Küste.',
          'No hace falta ir lejos: Los Lances es en sí espacio protegido, y desde las colinas sobre la ciudad se ve la costa marroquí en un día claro.',
          'Je hoeft er niet ver voor: Los Lances is zelf natuurgebied, en vanaf de heuvels boven de stad zie je bij helder zicht de Marokkaanse kust.',
          'Ni behöver inte långt för det: Los Lances är själv naturreservat, och från kullarna ovanför stan ser ni den marockanska kusten en klar dag.'
        )
      ]
    },
    {
      id: 'walks-viewpoints',
      eyebrow: l('02 · On land', '02 · An Land', '02 · En tierra', '02 · Op het land', '02 · På land'),
      title: l('On foot over the hills', 'Zu Fuß über die Hügel', 'A pie por las colinas', 'Te voet over de heuvels', 'Till fots över kullarna'),
      paragraphs: [
        l(
          'The paths in the hinterland lead over hills with views of both seas; the tourist office has mapped them, the link is below.',
          'Die Wege im Hinterland führen über Hügel mit Blick auf beide Meere; das Tourismusbüro hat sie kartiert, der Link steht unten.',
          'Los senderos del interior recorren colinas con vistas a los dos mares; la oficina de turismo los tiene cartografiados, el enlace está abajo.',
          'De paden in het achterland lopen over heuvels met uitzicht op beide zeeën; het toeristenbureau heeft ze in kaart gebracht, de link staat onderaan.',
          'Stigarna i inlandet går över kullar med utsikt över båda haven; turistbyrån har kartlagt dem, länken finns nedan.'
        ),
        l(
          'In a Levante the hills are the better day than the beach: up there it blows just as hard, but the sand stays below.',
          'Bei Levante sind die Hügel der bessere Tag als der Strand: Oben weht es genauso, aber der Sand bleibt unten.',
          'Con levante, las colinas son mejor día que la playa: arriba sopla igual, pero la arena se queda abajo.',
          'Bij Levante zijn de heuvels de betere dag dan het strand: boven waait het net zo hard, maar het zand blijft beneden.',
          'Vid Levante är kullarna en bättre dag än stranden: uppe blåser det lika mycket, men sanden stannar nere.'
        )
      ]
    },
    {
      id: 'bird-migration',
      eyebrow: l('03 · Bird migration', '03 · Vogelzug', '03 · Migración de aves', '03 · Vogeltrek', '03 · Fågelflyttning'),
      title: l('In migration season the birds cross the Strait', 'Zur Zugzeit ziehen die Vögel über die Meerenge', 'En época de paso las aves cruzan el Estrecho', 'In de trektijd trekken de vogels over de Straat', 'Under flyttningstiden drar fåglarna över sundet'),
      paragraphs: [
        l(
          'The Strait is the shortest crossing between Europe and Africa, which is why the birds cross here: storks, raptors and flocks of smaller species, north in spring, south in autumn.',
          'Die Meerenge ist die kürzeste Strecke zwischen Europa und Afrika, deshalb ziehen die Vögel hier hinüber: Störche, Greifvögel und Schwärme kleinerer Arten, im Frühjahr nach Norden, im Herbst nach Süden.',
          'El Estrecho es el paso más corto entre Europa y África, por eso las aves cruzan aquí: cigüeñas, rapaces y bandadas de especies menores, hacia el norte en primavera, hacia el sur en otoño.',
          'De Straat is de kortste oversteek tussen Europa en Afrika, daarom trekken de vogels hier over: ooievaars, roofvogels en zwermen kleinere soorten, in het voorjaar naar het noorden, in de herfst naar het zuiden.',
          'Sundet är den kortaste vägen mellan Europa och Afrika, därför drar fåglarna över här: storkar, rovfåglar och flockar av mindre arter, norrut på våren, söderut på hösten.'
        ),
        l(
          'Which ones you see, the day decides: wind and weather determine whether they fly. The viewpoints are on the N-340 towards Algeciras.',
          'Welche ihr seht, entscheidet der Tag: Wind und Wetter bestimmen, ob sie fliegen. Die Aussichtspunkte liegen an der N-340 Richtung Algeciras.',
          'Cuáles veis lo decide el día: viento y tiempo determinan si vuelan. Los miradores están en la N-340 hacia Algeciras.',
          'Welke je ziet, bepaalt de dag: wind en weer beslissen of ze vliegen. De uitkijkpunten liggen aan de N-340 richting Algeciras.',
          'Vilka ni ser avgör dagen: vind och väder bestämmer om de flyger. Utsiktsplatserna ligger vid N-340 mot Algeciras.'
        )
      ]
    },
    {
      id: 'marine-wildlife',
      eyebrow: l('04 · On the water', '04 · Auf dem Wasser', '04 · En el mar', '04 · Op het water', '04 · På vattnet'),
      title: l('Whales and dolphins, when the sea allows', 'Wale und Delfine, wenn die See es zulässt', 'Ballenas y delfines, cuando el mar lo permite', 'Walvissen en dolfijnen, als de zee het toelaat', 'Valar och delfiner, när havet tillåter'),
      paragraphs: [
        l(
          'Boats leave the port for the Strait, where dolphins and pilot whales are at home; with luck you see sperm whales or, in high summer, orcas.',
          'Vom Hafen fahren Boote in die Meerenge, wo Delfine und Grindwale zu Hause sind; mit Glück seht ihr Pottwale oder, im Hochsommer, Orcas.',
          'Del puerto salen barcos al Estrecho, donde viven delfines y calderones; con suerte veis cachalotes o, en pleno verano, orcas.',
          'Vanuit de haven varen boten de Straat op, waar dolfijnen en grienden thuis zijn; met geluk zie je potvissen of, in de hoogzomer, orka’s.',
          'Från hamnen går båtar ut i sundet, där delfiner och grindvalar hör hemma; med tur ser ni kaskeloter eller, på högsommaren, späckhuggare.'
        ),
        l(
          'In strong wind the boats stay in port. Then Bolonia or the old town is the plan for the day.',
          'Bei starkem Wind bleiben die Boote im Hafen. Dann sind Bolonia oder die Altstadt der Plan für den Tag.',
          'Con viento fuerte los barcos se quedan en puerto. Entonces Bolonia o el casco antiguo son el plan del día.',
          'Bij harde wind blijven de boten in de haven. Dan zijn Bolonia of de oude stad het plan voor de dag.',
          'Vid stark vind stannar båtarna i hamnen. Då är Bolonia eller gamla stan planen för dagen.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('From La Marina', 'Von La Marina aus', 'Desde La Marina', 'Vanuit La Marina', 'Från La Marina'),
    title: l('Off in the morning, on the terrace in the evening', 'Morgens los, abends auf der Terrasse', 'Por la mañana en marcha, por la tarde en la terraza', '’s Ochtends weg, ’s avonds op het terras', 'Iväg på morgonen, på terrassen på kvällen'),
    paragraphs: [
      l(
        'From Family & Surf you set off west without having to pass through the old town; the car is in the underground garage.',
        'Von Family & Surf fahrt ihr Richtung Westen los, ohne durch die Altstadt zu müssen; das Auto steht in der Tiefgarage.',
        'Desde Family & Surf salís hacia el oeste sin tener que atravesar el casco antiguo; el coche está en el garaje subterráneo.',
        'Vanaf Family & Surf rijd je naar het westen zonder door de oude stad te moeten; de auto staat in de ondergrondse garage.',
        'Från Family & Surf kör ni västerut utan att behöva genom gamla stan; bilen står i garaget under huset.'
      ),
      l(
        'And if the boats do not sail, the day is not lost: Los Lances is five minutes on foot, the terrace faces the sea.',
        'Und wenn die Boote nicht fahren, ist der Tag nicht verloren: Los Lances liegt fünf Minuten zu Fuß, die Terrasse zeigt aufs Meer.',
        'Y si los barcos no salen, el día no está perdido: Los Lances está a cinco minutos a pie, la terraza mira al mar.',
        'En als de boten niet varen, is de dag niet verloren: Los Lances ligt vijf minuten te voet, het terras kijkt op zee.',
        'Och om båtarna inte går är dagen inte förlorad: Los Lances ligger fem minuter till fots, terrassen vetter mot havet.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_beaches_authority', label: l('Beaches & Coast', 'Strände & Küste', 'Playas y costa', 'Stranden & kust', 'Stränder & kust'), text: l('Playa Chica, Los Lances, Valdevaqueros.', 'Playa Chica, Los Lances, Valdevaqueros.', 'Playa Chica, Los Lances, Valdevaqueros.', 'Playa Chica, Los Lances, Valdevaqueros.', 'Playa Chica, Los Lances, Valdevaqueros.') },
      { token: 'tarifa_bolonia_baelo_claudia', label: l('Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia y Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia'), text: l('Beach, dune and the Roman town of Baelo Claudia.', 'Strand, Düne und die Römerstadt Baelo Claudia.', 'Playa, duna y la ciudad romana de Baelo Claudia.', 'Strand, duin en de Romeinse stad Baelo Claudia.', 'Strand, dyn och den romerska staden Baelo Claudia.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Beach, wind, old town, nature, Bolonia, yoga.', 'Strand, Wind, Altstadt, Natur, Bolonia, Yoga.', 'Playa, viento, casco antiguo, naturaleza, Bolonia, yoga.', 'Strand, wind, oude stad, natuur, Bolonia, yoga.', 'Strand, vind, gamla stan, natur, Bolonia, yoga.') }
    ]
  },
  sources: {
    eyebrow: shared.sourceEyebrow,
    title: shared.sourceTitle,
    intro: shared.sourceIntro,
    checked: shared.checked,
    links: [
      { label: l('Junta de Andalucía · Parque Natural del Estrecho', 'Junta de Andalucía · Parque Natural del Estrecho', 'Junta de Andalucía · Parque Natural del Estrecho', 'Junta de Andalucía · Parque Natural del Estrecho', 'Junta de Andalucía · Parque Natural del Estrecho'), text: l('Official protected-area status and environmental context.', 'Offizieller Schutzstatus und Umweltkontext.', 'Figura de protección y contexto ambiental oficiales.', 'Officiële beschermingsstatus en natuurcontext.', 'Officiell skyddsstatus och naturbakgrund.'), href: sourceHrefs.naturalPark },
      { label: l('Junta de Andalucía · Ecotourism resources', 'Junta de Andalucía · Naturtourismus', 'Junta de Andalucía · Recursos ecoturísticos', 'Junta de Andalucía · Ecotoerisme', 'Junta de Andalucía · Ekoturism'), text: l('Official context for bird observation and cetacean experiences in the park.', 'Offizieller Kontext zu Vogel- und Meerestierbeobachtung im Park.', 'Contexto oficial para la observación de aves y cetáceos en el parque.', 'Officiële context voor vogels en zeedieren in het park.', 'Officiell bakgrund om fågel- och valobservation i parken.'), href: sourceHrefs.naturalResources },
      { label: l('Natura 2000 · Estrecho environmental values', 'Natura 2000 · Umweltwerte Estrecho', 'Natura 2000 · Valores ambientales del Estrecho', 'Natura 2000 · Natuurwaarden Estrecho', 'Natura 2000 · Naturvärden i Estrecho'), text: l('Protected habitats, bird status and the Europe–Africa setting.', 'Geschützte Lebensräume, Vogelstatus und die Lage zwischen Europa und Afrika.', 'Hábitats protegidos, figura para aves y situación entre Europa y África.', 'Beschermde leefgebieden, vogelstatus en ligging tussen Europa en Afrika.', 'Skyddade livsmiljöer, fågelstatus och läget mellan Europa och Afrika.'), href: sourceHrefs.naturalValues }
    ]
  },
  closing: {
    eyebrow: shared.closingEyebrow,
    title: l('The wind decides, you have the choice', 'Der Wind entscheidet, ihr habt die Wahl', 'El viento decide, vosotros elegís', 'De wind beslist, jullie hebben de keuze', 'Vinden avgör, ni har valet'),
    body: l('Boats or hills, beach or old town: from Family & Surf everything is close, the car is in the garage, and the terrace faces the Atlantic.', 'Boote oder Hügel, Strand oder Altstadt: Von Family & Surf ist alles nah, das Auto steht in der Garage, und die Terrasse zeigt auf den Atlantik.', 'Barcos o colinas, playa o casco antiguo: desde Family & Surf todo está cerca, el coche está en el garaje y la terraza mira al Atlántico.', 'Boten of heuvels, strand of oude stad: vanaf Family & Surf is alles dichtbij, de auto staat in de garage, en het terras kijkt op de Atlantische Oceaan.', 'Båtar eller kullar, strand eller gamla stan: från Family & Surf är allt nära, bilen står i garaget, och terrassen vetter mot Atlanten.'),
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
      { token: 'tarifa_nature_wildlife', label: l('Nature & Wildlife', 'Natur & Tierwelt', 'Naturaleza y fauna', 'Natuur & dieren', 'Natur & djurliv'), text: l('Bird migration, whales and the natural park.', 'Vogelzug, Wale und der Naturpark.', 'Paso de aves, ballenas y el parque natural.', 'Vogeltrek, walvissen en het natuurpark.', 'Fågelflytt, valar och naturparken.') },
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
      { token: 'tarifa_nature_wildlife', label: l('Nature & Wildlife', 'Natur & Tierwelt', 'Naturaleza y fauna', 'Natuur & dieren', 'Natur & djurliv'), text: l('Bird migration, whales and the natural park.', 'Vogelzug, Wale und der Naturpark.', 'Paso de aves, ballenas y el parque natural.', 'Vogeltrek, walvissen en het natuurpark.', 'Fågelflytt, valar och naturparken.') },
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

export const tarifaExperienceSpokeContent: Record<
  TarifaExperienceSpokeId,
  TarifaExperienceSpokeContent
> = {
  'food-evening-life': food,
  'nature-wildlife': nature,
  'old-town-history': oldTown,
  'bolonia-baelo-claudia': bolonia,
  yoga
};
