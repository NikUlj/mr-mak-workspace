import assert from 'node:assert/strict';
import {readFile,readdir,access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {defaults,outcome,effort,assetHours,finish,capacity,hoursAt,salesEvents,earnedAt,cashCost,licenseReserve,salesCase,WPM} from './scenario-engine.mjs';
const dir=path.dirname(fileURLToPath(import.meta.url)), card=path.dirname(dir),root=path.resolve(dir,'../../..');
const a=JSON.parse(await readFile(path.join(dir,'asset-inputs.json'),'utf8'));
const p=JSON.parse(await readFile(path.join(dir,'production-inputs.json'),'utf8'));
const a4=JSON.parse(await readFile(path.join(dir,'asset-calculations.json'),'utf8'));
const d=defaults(p), sum=x=>x.reduce((a,b)=>a+b,0), near=(x,y)=>assert.ok(Math.abs(x-y)<1e-6,`${x} != ${y}`);
const ids=new Set();let rows=0;
for(const [game,g] of Object.entries(p.games)){
 assert.equal(g.demo_asset_quantities.length,a.games[game].rows.length);
 if(game!=='incremental'){
  assert.equal(g.compact_asset_quantities.length,a.games[game].rows.length);
  assert.equal(g.compact_system_fractions.length,g.rows.length);
 }
 for(const row of g.rows){
  assert.equal(row.length,p.columns.length);assert.ok(!ids.has(row[0]));ids.add(row[0]);rows++;
  assert.ok(row[2].every(x=>Number.isFinite(x)&&x>=0));assert.ok(row[2][0]<=row[2][1]&&row[2][1]<=row[2][2]);
  assert.ok(row[3]>=0&&row[3]<=1);assert.ok(row[4]>=0&&row[4]<=1);
 }
 for(let c=0;c<3;c++)near(sum(a.games[game].rows.map(r=>assetHours(r,c))),a4[game].full_asset_content_hours_low_base_high[c]);
}
assert.equal(rows,55);near(sum(p.finance.first_paid_year_monthly_unit_weights),1);
let cases=0;
for(const r of p.routes){
 for(const weekly of [21,31])for(const c of [0,1,2]){
  const o={...d,weekly,effort:c},x=outcome(a,p,r,o);cases++;
  const base=sum(a.games[r.game].rows.map(row=>assetHours(row,c)))+sum(p.games[r.game].rows.map(row=>row[2][c]));
  const overhead=r.staged?a.staged_overheads[r.game].first_paid_extra_owner_hours[c]+a.staged_overheads[r.game].later_content_extra_owner_hours[c]+p.games[r.game].staged_engineering_pre_low_base_high[c]+p.games[r.game].staged_engineering_later_low_base_high[c]:0;
  near(x.first+x.later,base+overhead);
  near(x.firstWeek,x.first/weekly);
  near(x.completeWeek,x.firstWeek+(r.staged?(x.later+x.burst)/(weekly-x.support):0));
  near(x.lifetimeHours,x.first+x.later+(r.staged?x.burst+(x.completeWeek-x.firstWeek)*x.support:0)+x.burst+52*x.support);
  near(hoursAt(x,o,x.endWeek),x.lifetimeHours);near(hoursAt(x,o,x.firstWeek),x.first);
  near(x.year.newBuyers,d.units);
  assert.ok(x.demoHours<x.first);assert.ok(x.firstWeek<=x.completeWeek);
  assert.ok(x.events.every(e=>e.week>=x.firstWeek));
  near(x.year.surplus,x.year.earned-x.year.cost);
  near(x.year.bankBalance,x.year.received-x.year.cost);
  near(x.year.laborAdjusted,x.year.surplus-x.year.hours*o.hourly);
  // Every reported sales threshold actually covers the full commitment, while
  // one fewer buyer does not. Includes discontinuous fee/license adjustments.
  for(const [n,hourly] of [[x.cashBreakEven,0],[x.laborBreakEven,o.hourly]]){
   assert.notEqual(n,null);
   const margin=units=>{
    const ev=salesEvents(p,r,x,{...o,units});
    const revenue=earnedAt(p,ev,o,x.firstWeek+52).earned;
    const license=licenseReserve(p,ev,r.game==='incremental'?{...o,cascadeur:0}:o,x,x.endWeek).total;
    return revenue-cashCost(a,p,r,x,o,x.endWeek).total-license-x.lifetimeHours*hourly;
   };
   assert.ok(margin(n)>=-1e-6,`break-even insufficient ${r.id}`);
   if(n>0)assert.ok(margin(n-1)<0,`break-even not minimal ${r.id}`);
  }
 }
 const x=outcome(a,p,r,d),zero=outcome(a,p,r,{...d,units:0});
 near(zero.year.earned,0);near(zero.year.received,0);assert.equal(zero.firstPayoutWeek,null);assert.ok(zero.year.surplus<0);
 for(const options of [{priceScale:0},{refund:1},{developerShare:0}]){
  const z=outcome(a,p,r,{...d,...options});assert.equal(z.cashBreakEven,null);assert.equal(z.laborBreakEven,null);
 }
 const half=outcome(a,p,r,{...d,artScale:0.5});assert.ok(half.first<x.first);
 // Faster owner production must not reduce the number of generation credits.
 near(half.commitmentCost.creditDemand,x.commitmentCost.creditDemand);
 const lowerSales=outcome(a,p,r,{...d,units:1500});assert.ok(lowerSales.year.earned<x.year.earned);
 const lowerPrice=outcome(a,p,r,{...d,priceScale:0.75});assert.ok(lowerPrice.year.earned<x.year.earned);
 const highRefund=outcome(a,p,r,{...d,refund:0.2});assert.ok(highRefund.year.earned<x.year.earned);
 const moreCash=outcome(a,p,r,{...d,monthly:100});assert.ok(moreCash.year.surplus<x.year.surplus);
 const taxed=outcome(a,p,r,{...d,withholding:0.15});near(taxed.year.earned,x.year.earned);assert.ok(taxed.year.received<x.year.received);
 const pre=earnedAt(p,x.events,d,x.firstWeek-0.001);near(pre.earned,0);
 if(r.pricing==='included')assert.ok(!x.events.some(e=>e.kind.startsWith('returning')));
 if(r.pricing==='episodes'){
  near(x.year.repeatChapterPurchases,0); // Middle 21-hour schedule finishes after paid year.
  const later=x.events.find(e=>e.kind.startsWith('returning'));
  near(later.units,d.units*(1-d.refund)*d.conversion);
 }
}
// An independent capacity example: 26 weeks at 21 = 546 h, then 454/31 weeks.
near(finish(1000,0,{...d,switchMonth:6}),26+454/31);
const mech=p.routes.find(r=>r.id==='mech_ea');
assert.throws(()=>outcome(a,p,mech,{...d,weekly:7,effort:2,supportScale:2}),/capacity/i);
const mf=p.routes.find(r=>r.id==='mech_full');
const m=outcome(a,p,mf,d);
near(m.year.receipts,3000*0.92*19.99*0.8*0.85*0.9*0.7/1.1205);
near(m.year.feeRecoup,100/1.1205);
assert.ok(outcome(a,p,mf,{...d,...salesCase(p,2)}).commitmentCost.licenseReserve.total>0);

// Registry, local links and Markdown tables. Remote URLs are source references,
// not network requests or proof that external pages will remain unchanged.
const registry=JSON.parse(await readFile(path.join(root,'workspace/workspace.json'),'utf8'));
const entity=registry.entities.find(e=>e.id==='project-playground');
assert.equal(new Set(registry.entities.map(e=>e.id)).size,registry.entities.length);
assert.equal(new Set(entity.steps.map(s=>s.path)).size,entity.steps.length);
for(const step of entity.steps)await access(path.join(card,step.path));
let links=0,tables=0;
const markdown=(await readdir(card)).filter(x=>x.endsWith('.md'));
for(const file of markdown){
 const source=await readFile(path.join(card,file),'utf8');
 for(const m of source.matchAll(/\]\(([^)]+)\)/g)){
  const target=m[1].split('#')[0];if(!target||/^(https?:|mailto:)/.test(target))continue;
  await access(path.resolve(card,decodeURIComponent(target)));links++;
 }
 let count=0;
 for(const line of source.split('\n')){
  if(line.trim().startsWith('|')){
   const cells=line.trim().split('|').length-2;
   if(!count){count=cells;tables++;}else assert.equal(cells,count,`${file}: table width`);
  }else count=0;
 }
}
const html=await readFile(path.join(card,'scenario-model.html'),'utf8');
assert.ok(!html.includes('/*__ENGINE__*/'));assert.ok(!html.includes('/*__DATA__*/'));
assert.ok(html.includes('data-mak-report="document"'));
console.log(JSON.stringify({workRows:rows,assetRows:69,routeEffortCapacityCases:cases,registeredTabs:entity.steps.length,markdownFiles:markdown.length,localLinks:links,tables,arithmetic:'passed',limits:'Work rates, demand, native Unity behavior and actual tax/account eligibility remain unvalidated.'},null,2));
