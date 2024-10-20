import withPWA from 'next-pwa';
import runtimeCaching from 'next-pwa/cache.js'; 

const nextConfig = withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
    runtimeCaching,
});

export default nextConfig;

