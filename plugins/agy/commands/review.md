---
description: "Run a code review on your current changes using Agy (Antigravity CLI)"
argument-hint: "[--base <ref>] [optional focus instructions]"
allowed-tools: Bash(git:*), Bash(agy:*)
disable-model-invocation: true
---

Run a code review via Agy. This command gathers the current git diff and asks Agy to review it.

Steps:

1. Determine what to review:
   - If `--base <ref>` is provided, review the diff between the current branch and `<ref>`:
     ```bash
     git diff <ref>...HEAD
     ```
   - Otherwise, review uncommitted changes (staged + unstaged):
     ```bash
     git diff HEAD
     ```

2. If the diff is empty, tell the user there are no changes to review and stop.

3. Construct the review prompt. If the user provided focus text after the flags, include it:
   ```
   Please review the following code changes. Focus on bugs, security issues, performance problems, and code quality.
   
   <focus instructions if provided>
   
   Here is the diff:
   <diff output>
   ```

4. Run Agy with the constructed prompt:
   ```bash
   agy --print "<review prompt>" --dangerously-skip-permissions
   ```

5. Return the review output verbatim.
