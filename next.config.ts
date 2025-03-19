import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['mac-hadis.s3.ap-northeast-1.amazonaws.com'],
  }
};

export default nextConfig;
