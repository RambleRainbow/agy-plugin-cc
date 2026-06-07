---
description: "Delegate investigation, a fix request, or follow-up work to Agy (Antigravity CLI)"
argument-hint: "[--model <model>] [--background] [--continue] [what Agy should do]"
allowed-tools: Bash(agy:*), AskUserQuestion, Agent
---

Invoke the `agy:agy-rescue` subagent via the `Agent` tool (`subagent_type: "agy:agy-rescue"`), forwarding the raw user request as the prompt.

The final user-visible response must be Agy's output verbatim.

Raw user request:
$ARGUMENTS

Execution rules:

- If the request includes `--model <name>`, pass it through to the subagent. This tells Agy which model to use. Strip it from the task text.
- If the request includes `--background`, run the `agy:agy-rescue` subagent in the background.
- If the request includes `--continue`, include the `--continue` flag when forwarding to the subagent. This tells Agy to resume its most recent conversation.
- `--model`, `--background` and `--continue` are execution flags. Do not treat them as part of the natural-language task text.
- If the user did not supply a task description (and `--continue` is not set), ask what Agy should investigate or do.
- Return the Agy output verbatim to the user. Do not paraphrase, summarize, or add commentary.
