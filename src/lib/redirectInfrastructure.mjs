export const ASTRO_REDIRECTS_START = '# @astro-redirects:start';
export const ASTRO_REDIRECTS_END = '# @astro-redirects:end';

/**
 * Reads the explicitly marked Cloudflare rules that Astro must also emit for
 * local/static routing. Redirect targets remain authored only in `_redirects`.
 */
export function parseAstroRedirects(source) {
  const rules = [];
  const violations = [];
  const sources = new Set();
  let insideSection = false;
  let startCount = 0;
  let endCount = 0;

  for (const [index, rawLine] of source.split(/\r?\n/).entries()) {
    const line = rawLine.trim();

    if (line === ASTRO_REDIRECTS_START) {
      startCount += 1;
      insideSection = true;
      continue;
    }

    if (line === ASTRO_REDIRECTS_END) {
      endCount += 1;
      insideSection = false;
      continue;
    }

    if (!insideSection || !line || line.startsWith('#')) {
      continue;
    }

    const fields = line.split(/\s+/);

    if (fields.length !== 3) {
      violations.push(
        `public/_redirects:${index + 1}: malformed Astro redirect "${line}"; expected source, target, and status.`
      );
      continue;
    }

    const [redirectSource, target, status] = fields;

    if (status !== '301') {
      violations.push(
        `public/_redirects:${index + 1}: Astro redirect ${redirectSource} -> ${target} must use status 301.`
      );
    }

    if (sources.has(redirectSource)) {
      violations.push(
        `public/_redirects:${index + 1}: duplicate Astro redirect source "${redirectSource}".`
      );
    }

    sources.add(redirectSource);
    rules.push({ source: redirectSource, target, status, line: index + 1 });
  }

  if (startCount !== 1 || endCount !== 1 || insideSection) {
    violations.push(
      `public/_redirects must contain exactly one matched ${ASTRO_REDIRECTS_START}/${ASTRO_REDIRECTS_END} section.`
    );
  }

  if (rules.length === 0) {
    violations.push('public/_redirects contains no marked Astro redirects.');
  }

  return { rules, violations };
}

export function buildAstroRedirects(source) {
  const result = parseAstroRedirects(source);

  if (result.violations.length > 0) {
    throw new Error(['Invalid AMARA redirect infrastructure:', ...result.violations].join('\n- '));
  }

  return Object.fromEntries(result.rules.map(({ source: path, target }) => [path, target]));
}
