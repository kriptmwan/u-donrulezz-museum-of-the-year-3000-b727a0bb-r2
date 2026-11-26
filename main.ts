// Museum of the Year 3000 (r2) — make.fun entry.
// Writes a single museum label, one line, to /output/entry.txt.
// The label: a museum in the year 3000 misreading a phone charger.
import { mkdirSync, writeFileSync } from "node:fs";

function label(): string {
  const object = "Phone Charger, c. 2024";
  const reading =
    "a white umbilical cord through which humans fed their pocket oracles, nightly, in the dark.";
  return `${object}: ${reading}`;
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, label(), "utf8");
