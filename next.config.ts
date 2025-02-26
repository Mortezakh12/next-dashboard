
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  appDir: true,
  webpack: (config: any) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  }
};

export default nextConfig;

