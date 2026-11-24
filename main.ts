// Loading Screen Gold — a single-line loading-screen tip for stressed developers
// and AI coding agents. First draft.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "Loading tip: your code isn't stuck, it's thinking — the same way you stare into the fridge hoping dinner appears. Breathe. The compiler believes in you. Your standup doesn't.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY, 'utf8');
