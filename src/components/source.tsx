'use client'

import { cn } from '@/utils/cn'
import { createContext, useContext } from 'react'

const SourceContext = createContext<{
  href: string
  domain: string
} | null>(null)

function useSourceContext() {
  const context = useContext(SourceContext)

  if (!context) {
    throw new Error('Source.* must be used inside <Source>')
  }

  return context
}

export type SourceProps = {
  href: string
  children: React.ReactNode
  className?: string
}

function Source({ href, children, className }: SourceProps) {
  let domain = ''

  try {
    domain = new URL(href).hostname
  } catch {
    domain = href.split('/').pop() || href
  }

  return (
    <SourceContext.Provider value={{ href, domain }}>
      <div className={cn('group relative inline-block', className)}>{children}</div>
    </SourceContext.Provider>
  )
}

export type SourceTriggerProps = {
  label?: string | number
  showFavicon?: boolean
  className?: string
}

function SourceTrigger({ label, showFavicon = false, className }: SourceTriggerProps) {
  const { href, domain } = useSourceContext()
  const labelToShow = label ?? domain.replace('www.', '')

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'inline-flex h-5 max-w-32 items-center gap-1 overflow-hidden rounded-full text-xs no-underline transition-colors duration-150',
        'bg-base-200 text-base-content/60 hover:bg-base-content/20 hover:text-primary',
        showFavicon ? 'pr-2 pl-1' : 'px-1',
        className
      )}
    >
      {showFavicon && (
        <img
          src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(href)}`}
          alt="favicon"
          className="size-3.5 rounded-full"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
      <span className="truncate tabular-nums text-center font-normal">{labelToShow}</span>
    </a>
  )
}

export type SourceContentProps = {
  title: string
  description?: string
  className?: string
}

function SourceContent({ title, description, className }: SourceContentProps) {
  const { href, domain } = useSourceContext()

  return (
    <div
      className={cn(
        'absolute bottom-full left-1/2 z-50 mb-2 w-80 -translate-x-1/2 rounded-lg border border-base-300 bg-base-100 p-0 shadow-lg',
        'invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100',
        'transition-all duration-200',
        className
      )}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col gap-2 p-3"
      >
        <div className="flex items-center gap-1.5">
          <img
            src={`https://www.google.com/s2/favicons?sz=64&domain_url=${encodeURIComponent(href)}`}
            alt="favicon"
            className="size-4 rounded-full"
            width={16}
            height={16}
          />
          <div className="truncate text-sm text-primary">{domain.replace('www.', '')}</div>
        </div>
        <div className="line-clamp-2 text-sm font-medium">{title}</div>
        {description ? (
          <div className="line-clamp-2 text-sm text-base-content/70">{description}</div>
        ) : null}
      </a>
    </div>
  )
}

export { Source, SourceTrigger, SourceContent }
