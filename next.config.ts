import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["192.168.1.13"],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "1gb",
    },
  },
};

export default nextConfig;
