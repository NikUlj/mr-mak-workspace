# Step 4: production pipeline, tool costs and timed proofs

**22 October 2026.** The intended route remains Tripo where useful, followed by Blender work; animation uses a GPT agent operating Blender against references and the owner's correction in Blender or Cascadeur. No paid job or prototype edit was performed for this research. Official capabilities establish possible operations, not the owner's throughput or acceptable game quality.

Read the [asset findings](asset-findings.md) and [69-row inventory](asset-inventory.md). All time allowances are provisional. This report defines what to measure before turning those allowances into commitments.

## From an idea to an accepted asset

| Stage | Work and retained result | Failure that must still be costed |
| --- | --- | --- |
| Reference and specification | Consistent silhouette/palette; orthographic views where needed; dimensions, moving pieces, joints, contacts and target camera. Preserve original references. | Inconsistent proportions, hidden surfaces guessed incorrectly, designs that cannot attach or move. |
| Generate or model | Compare billable attempts; keep the best candidate and record rejects. Use manual primitives for simple walls, frames, sockets and UI shapes. | A completed generation can still be unusable. A retained seed is not a finished asset. |
| Cleanup and family consistency | Separate rigid pieces, rebuild unsuitable topology, simplify geometry, fix normals, set UVs/materials and match related assets. | Decimation that ruins silhouettes or bending; separately generated parts that do not fit; material inconsistency. |
| Technical mesh preparation | Establish scale, axes, pivots, collision and necessary LODs. Save editable source and export presets. | Wrong pivot, excessive materials, broken tangent/normal import, collider costs. |
| Rig and bind | Human/creature weights or mechanical joint parenting; inspect extremes before making many clips. | Collapsed shoulders, cross-limb weights, floating rigid armor, impossible knee reach. |
| Motion authoring | Reference timing, support contacts, anticipation/impact/recovery, loops and interactions. Agent work produces an editable draft; owner review/correction remains explicit. | Plausible isolated motion that misses foot contacts, weapon alignment or gameplay timing. One camera's missing depth is inferred, not measured motion capture. |
| Export and round trip | Preserve skeleton/bind pose, clip ranges, frame rate, events and source rig. Reimport a clean export. | An export can complete while losing hierarchy, duration, weights or reference pose. |
| Unity integration | Correct rig type, avatar where relevant, clips/transitions, motion authority, weapon sockets, event timing and interruptions. | Sliding during blending, duplicate root/controller motion, reload events after cancellation, altered speed. |
| Acceptance in context | Normal-speed game-camera capture; crowded combat; target-machine profiling; owner accepts visual quality. | Attractive Blender preview but poor in-game readability, feel or performance. |

These acceptance steps follow the local [animation authoring](../../.agents/skills/blender-game-animation/SKILL.md) and [integration](../../.agents/skills/game-animation-integration/SKILL.md) workflows. They are a benchmark specification, not a claim those workflows have already passed on these projects.

## Where Tripo helps, and where work remains

Use Tripo first for recognizable bodies, weapons and selected dressing props. Keep modular wall dimensions, attachment interfaces and simple mechanical primitives controlled in Blender. A generated whole mech may supply a useful shell, but its moving parts still need working joint clearances. The inventory assumes one retained seed can be manually converted into an assembly; failed separation increases either cleanup time or the number of generations.

Tripo's current documentation advertises multiple skeleton types, humanoid presets and animation export. It also directs users to external DCC software for manual weight/skeleton corrections. This supports testing automatic rigging as an optional starting point; it does not establish reliable custom-creature or reverse-joint-mech motion. The intended Blender-reference route remains the animation baseline. [Tripo rigging and animation](https://www.tripo3d.ai/product-doc/module-post-processing/rigging-animation).

Tripo documents semantic segmentation and rigid-part preparation; fitting separate outputs to one shared attachment standard remains our engineering task. [Segmentation](https://www.tripo3d.ai/product-doc/module-post-processing/segmentation). Its API conversion documentation lists FBX conversion, while OBJ/STL do not preserve rigged models. These API format capabilities are distinct from Studio subscription/credit entitlements. [Export conversion](https://docs.tripo3d.ai/export/conversion.html).

Unity's Mecanim humanoid retargeting requires a configured Humanoid Avatar. It is not a universal transfer system for arbitrary creature/mech skeletons. The mech baseline should budget Generic/custom rigs and family-specific motion where needed. [Unity 6 retargeting manual](https://docs.unity3d.com/6000.0/Documentation/Manual/Retargeting.html). This is general engine guidance, not a runtime test of the projects' Unity 6000.5.2f1 build.

## Tool prices and conditions checked today

The exact account plan, billing country, taxes, GPT usage arrangement and monthly generation budget remain unknown. Prices below are retrieved page displays, not a user-specific quote. No purchase is needed to finish this planning stage.

| Tool | Observed display / condition | Use in the estimate |
| --- | --- | --- |
| Tripo Studio | Pricing page lists Pro at USD 20 monthly / USD 240 yearly, 3,000 monthly credits; USD 10 for 1,000 top-up credits. Paid/private models are advertised for commercial use. | Use USD 20/month and 3,000 credits only as a provisional scenario. Check the actual checkout before spending. |
| Tripo documentation discrepancy | The documentation lists a USD 13 annual-equivalent Professional rate and allows attributed free commercial outputs; the pricing page instead labels free models non-commercial. | Do not rely on free outputs for the commercial baseline or silently choose the cheaper annual rate. Record the paid/private route and verify its current entitlement. |
| Cascadeur | Page displayed EUR 19/month Indie or EUR 8/month billed annually; Pro EUR 49/month or EUR 33/month billed annually. Free: CASC-only, non-commercial. Paid tiers provide FBX export. | Indie illustration: EUR 96 annual commitment versus EUR 19 × active months. Pro illustration: EUR 396/year or EUR 49 × months. These are separate-currency inputs, not converted totals. |
| Blender correction | Existing Blender route remains available; no new paid correction tool is assumed. | Incremental license purchase allowance is zero for this route; owner time and agent usage are still costs. |
| GPT, concept images and generated audio | Exact usage plan/providers are unspecified; existing Codex access does not establish marginal project cost. | Keep an explicit unknown recurring/usage input in Step 5. Do not assign a speculative fee or count unused subscriptions as free production. |

Sources checked 22 October: [Tripo pricing](https://www.tripo3d.ai/pricing), [Tripo credits documentation](https://www.tripo3d.ai/product-doc/getting-started/pricing-credits), [Cascadeur plans](https://cascadeur.com/plans). The Tripo terms distinguish paid and free output rights; the documentation adds a private-model condition. This research does not establish rights for assets generated previously under an unknown plan. [Tripo terms, section 5.2](https://www.tripo3d.ai/terms).

Cascadeur Indie eligibility uses defined gross revenue/funding below USD 100,000, with different definitions for individuals and organizations; it is not simply profit from this game. Pro has additional features, including retargeting and quadruped autoposing, which should not be assumed present in Indie. The plans page ties perpetual builds to annual subscriptions; the agreement's broader subscription language should be checked against the intended purchase before relying on continued access after cancellation. Free/Pro Trial are not commercial-production substitutes. [Cascadeur agreement, sections 1.6 and 2.2](https://cascadeur.com/help/cascadeur_end_user_agreement).

## Credits, money and waiting are different quantities

The [ledger](asset-inventory.md) estimates **29/39/51 retained horror seeds** and **47/53/61 mech seeds** for low/base/high cases. These are selected AI-assisted models, not all meshes. No Tripo generation is needed for the schematic incremental baseline.

Under the illustrative HD route, total credits are **1,305 / 2,925 / 6,120** for horror and **2,115 / 3,975 / 7,320** for mech. The P2 alternative is **3,480 / 12,480 / 31,620** and **5,640 / 16,960 / 37,820**, respectively. The formula, billable retries and optional operations are explicit in the inventory. Higher credits do not imply better accepted quality or fewer owner hours.

Calculate cash by actual production month:

```text
paid credit demand this month
  = billable generations + postprocessing + other paid operations
top-up need
  = max(0, demand - usable included credits - usable purchased balance)
tool cash
  = subscription payment due + top-up purchases + applicable taxes
```

Monthly included credits reset; do not accumulate unused included credits across months without verified rollover terms. Do not charge both a per-credit value and a subscription for the same included credits. Annual prices are commitments, not subscriptions that can be canceled after one cheap month. Tool duration depends on the Step 5 schedule and which months actually need it.

For illustration, if all **base HD** work happened in one Pro month with 3,000 usable credits and no balance, horror's 2,925 credits fit; mech's 3,975 need 975 extra, covered by one listed USD 10/1,000 pack. Before tax this is USD 20 versus USD 30, **excluding** optional operations, images, textures and animation tools. If work is spread across many paid months, subscriptions can dominate. Under the base P2 alternative, the same small-pack method would be USD 120 horror / USD 160 mech for that one month; larger pack offers may lower it. These are accounting examples, not total project budgets or recommendations to buy that plan.

Keep four clocks separate: **owner attention**, **unattended agent execution**, **provider queue/compute**, and **elapsed calendar time**. Owner time is what consumes the 21/31-hour work capacity. Agent/provider waiting can overlap other tasks only when there is independent useful work; dependency waits still delay delivery. Provider marketing about seconds per generation cannot be used as hours per accepted game asset.

## Blender-only versus Cascadeur correction

| Route | Plausible benefit | Work that still needs measuring |
| --- | --- | --- |
| Blender agent + Blender correction | One editable scene, consistent rig/actions and fewer application round trips; suits custom rigid mechanisms. | Agent setup and iterations, owner's contact/curve fixes, rig debugging, export and connected Unity motion. |
| Same draft + Cascadeur correction | Physics/contact tools may help suitable organic/biped motions; paid feature set depends on plan. | Import/rig setup, lost or changed constraints, correction, re-export and bind-pose/clip checks; a faster isolated edit can lose its saving on round trips. |

No speed advantage is assigned to either route. Compare the **same rig and draft** on a short sequence, keep both editable revisions, and include round-trip time. One comparison is diagnostic only; repeat on at least one different motion before projecting savings across the library. For mechs, rigid joints and gameplay-driven foot/aim control may be more useful than human-like physics correction; that is a testable workflow hypothesis.

## Timed proof sequence

Do not build three complete vertical slices just to choose a game. Start with the **mech** because it is the owner's preference and its modular movement is a decisive uncertainty. Then run the horror comparison if its workload could change the choice; test Scrapline's appeal before treating it as the financial fallback. These are implementation follow-ups, not incomplete paid jobs. Stop at each diagnostic checkpoint and record a failure instead of polishing indefinitely.

The budgets below are **suggested owner-attention caps for an initial diagnostic pass**, not completion estimates. They should be integrated into Step 5, not added again if their accepted work is reused.

| Proof | Proposed checkpoint | What must be visible at the checkpoint | Passing evidence |
| --- | --- | --- | --- |
| Mech assembly and combat | Up to 40 hours; record framework repairs separately | Intended-rig first leg family, 2 torso shells, 2 weapons, one arena and 2 simple enemy behaviors. Exercise aim/boost/fire/hit, then try second leg family to expose transfer costs. If the second family cannot be reached, record the dependency and extra work instead of calling the test complete. | Both families eventually need accepted motion; extreme combinations preserve pivots/clearance/aim, effects stay readable, and the owner likes piloting before unlock rewards. Time a second similar part to distinguish initial setup from marginal production. |
| Horror connected animation | Up to 40 hours; start with the existing strafe revision | Inspect the original rig/actions, integrate strafe with forward movement/turn/stop, then aim/fire/reload/hit on one gun; one creature in two connected rooms and a breaker if the framework permits. Missing combat plumbing is separately timed. | Normal-speed game-camera evidence shows contacts and transitions; reload timing survives interruption; light rule is understandable; owner accepts quality. A second creature family and a boss sequence are still required before extrapolating the full roster. |
| Incremental appeal and readability | Up to 16 hours for an intentionally rough proof | One wreck, cutter, drone, resource and 5 upgrades including 2 behavioral changes. Test early versus accelerated play; no campaign art. | Player understands the action, notices useful upgrades and wants another wreck without forced waiting. Record failures in feedback/pacing as well as asset time. |
| Shared content sampling | After the preferred proof passes | A second room/arena theme with reused kit; one sound bank, VFX family and a garage/upgrade screen. | Marginal item time, consistency work, event binding and owner acceptance recorded; do not extrapolate only from the easiest item. |

For a future generation test, inspect the exact live model and credit quote before submitting; the user has not supplied a generation budget here. Preserve job receipts in ignored local runtime storage, recover submitted jobs after timeouts, and retain accepted editable sources in the project. Do not create duplicate paid generations to replace a merely slow response.

The existing horror strafe record establishes **Blender reimport success**, not current Unity acceptance or hours saved. The static audit also identifies mech projectile/feedback code requiring investigation. Neither prototype has been modified or rerun in Step 4. See the [prototype audit](prototype-audit.md).

## Measurement and acceptance record

Use [benchmark-record-template.json](research/benchmark-record-template.json) as an empty form. Keep actual job receipts/transcripts outside tracked reports. Record these components for each sample:

- Asset family and unit: retained seed, assembly, clip, rig family, room or event bank. Record first-item setup separately from subsequent-item work.
- Owner time: reference/prompt/setup, review/rejections, manual cleanup/correction, integration, and final testing. Agent supervision counts here; do not also count it as unattended time.
- Separate agent active elapsed time and provider waiting; note overlap and which wait blocked useful work.
- Billable attempts, failed jobs, rejected successful outputs, usable generations and optional operations. Log actual credits, not a provider's theoretical models-per-month number.
- Visual acceptance in Blender, clean reimport and Unity separately. Include normal-speed game-camera capture, loop/transition/interrupt cases, tested build/hardware and owner's acceptance.
- Remaining defects and next sample needed. An agent inspection cannot substitute for the owner's judgment that the art is worth shipping.

After several representative samples, replace the matching ledger rates with observations and preserve the old assumptions. Keep first-item setup out of each repeated unit. One good clip cannot calibrate all boss actions; one easy gun cannot calibrate reverse-joint legs. The decision should change if correction/integration dominates or the required quality remains out of reach at the checkpoint.

**Unresolved:** exact low-poly reference standard, final rigs, AI plan/budget, audio workflow, minimum hardware, measured acceptance rates and owner correction speed. These do not prevent a desk inventory, but they limit the confidence of the resulting schedule. Step 5 can proceed with explicit scenarios; a production commitment should wait for the decisive benchmark.
