import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { extname, join, relative, resolve, sep } from 'node:path';

const projectRoot = resolve(import.meta.dirname, '..');
const sourceRoot = join(projectRoot, 'src');
const optimizedImageRoot = join(sourceRoot, 'assets', 'images', 'content');
const distRoot = join(projectRoot, 'dist');
const checkDist = process.argv.includes('--dist');
const sourceExtensions = new Set(['.astro', '.ts', '.tsx', '.js', '.jsx']);
// Internal tools are dev-only surfaces and are not held to the responsive image contract.
const ignoredPathSegments = [`${sep}pages${sep}_tools${sep}`];

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

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
      publicPath.slice('/images/'.length).split('/').join(sep)
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

if (checkDist) {
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
}
