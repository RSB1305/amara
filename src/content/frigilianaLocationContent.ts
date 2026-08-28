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

/**
 * Stable identifiers so the five locales' FAQ entries match one to one.
 *
 * Without them the parity contract can only compare how many entries a locale
 * has, not which ones: a locale swapping one question for another would pass
 * unnoticed. This is the list the audit named as the example of that gap.
 */
export type FrigilianaLocationFaqId =
  | 'car'
  | 'parking'
  | 'steepness'
  | 'nerja-without-car'
  | 'luggage'
  | 'overnight';

export interface FrigilianaLocationFaq {
  title: string;
  items: Array<{ id: FrigilianaLocationFaqId; question: string; answer: string }>;
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
  stairs: FrigilianaLocationPlanningLink;
  dailyLife: FrigilianaLocationPlanningLink;
  comparison: FrigilianaLocationPlanningLink;
  weather: FrigilianaLocationPlanningLink;
  faq: FrigilianaLocationPlanningLink;
  filmLocations: FrigilianaLocationPlanningLink;
  oldTown: FrigilianaLocationPlanningLink;
  reviews: FrigilianaLocationPlanningLink;
  amenities: FrigilianaLocationPlanningLink;
}

export interface FrigilianaLocationExploreBridge {
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel: string;
}

export interface FrigilianaLocationJourneyBridge {
  eyebrow: string;
  title: string;
  text: string;
  ctaLabel: string;
}

export interface FrigilianaLocationOrientation {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  facts: Array<{ value: string; label: string }>;
  mapLabel: string;
  mapNote: string;
  geographyLabel: string;
  arrivalLabel: string;
  routeLabel: string;
}

export interface FrigilianaLocationPageCopy {
  heroKicker: string;
  h1: string;
  heroUpdated: string;
  heroNote: string;
  intro: string[];
  introPullLine: string;
  orientation: FrigilianaLocationOrientation;
  evening: FrigilianaLocationModule;
  history: FrigilianaLocationModule;
  villageLife: FrigilianaLocationModule;
  coast: FrigilianaLocationModule;
  arrival: FrigilianaLocationArrival;
  faq: FrigilianaLocationFaq;
  seasons: FrigilianaLocationModule;
  planning: FrigilianaLocationPlanning;
  journeyBridge?: FrigilianaLocationJourneyBridge;
  exploreBridge: FrigilianaLocationExploreBridge;
  decision: FrigilianaLocationModule;
}

export const frigilianaLocationSeo: AmaraAuthoringSeo = {
  version: '2026-08-27-frigiliana-location-v2.2',
  pageType: 'A',
  entityKey: 'amara-brand',
  article: {
    datePublished: '2026-08-18',
    dateModified: '2026-08-27',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person' as const,
    authorSlug: 'amara-about-us'
  },
  ogImage: '/images/amara-lounis/15-amara-frigiliana.jpg',
  languages: {
  "de": {
    "title": "In Frigiliana übernachten | Altstadt & Meer | AMARA",
    "description": "Entdeckt, warum es sich lohnt, in Frigiliana zu übernachten: historisches weißes Dorf, ruhige Abende, Nerja und Meer ganz nah – und Casa AMARA mittendrin.",
    "robots": "index, follow",
    "canonical": "auto"
  },
  "en": {
    "title": "Stay in Frigiliana | Historic Village & Coast | AMARA",
    "description": "Discover what it is like to stay in Frigiliana: quiet evenings, centuries-old streets, the Mediterranean nearby and Casa AMARA in the heart of the old town.",
    "robots": "index, follow",
    "canonical": "auto"
  },
  "es": {
    "title": "Alojarse en Frigiliana | Casco histórico y mar | AMARA",
    "description": "Descubre cómo es alojarse en Frigiliana: calles blancas, noches tranquilas, siglos de historia, el Mediterráneo cerca y Casa AMARA en pleno casco histórico.",
    "robots": "index, follow",
    "canonical": "auto"
  },
  "nl": {
    "title": "Overnachten in Frigiliana | Historisch dorp & zee | AMARA",
    "description": "Ontdek hoe het is om in Frigiliana te verblijven: witte straatjes, rustige avonden, eeuwenoude geschiedenis, de Middellandse Zee dichtbij en Casa AMARA midden in het oude dorp.",
    "robots": "index, follow",
    "canonical": "auto"
  },
  "sv": {
    "title": "Bo i Frigiliana | Historisk by & havet | AMARA",
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
    { token: 'arrival_guide', label: { en: 'Arrival at AMARA', de: 'Ankunft bei AMARA', es: 'Llegada a AMARA', nl: 'Aankomst bij AMARA', sv: 'Ankomst till AMARA' } }
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
    "h1": "Urlaub in Frigiliana: im weißen Dorf wohnen, statt es zu besuchen",
    "heroUpdated": "Geprüft im August 2026",
    "heroNote": "Ein Guide für Paare, die Frigiliana als mehrtägige Basis kennenlernen möchten.",
    "intro": [
      "Frigiliana eignet sich als Basis, wenn ihr eure Urlaubstage im historischen Hangdorf beginnen und beenden möchtet. Der alte Ortskern folgt dem Gelände: Calle Real bildet eine wichtige Achse, während gestufte Gassen die Ebenen verbinden. Das beeinflusst tägliche Wege stärker als eine Entfernung auf der Karte.",
      "Mehrere Nächte geben dem Ort einen anderen Rhythmus als ein kurzer Besuch. Nach dem Tagesbetrieb bleibt Zeit für den Abend im Dorf; am nächsten Morgen startet ihr bereits vor Ort. Nerja und die Küste ergänzen diese Basis für einzelne Tage."
    ],
    "introPullLine": "Ein paar Tage in Frigiliana beginnen morgens im alten Dorf und enden abends wieder in seinen Gassen.",
    "orientation": { "eyebrow": "LAGE UND ORIENTIERUNG", "title": "Wo liegt Frigiliana?", "paragraphs": ["Frigiliana liegt in der Axarquía im Osten der Provinz Málaga am Südhang der Sierra de Almijara. Der historische Kern steigt mit dem Gelände an; El Ingenio markiert einen Übergang zwischen der Calle-Real-Achse und höher gelegenen Gassen.", "Casa AMARA liegt an der Calle Chorruelo, der Fortsetzung der Calle Real. Für Anreisezeiten und den konkreten letzten Weg nutzt ihr den Anreise-Guide statt pauschaler Entfernungsangaben."], "facts": [{ "value": "Axarquía", "label": "östliche Provinz Málaga" }, { "value": "Historischer Kern", "label": "vom Gelände geprägte Gassen" }, { "value": "Sierra", "label": "geschützte Berglandschaft oberhalb des Dorfes" }], "mapLabel": "Schematische Orientierung von Málaga über Nerja nach Frigiliana und Casa AMARA", "mapNote": "Orientierungskarte · nicht maßstabsgetreu", "geographyLabel": "Geografie und Orientierung", "arrivalLabel": "Anreise planen", "routeLabel": "Route ab Flughafen öffnen" },
    "evening": { "title": "Frigiliana am Abend – ein anderer Rhythmus als beim Tagesbesuch", "paragraphs": ["Nach dem stärkeren Tagesbetrieb hat unser Gastgeberteam wiederholt ruhigere Abende im Dorf beobachtet. Das ist eine begrenzte Beobachtung, keine Garantie für Stille an jedem Datum.", "Für einen mehrtägigen Aufenthalt ist dieser Wechsel praktisch: Ihr müsst nach dem Abend nicht weiterreisen, sondern beginnt auch den nächsten Morgen bereits in Frigiliana."], "subsections": [], "ctas": [] },
    "history": { "title": "Historischer Kontext gehört in den Rundgang", "paragraphs": ["Der historische Kern ist im Straßenverlauf und in seiner Baukultur sichtbar. Für Geschichte, einzelne Bauwerke und einen aufmerksamen Weg durch die Altstadt führt der Old-Town-Guide weiter."], "subsections": [{ "title": "Altstadtwissen gezielt vertiefen", "paragraphs": ["Der Location Hub bereitet die Orientierung vor; die vollständige historische Erzählung bleibt beim Old-Town-Guide."], "ctas": [] }], "ctas": [] },
    "villageLife": { "title": "Das Gelände bestimmt euren täglichen Weg", "paragraphs": ["Frigiliana zieht sich den Hang hinauf. Gestufte Querverbindungen und ansteigende Gassen gehören zur Struktur des historischen Kerns. Bei mehreren Nächten zählt deshalb der tatsächliche Weg zur Unterkunft, nicht nur ihre Lage auf einer Karte.", "Casa AMARA liegt an der Calle Chorruelo als Fortsetzung der Calle Real. Ab der gemeinsamen Haustür verläuft der Weg in Richtung Cafés, Restaurants, Bars und Dorfkern ohne weitere Stufen; der Weg vom Parkplatz bis zur Tür gehört in die spezialisierten Zugangs- und Parkinformationen."], "subsections": [{ "title": "Ein Urlaub, der im Dorf beginnt", "paragraphs": ["Von der Calle-Real-Achse erreicht ihr Cafés, Restaurants, Bars und den Dorfkern; konkrete Wege ordnet der Spezialguide ein."], "ctas": [] }, { "title": "Übernachten folgt einem anderen Rhythmus als ein Tagesbesuch", "paragraphs": ["Als Übernachtungsgäste seid ihr morgens bereits im Dorf und kehrt nach einem Tag außerhalb zu eurer Basis zurück. Parkplätze sind dabei nicht garantiert; aktuelle Möglichkeiten erklärt der Parkguide."], "ctas": [{ "token": "PARKING", "label": "Parken in Frigiliana" }] }], "ctas": [] },
    "coast": { "title": "Frigiliana als Basis, Nerja und Küste als Ergänzung", "paragraphs": ["Frigiliana gibt euren Tagen den Dorfrahmen; Nerja und unterschiedliche Küstenabschnitte erweitern die Auswahl. Welche Strandform passt, entscheidet ihr im Strandguide anhand von Zugang, Setting und gewünschtem Rhythmus."], "subsections": [{ "title": "Verbindungen passend zum Tag prüfen", "paragraphs": ["Ob ihr die Küste mit öffentlichen Verbindungen oder einem Fahrzeug einplant, hängt von eurem konkreten Ziel und den aktuellen Bedingungen ab."], "ctas": [] }, { "title": "Die Basisentscheidung bleibt bei Frigiliana", "paragraphs": ["Ihr wählt Frigiliana für den Dorfrhythmus und ergänzt Nerja oder die Küste, wenn diese Tagesform zu euch passt."], "ctas": [{ "token": "COMPARISON", "label": "Frigiliana und Nerja einordnen" }] }], "ctas": [] },
    "arrival": { "title": "Die Ankunft", "steps": [{ "num": "01", "headline": "Anreise festlegen", "text": "Wählt das Verkehrsmittel nach eurer gesamten Reise, nicht nach einer pauschalen Zeitangabe." }, { "num": "02", "headline": "Gelände mitdenken", "text": "Im historischen Hangdorf können Steigungen, Pflaster und Stufen zum letzten Weg gehören." }, { "num": "03", "headline": "Details vorab prüfen", "text": "Der Anreise-Guide bündelt den aktuellen Ablauf; Parken und Unterkunftszugang bleiben bei ihren spezialisierten Seiten." }], "detailLabel": "Ausführlicher Anreise-Guide" },
    "faq": { "title": "Praktische Fragen", "items": [{ "id": "car", "question": "Braucht ihr in Frigiliana ein Auto?", "answer": "Die Wahl hängt davon ab, welche Tage ihr außerhalb des Dorfes plant. Aktuelle Verbindungen und Fahrzeugwahl erklärt der Anreise-Guide." }, { "id": "parking", "question": "Wie funktioniert das Parken bei einer Übernachtung?", "answer": "Übernachtungsgäste folgen einem anderen Tagesrhythmus als Kurzbesucher, doch ein Stellplatz ist nicht garantiert. Prüft die aktuellen Möglichkeiten im Parkguide." }, { "id": "steepness", "question": "Was bedeutet die Hanglage im Alltag?", "answer": "Steigungen und Stufen verbinden die Ebenen des historischen Kerns. Prüft deshalb den tatsächlichen täglichen Weg und die konkrete Zugangssituation." }, { "id": "nerja-without-car", "question": "Wie plant ihr Nerja und die Küste?", "answer": "Behandelt Nerja und die Küste als ergänzende Tagesoptionen. Aktuelle Verbindungen gehören in die Anreiseplanung; die Strandwahl in den Strandguide." }, { "id": "luggage", "question": "Was solltet ihr bei der Anreise mit Gepäck beachten?", "answer": "Im historischen Hangdorf können Pflaster, Steigungen und Stufen Teil des letzten Weges sein. Prüft vorab den Anreise- und Zugangs-Guide." }, { "id": "overnight", "question": "Warum mehrere Nächte statt eines Tagesbesuchs?", "answer": "Mit mehreren Nächten wird Frigiliana zur Basis: Ihr erlebt den Rhythmus nach dem Tagesbetrieb, beginnt morgens bereits im Dorf und könnt Küste oder Landschaft als einzelne Tagesformen ergänzen." }] },
    "seasons": { "title": "Jahreszeit und Tagesform zusammen denken", "paragraphs": ["Regionale Klimadaten zeigen deutliche saisonale Unterschiede. Das verändert, wann Gelände, Dorf und Küste angenehm in euren Tag passen; lokale Monatswerte oder aktuelle Bedingungen prüft ihr im Wetterguide."], "subsections": [{ "title": "Frühling", "paragraphs": ["Prüft Wetter und Bedingungen, bevor ihr Gelände und Küste verbindet."], "ctas": [] }, { "title": "Sommer", "paragraphs": ["Hitze verändert die sinnvolle Tageszeit für Wege im Hangdorf und aktive Vorhaben."], "ctas": [] }, { "title": "Herbst", "paragraphs": ["Plant aktive Tage weiterhin nach den konkreten Bedingungen statt nach einer allgemeinen Saisonannahme."], "ctas": [] }, { "title": "Winter", "paragraphs": ["Kühlere und wechselhafte Bedingungen verändern die Auswahl; aktuelle Details stehen im Wetterguide."], "ctas": [{ "token": "WEATHER", "label": "Wetter und Jahreszeiten im Detail" }] }], "ctas": [] },
    "planning": {
      "eyebrow": "AUFENTHALT PLANEN",
      "title": "Nächste sinnvolle Schritte für Frigiliana",
      "intro": "Vergleicht vor der Buchung Anreise, Parken, Lageentscheidung, Jahreszeit und die Details eures Aufenthalts.",
      "gettingThere": { "label": "Anreise nach Frigiliana", "text": "Mietwagen, privaten Transfer und öffentliche Verbindungen über Nerja vergleichen." },
      "parking": { "label": "Parken in Frigiliana", "text": "Parkmöglichkeiten und den letzten Weg zur Altstadt verstehen." },
      "stairs": { "label": "Wo übernachten / Lagen", "text": "Einordnen, wie Frigilianas Ebenen und Stufen die täglichen Wege prägen." },
      "dailyLife": { "label": "Alltag & Versorgung", "text": "Lebensmittel, Bäckerei und normale Erledigungen im Dorf planen – mit Nerja als Ergänzung für mehr Auswahl." },
      "comparison": { "label": "Frigiliana oder Nerja", "text": "Dorfleben in Frigiliana mit dem strandnahen Nerja vergleichen." },
      "weather": { "label": "Wetter und Jahreszeiten", "text": "Monatswetter, Terrassenzeit und passende Saison einordnen." },
      "faq": { "label": "Häufige Fragen zu Frigiliana", "text": "Kurze Antworten zu Anreise, Parken, Dorfstruktur, Übernachten, Veranstaltungen und Wandern." },
      "filmLocations": { "label": "Netflix-Drehorte in Frigiliana", "text": "Nachvollziehen, wo der Netflix-Thriller Dos Tumbas gedreht wurde und was das für die Altstadt bedeutet." },
      "oldTown": { "label": "Geschichte & Baukultur", "text": "Die zwölf Keramiktafeln, El Ingenio und die Geschichte von 1569 im Ortskern nachvollziehen." },
      "reviews": { "label": "Gästebewertungen", "text": "Lesen, was Gäste nach ihrem Aufenthalt erwähnen." },
      "amenities": { "label": "Komfort und Ausstattung", "text": "Komfortdetails der AMARA Unterkünfte vor der Buchung prüfen." }
    },
    "journeyBridge": {
      "eyebrow": "MEHR VON ANDALUSIEN SEHEN?",
      "title": "Frigiliana kann der ruhige Teil eurer Reise sein.",
      "text": "Málaga, Granada, Ronda und der Caminito del Rey gehören für viele zu einer größeren Andalusien-Reise. Wenn ihr in Frigiliana wohnt, wird das Dorf zu dem Ort, an dem sich zwischen den großen Tagen das Tempo ändert – mit alten Gassen, ruhigen Abenden und der Mittelmeerküste ringsum.",
      "ctaLabel": "Tagesausflüge ab Frigiliana planen"
    },
    "exploreBridge": { "eyebrow": "EURE TAGE VON HIER AUS", "title": "Der Ort steht fest – wie soll sich euer Tag anfühlen?", "text": "Wenn Frigiliana eure Basis ist, wählt ihr als Nächstes nicht eine feste Route, sondern die passende Tagesform: Bewegung in der Landschaft, Zeit an der Küste oder Essen und Abend nach eurem Anlass.", "ctaLabel": "Tagesform auswählen" },
    "decision": { "title": "Frigiliana passt, wenn das Dorf eure Basis sein soll", "paragraphs": ["Die Wahl passt zu euch, wenn ihr Gelände und historische Gassen als Teil des Aufenthalts annehmt, mehrere Nächte im Dorfrhythmus verbringen und Nerja oder die Küste ergänzend einplanen möchtet."], "subsections": [{ "title": "Casa AMARA als konkrete Basis in der Calle Chorruelo", "paragraphs": ["Vier Unterkünfte liegen hinter einer gemeinsamen Haustür; drei davon sind Apartments, Farah ist eine kompakte Suite. Vollständige Unterschiede und Zugangsinformationen prüft ihr bei den Unterkünften."], "ctas": [{ "token": "FRIGILIANA_STAYS", "label": "Unterkünfte in Frigiliana ansehen" }, { "token": "COMPARISON", "label": "Frigiliana und Nerja einordnen" }, { "token": "AVAILABILITY", "label": "Verfügbarkeit in Frigiliana prüfen" }] }], "ctas": [] }
  },
  "en": {
    "heroKicker": "FRIGILIANA · ANDALUSIA",
    "h1": "A holiday in Frigiliana: living in the white village, not just visiting it",
    "heroUpdated": "Reviewed August 2026",
    "heroNote": "A host-written guide for overnight guests, based on our own everyday life in Calle Chorruelo.",
    "intro": [
      "Welcome to Frigiliana. It is known as one of Spain's most beautiful white villages, and many people come for a few hours to see its white houses, winding lanes, coloured doors and views towards the Mediterranean.",
      "Staying changes the experience: the lanes quieten as day visitors leave, and the next morning you are already here before the village becomes busier again.",
      "Over several days, the village becomes the base for your holiday – breakfast and dinner on foot, time by the sea, and a return to the old town."
    ],
    "introPullLine": "A few days in Frigiliana begin in the old village each morning and end back among its lanes at night.",
    "orientation": {
      "eyebrow": "LOCATION & ORIENTATION",
      "title": "Where is Frigiliana?",
      "paragraphs": [
        "Frigiliana is in the Axarquía in the east of Málaga province, on the southern slope of the Sierra Almijara. Its historic quarter rises above the Mediterranean, about 6 kilometres from Nerja.",
        "Casa AMARA is on Calle Chorruelo by San Antonio church. From Málaga-Costa del Sol Airport, allow roughly 50–60 minutes by car in normal traffic."
      ],
      "facts": [
        { "value": "6 km", "label": "to Nerja" },
        { "value": "50–60 min", "label": "from Málaga Airport" },
        { "value": "Sierra Almijara", "label": "hillside above the Mediterranean" }
      ],
      "mapLabel": "Schematic orientation from Málaga via Nerja to Frigiliana and Casa AMARA",
      "mapNote": "Orientation map · not to scale",
      "geographyLabel": "Geography & orientation",
      "arrivalLabel": "Plan your arrival",
      "routeLabel": "Open route from the airport"
    },
    "evening": {
      "title": "Frigiliana in the evening – when the village quietens again",
      "paragraphs": [
        "In the evening the lanes grow quieter. Coloured doors stand out against white façades, small bars and restaurants appear around corners or a few steps higher, and warm light settles over the old town. Between the houses, the Mediterranean occasionally comes into view. There is time to notice the details of the village.",
        "As evening settles, village life continues: residents are still out, and people eat, drink and talk in the small local places. That meeting of calm and everyday life makes the evening special."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "Living in a village whose history remains inside its houses",
      "paragraphs": [
        "Frigiliana's close, irregular old town developed over centuries; its levels and houses follow no modern grid. Casa AMARA stands about 15 metres from San Antonio church, within that historic fabric.",
        "Parts of the building are probably several centuries old; some walls may date back around 800 years. Their exact age can no longer be determined.",
        "That history becomes tangible in walls that do not always meet at right angles, rooms shaped by the old structure and the private historic well still on the property."
      ],
      "subsections": [
        {
          "title": "Historic fabric, carefully restored for today",
          "paragraphs": [
            "From 2020 to 2022, we carefully restored Casa AMARA. Old surfaces, irregular rooms and the structure shaped over generations remain visible throughout the house.",
            "Today, fast Wi-Fi, air conditioning and heating sit within the old walls. Generous bathrooms and large showers – including double showers in several apartments – bring the comfort that matters during a holiday.",
            "For a few days, Casa AMARA becomes your home within part of Frigiliana's history."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "Inside the historic village – in a comparatively lower position by San Antonio",
      "paragraphs": [
        "Frigiliana climbs the hillside. Lanes disappear around corners, steps reach the next level, and higher up new views open across rooftops and towards the sea. This topography is a large part of the village's beauty.",
        "That rise and fall is part of a walk; over several days, the exact location of your stay matters. Houses high in the Barribarto can be beautiful, but their stairs and slopes become part of every journey home.",
        "Our four stays are on Calle Chorruelo beside San Antonio – in the old town and comparatively low within it. Frigiliana remains a hillside village; from this lower position, the daily route involves less climbing than a stay high in Barribarto. Over a longer stay, that becomes a meaningful everyday difference.",
      "From the main road below it is about 150 metres and some 30 metres of ascent to our door — steeply uphill the whole way, over cobbles and around 30 steps. Three to five minutes at your own pace. We walk it several times a day when we are there; it belongs to Frigiliana as much as the white walls and the narrow lanes."
      ],
      "subsections": [
        {
          "title": "A holiday that begins at the front door",
          "paragraphs": [
            "Small bars, restaurants and everyday village life sit around the church square, Calle Real and the neighbouring lanes. You can set out for dinner or an evening walk on foot, then return home through the historic streets.",
            "Open the door and the historic village begins. A place many people see as a sight becomes where your holiday days begin and end."
          ],
          "ctas": []
        },
        {
          "title": "What about parking?",
          "paragraphs": [
            "Much of the online parking advice for Frigiliana reflects the needs of day visitors who arrive in the morning and want to park close to the old town. Overnight guests have a different rhythm: you are already in the village early and may return from the beach or a day out later. In our long experience, late afternoon or evening is often more relaxed than the main day-visitor period. In summer, at weekends and during events it can still be busy. Our Parking Guide explains the practical options."
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
        "The old town is where you wake in the morning and return in the evening. Between those moments, Nerja, the coast and Maro are within reach for beach days and outings. One holiday day holds two distinct atmospheres."
      ],
      "subsections": [
        {
          "title": "Do you need a car?",
          "paragraphs": [
            "A rental car gives you the most freedom for different beaches, Maro and trips around the region, but it is not required for a stay in Frigiliana.",
            "The bus works for a straightforward day in Nerja or at the beach, and taxis are another option. If you stay mainly in the village and plan occasional coastal days, you can do without a rental car. The right choice depends on how widely you want to explore."
          ],
          "ctas": []
        },
        {
          "title": "What if you would rather stay beside the sea?",
          "paragraphs": [
            "If beach access and a coastal town should shape each day, Nerja suits you better. If you want village life, quieter mornings and evenings, and the old town as your base, Frigiliana is the deliberately different choice."
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
        { "num": "03", "headline": "The final walk", "text": "From the main road below it is about 150 metres uphill to our door, with around 30 steps. The Arrival Guide describes the whole route." }
      ],
      "detailLabel": "Detailed Arrival Guide"
    },
    "faq": {
      "title": "Practical questions",
      "items": [
        { "id": "car", "question": "Do you need a car in Frigiliana?", "answer": "Not in the village itself. The bakery, shops, bars and restaurants are all in the old town and within walking distance." },
        { "id": "parking", "question": "What is parking like when staying overnight in Frigiliana?", "answer": "As an overnight guest you arrive outside the daytime rush, and in our experience the later afternoon and evening are often calmer. In summer, at weekends and during local events it can still be busy." },
        { "id": "steepness", "question": "Is Frigiliana very steep?", "answer": "Frigiliana is built on a hillside, so slopes and steps are part of the historic village. What matters is not only how far your accommodation appears to be from the centre on a map, but also its elevation and the route you may walk several times a day. Staying in the comparatively lower historic centre can feel noticeably different from staying higher up in the Barribarto." },
        { "id": "nerja-without-car", "question": "Can you get to Nerja and the beach without a car?", "answer": "Yes, by bus. If you want to combine several beaches, Maro or other places in the region in a single day, a hire car is far more comfortable." },
        { "id": "luggage", "question": "What should you know about arriving with luggage?", "answer": "Frigiliana is a historic hillside village with narrow streets and slopes, and most stays end with a stretch on foot. Pack so that you can carry your luggage yourself. To our door it is about 150 metres uphill from the main road below, with around 30 steps." },
        { "id": "overnight", "question": "Is Frigiliana worth staying overnight, or is a day trip enough?", "answer": "A day trip can show you Frigiliana’s main streets, viewpoints and whitewashed old town. Staying overnight changes the experience: the village becomes quieter after many day visitors leave, you can have dinner and walk home through the old streets, and the next morning begins before the daytime activity returns. If Frigiliana is one stop on a wider Andalusia trip, staying for one or more nights can also give the journey a slower village chapter between larger destinations." }
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
      "stairs": { "label": "Where to stay / areas", "text": "Understand how Frigiliana’s levels and steps shape repeated daily routes." },
      "dailyLife": { "label": "Daily life & services", "text": "Plan groceries, bakery stops and normal village errands, with Nerja adding more choice when useful." },
      "comparison": { "label": "Frigiliana or Nerja", "text": "Compare village life in Frigiliana with beach-first Nerja." },
      "weather": { "label": "Weather & seasons", "text": "Plan monthly weather, terrace time and the right season." },
      "faq": { "label": "Frigiliana FAQ", "text": "Short answers on arrival, parking, village layout, staying overnight, events and hiking." },
      "filmLocations": { "label": "Netflix filming locations", "text": "See where the Netflix thriller Dos Tumbas was filmed and what it means for the old town." },
      "oldTown": { "label": "History & architecture", "text": "Follow the twelve ceramic panels, El Ingenio and the 1569 history through the protected centre." },
      "reviews": { "label": "Guest reviews", "text": "Read what guests mention after staying with AMARA." },
      "amenities": { "label": "Comfort & Amenities", "text": "Check the comfort details of AMARA stays before booking." }
    },
    "journeyBridge": {
      "eyebrow": "EXPLORING MORE OF ANDALUSIA?",
      "title": "Let Frigiliana be the quieter part of the journey.",
      "text": "Málaga, Granada, Ronda and Caminito del Rey can all form part of a wider Andalusia trip. If you stay in Frigiliana, the village can become the place where the pace changes between bigger days — with its old streets, evenings and the Mediterranean coast around you.",
      "ctaLabel": "Plan day trips from Frigiliana"
    },
    "exploreBridge": {
      "eyebrow": "EXPLORE",
      "title": "Explore Frigiliana",
      "text": "Once Frigiliana feels right as your base, start planning the days around it: restaurants, beaches, walks, markets and places worth discovering in the village and along the coast.",
      "ctaLabel": "Explore Frigiliana"
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
    "h1": "Vacaciones en Frigiliana: vivir el pueblo blanco, no solo visitarlo",
    "heroUpdated": "Revisado en agosto de 2026",
    "heroNote": "Una guía escrita por vuestros anfitriones, desde nuestro día a día en la calle Chorruelo.",
    "intro": [
      "Bienvenidos a Frigiliana. Está considerado uno de los pueblos blancos más bonitos de España, y muchos vienen unas horas para ver sus casas blancas, callejuelas, puertas de colores y vistas hacia el Mediterráneo.",
      "Quedarse cambia la experiencia: cuando se marchan los visitantes del día, las calles recuperan la calma; a la mañana siguiente ya estáis aquí antes de que el pueblo vuelva a animarse.",
      "Durante varios días, el pueblo se convierte en la base de las vacaciones: desayunos y cenas a pie, escapadas al mar y regreso al casco antiguo."
    ],
    "introPullLine": "Durante unos días, las mañanas empiezan en el casco antiguo y las noches terminan de nuevo entre sus callejuelas.",
    "orientation": {
      "eyebrow": "UBICACIÓN Y ORIENTACIÓN",
      "title": "¿Dónde está Frigiliana?",
      "paragraphs": [
        "Frigiliana está en la Axarquía, al este de la provincia de Málaga, en la ladera sur de la Sierra de Almijara. Su casco histórico se eleva sobre el Mediterráneo, a unos 6 kilómetros de Nerja.",
        "Casa AMARA se encuentra en la calle Chorruelo, junto a la iglesia de San Antonio. Desde el aeropuerto de Málaga-Costa del Sol conviene calcular aproximadamente 50–60 minutos en coche con tráfico normal."
      ],
      "facts": [
        { "value": "6 km", "label": "hasta Nerja" },
        { "value": "50–60 min", "label": "desde el aeropuerto de Málaga" },
        { "value": "Sierra Almijara", "label": "ladera sobre el Mediterráneo" }
      ],
      "mapLabel": "Mapa esquemático desde Málaga, pasando por Nerja, hasta Frigiliana y Casa AMARA",
      "mapNote": "Mapa orientativo · no está a escala",
      "geographyLabel": "Geografía y orientación",
      "arrivalLabel": "Planificar la llegada",
      "routeLabel": "Abrir ruta desde el aeropuerto"
    },
    "evening": {
      "title": "Frigiliana al atardecer, cuando vuelve la calma",
      "paragraphs": [
        "Al caer la tarde, las calles se vuelven más tranquilas. Las puertas de colores resaltan sobre las fachadas blancas, pequeños bares y restaurantes aparecen tras una esquina o unos peldaños más arriba, y una luz cálida envuelve el casco antiguo. Entre las casas asoma de vez en cuando el Mediterráneo. Hay tiempo para fijarse en los detalles del pueblo.",
        "Al caer la tarde, el pueblo baja el ritmo y la vida cotidiana continúa: los vecinos siguen haciendo su vida y en los pequeños locales se cena y se conversa. Esa mezcla de calma y vida local da personalidad a la noche."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "Vivir en un pueblo cuya historia sigue dentro de las casas",
      "paragraphs": [
        "El casco antiguo, estrecho e irregular, se formó a lo largo de los siglos; sus niveles y casas no siguen una cuadrícula moderna. Casa AMARA está a unos 15 metros de la iglesia de San Antonio, dentro de ese tejido histórico.",
        "Parte de la construcción probablemente tiene varios siglos; algunos muros podrían remontarse unos 800 años. Hoy ya no es posible determinar su edad exacta.",
        "Esa historia se vuelve tangible en paredes que no siempre forman ángulos rectos, estancias que siguen la estructura antigua y el pozo histórico privado que aún se conserva en la propiedad."
      ],
      "subsections": [
        {
          "title": "Una historia conservada para vivirla hoy",
          "paragraphs": [
            "Entre 2020 y 2022 restauramos Casa AMARA con cuidado. Las superficies antiguas, las estancias irregulares y la estructura formada a lo largo del tiempo siguen visibles y dan forma a la casa.",
            "Entre esos muros hay hoy wifi rápido, aire acondicionado y calefacción. Los baños amplios y las duchas grandes —dobles en varios apartamentos— aportan el confort que cuenta durante las vacaciones.",
            "Durante unos días, Casa AMARA se convierte en vuestra casa dentro de la historia de Frigiliana."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "En pleno pueblo histórico, en una cota relativamente baja junto a San Antonio",
      "paragraphs": [
        "Frigiliana sube por la ladera. Las calles desaparecen tras las esquinas, las escaleras llevan al siguiente nivel y más arriba se abren nuevas vistas sobre los tejados y hacia el mar.",
        "Ese desnivel forma parte del paseo; durante una estancia de varios días, la ubicación exacta importa. Las casas de la parte alta del Barribarto pueden ser preciosas, pero sus escaleras y pendientes acompañan cada regreso.",
        "Nuestros cuatro alojamientos están en la calle Chorruelo, junto a San Antonio: en el casco antiguo y en una cota relativamente baja. Frigiliana sigue siendo un pueblo en cuesta; desde esta posición, el recorrido diario acumula menos desnivel que desde un alojamiento en lo alto del Barribarto. Durante una estancia larga, esa diferencia se nota en el día a día.",
      "Desde la carretera principal, abajo, hay unos 150 metros y unos 30 metros de desnivel hasta nuestra puerta: cuesta arriba todo el camino, sobre empedrado y con unos 30 escalones. Entre tres y cinco minutos a vuestro ritmo. Nosotros lo subimos varias veces al día cuando estamos allí; forma parte de Frigiliana tanto como las paredes blancas y las calles estrechas."
      ],
      "subsections": [
        {
          "title": "Unas vacaciones que empiezan al abrir la puerta",
          "paragraphs": [
            "Alrededor de la plaza de la iglesia, la calle Real y las callejuelas cercanas hay bares, restaurantes y vida cotidiana. Salís andando para cenar o pasear al atardecer y después regresáis a casa por las calles históricas.",
            "Abrís la puerta y empieza el pueblo histórico. El casco antiguo se convierte en el lugar donde empiezan y terminan vuestros días de vacaciones."
          ],
          "ctas": []
        },
        {
          "title": "¿Y el aparcamiento?",
          "paragraphs": [
            "Gran parte de la información online sobre aparcar en Frigiliana responde a las necesidades de quienes llegan por la mañana para pasar unas horas y quieren dejar el coche cerca del casco antiguo. Al alojarse en el pueblo, el ritmo es distinto: ya estáis aquí temprano y quizá regreséis de la playa o de una excursión más tarde. Según nuestra larga experiencia, al final de la tarde o por la noche la situación suele ser más relajada que durante la mayor afluencia diurna. En verano, fines de semana y durante eventos puede seguir habiendo mucha gente. Nuestra guía explica las opciones."
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
        "El casco antiguo es el lugar donde os despertáis por la mañana y al que regresáis al atardecer. Entre ambos momentos, Nerja, la costa y Maro quedan cerca para pasar el día en la playa o hacer una excursión. Un mismo día de vacaciones reúne dos ambientes distintos."
      ],
      "subsections": [
        {
          "title": "¿Hace falta coche?",
          "paragraphs": [
            "Un coche de alquiler ofrece la mayor libertad para conocer distintas playas, Maro y otros lugares de la región, pero no es imprescindible para alojarse en Frigiliana.",
            "El autobús sirve para un día sencillo en Nerja o en la playa, y el taxi es otra opción. La decisión depende de cuánto queráis explorar."
          ],
          "ctas": []
        },
        {
          "title": "¿Y si preferís alojaros junto al mar?",
          "paragraphs": [
            "Si queréis que la playa y una localidad costera marquen el ritmo diario, encaja mejor Nerja. Si buscáis vida de pueblo, mañanas y noches más tranquilas y el casco antiguo como base, Frigiliana es una elección deliberadamente distinta."
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
        { "num": "03", "headline": "El último tramo a pie", "text": "Desde la carretera principal, abajo, hay unos 150 metros cuesta arriba hasta nuestra puerta, con unos 30 escalones. La guía de llegada describe el camino completo." }
      ],
      "detailLabel": "Guía detallada de llegada"
    },
    "faq": {
      "title": "Preguntas prácticas",
      "items": [
        { "id": "car", "question": "¿Necesitáis coche para alojaros en Frigiliana?", "answer": "En el pueblo no. La panadería, las tiendas, los bares y los restaurantes están en el casco antiguo, a poca distancia a pie." },
        { "id": "parking", "question": "¿Cómo es el aparcamiento si os alojáis en Frigiliana?", "answer": "Gran parte de la información sobre aparcamiento en Frigiliana está pensada para quienes visitan el pueblo solo durante unas horas y suelen llegar en momentos similares. Para quienes se alojan aquí, el ritmo es diferente. Según nuestra experiencia, a última hora de la tarde y por la noche suele haber algo más de tranquilidad que durante las horas de mayor afluencia de visitantes. Aun así, nunca podemos garantizar una plaza libre, especialmente en verano, los fines de semana o durante eventos." },
        { "id": "steepness", "question": "¿Frigiliana tiene muchas cuestas?", "answer": "Frigiliana está construida sobre una ladera, por lo que las cuestas y las escaleras forman parte del casco histórico. Por eso no importa solo la distancia que aparece en el mapa, sino también a qué altura se encuentra vuestro alojamiento y qué recorrido vais a repetir varias veces al día. Alojarse en la parte relativamente más baja del casco histórico puede sentirse bastante diferente a quedarse en las calles más altas del Barribarto." },
        { "id": "nerja-without-car", "question": "¿Podéis ir a Nerja y a la playa sin coche?", "answer": "Sí, en autobús. Si queréis combinar varias playas, Maro u otros lugares de la comarca en un mismo día, el coche resulta mucho más cómodo." },
        { "id": "luggage", "question": "¿Qué debéis tener en cuenta si llegáis con equipaje?", "answer": "Frigiliana es un pueblo histórico en ladera, con calles estrechas y pendientes, y casi todos los alojamientos terminan con un tramo a pie. Preparad el equipaje pensando en que tendréis que cargarlo. Hasta nuestra puerta hay unos 150 metros cuesta arriba desde la carretera principal, con unos 30 escalones." },
        { "id": "overnight", "question": "¿Merece la pena dormir en Frigiliana o basta con una excursión de un día?", "answer": "Una visita de un día os deja ver las calles principales, los miradores y el casco antiguo encalado. Pernoctar cambia la experiencia: el pueblo se queda más tranquilo cuando se marchan muchos visitantes de día, podéis cenar y volver caminando por las calles antiguas, y la mañana siguiente empieza antes de que regrese el movimiento diurno. Si Frigiliana es una parada dentro de un viaje más amplio por Andalucía, una o varias noches añaden además un capítulo de pueblo, más pausado, entre destinos grandes." }
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
      "stairs": { "label": "Dónde alojarse / zonas", "text": "Entender cómo los niveles y escalones de Frigiliana condicionan los recorridos diarios." },
      "dailyLife": { "label": "Vida diaria y servicios", "text": "Planificar alimentación, panadería y recados en el pueblo, con Nerja como complemento para más variedad." },
      "comparison": { "label": "Frigiliana o Nerja", "text": "Comparar la vida de pueblo en Frigiliana con Nerja junto al mar." },
      "weather": { "label": "Clima y estaciones", "text": "Elegir época, terrazas y planes con el clima de cada mes." },
      "faq": { "label": "Preguntas frecuentes sobre Frigiliana", "text": "Respuestas breves sobre llegada, aparcamiento, estructura del pueblo, alojamiento, eventos y senderismo." },
      "filmLocations": { "label": "Localizaciones de Netflix", "text": "Ver dónde se rodó el thriller de Netflix Dos Tumbas y qué significa para el casco antiguo." },
      "oldTown": { "label": "Historia y arquitectura", "text": "Seguir los doce paneles de cerámica, El Ingenio y la historia de 1569 por el centro protegido." },
      "reviews": { "label": "Reseñas de huéspedes", "text": "Leer qué cuentan los huéspedes después de alojarse con AMARA." },
      "amenities": { "label": "Confort y servicios", "text": "Revisar el confort de los alojamientos AMARA antes de reservar." }
    },
    "journeyBridge": {
      "eyebrow": "¿QUERÉIS VER MÁS DE ANDALUCÍA?",
      "title": "Dejad que Frigiliana sea la parte tranquila del viaje.",
      "text": "Málaga, Granada, Ronda y el Caminito del Rey pueden formar parte de un viaje más amplio por Andalucía. Si os alojáis en Frigiliana, el pueblo se convierte en el lugar donde el ritmo cambia entre las jornadas más largas: calles antiguas, tardes sin prisa y la costa mediterránea alrededor.",
      "ctaLabel": "Planificar excursiones desde Frigiliana"
    },
    "exploreBridge": {
      "eyebrow": "DESCUBRIR",
      "title": "Descubrir Frigiliana",
      "text": "Si Frigiliana encaja como vuestra base, desde aquí podéis empezar a planear los días: restaurantes, playas, rutas, mercados y lugares por descubrir en el pueblo y junto a la costa.",
      "ctaLabel": "Descubrir Frigiliana"
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
    "h1": "Vakantie in Frigiliana: in het witte dorp wonen, niet het alleen bezoeken",
    "heroUpdated": "Gecontroleerd in augustus 2026",
    "heroNote": "Een gids van jullie hosts voor verblijfsgasten, geschreven vanuit ons dagelijks leven in de Calle Chorruelo.",
    "intro": [
      "Welkom in Frigiliana. Het dorp geldt als een van de mooiste witte dorpen van Spanje; veel bezoekers komen een paar uur voor de witte huizen, kronkelstraatjes, gekleurde deuren en uitzichten richting de Middellandse Zee.",
      "Blijven overnachten verandert de ervaring: wanneer de dagjesmensen vertrekken, worden de straten rustiger; de volgende ochtend zijn jullie er al voordat het dorp weer levendiger wordt.",
      "Tijdens een verblijf van enkele dagen wordt het dorp de basis van jullie vakantie: ontbijten en dineren op loopafstand, tijd aan zee en thuiskomen in de oude kern."
    ],
    "introPullLine": "Een verblijf van een paar dagen begint 's ochtends in de oude kern en eindigt 's avonds weer tussen de straatjes.",
    "orientation": {
      "eyebrow": "LIGGING EN ORIËNTATIE",
      "title": "Waar ligt Frigiliana?",
      "paragraphs": [
        "Frigiliana ligt in de Axarquía, in het oosten van de provincie Málaga, op de zuidhelling van de Sierra Almijara. De historische kern verheft zich boven de Middellandse Zee, op ongeveer 6 kilometer van Nerja.",
        "Casa AMARA ligt aan Calle Chorruelo, bij de kerk van San Antonio. Reken vanaf Málaga-Costa del Sol Airport bij normaal verkeer op ongeveer 50–60 minuten met de auto."
      ],
      "facts": [
        { "value": "6 km", "label": "naar Nerja" },
        { "value": "50–60 min", "label": "vanaf Málaga Airport" },
        { "value": "Sierra Almijara", "label": "helling boven de Middellandse Zee" }
      ],
      "mapLabel": "Schematische oriëntatie van Málaga via Nerja naar Frigiliana en Casa AMARA",
      "mapNote": "Oriëntatiekaart · niet op schaal",
      "geographyLabel": "Geografie en oriëntatie",
      "arrivalLabel": "Aankomst plannen",
      "routeLabel": "Route vanaf de luchthaven openen"
    },
    "evening": {
      "title": "Frigiliana in de avond, wanneer de rust terugkeert",
      "paragraphs": [
        "'s Avonds worden de straatjes stiller. Gekleurde deuren vallen op tegen witte gevels, kleine bars en restaurants verschijnen om een hoek of een paar treden hoger, en warm licht ligt over de oude kern. Tussen de huizen door duikt af en toe de Middellandse Zee op. Er is tijd om de details van het dorp echt te bekijken.",
        "Terwijl de avond rustiger wordt, gaat het dorpsleven door: bewoners zijn nog onderweg en in de kleine zaken wordt gegeten, gedronken en gepraat. Juist die combinatie van rust en dagelijks dorpsleven maakt de avond bijzonder."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "Wonen in een dorp waarvan de geschiedenis nog in de huizen zit",
      "paragraphs": [
        "De compacte, onregelmatige oude kern van Frigiliana groeide door de eeuwen heen; de niveaus en huizen volgen geen modern stratenplan. Casa AMARA staat op ongeveer 15 meter van de kerk van San Antonio, midden in die historische structuur.",
        "Delen van het gebouw zijn vermoedelijk eeuwenoud; sommige muren kunnen ongeveer 800 jaar oud zijn. Hun precieze leeftijd is vandaag niet meer vast te stellen.",
        "Die geschiedenis wordt tastbaar in muren die niet altijd haaks staan, kamers die de oude bouwstructuur volgen en de eigen historische waterput die nog op het terrein aanwezig is."
      ],
      "subsections": [
        {
          "title": "Historische bouwstructuur, zorgvuldig gerestaureerd voor een verblijf van nu",
          "paragraphs": [
            "Van 2020 tot 2022 hebben we Casa AMARA zorgvuldig gerestaureerd. Oude oppervlakken, onregelmatige kamers en de structuur die in de loop van generaties ontstond, zijn door het hele huis zichtbaar gebleven.",
            "Achter de oude muren vinden jullie nu snelle wifi, airconditioning en verwarming. Ruime badkamers en grote douches – in meerdere appartementen dubbele douches – bieden het comfort dat tijdens een vakantie telt.",
            "Een paar dagen lang wordt Casa AMARA jullie thuis midden in de geschiedenis van Frigiliana."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "Midden in het historische dorp, relatief laag bij San Antonio",
      "paragraphs": [
        "Frigiliana klimt tegen de heuvel op. Straatjes verdwijnen achter hoeken, trappen leiden naar een volgend niveau en hogerop openen zich nieuwe uitzichten over daken en richting zee. Die topografie bepaalt een groot deel van de schoonheid van het dorp.",
        "Dat stijgen en dalen hoort bij een wandeling; bij een verblijf van meerdere dagen telt de precieze ligging. Huizen hoog in het Barribarto kunnen prachtig zijn, maar de trappen en hellingen horen dan bij elke weg naar huis.",
        "Onze vier verblijven liggen aan Calle Chorruelo naast San Antonio – in de oude kern en daarbinnen relatief laag. Frigiliana blijft een heuveldorp; vanuit deze lagere positie heeft de dagelijkse route minder hoogteverschil dan vanuit een verblijf hoog in Barribarto. Tijdens een langer verblijf merken jullie dat verschil in het dagelijks leven.",
      "Vanaf de hoofdweg beneden is het ongeveer 150 meter en zo veel als 30 meter hoogteverschil tot onze deur — de hele weg stevig omhoog, over kasseien en met ongeveer 30 treden. Drie tot vijf minuten in jullie eigen tempo. Wij lopen het meerdere keren per dag als we er zijn; het hoort bij Frigiliana net als de witte muren en de smalle straatjes."
      ],
      "subsections": [
        {
          "title": "Een vakantie die bij de voordeur begint",
          "paragraphs": [
            "Rond het kerkplein, Calle Real en de omliggende straatjes liggen bars, restaurants en het dagelijkse dorpsleven. Jullie gaan te voet op pad voor een diner of avondwandeling en lopen later door de historische straatjes naar huis.",
            "Open de deur en het historische dorp begint. De oude kern wordt de plek waar jullie vakantiedagen beginnen en eindigen."
          ],
          "ctas": []
        },
        {
          "title": "En het parkeren?",
          "paragraphs": [
            "Veel online parkeeradvies voor Frigiliana is gericht op dagjesmensen die 's ochtends aankomen en zo dicht mogelijk bij de oude kern willen parkeren. Wie in het dorp overnacht, heeft een ander ritme: jullie zijn er vroeg al en keren na het strand of een uitstapje vaak later terug. Volgens onze jarenlange ervaring is de situatie aan het einde van de middag of in de avond vaak rustiger dan tijdens de grootste drukte overdag. In de zomer, in het weekend en bij evenementen kan het nog steeds druk zijn. Onze parkeergids legt de mogelijkheden uit."
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
        "De oude kern is de plek waar jullie 's ochtends wakker worden en 's avonds terugkeren. Daartussen liggen Nerja, de kust en Maro binnen bereik voor een stranddag of uitstapje. Eén vakantiedag brengt zo twee verschillende sferen samen."
      ],
      "subsections": [
        {
          "title": "Hebben jullie daarvoor een auto nodig?",
          "paragraphs": [
            "Een huurauto geeft de meeste vrijheid voor verschillende stranden, Maro en uitstapjes in de regio, maar is niet noodzakelijk voor een verblijf in Frigiliana.",
            "De bus is prima voor een eenvoudige dag in Nerja of aan het strand; ook een taxi is mogelijk. Wie vooral in het dorp blijft en af en toe naar de kust wil, redt het zonder huurauto. De juiste keuze hangt af van hoeveel jullie willen ontdekken."
          ],
          "ctas": []
        },
        {
          "title": "En als jullie liever direct aan zee verblijven?",
          "paragraphs": [
            "Als strand en kustplaats het dagelijkse ritme moeten bepalen, past Nerja beter. Zoeken jullie dorpsleven, rustigere ochtenden en avonden en de oude kern als basis, dan is Frigiliana bewust een andere keuze."
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
        { "num": "03", "headline": "Het laatste stuk lopen", "text": "Vanaf de hoofdweg beneden is het ongeveer 150 meter omhoog tot onze deur, met zo ongeveer 30 treden. De aankomstgids beschrijft de hele route." }
      ],
      "detailLabel": "Uitgebreide aankomstgids"
    },
    "faq": {
      "title": "Praktische vragen",
      "items": [
        { "id": "car", "question": "Hebben jullie een auto nodig in Frigiliana?", "answer": "In het dorp zelf niet. Bakker, winkels, bars en restaurants liggen in de oude kern, op loopafstand." },
        { "id": "parking", "question": "Hoe werkt parkeren als jullie in Frigiliana overnachten?", "answer": "Als overnachtende gasten komen jullie buiten de dagdrukte aan, en onze ervaring is dat het later in de middag en 's avonds vaak rustiger is. In de zomer, in het weekend en tijdens evenementen kan het nog steeds vol zijn." },
        { "id": "steepness", "question": "Is Frigiliana erg steil?", "answer": "Frigiliana ligt tegen een heuvel, waardoor hellingen en trappen bij het historische dorp horen. Het gaat daarom niet alleen om de afstand tot het centrum op de kaart, maar ook om hoe hoog jullie accommodatie ligt en welke route jullie meerdere keren per dag lopen. Verblijven in het relatief lager gelegen historische centrum kan in de praktijk duidelijk anders aanvoelen dan een accommodatie hoger in het Barribarto." },
        { "id": "nerja-without-car", "question": "Kunnen jullie zonder auto naar Nerja en het strand?", "answer": "Ja, met de bus. Willen jullie op één dag meerdere stranden, Maro of andere plaatsen in de regio combineren, dan is een huurauto veel comfortabeler." },
        { "id": "luggage", "question": "Waar moeten jullie rekening mee houden als jullie met bagage aankomen?", "answer": "Frigiliana is een historisch dorp tegen de heuvel, met smalle straatjes en hellingen; bij vrijwel elk verblijf hoort een laatste stuk te voet. Pak dus zo in dat jullie de bagage zelf kunnen dragen. Tot onze deur is het ongeveer 150 meter omhoog vanaf de hoofdweg beneden, met zo ongeveer 30 treden." },
        { "id": "overnight", "question": "Is overnachten in Frigiliana de moeite waard, of volstaat een dagtocht?", "answer": "Met een dagtocht zien jullie de hoofdstraatjes, de uitzichtpunten en de witgekalkte oude kern. Blijven slapen verandert de ervaring: het dorp wordt rustiger zodra veel dagbezoekers zijn vertrokken, jullie kunnen uit eten gaan en door de oude straatjes naar huis lopen, en de volgende ochtend begint voordat de dagdrukte terugkeert. Is Frigiliana een halte op een grotere rondreis door Andalusië, dan geeft één of meer nachten de reis bovendien een rustiger dorpshoofdstuk tussen de grote bestemmingen." }
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
        { "title": "Herfst – meer ruimte voor dorp en regio", "paragraphs": ["In de herfst verdelen jullie de dag vaak gemakkelijker tussen de oude kern, kust en uitstapjes in de regio zonder dat de grootste hitte het ritme sterk bepaalt. Dat past bij wie meer van de omgeving wil zien."], "ctas": [] },
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
      "stairs": { "label": "Waar overnachten / gebieden", "text": "Begrijp hoe niveaus en trappen de terugkerende dagelijkse routes bepalen." },
      "dailyLife": { "label": "Dagelijks leven & voorzieningen", "text": "Plan boodschappen, de bakker en gewone dorpszaken, met Nerja als aanvulling voor meer keuze." },
      "comparison": { "label": "Frigiliana of Nerja", "text": "Vergelijk het dorpsleven in Frigiliana met Nerja aan zee." },
      "weather": { "label": "Weer & seizoenen", "text": "Kies maand, terrasmomenten en seizoen met meer context." },
      "faq": { "label": "Veelgestelde vragen over Frigiliana", "text": "Korte antwoorden over aankomst, parkeren, dorpsstructuur, overnachten, evenementen en wandelen." },
      "filmLocations": { "label": "Netflix-filmlocaties", "text": "Zien waar de Netflix-thriller Dos Tumbas is gefilmd en wat dat betekent voor de oude kern." },
      "oldTown": { "label": "Geschiedenis & architectuur", "text": "Volg de twaalf keramische panelen, El Ingenio en de geschiedenis van 1569 door de beschermde kern." },
      "reviews": { "label": "Gastbeoordelingen", "text": "Lees wat gasten na een verblijf bij AMARA vertellen." },
      "amenities": { "label": "Comfort en voorzieningen", "text": "Controleer het comfort van AMARA-verblijven vóór het boeken." }
    },
    "journeyBridge": {
      "eyebrow": "MEER VAN ANDALUSIË ZIEN?",
      "title": "Laat Frigiliana het rustige deel van de reis zijn.",
      "text": "Málaga, Granada, Ronda en de Caminito del Rey horen vaak bij een grotere rondreis door Andalusië. Als jullie in Frigiliana verblijven, wordt het dorp de plek waar het tempo tussen de grote dagen verandert — met oude straatjes, rustige avonden en de Middellandse Zee om jullie heen.",
      "ctaLabel": "Dagtochten vanuit Frigiliana plannen"
    },
    "exploreBridge": {
      "eyebrow": "ONTDEKKEN",
      "title": "Ontdek Frigiliana",
      "text": "Als Frigiliana goed bij jullie past als uitvalsbasis, kunnen jullie van hieruit de dagen verder plannen: restaurants, stranden, wandelingen, markten en bijzondere plekken in het dorp en aan de kust.",
      "ctaLabel": "Ontdek Frigiliana"
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
    "h1": "Semester i Frigiliana: att bo i den vita byn, inte bara besöka den",
    "heroUpdated": "Granskad i augusti 2026",
    "heroNote": "En guide från era värdar för övernattande gäster, skriven ur vår vardag på Calle Chorruelo.",
    "intro": [
      "Välkomna till Frigiliana. Byn räknas som en av Spaniens vackraste vita byar, och många kommer några timmar för de vita husen, vindlande gränderna, färgade dörrarna och utsikten mot Medelhavet.",
      "Att stanna över natten förändrar upplevelsen: när dagsbesökarna lämnar blir gränderna lugnare, och nästa morgon är ni redan här innan byn blir livligare igen.",
      "Under några dagar blir byn basen för semestern – frukost och middag till fots, tid vid havet och hemkomst till gamla stan."
    ],
    "introPullLine": "Under några dagar börjar morgonen i gamla stan och kvällen slutar hemma bland gränderna.",
    "orientation": {
      "eyebrow": "LÄGE OCH ORIENTERING",
      "title": "Var ligger Frigiliana?",
      "paragraphs": [
        "Frigiliana ligger i Axarquía i den östra delen av Málagaprovinsen, på Sierra Almijaras sydsluttning. Den historiska bykärnan reser sig över Medelhavet, omkring 6 kilometer från Nerja.",
        "Casa AMARA ligger på Calle Chorruelo vid kyrkan San Antonio. Från Málaga-Costa del Sols flygplats tar bilresan ungefär 50–60 minuter i normal trafik."
      ],
      "facts": [
        { "value": "6 km", "label": "till Nerja" },
        { "value": "50–60 min", "label": "från Málagas flygplats" },
        { "value": "Sierra Almijara", "label": "sluttning över Medelhavet" }
      ],
      "mapLabel": "Schematisk orientering från Málaga via Nerja till Frigiliana och Casa AMARA",
      "mapNote": "Orienteringskarta · inte skalenlig",
      "geographyLabel": "Geografi och orientering",
      "arrivalLabel": "Planera ankomsten",
      "routeLabel": "Öppna rutten från flygplatsen"
    },
    "evening": {
      "title": "Frigiliana på kvällen, när lugnet återvänder",
      "paragraphs": [
        "På kvällen blir gränderna stillare. Färgade dörrar framträder mot vita fasader, små barer och restauranger dyker upp runt ett hörn eller några trappsteg högre, och ett varmt ljus faller över gamla stan. Mellan husen skymtar ibland Medelhavet. Det finns tid att lägga märke till byns detaljer.",
        "När kvällen blir lugnare fortsätter vardagslivet i byn: boende är fortfarande ute och på de små ställena äter, dricker och samtalar man. Blandningen av lugn och byliv gör kvällen speciell."
      ],
      "subsections": [],
      "ctas": []
    },
    "history": {
      "title": "Bo i en by där historien finns kvar i husen",
      "paragraphs": [
        "Frigilianas täta, oregelbundna gamla stad växte fram under århundraden. Nivåerna, gränderna och husen följer inget modernt rutnät. Casa AMARA ligger omkring 15 meter från kyrkan San Antonio, mitt i den historiska strukturen.",
        "Delar av byggnaden är troligen flera hundra år gamla; vissa murar kan vara omkring 800 år gamla. Deras exakta ålder går inte längre att fastställa.",
        "Historien blir påtaglig i väggar som inte alltid möts i räta vinklar, rum som följer den gamla byggnaden och den egna historiska brunnen som fortfarande finns på tomten."
      ],
      "subsections": [
        {
          "title": "Historisk karaktär, varsamt restaurerad för livet i dag",
          "paragraphs": [
            "Mellan 2020 och 2022 restaurerade vi Casa AMARA omsorgsfullt. Äldre ytor, oregelbundna rum och den struktur som vuxit fram under generationer är fortfarande tydliga i hela huset.",
            "Bakom de gamla murarna finns nu snabbt wifi, luftkonditionering och uppvärmning. Rymliga badrum och stora duschar – dubbelduschar i flera lägenheter – ger den komfort som betyder mest under semestern.",
            "Under några dagar blir Casa AMARA ert hem mitt i en del av Frigilianas historia."
          ],
          "ctas": []
        }
      ],
      "ctas": []
    },
    "villageLife": {
      "title": "Mitt i den historiska byn, i ett jämförelsevis lägre läge vid San Antonio",
      "paragraphs": [
        "Frigiliana klättrar uppför sluttningen. Gränder försvinner runt hörn, trappor leder till nästa nivå och högre upp öppnas nya vyer över taken och mot havet. Topografin är en stor del av byns skönhet och gör varje promenad annorlunda.",
        "Nivåskillnaderna hör till en promenad; under flera dagar spelar boendets exakta läge större roll. Hus högt uppe i Barribarto kan vara vackra, men trappor och backar blir då en del av varje väg hem.",
        "Våra fyra boenden ligger på Calle Chorruelo vid San Antonio – i gamla stan och jämförelsevis långt ner. Frigiliana är fortfarande en by på en sluttning; från det lägre läget innebär den dagliga vägen mindre höjdskillnad än från ett boende högt uppe i Barribarto. Under en vistelse på flera dagar blir det en tydlig skillnad i vardagen.",
      "Från huvudvägen nedanför är det ungefär 150 meter och cirka 30 höjdmeter upp till vår dörr – brant uppför hela vägen, över kullersten och med omkring 30 trappsteg. Tre till fem minuter i er egen takt. Vi går den flera gånger om dagen när vi är där; den hör till Frigiliana lika mycket som de vita väggarna och de smala gränderna."
      ],
      "subsections": [
        {
          "title": "En semester som börjar utanför dörren",
          "paragraphs": [
            "Runt kyrkplatsen, Calle Real och de närliggande gränderna finns barer, restauranger och byns vardagsliv. Ni går till fots för middag eller en kvällspromenad och återvänder senare hem genom de historiska gränderna.",
            "Öppna dörren och den historiska byn börjar. Gamla stan blir platsen där semesterdagarna börjar och slutar."
          ],
          "ctas": []
        },
        {
          "title": "Hur är det med parkering?",
          "paragraphs": [
            "Mycket av parkeringsinformationen på nätet om Frigiliana utgår från dagsbesökare som anländer på morgonen och vill parkera nära gamla stan. Den som övernattar har en annan rytm: ni är redan i byn tidigt och återvänder kanske från stranden eller en utflykt senare. Enligt vår mångåriga erfarenhet är situationen ofta lugnare sent på eftermiddagen eller kvällen än under den största anstormningen dagtid. På sommaren, under helger och vid evenemang kan det fortfarande vara fullt. Vår parkeringsguide beskriver alternativen."
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
        "Gamla stan är platsen där ni vaknar på morgonen och återvänder på kvällen. Däremellan ligger Nerja, kusten och Maro inom räckhåll för stranddagar och utflykter. En och samma semesterdag rymmer två olika stämningar.",
        "Vistelsen förenar livet i en vit andalusisk by med dagar vid Medelhavet.",
        "Havet kan vara en del av semestern utan att stranden bestämmer adressen."
      ],
      "subsections": [
        {
          "title": "Behövs bil?",
          "paragraphs": [
            "En hyrbil ger störst frihet för olika stränder, Maro och utflykter i regionen, men är inte nödvändig för en vistelse i Frigiliana.",
            "Bussen fungerar för en enkel dag i Nerja eller på stranden, och taxi är ett annat alternativ. Den som främst stannar i byn och planerar enstaka dagar vid kusten klarar sig utan hyrbil. Valet beror på hur mycket ni vill upptäcka."
          ],
          "ctas": []
        },
        {
          "title": "Och om ni hellre vill bo vid havet?",
          "paragraphs": [
            "Om strand och kuststad ska styra dagsrytmen passar Nerja bättre. Där ligger havet närmare vardagen. Om ni söker byliv, lugnare morgnar och kvällar och gamla stan som bas är Frigiliana ett medvetet annorlunda val.",
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
        { "num": "03", "headline": "Sista biten till fots", "text": "Från huvudvägen nedanför är det ungefär 150 meter uppför till vår dörr, med omkring 30 trappsteg. Ankomstguiden beskriver hela vägen." }
      ],
      "detailLabel": "Detaljerad ankomstguide"
    },
    "faq": {
      "title": "Praktiska frågor",
      "items": [
        { "id": "car", "question": "Behöver ni bil när ni bor i Frigiliana?", "answer": "Inte i själva byn. Bageri, butiker, barer och restauranger ligger i gamla stan inom gångavstånd." },
        { "id": "parking", "question": "Hur fungerar parkeringen när ni övernattar i Frigiliana?", "answer": "Som övernattande gäster kommer ni utanför dagsrusningen, och vår erfarenhet är att det ofta är lugnare senare på eftermiddagen och på kvällen. På sommaren, under helger och vid evenemang kan det ändå vara fullt." },
        { "id": "steepness", "question": "Är Frigiliana mycket brant?", "answer": "Frigiliana ligger på en sluttning, så backar och trappor är en naturlig del av den historiska byn. Det viktiga är därför inte bara hur långt boendet ser ut att ligga från centrum på kartan, utan också hur högt det ligger och vilken väg ni kommer att gå flera gånger om dagen. Att bo i den relativt lägre delen av den historiska byn kan kännas märkbart annorlunda än att bo högre upp i Barribarto." },
        { "id": "nerja-without-car", "question": "Kan ni ta er till Nerja och stranden utan bil?", "answer": "Ja, med buss. Vill ni kombinera flera stränder, Maro eller andra platser i regionen samma dag är hyrbil betydligt bekvämare." },
        { "id": "luggage", "question": "Vad bör ni tänka på när ni anländer med bagage?", "answer": "Frigiliana är en historisk by på en sluttning, med smala gränder och backar, och nästan alla boenden slutar med en sträcka till fots. Packa så att ni kan bära bagaget själva. Till vår dörr är det ungefär 150 meter uppför från huvudvägen nedanför, med omkring 30 trappsteg." },
        { "id": "overnight", "question": "Är det värt att övernatta i Frigiliana, eller räcker en dagsutflykt?", "answer": "En dagsutflykt visar er byns huvudgränder, utsiktsplatser och den vitkalkade gamla kärnan. Att stanna över natten förändrar upplevelsen: byn blir lugnare när många dagsbesökare har åkt, ni kan äta middag och gå hem genom de gamla gränderna, och nästa morgon börjar innan dagsrörelsen är tillbaka. Är Frigiliana en anhalt på en större rundresa i Andalusien ger en eller flera nätter dessutom resan ett långsammare bykapitel mellan de större målen." }
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
      "stairs": { "label": "Var ska man bo / områden", "text": "Förstå hur Frigilianas nivåer och trappor formar återkommande vardagsvägar." },
      "dailyLife": { "label": "Vardag & service", "text": "Planera matinköp, bageri och vanliga byärenden, med Nerja som komplement för större urval." },
      "comparison": { "label": "Frigiliana eller Nerja", "text": "Jämför bylivet i Frigiliana med kustnära Nerja." },
      "weather": { "label": "Väder & årstider", "text": "Planera månad, terrasser och rätt säsong med mer sammanhang." },
      "faq": { "label": "Vanliga frågor om Frigiliana", "text": "Korta svar om ankomst, parkering, byns struktur, övernattning, evenemang och vandring." },
      "filmLocations": { "label": "Netflix inspelningsplatser", "text": "Se var Netflix-thrillern Dos Tumbas spelades in och vad det betyder för gamla stan." },
      "oldTown": { "label": "Historia & arkitektur", "text": "Följ de tolv keramikpanelerna, El Ingenio och historien från 1569 genom den skyddade kärnan." },
      "reviews": { "label": "Gästrecensioner", "text": "Läs vad gäster berättar efter en vistelse hos AMARA." },
      "amenities": { "label": "Komfort och bekvämligheter", "text": "Kontrollera komforten i AMARA-boendena före bokning." }
    },
    "journeyBridge": {
      "eyebrow": "VILL NI SE MER AV ANDALUSIEN?",
      "title": "Låt Frigiliana bli resans lugna del.",
      "text": "Málaga, Granada, Ronda och Caminito del Rey ingår ofta i en större rundresa i Andalusien. Om ni bor i Frigiliana blir byn platsen där tempot växlar mellan de stora dagarna – med gamla gränder, stillsamma kvällar och Medelhavskusten runt omkring.",
      "ctaLabel": "Planera utflykter från Frigiliana"
    },
    "exploreBridge": {
      "eyebrow": "UPPTÄCK",
      "title": "Upptäck Frigiliana",
      "text": "Om Frigiliana känns rätt som bas kan ni börja planera dagarna härifrån: restauranger, stränder, vandringar, marknader och platser att upptäcka i byn och längs kusten.",
      "ctaLabel": "Upptäck Frigiliana"
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
