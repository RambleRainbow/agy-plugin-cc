# Agy Plugin for Claude Code

Use [Agy (Antigravity CLI)](https://antigravity.google/product/antigravity-cli) from inside Claude Code to delegate tasks or run code reviews.

## What You Get

- `/agy:rescue` to delegate a task to Agy
- `/agy:review` for a normal Agy code review
- `/agy:adversarial-review` for a steerable challenge review
- `/agy:status` to check on running Agy jobs
- `/agy:result` to see the result of a finished job
- `/agy:cancel` to cancel a running Agy job
- `/agy:setup` to check whether Agy is installed

## Requirements

- **Agy (Antigravity CLI)** installed and on your PATH.
  - Install from [antigravity.google](https://antigravity.google/product/antigravity-cli)

## Install

Add the marketplace in Claude Code:

```bash
/plugin marketplace add RambleRainbow/agy-plugin-cc
```

Install the plugin:

```bash
/plugin install agy@agy-plugin-cc
```

Reload plugins:

```bash
/reload-plugins
```

Then run:

```bash
/agy:setup
```

`/agy:setup` will tell you whether Agy is installed and ready.

## Usage

### `/agy:rescue`

Delegates a task to Agy. Use it when you want Agy to investigate a bug, try a fix, or do any coding work.

Examples:

```bash
/agy:rescue investigate why the tests are failing
/agy:rescue fix the auth bug with the smallest safe patch
/agy:rescue --continue
```

Use `--continue` to resume Agy's most recent conversation.

Press `ctrl+b` during execution to move the task to the background.

### `/agy:review`

Runs a code review on your current uncommitted changes via Agy.

Examples:

```bash
/agy:review
/agy:review --base main
/agy:review look for race conditions
```

Use `--base <ref>` to review your branch against a base branch.

### `/agy:adversarial-review`

Runs a **steerable** review that questions the chosen implementation and design.

Use it to pressure-test assumptions, tradeoffs, failure modes, and whether a different approach would have been safer or simpler.

Examples:

```bash
/agy:adversarial-review
/agy:adversarial-review --base main challenge whether this was the right caching design
/agy:adversarial-review look for race conditions and question the chosen approach
```

### `/agy:status`

Shows running Agy jobs.

```bash
/agy:status
```

### `/agy:result`

Shows the result of a finished Agy job.

```bash
/agy:result
```

### `/agy:cancel`

Cancels an active background Agy job.

```bash
/agy:cancel
```

### `/agy:setup`

Checks whether Agy is installed and available on your system.

```bash
/agy:setup
```

## How It Works

This plugin wraps the [Agy CLI](https://antigravity.google/product/antigravity-cli) using `agy --print` for non-interactive execution. It delegates tasks through Claude Code's native subagent mechanism, making Agy available as a slash command without leaving your current workflow.

## Typical Flows

### Review Before Shipping

```bash
/agy:review
```

### Hand A Problem To Agy

```bash
/agy:rescue investigate why the build is failing in CI
```

### Start Something Long-Running

```bash
/agy:rescue investigate the regression
```

Then press `ctrl+b` to move it to the background, and check in with:

```bash
/agy:status
/agy:result
```
