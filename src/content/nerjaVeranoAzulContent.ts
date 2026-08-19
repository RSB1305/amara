import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';
import type { LinkToken } from '../lib/linkResolver';

export interface NerjaVeranoAzulSection {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: string[];
}

type NerjaVeranoAzulItineraryToken =
  | 'nerja_beaches_authority'
  | 'nerja_balcon_de_europa'
  | 'nerja_caves'
  | 'nerja_experience_hub';

interface NerjaVeranoAzulLocale {
  navLabel: string;
  breadcrumbLabel: string;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    note: string;
    updated: string;
  };
  facts: Array<{ label: string; value: string }>;
  trailer: {
    label: string;
    privacyNote: string;
    loadAction: string;
  };
  sections: NerjaVeranoAzulSection[];
  itinerary: {
    eyebrow: string;
    title: string;
    intro: string;
    links: Array<{ token: NerjaVeranoAzulItineraryToken; label: string; text: string }>;
  };
  related: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: Array<{ label: string; text: string; href: string }>;
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    propertyLabel: string;
    experienceLabel: string;
  };
  footerHighlights: {
    experience: string;
    beaches: string;
    balance: string;
  };
}

const article = {
  datePublished: '2026-08-19',
  dateModified: '2026-08-19',
  authorName: 'Robert Sebastian Böhmer',
  authorType: 'Person' as const,
  authorSlug: 'amara-about-us'
};

const officialSources = {
  rtveStory:
    'https://www.rtve.es/rtve/20180413/verano-azul/1713840.shtml',
  rtveProduction:
    'https://www.rtve.es/play/noticias/20111010/como-rodamos-verano-azul/465995.shtml',
  municipality: {
    profile: 'https://www.nerja.es/fallece-antonio-mercero-director-verano-azul/',
    route:
      'https://www.nerja.es/nerja-pone-en-marcha-la-ruta-turistica-de-verano-azul-con-una-aplicacion-de-realidad-aumentada/',
    anniversary:
      'https://www.nerja.es/nerja-conmemora-el-40-aniversario-del-inicio-del-rodaje-de-verano-azul/',
    anforas:
      'https://www.nerja.es/las-anforas-de-verano-azul-se-instalan-en-la-casa-consistorial/'
  }
};

export const nerjaVeranoAzulSeo: AmaraAuthoringSeo = {
  version: '2026-08-19-nerja-verano-azul-v1.0-B',
  pageType: 'B',
  entityKey: 'amara-brand',
  article,
  ogImage: '/images/amara-frigiliana-pueblo/nerja-coast-aerial.jpeg',
  languages: {
    en: {
      title: 'Verano Azul in Nerja: Filming locations, the TV series phenomenon and its legacy',
      description:
        'The series that made Nerja a national landmark in Spain: shooting locations, how the production shaped local identity and what still remains visible in town today.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    de: {
      title: 'Verano Azul in Nerja: Drehorte, TV-Phänomen & Erbe',
      description:
        'Die Serie, die Nerja deutschland- und spanienweit bekannt machte: Drehorte, wie sie die Stadt prägte und was heute im Ort noch als Erbe sichtbar ist.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    es: {
      title: 'Verano Azul en Nerja: localizaciones, TV y huella actual',
      description:
        'La serie que convirtió a Nerja en referencia nacional: localizaciones, cómo marcó la identidad local y qué queda hoy de su legado.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    nl: {
      title: 'Verano Azul in Nerja: opnames, TV-fenomeen en nalatenschap',
      description:
        'De serie die Nerja in de hele Spaanse media zichtbaar maakte: opnamelocaties, hoe dat de plaats heeft vormgegeven en wat er nog zichtbaar is.',
      robots: 'index, follow',
      canonical: 'auto'
    },
    sv: {
      title:
        'Verano Azul i Nerja: inspelning, TV-fenomen och arv',
      description:
        'Serien som gjorde Nerja känt över hela Spanien: inspelningsplatser, hur den formade platsens identitet och vad som fortfarande går att upptäcka.',
      robots: 'index, follow',
      canonical: 'auto'
    }
  }
};

export const nerjaVeranoAzulContent: Record<AmaraLanguage, NerjaVeranoAzulLocale> = {
  en: {
    navLabel: 'Verano Azul',
    breadcrumbLabel: 'Verano Azul',
    hero: {
      eyebrow: 'Nerja · TV memory',
      title: 'Verano Azul – the series that made Nerja known across Spain',
      standfirst:
        'The TV series Verano Azul is where many families met Nerja for the first time. It is also where the town acquired a shared visual memory that still shapes how locals speak about certain streets, the Balcón and the old coast.',
      note: 'Editorial guide written from verified public sources and municipal information. It avoids fan speculation and travel booking details.',
      updated: 'Edited in August 2026'
    },
    facts: [
      { label: 'TV format', value: '19 episodes · TVE serial, three-season structure in production records' },
      { label: 'Broadcast run', value: '11 Oct 1981 – 14 Feb 1982' },
      { label: 'Audience reach', value: 'Later episodes reported over 9 million viewers' },
      { label: 'First day in Nerja', value: '21 Aug 1979, Playa de Burriana' },
      { label: 'Local legacy', value: 'Parque Verano Azul, La Dorada replica and an AR route launched in 2023' }
    ],
    trailer: {
      label: 'Official Verano Azul trailer',
      privacyNote:
        'The trailer is hosted on YouTube. Loading it transmits your IP address to Google and may store data locally.',
      loadAction: 'Load trailer'
    },
    sections: [
      {
        id: 'tv-phenomenon',
        eyebrow: 'The TV phenomenon',
        title: 'How this series became part of a whole generation’s memory',
        paragraphs: [
          'Verano Azul is not remembered only for its story. Its broadcast impact is equally part of its legacy: 19 episodes, and a first phase that reached a broad Spanish audience when shown on TVE.',
          'According to production and broadcast records, the original run is placed between 11 October 1981 and 14 February 1982, with later episodes repeatedly cited as drawing very high audience numbers.',
          'That scale was never just a media fact; it changed how viewers recognized Nerja and its coastline. For many, the series became a visual map long before any guidebook did.'
        ]
      },
      {
        id: 'why-nerja',
        eyebrow: 'Why Nerja',
        title: 'Why the town was selected after scouting on the Mediterranean coast',
        paragraphs: [
          'The production’s early recce process in the Mediterranean landscape looked for places that offered varied light, sea access and lived-in streets within short travel reach.',
          'Nerja worked because production could move between intimate urban scenes and open shoreline settings with practical continuity. That flexibility made the town suitable for a long-format serial model.',
          'The first planned shot in Nerja happened on 21 August 1979. From that date on, the location team relied heavily on Playa de Burriana and surrounding access patterns for scheduling and logistics.'
        ]
      },
      {
        id: 'nerja-in-the-series',
        eyebrow: 'Nerja as part of the series',
        title: 'Playa de Burriana, Balcón de Europa, Cala Chica and the urban streets',
        paragraphs: [
          'Nerja’s map inside the series includes multiple anchors: Playa de Burriana, Balcón de Europa, Cala Chica and the Cueva de Nerja, plus residential and commercial streets in and around the centre.',
          'The production also used the town’s transitions and road geography for movement and crowd continuity, not only its postcard scenes. This is one reason the series still feels geographically coherent despite the amount of screen time.',
          'Not every shot was filmed in Nerja. Contemporary material also points to locations near Motril and Almuñécar being used for parts of the story-world, so the full series geography is larger than the municipality map.'
        ]
      },
      {
        id: 'chanquete-la-dorada',
        eyebrow: 'Chanquete and La Dorada',
        title: 'How iconography was built and how the replica is presented today',
        paragraphs: [
          'Chanquete became the emotional centre of the show’s character world and still appears in guides, anecdotes and conversations among visitors.',
          'La Dorada in Nerja was built as a purpose-made screen construction, not a historic surviving vessel location from the original shooting period. That distinction matters when you visit.',
          'Today the set is represented as a carefully reconstructed location and interpretation site. It is an intentional memory marker, not the exact original boat from filming.'
        ]
      },
      {
        id: 'changed-nerja',
        eyebrow: 'How Verano Azul changed Nerja',
        title: 'Officially echoed claims: visibility, identity and national recognition',
        paragraphs: [
          'Municipal and local cultural pages repeatedly describe Verano Azul as a turning point for Nerja’s visibility far beyond Andalusia, with lasting effects on identity and local pride.',
          'The page-level impact is less “overnight tourism” and more a durable change in recognition: people now arrive with specific points of reference and a stronger sense that they are entering a place already known in popular memory.',
          'That is precisely why the series remains in local narratives and not only in entertainment nostalgia. It became a shared point of reference for how Nerja presents itself to guests.'
        ]
      },
      {
        id: 'verano-azul-today',
        eyebrow: 'Verano Azul in Nerja today',
        title: 'From route and replica to everyday traces',
        paragraphs: [
          'Nerja today keeps Verano Azul visible through multiple nodes: Parque Verano Azul, the La Dorada reconstruction site, Antonio Mercero’s seafront avenue (officially named in tourism-facing materials), Calle Antonio Ferrandis, the Chanquete statue near Playa Calahonda and the Balcón de Europa.',
          'The municipal AR route launched in 2023 adds context points and is now one practical way to read how the series is embedded in the city narrative today.',
          'These are not only tourism markers; they are also a visual language for guests and residents who continue to discuss the same places from different eras.'
        ]
      },
      {
        id: 'sources-and-method',
        eyebrow: 'Approach and limits',
        title: 'What is confirmed and where we keep precision',
        paragraphs: [
          'The core factual claims in this guide come from RTVE production/production-history reporting and official municipal pages.',
          'Where municipal records describe identity or visibility effects, we keep wording general and avoid adding economic figures that are not part of the same source layer.',
          'If you are planning a visit, the safest way to move between pages is to use official location and local pages rather than informal map copy from social media.'
        ]
      }
    ],
    itinerary: {
      eyebrow: 'Following Verano Azul today',
      title: 'A short guest-facing itinerary',
      intro:
        'If you want a practical walk that still follows the cultural map of the series, take this route by order and compare each setting with your local landmarks.',
      links: [
        { token: 'nerja_beaches_authority', label: 'Playa and coast', text: 'Start at the main coastal context before moving into interior spots.' },
        { token: 'nerja_balcon_de_europa', label: 'Balcón de Europa', text: 'Use it as a skyline anchor and visual reference point.' },
        { token: 'nerja_caves', label: 'Caves of Nerja', text: 'Cross from coast to inland landmarks and understand the wider location system.' },
        { token: 'nerja_experience_hub', label: 'All Nerja experiences', text: 'Return to the full experience hub for nearby recommendations.' }
      ]
    },
    related: {
      eyebrow: 'Continue reading',
      title: 'Nerja culture and places around Verano Azul',
      links: [
        {
          token: 'nerja_beaches_authority',
          label: 'Beaches in Nerja',
          text: 'How the beaches support both daily life and the series memory landscape.'
        },
        {
          token: 'nerja_balcon_de_europa',
          label: 'Balcón de Europa',
          text: 'How Nerja’s visual emblem became one of the route’s main viewpoints.'
        },
        {
          token: 'nerja_caves',
          label: 'Cave guide',
          text: 'One of the long-running landmarks that still shapes how guests move through Nerja.'
        }
      ]
    },
    sources: {
      eyebrow: 'Sources checked',
      title: 'Official material used in this guide',
      intro:
        'Public announcements and municipal pages were used for production dates, shooting references and legacy claims. We keep direct interpretation points conservative where source detail is limited.',
      checked: 'Sources reviewed in August 2026.',
      links: [
        { label: 'RTVE · Verano Azul archive page', text: 'Main RTVE reference entry with public coverage.', href: officialSources.rtveStory },
        { label: 'RTVE · How Verano Azul was filmed', text: 'Production context and filming process notes.', href: officialSources.rtveProduction },
        { label: 'Ayuntamiento de Nerja · Director profile', text: 'Municipal remembrance around Antonio Mercero and local context.', href: officialSources.municipality.profile },
        { label: 'Ayuntamiento de Nerja · AR route launch', text: 'Municipal context for the 2023 route and its purpose.', href: officialSources.municipality.route },
        { label: 'Ayuntamiento de Nerja · 40th anniversary', text: 'Municipal acknowledgement of the start of filming and memory milestones.', href: officialSources.municipality.anniversary },
        { label: 'Ayuntamiento de Nerja · La Dorada memorial context', text: 'Municipal reference for the La Dorada replica and commemorative framing.', href: officialSources.municipality.anforas }
      ]
    },
    closing: {
      eyebrow: 'Where to go next',
      title: 'Verano Azul left a map. This guide helps you walk it with context.',
      body: 'The show shaped Nerja’s memory as a filmed place. Start from the beach and work uphill into the old quarter to feel the continuity between screen and town.',
      propertyLabel: 'View AMARA Playa',
      experienceLabel: 'Nerja experiences'
    },
    footerHighlights: {
      experience: 'Nerja experiences',
      beaches: 'Nerja beaches',
      balance: 'Cultural anchors'
    }
  },
  de: {
    navLabel: 'Verano Azul',
    breadcrumbLabel: 'Verano Azul',
    hero: {
      eyebrow: 'Nerja · TV-Erbe',
      title: 'Verano Azul – die Serie, die Nerja in ganz Spanien bekannt machte',
      standfirst:
        'Verano Azul war für viele Familien die erste Berührung mit Nerja. Die Serie hat eine gemeinsame Erinnerungskarte hinterlassen, die heute genauso in der Stadt wie im Urlaubswortschatz wirkt.',
      note: 'Diese Übersicht basiert auf verifizierten öffentlichen Quellen. Spekulative Fan-Details und Buchungsinhalte sind bewusst ausgeklammert.',
      updated: 'Überarbeitet im August 2026'
    },
    facts: [
      { label: 'TV-Format', value: '19 Episoden · TVE-Produktion mit langem Episodenlauf' },
      { label: 'Ausstrahlung', value: '11. Oktober 1981 – 14. Februar 1982' },
      { label: 'Publikumsreichweite', value: 'Später wurden bei späteren Episoden mehr als 9 Millionen Zuschauer genannt' },
      { label: 'Erster Drehtag', value: '21. August 1979, Playa de Burriana' },
      { label: 'Lokales Erbe', value: 'Parque Verano Azul, Replikat La Dorada und AR-Route seit 2023' }
    ],
    trailer: {
      label: 'Offizieller Verano Azul Trailer',
      privacyNote:
        'Der Trailer liegt bei YouTube. Beim Laden werden IP-Daten an Google übertragen; das kann Datenspeicherung auf dem Gerät nach sich ziehen.',
      loadAction: 'Trailer laden'
    },
    sections: [
      {
        id: 'tv-phenomenon',
        eyebrow: 'Das TV-Phänomen',
        title: 'Wie die Serie zu einem kulturellen Bezugspunkt wurde',
        paragraphs: [
          'Verano Azul ist nicht nur wegen der Handlung im Gedächtnis, sondern auch wegen seiner Reichweite im Fernsehen. 19 Episoden und eine bundesweit wahrgenommene Verbreitung prägten die Wahrnehmung.',
          'In den öffentlich zugänglichen Produktions- und Ausstrahlungsangaben liegt der Sendezeitraum zwischen dem 11. Oktober 1981 und dem 14. Februar 1982; spätere Folgen wurden mit deutlich hohen Reichweiten genannt.',
          'Das machte Nerja für viele nicht nur zu einem Drehort, sondern zu einem visuellen Bezugspunkt vor jeder Reiseplanung.'
        ]
      },
      {
        id: 'why-nerja',
        eyebrow: 'Warum Nerja',
        title: 'Warum Nerja nach Ortssichtung an der Küste ausgewählt wurde',
        paragraphs: [
          'Bei den Recherchen der Produktion wurden Orte gesucht, die zugleich Strandszenen und städtische Straßenszenen sinnvoll verbinden konnten.',
          'Nerja bot diese Mischung in guter Form: stadtnahe Strukturen, offene Küste und wiedererkennbare Perspektiven, die in Serienproduktion schnell planbar sind.',
          'Der erste dokumentierte Drehtag in Nerja liegt auf den 21. August 1979 – und damit auf der Basis vieler Ortsentscheidungen in den Folgewochen.'
        ]
      },
      {
        id: 'nerja-in-the-series',
        eyebrow: 'Nerja als Ortsbild',
        title: 'Playa de Burriana, Balcón, Cala Chica und die Stadtstraßen',
        paragraphs: [
          'Zu den wichtigsten Ankerpunkten im Serienbild gehören Playa de Burriana, der Balcón de Europa, Cala Chica und die Cueva de Nerja sowie Straßen im Ortskern.',
          'Die Produktion nutzte häufig Übergänge zwischen diesen Punkten, sodass die Serie wie aus einem zusammenhängenden Ortssystem wirkt.',
          'Nicht jedes Motiv wurde jedoch in Nerja gedreht; Motril und Almuñécar wurden ebenfalls als weitere Drehorte erwähnt.'
        ]
      },
      {
        id: 'chanquete-la-dorada',
        eyebrow: 'Chanquete und La Dorada',
        title: 'Drehbildsprache und die heutige Repräsentation',
        paragraphs: [
          'Chanquete ist für die Serie zu einer Ikone der Figurwelt geworden, die bis heute im Erzählstoff der Stadt auftaucht.',
          'La Dorada in Nerja war ein eigens gebautes Film-Set für die Produktion, kein original erhaltener historischer Ursprung.',
          'Heute ist es als Rekonstruktion und Erinnerungszeichen präsent, nicht als originaler, vollständig erhaltener Drehschiff-Ort.'
        ]
      },
      {
        id: 'changed-nerja',
        eyebrow: 'Wie Verano Azul Nerja veränderte',
        title: 'Amtlich benannte Folgen: Sichtbarkeit, Identität, Bekanntheit',
        paragraphs: [
          'Lokale und kommunale Quellen beschreiben Verano Azul als nachhaltigen Faktor für die Bekanntheit von Nerja in Spanien.',
          'Nicht als kurzfristiger Werbeeffekt ist es zu sehen, sondern als langfristiger Identitätsanker mit bleibendem Wiedererkennungswert.',
          'Das erklärt, warum die Serie in vielen lokalen Erzählungen weiterhin als Referenz für die Stadt aufscheint.'
        ]
      },
      {
        id: 'verano-azul-today',
        eyebrow: 'Verano Azul in Nerja heute',
        title: 'Routenpunkte und sichtbare Erinnerung',
        paragraphs: [
          'Heute sind zentrale Knotenpunkte: Parque Verano Azul, Replikat La Dorada, Antonio-Mercero-Promenade, Calle Antonio Ferrandis, die Chanquete-Statue bei Playa Calahonda und der Balcón de Europa.',
          'Seit 2023 ergänzt eine AR-Route diesen Bestand um zusätzliche kontextsensitive Punkte.',
          'Diese Orte funktionieren zugleich als Erinnerungsrahmen und als Orientierung für Gäste, die den Serienkontext vor Ort erleben wollen.'
        ]
      },
      {
        id: 'sources-and-method',
        eyebrow: 'Vorgehen',
        title: 'Was sicher ist und wie wir präzise bleiben',
        paragraphs: [
          'Die zentralen Tatsachen beruhen auf RTVE-Berichten sowie offiziellen kommunalen Mitteilungen.',
          'Bei Wirkungs- und Identitätsaussagen bleibt die Sprache bewusst zurückhaltend, um nicht in unpräzise wirtschaftliche Zahlen zu gehen.',
          'Für konkrete Besuchsabläufe bleibt der lokale Kontext der offiziellen Seiten die zuverlässigere Grundlage.'
        ]
      }
    ],
    itinerary: {
      eyebrow: 'Verano Azul heute erleben',
      title: 'Ein kurzer Spaziergang ohne Verwechslung',
      intro:
        'Wenn ihr die kulturelle Route auf die Stadt übertragen wollt, ist diese Reihenfolge ein guter Startpunkt.',
      links: [
        { token: 'nerja_beaches_authority', label: 'Strandbereich', text: 'Beginnt bei der Küste und klärt den Kontext vor den Innenstädten.' },
        { token: 'nerja_balcon_de_europa', label: 'Balcón de Europa', text: 'Nutze ihn als visuellen Anker für den Übergang.' },
        { token: 'nerja_caves', label: 'Cueva de Nerja', text: 'Verbinde Küste und Zentrum über den weiteren Kulturkorridor.' },
        { token: 'nerja_experience_hub', label: 'Alle Nerja-Erfahrungen', text: 'Zurück zum Erlebnisse-Hub für den nächsten Schritt.' }
      ]
    },
    related: {
      eyebrow: 'Weiterlesen',
      title: 'Mehr kulturelle Orte rund um Verano Azul',
      links: [
        {
          token: 'nerja_beaches_authority',
          label: 'Strände in Nerja',
          text: 'Wie die Küstenabschnitte in lokalen und kulturellen Erzählungen wirken.'
        },
        {
          token: 'nerja_balcon_de_europa',
          label: 'Balcón de Europa',
          text: 'Der Aussichtspunkt, an dem der visuelle Kontext des Ortes sofort klar wird.'
        },
        {
          token: 'nerja_caves',
          label: 'Cave guide',
          text: 'Eine der langfristig bekannten Landmarken im Stadtgefüge.'
        }
      ]
    },
    sources: {
      eyebrow: 'Genutzte Quellen',
      title: 'Amtliche Quellenbasis',
      intro:
        'RTVE-Material und kommunale Veröffentlichungen liefern die tragenden Fakten zu Produktion, Drehorten und Erinnerungsarbeit. Wo der Beleggrad geringer ist, bleibt die Aussage vorsichtig.',
      checked: 'Quellen geprüft im August 2026.',
      links: [
        { label: 'RTVE · Verano Azul-Übersicht', text: 'Öffentliche RTVE-Referenz zur Serie.', href: officialSources.rtveStory },
        { label: 'RTVE · Produktionshinweise', text: 'Kontext zu Arbeitsweise und Produktionsabläufen.', href: officialSources.rtveProduction },
        { label: 'Ayuntamiento · Mercero-Notiz', text: 'Kommunaler Kontext zu Antonio Mercero.', href: officialSources.municipality.profile },
        { label: 'Ayuntamiento · AR-Route', text: 'Kommunale Darstellung der neuen AR-Route.', href: officialSources.municipality.route },
        { label: 'Ayuntamiento · 40-Jahres-Gedenken', text: 'Kommunale Erinnerung an den Drehbeginn.', href: officialSources.municipality.anniversary },
        { label: 'Ayuntamiento · La-Dorada-Kontext', text: 'Kommunaler Bezug zu Erinnerung und Rezeption.', href: officialSources.municipality.anforas }
      ]
    },
    closing: {
      eyebrow: 'Der nächste Schritt',
      title: 'Verano Azul hat eine Karte hinterlassen. Sie ist heute noch lesbar.',
      body: 'Nehmt die Küste als Einstieg, steigert euch ins Zentrum – und nehmt dann den Blick auf den Ort an, statt die Orte selbst als Kulisse abzuhaken.',
      propertyLabel: 'AMARA Playa ansehen',
      experienceLabel: 'Nerja-Erlebnisse'
    },
    footerHighlights: {
      experience: 'Nerja-Erlebnisse',
      beaches: 'Nerja Strände',
      balance: 'Kulturelle Eckpunkte'
    }
  },
  es: {
    navLabel: 'Verano Azul',
    breadcrumbLabel: 'Verano Azul',
    hero: {
      eyebrow: 'Nerja · Memoria audiovisual',
      title: 'Verano Azul: la serie que puso a Nerja en el mapa de España',
      standfirst:
        'Para muchas familias, Verano Azul fue la primera vez que oyó hablar de Nerja. La serie también dejó una memoria visual compartida que sigue presente en la vida cotidiana del municipio.',
      note: 'La guía se basa en fuentes públicas verificables y evita la especulación de fandom y datos de alquileres o precios.',
      updated: 'Revisada en agosto de 2026'
    },
    facts: [
      { label: 'Formato', value: '19 capítulos · producción serial de TVE' },
      { label: 'Emisión', value: '11 octubre de 1981 – 14 febrero de 1982' },
      { label: 'Alcance', value: 'Episodios posteriores con más de 9 millones de espectadores' },
      { label: 'Primer día de rodaje', value: '21 agosto de 1979, Playa de Burriana' },
      { label: 'Huella local', value: 'Parque Verano Azul, réplica de La Dorada y ruta de RA desde 2023' }
    ],
    trailer: {
      label: 'Tráiler oficial de Verano Azul',
      privacyNote:
        'El tráiler está alojado en YouTube. Al cargarlo se transmite la IP a Google, que también puede guardar datos locales.',
      loadAction: 'Cargar tráiler'
    },
    sections: [
      {
        id: 'tv-phenomenon',
        eyebrow: 'El fenómeno televisivo',
        title: 'Cómo se convirtió en memoria de varias generaciones',
        paragraphs: [
          'Verano Azul no se recuerda solo por su argumento: también dejó una huella masiva en la emisión pública y en la cultura compartida.',
          'La documentación pública sitúa el primer bloque entre el 11 de octubre de 1981 y el 14 de febrero de 1982, y recoge una audiencia muy alta en capítulos posteriores.',
          'Ese alcance hizo que muchos viajeros reconocieran Nerja antes de visitarla, y que la ciudad adquiriera referencias comunes para orientarse en pantalla y en la vida real.'
        ]
      },
      {
        id: 'why-nerja',
        eyebrow: 'Por qué Nerja',
        title: 'Por qué el equipo eligió la localidad tras el localizador costero',
        paragraphs: [
          'En los procesos de localización se buscó un entorno con vida urbana, luz costera y transiciones entre calle y mar.',
          'Nerja permitió sostener ese doble registro de manera eficiente: escenas de pueblo y escenas de costa en continuidad narrativa.',
          'El primer día de rodaje citado en fuentes locales es el 21 de agosto de 1979, en la Playa de Burriana.'
        ]
      },
      {
        id: 'nerja-in-the-series',
        eyebrow: 'Nerja en la serie',
        title: 'Playa de Burriana, Balcón, Cala Chica y calles del centro',
        paragraphs: [
          'El mapa serial incluye puntos claramente reconocibles: Playa de Burriana, Balcón de Europa, Cala Chica y la Cueva de Nerja, además de tramos urbanos del centro.',
          'La película aprovecha también los cambios de ritmo entre esos espacios, por eso el recorrido parece coherente y familiar pese a la distancia entre escenas.',
          'No todo se rodó en Nerja: el proceso también utilizó Motril y Almuñécar para otras secuencias.'
        ]
      },
      {
        id: 'chanquete-la-dorada',
        eyebrow: 'Chanquete y La Dorada',
        title: 'La iconicidad construida y la réplica contemporánea',
        paragraphs: [
          'Chanquete quedó como icono del universo de la serie y forma parte de cómo se habla hoy de la ruta.',
          'La Dorada de Nerja fue un set funcional para la producción; su versión actual no es el barco original de rodaje conservado intacto.',
          'Hoy se presenta como recreación y punto de memoria, con una intención de interpretación más que de autenticidad material total.'
        ]
      },
      {
        id: 'changed-nerja',
        eyebrow: 'Cómo cambió Nerja Verano Azul',
        title: 'Lo que repite el municipio: visibilidad y reconocimiento',
        paragraphs: [
          'Las fuentes municipales describen a Verano Azul como un referente de visibilidad nacional para Nerja y de identidad colectiva local.',
          'No se plantea como “boom inmediato” aislado, sino como un cambio de reconocimiento duradero: el visitante llega con coordenadas previas.',
          'Por eso la serie sigue viva en el relato de la localidad y no se limita a una efímera referencia nostálgica.'
        ]
      },
      {
        id: 'verano-azul-today',
        eyebrow: 'Verano Azul en Nerja hoy',
        title: 'Del pasado televisivo a la presencia diaria',
        paragraphs: [
          'Hoy se activan hitos como el Parque Verano Azul, la réplica de La Dorada, el paseo Antonio Mercero, la Calle Antonio Ferrandis, la estatua de Chanquete en Playa Calahonda y el Balcón de Europa.',
          'En 2023 se puso en marcha la ruta turística en RA para añadir contexto y recorrido a esa memoria.',
          'No son solo elementos promocionales: también organizan la lectura del lugar para quienes llegan con la serie en la cabeza.'
        ]
      },
      {
        id: 'sources-and-method',
        eyebrow: 'Método editorial',
        title: 'Qué afirmamos con firmeza y qué dejamos sin extrapolar',
        paragraphs: [
          'La base informativa viene de RTVE y de páginas oficiales municipales, no de rumores de rodaje.',
          'En la influencia económica evitamos cifras operativas no explicitadas en las fuentes: aquí priorizamos identidad, visibilidad y contexto factual.',
          'Para planificar una visita concreta, la ruta local y los canales oficiales siguen siendo la referencia más segura.'
        ]
      }
    ],
    itinerary: {
      eyebrow: 'Verano Azul hoy',
      title: 'Una ruta breve para ir haciéndola real',
      intro:
        'Para vivir una lectura de la serie sin confundir ficción y agenda, seguí este orden práctico.',
      links: [
        { token: 'nerja_beaches_authority', label: 'Playa y costa', text: 'Empieza por la escala de costa para situar la luz y el acceso.' },
        { token: 'nerja_balcon_de_europa', label: 'Balcón de Europa', text: 'Úsalo como ancla visual y de orientación.' },
        { token: 'nerja_caves', label: 'Cueva de Nerja', text: 'Conecta hacia el eje interior de la zona más conocida por los huéspedes.' },
        { token: 'nerja_experience_hub', label: 'Todas las experiencias de Nerja', text: 'Vuelve al hub para planificar el resto de la estancia.' }
      ]
    },
    related: {
      eyebrow: 'Continuar leyendo',
      title: 'Más cultura y lugares de la ruta',
      links: [
        {
          token: 'nerja_beaches_authority',
          label: 'Playas de Nerja',
          text: 'Cómo la costa influye en el tiempo y en el ritmo de la experiencia diaria.'
        },
        {
          token: 'nerja_balcon_de_europa',
          label: 'Balcón de Europa',
          text: 'El punto más fotogénico y de referencia visual de la ciudad.'
        },
        {
          token: 'nerja_caves',
          label: 'Cueva de Nerja',
          text: 'Un referente duradero para recorrer el municipio con contexto histórico.'
        }
      ]
    },
    sources: {
      eyebrow: 'Fuentes',
      title: 'Material oficial consultado',
      intro:
        'La base de esta guía son recursos públicos de RTVE y del Ayuntamiento, con énfasis en datos verificables sobre rodaje, memoria local y continuidad de ruta.',
      checked: 'Fuentes revisadas en agosto de 2026.',
      links: [
        { label: 'RTVE · Ficha de Verano Azul', text: 'Referencia pública de la serie.', href: officialSources.rtveStory },
        { label: 'RTVE · Cómo se rodó', text: 'Información de proceso de rodaje y contexto.', href: officialSources.rtveProduction },
        { label: 'Ayuntamiento de Nerja · Perfil', text: 'Texto municipal de referencia histórica.', href: officialSources.municipality.profile },
        { label: 'Ayuntamiento de Nerja · Ruta de RA', text: 'Publicación sobre la ruta turística con RA.', href: officialSources.municipality.route },
        { label: 'Ayuntamiento de Nerja · 40 aniversario', text: 'Referencia local sobre inicio de rodaje.', href: officialSources.municipality.anniversary },
        { label: 'Ayuntamiento de Nerja · La Dorada', text: 'Referencia municipal para el planteamiento de memoria.', href: officialSources.municipality.anforas }
      ]
    },
    closing: {
      eyebrow: 'Siguiente paso',
      title: 'Verano Azul dejó un mapa de lugares; aquí lo pasamos a una caminata real.',
      body: 'Tomad una ruta corta: costa primero, centro después, para que la película y la ciudad se lean como capas, no como anécdota.',
      propertyLabel: 'Ver AMARA Playa',
      experienceLabel: 'Experiencias en Nerja'
    },
    footerHighlights: {
      experience: 'Experiencias en Nerja',
      beaches: 'Playas de Nerja',
      balance: 'Puntos de referencia'
    }
  },
  nl: {
    navLabel: 'Verano Azul',
    breadcrumbLabel: 'Verano Azul',
    hero: {
      eyebrow: 'Nerja · TV-geheugen',
      title: 'Verano Azul: de serie die Nerja overal in Spanje bekend maakte',
      standfirst:
        'Voor veel gezinnen was Verano Azul de eerste kennismaking met Nerja. De serie liet een gedeeld beeld achter dat nog in de lokale beleving meeloopt.',
      note: 'Deze gids is gebaseerd op controleerbare publieke bronnen. Fan-schattingen en reserveringsdetails zijn bewust weggelaten.',
      updated: 'Bewerkt in augustus 2026'
    },
    facts: [
      { label: 'TV-opzet', value: '19 afleveringen · TVE-serie op basis van publieke bronnotities' },
      { label: 'Uitzending', value: '11 oktober 1981 – 14 februari 1982' },
      { label: 'Publiek', value: 'In latere afleveringen door bronnen genoemd meer dan 9 miljoen kijkers' },
      { label: 'Eerste opnamedag', value: '21 augustus 1979, Playa de Burriana' },
      { label: 'Lokaal erfgoed', value: 'Parque Verano Azul, La Dorada replica en AR-route sinds 2023' }
    ],
    trailer: {
      label: 'Officiële Verano Azul trailer',
      privacyNote:
        'De trailer staat op YouTube. Bij het laden gaat jullie IP naar Google, wat ook gegevens op het apparaat kan achterlaten.',
      loadAction: 'Trailer laden'
    },
    sections: [
      {
        id: 'tv-phenomenon',
        eyebrow: 'Het TV-fenomeen',
        title: 'Waarom de serie een deel van meerdere generaties geheugen is geworden',
        paragraphs: [
          'Verano Azul is niet alleen bekend om het verhaal, maar ook door de reikwijdte van de uitzending.',
          'Publieke registraties noemen een uitzending tussen 11 oktober 1981 en 14 februari 1982 en een zeer hoge kijkdichtheid in latere afleveringen.',
          'Daardoor is Nerja voor veel kijkers eerder herkenbaar geworden als televisueel referentiepunt.'
        ]
      },
      {
        id: 'why-nerja',
        eyebrow: 'Waarom Nerja',
        title: 'Waarom de locatiekeuze bij de opnames uitviel',
        paragraphs: [
          'Tijdens scouting werd gezocht naar plekken met afwisseling van centrum, straten en open kust.',
          'Nerja bood die combinatie op schaal, waardoor sequenties met dagelijks leven en kusten in één productieschema samengebracht konden worden.',
          'Het eerste gedocumenteerde draaidagpunt is 21 augustus 1979 op Playa de Burriana.'
        ]
      },
      {
        id: 'nerja-in-the-series',
        eyebrow: 'Nerja in de serie',
        title: 'Playa de Burriana, Balcón, Cala Chica en stadsstraten',
        paragraphs: [
          'De seriebeelden bevatten herkenbare ankerpunten als Playa de Burriana, Balcón de Europa, Cala Chica, de Cueva de Nerja en centrumwijken.',
          'De opnames spelen met overgangen tussen die plekken, waardoor het beeld als één plekenset leesbaar blijft.',
          'Niet alles werd in Nerja opgenomen; Motril en Almuñécar zijn in de productiecontext eveneens meegebruikt.'
        ]
      },
      {
        id: 'chanquete-la-dorada',
        eyebrow: 'Chanquete en La Dorada',
        title: 'Hoe iconen zijn opgebouwd en hoe de replica nu staat',
        paragraphs: [
          'Chanquete is uitgegroeid tot het sterkste herkenningspunt in de verhalen rond de serie.',
          'La Dorada in Nerja was destijds een functioneel opbouwset, niet het originele blijvend behouden vissersvaartuig.',
          'Het huidige object is een reconstructie: bedoeld als herkennings- en herinneringspunt, niet als exacte originele constructie.'
        ]
      },
      {
        id: 'changed-nerja',
        eyebrow: 'Hoe Verano Azul Nerja veranderde',
        title: 'Wat de gemeente consequent noemt: zichtbaarheid en identiteit',
        paragraphs: [
          'Lokale en gemeentelijke bronnen noemen Verano Azul als een blijvende reden dat Nerja nationaal sterker werd herkend.',
          'Het effect zit niet in een éénmalige piek, maar in een duurzaam referentiekader voor inwoners en bezoekers.',
          'Dat is waarom de serie nog lang mee kan bewegen in de lokale discours over de plek.'
        ]
      },
      {
        id: 'verano-azul-today',
        eyebrow: 'Verano Azul vandaag',
        title: 'Van televisieregie tot tastbaar stadsdecor',
        paragraphs: [
          'Vandaag zijn er zichtbare knooppunten: Parque Verano Azul, La Dorada-replica, de Antonio Mercero-route, Calle Antonio Ferrandis, Chanquete-beeld bij Playa Calahonda en de Balcón de Europa.',
          'Sinds 2023 is er een gemeentelijke AR-route toegevoegd die extra context geeft bij de route.',
          'Zo lopen herkenning en dagelijks gebruik in de stad naast elkaar in plaats van los van elkaar.'
        ]
      },
      {
        id: 'sources-and-method',
        eyebrow: 'Redactionele werkwijze',
        title: 'Wat zeker is en waar we niet speculeren',
        paragraphs: [
          'De kern komt uit RTVE en gemeentelijke publicaties: productie, opnamelocaties en culturele doorwerking.',
          'We vermijden harde cijfers over economische impact tenzij deze aantoonbaar binnen dezelfde bronlaag staan.',
          'Voor de praktische planning zijn officiële lokale pagina’s en de routepagina’s de meest betrouwbare leidraad.'
        ]
      }
    ],
    itinerary: {
      eyebrow: 'Verano Azul vandaag volgen',
      title: 'Een eenvoudige wandeling met logische volgorde',
      intro:
        'Wie de serie-route als gast wilt lezen, kan dit in deze volgorde doen: vanaf zee naar het centrum.',
      links: [
        { token: 'nerja_beaches_authority', label: 'Strand en kust', text: 'Begin met het kustbeeld dat de serievisuele context vormt.' },
        { token: 'nerja_balcon_de_europa', label: 'Balcón de Europa', text: 'Gebruik het als visuele overgang en oriënteringspunt.' },
        { token: 'nerja_caves', label: 'Cueva de Nerja', text: 'Verbind vervolgens met een tweede cultureel anker in de stad.' },
        { token: 'nerja_experience_hub', label: 'Alle Nerja-ervaringen', text: 'Ga terug naar het hub-overzicht voor een complete dagindeling.' }
      ]
    },
    related: {
      eyebrow: 'Verder lezen',
      title: 'Meer culturele plekken rond Verano Azul',
      links: [
        {
          token: 'nerja_beaches_authority',
          label: 'Stranden van Nerja',
          text: 'Hoe de kust in beeld en in de praktijk de dagstructuur bepaalt.'
        },
        {
          token: 'nerja_balcon_de_europa',
          label: 'Balcón de Europa',
          text: 'De visuele kern waar veel routekeuzes om draaien.'
        },
        {
          token: 'nerja_caves',
          label: 'Grotengids',
          text: 'Een vaste referentie in de bredere ruimtelijke beleving van de gemeente.'
        }
      ]
    },
    sources: {
      eyebrow: 'Bronnen',
      title: 'Officiële bronnenbasis',
      intro:
        'De basisinformatie komt uit RTVE-documentatie en gemeentelijke mededelingen, met nadruk op verifieerbare productiestaferelen en lokaal erfgoed.',
      checked: 'Bronnen gecontroleerd in augustus 2026.',
      links: [
        { label: 'RTVE · Verano Azul dossier', text: 'Publieke informatie over de serie.', href: officialSources.rtveStory },
        { label: 'RTVE · Productieproces', text: 'Bron over het maakproces en de opnamen.', href: officialSources.rtveProduction },
        { label: 'Ayuntamiento de Nerja · Profiel', text: 'Gemeentelijke bron rond auteur en context.', href: officialSources.municipality.profile },
        { label: 'Ayuntamiento de Nerja · AR-route', text: 'Officiële informatie over de route met augmented reality.', href: officialSources.municipality.route },
        { label: 'Ayuntamiento de Nerja · 40-jarig', text: 'Gemeentelijke context rond het begin van de opnamen.', href: officialSources.municipality.anniversary },
        { label: 'Ayuntamiento de Nerja · La Dorada', text: 'Gemeentelijke bron voor de hedendaagse herinneringsbenadering.', href: officialSources.municipality.anforas }
      ]
    },
    closing: {
      eyebrow: 'Vervolg',
      title: 'Verano Azul leeft vooral in de manier waarop de plek nog steeds gelezen wordt.',
      body: 'Begin aan de kust en loop dan naar het centrum: dan werk je van de televisievorm naar de stad in plaats van alleen plaatjes af te vinken.',
      propertyLabel: 'Bekijk AMARA Playa',
      experienceLabel: 'Ervaringen in Nerja'
    },
    footerHighlights: {
      experience: 'Ervaringen in Nerja',
      beaches: 'Nerja stranden',
      balance: 'Culturele ankers'
    }
  },
  sv: {
    navLabel: 'Verano Azul',
    breadcrumbLabel: 'Verano Azul',
    hero: {
      eyebrow: 'Nerja · TV-minne',
      title: 'Verano Azul: serien som gjorde att Nerja blev känt i hela Spanien',
      standfirst:
        'För många hushåll var Verano Azul första gången de hörde talas om Nerja. Serien har lämnat en delad visuell minneskarta som fortfarande påverkar platsberättelsen.',
      note: 'Guiden bygger på verifierade offentliga källor och exkluderar osäkra fanspecifikationer och bokningsdetaljer.',
      updated: 'Genomgången i augusti 2026'
    },
    facts: [
      { label: 'TV-format', value: '19 avsnitt · TVE-serie enligt publicerad produktionsstruktur' },
      { label: 'Sändning', value: '11 oktober 1981 – 14 februari 1982' },
      { label: 'Publikumsräckvidd', value: 'Senare avsnitt angavs ha över 9 miljoner tittare' },
      { label: 'Första inspelningsdag', value: '21 augusti 1979, Playa de Burriana' },
      { label: 'Lokal påverkan', value: 'Parque Verano Azul, La Dorada-replik och AR-rutt från 2023' }
    ],
    trailer: {
      label: 'Officiell trailer',
      privacyNote:
        'Trailern ligger hos YouTube. Vid laddning skickas IP-adressen till Google, som också kan lagra data lokalt.',
      loadAction: 'Ladda trailern'
    },
    sections: [
      {
        id: 'tv-phenomenon',
        eyebrow: 'TV-fenomenet',
        title: 'Hur serien blev en del av flera generationers gemensamma minne',
        paragraphs: [
          'Verano Azul minns vi inte enbart för handlingen, utan också för den stora spridningen i tv-sammanhang.',
          'Enligt tillgänglig officiell information sträckte sig första publicerade utsändning till perioden 11 oktober 1981 till 14 februari 1982, med mycket hög publik i senare avsnitt.',
          'Den effekten gjorde att många tittare redan hade en bild av Nerja innan de ens reste dit.'
        ]
      },
      {
        id: 'why-nerja',
        eyebrow: 'Varför Nerja',
        title: 'Varför produktionen valde platsen efter kustrekognoscering',
        paragraphs: [
          'I scouting fasen sökte teamet omväxlande miljöer: stadsliv, utsikt, kustljus och övergångar mellan nära och vida miljöer.',
          'Nerja passade för att kombinera dessa delar i ett hållbart schema med korta logistiska avstånd.',
          'Det första dokumenterade inspelningsdatumet i kommunen är 21 augusti 1979 på Playa de Burriana.'
        ]
      },
      {
        id: 'nerja-in-the-series',
        eyebrow: 'Nerja i serien',
        title: 'Playa de Burriana, Balcón, Cala Chica och stadens gator',
        paragraphs: [
          'Kända platser i serien innefattar Playa de Burriana, Balcón de Europa, Cala Chica och Cueva de Nerja samt flera urbana stråk i centrum.',
          'Produktionen byggde på övergångar mellan dessa punkter, vilket gör att serien upplevs som ett sammanhängande geografiskt rum.',
          'Det var dock inte enbart Nerja som användes; Motril och Almuñécar förekommer också i inspelningsberättelsen.'
        ]
      },
      {
        id: 'chanquete-la-dorada',
        eyebrow: 'Chanquete och La Dorada',
        title: 'Hur ikoniken skapades och hur repliken presenteras nu',
        paragraphs: [
          'Chanquete blev en symbol för serien och återkommer i lokala samtal om förankringen.',
          'La Dorada i Nerja var ett planerat filmbygge för produktionen, inte en helt bevarad ursprungsbåt.',
          'Dagens version är en rekonstruktion och minnesmarkör, inte ett “orört” ursprungstillstånd.'
        ]
      },
      {
        id: 'changed-nerja',
        eyebrow: 'Hur Verano Azul förändrade Nerja',
        title: 'Det officiella arvet: synlighet och identitet',
        paragraphs: [
          'Kommunala och lokala källor beskriver serien som en faktor i Nerjas nationella synlighet och i lokal identitetsbildning.',
          'Effekten är inte bara ett ögonblick av uppmärksamhet, utan ett fortsatt referenslager som påverkar hur besökare orienterar sig.',
          'Därför lever serien i samtalet om platsen som mer än en nostalgisk berättelse.'
        ]
      },
      {
        id: 'verano-azul-today',
        eyebrow: 'Verano Azul i Nerja idag',
        title: 'Från TV-minne till nuvarande platslager',
        paragraphs: [
          'Idag är dessa punkter läsbara i offentlig miljö: Parque Verano Azul, La Dorada-repliken, Antonio Mercero-avenyn, Calle Antonio Ferrandis, Chanquete-statyn vid Playa Calahonda och Balcón de Europa.',
          'Sedan 2023 finns en officiell AR-rutt som lägger samman dessa punkter med ytterligare kontext.',
          'Det innebär att platsen upplevs genom både minne och nutida rörelser.'
        ]
      },
      {
        id: 'sources-and-method',
        eyebrow: 'Redaktionell metod',
        title: 'Vad som kan sägas med stöd och vad vi lämnar öppet',
        paragraphs: [
          'Hjärtat i materialet är RTVE-rapporter och kommunala notiser om produktion och efterverkningar.',
          'Där källan inte stödjer numeriska tolkningar undviker vi att lägga till ekonomiska eller överdrivna effektsiffror.',
          'För den praktiska besöksplaneringen lutar vi alltid mot officiella Nerja-resurser och nuvarande lokala sidor.'
        ]
      }
    ],
    itinerary: {
      eyebrow: 'Följa Verano Azul i dag',
      title: 'En kort rundvandring för gäster',
      intro:
        'Om du vill kombinera serieminnet med en tydlig platsupplevelse, följ den här ordningen.',
      links: [
        { token: 'nerja_beaches_authority', label: 'Strand och kust', text: 'Börja vid kusten för att anpassa ljus och rytm.' },
        { token: 'nerja_balcon_de_europa', label: 'Balcón de Europa', text: 'Använd denna punkt som första visuella fixpunkt.' },
        { token: 'nerja_caves', label: 'Cueva de Nerja', text: 'Gå vidare till ett annat av Nerjas bestående landmärke.' },
        { token: 'nerja_experience_hub', label: 'Alla Nerja-upplevelser', text: 'Återgå till hubben för nästa steg i din plan.' }
      ]
    },
    related: {
      eyebrow: 'Läs vidare',
      title: 'Mer kring kultur och platser',
      links: [
        {
          token: 'nerja_beaches_authority',
          label: 'Nerjas stränder',
          text: 'Hur stranden formar både vardagsrytm och filmisk igenkänning.'
        },
        {
          token: 'nerja_balcon_de_europa',
          label: 'Balcón de Europa',
          text: 'Det visuella centrum där många av de ikoniska referenserna kliver fram.'
        },
        {
          token: 'nerja_caves',
          label: 'Grotguiden',
          text: 'Ett annat långvarigt orienteringsmärke för besökande i kommunen.'
        }
      ]
    },
    sources: {
      eyebrow: 'Källor',
      title: 'Officiella källor som användes',
      intro:
        'Materialet bygger på RTVE-publiceringar och kommunala kanaler med fokus på verifierbar produktion och kvarstående minnesarbete.',
      checked: 'Källor kontrollerade i augusti 2026.',
      links: [
        { label: 'RTVE · Verano Azul-översikt', text: 'Offentlig serieöversikt med grundfakta.', href: officialSources.rtveStory },
        { label: 'RTVE · Inspelningsupplägg', text: 'Bakgrund till arbetsmetod och inspelning.', href: officialSources.rtveProduction },
        { label: 'Ayuntamiento de Nerja · Profil', text: 'Kommunal kontext kring berättelse och arv.', href: officialSources.municipality.profile },
        { label: 'Ayuntamiento de Nerja · AR-rutt', text: 'Information om kommunal AR-rutt och syfte.', href: officialSources.municipality.route },
        { label: 'Ayuntamiento de Nerja · 40-årsjubileum', text: 'Kommunal markering av inspelningsstartens milstolpe.', href: officialSources.municipality.anniversary },
        { label: 'Ayuntamiento de Nerja · La Dorada', text: 'Kommunal kontext för minnesramen kring La Dorada.', href: officialSources.municipality.anforas }
      ]
    },
    closing: {
      eyebrow: 'Nästa kapitel',
      title: 'Verano Azul lever kvar som ett landskapslager, inte bara som en nostalgisk referens.',
      body: 'Börja vid stranden, gå in mot centrum och låt serien fungera som en tolkningsnyckel i stället för ett färdigt schema.',
      propertyLabel: 'Se AMARA Playa',
      experienceLabel: 'Nerja-upplevelser'
    },
    footerHighlights: {
      experience: 'Nerja-upplevelser',
      beaches: 'Nerja stränder',
      balance: 'Kulturella punkter'
    }
  }
};
