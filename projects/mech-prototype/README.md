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
- [Asset catalogue](../../workspace/2026-10-23_mech-prototype/assets.card.json)
- [Decision log](../../workspace/2026-10-23_mech-prototype/decisions.md)
- **Authoritative Unity project:** `F:\Unity Projects\AC_Game`
- [Project folder shortcut for this Windows PC](../../workspace/2026-10-23_mech-prototype/links/AC_Game-shortcut.zip) (extract the ZIP, then open `AC_Game.url`)
- [Source inventory and evidence](project-snapshot.md)
- [Local source-location pointer](prototype/README.md)

The Workspace card ID is `mech-prototype`, in the `game` category.

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
before treating it as accepted. Add motion or model review tabs to this card
when needed.

Overview and Prototype are maintained directly in `overview.html` and
`prototype.html`, using `project.css` and the shared report styles. The
original `overview.md` and `prototype.md` are historical setup snapshots,
not parallel sources to update. Assets uses `assets.card.json`; Decisions
stays in editable Markdown.

Maintain the wiki on this same card as work progresses. Record observed tests
separately from proposals, and log accepted decisions with dates and reasons.
Register new review tabs in `workspace/workspace.json` and update this card's
`updated` date after substantive changes.
