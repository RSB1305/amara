// Shared UTC date helpers for the two booking calendars — the multi-stay search
// finder and the single-stay booking calendar. Pure functions and constants
// only: no DOM, no state, no locale. Both controllers previously carried
// byte-identical copies of these.

export const DAY_MS = 86_400_000;
export const MAX_NIGHTS = 45;
export const MAX_ADVANCE_DAYS = 730;

export const isoDay = (date: Date): string => date.toISOString().slice(0, 10);

export const dateFromIso = (value: string): Date => new Date(value + 'T00:00:00.000Z');

export const addDays = (value: string, amount: number): string => {
  const date = dateFromIso(value);
  date.setUTCDate(date.getUTCDate() + amount);
  return isoDay(date);
};

export const addMonths = (date: Date, amount: number): Date =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + amount, 1));

export const monthStart = (value: string | Date): Date => {
  const date = typeof value === 'string' ? dateFromIso(value) : value;
  return new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), 1));
};

export const monthEnd = (date: Date): Date =>
  new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0));

export const monthKey = (date: Date): string => isoDay(date).slice(0, 7);

export const nightsBetween = (arrival: string, departure: string): number =>
  Math.round(
    (Date.parse(departure + 'T00:00:00.000Z') - Date.parse(arrival + 'T00:00:00.000Z')) / DAY_MS
  );

export const validIsoDay = (value: string | null): string => {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return '';
  const date = dateFromIso(value);
  return Number.isNaN(date.valueOf()) || isoDay(date) !== value ? '' : value;
};

// Weekday index with Monday as 0 (JS getUTCDay uses Sunday as 0), used to place
// the leading blanks of a month grid.
export const mondayFirstWeekday = (date: Date): number => (date.getUTCDay() + 6) % 7;
