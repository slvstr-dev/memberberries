/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'lh3.googleusercontent.com'],
  },
  experimental: {
    typedRoutes: true,
    serverActions: true,
  },
};

module.exports = nextConfig;
