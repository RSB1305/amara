import { readFileSync } from 'node:fs';
import { expect, test } from '@playwright/test';

const headers = readFileSync(new URL('../../public/_headers', import.meta.url), 'utf8');

test('all site documents receive the approved security headers', () => {
  expect(headers).toMatch(/^\/\*$/m);
  expect(headers).toContain('X-Content-Type-Options: nosniff');
  expect(headers).toContain('Referrer-Policy: strict-origin-when-cross-origin');
  expect(headers).toContain('Permissions-Policy:');
  expect(headers).toContain('X-Frame-Options: DENY');
});

test('CSP remains report-only and uses the reviewed resource origins', () => {
  const csp = headers
    .split('\n')
    .find((line) => line.trim().startsWith('Content-Security-Policy-Report-Only:'));

  expect(csp).toBeDefined();
  expect(headers).not.toMatch(/^\s*Content-Security-Policy:/m);
  expect(csp).toContain("default-src 'self'");
  expect(csp).toContain("frame-ancestors 'none'");
  expect(csp).toContain('https://www.googletagmanager.com');
  expect(csp).toContain('https://api.open-meteo.com');
  expect(csp).toContain('https://www.youtube-nocookie.com');
  expect(csp).not.toContain(' *');
  expect(csp).not.toContain('report-uri');
  expect(csp).not.toContain('report-to');
});
