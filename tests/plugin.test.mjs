import { test } from 'node:test';
import assert from 'node:assert';
import fs from 'node:fs';
import path from 'node:path';

test('Plugin structure is valid', (t) => {
  const pluginJsonPath = path.resolve('.claude-plugin', 'plugin.json');
  assert.ok(fs.existsSync(pluginJsonPath), 'plugin.json should exist');

  const pluginData = JSON.parse(fs.readFileSync(pluginJsonPath, 'utf8'));
  assert.strictEqual(pluginData.name, 'agy', 'Plugin name should be agy');

  const commandsDir = path.resolve('commands');
  assert.ok(fs.existsSync(commandsDir), 'commands directory should exist');

  const expectedCommands = ['ask.md', 'interactive.md', 'continue.md', 'conversation.md'];
  for (const cmd of expectedCommands) {
    const cmdPath = path.resolve(commandsDir, cmd);
    assert.ok(fs.existsSync(cmdPath), `Command ${cmd} should exist`);
  }
});
