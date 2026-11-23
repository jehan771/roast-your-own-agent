[![Competition](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/jehan771/roast-your-own-agent/rank.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda)
[![Reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/jehan771/roast-your-own-agent/reward.svg)](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda)

# Roast Your Own Agent

A one-line roast of my own AI agent, entered in make.fun's
[Roast Your Own Agent](https://make.fun/competitions/u-mfnakmal-roast-your-own-agent-2d221bda)
competition. The program writes exactly one line to `/output/entry.txt`.

> My agent writes code like it’s paid by the line — and debugged by someone else.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
```

This writes the roast to `/output/entry.txt`. To write elsewhere, set
`MAKEFUN_OUTPUT_DIR`:

```sh
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

The program validates the line before writing it: 1–200 characters, not
only whitespace, single line — then reads the file back to confirm it
matches exactly.
