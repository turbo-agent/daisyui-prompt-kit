'use client'

import { cn } from '@/utils/cn'

export type SourceProps = {
  href: string
  children: React.ReactNode
  className?: string
}

function Source({ href, children, className }: SourceProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn('group relative inline-block', className)}
    >
      {children}
    </a>
  )
}

export type SourceTriggerProps = {
  label: string
  showFavicon?: boolean
  className?: string
}

function SourceTrigger({ label, showFavicon = false, className }: SourceTriggerProps) {
  const domain = label.startsWith('http') ? new URL(label).hostname : label

  return (
    <div
      className={cn(
        'inline-flex h-5 max-w-32 items-center gap-1 overflow-hidden rounded-full text-xs no-underline transition-colors duration-150',
        'bg-base-200 text-base-content/60 hover:bg-base-content/20 hover:text-primary',
        showFavicon ? 'pr-2 pl-1' : 'px-1',
        className
      )}
    >
      {showFavicon && (
        <img
          src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(domain)}`}
          alt=""
          className="size-3.5 rounded-full"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      <span className="truncate tabular-nums text-center font-normal">{domain}</span>
    </div>
  )
}

export type SourceContentProps = {
  title: string
  description?: string
  className?: string
}

function SourceContent({ title, description, className }: SourceContentProps) {
  return (
    <div
      className={cn(
        'absolute z-50 w-64 p-3 rounded-lg shadow-lg',
        'bg-base-100 border border-base-300',
        'opacity-0 invisible group-hover:opacity-100 group-hover:visible',
        'transition-all duration-200',
        'bottom-full mb-2 left-1/2 -translate-x-1/2',
        className
      )}
    >
      <div className="font-medium text-sm mb-1 line-clamp-2">{title}</div>
      {description && (
        <div className="text-xs text-base-content/70 line-clamp-3">{description}</div>
      )}
    </div>
  )
}

export { Source, SourceTrigger, SourceContent }
