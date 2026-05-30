---
description: Run a prompt non-interactively using Antigravity CLI
argument-hint: "[prompt]"
allowed-tools: Bash(*), AskUserQuestion, Read, Glob, Grep
---

Invoke the Antigravity CLI to run a single prompt non-interactively.

Raw slash-command arguments:
`$ARGUMENTS`

Operating rules:
- If no prompt is provided in `$ARGUMENTS`, ask the user to provide a prompt.
- Run the `agy` command in the foreground.
- Return the command stdout verbatim, exactly as-is.
- Do not paraphrase, summarize, or add commentary before or after it.

Foreground flow:
- Run:
```bash
agy --print "$ARGUMENTS"
```
