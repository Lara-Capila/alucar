/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: process.env.API_URL,
    NEXT_PUBLIC_RAPID_API_KEY: process.env.NEXT_PUBLIC_RAPID_API,
  },
  images: {
    domains: ["cdn.imagin.studio"]
  }
}

module.exports = nextConfig
