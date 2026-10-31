# Player mech v002: modular character sheet

Created 24 October 2026 from the owner's selected v001 neutral-front image.

[Open the character sheet](player-mech-modular-sheet-v002.png) | [Source v001](../v001-neutral/player-mech-neutral-front-v001.png) | [Initial prompt](prompt.txt) | [Correction prompt](correction-prompt.txt) | [Inventory and checks](manifest.json)

## Module inventory

| Panel | Module boundary | Visual check |
| --- | --- | --- |
| Head | Head and neck attachment, including the pale cheek structures | Isolated; front view; no torso |
| Core / Body | Central chest and lower torso, both long chest armor columns, neck socket and lower core coupling | Head removed; shoulder armor, arms and pelvis excluded |
| Arms (pair) | Both shoulder armor caps, upper arms, elbows, forearms, wrists and attached hands | Both complete; each hand has four distinct spread fingers and one thumb |
| Legs (pair) | Pelvis, central hip/crotch assembly, both legs and both feet | Complete connected lower-body module; feet face forward |

The four-group naming follows ACVI's Head, Core, Arms and Legs frame categories, documented in the [official frame-parts announcement](https://armoredcore6.bn-ent.net/en/information/?p=248). Assigning the shoulder armor and hands to this mech's arms, and its pelvis to the leg module, is the modeling interpretation used for this sheet.

## Review

The final full-size sheet was visually inspected against v001 using the host's image tools and the character-sheet front-view rubric. Each panel presents its module from the front without a three-quarter turn or body twist. The four groups are separated with clear panel labels. Both hands have ten individually countable digits in total, with open space between their fingertips. No weapon or shield was added. The asymmetric shoulder decals and thigh markings, torso panels, dark materials, red/brass accents and white leg tubes remain recognizable.

[Attempt 01](attempts/attempt-01-duplicate-head.png) was rejected because a duplicate head remained attached to the core. The targeted correction removed the head and cheek structures from that panel, retaining the isolated head and both complete five-digit hands.

The sheet uses different display scales between panels to keep the modules readable. Newly revealed neck and shoulder interfaces are inferred. Fine decal lettering remains approximate. The image editor returned a native **1254 x 1254 PNG**, despite the prompt requesting 2K or greater; it has not been upscaled. This is a visual reference for owner review. Exact connector dimensions and fit require later modeling decisions.

## Generation record

- Generator: built-in `image_gen` image editor; exact model and seed were not exposed.
- Two completed image edits: initial layout, followed by removal of the duplicated head from the core.
- Source SHA-256: `1c7695fad5d4fa0239c3c23af9fabafb4d28095d11e83eb75ec86b7c0ae64049`.
- Final SHA-256: `2f403f4530957bd4376bb7df82a048a397a95f3993285c7f30ce913585927721`.
- Source, final image, rejected take, complete prompts and structured review are retained together. Runtime receipts remain outside Git.

## Delivery verification

Overview and Versions were checked in browser preview at 1440, 768 and 390 px in dark and light themes. The final sheet loads at its native dimensions. Full-size and fit controls, download and close controls, source links, both prompt links, the review and the manifest work. Expanded prompts stay within the card width. Desktop and phone screenshots were visually checked; local captures are outside Git under `.mrmak/verification/player-mech-v002/`.
