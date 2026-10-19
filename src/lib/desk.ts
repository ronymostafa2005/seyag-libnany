import { createHmac, timingSafeEqual } from "crypto";

const secret = process.env.DESK_SECRET || "nafaq-tunnel-45";

export function deskCode() {
  return process.env.DESK_CODE || "4545";
}

export function deskToken() {
  return createHmac("sha256", secret).update("nafaq-desk").digest("hex");
}

export function codeMatches(input: string) {
  const given = Buffer.from(input.trim());
  const expected = Buffer.from(deskCode());
  if (given.length !== expected.length) return false;
  return timingSafeEqual(given, expected);
}

export function tokenMatches(token: string | undefined) {
  if (!token) return false;
  const given = Buffer.from(token);
  const expected = Buffer.from(deskToken());
  if (given.length !== expected.length) return false;
  return timingSafeEqual(given, expected);
}
