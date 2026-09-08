import type { LocalizedText } from '../types/content';
import type { AmaraAuthoringSeo } from '../types/seo';
import type { LinkToken } from '../lib/linkResolver';

/** One authored string in the five AMARA locales, in EN, DE, ES, NL, SV order. */
const l = (en: string, de: string, es: string, nl: string, sv: string): LocalizedText => ({ en, de, es, nl, sv });

export interface NerjaVeranoAzulSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}





const article = {
  datePublished: '2026-08-19',
  dateModified: '2026-08-19',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorRoute: 'about'
};

const officialSources = {
  rtveStory:
    'https://www.rtve.es/rtve/20180413/verano-azul/1713840.shtml',
  rtveProduction:
    'https://www.rtve.es/play/noticias/20111010/como-rodamos-verano-azul/465995.shtml',
  municipality: {
    profile: 'https://www.nerja.es/fallece-antonio-mercero-director-verano-azul/',
    route:
      'https://www.nerja.es/nerja-pone-en-marcha-la-ruta-turistica-de-verano-azul-con-una-aplicacion-de-realidad-aumentada/',
    anniversary:
      'https://www.nerja.es/nerja-conmemora-el-40-aniversario-del-inicio-del-rodaje-de-verano-azul/',
    anforas:
      'https://www.nerja.es/las-anforas-de-verano-azul-se-instalan-en-la-casa-consistorial/'
  }
};

export const nerjaVeranoAzulSeo: AmaraAuthoringSeo = {
  version: '2026-08-19-nerja-verano-azul-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  article,
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  languages: {
    en: {
      title: 'Verano Azul in Nerja: filming locations and traces',
      description:
        'The series that made Nerja known across Spain: filming locations on the beach, the Chanquete statue, La Dorada in the park and the AR route.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Verano Azul in Nerja: Drehorte und Spuren',
      description:
        'Die Serie, die Nerja in ganz Spanien bekannt machte: Drehorte am Strand, die Chanquete-Statue, La Dorada im Park und die AR-Route.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Verano Azul en Nerja: localizaciones y huellas',
      description:
        'La serie que dio a conocer Nerja en toda España: localizaciones en la playa, la estatua de Chanquete, La Dorada en el parque y la ruta de realidad aumentada.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Verano Azul in Nerja: filmlocaties en sporen',
      description:
        'De serie die Nerja in heel Spanje bekend maakte: filmlocaties op het strand, het Chanquete-standbeeld, La Dorada in het park en de AR-route.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title:
        'Verano Azul i Nerja: inspelningsplatser och spår',
      description:
        'Serien som gjorde Nerja känt i hela Spanien: inspelningsplatser på stranden, Chanquete-statyn, La Dorada i parken och AR-rutten.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaVeranoAzulContent = {
  navLabel: l("Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul"),
  breadcrumbLabel: l("Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul"),
  hero: {
    eyebrow: l("Nerja · TV backdrop", "Nerja · Serienkulisse", "Nerja · escenario de serie", "Nerja · seriedecor", "Nerja · seriekuliss"),
    title: l("Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul", "Verano Azul"),
    standfirst: l("For a whole country Nerja was first a television image: the teenagers on their bikes, Chanquete and his boat La Dorada, the beach at Burriana. The series aired more than forty years ago; its places still stand.", "Für ein ganzes Land war Nerja zuerst ein Fernsehbild: die Jugendlichen auf ihren Rädern, Chanquete und sein Boot La Dorada, der Strand von Burriana. Die Serie lief vor über vierzig Jahren; ihre Orte stehen noch.", "Para todo un país Nerja fue primero una imagen de televisión: los jóvenes en sus bicicletas, Chanquete y su barco La Dorada, la playa de Burriana. La serie se emitió hace más de cuarenta años; sus lugares siguen ahí.", "Voor een heel land was Nerja eerst een televisiebeeld: de jongeren op hun fietsen, Chanquete en zijn boot La Dorada, het strand van Burriana. De serie liep meer dan veertig jaar geleden; haar plekken staan er nog.", "För ett helt land var Nerja först en tv-bild: ungdomarna på sina cyklar, Chanquete och hans båt La Dorada, stranden i Burriana. Serien gick för över fyrtio år sedan; dess platser står kvar."),
    note: l("Filming locations, statue and park are in the centre of Nerja.", "Drehorte, Statue und Park liegen im Zentrum von Nerja.", "Localizaciones, estatua y parque están en el centro de Nerja.", "Filmlocaties, standbeeld en park liggen in het centrum van Nerja.", "Inspelningsplatser, staty och park ligger i Nerjas centrum."),
    updated: l("As of August 2026", "Stand August 2026", "Actualizado en agosto de 2026", "Stand augustus 2026", "Uppdaterad augusti 2026")
  },
  facts: [
    {
      label: l("TV format", "TV-Format", "Formato", "TV-opzet", "TV-format"),
      value: l("19 episodes, produced by TVE", "19 Folgen, produziert von TVE", "19 capítulos, producidos por TVE", "19 afleveringen, geproduceerd door TVE", "19 avsnitt, producerade av TVE")
    },
    {
      label: l("Broadcast run", "Ausstrahlung", "Emisión", "Uitzending", "Sändning"),
      value: l("11 Oct 1981 – 14 Feb 1982", "11. Oktober 1981 – 14. Februar 1982", "11 octubre de 1981 – 14 febrero de 1982", "11 oktober 1981 – 14 februari 1982", "11 oktober 1981 – 14 februari 1982")
    },
    {
      label: l("Viewers", "Zuschauer", "Espectadores", "Kijkers", "Tittare"),
      value: l("Over 9 million for later episodes", "Über 9 Millionen bei späteren Folgen", "Más de 9 millones en los últimos capítulos", "Meer dan 9 miljoen bij latere afleveringen", "Över 9 miljoner för senare avsnitt")
    },
    {
      label: l("First day in Nerja", "Erster Drehtag", "Primer día de rodaje", "Eerste opnamedag", "Första inspelningsdag"),
      value: l("21 Aug 1979, Playa de Burriana", "21. August 1979, Playa de Burriana", "21 agosto de 1979, Playa de Burriana", "21 augustus 1979, Playa de Burriana", "21 augusti 1979, Playa de Burriana")
    },
    {
      label: l("Today", "Heute", "Hoy", "Vandaag", "I dag"),
      value: l("Parque Verano Azul with La Dorada, Chanquete statue, AR route since 2023", "Parque Verano Azul mit La Dorada, Chanquete-Statue, AR-Route seit 2023", "Parque Verano Azul con La Dorada, estatua de Chanquete, ruta de RA desde 2023", "Parque Verano Azul met La Dorada, Chanquete-standbeeld, AR-route sinds 2023", "Parque Verano Azul med La Dorada, Chanquete-statyn, AR-rutt sedan 2023")
    }
  ],
  trailer: {
    label: l("Official Verano Azul trailer", "Offizieller Verano Azul Trailer", "Tráiler oficial de Verano Azul", "Officiële Verano Azul trailer", "Officiell trailer"),
    privacyNote: l("The trailer is hosted on YouTube; loading it sends data to Google.", "Der Trailer liegt bei YouTube; beim Laden gehen Daten an Google.", "El tráiler está en YouTube; al cargarlo se envían datos a Google.", "De trailer staat op YouTube; bij het laden gaan er gegevens naar Google.", "Trailern ligger på YouTube; när den laddas skickas data till Google."),
    loadAction: l("Load trailer", "Trailer laden", "Cargar tráiler", "Trailer laden", "Ladda trailern")
  },
  sections: [
    {
      id: "tv-phenomenon",
      eyebrow: l("The series", "Die Serie", "La serie", "De serie", "Serien"),
      title: l("A summer that all of Spain watched", "Ein Sommer, den ganz Spanien gesehen hat", "Un verano que vio toda España", "Een zomer die heel Spanje zag", "En sommar som hela Spanien såg"),
      paragraphs: [
        l("Verano Azul tells of a group of teenagers spending their summer holidays in Nerja, of the old fisherman Chanquete and the painter Julia. 19 episodes, broadcast between October 1981 and February 1982.", "Verano Azul erzählt von einer Gruppe Jugendlicher, die ihre Sommerferien in Nerja verbringen, vom alten Fischer Chanquete und der Malerin Julia. 19 Folgen, ausgestrahlt zwischen Oktober 1981 und Februar 1982.", "Verano Azul cuenta la historia de un grupo de adolescentes que pasan sus vacaciones de verano en Nerja, del viejo pescador Chanquete y de la pintora Julia. 19 capítulos, emitidos entre octubre de 1981 y febrero de 1982.", "Verano Azul vertelt over een groep jongeren die hun zomervakantie in Nerja doorbrengen, over de oude visser Chanquete en de schilderes Julia. 19 afleveringen, uitgezonden tussen oktober 1981 en februari 1982.", "Verano Azul berättar om en grupp ungdomar som tillbringar sommarlovet i Nerja, om den gamle fiskaren Chanquete och målaren Julia. 19 avsnitt, sända mellan oktober 1981 och februari 1982."),
        l("The series was repeated for decades; generations know the theme tune and the bicycles on the promenade. Anyone who grew up in Spain still connects Nerja with that summer.", "Die Serie wurde über Jahrzehnte wiederholt; Generationen kennen die Titelmelodie und die Fahrräder auf der Promenade. Wer in Spanien aufgewachsen ist, verbindet Nerja bis heute mit diesem Sommer.", "La serie se repuso durante décadas; generaciones conocen la melodía y las bicicletas por el paseo. Quien creció en España sigue asociando Nerja con aquel verano.", "De serie werd decennialang herhaald; generaties kennen de titelmelodie en de fietsen op de promenade. Wie in Spanje opgroeide, verbindt Nerja tot vandaag met die zomer.", "Serien repriserades i årtionden; generationer känner igen signaturmelodin och cyklarna på strandpromenaden. Den som växte upp i Spanien förknippar än i dag Nerja med den sommaren.")
      ]
    },
    {
      id: "why-nerja",
      eyebrow: l("Why Nerja", "Warum Nerja", "Por qué Nerja", "Waarom Nerja", "Varför Nerja"),
      title: l("Why the production filmed here", "Warum die Produktion hier drehte", "Por qué la producción rodó aquí", "Waarom de productie hier filmde", "Varför produktionen filmade här"),
      paragraphs: [
        l("The team was looking for a place where beach, old town and streets lie close together, so that scenes could be linked without long journeys.", "Das Team suchte einen Ort, an dem Strand, Altstadt und Straßen nah beieinanderliegen, so dass sich Szenen ohne lange Wege verbinden ließen.", "El equipo buscaba un lugar donde playa, casco antiguo y calles estuvieran cerca, para poder enlazar escenas sin largos desplazamientos.", "Het team zocht een plek waar strand, oude stad en straten dicht bij elkaar liggen, zodat scènes zonder lange verplaatsingen te verbinden waren.", "Teamet sökte en plats där strand, gamla stan och gator ligger nära varandra, så att scener kunde knytas ihop utan långa förflyttningar."),
        l("Nerja offered exactly that: Burriana, the Balcón and the lanes behind it, all within walking distance. On 21 August 1979 the first take was shot on Burriana beach.", "Nerja bot genau das: Burriana, den Balcón und die Gassen dahinter, alles in Gehweite. Am 21. August 1979 fiel am Strand von Burriana die erste Klappe.", "Nerja ofrecía justo eso: Burriana, el Balcón y las callejuelas de detrás, todo a distancia a pie. El 21 de agosto de 1979 se rodó la primera toma en la playa de Burriana.", "Nerja bood precies dat: Burriana, de Balcón en de steegjes erachter, alles op loopafstand. Op 21 augustus 1979 viel op het strand van Burriana de eerste klap.", "Nerja erbjöd precis det: Burriana, Balcón och gränderna bakom, allt inom gångavstånd. Den 21 augusti 1979 togs den första tagningen på stranden i Burriana.")
      ]
    },
    {
      id: "nerja-in-the-series",
      eyebrow: l("The filming locations", "Die Drehorte", "Las localizaciones", "De filmlocaties", "Inspelningsplatserna"),
      title: l("Burriana, Balcón, Cala Chica and the lanes", "Burriana, Balcón, Cala Chica und die Gassen", "Burriana, Balcón, Cala Chica y las callejuelas", "Burriana, Balcón, Cala Chica en de steegjes", "Burriana, Balcón, Cala Chica och gränderna"),
      paragraphs: [
        l("Burriana beach, the Balcón de Europa, the small cove of Cala Chica, the Cueva de Nerja and the streets of the centre: whoever walks through Nerja today walks through the series.", "Der Strand von Burriana, der Balcón de Europa, die kleine Bucht Cala Chica, die Cueva de Nerja und die Straßen des Zentrums: Wer heute durch Nerja geht, geht durch die Serie.", "La playa de Burriana, el Balcón de Europa, la pequeña Cala Chica, la Cueva de Nerja y las calles del centro: quien pasea hoy por Nerja pasea por la serie.", "Het strand van Burriana, de Balcón de Europa, de kleine baai Cala Chica, de Cueva de Nerja en de straten van het centrum: wie vandaag door Nerja loopt, loopt door de serie.", "Stranden Burriana, Balcón de Europa, den lilla viken Cala Chica, Cueva de Nerja och centrums gator: den som går genom Nerja i dag går genom serien."),
        l("Some scenes were shot further east near Motril and Almuñécar; but the image of Nerja is the one that stayed.", "Ein Teil der Szenen entstand weiter östlich bei Motril und Almuñécar; das Bild von Nerja aber ist das, das geblieben ist.", "Algunas escenas se rodaron más al este, cerca de Motril y Almuñécar; pero la imagen de Nerja es la que ha quedado.", "Een deel van de scènes ontstond verder oostelijk bij Motril en Almuñécar; maar het beeld van Nerja is het beeld dat bleef.", "En del scener spelades in längre österut vid Motril och Almuñécar; men bilden av Nerja är den som blev kvar.")
      ]
    },
    {
      id: "chanquete-la-dorada",
      eyebrow: l("Chanquete and La Dorada", "Chanquete und La Dorada", "Chanquete y La Dorada", "Chanquete en La Dorada", "Chanquete och La Dorada"),
      title: l("The fisherman and his boat", "Der Fischer und sein Boot", "El pescador y su barco", "De visser en zijn boot", "Fiskaren och hans båt"),
      paragraphs: [
        l("Chanquete, the old fisherman who lives on his beached boat La Dorada, is the character everyone remembers. His statue stands today at Playa Calahonda, right below the Balcón.", "Chanquete, der alte Fischer, der auf seinem an Land gezogenen Boot La Dorada wohnt, ist die Figur, an die sich alle erinnern. Seine Statue steht heute an der Playa Calahonda, gleich unter dem Balcón.", "Chanquete, el viejo pescador que vive en su barco varado La Dorada, es el personaje que todos recuerdan. Su estatua está hoy en la playa de Calahonda, justo debajo del Balcón.", "Chanquete, de oude visser die op zijn aan land getrokken boot La Dorada woont, is de figuur die iedereen zich herinnert. Zijn standbeeld staat vandaag aan Playa Calahonda, vlak onder de Balcón.", "Chanquete, den gamle fiskaren som bor på sin uppdragna båt La Dorada, är figuren alla minns. Hans staty står i dag vid Playa Calahonda, alldeles under Balcón."),
        l("La Dorada was a set, built for the series. In Parque Verano Azul there is a replica of the boat today, and visitors queue in front of it for their photo.", "La Dorada war eine Kulisse, für die Serie gebaut. Im Parque Verano Azul steht heute ein Nachbau des Boots, und davor stehen die Besucher für ihr Foto Schlange.", "La Dorada era un decorado, construido para la serie. En el Parque Verano Azul hay hoy una réplica del barco, y los visitantes hacen cola delante para su foto.", "La Dorada was een decor, gebouwd voor de serie. In het Parque Verano Azul staat vandaag een replica van de boot, en bezoekers staan ervoor in de rij voor hun foto.", "La Dorada var en kuliss, byggd för serien. I Parque Verano Azul står i dag en kopia av båten, och framför den köar besökarna för sitt foto.")
      ]
    },
    {
      id: "changed-nerja",
      eyebrow: l("What remained", "Was blieb", "Lo que quedó", "Wat bleef", "Vad som blev kvar"),
      title: l("How the series made the town known", "Wie die Serie den Ort bekannt machte", "Cómo la serie dio a conocer el pueblo", "Hoe de serie de plaats bekend maakte", "Hur serien gjorde orten känd"),
      paragraphs: [
        l("After the broadcast all of Spain knew Nerja, and many came to see the beach from the television. Since then the town has dedicated a park, a promenade and a street to the series.", "Nach der Ausstrahlung kannte ganz Spanien Nerja, und viele kamen, um den Strand aus dem Fernsehen zu sehen. Die Stadt hat der Serie seither einen Park, eine Promenade und eine Straße gewidmet.", "Tras la emisión toda España conocía Nerja, y muchos vinieron a ver la playa de la tele. Desde entonces la ciudad ha dedicado a la serie un parque, un paseo y una calle.", "Na de uitzending kende heel Spanje Nerja, en velen kwamen om het strand uit de televisie te zien. Sindsdien heeft de stad een park, een promenade en een straat aan de serie gewijd.", "Efter sändningen kände hela Spanien till Nerja, och många kom för att se stranden från tv. Sedan dess har staden tillägnat serien en park, en strandpromenad och en gata.")
      ]
    },
    {
      id: "verano-azul-today",
      eyebrow: l("Today", "Heute", "Hoy", "Vandaag", "I dag"),
      title: l("A walk through the series", "Ein Spaziergang durch die Serie", "Un paseo por la serie", "Een wandeling door de serie", "En promenad genom serien"),
      paragraphs: [
        l("In Parque Verano Azul stands La Dorada, at Playa Calahonda the Chanquete statue, the promenade is named after the director Antonio Mercero, a street after Antonio Ferrandis, who played Chanquete. All of it lies between the Balcón and Burriana, on foot in an afternoon.", "Im Parque Verano Azul steht La Dorada, an der Playa Calahonda die Chanquete-Statue, die Promenade heißt nach dem Regisseur Antonio Mercero, eine Straße nach Antonio Ferrandis, der Chanquete spielte. Alles liegt zwischen Balcón und Burriana, zu Fuß an einem Nachmittag.", "En el Parque Verano Azul está La Dorada, en la playa de Calahonda la estatua de Chanquete, el paseo lleva el nombre del director Antonio Mercero, una calle el de Antonio Ferrandis, que interpretó a Chanquete. Todo queda entre el Balcón y Burriana, a pie en una tarde.", "In het Parque Verano Azul staat La Dorada, aan Playa Calahonda het Chanquete-standbeeld, de promenade heet naar regisseur Antonio Mercero, een straat naar Antonio Ferrandis, die Chanquete speelde. Alles ligt tussen Balcón en Burriana, te voet op een middag.", "I Parque Verano Azul står La Dorada, vid Playa Calahonda Chanquete-statyn, strandpromenaden heter efter regissören Antonio Mercero, en gata efter Antonio Ferrandis som spelade Chanquete. Allt ligger mellan Balcón och Burriana, till fots på en eftermiddag."),
        l("Since 2023 there is also an augmented-reality route: open the app, point your phone at the place, and the scene from back then lays itself over the picture of today.", "Seit 2023 gibt es dazu eine Route mit erweiterter Realität: App öffnen, Handy auf den Ort richten, und die Szene von damals legt sich über das Bild von heute.", "Desde 2023 hay además una ruta de realidad aumentada: abrir la app, apuntar con el móvil al lugar, y la escena de entonces se superpone a la imagen de hoy.", "Sinds 2023 is er ook een route met augmented reality: app openen, telefoon op de plek richten, en de scène van toen legt zich over het beeld van nu.", "Sedan 2023 finns dessutom en rutt med förstärkt verklighet: öppna appen, rikta mobilen mot platsen, och scenen från förr lägger sig över dagens bild.")
      ]
    }
  ],
  itinerary: {
    eyebrow: l("The route", "Der Weg", "El recorrido", "De route", "Vägen"),
    title: l("From the beach to the Balcón", "Vom Strand zum Balcón", "De la playa al Balcón", "Van het strand naar de Balcón", "Från stranden till Balcón"),
    intro: l("An order that makes sense on foot.", "Eine Reihenfolge, die zu Fuß Sinn ergibt.", "Un orden que tiene sentido a pie.", "Een volgorde die te voet logisch is.", "En ordning som är rimlig till fots."),
    links: [
      {
        token: "nerja_beaches_authority" as LinkToken,
        label: l("Burriana", "Burriana", "Burriana", "Burriana", "Burriana"),
        text: l("This is where filming began; today beach restaurants and the long sandy beach.", "Hier begann der Dreh; heute Strandlokale und der lange Sandstrand.", "Aquí empezó el rodaje; hoy chiringuitos y la larga playa de arena.", "Hier begon het filmen; vandaag strandtenten en het lange zandstrand.", "Här började inspelningen; i dag strandrestauranger och den långa sandstranden.")
      },
      {
        token: "nerja_balcon_de_europa" as LinkToken,
        label: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa"),
        text: l("The Chanquete statue stands right below at Calahonda.", "Die Chanquete-Statue steht direkt darunter an der Calahonda.", "La estatua de Chanquete está justo debajo, en Calahonda.", "Het Chanquete-standbeeld staat er direct onder aan Calahonda.", "Chanquete-statyn står alldeles nedanför vid Calahonda.")
      },
      {
        token: "nerja_caves" as LinkToken,
        label: l("Caves of Nerja", "Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja"),
        text: l("The cave was a set and is worth a morning of its own.", "Die Höhle war Kulisse und ist einen eigenen Vormittag wert.", "La cueva fue escenario y merece una mañana propia.", "De grot was decor en is een eigen ochtend waard.", "Grottan var kuliss och är värd en egen förmiddag.")
      },
      {
        token: "nerja_experience_hub" as LinkToken,
        label: l("All experiences in Nerja", "Alle Erlebnisse in Nerja", "Todas las experiencias en Nerja", "Alle ervaringen in Nerja", "Alla upplevelser i Nerja"),
        text: l("Beaches, cave, Balcón and evenings.", "Strände, Höhle, Balcón und Abende.", "Playas, cueva, Balcón y noches.", "Stranden, grot, Balcón en avonden.", "Stränder, grotta, Balcón och kvällar.")
      }
    ]
  },
  related: {
    eyebrow: l("Continue reading", "Weiterlesen", "Continuar leyendo", "Verder lezen", "Läs vidare"),
    title: l("On through Nerja", "Weiter in Nerja", "Seguir por Nerja", "Verder in Nerja", "Vidare i Nerja"),
    links: [
      {
        token: "nerja_beaches_authority" as LinkToken,
        label: l("Beaches in Nerja", "Strände in Nerja", "Playas de Nerja", "Stranden van Nerja", "Nerjas stränder"),
        text: l("Burriana, Calahonda and the small coves.", "Burriana, Calahonda und die kleinen Buchten.", "Burriana, Calahonda y las calas pequeñas.", "Burriana, Calahonda en de kleine baaien.", "Burriana, Calahonda och de små vikarna.")
      },
      {
        token: "nerja_balcon_de_europa" as LinkToken,
        label: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa"),
        text: l("The viewpoint above the sea, in the middle of town.", "Der Aussichtspunkt über dem Meer, mitten in der Stadt.", "El mirador sobre el mar, en pleno centro.", "Het uitzichtpunt boven de zee, midden in de stad.", "Utsiktsplatsen över havet, mitt i stan.")
      },
      {
        token: "nerja_caves" as LinkToken,
        label: l("Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja", "Cueva de Nerja"),
        text: l("The cave with the stalactites, a few kilometres east of the centre.", "Die Höhle mit den Tropfsteinen, ein paar Kilometer östlich vom Zentrum.", "La cueva de las estalactitas, a pocos kilómetros al este del centro.", "De grot met de druipstenen, een paar kilometer ten oosten van het centrum.", "Grottan med droppstenarna, några kilometer öster om centrum.")
      }
    ]
  },
  sources: {
    eyebrow: l("Sources", "Quellen", "Fuentes", "Bronnen", "Källor"),
    title: l("Where the details come from", "Woher die Angaben kommen", "De dónde salen los datos", "Waar de gegevens vandaan komen", "Varifrån uppgifterna kommer"),
    intro: l("Dates and locations from RTVE reports and announcements by the town of Nerja.", "Daten und Drehorte aus RTVE-Berichten und Mitteilungen der Stadt Nerja.", "Fechas y localizaciones a partir de reportajes de RTVE y comunicados del Ayuntamiento de Nerja.", "Data en locaties uit RTVE-berichten en mededelingen van de stad Nerja.", "Datum och platser ur RTVE-rapporter och meddelanden från Nerjas kommun."),
    checked: l("As of August 2026", "Stand August 2026", "Actualizado en agosto de 2026", "Stand augustus 2026", "Uppdaterad augusti 2026"),
    links: [
      {
        label: l("RTVE · Verano Azul archive page", "RTVE · Verano Azul-Übersicht", "RTVE · Ficha de Verano Azul", "RTVE · Verano Azul dossier", "RTVE · Verano Azul-översikt"),
        text: l("The series in the RTVE archive.", "Die Serie im RTVE-Archiv.", "La serie en el archivo de RTVE.", "De serie in het RTVE-archief.", "Serien i RTVE:s arkiv."),
        href: officialSources.rtveStory
      },
      {
        label: l("RTVE · How Verano Azul was filmed", "RTVE · Produktionshinweise", "RTVE · Cómo se rodó", "RTVE · Productieproces", "RTVE · Inspelningsupplägg"),
        text: l("How it was filmed.", "Wie gedreht wurde.", "Cómo se rodó.", "Hoe er gefilmd werd.", "Hur det filmades."),
        href: officialSources.rtveProduction
      },
      {
        label: l("Ayuntamiento de Nerja · Director profile", "Ayuntamiento · Mercero-Notiz", "Ayuntamiento de Nerja · Perfil", "Ayuntamiento de Nerja · Profiel", "Ayuntamiento de Nerja · Profil"),
        text: l("On the director Antonio Mercero.", "Zum Regisseur Antonio Mercero.", "Sobre el director Antonio Mercero.", "Over regisseur Antonio Mercero.", "Om regissören Antonio Mercero."),
        href: officialSources.municipality.profile
      },
      {
        label: l("Ayuntamiento de Nerja · AR route launch", "Ayuntamiento · AR-Route", "Ayuntamiento de Nerja · Ruta de RA", "Ayuntamiento de Nerja · AR-route", "Ayuntamiento de Nerja · AR-rutt"),
        text: l("The town’s AR route.", "Die AR-Route der Stadt.", "La ruta de realidad aumentada del ayuntamiento.", "De AR-route van de stad.", "Stadens AR-rutt."),
        href: officialSources.municipality.route
      },
      {
        label: l("Ayuntamiento de Nerja · 40th anniversary", "Ayuntamiento · 40-Jahres-Gedenken", "Ayuntamiento de Nerja · 40 aniversario", "Ayuntamiento de Nerja · 40-jarig", "Ayuntamiento de Nerja · 40-årsjubileum"),
        text: l("40 years since filming began.", "40 Jahre Drehbeginn.", "40 años del inicio del rodaje.", "40 jaar sinds het begin van de opnames.", "40 år sedan inspelningen började."),
        href: officialSources.municipality.anniversary
      },
      {
        label: l("Ayuntamiento · Amphorae", "Ayuntamiento · Amphoren", "Ayuntamiento · Ánforas", "Ayuntamiento · Amforen", "Ayuntamiento · Amforor"),
        text: l("The amphorae from the series in the town hall.", "Die Amphoren aus der Serie im Rathaus.", "Las ánforas de la serie en el ayuntamiento.", "De amforen uit de serie in het stadhuis.", "Amfororna från serien i rådhuset."),
        href: officialSources.municipality.anforas
      }
    ]
  },
  closing: {
    eyebrow: l("And afterwards", "Und danach", "Y después", "En daarna", "Och sedan"),
    title: l("The summer from the television, right outside the door", "Der Sommer aus dem Fernsehen, vor der Haustür", "El verano de la tele, a la puerta de casa", "De zomer uit de televisie, voor de deur", "Sommaren från tv:n, utanför dörren"),
    body: l("AMARA Playa is a few hundred metres from the Balcón, within walking distance of statue, park and beach. You take the walk through the series from your own front door.", "AMARA Playa liegt ein paar Hundert Meter vom Balcón, in Gehweite von Statue, Park und Strand. Den Spaziergang durch die Serie macht ihr von der Haustür aus.", "AMARA Playa está a unos cientos de metros del Balcón, a distancia a pie de la estatua, el parque y la playa. El paseo por la serie lo hacéis desde la puerta de casa.", "AMARA Playa ligt een paar honderd meter van de Balcón, op loopafstand van standbeeld, park en strand. De wandeling door de serie maken jullie vanaf de voordeur.", "AMARA Playa ligger några hundra meter från Balcón, inom gångavstånd från staty, park och strand. Promenaden genom serien gör ni från er egen dörr."),
    propertyLabel: l("View AMARA Playa", "AMARA Playa ansehen", "Ver AMARA Playa", "Bekijk AMARA Playa", "Se AMARA Playa"),
    experienceLabel: l("Nerja experiences", "Nerja-Erlebnisse", "Experiencias en Nerja", "Ervaringen in Nerja", "Nerja-upplevelser")
  },
  footerHighlights: {
    experience: l("Nerja experiences", "Nerja-Erlebnisse", "Experiencias en Nerja", "Ervaringen in Nerja", "Nerja-upplevelser"),
    beaches: l("Nerja beaches", "Nerja Strände", "Playas de Nerja", "Nerja stranden", "Nerja stränder"),
    balance: l("Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa", "Balcón de Europa")
  }
};
