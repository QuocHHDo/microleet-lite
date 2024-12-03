/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/microleet-lite' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
