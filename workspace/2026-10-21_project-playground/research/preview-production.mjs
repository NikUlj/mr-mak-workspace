// Isolated browser preview. No desktop service, live profile, application restart,
// provider calls, native Unity claims or changes to the owner's settings.
import {createServer} from 'vite';
import {readFile,mkdir,writeFile} from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import {fileURLToPath,pathToFileURL} from 'node:url';
import assert from 'node:assert/strict';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../..');
const {launchBrowser}=await import(pathToFileURL(path.join(root,'desktop/service/test/browser.mjs')));
await import(pathToFileURL(path.join(root,'scripts/ensure-workspace-link.mjs')));
const folder='2026-10-21_project-playground';
const registry=JSON.parse(await readFile(path.join(root,'workspace/workspace.json'),'utf8'));
const card=registry.entities.find(e=>e.id==='project-playground');
const selected=process.argv.length>2?process.argv.slice(2):['brief.md','research-plan.md','production-estimates.md','commercial-findings.md','financial-method.md','scenario-model.html','estimate-review.md','prototype-decision.md'];
const out=path.join(os.tmpdir(),'project-playground-prototype-decision-preview');await mkdir(out,{recursive:true});
const server=await createServer({root,server:{host:'127.0.0.1',port:0,open:false,watch:null,hmr:false}});
let browser;const results=[],errors=[];
const metrics=el=>({width:el.clientWidth,bodyWidth:document.documentElement.clientWidth,bodyScrollWidth:document.documentElement.scrollWidth,textSize:getComputedStyle(el.querySelector('p:not(.meta)')).fontSize,tables:el.querySelectorAll('table').length,
 tablesWithUncontainedOverflow:[...el.querySelectorAll('table')].filter(t=>{if(t.scrollWidth<=el.clientWidth)return false;let p=t;while(p&&p!==el){if(/auto|scroll/.test(getComputedStyle(p).overflowX))return false;p=p.parentElement;}return true;}).length});
try{
 await server.listen();browser=await launchBrowser();const page=await browser.newPage({acceptDownloads:true});
 await page.addInitScript(()=>localStorage.setItem('mak.sidebarCollapsed',innerWidth<1000?'1':'0'));
 page.setDefaultTimeout(15000);page.on('pageerror',e=>errors.push(e.message));
 for(const width of [1440,768,390]){
  await page.setViewportSize({width,height:950});
  for(const theme of ['dark','light']){
   await page.goto(server.resolvedUrls.local[0]);
   await page.getByRole('button',{name:'Workspace settings',exact:true}).click();
   await page.getByLabel('Workspace theme',{exact:true}).selectOption(theme);
   await page.getByRole('button',{name:'Workspace settings',exact:true}).click();
   for(const file of selected){
    const index=card.steps.findIndex(s=>s.path===file);assert.ok(index>=0);
    await page.goto(`${server.resolvedUrls.local[0]}#/project-playground/${index}`);
    let content,metric;
    if(file.endsWith('.md')){
     const md=await readFile(path.join(root,'workspace',folder,file),'utf8');
     const title=md.split('\n')[0].replace(/^# /,'').trim();
     await page.locator('.mak-markdown h1').filter({hasText:title}).waitFor();
     content=page.locator('.mak-markdown');metric=await content.evaluate(metrics);
     assert.ok(metric.width>=Math.min(360,width-20));
    }else{
     const frame=page.frameLocator('iframe.report-frame');
     await frame.locator('#status').filter({hasText:'Updated.'}).waitFor();
     content=frame.locator('main');metric=await content.evaluate(metrics);
     assert.ok(metric.width>=Math.min(300,width-60));
     // Exercise actual controls in every viewport/theme, then return to defaults.
     const schedule=await frame.locator('#schedule').innerText();
     await frame.locator('details').first().locator('summary').click();
     await frame.locator('#artScale').fill('0.5');
     await frame.locator('#artScale').dispatchEvent('input');
     await page.waitForFunction(()=>{
      const f=document.querySelector('iframe.report-frame');return f?.contentDocument?.querySelector('#schedule')?.textContent.includes('2,451');
     });
     assert.notEqual(await frame.locator('#schedule').innerText(),schedule);
     await frame.getByRole('button',{name:'Reset assumptions',exact:true}).click();
     await frame.locator('#units').fill('0');await frame.locator('#units').dispatchEvent('input');
     await frame.locator('#status').filter({hasText:/^Updated\. 0 new buyers/}).waitFor();
     assert.ok((await frame.locator('#schedule').innerText()).includes('Not reached'));
     await frame.getByRole('button',{name:'Reset assumptions',exact:true}).click();
     assert.equal(await frame.locator('#units').inputValue(),'3000');
     if(width===1440&&theme==='dark'){
      await frame.locator('#units').fill('-1');await frame.locator('#units').dispatchEvent('input');
      await frame.locator('#status.error').waitFor();assert.equal(await frame.locator('#financial').innerText(),'');
      await frame.getByRole('button',{name:'Reset assumptions',exact:true}).click();
      await frame.locator('#units').fill('3225');await frame.locator('#units').dispatchEvent('input');
      await frame.locator('#status').filter({hasText:/^Updated\. 3,225 new buyers/}).waitFor();
      await frame.locator('#sales').selectOption('0');
      await frame.locator('#status').filter({hasText:/^Updated\. 100 new buyers/}).waitFor();
      assert.equal(await frame.locator('#refund').inputValue(),'0.15');
      await frame.getByRole('button',{name:'Reset assumptions',exact:true}).click();
     }
     const downloadPromise=page.waitForEvent('download');
     await frame.getByRole('button',{name:'Download this scenario',exact:true}).click();
     const download=await downloadPromise;assert.equal(download.suggestedFilename(),'project-playground-scenario.json');
     await download.saveAs(path.join(out,`scenario-${width}-${theme}.json`));
     const saved=JSON.parse(await readFile(path.join(out,`scenario-${width}-${theme}.json`),'utf8'));
     assert.equal(saved.assumptions.units,3000);assert.equal(saved.results.length,6);
     await frame.locator('details').first().locator('summary').click();
     if((width===1440&&theme==='dark')||(width===390&&theme==='light')){
      await frame.locator('#bars').scrollIntoViewIfNeeded();
      await page.screenshot({path:path.join(out,`scenario-chart-${width}-${theme}.png`)});
     }
     await frame.locator('h1').scrollIntoViewIfNeeded();
     assert.equal(await frame.locator('html').getAttribute('data-mrmak-theme'),theme);
    }
    assert.equal(metric.tablesWithUncontainedOverflow,0,`${file} overflow`);
    assert.ok(metric.bodyScrollWidth<=metric.bodyWidth+2,`${width} ${file} page overflow`);
    assert.ok(parseFloat(metric.textSize)>=14);
    const tab=page.getByRole('tab',{name:card.steps[index].name,exact:true});assert.equal(await tab.getAttribute('aria-selected'),'true');
    if(['commercial-findings.md','production-estimates.md','scenario-model.html','estimate-review.md','prototype-decision.md'].includes(file))await page.screenshot({path:path.join(out,`${file}-${width}-${theme}.png`)});
    results.push({file,viewport:width,theme,...metric});
   }
  }
 }
 assert.deepEqual(errors,[]);
 await writeFile(path.join(out,'results.json'),JSON.stringify({results,errors},null,2));
 console.log(JSON.stringify({views:results.length,errors,artifacts:out,interactionChecks:selected.includes('scenario-model.html')?'asset effort changes schedule; zero sales; reset; six scenario downloads':'Markdown-only preview; calculator not exercised'},null,2));
}finally{await browser?.close();await server.close();}
