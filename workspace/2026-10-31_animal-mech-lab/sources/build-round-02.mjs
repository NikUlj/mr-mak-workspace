import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const round = JSON.parse(await readFile(new URL('sources/round-02.json', root), 'utf8'));
const review = JSON.parse(await readFile(new URL('sources/review-02.json', root), 'utf8'));
const handPrompt = await readFile(new URL('sources/round-02-hand-master-prompt.txt', root), 'utf8');
const esc = value => String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const articles = round.concepts.map(concept => {
 const result=review.concepts.find(item=>item.id===concept.id);
 return `<article class="obj-card" id="${esc(concept.id)}">
 <div class="card-header"><span class="card-num">${esc(concept.letter)}</span><div><h2>${esc(concept.name)}</h2><p class="meta">${esc(concept.tagline)}</p></div></div>
 <figure><a href="${esc(result.image)}" target="_blank" rel="noopener"><img src="${esc(result.image)}" alt="${esc(result.alt)}" width="${result.width}" height="${result.height}" loading="lazy"></a><figcaption>${esc(concept.silhouette)}</figcaption></figure>
 <div class="media-links"><a href="${esc(result.image)}" download>Download PNG</a><a href="sources/${esc(concept.id)}-prompt.txt" download>Download prompt</a></div>
 <p><strong>Design intent.</strong> ${esc(concept.purpose)}</p>
 <p class="review-note"><strong>Agent review.</strong> ${esc(result.review)}</p>
 <p class="review-state">${esc(result.state)}</p>
 <details class="prompt-disclosure"><summary>Saved generation prompt</summary><p class="prompt-note">Knight illustration for armor direction; shared H01 master for both hands.</p><pre>${esc(concept.prompt)}</pre>${result.correction_prompt?`<p class="prompt-note">Targeted correction</p><pre>${esc(result.correction_prompt)}</pre>`:''}</details>
 </article>`;
}).join('\n');
const html=`<!doctype html>
<html lang="en" data-mak-report="document"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mech Lab · Version 2 / Knight frames</title>
<link rel="stylesheet" href="../_shared/report.css"><link rel="stylesheet" href="../_shared/examples.css"><link rel="stylesheet" href="concepts.css"><link rel="stylesheet" href="knight-round.css"><script defer src="../_shared/report.js"></script></head>
<body><main class="container"><div class="eyebrow">Mr. Mak Workspace / Image generation / Version 2</div>
<h1>Knight Frames</h1><p class="subtitle">Knight-inspired armor, slimmer shared hands and richer metallic surfaces, built around low-poly shapes.</p>
<div class="callout round-summary"><strong>Four new directions.</strong> Ivory Paladin, Iron Bulwark, Silver Lancer and Black Errant. Each uses H01 as its common hand design. The first animal exploration remains in Version 1.</div>
<div class="mak-card shared-hand-card"><h2>H01 · Shared slim hands</h2><div class="hand-layout"><figure><a href="media/round-02/h01-shared-hands-v001.png"><img src="media/round-02/h01-shared-hands-v001.png" alt="Shared mirrored pair of slim mechanical hands with four long silver-plated fingers and one opposable thumb each" width="${review.hand_master.width}" height="${review.hand_master.height}" loading="lazy"></a><figcaption>One common hand architecture, mirrored left and right.</figcaption></figure><div>
<p>A compact gunmetal palm, thin silver back plate and long articulated fingers. Four separate fingers and a side thumb on each hand.</p>
<p>The silver-over-gunmetal finish stays consistent across armor palettes. The hand reference guides this round and future concepts.</p>
<p class="meta">Working design reference; owner selection is pending. The supplied AC6-style crop guides proportions. Exact shared geometry will be established when the hands are modeled in 3D.</p>
<div class="media-links"><a href="media/round-02/h01-shared-hands-v001.png" download>Download hand reference</a><a href="sources/round-02-hand-master-prompt.txt" download>Download hand prompt</a></div></div></div>
<details class="prompt-disclosure"><summary>Shared hand generation prompt</summary><pre>${esc(handPrompt)}</pre></details></div>
<nav class="round-nav" aria-label="Concepts">${round.concepts.map(c=>`<a href="#${esc(c.id)}">${esc(c.letter)} · ${esc(c.name)}</a>`).join('')}</nav>
<p>Click an image to enlarge it and inspect the silhouette, metal finish and hand proportions.</p>
<div class="concept-grid">${articles}</div>
<details class="mak-card references"><summary>Supplied references &amp; material direction</summary><div class="reference-pair">
<figure><a href="media/round-02/knight-style-reference.png"><img src="media/round-02/knight-style-reference.png" alt="User-supplied ivory knight mech illustration with tall crests, plate armor and burgundy cape" width="736" height="1308" loading="lazy"></a><figcaption>Armor inspiration: helmet, pauldrons, tapered breastplate, tassets and greaves. New silhouettes explore that language.</figcaption></figure>
<figure><a href="media/round-02/slim-hand-reference.png"><img class="hand-crop" src="media/round-02/slim-hand-reference.png" alt="Small user-supplied AC6-style mechanical hand crop, used for slim proportions" width="95" height="80" loading="lazy"></a><figcaption>Hand inspiration: small palm, thin articulated fingers and light plates over dark mechanisms. The crop is small; H01 develops a readable shared design from it.</figcaption></figure></div>
<p><strong>Material change:</strong> satin steel, brushed metal, slightly reflective painted armor, restrained trim and subtle surface wear. Broad reflections follow the large flat faces. Dense geometric fittings remain unnecessary.</p>
<p>These are raster design references. Polygon count, topology, articulation and exact component reuse require a later 3D model.</p></details>
<details class="mak-card round-details"><summary>Round record &amp; saved sources</summary>
<p>Created 1 November 2026 with built-in image_gen. One shared hand reference and four initial mech generations${review.correction_count?', plus '+review.correction_count+' targeted correction'+(review.correction_count===1?'':'s'):''}. The tool did not expose the exact model, seed or request IDs. Native outputs are retained without upscaling.</p>
<p><a href="sources/round-02.json" download>Round brief and exact prompt set</a> · <a href="sources/review-02.json" download>Image manifest and visual reviews</a></p><p>No owner selection has been recorded. Keep later refinements as new revisions on this card.</p></details>
${review.earlier_attempts?.length?`<details class="mak-card"><summary>Earlier attempts</summary><div class="variants">${review.earlier_attempts.map(a=>`<div class="variant"><div class="var-label">${esc(a.title)}</div><a href="${esc(a.image)}"><img src="${esc(a.image)}" alt="${esc(a.alt)}" loading="lazy" width="${a.width}" height="${a.height}"></a><p>${esc(a.reason)}</p></div>`).join('')}</div></details>`:''}
</main></body></html>\n`;
await writeFile(new URL('report_v2.html',root),html,'utf8');
for(const concept of round.concepts){const result=review.concepts.find(r=>r.id===concept.id);await writeFile(new URL('sources/'+concept.id+'-prompt.txt',root),concept.prompt+(result.correction_prompt?'\n\nTARGETED CORRECTION\n\n'+result.correction_prompt:'')+'\n','utf8');}
console.log('Built '+fileURLToPath(new URL('report_v2.html',root)));

