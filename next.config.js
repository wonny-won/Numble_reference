/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  swcMinify: true,
  generateBuildId: () => "numble_codecamp",
  exportPathMap: () => ({
    game: { page: "/game" },
  }),
};

module.exports = nextConfig;
