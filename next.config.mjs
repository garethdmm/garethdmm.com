/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // mine worked fine without this line
    experimental: {
        serverActions: true,
    },
};

export default nextConfig;
