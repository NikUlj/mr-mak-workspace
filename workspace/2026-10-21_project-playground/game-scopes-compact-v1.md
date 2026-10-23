# Step 2: three games we can meaningfully compare

> **Archived compact scenario.** The owner found the horror and mech scopes too
> small. Use [the current target scopes](game-scopes.md) for the main comparison.
> This earlier proposal is retained only as a possible reduced-scope fallback;
> its status and next-step statements are historical.

**21 October 2026 | Proposed research scopes, version 1**

We now have a bounded version of each candidate: a short third-person horror
game, a compact piloted mech roguelite, and a finite incremental salvage game.
The incremental candidate comes from three pitches below. **These are proposals
for comparison, not an approved game design or a production commitment.** Names,
settings, hooks, content counts, prices, and playtime targets are working choices.
The owner has confirmed the genres, low-poly direction for the two 3D games,
available time, asset workflow, and preference for mechs; these specific designs
are newly proposed here.

The useful scope distinction is where the remaining work lives. Horror depends
on believable character movement and authored atmosphere. Mechs can concentrate
art into modular machines but require strong combat, enemy behavior, and loadout
testing. The incremental proposal removes character animation and most 3D art,
while retaining substantial progression, interface, feedback, and balancing work.
This is a design assessment, **not a finding about which will be most profitable**.

## Comparison at a glance

| Candidate | Player promise | Proposed release boundary | Main uncertainty |
| --- | --- | --- | --- |
| **Horror: Last Circuit** | Reroute a failing facility's power, then survive the route you have made dangerous. | One location; 12 rooms plus 4 connecting passages; 2 guns; 2 regular enemy types and 1 final elite; 2-3-hour first completion target. | Can the camera, animation, enemy reactions, and sound make this small space compelling? |
| **Mech: Redline** | Pilot a customizable mech and push its reactor toward overheating for stronger attacks. | One biped rig; 2 torsos, 2 booster packs, 6 weapons; 4 regular enemy types; 3 combat arenas plus 1 boss arena; 20-30-minute successful runs. | Can a small part and encounter roster sustain satisfying builds and repeated runs? |
| **Incremental: Scrapline** | Cut apart schematic mech wrecks, then automate the work until entire hulls disappear in seconds. | One 2D workbench; 6 wreck silhouettes with 12 layouts; 3 tools; 36 upgrade nodes across 12 effect families; a 3-5-hour finite campaign target. | Is cutting and upgrading satisfying enough to sell without detailed art or a large content library? |

Playtime is a pacing target to test, not a development estimate, measured player
result, or promise of value. Repeated failures, grinding, or idle waiting should
not be used to manufacture those durations. A shorter enjoyable result should
lead to reconsidering positioning and price, not adding filler.

## Shared release assumptions

Use a complete, single-player premium Windows/Steam release in Unity as the
research baseline. The platform and business model remain unconfirmed. Each
candidate needs a beginning, understandable onboarding, progression, and an
ending or a completed run. Early Access is not assumed to reduce the work.

All three include reliable saves and resume, pause, audio/display settings,
readable UI, appropriate input settings, reduced camera shake/flashing options,
testing, performance work, a store capsule, screenshots, a short trailer, and
launch/support preparation. Assume English text initially, with text organized
for later translation; additional languages require separate estimates. Horror
and mech include keyboard/mouse and one standard gamepad control scheme. The
pointer-led incremental baseline uses keyboard/mouse; gamepad support is a
separate cost and market-positioning question for Step 3.

For both 3D games, propose opaque stylized materials, a limited palette, large
readable shapes, and a small modular environment kit. Horror uses a covered face;
mechs have no visible pilots. Detailed faces, cloth simulation, and cinematic
character acting are outside these scopes. Lighting, material consistency, weapon
contacts, silhouettes, and readable movement still need polish.

Assets remain personally created, with Tripo where useful and the specified
Blender MCP/reference/manual-correction workflow for animation. The 2D proposal
can use authored vector shapes and simple procedural effects; it does not need
Tripo merely because Tripo is available. No AI throughput advantage is assumed.

The counts below constrain **release content**, not every file needed to make it.
A rig is not an animation library; a room is not one mesh; an upgrade node is not
necessarily a new mechanic. Step 4 must expand these into low/base/high asset
inventories, including audio, effects, UI, integration, revisions, and marketing.

## A. Last Circuit: compact third-person survival horror

### Premise, loop, and audience

You are the last maintenance worker in a sealed industrial pumping facility.
Restoring the evacuation system requires diverting power away from the fixed
lights that restrain one of the creatures inside. **Opening the way out changes
which spaces are safe.** The setting offers reusable corridors, pipes, shutters,
service rooms, and machinery without requiring a large outdoor world.

The loop is: explore and scavenge -> decide whether to spend ammunition or avoid
an enemy -> reach a breaker -> choose which local circuit to power -> cross the
changed route -> unlock a shortcut and advance the evacuation objective. A
readable map and two safe rooms support revisiting the location.

The target buyer enjoys deliberate aiming, scarce supplies, close third-person
tension, and a compact story. The proposed reason to buy is the power decision
made tangible through combat and lighting. A short gameplay clip should show a
breaker opening a shutter, nearby lamps going out, and a previously suppressed
creature beginning to advance. Market novelty and buyer interest remain untested.

### Minimum release content

| Family | Baseline boundary |
| --- | --- |
| Player and controls | 1 covered-face human character and 1 player rig; over-the-shoulder camera; walk, sprint, aim, shoot, reload, interact, damage, and death. Directional movement and camera obstruction must work. |
| Weapons and supplies | 2 two-handed firearms: carbine and short shotgun. Separate ammunition, 1 healing item, and fixed key-item slots. Simple inventory; no inventory-grid puzzle or crafting. |
| Enemies | 2 regular types: a light-sensitive rushing creature and a slower creature that is not suppressed by lamps. 1 final elite with its own silhouette and attack timing, derived from the same creature rig family. Three enemy models; rig reuse must be verified. |
| Location | 12 rooms, including 2 safe rooms and the finale room, plus 4 short connecting passages. One industrial kit arranged into three recognizable sections; no additional biome. |
| Encounters and puzzles | 10 authored combat/threat encounters, including the finale; 4 breaker puzzles using one local power-switch system. Enemy placement, pacing, and changed return routes count as content work. |
| Story and ending | 1 evacuation objective, 1 ending, up to 16 short notes/signs totaling at most 1,800 narrative words. No voiced cast. End with an in-engine interaction and text/fade, not a cinematic sequence. |
| Presentation | Footsteps, weapon and creature sounds, industrial ambience, localized light changes, impacts, and a small HUD/map/inventory. Their exact asset counts belong in Step 4. |

The power mechanic uses authored two-way switches, not simulated wiring or a
general electrical network. The player's small flashlight remains available and
does not suppress creatures; fixed lamps do. Mandatory switches must not permit
an unwinnable power state. Door, light, enemy, and save states need explicit tests.

**Animation burden:** player locomotion and aiming, two weapon handling/reload
sets, damage/death, and a small reusable interaction set; creature movement,
attack anticipation, attacks, reactions, and deaths. Low-poly geometry does not
remove this dependency. Imported prototype locomotion is only conditional reuse;
the [audit](prototype-audit.md) found no completed horror combat loop.

### Scope controls and first proof

Exclude dismemberment, melee combos, dodge rolls, stealth takedowns, climbing,
escort characters, branching endings, dynamic destruction, and a pursuing enemy
that simulates the whole facility. An elaborate persistent stalker would require
another AI and pacing budget. The two regular enemies are encounter-local.

If work grows, reduce the room count and optional notes first. Preserve responsive
aiming, readable attacks, sound, and the power decision. If additional creature
rigs or lengthy animation sequences become necessary, re-estimate before
describing the game as a short production.

**Proposed proof, not yet built:** two connected rooms, one breaker, one gun,
one creature, and a complete movement -> aim -> fire -> reload -> take damage
sequence on the intended rig. A new player should understand the light rule,
make a power/ammunition choice, and complete the encounter without camera or
animation failures obscuring the action. Record manual correction and Unity
integration time. A beautiful corridor alone does not establish feasibility.

**Price hypothesis:** test US list prices of **$9.99, $12.99, and $14.99** in
the later comparison. These are positioning assumptions, not a pricing
recommendation or estimates of revenue per buyer.

## B. Redline: compact piloted mech action roguelite

### Premise, loop, and audience

Pilot a salvage mech through an abandoned automated foundry. Weapons and boosting
generate heat. Deliberately operating in the upper heat band improves weapon
behavior, but overheating temporarily limits weapons and boost. **The selling
hook is choosing how long to stay near that limit while dodging enemy fire.**
Begin with a single heat rule shared by all weapons; do not give every weapon
a separate alternate mode in the minimum release.

The loop is: choose equipment -> pilot, aim, jump, and boost through an encounter
-> choose a run upgrade and the next contract -> manage heat against the next
enemy mix -> defeat the boss or fail -> spend earned salvage on equipment unlocks
-> try a different build. Completion and failure both award bounded progress.

The target buyer wants direct mech combat, a small but consequential garage, and
repeatable builds. A trailer moment should show a cool, controlled fight turning
into a risky boosted attack while the same readable heat display approaches its
limit. Whether that hook is distinctive enough is a Step 3 question.

### Minimum release content

| Family | Baseline boundary |
| --- | --- |
| Player frame | 1 biped skeleton and fixed leg assembly, with 2 interchangeable torso options and 2 booster packs. Shared attachment standards; no visible pilot. |
| Equipment | 6 weapon modules, with 2 equipped at once, plus 3 reactor tunings represented through UI/stats. Weapon families cover direct projectiles, guided projectiles, and a beam; some modules vary an existing firing system. Ten visible equipment options total: 2 torsos + 2 boosters + 6 weapons. |
| Movement | Ground movement/strafe, short jump, and dash/boost. Camera-relative controls and aim/lock-on assistance. No sustained free flight. |
| Regular enemies | 4 types: scout drone, gun drone, tracked attacker, and fixed turret. Four silhouettes/models; shared hover behavior where appropriate, plus tracked and stationary motion. |
| Boss | 1 boss mech assembled from the player part family, with a distinct attack sequence. Reusing meshes reduces modeling; it does not remove boss behavior, animation, telegraph, or encounter work. |
| Spaces and encounters | 3 reusable combat arenas plus 1 boss arena, all from one foundry kit. Nine regular encounter templates across elimination, capture/hold, and elite-target objectives; the boss encounter is additional. |
| Run structure | 5 regular encounters followed by the boss, targeting a 20-30-minute successful run. A simple choice between two next contracts; random selection from authored content, not generated geometry. Arena revisits are explicit. |
| Upgrades and progression | 18 run-upgrade entries: 6 behavior-changing effects and 12 bounded stat changes. Equipment unlocks and 3 challenge tiers total, including the initial tier. No endless permanent stat ladder or random-affix loot inventory. |
| Presentation | Boost trails, impacts, explosions, projectile/beam effects, enemy telegraphs, weapon/movement audio, combat HUD, garage, upgrade choices, and run results. These remain production tasks despite small model counts. |

Target roughly **5-8 hours to experience the main unlock progression**, with
optional build experimentation afterward. This is a proposed pacing range;
replayability must be demonstrated, and extra difficulty tiers are not new arenas
or new enemies. The baseline needs enough opening variety to avoid depending on
long grind before the enjoyable builds appear.

**Animation burden:** biped locomotion/strafe, jump and landing, boost poses,
weapon aiming/recoil, and damage/death states; simple drone and turret motion;
boss attack telegraphs. Procedural body lean and foot placement may fit a
programmer's strengths, but authoring and tuning them still take time. Every
torso, mount, weapon, and locomotion combination must remain readable and avoid
clipping. The prototype's movement, targeting, and projectile code is
[conditional reuse](constraints-and-reuse.md), not a completed run.

### Scope controls and first proof

Exclude multiple leg types, free-form scaling of parts, melee weapons, co-op,
PvP, destructible buildings, open-world traversal, bespoke cinematics, and
procedural arena generation. Tank, reverse-joint, and quadruped player legs would
each require more than a cosmetic mesh change. If those are essential to the
owner's desired experience, this baseline must be revised and re-estimated.

If work grows, reduce challenge tiers and secondary stat upgrades before cutting
combat feel or the ability to make meaningfully different builds. Removing all
visible customization would materially change the original candidate.

**Proposed proof, not yet built:** one arena, two enemy behaviors, two swappable
weapons, and one torso/booster combination on the intended rig. Compare a safe
cool build with a more aggressive heat build using the same art. Check whether
players consciously manage heat, enjoy movement without progression rewards,
and want another run. Measure attachment cleanup, movement/aim integration, and
effect readability. Prototype repairs recorded in the audit also need budgeting.

**Price hypothesis:** test US list prices of **$12.99, $14.99, and $19.99**.
The upper point requires evidence that this limited roster offers enough depth;
it is not justified simply because another mech game charges a similar price.

## C. Three incremental pitches

These intentionally explore different active loops before choosing one to cost.
They do not assume offline earnings, compulsory rapid clicking, or an infinite
prestige ladder. None is a production recommendation yet.

| Pitch | Repeated action and progression | Small visual vocabulary | Primary risk / research status |
| --- | --- | --- | --- |
| **Scrapline** | Sweep a cutter over schematic wrecks, expose valuable cores, buy tools and automation, dismantle larger hulls, and restore a salvage station. | One 2D bench, hull outlines and tile patterns, cutter effects, one drone shape, and upgrade icons. | Satisfying destruction and visible automation must carry the game. **Provisional comparison candidate.** |
| **Last Battery** | Defend a fixed reactor, route limited power among turret positions, survive waves, buy permanent upgrades, and defeat a final assault. | One arena with three spawn arrangements, 4 turret shapes, 4 enemy shapes, 24 upgrade entries, and projectile effects. | Targeting, enemy motion, combat readability, performance, and wave balance can outweigh the small art count. Keep as the alternative closest to the owner's tower-defense example. |
| **Containment Shift** | Operate a failing containment console, spend recovered energy on automatic purges/repairs, manage three hazard types, unlock six machine modules, and seal three sectors. | One evolving control panel, six module symbols, three hazard effects, 30 upgrade entries, and short text events. | The main attraction may be difficult to communicate through screenshots; UI, sound, pacing, and writing carry the horror. Keep as a thematic alternative, not a substitute for third-person horror. |

Carry **Scrapline** into the initial asset and market comparison because the
cutting-to-automation transformation can be visible immediately, the art families
are tightly bounded, and the machinery theme offers a bridge to the owner's
stated mech interest. That does **not** establish enthusiasm for this concept.
Last Battery has a clearer link to the supplied reference but adds tower-defense
systems. Containment Shift offers atmosphere with little geometry, but its
appeal is less visually immediate in this proposed form. These are design
judgments to challenge with evidence, not market rankings.

### Scrapline: bounded comparison sheet

**Premise and target buyer:** a short active incremental for players who enjoy
visible destruction, unlock trees, and steadily increasing automation. Salvage
derelict machines to restart a ruined orbital recycling station. The payoff is
going from carefully opening a small hull to stripping a large wreck in a cascade
of cuts and collection effects.

**Core loop:** hold and sweep the selected tool -> cut weak seams or expose a
core -> collect scrap/alloy/cores -> choose a tool or automation upgrade -> open
the next wreck contract -> use the completed contracts to restore the station.
Weak seams reward route choice; tool upgrades should change the action as well
as the numbers. No rapid clicking is required. Automation works while playing;
active cutting remains useful after drones unlock.

| Family | Baseline boundary |
| --- | --- |
| Playfield and visuals | 1 fixed 2D workbench view with pan/zoom if needed; 6 wreck silhouettes, each with 2 authored internal layouts: **12 layouts total**. Shared tile/material patterns; no fully modeled 3D wrecks. |
| Tools and automation | 3 tools: beam cutter, sweeping disc, and chain pulse. One drone visual with three automation functions: cutting, collection, and core targeting. Functions reuse the visual but still require behavior and tuning. |
| Progression | 3 resource types; 36 upgrade nodes across 12 effect families. Repeated ranks are explicitly part of the 36, not 36 unique mechanics. Six wreck tiers and 3 station-restoration milestones. |
| Content and ending | Revisit the 12 layouts at improved efficiency; later tiers introduce a new material/route problem. The third restoration milestone ends the campaign. Target 3-5 hours without mandatory idle delays or repeated prestige resets. |
| Interface and icons | Workbench HUD, upgrade tree, and contract/restoration screen, plus shared menus/settings. Initially 12 upgrade-family icons, 3 tool icons, and 3 resource icons; reuse with labels/rank indicators. Additional interaction icons belong in the detailed inventory. |
| Feedback | Three readable tool effects, collection and core-release feedback, restrained particles, evolving machinery audio, and completion cues. Budget sound design and progression feedback even with geometric visuals. |

Use discrete tiles and authored break links to represent cutting. Detached
sections dissolve into collection effects; there is no physically accurate
fracture, fluid simulation, or arbitrary mesh slicing. Batch repeated effects
and cap decorative debris. The quantities and performance budget must be tested
rather than assuming enormous on-screen counts are free.

Exclude a conveyor factory, free-form base building, piloting the recovered
mechs, combat, enemy AI, offline production, multiplayer, and endless content.
Adding any of these changes the candidate we are comparing. If scope grows,
reduce secondary layouts and repeated upgrade ranks before removing the visible
transition from manual salvage to automation.

**Proposed proof, not yet built:** one wreck, one cutter, one drone, one resource,
and five upgrades including at least two changes to behavior. A player should
understand what to do without a long explanation, choose between useful upgrades,
notice the action change, and want to see the next wreck. If this only becomes
appealing after extensive art, dozens of unlocks, or long waiting periods, the
asset-light premise has failed its first test.

**Price hypothesis:** test US list prices of **$2.99, $4.99, and $6.99**. A lower
price may reduce contribution per buyer; it does not establish higher demand.
Do not assume that a short development schedule offsets weak sales.

## Limited market checks informing these scopes

These official product-page checks were made on **21 October 2026** to avoid
describing familiar features as proven market gaps. They are not Step 3's market
sample, evidence of attainable revenue, or a novelty search.

| Source | Observed product facts | Implication for our proposed scope |
| --- | --- | --- |
| [RIG Riot on Steam](https://store.steampowered.com/app/3180340/RIG_Riot/) | Describes direct third-person mech combat, raids, weapons, run mods, and permanent parts built from component sets. Retrieved base-game offer: CHF 17.49. | Mechs plus roguelite upgrades alone is not a differentiator. Investigate heat decisions, movement feel, clarity, and the depth possible with our smaller roster. Component combinations are not unique mesh counts. |
| [Hollowbody on Steam](https://store.steampowered.com/app/2123640/Hollowbody/) | Describes compact survival horror with puzzles, resource management, limited combat, a dynamic/fixed camera mix, and full voice acting. Retrieved base-game offer: CHF 18.99. | An adjacent compact horror reference, with different camera and production features. Its price cannot establish the value of our proposed over-the-shoulder game. |
| [Sir, We Have an Orc Problem on Steam](https://store.steampowered.com/app/4594150/Sir_We_Have_an_Orc_Problem/) | Describes short tower defense with repeated runs, a large upgrade tree, active abilities, and enormous enemy counts. Retrieved base-game offer: EUR 9.99. | The visual asset count alone omits crowd/feedback/progression work. Our defense alternative is not assumed to reproduce its spectacle or appeal. |
| [Nodebuster on Steam](https://store.steampowered.com/app/3107330/Nodebuster/) | Describes a short incremental built around harvesting nodes and buying upgrades. Retrieved base-game offer: $2.99. | A close loop reference for a small active incremental. Scrapline needs a satisfying salvage interaction and meaningful progression, beyond changing the theme. |

The retrieved pages returned different currencies/regions; attempts to force a
US region for the first three pages were unavailable through the browsing tool.
The dollar symbol on the retrieved Nodebuster page did not independently confirm
its region. These observations have **not** been converted or treated as a
normalized price comparison. Our explicitly US-denominated test points above
are hypotheses for Step 3/5, not quotations of those competitors' US prices.

## What Step 2 establishes, and what it does not

Each candidate now has a repeatable action, a proposed purchase reason, an
audience, a content boundary, exclusions, and price hypotheses. The incremental
idea is concrete enough to investigate. No paid generation, new prototype, or
change to either existing Unity project was needed.

The expected asset exposure, based on these designs, is:

- **Horror:** the most dependence on organic movement, contact quality, and
  authored atmosphere; fewer equipment combinations than the mech scope.
- **Mech:** fewer organic assets and substantial reuse of mechanical shapes,
  with more loadout compatibility, combat behavior, and replay-balance work.
- **Scrapline:** the fewest character/3D requirements, with most uncertainty
  concentrated in the core interaction, interface, progression, and market appeal.

This ordering describes the kind of work, not measured total hours. Low-poly
helps bound the art target but cannot by itself decide between the two 3D games.
The final comparison must account for the owner's preference for mechs and the
absence of a demonstrated personal preference for an incremental concept.

**Next: Step 3, market comparison.** Research these precise scopes, including
weak and ordinary outcomes, direct versus adjacent competitors, price/value
expectations, and player complaints about repetition, controls, content, and
progression. Test whether each content ceiling supports the proposed promise;
revise it openly if evidence says it does not. The horror hook, mech heat rule,
and incremental shortlist can change without treating these proposals as sunk
production decisions.

Production hours, measured AI asset throughput, sales scenarios, and a final
choice remain pending. The small gameplay proofs above are future validation
tasks, not completed experiments or permission to publish/contact players.

**Verification:** the Game scopes tab is registered on the existing Project
Playground card. Checks passed for all 6 card-tab paths, 7 project Markdown
files, 23 local links, consistent table columns in this report, and Git
whitespace errors. The available computer-use inventory exposed no apps or
browsers, so wide and narrow rendered-tab previews could not be performed.
