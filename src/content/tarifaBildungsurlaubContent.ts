/**
 * Educational-leave spoke of the Tarifa kitesurf cluster, German copy.
 *
 * Written German-only on 4 September 2026 by operator decision; the other
 * four locales follow in the translation pass at the end and turn these
 * strings into `LocalizedText`. Every fact comes from worksurfbalance.com
 * (offer, seminar pages, recognition, team) and tarifasurfclub.com, checked
 * on 4 September 2026; prices and dates carry that date on the page.
 */
export interface BildungsurlaubCard {
  id: string;
  kicker: string;
  title: string;
  text: string;
}

export interface BildungsurlaubPriceRow {
  id: string;
  label: string;
  value: string;
  note: string;
}

export const tarifaBildungsurlaubDe = {
  seo: {
    title: 'Bildungsurlaub in Tarifa: Seminar am Meer, Kiten nebenbei | AMARA',
    description:
      'Fünf Seminartage bei Work Surf Balance, anerkannt in dreizehn Bundesländern, neun Stunden Kiten beim Tarifa Surf Club dazu, wohnen bei AMARA mit Blick auf Los Lances. Preise und Termine mit Stand.'
  },
  hero: {
    eyebrow: 'Kitesurfen in Tarifa',
    title: 'Bildungsurlaub in Tarifa',
    subtitle: 'Fünf Seminartage am Meer, anerkannt in dreizehn Bundesländern, und in der freien Zeit der Wind.',
    lead:
      'Fünf Tage Bildungsurlaub im Jahr stehen den meisten Angestellten in Deutschland zu, und in dreizehn Bundesländern dürft ihr sie in Tarifa nehmen. Work Surf Balance macht daraus eine Woche mit Seminar zu Künstlicher Intelligenz oder mentaler Gesundheit, der Tarifa Surf Club hängt das Kiten dran, und wohnen könnt ihr bei uns mit Blick auf Los Lances. **Der Arbeitgeber zahlt das Gehalt weiter, das Seminar zahlt ihr selbst**, und solange er nicht zugestimmt hat, entstehen keine Kosten.',
    updated: 'Geprüft am 4. September 2026',
    note: 'Seminare, Preise, Termine und Anerkennung nach Angaben von Work Surf Balance, das Kiten nach Angaben des Tarifa Surf Club. Gebucht wird dort, die Wohnung bei uns.'
  },
  week: {
    eyebrow: 'Die Woche',
    title: 'Montag bis Freitag Seminar, dazwischen neun Stunden auf dem Wasser',
    intro: 'Das Seminar füllt die fünf Tage, das Kiten die freie Zeit.',
    paragraphs: [
      'Der Bildungsurlaub läuft von Montag bis Freitag in Tarifa. Das Kiten liegt in der freien Zeit dazwischen: **neun Stunden an zwei bis drei Tagen beim Tarifa Surf Club**, Material und Theorie inklusive, und an Tagen mit ablandigem Levante liegt das Boot des Clubs draußen. Wer schon fährt, nimmt statt des Kurses Help 2 Kite und geht mit dem Club raus.',
      'Einen festen Stundenplan veröffentlicht Work Surf Balance nicht; wie sich Seminar und Wasser über die Woche verteilen, besprecht ihr bei der Anmeldung. Abends bleibt die Altstadt, von unserer Wohnung zu Fuß.'
    ]
  },
  seminars: {
    eyebrow: 'Die Seminare',
    title: 'Künstliche Intelligenz oder mentale Gesundheit, jeweils als Einstieg oder Vertiefung',
    intro: 'Vier Themen, jedes fünf Tage, bei einem nach ISO 9001 zertifizierten Anbieter.',
    items: [
      {
        id: 'ki-kompakt',
        kicker: 'Künstliche Intelligenz, Einstieg',
        title: 'KI Kompakt',
        text: 'Wie KI funktioniert und was sie im Berufsalltag kann: Prompts schreiben, ChatGPT und ähnliche Werkzeuge sinnvoll einsetzen, Abläufe automatisieren, Risiken und Verantwortung. Am Ende steht ein eigenes KI-Projekt mit Rückmeldung vom Trainer.'
      },
      {
        id: 'ki-advanced',
        kicker: 'Künstliche Intelligenz, Vertiefung',
        title: 'KI Advanced',
        text: 'Für alle, die KI schon nutzen: aktuelle Technologien und ihre Grenzen, KI in die eigenen Arbeitsabläufe einbauen, eigene Workflows und Teilautomatisierungen entwickeln, neue Anwendungsfälle selbst erkennen und umsetzen.'
      },
      {
        id: 'mh-reset',
        kicker: 'Mental Health, Einstieg',
        title: 'MH Reset: „New Work, New Balance“',
        text: 'Gesundheit als berufliche Schlüsselkompetenz: wie Kopf, Körper und Umfeld zusammenspielen, Resilienz aufbauen, Achtsamkeit im Alltag, Stress erkennen und damit umgehen. Ihr geht mit einem eigenen Plan für eure mentale Gesundheit nach Hause.'
      },
      {
        id: 'mh-clear-mind',
        kicker: 'Mental Health, Vertiefung',
        title: 'MH Clear Mind: „work re:balanced“',
        text: 'Selbstmanagement und der Umgang mit Veränderung im Beruf, mentale Stärke und Entlastung im Arbeitsalltag.'
      }
    ] satisfies BildungsurlaubCard[],
    combos: 'Zwei Seminare lassen sich zu einem Kombitermin zusammenlegen: KI Kompakt mit KI Advanced, Reset mit Clear Mind.'
  },
  states: {
    eyebrow: 'Anerkennung',
    title: 'In dreizehn Bundesländern anerkannt, in dreien entscheidet der Arbeitgeber',
    intro: 'Bildungsurlaub ist Landesrecht. Ob euer Bundesland dabei ist, entscheidet, ob die Woche als Bildungsurlaub zählt oder als Urlaub.',
    recognisedTitle: 'Anerkannt',
    recognised: [
      'Baden-Württemberg',
      'Berlin',
      'Brandenburg',
      'Bremen',
      'Hamburg',
      'Hessen',
      'Mecklenburg-Vorpommern, nur die KI-Seminare',
      'Niedersachsen',
      'Rheinland-Pfalz',
      'Saarland',
      'Sachsen-Anhalt',
      'Schleswig-Holstein',
      'Thüringen'
    ],
    notes: [
      {
        id: 'nrw',
        title: 'Nordrhein-Westfalen',
        text: 'Anerkannte Veranstaltungen müssen innerhalb von 500 Kilometern zur Landesgrenze liegen, Tarifa liegt weiter weg. Möglich bleibt eine freiwillige Freistellung durch den Arbeitgeber; für die Online-Seminare erwartet Work Surf Balance die Anerkennung 2026.'
      },
      {
        id: 'bayern-sachsen',
        title: 'Bayern und Sachsen',
        text: 'Beide Länder haben kein Bildungsurlaubsgesetz. Auch hier geht es über eine freiwillige Freistellung, in Sachsen mit der Anerkennung eines anderen Bundeslandes.'
      }
    ],
    howTo:
      'So läuft es: Ihr sucht Termin und Seminar aus und holt die Zusage eures Arbeitgebers ein; **gebucht wird erst danach, vorher fällt nichts an**. Das Gehalt läuft in der Woche weiter, das Seminar zahlt ihr selbst, manche Arbeitgeber beteiligen sich. Bei Fragen zum Antrag hilft Work Surf Balance.'
  },
  prices: {
    eyebrow: 'Preise und Termine',
    title: 'Ab 790 € fürs Seminar, mit Kiten und Bett ab 1.390 €',
    intro: 'Drei Pakete, für alle vier Seminare gleich. Preise von Work Surf Balance, Stand 4. September 2026.',
    rows: [
      {
        id: 'seminar',
        label: 'Seminar allein',
        value: '790 €',
        note: 'Anreise und Unterkunft organisiert ihr selbst, zum Beispiel bei uns.'
      },
      {
        id: 'seminar-kite',
        label: 'Seminar und Kitekurs',
        value: '1.090 €',
        note: 'Neun Stunden an zwei bis drei Tagen, Material und Theorie inklusive; wer schon fährt, bekommt Help 2 Kite.'
      },
      {
        id: 'seminar-kite-stay',
        label: 'Seminar, Kitekurs und sechs Nächte',
        value: '1.390 €',
        note: 'Im Guesthouse oder in einer Wohnung des Clubs, jede weitere Nacht 50 €.'
      }
    ] satisfies BildungsurlaubPriceRow[],
    dates:
      'Termine: **Alle Termine 2026 sind laut Anbieter ausgebucht**, die Termine 2027 kündigt Work Surf Balance an. Wer dabei sein will, schreibt unten, dann bekommt ihr Bescheid, sobald die neuen Termine stehen.'
  },
  stay: {
    eyebrow: 'Wohnen bei AMARA',
    title: 'Das Seminar bei Work Surf Balance, das Bett bei uns',
    intro: 'Work Surf Balance führt unsere Wohnung selbst in seiner Liste der Unterkünfte.',
    paragraphs: [
      'Wer das Paket mit Unterkunft nimmt, wohnt in den Häusern des Clubs, im TSC Guesthouse oder in einer seiner Wohnungen. Wer lieber eine eigene Wohnung hat, bucht Seminar oder Seminar mit Kitekurs bei Work Surf Balance und wohnt bei uns: **AMARA Family & Surf, private Terrasse zum Atlantik**, freies WLAN für die Seminarunterlagen, Tiefgarage für Auto und Boards, ein Supermarkt gegenüber, Los Lances zu Fuß.',
      'Eine Nachricht reicht, egal an wen. Wir kennen Mark vom Tarifa Surf Club seit Jahren, und Mark gehört auch zum Team von Work Surf Balance.'
    ],
    clubLinkLabel: 'Kurse und Help 2 Kite beim Club'
  },
  bridge: {
    title: 'Die Wohnung mit Blick auf Los Lances',
    reason:
      'Seminar am Laptop, danach der Wind vor der Terrasse: freies WLAN, Tiefgarage für Auto und Boards, der Strand zu Fuß, und die Kaution fürs Leihmaterial übernehmen wir beim Club.'
  },
  team: {
    eyebrow: 'Wer dahintersteht',
    title: 'Vier Leute, ein Kiteschulgründer darunter',
    intro: 'Die Work Surf Balance GmbH, zertifiziert nach ISO 9001:2015.',
    people: [
      { id: 'lukas', name: 'Lukas', role: 'Trainer für IT, Künstliche Intelligenz und Marketing' },
      { id: 'mark', name: 'Mark', role: 'Architekt und Gründer des Tarifa Surf Club, alles auf dem Wasser' },
      { id: 'mona', name: 'Mona', role: 'Unterkünfte, Anreise und alle Fragen davor' },
      { id: 'stefano', name: 'Stefano', role: 'Mental Health, Struktur und Methode der Gesundheitsseminare' }
    ]
  },
  form: {
    eyebrow: 'Platz anfragen',
    title: 'Schreibt Work Surf Balance, wir wissen Bescheid',
    intro:
      'Das Formular öffnet euer Mailprogramm mit einer fertigen Nachricht an Work Surf Balance; bei uns wird nichts gespeichert. Erreichbar ist das Team montags bis freitags von 9 bis 17 Uhr, auf Wunsch auch per WhatsApp.',
    labels: {
      firstName: 'Vorname',
      lastName: 'Nachname',
      email: 'E-Mail-Adresse',
      phone: 'Telefonnummer',
      message: 'Nachricht und Terminwunsch',
      state: 'Bundesland des Arbeitgebers',
      topic: 'Seminarthema',
      choose: 'Bitte auswählen',
      submit: 'Nachricht erstellen'
    },
    states: [
      'Baden-Württemberg',
      'Bayern',
      'Berlin',
      'Brandenburg',
      'Bremen',
      'Hamburg',
      'Hessen',
      'Mecklenburg-Vorpommern',
      'Niedersachsen',
      'Nordrhein-Westfalen',
      'Rheinland-Pfalz',
      'Saarland',
      'Sachsen',
      'Sachsen-Anhalt',
      'Schleswig-Holstein',
      'Thüringen'
    ],
    topics: [
      'Künstliche Intelligenz – Kompakt',
      'Künstliche Intelligenz – Advanced',
      'New Work, New Balance (Mental Health: Reset)',
      'work re:balanced (Mental Health: Clear Mind)',
      'Kombitermin Künstliche Intelligenz (Kompakt + Advanced)',
      'Kombitermin Mental Health (Reset + Clear Mind)'
    ],
    mail: {
      to: 'bildungsurlaub@worksurfbalance.com',
      subject: 'Bildungsurlaub in Tarifa: Anfrage über AMARA',
      template:
        'Hallo, liebes Work Surf Balance Team,\n\nwir sind über die AMARA-Webseite auf euch aufmerksam geworden und haben Interesse an dem Bildungsurlaub. Bitte nehmt mit uns Kontakt auf.\n\nVielen Dank.'
    },
    contact: {
      emailLabel: 'bildungsurlaub@worksurfbalance.com',
      whatsappHref: 'https://wa.me/4915562060079',
      whatsappLabel: 'WhatsApp an Work Surf Balance',
      hours: 'Work Surf Balance GmbH, Montag bis Freitag 9 bis 17 Uhr'
    }
  },
  sources: {
    eyebrow: 'Redaktionelle Transparenz',
    title: 'Quellen dieser Seite',
    text: 'Angebot, Preise, Termine, Anerkennung und Team nach Work Surf Balance, das Kiten nach dem Tarifa Surf Club; beide am 4. September 2026 abgerufen. Verbindlich ist, was die Anbieter bei der Buchung nennen.',
    items: [
      { id: 'wsb-angebot', label: 'Work Surf Balance: Seminare und Pakete', href: 'https://worksurfbalance.com/angebot' },
      { id: 'wsb-anerkennung', label: 'Work Surf Balance: Anerkennung je Bundesland', href: 'https://worksurfbalance.com/#anerkennung' },
      { id: 'wsb-ki-kompakt', label: 'Work Surf Balance: KI Kompakt mit Preisen und Terminen 2026', href: 'https://worksurfbalance.com/angebot/ki-kompakt' },
      { id: 'wsb-team', label: 'Work Surf Balance: Team und Unterkünfte', href: 'https://worksurfbalance.com/warumwir' },
      { id: 'tsc', label: 'Tarifa Surf Club: Kurse, Help 2 Kite und Kitecamps', href: 'https://tarifasurfclub.com/' }
    ]
  }
} as const;
