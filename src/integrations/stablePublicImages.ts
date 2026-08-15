import type { AstroIntegration } from 'astro';
import { copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  collectPublicImageReferences,
  findCanonicalOrigin,
  isInsideDirectory,
  normalizePublicImageReference,
  PUBLIC_IMAGE_ROOT_URL
} from '../lib/images/publicImageReferences';
import {
  STABLE_PUBLIC_IMAGE_PATHS,
  STABLE_PUBLIC_IMAGE_SOURCE_ROOT
} from '../lib/images/stablePublicImages';

/**
 * Delivery for the published `/images/...` URL contract.
 *
 * `src/assets/images/content` holds the canonical bytes of every content image.
 * During the current transition a byte-identical legacy copy of each listed image
 * also remains under `public/images`; retiring those copies is a separate, later
 * step. This integration makes the subset listed in `stablePublicImages.ts`
 * reachable under its stable URL from the canonical source, in both of the places
 * that need it:
 *
 * - the production build, by copying each listed path into the output directory;
 * - the dev server, by serving each listed path straight from the source root.
 *
 * The dev side is restricted to the listed paths on purpose. Serving the entire
 * source root under `/images/` would bypass the manifest and expose source-only
 * paths absent from the current build. Once the legacy public copies are removed,
 * that dev/production discrepancy would only grow, and parity is worth more than
 * the convenience. Anything this contract does not manage is handed back to Astro's
 * ordinary public-directory handling, so parked media keeps behaving as before.
 *
 * Emission is driven by the list, not by what the current pages happen to reference.
 * A listed path is emitted even when nothing links to it any more, which is what
 * keeps an already-shared or already-indexed URL alive. The reverse direction is
 * checked instead: a generated page that references a stable `/images/...` path
 * which is not listed fails the build, so such a reference cannot reach the output
 * undeclared. That check reads the generated HTML; it does not police the whole
 * `public/images` namespace.
 */

const IMAGE_CONTENT_TYPES: Readonly<Record<string, string>> = {
  '.avif': 'image/avif',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp'
};

export interface StableImageDocument {
  displayPath: string;
  html: string;
}

export interface StableReferenceAudit {
  errors: string[];
  referencedPaths: string[];
}

export interface DevImageResolution {
  filePath: string;
  contentType: string;
}

function walk(directory: string): string[] {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function segmentsOf(publicPath: string): string[] {
  return publicPath.slice(PUBLIC_IMAGE_ROOT_URL.length).split('/');
}

/**
 * Copies every listed path from the source root into the output directory.
 *
 * Writes are additive by design: the output already holds whatever `public/` put
 * there, including media this contract knows nothing about, and a synchronising
 * emitter would delete exactly those files. A missing source file aborts rather than
 * being skipped, because skipping would ship a URL that resolves to nothing.
 */
export function emitStablePublicImages(options: {
  manifestPaths: readonly string[];
  sourceRoot: string;
  outDir: string;
}): { emitted: string[] } {
  const publicImageRoot = join(options.outDir, 'images');
  const emitted: string[] = [];

  for (const publicPath of options.manifestPaths) {
    const segments = segmentsOf(publicPath);
    const sourceFile = resolve(options.sourceRoot, ...segments);
    const targetFile = resolve(publicImageRoot, ...segments);

    if (
      !isInsideDirectory(options.sourceRoot, sourceFile) ||
      !isInsideDirectory(publicImageRoot, targetFile)
    ) {
      throw new Error(
        `[AMARA stable images] ${publicPath} escapes its image root and cannot be published.`
      );
    }

    if (!existsSync(sourceFile)) {
      throw new Error(
        `[AMARA stable images] ${publicPath} is published, but its source is missing at ` +
          `${STABLE_PUBLIC_IMAGE_SOURCE_ROOT}/${segments.join('/')}.`
      );
    }

    mkdirSync(join(targetFile, '..'), { recursive: true });
    copyFileSync(sourceFile, targetFile);
    emitted.push(publicPath);
  }

  return { emitted };
}

/**
 * Verifies that the delivered pages reference no stable path outside the contract.
 *
 * The origins this site serves are read from the documents' own canonical links, so
 * the check cannot drift away from what was generated.
 */
export function auditStableReferenceCoverage(
  documents: readonly StableImageDocument[],
  manifestPaths: readonly string[]
): StableReferenceAudit {
  const published = new Set(manifestPaths);
  const localOrigins = new Set<string>();

  for (const document of documents) {
    const origin = findCanonicalOrigin(document.html);
    if (origin) {
      localOrigins.add(origin);
    }
  }

  const errors: string[] = [];
  // Keyed by path so a URL repeated across pages is reported once, with one page
  // named as an entry point for whoever has to fix it.
  const referencedPaths = new Map<string, string>();

  for (const document of documents) {
    for (const rawReference of collectPublicImageReferences(document.html)) {
      const resolved = normalizePublicImageReference(rawReference, { localOrigins });

      if (resolved.error) {
        errors.push(
          `${document.displayPath} references "${rawReference}", which ${resolved.error}.`
        );
        continue;
      }

      if (!resolved.path || referencedPaths.has(resolved.path)) {
        continue;
      }

      referencedPaths.set(resolved.path, document.displayPath);
    }
  }

  for (const [path, displayPath] of referencedPaths) {
    if (!published.has(path)) {
      errors.push(
        `${displayPath} references ${path}, which is not part of the published image URL ` +
          'contract. Add it to STABLE_PUBLIC_IMAGE_PATHS to publish it.'
      );
    }
  }

  return { errors, referencedPaths: [...referencedPaths.keys()] };
}

/**
 * Maps a dev-server request to the source file that backs it.
 *
 * Returns `null` for anything outside the published contract so the caller can hand
 * the request back to Astro's ordinary public-directory resolution.
 */
export function resolveStablePublicImageRequest(
  requestUrl: string,
  options: { manifestPaths: readonly string[]; sourceRoot: string }
): DevImageResolution | null {
  const resolved = normalizePublicImageReference(requestUrl);

  if (!resolved.path || !options.manifestPaths.includes(resolved.path)) {
    return null;
  }

  const filePath = resolve(options.sourceRoot, ...segmentsOf(resolved.path));

  if (!isInsideDirectory(options.sourceRoot, filePath) || !existsSync(filePath)) {
    return null;
  }

  const contentType = IMAGE_CONTENT_TYPES[extname(filePath).toLowerCase()];

  return contentType ? { filePath, contentType } : null;
}

export function stablePublicImages(): AstroIntegration {
  // Neither the dev-server hook nor the build hook receives the resolved config, so
  // the project root is captured once while it is offered.
  let projectRoot: URL | undefined;

  const sourceRootFor = (hook: string) => {
    if (!projectRoot) {
      throw new Error(`[AMARA stable images] ${hook} ran before the Astro config was resolved.`);
    }

    return fileURLToPath(new URL(`${STABLE_PUBLIC_IMAGE_SOURCE_ROOT}/`, projectRoot));
  };

  return {
    name: 'amara-stable-public-images',
    hooks: {
      'astro:config:done': ({ config }) => {
        projectRoot = config.root;
      },

      'astro:server:setup': ({ server }) => {
        const sourceRoot = sourceRootFor('astro:server:setup');

        server.middlewares.use((request, response, next) => {
          if (!request.url || (request.method !== 'GET' && request.method !== 'HEAD')) {
            next();
            return;
          }

          const resolved = resolveStablePublicImageRequest(request.url, {
            manifestPaths: STABLE_PUBLIC_IMAGE_PATHS,
            sourceRoot
          });

          if (!resolved) {
            next();
            return;
          }

          const body = readFileSync(resolved.filePath);
          response.statusCode = 200;
          response.setHeader('Content-Type', resolved.contentType);
          response.setHeader('Content-Length', body.byteLength);
          response.end(request.method === 'HEAD' ? undefined : body);
        });
      },

      'astro:build:done': ({ dir, logger }) => {
        const outDir = fileURLToPath(dir);
        const sourceRoot = sourceRootFor('astro:build:done');

        const documents = walk(outDir)
          .filter(
            (file) => extname(file) === '.html' && relative(outDir, file).split(sep)[0] !== 'tools'
          )
          .map((file) => ({
            displayPath: relative(outDir, file),
            html: readFileSync(file, 'utf8')
          }));

        // Validate before writing anything, so a contract violation never leaves a
        // half-published output behind.
        const audit = auditStableReferenceCoverage(documents, STABLE_PUBLIC_IMAGE_PATHS);

        if (audit.errors.length > 0) {
          for (const error of audit.errors) {
            logger.error(error);
          }

          throw new Error(
            `[AMARA stable images] ${audit.errors.length} reference(s) fall outside the published image URL contract.`
          );
        }

        const { emitted } = emitStablePublicImages({
          manifestPaths: STABLE_PUBLIC_IMAGE_PATHS,
          sourceRoot,
          outDir
        });

        logger.info(
          `Published ${emitted.length} stable image path(s) from ${STABLE_PUBLIC_IMAGE_SOURCE_ROOT}; ` +
            `${audit.referencedPaths.length} of them are referenced by the current pages.`
        );
      }
    }
  };
}
