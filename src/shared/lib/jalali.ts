/**
 * Jalali (Persian) date helpers used by the Customer Club dashboards.
 * Implemented as a thin layer over Intl — keeps the calendar conversion
 * dependency-free and uses the host's ICU data, which is reliable on Node ≥ 18
 * and all modern browsers.
 */

export interface JalaliDateParts {
  year: number;
  month: number;
  day: number;
}

const persianCalendarFormatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

const extractParts = (date: Date): JalaliDateParts => {
  const parts = persianCalendarFormatter.formatToParts(date);
  const lookup = (type: string): number =>
    Number(parts.find((p) => p.type === type)?.value ?? "0");

  return {
    year: lookup("year"),
    month: lookup("month"),
    day: lookup("day"),
  };
};

const pad2 = (n: number): string => n.toString().padStart(2, "0");

/** Format a Date as a Jalali string, e.g. "۱۴۰۳/۰۲/۱۵". */
export const formatJalali = (input: Date | string): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  if (Number.isNaN(date.getTime())) return "—";
  const { year, month, day } = extractParts(date);
  return `${year}/${pad2(month)}/${pad2(day)}`;
};

/** Get Jalali parts for a given date. */
export const toJalaliParts = (input: Date | string): JalaliDateParts => {
  const date = typeof input === "string" ? new Date(input) : input;
  return extractParts(date);
};

/** Get the human-readable Jalali month name. */
export const getJalaliMonthName = (input: Date | string): string => {
  const date = typeof input === "string" ? new Date(input) : input;
  return new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    month: "long",
  }).format(date);
};
