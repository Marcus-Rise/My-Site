const notProduction = process.env.NODE_ENV !== "production";

const withPWA = require("@ducanh2912/next-pwa").default({
  disable: notProduction,
  dest: "public",
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA(nextConfig);
