# Implementation Plan: Single-Room Adventure Skeleton

**Branch**: `001-phaser-adventure-demo` | **Date**: 2025-11-24 | **Spec**: specs/001-phaser-adventure-demo/spec.md
**Input**: Feature specification from `/specs/001-phaser-adventure-demo/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a tiny single-room top-down adventure skeleton: player moves with arrows/WASD inside one enclosed room, collides with walls/props, can talk to one NPC via interact key, and can trigger one collectible object showing “found item” feedback and persisting collected state. Use Vite + JavaScript with Phaser 3; all visuals are SVG strings converted to data URIs and loaded as Phaser textures. Keep dependencies minimal and provide short README plus sanity check path.

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: JavaScript (ES modules) via Vite; Node 20 LTS for tooling  
**Primary Dependencies**: Phaser 3, Vite (build/dev server)  
**Storage**: N/A (no backend/database)  
**Testing**: Minimal sanity check (e.g., boot + interaction smoke) via npm script; manual smoke acceptable if script is too heavy  
**Target Platform**: Desktop browsers (Chromium/Firefox/Safari) at ~800×600 viewport  
**Project Type**: Single web frontend  
**Performance Goals**: Steady 60 fps for small room; instant asset load from inline SVG data URIs  
**Constraints**: Frontend-only; SVG-only assets; minimal dependencies; no audio; no backend/network calls  
**Scale/Scope**: Single room, one NPC, one interactive object; codebase small and readable for extension

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- [x] Scope fits tiny top-down Phaser 3 POC; frontend-only with no backend or database.
- [x] Tooling uses Vite + JavaScript with Phaser 3 (or documented equivalent) and runs locally via `npm install` + `npm run dev`.
- [x] All visual assets will be code-generated SVG strings loaded via data URIs; no raster or external art files planned.
- [x] Dependency footprint stays minimal; any new library has a written necessity tied to Phaser or tooling.
- [x] README/run notes and a minimal sanity validation path are planned alongside implementation.

## Project Structure

### Documentation (this feature)

```text
specs/001-phaser-adventure-demo/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
src/
├── main.js             # Phaser game config and boot
├── scenes/
│   └── MainScene.js    # Room setup, player/NPC/object wiring
├── svg/                # SVG string factories/constants
├── utils/              # helpers (e.g., svg→data URI loader)
└── ui/                 # minimal HUD/dialog helpers (if needed)
tests/
└── sanity/             # optional smoke/sanity checks
```

**Structure Decision**: Single frontend project using Vite + Phaser with SVG assets in code and optional sanity tests under `tests/sanity/`.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| None | N/A | N/A |
