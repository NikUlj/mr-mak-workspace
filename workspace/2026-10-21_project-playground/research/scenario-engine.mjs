// Pure arithmetic shared by the editable report and the reproducible Node report.
// No network, filesystem, paid tools, account state, or user profile access.
export const WPM = 52 / 12;
const sum = a => a.reduce((x,y)=>x+y,0);
const clamp = (v,a,b)=>Math.min(b,Math.max(a,v));
export const round = (v,n=1)=>Number(v.toFixed(n));
export function assetHours(row, c=1) { return row[3][c] * sum([row[4][c],row[5][c],row[6][c]]); }
export function quantityHours(row, q, c=1) { return q * sum([row[4][c],row[5][c],row[6][c]]); }

export function defaults(p) {
  return {effort:1, sales:1, weekly:21, switchMonth:0, laterWeekly:31, availability:1,
    artScale:1, systemScale:1, delayMonths:0, units:p.finance.units_by_case[1],
    priceScale:1, refund:p.finance.refund_chargeback_rates[1],
    region:p.finance.region_factors[1], discount:p.finance.discount_factors[1],
    taxExclusion:p.finance.tax_exclusion_factors[1], developerShare:p.finance.developer_share,
    fx:p.finance.usd_per_eur, monthly:p.finance.other_monthly_eur,
    cascadeur:p.finance.cascadeur_monthly_eur, tripoFraction:p.finance.tripo_active_month_fraction,
    fixedOther:p.finance.fixed_other_eur, paidMarketing:p.finance.paid_marketing_eur,
    supportScale:1, hourly:p.finance.hourly_value_eur,
    conversion:p.finance.episode_conversion, bundleShare:p.finance.new_entrant_bundle_share,
    bundleDiscount:p.finance.bundle_discount, withholding:p.finance.withholding_effective_fraction,
    secondYear:p.finance.second_year_new_units_fraction};
}
export function salesCase(p, i) {
  return {sales:i,units:p.finance.units_by_case[i],refund:p.finance.refund_chargeback_rates[i],
    region:p.finance.region_factors[i],discount:p.finance.discount_factors[i],taxExclusion:p.finance.tax_exclusion_factors[i]};
}
export function capacity(o,week) {
  return (o.switchMonth>0 && week>=o.switchMonth*WPM ? o.laterWeekly:o.weekly)*o.availability;
}
export function finish(work,start,o,weeklySupport=0) {
  if(work<=0)return start;
  const sw=o.switchMonth>0?o.switchMonth*WPM:Infinity;
  let t=start, remaining=work;
  if(t<sw){
    const rate=capacity(o,t)-weeklySupport;
    if(rate<=0)throw new Error('Weekly support leaves no development capacity.');
    const possible=(sw-t)*rate;
    if(remaining<=possible)return t+remaining/rate;
    remaining-=possible;t=sw;
  }
  const rate=capacity(o,t)-weeklySupport;
  if(rate<=0)throw new Error('Weekly support leaves no development capacity.');
  return t+remaining/rate;
}
function suppliedCapacity(start,end,o){
  if(end<=start)return 0;
  const sw=o.switchMonth>0?o.switchMonth*WPM:Infinity;
  return Math.max(0,Math.min(end,sw)-start)*o.weekly*o.availability+
    Math.max(0,end-Math.max(start,sw))*o.laterWeekly*o.availability;
}
export function effort(a,p,route,o){
  const c=o.effort, g=p.games[route.game], ag=a.games[route.game];
  const assets=sum(ag.rows.map(r=>assetHours(r,c)))*o.artScale;
  const systems=sum(g.rows.map(r=>r[2][c]))*o.systemScale;
  const risk=sum(g.rows.filter(r=>/^[HMI]R/.test(r[0])).map(r=>r[2][c]))*o.systemScale;
  const stageAssets=sum(ag.rows.map(r=>assetHours(r,c)*r[7]/r[3][1]))*o.artScale;
  const stageSystems=sum(g.rows.map(r=>r[2][c]*r[3]))*o.systemScale;
  const ao=a.staged_overheads[route.game];
  const first=route.staged ? stageAssets+stageSystems+ao.first_paid_extra_owner_hours[c]*o.artScale+g.staged_engineering_pre_low_base_high[c]*o.systemScale : assets+systems;
  const later=route.staged ? assets-stageAssets+systems-stageSystems+ao.later_content_extra_owner_hours[c]*o.artScale+g.staged_engineering_later_low_base_high[c]*o.systemScale : 0;
  const support=g.live_support_hours_week_low_base_high[c]*o.supportScale;
  const burst=g.release_burst_hours_low_base_high[c]*o.supportScale;
  const start=o.delayMonths*WPM;
  const firstWeek=finish(first,start,o);
  const completeWeek=route.staged?finish(later+burst,firstWeek,o,support):firstWeek;
  if(capacity(o,completeWeek)<=support)throw new Error('Support leaves no capacity for launch fixes; raise hours or reduce support.');
  if(finish(burst,completeWeek,o,support)>completeWeek+52)throw new Error('The launch-fix allowance does not fit the support year.');
  const endWeek=completeWeek+p.finance.post_completion_support_weeks;
  const lifetimeHours=first+later+(route.staged?burst+(completeWeek-firstWeek)*support:0)+burst+p.finance.post_completion_support_weeks*support;
  const demoAssets=sum(ag.rows.map((r,i)=>quantityHours(r,g.demo_asset_quantities[i],c)))*o.artScale;
  const demoSystems=sum(g.rows.map(r=>r[2][c]*r[4]))*o.systemScale;
  return {assets,systems,risk,first,later,support,burst,firstWeek,completeWeek,endWeek,lifetimeHours,
    demoHours:demoAssets+demoSystems,demoWeek:finish(demoAssets+demoSystems,start,o)};
}
export function hoursAt(e,o,t){
  const start=o.delayMonths*WPM;
  if(t<=start)return 0;
  if(t<=e.completeWeek)return Math.min(e.first+e.later+(e.completeWeek-e.firstWeek)*e.support+(e.later?e.burst:0),suppliedCapacity(start,t,o));
  const post=Math.min(52,t-e.completeWeek);
  const burstDelivered=Math.min(e.burst*Math.min(1,post/4),Math.max(0,suppliedCapacity(e.completeWeek,e.completeWeek+post,o)-post*e.support));
  return e.lifetimeHours-52*e.support-e.burst+post*e.support+burstDelivered;
}
function credits(a,game,c){
  const seeds=sum(a.games[game].rows.map(r=>r[8][c]));
  const tc=a.tripo_credit_cases;
  return seeds*(tc.billable_generation_attempts_per_retained_seed[c]*tc.hd_generation_credits+tc.normal_retopology_credits_per_retained_seed+tc.uv_credits_per_retained_seed);
}
export function cashCost(a,p,r,e,o,t){
  if(t<0)return {total:0};
  const f=p.finance, is3d=r.game!=='incremental';
  const devMonths=Math.ceil(Math.max(0,Math.min(t,e.completeWeek))/WPM-1e-9);
  const postMonths=Math.ceil(Math.max(0,Math.min(t-e.completeWeek,52))/WPM-1e-9);
  const tripoMonths=is3d?Math.ceil(devMonths*o.tripoFraction):0;
  const cascadeurMonths=is3d&&o.cascadeur>0?Math.ceil(devMonths*f.cascadeur_active_month_fraction):0;
  const creditDemand=is3d?credits(a,r.game,o.effort):0;
  // One generation batch by default: unused credits in other paid months do not roll over.
  const generationMonths=is3d?Math.min(tripoMonths,f.tripo_generation_months):0;
  const topupPacks=creditDemand>0&&generationMonths>0?Math.ceil(Math.max(0,creditDemand-generationMonths*f.tripo_included_credits_per_paid_month)/1000):0;
  const tripo=(tripoMonths*f.tripo_monthly_usd+topupPacks*a.tripo_credit_cases.small_topup_usd_per_1000)/o.fx;
  const cascadeur=cascadeurMonths*o.cascadeur;
  const other=devMonths*o.monthly+postMonths*f.post_completion_monthly_eur;
  const fixed=f.store_fee_usd/o.fx+o.fixedOther+o.paidMarketing;
  return {total:fixed+tripo+cascadeur+other,devMonths,postMonths,tripoMonths,cascadeurMonths,topupPacks,creditDemand,tripo,cascadeur,other,fixed};
}
function curve(age,p,o){
  if(age<=0)return 0;
  if(age>=52)return 1+Math.min(1,(age-52)/52)*o.secondYear;
  const month=age/WPM, whole=Math.floor(month), partial=month-whole;
  const weights=p.finance.first_paid_year_monthly_unit_weights;
  return sum(weights.slice(0,whole))+(weights[whole]||0)*partial;
}
export function salesEvents(p,r,e,o){
  const maxAge=o.secondYear>0?104:52;
  const edges=[0,...Array.from({length:maxAge},(_,i)=>i+1)];
  const completeAge=e.completeWeek-e.firstWeek;
  if(completeAge>0&&completeAge<maxAge)edges.push(completeAge);
  edges.sort((a,b)=>a-b);
  const events=[];
  const retained=1-o.refund;
  const mix=o.region*o.discount*o.taxExclusion*o.priceScale/o.fx;
  let earlyRetained=0;
  const push=(week,units,price,kind)=>{
    const gross=units*retained*price*mix;
    events.push({week,units,retainedUnits:units*retained,adjustedGross: gross,receipts:gross*o.developerShare,kind});
  };
  for(let i=1;i<edges.length;i++){
    const age=edges[i]; if(age===edges[i-1])continue;
    const units=o.units*(curve(age,p,o)-curve(edges[i-1],p,o));
    const week=e.firstWeek+age, isLater=(edges[i-1]+age)/2>=completeAge;
    if(r.pricing==='episodes'&&isLater){
      push(week,units*(1-o.bundleShare),r.price_usd,'new chapter-one buyer');
      push(week,units*o.bundleShare,(r.price_usd+r.later_price_usd)*(1-o.bundleDiscount),'new bundle buyer');
    }else{
      push(week,units,r.staged&&isLater?r.later_price_usd:r.price_usd,'new base buyer');
      if(r.pricing==='episodes'&&!isLater)earlyRetained+=units*retained;
    }
  }
  // Conversion applies to retained chapter-one owners only. These are DLC purchases,
  // never new owners or another sale of the base game; the DLC can itself be refunded.
  if(r.pricing==='episodes')push(e.completeWeek,earlyRetained*o.conversion,r.later_price_usd,'returning owner chapter-two purchase');
  return events.sort((x,y)=>x.week-y.week);
}
export function earnedAt(p,events,o,t){
  const selected=events.filter(x=>x.week<=t+1e-8);
  const gross=sum(selected.map(x=>x.adjustedGross));
  const receipts=sum(selected.map(x=>x.receipts));
  const feeRecoup=gross*o.fx>=p.finance.fee_recoup_adjusted_gross_usd?p.finance.store_fee_usd/o.fx:0;
  return {gross,receipts,feeRecoup,earned:receipts+feeRecoup,
    newBuyers:sum(selected.filter(x=>!x.kind.startsWith('returning')).map(x=>x.units)),
    repeatChapterPurchases:sum(selected.filter(x=>x.kind.startsWith('returning')).map(x=>x.units))};
}
export function payouts(p,events,o){
  const monthly=new Map();let gross=0,recouped=false;
  for(const event of events){
    const month=Math.floor(event.week/WPM);
    let value=event.receipts*(1-o.withholding);
    gross+=event.adjustedGross;
    if(!recouped&&gross*o.fx>=p.finance.fee_recoup_adjusted_gross_usd){value+=p.finance.store_fee_usd/o.fx;recouped=true;}
    monthly.set(month,(monthly.get(month)||0)+value);
  }
  const output=[];let unpaid=0;
  for(const [month,value] of [...monthly].sort((a,b)=>a[0]-b[0])){
    unpaid+=value;
    if(unpaid*o.fx>=100){output.push({week:(month+2)*WPM,eur:unpaid});unpaid=0;}
  }
  return {payments:output,unpaid};
}
export function licenseReserve(p,events,o,e,t){
  // Conservative eligibility stress proxy, not an account eligibility determination:
  // this title's trailing-year adjusted gross BEFORE Steam share, not owner profit.
  let unityAt=null,cascadeurAt=null;
  for(const event of events){
    if(event.week>Math.min(t,e.endWeek))break;
    const trailing=sum(events.filter(x=>x.week<=event.week&&x.week>event.week-52).map(x=>x.adjustedGross))*o.fx;
    if(unityAt===null&&trailing>=p.finance.license_reserve.unity_threshold_usd)unityAt=event.week;
    if(cascadeurAt===null&&o.cascadeur>0&&trailing>=p.finance.license_reserve.cascadeur_threshold_usd)cascadeurAt=event.week;
  }
  const years=when=>when===null?0:Math.max(1,Math.ceil((Math.min(t,e.endWeek)-when)/52));
  // One current Pro annual seat per remaining active year after threshold, with no
  // automatic downgrade credit. Cascadeur is an incremental upgrade reserve, not
  // another full Indie charge. Other income/funding can trigger either earlier.
  const unity=years(unityAt)*p.finance.license_reserve.unity_pro_annual_usd/o.fx;
  const cascadeur=years(cascadeurAt)*Math.max(0,p.finance.license_reserve.cascadeur_pro_monthly_eur-o.cascadeur)*12;
  return {total:unity+cascadeur,unity,cascadeur,unityAt,cascadeurAt};
}
export function outcome(a,p,r,o){
  for(const key of ['fx','weekly','availability'])if(!(o[key]>0))throw new Error(`${key} must be positive.`);
  for(const key of ['refund','developerShare','conversion','bundleShare','bundleDiscount','withholding'])if(o[key]<0||o[key]>1)throw new Error(`${key} must be between 0 and 1.`);
  const e=effort(a,p,r,o), events=salesEvents(p,r,e,o), paid=payouts(p,events,o);
  function at(t){
    const earned=earnedAt(p,events,o,t),cost=cashCost(a,p,r,e,o,t),hours=hoursAt(e,o,t);
    const license=licenseReserve(p,events,r.game==='incremental'?{...o,cascadeur:0}:o,e,t);
    cost.total+=license.total;
    const received=sum(paid.payments.filter(x=>x.week<=t+1e-8).map(x=>x.eur));
    return {week:t,...earned,cost:cost.total,hours,surplus:earned.earned-cost.total,
      received,bankBalance:received-cost.total,earningsPerHour:hours?(earned.earned-cost.total)/hours:null,
      laborAdjusted:earned.earned-cost.total-hours*o.hourly};
  }
  const year=at(e.firstWeek+52), commitment=cashCost(a,p,r,e,o,e.endWeek);
  commitment.licenseReserve=licenseReserve(p,events,r.game==='incremental'?{...o,cascadeur:0}:o,e,e.endWeek);
  commitment.total+=commitment.licenseReserve.total;
  // Conservative launch-year funding hurdle: all completion + one post-completion
  // support year's costs/time must be funded by sales earned in first paid year.
  function requiredUnits(hourly){
    const per=earnedAt(p,salesEvents(p,r,e,{...o,units:1}),o,e.firstWeek+52);
    if(per.receipts<=0)return null;
    const baseCost=cashCost(a,p,r,e,o,e.endWeek).total;
    const margin=n=>{
      const ev=salesEvents(p,r,e,{...o,units:n});
      const reserve=licenseReserve(p,ev,r.game==='incremental'?{...o,cascadeur:0}:o,e,e.endWeek).total;
      return earnedAt(p,ev,o,e.firstWeek+52).earned-baseCost-reserve-e.lifetimeHours*hourly;
    };
    // Start at a strict lower bound (assume the full fee is recouped). Costs only
    // step upwards with units, so deficit/per-unit steps cannot skip a solution;
    // stop at the fee-recoup threshold if it would be crossed by a larger step.
    let n=Math.max(0,Math.ceil((baseCost+e.lifetimeHours*hourly-p.finance.store_fee_usd/o.fx)/per.receipts));
    const feeUnits=Math.ceil(p.finance.fee_recoup_adjusted_gross_usd/(per.gross*o.fx));
    for(let i=0;i<100;i++){
      const gap=margin(n);if(gap>=-1e-8)return n;
      let next=n+Math.max(1,Math.ceil(-gap/per.receipts));
      if(n<feeUnits&&next>feeUnits)next=feeUnits;
      n=next;
    }
    return null;
  }
  return {route:r.id,...e,year,month12:at(52),month24:at(104),commitmentCost:commitment,
    completion:at(e.completeWeek),end:at(e.endWeek),firstCost:cashCost(a,p,r,e,o,e.firstWeek).total,
    firstPayoutWeek:paid.payments[0]?.week??null,
    remainingHoursAfterPaidYear:Math.max(0,e.lifetimeHours-year.hours),
    remainingCostsAfterPaidYear:Math.max(0,commitment.total-year.cost),
    cashBreakEven:requiredUnits(0),laborBreakEven:requiredUnits(o.hourly),
    breakEven10:requiredUnits(10),breakEven30:requiredUnits(30),
    events,payments:paid.payments};
}
export function compact(a,p,game,o){
  const g=p.games[game];
  const assets=sum(a.games[game].rows.map((r,i)=>quantityHours(r,g.compact_asset_quantities[i],o.effort)))*o.artScale;
  const systems=sum(g.rows.map((r,i)=>r[2][o.effort]*g.compact_system_fractions[i]))*o.systemScale;
  return {assets,systems,hours:assets+systems,weeks:finish(assets+systems,0,o)};
}
