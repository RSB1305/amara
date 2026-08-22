import { expect, test } from '@playwright/test';
import { existsSync, statSync } from 'node:fs';
import { join, posix } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  STABLE_PUBLIC_IMAGE_PATHS,
  STABLE_PUBLIC_IMAGE_SOURCE_ROOT,
  STABLE_PUBLIC_IMAGE_URL_PREFIX,
  isStablePublicImagePath,
  toStablePublicImageSourcePath
} from '../../src/lib/images/stablePublicImages';

/**
 * Characterization of the published image URL contract.
 *
 * These assertions pin the contract itself rather than any mechanism that
 * serves it, which is what kept them valid when delivery moved from the public
 * root to a build-time emission.
 */

const repositoryRoot = fileURLToPath(new URL('../../', import.meta.url));

const segmentsOf = (path: string) =>
  path.slice(STABLE_PUBLIC_IMAGE_URL_PREFIX.length).split('/');

const sourceFileFor = (path: string) =>
  join(repositoryRoot, STABLE_PUBLIC_IMAGE_SOURCE_ROOT, ...segmentsOf(path));

/** Where a copy of a listed image would sit if one ever returned to the public root. */
const publicFileFor = (path: string) =>
  join(repositoryRoot, 'public', 'images', ...segmentsOf(path));

test('the manifest holds exactly 147 unique paths', () => {
  expect(STABLE_PUBLIC_IMAGE_PATHS).toHaveLength(147);
  expect(new Set(STABLE_PUBLIC_IMAGE_PATHS).size).toBe(147);
});

test('every entry is an already-normalized public image path', () => {
  for (const path of STABLE_PUBLIC_IMAGE_PATHS) {
    expect(path.startsWith(STABLE_PUBLIC_IMAGE_URL_PREFIX), path).toBe(true);
    // Normalizing must be a no-op, otherwise the listed URL and the URL the
    // build resolves at runtime could differ.
    expect(posix.normalize(path), path).toBe(path);
    expect(path.split('/').includes('..'), path).toBe(false);
    expect(path, path).not.toContain('\\');
    expect(path, path).toMatch(/\.(?:jpe?g|png|webp|avif)$/i);
    expect(decodeURIComponent(path), path).toBe(path);
  }
});

test('the manifest is stored in sorted order so additions stay reviewable', () => {
  expect([...STABLE_PUBLIC_IMAGE_PATHS]).toEqual([...STABLE_PUBLIC_IMAGE_PATHS].sort());
});

test('every listed path resolves to a real file in the source root', () => {
  const missing = STABLE_PUBLIC_IMAGE_PATHS.filter((path) => {
    const file = sourceFileFor(path);
    return !existsSync(file) || !statSync(file).isFile();
  });

  expect(missing).toEqual([]);
});

test('membership and source resolution agree', () => {
  const [first] = STABLE_PUBLIC_IMAGE_PATHS;

  expect(isStablePublicImagePath(first)).toBe(true);
  expect(toStablePublicImageSourcePath(first)).toBe(
    first.slice(STABLE_PUBLIC_IMAGE_URL_PREFIX.length)
  );

  // A source image the manifest does not list stays outside this contract. Whether
  // it is reachable at all is a separate question, answered by `public/images`.
  expect(isStablePublicImagePath('/images/wellness/frigiliana-wellness-1.jpeg')).toBe(false);
  expect(toStablePublicImageSourcePath('/images/wellness/frigiliana-wellness-1.jpeg')).toBeUndefined();
  expect(isStablePublicImagePath('/images/does-not-exist.jpg')).toBe(false);
});

test('no manifest-managed path is duplicated in the public root', () => {
  // The invariant the migration established: for a listed path, the source root is
  // the only versioned copy and the build emitter is the only thing that puts it
  // under `/images/`. A file reappearing here would give a stable URL a second
  // source that could drift away from the first one unnoticed.
  const publicTwins = STABLE_PUBLIC_IMAGE_PATHS.filter((path) => existsSync(publicFileFor(path)));

  expect(publicTwins).toEqual([]);
});

test('media the manifest does not list stays in the public root', () => {
  // Scoped to the manifest, not to `/images/` as a whole. Parked media this contract
  // never managed keeps living in the public root and keeps being delivered from
  // there, so the assertion above must not be read as emptying that namespace.
  expect(existsSync(publicFileFor('/images/tarifa/surla-tarifa-cafe.jpeg'))).toBe(true);
});
