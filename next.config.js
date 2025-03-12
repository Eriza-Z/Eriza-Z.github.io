/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com', 'mergoreb.sirv.com', 'lh3.googleusercontent.com', 'source.unsplash.com'],
    unoptimized: true,
  },
  output: 'export'
}

module.exports = nextConfig
