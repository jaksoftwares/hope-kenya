/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  experimental: {
    // Simplified configuration
    esmExternals: false, // Changed from 'loose' to false
    serverComponentsExternalPackages: [
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu'
      // Only include packages you actually use
    ],
    optimizePackageImports: [ // New optimization
      '@radix-ui/react-*'
    ]
  },
  // Remove the webpack config completely
};

module.exports = nextConfig;