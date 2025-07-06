/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true, // Recommended for static exports
  },
  images: { 
    unoptimized: true 
  },
  // Add these experimental options:
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['@radix-ui/react-progress']
  }
};

module.exports = nextConfig;