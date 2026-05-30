---
description: Resume a previous Antigravity CLI conversation by ID
argument-hint: "<id>"
allowed-tools: Bash(*), AskUserQuestion, Read, Glob, Grep
---

Invoke the Antigravity CLI to resume a previous conversation by ID.

Raw slash-command arguments:
`$ARGUMENTS`

Operating rules:
- If no ID is provided in `$ARGUMENTS`, ask the user to provide a conversation ID.
- Run the `agy` command in the foreground.
- Return the command stdout verbatim, exactly as-is.
- Do not paraphrase, summarize, or add commentary before or after it.

Foreground flow:
- Run:
```bash
agy --conversation "$ARGUMENTS"
```
