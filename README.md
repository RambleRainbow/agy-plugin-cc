# Antigravity CLI plugin for Claude Code

Use Antigravity CLI (`agy`) from inside Claude Code.

## Requirements

- **Node.js 18.18 or later**
- **Antigravity CLI installed** (`agy` in your PATH)

## Install

Add the plugin locally:

```bash
/plugin install ./agy-plugin-cc
```

Reload plugins:

```bash
/reload-plugins
```

## Usage

### `/agy:ask`

Runs a single prompt non-interactively using `agy --print`.

Examples:
```bash
/agy:ask "Write a hello world script in Python"
```

### `/agy:interactive`

Starts an interactive prompt session using `agy --prompt-interactive`.

Examples:
```bash
/agy:interactive "Let's build a react app"
```

### `/agy:continue`

Continues the most recent `agy` conversation.

Examples:
```bash
/agy:continue
```

### `/agy:conversation`

Resumes a previous `agy` conversation by ID.

Examples:
```bash
/agy:conversation <id>
```
