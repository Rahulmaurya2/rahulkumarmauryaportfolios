// next.config.js
import type { NextConfig } from 'next';
const nextConfig = {
  webpack(config: NextConfig) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            svgo: true,
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: ["s3.amazonaws.com"],
  },
   eslint: {
    ignoreDuringBuilds: true, // ✅ disables ESLint in production builds
  },
};

module.exports = nextConfig;
