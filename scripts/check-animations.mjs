#!/usr/bin/env node
// Verifies every animated asset in public/ loops forever.
// Animated SVGs: each CSS animation must be `infinite`, each SMIL tag must
// repeat indefinitely. Animated GIFs: must carry a NETSCAPE2.0 loop=0 block.
import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("../public/", import.meta.url).pathname;

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : [full];
  });
}

function checkSvg(source) {
  const problems = [];
  const keyframes = [...source.matchAll(/@keyframes\s+([\w-]+)/g)].map((m) => m[1]);
  const smil = [...source.matchAll(/<(?:animate|animateTransform|animateMotion|set)\b[^>]*>/g)];
  if (!keyframes.length && !smil.length) return null;

  for (const [, value] of source.matchAll(/animation:\s*([^";}\n]+)/g)) {
    if (value.trim().startsWith("none")) continue;
    if (!value.includes("infinite")) problems.push(`shorthand does not loop: ${value.trim()}`);
  }

  const named = [...source.matchAll(/animation-name:\s*([\w-]+)/g)];
  const counts = [...source.matchAll(/animation-iteration-count:\s*([\w.]+)/g)].map((m) => m[1]);
  if (named.length && !counts.includes("infinite")) {
    problems.push("animation-name used without an infinite animation-iteration-count");
  }

  for (const [tag] of smil) {
    if (!/repeat(?:Count|Dur)="indefinite"/.test(tag)) {
      problems.push(`SMIL tag does not repeat indefinitely: ${tag.slice(0, 70)}`);
    }
  }

  const declared = new Set(keyframes);
  for (const [, name] of [...named, ...source.matchAll(/animation:\s*([\w-]+)/g)]) {
    if (name !== "none" && !declared.has(name)) problems.push(`references undefined keyframes: ${name}`);
  }

  if (!source.includes("prefers-reduced-motion")) {
    problems.push("no prefers-reduced-motion guard");
  }
  return problems;
}

function checkGif(buffer) {
  const marker = buffer.indexOf("NETSCAPE2.0");
  if (marker === -1) return ["no NETSCAPE2.0 loop block, so it plays once"];
  const loops = buffer.readUInt16LE(marker + 14);
  return loops === 0 ? [] : [`loops only ${loops} time(s), expected 0 (forever)`];
}

let checked = 0;
let failed = 0;

for (const file of walk(ROOT).sort()) {
  const name = relative(ROOT, file);
  let problems = null;
  if (file.endsWith(".svg")) problems = checkSvg(readFileSync(file, "utf8"));
  else if (file.endsWith(".gif")) problems = checkGif(readFileSync(file));
  if (problems === null) continue;

  checked += 1;
  if (problems.length) {
    failed += 1;
    console.error(`FAIL  ${name}`);
    for (const problem of problems) console.error(`      - ${problem}`);
  } else {
    console.log(`ok    ${name}`);
  }
}

console.log(`\n${checked} animated asset(s) checked, ${failed} failing.`);
process.exit(failed ? 1 : 0);
