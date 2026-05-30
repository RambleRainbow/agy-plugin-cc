---
description: Check whether the local Agy CLI is ready and optionally toggle the stop-time review gate
argument-hint: '[--enable-review-gate|--disable-review-gate]'
allowed-tools: Bash(node:*), Bash(npm:*), AskUserQuestion
---

Run:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/agy-companion.mjs" setup --json $ARGUMENTS
```

If the result says Agy is unavailable and npm is available:
- Use `AskUserQuestion` exactly once to ask whether Claude should install Agy now.
- Put the install option first and suffix it with `(Recommended)`.
- Use these two options:
  - `Install Agy (Recommended)`
  - `Skip for now`
- If the user chooses install, run:

```bash
npm install -g @openai/agy
```

- Then rerun:

```bash
node "${CLAUDE_PLUGIN_ROOT}/scripts/agy-companion.mjs" setup --json $ARGUMENTS
```

If Agy is already installed or npm is unavailable:
- Do not ask about installation.

Output rules:
- Present the final setup output to the user.
- If installation was skipped, present the original setup output.
- If Agy is installed but not authenticated, preserve the guidance to run `!agy login`.
