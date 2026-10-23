# Estimate review: the model needs a better evidence basis

**Updated 23 October 2026 | Estimates remain disputed | Prototype choice can proceed**

## Current agreed approach

The owner agreed to prioritize earning potential, choose a concept for a
representative prototype, then use observed production and player-response
evidence to revisit estimates and the production commitment. The
[prototype decision](prototype-decision.md) provides the provisional commercial
assessment and test-order recommendation.

The earlier exhaustive repair sequence below is retained as a method for later
estimate work. It is no longer a prerequisite for Step 6's provisional prototype
choice. Start the eventual rebuild with consequential packages, clear scope
boundaries and measured setup/repetition; expand the audit where remaining
uncertainty could change the production decision. The owner need not manually
replace all 124 rows or estimate unfamiliar tasks.

No low/middle/high column has been adopted as a corrected estimate. A prototype
can calibrate matching work, but does not establish the duration of every task
or predict revenue. The larger release scopes remain intact.

## Original credibility finding, 22 October

The owner knows approximately how long a player controller would take to create
and finds HP02's **40 / 80 / 160 hours** excessive **even from scratch**. This
was a check of the overall estimates using a familiar task. It was not a request
to deduct work already completed. The owner is less certain about other tasks
and therefore cannot independently validate the rest of the table.

**This is a valid reason to question the model as a whole.** A detailed list and
correct arithmetic do not establish credible task durations. The hours were
analyst judgments, with no measured calibration to the owner's workflow. The
evidence does not justify defending that range or using the resulting multi-year
totals as an established basis for choosing a game.

## Correction to the assistant's interpretation

The assistant initially focused on reuse of the existing prototype. A source
recheck found movement/look code, CharacterController configuration and camera
obstacle-avoidance settings. Those facts are useful for later production planning,
but they do not answer the objection about fresh implementation time.

The assistant also began replacing HP02 with 5 / 10 / 20 hours. **That replacement
is withdrawn.** It was another uncalibrated allowance, not a numerical estimate
provided or accepted by the owner. No exact replacement is established here.

The [version 1 archive](research/production-inputs-v1.json) preserves the original
inputs. The [current input file](research/production-inputs.json) retains the same
hour values solely to reproduce the exploratory scenarios and records their
disputed status. Reports and the [calculator](scenario-model.html) carry a review
notice. No removed hours have been hidden in polish or risk rows.

## What remains useful

The confirmed constraints, intended scopes, inventory of work and financial
formulas remain useful inputs, subject to checking their individual boundaries.
The editable calculator can still explore assumptions. The production rates,
calendar estimates and earnings-per-hour comparisons need a stronger basis
before they can support a game recommendation.

This objection does not prove that every row is too high or that a particular
shorter schedule is achievable. It does show that checking only HP02 would be
insufficient. The other estimates have not become credible simply because that
one row is corrected.

## How to replace the estimates

1. Define what counts as finished for each task. Separate basic functioning
   implementation, game-specific integration and explicit polish requirements.
2. Check overlapping budgets. HP02 excludes animation/IK (H05-H09), combat
   implementation (HP03), rebinding/settings (HP09) and full regression (HP14).
   Those separate budgets cannot also justify a large HP02 allowance.
3. Separate ordinary implementation, reusable setup, repeated content and
   unfamiliar pipeline work. Record the evidence and assumptions behind rates.
4. Use the owner's familiar-task feedback as a plausibility check without asking
   the owner to estimate the whole project. Dividing an invented total into
   smaller invented numbers does not provide calibration.
5. Use small timed tests where uncertainty could change the decision, especially
   asset/animation pipelines and consequential integration. A timed benchmark is
   not required merely to withdraw an unsupported 40-hour low bound.

No blanket percentage reduction is justified by this example. Re-estimate the
consequential work before relying on the totals for a production decision.
The current result records this correction; it does not claim that re-estimation
has already been completed. A provisional prototype choice can proceed under
the revised approach above.

No prototype files were changed, no Unity session was launched, and no paid job
was run during this review.

## Earlier proposed repair sequence, retained for later estimate work

**23 October 2026 | Proposed approach; numerical re-estimation pending**

**Outcome:** Produce a comparison whose workload assumptions can be inspected
and challenged, then identify which remaining uncertainties could change the
game choice. This is the proposed method, not a completed re-estimation.

A check of the current production inputs found that **46 of the 47 work rows
with a positive low estimate use exactly low / twice low / four times low**.
The other eight rows are zero-low risk reserves. This confirms a mechanical
range pattern; it does not establish the correct replacement durations or prove
that each individual middle value is too high.

The sequence below adapts the general disciplines of defining scope, collecting
evidence, testing sensitivity and updating estimates from actual results in the
[GAO Cost Estimating and Assessment Guide](https://www.gao.gov/products/gao-20-195g).
That guide supplies an estimating method, not solo-game-development hour rates.

1. **Audit the work before assigning new hours.** Cover both the 55 work/risk
   rows and the 69 asset/content rows. Preserve the intended larger games and
   distinguish owner requirements from proposed counts or features. Define
   observable completion criteria and the chosen workflow. Give implementation,
   integration, routine iteration and final review clear boundaries; retain
   necessary quality work without charging it twice. Output: an annotated work
   inventory with each inclusion, overlap, optional feature and uncertainty
   explained. Acceptance: every activity has a clear place in the model.

2. **Rebuild a provisional estimate from evidence.** Establish fresh-build effort
   separately from remaining effort after verified reuse. Use relevant prior
   work records and the owner's familiar-task feedback where available, without
   requiring a reconstruction or an exact personal estimate. Code inspection
   establishes implementation scope, not elapsed hours. For unfamiliar work,
   use attributable developer production records only where scope, quality,
   team size and workflow are comparable; tutorials and AI marketing claims
   cannot establish finished-game throughput. Mark unsupported allowances as
   judgment or unknown. Output: scope, quantity, setup, repeat-unit effort,
   integration/review, evidence and uncertainty for each package. Acceptance:
   each range explains what changes its duration instead of mechanically
   doubling; unknown effort is visible and is never silently counted as zero.

3. **Find the uncertainties worth measuring.** Recalculate with plausible
   alternative assumptions to identify which could change the comparison.
   Where practical evidence is needed, start with a small reusable sample in the
   preferred mech workflow: one part through import and attachment, then a
   related variant and a connected movement/aim check. Compare a representative
   horror animation or enemy workflow if its result could change the choice.
   Incremental economy/content work also needs evidence if it becomes a serious
   contender. Measure first-time setup separately from repetition, include
   rejected attempts and corrections, and distinguish owner attention from
   unattended AI/provider time. Acceptance is game-ready behavior at the intended
   visual standard, not simply a generated model or standalone clip. A second
   sample tests repeatability; difficult families remain separate unknowns.
   The earlier larger proof bundles are not prerequisites for this first
   calibration. Output: a short, prioritized measurement list; actual tests are
   follow-up work, not performed or newly authorized by this proposal.

4. **Update the comparison and expose its limits.** Replace matching rates with
   observations, preserve their provenance and avoid extrapolating one easy
   sample to all content. Show named risks once, alongside ordinary production
   effort. Recalculate first paid release, completed game, support and EUR cash
   scenarios at both 21 and 31 hours/week, accounting for blocking waits. Sales
   remain separate hypotheses; faster production is not proof of profitability.
   Output: an old-to-new change record and a conditional recommendation showing
   which assumptions would reverse it. Acceptance: the choice is supported
   across plausible remaining uncertainty, or the unresolved deciding condition
   is explicit. Measuring every minor task is unnecessary.

**Earlier proposed next deliverable, superseded:** the full scope/overlap/evidence
audit followed by a provisional rebuild. The owner has since agreed to the
commercial assessment -> representative prototype -> targeted estimate rebuild
sequence at the top of this tab. The useful scope and evidence disciplines above
still apply; a complete audit before any prototype is no longer required.
No replacement hour values have been assigned.
