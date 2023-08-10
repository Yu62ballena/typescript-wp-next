/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.microcms-assets.io' ,'localhost',  'yu-and-you.com', 'live.staticflickr.com', 'pdf.wondershare.jp', 'ad.linksynergy.com', 'secure.gravatar.com', '2.gravatar.com'],
  },
}

module.exports = nextConfig
