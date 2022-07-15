/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en", "ja"],
    defaultLocale: "en",
  },
  domains: [
    {
      // Note: subdomains must be included in the domain value to be matched
      // e.g. www.example.com should be used if that is the expected hostname
      domain: "ecp.patient.com",
      defaultLocale: "en",
    },
    {
      domain: "ecp.provider.com",
      defaultLocale: "en",
    },
  ],
};

module.exports = nextConfig;
