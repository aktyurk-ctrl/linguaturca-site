/* Local UI-only QA. All lead requests are intercepted; optional analytics never reach providers.
   Requires Playwright and axe-core supplied by the QA environment, not production dependencies.
   PLAYWRIGHT_MODULE, AXE_SCRIPT, BASE_URL and QA_EVIDENCE_DIR can override local defaults. */
const { chromium, webkit } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const base = process.env.BASE_URL || 'http://127.0.0.1:3015';
const out = process.env.QA_EVIDENCE_DIR || 'docs/public-site-polish/evidence';
const paths = [
  '/',
  '/articles',
  '/articles/kak-vyuchit-turetskiy',
  '/articles/turetskiy-yazyk-s-nulya',
  '/articles/turetskiy-dlya-pereezda',
  '/policy',
  '/legal',
];
const analytics = /mc\.yandex|_vercel\/insights|va\.vercel/;
const report = { routes: [], interactions: [], consent: [], errors: [] };
const save = () => fs.writeFileSync(`${out}/browser-qa.json`, JSON.stringify(report, null, 2));
async function scrollAll(p) {
  await p.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 800) {
      scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 20));
    }
    scrollTo(0, 0);
  });
  await p.waitForTimeout(150);
}
(async () => {
  for (const [engine, type] of [
    ['chrome', chromium],
    ['webkit', webkit],
  ]) {
    const b = await type.launch({
      headless: true,
      ...(engine === 'chrome' ? { channel: 'chrome' } : {}),
    });
    for (const width of [320, 390, 768, 1024, 1440]) {
      const context = await b.newContext({
        viewport: { width, height: 1000 },
        deviceScaleFactor: 1,
        reducedMotion: 'reduce',
      });
      await context.addInitScript(() => localStorage.setItem('cookie-consent', 'declined'));
      await context.route('**/api/airtable', () => {
        throw Error('Unexpected lead request');
      });
      const unwanted = [];
      await context.route(analytics, (r) => {
        unwanted.push(r.request().url());
        return r.fulfill({ body: '', contentType: 'text/javascript' });
      });
      const p = await context.newPage();
      const errors = [];
      p.on('pageerror', (e) => errors.push(e.message));
      p.on('console', (m) => {
        if (m.type() === 'error') errors.push(m.text());
      });
      for (const path of paths) {
        const response = await p.goto(base + path, { waitUntil: 'networkidle' });
        await p.evaluate(() => document.fonts.ready);
        await scrollAll(p);
        const result = await p.evaluate(() => ({
          title: document.title,
          canonical: document.querySelector('link[rel="canonical"]')?.href,
          description: document.querySelector('meta[name="description"]')?.content,
          og: document.querySelector('meta[property="og:url"]')?.content,
          twitter: document.querySelector('meta[name="twitter:card"]')?.content,
          overflow: document.documentElement.scrollWidth > innerWidth,
          h1: document.querySelectorAll('h1').length,
          brokenImages: [...document.images]
            .filter(
              (i) =>
                i.getClientRects().length &&
                i.getAttribute('src') &&
                (!i.complete || !i.naturalWidth)
            )
            .map((i) => i.src),
          emptyLinks: [...document.querySelectorAll('a')]
            .filter((a) => !a.getAttribute('href') || a.getAttribute('href') === '#')
            .map((a) => a.textContent),
          missingAnchors: [...document.querySelectorAll('a[href]')]
            .filter(
              (a) =>
                a.origin === location.origin &&
                a.pathname === location.pathname &&
                a.hash &&
                !document.getElementById(decodeURIComponent(a.hash.slice(1)))
            )
            .map((a) => a.href),
          fonts: [...document.fonts].map((f) => ({ family: f.family, status: f.status })),
          headingLevels: [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map((h) =>
            Number(h.tagName[1])
          ),
          structured: [...document.querySelectorAll('script[type="application/ld+json"]')].map(
            (s) => JSON.parse(s.textContent)
          ),
          sections: [...document.querySelectorAll('main section')].map((e) => ({
            id: e.id,
            y: e.getBoundingClientRect().y,
            height: e.getBoundingClientRect().height,
          })),
          headerPosition: getComputedStyle(document.querySelector('header')).position,
          todo: /TODO/.test(document.body.innerText),
          resources: performance
            .getEntriesByType('resource')
            .filter((r) => ['script', 'css', 'img', 'link'].includes(r.initiatorType))
            .map((r) => ({
              name: r.name.replace(location.origin, ''),
              type: r.initiatorType,
              bytes: r.encodedBodySize,
            })),
        }));
        assert.equal(response.status(), 200);
        assert.equal(result.h1, 1);
        assert.equal(new URL(result.canonical).href, 'https://linguaturca.ru' + path);
        assert.equal(new URL(result.og).href, new URL(result.canonical).href);
        assert.equal(result.overflow, false, `${engine} ${width} ${path} overflow`);
        assert.deepEqual(result.missingAnchors, []);
        assert.deepEqual(result.emptyLinks, []);
        assert.deepEqual(result.brokenImages, []);
        assert.equal(result.todo, false);
        if (process.env.AXE_SCRIPT && [390, 1440].includes(width)) {
          await p.addScriptTag({ path: process.env.AXE_SCRIPT });
          const a = await p.evaluate(async () => {
            const r = await axe.run(document, {
              runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice'] },
            });
            return {
              violations: r.violations.map((v) => ({
                id: v.id,
                impact: v.impact,
                nodes: v.nodes.map((n) => ({ target: n.target, summary: n.failureSummary })),
              })),
              incomplete: r.incomplete.map((v) => v.id),
            };
          });
          result.axe = a;
        }
        report.routes.push({ engine, width, path, status: response.status(), ...result });
        save();
        if (
          [390, 1440].includes(width) &&
          (path === '/' ||
            path === '/articles/kak-vyuchit-turetskiy' ||
            path === '/policy' ||
            path === '/legal')
        )
          await p.screenshot({
            path: `${out}/${engine}-${path === '/' ? 'homepage' : path.split('/').at(-1)}-${width}.png`,
            fullPage: true,
          });
      }
      await p.goto(base, { waitUntil: 'networkidle' });
      // Keyboard and native disclosure behavior.
      await p.keyboard.press(engine === 'webkit' ? 'Alt+Tab' : 'Tab');
      assert.match(await p.locator(':focus').innerText(), /К содержимому/);
      await p.keyboard.press('Enter');
      const summary = p.locator('#faq summary').first();
      await summary.focus();
      await p.keyboard.press('Enter');
      assert.equal(await summary.evaluate((e) => e.parentElement.open), true);
      await p.keyboard.press('Enter');
      await p.locator('#tab-mini').focus();
      await p.keyboard.press('ArrowRight');
      assert.equal(await p.locator('#tab-individual').getAttribute('aria-selected'), 'true');
      await p.keyboard.press('Home');
      await p.locator('[data-review="1"]').first().click();
      assert.equal(await p.locator('#review-dialog').evaluate((e) => e.open), true);
      await p.keyboard.press('Escape');
      assert.equal(await p.locator('#review-dialog').evaluate((e) => e.open), false);
      await p.waitForFunction(
        () => document.activeElement === document.querySelector('[data-review="1"]')
      );
      assert.equal(
        await p
          .locator('[data-review="1"]')
          .first()
          .evaluate((e) => e === document.activeElement),
        true
      );
      if (width <= 900) {
        const menu = p.getByRole('button', { name: 'Открыть меню' });
        await menu.click();
        assert.equal(await p.locator('#navigation').isVisible(), true);
        await p.waitForFunction(
          () => document.activeElement === document.querySelector('#navigation a')
        );
        await p.keyboard.press('Escape');
        assert.equal(await p.locator('#navigation').isVisible(), false);
        assert.equal(await menu.evaluate((e) => document.activeElement === e), true);
        await p.goto(base + '/articles');
        await menu.click();
        await p.locator('#navigation').getByRole('link', { name: 'Обучение', exact: true }).click();
        await p.waitForURL('**/#formats');
        assert.equal(await p.locator('#navigation').isVisible(), false);
      }
      await p.locator('#submit-button').click();
      assert.equal(await p.locator('#name').getAttribute('aria-invalid'), 'true');
      assert.equal(await p.locator('#name').evaluate((e) => document.activeElement === e), true);
      assert.deepEqual(unwanted, [], 'analytics requested without consent');
      assert.deepEqual(errors, [], `${engine} runtime/console errors`);
      report.interactions.push({
        engine,
        width,
        menu: true,
        faq: true,
        pricingTabs: true,
        reviewDialog: true,
        emptyFormValidation: true,
        errors,
        analyticsRequests: unwanted,
      });
      save();
      await context.close();
    }
    // Consent lifecycle, reload persistence and revocation; all trackers are local stubs.
    const c = await b.newContext({ viewport: { width: 390, height: 844 } });
    const requested = [];
    await c.route(analytics, (r) => {
      requested.push(r.request().url());
      return r.fulfill({ body: '', contentType: 'text/javascript' });
    });
    await c.route('**/api/airtable', (r) => r.abort());
    const p = await c.newPage();
    await p.goto(base, { waitUntil: 'networkidle' });
    assert.deepEqual(requested, []);
    await p.getByRole('button', { name: 'Отклонить', exact: true }).click();
    assert.equal(await p.evaluate(() => localStorage.getItem('cookie-consent')), 'declined');
    await p.reload({ waitUntil: 'networkidle' });
    assert.equal(await p.locator('.cookie-banner').count(), 0);
    assert.deepEqual(requested, []);
    await p.getByRole('button', { name: 'Настройки cookies', exact: true }).click();
    await p.getByRole('button', { name: 'Принять', exact: true }).click();
    await p.waitForTimeout(800);
    assert(requested.some((u) => u.includes('mc.yandex')));
    assert(requested.some((u) => u.includes('_vercel') || u.includes('va.vercel')));
    const acceptedRequests = [...requested];
    await p.reload({ waitUntil: 'networkidle' });
    assert.equal(await p.locator('.cookie-banner').count(), 0);
    await p.getByRole('button', { name: 'Настройки cookies', exact: true }).click();
    requested.length = 0;
    await Promise.all([
      p.waitForNavigation({ waitUntil: 'networkidle' }),
      p.getByRole('button', { name: 'Отклонить', exact: true }).click(),
    ]);
    assert.deepEqual(requested, []);
    assert.equal(await p.locator('#yandex-metrika').count(), 0);
    report.consent.push({
      engine,
      initialRequests: 0,
      declinePersists: true,
      acceptLoadsBoth: acceptedRequests,
      revokeStopsBoth: true,
    });
    await c.close();
    const blocked = await b.newContext();
    await blocked.addInitScript(() => {
      Object.defineProperty(window, 'localStorage', {
        get() {
          throw new Error('Storage disabled');
        },
      });
    });
    const q = await blocked.newPage();
    const blockedErrors = [];
    q.on('pageerror', (e) => blockedErrors.push(e.message));
    const blockedRequests = [];
    await blocked.route(analytics, (r) => {
      blockedRequests.push(r.request().url());
      return r.abort();
    });
    await q.goto(base, { waitUntil: 'networkidle' });
    await q.getByRole('button', { name: 'Принять', exact: true }).click();
    await q.waitForTimeout(200);
    assert.deepEqual(blockedErrors, []);
    assert.deepEqual(blockedRequests, []);
    await blocked.close();
    await b.close();
    save();
    console.log(engine, 'complete');
  }
  save();
  console.log('QA passed', report.routes.length, 'route/viewport combinations');
})().catch((e) => {
  report.errors.push(e.stack);
  save();
  console.error(e);
  process.exit(1);
});
