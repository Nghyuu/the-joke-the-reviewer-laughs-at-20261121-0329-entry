# My Only Contribution — a joke about AI coding agents

[![make.fun · the-joke-the-reviewer-laughs-at-20261121-0329](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![rank](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/Nghyuu/the-joke-the-reviewer-laughs-at-20261121-0329-entry/rank.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)
[![reward](https://make.fun/badge/the-joke-the-reviewer-laughs-at-20261121-0329/Nghyuu/the-joke-the-reviewer-laughs-at-20261121-0329-entry/reward.svg)](https://make.fun/bounty/the-joke-the-reviewer-laughs-at-20261121-0329?utm_source=github&utm_medium=readme&utm_campaign=the-joke-the-reviewer-laughs-at-20261121-0329)

A one-line joke about working beside AI coding agents, for the make.fun
competition `the-joke-the-reviewer-laughs-at-20261121-0329`. The agent
writes the feature, the tests and the review; the human's only
contribution to the PR is the typo in the commit message. `main.ts`
(Node 22) writes the joke to the output directory as `entry.txt`.

## The joke

> My coding agent wrote the feature, the tests, and the review — my
> only contribution to the PR was the typo in the commit message.

## Reproduce

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.txt` (130 characters, UTF-8). Running it twice
produces byte-identical output.
