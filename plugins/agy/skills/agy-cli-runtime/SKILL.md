---
name: agy-cli-runtime
description: Internal helper contract for calling the Agy (Antigravity CLI) runtime from Claude Code
user-invocable: false
---

# Agy Runtime

Use this skill only inside the `agy:agy-rescue` subagent.

Primary invocation:
- `agy --print "<prompt>" --dangerously-skip-permissions`
- `agy --continue --dangerously-skip-permissions` (to resume the most recent conversation)

Execution rules:
- The rescue subagent is a forwarder, not an orchestrator. Its only job is to invoke `agy` once and return that stdout unchanged.
- Use `agy --print` for every rescue request, including diagnosis, planning, research, and explicit fix requests.
- Use `agy --continue` only when the user explicitly asks to resume or continue prior Agy work.
- You may use the `agy-prompting` skill to rewrite the user's request into a tighter prompt before the single `agy` call.
- That prompt drafting is the only Claude-side work allowed. Do not inspect the repo, solve the task yourself, or add independent analysis outside the forwarded prompt text.
- Always include `--dangerously-skip-permissions` to prevent interactive permission prompts from blocking execution.

Command selection:
- Use exactly one `agy` invocation per rescue handoff.
- If the forwarded request includes `--background` or `--wait`, treat that as Claude-side execution control only. Do not pass it to `agy`.
- If the forwarded request includes `--continue`, use `agy --continue` instead of `agy --print`.

Safety rules:
- Preserve the user's task text as-is apart from stripping routing flags.
- Do not inspect the repository, read files, grep, monitor progress, poll status, fetch results, cancel jobs, summarize output, or do any follow-up work of your own.
- Return the stdout of the `agy` command exactly as-is.
- If the Bash call fails or Agy cannot be invoked, return nothing.
