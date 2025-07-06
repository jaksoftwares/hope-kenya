module.exports = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true 
  },
  experimental: {
    esmExternals: 'loose',
    serverComponentsExternalPackages: ['@radix-ui/react-progress']
  }
};