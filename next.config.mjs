import withPWA from 'next-pwa';

const nextConfig = withPWA({
    pwa: {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === 'development',
    },
    basePath: '/bookshop', // Add this line if your site is served from a subdirectory
});

module.exports = {
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
