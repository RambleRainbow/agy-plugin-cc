---
description: "Cancel a running Agy background job"
argument-hint: "[pid]"
allowed-tools: Bash(ps:*), Bash(grep:*), Bash(kill:*)
disable-model-invocation: true
---

Cancel a running Agy background job.

Steps:

1. If the user provided a specific PID, kill that process:
   ```bash
   kill <pid>
   ```

2. If no PID was provided, find running `agy` processes:
   ```bash
   ps aux | grep -E '[a]gy (--print|--continue|--prompt)' || true
   ```

3. If exactly one `agy` process is found, kill it:
   ```bash
   kill <pid>
   ```
   Then confirm: "Cancelled Agy task (PID: <pid>)."

4. If multiple `agy` processes are found, list them and ask which one to cancel.

5. If no `agy` processes are found, tell the user: "No running Agy tasks found."
