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

const nightsBetween = (arrival: string, departure: string) =>
  Math.round(
    (Date.parse(departure + 'T00:00:00.000Z') - Date.parse(arrival + 'T00:00:00.000Z')) /
      DAY_MS
  );

const element = <T extends Element>(root: ParentNode, selector: string) =>
  root.querySelector<T>(selector);

export function enhanceMahaBookingCalendars() {
  document.querySelectorAll<HTMLElement>('[data-am-booking-canary]').forEach((container) => {
    if (container.dataset.amBookingEnhanced === 'true') return;

    const copy = JSON.parse(container.dataset.amBookingCopy || '{}') as BookingCopy;
    const language = container.dataset.amBookingLanguage || 'en';
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
    const closeButton = element<HTMLButtonElement>(
      container,
      '[data-am-booking-calendar-close]'
    );
    const clearButton = element<HTMLButtonElement>(
      container,
      '[data-am-booking-calendar-clear]'
    );
    const submit = element<HTMLButtonElement>(container, '[data-am-booking-submit]');
    const result = element<HTMLElement>(container, '[data-am-booking-result]');
    const status = element<HTMLElement>(container, '[data-am-booking-status]');
    const summary = element<HTMLElement>(container, '[data-am-booking-summary]');
    const priceWrap = element<HTMLElement>(container, '[data-am-booking-price-wrap]');
    const price = element<HTMLElement>(container, '[data-am-booking-price]');
    const note = element<HTMLElement>(container, '[data-am-booking-note]');

    if (
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
      !closeButton ||
      !clearButton ||
      !submit ||
      !result ||
      !status ||
      !summary ||
      !priceWrap ||
      !price ||
      !note
    ) {
      return;
    }

    container.dataset.amBookingEnhanced = 'true';
    arrivalTriggerWrap.hidden = false;
    departureTriggerWrap.hidden = false;
    arrivalInput.required = false;
    departureInput.required = false;

    const today = isoDay(new Date());
    const latest = addDays(today, MAX_ADVANCE_DAYS);
    const firstMonth = monthStart(today);
    const lastMonth = monthStart(latest);
    const desktopQuery = window.matchMedia(DESKTOP_MONTHS);
    const monthCache = new Map<string, CacheEntry>();
    const dayData = new Map<string, CalendarDay>();
    let anchorMonth = firstMonth;
    let selectionMode: 'arrival' | 'departure' = 'arrival';
    let activeTrigger = arrivalTrigger;
    let hoverDate = '';
    let quoteSignature = '';

    arrivalInput.min = today;
    arrivalInput.max = latest;
    departureInput.min = addDays(today, 1);
    departureInput.max = latest;

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

    const showState = ({
      state,
      title,
      body,
      priceText,
      detail
    }: {
      state: string;
      title: string;
      body: string;
      priceText?: string;
      detail: string;
    }) => {
      result.hidden = false;
      result.dataset.state = state;
      status.textContent = title;
      summary.textContent = body;
      priceWrap.hidden = !priceText;
      price.textContent = priceText || '';
      note.textContent = detail;
    };

    const clearResult = () => {
      result.hidden = true;
      result.removeAttribute('data-state');
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
    const visibleLoading = () => visibleEntries().some((entry) => entry?.state === 'loading');
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
      const params = new URLSearchParams({ stay: 'maha', start: window.start, end: window.end });
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
          availability.stay === 'maha' &&
          availability.start === window.start &&
          availability.end === window.end &&
          Array.isArray(availabilityDays) &&
          availabilityDays.length === expectedDates.length &&
          availabilityDays.every(
            (day, index) =>
              day.date === expectedDates[index] && typeof day.available === 'boolean'
          );
        const ratesValid =
          rates.stay === 'maha' &&
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
      if (dayData.get(value)?.available !== true) return false;
      for (let index = 0; index < nights; index += 1) {
        const night = dayData.get(addDays(arrival, index));
        if (!night || night.available !== true) return false;
      }
      return (
        dayData.get(arrival)?.options.some((option) => stayOptionAllows(option, nights)) === true
      );
    };

    const lowestNightlyPrice = (day: CalendarDay | undefined) =>
      day?.options.reduce(
        (lowest, option) => Math.min(lowest, option.nightlyRate),
        Number.POSITIVE_INFINITY
      );

    const priceLabel = (day: CalendarDay | undefined) => {
      const amount = lowestNightlyPrice(day);
      if (!Number.isFinite(amount) || !day?.currency) return '';
      const formatted = new Intl.NumberFormat(language, {
        style: 'currency',
        currency: day.currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(Number(amount));
      return copy.fromPrice.replace('{price}', formatted);
    };

    const applyRange = (preview = '') => {
      const arrival = arrivalInput.value;
      const departure = departureInput.value || preview;
      monthsRoot.querySelectorAll<HTMLElement>('[data-am-booking-day]').forEach((button) => {
        const value = button.dataset.amBookingDay || '';
        button.removeAttribute('data-range');
        if (!arrival || !departure || value < arrival || value > departure) return;
        if (value === arrival) button.dataset.range = 'start';
        else if (value === departure) button.dataset.range = 'end';
        else button.dataset.range = 'middle';
      });
    };

    const dayAriaLabel = (value: string, selectable: boolean, day: CalendarDay | undefined) => {
      const parts = [formatFullDate(value)];
      if (day?.available === true) {
        parts.push(copy.availableDay);
        const orientation = priceLabel(day);
        if (orientation) parts.push(orientation);
        if (!selectable && selectionMode === 'departure') parts.push(copy.invalidDeparture);
      } else {
        parts.push(copy.unavailableDay);
      }
      return parts.join(', ');
    };

    const renderMonth = (date: Date) => {
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
        const selectable =
          selectionMode === 'arrival' ? canSelectArrival(value) : canSelectDeparture(value);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'am-booking-calendar__day';
        button.dataset.amBookingDay = value;
        button.disabled = !selectable;
        button.setAttribute('aria-disabled', String(!selectable));
        button.setAttribute('aria-label', dayAriaLabel(value, selectable, day));
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
        const orientation = day?.available === true ? priceLabel(day) : '';
        if (orientation) {
          const priceText = document.createElement('span');
          priceText.className = 'am-booking-calendar__day-price';
          priceText.textContent = orientation;
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

    function renderCalendar() {
      renderMonthsRoot.replaceChildren(...visibleMonths().map(renderMonth));
      renderPreviousButton.disabled = anchorMonth <= firstMonth || visibleLoading();
      renderNextButton.disabled = anchorMonth >= maxAnchorMonth() || visibleLoading();
      if (visibleLoading()) renderCalendarStatus.textContent = copy.loadingCalendar;
      else if (visibleError()) renderCalendarStatus.textContent = copy.calendarError;
      else if (renderArrivalInput.value && !renderDepartureInput.value)
        renderCalendarStatus.textContent = copy.departureHelp;
      else renderCalendarStatus.textContent = copy.calendarHelp;
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

    const closeCalendar = () => {
      calendar.hidden = true;
      arrivalTrigger.setAttribute('aria-expanded', 'false');
      departureTrigger.setAttribute('aria-expanded', 'false');
      activeTrigger.focus();
    };

    const requestQuote = async () => {
      const arrival = arrivalInput.value;
      const departure = departureInput.value;
      const guests = Number(guestsInput.value);
      if (!arrival || !departure || !canSelectDeparture(departure)) {
        showState({ state: 'error', title: copy.invalidDates, body: '', detail: '' });
        return;
      }
      const signature = [arrival, departure, guests].join('|');
      if (quoteSignature === signature && result.dataset.state === 'available') return;
      quoteSignature = signature;
      submit.disabled = true;
      submit.textContent = copy.loading;
      form.setAttribute('aria-busy', 'true');
      showState({ state: 'loading', title: copy.loading, body: '', detail: '' });
      try {
        const params = new URLSearchParams({
          stay: 'maha',
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
          quote.stay !== 'maha' ||
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
        const formattedPrice = new Intl.NumberFormat(language, {
          style: 'currency',
          currency: quote.currency,
        }).format(Number(quote.grossTotal));
        const nights = nightsBetween(arrival, departure);
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
          detail: copy.quoteNote
        });
      } catch (error) {
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
          showState({ state: 'error', title: copy.error, body: '', detail: '' });
        }
      } finally {
        submit.disabled = false;
        submit.textContent = copy.submit;
        form.removeAttribute('aria-busy');
      }
    };

    arrivalTrigger.addEventListener('click', () => void openCalendar('arrival', arrivalTrigger));
    departureTrigger.addEventListener('click', () =>
      void openCalendar('departure', departureTrigger)
    );
    closeButton.addEventListener('click', closeCalendar);
    clearButton.addEventListener('click', () => {
      arrivalInput.value = '';
      departureInput.value = '';
      departureInput.min = addDays(today, 1);
      selectionMode = 'arrival';
      hoverDate = '';
      quoteSignature = '';
      updateTriggerValues();
      clearResult();
      renderCalendar();
    });
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
      if (selectionMode === 'arrival') {
        arrivalInput.value = value;
        departureInput.value = '';
        departureInput.min = addDays(value, 1);
        selectionMode = 'departure';
        activeTrigger = departureTrigger;
        hoverDate = '';
        quoteSignature = '';
        clearResult();
        updateTriggerValues();
        renderCalendar();
        return;
      }
      if (!canSelectDeparture(value)) return;
      departureInput.value = value;
      hoverDate = '';
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
      if (!button || button.disabled) return;
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
    calendar.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeCalendar();
      }
    });
    desktopQuery.addEventListener('change', () => {
      if (anchorMonth > maxAnchorMonth()) anchorMonth = maxAnchorMonth();
      if (!calendar.hidden) void ensureVisibleMonths();
    });

    updateTriggerValues();
  });
}
