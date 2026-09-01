const DAY_MS = 86_400_000;

const isoDay = (date: Date) => date.toISOString().slice(0, 10);
const dateFromIso = (value: string) => new Date(value + 'T00:00:00.000Z');
const addDays = (value: string, amount: number) =>
  isoDay(new Date(Date.parse(value + 'T00:00:00.000Z') + amount * DAY_MS));
const monthStart = (value: string | Date) => {
  const date = typeof value === 'string' ? dateFromIso(value) : value;
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
};
const addMonths = (date: Date, amount: number) =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + amount, 1));
const shiftIsoMonth = (value: string, amount: number) => {
  const date = dateFromIso(value);
  const targetMonth = new Date(Date.UTC(
    date.getUTCFullYear(),
    date.getUTCMonth() + amount,
    1
  ));
  const lastDay = new Date(Date.UTC(
    targetMonth.getUTCFullYear(),
    targetMonth.getUTCMonth() + 1,
    0
  )).getUTCDate();
  targetMonth.setUTCDate(Math.min(date.getUTCDate(), lastDay));
  return isoDay(targetMonth);
};

function element<T extends Element>(root: ParentNode, selector: string) {
  return root.querySelector<T>(selector);
}

function enhanceExperienceAccessForm(form: HTMLFormElement) {
  if (form.dataset.amExperienceEnhanced === 'true') return;

  const nativeArrivalWrap = element<HTMLElement>(form, '[data-am-experience-native-arrival]');
  const nativeDepartureWrap = element<HTMLElement>(form, '[data-am-experience-native-departure]');
  const arrival = element<HTMLInputElement>(form, '[data-am-experience-arrival]');
  const departure = element<HTMLInputElement>(form, '[data-am-experience-departure]');
  const arrivalWrap = element<HTMLElement>(form, '[data-am-experience-arrival-trigger-wrap]');
  const departureWrap = element<HTMLElement>(form, '[data-am-experience-departure-trigger-wrap]');
  const arrivalTrigger = element<HTMLButtonElement>(form, '[data-am-experience-arrival-trigger]');
  const departureTrigger = element<HTMLButtonElement>(form, '[data-am-experience-departure-trigger]');
  const arrivalValue = element<HTMLElement>(form, '[data-am-experience-arrival-value]');
  const departureValue = element<HTMLElement>(form, '[data-am-experience-departure-value]');
  const datePicker = element<HTMLElement>(form, '[data-am-experience-date-picker]');
  const calendar = element<HTMLElement>(form, '[data-am-booking-calendar]');
  const calendarStatus = element<HTMLElement>(form, '[data-am-booking-calendar-status]');
  const monthsRoot = element<HTMLElement>(form, '[data-am-booking-calendar-months]');
  const previous = element<HTMLButtonElement>(form, '[data-am-booking-calendar-prev]');
  const next = element<HTMLButtonElement>(form, '[data-am-booking-calendar-next]');
  const status = element<HTMLElement>(form, '[data-am-experience-status]');
  const submit = element<HTMLButtonElement>(form, '[data-am-experience-submit]');
  const submitLabel = element<HTMLElement>(form, '[data-am-experience-submit-label]');

  if (!nativeArrivalWrap || !nativeDepartureWrap || !arrival || !departure ||
    !arrivalWrap || !departureWrap || !arrivalTrigger || !departureTrigger ||
    !arrivalValue || !departureValue || !datePicker || !calendar || !calendarStatus ||
    !monthsRoot || !previous || !next || !status || !submit || !submitLabel) return;

  form.dataset.amExperienceEnhanced = 'true';
  nativeArrivalWrap.hidden = true;
  nativeDepartureWrap.hidden = true;
  arrivalWrap.hidden = false;
  departureWrap.hidden = false;
  arrival.required = false;
  departure.required = false;

  const language = form.dataset.lang || 'en';
  const today = isoDay(new Date());
  let anchorMonth = monthStart(arrival.value || today);
  let selectionMode: 'arrival' | 'departure' = arrival.value ? 'departure' : 'arrival';
  let activeTrigger = arrivalTrigger;
  let focusDate = arrival.value || today;

  const formatDate = (value: string) => new Intl.DateTimeFormat(language, {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'
  }).format(dateFromIso(value));
  const formatFullDate = (value: string) => new Intl.DateTimeFormat(language, {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  }).format(dateFromIso(value));
  const formatMonth = (date: Date) => new Intl.DateTimeFormat(language, {
    month: 'long', year: 'numeric', timeZone: 'UTC'
  }).format(date);
  const weekdayLabels = () => Array.from({ length: 7 }, (_, index) =>
    new Intl.DateTimeFormat(language, { weekday: 'short', timeZone: 'UTC' })
      .format(new Date(Date.UTC(2026, 0, 5 + index)))
  );
  const canSelect = (value: string) =>
    selectionMode === 'arrival' || Boolean(arrival.value && value > arrival.value);
  const calendarHelp = () => departure.value
    ? form.dataset.datePickerCompleteHelp || ''
    : selectionMode === 'departure'
      ? form.dataset.datePickerDepartureHelp || ''
      : form.dataset.datePickerHelp || '';

  const updateTriggers = () => {
    arrivalValue.textContent = arrival.value
      ? formatDate(arrival.value)
      : form.dataset.chooseArrivalLabel || '';
    departureValue.textContent = departure.value
      ? formatDate(departure.value)
      : form.dataset.chooseDepartureLabel || '';
  };

  const applyRange = (button: HTMLButtonElement, value: string) => {
    if (!arrival.value) return;
    if (!departure.value) {
      if (value === arrival.value) button.dataset.range = 'start';
      return;
    }
    if (value < arrival.value || value > departure.value) return;
    button.dataset.range = value === arrival.value
      ? 'start'
      : value === departure.value
        ? 'end'
        : 'middle';
  };

  const renderMonth = (date: Date) => {
    const section = document.createElement('section');
    section.className = 'am-booking-calendar__month';

    const title = document.createElement('h3');
    title.className = 'am-booking-calendar__month-title';
    title.textContent = formatMonth(date);
    section.append(title);

    const weekdays = document.createElement('div');
    weekdays.className = 'am-booking-calendar__weekdays';
    weekdayLabels().forEach((label) => {
      const weekday = document.createElement('span');
      weekday.className = 'am-booking-calendar__weekday am-text-label text-on-surface-variant';
      weekday.textContent = label;
      weekdays.append(weekday);
    });
    section.append(weekdays);

    const days = document.createElement('div');
    days.className = 'am-booking-calendar__days';
    const firstWeekday = (date.getUTCDay() + 6) % 7;
    const dayCount = new Date(Date.UTC(
      date.getUTCFullYear(), date.getUTCMonth() + 1, 0
    )).getUTCDate();

    for (let index = 0; index < firstWeekday; index += 1) {
      const blank = document.createElement('span');
      blank.className = 'am-booking-calendar__blank';
      blank.setAttribute('aria-hidden', 'true');
      days.append(blank);
    }

    for (let day = 1; day <= dayCount; day += 1) {
      const value = isoDay(new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), day)));
      const button = document.createElement('button');
      button.className = 'am-booking-calendar__day';
      button.type = 'button';
      button.dataset.amBookingDay = value;
      button.disabled = !canSelect(value);
      button.tabIndex = value === focusDate && !button.disabled ? 0 : -1;
      button.setAttribute('aria-label', formatFullDate(value));
      button.setAttribute('aria-pressed', String(value === arrival.value || value === departure.value));
      applyRange(button, value);

      const number = document.createElement('span');
      number.className = 'am-booking-calendar__day-number';
      number.textContent = String(day);
      button.append(number);
      days.append(button);
    }

    section.append(days);
    return section;
  };

  const focusRenderedDate = () => {
    requestAnimationFrame(() => {
      element<HTMLButtonElement>(calendar, `[data-am-booking-day="${focusDate}"]`)?.focus();
    });
  };
  const render = () => {
    calendarStatus.textContent = calendarHelp();
    monthsRoot.replaceChildren(renderMonth(anchorMonth));
    updateTriggers();
  };
  const closeCalendar = (restoreFocus = false) => {
    calendar.hidden = true;
    arrivalTrigger.setAttribute('aria-expanded', 'false');
    departureTrigger.setAttribute('aria-expanded', 'false');
    if (restoreFocus) activeTrigger.focus();
  };
  const openCalendar = (
    mode: 'arrival' | 'departure',
    trigger: HTMLButtonElement
  ) => {
    selectionMode = mode === 'departure' && arrival.value ? 'departure' : 'arrival';
    activeTrigger = selectionMode === 'departure' ? departureTrigger : arrivalTrigger;
    const selectedDate = selectionMode === 'departure'
      ? departure.value || addDays(arrival.value, 1)
      : arrival.value || today;
    focusDate = selectedDate;
    anchorMonth = monthStart(selectedDate);
    calendar.hidden = false;
    arrivalTrigger.setAttribute('aria-expanded', String(activeTrigger === arrivalTrigger));
    departureTrigger.setAttribute('aria-expanded', String(activeTrigger === departureTrigger));
    render();
    focusRenderedDate();
    if (trigger !== activeTrigger) activeTrigger.focus();
  };
  const moveFocus = (nextDate: string) => {
    let candidate = nextDate;
    const direction = candidate < focusDate ? -1 : 1;
    for (let attempt = 0; attempt < 370 && !canSelect(candidate); attempt += 1) {
      candidate = addDays(candidate, direction);
    }
    focusDate = candidate;
    anchorMonth = monthStart(candidate);
    render();
    focusRenderedDate();
  };

  arrivalTrigger.addEventListener('click', () => {
    if (!calendar.hidden && activeTrigger === arrivalTrigger) closeCalendar();
    else openCalendar('arrival', arrivalTrigger);
  });
  departureTrigger.addEventListener('click', () => {
    if (!calendar.hidden && activeTrigger === departureTrigger) closeCalendar();
    else openCalendar('departure', departureTrigger);
  });
  previous.addEventListener('click', () => {
    anchorMonth = addMonths(anchorMonth, -1);
    focusDate = isoDay(anchorMonth);
    if (!canSelect(focusDate) && arrival.value) focusDate = addDays(arrival.value, 1);
    render();
    focusRenderedDate();
  });
  next.addEventListener('click', () => {
    anchorMonth = addMonths(anchorMonth, 1);
    focusDate = isoDay(anchorMonth);
    render();
    focusRenderedDate();
  });
  monthsRoot.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const button = target.closest<HTMLButtonElement>('[data-am-booking-day]');
    const value = button?.dataset.amBookingDay;
    if (!button || button.disabled || !value) return;

    if (selectionMode === 'arrival') {
      arrival.value = value;
      departure.value = '';
      selectionMode = 'departure';
      activeTrigger = departureTrigger;
      focusDate = addDays(value, 1);
      anchorMonth = monthStart(focusDate);
      arrivalTrigger.setAttribute('aria-expanded', 'false');
      departureTrigger.setAttribute('aria-expanded', 'true');
      render();
      focusRenderedDate();
      return;
    }

    departure.value = value;
    render();
    closeCalendar(true);
  });
  calendar.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeCalendar(true);
      return;
    }
    const target = event.target;
    if (!(target instanceof HTMLButtonElement) || !target.dataset.amBookingDay) return;
    const offsets: Record<string, number> = {
      ArrowLeft: -1,
      ArrowRight: 1,
      ArrowUp: -7,
      ArrowDown: 7
    };
    if (event.key in offsets) {
      event.preventDefault();
      moveFocus(addDays(target.dataset.amBookingDay, offsets[event.key]));
      return;
    }
    if (event.key === 'PageUp' || event.key === 'PageDown') {
      event.preventDefault();
      moveFocus(shiftIsoMonth(target.dataset.amBookingDay, event.key === 'PageUp' ? -1 : 1));
    }
  });
  document.addEventListener('pointerdown', (event) => {
    const target = event.target;
    if (calendar.hidden || !(target instanceof Node) || datePicker.contains(target)) return;
    closeCalendar();
  });

  const queryReason = new URLSearchParams(window.location.search).get('reason');
  if (queryReason) {
    status.textContent = queryReason === 'unavailable'
      ? form.dataset.unavailableMessage || ''
      : form.dataset.sessionEndedMessage || '';
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    if (!arrival.value || !departure.value || arrival.value >= departure.value) {
      status.textContent = form.dataset.datePickerRequiredMessage || '';
      openCalendar(arrival.value ? 'departure' : 'arrival', arrival.value ? departureTrigger : arrivalTrigger);
      return;
    }

    const data = new FormData(form);
    status.textContent = '';
    submit.disabled = true;
    submitLabel.textContent = form.dataset.pendingLabel || '';
    try {
      const response = await fetch('/api/guest/session', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          firstName: data.get('firstName'),
          arrival: data.get('arrival'),
          departure: data.get('departure'),
          lang: form.dataset.lang
        })
      });
      if (response.ok) {
        window.location.assign(form.dataset.guideHref || '/amara-experience/guide');
        return;
      }
      status.textContent = response.status >= 500
        ? form.dataset.unavailableMessage || ''
        : form.dataset.deniedMessage || '';
    } catch {
      status.textContent = form.dataset.unavailableMessage || '';
    } finally {
      submit.disabled = false;
      submitLabel.textContent = form.dataset.submitLabel || '';
    }
  });

  updateTriggers();
}

export function enhanceExperienceAccessForms() {
  document.querySelectorAll<HTMLFormElement>('[data-am-experience-form]')
    .forEach(enhanceExperienceAccessForm);
}
