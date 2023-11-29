const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
});

/** @type {import("next").NextConfig} */
const nextConfig = {};

module.exports = withPWA(nextConfig);
