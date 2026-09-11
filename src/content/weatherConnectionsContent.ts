import type { LinkToken } from '../lib/linkResolver';
import type { AmaraLanguage } from '../types/seo';
import type { LocationGuideIconName } from '../components/location/locationGuideIconContract';

export type WeatherConnectionDestination = 'frigiliana' | 'nerja' | 'tarifa';

/**
 * A cross-topic "what the weather means for X" hand-off, shown only in the
 * markets that need it. Deliberately asymmetric: a Spaniard needs no siesta
 * explainer, and hiking interest is a German-market thing — so each item names
 * its own `languages`. Leaf-localized on purpose (text per field, one list
 * rather than five whole trees), which keeps it out of the locale-parity
 * contract that assumes symmetric translations.
 */
interface WeatherConnection {
  id: string;
  /** Markets that show this connection. Every other locale renders nothing. */
  languages: AmaraLanguage[];
  icon: LocationGuideIconName;
  eyebrow: Partial<Record<AmaraLanguage, string>>;
  title: Partial<Record<AmaraLanguage, string>>;
  body: Partial<Record<AmaraLanguage, string>>;
  linkLabel: Partial<Record<AmaraLanguage, string>>;
  linkToken: LinkToken;
}

export const weatherConnections: Partial<Record<WeatherConnectionDestination, WeatherConnection[]>> = {
  frigiliana: [
    {
      id: 'siesta-shops',
      // Spanish readers already live the siesta; the other markets are the ones
      // caught out by shops closing at midday.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'opening-hours',
      eyebrow: {
        de: 'Hitze & Alltag',
        en: 'Heat & everyday life',
        nl: 'Hitte & dagelijks leven',
        sv: 'Värme & vardag'
      },
      title: {
        de: 'Warum mittags die Läden schließen',
        en: 'Why the shops close at midday',
        nl: 'Waarom de winkels ’s middags sluiten',
        sv: 'Därför stänger butikerna mitt på dagen'
      },
      body: {
        de: 'Wenn die Sonne am höchsten steht, macht halb Frigiliana zu: Viele Läden und kleine Supermärkte schließen über Mittag für ein paar Stunden und öffnen am kühleren Nachmittag wieder. Das ist keine Bummelei, sondern gelebtes Hitzemanagement — **plant euren Einkauf für den Vormittag oder den frühen Abend.**',
        en: 'When the sun is at its highest, half of Frigiliana shuts: many shops and small supermarkets close over midday for a few hours and reopen in the cooler afternoon. It isn’t idleness but lived heat management — **plan your shopping for the morning or the early evening.**',
        nl: 'Als de zon op zijn hoogst staat, gaat half Frigiliana dicht: veel winkels en kleine supermarkten sluiten rond het middaguur een paar uur en openen in de koelere namiddag weer. Geen luiheid, maar geleefd hittebeheer — **doe je boodschappen ’s ochtends of in de vroege avond.**',
        sv: 'När solen står som högst stänger halva Frigiliana: många butiker och små stormarknader stänger några timmar mitt på dagen och öppnar igen på den svalare eftermiddagen. Ingen lättja, utan levd värmehantering — **handla på morgonen eller tidiga kvällen.**'
      },
      linkLabel: {
        de: 'Einkaufen & Öffnungszeiten',
        en: 'Shopping & opening hours',
        nl: 'Boodschappen & openingstijden',
        sv: 'Handel & öppettider'
      },
      linkToken: 'frigiliana_daily_life'
    },
    {
      id: 'hiking-heat',
      // Hiking interest is a German-market thing here; other markets don't come
      // to Frigiliana to walk the sierra.
      languages: ['de'],
      icon: 'walkable',
      eyebrow: { de: 'Hitze & Wandern' },
      title: { de: 'Wann ihr im Sommer wandern solltet' },
      body: {
        de: 'Im Hochsommer ist Wandern rund um Frigiliana nur **früh am Morgen** ein Vergnügen — danach steht die Sonne unbarmherzig über den schattenlosen Hängen. Werft vorher einen Blick auf die aktuelle Vorhersage auf dieser Seite. Am schönsten ist es ohnehin im **Frühjahr und Herbst**, wenn die Wege angenehm kühl bleiben.'
      },
      linkLabel: { de: 'Wandern rund um Frigiliana' },
      linkToken: 'frigiliana_hiking_authority'
    },
    {
      id: 'sea-swimming',
      // The Alborán sea runs colder than the Balearics; a real planning fact for
      // anyone counting on beach days, and unfamiliar to northern-market guests.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'coast',
      eyebrow: {
        de: 'Meer & Strand',
        en: 'Sea & beach',
        nl: 'Zee & strand',
        sv: 'Hav & strand'
      },
      title: {
        de: 'Wann das Meer warm genug zum Baden ist',
        en: 'When the sea is warm enough to swim',
        nl: 'Wanneer de zee warm genoeg is om te zwemmen',
        sv: 'När havet är varmt nog att bada i'
      },
      body: {
        de: 'Das Mittelmeer vor Andalusien, das Alborán-Meer, ist durch Atlantikströmungen kühler als etwa vor Mallorca. Angenehm zum Baden wird es meist **erst ab Mitte bis Ende Juni** und bleibt dann bis in den späten Oktober warm. Im Frühjahr fühlt sich die Luft oft schon sommerlich an, während das Wasser noch frisch ist.',
        en: 'The Mediterranean off Andalusia — the Alborán Sea — is cooler than, say, Mallorca, because Atlantic currents feed it. It usually turns pleasant for swimming **only from mid to late June** and then stays warm into late October. In spring the air can already feel like summer while the water is still fresh.',
        nl: 'De Middellandse Zee voor Andalusië — de Alboránzee — is koeler dan bijvoorbeeld bij Mallorca, doordat Atlantische stromingen haar voeden. Aangenaam om te zwemmen wordt het meestal **pas van half tot eind juni** en dan blijft het warm tot laat in oktober. In het voorjaar voelt de lucht vaak al zomers terwijl het water nog fris is.',
        sv: 'Medelhavet utanför Andalusien — Alboránsjön — är svalare än till exempel vid Mallorca, eftersom atlantiska strömmar matar det. Det blir behagligt att bada i oftast **först från mitten till slutet av juni** och håller sig sedan varmt in i sena oktober. På våren känns luften ofta redan sommarlik medan vattnet ännu är friskt.'
      },
      linkLabel: {
        de: 'Strände rund um Frigiliana',
        en: 'Beaches around Frigiliana',
        nl: 'Stranden rond Frigiliana',
        sv: 'Stränder runt Frigiliana'
      },
      linkToken: 'frigiliana_beaches_authority'
    },
    {
      id: 'calima-terral',
      // Two Andalusian phenomena that regularly catch visitors out. Spanish
      // readers know both, so this stays out of the es locale like the siesta card.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'sunshine',
      eyebrow: {
        de: 'Zwei Überraschungen',
        en: 'Two surprises',
        nl: 'Twee verrassingen',
        sv: 'Två överraskningar'
      },
      title: {
        de: 'Calima und Terral',
        en: 'Calima and terral',
        nl: 'Calima en terral',
        sv: 'Calima och terral'
      },
      body: {
        de: 'Zwei Wetterlagen überraschen Gäste oft. Bei der **Calima** trägt der Wind Saharastaub heran: Der Himmel wird milchig-orange, und manchmal fällt „Blutregen“, der einen feinen roten Schleier auf Autos und Terrassen hinterlässt — meist ist das nach ein, zwei Tagen vorbei. Der **Terral** ist ein trockener Fallwind aus dem Landesinneren: Er lässt die Temperatur binnen Stunden hochschnellen und die Luft sehr trocken werden — dann helfen nur Schatten und Wasser. Nebenbei drückt er warmes Oberflächenwasser hinaus, sodass das Meer trotz Hitze plötzlich kalt sein kann.',
        en: 'Two weather patterns often catch guests out. With the **calima**, the wind carries Sahara dust: the sky turns milky orange, and sometimes “blood rain” falls and leaves a fine red film on cars and terraces — usually gone after a day or two. The **terral** is a dry downslope wind off the interior: it sends the temperature shooting up within hours and dries the air right out — then only shade and water help. In passing it pushes the warm surface water out to sea, so the water can turn suddenly cold despite the heat.',
        nl: 'Twee weertypes verrassen gasten vaak. Bij de **calima** voert de wind Saharastof aan: de lucht wordt melkig oranje, en soms valt er “bloedregen” die een fijne rode waas op auto’s en terrassen achterlaat — meestal na een dag of twee voorbij. De **terral** is een droge valwind uit het binnenland: hij jaagt de temperatuur in enkele uren omhoog en maakt de lucht kurkdroog — dan helpen alleen schaduw en water. En passant duwt hij het warme oppervlaktewater naar zee, zodat het water ondanks de hitte ineens koud kan zijn.',
        sv: 'Två vädertyper överraskar ofta gäster. Vid **calima** för vinden med sig saharadamm: himlen blir mjölkigt orange, och ibland faller “blodregn” som lämnar en fin röd hinna på bilar och terrasser — oftast över efter en dag eller två. **Terralen** är en torr fallvind från inlandet: den får temperaturen att skjuta i höjden på några timmar och gör luften mycket torr — då hjälper bara skugga och vatten. På kuppen trycker den ut det varma ytvattnet, så havet kan bli plötsligt kallt trots värmen.'
      },
      linkLabel: {
        de: 'Alltag im Dorf',
        en: 'Everyday life in the village',
        nl: 'Dagelijks leven in het dorp',
        sv: 'Vardagen i byn'
      },
      linkToken: 'frigiliana_daily_life'
    },
    {
      id: 'shoulder-season',
      // Spring/autumn practicalities northern-market guests underestimate: the
      // wide daily range, spring UV, and olive-blossom pollen. General climate
      // knowledge, no property facts.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'temperature',
      eyebrow: {
        de: 'Frühjahr & Herbst',
        en: 'Spring & autumn',
        nl: 'Voorjaar & herfst',
        sv: 'Vår & höst'
      },
      title: {
        de: 'Morgens kühl, mittags warm — das Zwiebelprinzip',
        en: 'Cool mornings, warm middays — dress in layers',
        nl: 'Koele ochtenden, warme middagen — kleed je in laagjes',
        sv: 'Svala morgnar, varma middagar — klä dig i lager'
      },
      body: {
        de: 'Im Frühjahr und Herbst ist die **Tagesspanne groß**: morgens auf der Terrasse oft 10 bis 12 Grad, mittags in der Sonne wie 25, abends kühlt es schnell wieder ab. Mit dem Zwiebelprinzip — Pullover für morgens, T-Shirt für mittags — friert und schwitzt niemand. Unterschätzt dabei die Sonne nicht: Auch bei „nur“ 20 Grad im April oder Oktober ist die UV-Strahlung durch den steileren Sonnenstand kräftiger als im Norden, Sonnenschutz gehört also auch dann ins Gepäck, vor allem beim Wandern. Und April/Mai ist Olivenblüte — an starken Pollentagen ist für Allergiker ein Antihistaminikum im Gepäck Gold wert.',
        en: 'In spring and autumn the **daily range is wide**: often 10 to 12 degrees on the terrace in the morning, like 25 in the midday sun, then a quick cool-down in the evening. Pack in layers — a jumper for the morning, a T-shirt for midday — and no one freezes or sweats. Don’t underestimate the sun either: even at “just” 20 degrees in April or October, the steeper sun makes the UV stronger than up north, so sun protection belongs in your bag then too, above all when hiking. And April and May are the olive blossom — on heavy pollen days an antihistamine in the bag is worth its weight for allergy sufferers.',
        nl: 'In het voorjaar en de herfst is het **verschil over de dag groot**: ’s ochtends op het terras vaak 10 tot 12 graden, ’s middags in de zon als 25, en ’s avonds koelt het snel weer af. Kleed je in laagjes — een trui voor de ochtend, een T-shirt voor de middag — dan heeft niemand het koud of te warm. Onderschat de zon niet: zelfs bij “maar” 20 graden in april of oktober is de uv-straling door de steilere zonnestand sterker dan in het noorden, dus zonbescherming hoort er dan ook bij, zeker bij het wandelen. En april/mei is de olijfbloei — op dagen met veel pollen is een antihistaminicum in de tas goud waard voor allergiepatiënten.',
        sv: 'På våren och hösten är **dygnsspannet stort**: ofta 10 till 12 grader på terrassen på morgonen, som 25 i middagssolen, och sedan snabb avkylning på kvällen. Klä dig i lager — en tröja för morgonen, en T-shirt för middagen — så fryser eller svettas ingen. Underskatta inte solen heller: även vid ”bara” 20 grader i april eller oktober gör den brantare solvinkeln UV-strålningen starkare än i norr, så solskydd hör med även då, framför allt vid vandring. Och april och maj är olivblomningen — dagar med mycket pollen är en antihistamin i väskan guld värd för allergiker.'
      },
      linkLabel: {
        de: 'Wandern rund um Frigiliana',
        en: 'Walking around Frigiliana',
        nl: 'Wandelen rond Frigiliana',
        sv: 'Vandra runt Frigiliana'
      },
      linkToken: 'frigiliana_hiking_authority'
    },
    {
      id: 'rain-slippery',
      // The steep polished cobbles turn slippery when wet — a safety note that
      // matters most on the last stretch up to the shared front door.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'walking-surface',
      eyebrow: {
        de: 'Herbst & Winter',
        en: 'Autumn & winter',
        nl: 'Herfst & winter',
        sv: 'Höst & vinter'
      },
      title: {
        de: 'Bei Regen werden die Gassen rutschig',
        en: 'The lanes get slippery in the rain',
        nl: 'Bij regen worden de steegjes glad',
        sv: 'I regn blir gränderna hala'
      },
      body: {
        de: 'Im Herbst und Winter fällt der meiste Regen — selten als tagelanger, grauer Nieselregen wie in Mitteleuropa, eher als kräftiger, kurzer Schauer oder Gewitter (die berüchtigte Gota Fría), nach dem der Himmel schnell wieder aufreißt. Die steilen, mit glattem Stein gepflasterten Gassen werden dann **überraschend rutschig** — vor allem auf den letzten Metern bergauf bis zur Haustür. Schuhe mit gutem Profil sind hier bares Geld wert; und wie es morgens gerade aussieht, sagen wir euch auf Nachfrage.',
        en: 'Most of the rain falls in autumn and winter — rarely as days of grey drizzle like in central Europe, more as a heavy, short downpour or thunderstorm (the notorious gota fría), after which the sky soon clears again. The steep lanes, paved with smooth stone, then turn **surprisingly slippery** — above all on the last stretch uphill to the front door. Shoes with a good grip are worth real money here; and if you ask, we’ll tell you how it looks that morning.',
        nl: 'De meeste regen valt in de herfst en winter — zelden als dagenlange grauwe motregen zoals in Midden-Europa, eerder als een korte, felle bui of onweer (de beruchte gota fría), waarna de lucht snel weer openbreekt. De steile steegjes, geplaveid met gladde steen, worden dan **verrassend glad** — vooral op de laatste meters omhoog naar de voordeur. Schoenen met goed profiel zijn hier goud waard; en hoe het er ’s ochtends bij ligt, vertellen we je op verzoek.',
        sv: 'Det mesta regnet faller på hösten och vintern — sällan som dagar av grått duggregn som i Centraleuropa, snarare som en kraftig, kort skur eller åska (den ökända gota fría), varefter himlen snart spricker upp igen. De branta gränderna, stenlagda med slät sten, blir då **förvånansvärt hala** — framför allt på de sista metrarna uppför till porten. Skor med bra grepp är värda riktiga pengar här; och hur det ser ut på morgonen säger vi på förfrågan.'
      },
      linkLabel: {
        de: 'Wie der Ort aufgebaut ist',
        en: 'How the village is laid out',
        nl: 'Hoe het dorp is opgebouwd',
        sv: 'Så är byn uppbyggd'
      },
      linkToken: 'frigiliana_stairs'
    },
    {
      id: 'terrace-sun',
      // First-party terrace-light observations from the property facts: Maha's
      // upper terrace catches morning light earlier; sunsets seen from all three.
      // Framed as observation, never a guarantee (climate claim boundary).
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'evening',
      eyebrow: {
        de: 'Sonne & Schatten',
        en: 'Sun & shade',
        nl: 'Zon & schaduw',
        sv: 'Sol & skugga'
      },
      title: {
        de: 'Die Sonne auf eurer Terrasse',
        en: 'The sun on your terrace',
        nl: 'De zon op je terras',
        sv: 'Solen på er terrass'
      },
      body: {
        de: 'Die Terrassen von Lounis, Zaid und Maha schauen nach **Südwesten** — Sonne bis in den Abend, wie gemacht für den Sundowner. Maha liegt als Dachterrasse ganz oben: die erste Sonne schon zum Frühstück und abends am längsten Licht. Auf Zaid und Lounis kommt sie etwa eine Viertelstunde später, kaum merklich. Schatten spenden Sonnensegel, Pergolas und der klassische Cañizo aus Rohr; abkühlen könnt ihr euch an der eigenen Außendusche.',
        en: 'The terraces of Lounis, Zaid and Maha face **southwest** — sun into the evening, made for a sundowner. Maha, the roof terrace, sits right at the top: the first sun already at breakfast and the longest light in the evening. On Zaid and Lounis it arrives about a quarter of an hour later, barely noticeable. Sun sails, pergolas and the classic reed screen (cañizo) give shade; to cool off there is your own outdoor shower.',
        nl: 'De terrassen van Lounis, Zaid en Maha kijken op het **zuidwesten** — zon tot in de avond, gemaakt voor een sundowner. Maha, het dakterras, ligt helemaal boven: de eerste zon al bij het ontbijt en ’s avonds het langst licht. Op Zaid en Lounis komt ze zo’n kwartier later, nauwelijks merkbaar. Schaduw geven schaduwdoeken, pergola’s en het klassieke rieten scherm (cañizo); afkoelen doe je onder je eigen buitendouche.',
        sv: 'Terrasserna hos Lounis, Zaid och Maha vetter mot **sydväst** — sol in på kvällen, som gjort för en sundowner. Maha, takterrassen, ligger högst upp: den första solen redan vid frukosten och längst ljus på kvällen. På Zaid och Lounis kommer den ungefär en kvart senare, knappt märkbart. Skugga ger solsegel, pergolor och den klassiska vasskärmen (cañizo); svalka finns i er egen utedusch.'
      },
      linkLabel: {
        de: 'Ausstattung der Wohnungen',
        en: 'What the apartments offer',
        nl: 'Wat de appartementen bieden',
        sv: 'Vad lägenheterna erbjuder'
      },
      linkToken: 'amenities'
    }
  ],
  nerja: [
    {
      id: 'siesta-shops',
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'opening-hours',
      eyebrow: {
        de: 'Hitze & Alltag',
        en: 'Heat & everyday life',
        nl: 'Hitte & dagelijks leven',
        sv: 'Värme & vardag'
      },
      title: {
        de: 'Warum mittags die Läden schließen',
        en: 'Why the shops close at midday',
        nl: 'Waarom de winkels ’s middags sluiten',
        sv: 'Därför stänger butikerna mitt på dagen'
      },
      body: {
        de: 'Auch in Nerja legt sich über Mittag eine Ruhe über den Ort: Viele kleine Läden und Geschäfte schließen in den heißesten Stunden und öffnen am Nachmittag wieder. **Erledigt Einkäufe am besten vormittags oder am frühen Abend.**',
        en: 'In Nerja too, a hush settles over midday: many small shops close during the hottest hours and reopen in the afternoon. **Do your shopping in the morning or the early evening.**',
        nl: 'Ook in Nerja daalt er rond het middaguur rust neer: veel kleine winkels sluiten tijdens de heetste uren en openen ’s middags weer. **Doe je boodschappen ’s ochtends of in de vroege avond.**',
        sv: 'Även i Nerja lägger sig ett lugn mitt på dagen: många små butiker stänger under de hetaste timmarna och öppnar igen på eftermiddagen. **Handla på morgonen eller tidiga kvällen.**'
      },
      linkLabel: {
        de: 'Einkaufen & Öffnungszeiten',
        en: 'Shopping & opening hours',
        nl: 'Boodschappen & openingstijden',
        sv: 'Handel & öppettider'
      },
      linkToken: 'nerja_daily_life'
    },
    {
      id: 'beaches-heat',
      languages: ['de', 'en', 'es', 'nl', 'sv'],
      icon: 'coast',
      eyebrow: {
        de: 'Hitze & Strand',
        en: 'Heat & the beach',
        es: 'Calor y playa',
        nl: 'Hitte & strand',
        sv: 'Värme & strand'
      },
      title: {
        de: 'An heißen Tagen ist der Strand der Plan',
        en: 'On hot days the beach is the plan',
        es: 'Los días de calor, la playa es el plan',
        nl: 'Op hete dagen is het strand het plan',
        sv: 'Heta dagar är stranden planen'
      },
      body: {
        de: 'Wenn die Sonne drückt, geht in Nerja alles ans Wasser. Von der Playa Torrecilla bis zu den versteckten Buchten Richtung Maro hat jeder Strand seinen eigenen Charakter — **welche Bucht sich für welchen Tag lohnt, zeigt der Strand-Guide.**',
        en: 'When the sun beats down, in Nerja everyone heads for the water. From Playa Torrecilla to the hidden coves towards Maro, each beach has its own character — **the beach guide shows which cove suits which day.**',
        es: 'Cuando aprieta el sol, en Nerja todo el mundo se va al agua. De la Playa Torrecilla a las calas escondidas hacia Maro, cada playa tiene su carácter — **la guía de playas muestra qué cala conviene cada día.**',
        nl: 'Als de zon fel is, gaat in Nerja iedereen het water in. Van Playa Torrecilla tot de verborgen baaien richting Maro heeft elk strand zijn eigen karakter — **de strandgids laat zien welke baai bij welke dag past.**',
        sv: 'När solen gassar går alla i Nerja ner till vattnet. Från Playa Torrecilla till de dolda vikarna mot Maro har varje strand sin egen karaktär — **strandguiden visar vilken vik som passar vilken dag.**'
      },
      linkLabel: {
        de: 'Strände in Nerja',
        en: 'Nerja’s beaches',
        es: 'Playas de Nerja',
        nl: 'Stranden in Nerja',
        sv: 'Stränder i Nerja'
      },
      linkToken: 'nerja_beaches_authority'
    },
    {
      id: 'sea-swimming',
      // Alborán runs colder than the Balearics; here the beach is at the door,
      // so the swimming window is a real planning fact for northern-market guests.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'coast',
      eyebrow: {
        de: 'Meer & Baden',
        en: 'Sea & swimming',
        nl: 'Zee & zwemmen',
        sv: 'Hav & bad'
      },
      title: {
        de: 'Wann das Meer warm genug zum Baden ist',
        en: 'When the sea is warm enough to swim',
        nl: 'Wanneer de zee warm genoeg is om te zwemmen',
        sv: 'När havet är varmt nog att bada i'
      },
      body: {
        de: 'Der Strand liegt hier direkt vor der Tür — aber das Alborán-Meer ist durch Atlantikströmungen kühler als etwa vor Mallorca. Angenehm zum Baden wird es meist **erst ab Mitte bis Ende Juni** und bleibt dann bis in den späten Oktober warm. Im Frühjahr fühlt sich die Luft oft schon sommerlich an, während das Wasser noch frisch ist.',
        en: 'The beach is right on the doorstep here — but the Alborán Sea is cooler than, say, Mallorca, fed by Atlantic currents. It usually turns pleasant for swimming **only from mid to late June** and then stays warm into late October. In spring the air can already feel like summer while the water is still fresh.',
        nl: 'Het strand ligt hier vlak voor de deur — maar de Alboránzee is door Atlantische stromingen koeler dan bijvoorbeeld bij Mallorca. Aangenaam om te zwemmen wordt het meestal **pas van half tot eind juni** en dan blijft het warm tot laat in oktober. In het voorjaar voelt de lucht vaak al zomers terwijl het water nog fris is.',
        sv: 'Stranden ligger här precis utanför dörren — men Alboránsjön är genom atlantiska strömmar svalare än till exempel vid Mallorca. Behagligt att bada i blir det oftast **först från mitten till slutet av juni** och håller sig sedan varmt in i sena oktober. På våren känns luften ofta redan sommarlik medan vattnet ännu är friskt.'
      },
      linkLabel: {
        de: 'Strände in Nerja',
        en: 'Nerja’s beaches',
        nl: 'Stranden in Nerja',
        sv: 'Stränder i Nerja'
      },
      linkToken: 'nerja_beaches_authority'
    },
    {
      id: 'calima-terral',
      // The two Málaga-coast phenomena; on the coast the terral's cold-water
      // effect is especially relevant. Spanish readers know both — out of es.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'sunshine',
      eyebrow: {
        de: 'Zwei Überraschungen',
        en: 'Two surprises',
        nl: 'Twee verrassingen',
        sv: 'Två överraskningar'
      },
      title: {
        de: 'Calima und Terral',
        en: 'Calima and terral',
        nl: 'Calima en terral',
        sv: 'Calima och terral'
      },
      body: {
        de: 'Zwei Wetterlagen überraschen Gäste oft. Bei der **Calima** trägt der Wind Saharastaub heran: Der Himmel wird milchig-orange, und manchmal fällt „Blutregen“, der einen feinen roten Schleier auf Autos und Balkone legt — meist nach ein, zwei Tagen vorbei. Der **Terral**, der klassische Málaga-Wind, ist ein trockener Fallwind aus dem Landesinneren: Er lässt die Temperatur binnen Stunden hochschnellen und drückt zugleich das warme Oberflächenwasser hinaus — dann ist das Meer trotz Hitze plötzlich empfindlich kalt.',
        en: 'Two weather patterns often catch guests out. With the **calima**, the wind carries Sahara dust: the sky turns milky orange, and sometimes “blood rain” leaves a fine red film on cars and balconies — usually gone after a day or two. The **terral**, the classic Málaga wind, is a dry downslope wind off the interior: it sends the temperature shooting up within hours and at the same time pushes the warm surface water out — so the sea can turn suddenly, sharply cold despite the heat.',
        nl: 'Twee weertypes verrassen gasten vaak. Bij de **calima** voert de wind Saharastof aan: de lucht wordt melkig oranje, en soms laat “bloedregen” een fijne rode waas op auto’s en balkons achter — meestal na een dag of twee voorbij. De **terral**, de klassieke Málaga-wind, is een droge valwind uit het binnenland: hij jaagt de temperatuur in enkele uren omhoog en duwt tegelijk het warme oppervlaktewater naar zee — zodat de zee ondanks de hitte ineens gevoelig koud kan zijn.',
        sv: 'Två vädertyper överraskar ofta gäster. Vid **calima** för vinden med sig saharadamm: himlen blir mjölkigt orange, och ibland lämnar “blodregn” en fin röd hinna på bilar och balkonger — oftast över efter en dag eller två. **Terralen**, den klassiska Málaga-vinden, är en torr fallvind från inlandet: den får temperaturen att skjuta i höjden på några timmar och trycker samtidigt ut det varma ytvattnet — så havet kan bli plötsligt, kännbart kallt trots värmen.'
      },
      linkLabel: {
        de: 'Alltag in Nerja',
        en: 'Everyday life in Nerja',
        nl: 'Dagelijks leven in Nerja',
        sv: 'Vardagen i Nerja'
      },
      linkToken: 'nerja_daily_life'
    },
    {
      id: 'shoulder-season',
      // Spring/autumn practicalities: wide daily range, strong spring UV on the
      // water, olive-blossom pollen. General climate knowledge, no property facts.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'temperature',
      eyebrow: {
        de: 'Frühjahr & Herbst',
        en: 'Spring & autumn',
        nl: 'Voorjaar & herfst',
        sv: 'Vår & höst'
      },
      title: {
        de: 'Morgens kühl, mittags warm — das Zwiebelprinzip',
        en: 'Cool mornings, warm middays — dress in layers',
        nl: 'Koele ochtenden, warme middagen — kleed je in laagjes',
        sv: 'Svala morgnar, varma middagar — klä dig i lager'
      },
      body: {
        de: 'Im Frühjahr und Herbst ist die **Tagesspanne groß**: morgens noch frisch, mittags in der Sonne schnell sommerlich, abends kühlt es wieder ab. Mit dem Zwiebelprinzip beim Packen — Pullover für morgens, T-Shirt für mittags — friert und schwitzt niemand. Unterschätzt die Sonne nicht: Auch bei „nur“ 20 Grad im April oder Oktober ist die UV-Strahlung durch den steileren Sonnenstand kräftiger als im Norden — am Strand und auf dem Wasser besonders. Und April/Mai ist Olivenblüte; an starken Pollentagen ist für Allergiker ein Antihistaminikum im Gepäck Gold wert.',
        en: 'In spring and autumn the **daily range is wide**: still fresh in the morning, quickly summery in the midday sun, then a cool-down in the evening. Pack in layers — a jumper for the morning, a T-shirt for midday — and no one freezes or sweats. Don’t underestimate the sun: even at “just” 20 degrees in April or October, the steeper sun makes UV stronger than up north — on the beach and on the water especially. And April and May are the olive blossom; on heavy pollen days an antihistamine in the bag is worth its weight for allergy sufferers.',
        nl: 'In het voorjaar en de herfst is het **verschil over de dag groot**: ’s ochtends nog fris, ’s middags in de zon snel zomers, en ’s avonds koelt het weer af. Kleed je in laagjes — een trui voor de ochtend, een T-shirt voor de middag — dan heeft niemand het koud of te warm. Onderschat de zon niet: zelfs bij “maar” 20 graden in april of oktober is de uv-straling door de steilere zonnestand sterker dan in het noorden — op het strand en op het water zeker. En april/mei is de olijfbloei; op dagen met veel pollen is een antihistaminicum in de tas goud waard voor allergiepatiënten.',
        sv: 'På våren och hösten är **dygnsspannet stort**: fortfarande friskt på morgonen, snabbt sommarlikt i middagssolen, och sedan avkylning på kvällen. Klä dig i lager — en tröja för morgonen, en T-shirt för middagen — så fryser eller svettas ingen. Underskatta inte solen: även vid ”bara” 20 grader i april eller oktober gör den brantare solvinkeln UV-strålningen starkare än i norr — på stranden och på vattnet särskilt. Och april och maj är olivblomningen; dagar med mycket pollen är en antihistamin i väskan guld värd för allergiker.'
      },
      linkLabel: {
        de: 'Ausflüge ab Nerja',
        en: 'Day trips from Nerja',
        nl: 'Uitstapjes vanuit Nerja',
        sv: 'Utflykter från Nerja'
      },
      linkToken: 'nerja_daytrips_authority'
    },
    {
      id: 'rain-gota-fria',
      // How autumn/winter rain actually behaves on the coast: short heavy bursts,
      // then it clears — reassuring for a rainy forecast. No steep-lane angle here.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'rainfall',
      eyebrow: {
        de: 'Herbst & Winter',
        en: 'Autumn & winter',
        nl: 'Herfst & winter',
        sv: 'Höst & vinter'
      },
      title: {
        de: 'Wie es hier regnet',
        en: 'How the rain works here',
        nl: 'Hoe het hier regent',
        sv: 'Hur regnet fungerar här'
      },
      body: {
        de: 'Der meiste Regen fällt im Herbst und Winter — selten als tagelanger, grauer Nieselregen wie in Mitteleuropa, eher als **kräftiger, kurzer Schauer oder Gewitter** (die berüchtigte Gota Fría), nach dem der Himmel schnell wieder aufreißt. Ein Regentag in der Vorhersage heißt hier also selten einen verlorenen Tag; oft reicht es, den Guss abzuwarten. Bei starker Gota Fría füllen sich Straßen und Rinnen aber rasch — dann kurz drinnen bleiben.',
        en: 'Most of the rain falls in autumn and winter — rarely as days of grey drizzle like in central Europe, more as a **heavy, short downpour or thunderstorm** (the notorious gota fría), after which the sky soon clears again. So a rainy forecast rarely means a lost day here; often it is enough to wait out the downpour. In a strong gota fría, though, streets and gutters fill fast — then stay in for a bit.',
        nl: 'De meeste regen valt in de herfst en winter — zelden als dagenlange grauwe motregen zoals in Midden-Europa, eerder als een **korte, felle bui of onweer** (de beruchte gota fría), waarna de lucht snel weer openbreekt. Een regendag in de verwachting betekent hier dus zelden een verloren dag; vaak is het genoeg de bui af te wachten. Bij een zware gota fría lopen straten en goten wel snel vol — blijf dan even binnen.',
        sv: 'Det mesta regnet faller på hösten och vintern — sällan som dagar av grått duggregn som i Centraleuropa, snarare som en **kraftig, kort skur eller åska** (den ökända gota fría), varefter himlen snart spricker upp igen. En regnig prognos betyder alltså sällan en förlorad dag här; ofta räcker det att vänta ut skuren. Vid en kraftig gota fría fylls dock gator och rännor snabbt — håll dig inne en stund då.'
      },
      linkLabel: {
        de: 'Alltag in Nerja',
        en: 'Everyday life in Nerja',
        nl: 'Dagelijks leven in Nerja',
        sv: 'Vardagen i Nerja'
      },
      linkToken: 'nerja_daily_life'
    }
  ],
  tarifa: [
    {
      id: 'siesta-shops',
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'opening-hours',
      eyebrow: {
        de: 'Hitze & Alltag',
        en: 'Heat & everyday life',
        nl: 'Hitte & dagelijks leven',
        sv: 'Värme & vardag'
      },
      title: {
        de: 'Warum mittags die Läden schließen',
        en: 'Why the shops close at midday',
        nl: 'Waarom de winkels ’s middags sluiten',
        sv: 'Därför stänger butikerna mitt på dagen'
      },
      body: {
        de: 'Auch in Tarifa macht der Ort über Mittag langsamer: Viele kleine Läden schließen in den heißesten Stunden und öffnen am Nachmittag wieder. **Plant Einkäufe für den Vormittag oder den frühen Abend.**',
        en: 'In Tarifa too, the town slows over midday: many small shops close during the hottest hours and reopen in the afternoon. **Plan your shopping for the morning or the early evening.**',
        nl: 'Ook in Tarifa gaat het stadje rond het middaguur langzamer: veel kleine winkels sluiten tijdens de heetste uren en openen ’s middags weer. **Plan je boodschappen ’s ochtends of in de vroege avond.**',
        sv: 'Även i Tarifa saktar orten ner mitt på dagen: många små butiker stänger under de hetaste timmarna och öppnar igen på eftermiddagen. **Planera inköpen till morgonen eller tidiga kvällen.**'
      },
      linkLabel: {
        de: 'Einkaufen & Öffnungszeiten',
        en: 'Shopping & opening hours',
        nl: 'Boodschappen & openingstijden',
        sv: 'Handel & öppettider'
      },
      linkToken: 'tarifa_daily_life'
    },
    {
      id: 'beaches-wind',
      languages: ['de', 'en', 'es', 'nl', 'sv'],
      icon: 'coast',
      eyebrow: {
        de: 'Wind & Strand',
        en: 'Wind & the beach',
        es: 'Viento y playa',
        nl: 'Wind & strand',
        sv: 'Vind & strand'
      },
      title: {
        de: 'Welcher Strand — das entscheidet der Wind',
        en: 'Which beach — the wind decides',
        es: 'Qué playa: lo decide el viento',
        nl: 'Welk strand — de wind beslist',
        sv: 'Vilken strand — vinden avgör'
      },
      body: {
        de: 'An Starkwind-Tagen ist nicht jeder Strand zum Baden schön: Bei Levante fliegt an den offenen Stränden der Sand, während andere Buchten im Windschatten liegen. **Welcher Strand bei welcher Windrichtung passt, zeigt der Strand-Guide.**',
        en: 'On windy days not every beach is pleasant for a swim: in a Levante the sand flies on the open beaches while other coves sit in the lee. **The beach guide shows which beach suits which wind.**',
        es: 'Los días de viento no toda playa es agradable para el baño: con Levante la arena vuela en las playas abiertas mientras otras calas quedan a sotavento. **La guía de playas muestra qué playa conviene con cada viento.**',
        nl: 'Op winderige dagen is niet elk strand fijn om te zwemmen: bij Levante vliegt het zand op de open stranden terwijl andere baaien in de luwte liggen. **De strandgids laat zien welk strand bij welke wind past.**',
        sv: 'Blåsiga dagar är inte varje strand skön att bada vid: vid Levante flyger sanden på de öppna stränderna medan andra vikar ligger i lä. **Strandguiden visar vilken strand som passar vilken vind.**'
      },
      linkLabel: {
        de: 'Strände in Tarifa',
        en: 'Tarifa’s beaches',
        es: 'Playas de Tarifa',
        nl: 'Stranden in Tarifa',
        sv: 'Stränder i Tarifa'
      },
      linkToken: 'tarifa_beaches_authority'
    },
    {
      id: 'sea-atlantic',
      // Tarifa's water is Atlantic (the strait), not the warm Med — a genuine
      // expectation-setter, and the reason wind sports are at home here.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'coast',
      eyebrow: {
        de: 'Meer & Wasser',
        en: 'Sea & water',
        nl: 'Zee & water',
        sv: 'Hav & vatten'
      },
      title: {
        de: 'Warum das Wasser frischer ist als am Mittelmeer',
        en: 'Why the water is fresher than the Mediterranean',
        nl: 'Waarom het water frisser is dan de Middellandse Zee',
        sv: 'Varför vattnet är friskare än Medelhavet'
      },
      body: {
        de: 'Tarifa liegt an der **Meerenge zum Atlantik** — das Wasser ist auch im Hochsommer kühler als am Mittelmeer, dazu kommen Strömung und oft Welle. Herrlich zum Abkühlen und der Grund, warum hier Kite und Surf zu Hause sind; ein bade-warmes Mittelmeer solltet ihr aber nicht erwarten. An windstillen Tagen ist das Wasser am angenehmsten.',
        en: 'Tarifa sits on the **strait where the Atlantic meets the sea** — the water stays cooler than the Mediterranean even in high summer, with currents and often some swell. Bracing and refreshing, and the reason kite and surf are at home here; just don’t expect Mediterranean bath-warm water. On calm days the water is at its most pleasant.',
        nl: 'Tarifa ligt aan de **zeestraat naar de Atlantische Oceaan** — het water blijft ook in de hoogzomer koeler dan de Middellandse Zee, met stroming en vaak wat golfslag. Heerlijk verfrissend, en de reden dat kite en surf hier thuis zijn; verwacht alleen geen badwarm Middellandse-Zeewater. Op windstille dagen is het water het aangenaamst.',
        sv: 'Tarifa ligger vid **sundet mot Atlanten** — vattnet är svalare än Medelhavet även på högsommaren, med strömmar och ofta lite svall. Härligt svalkande och skälet till att kite och surf hör hemma här; vänta er bara inte badvarmt Medelhavsvatten. På vindstilla dagar är vattnet som skönast.'
      },
      linkLabel: {
        de: 'Strände in Tarifa',
        en: 'Tarifa’s beaches',
        nl: 'Stranden in Tarifa',
        sv: 'Stränder i Tarifa'
      },
      linkToken: 'tarifa_beaches_authority'
    },
    {
      id: 'calima',
      // Sahara dust crosses the strait on a strong Levante. No terral here — that
      // is the Málaga-coast wind, wrong geography for Tarifa.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'sunshine',
      eyebrow: {
        de: 'Eine Überraschung',
        en: 'A surprise',
        nl: 'Een verrassing',
        sv: 'En överraskning'
      },
      title: {
        de: 'Calima — wenn der Himmel orange wird',
        en: 'Calima — when the sky turns orange',
        nl: 'Calima — als de lucht oranje wordt',
        sv: 'Calima — när himlen blir orange'
      },
      body: {
        de: 'Bei kräftigem Ostwind (Levante) trägt die Luft manchmal **Saharastaub** über die Meerenge: Der Himmel wird milchig-orange und die Sicht auf Afrika verschwindet, gelegentlich fällt „Blutregen“ mit feinem rotem Staub. Meist ist das nach ein, zwei Tagen vorbei — ein Wetterschauspiel, kein Grund zur Sorge.',
        en: 'In a strong easterly (Levante), the air sometimes carries **Sahara dust** across the strait: the sky turns milky orange and the view of Africa disappears, and occasionally “blood rain” falls with a fine red dust. It usually passes after a day or two — a spectacle, not a worry.',
        nl: 'Bij krachtige oostenwind (Levante) voert de lucht soms **Saharastof** over de zeestraat: de lucht wordt melkig oranje en het zicht op Afrika verdwijnt, en soms valt er “bloedregen” met fijn rood stof. Meestal na een dag of twee voorbij — een schouwspel, geen reden tot zorg.',
        sv: 'Vid kraftig ostvind (Levante) för luften ibland med sig **saharadamm** över sundet: himlen blir mjölkigt orange och sikten mot Afrika försvinner, och ibland faller “blodregn” med fint rött damm. Oftast över efter en dag eller två — ett skådespel, inget att oroa sig för.'
      },
      linkLabel: {
        de: 'Alltag in Tarifa',
        en: 'Everyday life in Tarifa',
        nl: 'Dagelijks leven in Tarifa',
        sv: 'Vardagen i Tarifa'
      },
      linkToken: 'tarifa_daily_life'
    },
    {
      id: 'wind-packing',
      // Tarifa-specific twist on the UV/packing point: the constant wind hides
      // the sun's strength (sunburn) and calls for a windbreaker even in summer.
      languages: ['de', 'en', 'nl', 'sv'],
      icon: 'wind',
      eyebrow: {
        de: 'Packen für Tarifa',
        en: 'Packing for Tarifa',
        nl: 'Inpakken voor Tarifa',
        sv: 'Packa för Tarifa'
      },
      title: {
        de: 'Der Wind trügt — Windjacke und Sonnenschutz',
        en: 'The wind deceives — windbreaker and sunscreen',
        nl: 'De wind bedriegt — windjack en zonnebrand',
        sv: 'Vinden bedrar — vindjacka och solskydd'
      },
      body: {
        de: 'In Tarifa weht fast immer Wind. Er kühlt angenehm, **verdeckt aber, wie stark die Sonne brennt** — Sonnenbrand kommt hier schneller als gedacht, also Sonnencreme auch an bewölkten oder windigen Tagen. Und selbst im Sommer ist abends oder bei frischem Levante eine leichte Windjacke Gold wert; im Frühjahr und Herbst sowieso das Zwiebelprinzip.',
        en: 'In Tarifa the wind almost always blows. It cools you pleasantly but **hides how hard the sun is burning** — sunburn comes faster here than you would think, so sunscreen even on cloudy or windy days. And even in summer a light windbreaker is worth its weight in the evening or in a fresh Levante; in spring and autumn, dress in layers anyway.',
        nl: 'In Tarifa waait het bijna altijd. De wind koelt aangenaam, maar **verbergt hoe fel de zon brandt** — zonnebrand komt hier sneller dan je denkt, dus zonnebrand ook op bewolkte of winderige dagen. En zelfs in de zomer is ’s avonds of bij een frisse Levante een licht windjack goud waard; in voor- en najaar sowieso het laagjesprincipe.',
        sv: 'I Tarifa blåser det nästan alltid. Vinden svalkar skönt men **döljer hur hårt solen bränner** — solbränna kommer snabbare här än man tror, så solkräm även molniga eller blåsiga dagar. Och även på sommaren är en lätt vindjacka guld värd på kvällen eller i en frisk Levante; på våren och hösten gäller lager-på-lager ändå.'
      },
      linkLabel: {
        de: 'Wind in Tarifa verstehen',
        en: 'Understanding Tarifa’s wind',
        nl: 'De wind van Tarifa begrijpen',
        sv: 'Förstå Tarifas vind'
      },
      linkToken: 'tarifa_wind_kitesurfing_authority'
    }
  ]
};
