import type {
  AmaraAuthoringSeo,
  AmaraLanguage
} from '../../types/seo';
import {
  vacationRentalEntitiesByKey,
  type VacationRentalEntity
} from '../../content/vacationRentalEntities';
import { airbnbReviewEvidence } from '../../content/reviewEvidence';
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
  image: string;
  priceRange: string;
  airbnbProfile?: string;
  instagramProfile?: string;
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
  image: '/images/hero-frigiliana.jpg',
  priceRange: 'EUR 75-350',
  airbnbProfile: airbnbReviewEvidence.sourceUrl,
  instagramProfile: 'https://www.instagram.com/amaralodging/'
};

const PUBLIC_ROUTE_LABELS: Partial<Record<string, Record<AmaraLanguage, string>>> = {
  'amara-about-us': {
    en: 'About AMARA',
    de: 'Über AMARA',
    es: 'Sobre AMARA',
    nl: 'Over AMARA',
    sv: 'Om AMARA'
  },
  'comfort-amenities': {
    en: 'Amenities',
    de: 'Ausstattung',
    es: 'Servicios',
    nl: 'Voorzieningen',
    sv: 'Bekvämligheter'
  },
  'direct-booking-benefits': {
    en: 'Direct Booking Benefits',
    de: 'Vorteile der Direktbuchung',
    es: 'Ventajas de reserva directa',
    nl: 'Voordelen van direct boeken',
    sv: 'Fördelar med direktbokning'
  },
  'directions-arrival-guide': {
    en: 'Arrival Guide',
    de: 'Anreise-Guide',
    es: 'Guía de llegada',
    nl: 'Aankomstgids',
    sv: 'Ankomstguide'
  },
  'faq-general': {
    en: 'Stay FAQ',
    de: 'Aufenthalts-FAQ',
    es: 'FAQ de la estancia',
    nl: 'Verblijfs-FAQ',
    sv: 'FAQ för vistelsen'
  },
  'frigiliana-faq': {
    en: 'Frigiliana FAQ',
    de: 'Frigiliana-FAQ',
    es: 'FAQ de Frigiliana',
    nl: 'Frigiliana-FAQ',
    sv: 'Frigiliana-FAQ'
  },
  'frigiliana-location': {
    en: 'Frigiliana Guide',
    de: 'Frigiliana-Guide',
    es: 'Guía de Frigiliana',
    nl: 'Frigiliana-gids',
    sv: 'Frigiliana-guide'
  },
  'explore-frigiliana-nerja': {
    en: 'Experiences',
    de: 'Erlebnisse',
    es: 'Experiencias',
    nl: 'Ervaringen',
    sv: 'Upplevelser'
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
  'frigiliana-parking': {
    en: 'Frigiliana Parking',
    de: 'Parken in Frigiliana',
    es: 'Aparcamiento en Frigiliana',
    nl: 'Parkeren in Frigiliana',
    sv: 'Parkering i Frigiliana'
  },
  'frigiliana-weather': {
    en: 'Weather in Frigiliana',
    de: 'Wetter in Frigiliana',
    es: 'El tiempo en Frigiliana',
    nl: 'Het weer in Frigiliana',
    sv: 'Vädret i Frigiliana'
  },
  'guest-reviews': {
    en: 'Guest Reviews',
    de: 'Gästebewertungen',
    es: 'Reseñas de huéspedes',
    nl: 'Gastbeoordelingen',
    sv: 'Gästrecensioner'
  },
  instagram: {
    en: 'Instagram',
    de: 'Instagram',
    es: 'Instagram',
    nl: 'Instagram',
    sv: 'Instagram'
  },
  'legal-notice': {
    en: 'Legal Notice',
    de: 'Impressum',
    es: 'Aviso legal',
    nl: 'Juridische kennisgeving',
    sv: 'Juridisk information'
  },
  'romantic-hideaways': {
    en: 'Apartments for couples',
    de: 'Apartments für Paare',
    es: 'Apartamentos para parejas',
    nl: 'Appartementen voor koppels',
    sv: 'Lägenheter för par'
  },
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

const EXPERIENCE_DETAIL_SLUGS = new Set([
  'frigiliana-beaches',
  'frigiliana-hiking',
  'frigiliana-restaurants',
  'frigiliana-festivals',
  'frigiliana-market',
  'frigiliana-day-trips',
  'frigiliana-wellness',
  'nerja-nightlife'
]);

const TARIFA_GUIDE_SLUGS = new Set([
  'tarifa-location',
  'tarifa-wind-kitesurfing',
  'tarifa-beaches'
]);

const DESTINATION_LABELS: Record<AmaraLanguage, string> = {
  en: 'Destinations',
  de: 'Reiseziele',
  es: 'Destinos',
  nl: 'Bestemmingen',
  sv: 'Resmål'
};

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

  if (TARIFA_GUIDE_SLUGS.has(slug)) {
    const destinationsSlug = 'explore-frigiliana-nerja';
    const destinationsUrl = new URL(
      buildOwnedLocalizedPath(destinationsSlug, currentLang),
      base
    ).href;

    itemListElement.push({
      '@type': 'ListItem',
      position: itemListElement.length + 1,
      name: DESTINATION_LABELS[currentLang],
      item: destinationsUrl
    });

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
  } else if (EXPERIENCE_DETAIL_SLUGS.has(slug)) {
    const hubSlug = 'explore-frigiliana-nerja';
    const hubUrl = new URL(
      buildOwnedLocalizedPath(hubSlug, currentLang),
      base
    ).href;

    itemListElement.push({
      '@type': 'ListItem',
      position: itemListElement.length + 1,
      name: resolveRouteLabel(hubSlug, currentLang, 'Experiences'),
      item: hubUrl
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
  const sameAs = [entity.airbnbProfile, entity.instagramProfile].filter(Boolean);
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
    address: {
      '@type': 'PostalAddress',
      streetAddress: entity.street,
      addressLocality: entity.city,
      postalCode: entity.zip,
      addressRegion: entity.region,
      addressCountry: entity.country
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
        mainEntityId: lodgingEntityId ?? articleEntityId,
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
