import withPWA from "@ducanh2912/next-pwa";

const notProduction = process.env.NODE_ENV !== "production";
const pwaConfig = withPWA({
  disable: notProduction,
  dest: "public",
});

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default pwaConfig(nextConfig);
