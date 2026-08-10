import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type FrigilianaLocationCtaToken =
  | 'PARKING'
  | 'COMPARISON'
  | 'WEATHER'
  | 'FRIGILIANA_STAYS'
  | 'AVAILABILITY';

export interface FrigilianaLocationCta {
  token: FrigilianaLocationCtaToken;
  label: string;
}

export interface FrigilianaLocationSubsection {
  title: string;
  paragraphs: string[];
  ctas: FrigilianaLocationCta[];
}

export interface FrigilianaLocationModule {
  title: string;
  paragraphs: string[];
  subsections: FrigilianaLocationSubsection[];
  ctas: FrigilianaLocationCta[];
}

export interface FrigilianaLocationArrival {
  title: string;
  steps: Array<{ num: string; headline: string; text: string }>;
  detailLabel: string;
}

export interface FrigilianaLocationFaq {
  title: string;
  items: Array<{ question: string; answer: string }>;
}

export interface FrigilianaLocationPlanningLink {
  label: string;
  text: string;
}

export interface FrigilianaLocationPlanning {
  eyebrow: string;
  title: string;
  intro: string;
  gettingThere: FrigilianaLocationPlanningLink;
  parking: FrigilianaLocationPlanningLink;
  comparison: FrigilianaLocationPlanningLink;
  weather: FrigilianaLocationPlanningLink;
  reviews: FrigilianaLocationPlanningLink;
  amenities: FrigilianaLocationPlanningLink;
}

export interface FrigilianaLocationPageCopy {
  heroKicker: string;
  h1: string;
  intro: string[];
  introPullLine: string;
  evening: FrigilianaLocationModule;
  history: FrigilianaLocationModule;
  villageLife: FrigilianaLocationModule;
  coast: FrigilianaLocationModule;
  arrival: FrigilianaLocationArrival;
  faq: FrigilianaLocationFaq;
  seasons: FrigilianaLocationModule;
  planning: FrigilianaLocationPlanning;
  decision: FrigilianaLocationModule;
}

export const frigilianaLocationSeo: AmaraAuthoringSeo = {
  version: '2026-08-10-frigiliana-location-final-v2.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-lounis/15-amara-frigiliana.jpg',
  languages: {
  "de": {
    "title": "In Frigiliana übernachten | Altstadt, Meer & AMARA",
    "description": "Entdeckt, warum es sich lohnt, in Frigiliana zu übernachten: historisches weißes Dorf, ruhige Abende, Nerja und Meer ganz nah – und Casa AMARA mittendrin.",
    "robots": "index, follow",
    "canonical": "auto"
  },
  "en": {
    "title": "Stay in Frigiliana | Historic Village, Coast & AMARA",
    "description": "Discover what it is like to stay in Frigiliana: quiet evenings, centuries-old streets, the Mediterranean nearby and Casa AMARA in the heart of the old town.",
    "robots": "index, follow",
    "canonical": "auto"
  },
  "es": {
    "title": "Alojarse en Frigiliana | Casco histórico, mar y AMARA",
    "description": "Descubre cómo es alojarse en Frigiliana: calles blancas, noches tranquilas, siglos de historia, el Mediterráneo cerca y Casa AMARA en pleno casco histórico.",
    "robots": "index, follow",
    "canonical": "auto"
  },
  "nl": {
    "title": "Overnachten in Frigiliana | Historisch dorp, zee & AMARA",
    "description": "Ontdek hoe het is om in Frigiliana te verblijven: witte straatjes, rustige avonden, eeuwenoude geschiedenis, de Middellandse Zee dichtbij en Casa AMARA midden in het oude dorp.",
    "robots": "index, follow",
    "canonical": "auto"
  },
  "sv": {
    "title": "Bo i Frigiliana | Historisk by, havet & AMARA",
    "description": "Upptäck hur det är att bo i Frigiliana: vita gränder, lugna kvällar, århundraden av historia, Medelhavet nära och Casa AMARA mitt i den gamla byn.",
    "robots": "index, follow",
    "canonical": "auto"
  }
}
};

export const frigilianaLocationNav = {
  brand: { en: 'Frigiliana', de: 'Frigiliana', es: 'Frigiliana', nl: 'Frigiliana', sv: 'Frigiliana' },
  links: [
    { token: 'location_frigiliana', label: { en: 'Frigiliana', de: 'Frigiliana', es: 'Frigiliana', nl: 'Frigiliana', sv: 'Frigiliana' } },
    { token: 'frigiliana_parking', label: { en: 'Parking', de: 'Parken', es: 'Aparcamiento', nl: 'Parkeren', sv: 'Parkering' } },
    { token: 'arrival_guide', label: { en: 'Arrival', de: 'Anreise', es: 'Llegada', nl: 'Aankomst', sv: 'Ankomst' } }
  ]
} as const;

export const frigilianaLocationHeroImageAlt: Record<AmaraLanguage, string> = {
  en: 'Frigiliana hillside homes in afternoon light',
  de: 'Häuser am Hang von Frigiliana im Nachmittagslicht',
  es: 'Casas en la ladera de Frigiliana a la luz de la tarde',
  nl: 'Huizen tegen de heuvel van Frigiliana in het middaglicht',
  sv: 'Hus på Frigilianas sluttning i eftermiddagsljus'
};

export const frigilianaLocationCopy = {
  nav: frigilianaLocationNav,
  "de": {
    "heroKicker": "FRIGILIANA · ANDALUSIEN",
    "h1": "In Frigiliana übernachten",
    "intro": [
      "Frigiliana gilt als eines der schönsten weißen Dörfer Spaniens. Viele kommen für ein paar Stunden wegen der weißen Häuser, verwinkelten Gassen, farbigen Türen und Ausblicke bis zum Mittelmeer.",
      "Wer bleibt, erlebt mehr: Wenn die Tagesbesucher gehen, werden die Gassen ruhiger; am nächsten Morgen seid ihr schon da, bevor der Ort wieder voller wird.",
      "Über mehrere Tage wird das Dorf zum Ausgangspunkt eures Urlaubs – für Frühstück und Abendessen zu Fuß, Ausflüge ans Meer und die Rückkehr in die Altstadt."
    ],
    "introPullLine": "Frigiliana nicht nur besuchen, sondern für einige Tage darin wohnen.",
    "evening": {
      "title": "Frigiliana am Abend – wenn das Dorf wieder ruhiger wird",
      "paragraphs": [
        "Am Abend werden die Gassen stiller. Vor den weißen Fassaden leuchten die farbigen Türen, kleine Bars und Restaurants liegen hinter Hausecken oder ein paar Stufen weiter oben, und warmes Licht fällt auf die Altstadt. Dazwischen öffnet sich immer wieder der Blick bis zum Mittelmeer. Man nimmt sich Zeit, statt nur die bekanntesten Gassen abzulaufen.",
        "Das Dorf ist nicht leer: Bewohner sind unterwegs, in den kleinen Lokalen wird gegessen und getrunken. Gerade diese Mischung aus Ruhe und weitergehendem Dorfleben macht den Abend besonders. Danach führt der Weg einfach zu Fuß durch die Gassen nach Hause – eine Seite Frigilianas, die ein Tagesausflug kaum zeigt.",
        "Am nächsten Morgen beginnt der Ort noch einmal anders: ruhig, bevor der Tagesbetrieb wieder einsetzt."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "In einem Dorf wohnen, dessen Geschichte noch in den Häusern steckt",
      "paragraphs": [
        "Frigilianas enger, unregelmäßiger Ortskern ist über Jahrhunderte entstanden. Seine Ebenen und Häuser folgen keinem modernen Raster. Casa AMARA steht rund 15 Meter von der Kirche San Antonio entfernt, mitten in dieser historischen Struktur.",
        "Teile der Bausubstanz sind vermutlich mehrere Jahrhunderte alt; einzelne Mauern könnten ungefähr 800 Jahre zurückreichen. Das genaue Alter kennt heute niemand, deshalb nennen wir bewusst keine künstlich präzise Jahreszahl.",
        "Die Geschichte zeigt sich in Wänden, die nicht immer rechtwinklig verlaufen, in Räumen, die dem alten Haus folgen, und in einem eigenen historischen Brunnen auf dem Grundstück. Man bemerkt sie nicht nur beim Rundgang durch das Dorf, sondern auch im Wohnen."
      ],
      "subsections": [
        {
          "title": "Ein altes Haus – aber kein Museum",
          "paragraphs": [
            "Von 2020 bis 2022 haben wir Casa AMARA sorgfältig restauriert, ohne ihre gewachsene Struktur glattzubügeln. Alte Oberflächen und unregelmäßige Räume sollten lesbar bleiben, während das Haus wieder zu einem angenehmen Urlaubsort wurde.",
            "Heute treffen die alten Mauern auf schnelles WLAN, Klimaanlage und Heizung. Großzügige Badezimmer und große Duschen – in mehreren Apartments Doppelduschen – waren uns wichtig, weil dieser Komfort in historischen Häusern keineswegs selbstverständlich ist. Gerade hier sollte sich historischer Charakter nicht wie ein Verzicht anfühlen.",
            "So wohnt ihr nicht in einer Kulisse, sondern für einige Tage mitten in Frigilianas Geschichte."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "Mitten im historischen Dorf – und trotzdem nicht ganz oben",
      "paragraphs": [
        "Frigiliana zieht sich den Hang hinauf. Gassen verschwinden hinter Hausecken, Treppen führen auf die nächste Ebene, und weiter oben öffnen sich neue Blicke über Dächer und Meer. Diese Topografie macht einen großen Teil der Schönheit des Dorfes aus.",
        "Für einen Spaziergang gehört dieses Auf und Ab dazu; bei einem mehrtägigen Aufenthalt zählt jedoch die genaue Lage. Häuser im oberen Barribarto sind reizvoll, doch Treppen und Steigungen werden dort Teil jedes Heimwegs.",
        "Unsere vier Unterkünfte liegen in der Calle Chorruelo bei San Antonio – mitten in der Altstadt, aber vergleichsweise weit unten. Frigiliana bleibt ein Hangdorf, doch ihr müsst nicht bei jeder Rückkehr bis in die höchsten Gassen hinauf. Für den Alltag eines längeren Aufenthalts ist das ein spürbarer Unterschied.",
        "Es macht einen Unterschied, ob ihr eine Steigung freiwillig erkundet oder sie mehrmals täglich auf dem Weg zur Unterkunft bewältigt."
      ],
      "subsections": [
        {
          "title": "Ein Urlaub, der direkt vor der Haustür beginnt",
          "paragraphs": [
            "Rund um den Kirchplatz, die Calle Real und die angrenzenden Gassen liegen Bars, Restaurants und das tägliche Dorfleben. Für Abendessen oder einen Spaziergang braucht ihr kein Auto, und ihr müsst den Abend nicht um eine Rückfahrt herum planen.",
            "Ihr öffnet die Tür, seid mitten im historischen Dorf und geht nach dem Abend einfach zu Fuß nach Hause. Aus einer Sehenswürdigkeit wird so der Ort, an dem euer Urlaubstag beginnt und endet."
          ],
          "ctas": []
        },
        {
          "title": "Und was ist mit dem Parken?",
          "paragraphs": [
            "Viele Online-Hinweise zum Parken in Frigiliana orientieren sich an Tagesbesuchern, die vormittags ankommen und möglichst nah an der Altstadt stehen möchten. Wer im Dorf übernachtet, hat einen anderen Rhythmus: Ihr seid morgens bereits hier und kehrt nach Strand oder Ausflug oft erst später zurück. Nach unserer langjährigen Erfahrung ist die Situation am späten Nachmittag oder Abend häufig entspannter als während des stärksten Tagesandrangs. Das ist keine Garantie; im Sommer, an Wochenenden und bei Veranstaltungen kann es weiterhin voll sein. Die konkreten Möglichkeiten erklären wir im Parkguide."
          ],
          "ctas": [
            { "token": "PARKING", "label": "Parken in Frigiliana" }
          ]
        }
      ],
      "ctas": []
    },
    "coast": {
      "title": "Im weißen Dorf wohnen – und das Mittelmeer trotzdem ganz nah",
      "paragraphs": [
        "Wer in Frigiliana wohnt, muss sich nicht zwischen Dorf und Meer entscheiden. Die Altstadt ist euer Zuhause; tagsüber erreicht ihr Nerja, die Küste und Maro für Strand oder Ausflüge und kehrt später wieder hinauf. Dadurch hat der Tag zwei unterschiedliche Stimmungen, ohne dass ihr die Unterkunft wechseln müsst.",
        "So verbindet der Aufenthalt das Leben in einem weißen andalusischen Dorf mit Tagen am Mittelmeer.",
        "Das Meer gehört zum Urlaub, ohne dass der Strand die Adresse bestimmen muss."
      ],
      "subsections": [
        {
          "title": "Braucht man dafür ein Auto?",
          "paragraphs": [
            "Ein Mietwagen bietet die größte Freiheit für verschiedene Strände, Maro und Ausflüge in der Region, ist für einen Aufenthalt in Frigiliana aber nicht zwingend.",
            "Für einen unkomplizierten Tag in Nerja oder am Strand kann auch der Bus funktionieren; Taxis sind eine weitere Möglichkeit. Wer überwiegend im Dorf bleibt und einzelne Küstentage plant, kann daher auch ohne Mietwagen auskommen. Entscheidend ist, wie weit ihr die Umgebung erkunden möchtet."
          ],
          "ctas": []
        },
        {
          "title": "Und wenn ich lieber direkt am Meer wohnen möchte?",
          "paragraphs": [
            "Wenn Strandnähe und ein Küstenort den Tagesrhythmus bestimmen sollen, passt Nerja möglicherweise besser. Wenn ihr Dorfleben, ruhigere Morgen und Abende und die Altstadt als Basis sucht, ist Frigiliana die bewusst andere Wahl.",
            "Beides ist nah beieinander – aber der Urlaub fühlt sich unterschiedlich an."
          ],
          "ctas": [
            { "token": "COMPARISON", "label": "Frigiliana oder Nerja vergleichen" }
          ]
        }
      ],
      "ctas": []
    },
    "arrival": {
      "title": "Die Ankunft",
      "steps": [
        { "num": "01", "headline": "Ab Málaga", "text": "Der Flughafen Málaga ist der übliche Ausgangspunkt. Weiter geht es per Mietwagen, Privattransfer oder mit öffentlichen Verkehrsmitteln über Nerja." },
        { "num": "02", "headline": "Verkehrsmittel wählen", "text": "Ein Mietwagen bietet die meiste Flexibilität. Bus und Taxi funktionieren ebenfalls – je nachdem, wie viel von der Region ihr erkunden möchtet." },
        { "num": "03", "headline": "Der letzte Fußweg", "text": "Frigiliana ist ein historisches Hangdorf. Der genaue letzte Weg hängt davon ab, wo und wie ihr ankommt; die Details findet ihr im Anreise-Guide." }
      ],
      "detailLabel": "Ausführlicher Anreise-Guide"
    },
    "faq": {
      "title": "Praktische Fragen",
      "items": [
        { "question": "Brauche ich in Frigiliana ein Auto?", "answer": "Nein. Das historische Dorf erlebt ihr zu Fuß, und für einfache Tage in Nerja oder am Strand können Bus oder Taxi funktionieren. Ein Mietwagen gibt euch mehr Freiheit für Maro, verschiedene Strände und Ausflüge in der Region." },
        { "question": "Ist das Parken bei einer Übernachtung schwierig?", "answer": "Viele Online-Hinweise beziehen sich auf den Andrang der Tagesbesucher. Nach unserer Erfahrung ist es später am Tag oft entspannter, eine Garantie gibt es aber nicht. Sommer, Wochenenden und Veranstaltungen können weiterhin voll sein; der Parkguide erklärt die Möglichkeiten." },
        { "question": "Ist Frigiliana sehr steil?", "answer": "Frigiliana liegt am Hang und hat Steigungen, Treppen und unebenes Pflaster. Casa AMARA liegt in der Calle Chorruelo vergleichsweise weit unten; das obere Barribarto ist steiler. Prüft für Gepäck trotzdem den genauen letzten Weg." },
        { "question": "Komme ich ohne Auto nach Nerja oder zum Strand?", "answer": "Ja, für einen unkomplizierten Tag in Nerja oder am Strand kann der Bus funktionieren; auch Taxis sind möglich. Ein Auto wird vor allem dann sinnvoll, wenn ihr mehrere Strände, Maro oder weitere Ziele flexibel verbinden möchtet." }
      ]
    },
    "seasons": {
      "title": "Wie sich ein Aufenthalt im Laufe des Jahres anfühlt",
      "paragraphs": [
        "Frigiliana ist ganzjährig ein Dorf, doch Licht, Tagesrhythmus und die Rolle der Küste verändern sich mit den Jahreszeiten."
      ],
      "subsections": [
        { "title": "Frühling – draußen leben und beides verbinden", "paragraphs": ["Der Frühling passt zu Spaziergängen, Terrassen und Ausflügen: morgens durchs Dorf, später ans Meer oder in die Landschaft und abends zurück nach Frigiliana. Dorf und Küste lassen sich dann besonders selbstverständlich verbinden."], "ctas": [] },
        { "title": "Sommer – früh los, ans Meer und abends zurück", "paragraphs": ["Im Sommer liegen Dorfspaziergänge am besten am Morgen und Abend; die heißeren Stunden passen eher zur Küste. In den Apartments sorgt die Klimaanlage bei der Rückkehr für Komfort und einen ruhigen Abschluss des Tages."], "ctas": [] },
        { "title": "Herbst – mehr Raum für Dorf und Region", "paragraphs": ["Im Herbst lässt sich der Tag oft freier zwischen Altstadt, Küste und regionalen Ausflügen planen, ohne dass die größte Hitze den Rhythmus so stark vorgibt. Das passt gut zu Gästen, die mehr von der Umgebung sehen möchten."], "ctas": [] },
        { "title": "Winter – kein Sommer, aber ein anderes Andalusien", "paragraphs": ["Winter ist kein falsches Sommerversprechen: Abende können kühl sein, deshalb zählt Komfort drinnen. Alle Apartments haben Heizung; Lounis, Zaid und Maha zusätzlich einen Pelletofen. So bleibt das historische Haus auch außerhalb der warmen Monate ein angenehmer Rückzugsort."], "ctas": [ { "token": "WEATHER", "label": "Wetter und Jahreszeiten im Detail" } ] }
      ],
      "ctas": []
    },
    "planning": {
      "eyebrow": "AUFENTHALT PLANEN",
      "title": "Nächste sinnvolle Schritte für Frigiliana",
      "intro": "Vergleicht vor der Buchung Anreise, Parken, Lageentscheidung, Jahreszeit und die Details eures Aufenthalts.",
      "gettingThere": { "label": "Anreise nach Frigiliana", "text": "Mietwagen, privaten Transfer und öffentliche Verbindungen über Nerja vergleichen." },
      "parking": { "label": "Parken in Frigiliana", "text": "Parkmöglichkeiten und den letzten Weg zur Altstadt verstehen." },
      "comparison": { "label": "Frigiliana oder Nerja", "text": "Dorfleben in Frigiliana mit dem strandnahen Nerja vergleichen." },
      "weather": { "label": "Wetter und Jahreszeiten", "text": "Monatswetter, Terrassenzeit und passende Saison einordnen." },
      "reviews": { "label": "Gästebewertungen", "text": "Lesen, was Gäste nach ihrem Aufenthalt erwähnen." },
      "amenities": { "label": "Komfort und Ausstattung", "text": "Komfortdetails der AMARA Unterkünfte vor der Buchung prüfen." }
    },
    "decision": {
      "title": "Für wen Frigiliana die richtige Wahl ist",
      "paragraphs": [
        "Frigiliana ist nicht die strandnahe Variante von Nerja. Es ist die Wahl für alle, die in einem weißen andalusischen Dorf wohnen, ruhigere Morgen und Abende erleben und Bars, Gassen und gelegentliche Mittelmeerblicke direkt vor der Tür haben möchten.",
        "Wenn das Dorf selbst Teil des Urlaubs sein soll – und die Küste ein leicht erreichbarer Tagesausflug –, ist Frigiliana eine starke Basis. Ihr entscheidet euch damit nicht gegen das Meer, sondern für einen anderen Ort zum Heimkommen."
      ],
      "subsections": [
        {
          "title": "Wenn ihr mittendrin wohnen möchtet",
          "paragraphs": [
            "Casa AMARA liegt rund 15 Meter von San Antonio entfernt, mitten im historischen Ortskern.",
            "Mehrere Jahrhunderte alte Strukturen, unregelmäßige Räume und der eigene alte Brunnen gehören zum Haus. Von 2020 bis 2022 haben wir es restauriert, um diesen Charakter zu bewahren.",
            "Heute verbindet Casa AMARA diese Geschichte mit großzügigen Badezimmern, großen Duschen, schnellem WLAN, Klimaanlage und Heizung – je nach Apartment auch mit privater Terrasse.",
            "Frigiliana lässt sich nicht neu bauen.",
            "Wir können euch nur einen Platz mittendrin anbieten."
          ],
          "ctas": [
            { "token": "FRIGILIANA_STAYS", "label": "Unsere Unterkünfte in Frigiliana ansehen" },
            { "token": "COMPARISON", "label": "Frigiliana oder Nerja – was passt besser?" },
            { "token": "AVAILABILITY", "label": "Verfügbarkeit in Frigiliana prüfen" }
          ]
        }
      ],
      "ctas": []
    }
  },
  "en": {
    "heroKicker": "FRIGILIANA · ANDALUSIA",
    "h1": "Stay in Frigiliana",
    "intro": [
      "Frigiliana is known as one of Spain's most beautiful white villages. Many people come for a few hours to see its white houses, winding lanes, coloured doors and views towards the Mediterranean.",
      "Staying changes the experience: the lanes quieten as day visitors leave, and the next morning you are already here before the village becomes busier again.",
      "Over several days, the village becomes the base for your holiday – breakfast and dinner on foot, time by the sea, and a return to the old town."
    ],
    "introPullLine": "Not simply visiting Frigiliana, but living inside it for a few days.",
    "evening": {
      "title": "Frigiliana in the evening – when the village quietens again",
      "paragraphs": [
        "In the evening the lanes grow quieter. Coloured doors stand out against white façades, small bars and restaurants appear around corners or a few steps higher, and warm light settles over the old town. Between the houses, the Mediterranean occasionally comes into view. There is time to notice the village rather than simply cover its best-known streets.",
        "The village is not empty: residents are still out, and people eat and drink in the small local places. That balance of calm and continuing village life is what makes the evening special. Afterwards, the route home is simply a walk through the lanes – a side of Frigiliana that a day visit rarely reveals.",
        "The next morning feels different again: calm, before the day's activity returns."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "Living in a village whose history remains inside its houses",
      "paragraphs": [
        "Frigiliana's close, irregular old town developed over centuries; its levels and houses follow no modern grid. Casa AMARA stands about 15 metres from San Antonio church, within that historic fabric.",
        "Parts of the building are probably several centuries old; some walls may date back around 800 years. Nobody knows their exact age, so we deliberately avoid an artificially precise date.",
        "The history appears in walls that do not always meet at right angles, rooms that follow the old structure, and a private historic well that remains on the property. You notice it not only on a walk through the village, but in the experience of staying here."
      ],
      "subsections": [
        {
          "title": "An old house – not a museum",
          "paragraphs": [
            "From 2020 to 2022, we carefully restored Casa AMARA without smoothing away its character. Old surfaces and irregular rooms were meant to remain visible while the house became a comfortable place for a holiday again.",
            "The old walls now come with fast Wi-Fi, air conditioning and heating. Generous bathrooms and large showers – including double showers in several apartments – mattered to us because that comfort is far from standard in historic houses. Historic character should not have to feel like a compromise.",
            "You are not staying in a stage set, but living inside part of Frigiliana's history."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "Inside the historic village – without staying at the very top",
      "paragraphs": [
        "Frigiliana climbs the hillside. Lanes disappear around corners, steps reach the next level, and higher up new views open across rooftops and towards the sea. This topography is a large part of the village's beauty.",
        "That rise and fall is part of a walk; over several days, the exact location of your stay matters. Houses high in the Barribarto can be beautiful, but their stairs and slopes become part of every journey home.",
        "Our four stays are on Calle Chorruelo beside San Antonio – in the old town, yet comparatively low down. Frigiliana remains a hillside village, but you do not have to climb to its highest lanes every time you return. Over a longer stay, that becomes a meaningful everyday difference.",
        "There is a real difference between exploring a climb by choice and repeating it several times a day on the way to your accommodation."
      ],
      "subsections": [
        {
          "title": "A holiday that begins at the front door",
          "paragraphs": [
            "Small bars, restaurants and everyday village life sit around the church square, Calle Real and the neighbouring lanes. You do not need a car for dinner or an evening walk, and the night never has to be organised around a return journey.",
            "Open the door and the historic village begins; when the evening is over, you simply walk home. A place normally seen as a sight becomes where your holiday days begin and end."
          ],
          "ctas": []
        },
        {
          "title": "What about parking?",
          "paragraphs": [
            "Much of the online parking advice for Frigiliana reflects the needs of day visitors who arrive in the morning and want to park close to the old town. Overnight guests have a different rhythm: you are already in the village early and may return from the beach or a day out later. In our long experience, late afternoon or evening is often more relaxed than the main day-visitor period. This is not a guarantee; summer, weekends and events can still be busy. Our Parking Guide explains the practical options."
          ],
          "ctas": [
            { "token": "PARKING", "label": "Parking in Frigiliana" }
          ]
        }
      ],
      "ctas": []
    },
    "coast": {
      "title": "Live in the white village – with the Mediterranean close by",
      "paragraphs": [
        "Staying in Frigiliana does not mean choosing between village and sea. The old town is home; during the day you can reach Nerja, the coast and Maro for beaches or outings, then return uphill. The day can hold two distinct atmospheres without changing accommodation.",
        "A stay here combines life in a white Andalusian village with days beside the Mediterranean.",
        "The sea can be part of the holiday without the beach deciding your address."
      ],
      "subsections": [
        {
          "title": "Do you need a car?",
          "paragraphs": [
            "A rental car gives you the most freedom for different beaches, Maro and trips around the region, but it is not required for a stay in Frigiliana.",
            "The bus can work for a straightforward day in Nerja or at the beach, and taxis are another option. Guests who stay mainly in the village and plan occasional coastal days can therefore manage without a rental car. The right choice depends on how widely you want to explore."
          ],
          "ctas": []
        },
        {
          "title": "What if I would rather stay beside the sea?",
          "paragraphs": [
            "If beach access and a coastal town should shape each day, Nerja may suit you better. If you want village life, quieter mornings and evenings, and the old town as your base, Frigiliana is the deliberately different choice.",
            "They are close together, but the holiday feels different."
          ],
          "ctas": [
            { "token": "COMPARISON", "label": "Compare Frigiliana and Nerja" }
          ]
        }
      ],
      "ctas": []
    },
    "arrival": {
      "title": "The Arrival",
      "steps": [
        { "num": "01", "headline": "From Málaga", "text": "Málaga Airport is the usual starting point. Continue by rental car, private transfer or public transport via Nerja." },
        { "num": "02", "headline": "Choose transport", "text": "A rental car offers the most flexibility. Bus and taxi can also work, depending on how much of the region you want to explore." },
        { "num": "03", "headline": "The final walk", "text": "Frigiliana is a historic hillside village. The exact final route depends on where and how you arrive; detailed guidance is in the Arrival Guide." }
      ],
      "detailLabel": "Detailed Arrival Guide"
    },
    "faq": {
      "title": "Practical questions",
      "items": [
        { "question": "Do I need a car to stay in Frigiliana?", "answer": "No. You can enjoy the historic village on foot, while bus or taxi can work for simple days in Nerja or at the beach. A rental car gives you more freedom for Maro, different beaches and trips around the region." },
        { "question": "Is parking difficult when staying overnight?", "answer": "Much online advice reflects the main day-visitor period. In our experience, parking is often more relaxed later in the day, but there is no guarantee. Summer, weekends and events can still be busy; the Parking Guide explains the options." },
        { "question": "Is Frigiliana very steep?", "answer": "Frigiliana is a hillside village with slopes, steps and uneven paving. Casa AMARA sits comparatively low on Calle Chorruelo; the upper Barribarto is steeper. You should still check the exact final route when arriving with luggage." },
        { "question": "Can I reach Nerja or the beach without a car?", "answer": "Yes. The bus can work for a straightforward day in Nerja or at the beach, and taxis are another option. A car matters most if you want to combine several beaches, Maro and wider regional trips freely." }
      ]
    },
    "seasons": {
      "title": "How a stay changes through the year",
      "paragraphs": [
        "Frigiliana remains a living village year-round, but its light, daily rhythm and relationship with the coast change with the seasons."
      ],
      "subsections": [
        { "title": "Spring – outdoors, with village and coast together", "paragraphs": ["Spring suits walking, terraces and days out: wander through the village in the morning, visit the coast or countryside later, and return to Frigiliana for the evening. Village and coast fit especially naturally into the same day."], "ctas": [] },
        { "title": "Summer – early starts, the coast, and evening returns", "paragraphs": ["In summer, village walks suit the morning and evening, while the hotter hours often belong to the coast. Air conditioning brings comfort when you return to the apartment and helps the day end calmly."], "ctas": [] },
        { "title": "Autumn – more room for village and region", "paragraphs": ["Autumn often makes it easier to divide the day between the old town, coast and regional outings without the strongest heat setting the rhythm. It suits guests who want to explore more of the surrounding area."], "ctas": [] },
        { "title": "Winter – not summer, but another Andalusia", "paragraphs": ["Winter is not a false promise of summer: evenings can be cool, so indoor comfort matters. Every apartment has heating; Lounis, Zaid and Maha also have pellet stoves. The historic house remains a comfortable retreat beyond the warmest months."], "ctas": [ { "token": "WEATHER", "label": "Explore weather and seasons" } ] }
      ],
      "ctas": []
    },
    "planning": {
      "eyebrow": "PLAN THE STAY",
      "title": "Useful next steps for Frigiliana",
      "intro": "Before booking, compare arrival, parking, the location decision, seasons and the details of your stay.",
      "gettingThere": { "label": "Getting to Frigiliana", "text": "Compare rental car, private transfer and public transport via Nerja." },
      "parking": { "label": "Parking in Frigiliana", "text": "Understand the parking options and final approach to the old town." },
      "comparison": { "label": "Frigiliana or Nerja", "text": "Compare village life in Frigiliana with beach-first Nerja." },
      "weather": { "label": "Weather & seasons", "text": "Plan monthly weather, terrace time and the right season." },
      "reviews": { "label": "Guest reviews", "text": "Read what guests mention after staying with AMARA." },
      "amenities": { "label": "Comfort & Amenities", "text": "Check the comfort details of AMARA stays before booking." }
    },
    "decision": {
      "title": "Who Frigiliana is right for",
      "paragraphs": [
        "Frigiliana is not a beach-first version of Nerja. It is for guests who want to live in a white Andalusian village, find quieter mornings and evenings, and have hidden bars, old lanes and occasional Mediterranean glimpses beyond the front door.",
        "If the village itself should be part of the holiday – with the coast close enough for a day out – Frigiliana is a compelling base. You are not choosing against the sea, but choosing a different place to come home to."
      ],
      "subsections": [
        {
          "title": "If you want to stay inside it",
          "paragraphs": [
            "Casa AMARA stands about 15 metres from San Antonio church, in the heart of the historic village.",
            "Centuries-old fabric, irregular rooms and the private old well remain part of the house. From 2020 to 2022, we restored it to preserve that character.",
            "Today Casa AMARA pairs its history with generous bathrooms, large showers, fast Wi-Fi, air conditioning and heating – plus a private terrace in selected apartments.",
            "Frigiliana cannot be rebuilt.",
            "We can only offer you a place inside it."
          ],
          "ctas": [
            { "token": "FRIGILIANA_STAYS", "label": "View our stays in Frigiliana" },
            { "token": "COMPARISON", "label": "Frigiliana or Nerja – which suits you?" },
            { "token": "AVAILABILITY", "label": "Check availability in Frigiliana" }
          ]
        }
      ],
      "ctas": []
    }
  },
  "es": {
    "heroKicker": "FRIGILIANA · ANDALUCÍA",
    "h1": "Alojarse en Frigiliana",
    "intro": [
      "Frigiliana está considerado uno de los pueblos blancos más bonitos de España. Muchos vienen unas horas para ver sus casas blancas, callejuelas, puertas de colores y vistas hacia el Mediterráneo.",
      "Quedarse cambia la experiencia: cuando se marchan los visitantes del día, las calles recuperan la calma; a la mañana siguiente ya estáis aquí antes de que el pueblo vuelva a animarse.",
      "Durante varios días, el pueblo se convierte en la base de las vacaciones: desayunos y cenas a pie, escapadas al mar y regreso al casco antiguo."
    ],
    "introPullLine": "No solo visitar Frigiliana, sino vivir dentro del pueblo durante unos días.",
    "evening": {
      "title": "Frigiliana al atardecer, cuando vuelve la calma",
      "paragraphs": [
        "Al caer la tarde, las calles se vuelven más tranquilas. Las puertas de colores resaltan sobre las fachadas blancas, pequeños bares y restaurantes aparecen tras una esquina o unos peldaños más arriba, y una luz cálida envuelve el casco antiguo. Entre las casas asoma de vez en cuando el Mediterráneo. Hay tiempo para mirar sin recorrer solo los lugares más conocidos.",
        "El pueblo no está vacío: los vecinos siguen haciendo su vida y en los locales se cena y se conversa. Ese equilibrio entre calma y vida cotidiana da personalidad a la noche. Después, volver a casa es simplemente caminar por las callejuelas, una cara de Frigiliana que rara vez muestra una visita de unas horas.",
        "A la mañana siguiente, el pueblo vuelve a sentirse distinto: sereno antes de que empiece el movimiento del día."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "Vivir en un pueblo cuya historia sigue dentro de las casas",
      "paragraphs": [
        "El casco antiguo, estrecho e irregular, se formó a lo largo de los siglos; sus niveles y casas no siguen una cuadrícula moderna. Casa AMARA está a unos 15 metros de la iglesia de San Antonio, dentro de ese tejido histórico.",
        "Parte de la construcción probablemente tiene varios siglos; algunos muros podrían remontarse unos 800 años. Nadie conoce su edad exacta, así que evitamos dar una fecha artificialmente precisa.",
        "La historia se percibe en paredes que no siempre forman ángulos rectos, estancias que siguen la estructura antigua y un pozo histórico privado que aún se conserva en la propiedad. No solo se observa al pasear: también forma parte de la experiencia de alojarse aquí."
      ],
      "subsections": [
        {
          "title": "Una casa antigua, no un museo",
          "paragraphs": [
            "Entre 2020 y 2022 restauramos Casa AMARA con cuidado, sin borrar el carácter que había adquirido con el tiempo. Queríamos mantener visibles las superficies y geometrías irregulares sin renunciar a un alojamiento agradable.",
            "Los muros antiguos conviven hoy con wifi rápido, aire acondicionado y calefacción. Dimos especial importancia a los baños amplios y las duchas grandes —dobles en varios apartamentos— porque ese confort no es habitual en una casa histórica. El carácter antiguo no tenía por qué sentirse como una renuncia.",
            "No os alojáis en un decorado: durante unos días vivís dentro de la historia de Frigiliana."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "En pleno pueblo histórico, sin alojarse en la parte más alta",
      "paragraphs": [
        "Frigiliana sube por la ladera. Las calles desaparecen tras las esquinas, las escaleras llevan al siguiente nivel y más arriba se abren nuevas vistas sobre los tejados y hacia el mar.",
        "Ese desnivel forma parte del paseo; durante una estancia de varios días, la ubicación exacta importa. Las casas de la parte alta del Barribarto pueden ser preciosas, pero sus escaleras y pendientes acompañan cada regreso.",
        "Nuestros cuatro alojamientos están en la calle Chorruelo, junto a San Antonio: en el casco antiguo, pero relativamente abajo. Frigiliana sigue siendo un pueblo en cuesta, aunque no tendréis que subir hasta las calles más altas cada vez que volváis. Durante una estancia larga, esa diferencia se nota en el día a día.",
        "No es lo mismo explorar una pendiente por gusto que repetirla varias veces al día para llegar al alojamiento."
      ],
      "subsections": [
        {
          "title": "Unas vacaciones que empiezan al abrir la puerta",
          "paragraphs": [
            "Alrededor de la plaza de la iglesia, la calle Real y las callejuelas cercanas hay bares, restaurantes y vida cotidiana. Para cenar o pasear al atardecer no necesitáis coche.",
            "Abrís la puerta y empieza el pueblo histórico; al terminar la noche, volvéis andando a casa."
          ],
          "ctas": []
        },
        {
          "title": "¿Y el aparcamiento?",
          "paragraphs": [
            "Gran parte de la información online sobre aparcar en Frigiliana responde a las necesidades de quienes llegan por la mañana para pasar unas horas y quieren dejar el coche cerca del casco antiguo. Al alojarse en el pueblo, el ritmo es distinto: ya estáis aquí temprano y quizá regreséis de la playa o de una excursión más tarde. Según nuestra larga experiencia, al final de la tarde o por la noche la situación suele ser más relajada que durante la mayor afluencia diurna. No es una garantía; en verano, fines de semana y eventos puede seguir habiendo mucha gente. Nuestra guía explica las opciones."
          ],
          "ctas": [
            { "token": "PARKING", "label": "Aparcar en Frigiliana" }
          ]
        }
      ],
      "ctas": []
    },
    "coast": {
      "title": "Vivir en el pueblo blanco con el Mediterráneo muy cerca",
      "paragraphs": [
        "Alojarse en Frigiliana no obliga a elegir entre pueblo y mar. El casco antiguo es vuestra casa; durante el día podéis acercaros a Nerja, la costa y Maro para ir a la playa o hacer una excursión y después regresar a la sierra. El mismo día puede tener dos ambientes distintos sin cambiar de alojamiento.",
        "La estancia combina la vida en un pueblo blanco andaluz con días junto al Mediterráneo.",
        "El mar puede formar parte de las vacaciones sin decidir dónde dormís."
      ],
      "subsections": [
        {
          "title": "¿Hace falta coche?",
          "paragraphs": [
            "Un coche de alquiler ofrece la mayor libertad para conocer distintas playas, Maro y otros lugares de la región, pero no es imprescindible para alojarse en Frigiliana.",
            "El autobús puede servir para un día sencillo en Nerja o en la playa, y el taxi es otra opción. La decisión depende de cuánto queráis explorar."
          ],
          "ctas": []
        },
        {
          "title": "¿Y si prefiero alojarme junto al mar?",
          "paragraphs": [
            "Si queréis que la playa y una localidad costera marquen el ritmo diario, quizá encaje mejor Nerja. Si buscáis vida de pueblo, mañanas y noches más tranquilas y el casco antiguo como base, Frigiliana es una elección deliberadamente distinta.",
            "Están muy cerca, pero las vacaciones se viven de otra manera."
          ],
          "ctas": [
            { "token": "COMPARISON", "label": "Comparar Frigiliana y Nerja" }
          ]
        }
      ],
      "ctas": []
    },
    "arrival": {
      "title": "La llegada",
      "steps": [
        { "num": "01", "headline": "Desde Málaga", "text": "El aeropuerto de Málaga es el punto de partida habitual. Desde allí podéis seguir en coche de alquiler, transfer privado o transporte público vía Nerja." },
        { "num": "02", "headline": "Elegir transporte", "text": "El coche de alquiler da la mayor flexibilidad. Autobús y taxi también pueden funcionar, según cuánto queráis recorrer la región." },
        { "num": "03", "headline": "El último tramo a pie", "text": "Frigiliana es un pueblo histórico en una ladera. El recorrido final depende de dónde y cómo lleguéis; la guía de llegada explica los detalles." }
      ],
      "detailLabel": "Guía detallada de llegada"
    },
    "faq": {
      "title": "Preguntas prácticas",
      "items": [
        { "question": "¿Necesito coche para alojarme en Frigiliana?", "answer": "No. El casco histórico se disfruta a pie, y el autobús o el taxi pueden servir para días sencillos en Nerja o en la playa. Un coche de alquiler da más libertad para conocer Maro, distintas playas y otros lugares de la región." },
        { "question": "¿Es difícil aparcar al pasar la noche?", "answer": "Muchos consejos online reflejan la mayor afluencia de visitantes diurnos. Según nuestra experiencia, más tarde suele ser más fácil, pero no hay garantía. En verano, fines de semana y eventos puede seguir habiendo mucha gente; la guía de aparcamiento explica las opciones." },
        { "question": "¿Frigiliana tiene muchas cuestas?", "answer": "Frigiliana está en una ladera y tiene pendientes, escaleras y pavimento irregular. Casa AMARA queda relativamente abajo, en la calle Chorruelo; el Barribarto superior es más empinado. Aun así, conviene revisar el recorrido final si llegáis con equipaje." },
        { "question": "¿Puedo ir a Nerja o a la playa sin coche?", "answer": "Sí. El autobús puede servir para un día sencillo en Nerja o en la playa, y también hay taxis. El coche resulta especialmente útil si queréis enlazar distintas playas, Maro y excursiones por la región con libertad." }
      ]
    },
    "seasons": {
      "title": "Cómo cambia la estancia a lo largo del año",
      "paragraphs": [
        "Frigiliana mantiene su vida de pueblo todo el año, pero la luz, el ritmo diario y la relación con la costa cambian con las estaciones."
      ],
      "subsections": [
        { "title": "Primavera: vida al aire libre, pueblo y costa", "paragraphs": ["La primavera invita a caminar, disfrutar de las terrazas y salir de excursión: pueblo por la mañana, costa o campo después y regreso a Frigiliana al atardecer. Ambos paisajes se combinan con naturalidad."], "ctas": [] },
        { "title": "Verano: empezar temprano, bajar al mar y volver de noche", "paragraphs": ["En verano, los paseos por el pueblo encajan mejor por la mañana y al atardecer; las horas más calurosas suelen pedir costa. Al volver, el aire acondicionado de los apartamentos ayuda a terminar el día con comodidad."], "ctas": [] },
        { "title": "Otoño: más libertad para recorrer pueblo y región", "paragraphs": ["En otoño suele ser más fácil repartir el día entre casco antiguo, costa y excursiones por la zona sin que el calor más intenso marque tanto el horario. Es una época agradecida para recorrer el entorno."], "ctas": [] },
        { "title": "Invierno: no es verano, sino otra Andalucía", "paragraphs": ["El invierno no promete un verano que no existe: las noches pueden ser frescas y el confort interior importa. Todos los apartamentos tienen calefacción; Lounis, Zaid y Maha, además, estufa de pellets. La casa histórica sigue siendo un refugio agradable fuera de los meses cálidos."], "ctas": [ { "token": "WEATHER", "label": "Ver clima y estaciones" } ] }
      ],
      "ctas": []
    },
    "planning": {
      "eyebrow": "PLANIFICAR LA ESTANCIA",
      "title": "Próximos pasos útiles para Frigiliana",
      "intro": "Antes de reservar, comparad llegada, aparcamiento, ubicación, época del año y detalles de la estancia.",
      "gettingThere": { "label": "Cómo llegar a Frigiliana", "text": "Comparar coche de alquiler, transfer privado y transporte público vía Nerja." },
      "parking": { "label": "Aparcamiento en Frigiliana", "text": "Entender las opciones para aparcar y el último acceso al casco antiguo." },
      "comparison": { "label": "Frigiliana o Nerja", "text": "Comparar la vida de pueblo en Frigiliana con Nerja junto al mar." },
      "weather": { "label": "Clima y estaciones", "text": "Elegir época, terrazas y planes con el clima de cada mes." },
      "reviews": { "label": "Reseñas de huéspedes", "text": "Leer qué cuentan los huéspedes después de alojarse con AMARA." },
      "amenities": { "label": "Confort y servicios", "text": "Revisar el confort de los alojamientos AMARA antes de reservar." }
    },
    "decision": {
      "title": "Para quién es Frigiliana la elección adecuada",
      "paragraphs": [
        "Frigiliana no es una versión de Nerja centrada en la playa. Es para quien quiere vivir en un pueblo blanco andaluz, disfrutar de mañanas y noches más tranquilas y encontrar bares escondidos, callejuelas y algún destello del Mediterráneo al abrir la puerta.",
        "Si el propio pueblo debe formar parte de las vacaciones —con la costa cerca para pasar el día—, Frigiliana es una base con mucho sentido."
      ],
      "subsections": [
        {
          "title": "Si queréis alojaros en pleno centro",
          "paragraphs": [
            "Casa AMARA está a unos 15 metros de la iglesia de San Antonio, en pleno casco histórico.",
            "La construcción de varios siglos, las estancias irregulares y el antiguo pozo privado siguen formando parte de la casa. Entre 2020 y 2022 la restauramos para conservar ese carácter.",
            "Hoy Casa AMARA une esa historia con baños amplios, duchas grandes, wifi rápido, aire acondicionado y calefacción, además de terraza privada en determinados apartamentos.",
            "Frigiliana no se puede volver a construir.",
            "Solo podemos ofreceros un lugar dentro de ella."
          ],
          "ctas": [
            { "token": "FRIGILIANA_STAYS", "label": "Ver nuestros alojamientos en Frigiliana" },
            { "token": "COMPARISON", "label": "Frigiliana o Nerja: ¿cuál os encaja?" },
            { "token": "AVAILABILITY", "label": "Ver disponibilidad en Frigiliana" }
          ]
        }
      ],
      "ctas": []
    }
  },
  "nl": {
    "heroKicker": "FRIGILIANA · ANDALUSIË",
    "h1": "Overnachten in Frigiliana",
    "intro": [
      "Frigiliana geldt als een van de mooiste witte dorpen van Spanje. Veel bezoekers komen een paar uur voor de witte huizen, kronkelstraatjes, gekleurde deuren en uitzichten richting de Middellandse Zee.",
      "Blijven overnachten verandert de ervaring: wanneer de dagjesmensen vertrekken, worden de straten rustiger; de volgende ochtend zijn jullie er al voordat het dorp weer levendiger wordt.",
      "Tijdens een verblijf van enkele dagen wordt het dorp de basis van jullie vakantie: ontbijten en dineren op loopafstand, tijd aan zee en thuiskomen in de oude kern."
    ],
    "introPullLine": "Frigiliana niet alleen bezoeken, maar er een paar dagen middenin leven.",
    "evening": {
      "title": "Frigiliana in de avond, wanneer de rust terugkeert",
      "paragraphs": [
        "'s Avonds worden de straatjes stiller. Gekleurde deuren vallen op tegen witte gevels, kleine bars en restaurants verschijnen om een hoek of een paar treden hoger, en warm licht ligt over de oude kern. Tussen de huizen door duikt af en toe de Middellandse Zee op. Er is tijd om echt te kijken in plaats van alleen de bekendste straten af te lopen.",
        "Het dorp is niet leeg: bewoners zijn nog onderweg en in de kleine zaken wordt gegeten en gedronken. Juist die combinatie van rust en doorgaand dorpsleven maakt de avond bijzonder. Daarna wandel je gewoon door de straatjes naar huis – een kant van Frigiliana die een dagbezoek zelden laat zien.",
        "De volgende ochtend voelt het dorp opnieuw anders: kalm voordat de drukte van de dag terugkeert."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "Wonen in een dorp waarvan de geschiedenis nog in de huizen zit",
      "paragraphs": [
        "De compacte, onregelmatige oude kern van Frigiliana groeide door de eeuwen heen; de niveaus en huizen volgen geen modern stratenplan. Casa AMARA staat op ongeveer 15 meter van de kerk van San Antonio, midden in die historische structuur.",
        "Delen van het gebouw zijn vermoedelijk eeuwenoud; sommige muren kunnen ongeveer 800 jaar oud zijn. Niemand kent de precieze leeftijd, daarom noemen we bewust geen kunstmatig exact bouwjaar.",
        "Die geschiedenis is zichtbaar in muren die niet altijd haaks staan, kamers die de oude bouwstructuur volgen en een eigen historische waterput die nog op het terrein aanwezig is. Je merkt haar niet alleen tijdens een wandeling, maar ook wanneer je hier woont."
      ],
      "subsections": [
        {
          "title": "Een oud huis, geen museum",
          "paragraphs": [
            "Van 2020 tot 2022 hebben we Casa AMARA zorgvuldig gerestaureerd zonder het gegroeide karakter weg te werken. Oude oppervlakken en onregelmatige kamers mochten zichtbaar blijven, terwijl het huis opnieuw een comfortabele vakantieplek werd.",
            "Achter de oude muren vinden jullie nu snelle wifi, airconditioning en verwarming. Ruime badkamers en grote douches – in meerdere appartementen dubbele douches – waren belangrijk, omdat dit comfort in historische huizen allerminst vanzelfsprekend is. Historisch karakter hoeft niet als een compromis te voelen.",
            "Jullie verblijven niet in een decor, maar leven enkele dagen midden in de geschiedenis van Frigiliana."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "Midden in het historische dorp, zonder helemaal bovenaan te wonen",
      "paragraphs": [
        "Frigiliana klimt tegen de heuvel op. Straatjes verdwijnen achter hoeken, trappen leiden naar een volgend niveau en hogerop openen zich nieuwe uitzichten over daken en richting zee. Die topografie bepaalt een groot deel van de schoonheid van het dorp.",
        "Dat stijgen en dalen hoort bij een wandeling; bij een verblijf van meerdere dagen telt de precieze ligging. Huizen hoog in het Barribarto kunnen prachtig zijn, maar de trappen en hellingen horen dan bij elke weg naar huis.",
        "Onze vier verblijven liggen aan Calle Chorruelo naast San Antonio – in de oude kern, maar relatief laag. Frigiliana blijft een heuveldorp, alleen hoeven jullie niet bij elke terugkeer naar de hoogste straatjes te klimmen. Tijdens een langer verblijf merk je dat verschil in het dagelijks leven.",
        "Het maakt verschil of je een helling vrijwillig verkent of die meerdere keren per dag naar je accommodatie aflegt."
      ],
      "subsections": [
        {
          "title": "Een vakantie die bij de voordeur begint",
          "paragraphs": [
            "Rond het kerkplein, Calle Real en de omliggende straatjes liggen bars, restaurants en het dagelijkse dorpsleven. Voor een diner of avondwandeling hebben jullie geen auto nodig en hoeft de avond niet rond een terugrit te worden gepland.",
            "Open de deur en het historische dorp begint; na afloop lopen jullie gewoon naar huis. Wat voor veel mensen een bezienswaardigheid is, wordt de plek waar jullie vakantiedag begint en eindigt."
          ],
          "ctas": []
        },
        {
          "title": "En het parkeren?",
          "paragraphs": [
            "Veel online parkeeradvies voor Frigiliana is gericht op dagjesmensen die 's ochtends aankomen en zo dicht mogelijk bij de oude kern willen parkeren. Wie in het dorp overnacht, heeft een ander ritme: jullie zijn er vroeg al en keren na het strand of een uitstapje vaak later terug. Volgens onze jarenlange ervaring is de situatie aan het einde van de middag of in de avond vaak rustiger dan tijdens de grootste drukte overdag. Dat is geen garantie; in de zomer, weekenden en bij evenementen kan het nog steeds druk zijn. Onze parkeergids legt de mogelijkheden uit."
          ],
          "ctas": [
            { "token": "PARKING", "label": "Parkeren in Frigiliana" }
          ]
        }
      ],
      "ctas": []
    },
    "coast": {
      "title": "Wonen in het witte dorp, met de Middellandse Zee dichtbij",
      "paragraphs": [
        "Een verblijf in Frigiliana betekent niet kiezen tussen dorp en zee. De oude kern is jullie thuis; overdag gaan jullie naar Nerja, de kust of Maro voor het strand of een uitstapje en keren later weer de heuvel op. Eén dag kan zo twee verschillende sferen hebben zonder van accommodatie te wisselen.",
        "Zo combineert de vakantie het leven in een wit Andalusisch dorp met dagen aan de Middellandse Zee.",
        "De zee kan bij de vakantie horen zonder dat het strand jullie adres bepaalt."
      ],
      "subsections": [
        {
          "title": "Heb je daarvoor een auto nodig?",
          "paragraphs": [
            "Een huurauto geeft de meeste vrijheid voor verschillende stranden, Maro en uitstapjes in de regio, maar is niet noodzakelijk voor een verblijf in Frigiliana.",
            "De bus kan geschikt zijn voor een eenvoudige dag in Nerja of aan het strand; ook een taxi is mogelijk. Wie vooral in het dorp blijft en af en toe naar de kust wil, kan daarom zonder huurauto uit de voeten. De juiste keuze hangt af van hoeveel jullie willen ontdekken."
          ],
          "ctas": []
        },
        {
          "title": "En als ik liever direct aan zee verblijf?",
          "paragraphs": [
            "Als strand en kustplaats het dagelijkse ritme moeten bepalen, past Nerja misschien beter. Zoeken jullie dorpsleven, rustigere ochtenden en avonden en de oude kern als basis, dan is Frigiliana bewust een andere keuze.",
            "Ze liggen dicht bij elkaar, maar de vakantie voelt anders."
          ],
          "ctas": [
            { "token": "COMPARISON", "label": "Vergelijk Frigiliana en Nerja" }
          ]
        }
      ],
      "ctas": []
    },
    "arrival": {
      "title": "De aankomst",
      "steps": [
        { "num": "01", "headline": "Vanuit Málaga", "text": "De luchthaven van Málaga is het gebruikelijke vertrekpunt. Reis verder met een huurauto, privétransfer of openbaar vervoer via Nerja." },
        { "num": "02", "headline": "Kies vervoer", "text": "Een huurauto biedt de meeste vrijheid. Bus en taxi kunnen ook werken, afhankelijk van hoeveel van de regio jullie willen ontdekken." },
        { "num": "03", "headline": "Het laatste stuk lopen", "text": "Frigiliana is een historisch heuveldorp. De precieze laatste route hangt af van waar en hoe jullie aankomen; de aankomstgids geeft alle details." }
      ],
      "detailLabel": "Uitgebreide aankomstgids"
    },
    "faq": {
      "title": "Praktische vragen",
      "items": [
        { "question": "Heb ik een auto nodig in Frigiliana?", "answer": "Nee. De historische kern ontdek je te voet, terwijl bus of taxi kan werken voor een eenvoudige dag in Nerja of aan het strand. Een huurauto geeft meer vrijheid voor Maro, verschillende stranden en uitstapjes in de regio." },
        { "question": "Is parkeren lastig als je blijft overnachten?", "answer": "Veel online advies gaat over de grootste drukte van dagjesmensen. Volgens onze ervaring is het later op de dag vaak rustiger, maar er is geen garantie. Zomer, weekenden en evenementen kunnen nog steeds druk zijn; de parkeergids legt de opties uit." },
        { "question": "Is Frigiliana erg steil?", "answer": "Frigiliana ligt op een heuvel en heeft hellingen, trappen en ongelijke bestrating. Casa AMARA ligt relatief laag aan Calle Chorruelo; het hogere Barribarto is steiler. Controleer bij aankomst met bagage toch de precieze laatste route." },
        { "question": "Kan ik zonder auto naar Nerja of het strand?", "answer": "Ja. De bus kan geschikt zijn voor een eenvoudige dag in Nerja of aan het strand, en een taxi is ook mogelijk. Een auto is vooral handig als jullie verschillende stranden, Maro en verdere uitstapjes vrij willen combineren." }
      ]
    },
    "seasons": {
      "title": "Hoe een verblijf door het jaar heen verandert",
      "paragraphs": [
        "Frigiliana blijft het hele jaar een levend dorp, maar het licht, dagritme en de relatie met de kust veranderen met de seizoenen."
      ],
      "subsections": [
        { "title": "Lente – buiten zijn, met dorp en kust", "paragraphs": ["De lente past bij wandelen, terrassen en uitstapjes: 's ochtends door het dorp, later naar zee of het landschap in en 's avonds terug naar Frigiliana. Dorp en kust laten zich dan heel natuurlijk combineren."], "ctas": [] },
        { "title": "Zomer – vroeg op pad, naar zee en 's avonds terug", "paragraphs": ["In de zomer passen dorpswandelingen het best bij ochtend en avond; de warmere uren horen eerder bij de kust. Bij terugkomst zorgt airconditioning in de appartementen voor comfort en een rustige afsluiting van de dag."], "ctas": [] },
        { "title": "Herfst – meer ruimte voor dorp en regio", "paragraphs": ["In de herfst verdeel je de dag vaak gemakkelijker tussen de oude kern, kust en uitstapjes in de regio zonder dat de grootste hitte het ritme sterk bepaalt. Dat past bij wie meer van de omgeving wil zien."], "ctas": [] },
        { "title": "Winter – geen zomer, maar een ander Andalusië", "paragraphs": ["De winter belooft geen zomer: avonden kunnen koel zijn en comfort binnen telt. Alle appartementen hebben verwarming; Lounis, Zaid en Maha daarnaast een pelletkachel. Zo blijft het historische huis ook buiten de warme maanden een aangename plek."], "ctas": [ { "token": "WEATHER", "label": "Bekijk weer en seizoenen" } ] }
      ],
      "ctas": []
    },
    "planning": {
      "eyebrow": "PLAN HET VERBLIJF",
      "title": "Handige volgende stappen voor Frigiliana",
      "intro": "Vergelijk voor het boeken aankomst, parkeren, de locatiekeuze, seizoenen en verblijfsdetails.",
      "gettingThere": { "label": "Naar Frigiliana reizen", "text": "Vergelijk huurauto, privétransfer en openbaar vervoer via Nerja." },
      "parking": { "label": "Parkeren in Frigiliana", "text": "Bekijk parkeeropties en de laatste route naar de oude kern." },
      "comparison": { "label": "Frigiliana of Nerja", "text": "Vergelijk het dorpsleven in Frigiliana met Nerja aan zee." },
      "weather": { "label": "Weer & seizoenen", "text": "Kies maand, terrasmomenten en seizoen met meer context." },
      "reviews": { "label": "Gastbeoordelingen", "text": "Lees wat gasten na een verblijf bij AMARA vertellen." },
      "amenities": { "label": "Comfort en voorzieningen", "text": "Controleer het comfort van AMARA-verblijven vóór het boeken." }
    },
    "decision": {
      "title": "Voor wie Frigiliana de juiste keuze is",
      "paragraphs": [
        "Frigiliana is niet de strandgerichte versie van Nerja. Het is voor gasten die in een wit Andalusisch dorp willen wonen, rustigere ochtenden en avonden zoeken en bij de voordeur verborgen bars, oude straatjes en af en toe een glimp van de Middellandse Zee willen vinden.",
        "Als het dorp zelf onderdeel van de vakantie moet zijn – met de kust dichtbij voor een dagje uit – is Frigiliana een aantrekkelijke basis. Jullie kiezen niet tegen de zee, maar voor een andere plek om thuis te komen."
      ],
      "subsections": [
        {
          "title": "Als jullie er middenin willen verblijven",
          "paragraphs": [
            "Casa AMARA staat op ongeveer 15 meter van de kerk van San Antonio, midden in de historische kern.",
            "Eeuwenoude structuren, onregelmatige kamers en de eigen oude waterput horen nog altijd bij het huis. Van 2020 tot 2022 hebben we het gerestaureerd om dat karakter te behouden.",
            "Vandaag combineert Casa AMARA die geschiedenis met ruime badkamers, grote douches, snelle wifi, airconditioning en verwarming – en in bepaalde appartementen een privéterras.",
            "Frigiliana kan niet opnieuw worden gebouwd.",
            "We kunnen jullie alleen een plek middenin aanbieden."
          ],
          "ctas": [
            { "token": "FRIGILIANA_STAYS", "label": "Bekijk onze verblijven in Frigiliana" },
            { "token": "COMPARISON", "label": "Frigiliana of Nerja – wat past bij jullie?" },
            { "token": "AVAILABILITY", "label": "Bekijk beschikbaarheid in Frigiliana" }
          ]
        }
      ],
      "ctas": []
    }
  },
  "sv": {
    "heroKicker": "FRIGILIANA · ANDALUSIEN",
    "h1": "Bo i Frigiliana",
    "intro": [
      "Frigiliana räknas som en av Spaniens vackraste vita byar. Många kommer några timmar för de vita husen, vindlande gränderna, färgade dörrarna och utsikten mot Medelhavet.",
      "Att stanna över natten förändrar upplevelsen: när dagsbesökarna lämnar blir gränderna lugnare, och nästa morgon är ni redan här innan byn blir livligare igen.",
      "Under några dagar blir byn basen för semestern – frukost och middag till fots, tid vid havet och hemkomst till gamla stan."
    ],
    "introPullLine": "Inte bara besöka Frigiliana, utan leva mitt i byn under några dagar.",
    "evening": {
      "title": "Frigiliana på kvällen, när lugnet återvänder",
      "paragraphs": [
        "På kvällen blir gränderna stillare. Färgade dörrar framträder mot vita fasader, små barer och restauranger dyker upp runt ett hörn eller några trappsteg högre, och ett varmt ljus faller över gamla stan. Mellan husen skymtar ibland Medelhavet. Det finns tid att verkligen se byn i stället för att bara hinna längs de mest kända stråken.",
        "Byn är inte tom: boende är fortfarande ute och på de små ställena äter och dricker man. Just blandningen av lugn och fortsatt vardagsliv gör kvällen speciell. Sedan är vägen hem bara en promenad genom gränderna – en sida av Frigiliana som ett dagsbesök sällan visar.",
        "Nästa morgon känns byn annorlunda igen: lugn innan dagens liv återvänder."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "Bo i en by där historien finns kvar i husen",
      "paragraphs": [
        "Frigilianas täta, oregelbundna gamla stad växte fram under århundraden. Nivåerna, gränderna och husen följer inget modernt rutnät. Casa AMARA ligger omkring 15 meter från kyrkan San Antonio, mitt i den historiska strukturen.",
        "Delar av byggnaden är troligen flera hundra år gamla; vissa murar kan vara omkring 800 år. Ingen känner den exakta åldern, därför anger vi medvetet inget konstlat exakt årtal.",
        "Historien syns i väggar som inte alltid möts i räta vinklar, rum som följer den gamla byggnaden och en egen historisk brunn som fortfarande finns på tomten. Den märks inte bara under en promenad genom byn, utan också i hur det känns att bo här."
      ],
      "subsections": [
        {
          "title": "Ett gammalt hus, inget museum",
          "paragraphs": [
            "Mellan 2020 och 2022 restaurerade vi Casa AMARA omsorgsfullt utan att släta ut husets karaktär. Äldre ytor och oregelbundna rum skulle få vara synliga, samtidigt som huset åter blev en bekväm plats för semester.",
            "Bakom de gamla murarna finns nu snabbt wifi, luftkonditionering och uppvärmning. Rymliga badrum och stora duschar – dubbelduschar i flera lägenheter – var viktiga eftersom den komforten inte är självklar i historiska hus. Historisk karaktär ska inte behöva kännas som en kompromiss i vardagen.",
            "Ni bor inte i en kuliss, utan mitt i en del av Frigilianas historia."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "Mitt i den historiska byn, utan att bo högst upp",
      "paragraphs": [
        "Frigiliana klättrar uppför sluttningen. Gränder försvinner runt hörn, trappor leder till nästa nivå och högre upp öppnas nya vyer över taken och mot havet. Topografin är en stor del av byns skönhet och gör varje promenad annorlunda.",
        "Nivåskillnaderna hör till en promenad; under flera dagar spelar boendets exakta läge större roll. Hus högt uppe i Barribarto kan vara vackra, men trappor och backar blir då en del av varje väg hem.",
        "Våra fyra boenden ligger på Calle Chorruelo vid San Antonio – i gamla stan, men jämförelsevis långt ner. Frigiliana är fortfarande en by på en sluttning, men ni behöver inte klättra till de högsta gränderna varje gång ni återvänder. Under en vistelse på flera dagar blir det en tydlig skillnad i vardagen.",
        "Det är skillnad mellan att utforska en backe av fri vilja och att gå den flera gånger om dagen till boendet."
      ],
      "subsections": [
        {
          "title": "En semester som börjar utanför dörren",
          "paragraphs": [
            "Runt kyrkplatsen, Calle Real och de närliggande gränderna finns barer, restauranger och byns vardagsliv. För middag eller en kvällspromenad behövs ingen bil, och kvällen behöver inte planeras runt en resa tillbaka.",
            "Öppna dörren och den historiska byn börjar; när kvällen är slut promenerar ni bara hem. Det som för många är en sevärdhet blir platsen där semesterdagen börjar och slutar."
          ],
          "ctas": []
        },
        {
          "title": "Hur är det med parkering?",
          "paragraphs": [
            "Mycket av parkeringsinformationen på nätet om Frigiliana utgår från dagsbesökare som anländer på morgonen och vill parkera nära gamla stan. Den som övernattar har en annan rytm: ni är redan i byn tidigt och återvänder kanske från stranden eller en utflykt senare. Enligt vår mångåriga erfarenhet är situationen ofta lugnare sent på eftermiddagen eller kvällen än under den största anstormningen dagtid. Det är ingen garanti; sommar, helger och evenemang kan fortfarande vara välbesökta. Vår parkeringsguide beskriver alternativen."
          ],
          "ctas": [
            { "token": "PARKING", "label": "Parkering i Frigiliana" }
          ]
        }
      ],
      "ctas": []
    },
    "coast": {
      "title": "Bo i den vita byn med Medelhavet nära",
      "paragraphs": [
        "Att bo i Frigiliana innebär inte att välja mellan by och hav. Gamla stan är ert hem; på dagen kan ni åka till Nerja, kusten och Maro för strand eller utflykter och sedan återvända upp till byn. Samma dag kan rymma två olika stämningar utan att ni byter boende.",
        "Vistelsen förenar livet i en vit andalusisk by med dagar vid Medelhavet.",
        "Havet kan vara en del av semestern utan att stranden bestämmer adressen."
      ],
      "subsections": [
        {
          "title": "Behövs bil?",
          "paragraphs": [
            "En hyrbil ger störst frihet för olika stränder, Maro och utflykter i regionen, men är inte nödvändig för en vistelse i Frigiliana.",
            "Bussen kan fungera för en enkel dag i Nerja eller på stranden, och taxi är ett annat alternativ. Den som främst stannar i byn och planerar enstaka dagar vid kusten kan därför klara sig utan hyrbil. Valet beror på hur mycket ni vill upptäcka."
          ],
          "ctas": []
        },
        {
          "title": "Och om jag hellre vill bo vid havet?",
          "paragraphs": [
            "Om strand och kuststad ska styra dagsrytmen passar Nerja kanske bättre. Där ligger havet närmare vardagen. Om ni söker byliv, lugnare morgnar och kvällar och gamla stan som bas är Frigiliana ett medvetet annorlunda val.",
            "De ligger nära varandra, men semestern känns annorlunda."
          ],
          "ctas": [
            { "token": "COMPARISON", "label": "Jämför Frigiliana och Nerja" }
          ]
        }
      ],
      "ctas": []
    },
    "arrival": {
      "title": "Ankomsten",
      "steps": [
        { "num": "01", "headline": "Från Málaga", "text": "Málagas flygplats är den vanligaste utgångspunkten. Fortsätt med hyrbil, privat transfer eller kollektivtrafik via Nerja." },
        { "num": "02", "headline": "Välj transport", "text": "En hyrbil ger störst flexibilitet. Buss och taxi kan också fungera, beroende på hur mycket av regionen ni vill utforska." },
        { "num": "03", "headline": "Sista biten till fots", "text": "Frigiliana är en historisk by på en sluttning. Den sista vägen beror på var och hur ni anländer; ankomstguiden ger alla detaljer." }
      ],
      "detailLabel": "Detaljerad ankomstguide"
    },
    "faq": {
      "title": "Praktiska frågor",
      "items": [
        { "question": "Behöver jag bil för att bo i Frigiliana?", "answer": "Nej. Den historiska byn upplevs till fots, medan buss eller taxi kan fungera för enkla dagar i Nerja eller på stranden. En hyrbil ger större frihet för Maro, olika stränder och utflykter i regionen." },
        { "question": "Är det svårt att parkera när man övernattar?", "answer": "Många råd på nätet speglar den största anstormningen av dagsbesökare. Enligt vår erfarenhet är det ofta lugnare senare på dagen, men det finns ingen garanti. Sommar, helger och evenemang kan fortfarande vara välbesökta; parkeringsguiden beskriver alternativen." },
        { "question": "Är Frigiliana mycket brant?", "answer": "Frigiliana ligger på en sluttning och har backar, trappor och ojämn stenläggning. Casa AMARA ligger jämförelsevis långt ner på Calle Chorruelo; övre Barribarto är brantare. Kontrollera ändå den exakta sista vägen om ni anländer med bagage." },
        { "question": "Kan jag ta mig till Nerja eller stranden utan bil?", "answer": "Ja. Bussen kan fungera för en enkel dag i Nerja eller på stranden, och taxi är ett annat alternativ. Bil är främst värdefullt om ni fritt vill kombinera olika stränder, Maro och längre utflykter." }
      ]
    },
    "seasons": {
      "title": "Hur vistelsen förändras under året",
      "paragraphs": [
        "Frigiliana är en levande by året runt, men ljuset, dagsrytmen och relationen till kusten förändras med årstiderna."
      ],
      "subsections": [
        { "title": "Vår – utomhus med både by och kust", "paragraphs": ["Våren passar för promenader, terrasser och utflykter: byn på morgonen, havet eller landskapet senare och tillbaka till Frigiliana på kvällen. Byn och kusten går då särskilt naturligt att förena under samma dag."], "ctas": [] },
        { "title": "Sommar – tidig start, havet och kväll i byn", "paragraphs": ["På sommaren passar bypromenader bäst på morgon och kväll, medan de varmare timmarna ofta hör kusten till. Luftkonditionering ger komfort när ni återvänder till lägenheten och hjälper dagen att sluta lugnt."], "ctas": [] },
        { "title": "Höst – mer utrymme för by och region", "paragraphs": ["På hösten är det ofta lättare att fördela dagen mellan gamla stan, kusten och regionala utflykter utan att den starkaste värmen styr rytmen. Det passar gäster som vill hinna se mer av området utan att skynda."], "ctas": [] },
        { "title": "Vinter – inte sommar, utan ett annat Andalusien", "paragraphs": ["Vintern är inget falskt sommarlöfte: kvällarna kan vara svala, så komfort inomhus spelar roll. Alla lägenheter har uppvärmning; Lounis, Zaid och Maha har dessutom pelletskamin. Det historiska huset förblir en behaglig plats även utanför de varmaste månaderna."], "ctas": [ { "token": "WEATHER", "label": "Utforska väder och årstider" } ] }
      ],
      "ctas": []
    },
    "planning": {
      "eyebrow": "PLANERA VISTELSEN",
      "title": "Användbara nästa steg för Frigiliana",
      "intro": "Jämför ankomst, parkering, ortsval, årstid och vistelsens detaljer innan ni bokar.",
      "gettingThere": { "label": "Resa till Frigiliana", "text": "Jämför hyrbil, privat transfer och kollektivtrafik via Nerja." },
      "parking": { "label": "Parkering i Frigiliana", "text": "Förstå parkeringsalternativen och sista vägen till gamla stan." },
      "comparison": { "label": "Frigiliana eller Nerja", "text": "Jämför bylivet i Frigiliana med kustnära Nerja." },
      "weather": { "label": "Väder & årstider", "text": "Planera månad, terrasser och rätt säsong med mer sammanhang." },
      "reviews": { "label": "Gästrecensioner", "text": "Läs vad gäster berättar efter en vistelse hos AMARA." },
      "amenities": { "label": "Komfort och bekvämligheter", "text": "Kontrollera komforten i AMARA-boendena före bokning." }
    },
    "decision": {
      "title": "Vem Frigiliana passar",
      "paragraphs": [
        "Frigiliana är inte den strandinriktade versionen av Nerja. Det är för gäster som vill bo i en vit andalusisk by, uppleva lugnare morgnar och kvällar och ha dolda barer, gamla gränder och enstaka skymtar av Medelhavet utanför dörren.",
        "Om byn själv ska vara en del av semestern – med kusten nära för en dagsutflykt – är Frigiliana en stark bas. Ni väljer inte bort havet, utan väljer en annan plats att komma hem till."
      ],
      "subsections": [
        {
          "title": "Om ni vill bo mitt i allt",
          "paragraphs": [
            "Casa AMARA ligger omkring 15 meter från kyrkan San Antonio, mitt i den historiska delen av byn.",
            "Flera hundra år gamla strukturer, oregelbundna rum och den egna gamla brunnen finns kvar i huset. Mellan 2020 och 2022 restaurerade vi det för att bevara karaktären.",
            "Idag förenar Casa AMARA historien med rymliga badrum, stora duschar, snabbt wifi, luftkonditionering och uppvärmning – samt privat terrass i utvalda lägenheter.",
            "Frigiliana går inte att bygga på nytt.",
            "Vi kan bara erbjuda er en plats mitt i den."
          ],
          "ctas": [
            { "token": "FRIGILIANA_STAYS", "label": "Se våra boenden i Frigiliana" },
            { "token": "COMPARISON", "label": "Frigiliana eller Nerja – vad passar er?" },
            { "token": "AVAILABILITY", "label": "Se tillgänglighet i Frigiliana" }
          ]
        }
      ],
      "ctas": []
    }
  }
} satisfies Record<AmaraLanguage, FrigilianaLocationPageCopy> & {
  nav: typeof frigilianaLocationNav;
};
