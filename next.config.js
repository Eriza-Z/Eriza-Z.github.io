/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.discordapp.com'],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        port: '443',
        pathname: 'attachments/971801947910848582/1019433060028129390/IMG_20220903_183158.jpg',
      },
    ],
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
