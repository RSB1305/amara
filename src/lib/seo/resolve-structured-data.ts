import type {
  AmaraAuthoringSeo,
  AmaraLanguage
} from '../../types/seo';
import {
  vacationRentalEntitiesByKey,
  type VacationRentalEntity
} from '../../content/vacationRentalEntities';
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
  latitude: 36.793171,
  longitude: -3.899107,
  airbnbProfile: 'https://www.airbnb.de/users/profile/1462887322087352320',
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
  origin: string
): SchemaNode | null {
  const slug = resolveCanonicalSlug(canonicalUrl);

  if (!slug) {
    return null;
  }

  const base = getBase(origin);
  const homeUrl = new URL(buildOwnedLocalizedPath('', currentLang), base).href;

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'AMARA',
        item: homeUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: resolveRouteLabel(slug, currentLang, title),
        item: canonicalUrl
      }
    ]
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: entity.latitude,
      longitude: entity.longitude
    },
    brand: {
      '@type': 'Brand',
      name: entity.name
    },
    logo: `${base}/web-app-manifest-512x512.png`
  };
}

function buildVacationRentalNode(
  entity: VacationRentalEntity,
  canonicalUrl: string,
  currentLang: AmaraLanguage,
  origin: string
) {
  const base = getBase(origin);
  const entityId = `${base}/#${entity.identifier}`;
  const images = entity.images.map((image) => new URL(image, base).href);
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
    amenityFeature: entity.amenityFeatures.map((feature) => ({
      '@type': 'LocationFeatureSpecification',
      name: feature.name,
      value: feature.value
    })),
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
  const ogImage = resolveOgImage(seo, origin);
  const breadcrumbNode = buildBreadcrumbNode(canonicalUrl, current.title, currentLang, origin);
  const lodgingEntity = seo?.pageType === 'D'
    ? getVacationRentalEntity(seo.entityKey)
    : undefined;
  const includeBrand = seo?.entityKey === 'amara-brand' || Boolean(lodgingEntity);
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
        mainEntityId: lodgingEntityId,
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

  /**
   * Type D pages emit one complete VacationRental entity from the explicit
   * AMARA rental registry. This keeps Google markup deterministic and avoids
   * pathname heuristics.
   */
  if (lodgingEntity) {
    graph.push(buildVacationRentalNode(lodgingEntity, canonicalUrl, currentLang, origin));
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph
  });
}
