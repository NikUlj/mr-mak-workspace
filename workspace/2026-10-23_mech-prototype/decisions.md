# Decisions

Record agreed choices here with their date and reason. Keep experiments and
suggestions in the prototype notes until they are accepted. When a choice
changes, retain the earlier entry and link it to the replacement.

## Confirmed game direction

### D-001: Roguelike / roguelite structure

**Agreed: 23 October 2026 | Source: owner's project brief**

The game will be a roguelike / roguelite. The exact distinction, run structure,
and treatment of persistent progression remain undecided.

### D-002: Armored Core gameplay inspiration

**Agreed: 23 October 2026 | Source: owner's project brief**

The Armored Core series is the gameplay inspiration. This establishes the
reference direction; it does not yet select particular mechanics, controls,
customization systems, or content requirements.

## Project and process agreements

### D-003: Prototype before continuing research

**Recorded: 23 October 2026 | Source: owner's instruction and the prior research discussion**

Create and evaluate prototypes before continuing the research. Use the
observations to inform later production estimates and decisions.

### D-004: A separate Mech Prototype brief and wiki

**Agreed: 23 October 2026 | Source: owner's instruction**

Keep this project under the Game category in its own card, holding the
prototype, generated assets, and decisions. Do not use the game concept from
Project Playground. Start with D-001 and D-002 as the only confirmed game
direction.

### D-005: Visual project pages with editable working records

**Agreed: 23 October 2026 | Source: owner's approval of the layout revision**

Use HTML for Overview and Prototype, taking the Dream Game project's visual
organization as a reference. Keep Assets as the directly editable gallery and
Decisions as Markdown. Use the shared Workspace styling and support both
light and dark themes. This presentation choice does not establish the game's
art direction.

### D-006: Keep AC_Game as the external prototype source

**Agreed: 23 October 2026 | Source: owner's approval and project location**

Keep the current Unity project at `F:\Unity Projects\AC_Game` as the single
authoritative working copy, referenced from this card. Workspace holds the
wiki, generated working assets, decisions, and review evidence. The local
`projects/mech-prototype/prototype/` folder is a pointer, not a second game
project. Do not move the Unity folder or create a junction into Workspace.

The current files identify Unity 6000.5.2f1 and the Prototype Map scene. Use
the existing implementation as the starting point, with runtime quality still
to be checked. Its controls and systems do not settle the final game design.
Catalogue existing assets by their Unity paths; record a generated asset's
chosen source revision and runtime import location when it is integrated.

### D-007: A dedicated Prototype Player Mech card

**Agreed: 23 October 2026 | Source: owner's instruction in the card-organization discussion**

Create a separate **Prototype Player Mech** card for the first player mech's
references, concept rounds, model revisions, and review history. Keep related
iterations on that card, following the Arachne Character Lab example. It remains
an asset task within Mech Prototype, with a link from the game's
[Assets catalogue](#/mech-prototype/2).

This refines D-004's organization: the game card remains the main wiki and asset
catalogue; this substantial asset-development task has its own linked card.
The authoritative Unity project remains unchanged under D-006. The selected
model revision and actual import location will be recorded when available.

Open [Prototype Player Mech](#/prototype-player-mech/0). Its Workspace card ID is
`prototype-player-mech`.

## Future entries

For each new agreement, add a stable decision ID, date, choice, reason, and
links to supporting prototype or asset evidence. Mark any superseded choice
and identify its replacement. Unanswered questions remain on the
[Overview](overview.html).
