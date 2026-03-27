'use client'

import { cn } from '@/utils/cn'

export type FeedbackBarProps = {
  title?: string
  icon?: React.ReactNode
  onHelpful?: () => void
  onNotHelpful?: () => void
  onClose?: () => void
  className?: string
}

function FeedbackBar({
  title,
  icon,
  onHelpful,
  onNotHelpful,
  onClose,
  className,
}: FeedbackBarProps) {
  return (
    <div className={cn('inline-flex rounded-xl border border-base-300 bg-base-100 text-sm', className)}>
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-1 items-center justify-start gap-4 py-3 pl-4">
          {icon}
          {title ? <span className="font-medium text-base-content">{title}</span> : null}
        </div>

        <div className="flex items-center justify-center gap-0.5 px-3 py-0">
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md text-base-content/60 transition-colors hover:text-base-content"
            aria-label="Helpful"
            onClick={onHelpful}
          >
            <span className="icon-[lucide--thumbs-up] h-4 w-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="flex size-8 items-center justify-center rounded-md text-base-content/60 transition-colors hover:text-base-content"
            aria-label="Not helpful"
            onClick={onNotHelpful}
          >
            <span className="icon-[lucide--thumbs-down] h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="flex items-center justify-center border-l border-base-300">
          <button
            type="button"
            onClick={onClose}
            className="flex items-center justify-center rounded-md p-3 text-base-content/60 transition-colors hover:text-base-content"
            aria-label="Close"
          >
            <span className="icon-[lucide--x] h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}

export { FeedbackBar }
