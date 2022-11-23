const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https || http",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
