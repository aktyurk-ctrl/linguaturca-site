# LinguaTurca — Школа турецкого языка

Next.js 16.4.0 (App Router), React 19.3.0, TypeScript и Tailwind CSS 3.

## Установка и запуск

Поддерживается Node.js **24.x LTS**; проверенная локальная версия **24.19.0**
указана в `.nvmrc`. Менеджер пакетов — **npm 11.21.0**. Единственный lockfile —
`package-lock.json`; храните его в Git вместе с `package.json`.

```sh
nvm install
nvm use
npm install --global npm@11.21.0
npm ci --include=dev
npm run dev
```

Если Node.js установлен без nvm, установите Node.js 24.x своим способом.
Dev-сервер доступен на http://localhost:3000.
`npm ci` выполняет чистую установку зафиксированных зависимостей, не обновляя
lockfile. `npm install` используйте только при намеренном изменении зависимостей.
Не включайте `legacy-peer-deps` и не применяйте `npm audit fix --force`.
`node project-fix.mjs` также переустанавливает зависимости через `npm ci`, сохраняя lockfile.

## Проверки и production-сборка

```sh
npm run typecheck
npm run lint
npm run build
npm start
```

- `typecheck` генерирует типы маршрутов через `next typegen`, затем запускает `tsc --noEmit`;
  работает и до первой сборки. Кеш TypeScript хранится в игнорируемой `.next/cache`.
- `lint` запускает ESLint напрямую с flat config. Next.js 16 не запускает lint при сборке.
- `build` создаёт production-сборку через поддерживаемый Webpack; `dev` также использует Webpack.
  Это сохраняет существующий порядок обработки CSS: Turbopack отвергает импорт UI-kit после директив Tailwind.
  `start` запускает production-сборку локально.
- При сборке нужен доступ к Google Fonts: текущие Inter и Manrope загружаются через `next/font/google`.

## Переменные окружения

Для обработки заявок создайте `.env.local` (не добавляйте секреты в Git):

```dotenv
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_TABLE_NAME=
SITE_URL=https://your-domain.example
```

Первые три переменные использует `POST /api/airtable`. Схема и настройка Airtable
описаны в [AIRTABLE_SETUP.md](AIRTABLE_SETUP.md). Сборка не требует ключей Airtable,
но реальная отправка формы требует всех трёх переменных. SMTP и webhook текущим
обработчиком не используются.

`SITE_URL` используется при ручной генерации sitemap/robots после сборки:

```sh
npm run build
npm run sitemap
```

Перед генерацией задайте реальный адрес сайта: резервное значение в конфигурации —
`https://linguaturca.example.com`. Генерация не запускается автоматически.

## Страницы и данные

Активный App Router расположен в `app/`: главная, `/articles`, три страницы статей,
`/policy`, `/legal` и `POST /api/airtable`. Статьи сейчас написаны в TSX, автоматического
импорта из `content/blog` нет. Данные преподавателей находятся в `src/data/teachers.ts`.
При наличии корневой `app/` каталог `src/app/` не является активным деревом маршрутов.

## Vercel

Репозиторий подключён к Vercel через GitHub. Локальный `vercel.json` задаёт:

- Framework: `nextjs`, Output Directory: `.next`.
- Install Command: `npx --yes npm@11.21.0 ci --include=dev`.
- Build Command: `npm run typecheck && npm run lint && npm run build`.
- Node.js: `24.x` через `engines.node` в `package.json`.

Точная версия npm в Install Command не зависит от версии npm образа Vercel.
`--include=dev` гарантирует наличие TypeScript и ESLint во время сборки.
Ключи Airtable задаются в Environment Variables проекта Vercel.

Production Branch задаётся **в настройках проекта Vercel**, а не через
`git.productionBranch` в `vercel.json`. При обновлении 13.10.2026 доступ к настройкам
аккаунта отсутствовал, поэтому фактическая production-ветка **не подтверждена**.
Исходная локальная ветка `main` сама по себе не доказывает эту привязку.
Проверьте её в Settings → Environments → Production → Branch Tracking.

## Основание обновления

Версии проверены 13.10.2026: [Next.js 16.4](https://nextjs.org/blog/next-16-4),
[политика поддержки](https://nextjs.org/support-policy),
[миграция 14 → 15](https://nextjs.org/docs/app/guides/upgrading/version-15),
[миграция 15 → 16](https://nextjs.org/docs/app/guides/upgrading/version-16).
Next.js и eslint-config-next зафиксированы на 16.4.0, React/React DOM и их типы — на 19.3.0.
ESLint 9.39.5 выбран по peer-ограничениям `eslint-plugin-react` (ESLint 10 пока не поддерживается этим плагином).
Удалён `experimental.esmExternals`; разрешены уже используемые качества изображений
70/75/85/90 и сохранено поведение навигации при глобальном `scroll-behavior: smooth`.

Правила ESLint не отключены целиком: сохранена прежняя политика для `<img>`, а для
двух существующих эффектов в CookieConsent и LeadModal добавлены точечные пояснённые
исключения `set-state-in-effect`, чтобы не менять поведение баннера и сброса формы.

## Отчёт проверки обновления — 13.10.2026

Исторический снимок первого этапа. Итоговые зависимости и актуальный audit после
доработки описаны в [отчёте по зависимостям](docs/dependency-audit/README.md).

Исходное состояние: ветка `main`, коммит `926d2d0` (`Image optimization`), рабочее
дерево чистое. Работа выполнена в `codex/next-npm-upgrade`; пользовательских
незакоммиченных изменений не было. Push и публикация на Vercel не выполнялись.

| Компонент | До (package-lock.json) | После |
| --- | --- | --- |
| Node.js | Не закреплён; локальные проверки на 24.19.0 | 24.x; `.nvmrc` 24.19.0 |
| Менеджер пакетов | packageManager: pnpm 9.0.0; Vercel: npm install | npm 11.21.0, npm ci |
| Next.js | 14.2.5 | 16.4.0 |
| React / React DOM | 18.3.1 | 19.3.0 |
| ESLint | 8.57.0 | 9.39.5 |
| eslint-config-next | 14.2.33 | 16.4.0 |
| @types/react / @types/react-dom | 18.3.26 / 18.3.7 | 19.3.0 / 19.3.0 |
| @types/node | 20.19.19 | 24.19.2 |
| TypeScript | 5.9.3 | 5.9.3 |

До обновления `npm ci` прошёл с исходной настройкой `legacy-peer-deps=true`
(инструменты проверки: Node 24.19.0, временно подготовленный npm 12.2.0).
Скриптов typecheck/lint не было: напрямую выполнены `tsc --noEmit --incremental false`
и `next lint` — оба успешно. `npm run build` также прошёл, все исходные маршруты построены.
Версия Node.js на действующем Vercel deployment неизвестна.

После обновления в отдельной новой копии, без `node_modules` и `.next`, на
Node 24.19.0 / npm 11.21.0 успешно выполнены:

1. Точная Install Command из `vercel.json`: `npx --yes npm@11.21.0 ci --include=dev`.
2. `npm run typecheck` до первой сборки.
3. `npm run lint` — без ошибок и предупреждений.
4. `npm run build`.
5. `npm ls --all` — без missing/invalid зависимостей.
6. `SITE_URL=https://example.invalid npm run sitemap` — только во временной копии.

Чистая установка не изменила `package-lock.json`:
SHA-256 `479b76fd1788b448cc4361ab997013a836239160798efb0beed4a9acc1263717`.
Переходная установка поверх старых React 18 пакетов выдала предупреждения ERESOLVE;
в итоговой чистой установке таких предупреждений нет. Обход peer-проверок отключён,
`strict-peer-deps=true`, overrides удалены.

На локальном production-сервере все семь страниц ответили HTTP 200. Их видимый
HTML-текст совпал с исходной сборкой. Все исходные маршруты сохранены; Next.js 16
добавил внутренний `/_global-error/page`. `GET /api/airtable` возвращает 405,
пустой `POST` — прежний JSON с ошибкой и статусом 400. Оптимизация изображения
проверена для качеств 70, 75, 85 и 90 — HTTP 200.
В браузере проверены открытие формы, включение кнопки после заполнения обязательных
полей и сброс полей при повторном открытии; ошибок JavaScript не обнаружено.
Реальные заявки в Airtable не отправлялись.

Цены, тексты, CSS, изображения, схема Airtable и код API сохранены. Изменения
компонентов ограничены двумя ссылками `Link`, атрибутом плавной прокрутки и
комментариями точечных исключений lint.

### Оставшиеся ограничения

- Доступа к настройкам Vercel нет: production-ветка, переменные аккаунта и реальная
  облачная сборка не подтверждены. Локальная конфигурация и её команды проверены.
- Успешная запись в Airtable не проверялась: для этого нужны реальные ключи и тестовая
  заявка. Контракт ошибки и сохранность обработчика проверены.
- npm audit сообщает **29 уязвимостей**: 1 low, 4 moderate, 22 high, 2 critical
  (до обновления — 41). Critical относятся к оставленным Vitest/tinypool;
  другие затрагивают в том числе цепочки Tailwind, next-sitemap и инструментов разработки.
  Массовое обновление этих зависимостей не входит в эту миграцию; audit fix не запускался.
- ESLint 9.39.5 помечен npm как неподдерживаемый, но ESLint 10 конфликтует с текущим
  peer-диапазоном eslint-plugin-react из официальной конфигурации Next.js.
- Сохраняются предупреждение об устаревшей базе Browserslist и уведомления npm о
  lifecycle-скриптах esbuild, fsevents и unrs-resolver без явной политики allowScripts.
  Они не препятствуют указанным проверкам.
- Сборка требует сети для существующих Google Fonts. Turbopack не включён из-за
  несовместимого порядка CSS-импорта; используется поддерживаемый Webpack.

## Доработка audit — 13.10.2026

Удалены пять неиспользуемых тестовых зависимостей и `vitest/globals`. Адресно
обновлены совместимые транзитивные glob-пакеты, Browserslist и source-map-js.
Полное дерево: **29 → 11** замечаний, production: **13 → 8**, critical: **2 → 0**.
Остаток связан с braces без исправленного релиза и CSS-парсером, чей фикс требует
согласованной миграции потребителей. Чистая установка, typecheck, lint и production
build прошли; lockfile не изменился при установке. Next.js, React, npm, Webpack,
дизайн, содержимое страниц и API сохранены.

[Полный разбор: версии, цепочки, advisories, применимость, проверки и четыре JSON-снимка](docs/dependency-audit/README.md).
