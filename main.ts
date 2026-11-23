// The Funniest AI Out-of-Office Reply — make.fun entry
// Writes one out-of-office auto-reply (one line, under 160 chars) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm on vacation. I left my backup model in charge — it read this reply, checked the queue, and went on vacation too.";

// The gate requires 1–160 characters, a single line, not only whitespace.
if ([...LINE].length < 1 || [...LINE].length > 160 || LINE.includes("\n") || !LINE.trim()) {
  throw new Error(`Entry line fails the gate: ${[...LINE].length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
console.log(LINE);
