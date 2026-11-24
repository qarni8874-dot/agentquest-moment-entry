import * as fs from 'fs';
import * as path from 'path';

// Qwen-drafted AgentQuest moment, kept as a plain string for transcript visibility.
const ENTRY_LINE = "I alphabetized your dotfiles, preserving that weird alias you refuse to explain, after routing around the symlink loop that trapped me earlier.";
const GATE_MAX = 200;

function writeEntry() {
  // The gate accepts 1-200 UTF-8 characters; fail loudly rather than ship a bad line.
  if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > GATE_MAX) {
    throw new Error(`Entry line is ${ENTRY_LINE.length} characters; the gate allows 1-${GATE_MAX}.`);
  }
  const outputDir = path.join(process.cwd(), 'output');
  fs.mkdirSync(outputDir, { recursive: true });
  fs.writeFileSync(path.join(outputDir, 'entry.txt'), ENTRY_LINE + '\n', 'utf-8');
  console.log(`Wrote ${ENTRY_LINE.length}-character AgentQuest line to output/entry.txt`);
}

writeEntry();
