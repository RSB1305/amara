import type { LinkToken } from '../lib/linkResolver';
import type { LocalizedText, LocalizedTextList } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import { routeOgImage } from '../lib/images/routeImages';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });
const ll = (en: string[], de: string[], es: string[], nl: string[], sv: string[]): LocalizedTextList => ({ en, de, es, nl, sv });

/**
 * Rescue and emergency page of the Tarifa kitesurf cluster. It carries what
 * the wind page used to hold as its last chapter (operator decision of
 * 11 September 2026): the two private rescue-boat providers with their own
 * terms, Mark's word on them, and the state sea rescue with its numbers —
 * kept visibly apart, because a voucher is not the emergency service. The
 * page is linked from the wind page and the site map, not from the cluster
 * band or the global navigation.
 */
export interface TarifaKitesurfRescueContent {
  token: LinkToken;
  hero: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    lead: LocalizedText;
    updated: LocalizedText;
    note: LocalizedText;
  };
  providers: {
    label: LocalizedText;
    title: LocalizedText;
    subtitle: LocalizedText;
    items: Array<{ id: string; name: string; text: LocalizedText; href: string; label: LocalizedText }>;
    mark: { name: string; role: LocalizedText };
    quote: { id: string; lead: LocalizedText; paragraphs: LocalizedTextList };
    context: LocalizedText;
    planB: LocalizedText;
  };
  state: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    text: LocalizedText;
    numbers: Array<{ id: string; label: LocalizedText; value: string }>;
  };
  related: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    links: Array<{ id: string; token: LinkToken; title: LocalizedText; text: LocalizedText }>;
  };
}

const title = l(
  'Rescue and emergency when kitesurfing in Tarifa | AMARA',
  'Rettung und Notruf beim Kitesurfen in Tarifa | AMARA',
  'Rescate y emergencias en el kitesurf en Tarifa | AMARA',
  'Redding en noodoproep bij het kitesurfen in Tarifa | AMARA',
  'Räddning och nödsamtal vid kitesurfing i Tarifa | AMARA'
);

const description = l(
  'The two private rescue boats at Los Lances Norte and Valdevaqueros, what their vouchers cover, and the state sea rescue: 112, Salvamento Marítimo 900 202 202, VHF channel 16. From AMARA, with Mark of Tarifa Surf Club.',
  'Die zwei privaten Rescue-Boote an Los Lances Norte und Valdevaqueros, was ihre Voucher decken, und die staatliche Seenotrettung: 112, Salvamento Marítimo 900 202 202, Seefunk Kanal 16. Von AMARA, mit Mark vom Tarifa Surf Club.',
  'Las dos lanchas de rescate privadas en Los Lances Norte y Valdevaqueros, qué cubren sus bonos, y el salvamento marítimo estatal: 112, Salvamento Marítimo 900 202 202, canal 16 de VHF. De AMARA, con Mark del Tarifa Surf Club.',
  'De twee private reddingsboten bij Los Lances Norte en Valdevaqueros, wat hun vouchers dekken, en de staatsredding op zee: 112, Salvamento Marítimo 900 202 202, marifoonkanaal 16. Van AMARA, met Mark van Tarifa Surf Club.',
  'De två privata räddningsbåtarna vid Los Lances Norte och Valdevaqueros, vad deras vouchrar täcker, och den statliga sjöräddningen: 112, Salvamento Marítimo 900 202 202, VHF-kanal 16. Från AMARA, med Mark från Tarifa Surf Club.'
);

export const tarifaKitesurfRescueSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-tarifa-kitesurf-rescue-v1.0',
  pageType: 'B',
  entityKey: 'amara-brand',
  ogImage: routeOgImage('tarifa.kitesurfing.rescue'),
  article: {
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: { title: title.en, description: description.en, robots: 'index, follow', canonical: 'auto' },
    de: { title: title.de, description: description.de, robots: 'index, follow', canonical: 'auto' },
    es: { title: title.es, description: description.es, robots: 'index, follow', canonical: 'auto' },
    nl: { title: title.nl, description: description.nl, robots: 'index, follow', canonical: 'auto' },
    sv: { title: title.sv, description: description.sv, robots: 'index, follow', canonical: 'auto' }
  }
};

export const tarifaKitesurfRescueContent: TarifaKitesurfRescueContent = {
  token: 'tarifa_kitesurf_rescue',
  hero: {
    eyebrow: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'),
    title: l('In an emergency', 'Im Ernstfall', 'En caso de emergencia', 'In noodgevallen', 'I ett nödläge'),
    subtitle: l('Private rescue boats and the state sea rescue are two different things', 'Private Rescue-Boote und die Seenotrettung sind zwei verschiedene Dinge', 'Las lanchas de rescate privadas y el salvamento marítimo son dos cosas distintas', 'Private reddingsboten en de staatsredding op zee zijn twee verschillende dingen', 'Privata räddningsbåtar och den statliga sjöräddningen är två olika saker'),
    lead: l('Two companies run boats at Los Lances Norte and Valdevaqueros, against a voucher; each provider sets its own zones, hours and terms. The state sea rescue is separate from that: **112, Salvamento Marítimo 900 202 202, VHF channel 16**. In an emergency it picks up you; the kite stays in the water. Here is what the two providers promise, what Mark says about them, and whom you call when something really happens.', 'Zwei Firmen fahren mit Booten an Los Lances Norte und Valdevaqueros, gegen Voucher; Zonen, Zeiten und Bedingungen legt jeder Anbieter selbst fest. Die staatliche Seenotrettung ist davon unabhängig: **112, Salvamento Marítimo 900 202 202, Seefunk Kanal 16**. Sie holt im Ernstfall euch, der Kite bleibt im Wasser. Hier steht, was die zwei Anbieter zusagen, was Mark dazu sagt, und wen ihr ruft, wenn wirklich etwas passiert.', 'Dos empresas sacan lanchas en Los Lances Norte y Valdevaqueros, con bono; cada proveedor fija sus propias zonas, horarios y condiciones. El salvamento marítimo estatal es independiente de eso: **112, Salvamento Marítimo 900 202 202, canal 16 de VHF**. En una emergencia os recoge a vosotros; la cometa se queda en el agua. Aquí está lo que prometen los dos proveedores, lo que dice Mark de ellos y a quién llamáis cuando pasa algo de verdad.', 'Twee bedrijven varen met boten bij Los Lances Norte en Valdevaqueros, op voucher; elke aanbieder bepaalt zelf zones, tijden en voorwaarden. De staatsredding op zee staat daar los van: **112, Salvamento Marítimo 900 202 202, marifoonkanaal 16**. In een noodgeval haalt die jullie op; het materiaal blijft in het water. Hier staat wat de twee aanbieders toezeggen, wat Mark erover zegt en wie jullie bellen als er echt iets gebeurt.', 'Två företag kör båtar vid Los Lances Norte och Valdevaqueros, mot voucher; zoner, tider och villkor sätter varje aktör själv. Den statliga sjöräddningen är oberoende av det: **112, Salvamento Marítimo 900 202 202, VHF-kanal 16**. I ett nödläge hämtar den er; kiten blir kvar i vattnet. Här står vad de två aktörerna lovar, vad Mark säger om dem, och vem ni ringer när något verkligen händer.'),
    updated: l('As of September 2026', 'Stand September 2026', 'Actualizado en septiembre de 2026', 'Stand september 2026', 'Uppdaterad september 2026'),
    note: l('We live and kite here ourselves.', 'Wir wohnen und kiten hier selbst.', 'Vivimos y hacemos kite aquí.', 'We wonen en kiten hier zelf.', 'Vi bor och kitar här själva.')
  },
  providers: {
    label: l('Private providers', 'Private Anbieter', 'Proveedores privados', 'Private aanbieders', 'Privata aktörer'),
    title: l('The rescue boats', 'Die Rescue-Boote', 'Las lanchas de rescate', 'De reddingsboten', 'Räddningsbåtarna'),
    subtitle: l('Two providers, each with its own terms', 'Zwei Anbieter, eigene Bedingungen', 'Dos proveedores, cada uno con sus condiciones', 'Twee aanbieders, elk met eigen voorwaarden', 'Två aktörer, egna villkor'),
    items: [
      {
        id: 'new-angels',
        name: 'New Angels · Tarifa Rescue',
        text: l('For its voucher the operator names Los Lances Norte and Valdevaqueros, up to two miles off the coast, in wind of **no more than 35 kn**. That is a condition of this voucher, not a general limit for Tarifa and not a promise of deployment. As of 3 September 2026.', 'New Angels nennt für seinen Voucher Los Lances Norte und Valdevaqueros, bis zwei Meilen vor der Küste, und als eigene Bedingung **Wind bis höchstens 35 kn**. Das ist die Regel dieses Anbieters, keine Grenze für Tarifa und kein Einsatzversprechen. Stand: 3. September 2026.', 'Para su bono, el operador indica Los Lances Norte y Valdevaqueros, hasta dos millas de la costa, con viento de **como máximo 35 kn**. Es una condición de ese bono, no un límite general para Tarifa ni una promesa de intervención. Fecha: 3 de septiembre de 2026.', 'Voor zijn voucher noemt de aanbieder Los Lances Norte en Valdevaqueros, tot twee mijl uit de kust, bij wind **tot maximaal 35 kn**. Dat is een voorwaarde van deze voucher, geen algemene grens voor Tarifa en geen inzetbelofte. Stand: 3 september 2026.', 'För sin voucher anger operatören Los Lances Norte och Valdevaqueros, upp till två sjömil från kusten, vid vind på **högst 35 kn**. Det är ett villkor för den här vouchern, ingen allmän gräns för Tarifa och inget löfte om insats. Läge: 3 september 2026.'),
        href: 'https://www.tarifarescue.com/',
        label: l('Check New Angels conditions', 'Bedingungen bei New Angels', 'Consultar las condiciones de New Angels', 'Bekijk de voorwaarden van New Angels', 'Kontrollera New Angels villkor')
      },
      {
        id: 'sea-rescue',
        name: 'Sea Rescue',
        text: l('The operator describes its service as year-round, with stations at Los Lances Norte and Valdevaqueros and a stated zone of **up to one kilometre from the beach**. For June to September it names 11:00 to 20:00. The provider runs its own radio channel for its system. As of 3 September 2026.', 'Sea Rescue beschreibt seinen Dienst als ganzjährig, mit Stationen an Los Lances Norte und Valdevaqueros und einer Zone **bis einen Kilometer vom Strand**; von Juni bis September nennt er 11 bis 20 Uhr. Der Anbieter hat einen eigenen Funkkanal für sein System. Stand: 3. September 2026.', 'El operador describe su servicio como de todo el año, con puestos en Los Lances Norte y Valdevaqueros y una zona declarada de **hasta un kilómetro desde la playa**. De junio a septiembre indica de 11:00 a 20:00. El proveedor opera un canal de radio propio para su sistema. Fecha: 3 de septiembre de 2026.', 'De aanbieder beschrijft zijn dienst als het hele jaar door, met posten bij Los Lances Norte en Valdevaqueros en een opgegeven zone **tot een kilometer van het strand**. Voor juni tot september noemt hij 11:00 tot 20:00 uur. De aanbieder gebruikt een eigen radiokanaal voor zijn systeem. Stand: 3 september 2026.', 'Operatören beskriver sin tjänst som åretrunt, med stationer vid Los Lances Norte och Valdevaqueros och en angiven zon på **upp till en kilometer från stranden**. För juni till september anger den 11:00 till 20:00. Leverantören har en egen radiokanal för sitt system. Läge: 3 september 2026.'),
        href: 'https://es.searescue.es/',
        label: l('Check Sea Rescue details', 'Details bei Sea Rescue', 'Consultar los detalles de Sea Rescue', 'Bekijk de details van Sea Rescue', 'Kontrollera Sea Rescue-information')
      }
    ],
    mark: { name: 'Mark', role: l('Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club', 'Tarifa Surf Club') },
    quote: {
      id: 'rescue',
      lead: l('What Mark says about it, and you will not find this on any website:', 'Was Mark dazu sagt, und das steht so auf keiner Website:', 'Lo que dice Mark al respecto, y esto no está en ninguna web:', 'Wat Mark erover zegt, en dat staat zo op geen enkele website:', 'Vad Mark säger om det, och det står inte på någon webbplats:'),
      paragraphs: ll(
        ['The hours you see online are shop opening hours. The boats go out when the Levante is blowing. And they take you along with your gear — that is the difference from the state rescue service.'],
        ['Die Zeiten, die ihr online seht, sind Ladenöffnungszeiten. Die Boote fahren raus, wenn Levante steht. Und sie nehmen euch mitsamt Material mit — das ist der Unterschied zur staatlichen Rettung.'],
        ['Los horarios que veis online son los horarios de la tienda. Las lanchas salen cuando hay levante. Y os recogen con el material: esa es la diferencia con el rescate estatal.'],
        ['De tijden die jullie online zien, zijn winkelopeningstijden. De boten gaan het water op als er levante staat. En ze nemen jullie mét materiaal mee — dat is het verschil met de staatsredding.'],
        ['Tiderna ni ser online är butikens öppettider. Båtarna går ut när levanten står på. Och de tar med er tillsammans med utrustningen – det är skillnaden mot den statliga räddningen.']
      )
    },
    context: l('That is the practical reason these providers exist at all: in an emergency, the state sea rescue picks up the person. **The gear stays in the water**.', 'Genau deshalb gibt es diese Anbieter: Die staatliche Seenotrettung holt im Ernstfall euch. **Der Kite bleibt im Wasser**.', 'Esa es la razón práctica de que existan estos servicios: en una emergencia, el salvamento marítimo estatal recoge a la persona. **El material se queda en el agua**.', 'Dat is de praktische reden dat deze aanbieders überhaupt bestaan: bij een noodgeval haalt de staatsredding de persoon op. **Het materiaal blijft in het water**.', 'Det är det praktiska skälet till att de här aktörerna över huvud taget finns: i ett nödläge hämtar den statliga sjöräddningen personen. **Utrustningen blir kvar i vattnet**.'),
    planB: l('A rescue card is plan B. It does not change the conditions on the water.', 'Eine Rescue-Card ist Plan B. Den Wind macht sie nicht kleiner.', 'Una tarjeta de rescate es el plan B. No cambia las condiciones en el agua.', 'Een rescuekaart is plan B. Hij verandert niets aan de omstandigheden op het water.', 'Ett räddningskort är plan B. Det ändrar inte förhållandena på vattnet.')
  },
  state: {
    eyebrow: l('State rescue', 'Staatliche Rettung', 'Rescate estatal', 'Staatsredding', 'Statlig räddning'),
    title: l('Distress at sea and acute emergency', 'Im Notfall: 112, Salvamento Marítimo, Kanal 16', 'Emergencia en el mar y urgencia aguda', 'Noodgeval op zee en acute nood', 'Sjönöd och akut nödläge'),
    text: l('This is a different system, run by the state, and it has nothing to do with the vouchers above. **Give your position, what has happened and how many people need help**. Private radio channels of individual providers are not official emergency channels.', 'Das ist die staatliche Rettung, unabhängig von jedem Voucher. **Sagt, wo ihr seid, was passiert ist und wie viele Menschen Hilfe brauchen**. Der Funkkanal eines privaten Anbieters ersetzt diese Nummern nicht.', 'Este es otro sistema, estatal, y no tiene nada que ver con los bonos de arriba. **Indicad vuestra posición, qué ha pasado y cuántas personas necesitan ayuda**. Los canales de radio privados de los proveedores no son canales oficiales de emergencia.', 'Dit is een ander systeem, van de overheid, en het heeft niets te maken met de vouchers hierboven. **Geef jullie positie door, wat er is gebeurd en hoeveel mensen hulp nodig hebben**. Privékanalen van afzonderlijke aanbieders zijn geen officiële noodkanalen.', 'Det här är ett annat system, statligt, och det har inget med voucherna ovan att göra. **Ange er position, vad som har hänt och hur många som behöver hjälp**. Enskilda leverantörers privata radiokanaler är inga officiella nödkanaler.'),
    numbers: [
      { id: 'emergency-112', label: l('Europe-wide emergency number', 'Europaweiter Notruf', 'Emergencias en toda Europa', 'Europees noodnummer', 'Europeiskt nödnummer'), value: '112' },
      { id: 'salvamento', label: l('Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo', 'Salvamento Marítimo'), value: '900 202 202' },
      { id: 'vhf-16', label: l('Marine radio (VHF)', 'Seefunk (VHF)', 'Radio marítima (VHF)', 'Marifoon (VHF)', 'Sjöradio (VHF)'), value: 'Channel 16' }
    ]
  },
  related: {
    eyebrow: l('Next', 'Weiter', 'Seguir', 'Verder', 'Vidare'),
    title: l('Back to the wind, the spots and the overview', 'Zurück zu Wind, Spots und Überblick', 'Volver al viento, los spots y la visión de conjunto', 'Terug naar wind, spots en overzicht', 'Tillbaka till vinden, spotsen och översikten'),
    links: [
      {
        id: 'wind',
        token: 'tarifa_wind_kitesurfing_authority',
        title: l('Wind & safety', 'Wind & Sicherheit', 'Viento y seguridad', 'Wind & veiligheid', 'Vind & säkerhet'),
        text: l('Levante and Poniente, reading the Windguru table, thermal wind, tides and where to launch.', 'Levante und Poniente, die Windguru-Tabelle lesen, Thermik, Gezeiten und wo ihr rausgeht.', 'Levante y poniente, leer la tabla de Windguru, térmica, mareas y dónde salir.', 'Levante en poniente, de Windguru-tabel lezen, thermiek, getij en waar het water op.', 'Levante och poniente, läsa Windguru-tabellen, termik, tidvatten och var man går ut.')
      },
      {
        id: 'spots',
        token: 'tarifa_kitesurf_spots',
        title: l('Kitesurf spots in Tarifa', 'Kitesurf-Spots in Tarifa', 'Spots de kitesurf en Tarifa', 'Kitesurfspots in Tarifa', 'Kitesurfspots i Tarifa'),
        text: l('Which stretch works in which conditions, and where the zones run.', 'Los Lances, Valdevaqueros, Balneario: welcher Strand bei welchem Wind, mit Karte und Zonen.', 'Qué tramo funciona con cada situación y por dónde van las zonas.', 'Welk deel bij welke situatie werkt en waar de zones lopen.', 'Vilken sträcka som fungerar i vilket läge och var zonerna går.')
      },
      {
        id: 'hub',
        token: 'tarifa_kitesurfing_hub',
        title: l('Kitesurfing in Tarifa', 'Kitesurfen in Tarifa', 'Kitesurf en Tarifa', 'Kitesurfen in Tarifa', 'Kitesurfing i Tarifa'),
        text: l('The overview: school, kitecamp, equipment and everything around them.', 'Warum Tarifa, ein Tag hier, Kiten lernen, Übernachten bei AMARA.', 'La visión de conjunto: escuela, kitecamp, material y todo lo demás.', 'Het overzicht: school, kitecamp, materiaal en de rest.', 'Översikten: skola, kitecamp, utrustning och resten.')
      }
    ]
  }
};
