/** @type {import('next').NextConfig} */
const nextConfig = {
  output:"export",
  basePath: process.env.NODE_ENV === 'production' ? '/OniStep' : '',

  assetPrefix: process.env.NODE_ENV === 'production' ? '/OniStep/' : '',

  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
