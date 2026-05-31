---
description: "Check whether Agy (Antigravity CLI) is installed and ready to use"
allowed-tools: Bash(which:*), Bash(agy:*)
disable-model-invocation: true
---

Check whether Agy is installed and available.

Steps:

1. Check if `agy` is on PATH:
   ```bash
   which agy
   ```

2. If `agy` is found, verify it works:
   ```bash
   agy --help
   ```

3. Report the result:
   - If `agy` is found and `--help` succeeds: **✅ Agy is installed and ready.** Show the path and available options.
   - If `agy` is not found: **❌ Agy is not installed.** Tell the user to install it from https://antigravity.google/product/antigravity-cli
