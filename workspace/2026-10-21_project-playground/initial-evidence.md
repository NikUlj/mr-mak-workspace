# Initial evidence and open hypotheses

**Checked 21 October 2026.** This is a starting source register, not the completed
market comparison or a profitability forecast. A [static prototype audit](prototype-audit.md)
is available; runtime quality remains unverified. No final scope or ranking is approved.

**Follow-up:** the [Step 3 market study](market-findings.md) is now available.
Use its consistently filtered USD/review dataset for comparisons; this page
preserves the initial discovery observations. It also clarifies Go Up's earlier
paid EA period and Hollowbody's later free third-person camera update.

## Sources that already change the research approach

### Sir, We Have an Orc Problem: useful, exceptional, and technically demanding

The [Steam page](https://store.steampowered.com/app/4594150/Sir_We_Have_an_Orc_Problem/)
dates release to 28 July 2026. In a [29 July developer postmortem](https://www.reddit.com/r/gamedev/comments/1v9z4vi/we_made_361657_gross_revenue_in_the_first_24/),
the developers report four months of production by two experienced programmers,
custom GPU simulation, and $361,657 gross revenue in the first 24 hours. They also
describe a previous, much less rewarding release and strong public interest
before this launch. These are self-reported figures, not audited accounts.

**Implication:** Study how a technical feature created a striking visual hook
with limited art. Do not use either its sales or its production duration as
the default outcome for a new solo incremental project.

### RIG Riot: the confirmed direct mech comparison

The owner identified **RIG Riot**. Its [Steam page](https://store.steampowered.com/app/3180340/RIG_Riot/)
lists a 14 September 2026 release and describes single-player third-person mech
combat with run upgrades and permanent parts assembled from component sets.
As observed on 21 October, the page showed 434 reviews and 94% positive; that
is a reception signal, not a sales or profit disclosure. The [developer's devlog](https://sageboatman.itch.io/rig-riot/devlog)
documents ongoing work on leg types, onboarding, balance, controls, and bug fixes.

**Implication:** Compare its actual asset families and part-generation approach,
not its advertised number of possible parts as if every one were a unique model.
Normalize its short time since release when comparing it with older games. A
closely matching release warrants differentiation research; it does not by
itself rule out the owner's idea.

### Granvir: a secondary mech production comparison

[Granvir's Steam page](https://store.steampowered.com/app/2743460/Granvir/)
describes third-person roguelite mech combat, interchangeable parts, and co-op;
it lists a 23 September 2025 release. It remains useful as a second comparison,
separate from the owner's confirmed reference, RIG Riot.

In a [developer interview](https://www.gamedevjourney.co.uk/home/developer-diaries/unity-diaries/granvir),
the creator describes developing alongside a day job, being stronger at
programming, struggling with art, choosing simple graphics, and outsourcing some
audio and icons. The interview page does not establish a reliable total labor
budget or current profit.

**Implication:** This is an unusually relevant production comparison. Investigate
how much content customization requires, and keep co-op outside our baseline
unless the owner chooses it. The presence of a competitor is evidence of an
existing offer, not proof that the opportunity is either exhausted or profitable.

### Hollowbody: a smaller third-person horror reference

The [developer press kit](https://www.headwaregames.com/presskit) describes a solo
third-person survival-horror project and an author handling art, writing,
programming, and music, with earlier commercial releases. The [Steam page](https://store.steampowered.com/app/2123640/Hollowbody/)
describes a compact survival-horror story and lists a 12 September 2024 release.

**Implication:** Useful as a small-team scope reference, although its camera and
combat approach must be compared with the owner's RE4/Dead Space expectations.
"Solo-developed" does not mean the work matches a programmer's current art skills.
Its older release also needs an age note in any current-market comparison.

### A contrasting incremental outcome

The developer of Go Up reports weak early commercial results and very limited
wishlist/demo traction in an [August 2026 postmortem](https://www.reddit.com/r/gamedev/comments/1w3rzlc/today_we_are_releasing_our_failed_game_a/).
This is self-reported evidence at the time of that post, not a current lifetime
estimate or a representative genre average.

**Implication:** Incremental mechanics and modest visuals do not establish demand.
The full comparison needs low-traction releases as well as visible hits.

### Platform facts to include in the model

[Valve's refund policy](https://store.steampowered.com/steam_refunds/) generally
covers requests made within two weeks of purchase with under two hours played.
Exceptions and additional rights are described on the page. This does not prove
that short games have any particular refund rate.

[Steam Direct fee documentation](https://partner.steamgames.com/doc/gettingstarted/appfee)
and [wishlist documentation](https://partner.steamgames.com/doc/marketing/wishlist)
are primary sources for release costs and interest reporting. Verify the relevant
terms and distinguish observed interest from a prediction of purchases.

## Working hypotheses to test

### Toolchain evidence for the production study

The owner expects to use Tripo for models and a GPT agent operating Blender MCP
with video references for animation, then correct the motion in Cascadeur or
Blender. This is the baseline for effort estimates, not generic one-click
animation generation.

[Tripo's current feature documentation](https://www.tripo3d.ai/help/getting-started/what-features-does-tripo-have)
lists generation, segmentation, retopology, texturing, rigging, and export as
available operations. Its [credit documentation](https://www.tripo3d.ai/product-doc/getting-started/pricing-credits)
prices several processing steps separately. These establish available tools and
cost inputs, not accepted-asset throughput for this project.

[Cascadeur's current FAQ](https://cascadeur.com/help/faq) distinguishes free and
paid export/commercial-use capabilities and reserves some tools for higher
plans. Compare the owner's actual license with the needed correction workflow;
do not assume the Blender and Cascadeur routes have identical costs or features.

**Research implication:** Measure cost and hands-on hours per accepted in-game
asset, including rejected attempts and manual correction. Keep provider claims
separate from measured results on the owner's rigs and chosen art style.

### Candidate hypotheses

These are production judgments based on the owner's stated constraint, not
completed research findings:

The baseline now includes 21 hours/week, a later increase to 31, and self-created
AI-assisted assets. Test whether AI reduces the difficult finishing and
integration stages for each candidate, not only the initial generation stage.

| Candidate | Initial hypothesis | Evidence that could change it |
| --- | --- | --- |
| Incremental | A tightly designed game with a small visual vocabulary may offer the strongest fit for limited art capacity. | No distinctive enjoyable concept, weak target-player response, or unexpectedly large progression/UI/polish workload. |
| Third-person horror | A compact scope could be viable, but a short playtime may still require substantial animation, encounters, atmosphere, and authored content. | A strong reusable prototype, compatible assets, a proven animation workflow, or a concept that uses very few characters and spaces effectively. |
| Mech roguelite | Movement, combat, equipment variety, and replayable encounters may combine into the largest integration and testing burden. | Existing systems are already strong, a modular kit is efficient to produce, or a deliberately limited design delivers the desired piloting fantasy. |

The research should try to disprove these hypotheses as well as support them.
The final answer needs scoped games and remaining-work estimates, not just a
genre preference.
