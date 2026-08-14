import { readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

/**
 * Deterministic five-locale structural check for authored content modules.
 *
 * A multilingual edit is expected to leave en/de/es/nl/sv with the same shape:
 * the same number of sections, paragraphs, facts, links and FAQ entries. Spot
 * checking one locale has already let a stale Swedish block reach main, so this
 * compares all five by counting structural keys rather than reading prose.
 *
 * Only hand-written `Record<AmaraLanguage, ...>` blocks need the check. Modules
 * built through the `l(en, de, es, nl, sv)` helper cannot lose a locale without
 * failing TypeScript first.
 */

const workspaceRoot = process.cwd();
const contentRoot = join(workspaceRoot, 'src', 'content');
const locales = ['en', 'de', 'es', 'nl', 'sv'];

// Keys that describe structure. Prose keys such as `standfirst` are irrelevant:
// they exist once per block regardless of how much was written.
const structuralKeys = [
  'id',
  'title',
  'eyebrow',
  'paragraphs',
  'label',
  'value',
  'token',
  'href',
  'question',
  'answer',
  'difficulty',
  'experience'
];

// Arrays that map to rendered units and internal links. Their element counts
// must match exactly: a missing section, fact, day or link is a defect.
const structuralArrayKeys = ['sections', 'routeSections', 'routes', 'links', 'facts', 'items', 'days', 'worlds'];

// Prose arrays. Locales legitimately merge or split paragraphs to read
// naturally, so an unequal count is reported for review rather than failed.
// An array that is empty in one locale and populated in another is always a
// defect, though - that is exactly how a stale Swedish day chooser reached main.
const proseArrayKeys = ['paragraphs', 'intro', 'lead', 'standfirst'];

// Blocks below this size are seo/nav label maps, not authored page content.
const minimumBlockSize = 1500;

/**
 * Returns the index just past the object literal opening at `open`.
 * String and comment contents are skipped so authored braces cannot desync it.
 */
function matchBrace(source, open) {
  let depth = 0;

  for (let i = open; i < source.length; i += 1) {
    const char = source[i];

    if (char === "'" || char === '"' || char === '`') {
      i = skipString(source, i);
      continue;
    }

    if (char === '/' && source[i + 1] === '/') {
      while (i < source.length && source[i] !== '\n') i += 1;
      continue;
    }

    if (char === '/' && source[i + 1] === '*') {
      i = source.indexOf('*/', i) + 1;
      continue;
    }

    if (char === '{') {
      depth += 1;
    } else if (char === '}') {
      depth -= 1;
      if (depth === 0) return i + 1;
    }
  }

  return source.length;
}

/** Returns the index of the closing quote for the string opening at `start`. */
function skipString(source, start) {
  const quote = source[start];
  let i = start + 1;

  while (i < source.length) {
    if (source[i] === '\\') {
      i += 2;
      continue;
    }
    if (source[i] === quote) return i;
    if (quote === '`' && source[i] === '$' && source[i + 1] === '{') {
      let depth = 0;
      i += 1;
      for (; i < source.length; i += 1) {
        if (source[i] === '{') depth += 1;
        else if (source[i] === '}') {
          depth -= 1;
          if (depth === 0) break;
        }
      }
    }
    i += 1;
  }

  return i;
}

/**
 * Replaces string contents with empty quotes. Without this, authored prose can
 * match a key pattern, and key counts would depend on whether a locale writes
 * `id`, `eyebrow` and `title` on one line or on three.
 */
function stripStringContents(source) {
  let output = '';

  for (let i = 0; i < source.length; i += 1) {
    const char = source[i];
    if (char === "'" || char === '"' || char === '`') {
      i = skipString(source, i);
      output += '""';
      continue;
    }
    output += char;
  }

  return output;
}

/**
 * Returns the top-level element count of each array assigned to `key`, in
 * document order — one entry per occurrence, never summed.
 *
 * Counting keys alone is not enough: the defect this check exists for was a
 * Swedish `intro: []` next to three populated siblings. The key was present in
 * all five locales; only the contents were missing. Summing would hide it too,
 * so occurrences are compared position by position across locales.
 *
 * Expects a body whose string contents are already blanked.
 */
function countArrayElements(body, key) {
  const pattern = new RegExp(`[{,\\s]${key}:\\s*\\[`, 'g');
  const perOccurrence = [];
  let match;

  while ((match = pattern.exec(body)) !== null) {
    const open = body.indexOf('[', match.index);
    let depth = 0;
    let elements = 0;
    let sawContent = false;

    for (let i = open; i < body.length; i += 1) {
      const char = body[i];

      if (char === '[' || char === '{' || char === '(') {
        depth += 1;
        if (depth > 1) sawContent = true;
        continue;
      }

      if (char === ']' || char === '}' || char === ')') {
        depth -= 1;
        if (depth === 0) {
          perOccurrence.push(sawContent ? elements + 1 : 0);
          pattern.lastIndex = i;
          break;
        }
        continue;
      }

      if (depth === 1) {
        if (char === ',') elements += 1;
        else if (!/\s/.test(char)) sawContent = true;
      }
    }
  }

  return perOccurrence;
}

/** Sums a per-occurrence vector, for display only. */
const sum = (counts) => counts.reduce((total, count) => total + count, 0);

/** Collects every run of five same-indent locale blocks in author order. */
function findLocaleBlocks(source) {
  const marks = [];
  const pattern = /\n(\s+)(en|de|es|nl|sv):\s*\{/g;
  let match;

  while ((match = pattern.exec(source)) !== null) {
    const open = source.indexOf('{', match.index + match[0].length - 1);
    marks.push({
      locale: match[2],
      indent: match[1].length,
      open,
      end: matchBrace(source, open),
      line: source.slice(0, match.index).split('\n').length + 1
    });
  }

  const blocks = [];

  for (let i = 0; i + 4 < marks.length; i += 1) {
    const run = marks.slice(i, i + 5);
    if (run.map((mark) => mark.locale).join(',') !== locales.join(',')) continue;
    if (new Set(run.map((mark) => mark.indent)).size !== 1) continue;
    if (Math.max(...run.map((mark) => mark.end - mark.open)) < minimumBlockSize) continue;

    blocks.push(run);
    i += 4;
  }

  return blocks;
}

const violations = [];
const reviewNotes = [];
let blocksChecked = 0;

for (const entry of readdirSync(contentRoot, { withFileTypes: true })) {
  if (!entry.isFile() || !entry.name.endsWith('.ts')) continue;

  const filePath = join(contentRoot, entry.name);
  const relPath = relative(workspaceRoot, filePath).replaceAll('\\', '/');
  const source = readFileSync(filePath, 'utf8');

  for (const run of findLocaleBlocks(source)) {
    blocksChecked += 1;

    const bodies = run.map((mark) => stripStringContents(source.slice(mark.open, mark.end)));
    const mismatches = [];

    for (const key of structuralKeys) {
      const pattern = new RegExp(`[{,\\s]${key}:`, 'g');
      const counts = bodies.map((body) => (body.match(pattern) || []).length);
      if (new Set(counts).size > 1) mismatches.push({ key, counts });
    }

    for (const key of structuralArrayKeys) {
      const vectors = bodies.map((body) => countArrayElements(body, key));
      if (new Set(vectors.map((vector) => vector.join(','))).size > 1) {
        mismatches.push({ key: `${key}[]`, counts: vectors.map(sum) });
      }
    }

    for (const key of proseArrayKeys) {
      const vectors = bodies.map((body) => countArrayElements(body, key));
      const occurrences = Math.max(...vectors.map((vector) => vector.length));
      let emptyInSome = false;

      // Compare occurrence by occurrence: an array that is empty in one locale
      // while its counterpart is populated elsewhere is always a defect.
      for (let position = 0; position < occurrences; position += 1) {
        const atPosition = vectors.map((vector) => vector[position] ?? 0);
        const populated = atPosition.filter((count) => count > 0).length;
        if (populated > 0 && populated < atPosition.length) emptyInSome = true;
      }

      if (emptyInSome) {
        mismatches.push({
          key: `${key}[]`,
          counts: vectors.map(sum),
          note: 'populated in some locales, empty in others'
        });
      } else if (new Set(vectors.map(sum)).size > 1) {
        reviewNotes.push({ file: relPath, line: run[0].line, key: `${key}[]`, counts: vectors.map(sum) });
      }
    }

    if (mismatches.length > 0) {
      violations.push({ file: relPath, line: run[0].line, mismatches });
    }
  }
}

const format = (counts) => locales.map((locale, index) => `${locale}=${counts[index]}`).join('  ');

if (reviewNotes.length > 0) {
  console.log('Paragraph counts differ between locales. This is allowed when a locale merges or');
  console.log('splits sentences to read naturally, but check that no required information was lost:');
  for (const note of reviewNotes) {
    console.log(`- ${note.file}:${note.line}  ${note.key}: ${format(note.counts)}`);
  }
  console.log('');
}

if (violations.length > 0) {
  console.error('AMARA locale parity check failed.');
  console.error('These content blocks do not have the same structure in all five locales.');
  console.error('A missing section, fact, link or FAQ entry is a FAIL, not a style choice.');

  for (const violation of violations) {
    console.error(`\n- ${violation.file}:${violation.line}`);
    for (const { key, counts, note } of violation.mismatches) {
      console.error(`    ${key}: ${format(counts)}${note ? `  <- ${note}` : ''}`);
    }
  }

  process.exit(1);
}

console.log('AMARA locale parity check passed.');
console.log(`${blocksChecked} five-locale content blocks are structurally identical across en, de, es, nl and sv.`);
