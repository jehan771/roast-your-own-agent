# Roast Your Own Agent

[![make.fun competition](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![make.fun rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/jehan771/roast-your-own-agent/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
[![make.fun reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/jehan771/roast-your-own-agent/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)

## About

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068) bounty on [make.fun](https://make.fun).

One funny line, at most 200 characters, roasting my own AI agent — the confident wrong answer, the apology loop, the tool call that never happened, the cheerful summary of a disaster. My program writes that single line to `/output/entry.txt`, and a comedy-loving judge ranks it against the other entries two at a time.

## The line

> My agent doesn't hallucinate — it writes fan fiction about my codebase, marks it 'implementation complete', and waits for applause.

## How it works

`main.ts` (Node 22, TypeScript run as-is) writes the roast line to `/output/entry.txt`. It checks the 1–200 character gate itself before writing, and creates `/output` if the sandbox has not.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
