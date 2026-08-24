type FinderCopy = Record<string, string>;

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
    const close = element<HTMLButtonElement>(container, '[data-am-booking-calendar-close]');
    const clear = element<HTMLButtonElement>(container, '[data-am-booking-calendar-clear]');
    const error = element<HTMLElement>(container, '[data-am-stay-search-error]');
    if (!form || !destination || !arrival || !departure || !guests || !arrivalWrap ||
      !departureWrap || !arrivalTrigger || !departureTrigger || !arrivalValue ||
      !departureValue || !calendar || !status || !monthsRoot || !previous || !next ||
      !close || !clear || !error) return;

    container.dataset.amStaySearchEnhanced = 'true';
    arrivalWrap.hidden = false;
    departureWrap.hidden = false;
    arrival.required = false;
    departure.required = false;

    const today = isoDay(new Date());
    const latest = addDays(today, MAX_ADVANCE_DAYS);
    const firstMonth = monthStart(today);
    const lastMonth = monthStart(latest);
    let anchorMonth = firstMonth;
    let selectionMode: 'arrival' | 'departure' = 'arrival';
    let activeTrigger = arrivalTrigger;
    let hoverDate = '';

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
    if (Number.isInteger(initialGuests) && initialGuests >= 1 && initialGuests <= 4) {
      guests.value = String(initialGuests);
    }
    if (initialArrival >= today && initialDeparture > initialArrival &&
      initialDeparture <= latest && nightsBetween(initialArrival, initialDeparture) <= MAX_NIGHTS) {
      arrival.value = initialArrival;
      departure.value = initialDeparture;
      departure.min = addDays(initialArrival, 1);
      selectionMode = 'departure';
      anchorMonth = monthStart(initialArrival);
    }

    const visibleMonths = () => desktopQuery.matches ? 2 : 1;
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
      arrivalValue.textContent = arrival.value ? formatDate(arrival.value) : copy.chooseArrival;
      departureValue.textContent = departure.value ? formatDate(departure.value) : copy.chooseDeparture;
    };
    const canChooseDeparture = (value: string) => {
      if (!arrival.value || value <= arrival.value || value > latest) return false;
      const nights = nightsBetween(arrival.value, value);
      return nights >= 1 && nights <= MAX_NIGHTS;
    };
    const selectable = (value: string) => selectionMode === 'arrival'
      ? value >= today && value <= latest
      : canChooseDeparture(value);
    const applyRange = (preview = '') => {
      const end = departure.value || preview;
      monthsRoot.querySelectorAll<HTMLElement>('[data-am-booking-day]').forEach((button) => {
        const value = button.dataset.amBookingDay || '';
        button.removeAttribute('data-range');
        if (!arrival.value || !end || value < arrival.value || value > end) return;
        button.dataset.range = value === arrival.value ? 'start' : value === end ? 'end' : 'middle';
      });
    };
    const renderMonth = (date: Date) => {
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
        const isSelectable = selectable(value);
        button.type = 'button';
        button.className = 'am-booking-calendar__day';
        button.dataset.amBookingDay = value;
        button.disabled = !isSelectable;
        button.setAttribute('aria-disabled', String(!isSelectable));
        button.setAttribute('aria-label', [
          formatFullDate(value), isSelectable ? copy.availableDay : copy.unavailableDay
        ].join(', '));
        button.tabIndex = isSelectable && (value === arrival.value || value === departure.value) ? 0 : -1;
        const number = document.createElement('span');
        number.className = 'am-booking-calendar__day-number';
        number.textContent = String(day);
        button.append(number);
        days.append(button);
      }
      section.append(days);
      return section;
    };
    const render = () => {
      clampAnchor();
      monthsRoot.replaceChildren(...Array.from({ length: visibleMonths() }, (_, index) =>
        renderMonth(addMonths(anchorMonth, index))));
      previous.disabled = anchorMonth <= firstMonth;
      next.disabled = anchorMonth >= maxAnchor();
      status.textContent = selectionMode === 'departure' ? copy.chooseDepartureHelp : copy.calendarHelp;
      applyRange(hoverDate);
      const focusable = monthsRoot.querySelector<HTMLButtonElement>('[data-am-booking-day]:not(:disabled)');
      if (focusable && !monthsRoot.querySelector('[tabindex="0"]')) focusable.tabIndex = 0;
    };
    const openCalendar = (mode: 'arrival' | 'departure', trigger: HTMLButtonElement) => {
      selectionMode = mode;
      activeTrigger = trigger;
      const selected = mode === 'departure' && arrival.value ? arrival.value : arrival.value || today;
      anchorMonth = monthStart(selected);
      render();
      calendar.hidden = false;
      arrivalTrigger.setAttribute('aria-expanded', String(trigger === arrivalTrigger));
      departureTrigger.setAttribute('aria-expanded', String(trigger === departureTrigger));
    };
    const closeCalendar = () => {
      calendar.hidden = true;
      arrivalTrigger.setAttribute('aria-expanded', 'false');
      departureTrigger.setAttribute('aria-expanded', 'false');
      activeTrigger.focus();
    };

    arrivalTrigger.addEventListener('click', () => openCalendar('arrival', arrivalTrigger));
    departureTrigger.addEventListener('click', () => openCalendar('departure', departureTrigger));
    close.addEventListener('click', closeCalendar);
    clear.addEventListener('click', () => {
      arrival.value = '';
      departure.value = '';
      departure.min = addDays(today, 1);
      selectionMode = 'arrival';
      hoverDate = '';
      error.hidden = true;
      updateTriggers();
      render();
    });
    previous.addEventListener('click', () => { anchorMonth = addMonths(anchorMonth, -1); render(); });
    next.addEventListener('click', () => { anchorMonth = addMonths(anchorMonth, 1); render(); });
    monthsRoot.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest<HTMLButtonElement>('[data-am-booking-day]');
      if (!button || button.disabled) return;
      const value = button.dataset.amBookingDay || '';
      if (selectionMode === 'arrival') {
        arrival.value = value;
        departure.value = '';
        departure.min = addDays(value, 1);
        selectionMode = 'departure';
        hoverDate = '';
        error.hidden = true;
        updateTriggers();
        render();
        return;
      }
      if (!canChooseDeparture(value)) return;
      departure.value = value;
      hoverDate = '';
      error.hidden = true;
      updateTriggers();
      render();
    });
    monthsRoot.addEventListener('pointerover', (event) => {
      if (selectionMode !== 'departure' || departure.value) return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const button = target.closest<HTMLButtonElement>('[data-am-booking-day]');
      if (!button || button.disabled) return;
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
    desktopQuery.addEventListener('change', () => { if (!calendar.hidden) render(); });
    form.addEventListener('submit', (event) => {
      const nights = nightsBetween(arrival.value, departure.value);
      const valid = ['all', 'frigiliana', 'nerja', 'tarifa'].includes(destination.value) &&
        arrival.value >= today && departure.value > arrival.value && departure.value <= latest &&
        nights >= 1 && nights <= MAX_NIGHTS && Number(guests.value) >= 1 && Number(guests.value) <= 4;
      if (valid) return;
      event.preventDefault();
      error.hidden = false;
      if (!arrival.value) openCalendar('arrival', arrivalTrigger);
      else if (!departure.value || nights < 1 || nights > MAX_NIGHTS) openCalendar('departure', departureTrigger);
    });

    updateTriggers();
  });
}
