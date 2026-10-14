/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: '/blog', destination: '/articles', permanent: true },
      { source: '/blog/:slug', destination: '/articles/:slug', permanent: true },
      { source: '/privacy', destination: '/policy', permanent: true },
      { source: '/offer', destination: '/legal', permanent: true },
    ];
  },
  images: {
    qualities: [70, 75, 85, 90],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
}

export default nextConfig


