/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["page.jsx", "page.js"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.fumeli.net/",
        port: "",
        pathname: "//UploadedFiles/**",
      },
    ],
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/tham-gia/video/:slug",
        destination: "/tham-gia/video/:slug",
      },
    ];
  },
  env: {
    GOOGLE_CLIENT_ID:
      "222976448496-cb46irpvt50119r1fkh20pff16a3oen3.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    apiHost: "https://api.fumeli.net/",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
