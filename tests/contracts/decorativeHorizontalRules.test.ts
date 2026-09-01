import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, test } from '@playwright/test';

const readSource = (path: string) => readFileSync(resolve(process.cwd(), path), 'utf8');

test('the canonical section API owns one inset separator without a page-local switch', () => {
  const sectionOwner = readSource('src/components/layout/AmaraSection.astro');
  const globalStyles = readSource('src/styles/global.css');

  expect(sectionOwner).not.toMatch(/divider\??\s*[:=]/);
  expect(sectionOwner).toContain('am-page-section--inset-separated');
  expect(sectionOwner).toContain("surface === 'plain' && variant !== 'hero' && variant !== 'closing'");
  expect(globalStyles).toMatch(/\.am-page-section--inset-separated::before\s*\{[^}]*content:\s*'';[^}]*right:\s*0;[^}]*left:\s*0;/s);
  expect(globalStyles).toMatch(/\.am-section--plain::before\s*\{[^}]*right:\s*1\.5rem;[^}]*left:\s*1\.5rem;/s);
});

test('shared editorial display owners have no horizontal edge rules', () => {
  const owners = [
    'src/components/location/LocationGuideHero.astro',
    'src/components/editorial/EditorialClosingCta.astro',
    'src/components/conversion/BookingDecisionPanel.astro'
  ];

  for (const owner of owners) {
    const source = readSource(owner);
    expect(source, owner).not.toMatch(/\bborder-block\b|\bborder-y\b|\bborder-top\b|\bborder-bottom\b/);
    expect(source, owner).not.toMatch(/(?:^|\s)border-[tb](?:\s|$)/m);
  }
});
