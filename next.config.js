/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true
  },
  // Add these critical configurations:
  experimental: {
    esmExternals: false, // Force CommonJS for Radix
    serverComponentsExternalPackages: ['@radix-ui/react-progress']
  },
  webpack: (config) => {
    // Force Radix UI to use CommonJS modules
    config.externals = config.externals || [];
    config.externals.push(function ({ context, request }, callback) {
      if (/^@radix-ui/.test(request)) {
        return callback(null, `commonjs ${request}`);
      }
      callback();
    });
    return config;
  }
};

module.exports = nextConfig;