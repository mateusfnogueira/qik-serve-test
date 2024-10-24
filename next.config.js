/** @type {import('next').NextConfig} */
const nextIntl = require('next-intl/plugin')()
const nextConfig = nextIntl({
  basePath: '/qik-serve-test',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['preodemo.gumlet.io']
  }
})

module.exports = nextConfig
