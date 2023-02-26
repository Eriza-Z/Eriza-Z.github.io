/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com', 'mergoreb.sirv.com', 'i.postimg.cc'],
    unoptimized: true,
  },
}

module.exports = nextConfig
