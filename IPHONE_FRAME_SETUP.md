# Настройка iPhone Frame для отзывов

## Текущая реализация

Компонент `ReviewsCarousel` использует **CSS-based iPhone mockup**, который работает без дополнительных файлов.

## Опционально: Использование PNG frame

Если у вас есть готовый PNG файл с прозрачным iPhone frame, вы можете использовать его вместо CSS:

### Шаги:

1. **Добавьте файл** `iphone-frame.png` в `/public/images/`
   - Размер: примерно 300×600px (или больше для retina)
   - Формат: PNG с прозрачностью
   - Стиль: iPhone 12/13/14 (с notch и home indicator)

2. **Обновите компонент** `src/components/ReviewsCarousel.tsx`:

Замените блок с CSS frame на:

```tsx
{/* iPhone Frame - PNG version */}
<div 
  className="absolute inset-0 w-full h-full pointer-events-none"
  style={{
    backgroundImage: 'url("/images/iphone-frame.png")',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }}
/>
```

И удалите CSS-based frame блок.

## Рекомендации

- **CSS версия** (текущая) — легче, не требует дополнительных файлов
- **PNG версия** — может выглядеть более реалистично, если frame качественный

Обе версии работают одинаково хорошо для social proof!
