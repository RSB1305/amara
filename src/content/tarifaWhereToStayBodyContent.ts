import type { WhereToStayCopy } from './whereToStayCopy';

/**
 * Tarifa Where-to-stay body (Type A redesign). Tarifa's decision factor is the
 * wind: Levante from the east, Poniente from the west, and how exposed or
 * sheltered you want to be — plus whether you walk or drive. AMARA sits in
 * La Marina, the quarter between the walled old town and the beach. German
 * first for operator review; localized once the wind story is approved.
 * Emphasis is **double asterisks** for InlineEmphasis; unit lists carry stable
 * `id`s for the locale-parity contract. Booking CTA comes from trustLabels.book.
 */
export const tarifaWhereToStayDe: WhereToStayCopy = {
  hero: {
    eyebrow: 'Wo übernachten · Tarifa',
    title: 'Wo in Tarifa übernachten',
    lede: 'Windiger Zipfel zwischen zwei Meeren — Altstadt hinter Mauern, weite Strände und das Kite-Revier vor der Tür.',
    body: 'Wo Atlantik und Mittelmeer aufeinandertreffen: eine maurisch geprägte Altstadt hinter alten Mauern, der lange Strand von Los Lances und ganzjährig Wind. In Tarifa entscheidet nicht die Höhe wie in Frigiliana und nicht nur die Nähe wie in Nerja, sondern der Wind: Wie viel davon wollt ihr vor der Tür — und wollt ihr laufen oder fahren?',
    traits: ['**Levante & Poniente**', 'Kite & Wind', 'Altstadt hinter Mauern', 'Zwei Meere', 'Ganzjährig'],
    stats: [
      { id: 'winds', k: '2', l: 'prägende Winde: Levante von Ost, Poniente von West' },
      { id: 'beach', k: '10 km', l: 'offener Sandstrand nach Norden: Los Lances bis Valdevaqueros' },
      { id: 'parts', k: '3', l: 'Lagen mit spürbar anderem Alltag' }
    ]
  },
  heroCtaZones: 'Die drei Teile ansehen',
  glanceTitle: 'Welcher Teil passt zu euch?',
  glanceIntro: 'Drei Lagen, drei Aufenthalte. Worin sie sich hier unterscheiden, entscheidet vor allem der Wind — und ob ihr zu Fuß oder mit dem Auto unterwegs seid.',
  glance: [
    { id: 'altstadt', title: 'Altstadt & La Marina', blurb: 'Gassen, Tapas, kurze Wege — geschützt vor dem Wind, im Sommer belebt' },
    { id: 'strand', title: 'Los Lances & Strand', blurb: 'Kite, Wind, weite Fläche — offen und windig' },
    { id: 'campo', title: 'Campo & Hanglagen', blurb: 'Ruhe, Weite, Blick — dafür Auto und teils voller Wind' }
  ],
  factorEyebrow: 'Worauf es in Tarifa ankommt',
  factor: {
    title: 'Alles eine Frage des Windes',
    intro: 'Tarifa liegt am südlichsten Zipfel des europäischen Festlands, dort wo Atlantik und Mittelmeer aufeinandertreffen — und gilt als einer der windigsten Orte Europas. Zwei Winde prägen den Alltag: der kräftige Levante von Osten und der mildere Poniente von Westen. Deshalb entscheidet hier nicht Höhe oder Nähe, sondern: Wie viel Wind wollt ihr vor der Tür?',
    copy: 'Am offenen Strand ist der Wind das Programm — ideal zum Kiten, weniger zum ruhigen Sonnenbad. Hinter den Altstadtmauern ist es spürbar geschützter. Die beste Lage ist die, deren **Verhältnis zum Wind** zu eurem Urlaub passt — und ob ihr dafür lauft oder das Auto braucht.',
    note: 'Ein Tag in Tarifa: morgens Strand, mittags im Ort, nachmittags aufs Wasser — und abends windgeschützt beim Essen?',
    day: ['Morgens an den Strand von Los Lances', 'Mittags Tapas in der Altstadt', 'Nachmittags aufs Wasser bei Levante', 'Abends geschützt hinter den Mauern', 'Nachts — Windrauschen oder Ruhe?']
  },
  zonesEyebrow: 'Die Lagen',
  zonesTitle: 'Die drei Teile von Tarifa',
  zonesIntro: 'Grob gibt es drei Welten: den geschützten Kern aus Altstadt und La Marina, die offene Strandzone um Los Lances und das ruhigere Campo mit seinen Hanglagen. Jede steht anders zum Wind — und tauscht dafür etwas anderes ein.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Altstadt & La Marina',
      h3: 'Der geschützte Kern — Gassen, Tapas, kurze Wege',
      desc: 'Der historische Ort hinter den alten Mauern und das angrenzende Hafenviertel — hier teilt sich der Kern in zwei:',
      quarters: [
        { id: 'casco', name: 'Altstadt (Casco)', note: 'Maurisch geprägte Gassen hinter den Mauern: am geschütztesten vor dem Wind, viel Leben — dafür eng und wenig Parkraum.' },
        { id: 'marina', name: 'La Marina', note: 'Das Viertel zwischen Altstadt und Strand: zu Fuß in den Ort und ans Wasser — hier liegt AMARA.' }
      ],
      idealFor: 'Wer Ort, Restaurants und Strand zu Fuß erreichen und dem Wind ausweichen können will.',
      honest: 'Im Sommer und bei Fährbetrieb belebt, Parken ist knapp; der breite Kitestrand liegt ein Stück Richtung Norden.'
    },
    {
      id: 'strand',
      sub: 'Los Lances & die Strandzone',
      h3: 'Wo der Wind das Programm ist',
      desc: 'Der lange Sandstrand nördlich des Orts, bis Valdevaqueros: hier spielt sich das Kite- und Windleben ab, weite Fläche, Strandbars. Dafür ist es offen und windig — und je weiter draußen, desto mehr braucht ihr das Auto.',
      idealFor: 'Kite- und Windsurfer und alle, die morgens direkt ans (windige) Wasser wollen.',
      honest: 'Bei Levante wird es richtig windig; ruhiges Sonnenbaden ist hier die Ausnahme, und zum Ort fahrt oder lauft ihr ein Stück.'
    },
    {
      id: 'campo',
      sub: 'Campo & Hanglagen',
      h3: 'Ruhe, Raum — dafür das Auto',
      desc: 'Das Umland und die Hügel Richtung N-340: Fincas, Weite, oft Blick über die Meerenge nach Afrika. Ruhiger und mehr Platz — aber Strand, Ort und Abendessen sind hier ein Weg mit dem Auto, und manche Kuppe steht selbst voll im Wind.',
      idealFor: 'Wer Ruhe, Weite und Blick über die direkte Nähe zu Ort und Strand stellt.',
      honest: 'Ohne Auto geht hier wenig; und windgeschützt ist längst nicht jede Lage im Campo.'
    }
  ],
  labelIdealFor: 'Ideal für',
  labelHonest: 'Ehrlich dazu',
  whoTitle: 'Für wen Tarifa ideal ist',
  whoIntro: 'Tarifa passt zu Gästen, die Wind, Wasser und eine lebendige Altstadt zwischen zwei Meeren suchen — mit dem Kite-Revier vor der Tür. Wer vor allem ruhiges Strandbaden ohne Wind möchte, ist an der geschützteren Küste um Nerja besser aufgehoben.',
  who: [
    { id: 'families', title: 'Familien', text: 'Flacher, weiter Strand zum Toben, Wind zum Drachensteigen, dazu die Altstadt — Tarifa ist entspannt für Kinder.' },
    { id: 'kite', title: 'Kite- & Windsurfer', text: 'Los Lances und Valdevaqueros vor der Tür, Levante und Poniente fast das ganze Jahr.' },
    { id: 'active', title: 'Aktive & Naturnahe', text: 'Wandern am Kap, Whale-Watching in der Meerenge, Ausflüge nach Bolonia — zwischen zwei Meeren.' },
    { id: 'longstay', title: 'Ruhesuchende', text: 'Wer abschalten will, findet im Campo Weite und Ruhe — und im Ort trotzdem Alltag und Leben.' }
  ],
  pointer: {
    text: '**Noch unsicher, wie viel Wind ihr wollt?** Der Wind ist Tarifas Programm — an manchen Tagen sanft, an anderen kräftig. Ein Blick auf Winde und Reviere hilft bei der Wahl.',
    linkLabel: 'Wind & Kitesurfen in Tarifa ansehen',
    linkToken: 'tarifa_wind_kitesurfing_authority'
  },
  verdict: {
    eyebrow: 'Darum sind wir hier',
    title: 'Zwischen Mauern und Wasser — mittendrin, aber geschützt',
    caption: 'La Marina liegt zwischen Altstadt und Strand: zu Fuß in den Ort, zu Fuß ans Wasser — und windgeschützter als der offene Strand.',
    mapNote: '(siehe Orientierungskarte oben)',
    lead: 'In Tarifa muss man sich oft entscheiden: Strand *oder* Ort, Wind *oder* Ruhe. **AMARA liegt in La Marina** — dem Viertel zwischen der Altstadt und dem Strand. Von hier sind es wenige Minuten zu Fuß in die Gassen mit den Tapas-Bars und ebenso wenige zum Wasser. Und geschützter als draußen am offenen Los Lances.',
    facts: ['**La Marina** — zwischen Altstadt und Strand', '**Zu Fuß** in den Ort und ans Wasser', '**Geschützter** als der offene Kitestrand — ohne den Weg mit dem Auto'],
    honest: 'Ehrlich bleibt: den echten Kite-Tag habt ihr draußen an Los Lances und Valdevaqueros; wer Weite und Blick über Nähe stellt, ist im Campo besser aufgehoben. Für Ort und Strand in einem ist La Marina der süße Punkt.'
  }
};
