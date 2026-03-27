'use client'

import { cn } from '@/utils/cn'

export type SystemMessageVariant = 'info' | 'success' | 'warning' | 'error'

export type SystemMessageProps = {
  children: React.ReactNode
  variant?: SystemMessageVariant
  fill?: boolean
  className?: string
  icon?: React.ReactNode
  isIconHidden?: boolean
  cta?: {
    label: string
    onClick?: () => void
  }
}

function SystemMessage({
  children,
  variant = 'info',
  fill = false,
  className,
  icon,
  isIconHidden = false,
  cta,
}: SystemMessageProps) {
  const config = {
    info: {
      filled: 'bg-info/10 border-transparent',
      outlined: 'border-info/40',
      text: 'text-info',
      icon: <span className="icon-[lucide--info] h-4 w-4" aria-hidden="true" />,
    },
    success: {
      filled: 'bg-success/10 border-transparent',
      outlined: 'border-success/40',
      text: 'text-success',
      icon: <span className="icon-[lucide--circle-check-big] h-4 w-4" aria-hidden="true" />,
    },
    warning: {
      filled: 'bg-warning/10 border-transparent',
      outlined: 'border-warning/40',
      text: 'text-warning',
      icon: <span className="icon-[lucide--triangle-alert] h-4 w-4" aria-hidden="true" />,
    },
    error: {
      filled: 'bg-error/10 border-transparent',
      outlined: 'border-error/40',
      text: 'text-error',
      icon: <span className="icon-[lucide--circle-alert] h-4 w-4" aria-hidden="true" />,
    },
  }

  const { filled, outlined, text, icon: defaultIcon } = config[variant]
  const iconNode = isIconHidden ? null : (icon || defaultIcon)

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-xl border py-2 pr-2 pl-3',
        fill ? filled : outlined,
        text,
        className
      )}
    >
      <div className="flex flex-1 items-center gap-3 leading-normal">
        {iconNode && (
          <div className="flex h-[1lh] shrink-0 items-center justify-center self-start">
            {iconNode}
          </div>
        )}
        <div className="text-sm flex-1">{children}</div>
      </div>
      {cta && (
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={cta.onClick}
        >
          {cta.label}
        </button>
      )}
    </div>
  )
}

export { SystemMessage }
