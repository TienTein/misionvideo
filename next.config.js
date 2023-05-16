/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["page.jsx"],
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
    apiHost: "https://api-demowebsite.cdktcnqn.edu.vn/",
    NEXTAUTH_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
