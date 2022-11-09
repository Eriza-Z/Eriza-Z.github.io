/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['assets.acme.com', 'cdn.discordapp.com'],
  },
}

module.exports = nextConfig
