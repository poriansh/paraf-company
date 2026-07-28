/**
 * Locale-aware formatters tailored for Persian (fa-IR).
 * Falls back to en-US if the runtime rejects Persian numbers.
 */

const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

const toPersianDigits = (input: string): string =>
  input.replace(/\d/g, (digit) => persianDigits[Number(digit)] ?? digit);

const faNumberFormatter = new Intl.NumberFormat("fa-IR", {
  useGrouping: true,
  maximumFractionDigits: 0,
});

const faCurrencyFormatter = new Intl.NumberFormat("fa-IR", {
  style: "currency",
  currency: "IRR",
  maximumFractionDigits: 0,
});

/** Format a number using Persian locale, e.g. 15400 -> "۱۵٬۴۰۰" */
export const formatPersianNumber = (value: number | string): string => {
  const numeric = typeof value === "number" ? value : Number(value);
  if (!Number.isFinite(numeric)) return toPersianDigits(String(value));
  return toPersianDigits(faNumberFormatter.format(numeric));
};

/** Format currency in Iranian Rial (Persian digits). */
export const formatPersianCurrency = (value: number): string =>
  toPersianDigits(faCurrencyFormatter.format(value));

/** Format phone numbers in Persian visual style: 09123456789 -> "۰۹۱۲ ۳۴۵ ۶۷۸۹" */
export const formatPersianPhone = (raw: string): string => {
  const digits = raw.replace(/\D/g, "");
  if (digits.length < 4) return toPersianDigits(digits);
  return toPersianDigits(
    `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`.trim(),
  );
};

/** Format ISO date with Persian locale. Example: "۱۴۰۳/۰۲/۱۵". */
export const formatPersianDate = (
  iso: string | Date,
  options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  },
): string => {
  const date = typeof iso === "string" ? new Date(iso) : iso;
  if (Number.isNaN(date.getTime())) return "—";
  return toPersianDigits(
    new Intl.DateTimeFormat("fa-IR", options).format(date),
  );
};

/** Convert Persian input to ASCII digits for backend compatibility. */
export const persianToAsciiDigits = (input: string): string =>
  input.replace(/[۰-۹]/g, (digit) =>
    String(persianDigits.indexOf(digit)),
  );

/** Compact large numbers: 12345 -> "12.3K"  */
export const formatCompactNumber = (value: number, locale = "fa-IR"): string =>
  new Intl.NumberFormat(locale, { notation: "compact" }).format(value);
