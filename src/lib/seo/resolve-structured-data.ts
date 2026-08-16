import type {
  AmaraAuthoringSeo,
  AmaraLanguage
} from '../../types/seo';
import {
  vacationRentalEntities,
  vacationRentalEntitiesByKey,
  type VacationRentalEntity
} from '../../content/vacationRentalEntities';
import { trustLabels, trustSectionLabels } from '../../content/trustLabels';
import { stayCollectionLabels } from '../../content/stayCollectionLabels';
import {
  buildOwnedLocalizedPath,
  getOwnedSlugFromPathname,
  SUPPORTED_LANGUAGES
} from '../routeOwnership';

type SchemaNode = Record<string, unknown>;

interface BrandEntity {
  key: 'amara-brand';
  name: 'AMARA';
  url: string;
  telephone: string;
  email: string;
  street: string;
  city: string;
  zip: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  image: string;
  priceRange: string;
  instagramProfile?: string;
}

function buildPortfolioPriceRange(): string {
  const bounds = vacationRentalEntities.flatMap((entity) => {
    const match = /^EUR\s+(\d+)-(\d+)$/.exec(entity.priceRange);
    return match ? [Number(match[1]), Number(match[2])] : [];
  });

  if (bounds.length === 0) {
    throw new Error('[Structured data] No valid rental price ranges found.');
  }

  return `EUR ${Math.min(...bounds)}-${Math.max(...bounds)}`;
}

const BRAND_ENTITY: BrandEntity = {
  key: 'amara-brand',
  name: 'AMARA',
  url: 'https://amara-lodging.es/',
  telephone: '+34 604 44 09 64',
  email: 'hola@amara-lodging.es',
  street: 'Calle Chorruelo 5',
  city: 'Frigiliana',
  zip: '29788',
  region: 'Andalusia',
  country: 'ES',
  latitude: 36.793171,
  longitude: -3.899107,
  image: '/images/hero-frigiliana.jpg',
  priceRange: buildPortfolioPriceRange(),
  instagramProfile: 'https://www.instagram.com/amaralodging/'
};

const PUBLIC_ROUTE_LABELS: Partial<Record<string, Record<AmaraLanguage, string>>> = {
  'amara-about-us': trustLabels.about,
  'comfort-amenities': trustLabels.amenities,
  'direct-booking-benefits': trustLabels.direct_booking_benefits,
  'directions-arrival-guide': {
    en: 'Arrival & Mobility',
    de: 'Anreise & Mobilität',
    es: 'Llegada y movilidad',
    nl: 'Aankomst & mobiliteit',
    sv: 'Ankomst & mobilitet'
  },
  'faq-general': trustLabels.faq_general,
  'frigiliana-faq': {
    en: 'Frigiliana FAQ',
    de: 'Frigiliana-FAQ',
    es: 'FAQ de Frigiliana',
    nl: 'Frigiliana-FAQ',
    sv: 'Frigiliana-FAQ'
  },
  'frigiliana-location': {
    en: 'Frigiliana',
    de: 'Frigiliana',
    es: 'Frigiliana',
    nl: 'Frigiliana',
    sv: 'Frigiliana'
  },
  'nerja-location': {
    en: 'Nerja',
    de: 'Nerja',
    es: 'Nerja',
    nl: 'Nerja',
    sv: 'Nerja'
  },
  'getting-to-nerja': {
    en: 'Arrival & Mobility',
    de: 'Anreise & Mobilität',
    es: 'Llegada y movilidad',
    nl: 'Aankomst & mobiliteit',
    sv: 'Ankomst & mobilitet'
  },
  'nerja-where-to-stay': {
    en: 'Where to Stay / Areas',
    de: 'Wo übernachten / Lagen',
    es: 'Dónde alojarse / zonas',
    nl: 'Waar overnachten / gebieden',
    sv: 'Var ska man bo / områden'
  },
  'getting-to-frigiliana': {
    en: 'Arrival & Mobility',
    de: 'Anreise & Mobilität',
    es: 'Llegada y movilidad',
    nl: 'Aankomst & mobiliteit',
    sv: 'Ankomst & mobilitet'
  },
  'frigiliana-streets-stairs': {
    en: 'Where to Stay / Areas',
    de: 'Wo übernachten / Lagen',
    es: 'Dónde alojarse / zonas',
    nl: 'Waar overnachten / gebieden',
    sv: 'Var ska man bo / områden'
  },
  'frigiliana-winter-stays': {
    en: 'Winter Stays',
    de: 'Winteraufenthalte',
    es: 'Estancias de invierno',
    nl: 'Winterverblijven',
    sv: 'Vintervistelser'
  },
  'frigiliana-experience': {
    en: 'Experiences',
    de: 'Erlebnisse',
    es: 'Experiencias',
    nl: 'Ervaringen',
    sv: 'Upplevelser'
  },
  'nerja-experience': {
    en: 'Experiences',
    de: 'Erlebnisse',
    es: 'Experiencias',
    nl: 'Ervaringen',
    sv: 'Upplevelser'
  },
  'nerja-beaches': {
    en: 'Beaches',
    de: 'Strände',
    es: 'Playas',
    nl: 'Stranden',
    sv: 'Stränder'
  },
  'nerja-day-trips': {
    en: 'Day Trips',
    de: 'Tagesausflüge',
    es: 'Excursiones',
    nl: 'Dagtochten',
    sv: 'Utflykter'
  },
  'nerja-food': {
    en: 'Food & Restaurants',
    de: 'Essen & Restaurants',
    es: 'Gastronomía y restaurantes',
    nl: 'Eten & restaurants',
    sv: 'Mat & restauranger'
  },
  'frigiliana-beaches': {
    en: 'Beaches',
    de: 'Strände',
    es: 'Playas',
    nl: 'Stranden',
    sv: 'Stränder'
  },
  'frigiliana-hiking': {
    en: 'Hiking',
    de: 'Wandern',
    es: 'Senderismo',
    nl: 'Wandelen',
    sv: 'Vandring'
  },
  'frigiliana-restaurants': {
    en: 'Restaurants',
    de: 'Restaurants',
    es: 'Restaurantes',
    nl: 'Restaurants',
    sv: 'Restauranger'
  },
  'frigiliana-festivals': {
    en: 'Festivals',
    de: 'Feste',
    es: 'Fiestas',
    nl: 'Feesten',
    sv: 'Festivaler'
  },
  'frigiliana-market': {
    en: 'Market',
    de: 'Markt',
    es: 'Mercado',
    nl: 'Markt',
    sv: 'Marknad'
  },
  'frigiliana-day-trips': {
    en: 'Day Trips',
    de: 'Tagesausflüge',
    es: 'Excursiones',
    nl: 'Dagtochten',
    sv: 'Utflykter'
  },
  'frigiliana-wellness': {
    en: 'Wellness',
    de: 'Wellness',
    es: 'Bienestar',
    nl: 'Wellness',
    sv: 'Wellness'
  },
  'nerja-nightlife': {
    en: 'Nerja Nightlife',
    de: 'Nachtleben in Nerja',
    es: 'Noche en Nerja',
    nl: 'Uitgaan in Nerja',
    sv: 'Kvällsliv i Nerja'
  },
  'tarifa-location': {
    en: 'Tarifa',
    de: 'Tarifa',
    es: 'Tarifa',
    nl: 'Tarifa',
    sv: 'Tarifa'
  },
  'getting-to-tarifa': {
    en: 'Arrival & Mobility',
    de: 'Anreise & Mobilität',
    es: 'Llegada y movilidad',
    nl: 'Aankomst & mobiliteit',
    sv: 'Ankomst & mobilitet'
  },
  'tarifa-geography': {
    en: 'Geography & Orientation',
    de: 'Geografie & Orientierung',
    es: 'Geografía y orientación',
    nl: 'Geografie & oriëntatie',
    sv: 'Geografi & orientering'
  },
  'tarifa-where-to-stay': {
    en: 'Where to stay',
    de: 'Wo übernachten',
    es: 'Dónde alojarse',
    nl: 'Waar overnachten',
    sv: 'Var ska man bo'
  },
  'tarifa-weather': {
    en: 'Weather & Seasons',
    de: 'Wetter & Jahreszeiten',
    es: 'Tiempo y estaciones',
    nl: 'Weer & seizoenen',
    sv: 'Väder & årstider'
  },
  'tarifa-daily-life': {
    en: 'Daily Life & Services',
    de: 'Alltag & Versorgung',
    es: 'Vida diaria y servicios',
    nl: 'Dagelijks leven & voorzieningen',
    sv: 'Vardag & service'
  },
  'tarifa-winter-stays': {
    en: 'Winter Stays',
    de: 'Winteraufenthalte',
    es: 'Estancias de invierno',
    nl: 'Winterverblijven',
    sv: 'Vintervistelser'
  },
  'tarifa-experience': {
    en: 'Experiences',
    de: 'Erlebnisse',
    es: 'Experiencias',
    nl: 'Ervaringen',
    sv: 'Upplevelser'
  },
  'tarifa-wind-kitesurfing': {
    en: 'Wind & Kitesurfing',
    de: 'Wind & Kitesurfen',
    es: 'Viento y kitesurf',
    nl: 'Wind & kitesurfen',
    sv: 'Vind & kitesurfing'
  },
  'tarifa-beaches': {
    en: 'Beaches',
    de: 'Strände',
    es: 'Playas',
    nl: 'Stranden',
    sv: 'Stränder'
  },
  'tarifa-food-evening-life': {
    en: 'Food & Evening Life',
    de: 'Essen & Ausgehen',
    es: 'Gastronomía y vida nocturna',
    nl: 'Eten & uitgaan',
    sv: 'Mat & kvällsliv'
  },
  'tarifa-nature-wildlife': {
    en: 'Nature & Wildlife',
    de: 'Natur & Tierwelt',
    es: 'Naturaleza y fauna',
    nl: 'Natuur & dieren',
    sv: 'Natur & djurliv'
  },
  'tarifa-old-town-history': {
    en: 'Old Town & History',
    de: 'Altstadt & Geschichte',
    es: 'Casco antiguo e historia',
    nl: 'Oude stad & geschiedenis',
    sv: 'Gamla stan & historia'
  },
  'tarifa-bolonia-baelo-claudia': {
    en: 'Bolonia & Baelo Claudia',
    de: 'Bolonia & Baelo Claudia',
    es: 'Bolonia y Baelo Claudia',
    nl: 'Bolonia & Baelo Claudia',
    sv: 'Bolonia & Baelo Claudia'
  },
  'frigiliana-parking': {
    en: 'Parking',
    de: 'Parken',
    es: 'Aparcamiento',
    nl: 'Parkeren',
    sv: 'Parkering'
  },
  'frigiliana-weather': {
    en: 'Weather & Seasons',
    de: 'Wetter & Jahreszeiten',
    es: 'Tiempo y estaciones',
    nl: 'Weer & seizoenen',
    sv: 'Väder & årstider'
  },
  'frigiliana-daily-life': {
    en: 'Daily Life & Services',
    de: 'Alltag & Versorgung',
    es: 'Vida diaria y servicios',
    nl: 'Dagelijks leven & voorzieningen',
    sv: 'Vardag & service'
  },
  'frigiliana-geography': {
    en: 'Geography & Orientation',
    de: 'Geografie & Orientierung',
    es: 'Geografía y orientación',
    nl: 'Geografie & oriëntatie',
    sv: 'Geografi & orientering'
  },
  'frigiliana-or-nerja': {
    en: 'Frigiliana & Nerja',
    de: 'Frigiliana & Nerja',
    es: 'Frigiliana y Nerja',
    nl: 'Frigiliana en Nerja',
    sv: 'Frigiliana och Nerja'
  },
  'frigiliana-netflix-dos-tumbas': {
    en: 'Netflix Locations',
    de: 'Netflix-Drehorte',
    es: 'Localizaciones Netflix',
    nl: 'Netflix-locaties',
    sv: 'Netflix-platser'
  },
  'frigiliana-hospitality-property-for-sale': {
    en: 'Property for Sale',
    de: 'Immobilie zu verkaufen',
    es: 'Propiedad en venta',
    nl: 'Pand te koop',
    sv: 'Fastighet till salu'
  },
  'guest-reviews': trustLabels.reviews_hub,
  instagram: {
    en: 'Instagram',
    de: 'Instagram',
    es: 'Instagram',
    nl: 'Instagram',
    sv: 'Instagram'
  },
  'legal-notice': trustLabels.legal_notice,
  'romantic-hideaways': stayCollectionLabels.structuralName,
  'la-amara-farah': {
    en: 'AMARA Farah',
    de: 'AMARA Farah',
    es: 'AMARA Farah',
    nl: 'AMARA Farah',
    sv: 'AMARA Farah'
  },
  'la-amara-lounis': {
    en: 'AMARA Lounis',
    de: 'AMARA Lounis',
    es: 'AMARA Lounis',
    nl: 'AMARA Lounis',
    sv: 'AMARA Lounis'
  },
  'la-amara-zaid': {
    en: 'AMARA Zaid',
    de: 'AMARA Zaid',
    es: 'AMARA Zaid',
    nl: 'AMARA Zaid',
    sv: 'AMARA Zaid'
  },
  'la-amara-maha': {
    en: 'AMARA Maha',
    de: 'AMARA Maha',
    es: 'AMARA Maha',
    nl: 'AMARA Maha',
    sv: 'AMARA Maha'
  },
  'la-amara-playa': {
    en: 'AMARA Playa',
    de: 'AMARA Playa',
    es: 'AMARA Playa',
    nl: 'AMARA Playa',
    sv: 'AMARA Playa'
  },
  'la-amara-family-and-surf': {
    en: 'AMARA Family & Surf',
    de: 'AMARA Family & Surf',
    es: 'AMARA Family & Surf',
    nl: 'AMARA Family & Surf',
    sv: 'AMARA Family & Surf'
  }
};

const FRIGILIANA_EXPERIENCE_SLUGS = new Set([
  'frigiliana-experience',
  'frigiliana-beaches',
  'frigiliana-hiking',
  'frigiliana-restaurants',
  'frigiliana-festivals',
  'frigiliana-market',
  'frigiliana-day-trips',
  'frigiliana-wellness'
]);

const NERJA_EXPERIENCE_SLUGS = new Set([
  'nerja-experience',
  'nerja-beaches',
  'nerja-day-trips',
  'nerja-food',
  'nerja-balcon-de-europa',
  'nerja-caves',
  'nerja-nightlife'
]);

const TARIFA_LOCATION_GUIDE_SLUGS = new Set([
  'tarifa-location',
  'getting-to-tarifa',
  'tarifa-geography',
  'tarifa-where-to-stay',
  'tarifa-weather',
  'tarifa-daily-life',
  'tarifa-winter-stays'
]);

const TARIFA_EXPERIENCE_SLUGS = new Set([
  'tarifa-experience',
  'tarifa-wind-kitesurfing',
  'tarifa-beaches',
  'tarifa-food-evening-life',
  'tarifa-nature-wildlife',
  'tarifa-old-town-history',
  'tarifa-bolonia-baelo-claudia'
]);

const FRIGILIANA_LOCATION_GUIDE_SLUGS = new Set([
  'frigiliana-location',
  'getting-to-frigiliana',
  'directions-arrival-guide',
  'frigiliana-streets-stairs',
  'frigiliana-parking',
  'frigiliana-weather',
  'frigiliana-winter-stays',
  'frigiliana-or-nerja',
  'frigiliana-daily-life',
  'frigiliana-geography',
  'frigiliana-faq',
  'frigiliana-netflix-dos-tumbas'
]);

const NERJA_LOCATION_GUIDE_SLUGS = new Set([
  'nerja-location',
  'getting-to-nerja',
  'nerja-where-to-stay'
]);

const PRIMARY_TRUST_PAGE_SLUGS = new Set([
  'amara-about-us',
  'guest-reviews',
  'direct-booking-benefits',
  'comfort-amenities',
  'faq-general'
]);

function getBase(origin: string): string {
  return origin.replace(/\/+$/, '');
}

function toAbsoluteUrl(url: string | undefined, origin: string): string | undefined {
  return url ? new URL(url, origin).href : undefined;
}

function resolveOgImage(seo: AmaraAuthoringSeo | undefined, origin: string): string | undefined {
  return toAbsoluteUrl(seo?.ogImage, origin);
}

function resolveCanonicalSlug(canonicalUrl: string): string {
  try {
    return getOwnedSlugFromPathname(new URL(canonicalUrl).pathname);
  } catch {
    return getOwnedSlugFromPathname(canonicalUrl);
  }
}

function humanizeSlug(slug: string): string {
  const lastSegment = slug.split('/').filter(Boolean).at(-1) ?? 'AMARA';

  return lastSegment
    .split('-')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function resolveRouteLabel(
  slug: string,
  currentLang: AmaraLanguage,
  fallbackTitle: string
): string {
  const titleLabel = fallbackTitle
    .replace(/^AMARA\s*(?:\||-|–|—|:)?\s*/i, '')
    .trim();
  const routeLabel = PUBLIC_ROUTE_LABELS[slug]?.[currentLang] ??
    PUBLIC_ROUTE_LABELS[slug]?.en;

  return routeLabel ?? (titleLabel || humanizeSlug(slug));
}

function buildBreadcrumbNode(
  canonicalUrl: string,
  title: string,
  currentLang: AmaraLanguage,
  origin: string,
  lodgingEntity?: VacationRentalEntity
): SchemaNode | null {
  const slug = resolveCanonicalSlug(canonicalUrl);

  if (!slug) {
    return null;
  }

  const base = getBase(origin);
  const homeUrl = new URL(buildOwnedLocalizedPath('', currentLang), base).href;
  const itemListElement: SchemaNode[] = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'AMARA',
      item: homeUrl
    }
  ];

  const experienceHierarchy = FRIGILIANA_EXPERIENCE_SLUGS.has(slug)
    ? { locationSlug: 'frigiliana-location', hubSlug: 'frigiliana-experience', locationName: 'Frigiliana' }
    : NERJA_EXPERIENCE_SLUGS.has(slug)
      ? { locationSlug: 'nerja-location', hubSlug: 'nerja-experience', locationName: 'Nerja' }
      : TARIFA_EXPERIENCE_SLUGS.has(slug)
        ? { locationSlug: 'tarifa-location', hubSlug: 'tarifa-experience', locationName: 'Tarifa' }
        : null;

  if (experienceHierarchy) {
    const locationUrl = new URL(
      buildOwnedLocalizedPath(experienceHierarchy.locationSlug, currentLang),
      base
    ).href;

    itemListElement.push({
      '@type': 'ListItem',
      position: itemListElement.length + 1,
      name: experienceHierarchy.locationName,
      item: locationUrl
    });

    if (slug !== experienceHierarchy.hubSlug) {
      const hubUrl = new URL(
        buildOwnedLocalizedPath(experienceHierarchy.hubSlug, currentLang),
        base
      ).href;

      itemListElement.push({
        '@type': 'ListItem',
        position: itemListElement.length + 1,
        name: resolveRouteLabel(experienceHierarchy.hubSlug, currentLang, 'Experiences'),
        item: hubUrl
      });
    }
  } else if (TARIFA_LOCATION_GUIDE_SLUGS.has(slug)) {
    if (slug !== 'tarifa-location') {
      const tarifaSlug = 'tarifa-location';
      const tarifaUrl = new URL(
        buildOwnedLocalizedPath(tarifaSlug, currentLang),
        base
      ).href;

      itemListElement.push({
        '@type': 'ListItem',
        position: itemListElement.length + 1,
        name: resolveRouteLabel(tarifaSlug, currentLang, 'Tarifa'),
        item: tarifaUrl
      });
    }
  } else if (FRIGILIANA_LOCATION_GUIDE_SLUGS.has(slug)) {
    if (slug !== 'frigiliana-location') {
      const frigilianaSlug = 'frigiliana-location';
      const frigilianaUrl = new URL(
        buildOwnedLocalizedPath(frigilianaSlug, currentLang),
        base
      ).href;

      itemListElement.push({
        '@type': 'ListItem',
        position: itemListElement.length + 1,
        name: 'Frigiliana',
        item: frigilianaUrl
      });
    }
  } else if (NERJA_LOCATION_GUIDE_SLUGS.has(slug)) {
    if (slug !== 'nerja-location') {
      const nerjaSlug = 'nerja-location';
      const nerjaUrl = new URL(
        buildOwnedLocalizedPath(nerjaSlug, currentLang),
        base
      ).href;

      itemListElement.push({
        '@type': 'ListItem',
        position: itemListElement.length + 1,
        name: 'Nerja',
        item: nerjaUrl
      });
    }
  } else if (PRIMARY_TRUST_PAGE_SLUGS.has(slug)) {
    const aboutUrl = new URL(
      buildOwnedLocalizedPath('amara-about-us', currentLang),
      base
    ).href;

    itemListElement.push({
      '@type': 'ListItem',
      position: itemListElement.length + 1,
      name: trustSectionLabels[currentLang],
      item: aboutUrl
    });
  }

  if (lodgingEntity) {
    const staysSlug = 'romantic-hideaways';
    const staysUrl = new URL(
      buildOwnedLocalizedPath(staysSlug, currentLang),
      base
    ).href;
    const staysLabels: Record<AmaraLanguage, string> = {
      en: 'Stays',
      de: 'Unterkünfte',
      es: 'Alojamientos',
      nl: 'Verblijven',
      sv: 'Boenden'
    };

    itemListElement.push({
      '@type': 'ListItem',
      position: itemListElement.length + 1,
      name: staysLabels[currentLang],
      item: staysUrl
    });
  }

  itemListElement.push({
    '@type': 'ListItem',
    position: itemListElement.length + 1,
    name: lodgingEntity
      ? `${lodgingEntity.name}, ${lodgingEntity.city}`
      : resolveRouteLabel(slug, currentLang, title),
    item: canonicalUrl
  });

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement
  };
}

function buildWebSiteNode(origin: string, defaultLang: string) {
  const base = getBase(origin);
  const inLanguage = [
    defaultLang,
    ...SUPPORTED_LANGUAGES.filter((code) => code !== defaultLang)
  ];

  return {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: `${base}/`,
    name: 'AMARA Lodging',
    inLanguage
  };
}

interface WebPageNodeOptions {
  breadcrumbId?: string;
  publisherId?: string;
  mainEntityId?: string;
  image?: string;
}

function buildWebPageNode(
  canonicalUrl: string,
  title: string,
  description: string,
  currentLang: AmaraLanguage,
  origin: string,
  options: WebPageNodeOptions = {}
) {
  const node: SchemaNode = {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: currentLang,
    isPartOf: {
      '@id': `${getBase(origin)}/#website`
    }
  };

  if (options.breadcrumbId) {
    node.breadcrumb = {
      '@id': options.breadcrumbId
    };
  }

  if (options.publisherId) {
    node.publisher = {
      '@id': options.publisherId
    };
  }

  if (options.mainEntityId) {
    node.mainEntity = {
      '@id': options.mainEntityId
    };
  }

  if (options.image) {
    node.primaryImageOfPage = {
      '@type': 'ImageObject',
      url: options.image
    };
  }

  return node;
}

function buildItemListNode(
  entities: VacationRentalEntity[],
  canonicalUrl: string,
  currentLang: AmaraLanguage,
  origin: string,
  name: string
) {
  const base = getBase(origin);

  return {
    '@type': 'ItemList',
    '@id': `${canonicalUrl}#itemlist`,
    name,
    numberOfItems: entities.length,
    itemListElement: entities.map((entity, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@id': `${base}/#${entity.identifier}`,
        name: entity.name,
        url: new URL(
          buildOwnedLocalizedPath(entity.slug, currentLang),
          base
        ).href
      }
    }))
  };
}

function buildArticleNode(
  seo: NonNullable<AmaraAuthoringSeo['article']>,
  canonicalUrl: string,
  title: string,
  description: string,
  currentLang: AmaraLanguage,
  origin: string,
  image?: string
) {
  const organizationId = `${getBase(origin)}/#organization`;
  const authorIsPerson = seo.authorType === 'Person';
  const authorUrl = seo.authorSlug
    ? new URL(buildOwnedLocalizedPath(seo.authorSlug, currentLang), getBase(origin)).href
    : `${getBase(origin)}/`;
  const node: SchemaNode = {
    '@type': 'Article',
    '@id': `${canonicalUrl}#article`,
    headline: title,
    description,
    datePublished: seo.datePublished,
    dateModified: seo.dateModified,
    inLanguage: currentLang,
    mainEntityOfPage: {
      '@id': `${canonicalUrl}#webpage`
    },
    author: {
      '@type': authorIsPerson ? 'Person' : 'Organization',
      '@id': authorIsPerson
        ? `${getBase(origin)}/#robert-sebastian-bohmer`
        : organizationId,
      name: seo.authorName,
      url: authorUrl
    },
    publisher: {
      '@id': organizationId
    }
  };

  if (image) {
    node.image = [image];
  }

  return node;
}

function buildBrandNode(entity: BrandEntity, origin: string) {
  const sameAs = [entity.instagramProfile].filter(Boolean);
  const base = getBase(origin);

  return {
    '@type': 'LodgingBusiness',
    '@id': `${base}/#organization`,
    name: entity.name,
    url: `${base}/`,
    telephone: entity.telephone,
    email: entity.email,
    sameAs,
    address: {
      '@type': 'PostalAddress',
      streetAddress: entity.street,
      addressLocality: entity.city,
      postalCode: entity.zip,
      addressRegion: entity.region,
      addressCountry: entity.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: entity.latitude,
      longitude: entity.longitude
    },
    brand: {
      '@type': 'Brand',
      name: entity.name
    },
    logo: `${base}/web-app-manifest-512x512.png`,
    image: new URL(entity.image, base).href,
    priceRange: entity.priceRange
  };
}

const GOOGLE_VACATION_RENTAL_BOOLEAN_AMENITIES = new Set([
  'ac',
  'airportShuttle',
  'balcony',
  'beachAccess',
  'childFriendly',
  'crib',
  'elevator',
  'fireplace',
  'freeBreakfast',
  'gymFitnessEquipment',
  'heating',
  'hotTub',
  'instantBookable',
  'ironingBoard',
  'kitchen',
  'microwave',
  'outdoorGrill',
  'ovenStove',
  'patio',
  'petsAllowed',
  'pool',
  'privateBeachAccess',
  'selfCheckinCheckout',
  'smokingAllowed',
  'tv',
  'washerDryer',
  'wheelchairAccessible',
  'wifi'
]);

const GOOGLE_VACATION_RENTAL_ENUM_AMENITIES: Record<string, Set<string>> = {
  internetType: new Set(['Free', 'Paid', 'None']),
  parkingType: new Set(['Free', 'Paid', 'None']),
  poolType: new Set(['Indoor', 'Outdoor', 'None'])
};

function buildGoogleVacationRentalAmenities(
  features: VacationRentalEntity['amenityFeatures']
): SchemaNode[] {
  const normalized = new Map<string, SchemaNode>();

  for (const feature of features) {
    let name = feature.name;
    let value = feature.value;

    // Preserve detailed guest copy while emitting only Google's documented taxonomy.
    if (name === 'privatePatio') {
      name = 'patio';
    } else if (name === 'parkingType' && value === 'ReservedUndergroundIncluded') {
      value = 'Free';
    }

    const isSupportedBoolean =
      typeof value === 'boolean' && GOOGLE_VACATION_RENTAL_BOOLEAN_AMENITIES.has(name);
    const isSupportedEnum =
      typeof value === 'string' && GOOGLE_VACATION_RENTAL_ENUM_AMENITIES[name]?.has(value);
    const isLicense = name === 'licenseNum' && typeof value === 'string' && value.length > 0;

    if (!isSupportedBoolean && !isSupportedEnum && !isLicense) {
      continue;
    }

    normalized.set(`${name}:${String(value)}`, {
      '@type': 'LocationFeatureSpecification',
      name,
      value
    });
  }

  return [...normalized.values()];
}

function buildVacationRentalNode(
  entity: VacationRentalEntity,
  canonicalUrl: string,
  currentLang: AmaraLanguage,
  origin: string
) {
  const base = getBase(origin);
  const entityId = `${base}/#${entity.identifier}`;
  const images = entity.images.slice(0, 8).map((image) => new URL(image, base).href);
  const petsFeature = entity.amenityFeatures.find((feature) => feature.name === 'petsAllowed');
  const containsPlace: SchemaNode = {
    '@type': 'Accommodation',
    additionalType: entity.accommodationType,
    bed: entity.bed.map((bed) => ({
      '@type': 'BedDetails',
      numberOfBeds: bed.numberOfBeds,
      typeOfBed: bed.typeOfBed
    })),
    occupancy: {
      '@type': 'QuantitativeValue',
      value: entity.occupancy
    },
    amenityFeature: buildGoogleVacationRentalAmenities(entity.amenityFeatures),
    numberOfBathroomsTotal: entity.bathrooms,
    numberOfBedrooms: entity.bedrooms
  };

  if (entity.rooms) {
    containsPlace.numberOfRooms = entity.rooms;
  }

  if (typeof petsFeature?.value === 'boolean') {
    containsPlace.petsAllowed = petsFeature.value;
  }

  return {
    '@type': 'VacationRental',
    '@id': entityId,
    additionalType: entity.additionalType,
    brand: {
      '@type': 'Brand',
      name: 'AMARA'
    },
    identifier: entity.identifier,
    name: entity.name,
    url: canonicalUrl,
    telephone: BRAND_ENTITY.telephone,
    email: BRAND_ENTITY.email,
    image: images,
    latitude: entity.latitude,
    longitude: entity.longitude,
    address: {
      '@type': 'PostalAddress',
      streetAddress: entity.street,
      addressLocality: entity.city,
      postalCode: entity.zip,
      addressRegion: entity.region,
      addressCountry: entity.country
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: entity.latitude,
      longitude: entity.longitude
    },
    checkinTime: entity.checkinTime,
    checkoutTime: entity.checkoutTime,
    description: entity.description[currentLang] ?? entity.description.en,
    knowsLanguage: ['en-US', 'de-DE', 'es-ES'],
    priceRange: entity.priceRange,
    sameAs: entity.sameAs,
    containsPlace,
    mainEntityOfPage: {
      '@id': `${canonicalUrl}#webpage`
    }
  };
}

function getVacationRentalEntity(
  entityKey: AmaraAuthoringSeo['entityKey']
): VacationRentalEntity | undefined {
  if (!entityKey || entityKey === 'amara-brand') {
    return undefined;
  }

  return vacationRentalEntitiesByKey[entityKey];
}

export function resolveStructuredData(
  seo: AmaraAuthoringSeo | undefined,
  canonicalUrl: string,
  currentLang: AmaraLanguage,
  origin: string
): string | null {
  const current = (!seo || !seo.languages)
    ? {
        title: 'AMARA',
        description: ''
      }
    : (
        seo.languages[currentLang] ??
        seo.languages.en ?? {
          title: 'AMARA',
          description: ''
        }
      );
  const lodgingEntity = seo?.schemaType === 'lodging'
    ? getVacationRentalEntity(seo.entityKey)
    : undefined;
  const collectionEntities = (seo?.collection?.entityKeys ?? []).map((entityKey) => {
    const entity = vacationRentalEntitiesByKey[entityKey];

    if (!entity) {
      throw new Error(`[Structured data] Unknown collection entity: ${entityKey}`);
    }

    return entity;
  });
  const itemListNode = collectionEntities.length > 0
    ? buildItemListNode(
        collectionEntities,
        canonicalUrl,
        currentLang,
        origin,
        current.title
      )
    : undefined;
  const ogImage = resolveOgImage(seo, origin);
  const breadcrumbNode = buildBreadcrumbNode(
    canonicalUrl,
    current.title,
    currentLang,
    origin,
    lodgingEntity
  );
  const articleEntityId = seo?.article
    ? `${canonicalUrl}#article`
    : undefined;
  const includeBrand =
    seo?.entityKey === 'amara-brand' || Boolean(lodgingEntity) || Boolean(seo?.article);
  const publisherId = includeBrand
    ? `${getBase(origin)}/#organization`
    : undefined;
  const lodgingEntityId = lodgingEntity
    ? `${getBase(origin)}/#${lodgingEntity.identifier}`
    : undefined;
  const itemListEntityId = itemListNode?.['@id'] as string | undefined;

  const graph: SchemaNode[] = [];

  if (new URL(canonicalUrl).pathname === '/') {
    graph.push(buildWebSiteNode(origin, 'es'));
  }

  graph.push(
    buildWebPageNode(
      canonicalUrl,
      current.title,
      current.description,
      currentLang,
      origin,
      {
        breadcrumbId: breadcrumbNode?.['@id'] as string | undefined,
        publisherId,
        mainEntityId: lodgingEntityId ?? itemListEntityId ?? articleEntityId,
        image: ogImage
      }
    )
  );

  if (breadcrumbNode) {
    graph.push(breadcrumbNode);
  }

  if (includeBrand) {
    graph.push(buildBrandNode(BRAND_ENTITY, origin));
  }

  if (itemListNode) {
    graph.push(itemListNode);
  }

  if (seo?.article) {
    graph.push(
      buildArticleNode(
        seo.article,
        canonicalUrl,
        current.title,
        current.description,
        currentLang,
        origin,
        ogImage
      )
    );
  }

  /**
   * Only pages with an explicit lodging schema assignment emit a complete
   * VacationRental entity. This keeps Google markup deterministic and prevents
   * private guest-guide pages from inheriting public listing markup.
   */
  if (lodgingEntity) {
    graph.push(buildVacationRentalNode(lodgingEntity, canonicalUrl, currentLang, origin));
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph
  });
}
