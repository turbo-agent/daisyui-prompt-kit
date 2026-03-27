import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@daisyui/prompt-kit'],
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
