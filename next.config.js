/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  generateBuildId: () => "numble_codecamp",
  exportPathMap: () => ({
    "/game": { page: "/game" },
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};

module.exports = nextConfig;
