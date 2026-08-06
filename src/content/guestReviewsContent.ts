import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import {
  airbnbCheckedAtLabel,
  airbnbRatingLabel,
  airbnbReviewEvidence
} from './reviewEvidence';
export const guestReviewsSeo: AmaraAuthoringSeo = {
  version: '2026-03-23-reviews-v1.0-C',
  pageType: 'C',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: 'Verified Guest Reviews',
      description: 'Verified guest reviews, award proof, and trust signals for AMARA holiday apartments in Frigiliana, Nerja, and Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Verifizierte Gästebewertungen',
      description: 'Verifizierte Gästebewertungen, Auszeichnungen und Vertrauenssignale für AMARA Ferienwohnungen in Frigiliana, Nerja und Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Reseñas verificadas de huéspedes',
      description: 'Reseñas verificadas, premios y señales de confianza para los apartamentos vacacionales AMARA en Frigiliana, Nerja y Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Geverifieerde gastbeoordelingen',
      description: 'Geverifieerde gastbeoordelingen, awards en vertrouwenssignalen voor AMARA vakantieappartementen in Frigiliana, Nerja en Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: 'Verifierade gästrecensioner',
      description: 'Verifierade gästrecensioner, utmärkelser och trygghetssignaler för AMARA semesterlägenheter i Frigiliana, Nerja och Tarifa.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  },
  ogImage: '/images/hero-frigiliana.jpg'
};

export const guestReviewsCopy = {
  hero: {
    subtitle: {
      en: `Reviews · evidence checked: ${airbnbCheckedAtLabel.en}`,
      de: `Bewertungen · Nachweis geprüft: ${airbnbCheckedAtLabel.de}`,
      es: `Reseñas · datos comprobados: ${airbnbCheckedAtLabel.es}`,
      nl: `Reviews · bewijs gecontroleerd: ${airbnbCheckedAtLabel.nl}`,
      sv: `Recensioner · uppgifter kontrollerade: ${airbnbCheckedAtLabel.sv}`
    },
    title: {
      en: `${airbnbReviewEvidence.reviewCountLabel} Guest Reviews`,
      de: `${airbnbReviewEvidence.reviewCountLabel} Gästebewertungen`,
      es: `${airbnbReviewEvidence.reviewCountLabel} reseñas de huéspedes`,
      nl: `${airbnbReviewEvidence.reviewCountLabel} gastbeoordelingen`,
      sv: `${airbnbReviewEvidence.reviewCountLabel} gästrecensioner`
    },
    lead: {
      en: 'AMARA is built like a well-run home: quiet nights, spotless spaces, and clear communication. This page is a calm summary of what guests consistently confirm.',
      de: 'AMARA funktioniert wie ein hervorragend geführtes Zuhause: ruhige Nächte, makellose Räume und klare Kommunikation. Diese Seite fasst ruhig zusammen, was Gäste immer wieder bestätigen.',
      es: 'AMARA está diseñado como un hogar impecablemente gestionado: noches tranquilas, espacios impecables y comunicación clara. Esta página resume con calma lo que los huéspedes confirman de forma constante.',
      nl: 'AMARA is opgezet als een uitstekend georganiseerd thuis: rustige nachten, onberispelijke ruimtes en heldere communicatie. Deze pagina vat rustig samen wat gasten steeds opnieuw bevestigen.',
      sv: 'AMARA är uppbyggt som ett välskött hem: lugna nätter, skinande rena miljöer och tydlig kommunikation. Den här sidan sammanfattar lugnt det som gäster konsekvent bekräftar.'
    },
    supportText: {
      en: 'Third-party platform proof, distilled into one calm overview.',
      de: 'Nachweise von Drittplattformen, verdichtet zu einer ruhigen Gesamtübersicht.',
      es: 'Pruebas de plataformas externas, condensadas en una visión clara y serena.',
      nl: 'Bewijs van externe platforms, samengebracht in één rustige totaalweergave.',
      sv: 'Verifiering från tredjepartsplattformar, samlad i en lugn helhetsöversikt.'
    },
    ctaAbout: { en: 'About Us', de: 'Über uns', es: 'Sobre nosotros', nl: 'Over ons', sv: 'Om oss' },
    ctaBenefits: {
      en: 'Direct Booking Benefits',
      de: 'Vorteile der Direktbuchung',
      es: 'Ventajas de reserva directa',
      nl: 'Voordelen van direct boeken',
      sv: 'Fördelar med direktbokning'
    }
  },
  sections: {
    summaryTitle: {
      en: 'A simple proof summary',
      de: 'Eine klare Zusammenfassung der Nachweise',
      es: 'Un resumen claro de las pruebas',
      nl: 'Een heldere samenvatting van het bewijs',
      sv: 'En tydlig sammanfattning av bevisen'
    },
    summaryLead: {
      en: `★ ${airbnbRatingLabel.en} / 5 • ${airbnbReviewEvidence.reviewCountLabel} guest reviews`,
      de: `★ ${airbnbRatingLabel.de} / 5 • ${airbnbReviewEvidence.reviewCountLabel} Gästebewertungen`,
      es: `★ ${airbnbRatingLabel.es} / 5 • ${airbnbReviewEvidence.reviewCountLabel} reseñas de huéspedes`,
      nl: `★ ${airbnbRatingLabel.nl} / 5 • ${airbnbReviewEvidence.reviewCountLabel} gastbeoordelingen`,
      sv: `★ ${airbnbRatingLabel.sv} / 5 • ${airbnbReviewEvidence.reviewCountLabel} gästrecensioner`
    },
    evidenceSource: {
      en: `Source: Airbnb host profile · checked ${airbnbCheckedAtLabel.en}`,
      de: `Quelle: Airbnb-Gastgeberprofil · geprüft am ${airbnbCheckedAtLabel.de}`,
      es: `Fuente: perfil de anfitrión en Airbnb · comprobado el ${airbnbCheckedAtLabel.es}`,
      nl: `Bron: Airbnb-hostprofiel · gecontroleerd op ${airbnbCheckedAtLabel.nl}`,
      sv: `Källa: värdprofil på Airbnb · kontrollerad ${airbnbCheckedAtLabel.sv}`
    },
    summaryBodyOne: {
      en: 'We keep it simple: strong sleep comfort, reliable cleanliness, and small details that make a stay feel easy.',
      de: 'Wir halten es bewusst einfach: hoher Schlafkomfort, verlässliche Sauberkeit und kleine Details, die den Aufenthalt leicht wirken lassen.',
      es: 'Lo mantenemos simple: gran confort de descanso, limpieza fiable y pequeños detalles que hacen la estancia fácil.',
      nl: 'We houden het bewust eenvoudig: sterk slaapcomfort, betrouwbare netheid en kleine details die een verblijf moeiteloos maken.',
      sv: 'Vi håller det medvetet enkelt: hög sovkomfort, pålitlig renlighet och små detaljer som gör vistelsen enkel.'
    },
    quote: {
      en: "This is not just a place to stay - it's a refuge that invites calm, connection, and gratitude.",
      de: 'Das ist nicht nur ein Ort zum Übernachten - es ist ein Rückzugsort, der Ruhe, Nähe und Dankbarkeit entstehen lässt.',
      es: 'Esto no es solo un lugar para alojarse: es un refugio que invita a la calma, la conexión y la gratitud.',
      nl: 'Dit is niet alleen een plek om te verblijven - het is een toevluchtsoord dat rust, verbondenheid en dankbaarheid brengt.',
      sv: 'Det här är inte bara en plats att bo på - det är en fristad som bjuder in till lugn, närhet och tacksamhet.'
    },
    reviewsTitle: {
      en: 'Three original guest reviews',
      de: 'Drei originale Gästebewertungen',
      es: 'Tres reseñas originales de huéspedes',
      nl: 'Drie originele gastbeoordelingen',
      sv: 'Tre originalrecensioner från gäster'
    },
    reviewsNote: {
      en: 'Translated for clarity.',
      de: 'Für Klarheit übersetzt.',
      es: 'Traducidas para mayor claridad.',
      nl: 'Vertaald voor duidelijkheid.',
      sv: 'Översatt för tydlighet.'
    },
    mentionsTitle: {
      en: 'What guests repeatedly mention',
      de: 'Was Gäste immer wieder hervorheben',
      es: 'Lo que los huéspedes mencionan una y otra vez',
      nl: 'Wat gasten steeds opnieuw benoemen',
      sv: 'Det som gäster återkommande lyfter fram'
    },
    mentionsNote: {
      en: "Calm is not a claim - it's the result of many small decisions done consistently.",
      de: 'Ruhe ist kein Werbeversprechen - sie ist das Ergebnis vieler kleiner, konsequent umgesetzter Entscheidungen.',
      es: 'La calma no es una promesa vacía: es el resultado de muchas pequeñas decisiones aplicadas con constancia.',
      nl: 'Rust is geen claim - het is het resultaat van veel kleine keuzes die consequent worden uitgevoerd.',
      sv: 'Lugn är inget påstående - det är resultatet av många små beslut som genomförs konsekvent.'
    },
    awardsTitle: {
      en: 'Booking.com Traveller Review Awards 2025',
      de: 'Booking.com Traveller Review Awards 2025',
      es: 'Booking.com Traveller Review Awards 2025',
      nl: 'Booking.com Traveller Review Awards 2025',
      sv: 'Booking.com Traveller Review Awards 2025'
    },
    awardsBody: {
      en: 'The awards listed here document recognition on Booking.com.',
      de: 'Die hier aufgeführten Auszeichnungen dokumentieren die Anerkennung auf Booking.com.',
      es: 'Los premios aquí indicados documentan el reconocimiento en Booking.com.',
      nl: 'De hier vermelde awards documenteren de erkenning op Booking.com.',
      sv: 'Utmärkelserna som listas här dokumenterar erkännandet på Booking.com.'
    },
    awardsSource: {
      en: 'Award source: Booking.com Traveller Review Awards 2025 (based on verified guest reviews).',
      de: 'Auszeichnungsquelle: Booking.com Traveller Review Awards 2025 (auf Basis verifizierter Gästebewertungen).',
      es: 'Fuente del reconocimiento: Booking.com Traveller Review Awards 2025 (basado en reseñas verificadas de huéspedes).',
      nl: 'Bron van de award: Booking.com Traveller Review Awards 2025 (gebaseerd op geverifieerde gastbeoordelingen).',
      sv: 'Källa för utmärkelsen: Booking.com Traveller Review Awards 2025 (baserat på verifierade gästrecensioner).'
    },
    locationTitle: {
      en: 'Choose your location',
      de: 'Wählt euren Standort',
      es: 'Elegid vuestra ubicación',
      nl: 'Kies jullie locatie',
      sv: 'Välj er plats'
    },
    locationLead: {
      en: "For locally relevant proof and awards, pick the place you're considering.",
      de: 'Für lokal relevante Nachweise und Auszeichnungen wählt den Ort, den ihr gerade in Betracht zieht.',
      es: 'Para ver pruebas y reconocimientos relevantes por zona, elegid el lugar que estáis valorando.',
      nl: 'Kies de locatie die jullie overwegen voor lokaal relevant bewijs en bijbehorende awards.',
      sv: 'Välj den plats ni överväger för lokalt relevanta verifieringar och utmärkelser.'
    },
    locationFrigiliana: {
      en: 'Design apartments in the old village. Quiet, romantic stays with terraces and calm details.',
      de: 'Design-Apartments im alten Dorf. Ruhige, romantische Aufenthalte mit Terrassen und liebevollen Details.',
      es: 'Apartamentos de diseño en el casco histórico. Estancias tranquilas y románticas con terrazas y detalles cuidados.',
      nl: 'Designappartementen in het oude dorp. Rustige, romantische verblijven met terrassen en verfijnde details.',
      sv: 'Designlägenheter i den gamla byn. Lugna, romantiska vistelser med terrasser och omsorgsfulla detaljer.'
    },
    locationNerja: {
      en: 'Beachside stay, easy access. Coastal days, comfortable nights - simple and well-organised.',
      de: 'Aufenthalt am Meer, unkompliziert erreichbar. Küstentage, komfortable Nächte - einfach und gut organisiert.',
      es: 'Estancia junto al mar, acceso fácil. Días de costa y noches cómodas: simple, claro y bien organizado.',
      nl: 'Verblijf aan zee, makkelijk bereikbaar. Kustdagen en comfortabele nachten - eenvoudig en goed georganiseerd.',
      sv: 'Boende nära stranden med enkel access. Dagar vid kusten och bekväma nätter - enkelt och välorganiserat.'
    },
    locationTarifa: {
      en: 'Wide horizons, wind and light. Active outdoors, calm indoors - family & surf rhythm.',
      de: 'Weite Horizonte, Wind und Licht. Draußen aktiv, drinnen ruhig - im Family-&-Surf-Rhythmus.',
      es: 'Horizontes abiertos, viento y luz. Activo fuera, sereno dentro: ritmo Family & Surf.',
      nl: 'Wijde horizonten, wind en licht. Buiten actief, binnen rustig - het Family & Surf-ritme.',
      sv: 'Vida horisonter, vind och ljus. Aktivt utomhus, lugnt inomhus - Family & Surf-rytmen.'
    },
    nextTitle: { en: 'Next step', de: 'Nächster Schritt', es: 'Siguiente paso', nl: 'Volgende stap', sv: 'Nästa steg' },
    nextLead: {
      en: "Next: explore the apartments - and use the availability button when you're ready.",
      de: 'Als Nächstes: entdeckt die Apartments - und nutzt den Verfügbarkeits-Button, wenn ihr bereit seid.',
      es: 'Siguiente paso: explorad los apartamentos y usad el botón de disponibilidad cuando estéis listos.',
      nl: 'Volgende stap: verken de appartementen en gebruik de beschikbaarheidsknop zodra jullie klaar zijn.',
      sv: 'Nästa steg: utforska lägenheterna och använd tillgänglighetsknappen när ni är redo.'
    },
    ctaBook: {
      en: 'Check Availability',
      de: 'Verfügbarkeit prüfen',
      es: 'Consultar disponibilidad',
      nl: 'Beschikbaarheid checken',
      sv: 'Se tillgänglighet'
    },
    ctaExplore: {
      en: 'Explore locations',
      de: 'Standorte entdecken',
      es: 'Explorar ubicaciones',
      nl: 'Locaties ontdekken',
      sv: 'Utforska platser'
    },
    ctaBenefits: {
      en: 'Direct booking benefits',
      de: 'Vorteile der Direktbuchung',
      es: 'Ventajas de reserva directa',
      nl: 'Voordelen van direct boeken',
      sv: 'Fördelar med direktbokning'
    }
  },
  reviews: [
    {
      meta: {
        en: 'Lina - Madrid, Spain',
        de: 'Lina - Madrid, Spanien',
        es: 'Lina - Madrid, España',
        nl: 'Lina - Madrid, Spanje',
        sv: 'Lina - Madrid, Spanien'
      },
      copy: {
        en: "Robert's place is one of the most amazing stays I've ever had! The home is magical, the cleanliness is impeccable, and Frigiliana is in the top three most beautiful villages I've ever visited. The apartment has the comfort of a 5-star stay and the terrace left us speechless. We had an unforgettable time - thank you, Robert! We can't wait to come back soon.",
        de: 'Roberts Unterkunft war einer der beeindruckendsten Aufenthalte, die ich je hatte. Das Zuhause ist magisch, die Sauberkeit makellos, und Frigiliana gehört zu den drei schönsten Dörfern, die ich je besucht habe. Das Apartment bietet den Komfort eines 5-Sterne-Aufenthalts, und die Terrasse hat uns sprachlos gemacht. Es war unvergesslich - danke, Robert! Wir kommen sehr gern bald zurück.',
        es: '¡El alojamiento de Robert ha sido una de las estancias más increíbles que hemos vivido! La casa es mágica, la limpieza impecable y Frigiliana está entre los tres pueblos más bonitos que he visitado. El apartamento tiene confort de cinco estrellas y la terraza nos dejó sin palabras. Fue inolvidable. ¡Gracias, Robert! Estamos deseando volver pronto.',
        nl: 'De plek van Robert was een van de meest bijzondere verblijven die ik ooit heb gehad. Het huis is magisch, de netheid onberispelijk en Frigiliana behoort tot de drie mooiste dorpen die ik ooit heb bezocht. Het appartement voelt als een vijfsterrenverblijf en het terras maakte ons sprakeloos. We hadden een onvergetelijke tijd - dank je, Robert! We komen graag snel terug.',
        sv: 'Roberts boende är en av de mest fantastiska vistelser jag någonsin haft. Hemmet är magiskt, städningen är oklanderlig och Frigiliana är en av de tre vackraste byar jag har besökt. Lägenheten har femstjärnig komfort och terrassen gjorde oss mållösa. Vi hade en oförglömlig tid - tack, Robert! Vi längtar redan efter att komma tillbaka.'
      }
    },
    {
      meta: {
        en: 'Scott & Michelle - Vancouver, Canada',
        de: 'Scott & Michelle - Vancouver, Kanada',
        es: 'Scott y Michelle - Vancouver, Canadá',
        nl: 'Scott & Michelle - Vancouver, Canada',
        sv: 'Scott & Michelle - Vancouver, Kanada'
      },
      copy: {
        en: 'This is not just a place to stay - it is a refuge that invites calm, connection, and gratitude. We carry this experience in our hearts and know we will return one day. Truly, it felt like paradise.',
        de: 'Das ist nicht nur ein Ort zum Übernachten - es ist ein Rückzugsort, der Ruhe, Verbundenheit und Dankbarkeit entstehen lässt. Wir tragen diese Erfahrung im Herzen und wissen, dass wir eines Tages zurückkehren werden. Es fühlte sich wirklich wie ein kleines Paradies an.',
        es: 'Esto no es solo un lugar para quedarse: es un refugio que invita a la calma, la conexión y la gratitud. Nos llevamos esta experiencia en el corazón y sabemos que volveremos algún día. De verdad, se sintió como un paraíso.',
        nl: 'Dit is niet zomaar een plek om te overnachten - het is een toevluchtsoord dat rust, verbinding en dankbaarheid oproept. We dragen deze ervaring in ons hart en weten dat we ooit terugkomen. Het voelde echt als een paradijs.',
        sv: 'Det här är inte bara en plats att bo på - det är en fristad som bjuder in till lugn, samhörighet och tacksamhet. Vi bär med oss upplevelsen i hjärtat och vet att vi kommer tillbaka en dag. Det kändes verkligen som ett paradis.'
      }
    },
    {
      meta: {
        en: 'Linda - Rosrath, Germany',
        de: 'Linda - Rösrath, Deutschland',
        es: 'Linda - Rösrath, Alemania',
        nl: 'Linda - Rösrath, Duitsland',
        sv: 'Linda - Rösrath, Tyskland'
      },
      copy: {
        en: "The special aesthetic and atmosphere of the apartment and terrace - combined with real functionality - made it feel like a true home away from home. Robert's communication was always immediate, proactive, and extremely friendly. We would love to come back!",
        de: 'Die besondere Ästhetik und Atmosphäre von Apartment und Terrasse - kombiniert mit echter Funktionalität - machten den Aufenthalt zu einem zweiten Zuhause. Roberts Kommunikation war jederzeit schnell, proaktiv und außergewöhnlich freundlich. Wir kommen sehr gern wieder.',
        es: 'La estética y la atmósfera del apartamento y la terraza, combinadas con una funcionalidad real, hicieron que todo se sintiera como un hogar fuera de casa. La comunicación de Robert fue siempre inmediata, proactiva y muy amable. Nos encantaría volver.',
        nl: 'De bijzondere esthetiek en sfeer van appartement en terras, gecombineerd met echte functionaliteit, gaf het gevoel van een tweede thuis. Roberts communicatie was altijd snel, proactief en ontzettend vriendelijk. We komen heel graag terug.',
        sv: 'Den särskilda estetiken och atmosfären i lägenheten och på terrassen, i kombination med verklig funktionalitet, gjorde att det kändes som ett andra hem. Roberts kommunikation var alltid snabb, proaktiv och mycket vänlig. Vi kommer gärna tillbaka.'
      }
    }
  ],
  proofPoints: {
    en: [
      'Exceptional cleanliness - Spotless preparation, consistently confirmed.',
      'Quiet nights & deep sleep - Sleep comfort guests notice immediately.',
      'Comfort details that feel "easy" - Practical design choices, not show-room styling.',
      'Fast, clear communication - Direct answers, reliable coordination.',
      'Space, light & terraces - A stay that feels calm to inhabit.'
    ],
    de: [
      'Außergewöhnliche Sauberkeit - Makellose Vorbereitung, immer wieder bestätigt.',
      'Ruhige Nächte & tiefer Schlaf - Schlafkomfort, den Gäste sofort spüren.',
      'Komfortdetails, die sich leicht anfühlen - Praktische Entscheidungen statt Showroom-Inszenierung.',
      'Schnelle, klare Kommunikation - Direkte Antworten und verlässliche Abstimmung.',
      'Raum, Licht & Terrassen - Ein Aufenthalt, der spürbar Ruhe vermittelt.'
    ],
    es: [
      'Limpieza excepcional - Preparación impecable, confirmada de forma constante.',
      'Noches tranquilas y descanso profundo - Un confort de sueño que se percibe enseguida.',
      'Detalles de confort que hacen todo fácil - Decisiones prácticas, no decoración de escaparate.',
      'Comunicación rápida y clara - Respuestas directas y coordinación fiable.',
      'Espacio, luz y terrazas - Una estancia que se vive con calma.'
    ],
    nl: [
      'Uitzonderlijke netheid - Onberispelijke voorbereiding, keer op keer bevestigd.',
      'Stille nachten en diepe slaap - Slaapcomfort dat gasten direct opmerken.',
      'Comfortdetails die moeiteloos aanvoelen - Praktische keuzes, geen show-roomstyling.',
      'Snelle, heldere communicatie - Directe antwoorden en betrouwbare afstemming.',
      'Ruimte, licht en terrassen - Een verblijf dat merkbaar rust geeft.'
    ],
    sv: [
      'Exceptionell renlighet - Skinande förberedelse, konsekvent bekräftad.',
      'Lugna nätter och djup sömn - Sovkomfort som gäster märker direkt.',
      'Komfortdetaljer som känns enkla - Praktiska val, inte show-roomstyling.',
      'Snabb och tydlig kommunikation - Direkta svar och pålitlig samordning.',
      'Rymd, ljus och terrasser - En vistelse som präglas av lugn.'
    ]
  },
  awards: {
    frigiliana: ['La AMARA Lounis - 9.9 / 10', 'La AMARA Maha - 9.7 / 10', 'La AMARA Zaid - 9.7 / 10'],
    coast: ['AMARA Nerja Beachside - 9.3 / 10', 'AMARA Family & Surf - 9.9 / 10']
  }
} as const;

export const guestReviewsTrustLinks = [
  { token: 'about', label: 'About AMARA' },
  { token: 'reviews_hub', label: 'Guest Reviews' },
  { token: 'direct_booking_benefits', label: 'Direct Booking Benefits' }
];

export const guestReviewsFooterLabels = {
  amenities: {
    en: 'Amenities',
    de: 'Ausstattung',
    es: 'Servicios',
    nl: 'Voorzieningen',
    sv: 'Bekvämligheter'
  },
  faq_general: {
    en: 'Stay FAQ',
    de: 'Aufenthalts-FAQ',
    es: 'FAQ de la estancia',
    nl: 'Verblijfs-FAQ',
    sv: 'FAQ för vistelsen'
  },
  instagram: {
    en: 'Instagram',
    de: 'Instagram',
    es: 'Instagram',
    nl: 'Instagram',
    sv: 'Instagram'
  }
} as const;
