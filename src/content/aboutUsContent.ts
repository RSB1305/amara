import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import { trustLabels } from './trustLabels';

type LocalizedText = Record<AmaraLanguage, string>;

interface AboutUsSection {
  title?: LocalizedText;
  subtitle?: LocalizedText;
  lead?: LocalizedText;
  note?: LocalizedText;
  paragraphs?: LocalizedText[];
  items?: {
    title: LocalizedText;
    copy: LocalizedText;
  }[];
  locations?: {
    name: string;
    copy: LocalizedText;
  }[];
  stats?: {
    label: LocalizedText;
    value: LocalizedText;
  }[];
  teamItems?: {
    title: LocalizedText;
    copy: LocalizedText;
  }[];
  listColumns?: {
    label: LocalizedText;
    items: LocalizedText[];
  }[];
}

interface AboutUsContent {
  seo: AmaraAuthoringSeo;
  navigation: {
    brandLabel: LocalizedText;
    links: {
      token: string;
      label: LocalizedText;
    }[];
    ctaLabel: LocalizedText;
  };
  footerHighlights: {
    token: string;
    label: LocalizedText;
  }[];
  hero: {
    subtitle: LocalizedText;
    titleHtml: LocalizedText;
    lead: LocalizedText;
    supportText: LocalizedText;
    ctaLinks: {
      token: string;
      label: LocalizedText;
    }[];
  };
  philosophy: AboutUsSection;
  quote: LocalizedText;
  principles: AboutUsSection;
  quality: AboutUsSection & {
    cards: {
      title: LocalizedText;
      subline?: LocalizedText;
      copy: LocalizedText;
    }[];
  };
  locations: AboutUsSection;
  host: AboutUsSection & {
    imageAlt: LocalizedText;
    role: LocalizedText;
  };
  sustainability: AboutUsSection;
  closingCta: AboutUsSection & {
    links: {
      token: string;
      label: LocalizedText;
    }[];
  };
}

export const aboutUsContent: AboutUsContent = {
  seo: {
    version: '2026-03-23-amara-about-us',
    pageType: 'C',
    entityKey: 'amara-brand',
    ogImage: '/images/robert-amara-host.jpg',
    languages: {
      en: {
        title: 'About AMARA: Hosting Standards & Quality',
        description: 'Meet Robert Sebastian Böhmer, host at AMARA, and discover the standards behind six stays in Frigiliana, Nerja, and Tarifa.',
        robots: 'index, follow',
        canonical: 'auto'
      },
      de: {
        title: 'Über AMARA: Gastgeberstandard & Qualität',
        description: 'Lernt Robert Sebastian Böhmer, Gastgeber bei AMARA, und die Standards hinter sechs Unterkünften in Frigiliana, Nerja und Tarifa kennen.',
        robots: 'index, follow',
        canonical: 'auto'
      },
      es: {
        title: 'Sobre AMARA: anfitrión, calidad y filosofía',
        description: 'Conoce a Robert Sebastian Böhmer, anfitrión de AMARA, y los estándares de seis alojamientos en Frigiliana, Nerja y Tarifa.',
        robots: 'index, follow',
        canonical: 'auto'
      },
      nl: {
        title: 'Over AMARA: hoststandaard & kwaliteit',
        description: 'Maak kennis met Robert Sebastian Böhmer, host bij AMARA, en de standaarden achter zes verblijven in Frigiliana, Nerja en Tarifa.',
        robots: 'index, follow',
        canonical: 'auto'
      },
      sv: {
        title: 'Om AMARA: värdskap, kvalitet & filosofi',
        description: 'Lär känna Robert Sebastian Böhmer, värd på AMARA, och standarderna bakom sex boenden i Frigiliana, Nerja och Tarifa.',
        robots: 'index, follow',
        canonical: 'auto'
      }
    }
  },
  navigation: {
    brandLabel: {
      en: 'Guest Guide',
      de: 'Gästeguide',
      es: 'Guía huésped',
      nl: 'Gastgids',
      sv: 'Gästguide'
    },
    links: [
      {
        token: 'about',
        label: trustLabels.about
      },
      {
        token: 'reviews_hub',
        label: trustLabels.reviews_hub
      },
      {
        token: 'direct_booking_benefits',
        label: trustLabels.direct_booking_benefits
      }
    ],
    ctaLabel: trustLabels.book
  },
  footerHighlights: [
    {
      token: 'amenities',
      label: trustLabels.amenities
    },
    {
      token: 'faq_general',
      label: trustLabels.faq_general
    },
    {
      token: 'instagram',
      label: { en: 'Instagram', de: 'Instagram', es: 'Instagram', nl: 'Instagram', sv: 'Instagram' }
    }
  ],
  hero: {
    subtitle: { en: 'Six stays. Direct responsibility.', de: 'Sechs Unterkünfte. Klare Verantwortung.', es: 'Seis alojamientos. Responsabilidad directa.', nl: 'Zes verblijven. Duidelijke verantwoordelijkheid.', sv: 'Sex boenden. Tydligt ansvar.' },
    titleHtml: {
      en: 'The people behind AMARA.',
      de: 'Die Menschen hinter AMARA.',
      es: 'Las personas detrás de AMARA.',
      nl: 'De mensen achter AMARA.',
      sv: 'Människorna bakom AMARA.'
    },
    lead: {
      en: 'AMARA is a small, owner-led group of holiday stays. Robert remains directly involved in how each one is prepared, maintained and improved.',
      de: 'AMARA ist eine kleine, inhabergeführte Gruppe von Ferienunterkünften. Robert ist direkt daran beteiligt, wie jede einzelne vorbereitet, gepflegt und weiterentwickelt wird.',
      es: 'AMARA es un pequeño grupo de alojamientos gestionado por su propietario. Robert sigue implicado directamente en la preparación, el mantenimiento y las mejoras de cada uno.',
      nl: 'AMARA is een kleine groep vakantieverblijven onder leiding van de eigenaar. Robert blijft direct betrokken bij de voorbereiding, het onderhoud en de verbetering van elk verblijf.',
      sv: 'AMARA är en liten, ägarledd grupp semesterboenden. Robert är fortsatt direkt delaktig i hur varje boende förbereds, underhålls och förbättras.'
    },
    supportText: {
      en: 'You get clear descriptions before booking, a properly prepared home and a contact who knows the property.',
      de: 'Vor der Buchung bekommt ihr klare Beschreibungen, bei der Ankunft eine sorgfältig vorbereitete Unterkunft und bei Fragen einen Kontakt, der sie kennt.',
      es: 'Antes de reservar encontráis descripciones claras; al llegar, un alojamiento bien preparado; y, si surge una duda, un contacto que conoce la propiedad.',
      nl: 'Voor het boeken krijgen jullie duidelijke informatie, bij aankomst een goed voorbereid verblijf en bij vragen een contactpersoon die de plek kent.',
      sv: 'Före bokningen får ni tydliga beskrivningar, vid ankomsten ett ordentligt förberett boende och vid frågor en kontakt som känner huset.'
    },
    ctaLinks: [
      {
        token: 'reviews_hub',
        label: trustLabels.reviews_hub
      },
      {
        token: 'direct_booking_benefits',
        label: trustLabels.direct_booking_benefits
      }
    ]
  },
  philosophy: {
    title: { en: 'What guests can expect from us', de: 'Was ihr von uns erwarten könnt', es: 'Qué podéis esperar de nosotros', nl: 'Wat jullie van ons kunnen verwachten', sv: 'Vad ni kan förvänta er av oss' },
    lead: {
      en: 'Everything at AMARA starts with one question:',
      de: 'Bei AMARA beginnt alles mit einer einfachen Frage:',
      es: 'En AMARA todo empieza con una pregunta sencilla:',
      nl: 'Bij AMARA begint alles met één eenvoudige vraag:',
      sv: 'På AMARA börjar allt med en enkel fråga:'
    },
    paragraphs: [
      {
        en: 'What makes a stay genuinely better for the guest?',
        de: 'Was macht einen Aufenthalt für Gäste wirklich besser?',
        es: '¿Qué hace que una estancia sea realmente mejor para quien la vive?',
        nl: 'Wat maakt een verblijf écht beter voor de gast?',
        sv: 'Vad gör en vistelse genuint bättre för gästen?'
      },
      {
        en: 'We believe good hospitality should give you something increasingly valuable: time and peace of mind.',
        de: 'Wir glauben, dass gute Gastfreundschaft vor allem zwei Dinge schenken sollte: Zeit und das gute Gefühl, dass alles stimmt.',
        es: 'Creemos que la buena hospitalidad debería regalar algo cada vez más valioso: tiempo y tranquilidad.',
        nl: 'Wij geloven dat goede gastvrijheid vooral twee dingen moet geven: tijd en het geruststellende gevoel dat alles klopt.',
        sv: 'Vi tror att bra värdskap framför allt ska ge något som blir allt mer värdefullt: tid och sinnesro.'
      },
      {
        en: 'A stay should remove friction rather than create it. Things should work. Information should be clear. The space should feel comfortable, calm and thoughtfully prepared — without demanding attention for itself.',
        de: 'Ein Aufenthalt sollte euch nicht beschäftigen. Dinge sollen funktionieren, Informationen klar sein und die Unterkunft sich ruhig, komfortabel und selbstverständlich anfühlen – ohne ständig Aufmerksamkeit einzufordern.',
        es: 'Una estancia no debería dar trabajo. Las cosas deben funcionar, la información debe ser clara y el alojamiento sentirse cómodo, sereno y bien preparado, sin reclamar atención constantemente.',
        nl: 'Een verblijf zou geen extra werk moeten opleveren. Dingen moeten gewoon werken, informatie moet duidelijk zijn en de ruimte moet comfortabel, rustig en goed voorbereid aanvoelen, zonder voortdurend om aandacht te vragen.',
        sv: 'En vistelse ska inte skapa mer att tänka på. Saker ska fungera, information ska vara tydlig och boendet ska kännas bekvämt, lugnt och väl förberett utan att hela tiden kräva uppmärksamhet.'
      },
      {
        en: 'That belief shapes the way we choose, prepare and continually improve every AMARA stay. We focus on the things that still matter after the photographs have done their job: how well you sleep, how naturally the space works, whether the details make sense and whether you can simply arrive and begin enjoying your time.',
        de: 'Dieser Gedanke prägt, wie wir unsere Unterkünfte auswählen, vorbereiten und weiterentwickeln. Uns interessieren besonders die Dinge, die noch wichtig sind, wenn die Fotos längst ihren Zweck erfüllt haben: wie gut ihr schlaft, wie selbstverständlich sich die Räume nutzen lassen, ob Details wirklich sinnvoll sind und ob ihr einfach ankommen und eure Zeit genießen könnt.',
        es: 'Esa idea guía cómo elegimos, preparamos y mejoramos cada alojamiento AMARA. Nos importan especialmente las cosas que siguen contando cuando las fotos ya han cumplido su función: cómo dormís, lo fácil que resulta vivir el espacio, si los detalles tienen sentido y si podéis simplemente llegar y empezar a disfrutar de vuestro tiempo.',
        nl: 'Die gedachte bepaalt hoe we elk AMARA-verblijf kiezen, voorbereiden en verder verbeteren. We letten vooral op wat nog telt wanneer de foto’s hun werk al hebben gedaan: hoe goed jullie slapen, hoe vanzelfsprekend de ruimte werkt, of details echt iets toevoegen en of jullie gewoon kunnen aankomen en van jullie tijd kunnen genieten.',
        sv: 'Den tanken styr hur vi väljer, förbereder och utvecklar varje AMARA-boende. Vi fokuserar särskilt på det som fortfarande spelar roll när bilderna redan har gjort sitt jobb: hur bra ni sover, hur naturligt rummen fungerar, om detaljerna faktiskt hjälper och om ni helt enkelt kan komma fram och börja njuta av er tid.'
      }
    ],
    subtitle: { en: 'AMARA means love.', de: 'AMARA bedeutet Liebe.', es: 'AMARA significa amor.', nl: 'AMARA betekent liefde.', sv: 'AMARA betyder kärlek.' },
    items: [
      {
        title: { en: '', de: '', es: '', nl: '', sv: '' },
        copy: {
          en: 'For us, that means care for the details that genuinely improve a stay — quietly, consistently and with purpose.',
          de: 'Für uns heißt das: Sorgfalt bei den Details, die einen Aufenthalt tatsächlich besser machen – unaufdringlich, konsequent und mit einem klaren Sinn.',
          es: 'Para nosotros, eso significa cuidar los detalles que de verdad mejoran una estancia: con discreción, constancia y sentido.',
          nl: 'Voor ons betekent dat aandacht voor de details die een verblijf werkelijk beter maken — rustig, consequent en met een duidelijke bedoeling.',
          sv: 'För oss betyder det omsorg om detaljerna som faktiskt gör vistelsen bättre – diskret, konsekvent och med mening.'
        }
      },
      {
        title: { en: '', de: '', es: '', nl: '', sv: '' },
        copy: {
          en: '',
          de: '',
          es: '',
          nl: '',
          sv: ''
        }
      },
      {
        title: { en: '', de: '', es: '', nl: '', sv: '' },
        copy: {
          en: '',
          de: '',
          es: '',
          nl: '',
          sv: ''
        }
      }
    ]
  },
  quote: {
    en: 'Everything was exactly as described, even better when we arrived.',
    de: 'Alles war genau wie beschrieben, bei der Ankunft sogar noch besser.',
    es: 'Todo era exactamente como se describía, incluso mejor al llegar.',
    nl: 'Alles was precies zoals beschreven, en bij aankomst zelfs nog beter.',
    sv: 'Allt var precis som beskrivet, och ännu bättre när vi kom fram.'
  },
  principles: {
    title: { en: 'What good hospitality means to us', de: 'Was gute Gastfreundschaft für uns bedeutet', es: 'Lo que significa para nosotros una buena hospitalidad', nl: 'Wat goede gastvrijheid voor ons betekent', sv: 'Vad bra värdskap betyder för oss' },
    note: {
      en: 'Four principles guide how we turn our purpose into the experience of a real stay.',
      de: 'Vier Grundsätze bestimmen, wie aus unserem Anspruch ein wirklich guter Aufenthalt wird.',
      es: 'Cuatro principios guían la forma en que llevamos esta idea a cada estancia.',
      nl: 'Vier uitgangspunten bepalen hoe we die gedachte in ieder verblijf tot leven brengen.',
      sv: 'Fyra principer styr hur vi gör den tanken till en verklig vistelse.'
    },
    items: [
      {
        title: { en: 'Prepared for real stays', de: 'Für echte Aufenthalte gemacht', es: 'Pensado para estancias reales', nl: 'Gemaakt voor echte verblijven', sv: 'Skapat för riktiga vistelser' },
        copy: {
          en: 'A place should work beautifully in everyday use, not only in photographs. Comfort, practicality and ease come before decoration for its own sake.',
          de: 'Eine Unterkunft muss sich im Alltag genauso gut bewähren, wie sie auf Bildern aussieht. Komfort, Funktion und Einfachheit sind uns wichtiger als Dekoration um ihrer selbst willen.',
          es: 'Un alojamiento debe funcionar tan bien en el día a día como se ve en las fotos. La comodidad, la utilidad y la facilidad están por encima de la decoración por sí misma.',
          nl: 'Een verblijf moet in het dagelijks gebruik net zo goed werken als het eruitziet op foto’s. Comfort, gebruiksgemak en eenvoud gaan voor decoratie om de decoratie.',
          sv: 'Ett boende ska fungera lika bra i vardagen som det ser ut på bilder. Komfort, funktion och enkelhet är viktigare än dekoration för dekorationens egen skull.'
        }
      },
      {
        title: { en: 'Consistency over promises', de: 'Verlässlichkeit statt großer Versprechen', es: 'Coherencia antes que promesas', nl: 'Betrouwbaarheid boven beloften', sv: 'Pålitlighet framför löften' },
        copy: {
          en: 'Trust is built when reality matches expectation. What you see should be what you find — every season, every stay.',
          de: 'Vertrauen entsteht, wenn Erwartung und Wirklichkeit zusammenpassen. Was ihr seht, sollt ihr auch vorfinden – unabhängig von Saison oder Aufenthalt.',
          es: 'La confianza nace cuando la realidad coincide con las expectativas. Lo que veis es lo que debéis encontrar, en cualquier temporada y en cada estancia.',
          nl: 'Vertrouwen ontstaat wanneer verwachting en werkelijkheid overeenkomen. Wat jullie zien, moeten jullie ook aantreffen — ieder seizoen en bij ieder verblijf.',
          sv: 'Förtroende byggs när verkligheten motsvarar förväntningarna. Det ni ser ska också vara det ni möter — varje säsong och vid varje vistelse.'
        }
      },
      {
        title: { en: 'Calm by design', de: 'Ruhe als Teil des Designs', es: 'Diseñado para la calma', nl: 'Rust als onderdeel van het ontwerp', sv: 'Lugn som en del av designen' },
        copy: {
          en: 'A stay should create space, not noise. Design at AMARA is there to support rest, comfort and a sense of ease — not to compete for attention.',
          de: 'Eine Unterkunft sollte Raum geben, nicht neue Reize schaffen. Gestaltung soll bei AMARA Erholung, Komfort und Leichtigkeit unterstützen – nicht um Aufmerksamkeit konkurrieren.',
          es: 'Un alojamiento debería dar espacio, no añadir ruido. En AMARA, el diseño está al servicio del descanso, la comodidad y la sensación de facilidad, no de llamar la atención.',
          nl: 'Een verblijf moet ruimte geven, geen nieuwe prikkels toevoegen. Design is bij AMARA bedoeld om rust, comfort en gemak te ondersteunen, niet om de aandacht op zichzelf te vestigen.',
          sv: 'Ett boende ska ge utrymme, inte skapa mer brus. På AMARA ska designen stödja vila, komfort och enkelhet, inte konkurrera om uppmärksamheten.'
        }
      },
      {
        title: { en: 'Direct responsibility', de: 'Klare Verantwortung', es: 'Responsabilidad directa', nl: 'Directe verantwoordelijkheid', sv: 'Tydligt ansvar' },
        copy: {
          en: 'Behind every AMARA stay are people who know the property and take responsibility for it. We are present when needed and in the background when we are not.',
          de: 'Hinter jeder AMARA-Unterkunft stehen Menschen, die sie kennen und Verantwortung für sie übernehmen. Wenn ihr uns braucht, sind wir da. Wenn nicht, halten wir uns im Hintergrund.',
          es: 'Detrás de cada alojamiento AMARA hay personas que lo conocen y se responsabilizan de él. Estamos cuando hace falta y permanecemos en segundo plano cuando no.',
          nl: 'Achter ieder AMARA-verblijf staan mensen die de plek kennen en er verantwoordelijkheid voor nemen. We zijn er wanneer dat nodig is en blijven op de achtergrond wanneer dat niet zo is.',
          sv: 'Bakom varje AMARA-boende finns människor som känner platsen och tar ansvar för den. Vi finns där när det behövs och håller oss i bakgrunden när det inte gör det.'
        }
      },
      {
        title: { en: '', de: '', es: '', nl: '', sv: '' },
        copy: {
          en: '',
          de: '',
          es: '',
          nl: '',
          sv: ''
        }
      }
    ]
  },
  quality: {
    title: { en: 'The details that shape a stay', de: 'Die Details, die einen Aufenthalt ausmachen', es: 'Los detalles que definen una estancia', nl: 'De details die bepalen hoe een verblijf voelt', sv: 'Detaljerna som formar en vistelse' },
    cards: [
      {
        title: { en: 'Deep sleep', de: 'Gut schlafen', es: 'Dormir bien', nl: 'Goed slapen', sv: 'Sov gott' },
        copy: { en: 'Rest is fundamental. We choose good mattresses, quality bed linen and sleeping environments designed around comfort and calm. A beautiful space is worth little if you do not sleep well in it.', de: 'Erholung ist keine Nebensache. Deshalb achten wir auf gute Matratzen, hochwertige Bettwäsche und eine Umgebung, in der Ruhe und Komfort im Mittelpunkt stehen. Eine schöne Unterkunft ist wenig wert, wenn man darin nicht gut schläft.', es: 'Descansar es fundamental. Elegimos buenos colchones, ropa de cama de calidad y espacios pensados para el confort y la calma. Un alojamiento bonito sirve de poco si no se duerme bien.', nl: 'Goed uitrusten is essentieel. Daarom kiezen we voor goede matrassen, kwalitatief beddengoed en een slaapomgeving waarin comfort en rust centraal staan. Een mooie plek is weinig waard als je er niet goed slaapt.', sv: 'God sömn är grundläggande. Därför väljer vi bra madrasser, sängkläder av hög kvalitet och sovmiljöer där komfort och lugn står i centrum. Ett vackert boende är inte mycket värt om man inte sover bra där.' }
      },
      {
        title: { en: 'Cleanliness', de: 'Sauberkeit', es: 'Limpieza', nl: 'Netheid', sv: 'Renlighet' },
        subline: { en: '(non-negotiable)', de: '(nicht verhandelbar)', es: '(innegociable)', nl: '(niet onderhandelbaar)', sv: '(inte förhandlingsbart)' },
        copy: { en: 'Cleanliness is not a feature. It is a basic standard. Every stay should feel properly prepared, never rushed and never merely “good enough”.', de: 'Sauberkeit ist für uns kein Extra, sondern Grundvoraussetzung. Jede Unterkunft soll sorgfältig vorbereitet sein – niemals hastig und niemals nur „gut genug“.', es: 'La limpieza no es un extra, sino una condición básica. Cada alojamiento debe estar preparado con cuidado, nunca con prisas y nunca simplemente “lo bastante bien”.', nl: 'Netheid is geen extraatje, maar een basisvoorwaarde. Elk verblijf moet zorgvuldig zijn voorbereid — nooit gehaast en nooit gewoon “goed genoeg”.', sv: 'Renlighet är inte en extra förmån utan en grundstandard. Varje boende ska vara noggrant förberett — aldrig stressat och aldrig bara “tillräckligt bra”.' }
      },
      {
        title: { en: 'Things that work', de: 'Dinge, die einfach funktionieren', es: 'Cosas que simplemente funcionan', nl: 'Dingen die gewoon werken', sv: 'Saker som bara fungerar' },
        copy: { en: 'Equipment should be reliable, intuitive and appropriate for real everyday use. We prefer things that quietly make the stay easier over features designed mainly to impress.', de: 'Ausstattung soll zuverlässig, verständlich und im Alltag wirklich nützlich sein. Wir bevorzugen Dinge, die einen Aufenthalt unauffällig leichter machen, statt Features, die vor allem Eindruck machen sollen.', es: 'El equipamiento debe ser fiable, intuitivo y realmente útil en el día a día. Preferimos lo que hace la estancia más fácil de forma discreta a lo que existe principalmente para impresionar.', nl: 'Voorzieningen moeten betrouwbaar, logisch en echt bruikbaar zijn in het dagelijks leven. We kiezen liever voor dingen die het verblijf stilletjes makkelijker maken dan voor functies die vooral indruk moeten maken.', sv: 'Utrustning ska vara pålitlig, enkel att förstå och verkligen användbar i vardagen. Vi föredrar sådant som diskret gör vistelsen enklare framför funktioner som främst finns för att imponera.' }
      },
      {
        title: { en: 'Quality that lasts', de: 'Qualität, die bleibt', es: 'Calidad que perdura', nl: 'Kwaliteit die meegaat', sv: 'Kvalitet som håller' },
        copy: { en: 'We prefer durable choices over quick fixes. Materials, furniture and equipment are maintained and replaced when they no longer meet the standard we expect for our guests.', de: 'Wir setzen lieber auf langlebige Lösungen als auf schnelle Reparaturen. Materialien, Möbel und Ausstattung werden gepflegt und ersetzt, wenn sie unserem Anspruch nicht mehr entsprechen.', es: 'Preferimos soluciones duraderas a arreglos rápidos. Mantenemos y sustituimos materiales, muebles y equipamiento cuando dejan de estar a la altura del estándar que queremos para nuestros huéspedes.', nl: 'We kiezen liever voor duurzame oplossingen dan voor snelle reparaties. Materialen, meubels en apparatuur worden onderhouden en vervangen wanneer ze niet meer voldoen aan de standaard die we voor onze gasten willen.', sv: 'Vi väljer hellre hållbara lösningar än snabba lagningar. Material, möbler och utrustning underhålls och byts ut när de inte längre motsvarar den standard vi vill erbjuda våra gäster.' }
      }
    ],
    note: {
      en: 'Individually, these are small decisions. Together, they determine how a stay actually feels.',
      de: 'Für sich genommen sind das kleine Entscheidungen. Zusammengenommen bestimmen sie, wie sich ein Aufenthalt tatsächlich anfühlt.',
      es: 'Por separado son pequeñas decisiones. Juntas determinan cómo se siente realmente una estancia.',
      nl: 'Op zichzelf zijn het kleine beslissingen. Samen bepalen ze hoe een verblijf werkelijk aanvoelt.',
      sv: 'Var för sig är det små beslut. Tillsammans avgör de hur en vistelse faktiskt känns.'
    },
  },
  locations: {
    title: { en: 'Our locations in Andalusia', de: 'Unsere Standorte in Andalusien', es: 'Nuestras ubicaciones en Andalucía', nl: 'Onze locaties in Andalusië', sv: 'Våra platser i Andalusien' },
    lead: {
      en: 'The six stays are spread across three places, and each location changes what everyday holiday life looks like.',
      de: 'Unsere sechs Unterkünfte verteilen sich auf drei Orte, die im Urlaubsalltag ganz unterschiedliche Möglichkeiten bieten.',
      es: 'Los seis alojamientos se reparten entre tres lugares, cada uno con una forma distinta de vivir el día a día de las vacaciones.',
      nl: 'De zes verblijven liggen verspreid over drie plaatsen, elk met een heel andere vakantiedag.',
      sv: 'De sex boendena finns på tre platser som ger helt olika semesterdagar.'
    },
    locations: [
      { name: 'Frigiliana', copy: { en: 'Four individual stays in the historic old town; Lounis, Zaid and Maha have private terraces.', de: 'Vier individuelle Unterkünfte in der historischen Altstadt; Lounis, Zaid und Maha haben private Terrassen.', es: 'Cuatro alojamientos distintos en el casco antiguo; Lounis, Zaid y Maha tienen terraza privada.', nl: 'Vier verschillende verblijven in de historische oude kern; Lounis, Zaid en Maha hebben een privéterras.', sv: 'Fyra olika boenden i den historiska gamla stan; Lounis, Zaid och Maha har privat terrass.' } },
      { name: 'Nerja', copy: { en: 'One fifth-floor apartment with a lift, 100 metres from Torrecilla beach and 500 metres from the Balcón de Europa.', de: 'Ein Apartment im fünften Stock mit Aufzug, 100 Meter vom Strand Torrecilla und 500 Meter vom Balcón de Europa entfernt.', es: 'Un apartamento en la quinta planta con ascensor, a 100 metros de la playa de Torrecilla y 500 del Balcón de Europa.', nl: 'Eén appartement op de vijfde verdieping met lift, op 100 meter van het strand van Torrecilla en 500 meter van het Balcón de Europa.', sv: 'En lägenhet på femte våningen med hiss, 100 meter från Torrecillastranden och 500 meter från Balcón de Europa.' } },
      { name: 'Tarifa', copy: { en: 'A two-floor penthouse for up to four guests, with two bedrooms and a terrace facing the Atlantic.', de: 'Ein Penthouse über zwei Etagen für bis zu vier Gäste, mit zwei Schlafzimmern und einer Terrasse zum Atlantik.', es: 'Un ático de dos plantas para un máximo de cuatro personas, con dos dormitorios y terraza frente al Atlántico.', nl: 'Een penthouse over twee verdiepingen voor maximaal vier gasten, met twee slaapkamers en een terras aan de Atlantische Oceaan.', sv: 'Ett penthouse i två våningar för upp till fyra gäster, med två sovrum och en terrass mot Atlanten.' } }
    ]
  },
  host: {
    title: { en: 'Real people. Direct responsibility.', de: 'Echte Menschen. Klare Verantwortung.', es: 'Personas reales. Responsabilidad directa.', nl: 'Echte mensen. Duidelijke verant\u00ADwoordelijkheid.', sv: 'Riktiga människor. Tydligt ansvar.' },
    role: { en: 'Robert Sebastian Böhmer — Host at AMARA', de: 'Robert Sebastian Böhmer — Gastgeber bei AMARA', es: 'Robert Sebastian Böhmer — Anfitrión de AMARA', nl: 'Robert Sebastian Böhmer — Host bij AMARA', sv: 'Robert Sebastian Böhmer — Värd på AMARA' },
    imageAlt: { en: 'Robert, host at AMARA', de: 'Robert, Gastgeber bei AMARA', es: 'Robert, anfitrión de AMARA', nl: 'Robert, host bij AMARA', sv: 'Robert, värd på AMARA' },
    stats: [
      { label: { en: 'Direct involvement', de: 'Persönlich eingebunden', es: 'Implicación personal', nl: 'Persoonlijk betrokken', sv: 'Personligt engagerad' }, value: { en: 'I remain directly involved in how our stays are prepared, maintained and improved.', de: 'Ich bin weiterhin direkt daran beteiligt, wie unsere Unterkünfte vorbereitet, gepflegt und weiterentwickelt werden.', es: 'Sigo implicado directamente en cómo se preparan, mantienen y mejoran nuestros alojamientos.', nl: 'Ik blijf direct betrokken bij hoe onze verblijven worden voorbereid, onderhouden en verbeterd.', sv: 'Jag är fortsatt direkt involverad i hur våra boenden förbereds, underhålls och utvecklas.' } },
      { label: { en: 'Guest feedback', de: 'Feedback, das etwas verändert', es: 'Opiniones que sirven', nl: 'Feedback die iets verandert', sv: 'Feedback som gör skillnad' }, value: { en: 'Feedback helps us make the next stay clearer, easier and more comfortable.', de: 'Rückmeldungen helfen uns dabei, den nächsten Aufenthalt noch klarer, einfacher und angenehmer zu machen.', es: 'Los comentarios de los huéspedes nos ayudan a hacer que la siguiente estancia sea más clara, sencilla y cómoda.', nl: 'Reacties van gasten helpen ons om het volgende verblijf duidelijker, eenvoudiger en comfortabeler te maken.', sv: 'Gästernas återkoppling hjälper oss att göra nästa vistelse tydligare, enklare och mer bekväm.' } },
      { label: { en: 'Present when needed', de: 'Da, wenn ihr uns braucht', es: 'Disponibles cuando hace falta', nl: 'Bereikbaar wanneer nodig', sv: 'Nåbara när det behövs' }, value: { en: 'Easy to reach when something matters, in the background when it does not.', de: 'Wenn etwas wichtig ist, sind wir gut erreichbar. Ansonsten bleiben wir bewusst im Hintergrund.', es: 'Fáciles de localizar cuando algo importa y en segundo plano cuando no.', nl: 'Goed bereikbaar wanneer iets belangrijk is en bewust op de achtergrond wanneer dat niet zo is.', sv: 'Lätta att nå när något är viktigt och medvetet i bakgrunden när det inte är det.' } },
      { label: { en: 'Languages', de: 'Sprachen', es: 'Idiomas', nl: 'Talen', sv: 'Språk' }, value: { en: 'DE · EN · ES', de: 'DE · EN · ES', es: 'DE · EN · ES', nl: 'DE · EN · ES', sv: 'DE · EN · ES' } }
    ],
    subtitle: { en: 'A small team. One standard.', de: 'Ein kleines Team. Ein gemeinsamer Anspruch.', es: 'Un equipo pequeño. Un mismo estándar.', nl: 'Een klein team. Eén standaard.', sv: 'Ett litet team. En gemensam standard.' },
    teamItems: [
      { title: { en: 'Small and trusted', de: 'Klein und vertraut', es: 'Pequeño y de confianza', nl: 'Klein en vertrouwd', sv: 'Litet och pålitligt' }, copy: { en: 'Different people may care for different details, but the standard is shared.', de: 'Unterschiedliche Menschen kümmern sich um unterschiedliche Details – der Anspruch bleibt derselbe.', es: 'Distintas personas pueden ocuparse de distintos detalles, pero el estándar es el mismo.', nl: 'Verschillende mensen zorgen voor verschillende details, maar de standaard blijft dezelfde.', sv: 'Olika människor kan ta hand om olika detaljer, men standarden är densamma.' } },
      { title: { en: 'Clear responsibility', de: 'Klare Zuständigkeit', es: 'Responsabilidad clara', nl: 'Duidelijke verantwoordelijkheid', sv: 'Tydligt ansvar' }, copy: { en: 'Questions are answered clearly, problems are taken seriously and responsibility is never passed around.', de: 'Fragen werden klar beantwortet, Probleme ernst genommen und Verantwortung nicht weitergereicht.', es: 'Las preguntas se responden con claridad, los problemas se toman en serio y la responsabilidad no se pasa de una persona a otra.', nl: 'Vragen worden helder beantwoord, problemen serieus genomen en verantwoordelijkheid wordt niet doorgeschoven.', sv: 'Frågor besvaras tydligt, problem tas på allvar och ansvar skickas inte vidare.' } },
      { title: { en: 'Available without intruding', de: 'Erreichbar, ohne euch zu stören', es: 'Disponibles sin invadir', nl: 'Bereikbaar zonder te storen', sv: 'Nåbara utan att störa' }, copy: { en: 'You receive clear arrival information and a direct contact. We are easy to reach when something matters and otherwise leave the stay to you.', de: 'Ihr erhaltet klare Anreiseinformationen und einen direkten Kontakt. Wenn etwas wichtig ist, erreicht ihr uns schnell; ansonsten gehört der Aufenthalt euch.', es: 'Recibís información clara para la llegada y un contacto directo. Si surge algo importante, nos encontráis enseguida; el resto del tiempo, la estancia es vuestra.', nl: 'Jullie krijgen duidelijke aankomstinformatie en een rechtstreeks contact. Als er iets belangrijks is, zijn we snel bereikbaar; verder laten we het verblijf aan jullie.', sv: 'Ni får tydlig ankomstinformation och en direkt kontakt. När något är viktigt är vi lätta att nå; i övrigt låter vi er ha vistelsen för er själva.' } }
    ]
  },
  sustainability: {
    title: { en: 'Responsible by design', de: 'Verantwortung gehört dazu', es: 'Responsabilidad en cada decisión', nl: 'Verant\u00ADwoordelijkheid hoort erbij', sv: 'Ansvar är en självklar del' },
    subtitle: { en: 'Sustainable by choice.', de: 'Nachhaltig aus Überzeugung.', es: 'Sostenible por convicción.', nl: 'Duurzaam uit overtuiging.', sv: 'Hållbart av övertygelse.' },
    lead: {
      en: 'Where practical, we use renewable energy, efficient equipment and measures that reduce water use and waste, without asking guests to give up comfort.',
      de: 'Wo es sinnvoll möglich ist, setzen wir auf erneuerbare Energie, effiziente Ausstattung sowie Maßnahmen, die Wasserverbrauch und Abfall reduzieren – ohne dass ihr dafür auf Komfort verzichten müsst.',
      es: 'Siempre que resulta práctico, utilizamos energía renovable, equipos eficientes y medidas que reducen el consumo de agua y los residuos, sin pediros que renunciéis al confort.',
      nl: 'Waar het praktisch uitvoerbaar is, kiezen we voor hernieuwbare energie, efficiënte apparatuur en maatregelen die waterverbruik en afval beperken, zonder dat jullie comfort hoeven in te leveren.',
      sv: 'Där det fungerar i praktiken använder vi förnybar energi, effektiv utrustning och lösningar som minskar vattenförbrukning och avfall, utan att ni behöver ge avkall på komforten.'
    },
    listColumns: [
      {
        label: { en: 'Energy', de: 'Energie', es: 'Energía', nl: 'Energie', sv: 'Energi' },
        items: [
          { en: 'Solar hot water', de: 'Solar erwärmtes Warmwasser', es: 'Agua caliente solar', nl: 'Zonneverwarmd warm water', sv: 'Soluppvärmt varmvatten' },
          { en: 'Renewable electricity', de: 'Erneuerbarer Strom', es: 'Electricidad renovable', nl: 'Hernieuwbare elektriciteit', sv: 'Förnybar el' },
          { en: 'LED lighting', de: 'LED-Beleuchtung', es: 'Iluminación LED', nl: 'LED-verlichting', sv: 'LED-belysning' },
          { en: 'Efficient appliances', de: 'Effiziente Geräte', es: 'Electrodomésticos eficientes', nl: 'Efficiënte apparaten', sv: 'Effektiva apparater' }
        ]
      },
      {
        label: { en: 'Water & Waste', de: 'Wasser & Abfall', es: 'Agua y residuos', nl: 'Water & afval', sv: 'Vatten & avfall' },
        items: [
          { en: 'Low-flow showers', de: 'Wassersparende Duschen', es: 'Duchas de bajo caudal', nl: 'Waterbesparende douches', sv: 'Snålspolande duschar' },
          { en: 'Recycling', de: 'Recycling', es: 'Reciclaje', nl: 'Recycling', sv: 'Återvinning' },
          { en: 'Refillable amenities', de: 'Nachfüllbare Pflegeprodukte', es: 'Amenities recargables', nl: 'Navulbare voorzieningen', sv: 'Påfyllningsbara produkter' },
          { en: 'No capsule coffee systems', de: 'Keine Kapsel-Kaffeesysteme', es: 'Sin cafeteras de cápsulas', nl: 'Geen koffiecapsulesystemen', sv: 'Inga kaffekapselsystem' }
        ]
      }
    ]
  },
  closingCta: {
    title: { en: 'For guests who value the things that cannot be staged', de: 'Für Gäste, denen die Dinge wichtig sind, die man nicht inszenieren kann', es: 'Para quienes valoran lo que no siempre se ve en las fotos', nl: 'Voor gasten die waarde hechten aan wat je niet in scène kunt zetten', sv: 'För gäster som värdesätter det som inte går att iscensätta' },
    lead: {
      en: 'AMARA is for people who appreciate calm, reliability, thoughtful spaces and honest communication. We may not be the right choice for everyone — and that is intentional. But if you value places that have been considered carefully, prepared properly and looked after by people who take personal responsibility for them, you will probably feel at home here.',
      de: 'AMARA ist für Menschen, die Ruhe, Verlässlichkeit, durchdachte Räume und ehrliche Kommunikation schätzen. Wir sind bewusst nicht für jeden die richtige Wahl. Aber wenn ihr Wert auf Unterkünfte legt, die sorgfältig geplant, gewissenhaft vorbereitet und von Menschen betreut werden, die persönlich Verantwortung übernehmen, werdet ihr euch bei AMARA wahrscheinlich sehr wohlfühlen.',
      es: 'AMARA es para personas que valoran la calma, la fiabilidad, los espacios bien pensados y una comunicación honesta. Sabemos que no somos la opción adecuada para todo el mundo, y es algo intencionado. Pero si apreciáis alojamientos cuidados, bien preparados y atendidos por personas que asumen personalmente la responsabilidad, probablemente os sentiréis muy a gusto con AMARA.',
      nl: 'AMARA is er voor mensen die rust, betrouwbaarheid, doordachte ruimtes en eerlijke communicatie waarderen. We zijn bewust niet voor iedereen de juiste keuze. Maar als jullie waarde hechten aan plekken die zorgvuldig zijn ingericht, goed worden voorbereid en worden verzorgd door mensen die persoonlijk verantwoordelijkheid nemen, zullen jullie je bij AMARA waarschijnlijk snel thuis voelen.',
      sv: 'AMARA är för människor som uppskattar lugn, pålitlighet, genomtänkta miljöer och ärlig kommunikation. Vi är medvetet inte rätt val för alla. Men om ni uppskattar boenden som är noggrant genomtänkta, väl förberedda och omhändertagna av människor som tar personligt ansvar, kommer ni sannolikt att känna er hemma hos AMARA.'
    },
    note: {
      en: 'A good stay does not need to demand attention. It should simply give you the freedom to enjoy your time.',
      de: 'Ein guter Aufenthalt muss nicht ständig Aufmerksamkeit verlangen. Er sollte euch vor allem die Freiheit geben, eure Zeit zu genießen.',
      es: 'Una buena estancia no necesita reclamar atención constantemente. Debería daros, sobre todo, la libertad de disfrutar de vuestro tiempo.',
      nl: 'Een goed verblijf hoeft niet voortdurend aandacht te vragen. Het moet jullie vooral de vrijheid geven om van jullie tijd te genieten.',
      sv: 'En bra vistelse behöver inte hela tiden kräva uppmärksamhet. Den ska framför allt ge er friheten att njuta av er tid.'
    },
    links: [
      { token: 'book', label: trustLabels.book },
      { token: 'reviews_hub', label: trustLabels.reviews_hub },
      { token: 'direct_booking_benefits', label: trustLabels.direct_booking_benefits }
    ]
  }
};

export function getAboutUsPageData(lang: AmaraLanguage) {
  return {
    seo: aboutUsContent.seo,
    brandLabel: aboutUsContent.navigation.brandLabel[lang],
    navigationLinks: aboutUsContent.navigation.links.map((link) => ({ token: link.token, label: link.label[lang] })),
    navCtaLabel: aboutUsContent.navigation.ctaLabel[lang],
    footerHighlights: aboutUsContent.footerHighlights.map((link) => ({ token: link.token, label: link.label[lang] })),
    hero: {
      subtitle: aboutUsContent.hero.subtitle[lang],
      titleHtml: aboutUsContent.hero.titleHtml[lang],
      lead: aboutUsContent.hero.lead[lang],
      supportText: aboutUsContent.hero.supportText[lang],
      ctaLinks: aboutUsContent.hero.ctaLinks.map((link) => ({ token: link.token, label: link.label[lang] }))
    },
    content: aboutUsContent,
    lang
  };
}
