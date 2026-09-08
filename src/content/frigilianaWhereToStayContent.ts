import type { LinkToken } from '../lib/linkResolver';

/**
 * New Where-to-stay body copy for Frigiliana (Type A redesign, mockup approved
 * 2026-09-08). German first on purpose: the operator verifies the German render
 * against the mockup before the other four languages are authored, so this file
 * holds plain German strings and is deliberately NOT localized yet. Emphasis is
 * written as **double asterisks** for InlineEmphasis. Once German is signed off,
 * this converts to a localized structure and en/es/nl/sv get authored.
 */
export interface FrigilianaWhereToStayCopy {
  hero: {
    eyebrow: string;
    title: string;
    lede: string;
    body: string;
    traits: string[];
    stats: Array<{ k: string; l: string }>;
  };
  glanceTitle: string;
  glanceIntro: string;
  glance: Array<{ idx: string; href: string; title: string; blurb: string }>;
  steps: {
    title: string;
    intro: string;
    copy: string;
    note: string;
    day: string[];
  };
  zonesTitle: string;
  zonesIntro: string;
  zones: Array<{
    id: string;
    img: 'g1' | 'g2' | 'g3';
    cap: string;
    sub: string;
    h3: string;
    desc: string;
    idealFor: string;
    honest: string;
  }>;
  whoTitle: string;
  whoIntro: string;
  who: Array<{ title: string; text: string }>;
  pointer: { text: string; linkLabel: string; linkToken: LinkToken };
  verdict: {
    eyebrow: string;
    title: string;
    caption: string;
    lead: string;
    facts: string[];
    honest: string;
    primaryCta: string;
  };
}

export const frigilianaWhereToStayDe: FrigilianaWhereToStayCopy = {
  hero: {
    eyebrow: 'Wo übernachten · Frigiliana',
    title: 'Wo in Frigiliana übernachten',
    lede: 'Weißes Bergdorf über der Küste, steil an den Hang gebaut.',
    body: 'Maurisches Erbe im Barribarto, Panorama bis zum Mittelmeer, Kunsthandwerk in den Gassen, Ruhe abseits der Küstenhektik. Doch Frigiliana ist ein Hangdorf: Wo ihr wohnt, entscheidet euren Alltag — und vor allem, wie viele Stufen zwischen euch und dem Morgenkaffee liegen.',
    traits: [
      '**Pueblo blanco** · weißes Bergdorf',
      'Maurisches Erbe',
      'Panorama zum Meer',
      'Kunsthandwerk',
      'Felsige Wanderwege'
    ],
    stats: [
      { k: '~300 m', l: 'über dem Meer — Hangdorf, kein flacher Badeort' },
      { k: '6 km', l: 'Luftlinie zur Küste in Nerja — zwei Welten' },
      { k: '3', l: 'Teile mit spürbar anderem Alltag' }
    ]
  },
  glanceTitle: 'Kurz: die drei Teile von Frigiliana',
  glanceIntro:
    'Drei Teile, drei Aufenthalte. Worin sie sich unterscheiden, entscheidet vor allem die Höhe am Hang — deshalb direkt danach „Das Rauf und Runter“.',
  glance: [
    { idx: '01', href: '#altstadt', title: 'Historische Altstadt', blurb: 'Charme, maurische Gassen — aber steil und viele Stufen' },
    { idx: '02', href: '#neu', title: 'Der neue Ort', blurb: 'Flacher, einfacheres Parken — ohne das historische Flair' },
    { idx: '03', href: '#campo', title: 'El Campo', blurb: 'Raum, Ruhe, Panorama — Auto meist praktisch oder nötig' }
  ],
  steps: {
    title: 'Das Rauf und Runter',
    intro:
      'Frigilianas eigentliches Wahrzeichen sind nicht die Blumen an den Wänden, sondern die Stufen. Der Ort zieht sich steil den Hang hinauf — und ihr lauft ihn nicht einmal, sondern den ganzen Tag.',
    copy:
      'Zwei Adressen, kaum hundert Meter auseinander, können dreißig Höhenmeter und mehrere Treppen trennen. Auf der Karte ist alles nah — in den Beinen nicht. Deshalb entscheidet in Frigiliana nicht die Entfernung, sondern die **Höhe** über euren Alltag.',
    note: 'Ein normaler Tag heißt: hinauf, hinunter — und wieder hinauf.',
    day: [
      'Morgens hoch zum Kaffee',
      'Mit Einkäufen zurück den Hang',
      'Hinunter zum Strand — und wieder hoch',
      'Abends zum Essen ins Dorf',
      'Im Dunkeln der Heimweg bergauf'
    ]
  },
  zonesTitle: 'Die drei Teile von Frigiliana',
  zonesIntro:
    'Grob gibt es drei Welten: die historische Altstadt, den neueren Ort darunter und den Campo außerhalb. Jede löst das Rauf und Runter anders — und tauscht dafür etwas anderes ein.',
  zones: [
    {
      id: 'altstadt',
      img: 'g1',
      cap: 'Historische Altstadt · Barribarto',
      sub: 'Die historische Altstadt',
      h3: 'Der Charme — und der Hang',
      desc:
        'Weiß getünchte Gassen, der maurische Grundriss des Barribarto, Cafés und Restaurants vor der Tür. Wunderschön — aber deutlich steiler als der neuere Ort: Schon innerhalb der Altstadt liegen zwischen den Adressen große Höhenunterschiede und viele Stufen.',
      idealFor: 'Kulturreisende, Paare, Ästhetiker — Dorfleben und Atmosphäre direkt vor der Tür.',
      honest: 'Autofrei, Kopfsteinpflaster, Stufen. **Wo genau** ihr wohnt, macht hier den größten Unterschied.'
    },
    {
      id: 'neu',
      img: 'g2',
      cap: 'Der neue Ort · Neubau',
      sub: 'Der neuere Ort',
      h3: 'Praktisch, flacher — ohne den alten Charme',
      desc:
        'Unterhalb und südlich der Altstadt liegt der neuere Teil: breitere Straßen, einfachere Zufahrt und Parken, weniger Stufen. Bequem im Alltag — moderner und funktionaler geprägt.',
      idealFor: 'Wer Bequemlichkeit, Auto-Zufahrt und wenige Stufen über das Altstadt-Flair stellt.',
      honest: 'Moderner und funktionaler geprägt, aber ohne die historische Atmosphäre des Barribarto — die Altstadt beginnt erst nach einem Weg.'
    },
    {
      id: 'campo',
      img: 'g3',
      cap: 'El Campo · außerhalb',
      sub: 'El Campo',
      h3: 'Landhaus, Raum und Stille',
      desc:
        'Draußen im Grünen: Landhäuser mit Platz, Privatsphäre und weitem Panorama über die Sierra bis zur Küste — oft mit Pool. Frigiliana wird zum Ort, in den ihr hineinfahrt, statt vor der Haustür zu beginnen.',
      idealFor: 'Wer bewusst Abgeschiedenheit, Natur und Raum sucht.',
      honest: 'Für Einkäufe, Restaurants und spontane Dorfbesuche ist ein Auto bei vielen Campo-Lagen praktisch oder notwendig.'
    }
  ],
  whoTitle: 'Und für wen ist Frigiliana überhaupt?',
  whoIntro:
    'Frigiliana passt zu Gästen, die das ruhige, ursprüngliche Andalusien abseits der Küstenhektik suchen. Wer Strand und Trubel vor der Tür will, ist unten in Nerja oft besser aufgehoben.',
  who: [
    { title: 'Ruhesuchende', text: 'Stille Gassen, frühe Morgen, ein Ort, der abends zur Ruhe kommt statt laut zu werden.' },
    { title: 'Paare', text: 'Private Terrassen mit Blick übers Grün, kurze Wege zum Abendessen, Zeit zu zweit.' },
    { title: 'Kulturreisende', text: 'Maurischer Grundriss im Barribarto, Werkstätten und Kunsthandwerk, gewachsene Geschichte.' },
    { title: 'Ästhetiker', text: 'Weiß getünchte Fassaden, Blumengassen, das Licht über den Plantagen bis zum Meer.' }
  ],
  pointer: {
    text: '**Noch nicht sicher — Berg oder Küste?** Frigiliana = Dorf, Ruhe, Atmosphäre. Nerja = Strand, Küstenalltag, mehr Trubel.',
    linkLabel: 'Frigiliana oder Nerja im Detail vergleichen',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Darum sind wir hier',
    title: 'Der Altstadt-Charme, ohne den ständigen Anstieg',
    caption:
      'Die Altstadt steigt oberhalb der Hauptachse deutlich den Hang hinauf; AMARA liegt vergleichsweise tief an der Calle Chorruelo.',
    lead:
      'Die Altstadt steigt vom Hauptweg steil an — viele historische Adressen liegen deutlich höher am Hang. Unsere Lage an der **Calle Chorruelo** setzt direkt an der ebenen Hauptachse an — mit echter Altstadt vor der Haustür, aber ohne dass jeder Einkauf zur Bergetappe wird. Deshalb haben wir hier investiert und das Haus über zwei Jahre restauriert.',
    facts: [
      '**Mit dem Auto erreichbar** innerhalb der geltenden Altstadt-Zufahrtsfenster',
      '**Farah** hat nur eine Eingangsstufe',
      '**Lounis & Zaid**: private Terrassen mit Blick übers Grün bis zum Meer'
    ],
    honest:
      'Ehrlich bleibt: voll ebenerdig mit eigenem Parkplatz → der neue Ort. Echte Abgeschiedenheit → El Campo. Für Altstadt-Charme mit vergleichsweise wenig Höhenmetern ist unsere Lage besonders praktisch.',
    primaryCta: 'Verfügbarkeit & Preise prüfen'
  }
};
