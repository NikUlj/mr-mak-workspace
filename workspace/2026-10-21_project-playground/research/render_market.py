"""Render the dated facts and analyst notes to a new Markdown report."""
from pathlib import Path
import datetime as dt
import json

P = Path(__file__).resolve().parent
OUTPUT = P.parent / 'market-comparison.md'
if OUTPUT.exists():
    raise SystemExit('Report exists; preserve manual edits before explicitly regenerating.')
rows = {}
for file in ['steam-snapshot-2026-10-21.json', 'supplemental-snapshot-2026-10-21.json']:
    rows.update({str(r['appid']): r for r in json.loads((P/file).read_text(encoding='utf-8'))['games']})
notes = json.loads((P/'comparison-notes.json').read_text(encoding='utf-8'))
dates = {str(d['appid']): d for d in json.loads((P/'release-date-checks.json').read_text(encoding='utf-8'))}

intro = '''# Market comparison and source method

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
'''
parts = [intro]
for group, label in [('horror','Horror — 11'),('mech','Mech — 7'),('incremental','Incremental — 11')]:
    parts += [f'### {label}', '', '| Game | Listed release / status | Days since first known paid release | USD list → current | Reviews; positive |', '| --- | --- | --- | --- | --- |']
    for a, n in notes.items():
        if n[0] != group:
            continue
        r, d = rows[a], dates[a]
        release = r['release_date']['date']
        ea = d['early_access_date']
        start = dt.datetime.strptime(ea or release, '%b %d, %Y').date()
        age = (dt.date(2026,10,21)-start).days
        status = 'EA, incomplete' if d['current_ea_banner'] else ('Full; EA '+ea if ea else 'Full; EA date not listed')
        price = r['price_us']
        parts.append(f"| [{r['name']}]({r['store_url']}) | {release}; {status} | {age:,} | ${price['initial']/100:.2f} → ${price['final']/100:.2f} | {r['review_summary']['total_reviews']:,}; {r['positive_percent']:.1f}% |")
    parts += ['']
parts += ['**Tiny samples:** Phantom House (6), AFFRAID (13), MechNest (14), Go Up (4), Idle Ways (10) and Blob of Ink (11) have too few reviews for stable percentage comparisons. These examples prevent a hits-only study; they cannot establish a representative failure rate.', '', '## Per-game comparability and production context', '']
for a, n in notes.items():
    r = rows[a]
    dev = '; '.join(dict.fromkeys(r['developers']))
    pub = '; '.join(dict.fromkeys(r['publishers']))
    parts += [f"### {r['name']}", '', f'**{n[1]}.** {n[2]}', '', n[3], '', n[4], f'Steam credits: **{dev}** (developer); **{pub}** (publisher).', '', f"Sources: [store]({r['store_url']}), [USD metadata]({r['metadata_url']}), [review summary]({r['review_summary_url']}).", '']
parts += ['Creator-history sources: [Headware press kit](https://www.headwaregames.com/presskit), [SFB Games](https://www.sfbgames.com/), [Granvir interview](https://www.gamedevjourney.co.uk/home/developer-diaries/unity-diaries/granvir), [RIG Riot devlog](https://sageboatman.itch.io/rig-riot/devlog), [M.A.S.S. Builder AMA](https://steamcommunity.com/games/956680/announcements/detail/541119096409817866), [Hollowbody camera update](https://steamcommunity.com/games/2123640/announcements/detail/603016424736162982), and the [financial disclosures](market-findings.md). These do not establish complete labor budgets or profit.', '', '## Unreleased watchlist — not sales evidence', '', '| Title | Timing on observation date | Relevance / distinction |', '| --- | --- | --- |']
watch = {
    '2235430':'Psychological town horror with a distinct presentation; no sales outcome.',
    '3392040':'High-speed piloted mech customization and advertised 30+ missions; campaign, not roguelite.',
    '2547890':'Modular physics mech fighting, solo/co-op campaign and PvP; broader physics/network scope.',
    '4992770':'Text incremental, time-limited loops and automation; different presentation and interaction.',
    '4545940':'Active bee-swarm incremental; evidence of new supply, not sales.'}
for a, note in watch.items():
    r = rows[a]
    parts.append(f"| [{r['name']}]({r['store_url']}) | {r['release_date']['date']} | {note} |")
parts += ['', 'Dates are developer plans and may change. Continuing releases and upcoming competition do not establish a rate of market growth: this study has no longitudinal genre-wide supply/demand series.', '', '## Evidence limits', '', 'No comparable-game playthroughs were performed. Closest mechanic references lack enough financial disclosure to calculate profit per hour. Publisher support, prior catalogs, discounts, years of updates and free preludes change comparability. The financial stage must model these uncertainties rather than hide them inside a single genre average.', '']
OUTPUT.write_text('\n'.join(parts), encoding='utf-8')
print(f'Wrote {OUTPUT.name}: {len(notes)} paid comparables.')
