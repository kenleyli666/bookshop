import withPWA from 'next-pwa';

const nextConfig = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
    },
});

export default {
    ...nextConfig,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'kenleyli666.github.io',
                pathname: '/booksApi/**',
            },
        ],
    },
};
