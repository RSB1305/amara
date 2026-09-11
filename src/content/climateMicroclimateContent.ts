import type { LinkToken } from '../lib/linkResolver';
import type { AmaraLanguage } from '../types/seo';

export type ClimateMicroDestination = 'frigiliana' | 'nerja' | 'tarifa';

interface MicroLink {
  label: string;
  token: LinkToken;
}

interface MicroSeason {
  label: string;
  body: string;
}

export interface ClimateMicroCopy {
  eyebrow: string;
  title: string;
  /** First-hand framing, incl. the honest note that this is lived experience, not a station measurement. */
  intro: string;
  summer: MicroSeason;
  winter: MicroSeason;
  links: MicroLink[];
}

/**
 * The mountain-vs-coast microclimate read, told from each place's own vantage.
 * The village-vs-coast contrast is deliberately NOT a measured claim — the
 * knowledge layer flags `local-difference` as excluded/gap because the gridded
 * data cannot resolve it — so the copy stands on verified geography (Frigiliana
 * is a hillside village a few hundred metres up, ~6 km inland from Nerja), the
 * regional seasonal contrast, first-hand experience, and the one hard product
 * fact that every AMARA apartment has heating. Only authored destinations show.
 */
export const climateMicroclimateContent: Partial<
  Record<ClimateMicroDestination, Record<AmaraLanguage, ClimateMicroCopy>>
> = {
  frigiliana: {
    de: {
      eyebrow: 'Berg oder Küste',
      title: 'Sechs Kilometer, zwei Welten',
      intro: 'Frigiliana liegt am Hang, rund 300 Meter über dem Meer — Nerja unten direkt an der Küste. Luftlinie sind es kaum sechs Kilometer, und doch fühlt sich das Klima anders an. Das sind keine Messwerte einer Wetterstation, sondern was wir hier tagtäglich erleben.',
      summer: {
        label: 'Im Sommer',
        body: 'Oben im Dorf kommt an heißen Abenden fast immer ein Lüftchen den Hang herunter, das unten am Meer fehlt — die Nächte fühlen sich hier leichter an, und tagsüber halten die dicken Mauern der Altstadthäuser, Fensterläden und **eine Klimaanlage im Schlafzimmer** die Wohnungen kühl. Nerja hält die Wärme länger und ist feuchter; der Ausgleich liegt dort direkt vor der Tür, im Wasser.'
      },
      winter: {
        label: 'Im Winter',
        body: 'Andalusien im Winter wird unterschätzt: Nachts wird es klamm, und am Berg fängt Frigiliana früher Nebel und kühle Luft als die geschützte Küste. Genau dafür hat **jede AMARA-Wohnung eine Heizung** — mittags im T-Shirt auf der Terrasse, abends drinnen warm.'
      },
      links: [
        { label: 'Heizung & Ausstattung', token: 'amenities' },
        { label: 'Winter in Frigiliana', token: 'frigiliana_winter_stays' },
        { label: 'Das Wetter unten in Nerja', token: 'nerja_weather' }
      ]
    },
    es: {
      eyebrow: 'Montaña o costa',
      title: 'Seis kilómetros, dos mundos',
      intro: 'Frigiliana está en la ladera, a unos 300 metros sobre el mar; Nerja, abajo, junto a la costa. En línea recta apenas seis kilómetros, y aun así el clima se siente distinto. No son datos de una estación meteorológica, sino lo que vivimos aquí a diario.',
      summer: {
        label: 'En verano',
        body: 'Arriba, en el pueblo, las noches de calor casi siempre traen una brisa que baja por la ladera y que abajo, junto al mar, no llega — las noches se sienten más ligeras, y de día los muros gruesos de las casas del casco antiguo, las contraventanas y **el aire acondicionado en el dormitorio** mantienen los apartamentos frescos. Nerja retiene el calor más tiempo y es más húmeda; allí el alivio está a un paso, en el agua.'
      },
      winter: {
        label: 'En invierno',
        body: 'El invierno andaluz se subestima: de noche llega la humedad fría, y en la ladera Frigiliana coge antes la niebla y el aire fresco que la costa, más resguardada. Justo por eso **cada apartamento de AMARA tiene calefacción** — al mediodía en camiseta en la terraza, por la noche caldeado dentro.'
      },
      links: [
        { label: 'Calefacción y equipamiento', token: 'amenities' },
        { label: 'Invierno en Frigiliana', token: 'frigiliana_winter_stays' },
        { label: 'El tiempo abajo en Nerja', token: 'nerja_weather' }
      ]
    },
    en: {
      eyebrow: 'Mountain or coast',
      title: 'Six kilometres, two worlds',
      intro: 'Frigiliana sits on the hillside, around 300 metres above the sea — Nerja lies right on the coast below. As the crow flies it is barely six kilometres, yet the climate feels different. These are not weather-station figures, but what we live here day to day.',
      summer: {
        label: 'In summer',
        body: 'Up in the village, hot evenings almost always bring a breeze down the hillside that never reaches the coast — the nights feel lighter here, and by day the thick walls of the old-town houses, the shutters and **air conditioning in the bedroom** keep the apartments cool. Nerja holds the warmth longer and is more humid; there the relief is right at the door, in the water.'
      },
      winter: {
        label: 'In winter',
        body: 'The Andalusian winter is underrated: nights turn damp and cool, and on the hillside Frigiliana catches the mist and cooler air earlier than the sheltered coast. That is exactly why **every AMARA apartment has heating** — a T-shirt on the terrace at midday, warm indoors by evening.'
      },
      links: [
        { label: 'Heating & amenities', token: 'amenities' },
        { label: 'Winter in Frigiliana', token: 'frigiliana_winter_stays' },
        { label: 'The weather down in Nerja', token: 'nerja_weather' }
      ]
    },
    nl: {
      eyebrow: 'Berg of kust',
      title: 'Zes kilometer, twee werelden',
      intro: 'Frigiliana ligt tegen de helling, zo’n 300 meter boven zee — Nerja beneden pal aan de kust. Hemelsbreed amper zes kilometer, en toch voelt het klimaat anders. Dit zijn geen cijfers van een weerstation, maar wat wij hier dagelijks meemaken.',
      summer: {
        label: 'In de zomer',
        body: 'Boven in het dorp brengen hete avonden bijna altijd een briesje de helling af dat beneden aan zee ontbreekt — de nachten voelen hier lichter, en overdag houden de dikke muren van de oude huizen, de luiken en **airconditioning in de slaapkamer** de appartementen koel. Nerja houdt de warmte langer vast en is vochtiger; daar ligt de verkoeling vlak voor de deur, in het water.'
      },
      winter: {
        label: 'In de winter',
        body: 'De Andalusische winter wordt onderschat: ’s nachts wordt het klam, en op de helling vangt Frigiliana eerder mist en koele lucht dan de beschutte kust. Juist daarom heeft **elk AMARA-appartement verwarming** — ’s middags in T-shirt op het terras, ’s avonds warm binnen.'
      },
      links: [
        { label: 'Verwarming & voorzieningen', token: 'amenities' },
        { label: 'Winter in Frigiliana', token: 'frigiliana_winter_stays' },
        { label: 'Het weer beneden in Nerja', token: 'nerja_weather' }
      ]
    },
    sv: {
      eyebrow: 'Berg eller kust',
      title: 'Sex kilometer, två världar',
      intro: 'Frigiliana ligger i sluttningen, runt 300 meter över havet — Nerja nere vid kusten. Fågelvägen knappt sex kilometer, och ändå känns klimatet olika. Det här är inga siffror från en väderstation, utan vad vi lever med här varje dag.',
      summer: {
        label: 'På sommaren',
        body: 'Uppe i byn för heta kvällar nästan alltid med sig en bris ner för sluttningen som saknas nere vid havet — nätterna känns lättare här, och på dagen håller de tjocka murarna i gamla stans hus, fönsterluckorna och **luftkonditionering i sovrummet** lägenheterna svala. Nerja håller värmen längre och är fuktigare; där finns svalkan precis utanför dörren, i vattnet.'
      },
      winter: {
        label: 'På vintern',
        body: 'Den andalusiska vintern underskattas: om natten blir det råkallt, och i sluttningen fångar Frigiliana dimman och den svala luften tidigare än den skyddade kusten. Just därför har **varje AMARA-lägenhet värme** — T-shirt på terrassen mitt på dagen, varmt inomhus på kvällen.'
      },
      links: [
        { label: 'Värme & utrustning', token: 'amenities' },
        { label: 'Vintern i Frigiliana', token: 'frigiliana_winter_stays' },
        { label: 'Vädret nere i Nerja', token: 'nerja_weather' }
      ]
    }
  },
  nerja: {
    de: {
      eyebrow: 'Küste oder Berg',
      title: 'Sechs Kilometer, zwei Welten',
      intro: 'Nerja liegt direkt an der Küste, Frigiliana rund 300 Meter höher am Hang. Luftlinie sind es kaum sechs Kilometer, und doch fühlt sich das Klima anders an. Das sind keine Messwerte einer Wetterstation, sondern was wir hier tagtäglich erleben.',
      summer: {
        label: 'Im Sommer',
        body: 'Unten an der Küste ist die Sommerhitze feuchter und hält abends länger als oben im Dorf, wo ein Lüftchen den Hang herunterkommt. Der große Vorteil an der Küste: Die Abkühlung liegt direkt vor der Tür — ein Sprung ins Meer, und die heißesten Stunden sind vergessen.'
      },
      winter: {
        label: 'Im Winter',
        body: 'Andalusien im Winter wird unterschätzt: Nachts wird es klamm. Direkt am Meer bleibt Nerja meist eine Idee milder und windgeschützter als der Berg, warm wird es aber nur drinnen. Deshalb hat **jede AMARA-Wohnung eine Heizung** — tagsüber auf der Terrasse, abends drinnen behaglich.'
      },
      links: [
        { label: 'Heizung & Ausstattung', token: 'amenities' },
        { label: 'Winter in Nerja', token: 'nerja_winter_stays' },
        { label: 'Das Wetter oben in Frigiliana', token: 'weather_frigiliana' }
      ]
    },
    es: {
      eyebrow: 'Costa o montaña',
      title: 'Seis kilómetros, dos mundos',
      intro: 'Nerja está junto a la costa; Frigiliana, unos 300 metros más arriba, en la ladera. En línea recta apenas seis kilómetros, y aun así el clima se siente distinto. No son datos de una estación meteorológica, sino lo que vivimos aquí a diario.',
      summer: {
        label: 'En verano',
        body: 'Abajo, junto a la costa, el calor del verano es más húmedo y dura más por la tarde que arriba en el pueblo, donde baja una brisa por la ladera. La gran ventaja de la costa: el alivio está a un paso — un chapuzón en el mar y se olvidan las horas de más calor.'
      },
      winter: {
        label: 'En invierno',
        body: 'El invierno andaluz se subestima: de noche llega la humedad fría. Junto al mar, Nerja suele quedar algo más templada y resguardada del viento que la montaña, pero el calor solo llega dentro. Por eso **cada apartamento de AMARA tiene calefacción** — de día en la terraza, de noche a gusto dentro.'
      },
      links: [
        { label: 'Calefacción y equipamiento', token: 'amenities' },
        { label: 'Invierno en Nerja', token: 'nerja_winter_stays' },
        { label: 'El tiempo arriba en Frigiliana', token: 'weather_frigiliana' }
      ]
    },
    en: {
      eyebrow: 'Coast or mountain',
      title: 'Six kilometres, two worlds',
      intro: 'Nerja lies right on the coast, Frigiliana around 300 metres higher on the hillside. As the crow flies it is barely six kilometres, yet the climate feels different. These are not weather-station figures, but what we live here day to day.',
      summer: {
        label: 'In summer',
        body: 'Down on the coast the summer heat is more humid and lingers into the evening longer than up in the village, where a breeze comes down the hillside. The coast’s great advantage: the relief is right at the door — a plunge into the sea, and the hottest hours are forgotten.'
      },
      winter: {
        label: 'In winter',
        body: 'The Andalusian winter is underrated: nights turn damp and cool. Right by the sea, Nerja usually stays a touch milder and more sheltered from the wind than the mountain, but warmth only comes indoors. That is why **every AMARA apartment has heating** — on the terrace by day, cosy inside by evening.'
      },
      links: [
        { label: 'Heating & amenities', token: 'amenities' },
        { label: 'Winter in Nerja', token: 'nerja_winter_stays' },
        { label: 'The weather up in Frigiliana', token: 'weather_frigiliana' }
      ]
    },
    nl: {
      eyebrow: 'Kust of berg',
      title: 'Zes kilometer, twee werelden',
      intro: 'Nerja ligt pal aan de kust, Frigiliana zo’n 300 meter hoger tegen de helling. Hemelsbreed amper zes kilometer, en toch voelt het klimaat anders. Dit zijn geen cijfers van een weerstation, maar wat wij hier dagelijks meemaken.',
      summer: {
        label: 'In de zomer',
        body: 'Beneden aan de kust is de zomerhitte vochtiger en houdt ’s avonds langer aan dan boven in het dorp, waar een briesje de helling af komt. Het grote voordeel van de kust: de verkoeling ligt vlak voor de deur — een duik in zee en de heetste uren zijn vergeten.'
      },
      winter: {
        label: 'In de winter',
        body: 'De Andalusische winter wordt onderschat: ’s nachts wordt het klam. Pal aan zee blijft Nerja meestal een tikje zachter en windluwer dan de berg, maar warm wordt het alleen binnen. Daarom heeft **elk AMARA-appartement verwarming** — overdag op het terras, ’s avonds behaaglijk binnen.'
      },
      links: [
        { label: 'Verwarming & voorzieningen', token: 'amenities' },
        { label: 'Winter in Nerja', token: 'nerja_winter_stays' },
        { label: 'Het weer boven in Frigiliana', token: 'weather_frigiliana' }
      ]
    },
    sv: {
      eyebrow: 'Kust eller berg',
      title: 'Sex kilometer, två världar',
      intro: 'Nerja ligger vid kusten, Frigiliana runt 300 meter högre upp i sluttningen. Fågelvägen knappt sex kilometer, och ändå känns klimatet olika. Det här är inga siffror från en väderstation, utan vad vi lever med här varje dag.',
      summer: {
        label: 'På sommaren',
        body: 'Nere vid kusten är sommarvärmen fuktigare och dröjer sig kvar längre på kvällen än uppe i byn, där en bris kommer ner för sluttningen. Kustens stora fördel: svalkan finns precis utanför dörren — ett dopp i havet och de hetaste timmarna är glömda.'
      },
      winter: {
        label: 'På vintern',
        body: 'Den andalusiska vintern underskattas: om natten blir det råkallt. Precis vid havet håller sig Nerja oftast en aning mildare och mer vindskyddad än berget, men varmt blir det bara inomhus. Därför har **varje AMARA-lägenhet värme** — på terrassen om dagen, mysigt inne på kvällen.'
      },
      links: [
        { label: 'Värme & utrustning', token: 'amenities' },
        { label: 'Vintern i Nerja', token: 'nerja_winter_stays' },
        { label: 'Vädret uppe i Frigiliana', token: 'weather_frigiliana' }
      ]
    }
  },
  tarifa: {
    de: {
      eyebrow: 'Der Wind entscheidet',
      title: 'Zwei Winde, zwei Urlaube',
      intro: 'In Tarifa fragt man nicht zuerst nach der Sonne, sondern nach dem Wind. An der Straße von Gibraltar treffen zwei aufeinander — und welcher weht, macht aus demselben Tag einen ganz anderen Urlaub. Das ist keine Wettervorhersage, sondern was wir hier erleben.',
      summer: {
        label: 'Levante oder Poniente',
        body: 'Der **Levante** kommt heiß und brachial aus dem Osten: für Kitesurfer ein Fest, für alle anderen fliegt der Sand über den Strand. Der **Poniente** aus dem Westen ist milder und angenehmer. An vielen Tagen im Jahr weht es kräftig — dann ist die Frage nicht ob, sondern wo: je nach Richtung liegt die eine Bucht geschützt, während die offenen Strände tosen.'
      },
      winter: {
        label: 'Im Winter',
        body: 'Auch im Winter bleibt Tarifa mild — und windig: eines der wenigen Reviere, in denen sich das Kiten durch die ruhige Nebensaison zieht. Nach einem Tag im Wind wird es aber nur drinnen richtig warm, deshalb hat **jede AMARA-Wohnung eine Heizung**.'
      },
      links: [
        { label: 'Wind & Kitesurfen in Tarifa', token: 'tarifa_wind_kitesurfing_authority' },
        { label: 'Winter in Tarifa', token: 'tarifa_winter_stays' },
        { label: 'Heizung & Ausstattung', token: 'amenities' }
      ]
    },
    es: {
      eyebrow: 'Manda el viento',
      title: 'Dos vientos, dos vacaciones',
      intro: 'En Tarifa no se pregunta primero por el sol, sino por el viento. En el Estrecho de Gibraltar se enfrentan dos, y cuál sople convierte el mismo día en unas vacaciones muy distintas. No es una previsión del tiempo, sino lo que vivimos aquí.',
      summer: {
        label: 'Levante o Poniente',
        body: 'El **Levante** llega caliente y brusco desde el este: una fiesta para los kitesurfistas, pero para el resto la arena vuela por la playa. El **Poniente**, del oeste, es más suave y agradable. Muchos días del año sopla con fuerza — entonces la pregunta no es si, sino dónde: según la dirección, una cala queda resguardada mientras las playas abiertas rugen.'
      },
      winter: {
        label: 'En invierno',
        body: 'También en invierno Tarifa se mantiene suave — y con viento: es de los pocos sitios donde el kite se alarga en la tranquila temporada baja. Pero tras un día de viento, el calor solo llega dentro; por eso **cada apartamento de AMARA tiene calefacción**.'
      },
      links: [
        { label: 'Viento y kitesurf en Tarifa', token: 'tarifa_wind_kitesurfing_authority' },
        { label: 'Invierno en Tarifa', token: 'tarifa_winter_stays' },
        { label: 'Calefacción y equipamiento', token: 'amenities' }
      ]
    },
    en: {
      eyebrow: 'The wind decides',
      title: 'Two winds, two holidays',
      intro: 'In Tarifa you don’t ask about the sun first, but about the wind. Two of them meet at the Strait of Gibraltar, and which one blows turns the same day into a very different holiday. This is not a forecast, but what we live here.',
      summer: {
        label: 'Levante or Poniente',
        body: 'The **Levante** comes hot and fierce from the east: a party for kitesurfers, but for everyone else the sand flies across the beach. The **Poniente** from the west is milder and pleasant. On many days of the year it blows hard — then the question is not whether, but where: depending on the direction one cove sits sheltered while the open beaches roar.'
      },
      winter: {
        label: 'In winter',
        body: 'Tarifa stays mild in winter too — and windy: it is one of the few spots where kiting runs right through the quiet low season. But after a day in the wind, warmth only comes indoors, which is why **every AMARA apartment has heating**.'
      },
      links: [
        { label: 'Wind & kitesurfing in Tarifa', token: 'tarifa_wind_kitesurfing_authority' },
        { label: 'Winter in Tarifa', token: 'tarifa_winter_stays' },
        { label: 'Heating & amenities', token: 'amenities' }
      ]
    },
    nl: {
      eyebrow: 'De wind beslist',
      title: 'Twee winden, twee vakanties',
      intro: 'In Tarifa vraag je niet eerst naar de zon, maar naar de wind. Bij de Straat van Gibraltar botsen er twee, en welke waait maakt van dezelfde dag een heel andere vakantie. Dit is geen weersverwachting, maar wat wij hier meemaken.',
      summer: {
        label: 'Levante of Poniente',
        body: 'De **Levante** komt heet en fel uit het oosten: een feest voor kitesurfers, maar voor de rest vliegt het zand over het strand. De **Poniente** uit het westen is milder en aangenamer. Veel dagen van het jaar waait het stevig — dan is de vraag niet of, maar waar: afhankelijk van de richting ligt de ene baai luw terwijl de open stranden razen.'
      },
      winter: {
        label: 'In de winter',
        body: 'Ook in de winter blijft Tarifa zacht — en winderig: het is een van de weinige plekken waar het kiten doorloopt in het rustige laagseizoen. Maar na een dag in de wind wordt het alleen binnen echt warm, en daarom heeft **elk AMARA-appartement verwarming**.'
      },
      links: [
        { label: 'Wind & kitesurfen in Tarifa', token: 'tarifa_wind_kitesurfing_authority' },
        { label: 'Winter in Tarifa', token: 'tarifa_winter_stays' },
        { label: 'Verwarming & voorzieningen', token: 'amenities' }
      ]
    },
    sv: {
      eyebrow: 'Vinden avgör',
      title: 'Två vindar, två semestrar',
      intro: 'I Tarifa frågar man inte först om solen, utan om vinden. Vid Gibraltarsundet möts två, och vilken som blåser gör samma dag till en helt annan semester. Det här är ingen väderprognos, utan vad vi lever med här.',
      summer: {
        label: 'Levante eller Poniente',
        body: 'Den **Levante** kommer het och hård från öster: en fest för kitesurfare, men för alla andra flyger sanden över stranden. Den **Poniente** från väster är mildare och behagligare. Många dagar om året blåser det kraftigt — då är frågan inte om, utan var: beroende på riktning ligger en vik i lä medan de öppna stränderna dånar.'
      },
      winter: {
        label: 'På vintern',
        body: 'Även på vintern håller sig Tarifa milt — och blåsigt: det är en av få platser där kitingen fortsätter genom den lugna lågsäsongen. Men efter en dag i vinden blir det varmt bara inomhus, och därför har **varje AMARA-lägenhet värme**.'
      },
      links: [
        { label: 'Vind & kitesurfing i Tarifa', token: 'tarifa_wind_kitesurfing_authority' },
        { label: 'Vintern i Tarifa', token: 'tarifa_winter_stays' },
        { label: 'Värme & utrustning', token: 'amenities' }
      ]
    }
  }
};
