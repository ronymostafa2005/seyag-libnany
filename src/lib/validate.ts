export function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.trim().replace(/\s+/g, " ").slice(0, max);
}

export function digits(value: string) {
  return value.replace(/[^\d]/g, "");
}

export function isEgyptianMobile(value: string) {
  return /^01[0125]\d{8}$/.test(digits(value));
}

export function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}
