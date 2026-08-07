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
      en: `Reviews · checked ${airbnbCheckedAtLabel.en}`,
      de: `Bewertungen · geprüft am ${airbnbCheckedAtLabel.de}`,
      es: `Reseñas · comprobadas el ${airbnbCheckedAtLabel.es}`,
      nl: `Reviews · gecontroleerd op ${airbnbCheckedAtLabel.nl}`,
      sv: `Recensioner · kontrollerat ${airbnbCheckedAtLabel.sv}`
    },
    title: {
      en: `${airbnbReviewEvidence.reviewCountLabel} Guest Reviews`,
      de: `${airbnbReviewEvidence.reviewCountLabel} Gästebewertungen`,
      es: `${airbnbReviewEvidence.reviewCountLabel} reseñas de huéspedes`,
      nl: `${airbnbReviewEvidence.reviewCountLabel} gastbeoordelingen`,
      sv: `${airbnbReviewEvidence.reviewCountLabel} gästrecensioner`
    },
    lead: {
      en: 'Quiet nights, spotless rooms, straight answers. Those are the three things guests keep coming back to — and that is what this page is about.',
      de: 'Ruhige Nächte, saubere Räume, klare Absprachen. Das sind die drei Dinge, die Gäste immer wieder nennen – und darum geht es auf dieser Seite.',
      es: 'Noches tranquilas, espacios limpios, respuestas claras. Son las tres cosas que los huéspedes repiten una y otra vez, y de eso trata esta página.',
      nl: 'Rustige nachten, schone kamers, duidelijke afspraken. Dat zijn de drie dingen die gasten steeds opnieuw noemen — en daar gaat deze pagina over.',
      sv: 'Lugna nätter, rena rum, tydliga besked. Det är de tre saker gästerna återkommer till — och det är vad den här sidan handlar om.'
    },
    supportText: {
      en: 'Every review here comes from a real guest, and you can check them yourself.',
      de: 'Alle Bewertungen stammen von echten Gästen – und lassen sich nachprüfen.',
      es: 'Todas las reseñas son de huéspedes reales y se pueden comprobar.',
      nl: 'Alle beoordelingen komen van echte gasten en zijn na te kijken.',
      sv: 'Alla omdömen kommer från riktiga gäster och går att kontrollera.'
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
      en: 'The short version',
      de: 'Kurz zusammengefasst',
      es: 'En resumen',
      nl: 'Kort samengevat',
      sv: 'Kort sammanfattat'
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
      en: 'Guests write about three things most often: that they slept well, that everything was clean, and that the small things were right.',
      de: 'Am häufigsten schreiben Gäste über drei Dinge: dass sie gut geschlafen haben, dass alles sauber war und dass die Kleinigkeiten stimmten.',
      es: 'Los huéspedes hablan sobre todo de tres cosas: que durmieron bien, que todo estaba limpio y que los detalles estaban cuidados.',
      nl: 'Gasten schrijven het vaakst over drie dingen: dat ze goed geslapen hebben, dat alles schoon was en dat de kleine dingen klopten.',
      sv: 'Gästerna skriver oftast om tre saker: att de sov gott, att allt var rent och att detaljerna stämde.'
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
      en: 'Translated from the original.',
      de: 'Aus dem Original übersetzt.',
      es: 'Traducidas del original.',
      nl: 'Vertaald uit het origineel.',
      sv: 'Översatt från originalet.'
    },
    mentionsTitle: {
      en: 'What guests repeatedly mention',
      de: 'Was Gäste immer wieder hervorheben',
      es: 'Lo que los huéspedes mencionan una y otra vez',
      nl: 'Wat gasten steeds opnieuw benoemen',
      sv: 'Det som gäster återkommande lyfter fram'
    },
    mentionsNote: {
      en: 'You cannot claim calm. It comes from many small decisions, made the same way every time.',
      de: 'Ruhe kann man nicht versprechen. Sie entsteht aus vielen kleinen Entscheidungen, die man jedes Mal wieder so trifft.',
      es: 'La calma no se promete. Nace de muchas decisiones pequeñas, tomadas igual cada vez.',
      nl: 'Rust kun je niet beloven. Die ontstaat uit veel kleine keuzes, elke keer opnieuw zo gemaakt.',
      sv: 'Lugn kan man inte lova. Det uppstår ur många små beslut, tagna likadant varje gång.'
    },
    awardsTitle: {
      en: 'Booking.com Traveller Review Awards 2025',
      de: 'Booking.com Traveller Review Awards 2025',
      es: 'Booking.com Traveller Review Awards 2025',
      nl: 'Booking.com Traveller Review Awards 2025',
      sv: 'Booking.com Traveller Review Awards 2025'
    },
    awardsBody: {
      en: 'These awards come from Booking.com and are based on what our guests rated.',
      de: 'Diese Auszeichnungen kommen von Booking.com und beruhen auf den Bewertungen unserer Gäste.',
      es: 'Estos premios vienen de Booking.com y se basan en las valoraciones de nuestros huéspedes.',
      nl: 'Deze awards komen van Booking.com en zijn gebaseerd op de beoordelingen van onze gasten.',
      sv: 'Utmärkelserna kommer från Booking.com och bygger på våra gästers omdömen.'
    },
    awardsSource: {
      en: 'Source: Booking.com Traveller Review Awards 2025.',
      de: 'Quelle: Booking.com Traveller Review Awards 2025.',
      es: 'Fuente: Booking.com Traveller Review Awards 2025.',
      nl: 'Bron: Booking.com Traveller Review Awards 2025.',
      sv: 'Källa: Booking.com Traveller Review Awards 2025.'
    },
    locationTitle: {
      en: 'Where are you heading?',
      de: 'Wohin möchtet ihr?',
      es: '¿Adónde queréis ir?',
      nl: 'Waar willen jullie heen?',
      sv: 'Vart vill ni?'
    },
    locationLead: {
      en: 'Each place has its own character — and its own reviews.',
      de: 'Jeder Ort hat seinen eigenen Charakter – und seine eigenen Bewertungen.',
      es: 'Cada sitio tiene su propio carácter y sus propias reseñas.',
      nl: 'Elke plek heeft zijn eigen karakter — en zijn eigen beoordelingen.',
      sv: 'Varje plats har sin egen karaktär — och sina egna omdömen.'
    },
    locationFrigiliana: {
      en: 'Design apartments in the old town. Quiet, romantic, with a terrace to sit out on.',
      de: 'Design-Apartments in der Altstadt. Ruhig, romantisch, mit Terrasse zum Sitzenbleiben.',
      es: 'Apartamentos de diseño en el casco antiguo. Tranquilos, románticos y con terraza para quedarse.',
      nl: 'Designappartementen in de oude kern. Rustig, romantisch, met een terras om op te blijven zitten.',
      sv: 'Designlägenheter i gamla byn. Lugnt, romantiskt, med terrass att bli sittande på.'
    },
    locationNerja: {
      en: 'A hundred metres from the beach, and quiet all the same. Lift to the door.',
      de: 'Hundert Meter zum Strand und trotzdem ruhig. Aufzug bis vor die Tür.',
      es: 'A cien metros de la playa y aun así tranquilo. Ascensor hasta la puerta.',
      nl: 'Honderd meter van het strand en toch rustig. Lift tot aan de deur.',
      sv: 'Hundra meter från stranden och ändå tyst. Hiss ända fram till dörren.'
    },
    locationTarifa: {
      en: 'Wind, wide horizons and light. Outdoors by day, quiet in the evening.',
      de: 'Wind, Weite und Licht. Tagsüber draußen, abends zur Ruhe kommen.',
      es: 'Viento, horizontes abiertos y luz. Fuera de día, calma por la tarde.',
      nl: 'Wind, wijde horizonten en licht. Overdag buiten, ’s avonds tot rust komen.',
      sv: 'Vind, vida horisonter och ljus. Ute på dagen, lugnt på kvällen.'
    },
    nextTitle: { en: 'What next?', de: 'Wie geht es weiter?', es: '¿Y ahora?', nl: 'Hoe verder?', sv: 'Hur går vi vidare?' },
    nextLead: {
      en: 'Have a look at the apartments. When one feels right, check the dates.',
      de: 'Schaut euch die Wohnungen an. Wenn eine passt, prüft einfach die Verfügbarkeit.',
      es: 'Echad un vistazo a los apartamentos. Cuando uno os encaje, consultad las fechas.',
      nl: 'Bekijk de appartementen. Als er een past, check dan gewoon de data.',
      sv: 'Titta på lägenheterna. När en känns rätt, kolla datumen.'
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
