import { expect, test } from '@playwright/test';
import { dev } from 'astro';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  STABLE_PUBLIC_IMAGE_PATHS,
  STABLE_PUBLIC_IMAGE_SOURCE_ROOT,
  STABLE_PUBLIC_IMAGE_URL_PREFIX
} from '../../src/lib/images/stablePublicImages';

/**
 * Dev-server side of the published image URL contract.
 *
 * The point of these is parity: the dev server must emit exactly what a production
 * build emits, no more. A middleware that simply exposed the entire source root
 * would bypass the manifest and expose source-only paths absent from the current
 * build. Once the legacy public copies are removed, that discrepancy would only
 * grow, and it would surface only when something external followed such a URL.
 *
 * Astro's own public-directory handling sets `etag` and `cache-control`; the
 * published-image middleware does not. That difference is what lets these tests tell
 * which layer answered, rather than only that something did.
 */

const PORT = 4325;
const ORIGIN = `http://127.0.0.1:${PORT}`;
const repositoryRoot = fileURLToPath(new URL('../../', import.meta.url));

const PUBLISHED_PATH = STABLE_PUBLIC_IMAGE_PATHS[0];
/**
 * A specifically chosen source-only example: it is in the source root, the manifest
 * does not list it, and it has no copy under `public/images` either. That last part
 * is why it is unreachable today. Other unlisted source images can still resolve
 * during the transition through a legacy public copy, which this contract leaves be.
 */
const SOURCE_ONLY_PATH = '/images/wellness/frigiliana-wellness-1.jpeg';
/** Parked media that only the public root holds and that this contract must not touch. */
const PUBLIC_ONLY_PATH = '/images/tarifa/surla-tarifa-cafe.jpeg';

const sourceFileFor = (publicPath: string) =>
  join(
    repositoryRoot,
    STABLE_PUBLIC_IMAGE_SOURCE_ROOT,
    ...publicPath.slice(STABLE_PUBLIC_IMAGE_URL_PREFIX.length).split('/')
  );

let astroServer: Awaited<ReturnType<typeof dev>> | undefined;

test.beforeAll(async () => {
  astroServer = await dev({
    root: repositoryRoot,
    server: { host: '127.0.0.1', port: PORT },
    logLevel: 'silent'
  });
});

test.afterAll(async () => {
  await astroServer?.stop();
});

test('a published path is served from the source root, byte for byte', async ({ request }) => {
  const response = await request.get(`${ORIGIN}${PUBLISHED_PATH}`);

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toBe('image/jpeg');
  expect(Buffer.from(await response.body())).toEqual(readFileSync(sourceFileFor(PUBLISHED_PATH)));
  // Answered by the published-image middleware, not by the public directory.
  expect(response.headers()['etag']).toBeUndefined();
});

test('a published path keeps working with a query string', async ({ request }) => {
  const response = await request.get(`${ORIGIN}${PUBLISHED_PATH}?v=2`);

  expect(response.status()).toBe(200);
  expect(Buffer.from(await response.body())).toEqual(readFileSync(sourceFileFor(PUBLISHED_PATH)));
});

test('an unlisted source image with no public copy stays unreachable', async ({ request }) => {
  // Dev/production parity: the middleware must not hand out a source-root URL that
  // no production build emits. With no legacy public copy behind it either, this
  // particular path resolves nowhere — exactly as in the build output.
  const response = await request.get(`${ORIGIN}${SOURCE_ONLY_PATH}`);

  expect(response.status()).toBe(404);
});

test('parked public-only media is still served by the public directory', async ({ request }) => {
  const response = await request.get(`${ORIGIN}${PUBLIC_ONLY_PATH}`);

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toBe('image/jpeg');
  // Astro handled it, which is what keeps the parked media untouched by this contract.
  expect(response.headers()['etag']).toBeDefined();
});

test('traversal through the image root is refused', async ({ request }) => {
  // Percent-encoded forms are the ones that actually reach the server; a literal
  // `../..` is collapsed by any conformant HTTP client before the request is sent,
  // so asserting on it would test the client rather than this middleware.
  for (const path of [
    '/images/%2e%2e%2f%2e%2e%2fpackage.json',
    '/images/%2e%2e%2fastro.config.mjs',
    '/images/amara-lounis%5C..%5Cpackage.json'
  ]) {
    const response = await request.get(`${ORIGIN}${path}`);
    expect(response.status(), path).toBe(404);
  }
});
