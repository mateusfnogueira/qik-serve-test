/** @type {import('next').NextConfig} */
const nextIntl = require("next-intl/plugin")();
const nextConfig = nextIntl({
  images: {
    domains: ["preodemo.gumlet.io"],
  },
});

module.exports = nextConfig;
