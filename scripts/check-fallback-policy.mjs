import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const workspaceRoot = process.cwd();
const scanRoot = 'src';
const allowedFallbackConsumers = new Set([
  'src/lib/linkResolver.ts'
]);
const allowedExtensions = new Set(['.astro', '.ts', '.js', '.mjs']);

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    const extension = entry.name.slice(entry.name.lastIndexOf('.'));
    if (entry.isFile() && allowedExtensions.has(extension)) {
      files.push(fullPath);
    }
  }

  return files;
}

const violations = [];
const fullRoot = join(workspaceRoot, scanRoot);

if (statSync(fullRoot).isDirectory()) {
  for (const file of walk(fullRoot)) {
    const relPath = relative(workspaceRoot, file).replaceAll('\\', '/');
    const source = readFileSync(file, 'utf8');

    if (!source.includes('fallbackLang')) {
      continue;
    }

    if (!allowedFallbackConsumers.has(relPath)) {
      violations.push(relPath);
    }
  }
}

if (violations.length > 0) {
  console.error('AMARA fallback policy check failed.');
  console.error('New fallbackLang usage requires explicit review and allowlisting.');
  console.error('Review these files and justify any new cross-language fallback behavior:');
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

console.log('AMARA fallback policy check passed.');
console.log('Only approved files reference fallbackLang.');
