---
description: "Delegate a task to Agy (Antigravity CLI) for investigation, fixes, or general coding work"
argument-hint: "[--background] [--continue] [what Agy should do]"
allowed-tools: Bash(agy:*), AskUserQuestion, Agent
---

Invoke the `agy:agy-agent` subagent via the `Agent` tool (`subagent_type: "agy:agy-agent"`), forwarding the raw user request as the prompt.

The final user-visible response must be Agy's output verbatim.

Raw user request:
$ARGUMENTS

Execution rules:

- If the request includes `--background`, run the `agy:agy-agent` subagent in the background.
- If the request includes `--continue`, include the `--continue` flag when forwarding to the subagent. This tells Agy to resume its most recent conversation.
- `--background` and `--continue` are execution flags. Do not treat them as part of the natural-language task text.
- If the user did not supply a task description (and `--continue` is not set), ask what Agy should investigate or do.
- Return the Agy output verbatim to the user. Do not paraphrase, summarize, or add commentary.
