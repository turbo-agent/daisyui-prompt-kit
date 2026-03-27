'use client'

import { cn } from '@/utils/cn'
import { TextShimmer } from './text-shimmer'

export type ThinkingBarProps = {
  isThinking?: boolean
  text?: string
  className?: string
  onStop?: () => void
  stopLabel?: string
  onClick?: () => void
}

function ThinkingBar({
  isThinking = true,
  text = 'Thinking',
  className,
  onStop,
  stopLabel = 'Answer now',
  onClick,
}: ThinkingBarProps) {
  if (!isThinking) return null

  return (
    <div className={cn('flex w-full items-center justify-between', className)}>
      {onClick ? (
        <button
          type="button"
          onClick={onClick}
          className="flex items-center gap-1 text-sm transition-opacity hover:opacity-80"
        >
          <TextShimmer className="font-medium">{text}</TextShimmer>
          <span className="icon-[lucide--chevron-right] text-base-content/60 size-4" aria-hidden="true" />
        </button>
      ) : (
        <TextShimmer className="cursor-default font-medium">{text}</TextShimmer>
      )}
      {onStop ? (
        <button
          onClick={onStop}
          type="button"
          className="text-base-content/60 hover:text-base-content border-base-content/40 hover:border-base-content border-b border-dotted text-sm transition-colors"
        >
          {stopLabel}
        </button>
      ) : null}
    </div>
  )
}

export { ThinkingBar }
