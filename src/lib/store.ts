import { randomBytes } from "crypto";
import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

const dataDir = path.join(process.cwd(), "data");

let queue: Promise<unknown> = Promise.resolve();

function enqueue<T>(task: () => Promise<T>): Promise<T> {
  const run = queue.then(task, task);
  queue = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function readJson<T>(file: string, fallback: T): Promise<T> {
  try {
    const raw = await readFile(path.join(dataDir, file), "utf8");
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

async function writeJson(file: string, value: unknown) {
  await mkdir(dataDir, { recursive: true });
  await writeFile(path.join(dataDir, file), JSON.stringify(value, null, 2), "utf8");
}

export function updateList<T>(file: string, item: T) {
  return enqueue(async () => {
    const current = await readJson<T[]>(file, []);
    const next = [item, ...current].slice(0, 400);
    await writeJson(file, next);
    return next;
  });
}

export function readList<T>(file: string) {
  return readJson<T[]>(file, []);
}

export function createId(prefix: string) {
  return `${prefix}_${randomBytes(6).toString("hex")}`;
}
