import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { comfortAmenitiesLinkLabel } from './comfortAmenitiesLinkLabel';
export const frigilianaLocationSeo: AmaraAuthoringSeo = {
  version: '2026-07-17-frigiliana-loc-v1.1-pillar',
  pageType: 'A',
  entityKey: 'amara-brand',
  ogImage: '/images/amara-lounis/15-amara-frigiliana.jpg',
  languages: {
    en: {
      title: 'Frigiliana: Where to Stay, Parking & Weather',
      description: 'Choose where to stay in Frigiliana with practical guidance on parking, weather, Nerja access, the old town, and AMARA apartments.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Frigiliana: Unterkunft, Parken & Wetter',
      description: 'Frigiliana-Guide zur Unterkunftswahl mit Parken, Wetter, Nerja, Altstadtwegen und AMARA Boutique-Apartments.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Frigiliana: dónde alojarse, aparcamiento y clima',
      description: 'Elegid dónde alojaros en Frigiliana con claves sobre aparcamiento, clima, Nerja, casco antiguo y apartamentos AMARA.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Frigiliana: overnachten, parkeren & weer',
      description: 'Kies waar je verblijft in Frigiliana met uitleg over parkeren, weer, Nerja, de oude kern en AMARA boutique-appartementen.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Frigiliana: boende, parkering & väder',
      description: 'Välj var du bor i Frigiliana med vägledning om parkering, väder, Nerja, gamla stan och AMARA boutiquelägenheter.',
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
      { token: "frigiliana_parking", label: { en: "Parking", de: "Parken", es: "Aparcamiento", nl: "Parkeren", sv: "Parkering" } },
      {
        token: "arrival_guide",
        label: {
          en: "Arrival",
          de: "Anreise",
          es: "Llegada",
          nl: "Aankomst",
          sv: "Ankomst"
        }
      }
    ]
  },
  hero: {
    eyebrow: { en: "Frigiliana travel guide", de: "Frigiliana Reiseguide", es: "Guía de Frigiliana", nl: "Frigiliana reisgids", sv: "Frigiliana reseguide" },
    imageAlt: {
      en: "Frigiliana hillside homes in afternoon light",
      de: "Häuser am Hang von Frigiliana im Nachmittagslicht",
      es: "Casas en la ladera de Frigiliana a la luz de la tarde",
      nl: "Huizen tegen de heuvel van Frigiliana in het middaglicht",
      sv: "Hus på Frigilianas sluttning i eftermiddagsljus"
    },
    h1: { en: "Frigiliana Guide <br/> Where to Stay", de: "Frigiliana-Guide <br/> Unterkunft & Orientierung", es: "Guía de Frigiliana <br/> Dónde alojarse", nl: "Frigiliana-gids <br/> Waar overnachten", sv: "Frigiliana-guide <br/> Var du bor" },
    body: { en: "Four AMARA apartments sit in Frigiliana's old town. This guide explains the slopes, parking, weather and trip to Nerja before you choose one.", de: "Vier AMARA-Apartments liegen in Frigilianas Altstadt. Dieser Guide erklärt euch Steigungen, Parken, Wetter und den Weg nach Nerja, bevor ihr auswählt.", es: "AMARA tiene cuatro apartamentos en el casco antiguo de Frigiliana. Esta guía explica las cuestas, el aparcamiento, el clima y el trayecto a Nerja antes de elegir.", nl: "AMARA heeft vier appartementen in het oude centrum van Frigiliana. Deze gids legt de hellingen, het parkeren, het weer en de rit naar Nerja uit voordat jullie kiezen.", sv: "AMARA har fyra lägenheter i Frigilianas gamla stad. Här får ni koll på backar, parkering, väder och resan till Nerja innan ni väljer." },
    /** Second hero paragraph — inline editorial link (structure / movement reality) → parking authority */
    introLead: {
      en: {
        before: "Understanding ",
        linkLabel: "its structure and setting",
        after: " is key before choosing an apartment, especially if parking or daily walking matters."
      },
      de: {
        before: "Wer ",
        linkLabel: "Struktur und Lage",
        after: " versteht, wählt die Unterkunft besser — besonders wenn Parken oder tägliche Wege wichtig sind."
      },
      es: {
        before: "Comprender ",
        linkLabel: "su estructura y su entorno",
        after: " es clave antes de elegir apartamento, sobre todo si importan el aparcamiento o los paseos diarios."
      },
      nl: {
        before: "Inzicht in ",
        linkLabel: "de opbouw en de ligging",
        after: " helpt bij het kiezen van een appartement, vooral als parkeren of dagelijks lopen belangrijk is."
      },
      sv: {
        before: "Att förstå ",
        linkLabel: "dess struktur och läge",
        after: " hjälper er att välja rätt lägenhet, särskilt om parkering eller dagliga promenader spelar roll."
      }
    },
    orientationCta: { en: "Where to stay", de: "Wo übernachten", es: "Dónde alojarse", nl: "Waar overnachten", sv: "Var ska man bo" }
  },
  essence: {
    eyebrow: { en: "At a Glance", de: "Auf einen Blick", es: "De un vistazo", nl: "In het kort", sv: "På ett ögonkast" },
    title: { en: "Frigiliana — Key Facts for Staying", de: "Frigiliana — die wichtigsten Fakten zum Übernachten", es: "Frigiliana — datos clave para alojarse", nl: "Frigiliana — kernfeiten voor verblijf", sv: "Frigiliana — viktiga fakta för boende" },
    intro: {
      en: "Frigiliana is beautiful, but choosing it for several nights is a practical decision too: expect a hillside village, limited car access and Nerja's beaches a short drive away.",
      de: "Frigiliana ist wunderschön, doch für mehrere Nächte zählen auch praktische Fragen: Das Dorf liegt am Hang, die Altstadt ist nur eingeschränkt mit dem Auto erreichbar und Nerjas Strände sind eine kurze Fahrt entfernt.",
      es: "Frigiliana es preciosa, pero elegirla para varias noches también exige mirar lo práctico: está en una ladera, el acceso en coche al casco antiguo es limitado y las playas de Nerja quedan a un corto trayecto.",
      nl: "Frigiliana is prachtig, maar voor meerdere nachten tellen ook praktische zaken: het dorp ligt tegen een helling, de oude kern is beperkt bereikbaar met de auto en de stranden van Nerja liggen op korte rijafstand.",
      sv: "Frigiliana är vackert, men för flera nätter behöver ni också väga in det praktiska: byn ligger i en sluttning, biltrafiken i gamla stan är begränsad och Nerjas stränder ligger en kort bilresa bort."
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
        imageSrc: "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/01-frigiliana-pueblo.jpg"
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
        imageSrc: "/images/amara-playa/apartment/chaparril-13.webp"
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
          en: "After the daytime visitors leave, the old-town lanes become noticeably quieter and dinner is served among the white houses.",
          de: "Wenn die Tagesgäste fort sind, werden die Gassen der Altstadt spürbar ruhiger und zwischen den weißen Häusern beginnt der Abend.",
          es: "Cuando se marchan quienes vienen solo de día, las calles del casco antiguo se quedan mucho más tranquilas y empieza la cena entre las casas blancas.",
          nl: "Wanneer de dagjesmensen vertrekken, worden de steegjes in de oude kern merkbaar rustiger en begint de avond tussen de witte huizen.",
          sv: "När dagsbesökarna har åkt blir gränderna i gamla stan märkbart lugnare och kvällen tar vid mellan de vita husen."
        },
        imageSrc: "/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/03-frigiliana-pueblo.jpg"
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
          en: "A good choice if old-town evenings and wide views matter more to you than flat streets and door-to-door car access.",
          de: "Eine gute Wahl, wenn euch Abende in der Altstadt und weite Ausblicke wichtiger sind als flache Wege und eine Zufahrt bis vor die Tür.",
          es: "Una buena opción si valoráis más las noches en el casco antiguo y las vistas que las calles llanas y llegar en coche hasta la puerta.",
          nl: "Een goede keuze als avonden in de oude kern en weids uitzicht belangrijker zijn dan vlakke straten en met de auto tot aan de deur komen.",
          sv: "Ett bra val om kvällar i gamla stan och vid utsikt betyder mer än plana gator och bil hela vägen till dörren."
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
      en: "Weather changes how you use the village",
      de: "Das Wetter bestimmt eure Wege im Dorf",
      es: "El tiempo cambia cómo se recorre el pueblo",
      nl: "Het weer bepaalt hoe jullie het dorp gebruiken",
      sv: "Vädret påverkar hur ni rör er i byn"
    },
    body: {
      en: "The hillside position brings more airflow than the coast often gets. In hot weather, use the cooler morning and evening hours for the steepest walks and leave the middle of the day for shade or the terrace.",
      de: "Durch die Hanglage ist im Dorf oft mehr Luftbewegung spürbar als an der Küste. Bei Hitze legt ihr die steilsten Wege am besten in den Morgen oder Abend und verbringt die Mittagsstunden im Schatten oder auf der Terrasse.",
      es: "Por su posición en la ladera, en el pueblo suele correr más aire que en la costa. Con calor, conviene dejar las cuestas más fuertes para la mañana o la tarde y pasar el mediodía a la sombra o en la terraza.",
      nl: "Door de ligging tegen de helling staat er in het dorp vaak meer lucht dan aan de kust. Plan bij hitte de steilste wandelingen in de ochtend of avond en zoek midden op de dag de schaduw of het terras op.",
      sv: "Läget i sluttningen ger ofta mer luft än nere vid kusten. Under varma dagar passar de brantaste promenaderna bäst på morgonen eller kvällen; mitt på dagen är skugga eller terrass ett bättre val."
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
      en: "Check Frigiliana weather by month",
      de: "Frigiliana-Wetter nach Monat ansehen",
      es: "Ver el tiempo en Frigiliana por meses",
      nl: "Bekijk het weer in Frigiliana per maand",
      sv: "Se vädret i Frigiliana månad för månad"
    }
  },
  comparison: {
    eyebrow: {
      en: "Frigiliana or Nerja",
      de: "Frigiliana oder Nerja",
      es: "Frigiliana o Nerja",
      nl: "Frigiliana of Nerja",
      sv: "Frigiliana eller Nerja"
    },
    title: {
      en: "Coast or Hillside?",
      de: "Küste oder Hanglage?",
      es: "¿Costa o ladera?",
      nl: "Kust of heuvel?",
      sv: "Kust eller höjd?"
    },
    intro: {
      en: "Choose by where you want to spend most evenings. Frigiliana gives you the old town and quiet lanes; Nerja puts beaches, restaurants and flatter walks close to the door.",
      de: "Zwischen Frigiliana und Nerja entscheidet weniger die kurze Entfernung als das gewünschte Gefühl am Abend. Das Bergdorf steht für Ruhe und Altstadtatmosphäre, der Küstenort für Strandnähe und mehr Betrieb vor der Tür.",
      es: "Elegid según dónde queréis pasar la mayoría de las noches. Frigiliana ofrece casco antiguo y calles tranquilas; Nerja deja playas, restaurantes y paseos más llanos cerca de la puerta.",
      nl: "Kies op basis van waar jullie de meeste avonden willen doorbrengen. Frigiliana biedt de oude kern en rustige steegjes; in Nerja liggen stranden, restaurants en vlakkere wandelroutes dichterbij.",
      sv: "Välj efter var ni vill tillbringa de flesta kvällarna. Frigiliana ger er gamla stan och lugna gränder; i Nerja finns stränder, restauranger och flackare promenader nära boendet."
    },
    items: {
      en: [
        {
          kicker: "15m",
          title: "Distance",
          text: "Frigiliana sits only a short drive above Nerja, yet the two places feel fundamentally different as a base for several days."
        },
        {
          kicker: "5°C",
          title: "Hillside weather",
          text: "The hillside setting is often noticeably cooler than the coast, especially in warmer months."
        },
        {
          title: "Movement",
          text: "Frigiliana means slopes and steps; Nerja is generally flatter and easier to cross on foot."
        },
        {
          title: "Evenings",
          text: "Frigiliana becomes quieter after the day visitors leave; Nerja keeps more restaurants and coastal activity close by."
        }
      ],
      de: [
        {
          kicker: "15 Min.",
          title: "Entfernung",
          text: "Frigiliana liegt nur eine kurze Fahrt oberhalb von Nerja, fühlt sich als Urlaubsort aber deutlich anders an."
        },
        {
          kicker: "5 °C",
          title: "Wetter am Hang",
          text: "Am Hang ist es besonders in den warmen Monaten oft spürbar kühler als an der Küste."
        },
        {
          title: "Wege",
          text: "In Frigiliana gehören Steigungen und Stufen dazu; Nerja ist insgesamt flacher und leichter zu Fuß zu durchqueren."
        },
        {
          title: "Abende",
          text: "Frigiliana wird ruhiger, wenn die Tagesgäste fort sind; in Nerja bleiben mehr Restaurants und Küstenleben in direkter Nähe."
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
          text: "Frigiliana implica cuestas y escaleras, mientras que Nerja suele ser más llana y fácil de recorrer a pie."
        },
        {
          title: "Las noches",
          text: "Frigiliana se queda más tranquila cuando se marchan quienes vienen de día; Nerja mantiene más restaurantes y actividad costera cerca."
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
          text: "Frigiliana betekent hellingen en trappen; Nerja is meestal vlakker en makkelijker te voet te verkennen."
        },
        {
          title: "Avonden",
          text: "Frigiliana wordt rustiger zodra de dagjesmensen vertrekken; in Nerja blijven meer restaurants en kustactiviteiten dichtbij."
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
          text: "Frigiliana innebär backar och trappor; Nerja är i allmänhet flackare och lättare att ta sig runt i till fots."
        },
        {
          title: "Kvällar",
          text: "Frigiliana blir lugnare när dagsbesökarna åker; i Nerja finns fler restauranger och mer kustliv nära till hands."
        }
      ]
    },
    cta: {
      en: "Read the full Frigiliana or Nerja comparison",
      de: "Ausführlicher Vergleich: Frigiliana oder Nerja",
      es: "Comparativa completa: Frigiliana o Nerja",
      nl: "Uitgebreide vergelijking: Frigiliana of Nerja",
      sv: "Läs hela jämförelsen: Frigiliana eller Nerja"
    },
    imagePrimary: {
      src: "/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg",
      alt: {
        en: "View of the Nerja coastline",
        de: "Blick auf die Küste von Nerja",
        es: "Vista de la costa de Nerja",
        nl: "Uitzicht op de kust van Nerja",
        sv: "Utsikt över Nerjas kust"
      }
    },
    imageSecondary: {
      src: "/images/amara-frigiliana-pueblo/frigiliana-blue-doors.jpeg",
      alt: {
        en: "Whitewashed houses and blue doors in Frigiliana",
        de: "Weiß getünchte Häuser und blaue Türen in Frigiliana",
        es: "Casas encaladas y puertas azules en Frigiliana",
        nl: "Witgekalkte huizen en blauwe deuren in Frigiliana",
        sv: "Vitkalkade hus och blå dörrar i Frigiliana"
      }
    }
  },
  villageStructure: {
    imageSrc: "/images/amara-frigiliana-pueblo/frigiliana-old-town-steps.jpeg",
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
      en: "Frigiliana climbs up the hillside. Expect steep inclines, narrow lanes and steps on many routes through the old town.",
      de: "Frigiliana zieht sich den Hang hinauf. Rechnet in der Altstadt mit steilen Anstiegen, engen Gassen und vielen Wegen mit Stufen.",
      es: "Frigiliana sube por la ladera. En muchos recorridos por el casco antiguo encontraréis cuestas fuertes, calles estrechas y escaleras.",
      nl: "Frigiliana loopt tegen de helling omhoog. Reken in de oude kern op steile stukken, smalle steegjes en veel routes met trappen.",
      sv: "Frigiliana klättrar uppför sluttningen. I gamla stan får ni räkna med branta backar, smala gränder och trappor på många vägar."
    },
    signal: {
      en: "Steps · Elevation · Narrow ways",
      de: "Stufen · Höhenlage · Enge Gassen",
      es: "Escalones · Desnivel · Calles estrechas",
      nl: "Trappen · Hoogte · Smalle steegjes",
      sv: "Trappor · Höjd · Smala gränder"
    },
    cta: {
      en: "Read about streets, steps and access",
      de: "Mehr über Gassen, Stufen und Zugang",
      es: "Ver calles, escaleras y accesos",
      nl: "Lees over straten, trappen en toegang",
      sv: "Läs om gränder, trappor och tillträde"
    }
  },
  gallery: {
    eyebrow: { en: "Old-town details", de: "Details der Altstadt", es: "Detalles del casco antiguo", nl: "Details van de oude kern", sv: "Detaljer i gamla stan" },
    title: { en: "Doors, lanes and white walls", de: "Türen, Gassen und weiße Mauern", es: "Puertas, calles y muros blancos", nl: "Deuren, steegjes en witte muren", sv: "Dörrar, gränder och vita väggar" },
    items: [
      { src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/04-frigiliana-pueblo.jpg', alt: { en: "Indigo", de: "Indigo", es: "Índigo", nl: "Indigo", sv: "Indigo" }, caption: { en: "Blue doors of Calle Real", de: "Die blauen Türen der Calle Real", es: "Las puertas azules", nl: "De blauwe deuren", sv: "De blå dörrarna" } },
      { src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/07-frigiliana-pueblo.jpg', alt: { en: "Sierra", de: "Sierra", es: "Sierra", nl: "Sierra", sv: "Sierra" }, caption: { en: "Sierra Almijara", de: "Sierra Almijara", es: "Sierra Almijara", nl: "Sierra Almijara", sv: "Sierra Almijara" } }
    ]
  },
  decision: {
    eyebrow: { en: "Where to stay", de: "Wo übernachten", es: "Dónde alojarse", nl: "Waar overnachten", sv: "Var du bor" },
    title: { en: "Is Frigiliana the right base?", de: "Ist Frigiliana die richtige Basis?", es: "¿Frigiliana es la base adecuada?", nl: "Is Frigiliana de juiste uitvalsbasis?", sv: "Är Frigiliana rätt bas?" },
    detail: {
      eyebrow: {
        en: "Choose the exact position",
        de: "Die genaue Lage wählen",
        es: "Elegir la ubicación exacta",
        nl: "Kies de exacte ligging",
        sv: "Välj exakt läge"
      },
      title: {
        en: "Lower, mid-slope or upper village?",
        de: "Unterdorf, mittlere Hanglage oder Oberdorf?",
        es: "¿Zona baja, media ladera o zona alta?",
        nl: "Lager, midden op de helling of hoger in het dorp?",
        sv: "Nedre byn, mitt på sluttningen eller högre upp?"
      },
      text: {
        en: "These are planning levels, not official districts. Compare repeated daily routes, stairs, the final approach, and actual car access before choosing an address.",
        de: "Das sind Planungsebenen, keine offiziellen Viertel. Vergleicht wiederkehrende Alltagswege, Treppen, den letzten Zugang und die tatsächliche Autozufahrt, bevor ihr eine Adresse wählt.",
        es: "Son niveles para planificar, no barrios oficiales. Comparad los trayectos cotidianos, las escaleras, el último acceso y la llegada real en coche antes de elegir una dirección.",
        nl: "Dit zijn planningsniveaus, geen officiële wijken. Vergelijk dagelijkse routes, trappen, het laatste toegangsstuk en de werkelijke bereikbaarheid met de auto voordat jullie een adres kiezen.",
        sv: "Det här är planeringsnivåer, inte officiella stadsdelar. Jämför vardagsvägar, trappor, den sista sträckan och den faktiska bilåtkomsten innan ni väljer adress."
      },
      cta: {
        en: "Compare village levels",
        de: "Höhenlagen vergleichen",
        es: "Comparar los niveles del pueblo",
        nl: "Vergelijk de niveaus in het dorp",
        sv: "Jämför byns nivåer"
      }
    },
    profiles: [
      { title: { en: "Couples", de: "Paare", es: "Parejas", nl: "Koppels", sv: "Par" }, description: { en: "Choose Frigiliana if you want quiet old-town evenings and you are comfortable with hills, steps and a short drive to the beach.", de: "Wählt Frigiliana, wenn ihr ruhige Abende in der Altstadt möchtet und Steigungen, Stufen sowie eine kurze Fahrt zum Strand für euch passen.", es: "Elegid Frigiliana si queréis noches tranquilas en el casco antiguo y os van bien las cuestas, las escaleras y un corto trayecto hasta la playa.", nl: "Kies Frigiliana als jullie rustige avonden in de oude kern willen en hellingen, trappen en een korte rit naar het strand geen bezwaar zijn.", sv: "Välj Frigiliana om ni vill ha lugna kvällar i gamla stan och är bekväma med backar, trappor och en kort bilresa till stranden." }, suitability: { en: "Best fit", de: "Sehr passend", es: "Ideal", nl: "Beste match", sv: "Bäst match" } },
      { title: { en: "Drivers", de: "Mit Auto", es: "Con coche", nl: "Met auto", sv: "Med bil" }, description: { en: "Expect to park nearby rather than at the door and carry your luggage over the final stretch through the old town.", de: "Rechnet damit, in der Nähe statt direkt vor der Tür zu parken und euer Gepäck das letzte Stück durch die Altstadt zu tragen.", es: "Contad con aparcar cerca, no siempre en la puerta, y llevar el equipaje durante el último tramo por el casco antiguo.", nl: "Reken erop dat jullie in de buurt parkeren, niet altijd voor de deur, en de bagage het laatste stuk door de oude kern meenemen.", sv: "Räkna med att parkera i närheten snarare än vid dörren och bära bagaget den sista biten genom gamla stan." }, suitability: { en: "Plan ahead", de: "Planen", es: "Planificar", nl: "Plan vooruit", sv: "Planera" } },
      { title: { en: "Beach-first guests", de: "Strand zuerst", es: "Playa primero", nl: "Strand eerst", sv: "Strand först" }, description: { en: "Nerja may suit better if daily beach access, flat walking, and door-to-door convenience matter most.", de: "Nerja passt besser, wenn täglicher Strandzugang, flache Wege und maximale Bequemlichkeit wichtiger sind.", es: "Nerja puede encajar mejor si priorizáis playa diaria, paseos llanos y máxima comodidad puerta a puerta.", nl: "Nerja past mogelijk beter als dagelijks strand, vlak lopen en direct gemak het belangrijkst zijn.", sv: "Nerja kan passa bättre om daglig strand, flacka promenader och enkel bekvämlighet är viktigast." }, suitability: { en: "Compare", de: "Vergleichen", es: "Comparar", nl: "Vergelijk", sv: "Jämför" } },
      { title: { en: "Limited mobility", de: "Eingeschränkte Mobilität", es: "Movilidad reducida", nl: "Beperkte mobiliteit", sv: "Nedsatt rörlighet" }, description: { en: "Check access carefully. Frigiliana is beautiful but steep, with stairs, narrow lanes, and uneven surfaces.", de: "Zugang genau prüfen. Frigiliana ist wunderschön, aber steil, mit Treppen, engen Gassen und unebenem Boden.", es: "Conviene revisar el acceso con cuidado. Frigiliana es preciosa, pero empinada, con escaleras, calles estrechas y suelo irregular.", nl: "Controleer de toegang goed. Frigiliana is prachtig maar steil, met trappen, smalle straten en ongelijke ondergrond.", sv: "Kontrollera tillgänglighet noggrant. Frigiliana är vackert men brant, med trappor, smala gränder och ojämna ytor." }, suitability: { en: "Check access", de: "Zugang prüfen", es: "Revisar acceso", nl: "Check toegang", sv: "Kontrollera" } }
    ]
  },
  planning: {
    eyebrow: {
      en: "Plan the stay",
      de: "Aufenthalt planen",
      es: "Planificar la estancia",
      nl: "Verblijf plannen",
      sv: "Planera vistelsen"
    },
    title: {
      en: "Useful next steps for Frigiliana",
      de: "Nächste sinnvolle Schritte für Frigiliana",
      es: "Próximos pasos útiles para Frigiliana",
      nl: "Handige volgende stappen voor Frigiliana",
      sv: "Användbara nästa steg för Frigiliana"
    },
    intro: {
      en: "Before booking, compare the apartments, final walking route, parking, monthly weather and access details.",
      de: "Vergleicht vor der Buchung die Apartments, den letzten Fußweg, Parkmöglichkeiten, Monatswetter und Zugang.",
      es: "Antes de reservar, comparad los apartamentos, el último tramo a pie, el aparcamiento, el clima por meses y los accesos.",
      nl: "Vergelijk voor het boeken de appartementen, het laatste stuk lopen, parkeren, het weer per maand en de toegang.",
      sv: "Jämför lägenheterna, sista sträckan till fots, parkering, månadsväder och tillträde innan ni bokar."
    },
    links: {
      gettingHere: {
        label: {
          en: "Getting to Frigiliana",
          de: "Anreise nach Frigiliana",
          es: "Cómo llegar a Frigiliana",
          nl: "Naar Frigiliana reizen",
          sv: "Resa till Frigiliana"
        },
        text: {
          en: "Compare rental car, private transfer, and bus connections via Nerja.",
          de: "Mietwagen, privaten Transfer und Busverbindungen über Nerja vergleichen.",
          es: "Comparar coche de alquiler, transfer privado y autobús vía Nerja.",
          nl: "Vergelijk huurauto, privétransfer en busverbindingen via Nerja.",
          sv: "Jämför hyrbil, privat transfer och bussförbindelser via Nerja."
        }
      },
      apartments: {
        label: { en: "Apartments for couples", de: "Apartments für Paare", es: "Apartamentos para parejas", nl: "Appartementen voor koppels", sv: "Lägenheter för par" },
        text: {
          en: "Compare AMARA stays in Frigiliana and Nerja.",
          de: "AMARA-Unterkünfte in Frigiliana und Nerja vergleichen.",
          es: "Comparar estancias AMARA en Frigiliana y Nerja.",
          nl: "Vergelijk AMARA-verblijven in Frigiliana en Nerja.",
          sv: "Jämför AMARA-vistelser i Frigiliana och Nerja."
        }
      },
      parking: {
        label: { en: "Parking in Frigiliana", de: "Parken in Frigiliana", es: "Aparcamiento en Frigiliana", nl: "Parkeren in Frigiliana", sv: "Parkering i Frigiliana" },
        text: {
          en: "Understand arrival, stairs, and the final walk.",
          de: "Anreise, Stufen und den letzten Weg verstehen.",
          es: "Entender llegada, escaleras y el último tramo a pie.",
          nl: "Begrijp aankomst, trappen en het laatste stuk lopen.",
          sv: "Förstå ankomst, trappor och sista biten till fots."
        }
      },
      market: {
        label: { en: "Thursday market", de: "Donnerstagsmarkt", es: "Mercado de los jueves", nl: "Donderdagmarkt", sv: "Torsdagsmarknad" },
        text: {
          en: "Plan the typical time, stalls, parking, and old-town walk.",
          de: "Typische Uhrzeit, Stände, Parken und Altstadtrundgang planen.",
          es: "Planificar horario habitual, puestos, aparcamiento y paseo por el casco antiguo.",
          nl: "Plan de gebruikelijke tijd, kramen, parkeren en wandeling door de oude kern.",
          sv: "Planera vanlig tid, stånd, parkering och promenad i gamla stan."
        }
      },
      hiking: {
        label: {
          de: "Wandern & Natur rund um Frigiliana"
        },
        text: {
          de: "Panorama-Touren, sanfte Wege, Flusswanderungen und Gipfel in der Sierra Almijara."
        }
      },
      dosTumbas: {
        label: {
          en: "Frigiliana in Netflix's Dos Tumbas",
          de: "Frigiliana in Dos Tumbas",
          es: "Frigiliana en Dos Tumbas",
          nl: "Frigiliana in Dos Tumbas",
          sv: "Frigiliana i Dos Tumbas"
        },
        text: {
          en: "Recognise the streets from the Netflix thriller filmed in the old town.",
          de: "Die Drehorte des Netflix-Thrillers in der Altstadt wiedererkennen.",
          es: "Reconocer las calles del thriller de Netflix rodado en el casco antiguo.",
          nl: "Herken de straten uit de Netflix-thriller die in de oude kern is gefilmd.",
          sv: "Känn igen gatorna från Netflix-thrillern som spelades in i gamla stan."
        }
      },
      weather: {
        label: { en: "Weather by month", de: "Wetter nach Monat", es: "Clima por mes", nl: "Weer per maand", sv: "Väder per månad" },
        text: {
          en: "Plan terraces, walking hours, and season choice.",
          de: "Terrassenzeit, Gehzeiten und Saisonwahl planen.",
          es: "Planificar terrazas, horas de paseo y temporada.",
          nl: "Plan terrassen, wandeltijden en seizoen.",
          sv: "Planera terrasser, promenadtider och säsong."
        }
      },
      arrival: {
        label: { en: "Arrival guide", de: "Anreise-Guide", es: "Guía de llegada", nl: "Aankomstgids", sv: "Ankomstguide" },
        text: {
          en: "See the exact address, walking route and entry instructions.",
          de: "Genaue Adresse, Fußweg und Hinweise zum Eingang ansehen.",
          es: "Ver la dirección exacta, el camino a pie y las instrucciones de entrada.",
          nl: "Bekijk het exacte adres, de looproute en de instructies voor de ingang.",
          sv: "Se exakt adress, gångväg och instruktioner för entrén."
        }
      },
      reviews: {
        label: { en: "Guest reviews", de: "Gästebewertungen", es: "Reseñas de huéspedes", nl: "Gastbeoordelingen", sv: "Gästrecensioner" },
        text: {
          en: "Read what guests mention after staying.",
          de: "Lesen, was Gäste nach dem Aufenthalt erwähnen.",
          es: "Leer qué destacan los huéspedes después de alojarse.",
          nl: "Lees wat gasten noemen na hun verblijf.",
          sv: "Läs vad gäster nämner efter vistelsen."
        }
      },
      amenities: {
        label: comfortAmenitiesLinkLabel,
        text: {
          en: "Check comfort details before booking.",
          de: "Komfortdetails vor der Buchung prüfen.",
          es: "Revisar detalles de confort antes de reservar.",
          nl: "Controleer comfortdetails vóór het boeken.",
          sv: "Kontrollera komfortdetaljer före bokning."
        }
      }
    }
  },
  faq: {
    arrivalTitle: { en: "The Arrival", de: "Die Ankunft", es: "La Llegada", nl: "De Aankomst", sv: "Ankomsten" },
    steps: [
      { num: "01", h: { en: "From Málaga", de: "Ab Málaga", es: "Desde Málaga", nl: "Vanuit Málaga", sv: "Från Málaga" }, t: { en: "Málaga Airport is the usual starting point. Continue by rental car, private transfer or public transport via Nerja.", de: "Der Flughafen Málaga ist der übliche Ausgangspunkt. Weiter geht es per Mietwagen, Privattransfer oder mit öffentlichen Verkehrsmitteln über Nerja.", es: "El aeropuerto de Málaga es el punto de partida habitual. Desde allí podéis seguir en coche de alquiler, transfer privado o transporte público vía Nerja.", nl: "De luchthaven van Málaga is het gebruikelijke vertrekpunt. Reis verder met een huurauto, privétransfer of openbaar vervoer via Nerja.", sv: "Málagas flygplats är den vanligaste utgångspunkten. Fortsätt med hyrbil, privat transfer eller kollektivtrafik via Nerja." } },
      { num: "02", h: { en: "Choose transport", de: "Verkehrsmittel wählen", es: "Elegir transporte", nl: "Kies vervoer", sv: "Välj transport" }, t: { en: "A car helps with beaches and day trips; buses and taxis can work if most of your time stays in the village.", de: "Ein Auto ist für Strände und Ausflüge praktisch; Busse und Taxis funktionieren, wenn ihr überwiegend im Dorf bleibt.", es: "El coche resulta práctico para playas y excursiones; autobuses y taxis pueden bastar si vais a pasar la mayor parte del tiempo en el pueblo.", nl: "Een auto is handig voor stranden en uitstapjes; bussen en taxi's kunnen volstaan als jullie vooral in het dorp blijven.", sv: "Bil är praktiskt för stränder och utflykter; buss och taxi kan fungera om ni främst stannar i byn." } },
      { num: "03", h: { en: "Final walk", de: "Letzter Fußweg", es: "Último tramo a pie", nl: "Laatste stuk lopen", sv: "Sista biten till fots" }, t: { en: "The old town has steep lanes, uneven paving and steps. Check the exact route before arriving with luggage.", de: "In der Altstadt gibt es steile Gassen, unebenes Pflaster und Stufen. Prüft den genauen Weg, bevor ihr mit Gepäck ankommt.", es: "El casco antiguo tiene cuestas, suelo irregular y escaleras. Revisad el camino exacto antes de llegar con equipaje.", nl: "De oude kern heeft steile steegjes, ongelijke bestrating en trappen. Bekijk de exacte route voordat jullie met bagage aankomen.", sv: "Gamla stan har branta gränder, ojämn stenläggning och trappor. Kontrollera den exakta vägen innan ni kommer med bagage." } }
    ],
    faqTitle: { en: "Frigiliana stay FAQ", de: "Frigiliana Aufenthalts-FAQ", es: "FAQ para alojarse en Frigiliana", nl: "Frigiliana verblijfs-FAQ", sv: "Frigiliana boende-FAQ" },
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
        q: {
          en: "Is Frigiliana worth staying in?",
          de: "Lohnt es sich, in Frigiliana zu übernachten?",
          es: "¿Merece la pena alojarse en Frigiliana?",
          nl: "Is Frigiliana de moeite waard om te verblijven?",
          sv: "Är Frigiliana värt att bo i?"
        },
        a: {
          en: "Yes, if you want to stay in the old town after the day visitors leave and do not mind hills, steps or driving to the beach. Choose Nerja instead if flat walks and daily sea access matter more.",
          de: "Ja, wenn ihr nach der Abreise der Tagesgäste in der Altstadt bleiben möchtet und Steigungen, Stufen sowie die Fahrt zum Strand für euch in Ordnung sind. Wählt Nerja, wenn flache Wege und täglicher Strandzugang wichtiger sind.",
          es: "Sí, si queréis quedaros en el casco antiguo cuando se marchan quienes vienen de día y no os importan las cuestas, las escaleras ni conducir hasta la playa. Elegid Nerja si pesan más los paseos llanos y el mar a diario.",
          nl: "Ja, als jullie in de oude kern willen blijven nadat de dagjesmensen vertrekken en hellingen, trappen of een rit naar het strand geen bezwaar zijn. Kies Nerja als vlak lopen en dagelijks naar zee belangrijker zijn.",
          sv: "Ja, om ni vill stanna i gamla stan när dagsbesökarna åker och inte har något emot backar, trappor eller bilresan till stranden. Välj Nerja om flacka promenader och havet varje dag är viktigare."
        }
      },
      {
        q: {
          en: "Do you need a car in Frigiliana?",
          de: "Braucht man in Frigiliana ein Auto?",
          es: "¿Hace falta coche en Frigiliana?",
          nl: "Heb je een auto nodig in Frigiliana?",
          sv: "Behöver man bil i Frigiliana?"
        },
        a: {
          en: "Not for the old town itself. A car is useful for beaches and day trips, while buses and taxis can work if you plan to spend most of your time in the village. In either case, expect to walk the final stretch to many addresses.",
          de: "Für die Altstadt selbst nicht. Für Strände und Ausflüge ist ein Auto praktisch; Busse und Taxis können reichen, wenn ihr die meiste Zeit im Dorf verbringt. In beiden Fällen führt der letzte Abschnitt zu vielen Adressen zu Fuß.",
          es: "Para el casco antiguo, no. El coche es práctico para playas y excursiones; autobuses y taxis pueden bastar si vais a pasar la mayor parte del tiempo en el pueblo. En ambos casos, a muchas direcciones se llega a pie en el último tramo.",
          nl: "Niet voor de oude kern zelf. Een auto is handig voor stranden en uitstapjes; bussen en taxi's kunnen volstaan als jullie vooral in het dorp blijven. Naar veel adressen loopt het laatste stuk sowieso te voet.",
          sv: "Inte för gamla stan i sig. Bil är praktiskt för stränder och utflykter; buss och taxi kan räcka om ni främst stannar i byn. Till många adresser går ni den sista biten oavsett."
        }
      },
      {
        q: {
          en: "Frigiliana or Nerja: which is better for a stay?",
          de: "Frigiliana oder Nerja: Was ist besser zum Übernachten?",
          es: "Frigiliana o Nerja: ¿qué es mejor para alojarse?",
          nl: "Frigiliana of Nerja: wat is beter om te verblijven?",
          sv: "Frigiliana eller Nerja: vad är bäst att bo i?"
        },
        a: {
          en: "Choose Frigiliana for quiet old-town evenings, hillside views and historic lanes. Choose Nerja for daily beach access, flatter walks and more shops and restaurants close by.",
          de: "Wählt Frigiliana für ruhige Abende in der Altstadt, Hangblicke und historische Gassen. Wählt Nerja für täglichen Strandzugang, flachere Wege und mehr Geschäfte und Restaurants in direkter Nähe.",
          es: "Elegid Frigiliana por las noches tranquilas en el casco antiguo, las vistas desde la ladera y las calles históricas. Elegid Nerja por la playa diaria, los paseos más llanos y más tiendas y restaurantes cerca.",
          nl: "Kies Frigiliana voor rustige avonden in de oude kern, uitzicht vanaf de helling en historische steegjes. Kies Nerja voor dagelijks strand, vlakkere wandelingen en meer winkels en restaurants dichtbij.",
          sv: "Välj Frigiliana för lugna kvällar i gamla stan, utsikt från sluttningen och historiska gränder. Välj Nerja för stranden varje dag, flackare promenader och fler butiker och restauranger nära."
        }
      },
      {
        q: {
          en: "Where to stay in Frigiliana as a couple?",
          de: "Wo übernachtet man in Frigiliana als Paar?",
          es: "¿Dónde alojarse en Frigiliana en pareja?",
          nl: "Waar verblijf je als koppel in Frigiliana?",
          sv: "Var bor man som par i Frigiliana?"
        },
        a: {
          en: "AMARA has four apartments in Frigiliana's old town. Compare the exact access, bed size, kitchen and terrace: Farah is designed for shorter stays, while Lounis, Zaid and Maha each have a private terrace.",
          de: "AMARA hat vier Apartments in Frigilianas Altstadt. Vergleicht Zugang, Bettgröße, Küche und Terrasse: Farah ist für kürzere Aufenthalte gedacht; Lounis, Zaid und Maha haben jeweils eine private Terrasse.",
          es: "AMARA tiene cuatro apartamentos en el casco antiguo de Frigiliana. Comparad acceso, tamaño de cama, cocina y terraza: Farah está pensado para estancias más cortas; Lounis, Zaid y Maha tienen terraza privada.",
          nl: "AMARA heeft vier appartementen in de oude kern van Frigiliana. Vergelijk toegang, bedmaat, keuken en terras: Farah is bedoeld voor kortere verblijven; Lounis, Zaid en Maha hebben elk een privéterras.",
          sv: "AMARA har fyra lägenheter i Frigilianas gamla stad. Jämför tillträde, sängstorlek, kök och terrass: Farah är avsedd för kortare vistelser; Lounis, Zaid och Maha har var sin privat terrass."
        }
      },
      {
        q: {
          en: "Is parking difficult in Frigiliana?",
          de: "Ist Parken in Frigiliana schwierig?",
          es: "¿Es difícil aparcar en Frigiliana?",
          nl: "Is parkeren in Frigiliana moeilijk?",
          sv: "Är parkering svårt i Frigiliana?"
        },
        a: {
          en: "Parking is not impossible, but it is different from a coastal resort. Expect signed or peripheral parking, narrow streets, and some walking. In high season, allow extra time and avoid assuming door-to-door car access.",
          de: "Parken ist nicht unmöglich, aber anders als in einem Küstenort. Rechnet mit ausgewiesenen oder randnahen Parkplätzen, engen Straßen und etwas Fußweg. Plant in der Hochsaison zusätzliche Zeit ein.",
          es: "Aparcar no es imposible, pero es distinto a un destino costero. Contad con aparcamientos señalizados o periféricos, calles estrechas y algo de camino a pie. En temporada alta conviene dejar margen.",
          nl: "Parkeren is niet onmogelijk, maar anders dan in een kustplaats. Reken op aangegeven of randparkeren, smalle straten en wat lopen. In het hoogseizoen is extra tijd verstandig.",
          sv: "Parkering är inte omöjligt, men annorlunda än vid kusten. Räkna med skyltade eller yttre parkeringsytor, smala gator och en bit till fots. Under högsäsong bör ni ha extra tid."
        }
      }
    ]
  },
  closing: {
    title: {
      en: "Compare the four Frigiliana apartments",
      de: "Die vier Frigiliana-Apartments vergleichen",
      es: "Comparar los cuatro apartamentos de Frigiliana",
      nl: "Vergelijk de vier appartementen in Frigiliana",
      sv: "Jämför de fyra lägenheterna i Frigiliana"
    },
    lead: {
      en: "See which apartments have a terrace, full kitchen or easier access, then check your dates.",
      de: "Seht, welche Apartments eine Terrasse, eine vollständige Küche oder einen einfacheren Zugang haben, und prüft dann eure Reisedaten.",
      es: "Ved qué apartamentos tienen terraza, cocina completa o un acceso más sencillo y consultad después vuestras fechas.",
      nl: "Bekijk welke appartementen een terras, volledige keuken of makkelijkere toegang hebben en controleer daarna jullie data.",
      sv: "Se vilka lägenheter som har terrass, komplett kök eller enklare tillträde och kontrollera sedan era datum."
    },
    availabilityCta: {
      en: "Check Availability",
      de: "Verfügbarkeit prüfen",
      es: "Consultar disponibilidad",
      nl: "Beschikbaarheid bekijken",
      sv: "Kontrollera tillgänglighet"
    }
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
