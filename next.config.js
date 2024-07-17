/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV === 'production' ? '/OniStep' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/OniStep' : '',

  // Add output configuration for static export
  // Replace `OniStep` with your actual GitHub repository name
  output: {
    // Specifies where Next.js should export the static files
    path: '/public/*',
    // Specifies the public URL prefix for the assets
    // GitHub Pages serves from the root of the repository
    // So, assetPrefix should match basePath in production
    publicPath: process.env.NODE_ENV === 'production' ? '/OniStep/' : '/',
  },
};

module.exports = nextConfig;
