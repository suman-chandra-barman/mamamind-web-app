import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "l9vtwvjb-8000.inc1.devtunnels.ms",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
