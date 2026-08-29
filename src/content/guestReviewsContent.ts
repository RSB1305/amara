import type { AmaraAuthoringSeo } from '../types/seo';
import {
  airbnbCheckedAtLabel,
  airbnbRatingLabel,
  airbnbReviewEvidence
} from './reviewEvidence';
import { trustLabels } from './trustLabels';
export const guestReviewsSeo: AmaraAuthoringSeo = {
  version: '2026-03-23-reviews-v1.0-C',
  pageType: 'C',
  entityKey: 'amara-brand',
  languages: {
    en: {
      title: `${airbnbReviewEvidence.reviewCountLabel} Guest Reviews – Frigiliana, Nerja, Tarifa`,
      description: `${airbnbReviewEvidence.reviewCountLabel} guest reviews for AMARA stays in Frigiliana, Nerja and Tarifa — read them on our public Airbnb profile, plus our Booking.com awards.`,
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: `${airbnbReviewEvidence.reviewCountLabel} Gästebewertungen – Frigiliana, Nerja, Tarifa`,
      description: `${airbnbReviewEvidence.reviewCountLabel} Gästebewertungen zu den AMARA-Unterkünften in Frigiliana, Nerja und Tarifa – im öffentlichen Airbnb-Profil nachzulesen, dazu die Auszeichnungen von Booking.com.`,
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: `${airbnbReviewEvidence.reviewCountLabel} reseñas – Frigiliana, Nerja, Tarifa`,
      description: `${airbnbReviewEvidence.reviewCountLabel} reseñas de los alojamientos AMARA en Frigiliana, Nerja y Tarifa: podéis leerlas en nuestro perfil público de Airbnb y consultar los premios de Booking.com.`,
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: `${airbnbReviewEvidence.reviewCountLabel} gastbeoordelingen – Frigiliana, Nerja, Tarifa`,
      description: `${airbnbReviewEvidence.reviewCountLabel} gastbeoordelingen over de AMARA-verblijven in Frigiliana, Nerja en Tarifa — na te lezen op ons openbare Airbnb-profiel, plus onze Booking.com-awards.`,
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title: `${airbnbReviewEvidence.reviewCountLabel} gästrecensioner – Frigiliana, Nerja, Tarifa`,
      description: `${airbnbReviewEvidence.reviewCountLabel} gästrecensioner om AMARA-boenden i Frigiliana, Nerja och Tarifa — läs dem på vår offentliga Airbnb-profil och se våra utmärkelser från Booking.com.`,
      robots: 'index, follow',
      canonical: 'auto'
    }
  },
  ogImage: '/images/hero-frigiliana.jpg'
};

export const guestReviewsCopy = {
  hero: {
    subtitle: {
      en: 'Trust, earned stay by stay.',
      de: 'Vertrauen entsteht mit jedem Aufenthalt.',
      es: 'La confianza se gana estancia a estancia.',
      nl: 'Vertrouwen groeit met elk verblijf.',
      sv: 'Förtroende byggs vistelse för vistelse.'
    },
    title: {
      en: `${airbnbReviewEvidence.reviewCountLabel} Guest Reviews`,
      de: `${airbnbReviewEvidence.reviewCountLabel} Gäste&shy;bewertungen`,
      es: `${airbnbReviewEvidence.reviewCountLabel} reseñas de huéspedes`,
      nl: `${airbnbReviewEvidence.reviewCountLabel} gast&shy;beoordelingen`,
      sv: `${airbnbReviewEvidence.reviewCountLabel} gästrecensioner`
    },
    lead: {
      en: 'A good night’s sleep, spotless rooms, and someone who answers quickly. Those are the three things that keep coming up in our reviews.',
      de: 'Gut geschlafen, alles sauber, und jemand, der schnell antwortet. Das sind die drei Dinge, die in unseren Bewertungen immer wieder auftauchen.',
      es: 'Dormir bien, todo limpio y alguien que responde rápido. Son las tres cosas que más se repiten en nuestras reseñas.',
      nl: 'Goed geslapen, alles schoon en iemand die snel reageert. Dat zijn de drie dingen die steeds terugkomen in onze beoordelingen.',
      sv: 'En god natts sömn, skinande rena rum och någon som svarar snabbt. Det är de tre saker som återkommer i våra gästrecensioner.'
    },
    supportText: {
      en: 'The reviews are available on our public Airbnb host profile, where you can read them directly.',
      de: 'Die Bewertungen findet ihr in unserem öffentlich zugänglichen Airbnb-Gastgeberprofil und könnt sie dort direkt nachlesen.',
      es: 'Las reseñas están disponibles en nuestro perfil público de anfitrión en Airbnb, donde podéis leerlas directamente.',
      nl: 'De beoordelingen staan op ons openbare Airbnb-hostprofiel, waar jullie ze rechtstreeks kunnen nalezen.',
      sv: 'Omdömena finns på vår offentliga värdprofil på Airbnb, där ni kan läsa dem direkt.'
    },
    ctaAbout: trustLabels.about,
    ctaBenefits: trustLabels.direct_booking_benefits
  },
  sections: {
    summaryTitle: {
      en: 'Reviews at a glance',
      de: 'Bewertungen auf einen Blick',
      es: 'Las reseñas de un vistazo',
      nl: 'Beoordelingen in één oogopslag',
      sv: 'Omdömen i korthet'
    },
    summaryLead: {
      en: `★ ${airbnbRatingLabel.en} / 5 • ${airbnbReviewEvidence.reviewCountLabel} guest reviews`,
      de: `★ ${airbnbRatingLabel.de} / 5 • ${airbnbReviewEvidence.reviewCountLabel} Gästebewertungen`,
      es: `★ ${airbnbRatingLabel.es} / 5 • ${airbnbReviewEvidence.reviewCountLabel} reseñas de huéspedes`,
      nl: `★ ${airbnbRatingLabel.nl} / 5 • ${airbnbReviewEvidence.reviewCountLabel} gastbeoordelingen`,
      sv: `★ ${airbnbRatingLabel.sv} / 5 • ${airbnbReviewEvidence.reviewCountLabel} gästrecensioner`
    },
    evidenceSource: {
      en: `Source: public Airbnb host profile · checked ${airbnbCheckedAtLabel.en}`,
      de: `Quelle: öffentliches Airbnb-Gastgeberprofil · geprüft am ${airbnbCheckedAtLabel.de}`,
      es: `Fuente: perfil público de anfitrión en Airbnb · consultado el ${airbnbCheckedAtLabel.es}`,
      nl: `Bron: openbaar Airbnb-hostprofiel · geraadpleegd op ${airbnbCheckedAtLabel.nl}`,
      sv: `Källa: offentlig värdprofil på Airbnb · kontrollerad ${airbnbCheckedAtLabel.sv}`
    },
    summaryBodyOne: {
      en: 'The figures give a quick overview. The individual guest experiences tell you more.',
      de: 'Die Zahlen geben einen schnellen Überblick. Mehr erzählen die persönlichen Erfahrungen der einzelnen Gäste.',
      es: 'Las cifras ofrecen una visión rápida. Las experiencias personales de cada huésped cuentan el resto.',
      nl: 'De cijfers geven een snel overzicht. De persoonlijke ervaringen van gasten vertellen meer.',
      sv: 'Siffrorna ger en snabb överblick. Gästernas personliga upplevelser berättar mer.'
    },
    reviewsTitle: {
      en: 'Three guests, in their own words',
      de: 'Drei Stimmen von Gästen',
      es: 'Tres huéspedes, en sus propias palabras',
      nl: 'Drie gasten aan het woord',
      sv: 'Tre gäster med egna ord'
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
      en: 'The same practical points come up most often: cleanliness, quiet nights, well-equipped apartments and quick replies.',
      de: 'Am häufigsten lesen wir von Sauberkeit, ruhigen Nächten, gut ausgestatteten Apartments und schnellen Antworten.',
      es: 'Lo que más se repite es muy concreto: limpieza, noches tranquilas, apartamentos bien equipados y respuestas rápidas.',
      nl: 'Dezelfde praktische punten komen het vaakst terug: netheid, rustige nachten, goed uitgeruste appartementen en snelle antwoorden.',
      sv: 'Samma praktiska saker nämns oftast: rent, lugna nätter, välutrustade lägenheter och snabba svar.'
    },
    awardsTitle: {
      en: 'Five Traveller Review Awards 2026',
      de: 'Fünf Traveller Review Awards 2026',
      es: 'Cinco Traveller Review Awards 2026',
      nl: 'Vijf Traveller Review Awards 2026',
      sv: 'Fem Traveller Review Awards 2026'
    },
    awardsBody: {
      en: 'Across Frigiliana, Nerja and Tarifa, five AMARA stays received a Booking.com Traveller Review Award in 2026 — based on guest reviews.',
      de: 'Von Frigiliana über Nerja bis Tarifa wurden fünf AMARA-Unterkünfte 2026 von Booking.com ausgezeichnet – auf Basis der Bewertungen unserer Gäste.',
      es: 'De Frigiliana a Nerja y Tarifa, cinco alojamientos AMARA han sido reconocidos por Booking.com en 2026 gracias a las valoraciones de nuestros huéspedes.',
      nl: 'In Frigiliana, Nerja en Tarifa ontvingen vijf AMARA-verblijven in 2026 een Booking.com Traveller Review Award, gebaseerd op beoordelingen van gasten.',
      sv: 'I Frigiliana, Nerja och Tarifa fick fem AMARA-boenden en Booking.com Traveller Review Award 2026, baserat på gästernas omdömen.'
    },
    awardsSource: {
      en: 'Source: Booking.com Traveller Review Awards 2026.',
      de: 'Quelle: Booking.com Traveller Review Awards 2026.',
      es: 'Fuente: Booking.com Traveller Review Awards 2026.',
      nl: 'Bron: Booking.com Traveller Review Awards 2026.',
      sv: 'Källa: Booking.com Traveller Review Awards 2026.'
    },
    nextTitle: {
      en: 'Stays and availability',
      de: 'Unterkünfte und Verfügbarkeit',
      es: 'Alojamientos y disponibilidad',
      nl: 'Verblijven en beschikbaarheid',
      sv: 'Boenden och tillgänglighet'
    },
    nextLead: {
      en: 'Six stays in Frigiliana, Nerja and Tarifa, with current prices for your dates.',
      de: 'Sechs Unterkünfte in Frigiliana, Nerja und Tarifa – mit aktuellen Preisen für eure Reisedaten.',
      es: 'Seis alojamientos en Frigiliana, Nerja y Tarifa, con precios actuales para vuestras fechas.',
      nl: 'Zes verblijven in Frigiliana, Nerja en Tarifa, met actuele prijzen voor jullie reisdata.',
      sv: 'Sex boenden i Frigiliana, Nerja och Tarifa, med aktuella priser för era datum.'
    },
    ctaBook: trustLabels.book,
    ctaExplore: trustLabels.romantic_hideaways,
    ctaBenefits: trustLabels.direct_booking_benefits
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
        nl: 'Roberts accommodatie behoort tot de bijzonderste plekken waar ik ooit heb verbleven. Het huis is magisch, alles is onberispelijk schoon en Frigiliana behoort tot de drie mooiste dorpen die ik ooit heb bezocht. Het appartement biedt het comfort van een vijfsterrenverblijf en het terras maakte ons sprakeloos. We hadden een onvergetelijke tijd - dank je, Robert! We kijken ernaar uit om snel terug te komen.',
        sv: 'Roberts boende är en av de mest fantastiska platser jag någonsin har bott på. Hemmet är magiskt, allt är oklanderligt rent och Frigiliana är en av de tre vackraste byar jag har besökt. Lägenheten har samma komfort som ett femstjärnigt boende och terrassen gjorde oss mållösa. Vi hade en oförglömlig tid - tack, Robert! Vi längtar efter att snart komma tillbaka.'
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
        de: 'Das ist nicht nur ein Ort zum Übernachten - es ist ein Rückzugsort, der Ruhe, Verbundenheit und Dankbarkeit entstehen lässt. Wir tragen diese Erfahrung im Herzen und wissen, dass wir eines Tages zurückkehren werden. Es fühlte sich wirklich wie im Paradies an.',
        es: 'Esto no es solo un lugar para alojarse: es un refugio que invita a la calma, la conexión y la gratitud. Nos llevamos esta experiencia en el corazón y sabemos que volveremos algún día. De verdad, fue como estar en el paraíso.',
        nl: 'Dit is niet zomaar een plek om te verblijven - het is een toevluchtsoord dat uitnodigt tot rust, verbondenheid en dankbaarheid. We dragen deze ervaring in ons hart en weten dat we ooit zullen terugkeren. Het voelde werkelijk als een paradijs.',
        sv: 'Det här är inte bara en plats att bo på - det är en fristad som inbjuder till lugn, samhörighet och tacksamhet. Vi bär med oss upplevelsen i hjärtat och vet att vi kommer tillbaka en dag. Det kändes verkligen som ett paradis.'
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
        es: 'La estética y la atmósfera especiales del apartamento y la terraza, combinadas con una funcionalidad real, hicieron que nos sintiéramos como en casa. La comunicación de Robert fue siempre inmediata, proactiva y muy amable. Nos encantaría volver.',
        nl: 'De bijzondere esthetiek en sfeer van het appartement en het terras, gecombineerd met echte functionaliteit, gaven ons het gevoel echt thuis te zijn. Robert communiceerde altijd direct, proactief en bijzonder vriendelijk. We komen heel graag terug.',
        sv: 'Den speciella estetiken och atmosfären i lägenheten och på terrassen, i kombination med att allt också fungerade i praktiken, fick det att kännas som hemma, fast långt hemifrån. Roberts kommunikation var alltid omedelbar, proaktiv och mycket vänlig. Vi kommer gärna tillbaka.'
      }
    }
  ],
  proofPoints: {
    en: [
      'Cleanliness - The one thing that comes up most often in the reviews.',
      'Quiet nights - Guests write again and again about how well they slept.',
      'The small things - What you need is there. You do not have to go looking for it.',
      'Quick answers - Ask a question and Robert replies personally — and quickly.',
      'Light, space and terraces - The reason people end up sitting outside longer than planned.'
    ],
    de: [
      'Sauberkeit - Der Punkt, der in den Bewertungen am häufigsten auftaucht.',
      'Ruhige Nächte - Gäste schreiben immer wieder, wie gut sie hier geschlafen haben.',
      'Die kleinen Dinge - Was man braucht, ist da. Man muss nicht danach suchen.',
      'Schnelle Antworten - Bei Fragen meldet sich Robert selbst, und zwar zügig.',
      'Licht, Raum und Terrassen - Der Grund, warum viele länger draußen sitzen als geplant.'
    ],
    es: [
      'Limpieza - Es lo que más se repite en las reseñas.',
      'Noches tranquilas - Los huéspedes cuentan una y otra vez lo bien que han dormido.',
      'Los pequeños detalles - Lo que hace falta está ahí. No hay que buscarlo.',
      'Respuestas rápidas - Si preguntáis algo, Robert os responde personalmente y enseguida.',
      'Luz, espacio y terrazas - Por eso muchos se quedan fuera más tiempo del previsto.'
    ],
    nl: [
      'Netheid - Het punt dat het vaakst terugkomt in de beoordelingen.',
      'Rustige nachten - Gasten schrijven keer op keer hoe goed ze geslapen hebben.',
      'De kleine dingen - Wat jullie nodig hebben, is aanwezig. Jullie hoeven er niet naar te zoeken.',
      'Snel antwoord - Wie iets vraagt, krijgt snel antwoord van Robert zelf.',
      'Licht, ruimte en terrassen - Daarom blijven veel gasten langer buiten zitten dan gepland.'
    ],
    sv: [
      'Rent och välstädat - Det som återkommer oftast i omdömena.',
      'Lugna nätter - Gästerna skriver gång på gång hur bra de har sovit.',
      'De små sakerna - Det man behöver finns där. Man behöver inte leta.',
      'Snabba svar - Den som frågar får snabbt svar av Robert själv.',
      'Ljus, rymd och terrasser - Därför blir många sittande ute längre än de tänkt.'
    ]
  },
  awards: {
    frigiliana: [
      { name: 'La AMARA Lounis', score: 9.8 },
      { name: 'La AMARA Maha', score: 9.5 },
      { name: 'La AMARA Zaid', score: 9.7 }
    ],
    coast: [
      { name: 'AMARA Nerja Beachside', score: 9.4 },
      { name: 'AMARA Family & Surf', score: 9.6 }
    ]
  }
} as const;

export const guestReviewsTrustLinks = [
  { token: 'about', label: trustLabels.about.en },
  { token: 'reviews_hub', label: trustLabels.reviews_hub.en },
  { token: 'direct_booking_benefits', label: trustLabels.direct_booking_benefits.en }
];

export const guestReviewsFooterLabels = {
  amenities: trustLabels.amenities,
  faq_general: trustLabels.faq_general,
  instagram: {
    en: 'Instagram',
    de: 'Instagram',
    es: 'Instagram',
    nl: 'Instagram',
    sv: 'Instagram'
  }
} as const;
