import { buildCheckoutHandoffUrl } from '../lib/directBooking';
import type { AmaraLanguage } from '../types/seo';

type BookingCopy = Record<string, string>;

type RateOption = {
  nightlyRate: number;
  minStay: number | null;
  maxStay: number | null;
};

type CalendarDay = {
  available: boolean;
  currency: string;
  options: RateOption[];
};

type CacheEntry = {
  state: 'loading' | 'ready' | 'error';
};

type BookingRequestError = Error & {
  code?: string;
};

type StickyBookingState =
  | { state: 'idle' | 'loading' }
  | { state: 'available'; price: string; checkoutHref: string };

const DAY_MS = 86_400_000;
const MAX_NIGHTS = 45;
const MAX_ADVANCE_DAYS = 730;
const DESKTOP_MONTHS = '(min-width: 64rem)';

const isoDay = (date: Date) => date.toISOString().slice(0, 10);
const dateFromIso = (value: string) => new Date(value + 'T00:00:00.000Z');

const addDays = (value: string, days: number) => {
  const date = dateFromIso(value);
  date.setUTCDate(date.getUTCDate() + days);
  return isoDay(date);
};

const addMonths = (date: Date, months: number) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + months, 1));

const monthStart = (value: Date | string) => {
  const date = typeof value === 'string' ? dateFromIso(value) : value;
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
};

const monthEnd = (date: Date) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0));

const monthKey = (date: Date) => isoDay(date).slice(0, 7);
const validIsoInput = (value: string | null) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return '';
  const parsed = dateFromIso(value);
  return Number.isNaN(parsed.valueOf()) || isoDay(parsed) !== value ? '' : value;
};

const nightsBetween = (arrival: string, departure: string) =>
  Math.round(
    (Date.parse(departure + 'T00:00:00.000Z') - Date.parse(arrival + 'T00:00:00.000Z')) /
      DAY_MS
  );

const element = <T extends Element>(root: ParentNode, selector: string) =>
  root.querySelector<T>(selector);

export function enhanceStayBookingCalendars() {
  document.querySelectorAll<HTMLElement>('[data-am-stay-booking-calendar]').forEach((container) => {
    if (container.dataset.amBookingEnhanced === 'true') return;

    const copy = JSON.parse(container.dataset.amBookingCopy || '{}') as BookingCopy;
    const language = container.dataset.amBookingLanguage || 'en';
    const stay = container.dataset.amBookingStay || '';
    const form = element<HTMLFormElement>(container, '[data-am-booking-form]');
    const arrivalInput = element<HTMLInputElement>(container, '[data-am-booking-arrival]');
    const departureInput = element<HTMLInputElement>(container, '[data-am-booking-departure]');
    const guestsInput = element<HTMLSelectElement>(container, '[data-am-booking-guests]');
    const arrivalTriggerWrap = element<HTMLElement>(
      container,
      '[data-am-booking-arrival-trigger-wrap]'
    );
    const departureTriggerWrap = element<HTMLElement>(
      container,
      '[data-am-booking-departure-trigger-wrap]'
    );
    const arrivalTrigger = element<HTMLButtonElement>(
      container,
      '[data-am-booking-arrival-trigger]'
    );
    const departureTrigger = element<HTMLButtonElement>(
      container,
      '[data-am-booking-departure-trigger]'
    );
    const arrivalValue = element<HTMLElement>(container, '[data-am-booking-arrival-value]');
    const departureValue = element<HTMLElement>(container, '[data-am-booking-departure-value]');
    const calendar = element<HTMLElement>(container, '[data-am-booking-calendar]');
    const calendarStatus = element<HTMLElement>(
      container,
      '[data-am-booking-calendar-status]'
    );
    const monthsRoot = element<HTMLElement>(container, '[data-am-booking-calendar-months]');
    const previousButton = element<HTMLButtonElement>(
      container,
      '[data-am-booking-calendar-prev]'
    );
    const nextButton = element<HTMLButtonElement>(container, '[data-am-booking-calendar-next]');
    const resetButton = element<HTMLButtonElement>(container, '[data-am-booking-calendar-reset]');
    const closeButton = element<HTMLButtonElement>(container, '[data-am-booking-calendar-close]');
    const result = element<HTMLElement>(container, '[data-am-booking-result]');
    const status = element<HTMLElement>(container, '[data-am-booking-status]');
    const summary = element<HTMLElement>(container, '[data-am-booking-summary]');
    const priceWrap = element<HTMLElement>(container, '[data-am-booking-price-wrap]');
    const price = element<HTMLElement>(container, '[data-am-booking-price]');
    const note = element<HTMLElement>(container, '[data-am-booking-note]');
    const checkout = element<HTMLAnchorElement>(container, '[data-am-booking-checkout]');

    if (
      !stay ||
      !form ||
      !arrivalInput ||
      !departureInput ||
      !guestsInput ||
      !arrivalTriggerWrap ||
      !departureTriggerWrap ||
      !arrivalTrigger ||
      !departureTrigger ||
      !arrivalValue ||
      !departureValue ||
      !calendar ||
      !calendarStatus ||
      !monthsRoot ||
      !previousButton ||
      !nextButton ||
      !resetButton ||
      !closeButton ||
      !result ||
      !status ||
      !summary ||
      !priceWrap ||
      !price ||
      !note ||
      !checkout
    ) {
      return;
    }

    container.dataset.amBookingEnhanced = 'true';
    arrivalTriggerWrap.hidden = false;
    departureTriggerWrap.hidden = false;
    arrivalInput.required = false;
    departureInput.required = false;

    const compactGuestLabels = window.matchMedia('(max-width: 639px)');
    const renderGuestLabels = () => {
      guestsInput.querySelectorAll<HTMLOptionElement>('option').forEach((option) => {
        option.textContent = compactGuestLabels.matches
          ? option.dataset.amGuestLabelCompact || option.dataset.amGuestLabel || option.textContent
          : option.dataset.amGuestLabel || option.textContent;
      });
    };
    renderGuestLabels();
    compactGuestLabels.addEventListener('change', renderGuestLabels);

    const today = isoDay(new Date());
    const latest = addDays(today, MAX_ADVANCE_DAYS);
    const firstMonth = monthStart(today);
    const lastMonth = monthStart(latest);
    const desktopQuery = window.matchMedia(DESKTOP_MONTHS);
    const monthCache = new Map<string, CacheEntry>();
    const dayData = new Map<string, CalendarDay>();
    let anchorMonth = firstMonth;
    let selectionMode: 'arrival' | 'departure' | 'complete' = 'arrival';
    let activeTrigger = arrivalTrigger;
    let hoverDate = '';
    let quoteSignature = '';
    let quoteGeneration = 0;
    let calendarFeedback = '';

    arrivalInput.min = today;
    arrivalInput.max = latest;
    departureInput.min = addDays(today, 1);
    departureInput.max = latest;

    const initialParams = new URLSearchParams(window.location.search);
    const initialArrival = validIsoInput(initialParams.get('arrival'));
    const initialDeparture = validIsoInput(initialParams.get('departure'));
    const initialGuests = Number(initialParams.get('guests'));
    if (guestsInput.querySelector('option[value="' + initialGuests + '"]')) {
      guestsInput.value = String(initialGuests);
    }
    // Dates can arrive from a search result or a last-minute card. They are a
    // choice the guest already made elsewhere, so the module opens on them.
    let initialStayApplied = false;
    if (
      initialArrival >= today &&
      initialDeparture > initialArrival &&
      initialDeparture <= latest &&
      nightsBetween(initialArrival, initialDeparture) <= MAX_NIGHTS
    ) {
      arrivalInput.value = initialArrival;
      departureInput.value = initialDeparture;
      departureInput.min = addDays(initialArrival, 1);
      selectionMode = 'complete';
      anchorMonth = monthStart(initialArrival);
      initialStayApplied = true;
    }

    const visibleMonthCount = () => (desktopQuery.matches ? 2 : 1);
    const maxAnchorMonth = () => addMonths(lastMonth, -(visibleMonthCount() - 1));
    const replaceCount = (template: string, count: number) =>
      template.replace('{count}', String(count));
    const nightLabel = (count: number) =>
      replaceCount(count === 1 ? copy.night : copy.nights, count);
    const guestLabel = (count: number) =>
      replaceCount(count === 1 ? copy.guestOption : copy.guestOptionPlural, count);
    const formatDate = (value: string) =>
      new Intl.DateTimeFormat(language, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(dateFromIso(value));
    const formatFullDate = (value: string) =>
      new Intl.DateTimeFormat(language, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(dateFromIso(value));
    const formatMonth = (date: Date) =>
      new Intl.DateTimeFormat(language, {
        month: 'long',
        year: 'numeric',
        timeZone: 'UTC'
      }).format(date);
    const weekdays = Array.from({ length: 7 }, (_, index) =>
      new Intl.DateTimeFormat(language, {
        weekday: 'short',
        timeZone: 'UTC'
      }).format(new Date(Date.UTC(2026, 0, 5 + index)))
    );

    const announceStickyBookingState = (detail: StickyBookingState) => {
      container.dispatchEvent(new CustomEvent('am:stay-booking-state', {
        bubbles: true,
        detail
      }));
    };

    const showState = ({
      state,
      title,
      body,
      priceText,
      detail,
      checkoutHref
    }: {
      state: string;
      title: string;
      body: string;
      priceText?: string;
      detail: string;
      checkoutHref?: string;
    }) => {
      checkout.hidden = true;
      checkout.removeAttribute('href');
      result.hidden = false;
      result.dataset.state = state;
      status.textContent = title;
      summary.textContent = body;
      priceWrap.hidden = !priceText;
      price.textContent = priceText || '';
      note.textContent = detail;
      if (state === 'available' && priceText && checkoutHref) {
        checkout.href = checkoutHref;
        checkout.hidden = false;
        announceStickyBookingState({ state: 'available', price: priceText, checkoutHref });
      } else {
        announceStickyBookingState({ state: state === 'loading' ? 'loading' : 'idle' });
      }
    };

    const clearResult = () => {
      quoteGeneration += 1;
      form.removeAttribute('aria-busy');
      result.hidden = true;
      result.removeAttribute('data-state');
      checkout.hidden = true;
      checkout.removeAttribute('href');
      announceStickyBookingState({ state: 'idle' });
    };

    const fetchJson = async (path: string, searchParams: URLSearchParams) => {
      const response = await fetch(path + '?' + searchParams.toString(), {
        method: 'GET',
        credentials: 'same-origin',
        headers: { Accept: 'application/json' }
      });
      let payload: Record<string, unknown>;
      try {
        payload = (await response.json()) as Record<string, unknown>;
      } catch {
        payload = {};
      }
      if (!response.ok) {
        const requestError = new Error('Booking gateway request failed.') as BookingRequestError;
        const publicError = payload.error as { code?: string } | undefined;
        requestError.code = publicError?.code;
        throw requestError;
      }
      return payload;
    };

    const visibleMonths = () =>
      Array.from({ length: visibleMonthCount() }, (_, index) => addMonths(anchorMonth, index));
    const visibleEntries = () => visibleMonths().map((date) => monthCache.get(monthKey(date)));
    const visibleLoading = () =>
      visibleEntries().some((entry) => !entry || entry.state === 'loading');
    const visibleError = () => visibleEntries().some((entry) => entry?.state === 'error');

    const monthWindow = (date: Date) => {
      const rawStart = isoDay(date);
      const rawEnd = isoDay(monthEnd(date));
      const start = rawStart < today ? today : rawStart;
      const end = rawEnd > latest ? latest : rawEnd;
      return start <= end ? { start, end } : null;
    };

    const validRateOption = (option: unknown): option is RateOption => {
      const candidate = option as Partial<RateOption> | null;
      return (
        Number.isFinite(candidate?.nightlyRate) &&
        Number(candidate?.nightlyRate) >= 0 &&
        (candidate?.minStay === null ||
          (Number.isInteger(candidate?.minStay) && Number(candidate?.minStay) >= 0)) &&
        (candidate?.maxStay === null ||
          (Number.isInteger(candidate?.maxStay) && Number(candidate?.maxStay) >= 0))
      );
    };

    const loadMonth = async (date: Date) => {
      const key = monthKey(date);
      const existing = monthCache.get(key);
      if (existing) return existing;
      const window = monthWindow(date);
      if (!window) {
        const empty: CacheEntry = { state: 'ready' };
        monthCache.set(key, empty);
        return empty;
      }

      const loading: CacheEntry = { state: 'loading' };
      monthCache.set(key, loading);
      renderCalendar();
      const params = new URLSearchParams({ stay, start: window.start, end: window.end });
      try {
        const [availability, rates] = await Promise.all([
          fetchJson('/api/booking/availability', params),
          fetchJson('/api/booking/rates', params)
        ]);
        const expectedDates = Array.from(
          { length: nightsBetween(window.start, window.end) + 1 },
          (_, index) => addDays(window.start, index)
        );
        const availabilityDays = availability.days as
          | Array<{ date?: string; available?: boolean }>
          | undefined;
        const rateDays = rates.days as
          | Array<{ date?: string; currency?: string; options?: unknown[] }>
          | undefined;
        const availabilityValid =
          availability.stay === stay &&
          availability.start === window.start &&
          availability.end === window.end &&
          Array.isArray(availabilityDays) &&
          availabilityDays.length === expectedDates.length &&
          availabilityDays.every(
            (day, index) =>
              day.date === expectedDates[index] && typeof day.available === 'boolean'
          );
        const ratesValid =
          rates.stay === stay &&
          rates.start === window.start &&
          rates.end === window.end &&
          Array.isArray(rateDays) &&
          rateDays.length === expectedDates.length &&
          rateDays.every(
            (day, index) =>
              day.date === expectedDates[index] &&
              typeof day.currency === 'string' &&
              Array.isArray(day.options) &&
              day.options.every(validRateOption)
          );
        if (!availabilityValid || !ratesValid || !availabilityDays || !rateDays) {
          throw new Error('Booking gateway calendar contract failed.');
        }

        expectedDates.forEach((value, index) => {
          const availabilityDay = availabilityDays[index];
          const rateDay = rateDays[index];
          dayData.set(value, {
            available: availabilityDay.available === true,
            currency: rateDay.currency || '',
            options: (rateDay.options || []).filter(validRateOption)
          });
        });
        const ready: CacheEntry = { state: 'ready' };
        monthCache.set(key, ready);
        return ready;
      } catch {
        const failed: CacheEntry = { state: 'error' };
        monthCache.set(key, failed);
        return failed;
      } finally {
        renderCalendar();
      }
    };

    const stayOptionAllows = (option: RateOption, nights: number) => {
      const minimum =
        Number.isInteger(option.minStay) && Number(option.minStay) > 0
          ? Number(option.minStay)
          : 1;
      const maximum =
        Number.isInteger(option.maxStay) && Number(option.maxStay) > 0
          ? Math.min(Number(option.maxStay), MAX_NIGHTS)
          : MAX_NIGHTS;
      return minimum <= maximum && nights >= minimum && nights <= maximum;
    };

    const minimumStayForArrival = () => {
      const options = dayData.get(arrivalInput.value)?.options ?? [];
      if (!options.length) return 1;
      return Math.min(
        ...options.map((option) =>
          Number.isInteger(option.minStay) && Number(option.minStay) > 0
            ? Number(option.minStay)
            : 1
        )
      );
    };

    const isMinimumStayViolation = (value: string) => {
      const arrival = arrivalInput.value;
      if (!arrival || value <= arrival) return false;
      const nights = nightsBetween(arrival, value);
      return nights >= 1 && nights < minimumStayForArrival();
    };

    const minimumStayFeedback = () => {
      const minimumStay = minimumStayForArrival();
      return copy.minimumStayViolation
        .replace('{arrival}', formatDate(arrivalInput.value))
        .replace('{count}', String(minimumStay))
        .replace('{departure}', formatDate(addDays(arrivalInput.value, minimumStay)));
    };

    const canSelectArrival = (value: string) => {
      const day = dayData.get(value);
      return (
        value >= today &&
        value <= latest &&
        day?.available === true &&
        day.options.some(validRateOption)
      );
    };

    const canSelectDeparture = (value: string) => {
      const arrival = arrivalInput.value;
      if (!arrival || value <= arrival || value > latest) return false;
      const nights = nightsBetween(arrival, value);
      if (!Number.isInteger(nights) || nights < 1 || nights > MAX_NIGHTS) return false;
      for (let index = 0; index < nights; index += 1) {
        const night = dayData.get(addDays(arrival, index));
        if (!night || night.available !== true) return false;
      }
      return (
        dayData.get(arrival)?.options.some((option) => stayOptionAllows(option, nights)) === true
      );
    };

    const canRestartArrival = (value: string) =>
      selectionMode === 'departure' &&
      value <= arrivalInput.value &&
      canSelectArrival(value);

    const lowestNightlyPrice = (day: CalendarDay | undefined) =>
      day?.options.reduce(
        (lowest, option) => Math.min(lowest, option.nightlyRate),
        Number.POSITIVE_INFINITY
      );

    const priceDetails = (day: CalendarDay | undefined) => {
      const amount = lowestNightlyPrice(day);
      if (!Number.isFinite(amount) || !day?.currency) return undefined;
      const formatted = new Intl.NumberFormat(language, {
        style: 'currency',
        currency: day.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Number(amount));
      return {
        label: copy.fromPrice.replace('{price}', formatted),
        prefix: copy.fromPrice.replace('{price}', '').trim(),
        amount: formatted
      };
    };

    const applyRange = (preview = '') => {
      const arrival = arrivalInput.value;
      const departure = departureInput.value || preview;
      monthsRoot.querySelectorAll<HTMLElement>('[data-am-booking-day]').forEach((button) => {
        const value = button.dataset.amBookingDay || '';
        button.removeAttribute('data-range');
        if (!arrival) return;
        if (!departure) {
          if (value === arrival) button.dataset.range = 'start';
          return;
        }
        if (value < arrival || value > departure) return;
        if (value === arrival) button.dataset.range = 'start';
        else if (value === departure) button.dataset.range = 'end';
        else button.dataset.range = 'middle';
      });
    };

    const dayAriaLabel = (
      value: string,
      selectable: boolean,
      day: CalendarDay | undefined,
      restartsArrival: boolean
    ) => {
      const parts = [formatFullDate(value)];
      const availableAsDeparture = selectionMode === 'departure' && selectable;
      if (day?.available === true || availableAsDeparture) {
        parts.push(copy.availableDay);
        const price = day?.available === true ? priceDetails(day) : undefined;
        if (price) parts.push(price.label);
        if (value === arrivalInput.value && selectionMode === 'departure') {
          parts.push(copy.selectedArrival);
        } else if (restartsArrival) {
          parts.push(copy.newArrivalDay);
        } else if (!selectable && selectionMode === 'departure') {
          parts.push(
            isMinimumStayViolation(value)
              ? copy.minimumStayDeparture
              : copy.invalidDeparture
          );
        }
      } else {
        parts.push(copy.unavailableDay);
      }
      return parts.join(', ');
    };

    const renderMonth = (date: Date) => {
      const monthState = monthCache.get(monthKey(date))?.state;
      const section = document.createElement('section');
      section.className = 'am-booking-calendar__month';
      section.dataset.amBookingMonth = monthKey(date);

      const heading = document.createElement('h3');
      heading.className = 'am-booking-calendar__month-title';
      heading.textContent = formatMonth(date);
      section.append(heading);

      const weekdayRow = document.createElement('div');
      weekdayRow.className = 'am-booking-calendar__weekdays';
      weekdays.forEach((weekday) => {
        const label = document.createElement('span');
        label.className =
          'am-booking-calendar__weekday am-text-label am-text-label--sm text-on-surface-variant';
        label.textContent = weekday;
        weekdayRow.append(label);
      });
      section.append(weekdayRow);

      const days = document.createElement('div');
      days.className = 'am-booking-calendar__days';
      const leadingBlanks = (date.getUTCDay() + 6) % 7;
      for (let index = 0; index < leadingBlanks; index += 1) {
        const blank = document.createElement('span');
        blank.className = 'am-booking-calendar__blank';
        blank.setAttribute('aria-hidden', 'true');
        days.append(blank);
      }

      const count = monthEnd(date).getUTCDate();
      for (let number = 1; number <= count; number += 1) {
        const value = isoDay(
          new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), number))
        );
        const day = dayData.get(value);
        const unresolved = value >= today && value <= latest && monthState !== 'ready';
        const loading = unresolved && monthState !== 'error';
        const restartsArrival = !unresolved && canRestartArrival(value);
        const selectable =
          !unresolved &&
          (selectionMode === 'departure'
            ? canSelectDeparture(value) || restartsArrival
            : canSelectArrival(value));
        const explainsMinimumStay =
          !unresolved &&
          selectionMode === 'departure' &&
          day?.available === true &&
          !selectable &&
          isMinimumStayViolation(value);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'am-booking-calendar__day';
        button.dataset.amBookingDay = value;
        if (restartsArrival) button.dataset.amBookingSelection = 'arrival';
        if (unresolved) button.dataset.amBookingDayState = loading ? 'loading' : 'error';
        else if (selectionMode === 'departure' && value === arrivalInput.value) {
          button.dataset.amBookingDayState = 'selected';
        }
        else if (selectionMode === 'departure' && day?.available === true && !selectable) {
          button.dataset.amBookingDayState = 'restricted';
        }
        if (explainsMinimumStay) button.dataset.amBookingRestriction = 'minimum-stay';
        button.disabled = !selectable && !explainsMinimumStay;
        button.setAttribute('aria-disabled', String(!selectable && !explainsMinimumStay));
        if (loading) button.setAttribute('aria-busy', 'true');
        button.setAttribute(
          'aria-label',
          unresolved
            ? [formatFullDate(value), loading ? copy.loadingCalendar : copy.calendarError].join(', ')
            : dayAriaLabel(value, selectable, day, restartsArrival)
        );
        button.tabIndex =
          selectable &&
          (value === departureInput.value ||
            value === arrivalInput.value ||
            (!arrivalInput.value && value === today))
            ? 0
            : -1;

        const dayNumber = document.createElement('span');
        dayNumber.className = 'am-booking-calendar__day-number';
        dayNumber.textContent = String(number);
        button.append(dayNumber);
        const price = !unresolved && day?.available === true ? priceDetails(day) : undefined;
        if (unresolved) {
          const loadingIndicator = document.createElement('span');
          loadingIndicator.className = 'am-booking-calendar__day-loading';
          loadingIndicator.setAttribute('aria-hidden', 'true');
          button.append(loadingIndicator);
        } else if (price) {
          const priceText = document.createElement('span');
          priceText.className = 'am-booking-calendar__day-price';
          const pricePrefix = document.createElement('span');
          pricePrefix.className = 'am-booking-calendar__day-price-prefix';
          pricePrefix.textContent = price.prefix;
          const priceAmount = document.createElement('span');
          priceAmount.className = 'am-booking-calendar__day-price-amount';
          priceAmount.textContent = price.amount;
          priceText.append(pricePrefix, priceAmount);
          button.append(priceText);
        }
        days.append(button);
      }
      section.append(days);
      return section;
    };

    const renderMonthsRoot = monthsRoot;
    const renderPreviousButton = previousButton;
    const renderNextButton = nextButton;
    const renderCalendarStatus = calendarStatus;
    const renderArrivalInput = arrivalInput;
    const renderDepartureInput = departureInput;
    const renderResetButton = resetButton;

    function renderCalendar() {
      renderMonthsRoot.replaceChildren(...visibleMonths().map(renderMonth));
      renderPreviousButton.disabled = anchorMonth <= firstMonth || visibleLoading();
      renderNextButton.disabled = anchorMonth >= maxAnchorMonth() || visibleLoading();
      if (visibleLoading()) renderCalendarStatus.textContent = copy.loadingCalendar;
      else if (visibleError()) renderCalendarStatus.textContent = copy.calendarError;
      else if (calendarFeedback) renderCalendarStatus.textContent = calendarFeedback;
      else if (renderArrivalInput.value && !renderDepartureInput.value) {
        const minimumStay = minimumStayForArrival();
        renderCalendarStatus.textContent = minimumStay > 1
          ? copy.minimumStayHelp.replace('{count}', String(minimumStay))
          : copy.departureHelp;
      }
      else renderCalendarStatus.textContent = copy.calendarHelp;
      renderResetButton.disabled = !(renderArrivalInput.value || renderDepartureInput.value);
      applyRange(hoverDate);

      const enabledDays = Array.from(
        renderMonthsRoot.querySelectorAll<HTMLButtonElement>(
          '[data-am-booking-day]:not(:disabled)'
        )
      );
      if (enabledDays.length && !enabledDays.some((button) => button.tabIndex === 0)) {
        enabledDays[0].tabIndex = 0;
      }
    }

    const ensureVisibleMonths = async () => {
      renderCalendar();
      await Promise.all(visibleMonths().map(loadMonth));
      renderCalendar();
    };

    const updateTriggerValues = () => {
      arrivalValue.textContent = arrivalInput.value
        ? formatDate(arrivalInput.value)
        : copy.chooseArrival;
      departureValue.textContent = departureInput.value
        ? formatDate(departureInput.value)
        : copy.chooseDeparture;
    };

    const openCalendar = async (
      mode: 'arrival' | 'departure',
      trigger: HTMLButtonElement
    ) => {
      selectionMode = mode === 'departure' && arrivalInput.value ? 'departure' : 'arrival';
      calendarFeedback = '';
      activeTrigger = trigger;
      const selected =
        selectionMode === 'departure'
          ? departureInput.value || arrivalInput.value
          : arrivalInput.value;
      if (selected) {
        anchorMonth = monthStart(selected);
        if (anchorMonth > maxAnchorMonth()) anchorMonth = maxAnchorMonth();
      }
      calendar.hidden = false;
      arrivalTrigger.setAttribute('aria-expanded', String(trigger === arrivalTrigger));
      departureTrigger.setAttribute('aria-expanded', String(trigger === departureTrigger));
      await ensureVisibleMonths();
    };

    const closeCalendar = (restoreFocus = true) => {
      calendar.hidden = true;
      arrivalTrigger.setAttribute('aria-expanded', 'false');
      departureTrigger.setAttribute('aria-expanded', 'false');
      if (restoreFocus) activeTrigger.focus();
    };
    const resetDateSelection = () => {
      arrivalInput.value = '';
      departureInput.value = '';
      departureInput.min = addDays(today, 1);
      selectionMode = 'arrival';
      activeTrigger = arrivalTrigger;
      hoverDate = '';
      calendarFeedback = '';
      quoteSignature = '';
      clearResult();
      updateTriggerValues();
      renderCalendar();
    };

    /**
     * `trustInput` is set only for dates that arrived in the URL, where the
     * calendar's own availability map has not been loaded yet and would reject
     * a perfectly bookable stay. The gateway remains the authority either way:
     * an unavailable stay comes back as `quote_unavailable`.
     */
    const requestQuote = async (trustInput = false) => {
      const arrival = arrivalInput.value;
      const departure = departureInput.value;
      const guests = Number(guestsInput.value);
      if (!arrival || !departure || (!trustInput && !canSelectDeparture(departure))) {
        showState({ state: 'error', title: copy.invalidDates, body: '', detail: '' });
        return;
      }
      const signature = [arrival, departure, guests].join('|');
      if (quoteSignature === signature && result.dataset.state === 'available') return;
      quoteSignature = signature;
      const generation = ++quoteGeneration;
      form.setAttribute('aria-busy', 'true');
      showState({ state: 'loading', title: copy.loading, body: '', detail: '' });
      try {
        const params = new URLSearchParams({
          stay,
          arrival,
          departure,
          adults: String(guests),
          children: '0',
          pets: '0'
        });
        const quote = await fetchJson('/api/booking/quote', params);
        const quoteGuests = quote.guests as
          | { adults?: number; children?: number; pets?: number }
          | undefined;
        if (
          quote.stay !== stay ||
          quote.arrival !== arrival ||
          quote.departure !== departure ||
          quoteGuests?.adults !== guests ||
          quoteGuests.children !== 0 ||
          quoteGuests.pets !== 0 ||
          typeof quote.currency !== 'string' ||
          !Number.isFinite(quote.grossTotal)
        ) {
          throw new Error('Booking gateway quote contract failed.');
        }
        if (
          generation !== quoteGeneration ||
          [arrivalInput.value, departureInput.value, Number(guestsInput.value)].join('|') !== signature
        ) return;
        const formattedPrice = new Intl.NumberFormat(language, {
          style: 'currency',
          currency: quote.currency,
        }).format(Number(quote.grossTotal));
        const nights = nightsBetween(arrival, departure);
        const checkoutHref = buildCheckoutHandoffUrl({
          stay,
          lang: language as AmaraLanguage,
          arrival,
          departure,
          adults: guests,
          currency: String(quote.currency)
        });
        showState({
          state: 'available',
          title: copy.available,
          body:
            formatDate(arrival) +
            ' – ' +
            formatDate(departure) +
            ' · ' +
            nightLabel(nights) +
            ' · ' +
            guestLabel(guests),
          priceText: formattedPrice,
          detail: copy.quoteNote,
          checkoutHref
        });
      } catch (error) {
        if (generation !== quoteGeneration) return;
        quoteSignature = '';
        const requestError = error as BookingRequestError;
        if (requestError.code === 'quote_unavailable') {
          showState({
            state: 'unavailable',
            title: copy.unavailable,
            body: copy.unavailableBody,
            detail: formatDate(arrival) + ' – ' + formatDate(departure)
          });
        } else {
          showState({
            state: 'error',
            title: copy.error,
            body: '',
            detail: ''
          });
        }
      } finally {
        if (generation === quoteGeneration) form.removeAttribute('aria-busy');
      }
    };

    arrivalTrigger.addEventListener('click', () => void openCalendar('arrival', arrivalTrigger));
    departureTrigger.addEventListener('click', () =>
      void openCalendar('departure', departureTrigger)
    );
    resetButton.addEventListener('click', resetDateSelection);
    closeButton.addEventListener('click', () => closeCalendar());
    previousButton.addEventListener('click', async () => {
      if (visibleLoading() || anchorMonth <= firstMonth) return;
      anchorMonth = addMonths(anchorMonth, -1);
      await ensureVisibleMonths();
    });
    nextButton.addEventListener('click', async () => {
      if (visibleLoading() || anchorMonth >= maxAnchorMonth()) return;
      anchorMonth = addMonths(anchorMonth, 1);
      await ensureVisibleMonths();
    });

    monthsRoot.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest<HTMLButtonElement>('[data-am-booking-day]');
      if (!button || button.disabled) return;
      const value = button.dataset.amBookingDay || '';
      if (
        selectionMode === 'arrival' ||
        selectionMode === 'complete' ||
        button.dataset.amBookingSelection === 'arrival'
      ) {
        arrivalInput.value = value;
        departureInput.value = '';
        departureInput.min = addDays(value, 1);
        selectionMode = 'departure';
        activeTrigger = departureTrigger;
        hoverDate = '';
        calendarFeedback = '';
        quoteSignature = '';
        clearResult();
        updateTriggerValues();
        renderCalendar();
        return;
      }
      if (!canSelectDeparture(value)) {
        if (button.dataset.amBookingRestriction === 'minimum-stay') {
          calendarFeedback = minimumStayFeedback();
          calendarStatus.textContent = calendarFeedback;
        }
        return;
      }
      departureInput.value = value;
      selectionMode = 'complete';
      hoverDate = '';
      calendarFeedback = '';
      quoteSignature = '';
      updateTriggerValues();
      renderCalendar();
      void requestQuote();
    });

    monthsRoot.addEventListener('pointerover', (event) => {
      if (selectionMode !== 'departure' || departureInput.value) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest<HTMLButtonElement>('[data-am-booking-day]');
      if (!button || button.disabled || !canSelectDeparture(button.dataset.amBookingDay || '')) return;
      hoverDate = button.dataset.amBookingDay || '';
      applyRange(hoverDate);
    });
    monthsRoot.addEventListener('pointerleave', () => {
      hoverDate = '';
      applyRange();
    });
    monthsRoot.addEventListener('keydown', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const current = target.closest<HTMLButtonElement>('[data-am-booking-day]');
      if (!current) return;
      const currentDate = current.dataset.amBookingDay || '';
      const weekday = (dateFromIso(currentDate).getUTCDay() + 6) % 7;
      const offsets: Record<string, number> = {
        ArrowLeft: -1,
        ArrowRight: 1,
        ArrowUp: -7,
        ArrowDown: 7,
        Home: -weekday,
        End: 6 - weekday
      };
      if (!(event.key in offsets)) return;
      event.preventDefault();
      const direction = Math.sign(offsets[event.key]) || 1;
      let candidate = addDays(currentDate, offsets[event.key]);
      for (let step = 0; step < MAX_NIGHTS; step += 1) {
        const selector =
          '[data-am-booking-day="' + candidate + '"]:not(:disabled)';
        const next = monthsRoot.querySelector<HTMLButtonElement>(selector);
        if (next) {
          current.tabIndex = -1;
          next.tabIndex = 0;
          next.focus();
          return;
        }
        candidate = addDays(candidate, direction);
      }
    });

    guestsInput.addEventListener('change', () => {
      quoteSignature = '';
      if (arrivalInput.value && departureInput.value) void requestQuote();
      else clearResult();
    });
    // Selecting a departure quotes automatically, so the form carries no submit
    // control. This handler only keeps an implicit submit from navigating away.
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!arrivalInput.value) {
        void openCalendar('arrival', arrivalTrigger);
        return;
      }
      if (!departureInput.value) {
        void openCalendar('departure', departureTrigger);
        return;
      }
      void requestQuote();
    });

    // Page-level calls to action hand over to this module in place: they scroll
    // it into view and open the arrival picker, so the guest never lands on an
    // inert form and never leaves the page to check availability.
    document.querySelectorAll<HTMLElement>('[data-am-booking-open]').forEach((trigger) => {
      trigger.addEventListener('click', (event) => {
        if (!trigger.hasAttribute('data-am-booking-open')) return;
        event.preventDefault();
        const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        container.scrollIntoView({
          behavior: reducedMotion ? 'auto' : 'smooth',
          block: 'start'
        });
        void openCalendar('arrival', arrivalTrigger);
      });
    });
    calendar.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeCalendar();
      }
    });
    document.addEventListener('pointerdown', (event) => {
      const target = event.target;
      if (
        calendar.hidden ||
        !(target instanceof Node) ||
        calendar.contains(target) ||
        arrivalTrigger.contains(target) ||
        departureTrigger.contains(target)
      ) return;
      closeCalendar(false);
    });
    desktopQuery.addEventListener('change', () => {
      if (anchorMonth > maxAnchorMonth()) anchorMonth = maxAnchorMonth();
      if (!calendar.hidden) void ensureVisibleMonths();
    });

    updateTriggerValues();

    // Arriving with a chosen stay, the guest should see its total straight away
    // and still be able to change the dates in the same place.
    if (initialStayApplied) void requestQuote(true);
  });
}
