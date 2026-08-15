import { isAbsolute, posix, relative } from 'node:path';

/**
 * Parsing and normalization for stable `/images/...` references.
 *
 * Two consumers depend on exactly the same reading of a reference: the build-time
 * emitter that decides which files to publish, and the delivered-output policy check
 * that verifies what was published. Splitting that logic would let the two drift into
 * disagreeing about the same URL, so it lives here and is imported by both.
 *
 * This module is deliberately free of project-specific policy. It answers only "which
 * public path, if any, does this reference address"; whether that path is part of the
 * published contract is `stablePublicImages.ts`'s question.
 */

/** URL prefix that identifies the public image root. */
export const PUBLIC_IMAGE_ROOT_URL = '/images/';

const PUBLIC_IMAGE_EXTENSIONS = 'jpe?g|png|webp|avif';

/**
 * Matches a candidate reference in one of two shapes, so that a nested `/images/`
 * segment can never be mistaken for a root path.
 *
 * An absolute http(s) URL is consumed from its scheme onwards, which keeps its full
 * path intact: a nested archive path stays nested and is rejected later, rather than
 * being sliced down to a root path it never addressed. A root-relative path is
 * accepted only where the preceding character cannot be part of a path segment,
 * which is what anchors it to the document root.
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

/**
 * The outcome of reading one reference.
 *
 * `path` is a reference this contract owns. `error` means the reference targets the
 * public image root but is malformed, which must fail the build. `ignored` means the
 * reference is simply outside the local contract — a foreign origin or a different
 * path root — which is not a defect.
 */
export interface PublicImageReferenceResolution {
  path?: string;
  error?: string;
  ignored?: string;
}

export interface NormalizeOptions {
  localOrigins?: ReadonlySet<string>;
}

/** Reads the origin a document declares for itself through its canonical link. */
export function findCanonicalOrigin(html: string): string | null {
  for (const tag of html.match(/<link\b[^>]*>/gi) ?? []) {
    if (!/\brel=["']canonical["']/i.test(tag)) {
      continue;
    }

    const href = /\bhref=["']([^"']+)["']/i.exec(tag);
    if (!href?.[1]) {
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

/**
 * Collects candidate public image references from one generated document.
 *
 * Candidates are returned verbatim, including origin, query and fragment;
 * classifying them is `normalizePublicImageReference`'s responsibility. JSON
 * payloads may escape forward slashes, so the escape is undone for scanning only.
 * Hashed `/_astro/` metadata is out of scope by construction: it is owned by Astro's
 * asset pipeline and is never mirrored into the public root.
 */
export function collectPublicImageReferences(html: string): string[] {
  return html.replaceAll('\\/', '/').match(PUBLIC_IMAGE_REFERENCE_PATTERN) ?? [];
}

/**
 * Resolves one raw reference to the stable public path it addresses.
 *
 * Query and fragment are removed here rather than by the collecting pattern, so this
 * function alone guarantees the path it returns. Decoding happens before the
 * traversal guard so that percent-encoded traversal (`%2e%2e%2f`) collapses into a
 * `..` segment that can still be rejected, and the authored path is inspected before
 * any URL parser can quietly resolve those segments away.
 *
 * Foreign origins are passed over rather than resolved against local files. Whether
 * external metadata images should be allowed at all is a separate architecture
 * decision, not something this parser should decide by accident.
 */
export function normalizePublicImageReference(
  rawReference: string,
  { localOrigins }: NormalizeOptions = {}
): PublicImageReferenceResolution {
  const absoluteReference = ABSOLUTE_HTTP_REFERENCE.exec(rawReference);
  let rawPath = rawReference;

  if (absoluteReference) {
    let origin: string;
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

  let decodedPath: string;
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
 * Whether a resolved filesystem path stays inside its root.
 *
 * Only a real parent-directory segment escapes. A file whose name merely starts with
 * two dots is an ordinary asset and must stay inside the root.
 */
export function isInsideDirectory(directory: string, candidate: string): boolean {
  const relativePath = relative(directory, candidate);

  if (relativePath === '' || isAbsolute(relativePath)) {
    return false;
  }

  return !relativePath.split(/[\\/]/).includes('..');
}
