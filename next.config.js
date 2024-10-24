/** @type {import('next').NextConfig} */
const nextIntl = require('next-intl/plugin')()
const nextConfig = nextIntl({
  basePath: '/qik-serve-test',
  output: 'export',
  reactStrictMode: true,
  images: {
    domains: ['preodemo.gumlet.io']
  }
})

module.exports = nextConfig
