import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * AMARA section boundary policy.
 *
 * DR-DESIGN-018: equal-surface page sections receive one centrally owned
 * inset separator from `AmaraSection`; full-width outer rules are prohibited.
 * The rule had been restated in review many times and kept regressing, because
 * a Tailwind `border-b` on a page band looks like any other border in source
 * and only shows its problem once it renders edge to edge against the white
 * page surface. The CSS guard in `global.css` catches these at render time,
 * but a rule that is only enforced after the fact keeps getting re-added.
 *
 * This check closes the source side. It fails for every page-gutter band
 * (`px-6 md:px-12`, the signature of an outer section) that carries a Tailwind
 * edge rule (`border-t`, `border-b`, `border-y`), and for every `AmaraSection`
 * or `LocationModule` consumer that passes one in its class list. Structural
 * borders inside lists, tables, controls and media frames never carry the
 * gutter signature and are not counted. Footers live outside the page shell
 * and are out of scope.
 */
const ROOT = process.cwd();
const SCAN_ROOT = join(ROOT, 'src');

const OUTER_TAG = /<(section|aside|header|article|div|main|nav)\b([^>]*)>/gs;
const OWNER_TAG = /<(AmaraSection|LocationModule)\b([^>]*)>/gs;
const TOKEN_EDGE = /(?:^|[\s'"`[])border-(?:t|b|y)(?=$|[\s'"`\]])/;
const TOKEN_PX6 = /(?:^|[\s'"`[])px-6(?=$|[\s'"`\]])/;
const TOKEN_MD_PX12 = /(?:^|[\s'"`[])md:px-12(?=$|[\s'"`\]])/;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const path = join(dir, entry);
    if (statSync(path).isDirectory()) walk(path, files);
    else if (path.endsWith('.astro') && !/Footer/.test(entry)) files.push(path);
  }
  return files;
}

const lineOf = (source, index) => source.slice(0, index).split('\n').length;
const summarize = (attrs) => attrs.replace(/\s+/g, ' ').trim().slice(0, 100);
const posixPath = (path) => relative(ROOT, path).split(sep).join('/');

export function scanSectionBoundaries(root = SCAN_ROOT) {
  const findings = [];
  for (const file of walk(root)) {
    const source = readFileSync(file, 'utf8');
    const path = posixPath(file);
    for (const match of source.matchAll(OUTER_TAG)) {
      const attrs = match[2];
      if (TOKEN_EDGE.test(attrs) && TOKEN_PX6.test(attrs) && TOKEN_MD_PX12.test(attrs)) {
        findings.push(`${path}:${lineOf(source, match.index)} <${match[1]}> ${summarize(attrs)}`);
      }
    }
    for (const match of source.matchAll(OWNER_TAG)) {
      if (TOKEN_EDGE.test(match[2])) {
        findings.push(`${path}:${lineOf(source, match.index)} <${match[1]}> ${summarize(match[2])}`);
      }
    }
  }
  return findings;
}

const isDirectRun = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  const findings = scanSectionBoundaries();
  if (findings.length > 0) {
    console.error(`[AMARA section boundary policy] ${findings.length} outer band(s) carry a Tailwind edge rule. Equal-surface sections get their inset separator from AmaraSection; remove border-t/border-b/border-y from these bands:`);
    for (const finding of findings) console.error(`  - ${finding}`);
    process.exit(1);
  }
  console.log('[AMARA section boundary policy] Passed: no page-gutter band carries a Tailwind edge rule.');
}
