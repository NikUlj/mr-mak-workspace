# Market comparison and source method

**Observed 21 October 2026.** 29 paid products; Early Access counts as paid availability. [Read the findings first](market-findings.md).

## How the sample was built

The starting window was 21 October 2024–21 October 2026. Older close references were retained explicitly; dates identify them below. Selection began with the owner's references and version 2.1 loops, then sought adjacent offers and weak-traction examples. This is a purposeful comparison set, not a representative sample or genre success-rate calculation. Low review volume is low observed traction, not proven low sales.

Discovery combined Steam name searches, official pages, developer reports and a scan of names in the first 30 results for each Steam search: `survival horror`, `mech`, and `incremental`, sorted `Released_DESC`, games category and free products hidden. The 90-result [discovery inventory](research/discovery-searches.json) is not 90 fully audited games. Ranking is not an unbiased census. Exact search URLs are preserved; release dates come from selected product pages, not the search-result parser.

Web queries included `site:store.steampowered.com "survival horror" "third person" "2025"`, `"mech" "roguelite" "third-person"`, `"incremental" "2026" "Mixed"`, low-review searches, exact titles, and `"RIG Riot" "sales" developer` / `"Granvir" "copies" sold developer`. Searches occurred on the observation date. Disclosed finances were preferred over modeled trackers.

Include a paid PC game relevant to a proposed loop, scope, presentation or release route; label the mismatch instead of averaging it away. There are three especially direct mech-run comparisons and four adjacent references. The larger intended releases remain the target, not an artificially equal production budget.

Excluded from the main tables: AAA references (production/audience mismatch); Anesthesia (free student project); RIG Riot Demo and Granvir: Zero Front (free discovery products); CRUSH LOAD (auto-firing survivors loop, released only the previous day); unrelated `go Up`, app 4953130 (2D shooter); and unreleased titles below. Song of Horror is a separate historical release-route case. [Anesthesia](https://store.steampowered.com/app/2730030/), [CRUSH LOAD creator description](https://www.reddit.com/r/roguelites/comments/1xbn8f8/i_released_crush_load_a_15minute_mech_survival/).

## Reading the numbers

- **Prices:** US base-game list/current price, returned as USD by `appdetails?cc=us`. Excludes bundles/DLC. Current offers, not reconstructed launch prices.
- **Reviews:** all-language Steam-purchase summary, off-topic filter enabled. Not the alternative non-Steam-purchase category; counts may differ from cached snippets or earlier project notes. Percentages use returned positive/total counts, rounded to one decimal. No sales or profit conversion.
- **Dates:** listed release plus verified EA date where present. No listed EA date does not prove no public development. Age starts at EA when known, otherwise listed release. Lifetime reviews are not annualized.
- **Content:** store descriptions and claims, not a completed playthrough or mesh audit. Art/camera labels are qualitative. First store screenshots for RIG Riot, Granvir and Ground Zero were spot-checked; motion quality and polygon budgets were not measured.
- **Context:** credit names are not headcounts. Unknown labor, cash costs, launch wishlists and creator reach remain unknown. Most games lack comparable 30/90/365-day sales disclosures.

Sources: [main snapshot](research/steam-snapshot-2026-10-21.json), [supplemental snapshot](research/supplemental-snapshot-2026-10-21.json), [date checks](research/release-date-checks.json), [analyst notes](research/comparison-notes.json), [read-only collector](research/collect_market.py) and [renderer](research/render_market.py). The 29 IDs in analyst notes define this sample; the raw collection also retains excluded/watchlist records. The public review endpoint returned data, although Valve now [marks it deprecated](https://partner.steamgames.com/doc/store/getreviews); future refreshes should check its successor.

## Paid comparison tables

### Horror — 11

| Game | Listed release / status | Days since first known paid release | USD list → current | Reviews; positive |
| --- | --- | --- | --- | --- |
| [Hollowbody](https://store.steampowered.com/app/2123640/) | Sep 12, 2024; Full; EA date not listed | 769 | $16.99 → $16.99 | 1,475; 84.3% |
| [Crow Country](https://store.steampowered.com/app/1996010/) | May 9, 2024; Full; EA date not listed | 895 | $19.99 → $19.99 | 7,904; 97.9% |
| [Heartworm](https://store.steampowered.com/app/1257030/) | Jul 31, 2025; Full; EA date not listed | 447 | $14.99 → $14.99 | 452; 86.9% |
| [Sorry We're Closed](https://store.steampowered.com/app/1796580/) | Nov 14, 2024; Full; EA date not listed | 706 | $24.99 → $17.49 | 1,675; 98.1% |
| [Post Trauma](https://store.steampowered.com/app/1750030/) | Apr 22, 2025; Full; EA date not listed | 547 | $14.99 → $6.74 | 582; 73.0% |
| [The Fear Business](https://store.steampowered.com/app/2855770/) | Oct 28, 2024; Full; EA date not listed | 723 | $9.99 → $9.99 | 106; 93.4% |
| [Daymare: 1994 Sandcastle](https://store.steampowered.com/app/1530470/) | Aug 30, 2023; Full; EA date not listed | 1,148 | $29.99 → $29.99 | 795; 73.7% |
| [Echoes of the Living](https://store.steampowered.com/app/2173460/) | Oct 31, 2025; EA, incomplete | 355 | $24.99 → $24.99 | 1,017; 83.2% |
| [Phantom House](https://store.steampowered.com/app/3463020/) | Sep 1, 2025; EA, incomplete | 415 | $6.99 → $6.99 | 6; 16.7% |
| [AFFRAID](https://store.steampowered.com/app/3452040/) | Feb 20, 2025; Full; EA date not listed | 608 | $8.99 → $8.99 | 13; 15.4% |
| [Ground Zero](https://store.steampowered.com/app/2340130/) | Apr 16, 2026; Full; EA date not listed | 188 | $19.99 → $19.99 | 758; 88.8% |

### Mech — 7

| Game | Listed release / status | Days since first known paid release | USD list → current | Reviews; positive |
| --- | --- | --- | --- | --- |
| [RIG Riot](https://store.steampowered.com/app/3180340/) | Sep 14, 2026; Full; EA date not listed | 37 | $19.99 → $19.99 | 432; 94.2% |
| [Granvir](https://store.steampowered.com/app/2743460/) | Sep 23, 2025; Full; EA date not listed | 393 | $14.99 → $11.99 | 916; 91.3% |
| [MechNest](https://store.steampowered.com/app/1379120/) | Apr 13, 2024; Full; EA Oct 22, 2021 | 1,825 | $15.99 → $15.99 | 14; 71.4% |
| [M.A.S.S. Builder](https://store.steampowered.com/app/956680/) | Sep 14, 2025; Full; EA Sep 13, 2019 | 2,595 | $24.99 → $24.99 | 3,732; 85.5% |
| [Gearbits](https://store.steampowered.com/app/2506580/) | Oct 9, 2023; Full; EA date not listed | 1,108 | $9.99 → $9.99 | 445; 96.6% |
| [Metal Bringer](https://store.steampowered.com/app/2334170/) | Mar 11, 2025; Full; EA date not listed | 589 | $19.99 → $19.99 | 1,127; 87.7% |
| [Mech Havoc](https://store.steampowered.com/app/3237920/) | Oct 27, 2025; EA, incomplete | 359 | $9.99 → $6.49 | 845; 96.7% |

### Incremental — 11

| Game | Listed release / status | Days since first known paid release | USD list → current | Reviews; positive |
| --- | --- | --- | --- | --- |
| [Nodebuster](https://store.steampowered.com/app/3107330/) | Aug 13, 2024; Full; EA date not listed | 799 | $2.99 → $2.99 | 13,893; 97.4% |
| [Sir, We Have an Orc Problem](https://store.steampowered.com/app/4594150/) | Jul 28, 2026; Full; EA date not listed | 85 | $9.99 → $9.99 | 4,647; 86.4% |
| [Digseum](https://store.steampowered.com/app/3361470/) | Dec 9, 2024; Full; EA date not listed | 681 | $2.99 → $2.99 | 8,090; 97.6% |
| [Keep on Mining!](https://store.steampowered.com/app/3769130/) | Jul 30, 2025; Full; EA date not listed | 448 | $4.99 → $2.99 | 8,344; 93.4% |
| [DigDigDrill](https://store.steampowered.com/app/2916770/) | Dec 9, 2024; Full; EA date not listed | 681 | $3.99 → $3.99 | 614; 95.0% |
| [Lyca](https://store.steampowered.com/app/3421300/) | Apr 7, 2025; Full; EA date not listed | 562 | $4.99 → $2.49 | 1,316; 81.7% |
| [Go Up](https://store.steampowered.com/app/2934520/) | Aug 31, 2026; Full; EA Jul 11, 2025 | 467 | $4.99 → $4.99 | 4; 75.0% |
| [Planet Harvester: Incremental Odyssey](https://store.steampowered.com/app/4448490/) | Aug 17, 2026; Full; EA date not listed | 65 | $5.99 → $4.79 | 86; 90.7% |
| [Idle Ways](https://store.steampowered.com/app/4219060/) | Apr 27, 2026; Full; EA date not listed | 177 | $2.49 → $2.49 | 10; 40.0% |
| [DEBRISVERSE](https://store.steampowered.com/app/4433730/) | Jul 29, 2026; Full; EA date not listed | 84 | $3.99 → $3.99 | 34; 94.1% |
| [Blob of Ink](https://store.steampowered.com/app/4900980/) | Aug 25, 2026; Full; EA date not listed | 57 | $3.99 → $3.99 | 11; 100.0% |

**Tiny samples:** Phantom House (6), AFFRAID (13), MechNest (14), Go Up (4), Idle Ways (10) and Blob of Ink (11) have too few reviews for stable percentage comparisons. These examples prevent a hits-only study; they cannot establish a representative failure rate.

## Per-game comparability and production context

### Hollowbody

**Close scope; adjacent combat emphasis.** Retro tech-noir 3D; compact exploration, resources and puzzles. Free third-person camera added after launch.

Useful compact campaign reference; limited combat and full voice acting differ from our costing case.

Headware: solo creator with earlier Guard Duty and Chasing Static releases; press kit linked below.
Steam credits: **Headware Games** (developer); **Headware Games** (publisher).

Sources: [store](https://store.steampowered.com/app/2123640/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2123640&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2123640?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Crow Country

**Adjacent camera; retro reference.** Stylized retro 3D survival horror in an interconnected theme park; puzzles, backtracking and exploration mode.

Relevant coherent location and art direction; camera and combat differ from over-the-shoulder action.

SFB Games: established studio of the Vian brothers, making games since 2002; prior catalog rather than a debut audience baseline.
Steam credits: **SFB Games** (developer); **SFB Games** (publisher).

Sources: [store](https://store.steampowered.com/app/1996010/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=1996010&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/1996010?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Heartworm

**Close duration; adjacent combat.** Retro views with over-the-shoulder aiming; camera weapon, puzzles, cutscenes and multiple endings; advertised 4–6 hours.

Strong duration/presentation reference. Limited camera-based combat differs from four conventional guns and a larger combat roster.

Vincent Adinolfi / DreadXP. Total staffing, labor and launch audience not established here.
Steam credits: **Vincent Adinolfi** (developer); **DreadXP** (publisher).

Sources: [store](https://store.steampowered.com/app/1257030/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=1257030&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/1257030?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Sorry We're Closed

**Adjacent combat and structure.** Neon survival horror; fixed-camera exploration and first-person shooting. Third Eye mechanic, dialogue choices and multiple endings.

A distinct visual and mechanical identity; dialogue and character work change the asset budget.

À la mode games / Akupara Games. Total staffing, labor and audience not established here.
Steam credits: **à la mode games** (developer); **Akupara Games** (publisher).

Sources: [store](https://store.steampowered.com/app/1796580/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=1796580&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/1796580?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Post Trauma

**Adjacent puzzle emphasis.** Fixed-camera 3D puzzle horror, Unreal Engine 5 presentation, multiple perspectives and full voice acting.

Not a small over-the-shoulder shooter. Useful for expectations around atmosphere, puzzle clarity and polish.

RED SOUL GAMES describes a small studio; Raw Fury publisher. Exact headcount/hours unknown.
Steam credits: **RED SOUL GAMES** (developer); **Raw Fury** (publisher).

Sources: [store](https://store.steampowered.com/app/1750030/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=1750030&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/1750030?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### The Fear Business

**Adjacent stalking/fallback reference.** Third-person mansion horror; cinematic views and VHS treatment; hiding or fighting, first-person recording, saves that darken the house.

Interconnected location and an explicit hook are relevant; stalking emphasis differs from our combat roster.

Tomás Esconjaureguy / selewi; store cites prior The Night of the Scissors and Cannibal Abduction.
Steam credits: **Tomás Esconjaureguy** (developer); **selewi** (publisher).

Sources: [store](https://store.steampowered.com/app/2855770/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2855770&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2855770?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Daymare: 1994 Sandcastle

**Close camera/combat; larger production.** Third-person survival horror in a research facility; combat, puzzles, dismemberment and specialized equipment.

Older, higher-fidelity production reference, not a solo low-poly schedule or profit benchmark.

Invader Studios / Leonardo Interactive and 4Divinity; prequel to an existing game. Exact production headcount/hours unknown.
Steam credits: **Invader Studios** (developer); **Leonardo Interactive; 4Divinity** (publisher).

Sources: [store](https://store.steampowered.com/app/1530470/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=1530470&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/1530470?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Echoes of the Living

**Adjacent camera; campaign EA.** Fixed-camera 3D survival horror; two-campaign plan. EA description advertises one 12+ hour campaign.

Initial offering already larger than our whole target. It cannot validate selling a short unfinished slice.

MoonGlint describes a couple working full-time. Exact additional staffing, costs and audience unknown.
Steam credits: **MoonGlint Studio** (developer); **MoonGlint Studio** (publisher).

Sources: [store](https://store.steampowered.com/app/2173460/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2173460&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2173460?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Phantom House

**Close promise; low traction.** Third-person 3D house horror with gun combat and puzzles. EA description: first mission, two floors and exterior.

Weak-traction and incomplete-content case, not evidence that all small horror games fail. Tiny review denominator.

Hard Shark Games, self-published; headcount, prior releases and launch audience unverified.
Steam credits: **Hard Shark Games** (developer); **Hard Shark Games** (publisher).

Sources: [store](https://store.steampowered.com/app/3463020/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=3463020&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/3463020?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### AFFRAID

**Close camera; different positioning.** Third-person zombie corridors, pistol/rifle, dodge and body customization; sexualized protagonist positioning.

Low reception/traction example; execution and positioning confound comparisons to our concept.

Oedipe Games; duplicate credit spellings on Steam. Headcount and audience unknown.
Steam credits: **Oedipe Games** (developer); **Oedipes Games; Oedipe Games** (publisher).

Sources: [store](https://store.steampowered.com/app/3452040/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=3452040&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/3452040?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Ground Zero

**Recent adjacent retro reference.** Retro fixed-camera horror with pre-rendered backgrounds, firearms/melee, bosses, upgrades and unlockables.

Content-rich retro offer in 2026; camera, combat animation and multiple locations differ from our facility.

Malformation Games / Kwalee; exact headcount, labor and launch audience unknown.
Steam credits: **Malformation Games** (developer); **Kwalee** (publisher).

Sources: [store](https://store.steampowered.com/app/2340130/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2340130&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2340130?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### RIG Riot

**Direct.** Third-person mech raids, permanent component-based parts, run weapons/mods and multiple leg types. Simplified mechanical 3D in inspected store image.

Closest combined piloting/customization/run reference. Part combinations are not unique mesh counts.

Sage Boatman, self-published; solo project, demo January 2026 and iterative playtesting. No verified sales/hours disclosure.
Steam credits: **Sage Boatman** (developer); **Sage Boatman** (publisher).

Sources: [store](https://store.steampowered.com/app/3180340/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=3180340&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/3180340?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Granvir

**Direct; co-op confound.** Third-person modular mech roguelite, mission/downtime management, loot and up to ten-player co-op. Simplified 3D in inspected image.

Strong production-fit reference; multiplayer is outside our baseline and ongoing updates change the comparison.

Airborne Games / GIGATANK 3000. Interview: prior Airmen, day job, Unity familiarity, mainly solo plus some commissioned audio/icons.
Steam credits: **Airborne Games** (developer); **GIGATANK 3000** (publisher).

Sources: [store](https://store.steampowered.com/app/2743460/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2743460&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2743460?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### MechNest

**Direct loop; shallower assembly.** Third-person 3D mech roguelike shooting, randomized dungeons, run-reset upgrades and boss unlocks; no lock-on or multiplayer.

Low-traction counterexample. Appearance/skill unlocks differ from our modular garage; old EA comments do not test today's build.

Store describes one developer plus one promotion person and calls it the creator's first work.
Steam credits: **PoisonGames** (developer); **PoisonGames** (publisher).

Sources: [store](https://store.steampowered.com/app/1379120/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=1379120&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/1379120?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### M.A.S.S. Builder

**Adjacent customization.** Third-person action RPG; elaborate cosmetic construction separated from stat tuning, campaign combat and weapon appearance assembly.

Not a roguelite; six years of EA and its cosmetic/gameplay split make it a poor short-schedule baseline.

Vermillion Digital / Sekai Project; team and Kickstarter obligations discussed in official AMA. Total labor unknown.
Steam credits: **Vermillion Digital** (developer); **Sekai Project** (publisher).

Sources: [store](https://store.steampowered.com/app/956680/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=956680&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/956680?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Gearbits

**Adjacent campaign; older.** Third-person booster-flight action. Advertises 20 missions, 10 machines, over 30 weapons and wave survival; heat constrains boosting.

Useful action/value and heat-mechanic reference. Fixed machine choices differ from modular body assembly and runs.

Quackpond Games, self-published; total staffing, costs and audience unverified.
Steam credits: **Quackpond Games** (developer); **Quackpond Games** (publisher).

Sources: [store](https://store.steampowered.com/app/2506580/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2506580&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2506580?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Metal Bringer

**Adjacent top-down/isometric.** Roguelike android/mech customization, swappable parts and enemy salvage; retro pixel-rendering presentation.

Useful builds/progression reference; camera, character switching and technical art pipeline differ.

ALPHAWING / PLAYISM; store connects its technology and style to prior Samurai Bringer.
Steam credits: **ALPHAWING Inc.** (developer); **PLAYISM** (publisher).

Sources: [store](https://store.steampowered.com/app/2334170/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2334170&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2334170?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Mech Havoc

**Adjacent top-down; EA.** Vehicle/mech combat, destructible environments and tactical abilities. EA Q&A lists 24 missions, 40 weapons and 15 vehicles.

Different camera/building system; substantial initial content, not a minimum checklist for our game.

Mid Development / Pretty Soon; exact headcount and labor unknown.
Steam credits: **Mid Development** (developer); **Pretty Soon** (publisher).

Sources: [store](https://store.steampowered.com/app/3237920/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=3237920&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/3237920?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Nodebuster

**Close loop; older anchor.** Geometric screen-based node harvesting, resources and upgrade tree; short active incremental.

Strong low-asset loop reference; a reskin cannot be assumed to earn similar revenue.

Goblobin, self-published; production hours and prior launch audience unverified.
Steam credits: **Goblobin** (developer); **Goblobin** (publisher).

Sources: [store](https://store.steampowered.com/app/3107330/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=3107330&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/3107330?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Sir, We Have an Orc Problem

**Adjacent defense; owner reference.** Short tower defense with incremental meta-upgrades, large enemy crowds and active abilities.

Closer to Last Battery than Scrapline. Limited silhouettes conceal simulation, feedback and balance work.

Mumpitz Games; two experienced developers and strong prelaunch traction per developer report.
Steam credits: **Mumpitz Games** (developer); **Mumpitz Games** (publisher).

Sources: [store](https://store.steampowered.com/app/4594150/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=4594150&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/4594150?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Digseum

**Close finite incremental.** Relic excavation to museum upgrades; advertises 12+ sites, 50+ relics and about 2.5 hours.

Finite progression and themed rewards are relevant; more authored content than a purely geometric clicker.

Rat Monthly, self-published; exact team, hours and launch audience unverified.
Steam credits: **Rat Monthly** (developer); **Rat Monthly** (publisher).

Sources: [store](https://store.steampowered.com/app/3361470/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=3361470&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/3361470?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Keep on Mining!

**Close mining/automation.** Cursor-directed mining, bars, permanent upgrades, pickaxes, talent cards and an automated mine.

Close manual-to-automation promise; competes for a similar short-session audience.

EagleEye Games, self-published; team size, hours and launch audience not established.
Steam credits: **EagleEye Games** (developer); **EagleEye Games** (publisher).

Sources: [store](https://store.steampowered.com/app/3769130/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=3769130&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/3769130?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### DigDigDrill

**Adjacent deeper mining/builds.** Mining to floor 999, crafting, item effects and additional challenges; no enemies or time limit.

Richer build/grind loop than finite salvage; avoid importing all its systems.

Toorai, self-published; development staffing and hours unknown.
Steam credits: **Toorai** (developer); **Toorai** (publisher).

Sources: [store](https://store.steampowered.com/app/2916770/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2916770&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2916770?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Lyca

**Close short active incremental.** Wolf restores a wasteland by gathering resources and upgrading; advertised 3–4-hour campaign and idle/endless unlocks.

Finite duration and feedback are close; outside art/music and prior skills differ from creating every asset oneself.

Syphono4 / Pretty Soon; creator reports roughly four months, prior prototypes and outside capsule art/music.
Steam credits: **Syphono4** (developer); **Syphono4; Pretty Soon** (publisher).

Sources: [store](https://store.steampowered.com/app/3421300/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=3421300&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/3421300?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Go Up

**Adjacent idle; weak disclosure.** Hold a button to ascend, collect resources, buy upgrades and unlock minigames; active/idle structure.

Waiting-heavy loop differs from active salvage. EA-to-1.0 history and weak revenue are relevant counterexamples.

Noble Whale Studios; developer report describes two developers plus art/music contributors and little audience.
Steam credits: **Noble Whale Studios** (developer); **Noble Whale Studios** (publisher).

Sources: [store](https://store.steampowered.com/app/2934520/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=2934520&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/2934520?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Planet Harvester: Incremental Odyssey

**Close harvesting/upgrades.** Drive a saw-equipped harvester across planets, collect resources, add tools/drones and upgrade the vehicle.

Close harvesting-to-automation loop; more 3D and environment work than schematic Scrapline.

Galysh Company; two developers per report, festival/creator/bundle marketing.
Steam credits: **Galysh Company** (developer); **Galysh Company** (publisher).

Sources: [store](https://store.steampowered.com/app/4448490/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=4448490&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/4448490?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Idle Ways

**Adjacent management; low traction.** Minimal 2D transport-network construction and incremental upgrades.

Different management fantasy; restrained visuals and low price do not ensure visibility or reception.

MPR Games, self-published; team, hours and launch audience unknown.
Steam credits: **MPR Games** (developer); **MPR Games** (publisher).

Sources: [store](https://store.steampowered.com/app/4219060/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=4219060&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/4219060?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### DEBRISVERSE

**Close theme; narrative hybrid.** Space-debris destruction and upgrades with interface puzzles, corporate mystery and seven endings.

Debris plus numbers already exists. Narrative systems add work; good rating and low volume are different signals.

Studio RELIER, self-published; staffing, cost and audience unknown.
Steam credits: **Studio RELIER** (developer); **Studio RELIER** (publisher).

Sources: [store](https://store.steampowered.com/app/4433730/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=4433730&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/4433730?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

### Blob of Ink

**Close small active incremental.** Ink blob consumes letters, gains powers and upgrades, then evolves; stylized 2D presentation.

Recent low-volume example despite positive reviews; tiny denominator cannot establish consensus or profit.

DGDev, self-published; team size, hours and launch audience unknown.
Steam credits: **DGDev** (developer); **DGDev** (publisher).

Sources: [store](https://store.steampowered.com/app/4900980/), [USD metadata](https://store.steampowered.com/api/appdetails?appids=4900980&cc=us&l=english), [review summary](https://store.steampowered.com/appreviews/4900980?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1).

Creator-history sources: [Headware press kit](https://www.headwaregames.com/presskit), [SFB Games](https://www.sfbgames.com/), [Granvir interview](https://www.gamedevjourney.co.uk/home/developer-diaries/unity-diaries/granvir), [RIG Riot devlog](https://sageboatman.itch.io/rig-riot/devlog), [M.A.S.S. Builder AMA](https://steamcommunity.com/games/956680/announcements/detail/541119096409817866), [Hollowbody camera update](https://steamcommunity.com/games/2123640/announcements/detail/603016424736162982), and the [financial disclosures](market-findings.md). These do not establish complete labor budgets or profit.

## Unreleased watchlist — not sales evidence

| Title | Timing on observation date | Relevance / distinction |
| --- | --- | --- |
| [Holstin](https://store.steampowered.com/app/2235430/) | To be announced | Psychological town horror with a distinct presentation; no sales outcome. |
| [OMEGA PHENEX COMMENCED PROJECT SIX](https://store.steampowered.com/app/3392040/) | 2027 | High-speed piloted mech customization and advertised 30+ missions; campaign, not roguelite. |
| [Mecha Mayhem](https://store.steampowered.com/app/2547890/) | To be announced | Modular physics mech fighting, solo/co-op campaign and PvP; broader physics/network scope. |
| [Infinite Loop: Incremental](https://store.steampowered.com/app/4992770/) | Nov 26, 2026 | Text incremental, time-limited loops and automation; different presentation and interaction. |
| [Beencremental](https://store.steampowered.com/app/4545940/) | Q1 2027 | Active bee-swarm incremental; evidence of new supply, not sales. |

Dates are developer plans and may change. Continuing releases and upcoming competition do not establish a rate of market growth: this study has no longitudinal genre-wide supply/demand series.

## Evidence limits

No comparable-game playthroughs were performed. Closest mechanic references lack enough financial disclosure to calculate profit per hour. Publisher support, prior catalogs, discounts, years of updates and free preludes change comparability. The financial stage must model these uncertainties rather than hide them inside a single genre average.
