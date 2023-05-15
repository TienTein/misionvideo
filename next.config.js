/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "api-demowebsite.cdktcnqn.edu.vn",
        port: "",
        pathname: "//UploadedFiles/**",
      },
    ],
    unoptimized: true,
  },
  env: {
    apiHost: "https://api-demowebsite.cdktcnqn.edu.vn/api/",
  },
};

module.exports = nextConfig;
