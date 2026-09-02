type FinderCopy = Record<string, string>;

type SearchRateOption = {
  nightlyRate: number;
  minStay: number | null;
  maxStay: number | null;
};

type SearchCalendarDay = {
  available: boolean;
  currency: string | null;
  options: SearchRateOption[];
};

type MonthCacheEntry = {
  state: 'loading' | 'ready' | 'error';
};

const DAY_MS = 86_400_000;
const MAX_NIGHTS = 45;
const MAX_ADVANCE_DAYS = 730;
const desktopQuery = window.matchMedia('(min-width: 64rem)');

const isoDay = (date: Date) => date.toISOString().slice(0, 10);
const dateFromIso = (value: string) => new Date(value + 'T00:00:00.000Z');
const addDays = (value: string, amount: number) => {
  const date = dateFromIso(value);
  date.setUTCDate(date.getUTCDate() + amount);
  return isoDay(date);
};
const monthStart = (value: string | Date) => {
  const date = typeof value === 'string' ? dateFromIso(value) : value;
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
};
const addMonths = (date: Date, amount: number) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + amount, 1));
const monthEnd = (date: Date) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0));
const monthKey = (date: Date) => isoDay(date).slice(0, 7);
const nightsBetween = (arrival: string, departure: string) =>
  Math.round((Date.parse(departure + 'T00:00:00.000Z') - Date.parse(arrival + 'T00:00:00.000Z')) / DAY_MS);
const validIsoDay = (value: string | null) => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return '';
  const date = dateFromIso(value);
  return Number.isNaN(date.valueOf()) || isoDay(date) !== value ? '' : value;
};

function element<T extends Element>(root: ParentNode, selector: string) {
  return root.querySelector<T>(selector);
}

type SelectMenuController = {
  render: () => void;
  close: (restoreFocus?: boolean) => void;
};

function enhanceSelectMenu(
  container: HTMLElement,
  root: HTMLElement,
  select: HTMLSelectElement,
  compactLabels: MediaQueryList
): SelectMenuController | undefined {
  const trigger = element<HTMLButtonElement>(root, '[data-am-select-menu-trigger]');
  const value = element<HTMLElement>(root, '[data-am-select-menu-value]');
  const popover = element<HTMLElement>(root, '[data-am-select-menu-popover]');
  const listbox = element<HTMLElement>(root, '[data-am-select-menu-listbox]');
  if (!trigger || !value || !popover || !listbox) return;

  const labelFor = (option: HTMLOptionElement) => compactLabels.matches
    ? option.dataset.amGuestLabelCompact || option.dataset.amGuestLabel || option.textContent || ''
    : option.dataset.amGuestLabel || option.textContent || '';
  const optionButtons = () => [
    ...listbox.querySelectorAll<HTMLButtonElement>('[data-am-select-menu-option]')
  ];
  const closeOthers = () => {
    container.querySelectorAll<HTMLElement>('[data-am-select-menu-popover]').forEach((candidate) => {
      if (candidate === popover) return;
      candidate.hidden = true;
      candidate.closest('[data-am-select-menu]')
        ?.querySelector('[data-am-select-menu-trigger]')
        ?.setAttribute('aria-expanded', 'false');
    });
  };
  const render = () => {
    const selected = select.selectedOptions[0] || select.options[0];
    value.textContent = selected ? labelFor(selected) : '';
    listbox.replaceChildren(...[...select.options].map((option) => {
      const button = document.createElement('button');
      button.className = 'am-select-menu__option am-text-form-value';
      button.type = 'button';
      button.role = 'option';
      button.dataset.amSelectMenuOption = option.value;
      button.setAttribute('aria-selected', String(option.selected));
      button.textContent = labelFor(option);
      return button;
    }));
  };
  const close = (restoreFocus = false) => {
    popover.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) trigger.focus();
  };
  const open = (direction: 1 | -1 = 1) => {
    closeOthers();
    render();
    popover.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
    const buttons = optionButtons();
    const selectedIndex = Math.max(0, [...select.options].findIndex((option) => option.selected));
    const focusIndex = direction === -1 && selectedIndex === 0 ? buttons.length - 1 : selectedIndex;
    buttons[focusIndex]?.focus();
  };
  const choose = (button: HTMLButtonElement) => {
    const nextValue = button.dataset.amSelectMenuOption;
    if (nextValue === undefined) return;
    select.value = nextValue;
    select.dispatchEvent(new Event('change', { bubbles: true }));
    render();
    close(true);
  };
  const moveFocus = (event: KeyboardEvent, offset: number) => {
    const buttons = optionButtons();
    const currentIndex = Math.max(0, buttons.indexOf(event.target as HTMLButtonElement));
    buttons[(currentIndex + offset + buttons.length) % buttons.length]?.focus();
  };

  trigger.hidden = false;
  render();
  trigger.addEventListener('click', () => {
    if (popover.hidden) open();
    else close();
  });
  trigger.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    open(event.key === 'ArrowDown' ? 1 : -1);
  });
  listbox.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLButtonElement>('[data-am-select-menu-option]');
    if (button) choose(button);
  });
  listbox.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(event, event.key === 'ArrowDown' ? 1 : -1);
      return;
    }
    const buttons = optionButtons();
    if (event.key === 'Home' || event.key === 'End') {
      event.preventDefault();
      buttons[event.key === 'Home' ? 0 : buttons.length - 1]?.focus();
      return;
    }
    if (event.key === 'Escape') {
      event.preventDefault();
      close(true);
      return;
    }
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    const target = event.target;
    if (target instanceof HTMLButtonElement) choose(target);
  });
  document.addEventListener('pointerdown', (event) => {
    const target = event.target;
    if (popover.hidden || !(target instanceof Node) || root.contains(target)) return;
    close();
  });
  select.addEventListener('change', render);

  return { render, close };
}

export function enhanceStaySearchFinders() {
  document.querySelectorAll<HTMLElement>('[data-am-stay-search-finder]').forEach((container) => {
    if (container.dataset.amStaySearchEnhanced === 'true') return;
    const copy = JSON.parse(container.dataset.amStaySearchCopy || '{}') as FinderCopy;
    const language = container.dataset.amStaySearchLanguage || 'en';
    const form = element<HTMLFormElement>(container, '[data-am-stay-search-form]');
    const destination = element<HTMLSelectElement>(container, '[data-am-stay-search-destination]');
    const arrival = element<HTMLInputElement>(container, '[data-am-stay-search-arrival]');
    const departure = element<HTMLInputElement>(container, '[data-am-stay-search-departure]');
    const guests = element<HTMLSelectElement>(container, '[data-am-stay-search-guests]');
    const destinationMenuRoot = element<HTMLElement>(container, '[data-am-select-menu="destination"]');
    const guestsMenuRoot = element<HTMLElement>(container, '[data-am-select-menu="guests"]');
    const arrivalWrap = element<HTMLElement>(container, '[data-am-stay-search-arrival-trigger-wrap]');
    const departureWrap = element<HTMLElement>(container, '[data-am-stay-search-departure-trigger-wrap]');
    const arrivalTrigger = element<HTMLButtonElement>(container, '[data-am-stay-search-arrival-trigger]');
    const departureTrigger = element<HTMLButtonElement>(container, '[data-am-stay-search-departure-trigger]');
    const arrivalValue = element<HTMLElement>(container, '[data-am-stay-search-arrival-value]');
    const departureValue = element<HTMLElement>(container, '[data-am-stay-search-departure-value]');
    const calendar = element<HTMLElement>(container, '[data-am-booking-calendar]');
    const status = element<HTMLElement>(container, '[data-am-booking-calendar-status]');
    const monthsRoot = element<HTMLElement>(container, '[data-am-booking-calendar-months]');
    const previous = element<HTMLButtonElement>(container, '[data-am-booking-calendar-prev]');
    const next = element<HTMLButtonElement>(container, '[data-am-booking-calendar-next]');
    const reset = element<HTMLButtonElement>(container, '[data-am-booking-calendar-reset]');
    const close = element<HTMLButtonElement>(container, '[data-am-booking-calendar-close]');
    const submit = element<HTMLButtonElement>(container, '[data-am-booking-calendar-submit]');
    const error = element<HTMLElement>(container, '[data-am-stay-search-error]');
    if (!form || !destination || !arrival || !departure || !guests || !destinationMenuRoot ||
      !guestsMenuRoot || !arrivalWrap ||
      !departureWrap || !arrivalTrigger || !departureTrigger || !arrivalValue ||
      !departureValue || !calendar || !status || !monthsRoot || !previous || !next ||
      !reset || !close || !submit || !error) return;

    const homeVariant = container.dataset.amStaySearchVariant === 'home';
    container.dataset.amStaySearchEnhanced = 'true';
    if (homeVariant) {
      container.querySelectorAll<HTMLElement>('[data-am-stay-search-control-label]')
        .forEach((label) => label.classList.add('sr-only'));
    }
    arrivalWrap.hidden = false;
    departureWrap.hidden = false;
    arrival.required = false;
    departure.required = false;

    const compactGuestLabels = window.matchMedia('(max-width: 639px)');
    let guestsMenu: SelectMenuController | undefined;
    const renderGuestLabels = () => {
      guests.querySelectorAll<HTMLOptionElement>('option').forEach((option) => {
        option.textContent = compactGuestLabels.matches
          ? option.dataset.amGuestLabelCompact || option.dataset.amGuestLabel || option.textContent
          : option.dataset.amGuestLabel || option.textContent;
      });
      guestsMenu?.render();
    };
    renderGuestLabels();
    compactGuestLabels.addEventListener('change', renderGuestLabels);

    const today = isoDay(new Date());
    const latest = addDays(today, MAX_ADVANCE_DAYS);
    const firstMonth = monthStart(today);
    const lastMonth = monthStart(latest);
    let anchorMonth = firstMonth;
    let selectionMode: 'arrival' | 'departure' | 'complete' = 'arrival';
    let activeTrigger = arrivalTrigger;
    let hoverDate = '';
    let calendarFeedback = '';
    let calendarFeedbackState: '' | 'minimum-stay' | 'stay-continuity' = '';
    let availabilityGeneration = 0;
    const monthCache = new Map<string, MonthCacheEntry>();
    const stayDays = new Map<string, Map<string, SearchCalendarDay>>();

    arrival.min = today;
    arrival.max = latest;
    departure.min = addDays(today, 1);
    departure.max = latest;

    const params = new URLSearchParams(window.location.search);
    const initialArrival = validIsoDay(params.get('arrival'));
    const initialDeparture = validIsoDay(params.get('departure'));
    const initialGuests = Number(params.get('guests'));
    const initialDestination = params.get('destination');
    if (destination.querySelector('option[value="' + initialDestination + '"]')) {
      destination.value = initialDestination || 'all';
    }
    if (Number.isInteger(initialGuests) && initialGuests >= 1 && initialGuests <= 2) {
      guests.value = String(initialGuests);
    }
    if (initialArrival >= today && initialDeparture > initialArrival &&
      initialDeparture <= latest && nightsBetween(initialArrival, initialDeparture) <= MAX_NIGHTS) {
      arrival.value = initialArrival;
      departure.value = initialDeparture;
      departure.min = addDays(initialArrival, 1);
      selectionMode = 'complete';
      anchorMonth = monthStart(initialArrival);
    }

    enhanceSelectMenu(container, destinationMenuRoot, destination, compactGuestLabels);
    guestsMenu = enhanceSelectMenu(container, guestsMenuRoot, guests, compactGuestLabels);

    const visibleMonths = () => desktopQuery.matches ? 2 : 1;
    const visibleMonthDates = () => Array.from(
      { length: visibleMonths() },
      (_, index) => addMonths(anchorMonth, index)
    );
    const visibleEntries = () => visibleMonthDates().map((date) => monthCache.get(monthKey(date)));
    const visibleLoading = () => visibleEntries().some((entry) => !entry || entry.state === 'loading');
    const visibleError = () => visibleEntries().some((entry) => entry?.state === 'error');
    const maxAnchor = () => addMonths(lastMonth, -(visibleMonths() - 1));
    const clampAnchor = () => {
      if (anchorMonth < firstMonth) anchorMonth = firstMonth;
      if (anchorMonth > maxAnchor()) anchorMonth = maxAnchor();
    };
    const formatDate = (value: string) => new Intl.DateTimeFormat(language, {
      day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
    }).format(dateFromIso(value));
    const formatFullDate = (value: string) => new Intl.DateTimeFormat(language, {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
    }).format(dateFromIso(value));
    const weekdayLabels = () => Array.from({ length: 7 }, (_, index) => {
      const date = new Date(Date.UTC(2026, 0, 5 + index));
      return new Intl.DateTimeFormat(language, { weekday: 'short', timeZone: 'UTC' }).format(date);
    });
    const updateTriggers = () => {
      arrivalValue.textContent = arrival.value
        ? (homeVariant ? copy.arrival + ' · ' : '') + formatDate(arrival.value)
        : homeVariant ? copy.arrival : copy.chooseArrival;
      departureValue.textContent = departure.value
        ? (homeVariant ? copy.departure + ' · ' : '') + formatDate(departure.value)
        : homeVariant ? copy.departure : copy.chooseDeparture;
    };
    const validRateOption = (option: unknown): option is SearchRateOption => {
      const candidate = option as Partial<SearchRateOption> | null;
      return (
        Number.isFinite(candidate?.nightlyRate) && Number(candidate?.nightlyRate) >= 0 &&
        (candidate?.minStay === null || (
          Number.isInteger(candidate?.minStay) && Number(candidate?.minStay) >= 0
        )) &&
        (candidate?.maxStay === null || (
          Number.isInteger(candidate?.maxStay) && Number(candidate?.maxStay) >= 0
        ))
      );
    };
    const optionAllows = (option: SearchRateOption, nights: number) => {
      const minimum = option.minStay && option.minStay > 0 ? option.minStay : 1;
      const maximum = option.maxStay && option.maxStay > 0
        ? Math.min(option.maxStay, MAX_NIGHTS)
        : MAX_NIGHTS;
      return minimum <= maximum && nights >= minimum && nights <= maximum;
    };
    const canChooseArrival = (value: string) => {
      if (value < today || value > latest) return false;
      return [...stayDays.values()].some((days) => {
        const day = days.get(value);
        return day?.available === true && day.options.some(validRateOption);
      });
    };
    const availableArrivalOptions = () => [...stayDays.values()].flatMap((days) => {
      const day = days.get(arrival.value);
      return day?.available === true ? day.options.filter(validRateOption) : [];
    });
    const minimumStayForArrival = () => {
      const options = availableArrivalOptions();
      if (!options.length) return 1;
      return Math.min(...options.map((option) =>
        option.minStay && option.minStay > 0 ? option.minStay : 1
      ));
    };
    const isMinimumStayViolation = (value: string) => {
      if (!arrival.value || value <= arrival.value) return false;
      const nights = nightsBetween(arrival.value, value);
      return nights >= 1 && nights < minimumStayForArrival();
    };
    const minimumStayFeedback = () => {
      const minimumStay = minimumStayForArrival();
      return copy.minimumStayViolation
        .replace('{arrival}', formatDate(arrival.value))
        .replace('{count}', String(minimumStay))
        .replace('{departure}', formatDate(addDays(arrival.value, minimumStay)));
    };
    const stayContinuityFeedback = (departureValue: string) => copy.stayContinuityViolation
      .replace('{arrival}', formatDate(arrival.value))
      .replace('{departure}', formatDate(departureValue));
    const hasAvailableDay = (value: string) => [...stayDays.values()].some(
      (days) => days.get(value)?.available === true
    );
    const priceDetails = (value: string) => {
      const prices = [...stayDays.values()].flatMap((days) => {
        const day = days.get(value);
        if (day?.available !== true || !day.currency) return [];
        return day.options.filter(validRateOption).map((option) => ({
          amount: option.nightlyRate,
          currency: day.currency as string
        }));
      });
      const currencies = new Set(prices.map((price) => price.currency));
      if (!prices.length || currencies.size !== 1) return undefined;
      const amount = Math.min(...prices.map((price) => price.amount));
      const formatted = new Intl.NumberFormat(language, {
        style: 'currency',
        currency: prices[0].currency,
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(amount);
      return {
        label: copy.fromPrice.replace('{price}', formatted),
        prefix: copy.fromPrice.replace('{price}', '').trim(),
        amount: formatted
      };
    };
    const canChooseDepartureForStay = (
      days: Map<string, SearchCalendarDay>,
      nights: number
    ) => {
      for (let index = 0; index < nights; index += 1) {
        if (days.get(addDays(arrival.value, index))?.available !== true) return false;
      }
      return days.get(arrival.value)?.options.some((option) => optionAllows(option, nights)) === true;
    };
    const canChooseDeparture = (value: string) => {
      if (!arrival.value || value <= arrival.value || value > latest) return false;
      const nights = nightsBetween(arrival.value, value);
      return nights >= 1 && nights <= MAX_NIGHTS &&
        [...stayDays.values()].some((days) => canChooseDepartureForStay(days, nights));
    };
    const canRestartArrival = (value: string) => selectionMode === 'departure' &&
      value <= arrival.value && canChooseArrival(value);
    const selectable = (value: string) => selectionMode === 'departure'
      ? canChooseDeparture(value) || canRestartArrival(value)
      : canChooseArrival(value);
    const applyRange = (preview = '') => {
      const end = departure.value || preview;
      monthsRoot.querySelectorAll<HTMLElement>('[data-am-booking-day]').forEach((button) => {
        const value = button.dataset.amBookingDay || '';
        button.removeAttribute('data-range');
        if (!arrival.value) return;
        if (!end) {
          if (value === arrival.value) button.dataset.range = 'start';
          return;
        }
        if (value < arrival.value || value > end) return;
        button.dataset.range = value === arrival.value ? 'start' : value === end ? 'end' : 'middle';
      });
    };
    const fetchSearchCalendar = async (searchParams: URLSearchParams) => {
      const url = '/api/booking/search-calendar?' + searchParams.toString();
      for (let attempt = 0; attempt < 2; attempt += 1) {
        let response: Response;
        try {
          response = await fetch(url, {
            method: 'GET',
            credentials: 'same-origin',
            headers: { Accept: 'application/json' }
          });
        } catch (error) {
          if (attempt === 0) {
            await new Promise((resolve) => window.setTimeout(resolve, 500));
            continue;
          }
          throw error;
        }
        let payload: Record<string, unknown>;
        try {
          payload = await response.json() as Record<string, unknown>;
        } catch {
          payload = {};
        }
        if (response.ok) return payload;
        if (attempt === 0 && (response.status === 429 || response.status >= 500)) {
          await new Promise((resolve) => window.setTimeout(resolve, 500));
          continue;
        }
        throw new Error('Stay search calendar request failed.');
      }
      throw new Error('Stay search calendar request failed.');
    };
    const monthWindow = (date: Date) => {
      const rawStart = isoDay(date);
      const rawEnd = isoDay(monthEnd(date));
      const start = rawStart < today ? today : rawStart;
      const end = rawEnd > latest ? latest : rawEnd;
      return start <= end ? { start, end } : undefined;
    };
    const loadMonth = async (date: Date) => {
      const key = monthKey(date);
      const existing = monthCache.get(key);
      if (existing) return existing;
      const window = monthWindow(date);
      if (!window) {
        const ready: MonthCacheEntry = { state: 'ready' };
        monthCache.set(key, ready);
        return ready;
      }

      const loading: MonthCacheEntry = { state: 'loading' };
      const generation = availabilityGeneration;
      const selectedDestination = destination.value;
      const selectedGuests = guests.value;
      monthCache.set(key, loading);
      render();
      try {
        const payload = await fetchSearchCalendar(new URLSearchParams({
          destination: selectedDestination,
          guests: selectedGuests,
          start: window.start,
          end: window.end
        }));
        if (generation !== availabilityGeneration) {
          return monthCache.get(key) ?? loading;
        }
        const expectedDates = Array.from(
          { length: nightsBetween(window.start, window.end) + 1 },
          (_, index) => addDays(window.start, index)
        );
        const responseStays = payload.stays as Array<{
          stay?: unknown;
          days?: Array<{
            date?: unknown;
            available?: unknown;
            currency?: unknown;
            options?: unknown;
          }>;
        }> | undefined;
        const stayKeys = Array.isArray(responseStays)
          ? responseStays.map((stay) => stay.stay)
          : [];
        const valid = payload.destination === selectedDestination &&
          payload.guests === Number(selectedGuests) &&
          payload.start === window.start &&
          payload.end === window.end &&
          Array.isArray(responseStays) &&
          stayKeys.every((stay) => typeof stay === 'string') &&
          new Set(stayKeys).size === stayKeys.length &&
          responseStays.every((stay) =>
            Array.isArray(stay.days) &&
            stay.days.length === expectedDates.length &&
            stay.days.every((day, index) =>
              day.date === expectedDates[index] &&
              typeof day.available === 'boolean' &&
              (day.currency === null || (
                typeof day.currency === 'string' && day.currency.trim().length > 0
              )) &&
              Array.isArray(day.options) &&
              day.options.every(validRateOption)
            )
          );
        if (!valid || !responseStays) {
          throw new Error('Stay search calendar contract failed.');
        }
        responseStays.forEach((stay) => {
          const stayKey = String(stay.stay);
          const days = stayDays.get(stayKey) ?? new Map<string, SearchCalendarDay>();
          stay.days?.forEach((day) => {
            days.set(String(day.date), {
              available: day.available === true,
              currency: typeof day.currency === 'string' ? day.currency : null,
              options: (day.options as SearchRateOption[]).filter(validRateOption)
            });
          });
          stayDays.set(stayKey, days);
        });
        const ready: MonthCacheEntry = { state: 'ready' };
        monthCache.set(key, ready);
        return ready;
      } catch {
        if (generation !== availabilityGeneration) {
          return monthCache.get(key) ?? loading;
        }
        const failed: MonthCacheEntry = { state: 'error' };
        monthCache.set(key, failed);
        return failed;
      } finally {
        render();
      }
    };
    const renderMonth = (date: Date) => {
      const monthState = monthCache.get(monthKey(date))?.state;
      const section = document.createElement('section');
      section.className = 'am-booking-calendar__month';
      section.dataset.amBookingMonth = monthKey(date);
      const heading = document.createElement('h3');
      heading.className = 'am-booking-calendar__month-title';
      heading.textContent = new Intl.DateTimeFormat(language, {
        month: 'long', year: 'numeric', timeZone: 'UTC'
      }).format(date);
      section.append(heading);
      const weekdays = document.createElement('div');
      weekdays.className = 'am-booking-calendar__weekdays';
      weekdayLabels().forEach((label) => {
        const item = document.createElement('span');
        item.className = 'am-booking-calendar__weekday am-text-label text-on-surface-variant';
        item.textContent = label;
        weekdays.append(item);
      });
      section.append(weekdays);
      const days = document.createElement('div');
      days.className = 'am-booking-calendar__days';
      const firstWeekday = (date.getUTCDay() + 6) % 7;
      for (let index = 0; index < firstWeekday; index += 1) {
        const blank = document.createElement('span');
        blank.className = 'am-booking-calendar__blank';
        blank.setAttribute('aria-hidden', 'true');
        days.append(blank);
      }
      const count = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0)).getUTCDate();
      for (let day = 1; day <= count; day += 1) {
        const value = isoDay(new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), day)));
        const button = document.createElement('button');
        const unresolved = value >= today && value <= latest && monthState !== 'ready';
        const loading = unresolved && monthState !== 'error';
        const isSelectable = !unresolved && selectable(value);
        const isSelectedArrival = selectionMode === 'departure' && value === arrival.value;
        const explainsMinimumStay = !unresolved && selectionMode === 'departure' &&
          hasAvailableDay(value) && !isSelectable && isMinimumStayViolation(value);
        const explainsStayContinuity = !unresolved && selectionMode === 'departure' &&
          value > arrival.value && hasAvailableDay(value) && !isSelectable && !explainsMinimumStay;
        const availableForMode = selectionMode === 'departure'
          ? isSelectedArrival || isSelectable || explainsMinimumStay || explainsStayContinuity
          : hasAvailableDay(value);
        button.type = 'button';
        button.className = 'am-booking-calendar__day';
        button.dataset.amBookingDay = value;
        if (canRestartArrival(value)) button.dataset.amBookingSelection = 'arrival';
        if (unresolved) button.dataset.amBookingDayState = loading ? 'loading' : 'error';
        else if (selectionMode === 'departure' && isSelectedArrival) {
          button.dataset.amBookingDayState = 'selected';
        }
        else if (selectionMode === 'departure' && hasAvailableDay(value) && !isSelectable) {
          button.dataset.amBookingDayState = 'restricted';
        }
        if (explainsMinimumStay) button.dataset.amBookingRestriction = 'minimum-stay';
        else if (explainsStayContinuity) button.dataset.amBookingRestriction = 'stay-continuity';
        button.disabled = !isSelectable && !explainsMinimumStay && !explainsStayContinuity;
        button.setAttribute('aria-disabled', String(button.disabled));
        if (loading) button.setAttribute('aria-busy', 'true');
        const availabilityLabel = availableForMode
          ? isSelectedArrival
            ? [copy.availableDay, copy.selectedArrival].join(', ')
            : canRestartArrival(value)
              ? [copy.availableDay, copy.newArrivalDay].join(', ')
            : !isSelectable && selectionMode === 'departure'
              ? [
                  copy.availableDay,
                  explainsMinimumStay
                    ? copy.minimumStayDeparture
                    : explainsStayContinuity
                      ? copy.stayContinuityDeparture
                      : copy.invalidDeparture
                ].join(', ')
              : copy.availableDay
          : copy.unavailableDay;
        const price = !unresolved && selectionMode !== 'departure' && hasAvailableDay(value)
          ? priceDetails(value)
          : undefined;
        button.setAttribute('aria-label', [
          formatFullDate(value),
          unresolved
            // The status above the calendar explains a failed request once.
            // Repeating that paragraph on every disabled date makes the grid
            // unusable with a screen reader.
            ? loading ? copy.loadingCalendar : copy.unavailableDay
            : [availabilityLabel, price?.label].filter(Boolean).join(', ')
        ].join(', '));
        button.tabIndex = isSelectable && (value === arrival.value || value === departure.value) ? 0 : -1;
        const number = document.createElement('span');
        number.className = 'am-booking-calendar__day-number';
        number.textContent = String(day);
        button.append(number);
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
    const render = () => {
      clampAnchor();
      monthsRoot.replaceChildren(...visibleMonthDates().map(renderMonth));
      previous.disabled = anchorMonth <= firstMonth || visibleLoading();
      next.disabled = anchorMonth >= maxAnchor() || visibleLoading();
      monthsRoot.setAttribute('aria-busy', String(visibleLoading()));
      delete status.dataset.amBookingCalendarStatusState;
      if (visibleLoading()) status.textContent = copy.loadingCalendar;
      else if (visibleError()) status.textContent = copy.calendarError;
      else if (calendarFeedback) {
        status.textContent = calendarFeedback;
        if (calendarFeedbackState) {
          status.dataset.amBookingCalendarStatusState = calendarFeedbackState;
        }
      }
      else if (selectionMode === 'departure') {
        const minimumStay = minimumStayForArrival();
        status.textContent = minimumStay > 1
          ? copy.minimumStayHelp
            .replace('{count}', String(minimumStay))
            .replace('{departure}', formatDate(addDays(arrival.value, minimumStay)))
          : copy.chooseDepartureHelp;
        if (minimumStay > 1) status.dataset.amBookingCalendarStatusState = 'minimum-stay';
      } else if (selectionMode === 'complete') status.textContent = copy.selectionCompleteHelp;
      else status.textContent = copy.calendarHelp;
      submit.disabled = !(arrival.value && departure.value);
      reset.disabled = !(arrival.value || departure.value);
      applyRange(hoverDate);
      const focusable = monthsRoot.querySelector<HTMLButtonElement>('[data-am-booking-day]:not(:disabled)');
      if (focusable && !monthsRoot.querySelector('[tabindex="0"]')) focusable.tabIndex = 0;
    };
    const ensureVisibleMonths = async () => {
      render();
      await Promise.all(visibleMonthDates().map(loadMonth));
      render();
    };
    const openCalendar = async (mode: 'arrival' | 'departure', trigger: HTMLButtonElement) => {
      selectionMode = mode;
      activeTrigger = trigger;
      const selected = mode === 'departure' && arrival.value ? arrival.value : arrival.value || today;
      anchorMonth = monthStart(selected);
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
    const resetDateSelection = (rerender = true) => {
      arrival.value = '';
      departure.value = '';
      departure.min = addDays(today, 1);
      selectionMode = 'arrival';
      activeTrigger = arrivalTrigger;
      hoverDate = '';
      calendarFeedback = '';
      calendarFeedbackState = '';
      error.hidden = true;
      updateTriggers();
      if (rerender) render();
    };

    arrivalTrigger.addEventListener('click', () => void openCalendar('arrival', arrivalTrigger));
    departureTrigger.addEventListener('click', () => void openCalendar('departure', departureTrigger));
    reset.addEventListener('click', () => resetDateSelection());
    close.addEventListener('click', () => closeCalendar());
    previous.addEventListener('click', async () => {
      if (visibleLoading() || anchorMonth <= firstMonth) return;
      anchorMonth = addMonths(anchorMonth, -1);
      await ensureVisibleMonths();
    });
    next.addEventListener('click', async () => {
      if (visibleLoading() || anchorMonth >= maxAnchor()) return;
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
        arrival.value = value;
        departure.value = '';
        departure.min = addDays(value, 1);
        selectionMode = 'departure';
        hoverDate = '';
        calendarFeedback = '';
        calendarFeedbackState = '';
        error.hidden = true;
        updateTriggers();
        render();
        return;
      }
      if (!canChooseDeparture(value)) {
        if (button.dataset.amBookingRestriction === 'minimum-stay') {
          calendarFeedback = minimumStayFeedback();
          calendarFeedbackState = 'minimum-stay';
          render();
        } else if (button.dataset.amBookingRestriction === 'stay-continuity') {
          calendarFeedback = stayContinuityFeedback(value);
          calendarFeedbackState = 'stay-continuity';
          arrival.value = '';
          departure.value = '';
          departure.min = addDays(today, 1);
          selectionMode = 'arrival';
          hoverDate = '';
          updateTriggers();
          render();
        }
        return;
      }
      departure.value = value;
      selectionMode = 'complete';
      hoverDate = '';
      calendarFeedback = '';
      calendarFeedbackState = '';
      error.hidden = true;
      updateTriggers();
      render();
    });
    monthsRoot.addEventListener('pointerover', (event) => {
      if (selectionMode !== 'departure' || departure.value) return;
      const target = event.target;
      if (!(target instanceof Element)) {
        hoverDate = '';
        applyRange();
        return;
      }
      const button = target.closest<HTMLButtonElement>('[data-am-booking-day]');
      if (!button || button.disabled || !canChooseDeparture(button.dataset.amBookingDay || '')) {
        hoverDate = '';
        applyRange();
        return;
      }
      hoverDate = button.dataset.amBookingDay || '';
      applyRange(hoverDate);
    });
    monthsRoot.addEventListener('pointerleave', () => { hoverDate = ''; applyRange(); });
    monthsRoot.addEventListener('keydown', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const current = target.closest<HTMLButtonElement>('[data-am-booking-day]');
      if (!current) return;
      const currentDate = current.dataset.amBookingDay || '';
      const weekday = (dateFromIso(currentDate).getUTCDay() + 6) % 7;
      const offsets: Record<string, number> = {
        ArrowLeft: -1, ArrowRight: 1, ArrowUp: -7, ArrowDown: 7, Home: -weekday, End: 6 - weekday
      };
      if (!(event.key in offsets)) return;
      event.preventDefault();
      const direction = Math.sign(offsets[event.key]) || 1;
      let candidate = addDays(currentDate, offsets[event.key]);
      for (let step = 0; step < MAX_NIGHTS; step += 1) {
        const nextButton = monthsRoot.querySelector<HTMLButtonElement>(
          '[data-am-booking-day="' + candidate + '"]:not(:disabled)'
        );
        if (nextButton) {
          current.tabIndex = -1;
          nextButton.tabIndex = 0;
          nextButton.focus();
          return;
        }
        candidate = addDays(candidate, direction);
      }
    });
    calendar.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') { event.preventDefault(); closeCalendar(); }
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
      if (arrival.value && !departure.value) {
        resetDateSelection();
        return;
      }
      closeCalendar(false);
    });
    const resetLiveCalendar = (openAfterReset = false) => {
      resetDateSelection(false);
      availabilityGeneration += 1;
      monthCache.clear();
      stayDays.clear();
      if (openAfterReset) void openCalendar('arrival', arrivalTrigger);
      else if (!calendar.hidden) void ensureVisibleMonths();
    };
    destination.addEventListener('change', () => {
      resetLiveCalendar(container.dataset.amStaySearchVariant === 'home');
    });
    guests.addEventListener('change', () => resetLiveCalendar());
    desktopQuery.addEventListener('change', () => {
      if (!calendar.hidden) void ensureVisibleMonths();
    });
    form.addEventListener('submit', (event) => {
      const nights = nightsBetween(arrival.value, departure.value);
      const valid = ['all', 'frigiliana', 'nerja', 'tarifa'].includes(destination.value) &&
        arrival.value >= today && departure.value > arrival.value && departure.value <= latest &&
        nights >= 1 && nights <= MAX_NIGHTS && Number(guests.value) >= 1 && Number(guests.value) <= 4;
      if (valid) return;
      event.preventDefault();
      error.hidden = false;
      if (!arrival.value) void openCalendar('arrival', arrivalTrigger);
      else if (!departure.value || nights < 1 || nights > MAX_NIGHTS) {
        void openCalendar('departure', departureTrigger);
      }
    });

    updateTriggers();
  });
}
