# Data Model: Single-Room Adventure Skeleton

## Entities

### Player Avatar
- **Attributes**: position (x, y), velocity, collision body size, movement speed.
- **State**: movement input (up/down/left/right), facing (optional), in-dialog flag (blocks movement).
- **Relationships**: interacts with Room boundaries/props (collision), overlaps with NPC and Interactive Object ranges.

### NPC
- **Attributes**: position (x, y), collision body size, interaction radius.
- **State**: dialog content string, active dialog flag.
- **Relationships**: interacts with Player via proximity and interact key.

### Interactive Object
- **Attributes**: position (x, y), collision/overlap body size, collected flag, feedback text, visual state (default vs collected).
- **State**: collected (boolean) persisted in-session only.
- **Relationships**: interacts with Player via proximity and interact key.

### Room
- **Attributes**: dimensions (width, height), wall segments/tiles, floor visuals, spawn points for Player, NPC, Object.
- **State**: static geometry; no persistence beyond session.
- **Relationships**: contains Player, NPC, Interactive Object.

### Dialog/UI State
- **Attributes**: current message text, visibility flag, target (NPC or object), dismiss key mapping.
- **State**: transient; cleared when dialog is dismissed.
- **Relationships**: owned by Scene; blocks Player movement while visible.
