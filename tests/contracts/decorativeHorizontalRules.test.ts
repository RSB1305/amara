import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { expect, test } from '@playwright/test';

const readSource = (path: string) => readFileSync(resolve(process.cwd(), path), 'utf8');

test('the canonical section API exposes no decorative divider mechanism', () => {
  const sectionOwner = readSource('src/components/layout/AmaraSection.astro');
  const globalStyles = readSource('src/styles/global.css');

  expect(sectionOwner).not.toMatch(/divider\??\s*[:=]/);
  expect(sectionOwner).not.toContain('am-page-section--divided');
  expect(globalStyles).not.toContain('am-page-section--divided');
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
