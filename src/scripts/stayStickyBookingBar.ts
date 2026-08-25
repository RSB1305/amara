/**
 * Visibility rules for the compact booking bar on a vacation rental page.
 *
 * The bar exists to carry the from-price and one call to action through the
 * long middle of the page. It must never compete with the two places that
 * already own the decision: the hero decision block and the live booking
 * module. It therefore appears only after the hero block has left the viewport
 * and stands down again while the module is on screen.
 */
export function enhanceStayStickyBookingBar(): void {
  const bar = document.querySelector<HTMLElement>('[data-am-stay-sticky-cta]');
  const heroDecision = document.querySelector<HTMLElement>('[data-am-component="booking-decision"]');
  const bookingModule = document.querySelector<HTMLElement>('[data-am-stay-booking-calendar]');

  if (!bar || !heroDecision || !bookingModule || !('IntersectionObserver' in window)) return;

  let heroPassed = false;
  let moduleVisible = false;

  const update = () => {
    bar.hidden = !heroPassed || moduleVisible;
  };

  new IntersectionObserver(
    ([entry]) => {
      if (!entry) return;
      // Only a hero block that scrolled off the top counts as passed; one that
      // is still below the fold means the guest has not made it there yet.
      heroPassed = !entry.isIntersecting && entry.boundingClientRect.top < 0;
      update();
    },
    { threshold: 0 }
  ).observe(heroDecision);

  new IntersectionObserver(
    ([entry]) => {
      if (!entry) return;
      moduleVisible = entry.isIntersecting;
      update();
    },
    { threshold: 0 }
  ).observe(bookingModule);
}
