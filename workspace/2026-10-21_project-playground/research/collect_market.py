"""Read public Steam metadata; no login, paid service, or project mutation.

Run explicitly to refresh. Output goes to a NEW named file: never overwrite the
dated research snapshot accidentally. Full source prose stays in OS temp only.
"""
import argparse
import concurrent.futures
import datetime as dt
import json
from pathlib import Path
import tempfile
import urllib.parse
import urllib.request

APPS = {
    'horror': [2123640,1996010,1257030,1796580,1750030,2855770,1530470,2173460,3463020,3452040],
    'mech': [3180340,2743460,1379120,956680,3392040,2506580,2334170,3237920],
    'incremental': [3107330,4594150,3361470,3769130,2916770,3421300,2934520,4953130,4448490,4219060,4433730,4900980],
}

def fetch(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'ProjectPlaygroundResearch/1.0'})
    with urllib.request.urlopen(req, timeout=30) as response:
        return json.load(response)

def collect(pair):
    group, appid = pair
    detail_url = f'https://store.steampowered.com/api/appdetails?appids={appid}&cc=us&l=english'
    review_url = f'https://store.steampowered.com/appreviews/{appid}?json=1&language=all&purchase_type=steam&filter_offtopic_activity=1&num_per_page=1'
    response = fetch(detail_url)[str(appid)]
    if not response.get('success'):
        return {'group':group,'appid':appid,'error':'appdetails unsuccessful'}
    data = response['data']
    summary = fetch(review_url).get('query_summary', {})
    cache = Path(tempfile.gettempdir()) / 'project-playground-market-20261021'
    cache.mkdir(exist_ok=True)
    (cache / f'{appid}-source.json').write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
    total = summary.get('total_reviews',0)
    return {
        'group': group, 'appid': appid, 'name':data['name'],
        'observed_utc':dt.datetime.now(dt.timezone.utc).isoformat(),
        'store_url':f'https://store.steampowered.com/app/{appid}/',
        'metadata_url':detail_url, 'review_summary_url':review_url,
        'type':data.get('type'), 'free':data.get('is_free'),
        'release_date':data.get('release_date'), 'developers':data.get('developers'),
        'publishers':data.get('publishers'), 'genres':data.get('genres'),
        'categories':[v['description'] for v in data.get('categories',[])],
        'price_us':data.get('price_overview'),
        'review_summary':summary,
        'positive_percent':round(100*summary.get('total_positive',0)/total,1) if total else None,
    }

if __name__ == '__main__':
    parser=argparse.ArgumentParser()
    parser.add_argument('--output',required=True)
    args=parser.parse_args()
    out=Path(args.output)
    if out.exists():
        raise SystemExit('Output already exists; choose a new filename.')
    pairs=[(g,a) for g,ids in APPS.items() for a in ids]
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as pool:
        rows=list(pool.map(collect,pairs))
    out.write_text(json.dumps({'method':'US appdetails; all-language Steam-purchase review summaries; off-topic filter enabled. No sales estimates.', 'games':rows},ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    for r in rows:
        p=r.get('price_us') or {}
        print(json.dumps({k:r.get(k) for k in ['group','appid','name','release_date','positive_percent','error']}),p.get('initial'),p.get('final'),(r.get('review_summary') or {}).get('total_reviews'))
