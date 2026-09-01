/**
 * Visibility rules for the compact booking bar on a vacation rental page.
 *
 * The bar carries either the indicative from-price or a confirmed live total
 * through the long middle of the page. It must never compete with the two
 * places that already own the decision: the hero decision block and the live
 * booking module. It therefore appears only after the hero block has left the
 * viewport and stands down again while the module is on screen.
 */
export function enhanceStayStickyBookingBar(): void {
  const bar = document.querySelector<HTMLElement>('[data-am-stay-sticky-cta]');
  const heroDecision = document.querySelector<HTMLElement>('[data-am-component="booking-decision"]');
  const bookingModule = document.querySelector<HTMLElement>('[data-am-stay-booking-calendar]');
  const price = bar?.querySelector<HTMLElement>('[data-am-stay-sticky-price]');
  const action = bar?.querySelector<HTMLAnchorElement>('[data-am-stay-sticky-action]');
  const actionLabel = action?.querySelector<HTMLElement>('[data-am-stay-sticky-action-label]');

  if (
    !bar ||
    !heroDecision ||
    !bookingModule ||
    !price ||
    !action ||
    !actionLabel ||
    !('IntersectionObserver' in window)
  ) return;

  const defaultPrice = price.textContent || '';
  const defaultHref = action.getAttribute('href') || '';
  const defaultLabel = actionLabel.textContent || '';
  const bookingLabel = action.dataset.amStayStickyBookingLabel || defaultLabel;
  let heroPassed = false;
  let moduleVisible = false;
  let bookingState: 'idle' | 'loading' | 'available' = 'idle';

  const update = () => {
    bar.hidden = !heroPassed || moduleVisible || bookingState === 'loading';
  };

  const showDefaultAction = () => {
    bookingState = 'idle';
    price.textContent = defaultPrice;
    action.href = defaultHref;
    actionLabel.textContent = defaultLabel;
    action.setAttribute('data-am-booking-open', '');
    update();
  };

  const showBookingAction = (totalPrice: string, checkoutHref: string) => {
    bookingState = 'available';
    price.textContent = totalPrice;
    action.href = checkoutHref;
    actionLabel.textContent = bookingLabel;
    action.removeAttribute('data-am-booking-open');
    update();
  };

  bookingModule.addEventListener('am:stay-booking-state', (event) => {
    const detail = (event as CustomEvent<{
      state?: string;
      price?: string;
      checkoutHref?: string;
    }>).detail;
    if (detail?.state === 'loading') {
      bookingState = 'loading';
      update();
      return;
    }
    if (detail?.state === 'available' && detail.price && detail.checkoutHref) {
      showBookingAction(detail.price, detail.checkoutHref);
      return;
    }
    showDefaultAction();
  });

  // The calendar can start a quote from URL dates before this module runs.
  // Synchronize once from its rendered state so no early event is lost.
  const currentResult = bookingModule.querySelector<HTMLElement>('[data-am-booking-result]');
  const currentPrice = bookingModule.querySelector<HTMLElement>('[data-am-booking-price]');
  const currentCheckout = bookingModule.querySelector<HTMLAnchorElement>(
    '[data-am-booking-checkout]'
  );
  if (currentResult?.dataset.state === 'loading') {
    bookingState = 'loading';
  } else if (
    currentResult?.dataset.state === 'available' &&
    currentPrice?.textContent &&
    currentCheckout?.href
  ) {
    showBookingAction(currentPrice.textContent, currentCheckout.href);
  }

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
