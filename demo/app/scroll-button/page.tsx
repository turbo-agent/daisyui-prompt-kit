'use client'

import { useRef, useState } from 'react'
import {
  ChatContainerContent,
  ChatContainerRoot,
  ScrollButton,
} from '@turbo-agent/daisyui-prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function ScrollButtonPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [content] = useState(
    Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="border-b border-base-300 p-3">
        <h3 className="font-medium">Item {i + 1}</h3>
        <p className="text-base-content/60 text-sm">
          This is a sample item to demonstrate scrolling behavior.
        </p>
      </div>
    ))
  )

  return (
    <PageShell
      title="Scroll Button"
      description="A button that appears when the user scrolls up in a chat container, allowing them to jump back to the bottom."
    >
      <div className="relative flex h-[400px] w-full flex-col overflow-hidden rounded-box border border-base-300">
        <div ref={containerRef} className="flex h-full w-full flex-col overflow-y-auto">
          <ChatContainerRoot className="h-full w-full">
            <ChatContainerContent className="w-full">
              {content}
            </ChatContainerContent>
            <div className="absolute right-4 bottom-4">
              <ScrollButton />
            </div>
          </ChatContainerRoot>
        </div>
      </div>
    </PageShell>
  )
}
