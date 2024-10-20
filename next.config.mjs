import withPWA from 'next-pwa';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakeimg.pl',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'kenleyli666.github.io',
      },
    ],
  },
};

const pwaConfig = withPWA({
  dest: 'public',
});

export default {
  ...nextConfig,
  ...pwaConfig,
};
