'use client'

import { cn } from '@/utils/cn'

export type TextShimmerProps = {
  as?: string
  duration?: number
  spread?: number
  children: React.ReactNode
} & React.HTMLAttributes<HTMLElement>

function TextShimmer({
  as = 'span',
  className,
  duration = 4,
  spread = 20,
  children,
  ...props
}: TextShimmerProps) {
  const dynamicSpread = Math.min(Math.max(spread, 5), 45)
  const Component = as as React.ElementType

  return (
    <Component
      className={cn(
        'bg-clip-text font-medium text-transparent',
        className
      )}
      style={{
        backgroundSize: '200% auto',
        animation: `dpk-shimmer ${duration}s infinite linear`,
        backgroundImage: `linear-gradient(to right, rgb(from var(--color-base-content) r g b / 0.45) ${50 - dynamicSpread}%, var(--color-primary) 50%, rgb(from var(--color-base-content) r g b / 0.45) ${50 + dynamicSpread}%)`,
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export { TextShimmer }
