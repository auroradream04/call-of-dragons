import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'your-image-domain.com',
      'another-domain.com'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
