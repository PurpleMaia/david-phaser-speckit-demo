# workspace Development Guidelines

Auto-generated from all feature plans. Last updated: 2025-11-24

## Active Technologies

- JavaScript (ES modules) on Node 20 LTS (001-phaser-adventure-demo)
- Vite (dev/build server) (001-phaser-adventure-demo)
- Phaser 3 (Arcade Physics) (001-phaser-adventure-demo)

## Project Structure

```text
src/
├── main.js
├── scenes/
├── svg/
├── utils/
└── ui/
tests/
└── sanity/
```

## Commands

- npm run dev
- npm run build
- npm run preview
- npm run test:sanity (planned minimal smoke)

## Code Style

JavaScript ES modules via Vite; prefer small, readable modules; keep dependencies minimal; SVG assets defined as strings and loaded via data URIs.

## Recent Changes

- 001-phaser-adventure-demo: Added JS/Vite/Phaser stack with SVG-only asset pipeline and single-room adventure skeleton

<!-- MANUAL ADDITIONS START -->
<!-- MANUAL ADDITIONS END -->
