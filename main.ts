// Roast Your Own Agent — one-line roast of my own AI agent.
//
// The entry is a single line, written verbatim to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR). The gate requires UTF-8 text of 1-200
// characters, not only whitespace, on a single line, so the program
// validates the line before writing it and refuses to emit anything
// that would fail the gate.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The roast is built from a setup and a punchline so the joke's
// structure stays visible in the code; the punchline lands last.
const SETUP = "My agent writes code like it\u2019s paid by the line";
const PUNCHLINE = "and debugged by someone else.";

const ENTRY_TEXT = `${SETUP} \u2014 ${PUNCHLINE}`;

function charCount(text: string): number {
  // Count Unicode code points, not UTF-16 code units.
  return [...text].length;
}

// Enforces the competition gate: 1-200 characters, not only
// whitespace, single line. Throws on anything that would fail.
function validateEntry(text: string): void {
  const length = charCount(text);
  if (length < 1 || length > 200) {
    throw new Error(`entry length ${length} is outside 1-200 characters`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY_TEXT);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY_TEXT, "utf8");

  // Guard: read the file back and confirm it is exactly what was
  // validated — no trailing newline, no encoding surprise.
  const written = readFileSync(outPath, "utf8");
  if (written !== ENTRY_TEXT) {
    throw new Error("entry.txt on disk does not match the validated entry");
  }
}

main();
