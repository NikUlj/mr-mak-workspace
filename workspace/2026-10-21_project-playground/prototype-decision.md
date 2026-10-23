# Step 6: which game deserves the first prototype?

**23 October 2026 | Provisional commercial assessment | Production decision open**

**Recommendation: test the mech first; keep horror as runner-up.** The evidence
supports spending the next research effort on a representative mech prototype.
It does not establish that the mech will earn more. Confidence in the test order
is moderate; confidence in an earnings ranking is low. This is the agent's
recommendation under the owner's agreed research sequence, not the owner's
selection of a production game.

The owner's leading priority is earning potential. On 23 October they agreed
to assess commercial opportunity, obtain prototype evidence, then revisit
production estimates and the full commitment. The disputed hour totals and
their earnings-per-hour comparisons do not determine this recommendation.

## What the commercial evidence supports

This memo synthesizes the [29-game comparison](market-comparison.md),
[player-review sample](market-reviews.md), [release evidence](release-strategies.md)
and [financial scenarios](commercial-findings.md). A limited primary-source
refresh on 23 October checked the products and developer disclosure linked below;
the older review counts and normalized prices have not been refreshed here.
The [source record](research/prototype-decision-sources-2026-10-23.json) identifies
the checks. Neither this purposeful sample nor its selected successes supplies
genre success probabilities.

| Test priority | Commercial case | Deciding uncertainty | Current verdict |
| --- | --- | --- | --- |
| 1. Mech action roguelite | A concrete piloting/customization/run offer with close paid comparisons, including a self-published one. | Can our build choices and combat give buyers a distinct reason to choose this game, at presentation quality we can produce? | Test first; earning superiority unproven. |
| 2. Third-person horror | A recognizable campaign offer with relevant retro horror comparisons and a clear intended scale. | Can the setting, atmosphere and connected combat stand out, with sustainable animation and authored-content production? | Runner-up; test if the mech fails or horror demonstrates a stronger hook. |
| 3. Provisional incremental | Commercial successes exist, and the proposed schematic design has less dependence on 3D animation. | Does Scrapline have an appealing repeated action and progression, beyond being inexpensive to depict? | Retain as an alternative; strengthen the concept before treating it as a financial fallback. |

These are priorities for obtaining evidence. They are not predicted revenue
ranks. There is insufficient comparable sales and cost evidence to identify
which candidate has the highest expected profit.

### Why the mech gets the first test

[RIG Riot](https://store.steampowered.com/app/3180340/) directly combines
third-person mech combat, run modifications and permanent parts; its Steam page
lists Sage Boatman as both developer and publisher and displays positive overall
reception. That is evidence that a closely related self-published offer can
attract favorable player response. It is not a disclosure of sales or profit.

[Granvir](https://store.steampowered.com/app/2743460/) is another close
piloting/assembly/roguelite comparison, but its co-op feature and publisher
complicate transferring its traction to our single-player baseline.
[MechNest](https://store.steampowered.com/app/1379120/) supplies a contrasting
low-review-volume case; few reviews do not prove a specific sales total or loss.
Together these references justify testing the audience promise, without implying
that the category guarantees a return.

The proposed heat rule is not an established differentiator: the
[existing market findings](market-findings.md) already identify related heat
mechanics. The test should demonstrate consequential customization and enjoyable
combat, then reveal whether the proposed hook adds a reason to buy. More parts
alone is not evidence of stronger demand.

The owner's mech preference breaks an otherwise unresolved comparison. It does
not increase an assumed sales number. Existing prototype code may make a test
practical, but [source inspection](prototype-audit.md) has not verified runtime
quality or established numerical reuse savings.

### Why horror remains a close alternative

[Heartworm](https://store.steampowered.com/app/1257030/) and
[Ground Zero](https://store.steampowered.com/app/2340130/) demonstrate relevant
retro horror offers with positive overall reception. They also list publishers,
and their camera/combat designs differ from our proposed over-the-shoulder
campaign. Their reception is evidence of audience interest in related products,
not evidence of the same launch reach, sales or profitability for us.

Our campaign still needs a specific setting and memorable buyer promise. The
proposed power-routing mechanic remains a hypothesis. A compelling horror
encounter could reverse the test order, particularly if the mech's customization
is expensive to realize without producing distinct play styles. Preserve the
confirmed 4-6-hour interconnected campaign as the release target.

### Why a smaller incremental is not automatically the money choice

Lyca's developer reported more than 30,000 copies by 2 September 2025 after
roughly four months of part-time development. The same account describes
creator coverage and 11,999 launch wishlists. This is one disclosed success,
with an existing developer workflow; its duration and demand cannot be assigned
to Scrapline. [Developer's account](https://www.syphono4.com/p/blog-1-lyca-development-log).
The existing comparison also includes weak outcomes and uncertain costs.

Less 3D work is a plausible feasibility advantage for our schematic concept.
It does not establish the appeal of its cutting/automation loop. A strong
incremental proof and a credible way to reach buyers could move it ahead of
both 3D games; the current generic genre interest is insufficient to do so.

## What we can say about money now

The calculator tests 100, 3,000 and 20,000 buyers for each candidate. Those are
chosen cases, not candidate-specific forecasts or probabilities. At the existing
illustrative middle price-mix/refund assumptions, a full $19.99 purchase
contributes about EUR 7.03 and a $4.99 purchase about EUR 1.76 before project
costs and income tax. These are [model assumptions](financial-method.md), not
observed prices received or personal take-home earnings.

Holding those contributions fixed, 3,000 buyers would mean roughly EUR 21,000
versus EUR 5,300 in receipts before project costs. This explains why buyer count
and positioning matter: a lower workload does not automatically yield greater
total earnings. It does not justify assuming that the games will sell equally
well, or that a higher price improves demand. Actual costs, sales and support
remain unknown; no expected-profit figure is assigned here.

A bounded search for developer sales/cost disclosures for the closest mech and
horror references did not establish comparable financial outcomes. Third-party
modeled revenue was not substituted. Weak, ordinary and strong outcomes remain
possibilities, with no defensible probability distribution for our concepts.

## Next experiment: a representative mech prototype

**Question:** Can a small piece of our intended game demonstrate a buyer-worthy
piloting/build-choice experience and a repeatable production workflow?

Use the existing mech project as the starting material after runtime inspection.
The proposed test contains one compact encounter, two functionally different
loadouts using a shared attachment standard, and enough enemy contrast to make
the choice matter. Include one representative asset through the intended
AI-assisted workflow, followed by a related second item to expose repetition
cost. Bring movement, aiming, firing, damage and feedback together in Unity.
Placeholders can support gameplay exploration, but cannot establish final-art
throughput. This small test does not replace the larger completed-game target.

**Suggested first checkpoint:** three three-hour work sessions, then review
what exists and what blocked progress. Nine hours is a proposed observation
checkpoint, not a prediction that the test will be finished. Record repairs
separately from new work; do not hide unfinished requirements by extending the
test indefinitely. The earlier larger 40-hour proof bundle is not a prerequisite
for this first checkpoint. Further work depends on what the checkpoint reveals.

Write the test criteria before implementation:

- **Connected play:** movement, aim, weapons, damage and encounter feedback work
  together at the intended game camera without blocking technical failures.
- **Meaningful choice:** the two loadouts create visibly different tactical
  decisions, rather than only changing damage statistics. Record where their
  attachment, motion or aiming fails.
- **Production evidence:** preserve editable assets and native captures; log
  first-item setup, repeat-item work, rejects, corrections and integration.
  Separate owner attention, unattended agent execution, provider waiting and
  blocked calendar time. One simple part does not calibrate every leg, enemy
  or boss family; difficult families remain explicit unknowns.
- **Player response, in a later arranged test:** relevant mech players can
  explain the appeal, identify a meaningful build choice and show interest in
  another attempt. Record confusion and negative reactions alongside enthusiasm,
  and reactions to a stated price. A small convenience sample gives directional
  evidence; it is not a sales forecast or population conversion rate.

Before broadening the roster, assess whether those observations support another
small investment or reveal a reason to test horror instead. Owner enjoyment is
useful for implementation review; commercial evidence also needs target-player
response. Recruiting, publication and paid generation have not occurred in this
revision, and no production or generation budget has been selected.

If public interest is tested later, track comparable exposure, store visits,
demo use and wishlists by channel. Valve explicitly says that wishlists cannot
be converted into sales by a reliable formula.
[Steamworks wishlist guidance](https://partner.steamgames.com/doc/marketing/wishlist?l=english).

## What would change the recommendation?

| Observation | Consequence |
| --- | --- |
| Mech loadouts and combat are engaging; a second related asset survives the workflow with acceptable correction. | Continue the mech test, gather target-player evidence and rebuild matching work rates. Still validate other difficult families before scaling. |
| Mech assembly/motion is repeatedly troublesome, or different builds do not create an appealing experience after a bounded revision. | Pause roster expansion; compare the horror encounter/workflow next. Do not infer that the entire genre lacks demand. |
| Horror develops a stronger, understandable hook and convincing connected play at sustainable observed effort. | Promote horror to the next prototype or production assessment. Its longer campaign remains separately estimated. |
| Scrapline demonstrates a compelling loop and credible audience interest with materially less observed production effort. | Reopen the comparison; do not discard it because the current preference favors 3D. |
| All tests remain weak or commercially indistinct. | Revise the concepts or park production; completing a prototype does not oblige a full game. |

After the prototype, update the largest matching work packages first. Keep
remaining content, unusual rigs, release preparation and support visible;
show where observations do not transfer. Revisit broad hours, cash exposure and
21/31-hour schedules before a production commitment. Full numerical repair of
all 124 rows is not required to obtain the next useful evidence.

**Status:** The research sequence is agreed. This memo and its prototype scope
are recommendations. No Unity project was changed, benchmark timed, player
contacted, store page published or paid generation submitted for this memo.
