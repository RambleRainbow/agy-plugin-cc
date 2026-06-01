---
description: "Use Agy (Antigravity CLI) from Claude Code to review code or delegate tasks"
allowed-tools: Bash(agy:*), Agent
---

This is the Agy plugin for Claude Code. It lets you use Agy (Antigravity CLI) directly from Claude Code.

Available commands:

- `/agy:rescue` — Delegate a task to Agy for investigation, fixes, or coding work
- `/agy:review` — Run a code review on your current changes
- `/agy:adversarial-review` — Run a steerable challenge review that questions design decisions
- `/agy:status` — Check on running Agy background jobs
- `/agy:result` — Show the result of a finished Agy job
- `/agy:cancel` — Cancel a running Agy background job
- `/agy:setup` — Check whether Agy is installed and ready

If the user provides a task or question directly, treat it as if they ran `/agy:rescue` with that input — invoke the `agy:agy-agent` subagent to run the task via `agy --print`.
