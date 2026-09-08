import type { LinkToken } from '../lib/linkResolver';
import type { AmaraLanguage } from '../types/seo';

export type ClimateComparisonDestination = 'frigiliana' | 'nerja' | 'tarifa';

interface ComparisonCallout {
  eyebrow: string;
  title: string;
  body: string;
  linkLabel: string;
  linkToken: LinkToken;
}

export interface ClimateComparisonCopy {
  eyebrow: string;
  title: string;
  /** Label on the climate-table compare toggle, naming the home city. */
  compareLabel: string;
  summer: ComparisonCallout;
  winter: ComparisonCallout;
}

/**
 * Home-city climate comparison per market (de→Berlin, es→Madrid, en→London,
 * nl→Amsterdam, sv→Stockholm). Numbers stated in the copy match
 * `comparisonCityHighs`/the climate table; peaks match `summerPeakHigh`.
 * Only the destinations that have authored copy are shown.
 */
export const climateComparisonContent: Partial<
  Record<ClimateComparisonDestination, Record<AmaraLanguage, ClimateComparisonCopy>>
> = {
  frigiliana: {
    de: {
      eyebrow: 'Frigiliana im Vergleich',
      title: 'Warm im Sommer, mild im Winter',
      compareLabel: 'Vergleich mit Berlin',
      summer: {
        eyebrow: 'Im Hochsommer',
        title: 'Heißer im Schnitt — und die Rekorde überraschen',
        body: 'Im Sommer ist es hier im Schnitt wärmer als in Berlin (27° zu 24°). Der Unterschied steckt aber im Durchschnitt, nicht in der Spitze: An Hitzetagen wird es auch im Norden sehr heiß — Berlin bis 38°, hier bis 40°. Genau an diesen Tagen ist es ein besonderes Erlebnis, **draußen zu duschen**: Die Außenduschen in Lounis, Zaid und Maha gehören zu unseren schönsten Sommermomenten.',
        linkLabel: 'Ausstattung & Außenduschen',
        linkToken: 'amenities'
      },
      winter: {
        eyebrow: 'Im Winter',
        title: 'Deutlich milder — und sonnig',
        body: 'Der klarste Vorteil ist der Winter: tagsüber im Schnitt 12–13°, in Berlin um 3°. Dazu kommen die vielen **Sonnenstunden**, die den Tagen ihr mildes Licht geben. Genau deshalb lohnt sich ein längerer Aufenthalt in der ruhigen Nebensaison.',
        linkLabel: 'Winter in Frigiliana',
        linkToken: 'frigiliana_winter_stays'
      }
    },
    es: {
      eyebrow: 'Frigiliana en comparación',
      title: 'Cálido en verano, suave en invierno',
      compareLabel: 'Comparar con Madrid',
      summer: {
        eyebrow: 'En pleno verano',
        title: 'Más llevadero que el calor de Madrid',
        body: 'En verano Madrid aprieta más que la costa (unos 32° de media frente a 27° aquí). Junto al mar el calor es más llevadero, con la brisa del Mediterráneo. Aun así, también aquí hace calor: en días de terral se superan los 35° y los récords llegan a 40°. Justo esos días, **ducharse al aire libre** es una delicia: las duchas exteriores de Lounis, Zaid y Maha están entre nuestros mejores momentos de verano.',
        linkLabel: 'Equipamiento y duchas exteriores',
        linkToken: 'amenities'
      },
      winter: {
        eyebrow: 'En invierno',
        title: 'Claramente más suave — y con sol',
        body: 'La mayor ventaja es el invierno: aquí rondan los 12–13° de día, en Madrid unos 9° con noches frías. A eso se suman las muchas **horas de sol** que dan a los días su luz templada. Por eso una estancia larga en temporada baja merece tanto la pena.',
        linkLabel: 'Invierno en Frigiliana',
        linkToken: 'frigiliana_winter_stays'
      }
    },
    en: {
      eyebrow: 'Frigiliana in comparison',
      title: 'Warm in summer, mild in winter',
      compareLabel: 'Compare with London',
      summer: {
        eyebrow: 'In high summer',
        title: 'Warmer on average — and the records surprise',
        body: 'In summer it is warmer here on average than in London (27° vs 23°). But the difference is in the average, not the peak: on hot days the north gets very hot too — London has reached 40°, and so has this coast. On exactly those days, showering **outdoors** is a treat: the outdoor showers in Lounis, Zaid and Maha are among our finest summer moments.',
        linkLabel: 'Amenities & outdoor showers',
        linkToken: 'amenities'
      },
      winter: {
        eyebrow: 'In winter',
        title: 'Distinctly milder — and sunny',
        body: 'The clearest advantage is winter: around 12–13° by day here, about 8° in London. Add the long **hours of sunshine** that give the days their mild light. That is why a longer stay in the quiet low season is so rewarding.',
        linkLabel: 'Winter in Frigiliana',
        linkToken: 'frigiliana_winter_stays'
      }
    },
    nl: {
      eyebrow: 'Frigiliana vergeleken',
      title: 'Warm in de zomer, zacht in de winter',
      compareLabel: 'Vergelijk met Amsterdam',
      summer: {
        eyebrow: 'In de hoogzomer',
        title: 'Gemiddeld warmer — en de records verrassen',
        body: 'In de zomer is het hier gemiddeld warmer dan in Amsterdam (27° tegen 22°). Het verschil zit in het gemiddelde, niet in de piek: op hete dagen wordt het ook in het noorden erg warm — Amsterdam haalde 37°, hier 40°. Juist op die dagen is **buiten douchen** een belevenis: de buitendouches in Lounis, Zaid en Maha horen bij onze mooiste zomermomenten.',
        linkLabel: 'Voorzieningen & buitendouches',
        linkToken: 'amenities'
      },
      winter: {
        eyebrow: 'In de winter',
        title: 'Duidelijk zachter — en zonnig',
        body: 'Het duidelijkste voordeel is de winter: overdag gemiddeld 12–13° hier, rond 6° in Amsterdam. Daar komen de vele **zonuren** bij die de dagen hun zachte licht geven. Juist daarom is een langer verblijf in het rustige laagseizoen zo de moeite waard.',
        linkLabel: 'Winter in Frigiliana',
        linkToken: 'frigiliana_winter_stays'
      }
    },
    sv: {
      eyebrow: 'Frigiliana i jämförelse',
      title: 'Varmt på sommaren, milt på vintern',
      compareLabel: 'Jämför med Stockholm',
      summer: {
        eyebrow: 'På högsommaren',
        title: 'Varmare i snitt — och rekorden överraskar',
        body: 'På sommaren är det här varmare i snitt än i Stockholm (27° mot 22°). Skillnaden ligger i snittet, inte i toppen: heta dagar blir det mycket varmt även i norr — Stockholm har nått 36°, här 40°. Just de dagarna är det en upplevelse att **duscha utomhus**: utomhusduscharna i Lounis, Zaid och Maha hör till våra finaste sommarstunder.',
        linkLabel: 'Utrustning & utomhusduschar',
        linkToken: 'amenities'
      },
      winter: {
        eyebrow: 'På vintern',
        title: 'Tydligt mildare — och soligt',
        body: 'Den tydligaste fördelen är vintern: i snitt 12–13° på dagen här, kring 0° i Stockholm. Till det kommer de många **soltimmarna** som ger dagarna sitt milda ljus. Just därför är en längre vistelse i den lugna lågsäsongen så givande.',
        linkLabel: 'Vintern i Frigiliana',
        linkToken: 'frigiliana_winter_stays'
      }
    }
  }
};
