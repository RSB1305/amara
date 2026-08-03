import type { APIRoute } from 'astro';
import { vacationRentalEntities } from '../content/vacationRentalEntities';

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://amara-lodging.es');
  const eligibleRentals = vacationRentalEntities.filter(
    (rental) => rental.accommodationType === 'EntirePlace'
  );

  const urls = eligibleRentals
    .map((rental) => {
      const location = new URL(`/${rental.slug}`, origin).href;
      return `  <url>\n    <loc>${escapeXml(location)}</loc>\n  </url>`;
    })
    .join('\n');

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    ''
  ].join('\n');

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
