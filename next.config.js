/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3.amazonaws.com','images-na.ssl-images-amazon.com', 'm.media-amazon.com'],
  },
}

module.exports = nextConfig

