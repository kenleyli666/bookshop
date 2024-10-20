import withPWA from 'next-pwa';

const nextConfig = withPWA({
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
});

module.exports = {
    ...nextConfig,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kenleyli666.github.io',
            },
        ],
    },
};
