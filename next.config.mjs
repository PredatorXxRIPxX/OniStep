/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: process.env.NODE_ENV === 'production' ? '/OniStep' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/OniStep' : '',
  };
  
  export default nextConfig;
  