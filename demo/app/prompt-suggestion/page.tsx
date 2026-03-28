'use client'

import { useState } from 'react'
import {
  PromptInput,
  PromptInputActions,
  PromptInputTextarea,
  PromptSuggestion,
} from '@turbo-agent/daisyui-prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function PromptSuggestionPage() {
  const [value, setValue] = useState('')

  const handleSend = () => {
    if (value.trim()) setValue('')
  }

  return (
    <PageShell
      title="Prompt Suggestion"
      description="Suggestion chips that can highlight matching keywords."
    >
      <div className="flex flex-col gap-4 w-full max-w-xl">
        <div className="flex flex-wrap gap-2">
          <PromptSuggestion onClick={() => setValue('Tell me a joke')}>
            Tell me a joke
          </PromptSuggestion>
          <PromptSuggestion onClick={() => setValue('How does this work?')}>
            How does this work?
          </PromptSuggestion>
          <PromptSuggestion onClick={() => setValue('Generate an image of a cat')}>
            Generate an image of a cat
          </PromptSuggestion>
          <PromptSuggestion onClick={() => setValue('Write a poem')}>
            Write a poem
          </PromptSuggestion>
          <PromptSuggestion onClick={() => setValue('Code a React component')}>
            Code a React component
          </PromptSuggestion>
        </div>

        <PromptInput value={value} onValueChange={setValue} onSubmit={handleSend}>
          <PromptInputTextarea placeholder="Type a message or click a suggestion..." />
          <PromptInputActions className="justify-end">
            <button
              className="btn btn-primary btn-sm btn-circle"
              onClick={handleSend}
              disabled={!value.trim()}
              aria-label="Send"
            >
              <span className="icon-[lucide--arrow-up] size-4" />
            </button>
          </PromptInputActions>
        </PromptInput>

        <p className="text-base-content/50 text-xs font-medium">Highlight mode</p>
        <div className="flex flex-col gap-1">
          <PromptSuggestion highlight="How to">How to create a React component</PromptSuggestion>
          <PromptSuggestion highlight="How to">How to optimize website performance</PromptSuggestion>
          <PromptSuggestion highlight="How to">How to implement dark mode in a web app</PromptSuggestion>
        </div>
      </div>
    </PageShell>
  )
}
