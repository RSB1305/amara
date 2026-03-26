import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const workspaceRoot = process.cwd();
const sharedRoots = ['src/components', 'src/page-families'];
const allowedStrictConsumers = new Set([
  'src/components/FooterCore.astro',
  'src/components/Navigation.astro',
  'src/page-families/guest-reviews/GuestReviewsPage.astro'
]);

function walk(dir) {
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile() && fullPath.endsWith('.astro')) {
      files.push(fullPath);
    }
  }

  return files;
}

const violations = [];

for (const root of sharedRoots) {
  const fullRoot = join(workspaceRoot, root);
  if (!statSync(fullRoot).isDirectory()) {
    continue;
  }

  for (const file of walk(fullRoot)) {
    const relPath = relative(workspaceRoot, file).replaceAll('\\', '/');
    const source = readFileSync(file, 'utf8');

    if (!source.includes('resolveLink(')) {
      continue;
    }

    if (!allowedStrictConsumers.has(relPath)) {
      violations.push(relPath);
    }
  }
}

if (violations.length > 0) {
  console.error('AMARA shared link policy check failed.');
  console.error('Optional shared surfaces should not introduce new strict resolveLink() usage.');
  console.error('Review these files and switch optional link groups to resolveOptionalLink(..., { suppressMissing: true }) when appropriate:');
  for (const violation of violations) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

console.log('AMARA shared link policy check passed.');
console.log('Only approved shared surfaces use strict resolveLink().');
