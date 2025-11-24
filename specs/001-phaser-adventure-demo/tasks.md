# Tasks: Single-Room Adventure Skeleton

**Input**: Design documents from `/specs/001-phaser-adventure-demo/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

**Tests**: Tests are optional; include only lightweight sanity checks to validate boot, movement, dialog, and collection.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

- Frontend-only: `src/` for code, `assets/` (here `src/svg/`) for SVG string modules, `tests/` for sanity checks.
- npm scripts live at the repository root; avoid backend- or API-specific directories.
- Structure per plan:

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

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [ ] T001 Create project structure (`src/`, `src/scenes/`, `src/svg/`, `src/utils/`, `src/ui/`, `tests/sanity/`)
- [ ] T002 Initialize Vite + JavaScript project with Phaser dependency and npm scripts (`dev`, `build`, `preview`) in `package.json`
- [ ] T003 [P] Add initial Vite entry stubs `src/main.js` and `src/scenes/MainScene.js` (imports Phaser, exports empty scene class)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core game loop infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T004 Configure base Phaser game (800×600, Arcade physics, scene registration) in `src/main.js`
- [ ] T005 [P] Implement SVG-to-data-URI helper in `src/utils/svg.js`
- [ ] T006 [P] Create base room visuals: floor and wall SVG modules in `src/svg/floor.js` and `src/svg/wall.js`
- [ ] T007 [P] Preload/register floor and wall textures using the data URI helper in `src/scenes/MainScene.js`
- [ ] T008 Define room layout, wall collisions, and spawn points in `src/scenes/MainScene.js`
- [ ] T009 Wire keyboard input (WASD/arrow movement, interact key E/Space) and store controls references in `src/scenes/MainScene.js`
- [ ] T010 Document npm scripts and sanity-check steps in `README.md` and add a placeholder `npm run test:sanity` entry in `package.json`

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Explore the Room (Priority: P1) 🎯 MVP

**Goal**: Player moves freely inside the room and collides with walls/props.

**Independent Test**: From a fresh load, move with arrows/WASD; avatar stays inside bounds and cannot clip through walls.

### Tests for User Story 1 (lightweight sanity)

- [ ] T011 [P] [US1] Add boot/movement sanity check scaffold in `tests/sanity/boot.test.js`

### Implementation for User Story 1

- [ ] T012 [P] [US1] Create player SVG asset module in `src/svg/player.js`
- [ ] T013 [P] [US1] Register player texture from data URI and load in `src/scenes/MainScene.js`
- [ ] T014 [US1] Spawn player with Arcade physics body and collision bounds in `src/scenes/MainScene.js`
- [ ] T015 [US1] Implement movement update (WASD/arrow input, velocity handling) in `src/scenes/MainScene.js`
- [ ] T016 [US1] Add controls hint UI text via `src/ui/hud.js` and display from `src/scenes/MainScene.js`

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Talk to the NPC (Priority: P2)

**Goal**: Player can trigger and dismiss a dialog with the NPC using the interact key.

**Independent Test**: Approach NPC, press interact to show dialog, press again to dismiss and resume movement.

### Tests for User Story 2 (lightweight sanity)

- [ ] T017 [P] [US2] Add dialog interaction sanity check in `tests/sanity/dialog.test.js`

### Implementation for User Story 2

- [ ] T018 [P] [US2] Create NPC SVG asset module in `src/svg/npc.js`
- [ ] T019 [P] [US2] Register NPC texture and preload in `src/scenes/MainScene.js`
- [ ] T020 [US2] Place NPC with overlap radius for interaction in `src/scenes/MainScene.js`
- [ ] T021 [P] [US2] Implement dialog UI helper (show/hide text) in `src/ui/dialog.js`
- [ ] T022 [US2] Wire interact key to open/close NPC dialog and pause/resume movement in `src/scenes/MainScene.js`

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase 5: User Story 3 - Collect the Interactive Object (Priority: P3)

**Goal**: Player triggers a single collectible, sees “found item” feedback, and the object stays marked as collected.

**Independent Test**: Approach the object, press interact to get feedback once, and verify collected state persists on re-trigger.

### Tests for User Story 3 (lightweight sanity)

- [ ] T023 [P] [US3] Add collection sanity check in `tests/sanity/collect.test.js`

### Implementation for User Story 3

- [ ] T024 [P] [US3] Create interactive object SVG asset module (e.g., chest/tile) in `src/svg/object.js`
- [ ] T025 [P] [US3] Register object texture and add to scene with overlap detection in `src/scenes/MainScene.js`
- [ ] T026 [US3] Implement collected state change (color/hide) and prevent duplicate rewards in `src/scenes/MainScene.js`
- [ ] T027 [US3] Show “You found a thing!” feedback (reuse dialog UI) and clear dialog on dismiss in `src/scenes/MainScene.js`

**Checkpoint**: All user stories should now be independently functional

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T028 [P] Update `README.md` with prerequisites, controls, NPC/dialog/collectible behaviors, and sanity steps
- [ ] T029 Code cleanup and dependency audit to keep bundle minimal
- [ ] T030 [P] Validate quickstart and sanity flow (`npm run dev`, sanity checks) per `quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion; P1 before P2 before P3 for narrative flow
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - establishes movement/collision
- **User Story 2 (P2)**: Depends on US1 movement/collision existing to reach NPC
- **User Story 3 (P3)**: Depends on US1 movement/collision existing to reach object; can proceed in parallel with US2 once US1 is done

### Within Each User Story

- Tests (if included) MUST be written and FAIL before implementation
- Assets/data URIs before systems that consume them
- Systems before scene wiring and UI
- Core implementation before polish
- Story complete before moving to next priority

### Parallel Opportunities

- Setup tasks marked [P] can run in parallel (stubs vs dependencies).
- Foundational tasks marked [P] can run in parallel: data-URI helper, SVG assets, texture registration.
- Within US1: player asset and texture registration can proceed in parallel with boot sanity scaffold.
- Within US2: NPC asset/texture and dialog helper can proceed in parallel.
- Within US3: object asset and texture registration can proceed in parallel with sanity check scaffold.

---

## Parallel Example: User Story 1

```bash
# Parallelizable tasks for User Story 1:
Task: "Add boot/movement sanity check scaffold in tests/sanity/boot.test.js"
Task: "Create player SVG asset module in src/svg/player.js"
Task: "Register player texture from data URI in src/scenes/MainScene.js"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Demo (MVP)
3. Add User Story 2 → Test independently → Demo
4. Add User Story 3 → Test independently → Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Verify tests fail before implementing when added
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
