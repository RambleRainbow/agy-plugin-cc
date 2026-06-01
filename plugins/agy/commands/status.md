---
description: "Show running and recent Agy background jobs"
argument-hint: ""
allowed-tools: Bash(ps:*), Bash(grep:*)
disable-model-invocation: true
---

Show the status of running and recent Agy background jobs.

Steps:

1. Check for running `agy` processes:
   ```bash
   ps aux | grep -E '[a]gy (--print|--continue|--prompt)' || true
   ```

2. Report the results:
   - If processes are found: list each one with its PID, runtime, and command
   - If no processes are found: tell the user "No Agy tasks are currently running."
   - Remind the user they can cancel a running task with `/agy:cancel`
