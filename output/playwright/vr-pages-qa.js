async (page) => {
  const slugs = [
    'la-amara-farah',
    'la-amara-lounis',
    'la-amara-zaid',
    'la-amara-maha',
    'la-amara-playa',
    'la-amara-family-and-surf',
  ];

  const viewports = [
    { name: 'desktop', width: 1440, height: 1100 },
    { name: 'mobile', width: 390, height: 844 },
  ];

  const results = [];

  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    for (const slug of slugs) {
      const url = `http://127.0.0.1:4321/${slug}`;
      await page.goto(url, { waitUntil: 'networkidle' });

      const galleryImages = await page
        .locator('section[aria-labelledby="rental-gallery-title"] img')
        .all();

      for (const image of galleryImages) {
        await image.scrollIntoViewIfNeeded();
        await page.waitForTimeout(120);
      }

      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(250);
      await page.screenshot({
        path: `output/playwright/vr-${slug}-${viewport.name}.png`,
        fullPage: true,
      });

      const result = await page.evaluate(() => {
        const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'));
        const graphNodes = scripts.flatMap((script) => {
          try {
            const parsed = JSON.parse(script.textContent || '{}');
            return Array.isArray(parsed?.['@graph']) ? parsed['@graph'] : [parsed];
          } catch {
            return [];
          }
        });
        const rentalNode = graphNodes.find((node) => node?.['@type'] === 'VacationRental');
        const images = Array.from(document.images).map((img) => ({
          src: img.getAttribute('src'),
          complete: img.complete,
          naturalWidth: img.naturalWidth,
          naturalHeight: img.naturalHeight,
        }));

        return {
          title: document.title,
          h1: document.querySelector('h1')?.textContent?.trim() || '',
          overflowX:
            document.documentElement.scrollWidth > Math.ceil(window.innerWidth) + 1,
          scrollWidth: document.documentElement.scrollWidth,
          viewportWidth: window.innerWidth,
          schema: {
            hasVacationRental: Boolean(rentalNode),
            identifier: rentalNode?.identifier?.value || rentalNode?.identifier || '',
            imageCount: Array.isArray(rentalNode?.image) ? rentalNode.image.length : 0,
            occupancy: rentalNode?.containsPlace?.occupancy?.value || null,
          },
          brokenImages: images.filter((img) => img.complete && img.naturalWidth === 0),
          galleryImageCount: document.querySelectorAll(
            'section[aria-labelledby="rental-gallery-title"] img',
          ).length,
        };
      });

      results.push({ slug, viewport: viewport.name, ...result });
    }
  }

  return results;
}
