'use client'

import { Loader } from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

const variants = [
  'circular', 'classic', 'pulse', 'pulse-dot', 'dots', 'typing',
  'wave', 'bars', 'terminal', 'text-blink', 'text-shimmer', 'loading-dots',
] as const

export default function LoaderPage() {
  return (
    <PageShell title="Loader" description="Multiple loading indicator variants for AI interfaces.">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {variants.map((variant) => (
          <div
            key={variant}
            className="rounded-box border-base-300 bg-base-200/30 flex min-h-24 flex-col items-center justify-center gap-2 border"
          >
            <Loader variant={variant} text="Thinking" />
            <span className="text-base-content/50 text-xs">{variant}</span>
          </div>
        ))}
      </div>
    </PageShell>
  )
}
