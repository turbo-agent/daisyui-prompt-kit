import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['@turbo-agent/daisyui-prompt-kit'],
  eslint: { ignoreDuringBuilds: true },
}

export default nextConfig
