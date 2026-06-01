---
description: "Run a steerable adversarial review that challenges design decisions, tradeoffs, and assumptions"
argument-hint: "[--base <ref>] [specific areas to challenge]"
allowed-tools: Bash(git:*), Bash(agy:*)
disable-model-invocation: true
---

Run an adversarial code review via Agy. Unlike `/agy:review`, this review actively challenges the implementation, questioning design choices, tradeoffs, hidden assumptions, and whether a different approach would have been safer or simpler.

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

3. Extract any focus text the user provided after the flags (e.g., "challenge whether this was the right caching design").

4. Construct the adversarial review prompt:
   ```
   You are performing an adversarial code review. Your job is NOT to just check for bugs — instead, actively challenge the design and implementation choices.

   For each significant change, ask:
   - Was this the right approach? What alternatives were considered?
   - What assumptions does this code make that could break?
   - What failure modes, race conditions, or edge cases are unhandled?
   - Is this over-engineered or under-engineered?
   - What would a senior engineer push back on in a code review?

   <focus instructions if user provided any>

   Here is the diff to review:
   <diff output>
   ```

5. Run Agy with the constructed prompt:
   ```bash
   agy --print "<adversarial review prompt>" --dangerously-skip-permissions
   ```

6. Return the review output verbatim.
