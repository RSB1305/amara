import { expect, test } from '@playwright/test';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import {
  auditPublicImageIntegrity,
  collectPublicImageReferences,
  normalizePublicImageReference
} from '../../scripts/check-image-policy.mjs';

const SITE_ORIGIN = 'https://amara-lodging.es';
const LOCAL_ORIGINS = new Set([SITE_ORIGIN]);
const IMAGE_PATH = '/images/amara-lounis/15-amara-frigiliana.jpg';
const IMAGE_BYTES = 'optimized-source-bytes';

const workspaces: string[] = [];

interface Workspace {
  distRoot: string;
  optimizedImageRoot: string;
  writePage: (body: string, options?: { canonical?: boolean }) => string;
  writeDelivered: (publicPath: string, bytes: string) => void;
  writeSource: (publicPath: string, bytes: string) => void;
}

function createWorkspace(): Workspace {
  const root = mkdtempSync(join(tmpdir(), 'amara-image-integrity-'));
  workspaces.push(root);

  const distRoot = join(root, 'dist');
  const optimizedImageRoot = join(root, 'src', 'assets', 'images', 'content');
  mkdirSync(distRoot, { recursive: true });
  mkdirSync(optimizedImageRoot, { recursive: true });

  const writeInto = (base: string, publicPath: string, bytes: string) => {
    const target = join(base, ...publicPath.slice('/images/'.length).split('/'));
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, bytes);
  };

  let pageCount = 0;

  return {
    distRoot,
    optimizedImageRoot,
    writePage(body, options) {
      const canonical =
        options?.canonical === false
          ? ''
          : `<link rel="canonical" href="${SITE_ORIGIN}/page-${pageCount + 1}">`;
      const path = join(distRoot, `page-${(pageCount += 1)}.html`);
      writeFileSync(path, `<html><head>${canonical}${body}</head><body></body></html>`);
      return path;
    },
    writeDelivered: (publicPath, bytes) =>
      writeInto(join(distRoot, 'images'), publicPath, bytes),
    writeSource: (publicPath, bytes) => writeInto(optimizedImageRoot, publicPath, bytes)
  };
}

/** Mirrors the real head shape: absolute social tags plus the root-relative SEO block. */
function headReferencing(publicPath: string): string {
  return [
    `<meta property="og:image" content="${SITE_ORIGIN}${publicPath}">`,
    `<meta name="twitter:image" content="${SITE_ORIGIN}${publicPath}">`,
    `<script type="application/ld+json">{"@type":"LodgingBusiness","image":["${SITE_ORIGIN}${publicPath}"]}</script>`,
    `<script type="application/json" data-amara="seo">{"ogImage":"${publicPath}"}</script>`
  ].join('');
}

function audit(workspace: Workspace, htmlFiles: string[]) {
  return auditPublicImageIntegrity({
    distRoot: workspace.distRoot,
    optimizedImageRoot: workspace.optimizedImageRoot,
    htmlFiles
  });
}

test.afterEach(() => {
  for (const root of workspaces.splice(0)) {
    rmSync(root, { recursive: true, force: true });
  }
});

test('passes when the delivered file is byte-identical to its optimized source', () => {
  const workspace = createWorkspace();
  workspace.writeDelivered(IMAGE_PATH, IMAGE_BYTES);
  workspace.writeSource(IMAGE_PATH, IMAGE_BYTES);
  const page = workspace.writePage(headReferencing(IMAGE_PATH));

  const result = audit(workspace, [page]);

  expect(result.errors).toEqual([]);
  expect(result.verifiedPaths).toBe(1);
});

test('fails when a referenced image is not delivered by the build', () => {
  const workspace = createWorkspace();
  workspace.writeSource(IMAGE_PATH, IMAGE_BYTES);
  const page = workspace.writePage(headReferencing(IMAGE_PATH));

  const result = audit(workspace, [page]);

  expect(result.verifiedPaths).toBe(1);
  expect(result.errors).toHaveLength(1);
  expect(result.errors[0]).toContain('the build delivers no file at');
});

test('fails when the delivered file exists but has drifted from its source', () => {
  const workspace = createWorkspace();
  workspace.writeDelivered(IMAGE_PATH, 'stale-public-copy');
  workspace.writeSource(IMAGE_PATH, IMAGE_BYTES);
  const page = workspace.writePage(headReferencing(IMAGE_PATH));

  const result = audit(workspace, [page]);

  expect(result.errors).toHaveLength(1);
  expect(result.errors[0]).toContain('not byte-identical');
});

test('fails when a delivered image has no optimized source twin', () => {
  const workspace = createWorkspace();
  workspace.writeDelivered(IMAGE_PATH, IMAGE_BYTES);
  const page = workspace.writePage(headReferencing(IMAGE_PATH));

  const result = audit(workspace, [page]);

  expect(result.errors).toHaveLength(1);
  expect(result.errors[0]).toContain('optimized source twin is missing');
});

test('ignores hashed /_astro/ metadata instead of demanding a public mirror', () => {
  const workspace = createWorkspace();
  const astroImage = '/_astro/15-amara-frigiliana.B6KvzlOR_ZCERM9.webp';
  const page = workspace.writePage(
    [
      `<meta property="og:image" content="${SITE_ORIGIN}${astroImage}">`,
      `<meta name="twitter:image" content="${SITE_ORIGIN}${astroImage}">`,
      `<script type="application/ld+json">{"image":["${SITE_ORIGIN}${astroImage}"]}</script>`,
      `<script type="application/json" data-amara="seo">{"ogImage":"${astroImage}"}</script>`
    ].join('')
  );

  const result = audit(workspace, [page]);

  expect(result.errors).toEqual([]);
  expect(result.verifiedPaths).toBe(0);
});

test('does not mistake a nested /archive/images/ path for a root path', () => {
  const workspace = createWorkspace();
  const nested = '/archive/images/old.jpg';
  const page = workspace.writePage(
    [
      `<meta property="og:image" content="${SITE_ORIGIN}${nested}">`,
      `<script type="application/json" data-amara="seo">{"ogImage":"${nested}"}</script>`
    ].join('')
  );

  // The whole reference survives collection; nothing is sliced down to /images/old.jpg.
  expect(collectPublicImageReferences(`<meta content="${SITE_ORIGIN}${nested}">`)).toEqual([
    `${SITE_ORIGIN}${nested}`
  ]);
  expect(collectPublicImageReferences(`<meta content="${nested}">`)).toEqual([]);

  const result = audit(workspace, [page]);

  expect(result.errors).toEqual([]);
  expect(result.verifiedPaths).toBe(0);
});

test('ignores images served from a foreign origin rather than resolving them locally', () => {
  const workspace = createWorkspace();
  const foreign = 'https://cdn.example.com/images/external.jpg';
  const page = workspace.writePage(`<meta property="og:image" content="${foreign}">`);

  const resolved = normalizePublicImageReference(foreign, { localOrigins: LOCAL_ORIGINS });
  expect(resolved.path).toBeUndefined();
  expect(resolved.error).toBeUndefined();
  expect(resolved.ignored).toContain('https://cdn.example.com');

  const result = audit(workspace, [page]);

  expect(result.errors).toEqual([]);
  expect(result.verifiedPaths).toBe(0);
});

test('strips a query string inside the normalizer, not by accident of the pattern', () => {
  expect(normalizePublicImageReference('/images/hero.jpg?v=2')).toEqual({
    path: '/images/hero.jpg'
  });
  expect(
    normalizePublicImageReference(`${SITE_ORIGIN}/images/hero.jpg?v=2&w=800`, {
      localOrigins: LOCAL_ORIGINS
    })
  ).toEqual({ path: '/images/hero.jpg' });
});

test('strips a fragment inside the normalizer, including one that contains a question mark', () => {
  expect(normalizePublicImageReference('/images/hero.jpg#preview')).toEqual({
    path: '/images/hero.jpg'
  });
  expect(normalizePublicImageReference('/images/hero.jpg#preview?not-a-query')).toEqual({
    path: '/images/hero.jpg'
  });
});

test('audits a query-stamped reference against the plain delivered file', () => {
  const workspace = createWorkspace();
  workspace.writeDelivered(IMAGE_PATH, IMAGE_BYTES);
  workspace.writeSource(IMAGE_PATH, IMAGE_BYTES);
  const page = workspace.writePage(
    [
      `<meta property="og:image" content="${SITE_ORIGIN}${IMAGE_PATH}?v=2">`,
      `<script type="application/json" data-amara="seo">{"ogImage":"${IMAGE_PATH}#preview"}</script>`
    ].join('')
  );

  const result = audit(workspace, [page]);

  expect(result.errors).toEqual([]);
  expect(result.verifiedPaths).toBe(1);
});

test('accepts a legitimate file name that merely begins with two dots', () => {
  const workspace = createWorkspace();
  const dottedPath = '/images/amara-lounis/..hidden-but-real.jpg';
  workspace.writeDelivered(dottedPath, IMAGE_BYTES);
  workspace.writeSource(dottedPath, IMAGE_BYTES);
  const page = workspace.writePage(headReferencing(dottedPath));

  expect(normalizePublicImageReference(dottedPath)).toEqual({ path: dottedPath });

  const result = audit(workspace, [page]);

  expect(result.errors).toEqual([]);
  expect(result.verifiedPaths).toBe(1);
});

test('collects absolute, root-relative and percent-encoded forms as one path', () => {
  const workspace = createWorkspace();
  workspace.writeDelivered(IMAGE_PATH, IMAGE_BYTES);
  workspace.writeSource(IMAGE_PATH, IMAGE_BYTES);
  const page = workspace.writePage(
    [
      `<meta property="og:image" content="${SITE_ORIGIN}${IMAGE_PATH}">`,
      `<meta name="twitter:image" content="${IMAGE_PATH}">`,
      '<script type="application/ld+json">',
      '{"image":["https:\\/\\/amara-lodging.es\\/images\\/amara-lounis\\/15-amara-frigiliana.jpg"]}',
      '</script>',
      '<script type="application/json" data-amara="seo">',
      '{"ogImage":"/images/amara-lounis%2F15-amara-frigiliana.jpg"}',
      '</script>'
    ].join('')
  );

  const result = audit(workspace, [page]);

  expect(result.errors).toEqual([]);
  expect(result.verifiedPaths).toBe(1);
});

test('rejects path traversal, including percent-encoded traversal', () => {
  for (const reference of [
    '/images/../../etc/passwd.jpg',
    '/images/%2e%2e%2f%2e%2e%2fetc/passwd.jpg',
    `${SITE_ORIGIN}/images/%2e%2e%2f%2e%2e%2fsecret.png`
  ]) {
    const resolved = normalizePublicImageReference(reference, { localOrigins: LOCAL_ORIGINS });
    expect(resolved.path, `${reference} must not resolve`).toBeUndefined();
    expect(resolved.error).toBe('escapes the public image root');
  }
});

test('rejects encoded backslash separators', () => {
  const resolved = normalizePublicImageReference('/images/amara-lounis%5C..%5Csecret.jpg');

  expect(resolved.path).toBeUndefined();
  expect(resolved.error).toBe('contains an illegal path separator or null byte');
});

test('reports a traversal reference as an audit error rather than skipping it', () => {
  const workspace = createWorkspace();
  const page = workspace.writePage(
    '<meta property="og:image" content="/images/%2e%2e%2f%2e%2e%2fsecret.jpg">'
  );

  const result = audit(workspace, [page]);

  expect(result.verifiedPaths).toBe(0);
  expect(result.errors).toHaveLength(1);
  expect(result.errors[0]).toContain('escapes the public image root');
});

test('fails loudly when no canonical link identifies the origin this site serves', () => {
  const workspace = createWorkspace();
  workspace.writeDelivered(IMAGE_PATH, IMAGE_BYTES);
  workspace.writeSource(IMAGE_PATH, IMAGE_BYTES);
  const page = workspace.writePage(
    `<meta property="og:image" content="${SITE_ORIGIN}${IMAGE_PATH}">`,
    { canonical: false }
  );

  const result = audit(workspace, [page]);

  expect(result.verifiedPaths).toBe(0);
  expect(result.errors).toHaveLength(1);
  expect(result.errors[0]).toContain('no canonical link identifies the origin');
});

test('collects only stable public image references from a document', () => {
  const references = collectPublicImageReferences(
    [
      `<meta property="og:image" content="${SITE_ORIGIN}/images/hero-frigiliana.jpg">`,
      '<img src="/_astro/hero.Abc123_Xyz.webp" srcset="/_astro/hero.Abc123_Xyz.webp 480w" sizes="100vw">',
      '<source src="/videos/amara-playa/shower-guide.mp4">'
    ].join('')
  );

  expect(references).toEqual([`${SITE_ORIGIN}/images/hero-frigiliana.jpg`]);
});
