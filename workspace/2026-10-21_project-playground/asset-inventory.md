# Step 4: asset and content ledger

**22 October 2026 | Scope v2.1 | Planning estimates, not measured throughput.**

Read the [findings and bottlenecks](asset-findings.md) first. This ledger expands the proposed larger games; it does not approve their designs or estimate their complete development schedules.

Editable inputs: [asset-inputs.json](research/asset-inputs.json). Arithmetic: [asset-calculations.json](research/asset-calculations.json). Rebuild this tab with [render_assets.py](research/render_assets.py). Changes to the input rows must also be reflected in the narrative conclusions.

## How to read the numbers

- **L/B/H** means low/base/high planning scenarios, not probability bounds. Low uses simpler presentation, fewer ancillary pieces and cleaner revisions; high uses more pieces, retries and correction. No scenario drops the required two mech leg families, bosses or core equipment roster. Horror retains the prior 28–36-room planning range around 32. Playtime is still untested.
- **C / I / P** are owner-attention hours per unit for creation/adaptation, integration, and polish/local testing. Prompting, choosing/rejecting takes, operating the agent, manual corrections and inspecting results are owner work. Unattended agent execution and provider waiting are unmeasured separate elapsed time, not silently added as labor or treated as free deadline capacity.
- **Row total = quantity × (C + I + P)** within each scenario. Base hours are exact arithmetic of coarse inputs, not precise predictions. In the rate table each cell itself lists L/B/H. The totals include one owner, existing computer/software where available, self-created assets and sparse music; no outsourcing or purchased packs.
- Model rows include concept preparation, generation review if used, topology/decimation, UV/material assignment, scale/pivot, collision/LOD and import. Rigs, animation and cross-asset reviews have separate rows. Shared materials mean master surfaces; their per-model assignment is already in model rows.
- Content configuration and local balance are included. Gameplay systems, full-game economy tuning, broad QA, accessibility implementation, marketing operation, community/support and storefront engineering remain in Step 5. See the handoff boundary below to avoid double counting.
- All hour rates are **analyst judgment with low confidence**, informed by the scope and static prototype audit, not developer disclosures or provider speed claims. Similar 0.5×/2× rate bounds deliberately express coarse uncertainty; they are not an AI multiplier. A novice pipeline failure or redesign can exceed the high case.
- Every row has **zero assumed purchase/contractor fee** under the self-creation baseline; that does not mean zero cash. Tripo-eligible rows carry seed counts and credits below. Shared subscriptions, GPT usage, optional image/audio tools, taxes and existing-license status are separate unresolved cash inputs in the [pipeline report](production-pipeline.md).

## Asset/content workload only

| Candidate | Combined L/B/H hours | Fixed base quantities, L/B/H rates | Base creation / integration / polish |
| --- | --- | --- | --- |
| Last Circuit: horror | 798 / 1,893 / 4,546 | 941.5 / 1,893 / 3,778 | 902 / 391 / 600 |
| Redline: mech | 871 / 1,985 / 4,568 | 992.5 / 1,985 / 3,970 | 886 / 478.5 / 620.5 |
| Scrapline: provisional incremental | 184.5 / 414 / 961 | 207 / 414 / 828 | 154 / 108.5 / 151.5 |

**These are partial production workloads, not time-to-release estimates.** No numerical savings for the existing prototypes are subtracted. Native reuse validation could change remaining work. No general contingency percentage is added on top; row high rates already include more correction, while whole-project risks will be explicit in Step 5.

## Last Circuit: horror

### Quantities, reuse and boundaries

| ID / family | Unit; L/B/H quantity | Base first paid subset | Source / reuse / technical boundary |
| --- | --- | --- | --- |
| H01 — Art direction and pipeline | setup; 1 / 1 / 1 | 1 | Manual reference/style sheet and import presets. Palette, scale, naming, shader/LOD conventions; first round-trip setup. No paid concept-image allowance specified. |
| H02 — Covered-face player | body model; 1 / 1 / 1 | 1 | Tripo seed plus manual cleanup; prototype YBot is a reference. Model includes topology, UV/material and collision; rig/animation separate. No final-art reuse credit. |
| H03 — Regular creature bodies | body model; 6 / 6 / 6 | 3 | AI-assisted/manual; shared materials and anatomy within 3 families. Six distinct silhouettes; repeated skeleton does not eliminate model cleanup. Behavior code belongs in Step 5. |
| H04 — Boss bodies | body model; 2 / 2 / 2 | 1 | AI-assisted/manual. Two additional bodies; weak-point separation and readable silhouette. No dismemberment. |
| H05 — Rigs and skin binding | rig family; 6 / 6 / 6 | 4 | Manual or auto-rig followed by weight fixes. 1 player + 3 regular + 2 boss skeletons; weights on all 9 bodies included. First chapter assumes 2 regular families. |
| H06 — Player motion library | authored clip/pose; 30 / 40 / 52 | 32 | Reference -> Blender agent -> owner fixes; existing clips conditional. Base 9 locomotion + 7 starts/stops/turns + 16 weapon handling + 8 hit/death/interactions. No proven reuse subtraction. |
| H07 — Regular creature motion | authored clip; 24 / 32 / 44 | 20 | Shared family motion plus attack variants; manual correction. Base 18 shared movement/reaction clips + 14 archetype actions. Pose retargeting still needs contacts/timing checks. |
| H08 — Boss motion | authored clip; 14 / 20 / 28 | 10 | Reference-guided/manual bespoke motion. Base 10 clips per boss. Telegraph, attack, recovery, hit and death; complexity not captured by polygon count. |
| H09 — Connected motion and weapon contacts | integration package; 1 / 1 / 1 | 1 | Animator/IK authoring and tuning. Cross-clip blending, weapon-hand alignment and interruption checks; excludes gameplay controller/health implementation. |
| H10 — Firearms | weapon assembly; 4 / 4 / 4 | 2 | AI-assisted/manual with shared materials. Four guns; magazines/moving parts included, animations in H06 and effects in H20. |
| H11 — Structural kit | reusable mesh module; 24 / 32 / 44 | 28 | Manual/code-assisted modular geometry. Walls/floors/frames/stairs/ceiling pieces; repeated placements costed in rooms, not new meshes. |
| H12 — Sector dressing and landmarks | unique prop assembly; 26 / 40 / 60 | 24 | Mixed manual and Tripo seeds; four sector sets. Base 12 shared + 7 per sector. AI seeds are subset of props; remaining props derived/manual. No exact placement count yet. |
| H13 — Shared surfaces and decals | material family; 8 / 12 / 18 | 8 | Manual palette/atlas and reusable masks. Shared master surfaces only; individual asset UV assignment is in model rows. No full PBR scan workflow assumed. |
| H14 — Room layout, dressing and light | authored room; 28 / 32 / 36 | 12 | Reuse structural kit/props; manual scene authoring. 32 includes 3 safe rooms and 2 boss rooms. Navigation, sightlines, light readability; encounter tuning in H18. |
| H15 — Connecting passages | authored passage; 8 / 8 / 8 | 4 | Reuse kit; manual placement. Eight connecting spaces, not eight new environment kits. |
| H16 — Interactive and pickup props | prop family; 8 / 12 / 16 | 8 | AI-assisted/manual with shared interaction shapes. Base 4 ammo + 1 heal + 2 key families + door + breaker + shutter + terminal + container; behavior systems Step 5. |
| H17 — Puzzles and route changes | authored puzzle; 6 / 6 / 6 | 2 | Manual content in shared power/interaction systems. Puzzle logic configuration and softlock testing; generic switch/save system implementation Step 5. |
| H18 — Threat/combat arrangements | authored encounter; 24 / 24 / 24 | 8 | Manual enemy/resource placement and pacing. 24 includes 2 bosses, not 24 plus bosses. Revisit states and resource tuning included; reusable AI systems excluded. |
| H19 — Narrative and ending | text package; 1 / 1 / 1 | 0.6 | Owner-authored/editable English text. Up to 4000 narrative words and 30 notes/signs, sector beats and one text/gameplay ending. No voice/cinematics. |
| H20 — Visual feedback | effect family; 12 / 18 / 26 | 12 | Manual/procedural particle and shader work. Reusable muzzle/impact/hit/power/dust/creature cues; variants use shared systems. Effects are not free code output. |
| H21 — Sound effects | event bank; 45 / 60 / 90 | 40 | Owner recording/synthesis/editing; generation optional. Base 60 events with usually 2-3 takes (120-180 files), not 60 takes. Event wiring/mix included; playback framework Step 5. |
| H22 — Ambience and music | loop/stem; 6 / 8 / 12 | 5 | Owner synthesis/composition; sparse score. Base 4 sector ambience + 4 sparse musical stems. Music expertise unknown; no paid audio provider chosen. |
| H23 — HUD and menus | screen/state layout; 8 / 10 / 12 | 10 | Manual UI plus reusable widgets. 10: title, save/load, HUD, inventory, map, notes, pause, settings, death, ending. Visual/data binding only; underlying save/settings logic Step 5. |
| H24 — UI symbols | unique icon; 24 / 36 / 48 | 26 | Manual/vector family with tint/state reuse. Equipment, pickups, navigation, status and prompts. Font ownership checked later; no custom font creation. |
| H25 — Store and trailer assets | launch media package; 1 / 1 / 1 | 1 | Self-created from finished game and edited key art. One capsule composition with required crops, 6-8 captures, 45-75s gameplay trailer and short clips. Outreach/store operation Step 5. |
| H26 — Cross-content finish | final review pass; 1 / 1 / 1 | 0.6 | Manual in-engine consistency/performance review. Content LOD/collider/material fixes across scenes; full release regression, optimization architecture and playtesting Step 5. |

### Owner-attention rates and resulting workload

| ID | C hours/unit L/B/H | I hours/unit L/B/H | P hours/unit L/B/H | Total hours L/B/H |
| --- | --- | --- | --- | --- |
| H01 | 12 / 24 / 40 | 4 / 8 / 16 | 4 / 8 / 16 | 20 / 40 / 72 |
| H02 | 10 / 20 / 40 | 2 / 4 / 8 | 3 / 6 / 12 | 15 / 30 / 60 |
| H03 | 4 / 8 / 16 | 1 / 2 / 4 | 1 / 3 / 6 | 36 / 78 / 156 |
| H04 | 10 / 20 / 40 | 2 / 4 / 8 | 3 / 8 / 16 | 30 / 64 / 128 |
| H05 | 3 / 6 / 12 | 1 / 2 / 4 | 2 / 4 / 8 | 36 / 72 / 144 |
| H06 | 1 / 2 / 4 | 0.25 / 0.5 / 1 | 0.75 / 1.5 / 3 | 60 / 160 / 416 |
| H07 | 1 / 2 / 4 | 0.25 / 0.5 / 1 | 0.75 / 1.5 / 3 | 48 / 128 / 352 |
| H08 | 2 / 4 / 8 | 0.5 / 1 / 2 | 1 / 2 / 4 | 49 / 140 / 392 |
| H09 | 12 / 24 / 48 | 12 / 24 / 48 | 12 / 24 / 48 | 36 / 72 / 144 |
| H10 | 3 / 6 / 12 | 1 / 2 / 4 | 1 / 2 / 4 | 20 / 40 / 80 |
| H11 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 24 / 64 / 176 |
| H12 | 0.75 / 1.5 / 3 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 32.5 / 100 / 300 |
| H13 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 8 / 24 / 72 |
| H14 | 1.5 / 3 / 6 | 1 / 2 / 4 | 1.5 / 3 / 6 | 112 / 256 / 576 |
| H15 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 12 / 24 / 48 |
| H16 | 1 / 2 / 4 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 16 / 48 / 128 |
| H17 | 2 / 4 / 8 | 1 / 2 / 4 | 2 / 4 / 8 | 30 / 60 / 120 |
| H18 | 1 / 2 / 4 | 0.5 / 1 / 2 | 1 / 2 / 4 | 60 / 120 / 240 |
| H19 | 8 / 16 / 32 | 2 / 4 / 8 | 4 / 8 / 16 | 14 / 28 / 56 |
| H20 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.5 / 1 / 2 | 15 / 45 / 130 |
| H21 | 0.25 / 0.5 / 1 | 0.1 / 0.25 / 0.5 | 0.15 / 0.25 / 0.5 | 22.5 / 60 / 180 |
| H22 | 2 / 4 / 8 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 18 / 48 / 144 |
| H23 | 1 / 2 / 4 | 1 / 2 / 4 | 1 / 2 / 4 | 24 / 60 / 144 |
| H24 | 0.25 / 0.5 / 1 | 0.1 / 0.25 / 0.5 | 0.15 / 0.25 / 0.5 | 12 / 36 / 96 |
| H25 | 12 / 24 / 48 | 4 / 8 / 16 | 4 / 8 / 16 | 20 / 40 / 80 |
| H26 | 0 / 0 / 0 | 12 / 24 / 48 | 16 / 32 / 64 | 28 / 56 / 112 |

### Base workload by family

| Family | Owner hours |
| --- | --- |
| Direction/setup | 40 |
| Character/weapon models | 212 |
| Rigs/motion/contacts | 572 |
| World kits/props/materials | 236 |
| Spaces/puzzles/encounters/story | 488 |
| VFX/audio | 153 |
| UI/icons | 96 |
| Media/content finish | 96 |

**First paid scenario:** Illustrative first of two finished chapters, approximately 2 hours: 2 sectors, 12 rooms + 4 passages, 2 guns, 3 regular enemies, 1 boss, 8 encounters including boss, 2 puzzles. Final target remains 4-6 hours; duration untested.

The first-paid column is a subset of the base final inventory, not additional content. Fractional packages allocate effort (for example narrative preparation), never fractional meshes. It is not a claim that this subset is already saleable.

## Redline: mech

### Quantities, reuse and boundaries

| ID / family | Unit; L/B/H quantity | Base first paid subset | Source / reuse / technical boundary |
| --- | --- | --- | --- |
| M01 — Style and attachment standards | setup; 1 / 1 / 1 | 1 | Manual reference/style sheet, socket rules and tools. Scale, pivots, joint envelopes, mount axes and palette; generic garage/stat implementation Step 5. |
| M02 — Body and booster equipment | equipment assembly; 18 / 18 / 18 | 12 | Tripo seeds plus manual separated mechanical parts. 4 legs + 4 torsos + 4 arm-pairs + 3 heads + 3 boosters. Base about 61 rigid pieces, not 18 meshes; each assembly includes segmentation/UV/pivots. |
| M03 — Visible weapons | equipment assembly; 12 / 12 / 12 | 6 | AI-assisted/manual mechanical modeling. 8 main + 4 shoulder; base about 24 pieces. Does not include projectile behavior code. |
| M04 — Regular enemy base bodies | body/rig family model; 5 / 5 / 5 | 4 | AI-assisted/manual; share player materials/parts selectively. 5 base models; 5 further silhouettes in M05 make 10 archetypes. Rigs separate. |
| M05 — Regular enemy derivatives | body variant; 5 / 5 / 5 | 2 | Manual kit derivatives with role-readable additions. New silhouette/loadout on a shared body; distinct behavior costed in Step 5, not a recolor counted as a new role. |
| M06 — Boss body kits | boss assembly; 3 / 3 / 3 | 2 | AI-assisted/manual, reuse fittings/materials. Three additional body kits, movable weapons/weak points; no dynamic destruction. |
| M07 — Mechanical rigs | rig family; 10 / 10 / 10 | 8 | Manual rigid parenting/weights; shared joint conventions. 2 player + 5 enemy + 3 boss rigs. Binding all derivatives included. Nonhuman legs do not assume Unity Humanoid retargeting. |
| M08 — Player authored motion/poses | clip/pose; 24 / 32 / 44 | 32 | Reference-guided Blender with manual correction. Base 16 per leg family: idle, directional gaits, jump/land, boost, reactions. Procedural overlays in M11; not duplicate full gaits. |
| M09 — Regular enemy motion | clip/pose; 20 / 30 / 45 | 22 | Shared family clips and parameterized motion. Base 6 per family including attacks/reactions. Turret rotation and drone movement can be coded, still authored/tuned. |
| M10 — Boss telegraphs and motion | clip/pose; 18 / 27 / 36 | 18 | Bespoke/manual plus mechanical motion. Base 9 actions per boss; contact/telegraph timing included, boss AI logic Step 5. |
| M11 — Procedural motion overlays | player family; 2 / 2 / 2 | 2 | Code-assisted foot placement/lean/aim and owner tuning. Overlay authoring/integration included here; core movement physics Step 5. Two distinct leg families remain in all cases. |
| M12 — Loadout clearance review | compatibility package; 1 / 1 / 1 | 0.75 | Manual and scripted pose/attachment checks. Boundary builds and pair coverage, not every combinatorial build. Functional equipment/stat test framework Step 5. |
| M13 — Shared structural modules | mesh module; 24 / 36 / 48 | 30 | Manual/code-assisted modular geometry. Floors, cover, ramps, towers, walls; arenas reuse these meshes. |
| M14 — Theme dressing and landmarks | prop assembly; 18 / 30 / 45 | 22 | Manual/Tripo; repeated pieces and palettes. Base 12 common + 6 per theme; 3 themes. Placement counted in M16. |
| M15 — Shared surfaces and decals | material family; 8 / 12 / 18 | 9 | Manual palette/atlas. Master surfaces only; per-model materials and UVs in model rows. |
| M16 — Arena layout/dressing/light | arena; 12 / 12 / 12 | 8 | Manual reusable-kit assembly. 3 themes x (3 regular + 1 boss). Includes traversal/cover/LOS, not encounter wave tuning. |
| M17 — Encounter configurations | template; 27 / 27 / 27 | 18 | Manual combinations/objective timing. 24 regular templates across 4 objective families + 3 bosses. Core objectives/AI implementations Step 5. |
| M18 — Run-upgrade content | entry; 36 / 36 / 36 | 20 | Manual data/text/tuning; family reuse. 12 behavior-changing effects + 24 stat entries; effect-system code Step 5, local data balancing here. |
| M19 — Equipment content and unlocks | entry; 36 / 36 / 36 | 22 | Manual data/configuration. 30 visible items + 6 internals; distinct from their geometry. Whole progression economy/playtests Step 5. |
| M20 — Combat visual feedback | effect family; 20 / 30 / 42 | 22 | Manual/procedural particles, trails and shaders. Boost, four weapon families, impacts, explosions, shields/telegraphs, heat and status. Multi-actor clarity requires testing. |
| M21 — Sound effects | event bank; 45 / 70 / 100 | 50 | Owner synthesis/recording/editing; AI optional. Base 70 events, usually 2-3 takes each. Local variation/mix and binding included; audio manager Step 5. |
| M22 — Ambience/music | loop/stem; 6 / 9 / 12 | 6 | Owner composition/synthesis, reused layers. Base 3 ambience + 6 combat/menu stems; provider/skill unknown. |
| M23 — HUD/garage/menus | screen/state layout; 9 / 11 / 14 | 11 | Manual layout/widget/data binding. Title, profiles, garage, loadout compare, HUD, route, upgrades, results, pause, settings, ending; functionality systems Step 5. |
| M24 — Equipment/status symbols | unique icon; 45 / 60 / 80 | 42 | Manual/vector or cleaned model renders. Base 36 equipment + 12 effect families + 12 utility/status. Ranks/recolors not new icons. |
| M25 — Onboarding and ending text | text package; 1 / 1 / 1 | 0.75 | Owner writing/editing. Short descriptions/tutorials/endpoints; no voiced campaign or cinematic story. |
| M26 — Store and trailer assets | launch media package; 1 / 1 / 1 | 1 | Owner art/captures/edit. Capsule/crops, 6-8 screenshots, 45-75s gameplay trailer, clips; no marketing outreach hours here. |
| M27 — Cross-content finish | review pass; 1 / 1 / 1 | 0.7 | Manual Unity consistency/performance corrections. Asset-facing final sweep, not total release QA or systemic optimization. |

### Owner-attention rates and resulting workload

| ID | C hours/unit L/B/H | I hours/unit L/B/H | P hours/unit L/B/H | Total hours L/B/H |
| --- | --- | --- | --- | --- |
| M01 | 16 / 32 / 64 | 8 / 16 / 32 | 8 / 16 / 32 | 32 / 64 / 128 |
| M02 | 2 / 4 / 8 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 54 / 108 / 216 |
| M03 | 2 / 4 / 8 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 36 / 72 / 144 |
| M04 | 4 / 8 / 16 | 1 / 2 / 4 | 1 / 2 / 4 | 30 / 60 / 120 |
| M05 | 1 / 2 / 4 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 10 / 20 / 40 |
| M06 | 8 / 16 / 32 | 2 / 4 / 8 | 2 / 4 / 8 | 36 / 72 / 144 |
| M07 | 2 / 4 / 8 | 1 / 2 / 4 | 1 / 2 / 4 | 40 / 80 / 160 |
| M08 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.5 / 1 / 2 | 30 / 80 / 220 |
| M09 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.5 / 1 / 2 | 25 / 75 / 225 |
| M10 | 1 / 2 / 4 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 36 / 108 / 288 |
| M11 | 12 / 24 / 48 | 6 / 12 / 24 | 8 / 16 / 32 | 52 / 104 / 208 |
| M12 | 8 / 16 / 32 | 12 / 24 / 48 | 16 / 32 / 64 | 36 / 72 / 144 |
| M13 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 24 / 72 / 192 |
| M14 | 0.75 / 1.5 / 3 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 22.5 / 75 / 225 |
| M15 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 8 / 24 / 72 |
| M16 | 2 / 4 / 8 | 2 / 4 / 8 | 3 / 6 / 12 | 84 / 168 / 336 |
| M17 | 1 / 2 / 4 | 0.5 / 1 / 2 | 1 / 2 / 4 | 67.5 / 135 / 270 |
| M18 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 0.5 / 1 / 2 | 36 / 72 / 144 |
| M19 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 0.5 / 1 / 2 | 36 / 72 / 144 |
| M20 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 30 / 90 / 252 |
| M21 | 0.25 / 0.5 / 1 | 0.1 / 0.25 / 0.5 | 0.15 / 0.25 / 0.5 | 22.5 / 70 / 200 |
| M22 | 2 / 4 / 8 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 18 / 54 / 144 |
| M23 | 1 / 2 / 4 | 1 / 2 / 4 | 1 / 2 / 4 | 27 / 66 / 168 |
| M24 | 0.25 / 0.5 / 1 | 0.1 / 0.25 / 0.5 | 0.15 / 0.25 / 0.5 | 22.5 / 60 / 160 |
| M25 | 4 / 8 / 16 | 2 / 4 / 8 | 2 / 4 / 8 | 8 / 16 / 32 |
| M26 | 12 / 24 / 48 | 4 / 8 / 16 | 4 / 8 / 16 | 20 / 40 / 80 |
| M27 | 0 / 0 / 0 | 12 / 24 / 48 | 16 / 32 / 64 | 28 / 56 / 112 |

### Base workload by family

| Family | Owner hours |
| --- | --- |
| Direction/attachment setup | 64 |
| Equipment/enemy models | 332 |
| Rigs/motion/compatibility | 519 |
| World kits/props/materials | 171 |
| Arenas/encounters/content data | 463 |
| VFX/audio | 214 |
| UI/icons | 126 |
| Media/content finish | 96 |

**First paid scenario:** Illustrative EA: both leg families; 12 body/booster entries + 6 weapons (4 main, 2 shoulder) + 4 internals; 2 themes, 8 arenas, 6 regular enemies, 2 bosses, 16 regular encounter templates plus bosses, 20 upgrades, 2 challenge tiers. A complete two-stage run endpoint, not the final three-stage scope.

The first-paid column is a subset of the base final inventory, not additional content. Fractional packages allocate effort (for example narrative preparation), never fractional meshes. It is not a claim that this subset is already saleable.

## Scrapline: provisional incremental

### Quantities, reuse and boundaries

| ID / family | Unit; L/B/H quantity | Base first paid subset | Source / reuse / technical boundary |
| --- | --- | --- | --- |
| I01 — Visual grammar and pipeline | setup; 1 / 1 / 1 | 1 | Manual/vector/code-assisted. Palette, tile scale, export/render rules; no 3D generation needed. |
| I02 — Workbench and station states | scene-state visual; 4 / 4 / 4 | 4 | Manual schematic/vector. 1 bench + 3 restoration states; same scene/layout reused. |
| I03 — Wreck silhouettes | unique outline; 6 / 6 / 6 | 6 | Manual/vector; shared tile grammar. Six recognizably different outlines, not generated 3D wrecks. |
| I04 — Wreck internal layouts | authored layout; 12 / 12 / 12 | 12 | Manual seam/core/material placement. Two layouts per wreck; local route testing. Cut simulation code Step 5. |
| I05 — Tile/material symbols | visual family; 4 / 6 / 9 | 6 | Manual/code-assisted atlas. Reused across thousands of tiles; repetition not unique art. Large counts still need performance engineering. |
| I06 — Tools and drone | visual assembly; 4 / 4 / 4 | 4 | Manual vector shapes. 3 tools + 1 drone; 3 drone functions share the shape, code Step 5. |
| I07 — Feedback and transitions | effect family; 8 / 12 / 18 | 12 | Manual/procedural shaders/tweens/particles. 3 tool effects + drone + collection/core/upgrade/tier/ending cues. No fracture physics. |
| I08 — Interface layouts | screen/state layout; 6 / 8 / 10 | 8 | Manual reusable widgets. HUD, tree, contracts/restoration, title, pause, settings, save/reset confirmation, ending. Save/settings code Step 5. |
| I09 — Icons | unique symbol; 22 / 28 / 36 | 28 | Manual/vector family. 18 scope icons (12 effects + 3 tools + 3 resources) plus base 10 utility icons. Rank/tint reuse. |
| I10 — Upgrade content | node; 36 / 36 / 36 | 36 | Manual data/text/local tuning. 12 effect families; repeated ranks part of 36. Effect implementation and full economy playtests Step 5. |
| I11 — Tier/restoration configurations | milestone; 9 / 9 / 9 | 9 | Manual content thresholds. 6 tier gates + 3 restoration beats. Local pacing included, whole-game balancing Step 5. |
| I12 — Sound effects | event bank; 18 / 24 / 36 | 24 | Owner synthesis/recording/editing. 24 events, usually 2-3 takes; deliberate repetition control. AI generation optional, unpriced. |
| I13 — Music/ambience | loop/stem; 2 / 3 / 5 | 3 | Owner composition/synthesis. Sparse machine ambience/music; no chosen paid generator. |
| I14 — Tutorial and ending text | text package; 1 / 1 / 1 | 1 | Owner writing/editing. Instructions, tool descriptions and a finite payoff; no large narrative script. |
| I15 — Store/trailer presentation | media package; 1 / 1 / 1 | 1 | Owner key art/game capture/editing. Capsule variants, 6 captures, 30-60s trailer and clips. Small graphics still need an attractive store page. |
| I16 — Cross-content readability finish | review pass; 1 / 1 / 1 | 1 | Manual Unity review at low/high progression. Color/size/overlap, effect caps and local fixes. Global save/performance/regression and appeal validation Step 5. |

### Owner-attention rates and resulting workload

| ID | C hours/unit L/B/H | I hours/unit L/B/H | P hours/unit L/B/H | Total hours L/B/H |
| --- | --- | --- | --- | --- |
| I01 | 4 / 8 / 16 | 2 / 4 / 8 | 2 / 4 / 8 | 8 / 16 / 32 |
| I02 | 1 / 2 / 4 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 8 / 16 / 32 |
| I03 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 6 / 12 / 24 |
| I04 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 1 / 2 / 4 | 24 / 48 / 96 |
| I05 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 3 / 9 / 27 |
| I06 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 4 / 8 / 16 |
| I07 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 12 / 36 / 108 |
| I08 | 1 / 2 / 4 | 1 / 2 / 4 | 1 / 2 / 4 | 18 / 48 / 120 |
| I09 | 0.25 / 0.5 / 1 | 0.1 / 0.25 / 0.5 | 0.15 / 0.25 / 0.5 | 11 / 28 / 72 |
| I10 | 0.25 / 0.5 / 1 | 0.25 / 0.5 / 1 | 0.5 / 1 / 2 | 36 / 72 / 144 |
| I11 | 0.5 / 1 / 2 | 0.25 / 0.5 / 1 | 0.75 / 1.5 / 3 | 13.5 / 27 / 54 |
| I12 | 0.25 / 0.5 / 1 | 0.1 / 0.25 / 0.5 | 0.15 / 0.25 / 0.5 | 9 / 24 / 72 |
| I13 | 2 / 4 / 8 | 0.5 / 1 / 2 | 0.5 / 1 / 2 | 6 / 18 / 60 |
| I14 | 2 / 4 / 8 | 1 / 2 / 4 | 1 / 2 / 4 | 4 / 8 / 16 |
| I15 | 8 / 16 / 32 | 2 / 4 / 8 | 2 / 4 / 8 | 12 / 24 / 48 |
| I16 | 0 / 0 / 0 | 4 / 8 / 16 | 6 / 12 / 24 | 10 / 20 / 40 |

### Base workload by family

| Family | Owner hours |
| --- | --- |
| Direction/setup | 16 |
| Visuals/layouts | 93 |
| VFX/audio | 78 |
| UI/icons | 76 |
| Upgrade/tier/text content | 107 |
| Media/content finish | 44 |

**First paid scenario:** Full release; no separate reduced first-paid inventory.

The first-paid column is a subset of the base final inventory, not additional content. Fractional packages allocate effort (for example narrative preparation), never fractional meshes. It is not a claim that this subset is already saleable.

## First paid release versus completion: content share only

Staging shifts some content later but keeps much of the pipeline, player movement, UI and attachment setup before the first sale. These scenarios are alternatives, not approved release plans. Additional episode/EA presentation work is included below; Step 5 must add support, update communication, migration and repeat release QA.

| Candidate/route | First subset | First-stage extra | First paid total | Remaining + later extra | Complete staged total | Full-launch content baseline |
| --- | --- | --- | --- | --- | --- | --- |
| Last Circuit: horror | 1,167.4 | 40 | 1,207.4 | 773.6 | 1,981 | 1,893 |
| Redline: mech | 1,475.2 | 16 | 1,491.2 | 541.8 | 2,033 | 1,985 |
| Scrapline: provisional incremental | 414 | 0 | 414 | 0 | 414 | 414 |

All numbers above are base owner hours for asset/content work only. Later total = final baseline minus first subset plus later extra. The source stores low/base/high extra allowances: horror first 20/40/80 and later 24/48/96 hours; mech first 8/16/32 and later 16/32/64. We do not mix a base first-stage quantity with low/high final quantities to imply calibrated stage bounds.

**Horror dependency:** place gates and chapter endings before room production. The first two sectors must support a complete dramatic arc while allowing later revisits. All-campaign plotting starts early; selling separate episodes adds packaging/progression questions. A chapter promise that needs later content to feel complete fails the first-paid test.

**Mech dependency:** EA includes both movement families and enough actual builds, two themes and bosses to test the central appeal. The two-stage endpoint must stand on its own; remaining content expands to three stages and the full equipment/upgrade roster. Replayability and price fit require testing; an EA label does not establish them.

**Secondary routes:** horror EA could use the same first content slice but needs a separate current-value/replay test; it is not assumed to save the episode restructuring allowance automatically. Mech episodes could reuse the EA slice, but shared garage/progression entitlement and repeated onboarding create additional work. Neither secondary route has a credible quantified total yet; keep it unscored until a packaging design exists.

## Tripo demand by asset family

A retained seed is one accepted starting model, not a final mesh, rig or animation. Many simple modules and all schematic incremental art use manual/code-assisted creation. Mechanical assemblies may need manual splitting into several pieces; if that fails, increase seeds or cleanup rates. These allocations are workflow hypotheses, not measured generation acceptance rates.

| Row | Retained seeds L/B/H | HD-route credits L/B/H |
| --- | --- | --- |
| H02 — Covered-face player | 1 / 1 / 1 | 45 / 75 / 120 |
| H03 — Regular creature bodies | 6 / 6 / 6 | 270 / 450 / 720 |
| H04 — Boss bodies | 2 / 2 / 2 | 90 / 150 / 240 |
| H10 — Firearms | 4 / 4 / 4 | 180 / 300 / 480 |
| H12 — Sector dressing and landmarks | 12 / 20 / 30 | 540 / 1,500 / 3,600 |
| H16 — Interactive and pickup props | 4 / 6 / 8 | 180 / 450 / 960 |
| M02 — Body and booster equipment | 18 / 18 / 18 | 810 / 1,350 / 2,160 |
| M03 — Visible weapons | 12 / 12 / 12 | 540 / 900 / 1,440 |
| M04 — Regular enemy base bodies | 5 / 5 / 5 | 225 / 375 / 600 |
| M06 — Boss body kits | 3 / 3 / 3 | 135 / 225 / 360 |
| M14 — Theme dressing and landmarks | 9 / 15 / 23 | 405 / 1,125 / 2,760 |

| Game | Retained seeds L/B/H | HD route credits L/B/H | P2 alternative credits L/B/H |
| --- | --- | --- | --- |
| Last Circuit: horror | 29 / 39 / 51 | 1,305 / 2,925 / 6,120 | 3,480 / 12,480 / 31,620 |
| Redline: mech | 47 / 53 / 61 | 2,115 / 3,975 / 7,320 | 5,640 / 16,960 / 37,820 |
| Scrapline: provisional incremental | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |

Formula: billable generations per retained seed = 1/3/6. HD = seeds × (attempts × 15 + 10 retopo + 20 UV); P2 alternative = seeds × (attempts × 100 + 20 UV). These are alternatives, not costs to add. Optional auto-rig: 20 credits/job; optional segmentation: 30/job; repeat passes, texture generation and reference images are extra. Unwanted but successfully generated results are not assumed refunded. Provider-free retries may reduce actual credits; measure them.

Operation reference: [Tripo Studio pricing/credits](https://www.tripo3d.ai/product-doc/getting-started/pricing-credits), checked 22 October 2026. Credit demand is not a cash quote; [pricing discrepancies, commercial-use conditions, subscription accounting and benchmark instructions](production-pipeline.md) explain what remains unresolved.

## Step 5 boundary: do not add these twice

| Already included here | Add separately in Step 5 |
| --- | --- |
| Model cleanup, rig binding, clip edits, asset import and local inspection | Gameplay controller/camera systems, damage/AI, reusable interaction and weapon logic |
| Animator/IK setup H09; procedural motion M11 and clearance review M12 | Garage/equipment system, loadout rules, stats and automated functional compatibility testing |
| Room/arena dressing, configured encounters, local puzzle checks | Generic objectives, run generation, progression architecture, global pacing/economy playtests and redesign |
| HUD/menu layout and binding to expected interfaces | Implementing saves/settings/input remapping/accessibility and robust error states |
| Event sound takes, VFX and local mix/readability | Shared playback/pooling frameworks and full-load profiling/optimization beyond asset fixes |
| One set of capsule/captures/trailer plus stated staged refresh | Audience building, demo engineering/festival operations, store setup, outreach, release QA and customer support |
| Row-level corrections and final asset consistency pass | Project-wide integration, release regression, migration, playtest recruitment, admin and unexpected systemic failures |

Low polygon count is not a performance acceptance criterion. Choose a minimum test machine and frame budget before the implementation benchmark; neither is known today. The benchmark must record actual geometry/material counts and measured behavior in Unity. See [the timed proof plan](production-pipeline.md).
