/** @type {import("next").NextConfig} */
module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
};
