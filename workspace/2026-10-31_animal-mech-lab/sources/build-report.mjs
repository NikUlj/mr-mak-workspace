import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = new URL('../', import.meta.url);
const round = JSON.parse(await readFile(new URL('sources/round-01.json', root), 'utf8'));
const review = JSON.parse(await readFile(new URL('sources/review-01.json', root), 'utf8'));
const correctionSet = JSON.parse(await readFile(new URL('sources/hand-corrections-01.json', root), 'utf8')).corrections;
correctionSet.push(JSON.parse(await readFile(new URL('sources/hand-correction-hound-01.json', root), 'utf8')));
const esc = value => String(value ?? '').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const articles = round.concepts.map(concept => {
  const result = review.concepts.find(item => item.id === concept.id);
  return `<article class="obj-card" id="${esc(concept.id)}">
    <div class="card-header"><span class="card-num">${esc(concept.letter)}</span><div><h2>${esc(concept.name)}</h2><p class="meta">${esc(concept.tagline)}</p></div></div>
    <figure><a href="${esc(result.image)}" target="_blank" rel="noopener"><img src="${esc(result.image)}" alt="${esc(result.alt)}" width="${result.width}" height="${result.height}" loading="lazy"></a><figcaption>${esc(concept.silhouette)}</figcaption></figure>
    <div class="media-links"><a href="${esc(result.image)}" download>Download PNG</a><a href="sources/${esc(concept.id)}-prompt.txt" download>Download prompt</a></div>
    <p><strong>Design intent.</strong> ${esc(concept.purpose)}</p>
    <p class="review-note"><strong>Agent review.</strong> ${esc(result.review)}</p>
    <p class="review-state">${esc(result.state)}</p>
    <details class="prompt-disclosure"><summary>Saved generation &amp; correction prompts</summary><p class="prompt-note">Same PS1 style reference for all four concepts; new designs.</p><pre>${esc(concept.prompt)}</pre><p class="prompt-note">Targeted hand correction</p><pre>${esc(correctionSet.find(c => c.id === concept.id).prompt)}</pre></details>
  </article>`;
}).join('\n');
const html = `<!doctype html>
<html lang="en" data-mak-report="document">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Mech Lab · Version 1 / Animal silhouettes</title>
<link rel="stylesheet" href="../_shared/report.css"><link rel="stylesheet" href="../_shared/examples.css"><link rel="stylesheet" href="concepts.css"><script defer src="../_shared/report.js"></script></head>
<body><main class="container">
<div class="eyebrow">Mr. Mak Workspace / Image generation / Version 1</div>
<h1>Mech Lab</h1>
<p class="subtitle">Four animal-inspired silhouettes with the industrial character of Armored Core and the simple geometry of a PS1 model.</p>
<div class="callout round-summary"><strong>First exploration · 4 concepts.</strong> Stag Beetle, Mantis, Raven and Hound. Each frame uses large flat armor shapes and separate blocky fingers: four fingers plus an opposable thumb on each hand. No design has been selected yet.</div>
<nav class="round-nav" aria-label="Concepts">${round.concepts.map(c=>`<a href="#${esc(c.id)}">${esc(c.letter)} · ${esc(c.name)}</a>`).join('')}</nav>
<p>Click any image to enlarge it, inspect it at 100%, or download the original. Compare the outlines first, then the hand construction.</p>
<div class="concept-grid">${articles}</div>
<details class="mak-card references"><summary>Art direction &amp; working reference</summary>
<div class="reference-layout"><a href="media/ps1-style-reference-v002.png"><img src="media/ps1-style-reference-v002.png" alt="Gray PS1-style mech from the existing Low Poly Mechs card, used only as a simplicity reference" loading="lazy" width="1086" height="1448"></a><div>
<p><strong>Style reference:</strong> v002 from <a href="../2026-10-31_low-poly-mechs/assets/v002-ps1-front/low-poly-mech-ps1-front-v002.png">Low Poly Mechs</a>. Its broad flat masses and sparse details guide this round. The animal silhouettes are new designs.</p>
<ul class="criteria"><li><strong>PS1 construction:</strong> simple boxes, wedges and low-sided prisms; flat shading; large color blocks; very few armor breaks.</li><li><strong>Industrial mech identity:</strong> compact sensor head, torso core, narrow waist, articulated limbs and restrained boosters.</li><li><strong>Animal influence:</strong> silhouette, proportions and balance expressed through armor.</li><li><strong>Five digits:</strong> a block palm, four separate two-segment cuboid fingers and one side-mounted thumb; visible gaps between digits.</li><li><strong>Readable comparison:</strong> full body, neutral white backdrop, front three-quarter view, empty hands, all limbs in frame.</li></ul>
<p>These are raster concept images. Actual topology, polygon count and articulation remain for a later 3D stage.</p></div></div></details>
<details class="mak-card round-details"><summary>Round record &amp; future versions</summary>
<p>Started 31 October; completed 1 November 2026 using the built-in image_gen tool. One initial generation and one targeted hand correction per direction. The tool did not expose the exact model, seed or request ID. No upscaling. Native originals, earlier attempts and exact prompts are stored with this card.</p>
<p><a href="sources/round-01.json" download>Concept brief and exact prompt set</a> · <a href="sources/review-01.json" download>Image manifest and visual reviews</a></p>
<p>Following the Arachne lab layout, later exploration rounds can be added as new Version tabs on this same card. Keep this first round for comparison. An owner selection will establish which silhouette to refine.</p></details>
<details class="mak-card"><summary>Earlier attempts · missing fingers</summary><p>The initial silhouettes are preserved here. All four required hand corrections before the five-digit requirement was met.</p><div class="variants">${round.concepts.map(c => `<div class="variant"><div class="var-label">${esc(c.letter)} · ${esc(c.name)} · v001a</div><a href="media/initial/${esc(c.id)}-v001a.png"><img src="media/initial/${esc(c.id)}-v001a.png" alt="Earlier ${esc(c.name)} concept with incomplete finger count" width="1086" height="1448" loading="lazy"></a><p>${esc(review.concepts.find(r=>r.id===c.id).initial_review)}</p></div>`).join('')}</div></details>
</main></body></html>\n`;
await writeFile(new URL('report.html', root), html, 'utf8');
for (const concept of round.concepts) await writeFile(new URL('sources/' + concept.id + '-prompt.txt', root), 'INITIAL GENERATION\n\n' + concept.prompt + '\n\nTARGETED HAND CORRECTION\n\n' + correctionSet.find(c => c.id === concept.id).prompt + '\n', 'utf8');
console.log('Built ' + fileURLToPath(new URL('report.html', root)));

