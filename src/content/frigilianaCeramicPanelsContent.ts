import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

export const frigilianaCeramicPanelsSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-ceramic-panels-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  /* og:image is emitted as an absolute URL, so it must stay inside the published image contract. */
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/02-frigiliana-pueblo.jpg',
  article: {
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'The Twelve Ceramic Panels of Frigiliana: What They Say, and Who Made Them',
      description:
        'A full guide to Frigiliana’s twelve ceramic panels: the 1982 provenance, the complete Spanish texts panel by panel, and where their story differs from the documented history of 1569.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Die zwölf Keramiktafeln von Frigiliana: Wortlaut, Herkunft, Wahrheit',
      description:
        'Ein vollständiger Führer zu Frigilianas zwölf Keramiktafeln: Herkunft von 1982, die kompletten spanischen Texte Tafel für Tafel und wo ihre Erzählung von der belegten Geschichte von 1569 abweicht.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Los doce azulejos de Frigiliana: qué dicen y quién los hizo',
      description:
        'Una guía completa de los doce azulejos de Frigiliana: su origen en 1982, los textos completos en español panel a panel y en qué se aparta su relato de la historia documentada de 1569.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'De twaalf keramische panelen van Frigiliana: tekst, herkomst, waarheid',
      description:
        'Een volledige gids voor de twaalf keramische panelen van Frigiliana: de herkomst uit 1982, de volledige Spaanse teksten paneel voor paneel en waar hun verhaal afwijkt van de gedocumenteerde geschiedenis van 1569.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigilianas tolv keramikpaneler: text, ursprung, sanning',
      description:
        'En komplett guide till Frigilianas tolv keramikpaneler: ursprunget 1982, de fullständiga spanska texterna panel för panel och var deras berättelse skiljer sig från den dokumenterade historien 1569.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * Explore-type spoke (B) under the old-town page. Provenance and the twelve-panel
 * register follow research-001 (2026-09-11); the historical claim boundaries follow
 * the same synthesis: twelve panels installed in 1982, texts by Antonio Navas Acosta,
 * ceramics by Amparo Ruiz de Luna. The Spanish transcriptions are quoted verbatim
 * from the panels and are not translated. The page states plainly where the panels'
 * 1982 memory-culture narrative differs from the documented record (the omitted
 * 28 May 1569 assault; the anachronistic "Holocausto"/"patria" framing).
 */
export const frigilianaCeramicPanelsCopy = {
  hero: {
    kicker: l(
      'Old town · The ceramic panels',
      'Altstadt · Die Keramiktafeln',
      'Casco antiguo · Los azulejos',
      'Oude kern · De keramische panelen',
      'Gamla stan · Keramikpanelerna'
    ),
    title: l(
      'The twelve ceramic panels',
      'Die zwölf Keramiktafeln',
      'Los doce azulejos',
      'De twaalf keramische panelen',
      'De tolv keramikpanelerna'
    ),
    subtitle: l(
      'A walk through 1569 — and what it leaves out',
      'Ein Gang durch 1569 — und was er weglässt',
      'Un recorrido por 1569 — y lo que omite',
      'Een wandeling door 1569 — en wat ze weglaat',
      'En vandring genom 1569 — och vad den utelämnar'
    ),
    paragraphs: [
      l(
        'Set into the walls of the upper quarter, twelve hand-painted panels tell the story of the Morisco revolt of 1569 in sequence. They look old, but they were made in 1982. Knowing who wrote them, who fired them and where their story parts from the documented record makes the walk far more interesting — not less.',
        'In die Mauern des oberen Viertels eingelassen, erzählen zwölf handbemalte Tafeln den Morisken-Aufstand von 1569 der Reihe nach. Sie wirken alt, entstanden aber 1982. Wer weiß, wer sie geschrieben, wer sie gebrannt hat und wo ihre Erzählung von der belegten Geschichte abweicht, geht den Weg mit ganz anderen Augen — interessanter, nicht weniger.',
        'Encastrados en los muros de la parte alta, doce azulejos pintados a mano cuentan la rebelión morisca de 1569 en orden. Parecen antiguos, pero se hicieron en 1982. Saber quién los escribió, quién los coció y en qué se aparta su relato de lo documentado hace el paseo mucho más interesante, no menos.',
        'In de muren van de hoger gelegen wijk vertellen twaalf handbeschilderde panelen de opstand van de Morisken van 1569 op volgorde. Ze ogen oud, maar ze zijn uit 1982. Weten wie ze schreef, wie ze bakte en waar hun verhaal afwijkt van het gedocumenteerde maakt de wandeling veel interessanter, niet minder.',
        'Infällda i murarna i den övre stadsdelen berättar tolv handmålade paneler moriskernas uppror 1569 i ordning. De ser gamla ut, men de gjordes 1982. Att veta vem som skrev dem, vem som brände dem och var deras berättelse skiljer sig från det dokumenterade gör vandringen långt mer intressant, inte mindre.'
      )
    ]
  },
  provenance: {
    title: l(
      'Where the panels come from',
      'Woher die Tafeln kommen',
      'De dónde vienen los azulejos',
      'Waar de panelen vandaan komen',
      'Var panelerna kommer ifrån'
    ),
    intro: l(
      'The panels did not grow over centuries. They are a deliberate act of 1982 — a piece of public history built into the streets, with named authors and a clear technique.',
      'Die Tafeln sind nicht über Jahrhunderte gewachsen. Sie sind ein bewusster Akt von 1982 — in die Gassen gebaute Erinnerungskultur, mit benannten Urhebern und klarer Technik.',
      'Los azulejos no crecieron a lo largo de siglos. Son un acto deliberado de 1982: historia pública incorporada a las calles, con autores concretos y una técnica clara.',
      'De panelen groeiden niet door de eeuwen heen. Ze zijn een bewuste daad uit 1982 — publieke geschiedenis, ingebouwd in de straten, met met naam genoemde makers en een heldere techniek.',
      'Panelerna växte inte fram under sekler. De är en medveten handling från 1982 — offentlig historia inbyggd i gatorna, med namngivna upphovsmän och en tydlig teknik.'
    ),
    items: [
      {
        title: l(
          'Installed in 1982',
          'Angebracht 1982',
          'Instalados en 1982',
          'Geplaatst in 1982',
          'Uppsatta 1982'
        ),
        text: l(
          'The twelve panels were put up in 1982, during the upgrade of the old Morisco quarter that coincided with Frigiliana’s national beautification award (Premio Nacional de Embellecimiento). They were part of turning a purely architectural quarter into a readable story.',
          'Die zwölf Tafeln wurden 1982 angebracht, im Zuge der Aufwertung des alten Morisken-Viertels, die mit dem nationalen Verschönerungspreis (Premio Nacional de Embellecimiento) für Frigiliana zusammenfiel. Sie machten aus einem rein baulichen Viertel eine lesbare Geschichte.',
          'Los doce azulejos se colocaron en 1982, durante la mejora del antiguo barrio morisco que coincidió con el Premio Nacional de Embellecimiento a Frigiliana. Sirvieron para convertir un barrio puramente arquitectónico en un relato legible.',
          'De twaalf panelen werden in 1982 aangebracht, tijdens de opwaardering van de oude Moriskse wijk die samenviel met de nationale verfraaiingsprijs (Premio Nacional de Embellecimiento) voor Frigiliana. Ze maakten van een louter architectonische wijk een leesbaar verhaal.',
          'De tolv panelerna sattes upp 1982, under upprustningen av det gamla moriska kvarteret som sammanföll med det nationella försköningspriset (Premio Nacional de Embellecimiento) till Frigiliana. De gjorde ett rent arkitektoniskt kvarter till en läsbar berättelse.'
        )
      },
      {
        title: l(
          'The texts: Antonio Navas Acosta',
          'Die Texte: Antonio Navas Acosta',
          'Los textos: Antonio Navas Acosta',
          'De teksten: Antonio Navas Acosta',
          'Texterna: Antonio Navas Acosta'
        ),
        text: l(
          'The panel texts were written by the local historian Antonio Navas Acosta, who reworked the sixteenth-century royal chronicles into a public, victim-facing telling. His book on the subject came later (1995/1999); the panels rest on his earlier research.',
          'Die Tafeltexte stammen vom lokalen Historiker Antonio Navas Acosta, der die königlichen Chroniken des 16. Jahrhunderts in eine öffentliche, den Opfern zugewandte Erzählung überführte. Sein Buch dazu kam später (1995/1999); die Tafeln beruhen auf seiner früheren Forschung.',
          'Los textos son del historiador local Antonio Navas Acosta, que transformó las crónicas reales del siglo XVI en un relato público y del lado de las víctimas. Su libro sobre el tema es posterior (1995/1999); los azulejos se basan en su investigación anterior.',
          'De teksten zijn van de plaatselijke historicus Antonio Navas Acosta, die de zestiende-eeuwse koninklijke kronieken omvormde tot een publiek verhaal aan de kant van de slachtoffers. Zijn boek erover kwam later (1995/1999); de panelen berusten op zijn eerdere onderzoek.',
          'Texterna är av den lokale historikern Antonio Navas Acosta, som omarbetade 1500-talets kungliga krönikor till en offentlig berättelse på offrens sida. Hans bok om ämnet kom senare (1995/1999); panelerna vilar på hans tidigare forskning.'
        )
      },
      {
        title: l(
          'The ceramics: Amparo Ruiz de Luna',
          'Die Keramik: Amparo Ruiz de Luna',
          'La cerámica: Amparo Ruiz de Luna',
          'Het keramiek: Amparo Ruiz de Luna',
          'Keramiken: Amparo Ruiz de Luna'
        ),
        text: l(
          'The ceramic work of the twelve route panels is attributed to the ceramist Amparo Ruiz de Luna. (Sources also link the painter Pilar García Millán to Morisco ceramic work in Frigiliana, probably a separate mural — we keep the two apart.)',
          'Die keramische Ausführung der zwölf Routen-Tafeln wird der Keramikerin Amparo Ruiz de Luna zugeschrieben. (Quellen verbinden auch die Malerin Pilar García Millán mit Morisken-Keramik in Frigiliana, wohl ein eigenes Wandbild — wir halten beides auseinander.)',
          'La ejecución cerámica de los doce azulejos de la ruta se atribuye a la ceramista Amparo Ruiz de Luna. (Algunas fuentes vinculan también a la pintora Pilar García Millán con cerámica morisca en Frigiliana, probablemente un mural aparte; los mantenemos separados.)',
          'Het keramische werk van de twaalf routepanelen wordt toegeschreven aan de keramiste Amparo Ruiz de Luna. (Bronnen koppelen ook de schilder Pilar García Millán aan Moriskse keramiek in Frigiliana, waarschijnlijk een aparte muurschildering — we houden beide gescheiden.)',
          'Det keramiska utförandet av de tolv ruttpanelerna tillskrivs keramikern Amparo Ruiz de Luna. (Källor kopplar även målaren Pilar García Millán till moriskisk keramik i Frigiliana, troligen en separat väggmålning — vi håller isär de två.)'
        )
      },
      {
        title: l(
          'Only four colours',
          'Nur vier Farben',
          'Solo cuatro colores',
          'Slechts vier kleuren',
          'Bara fyra färger'
        ),
        text: l(
          'The panels use only four mineral colours — ivory white, black, green and brown — copying the sixteenth-century Morisco ceramics of the Bentomiz region and avoiding costly imported blue and red. That restraint is why they seem to have always been there.',
          'Die Tafeln nutzen nur vier Mineralfarben — Elfenbeinweiß, Schwarz, Grün und Braun — nach dem Vorbild der Morisken-Keramik der Region Bentomiz im 16. Jahrhundert, ohne kostspieliges importiertes Blau und Rot. Diese Zurückhaltung lässt sie wirken, als seien sie immer da gewesen.',
          'Los azulejos usan solo cuatro colores minerales — blanco marfil, negro, verde y marrón —, imitando la cerámica morisca de la Bentomiz del siglo XVI y evitando el azul y el rojo importados y caros. Esa contención es la razón de que parezcan haber estado siempre ahí.',
          'De panelen gebruiken slechts vier mineraalkleuren — ivoorwit, zwart, groen en bruin — naar het voorbeeld van de zestiende-eeuwse Moriskse keramiek uit de Bentomiz-streek, zonder kostbaar geïmporteerd blauw en rood. Die soberheid maakt dat ze er altijd geweest lijken.',
          'Panelerna använder bara fyra mineralfärger — elfenbensvitt, svart, grönt och brunt — efter förlagan från 1500-talets moriskiska keramik i Bentomiz-trakten, utan kostsamt importerat blått och rött. Den återhållsamheten gör att de verkar ha funnits där för alltid.'
        )
      }
    ]
  },
  register: {
    title: l(
      'The twelve panels, in order',
      'Die zwölf Tafeln, der Reihe nach',
      'Los doce azulejos, en orden',
      'De twaalf panelen, op volgorde',
      'De tolv panelerna, i ordning'
    ),
    intro: l(
      'The route begins with panel 1 in Calle Hernando El Darra, near the old grain stores and El Ingenio, and climbs into the Barribarto. Below, each panel’s scene with its full Spanish text — tap to read the original.',
      'Die Route beginnt mit Tafel 1 in der Calle Hernando El Darra, nahe den alten Getreidespeichern und El Ingenio, und steigt in den Barribarto hinauf. Unten je Tafel die Szene mit dem vollständigen spanischen Text — zum Lesen des Originals aufklappen.',
      'La ruta empieza con el azulejo 1 en la calle Hernando El Darra, junto a los antiguos pósitos y El Ingenio, y sube al Barribarto. Abajo, la escena de cada azulejo con su texto completo en español; toca para leer el original.',
      'De route begint met paneel 1 in Calle Hernando El Darra, bij de oude graanopslag en El Ingenio, en klimt het Barribarto in. Hieronder per paneel de scène met de volledige Spaanse tekst — tik om het origineel te lezen.',
      'Rutten börjar med panel 1 på Calle Hernando El Darra, nära de gamla spannmålsbodarna och El Ingenio, och stiger upp i Barribarto. Nedan varje panels scen med hela den spanska texten — tryck för att läsa originalet.'
    ),
    note: l(
      'Panel 1 has a documented position; the exact spots of panels 2–12 are not officially recorded, so let the lanes lead you rather than a map.',
      'Tafel 1 ist verortet; die genauen Standorte der Tafeln 2–12 sind offiziell nicht verzeichnet — lasst euch von den Gassen führen, nicht von einer Karte.',
      'El azulejo 1 tiene ubicación documentada; los puntos exactos de los azulejos 2–12 no constan oficialmente, así que dejaos guiar por las calles más que por un plano.',
      'Paneel 1 heeft een gedocumenteerde plek; de exacte plaatsen van de panelen 2–12 zijn niet officieel vastgelegd — laat je door de straatjes leiden, niet door een kaart.',
      'Panel 1 har en dokumenterad plats; de exakta platserna för panel 2–12 är inte officiellt noterade, så låt gränderna leda er snarare än en karta.'
    ),
    transcriptionLabel: l(
      'Original Spanish text',
      'Spanischer Originaltext',
      'Texto original en español',
      'Spaanse originele tekst',
      'Spansk originaltext'
    )
  },
  panels: [
    {
      n: 1,
      titleEs: 'La Tierra',
      scene: l(
        'The setting: the fertile Sierra de Bentomiz, its clear air and hardy people, and its twenty-two populated places — Frigiliana among them.',
        'Die Kulisse: die fruchtbare Sierra de Bentomiz, ihre klare Luft und zähen Menschen, ihre zweiundzwanzig bewohnten Orte — Frigiliana darunter.',
        'El escenario: la fértil Sierra de Bentomiz, su aire claro y su gente recia, y sus veintidós lugares poblados, entre ellos Frigiliana.',
        'Het decor: de vruchtbare Sierra de Bentomiz, haar heldere lucht en taaie mensen, en haar tweeëntwintig bewoonde plaatsen — Frigiliana daaronder.',
        'Miljön: den bördiga Sierra de Bentomiz, dess klara luft och härdiga folk, och dess tjugotvå befolkade orter — Frigiliana bland dem.'
      ),
      transcription:
        '«La Sierra de Bentomíz cae en los términos de la ciudad de Vélez. Toda esta tierra fértil poblada de muchas arboledas, abundante de aguas frías y saludables que baxan entre las peñas. Alcanza un cielo tan claro, que haciéndola amenísima, cria los hombres ligeros, recios y de tan grande ánimo, que antiguamente los Reyes Moros los tenían por los más valientes, más sueltos y de mayor efeto que había en el reyno de Granada. Tenía veinte y dos lugares poblados de gente rica, entre ellos, Fragiliana».'
    },
    {
      n: 2,
      titleEs: 'La Gente',
      scene: l(
        'A settled life turns to fear as the 1567 decree bans the Morisco language, dress, music, feasts and gatherings.',
        'Ein geregeltes Leben kippt in Furcht, als der Erlass von 1567 Sprache, Kleidung, Musik, Feste und Zusammenkünfte der Morisken verbietet.',
        'Una vida asentada se vuelve miedo cuando la pragmática de 1567 prohíbe la lengua, el vestido, la música, las fiestas y las reuniones moriscas.',
        'Een gevestigd leven slaat om in angst als het decreet van 1567 de Moriskse taal, kleding, muziek, feesten en samenkomsten verbiedt.',
        'Ett stadgat liv vänds i rädsla när påbudet 1567 förbjuder moriskernas språk, dräkt, musik, fester och sammankomster.'
      ),
      transcription:
        '«Manteníase esta gente con sus oficios en aquellos lugares, casábanse, labraban la tierra, dábanse a su vida sosegada. Siguiéronse luego ofensas en su ley, en las haciendas, y en el uso de la vida, por que la Inquisición los comenzó a apretar más de los ordinario. El Rey les mandó dejar la habla morisca, quitóseles el hábito morisco, hubo fama que les mandaban tomar los hijos y pasarlos a Castilla, vedáronles los baños, la música, cantares, fiestas, bodas y cualesquier juntas de pasatiempo. Todo era confusión, sospecha y temor».'
    },
    {
      n: 3,
      titleEs: 'La Revuelta',
      scene: l(
        'Escalation: the outlaw Andrés el Chorairán stirs revolt; a moderate who tried to stop it is jailed and tortured with the innocent.',
        'Eskalation: Der Bandit Andrés el Chorairán schürt den Aufstand; ein Mäßiger, der ihn verhindern wollte, wird mit den Unschuldigen eingekerkert und gefoltert.',
        'Escalada: el monfí Andrés el Chorairán aviva la rebelión; un moderado que trató de impedirla es encarcelado y torturado junto a inocentes.',
        'Escalatie: de bandiet Andrés el Chorairán wakkert de opstand aan; een gematigde die haar wilde stoppen wordt met de onschuldigen gevangengezet en gemarteld.',
        'Upptrappning: fredlöse Andrés el Chorairán eldar på upproret; en måttfull man som försökte stoppa det fängslas och torteras med de oskyldiga.'
      ),
      transcription:
        '«Andrés el Chorairán monfí natural de Sedella, concitó los ánimos de los suyos para escitarles a la rebelión. La gente moza que comenzaba a alborotarse la contuvo el morisco Luis Mendez, hombre influyente en Canillas, pero no pudo evitar que atacaran una venta de un cristiano, ni que mataran en ella a varias personas. Acudió el Juez de Vélez Pedro Guerra y muchos inocentes moriscos, entre ellos Luis Mendez que había impedido la revuelta, fueron presos y cargados de cadenas y sometidos a crueles tormentos».'
    },
    {
      n: 4,
      titleEs: 'Los Jofores',
      scene: l(
        'Prophecy and pilgrimage: an elder invokes Allah’s protection and urges the people not to abandon their lucky ground.',
        'Prophezeiung und Wallfahrt: Ein Alter erfleht Allahs Schutz und beschwört die Menschen, ihren glückbringenden Boden nicht zu verlassen.',
        'Profecía y romería: un anciano implora la protección de Alá y exhorta a la gente a no abandonar su tierra afortunada.',
        'Voorspelling en bedevaart: een oude man smeekt om Allahs bescherming en spoort de mensen aan hun gelukkige grond niet te verlaten.',
        'Profetia och vallfärd: en gammal man åkallar Allahs beskydd och manar folket att inte överge sin lyckosamma mark.'
      ),
      transcription:
        '«Días después trasladáronse en romería, almorabito de la Rábita de Canillas para impetrar la protección de Alá y el viejo musulmán dirigió la palabra a la muchedumbre, exhortándoles a que no abandonasen el lugar. Cuando en un momento de la sublevación los moriscos decidieron abandonarlo para unirse a los de otro lugar más seguro, el peñón de Frigiliana, un viejo, el Jorrón de Leimón, protestó del acuerdo, porque decía que aquel había sido lugar dichoso, donde habían tenido siempre, felices sucesos los moros.»'
    },
    {
      n: 5,
      titleEs: 'La Identidad',
      scene: l(
        'The old banner with green crescents reappears; the noble Martín Alguacil is raised on a white mule as a leader.',
        'Das alte Banner mit grünen Halbmonden taucht wieder auf; der edle Martín Alguacil wird auf einem weißen Maultier zum Anführer erhoben.',
        'Reaparece la vieja bandera de lunas verdes; el noble Martín Alguacil es alzado sobre una mula blanca como caudillo.',
        'De oude banier met groene halvemanen duikt weer op; de edele Martín Alguacil wordt op een witte muildier tot leider verheven.',
        'Den gamla fanan med gröna halvmånar dyker upp igen; den ädle Martín Alguacil lyfts upp på en vit mulåsna till ledare.'
      ),
      transcription:
        '«Aun no era bien acabado de alzar el pueblo, cuando pareció en la plaza del lugar una bandera de tafetán colorado, ya deslucida de vieja, con unas lunas verdes muy grandes, que la tenía guardada Francisco de Roxas, Morisco de aquel lugar, que había sido de sus pasados en tiempo Moros. Alzados los vecinos de Canillas de Aceytuno; los de Cómpeta movidos por Martín Alguacil, hombre noble y de mucha autoridad, tomoaron las armas, y ataviándole con ricos almayzares de seda y oro, le pusieron sobre una mula blanca y llegaron todos a besarle la mano y la ropa».'
    },
    {
      n: 6,
      titleEs: 'El Éxodo',
      scene: l(
        'Late April 1569: a mass of people abandon their homes and set out for the Peñón — the panel jumps straight to the defeat of 11 June.',
        'Ende April 1569: Eine Menschenmenge verlässt Haus und Hof und zieht zum Peñón — die Tafel springt direkt zur Niederlage vom 11. Juni.',
        'Finales de abril de 1569: una multitud abandona sus casas y marcha al Peñón; el azulejo salta directo a la derrota del 11 de junio.',
        'Eind april 1569: een mensenmassa verlaat huis en haard en trekt naar de Peñón — het paneel springt meteen naar de nederlaag van 11 juni.',
        'Slutet av april 1569: en människomassa överger sina hem och drar mot Peñón — panelen hoppar rakt till nederlaget den 11 juni.'
      ),
      transcription:
        '«En los últimos días de Abril de 1569, esta gran concentración humana, cerradas las puertas de sus casas, abandonados sus hogares, despobladas las alquerías, campos y caseríos, portando sus ajuares, herramienatas y armas, puso rumbo a Frigiliana. Sólo nos resta imaginar la gran polvaredas de almas destacada en las alturas del Mayarín, atravesando cerros y arroyos, camino de la triste senda que los conduciría a la muerte y la derrota. Llegados a Frigiliana se instalaron en la Cordillera del Fuerte, donde el 11 de Junio, día de S. Bernabé, fueron atacados por los cristianos».'
    },
    {
      n: 7,
      titleEs: 'Los Adalides',
      scene: l(
        'The defenders gather on the strong Peñón near the sea and name Hernando el Darra — descended from the village’s former alcaides — their commander.',
        'Die Verteidiger sammeln sich auf dem starken Peñón nahe dem Meer und ernennen Hernando el Darra — Nachfahre der einstigen Alcaides des Ortes — zum Anführer.',
        'Los defensores se reúnen en el fuerte Peñón, cerca del mar, y nombran a Hernando el Darra —descendiente de los antiguos alcaides del pueblo— su caudillo.',
        'De verdedigers verzamelen zich op de sterke Peñón bij zee en benoemen Hernando el Darra — afstammeling van de vroegere alcaides van het dorp — tot aanvoerder.',
        'Försvararna samlas på den starka Peñón nära havet och utser Hernando el Darra — ättling till byns forna alcaides — till sin anförare.'
      ),
      transcription:
        '«Y pareciéndoles que estarían mejor todos juntos en el Peñón de Frigiliana, que era muy fuerte, y cerca del mar, enviaron a decir a los del fuerte de Sedella, que se viniesen a juntar con ellos; nombraron por su caudillo y capitán general a Hernando el Darra, que tenía entre ellos opinión de muy noble, porque sus pasados en tiempo de Moros eran alcaydes y alguaciles de Fregiliana.»'
    },
    {
      n: 8,
      titleEs: 'Los Cristianos',
      scene: l(
        'The crown’s overwhelming force: the naval commanders Requesens, Bazán and Leiva, and 6,000 men including 800 marines.',
        'Die erdrückende Übermacht der Krone: die Flottenführer Requesens, Bazán und Leiva und 6.000 Mann, darunter 800 Marinesoldaten.',
        'La fuerza abrumadora de la corona: los mandos navales Requesens, Bazán y Leiva, y 6.000 hombres, entre ellos 800 marinos.',
        'De verpletterende overmacht van de kroon: de vlootcommandanten Requesens, Bazán en Leiva, en 6.000 man, waaronder 800 mariniers.',
        'Kronans överväldigande styrka: sjöbefälhavarna Requesens, Bazán och Leiva, och 6 000 man, däribland 800 sjömän.'
      ),
      transcription:
        '«En la empresa tomaron parte fuerzas de mar a las órdenes de don Luis Requesens, de don Álvaro de Bazán y de don Sancho de Leiva. Esa Armada contribuyó eficazmente al buen éxito de la expedición, cooperando a operaciones tan brillantes como la del Peñón de Frigiliana, posición tenida por inexpugnable, y los acometió Requesens al frente de 6.000 hombres, entre los cuales se contaban 800 marinos».'
    },
    {
      n: 9,
      titleEs: 'El Asedio',
      scene: l(
        'Asymmetric defence: the Moriscos roll prepared millstones down the steep slope, cutting through the climbing soldiers.',
        'Asymmetrische Verteidigung: Die Morisken rollen präparierte Mühlsteine den steilen Hang hinab und mähen die aufsteigenden Soldaten nieder.',
        'Defensa asimétrica: los moriscos hacen rodar ruedas de molino preparadas por la cuesta, arrasando a los soldados que suben.',
        'Asymmetrische verdediging: de Morisken laten geprepareerde molenstenen langs de steile helling rollen en maaien de klimmende soldaten neer.',
        'Asymmetriskt försvar: moriskerna rullar förberedda kvarnstenar nerför den branta sluttningen och mejar ner de klättrande soldaterna.'
      ),
      transcription:
        '«Las Christianas vanderas comenzaron a subir a toda priessa por la cuesta arriba, mas los Moros comenzaron a defender la subida, arrojando muchas piedras con una endiablada invención, y fue que tenían muchas ruedas de molino apercibidas, y por los ojos atravesados unos maderos muy largos, y estas arrojaban en derecho de las Escuadras de los Christianos que subían por la cuesta, y no avía rueda destas, que no se llevasse de camino cincuenta Soldados, si delante los hallaba».'
    },
    {
      n: 10,
      titleEs: 'Las Moriscas',
      scene: l(
        'The women fight beside the men and, seeing the fort lost, throw themselves from the cliffs rather than be enslaved.',
        'Die Frauen kämpfen an der Seite der Männer und stürzen sich, als das Fort verloren ist, von den Klippen, statt versklavt zu werden.',
        'Las mujeres pelean junto a los hombres y, perdido el fuerte, se despeñan por los riscos antes que ser esclavizadas.',
        'De vrouwen vechten naast de mannen en storten zich, als het fort verloren is, van de rotsen in plaats van tot slaaf gemaakt te worden.',
        'Kvinnorna slåss vid männens sida och störtar sig, när fästet är förlorat, utför klipporna hellre än att förslavas.'
      ),
      transcription:
        '«Hubo algunas Moras que pelearon como esforzados varones, ayudando a sus maridos, hermanos y hijos: y quando vieron el fuerte perdido, se despeñaron por las peñas más agrias, quiriendo más morir hechas pedazos, que venir en poder de Christianos. A otras no les faltó ánimos para ponerse en cobro con sus hijos en los hombros, saltando como cabras de peña en peña».'
    },
    {
      n: 11,
      titleEs: 'La Diáspora',
      scene: l(
        'The toll: around 1,800 dead and some 3,000 taken as slaves — “all paid for in Christian blood”.',
        'Die Bilanz: rund 1.800 Tote und etwa 3.000 in die Sklaverei geführt — „alles bezahlt mit christlichem Blut".',
        'El balance: unos 1.800 muertos y cerca de 3.000 tomados como esclavos: «todo cobrado a precio de christiana sangre».',
        'De tol: zo’n 1.800 doden en ongeveer 3.000 tot slaaf gemaakt — „alles betaald met christelijk bloed".',
        'Facit: omkring 1 800 döda och cirka 3 000 tagna som slavar — ”allt betalt med kristet blod”.'
      ),
      transcription:
        '«Ganado y saqueado el fuerte fueron captivas más de tres mil almas. Dentro del fuerte murieron quinientos hombres, la mayor parte viejos; mujeres y niños casi mil y trescientos. Cristianos fueron heridos más de seiscientos, muriendo en pelea pasados de trescientos soldados. El saco fué grande y se tomaron esclavos muchas moras y muchachos, aunque todo fué cobrado a precio de christiana sangre».'
    },
    {
      n: 12,
      titleEs: 'El Holocausto',
      scene: l(
        'Silence over the village, and Martín Alguacil’s words on dying for the homeland. The title itself is a deliberate modern choice.',
        'Stille über dem Dorf und Martín Alguacils Worte über den Tod für die Heimat. Schon der Titel ist eine bewusste moderne Setzung.',
        'Silencio sobre el pueblo y las palabras de Martín Alguacil sobre morir por la patria. El propio título es una elección moderna deliberada.',
        'Stilte over het dorp en de woorden van Martín Alguacil over sterven voor het vaderland. Al de titel is een bewuste moderne keuze.',
        'Tystnad över byn och Martín Alguacils ord om att dö för fäderneslandet. Redan titeln är ett medvetet modernt val.'
      ),
      transcription:
        '«Un angustioso silencio se hizo sobre la alquería de Frigiliana. Allí quedaba el monte abandonado, los cuerpos muertos, la voz viva de Martín Alguacil: "Si defendiendo nuestra libertad muriésemos peleando, la madre tierra recibirá lo que produxo; y al que faltare sepultura que le esconda, no le faltará cielo que le cubra. No quiera Dios que se diga que los hombres de Bentomiz no osaron morir por su patria"».'
    }
  ],
  historiography: {
    title: l(
      'Where the panels and the record differ',
      'Wo Tafeln und Beleg auseinandergehen',
      'En qué difieren los azulejos y lo documentado',
      'Waar de panelen en de bronnen verschillen',
      'Där panelerna och källorna skiljer sig'
    ),
    intro: l(
      'The panels are memory culture, not a neutral archive. They rest on real chronicles — Luis del Mármol Carvajal and Diego Hurtado de Mendoza — but they shape the story for effect. Three differences are worth knowing.',
      'Die Tafeln sind Erinnerungskultur, kein neutrales Archiv. Sie stützen sich auf echte Chroniken — Luis del Mármol Carvajal und Diego Hurtado de Mendoza —, formen die Geschichte aber mit Wirkung. Drei Abweichungen lohnt es zu kennen.',
      'Los azulejos son memoria, no un archivo neutral. Se apoyan en crónicas reales —Luis del Mármol Carvajal y Diego Hurtado de Mendoza— pero moldean el relato con intención. Vale la pena conocer tres diferencias.',
      'De panelen zijn geheugencultuur, geen neutraal archief. Ze steunen op echte kronieken — Luis del Mármol Carvajal en Diego Hurtado de Mendoza — maar vormen het verhaal met effect. Drie verschillen zijn de moeite waard.',
      'Panelerna är minneskultur, inte ett neutralt arkiv. De vilar på verkliga krönikor — Luis del Mármol Carvajal och Diego Hurtado de Mendoza — men formar berättelsen för effekt. Tre skillnader är värda att känna till.'
    ),
    items: [
      {
        title: l(
          'The 28 May 1569 assault is left out',
          'Der Angriff vom 28. Mai 1569 fehlt',
          'Se omite el asalto del 28 de mayo de 1569',
          'De aanval van 28 mei 1569 ontbreekt',
          'Anfallet den 28 maj 1569 utelämnas'
        ),
        text: l(
          'The panels compress the siege to the decisive royal assault of 11 June. The documented record has two stages: a first royal attack on 28 May 1569 that the Moriscos repelled, and only then the far larger 11 June assault that broke them. The panels drop the Morisco defensive victory for a cleaner arc of doom.',
          'Die Tafeln verdichten die Belagerung auf den entscheidenden Angriff vom 11. Juni. Der Beleg kennt zwei Stufen: einen ersten königlichen Angriff am 28. Mai 1569, den die Morisken abwehrten, und erst danach den weit größeren am 11. Juni, der sie brach. Die Tafeln lassen den moriskischen Abwehrsieg zugunsten eines geradlinigen Verhängnisses weg.',
          'Los azulejos comprimen el asedio al asalto decisivo del 11 de junio. Lo documentado tiene dos fases: un primer ataque real el 28 de mayo de 1569 que los moriscos rechazaron y, solo después, el asalto mucho mayor del 11 de junio que los venció. Los azulejos omiten la victoria defensiva morisca por un arco de fatalidad más limpio.',
          'De panelen comprimeren het beleg tot de beslissende aanval van 11 juni. De bronnen kennen twee fasen: een eerste koninklijke aanval op 28 mei 1569 die de Morisken afsloegen, en pas daarna de veel grotere aanval van 11 juni die hen brak. De panelen laten de Moriskse verdedigingsoverwinning weg voor een strakkere lijn van onheil.',
          'Panelerna komprimerar belägringen till det avgörande anfallet den 11 juni. Källorna har två skeden: ett första kungligt anfall den 28 maj 1569 som moriskerna slog tillbaka, och först därefter det långt större den 11 juni som knäckte dem. Panelerna utelämnar moriskernas försvarsseger för en renare undergångsbåge.'
        )
      },
      {
        title: l(
          '“Holocausto” and “patria” are modern words',
          '„Holocausto" und „patria" sind moderne Wörter',
          '«Holocausto» y «patria» son palabras modernas',
          '„Holocausto" en „patria" zijn moderne woorden',
          '”Holocausto” och ”patria” är moderna ord'
        ),
        text: l(
          'The twelfth panel is titled “El Holocausto” and has Martín Alguacil die for the “patria”. Both are twentieth-century terms, foreign to the sixteenth-century actors, who thought in rebellion, punishment and pacification. The choice marks the panels as a 1982 memorial, made as Andalusia distanced itself from centralist history.',
          'Die zwölfte Tafel heißt „El Holocausto" und lässt Martín Alguacil für die „patria" sterben. Beides sind Begriffe des 20. Jahrhunderts, den Akteuren des 16. fremd, die in Rebellion, Strafe und Befriedung dachten. Die Wahl weist die Tafeln als Mahnmal von 1982 aus, entstanden, als sich Andalusien von der zentralistischen Geschichtsschreibung abwandte.',
          'El duodécimo azulejo se titula «El Holocausto» y hace morir a Martín Alguacil por la «patria». Ambos son términos del siglo XX, ajenos a los actores del XVI, que pensaban en rebelión, castigo y pacificación. La elección señala los azulejos como un memorial de 1982, hecho cuando Andalucía se distanciaba de la historia centralista.',
          'Het twaalfde paneel heet „El Holocausto" en laat Martín Alguacil sterven voor de „patria". Beide zijn twintigste-eeuwse termen, vreemd aan de zestiende-eeuwse actoren, die in opstand, straf en pacificatie dachten. De keuze markeert de panelen als een monument uit 1982, gemaakt toen Andalusië afstand nam van de centralistische geschiedenis.',
          'Den tolfte panelen heter ”El Holocausto” och låter Martín Alguacil dö för ”patria”. Båda är 1900-talstermer, främmande för 1500-talets aktörer, som tänkte i uppror, straff och pacificering. Valet märker panelerna som ett minnesmärke från 1982, gjort när Andalusien tog avstånd från den centralistiska historien.'
        )
      },
      {
        title: l(
          'The moral is inverted',
          'Die Wertung ist umgekehrt',
          'La valoración está invertida',
          'Het oordeel is omgekeerd',
          'Värderingen är omvänd'
        ),
        text: l(
          'The chronicles were written from the crown’s side, about rebels to be punished. The panels keep the facts but flip the judgement: the Moriscos become tragic defenders of freedom and homeland. That is a fair, deliberate reinterpretation — worth reading as such rather than as a neutral record.',
          'Die Chroniken sind aus Sicht der Krone geschrieben, über zu bestrafende Rebellen. Die Tafeln behalten die Fakten, drehen aber die Wertung: Die Morisken werden zu tragischen Verteidigern von Freiheit und Heimat. Das ist eine legitime, bewusste Neudeutung — als solche zu lesen, nicht als neutraler Bericht.',
          'Las crónicas se escribieron desde el lado de la corona, sobre rebeldes a castigar. Los azulejos conservan los hechos pero invierten el juicio: los moriscos pasan a ser trágicos defensores de la libertad y la patria. Es una reinterpretación legítima y deliberada, que conviene leer como tal y no como un registro neutral.',
          'De kronieken zijn vanaf de kant van de kroon geschreven, over te bestraffen rebellen. De panelen behouden de feiten maar keren het oordeel om: de Morisken worden tragische verdedigers van vrijheid en vaderland. Dat is een legitieme, bewuste herinterpretatie — als zodanig te lezen, niet als een neutraal verslag.',
          'Krönikorna skrevs från kronans sida, om rebeller som skulle straffas. Panelerna behåller fakta men vänder på domen: moriskerna blir tragiska försvarare av frihet och fädernesland. Det är en rimlig, medveten omtolkning — värd att läsa som sådan, inte som ett neutralt protokoll.'
        )
      }
    ]
  },
  closing: {
    title: l(
      'Walk it, then read the rest of the old town',
      'Erst gehen, dann den Rest der Altstadt lesen',
      'Recorredlos y luego leed el resto del casco antiguo',
      'Loop het, lees dan de rest van de oude kern',
      'Vandra den, läs sedan resten av gamla stan'
    ),
    lead: l(
      'The panels are the thread; the old town around them is the cloth. From Casa AMARA in the lower centre you reach the start of the route in a few minutes.',
      'Die Tafeln sind der Faden; die Altstadt drumherum ist der Stoff. Von Casa AMARA im unteren Ortskern erreicht ihr den Anfang der Route in wenigen Minuten.',
      'Los azulejos son el hilo; el casco antiguo alrededor es la tela. Desde Casa AMARA, en la parte baja del centro, llegáis al inicio de la ruta en pocos minutos.',
      'De panelen zijn de draad; de oude kern eromheen is de stof. Vanaf Casa AMARA in het lagere centrum bereik je het begin van de route in een paar minuten.',
      'Panelerna är tråden; gamla stan runt dem är tyget. Från Casa AMARA i nedre centrum når ni ruttens början på några minuter.'
    ),
    oldTownCta: l(
      'Back to the old town',
      'Zurück zur Altstadt',
      'Volver al casco antiguo',
      'Terug naar de oude kern',
      'Tillbaka till gamla stan'
    ),
    availabilityCta: l(
      'Check availability',
      'Verfügbarkeit prüfen',
      'Consultar disponibilidad',
      'Beschikbaarheid bekijken',
      'Se tillgänglighet'
    )
  }
} as const;
