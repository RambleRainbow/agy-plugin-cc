# Agy Plugin for Claude Code

Use [Agy (Antigravity CLI)](https://antigravity.google/product/antigravity-cli) from inside Claude Code to delegate tasks or run code reviews.

This plugin is for Claude Code users who want an easy way to start using Agy from the workflow they already have.

## What You Get

- `/agy:rescue` to delegate a task to Agy
- `/agy:review` for a code review via Agy
- `/agy:adversarial-review` for a steerable challenge review
- `/agy:status`, `/agy:result`, `/agy:cancel` to manage background jobs
- `/agy:setup` to check whether Agy is installed
- Conversational activation — just say "ask Agy to fix this" in normal conversation

## Requirements

- **Agy (Antigravity CLI)** installed and on your PATH
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

After install, you should see:

- the slash commands listed below
- the `agy:agy-rescue` subagent in `/agents`

## Usage

### `/agy:rescue`

Delegates a task to Agy. Use it when you want Agy to investigate a bug, try a fix, or do any coding work.

> [!NOTE]
> Depending on the task, Agy may take a while. Press `ctrl+b` during execution to move it to the background.

Examples:

```bash
/agy:rescue investigate why the tests are failing
/agy:rescue fix the auth bug with the smallest safe patch
/agy:rescue --continue
```

Use `--continue` to resume Agy's most recent conversation.

You can also just ask for a task to be delegated to Agy in normal conversation:

```text
Ask Agy to redesign the database connection to be more resilient.
```

### `/agy:review`

Runs a code review on your current uncommitted changes via Agy.

Examples:

```bash
/agy:review
/agy:review --base main
/agy:review look for race conditions
```

Use `--base <ref>` to review your branch against a base branch. This command is read-only.

### `/agy:adversarial-review`

Runs a **steerable** review that questions the chosen implementation and design.

Use it to pressure-test assumptions, tradeoffs, failure modes, and whether a different approach would have been safer or simpler.

Examples:

```bash
/agy:adversarial-review
/agy:adversarial-review --base main challenge whether this was the right caching design
/agy:adversarial-review look for race conditions and question the chosen approach
```

This command is read-only. It does not fix code.

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

## How It Works

This plugin wraps the [Agy CLI](https://antigravity.google/product/antigravity-cli) using `agy --print` for non-interactive execution. It delegates tasks through Claude Code's native subagent mechanism (`agy:agy-rescue`), making Agy available as both a slash command and a conversationally-activated agent.

The `agy:agy-rescue` subagent can be triggered in two ways:

1. **Explicitly** via `/agy:rescue <task>`
2. **Proactively** when Claude Code determines a task would benefit from Agy's independent analysis — no slash command needed

## Inspired By

This plugin is inspired by [codex-plugin-cc](https://github.com/openai/codex-plugin-cc) by OpenAI, which integrates Codex into Claude Code. The architecture was redesigned from scratch to work with Agy's CLI-based interface rather than Codex's JSON-RPC app-server protocol.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development setup and guidelines.

## License

[Apache License 2.0](LICENSE)
