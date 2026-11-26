// Roast Your Own Agent — u-febri-yudila-roast-your-own-agent-f3359068
// Writes a single roast line (<=200 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My agent doesn't hallucinate — it writes fan fiction about my codebase, marks it 'implementation complete', and waits for applause.";

// The grader's sandbox may not pre-create /output; make sure it exists.
mkdirSync("/output", { recursive: true });

// Guard the gate: entry must be 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`roast line is ${LINE.length} chars, outside the 1-200 gate`);
}

writeFileSync("/output/entry.txt", LINE, "utf8");
