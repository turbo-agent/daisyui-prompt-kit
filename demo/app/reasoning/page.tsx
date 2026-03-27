'use client'

import { useState } from 'react'
import {
  Reasoning,
  ReasoningContent,
  ReasoningTrigger,
} from '@daisyui/prompt-kit'
import { PageShell } from '@/app/components/page-shell'

const reasoningText = `I calculated the best color balance for the image:

1. First, I analyzed the color of the car - a deep blue metallic finish
2. Then, I examined the color of the sky - overcast with neutral tones
3. Next, I considered the color of the grass - vibrant green in the foreground
4. I calculated the optimal white balance to enhance all elements
5. Applied selective color adjustments to maintain natural appearance
6. Final result: improved contrast and color harmony`

export default function ReasoningPage() {
  const [text, setText] = useState('')
  const [isStreaming, setIsStreaming] = useState(false)

  const handleGenerate = async () => {
    setIsStreaming(true)
    setText('')
    for (let i = 0; i <= reasoningText.length; i++) {
      setText(reasoningText.slice(0, i))
      await new Promise((r) => setTimeout(r, 20))
    }
    setIsStreaming(false)
  }

  return (
    <PageShell
      title="Reasoning"
      description="A collapsible reasoning trace display with markdown support."
    >
      <button
        className="btn btn-sm btn-outline w-fit"
        onClick={handleGenerate}
        disabled={isStreaming}
      >
        {isStreaming ? 'Generating...' : 'Generate Reasoning'}
      </button>

      <Reasoning isStreaming={isStreaming}>
        <ReasoningTrigger>Show reasoning</ReasoningTrigger>
        <ReasoningContent className="ml-2 border-l-2 border-base-300 px-2 pb-1">
          {text}
        </ReasoningContent>
      </Reasoning>
    </PageShell>
  )
}
