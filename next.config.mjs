/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/portfolio-next-js",
  // assetPrefix: "/portoflio-next-js",
  trailingSlash: true,
 
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
