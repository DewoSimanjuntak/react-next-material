const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env:{
    // Set PORT to environtment variable (e.g: PORT=3005 npm run dev)
    PORT: process.env.PORT
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
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
