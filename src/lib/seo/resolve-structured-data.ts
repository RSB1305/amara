import type {
  AmaraAuthoringSeo,
  AmaraEntityKey,
  AmaraLanguage
} from '../../types/seo';

type LodgingSchemaType = 'VacationRental' | 'Hotel';

interface BrandEntity {
  key: 'amara-brand';
  kind: 'brand';
  name: 'AMARA';
  url: string;
  telephone: string;
  airbnbProfile?: string;
}

interface LodgingEntity {
  key: Exclude<AmaraEntityKey, 'amara-brand'>;
  kind: 'lodging';
  schemaType: LodgingSchemaType;
  name: string;
  street: string;
  city: string;
  zip: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
  bedrooms: number;
  occupancy: number;
  bookingUrl?: string;
  airbnbProfile?: string;
  amenities?: string[];
}

type EntityRegistryItem = BrandEntity | LodgingEntity;

const ENTITY_REGISTRY: Record<AmaraEntityKey, EntityRegistryItem> = {
  'amara-brand': {
    key: 'amara-brand',
    kind: 'brand',
    name: 'AMARA',
    url: 'https://amara-lodging.es/',
    telephone: '+34 604 44 09 64',
    airbnbProfile: 'https://www.airbnb.de/users/profile/1462887322087352320'
  },

  'amara-farah': {
    key: 'amara-farah',
    kind: 'lodging',
    schemaType: 'VacationRental',
    name: 'AMARA Farah',
    street: 'Calle Chorruelo 5',
    city: 'Frigiliana',
    zip: '29788',
    region: 'Andalucía',
    country: 'ES',
    latitude: 36.793171,
    longitude: -3.899107,
    bedrooms: 1,
    occupancy: 2,
    bookingUrl:
      'https://www.booking.com/hotel/es/das-amara-farah-in-der-altstadt-von-frigiliana.de.html',
    airbnbProfile: 'https://www.airbnb.de/users/profile/1462887322087352320',
    amenities: ['High-Speed WiFi']
  },

  'amara-lounis': {
    key: 'amara-lounis',
    kind: 'lodging',
    schemaType: 'VacationRental',
    name: 'AMARA Lounis',
    street: 'Calle Chorruelo 5',
    city: 'Frigiliana',
    zip: '29788',
    region: 'Andalucía',
    country: 'ES',
    latitude: 36.793171,
    longitude: -3.899107,
    bedrooms: 1,
    occupancy: 2,
    bookingUrl:
      'https://www.booking.com/hotel/es/das-amara-lounis-in-der-altstadt-von-frigiliana.de.html',
    airbnbProfile: 'https://www.airbnb.de/users/profile/1462887322087352320',
    amenities: ['High-Speed WiFi', 'Air Conditioning']
  },

  'amara-zaid': {
    key: 'amara-zaid',
    kind: 'lodging',
    schemaType: 'VacationRental',
    name: 'AMARA Zaid',
    street: 'Calle Chorruelo 5',
    city: 'Frigiliana',
    zip: '29788',
    region: 'Andalucía',
    country: 'ES',
    latitude: 36.793171,
    longitude: -3.899107,
    bedrooms: 1,
    occupancy: 2,
    bookingUrl:
      'https://www.booking.com/hotel/es/das-amara-zaid-in-der-altstadt-von-frigiliana.de.html',
    airbnbProfile: 'https://www.airbnb.de/users/profile/1462887322087352320',
    amenities: ['High-Speed WiFi', 'Air Conditioning']
  },

  'amara-maha': {
    key: 'amara-maha',
    kind: 'lodging',
    schemaType: 'VacationRental',
    name: 'AMARA Maha',
    street: 'Calle Chorruelo 5',
    city: 'Frigiliana',
    zip: '29788',
    region: 'Andalucía',
    country: 'ES',
    latitude: 36.793171,
    longitude: -3.899107,
    bedrooms: 1,
    occupancy: 2,
    bookingUrl:
      'https://www.booking.com/hotel/es/das-amara-maha-in-der-altstadt-von-frigiliana.de.html',
    airbnbProfile: 'https://www.airbnb.de/users/profile/1462887322087352320',
    amenities: ['High-Speed WiFi', 'Air Conditioning']
  },

  'amara-playa': {
    key: 'amara-playa',
    kind: 'lodging',
    schemaType: 'VacationRental',
    name: 'AMARA Playa',
    street: 'Calle Castilla Perez 60',
    city: 'Nerja',
    zip: '29780',
    region: 'Andalucía',
    country: 'ES',
    latitude: 36.7435,
    longitude: -3.8805,
    bedrooms: 1,
    occupancy: 2,
    bookingUrl:
      'https://www.booking.com/hotel/es/cozy-apartment-next-to-the-beach-and-nerja-center.de.html',
    airbnbProfile: 'https://www.airbnb.de/users/profile/1462887322087352320',
    amenities: ['High-Speed WiFi', 'Air Conditioning']
  },

  'amara-family-surf': {
    key: 'amara-family-surf',
    kind: 'lodging',
    schemaType: 'VacationRental',
    name: 'AMARA Family Surf',
    street: 'Calle Mar Adriatico 29',
    city: 'Tarifa',
    zip: '11380',
    region: 'Andalucía',
    country: 'ES',
    latitude: 36.0126,
    longitude: -5.6044,
    bedrooms: 2,
    occupancy: 4,
    bookingUrl:
      'https://www.booking.com/hotel/es/surfers-home-with-oceanview-and-pool.de.html',
    airbnbProfile: 'https://www.airbnb.de/users/profile/1462887322087352320',
    amenities: ['High-Speed WiFi', 'Air Conditioning']
  }
};


function resolveOgImage(seo: AmaraAuthoringSeo | undefined, origin: string): string | undefined {
  return seo?.ogImage ? new URL(seo.ogImage, origin).href : undefined;
}

function buildWebPageNode(
  canonicalUrl: string,
  title: string,
  description: string,
  currentLang: AmaraLanguage,
  origin: string
) {
  return {
    '@type': 'WebPage',
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: currentLang,
    isPartOf: {
      '@id': `${origin.replace(/\/+$/, '')}/#website`
    }
  };
}

function buildBrandNode(
  entity: BrandEntity,
  canonicalUrl: string,
  origin: string
) {
  const sameAs = [entity.airbnbProfile].filter(Boolean);

  return {
    '@type': 'Organization',
    '@id': `${canonicalUrl}#organization`,
    name: entity.name,
    url: entity.url,
    telephone: entity.telephone,
    sameAs,
    brand: {
      '@type': 'Brand',
      name: entity.name
    },
    logo: `${origin.replace(/\/+$/, '')}/favicon.svg`
  };
}

function buildLodgingNode(
  entity: LodgingEntity,
  canonicalUrl: string,
  ogImage?: string
) {
  const sameAs = [entity.airbnbProfile, entity.bookingUrl].filter(Boolean);

  return {
    '@type': entity.schemaType,
    '@id': `${canonicalUrl}#identity`,
    name: entity.name,
    url: canonicalUrl,
    telephone: '+34 604 44 09 64',
    image: ogImage,
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
    sameAs,
    containsPlace: {
      '@type': 'Accommodation',
      name: entity.name,
      numberOfBedrooms: entity.bedrooms,
      occupancy: {
        '@type': 'QuantitativeValue',
        value: entity.occupancy
      },
      amenityFeature: (entity.amenities ?? []).map((amenity) => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity,
        value: true
      }))
    }
  };
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

  const graph: Array<Record<string, unknown>> = [
    buildWebPageNode(
      canonicalUrl,
      current.title,
      current.description,
      currentLang,
      origin
    )
  ];

  /**
   * Typ A and Typ B stay intentionally lean.
   * They must not silently inherit lodging or trust schema.
   */
  if (seo?.pageType === 'A' || seo?.pageType === 'B') {
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph
    });
  }

  /**
   * Typ C may output brand trust schema, but only when explicitly assigned.
   */
  if (seo?.pageType === 'C' && seo?.entityKey === 'amara-brand') {
    const brandEntity = ENTITY_REGISTRY['amara-brand'];

if (brandEntity.kind === 'brand') {
  graph.push(buildBrandNode(brandEntity, canonicalUrl, origin));
}
    return JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': graph
    });
  }

  /**
   * Typ D may output lodging schema, but only from an explicit entity registry key.
   */
  if (seo?.pageType === 'D' && seo?.entityKey) {
    const entity = ENTITY_REGISTRY[seo.entityKey];

    if (entity && entity.kind === 'lodging') {
      graph.push(buildLodgingNode(entity, canonicalUrl, ogImage));
      return JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': graph
      });
    }
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph
  });
}
