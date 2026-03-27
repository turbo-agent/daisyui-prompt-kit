'use client'

import { useState } from 'react'
import {
  Message,
  MessageAction,
  MessageActions,
  MessageAvatar,
  MessageContent,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function MessagePage() {
  const [liked, setLiked] = useState<boolean | null>(null)
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(
      'I can help with a variety of tasks: answering questions, providing information, assisting with coding, generating creative content. What would you like help with today?'
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <PageShell
      title="Message"
      description="A component for displaying messages with avatars, markdown content, and interactive actions."
    >
      <div className="flex flex-col gap-6">
        <Message className="justify-end">
          <MessageContent>Hello! How can I help you today?</MessageContent>
        </Message>

        <Message className="justify-start">
          <MessageAvatar src="" alt="AI" fallback="AI" />
          <div className="flex w-full flex-col gap-2">
            <MessageContent markdown className="bg-transparent p-0">
              I can help with a variety of tasks:
              - Answering questions
              - Providing information
              - Assisting with coding
              - Generating creative content

              What would you like help with today?
            </MessageContent>
            <MessageActions className="self-end">
              <MessageAction tooltip="Copy" onClick={handleCopy}>
                <span
                  className={`icon-[lucide--copy] size-3.5 ${
                    copied ? 'text-success' : ''
                  }`}
                />
              </MessageAction>
              <MessageAction
                tooltip="Helpful"
                onClick={() => setLiked(true)}
                className={liked === true ? 'text-success opacity-100' : ''}
              >
                <span className="icon-[lucide--thumbs-up] size-3.5" />
              </MessageAction>
              <MessageAction
                tooltip="Not helpful"
                onClick={() => setLiked(false)}
                className={liked === false ? 'text-error opacity-100' : ''}
              >
                <span className="icon-[lucide--thumbs-down] size-3.5" />
              </MessageAction>
            </MessageActions>
          </div>
        </Message>
      </div>
    </PageShell>
  )
}
