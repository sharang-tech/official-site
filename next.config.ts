import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  /* config options here */
  output: "export", // ensures `next export` works correctly
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // ensures folders are created for clean URLs
  reactStrictMode: true, // good dev practice
  compiler: {
    removeConsole: process.env.NODE_ENV === "production", // strip console.logs
  },
  experimental: {
    optimizeCss: true, // remove unused css (if supported)
  },
  webpack: (config) => {
    // Optional: Add any custom Webpack tweaks here
    return config;
  },
};

export default nextConfig;
