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
  },
  nerja: {
    de: {
      eyebrow: 'Nerja im Vergleich',
      title: 'Warm im Sommer, mild im Winter',
      compareLabel: 'Vergleich mit Berlin',
      summer: {
        eyebrow: 'Im Hochsommer',
        title: 'Heißer im Schnitt — mit dem Meer vor der Tür',
        body: 'Im Sommer ist es hier im Schnitt wärmer als in Berlin (27° zu 24°), und an Hitzetagen wird es auch im Norden heiß — Berlin bis 38°, hier bis 40°. Der Unterschied an der Küste: Das Meer ist zum **Abkühlen** direkt da. AMARA Playa liegt nur wenige Schritte vom Strand — nach dem Sprung ins Wasser sind die heißesten Stunden schnell vergessen.',
        linkLabel: 'AMARA Playa am Strand',
        linkToken: 'playa'
      },
      winter: {
        eyebrow: 'Im Winter',
        title: 'Deutlich milder — und sonnig',
        body: 'Der klarste Vorteil ist der Winter: tagsüber im Schnitt 12–13°, in Berlin um 3°. Dazu kommen die vielen **Sonnenstunden**, die den Tagen ihr mildes Licht geben. Genau deshalb lohnt sich ein längerer Aufenthalt in der ruhigen Nebensaison.',
        linkLabel: 'Winter in Nerja',
        linkToken: 'nerja_winter_stays'
      }
    },
    es: {
      eyebrow: 'Nerja en comparación',
      title: 'Cálido en verano, suave en invierno',
      compareLabel: 'Comparar con Madrid',
      summer: {
        eyebrow: 'En pleno verano',
        title: 'Más llevadero que el calor de Madrid',
        body: 'En verano Madrid aprieta más que la costa (unos 32° de media frente a 27° aquí). Junto al mar el calor es más llevadero, y en los días más calurosos tienes el **baño** a un paso: AMARA Playa está a pocos metros de la arena, y un chapuzón deja atrás las horas de más calor.',
        linkLabel: 'AMARA Playa, junto al mar',
        linkToken: 'playa'
      },
      winter: {
        eyebrow: 'En invierno',
        title: 'Claramente más suave — y con sol',
        body: 'La mayor ventaja es el invierno: aquí rondan los 12–13° de día, en Madrid unos 9° con noches frías. A eso se suman las muchas **horas de sol** que dan a los días su luz templada. Por eso una estancia larga en temporada baja merece tanto la pena.',
        linkLabel: 'Invierno en Nerja',
        linkToken: 'nerja_winter_stays'
      }
    },
    en: {
      eyebrow: 'Nerja in comparison',
      title: 'Warm in summer, mild in winter',
      compareLabel: 'Compare with London',
      summer: {
        eyebrow: 'In high summer',
        title: 'Warmer on average — with the sea at the door',
        body: 'In summer it is warmer here on average than in London (27° vs 23°), and on hot days the north gets very hot too — London has reached 40°, and so has this coast. The coastal difference: the sea is right there to **cool off** in. AMARA Playa is just steps from the beach, and a dip washes the hottest hours away.',
        linkLabel: 'AMARA Playa by the beach',
        linkToken: 'playa'
      },
      winter: {
        eyebrow: 'In winter',
        title: 'Distinctly milder — and sunny',
        body: 'The clearest advantage is winter: around 12–13° by day here, about 8° in London. Add the long **hours of sunshine** that give the days their mild light. That is why a longer stay in the quiet low season is so rewarding.',
        linkLabel: 'Winter in Nerja',
        linkToken: 'nerja_winter_stays'
      }
    },
    nl: {
      eyebrow: 'Nerja vergeleken',
      title: 'Warm in de zomer, zacht in de winter',
      compareLabel: 'Vergelijk met Amsterdam',
      summer: {
        eyebrow: 'In de hoogzomer',
        title: 'Gemiddeld warmer — met de zee voor de deur',
        body: 'In de zomer is het hier gemiddeld warmer dan in Amsterdam (27° tegen 22°), en op hete dagen wordt het ook in het noorden erg warm — Amsterdam haalde 37°, hier 40°. Het verschil aan de kust: de zee ligt om **af te koelen** vlakbij. AMARA Playa ligt op een paar passen van het strand — na een duik zijn de heetste uren snel vergeten.',
        linkLabel: 'AMARA Playa aan het strand',
        linkToken: 'playa'
      },
      winter: {
        eyebrow: 'In de winter',
        title: 'Duidelijk zachter — en zonnig',
        body: 'Het duidelijkste voordeel is de winter: overdag gemiddeld 12–13° hier, rond 6° in Amsterdam. Daar komen de vele **zonuren** bij die de dagen hun zachte licht geven. Juist daarom is een langer verblijf in het rustige laagseizoen zo de moeite waard.',
        linkLabel: 'Winter in Nerja',
        linkToken: 'nerja_winter_stays'
      }
    },
    sv: {
      eyebrow: 'Nerja i jämförelse',
      title: 'Varmt på sommaren, milt på vintern',
      compareLabel: 'Jämför med Stockholm',
      summer: {
        eyebrow: 'På högsommaren',
        title: 'Varmare i snitt — med havet vid dörren',
        body: 'På sommaren är det här varmare i snitt än i Stockholm (27° mot 22°), och heta dagar blir det mycket varmt även i norr — Stockholm har nått 36°, här 40°. Skillnaden vid kusten: havet finns precis där för att **svalka** sig i. AMARA Playa ligger bara några steg från stranden — ett dopp sköljer bort de hetaste timmarna.',
        linkLabel: 'AMARA Playa vid stranden',
        linkToken: 'playa'
      },
      winter: {
        eyebrow: 'På vintern',
        title: 'Tydligt mildare — och soligt',
        body: 'Den tydligaste fördelen är vintern: i snitt 12–13° på dagen här, kring 0° i Stockholm. Till det kommer de många **soltimmarna** som ger dagarna sitt milda ljus. Just därför är en längre vistelse i den lugna lågsäsongen så givande.',
        linkLabel: 'Vintern i Nerja',
        linkToken: 'nerja_winter_stays'
      }
    }
  },
  tarifa: {
    de: {
      eyebrow: 'Tarifa im Vergleich',
      title: 'Windgekühlt im Sommer, mild im Winter',
      compareLabel: 'Vergleich mit Berlin',
      summer: {
        eyebrow: 'Im Hochsommer',
        title: 'Der Wind hält die Hitze in Schach',
        body: 'Tarifa liegt an der Meerenge, wo fast immer Wind weht — Levante von Osten, Poniente vom Atlantik. Deshalb staut sich die Hitze hier nie: Selbst im Hochsommer bleibt es am Wasser frisch, die Rekorde kaum über 37°. Genau dieser beständige Wind macht Tarifa zu einem der besten **Kite- und Surfreviere** Europas.',
        linkLabel: 'Wind & Kitesurfen in Tarifa',
        linkToken: 'tarifa_wind_kitesurfing_authority'
      },
      winter: {
        eyebrow: 'Im Winter',
        title: 'Mild — und weiter Wind',
        body: 'Auch im Winter bleibt es mild: tagsüber um 14–15°, in Berlin um 3°. Und der Wind bleibt — Tarifa ist eines der wenigen Reviere, in denen sich das **Kiten** über die ruhige Nebensaison zieht. Ein längerer Aufenthalt lohnt sich hier das ganze Jahr.',
        linkLabel: 'Winter in Tarifa',
        linkToken: 'tarifa_winter_stays'
      }
    },
    es: {
      eyebrow: 'Tarifa en comparación',
      title: 'Refrescada por el viento en verano, suave en invierno',
      compareLabel: 'Comparar con Madrid',
      summer: {
        eyebrow: 'En pleno verano',
        title: 'El viento mantiene el calor a raya',
        body: 'Tarifa está en el Estrecho, donde casi siempre sopla el viento — Levante del este, Poniente del Atlántico. Por eso el calor nunca se estanca: incluso en pleno verano junto al mar corre el aire y los récords apenas pasan de 37°. Ese mismo viento constante hace de Tarifa uno de los mejores **spots de kite y surf** de Europa.',
        linkLabel: 'Viento y kitesurf en Tarifa',
        linkToken: 'tarifa_wind_kitesurfing_authority'
      },
      winter: {
        eyebrow: 'En invierno',
        title: 'Suave — y con viento',
        body: 'También en invierno se mantiene suave: de día unos 14–15°, en Madrid unos 9° con noches frías. Y el viento sigue — Tarifa es de los pocos sitios donde el **kite** se alarga en la tranquila temporada baja. Aquí una estancia larga merece la pena todo el año.',
        linkLabel: 'Invierno en Tarifa',
        linkToken: 'tarifa_winter_stays'
      }
    },
    en: {
      eyebrow: 'Tarifa in comparison',
      title: 'Wind-cooled in summer, mild in winter',
      compareLabel: 'Compare with London',
      summer: {
        eyebrow: 'In high summer',
        title: 'The wind keeps the heat in check',
        body: 'Tarifa sits on the Strait, where the wind almost always blows — Levante from the east, Poniente off the Atlantic. So the heat never builds: even at the height of summer the seafront stays fresh, records barely past 37°. That same steady wind makes Tarifa one of Europe’s finest **kite and surf** spots.',
        linkLabel: 'Wind & kitesurfing in Tarifa',
        linkToken: 'tarifa_wind_kitesurfing_authority'
      },
      winter: {
        eyebrow: 'In winter',
        title: 'Mild — and still windy',
        body: 'Winter stays mild too: around 14–15° by day, about 8° in London. And the wind stays — Tarifa is one of the few spots where **kiting** runs right through the quiet low season. A longer stay is worthwhile here all year.',
        linkLabel: 'Winter in Tarifa',
        linkToken: 'tarifa_winter_stays'
      }
    },
    nl: {
      eyebrow: 'Tarifa vergeleken',
      title: 'Windgekoeld in de zomer, zacht in de winter',
      compareLabel: 'Vergelijk met Amsterdam',
      summer: {
        eyebrow: 'In de hoogzomer',
        title: 'De wind houdt de hitte in toom',
        body: 'Tarifa ligt aan de Straat, waar het bijna altijd waait — Levante uit het oosten, Poniente van de Atlantische Oceaan. Daardoor stapelt de hitte zich nooit op: zelfs in de hoogzomer blijft het aan zee fris, de records amper boven 37°. Juist die constante wind maakt van Tarifa een van de beste **kite- en surfplekken** van Europa.',
        linkLabel: 'Wind & kitesurfen in Tarifa',
        linkToken: 'tarifa_wind_kitesurfing_authority'
      },
      winter: {
        eyebrow: 'In de winter',
        title: 'Zacht — en nog steeds wind',
        body: 'Ook in de winter blijft het zacht: overdag rond 14–15°, in Amsterdam rond 6°. En de wind blijft — Tarifa is een van de weinige plekken waar het **kiten** doorloopt in het rustige laagseizoen. Een langer verblijf is hier het hele jaar de moeite waard.',
        linkLabel: 'Winter in Tarifa',
        linkToken: 'tarifa_winter_stays'
      }
    },
    sv: {
      eyebrow: 'Tarifa i jämförelse',
      title: 'Vindkyld på sommaren, mild på vintern',
      compareLabel: 'Jämför med Stockholm',
      summer: {
        eyebrow: 'På högsommaren',
        title: 'Vinden håller värmen i schack',
        body: 'Tarifa ligger vid sundet, där det nästan alltid blåser — Levante från öster, Poniente från Atlanten. Därför bygger värmen aldrig upp sig: även på högsommaren håller sig kusten sval, rekorden knappt över 37°. Just den ständiga vinden gör Tarifa till en av Europas bästa **kite- och surfplatser**.',
        linkLabel: 'Vind & kitesurfing i Tarifa',
        linkToken: 'tarifa_wind_kitesurfing_authority'
      },
      winter: {
        eyebrow: 'På vintern',
        title: 'Mild — och fortsatt vind',
        body: 'Även på vintern håller det sig milt: på dagen kring 14–15°, i Stockholm kring 0°. Och vinden består — Tarifa är en av få platser där **kiteturen** fortsätter genom den lugna lågsäsongen. Här är en längre vistelse värd det året runt.',
        linkLabel: 'Vintern i Tarifa',
        linkToken: 'tarifa_winter_stays'
      }
    }
  }
};
