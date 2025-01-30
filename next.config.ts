import type { NextConfig } from 'next'

const hostnames = ['media-cdn.incrowdsports.com']

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: hostnames.map((hostname) => ({
            protocol: 'https',
            hostname,
        })),
    },
}

export default nextConfig
