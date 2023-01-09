/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withTranspiler = require("next-transpile-modules")(['gsap']);

module.exports = withTranspiler(nextConfig);