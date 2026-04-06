// Use ES module imports
import path from "path";

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ["react-icons", "@heroui/react", "framer-motion"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.modules.push(path.resolve("src")); // You don't need __dirname in ES modules
    return config;
  },
  async headers() {
    return [
      // Your existing CSP header
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self';",
          },
        ],
      },
      // New CORS headers for assets
      {
        source: "/assets/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET" },
        ],
      },
    ];
  },
};

export default nextConfig;
