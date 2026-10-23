# Step 4: asset-production findings

**22 October 2026 | Desk inventory complete; production benchmarks pending.**

**The larger horror and mech proposals have similar provisional asset/content workloads. Neither is an obviously inexpensive art project.** Horror concentrates effort in organic motion and authored spaces; mechs trade some deformation work for modular parts, two movement families, compatibility and busy combat feedback. The schematic incremental has substantially fewer production dependencies, but its appeal and progression remain unproven.

The strongest conclusion is about **work structure**, not exact hours or profitability. There is still no measured evidence that your Tripo/Blender/Cascadeur route can produce accepted assets at these rates. This step preserves the larger [v2.1 game scopes](game-scopes.md) and supplies editable estimates to test them, rather than reducing them to tiny releases.

Deliverables: [69-row asset/content ledger](asset-inventory.md), [tool costs, production route and timed proofs](production-pipeline.md), [editable inputs](research/asset-inputs.json), and [calculated results](research/asset-calculations.json).

## What each game actually needs

These are **base-case proposed quantities**, not an approved asset list. Assemblies, meshes, clips, placements and data entries are different units and should not be summed into one misleading “asset count.”

| Production family | Horror | Mech | Scrapline incremental |
| --- | --- | --- | --- |
| Principal visual content | 1 player, 6 regular creature bodies, 2 bosses, 4 guns | 18 body/booster equipment assemblies + 12 weapons; 5 base enemy bodies + 5 derivatives; 3 boss kits | 6 wreck outlines, 12 internal layouts, 3 tools, 1 drone, bench + 3 restoration visuals |
| Rigs / motion | 6 rig families; about 92 authored clips/poses across player, regular enemies and bosses | 10 rig families; about 89 authored clips/poses plus procedural overlays for both player leg families | No skeletal rigs; tweens, cutting, automation and feedback still need authoring |
| World building | 32 structural modules, 40 dressing/landmark props, 12 interactive/pickup families; 32 rooms + 8 passages | 36 structural modules, 30 dressing/landmark props; 12 arenas in 3 themes | 6 tile/material families; shared schematic workbench |
| Playable content | 24 encounters including bosses, 6 puzzles, text-only story/ending | 27 encounter templates including bosses, 36 equipment entries, 36 run upgrades | 36 upgrade nodes, 6 tier gates, 3 restoration milestones |
| Feedback / audio | 18 VFX families, 60 sound event banks, 8 ambience/music stems | 30 VFX families, 70 sound event banks, 9 ambience/music stems | 12 feedback families, 24 sound banks, 3 ambience/music stems |
| Interface / presentation | 10 UI screen/state layouts, 36 icons, store/trailer package | 11 UI screen/state layouts, 60 icons, store/trailer package | 8 UI screen/state layouts, 28 icons, store/trailer package |

One mech equipment entry can contain many moving pieces. For example, the proposed 18 body/booster assemblies could require around **61 rigid pieces**: four six-piece leg sets, four torsos, four six-piece arm-pairs, three heads and three two-piece boosters. Twelve weapons might add roughly 24 more pieces. This is an illustrative decomposition, not a final topology specification. Mirroring and reusable primitives reduce authoring, but each moving piece still needs correct pivots and clearance.

Likewise, one horror environment kit does not create 32 finished rooms. Room layout, light, navigation, resource placement, encounter pacing and revisits remain authored work. For audio, one event bank usually contains multiple takes; the base horror/mech counts imply roughly 120–180 / 140–210 individual takes, respectively, with reused processing and variation.

## Provisional workload: assets and content only

| Candidate | Low scenario | Middle scenario | High scenario |
| --- | --- | --- | --- |
| Horror | About 800 owner hours | About 1,900 | About 4,550 |
| Mech | About 870 owner hours | About 1,985 | About 4,570 |
| Scrapline | About 185 owner hours | About 415 | About 960 |

These are **judgment-based scenarios, not observed production rates or confidence intervals**. Low/high cases change ancillary quantities and correction rates while retaining the central experience. The ledger also shows rate uncertainty with base quantities fixed. No blanket AI speedup or automatic prototype savings have been applied. All estimates include creating/adapting assets, integrating them, and local polish/testing; they exclude the remaining reusable gameplay systems and much of release/support work.

The middle figures are close enough that **the 92-hour difference between horror and mech has no decision significance at this uncertainty level**. The incremental's lower workload is a stronger structural result for this particular schematic design. It does not extend to every incremental game, and it does not show that Scrapline will sell.

Only about 48% of the horror middle estimate and 45% of the mech estimate sits in creation/adaptation; the rest is integration and polish. Even the impossible best case of making *all* creation instantaneous would leave **991 horror hours and 1,099 mech hours** in this ledger alone. That arithmetic illustrates why generation speed cannot be translated directly into release speed; it is not a realistic productivity forecast.

## Five production bottlenecks to resolve

The rows below are five decision-relevant bottlenecks across the three candidates, not five independent savings to add. Workloads refer to base ledger rows. Counterfactual savings are analyst scenarios; they require the stated change and preserve all unrelated rates. Reductions to content are alternatives, not changes made to the baseline.

| Bottleneck and dependency | Current allowance | Better tooling / reuse test | Simplification or removal tradeoff |
| --- | --- | --- | --- |
| **Horror rigs, motion and contacts**. Final anatomy and a stable runtime rig must precede large clip production. H05–H09. | 572 hours | Halving only creation in these rows saves 142 hours; integration/polish remain. If all 9 existing locomotion clips prove suitable, avoiding their new creation would save at most 18 modeled hours before any extra adaptation; no saving is booked today. | Sharing 8 more creature actions avoids 32 gross hours, but allow 8 for retarget/adaptation: 24 net. Dropping the second boss would remove about 119 asset/content hours across body, rig, 10 clips and encounter; its room is retained. This materially reduces variety and is not the baseline. |
| **Horror world and authored campaign**. Kit, power-rule states and sector progression must be stable before dressing everything. H11–H19. | 724 hours | Halving creation of dressing/interactive props saves 42 hours; it does not halve room/puzzle work. Reusable room compositions reducing room authoring from 3 to 2 hours each save 32 hours if the spaces still feel distinct. | Reducing dressing props from 40 to 28 saves 30 hours. Removing 4 rooms saves 32 asset hours, but the 4–6-hour experience must still be demonstrated; padding the remaining spaces is not a substitute. |
| **Mech modular motion and compatibility**. Standard joint proportions, attachment envelopes and both leg families need proof first. M01, M07–M12. | 583 hours | Halving creation only saves 126 hours. Holding joint proportions constant might reduce clearance-review work from 72 to 48 hours, saving 24; wider shape freedom could eliminate that saving. | Restricting procedural overlay complexity could save 24 hours across two families under the stated rate change below. Removing the second family removes about 100 motion/rig hours, but reduces the customization target; four leg items would then share one movement family. |
| **Mech roster and differentiated combat content**. Roles, weapon behavior families and readable effects must work before multiplying parts. M02–M06, M16–M20. | 869 hours | Halving model creation saves 109 hours, leaving configuration, encounters and feedback. Reusing 8 encounter compositions at 3 instead of 5 hours saves 16 only if combat roles remain distinct. | Sharing effect implementations to reduce 30 VFX families to 24 saves 18 hours while retaining 12 weapons. Removing one boss and its arena saves about 87 asset hours across model, rig, motion, encounter and space; this overlaps the motion bottleneck and is a material content reduction. |
| **Incremental interface, feedback and progression content**. The cutting loop and upgrades must be enjoyable before expanding layouts. I04, I07–I11, I14. | 267 hours | Halving creation for feedback/UI/icon rows saves 21 hours. Most progression and layout work remains; faster image generation cannot determine good upgrade pacing. | Reusing symbols to reduce 28 icons to 22 saves 6 hours. Removing 2 layouts saves 8 hours but reduces variety; it does not fix an unappealing loop. |

Specific assumptions behind removal examples: horror boss = H04 one unit (32) + H05 one rig (12) + H08 ten clips (70) + H18 one encounter (5). Mech second-family removal = M07 one rig (8) + M08 sixteen poses (40) + M11 one family (52), keeping existing item counts on the remaining family. Mech boss/arena removal = M06 (24) + M07 (8) + M10 nine poses (36) + M17 (5) + M16 (14). Procedural-overlay simplification changes per-family C/I/P from 24/12/16 to 16/8/16, saving 12 × 2. Changes are illustrative one-at-a-time deltas; engine code savings are excluded.

The largest uncertainty is the owner's correction time at an acceptable visual standard. A low-poly creature can still require substantial skinning and contact fixes. A rigid mech may avoid that deformation problem but take longer to align, animate and test across loadouts. The proposed animation and assembly proofs are designed to separate those effects.

## How to contain compatibility work without pretending it disappears

For the mech, establish a small set of attachment interfaces and allowed joint ranges. Use automated checks for sockets, pivots, bounds and invalid combinations, then inspect representative extreme builds in motion. Start with every part installed on a reference frame, largest/smallest arm and torso combinations, both leg families, asymmetric weapon sizes, shoulder aim clearance, landings and deaths. Add pairwise coverage after restrictions are known; do not advertise a test count based on unconstrained multiplication of all part choices.

The inventory reserves visual compatibility work, but the equipment validation system and functional combat regression belong in Step 5. Pairwise inspection also cannot guarantee every multi-part interaction; high-risk combinations need explicit checks. Consistent interfaces are an art-direction constraint, not simply a programming optimization.

For horror, share rigs and common motion within creature families while preserving different silhouettes, attacks, timing and encounter roles. Keep reload/hand contacts and creature attacks in the first connected test. A single polished locomotion loop cannot establish combat-animation throughput. The existing strafe revision has not passed the Unity stage of this research. [Prototype/reuse evidence](prototype-audit.md).

## Early Access and episodes: what moves earlier

| Illustrative route | Asset/content before first paid release | Asset/content afterward | Total through the completed scope |
| --- | --- | --- | --- |
| Horror: two finished chapters | About 1,210 hours | About 775 | About 1,980 |
| Mech: substantial EA, then completed game | About 1,490 hours | About 540 | About 2,030 |
| Scrapline: full launch | About 415 hours | No deferred baseline content | About 415 |

These are **middle-scenario content allocations, not sale dates**. The [ledger](asset-inventory.md) specifies each first offering and its added presentation work. Horror's first chapter uses two sectors, 12 rooms plus four passages, two guns, three regular enemies and a boss. Mech EA retains both leg families, 18 visible equipment entries, two themes/eight arenas, six regular enemies and two bosses. Both must earn their price through what is currently playable; duration/replayability is not established by these counts.

These cases put roughly **64% of the full-launch horror asset workload and 75% of the full-launch mech workload before first sale**, including their initial staging extras. Much of the shared foundation cannot be postponed. The totals are slightly greater than full-launch content work because episodes/EA need additional endpoint, recap and media preparation. Customer support, feedback triage, repeated release QA, migration and public communication still need adding in Step 5. No claim is made that staging improves revenue or funds completion. [Step 3 release evidence](release-strategies.md).

## What this changes about the decision

**Keep the mech as a serious candidate and test its production route first.** It is your preference, and this asset inventory does not establish a decisive horror advantage. Choose the test on that basis, not on the small modeled difference in hours. The mech might fit a programmer better if controlled mechanical interfaces and procedural overlays work well; the benchmark could also reveal expensive compatibility problems.

**Keep horror close behind**, especially if connected animation proves much faster than assumed or its atmosphere is easier to execute convincingly. Its longer campaign remains the target. The lighter model count alone cannot establish that it is the faster game.

**Keep Scrapline as the smaller-production comparison, not the default winner.** It avoids the most difficult 3D dependencies, but we still need proof that the actual interaction and progression are worth buying. It is a provisional concept, not the user's confirmed game choice.

The tool costs appear capable of being much smaller than the labor commitment under several modeled routes, but total cash is not yet established. Subscription duration, generation retries, audio/image choices and the actual plan matter. The [pipeline report](production-pipeline.md) records current pricing conflicts and separates credits from cash and waiting time.

## Completion and next step

**Step 4 desk work is complete:** inventories, low/base/high quantities and rates, creation/integration/polish splits, unique/variant/placement distinctions, source/reuse assumptions, credit demand, staged allocations, five bottlenecks and timed proof specifications are documented. No new asset production or gameplay test was required for this planning stage, and none is claimed.

**Next is Step 5:** add the remaining programming, design iteration, full-game balancing, QA, marketing, release operations and support; convert owner hours at 21 and 31 hours/week; then model cash, revenue and break-even scenarios. Import the existing asset rows once. Do not mistake these partial totals for complete game estimates or add their integration work twice.

Benchmarks remain the highest-value missing evidence before committing to a larger project. No final profitability ranking is justified yet. Verification status is recorded in the research plan after checking the generated arithmetic, source links and report presentation.
