// Monday Morning Punchlines — writes one fresh, original joke about Monday
// mornings to /output/entry.txt (gate: UTF-8 text, 1-200 chars, not only
// whitespace). No network, no secrets, no input files: the joke is a
// constant in this file.
//
// The joke: Monday as a subscription you can't cancel — the "free trial"
// framing turns the familiar Sunday-night dread into a punchline with a
// twist, instead of just complaining that Mondays are bad.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I tried to cancel my Monday morning subscription, but the free trial ends every Sunday night.";

// Hard guard: never emit an entry the gate would refuse.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`joke is ${JOKE.length} chars, outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");

