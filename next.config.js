const adapter = require("@loopholelabs/scale-http-adapters/nextjs")

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = adapter.WithScale(nextConfig)
