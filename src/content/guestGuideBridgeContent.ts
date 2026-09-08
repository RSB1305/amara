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
    en: 'Arrive prepared. Discover the places that make your holiday special.',
    de: 'Kommt vorbereitet an. Entdeckt die Orte, die euren Urlaub besonders machen.',
    es: 'Llegad preparados. Descubrid los lugares que harán especial vuestro viaje.',
    nl: 'Kom voorbereid aan. Ontdek de plekken die jullie vakantie bijzonder maken.',
    sv: 'Kom väl förberedda. Upptäck platserna som gör er semester speciell.'
  } satisfies LocalizedText,
  lead: {
    en: 'With your direct booking, you receive our private AMARA Guest Guide for {destination}. We share our personal experience, local favourites, hidden gems and secret spots — with the right timing, the route from your stay and honest alternatives. You can get to know the place before you travel and spend more of your holiday together enjoying the experiences that truly suit you.',
    de: 'Mit eurer Direktbuchung erhaltet ihr unseren privaten AMARA Gästeguide für {destination}. Darin teilen wir unsere persönlichen Erfahrungen, lokale Lieblingsorte, Hidden Gems und Secret Spots – mit dem richtigen Zeitpunkt, dem Weg von eurer Unterkunft und ehrlichen Alternativen. So könnt ihr euch schon vor der Reise orientieren und vor Ort mehr gemeinsame Zeit mit den Erlebnissen verbringen, die wirklich zu euch passen.',
    es: 'Con vuestra reserva directa recibís nuestra guía privada para {destination}. Compartimos nuestra experiencia personal, favoritos locales, rincones poco conocidos y lugares especiales, con el mejor momento, la ruta desde vuestro alojamiento y alternativas sinceras. Así podéis conocer el destino antes del viaje y dedicar más tiempo juntos a las experiencias que realmente encajan con vosotros.',
    nl: 'Met jullie directe boeking krijgen jullie onze privé AMARA Gastengids voor {destination}. We delen onze persoonlijke ervaringen, lokale favorieten, hidden gems en bijzondere plekken, met het juiste moment, de route vanaf jullie verblijf en eerlijke alternatieven. Zo leren jullie de bestemming al voor vertrek kennen en blijft er tijdens de vakantie meer tijd over voor ervaringen die echt bij jullie passen.',
    sv: 'När ni bokar direkt får ni vår privata AMARA Gästguide för {destination}. Vi delar våra personliga erfarenheter, lokala favoriter, gömda pärlor och särskilda platser, med rätt tidpunkt, vägen från ert boende och ärliga alternativ. Då lär ni känna resmålet redan före avresan och får mer gemensam tid till upplevelser som verkligen passar er.'
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
      en: 'Local favourites, hidden gems and secret spots for your time in {destination}{x}',
      de: 'Lokale Lieblingsorte, Hidden Gems und Secret Spots für eure Zeit in {destination}{x}',
      es: 'Favoritos locales, rincones poco conocidos y lugares especiales para vuestro tiempo en {destination}{x}',
      nl: 'Lokale favorieten, hidden gems en bijzondere plekken voor jullie tijd in {destination}{x}',
      sv: 'Lokala favoriter, gömda pärlor och särskilda platser för er tid i {destination}{x}'
    } satisfies LocalizedText,
    exclusive: {
      en: ' — including places we share only with our guests',
      de: ' – darunter Orte, die wir nur mit unseren Gästen teilen',
      es: ', incluidos lugares que compartimos solo con nuestros huéspedes',
      nl: ', waaronder plekken die we alleen met onze gasten delen',
      sv: ', inklusive platser som vi bara delar med våra gäster'
    } satisfies LocalizedText,
    contacts: {
      en: 'Direct contacts that make reservations easier',
      de: 'Direkte Kontakte, die euch die Reservierung erleichtern',
      es: 'Contactos directos que facilitan la reserva',
      nl: 'Directe contacten die reserveren makkelijker maken',
      sv: 'Direktkontakter som gör bokningen enklare'
    } satisfies LocalizedText,
    access: {
      en: 'The right route and timing from your AMARA stay',
      de: 'Der passende Weg und Zeitpunkt von eurer AMARA-Unterkunft',
      es: 'La ruta y el momento adecuados desde vuestro alojamiento AMARA',
      nl: 'De passende route en timing vanaf jullie AMARA-verblijf',
      sv: 'Rätt väg och tidpunkt från ert AMARA-boende'
    } satisfies LocalizedText,
    planB: {
      en: 'Honest alternatives if your first choice is full or closed',
      de: 'Ehrliche Alternativen, wenn euer erster Wunsch voll oder geschlossen ist',
      es: 'Alternativas sinceras si vuestra primera opción está completa o cerrada',
      nl: 'Eerlijke alternatieven als jullie eerste keuze vol of gesloten is',
      sv: 'Ärliga alternativ om ert förstaval är fullt eller stängt'
    } satisfies LocalizedText,
    firstHand: {
      en: 'Our own experience, turned into useful tips for your days together',
      de: 'Unsere eigenen Erfahrungen als hilfreiche Tipps für eure gemeinsame Zeit',
      es: 'Nuestra propia experiencia convertida en consejos útiles para vuestro tiempo juntos',
      nl: 'Onze eigen ervaringen als bruikbare tips voor jullie tijd samen',
      sv: 'Våra egna erfarenheter som användbara tips för er gemensamma tid'
    } satisfies LocalizedText
  }
};
