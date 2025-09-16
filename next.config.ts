import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.errorchi.uz",
        port: "",
        pathname: "/product/image/**",
      },
    ],
  },
};

export default nextConfig;
