---
description: Continue the most recent Antigravity CLI conversation
argument-hint: ""
allowed-tools: Bash(*), AskUserQuestion, Read, Glob, Grep
---

Invoke the Antigravity CLI to continue the most recent conversation.

Operating rules:
- Run the `agy` command in the foreground.
- Return the command stdout verbatim, exactly as-is.
- Do not paraphrase, summarize, or add commentary before or after it.

Foreground flow:
- Run:
```bash
agy --continue
```
