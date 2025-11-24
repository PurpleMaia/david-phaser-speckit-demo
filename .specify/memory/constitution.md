<!--
Sync Impact Report
- Version: 1.0.0 → 1.1.0 (Visual Style Guide Added)
- Modified principles: Defined core principles (Minimal Proof-of-Concept Scope; Phaser-First Local Frontend; Code-Generated SVG Assets Only; Simplicity Over Dependencies; Lightweight Quality & Clarity)
- Added sections:
- Visual Style Guide (Phase 2: Visual Polish) as subsection under Principle III

Files Updated:
- ✅ .specify/memory/constitution.md (this file)
- ⏳ .specify/templates/spec-template.md (should update Visual Assets section to reference style guide)
- ⏳ .specify/templates/plan-template.md (Constitution Check should verify visual style compliance)

Modified Principles:
- Principle III expanded with detailed visual design constraints and implementation approach
- Added guidance for "simple but charming" aesthetic (early Zelda/SNES vibes)
- Specified color palette limits (10-16 colors), shading constraints (one darker shade per base color)
- Emphasized parametric, reusable SVG generators over one-off drawings

Follow-up TODOs:
- Consider updating spec template to reference new visual style constraints
- Consider updating plan template Constitution Check to include visual style verification
-->

# david-phaser-speckit-demo Constitution

## Core Principles

### Minimal Proof-of-Concept Scope (NON-NEGOTIABLE)
- Build only a tiny top-down 2D adventure/RPG demo: single small map, basic movement, and one simple interaction are sufficient for success; anything beyond requires explicit approval.
- Purpose is to prove SpecKit + Codex CLI workflow; prioritize fast iteration, readability, and minimal file count over feature richness.
- Rationale: Constraining scope keeps the experiment feasible and clearly attributable to the toolchain.

### Phaser-First Local Frontend
- Use Phaser 3 with a modern frontend toolchain (e.g., Vite + JavaScript) unless a blocker is documented; no backend services or databases are permitted.
- The project must run locally with `npm install` and `npm run dev` (or equivalent) without external services.
- Maintain a standard, minimal structure (e.g., `src/`, `assets/`) to ease navigation.
- Rationale: Ensures consistent local setup and focuses effort on the gameplay proof-of-concept.

### Code-Generated SVG Assets Only
- All visual assets are defined as SVG strings (inline or exported from `.js` modules) and loaded via data URIs (or equivalent) into Phaser; no bitmap/raster assets or external art files.
- Art style stays extremely simple (colored shapes, icons) with no attempt at polish.
- Rationale: Keeps assets lightweight, inspectable, and versionable in code.


### Simplicity Over Dependencies
- Favor small, readable implementations using built-in capabilities and Phaser utilities; add third-party libraries only when strictly necessary.
- Keep bundle size reasonable by avoiding heavy dependencies and unnecessary abstraction; do not prematurely optimize performance.
- Rationale: Reduces maintenance overhead and aligns with the experiment’s minimal goals.

### Lightweight Quality & Clarity
- Provide a short README describing setup (`npm install`, `npm run dev`), controls, and expected demo behavior.
- Include a minimal sanity check (script/assertion/manual smoke path) when reasonable to confirm the demo loads and the main interaction works.
- Keep code and assets organized and commented only where non-obvious decisions need context.
- Rationale: Ensures the demo is runnable and understandable without inflating scope.

## Delivery Constraints & Scope Limits
- Frontend-only web app; no backend, database, or network dependencies beyond asset loading from local code.
- Gameplay scope stays tiny: top-down movement in a small area with at most one simple interaction or goal.
- Tooling defaults to Vite + JavaScript + Phaser 3; alternatives require documented justification and must remain frontend-only.
- Asset pipeline is code-only SVG → data URI; committing binary art is prohibited.
- Keep bundle size modest and avoid optional libraries unless justified by the constitution.

## Development Workflow & Quality Gates
- Before feature work, verify plans respect frontend-only architecture, Phaser 3 stack, SVG-only assets, and minimal scope; note any proposed deviations explicitly.
- Implementation plans and specs must describe how assets are generated in code and how the app runs locally via standard npm scripts.
- Tasks should prioritize core loop (load, move, interact) before any polish; any added feature must prove necessity relative to the POC goal.
- Reviews check for dependency creep, asset compliance, scope bloat, and presence of README/run notes and sanity validation.

## Governance
- This constitution supersedes other practices for this project; conflicts resolve in favor of these rules.
- Amendments require documenting changes, updating templates affected, bumping the version, and recording the amendment date.
- Versioning follows semantic rules: MAJOR for breaking or removed principles, MINOR for new/expanded principles or sections, PATCH for clarifications.
- Compliance is reviewed during planning, specification, and code review; deviations must be justified and approved before implementation.

#### Visual Style Guide (Phase 2: Visual Polish)

Target aesthetic: **"simple but charming"** — early Zelda/SNES vibes with modern clarity.

**Design Constraints:**
- **Clean silhouettes**: Player, NPCs, and environment elements MUST have clear, readable shapes
- **Color contrast**: Player, NPCs, and environment MUST be visually distinct through color choices
- **Tiny color palette**: Use 10–16 total colors maximum across the entire game
- **Soft outlines and simple shading**: Each base color gets ONE darker shade for depth (no gradients, no complex lighting)

**Implementation Approach:**
- **Prefer parametric, reusable SVG generators** over one-off drawings
  - Example: `createCharacterSvg({ bodyColor, accessoryColor, emotion })`
  - This aligns with code-first asset generation and reduces duplication
- **Mechanics and code clarity still beat visual effects**: Don't add particle systems, animations, or effects that complicate the codebase unless they serve gameplay
- Visual polish MUST NOT compromise Simplicity First Principle or Minimal Dependencies Principle

**Version**: 1.1.0 | **Ratified**: 2025-11-24 | **Last Amended**: 2025-11-24
