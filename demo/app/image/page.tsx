'use client'

import { Image } from '@turbo-agent/daisyui-prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function ImagePage() {
  return (
    <PageShell title="Image" description="Image container with skeleton loading and error fallback.">
      <div className="flex flex-col items-center gap-6">
        <div className="w-full max-w-lg">
          <Image
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80"
            alt="Workspace"
            aspectRatio="video"
          />
        </div>
        <div className="w-full max-w-xs">
          <Image
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=600&q=80"
            alt="Workspace square"
            aspectRatio="square"
          />
        </div>
      </div>
    </PageShell>
  )
}
