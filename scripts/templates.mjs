import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = await readFile(join(root, "lib/template.ts"), "utf8");
const found = new Map();
for (const match of source.matchAll(/export const (\w+)Template = `([\s\S]*?)`;/g)) {
  if (match[2].includes("${")) throw new Error(match[1] + "Template uses interpolation, which the starter files can't carry");
  found.set(match[1], match[2]);
}
const targets = [["core", "templates/HUMAN.core.md"], ["full", "templates/HUMAN.full.md"]];
const check = process.argv.includes("--check");
let stale = [];
for (const [name, path] of targets) {
  const text = found.get(name);
  if (text === undefined) throw new Error("lib/template.ts has no " + name + "Template export");
  if (check) {
    const current = await readFile(join(root, path), "utf8").catch(() => null);
    if (current !== text) stale.push(path);
  } else {
    await writeFile(join(root, path), text);
  }
}
if (stale.length) {
  console.error("Out of date with lib/template.ts: " + stale.join(", ") + ". Run npm run templates.");
  process.exit(1);
}
