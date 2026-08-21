import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export interface FrigilianaDailyLifeSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

export interface FrigilianaDailyLifeLocale {
  navLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  sections: FrigilianaDailyLifeSection[];
  decisions: {
    title: string;
    steps: Array<{ num: string; headline: string; text: string }>;
  };
  faq: {
    title: string;
    items: Array<{ question: string; answer: string }>;
  };
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    locationLabel: string;
    comparisonLabel: string;
  };
}

const article = {
  datePublished: '2026-08-16',
  dateModified: '2026-08-16',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

const sharedSources = {
  localBus: 'https://frigiliana.es/horario-autobuses/',
  health:
    'https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/el-sas/servicios-y-centros/informacion-por-centros/24887'
};

export const frigilianaDailyLifeSeo: AmaraAuthoringSeo = {
  version: '2026-08-16-frigiliana-daily-life-v1.0',
  pageType: 'A',
  entityKey: 'amara-brand',
  article,
  languages: {
    en: {
      title: 'Daily Life in Frigiliana: Groceries, Pharmacy & Transport',
      description:
        'How daily life works in Frigiliana: groceries, bakery, pharmacy, errands without a car and when a larger shop in Nerja is useful.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Alltag in Frigiliana: Einkaufen, Apotheke & Mobilität',
      description:
        'So funktioniert der Alltag in Frigiliana: Lebensmittel, Bäcker, Apotheke, Einkaufen ohne Auto und wann sich ein größerer Einkauf in Nerja lohnt.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Vida diaria en Frigiliana: compras, farmacia y movilidad',
      description:
        'Cómo funciona el día a día en Frigiliana: alimentación, panadería, farmacia, recados sin coche y cuándo conviene comprar más en Nerja.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Dagelijks leven in Frigiliana: winkels, apotheek & vervoer',
      description:
        'Zo werkt het dagelijks leven in Frigiliana: boodschappen, bakker, apotheek, zonder auto op pad en wanneer een grotere winkelronde in Nerja handig is.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Vardagen i Frigiliana: matinköp, apotek & transport',
      description:
        'Så fungerar vardagen i Frigiliana: matbutiker, bageri, apotek, ärenden utan bil och när en större handling i Nerja är praktisk.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaDailyLifeContent: Record<
  AmaraLanguage,
  FrigilianaDailyLifeLocale
> = {
  en: {
    navLabel: 'Daily life & services',
    hero: {
      eyebrow: 'Frigiliana · Daily life & services',
      title: 'Daily life in Frigiliana',
      standfirst:
        'For a normal holiday stay, **everyday needs can be covered in Frigiliana itself**. Several small food shops and a bakery sit around the historic centre, while Eroski City adds a larger option in the newer lower village. Nerja is useful for a bigger basket or specialist products, but it is an extension of the choice—not a requirement for making Frigiliana work.',
      note: 'This guide combines current local facts with practical experience from hosting more than 500 Frigiliana guests a year.',
      updated: 'Published August 2026'
    },
    facts: [
      { label: 'Near AMARA', value: 'Several food shops within about 50–300 m' },
      { label: 'Bakery', value: 'Panadería Manolo · about 300 m' },
      { label: 'Larger local shop', value: 'Eroski City in the lower village' },
      { label: 'Without a car', value: 'Normal daily errands work on foot' }
    ],
    sections: [
      {
        id: 'shopping-in-the-village',
        eyebrow: 'Shopping in the village',
        title: 'Small shops cover more of an ordinary day than their size suggests',
        paragraphs: [
          'Several local food shops carry bread, fruit and vegetables, drinks, breakfast supplies, cooking basics and a limited range of household and personal-care items. Their format is small, but for the quantities most holiday guests actually buy, the range is practical.',
          'Around AMARA, several options are approximately 50–300 metres away and the relevant routes along Calle Real can be made without stairs. Panadería Manolo on Calle Real is about 300 metres away and is a useful, easy morning stop for bread. Frigiliana’s Thursday market adds a small weekly option; the dedicated market guide owns the detail.'
        ]
      },
      {
        id: 'larger-shop-in-nerja',
        eyebrow: 'More choice',
        title: 'Nerja extends the range; it does not compensate for a shortage',
        paragraphs: [
          'For a short stay, Frigiliana can be entirely sufficient. During a longer stay, a larger shop in Nerja can be convenient for a bigger basket, international or organic products, broader household and personal-care ranges, specialist diets, or more fish and meat choice.',
          'Many guests visit Nerja or the coast anyway and simply combine that outing with a larger shop. The useful distinction is choice, not dependence: Frigiliana handles the everyday rhythm, while Nerja adds scale when it suits the day.'
        ]
      },
      {
        id: 'pharmacy-health-basics',
        eyebrow: 'Practical basics',
        title: 'Pharmacy, healthcare and cash stay simple',
        paragraphs: [
          'Frigiliana has a pharmacy; check current information or the Farmacia de Guardia rota when timing matters. For more serious medical needs, Centro de Salud Nerja is the practical public health point and provides urgent care around the clock.',
          'Cash is available from CaixaBank and Unicaja ATMs in Frigiliana. These are useful location facts rather than a directory of services, fees or opening hours.'
        ]
      },
      {
        id: 'sundays-opening-hours',
        eyebrow: 'Sundays & opening hours',
        title: 'Think in individual shop patterns, not one village-wide timetable',
        paragraphs: [
          'Many small Frigiliana businesses use individual and sometimes split hours. Shopping is possible on Sundays, with more choice typically available in summer. Outside the main season and on public holidays, check the current hours of the specific business before relying on it.',
          'There is no dependable rule that every shop closes on Sunday or that the whole village shuts for one fixed afternoon block. Evergreen planning works better without freezing individual shop times into the guide.'
        ]
      },
      {
        id: 'daily-life-without-a-car',
        eyebrow: 'Without a car',
        title: 'A car is useful for options, not essential for ordinary errands',
        paragraphs: [
          'Food shops, bakery, pharmacy and ATMs make the normal village routine workable on foot, and the regular bus connects Frigiliana with Nerja. Use the official live timetable or the AMARA arrival guide rather than a saved schedule.',
          'A car becomes useful for a larger shop, flexible coast days, excursions or several destinations in one day. Parking, the final approach and the village’s steps remain separate planning questions in their dedicated guides.'
        ]
      },
      {
        id: 'longer-stays',
        eyebrow: 'Staying longer',
        title: 'The rhythm changes, but the basic division stays clear',
        paragraphs: [
          'For several weeks, Frigiliana still handles spontaneous and daily shopping well. An occasional larger basket or specialist request can be folded into a Nerja day without turning every normal errand into a trip out of the village.'
        ]
      },
      {
        id: 'two-bases-one-rhythm',
        eyebrow: 'Frigiliana & Nerja',
        title: 'Two nearby places can support the same stay in different ways',
        paragraphs: [
          'Frigiliana offers a compact village routine; Nerja offers the broader range of a larger coastal town. They work as complementary bases, not competing versions of the same place. The location comparison explains the wider decision without turning daily shopping into a verdict on either destination.'
        ]
      },
      {
        id: 'amara-everyday-location',
        eyebrow: 'Everyday life at AMARA',
        title: 'Short, stair-free errands fit naturally into the day',
        paragraphs: [
          'AMARA is on Calle Chorruelo 5 in the historic centre. Several small food shops are roughly 50–300 metres away, and the relevant routes along Calle Real do not require stairs. Panadería Manolo is about 300 metres away on the same practical level route.',
          'Fetching bread in the morning, picking up something for the apartment later and walking out for dinner in the evening are not separate logistics projects. For many guests, these short everyday movements are part of what staying in Frigiliana feels like.'
        ]
      }
    ],
    decisions: {
      title: 'Three useful decisions',
      steps: [
        { num: '01', headline: 'Shop locally first', text: 'For breakfast, drinks and normal cooking basics, start with the village.' },
        { num: '02', headline: 'Add Nerja when useful', text: 'Combine a coast day with a larger basket or specialist products.' },
        { num: '03', headline: 'Check live details', text: 'Confirm individual opening hours and the current bus timetable when timing matters.' }
      ]
    },
    faq: {
      title: 'Daily-life questions',
      items: [
        { question: 'Can you buy groceries in Frigiliana?', answer: 'Yes. Several small local shops cover normal food, drink, breakfast and cooking needs, and Eroski City offers a larger local option.' },
        { question: 'Do you have to shop in Nerja?', answer: 'No. Nerja is useful for a larger basket or specialist products, but normal holiday shopping works in Frigiliana.' },
        { question: 'Is there a larger supermarket in Frigiliana?', answer: 'Yes. Eroski City in the newer lower village is larger than the small historic-centre shops, though smaller than the large formats in Nerja.' },
        { question: 'Do you need a car in Frigiliana?', answer: 'Not for ordinary village life. A car adds flexibility for larger shops, the coast and regional outings.' },
        { question: 'Can you shop on Sundays?', answer: 'Yes, there are Sunday options, especially in summer. Hours vary by business and season, so check the specific shop.' },
        { question: 'Are there pharmacy and medical services?', answer: 'Frigiliana has a pharmacy. For more serious needs, Centro de Salud Nerja is the practical public health point.' }
      ]
    },
    related: {
      eyebrow: 'Plan the detail',
      title: 'Use the specialist guides for the next decision',
      links: [
        { token: 'frigiliana_market', label: 'Thursday market', text: 'The market day, location and what to expect.' },
        { token: 'frigiliana_stairs', label: 'Village structure & stairs', text: 'How levels and steps affect repeated daily routes.' },
        { token: 'getting_to_frigiliana', label: 'Arrival & transport', text: 'Bus, transfer, car and the current official timetable source.' },
        { token: 'frigiliana_parking', label: 'Parking', text: 'Where the car fits into an overnight stay and the final approach.' },
        { token: 'frigiliana_winter_stays', label: 'Winter & longer stays', text: 'What matters when the stay becomes several weeks.' },
        { token: 'nerja_vs_frigiliana', label: 'Frigiliana or Nerja', text: 'Two complementary bases with different daily rhythms.' },
        { token: 'location_frigiliana', label: 'Frigiliana location guide', text: 'The full picture of staying in the historic village.' }
      ]
    },
    sources: {
      eyebrow: 'Keeping details current',
      title: 'Official live references',
      intro:
        'Shop and AMARA-distance guidance comes from ongoing local hosting experience. Volatile transport and medical details stay with their official live owners rather than being reproduced as fixed timetables here.',
      checked: 'Content reviewed in August 2026.',
      links: [
        { label: 'Ayuntamiento de Frigiliana · Bus timetable', text: 'Official current Frigiliana–Nerja timetable.', href: sharedSources.localBus },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Nerja', text: 'Official public-health centre record.', href: sharedSources.health }
      ]
    },
    closing: {
      eyebrow: 'The practical conclusion',
      title: 'Frigiliana works on its own; Nerja broadens the choice.',
      body: 'That balance is what makes normal days in the village straightforward without pretending both places offer the same scale.',
      locationLabel: 'Frigiliana location guide',
      comparisonLabel: 'Compare Frigiliana and Nerja'
    }
  },
  de: {
    navLabel: 'Alltag & Versorgung',
    hero: {
      eyebrow: 'Frigiliana · Alltag & Versorgung',
      title: 'Alltag & Versorgung in Frigiliana',
      standfirst:
        'Für einen normalen Ferienaufenthalt lässt sich **der tägliche Bedarf direkt in Frigiliana decken**. Rund um das historische Zentrum liegen mehrere kleine Lebensmittelgeschäfte und eine Bäckerei; im neueren unteren Ort ergänzt ein größerer Eroski City das Angebot. Für größere Einkäufe oder speziellere Produkte ist Nerja praktisch, aber keine Voraussetzung dafür, dass Frigiliana im Alltag funktioniert.',
      note: 'Dieser Guide verbindet aktuelle lokale Fakten mit der Erfahrung aus mehr als 500 Frigiliana-Gästen pro Jahr.',
      updated: 'Veröffentlicht im August 2026'
    },
    facts: [
      { label: 'Rund um AMARA', value: 'Mehrere Lebensmittelgeschäfte in ca. 50–300 m' },
      { label: 'Bäckerei', value: 'Panadería Manolo · ca. 300 m' },
      { label: 'Größerer Laden vor Ort', value: 'Eroski City im unteren Ort' },
      { label: 'Ohne Auto', value: 'Normale Erledigungen funktionieren zu Fuß' }
    ],
    sections: [
      {
        id: 'shopping-in-the-village',
        eyebrow: 'Einkaufen im Dorf',
        title: 'Kleine Läden decken mehr vom Alltag ab, als ihre Größe vermuten lässt',
        paragraphs: [
          'Mehrere lokale Lebensmittelgeschäfte führen Brot, Obst und Gemüse, Getränke, Frühstück, Kochbasics sowie ein begrenztes Sortiment an Haushalts- und Pflegeartikeln. Die Läden sind klein, doch für die Mengen, die Feriengäste tatsächlich einkaufen, ist das Angebot praktisch und überraschend breit.',
          'Rund um AMARA liegen mehrere Möglichkeiten ungefähr 50–300 Meter entfernt; die relevanten Wege entlang der Calle Real sind ohne Treppen möglich. Die Panadería Manolo an der Calle Real ist etwa 300 Meter entfernt und ein einfacher Stopp für Brot am Morgen. Donnerstags ergänzt der Wochenmarkt das Angebot; die Details gehören in den eigenen Markt-Guide.'
        ]
      },
      {
        id: 'larger-shop-in-nerja',
        eyebrow: 'Mehr Auswahl',
        title: 'Nerja erweitert die Auswahl – es kompensiert keinen Mangel',
        paragraphs: [
          'Für einen kurzen Aufenthalt kann Frigiliana vollständig ausreichen. Bei längeren Aufenthalten ist ein größerer Einkauf in Nerja bequem, wenn ihr einen größeren Warenkorb, internationale oder Bio-Produkte, mehr Haushalts- und Pflegeartikel, besondere Ernährungsprodukte oder mehr Auswahl bei Fisch und Fleisch möchtet.',
          'Viele Gäste fahren ohnehin nach Nerja oder ans Meer und verbinden den Weg bei Bedarf mit dem Einkauf. Entscheidend ist die Auswahl, nicht eine Abhängigkeit: Frigiliana trägt den normalen Alltag, Nerja ergänzt den Umfang, wenn es zum Tag passt.'
        ]
      },
      {
        id: 'pharmacy-health-basics',
        eyebrow: 'Praktische Basics',
        title: 'Apotheke, medizinische Hilfe und Bargeld bleiben übersichtlich',
        paragraphs: [
          'Frigiliana hat eine Apotheke; wenn der Zeitpunkt wichtig ist, prüft die aktuellen Angaben beziehungsweise die Farmacia-de-Guardia-Regelung. Für ernsthaftere medizinische Anliegen ist das Centro de Salud Nerja die praktische öffentliche Anlaufstelle mit 24-Stunden-Urgencias.',
          'Geldautomaten gibt es in Frigiliana bei CaixaBank und Unicaja. Das sind nützliche Ortsinformationen, kein Verzeichnis von Leistungen, Gebühren oder Öffnungszeiten.'
        ]
      },
      {
        id: 'sundays-opening-hours',
        eyebrow: 'Sonntage & Öffnungszeiten',
        title: 'Einzelne Ladenrhythmen sind wichtiger als eine pauschale Dorfregel',
        paragraphs: [
          'Viele kleinere Geschäfte in Frigiliana arbeiten mit individuellen und teilweise geteilten Öffnungszeiten. Auch sonntags gibt es Einkaufsmöglichkeiten; im Sommer ist die Auswahl erfahrungsgemäß größer. Außerhalb der Hauptsaison und an Feiertagen lohnt sich ein aktueller Blick auf den konkreten Betrieb.',
          'Weder sind sonntags pauschal alle Geschäfte geschlossen noch folgt der ganze Ort einem festen nachmittäglichen Zeitblock. Für einen Evergreen-Guide ist es verlässlicher, keine einzelnen Ladenzeiten festzuschreiben.'
        ]
      },
      {
        id: 'daily-life-without-a-car',
        eyebrow: 'Ohne Auto',
        title: 'Ein Auto schafft Möglichkeiten, ist für normale Erledigungen aber nicht nötig',
        paragraphs: [
          'Lebensmittelgeschäfte, Bäckerei, Apotheke und Geldautomaten machen den normalen Dorfalltag zu Fuß möglich. Der Linienbus verbindet Frigiliana mit Nerja; nutzt dafür den offiziellen Live-Fahrplan oder den AMARA-Anreiseguide statt einer gespeicherten Tabelle.',
          'Praktisch wird ein Auto für größere Einkäufe, flexible Küstentage, Ausflüge oder mehrere Ziele an einem Tag. Parken, die letzte Etappe und Frigilianas Treppen bleiben eigene Planungsfragen in den jeweiligen Guides.'
        ]
      },
      {
        id: 'longer-stays',
        eyebrow: 'Wenn ihr länger bleibt',
        title: 'Der Rhythmus verändert sich, die Aufteilung bleibt klar',
        paragraphs: [
          'Auch über mehrere Wochen trägt Frigiliana spontane und tägliche Einkäufe gut. Ein gelegentlicher größerer Warenkorb oder ein spezieller Wunsch lässt sich mit einem Nerja-Tag verbinden, ohne aus jeder normalen Besorgung eine Fahrt aus dem Dorf zu machen.'
        ]
      },
      {
        id: 'two-bases-one-rhythm',
        eyebrow: 'Frigiliana & Nerja',
        title: 'Zwei nahe Orte unterstützen denselben Aufenthalt auf unterschiedliche Weise',
        paragraphs: [
          'Frigiliana bietet den kompakten Dorfalltag, Nerja die größere Auswahl einer Küstenstadt. Beide funktionieren als komplementäre Bases und nicht als konkurrierende Versionen desselben Ortes. Der Standortvergleich erklärt die größere Entscheidung, ohne den Einkauf zum Urteil über einen der Orte zu machen.'
        ]
      },
      {
        id: 'amara-everyday-location',
        eyebrow: 'Alltag bei AMARA',
        title: 'Kurze Wege ohne Treppen passen natürlich in den Tag',
        paragraphs: [
          'AMARA liegt an der Calle Chorruelo 5 im historischen Zentrum. Mehrere kleine Lebensmittelgeschäfte sind ungefähr 50–300 Meter entfernt; die relevanten Wege entlang der Calle Real kommen ohne Treppen aus. Die Panadería Manolo erreicht ihr nach etwa 300 Metern auf derselben praktischen Ebene.',
          'Morgens Brot holen, später noch etwas fürs Apartment mitnehmen und abends zu Fuß essen gehen sind keine getrennten Logistikprojekte. Für viele Gäste gehören genau diese kurzen Alltagswege zum Aufenthalt in Frigiliana.'
        ]
      }
    ],
    decisions: {
      title: 'Drei hilfreiche Entscheidungen',
      steps: [
        { num: '01', headline: 'Zuerst im Dorf einkaufen', text: 'Für Frühstück, Getränke und normale Kochbasics beginnt der Einkauf vor Ort.' },
        { num: '02', headline: 'Nerja bei Bedarf ergänzen', text: 'Verbindet einen Küstentag mit größerem Warenkorb oder speziellen Produkten.' },
        { num: '03', headline: 'Live-Details prüfen', text: 'Kontrolliert individuelle Öffnungszeiten und den aktuellen Busfahrplan, wenn das Timing zählt.' }
      ]
    },
    faq: {
      title: 'Fragen zum Alltag',
      items: [
        { question: 'Kann man in Frigiliana Lebensmittel einkaufen?', answer: 'Ja. Mehrere kleine Läden decken normale Lebensmittel, Getränke, Frühstück und Kochbasics ab; Eroski City ergänzt als größerer Markt vor Ort.' },
        { question: 'Müsst ihr zum Einkaufen nach Nerja?', answer: 'Nein. Nerja ist für größere Warenkörbe oder spezielle Produkte praktisch, der normale Ferienalltag funktioniert aber in Frigiliana.' },
        { question: 'Gibt es einen größeren Supermarkt in Frigiliana?', answer: 'Ja. Eroski City im neueren unteren Ort ist größer als die kleinen Läden im historischen Zentrum, aber kleiner als die großen Formate in Nerja.' },
        { question: 'Braucht ihr in Frigiliana ein Auto?', answer: 'Nicht für den normalen Dorfalltag. Ein Auto schafft Flexibilität für größere Einkäufe, Küstentage und Ausflüge.' },
        { question: 'Kann man sonntags einkaufen?', answer: 'Ja, es gibt sonntags Möglichkeiten, besonders im Sommer. Die Zeiten unterscheiden sich nach Betrieb und Saison.' },
        { question: 'Gibt es eine Apotheke und medizinische Versorgung?', answer: 'Frigiliana hat eine Apotheke. Für ernsthaftere Anliegen ist das Centro de Salud Nerja die praktische öffentliche Anlaufstelle.' }
      ]
    },
    related: {
      eyebrow: 'Details planen',
      title: 'Für die nächste Entscheidung gibt es den passenden Guide',
      links: [
        { token: 'frigiliana_market', label: 'Wochenmarkt am Donnerstag', text: 'Markttag, Lage und was euch dort erwartet.' },
        { token: 'frigiliana_stairs', label: 'Dorfstruktur & Treppen', text: 'Wie Ebenen und Stufen wiederholte Alltagswege prägen.' },
        { token: 'getting_to_frigiliana', label: 'Anreise & Transport', text: 'Bus, Transfer, Auto und die offizielle Quelle für den aktuellen Fahrplan.' },
        { token: 'frigiliana_parking', label: 'Parken', text: 'Wie das Auto zu einem Aufenthalt über Nacht und zur letzten Etappe passt.' },
        { token: 'frigiliana_winter_stays', label: 'Winter & längere Aufenthalte', text: 'Was wichtiger wird, wenn aus Tagen mehrere Wochen werden.' },
        { token: 'nerja_vs_frigiliana', label: 'Frigiliana oder Nerja', text: 'Zwei komplementäre Bases mit unterschiedlichem Alltagsrhythmus.' },
        { token: 'location_frigiliana', label: 'Frigiliana Lage-Guide', text: 'Das vollständige Bild eines Aufenthalts im historischen Dorf.' }
      ]
    },
    sources: {
      eyebrow: 'Aktuell bleiben',
      title: 'Offizielle Live-Referenzen',
      intro:
        'Hinweise zu Läden und Wegen rund um AMARA beruhen auf laufender lokaler Gastgebererfahrung. Veränderliche Transport- und Medizindetails bleiben bei ihren offiziellen Live-Ownern, statt hier als feste Tabellen dupliziert zu werden.',
      checked: 'Inhalt geprüft im August 2026.',
      links: [
        { label: 'Ayuntamiento de Frigiliana · Busfahrplan', text: 'Offizieller aktueller Fahrplan Frigiliana–Nerja.', href: sharedSources.localBus },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Nerja', text: 'Amtlicher Eintrag des öffentlichen Gesundheitszentrums.', href: sharedSources.health }
      ]
    },
    closing: {
      eyebrow: 'Das praktische Fazit',
      title: 'Frigiliana funktioniert eigenständig; Nerja erweitert die Auswahl.',
      body: 'Diese Balance macht normale Tage im Dorf unkompliziert, ohne so zu tun, als hätten beide Orte dieselbe Größe.',
      locationLabel: 'Zum Frigiliana Lage-Guide',
      comparisonLabel: 'Frigiliana und Nerja vergleichen'
    }
  },
  es: {
    navLabel: 'Vida diaria y servicios',
    hero: {
      eyebrow: 'Frigiliana · Vida diaria y servicios',
      title: 'Vida diaria y servicios en Frigiliana',
      standfirst:
        'Durante unas vacaciones normales, **las necesidades cotidianas pueden resolverse en Frigiliana**. Alrededor del casco histórico hay varias tiendas pequeñas de alimentación y una panadería; en la parte baja más nueva, Eroski City amplía la oferta. Nerja resulta útil para una compra grande o productos específicos, pero no es imprescindible para que el día a día funcione en el pueblo.',
      note: 'Esta guía combina datos locales actuales con la experiencia práctica de alojar a más de 500 huéspedes al año en Frigiliana.',
      updated: 'Publicado en agosto de 2026'
    },
    facts: [
      { label: 'Cerca de AMARA', value: 'Varias tiendas de alimentación a unos 50–300 m' },
      { label: 'Panadería', value: 'Panadería Manolo · unos 300 m' },
      { label: 'Tienda local más grande', value: 'Eroski City en la parte baja' },
      { label: 'Sin coche', value: 'Los recados normales funcionan a pie' }
    ],
    sections: [
      {
        id: 'shopping-in-the-village',
        eyebrow: 'Comprar en el pueblo',
        title: 'Las tiendas pequeñas cubren más del día a día de lo que su tamaño sugiere',
        paragraphs: [
          'Varias tiendas locales ofrecen pan, fruta y verdura, bebidas, productos para el desayuno, básicos de cocina y una selección limitada de hogar y cuidado personal. El formato es pequeño, pero para las cantidades habituales de unas vacaciones el surtido resulta práctico y sorprendentemente amplio.',
          'Alrededor de AMARA hay varias opciones a unos 50–300 metros y los trayectos relevantes por la calle Real no requieren escaleras. Panadería Manolo, en la calle Real, queda a unos 300 metros y funciona bien para el pan de la mañana. El mercado de los jueves añade una opción semanal; los detalles pertenecen a su guía específica.'
        ]
      },
      {
        id: 'larger-shop-in-nerja',
        eyebrow: 'Más variedad',
        title: 'Nerja amplía la oferta; no compensa una carencia',
        paragraphs: [
          'Para una estancia corta, Frigiliana puede bastar por completo. En estancias más largas, una compra grande en Nerja puede ser cómoda si buscáis una cesta mayor, productos internacionales o ecológicos, más artículos de hogar y cuidado, necesidades alimentarias específicas o mayor variedad de pescado y carne.',
          'Muchos huéspedes ya van a Nerja o a la costa y aprovechan ese día para comprar más. La diferencia útil es la variedad, no la dependencia: Frigiliana sostiene la rutina y Nerja añade escala cuando encaja.'
        ]
      },
      {
        id: 'pharmacy-health-basics',
        eyebrow: 'Aspectos prácticos',
        title: 'Farmacia, asistencia sanitaria y efectivo son fáciles de ubicar',
        paragraphs: [
          'Frigiliana tiene farmacia; cuando el horario sea importante, consultad la información actual o la Farmacia de Guardia. Para necesidades médicas más serias, el Centro de Salud Nerja es la referencia pública práctica y dispone de urgencias las 24 horas.',
          'En Frigiliana hay cajeros de CaixaBank y Unicaja. Son referencias de ubicación útiles, no un directorio de servicios, comisiones u horarios.'
        ]
      },
      {
        id: 'sundays-opening-hours',
        eyebrow: 'Domingos y horarios',
        title: 'Importa más el horario de cada comercio que una regla general del pueblo',
        paragraphs: [
          'Muchas tiendas pequeñas trabajan con horarios individuales y a veces partidos. Los domingos hay opciones de compra y, por experiencia, la oferta suele ser mayor en verano. Fuera de temporada y en festivos conviene comprobar el comercio concreto.',
          'No es cierto que todos los negocios cierren los domingos ni que todo el pueblo se detenga en una franja fija por la tarde. Una guía duradera funciona mejor sin fijar horarios individuales.'
        ]
      },
      {
        id: 'daily-life-without-a-car',
        eyebrow: 'Sin coche',
        title: 'El coche aporta opciones, pero no es necesario para los recados normales',
        paragraphs: [
          'Tiendas, panadería, farmacia y cajeros permiten organizar la rutina a pie. El autobús regular conecta Frigiliana con Nerja; consultad el horario oficial en directo o la guía de llegada de AMARA en vez de una tabla guardada.',
          'El coche es útil para compras grandes, días flexibles de costa, excursiones o varios destinos en una jornada. Aparcar, la llegada final y las escaleras del pueblo conservan sus propias guías.'
        ]
      },
      {
        id: 'longer-stays',
        eyebrow: 'Estancias largas',
        title: 'Cambia el ritmo, pero la división básica sigue clara',
        paragraphs: [
          'Durante varias semanas, Frigiliana sigue resolviendo bien las compras espontáneas y diarias. Una cesta mayor o un producto especial pueden integrarse de vez en cuando en un día de Nerja sin convertir cada recado normal en una salida del pueblo.'
        ]
      },
      {
        id: 'two-bases-one-rhythm',
        eyebrow: 'Frigiliana y Nerja',
        title: 'Dos lugares cercanos sostienen una estancia de maneras distintas',
        paragraphs: [
          'Frigiliana ofrece una rutina compacta de pueblo; Nerja, la variedad de una localidad costera mayor. Funcionan como bases complementarias, no como versiones rivales del mismo lugar. La comparación de ubicaciones desarrolla esa decisión sin convertir la compra diaria en un juicio sobre ninguna.'
        ]
      },
      {
        id: 'amara-everyday-location',
        eyebrow: 'El día a día en AMARA',
        title: 'Los recados cortos y sin escaleras encajan de forma natural',
        paragraphs: [
          'AMARA está en calle Chorruelo 5, dentro del casco histórico. Varias tiendas pequeñas quedan a unos 50–300 metros y los trayectos relevantes por la calle Real no tienen escaleras. Panadería Manolo está a unos 300 metros por ese mismo recorrido práctico.',
          'Ir a por pan por la mañana, recoger algo para el apartamento más tarde y salir a cenar a pie no exige tres planes logísticos. Para muchos huéspedes, esos pequeños movimientos forman parte de la experiencia de alojarse en Frigiliana.'
        ]
      }
    ],
    decisions: {
      title: 'Tres decisiones útiles',
      steps: [
        { num: '01', headline: 'Empezar comprando en el pueblo', text: 'Para desayuno, bebidas y básicos de cocina, la primera opción está en Frigiliana.' },
        { num: '02', headline: 'Añadir Nerja cuando convenga', text: 'Combinad un día de costa con una cesta mayor o productos específicos.' },
        { num: '03', headline: 'Comprobar datos en directo', text: 'Revisad el horario del comercio y el autobús actual cuando el momento importe.' }
      ]
    },
    faq: {
      title: 'Preguntas sobre el día a día',
      items: [
        { question: '¿Se pueden comprar alimentos en Frigiliana?', answer: 'Sí. Varias tiendas pequeñas cubren alimentación, bebidas, desayuno y básicos; Eroski City añade una opción local mayor.' },
        { question: '¿Tenéis que comprar en Nerja?', answer: 'No. Nerja es útil para una cesta grande o productos específicos, pero la compra normal de vacaciones funciona en Frigiliana.' },
        { question: '¿Hay un supermercado más grande en Frigiliana?', answer: 'Sí. Eroski City, en la parte baja más nueva, es mayor que las tiendas del casco histórico, aunque menor que los grandes formatos de Nerja.' },
        { question: '¿Necesitáis coche en Frigiliana?', answer: 'No para la rutina del pueblo. El coche aporta flexibilidad para compras grandes, costa y excursiones.' },
        { question: '¿Se puede comprar los domingos?', answer: 'Sí, hay opciones dominicales, especialmente en verano. Los horarios cambian según comercio y temporada.' },
        { question: '¿Hay farmacia y asistencia médica?', answer: 'Frigiliana tiene farmacia. Para necesidades más serias, el Centro de Salud Nerja es la referencia pública práctica.' }
      ]
    },
    related: {
      eyebrow: 'Planificar los detalles',
      title: 'Cada siguiente decisión tiene su propia guía',
      links: [
        { token: 'frigiliana_market', label: 'Mercado de los jueves', text: 'Día, ubicación y qué esperar del mercado.' },
        { token: 'frigiliana_stairs', label: 'Estructura y escaleras', text: 'Cómo influyen niveles y peldaños en los recorridos diarios.' },
        { token: 'getting_to_frigiliana', label: 'Llegada y transporte', text: 'Autobús, transfer, coche y fuente oficial del horario actual.' },
        { token: 'frigiliana_parking', label: 'Aparcamiento', text: 'Cómo encaja el coche en una estancia y en la llegada final.' },
        { token: 'frigiliana_winter_stays', label: 'Invierno y estancias largas', text: 'Qué importa cuando los días se convierten en semanas.' },
        { token: 'nerja_vs_frigiliana', label: 'Frigiliana o Nerja', text: 'Dos bases complementarias con ritmos cotidianos distintos.' },
        { token: 'location_frigiliana', label: 'Guía de ubicación de Frigiliana', text: 'La visión completa de alojarse en el pueblo histórico.' }
      ]
    },
    sources: {
      eyebrow: 'Mantenerse al día',
      title: 'Referencias oficiales en directo',
      intro:
        'La información sobre tiendas y distancias desde AMARA procede de la experiencia local continuada. Los datos variables de transporte y sanidad permanecen en sus fuentes oficiales, sin duplicar aquí horarios fijos.',
      checked: 'Contenido revisado en agosto de 2026.',
      links: [
        { label: 'Ayuntamiento de Frigiliana · Horario de autobuses', text: 'Horario oficial actual Frigiliana–Nerja.', href: sharedSources.localBus },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Nerja', text: 'Registro oficial del centro sanitario público.', href: sharedSources.health }
      ]
    },
    closing: {
      eyebrow: 'La conclusión práctica',
      title: 'Frigiliana funciona por sí sola; Nerja amplía la oferta.',
      body: 'Ese equilibrio facilita la rutina del pueblo sin fingir que ambos lugares tienen la misma escala.',
      locationLabel: 'Guía de ubicación de Frigiliana',
      comparisonLabel: 'Comparar Frigiliana y Nerja'
    }
  },
  nl: {
    navLabel: 'Dagelijks leven & voorzieningen',
    hero: {
      eyebrow: 'Frigiliana · Dagelijks leven & voorzieningen',
      title: 'Dagelijks leven en voorzieningen in Frigiliana',
      standfirst:
        'Tijdens een gewone vakantie kunnen jullie **de dagelijkse behoeften in Frigiliana zelf regelen**. Rond de historische kern liggen verschillende kleine voedingswinkels en een bakker; in het nieuwere benedendorp vult Eroski City het aanbod aan. Nerja is handig voor een grotere winkelronde of specifieke producten, maar niet noodzakelijk om het dagelijks leven in Frigiliana te laten werken.',
      note: 'Deze gids combineert actuele lokale feiten met ervaring uit meer dan 500 Frigiliana-gasten per jaar.',
      updated: 'Gepubliceerd in augustus 2026'
    },
    facts: [
      { label: 'Rond AMARA', value: 'Meerdere voedingswinkels op circa 50–300 m' },
      { label: 'Bakker', value: 'Panadería Manolo · circa 300 m' },
      { label: 'Grotere lokale winkel', value: 'Eroski City in het benedendorp' },
      { label: 'Zonder auto', value: 'Gewone dagelijkse boodschappen kunnen te voet' }
    ],
    sections: [
      {
        id: 'shopping-in-the-village',
        eyebrow: 'Boodschappen in het dorp',
        title: 'Kleine winkels dekken meer van de dag dan hun formaat doet vermoeden',
        paragraphs: [
          'Verschillende lokale voedingswinkels verkopen brood, groente en fruit, drank, ontbijtspullen, kookbasics en een beperkte keuze huishoudelijke en verzorgingsproducten. Ze zijn klein, maar voor de hoeveelheden die vakantiegasten meestal kopen is het aanbod praktisch en verrassend breed.',
          'Rond AMARA liggen meerdere opties op ongeveer 50–300 meter; de relevante routes langs Calle Real zijn zonder trappen. Panadería Manolo ligt op circa 300 meter en is een makkelijke ochtendstop voor brood. De donderdagmarkt voegt een wekelijkse mogelijkheid toe; de aparte marktgids beheert de details.'
        ]
      },
      {
        id: 'larger-shop-in-nerja',
        eyebrow: 'Meer keuze',
        title: 'Nerja vergroot het aanbod; het vult geen tekort aan',
        paragraphs: [
          'Voor een kort verblijf kan Frigiliana volledig volstaan. Bij een langer verblijf is een grotere winkelronde in Nerja handig voor een volle kar, internationale of biologische producten, meer huishoudelijke en verzorgingsartikelen, speciale diëten of een ruimere keuze vis en vlees.',
          'Veel gasten gaan toch naar Nerja of de kust en combineren die dag met boodschappen. Het verschil is keuze, geen afhankelijkheid: Frigiliana draagt de dagelijkse routine en Nerja voegt schaal toe wanneer dat uitkomt.'
        ]
      },
      {
        id: 'pharmacy-health-basics',
        eyebrow: 'Praktische basis',
        title: 'Apotheek, zorg en contant geld blijven overzichtelijk',
        paragraphs: [
          'Frigiliana heeft een apotheek; controleer actuele informatie of de Farmacia de Guardia wanneer het tijdstip belangrijk is. Voor ernstigere medische vragen is Centro de Salud Nerja het praktische openbare zorgpunt, met 24-uurs spoedzorg.',
          'In Frigiliana zijn geldautomaten van CaixaBank en Unicaja. Dat zijn nuttige locatiegegevens, geen overzicht van diensten, tarieven of openingstijden.'
        ]
      },
      {
        id: 'sundays-opening-hours',
        eyebrow: 'Zondagen & openingstijden',
        title: 'Het patroon per winkel telt meer dan één dorpsregel',
        paragraphs: [
          'Veel kleine winkels werken met eigen en soms gesplitste openingstijden. Ook op zondag zijn er mogelijkheden; in de zomer is de keuze doorgaans groter. Buiten het seizoen en op feestdagen is het verstandig de specifieke winkel te controleren.',
          'Niet alle winkels zijn op zondag gesloten en het hele dorp sluit ook niet volgens één vast middagblok. Een blijvende gids is betrouwbaarder zonder individuele winkeltijden vast te zetten.'
        ]
      },
      {
        id: 'daily-life-without-a-car',
        eyebrow: 'Zonder auto',
        title: 'Een auto geeft opties, maar is niet nodig voor gewone boodschappen',
        paragraphs: [
          'Voedingswinkels, bakker, apotheek en geldautomaten maken het dagelijks leven te voet mogelijk. De reguliere bus verbindt Frigiliana met Nerja; gebruik het officiële live rooster of de AMARA-aankomstgids in plaats van een opgeslagen tabel.',
          'Een auto is handig voor een grote winkelronde, flexibele kustdagen, uitstapjes of meerdere doelen op één dag. Parkeren, de laatste benadering en de trappen van het dorp blijven aparte onderwerpen in hun eigen gidsen.'
        ]
      },
      {
        id: 'longer-stays',
        eyebrow: 'Langer verblijven',
        title: 'Het ritme verandert, maar de taakverdeling blijft duidelijk',
        paragraphs: [
          'Ook tijdens meerdere weken werkt Frigiliana goed voor spontane en dagelijkse boodschappen. Een grotere kar of specifieke wens kan af en toe bij een dag in Nerja worden gevoegd, zonder van elke gewone boodschap een rit buiten het dorp te maken.'
        ]
      },
      {
        id: 'two-bases-one-rhythm',
        eyebrow: 'Frigiliana & Nerja',
        title: 'Twee nabije plaatsen ondersteunen hetzelfde verblijf op een andere manier',
        paragraphs: [
          'Frigiliana biedt een compacte dorpsroutine; Nerja de bredere keuze van een grotere kustplaats. Ze werken als aanvullende bases, niet als concurrerende versies van dezelfde plek. De locatievergelijking behandelt die bredere keuze zonder boodschappen tot oordeel te maken.'
        ]
      },
      {
        id: 'amara-everyday-location',
        eyebrow: 'Dagelijks leven bij AMARA',
        title: 'Korte routes zonder trappen passen vanzelf in de dag',
        paragraphs: [
          'AMARA ligt aan Calle Chorruelo 5 in de historische kern. Verschillende kleine voedingswinkels liggen op circa 50–300 meter en de relevante routes langs Calle Real hebben geen trappen. Panadería Manolo ligt op ongeveer 300 meter langs dezelfde praktische route.',
          '’s Ochtends brood halen, later iets voor het appartement meenemen en ’s avonds te voet uit eten gaan zijn geen afzonderlijke logistieke projecten. Voor veel gasten horen juist deze korte dagelijkse routes bij een verblijf in Frigiliana.'
        ]
      }
    ],
    decisions: {
      title: 'Drie nuttige keuzes',
      steps: [
        { num: '01', headline: 'Begin in het dorp', text: 'Voor ontbijt, drank en gewone kookbasics ligt de eerste optie lokaal.' },
        { num: '02', headline: 'Voeg Nerja toe wanneer nuttig', text: 'Combineer een kustdag met een grotere kar of specifieke producten.' },
        { num: '03', headline: 'Controleer live details', text: 'Check individuele openingstijden en het actuele busrooster wanneer timing telt.' }
      ]
    },
    faq: {
      title: 'Vragen over het dagelijks leven',
      items: [
        { question: 'Kunnen jullie boodschappen doen in Frigiliana?', answer: 'Ja. Verschillende kleine winkels dekken voeding, drank, ontbijt en kookbasics; Eroski City biedt een grotere lokale optie.' },
        { question: 'Moeten jullie voor boodschappen naar Nerja?', answer: 'Nee. Nerja is handig voor een grote kar of specifieke producten, maar gewone vakantieboodschappen werken in Frigiliana.' },
        { question: 'Is er een grotere supermarkt in Frigiliana?', answer: 'Ja. Eroski City in het nieuwere benedendorp is groter dan de winkels in de historische kern, maar kleiner dan de grote formules in Nerja.' },
        { question: 'Hebben jullie een auto nodig in Frigiliana?', answer: 'Niet voor het gewone dorpsleven. Een auto biedt flexibiliteit voor grote boodschappen, kustdagen en uitstapjes.' },
        { question: 'Kunnen jullie op zondag boodschappen doen?', answer: 'Ja, er zijn zondagse mogelijkheden, vooral in de zomer. Tijden verschillen per winkel en seizoen.' },
        { question: 'Zijn er een apotheek en medische zorg?', answer: 'Frigiliana heeft een apotheek. Voor ernstigere behoeften is Centro de Salud Nerja het praktische openbare zorgpunt.' }
      ]
    },
    related: {
      eyebrow: 'Plan de details',
      title: 'Gebruik voor elke volgende keuze de specialistische gids',
      links: [
        { token: 'frigiliana_market', label: 'Donderdagmarkt', text: 'Marktdag, locatie en wat jullie kunnen verwachten.' },
        { token: 'frigiliana_stairs', label: 'Dorpsstructuur & trappen', text: 'Hoe niveaus en treden dagelijkse routes beïnvloeden.' },
        { token: 'getting_to_frigiliana', label: 'Aankomst & vervoer', text: 'Bus, transfer, auto en de officiële bron voor het actuele rooster.' },
        { token: 'frigiliana_parking', label: 'Parkeren', text: 'Hoe de auto past bij een verblijf en de laatste benadering.' },
        { token: 'frigiliana_winter_stays', label: 'Winter & langer verblijf', text: 'Wat telt wanneer dagen meerdere weken worden.' },
        { token: 'nerja_vs_frigiliana', label: 'Frigiliana of Nerja', text: 'Twee aanvullende bases met verschillende dagelijkse ritmes.' },
        { token: 'location_frigiliana', label: 'Locatiegids Frigiliana', text: 'Het volledige beeld van verblijven in het historische dorp.' }
      ]
    },
    sources: {
      eyebrow: 'Actueel blijven',
      title: 'Officiële live bronnen',
      intro:
        'Informatie over winkels en afstanden rond AMARA komt uit voortdurende lokale hostervaring. Veranderlijke vervoer- en zorgdetails blijven bij hun officiële live bronnen in plaats van hier vaste tabellen te dupliceren.',
      checked: 'Inhoud gecontroleerd in augustus 2026.',
      links: [
        { label: 'Ayuntamiento de Frigiliana · Busrooster', text: 'Officieel actueel rooster Frigiliana–Nerja.', href: sharedSources.localBus },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Nerja', text: 'Officiële registratie van het openbare gezondheidscentrum.', href: sharedSources.health }
      ]
    },
    closing: {
      eyebrow: 'De praktische conclusie',
      title: 'Frigiliana werkt zelfstandig; Nerja vergroot de keuze.',
      body: 'Die balans maakt gewone dorpsdagen eenvoudig zonder te doen alsof beide plaatsen even groot zijn.',
      locationLabel: 'Locatiegids van Frigiliana',
      comparisonLabel: 'Vergelijk Frigiliana en Nerja'
    }
  },
  sv: {
    navLabel: 'Vardag & service',
    hero: {
      eyebrow: 'Frigiliana · Vardag & service',
      title: 'Vardag och service i Frigiliana',
      standfirst:
        'Under en vanlig semestervistelse kan **de dagliga behoven lösas i Frigiliana**. Runt den historiska byn finns flera små matbutiker och ett bageri; i den nyare nedre bydelen kompletterar Eroski City utbudet. Nerja är praktiskt för en större handling eller särskilda produkter, men behövs inte för att vardagen i Frigiliana ska fungera.',
      note: 'Guiden kombinerar aktuella lokala fakta med erfarenhet från fler än 500 Frigiliana-gäster per år.',
      updated: 'Publicerad i augusti 2026'
    },
    facts: [
      { label: 'Nära AMARA', value: 'Flera matbutiker inom cirka 50–300 m' },
      { label: 'Bageri', value: 'Panadería Manolo · cirka 300 m' },
      { label: 'Större lokal butik', value: 'Eroski City i den nedre bydelen' },
      { label: 'Utan bil', value: 'Vanliga vardagsärenden fungerar till fots' }
    ],
    sections: [
      {
        id: 'shopping-in-the-village',
        eyebrow: 'Handla i byn',
        title: 'Små butiker täcker mer av vardagen än storleken antyder',
        paragraphs: [
          'Flera lokala matbutiker säljer bröd, frukt och grönt, dryck, frukostvaror, basvaror för matlagning och ett begränsat urval hushålls- och hygienprodukter. Formatet är litet, men för de mängder semestergäster normalt köper är utbudet praktiskt och förvånansvärt brett.',
          'Runt AMARA finns flera alternativ cirka 50–300 meter bort och de relevanta vägarna längs Calle Real är utan trappor. Panadería Manolo ligger ungefär 300 meter bort och är ett enkelt morgonstopp för bröd. Torsdagsmarknaden ger ett veckotillskott; den egna marknadsguiden äger detaljerna.'
        ]
      },
      {
        id: 'larger-shop-in-nerja',
        eyebrow: 'Större urval',
        title: 'Nerja breddar valet; det kompenserar inte för en brist',
        paragraphs: [
          'För en kort vistelse kan Frigiliana räcka helt. Under en längre vistelse kan en större handling i Nerja vara bekväm för en större korg, internationella eller ekologiska produkter, fler hushålls- och hygienvaror, särskilda kostbehov eller bredare fisk- och köttutbud.',
          'Många gäster åker ändå till Nerja eller kusten och kombinerar dagen med en större handling. Skillnaden är urval, inte beroende: Frigiliana bär vardagen och Nerja tillför skala när det passar.'
        ]
      },
      {
        id: 'pharmacy-health-basics',
        eyebrow: 'Praktiska grunder',
        title: 'Apotek, vård och kontanter är enkla att orientera sig till',
        paragraphs: [
          'Frigiliana har apotek; kontrollera aktuell information eller Farmacia de Guardia när tiden är viktig. För allvarligare medicinska behov är Centro de Salud Nerja den praktiska offentliga vårdpunkten med akutmottagning dygnet runt.',
          'I Frigiliana finns bankomater från CaixaBank och Unicaja. Det är användbara platsfakta, inte en katalog över tjänster, avgifter eller öppettider.'
        ]
      },
      {
        id: 'sundays-opening-hours',
        eyebrow: 'Söndagar & öppettider',
        title: 'Varje butiks rytm är viktigare än en allmän byregel',
        paragraphs: [
          'Många små butiker har individuella och ibland delade öppettider. Det går att handla på söndagar och utbudet är vanligtvis större på sommaren. Utanför högsäsongen och på helgdagar bör den aktuella butiken kontrolleras.',
          'Alla butiker är inte stängda på söndagar och hela byn följer inte ett fast eftermiddagsuppehåll. En långlivad guide blir mer tillförlitlig utan fasta butikstider.'
        ]
      },
      {
        id: 'daily-life-without-a-car',
        eyebrow: 'Utan bil',
        title: 'Bilen ger alternativ men behövs inte för vanliga ärenden',
        paragraphs: [
          'Matbutiker, bageri, apotek och bankomater gör vardagen möjlig till fots. Den reguljära bussen förbinder Frigiliana med Nerja; använd den officiella live-tidtabellen eller AMARAs ankomstguide i stället för ett sparat schema.',
          'Bil är praktiskt för större handling, flexibla kustdagar, utflykter eller flera mål under samma dag. Parkering, sista infarten och byns trappor har egna guider.'
        ]
      },
      {
        id: 'longer-stays',
        eyebrow: 'Längre vistelser',
        title: 'Rytmen förändras men grundfördelningen är tydlig',
        paragraphs: [
          'Även under flera veckor fungerar Frigiliana bra för spontana och dagliga inköp. En större korg eller ett särskilt önskemål kan ibland fogas till en Nerjadag utan att varje vanligt ärende blir en resa ut ur byn.'
        ]
      },
      {
        id: 'two-bases-one-rhythm',
        eyebrow: 'Frigiliana & Nerja',
        title: 'Två närliggande platser stödjer samma vistelse på olika sätt',
        paragraphs: [
          'Frigiliana erbjuder en kompakt byvardag; Nerja det bredare utbudet i en större kustort. De fungerar som kompletterande baser, inte konkurrerande versioner av samma plats. Lägesjämförelsen utvecklar valet utan att göra matinköp till en dom över någon av dem.'
        ]
      },
      {
        id: 'amara-everyday-location',
        eyebrow: 'Vardagen vid AMARA',
        title: 'Korta vägar utan trappor passar naturligt in i dagen',
        paragraphs: [
          'AMARA ligger på Calle Chorruelo 5 i den historiska byn. Flera små matbutiker finns cirka 50–300 meter bort och de relevanta vägarna längs Calle Real saknar trappor. Panadería Manolo ligger omkring 300 meter bort längs samma praktiska stråk.',
          'Att hämta bröd på morgonen, köpa något till lägenheten senare och gå ut och äta på kvällen är inte tre separata logistikprojekt. För många gäster är just dessa korta vardagsrörelser en del av vistelsen i Frigiliana.'
        ]
      }
    ],
    decisions: {
      title: 'Tre användbara beslut',
      steps: [
        { num: '01', headline: 'Handla lokalt först', text: 'För frukost, dryck och vanliga basvaror börjar inköpen i byn.' },
        { num: '02', headline: 'Lägg till Nerja vid behov', text: 'Kombinera en kustdag med större korg eller särskilda produkter.' },
        { num: '03', headline: 'Kontrollera liveuppgifter', text: 'Se butikens tider och aktuell busstidtabell när tidpunkten är viktig.' }
      ]
    },
    faq: {
      title: 'Frågor om vardagen',
      items: [
        { question: 'Kan man köpa mat i Frigiliana?', answer: 'Ja. Flera små butiker täcker mat, dryck, frukost och basvaror; Eroski City ger ett större lokalt alternativ.' },
        { question: 'Måste ni handla i Nerja?', answer: 'Nej. Nerja är praktiskt för en större korg eller särskilda produkter, men vanliga semesterinköp fungerar i Frigiliana.' },
        { question: 'Finns det en större mataffär i Frigiliana?', answer: 'Ja. Eroski City i den nyare nedre bydelen är större än butikerna i den historiska byn, men mindre än de stora formaten i Nerja.' },
        { question: 'Behöver ni bil i Frigiliana?', answer: 'Inte för den vanliga byvardagen. Bil ger flexibilitet för större handling, kustdagar och utflykter.' },
        { question: 'Går det att handla på söndagar?', answer: 'Ja, det finns söndagsalternativ, särskilt på sommaren. Tiderna varierar med butik och säsong.' },
        { question: 'Finns apotek och sjukvård?', answer: 'Frigiliana har apotek. För allvarligare behov är Centro de Salud Nerja den praktiska offentliga vårdpunkten.' }
      ]
    },
    related: {
      eyebrow: 'Planera detaljerna',
      title: 'Använd specialistguiden för nästa beslut',
      links: [
        { token: 'frigiliana_market', label: 'Torsdagsmarknaden', text: 'Marknadsdag, plats och vad ni kan vänta er.' },
        { token: 'frigiliana_stairs', label: 'Bystruktur & trappor', text: 'Hur nivåer och trappor påverkar dagliga vägar.' },
        { token: 'getting_to_frigiliana', label: 'Ankomst & transport', text: 'Buss, transfer, bil och officiell källa för aktuell tidtabell.' },
        { token: 'frigiliana_parking', label: 'Parkering', text: 'Hur bilen passar en vistelse och den sista infarten.' },
        { token: 'frigiliana_winter_stays', label: 'Vinter & längre vistelser', text: 'Vad som räknas när dagar blir flera veckor.' },
        { token: 'nerja_vs_frigiliana', label: 'Frigiliana eller Nerja', text: 'Två kompletterande baser med olika vardagsrytm.' },
        { token: 'location_frigiliana', label: 'Frigilianas lägesguide', text: 'Hela bilden av att bo i den historiska byn.' }
      ]
    },
    sources: {
      eyebrow: 'Håll uppgifterna aktuella',
      title: 'Officiella livekällor',
      intro:
        'Information om butiker och avstånd runt AMARA kommer från fortlöpande lokal värd- och uthyrningserfarenhet. Föränderliga transport- och vårduppgifter stannar hos sina officiella livekällor i stället för att dupliceras som fasta tabeller.',
      checked: 'Innehållet kontrollerat i augusti 2026.',
      links: [
        { label: 'Ayuntamiento de Frigiliana · Busstidtabell', text: 'Officiell aktuell tidtabell Frigiliana–Nerja.', href: sharedSources.localBus },
        { label: 'Servicio Andaluz de Salud · Centro de Salud Nerja', text: 'Officiell post för den offentliga vårdcentralen.', href: sharedSources.health }
      ]
    },
    closing: {
      eyebrow: 'Den praktiska slutsatsen',
      title: 'Frigiliana fungerar självständigt; Nerja breddar valet.',
      body: 'Den balansen gör vanliga bydagar enkla utan att låtsas att platserna har samma skala.',
      locationLabel: 'Frigilianas lägesguide',
      comparisonLabel: 'Jämför Frigiliana och Nerja'
    }
  }
};
