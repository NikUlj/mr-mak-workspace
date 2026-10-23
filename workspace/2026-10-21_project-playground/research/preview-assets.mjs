// Isolated browser-only preview of Step 4 reports. No desktop service or user profile.
import { createServer } from 'vite';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { fileURLToPath, pathToFileURL } from 'node:url';
import assert from 'node:assert/strict';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const { launchBrowser } = await import(pathToFileURL(path.join(root, 'desktop/service/test/browser.mjs')));
await import(pathToFileURL(path.join(root, 'scripts/ensure-workspace-link.mjs')));
const folder = '2026-10-21_project-playground';
const registry = JSON.parse(await readFile(path.join(root,'workspace/workspace.json'),'utf8'));
const card = registry.entities.find(e => e.id === 'project-playground');
const selected = ['brief.md','research-plan.md','asset-findings.md','asset-inventory.md','production-pipeline.md'];
const out = path.join(os.tmpdir(),'project-playground-step4-preview');
await mkdir(out,{recursive:true});
const server = await createServer({root,server:{host:'127.0.0.1',port:0,open:false,watch:null,hmr:false}});
let browser;
const results=[];
const errors=[];
try {
  await server.listen();
  browser=await launchBrowser();
  const page=await browser.newPage();
  // Use the app's existing collapsed-sidebar mode at narrow widths. This is an
  // isolated profile; it does not change the owner's desktop/browser settings.
  await page.addInitScript(()=>localStorage.setItem('mak.sidebarCollapsed',innerWidth<1000?'1':'0'));
  page.setDefaultTimeout(15000);
  page.on('pageerror',e=>errors.push(e.message));
  for (const width of [1440,768,390]) {
    await page.setViewportSize({width,height:900});
    for (const theme of ['dark','light']) {
      await page.goto(server.resolvedUrls.local[0]);
      await page.getByRole('button',{name:'Workspace settings',exact:true}).click();
      await page.getByLabel('Workspace theme',{exact:true}).selectOption(theme);
      await page.getByRole('button',{name:'Workspace settings',exact:true}).click();
      for (const file of selected) {
        const index=card.steps.findIndex(s=>s.path===file);
        assert.ok(index>=0);
        const md=await readFile(path.join(root,'workspace',folder,file),'utf8');
        const title=md.split('\n')[0].replace(/^# /,'').trim();
        await page.goto(`${server.resolvedUrls.local[0]}#/project-playground/${index}`);
        await page.locator('.mak-markdown h1').filter({hasText:title}).waitFor();
        assert.equal(await page.locator('html').getAttribute('data-workspace-theme'),theme);
        const metrics=await page.locator('.mak-markdown').evaluate(el=>({
          width:el.clientWidth, scrollWidth:el.scrollWidth,
          bodyWidth:document.documentElement.clientWidth,
          bodyScrollWidth:document.documentElement.scrollWidth,
          textSize:getComputedStyle(el.querySelector('p')).fontSize,
          tables:el.querySelectorAll('table').length,
          brokenImages:[...el.querySelectorAll('img')].filter(i=>!i.complete||!i.naturalWidth).length,
          tablesWithUncontainedOverflow:[...el.querySelectorAll('table')].filter(t=>{
            if(t.scrollWidth<=el.clientWidth)return false;
            let p=t; while(p&&p!==el){if(/auto|scroll/.test(getComputedStyle(p).overflowX))return false;p=p.parentElement;}
            return true;
          }).length
        }));
        assert.equal(metrics.brokenImages,0);
        assert.equal(metrics.tablesWithUncontainedOverflow,0,`${width} ${file} table overflow`);
        assert.ok(metrics.bodyScrollWidth<=width+2,`${width} ${file} page overflow`);
        assert.ok(parseFloat(metrics.textSize)>=14,`${width} ${file} text size`);
        assert.ok(metrics.width>=Math.min(360,width-20),`${width} ${file} reading width`);
        const selectedTab=page.getByRole('tab',{name:card.steps[index].name,exact:true});
        assert.equal(await selectedTab.getAttribute('aria-selected'),'true');
        await selectedTab.scrollIntoViewIfNeeded();
        if(['asset-findings.md','asset-inventory.md','production-pipeline.md'].includes(file)) {
          await page.screenshot({path:path.join(out,`${file}-${width}-${theme}.png`)});
        }
        results.push({file,viewport:width,theme,...metrics});
      }
    }
  }
  assert.deepEqual(errors,[]);
  await writeFile(path.join(out,'results.json'),JSON.stringify({results,errors},null,2));
  console.log(JSON.stringify({views:results.length,errors,screenshots:out,readingWidths:[...new Set(results.map(r=>r.width))]},null,2));
} finally {
  await browser?.close();
  await server.close();
}
