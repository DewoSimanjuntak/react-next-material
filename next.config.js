const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  async redirects() {
    return [
      {
        source: '/:path((?!login$).* || (?!forgot-password$).*)',
        has: [
          {
            type: 'cookie',
            key: 'authorized',
            value: 'false'
          }
        ], 
        permanent: false,
        destination: '/login',
      }]
  }
};

module.exports = nextConfig;
