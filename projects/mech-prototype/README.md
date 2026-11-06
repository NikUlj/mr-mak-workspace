# Mech Prototype

A prototype project with a living Workspace wiki for generated assets,
playtest evidence, and agreed decisions.

## Confirmed brief

- A roguelike / roguelite game; exact run structure and persistence are open.
- Gameplay inspired by the Armored Core series; specific mechanics are open.

This is a separate brief from Project Playground. Do not carry over that
project's game concept, proposed scope, art direction, content counts, or
estimates. Prototype before continuing the production research.

## Locations

- [Wiki overview](../../workspace/2026-10-23_mech-prototype/overview.html)
- [Prototype status and observations](../../workspace/2026-10-23_mech-prototype/prototype.html)
- [Code review and development stopping point (24 October 2026)](../../workspace/2026-10-23_mech-prototype/code-review.md)
- [Asset catalogue](../../workspace/2026-10-23_mech-prototype/assets.card.json)
- [Prototype Player Mech development card](../../workspace/2026-10-23_prototype-player-mech/overview.card.json)
- [Decision log](../../workspace/2026-10-23_mech-prototype/decisions.md)
- **Authoritative Unity project:** `F:\Unity Projects\AC_Game`
- [Project folder shortcut for this Windows PC](../../workspace/2026-10-23_mech-prototype/links/AC_Game-shortcut.zip) (extract the ZIP, then open `AC_Game.url`)
- [Source inventory and evidence](project-snapshot.md)
- [Local source-location pointer](prototype/README.md)

The Workspace card ID is `mech-prototype`, in the `game` category.

### Shared hand study — 5 November 2026

The owner wants a shared, lower-poly hand established before further mech
concepts, with a distinct wrist connection like the rounded AC6 reference on
the right in the supplied Blender scene. Blender MCP is verified and both
reference hands have been inspected. See the [Shared Hand review](../../workspace/2026-10-31_animal-mech-lab/shared-hand.card.json)
on the Mech Lab card for close-ups, measured reference triangle counts and
the generated hand image. The owner will use Tripo for the first mesh; the
current deliverable is a clear image with simplified geometry, an exposed wrist
attachment and an opposing thumb whose hinge axes align with the other fingers,
without a swivel or ball joint. The owner rejected v001's thumb, narrow peg
attachment and small, plain palm while accepting its fingers. The owner also
rejected v002c's thumb and its unnatural bend. Fresh thumb-side and side-profile
captures of the actual AC6 model now guide v003 directly, keeping the source's
open thumb pose and using an oblique horizontal view. The new image is ready
for owner review; earlier rejected images remain visible. Final
proportions and budget remain open; no new hand mesh or Unity import has been
produced.

## Project state and upkeep

The current prototype is the existing external `AC_Game` Unity project. Keep
it in place as the single authoritative working copy; do not copy or move it
into Workspace, or add a junction to its generated folders. This repository's
`prototype/` folder is a location pointer only.

On 23 October 2026 the project files identify Unity **6000.5.2f1**, URP
**17.5.0**, and the enabled scene `Assets/Scenes/Prototype Map.unity`. Authored
source covers custom movement, automatic targeting, shooting and projectile
pooling. `Build/AC.exe` exists, but its source revision and current runtime
quality are unverified. The matching Editor is installed. No Editor or build
was launched during the inventory. See the source snapshot for controls,
dependencies, local changes, and limitations.

First milestone, final mechanics, setting, visual style, progression, and
game scale remain open. Existing code is evidence of the starting point,
not approval of a final design.

Keep game source and assets imported for runtime use in the external Unity
project. Keep generated working assets and their editable sources with the
Workspace card under `assets/<asset-id>/`; desktop image uploads use `media/`.
Catalogue existing Unity content by its actual path without copying it into
this repository. Record which generated revision is selected and its eventual
import location in Unity, so the working source and runtime export are clear.

Each catalogue entry should identify its purpose, revision, review notes,
generator/model when used, saved prompt, and source/export locations. Keep
related variants together, record which version is selected, and review it
before treating it as accepted. Keep small asset reviews on the game card.
Substantial asset-development tasks can use their own linked cards, with related
iterations kept together and a catalogue entry on the game card.

Keep every image revision as a separate visible Versions entry with its own
stable ID, image, prompt and review notes. Preserve earlier entries when adding
a correction; replace an existing entry only when the owner explicitly asks.

The first player model uses the dedicated **Prototype Player Mech** card
(`prototype-player-mech`). Its initial tabs are Overview, References, and
Versions. Keep its generated working assets and editable sources in
`workspace/2026-10-23_prototype-player-mech/assets/player-mech/`; desktop image
uploads use that card's `media/` folder. References, appearance, scale,
articulation, generation route, and budget are still open. Record the selected
revision and eventual Unity import location in the game's Assets catalogue.

Overview and Prototype are maintained directly in `overview.html` and
`prototype.html`, using `project.css` and the shared report styles. The
original `overview.md` and `prototype.md` are historical setup snapshots,
not parallel sources to update. Assets uses `assets.card.json`; Decisions
stays in editable Markdown.

Maintain the wiki on this same card as work progresses. Record observed tests
separately from proposals, and log accepted decisions with dates and reasons.
Register new review tabs in `workspace/workspace.json` and update this card's
`updated` date after substantive changes.
