---
description: Start an interactive Antigravity CLI session
argument-hint: "[prompt]"
allowed-tools: Bash(*), AskUserQuestion, Read, Glob, Grep
---

Invoke the Antigravity CLI to start an interactive prompt session.

Raw slash-command arguments:
`$ARGUMENTS`

Operating rules:
- Run the `agy` command in the foreground.
- Return the command stdout verbatim, exactly as-is.
- Do not paraphrase, summarize, or add commentary before or after it.

Foreground flow:
- Run:
```bash
agy --prompt-interactive "$ARGUMENTS"
```
