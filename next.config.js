/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/OniStep' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/OniStep' : '',

  output: {
    path: '/public/*',
    publicPath: process.env.NODE_ENV === 'production' ? '/OniStep/' : '/',
  },
};

module.exports = nextConfig;
