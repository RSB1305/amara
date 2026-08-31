import { resolveLocale } from '../../src/types/content';
import { expect, test, type Page } from '@playwright/test';
import { dev } from 'astro';
import { fileURLToPath } from 'node:url';
import { gettingToNerjaContent } from '../../src/content/gettingToNerjaContent';
import { gettingToTarifaContent } from '../../src/content/gettingToTarifaContent';
import { frigilianaParkingGuideContent } from '../../src/content/frigilianaParkingGuideContent';
import { nerjaBalconContent } from '../../src/content/nerjaBalconContent';
import { nerjaCavesContent } from '../../src/content/nerjaCavesContent';
import { nerjaDailyLifeContent } from '../../src/content/nerjaDailyLifeContent';
import { nerjaGeographyContent } from '../../src/content/nerjaGeographyContent';
import { nerjaParkingContent } from '../../src/content/nerjaParkingContent';
import { tarifaDailyLifeContent } from '../../src/content/tarifaDailyLifeContent';
import { tarifaGeographyContent } from '../../src/content/tarifaGeographyContent';
import { tarifaParkingContent } from '../../src/content/tarifaParkingContent';
import { tarifaWinterStaysContent } from '../../src/content/tarifaWinterStaysContent';
import { experienceStayBridge } from '../../src/content/experienceStayBridgeContent';
import { resolveLink, type LinkToken } from '../../src/lib/linkResolver';
import type { AmaraLanguage } from '../../src/types/seo';

/**
 * Characterization tests for the shared authority article contract.
 *
 * Ten location-authority pages repeat the same delivered article shape: one
 * `article[data-am-page]` root, one H1, an editorial byline, a fact strip, text
 * sections, related links, external sources and a closing CTA pair. Four of them
 * additionally place a page-specific block at a fixed position in that sequence.
 *
 * The assertions read only markup the site already ships — element order, ids,
 * link targets, `target`/`rel` and the existing `data-am-*` attributes — so they
 * stay valid across a composition refactor of the page family while failing on
 * any semantic drift.
 */

const PORT = 4324;
const ORIGIN = `http://127.0.0.1:${PORT}`;

/** The structural sweep runs in Spanish, which owns the unprefixed routes. */
const SWEEP_LANGUAGE: AmaraLanguage = 'es';

/** The structural slice of a page locale that every authority article shares. */
interface AuthorityArticleLocale {
  hero: { title: string; standfirst: string; note: string; updated: string; mark?: string };
  facts: Array<{ label: string; value: string }>;
  comparison?: { places: Array<{ july: string }> };
  sections: Array<{
    id: string;
    eyebrow: string;
    title: string;
    paragraphs: string[];
    localContext?: { paragraphs: string[] };
    amaraContext?: { paragraphs: string[] };
    guestGuideNote?: string;
  }>;
  related?: {
    eyebrow: string;
    title: string;
    links: Array<{ token: LinkToken; label: string; text: string }>;
  };
  sources: { links: Array<{ label: string; text: string; href: string }> };
  closing: Record<string, string>;
}

/** A locale that also carries the orientation block of the geography pages. */
interface OrientedLocale extends AuthorityArticleLocale {
  orientation: { items: Array<{ label: string; value: string }> };
}

/** A closing call to action, in the order the page renders it. */
interface ClosingCta {
  token: LinkToken;
  /** Label held in the page's own closing copy. */
  labelKey?: string;
  /** Label held outside that copy, as the shared stay-bridge chrome is. */
  label?: string;
  className: string;
}

/** A block rendered inside the text-section loop, right after a given section. */
interface InterleavedBlock {
  afterSectionIndex: number;
  kind: string;
}

interface AuthorityPage {
  /** Registry token that owns this page's localized routes. */
  routeToken: LinkToken;
  /** The `data-am-page` value on the article root. */
  pageId: string;
  /** Resolves the entry copy for one language, whichever structure the module uses. */
  content: (lang: AmaraLanguage) => AuthorityArticleLocale;
  /** Oversized decorative hero mark, or null where the page renders none. */
  heroMark: ((locale: AuthorityArticleLocale) => string) | null;
  /** Responsive column class of the related-link grid; null where absent. */
  relatedColumns: string | null;
  /** Block rendered before the text sections. */
  blockBeforeSections: string | null;
  /** Block rendered between the text sections and the related links. */
  blockAfterSections: string | null;
  /** Arrival-family modules, in their delivered order. */
  arrivalModules: string[] | null;
  /** Whether the article currently carries the full editorial byline. */
  authorByline?: boolean;
  /** Delivered H1 when a page-family adapter intentionally replaces the source-module title. */
  heroTitle?: string;
  interleaved: InterleavedBlock[];
  /** Attribute each text section carries in addition to its id. */
  sectionMarkerAttribute: string | null;
  /** Whether the supporting chapters render inside one shared card grid. */
  groupSupportingSections?: boolean;
  closingCtas: [ClosingCta, ClosingCta];
}

const RESTRAINED_PRIMARY_CLASS = 'am-cta-link';
const RESTRAINED_SECONDARY_CLASS = 'am-cta-link';
const DECISION_PRIMARY_CLASS = 'am-btn am-btn--primary';
const DECISION_SECONDARY_CLASS = 'am-cta-link';

const AUTHORITY_PAGES: AuthorityPage[] = [
  {
    routeToken: 'getting_to_nerja',
    pageId: 'getting-to-nerja',
    content: (lang) => ({ ...resolveLocale(gettingToNerjaContent, lang), related: undefined }),
    heroMark: null,
    relatedColumns: null,
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: ['options', 'parking', 'final-mile'],
    authorByline: false,
    heroTitle: 'Cómo llegar a Nerja y a AMARA Playa',
    interleaved: [],
    sectionMarkerAttribute: null,
    closingCtas: [
      { token: 'location_nerja', labelKey: 'locationLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'nerja_where_to_stay', labelKey: 'areasLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'getting_to_tarifa',
    pageId: 'getting-to-tarifa',
    content: (lang) => resolveLocale(gettingToTarifaContent, lang),
    heroMark: null,
    relatedColumns: 'md:grid-cols-2',
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: ['gateways', 'options', 'journey-steps', 'mobility', 'parking', 'final-mile'],
    interleaved: [],
    sectionMarkerAttribute: null,
    closingCtas: [
      { token: 'location_tarifa', labelKey: 'locationLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'tarifa_where_to_stay', labelKey: 'areasLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'frigiliana_parking',
    pageId: 'frigiliana-parking',
    content: (lang) => frigilianaParkingGuideContent[lang],
    heroMark: null,
    relatedColumns: 'md:grid-cols-3',
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: 'data-am-parking-section',
    closingCtas: [
      { token: 'romantic_hideaways', labelKey: 'propertyLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'location_frigiliana', labelKey: 'locationLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'nerja_parking',
    pageId: 'nerja-parking',
    content: (lang) => nerjaParkingContent[lang],
    heroMark: null,
    relatedColumns: 'md:grid-cols-3',
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: 'data-am-parking-section',
    closingCtas: [
      { token: 'playa', labelKey: 'propertyLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'location_nerja', labelKey: 'locationLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'tarifa_parking',
    pageId: 'tarifa-parking',
    content: (lang) => tarifaParkingContent[lang],
    heroMark: null,
    relatedColumns: 'md:grid-cols-3',
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: 'data-am-parking-section',
    closingCtas: [
      { token: 'tarifa', labelKey: 'propertyLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'location_tarifa', labelKey: 'locationLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'nerja_balcon_de_europa',
    pageId: 'nerja-balcon-de-europa',
    content: (lang) => resolveLocale(nerjaBalconContent, lang),
    heroMark: null,
    relatedColumns: 'md:grid-cols-2',
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: null,
    closingCtas: [
      { token: 'playa', labelKey: 'propertyLabel', className: DECISION_PRIMARY_CLASS },
      {
        token: 'book',
        label: experienceStayBridge.availabilityLabel[SWEEP_LANGUAGE],
        className: DECISION_SECONDARY_CLASS
      }
    ]
  },
  {
    routeToken: 'nerja_caves',
    pageId: 'nerja-caves',
    content: (lang) => resolveLocale(nerjaCavesContent, lang),
    heroMark: null,
    relatedColumns: 'md:grid-cols-3',
    blockBeforeSections: null,
    blockAfterSections: 'section:our-visit',
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: null,
    closingCtas: [
      { token: 'playa', labelKey: 'propertyLabel', className: DECISION_PRIMARY_CLASS },
      {
        token: 'book',
        label: experienceStayBridge.availabilityLabel[SWEEP_LANGUAGE],
        className: DECISION_SECONDARY_CLASS
      }
    ]
  },
  {
    routeToken: 'nerja_daily_life',
    pageId: 'nerja-daily-life',
    content: (lang) => nerjaDailyLifeContent[lang],
    heroMark: () => 'Nerja',
    relatedColumns: 'md:grid-cols-3',
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: 'data-am-daily-life-section',
    closingCtas: [
      { token: 'book', labelKey: 'availabilityLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'location_nerja', labelKey: 'locationLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'nerja_geography',
    pageId: 'nerja-geography',
    content: (lang) => resolveLocale(nerjaGeographyContent, lang),
    heroMark: null,
    relatedColumns: 'md:grid-cols-2',
    blockBeforeSections: 'orientation:nerja',
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: null,
    groupSupportingSections: true,
    closingCtas: [
      { token: 'playa', labelKey: 'propertyLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'location_nerja', labelKey: 'locationLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'tarifa_daily_life',
    pageId: 'tarifa-daily-life',
    content: (lang) => tarifaDailyLifeContent[lang],
    heroMark: () => 'Tarifa',
    relatedColumns: 'md:grid-cols-3',
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: 'data-am-daily-life-section',
    closingCtas: [
      { token: 'book', labelKey: 'availabilityLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'location_tarifa', labelKey: 'locationLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'tarifa_geography',
    pageId: 'tarifa-geography',
    content: (lang) => resolveLocale(tarifaGeographyContent, lang),
    heroMark: null,
    relatedColumns: 'md:grid-cols-2',
    blockBeforeSections: 'orientation:tarifa',
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: null,
    groupSupportingSections: true,
    closingCtas: [
      { token: 'location_tarifa', labelKey: 'locationLabel', className: RESTRAINED_PRIMARY_CLASS },
      { token: 'tarifa_experience_hub', labelKey: 'experienceLabel', className: RESTRAINED_SECONDARY_CLASS }
    ]
  },
  {
    routeToken: 'tarifa_winter_stays',
    pageId: 'tarifa-winter-stays',
    content: (lang) => resolveLocale(tarifaWinterStaysContent, lang),
    heroMark: null,
    relatedColumns: 'md:grid-cols-2',
    blockBeforeSections: null,
    blockAfterSections: null,
    arrivalModules: null,
    interleaved: [],
    sectionMarkerAttribute: 'data-am-winter-stays-section',
    closingCtas: [
      { token: 'tarifa', labelKey: 'propertyLabel', className: DECISION_PRIMARY_CLASS },
      { token: 'location_tarifa', labelKey: 'locationLabel', className: DECISION_SECONDARY_CLASS }
    ]
  }
];

function authorityPage(pageId: string): AuthorityPage {
  const entry = AUTHORITY_PAGES.find((candidate) => candidate.pageId === pageId);
  if (!entry) {
    throw new Error(`No authority page descriptor for "${pageId}".`);
  }
  return entry;
}

let astroServer: Awaited<ReturnType<typeof dev>> | undefined;

test.beforeAll(async () => {
  astroServer = await dev({
    root: fileURLToPath(new URL('../../', import.meta.url)),
    server: {
      host: '127.0.0.1',
      port: PORT
    },
    logLevel: 'silent'
  });
});

test.afterAll(async () => {
  await astroServer?.stop();
});

/** Article markup ships in the initial response; images and fonts need not settle first. */
const openPage = (page: Page, path: string) =>
  page.goto(`${ORIGIN}${path}`, { waitUntil: 'domcontentloaded' });

/** Tailwind variant classes contain a colon, so match them as whole class tokens. */
const byClassToken = (token: string) => `[class~="${token}"]`;

interface BlockFingerprint {
  kind: string;
  marker: string | null;
}

/**
 * Reduce the article's direct children to an ordered, semantic fingerprint.
 * Every branch keys off markup the pages already ship, so the sequence — and
 * with it the DOM position of each page-specific block — is asserted without
 * introducing test-only hooks.
 */
const articleBlocks = (page: Page, pageId: string): Promise<BlockFingerprint[]> =>
  page.$$eval(`article[data-am-page="${pageId}"] > *`, (nodes) =>
    nodes.map((node) => {
      const orientation = node.getAttribute('data-am-orientation');
      const arrivalModule = node.getAttribute('data-am-arrival-module');
      const marker =
        node.getAttribute('data-am-daily-life-section') ??
        node.getAttribute('data-am-winter-stays-section') ??
        node.getAttribute('data-am-parking-section');

      if (node.tagName === 'HEADER') return { kind: 'header', marker: null };
      if (orientation) return { kind: `orientation:${orientation}`, marker: null };
      if (arrivalModule) return { kind: `arrival:${arrivalModule}`, marker: null };
      if (node.hasAttribute('data-am-climate-table')) return { kind: 'climate-table', marker: null };
      const groupedSectionIds = Array.from(
        node.querySelectorAll<HTMLElement>('[data-am-authority-layout="card"][id]')
      ).map((section) => section.id);
      if (groupedSectionIds.length > 0) {
        return { kind: `section-group:${groupedSectionIds.join(',')}`, marker: null };
      }
      if (node.id) return { kind: `section:${node.id}`, marker };
      if (node.querySelector('dl')) return { kind: 'facts', marker: null };
      if (node.querySelector('figure')) return { kind: 'stay-bridge', marker: null };
      if (node.querySelector('.tabular-nums')) return { kind: 'comparison', marker: null };
      if (node.querySelector('a[target="_blank"]')) return { kind: 'sources', marker: null };
      if (node.hasAttribute('data-am-page-end-role') || node.querySelector('a.am-btn--primary')) {
        return { kind: 'closing', marker: null };
      }
      if (node.querySelector('a[href]')) return { kind: 'related', marker: null };
      return { kind: 'unclassified', marker: null };
    })
  );

/** The block sequence a page is expected to deliver, built from its own content. */
function expectedBlocks(entry: AuthorityPage, locale: AuthorityArticleLocale): BlockFingerprint[] {
  const blocks: BlockFingerprint[] = [
    { kind: 'header', marker: null },
    { kind: 'facts', marker: null }
  ];

  if (entry.blockBeforeSections) {
    blocks.push({ kind: entry.blockBeforeSections, marker: null });
  }

  if (entry.arrivalModules) {
    blocks.push(...entry.arrivalModules.map((module) => ({
      kind: `arrival:${module}`,
      marker: null
    })));
  } else if (entry.groupSupportingSections) {
    const [leadSection, ...remainingSections] = locale.sections;
    const practicalSection = remainingSections.pop();
    const supportingSections = remainingSections;

    blocks.push({ kind: `section:${leadSection.id}`, marker: null });
    blocks.push({
      kind: `section-group:${supportingSections.map((section) => section.id).join(',')}`,
      marker: null
    });
    if (practicalSection) {
      blocks.push({ kind: `section:${practicalSection.id}`, marker: null });
    }
  } else {
    locale.sections.forEach((section, index) => {
      blocks.push({
        kind: `section:${section.id}`,
        marker: entry.sectionMarkerAttribute ? section.id : null
      });

      for (const block of entry.interleaved) {
        if (block.afterSectionIndex === index) {
          blocks.push({ kind: block.kind, marker: null });
        }
      }
    });
  }

  if (entry.blockAfterSections) {
    blocks.push({ kind: entry.blockAfterSections, marker: null });
  }

  if (entry.relatedColumns) {
    blocks.push({ kind: 'related', marker: null });
  }

  blocks.push({ kind: 'sources', marker: null }, { kind: 'closing', marker: null });

  return blocks;
}

for (const entry of AUTHORITY_PAGES) {
  test(`${entry.pageId} keeps its delivered authority article contract`, async ({ page }) => {
    const locale = entry.content(SWEEP_LANGUAGE);
    await openPage(page, resolveLink(entry.routeToken, SWEEP_LANGUAGE));

    const article = page.locator(`article[data-am-page="${entry.pageId}"]`);
    await expect(article).toHaveCount(1);

    // Exactly one H1 in the document, and it belongs to the article. Queried
    // through the light DOM so the dev toolbar's own shadow markup is excluded.
    const documentHeadings = await page.evaluate(() => document.querySelectorAll('h1').length);
    expect(documentHeadings).toBe(1);
    await expect(article.locator('h1')).toHaveText(entry.heroTitle ?? locale.hero.title);

    // Element order, including where each page-specific block sits.
    expect(await articleBlocks(page, entry.pageId)).toEqual(expectedBlocks(entry, locale));

    // Editorial byline: one per article, crediting the author page.
    const byline = article.locator('[data-am-component="editorial-byline"]');
    if (entry.authorByline === false) {
      await expect(byline).toHaveCount(0);
    } else {
      await expect(byline).toHaveCount(1);
      await expect(byline.locator('a[rel="author"]')).toHaveAttribute(
        'href',
        resolveLink('about', SWEEP_LANGUAGE)
      );
      await expect(byline.locator('[data-am-byline-updated]')).toHaveText(locale.hero.updated);
      await expect(byline.locator('[data-am-byline-note]')).toHaveText(locale.hero.note);
    }

    // Decorative hero mark.
    const heroMark = article.locator('header [data-am-hero-mark]');
    if (entry.heroMark) {
      await expect(heroMark).toHaveCount(1);
      await expect(heroMark).toHaveText(entry.heroMark(locale));
    } else {
      await expect(heroMark).toHaveCount(0);
    }

    // Fact strip.
    const facts = article.locator(':scope > section').first().locator('dl');
    await expect(facts).toHaveCount(1);
    await expect(facts.locator('dt')).toHaveText(locale.facts.map((fact) => fact.label));
    await expect(facts.locator('dd')).toHaveText(locale.facts.map((fact) => fact.value));

    // Text sections keep their ids, headings and paragraph counts.
    if (!entry.arrivalModules) {
      for (const section of locale.sections) {
        const sectionRoot = article.locator(`[id="${section.id}"]`);
        await expect(sectionRoot).toHaveCount(1);
        await expect(sectionRoot.locator('h2')).toHaveText(section.title);
        const usesContextColumns = section.localContext && section.amaraContext;
        const expectedParagraphCount = usesContextColumns
          ? section.paragraphs.length + 3 + (section.guestGuideNote ? 1 : 0)
          : section.paragraphs.length + 1;
        await expect(sectionRoot.locator('p')).toHaveCount(expectedParagraphCount);
      }
    }

    // Internal related links resolve through the registry.
    if (locale.related) {
      const firstRelatedHref = resolveLink(locale.related.links[0].token, SWEEP_LANGUAGE);
      const relatedSection = article.locator(
        `:scope > section:has(a[href="${firstRelatedHref}"])`
      );
      const relatedGrid = relatedSection.locator(
        `div${byClassToken(entry.relatedColumns as string)}`
      );
      await expect(relatedGrid).toHaveCount(1);

      const relatedLinks = relatedGrid.locator('a');
      await expect(relatedLinks).toHaveCount(locale.related.links.length);

      for (const [index, link] of locale.related.links.entries()) {
        await expect(relatedLinks.nth(index)).toHaveAttribute(
          'href',
          resolveLink(link.token, SWEEP_LANGUAGE)
        );
        await expect(relatedLinks.nth(index).locator('span').first()).toHaveText(link.label);
      }
    } else if (entry.relatedColumns) {
      const relatedSection = article.locator('[data-am-component="editorial-guide-link-section"]');
      await expect(relatedSection).toHaveCount(1);
      await expect(relatedSection.locator(`div${byClassToken(entry.relatedColumns)}`)).toHaveCount(1);
      await expect(relatedSection.locator('a')).toHaveCount(2);
    } else {
      expect(entry.relatedColumns).toBeNull();
    }

    // External sources open in a new tab with a safe rel.
    const sourceSection = article.locator(
      `:scope > section:not([data-am-climate-table]):has(a[href="${locale.sources.links[0].href}"])`
    );
    const sourceLinks = sourceSection.locator('a[target="_blank"]');
    await expect(sourceLinks).toHaveCount(locale.sources.links.length);

    for (const [index, source] of locale.sources.links.entries()) {
      const sourceLink = sourceLinks.nth(index);
      await expect(sourceLink).toHaveAttribute('href', source.href);
      await expect(sourceLink).toHaveAttribute('rel', 'noopener noreferrer');

      // The label and its supporting line sit in a wrapper span, next to the arrow.
      const sourceCopy = sourceLink.locator('span > span');
      await expect(sourceCopy.nth(0)).toHaveText(source.label);
      await expect(sourceCopy.nth(1)).toHaveText(source.text);
    }

    // Closing actions: order, intent-specific styling contract and destinations.
    const closingCtas = article.locator(':scope > section').last().locator('a[href]');
    await expect(closingCtas).toHaveCount(entry.closingCtas.length);

    for (const [index, cta] of entry.closingCtas.entries()) {
      const ctaLink = closingCtas.nth(index);
      await expect(ctaLink).toHaveClass(cta.className);
      await expect(ctaLink).toHaveAttribute('href', resolveLink(cta.token, SWEEP_LANGUAGE));
      await expect(ctaLink).toHaveText(cta.label ?? (locale.closing[cta.labelKey!] as string));
    }
  });
}

test('the destination arrival pages use their declared module order', async ({ page }) => {
  const sharedModules = ['gateways', 'options', 'journey-steps', 'mobility', 'parking', 'final-mile'];
  const pages: Array<{ routeToken: LinkToken; pageId: string; modules: string[] }> = [
    {
      routeToken: 'getting_to_frigiliana',
      pageId: 'getting-to-frigiliana',
      modules: sharedModules
    },
    {
      routeToken: 'getting_to_nerja',
      pageId: 'getting-to-nerja',
      modules: ['options', 'parking', 'final-mile']
    },
    {
      routeToken: 'getting_to_tarifa',
      pageId: 'getting-to-tarifa',
      modules: sharedModules
    }
  ];

  for (const entry of pages) {
    await openPage(page, resolveLink(entry.routeToken, SWEEP_LANGUAGE));
    const modules = (await articleBlocks(page, entry.pageId))
      .filter((block) => block.kind.startsWith('arrival:'))
      .map((block) => block.kind.replace('arrival:', ''));

    expect(modules, entry.pageId).toEqual(entry.modules);
  }
});

test('outer section dividers only separate equal surfaces and span their boundary', async ({ page }) => {
  await openPage(page, resolveLink('getting_to_frigiliana', SWEEP_LANGUAGE));

  const arrivalBoundaries = await page.$$eval(
    'article[data-am-page="getting-to-frigiliana"] > *',
    (nodes) =>
      nodes.slice(0, -1).map((node, index) => {
        const next = nodes[index + 1];
        const currentStyle = getComputedStyle(node);
        const nextStyle = getComputedStyle(next);

        return {
          changesSurface: currentStyle.backgroundColor !== nextStyle.backgroundColor,
          currentBorder: currentStyle.borderBottomWidth,
          nextBorder: nextStyle.borderTopWidth,
          currentDivider: getComputedStyle(node, '::after').content,
          nextDivider: getComputedStyle(next, '::before').content
        };
      })
  );

  const surfaceChanges = arrivalBoundaries.filter((boundary) => boundary.changesSurface);
  expect(surfaceChanges.length).toBeGreaterThan(0);
  for (const boundary of surfaceChanges) {
    expect(boundary).toEqual({
      changesSurface: true,
      currentBorder: '0px',
      nextBorder: '0px',
      currentDivider: 'none',
      nextDivider: 'none'
    });
  }

  const internalRuleWidths = await page.$$eval(
    'article[data-am-page="getting-to-frigiliana"] dl > div.border-t',
    (nodes) => nodes.map((node) => getComputedStyle(node).borderTopWidth)
  );
  expect(internalRuleWidths.some((width) => width !== '0px')).toBe(true);

  await openPage(page, resolveLink('weather_frigiliana', SWEEP_LANGUAGE));
  const sameSurfaceDivider = await page.$eval(
    'article[data-am-page="frigiliana-weather"] > [data-am-guide-hero]',
    (hero) => {
      const divider = getComputedStyle(hero, '::after');
      return {
        content: divider.content,
        left: Number.parseFloat(divider.left),
        right: Number.parseFloat(divider.right)
      };
    }
  );

  expect(sameSurfaceDivider.content).toBe('""');
  expect(sameSurfaceDivider.left).toBe(0);
  expect(sameSurfaceDivider.right).toBe(0);
});

test('the Frigiliana hero uses an editorial quote and personal host signature', async ({ page }) => {
  await openPage(page, resolveLink('location_frigiliana', SWEEP_LANGUAGE));
  const editorialByline = page.locator('[data-am-component="editorial-byline"]');
  await expect(editorialByline).toHaveCSS('border-top-width', '0px');
  await expect(editorialByline).toHaveCSS('padding-top', '0px');
  await expect(editorialByline.locator('img')).toHaveCount(1);
  await expect(page.locator('[data-am-guide-hero] blockquote[data-am-hero-accent]')).toHaveCount(1);
});

test('nerja-caves places the personal visit block before the related links', async ({ page }) => {
  const entry = authorityPage('nerja-caves');
  const locale = entry.content(SWEEP_LANGUAGE);
  await openPage(page, resolveLink(entry.routeToken, SWEEP_LANGUAGE));

  const blocks = await articleBlocks(page, 'nerja-caves');
  const visitIndex = blocks.findIndex((block) => block.kind === 'section:our-visit');
  const relatedIndex = blocks.findIndex((block) => block.kind === 'related');
  const lastSectionId = locale.sections[locale.sections.length - 1].id;
  const lastSectionIndex = blocks.findIndex((block) => block.kind === `section:${lastSectionId}`);

  expect(visitIndex).toBe(lastSectionIndex + 1);
  expect(relatedIndex).toBe(visitIndex + 1);
  await expect(page.locator('#our-visit img')).toHaveCount(1);
});

test('the geography pages place the orientation block before the text sections', async ({
  page
}) => {
  for (const [pageId, destination] of [
    ['nerja-geography', 'nerja'],
    ['tarifa-geography', 'tarifa']
  ]) {
    const entry = authorityPage(pageId);
    const locale = entry.content(SWEEP_LANGUAGE) as OrientedLocale;
    await openPage(page, resolveLink(entry.routeToken, SWEEP_LANGUAGE));

    const blocks = await articleBlocks(page, pageId);
    const orientationIndex = blocks.findIndex(
      (block) => block.kind === `orientation:${destination}`
    );
    const firstSectionIndex = blocks.findIndex(
      (block) => block.kind === `section:${locale.sections[0].id}`
    );

    expect(orientationIndex, pageId).toBeGreaterThan(-1);
    expect(orientationIndex, pageId).toBeLessThan(firstSectionIndex);

    const orientation = page.locator(`[data-am-orientation="${destination}"]`);
    await expect(orientation.locator('[data-am-orientation-point]')).toHaveCount(
      locale.orientation.items.length
    );
    await expect(orientation.locator('h2')).toHaveAttribute('id', `${destination}-orientation-title`);
  }
});
