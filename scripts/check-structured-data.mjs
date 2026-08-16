import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync
} from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { DYNAMIC_CANONICAL_PUBLIC_SLUGS } from '../src/lib/canonicalPublicSlugs.mjs';

const VACATION_RENTAL_LANGUAGES = Object.freeze(['es', 'de', 'en', 'nl', 'sv']);
const EXPECTED_VACATION_RENTAL_IDENTITIES = 6;
const EXPECTED_LOCALIZED_VACATION_RENTAL_PAGES = 30;
const STAY_SELECTOR_SLUG = 'romantic-hideaways';
const EXPECTED_LOCALIZED_STAY_SELECTOR_PAGES = VACATION_RENTAL_LANGUAGES.length;
const VACATION_RENTAL_SLUGS = new Set(DYNAMIC_CANONICAL_PUBLIC_SLUGS);

const EXPECTED_VACATION_RENTAL_ROUTES = new Map(
  DYNAMIC_CANONICAL_PUBLIC_SLUGS.flatMap((slug) =>
    VACATION_RENTAL_LANGUAGES.map((language) => {
      const pathname = language === 'es' ? `/${slug}` : `/${language}/${slug}`;

      return [pathname, { language, pathname, slug }];
    })
  )
);

const EXPECTED_STAY_SELECTOR_ROUTES = new Map(
  VACATION_RENTAL_LANGUAGES.map((language) => {
    const pathname = language === 'es'
      ? `/${STAY_SELECTOR_SLUG}`
      : `/${language}/${STAY_SELECTOR_SLUG}`;

    return [pathname, { language, pathname }];
  })
);

const KNOWN_BROKEN_BREADCRUMB_LABELS = new Set([
  'Uber AMARA',
  'Gastebewertungen',
  'Apartments fur Paare',
  'Guia de llegada',
  'Guia de Frigiliana',
  'Resenas de huespedes',
  'Bekvamligheter',
  'Fordelar med direktbokning',
  'FAQ for vistelsen',
  'Vadret i Frigiliana',
  'Gastrecensioner',
  'Lagenheter for par'
]);

const GOOGLE_VACATION_RENTAL_BOOLEAN_AMENITIES = new Set([
  'ac', 'airportShuttle', 'balcony', 'beachAccess', 'childFriendly', 'crib',
  'elevator', 'fireplace', 'freeBreakfast', 'gymFitnessEquipment', 'heating',
  'hotTub', 'instantBookable', 'ironingBoard', 'kitchen', 'microwave',
  'outdoorGrill', 'ovenStove', 'patio', 'petsAllowed', 'pool',
  'privateBeachAccess', 'selfCheckinCheckout', 'smokingAllowed', 'tv',
  'washerDryer', 'wheelchairAccessible', 'wifi'
]);

const GOOGLE_VACATION_RENTAL_ENUM_AMENITIES = {
  internetType: new Set(['Free', 'Paid', 'None']),
  parkingType: new Set(['Free', 'Paid', 'None']),
  poolType: new Set(['Indoor', 'Outdoor', 'None'])
};

const FRIGILIANA_EXPERIENCE_DETAIL_SLUGS = new Set([
  'frigiliana-beaches',
  'frigiliana-hiking',
  'frigiliana-restaurants',
  'frigiliana-festivals',
  'frigiliana-market',
  'frigiliana-day-trips',
  'frigiliana-wellness'
]);

const NERJA_EXPERIENCE_DETAIL_SLUGS = new Set([
  'nerja-beaches',
  'nerja-day-trips',
  'nerja-food',
  'nerja-balcon-de-europa',
  'nerja-caves',
  'nerja-nightlife'
]);

const NON_DEFAULT_LANGUAGES = new Set(['de', 'en', 'nl', 'sv']);

function hasType(node, expectedType) {
  const types = Array.isArray(node?.['@type'])
    ? node['@type']
    : [node?.['@type']];

  return types.includes(expectedType);
}

function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isValidAbsoluteHttpUrl(value) {
  if (!isNonEmptyString(value)) {
    return false;
  }

  try {
    const parsed = new URL(value);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

function isValidLatitude(value) {
  return Number.isFinite(value) && value >= -90 && value <= 90;
}

function isValidLongitude(value) {
  return Number.isFinite(value) && value >= -180 && value <= 180;
}

function getRoutePathFromHtmlFile(relativePath) {
  const routePath = relativePath
    .replace(/(?:^|\/)index\.html$/i, '')
    .replace(/\.html$/i, '');

  return `/${routePath}`.replace(/\/+$/, '') || '/';
}

function describeRentalRoute(route, canonicalUrl, propertyName) {
  return (
    `Vacation Rental route ${route.pathname} ` +
    `(language=${route.language}, property=${propertyName || route.slug}, ` +
    `canonical=${canonicalUrl || 'missing'})`
  );
}

function getOwnedSlug(pathname) {
  const segments = pathname.split('/').filter(Boolean);

  if (NON_DEFAULT_LANGUAGES.has(segments[0])) {
    segments.shift();
  }

  return segments.join('/');
}

function getLocalizedOwnedPath(slug, language) {
  return language === 'es' ? `/${slug}` : `/${language}/${slug}`;
}

function getVisibleRentalSlugs(html, pageUrl) {
  const slugs = [];
  const seen = new Set();

  for (const match of html.matchAll(/<a\b[^>]*\bhref=["']([^"']+)["'][^>]*>/gi)) {
    let slug;

    try {
      slug = getOwnedSlug(new URL(match[1], pageUrl).pathname);
    } catch {
      continue;
    }

    if (!VACATION_RENTAL_SLUGS.has(slug) || seen.has(slug)) {
      continue;
    }

    seen.add(slug);
    slugs.push(slug);
  }

  return slugs;
}

function getExperienceHubPath(pathname, hubSlug) {
  const language = pathname.split('/').filter(Boolean)[0];

  return NON_DEFAULT_LANGUAGES.has(language)
    ? `/${language}/${hubSlug}`
    : `/${hubSlug}`;
}

function getExperienceFamily(slug) {
  if (FRIGILIANA_EXPERIENCE_DETAIL_SLUGS.has(slug)) {
    return {
      hubSlug: 'frigiliana-experience',
      detailSlugs: FRIGILIANA_EXPERIENCE_DETAIL_SLUGS,
      requiresPrefooter: true
    };
  }

  if (NERJA_EXPERIENCE_DETAIL_SLUGS.has(slug)) {
    return {
      hubSlug: 'nerja-experience',
      detailSlugs: NERJA_EXPERIENCE_DETAIL_SLUGS,
      requiresPrefooter: false
    };
  }

  return null;
}

function walkHtmlFiles(directory) {
  const files = [];

  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const fullPath = join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...walkHtmlFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(fullPath);
    }
  }

  return files;
}

function readAttribute(tag, attribute) {
  return tag?.match(new RegExp(`\\b${attribute}=["']([^"']+)["']`, 'i'))?.[1];
}

function isHomePath(pathname) {
  return /^\/(?:(?:de|en|nl|sv)\/?)?$/.test(pathname);
}

function localAssetPath(url, pageOrigin, distRoot) {
  const assetUrl = new URL(url, pageOrigin);

  if (assetUrl.origin !== pageOrigin) {
    return null;
  }

  return join(
    distRoot,
    ...decodeURIComponent(assetUrl.pathname).split('/').filter(Boolean)
  );
}

export function runStructuredDataAudit({
  distRoot = resolve(process.cwd(), 'dist')
} = {}) {
  if (!existsSync(distRoot) || !statSync(distRoot).isDirectory()) {
    throw new Error(`Structured data audit requires a built dist directory: ${distRoot}`);
  }

  const errors = [];
  const rentalIdentityByIdentifier = new Map();
  const rentalIdentityBySlug = new Map();
  const expectedRentalRoutesSeen = new Set();
  const validatedExpectedRentalRoutes = new Set();
  const expectedStaySelectorRoutesSeen = new Set();
  const validatedStaySelectorRoutes = new Set();
  const staySelectorRecords = [];
  let contentPages = 0;
  let redirectPages = 0;
  let vacationRentalPages = 0;

  const report = (file, message) => {
    errors.push(`${relative(distRoot, file).replaceAll('\\', '/')}: ${message}`);
  };

  if (DYNAMIC_CANONICAL_PUBLIC_SLUGS.length !== EXPECTED_VACATION_RENTAL_IDENTITIES) {
    errors.push(
      'Canonical rental route source contains ' +
        `${DYNAMIC_CANONICAL_PUBLIC_SLUGS.length} identities; ` +
        `expected ${EXPECTED_VACATION_RENTAL_IDENTITIES}.`
    );
  }

  if (
    EXPECTED_VACATION_RENTAL_ROUTES.size !==
    EXPECTED_LOCALIZED_VACATION_RENTAL_PAGES
  ) {
    errors.push(
      'Canonical rental route source produces ' +
        `${EXPECTED_VACATION_RENTAL_ROUTES.size} localized routes; ` +
        `expected ${EXPECTED_LOCALIZED_VACATION_RENTAL_PAGES}.`
    );
  }

  if (
    EXPECTED_STAY_SELECTOR_ROUTES.size !==
    EXPECTED_LOCALIZED_STAY_SELECTOR_PAGES
  ) {
    errors.push(
      'Stay Selector route source produces ' +
        `${EXPECTED_STAY_SELECTOR_ROUTES.size} localized routes; ` +
        `expected ${EXPECTED_LOCALIZED_STAY_SELECTOR_PAGES}.`
    );
  }

  for (const file of walkHtmlFiles(distRoot)) {
    const relativePath = relative(distRoot, file).replaceAll('\\', '/');
    const fileRoutePath = getRoutePathFromHtmlFile(relativePath);
    const expectedRentalRoute = EXPECTED_VACATION_RENTAL_ROUTES.get(fileRoutePath);
    const expectedStaySelectorRoute = EXPECTED_STAY_SELECTOR_ROUTES.get(fileRoutePath);

    if (relativePath === '404.html' || relativePath.startsWith('tools/')) {
      continue;
    }

    if (expectedRentalRoute) {
      expectedRentalRoutesSeen.add(fileRoutePath);
    }

    if (expectedStaySelectorRoute) {
      expectedStaySelectorRoutesSeen.add(fileRoutePath);
    }

    const html = readFileSync(file, 'utf8');

    if (/http-equiv=["']refresh["']/i.test(html)) {
      if (expectedRentalRoute) {
        report(
          file,
          `${describeRentalRoute(expectedRentalRoute)} unexpectedly renders as a redirect`
        );
      }

      if (expectedStaySelectorRoute) {
        report(file, `Stay Selector route ${fileRoutePath} unexpectedly renders as a redirect`);
      }

      redirectPages += 1;
      continue;
    }

    contentPages += 1;

    const jsonLdScripts = [
      ...html.matchAll(
        /<script\b[^>]*\btype=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi
      )
    ];

    if (jsonLdScripts.length !== 1) {
      const routeContext = expectedRentalRoute
        ? `${describeRentalRoute(expectedRentalRoute)}: `
        : '';
      report(
        file,
        `${routeContext}expected exactly one JSON-LD script, ` +
          `found ${jsonLdScripts.length}`
      );
      continue;
    }

    let document;

    try {
      document = JSON.parse(jsonLdScripts[0][1]);
    } catch (error) {
      report(file, `invalid JSON-LD: ${error.message}`);
      continue;
    }

    if (document['@context'] !== 'https://schema.org') {
      report(file, 'missing or unexpected Schema.org context');
    }

    if (!Array.isArray(document['@graph'])) {
      const routeContext = expectedRentalRoute
        ? `${describeRentalRoute(expectedRentalRoute)}: `
        : '';
      report(file, `${routeContext}expected one @graph array`);
      continue;
    }

    const graph = document['@graph'];
    const webPages = graph.filter((node) => node?.['@type'] === 'WebPage');

    if (webPages.length !== 1) {
      report(file, `expected exactly one WebPage node, found ${webPages.length}`);
      continue;
    }

    const webPage = webPages[0];
    const canonicalTag = html.match(
      /<link\b[^>]*\brel=["']canonical["'][^>]*>/i
    )?.[0];
    const canonicalUrl = readAttribute(canonicalTag, 'href');
    const htmlTag = html.match(/<html\b[^>]*>/i)?.[0];
    const htmlLanguage = readAttribute(htmlTag, 'lang');
    const rentalContext = expectedRentalRoute
      ? describeRentalRoute(expectedRentalRoute, canonicalUrl)
      : null;

    if (!canonicalUrl || webPage.url !== canonicalUrl) {
      report(file, 'WebPage URL does not match the canonical URL');
    }

    if (!webPage.name || !webPage.description) {
      report(file, 'WebPage name and description must be non-empty');
    }

    if (webPage.inLanguage !== htmlLanguage) {
      report(file, 'WebPage language does not match the HTML lang attribute');
    }

    if (
      expectedRentalRoute &&
      (webPage.inLanguage !== expectedRentalRoute.language ||
        htmlLanguage !== expectedRentalRoute.language)
    ) {
      report(
        file,
        `${rentalContext}: expected language=${expectedRentalRoute.language}, ` +
          `WebPage language=${webPage.inLanguage || 'missing'}, ` +
          `HTML language=${htmlLanguage || 'missing'}`
      );
    }

    if (webPage['@id'] !== `${webPage.url}#webpage`) {
      report(file, 'WebPage @id does not use the canonical webpage fragment');
    }

    if (/localhost|127\.0\.0\.1/i.test(JSON.stringify(document))) {
      report(file, 'JSON-LD contains a local development URL');
    }

    const nodeIds = graph.map((node) => node?.['@id']).filter(Boolean);
    if (new Set(nodeIds).size !== nodeIds.length) {
      report(file, 'JSON-LD graph contains duplicate @id values');
    }

    let pageOrigin;
    try {
      pageOrigin = new URL(webPage.url).origin;
    } catch {
      report(file, 'WebPage URL is not absolute');
      continue;
    }

    const itemLists = graph.filter((node) => hasType(node, 'ItemList'));

    if (expectedStaySelectorRoute) {
      if (itemLists.length !== 1) {
        report(
          file,
          `Stay Selector expected exactly one ItemList node, found ${itemLists.length}`
        );
      } else {
        staySelectorRecords.push({
          canonicalUrl,
          file,
          graph,
          html,
          htmlLanguage,
          itemList: itemLists[0],
          route: expectedStaySelectorRoute,
          webPage
        });
      }
    } else if (itemLists.length > 0) {
      report(
        file,
        `unexpected ItemList markup on non-collection route ${fileRoutePath}; ` +
          `actual count=${itemLists.length}`
      );
    }

    const breadcrumbs = graph.filter((node) => hasType(node, 'BreadcrumbList'));
    const breadcrumb = breadcrumbs[0];
    const pagePath = new URL(webPage.url).pathname;
    const ownedSlug = getOwnedSlug(pagePath);

    if (expectedRentalRoute && pagePath !== expectedRentalRoute.pathname) {
      report(
        file,
        `${rentalContext}: expected canonical route=${expectedRentalRoute.pathname}, ` +
          `actual route=${pagePath}`
      );
    }

    if (expectedRentalRoute && breadcrumbs.length !== 1) {
      report(
        file,
        `${rentalContext}: expected exactly one BreadcrumbList node, ` +
          `actual count=${breadcrumbs.length}`
      );
    } else if (!isHomePath(pagePath) && !breadcrumb) {
      report(file, 'non-home page is missing BreadcrumbList markup');
    }

    if (breadcrumb) {
      const items = Array.isArray(breadcrumb.itemListElement)
        ? breadcrumb.itemListElement
        : [];

      if (
        items.length === 0 ||
        items.at(-1)?.item !== webPage.url ||
        items.some(
          (item, index) =>
            item?.position !== index + 1 || !item?.name || !item?.item
        )
      ) {
        report(file, 'BreadcrumbList items are incomplete or inconsistent');
      }

      const pageLabel = items.at(-1)?.name;
      if (KNOWN_BROKEN_BREADCRUMB_LABELS.has(pageLabel)) {
        report(file, `breadcrumb label is not properly localized: ${pageLabel}`);
      }

      const breadcrumbExperienceFamily = getExperienceFamily(ownedSlug);
      if (breadcrumbExperienceFamily) {
        const expectedHubUrl = new URL(
          getExperienceHubPath(pagePath, breadcrumbExperienceFamily.hubSlug),
          pageOrigin
        ).href;

        if (items.length !== 4 || items[2]?.item !== expectedHubUrl) {
          report(
            file,
            'experience detail breadcrumb must be Home > Destination > Experiences > current page'
          );
        }
      }
    }

    const experienceFamily = getExperienceFamily(ownedSlug);
    if (experienceFamily) {
      if (!html.includes('data-am-experience-context')) {
        report(file, 'experience detail is missing its crawlable family navigation');
      }

      if (experienceFamily.requiresPrefooter && !html.includes('data-am-experience-prefooter')) {
        report(file, 'experience detail is missing its related-guides pre-footer');
      }

      const siblingLinkCount = [
        ...html.matchAll(/\bdata-am-experience-sibling\b/g)
      ].length;
      const recommendationCount = [
        ...html.matchAll(/\bdata-am-experience-recommendation\b/g)
      ].length;

      const expectedSiblingLinkCount = experienceFamily.detailSlugs.size - 1;

      if (siblingLinkCount !== expectedSiblingLinkCount) {
        report(
          file,
          `experience family navigation contains ${siblingLinkCount} of ${expectedSiblingLinkCount} available guides`
        );
      }

      if (experienceFamily.requiresPrefooter && recommendationCount !== 3) {
        report(
          file,
          `experience pre-footer contains ${recommendationCount} recommendations instead of 3`
        );
      }
    }

    const schemaImages = [
      webPage.primaryImageOfPage?.url,
      ...graph
        .filter((node) => node?.['@type'] === 'VacationRental')
        .flatMap((node) => (Array.isArray(node.image) ? node.image : []))
    ].filter(Boolean);

    for (const imageUrl of schemaImages) {
      if (!isValidAbsoluteHttpUrl(imageUrl)) {
        report(file, `referenced schema image is not a valid absolute URL: ${imageUrl}`);
        continue;
      }

      const assetPath = localAssetPath(imageUrl, pageOrigin, distRoot);

      if (assetPath && (!existsSync(assetPath) || !statSync(assetPath).isFile())) {
        report(file, `referenced schema image is missing: ${imageUrl}`);
      }
    }

    const vacationRentals = graph.filter((node) => hasType(node, 'VacationRental'));
    const vacationRental = vacationRentals[0];

    if (expectedRentalRoute && vacationRentals.length !== 1) {
      report(
        file,
        `${rentalContext}: expected exactly one VacationRental node, ` +
          `actual count=${vacationRentals.length}`
      );
    } else if (!expectedRentalRoute && vacationRentals.length > 0) {
      report(
        file,
        `unexpected VacationRental markup on non-rental route ${pagePath}; ` +
          `canonical=${canonicalUrl || 'missing'}, actual count=${vacationRentals.length}`
      );
    }

    if (!vacationRental || vacationRentals.length !== 1) {
      continue;
    }

    vacationRentalPages += 1;

    const contextualRentalReport = (message) => {
      const context = expectedRentalRoute
        ? describeRentalRoute(
            expectedRentalRoute,
            canonicalUrl,
            vacationRental.name
          )
        : `Vacation Rental canonical=${canonicalUrl || 'missing'}`;

      report(file, `${context}: ${message}`);
    };

    const rentalImages = Array.isArray(vacationRental.image)
      ? vacationRental.image
      : [];
    const validRentalImages = rentalImages.filter(isValidAbsoluteHttpUrl);
    const containsPlace = vacationRental.containsPlace;
    const occupancy = containsPlace?.occupancy?.value;
    const geo = vacationRental.geo;
    const latitude = vacationRental.latitude ?? vacationRental.geo?.latitude;
    const longitude = vacationRental.longitude ?? vacationRental.geo?.longitude;
    const requiredRentalFields = [
      [
        'containsPlace object',
        containsPlace && typeof containsPlace === 'object' && !Array.isArray(containsPlace)
      ],
      ['containsPlace @type=Accommodation', hasType(containsPlace, 'Accommodation')],
      [
        'containsPlace additionalType=EntirePlace',
        containsPlace?.additionalType === 'EntirePlace'
      ],
      [
        'containsPlace.occupancy.value as a positive integer',
        Number.isInteger(occupancy) && occupancy > 0
      ],
      [
        'containsPlace.numberOfBedrooms as a non-negative integer',
        Number.isInteger(containsPlace?.numberOfBedrooms) &&
          containsPlace.numberOfBedrooms >= 0
      ],
      [
        'containsPlace.numberOfBathroomsTotal as a non-negative number',
        Number.isFinite(containsPlace?.numberOfBathroomsTotal) &&
          containsPlace.numberOfBathroomsTotal >= 0
      ],
      ['identifier as non-empty text', isNonEmptyString(vacationRental.identifier)],
      ['at least 8 valid absolute image URLs', validRentalImages.length >= 8],
      ['latitude in range -90..90', isValidLatitude(latitude)],
      ['longitude in range -180..180', isValidLongitude(longitude)],
      ['name as non-empty text', isNonEmptyString(vacationRental.name)]
    ];

    for (const [field, value] of requiredRentalFields) {
      if (!value) {
        contextualRentalReport(
          `expected ${field}; actual=${JSON.stringify(
            field.startsWith('containsPlace')
              ? containsPlace
              : vacationRental[field.split(' ')[0]]
          )}`
        );
      }
    }

    if (!geo || typeof geo !== 'object' || Array.isArray(geo)) {
      contextualRentalReport(
        `expected one GeoCoordinates object; actual=${JSON.stringify(geo)}`
      );
    } else {
      if (!hasType(geo, 'GeoCoordinates')) {
        contextualRentalReport(
          `expected geo @type=GeoCoordinates; actual=${JSON.stringify(geo['@type'])}`
        );
      }

      if (!isValidLatitude(geo.latitude) || !isValidLongitude(geo.longitude)) {
        contextualRentalReport(
          'expected valid geo latitude/longitude ranges; ' +
            `actual=${JSON.stringify({ latitude: geo.latitude, longitude: geo.longitude })}`
        );
      }
    }

    if (
      Object.hasOwn(containsPlace ?? {}, 'numberOfRooms') &&
      (!Number.isInteger(containsPlace.numberOfRooms) || containsPlace.numberOfRooms <= 0)
    ) {
      contextualRentalReport(
        'expected containsPlace.numberOfRooms to be a positive integer when emitted; ' +
          `actual=${JSON.stringify(containsPlace.numberOfRooms)}`
      );
    }

    const beds = Array.isArray(containsPlace?.bed) ? containsPlace.bed : [];
    if (beds.length === 0) {
      contextualRentalReport(
        `expected at least one BedDetails entry; actual count=${beds.length}`
      );
    }

    beds.forEach((bed, index) => {
      const validBed =
        bed &&
        typeof bed === 'object' &&
        !Array.isArray(bed) &&
        hasType(bed, 'BedDetails') &&
        Number.isInteger(bed.numberOfBeds) &&
        bed.numberOfBeds > 0 &&
        isNonEmptyString(bed.typeOfBed);

      if (!validBed) {
        contextualRentalReport(
          `expected structurally valid BedDetails at index=${index}; ` +
            `actual=${JSON.stringify(bed)}`
        );
      }
    });

    const address = vacationRental.address;
    const requiredAddressFields = [
      'streetAddress',
      'postalCode',
      'addressLocality',
      'addressRegion',
      'addressCountry'
    ];

    if (!address || typeof address !== 'object' || Array.isArray(address)) {
      contextualRentalReport(
        `expected one PostalAddress object; actual=${JSON.stringify(address)}`
      );
    } else {
      if (!hasType(address, 'PostalAddress')) {
        contextualRentalReport(
          `expected address @type=PostalAddress; actual=${JSON.stringify(address['@type'])}`
        );
      }

      for (const field of requiredAddressFields) {
        if (!isNonEmptyString(address[field])) {
          contextualRentalReport(
            `expected non-empty address.${field}; actual=${JSON.stringify(address[field])}`
          );
        }
      }
    }

    const brand = vacationRental.brand;
    if (!hasType(brand, 'Brand') || brand?.name !== 'AMARA') {
      contextualRentalReport(
        'expected VacationRental.brand to identify AMARA as Brand; ' +
          `actual=${JSON.stringify(brand)}`
      );
    }

    const publisherId = webPage.publisher?.['@id'];
    const publisherNode = graph.find((node) => node?.['@id'] === publisherId);

    if (!isNonEmptyString(publisherId)) {
      contextualRentalReport(
        `expected WebPage.publisher @id; actual=${JSON.stringify(webPage.publisher)}`
      );
    } else if (!publisherNode) {
      contextualRentalReport(
        `expected publisher node ${publisherId} to exist in @graph; actual=missing`
      );
    } else if (!hasType(publisherNode, 'LodgingBusiness') || publisherNode.name !== 'AMARA') {
      contextualRentalReport(
        `expected publisher node ${publisherId} to identify AMARA LodgingBusiness; ` +
          `actual=${JSON.stringify({ type: publisherNode['@type'], name: publisherNode.name })}`
      );
    }

    const amenityFeatures = containsPlace?.amenityFeature;
    if (!Array.isArray(amenityFeatures)) {
      contextualRentalReport(
        `expected containsPlace.amenityFeature array; actual=${JSON.stringify(amenityFeatures)}`
      );
    }

    for (const feature of Array.isArray(amenityFeatures) ? amenityFeatures : []) {
      const { name, value } = feature;
      const isSupportedBoolean =
        typeof value === 'boolean' && GOOGLE_VACATION_RENTAL_BOOLEAN_AMENITIES.has(name);
      const isSupportedEnum =
        typeof value === 'string' && GOOGLE_VACATION_RENTAL_ENUM_AMENITIES[name]?.has(value);
      const isLicense = name === 'licenseNum' && typeof value === 'string' && value.length > 0;

      if (!isSupportedBoolean && !isSupportedEnum && !isLicense) {
        contextualRentalReport(`unsupported Google amenity: ${name}=${value}`);
      }
    }

    if (webPage.mainEntity?.['@id'] !== vacationRental['@id']) {
      contextualRentalReport(
        `WebPage.mainEntity mismatch: WebPage ID=${webPage['@id']}, ` +
          `expected rental ID=${vacationRental['@id']}, ` +
          `actual reference=${webPage.mainEntity?.['@id'] || 'missing'}`
      );
    }

    if (vacationRental.mainEntityOfPage?.['@id'] !== webPage['@id']) {
      contextualRentalReport(
        `VacationRental.mainEntityOfPage mismatch: rental ID=${vacationRental['@id']}, ` +
          `expected WebPage ID=${webPage['@id']}, ` +
          `actual reference=${vacationRental.mainEntityOfPage?.['@id'] || 'missing'}`
      );
    }

    if (
      (vacationRental.sameAs ?? []).some((url) =>
        /\/users\/profile\//i.test(url)
      )
    ) {
      contextualRentalReport('VacationRental sameAs contains a generic host profile');
    }

    if (isNonEmptyString(vacationRental.identifier)) {
      const identity = rentalIdentityByIdentifier.get(vacationRental.identifier) ?? {
        id: vacationRental['@id'],
        name: vacationRental.name
      };

      if (
        identity.id !== vacationRental['@id'] ||
        identity.name !== vacationRental.name
      ) {
        contextualRentalReport(
          'stable identity mismatch for identifier=' +
            `${vacationRental.identifier}: expected ID=${identity.id}, ` +
            `actual ID=${vacationRental['@id']}, expected name=${identity.name}, ` +
            `actual name=${vacationRental.name}`
        );
      }

      rentalIdentityByIdentifier.set(vacationRental.identifier, identity);
    }

    if (expectedRentalRoute) {
      const routeIdentity = rentalIdentityBySlug.get(expectedRentalRoute.slug) ?? {
        id: vacationRental['@id'],
        identifier: vacationRental.identifier,
        languages: new Set(),
        name: vacationRental.name
      };

      const identityMismatches = [
        ['@id', routeIdentity.id, vacationRental['@id']],
        ['identifier', routeIdentity.identifier, vacationRental.identifier],
        ['name', routeIdentity.name, vacationRental.name]
      ].filter(([, expected, actual]) => expected !== actual);

      for (const [field, expected, actual] of identityMismatches) {
        contextualRentalReport(
          `identity changed across languages for ${field}: ` +
            `expected=${JSON.stringify(expected)}, actual=${JSON.stringify(actual)}`
        );
      }

      routeIdentity.languages.add(expectedRentalRoute.language);
      rentalIdentityBySlug.set(expectedRentalRoute.slug, routeIdentity);

      if (breadcrumbs.length === 1) {
        validatedExpectedRentalRoutes.add(expectedRentalRoute.pathname);
      }
    }
  }

  if (contentPages === 0) {
    errors.push('No content pages were found in dist.');
  }

  const missingRentalRoutes = [...EXPECTED_VACATION_RENTAL_ROUTES.keys()].filter(
    (pathname) => !expectedRentalRoutesSeen.has(pathname)
  );

  if (missingRentalRoutes.length > 0) {
    errors.push(
      `Expected localized Vacation Rental routes are missing from dist: ` +
        missingRentalRoutes.join(', ')
    );
  }

  const missingStaySelectorRoutes = [...EXPECTED_STAY_SELECTOR_ROUTES.keys()].filter(
    (pathname) => !expectedStaySelectorRoutesSeen.has(pathname)
  );

  if (missingStaySelectorRoutes.length > 0) {
    errors.push(
      'Expected localized Stay Selector routes are missing from dist: ' +
        missingStaySelectorRoutes.join(', ')
    );
  }

  if (
    validatedExpectedRentalRoutes.size !==
    EXPECTED_LOCALIZED_VACATION_RENTAL_PAGES
  ) {
    errors.push(
      `Validated ${validatedExpectedRentalRoutes.size} expected localized ` +
        `Vacation Rental routes; expected ${EXPECTED_LOCALIZED_VACATION_RENTAL_PAGES}.`
    );
  }

  if (vacationRentalPages !== EXPECTED_LOCALIZED_VACATION_RENTAL_PAGES) {
    errors.push(
      `Found ${vacationRentalPages} pages with exactly one VacationRental node; ` +
        `expected ${EXPECTED_LOCALIZED_VACATION_RENTAL_PAGES}.`
    );
  }

  if (rentalIdentityByIdentifier.size !== EXPECTED_VACATION_RENTAL_IDENTITIES) {
    errors.push(
      `Found ${rentalIdentityByIdentifier.size} stable Vacation Rental identifiers; ` +
        `expected ${EXPECTED_VACATION_RENTAL_IDENTITIES}.`
    );
  }

  if (rentalIdentityBySlug.size !== EXPECTED_VACATION_RENTAL_IDENTITIES) {
    errors.push(
      `Validated ${rentalIdentityBySlug.size} canonical Vacation Rental slugs; ` +
        `expected ${EXPECTED_VACATION_RENTAL_IDENTITIES}.`
    );
  }

  for (const slug of DYNAMIC_CANONICAL_PUBLIC_SLUGS) {
    const identity = rentalIdentityBySlug.get(slug);
    const actualLanguages = identity ? [...identity.languages].sort() : [];

    if (actualLanguages.length !== VACATION_RENTAL_LANGUAGES.length) {
      errors.push(
        `Vacation Rental ${identity?.name || slug} (${slug}) validated ` +
          `${actualLanguages.length} language variants ` +
          `[${actualLanguages.join(', ') || 'none'}]; expected ` +
          `${VACATION_RENTAL_LANGUAGES.length} ` +
          `[${[...VACATION_RENTAL_LANGUAGES].sort().join(', ')}].`
      );
    }
  }

  for (const record of staySelectorRecords) {
    let isValid = true;
    const selectorReport = (message) => {
      isValid = false;
      report(record.file, `Stay Selector ${record.route.pathname}: ${message}`);
    };
    const { canonicalUrl, graph, html, htmlLanguage, itemList, route, webPage } = record;
    const listItems = Array.isArray(itemList.itemListElement)
      ? itemList.itemListElement
      : [];

    if (!canonicalUrl) {
      selectorReport('missing canonical URL');
      continue;
    }

    const canonical = new URL(canonicalUrl);
    if (canonical.pathname !== route.pathname) {
      selectorReport(
        `canonical path mismatch: expected=${route.pathname}, actual=${canonical.pathname}`
      );
    }

    if (webPage.inLanguage !== route.language || htmlLanguage !== route.language) {
      selectorReport(
        `language mismatch: expected=${route.language}, ` +
          `WebPage=${webPage.inLanguage || 'missing'}, HTML=${htmlLanguage || 'missing'}`
      );
    }

    if (itemList['@id'] !== `${canonicalUrl}#itemlist`) {
      selectorReport(
        `ItemList @id mismatch: expected=${canonicalUrl}#itemlist, ` +
          `actual=${itemList['@id'] || 'missing'}`
      );
    }

    if (!isNonEmptyString(itemList.name)) {
      selectorReport('ItemList name must be non-empty');
    }

    if (Object.hasOwn(itemList, 'itemListOrder')) {
      selectorReport('ItemList must not emit itemListOrder without a semantic sort rule');
    }

    if (itemList.numberOfItems !== EXPECTED_VACATION_RENTAL_IDENTITIES) {
      selectorReport(
        `numberOfItems=${itemList.numberOfItems}; ` +
          `expected ${EXPECTED_VACATION_RENTAL_IDENTITIES}`
      );
    }

    if (listItems.length !== EXPECTED_VACATION_RENTAL_IDENTITIES) {
      selectorReport(
        `ListItem count=${listItems.length}; ` +
          `expected ${EXPECTED_VACATION_RENTAL_IDENTITIES}`
      );
    }

    const positions = listItems.map((listItem) => listItem?.position);
    if (
      new Set(positions).size !== EXPECTED_VACATION_RENTAL_IDENTITIES ||
      positions.some((position, index) => position !== index + 1)
    ) {
      selectorReport(
        `ListItem positions must be unique 1..${EXPECTED_VACATION_RENTAL_IDENTITIES}; ` +
          `actual=${JSON.stringify(positions)}`
      );
    }

    const schemaSlugs = [];
    const entityIds = [];
    const itemUrls = [];

    listItems.forEach((listItem, index) => {
      if (!hasType(listItem, 'ListItem')) {
        selectorReport(`item at position ${index + 1} is not a ListItem`);
      }

      const item = listItem?.item;
      if (!item || typeof item !== 'object' || Array.isArray(item)) {
        selectorReport(`ListItem ${index + 1} is missing its item object`);
        return;
      }

      const unexpectedItemFields = Object.keys(item).filter(
        (field) => !['@id', 'name', 'url'].includes(field)
      );
      if (unexpectedItemFields.length > 0) {
        selectorReport(
          `ListItem ${index + 1} duplicates property fields: ` +
            unexpectedItemFields.join(', ')
        );
      }

      entityIds.push(item['@id']);
      itemUrls.push(item.url);

      if (!isValidAbsoluteHttpUrl(item.url)) {
        selectorReport(`ListItem ${index + 1} has invalid URL=${JSON.stringify(item.url)}`);
        return;
      }

      const itemUrl = new URL(item.url);
      const slug = getOwnedSlug(itemUrl.pathname);
      const rentalIdentity = rentalIdentityBySlug.get(slug);
      schemaSlugs.push(slug);

      if (!rentalIdentity) {
        selectorReport(
          `ListItem ${index + 1} does not resolve to a canonical rental: ${item.url}`
        );
        return;
      }

      const expectedItemUrl = new URL(
        getLocalizedOwnedPath(slug, route.language),
        canonical.origin
      ).href;

      if (item.url !== expectedItemUrl) {
        selectorReport(
          `ListItem ${index + 1} URL mismatch: ` +
            `expected=${expectedItemUrl}, actual=${item.url}`
        );
      }

      if (item['@id'] !== rentalIdentity.id) {
        selectorReport(
          `ListItem ${index + 1} identity mismatch: ` +
            `expected=${rentalIdentity.id}, actual=${item['@id'] || 'missing'}`
        );
      }

      if (item.name !== rentalIdentity.name) {
        selectorReport(
          `ListItem ${index + 1} name mismatch: ` +
            `expected=${rentalIdentity.name}, actual=${item.name || 'missing'}`
        );
      }
    });

    if (new Set(entityIds).size !== EXPECTED_VACATION_RENTAL_IDENTITIES) {
      selectorReport('ItemList entity identities must be unique');
    }

    if (new Set(itemUrls).size !== EXPECTED_VACATION_RENTAL_IDENTITIES) {
      selectorReport('ItemList property URLs must be unique');
    }

    const visibleSlugs = getVisibleRentalSlugs(html, canonicalUrl);
    if (
      visibleSlugs.length !== EXPECTED_VACATION_RENTAL_IDENTITIES ||
      JSON.stringify(schemaSlugs) !== JSON.stringify(visibleSlugs)
    ) {
      selectorReport(
        'ItemList order does not match the visible collection order: ' +
          `schema=${JSON.stringify(schemaSlugs)}, visible=${JSON.stringify(visibleSlugs)}`
      );
    }

    if (webPage.mainEntity?.['@id'] !== itemList['@id']) {
      selectorReport(
        `WebPage.mainEntity must reference ${itemList['@id']}; ` +
          `actual=${webPage.mainEntity?.['@id'] || 'missing'}`
      );
    }

    const rentalNodeCount = graph.filter((node) => hasType(node, 'VacationRental')).length;
    if (rentalNodeCount !== 0) {
      selectorReport(
        `collection graph duplicates ${rentalNodeCount} full VacationRental node(s)`
      );
    }

    if (isValid) {
      validatedStaySelectorRoutes.add(route.pathname);
    }
  }

  if (
    validatedStaySelectorRoutes.size !==
    EXPECTED_LOCALIZED_STAY_SELECTOR_PAGES
  ) {
    errors.push(
      `Validated ${validatedStaySelectorRoutes.size} localized Stay Selector ` +
        `ItemLists; expected ${EXPECTED_LOCALIZED_STAY_SELECTOR_PAGES}.`
    );
  }

  if (errors.length > 0) {
    throw new Error(
      [
        'AMARA structured data audit failed.',
        ...errors.map((error) => `- ${error}`)
      ].join('\n')
    );
  }

  const summary = {
    contentPages,
    redirectPages,
    staySelectorItemLists: validatedStaySelectorRoutes.size,
    vacationRentalPages,
    vacationRentalEntities: rentalIdentityByIdentifier.size
  };

  console.log('AMARA structured data audit passed.');
  console.log(
    `${contentPages} content pages, ${redirectPages} redirects, ` +
      `${vacationRentalPages} localized VacationRental pages ` +
      `for ${rentalIdentityByIdentifier.size} properties, and ` +
      `${validatedStaySelectorRoutes.size} localized Stay Selector ItemLists checked.`
  );

  return summary;
}

const isDirectRun =
  process.argv[1] &&
  resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isDirectRun) {
  try {
    runStructuredDataAudit();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}
