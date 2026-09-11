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
        de: 'Im Herbst und Winter fällt der meiste Regen. Die steilen, mit glattem Stein gepflasterten Gassen werden dann **überraschend rutschig** — vor allem auf den letzten Metern bergauf bis zur Haustür. Schuhe mit gutem Profil sind hier bares Geld wert; und wie es morgens gerade aussieht, sagen wir euch auf Nachfrage.',
        en: 'Most of the rain falls in autumn and winter. The steep lanes, paved with smooth stone, then turn **surprisingly slippery** — above all on the last stretch uphill to the front door. Shoes with a good grip are worth real money here; and if you ask, we’ll tell you how it looks that morning.',
        nl: 'De meeste regen valt in de herfst en winter. De steile steegjes, geplaveid met gladde steen, worden dan **verrassend glad** — vooral op de laatste meters omhoog naar de voordeur. Schoenen met goed profiel zijn hier goud waard; en hoe het er ’s ochtends bij ligt, vertellen we je op verzoek.',
        sv: 'Det mesta regnet faller på hösten och vintern. De branta gränderna, stenlagda med slät sten, blir då **förvånansvärt hala** — framför allt på de sista metrarna uppför till porten. Skor med bra grepp är värda riktiga pengar här; och hur det ser ut på morgonen säger vi på förfrågan.'
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
    }
  ]
};
