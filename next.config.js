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
  env: {
    GOOGLE_CLIENT_ID:
      "586486200042-n2gsukec90iep47p3erp515l30m5ar68.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    apiHost: "https://api.fumeli.net/",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
