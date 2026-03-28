'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MENU } from '@/app/lib/menu'

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="border-base-300/80 bg-base-100 sticky top-0 flex h-screen w-64 min-w-64 flex-col border-e border-dashed">
      {/* Header */}
      <div className="border-base-300 flex h-16 min-h-16 items-center gap-3 border-b border-dashed px-5">
        <span className="bg-primary text-primary-content flex size-7 items-center justify-center rounded-lg text-sm font-bold">
          P
        </span>
        <div>
          <p className="text-sm font-semibold leading-tight">prompt-kit</p>
          <p className="text-base-content/50 text-xs">DaisyUI Edition</p>
        </div>
      </div>

      {/* Scrollable Menu */}
      <div className="min-h-0 grow overflow-y-auto" style={{ scrollbarWidth: 'thin' }}>
        <div className="space-y-1 px-2.5 pt-4 pb-4">
          {MENU.map((section) => (
            <div key={section.group}>
              <p className="text-base-content/40 px-2.5 pt-4 pb-1.5 text-[11px] font-semibold tracking-wider uppercase first:pt-0">
                {section.group}
              </p>
              <div className="space-y-0.5">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={
                        'flex w-full items-center rounded-lg px-2.5 py-1.5 text-left text-sm transition-all ' +
                        (isActive
                          ? 'bg-primary/10 text-primary font-medium'
                          : 'text-base-content/70 hover:bg-base-200 hover:text-base-content')
                      }
                    >
                      <span className="grow">{item.label}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-base-300 border-t border-dashed p-2.5">
        <a
          href="https://github.com/turbo-agent/daisyui-prompt-kit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-base-200/60 hover:bg-base-200 rounded-box flex items-center gap-3 px-3.5 py-2 text-sm transition-all"
        >
          <span className="grow font-medium">GitHub</span>
          <span className="text-base-content/40 text-xs">→</span>
        </a>
      </div>
    </aside>
  )
}
