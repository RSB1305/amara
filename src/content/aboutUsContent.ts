import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

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
    statementTitle: LocalizedText;
    statementParagraphs: LocalizedText[];
    statementStrong: LocalizedText;
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
    languages: {
      en: {
        title: 'AMARA | About Us',
        description: 'Learn about the AMARA philosophy, hosting standards, quality principles, and the people behind the brand.',
        robots: 'index, follow',
        canonical: 'auto'
      },
      de: {
        title: 'AMARA | Über uns',
        description: 'Lernt die Philosophie von AMARA, unsere Gastgeberstandards, Qualitätsprinzipien und die Menschen hinter der Marke kennen.',
        robots: 'index, follow',
        canonical: 'auto'
      },
      es: {
        title: 'AMARA | Sobre nosotros',
        description: 'Conoce la filosofía de AMARA, sus estándares de alojamiento, principios de calidad y las personas detrás de la marca.',
        robots: 'index, follow',
        canonical: 'auto'
      },
      nl: {
        title: 'AMARA | Over ons',
        description: 'Leer de filosofie van AMARA, de hostingsstandaarden, kwaliteitsprincipes en de mensen achter het merk kennen.',
        robots: 'index, follow',
        canonical: 'auto'
      },
      sv: {
        title: 'AMARA | Om oss',
        description: 'Lär känna AMARAs filosofi, värdskapsstandarder, kvalitetsprinciper och människorna bakom varumärket.',
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
        label: { en: 'About AMARA', de: 'Über AMARA', es: 'Sobre AMARA', nl: 'Over AMARA', sv: 'Om AMARA' }
      },
      {
        token: 'reviews_hub',
        label: { en: 'Guest Reviews', de: 'Gästebewertungen', es: 'Reseñas', nl: 'Beoordelingen', sv: 'Gästomdömen' }
      },
      {
        token: 'direct_booking_benefits',
        label: { en: 'Direct Booking Benefits', de: 'Vorteile der Direktbuchung', es: 'Ventajas de reservar directo', nl: 'Voordelen van direct boeken', sv: 'Fördelar med direktbokning' }
      }
    ],
    ctaLabel: {
      en: 'Check Availability',
      de: 'Verfügbarkeit prüfen',
      es: 'Ver disponibilidad',
      nl: 'Beschikbaarheid bekijken',
      sv: 'Se tillgänglighet'
    }
  },
  footerHighlights: [
    {
      token: 'amenities',
      label: { en: 'Amenities', de: 'Ausstattung', es: 'Servicios', nl: 'Voorzieningen', sv: 'Bekvämligheter' }
    },
    {
      token: 'faq_general',
      label: { en: 'Stay FAQ', de: 'Aufenthalts-FAQ', es: 'FAQ de la estancia', nl: 'Verblijfs-FAQ', sv: 'FAQ för vistelsen' }
    },
    {
      token: 'instagram',
      label: { en: 'Instagram', de: 'Instagram', es: 'Instagram', nl: 'Instagram', sv: 'Instagram' }
    }
  ],
  hero: {
    subtitle: { en: 'AMARA · Frigiliana · Nerja · Tarifa', de: 'AMARA · Frigiliana · Nerja · Tarifa', es: 'AMARA · Frigiliana · Nerja · Tarifa', nl: 'AMARA · Frigiliana · Nerja · Tarifa', sv: 'AMARA · Frigiliana · Nerja · Tarifa' },
    titleHtml: {
      en: 'Holiday apartments <br /> in Andalusia',
      de: 'Ferienapartments <br /> in Andalusien',
      es: 'Apartamentos vacacionales <br /> en Andalucía',
      nl: 'Vakantieappartementen <br /> in Andalusië',
      sv: 'Semesterlägenheter <br /> i Andalusien'
    },
    lead: {
      en: 'You arrive, open the door, and feel immediate relief. Everything is prepared. Nothing asks for attention.',
      de: 'Ihr kommt an, öffnet die Tür und spürt sofort Erleichterung. Alles ist vorbereitet. Nichts fordert eure Aufmerksamkeit.',
      es: 'Llegáis, abrís la puerta y sentís un alivio inmediato. Todo está preparado. Nada exige vuestra atención.',
      nl: 'Jullie komen aan, openen de deur en voelen meteen opluchting. Alles is voorbereid. Niets vraagt om aandacht.',
      sv: 'Ni kommer fram, öppnar dörren och känner omedelbar lättnad. Allt är förberett. Ingenting kräver uppmärksamhet.'
    },
    supportText: {
      en: 'Transparent, calm, and designed for guests, without theatrics.',
      de: 'Transparent, ruhig und ganz für Gäste gedacht, ohne Inszenierung.',
      es: 'Transparente, sereno y pensado para el huésped, sin artificios.',
      nl: 'Transparant, rustig en helemaal voor gasten ontworpen, zonder theater.',
      sv: 'Transparent, lugnt och utformat för gäster, utan konstlade effekter.'
    },
    ctaLinks: [
      {
        token: 'reviews_hub',
        label: { en: 'Guest Reviews', de: 'Gästebewertungen', es: 'Reseñas', nl: 'Beoordelingen', sv: 'Gästomdömen' }
      },
      {
        token: 'direct_booking_benefits',
        label: { en: 'Direct Booking Benefits', de: 'Vorteile der Direktbuchung', es: 'Ventajas de reservar directo', nl: 'Voordelen van direct boeken', sv: 'Fördelar med direktbokning' }
      }
    ]
  },
  philosophy: {
    title: { en: 'AMARA means love', de: 'AMARA bedeutet Liebe', es: 'AMARA significa amor', nl: 'AMARA betekent liefde', sv: 'AMARA betyder kärlek' },
    lead: {
      en: 'Love for the details. Love for what we do. A kind of love that stays because it is consistent, not loud.',
      de: 'Liebe zum Detail. Liebe zu dem, was wir tun. Eine Art von Liebe, die bleibt, weil sie beständig ist und nicht laut.',
      es: 'Amor por los detalles. Amor por lo que hacemos. Un tipo de amor que permanece porque es constante, no estridente.',
      nl: 'Liefde voor de details. Liefde voor wat we doen. Een soort liefde die blijft, omdat ze consequent is en niet luid.',
      sv: 'Kärlek till detaljerna. Kärlek till det vi gör. En sorts kärlek som stannar kvar eftersom den är konsekvent, inte högljudd.'
    },
    paragraphs: [
      {
        en: 'AMARA was built from years of travel and hosting experience, both professional and personal, with one clear goal: a stay that feels effortless from the first minute.',
        de: 'AMARA entstand aus Jahren des Reisens und der Gastgebererfahrung, beruflich wie privat, mit einem klaren Ziel: ein Aufenthalt, der sich von der ersten Minute an mühelos anfühlt.',
        es: 'AMARA nació de años de viaje y experiencia como anfitriones, tanto profesional como personal, con un objetivo claro: una estancia que se sienta sencilla desde el primer minuto.',
        nl: 'AMARA is ontstaan uit jaren van reis- en hostingervaring, professioneel én persoonlijk, met één helder doel: een verblijf dat vanaf de eerste minuut moeiteloos voelt.',
        sv: 'AMARA byggdes ur många års resande och värdskapserfarenhet, både professionellt och personligt, med ett tydligt mål: en vistelse som känns enkel från första minuten.'
      },
      {
        en: 'This name is not a promise for a moment. It is a promise for what remains afterwards: trust, returning guests, and the feeling of having truly arrived.',
        de: 'Dieser Name ist kein Versprechen für einen kurzen Moment. Er ist ein Versprechen für das, was danach bleibt: Vertrauen, wiederkehrende Gäste und das Gefühl, wirklich angekommen zu sein.',
        es: 'Este nombre no promete un instante. Promete lo que queda después: confianza, huéspedes que regresan y la sensación de haber llegado de verdad.',
        nl: 'Deze naam is geen belofte voor een enkel moment. Het is een belofte voor wat daarna blijft: vertrouwen, terugkerende gasten en het gevoel echt aangekomen te zijn.',
        sv: 'Det här namnet är inte ett löfte för ett ögonblick. Det är ett löfte om det som finns kvar efteråt: förtroende, återkommande gäster och känslan av att verkligen ha kommit fram.'
      }
    ],
    subtitle: { en: 'About us? Actually: about you.', de: 'Über uns? Eigentlich: über euch.', es: '¿Sobre nosotros? En realidad: sobre vosotros.', nl: 'Over ons? Eigenlijk: over jullie.', sv: 'Om oss? Egentligen: om er.' },
    items: [
      {
        title: { en: '', de: '', es: '', nl: '', sv: '' },
        copy: {
          en: 'Everything at AMARA is built around the guest. Not around trends. Not around platform logic. Not around short-term optimisation.',
          de: 'Alles bei AMARA ist um den Gast herum gebaut. Nicht um Trends. Nicht um Plattformlogik. Nicht um kurzfristige Optimierung.',
          es: 'Todo en AMARA está construido alrededor del huésped. No alrededor de tendencias. No alrededor de la lógica de las plataformas. No alrededor de la optimización a corto plazo.',
          nl: 'Alles bij AMARA is gebouwd rond de gast. Niet rond trends. Niet rond platformlogica. Niet rond korte-termijnoptimalisatie.',
          sv: 'Allt hos AMARA är byggt kring gästen. Inte kring trender. Inte kring plattformslogik. Inte kring kortsiktig optimering.'
        }
      },
      {
        title: { en: '', de: '', es: '', nl: '', sv: '' },
        copy: {
          en: 'Hosting here is a matter of trust. The guiding question is always: What makes this stay genuinely better for the guest?',
          de: 'Gastgeben ist hier eine Frage des Vertrauens. Die leitende Frage ist immer: Was macht diesen Aufenthalt für den Gast wirklich besser?',
          es: 'Hospedar aquí es una cuestión de confianza. La pregunta guía es siempre: ¿qué hace que esta estancia sea realmente mejor para el huésped?',
          nl: 'Hosten is hier een kwestie van vertrouwen. De leidende vraag is altijd: wat maakt dit verblijf echt beter voor de gast?',
          sv: 'Att vara värd här handlar om förtroende. Den vägledande frågan är alltid: vad gör den här vistelsen genuint bättre för gästen?'
        }
      },
      {
        title: { en: '', de: '', es: '', nl: '', sv: '' },
        copy: {
          en: 'That question guides every decision: consistency, responsibility, and long-term guest satisfaction.',
          de: 'Diese Frage lenkt jede Entscheidung: Beständigkeit, Verantwortung und langfristige Gästezufriedenheit.',
          es: 'Esa pregunta guía cada decisión: consistencia, responsabilidad y satisfacción del huésped a largo plazo.',
          nl: 'Die vraag stuurt elke beslissing: consistentie, verantwoordelijkheid en langdurige gasttevredenheid.',
          sv: 'Den frågan styr varje beslut: konsekvens, ansvar och långsiktig gästnöjdhet.'
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
    title: { en: 'What we do differently', de: 'Was wir anders machen', es: 'Lo que hacemos de forma distinta', nl: 'Wat wij anders doen', sv: 'Det vi gör annorlunda' },
    note: {
      en: 'These choices are intentional. They are also not for everyone, and that is exactly the point.',
      de: 'Diese Entscheidungen sind bewusst getroffen. Sie sind auch nicht für alle gedacht, und genau das ist der Punkt.',
      es: 'Estas decisiones son intencionadas. Tampoco son para todo el mundo, y precisamente de eso se trata.',
      nl: 'Deze keuzes zijn bewust gemaakt. Ze zijn ook niet voor iedereen, en precies dat is de bedoeling.',
      sv: 'De här valen är medvetna. De passar inte heller alla, och det är precis poängen.'
    },
    items: [
      {
        title: { en: 'Prepared for real stays', de: 'Vorbereitet für echte Aufenthalte', es: 'Preparado para estancias reales', nl: 'Voorbereid op echte verblijven', sv: 'Förberett för riktiga vistelser' },
        copy: {
          en: 'Comfort and everyday usefulness come first, not staging for photos.',
          de: 'Komfort und Alltagstauglichkeit stehen an erster Stelle, nicht das Inszenieren für Fotos.',
          es: 'La comodidad y la utilidad diaria van primero, no la puesta en escena para fotos.',
          nl: 'Comfort en dagelijks gebruiksgemak komen eerst, niet het stylen voor foto’s.',
          sv: 'Komfort och vardaglig användbarhet kommer först, inte att iscensätta för bilder.'
        }
      },
      {
        title: { en: 'Consistency over promises', de: 'Beständigkeit statt Versprechen', es: 'Consistencia antes que promesas', nl: 'Consistentie boven beloften', sv: 'Konsekvens framför löften' },
        copy: {
          en: 'What you see is what you find, every season, every stay.',
          de: 'Was ihr seht, ist auch das, was ihr vorfindet, in jeder Saison, bei jedem Aufenthalt.',
          es: 'Lo que veis es lo que encontráis, en cada temporada y en cada estancia.',
          nl: 'Wat jullie zien, is wat jullie krijgen, elk seizoen opnieuw en bij elk verblijf.',
          sv: 'Det ni ser är det ni får, varje säsong och varje vistelse.'
        }
      },
      {
        title: { en: 'Calm, not stimulation', de: 'Ruhe statt Reizüberflutung', es: 'Calma, no estimulación', nl: 'Rust, geen overprikkeling', sv: 'Lugn, inte stimulans' },
        copy: {
          en: 'Design supports rest, not visual noise.',
          de: 'Das Design unterstützt Erholung, nicht visuelle Unruhe.',
          es: 'El diseño acompaña al descanso, no al ruido visual.',
          nl: 'Het ontwerp ondersteunt rust, geen visuele onrust.',
          sv: 'Designen stödjer vila, inte visuellt brus.'
        }
      },
      {
        title: { en: 'Direct responsibility', de: 'Direkte Verantwortung', es: 'Responsabilidad directa', nl: 'Directe verantwoordelijkheid', sv: 'Direkt ansvar' },
        copy: {
          en: 'You communicate with the people responsible for your stay.',
          de: 'Ihr kommuniziert mit den Menschen, die für euren Aufenthalt verantwortlich sind.',
          es: 'Os comunicáis con las personas responsables de vuestra estancia.',
          nl: 'Jullie communiceren met de mensen die verantwoordelijk zijn voor jullie verblijf.',
          sv: 'Ni kommunicerar med personerna som ansvarar för er vistelse.'
        }
      },
      {
        title: { en: 'Privacy respected', de: 'Privatsphäre respektiert', es: 'Privacidad respetada', nl: 'Privacy gerespecteerd', sv: 'Integriteten respekteras' },
        copy: {
          en: 'Present when needed, invisible otherwise.',
          de: 'Da, wenn ihr uns braucht, ansonsten unsichtbar.',
          es: 'Presentes cuando hace falta, invisibles el resto del tiempo.',
          nl: 'Aanwezig wanneer nodig, onzichtbaar op de rest van de momenten.',
          sv: 'Närvarande när det behövs, annars osynliga.'
        }
      }
    ]
  },
  quality: {
    title: { en: 'Honest quality in every AMARA home', de: 'Ehrliche Qualität in jedem Zuhause von AMARA', es: 'Calidad honesta en cada hogar de AMARA', nl: 'Eerlijke kwaliteit in elk verblijf van AMARA', sv: 'Ärlig kvalitet i varje AMARA-boende' },
    cards: [
      {
        title: { en: 'Deep sleep', de: 'Tiefer Schlaf', es: 'Descanso profundo', nl: 'Diepe slaap', sv: 'Djup sömn' },
        copy: { en: 'High-quality mattresses, crisp linens, quiet nights.', de: 'Hochwertige Matratzen, frische Bettwäsche, ruhige Nächte.', es: 'Colchones de alta calidad, sábanas impecables y noches tranquilas.', nl: 'Hoogwaardige matrassen, fris linnengoed en stille nachten.', sv: 'Madrasser av hög kvalitet, krispiga lakan och tysta nätter.' }
      },
      {
        title: { en: 'Cleanliness', de: 'Sauberkeit', es: 'Limpieza', nl: 'Netheid', sv: 'Renlighet' },
        subline: { en: '(non-negotiable)', de: '(nicht verhandelbar)', es: '(no negociable)', nl: '(niet onderhandelbaar)', sv: '(inte förhandlingsbart)' },
        copy: { en: 'Thorough preparation, never rushed, never merely good enough.', de: 'Gründliche Vorbereitung, nie hastig, nie nur gerade ausreichend.', es: 'Preparación minuciosa, nunca apresurada, nunca simplemente suficiente.', nl: 'Grondige voorbereiding, nooit gehaast en nooit slechts net voldoende.', sv: 'Noggrann förberedelse, aldrig stressad och aldrig bara tillräcklig.' }
      },
      {
        title: { en: 'Materials that age well', de: 'Materialien, die gut altern', es: 'Materiales que envejecen bien', nl: 'Materialen die mooi verouderen', sv: 'Material som åldras väl' },
        copy: { en: 'Durable choices instead of quick fixes.', de: 'Langlebige Entscheidungen statt schneller Notlösungen.', es: 'Elecciones duraderas en lugar de soluciones rápidas.', nl: 'Duurzame keuzes in plaats van snelle lapmiddelen.', sv: 'Hållbara val i stället för snabba nödlösningar.' }
      },
      {
        title: { en: 'Reliable equipment', de: 'Verlässliche Ausstattung', es: 'Equipamiento fiable', nl: 'Betrouwbare uitrusting', sv: 'Pålitlig utrustning' },
        copy: { en: 'Useful details, not showroom gimmicks.', de: 'Nützliche Details statt Showroom-Spielereien.', es: 'Detalles útiles, no artificios de escaparate.', nl: 'Nuttige details, geen showroom-gimmicks.', sv: 'Användbara detaljer, inte showrums-gimmickar.' }
      }
    ],
    note: {
      en: 'If something no longer meets our standards, it is replaced quietly, consistently, and without discussion.',
      de: 'Wenn etwas unseren Standards nicht mehr entspricht, wird es leise, konsequent und ohne Diskussion ersetzt.',
      es: 'Si algo deja de cumplir nuestros estándares, se sustituye con discreción, constancia y sin discusión.',
      nl: 'Als iets niet langer aan onze normen voldoet, wordt het stil, consequent en zonder discussie vervangen.',
      sv: 'Om något inte längre uppfyller våra standarder byts det ut lugnt, konsekvent och utan diskussion.'
    },
    statementTitle: { en: 'Stable pricing. No discounts.', de: 'Stabile Preise. Keine Rabatte.', es: 'Precios estables. Sin descuentos.', nl: 'Stabiele prijzen. Geen kortingen.', sv: 'Stabila priser. Inga rabatter.' },
    statementParagraphs: [
      {
        en: 'AMARA is not the cheapest option, and it is not designed to be. Reliable quality, care, and continuous reinvestment have real costs.',
        de: 'AMARA ist nicht die günstigste Option, und sie ist auch nicht dafür gedacht. Verlässliche Qualität, Sorgfalt und kontinuierliche Reinvestition haben reale Kosten.',
        es: 'AMARA no es la opción más barata, ni pretende serlo. La calidad fiable, el cuidado y la reinversión continua tienen costes reales.',
        nl: 'AMARA is niet de goedkoopste optie, en dat is ook niet het doel. Betrouwbare kwaliteit, zorg en voortdurende herinvestering hebben echte kosten.',
        sv: 'AMARA är inte det billigaste alternativet, och det är inte heller avsikten. Pålitlig kvalitet, omsorg och kontinuerliga återinvesteringar har verkliga kostnader.'
      },
      {
        en: 'Pricing is stable, transparent, and intentional, without flash deals or artificial promotions.',
        de: 'Unsere Preise sind stabil, transparent und bewusst gesetzt, ohne Blitzangebote oder künstliche Aktionen.',
        es: 'El precio es estable, transparente e intencionado, sin ofertas relámpago ni promociones artificiales.',
        nl: 'De prijs is stabiel, transparant en bewust gekozen, zonder flitsdeals of kunstmatige promoties.',
        sv: 'Prissättningen är stabil, transparent och genomtänkt, utan blixtkampanjer eller konstgjorda erbjudanden.'
      }
    ],
    statementStrong: { en: 'If you are looking for the lowest price, AMARA is not the right fit.', de: 'Wenn ihr nach dem niedrigsten Preis sucht, passt AMARA nicht zu euch.', es: 'Si buscáis el precio más bajo, AMARA no es la opción adecuada.', nl: 'Als jullie op zoek zijn naar de laagste prijs, past AMARA niet bij jullie.', sv: 'Om ni letar efter det lägsta priset är AMARA inte rätt val.' }
  },
  locations: {
    title: { en: 'Our locations in Andalusia', de: 'Unsere Standorte in Andalusien', es: 'Nuestras ubicaciones en Andalucía', nl: 'Onze locaties in Andalusië', sv: 'Våra platser i Andalusien' },
    lead: {
      en: 'Each AMARA location is chosen for atmosphere, rhythm, and the kind of stay it makes possible.',
      de: 'Jeder Standort von AMARA wird nach Atmosphäre, Rhythmus und der Art des Aufenthalts ausgewählt, die er ermöglicht.',
      es: 'Cada ubicación de AMARA se elige por su atmósfera, su ritmo y el tipo de estancia que hace posible.',
      nl: 'Elke locatie van AMARA wordt gekozen om de sfeer, het ritme en het soort verblijf dat ze mogelijk maakt.',
      sv: 'Varje AMARA-plats väljs för sin atmosfär, sin rytm och den typ av vistelse den möjliggör.'
    },
    locations: [
      { name: 'Frigiliana', copy: { en: 'Quiet depth, white-village calm, and a sense of time.', de: 'Ruhige Tiefe, die Gelassenheit eines weißen Dorfes und ein Gefühl für Zeit.', es: 'Profundidad serena, calma de pueblo blanco y una sensación distinta del tiempo.', nl: 'Stille diepgang, de rust van een wit dorp en een bijzonder tijdsgevoel.', sv: 'Lugn fördjupning, den vita byns stillhet och en känsla för tid.' } },
      { name: 'Nerja', copy: { en: 'Sea rhythm, authentic energy, with balance and ease.', de: 'Meeresrhythmus, authentische Energie, mit Balance und Leichtigkeit.', es: 'Ritmo de mar, energía auténtica, con equilibrio y facilidad.', nl: 'Ritme van de zee, authentieke energie, met balans en gemak.', sv: 'Havets rytm, genuin energi, med balans och lätthet.' } },
      { name: 'Tarifa', copy: { en: 'Wide horizons, light and wind, active outdoors, calm indoors.', de: 'Weite Horizonte, Licht und Wind, aktiv draußen, ruhig drinnen.', es: 'Horizontes abiertos, luz y viento, activo fuera y sereno dentro.', nl: 'Wijde horizonten, licht en wind, actief buiten en rustig binnen.', sv: 'Vida horisonter, ljus och vind, aktivt utomhus och lugnt inomhus.' } }
    ]
  },
  host: {
    title: { en: 'Your host', de: 'Euer Gastgeber', es: 'Vuestro anfitrión', nl: 'Jullie host', sv: 'Er värd' },
    role: { en: 'Robert — Founder & Host', de: 'Robert — Gründer & Gastgeber', es: 'Robert — Fundador y anfitrión', nl: 'Robert — Oprichter & host', sv: 'Robert — Grundare och värd' },
    imageAlt: { en: 'Robert, founder and host of AMARA', de: 'Robert, Gründer und Gastgeber von AMARA', es: 'Robert, fundador y anfitrión de AMARA', nl: 'Robert, oprichter en host van AMARA', sv: 'Robert, grundare och värd för AMARA' },
    stats: [
      { label: { en: 'Fast replies', de: 'Schnelle Antworten', es: 'Respuestas rápidas', nl: 'Snelle reacties', sv: 'Snabba svar' }, value: { en: 'Clear, direct, reliable communication.', de: 'Klare, direkte und verlässliche Kommunikation.', es: 'Comunicación clara, directa y fiable.', nl: 'Duidelijke, directe en betrouwbare communicatie.', sv: 'Tydlig, direkt och pålitlig kommunikation.' } },
      { label: { en: 'Present, not intrusive', de: 'Präsent, nicht aufdringlich', es: 'Presente, sin ser invasivo', nl: 'Aanwezig, niet opdringerig', sv: 'Närvarande, inte påträngande' }, value: { en: 'Reachable when needed, invisible otherwise.', de: 'Erreichbar, wenn ihr uns braucht, ansonsten unsichtbar.', es: 'Disponible cuando hace falta e invisible el resto del tiempo.', nl: 'Bereikbaar wanneer nodig en verder op de achtergrond.', sv: 'Nåbar när det behövs och annars i bakgrunden.' } },
      { label: { en: 'Languages', de: 'Sprachen', es: 'Idiomas', nl: 'Talen', sv: 'Språk' }, value: { en: 'DE · EN · ES', de: 'DE · EN · ES', es: 'DE · EN · ES', nl: 'DE · EN · ES', sv: 'DE · EN · ES' } },
      { label: { en: 'Insider guidance', de: 'Insider-Tipps', es: 'Recomendaciones locales', nl: 'Lokale aanbevelingen', sv: 'Lokala rekommendationer' }, value: { en: 'Curated recommendations for calm, authentic experiences.', de: 'Sorgfältig ausgewählte Empfehlungen für ruhige, authentische Erlebnisse.', es: 'Recomendaciones cuidadas para experiencias auténticas y serenas.', nl: 'Samengestelde aanbevelingen voor rustige, authentieke ervaringen.', sv: 'Utvalda rekommendationer för lugna och genuina upplevelser.' } }
    ],
    subtitle: { en: 'A small team. One standard.', de: 'Ein kleines Team. Ein Standard.', es: 'Un equipo pequeño. Un mismo estándar.', nl: 'Een klein team. Eén standaard.', sv: 'Ett litet team. En standard.' },
    teamItems: [
      { title: { en: 'Small and trusted', de: 'Klein und vertraut', es: 'Pequeño y de confianza', nl: 'Klein en vertrouwd', sv: 'Litet och pålitligt' }, copy: { en: 'A team that shares the same standards.', de: 'Ein Team, das dieselben Standards teilt.', es: 'Un equipo que comparte los mismos estándares.', nl: 'Een team dat dezelfde standaarden deelt.', sv: 'Ett team som delar samma standarder.' } },
      { title: { en: 'The same every stay', de: 'Bei jedem Aufenthalt gleich', es: 'Igual en cada estancia', nl: 'Hetzelfde bij elk verblijf', sv: 'Samma vid varje vistelse' }, copy: { en: 'Care applied consistently, not selectively.', de: 'Sorgfalt, die konsequent angewendet wird, nicht selektiv.', es: 'Un cuidado aplicado con constancia, no de forma selectiva.', nl: 'Zorg die consequent wordt toegepast, niet selectief.', sv: 'Omsorg som tillämpas konsekvent, inte selektivt.' } },
      { title: { en: 'Quiet execution', de: 'Leise umgesetzt', es: 'Ejecución silenciosa', nl: 'Stille uitvoering', sv: 'Diskret genomfört' }, copy: { en: 'Quality happens in the background, so the stay feels effortless.', de: 'Qualität geschieht im Hintergrund, damit sich der Aufenthalt mühelos anfühlt.', es: 'La calidad sucede en segundo plano para que la estancia se sienta natural.', nl: 'Kwaliteit gebeurt op de achtergrond, zodat het verblijf moeiteloos voelt.', sv: 'Kvalitet sker i bakgrunden så att vistelsen känns enkel.' } }
    ]
  },
  sustainability: {
    title: { en: 'AMARA Earth', de: 'AMARA Earth', es: 'AMARA Earth', nl: 'AMARA Earth', sv: 'AMARA Earth' },
    subtitle: { en: 'Sustainable by choice.', de: 'Nachhaltig aus Überzeugung.', es: 'Sostenible por elección.', nl: 'Duurzaam uit overtuiging.', sv: 'Hållbart av val.' },
    lead: {
      en: 'Sustainability at AMARA means practical decisions that reduce impact without reducing comfort.',
      de: 'Nachhaltigkeit bei AMARA bedeutet praktische Entscheidungen, die die Wirkung verringern, ohne den Komfort zu mindern.',
      es: 'La sostenibilidad en AMARA significa decisiones prácticas que reducen el impacto sin reducir la comodidad.',
      nl: 'Duurzaamheid bij AMARA betekent praktische keuzes die de impact verkleinen zonder comfort in te leveren.',
      sv: 'Hållbarhet hos AMARA betyder praktiska beslut som minskar påverkan utan att minska komforten.'
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
    title: { en: "If you value reliability, you'll feel at home here", de: 'Wenn ihr Verlässlichkeit schätzt, werdet ihr euch hier zu Hause fühlen', es: 'Si valoráis la fiabilidad, aquí os sentiréis como en casa', nl: 'Als jullie betrouwbaarheid waarderen, voelen jullie je hier thuis', sv: 'Om ni värdesätter pålitlighet kommer ni att känna er hemma här' },
    lead: {
      en: 'AMARA is for guests who appreciate calm execution, honest communication, and places that feel considered rather than staged.',
      de: 'AMARA ist für Gäste gedacht, die ruhige Abläufe, ehrliche Kommunikation und Orte schätzen, die durchdacht statt inszeniert wirken.',
      es: 'AMARA está pensado para huéspedes que aprecian una ejecución serena, una comunicación honesta y lugares pensados con criterio en vez de decorados.',
      nl: 'AMARA is er voor gasten die rustige uitvoering, eerlijke communicatie en plekken waarderen die doordacht voelen in plaats van geënsceneerd.',
      sv: 'AMARA är till för gäster som uppskattar lugnt genomförande, ärlig kommunikation och platser som känns genomtänkta i stället för iscensatta.'
    },
    note: {
      en: 'Many guests return because expectations are met quietly and consistently.',
      de: 'Viele Gäste kommen zurück, weil Erwartungen leise und verlässlich erfüllt werden.',
      es: 'Muchos huéspedes repiten porque las expectativas se cumplen con discreción y constancia.',
      nl: 'Veel gasten komen terug omdat verwachtingen rustig en consequent worden waargemaakt.',
      sv: 'Många gäster kommer tillbaka eftersom förväntningarna infrias lugnt och konsekvent.'
    },
    links: [
      { token: 'book', label: { en: 'Check Availability', de: 'Verfügbarkeit prüfen', es: 'Ver disponibilidad', nl: 'Beschikbaarheid bekijken', sv: 'Se tillgänglighet' } },
      { token: 'reviews_hub', label: { en: 'Guest reviews', de: 'Gästebewertungen', es: 'Reseñas', nl: 'Beoordelingen', sv: 'Gästomdömen' } },
      { token: 'direct_booking_benefits', label: { en: 'Direct booking benefits', de: 'Vorteile der Direktbuchung', es: 'Ventajas de reservar directo', nl: 'Voordelen van direct boeken', sv: 'Fördelar med direktbokning' } }
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
