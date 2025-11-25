/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/portoflio-next-js",
  assetPrefix: "/portoflio-next-js",
 
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
