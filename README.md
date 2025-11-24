# Phaser Adventure Skeleton

## Prerequisites
- Node.js 20.x
- npm 10.x

## Run locally
```bash
npm install
npm run dev
```
Open the localhost URL Vite prints (recommended viewport ~800×600).

Automated smoke:
```bash
npm run test:smoke
```

## What it does
- Single enclosed room with floor and wall tiles.
- Player moves with arrow keys or WASD and collides with walls.
- One NPC shows a short dialog when you press Interact (E or Space) in range; press again to dismiss.
- One interactive object shows “You found a thing!” once; it stays marked as collected on subsequent interactions.

## Project layout
```
src/
├── main.js          # Phaser game config and boot
├── scenes/MainScene # Room, entities, interactions
├── svg/             # SVG string assets (player, npc, object, tiles)
├── utils/           # helpers (svg → data URI)
└── ui/              # dialog/hud helpers
tests/sanity/        # optional sanity scripts
```

## Notes
- Assets are generated as SVG strings and loaded via data URIs—no bitmap files.
- Dependencies are minimal: Phaser 3 + Vite.
- `npm run test:sanity` is a placeholder; add a minimal smoke script if desired.
