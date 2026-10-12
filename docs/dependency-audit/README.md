# Разбор зависимостей LinguaTurca — 13.10.2026

Ветка: `codex/next-npm-upgrade`. Исходная точка доработки — `436ee9b`
(отдельно сохранён предыдущий этап миграции). Все изменения этой доработки относятся
к зависимостям, TypeScript types и документации. Next.js 16.4.0, React 19.3.0,
npm 11.21.0, Node 24.19.0 и Webpack сохранены. Исходники сайта, CSS, контент и API не изменялись.

## Снимки npm audit

Полные JSON без фильтра по severity: [до, полное дерево](before-full.json),
[до, production](before-production.json), [после, полное дерево](after-full.json),
[после, production](after-production.json).

Команды: `npm audit --include=dev --json` и `npm audit --omit=dev --json`.
Ненулевой exit code audit ожидаем при ненулевом количестве замечаний; ошибка сети не считается отчётом.
`--omit=dev` — классификация зависимостей npm, **не доказательство runtime-достижимости**:
Tailwind, PostCSS и next-sitemap сейчас находятся в dependencies, хотя используются при сборке.
Пакеты намеренно не переносились в devDependencies ради улучшения счётчика.
Числа npm включают родительские пакеты с транзитивной уязвимостью, а не только уникальные advisories.

| Дерево | До: low / moderate / high / critical | После: low / moderate / high / critical | Всего |
| --- | --- | --- | --- |
| Полное | 1 / 4 / 22 / 2 | 0 / 3 / 8 / 0 | 29 → 11 |
| Production | 0 / 1 / 12 / 0 | 0 / 2 / 6 / 0 | 13 → 8 |

## Выполненные изменения

Удалены неиспользуемые прямые зависимости: `vitest`, `@testing-library/react`,
`@testing-library/jest-dom`, `jest-environment-jsdom`, `vite-tsconfig-paths`.
Удалена ссылка `vitest/globals` из `tsconfig.json`. Проверены файлы тестов,
импорты, package scripts, конфиги и tsconfig: runner, тесты и setup отсутствуют.
`src/test/page.tsx` — демонстрационная React-страница Telegram, не unit-тест; она сохранена.
Из lockfile вместе с тестовым стеком ушли tinypool, Vite, Rollup, esbuild, jsdom,
form-data, ws и другие его транзитивные зависимости.

Штатные команды изменения дерева (без force, overrides и обхода peer-проверок):

```sh
npm uninstall --save-dev vitest @testing-library/react @testing-library/jest-dom jest-environment-jsdom vite-tsconfig-paths
npm update brace-expansion browserslist glob minimatch picomatch source-map-js postcss-selector-parser
```

Обновления адресные, в разрешённых родителями диапазонах:

| Пакет | До | После |
| --- | --- | --- |
| brace-expansion | 1.1.12 / 2.0.2 | 1.1.21 / 2.1.7 |
| browserslist | 4.26.3 | 4.29.3 |
| glob | 10.3.10 | 10.5.0 |
| minimatch (ветка glob) | 9.0.5 | 9.0.9 |
| picomatch | 2.3.1 / 4.0.3 | 2.3.2 / 4.0.7 |
| source-map-js | 1.2.1 | 1.2.2 |
| postcss-selector-parser (Tailwind/postcss-nested) | 6.1.2 | 6.1.4 |

Зависимые базы Browserslist, jackspeak и размещение совместимых ANSI-пакетов обновлены npm
в рамках этих адресных операций. Прямые версии остальных библиотек не обновлялись.
`postcss-selector-parser@6.1.4` закрывает рекурсивный дефект ветки 6.1, но не новый
quadratic-time advisory: он остаётся и явно описан ниже. Typography по-прежнему
фиксирует собственный parser 6.0.10; проверенный patch 0.5.20 сохраняет эту фиксацию.

## Оставшиеся проблемы и условия проявления

### High: braces 3.0.3

[GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm):
глубоко вложенный brace-паттерн может исчерпать стек и завершить Node-процесс.
В GitHub advisory исправленной версии нет; npm latest также 3.0.3.
Восемь high в полном дереве (шесть в production) — этот пакет и его родители:
`braces`, `chokidar`, `micromatch`, `fast-glob`, `tailwindcss`, `next-sitemap`,
`@next/eslint-plugin-next`, `eslint-config-next`.

Конкретные пути вызова:

- Tailwind `lib/lib/content.js` берёт glob-шаблоны из `tailwind.config.ts`.
  В проекте это четыре статических шаблона исходников. Chokidar использует braces
  при разборе путей наблюдения; dev/watch и сборка из недоверенной конфигурации могут пострадать.
- Next ESLint plugin `dist/utils/get-root-dirs.js` запускает fast-glob для
  `settings.next.rootDir`; эта настройка в текущем проекте отсутствует.
- next-sitemap `dist/esm/parsers/manifest-parser.js` вызывает fast-glob для
  `${exportFolder}/**/*.html` только в `output=export`. Текущий конфиг не использует этот режим.
- Страницы и `POST /api/airtable` не импортируют эти библиотеки и не передают им
  поля запроса. API пересылает JSON в Airtable через встроенный fetch. Это анализ
  конкретного потока данных, а не вывод из поля devDependencies.

**Решение за пределами небольшой доработки:** принять исправленный upstream-релиз
braces после появления либо отдельно мигрировать потребителей glob. Tailwind 4
убирает старую цепочку, но требует миграции PostCSS/CSS и проверки дизайна; отдельно
потребуются обновления next-sitemap и Next ESLint plugin. Обновление только Tailwind
не уберёт оставшиеся копии braces. Предложенные audit откаты eslint-config-next до
14.2.35 и next-sitemap до 4.0.9 не применены: это не проверенное исправление текущего стека.
До миграции не передавать внешние glob-шаблоны в сборку/watch/lint; недоверенные PR
собирать с лимитами времени/памяти и без production-секретов. Эти ограничения CI
здесь не настраивались — доступа к облачной среде нет.

### Moderate: postcss-selector-parser 6.0.10 / 6.1.4

[GHSA-rj75-hqrm-r3gf](https://github.com/advisories/GHSA-rj75-hqrm-r3gf):
длинный плоский selector может вызвать квадратичное время разбора и загрузить CPU.
Исправление — **7.1.6**; опубликованного исправления этой проблемы в 6.x нет.
Родительские записи: `@tailwindcss/typography` и `postcss-nested`; Tailwind уже
учтён с более высокой severity из-за braces. Поэтому три moderate в полном дереве,
два в production. Появление отдельной записи postcss-nested после обновления —
пересчёт транзитивных диапазонов npm, не новая отдельная уязвимость.

Используется в Tailwind генерации/обработке `@apply`, postcss-nested и typography.
Текущие CSS и классы — исходники репозитория, не пользовательские CSS из HTTP-запросов;
runtime CSS-компилятора, загрузки пользовательских стилей или онлайн-playground нет.
Недоверенный CSS/класс/плагин, попавший в собираемый PR или зависимости, остаётся
риском отказа сборки/локального dev-процесса. Обычная сборка доверенных исходников
не соответствует условиям эксплуатации из advisory.

**Предлагаемое решение:** upstream backport в совместимую ветку 6.x или согласованная
миграция Tailwind/PostCSS/typography на parser >=7.1.6 с проверкой CSS. Насильственный
override major 7 поверх зависимостей на 6.x не применён. Ограничение внешних selectors
по размеру применимо к будущему сервису обработки пользовательского CSS, но такого
пути сейчас нет; менять формы/API ради этого не нужно.

## High/critical исходного дерева: версии, цепочки, исправления

Для каждой записи приведены кратчайшие найденные цепочки от прямых зависимостей
(при нескольких копиях указаны все установленные версии). `Удалён` означает,
что пакет отсутствует в итоговом lockfile. Ссылки относятся к исходным advisories;
у родителей без собственного advisory приведены уязвимости нижележащих пакетов.
Версия исправления ниже относится к пакету из advisory, а не автоматически к его родителю.

### @jest/environment — high

Версии, помеченные audit в исходном дереве: **29.7.0**.

Установлено до: **29.7.0**. После: **удалён**.

- `jest-environment-jsdom@29.7.0 → @jest/environment@29.7.0`

Тесты: промежуточное звено Jest → fake-timers → jest-message-util → micromatch. Удалено вместе с неиспользуемой средой.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### @jest/fake-timers — high

Версии, помеченные audit в исходном дереве: **29.7.0**.

Установлено до: **29.7.0**. После: **удалён**.

- `jest-environment-jsdom@29.7.0 → @jest/fake-timers@29.7.0`

Тесты: транзитивный риск разбора glob через jest-message-util. Удалено; собственный таймер не является отдельной RCE.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### @next/eslint-plugin-next — high

Версии, помеченные audit в исходном дереве: **16.4.0**.

Установлено до: **16.4.0**. После: **16.4.0**.

- `eslint-config-next@16.4.0 → @next/eslint-plugin-next@16.4.0`

Lint: fast-glob вызывается для settings.next.rootDir. В текущем eslint.config.mjs rootDir не задан: используется context.cwd. Недоверенная glob-конфигурация может вызвать DoS.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### brace-expansion — high

Версии, помеченные audit в исходном дереве: **1.1.12, 2.0.2**.

Установлено до: **1.1.12, 2.0.2, 5.0.12**. После: **1.1.21, 2.1.7, 5.0.12**.

- `tailwindcss@3.4.18 → sucrase@3.35.0 → glob@10.3.10 → minimatch@9.0.5 → brace-expansion@2.0.2`
- `eslint@9.39.5 → minimatch@3.1.5 → brace-expansion@1.1.12`
- `eslint-config-next@16.4.0 → eslint-plugin-import@2.32.0 → minimatch@3.1.5 → brace-expansion@1.1.12`

Lint/сборка: обработка glob-шаблонов из конфигурации и путей. Для DoS нужны вредоносные скобочные шаблоны; пользовательские поля Airtable в эти вызовы не передаются. Исправлены ветки 1 и 2.

- [GHSA-3jxr-9vmj-r5cp](https://github.com/advisories/GHSA-3jxr-9vmj-r5cp): brace-expansion 5.0.7, brace-expansion 1.1.16, brace-expansion 2.1.2.
- [GHSA-6j4f-fj2g-mc7p](https://github.com/advisories/GHSA-6j4f-fj2g-mc7p): brace-expansion 5.0.10, brace-expansion 2.1.5, brace-expansion 1.1.19.
- [GHSA-f886-m6hf-6m8v](https://github.com/advisories/GHSA-f886-m6hf-6m8v): brace-expansion 5.0.5, brace-expansion 2.0.3, brace-expansion 1.1.13.
- [GHSA-mh99-v99m-4gvg](https://github.com/advisories/GHSA-mh99-v99m-4gvg): brace-expansion 5.0.8, brace-expansion 2.1.3, brace-expansion 1.1.17.
- [GHSA-q2hr-2g5m-vwhr](https://github.com/advisories/GHSA-q2hr-2g5m-vwhr): brace-expansion 5.0.12, brace-expansion 2.1.7, brace-expansion 1.1.21.
- [GHSA-qhr7-859c-m2p7](https://github.com/advisories/GHSA-qhr7-859c-m2p7): brace-expansion 5.0.11, brace-expansion 2.1.6, brace-expansion 1.1.20.
- [GHSA-rgw5-rvv9-x895](https://github.com/advisories/GHSA-rgw5-rvv9-x895): brace-expansion 1.1.18, brace-expansion 2.1.4, brace-expansion 5.0.9.

### braces — high

Версии, помеченные audit в исходном дереве: **3.0.3**.

Установлено до: **3.0.3**. После: **3.0.3**.

- `next-sitemap@4.2.3 → fast-glob@3.3.3 → micromatch@4.0.8 → braces@3.0.3`
- `tailwindcss@3.4.18 → chokidar@3.6.0 → braces@3.0.3`
- `eslint-config-next@16.4.0 → @next/eslint-plugin-next@16.4.0 → fast-glob@3.3.1 → micromatch@4.0.8 → braces@3.0.3`
- `jest-environment-jsdom@29.7.0 → @jest/fake-timers@29.7.0 → jest-message-util@29.7.0 → micromatch@4.0.8 → braces@3.0.3`

Сборка/dev watcher/lint/sitemap: опасны глубоко вложенные brace-шаблоны. Подробнее — в разделе остаточных рисков.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### browserslist — high

Версии, помеченные audit в исходном дереве: **4.26.3**.

Установлено до: **4.26.3**. После: **4.29.3**.

- `autoprefixer@10.4.21 → browserslist@4.26.3`
- `eslint-config-next@16.4.0 → eslint-plugin-react-hooks@7.1.1 → @babel/core@7.29.7 → @babel/helper-compilation-targets@7.29.7 → browserslist@4.26.3`

Сборка через Autoprefixer, lint через Babel: отравленный browserslist-stats.json в дереве проекта может обрушить процесс; поток различных внешних запросов может раздувать кеш. Это риск CI, даже без runtime-импорта. Обновлено.

- [GHSA-73wf-gq98-2v4g](https://github.com/advisories/GHSA-73wf-gq98-2v4g): browserslist 4.28.7.
- [GHSA-c83g-rgw3-j3cx](https://github.com/advisories/GHSA-c83g-rgw3-j3cx): browserslist 4.28.7.

### chokidar — high

Версии, помеченные audit в исходном дереве: **3.6.0**.

Установлено до: **3.6.0**. После: **3.6.0**.

- `tailwindcss@3.4.18 → chokidar@3.6.0`

Dev/watch: наследует braces; вредоносные glob-пути наблюдения могут завершить Node-процесс. В проекте шаблоны заданы разработчиком.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### eslint-config-next — high

Версии, помеченные audit в исходном дереве: **16.4.0**.

Установлено до: **16.4.0**. После: **16.4.0**.

- `eslint-config-next@16.4.0`

Lint: наследует риск через @next/eslint-plugin-next → fast-glob → micromatch → braces; не отдельная уязвимость Next.js runtime.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### fast-glob — high

Версии, помеченные audit в исходном дереве: **3.3.1, 3.3.3**.

Установлено до: **3.3.1, 3.3.3**. После: **3.3.1, 3.3.3**.

- `next-sitemap@4.2.3 → fast-glob@3.3.3`
- `tailwindcss@3.4.18 → fast-glob@3.3.3`
- `eslint-config-next@16.4.0 → @next/eslint-plugin-next@16.4.0 → fast-glob@3.3.1`

Сборка/lint/sitemap: наследует braces через micromatch. Требуется недоверенный шаблон; не просто произвольное поле HTTP-запроса.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### form-data — high

Версии, помеченные audit в исходном дереве: **4.0.4**.

Установлено до: **4.0.4**. После: **удалён**.

- `jest-environment-jsdom@29.7.0 → jsdom@20.0.3 → form-data@4.0.4`

Тестовая среда jsdom: CRLF-инъекция требует передачи недоверенного имени поля/файла в multipart append. API сайта отправляет JSON через встроенный fetch, не этот пакет. Удалено с jsdom.

- [GHSA-hmw2-7cc7-3qxx](https://github.com/advisories/GHSA-hmw2-7cc7-3qxx): form-data 4.0.6.

### glob — high

Версии, помеченные audit в исходном дереве: **10.3.10**.

Установлено до: **10.3.10**. После: **10.5.0**.

- `tailwindcss@3.4.18 → sucrase@3.35.0 → glob@10.3.10`

CLI -c/--cmd с вредоносными именами файлов запускает shell-инъекцию. В проекте glob приходит через Tailwind → sucrase; CLI -c в scripts/исходниках отсутствует. Библиотечный API этим advisory не затронут; совместимое исправление всё равно установлено.

- [GHSA-5j98-mcp5-4vw2](https://github.com/advisories/GHSA-5j98-mcp5-4vw2): glob 10.5.0.

### jest-environment-jsdom — high

Версии, помеченные audit в исходном дереве: **29.7.0**.

Установлено до: **29.7.0**. После: **удалён**.

- `jest-environment-jsdom@29.7.0`

Тесты: риски наследуются из Jest и micromatch; тестовый runner не запускается проектом. Удалён сам пакет и его неиспользуемая цепочка.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### jest-message-util — high

Версии, помеченные audit в исходном дереве: **29.7.0**.

Установлено до: **29.7.0**. После: **удалён**.

- `jest-environment-jsdom@29.7.0 → @jest/fake-timers@29.7.0 → jest-message-util@29.7.0`

Тесты: обработка glob через micromatch; удалён с Jest. Непосредственного вызова из сайта нет.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### micromatch — high

Версии, помеченные audit в исходном дереве: **4.0.8**.

Установлено до: **4.0.8**. После: **4.0.8**.

- `next-sitemap@4.2.3 → fast-glob@3.3.3 → micromatch@4.0.8`
- `tailwindcss@3.4.18 → micromatch@4.0.8`
- `eslint-config-next@16.4.0 → @next/eslint-plugin-next@16.4.0 → fast-glob@3.3.1 → micromatch@4.0.8`
- `jest-environment-jsdom@29.7.0 → @jest/fake-timers@29.7.0 → jest-message-util@29.7.0 → micromatch@4.0.8`

Сборка/watch/lint: наследует braces. Опасны недоверенные glob-паттерны; исправленного braces сейчас нет.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### minimatch — high

Версии, помеченные audit в исходном дереве: **9.0.5**.

Установлено до: **10.2.6, 3.1.5, 9.0.5**. После: **10.2.6, 3.1.5, 9.0.9**.

- `tailwindcss@3.4.18 → sucrase@3.35.0 → glob@10.3.10 → minimatch@9.0.5`

Lint/сборка: специально составленные wildcard/globstar/extglob-паттерны приводят к ReDoS. В конфигурации проекта паттерны статические; ветка 9 обновлена без смены major.

- [GHSA-23c5-xmqv-rm74](https://github.com/advisories/GHSA-23c5-xmqv-rm74): minimatch 10.2.3, minimatch 9.0.7, minimatch 3.1.4.
- [GHSA-3ppc-4f35-3m26](https://github.com/advisories/GHSA-3ppc-4f35-3m26): minimatch 10.2.1, minimatch 9.0.6, minimatch 3.1.3.
- [GHSA-7r86-cg39-jmmj](https://github.com/advisories/GHSA-7r86-cg39-jmmj): minimatch 10.2.3, minimatch 9.0.7, minimatch 3.1.3.

### next-sitemap — high

Версии, помеченные audit в исходном дереве: **4.2.3**.

Установлено до: **4.2.3**. После: **4.2.3**.

- `next-sitemap@4.2.3`

Ручная генерация sitemap: fast-glob вызывается в режиме output=export для пути exportFolder. Текущий конфиг этот режим не включает; sitemap не является обработчиком HTTP. Пакет сохранён, риск наследуемый.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### picomatch — high

Версии, помеченные audit в исходном дереве: **2.3.1, 4.0.3**.

Установлено до: **2.3.1, 4.0.3**. После: **2.3.2, 4.0.7**.

- `next-sitemap@4.2.3 → fast-glob@3.3.3 → micromatch@4.0.8 → picomatch@2.3.1`
- `tailwindcss@3.4.18 → micromatch@4.0.8 → picomatch@2.3.1`
- `eslint-config-next@16.4.0 → eslint-import-resolver-typescript@3.10.1 → tinyglobby@0.2.15 → picomatch@4.0.3`
- `jest-environment-jsdom@29.7.0 → jest-util@29.7.0 → picomatch@2.3.1`

Сборка/watch/lint: ReDoS при передаче атакующим extglob-паттерна. Статические паттерны проекта не берутся из заявок; обновлены все установленные уязвимые ветки.

- [GHSA-3v7f-55p6-f55p](https://github.com/advisories/GHSA-3v7f-55p6-f55p): picomatch 4.0.4, picomatch 2.3.2.
- [GHSA-c2c7-rcm5-vvqj](https://github.com/advisories/GHSA-c2c7-rcm5-vvqj): picomatch 4.0.4, picomatch 2.3.2.

### rollup — high

Версии, помеченные audit в исходном дереве: **4.52.4**.

Установлено до: **4.52.4**. После: **удалён**.

- `vitest@2.1.9 → vite@5.4.20 → rollup@4.52.4`

Vite/тестовый стек: произвольная запись требует контроля имён выходных chunks/assets, CLI-входов или плагинов при запуске Rollup. Production-сборка использует Webpack. Удалён с Vite/Vitest.

- [GHSA-mw96-cpmx-2vgc](https://github.com/advisories/GHSA-mw96-cpmx-2vgc): rollup 4.59.0.

### source-map-js — high

Версии, помеченные audit в исходном дереве: **1.2.1**.

Установлено до: **1.2.1**. После: **1.2.2**.

- `next@16.4.0 → postcss@8.5.23 → source-map-js@1.2.1`
- `postcss@8.5.23 → source-map-js@1.2.1`
- `tailwindcss@3.4.18 → postcss@8.5.23 → source-map-js@1.2.1`
- `vitest@2.1.9 → vite@5.4.20 → postcss@8.5.23 → source-map-js@1.2.1`

Сборка PostCSS: вредоносная indexed sourcemap с огромными offset может блокировать event loop. Недоверенные CSS/source maps в CI значимы; пакет обновлён, не оправдывается только отсутствием runtime-импорта.

- [GHSA-68fv-2mgg-jv7q](https://github.com/advisories/GHSA-68fv-2mgg-jv7q): source-map-js 1.2.2.

### tailwindcss — high

Версии, помеченные audit в исходном дереве: **3.4.18**.

Установлено до: **3.4.18**. После: **3.4.18**.

- `tailwindcss@3.4.18`

Сборка/dev: реальные потребители glob и CSS-парсера. Источники и конфигурация из недоверенного PR могут вызвать DoS. HTTP-заявки не становятся Tailwind-шаблонами или CSS. Сохранена ветка 3, подробности ниже.

- [GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm): braces: исправления нет.

### tinypool — critical

Версии, помеченные audit в исходном дереве: **1.1.1**.

Установлено до: **1.1.1**. После: **удалён**.

- `vitest@2.1.9 → tinypool@1.1.1`

Тестовые worker-процессы: нужна предшествующая prototype pollution; execArgv/env или filename в run(task, options) могут направить выполнение в модуль атакующего. Риск машины разработчика/CI реален при запуске пула. Удалён вместе с Vitest.

- [GHSA-5gmw-xhrv-c9v3](https://github.com/advisories/GHSA-5gmw-xhrv-c9v3): tinypool 2.1.1.
- [GHSA-85c8-ppgw-ccpr](https://github.com/advisories/GHSA-85c8-ppgw-ccpr): tinypool 2.1.2.

### vite — high

Версии, помеченные audit в исходном дереве: **5.4.20**.

Установлено до: **5.4.20**. После: **удалён**.

- `vitest@2.1.9 → vite@5.4.20`

Dev-сервер Vite: обход fs.deny на Windows требует доступного сервера и чувствительного файла в разрешённых каталогах (NTFS/8.3 пути). Другие advisory затрагивают sourcemap paths и запуск редактора. Скрипт dev запускает Next/Webpack; Vite удалён.

- [GHSA-4w7w-66w2-5vf9](https://github.com/advisories/GHSA-4w7w-66w2-5vf9): vite 8.0.5, vite 7.3.2, vite 6.4.2.
- [GHSA-67mh-4wv8-2f99](https://github.com/advisories/GHSA-67mh-4wv8-2f99): esbuild 0.25.0.
- [GHSA-93m4-6634-74q7](https://github.com/advisories/GHSA-93m4-6634-74q7): vite 5.4.21.
- [GHSA-fx2h-pf6j-xcff](https://github.com/advisories/GHSA-fx2h-pf6j-xcff): vite 8.0.16, vite 7.3.5, vite 6.4.3, vite-plus 0.1.24.
- [GHSA-v6wh-96g9-6wx3](https://github.com/advisories/GHSA-v6wh-96g9-6wx3): launch-editor 2.14.1, vite 8.0.16, vite 7.3.5, vite 6.4.3, vite-plus 0.1.24.

### vitest — critical

Версии, помеченные audit в исходном дереве: **2.1.9**.

Установлено до: **2.1.9**. После: **удалён**.

- `vitest@2.1.9`

UI/API/Browser Mode: чтение файлов/выполнение кода при доступном UI/API, в частности на Windows или при api.host. Worker-риски дополнительно наследуются из tinypool. Проект не использует эти режимы; пакет удалён, а не признан безопасным из-за devDependencies.

- [GHSA-5gmw-xhrv-c9v3](https://github.com/advisories/GHSA-5gmw-xhrv-c9v3): tinypool 2.1.1.
- [GHSA-5xrq-8626-4rwp](https://github.com/advisories/GHSA-5xrq-8626-4rwp): vitest 4.1.0, vitest 3.2.6.
- [GHSA-82fw-gwwq-j7x9](https://github.com/advisories/GHSA-82fw-gwwq-j7x9): @vitest/mocker 4.1.11, vitest 4.1.11, vitest 5.0.0-rc.2, @vitest/mocker 5.0.0-rc.2.
- [GHSA-85c8-ppgw-ccpr](https://github.com/advisories/GHSA-85c8-ppgw-ccpr): tinypool 2.1.2.

### ws — high

Версии, помеченные audit в исходном дереве: **8.18.3**.

Установлено до: **8.18.3**. После: **удалён**.

- `jest-environment-jsdom@29.7.0 → jsdom@20.0.3 → ws@8.18.3`

jsdom в тестовой среде: сетевой peer может исчерпать память потоком мелких WebSocket-фрагментов; отсутствие серверного вызова в приложении не исправляет библиотеку. Удалена эта цепочка с jsdom. Внутренние vendored-копии Next не приравниваются к npm-пакету ws из этого отчёта.

- [GHSA-58qx-3vcg-4xpx](https://github.com/advisories/GHSA-58qx-3vcg-4xpx): ws 8.20.1.
- [GHSA-96hv-2xvq-fx4p](https://github.com/advisories/GHSA-96hv-2xvq-fx4p): ws 8.21.0.

## Дополнительные замечания низшей severity

Удаление тестового стека также убрало `@vitest/mocker`, `@tootallnate/once` и esbuild.
Это не объявление dev-инструментов безопасными: у esbuild был сценарий чтения
ответов локального сервера со сторонней страницы, у mocker — traversal при работе
с redirect-mock. Используемые команды сайта не запускали эти серверы, а теперь
пакеты отсутствуют. `postcss-selector-parser` и его родители рассмотрены выше.

## Источники и границы анализа

Исходные данные — npm audit, версии и граф `package-lock.json`, исходники проекта
и установленных потребителей. Исправленные версии и условия сверены с GitHub
Advisory Database через публичный API `/advisories/{GHSA}` 13.10.2026.
Это снимок известных npm advisories на момент проверки, а не гарантия отсутствия
всех уязвимостей или аудит vendored-кода Next.js. Облачные Vercel settings,
production-ветка и фактическая среда исполнения недоступны; публикация не выполнялась.

## Итоговые проверки

На Node.js 24.19.0 / npm 11.21.0 в новой временной копии без node_modules и .next:

- `npx --yes npm@11.21.0 ci --include=dev` — успешно, конфликтов peer-зависимостей нет.
- `npm run typecheck` — успешно до первой сборки; удалённые test globals не требуются.
- `npm run lint` — успешно, без предупреждений и ошибок.
- `npm run build` — успешно (Next.js 16.4.0 / Webpack); Google Fonts потребовал
  одного повтора после сетевого timeout. Сборка по-прежнему зависит от доступа к Google Fonts.
- `npm ls --all` — успешно, missing/invalid зависимостей нет.
- SHA-256 lockfile до и после чистой установки совпадает:
  `c9ea7cc90ff6d32a177a3303c1eac6f80f7a0cfb956a418ddffc825385c7d62e`.
- Маршруты production-сборки совпадают с предыдущим этапом. Diff app/src/public пуст.
- В 12 сформированных `.nft.json` нет файлов npm-пакетов braces, micromatch,
  chokidar, postcss-selector-parser, fast-glob и next-sitemap. Это дополнительное
  подтверждение анализа runtime-пути, не замена проверки исходников и не аудит
  vendored-кода фреймворка.
- После проверок повторены оба audit; их JSON сохранены рядом с отчётом.

Повторная браузерная проверка всех страниц не выполнялась: код приложения не менялся;
изменения инструментов сборки проверены production build и сохранностью маршрутов.
Новая тестовая инфраструктура не добавлялась. Никакие заявки в Airtable не отправлялись.

Дополнительные ограничения: ESLint 9.39.5 остаётся deprecated из-за peer-ограничений
React-плагина; glob 10.5.0 тоже помечен deprecated upstream, хотя перечисленное
CLI-advisory в нём исправлено и итоговый audit его не помечает. Переход на glob 11+
через override вне диапазона sucrase не применён. npm предупреждает о неописанной
allowScripts-политике для fsevents/unrs-resolver; установка и сборка проходят.
