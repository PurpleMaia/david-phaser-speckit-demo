# Tasks: Phase 2 – Visual Upgrade (SVG only)

**Input**: Design documents from `/workspace/specs/002-svg-visual-upgrade/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/
**Tests**: Automated tests are optional; spec does not explicitly request new automated tests, so tasks focus on implementation and visual/manual validation.
**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Project Initialization)

- [X] T001 Validate Vite/Phaser npm scripts and Node target align with the plan in `/workspace/package.json`.
- [X] T002 [P] Ensure SVG design system directories exist per plan in `/workspace/src/svg/shapes` and `/workspace/src/svg/sprites`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Establish shared palette, helpers, and loader pipeline required before user story work.

- [X] T003 Consolidate palette to a ≤16-color set and export shared constants in `/workspace/src/svg/palette.js`.
- [X] T004 [P] Add reusable shape helpers (`roundedRect`, `circle`, `shadow`) in `/workspace/src/svg/shapes/`.
- [X] T005 [P] Implement centralized SVG-to-texture helper wrapping data URI conversion in `/workspace/src/utils/textureLoader.js` using `/workspace/src/utils/svg.js`.
- [X] T006 Refactor existing SVG sprite modules into `/workspace/src/svg/sprites/` and update references in `/workspace/src/scenes/MainScene.js` to use the new loader without changing visuals yet.

---

## Phase 3: User Story 1 – Experience Enhanced Character Visuals (Priority: P1) 🎯 MVP

**Goal**: Player and NPC sprites use head+body structure with 2-3 colors and clear silhouettes while gameplay behavior stays identical.
**Independent Test**: Load the game and visually inspect player and NPC; both show head+body forms with 2-3 colors, clear silhouettes, and subtle idle animations, with movement/collision unchanged from Phase 1.

- [ ] T007 [P] [US1] Implement head+body player SVG generator with palette defaults and simple shading in `/workspace/src/svg/sprites/createPlayerSvg.js`.
- [ ] T008 [P] [US1] Implement head+body NPC SVG generator with palette defaults, accessory trim, and shading in `/workspace/src/svg/sprites/createNpcSvg.js`.
- [ ] T009 [US1] Load player and NPC textures (32x32) via `svgToTexture` and swap sprite creation to new keys while preserving collision bounds in `/workspace/src/scenes/MainScene.js`.
- [ ] T010 [US1] Add idle tween animations (1s y-bob, yoyo, repeat -1, `Sine.easeInOut`) for player and NPC without altering movement behavior in `/workspace/src/scenes/MainScene.js`.

---

## Phase 4: User Story 2 – Navigate Enhanced Environment (Priority: P2)

**Goal**: Room shows 2-3 floor tile variations, wall tiles with doorway/archway, and 1-2 decorative props while keeping collisions unchanged.
**Independent Test**: Load the game and observe floor/wall/props; see multiple floor variants, at least one wall doorway, and 1-2 decorative props, with collision behavior identical to Phase 1.

- [ ] T011 [P] [US2] Implement 64x64 floor tile SVG generator with three palette-driven variants in `/workspace/src/svg/sprites/createFloorTileSvg.js`.
- [ ] T012 [P] [US2] Implement wall tile SVG generator (solid and doorway types with edge shading) in `/workspace/src/svg/sprites/createWallTileSvg.js`.
- [ ] T013 [P] [US2] Implement decorative prop SVG generator (plant, table, rug) using palette colors in `/workspace/src/svg/sprites/createPropSvg.js`.
- [ ] T014 [US2] Load floor/wall/prop textures and render tile-based layout while keeping collision bodies unchanged in `/workspace/src/scenes/MainScene.js`.

---

## Phase 5: User Story 3 – Discover Visually Distinct Reward Object (Priority: P3)

**Goal**: Chest has simple shading and a subtle glow that makes it stand out while interaction behavior stays the same.
**Independent Test**: Approach the chest; shading and glow are visible and distinct from surroundings, and interaction behavior matches Phase 1.

- [ ] T015 [P] [US3] Implement shaded chest SVG generator with `state` config and glow defaults in `/workspace/src/svg/sprites/createChestSvg.js`.
- [ ] T016 [US3] Load chest textures (closed/collected) with glow visibility and maintain existing interaction logic in `/workspace/src/scenes/MainScene.js`.

---

## Phase 6: User Story 4 – Read Improved Dialog Presentation (Priority: P4)

**Goal**: Dialog appears in a rounded, shadowed panel using palette colors with unchanged dialog behavior.
**Independent Test**: Trigger NPC/object dialog; panel shows rounded corners and drop-shadow with palette-aligned colors, and dialog behavior matches Phase 1.

- [ ] T017 [P] [US4] Implement dialog panel SVG generator with rounded corners and shadow helpers in `/workspace/src/svg/sprites/createDialogPanelSvg.js`.
- [ ] T018 [US4] Replace dialog rendering with the SVG panel texture and adjust text positioning for readability in `/workspace/src/scenes/MainScene.js`.

---

## Final Phase: Polish & Cross-Cutting Concerns

- [ ] T019 Validate palette color count ≤16 and remove stray hex colors across `/workspace/src/svg/` modules to ensure all references come from `/workspace/src/svg/palette.js`.
- [ ] T020 Perform visual/performance regression pass (load time, 60fps idle animations, collision parity) and record checklist updates in `/workspace/specs/002-svg-visual-upgrade/quickstart.md`.

---

## Dependencies & Execution Order

- Dependency graph: Setup (Phase 1) → Foundational (Phase 2) → US1 (Phase 3, P1) → US2 (Phase 4, P2) → US3 (Phase 5, P3) → US4 (Phase 6, P4) → Polish (Final).
- All user stories depend on Foundational; US2–US4 depend on US1 outputs for shared palette/loader alignment; Polish depends on all story phases.

---

## Parallel Execution Examples

- **US1**: T007 and T008 can run in parallel; T009 and T010 follow after textures are ready.
- **US2**: T011, T012, and T013 can run in parallel; T014 follows once generators exist.
- **US3**: T015 can proceed while US2 layout work happens; T016 after T015.
- **US4**: T017 can proceed in parallel with US3; T018 after T017.

---

## Implementation Strategy

- MVP first: Complete Setup → Foundational → US1, validate idle animations and silhouettes before expanding scope.
- Incremental delivery: Land US2 (tiles/props) next, then US3 (chest) for reward emphasis, then US4 (dialog polish).
- Keep generators ≤50 lines, reuse palette colors, and load textures upfront in `MainScene.create()` to maintain performance targets.
