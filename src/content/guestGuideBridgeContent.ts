import type { LocalizedText } from '../types/content';

/**
 * The one public-to-guest transition block (Content Playbook §20, DR-GUEST-005).
 *
 * The meaning: the private Guest Guide is a direct-booking advantage that helps
 * guests prepare for their destination before they travel. The block names only
 * what the guide really holds for the topic: the lines are built from the
 * recommendation records, so a topic without contacts shows no contact line.
 * `{destination}` is the destination name and `{x}` is the optional promise of
 * recommendations shared only with AMARA guests.
 */
export const guestGuideBridgeContent = {
  eyebrow: {
    en: 'Your direct-booking advantage',
    de: 'Euer Direktbuchungs-Vorteil',
    es: 'Vuestra ventaja al reservar directamente',
    nl: 'Jullie voordeel bij direct boeken',
    sv: 'Er fördel när ni bokar direkt'
  } satisfies LocalizedText,
  title: {
    en: 'What we recommend to friends is in the Guest Guide.',
    de: 'Was wir Freunden empfehlen, steht im Gästeguide.',
    es: 'Lo que recomendamos a los amigos está en la Guía de huéspedes.',
    nl: 'Wat we vrienden aanraden, staat in de gastengids.',
    sv: 'Det vi rekommenderar våra vänner står i gästguiden.'
  } satisfies LocalizedText,
  lead: {
    en: 'Book directly with us and the AMARA Guest Guide for {destination} comes with your stay: the addresses we give our friends, and the details that make the day easier.',
    de: 'Wer direkt bei uns bucht, bekommt den AMARA Gästeguide für {destination} dazu: die Adressen, die wir Freunden geben, und die Details, die den Tag leichter machen.',
    es: 'Quien reserva directamente con nosotros recibe además la Guía de huéspedes AMARA para {destination}: las direcciones que damos a nuestros amigos y los detalles que hacen el día más fácil.',
    nl: 'Wie rechtstreeks bij ons boekt, krijgt de AMARA gastengids voor {destination} erbij: de adressen die we onze vrienden geven, en de details die de dag makkelijker maken.',
    sv: 'Den som bokar direkt hos oss får AMARA gästguide för {destination} på köpet: adresserna vi ger våra vänner och detaljerna som gör dagen enklare.'
  } satisfies LocalizedText,
  landingLabel: {
    en: 'Discover the Guest Guide',
    de: 'Den Gästeguide entdecken',
    es: 'Descubrir la guía para huéspedes',
    nl: 'Ontdek de Gastengids',
    sv: 'Upptäck Gästguiden'
  } satisfies LocalizedText,
  lines: {
    places: {
      en: 'Our addresses in {destination}: restaurants, beaches, walks{x}',
      de: 'Unsere Adressen in {destination}: Restaurants, Strände, Wege{x}',
      es: 'Nuestras direcciones en {destination}: restaurantes, playas, caminos{x}',
      nl: 'Onze adressen in {destination}: restaurants, stranden, wandelingen{x}',
      sv: 'Våra adresser i {destination}: restauranger, stränder, promenader{x}'
    } satisfies LocalizedText,
    exclusive: {
      en: ', some of them only there',
      de: ', ein Teil davon steht nur dort',
      es: ', algunas solo están ahí',
      nl: ', een deel staat alleen daar',
      sv: ', en del av dem bara där'
    } satisfies LocalizedText,
    contacts: {
      en: 'Phone or WhatsApp for reservations',
      de: 'Telefon oder WhatsApp zum Reservieren',
      es: 'Teléfono o WhatsApp para reservar',
      nl: 'Telefoon of WhatsApp om te reserveren',
      sv: 'Telefon eller WhatsApp för att boka'
    } satisfies LocalizedText,
    access: {
      en: 'The way from your front door, in minutes',
      de: 'Der Weg von eurer Haustür, in Minuten',
      es: 'El camino desde vuestra puerta, en minutos',
      nl: 'De route vanaf jullie voordeur, in minuten',
      sv: 'Vägen från er dörr, i minuter'
    } satisfies LocalizedText,
    planB: {
      en: 'A second address in case the first one is full',
      de: 'Eine zweite Adresse, falls die erste voll ist',
      es: 'Una segunda dirección por si la primera está llena',
      nl: 'Een tweede adres voor als het eerste vol is',
      sv: 'En andra adress om den första är full'
    } satisfies LocalizedText,
    firstHand: {
      en: 'What we experienced there ourselves',
      de: 'Was wir dort selbst erlebt haben',
      es: 'Lo que hemos vivido allí nosotros mismos',
      nl: 'Wat we er zelf hebben beleefd',
      sv: 'Vad vi själva har upplevt där'
    } satisfies LocalizedText
  }
};
