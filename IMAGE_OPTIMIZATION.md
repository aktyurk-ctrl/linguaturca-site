# Image Optimization Guide

## Logo Optimization (CRITICAL)

The current `/public/logo.png` is 3000x3000px (~1MB) but displayed as only 40x40px. This causes massive performance issues.

### Steps to Fix:

1. **Create optimized logo versions:**
   ```bash
   # Using ImageMagick or similar tool
   # Create 40x40 version (1x)
   convert logo.png -resize 40x40 -quality 85 public/logo-40.png
   
   # Create 80x80 version (2x for retina)
   convert logo.png -resize 80x80 -quality 85 public/logo-80.png
   ```

2. **Or use online tools:**
   - https://squoosh.app/ - Upload logo.png, resize to 40x40, export as WebP
   - https://tinypng.com/ - Compress the logo

3. **Recommended approach:**
   - Create `logo-40.webp` (40x40, ~5-10KB)
   - Create `logo-80.webp` (80x80, ~15-20KB)
   - Update `src/components/Header.tsx` to use these optimized versions

4. **Alternative: Convert to SVG** (if logo is simple):
   - SVG scales perfectly and is usually <5KB
   - Update Header to use SVG directly

### Current Implementation:
The Header component now uses `next/image` with proper sizing (40x40px), but the source file still needs optimization.

## Image Format Conversion

All JPG images should be converted to WebP/AVIF for better compression:

### Images to optimize:
- `/public/images/class1.jpg`
- `/public/images/class2.jpg`
- `/public/images/founder.jpg`
- `/public/images/schedule1.jpg`
- `/public/images/review-avatar-*.jpg`
- `/public/images/review-screenshot-*.jpg`

### Tools:
1. **Squoosh.app** - Upload JPG, convert to WebP with quality 75-80
2. **ImageMagick**:
   ```bash
   convert input.jpg -quality 75 output.webp
   ```
3. **Next.js Image Optimization** - Already configured in `next.config.mjs` to serve WebP/AVIF automatically

## Next.js Image Optimization

The project is configured to:
- Automatically serve WebP/AVIF formats when supported
- Generate responsive image sizes
- Cache optimized images for 60 seconds minimum

All components now use `next/image` with:
- Proper `sizes` attribute for responsive loading
- `quality={75}` for photos, `quality={70}` for small images
- `loading="lazy"` for below-the-fold images
- `priority` only for critical above-the-fold images

## Performance Checklist

- [x] Header logo uses next/image with proper sizing
- [x] All section images use next/image
- [x] Proper sizes attribute for responsive images
- [x] Quality settings optimized (75 for photos, 70 for small)
- [x] Lazy loading for below-the-fold images
- [ ] Logo file optimized (needs manual optimization)
- [ ] JPG images converted to WebP (Next.js handles automatically, but source files can be optimized)

## Testing

After optimization, test with:
- Google PageSpeed Insights
- Lighthouse
- Network tab in DevTools (check image sizes)

Expected improvements:
- Logo: ~1MB → ~10KB (99% reduction)
- Section images: Better compression with WebP/AVIF
- Faster LCP (Largest Contentful Paint)
- Better FCP (First Contentful Paint)
