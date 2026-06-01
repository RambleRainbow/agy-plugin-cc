---
description: "Show the result of the most recent or a specific Agy background job"
argument-hint: ""
allowed-tools: Bash(ps:*), Bash(grep:*)
disable-model-invocation: true
---

Show the result of the last Agy job.

Steps:

1. Check if any `agy` process is still running:
   ```bash
   ps aux | grep -E '[a]gy (--print|--continue|--prompt)' || true
   ```

2. If a task is still running, tell the user:
   "An Agy task is still running (PID: <pid>). Use `/agy:status` to monitor it, or `/agy:cancel` to stop it."

3. If no task is running, tell the user:
   "No Agy task is currently running. If a task completed, its output was returned directly in the conversation where it was started. Check your earlier messages or background task results."
