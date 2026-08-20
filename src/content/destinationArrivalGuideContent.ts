import type { ImageMetadata } from 'astro';
import type { ArrivalJourneyGraphicData } from '../components/location/ArrivalJourneyGraphic.astro';
import type { LocationGuideIconName } from '../components/location/LocationGuideIcon.astro';
import {
  gettingToFrigilianaCopy,
  gettingToFrigilianaExternalLinks,
  gettingToFrigilianaSeo
} from './gettingToFrigilianaContent';
import {
  frigilianaPreFooterCopy,
  getFrigilianaPreFooterDescription
} from './frigilianaPreFooterContent';
import { gettingToNerjaContent, gettingToNerjaSeo } from './gettingToNerjaContent';
import { gettingToTarifaContent, gettingToTarifaSeo } from './gettingToTarifaContent';
import type { LinkToken } from '../lib/linkResolver';
import type { AmaraAuthoringSeo, AmaraLanguage } from '../types/seo';

export type ArrivalGuideDestination = 'frigiliana' | 'nerja' | 'tarifa';

export interface ArrivalGuideCard {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  details: string[];
  icon: LocationGuideIconName;
  timing?: string;
  bestFor?: string;
  consideration?: string;
}

export interface ArrivalGuideSection {
  eyebrow: string;
  title: string;
  intro?: string;
  items: ArrivalGuideCard[];
}

interface ArrivalGuideFact {
  label: string;
  value: string;
  description?: string;
}

interface ArrivalGuideSource {
  label: string;
  text: string;
  href: string;
}

interface ArrivalGuideLink {
  token: LinkToken;
  label: string;
  text?: string;
}

interface ArrivalGuideSteps {
  title: string;
  steps: Array<{ num: string; headline: string; text: string }>;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
}

interface ArrivalGuideFinalMile {
  eyebrow: string;
  title: string;
  paragraphs: string[];
  steps?: string[];
  stepIcons?: LocationGuideIconName[];
  image?: {
    src: ImageMetadata | string;
    alt: string;
  };
  links?: ArrivalGuideLink[];
}

export interface ArrivalGuidePageContent {
  destination: ArrivalGuideDestination;
  pageId: string;
  languageToken: LinkToken;
  navLabel: string;
  seo: AmaraAuthoringSeo;
  hero: {
    eyebrow: string;
    title: string;
    standfirst: string;
    updated?: string;
    note?: string;
  };
  heroVisual: ArrivalJourneyGraphicData;
  author?: {
    name: string;
    token: LinkToken;
  };
  factsTitle: string;
  facts: ArrivalGuideFact[];
  factIcons: LocationGuideIconName[];
  gateways?: ArrivalGuideSection;
  options: ArrivalGuideSection & {
    labels: {
      timing: string;
      bestFor: string;
      consideration: string;
    };
  };
  journeySteps?: ArrivalGuideSteps;
  mobility?: ArrivalGuideSection;
  parking?: ArrivalGuideCard;
  finalMile?: ArrivalGuideFinalMile;
  sources: {
    eyebrow: string;
    title: string;
    intro: string;
    checked: string;
    links: ArrivalGuideSource[];
  };
  related?: {
    eyebrow: string;
    title: string;
    intro: string;
    links: ArrivalGuideLink[];
  };
  closing: {
    eyebrow: string;
    title: string;
    body: string;
    primary: ArrivalGuideLink;
    secondary: ArrivalGuideLink;
  };
  footerHighlights: ArrivalGuideLink[];
}

type LocalizedText = Record<AmaraLanguage, string>;

const text = (row: LocalizedText, lang: AmaraLanguage): string => row[lang] ?? row.en;
const withoutLegacyNumber = (value: string): string => value.replace(/^\d+\s*[·.:–—-]\s*/u, '');

const ui = {
  en: {
    factsTitle: 'The journey at a glance',
    gatewaysEyebrow: 'Start with the gateway',
    gatewaysTitle: 'Where the journey begins',
    optionsEyebrow: 'Choose the onward journey',
    optionsTitle: 'Compare the practical ways to arrive',
    mobilityEyebrow: 'After arrival',
    mobilityTitle: 'How mobility works during the stay',
    journey: 'Journey',
    bestFor: 'Best for',
    consideration: 'Plan for',
    nextStep: 'Continue planning'
  },
  de: {
    factsTitle: 'Die Anreise auf einen Blick',
    gatewaysEyebrow: 'Beim Ausgangspunkt beginnen',
    gatewaysTitle: 'Wo die Reise beginnt',
    optionsEyebrow: 'Die Weiterreise wählen',
    optionsTitle: 'Die praktischen Anreisemöglichkeiten vergleichen',
    mobilityEyebrow: 'Nach der Ankunft',
    mobilityTitle: 'Wie die Mobilität während des Aufenthalts funktioniert',
    journey: 'Fahrt',
    bestFor: 'Geeignet für',
    consideration: 'Zu beachten',
    nextStep: 'Weiter planen'
  },
  es: {
    factsTitle: 'El viaje de un vistazo',
    gatewaysEyebrow: 'Empezad por el punto de llegada',
    gatewaysTitle: 'Dónde comienza el trayecto',
    optionsEyebrow: 'Elegid la continuación del viaje',
    optionsTitle: 'Comparad las formas prácticas de llegar',
    mobilityEyebrow: 'Después de llegar',
    mobilityTitle: 'Cómo funciona la movilidad durante la estancia',
    journey: 'Trayecto',
    bestFor: 'Ideal para',
    consideration: 'A tener en cuenta',
    nextStep: 'Seguir planificando'
  },
  nl: {
    factsTitle: 'De reis in het kort',
    gatewaysEyebrow: 'Begin bij het aankomstpunt',
    gatewaysTitle: 'Waar de reis begint',
    optionsEyebrow: 'Kies de verdere reis',
    optionsTitle: 'Vergelijk de praktische manieren om aan te komen',
    mobilityEyebrow: 'Na aankomst',
    mobilityTitle: 'Hoe mobiliteit tijdens het verblijf werkt',
    journey: 'Reis',
    bestFor: 'Geschikt voor',
    consideration: 'Houd rekening met',
    nextStep: 'Verder plannen'
  },
  sv: {
    factsTitle: 'Resan i korthet',
    gatewaysEyebrow: 'Börja med ankomstpunkten',
    gatewaysTitle: 'Var resan börjar',
    optionsEyebrow: 'Välj den fortsatta resan',
    optionsTitle: 'Jämför de praktiska sätten att komma fram',
    mobilityEyebrow: 'Efter ankomsten',
    mobilityTitle: 'Så fungerar resandet under vistelsen',
    journey: 'Resa',
    bestFor: 'Passar bäst för',
    consideration: 'Tänk på',
    nextStep: 'Fortsätt planera'
  }
} satisfies Record<AmaraLanguage, Record<string, string>>;

const visualUi = {
  en: {
    eyebrow: 'Arrival orientation', airport: 'Closest airport', mainAirport: 'Main airport', distance: 'By road', time: 'Typical drive',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Strait of Gibraltar',
    aria: 'Map-style arrival overview for', coast: 'Coastal connection', coastValue: 'Nerja · 6 km · approx. 10 min',
    setting: 'Setting', frigilianaSetting: 'White village above the Mediterranean',
    beach: 'Nearest beach', beachValue: 'Torrecilla · approx. 200 m', oldTown: 'Old town', oldTownValue: 'Balcón de Europa · approx. 500 m',
    centre: 'Town centre', centreValue: 'Old Town · 10–15 min on foot', arrival: 'At AMARA', arrivalValue: 'Reserved underground parking'
  },
  de: {
    eyebrow: 'Anreise & Orientierung', airport: 'Nächster Flughafen', mainAirport: 'Hauptflughafen', distance: 'Straßendistanz', time: 'Typische Fahrzeit',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Straße von Gibraltar',
    aria: 'Kartografische Anreiseübersicht für', coast: 'Verbindung zur Küste', coastValue: 'Nerja · 6 km · ca. 10 Min.',
    setting: 'Lage', frigilianaSetting: 'Weißes Bergdorf über dem Mittelmeer',
    beach: 'Nächster Strand', beachValue: 'Torrecilla · ca. 200 m', oldTown: 'Altstadt', oldTownValue: 'Balcón de Europa · ca. 500 m',
    centre: 'Ortszentrum', centreValue: 'Altstadt · 10–15 Min. zu Fuß', arrival: 'Bei AMARA', arrivalValue: 'Reservierter Tiefgaragenplatz'
  },
  es: {
    eyebrow: 'Llegada y orientación', airport: 'Aeropuerto más cercano', mainAirport: 'Aeropuerto principal', distance: 'Por carretera', time: 'Tiempo habitual',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Estrecho de Gibraltar',
    aria: 'Resumen cartográfico de llegada a', coast: 'Conexión con la costa', coastValue: 'Nerja · 6 km · aprox. 10 min',
    setting: 'Entorno', frigilianaSetting: 'Pueblo blanco sobre el Mediterráneo',
    beach: 'Playa más cercana', beachValue: 'Torrecilla · aprox. 200 m', oldTown: 'Casco antiguo', oldTownValue: 'Balcón de Europa · aprox. 500 m',
    centre: 'Centro', centreValue: 'Casco antiguo · 10–15 min a pie', arrival: 'En AMARA', arrivalValue: 'Aparcamiento subterráneo reservado'
  },
  nl: {
    eyebrow: 'Aankomst & oriëntatie', airport: 'Dichtstbijzijnde luchthaven', mainAirport: 'Belangrijkste luchthaven', distance: 'Over de weg', time: 'Gebruikelijke rijtijd',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Straat van Gibraltar',
    aria: 'Kaartoverzicht van de reis naar', coast: 'Verbinding met de kust', coastValue: 'Nerja · 6 km · ca. 10 min',
    setting: 'Ligging', frigilianaSetting: 'Wit bergdorp boven de Middellandse Zee',
    beach: 'Dichtstbijzijnde strand', beachValue: 'Torrecilla · ca. 200 m', oldTown: 'Oude centrum', oldTownValue: 'Balcón de Europa · ca. 500 m',
    centre: 'Centrum', centreValue: 'Oude centrum · 10–15 min lopen', arrival: 'Bij AMARA', arrivalValue: 'Gereserveerde ondergrondse parking'
  },
  sv: {
    eyebrow: 'Ankomst & orientering', airport: 'Närmaste flygplats', mainAirport: 'Huvudflygplats', distance: 'Vägavstånd', time: 'Normal körtid',
    frigilianaRegion: 'Axarquía · Sierra Almijara', nerjaRegion: 'Costa del Sol · Axarquía', tarifaRegion: 'Gibraltarsundet',
    aria: 'Kartöversikt för resan till', coast: 'Förbindelse till kusten', coastValue: 'Nerja · 6 km · ca 10 min',
    setting: 'Läge', frigilianaSetting: 'Vit bergsby ovanför Medelhavet',
    beach: 'Närmaste strand', beachValue: 'Torrecilla · ca 200 m', oldTown: 'Gamla stan', oldTownValue: 'Balcón de Europa · ca 500 m',
    centre: 'Centrum', centreValue: 'Gamla stan · 10–15 min till fots', arrival: 'Vid AMARA', arrivalValue: 'Reserverad underjordisk parkering'
  }
} satisfies Record<AmaraLanguage, Record<string, string>>;

function arrivalHeroVisual(
  place: ArrivalGuideDestination,
  lang: AmaraLanguage
): ArrivalJourneyGraphicData {
  const labels = visualUi[lang];
  const shared = {
    place,
    eyebrow: labels.eyebrow,
    airportLabel: labels.airport,
    distanceLabel: labels.distance,
    timeLabel: labels.time
  } as const;

  if (place === 'frigiliana') {
    return {
      ...shared,
      destination: 'Frigiliana',
      region: labels.frigilianaRegion,
      primaryAirport: { code: 'AGP', name: 'Málaga', distance: '≈ 66 km', time: '≈ 50 min' },
      context: [
        { label: labels.coast, value: labels.coastValue },
        { label: labels.setting, value: labels.frigilianaSetting }
      ],
      ariaLabel: `${labels.aria} Frigiliana`
    };
  }

  if (place === 'nerja') {
    return {
      ...shared,
      destination: 'Nerja',
      region: labels.nerjaRegion,
      primaryAirport: { code: 'AGP', name: 'Málaga', distance: '≈ 61 km', time: '≈ 50 min' },
      context: [
        { label: labels.beach, value: labels.beachValue },
        { label: labels.oldTown, value: labels.oldTownValue }
      ],
      ariaLabel: `${labels.aria} Nerja`
    };
  }

  return {
    ...shared,
    destination: 'Tarifa',
    region: labels.tarifaRegion,
    airportLabel: labels.mainAirport,
    primaryAirport: { code: 'AGP', name: 'Málaga', distance: '≈ 150 km', time: '≈ 1 h 40' },
    otherAirports: [
      { code: 'GIB', distance: '≈ 50 km', time: '≈ 30 min' },
      { code: 'XRY', distance: '≈ 135 km', time: '≈ 1 h' }
    ],
    context: [
      { label: labels.centre, value: labels.centreValue },
      { label: labels.arrival, value: labels.arrivalValue }
    ],
    ariaLabel: `${labels.aria} Tarifa`
  };
}

const sectionCard = (
  section: { id: string; eyebrow: string; title: string; paragraphs: readonly string[] },
  icon: LocationGuideIconName
): ArrivalGuideCard => ({
  id: section.id,
  eyebrow: withoutLegacyNumber(section.eyebrow),
  title: section.title,
  summary: section.paragraphs[0] ?? '',
  details: section.paragraphs.slice(1),
  icon
});

function articleAuthor(seo: AmaraAuthoringSeo): ArrivalGuidePageContent['author'] {
  return seo.article
    ? { name: seo.article.authorName, token: 'about' }
    : undefined;
}

function frigilianaGuide(lang: AmaraLanguage): ArrivalGuidePageContent {
  const copy = gettingToFrigilianaCopy;
  const optionIcons = {
    car: 'rental-car',
    transfer: 'private-transfer',
    bus: 'bus'
  } satisfies Record<'car' | 'transfer' | 'bus', LocationGuideIconName>;

  return {
    destination: 'frigiliana',
    pageId: 'getting-to-frigiliana',
    languageToken: 'getting_to_frigiliana',
    navLabel: text(copy.nav.links[2].label, lang),
    seo: gettingToFrigilianaSeo,
    hero: {
      eyebrow: text(copy.hero.eyebrow, lang),
      title: text(copy.hero.title, lang),
      standfirst: `${text(copy.hero.lead, lang)} ${text(copy.hero.body, lang)}`
    },
    heroVisual: arrivalHeroVisual('frigiliana', lang),
    factsTitle: text(copy.facts.title, lang),
    facts: copy.facts.items.map((fact) => ({
      label: text(fact.label, lang),
      value: text(fact.value, lang),
      description: text(fact.note, lang)
    })),
    factIcons: ['airport', 'journey-time', 'bus'],
    options: {
      eyebrow: text(copy.options.eyebrow, lang),
      title: text(copy.options.title, lang),
      intro: text(copy.options.intro, lang),
      labels: {
        timing: text(copy.options.labels.timing, lang),
        bestFor: text(copy.options.labels.bestFor, lang),
        consideration: text(copy.options.labels.consideration, lang)
      },
      items: copy.options.items.map((option) => ({
        id: option.id,
        eyebrow: text(option.kicker, lang),
        title: text(option.title, lang),
        summary: text(option.summary, lang),
        details: [],
        icon: optionIcons[option.id],
        timing: text(option.timing, lang),
        bestFor: text(option.bestFor, lang),
        consideration: text(option.consideration, lang)
      }))
    },
    journeySteps: {
      title: text(copy.publicTransport.title, lang),
      steps: copy.publicTransport.steps.map((step) => ({
        num: step.num,
        headline: text(step.title, lang),
        text: text(step.text, lang)
      })),
      faqTitle: text(copy.publicTransport.faqTitle, lang),
      faq: copy.publicTransport.faq.map((item) => ({
        question: text(item.question, lang),
        answer: text(item.answer, lang)
      }))
    },
    finalMile: {
      eyebrow: text(copy.reality.eyebrow, lang),
      title: text(copy.reality.title, lang),
      paragraphs: [text(copy.reality.body, lang)],
      image: {
        src: '/images/amara-frigiliana-pueblo/JPG_Frigiliana_Pueblo/2000px_72dpi_sRGB/03-frigiliana-pueblo.jpg',
        alt: text(copy.reality.imageAlt, lang)
      },
      links: [
        { token: 'frigiliana_parking', label: text(copy.reality.parkingCta, lang) },
        { token: 'arrival_guide', label: text(copy.reality.bookedCta, lang) }
      ]
    },
    sources: {
      eyebrow: text(copy.sources.eyebrow, lang),
      title: text(copy.sources.title, lang),
      intro: text(copy.sources.intro, lang),
      checked: text(copy.sources.checked, lang),
      links: copy.sources.links.map((source) => ({
        href: gettingToFrigilianaExternalLinks[source.key],
        label: text(source.label, lang),
        text: text(source.text, lang)
      }))
    },
    related: {
      eyebrow: frigilianaPreFooterCopy.eyebrow[lang],
      title: text(copy.related.title, lang),
      intro: frigilianaPreFooterCopy.intro[lang],
      links: copy.related.links.map((link) => ({
        token: link.token,
        label: text(link.label, lang),
        text: getFrigilianaPreFooterDescription(link.token, lang)
      }))
    },
    closing: {
      eyebrow: ui[lang].nextStep,
      title: text(copy.closing.title, lang),
      body: text(copy.closing.lead, lang),
      primary: { token: 'romantic_hideaways', label: text(copy.closing.apartmentsCta, lang) },
      secondary: { token: 'direct_booking_benefits', label: text(copy.closing.directBookingCta, lang) }
    },
    footerHighlights: [
      { token: 'getting_to_frigiliana', label: text(copy.nav.links[2].label, lang) },
      { token: 'frigiliana_parking', label: text(copy.nav.links[1].label, lang) },
      { token: 'romantic_hideaways', label: text(copy.closing.apartmentsCta, lang) }
    ]
  };
}

function nerjaGuide(lang: AmaraLanguage): ArrivalGuidePageContent {
  const content = gettingToNerjaContent[lang];
  const [decision, car, bus, airports, withoutCar, beaches, dayTrips, parking, finalMile] = content.sections;

  return {
    destination: 'nerja',
    pageId: 'getting-to-nerja',
    languageToken: 'getting_to_nerja',
    navLabel: content.navLabel,
    seo: gettingToNerjaSeo,
    hero: content.hero,
    heroVisual: arrivalHeroVisual('nerja', lang),
    author: articleAuthor(gettingToNerjaSeo),
    factsTitle: ui[lang].factsTitle,
    facts: content.facts,
    factIcons: ['village', 'coast', 'distance', 'rental-car'],
    gateways: {
      eyebrow: ui[lang].gatewaysEyebrow,
      title: ui[lang].gatewaysTitle,
      items: [sectionCard(airports, 'airport')]
    },
    options: {
      eyebrow: ui[lang].optionsEyebrow,
      title: decision.title,
      intro: decision.paragraphs.join(' '),
      labels: {
        timing: ui[lang].journey,
        bestFor: ui[lang].bestFor,
        consideration: ui[lang].consideration
      },
      items: [sectionCard(car, 'rental-car'), sectionCard(bus, 'bus')]
    },
    mobility: {
      eyebrow: ui[lang].mobilityEyebrow,
      title: ui[lang].mobilityTitle,
      items: [
        sectionCard(withoutCar, 'walkable'),
        sectionCard(beaches, 'coast'),
        sectionCard(dayTrips, 'rental-car')
      ]
    },
    parking: sectionCard(parking, 'rental-car'),
    finalMile: {
      eyebrow: withoutLegacyNumber(finalMile.eyebrow),
      title: finalMile.title,
      paragraphs: [],
      steps: finalMile.paragraphs,
      stepIcons: ['taxi', 'rental-car', 'walkable']
    },
    sources: content.sources,
    closing: {
      eyebrow: content.closing.eyebrow,
      title: content.closing.title,
      body: content.closing.body,
      primary: { token: 'location_nerja', label: content.closing.locationLabel },
      secondary: { token: 'nerja_where_to_stay', label: content.closing.areasLabel }
    },
    footerHighlights: [
      { token: 'getting_to_nerja', label: content.navLabel },
      { token: 'location_nerja', label: 'Nerja' },
      { token: 'nerja_where_to_stay', label: content.closing.areasLabel }
    ]
  };
}

function tarifaGuide(lang: AmaraLanguage): ArrivalGuidePageContent {
  const content = gettingToTarifaContent[lang];
  const [car, bus, airports, port, withoutCar, westernCoast, parking] = content.sections;

  return {
    destination: 'tarifa',
    pageId: 'getting-to-tarifa',
    languageToken: 'getting_to_tarifa',
    navLabel: content.navLabel,
    seo: gettingToTarifaSeo,
    hero: content.hero,
    heroVisual: arrivalHeroVisual('tarifa', lang),
    author: articleAuthor(gettingToTarifaSeo),
    factsTitle: ui[lang].factsTitle,
    facts: content.facts,
    factIcons: ['village', 'municipality', 'rental-car', 'supermarket'],
    gateways: {
      eyebrow: ui[lang].gatewaysEyebrow,
      title: ui[lang].gatewaysTitle,
      items: [sectionCard(airports, 'airport'), sectionCard(port, 'coast')]
    },
    options: {
      eyebrow: ui[lang].optionsEyebrow,
      title: ui[lang].optionsTitle,
      labels: {
        timing: ui[lang].journey,
        bestFor: ui[lang].bestFor,
        consideration: ui[lang].consideration
      },
      items: [sectionCard(car, 'rental-car'), sectionCard(bus, 'bus')]
    },
    mobility: {
      eyebrow: ui[lang].mobilityEyebrow,
      title: ui[lang].mobilityTitle,
      items: [sectionCard(withoutCar, 'walkable'), sectionCard(westernCoast, 'coast')]
    },
    parking: sectionCard(parking, 'rental-car'),
    sources: content.sources,
    closing: {
      eyebrow: content.closing.eyebrow,
      title: content.closing.title,
      body: content.closing.body,
      primary: { token: 'location_tarifa', label: content.closing.locationLabel },
      secondary: { token: 'tarifa_where_to_stay', label: content.closing.areasLabel }
    },
    footerHighlights: [
      { token: 'getting_to_tarifa', label: content.navLabel },
      { token: 'location_tarifa', label: 'Tarifa' },
      { token: 'tarifa_where_to_stay', label: content.closing.areasLabel }
    ]
  };
}

export function getArrivalGuideContent(
  destination: ArrivalGuideDestination,
  lang: AmaraLanguage
): ArrivalGuidePageContent {
  if (destination === 'frigiliana') return frigilianaGuide(lang);
  if (destination === 'nerja') return nerjaGuide(lang);
  return tarifaGuide(lang);
}
