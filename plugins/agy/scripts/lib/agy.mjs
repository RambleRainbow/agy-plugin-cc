import { spawn } from "node:child_process";

export const DEFAULT_CONTINUE_PROMPT = "Continue";

export function buildPersistentTaskThreadName(prompt) {
  return "task";
}

export function findLatestTaskThread(workspaceRoot) {
  return null;
}

export async function getAgyAuthStatus(cwd) {
  return { loggedIn: true, requiresOpenaiAuth: false };
}

export function getAgyAvailability(cwd) {
  return { available: true };
}

export function getSessionRuntimeStatus(env, workspaceRoot) {
  return { active: true };
}

export function interruptAppServerTurn(pid) {
  // No-op for now
}

export function parseStructuredOutput(message, fallback) {
  return { parsed: null, rawOutput: message, parseError: null };
}

export function readOutputSchema(schemaPath) {
  return {};
}

function spawnAgy(cwd, args, onProgress) {
  return new Promise((resolve) => {
    const child = spawn("agy", args, { cwd });
    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (data) => {
      const text = data.toString();
      stdout += text;
      if (onProgress) onProgress({ stdout: text });
    });

    child.stderr.on("data", (data) => {
      const text = data.toString();
      stderr += text;
      if (onProgress) onProgress({ stderr: text });
    });

    child.on("close", (code) => {
      resolve({
        status: code,
        finalMessage: stdout,
        reviewText: stdout,
        stderr,
        error: code !== 0 ? new Error(stderr) : null,
        reasoningSummary: "",
        threadId: "agy-thread",
        turnId: "agy-turn",
        touchedFiles: []
      });
    });
  });
}

export async function runAppServerReview(cwd, { target, model, onProgress }) {
  const promptText = target.focusText ? `Please review my codebase. Instructions: ${target.focusText}` : "Please review my codebase.";
  return spawnAgy(cwd, ["--print", promptText], onProgress);
}

export async function runAppServerTurn(cwd, { prompt, resumeThreadId, model, effort, sandbox, onProgress, persistThread, threadName }) {
  const args = [];
  if (resumeThreadId) {
    args.push("--continue");
  } else {
    args.push("--print", prompt);
  }
  return spawnAgy(cwd, args, onProgress);
}
