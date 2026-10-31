# Player mech v003: separate body-part images

Created 24 October 2026 from the owner-requested v002 modular character sheet. The user requested one arm with a more neutral hand pose like v001. The anatomical right arm, marked **01**, was used.

## Inventory

| Image | Contents | Native size | Visual verdict |
| --- | --- | --- | --- |
| [Head](player-mech-head-front-v003.png) | Complete head and neck attachment, including pale cheek structures. | 1254 x 1254 | Pass |
| [Core / Body](player-mech-core-front-v003.png) | Headless core, shoulder connection sockets, chest columns and lower waist coupling. | 1254 x 1254 | Pass |
| [Single arm, relaxed hand](player-mech-right-arm-neutral-v003.png) | Anatomical right arm, viewer-left in v002; shoulder armor through complete attached five-digit hand. | 1024 x 1536 | Pass |
| [Pelvis and legs](player-mech-legs-front-v003.png) | Pelvis, hips, paired complete legs and both feet. | 1024 x 1536 | Pass |

[Source character sheet](../v002-character-sheet/player-mech-modular-sheet-v002.png) | [Neutral hand-pose reference](../v001-neutral/player-mech-neutral-front-v001.png) | [Structured manifest](manifest.json) | [Download pack](player-mech-separated-parts-v003.zip)

## Visual review

All four generated outputs were inspected at full size against the sheet. Each contains only its intended complete module, with a blank white background and no sheet labels or panel borders. The camera remains front-facing with no three-quarter drift or body twist. No essential shoulder, neck connector, fingertip, foot or toe is cropped.

The core retains an empty neck socket with no duplicated head. Both legs remain attached to the pelvis; both complete feet face forward. Asymmetric thigh markings, the arm's 01 and crest, head cheek structures, chest columns and dark palette remain recognizable.

The arm is a single complete anatomical right arm from shoulder armor through its attached hand. Its four articulated fingers sit close together and curve gently, with a separate relaxed thumb. This replaces v002's wide spread hand pose while preserving five digits. The v001 image was supplied only to guide the relaxed pose.

These are image-editor extractions, not pixel-identical crops. Fine lettering and newly exposed interfaces are approximate; separate image scales do not establish connector dimensions. Native resolution is below the prompts' 2K preference, and the files have not been upscaled.

## Provenance and status

Four completed edits used the built-in image_gen editor. Exact model and seeds were not exposed. Prompts are preserved separately in [head](prompts/head.txt), [core](prompts/core.txt), [arm](prompts/arm.txt) and [legs](prompts/legs.txt) text files. Source/output hashes and structured front-view verdicts are in the manifest. Local generation receipts remain outside Git.

All four parts passed agent visual review and await owner review. Earlier references and revisions are preserved. No mesh or Unity project was changed.

## Delivery verification

Overview and Versions passed card-schema validation. Both tabs were checked in an isolated browser preview at 1440, 768 and 390 px in dark and light themes, with navigation collapsed at narrow widths. All four images loaded and the saved prompts expanded without horizontal overflow. All four image previews, 100%/fit controls, close controls and PNG downloads were checked at desktop width; the arm preview controls were also checked at every width and theme. Source images, saved prompts, review, manifest and ZIP links returned successfully. Desktop and phone captures were visually reviewed. Local evidence is retained under `.mrmak/verification/player-mech-v003/` outside Git. No running Workspace application was restarted or updated.
