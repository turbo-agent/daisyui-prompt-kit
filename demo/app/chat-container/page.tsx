'use client'

import { useEffect, useRef, useState } from 'react'
import {
  ChatContainerContent,
  ChatContainerRoot,
  Markdown,
  Message,
  MessageAvatar,
  MessageContent,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function ChatContainerPage() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'user', content: 'Hello! Can you help me with a coding question?' },
    { id: 2, role: 'assistant', content: 'Of course! I\'d be happy to help with your coding question. What would you like to know?' },
    { id: 3, role: 'user', content: 'How do I create a responsive layout with CSS Grid?' },
    {
      id: 4,
      role: 'assistant',
      content:
        'Creating a responsive layout with CSS Grid is straightforward. Here\'s a basic example:\n\n```css\n.container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 1rem;\n}\n```\n\nThis creates a grid where:\n- Columns automatically fit as many as possible\n- Each column is at least 250px wide\n- Columns expand to fill available space\n- There\'s a 1rem gap between items',
    },
  ])

  const [isStreaming, setIsStreaming] = useState(false)
  const streamRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const contentRef = useRef('')

  const streamResponse = () => {
    if (isStreaming) return
    setIsStreaming(true)
    const fullResponse =
      'Yes, I\'d be happy to explain more! The `grid-template-columns` property defines the columns. The `repeat()` function repeats a pattern. `auto-fit` will fit as many columns as possible. The `minmax()` function sets a min and max size for each column.'
    const newId = messages.length + 1
    setMessages((prev) => [...prev, { id: newId, role: 'assistant', content: '' }])
    let i = 0
    contentRef.current = ''
    streamRef.current = setInterval(() => {
      if (i < fullResponse.length) {
        contentRef.current += fullResponse[i]
        setMessages((prev) =>
          prev.map((msg) => (msg.id === newId ? { ...msg, content: contentRef.current } : msg))
        )
        i++
      } else {
        clearInterval(streamRef.current!)
        setIsStreaming(false)
      }
    }, 30)
  }

  useEffect(() => () => { if (streamRef.current) clearInterval(streamRef.current) }, [])

  return (
    <PageShell
      title="Chat Container"
      description="A chat interface with intelligent auto-scrolling behavior for smooth conversation experiences."
    >
      <div className="flex h-[400px] w-full flex-col overflow-hidden rounded-box border border-base-300">
        <div className="flex items-center justify-between border-b border-base-300 p-3">
          <div />
          <button className="btn btn-sm btn-primary" onClick={streamResponse} disabled={isStreaming}>
            {isStreaming ? 'Streaming...' : 'Show Streaming'}
          </button>
        </div>
        <ChatContainerRoot className="flex-1">
          <ChatContainerContent className="space-y-4 p-4">
            {messages.map((msg) => {
              const isAI = msg.role === 'assistant'
              return (
                <Message key={msg.id} className={msg.role === 'user' ? 'justify-end' : 'justify-start'}>
                  {isAI && <MessageAvatar src="" alt="AI" fallback="AI" />}
                  <div className="max-w-[85%] flex-1 sm:max-w-[75%]">
                    {isAI ? (
                      <div className="bg-base-200 text-base-content prose rounded-lg p-2 text-sm">
                        <Markdown>{msg.content}</Markdown>
                      </div>
                    ) : (
                      <MessageContent className="bg-primary text-primary-content">
                        {msg.content}
                      </MessageContent>
                    )}
                  </div>
                </Message>
              )
            })}
          </ChatContainerContent>
        </ChatContainerRoot>
      </div>
    </PageShell>
  )
}
