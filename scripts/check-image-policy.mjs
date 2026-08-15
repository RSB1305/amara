import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';
import {
  collectPublicImageReferences,
  findCanonicalOrigin,
  isInsideDirectory,
  normalizePublicImageReference,
  PUBLIC_IMAGE_ROOT_URL
} from '../src/lib/images/publicImageReferences.ts';
import { STABLE_PUBLIC_IMAGE_PATHS } from '../src/lib/images/stablePublicImages.ts';

const projectRoot = resolve(import.meta.dirname, '..');
const sourceRoot = join(projectRoot, 'src');
const optimizedImageRoot = join(sourceRoot, 'assets', 'images', 'content');
const distRoot = join(projectRoot, 'dist');
const sourceExtensions = new Set(['.astro', '.ts', '.tsx', '.js', '.jsx']);
// Internal tools are dev-only surfaces and are not held to the responsive image contract.
const ignoredPathSegments = [`${sep}pages${sep}_tools${sep}`];

/** Distinguishes an absolute reference from a root-relative one when reporting. */
const ABSOLUTE_REFERENCE = /^https?:\/\//i;

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

/**
 * Verifies that every stable public image URL the build actually emitted resolves
 * to a delivered file that is byte-identical to its source in
 * `src/assets/images/content`.
 *
 * This is the reference-driven half of the delivery contract: it starts from what
 * the pages ask for. `auditPublishedImageDelivery` covers the other half, starting
 * from what the contract promises to publish. Both are needed, because a reference
 * can exist without a published path and a published path can exist without a
 * reference.
 */
export function auditPublicImageIntegrity({
  distRoot: auditDistRoot,
  optimizedImageRoot: auditOptimizedImageRoot,
  htmlFiles
}) {
  const publicImageRoot = join(auditDistRoot, 'images');
  const references = new Map();
  const errors = [];

  // The origins this site serves are read from the build itself rather than from
  // configuration, so the audit cannot drift away from what was actually generated.
  const localOrigins = new Set();
  const documents = [];

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    const canonicalOrigin = findCanonicalOrigin(html);

    if (canonicalOrigin) {
      localOrigins.add(canonicalOrigin);
    }

    documents.push({
      displayPath: relative(projectRoot, file),
      rawReferences: collectPublicImageReferences(html)
    });
  }

  for (const { displayPath, rawReferences } of documents) {
    for (const rawReference of rawReferences) {
      if (localOrigins.size === 0 && ABSOLUTE_REFERENCE.test(rawReference)) {
        errors.push(
          `${displayPath} references "${rawReference}", but no canonical link identifies the ` +
            'origin this site serves, so the reference cannot be classified.'
        );
        continue;
      }

      const resolved = normalizePublicImageReference(rawReference, { localOrigins });

      if (resolved.error) {
        errors.push(`${displayPath} references "${rawReference}", which ${resolved.error}.`);
        continue;
      }

      if (!resolved.path) {
        continue;
      }

      const existing = references.get(resolved.path);
      if (existing) {
        existing.add(displayPath);
      } else {
        references.set(resolved.path, new Set([displayPath]));
      }
    }
  }

  for (const [publicPath, referencingFiles] of references) {
    const relativeSegments = publicPath.slice(PUBLIC_IMAGE_ROOT_URL.length).split('/');
    const deliveredFile = resolve(publicImageRoot, ...relativeSegments);
    const sourceFile = resolve(auditOptimizedImageRoot, ...relativeSegments);
    const [firstReferencingFile] = referencingFiles;

    if (
      !isInsideDirectory(publicImageRoot, deliveredFile) ||
      !isInsideDirectory(auditOptimizedImageRoot, sourceFile)
    ) {
      errors.push(`${firstReferencingFile} references ${publicPath}, which escapes its image root.`);
      continue;
    }

    if (!existsSync(deliveredFile)) {
      errors.push(
        `${firstReferencingFile} references ${publicPath}, but the build delivers no file at ` +
          `${relative(projectRoot, deliveredFile)}. The social preview and structured-data image would 404.`
      );
      continue;
    }

    if (!existsSync(sourceFile)) {
      errors.push(
        `${publicPath} is delivered, but the optimized source twin is missing at ` +
          `${relative(projectRoot, sourceFile)}.`
      );
      continue;
    }

    if (sha256(deliveredFile) !== sha256(sourceFile)) {
      errors.push(
        `${publicPath} is delivered, but it is not byte-identical to ` +
          `${relative(projectRoot, sourceFile)}. The two image roots have drifted apart.`
      );
    }
  }

  return { errors, verifiedPaths: references.size };
}

/**
 * Verifies that every published path actually reached the output, byte-identical to
 * its source.
 *
 * The reference-driven audit above cannot see a published path that no page happens
 * to reference right now, yet those are exactly the URLs the contract exists to keep
 * alive. This starts from the contract instead, so a silently skipped emission is
 * caught even when nothing links to the image any more.
 */
export function auditPublishedImageDelivery({
  distRoot: auditDistRoot,
  optimizedImageRoot: auditOptimizedImageRoot,
  publishedPaths
}) {
  const publicImageRoot = join(auditDistRoot, 'images');
  const errors = [];

  for (const publicPath of publishedPaths) {
    const relativeSegments = publicPath.slice(PUBLIC_IMAGE_ROOT_URL.length).split('/');
    const deliveredFile = resolve(publicImageRoot, ...relativeSegments);
    const sourceFile = resolve(auditOptimizedImageRoot, ...relativeSegments);

    if (
      !isInsideDirectory(publicImageRoot, deliveredFile) ||
      !isInsideDirectory(auditOptimizedImageRoot, sourceFile)
    ) {
      errors.push(`${publicPath} is published, but it escapes its image root.`);
      continue;
    }

    if (!existsSync(sourceFile)) {
      errors.push(
        `${publicPath} is published, but its source is missing at ` +
          `${relative(projectRoot, sourceFile)}.`
      );
      continue;
    }

    if (!existsSync(deliveredFile)) {
      errors.push(
        `${publicPath} is published, but the build delivered no file at ` +
          `${relative(projectRoot, deliveredFile)}.`
      );
      continue;
    }

    if (sha256(deliveredFile) !== sha256(sourceFile)) {
      errors.push(
        `${publicPath} was delivered, but it is not byte-identical to ` +
          `${relative(projectRoot, sourceFile)}.`
      );
    }
  }

  return { errors, verifiedPaths: publishedPaths.length };
}

function main() {
  const checkDist = process.argv.includes('--dist');
  const errors = [];
  const files = walk(sourceRoot).filter(
    (file) =>
      sourceExtensions.has(extname(file)) &&
      !ignoredPathSegments.some((segment) => file.includes(segment))
  );

  for (const file of files) {
    const source = readFileSync(file, 'utf8');
    const displayPath = relative(projectRoot, file);

    if (extname(file) === '.astro') {
      for (const match of source.matchAll(/<img\b[\s\S]*?>/g)) {
        const tag = match[0];
        if (!/\bsrcset\s*=/.test(tag) || !/\bsizes\s*=/.test(tag)) {
          const line = source.slice(0, match.index).split(/\r?\n/).length;
          errors.push(
            `${displayPath}:${line} uses a native <img> without both srcset and sizes. ` +
              'Use <AmaraImage> or the shared responsive image generator.'
          );
        }
      }
    }

    for (const match of source.matchAll(/['"`](\/images\/[^'"`\s)]+\.(?:jpg|jpeg|png|webp|avif))['"`]/gi)) {
      const publicPath = match[1];
      const optimizedPath = join(
        optimizedImageRoot,
        publicPath.slice(PUBLIC_IMAGE_ROOT_URL.length).split('/').join(sep)
      );

      if (!existsSync(optimizedPath)) {
        errors.push(
          `${displayPath} references ${publicPath}, but the optimized source is missing at ` +
            relative(projectRoot, optimizedPath)
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error('[AMARA image policy] Failed:\n');
    for (const error of errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(
    `[AMARA image policy] Passed: ${files.length} production source files checked for responsive image delivery.`
  );

  if (!checkDist) {
    return;
  }

  if (!existsSync(distRoot)) {
    console.error('[AMARA image policy] Dist audit requested, but dist/ does not exist.');
    process.exit(1);
  }

  const htmlFiles = walk(distRoot).filter(
    (file) =>
      extname(file) === '.html' &&
      relative(distRoot, file).split(sep)[0] !== 'tools'
  );
  const distErrors = [];

  for (const file of htmlFiles) {
    const html = readFileSync(file, 'utf8');
    const displayPath = relative(projectRoot, file);

    for (const match of html.matchAll(/<img\b[^>]*>/g)) {
      const tag = match[0];

      if (/\bsrc=["']\/images\//.test(tag)) {
        distErrors.push(`${displayPath} still serves a public content image directly.`);
      }

      if (
        /\bsrc=["']\/_astro\//.test(tag) &&
        (!/\bsrcset=/.test(tag) || !/\bsizes=/.test(tag))
      ) {
        distErrors.push(
          `${displayPath} contains an optimized image without both srcset and sizes.`
        );
      }
    }
  }

  if (distErrors.length > 0) {
    console.error('[AMARA image policy] Dist audit failed:\n');
    for (const error of distErrors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(
    `[AMARA image policy] Dist audit passed: ${htmlFiles.length} generated HTML files checked.`
  );

  const integrity = auditPublicImageIntegrity({
    distRoot,
    optimizedImageRoot,
    htmlFiles
  });

  if (integrity.errors.length > 0) {
    console.error('[AMARA image policy] Public image integrity audit failed:\n');
    for (const error of integrity.errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(
    `[AMARA image policy] Public image integrity audit passed: ${integrity.verifiedPaths} ` +
      'distinct stable /images/ paths are delivered and byte-identical to their optimized sources.'
  );

  const delivery = auditPublishedImageDelivery({
    distRoot,
    optimizedImageRoot,
    publishedPaths: STABLE_PUBLIC_IMAGE_PATHS
  });

  if (delivery.errors.length > 0) {
    console.error('[AMARA image policy] Published image delivery audit failed:\n');
    for (const error of delivery.errors) {
      console.error(`- ${error}`);
    }
    process.exit(1);
  }

  console.log(
    `[AMARA image policy] Published image delivery audit passed: ${delivery.verifiedPaths} ` +
      'declared stable /images/ paths reached the build output byte-identical to their sources.'
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
