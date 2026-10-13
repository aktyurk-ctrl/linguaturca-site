// Development-only visual evidence. PLAYWRIGHT_PATH may point to a preinstalled Playwright package.
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');
const fs = require('fs');
const path = require('path');
const root = __dirname;
(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const results = [];
  const geometries = {};
  for (const width of [1440, 390, 768]) {
    for (const variant of ['a', 'b', 'c']) {
      const page = await browser.newPage({ viewport: { width, height: width === 390 ? 844 : 1000 }, deviceScaleFactor: 1 });
      const errors = [];
      page.on('pageerror', e => errors.push(e.message));
      await page.goto('file://' + path.join(root, variant + '.html'));
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(root, `evidence/${variant}-${width}-full.png`), fullPage: true });
      await page.screenshot({ path: path.join(root, `evidence/${variant}-${width}-hero.png`) });
      const geometry = await page.evaluate(() => [...document.querySelectorAll('.header,main>section,.footer,h1,h2,.hero-portrait')].map(e => { const r=e.getBoundingClientRect(); return {class:e.className,text:e.tagName.startsWith('H')?e.textContent:'',x:r.x,y:r.y+scrollY,width:r.width,height:r.height}; }));
      if (!geometries[width]) geometries[width] = geometry;
      const layoutSameAcrossVariants = JSON.stringify(geometries[width]) === JSON.stringify(geometry);
      for (const [name, selector] of [['method','.method'],['school','#school'],['pricing','#prices'],['final','.final-cta']]) {
        await page.locator(selector).evaluate(e => window.scrollTo({top:e.getBoundingClientRect().top+scrollY-90,behavior:'instant'}));
        await page.screenshot({path:path.join(root,`evidence/${variant}-${width}-${name}.png`)});
      }
      await page.locator('.hero-actions [data-enroll]').click();
      await page.locator('#enroll input').first().focus();
      await page.screenshot({path:path.join(root,`evidence/${variant}-${width}-form.png`)});
      await page.keyboard.press('Escape');
      const modalClosed=await page.locator('#enroll').evaluate(e=>!e.open);
      const info=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,height:document.documentElement.scrollHeight,images:[...document.images].filter(e=>e.src&&!e.naturalWidth).map(e=>e.src),fonts:document.fonts.check('16px Onest')&&document.fonts.check('32px Manrope')}));
      results.push({variant,width,...info,layoutSameAcrossVariants,modalClosed,errors});
      await page.close();
    }
    // Compare geometric layout with the previous approved A prototype.
    const old=await browser.newPage({viewport:{width,height:width===390?844:1000}});
    await old.goto('file://'+path.join(root,'../prototype/index.html'));
    await old.evaluate(()=>document.fonts.ready);
    const previous=await old.evaluate(()=>[...document.querySelectorAll('.header,main>section,.footer,h1,h2,.hero-portrait')].map(e=>{const r=e.getBoundingClientRect();return {class:e.className,text:e.tagName.startsWith('H')?e.textContent:'',x:r.x,y:r.y+scrollY,width:r.width,height:r.height};}));
    results.push({width,layoutSameAsPrevious:JSON.stringify(previous)===JSON.stringify(geometries[width])});
    await old.close();
  }
  fs.writeFileSync(path.join(root,'evidence/browser-qa.json'),JSON.stringify(results,null,2)+'\n');
  console.log(JSON.stringify(results,null,2));
  await browser.close();
})();
