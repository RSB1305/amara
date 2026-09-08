import type { WhereToStayCopy } from './whereToStayCopy';

/**
 * Nerja Where-to-stay body (Type A redesign). German first for verification
 * against the design; en/es/nl/sv follow once the German is signed off, then
 * this becomes a Record<lang, WhereToStayCopy>. Nerja's decision factor is
 * proximity on the coast (beach vs centre vs quiet), not Frigiliana's height.
 * AMARA Playa sits at Torrecilla — city beach plus five minutes to the Balcón.
 */
export const nerjaWhereToStayDe: WhereToStayCopy = {
  hero: {
    eyebrow: 'Wo übernachten · Nerja',
    title: 'Wo in Nerja übernachten',
    lede: 'Lebendiger Küstenort über dem Meer — mit Stränden und dem Balcón de Europa.',
    body: 'Weiße Gassen an den Klippen, der berühmte Balcón de Europa, Sandstrände wie Torrecilla und Burriana, dazu ganzjährige Infrastruktur. Nerja ist kompakt und meist eben — hier entscheidet nicht die Höhe wie in Frigiliana, sondern die Nähe: zum Strand, zum Zentrum, zur Ruhe.',
    traits: ['**Balcón de Europa**', 'Sandstrände', 'Tapas & Leben', 'Höhlen von Nerja', 'Ganzjährig'],
    stats: [
      { id: 'balcon', k: '5 Min', l: 'zu Fuß von Torrecilla zum Balcón de Europa' },
      { id: 'beaches', k: '2', l: 'Stadtstrände vor der Tür: Torrecilla & Burriana' },
      { id: 'parts', k: '3', l: 'Teile mit spürbar anderem Alltag' }
    ]
  },
  heroCtaZones: 'Die drei Teile ansehen',
  glanceTitle: 'Welcher Teil passt zu euch?',
  glanceIntro: 'Drei Teile, drei Aufenthalte. Worin sie sich unterscheiden, entscheidet hier vor allem die Nähe — zum Strand, zum Zentrum und zur Ruhe.',
  glance: [
    { id: 'altstadt', title: 'Altstadt & Balcón', blurb: 'Tapas, Leben, der berühmte Balkon — mittendrin, im Sommer voll' },
    { id: 'strand', title: 'Die Strandzonen', blurb: 'Torrecilla & Burriana — das Meer direkt vor der Tür' },
    { id: 'hang', title: 'Wohnviertel am Hang', blurb: 'Ruhiger, mehr Platz — dafür Auto oder Weg zum Zentrum' }
  ],
  factorEyebrow: 'Worauf es in Nerja ankommt',
  factor: {
    title: 'Alles eine Frage der Nähe',
    intro: 'Nerja ist kompakt und meist eben — kein Bergdorf. Deshalb entscheidet hier nicht die Höhe, sondern die Nähe: Wie weit ist es morgens zum Strand, abends zu den Tapas, und wie ruhig wird die Nacht?',
    copy: 'Wenige hundert Meter machen den Unterschied zwischen „Strand vor der Tür“ und „erst mit dem Auto“, zwischen „mitten im Abendleben“ und „ruhige Nacht“. Die beste Lage ist die, deren **Nähe** zu eurem Urlaub passt.',
    note: 'Ein Tag am Meer: morgens Strand, tagsüber im Ort, abends Tapas — und nachts Ruhe?',
    day: ['Morgens an den Strand', 'Kaffee und Einkäufe im Ort', 'Nachmittags zum Balcón de Europa', 'Abends Tapas in der Altstadt', 'Nachts — laut oder ruhig?']
  },
  zonesEyebrow: 'Die Lagen',
  zonesTitle: 'Die drei Teile von Nerja',
  zonesIntro: 'Grob gibt es drei Welten: die lebendige Altstadt am Balcón, die Strandzonen und die ruhigeren Wohnviertel am Hang. Jede löst die Nähe anders — und tauscht dafür etwas anderes ein.',
  zones: [
    {
      id: 'altstadt',
      sub: 'Altstadt & Balcón de Europa',
      h3: 'Mittendrin — Leben, Tapas, der Balkon',
      desc: 'Die weißen Gassen rund um den Balcón de Europa: Restaurants, Tapas-Bars, Geschäfte und der berühmte Aussichtsbalkon über dem Meer. Alles fußläufig, den ganzen Tag Leben — im Hochsommer aber auch voll und abends lebhaft.',
      idealFor: 'Wer das Zentrum und die Restaurants vor der Tür will und Trubel nicht scheut.',
      honest: 'Im Sommer voll und abends laut; Parken ist schwierig, der nächste Sandstrand ein kurzer Weg.'
    },
    {
      id: 'strand',
      sub: 'Die Strandzonen',
      h3: 'Das Meer direkt vor der Tür',
      desc: 'Direkt an den Stadtstränden — hier teilt sich die Zone in zwei:',
      quarters: [
        { id: 'torrecilla', name: 'Torrecilla', note: 'Am Fuß der Altstadt: Stadtstrand direkt und nur 5 Minuten zum Balcón — hier liegt AMARA Playa.' },
        { id: 'burriana', name: 'Burriana', note: 'Der große, klassische Sandstrand mit Strandbars; entspannter Strandtag, etwas weiter vom Zentrum.' }
      ],
      idealFor: 'Strandliebhaber und Familien, die morgens direkt ans Wasser wollen.',
      honest: 'Burriana ist im Sommer belebt; zum historischen Zentrum lauft ihr von dort ein Stück.'
    },
    {
      id: 'hang',
      sub: 'Wohnviertel am Hang',
      h3: 'Ruhe, Raum — dafür der Weg',
      desc: 'Die urbanisierten Hanglagen wie Capistrano oder Punta Lara: ruhiger, mehr Platz, oft mit Pool und Blick. Dafür sind Strand, Restaurants und Zentrum meist ein Weg mit dem Auto.',
      idealFor: 'Wer Ruhe, Aussicht und Raum über die direkte Nähe zum Meer stellt.',
      honest: 'Für Strand, Einkäufe und Abendessen ist ein Auto hier meist praktisch oder nötig.'
    }
  ],
  labelIdealFor: 'Ideal für',
  labelHonest: 'Ehrlich dazu',
  whoTitle: 'Für wen Nerja ideal ist',
  whoIntro: 'Nerja passt zu Gästen, die Strand, Küstenleben und komfortable Infrastruktur wollen — spanische Tradition mit dem Meer vor der Tür. Wer das ruhige Bergdorf abseits der Küste sucht, ist oben in Frigiliana besser aufgehoben.',
  who: [
    { id: 'families', title: 'Familien', text: 'Sandstrände zum Buddeln, kurze Wege, Eis am Balcón — Nerja ist für Kinder gemacht.' },
    { id: 'beach', title: 'Strandliebhaber', text: 'Torrecilla und Burriana vor der Tür, dazu die versteckten Buchten Richtung Maro.' },
    { id: 'sun', title: 'Sonnenhungrige', text: 'Milde Winter, lange Saison, das Meer fast das ganze Jahr zum Greifen nah.' },
    { id: 'longstay', title: 'Langzeitgäste', text: 'Ganzjährige Infrastruktur, Ärzte, Märkte, Cafés — ein Ort zum Ankommen, nicht nur für eine Woche.' }
  ],
  pointer: {
    text: '**Noch nicht sicher — Küste oder Berg?** Nerja = Strand, Leben, Meer vor der Tür. Frigiliana = Dorf, Ruhe, Panorama.',
    linkLabel: 'Nerja oder Frigiliana im Detail vergleichen',
    linkToken: 'nerja_vs_frigiliana'
  },
  verdict: {
    eyebrow: 'Darum sind wir hier',
    title: 'Strand vor der Tür — und trotzdem mittendrin',
    caption: 'Torrecilla liegt am Fuß der Altstadt: Stadtstrand direkt, der Balcón de Europa nur wenige Minuten entfernt.',
    mapNote: '(siehe Orientierungskarte oben)',
    lead: 'In Nerja muss man sich oft entscheiden: Strand *oder* Zentrum, Nähe *oder* Ruhe. **AMARA Playa liegt in Torrecilla** — am Fuß der Altstadt, mit dem Stadtstrand direkt vor der Tür und nur rund fünf Minuten zu Fuß zum Balcón de Europa und den Restaurants. Dabei ruhiger als die Altstadt selbst.',
    facts: ['**Stadtstrand Torrecilla** direkt vor der Tür', '**5 Minuten** zu Fuß zum Balcón de Europa und den Tapas', '**Ruhiger** als die belebte Altstadt — ohne den Weg mit dem Auto'],
    honest: 'Ehrlich bleibt: den größten, entspanntesten Strandtag habt ihr an Burriana; wer Ruhe und Raum über Nähe stellt, ist am Hang besser aufgehoben. Für Strand und Zentrum in einem ist Torrecilla der süße Punkt.'
  }
};
