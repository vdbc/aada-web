/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "files.aadawards.com", "files-uat.aadawards.com"],
  },
};

module.exports = nextConfig;
