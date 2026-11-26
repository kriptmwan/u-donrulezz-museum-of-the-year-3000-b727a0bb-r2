// Museum of the Year 3000 (r2) — make.fun entry.
// Writes a single museum label, one line, to /output/entry.txt.
// The label: a museum in the year 3000 misreading a phone charger.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Phone Charger, c. 2024: a white umbilical cord through which humans fed their pocket oracles, nightly, in the dark.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
