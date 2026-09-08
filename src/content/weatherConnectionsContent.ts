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
