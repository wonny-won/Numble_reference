/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  generateBuildId: () => "numble_codecamp",
  exportPathMap: () => ({
    "/game": { page: "/game" },
    "/diary": { page: "/diary" },
    "/diary/new": { page: "/diary/new" },
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
