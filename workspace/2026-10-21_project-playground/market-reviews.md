# Player review findings

**Sample taken 21 October 2026: 99 reviews across 12 focal games.** [Return to market findings](market-findings.md).

## Sampling method and limits

For each game, request the five newest-created positive and five newest-created negative reviews through Steam’s public review endpoint: `filter=recent`, `language=english`, `purchase_type=steam`, `review_type=positive/negative`, `filter_offtopic_activity=1`, `num_per_page=5`. Keep fewer if unavailable; do not replace jokes, generic praise or off-topic comments with more convenient evidence. English is the stored language field, not a guarantee that every sentence is English. No 30-day cutoff was applied.

Focal games cover close matches, different reception levels and release routes. This is a deliberately balanced diagnostic sample, not a random player sample and not an estimate of how common any opinion is. Five negatives from an overwhelmingly positive game do not imply half its buyers are unhappy. Comments can be edited after posting; links below identify the sampled reviews, while their created/updated timestamps are retained in the [fixed source index](research/review-sample-2026-10-21.json). Full review text and reviewer profile records were not copied into the repository.

Themes below are manual paraphrases of substantive comments, including reservations within positive recommendations. Conflicting opinions are retained. Reported bugs and completion times were not independently reproduced. No causal claim is made that a cited complaint caused poor sales.

## Sample coverage

| Game | Positive / negative | Created-date span |
| --- | --- | --- |
| Hollowbody | 5 / 5 | 2026-09-14 – 2026-10-20 |
| Heartworm | 5 / 5 | 2026-05-02 – 2026-10-14 |
| Post Trauma | 5 / 5 | 2026-07-09 – 2026-10-20 |
| Phantom House | 0 / 2 | 2025-09-01 – 2025-09-03 |
| RIG Riot | 5 / 5 | 2026-09-26 – 2026-10-20 |
| Granvir | 5 / 5 | 2026-09-09 – 2026-10-20 |
| MechNest | 2 / 1 | 2021-10-24 – 2023-06-30 |
| M.A.S.S. Builder | 5 / 5 | 2026-08-21 – 2026-10-11 |
| Nodebuster | 5 / 5 | 2026-09-27 – 2026-10-19 |
| Digseum | 5 / 5 | 2026-09-11 – 2026-10-20 |
| Sir, We Have an Orc Problem | 5 / 5 | 2026-10-19 – 2026-10-21 |
| Go Up | 3 / 1 | 2025-07-15 – 2026-09-04 |

No pooled rating is calculated from this sample. The all-language reception metrics are separately reported in the [market tables](market-comparison.md).

## Observations and project implications

### Hollowbody

**What appealed:** Atmosphere, tension, setting and ambience are praised.

**Friction or objections:** Substantive complaints cover camera problems, weak weapon feel, easy puzzles, empty/redundant spaces and technical issues. Some entries contain off-topic hostility or little actionable detail.

**Our inference:** Atmosphere can attract players while combat and camera still undermine the experience. Do not treat a positive art response as acceptance of the whole game.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561198102309077/recommended/2123640/), [2](https://steamcommunity.com/profiles/76561197993591684/recommended/2123640/), [3](https://steamcommunity.com/profiles/76561199661322503/recommended/2123640/), [4](https://steamcommunity.com/profiles/76561198031254500/recommended/2123640/), [5](https://steamcommunity.com/profiles/76561198329086316/recommended/2123640/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198131167441/recommended/2123640/), [2](https://steamcommunity.com/profiles/76561198029751366/recommended/2123640/), [3](https://steamcommunity.com/profiles/76561198088288410/recommended/2123640/), [4](https://steamcommunity.com/profiles/76561198385895338/recommended/2123640/), [5](https://steamcommunity.com/profiles/76561198068885017/recommended/2123640/).

### Heartworm

**What appealed:** Art, music, nostalgia and atmosphere appeal; one detailed positive review also criticizes transitions, variety and presentation consistency.

**Friction or objections:** Complaints include a frustrating boss/stun combination, controls, thin combat development and a later area becoming tedious.

**Our inference:** Test moving, aiming and escaping attacks as one connected sequence. An advertised 4–6-hour game still needs meaningful pacing across its full duration.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561198070339633/recommended/1257030/), [2](https://steamcommunity.com/profiles/76561198085706951/recommended/1257030/), [3](https://steamcommunity.com/profiles/76561198005775479/recommended/1257030/), [4](https://steamcommunity.com/profiles/76561198250986802/recommended/1257030/), [5](https://steamcommunity.com/profiles/76561198451828747/recommended/1257030/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198015144145/recommended/1257030/), [2](https://steamcommunity.com/profiles/76561198999637953/recommended/1257030/), [3](https://steamcommunity.com/profiles/76561198172087829/recommended/1257030/), [4](https://steamcommunity.com/profiles/76561198353815031/recommended/1257030/), [5](https://steamcommunity.com/profiles/76561198089374518/recommended/1257030/).

### Post Trauma

**What appealed:** Some players enjoy puzzles, atmosphere, enemy art and a compact story; positive recommendations can still include reservations.

**Friction or objections:** Other readers find the puzzles repetitive, combat limited/buggy and the story or ending unclear.

**Our inference:** Clearly communicate whether puzzles or combat lead the experience. Our combat-led concept cannot borrow a puzzle-heavy comparison without accounting for that difference.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561199007067622/recommended/1750030/), [2](https://steamcommunity.com/profiles/76561197966599889/recommended/1750030/), [3](https://steamcommunity.com/profiles/76561197988255505/recommended/1750030/), [4](https://steamcommunity.com/profiles/76561199865853164/recommended/1750030/), [5](https://steamcommunity.com/profiles/76561198054585753/recommended/1750030/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198343953007/recommended/1750030/), [2](https://steamcommunity.com/profiles/76561199698549561/recommended/1750030/), [3](https://steamcommunity.com/profiles/76561199478370395/recommended/1750030/), [4](https://steamcommunity.com/profiles/76561199569780137/recommended/1750030/), [5](https://steamcommunity.com/profiles/76561198004037146/recommended/1750030/).

### Phantom House

**What appealed:** No qualifying positive English-labeled Steam-purchase review was returned.

**Friction or objections:** Two old EA comments question purchase value; one describes missing collision and unclear progression.

**Our inference:** These are launch-era opinions, not verification of the current patch. Current-value and onboarding tests matter before charging for EA.

Sampled positive sources: none available.
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198068455202/recommended/3463020/), [2](https://steamcommunity.com/profiles/76561198088388166/recommended/3463020/).

### RIG Riot

**What appealed:** Boost combat, movement, customization and the Armored Core/roguelite combination appeal; some positive reviews still ask for more content or polish.

**Friction or objections:** Complaints cover boss health/balance, progression tedium, lock-on/camera, simplistic pressure from enemies, unclear upgrades and crashes.

**Our inference:** Movement and customization are attractions, but readable targeting and encounter/build variety need their own acceptance tests. More health is not a substitute for richer encounters.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561199227221751/recommended/3180340/), [2](https://steamcommunity.com/profiles/76561198042728743/recommended/3180340/), [3](https://steamcommunity.com/profiles/76561198088481381/recommended/3180340/), [4](https://steamcommunity.com/profiles/76561198289777256/recommended/3180340/), [5](https://steamcommunity.com/profiles/76561198364231988/recommended/3180340/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198818411186/recommended/3180340/), [2](https://steamcommunity.com/profiles/76561198155425704/recommended/3180340/), [3](https://steamcommunity.com/profiles/76561198056571252/recommended/3180340/), [4](https://steamcommunity.com/profiles/76561198056333091/recommended/3180340/), [5](https://steamcommunity.com/profiles/76561197970501796/recommended/3180340/).

### Granvir

**What appealed:** Customization, equipment fantasy and continuing updates are praised.

**Friction or objections:** Complaints include repetitive objectives, weapon/impact feel, UI explanation, loadout friction and multiplayer failures. One negative entry gives no useful detail.

**Our inference:** Preserve mechanical build differences and varied mission decisions. Co-op complaints do not imply that our single-player baseline needs networking.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561198091432546/recommended/2743460/), [2](https://steamcommunity.com/profiles/76561198070372371/recommended/2743460/), [3](https://steamcommunity.com/profiles/76561198140097912/recommended/2743460/), [4](https://steamcommunity.com/profiles/76561198000055495/recommended/2743460/), [5](https://steamcommunity.com/profiles/76561199269220331/recommended/2743460/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561199830504617/recommended/2743460/), [2](https://steamcommunity.com/profiles/76561198009126016/recommended/2743460/), [3](https://steamcommunity.com/profiles/76561198092620322/recommended/2743460/), [4](https://steamcommunity.com/profiles/76561198006485908/recommended/2743460/), [5](https://steamcommunity.com/profiles/76561199008428348/recommended/2743460/).

### MechNest

**What appealed:** Two old EA comments enjoy mech destruction; one also says unlocks and boss kills happened too easily.

**Friction or objections:** The one qualifying negative review compares fluidity and value unfavorably with Risk of Rain 2.

**Our inference:** All three sampled comments predate full release. Useful historical expectations, weak evidence about present balance or quality.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561198027223596/recommended/1379120/), [2](https://steamcommunity.com/profiles/76561198126804777/recommended/1379120/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198111070551/recommended/1379120/).

### M.A.S.S. Builder

**What appealed:** Creative mech design is a recurring attraction. Positive recommendations range from liking combat to accepting it mainly as a way to use a custom model.

**Friction or objections:** Criticism covers cosmetic versus functional variety, grind before using preferred parts, targeting/camera, repetitive combat and difficulty spikes. Some entries are not actionable for our scope.

**Our inference:** Communicate whether customization changes play, appearance, or both. Do not hide the main building fantasy behind excessive unlocking.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561198095034504/recommended/956680/), [2](https://steamcommunity.com/profiles/76561198062378141/recommended/956680/), [3](https://steamcommunity.com/profiles/76561198957360196/recommended/956680/), [4](https://steamcommunity.com/profiles/76561198111446856/recommended/956680/), [5](https://steamcommunity.com/profiles/76561199518585112/recommended/956680/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198005824810/recommended/956680/), [2](https://steamcommunity.com/profiles/76561198074375760/recommended/956680/), [3](https://steamcommunity.com/profiles/76561197977781021/recommended/956680/), [4](https://steamcommunity.com/profiles/76561198336761459/recommended/956680/), [5](https://steamcommunity.com/profiles/76561199446688040/recommended/956680/).

### Nodebuster

**What appealed:** Short satisfying progression, sound/music, simple interaction and value appeal.

**Friction or objections:** Others dislike the basic repetition, limited change or having to remain active. Some returned entries are jokes/non-English despite the language filter.

**Our inference:** Aim at an active incremental audience deliberately. Feedback and a satisfying transformation matter more than an upgrade tree by itself.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561198017526014/recommended/3107330/), [2](https://steamcommunity.com/profiles/76561199120229162/recommended/3107330/), [3](https://steamcommunity.com/profiles/76561197971235915/recommended/3107330/), [4](https://steamcommunity.com/profiles/76561198151297488/recommended/3107330/), [5](https://steamcommunity.com/profiles/76561199517195762/recommended/3107330/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561197969908751/recommended/3107330/), [2](https://steamcommunity.com/profiles/76561197975126621/recommended/3107330/), [3](https://steamcommunity.com/profiles/76561198014115758/recommended/3107330/), [4](https://steamcommunity.com/profiles/76561198018854173/recommended/3107330/), [5](https://steamcommunity.com/profiles/76561199591843215/recommended/3107330/).

### Digseum

**What appealed:** Short, enjoyable progression and music are praised; a positive review also questions late prestige pacing.

**Friction or objections:** Complaints cover weak payoff/ending, repeated prestiges, too many transition/results screens, clicking burden and menu usability.

**Our inference:** Avoid letting UI animation interrupt the repeated action. Test late-game progression and the ending, not just the first few upgrades.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561199438781077/recommended/3361470/), [2](https://steamcommunity.com/profiles/76561198175795983/recommended/3361470/), [3](https://steamcommunity.com/profiles/76561198078572221/recommended/3361470/), [4](https://steamcommunity.com/profiles/76561198392929778/recommended/3361470/), [5](https://steamcommunity.com/profiles/76561198033923544/recommended/3361470/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198040978288/recommended/3361470/), [2](https://steamcommunity.com/profiles/76561198126727520/recommended/3361470/), [3](https://steamcommunity.com/profiles/76561198043550082/recommended/3361470/), [4](https://steamcommunity.com/profiles/76561197977957631/recommended/3361470/), [5](https://steamcommunity.com/profiles/76561198011129598/recommended/3361470/).

### Sir, We Have an Orc Problem

**What appealed:** Players describe an enjoyable affordable loop and noticeable upgrades; some want additional content.

**Friction or objections:** Complaints focus on grind, short/finite content relative to expectations, limited replay value and demo-to-full value. Allegations about abandonment or AI are reviewer claims, not verified facts.

**Our inference:** Set a clear finite-content promise and make the demo/full distinction understandable. Do not add an endless mode solely because some reviewers request it.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561199182028269/recommended/4594150/), [2](https://steamcommunity.com/profiles/76561197993580630/recommended/4594150/), [3](https://steamcommunity.com/profiles/76561198066202722/recommended/4594150/), [4](https://steamcommunity.com/profiles/76561198213007823/recommended/4594150/), [5](https://steamcommunity.com/profiles/76561198040370723/recommended/4594150/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198039980130/recommended/4594150/), [2](https://steamcommunity.com/profiles/76561199059610847/recommended/4594150/), [3](https://steamcommunity.com/profiles/76561198756026387/recommended/4594150/), [4](https://steamcommunity.com/profiles/76561198065578754/recommended/4594150/), [5](https://steamcommunity.com/profiles/76561197994099265/recommended/4594150/).

### Go Up

**What appealed:** Old EA comments enjoy the skill tree and ascent choices; one asks for cloud saves.

**Friction or objections:** The one qualifying negative comment objects to waiting and lack of depth.

**Our inference:** Three positive comments are from EA, while the negative is post-1.0. This tiny, mixed-stage sample cannot explain commercial failure causally.

Sampled positive sources: [1](https://steamcommunity.com/profiles/76561198082460280/recommended/2934520/), [2](https://steamcommunity.com/profiles/76561198022130020/recommended/2934520/), [3](https://steamcommunity.com/profiles/76561198070023872/recommended/2934520/).
Sampled negative sources: [1](https://steamcommunity.com/profiles/76561198064953565/recommended/2934520/).

## What to carry into production costing

- Horror: connected camera/movement/combat tests, purposeful rooms, readable encounters, sound and story payoff. Low-poly art does not remove these tasks.
- Mech: targeting, weapon feedback, early access to meaningful build choices, distinct enemy roles and encounter variation. Include garage usability and compatibility tests.
- Incremental: action feedback, progression pacing, skippable/reduced interface interruption, automation that changes play and a satisfying finite ending.

These priorities refine the asset and quality inventory; they do not authorize extra features or establish total development hours.
