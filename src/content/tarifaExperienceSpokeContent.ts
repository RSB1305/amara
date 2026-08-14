import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { TarifaAuthorityChildId } from '../lib/tarifa/tarifaAuthoritySubnav';

export type LocalizedExperienceText = Record<AmaraLanguage, string>;

export type TarifaExperienceSpokeId = Extract<
  TarifaAuthorityChildId,
  'food-evening-life' | 'nature-wildlife' | 'old-town-history' | 'bolonia-baelo-claudia'
>;

export interface TarifaExperienceSpokeSection {
  id: string;
  eyebrow: LocalizedExperienceText;
  title: LocalizedExperienceText;
  paragraphs: LocalizedExperienceText[];
}

export interface TarifaExperienceSpokeContent {
  id: TarifaExperienceSpokeId;
  token: string;
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
      token: string;
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
  authorSlug: 'amara-about-us'
};

const buildSeo = (
  version: string,
  titles: LocalizedExperienceText,
  descriptions: LocalizedExperienceText
): AmaraAuthoringSeo => ({
  version,
  pageType: 'B',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: { title: titles.en, description: descriptions.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: titles.de, description: descriptions.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: titles.es, description: descriptions.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: titles.nl, description: descriptions.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: titles.sv, description: descriptions.sv, robots: 'index, follow', canonical: 'auto' }
  }
});

const shared = {
  sourceEyebrow: l('Editorial transparency', 'Redaktionelle Transparenz', 'Transparencia editorial', 'Redactionele transparantie', 'Redaktionell transparens'),
  sourceTitle: l('Official context for this guide', 'Offizielle Grundlagen für diesen Guide', 'Fuentes oficiales de esta guía', 'Officiële basis voor deze gids', 'Officiella källor för guiden'),
  sourceIntro: l(
    'These sources support the stable destination context. Current access, conditions and local information always take priority.',
    'Diese Quellen stützen den langfristig verlässlichen Ortskontext. Aktuelle Zugänge, Bedingungen und Hinweise vor Ort haben immer Vorrang.',
    'Estas fuentes respaldan el contexto estable del destino. Los accesos, las condiciones y la información vigente sobre el terreno siempre tienen prioridad.',
    'Deze bronnen onderbouwen de vaste context van de bestemming. Actuele toegang, omstandigheden en informatie ter plaatse hebben altijd voorrang.',
    'Källorna stöder den långsiktiga platsinformationen. Aktuellt tillträde, dagens förhållanden och information på plats gäller alltid först.'
  ),
  checked: l('Sources checked in August 2026', 'Quellen geprüft im August 2026', 'Fuentes consultadas en agosto de 2026', 'Bronnen gecontroleerd in augustus 2026', 'Källor kontrollerade i augusti 2026'),
  relatedEyebrow: l('Keep exploring', 'Tarifa weiter entdecken', 'Seguir descubriendo', 'Verder ontdekken', 'Fortsätt upptäcka'),
  relatedTitle: l('Another side of the same stay', 'Eine weitere Seite desselben Aufenthalts', 'Otra cara de la misma estancia', 'Een andere kant van hetzelfde verblijf', 'En annan sida av samma vistelse'),
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
  boloniaDune: 'https://www.juntadeandalucia.es/medioambiente/portal/documents/20151/970015b9-a138-8d17-6b86-7b2cebad3964'
} as const;

const food: TarifaExperienceSpokeContent = {
  id: 'food-evening-life',
  token: 'tarifa_food_evening_life',
  seo: buildSeo(
    '2026-08-13-tarifa-food-evening-life-v1.0',
    l(
      'Tarifa Food & Evening Life | Tuna, Seafood & Old Town',
      'Essen & Ausgehen in Tarifa | Thunfisch & Altstadt',
      'Comer y salir en Tarifa | Atún rojo y casco antiguo',
      'Eten & uitgaan in Tarifa | Tonijn & oude stad',
      'Mat & kvällsliv i Tarifa | Tonfisk & Gamla stan'
    ),
    l(
      'Discover Tarifa food, Atlantic seafood, atún rojo and the Old Town evening rhythm, with practical perspective from AMARA in La Marina.',
      'Entdeckt Tarifas Küche, Atlantikfisch, atún rojo und den Abendrhythmus der Altstadt – mit AMARA-Perspektive aus La Marina.',
      'Descubre la gastronomía de Tarifa, el pescado atlántico, el atún rojo y las noches del casco antiguo desde AMARA, en La Marina.',
      'Ontdek de keuken van Tarifa, Atlantische vis, atún rojo en de avonden in de oude stad, vanuit AMARA in La Marina.',
      'Upptäck Tarifas mat, fisk från Atlanten, atún rojo och kvällarna i Gamla stan, med AMARA-perspektiv från La Marina.'
    )
  ),
  navLabel: l('Food & Evening Life', 'Essen & Ausgehen', 'Gastronomía y vida nocturna', 'Eten & uitgaan', 'Mat & kvällsliv'),
  breadcrumbLabel: l('Food & Evening Life', 'Essen & Ausgehen', 'Gastronomía y vida nocturna', 'Eten & uitgaan', 'Mat & kvällsliv'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l(
      'Tarifa from the table into the evening',
      'Tarifa: vom Tisch bis in den Abend',
      'Tarifa, de la mesa a la noche',
      'Tarifa, van tafel tot avond',
      'Tarifa, från bordet till kvällen'
    ),
    standfirst: l(
      'Atlantic seafood, atún rojo and the Almadraba tradition give eating here a strong coastal identity. The Old Town then carries lunch naturally into cafés, dinner and a livelier evening — without requiring a restaurant checklist.',
      'Atlantikfisch, atún rojo und die Almadraba-Tradition geben dem Essen eine klare Küstenidentität. In der Altstadt fließen Mittagessen, Cafés, Dinner und ein lebendigerer Abend ineinander – ganz ohne Restaurant-Checkliste.',
      'El pescado atlántico, el atún rojo y la tradición de la almadraba dan a la mesa una identidad muy ligada a la costa. En el casco antiguo, el almuerzo puede prolongarse entre cafés, cena y una noche más animada, sin necesidad de seguir una lista de locales.',
      'Atlantische vis, atún rojo en de almadraba-traditie geven de keuken een duidelijke kustidentiteit. In de oude stad lopen lunch, cafés, diner en een levendigere avond vanzelf in elkaar over, zonder lijst met adressen.',
      'Fisk från Atlanten, atún rojo och almadrabatraditionen ger maten en tydlig kustidentitet. I Gamla stan kan lunch övergå i kaféer, middag och en livligare kväll utan att dagen behöver bli en lista över restauranger.'
    ),
    note: l(
      'A host-written guide to the character of eating and evenings in Tarifa. Menus, provenance, opening and atmosphere vary by place, season and day.',
      'Ein Host-Guide zum Charakter von Essen und Abenden in Tarifa. Karten, Herkunft, Öffnung und Stimmung unterscheiden sich je nach Ort, Saison und Tag.',
      'Una guía del anfitrión sobre el carácter de la gastronomía y las noches de Tarifa. Cartas, procedencia, apertura y ambiente cambian según el local, la temporada y el día.',
      'Een gids van de host over eten en avonden in Tarifa. Menu, herkomst, opening en sfeer verschillen per zaak, seizoen en dag.',
      'En guide från värden om mat och kvällar i Tarifa. Menyer, ursprung, öppettider och stämning varierar mellan platser, säsonger och dagar.'
    ),
    updated: l('Destination context checked in August 2026', 'Ortskontext geprüft im August 2026', 'Contexto del destino revisado en agosto de 2026', 'Bestemmingsinformatie gecontroleerd in augustus 2026', 'Platsinformationen kontrollerad i augusti 2026')
  },
  facts: [
    { label: l('Coastal identity', 'Küstenidentität', 'Identidad costera', 'Kustidentiteit', 'Kustidentitet'), value: l('Atlantic fish · seafood · atún rojo', 'Atlantikfisch · Meeresfrüchte · atún rojo', 'Pescado atlántico · marisco · atún rojo', 'Atlantische vis · zeevruchten · atún rojo', 'Atlantisk fisk · skaldjur · atún rojo') },
    { label: l('Evening choice', 'Abendwahl', 'Tipo de noche', 'Avondkeuze', 'Kvällsval'), value: l('Long dinner or livelier Old Town', 'Langes Dinner oder lebendigere Altstadt', 'Cena tranquila o casco antiguo más animado', 'Lang diner of levendigere oude stad', 'Lång middag eller livligare Gamla stan') },
    { label: l('From AMARA', 'Von AMARA', 'Desde AMARA', 'Vanaf AMARA', 'Från AMARA'), value: l('Old Town · about 10–15 minutes on foot', 'Altstadt · etwa 10–15 Minuten zu Fuß', 'Casco antiguo · unos 10–15 minutos a pie', 'Oude stad · ongeveer 10–15 minuten lopen', 'Gamla stan · cirka 10–15 minuter till fots') }
  ],
  sections: [
    {
      id: 'coastal-table',
      eyebrow: l('01 · Coastal table', '01 · Küche der Küste', '01 · Mesa de costa', '01 · Tafel aan de kust', '01 · Kustens bord'),
      title: l('Food carries the Atlantic into town', 'Der Atlantik reicht bis auf den Teller', 'El Atlántico llega hasta la mesa', 'De Atlantische Oceaan loopt door tot op tafel', 'Atlanten följer med till bordet'),
      paragraphs: [
        l(
          'Tarifa is not only a beach town that happens to have restaurants. Its position on the Strait gives fish and seafood a real place in the local story, alongside Andalusian cooking and a modern, international food scene.',
          'Tarifa ist nicht einfach ein Strandort mit Restaurants. Durch die Lage an der Meerenge gehören Fisch und Meeresfrüchte zur Geschichte des Ortes – neben andalusischer Küche und einer modernen, internationalen Szene.',
          'Tarifa no es solo una localidad de playa con restaurantes. Su posición junto al Estrecho da al pescado y al marisco un lugar propio en la historia local, junto a la cocina andaluza y una oferta moderna e internacional.',
          'Tarifa is niet alleen een strandplaats met restaurants. Door de ligging aan de Straat horen vis en zeevruchten echt bij het plaatselijke verhaal, naast Andalusische gerechten en een moderne, internationale keuken.',
          'Tarifa är inte bara en strandstad med restauranger. Läget vid sundet ger fisk och skaldjur en naturlig plats i den lokala berättelsen, tillsammans med andalusisk mat och ett modernt, internationellt utbud.'
        ),
        l(
          'Atún rojo is particularly visible, but a menu name does not prove where or how a fish was caught. Ask when provenance matters to you and treat seasonal dishes as an opportunity, never a guarantee.',
          'Atún rojo ist besonders präsent. Ein Name auf der Karte belegt jedoch weder Herkunft noch Fangweise. Fragt nach, wenn euch das wichtig ist, und betrachtet saisonale Gerichte als Möglichkeit, nicht als Versprechen.',
          'El atún rojo tiene una presencia especial, pero el nombre de un plato no demuestra su procedencia ni el método de captura. Si os importa, preguntad; y tomad los productos de temporada como una posibilidad, nunca como una garantía.',
          'Atún rojo valt sterk op, maar een naam op het menu bewijst niet waar of hoe de vis is gevangen. Vraag ernaar als herkomst belangrijk is en zie seizoensgerechten als mogelijkheid, niet als belofte.',
          'Atún rojo syns ofta, men ett namn på menyn visar inte var eller hur fisken fångades. Fråga om ursprunget är viktigt och se säsongsrätter som en möjlighet, aldrig som ett löfte.'
        )
      ]
    },
    {
      id: 'almadraba',
      eyebrow: l('02 · Almadraba', '02 · Almadraba', '02 · Almadraba', '02 · Almadraba', '02 · Almadraba'),
      title: l('A fishing tradition, not a marketing shortcut', 'Fischereitradition statt Werbekürzel', 'Una tradición pesquera, no una etiqueta fácil', 'Een visserijtraditie, geen gemakkelijke slogan', 'En fisketradition, inte en snabb etikett'),
      paragraphs: [
        l(
          'Almadraba describes the long-established fixed-net system used along the Cádiz coast to intercept migrating tuna. Tarifa belongs to this coastal tradition, which helps explain the importance of red tuna in its food culture.',
          'Almadraba bezeichnet das seit Langem an der Küste von Cádiz eingesetzte feste Netzsystem für wandernde Thunfische. Tarifa gehört zu dieser Küstentradition – daher hat roter Thunfisch in der Esskultur einen besonderen Stellenwert.',
          'La almadraba es el sistema tradicional de redes fijas empleado en la costa gaditana para interceptar el paso migratorio del atún. Tarifa forma parte de esta cultura costera, que explica la importancia del atún rojo en su gastronomía.',
          'Almadraba is het traditionele vaste netwerk langs de kust van Cádiz waarmee migrerende tonijn wordt onderschept. Tarifa hoort bij die kusttraditie en dat verklaart de bijzondere plaats van rode tonijn in de eetcultuur.',
          'Almadraba är det traditionella fasta nätssystemet längs Cádizkusten som fångar upp vandrande tonfisk. Tarifa hör till denna kusttradition, vilket förklarar den röda tonfiskens plats i matkulturen.'
        ),
        l(
          'The useful connection is cultural: coast, migration, fishing and table. It is not permission to assume that every tuna dish is local Almadraba tuna.',
          'Die sinnvolle Verbindung ist kulturell: Küste, Wanderung, Fischerei und Tisch. Daraus folgt nicht, dass jedes Thunfischgericht aus der lokalen Almadraba stammt.',
          'La relación relevante es cultural: costa, migración, pesca y mesa. No permite suponer que cada plato de atún proceda de la almadraba local.',
          'De waardevolle verbinding is cultureel: kust, migratie, visserij en tafel. Dat betekent niet dat ieder tonijngerecht uit de plaatselijke almadraba komt.',
          'Det viktiga sambandet är kulturellt: kust, vandring, fiske och bord. Det innebär inte att varje tonfiskrätt kommer från den lokala almadraban.'
        )
      ]
    },
    {
      id: 'evening-rhythm',
      eyebrow: l('03 · Evening rhythm', '03 · Abendrhythmus', '03 · Ritmo nocturno', '03 · Avondritme', '03 · Kvällsrytm'),
      title: l('One Old Town, several kinds of evening', 'Eine Altstadt, verschiedene Abende', 'Un casco antiguo, distintas noches', 'Eén oude stad, verschillende avonden', 'En gammal stad, flera slags kvällar'),
      paragraphs: [
        l(
          'An evening can be a slow meal in a quieter street, drinks around a plaza or a later, livelier route through the centre. These experiences can sit close together without making every night feel the same.',
          'Ein Abend kann ein langes Essen in einer ruhigeren Gasse, ein Getränk am Platz oder später eine lebendigere Runde durch das Zentrum sein. Diese Möglichkeiten liegen nah beieinander, ohne dass jeder Abend gleich wirkt.',
          'La noche puede ser una cena pausada en una calle tranquila, unas copas junto a una plaza o un recorrido más tardío y animado por el centro. Todo queda cerca, pero no todas las noches tienen el mismo carácter.',
          'Een avond kan bestaan uit rustig eten in een stille straat, iets drinken aan een plein of later een levendigere route door het centrum. Alles ligt dicht bij elkaar, maar geen avond hoeft hetzelfde te voelen.',
          'En kväll kan vara en lång middag på en lugnare gata, något att dricka vid ett torg eller en senare och livligare runda genom centrum. Allt ligger nära, men kvällarna behöver inte kännas likadana.'
        ),
        l(
          'Season, weekday and weather influence the mood. Choose the atmosphere in front of you rather than relying on a fixed claim about Tarifa nightlife.',
          'Saison, Wochentag und Wetter prägen die Stimmung. Wählt den Abend, der sich vor Ort zeigt, statt euch auf feste Aussagen über Tarifas Nachtleben zu verlassen.',
          'La temporada, el día de la semana y el tiempo cambian el ambiente. Elegid la noche que encontréis, sin confiar en afirmaciones fijas sobre la vida nocturna de Tarifa.',
          'Seizoen, weekdag en weer bepalen de sfeer. Kies wat je op dat moment aantreft in plaats van uit te gaan van vaste uitspraken over het nachtleven.',
          'Säsong, veckodag och väder påverkar stämningen. Välj den kväll som faktiskt finns framför er i stället för att lita på fasta påståenden om Tarifas nattliv.'
        ),
        l(
          'If you want a starting point: the evening usually begins along Calle Batalla del Salado, where the first restaurants and bars are, and works its way into the Old Town from there. On a warm night the streets are busiest long after dark — and you may well end up next to a kitesurfing world champion at the bar.',
          'Wenn ihr einen Ausgangspunkt wollt: Der Abend beginnt meist entlang der Calle Batalla del Salado, wo die ersten Restaurants und Bars liegen, und wandert von dort in die Altstadt. In einer warmen Nacht sind die Gassen lange nach Einbruch der Dunkelheit am vollsten – und es kann gut sein, dass an der Bar neben euch ein Kitesurf-Weltmeister sitzt.',
          'Si queréis un punto de partida: la noche suele empezar en la Calle Batalla del Salado, donde están los primeros restaurantes y bares, y desde ahí se adentra en el casco antiguo. En una noche cálida las calles se llenan mucho después del anochecer, y es muy posible que en la barra tengáis al lado a un campeón del mundo de kitesurf.',
          'Willen jullie een startpunt: de avond begint meestal langs de Calle Batalla del Salado, waar de eerste restaurants en bars liggen, en trekt vandaar de oude stad in. Op een warme avond zijn de straten lang na zonsondergang het drukst — en het kan zomaar dat er aan de bar een wereldkampioen kitesurfen naast jullie zit.',
          'Vill ni ha en utgångspunkt: kvällen börjar oftast längs Calle Batalla del Salado, där de första restaurangerna och barerna ligger, och rör sig därifrån in i Gamla stan. En varm kväll är gatorna som fullast långt efter mörkrets inbrott — och det är fullt möjligt att ni får en världsmästare i kitesurfing bredvid er i baren.'
        )
      ]
    },
    {
      id: 'shape-the-day',
      eyebrow: l('04 · A day that flows', '04 · Ein Tag im Fluss', '04 · Un día que fluye', '04 · Een dag die doorloopt', '04 · En dag som flyter'),
      title: l('Let coast, town and dinner belong together', 'Küste, Stadt und Dinner zusammendenken', 'Unir costa, centro y cena', 'Laat kust, stad en diner bij elkaar horen', 'Låt kust, stad och middag höra ihop'),
      paragraphs: [
        l(
          'A good food-led day need not begin at a restaurant. Walk the coast, spend time in the Old Town, pause for a late lunch or return for dinner once the light changes.',
          'Ein Tag rund ums Essen muss nicht im Restaurant beginnen. Geht an der Küste entlang, verbringt Zeit in der Altstadt, legt ein spätes Mittagessen ein oder kehrt zum Dinner zurück, wenn sich das Licht verändert.',
          'Un día centrado en la gastronomía no tiene por qué empezar en un restaurante. Pasead por la costa, recorred el casco antiguo, parad para un almuerzo tardío o volved a cenar cuando cambie la luz.',
          'Een dag rond eten hoeft niet in een restaurant te beginnen. Wandel langs de kust, breng tijd door in de oude stad, neem een late lunch of kom terug voor het diner wanneer het licht verandert.',
          'En matdag behöver inte börja på en restaurang. Gå längs kusten, tillbringa tid i Gamla stan, stanna för en sen lunch eller återvänd till middag när ljuset förändras.'
        ),
        l(
          'Our own day usually starts with breakfast — Café SURLA or Powerhouse for an açaí bowl, or Helenas Kitchen, which is right next to our front door in La Marina. Then the wind decides the rest.',
          'Unser eigener Tag beginnt meist mit dem Frühstück – Café SURLA oder Powerhouse für eine Açaí-Bowl, oder das Helenas Kitchen, das direkt neben unserer Haustür in La Marina liegt. Den Rest entscheidet dann der Wind.',
          'Nuestro día suele empezar con el desayuno: Café SURLA o Powerhouse para un bol de açaí, o Helenas Kitchen, justo al lado de nuestra puerta en La Marina. El resto lo decide el viento.',
          'Onze eigen dag begint meestal met ontbijt — Café SURLA of Powerhouse voor een açaí-bowl, of Helenas Kitchen, direct naast onze voordeur in La Marina. De rest bepaalt de wind.',
          'Vår egen dag börjar oftast med frukost — Café SURLA eller Powerhouse för en açaí-bowl, eller Helenas Kitchen som ligger alldeles intill vår ytterdörr i La Marina. Resten avgör vinden.'
        ),
        l(
          'This keeps eating part of a real Tarifa day rather than turning the town into a directory of reservations.',
          'So bleibt Essen Teil eines echten Tarifa-Tages, statt die Stadt in ein Verzeichnis von Reservierungen zu verwandeln.',
          'Así, comer forma parte de un día real en Tarifa y la localidad no se convierte en un catálogo de reservas.',
          'Zo blijft eten onderdeel van een echte dag in Tarifa en wordt de stad geen catalogus van reserveringen.',
          'Då blir maten en del av en verklig dag i Tarifa i stället för att staden förvandlas till en katalog över bokningar.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('AMARA host perspective', 'AMARA Host-Perspektive', 'Perspectiva del anfitrión de AMARA', 'Perspectief van de AMARA-host', 'AMARA-värdens perspektiv'),
    title: l('Town evenings without planning the car', 'Altstadtabende ohne Autoplan', 'Noches en el centro sin organizar el coche', 'Avonden in de stad zonder de auto te plannen', 'Kvällar i stan utan bilplanering'),
    paragraphs: [
      l(
        'From Family & Surf in La Marina, the Old Town is approximately 10–15 minutes away on foot. That makes it easy to let dinner or a drink develop naturally and walk home afterwards.',
        'Von Family & Surf in La Marina erreicht ihr die Altstadt in ungefähr 10–15 Minuten zu Fuß. Dinner oder ein Getränk können sich so spontan ergeben; danach geht ihr zu Fuß nach Hause.',
        'Desde Family & Surf, en La Marina, el casco antiguo queda a unos 10–15 minutos andando. Así podéis dejar que una cena o una copa surjan sobre la marcha y regresar a pie.',
        'Vanaf Family & Surf in La Marina is de oude stad ongeveer 10–15 minuten lopen. Een diner of drankje kan daardoor vanzelf ontstaan en daarna lopen jullie terug.',
        'Från Family & Surf i La Marina tar promenaden till Gamla stan cirka 10–15 minuter. Middag eller något att dricka kan därför växa fram spontant och ni går hem efteråt.'
      ),
      l(
        'For us, that balance is more valuable than a long list of recommendations: choose the street and mood that suit the evening, and check current details directly when one particular place matters.',
        'Für uns ist diese Balance wertvoller als eine lange Empfehlungsliste: Wählt Straße und Stimmung passend zum Abend und prüft aktuelle Details direkt, wenn euch ein bestimmter Ort wichtig ist.',
        'Para nosotros, ese equilibrio vale más que una larga lista de recomendaciones: elegid la calle y el ambiente que os apetezcan y consultad directamente la información vigente si os interesa un lugar concreto.',
        'Voor ons is die balans waardevoller dan een lange lijst aanbevelingen: kies de straat en sfeer die bij de avond passen en controleer actuele details rechtstreeks als één bepaalde zaak belangrijk is.',
        'För oss är den balansen mer värdefull än en lång lista med tips: välj gata och stämning efter kvällen och kontrollera aktuella detaljer direkt om en särskild plats är viktig.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_old_town_history', label: l('Old Town & History', 'Altstadt & Geschichte', 'Casco antiguo e historia', 'Oude stad & geschiedenis', 'Gamla stan & historia'), text: l('Add walls, streets and Strait history to the same town day.', 'Verbindet Mauern, Gassen und Geschichte an der Meerenge mit demselben Stadttag.', 'Sumad murallas, calles e historia del Estrecho al mismo día en el centro.', 'Voeg muren, straten en geschiedenis van de Straat toe aan dezelfde stadsdag.', 'Lägg murar, gränder och sundets historia till samma dag i stan.') },
      { token: 'tarifa_beaches_authority', label: l('Beaches & Coast', 'Strände & Küste', 'Playas y costa', 'Stranden & kust', 'Stränder & kust'), text: l('Choose the coast that suits the hours before lunch or dinner.', 'Wählt die Küste, die zu den Stunden vor Lunch oder Dinner passt.', 'Elegid la costa que encaje antes del almuerzo o la cena.', 'Kies de kust die past bij de uren vóór lunch of diner.', 'Välj kusten som passar timmarna före lunch eller middag.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Return to all six ways of shaping a Tarifa stay.', 'Zurück zu allen sechs Möglichkeiten für euren Tarifa-Aufenthalt.', 'Volved a las seis formas de vivir una estancia en Tarifa.', 'Ga terug naar alle zes manieren om Tarifa te beleven.', 'Gå tillbaka till alla sex sätt att forma en vistelse i Tarifa.') }
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
    title: l('Make the evening part of the stay', 'Macht den Abend zum Teil des Aufenthalts', 'Haced que la noche forme parte de la estancia', 'Maak de avond onderdeel van het verblijf', 'Låt kvällen bli en del av vistelsen'),
    body: l('A town you can reach on foot leaves room for a meal, a walk and a change of plan.', 'Eine Stadt in Gehweite lässt Raum für Essen, einen Spaziergang und spontane Änderungen.', 'Un centro al que se llega andando deja espacio para comer, pasear y cambiar de plan.', 'Een stad op loopafstand laat ruimte voor eten, wandelen en een ander plan.', 'En stad på gångavstånd ger plats för mat, promenader och ändrade planer.'),
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
      'Tarifa Nature & Wildlife | Birds, Strait & Cetaceans',
      'Natur & Tierwelt in Tarifa | Vogelzug & Meerenge',
      'Naturaleza y fauna en Tarifa | Aves y cetáceos',
      'Natuur & dieren in Tarifa | Vogels en zeedieren',
      'Natur & djurliv i Tarifa | Fåglar och valar'
    ),
    l(
      'Explore the Strait landscape, bird migration and marine wildlife around Tarifa, with flexible day ideas from a town-based AMARA stay.',
      'Entdeckt die Landschaft der Meerenge, Vogelzug und Meerestiere rund um Tarifa – flexibel geplant von AMARA in La Marina.',
      'Descubre el paisaje del Estrecho, la migración de aves y la fauna marina de Tarifa desde una estancia urbana en AMARA.',
      'Ontdek het landschap van de Straat, vogeltrek en zeedieren rond Tarifa, vanuit AMARA in La Marina.',
      'Upptäck landskapet vid sundet, fågelflyttning och marint djurliv runt Tarifa från AMARA i La Marina.'
    )
  ),
  navLabel: l('Nature & Wildlife', 'Natur & Tierwelt', 'Naturaleza y fauna', 'Natuur & dieren', 'Natur & djurliv'),
  breadcrumbLabel: l('Nature & Wildlife', 'Natur & Tierwelt', 'Naturaleza y fauna', 'Natuur & dieren', 'Natur & djurliv'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l('A landscape alive with movement', 'Eine Landschaft voller Bewegung', 'Un paisaje marcado por el movimiento', 'Een landschap vol beweging', 'Ett landskap i ständig rörelse'),
    standfirst: l(
      'At the Strait, Europe and Africa face each other across a protected land-and-sea landscape. Walks, viewpoints, bird migration and cetacean excursions offer very different ways into nature — always shaped by season and conditions.',
      'An der Meerenge liegen sich Europa und Afrika in einer geschützten Land- und Meereslandschaft gegenüber. Wege, Aussichtspunkte, Vogelzug und Ausfahrten zu Meerestieren eröffnen ganz verschiedene Naturtage – immer geprägt von Saison und Bedingungen.',
      'En el Estrecho, Europa y África se miran a través de un paisaje terrestre y marino protegido. Paseos, miradores, migración de aves y salidas para observar cetáceos ofrecen días de naturaleza muy distintos, siempre sujetos a la temporada y las condiciones.',
      'Bij de Straat kijken Europa en Afrika over een beschermd land- en zeelandschap naar elkaar. Wandelingen, uitzichtpunten, vogeltrek en excursies voor zeedieren bieden heel verschillende natuurdagen, steeds bepaald door seizoen en omstandigheden.',
      'Vid sundet möts Europa och Afrika över ett skyddat landskap på land och i havet. Vandringar, utsiktsplatser, fågelflyttning och turer för att se valar och delfiner ger helt olika naturdagar, alltid beroende på säsong och förhållanden.'
    ),
    note: l(
      'A host-written introduction to nature experiences around Tarifa. Wildlife is never guaranteed; follow current park, access and operator guidance.',
      'Eine Host-Einführung in Naturerlebnisse rund um Tarifa. Tierbeobachtungen sind nie garantiert; aktuelle Park-, Zugangs- und Anbieterhinweise gelten zuerst.',
      'Una introducción del anfitrión a la naturaleza de Tarifa. Nunca se garantizan avistamientos; seguid la información vigente del parque, los accesos y los operadores.',
      'Een inleiding van de host tot natuur rond Tarifa. Dieren zien is nooit gegarandeerd; volg actuele informatie van park, toegang en aanbieders.',
      'En introduktion från värden till naturen runt Tarifa. Djur kan aldrig garanteras; följ aktuell information från parken, tillträden och arrangörer.'
    ),
    updated: l('Official nature context checked in August 2026', 'Offizieller Naturkontext geprüft im August 2026', 'Contexto natural oficial revisado en agosto de 2026', 'Officiële natuurinformatie gecontroleerd in augustus 2026', 'Officiell naturinformation kontrollerad i augusti 2026')
  },
  facts: [
    { label: l('Protected setting', 'Geschützter Raum', 'Entorno protegido', 'Beschermde omgeving', 'Skyddad miljö'), value: l('Parque Natural del Estrecho', 'Parque Natural del Estrecho', 'Parque Natural del Estrecho', 'Parque Natural del Estrecho', 'Parque Natural del Estrecho') },
    { label: l('Migration landscape', 'Zuglandschaft', 'Paisaje migratorio', 'Treklanschap', 'Flyttlandskap'), value: l('Bird corridor between Europe and Africa', 'Vogelkorridor zwischen Europa und Afrika', 'Corredor de aves entre Europa y África', 'Vogelroute tussen Europa en Afrika', 'Fågelkorridor mellan Europa och Afrika') },
    { label: l('Wildlife rule', 'Regel für Tierwelt', 'Regla de fauna', 'Regel voor dieren', 'Regel för djurliv'), value: l('Conditions and sightings vary', 'Bedingungen und Sichtungen variieren', 'Las condiciones y los avistamientos varían', 'Omstandigheden en waarnemingen wisselen', 'Förhållanden och observationer varierar') }
  ],
  sections: [
    {
      id: 'strait-park',
      eyebrow: l('01 · Strait landscape', '01 · Landschaft der Meerenge', '01 · Paisaje del Estrecho', '01 · Landschap van de Straat', '01 · Landskapet vid sundet'),
      title: l('The natural park holds land and sea together', 'Der Naturpark verbindet Land und Meer', 'El parque natural une tierra y mar', 'Het natuurpark verbindt land en zee', 'Naturparken håller samman land och hav'),
      paragraphs: [
        l(
          'Parque Natural del Estrecho protects a maritime-terrestrial area around Tarifa. Beaches, cliffs, hills, seabed and the narrow water between continents belong to one larger setting.',
          'Der Parque Natural del Estrecho schützt rund um Tarifa einen Raum an Land und im Meer. Strände, Klippen, Hügel, Meeresboden und das schmale Wasser zwischen den Kontinenten gehören zu einer größeren Landschaft.',
          'El Parque Natural del Estrecho protege un espacio marítimo-terrestre alrededor de Tarifa. Playas, acantilados, montes, fondos marinos y el paso estrecho entre continentes forman un mismo paisaje.',
          'Parque Natural del Estrecho beschermt rond Tarifa een gebied op land en in zee. Stranden, kliffen, heuvels, zeebodem en het smalle water tussen de continenten horen bij één groter landschap.',
          'Parque Natural del Estrecho skyddar ett område på land och i havet runt Tarifa. Stränder, klippor, kullar, havsbotten och det smala vattnet mellan kontinenterna hör till samma större landskap.'
        ),
        l(
          'That scale is what makes a nature day here distinct. You can remain close to town yet see the destination through geology, exposure, migration and the horizon towards Africa.',
          'Diese Dimension macht einen Naturtag hier besonders. Ihr könnt nah am Ort bleiben und Tarifa dennoch durch Geologie, Exposition, Zugbewegungen und den Horizont Richtung Afrika erleben.',
          'Esa escala distingue un día de naturaleza en Tarifa. Podéis quedaros cerca de la localidad y mirar el destino a través de la geología, la exposición, las migraciones y el horizonte africano.',
          'Die schaal maakt een natuurdag hier anders. Je kunt dicht bij de stad blijven en Tarifa toch beleven via geologie, blootstelling, trekbewegingen en de horizon richting Afrika.',
          'Den skalan gör naturdagen särskild. Ni kan stanna nära staden och ändå uppleva Tarifa genom geologi, utsatthet, flyttning och horisonten mot Afrika.'
        )
      ]
    },
    {
      id: 'walks-viewpoints',
      eyebrow: l('02 · On land', '02 · An Land', '02 · En tierra', '02 · Op het land', '02 · På land'),
      title: l('Walk for air, distance and a changing horizon', 'Gehen für Weite, Luft und wechselnde Horizonte', 'Caminar entre aire, distancia y horizontes cambiantes', 'Wandelen voor ruimte, lucht en een veranderende horizon', 'Gå för rymd, luft och en skiftande horisont'),
      paragraphs: [
        l(
          'A nature-led outing does not need to become a route-collecting exercise. A permitted path or viewpoint can be enough when the pleasure lies in wind, light, vegetation and the relationship between two continents.',
          'Ein Naturausflug muss keine Sammlung von Routen werden. Ein erlaubter Weg oder Aussichtspunkt reicht, wenn Wind, Licht, Vegetation und die Beziehung zwischen den Kontinenten den Tag tragen.',
          'Una salida de naturaleza no tiene que convertirse en una colección de rutas. Un sendero permitido o un mirador pueden bastar cuando el interés está en el viento, la luz, la vegetación y la relación entre dos continentes.',
          'Een natuuruitstap hoeft geen verzameling routes te worden. Een toegestaan pad of uitzichtpunt kan genoeg zijn wanneer wind, licht, begroeiing en de relatie tussen twee continenten de dag bepalen.',
          'En naturutflykt behöver inte bli en samling leder. En tillåten stig eller utsiktsplats kan räcka när vind, ljus, växtlighet och förhållandet mellan två kontinenter bär dagen.'
        ),
        l(
          'Choose distance, exposure and footwear for the actual conditions. Protected signs and closures are part of the landscape, not obstacles to work around.',
          'Wählt Strecke, Exposition und Schuhe passend zu den tatsächlichen Bedingungen. Schutzschilder und Sperrungen gehören zur Landschaft; sie sind nicht zu umgehen.',
          'Elegid distancia, exposición y calzado según las condiciones reales. La señalización y los cierres de protección forman parte del paisaje, no son obstáculos que deban esquivarse.',
          'Kies afstand, blootstelling en schoenen voor de werkelijke omstandigheden. Beschermingsborden en afsluitingen horen bij het landschap en zijn geen obstakels om te omzeilen.',
          'Välj avstånd, exponering och skor efter de verkliga förhållandena. Skyltar och avstängningar är en del av skyddet, inte hinder att ta sig runt.'
        )
      ]
    },
    {
      id: 'bird-migration',
      eyebrow: l('03 · Bird migration', '03 · Vogelzug', '03 · Migración de aves', '03 · Vogeltrek', '03 · Fågelflyttning'),
      title: l('The Strait is a corridor between continents', 'Die Meerenge ist ein Korridor zwischen Kontinenten', 'El Estrecho es un corredor entre continentes', 'De Straat is een route tussen continenten', 'Sundet är en korridor mellan kontinenter'),
      paragraphs: [
        l(
          'The protected Strait area is designated for its importance to birds, and seasonal migration brings movement across the narrow crossing between Europe and Africa.',
          'Das Schutzgebiet an der Meerenge ist auch wegen seiner Bedeutung für Vögel ausgewiesen. Der saisonale Zug bringt Bewegung über die schmale Passage zwischen Europa und Afrika.',
          'El espacio protegido del Estrecho está reconocido por su importancia para las aves, y las migraciones estacionales llevan movimiento al paso estrecho entre Europa y África.',
          'Het beschermde gebied rond de Straat is aangewezen vanwege het belang voor vogels. Seizoensgebonden trek brengt beweging over de smalle oversteek tussen Europa en Afrika.',
          'Det skyddade området vid sundet är utpekat för sin betydelse för fåglar, och den säsongsbundna flyttningen för rörelse över den smala passagen mellan Europa och Afrika.'
        ),
        l(
          'Migration is not a performance on demand. Timing, weather, wind and the species moving that day decide what is visible, so an observation day benefits from patience and current local advice.',
          'Vogelzug ist keine Vorstellung auf Abruf. Zeitpunkt, Wetter, Wind und die Arten des Tages bestimmen, was sichtbar ist. Geduld und aktuelle Hinweise vor Ort gehören deshalb dazu.',
          'La migración no es un espectáculo a demanda. El momento, el tiempo, el viento y las especies en paso determinan lo que se ve; la paciencia y la información local vigente son parte de la experiencia.',
          'Vogeltrek is geen voorstelling op bestelling. Tijdstip, weer, wind en de soorten van die dag bepalen wat zichtbaar is; geduld en actuele plaatselijke informatie horen erbij.',
          'Fågelflyttning är ingen föreställning på beställning. Tidpunkt, väder, vind och dagens arter avgör vad som syns, så tålamod och aktuell lokal information är viktiga.'
        )
      ]
    },
    {
      id: 'marine-wildlife',
      eyebrow: l('04 · On the water', '04 · Auf dem Wasser', '04 · En el mar', '04 · Op het water', '04 · På vattnet'),
      title: l('Cetacean excursions need flexibility', 'Ausfahrten zu Meerestieren brauchen Flexibilität', 'Las salidas de cetáceos requieren flexibilidad', 'Excursies voor zeedieren vragen flexibiliteit', 'Turer för valar och delfiner kräver flexibilitet'),
      paragraphs: [
        l(
          'Whale- and dolphin-watching excursions leave Tarifa for the Strait, where several cetacean species may be encountered. The possibility is genuine; any particular sighting is not promised.',
          'Von Tarifa starten Ausfahrten zur Wal- und Delfinbeobachtung in die Meerenge, in der verschiedene Arten vorkommen können. Die Möglichkeit ist real; eine bestimmte Sichtung ist niemals versprochen.',
          'Desde Tarifa salen excursiones de observación de ballenas y delfines por el Estrecho, donde pueden encontrarse varias especies de cetáceos. La posibilidad es real; ningún avistamiento concreto está prometido.',
          'Vanuit Tarifa vertrekken excursies voor walvissen en dolfijnen naar de Straat, waar verschillende soorten kunnen worden gezien. De mogelijkheid is reëel; een bepaalde waarneming is nooit beloofd.',
          'Från Tarifa går turer för att se valar och delfiner i sundet, där flera arter kan förekomma. Möjligheten är verklig, men en viss observation kan aldrig utlovas.'
        ),
        l(
          'Sea state, wind, responsible operating decisions and animal movement can alter or cancel a trip. Keep another nature or town plan available and use current operator information.',
          'Seegang, Wind, verantwortliche Entscheidungen der Anbieter und die Bewegung der Tiere können eine Fahrt verändern oder verhindern. Haltet einen Natur- oder Stadtplan an Land bereit und nutzt aktuelle Anbieterinformationen.',
          'El estado del mar, el viento, las decisiones responsables de los operadores y el movimiento de los animales pueden cambiar o cancelar una salida. Mantened una alternativa en tierra y consultad al operador.',
          'Zeegang, wind, verantwoorde beslissingen van aanbieders en de beweging van dieren kunnen een tocht wijzigen of annuleren. Houd een natuur- of stadsplan op land achter de hand en gebruik actuele informatie van de aanbieder.',
          'Sjö, vind, ansvarsfulla beslut från arrangören och djurens rörelser kan ändra eller ställa in en tur. Ha en natur- eller stadsplan på land redo och använd aktuell information från arrangören.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('AMARA host perspective', 'AMARA Host-Perspektive', 'Perspectiva del anfitrión de AMARA', 'Perspectief van de AMARA-host', 'AMARA-värdens perspektiv'),
    title: l('Nature access from a town-based stay', 'Natur erreichen und trotzdem im Ort wohnen', 'Naturaleza desde una estancia urbana', 'Natuur vanuit een verblijf in de stad', 'Naturen från ett boende i stan'),
    paragraphs: [
      l(
        'Family & Surf in La Marina keeps town life on foot while the reserved underground parking makes westbound nature days practical. You can choose the coast or landscape for the conditions and return to a private home afterwards.',
        'Bei Family & Surf in La Marina bleibt das Stadtleben zu Fuß erreichbar; der reservierte Tiefgaragenplatz macht Naturtage Richtung Westen praktisch. Ihr wählt Küste oder Landschaft passend zum Tag und kehrt danach in ein privates Zuhause zurück.',
        'Family & Surf, en La Marina, mantiene la vida urbana a pie y la plaza reservada en garaje facilita los días de naturaleza hacia poniente. Elegís costa o paisaje según las condiciones y después regresáis a una vivienda privada.',
        'Family & Surf in La Marina houdt het stadsleven op loopafstand, terwijl de gereserveerde garageplek natuurdagen naar het westen praktisch maakt. Kies kust of landschap voor de omstandigheden en keer daarna terug naar een eigen woning.',
        'Family & Surf i La Marina håller stadslivet inom gångavstånd, medan den reserverade garageplatsen gör naturdagar västerut praktiska. Välj kust eller landskap efter förhållandena och återvänd sedan till ett privat hem.'
      ),
      l(
        'That combination matters when wildlife changes the plan: a cancelled boat or quiet observation hour does not spoil the day because town, coast and another viewpoint remain available.',
        'Diese Kombination hilft, wenn Tiere den Plan verändern: Eine abgesagte Bootsfahrt oder eine ruhige Beobachtungsstunde verdirbt den Tag nicht, weil Ort, Küste und ein anderer Aussichtspunkt verfügbar bleiben.',
        'Esa combinación importa cuando la fauna cambia el plan: una salida cancelada o una hora tranquila de observación no arruinan el día porque siguen disponibles la localidad, la costa y otros miradores.',
        'Die combinatie helpt wanneer dieren het plan veranderen: een afgelaste boottocht of rustig observatie-uur verpest de dag niet, omdat stad, kust en een ander uitzichtpunt beschikbaar blijven.',
        'Kombinationen hjälper när djurlivet ändrar planen: en inställd båttur eller en stilla observationstimme förstör inte dagen eftersom staden, kusten och en annan utsiktsplats finns kvar.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_beaches_authority', label: l('Beaches & Coast', 'Strände & Küste', 'Playas y costa', 'Stranden & kust', 'Stränder & kust'), text: l('Choose a practical beach day within the same protected coast.', 'Wählt einen praktischen Strandtag an derselben geschützten Küste.', 'Elegid un día de playa dentro de la misma costa protegida.', 'Kies een praktische stranddag aan dezelfde beschermde kust.', 'Välj en praktisk stranddag längs samma skyddade kust.') },
      { token: 'tarifa_bolonia_baelo_claudia', label: l('Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia y Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia'), text: l('Combine protected dune landscape with a Roman city.', 'Verbindet geschützte Dünenlandschaft mit einer römischen Stadt.', 'Combinad un paisaje dunar protegido con una ciudad romana.', 'Combineer beschermd duinlandschap met een Romeinse stad.', 'Kombinera skyddat dynlandskap med en romersk stad.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Return to all six ways of shaping a Tarifa stay.', 'Zurück zu allen sechs Möglichkeiten für euren Tarifa-Aufenthalt.', 'Volved a las seis formas de vivir una estancia en Tarifa.', 'Ga terug naar alle zes manieren om Tarifa te beleven.', 'Gå tillbaka till alla sex sätt att forma en vistelse i Tarifa.') }
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
    title: l('Leave room for the landscape to decide', 'Lasst Raum für die Entscheidung der Landschaft', 'Dejad que el paisaje también decida', 'Laat het landschap meebeslissen', 'Låt landskapet vara med och bestämma'),
    body: l('A flexible stay makes wind, wildlife and changing conditions part of the experience rather than a failed schedule.', 'Ein flexibler Aufenthalt macht Wind, Tierwelt und wechselnde Bedingungen zum Erlebnis statt zum gescheiterten Zeitplan.', 'Una estancia flexible convierte el viento, la fauna y las condiciones cambiantes en parte de la experiencia, no en un programa fallido.', 'Een flexibel verblijf maakt wind, dieren en veranderende omstandigheden onderdeel van de ervaring in plaats van een mislukt schema.', 'En flexibel vistelse gör vind, djurliv och skiftande förhållanden till en del av upplevelsen i stället för ett misslyckat schema.'),
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
      'Tarifa Old Town & History | Castle, Walls & Streets',
      'Tarifas Altstadt & Geschichte | Burg, Mauern & Gassen',
      'Casco antiguo de Tarifa | Castillo, murallas e historia',
      'Oude stad van Tarifa | Kasteel, muren & geschiedenis',
      'Tarifas Gamla stan | Slott, murar & historia'
    ),
    l(
      'Walk Tarifa Old Town through Puerta de Jerez, the castle, walls and lived streets, with an AMARA host perspective from nearby La Marina.',
      'Erlebt Tarifas Altstadt mit Puerta de Jerez, Burg, Mauern und belebten Gassen – aus AMARA-Host-Perspektive vom nahen La Marina.',
      'Recorre el casco antiguo de Tarifa entre Puerta de Jerez, castillo, murallas y calles vivas, desde AMARA en La Marina.',
      'Wandel door de oude stad van Tarifa langs Puerta de Jerez, kasteel, muren en levendige straten, vanuit AMARA in La Marina.',
      'Gå genom Tarifas Gamla stan via Puerta de Jerez, borgen, murarna och levande gränder, från AMARA i La Marina.'
    )
  ),
  navLabel: l('Old Town & History', 'Altstadt & Geschichte', 'Casco antiguo e historia', 'Oude stad & geschiedenis', 'Gamla stan & historia'),
  breadcrumbLabel: l('Old Town & History', 'Altstadt & Geschichte', 'Casco antiguo e historia', 'Oude stad & geschiedenis', 'Gamla stan & historia'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l('A Strait town made for wandering', 'Eine Stadt an der Meerenge, die zum Streifen einlädt', 'Una ciudad del Estrecho para recorrer sin prisa', 'Een stad aan de Straat om doorheen te dwalen', 'En stad vid sundet att vandra genom'),
    standfirst: l(
      'Puerta de Jerez, the caliphal castle and the surviving walls reveal Tarifa’s defensive past. The streets between them keep that history connected to cafés, plazas, food and the easy shift from daytime into evening.',
      'Puerta de Jerez, die kalifale Burg und erhaltene Mauern zeigen Tarifas wehrhafte Vergangenheit. In den Gassen dazwischen verbindet sich diese Geschichte mit Cafés, Plätzen, Essen und dem fließenden Übergang vom Tag in den Abend.',
      'La Puerta de Jerez, el castillo califal y las murallas conservadas muestran el pasado defensivo de Tarifa. Las calles que los unen mantienen esa historia junto a cafés, plazas, comida y el paso natural del día a la noche.',
      'Puerta de Jerez, het kalifale kasteel en de bewaard gebleven muren tonen het verdedigende verleden van Tarifa. De straten ertussen verbinden die geschiedenis met cafés, pleinen, eten en de natuurlijke overgang van dag naar avond.',
      'Puerta de Jerez, den kalifala borgen och de bevarade murarna visar Tarifas försvarshistoria. Gränderna mellan dem knyter historien till kaféer, torg, mat och den naturliga övergången från dag till kväll.'
    ),
    note: l(
      'A host-written walk through stable historic context, not a monument inventory. Check current access information directly before planning an interior visit.',
      'Ein Host-Rundgang durch verlässlichen historischen Kontext, keine Denkmalliste. Prüft aktuelle Zugänge direkt, bevor ihr einen Innenbesuch plant.',
      'Un paseo del anfitrión por el contexto histórico estable, no un inventario monumental. Consultad el acceso vigente antes de planificar una visita interior.',
      'Een wandeling van de host door vaste historische context, geen monumentenlijst. Controleer actuele toegang voordat je een bezoek binnen plant.',
      'En värdskriven promenad genom stabil historisk bakgrund, inte en lista över monument. Kontrollera aktuellt tillträde innan ett besök inomhus planeras.'
    ),
    updated: l('Historic context checked in August 2026', 'Historischer Kontext geprüft im August 2026', 'Contexto histórico revisado en agosto de 2026', 'Historische informatie gecontroleerd in augustus 2026', 'Historisk information kontrollerad i augusti 2026')
  },
  facts: [
    { label: l('Historic entrance', 'Historischer Eingang', 'Entrada histórica', 'Historische toegang', 'Historisk ingång'), value: l('Puerta de Jerez', 'Puerta de Jerez', 'Puerta de Jerez', 'Puerta de Jerez', 'Puerta de Jerez') },
    { label: l('Defensive anchor', 'Wehrhafter Anker', 'Referencia defensiva', 'Verdedigend anker', 'Försvarsankare'), value: l('10th-century caliphal castle', 'Kalifale Burg des 10. Jahrhunderts', 'Castillo califal del siglo X', 'Kalifaal kasteel uit de 10e eeuw', 'Kalifal borg från 900-talet') },
    { label: l('From AMARA', 'Von AMARA', 'Desde AMARA', 'Vanaf AMARA', 'Från AMARA'), value: l('About 10–15 minutes on foot', 'Etwa 10–15 Minuten zu Fuß', 'Unos 10–15 minutos a pie', 'Ongeveer 10–15 minuten lopen', 'Cirka 10–15 minuter till fots') }
  ],
  sections: [
    {
      id: 'strait-town',
      eyebrow: l('01 · Strait town', '01 · Stadt an der Meerenge', '01 · Ciudad del Estrecho', '01 · Stad aan de Straat', '01 · Stad vid sundet'),
      title: l('Geography gave the town its defensive character', 'Die Geografie gab der Stadt ihren wehrhaften Charakter', 'La geografía dio a la ciudad su carácter defensivo', 'De geografie gaf de stad haar verdedigende karakter', 'Geografin gav staden dess försvarskaraktär'),
      paragraphs: [
        l(
          'Tarifa’s position at the narrow passage between the Mediterranean and Atlantic made control, defence and exchange central to its history. The historic centre still reads as a town shaped by that strategic coastline.',
          'Tarifas Lage an der schmalen Passage zwischen Mittelmeer und Atlantik machte Kontrolle, Verteidigung und Austausch zu zentralen Teilen der Geschichte. Die Altstadt ist bis heute als Ort dieser strategischen Küste lesbar.',
          'La posición de Tarifa en el paso estrecho entre Mediterráneo y Atlántico hizo del control, la defensa y el intercambio elementos centrales de su historia. El casco antiguo todavía refleja esa costa estratégica.',
          'De ligging van Tarifa aan de smalle doorgang tussen Middellandse Zee en Atlantische Oceaan maakte controle, verdediging en uitwisseling bepalend. De oude stad leest nog steeds als een plaats gevormd door die strategische kust.',
          'Tarifas läge vid den smala passagen mellan Medelhavet och Atlanten gjorde kontroll, försvar och utbyte centrala i historien. Gamla stan går fortfarande att läsa som en plats formad av den strategiska kusten.'
        ),
        l(
          'You do not need a chronology in hand to feel it. Gates, walls, changes in level and glimpses towards the water make the relationship visible as you walk.',
          'Dafür braucht ihr keine Chronologie in der Hand. Tore, Mauern, Höhenwechsel und Blicke zum Wasser machen den Zusammenhang beim Gehen sichtbar.',
          'No hace falta llevar una cronología en la mano. Puertas, murallas, desniveles y vistas hacia el agua muestran esa relación durante el paseo.',
          'Je hebt geen chronologie nodig om het te voelen. Poorten, muren, hoogteverschillen en doorkijkjes naar het water maken de relatie tijdens het lopen zichtbaar.',
          'Ni behöver ingen tidslinje i handen för att känna det. Portar, murar, nivåskillnader och glimtar mot vattnet gör sambandet synligt under promenaden.'
        )
      ]
    },
    {
      id: 'puerta-jerez',
      eyebrow: l('02 · Puerta de Jerez', '02 · Puerta de Jerez', '02 · Puerta de Jerez', '02 · Puerta de Jerez', '02 · Puerta de Jerez'),
      title: l('Enter through the surviving gate', 'Durch das erhaltene Stadttor hinein', 'Entrar por la puerta conservada', 'Ga naar binnen door de bewaard gebleven poort', 'Gå in genom den bevarade porten'),
      paragraphs: [
        l(
          'Puerta de Jerez belonged to the final walled enclosure and remains one of Tarifa’s clearest thresholds. Passing through it makes the change from modern streets to the close-grained historic centre immediate.',
          'Die Puerta de Jerez gehörte zum letzten Mauerring und ist bis heute einer der klarsten Übergänge Tarifas. Beim Durchgehen wechselt die moderne Stadt unmittelbar in die dichte historische Struktur.',
          'La Puerta de Jerez pertenecía al último recinto amurallado y sigue siendo uno de los umbrales más claros de Tarifa. Al cruzarla, las calles modernas dan paso inmediato al tejido compacto del casco antiguo.',
          'Puerta de Jerez hoorde bij de laatste ommuring en is nog altijd een van de duidelijkste overgangen van Tarifa. Na de poort verandert de moderne stad direct in het compacte historische centrum.',
          'Puerta de Jerez hörde till den yttersta muromgärdningen och är fortfarande en av Tarifas tydligaste trösklar. När ni går igenom byts moderna gator direkt mot den täta historiska stadskärnan.'
        ),
        l(
          'Use it as the beginning of a wandering route, not just a photograph: side streets, small squares and changes of direction are part of the experience.',
          'Nutzt sie als Beginn eines Streifzugs, nicht nur als Fotomotiv: Nebengassen, kleine Plätze und Richtungswechsel gehören zum Erlebnis.',
          'Tomadla como inicio de un recorrido, no solo como fotografía: calles laterales, plazas pequeñas y cambios de dirección forman parte de la experiencia.',
          'Gebruik de poort als begin van een dwaalroute, niet alleen als foto: zijstraten, kleine pleinen en richtingswisselingen horen bij de ervaring.',
          'Använd den som början på en vandring, inte bara som ett foto: sidogränder, små torg och oväntade svängar hör till upplevelsen.'
        )
      ]
    },
    {
      id: 'castle-walls',
      eyebrow: l('03 · Castle & walls', '03 · Burg & Mauern', '03 · Castillo y murallas', '03 · Kasteel & muren', '03 · Borg & murar'),
      title: l('The castle anchors a layered fortified town', 'Die Burg verankert eine vielschichtige Festungsstadt', 'El castillo articula una ciudad fortificada y compleja', 'Het kasteel verankert een gelaagde vestingstad', 'Borgen förankrar en stad med många försvarslager'),
      paragraphs: [
        l(
          'Castillo de Guzmán el Bueno is a caliphal fortress from the 10th century, later adapted through different periods. Together with the walled enclosures, it shows that Tarifa’s history is layered rather than a single episode.',
          'Das Castillo de Guzmán el Bueno ist eine kalifale Festung des 10. Jahrhunderts, die in späteren Zeiten weitergebaut wurde. Mit den Mauerringen zeigt sie eine vielschichtige Geschichte statt einer einzigen Epoche.',
          'El Castillo de Guzmán el Bueno es una fortaleza califal del siglo X transformada en épocas posteriores. Junto con los recintos amurallados muestra una historia superpuesta, no un único episodio.',
          'Castillo de Guzmán el Bueno is een kalifale vesting uit de 10e eeuw, later aangepast. Samen met de ommuring toont het een gelaagde geschiedenis en niet één los tijdperk.',
          'Castillo de Guzmán el Bueno är en kalifal fästning från 900-talet som senare har förändrats. Tillsammans med murarna visar den en historia i flera lager, inte en enda epok.'
        ),
        l(
          'Let the castle be an anchor rather than the whole day. Its position, nearby walls and relationship to the port make more sense when combined with the streets around it.',
          'Lasst die Burg einen Anker sein, nicht den ganzen Tag. Lage, Mauern und Beziehung zum Hafen werden zusammen mit den umliegenden Gassen viel anschaulicher.',
          'Dejad que el castillo sea una referencia, no todo el día. Su posición, las murallas cercanas y la relación con el puerto se aprecian mejor al recorrer también las calles de alrededor.',
          'Laat het kasteel een anker zijn en niet de hele dag. De ligging, nabijgelegen muren en relatie met de haven worden duidelijker in combinatie met de straten eromheen.',
          'Låt borgen vara ett ankare, inte hela dagen. Läget, murarna och sambandet med hamnen blir tydligare tillsammans med gränderna runt omkring.'
        )
      ]
    },
    {
      id: 'day-to-evening',
      eyebrow: l('04 · Lived Old Town', '04 · Gelebte Altstadt', '04 · Casco antiguo vivido', '04 · Levende oude stad', '04 · Levande Gamla stan'),
      title: l('Stay after the monuments become background', 'Bleibt, wenn die Denkmäler zum Hintergrund werden', 'Quedarse cuando los monumentos pasan al fondo', 'Blijf wanneer monumenten achtergrond worden', 'Stanna när monumenten blir bakgrund'),
      paragraphs: [
        l(
          'Tarifa’s historic centre rewards time because it is not only a heritage setting. Cafés, shops, meals and plazas keep the streets in daily use and carry the visit from afternoon towards dinner.',
          'Tarifas Altstadt lohnt Zeit, weil sie nicht nur Kulisse des Erbes ist. Cafés, Geschäfte, Essen und Plätze halten die Gassen im Alltag lebendig und tragen den Besuch vom Nachmittag bis zum Dinner.',
          'El casco antiguo de Tarifa merece tiempo porque no es solo un escenario patrimonial. Cafés, comercios, comidas y plazas mantienen las calles vivas y llevan la visita de la tarde hacia la cena.',
          'De oude stad van Tarifa verdient tijd omdat het niet alleen erfgoeddecor is. Cafés, winkels, maaltijden en pleinen houden de straten dagelijks levend en dragen het bezoek van middag naar diner.',
          'Tarifas historiska centrum förtjänar tid eftersom det inte bara är ett kulturarv. Kaféer, butiker, måltider och torg håller gränderna levande och för besöket från eftermiddag mot middag.'
        ),
        l(
          'A slow transition into evening gives the history context without turning the day into a museum inventory or duplicating a food guide.',
          'Der langsame Übergang in den Abend gibt der Geschichte Kontext, ohne den Tag in eine Museumsliste oder einen Restaurantführer zu verwandeln.',
          'El paso pausado hacia la noche da contexto a la historia sin convertir el día en un inventario de museo ni repetir una guía gastronómica.',
          'De rustige overgang naar de avond geeft de geschiedenis context zonder de dag te veranderen in een museumlijst of restaurantgids.',
          'Den lugna övergången mot kvällen ger historien sammanhang utan att dagen blir en museilista eller en matguide.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('AMARA host perspective', 'AMARA Host-Perspektive', 'Perspectiva del anfitrión de AMARA', 'Perspectief van de AMARA-host', 'AMARA-värdens perspektiv'),
    title: l('Close enough to return at a different hour', 'Nah genug, um zu einer anderen Stunde zurückzukehren', 'Lo bastante cerca para volver a otra hora', 'Dichtbij genoeg om op een ander moment terug te gaan', 'Nära nog för att återvända vid en annan tid'),
    paragraphs: [
      l(
        'From Family & Surf in La Marina, the Old Town is approximately 10–15 minutes away on foot. You can visit in daylight, walk home, and return for dinner without making the car part of the evening.',
        'Von Family & Surf in La Marina erreicht ihr die Altstadt in ungefähr 10–15 Minuten zu Fuß. Ihr könnt sie bei Tageslicht besuchen, nach Hause gehen und zum Dinner zurückkehren, ohne das Auto in den Abend einzubauen.',
        'Desde Family & Surf, en La Marina, el casco antiguo queda a unos 10–15 minutos andando. Podéis recorrerlo de día, volver a casa y regresar para cenar sin incorporar el coche a la noche.',
        'Vanaf Family & Surf in La Marina is de oude stad ongeveer 10–15 minuten lopen. Bezoek haar overdag, loop naar huis en keer terug voor het diner zonder de auto in de avond te betrekken.',
        'Från Family & Surf i La Marina tar promenaden till Gamla stan cirka 10–15 minuter. Besök den i dagsljus, gå hem och återvänd till middag utan att bilen blir en del av kvällen.'
      ),
      l(
        'That familiarity is one of our favourite ways to experience Tarifa: not one compressed visit, but the same streets in different light and moods.',
        'Diese Vertrautheit gehört für uns zu den schönsten Arten, Tarifa zu erleben: kein komprimierter Besuch, sondern dieselben Gassen in unterschiedlichem Licht und verschiedenen Stimmungen.',
        'Esa familiaridad es una de nuestras formas preferidas de vivir Tarifa: no una visita comprimida, sino las mismas calles con luces y ambientes distintos.',
        'Die vertrouwdheid is voor ons een van de fijnste manieren om Tarifa te beleven: geen samengeperst bezoek, maar dezelfde straten in ander licht en een andere sfeer.',
        'Den känslan av igenkänning är ett av våra favoritsätt att uppleva Tarifa: inte ett komprimerat besök, utan samma gränder i olika ljus och stämningar.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_food_evening_life', label: l('Food & Evening Life', 'Essen & Ausgehen', 'Gastronomía y vida nocturna', 'Eten & uitgaan', 'Mat & kvällsliv'), text: l('Carry the Old Town walk naturally into lunch or dinner.', 'Lasst den Altstadtrundgang natürlich in Lunch oder Dinner übergehen.', 'Prolongad el paseo por el casco antiguo con un almuerzo o una cena.', 'Laat de wandeling vanzelf overgaan in lunch of diner.', 'Låt promenaden fortsätta naturligt till lunch eller middag.') },
      { token: 'tarifa_nature_wildlife', label: l('Nature & Wildlife', 'Natur & Tierwelt', 'Naturaleza y fauna', 'Natuur & dieren', 'Natur & djurliv'), text: l('See the same Strait identity through landscape and migration.', 'Erlebt dieselbe Identität der Meerenge durch Landschaft und Zugbewegungen.', 'Mirad la misma identidad del Estrecho desde el paisaje y las migraciones.', 'Bekijk dezelfde identiteit van de Straat via landschap en trek.', 'Se samma identitet vid sundet genom landskap och flyttning.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Return to all six ways of shaping a Tarifa stay.', 'Zurück zu allen sechs Möglichkeiten für euren Tarifa-Aufenthalt.', 'Volved a las seis formas de vivir una estancia en Tarifa.', 'Ga terug naar alle zes manieren om Tarifa te beleven.', 'Gå tillbaka till alla sex sätt att forma en vistelse i Tarifa.') }
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
    title: l('Give the Old Town more than one hour', 'Gebt der Altstadt mehr als eine Stunde', 'Dad al casco antiguo más de una hora', 'Geef de oude stad meer dan één uur', 'Ge Gamla stan mer än en timme'),
    body: l('History becomes more rewarding when the streets can change from monument to everyday town and into evening.', 'Geschichte wird lohnender, wenn sich die Gassen vom Denkmal zum Alltag und weiter in den Abend verändern dürfen.', 'La historia gana cuando las calles pueden pasar del monumento a la vida cotidiana y después a la noche.', 'Geschiedenis wordt rijker wanneer de straten van monument naar dagelijks leven en daarna naar avond mogen veranderen.', 'Historien blir rikare när gränderna får gå från monument till vardag och vidare in i kvällen.'),
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
      'Bolonia & Baelo Claudia | Beach, Dune & Roman Ruins',
      'Bolonia & Baelo Claudia | Strand, Düne & Römerstadt',
      'Bolonia y Baelo Claudia | Playa, duna y ciudad romana',
      'Bolonia & Baelo Claudia | Strand, duin & Romeinse stad',
      'Bolonia & Baelo Claudia | Strand, dyn & romersk stad'
    ),
    l(
      'Plan a Bolonia day combining Atlantic beach, protected dune and the Roman city of Baelo Claudia, with practical context from AMARA Tarifa.',
      'Plant einen Bolonia-Tag mit Atlantikstrand, geschützter Düne und der Römerstadt Baelo Claudia – praktisch eingeordnet von AMARA Tarifa.',
      'Planifica un día en Bolonia con playa atlántica, duna protegida y la ciudad romana de Baelo Claudia, desde AMARA Tarifa.',
      'Plan een dag in Bolonia met Atlantisch strand, beschermd duin en de Romeinse stad Baelo Claudia, vanuit AMARA Tarifa.',
      'Planera en dag i Bolonia med Atlantstrand, skyddad dyn och den romerska staden Baelo Claudia, från AMARA Tarifa.'
    )
  ),
  navLabel: l('Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia y Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia'),
  breadcrumbLabel: l('Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia y Baelo Claudia', 'Bolonia & Baelo Claudia', 'Bolonia & Baelo Claudia'),
  hero: {
    eyebrow: l('Tarifa experience guide', 'Tarifa erleben', 'Experiencias en Tarifa', 'Tarifa beleven', 'Upplev Tarifa'),
    title: l('One coast, three layers of a remarkable day', 'Eine Küste, drei Ebenen eines besonderen Tages', 'Una costa y tres capas para un día especial', 'Eén kust, drie lagen van een bijzondere dag', 'En kust, tre lager i en särskild dag'),
    standfirst: l(
      'Bolonia brings together a broad Atlantic beach, a protected dune landscape and the Roman city of Baelo Claudia. Each is worth attention; together they create one of Tarifa’s strongest full-day experiences.',
      'Bolonia verbindet einen weiten Atlantikstrand, eine geschützte Dünenlandschaft und die Römerstadt Baelo Claudia. Jeder Teil lohnt Aufmerksamkeit; zusammen ergeben sie einen der stärksten Tagesausflüge rund um Tarifa.',
      'Bolonia reúne una amplia playa atlántica, un paisaje dunar protegido y la ciudad romana de Baelo Claudia. Cada elemento merece tiempo; juntos forman una de las jornadas más completas de Tarifa.',
      'Bolonia brengt een breed Atlantisch strand, een beschermd duinlandschap en de Romeinse stad Baelo Claudia samen. Elk deel verdient aandacht; samen vormen ze een van de sterkste dagervaringen rond Tarifa.',
      'Bolonia förenar en bred Atlantstrand, ett skyddat dynlandskap och den romerska staden Baelo Claudia. Varje del är värd tid; tillsammans blir de en av Tarifas starkaste heldagsupplevelser.'
    ),
    note: l(
      'A host-written guide to combining landscape and archaeology. Check current access, protection signs and site information before departure.',
      'Ein Host-Guide zur Verbindung von Landschaft und Archäologie. Prüft vor Abfahrt aktuelle Zugänge, Schutzschilder und Informationen der Anlage.',
      'Una guía del anfitrión para combinar paisaje y arqueología. Consultad antes de salir los accesos, la señalización ambiental y la información vigente del conjunto.',
      'Een gids van de host om landschap en archeologie te combineren. Controleer vóór vertrek actuele toegang, beschermingsborden en informatie van de vindplaats.',
      'En guide från värden för att kombinera landskap och arkeologi. Kontrollera aktuellt tillträde, skyltning och information från området före avfärd.'
    ),
    updated: l('Official site context checked in August 2026', 'Offizieller Ortskontext geprüft im August 2026', 'Contexto oficial revisado en agosto de 2026', 'Officiële plaatsinformatie gecontroleerd in augustus 2026', 'Officiell platsinformation kontrollerad i augusti 2026')
  },
  facts: [
    { label: l('The combination', 'Die Kombination', 'La combinación', 'De combinatie', 'Kombinationen'), value: l('Beach · protected dune · Roman city', 'Strand · geschützte Düne · Römerstadt', 'Playa · duna protegida · ciudad romana', 'Strand · beschermd duin · Romeinse stad', 'Strand · skyddad dyn · romersk stad') },
    { label: l('Roman economy', 'Römische Wirtschaft', 'Economía romana', 'Romeinse economie', 'Romersk ekonomi'), value: l('Fish salting · garum · Strait trade', 'Fischsalzung · Garum · Handel an der Meerenge', 'Salazones · garum · comercio del Estrecho', 'Viszouterij · garum · handel via de Straat', 'Fisksaltning · garum · handel vid sundet') },
    { label: l('From AMARA', 'Von AMARA', 'Desde AMARA', 'Vanaf AMARA', 'Från AMARA'), value: l('A practical westbound day by car', 'Ein praktischer Tag Richtung Westen mit Auto', 'Una jornada práctica hacia poniente en coche', 'Een praktische dag westwaarts met de auto', 'En praktisk dag västerut med bil') }
  ],
  sections: [
    {
      id: 'one-day',
      eyebrow: l('01 · A coherent day', '01 · Ein stimmiger Tag', '01 · Una jornada coherente', '01 · Eén samenhangende dag', '01 · En sammanhållen dag'),
      title: l('Do not reduce Bolonia to another beach', 'Bolonia ist nicht einfach ein weiterer Strand', 'Bolonia no es solo otra playa', 'Maak van Bolonia niet zomaar een strand', 'Bolonia är inte bara ännu en strand'),
      paragraphs: [
        l(
          'The strength of Bolonia lies in proximity: open coast, dune and archaeology occupy the same bay. You can move between landscape and history without turning the day into several disconnected stops.',
          'Bolonias Stärke liegt in der Nähe: offene Küste, Düne und Archäologie teilen sich dieselbe Bucht. Ihr wechselt zwischen Landschaft und Geschichte, ohne mehrere unverbundene Stopps daraus zu machen.',
          'La fuerza de Bolonia está en la proximidad: costa abierta, duna y arqueología comparten la misma ensenada. Podéis pasar del paisaje a la historia sin convertir el día en varias paradas inconexas.',
          'De kracht van Bolonia zit in de nabijheid: open kust, duin en archeologie delen dezelfde baai. Je wisselt tussen landschap en geschiedenis zonder van de dag losse stops te maken.',
          'Bolonias styrka ligger i närheten: öppen kust, dyn och arkeologi delar samma bukt. Ni kan gå mellan landskap och historia utan att dagen blir flera separata stopp.'
        ),
        l(
          'Allow enough time for each part. A rushed ruin visit followed by a hurried photograph of the dune misses the way the setting works as a whole.',
          'Gebt jedem Teil Zeit. Ein gehetzter Besuch der Ruinen und ein schnelles Dünenfoto verfehlen, wie stimmig der Ort als Ganzes wirkt.',
          'Dad tiempo a cada parte. Una visita apresurada a las ruinas seguida de una foto rápida de la duna pierde la coherencia del conjunto.',
          'Geef ieder deel tijd. Een gehaast bezoek aan de ruïnes en een snelle foto van het duin missen hoe goed de omgeving als geheel werkt.',
          'Ge varje del tid. Ett hastigt besök i ruinerna följt av ett snabbt foto av dynen missar hur platsen fungerar som helhet.'
        )
      ]
    },
    {
      id: 'beach-dune',
      eyebrow: l('02 · Beach & dune', '02 · Strand & Düne', '02 · Playa y duna', '02 · Strand & duin', '02 · Strand & dyn'),
      title: l('Atlantic space beside a protected monument', 'Atlantische Weite neben einem geschützten Naturdenkmal', 'Espacio atlántico junto a un monumento protegido', 'Atlantische ruimte naast een beschermd natuurmonument', 'Atlantisk rymd intill ett skyddat naturmonument'),
      paragraphs: [
        l(
          'Bolonia beach brings broad sand, open water and a mountain-backed bay. The dune adds a dramatic form to the landscape, but its protected status matters more than the perfect viewpoint.',
          'Der Strand von Bolonia verbindet weiten Sand, offenes Wasser und eine von Bergen gerahmte Bucht. Die Düne prägt das Bild; ihr Schutzstatus ist jedoch wichtiger als der perfekte Aussichtspunkt.',
          'La playa de Bolonia combina arena amplia, mar abierto y una ensenada respaldada por montes. La duna domina el paisaje, pero su protección importa más que conseguir el mirador perfecto.',
          'Het strand van Bolonia combineert breed zand, open water en een baai tegen de bergen. Het duin bepaalt het beeld, maar de beschermde status is belangrijker dan het perfecte uitzichtpunt.',
          'Bolonias strand förenar bred sand, öppet vatten och en bukt mot bergen. Dynen präglar landskapet, men skyddet är viktigare än den perfekta utsiktsplatsen.'
        ),
        l(
          'Use permitted access, follow signs and treat closures as conservation. Beach conditions still need the same daily judgement as elsewhere on the Atlantic coast.',
          'Nutzt erlaubte Zugänge, folgt den Schildern und respektiert Sperrungen als Schutzmaßnahme. Auch hier verlangen die Bedingungen dieselbe tägliche Einschätzung wie an der übrigen Atlantikküste.',
          'Utilizad los accesos permitidos, seguid la señalización y respetad los cierres como medidas de conservación. El estado de la playa exige la misma valoración diaria que en el resto de la costa atlántica.',
          'Gebruik toegestane toegang, volg borden en respecteer afsluitingen als natuurbescherming. Ook hier vragen de strandomstandigheden dezelfde dagelijkse beoordeling als elders aan de Atlantische kust.',
          'Använd tillåtna vägar, följ skyltar och respektera avstängningar som naturskydd. Strandförhållandena kräver samma dagliga bedömning som på resten av Atlantkusten.'
        )
      ]
    },
    {
      id: 'roman-city',
      eyebrow: l('03 · Baelo Claudia', '03 · Baelo Claudia', '03 · Baelo Claudia', '03 · Baelo Claudia', '03 · Baelo Claudia'),
      title: l('A Roman city with its structure still visible', 'Eine römische Stadt mit sichtbarer Struktur', 'Una ciudad romana cuya estructura aún se reconoce', 'Een Romeinse stad waarvan de structuur zichtbaar blijft', 'En romersk stad vars struktur fortfarande syns'),
      paragraphs: [
        l(
          'Baelo Claudia grew in a strategic Strait location tied to North African trade. Streets, forum, public buildings and industrial areas make the urban plan unusually legible in the landscape.',
          'Baelo Claudia wuchs an einer strategischen Lage der Meerenge und war mit dem Handel nach Nordafrika verbunden. Straßen, Forum, öffentliche Gebäude und Gewerbebereiche lassen den Stadtplan ungewöhnlich klar erkennen.',
          'Baelo Claudia creció en un lugar estratégico del Estrecho ligado al comercio con el norte de África. Calles, foro, edificios públicos y áreas industriales permiten leer con especial claridad la estructura urbana.',
          'Baelo Claudia groeide op een strategische plaats aan de Straat en was verbonden met handel met Noord-Afrika. Straten, forum, openbare gebouwen en industriegebieden maken de stadsstructuur bijzonder goed leesbaar.',
          'Baelo Claudia växte på en strategisk plats vid sundet med handel mot Nordafrika. Gator, forum, offentliga byggnader och industriområden gör stadsplanen ovanligt tydlig i landskapet.'
        ),
        l(
          'That visibility makes the visit accessible without overloading the day with dates. The city’s position facing the bay already explains much of its importance.',
          'Diese Lesbarkeit macht den Besuch auch ohne Datendichte zugänglich. Die Lage der Stadt an der Bucht erklärt bereits einen großen Teil ihrer Bedeutung.',
          'Esa claridad hace accesible la visita sin cargar el día de fechas. La posición de la ciudad frente a la ensenada explica ya buena parte de su importancia.',
          'Die zichtbaarheid maakt het bezoek toegankelijk zonder de dag met data te overladen. De ligging van de stad aan de baai verklaart al veel van haar betekenis.',
          'Tydligheten gör besöket tillgängligt utan att fylla dagen med årtal. Stadens läge mot bukten förklarar redan mycket av dess betydelse.'
        )
      ]
    },
    {
      id: 'salting-garum',
      eyebrow: l('04 · Coast & production', '04 · Küste & Produktion', '04 · Costa y producción', '04 · Kust & productie', '04 · Kust & produktion'),
      title: l('Fish salting and garum tied the economy to the sea', 'Fischsalzung und Garum banden die Wirtschaft ans Meer', 'Las salazones y el garum unieron la economía al mar', 'Viszouterij en garum verbonden de economie met zee', 'Fisksaltning och garum knöt ekonomin till havet'),
      paragraphs: [
        l(
          'Fish salting and sauces such as garum were central products at Baelo Claudia. The industrial remains show how the coast was not simply scenery but the basis of work and trade.',
          'Fischsalzung und Saucen wie Garum waren zentrale Produkte von Baelo Claudia. Die Gewerbereste zeigen, dass die Küste nicht nur Kulisse, sondern Grundlage von Arbeit und Handel war.',
          'Las salazones y salsas como el garum fueron productos centrales de Baelo Claudia. Los restos industriales muestran que la costa no era solo paisaje, sino base del trabajo y del comercio.',
          'Viszouterij en sauzen zoals garum waren belangrijke producten van Baelo Claudia. De industriële resten laten zien dat de kust geen decor was, maar basis van werk en handel.',
          'Fisksaltning och såser som garum var viktiga produkter i Baelo Claudia. De industriella lämningarna visar att kusten inte bara var en utsikt utan grunden för arbete och handel.'
        ),
        l(
          'This Roman production should not be presented as direct continuity with today’s Almadraba tradition. They belong to different historical contexts, even though both reveal the lasting importance of the sea.',
          'Diese römische Produktion ist keine direkte Fortsetzung der heutigen Almadraba-Tradition. Beide gehören in unterschiedliche historische Kontexte, auch wenn sie die bleibende Bedeutung des Meeres zeigen.',
          'Esta producción romana no debe presentarse como continuidad directa de la almadraba actual. Pertenecen a contextos históricos distintos, aunque ambas muestran la importancia persistente del mar.',
          'Deze Romeinse productie is geen directe voortzetting van de huidige almadraba-traditie. Ze horen bij verschillende historische contexten, ook al tonen beide het blijvende belang van de zee.',
          'Den romerska produktionen ska inte beskrivas som en direkt fortsättning på dagens almadrabatradition. De hör till olika historiska sammanhang även om båda visar havets bestående betydelse.'
        )
      ]
    },
    {
      id: 'practical-day',
      eyebrow: l('05 · Practical rhythm', '05 · Praktischer Rhythmus', '05 · Ritmo práctico', '05 · Praktisch ritme', '05 · Praktisk rytm'),
      title: l('Build one unhurried westbound day', 'Plant einen entspannten Tag Richtung Westen', 'Plantead una jornada tranquila hacia poniente', 'Maak er één rustige dag westwaarts van', 'Gör en lugn heldag västerut'),
      paragraphs: [
        l(
          'A car is useful for this outing, but the day should not become transport planning. Leave room for current access conditions, the archaeological visit, beach time and a slower return.',
          'Für diesen Ausflug ist ein Auto sinnvoll, doch der Tag soll keine Verkehrsplanung werden. Lasst Raum für aktuelle Zufahrten, den Besuch der Anlage, Strandzeit und eine ruhige Rückfahrt.',
          'El coche resulta útil para esta salida, pero la jornada no debe convertirse en logística. Dejad margen para los accesos vigentes, la visita arqueológica, la playa y un regreso sin prisa.',
          'Een auto is handig voor deze uitstap, maar de dag hoeft geen vervoersplan te worden. Laat ruimte voor actuele toegang, het archeologische bezoek, strandtijd en een rustige terugrit.',
          'Bil är praktiskt för utflykten, men dagen ska inte bli transportplanering. Lämna utrymme för aktuellt tillträde, det arkeologiska besöket, strandtid och en lugn återresa.'
        ),
        l(
          'Avoid relying on evergreen opening or access details. Check the official site before departure and let information on the ground decide the final order.',
          'Verlasst euch nicht auf dauerhafte Öffnungs- oder Zugangsdaten. Prüft vor Abfahrt die offizielle Seite und lasst aktuelle Hinweise vor Ort über die Reihenfolge entscheiden.',
          'No confiéis en horarios o accesos publicados como datos permanentes. Consultad la web oficial antes de salir y dejad que la información sobre el terreno marque el orden final.',
          'Vertrouw niet op opening of toegang als blijvend gegeven. Controleer de officiële site vóór vertrek en laat informatie ter plaatse de uiteindelijke volgorde bepalen.',
          'Lita inte på öppettider eller tillträde som tidlösa uppgifter. Kontrollera den officiella sidan före avfärd och låt information på plats bestämma ordningen.'
        )
      ]
    }
  ],
  host: {
    eyebrow: l('AMARA host perspective', 'AMARA Host-Perspektive', 'Perspectiva del anfitrión de AMARA', 'Perspectief van de AMARA-host', 'AMARA-värdens perspektiv'),
    title: l('A natural car day from La Marina', 'Ein natürlicher Autotag von La Marina', 'Un día de coche natural desde La Marina', 'Een logische autodag vanuit La Marina', 'En naturlig bildag från La Marina'),
    paragraphs: [
      l(
        'Family & Surf has reserved underground parking and practical westbound access. Bolonia is exactly the kind of day when having the car available adds freedom without making it necessary for everyday town life.',
        'Family & Surf hat einen reservierten Tiefgaragenplatz und eine praktische Ausfahrt Richtung Westen. Bolonia ist genau der Tag, an dem ein verfügbares Auto Freiheit bringt, ohne für den normalen Alltag im Ort nötig zu sein.',
        'Family & Surf cuenta con plaza reservada en garaje subterráneo y una salida práctica hacia poniente. Bolonia es el tipo de jornada en la que disponer del coche aporta libertad sin hacerlo necesario para la vida diaria en Tarifa.',
        'Family & Surf heeft een gereserveerde ondergrondse parkeerplaats en een praktische route westwaarts. Bolonia is precies zo’n dag waarop de auto vrijheid geeft zonder nodig te zijn voor het gewone stadsleven.',
        'Family & Surf har reserverad garageplats och en praktisk väg västerut. Bolonia är precis den typ av dag då bilen ger frihet utan att vara nödvändig i vardagen i stan.'
      ),
      l(
        'Our preference is to give Bolonia the day rather than squeeze it between other stops. Returning to a comfortable private home then becomes part of the contrast.',
        'Wir geben Bolonia lieber den ganzen Tag, statt den Ort zwischen andere Stopps zu pressen. Die Rückkehr in ein komfortables privates Zuhause wird dann Teil des Kontrasts.',
        'Preferimos dedicar el día a Bolonia en lugar de encajarlo entre otras paradas. Volver después a una vivienda privada y cómoda forma parte del contraste.',
        'Wij geven Bolonia liever de dag dan het tussen andere stops te proppen. Daarna wordt terugkeren naar een comfortabel eigen huis onderdeel van het contrast.',
        'Vi ger hellre Bolonia hela dagen än pressar in platsen mellan andra stopp. Återkomsten till ett bekvämt privat hem blir då en del av kontrasten.'
      )
    ]
  },
  related: {
    eyebrow: shared.relatedEyebrow,
    title: shared.relatedTitle,
    links: [
      { token: 'tarifa_beaches_authority', label: l('Beaches & Coast', 'Strände & Küste', 'Playas y costa', 'Stranden & kust', 'Stränder & kust'), text: l('Compare Bolonia with other Tarifa beach days.', 'Vergleicht Bolonia mit anderen Strandtagen rund um Tarifa.', 'Comparad Bolonia con otros días de playa en Tarifa.', 'Vergelijk Bolonia met andere stranddagen rond Tarifa.', 'Jämför Bolonia med andra stranddagar runt Tarifa.') },
      { token: 'tarifa_nature_wildlife', label: l('Nature & Wildlife', 'Natur & Tierwelt', 'Naturaleza y fauna', 'Natuur & dieren', 'Natur & djurliv'), text: l('Continue through the protected Strait landscape.', 'Setzt den Tag in der geschützten Landschaft der Meerenge fort.', 'Seguid por el paisaje protegido del Estrecho.', 'Ga verder door het beschermde landschap van de Straat.', 'Fortsätt genom det skyddade landskapet vid sundet.') },
      { token: 'tarifa_experience_hub', label: l('Tarifa Experiences', 'Tarifa-Erlebnisse', 'Experiencias en Tarifa', 'Ervaringen in Tarifa', 'Upplevelser i Tarifa'), text: l('Return to all six ways of shaping a Tarifa stay.', 'Zurück zu allen sechs Möglichkeiten für euren Tarifa-Aufenthalt.', 'Volved a las seis formas de vivir una estancia en Tarifa.', 'Ga terug naar alle zes manieren om Tarifa te beleven.', 'Gå tillbaka till alla sex sätt att forma en vistelse i Tarifa.') }
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
    title: l('Give Bolonia the space of a complete day', 'Gebt Bolonia den Raum eines ganzen Tages', 'Dad a Bolonia el espacio de un día completo', 'Geef Bolonia de ruimte van een volledige dag', 'Ge Bolonia utrymmet av en hel dag'),
    body: l('Beach, dune and Roman city become more memorable when none has to compete with a crowded itinerary.', 'Strand, Düne und Römerstadt bleiben stärker in Erinnerung, wenn sie nicht mit einem vollen Zeitplan konkurrieren.', 'Playa, duna y ciudad romana dejan más huella cuando no compiten con un programa saturado.', 'Strand, duin en Romeinse stad blijven beter bij wanneer ze niet concurreren met een vol programma.', 'Strand, dyn och romersk stad blir mer minnesvärda när de inte konkurrerar med ett fullt schema.'),
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
  'bolonia-baelo-claudia': bolonia
};
