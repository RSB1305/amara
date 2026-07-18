async (page) => {
  await page.locator('#rental-gallery-title').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);
  await page.locator('section[aria-labelledby="rental-gallery-title"] img').last().scrollIntoViewIfNeeded();
  await page.waitForTimeout(1200);

  return await page.$$eval(
    'section[aria-labelledby="rental-gallery-title"] img',
    (imgs) =>
      imgs.map((img) => ({
        src: img.getAttribute('src'),
        complete: img.complete,
        naturalWidth: img.naturalWidth,
        naturalHeight: img.naturalHeight,
      })),
  );
}
