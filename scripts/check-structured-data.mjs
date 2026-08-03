import {
  existsSync,
  readFileSync,
  readdirSync,
  statSync
} from 'node:fs';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

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

const NON_DEFAULT_LANGUAGES = new Set(['de', 'en', 'nl', 'sv']);

function getOwnedSlug(pathname) {
  const segments = pathname.split('/').filter(Boolean);

  if (NON_DEFAULT_LANGUAGES.has(segments[0])) {
    segments.shift();
  }

  return segments.join('/');
}

function getExperienceHubPath(pathname) {
  const language = pathname.split('/').filter(Boolean)[0];

  return NON_DEFAULT_LANGUAGES.has(language)
    ? `/${language}/explore-frigiliana-nerja`
    : '/explore-frigiliana-nerja';
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
  let contentPages = 0;
  let redirectPages = 0;
  let vacationRentalPages = 0;

  const report = (file, message) => {
    errors.push(`${relative(distRoot, file).replaceAll('\\', '/')}: ${message}`);
  };

  for (const file of walkHtmlFiles(distRoot)) {
    const relativePath = relative(distRoot, file).replaceAll('\\', '/');

    if (relativePath === '404.html' || relativePath.startsWith('tools/')) {
      continue;
    }

    const html = readFileSync(file, 'utf8');

    if (/http-equiv=["']refresh["']/i.test(html)) {
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
      report(file, `expected exactly one JSON-LD script, found ${jsonLdScripts.length}`);
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

    const graph = Array.isArray(document['@graph']) ? document['@graph'] : [];
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

    if (!canonicalUrl || webPage.url !== canonicalUrl) {
      report(file, 'WebPage URL does not match the canonical URL');
    }

    if (!webPage.name || !webPage.description) {
      report(file, 'WebPage name and description must be non-empty');
    }

    if (webPage.inLanguage !== htmlLanguage) {
      report(file, 'WebPage language does not match the HTML lang attribute');
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

    const breadcrumb = graph.find((node) => node?.['@type'] === 'BreadcrumbList');
    const pagePath = new URL(webPage.url).pathname;
    const ownedSlug = getOwnedSlug(pagePath);

    if (!isHomePath(pagePath) && !breadcrumb) {
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

      if (EXPERIENCE_DETAIL_SLUGS.has(ownedSlug)) {
        const expectedHubUrl = new URL(
          getExperienceHubPath(pagePath),
          pageOrigin
        ).href;

        if (items.length !== 3 || items[1]?.item !== expectedHubUrl) {
          report(
            file,
            'experience detail breadcrumb must be Home > Experiences > current page'
          );
        }
      }
    }

    if (EXPERIENCE_DETAIL_SLUGS.has(ownedSlug)) {
      if (!html.includes('data-am-experience-context')) {
        report(file, 'experience detail is missing its crawlable family navigation');
      }

      if (!html.includes('data-am-experience-prefooter')) {
        report(file, 'experience detail is missing its related-guides pre-footer');
      }

      const siblingLinkCount = [
        ...html.matchAll(/\bdata-am-experience-sibling\b/g)
      ].length;
      const recommendationCount = [
        ...html.matchAll(/\bdata-am-experience-recommendation\b/g)
      ].length;

      const expectedSiblingLinkCount = EXPERIENCE_DETAIL_SLUGS.size - 1;

      if (siblingLinkCount !== expectedSiblingLinkCount) {
        report(
          file,
          `experience family navigation contains ${siblingLinkCount} of ${expectedSiblingLinkCount} available guides`
        );
      }

      if (recommendationCount !== 3) {
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
      const assetPath = localAssetPath(imageUrl, pageOrigin, distRoot);

      if (assetPath && (!existsSync(assetPath) || !statSync(assetPath).isFile())) {
        report(file, `referenced schema image is missing: ${imageUrl}`);
      }
    }

    const vacationRental = graph.find(
      (node) => node?.['@type'] === 'VacationRental'
    );

    if (!vacationRental) {
      continue;
    }

    vacationRentalPages += 1;

    const rentalImages = Array.isArray(vacationRental.image)
      ? vacationRental.image
      : [];
    const occupancy = vacationRental.containsPlace?.occupancy?.value;
    const requiredRentalFields = [
      ['containsPlace', vacationRental.containsPlace],
      ['containsPlace.occupancy.value', Number.isInteger(occupancy) && occupancy > 0],
      ['identifier', vacationRental.identifier],
      ['image (minimum 8)', rentalImages.length >= 8],
      [
        'latitude',
        Number.isFinite(vacationRental.latitude ?? vacationRental.geo?.latitude)
      ],
      [
        'longitude',
        Number.isFinite(vacationRental.longitude ?? vacationRental.geo?.longitude)
      ],
      ['name', vacationRental.name]
    ];

    for (const [field, value] of requiredRentalFields) {
      if (!value) {
        report(file, `VacationRental is missing required field: ${field}`);
      }
    }

    for (const feature of vacationRental.containsPlace?.amenityFeature ?? []) {
      const { name, value } = feature;
      const isSupportedBoolean =
        typeof value === 'boolean' && GOOGLE_VACATION_RENTAL_BOOLEAN_AMENITIES.has(name);
      const isSupportedEnum =
        typeof value === 'string' && GOOGLE_VACATION_RENTAL_ENUM_AMENITIES[name]?.has(value);
      const isLicense = name === 'licenseNum' && typeof value === 'string' && value.length > 0;

      if (!isSupportedBoolean && !isSupportedEnum && !isLicense) {
        report(file, `VacationRental has unsupported Google amenity: ${name}=${value}`);
      }
    }

    if (webPage.mainEntity?.['@id'] !== vacationRental['@id']) {
      report(file, 'WebPage and VacationRental main-entity references differ');
    }

    if (vacationRental.mainEntityOfPage?.['@id'] !== webPage['@id']) {
      report(file, 'VacationRental mainEntityOfPage does not reference WebPage');
    }

    if (
      (vacationRental.sameAs ?? []).some((url) =>
        /\/users\/profile\//i.test(url)
      )
    ) {
      report(file, 'VacationRental sameAs contains a generic host profile');
    }

    const identity = rentalIdentityByIdentifier.get(vacationRental.identifier) ?? {
      id: vacationRental['@id'],
      name: vacationRental.name
    };

    if (
      identity.id !== vacationRental['@id'] ||
      identity.name !== vacationRental.name
    ) {
      report(file, 'VacationRental identity changes between language variants');
    }

    rentalIdentityByIdentifier.set(vacationRental.identifier, identity);
  }

  if (contentPages === 0) {
    errors.push('No content pages were found in dist.');
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
    vacationRentalPages,
    vacationRentalEntities: rentalIdentityByIdentifier.size
  };

  console.log('AMARA structured data audit passed.');
  console.log(
    `${contentPages} content pages, ${redirectPages} redirects, ` +
      `${vacationRentalPages} localized VacationRental pages ` +
      `for ${rentalIdentityByIdentifier.size} properties checked.`
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
