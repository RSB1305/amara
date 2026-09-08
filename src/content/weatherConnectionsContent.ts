import type { LinkToken } from '../lib/linkResolver';
import type { AmaraLanguage } from '../types/seo';

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
      eyebrow: { de: 'Hitze & Wandern' },
      title: { de: 'Wann ihr im Sommer wandern solltet' },
      body: {
        de: 'Im Hochsommer ist Wandern rund um Frigiliana nur **früh am Morgen** ein Vergnügen — danach steht die Sonne unbarmherzig über den schattenlosen Hängen. Werft vorher einen Blick auf die aktuelle Vorhersage auf dieser Seite. Am schönsten ist es ohnehin im **Frühjahr und Herbst**, wenn die Wege angenehm kühl bleiben.'
      },
      linkLabel: { de: 'Wandern rund um Frigiliana' },
      linkToken: 'frigiliana_hiking_authority'
    }
  ]
};
