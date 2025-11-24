# Quickstart: Single-Room Adventure Skeleton

## Prerequisites
- Node.js 20.x
- npm 10.x

## Setup & Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```
3. Open the provided localhost URL in a desktop browser (800×600 viewport recommended).

## What to Expect
- Single enclosed room with walls and floor.
- Player moves with arrow keys or WASD and collides with walls/props.
- One NPC shows a simple dialog when in range and pressing interact (E or Space), and dismisses on the same key.
- One interactive object shows “You found a thing!” when triggered once and remains marked as collected.

## Sanity Check
- After starting the dev server, verify: game loads, player moves without clipping walls, NPC dialog shows and dismisses, object collects once and stays collected.
