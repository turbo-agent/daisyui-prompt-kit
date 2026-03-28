'use client'

import { useState } from 'react'
import { ThinkingBar } from '@turbo-agent/daisyui-prompt-kit'
import { PageShell } from '@/app/components/page-shell'

export default function ThinkingBarPage() {
  const [thinking, setThinking] = useState(true)

  return (
    <PageShell title="Thinking Bar" description="A shimmer bar that indicates the model is thinking.">
      <button
        className="btn btn-sm btn-outline w-fit"
        onClick={() => setThinking((x) => !x)}
      >
        {thinking ? 'Stop' : 'Start'} Thinking
      </button>

      <p className="text-base-content/50 text-xs font-medium">Default</p>
      <ThinkingBar isThinking={thinking} text="Thinking" />

      <p className="text-base-content/50 text-xs font-medium">With onClick</p>
      <ThinkingBar
        isThinking={thinking}
        text="Reasoning through the problem"
        onClick={() => window.alert('Clicked')}
      />

      <p className="text-base-content/50 text-xs font-medium">With stop button</p>
      <ThinkingBar
        isThinking={thinking}
        text="Searching the web"
        onStop={() => setThinking(false)}
        stopLabel="Answer now"
      />
    </PageShell>
  )
}
