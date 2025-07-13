/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/portfolio', // Replace 'portfolio' with your GitHub repo name
  assetPrefix: '/portfolio/', // Replace 'portfolio' with your GitHub repo name
}

module.exports = nextConfig