/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Accept-CH",
            value: "Sec-CH-Prefers-Color-Scheme",
          },
          {
            key: "Vary",
            value: "Sec-CH-Prefers-Color-Scheme",
          },
          {
            key: "Critical-CH",
            value: "Sec-CH-Prefers-Color-Scheme",
          },
        ],
      },
    ];
  },
};
