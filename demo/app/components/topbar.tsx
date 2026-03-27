'use client'

import { usePathname } from 'next/navigation'
import { findMenuItem } from '@/app/lib/menu'
import { ThemeToggle } from './theme-toggle'

export function Topbar() {
  const pathname = usePathname()
  const item = findMenuItem(pathname)

  return (
    <div className="border-base-300/80 bg-base-100 sticky top-0 z-10 flex h-16 min-h-16 items-center justify-between border-b border-dashed px-6">
      <div className="flex items-center gap-2 text-sm">
        <span className="text-base-content/50">Components</span>
        <span className="text-base-content/30">/</span>
        <span className="font-medium">{item?.label ?? 'Home'}</span>
      </div>
      <ThemeToggle />
    </div>
  )
}
