import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache';

const nextConfig = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
        runtimeCaching,
    },
    images: {
        domains: ['kenleyli666.github.io'],
    },
});

export default nextConfig;
