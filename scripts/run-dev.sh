#!/bin/bash

# Check if bun is installed
if ! command -v bun &> /dev/null; then
    echo "bun not found. Installing bun..."
    curl -fsSL https://bun.sh/install | bash
    export PATH="$HOME/.bun/bin:$PATH"
fi

bun install
bun run dev