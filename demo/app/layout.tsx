import type { Metadata } from 'next'
import './globals.css'
import { Sidebar } from './components/sidebar'
import { Topbar } from './components/topbar'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'prompt-kit Demo — DaisyUI Edition',
  description: 'Component demos for @turbo-agent/daisyui-prompt-kit',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main */}
        <div className="flex min-w-0 flex-1 flex-col">
          <Topbar />
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
