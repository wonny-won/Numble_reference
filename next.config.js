/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://junejae1625.github.io/Numble_reference"
      : "",
  // images: {
  //   loader: "imgix",
  //   path: "https://junejae1625.github.io/Numble_reference",
  // },
};

module.exports = nextConfig;
