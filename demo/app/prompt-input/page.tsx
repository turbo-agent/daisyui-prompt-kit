'use client'

import { useState } from 'react'
import {
  PromptInput,
  PromptInputAction,
  PromptInputActions,
  PromptInputTextarea,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function PromptInputPage() {
  const [value, setValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = () => {
    if (!value.trim()) return
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      setValue('')
    }, 2000)
  }

  return (
    <PageShell
      title="Prompt Input"
      description="An AI input that allows users to enter and submit text to an AI model."
    >
      <PromptInput
        value={value}
        onValueChange={setValue}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        className="w-full max-w-xl"
      >
        <PromptInputTextarea placeholder="Ask me anything..." />
        <PromptInputActions className="justify-end pt-2">
          <PromptInputAction
            tooltip={isLoading ? 'Stop generation' : 'Send message'}
            className="btn-primary btn-circle"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <span className="icon-[lucide--square] size-4 fill-current" />
            ) : (
              <span className="icon-[lucide--arrow-up] size-4" />
            )}
          </PromptInputAction>
        </PromptInputActions>
      </PromptInput>
    </PageShell>
  )
}
