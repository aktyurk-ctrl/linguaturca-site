## LinguaTurca — Школа турецкого языка

Проект: Next.js 14 (App Router), TypeScript, Tailwind, shadcn-совместимые UI, MDX блог, next-seo, next-sitemap. Оптимизирован под Lighthouse ≥95.

### Быстрый старт
1. Установите pnpm: `npm i -g pnpm`
2. Установите зависимости: `pnpm install`
3. Запуск dev: `pnpm dev` (http://localhost:3000)

### Переменные окружения
Создайте `.env.local` по примеру:

```
SITE_URL=https://linguaturca.example.com
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
FORMS_WEBHOOK_URL=
```

### Сгенерировать sitemap/robots
```
pnpm sitemap
```

### Блог (MDX)
- Добавляйте посты в `content/blog/*.mdx` с фронтматтером: `title`, `description`, `date`, `tags`.

### Редактирование курсов/преподавателей
- Данные в `src/data/*`. Обновляйте JSON/TS.

### Деплой на Vercel
1. Подключите репозиторий.
2. Установите `SITE_URL` и SMTP/webhook (если используете).
3. Билд командой по умолчанию (`pnpm build`).


