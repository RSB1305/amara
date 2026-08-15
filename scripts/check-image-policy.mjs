import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, isAbsolute, join, posix, relative, resolve, sep } from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = resolve(import.meta.dirname, '..');
const sourceRoot = join(projectRoot, 'src');
const optimizedImageRoot = join(sourceRoot, 'assets', 'images', 'content');
const distRoot = join(projectRoot, 'dist');
const sourceExtensions = new Set(['.astro', '.ts', '.tsx', '.js', '.jsx']);
// Internal tools are dev-only surfaces and are not held to the responsive image contract.
const ignoredPathSegments = [`${sep}pages${sep}_tools${sep}`];

const PUBLIC_IMAGE_ROOT_URL = '/images/';
const PUBLIC_IMAGE_EXTENSIONS = 'jpe?g|png|webp|avif';

/**
 * Matches a candidate reference in one of two shapes, so that a nested `/images/`
 * segment can never be mistaken for a root path.
 *
 * An absolute http(s) URL is consumed from its scheme onwards, which keeps its full
 * path intact: `https://host/archive/images/old.jpg` is collected whole and rejected
 * later, rather than being sliced down to a bogus `/images/old.jpg`. A root-relative
 * path is accepted only where the preceding character cannot be part of a path
 * segment, which is what anchors it to the document root.
 *
 * Query strings and fragments are captured deliberately. Stripping them is the
 * normalizer's job; letting the pattern hide them would make correctness depend on
 * this regex rather than on the function that claims to guarantee it.
 */
const PUBLIC_IMAGE_REFERENCE_PATTERN = new RegExp(
  '(?:https?://[^\\s"\'<>\\\\]*?|(?<![A-Za-z0-9._~%/-]))' +
    `${PUBLIC_IMAGE_ROOT_URL}[^\\s"'<>\\\\)?#]*?\\.(?:${PUBLIC_IMAGE_EXTENSIONS})` +
    '(?:[?#][^\\s"\'<>\\\\)]*)?',
  'gi'
);

/** Splits an absolute http(s) URL into its authority and the raw path that follows. */
const ABSOLUTE_HTTP_REFERENCE = /^https?:\/\/[^/?#]*(.*)$/i;

/** Reads the origin a document declares for itself through its canonical link. */
function findCanonicalOrigin(html) {
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    if (!/\brel=["']canonical["']/i.test(tag)) {
      continue;
    }

    const href = /\bhref=["']([^"']+)["']/i.exec(tag);
    if (!href) {
      continue;
    }

    try {
      return new URL(href[1]).origin;
    } catch {
      return null;
    }
  }

  return null;
}

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function isInsideDirectory(directory, candidate) {
  const relativePath = relative(directory, candidate);

  if (relativePath === '' || isAbsolute(relativePath)) {
    return false;
  }

  // Only a real parent-directory segment escapes. A file whose name merely starts
  // with two dots is an ordinary asset and must stay inside the root.
  return !relativePath.split(/[\\/]/).includes('..');
}

function sha256(path) {
  return createHash('sha256').update(readFileSync(path)).digest('hex');
}

/**
 * Resolves one raw reference to the stable public path it addresses.
 *
 * Three outcomes are distinguished on purpose. `path` is a reference this contract
 * owns. `error` means the reference targets the public image root but is malformed,
 * which must fail the build. `ignored` means the reference is simply outside the
 * local mirror contract — a foreign origin or a different path root — which is not a
 * defect. Whether external metadata images should be allowed at all is a separate
 * architecture decision, so they are passed over rather than silently resolved
 * against local files.
 *
 * Query and fragment are removed here rather than by the collecting pattern, so this
 * function alone guarantees the path it returns. Decoding happens before the
 * traversal guard so that percent-encoded traversal (`%2e%2e%2f`) collapses into a
 * `..` segment that can still be rejected, and the authored path is inspected before
 * any URL parser can quietly resolve those segments away.
 */
export function normalizePublicImageReference(rawReference, { localOrigins } = {}) {
  const absoluteReference = ABSOLUTE_HTTP_REFERENCE.exec(rawReference);
  let rawPath = rawReference;

  if (absoluteReference) {
    let origin;
    try {
      origin = new URL(rawReference).origin;
    } catch {
      return { error: 'is not a parsable URL' };
    }

    if (!localOrigins?.has(origin)) {
      return { ignored: `points at ${origin}, which is not an origin this site serves` };
    }

    rawPath = absoluteReference[1] || '/';
  } else if (!rawReference.startsWith('/')) {
    return { ignored: 'is neither an absolute URL nor a root-relative path' };
  }

  const pathWithoutFragment = rawPath.split('#')[0] ?? '';
  const pathWithoutQuery = pathWithoutFragment.split('?')[0] ?? '';

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathWithoutQuery);
  } catch {
    return { error: 'contains an invalid percent-encoding' };
  }

  if (decodedPath.includes('\\') || decodedPath.includes('\0')) {
    return { error: 'contains an illegal path separator or null byte' };
  }

  if (decodedPath.split('/').includes('..')) {
    return { error: 'escapes the public image root' };
  }

  const normalizedPath = posix.normalize(decodedPath);

  if (!normalizedPath.startsWith(PUBLIC_IMAGE_ROOT_URL)) {
    return { ignored: 'does not address the public image root' };
  }

  return { path: normalizedPath };
}

/**
 * Collects candidate public image references from one generated document.
 *
 * Candidates are returned verbatim, including origin, query and fragment;
 * classifying them is `normalizePublicImageReference`'s responsibility. JSON
 * payloads may escape forward slashes, so the escape is undone for scanning only.
 * Hashed `/_astro/` metadata is out of scope by construction: it is owned by Astro's
 * asset pipeline and is never mirrored into the public root.
 */
export function collectPublicImageReferences(html) {
  return html.replaceAll('\\/', '/').match(PUBLIC_IMAGE_REFERENCE_PATTERN) ?? [];
}

/**
 * Verifies that every stable public image URL the build actually emitted resolves
 * to a delivered file that is byte-identical to its optimized source twin.
 *
 * The source-side policy proves only that a twin exists for each *literal*
 * `/images/` path in `src`. It cannot see composed paths, and it never inspects the
 * delivered output, so an absent or stale public copy still yields a green build
 * and a silently broken social preview or structured-data image. Existence alone is
 * therefore not enough — the SHA-256 comparison is what makes the two roots a
 * verified mirror rather than a manual convention.
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
      if (localOrigins.size === 0 && ABSOLUTE_HTTP_REFERENCE.test(rawReference)) {
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
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
