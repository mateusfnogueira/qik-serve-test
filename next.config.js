/** @type {import('next').NextConfig} */
const nextIntl = require('next-intl/plugin')()
const nextConfig = nextIntl({
  basePath: '',
  reactStrictMode: true,
  images: {
    domains: ['preodemo.gumlet.io']
  }
})

module.exports = nextConfig
