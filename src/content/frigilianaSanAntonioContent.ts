import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';

const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({
  en,
  de,
  es,
  nl,
  sv
});

export const frigilianaSanAntonioSeo: AmaraAuthoringSeo = {
  version: '2026-09-11-frigiliana-san-antonio-v1',
  pageType: 'B',
  entityKey: 'amara-brand',
  /* og:image is emitted as an absolute URL, so it must stay inside the published image
     contract; image 01 of the pueblo set is the San Antonio façade, so it carries the card. */
  ogImage:
    '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg',
  article: {
    datePublished: '2026-09-11',
    dateModified: '2026-09-11',
    authorName: 'Robert Sebastian Böhmer',
    authorType: 'Person',
    authorRoute: 'about'
  },
  languages: {
    en: {
      title: 'Iglesia de San Antonio de Padua in Frigiliana: The 1676 Parish Church',
      description:
        'Built in 1676 on the site of a former hermitage by the master builder Bernardo de Godoy, San Antonio de Padua is Frigiliana’s restrained Baroque parish church beside Calle Real.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Iglesia de San Antonio de Padua in Frigiliana: die Pfarrkirche von 1676',
      description:
        '1676 auf dem Grund einer früheren Kapelle vom Baumeister Bernardo de Godoy errichtet, ist San Antonio de Padua Frigilianas schlichte Barockkirche an der Calle Real.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Iglesia de San Antonio de Padua en Frigiliana: la parroquia de 1676',
      description:
        'Construida en 1676 sobre una antigua ermita por el maestro mayor Bernardo de Godoy, San Antonio de Padua es la sobria iglesia barroca de Frigiliana, junto a la calle Real.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Iglesia de San Antonio de Padua in Frigiliana: de parochiekerk uit 1676',
      description:
        'In 1676 gebouwd op de plek van een oudere kapel door bouwmeester Bernardo de Godoy, is San Antonio de Padua de sobere barokke parochiekerk van Frigiliana aan Calle Real.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Iglesia de San Antonio de Padua i Frigiliana: sockenkyrkan från 1676',
      description:
        'Byggd 1676 på platsen för ett tidigare kapell av byggmästaren Bernardo de Godoy är San Antonio de Padua Frigilianas återhållsamma barockkyrka vid Calle Real.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

/**
 * Explore-type spoke (B) under the old-town page, sibling to El Ingenio, the ceramic
 * panels and the Casa del Apero. Content follows research-001 (2026-09-11). The page opens
 * with a LocationPanoramaHero on the church façade (the bishop's coat of arms is visible
 * above the door). Interior access and service times stay current checks.
 */
export const frigilianaSanAntonioCopy = {
  hero: {
    kicker: l(
      'Old town · San Antonio de Padua',
      'Altstadt · San Antonio de Padua',
      'Casco antiguo · San Antonio de Padua',
      'Oude kern · San Antonio de Padua',
      'Gamla stan · San Antonio de Padua'
    ),
    title: l(
      'Iglesia de San Antonio de Padua',
      'Iglesia de San Antonio de Padua',
      'Iglesia de San Antonio de Padua',
      'Iglesia de San Antonio de Padua',
      'Iglesia de San Antonio de Padua'
    ),
    subtitle: l(
      'The plain Baroque church that anchors the lower old town',
      'Die schlichte Barockkirche, die den unteren Ort verankert',
      'La sobria iglesia barroca que ancla la parte baja del pueblo',
      'De sobere barokkerk die de lagere oude kern verankert',
      'Den enkla barockkyrkan som förankrar nedre gamla stan'
    ),
    paragraphs: [
      l(
        'Beside Calle Real, where the lanes of the lower old town gather, stands San Antonio de Padua — the parish church, built in 1676 on the site of an older hermitage. It was raised under the master builder Bernardo de Godoy and promoted by the Bishop of Málaga, whose coat of arms still marks the entrance. From outside it reads as a simple whitewashed volume; step in and the three naves open under a timber roof in the Mudéjar tradition. It is a working church, so opening times follow the parish — check on the day.',
        'An der Calle Real, wo die Gassen des unteren Orts zusammenlaufen, steht San Antonio de Padua — die Pfarrkirche, 1676 auf dem Grund einer älteren Kapelle errichtet. Sie entstand unter dem Baumeister Bernardo de Godoy und auf Betreiben des Bischofs von Málaga, dessen Wappen bis heute den Eingang markiert. Von außen wirkt sie wie ein schlichter, gekalkter Bau; drinnen öffnen sich drei Schiffe unter einer hölzernen Decke in Mudéjar-Tradition. Es ist eine genutzte Kirche, die Öffnungszeiten richten sich nach der Gemeinde — prüft sie am Tag selbst.',
        'Junto a la calle Real, donde confluyen las calles de la parte baja del pueblo, se alza San Antonio de Padua: la iglesia parroquial, construida en 1676 sobre una antigua ermita. Se levantó bajo el maestro mayor Bernardo de Godoy y por impulso del obispo de Málaga, cuyo escudo marca todavía la entrada. Desde fuera parece un volumen encalado y sencillo; al entrar, las tres naves se abren bajo una armadura de madera de tradición mudéjar. Es una iglesia en uso, así que los horarios dependen de la parroquia: conviene comprobarlos ese día.',
        'Aan Calle Real, waar de straatjes van de lagere oude kern samenkomen, staat San Antonio de Padua — de parochiekerk, in 1676 gebouwd op de plek van een oudere kapel. Ze verrees onder bouwmeester Bernardo de Godoy en op initiatief van de bisschop van Málaga, wiens wapen nog steeds de ingang siert. Van buiten oogt ze als een sober witgekalkt volume; binnen openen zich drie beuken onder een houten dak in mudéjar-traditie. Het is een kerk in gebruik, dus de openingstijden volgen de parochie — controleer ze op de dag zelf.',
        'Vid Calle Real, där gränderna i nedre gamla stan möts, står San Antonio de Padua — sockenkyrkan, byggd 1676 på platsen för ett äldre kapell. Den restes under byggmästaren Bernardo de Godoy och på initiativ av biskopen i Málaga, vars vapen ännu markerar entrén. Utifrån läses den som en enkel vitkalkad volym; innanför öppnar sig tre skepp under ett trätak i mudéjartradition. Det är en kyrka i bruk, så öppettiderna följer församlingen — kontrollera dem samma dag.'
      )
    ]
  },
  keyFigures: {
    figures: [
      {
        value: '1676',
        label: l(
          'Built on the site of a former hermitage',
          'Auf dem Grund einer früheren Kapelle gebaut',
          'Construida sobre una antigua ermita',
          'Gebouwd op de plek van een oudere kapel',
          'Byggd på platsen för ett tidigare kapell'
        )
      },
      {
        value: 'B. de Godoy',
        label: l(
          'Master builder “from the foundations”',
          'Baumeister „von den Fundamenten an“',
          'Maestro mayor «desde los cimientos»',
          'Bouwmeester „vanaf de fundamenten“',
          'Byggmästare ”från grunden”'
        )
      },
      {
        value: '3 naves',
        label: l(
          'Latin-cross plan, Mudéjar timber roof',
          'Lateinkreuz-Grundriss, Mudéjar-Holzdecke',
          'Planta de cruz latina, armadura mudéjar',
          'Latijns-kruisplan, mudéjar houten dak',
          'Latinsk korsplan, mudéjartak i trä'
        )
      },
      {
        value: 'Barock',
        label: l(
          'Official heritage classification',
          'Amtliche Denkmal-Einordnung',
          'Clasificación patrimonial oficial',
          'Officiële erfgoedclassificatie',
          'Officiell kulturarvsklassificering'
        )
      }
    ],
    note: l(
      'Dating, authorship and style from official and heritage sources; interior access and service times are current checks, not fixed facts.',
      'Datierung, Baumeister und Stil aus amtlichen und Denkmalquellen; Innenzugang und Messzeiten sind aktuelle Prüfpunkte, keine festen Angaben.',
      'Datación, autoría y estilo de fuentes oficiales y patrimoniales; el acceso al interior y los horarios de culto son datos a comprobar, no hechos fijos.',
      'Datering, bouwmeester en stijl uit officiële en erfgoedbronnen; toegang tot het interieur en diensttijden zijn actuele controlepunten, geen vaste feiten.',
      'Datering, byggmästare och stil från officiella och kulturarvskällor; tillträde inuti och gudstjänsttider är aktuella kontrollpunkter, inte fasta fakta.'
    )
  },
  sections: [
    {
      eyebrow: l('The build', 'Der Bau', 'La construcción', 'De bouw', 'Bygget'),
      title: l(
        '1676, from the foundations up',
        '1676, von den Fundamenten an',
        '1676, desde los cimientos',
        '1676, vanaf de fundamenten',
        '1676, från grunden och upp'
      ),
      text: l(
        'The present church went up in 1676, on ground that had held an earlier hermitage. Its master builder was Bernardo de Godoy, who worked for the bishopric of Málaga; the work was promoted under Bishop Fray Alonso de Santo Tomás, and his coat of arms was set on the entrance façade. That the church we see is a deliberate seventeenth-century build, not a slow accretion, is the single fact that makes the rest legible.',
        'Die heutige Kirche entstand 1676, auf einem Grund, der zuvor eine Kapelle getragen hatte. Ihr Baumeister war Bernardo de Godoy, der für das Bistum Málaga arbeitete; das Werk wurde unter Bischof Fray Alonso de Santo Tomás betrieben, dessen Wappen an der Eingangsfassade angebracht wurde. Dass die Kirche, die wir sehen, ein bewusster Bau des 17. Jahrhunderts ist und kein langsames Anwachsen, ist der eine Fakt, der alles Weitere lesbar macht.',
        'La iglesia actual se levantó en 1676, sobre un terreno que había tenido antes una ermita. Su maestro mayor fue Bernardo de Godoy, al servicio del obispado de Málaga; la obra se impulsó bajo el obispo Fray Alonso de Santo Tomás, cuyo escudo se colocó en la portada. Que la iglesia que vemos sea una construcción deliberada del siglo XVII, y no una acumulación lenta, es el dato que hace legible todo lo demás.',
        'De huidige kerk verrees in 1676, op grond die eerder een kapel had gedragen. Haar bouwmeester was Bernardo de Godoy, in dienst van het bisdom Málaga; het werk werd bevorderd onder bisschop Fray Alonso de Santo Tomás, wiens wapen op de toegangsgevel werd geplaatst. Dat de kerk die we zien een bewuste zeventiende-eeuwse bouw is en geen trage aangroei, is het ene feit dat de rest leesbaar maakt.',
        'Den nuvarande kyrkan restes 1676, på mark som tidigare burit ett kapell. Byggmästare var Bernardo de Godoy, i tjänst hos stiftet i Málaga; arbetet drevs under biskop Fray Alonso de Santo Tomás, vars vapen sattes på entréfasaden. Att kyrkan vi ser är ett medvetet 1600-talsbygge och inte en långsam tillväxt är det enda faktum som gör resten läsbart.'
      )
    },
    {
      eyebrow: l('The plan', 'Der Grundriss', 'La planta', 'De plattegrond', 'Planen'),
      title: l(
        'Three naves under a timber roof',
        'Drei Schiffe unter einer Holzdecke',
        'Tres naves bajo una armadura',
        'Drie beuken onder een houten dak',
        'Tre skepp under ett trätak'
      ),
      text: l(
        'Inside, the church follows a Latin-cross plan: three naves divided by semi-circular arches, closing on the crossing. Overhead runs a timber roof in the Mudéjar tradition — an armadura, the carpentry that Andalucía kept building long after the styles around it changed. That timber ceiling is a construction habit, not a competing style: the building is officially classified as restrained Baroque of the late seventeenth century, which supersedes the older habit of calling it Renaissance.',
        'Innen folgt die Kirche einem Lateinkreuz-Grundriss: drei Schiffe, durch Rundbögen getrennt, die sich zur Vierung schließen. Darüber spannt sich eine hölzerne Decke in Mudéjar-Tradition — eine armadura, jene Zimmermannskunst, die Andalusien lange weiterbaute, nachdem sich die Stile ringsum geändert hatten. Diese Holzdecke ist eine Bau-Gewohnheit, kein konkurrierender Stil: Der Bau gilt amtlich als schlichter Barock des späten 17. Jahrhunderts, was die ältere Gewohnheit ablöst, ihn Renaissance zu nennen.',
        'Dentro, la iglesia sigue una planta de cruz latina: tres naves separadas por arcos de medio punto que cierran en el crucero. Por encima corre una armadura de madera de tradición mudéjar, la carpintería que Andalucía siguió levantando mucho después de que los estilos de alrededor cambiaran. Ese techo de madera es una costumbre constructiva, no un estilo rival: el edificio se clasifica oficialmente como barroco sobrio de finales del siglo XVII, lo que reemplaza la vieja costumbre de llamarlo renacentista.',
        'Binnen volgt de kerk een Latijns-kruisplan: drie beuken, gescheiden door rondbogen die op de kruising sluiten. Daarboven loopt een houten dak in mudéjar-traditie — een armadura, het timmerwerk dat Andalusië nog lang bleef bouwen nadat de stijlen eromheen waren veranderd. Dat houten plafond is een bouwgewoonte, geen concurrerende stijl: het gebouw is officieel geclassificeerd als sobere barok van eind zeventiende eeuw, wat de oude gewoonte om het renaissance te noemen vervangt.',
        'Inuti följer kyrkan en latinsk korsplan: tre skepp, delade av rundbågar som sluter mot korsmitten. Ovanför löper ett trätak i mudéjartradition — en armadura, det snickeri som Andalusien fortsatte bygga långt efter att stilarna runt omkring hade ändrats. Det trätaket är en byggvana, inte en konkurrerande stil: byggnaden klassificeras officiellt som återhållsam barock från sent 1600-tal, vilket ersätter den äldre vanan att kalla den renässans.'
      )
    },
    {
      eyebrow: l('Today', 'Heute', 'Hoy', 'Vandaag', 'I dag'),
      title: l(
        'A landmark you meet, not a museum you tour',
        'Ein Orientierungspunkt, kein Museum',
        'Un hito que se encuentra, no un museo que se visita',
        'Een herkenningspunt, geen museum',
        'Ett landmärke man möter, inte ett museum'
      ),
      text: l(
        'San Antonio is still the parish church, and that shapes how you meet it. It stands where the lower old town gathers, a short walk below Casa AMARA, and it is the easiest fixed point to steer by on a walk up through the lanes. Whether the doors are open depends on services and the parish calendar rather than fixed visiting hours, so treat the interior as a matter of luck and timing — the façade, the bishop’s arms and the position beside Calle Real are yours at any hour.',
        'San Antonio ist bis heute die Pfarrkirche, und das prägt die Begegnung. Sie steht dort, wo der untere Ort zusammenkommt, wenige Minuten unterhalb von Casa AMARA, und ist der einfachste feste Punkt, an dem man sich beim Gang hinauf durch die Gassen orientiert. Ob die Türen offen sind, hängt von Gottesdiensten und dem Gemeindekalender ab, nicht von festen Besuchszeiten — nehmt das Innere als Sache von Glück und Timing; die Fassade, das Bischofswappen und die Lage an der Calle Real habt ihr zu jeder Stunde.',
        'San Antonio sigue siendo la iglesia parroquial, y eso marca el encuentro. Está donde se reúne la parte baja del pueblo, a pocos minutos de Casa AMARA, y es el punto fijo más fácil para orientarse subiendo por las calles. Que las puertas estén abiertas depende de los cultos y del calendario parroquial más que de un horario fijo de visitas, así que tómate el interior como cuestión de suerte y de momento: la portada, el escudo del obispo y la posición junto a la calle Real están ahí a cualquier hora.',
        'San Antonio is nog steeds de parochiekerk, en dat bepaalt de ontmoeting. Ze staat waar de lagere oude kern samenkomt, op een paar minuten van Casa AMARA, en is het makkelijkste vaste punt om op te sturen tijdens een wandeling omhoog door de straatjes. Of de deuren openstaan hangt af van diensten en de parochiekalender, niet van vaste bezoekuren — beschouw het interieur als een kwestie van geluk en timing; de gevel, het bisschopswapen en de ligging aan Calle Real heb je op elk uur.',
        'San Antonio är fortfarande sockenkyrkan, och det präglar mötet. Den står där nedre gamla stan samlas, några minuter nedanför Casa AMARA, och är den enklaste fasta punkten att styra efter på en vandring upp genom gränderna. Om dörrarna är öppna beror på gudstjänster och församlingens kalender snarare än fasta besökstider, så betrakta interiören som en fråga om tur och tajmning — fasaden, biskopsvapnet och läget vid Calle Real har ni när som helst.'
      )
    }
  ],
  pullQuote: l(
    '“Bernardo de Godoy, master builder, made me from the foundations, in the year 1676.” — the church’s own signed roof beam',
    '„Bernardo de Godoy, Baumeister, schuf mich von den Fundamenten an, im Jahr 1676.“ — der signierte Dachbalken der Kirche',
    '«Bernardo de Godoy, maestro mayor, me hizo desde los cimientos, año de 1676.» — la viga firmada de la propia iglesia',
    '„Bernardo de Godoy, bouwmeester, maakte mij vanaf de fundamenten, in het jaar 1676.“ — de gesigneerde dakbalk van de kerk zelf',
    '”Bernardo de Godoy, byggmästare, gjorde mig från grunden, år 1676.” — kyrkans egen signerade takbjälke'
  ),
  closing: {
    title: l(
      'Find it on an old-town walk',
      'Auf einem Altstadt-Gang finden',
      'Encontradla en un paseo por el casco antiguo',
      'Vind haar tijdens een wandeling door de oude kern',
      'Hitta den på en vandring i gamla stan'
    ),
    lead: l(
      'San Antonio stands at the foot of the old town, minutes above Casa AMARA. Let it be your fixed point, then follow the lanes up to El Ingenio, the Casa del Apero and the ceramic panels.',
      'San Antonio steht am Fuß der Altstadt, wenige Minuten oberhalb von Casa AMARA. Nehmt sie als festen Punkt und folgt dann den Gassen hinauf zu El Ingenio, der Casa del Apero und den Keramiktafeln.',
      'San Antonio está al pie del casco antiguo, a pocos minutos de Casa AMARA. Tomadla como punto fijo y seguid luego las calles hasta El Ingenio, la Casa del Apero y los azulejos.',
      'San Antonio staat aan de voet van de oude kern, minuten boven Casa AMARA. Neem haar als vast punt en volg dan de straatjes omhoog naar El Ingenio, de Casa del Apero en de keramiekpanelen.',
      'San Antonio står vid foten av gamla stan, några minuter ovanför Casa AMARA. Låt den vara er fasta punkt och följ sedan gränderna upp till El Ingenio, Casa del Apero och keramikpanelerna.'
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
