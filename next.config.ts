import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    dangerouslyAllowSVG: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
            }
        ]
    }
};

export default nextConfig;
