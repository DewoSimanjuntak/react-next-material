const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async redirects() {
    return [
      {
        source: "/:path((?!login$).* || (?!forgot-password$).*)",
        has: [
          {
            type: "cookie",
            key: "authorized",
            value: "false",
          },
        ],
        permanent: false,
        destination: "/login",
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/patient/create-account",
        destination: "/auth/create-account",
      },
      {
        source: "/patient/forgot-password",
        destination: "/forgot-password",
      },
    ];
  },
};

module.exports = nextConfig;
