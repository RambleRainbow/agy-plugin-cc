#!/usr/bin/env bash
# Agy plugin session lifecycle hook
# Usage: session-lifecycle.sh SessionStart|SessionEnd

set -euo pipefail

EVENT="${1:-}"

case "$EVENT" in
  SessionStart)
    # Export a session ID for tracking
    export AGY_COMPANION_SESSION_ID="${AGY_COMPANION_SESSION_ID:-$(uuidgen 2>/dev/null || cat /proc/sys/kernel/random/uuid 2>/dev/null || echo "session-$$")}"
    ;;
  SessionEnd)
    # Kill any orphaned agy processes from this session
    pkill -f "agy --print" 2>/dev/null || true
    pkill -f "agy --continue" 2>/dev/null || true
    ;;
  *)
    echo "Unknown event: $EVENT" >&2
    exit 1
    ;;
esac
