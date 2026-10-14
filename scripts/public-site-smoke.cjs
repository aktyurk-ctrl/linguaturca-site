/* Public-site smoke and performance checks; never sends a real lead. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const base = process.env.BASE_URL || 'http://127.0.0.1:3015';
const baseline = process.env.BASELINE_URL || 'http://127.0.0.1:3014';
const out = process.env.QA_EVIDENCE_DIR || 'docs/public-site-polish/evidence';
const report = {
  endpoints: [],
  textPreservation: [],
  links: [],
  performance: [],
  formUi: {},
  consent: {},
};
(async () => {
  for (const [path, destination] of [
    ['/blog', '/articles'],
    ['/privacy', '/policy'],
    ['/offer', '/legal'],
    ['/blog/kak-vyuchit-turetskiy', '/articles/kak-vyuchit-turetskiy'],
  ]) {
    const r = await fetch(base + path, { redirect: 'manual' });
    assert.equal(r.status, 308);
    assert.equal(r.headers.get('location'), destination);
    report.endpoints.push({ path, status: r.status, destination });
  }
  for (const path of [
    '/robots.txt',
    '/sitemap.xml',
    '/og',
    '/favicon/site.webmanifest',
    '/favicon/favicon.ico',
    '/favicon/favicon-32x32.png',
    '/favicon/favicon-16x16.png',
    '/favicon/apple-touch-icon.png',
    '/favicon/android-chrome-192x192.png',
    '/favicon/android-chrome-512x512.png',
  ]) {
    const r = await fetch(base + path);
    assert.equal(r.status, 200);
    report.endpoints.push({ path, status: r.status, type: r.headers.get('content-type') });
    if (path === '/og') fs.writeFileSync(out + '/og.png', Buffer.from(await r.arrayBuffer()));
    if (path === '/sitemap.xml') {
      const s = await r.text();
      assert.equal((s.match(/<loc>/g) || []).length, 5);
      assert(!s.includes('example'));
      assert(!s.includes('/api/'));
    }
    if (path === '/robots.txt') {
      const s = await r.text();
      assert(s.includes('Disallow: /api/'));
      assert(s.includes('https://linguaturca.ru/sitemap.xml'));
    }
  }
  const b = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await b.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
  });
  await context.addInitScript(() => localStorage.setItem('cookie-consent', 'declined'));
  await context.route(/mc\.yandex|_vercel\/insights|va\.vercel/, (r) =>
    r.fulfill({ body: '', contentType: 'text/javascript' })
  );
  await context.route('**/api/airtable', (r) => r.abort());
  const p = await context.newPage();
  const routes = [
    '/',
    '/articles',
    '/articles/kak-vyuchit-turetskiy',
    '/articles/turetskiy-yazyk-s-nulya',
    '/articles/turetskiy-dlya-pereezda',
    '/policy',
    '/legal',
  ];
  const internalLinks = new Map();
  for (const path of routes) {
    await p.goto(base + path, { waitUntil: 'networkidle' });
    const links = await p
      .locator('a[href]')
      .evaluateAll((es) => es.map((e) => ({ href: e.href, label: e.textContent })));
    for (const link of links)
      if (link.href.startsWith(base)) internalLinks.set(link.href, link.label);
    const json = await p.locator('script[type="application/ld+json"]').allTextContents();
    for (const item of json) JSON.parse(item);
    if (path.startsWith('/articles/')) {
      const article = json.map((s) => JSON.parse(s)).find((s) => s['@type'] === 'Article');
      assert.equal(article.headline, await p.locator('h1').innerText());
      assert(!article.datePublished && !article.aggregateRating);
    }
    if (path === '/policy' || path === '/legal')
      assert.match(await p.locator('meta[name="robots"]').getAttribute('content'), /noindex/);
    if (path !== '/') {
      const current = await p.locator('.content-container').evaluate((e) => {
        e.querySelector('.breadcrumbs')?.remove();
        e.querySelectorAll('script').forEach((s) => s.remove());
        return e.textContent.replace(/\s+/g, ' ').trim();
      });
      await p.goto(baseline + path, { waitUntil: 'networkidle' });
      const original = await p
        .locator('main .mx-auto')
        .evaluate((e) => e.textContent.replace(/\s+/g, ' ').trim());
      assert.equal(current, original, `Text changed on ${path}`);
      report.textPreservation.push({ path, identical: true });
    }
  }
  for (const [href, label] of internalLinks) {
    const url = new URL(href);
    await p.goto(url.origin + url.pathname, { waitUntil: 'domcontentloaded' });
    const response = await p.request.get(url.origin + url.pathname);
    assert.equal(response.status(), 200);
    if (url.hash)
      assert(
        await p.locator(`[id=${JSON.stringify(decodeURIComponent(url.hash.slice(1)))}]`).count(),
        href
      );
    report.links.push({ path: url.pathname + url.hash, label, status: response.status() });
  }
  // Only the UI is exercised: both outcomes below are fulfilled locally by Playwright.
  for (const outcome of ['error', 'success']) {
    await p.goto(base);
    await p.route('**/api/airtable', (r) =>
      r.fulfill({
        status: outcome === 'success' ? 200 : 503,
        contentType: 'application/json',
        body: JSON.stringify({ success: outcome === 'success' }),
      })
    );
    await p.locator('#name').fill('QA');
    await p.locator('#phone').fill('+70000000000');
    await p.locator('#submit-button').click();
    await p.locator(`#form-status[data-status="${outcome}"]`).waitFor();
    assert.equal(
      await p.locator('#form-status').evaluate((e) => e === document.activeElement),
      true
    );
    assert.equal(
      await p.locator('#form-status').getAttribute('role'),
      outcome === 'error' ? 'alert' : 'status'
    );
    if (outcome === 'error') assert.equal(await p.locator('#name').inputValue(), 'QA');
    report.formUi[outcome] = {
      mocked: true,
      focusOnAnnouncement: true,
      role: outcome === 'error' ? 'alert' : 'status',
    };
    await p.unroute('**/api/airtable');
  }
  await context.close();
  // Actual tracker scripts remain intercepted. A storage event must disable a second tab.
  const consent = await b.newContext();
  await consent.route(/mc\.yandex|_vercel\/insights|va\.vercel/, (r) =>
    r.fulfill({ body: '', contentType: 'text/javascript' })
  );
  const a = await consent.newPage();
  await a.goto(base);
  await a.getByRole('button', { name: 'Принять', exact: true }).click();
  const other = await consent.newPage();
  await other.goto(base);
  await other.locator('#yandex-metrika').waitFor({ state: 'attached' });
  await a.getByRole('button', { name: 'Настройки cookies', exact: true }).click();
  await a.getByRole('button', { name: 'Отклонить', exact: true }).click();
  await other.waitForTimeout(500);
  assert.equal(await other.evaluate(() => localStorage.getItem('cookie-consent')), 'declined');
  assert.equal(await other.locator('#yandex-metrika').count(), 0);
  report.consent.crossTabRevocation = true;
  await consent.close();
  for (const width of [390, 1440])
    for (let run = 1; run <= 3; run++) {
      const c = await b.newContext({ viewport: { width, height: 1000 } });
      await c.addInitScript(() => {
        localStorage.setItem('cookie-consent', 'declined');
        window.__metrics = { cls: 0, lcp: 0 };
        new PerformanceObserver((l) => {
          for (const e of l.getEntries()) if (!e.hadRecentInput) window.__metrics.cls += e.value;
        }).observe({ type: 'layout-shift', buffered: true });
        new PerformanceObserver((l) => {
          for (const e of l.getEntries()) window.__metrics.lcp = e.startTime;
        }).observe({ type: 'largest-contentful-paint', buffered: true });
      });
      const page = await c.newPage();
      await page.goto(base, { waitUntil: 'networkidle' });
      await page.waitForTimeout(400);
      const metrics = await page.evaluate(() => ({
        ...window.__metrics,
        load: performance.getEntriesByType('navigation')[0].loadEventEnd,
        resources: performance
          .getEntriesByType('resource')
          .map((r) => ({
            name: r.name.replace(location.origin, ''),
            bytes: r.encodedBodySize,
            type: r.initiatorType,
          })),
        scripts: [...document.scripts].map((s) => s.src).filter(Boolean),
      }));
      assert(!metrics.scripts.some((s) => /metrika|insights/.test(s)));
      report.performance.push({ width, run, ...metrics });
      await c.close();
    }
  await b.close();
  fs.writeFileSync(out + '/smoke-performance.json', JSON.stringify(report, null, 2));
  console.log('Smoke, text preservation, mock form UI, cross-tab consent and performance passed');
})().catch((e) => {
  fs.writeFileSync(
    out + '/smoke-performance.json',
    JSON.stringify({ ...report, error: e.stack }, null, 2)
  );
  console.error(e);
  process.exit(1);
});
