# Step 1: constraints and reusable work

**21 October 2026 | Research baseline ready; gameplay validation pending**

We have enough information to define comparable versions of the three games.
Both 3D candidates will use a **simpler, low-poly aesthetic**. The owner's
personal preference is **mech first, with horror a close second**. There are no
previous commercial releases or an existing launch audience.

The existing prototypes provide possible engineering savings, but neither has
been demonstrated as a complete gameplay loop in this study. Their presence
does not yet justify a shorter release estimate or credit for finished art.
The [prototype audit](prototype-audit.md) records the supporting file evidence.

## Confirmed constraints

| Constraint | Baseline for the comparison |
| --- | --- |
| Available time | 21 hours/week now; 31 later, with no switch date. Calculate both schedules. Include art, programming, learning, marketing, testing, and release work within this capacity. |
| Objective | Release as soon as practical and seek strong financial returns. Compare total cash surplus, earnings per hour, and time to release separately. No fixed deadline or income floor has been supplied. |
| Intended release scope | The owner found the initial compact horror/mech proposals too small. Horror targets a 4-6-hour campaign in one substantial interconnected location. Mechs need both deeper customization and more areas, enemies, and bosses. The revised Step 2 quantities are proposed inputs; feasibility remains to be estimated. |
| Release approach | Early Access and episodic releases are acceptable options for the larger games, alongside a full launch. No route, episode count, cadence, or payment structure is selected. Measure first paid availability and completion separately. |
| Strengths and bottleneck | Programming is stronger than asset creation. Count asset complexity, manual correction, and integration as well as unique asset quantities. |
| Art direction | Simpler low-poly visuals for both horror and mechs. Detailed realistic art is an optional scope increase, not the baseline. Low-poly does not specify the final lighting, palette, texture treatment, or animation quality. |
| Asset sourcing | Personally created assets with AI assistance. Purchased art packs and outsourcing are not assumed. Existing imported art may support experiments; its presence does not establish a final self-created asset. |
| Modeling workflow | Tripo is the likely generator. Exact model/plan, costs, and accepted-asset throughput remain unknown. |
| Animation workflow | GPT agent operating Blender MCP from a video reference, followed by manual correction in Cascadeur or Blender. Include export, rig compatibility, transitions, and in-game review. |
| Motivation | Mech is the preferred project; horror is a close second. No numeric motivation scores have been assigned, and no strength of interest in a specific incremental concept is known. |
| Commercial starting point | No previous commercial game releases and no existing audience. Research examples must disclose advantages such as prior hits, established communities, or publisher support. This does not imply no game-development experience. |

Source: the owner's answers in this project conversation, including the three
clarifications on 21 October. These are personal constraints, not market findings.

## Working assumptions and unresolved inputs

| Input | How to proceed without inventing an answer |
| --- | --- |
| Platform and business model | Use a solo-led, single-player premium PC/Steam release in Unity as the research assumption. This remains unconfirmed. |
| AI/software spending and currency | Keep plan prices and their source currencies visible. Later show spending sensitivity; no amount is an approved budget. A hard spending limit is needed before committing to production expenses. |
| Increase to 31 hours/week | Use separate 21- and 31-hour cases. Do not schedule an assumed increase. |
| Financial comparison horizon | Proposed: first year after first paid availability and equal 12/24-month periods from the decision date. Show full-release/episode milestones separately and label overlapping observation windows. Keep personal/company income taxes outside the comparison unless relevant details are supplied. |
| Tool licenses and workflow speed | Verify public terms during the tool research. Do not treat access to a provider as proof of a particular license or hours saved. |
| Final asset ownership and acceptance | Treat imported models/clips as prototype resources until provenance, intended use, and visual acceptance are established. Do not infer an infringement or a licensing problem. |

These gaps do not prevent concept scoping or market research. Cost and schedule
conclusions will remain conditional where the unresolved inputs matter.

## Available working time

These are capacity conversions, **not development forecasts**. They assume the
stated hours are available every week; interruptions reduce the totals.

| Working period | At 21 hours/week | At 31 hours/week |
| --- | ---: | ---: |
| 13 weeks | 273 hours | 403 hours |
| 26 weeks | 546 hours | 806 hours |
| 52 weeks | 1,092 hours | 1,612 hours |

A useful later question is whether each proposed release fits these capacities,
including content iteration and launch work. The existence of a movement
controller cannot answer that question by itself.

## How existing work will affect the estimates

| Candidate | Potential reuse | Work still to budget |
| --- | --- | --- |
| Horror | Movement/camera logic, a wired player prefab, locomotion blend-tree setup, and editable animation experiments. | Final player/creature art, rig adaptation, combat animation and transitions, aiming/shooting, enemy behavior, encounters, level content, progression/saves, and release work. Some items depend on the eventual scope. |
| Mech | Movement including jump/dash, target selection, shooting, pooled projectiles, bullet configuration, and scene wiring. | Verification and repairs; final mech/weapon assets and attachment rules; animation or procedural motion; implemented health/enemies; run structure, equipment/progression, encounters, and release work. |
| Incremental | General programming experience and the existing Unity workflow. No project-specific prototype has been supplied. | A concrete loop, upgrade/progression design, visual presentation, content, balancing, saves/settings, and release work. A small asset count alone does not establish a short schedule. |

All prototype reuse is **conditional**. Source inspection verifies that a
component exists; it does not verify controls, feel, performance, or final art
quality. No numerical savings have been claimed.

For each relevant task in the later work breakdown, compare:

- **Reuse route:** verification + repair/adaptation + integration and testing.
- **Rebuild route:** implementation + integration and testing.

Choose the route appropriate to the scoped game. Credit only the difference in
remaining effort, and count final-art replacement separately. If adaptation is
more expensive than rebuilding, reuse is not a saving. Past hours are sunk work.
Show both conservative rebuilding and successful component reuse when this
uncertainty could change the ranking.

## What is complete and what remains

**Completed:** confirmed constraints, personal preference and audience baseline,
source/scene/animation-import review, a component reuse assessment, and explicit
handling of unresolved inputs. Both game projects were inspected without edits.

**Pending:** native gameplay and visual validation. The read-only Unity CLI check
returned `STATUS_NO_INSTANCES`, meaning it found no registered Editor with the
Pipeline connection. This is not evidence of a current licensing or compile
failure. No Editor was launched or restarted and no connection package was added.
The audit lists the focused checks needed before claiming measured reuse savings.

Step 1 is ready to support desk research, with that validation limitation carried
forward. **Step 2 is now documented in the [game scopes report](game-scopes.md):**
the larger intended third-person horror and piloted mech experiences, plus three
concrete incremental pitches with a provisional comparison candidate. Exact
content quantities are proposals to test before estimating assets, hours, or
profitability. The [Step 3 market findings](market-findings.md) now compare the
desired releases as the primary cases, with adjacent and smaller games labeled.
Next are asset/content inventories and production estimates; no numerical reuse
savings have been established by the market study.

Preview limitation: the computer-use inventory exposed no apps or browsers for
opening the report tabs. Desktop/mobile visual previews were therefore not
performed; registry and source-link checks do not establish a visual preview pass.
