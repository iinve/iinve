const nextConfig = {
  reactStrictMode: false,
  experimental: {
    optimizePackageImports: ["react-icons", "@heroui/react", "framer-motion"],
  },
  images: {
    formats: [
      "image/avif",
      "image/webp",
      "image/jpeg",
      "image/png",
      "image/svg+xml",
      "image/JPG",
    ],
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    config.resolve.modules.push(path.resolve("src"));
    return config;
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors 'self';" },
        ],
      },
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
