import { expect, test } from '@playwright/test';
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { auditPublishedImageDelivery } from '../../scripts/check-image-policy.mjs';
import {
  auditStableReferenceCoverage,
  emitStablePublicImages,
  resolveStablePublicImageRequest
} from '../../src/integrations/stablePublicImages';

/**
 * Contract tests for emitting the stable image URLs.
 *
 * They run against fixture directories rather than the repository, so they assert
 * the mechanism itself and stay independent of a build having been run.
 */

const SITE_ORIGIN = 'https://amara-lodging.es';
const LISTED = '/images/amara-lounis/15-amara-frigiliana.jpg';
const UNLISTED = '/images/wellness/frigiliana-wellness-1.jpeg';
const BYTES = 'optimized-source-bytes';

const workspaces: string[] = [];

interface Workspace {
  outDir: string;
  sourceRoot: string;
  writeSource: (publicPath: string, bytes: string) => void;
  writeDelivered: (publicPath: string, bytes: string) => void;
  deliveredFile: (publicPath: string) => string;
}

function createWorkspace(): Workspace {
  const root = mkdtempSync(join(tmpdir(), 'amara-stable-images-'));
  workspaces.push(root);

  const outDir = join(root, 'dist');
  const sourceRoot = join(root, 'src', 'assets', 'images', 'content');
  mkdirSync(outDir, { recursive: true });
  mkdirSync(sourceRoot, { recursive: true });

  const fileIn = (base: string, publicPath: string) =>
    join(base, ...publicPath.slice('/images/'.length).split('/'));

  const write = (base: string, publicPath: string, bytes: string) => {
    const target = fileIn(base, publicPath);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, bytes);
  };

  return {
    outDir,
    sourceRoot,
    writeSource: (publicPath, bytes) => write(sourceRoot, publicPath, bytes),
    writeDelivered: (publicPath, bytes) => write(join(outDir, 'images'), publicPath, bytes),
    deliveredFile: (publicPath) => fileIn(join(outDir, 'images'), publicPath)
  };
}

const documentReferencing = (publicPath: string) => ({
  displayPath: 'page.html',
  html: [
    `<link rel="canonical" href="${SITE_ORIGIN}/page">`,
    `<meta property="og:image" content="${SITE_ORIGIN}${publicPath}">`,
    `<script type="application/json" data-amara="seo">{"ogImage":"${publicPath}"}</script>`
  ].join('')
});

test.afterEach(() => {
  for (const root of workspaces.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

test('a listed path is emitted even when no page references it', () => {
  const workspace = createWorkspace();
  workspace.writeSource(LISTED, BYTES);

  // Nothing in this build links to the image; the contract emits it anyway,
  // which is what keeps an already-shared URL alive.
  const audit = auditStableReferenceCoverage(
    [{ displayPath: 'page.html', html: `<link rel="canonical" href="${SITE_ORIGIN}/page">` }],
    [LISTED]
  );
  expect(audit.errors).toEqual([]);
  expect(audit.referencedPaths).toEqual([]);

  const { emitted } = emitStablePublicImages({
    manifestPaths: [LISTED],
    sourceRoot: workspace.sourceRoot,
    outDir: workspace.outDir
  });

  expect(emitted).toEqual([LISTED]);
  expect(readFileSync(workspace.deliveredFile(LISTED), 'utf8')).toBe(BYTES);
});

test('emission aborts when a listed path has no source file', () => {
  const workspace = createWorkspace();

  expect(() =>
    emitStablePublicImages({
      manifestPaths: [LISTED],
      sourceRoot: workspace.sourceRoot,
      outDir: workspace.outDir
    })
  ).toThrow(/its source is missing at/);
});

test('emission never removes output it does not own', () => {
  const workspace = createWorkspace();
  workspace.writeSource(LISTED, BYTES);
  // Stands in for the parked, unreferenced media that public/ still delivers.
  workspace.writeDelivered('/images/tarifa/parked-media.jpeg', 'parked');

  emitStablePublicImages({
    manifestPaths: [LISTED],
    sourceRoot: workspace.sourceRoot,
    outDir: workspace.outDir
  });

  expect(existsSync(workspace.deliveredFile('/images/tarifa/parked-media.jpeg'))).toBe(true);
});

test('emission refuses a path that escapes the image root', () => {
  const workspace = createWorkspace();

  expect(() =>
    emitStablePublicImages({
      manifestPaths: ['/images/../../secret.jpg'],
      sourceRoot: workspace.sourceRoot,
      outDir: workspace.outDir
    })
  ).toThrow(/escapes its image root/);
});

test('a referenced stable path that is not listed fails the audit', () => {
  const audit = auditStableReferenceCoverage([documentReferencing(UNLISTED)], [LISTED]);

  expect(audit.referencedPaths).toEqual([UNLISTED]);
  expect(audit.errors).toHaveLength(1);
  expect(audit.errors[0]).toContain('is not part of the published image URL contract');
});

test('a referenced listed path passes the audit', () => {
  const audit = auditStableReferenceCoverage([documentReferencing(LISTED)], [LISTED]);

  expect(audit.errors).toEqual([]);
  expect(audit.referencedPaths).toEqual([LISTED]);
});

test('the audit reports a traversing reference instead of ignoring it', () => {
  const audit = auditStableReferenceCoverage(
    [
      {
        displayPath: 'page.html',
        html:
          `<link rel="canonical" href="${SITE_ORIGIN}/page">` +
          '<meta property="og:image" content="/images/%2e%2e%2f%2e%2e%2fsecret.jpg">'
      }
    ],
    [LISTED]
  );

  expect(audit.errors).toHaveLength(1);
  expect(audit.errors[0]).toContain('escapes the public image root');
});

test('the dev resolver serves only listed paths, query and fragment included', () => {
  const workspace = createWorkspace();
  workspace.writeSource(LISTED, BYTES);
  workspace.writeSource(UNLISTED, BYTES);
  const options = { manifestPaths: [LISTED], sourceRoot: workspace.sourceRoot };

  for (const requestUrl of [LISTED, `${LISTED}?v=2`, `${LISTED}#preview`]) {
    const resolved = resolveStablePublicImageRequest(requestUrl, options);
    expect(resolved?.contentType, requestUrl).toBe('image/jpeg');
    expect(readFileSync(resolved!.filePath, 'utf8'), requestUrl).toBe(BYTES);
  }

  // Present in the source root but not listed: the middleware must not emit a URL
  // from the source root that no production build emits either. Whether such a path
  // resolves at all is then up to `public/images`, which this contract leaves alone.
  expect(resolveStablePublicImageRequest(UNLISTED, options)).toBeNull();
  expect(resolveStablePublicImageRequest('/images/tarifa/parked-media.jpeg', options)).toBeNull();
  expect(resolveStablePublicImageRequest('/_astro/hero.Abc123.webp', options)).toBeNull();
});

test('the dev resolver rejects traversal', () => {
  const workspace = createWorkspace();
  const options = { manifestPaths: [LISTED], sourceRoot: workspace.sourceRoot };

  for (const requestUrl of [
    '/images/../../secret.jpg',
    '/images/%2e%2e%2f%2e%2e%2fsecret.jpg',
    '/images/amara-lounis%5C..%5Csecret.jpg'
  ]) {
    expect(resolveStablePublicImageRequest(requestUrl, options), requestUrl).toBeNull();
  }
});

test('the delivery guard fails when a listed image is missing from the output', () => {
  const workspace = createWorkspace();
  workspace.writeSource(LISTED, BYTES);

  const result = auditPublishedImageDelivery({
    distRoot: workspace.outDir,
    optimizedImageRoot: workspace.sourceRoot,
    publishedPaths: [LISTED]
  });

  expect(result.errors).toHaveLength(1);
  expect(result.errors[0]).toContain('delivered no file at');
});

test('the delivery guard fails when a listed image has different bytes', () => {
  const workspace = createWorkspace();
  workspace.writeSource(LISTED, BYTES);
  workspace.writeDelivered(LISTED, 'stale-copy');

  const result = auditPublishedImageDelivery({
    distRoot: workspace.outDir,
    optimizedImageRoot: workspace.sourceRoot,
    publishedPaths: [LISTED]
  });

  expect(result.errors).toHaveLength(1);
  expect(result.errors[0]).toContain('not byte-identical');
});

test('the delivery guard passes for a correctly emitted image', () => {
  const workspace = createWorkspace();
  workspace.writeSource(LISTED, BYTES);
  emitStablePublicImages({
    manifestPaths: [LISTED],
    sourceRoot: workspace.sourceRoot,
    outDir: workspace.outDir
  });

  const result = auditPublishedImageDelivery({
    distRoot: workspace.outDir,
    optimizedImageRoot: workspace.sourceRoot,
    publishedPaths: [LISTED]
  });

  expect(result.errors).toEqual([]);
  expect(result.verifiedPaths).toBe(1);
});
