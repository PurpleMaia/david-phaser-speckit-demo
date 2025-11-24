# Research: Single-Room Adventure Skeleton

## Tooling and Engine
- **Decision**: Use Vite + JavaScript (ES modules) with Phaser 3 (Arcade Physics) and Node 20 LTS.
- **Rationale**: Aligns with constitution (frontend-only, minimal deps), fastest local dev loop, and Phaser docs endorse modern bundlers.
- **Alternatives considered**: Parcel (similar but less common for Phaser); plain Rollup (more setup); TypeScript (adds typing overhead beyond scope).

## Rendering & Assets
- **Decision**: Generate all visuals as SVG strings and convert to data URIs before registering Phaser textures.
- **Rationale**: Meets SVG-only constraint, keeps assets inspectable in code, and avoids binary pipeline.
- **Alternatives considered**: Canvas-drawn shapes at runtime (would duplicate logic and bypass SVG requirement); external SVG files (adds fetch/packaging complexity).

## Input & Interaction
- **Decision**: Movement via arrows/WASD; single interact key (E or Space) with proximity checks.
- **Rationale**: Standard PC controls; single-key interaction simplifies the loop and meets spec.
- **Alternatives considered**: Click/touch input (out of scope per desktop focus); multiple interaction keys (unnecessary complexity).

## World & Physics
- **Decision**: Single 800×600-ish room with visible floor/walls; Arcade Physics bodies for player, walls/props, NPC, and object overlap zones.
- **Rationale**: Enough space to demonstrate movement, dialog, and collection while keeping layout simple; Arcade Physics is lightweight and built-in.
- **Alternatives considered**: Matter.js (heavier for this scope); tilemap JSON (overhead for one room).

## Feedback & UI
- **Decision**: Minimal dialog/feedback UI using text objects (or lightweight container) with simple show/hide state and dismiss on interact key.
- **Rationale**: Satisfies dialog and found-item messaging without extra UI libs.
- **Alternatives considered**: Overlay HTML UI (would complicate styling and focus handling); full dialog system (overkill).

## Testing & Validation
- **Decision**: Provide a sanity script or documented manual path to confirm: game boots, player moves/collides, NPC dialog shows/dismisses, object collects once.
- **Rationale**: Constitution requests minimal sanity validation; keeps tooling light.
- **Alternatives considered**: Full E2E runner (Playwright/Cypress) adds heavy deps; skipped to honor minimal footprint.
