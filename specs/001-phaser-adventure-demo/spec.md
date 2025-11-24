# Feature Specification: Single-Room Adventure Skeleton

**Feature Branch**: `001-phaser-adventure-demo`  
**Created**: 2025-11-24  
**Status**: Draft  
**Input**: Build a single-screen top-down 2D adventure/RPG demo with one room, player movement and collision, one NPC dialog, one interactive object with “found item” feedback, SVG-only assets generated in code, runnable locally after `npm install` and `npm run dev`.

**Constitution Guardrails**: Scope stays a tiny top-down Phaser 3 frontend-only demo. Assets are
code-generated SVG strings loaded via data URIs. Keep dependencies minimal and document any
proposed deviations.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Explore the Room (Priority: P1)

The player opens the demo and moves a character around a single enclosed room without passing through walls or props.

**Why this priority**: Movement and collision prove the core loop and make the space feel like a game.

**Independent Test**: Launch the app, move with WASD/arrow keys, and verify the avatar cannot exit bounds or clip through walls.

**Acceptance Scenarios**:

1. **Given** the game is loaded, **When** the player presses arrow or WASD keys, **Then** the avatar moves smoothly within the room.
2. **Given** the avatar is against a wall or prop, **When** continued movement input is held, **Then** the avatar does not overlap or pass through the obstacle.

---

### User Story 2 - Talk to the NPC (Priority: P2)

The player approaches the lone NPC and triggers a short dialog using the interact key (E or space).

**Why this priority**: Interaction proves basic event handling and text presentation for future story beats.

**Independent Test**: From a fresh load, walk to the NPC, press the interact key, see dialog text appear, and dismiss it.

**Acceptance Scenarios**:

1. **Given** the avatar is within interaction range of the NPC, **When** the player presses the interact key, **Then** a simple dialog box with text appears.
2. **Given** dialog is visible, **When** the player presses the interact key again, **Then** the dialog closes and control returns to movement.

---

### User Story 3 - Collect the Interactive Object (Priority: P3)

The player finds the single interactive object (e.g., chest/tile), triggers it, and sees a “found item” acknowledgement with the object marked as collected.

**Why this priority**: Demonstrates state change and feedback, enabling future collectibles or quest items.

**Independent Test**: From a fresh load, walk to the object, press the interact key, see the “found” message, and observe the object change state (e.g., color/hide).

**Acceptance Scenarios**:

1. **Given** the avatar is within interaction range of the object and it is uncollected, **When** the player presses the interact key, **Then** a “You found a thing!” message appears.
2. **Given** the object was collected, **When** the player interacts again, **Then** no duplicate reward appears and the collected state remains visible.

---

### Edge Cases

- Interaction key pressed while out of range of NPC or object shows no dialog/collection.
- Multiple rapid key presses should not queue overlapping dialogs or duplicate collection.
- Dialog should not remain stuck; dismissal returns control cleanly to movement.
- Window resize or differing desktop resolutions keeps the play area fully visible without hiding UI or interaction targets.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The game MUST present a single-room top-down playfield with visible walls and floor on initial load.
- **FR-002**: The avatar MUST respond to arrow keys and WASD for movement and MUST be blocked by room boundaries and props.
- **FR-003**: An NPC MUST be placed in the room and become interactable when the avatar is within range.
- **FR-004**: Pressing the interact key near the NPC MUST display a short dialog and allow dismissal to restore movement control.
- **FR-005**: A distinct interactive object MUST provide “found item” feedback when triggered in range and MUST change state to indicate collection.
- **FR-006**: Re-triggering a collected object MUST NOT grant duplicate feedback or reset its collected state.
- **FR-007**: The application MUST start locally via a standard npm dev command after dependency installation, without external services.
- **FR-008**: All visuals (player, NPC, object, UI elements) MUST be derived from SVG strings defined in code and rendered via data URIs or equivalent—no bitmap assets.

### Key Entities *(include if feature involves data)*

- **Player Avatar**: Position, movement state, collision bounds.
- **NPC**: Fixed position, interaction range, dialog content.
- **Interactive Object**: Position, interaction range, collected state, feedback text/style.
- **Room**: Dimensions, walls/props defining collision boundaries, spawn points for avatar/NPC/object.
- **Dialog/UI State**: Visibility flag and current message for interaction feedback.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: From `npm install` + dev run, a user reaches the playable room in under 30 seconds on a typical laptop and sees the avatar, NPC, and object rendered.
- **SC-002**: 100% of test runs allow movement across the room while preventing wall/prop clipping.
- **SC-003**: In at least 95% of attempts, interacting with the NPC shows and dismisses dialog within 2 key presses.
- **SC-004**: In at least 95% of attempts, interacting with the object shows “found” feedback once and leaves the object visibly marked as collected on subsequent checks.
- **SC-005**: Repository contents are limited to lightweight source, SVG strings, and minimal config such that a new contributor can identify room, NPC, and object definitions within 2 minutes of browsing.
