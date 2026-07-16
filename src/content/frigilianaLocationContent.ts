import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
export const frigilianaLocationSeo: AmaraAuthoringSeo = {
  version: '2026-03-27-frigiliana-loc-v1.0-A',
  pageType: 'A',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Explore Frigiliana | The White Village of Andalusia',
      description: 'Discover Frigiliana, the most beautiful white village in Spain. Travel guide, local tips, and premium stays by AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Entdecke Frigiliana | Das weiße Dorf Andalusiens',
      description: 'Erlebe Frigiliana, das schönste weiße Dorf Spaniens. Reiseführer, Insider-Tipps und exklusive Unterkünfte von AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Explora Frigiliana | El pueblo blanco de Andalucía',
      description: 'Descubre Frigiliana, el pueblo más bonito de España. Guía de viaje, consejos locales y estancias premium de AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Ontdek Frigiliana | Het witte dorp van Andalusië',
      description: 'Ontdek Frigiliana, het mooiste witte dorp van Spanje. Reisgids, lokale tips en luxe verblijven van AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Utforska Frigiliana | Andalusiens vita by',
      description: 'Upptäck Frigiliana, Spaniens vackraste vita by. Reseguide, lokala tips och exklusivt boende från AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const frigilianaLocationCopy = {
  nav: {
    brand: { en: "Frigiliana", de: "Frigiliana", es: "Frigiliana", nl: "Frigiliana", sv: "Frigiliana" },
    links: [
      { token: "location_frigiliana", label: { en: "Frigiliana", de: "Frigiliana", es: "Frigiliana", nl: "Frigiliana", sv: "Frigiliana" } },
      { token: "location_nerja", label: { en: "Nerja", de: "Nerja", es: "Nerja", nl: "Nerja", sv: "Nerja" } },
      {
        token: "explore_hub",
        label: {
          en: "Experiences",
          de: "Erlebnisse",
          es: "Experiencias",
          nl: "Ervaringen",
          sv: "Upplevelser"
        }
      }
    ]
  },
  hero: {
    eyebrow: { en: "The Axarquía Jewel", de: "Das Juwel der Axarquía", es: "La joya de la Axarquía", nl: "Het juweel van Axarquía", sv: "Axarquías juvel" },
    h1: { en: "The Soul of <br/> White Villages", de: "Die Seele der <br/> weißen Dörfer", es: "El alma de los <br/> pueblos blancos", nl: "De ziel van de <br/> witte dorpen", sv: "De vita byarnas <br/> själ" },
    body: { en: "Nestled in the folds of the Almijara mountains, Frigiliana exists as a timeless dialogue between Moorish geometry and Mediterranean light.", de: "In den Falten des Almijara-Gebirges gelegen, ist Frigiliana ein zeitloser Dialog zwischen maurischer Geometrie und mediterranem Licht.", es: "Enclavada en los pliegues de la sierra Almijara, Frigiliana es un diálogo atemporal entre la geometría morisca y la luz mediterránea.", nl: "Gelegen in de plooien van het Almijara-gebergte, is Frigiliana een tijdloze dialoog tussen Moorse geometrie en mediterraan licht.", sv: "Inbäddat i Almijara-bergens veck är Frigiliana en zeitlös dialog mellan maurisk geometri och medelhavsljus." },
    /** Second hero paragraph — inline editorial link (structure / movement reality) → parking authority */
    introLead: {
      en: {
        before: "Understanding ",
        linkLabel: "its structure and setting",
        after: " is key to deciding whether it fits your stay."
      },
      de: {
        before: "Wer ",
        linkLabel: "Struktur und Lage",
        after: " versteht, entscheidet besser, ob der Ort zum Aufenthalt passt."
      },
      es: {
        before: "Comprender ",
        linkLabel: "su estructura y su entorno",
        after: " es clave para decidir si encaja en su estancia."
      },
      nl: {
        before: "Inzicht in ",
        linkLabel: "de opbouw en de ligging",
        after: " helpt u te bepalen of het bij uw verblijf past."
      },
      sv: {
        before: "Att förstå ",
        linkLabel: "dess struktur och läge",
        after: " är avgörande för att avgöra om det passar er vistelse."
      }
    },
    ctaMain: { en: "Explore The Barrio", de: "Das Viertel erkunden", es: "Explorar el Barrio", nl: "Verken de Barrio", sv: "Utforska kvarteret" },
    ctaAlt: { en: "The Guide", de: "Zum Guide", es: "La Guía", nl: "De Gids", sv: "Guiden" }
  },
  essence: {
    eyebrow: { en: "At a Glance", de: "Auf einen Blick", es: "De un vistazo", nl: "In het kort", sv: "På ett ögonkast" },
    title: { en: "Frigiliana — Key Facts", de: "Frigiliana — die wichtigsten Fakten", es: "Frigiliana — datos clave", nl: "Frigiliana — kernfeiten", sv: "Frigiliana — viktiga fakta" },
    intro: {
      en: "Frigiliana is one of Andalusia's most beautiful white villages — but it is not a typical easy-access base.",
      de: "Frigiliana zählt zu den schönsten weißen Dörfern Andalusiens — ist aber kein typischer, leicht erreichbarer Ausgangspunkt.",
      es: "Frigiliana es uno de los pueblos blancos más bellos de Andalucía, pero no es una base de acceso fácil por excelencia.",
      nl: "Frigiliana hoort bij de mooiste witte dorpen van Andalusië — maar is geen typisch gemakkelijk bereikbare uitvalsbasis.",
      sv: "Frigiliana räknas bland de vackraste vita byarna i Andalusien — men är inte en typisk lättillgänglig bas."
    },
    items: [
      {
        kicker: { en: "Setting", de: "Lage", es: "Entorno", nl: "Ligging", sv: "Läge" },
        headline: { en: "Hilltop White Village", de: "Weißes Dorf auf dem Hügel", es: "Pueblo blanco en la colina", nl: "Wit dorp op de heuvel", sv: "Vit by på höjden" },
        text: {
          en: "Perched above the coast in the Axarquía hills, Frigiliana offers panoramic views but comes with elevation and steep terrain.",
          de: "Hoch über der Küste in den Hügeln der Axarquía gelegen, bietet Frigiliana weite Ausblicke — dazu Höhenlage und steiles Gelände.",
          es: "En lo alto de la Axarquía, sobre la costa, Frigiliana ofrece vistas panorámicas, pero también desnivel y terreno empinado.",
          nl: "Hoog boven de kust in de heuvels van de Axarquía: Frigiliana biedt ver uitzicht, maar ook hoogteverschil en steile hellingen.",
          sv: "Högt över kusten i Axarquías kullar ger Frigiliana vidsträckt utsikt — men också höjdskillnader och brant terräng."
        },
        imageSrc: "/images/essence-1.jpg",
        token: "explore_hub",
        linkLabel: { en: "Explore", de: "Erkunden", es: "Explorar", nl: "Ontdek", sv: "Utforska" }
      },
      {
        kicker: { en: "Location", de: "Standort", es: "Ubicación", nl: "Locatie", sv: "Placering" },
        headline: { en: "Close to Nerja, Not Coastal", de: "Nahe Nerja, nicht am Meer", es: "Cerca de Nerja, sin playa en el pueblo", nl: "Dicht bij Nerja, niet aan zee", sv: "Nära Nerja, inte vid kusten" },
        text: {
          en: "The beaches of Nerja are just a short drive away, but Frigiliana itself is a mountain village, not a seaside town.",
          de: "Die Strände von Nerja sind nur eine kurze Fahrt entfernt — Frigiliana selbst ist jedoch ein Bergdorf, kein Küstenort.",
          es: "Las playas de Nerja están a un corto trayecto en coche, pero Frigiliana en sí es un pueblo de montaña, no un pueblo costero.",
          nl: "De stranden van Nerja liggen dichtbij met de auto, maar Frigiliana zelf is een bergdorp, geen badplaats.",
          sv: "Nerjas stränder ligger en kort bilresa bort, men Frigiliana är en bergsby — inte en kustort."
        },
        imageSrc: "/images/essence-2.jpg"
      },
      {
        kicker: { en: "Movement", de: "Fortbewegung", es: "Desplazamiento", nl: "Verplaatsen", sv: "Rörelse" },
        headline: { en: "Slopes, Steps & Narrow Lanes", de: "Steigungen, Stufen & enge Gassen", es: "Cuestas, escaleras y calles estrechas", nl: "Hellingen, trappen en smalle steegjes", sv: "Lutningar, trappor och smala gränder" },
        text: {
          en: "The old town is defined by steep paths and stairs. Walking is beautiful but requires effort and mobility.",
          de: "Die Altstadt lebt von steilen Wegen und Treppen. Zu Fuß ist es wunderschön — aber anstrengend und körperlich anspruchsvoll.",
          es: "El casco antiguo son cuestas y escaleras. Caminar es precioso, pero exige esfuerzo y buena movilidad.",
          nl: "De oude stad bestaat uit steile paden en trappen. Lopen is prachtig, maar vraagt inspanning en mobiliteit.",
          sv: "Gamla stan kantas av branta vägar och trappor. Att gå är vackert men kräver ork och rörlighet."
        }
      },
      {
        kicker: { en: "Atmosphere", de: "Atmosphäre", es: "Ambiente", nl: "Sfeer", sv: "Stämning" },
        headline: { en: "Calm, Scenic, Unhurried", de: "Ruhig, landschaftlich, entspannt", es: "Tranquilo, pintoresco, sin prisas", nl: "Rustig, schilderachtig, ontspannen", sv: "Lugnt, vackert, lugnt tempo" },
        text: {
          en: "Frigiliana is known for its quiet rhythm, visual beauty and slower pace of life.",
          de: "Frigiliana steht für ruhigen Rhythmus, visuelle Schönheit und ein langsameres Lebenstempo.",
          es: "Frigiliana destaca por su ritmo tranquilo, su belleza visual y un ritmo de vida más pausado.",
          nl: "Frigiliana staat bekend om rust, schoonheid en een langzamer levenstempo.",
          sv: "Frigiliana är känt för lugnt tempo, vacker miljö och ett långsammare vardagsliv."
        },
        imageSrc: "/images/essence-3.jpg"
      },
      {
        kicker: { en: "Practicality", de: "Alltag", es: "Practicidad", nl: "Praktisch", sv: "Praktiskt" },
        headline: { en: "Less About Convenience", de: "Weniger reine Bequemlichkeit", es: "Menos comodidad absoluta", nl: "Minder puur gemak", sv: "Mindre ren bekvämlighet" },
        text: {
          en: "Shops, restaurants and parking are available, but not always immediately accessible from every location.",
          de: "Geschäfte, Restaurants und Parkplätze gibt es — aber nicht von jedem Punkt aus gleich griffbereit.",
          es: "Hay comercios, restaurantes y aparcamiento, pero no siempre al alcance inmediato desde cualquier punto.",
          nl: "Winkels, restaurants en parkeren zijn er — maar niet overal direct voor de deur.",
          sv: "Butiker, restauranger och parkering finns — men inte alltid nära var du än befinner dig."
        }
      },
      {
        kicker: { en: "Best For", de: "Ideal für", es: "Ideal para", nl: "Het beste voor", sv: "Bäst för" },
        headline: { en: "Couples & Relaxed Stays", de: "Paare & entspannte Aufenthalte", es: "Parejas y estancias relajadas", nl: "Koppels en ontspannen verblijven", sv: "Par och avslappnade vistelser" },
        text: {
          en: "Ideal for guests who value atmosphere, views and character over absolute ease of movement.",
          de: "Ideal für Gäste, die Atmosphäre, Ausblick und Charakter über absolute Bewegungsleichtigkeit stellen.",
          es: "Ideal para quienes priorizan ambiente, vistas y encanto frente a la máxima comodidad al moverse.",
          nl: "Ideaal voor wie sfeer, uitzicht en karakter belangrijker vindt dan maximale loopgemak.",
          sv: "Idealiskt för gäster som värdesätter stämning, utsikt och karaktär framför maximal rörelsekomfort."
        }
      }
    ]
  },
  climate: {
    eyebrowCurrent: {
      en: "Current Conditions",
      de: "Aktuelle Bedingungen",
      es: "Condiciones actuales",
      nl: "Huidige omstandigheden",
      sv: "Aktuella förhållanden"
    },
    heroTemp: { en: "24°", de: "24°", es: "24°", nl: "24°", sv: "24°" },
    heroTagline: {
      en: "More breathable than the coast",
      de: "Luftiger als an der Küste",
      es: "Más respirable que la costa",
      nl: "Luchtiger dan aan de kust",
      sv: "Lättare att andas än vid kusten"
    },
    headline: {
      en: "A Climate That Shapes Your Stay",
      de: "Ein Klima, das Ihren Aufenthalt prägt",
      es: "Un clima que moldea su estancia",
      nl: "Een klimaat dat uw verblijf bepaalt",
      sv: "Ett klimat som formar er vistelse"
    },
    body: {
      en: "Frigiliana sits between sea and mountains, and that changes how the day feels. While the coast can turn intense in summer, the village often stays more breathable thanks to elevation and airflow. It is not only about temperature — it is about when you move, rest, and enjoy the village.",
      de: "Frigiliana liegt zwischen Meer und Bergen — und das verändert, wie sich der Tag anfühlt. Während die Küste im Sommer oft drückend wirken kann, bleibt das Dorf dank Höhenlage und Luftstrom meist spürbar angenehmer. Es geht nicht nur um die Temperatur — es geht darum, wann Sie sich bewegen, ruhen und das Dorf genießen.",
      es: "Frigiliana está entre mar y montaña, y eso cambia cómo se siente el día. En verano la costa puede volverse intensa, pero el pueblo suele seguir más respirable gracias a la altitud y el paso del aire. No se trata solo de la temperatura: se trata de cuándo moverse, descansar y disfrutar del pueblo.",
      nl: "Frigiliana ligt tussen zee en bergen, en dat verandert hoe de dag aanvoelt. In de zomer kan de kust zwaar aanvoelen, maar het dorp blijft dankzij hoogte en luchtstroming vaak prettiger om in te leven. Het gaat niet alleen om temperatuur — het gaat om wanneer u zich beweegt, uitrust en van het dorp geniet.",
      sv: "Frigiliana ligger mellan hav och berg, och det förändrar hur dagen känns. Medan kusten på sommaren kan bli tryckande, är byn ofta behagligare tack vare höjd och luftflöde. Det handlar inte bara om temperatur — det handlar om när du rör dig, vilar och njuter av byn."
    },
    metricHumidity: {
      en: "Humidity · 58%",
      de: "Feuchte · 58 %",
      es: "Humedad · 58 %",
      nl: "Vochtigheid · 58%",
      sv: "Luftfuktighet · 58 %"
    },
    metricWind: {
      en: "Wind · NW 12 km/h",
      de: "Wind · NW 12 km/h",
      es: "Viento · NO 12 km/h",
      nl: "Wind · NW 12 km/h",
      sv: "Vind · NV 12 km/h"
    },
    metricUv: {
      en: "UV · Moderate",
      de: "UV · Mittel",
      es: "UV · Moderado",
      nl: "UV · Matig",
      sv: "UV · Måttlig"
    },
    metricSunset: {
      en: "Sunset · 21:12",
      de: "Sonnenuntergang · 21:12",
      es: "Atardecer · 21:12",
      nl: "Zonsondergang · 21:12",
      sv: "Solnedgång · 21:12"
    },
    factSunDays: {
      en: "300+ days of sun",
      de: "300+ Sonnentage",
      es: "Más de 300 días de sol",
      nl: "300+ zonnige dagen",
      sv: "300+ soldagar"
    },
    factCoolerVsCoast: {
      en: "5°C cooler than the coast",
      de: "5 °C kühler als an der Küste",
      es: "5 °C menos que en la costa",
      nl: "5 °C koeler dan aan de kust",
      sv: "5 °C svalare än vid kusten"
    },
    cta: {
      en: "See how climate shapes your stay",
      de: "Sehen Sie, wie das Klima Ihren Aufenthalt prägt",
      es: "Vea cómo el clima moldea su estancia",
      nl: "Ontdek hoe het klimaat uw verblijf bepaalt",
      sv: "Se hur klimatet formar er vistelse"
    }
  },
  comparison: {
    eyebrow: {
      en: "The Dual Experience",
      de: "Zwei Aufenthaltswelten",
      es: "Dos formas de estancia",
      nl: "Twee verblijfswerelden",
      sv: "Två sätt att bo"
    },
    title: {
      en: "Coast or Hillside?",
      de: "Küste oder Hanglage?",
      es: "¿Costa o ladera?",
      nl: "Kust of heuvel?",
      sv: "Kust eller höjd?"
    },
    intro: {
      en: "Frigiliana and Nerja are close in distance, but they create very different stay experiences. The better fit depends on whether you value village character or coastal convenience more.",
      de: "Frigiliana und Nerja liegen nah beieinander, bieten aber sehr unterschiedliche Aufenthaltsgefühle. Welche Basis besser passt, hängt davon ab, ob Dorfcharakter oder Küstenkomfort wichtiger ist.",
      es: "Frigiliana y Nerja están cerca, pero ofrecen experiencias de estancia muy distintas. La mejor opción depende de si valoras más el carácter del pueblo o la comodidad de la costa.",
      nl: "Frigiliana en Nerja liggen dicht bij elkaar, maar voelen als verblijf heel verschillend aan. Welke plek beter past, hangt af van de vraag of je meer waarde hecht aan dorpskarakter of kustgemak.",
      sv: "Frigiliana och Nerja ligger nära varandra, men ger två tydligt olika vistelser. Vad som passar bäst beror på om du värdesätter bykaraktär eller kustnära bekvämlighet mest."
    },
    items: {
      en: [
        {
          kicker: "15m",
          title: "The Proximity",
          text: "Frigiliana sits only a short drive above Nerja, yet the two places feel fundamentally different as a base for several days."
        },
        {
          kicker: "5°C",
          title: "The Microclimate",
          text: "The hillside setting is often noticeably cooler than the coast, especially in warmer months."
        },
        {
          title: "Movement",
          text: "Frigiliana means slopes, steps and a more vertical daily rhythm, while Nerja is generally flatter and easier to navigate."
        },
        {
          title: "Stay Experience",
          text: "Frigiliana suits calm, scenic stays with character, while Nerja offers beach access, variety and greater day-to-day convenience."
        }
      ],
      de: [
        {
          kicker: "15 Min.",
          title: "Die Nähe",
          text: "Frigiliana liegt nur eine kurze Fahrt oberhalb von Nerja, fühlt sich als Basis für mehrere Tage aber grundlegend anders an."
        },
        {
          kicker: "5°C",
          title: "Das Mikroklima",
          text: "Die Hanglage ist vor allem in den wärmeren Monaten oft spürbar kühler als die Küste."
        },
        {
          title: "Bewegung",
          text: "Frigiliana bedeutet Steigungen, Treppen und einen vertikaleren Tagesrhythmus, während Nerja meist flacher und leichter zugänglich ist."
        },
        {
          title: "Aufenthaltsgefühl",
          text: "Frigiliana passt zu ruhigen, malerischen Aufenthalten mit Charakter, während Nerja Strandnähe, Vielfalt und mehr Alltagskomfort bietet."
        }
      ],
      es: [
        {
          kicker: "15 min",
          title: "La cercanía",
          text: "Frigiliana está a pocos minutos en coche sobre Nerja, pero como base para varios días se siente claramente distinta."
        },
        {
          kicker: "5°C",
          title: "El microclima",
          text: "La ladera suele ser notablemente más fresca que la costa, especialmente en los meses cálidos."
        },
        {
          title: "Movimiento",
          text: "Frigiliana implica cuestas, escaleras y un ritmo diario más vertical, mientras que Nerja suele ser más llana y fácil de recorrer."
        },
        {
          title: "Experiencia de estancia",
          text: "Frigiliana encaja mejor con estancias tranquilas y con carácter; Nerja ofrece playa, variedad y mayor comodidad diaria."
        }
      ],
      nl: [
        {
          kicker: "15 min",
          title: "De nabijheid",
          text: "Frigiliana ligt maar een korte rit boven Nerja, maar voelt als uitvalsbasis voor meerdere dagen heel anders aan."
        },
        {
          kicker: "5°C",
          title: "Het microklimaat",
          text: "De heuvels zijn vaak merkbaar koeler dan de kust, vooral in warmere maanden."
        },
        {
          title: "Beweging",
          text: "Frigiliana betekent hellingen, trappen en een verticaler dagritme, terwijl Nerja meestal vlakker en makkelijker te verkennen is."
        },
        {
          title: "Verblijfsgevoel",
          text: "Frigiliana past beter bij rustige, karaktervolle verblijven; Nerja biedt strandtoegang, afwisseling en meer dagelijks gemak."
        }
      ],
      sv: [
        {
          kicker: "15 min",
          title: "Närheten",
          text: "Frigiliana ligger bara en kort bilresa ovanför Nerja, men känns som vistelsebas tydligt annorlunda över flera dagar."
        },
        {
          kicker: "5°C",
          title: "Mikroklimatet",
          text: "Läget på höjden är ofta märkbart svalare än kusten, särskilt under varmare månader."
        },
        {
          title: "Rörelse",
          text: "Frigiliana innebär backar, trappor och en mer vertikal vardagsrytm, medan Nerja i allmänhet är flackare och lättare att ta sig runt i."
        },
        {
          title: "Vistelsekänsla",
          text: "Frigiliana passar lugna, natursköna vistelser med karaktär, medan Nerja ger strandnärhet, variation och större vardagsbekvämlighet."
        }
      ]
    },
    imagePrimary: {
      src: "/images/nerja-coast.jpg",
      alt: {
        en: "View of the Nerja coastline",
        de: "Blick auf die Küste von Nerja",
        es: "Vista de la costa de Nerja",
        nl: "Uitzicht op de kust van Nerja",
        sv: "Utsikt över Nerjas kust"
      }
    },
    imageSecondary: {
      src: "/images/frigiliana-hillside.jpg",
      alt: {
        en: "Hillside view above Frigiliana",
        de: "Hanglage oberhalb von Frigiliana",
        es: "Vista en ladera sobre Frigiliana",
        nl: "Heuvelzicht boven Frigiliana",
        sv: "Vy över sluttningen ovanför Frigiliana"
      }
    }
  },
  villageStructure: {
    imageSrc: "/images/frigiliana-steps.jpg",
    imageAlt: {
      en: "Steep steps in Frigiliana old town",
      de: "Steile Stufen in der Altstadt von Frigiliana",
      es: "Escaleras empinadas en el casco antiguo de Frigiliana",
      nl: "Steile trappen in het oude centrum van Frigiliana",
      sv: "Branta trappor i gamla stan i Frigiliana"
    },
    eyebrow: {
      en: "Village structure",
      de: "Dorfstruktur",
      es: "Estructura del pueblo",
      nl: "Dorpsstructuur",
      sv: "Bystruktur"
    },
    headline: {
      en: "A Village of Steps",
      de: "Ein Dorf voller Stufen",
      es: "Un pueblo de escaleras",
      nl: "Een dorp van trappen",
      sv: "En by av trappor"
    },
    supporting: {
      en: "Frigiliana is carved into the mountainside. Expect steep inclines, narrow alleys, and rewarding views along the way.",
      de: "Frigiliana liegt am Berghang, in die Landschaft eingebettet. Rechnen Sie mit steilen Steigungen, engen Gassen und Ausblicken, die sich unterwegs lohnen.",
      es: "Frigiliana está labrada en la ladera. Espere cuestas pronunciadas, callejuelas estrechas y vistas que compensan el esfuerzo.",
      nl: "Frigiliana ligt tegen de bergwand. Reken op steile hellingen, smalle steegjes en onderweg uitzichten die de moeite lonen.",
      sv: "Frigiliana är uthuggen i bergssluttningen. Räkna med branta lutningar, smala gränder och utsikter som belönar vägen."
    },
    signal: {
      en: "Steps · Elevation · Narrow ways",
      de: "Stufen · Höhenlage · Enge Gassen",
      es: "Escalones · Desnivel · Calles estrechas",
      nl: "Trappen · Hoogte · Smalle steegjes",
      sv: "Trappor · Höjd · Smala gränder"
    },
    cta: {
      en: "Understand how the village layout shapes your stay",
      de: "Verstehen Sie, wie die Dorfanlage Ihren Aufenthalt prägt",
      es: "Comprenda cómo la disposición del pueblo marca su estancia",
      nl: "Begrijp hoe de dorpsindeling uw verblijf beïnvloedt",
      sv: "Förstå hur byns utformning formar er vistelse"
    }
  },
  gallery: {
    eyebrow: { en: "Architectural Study", de: "Architekturstudie", es: "Estudio Arquitectónico", nl: "Architecturale Studie", sv: "Arkitektonisk Studie" },
    title: { en: "Mudejar Geometry", de: "Maurische Geometrie", es: "Geometría Mudéjar", nl: "Moorse Geometrie", sv: "Maurisk Geometri" },
    items: [
      { src: '/images/gallery-1.jpg', alt: { en: "Indigo", de: "Indigo", es: "Índigo", nl: "Indigo", sv: "Indigo" }, caption: { en: "Blue doors of Calle Real", de: "Die blauen Türen der Calle Real", es: "Las puertas azules", nl: "De blauwe deuren", sv: "De blå dörrarna" } },
      { src: '/images/gallery-2.jpg', alt: { en: "Sierra", de: "Sierra", es: "Sierra", nl: "Sierra", sv: "Sierra" }, caption: { en: "Sierra Almijara", de: "Sierra Almijara", es: "Sierra Almijara", nl: "Sierra Almijara", sv: "Sierra Almijara" } }
    ]
  },
  decision: {
    eyebrow: { en: "Stay Decision", de: "Entscheidungshilfe", es: "Decisión", nl: "Beslissing", sv: "Beslut" },
    title: { en: "Is Frigiliana for you?", de: "Ist Frigiliana richtig für Sie?", es: "¿Para usted?", nl: "Iets voor jou?", sv: "För dig?" },
    profiles: [
      { title: { en: "Couples", de: "Paare", es: "Parejas", nl: "Koppels", sv: "Par" }, description: { en: "Architectural silence.", de: "Architektonische Stille.", es: "Silencio.", nl: "Stilte.", sv: "Tystnad." }, suitability: { en: "Highest", de: "Exzellent", es: "Máxima", nl: "Hoogste", sv: "Högsta" } }
    ]
  },
  faq: {
    arrivalTitle: { en: "The Arrival", de: "Die Ankunft", es: "La Llegada", nl: "De Aankomst", sv: "Ankomsten" },
    steps: [
      { num: "01", h: { en: "Gateways", de: "Anreise", es: "Puertas", nl: "Poorten", sv: "Portar" }, t: { en: "Malaga Airport (AGP) is the primary gateway, located 50 minutes to the West via the A-7.", de: "Der Flughafen Malaga (AGP) ist das Haupttor, 50 Minuten westlich über die A-7.", es: "El aeropuerto de Málaga (AGP) es la puerta principal, a 50 minutos.", nl: "Luchthaven Malaga (AGP) is de belangrijkste poort.", sv: "Malaga flygplats (AGP) är huvudporten." } },
      { num: "02", h: { en: "Transportation", de: "Transport", es: "Transporte", nl: "Vervoer", sv: "Transport" }, t: { en: "While public buses run frequently, a private vehicle is essential for exploring the Axarquía.", de: "Busse fahren oft, aber ein Auto ist für die Axarquía unerlässlich.", es: "Los autobuses funcionan, aber un coche es esencial.", nl: "Bussen rijden, maar een auto is essentieel.", sv: "Bussar går, men bil är nödvändigt." } },
      { num: "03", h: { en: "The Ascent", de: "Der Aufstieg", es: "El Ascenso", nl: "De Klim", sv: "Klättringen" }, t: { en: "Frigiliana is divided into Barrio Nuevo and Alto. Prepare for steep inclines.", de: "Frigiliana ist geteilt. Stellen Sie sich auf steile Gassen ein.", es: "Frigiliana está dividida. Prepárate para las cuestas.", nl: "Frigiliana is verdeeld. Bereid je voor op hellingen.", sv: "Frigiliana är uppdelad. Förbered dig på backar." } }
    ],
    faqTitle: { en: "Dispatches & FAQ", de: "Depeschen & FAQ", es: "Despachos y FAQ", nl: "Berichten & FAQ", sv: "Meddelanden & FAQ" },
    arrivalDetailCta: {
      en: "Detailed Arrival Guide",
      de: "Ausführlicher Anreise-Guide",
      es: "Guía detallada de llegada",
      nl: "Uitgebreide aankomstgids",
      sv: "Detaljerad ankomstguide"
    },
    allFaqsCta: {
      en: "All our Frigiliana FAQs",
      de: "Alle Frigiliana-FAQs",
      es: "Todas nuestras FAQ de Frigiliana",
      nl: "Al onze Frigiliana-FAQ's",
      sv: "Alla våra Frigiliana-FAQ"
    },
    items: [
      {
        q: { en: "When is the best time to visit?", de: "Beste Reisezeit?", es: "¿Mejor época?", nl: "Beste reistijd?", sv: "Bästa tiden?" },
        a: {
          en: "Late spring and early autumn usually bring pleasant temperatures and softer light for walking the lanes. Mid-summer can be warm, but the hillside setting often feels more breathable than the coast.",
          de: "Spätfrühling und Frühherbst bringen meist angenehme Temperaturen und weiches Licht für Spaziergänge. Hochsommer kann warm sein — die Hanglage wirkt oft luftiger als an der Küste.",
          es: "Primavera tardía y principios de otoño suelen ofrecer temperaturas agradables y luz suave para recorrer callejuelas. En pleno verano puede hacer calor, pero la ladera suele sentirse más respirable que la costa.",
          nl: "Laat voorjaar en vroeg najaar leveren meest aangename temperaturen en zacht licht om door de steegjes te wandelen. Midden in de zomer kan het warm zijn, maar de helling voelt vaak luchtiger aan dan aan zee.",
          sv: "Sen vår och tidig höst ger ofta behagliga temperaturer och mjukare ljus för promenader i gränderna. Högsommar kan bli varmt, men läget på höjden känns ofta lättare än vid kusten."
        }
      },
      {
        q: {
          en: "Is the old town realistic with limited mobility?",
          de: "Ist die Altstadt mit eingeschränkter Mobilität realistisch?",
          es: "¿Es viable el casco antiguo con movilidad reducida?",
          nl: "Is de oude stad haalbaar met beperkte mobiliteit?",
          sv: "Fungerar gamla stan med nedsatt rörlighet?"
        },
        a: {
          en: "Frigiliana’s historic core is steep, with steps and uneven surfaces. Guests who rely on level access or short walks may find it demanding. If mobility is a concern, check access details for your specific accommodation before booking.",
          de: "Der historische Kern ist steil, mit Stufen und unebenem Untergrund. Wer ebene Wege oder kurze Strecken braucht, kann es als anstrengend empfinden. Bei Mobilitätseinschränkungen vor der Buchung die Zugänglichkeit Ihrer Unterkunft klären.",
          es: "El casco histórico es empinado, con escalones y superficies irregulares. Quien necesite accesos planos o trayectos cortos puede encontrarlo exigente. Si la movilidad es un factor, revise el acceso concreto de su alojamiento antes de reservar.",
          nl: "Het historische centrum is steil, met trappen en oneffen ondergrond. Wie vlakke paden of korte afstanden nodig heeft, kan het zwaar vinden. Bij beperkte mobiliteit: controleer vóór boeking de toegang van uw accommodatie.",
          sv: "Gamla stadskärnan är brant, med trappor och ojämnt underlag. Den som behöver plana sträckor eller korta promenader kan tycka att det är krävande. Vid rörelsenedsättning: kontrollera tillgängligheten för just ert boende innan bokning."
        }
      },
      {
        q: {
          en: "Where can I park near the historic centre?",
          de: "Wo kann ich nahe am historischen Zentrum parken?",
          es: "¿Dónde aparcar cerca del casco histórico?",
          nl: "Waar kan ik parkeren bij het oude centrum?",
          sv: "Var kan jag parkera nära gamla stan?"
        },
        a: {
          en: "Parking in the tight lanes is limited. Many guests use peripheral or signed parking areas and walk the last stretch. Allow a few extra minutes for the final approach, especially in high season.",
          de: "Parken in den engen Gassen ist begrenzt. Viele Gäste nutzen Randparkplätze oder ausgewiesene Flächen und gehen den letzten Abschnitt zu Fuß. Rechnen Sie mit etwas Zeit für die letzte Etappe — vor allem in der Hochsaison.",
          es: "El aparcamiento en calles estrechas es limitado. Muchos huéspedes usan aparcamientos periféricos o señalizados y caminan el tramo final. Reserve unos minutos extra en la aproximación, sobre todo en temporada alta.",
          nl: "Parkeren in de smalle straten is beperkt. Veel gasten gebruiken randzones of aangegeven plekken en lopen het laatste stuk. Reken op extra minuten voor de laatste aanloop, vooral in het hoogseizoen.",
          sv: "Parkering i de smala gränderna är begränsad. Många gäster använder ytterligare eller skyltade ytor och går sista biten. Räkna med några extra minuter nära centrum, särskilt under högsäsong."
        }
      },
      {
        q: {
          en: "Is a day trip to Nerja realistic from Frigiliana?",
          de: "Ist ein Tagesausflug nach Nerja von Frigiliana aus realistisch?",
          es: "¿Es viable un día en Nerja desde Frigiliana?",
          nl: "Is een dagtrip naar Nerja vanuit Frigiliana haalbaar?",
          sv: "Går det att göra en dagsutflykt till Nerja från Frigiliana?"
        },
        a: {
          en: "Yes. The drive is short, so many guests combine hill-village calm with time on the coast. Plan around parking in Nerja at busy times and leave flexibility for the return uphill.",
          de: "Ja. Die Fahrt ist kurz — viele kombinieren Ruhe im Bergdorf mit Zeit an der Küste. In Nerja zur Stoßzeit mit Parken rechnen und für die Rückfahrt den Anstieg einplanen.",
          es: "Sí. El trayecto es corto; muchos combinan la calma del pueblo de montaña con horas en la costa. Tenga en cuenta el aparcamiento en Nerja en horas punta y margen para la vuelta cuesta arriba.",
          nl: "Ja. De rit is kort; veel gasten combineren rust in het bergdorp met tijd aan zee. Houd rekening met parkeren in Nerja op drukke momenten en met de terugrit omhoog.",
          sv: "Ja. Bilresan är kort; många kombinerar lugn i bergsbyn med tid vid kusten. Planera för parkering i Nerja vid rusning och lite marginal för hemresan uppför."
        }
      }
    ]
  },
  footer: {
    brand: { en: "Frigiliana Editorial", de: "Frigiliana Editorial", es: "Editorial", nl: "Redactie", sv: "Redaktion" },
    rights: { en: "All rights reserved.", de: "Alle Rechte vorbehalten.", es: "Reservados", nl: "Voorbehouden", sv: "Förbehållna" },
    nav: [
      { token: 'journal', label: { en: "Journal", de: "Journal", es: "Diario", nl: "Journal", sv: "Journal" } },
      { token: 'contact', label: { en: "Contact", de: "Kontakt", es: "Contacto", nl: "Contact", sv: "Kontakt" } },
      { token: 'archive', label: { en: "Archive", de: "Archiv", es: "Archivo", nl: "Archief", sv: "Arkiv" } },
      { token: 'legal_notice', label: { en: "Privacy", de: "Datenschutz", es: "Privacidad", nl: "Privacy", sv: "Integritet" } }
    ]
  }
};


