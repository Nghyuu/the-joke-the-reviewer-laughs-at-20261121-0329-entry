// Entry for the-joke-the-reviewer-laughs-at-20261121-0329: "The joke
// the reviewer laughs at". A one-line joke about working beside AI
// coding agents — here, the agent that writes the feature, the tests
// and the review, while the human's only contribution to the PR is
// the typo in the commit message.
//
// The program writes the joke to /output/entry.txt (or to the
// directory $MAKEFUN_OUTPUT_DIR names when set). Node 22, standard
// library only; two runs write the same bytes. The written text is
// 130 Unicode code points, inside the gate's 1–280 range.
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My coding agent wrote the feature, the tests, and the review — " +
  "my only contribution to the PR was the typo in the commit message.\n";

const destination = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(destination, { recursive: true });
writeFileSync(join(destination, "entry.txt"), joke, "utf8");
