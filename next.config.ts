import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['0.0.0.0', '192.168.100.4', 'localhost'],
  reactStrictMode: true,
};

export default nextConfig;
