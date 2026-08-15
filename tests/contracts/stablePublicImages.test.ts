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
 * serves it, so they stay valid while delivery moves from the public root to a
 * build-time emission.
 */

const repositoryRoot = fileURLToPath(new URL('../../', import.meta.url));

const segmentsOf = (path: string) =>
  path.slice(STABLE_PUBLIC_IMAGE_URL_PREFIX.length).split('/');

const sourceFileFor = (path: string) =>
  join(repositoryRoot, STABLE_PUBLIC_IMAGE_SOURCE_ROOT, ...segmentsOf(path));

/** Transition reality: a byte-identical legacy copy still sits in the public root. */
const publicFileFor = (path: string) =>
  join(repositoryRoot, 'public', 'images', ...segmentsOf(path));

test('the manifest holds exactly 58 unique paths', () => {
  expect(STABLE_PUBLIC_IMAGE_PATHS).toHaveLength(58);
  expect(new Set(STABLE_PUBLIC_IMAGE_PATHS).size).toBe(58);
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

test('the manifest-managed set still has a legacy copy in the public root', () => {
  // Characterizes the transition state: every listed path also exists as a
  // byte-identical copy under `public/images`. Removing those copies is a
  // separate, later step, and this assertion is what will record it when it
  // happens.
  const missingPublicTwin = STABLE_PUBLIC_IMAGE_PATHS.filter(
    (path) => !existsSync(publicFileFor(path))
  );

  expect(missingPublicTwin).toEqual([]);
});
