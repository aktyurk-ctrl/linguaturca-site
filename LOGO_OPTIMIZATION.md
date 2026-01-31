# Инструкция по оптимизации logo.png

## Проблема
Текущий `logo.png` весит ~1MB и имеет размер 3000×3000px, а показывается в размере 40×40px в header.

## Решение

### 1. Создать оптимизированные версии логотипа

**Вариант A: PNG (рекомендуется)**
- Создать `logo-128.png` размером 128×128px (или 256×256px максимум)
- Использовать инструмент: ImageOptim, TinyPNG, или онлайн-компрессор
- Целевой размер файла: < 50KB

**Вариант B: WebP (лучшая оптимизация)**
- Создать `logo-128.webp` размером 128×128px
- Использовать: `cwebp logo.png -o logo-128.webp -resize 128 128 -q 80`
- Целевой размер файла: < 30KB

### 2. Обновить код в `src/components/Header.tsx`

Текущий код:
```tsx
<Image
  src="/logo.png"
  alt="LinguaTurca логотип"
  width={40}
  height={40}
  className="rounded-full object-cover"
  sizes="40px"
  priority
/>
```

**Обновить на:**
```tsx
<Image
  src="/logo-128.png"  // или logo-128.webp
  alt="LinguaTurca логотип"
  width={40}
  height={40}
  className="rounded-full object-cover"
  sizes="40px"
  priority
/>
```

### 3. Проверить Footer.tsx

Убедиться, что в Footer также используется оптимизированная версия.

### 4. Дополнительные рекомендации

- Если логотип простой (без градиентов/фото), рассмотреть SVG формат
- Для retina дисплеев можно создать `logo-256.png` (2x версия)
- Использовать `next/image` с правильными `width`/`height` для предотвращения layout shift

## Инструменты для оптимизации

1. **ImageOptim** (Mac) - https://imageoptim.com/
2. **TinyPNG** (онлайн) - https://tinypng.com/
3. **Squoosh** (онлайн) - https://squoosh.app/
4. **cwebp** (CLI) - для конвертации в WebP

## Проверка результата

После оптимизации проверить:
- Размер файла < 50KB (PNG) или < 30KB (WebP)
- Визуальное качество не ухудшилось
- PageSpeed Insights показывает улучшение
