# Step 5: financial model, sources and limits

**Checked 22 October 2026 | Currency: EUR, confirmed by owner | Monthly spending cap: undecided**

**Estimate review open:** The owner's familiar-task check questions the credibility
of the production durations, including the controller estimate even from scratch.
The original numbers remain for reproducibility; they are not accepted schedules
or a basis for choosing a game. [Read the correction](estimate-review.md).
Step 5 needs calibration before its numerical outputs can support a production
commitment. The owner agreed on 23 October to make a provisional commercial
[prototype choice](prototype-decision.md) first, then revise the consequential
estimates using observations. Equal-volume scenarios do not rank demand.

This is a decision model, not a forecast, vendor quotation or tax return. The
[findings](commercial-findings.md) and [interactive model](scenario-model.html)
use the [larger scopes](game-scopes.md), the [69-row asset ledger](asset-inventory.md)
and 55 additional work/risk packages. No timed production measurement or native
Unity acceptance has been added. No purchases, generations, publication or
contact with players/developers took place.

## Evidence versus assumptions

| Input | Basis and confidence |
| --- | --- |
| 21 hours/week now; possible 31 later; EUR | Owner supplied. Switch date and sustainable weeks/year remain unknown. |
| Larger horror/mech direction, low-poly, self-produced assets, AI-assisted workflow | Owner supplied. Exact counts and release packaging remain research proposals. |
| Existing prototype functionality | Static source/scene evidence in the [audit](prototype-audit.md). Native acceptance and saved future hours remain unverified. |
| Work hours, stage/demo allocation, support and risk reserves | Analyst judgments against the scoped tasks. Low confidence until timed. No external production anecdote is treated as a calibrated rate for this owner. |
| 100 / 3,000 / 20,000 buyers; monthly sales curve; chapter uptake | Chosen stress cases with no probabilities. Equal volume isolates effort/price effects; it does not predict equal demand. |
| Realized price mix, discounts, refunds | Explicit sensitivity assumptions. The [market study](market-findings.md) informs price anchors but does not supply this game's eventual geography, realized price or refunds. |
| Official tool/platform prices and rules | Dated checks below. May change before a multi-year game ships; actual checkout and account agreements govern. |
| €50/month general tools and €250 fixed reserve | Editable allowances. No chosen agent/image/audio plan or business quote was supplied. Neither is the owner's spending authorization or budget. |
| Asset/contractor purchases, paid ads, additional languages | Zero in the baseline because this is self-production, organic marketing and English-only. Add them if the plan changes. Existing hardware is assumed; replacement and additional test devices are unpriced. |

The current model supports six routes: three full releases, paid horror chapters,
one purchase for horror chapters delivered in EA, and mech EA. Mech episodes
need a coherent purchase/content boundary before costing. The owner's larger
scope remains the main case. The compact fallback is separately re-costed at
base asset quantities and explicitly reduced system fractions; it has not
received a new market/appeal validation.

## Time accounting

Asset hours for each scenario are quantity × (creation + integration + polish).
Step 5 adds reusable gameplay systems, end-to-end balance/QA, demo packaging,
store/marketing/administration and named disruption reserves. No generic
programming-to-art ratio is used. H09 motion contacts, M11 procedural motion,
M12 visual compatibility, UI binding, asset imports and local content tuning
remain in Step 4 and are not charged a second time as systems work.

For staged asset allocation, each row's first-paid base quantity / full base
quantity is applied to its low/middle/high effort. This conserves full effort
and keeps the middle counts exactly as proposed. **Low/high stage numbers are
effort allocations, not independent promises about an exact low/high content
roster.** Additional chapter/EA asset overheads are imported once from Step 4;
engineering extras are separate. A purchased episode must still be a completed,
valuable chapter. Treating unfinished one-purchase chapters as EA is the modeled
packaging assumption, not an announcement.

```text
first paid hours = allocated first assets + first systems + first staged extras
later production = remaining assets/systems + later staged extras
first paid weeks = first paid hours / available weekly hours
staged gap weeks = (later production + first-release burst)
                   / (available weekly hours - live support hours/week)
completion = first paid week + staged gap
total owner hours = first + later + both launch bursts
                    + live support during gap + 52 weeks final support
```

Full releases have no staged gap and one launch burst. The burst is scheduled
within capacity after release; it is not free overtime. The model refuses a
staged schedule when support consumes all development capacity. The default
21/31 hours are net project availability, so no additional calendar haircut is
silently applied. An availability control tests interruptions. A later increase
uses hours before and after the specified switch separately. There is no
assumption that 31 hours becomes available after a particular month.

One model month is 52/12 weeks. Thus the month results are capacity estimates,
not actual release-date calendars. Passive agent/provider waiting is unknown;
overlapping useful owner work may be possible. Setup, prompts, supervision,
evaluation and correction consume owner time. No measured acceleration from
Tripo or an agent is assumed. The explicit pre-release pause control adds elapsed
time and subscription costs but no work, representing a disruption with
subscriptions left active.

The diagnostic prototype cap, polished demo and paid release are separate gates.
Demo asset quantities and per-system fractions allocate part of the full work;
they do not add another game's effort. The small diagnostic caps are limits for
learning, not estimates of a finished production slice. Public demo timing must
also be coordinated with events; [Steam Next Fest](https://partner.steamgames.com/doc/marketing/upcoming_events/nextfest)
eligibility and timing should be rechecked before a paid EA launch.

## Revenue and refunds, exactly once

```text
average realized ex-consumption-tax price (EUR)
  = US list anchor × regional factor × discount factor × tax-exclusion factor
    / USD per EUR
retained units = gross purchases × (1 - refund/chargeback fraction)
adjusted gross = retained units × realized ex-tax price
developer receipts earned = adjusted gross × developer share
earned project surplus = receipts + eligible Steam fee recoup - costs incurred
effective earnings/hour = earned project surplus / owner hours worked
labor-adjusted surplus = earned project surplus - hours × chosen EUR/hour
```

The tax-exclusion factor represents a weighted global mix; it is **not** the
owner's VAT rate. Do not subtract VAT/refunds again from these figures. In the
middle case, factors are 0.8 × 0.85 × 0.9 and refunds 8%. The factors and refund
rate vary in the other sales presets. None is an observed result for this game.
List-price changes do not automatically change demand: the user must test
different buyer counts explicitly.

The 70% developer share is a **planning assumption**, not verified terms from
the owner's Steam agreement. Steam's public finance FAQ confirms the deduction
order and refers partners to their signed agreement for the share. The historical
Valve tier announcement could not be read fully in this retrieval, so it is not
used to claim access to a current contract. No high-revenue tier benefit is
included. [Steam finance FAQ](https://partner.steamgames.com/doc/finance/payments_salesreporting/faq).

There is no publisher, external co-owner or engine revenue royalty in the
self-published baseline. A future publisher agreement would require an explicit
advance/recoup/share waterfall; adding a generic percentage would not be enough.
No ownership, contract or tax situation has been inferred from the owner's name,
computer path or location.

## Staged sales and observation windows

The first paid year's base buyers use monthly weights of 30%, 15%, 10%, 8%, 6%,
5%, 5%, 5%, 4%, 4%, 4%, 4%. This deliberately frontloads sales for sensitivity
analysis; it is not fitted to the sample. The calculation distributes these
buyers across weekly events. No pre-release purchases, wishlists converted to
sales, 1.0 demand multiplier or second hypothetical game is added.

| Route | Model treatment |
| --- | --- |
| Full launch | Every new buyer purchases once at that game's price anchor. |
| Mech EA / one-purchase horror chapters | Earlier new buyers use $14.99; later new buyers after completion use $19.99. Existing owners get the rest of the game without another base purchase. |
| Separately paid horror chapters | Chapter one $9.99, chapter two $9.99. At completion, 50% of retained earlier chapter-one owners make a new chapter-two purchase; that purchase has its own refund risk. After completion, 60% of new entrants buy both chapters at 10% bundle discount; the rest buy chapter one only. |

New entrants who initially buy chapter one after completion are not automatically
converted into another chapter-two sale. Bundle buyers are one new buyer with a
two-chapter order, not two owners. Chapter-two conversion happens at completion
as a simplifying assumption; actual uptake could arrive later. A first paid-year
window excludes the event if completion is after that year. The snapshot also
shows completion and end-of-support outcomes, which can include that deferred
event; **do not add overlapping windows together**.

Default sales after year one are zero **for comparison credit**, not a prediction
that the game will stop selling. The optional second-year multiplier adds a
uniform second-year stream of new buyers. Support beyond the modeled year is
not automatically funded or expanded; if substantial longer-term work is
expected, revise its scope too. No first-year-after-1.0 result is added to the
first-paid-year total.

The equal 12/24-month views start at the same decision point and suppress all
sales before each route's first paid build. Buyer thresholds additionally ask
whether that first paid year's earnings cover **all committed completion work
plus one support year**, including work still outstanding. They are gross new
base-buyer counts, not retained buyers or episode transactions. At zero
contribution the model reports no finite threshold.

## Cash costs and license reserves

| Item | Default cash treatment | Source/status |
| --- | --- | --- |
| Steam app fee | $100 upfront, converted to EUR. Recoup once cumulative modeled adjusted gross reaches $1,000. No immediate refund assumption. | [Steam Direct fee](https://partner.steamgames.com/doc/gettingstarted/appfee), checked 22 October. Consumption taxes may be charged on the fee. |
| Tripo | $20 per active month, paid in half of rounded-up development months; no Tripo needed for Scrapline. 3,000 included credits per paid generation month. | [Official credit documentation](https://www.tripo3d.ai/product-doc/getting-started/pricing-credits) lists $20 monthly; [pricing page](https://www.tripo3d.ai/pricing) labels $20 with $240 annual billing. Conflicting presentation makes cancel/resume monthly treatment provisional, not a confirmed checkout quote. |
| Tripo top-ups | One concentrated generation month by default. Charge only demand exceeding that month's included credits, in $10/1,000 packs; no use of other months' expired credits. | Same official sources and [Step 4 pipeline](production-pipeline.md). Baseline HD demand is 2,925 horror / 3,975 mech credits, so zero / one small top-up. It is not a charge for every included credit. |
| Cascadeur | €19 per active month, half of development months. Blender-only correction can set this to zero without an assumed time saving. | [Official plans](https://cascadeur.com/plans), checked 22 October. Indie annual is €96/year; this model deliberately uses flexible monthly billing, not annual billing plus monthly charges. |
| General tools | €50 for every rounded-up development month. Agent/image/audio/storage plans unselected. | Unquoted allowance, editable from €0 upward. Account for allocated project spending consistently; a subscription already paid for other work may have no incremental cash cost. |
| Fixed other reserve | €250 at the start as a conservative cash envelope. | Unallocated testing/admin/launch allowance, not a quote for business formation, legal advice or hardware. |
| Paid ads, purchased art, contractors, translations | €0 baseline. Organic promotion labor is included. | Scope assumption, consistent with self-production. These are not claimed free if later added. |
| After completion | €10/month for 12 months. Tripo/Cascadeur production billing stops; reopening paid tooling may require a revised allowance. | Analyst allowance for patch/support tools. |
| Higher software tier reserve | Triggered conservatively by modeled trailing-year adjusted gross before the store share; details below. | Current official thresholds/prices; actual eligibility is not established by this proxy. |

Tripo generation credits are an early concentrated envelope, while subscriptions
span production. Actual generation months, repeated texturing/reference images,
rigging/segmentation and higher-cost P2 runs can differ. Step 4 separately models
P2 demand (middle 12,480 horror / 16,960 mech credits); this financial default uses
HD. Replace the credit-route assumptions to cost P2. Provider pricing/rights must
be checked before any paid job. Nothing here authorizes spending. Switching to
monthly paid/private generation does not establish rights to older free outputs.

Unity Personal currently uses a $200,000 revenue/funding eligibility threshold;
Pro pricing is $2,310/year prepaid or $210/month in the retrieved 2026 schedule.
Unity 6's terms do not impose a runtime royalty, but eligibility and seat fees
still apply. [Unity Personal](https://unity.com/products/unity-personal),
[2026 prices](https://unity.com/products/pricing-updates),
[Unity Editor terms](https://unity.com/legal/editor-terms-of-service/software).

The calculator uses this title's trailing 52-week adjusted gross as a conservative
trigger proxy, not an interpretation of the owner's legal Total Finances. Once
triggered, it reserves a full Pro annual seat for each remaining active model
year through the support endpoint, with no automatic downgrade credit. Other
income/funding may require Pro earlier. Future editor versions or terms could
change the relevant rule.

Cascadeur Indie currently has a $100,000 revenue/funding eligibility limit under
the applicable definitions; Pro monthly is €49. When the model's proxy crosses
$100,000 and Cascadeur is selected, it reserves an extra 12 × (€49 minus selected
monthly price) for each remaining active model year. This is an **incremental
upgrade reserve**, not an invoice or duplicate Indie fee. It also allows for
reopening the tool for support. Definitions and actual continued use matter;
Blender-only has no such cost. Pro-only retargeting/other features are not assumed
available in Indie. [Plans](https://cascadeur.com/plans),
[Cascadeur agreement](https://cascadeur.com/help/cascadeur_end_user_agreement).

**Excluded or unresolved:** personal/company income tax, unrecoverable input VAT,
bank/intermediary/FX charges, living expenses, entity/accounting obligations,
new hardware/test devices, extra localization and tool spending above the
allowances. Add known costs to the fixed/monthly inputs; do not treat their
absence as a guarantee that they are unnecessary. A cash-positive project is not
automatically a viable income source.

## Payment timing and currency

Valve reports a $100 payment threshold and usually pays the following month.
Outside the US it sends USD SWIFT wires; receiving/intermediary bank fees can
affect the amount received. The model aggregates weekly sales into **model-month
buckets (52/12 weeks each)** and pays each bucket at the next model month's end,
carrying sub-threshold balances. It is an indicative one-to-two-month lag, not an
actual calendar payment date; weekly rounding near month ends can shift the
illustrative payment bucket. [Steam payments](https://partner.steamgames.com/doc/finance/payments_salesreporting),
[payment FAQ](https://partner.steamgames.com/doc/finance/payments_salesreporting/faq).

Withholding depends on the completed tax interview. Valve describes rates up to
30% on US-source income, not automatically on all global receipts. The default
zero effective payout deduction is solely a **pre-income-tax comparison**, not a
claim of treaty eligibility. The optional effective withholding fraction should
represent the weighted deduction from total receipts; earnings remain before
income tax. Do not subtract it twice as both a platform cost and income tax.
[Steam tax FAQ](https://partner.steamgames.com/doc/finance/taxfaq).

The fixed conversion is **1 EUR = 1.1205 USD**, from the ECB's 22 October 2026
reference sheet. Dollar amounts are divided by 1.1205. It is a reference rate,
not a trading quote, future-rate prediction or Steam payout conversion rate.
The interactive FX control allows a different scenario.
[ECB reference sheet](https://www.ecb.europa.eu/stats/shared/pdf/eurofxref.pdf)
(a rolling URL; the date/value used are stored in the input JSON).

## Release rules that affect the modeled choices

EA needs a playable product worth buying in its current state, and Valve warns
against depending on a particular sales amount to finish it. The one-purchase
horror route therefore explicitly models an unfinished EA game with chapter
updates, not a completed first chapter secretly obliging a later payment.
[Steam Early Access](https://partner.steamgames.com/doc/store/earlyaccess).

Paid chapters assume a completed chapter-one base product and a chapter-two DLC
entitlement with continuity/migration work. Valve supports paid DLC integrated
with the base game. The public page retrieved does not explicitly price creation
of this DLC; one $100 base-app fee is modeled, with any extra fee to confirm at
packaging. Separate standalone chapter apps would each need their own release
work and fees. Bundles/discount assumptions here are commercial tests, not
configured Steam packages. [Steam DLC](https://partner.steamgames.com/doc/store/application/dlc).

The usual game refund window is within 14 days with under two hours played,
subject to the policy's other provisions. Short games/chapters still need to
deliver satisfying value; there is no assumed refund rate inferred directly
from length. [Steam refunds](https://store.steampowered.com/steam_refunds/).

## Updating and verification

Canonical editable data: [production inputs](research/production-inputs.json)
and [asset inputs](research/asset-inputs.json). The [shared engine](research/scenario-engine.mjs)
runs in both the report generator and browser; the generated HTML embeds its
data and code and needs no account, provider API or live pricing service.
Changes in the report stay in that page; Download saves assumptions/results.
It does not persist browser state or overwrite project files.

Run from the repository root:

```text
node workspace/2026-10-21_project-playground/research/render-production.mjs
node workspace/2026-10-21_project-playground/research/verify-production.mjs
node workspace/2026-10-21_project-playground/research/preview-production.mjs
```

The verification result is recorded in the [research plan](research-plan.md).
Arithmetic and rendered-page verification do not validate the assumed sales,
work rates, actual taxes/licensing or quality of either Unity prototype.
