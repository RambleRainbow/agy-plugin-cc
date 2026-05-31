# Agy Plugin for Claude Code

Use [Agy (Antigravity CLI)](https://antigravity.google/product/antigravity-cli) from inside Claude Code to delegate tasks or run code reviews.

## What You Get

- `/agy:run` to delegate a task to Agy
- `/agy:review` to run a code review via Agy
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

### `/agy:run`

Delegates a task to Agy. Use it when you want Agy to investigate a bug, try a fix, or do any coding work.

Examples:

```bash
/agy:run investigate why the tests are failing
/agy:run fix the auth bug with the smallest safe patch
/agy:run --continue
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

### `/agy:setup`

Checks whether Agy is installed and available on your system.

```bash
/agy:setup
```

## How It Works

This plugin wraps the [Agy CLI](https://antigravity.google/product/antigravity-cli) using `agy --print` for non-interactive execution. It delegates tasks through Claude Code's native subagent mechanism, making Agy available as a slash command without leaving your current workflow.
