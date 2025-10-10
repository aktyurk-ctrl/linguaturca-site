import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    mdxRs: true,
    forceSwcTransforms: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  webpack: (config) => {
    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);


