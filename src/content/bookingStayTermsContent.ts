import type { AmaraLanguage } from '../types/seo';

export const BOOKING_STAY_TERMS_DOCUMENT_ID = 'AMARA-BST-001';
export const BOOKING_STAY_TERMS_VERSION = '1.0';
export const BOOKING_STAY_TERMS_PUBLISHED_AT = '2026-08-17';

export interface BookingStayTermSection {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

interface BookingStayTermsLocale {
  seo: {
    title: string;
    description: string;
  };
  hero: {
    subtitle: string;
    title: string;
    lead: string;
  };
  metadata: {
    document: string;
    version: string;
    published: string;
    publishedValue: string;
    appliesTo: string;
    appliesToValue: string;
  };
  identity: {
    heading: string;
    name: string;
    tradingAs: string;
    address: string;
    taxId: string;
    status: string;
    statusValue: string;
    email: string;
    phone: string;
    country: string;
  };
  model: {
    heading: string;
    intro: string;
    stableTitle: string;
    stableText: string;
    flexibleTitle: string;
    flexibleText: string;
  };
  sections: BookingStayTermSection[];
  privacyLinkLabel: string;
  closingNote: string;
}

export const bookingStayTermsContent: Record<AmaraLanguage, BookingStayTermsLocale> = {
  en: {
    seo: {
      title: 'Booking & Stay Terms | AMARA',
      description: 'Stable booking and stay terms for AMARA Lodging, together with the booking-specific price, payment and cancellation terms confirmed at checkout.'
    },
    hero: {
      subtitle: 'Clear terms. Flexible booking details.',
      title: 'Booking & Stay Terms',
      lead: 'The stable framework for direct bookings with AMARA Lodging.'
    },
    metadata: {
      document: 'Document',
      version: 'Version',
      published: 'Published',
      publishedValue: '17 August 2026',
      appliesTo: 'Applies to',
      appliesToValue: 'Bookings whose confirmation incorporates version 1.0'
    },
    identity: {
      heading: 'Contracting party',
      name: 'Name',
      tradingAs: 'Trading as',
      address: 'Address',
      taxId: 'Spanish Tax ID (NIE)',
      status: 'Status',
      statusValue: 'Private host – not registered in the commercial register',
      email: 'Email',
      phone: 'Phone',
      country: 'Spain'
    },
    model: {
      heading: 'One contract, two complementary parts',
      intro: 'These terms provide the stable legal framework. The commercial details that can vary by property, dates or selected rate are shown before booking and fixed in the booking confirmation.',
      stableTitle: 'Stable website terms',
      stableText: 'Contract formation, proper use, care of the accommodation, fair handling of damage, liability, applicable law and document version.',
      flexibleTitle: 'Booking-specific details',
      flexibleText: 'Property and licence, travel dates, guest count, total price, payment schedule, cancellation policy, deposit, pets, extras and agreed arrival or departure times.'
    },
    sections: [
      {
        id: 'scope',
        title: '1. Contracting Party and Scope',
        paragraphs: [
          'These Booking & Stay Terms govern short-term tourist accommodation provided by the contracting party identified above (“Host”) at the accommodation specified in the booking confirmation. AMARA Lodging is the Host’s trading name and is not a separate contracting entity.',
          'The person completing the reservation is the lead guest (“Guest”). The Guest confirms that the booking information is correct and is responsible for communicating the relevant terms and property rules to all accompanying guests.'
        ]
      },
      {
        id: 'contract-documents',
        title: '2. Contract Documents and Formation',
        paragraphs: [
          'The accommodation contract consists of these terms in the version referenced in the booking confirmation, the booking-specific information displayed before the final checkout action, the booking confirmation and any material property rules made available before booking.',
          'The contract is formed when the Host issues the booking confirmation after the Guest has completed checkout and any payment or payment authorisation then due has been successfully processed. A mere technical receipt message is not a booking confirmation unless it is expressly described as such.',
          'Mandatory law takes priority. For booking-specific commercial details, the booking confirmation takes priority over these general terms; these terms govern all remaining matters.'
        ]
      },
      {
        id: 'booking-details',
        title: '3. Details Fixed for Each Booking',
        paragraphs: [
          'Before the Guest completes the booking, checkout identifies the terms that apply to the selected accommodation and rate. The confirmation records those details in a form the Guest can retain.'
        ],
        bullets: [
          'the accommodation, address and applicable tourist registration or licence number;',
          'arrival and departure dates, agreed times and number of guests;',
          'total price, included taxes and mandatory fees, plus any expressly selected extras;',
          'amounts due, payment method and payment deadlines;',
          'the selected cancellation, refund, no-show and early-departure rules;',
          'any deposit or payment authorisation, pet permission and fee, and other agreed special conditions.'
        ]
      },
      {
        id: 'payment',
        title: '4. Price and Payment',
        paragraphs: [
          'The total price, any advance payment, remaining balance and their due dates are those displayed in checkout and repeated in the booking confirmation. Optional extras are charged only when expressly selected or subsequently agreed.',
          'Payments are processed through the official AMARA booking environment and the payment providers offered there. If an amount is not received when due, the Host may take the measures stated in the confirmed payment terms and permitted by law, including cancellation after appropriate notice where required.'
        ]
      },
      {
        id: 'cancellation',
        title: '5. Cancellation, Changes, No-show and Early Departure',
        paragraphs: [
          'The cancellation and refund policy shown for the selected rate immediately before booking and repeated in the booking confirmation is binding for that booking. It also states the consequences of a no-show or early departure.',
          'A cancellation must be sent through the channel stated in the confirmation and takes effect when received. A requested change of dates, accommodation or guest count is effective only after the Host confirms it; changed prices or conditions may apply.',
          'If the Host cancels a confirmed stay, amounts paid for accommodation not provided will be refunded. This does not limit any further mandatory rights of the Guest.'
        ]
      },
      {
        id: 'arrival',
        title: '6. Arrival, Departure and Guest Registration',
        paragraphs: [
          'The applicable check-in and check-out times are stated in the booking confirmation. Early arrival or late departure requires prior confirmation and may carry a fee only where that fee was disclosed and agreed.',
          'Guests must provide the identification and registration information required by Spanish law. Digital or contactless check-in does not remove that obligation. The Host will provide the access and operational information needed for the booked accommodation.'
        ]
      },
      {
        id: 'occupancy',
        title: '7. Occupancy and Permitted Use',
        paragraphs: [
          'Only the number of guests confirmed in the booking may stay overnight. Additional overnight guests require prior approval and may not exceed the licensed capacity.',
          'The accommodation is provided solely for temporary tourist accommodation. Subletting, unlawful activity, commercial use, parties, events or professional productions are not permitted unless expressly agreed in writing. The lead Guest remains responsible for accompanying guests, visitors and minors under their supervision.'
        ]
      },
      {
        id: 'house-rules',
        title: '8. House Rules, Quiet, Smoking and Pets',
        paragraphs: [
          'Guests must respect neighbours, shared areas, property-specific quiet hours and the material house rules shown before booking or included with the confirmation. Operational instructions may also be provided at or before arrival.',
          'Smoking inside is not permitted unless the booking information expressly states otherwise. Pets are permitted only when the selected accommodation allows them and the booking confirmation records the permission and any fee. Mandatory rules concerning assistance animals remain unaffected.',
          'For a serious or repeated breach, the Host may take reasonable and proportionate measures permitted by law, including requiring the conduct to stop or, where justified, ending the stay. Any refund consequence is determined by the confirmed booking conditions and mandatory law; it is not automatically forfeited.'
        ]
      },
      {
        id: 'care-damage',
        title: '9. Care, Damage, Keys and Deposits',
        paragraphs: [
          'Guests must treat the accommodation, furnishings and equipment with reasonable care and report damage, defects or lost access items promptly so that avoidable loss can be limited.',
          'To the extent provided by applicable law, the Guest is responsible for damage caused intentionally or negligently, missing keys or equipment, and reasonable additional cleaning required beyond normal use. Normal wear and tear is not chargeable.',
          'Before seeking payment, the Host will provide a comprehensible description and reasonable evidence of the loss and give the Guest an opportunity to respond. A security deposit or payment authorisation applies only if it was shown before booking and recorded in the confirmation.'
        ]
      },
      {
        id: 'safety-liability',
        title: '10. Safety and Liability',
        paragraphs: [
          'The Host will provide the accommodation as confirmed and is liable in accordance with applicable law. Nothing in these terms excludes or limits liability or consumer rights where exclusion or limitation is not legally permitted.',
          'Guests must use stairs, terraces, balconies, pools, appliances and other facilities with reasonable care and follow safety and operating instructions. The Host is responsible for loss of or damage to personal belongings only where responsibility arises under applicable law.',
          'Travel and health insurance appropriate to the Guest’s circumstances is recommended but does not replace the Host’s legal obligations.'
        ]
      },
      {
        id: 'exceptional-events',
        title: '11. Events Outside Reasonable Control',
        paragraphs: [
          'If an exceptional and unavoidable event affects performance, the parties will notify each other promptly and take reasonable steps to limit its consequences. The rights and obligations of both parties are determined by mandatory law and the confirmed booking conditions.',
          'A temporary interruption or external event does not automatically remove either party’s rights. Any refund, alternative accommodation or other remedy depends on the circumstances and the law applicable to the booking.'
        ]
      },
      {
        id: 'consumer-law',
        title: '12. Consumer Rights, Applicable Law and Disputes',
        paragraphs: [
          'Spanish law applies, including the applicable Andalusian tourism and consumer rules. A consumer does not lose mandatory protection granted by the law that would otherwise apply to them.',
          'Because the service is accommodation for specific dates, the general statutory withdrawal period for distance contracts does not normally apply. The Guest’s contractual cancellation rights are the policy confirmed for the booking.',
          'Disputes are heard by the courts competent under mandatory law. Before starting formal proceedings, Guests are invited to contact the Host so that a practical solution can be sought. Official consumer complaint forms are available where required.'
        ]
      },
      {
        id: 'version',
        title: '13. Version, Changes and Contact',
        paragraphs: [
          'The document ID, version and publication date appear at the top of this page. A material change creates a new version and applies only to bookings that incorporate that new version. The version accepted for an existing booking remains unchanged unless both parties expressly agree otherwise in a durable form.',
          'Guests should retain the booking confirmation together with these terms. Questions about a booking or these terms can be sent using the contact details above.'
        ]
      }
    ],
    privacyLinkLabel: 'Legal Notice & Privacy Policy',
    closingNote: 'Privacy and guest-registration information is provided separately and forms no replacement for these booking terms.'
  },
  de: {
    seo: {
      title: 'Buchungs- & Aufenthaltsbedingungen | AMARA',
      description: 'Stabile Buchungs- und Aufenthaltsbedingungen von AMARA Lodging sowie die im Checkout bestätigten buchungsspezifischen Preis-, Zahlungs- und Stornierungsregeln.'
    },
    hero: {
      subtitle: 'Klare Bedingungen. Flexible Buchungsdetails.',
      title: 'Buchungs- & Aufenthalts&shy;bedingungen',
      lead: 'Der stabile Rahmen für Direktbuchungen bei AMARA Lodging.'
    },
    metadata: {
      document: 'Dokument',
      version: 'Version',
      published: 'Veröffentlicht',
      publishedValue: '17. August 2026',
      appliesTo: 'Gilt für',
      appliesToValue: 'Buchungen, deren Bestätigung auf Version 1.0 verweist'
    },
    identity: {
      heading: 'Vertragspartner',
      name: 'Name',
      tradingAs: 'Handelnd unter',
      address: 'Anschrift',
      taxId: 'Spanische Steuer-ID (NIE)',
      status: 'Status',
      statusValue: 'Privater Gastgeber – nicht im Handelsregister eingetragen',
      email: 'E-Mail',
      phone: 'Telefon',
      country: 'Spanien'
    },
    model: {
      heading: 'Ein Vertrag, zwei sich ergänzende Bestandteile',
      intro: 'Diese Bedingungen bilden den stabilen rechtlichen Rahmen. Die wirtschaftlichen Details, die sich je nach Unterkunft, Reisedaten oder gewähltem Tarif unterscheiden können, werden vor der Buchung angezeigt und in der Buchungsbestätigung festgehalten.',
      stableTitle: 'Stabile Bedingungen auf der Website',
      stableText: 'Vertragsschluss, ordnungsgemäße Nutzung, sorgfältiger Umgang mit der Unterkunft, faire Schadenabwicklung, Haftung, anwendbares Recht und Dokumentversion.',
      flexibleTitle: 'Buchungsspezifische Details',
      flexibleText: 'Unterkunft und Lizenz, Reisedaten, Gästezahl, Gesamtpreis, Zahlungsplan, Stornierungsregeln, Kaution, Haustiere, Zusatzleistungen und vereinbarte An- oder Abreisezeiten.'
    },
    sections: [
      {
        id: 'scope',
        title: '1. Vertragspartner und Geltungsbereich',
        paragraphs: [
          'Diese Buchungs- und Aufenthaltsbedingungen gelten für die kurzfristige touristische Beherbergung durch den oben genannten Vertragspartner („Gastgeber“) in der Unterkunft, die in der Buchungsbestätigung bezeichnet ist. AMARA Lodging ist die geschäftliche Bezeichnung des Gastgebers und keine eigenständige Vertragspartei.',
          'Die Person, welche die Reservierung abschließt, ist der buchende Hauptgast („Gast“). Der Gast bestätigt die Richtigkeit der Buchungsangaben und sorgt dafür, dass alle mitreisenden Personen die für sie maßgeblichen Bedingungen und Hausregeln kennen.'
        ]
      },
      {
        id: 'contract-documents',
        title: '2. Vertragsunterlagen und Vertragsschluss',
        paragraphs: [
          'Der Beherbergungsvertrag besteht aus der in der Buchungsbestätigung genannten Version dieser Bedingungen, den vor der abschließenden Buchungshandlung im Checkout angezeigten Buchungsdetails, der Buchungsbestätigung und den wesentlichen unterkunftsspezifischen Regeln, die vor der Buchung bereitgestellt wurden.',
          'Der Vertrag kommt zustande, sobald der Gastgeber nach Abschluss des Checkouts eine Buchungsbestätigung versendet und eine zu diesem Zeitpunkt fällige Zahlung oder Zahlungsautorisierung erfolgreich verarbeitet wurde. Eine rein technische Eingangsmitteilung ist nur dann eine Buchungsbestätigung, wenn sie ausdrücklich so bezeichnet ist.',
          'Zwingendes Recht hat Vorrang. Für die wirtschaftlichen Einzelheiten der konkreten Buchung geht die Buchungsbestätigung diesen allgemeinen Bedingungen vor; im Übrigen gelten diese Bedingungen.'
        ]
      },
      {
        id: 'booking-details',
        title: '3. Für jede Buchung festgelegte Details',
        paragraphs: [
          'Bevor der Gast die Buchung abschließt, weist der Checkout die Bedingungen aus, die für die gewählte Unterkunft und den gewählten Tarif gelten. Die Bestätigung hält diese Angaben in einer Form fest, die der Gast dauerhaft speichern kann.'
        ],
        bullets: [
          'Unterkunft, Anschrift und einschlägige touristische Registrierungs- oder Lizenznummer;',
          'An- und Abreisedatum, vereinbarte Zeiten und Anzahl der Gäste;',
          'Gesamtpreis einschließlich Steuern und obligatorischer Gebühren sowie ausdrücklich gewählte Zusatzleistungen;',
          'fällige Beträge, Zahlungsart und Zahlungsfristen;',
          'die gewählten Regeln für Stornierung, Erstattung, Nichterscheinen und vorzeitige Abreise;',
          'eine etwaige Kaution oder Zahlungsautorisierung, Haustiererlaubnis und Gebühr sowie weitere vereinbarte Sonderbedingungen.'
        ]
      },
      {
        id: 'payment',
        title: '4. Preis und Zahlung',
        paragraphs: [
          'Gesamtpreis, Anzahlung, Restbetrag und jeweilige Fälligkeit ergeben sich aus dem Checkout und werden in der Buchungsbestätigung wiedergegeben. Optionale Zusatzleistungen werden nur berechnet, wenn sie ausdrücklich gewählt oder nachträglich vereinbart wurden.',
          'Zahlungen werden über die offizielle AMARA-Buchungsumgebung und die dort angebotenen Zahlungsdienstleister abgewickelt. Geht ein Betrag nicht fristgerecht ein, kann der Gastgeber die in den bestätigten Zahlungsbedingungen vorgesehenen und gesetzlich zulässigen Maßnahmen ergreifen – soweit erforderlich nach angemessener Mitteilung auch die Stornierung.'
        ]
      },
      {
        id: 'cancellation',
        title: '5. Stornierung, Änderungen, Nichterscheinen und vorzeitige Abreise',
        paragraphs: [
          'Für die jeweilige Buchung gilt die Stornierungs- und Erstattungsregel, die für den gewählten Tarif unmittelbar vor dem Buchungsabschluss angezeigt und in der Buchungsbestätigung wiedergegeben wird. Dort sind auch die Folgen eines Nichterscheinens oder einer vorzeitigen Abreise geregelt.',
          'Eine Stornierung ist über den in der Bestätigung genannten Kontaktweg zu übermitteln und wird mit ihrem Eingang wirksam. Eine gewünschte Änderung von Reisedaten, Unterkunft oder Gästezahl gilt erst nach Bestätigung durch den Gastgeber; geänderte Preise oder Bedingungen können zur Anwendung kommen.',
          'Storniert der Gastgeber einen bestätigten Aufenthalt, werden die für nicht erbrachte Beherbergungsleistungen gezahlten Beträge erstattet. Weitergehende zwingende Rechte des Gastes bleiben unberührt.'
        ]
      },
      {
        id: 'arrival',
        title: '6. Anreise, Abreise und Gästeregistrierung',
        paragraphs: [
          'Die geltenden Check-in- und Check-out-Zeiten stehen in der Buchungsbestätigung. Eine frühere Anreise oder spätere Abreise bedarf der vorherigen Bestätigung und kann nur dann kostenpflichtig sein, wenn die Gebühr offengelegt und vereinbart wurde.',
          'Die Gäste müssen die nach spanischem Recht erforderlichen Identitäts- und Meldedaten zur Verfügung stellen. Auch ein digitaler oder kontaktloser Check-in lässt diese Verpflichtung unberührt. Der Gastgeber stellt die für den Zugang und die Nutzung der gebuchten Unterkunft erforderlichen Informationen bereit.'
        ]
      },
      {
        id: 'occupancy',
        title: '7. Belegung und erlaubte Nutzung',
        paragraphs: [
          'Übernachten dürfen nur die in der Buchung bestätigten Gäste. Weitere Übernachtungsgäste bedürfen der vorherigen Zustimmung und dürfen die genehmigte Höchstbelegung nicht überschreiten.',
          'Die Unterkunft wird ausschließlich zur vorübergehenden touristischen Beherbergung überlassen. Untervermietung, rechtswidrige oder gewerbliche Nutzung, Feiern, Veranstaltungen oder professionelle Produktionen sind ohne ausdrückliche schriftliche Vereinbarung nicht gestattet. Der Hauptgast bleibt für Mitreisende, Besucher und beaufsichtigte Minderjährige verantwortlich.'
        ]
      },
      {
        id: 'house-rules',
        title: '8. Hausregeln, Ruhe, Rauchen und Haustiere',
        paragraphs: [
          'Die Gäste nehmen Rücksicht auf Nachbarn und Gemeinschaftsflächen und beachten die unterkunftsspezifischen Ruhezeiten sowie die wesentlichen Hausregeln, die vor der Buchung oder mit der Bestätigung bereitgestellt werden. Organisatorische Hinweise können zusätzlich vor oder bei der Anreise übermittelt werden.',
          'Das Rauchen in Innenräumen ist nicht gestattet, sofern die Buchungsinformationen nicht ausdrücklich etwas anderes ausweisen. Haustiere sind nur erlaubt, wenn die gewählte Unterkunft sie zulässt und die Erlaubnis sowie eine etwaige Gebühr in der Buchungsbestätigung festgehalten sind. Zwingende Vorschriften zu Assistenztieren bleiben unberührt.',
          'Bei einem schwerwiegenden oder wiederholten Verstoß kann der Gastgeber angemessene und verhältnismäßige, gesetzlich zulässige Maßnahmen ergreifen. Dazu kann bei entsprechender Rechtfertigung auch die Beendigung des Aufenthalts gehören. Ob eine Erstattung erfolgt, richtet sich nach den bestätigten Buchungsbedingungen und zwingendem Recht; sie entfällt nicht automatisch.'
        ]
      },
      {
        id: 'care-damage',
        title: '9. Sorgfalt, Schäden, Schlüssel und Kautionen',
        paragraphs: [
          'Die Gäste behandeln Unterkunft, Einrichtung und Ausstattung mit angemessener Sorgfalt und melden Schäden, Mängel oder verlorene Zugangsmittel unverzüglich, damit vermeidbare Folgeschäden begrenzt werden können.',
          'Soweit gesetzlich vorgesehen, haftet der Gast für vorsätzlich oder fahrlässig verursachte Schäden, verlorene Schlüssel oder Ausstattungsgegenstände sowie angemessene zusätzliche Reinigungskosten, die über die normale Nutzung hinausgehen. Normale Abnutzung wird nicht berechnet.',
          'Bevor eine Zahlung verlangt wird, legt der Gastgeber den Schaden nachvollziehbar dar, stellt angemessene Nachweise bereit und gibt dem Gast Gelegenheit zur Stellungnahme. Eine Kaution oder Zahlungsautorisierung gilt nur, wenn sie vor der Buchung angezeigt und in der Bestätigung festgehalten wurde.'
        ]
      },
      {
        id: 'safety-liability',
        title: '10. Sicherheit und Haftung',
        paragraphs: [
          'Der Gastgeber stellt die Unterkunft wie bestätigt zur Verfügung und haftet nach den anwendbaren gesetzlichen Vorschriften. Diese Bedingungen schließen keine Haftung und keine Verbraucherrechte aus oder beschränken sie, soweit ein Ausschluss oder eine Beschränkung gesetzlich unzulässig ist.',
          'Treppen, Terrassen, Balkone, Pools, Geräte und andere Einrichtungen sind mit angemessener Sorgfalt und unter Beachtung der Sicherheits- und Bedienhinweise zu nutzen. Für Verlust oder Beschädigung persönlicher Gegenstände haftet der Gastgeber nur, soweit sich eine Verantwortlichkeit aus dem anwendbaren Recht ergibt.',
          'Eine den persönlichen Umständen entsprechende Reise- und Krankenversicherung wird empfohlen, ersetzt jedoch nicht die gesetzlichen Pflichten des Gastgebers.'
        ]
      },
      {
        id: 'exceptional-events',
        title: '11. Ereignisse außerhalb des zumutbaren Einflussbereichs',
        paragraphs: [
          'Beeinträchtigt ein außergewöhnliches und unvermeidbares Ereignis die Vertragserfüllung, informieren sich die Parteien unverzüglich und ergreifen angemessene Maßnahmen, um die Folgen zu begrenzen. Rechte und Pflichten beider Parteien bestimmen sich nach zwingendem Recht und den bestätigten Buchungsbedingungen.',
          'Eine vorübergehende Unterbrechung oder ein externes Ereignis beseitigt die Rechte einer Partei nicht automatisch. Ob Erstattung, Ersatzunterkunft oder ein anderer Ausgleich geschuldet ist, hängt von den Umständen und dem auf die Buchung anwendbaren Recht ab.'
        ]
      },
      {
        id: 'consumer-law',
        title: '12. Verbraucherrechte, anwendbares Recht und Streitigkeiten',
        paragraphs: [
          'Es gilt spanisches Recht einschließlich der einschlägigen andalusischen Tourismus- und Verbrauchervorschriften. Zwingender Verbraucherschutz, der ohne diese Rechtswahl anwendbar wäre, wird dadurch nicht entzogen.',
          'Da es sich um eine Beherbergungsleistung für einen bestimmten Zeitraum handelt, besteht in der Regel kein allgemeines gesetzliches Widerrufsrecht für Fernabsatzverträge. Die vertraglichen Stornierungsrechte des Gastes ergeben sich aus der für die Buchung bestätigten Regelung.',
          'Für Streitigkeiten sind die nach zwingendem Recht zuständigen Gerichte maßgeblich. Vor der Einleitung eines förmlichen Verfahrens wird der Gast gebeten, den Gastgeber zu kontaktieren, damit eine praktische Lösung gesucht werden kann. Soweit vorgeschrieben, stehen offizielle Verbraucher-Beschwerdeformulare zur Verfügung.'
        ]
      },
      {
        id: 'version',
        title: '13. Version, Änderungen und Kontakt',
        paragraphs: [
          'Dokument-ID, Version und Veröffentlichungsdatum stehen am Anfang dieser Seite. Eine inhaltlich wesentliche Änderung erhält eine neue Version und gilt nur für Buchungen, die diese neue Version einbeziehen. Für eine bestehende Buchung bleibt die angenommene Version unverändert, sofern die Parteien nicht ausdrücklich in dauerhafter Form etwas anderes vereinbaren.',
          'Der Gast sollte die Buchungsbestätigung gemeinsam mit diesen Bedingungen aufbewahren. Fragen zur Buchung oder zu diesen Bedingungen können über die oben genannten Kontaktdaten gestellt werden.'
        ]
      }
    ],
    privacyLinkLabel: 'Impressum & Datenschutzerklärung',
    closingNote: 'Informationen zum Datenschutz und zur Gästeregistrierung werden gesondert bereitgestellt und ersetzen diese Buchungsbedingungen nicht.'
  },
  es: {
    seo: {
      title: 'Condiciones de reserva y estancia | AMARA',
      description: 'Condiciones estables de reserva y estancia de AMARA Lodging, junto con las condiciones específicas de precio, pago y cancelación confirmadas durante la reserva.'
    },
    hero: {
      subtitle: 'Condiciones claras. Detalles de reserva flexibles.',
      title: 'Condiciones de reserva y estancia',
      lead: 'El marco estable para las reservas directas con AMARA Lodging.'
    },
    metadata: {
      document: 'Documento',
      version: 'Versión',
      published: 'Publicado',
      publishedValue: '17 de agosto de 2026',
      appliesTo: 'Aplicable a',
      appliesToValue: 'Reservas cuya confirmación incorpore la versión 1.0'
    },
    identity: {
      heading: 'Parte contratante',
      name: 'Nombre',
      tradingAs: 'Nombre comercial',
      address: 'Domicilio',
      taxId: 'NIE',
      status: 'Condición',
      statusValue: 'Anfitrión particular – no inscrito en el Registro Mercantil',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      country: 'España'
    },
    model: {
      heading: 'Un contrato, dos partes complementarias',
      intro: 'Estas condiciones establecen el marco jurídico estable. Los detalles económicos que pueden variar según el alojamiento, las fechas o la tarifa seleccionada se muestran antes de reservar y quedan fijados en la confirmación de la reserva.',
      stableTitle: 'Condiciones estables en la web',
      stableText: 'Formalización del contrato, uso adecuado, cuidado del alojamiento, gestión justa de daños, responsabilidad, legislación aplicable y versión del documento.',
      flexibleTitle: 'Detalles específicos de la reserva',
      flexibleText: 'Alojamiento y licencia, fechas, número de huéspedes, precio total, calendario de pagos, cancelación, depósito, mascotas, extras y horarios de entrada o salida acordados.'
    },
    sections: [
      {
        id: 'scope',
        title: '1. Parte contratante y ámbito de aplicación',
        paragraphs: [
          'Estas Condiciones de reserva y estancia regulan el alojamiento turístico de corta duración prestado por la parte contratante identificada anteriormente (“Anfitrión”) en el alojamiento indicado en la confirmación de la reserva. AMARA Lodging es el nombre comercial del Anfitrión y no una entidad contratante independiente.',
          'La persona que completa la reserva es el huésped principal (“Huésped”). El Huésped confirma que los datos de la reserva son correctos y se responsabiliza de comunicar a todos sus acompañantes las condiciones y normas del alojamiento que les resulten aplicables.'
        ]
      },
      {
        id: 'contract-documents',
        title: '2. Documentos contractuales y formalización',
        paragraphs: [
          'El contrato de alojamiento se compone de estas condiciones en la versión citada en la confirmación, la información específica mostrada antes de la acción final del proceso de reserva, la confirmación de la reserva y las normas esenciales del alojamiento facilitadas antes de reservar.',
          'El contrato se formaliza cuando el Anfitrión envía la confirmación después de que el Huésped haya completado el proceso de reserva y se haya procesado correctamente cualquier pago o autorización de pago exigible en ese momento. Un simple acuse técnico no constituye confirmación salvo que se identifique expresamente como tal.',
          'La normativa imperativa prevalece. Para los detalles económicos específicos, prevalece la confirmación de la reserva; estas condiciones rigen todas las demás cuestiones.'
        ]
      },
      {
        id: 'booking-details',
        title: '3. Detalles fijados para cada reserva',
        paragraphs: [
          'Antes de completar la reserva, el proceso de contratación identifica las condiciones aplicables al alojamiento y a la tarifa seleccionados. La confirmación recoge esos datos en un formato que el Huésped puede conservar.'
        ],
        bullets: [
          'el alojamiento, su dirección y el número de registro o licencia turística aplicable;',
          'las fechas y horas acordadas de entrada y salida y el número de huéspedes;',
          'el precio total, los impuestos y cargos obligatorios incluidos y los extras elegidos expresamente;',
          'los importes, el medio de pago y los plazos de pago;',
          'las reglas seleccionadas sobre cancelación, reembolso, no presentación y salida anticipada;',
          'cualquier depósito o autorización de pago, permiso y tarifa para mascotas y otras condiciones especiales acordadas.'
        ]
      },
      {
        id: 'payment',
        title: '4. Precio y pago',
        paragraphs: [
          'El precio total, cualquier anticipo, el saldo restante y sus vencimientos son los mostrados durante la reserva y reiterados en la confirmación. Los extras opcionales solo se cobran cuando se hayan seleccionado expresamente o acordado posteriormente.',
          'Los pagos se procesan a través del entorno oficial de reservas de AMARA y de los proveedores de pago ofrecidos en él. Si un importe no se recibe a su vencimiento, el Anfitrión podrá adoptar las medidas previstas en las condiciones de pago confirmadas y permitidas por la ley, incluida la cancelación previa notificación adecuada cuando proceda.'
        ]
      },
      {
        id: 'cancellation',
        title: '5. Cancelación, cambios, no presentación y salida anticipada',
        paragraphs: [
          'La política de cancelación y reembolso mostrada para la tarifa seleccionada inmediatamente antes de reservar y repetida en la confirmación es vinculante para esa reserva. También determina las consecuencias de la no presentación o de una salida anticipada.',
          'La cancelación deberá comunicarse por el canal indicado en la confirmación y será efectiva cuando se reciba. Una solicitud de cambio de fechas, alojamiento o número de huéspedes solo será efectiva tras su confirmación por el Anfitrión; podrán aplicarse precios o condiciones diferentes.',
          'Si el Anfitrión cancela una estancia confirmada, se reembolsarán los importes pagados por el alojamiento no prestado. Esto no limita otros derechos imperativos del Huésped.'
        ]
      },
      {
        id: 'arrival',
        title: '6. Entrada, salida y registro de huéspedes',
        paragraphs: [
          'Los horarios aplicables de entrada y salida constan en la confirmación. Una entrada anticipada o una salida tardía requieren confirmación previa y solo podrán generar un cargo si este fue informado y aceptado.',
          'Los huéspedes deberán facilitar los datos de identificación y registro exigidos por la legislación española. El registro digital o la entrada sin contacto no eliminan esta obligación. El Anfitrión facilitará la información necesaria para acceder al alojamiento reservado y utilizarlo correctamente.'
        ]
      },
      {
        id: 'occupancy',
        title: '7. Ocupación y uso permitido',
        paragraphs: [
          'Solo podrán pernoctar los huéspedes confirmados en la reserva. Cualquier huésped adicional requiere autorización previa y nunca podrá superarse la capacidad autorizada.',
          'El alojamiento se ofrece exclusivamente para una estancia turística temporal. No se permiten el subarriendo, las actividades ilícitas, el uso comercial, las fiestas, los eventos ni las producciones profesionales salvo acuerdo expreso por escrito. El Huésped principal responde de sus acompañantes, visitantes y menores bajo su supervisión.'
        ]
      },
      {
        id: 'house-rules',
        title: '8. Normas, descanso, tabaco y mascotas',
        paragraphs: [
          'Los huéspedes respetarán al vecindario y las zonas comunes, los horarios de descanso específicos y las normas esenciales comunicadas antes de la reserva o incluidas con la confirmación. También podrán facilitarse instrucciones operativas antes de la llegada o en ese momento.',
          'No está permitido fumar en el interior salvo que la información de la reserva indique expresamente lo contrario. Las mascotas solo se admiten cuando el alojamiento seleccionado lo permita y la confirmación recoja el permiso y cualquier tarifa. Las normas imperativas relativas a animales de asistencia no se ven afectadas.',
          'Ante un incumplimiento grave o reiterado, el Anfitrión podrá adoptar medidas razonables, proporcionadas y permitidas por la ley, incluida la finalización de la estancia cuando esté justificada. Las consecuencias sobre un posible reembolso se determinan conforme a las condiciones confirmadas y la ley imperativa; el reembolso no se pierde automáticamente.'
        ]
      },
      {
        id: 'care-damage',
        title: '9. Cuidado, daños, llaves y depósitos',
        paragraphs: [
          'Los huéspedes tratarán con el debido cuidado el alojamiento, el mobiliario y el equipamiento y comunicarán sin demora cualquier daño, defecto o pérdida de medios de acceso para limitar perjuicios evitables.',
          'En la medida prevista por la ley aplicable, el Huésped responde de los daños causados dolosa o negligentemente, de las llaves o equipos perdidos y de los costes razonables de limpieza adicional que exceda el uso normal. El desgaste ordinario no se cobra.',
          'Antes de exigir un pago, el Anfitrión facilitará una descripción comprensible y pruebas razonables del perjuicio y dará al Huésped la oportunidad de responder. Solo se aplicará un depósito o autorización de pago si se mostró antes de reservar y quedó recogido en la confirmación.'
        ]
      },
      {
        id: 'safety-liability',
        title: '10. Seguridad y responsabilidad',
        paragraphs: [
          'El Anfitrión facilitará el alojamiento según lo confirmado y responderá conforme a la legislación aplicable. Estas condiciones no excluyen ni limitan responsabilidades o derechos de los consumidores cuando la ley no permita tal exclusión o limitación.',
          'Los huéspedes utilizarán escaleras, terrazas, balcones, piscinas, aparatos y demás instalaciones con la debida precaución y siguiendo las indicaciones de seguridad y uso. El Anfitrión solo responde de la pérdida o daño de objetos personales cuando así resulte de la legislación aplicable.',
          'Se recomienda contratar un seguro de viaje y salud adecuado a las circunstancias personales, sin que ello sustituya las obligaciones legales del Anfitrión.'
        ]
      },
      {
        id: 'exceptional-events',
        title: '11. Acontecimientos fuera del control razonable',
        paragraphs: [
          'Si un acontecimiento excepcional e inevitable afecta al cumplimiento, las partes se informarán sin demora y adoptarán medidas razonables para limitar sus consecuencias. Los derechos y obligaciones se determinarán conforme a la legislación imperativa y a las condiciones confirmadas de la reserva.',
          'Una interrupción temporal o un acontecimiento externo no elimina automáticamente los derechos de ninguna de las partes. El reembolso, alojamiento alternativo u otra solución dependerán de las circunstancias y de la normativa aplicable a la reserva.'
        ]
      },
      {
        id: 'consumer-law',
        title: '12. Derechos de consumo, legislación aplicable y conflictos',
        paragraphs: [
          'Se aplica la legislación española, incluidas las normas andaluzas de turismo y consumo correspondientes. La persona consumidora no pierde la protección imperativa que le otorgaría la legislación aplicable en ausencia de esta elección.',
          'Al tratarse de un servicio de alojamiento para fechas concretas, normalmente no existe el derecho general de desistimiento previsto para los contratos a distancia. Los derechos contractuales de cancelación son los confirmados para la reserva.',
          'Los conflictos se someterán a los tribunales competentes según la normativa imperativa. Antes de iniciar un procedimiento formal, se invita al Huésped a contactar con el Anfitrión para buscar una solución práctica. Se facilitan las hojas oficiales de quejas y reclamaciones cuando resulten exigibles.'
        ]
      },
      {
        id: 'version',
        title: '13. Versión, modificaciones y contacto',
        paragraphs: [
          'La identificación del documento, la versión y la fecha de publicación figuran al principio de esta página. Toda modificación material genera una nueva versión y solo se aplica a las reservas que incorporen esa nueva versión. La versión aceptada para una reserva existente no cambia salvo acuerdo expreso de ambas partes en un soporte duradero.',
          'El Huésped deberá conservar la confirmación junto con estas condiciones. Las consultas sobre una reserva o sobre estas condiciones pueden enviarse utilizando los datos de contacto anteriores.'
        ]
      }
    ],
    privacyLinkLabel: 'Aviso legal y política de privacidad',
    closingNote: 'La información sobre privacidad y registro de huéspedes se facilita por separado y no sustituye estas condiciones de reserva.'
  },
  nl: {
    seo: {
      title: 'Boekings- en verblijfsvoorwaarden | AMARA',
      description: 'Vaste boekings- en verblijfsvoorwaarden van AMARA Lodging, samen met de boekingsspecifieke prijs-, betaal- en annuleringsvoorwaarden die bij het boeken worden bevestigd.'
    },
    hero: {
      subtitle: 'Duidelijke voorwaarden. Flexibele boekingsdetails.',
      title: 'Boekings- en verblijfs&shy;voorwaarden',
      lead: 'Het vaste kader voor rechtstreekse boekingen bij AMARA Lodging.'
    },
    metadata: {
      document: 'Document',
      version: 'Versie',
      published: 'Gepubliceerd',
      publishedValue: '17 augustus 2026',
      appliesTo: 'Van toepassing op',
      appliesToValue: 'Boekingen waarvan de bevestiging naar versie 1.0 verwijst'
    },
    identity: {
      heading: 'Contractspartij',
      name: 'Naam',
      tradingAs: 'Handelend onder de naam',
      address: 'Adres',
      taxId: 'Spaans fiscaal nummer (NIE)',
      status: 'Status',
      statusValue: 'Particuliere verhuurder – niet ingeschreven in het handelsregister',
      email: 'E-mail',
      phone: 'Telefoon',
      country: 'Spanje'
    },
    model: {
      heading: 'Eén overeenkomst, twee aanvullende onderdelen',
      intro: 'Deze voorwaarden vormen het vaste juridische kader. Commerciële gegevens die per accommodatie, datum of gekozen tarief kunnen verschillen, worden vóór het boeken getoond en in de boekingsbevestiging vastgelegd.',
      stableTitle: 'Vaste voorwaarden op de website',
      stableText: 'Totstandkoming van de overeenkomst, correct gebruik, zorg voor de accommodatie, eerlijke schadeafhandeling, aansprakelijkheid, toepasselijk recht en documentversie.',
      flexibleTitle: 'Boekingsspecifieke gegevens',
      flexibleText: 'Accommodatie en vergunning, verblijfsdata, aantal gasten, totaalprijs, betaalschema, annulering, borg, huisdieren, extra’s en overeengekomen aankomst- of vertrektijden.'
    },
    sections: [
      {
        id: 'scope',
        title: '1. Contractspartij en toepassingsgebied',
        paragraphs: [
          'Deze Boekings- en verblijfsvoorwaarden gelden voor toeristische accommodatie voor korte duur die door de hierboven vermelde contractspartij (“Host”) wordt aangeboden in de accommodatie die in de boekingsbevestiging staat. AMARA Lodging is de handelsnaam van de Host en geen afzonderlijke contractspartij.',
          'De persoon die de reservering voltooit, is de hoofdgast (“Gast”). De Gast bevestigt dat de boekingsgegevens juist zijn en zorgt ervoor dat alle medereizigers kennisnemen van de voor hen relevante voorwaarden en huisregels.'
        ]
      },
      {
        id: 'contract-documents',
        title: '2. Contractstukken en totstandkoming',
        paragraphs: [
          'De accommodatieovereenkomst bestaat uit deze voorwaarden in de versie waarnaar de boekingsbevestiging verwijst, de boekingsspecifieke informatie die vóór de laatste boekingshandeling wordt getoond, de boekingsbevestiging en belangrijke accommodatieregels die vóór het boeken beschikbaar zijn gesteld.',
          'De overeenkomst komt tot stand wanneer de Host de boekingsbevestiging verstuurt nadat de Gast het boekingsproces heeft voltooid en een op dat moment verschuldigde betaling of betaalautorisatie succesvol is verwerkt. Een puur technische ontvangstmelding is alleen een boekingsbevestiging wanneer deze uitdrukkelijk zo wordt genoemd.',
          'Dwingend recht heeft voorrang. Voor de commerciële gegevens van de concrete boeking heeft de boekingsbevestiging voorrang op deze algemene voorwaarden; voor alle overige onderwerpen gelden deze voorwaarden.'
        ]
      },
      {
        id: 'booking-details',
        title: '3. Gegevens die per boeking worden vastgelegd',
        paragraphs: [
          'Voordat de Gast de boeking voltooit, vermeldt het boekingsproces de voorwaarden die bij de gekozen accommodatie en het gekozen tarief horen. De bevestiging legt deze gegevens vast in een vorm die de Gast kan bewaren.'
        ],
        bullets: [
          'de accommodatie, het adres en het toepasselijke toeristische registratie- of vergunningsnummer;',
          'aankomst- en vertrekdata, overeengekomen tijden en aantal gasten;',
          'de totaalprijs, inbegrepen belastingen en verplichte kosten, plus uitdrukkelijk gekozen extra’s;',
          'verschuldigde bedragen, betaalwijze en betaaltermijnen;',
          'de gekozen regels voor annulering, terugbetaling, niet verschijnen en vroegtijdig vertrek;',
          'een eventuele borg of betaalautorisatie, toestemming en kosten voor huisdieren en andere overeengekomen bijzondere voorwaarden.'
        ]
      },
      {
        id: 'payment',
        title: '4. Prijs en betaling',
        paragraphs: [
          'De totaalprijs, eventuele aanbetaling, het resterende saldo en de vervaldata zijn de bedragen en termijnen die bij het boeken worden getoond en in de boekingsbevestiging worden herhaald. Optionele extra’s worden alleen berekend wanneer ze uitdrukkelijk zijn gekozen of later zijn overeengekomen.',
          'Betalingen worden verwerkt via de officiële boekingsomgeving van AMARA en de daar aangeboden betaaldienstverleners. Als een bedrag niet op tijd wordt ontvangen, kan de Host de in de bevestigde betaalvoorwaarden genoemde en wettelijk toegestane maatregelen nemen, waaronder annulering na passende kennisgeving wanneer dat vereist is.'
        ]
      },
      {
        id: 'cancellation',
        title: '5. Annulering, wijzigingen, niet verschijnen en vroegtijdig vertrek',
        paragraphs: [
          'Het annulerings- en restitutiebeleid dat voor het gekozen tarief direct vóór het boeken wordt getoond en in de bevestiging wordt herhaald, is bindend voor die boeking. Het bepaalt ook de gevolgen van niet verschijnen of vroegtijdig vertrek.',
          'Een annulering moet via het in de bevestiging genoemde kanaal worden verstuurd en wordt van kracht bij ontvangst. Een verzoek tot wijziging van data, accommodatie of gastenaantal geldt pas nadat de Host dit heeft bevestigd; gewijzigde prijzen of voorwaarden kunnen van toepassing zijn.',
          'Als de Host een bevestigde boeking annuleert, worden bedragen voor niet geleverde accommodatie terugbetaald. Dit beperkt geen verdere dwingende rechten van de Gast.'
        ]
      },
      {
        id: 'arrival',
        title: '6. Aankomst, vertrek en gastenregistratie',
        paragraphs: [
          'De geldende in- en uitchecktijden staan in de boekingsbevestiging. Vroeg aankomen of later vertrekken vereist voorafgaande bevestiging en kan alleen tegen betaling zijn wanneer die vergoeding vooraf is meegedeeld en overeengekomen.',
          'Gasten moeten de identificatie- en registratiegegevens verstrekken die volgens de Spaanse wet verplicht zijn. Digitaal of contactloos inchecken verandert deze verplichting niet. De Host verstrekt de informatie die nodig is voor toegang tot en correct gebruik van de geboekte accommodatie.'
        ]
      },
      {
        id: 'occupancy',
        title: '7. Bezetting en toegestaan gebruik',
        paragraphs: [
          'Alleen het in de boeking bevestigde aantal gasten mag overnachten. Extra overnachtende gasten vereisen voorafgaande toestemming en de vergunde capaciteit mag nooit worden overschreden.',
          'De accommodatie wordt uitsluitend voor tijdelijk toeristisch verblijf aangeboden. Onderverhuur, onwettige activiteiten, commercieel gebruik, feesten, evenementen of professionele producties zijn niet toegestaan zonder uitdrukkelijke schriftelijke afspraak. De hoofdgast blijft verantwoordelijk voor medegasten, bezoekers en minderjarigen onder zijn of haar toezicht.'
        ]
      },
      {
        id: 'house-rules',
        title: '8. Huisregels, rust, roken en huisdieren',
        paragraphs: [
          'Gasten respecteren buren en gemeenschappelijke ruimten, accommodatiespecifieke rusttijden en de belangrijke huisregels die vóór het boeken of bij de bevestiging zijn verstrekt. Praktische instructies kunnen ook vóór of bij aankomst worden gegeven.',
          'Binnen roken is niet toegestaan, tenzij de boekingsinformatie uitdrukkelijk anders vermeldt. Huisdieren zijn alleen toegestaan wanneer de gekozen accommodatie ze toelaat en de bevestiging de toestemming en eventuele kosten vermeldt. Dwingende regels voor assistentiedieren blijven onverminderd gelden.',
          'Bij een ernstige of herhaalde overtreding kan de Host redelijke, evenredige en wettelijk toegestane maatregelen nemen, waaronder beëindiging van het verblijf wanneer dat gerechtvaardigd is. De gevolgen voor een eventuele terugbetaling volgen uit de bevestigde voorwaarden en het dwingende recht; een terugbetaling vervalt niet automatisch.'
        ]
      },
      {
        id: 'care-damage',
        title: '9. Zorg, schade, sleutels en borg',
        paragraphs: [
          'Gasten behandelen de accommodatie, inrichting en apparatuur met redelijke zorg en melden schade, gebreken of verloren toegangsmiddelen onmiddellijk, zodat vermijdbare vervolgschade kan worden beperkt.',
          'Voor zover het toepasselijke recht dat bepaalt, is de Gast verantwoordelijk voor opzettelijk of door nalatigheid veroorzaakte schade, verloren sleutels of apparatuur en redelijke extra schoonmaakkosten boven normaal gebruik. Normale slijtage wordt niet in rekening gebracht.',
          'Voordat betaling wordt gevraagd, geeft de Host een begrijpelijke omschrijving en redelijk bewijs van het verlies en krijgt de Gast gelegenheid om te reageren. Een borg of betaalautorisatie geldt alleen wanneer deze vóór het boeken werd getoond en in de bevestiging is vastgelegd.'
        ]
      },
      {
        id: 'safety-liability',
        title: '10. Veiligheid en aansprakelijkheid',
        paragraphs: [
          'De Host stelt de accommodatie beschikbaar zoals bevestigd en is aansprakelijk volgens het toepasselijke recht. Niets in deze voorwaarden sluit aansprakelijkheid of consumentenrechten uit of beperkt deze wanneer dat wettelijk niet is toegestaan.',
          'Gasten gebruiken trappen, terrassen, balkons, zwembaden, apparaten en andere voorzieningen met redelijke zorg en volgen veiligheids- en bedieningsinstructies. De Host is alleen verantwoordelijk voor verlies van of schade aan persoonlijke bezittingen wanneer die verantwoordelijkheid uit het toepasselijke recht voortvloeit.',
          'Een reis- en ziektekostenverzekering die past bij de persoonlijke omstandigheden van de Gast wordt aanbevolen, maar vervangt de wettelijke verplichtingen van de Host niet.'
        ]
      },
      {
        id: 'exceptional-events',
        title: '11. Gebeurtenissen buiten redelijke controle',
        paragraphs: [
          'Als een uitzonderlijke en onvermijdelijke gebeurtenis de uitvoering beïnvloedt, informeren de partijen elkaar onmiddellijk en nemen zij redelijke maatregelen om de gevolgen te beperken. De rechten en verplichtingen van beide partijen worden bepaald door dwingend recht en de bevestigde boekingsvoorwaarden.',
          'Een tijdelijke onderbreking of externe gebeurtenis neemt de rechten van geen van beide partijen automatisch weg. Een terugbetaling, alternatieve accommodatie of andere oplossing hangt af van de omstandigheden en het recht dat op de boeking van toepassing is.'
        ]
      },
      {
        id: 'consumer-law',
        title: '12. Consumentenrechten, toepasselijk recht en geschillen',
        paragraphs: [
          'Spaans recht is van toepassing, waaronder de relevante Andalusische regels voor toerisme en consumenten. Een consument verliest hierdoor geen dwingende bescherming van het recht dat zonder deze rechtskeuze van toepassing zou zijn.',
          'Omdat het om accommodatie voor specifieke data gaat, geldt de algemene wettelijke bedenktijd voor overeenkomsten op afstand normaal gesproken niet. De contractuele annuleringsrechten van de Gast zijn vastgelegd in het voor de boeking bevestigde beleid.',
          'Geschillen worden behandeld door de volgens dwingend recht bevoegde rechter. Voordat een formele procedure wordt gestart, wordt de Gast verzocht contact op te nemen met de Host om een praktische oplossing te zoeken. Officiële klachtenformulieren voor consumenten zijn beschikbaar wanneer dat verplicht is.'
        ]
      },
      {
        id: 'version',
        title: '13. Versie, wijzigingen en contact',
        paragraphs: [
          'De documentcode, versie en publicatiedatum staan bovenaan deze pagina. Een materiële wijziging krijgt een nieuwe versie en geldt alleen voor boekingen die naar die nieuwe versie verwijzen. De voor een bestaande boeking aanvaarde versie blijft ongewijzigd, tenzij beide partijen uitdrukkelijk anders overeenkomen op een duurzame gegevensdrager.',
          'De Gast bewaart de boekingsbevestiging samen met deze voorwaarden. Vragen over een boeking of deze voorwaarden kunnen via de bovenstaande contactgegevens worden gesteld.'
        ]
      }
    ],
    privacyLinkLabel: 'Juridische kennisgeving & privacybeleid',
    closingNote: 'Informatie over privacy en gastenregistratie wordt afzonderlijk verstrekt en vervangt deze boekingsvoorwaarden niet.'
  },
  sv: {
    seo: {
      title: 'Boknings- och vistelsevillkor | AMARA',
      description: 'Fasta boknings- och vistelsevillkor för AMARA Lodging tillsammans med de bokningsspecifika pris-, betalnings- och avbokningsvillkor som bekräftas vid bokningen.'
    },
    hero: {
      subtitle: 'Tydliga villkor. Flexibla bokningsuppgifter.',
      title: 'Boknings- och vistelse&shy;villkor',
      lead: 'Den fasta ramen för direktbokningar hos AMARA Lodging.'
    },
    metadata: {
      document: 'Dokument',
      version: 'Version',
      published: 'Publicerad',
      publishedValue: '17 augusti 2026',
      appliesTo: 'Gäller för',
      appliesToValue: 'Bokningar vars bekräftelse hänvisar till version 1.0'
    },
    identity: {
      heading: 'Avtalspart',
      name: 'Namn',
      tradingAs: 'Verksam under namnet',
      address: 'Adress',
      taxId: 'Spanskt skatte-ID (NIE)',
      status: 'Status',
      statusValue: 'Privat värd – inte registrerad i handelsregistret',
      email: 'E-post',
      phone: 'Telefon',
      country: 'Spanien'
    },
    model: {
      heading: 'Ett avtal, två kompletterande delar',
      intro: 'Dessa villkor utgör den fasta rättsliga ramen. Kommersiella uppgifter som kan variera beroende på boende, datum eller vald prisplan visas före bokningen och fastställs i bokningsbekräftelsen.',
      stableTitle: 'Fasta villkor på webbplatsen',
      stableText: 'Avtalets ingående, korrekt användning, omsorg om boendet, rättvis skadehantering, ansvar, tillämplig lag och dokumentversion.',
      flexibleTitle: 'Bokningsspecifika uppgifter',
      flexibleText: 'Boende och licens, vistelsedatum, antal gäster, totalpris, betalningsplan, avbokning, deposition, husdjur, tillval och överenskomna in- eller utcheckningstider.'
    },
    sections: [
      {
        id: 'scope',
        title: '1. Avtalspart och tillämpningsområde',
        paragraphs: [
          'Dessa Boknings- och vistelsevillkor gäller för kortvarigt turistboende som tillhandahålls av den avtalspart som anges ovan (“Värden”) i det boende som anges i bokningsbekräftelsen. AMARA Lodging är Värdens verksamhetsnamn och inte en separat avtalspart.',
          'Den person som slutför bokningen är huvudgästen (“Gästen”). Gästen bekräftar att bokningsuppgifterna är korrekta och ansvarar för att alla medresenärer får kännedom om de villkor och boenderegler som berör dem.'
        ]
      },
      {
        id: 'contract-documents',
        title: '2. Avtalshandlingar och avtalets ingående',
        paragraphs: [
          'Boendeavtalet består av dessa villkor i den version som anges i bokningsbekräftelsen, de bokningsspecifika uppgifter som visas före den sista bokningsåtgärden, bokningsbekräftelsen och viktiga boenderegler som gjorts tillgängliga före bokningen.',
          'Avtalet ingås när Värden skickar bokningsbekräftelsen efter att Gästen har slutfört bokningsprocessen och en betalning eller betalningsauktorisation som då förfaller har behandlats korrekt. Ett rent tekniskt mottagningsmeddelande är endast en bokningsbekräftelse om det uttryckligen anges som en sådan.',
          'Tvingande lag har företräde. För den konkreta bokningens kommersiella uppgifter har bokningsbekräftelsen företräde framför dessa allmänna villkor; i övrigt gäller dessa villkor.'
        ]
      },
      {
        id: 'booking-details',
        title: '3. Uppgifter som fastställs för varje bokning',
        paragraphs: [
          'Innan Gästen slutför bokningen visar bokningsprocessen de villkor som gäller för valt boende och vald prisplan. Bekräftelsen dokumenterar uppgifterna i en form som Gästen kan spara.'
        ],
        bullets: [
          'boendet, adressen och tillämpligt turistregistrerings- eller licensnummer;',
          'ankomst- och avresedatum, överenskomna tider och antal gäster;',
          'totalpris, inkluderade skatter och obligatoriska avgifter samt uttryckligen valda tillägg;',
          'belopp som ska betalas, betalningsmetod och betalningsfrister;',
          'valda regler för avbokning, återbetalning, utebliven ankomst och förtida avresa;',
          'eventuell deposition eller betalningsauktorisation, tillstånd och avgift för husdjur samt andra överenskomna särskilda villkor.'
        ]
      },
      {
        id: 'payment',
        title: '4. Pris och betalning',
        paragraphs: [
          'Totalpris, eventuell förskottsbetalning, återstående belopp och förfallodagar är de som visas vid bokningen och upprepas i bokningsbekräftelsen. Valfria tillägg debiteras endast om de uttryckligen har valts eller senare avtalats.',
          'Betalningar behandlas via AMARA:s officiella bokningsmiljö och de betalningsleverantörer som erbjuds där. Om ett belopp inte tas emot i tid får Värden vidta de åtgärder som anges i de bekräftade betalningsvillkoren och som lagen tillåter, inklusive avbokning efter lämpligt meddelande när det krävs.'
        ]
      },
      {
        id: 'cancellation',
        title: '5. Avbokning, ändringar, utebliven ankomst och förtida avresa',
        paragraphs: [
          'Den avboknings- och återbetalningspolicy som visas för den valda prisplanen omedelbart före bokningen och upprepas i bekräftelsen är bindande för bokningen. Den anger även följderna av utebliven ankomst eller förtida avresa.',
          'En avbokning ska skickas via den kanal som anges i bekräftelsen och gäller när den har tagits emot. En begäran om ändrade datum, annat boende eller ändrat antal gäster gäller först när Värden har bekräftat den; ändrade priser eller villkor kan tillämpas.',
          'Om Värden avbokar en bekräftad vistelse återbetalas belopp som betalats för boende som inte tillhandahålls. Detta begränsar inte Gästens ytterligare tvingande rättigheter.'
        ]
      },
      {
        id: 'arrival',
        title: '6. Ankomst, avresa och gästregistrering',
        paragraphs: [
          'Gällande in- och utcheckningstider anges i bokningsbekräftelsen. Tidig ankomst eller sen avresa kräver förhandsgodkännande och kan endast medföra en avgift om avgiften har upplysts om och godkänts.',
          'Gäster måste lämna de identitets- och registreringsuppgifter som krävs enligt spansk lag. Digital eller kontaktlös incheckning tar inte bort denna skyldighet. Värden tillhandahåller den information som behövs för tillträde till och korrekt användning av det bokade boendet.'
        ]
      },
      {
        id: 'occupancy',
        title: '7. Beläggning och tillåten användning',
        paragraphs: [
          'Endast det antal gäster som bekräftats i bokningen får övernatta. Ytterligare övernattande gäster kräver förhandsgodkännande och den licensierade maxkapaciteten får aldrig överskridas.',
          'Boendet tillhandahålls enbart för tillfällig turistvistelse. Andrahandsuthyrning, olaglig verksamhet, kommersiell användning, fester, evenemang eller professionella produktioner är inte tillåtna utan uttrycklig skriftlig överenskommelse. Huvudgästen ansvarar för medresenärer, besökare och minderåriga under sin tillsyn.'
        ]
      },
      {
        id: 'house-rules',
        title: '8. Ordningsregler, hänsyn, rökning och husdjur',
        paragraphs: [
          'Gäster ska visa hänsyn till grannar och gemensamma utrymmen och följa boendets särskilda tystnadstider och viktiga ordningsregler som har lämnats före bokningen eller tillsammans med bekräftelsen. Praktiska instruktioner kan även ges före eller vid ankomst.',
          'Rökning inomhus är inte tillåten om inte bokningsinformationen uttryckligen anger något annat. Husdjur är endast tillåtna när det valda boendet medger det och bokningsbekräftelsen anger tillståndet och eventuell avgift. Tvingande regler om assistansdjur påverkas inte.',
          'Vid en allvarlig eller upprepad överträdelse får Värden vidta rimliga, proportionerliga och lagliga åtgärder, inklusive att avsluta vistelsen när det är motiverat. Konsekvenserna för eventuell återbetalning bestäms av de bekräftade villkoren och tvingande lag; återbetalningen förverkas inte automatiskt.'
        ]
      },
      {
        id: 'care-damage',
        title: '9. Omsorg, skador, nycklar och deposition',
        paragraphs: [
          'Gäster ska behandla boendet, inredningen och utrustningen med rimlig omsorg och omedelbart rapportera skador, fel eller förlorade tillträdesmedel så att undvikbara följdskador kan begränsas.',
          'I den utsträckning tillämplig lag föreskriver ansvarar Gästen för skador som orsakats uppsåtligen eller genom vårdslöshet, förlorade nycklar eller utrustning samt rimliga kostnader för extra städning utöver normalt bruk. Normalt slitage debiteras inte.',
          'Innan betalning begärs lämnar Värden en begriplig beskrivning och rimliga bevis på förlusten och ger Gästen möjlighet att svara. En deposition eller betalningsauktorisation gäller endast om den visades före bokningen och dokumenterades i bekräftelsen.'
        ]
      },
      {
        id: 'safety-liability',
        title: '10. Säkerhet och ansvar',
        paragraphs: [
          'Värden tillhandahåller boendet enligt bekräftelsen och ansvarar i enlighet med tillämplig lag. Inget i dessa villkor utesluter eller begränsar ansvar eller konsumenträttigheter när ett sådant undantag eller en sådan begränsning inte är tillåten enligt lag.',
          'Gäster ska använda trappor, terrasser, balkonger, pooler, apparater och andra faciliteter med rimlig försiktighet och följa säkerhets- och användningsinstruktioner. Värden ansvarar för förlust av eller skada på personliga tillhörigheter endast när ansvar följer av tillämplig lag.',
          'En rese- och sjukförsäkring som passar Gästens personliga omständigheter rekommenderas, men ersätter inte Värdens rättsliga skyldigheter.'
        ]
      },
      {
        id: 'exceptional-events',
        title: '11. Händelser utanför rimlig kontroll',
        paragraphs: [
          'Om en exceptionell och oundviklig händelse påverkar fullgörandet ska parterna informera varandra omgående och vidta rimliga åtgärder för att begränsa följderna. Båda parters rättigheter och skyldigheter bestäms av tvingande lag och de bekräftade bokningsvillkoren.',
          'Ett tillfälligt avbrott eller en extern händelse tar inte automatiskt bort någon parts rättigheter. Återbetalning, alternativt boende eller annan gottgörelse beror på omständigheterna och den lag som gäller för bokningen.'
        ]
      },
      {
        id: 'consumer-law',
        title: '12. Konsumenträttigheter, tillämplig lag och tvister',
        paragraphs: [
          'Spansk lag gäller, inklusive relevanta andalusiska turist- och konsumentregler. En konsument förlorar inte det tvingande skydd som den lag som annars skulle vara tillämplig ger.',
          'Eftersom tjänsten avser boende för bestämda datum gäller den allmänna lagstadgade ångerfristen för distansavtal normalt inte. Gästens avtalsenliga avbokningsrättigheter anges i den policy som bekräftades för bokningen.',
          'Tvister prövas av de domstolar som är behöriga enligt tvingande lag. Innan ett formellt förfarande inleds uppmanas Gästen att kontakta Värden för att försöka hitta en praktisk lösning. Officiella klagomålsblanketter för konsumenter finns tillgängliga när det krävs.'
        ]
      },
      {
        id: 'version',
        title: '13. Version, ändringar och kontakt',
        paragraphs: [
          'Dokument-ID, version och publiceringsdatum anges högst upp på sidan. En väsentlig ändring får en ny version och gäller endast för bokningar som hänvisar till den nya versionen. Den version som godkänts för en befintlig bokning förblir oförändrad om inte båda parter uttryckligen avtalar annat på ett varaktigt medium.',
          'Gästen bör spara bokningsbekräftelsen tillsammans med dessa villkor. Frågor om en bokning eller villkoren kan skickas via kontaktuppgifterna ovan.'
        ]
      }
    ],
    privacyLinkLabel: 'Juridisk information & integritetspolicy',
    closingNote: 'Information om integritet och gästregistrering lämnas separat och ersätter inte dessa bokningsvillkor.'
  }
};
