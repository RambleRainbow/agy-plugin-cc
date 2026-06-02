# Contributing

Thank you for your interest in contributing to the Agy Plugin for Claude Code!

## How to Contribute

1. **Fork** this repository
2. **Create a branch** for your feature or fix: `git checkout -b feature/my-feature`
3. **Make your changes** and test them locally
4. **Commit** with a clear message: `git commit -m "feat: add my feature"`
5. **Push** to your fork: `git push origin feature/my-feature`
6. **Open a Pull Request** against `main`

## Development Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/RambleRainbow/agy-plugin-cc.git
   cd agy-plugin-cc
   ```

2. Install the plugin locally in Claude Code:
   ```bash
   /plugin marketplace add /path/to/agy-plugin-cc
   /plugin install agy@agy-plugin-cc
   /reload-plugins
   ```

3. Make changes to files under `plugins/agy/`

4. Reload to test:
   ```bash
   /reload-plugins
   ```

## Project Structure

```
.claude-plugin/
  marketplace.json          # Marketplace registration
plugins/agy/
  .claude-plugin/
    plugin.json             # Plugin manifest
  agents/                   # Subagent definitions (conversational activation)
  commands/                 # Slash command definitions
  hooks/                    # Session lifecycle hooks
  prompts/                  # Prompt templates
  skills/                   # Internal skills (not user-invocable)
```

## Guidelines

- **Commands** are markdown files in `commands/`. Each file becomes `/agy:<filename>`.
- **Agents** are markdown files in `agents/`. The `description` field enables conversational activation.
- **Skills** are internal helpers. Set `user-invocable: false` in the frontmatter.
- Keep command instructions concise to minimize token overhead.
- Test changes by running the corresponding slash command in Claude Code.

## Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — new feature
- `fix:` — bug fix
- `perf:` — performance improvement
- `docs:` — documentation only
- `chore:` — maintenance

## License

By contributing, you agree that your contributions will be licensed under the [Apache License 2.0](LICENSE).
